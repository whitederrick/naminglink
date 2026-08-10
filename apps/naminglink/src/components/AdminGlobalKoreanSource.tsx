import { getFormCopy } from "@/lib/i18n-form";
import { getResultCopy } from "@/lib/i18n-result";
import { getLandingCopy, hangulPronunciationCopy } from "@/lib/i18n";
import { globalNameToHangulService, services, type ServiceConfig } from "@/lib/services";

/**
 * **글로벌 전용 서비스의 한글 원본을 운영자가 확인하는 자리.**
 *
 * 글로벌 이름 → 한글 발음 · 글로벌 이름 → 한글 이름 두 화면은 한국 이름이 없는 사람을 위한
 * 것이라 **공개 화면에 한국어판을 두지 않는다**(`lib/route-locales.ts`가 막는다). 그런데
 * 이 저장소의 문구는 늘 **한국어로 먼저 쓰고 영어를 거쳐 21개 언어로** 옮겨 왔으므로, 뜻의
 * 기준이 되는 한국어 원문은 사전 안에 그대로 있다. 운영자가 그것을 읽을 곳이 필요하다
 * (사용자 요청, 2026-08-10).
 *
 * **읽기 전용이다.** 여기서 고치지 않는다 — 고칠 곳은 사전 파일이고, 고치면 번역기를 다시
 * 돌려야 21개 언어가 따라온다. 이 화면에서 값을 바꾸게 두면 한국어만 바뀌고 나머지 22개는
 * 옛 문구로 남는다.
 *
 * 공개로 새지 않게 하는 것이 이 화면의 유일한 위험이라 관리자 인증 뒤에 둔다.
 */

const KO = "ko" as const;

function Row({ label, value }: { label: string; value?: string | null }) {
  if (!value) return null;
  return (
    <div className="grid gap-1 border-b border-line py-2 last:border-b-0 sm:grid-cols-[10rem_minmax(0,1fr)] sm:gap-4">
      <span className="text-xs text-muted">{label}</span>
      <span className="whitespace-pre-wrap break-words text-sm">{value}</span>
    </div>
  );
}

function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="rounded-xl border border-line bg-surface p-4">
      <h3 className="mb-2 text-sm font-semibold">{title}</h3>
      <div className="grid">{children}</div>
    </section>
  );
}

/** 폼은 절 → 항목 → 선택지까지 내려간다. 운영자가 실제로 보는 순서 그대로 늘어놓는다. */
function FormOutline({ service }: { service: ServiceConfig }) {
  return (
    <div className="grid gap-3">
      {service.sections.map((section, si) => (
        <div key={si} className="rounded-lg border border-line/70 p-3">
          <p className="text-sm font-semibold">{section.title}</p>
          {section.description ? (
            <p className="mt-1 text-xs text-muted">{section.description}</p>
          ) : null}
          <div className="mt-2 grid gap-2">
            {section.fields.map((field) => (
              <div key={field.name} className="text-sm">
                <span className="font-medium">{field.label}</span>
                {field.hint ? (
                  <span className="ml-2 text-xs text-muted">{field.hint}</span>
                ) : null}
                {field.placeholder ? (
                  <span className="ml-2 text-xs text-muted">예: {field.placeholder}</span>
                ) : null}
                {field.options?.length ? (
                  <p className="mt-0.5 text-xs text-muted">
                    선택지 — {field.options.map((o) => o.label).join(" · ")}
                  </p>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function ServiceBlock({ service, landing }: { service: ServiceConfig; landing?: { title: string; description: string } }) {
  return (
    <div className="grid gap-3">
      <Card title={`랜딩 · ${service.slug}`}>
        <Row label="첫 화면 제목" value={landing?.title} />
        <Row label="첫 화면 설명" value={landing?.description} />
        <Row label="눈썹 문구" value={service.eyebrow} />
        <Row label="제목" value={service.title} />
        <Row label="대상" value={service.audience} />
        <Row label="설명" value={service.description} />
        <Row label="약속" value={service.promise} />
        <Row label="결과 라벨" value={service.resultLabel} />
      </Card>
      <Card title={`입력 화면 · ${service.slug}`}>
        <FormOutline service={service} />
      </Card>
    </div>
  );
}

export function AdminGlobalKoreanSource() {
  const landing = getLandingCopy(KO);
  const form = getFormCopy(KO);
  const result = getResultCopy(KO);

  return (
    <div className="grid gap-6">
      <header className="grid gap-2">
        <h2 className="text-lg font-semibold">글로벌 화면의 한글 원본</h2>
        <p className="text-sm text-muted">
          글로벌 전용 서비스 두 화면의 <strong>한국어 원문</strong>입니다. 공개 화면에는 한국어판이
          없고(주소로도 <code>?lang=ko</code>로도 열리지 않습니다), 이 자리에서만 봅니다.
        </p>
        <p className="text-sm text-muted">
          <strong>읽기 전용입니다.</strong> 문구를 고치려면 사전 파일을 고치고 번역기를 다시 돌려야
          22개 언어가 따라옵니다. 여기서 바꾸면 한국어만 달라집니다.
        </p>
      </header>

      <ServiceBlock
        service={services.globalToKorean}
        landing={landing.services.globalToKorean}
      />
      <ServiceBlock
        service={globalNameToHangulService}
        landing={{
          title: hangulPronunciationCopy[KO].title,
          description: hangulPronunciationCopy[KO].description,
        }}
      />

      {/* **항목을 손으로 고르지 않는다.** 사전은 계속 늘어나는데 여기서 몇 개만 골라 두면
          새로 생긴 문구는 이 화면에 영영 안 나오고, 그 사실을 아무도 모른다. 문자열인 항목을
          전부 훑는다(`reanalysisCountdown`처럼 함수인 항목은 화면에 그릴 것이 없어 뺀다). */}
      <Card title={`공통 — 입력 화면 문구 (${Object.keys(form).length}개)`}>
        {Object.entries(form).map(([key, value]) =>
          typeof value === "string" ? <Row key={key} label={key} value={value} /> : null,
        )}
      </Card>

      <Card title={`공통 — 결과 화면 문구 (${Object.keys(result).length}개)`}>
        {Object.entries(result).map(([key, value]) =>
          typeof value === "string" ? <Row key={key} label={key} value={value} /> : null,
        )}
      </Card>
    </div>
  );
}
