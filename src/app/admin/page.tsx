import Link from "next/link";
import {
  BarChart3,
  Brush,
  ClipboardList,
  FileText,
  Globe2,
  Megaphone,
  ShieldCheck,
  Stamp,
} from "lucide-react";
import { serviceList } from "@/lib/services";

const metrics = [
  ["오늘 생성 요청", "0", "Supabase 로그 연결 후 실시간 표시"],
  ["프리미엄 PDF 신청", "0", "결제 모듈 연결 예정"],
  ["도장 제작 신청", "0", "배송 상태 관리 예정"],
  ["광고 잠금 해제", "0", "광고 네트워크 연동 예정"],
];

const operationQueues = [
  {
    icon: FileText,
    title: "프리미엄 리포트",
    body: "결제 완료 후 PDF 생성, 저장소 업로드, 다운로드 링크 발급 상태를 관리합니다.",
  },
  {
    icon: Brush,
    title: "캘리그라피 제작",
    body: "선택 이름, 언어, 이미지 규격, 제작 상태를 관리하는 작업 큐입니다.",
  },
  {
    icon: Stamp,
    title: "수제 도장 주문",
    body: "도장 문구, 한자, 배송지, 제작/발송 상태를 확인하는 운영 메뉴입니다.",
  },
  {
    icon: Megaphone,
    title: "광고 슬롯",
    body: "결과 대기 화면, 결과 하단, 잠금 해제 영역의 광고 배치와 활성 상태를 관리합니다.",
  },
];

export default function AdminPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="mx-auto grid w-full max-w-7xl gap-6 px-5 py-6 sm:px-8 lg:px-10">
        <header className="flex flex-col gap-4 border-b border-line pb-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <Link href="/" className="text-sm text-muted hover:text-foreground">
              naminglink
            </Link>
            <h1 className="mt-2 text-3xl font-semibold tracking-normal">
              시스템 관리자
            </h1>
          </div>
          <span className="inline-flex w-fit items-center gap-2 rounded-lg border border-line bg-surface px-3 py-2 text-sm text-muted">
            <ShieldCheck aria-hidden="true" size={16} />
            ADMIN_ACCESS_TOKEN 연결 전 운영 콘솔
          </span>
        </header>

        <section className="grid gap-4 md:grid-cols-4">
          {metrics.map(([label, value, note]) => (
            <article
              key={label}
              className="rounded-lg border border-line bg-surface p-5 shadow-sm"
            >
              <p className="text-sm text-muted">{label}</p>
              <p className="mt-3 text-3xl font-semibold">{value}</p>
              <p className="mt-2 text-xs leading-5 text-muted">{note}</p>
            </article>
          ))}
        </section>

        <section className="grid gap-5 lg:grid-cols-[1fr_0.9fr]">
          <div className="rounded-lg border border-line bg-surface p-5 shadow-sm">
            <div className="flex items-center gap-2">
              <ClipboardList
                aria-hidden="true"
                className="text-brand-teal"
                size={20}
              />
              <h2 className="text-lg font-semibold">서비스 운영 상태</h2>
            </div>
            <div className="mt-5 grid gap-3">
              {serviceList.map((service) => (
                <div
                  key={service.slug}
                  className="rounded-lg border border-line bg-background p-4"
                >
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="font-semibold">{service.title}</p>
                      <p className="mt-1 text-sm text-muted">
                        {service.audience}
                      </p>
                    </div>
                    <Link
                      href={`/${service.slug}`}
                      className="inline-flex h-9 w-fit items-center rounded-lg border border-line px-3 text-sm transition hover:border-foreground"
                    >
                      사용자 화면
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-lg border border-line bg-surface p-5 shadow-sm">
            <div className="flex items-center gap-2">
              <Globe2
                aria-hidden="true"
                className="text-brand-teal"
                size={20}
              />
              <h2 className="text-lg font-semibold">언어/지역 정책</h2>
            </div>
            <div className="mt-5 grid gap-3 text-sm leading-6 text-muted">
              <p>
                기본 언어는 `lang` 파라미터를 우선하고, 없으면 Vercel IP 국가
                헤더와 `Accept-Language`를 기준으로 정합니다.
              </p>
              <p>
                한자 의미 매칭과 한글 이름의 외국 이름 변환은 한국어를 기본으로
                두고, 외국 이름의 한국 이름 변환은 접속 환경에 맞춰 다국어
                경험을 제공합니다.
              </p>
            </div>
          </div>
        </section>

        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {operationQueues.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="rounded-lg border border-line bg-surface p-5 shadow-sm"
              >
                <Icon aria-hidden="true" className="text-brand-teal" size={22} />
                <h2 className="mt-4 font-semibold">{item.title}</h2>
                <p className="mt-2 text-sm leading-6 text-muted">{item.body}</p>
              </article>
            );
          })}
        </section>

        <section className="rounded-lg border border-line bg-surface p-5 shadow-sm">
          <div className="flex items-center gap-2">
            <BarChart3
              aria-hidden="true"
              className="text-brand-teal"
              size={20}
            />
            <h2 className="text-lg font-semibold">다음 연결 대상</h2>
          </div>
          <div className="mt-4 grid gap-3 text-sm leading-6 text-muted md:grid-cols-3">
            <p>Supabase `naming_logs`, `orders`, `ad_events` 조회 API</p>
            <p>Portone/Toss 결제 검증과 PDF 생성 상태 업데이트</p>
            <p>광고 네트워크 스크립트와 보상형 잠금 해제 이벤트</p>
          </div>
        </section>
      </section>
    </main>
  );
}
