import Link from "next/link";
import { Database, FileText, ShieldCheck, UploadCloud } from "lucide-react";
import { OFFICIAL_HANJA_RULES, OFFICIAL_HANJA_SOURCE } from "@/lib/hanja";

const tables = [
  ["official_hanja_sources", "PDF 원본, 버전, 시행일, SHA-256, 운영 상태"],
  ["official_hanja_rules", "지정 발음, 첫소리 예외, 변형 한자, 부수 교체 규칙"],
  ["official_hanja_entries", "음절, 한자, 지정 발음, 의미, 표 위치, 검수 상태"],
  ["official_hanja_variants", "동자, 속자, 약자, 부수 변형, 동일 한자 관계"],
];

const commands = [
  {
    label: "PDF 원본 분석",
    value:
      'pnpm hanja:prepare-pdf "C:\\Users\\white\\Downloads\\hanja.pdf" -- --render --max-pages 3',
  },
  {
    label: "검수 JSON import",
    value: "pnpm hanja:import data/hanja/official-hanja.sample.json",
  },
];

export default function AdminHanjaPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="mx-auto grid w-full max-w-7xl gap-6 px-5 py-6 sm:px-8 lg:px-10">
        <header className="flex flex-col gap-4 border-b border-line pb-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <Link
              href="/admin"
              className="text-sm text-muted hover:text-foreground"
            >
              시스템 관리자
            </Link>
            <h1 className="mt-2 text-3xl font-semibold tracking-normal">
              인명용 한자 DB
            </h1>
          </div>
          <span className="inline-flex w-fit items-center gap-2 rounded-lg border border-line bg-surface px-3 py-2 text-sm text-muted">
            <Database aria-hidden="true" size={16} />
            production 행만 사용자 추천 기준으로 공개
          </span>
        </header>

        <section className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
          <article className="rounded-lg border border-line bg-surface p-5 shadow-sm">
            <div className="flex items-center gap-2">
              <FileText
                aria-hidden="true"
                className="text-brand-teal"
                size={20}
              />
              <h2 className="text-lg font-semibold">등록 기준 원본</h2>
            </div>
            <dl className="mt-5 grid gap-3 text-sm">
              {[
                ["문서", OFFICIAL_HANJA_SOURCE.title],
                ["근거", OFFICIAL_HANJA_SOURCE.ruleReference],
                ["버전", OFFICIAL_HANJA_SOURCE.versionLabel],
                ["시행일", OFFICIAL_HANJA_SOURCE.effectiveDate],
                ["원본 파일", "C:\\Users\\white\\Downloads\\hanja.pdf"],
              ].map(([label, value]) => (
                <div key={label} className="grid gap-1">
                  <dt className="font-medium">{label}</dt>
                  <dd className="text-muted">{value}</dd>
                </div>
              ))}
            </dl>
          </article>

          <article className="rounded-lg border border-line bg-surface p-5 shadow-sm">
            <div className="flex items-center gap-2">
              <ShieldCheck
                aria-hidden="true"
                className="text-brand-teal"
                size={20}
              />
              <h2 className="text-lg font-semibold">반영할 공식 주의사항</h2>
            </div>
            <div className="mt-5 grid gap-3">
              {OFFICIAL_HANJA_RULES.map((rule) => (
                <div
                  key={rule.code}
                  className="rounded-lg border border-line bg-background p-4"
                >
                  <p className="font-semibold">{rule.title}</p>
                  <p className="mt-1 text-sm leading-6 text-muted">
                    {rule.description}
                  </p>
                </div>
              ))}
            </div>
          </article>
        </section>

        <section className="grid gap-5 lg:grid-cols-2">
          <article className="rounded-lg border border-line bg-surface p-5 shadow-sm">
            <div className="flex items-center gap-2">
              <UploadCloud
                aria-hidden="true"
                className="text-brand-teal"
                size={20}
              />
              <h2 className="text-lg font-semibold">PDF → DB 작업 흐름</h2>
            </div>
            <ol className="mt-5 grid list-decimal gap-3 pl-5 text-sm leading-6 text-muted">
              <li>PDF 원본의 SHA-256, 페이지 수, 렌더링 이미지를 manifest로 기록합니다.</li>
              <li>OCR 또는 수기 검수로 음절, 한자, 지정 발음, 의미, 표 위치를 JSON으로 정리합니다.</li>
              <li>Supabase SQL Editor에서 `docs/supabase_schema.sql`을 실행합니다.</li>
              <li>`pnpm hanja:import`로 source, rule, entry, variant 테이블에 upsert합니다.</li>
              <li>검수 완료 행만 `production` 상태로 승격해 사용자 추천에 사용합니다.</li>
            </ol>
          </article>

          <article className="rounded-lg border border-line bg-surface p-5 shadow-sm">
            <h2 className="text-lg font-semibold">운영 명령</h2>
            <div className="mt-5 grid gap-3">
              {commands.map((command) => (
                <div key={command.label} className="grid gap-2">
                  <p className="text-sm font-medium">{command.label}</p>
                  <code className="block overflow-x-auto rounded-lg bg-foreground px-3 py-3 text-sm text-background">
                    {command.value}
                  </code>
                </div>
              ))}
            </div>
          </article>
        </section>

        <section className="rounded-lg border border-line bg-surface p-5 shadow-sm">
          <h2 className="text-lg font-semibold">DB 테이블</h2>
          <div className="mt-5 overflow-hidden rounded-lg border border-line">
            <table className="w-full border-collapse text-left text-sm">
              <thead className="bg-surface-strong">
                <tr>
                  <th className="px-4 py-3 font-semibold">테이블</th>
                  <th className="px-4 py-3 font-semibold">역할</th>
                </tr>
              </thead>
              <tbody>
                {tables.map(([table, description]) => (
                  <tr key={table} className="border-t border-line">
                    <td className="px-4 py-3 font-mono text-xs">{table}</td>
                    <td className="px-4 py-3 text-muted">{description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </section>
    </main>
  );
}
