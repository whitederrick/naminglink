"use client";

import { useMemo, useState, type ReactNode } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// 관리자 화면 공용 UI. 콘솔·한자·기준 데이터·콘텐츠 관리가 같은 표·페이징·필터를 쓰도록
// 한 곳에 모은다. 스타일 토큰은 기존 관리자 화면과 동일(surface/line/foreground 계열).

const number = new Intl.NumberFormat("ko-KR");

export function PageHeader({
  eyebrow = "Naming-Link Operations",
  title,
  description,
  children,
}: {
  eyebrow?: string;
  title: string;
  description: string;
  children?: ReactNode;
}) {
  return (
    <header className="mb-6 flex flex-wrap items-end justify-between gap-4">
      <div className="max-w-3xl">
        <p className="text-sm text-brand-teal">{eyebrow}</p>
        <h1 className="mt-1 text-3xl font-semibold">{title}</h1>
        <p className="mt-2 text-sm leading-6 text-muted">{description}</p>
      </div>
      {children}
    </header>
  );
}

export function Metric({ label, value, note }: { label: string; value: ReactNode; note?: string }) {
  return (
    <article className="rounded-xl border border-line bg-surface p-5 shadow-sm">
      <p className="text-sm text-muted">{label}</p>
      <p className="mt-2 text-3xl font-semibold">{value}</p>
      {note ? <p className="mt-2 text-xs text-muted">{note}</p> : null}
    </article>
  );
}

export function Empty({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-xl border border-dashed border-line bg-surface p-10 text-center text-sm text-muted">
      {children}
    </div>
  );
}

export function Table({ headers, rows }: { headers: string[]; rows: ReactNode[][] }) {
  if (!rows.length) return <Empty>조건에 맞는 데이터가 없습니다. 필터를 바꾸거나 기간을 넓혀 보세요.</Empty>;
  return (
    <div className="overflow-x-auto rounded-xl border border-line bg-surface">
      <table className="w-full min-w-[720px] text-left text-sm">
        <thead className="bg-surface-strong">
          <tr>{headers.map((header) => <th key={header} className="px-4 py-3 font-semibold">{header}</th>)}</tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index} className="border-t border-line">
              {row.map((cell, cellIndex) => (
                <td key={cellIndex} className="px-4 py-3 text-muted first:text-foreground">{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export const ADMIN_PAGE_SIZE = 10;

// 필터가 바뀌면(resetKey 변경) 1페이지로 돌아가는 클라이언트 페이징.
// 관리자 목록은 서버에서 상한을 걸어 내려받은 데이터라 클라이언트 페이징으로 충분하다.
export function usePagedList<T>(items: T[], resetKey: string) {
  const [page, setPage] = useState(1);
  const [lastResetKey, setLastResetKey] = useState(resetKey);
  if (lastResetKey !== resetKey) {
    setLastResetKey(resetKey);
    setPage(1);
  }
  const totalPages = Math.max(1, Math.ceil(items.length / ADMIN_PAGE_SIZE));
  const safePage = Math.min(page, totalPages);
  const pageItems = useMemo(
    () => items.slice((safePage - 1) * ADMIN_PAGE_SIZE, safePage * ADMIN_PAGE_SIZE),
    [items, safePage],
  );
  return { pageItems, page: safePage, setPage, totalPages, total: items.length };
}

export function Pagination({
  page,
  totalPages,
  total,
  onChange,
}: {
  page: number;
  totalPages: number;
  total: number;
  onChange: (page: number) => void;
}) {
  if (total === 0) return null;
  return (
    <div className="flex flex-wrap items-center justify-between gap-3 text-sm text-muted">
      <p>총 {number.format(total)}건 · {page}/{totalPages} 페이지</p>
      {totalPages > 1 ? (
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => onChange(page - 1)}
            disabled={page <= 1}
            className="inline-flex h-9 items-center gap-1 rounded-lg border border-line bg-surface px-3 disabled:opacity-40"
          >
            <ChevronLeft size={14} />이전
          </button>
          <button
            type="button"
            onClick={() => onChange(page + 1)}
            disabled={page >= totalPages}
            className="inline-flex h-9 items-center gap-1 rounded-lg border border-line bg-surface px-3 disabled:opacity-40"
          >
            다음<ChevronRight size={14} />
          </button>
        </div>
      ) : null}
    </div>
  );
}

export function FilterBar({ children }: { children: ReactNode }) {
  return <div className="flex flex-wrap items-center gap-2">{children}</div>;
}

export function FilterSearch({
  value,
  onChange,
  placeholder,
}: {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
}) {
  return (
    <input
      type="search"
      value={value}
      onChange={(event) => onChange(event.target.value)}
      placeholder={placeholder}
      className="h-10 w-56 rounded-lg border border-line bg-surface px-3 text-sm"
    />
  );
}

export function FilterSelect({
  value,
  onChange,
  options,
  label,
}: {
  value: string;
  onChange: (value: string) => void;
  options: Array<{ value: string; label: string }>;
  label: string;
}) {
  return (
    <label className="flex items-center gap-2 text-sm text-muted">
      {label}
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="h-10 rounded-lg border border-line bg-surface px-3 text-sm text-foreground"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>{option.label}</option>
        ))}
      </select>
    </label>
  );
}

// 일별 추이 미니 막대 차트. 단일 계열(제목이 곧 범례)이라 별도 범례 없이 최고점만 직접
// 라벨링한다. 색은 흰 서피스 대비 검증을 통과한 틸 단계(#0d9488) 고정.
const CHART_BAR_COLOR = "#0d9488";
const chartDate = new Intl.DateTimeFormat("ko-KR", { month: "short", day: "numeric" });

export function DailyTrendChart({
  title,
  points,
}: {
  title: string;
  points: Array<{ day: string; value: number }>;
}) {
  const recent = points.slice(-30);
  const max = Math.max(...recent.map((point) => point.value), 0);
  const peakIndex = recent.findIndex((point) => point.value === max);
  return (
    <section className="rounded-xl border border-line bg-surface p-5 shadow-sm">
      <div className="flex items-baseline justify-between gap-3">
        <h3 className="text-sm font-semibold">{title}</h3>
        {max > 0 ? (
          <p className="text-xs text-muted">최고 {number.format(max)}</p>
        ) : null}
      </div>
      {recent.length === 0 || max === 0 ? (
        <p className="mt-6 rounded-lg border border-dashed border-line p-4 text-center text-xs text-muted">
          집계된 추이가 없습니다.
        </p>
      ) : (
        <>
          <div className="mt-4 flex h-24 items-end gap-[2px]" role="img" aria-label={`${title} 일별 추이`}>
            {recent.map((point, index) => {
              const height = point.value > 0 ? Math.max((point.value / max) * 100, 4) : 0;
              const label = `${chartDate.format(new Date(point.day))} · ${title} ${number.format(point.value)}`;
              return (
                <div key={point.day} className="group relative flex h-full flex-1 items-end" title={label}>
                  {point.value > 0 ? (
                    <div
                      className="w-full rounded-t-[3px] transition-opacity group-hover:opacity-75"
                      style={{ height: `${height}%`, backgroundColor: CHART_BAR_COLOR }}
                    />
                  ) : (
                    <div className="h-[2px] w-full bg-line" />
                  )}
                  {index === peakIndex ? (
                    <span className="pointer-events-none absolute -top-4 left-1/2 -translate-x-1/2 text-[10px] text-muted">
                      {number.format(point.value)}
                    </span>
                  ) : null}
                </div>
              );
            })}
          </div>
          <div className="mt-2 flex justify-between text-[11px] text-muted">
            <span>{chartDate.format(new Date(recent[0].day))}</span>
            <span>{chartDate.format(new Date(recent[recent.length - 1].day))}</span>
          </div>
        </>
      )}
    </section>
  );
}
