"use client";

import { CreditCard, Eye, Unlock } from "lucide-react";
import { useState } from "react";
import { AdBanner } from "@/components/AdBanner";
import { trackAdEvent } from "@/lib/analytics-client";

const UNLOCK_AD_SECONDS = 5;

// 외국인 대상 서비스(GLOBAL_TO_KOREAN)에서만 로케일 문구를 쓰고, 한국어 대상 서비스는 항상 ko를 유지한다.
type UnlockCopy = {
  title: string;
  status: (revealed: number, locked: number) => string;
  descHanja: string;
  descDefault: string;
  watchingNote: (seconds: number) => string;
  watching: string;
  watchButton: string;
  hanjaProductsLink: string;
  bulkButton: string;
  bulkPreparing: string;
};

const unlockCopies: Record<string, UnlockCopy> = {
  ko: {
    title: "추가 후보 열기",
    status: (revealed, locked) => `현재 ${revealed}개 공개 · ${locked}개 잠금`,
    descHanja:
      "광고를 한 번 확인할 때마다 서로 다른 추천 관점의 다음 후보 1개가 열립니다. 전체 결제 시에는 모든 후보와 한자 종합 상세를 광고 없이 확인할 수 있도록 준비 중입니다.",
    descDefault:
      "광고를 한 번 확인할 때마다 서로 다른 추천 관점의 다음 후보 1개가 열립니다. 990원 결제로 남은 후보 전체를 광고 없이 한 번에 공개하는 기능을 준비 중입니다.",
    watchingNote: (seconds) => `광고 확인 후 후보 1개를 엽니다. ${seconds}초`,
    watching: "광고 확인 중",
    watchButton: "광고 보고 다음 후보 열기",
    hanjaProductsLink: "전체 후보 상품 보기 · 2,900원부터",
    bulkButton: "전체 후보 일괄 공개 · 990원 (준비 중)",
    bulkPreparing: "결제 기능 준비 중입니다.",
  },
  vi: {
    title: "Mở thêm ứng viên",
    status: (revealed, locked) => `Đã mở ${revealed} · còn khóa ${locked}`,
    descHanja:
      "Mỗi lần xem quảng cáo sẽ mở thêm một ứng viên với góc nhìn khác.",
    descDefault:
      "Mỗi lần xem quảng cáo sẽ mở thêm một ứng viên với góc nhìn khác. Tính năng mở toàn bộ ứng viên còn lại với ₩990 sắp ra mắt.",
    watchingNote: (seconds) => `Sẽ mở một ứng viên sau quảng cáo. ${seconds} giây`,
    watching: "Đang xem quảng cáo",
    watchButton: "Xem quảng cáo để mở ứng viên tiếp theo",
    hanjaProductsLink: "Xem gói toàn bộ ứng viên · từ ₩2.900",
    bulkButton: "Mở toàn bộ ứng viên · ₩990 (sắp ra mắt)",
    bulkPreparing: "Tính năng thanh toán sắp ra mắt.",
  },
  th: {
    title: "เปิดชื่อที่แนะนำเพิ่มเติม",
    status: (revealed, locked) => `เปิดแล้ว ${revealed} รายการ · ล็อกอยู่ ${locked} รายการ`,
    descHanja:
      "การชมโฆษณาแต่ละครั้งจะเปิดชื่อที่แนะนำถัดไปอีก 1 รายการจากมุมมองการแนะนำที่ต่างกัน",
    descDefault:
      "การชมโฆษณาแต่ละครั้งจะเปิดชื่อที่แนะนำถัดไปอีก 1 รายการจากมุมมองการแนะนำที่ต่างกัน ฟีเจอร์ปลดล็อกชื่อที่แนะนำที่เหลือทั้งหมดในครั้งเดียวด้วย ₩990 กำลังจะเปิดเร็ว ๆ นี้",
    watchingNote: (seconds) => `จะเปิดชื่อที่แนะนำ 1 รายการหลังชมโฆษณา ${seconds} วินาที`,
    watching: "กำลังชมโฆษณา",
    watchButton: "ชมโฆษณาเพื่อเปิดชื่อที่แนะนำถัดไป",
    hanjaProductsLink: "ดูแพ็กเกจชื่อที่แนะนำทั้งหมด · เริ่มต้น ₩2,900",
    bulkButton: "เปิดชื่อที่แนะนำทั้งหมดในครั้งเดียว · ₩990 (เร็ว ๆ นี้)",
    bulkPreparing: "ฟีเจอร์การชำระเงินกำลังจะเปิดเร็ว ๆ นี้",
  },
  ja: {
    title: "追加の候補を開く",
    status: (revealed, locked) => `現在${revealed}件公開 · ${locked}件ロック中`,
    descHanja:
      "広告を1回確認するごとに、異なる推薦観点の次の候補が1件開きます。",
    descDefault:
      "広告を1回確認するごとに、異なる推薦観点の次の候補が1件開きます。残りの候補全体を₩990で広告なしで一括公開する機能を準備中です。",
    watchingNote: (seconds) => `広告の確認後に候補を1件開きます。${seconds}秒`,
    watching: "広告を確認中",
    watchButton: "広告を見て次の候補を開く",
    hanjaProductsLink: "全候補の商品を見る · ₩2,900から",
    bulkButton: "全候補を一括公開 · ₩990（準備中）",
    bulkPreparing: "決済機能は準備中です。",
  },
  zh: {
    title: "解锁更多候选名字",
    status: (revealed, locked) => `已公开 ${revealed} 个 · 锁定 ${locked} 个`,
    descHanja:
      "每观看一次广告，即可解锁下一个不同推荐角度的候选名字。",
    descDefault:
      "每观看一次广告，即可解锁下一个不同推荐角度的候选名字。以 ₩990 一次性无广告解锁全部剩余候选名字的功能即将上线。",
    watchingNote: (seconds) => `观看广告后将解锁 1 个候选名字。${seconds} 秒`,
    watching: "正在观看广告",
    watchButton: "观看广告解锁下一个候选名字",
    hanjaProductsLink: "查看全部候选产品 · ₩2,900 起",
    bulkButton: "一次性解锁全部候选名字 · ₩990（即将上线）",
    bulkPreparing: "支付功能即将上线。",
  },
  id: {
    title: "Buka kandidat lainnya",
    status: (revealed, locked) => `${revealed} terbuka · ${locked} terkunci`,
    descHanja:
      "Setiap kali menonton iklan, satu kandidat berikutnya dengan sudut pandang rekomendasi berbeda akan terbuka.",
    descDefault:
      "Setiap kali menonton iklan, satu kandidat berikutnya dengan sudut pandang rekomendasi berbeda akan terbuka. Fitur membuka seluruh kandidat tersisa sekaligus seharga ₩990 segera hadir.",
    watchingNote: (seconds) => `Satu kandidat terbuka setelah iklan. ${seconds} detik`,
    watching: "Menonton iklan",
    watchButton: "Tonton iklan untuk membuka kandidat berikutnya",
    hanjaProductsLink: "Lihat produk seluruh kandidat · mulai ₩2,900",
    bulkButton: "Buka seluruh kandidat sekaligus · ₩990 (segera hadir)",
    bulkPreparing: "Fitur pembayaran segera hadir.",
  },
  de: {
    title: "Weitere Kandidaten freischalten",
    status: (revealed, locked) => `${revealed} freigeschaltet · ${locked} gesperrt`,
    descHanja:
      "Mit jeder angesehenen Werbung wird der nächste Kandidat mit einer anderen Empfehlungsperspektive freigeschaltet.",
    descDefault:
      "Mit jeder angesehenen Werbung wird der nächste Kandidat mit einer anderen Empfehlungsperspektive freigeschaltet. Eine einmalige Freischaltung aller verbleibenden Kandidaten für ₩990 ist in Vorbereitung.",
    watchingNote: (seconds) => `Nach der Werbung wird ein Kandidat freigeschaltet. ${seconds} Sek.`,
    watching: "Werbung läuft",
    watchButton: "Werbung ansehen und nächsten Kandidaten freischalten",
    hanjaProductsLink: "Alle Kandidaten-Produkte ansehen · ab ₩2,900",
    bulkButton: "Alle Kandidaten freischalten · ₩990 (in Vorbereitung)",
    bulkPreparing: "Die Zahlungsfunktion ist in Vorbereitung.",
  },
  es: {
    title: "Desbloquea más candidatos",
    status: (revealed, locked) => `${revealed} revelados · ${locked} bloqueados`,
    descHanja:
      "Cada anuncio que ves desbloquea el siguiente candidato con una perspectiva de recomendación distinta.",
    descDefault:
      "Cada anuncio que ves desbloquea el siguiente candidato con una perspectiva de recomendación distinta. Próximamente podrás desbloquear de una sola vez todos los candidatos restantes por ₩990.",
    watchingNote: (seconds) => `Se desbloqueará un candidato tras el anuncio. ${seconds} s`,
    watching: "Viendo el anuncio",
    watchButton: "Ver un anuncio para desbloquear el siguiente candidato",
    hanjaProductsLink: "Ver productos con todos los candidatos · desde ₩2,900",
    bulkButton: "Desbloquear todos los candidatos · ₩990 (próximamente)",
    bulkPreparing: "El pago estará disponible próximamente.",
  },
  fr: {
    title: "Débloquez plus de candidats",
    status: (revealed, locked) => `${revealed} dévoilés · ${locked} verrouillés`,
    descHanja:
      "Chaque publicité regardée dévoile le candidat suivant, avec une perspective de recommandation différente.",
    descDefault:
      "Chaque publicité regardée dévoile le candidat suivant, avec une perspective de recommandation différente. Un déblocage unique de tous les candidats restants pour ₩990 arrive bientôt.",
    watchingNote: (seconds) => `Un candidat sera dévoilé après la publicité. ${seconds} s`,
    watching: "Publicité en cours",
    watchButton: "Regarder une publicité pour dévoiler le candidat suivant",
    hanjaProductsLink: "Voir les offres tous candidats · à partir de ₩2,900",
    bulkButton: "Débloquer tous les candidats · ₩990 (bientôt)",
    bulkPreparing: "Le paiement sera bientôt disponible.",
  },
  it: {
    title: "Sblocca altri candidati",
    status: (revealed, locked) => `${revealed} rivelati · ${locked} bloccati`,
    descHanja:
      "Ogni annuncio guardato sblocca il candidato successivo, con una prospettiva di raccomandazione diversa.",
    descDefault:
      "Ogni annuncio guardato sblocca il candidato successivo, con una prospettiva di raccomandazione diversa. Presto potrai sbloccare in una sola volta tutti i candidati rimanenti per ₩990.",
    watchingNote: (seconds) => `Un candidato verrà sbloccato dopo l'annuncio. ${seconds} s`,
    watching: "Annuncio in corso",
    watchButton: "Guarda un annuncio per sbloccare il prossimo candidato",
    hanjaProductsLink: "Vedi i prodotti con tutti i candidati · da ₩2,900",
    bulkButton: "Sblocca tutti i candidati · ₩990 (in arrivo)",
    bulkPreparing: "Il pagamento sarà presto disponibile.",
  },
  pt: {
    title: "Desbloqueie mais candidatos",
    status: (revealed, locked) => `${revealed} revelados · ${locked} bloqueados`,
    descHanja:
      "Cada anúncio assistido revela o próximo candidato, com uma perspectiva de recomendação diferente.",
    descDefault:
      "Cada anúncio assistido revela o próximo candidato, com uma perspectiva de recomendação diferente. Em breve você poderá desbloquear de uma só vez todos os candidatos restantes por ₩990.",
    watchingNote: (seconds) => `Um candidato será revelado após o anúncio. ${seconds} s`,
    watching: "Assistindo ao anúncio",
    watchButton: "Assistir a um anúncio para revelar o próximo candidato",
    hanjaProductsLink: "Ver produtos com todos os candidatos · a partir de ₩2,900",
    bulkButton: "Desbloquear todos os candidatos · ₩990 (em breve)",
    bulkPreparing: "O pagamento estará disponível em breve.",
  },
  ru: {
    title: "Откройте больше вариантов",
    status: (revealed, locked) => `Открыто: ${revealed} · Заблокировано: ${locked}`,
    descHanja:
      "Каждый просмотр рекламы открывает следующий вариант с другой точкой зрения рекомендации.",
    descDefault:
      "Каждый просмотр рекламы открывает следующий вариант с другой точкой зрения рекомендации. Скоро появится разовая разблокировка всех оставшихся вариантов за ₩990.",
    watchingNote: (seconds) => `После рекламы откроется один вариант. ${seconds} с`,
    watching: "Просмотр рекламы",
    watchButton: "Посмотреть рекламу и открыть следующий вариант",
    hanjaProductsLink: "Смотреть продукты со всеми вариантами · от ₩2,900",
    bulkButton: "Открыть все варианты · ₩990 (скоро)",
    bulkPreparing: "Оплата скоро появится.",
  },
  ar: {
    title: "افتح مزيدًا من المرشحات",
    status: (revealed, locked) => `${revealed} مكشوف · ${locked} مقفل`,
    descHanja:
      "كل إعلان تشاهده يكشف المرشح التالي من منظور توصية مختلف.",
    descDefault:
      "كل إعلان تشاهده يكشف المرشح التالي من منظور توصية مختلف. قريبًا: فتح جميع المرشحات المتبقية دفعة واحدة مقابل ₩990.",
    watchingNote: (seconds) => `سيُكشف مرشح واحد بعد الإعلان. ${seconds} ثانية`,
    watching: "جارٍ مشاهدة الإعلان",
    watchButton: "شاهد إعلانًا لكشف المرشح التالي",
    hanjaProductsLink: "عرض منتجات جميع المرشحات · ابتداءً من ₩2,900",
    bulkButton: "فتح جميع المرشحات · ₩990 (قريبًا)",
    bulkPreparing: "الدفع متاح قريبًا.",
  },
  tr: {
    title: "Daha fazla adayın kilidini açın",
    status: (revealed, locked) => `${revealed} açıldı · ${locked} kilitli`,
    descHanja:
      "İzlediğiniz her reklam, farklı bir öneri bakış açısına sahip bir sonraki adayı açar.",
    descDefault:
      "İzlediğiniz her reklam, farklı bir öneri bakış açısına sahip bir sonraki adayı açar. Kalan tüm adayları ₩990 karşılığında tek seferde açma özelliği yakında geliyor.",
    watchingNote: (seconds) => `Reklamdan sonra bir aday açılacak. ${seconds} sn`,
    watching: "Reklam izleniyor",
    watchButton: "Bir sonraki adayı açmak için reklam izleyin",
    hanjaProductsLink: "Tüm aday ürünlerini gör · ₩2,900'dan itibaren",
    bulkButton: "Tüm adayları aç · ₩990 (yakında)",
    bulkPreparing: "Ödeme yakında kullanılabilir olacak.",
  },
  fil: {
    title: "Magbukas ng higit pang kandidato",
    status: (revealed, locked) => `${revealed} bukas · ${locked} naka-lock`,
    descHanja:
      "Bawat ad na pinapanood mo ay nagbubukas ng susunod na kandidato mula sa ibang pananaw ng rekomendasyon.",
    descDefault:
      "Bawat ad na pinapanood mo ay nagbubukas ng susunod na kandidato mula sa ibang pananaw ng rekomendasyon. Malapit na ang isang beses na pagbubukas ng lahat ng natitirang kandidato sa halagang ₩990.",
    watchingNote: (seconds) => `Magbubukas ng isang kandidato pagkatapos ng ad. ${seconds} segundo`,
    watching: "Nanonood ng ad",
    watchButton: "Manood ng ad para buksan ang susunod na kandidato",
    hanjaProductsLink: "Tingnan ang mga produkto ng buong kandidato · mula ₩2,900",
    bulkButton: "Buksan ang lahat ng kandidato · ₩990 (malapit na)",
    bulkPreparing: "Malapit nang magbukas ang pagbabayad.",
  },
  uz: {
    title: "Ko‘proq nomzodlarni oching",
    status: (revealed, locked) => `${revealed} ta ochilgan · ${locked} ta yopiq`,
    descHanja:
      "Har bir ko‘rilgan reklama boshqacha tavsiya nuqtai nazaridagi navbatdagi nomzodni ochadi.",
    descDefault:
      "Har bir ko‘rilgan reklama boshqacha tavsiya nuqtai nazaridagi navbatdagi nomzodni ochadi. Qolgan barcha nomzodlarni ₩990 evaziga bir vaqtda ochish imkoniyati tez orada ishga tushadi.",
    watchingNote: (seconds) => `Reklamadan so‘ng bitta nomzod ochiladi. ${seconds} soniya`,
    watching: "Reklama ko‘rilmoqda",
    watchButton: "Navbatdagi nomzodni ochish uchun reklama ko‘ring",
    hanjaProductsLink: "Barcha nomzodli mahsulotlarni ko‘rish · ₩2,900 dan",
    bulkButton: "Barcha nomzodlarni ochish · ₩990 (tez orada)",
    bulkPreparing: "To‘lov tez orada ishga tushadi.",
  },
  mn: {
    title: "Нэрийн хувилбар нэмж нээх",
    status: (revealed, locked) => `${revealed} нээгдсэн · ${locked} түгжээтэй`,
    descHanja:
      "Зар үзэх бүрд өөр өнцгөөс санал болгосон дараагийн нэрийн хувилбар нэг нэгээр нээгдэнэ.",
    descDefault:
      "Зар үзэх бүрд өөр өнцгөөс санал болгосон дараагийн нэрийн хувилбар нэг нэгээр нээгдэнэ. Үлдсэн бүх хувилбарыг ₩990-өөр нэг дор нээх боломж тун удахгүй нэмэгдэнэ.",
    watchingNote: (seconds) => `Зар үзсэний дараа нэг хувилбар нээгдэнэ. ${seconds} секунд`,
    watching: "Зар үзэж байна",
    watchButton: "Зар үзээд дараагийн хувилбарыг нээх",
    hanjaProductsLink: "Бүх хувилбарын бүтээгдэхүүнийг үзэх · ₩2,900-с эхэлнэ",
    bulkButton: "Бүх хувилбарыг нэг дор нээх · ₩990 (тун удахгүй)",
    bulkPreparing: "Төлбөрийн функц тун удахгүй нээгдэнэ.",
  },
  en: {
    title: "Unlock more candidates",
    status: (revealed, locked) => `${revealed} revealed · ${locked} locked`,
    descHanja:
      "Each ad you watch reveals the next candidate with a different perspective.",
    descDefault:
      "Each ad you watch reveals the next candidate with a different perspective. A one-time ₩990 unlock for all remaining candidates is coming soon.",
    watchingNote: (seconds) => `Revealing one candidate after the ad. ${seconds}s`,
    watching: "Watching ad",
    watchButton: "Watch an ad to reveal the next candidate",
    hanjaProductsLink: "View full candidate products · from ₩2,900",
    bulkButton: "Unlock all candidates · ₩990 (coming soon)",
    bulkPreparing: "Payment is coming soon.",
  },
};

export function CandidateUnlockPanel({
  revealedCount,
  totalCount,
  locale,
  serviceType,
  onUnlock,
}: {
  revealedCount: number;
  totalCount: number;
  locale?: string;
  serviceType?: string;
  onUnlock: () => void;
}) {
  const [loading, setLoading] = useState(false);
  const [countdown, setCountdown] = useState(0);
  const remainingCount = Math.max(0, totalCount - revealedCount);
  const copy =
    serviceType === "GLOBAL_TO_KOREAN" && locale && locale !== "ko"
      ? unlockCopies[locale] ?? unlockCopies.en
      : unlockCopies.ko;

  async function unlockWithAd() {
    if (loading || remainingCount === 0) return;

    setLoading(true);
    trackAdEvent({ eventType: "IMPRESSION", slotKey: "candidate_unlock", locale, serviceType });
    setCountdown(UNLOCK_AD_SECONDS);
    const startedAt = Date.now();
    const timer = window.setInterval(() => {
      const elapsed = Math.floor((Date.now() - startedAt) / 1000);
      setCountdown(Math.max(0, UNLOCK_AD_SECONDS - elapsed));
    }, 250);

    try {
      await new Promise((resolve) =>
        window.setTimeout(resolve, UNLOCK_AD_SECONDS * 1000),
      );
      onUnlock();
      trackAdEvent({ eventType: "REWARD_GRANTED", slotKey: "candidate_unlock", locale, serviceType });
    } finally {
      window.clearInterval(timer);
      setCountdown(0);
      setLoading(false);
    }
  }

  if (totalCount <= 1 || remainingCount === 0) return null;

  return (
    <section className="rounded-lg border border-brand-teal/25 bg-surface p-5 shadow-sm">
      <div className="flex items-start gap-3">
        <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-surface-strong text-brand-teal">
          <Unlock aria-hidden="true" size={20} />
        </span>
        <div>
          <p className="text-sm font-semibold text-brand-teal">{copy.title}</p>
          <h2 className="mt-1 text-lg font-semibold">
            {copy.status(Math.min(revealedCount, totalCount), remainingCount)}
          </h2>
          <p className="mt-2 text-sm leading-6 text-muted">
            {serviceType === "HANJA_MEANING_MATCH" ? copy.descHanja : copy.descDefault}
          </p>
        </div>
      </div>

      {loading ? (
        <div className="mt-5 grid gap-3">
          <AdBanner variant="leaderboard" />
          <p className="text-center text-sm font-medium text-brand-teal">
            {copy.watchingNote(countdown)}
          </p>
        </div>
      ) : null}

      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        <button
          type="button"
          onClick={unlockWithAd}
          disabled={loading || remainingCount === 0}
          className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-foreground px-4 text-sm font-semibold text-background transition hover:bg-brand-teal disabled:cursor-not-allowed disabled:opacity-50"
        >
          <Eye aria-hidden="true" size={17} />
          {loading ? copy.watching : copy.watchButton}
        </button>
        {serviceType === "HANJA_MEANING_MATCH" ? (
          <a
            href="#premium-hanja-analysis"
            className="inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-brand-teal/35 bg-surface-strong px-4 text-sm font-semibold text-brand-teal"
          >
            <CreditCard aria-hidden="true" size={17} />
            {copy.hanjaProductsLink}
          </a>
        ) : (
          <button
            type="button"
            disabled
            title={copy.bulkPreparing}
            className="inline-flex h-11 cursor-not-allowed items-center justify-center gap-2 rounded-lg border border-brand-teal/35 bg-surface-strong px-4 text-sm font-semibold text-brand-teal opacity-60"
          >
            <CreditCard aria-hidden="true" size={17} />
            {copy.bulkButton}
          </button>
        )}
      </div>
    </section>
  );
}
