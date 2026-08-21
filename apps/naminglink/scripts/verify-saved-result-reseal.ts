// 저장 기록 재봉인 검사.
// AUDIT_SIDE_EFFECTS: 저장된 기록이 없으면 generateNamingResult 를 실호출한다 — OpenAI 비용
//
// 로그인한 회원이 "저장 결과 열기"를 누르면 `/api/account/results/[id]`가 `naming_logs`의
// **평문** 기록을 읽어 생성 때와 같은 규칙으로 **다시 봉인해** 내려보낸다. 이 재봉인이
// 빠지거나 먹지 않으면 **기록 열람이 잠금을 우회하는 뒷문**이 된다 — 광고도 결제도 없이
// 잠긴 후보가 통째로 나간다.
//
// 그 라우트는 로그인 토큰이 있어야 태울 수 있어 화면으로는 확인하지 못했다. 대신 **그 라우트가
// 하는 일 그대로**(저장된 행을 읽어 sealCandidates에 넣는 것)를 실제 저장 데이터에 대고 돌린다.
// 위험이 있는 자리는 함수가 아니라 **데이터 모양**이다:
//   - 저장된 행이 이미 봉인문이면(저장 경로 회귀) 두 겹이 되어 화면이 열어도 또 봉인문이 나온다
//   - 옛 기록의 모양이 달라 sealCandidates가 조용히 그냥 통과시키면 평문이 그대로 나간다
//   - 봉인 뒤에도 잠긴 후보의 내용이 직렬화 결과에 남아 있으면 봉인한 척만 한 것이다
//
// 실행: apps/naminglink 에서
//   node_modules/.bin/tsx scripts/verify-saved-result-reseal.ts
//
// **이름은 찍지 않는다.** 저장 기록은 회원의 개인정보다. 구조와 판정만 출력한다.
import { createRequire } from "node:module";
import { readFileSync } from "node:fs";

import pg from "pg";

// `server-only` 가드만 비운다(verify-candidate-seal.ts와 같은 방식). 가드는 실제 코드에
// 그대로 남아 클라이언트 임포트를 막는다. 봉인 모듈은 이 줄 **뒤에** 동적으로 불러온다.
const nodeRequire = createRequire(import.meta.url);
nodeRequire.cache[nodeRequire.resolve("server-only")] = {
  exports: {},
} as unknown as NodeModule;

const env = Object.fromEntries(
  readFileSync(new URL("../.env.local", import.meta.url), "utf8")
    .split(/\r?\n/)
    .filter((line) => line.includes("=") && !line.trimStart().startsWith("#"))
    .map((line) => {
      const index = line.indexOf("=");
      return [line.slice(0, index).trim(), line.slice(index + 1).trim().replace(/^"|"$/g, "")];
    }),
);

if (!env.SUPABASE_DB_URL) {
  console.error("SUPABASE_DB_URL이 .env.local에 없습니다.");
  process.exit(1);
}

// 운영 키가 있으면 그것을 쓰고, 없으면 검사용 키를 만든다. 봉인→해제를 같은 키로 하므로
// 어느 쪽이든 판정은 같다. 키가 아예 없으면 sealCandidates가 잠긴 후보를 **버리므로**
// 그 상태로 돌리면 검사 자체가 뜻이 없다.
process.env.RESULT_SEAL_SECRET =
  env.RESULT_SEAL_SECRET || "verify-saved-result-reseal-key-0123456789";

/**
 * **운영 모드를 기준으로 검사한다** (2026-08-11).
 *
 * 심사 모드(`NEXT_PUBLIC_AD_MODE`가 `live`가 아님)에서는 `sealCandidates`가 일부러 봉인하지
 * 않는다 — 관문이 없어 아무도 열 수 없는 잠금을 만들지 않기 위해서다. 그 상태로 이 검사를
 * 돌리면 **볼 봉인이 없어 누출 검사가 0건**이 되고, 이 파일은 그것을 정직하게 실패로 센다
 * (「검사 0건은 통과가 아니다」).
 *
 * 그런데 그 실패는 **뒷문이 생겼다**는 뜻이 아니라 **다른 모드를 보고 있다**는 뜻이다. 출력만
 * 봐서는 둘이 구분되지 않으므로 여기서 모드를 못 박는다. 재봉인이 실제로 먹는지는 광고가
 * 도는 상태(=봉인이 도는 상태)에서 재는 것이 맞다.
 *
 * 값은 봉인 모듈이 읽히기 **전에** 정해져야 한다(`lib/ads.ts`가 로드 시점에 평가한다).
 * 같은 이유로 `verify-candidate-seal.ts`도 모드를 고정한다.
 */
process.env.NEXT_PUBLIC_AD_MODE = "live";

let failures = 0;
/** 실제로 돌아간 누출 검사의 수. 0이면 "이상 없음"은 아무 뜻이 없다. */
let totalLeakChecks = 0;
let controlDone = false;
function fail(label: string, detail = "") {
  failures += 1;
  console.error(`  ✗ ${label}${detail ? ` — ${detail}` : ""}`);
}

function allStrings(value: unknown, out: string[] = []): string[] {
  if (typeof value === "string") {
    if (value.length >= 8) out.push(value);
    return out;
  }
  if (Array.isArray(value)) {
    value.forEach((entry) => allStrings(entry, out));
    return out;
  }
  if (value && typeof value === "object") {
    Object.values(value).forEach((entry) => allStrings(entry, out));
  }
  return out;
}

/**
 * `index`번 후보**에만** 있는 가장 긴 문자열. 봉인 뒤에도 이것이 남아 있으면 평문이 샌 것이다.
 *
 * **"가장 긴 문자열"로는 안 된다.** 결과에는 후보와 무관하게 공통인 필드가 있고
 * (`common_analysis` 같은 사주 안내문), 그 값은 무료로 열린 후보에도 그대로 들어 있다.
 * 그것을 기준으로 삼으면 봉인이 멀쩡한데도 "샜다"고 나온다(실제로 그렇게 한 번 걸렸다).
 * 봉인이 지켜야 하는 것은 **그 후보만의 내용**이다.
 */
function distinctiveString(candidates: unknown[], index: number): string | null {
  const others = JSON.stringify(candidates.filter((_, i) => i !== index));
  const mine = allStrings(candidates[index]).sort((a, b) => b.length - a.length);
  return mine.find((text) => !others.includes(text)) ?? null;
}

// tsx가 이 파일을 CJS로 변환하므로 최상위 await를 쓸 수 없다. 전부 main 안에 둔다.
async function main() {
  const { sealCandidates, openSeal, FREE_CANDIDATE_COUNT } = await import(
    "../src/lib/result-seal"
  );
  const { isLockedCandidate } = await import("../src/lib/candidate-seal");

  const client = new pg.Client({ connectionString: env.SUPABASE_DB_URL });
  await client.connect();

  try {
    const { rows } = await client.query(
      `select id, service_type, generated_names, created_at
         from public.naming_logs
        order by created_at desc`,
    );

    console.log(`\n저장 기록 ${rows.length}건`);

    /**
     * 저장된 기록이 없으면 **직접 하나 만들어 태운다.**
     *
     * 기록이 0건이라고 검사를 건너뛰면 "확인했다"가 "확인할 것이 없었다"와 구별되지 않는다.
     * 한자 흐름은 규칙 엔진이라 AI를 부르지 않으므로 원가 없이 진짜 결과를 만들 수 있고,
     * **저장 라우트가 `naming_logs`에 넣는 값과 같은 것**(정렬·유료필드 제거까지 끝난 평문)을
     * 그대로 재현한다. DB에 행을 남기지 않는다 — 만들어서 바로 태우고 버린다.
     */
    if (rows.length === 0) {
      console.log("  저장된 기록이 없어, 같은 모양의 결과를 직접 만들어 태운다.\n");
      const { generateNamingResult } = await import("../src/lib/openai");
      const { sortResultCandidates } = await import("../src/lib/candidate-order");
      const generation = await generateNamingResult("HANJA_MEANING_MATCH", {
        familyName: "김",
        givenNameHangul: "민준",
        gender: "male",
      });
      // `api/naming/route.ts`가 저장 직전에 하는 것과 같은 처리(유료 상세 제거 + 정렬).
      const stripped = JSON.parse(JSON.stringify(generation.result)) as Record<string, unknown>;
      if (Array.isArray(stripped.candidates)) {
        stripped.candidates = stripped.candidates.map((candidate) => {
          const next = { ...(candidate as Record<string, unknown>) };
          delete next.story;
          delete next.practical_analysis;
          return next;
        });
      }
      rows.push({
        id: "synthetic-fixture",
        service_type: "HANJA_MEANING_MATCH(합성)",
        generated_names: sortResultCandidates(stripped),
        created_at: new Date().toISOString(),
      });
    } else {
      console.log("");
    }

    const summary = new Map<string, { rows: number; sealed: number; nothingToLock: number }>();

    for (const row of rows) {
      const label = `${row.service_type} ${String(row.id).slice(0, 8)}`;
      const stat =
        summary.get(row.service_type) ?? { rows: 0, sealed: 0, nothingToLock: 0 };
      stat.rows += 1;
      summary.set(row.service_type, stat);

      const stored = row.generated_names as Record<string, unknown> | null;
      const storedText = JSON.stringify(stored);

      // ① 저장된 것은 평문이어야 한다. 봉인문이 저장돼 있으면 저장 경로가 회귀한 것이고,
      //    재봉인이 두 겹이 되어 화면이 열어도 또 봉인문이 나온다.
      if (storedText.includes('"__locked"')) {
        fail(`${label}: 저장된 행에 봉인문이 들어 있다(저장은 평문이어야 한다)`);
        continue;
      }

      const before = Array.isArray(stored?.candidates)
        ? (stored!.candidates as unknown[])
        : null;
      if (!before) {
        fail(`${label}: candidates 배열이 없다 — 재봉인이 그냥 통과한다`);
        continue;
      }

      // ② 라우트가 하는 그대로.
      const after = sealCandidates(stored) as Record<string, unknown>;
      const afterCandidates = after.candidates as unknown[];

      if (afterCandidates.length !== before.length) {
        fail(`${label}: 후보 수가 바뀌었다 ${before.length} → ${afterCandidates.length}`);
      }

      if (before.length <= FREE_CANDIDATE_COUNT) {
        // 잠글 것이 없는 기록. 회귀가 아니라 정상이다.
        stat.nothingToLock += 1;
        continue;
      }

      const open = afterCandidates.filter((c) => !isLockedCandidate(c));
      const locked = afterCandidates.filter((c) => isLockedCandidate(c));

      if (open.length !== FREE_CANDIDATE_COUNT) {
        fail(`${label}: 열린 후보가 ${open.length}개 (${FREE_CANDIDATE_COUNT}개여야 한다)`);
      }
      if (locked.length !== before.length - FREE_CANDIDATE_COUNT) {
        fail(`${label}: 잠긴 후보가 ${locked.length}개`);
      }

      // ③ 잠긴 자리에는 봉인문 말고 아무것도 없어야 한다.
      for (const entry of locked) {
        const keys = Object.keys(entry as object).sort().join(",");
        if (keys !== "__locked,seal") {
          fail(`${label}: 잠긴 자리에 다른 필드가 있다 (${keys})`);
        }
      }

      // ④ 봉인 뒤 직렬화 결과에 그 후보만의 내용이 남아 있으면 봉인한 척만 한 것이다.
      //    **봉인 전 배열 기준으로 자리를 맞춘다.** sealCandidates가 정렬을 하므로 봉인 뒤의
      //    i번과 봉인 전의 i번은 다른 후보다. 여기서는 "봉인 뒤에 잠긴 것들의 원본 내용이
      //    어디에도 남지 않았는가"를 보므로, 원본 배열을 그대로 훑으면 된다.
      const afterText = JSON.stringify(after);
      const openTexts = afterCandidates
        .filter((c) => !isLockedCandidate(c))
        .map((c) => JSON.stringify(c));
      let leakChecked = 0;
      let leakSkipped = 0;
      for (let i = 0; i < before.length; i += 1) {
        const mark = distinctiveString(before, i);
        if (!mark) {
          leakSkipped += 1;
          continue;
        }
        // 무료로 열린 후보의 내용은 남아 있는 것이 정상이다.
        if (openTexts.some((text) => text.includes(mark))) continue;
        leakChecked += 1;
        if (afterText.includes(mark)) {
          fail(`${label}: 잠긴 후보의 고유 내용이 평문으로 남아 있다`);
          break;
        }
      }
      totalLeakChecks += leakChecked;
      if (leakChecked === 0 && locked.length > 0) {
        console.warn(
          `  ! ${label}: 후보마다 고유한 문자열이 없어 누출 검사를 건너뛰었다` +
            (leakSkipped ? ` (${leakSkipped}건)` : ""),
        );
      }

      /**
       * **대조군 — 검사가 눈을 뜨고 있는지 본다.**
       *
       * 봉인하지 않은 원본에 같은 기준을 대면 반드시 걸려야 한다. 안 걸리면 위의 "이상 없음"은
       * 봉인이 멀쩡해서가 아니라 **검사가 아무것도 못 보고 있어서**일 수 있다. 실제로 이 검사는
       * 처음에 기준이 틀려 멀쩡한 봉인을 누출로 잡았고(공통 안내문), 기준을 좁히는 과정에서
       * 반대로 아무것도 안 보게 될 수도 있었다.
       */
      if (!controlDone && locked.length > 0) {
        const unsealedText = JSON.stringify(before);
        const caught = before.some((_, i) => {
          const mark = distinctiveString(before, i);
          if (!mark) return false;
          if (openTexts.some((text) => text.includes(mark))) return false;
          return unsealedText.includes(mark);
        });
        if (!caught) {
          fail("대조군: 봉인하지 않은 원본에서도 누출을 못 잡는다 — 누출 검사가 눈을 감고 있다");
        } else {
          console.log("  ✓ 대조군: 봉인하지 않은 원본은 누출로 잡힌다(검사가 살아 있다)");
        }
        controlDone = true;
      }

      // ⑤ 풀면 저장된 후보와 같아야 한다(자리 번호까지).
      for (let i = 0; i < afterCandidates.length; i += 1) {
        const entry = afterCandidates[i];
        if (!isLockedCandidate(entry)) continue;
        try {
          const opened = openSeal(entry.seal);
          if (opened.index !== i) {
            fail(`${label}: 봉인문의 자리 번호가 ${opened.index} (기대 ${i})`);
          }
          // 봉인 전에 정렬이 일어나므로 자리로는 비교할 수 없다. 내용이 저장된 후보 중
          // 하나와 그대로 같은지로 확인한다.
          const openedText = JSON.stringify(opened.candidate);
          if (!before.some((candidate) => JSON.stringify(candidate) === openedText)) {
            fail(`${label}: 푼 내용이 저장된 후보와 다르다`);
          }
        } catch (error) {
          fail(`${label}: 봉인문을 풀지 못했다`, (error as Error).message);
        }
      }

      stat.sealed += 1;
    }

    console.log("\n서비스별");
    for (const [service, stat] of [...summary].sort()) {
      console.log(
        `  ${service.padEnd(24)} 행 ${stat.rows} · 재봉인 확인 ${stat.sealed}` +
          (stat.nothingToLock ? ` · 잠글 것 없음 ${stat.nothingToLock}` : ""),
      );
    }
    console.log(`\n실제로 돌아간 누출 검사 ${totalLeakChecks}건`);
    if (totalLeakChecks === 0) {
      fail("누출 검사가 한 건도 돌지 않았다 — 이 결과로는 아무것도 보증할 수 없다");
    }
  } finally {
    await client.end();
  }
}

main()
  .then(() => {
    if (failures > 0) {
      console.error(`\n실패 ${failures}건`);
      process.exit(1);
    }
    console.log("\n재봉인 이상 없음");
  })
  .catch((error) => {
    console.error(`\n검사를 마치지 못했다: ${(error as Error).message}`);
    process.exit(1);
  });
