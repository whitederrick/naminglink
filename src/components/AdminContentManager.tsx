"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { FilePenLine, LogOut, Plus, Save, Send, Trash2 } from "lucide-react";
import { getSupabaseBrowserClient } from "@/lib/supabase-browser";
import {
  fallbackFooterContent,
  getFallbackPolicyDocument,
  type FooterContent,
  type LegalDocumentKind,
  type PolicyDocumentContent,
} from "@/lib/site-content";
import { supportedLocales, type Locale } from "@/lib/services";

type EditorKind = LegalDocumentKind | "footer";
type EditorContent = PolicyDocumentContent | FooterContent;

const editorLabels: Record<EditorKind, string> = {
  terms: "이용약관",
  privacy: "개인정보처리방침",
  refund: "환불정책",
  pricing: "요금안내",
  footer: "푸터 정보",
};

const footerFieldOrder: Array<keyof FooterContent> = [
  "companyName",
  "representative",
  "businessNumber",
  "address",
  "customerCenter",
  "email",
  "privacyOfficer",
  "mailOrderNumber",
  "hostingProvider",
  "serviceName",
  "subtitle",
  "copyrightYear",
];

const footerFieldLabels: Record<keyof FooterContent, string> = {
  companyName: "상호",
  serviceName: "서비스명",
  subtitle: "서브 타이틀",
  representative: "대표자",
  businessNumber: "사업자등록번호",
  mailOrderNumber: "통신판매업 신고번호",
  address: "주소",
  customerCenter: "고객센터",
  email: "이메일",
  privacyOfficer: "개인정보 보호책임자",
  hostingProvider: "호스팅 제공",
  copyrightYear: "저작권 연도",
};

function isAdmin(metadata: Record<string, unknown>) {
  return (
    metadata.role === "admin" ||
    metadata.role === "super_admin" ||
    (Array.isArray(metadata.roles) &&
      metadata.roles.some(
        (role) => role === "admin" || role === "super_admin",
      ))
  );
}

function splitParagraphs(value: string) {
  return value
    .split(/\n\s*\n/)
    .map((item) => item.trim())
    .filter(Boolean);
}

export function AdminContentManager() {
  const [kind, setKind] = useState<EditorKind>("terms");
  const [locale, setLocale] = useState<Locale>("ko");
  const [content, setContent] = useState<EditorContent>(
    getFallbackPolicyDocument("terms"),
  );
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [status, setStatus] = useState<{
    draftVersion: number;
    publishedVersion: number;
    updatedAt: string | null;
    publishedAt: string | null;
  }>({
    draftVersion: 0,
    publishedVersion: 0,
    updatedAt: null,
    publishedAt: null,
  });

  const loadContent = useCallback(
    async (token: string, nextKind: EditorKind, nextLocale: Locale) => {
      setLoading(true);
      setError(null);
      setMessage(null);
      const query =
        nextKind === "footer"
          ? "kind=footer&locale=global"
          : `kind=${nextKind}&locale=${nextLocale}`;
      const response = await fetch(`/api/admin/site-content?${query}`, {
        headers: { Authorization: `Bearer ${token}` },
        cache: "no-store",
      });
      const payload = await response.json();
      setLoading(false);

      if (!response.ok) {
        setError(payload.error ?? "콘텐츠를 불러오지 못했습니다.");
        return;
      }

      setContent(
        payload.draft ??
          (nextKind === "footer"
            ? fallbackFooterContent
            : getFallbackPolicyDocument(nextKind)),
      );
      setStatus({
        draftVersion: payload.draftVersion,
        publishedVersion: payload.publishedVersion,
        updatedAt: payload.updatedAt,
        publishedAt: payload.publishedAt,
      });
    },
    [],
  );

  useEffect(() => {
    async function initialize() {
      const supabase = getSupabaseBrowserClient();

      if (!supabase) {
        setError("Supabase 운영자 인증이 설정되지 않았습니다.");
        setLoading(false);
        return;
      }

      const { data } = await supabase.auth.getSession();
      const session = data.session;

      if (!session || !isAdmin(session.user.app_metadata ?? {})) {
        setError("운영자 로그인이 필요합니다.");
        setLoading(false);
        return;
      }

      setAccessToken(session.access_token);
      await loadContent(session.access_token, kind, locale);
    }

    void initialize();
  }, [kind, locale, loadContent]);

  async function switchEditor(nextKind: EditorKind) {
    setKind(nextKind);
    if (!accessToken) {
      setContent(
        nextKind === "footer"
          ? fallbackFooterContent
          : getFallbackPolicyDocument(nextKind),
      );
    }
  }

  async function save(action: "save_draft" | "publish") {
    if (!accessToken) {
      setError("운영자 로그인이 필요합니다.");
      return;
    }

    setSaving(true);
    setError(null);
    setMessage(null);
    const response = await fetch("/api/admin/site-content", {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        kind,
        locale: kind === "footer" ? "global" : locale,
        content,
        action,
      }),
    });
    const payload = await response.json();
    setSaving(false);

    if (!response.ok) {
      setError(payload.error ?? "콘텐츠 저장에 실패했습니다.");
      return;
    }

    setStatus((current) => ({
      ...current,
      draftVersion: payload.draftVersion,
      publishedVersion: payload.publishedVersion,
      updatedAt: payload.updatedAt,
      publishedAt:
        action === "publish" ? payload.updatedAt : current.publishedAt,
    }));
    setMessage(
      action === "publish"
        ? "게시되었습니다. 공개 화면에 반영됩니다."
        : "초안으로 저장되었습니다.",
    );
  }

  async function logout() {
    const supabase = getSupabaseBrowserClient();
    await supabase?.auth.signOut();
    window.location.href = "/naming-artist/login";
  }

  const policyContent = kind === "footer" ? null : (content as PolicyDocumentContent);
  const footerContent = kind === "footer" ? (content as FooterContent) : null;

  return (
    <div className="grid gap-5">
      <section className="rounded-xl border border-line bg-surface p-5 shadow-sm">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <div className="flex items-center gap-2">
              <FilePenLine className="text-brand-teal" size={20} />
              <h1 className="text-2xl font-semibold">사이트 콘텐츠 관리</h1>
            </div>
            <p className="mt-2 text-sm leading-6 text-muted">
              초안은 공개되지 않으며, 게시를 눌러야 사용자 화면에 반영됩니다.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Link
              href="/naming-artist"
              className="inline-flex h-10 items-center rounded-lg border border-line px-4 text-sm font-semibold"
            >
              관리자 홈
            </Link>
            <button
              type="button"
              onClick={logout}
              className="inline-flex h-10 items-center gap-2 rounded-lg border border-line px-4 text-sm font-semibold"
            >
              <LogOut size={16} /> 로그아웃
            </button>
          </div>
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {(Object.keys(editorLabels) as EditorKind[]).map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => switchEditor(item)}
              className={`rounded-lg px-3 py-2 text-sm font-semibold transition ${
                kind === item
                  ? "bg-foreground text-background"
                  : "border border-line hover:border-foreground"
              }`}
            >
              {editorLabels[item]}
            </button>
          ))}
        </div>

        {kind !== "footer" ? (
          <label className="mt-4 grid max-w-xs gap-2">
            <span className="text-sm font-medium">게시 언어</span>
            <select
              value={locale}
              onChange={(event) => setLocale(event.target.value as Locale)}
              className="h-10 rounded-lg border border-line bg-background px-3 text-sm"
            >
              {supportedLocales.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </label>
        ) : null}

        <div className="mt-4 flex flex-wrap gap-x-5 gap-y-1 text-xs text-muted">
          <span>초안 v{status.draftVersion}</span>
          <span>게시 v{status.publishedVersion}</span>
          <span>
            최근 저장: {status.updatedAt ? new Date(status.updatedAt).toLocaleString() : "없음"}
          </span>
          <span>
            최근 게시: {status.publishedAt ? new Date(status.publishedAt).toLocaleString() : "없음"}
          </span>
        </div>
      </section>

      {loading ? (
        <section className="rounded-xl border border-line bg-surface p-6 text-sm text-muted">
          콘텐츠를 불러오는 중입니다.
        </section>
      ) : null}

      {!loading && error && !accessToken ? (
        <section className="rounded-xl border border-brand-rose/30 bg-surface p-6">
          <p className="text-sm text-brand-rose">{error}</p>
          <Link
            href="/naming-artist/login"
            className="mt-4 inline-flex h-10 items-center rounded-lg bg-foreground px-4 text-sm font-semibold text-background"
          >
            운영자 로그인
          </Link>
        </section>
      ) : null}

      {!loading && policyContent ? (
        <section className="grid gap-5 rounded-xl border border-line bg-surface p-5 shadow-sm">
          <div className="grid gap-4 md:grid-cols-2">
            <label className="grid gap-2">
              <span className="text-sm font-medium">문서 제목</span>
              <input
                value={policyContent.title}
                onChange={(event) =>
                  setContent({ ...policyContent, title: event.target.value })
                }
                className="h-11 rounded-lg border border-line bg-background px-3"
              />
            </label>
            <label className="grid gap-2">
              <span className="text-sm font-medium">시행일</span>
              <input
                type="date"
                value={policyContent.effectiveDate}
                onChange={(event) =>
                  setContent({
                    ...policyContent,
                    effectiveDate: event.target.value,
                  })
                }
                className="h-11 rounded-lg border border-line bg-background px-3"
              />
            </label>
          </div>
          <label className="grid gap-2">
            <span className="text-sm font-medium">문서 설명</span>
            <textarea
              rows={3}
              value={policyContent.description}
              onChange={(event) =>
                setContent({ ...policyContent, description: event.target.value })
              }
              className="rounded-lg border border-line bg-background p-3"
            />
          </label>

          <div className="grid gap-4">
            {policyContent.sections.map((section, sectionIndex) => (
              <article
                key={sectionIndex}
                className="grid gap-3 rounded-lg border border-line bg-background p-4"
              >
                <div className="flex items-center gap-3">
                  <input
                    value={section.title}
                    onChange={(event) => {
                      const sections = [...policyContent.sections];
                      sections[sectionIndex] = {
                        ...section,
                        title: event.target.value,
                      };
                      setContent({ ...policyContent, sections });
                    }}
                    aria-label={`${sectionIndex + 1}번 항목 제목`}
                    className="h-10 min-w-0 flex-1 rounded-lg border border-line bg-surface px-3 font-semibold"
                  />
                  <button
                    type="button"
                    aria-label={`${section.title} 삭제`}
                    onClick={() =>
                      setContent({
                        ...policyContent,
                        sections: policyContent.sections.filter(
                          (_, index) => index !== sectionIndex,
                        ),
                      })
                    }
                    className="flex size-10 items-center justify-center rounded-lg border border-line text-brand-rose"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
                <textarea
                  rows={Math.max(4, section.paragraphs.length * 3)}
                  value={section.paragraphs.join("\n\n")}
                  onChange={(event) => {
                    const sections = [...policyContent.sections];
                    sections[sectionIndex] = {
                      ...section,
                      paragraphs: splitParagraphs(event.target.value),
                    };
                    setContent({ ...policyContent, sections });
                  }}
                  aria-label={`${section.title} 본문`}
                  className="rounded-lg border border-line bg-surface p-3 text-sm leading-6"
                />
                <p className="text-xs text-muted">
                  문단 사이는 빈 줄 하나로 구분합니다.
                </p>
              </article>
            ))}
          </div>

          <button
            type="button"
            onClick={() =>
              setContent({
                ...policyContent,
                sections: [
                  ...policyContent.sections,
                  { title: "새 항목", paragraphs: ["내용을 입력해 주세요."] },
                ],
              })
            }
            className="inline-flex h-10 w-fit items-center gap-2 rounded-lg border border-line px-4 text-sm font-semibold"
          >
            <Plus size={16} /> 항목 추가
          </button>
        </section>
      ) : null}

      {!loading && footerContent ? (
        <section className="grid gap-4 rounded-xl border border-line bg-surface p-5 shadow-sm md:grid-cols-2">
          {footerFieldOrder.map((field) => (
              <label key={field} className="grid gap-2">
                <span className="text-sm font-medium">
                  {footerFieldLabels[field]}
                </span>
                <input
                  type={
                    field === "email"
                      ? "email"
                      : field === "copyrightYear"
                        ? "number"
                        : "text"
                  }
                  value={footerContent[field]}
                  onChange={(event) =>
                    setContent({
                      ...footerContent,
                      [field]:
                        field === "copyrightYear"
                          ? Number(event.target.value)
                          : event.target.value,
                    })
                  }
                  className="h-11 rounded-lg border border-line bg-background px-3"
                />
              </label>
            ))}
        </section>
      ) : null}

      {accessToken && !loading ? (
        <section className="sticky bottom-4 flex flex-col gap-3 rounded-xl border border-line bg-surface/95 p-4 shadow-xl backdrop-blur sm:flex-row sm:items-center sm:justify-between">
          <div>
            {message ? <p className="text-sm text-brand-teal">{message}</p> : null}
            {error ? <p className="text-sm text-brand-rose">{error}</p> : null}
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              disabled={saving}
              onClick={() => save("save_draft")}
              className="inline-flex h-10 items-center gap-2 rounded-lg border border-line px-4 text-sm font-semibold disabled:opacity-60"
            >
              <Save size={16} /> 초안 저장
            </button>
            <button
              type="button"
              disabled={saving}
              onClick={() => save("publish")}
              className="inline-flex h-10 items-center gap-2 rounded-lg bg-foreground px-4 text-sm font-semibold text-background disabled:opacity-60"
            >
              <Send size={16} /> 게시
            </button>
          </div>
        </section>
      ) : null}
    </div>
  );
}
