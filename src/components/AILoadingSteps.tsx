"use client";

import { useEffect, useState } from "react";

const generalSteps = [
  "입력값의 의미와 조건을 정리하고 있습니다.",
  "발음, 문화권, 사주 참고값을 대조하고 있습니다.",
  "이름 후보의 이야기와 배제 사유를 구성하고 있습니다.",
  "결과를 검토하고 화면에 맞게 정리하고 있습니다.",
];

// 외국인 대상 서비스(GLOBAL_TO_KOREAN)에서 쓰는 로케일별 문구(없는 로케일은 영어 폴백).
const generalStepsByLocale: Record<string, string[]> = {
  en: [
    "Organizing the meaning and conditions of your input.",
    "Comparing pronunciation, culture, and reference details.",
    "Composing each candidate's story and exclusion reasons.",
    "Reviewing the result and preparing it for display.",
  ],
  vi: [
    "Đang sắp xếp ý nghĩa và điều kiện bạn đã nhập.",
    "Đang so sánh phát âm, văn hóa và các thông tin tham chiếu.",
    "Đang xây dựng câu chuyện của từng ứng viên và lý do loại trừ.",
    "Đang kiểm tra kết quả và chuẩn bị hiển thị.",
  ],
  th: [
    "กำลังจัดระเบียบความหมายและเงื่อนไขของข้อมูลที่คุณกรอก",
    "กำลังเปรียบเทียบการออกเสียง วัฒนธรรม และข้อมูลอ้างอิงต่าง ๆ",
    "กำลังเรียบเรียงเรื่องราวของแต่ละชื่อที่แนะนำและเหตุผลในการคัดออก",
    "กำลังตรวจทานผลลัพธ์และเตรียมแสดงบนหน้าจอ",
  ],
  ja: [
    "入力内容の意味と条件を整理しています。",
    "発音、文化圏、参考情報を照らし合わせています。",
    "各候補のストーリーと除外理由を構成しています。",
    "結果を確認し、画面に合わせて整えています。",
  ],
  zh: [
    "正在整理您输入内容的含义和条件。",
    "正在比对发音、文化圈和参考信息。",
    "正在构建每个候选名字的故事和排除理由。",
    "正在检查结果并准备在页面上呈现。",
  ],
  id: [
    "Menyusun makna dan kondisi dari data yang Anda masukkan.",
    "Membandingkan pelafalan, budaya, dan informasi referensi.",
    "Menyusun cerita setiap kandidat beserta alasan pengecualiannya.",
    "Memeriksa hasil dan menyiapkannya untuk ditampilkan.",
  ],
  de: [
    "Bedeutung und Bedingungen Ihrer Eingaben werden geordnet.",
    "Aussprache, Kulturkreis und Referenzangaben werden abgeglichen.",
    "Die Geschichte jedes Kandidaten und die Ausschlussgründe werden zusammengestellt.",
    "Das Ergebnis wird geprüft und für die Anzeige aufbereitet.",
  ],
  es: [
    "Organizando el significado y las condiciones de tus datos.",
    "Comparando pronunciación, cultura y datos de referencia.",
    "Componiendo la historia de cada candidato y los motivos de exclusión.",
    "Revisando el resultado y preparándolo para mostrarlo.",
  ],
  fr: [
    "Organisation du sens et des conditions de vos informations.",
    "Comparaison de la prononciation, de la culture et des données de référence.",
    "Composition de l'histoire de chaque candidat et des motifs d'exclusion.",
    "Vérification du résultat et préparation de l'affichage.",
  ],
  it: [
    "Stiamo organizzando il significato e le condizioni dei tuoi dati.",
    "Stiamo confrontando pronuncia, cultura e informazioni di riferimento.",
    "Stiamo componendo la storia di ogni candidato e i motivi di esclusione.",
    "Stiamo controllando il risultato e preparandolo per la visualizzazione.",
  ],
  pt: [
    "Organizando o significado e as condições dos seus dados.",
    "Comparando pronúncia, cultura e informações de referência.",
    "Compondo a história de cada candidato e os motivos de exclusão.",
    "Revisando o resultado e preparando a exibição.",
  ],
  ru: [
    "Систематизируем смысл и условия введённых данных.",
    "Сопоставляем произношение, культуру и справочные сведения.",
    "Составляем историю каждого варианта и причины исключения.",
    "Проверяем результат и готовим его к показу.",
  ],
  ar: [
    "نرتب معنى بياناتك المدخلة وشروطها.",
    "نقارن النطق والثقافة والمعلومات المرجعية.",
    "نصوغ قصة كل مرشح وأسباب الاستبعاد.",
    "نراجع النتيجة ونجهزها للعرض.",
  ],
  tr: [
    "Girdiğiniz bilgilerin anlamı ve koşulları düzenleniyor.",
    "Telaffuz, kültür ve referans bilgileri karşılaştırılıyor.",
    "Her adayın hikâyesi ve eleme nedenleri oluşturuluyor.",
    "Sonuç gözden geçiriliyor ve görüntülenmeye hazırlanıyor.",
  ],
  fil: [
    "Inaayos ang kahulugan at mga kondisyon ng iyong input.",
    "Inihahambing ang bigkas, kultura, at mga sangguniang detalye.",
    "Binubuo ang kuwento ng bawat kandidato at ang mga dahilan ng pagbubukod.",
    "Sinusuri ang resulta at inihahanda ito para ipakita.",
  ],
  uz: [
    "Kiritgan ma’lumotlaringiz ma’nosi va shartlari tartibga solinmoqda.",
    "Talaffuz, madaniyat va ma’lumotnoma tafsilotlari solishtirilmoqda.",
    "Har bir nomzodning hikoyasi va chiqarib tashlash sabablari shakllantirilmoqda.",
    "Natija tekshirilib, ko‘rsatishga tayyorlanmoqda.",
  ],
  mn: [
    "Таны оруулсан мэдээллийн утга, нөхцөлийг эмхэлж байна.",
    "Дуудлага, соёл, лавлагааны мэдээллийг харьцуулж байна.",
    "Нэрийн хувилбар бүрийн түүх болон хасах шалтгааныг боловсруулж байна.",
    "Үр дүнг хянаж, дэлгэцэд харуулахад бэлтгэж байна.",
  ],
  hi: [
    "आपके इनपुट के अर्थ और शर्तों को व्यवस्थित किया जा रहा है।",
    "उच्चारण, संस्कृति और संदर्भ जानकारी का मिलान किया जा रहा है।",
    "हर उम्मीदवार नाम की कहानी और बाहर करने के कारण तैयार किए जा रहे हैं।",
    "परिणाम की जाँच कर उसे दिखाने के लिए तैयार किया जा रहा है।",
  ],
  km: [
    "កំពុងរៀបចំអត្ថន័យ និងលក្ខខណ្ឌនៃព័ត៌មានដែលអ្នកបានបញ្ចូល។",
    "កំពុងប្រៀបធៀបការបញ្ចេញសំឡេង វប្បធម៌ និងព័ត៌មានយោង។",
    "កំពុងតាក់តែងរឿងរ៉ាវនៃបេក្ខឈ្មោះនីមួយៗ និងមូលហេតុនៃការដកចេញ។",
    "កំពុងពិនិត្យលទ្ធផល និងរៀបចំសម្រាប់បង្ហាញ។",
  ],
  kk: [
    "Енгізген деректеріңіздің мағынасы мен шарттары реттелуде.",
    "Айтылым, мәдениет және анықтамалық мәліметтер салыстырылуда.",
    "Әр есім нұсқасының тарихы мен шығарып тастау себептері құрастырылуда.",
    "Нәтиже тексеріліп, көрсетуге дайындалуда.",
  ],
};

// 한글 이름 → 글로벌 이름 변환 대기 문구. 기술 용어 없이, 이름 여정에 어울리는 이야기로 채운다.
const globalNameSteps = [
  "이름은 나라가 바뀌어도 그 사람의 이야기를 담습니다.",
  "같은 이름도 나라마다 첫인상이 다릅니다. 현지의 귀로 듣고 있습니다.",
  "원래 이름의 소리와 뜻을 현지 이름들과 하나하나 견주고 있습니다.",
  "명함, 학교, 서류에서 자연스럽게 불릴 이름인지 살피고 있습니다.",
  "현지인이 듣자마자 편하게 부를 수 있는 이름을 고르고 있습니다.",
  "이름의 어원과 유래를 확인해 근거 있는 후보만 남기고 있습니다.",
  "성과 이름을 이었을 때의 울림까지 확인하고 있습니다.",
  "발음이 쉬운지, 오해를 살 여지는 없는지 꼼꼼히 점검하고 있습니다.",
  "원래 이름의 정체성이 새 이름에도 이어지도록 다듬고 있습니다.",
  "세대와 지역에 따라 이름이 주는 느낌의 차이를 비교하고 있습니다.",
  "좋은 이름은 소개가 필요 없는 첫인사가 됩니다.",
  "당신의 이름이 세계 어디서든 당당하게 불리길 바랍니다.",
];

function shuffled<T>(items: readonly T[]) {
  const array = [...items];
  for (let i = array.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
const OFFICIAL_HANJA_ENTRY_TOTAL = 10_380;
function hanjaSteps(candidateCount?: number | null) {
  const databaseStep = candidateCount
    ? `${OFFICIAL_HANJA_ENTRY_TOTAL.toLocaleString("ko-KR")}\uac1c \uacf5\uc2dd \ud56d\ubaa9 \uc911 \uc785\ub825 \uc74c\uc808\uacfc \uc9c0\uc815 \uc74c\uac00\uac00 \ub9de\ub294 ${candidateCount.toLocaleString("ko-KR")}\uac1c \ud6c4\ubcf4\ub97c \ub300\uc870\ud569\ub2c8\ub2e4.`
    : `${OFFICIAL_HANJA_ENTRY_TOTAL.toLocaleString("ko-KR")}\uac1c \uacf5\uc2dd \uc778\uba85\uc6a9 \ud55c\uc790 \ud56d\ubaa9\uc5d0\uc11c \uc785\ub825 \uc74c\uc808\uacfc \uc9c0\uc815 \uc74c\uac00\uac00 \ub9de\ub294 \uae00\uc790\ub97c \ucc3e\uace0 \uc788\uc2b5\ub2c8\ub2e4.`;

  return [
    "\ubd80\ubaa8\ub2d8\uc758 \ubc14\ub78c\uc774 \uc624\ub798 \ub0a8\uc744 \uc774\ub984\uc744 \uc900\ube44\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4.",
    "\uc785\ub825\ud55c \uc774\ub984\uc758 \ubaa8\ub4e0 \uc74c\uc808\uacfc \ub3cc\ub9bc\uc790 \uc704\uce58\ub97c \uc815\ud655\ud788 \ud655\uc778\ud569\ub2c8\ub2e4.",
    databaseStep,
    "\ub3cc\ub9bc\uc790 \ud55c\uc790\ub294 \ubc14\uafb8\uc9c0 \uc54a\uace0 \ub098\uba38\uc9c0 \uae00\uc790\uc758 \ub73b\uacfc \uc870\ud654\ub97c \uc0b4\ud54d\ub2c8\ub2e4.",
    "\uac01 \uae00\uc790\uc758 \uc790\uc758\uc640 \uc774\ub984 \uc804\uccb4\uc758 \uacb0\ud569 \uc758\ubbf8\ub97c \uc138\uc2ec\ud558\uac8c \uc77d\uace0 \uc788\uc2b5\ub2c8\ub2e4.",
    "\ubd80\ub974\uae30 \uc88b\uace0 \uc124\uba85\ud558\uae30 \uc88b\uc740 \uc774\ub984\uc778\uc9c0 \uc2e4\uc0ac\uc6a9 \uad00\uc810\uc5d0\uc11c \uac80\ud1a0\ud569\ub2c8\ub2e4.",
    "\ubd80\ubaa8\ub2d8\uc758 \ubc14\ub78c\uacfc \uc774\ub984\uc774 \uc804\ud560 \ud488\uaca9\uc744 \ud6c4\ubcf4\ub9c8\ub2e4 \ube44\uad50\ud569\ub2c8\ub2e4.",
    "\uc624\ub798\ub3c4\ub85d \uc790\ub791\uc2a4\ub7fd\uac8c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub294 \ud55c\uc790 \uc870\ud569\uc744 \uace0\ub974\uace0 \uc788\uc2b5\ub2c8\ub2e4.",
    "\uadfc\uac70\uac00 \ubd84\uba85\ud55c \ud6c4\ubcf4\ub97c \ub9e4\uce6d\ub960 \uc21c\uc11c\ub85c \uc815\ub9ac\ud569\ub2c8\ub2e4.",
    "\uc815\uc131\uaecf \uace0\ub978 \uc774\ub984 \uc774\uc57c\uae30\uc640 \ubd84\uc11d \uacb0\uacfc\ub97c \uace7 \ubcf4\uc5ec\ub4dc\ub9bd\ub2c8\ub2e4.",
  ];
}

export function AILoadingSteps({ variant = "general", locale = "ko", candidateCount }: { variant?: "general" | "hanja" | "global"; locale?: string; candidateCount?: number | null }) {
  const [index, setIndex] = useState(0);
  // 글로벌 변환은 매번 다른 순서로 문구가 나오도록 마운트 시 한 번 섞는다.
  const [randomizedGlobalSteps] = useState(() => shuffled(globalNameSteps));
  const activeSteps =
    variant === "hanja"
      ? hanjaSteps(candidateCount)
      : variant === "global"
        ? randomizedGlobalSteps
        : locale === "ko"
          ? generalSteps
          : generalStepsByLocale[locale] ?? generalStepsByLocale.en;
  // 글로벌 변환 대기는 광고 10초 + 생성 시간이라 문구를 끝없이 순환시킨다.
  const loops = variant === "global";

  useEffect(() => {
    const timer = window.setInterval(
      () => {
        setIndex((current) =>
          loops ? current + 1 : Math.min(current + 1, activeSteps.length - 1),
        );
      },
      loops ? 2600 : 1000,
    );

    return () => window.clearInterval(timer);
  }, [activeSteps.length, loops]);

  const displayIndex = loops ? index % activeSteps.length : index;
  const progress = loops
    ? Math.min(95, ((index + 1) / activeSteps.length) * 100)
    : ((index + 1) / activeSteps.length) * 100;

  return (
    <div className="rounded-lg border border-line bg-surface p-4">
      <div className="flex items-center gap-3">
        <span className="h-3 w-3 animate-pulse rounded-full bg-brand-teal" />
        <p className="text-sm font-medium">{activeSteps[displayIndex]}</p>
      </div>
      <div className="mt-4 h-2 overflow-hidden rounded-full bg-surface-strong">
        <div
          className="h-full rounded-full bg-brand-teal transition-[width] duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
