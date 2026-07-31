// 인연링크 화면 사전의 우즈베크어(uz, 라틴 문자) 판. `src/lib/i18n.ts`의 `en`을 구조와 번역의
// 기준으로 옮겼고, 영어가 모호하거나 사주 용어의 뉘앙스가 필요한 자리는 같은 파일의 `ko` 원문을
// 대조해 뜻을 맞췄다. 언어 선택기 3개 키와 footer 13개 키는 naminglink(`i18n.ts`·`SiteFooter.tsx`)의
// uz를 그대로 가져와, 두 서비스에서 같은 말이 같은 자리에 보이도록 했다. 우즈베크어는 교착어라
// 자리표시자 뒤에 격어미를 붙일 수 없어, 어떤 값이 들어와도 성립하는 어순만 썼다.

import type { Dictionary } from "@/lib/i18n";

export const uz: Dictionary = {
  brand: "InyeonLink",
  tagline: "Saju va mucha orqali o'qiladigan moslik",
  currentLanguage: "Joriy til",
  moreLanguages: "Yana",
  closeLanguages: "Yopish",
  landing: {
    title: "Ikki insonning bir-biriga\nqanchalik mosligini ko'ring",
    subtitle:
      "Sizga faqat tug'ilgan sana kerak.\nSaju (To'rt ustun) mosligini mucha mosligi bilan birga hisoblab, moslik darajasi sifatida ko'rsatamiz.",
    cta: "Saju mosligini ko'rish",
    howTitle: "Qanday hisoblanadi",
    steps: [
      "Ikkala tug'ilgan sanani kiriting. Tug'ilgan vaqt ixtiyoriy.",
      "Saju mosligi kun hokimi unsurlari, unsurlar muvozanati va kun tarmog'idan chiqadi; mucha mosligi esa yil tarmog'idan.",
      "Ikki natija o'lchovli o'rtacha bilan qo'shilib, yakuniy moslik darajasi ko'rsatiladi.",
    ],
    privacyTitle: "Kiritilgan ma'lumot saqlanmaydi",
    privacyBody:
      "Tug'ilgan sanalar faqat natija hisoblanayotgan paytda ishlatiladi va hech qayerga yozilmaydi. Ro'yxatdan o'tish shart emas. Natija havolasidagi ma'lumot serverga yuborilmaydi.",
    disclaimer:
      "Bu an'anaviy Saju talqini bo'lib, faqat ma'lumot uchun beriladi. Bu ilmiy bashorat ham, munosabat haqidagi qat'iy hukm ham emas.",
  },
  form: {
    title: "Ikkala tug'ilgan sana",
    description:
      "Tug'ilgan vaqtni bilish talqinni aniqroq qiladi, lekin u majburiy emas.",
    personA: "Birinchi inson",
    personB: "Ikkinchi inson",
    nickname: "Qanday atalsin",
    nicknamePlaceholder: "masalan: Men",
    nicknameHint: "Faqat natija ekranida ko'rsatiladi. Hisobda ishlatilmaydi.",
    gender: "Jins",
    male: "Erkak",
    female: "Ayol",
    genderUnspecified: "Aytishni istamayman",
    genderHint:
      "An'anaviy Saju turmush o'rtoq o'rnini jinsga qarab boshqacha o'qiydi. Buni tashlab ketsangiz, o'sha bo'lim hisobdan chiqariladi.",
    birthplace: "Tug'ilgan joy",
    birthplaceHint:
      "Soat ustuni tug'ilgan joyning haqiqiy quyosh vaqtidan hisoblanadi; yozgi vaqt va o'tmishdagi vaqt mintaqasi o'zgarishlari ham hisobga olinadi. Tug'ilgan joyingiz ro'yxatda bo'lmasa, eng yaqin shaharni tanlang — u qanchalik yaqin bo'lsa, soat ustuni shunchalik aniq bo'ladi.",
    calendar: "Taqvim",
    solar: "Quyosh",
    lunar: "Oy",
    leapMonth: "Kabisa oyi",
    birthDate: "Tug'ilgan sana",
    year: "Yil",
    month: "Oy",
    day: "Kun",
    birthTime: "Tug'ilgan vaqt",
    unknownTime: "Vaqtni bilmayman",
    hour: "Soat",
    minute: "Daqiqa",
    submit: "Reklamani ko'rib, moslikni ko'ring",
    submitting: "Hisoblanmoqda…",
    errorInvalidDate:
      "Tug'ilgan sanani tekshiring. Oy taqvimi bo'lsa, kabisa oyiga to'g'ri kelmasligini ham tekshiring.",
    errorGeneric: "Hisob amalga oshmadi. Birozdan so'ng qayta urinib ko'ring.",
  },
  reading: {
    chartTitle: "Ikkala jadval",
    chartHint:
      "Saju tug'ilgan yil, oy, kun va soatni ikkitadan belgi bilan yozadi. Quyidagi ballarning hammasi shu sakkiz belgidan chiqadi.",
    pillarYear: "Yil",
    pillarMonth: "Oy",
    pillarDay: "Kun",
    pillarHour: "Soat",
    pillarHourUnknown: "Tug'ilgan vaqt yo'q",
    dayMasterLabel: "Kun hokimi",
    animalLabel: "Mucha",
    seasonLabel: "Tug'ilgan fasl",
    elementsTitle: "Besh unsur kuchi",
    strongest: "Eng kuchlisi",
    scarcest: "Eng kamyobi",
    strengthTitle: "Bu juftlikning kuchli tomoni",
    cautionTitle: "E'tibor beriladigan joy",
    bodyStrengthTitle: "Kun hokimining kuchi",
    favorableLabel: "Hozir kerak bo'lgan quvvat",
  },
  bodyStrength: {
    STRONG: {
      name: "Kuchli kun hokimi (身强)",
      body: "Kun hokimingizni qo'llab-quvvatlaydigan unsurlar to'kis. Bu sizga o'z kuchingiz bilan oldinga siljish imkonini beradi, lekin bir tomonga og'ib ketish ham oson — ortiqchani olib ketadigan quvvat bo'lgandagina osoyishta bo'lasiz.",
    },
    BALANCED: {
      name: "Muvozanatli kun hokimi (中和)",
      body: "Kun hokimingizni qo'llaydigan va undan oladigan kuchlar deyarli teng. Bir tomonga qat'iy hukm chiqarish qiyin bo'lgani uchun, bu yerda hozir eng yupqa turgan quvvatni kerakli deb o'qiymiz.",
    },
    WEAK: {
      name: "Kuchsiz kun hokimi (身弱)",
      body: "Kun hokimingizni qo'llab-quvvatlaydigan unsurlar yupqa. Atrofdagilarning kuchidan yaxshi foydalanasiz, lekin uzoq vaqt yolg'iz chidashda charchaysiz — orqangizda tayanch bo'lganda kuchga to'lasiz.",
    },
  },
  relation: {
    title: "Ikkovingiz qanday joylashgansiz",
    hint: "Saju ikki kun hokimining bir-birini qanday ko'rishini o'nta nom bilan ajratadi. O'qishning yo'nalishi bor — sizning uni ko'rishingiz bilan uning sizni ko'rishi boshqacha bo'lishi mumkin.",
    directionLabel: "{from} → {to}",
    shapes: {
      ALIKE: {
        name: "O'xshash juftlik",
        body: "Kun hokimlaringiz bir xil quvvatga ega. Ko'p narsa aytilmasa ham tushuniladi, didlaringiz ham mos keladi. Ammo kuchli va kuchsiz joylaringiz bir xil bo'lgani uchun, qiyinchilik ikkovingizni ham bitta nuqtada to'xtatib qo'yadi.",
      },
      NURTURING: {
        name: "Biri o'stiradi, biri gullaydi",
        body: "Quvvat bir tomonga oqadi. Qabul qiladigan taraf o'zini yengil his qiladi va istaklari ko'payadi; beradigan taraf esa sherigining yutug'idan mamnun bo'ladi. Oqim bir yo'nalishli bo'lgani uchun qaytadigan biror narsa bo'lmasa, beruvchi vaqt o'tib toliqadi.",
      },
      TENSION: {
        name: "Biri ikkinchisini tiyadi",
        body: "Biringiz ikkinchingizni tiyib turadigan o'rinda. Bu taranglik ikkovingizni bo'shashishdan saqlaydi va birga ishlaganda natija beradi. Tiyilgan taraf esa doim baholanayotgandek his qilishi mumkin, shuning uchun tanbehdan oldin e'tirof kelishi kerak.",
      },
    },
    leadNote: {
      NURTURING: "Bu munosabatda **{lead}** tomoni quvvat beradi.",
      TENSION: "Bu munosabatda **{lead}** tomoni sur'atni belgilaydi.",
    },
  },
  tenGods: {
    BIGYEON: {
      name: "Hamroh (比肩)",
      body: "Yelkama-yelka turadigan o'rin. Gaplashish oson, birga bo'lish yengil — lekin ikkovingiz bir narsani xohlaganda yon berish qiyin.",
    },
    GEOPJAE: {
      name: "Raqib (劫財)",
      body: "O'xshash, lekin yo'li boshqa o'rin. Bir tomonga birga turtganda kuch katta; bo'linadigan narsa chiqqanda hisob-kitob keskinlashadi.",
    },
    SIKSIN: {
      name: "Ifoda (食神)",
      body: "Ichingizdagini tashqariga chiqaradigan o'rin. Yonida gapingiz ko'payadi va qiladigan ishlaringiz ortadi. Eng qulay o'rinlardan biri.",
    },
    SANGGWAN: {
      name: "Buzuvchi (傷官)",
      body: "Qolipingizni silkitadigan o'rin. Qiziqarli va turtki beradi — lekin so'zlar o'tkirlashsa, jarohat uzoq qoladi.",
    },
    PYEONJAE: {
      name: "Kutilmagan boylik (偏財)",
      body: "G'amxo'rlik qilgingiz keladigan o'rin. Beixtiyor quvonch ko'p, ammo munosabatning og'irligi yengil qolishi mumkin.",
    },
    JEONGJAE: {
      name: "Barqaror boylik (正財)",
      body: "An'anada erkak uchun turmush o'rtoq o'rni. G'amxo'rlik bir maromda keladi va munosabat cho'qqilar emas, oddiy kunlar ichida joylashadi.",
    },
    PYEONGWAN: {
      name: "Sinovchi (偏官)",
      body: "Sizni doim hushyor tutadigan o'rin. Tortishish kuchli va ko'z uzish qiyin, lekin uzoq yaqinlik bosim bo'lib tuyulishi mumkin.",
    },
    JEONGGWAN: {
      name: "Nufuz (正官)",
      body: "An'anada ayol uchun turmush o'rtoq o'rni. Sizni to'g'rilab turadi, munosabatga tartib va barqarorlik olib keladi.",
    },
    PYEONIN: {
      name: "Noodatiy tayanch (偏印)",
      body: "Sizga o'zgacha yo'l bilan yordam beradigan o'rin. Chuqur tushunish onlari bo'ladi, ammo bir-biringizning uslubingizni anglash vaqt oladi.",
    },
    JEONGIN: {
      name: "G'amxo'rlik (正印)",
      body: "Sizni bag'riga oladigan va parvarish qiladigan o'rin. Suyangingiz keladi, ko'ngil joyiga tushadi. Ammo suyanish bir tomonlama bo'lsa, munosabat qiyshayadi.",
    },
  },
  dayMasters: {
    甲: { name: "Yang Yog'och (甲)", trait: "Tik o'sadigan baland daraxt. Yo'nalish belgilangach chayqalmaydi va egilishdan ko'ra chidashni tanlaydi." },
    乙: { name: "Yin Yog'och (乙)", trait: "Chirmovuq kabi egiluvchan o't. Sharoitga qarab egiladi-yu, oldinga yuraveradi va uzilmaydi." },
    丙: { name: "Yang Olov (丙)", trait: "Tush paytidagi quyosh. Hissiyot ochiq ko'rinadi, atrof yorishadi, oldinga chiqish tabiiy keladi." },
    丁: { name: "Yin Olov (丁)", trait: "Sham va chiroq yorug'i. Sokin va uzoq yonadi, avvalo eng yaqinlarini isitadi." },
    戊: { name: "Yang Tuproq (戊)", trait: "Keng dala va tog'. Silkitish qiyin, suyanish oson, ammo qabul qilingan qarorni o'zgartirishga shoshmaydi." },
    己: { name: "Yin Tuproq (己)", trait: "Ekin tuprog'i. Nima kelsa qabul qilib o'stiradi, ko'z-ko'z qilishdan ko'ra parvarishga yaqin." },
    庚: { name: "Yang Metall (庚)", trait: "Ishlov ko'rmagan temir. Qat'iy va aniq, osilib qolgan ishlarga sabri yo'q." },
    辛: { name: "Yin Metall (辛)", trait: "Sayqallangan qimmatbaho tosh. Nozik did va yuqori talab; uvol qilingan ishni e'tiborsiz qoldirmaydi." },
    壬: { name: "Yang Suv (壬)", trait: "Daryo va dengiz. Qarashi keng, narsalarning qay tomonga oqayotganini ilg'aydi." },
    癸: { name: "Yin Suv (癸)", trait: "Shabnam va yomg'ir. Sokin singib boradi, so'zdan oldin kayfiyatni o'qiydi." },
  },
  dayMasterSigns: {
    甲: [
      "Birinchi uchrashuvda ham o'ylaganini borligicha aytadi.",
      "Bir marta belgilangan reja yoki va'dani kamdan-kam o'zgartiradi.",
      "Rad etganda aylantirmaydi, shuning uchun qo'pol eshitilishi mumkin.",
    ],
    乙: [
      "To'qnashuvdan chetlab, boshqa yo'ldan boradi.",
      "Yumshoq ko'rinadi, lekin oxiri o'zi mo'ljallagan joyda bo'ladi.",
      "Davraga qo'shilishdan oldin kayfiyatni chamalaydi.",
    ],
    丙: [
      "Endi tanishgan odamga birinchi bo'lib gap qotadi.",
      "Nimani yoqtirishi va yoqtirmasligi yuzidan bilinadi.",
      "Yig'ilishda o'zi sezmagan holda markazda turadi.",
    ],
    丁: [
      "Avvaliga jim, yaqinlashgach mehr bilan g'amxo'rlik qiladi.",
      "Katta davradan ko'ra bir-ikki kishi bilan uzoq suhbatni afzal ko'radi.",
      "O'tib ketgan gapni esda saqlab, keyin eslatadi.",
    ],
    戊: [
      "Kam gapiradi; shoshilinch paytda ham ovozi kamdan-kam ko'tariladi.",
      "Hamma qarorni cho'zganda, oxirida yakun yasaydigan odam.",
      "Bir marta aytilgan yo'q uzoq vaqt yo'qligicha qoladi.",
    ],
    己: [
      "O'zi gapirganidan ko'ra ko'proq tinglaydi.",
      "Rad etolmagani uchun ishlar unga to'planib qoladi.",
      "Bildirmay qilib qo'ygan yordami keyin ma'lum bo'ladi.",
    ],
    庚: [
      "Tez qaror qiladi va shu zahoti aytadi.",
      "Gapni yumshatmaydi, shuning uchun sovuq tuyulishi mumkin.",
      "Ish cho'zilsa, bezovtaligi ko'rinib turadi.",
    ],
    辛: [
      "Kiyim va tanlaydigan narsalarida aniq mezoni bor.",
      "Chala qilingan ishni indamay o'tkazib yubormaydi.",
      "Maqtovga xasis, lekin bir tan olsa, aniq tan oladi.",
    ],
    壬: [
      "Har xil odamlar bilan bemalol qo'shilib ketadi.",
      "Ko'z oldidagi ishdan oldin keyingi gaplarni ochadi.",
      "Bir joyda uzoq bog'lanib qolishdan siqiladi.",
    ],
    癸: [
      "Kam gapiradi, lekin vaziyatni aniq o'qib turadi.",
      "Kayfiyat o'zgarganini birinchi bo'lib sezadi.",
      "Ichini ochmaydi, shuning uchun uni bilish vaqt oladi.",
    ],
  },
  animalTraits: {
    rat: "Tez sezadi va keragini tez qo'lga kiritadi. Xavf paytida birinchi bo'lib qimirlaydi.",
    ox: "Sekin ko'rinadi-yu, ishni oxiriga yetkazadi. Bir olgan yukini tashlamaydi.",
    tiger: "Qo'rqmas va oldinda yuradi. Adolatsizlikni indamay o'tkazib yubormaydi.",
    rabbit: "Muloyim va sezgir. To'qnashishdan ko'ra aylanib o'tishni biladi.",
    dragon: "Ko'ngli keng, orzusi baland. Oddiy narsadan kamdan-kam qanoat hosil qiladi.",
    snake: "Ichini ochmaydi va chuqur o'ylaydi. Xulosasi aniq.",
    horse: "Quvnoq va harakatchan. Qamalib qolish unga eng og'iri.",
    goat: "Mehribon va e'tiborli. Qattiq so'zni uzoq ko'nglida saqlaydi.",
    monkey: "Uddaburon va tez moslashadi. Takrorlanadigan ishdan zerikadi.",
    rooster: "Mehnatkash va sinchkov. Joyida turmagan narsani qoldirolmaydi.",
    dog: "Bir ishongach oxirigacha sodiq. Xiyonat unga ayniqsa og'ir botadi.",
    pig: "Saxiy va ochiqko'ngil. Oson ishonadi, ba'zan shundan zarar ko'radi.",
  },
  affinity: {
    menu: "Sizga mos qiyofa",
    formTitle: "Sizga qanday odam mos keladi",
    formDescription:
      "Bitta tug'ilgan sananing o'zi kifoya. Hech kimning tug'ilgan kunini bilmasangiz ham — hatto ko'nglingizda hech kim bo'lmasa ham — o'qishingiz mumkin.",
    meLegend: "Siz",
    genderHint:
      "An'anaviy Saju turmush o'rtoq o'rnini jinsga qarab boshqacha o'qiydi. Belgilamasangiz, o'sha bo'lim taxmin qilinmaydi, balki hisobdan chiqariladi.",
    seekingLabel: "Kimni izlayapsiz",
    seekingHint:
      "Turmush o'rtoq o'rni (Jeongjae / Jeonggwan) faqat ikkala jins ma'lum bo'lgandagina aniqlanadi.",
    seekingAny: "Belgilanmagan",
    submit: "Reklamani ko'rib, munosabat natijasini ko'ring",
    submitting: "Qidirilmoqda…",

    resultTitle: "Sizga mos qiyofa",
    intro:
      "Jadvalingiz qaysi qiyofadagi odamga moyilligini yig'ib berdik. **Bu turlarni tug'ilgan kunni bilishdan ancha oldin, tabiatiga qarab tanib olsa bo'ladi.**",
    scoreCaption:
      "Bular moslik hisoblagichi ishlatadigan bo'limlar bali — qo'shilgan moslik darajasi emas.",
    meTitle: "Sizning o'rningiz",
    meBody: "Sizning turingiz — {dayMaster}, hozirgi holatingiz esa — {strength}.",
    meHint:
      "Saju tug'ilgan yil, oy, kun va soatni sakkiz belgi bilan yozadi. **Tug'ilgan kunning birinchi belgisi sizni bildiradi** — u kun hokimi (日干) deb ataladi. Quyidagi turlar ham shu bitta belgiga qarab ajratilgan.",
    bestTitle: "Sizga mos qiyofalar",
    bestHint:
      "Bu — sherigingizning kun hokimi, ya'ni **u tug'ilgan kunning quvvati** — o'n turga ajratilgan, shundan uchtasi siznikiga yaxshi tishlashadi. Ko'pincha uni tug'ilgan kunni bilishdan ancha oldin, quyidagi xatti-harakatdan taxmin qilsa bo'ladi.",
    signsTitle: "Bu shunday ko'rinadi",
    avoidTitle: "Mehnat talab qiladigan qiyofa",
    avoidHint:
      "Bu ogohlantirish emas. Bu yengillik keyinroq, ikkovingiz vaqt sarflaganingizdan keyin kelishini bildiradi.",
    bondLabel: "Tabiat tishlashuvi",
    spouseLabel: "Turmush o'rtoq o'rni",
    spouseSkipped: "Jins belgilanmagani uchun bu bo'lim hisobdan chiqarildi",
    scoreHelp:
      "**Tabiat tishlashuvi** — ikkovingiz tug'ilgan kunlarning quvvati bir-biriga qanday tishlashishini ko'radi. Bir-birini itaradigan va tortadigan juftlik ham, yin va yang qarama-qarshi bo'lganda eng yuqori ball oladi.\n**Turmush o'rtoq o'rni** — an'anaviy Saju turmush o'rtoq uchun alohida o'rin ajratadi: erkakka Jeongjae, ayolga Jeonggwan. Buni **ikki tomonlama** tekshiramiz — u siz uchun o'sha o'rinda turadimi va siz u uchun o'sha o'rinda turasizmi. Ikkalasi birga bo'lsa, an'ana eng yuqori baholaydigan juftlik chiqadi.",
    typeHeading: "{name} kabi odam",
    needTitle: "Hozir sizga yetishmayotgan quvvat",
    needBody:
      "Sherigingizda {elements} kuchli bo'lsa, sizda yupqa turgan joy to'ladi.",
    needHint:
      "Odamning besh unsurini bir qarashda bilib bo'lmaydi. Ammo uning tug'ilgan sanasini bilsangiz, avvalo shu joyga qarang.",
    zodiacTitle: "Qo'shimcha sifatida mucha",
    zodiacHint:
      "Mucha uchun faqat tug'ilgan yil kerak, shuning uchun uni eng tez tekshirasiz. Ammo u to'rt ustundan biri — uni ishora sifatida qabul qiling.",
    zodiacGood: "Sizga mos muchalar",
    zodiacHard: "Ishqalanadigan muchalar",
    tableType: "Tur",
    tableSign: "Mucha",
    tableYears: "Tug'ilgan yillar",
    bornYear: "tug'ilgan yili {year}",
    younger: "{n} yosh kichik",
    older: "{n} yosh katta",
    sameAge: "tengdosh",
    zodiacYearsCaution:
      "Sajuda yil 1-yanvarda emas, Ipchunda (4-fevral atrofida) almashadi. **Yanvarda yoki fevral boshida tug'ilgan har kim oldingi yilning muchasiga kiradi**, shuning uchun bunday tug'ilgan kunlarda ikki yilni birga ko'ring.",
    dayBranchTitle: "Bu odam menga mos keladimi?",
    dayBranchBody:
      "Kimningdir sizga mosligini tekshirish uchun tug'ilgan sananing o'zi yetadi.\nTo'liq talqin uchun sahifa pastidagi Saju mosligidan foydalaning.",
    check: {
      button: "Tug'ilgan kun bo'yicha tekshirish",
      title: "Bu odam qaysi qiyofada?",
      body: "Tug'ilgan sanani kiriting, biz uning yuqoridagi o'n turdan qaysi biri ekanini aytamiz. Moslik bali hisoblanmaydi.",
      submit: "Tekshirish",
      checking: "Tekshirilmoqda…",
      rank: "sizning ro'yxatingizda {rank}-o'rin",
      heading: "Bu odam — {name}",
      caution:
        "Bu faqat tug'ilgan kunni o'qiydi. **Agar u yarim tun atrofida tug'ilgan bo'lsa**, kun ikki tomonga og'ishi mumkin, yanvar va fevral boshidagi tug'ilgan kunlar esa oldingi yil muchasiga kiradi.",
      close: "Yopish",
      another: "Boshqa odamni tekshirish",
      error: "Sanani tekshiring — bunday sana yo'q yoki chegaradan tashqarida.",
    },
    nextTitle: "Ko'nglingizda kimdir bormi?",
    nextBody:
      "Ikkala tug'ilgan sanani kiriting, yuqoridagi barcha bo'limlar qo'shilgan haqiqiy moslik darajasini olasiz.",
    nextButton: "Saju mosligini ko'rish",
    recalculate: "Qayta ko'rish",
    copyLink: "Natija havolasini nusxalash",
    copied: "Nusxalandi",
    missingInput: "Natijani o'qib bo'lmadi. Iltimos, boshidan boshlang.",
    partialTime:
      "Tug'ilgan vaqt kiritilmagani uchun soat ustuni hisobga olinmadi. Uni qo'shsangiz, nima yetishmayotgani aniqroq ko'rinadi.",
    disclaimer:
      "An'anaviy Saju nuqtai nazaridan ma'lumot. Bu sizga muayyan odamni izlashni yoki undan qochishni aytmaydi.",
  },
  result: {
    title: "Moslik natijasi",
    totalLabel: "Moslik darajasi",
    breakdown: "Bo'limlar bo'yicha ball",
    recalculate: "Qaytadan boshlash",
    copyLink: "Natija havolasini nusxalash",
    copied: "Nusxalandi",
    missingInput: "Bu natijani o'qib bo'lmadi. Iltimos, sanalarni qayta kiriting.",
    partialTime:
      "Tug'ilgan vaqt kiritilmagani uchun soat ustuni hisobga olinmadi. Uni qo'shsangiz, talqin aniqroq bo'ladi.",
    engineVersion: "Hisob mezoni",
    disclaimer:
      "Bu an'anaviy Saju talqini bo'lib, faqat ma'lumot uchun beriladi. Bu ilmiy bashorat ham, munosabat haqidagi qat'iy hukm ham emas.",
  },
  ads: { label: "Reklama" },
  analyzing: {
    title: "Ikkala jadval solishtirilmoqda",
    quotes: [
      "Kerakli odamni uchratishdan ko'ra, uni tanib olish muhimroq.",
      "Yaxshi juftlik hech tortishmaydigan juftlik emas — tortishgandan keyin qaytib keladigan juftlik.",
      "Saju tayyor javob emas. U bir-birini tushunish uchun bitta til, xolos.",
      "Ba'zi juftliklar o'xshaganidan oson, boshqalari esa o'xshamagani uchun o'rgatadi.",
      "Uzoq davom etadigan munosabatlar odatda hech narsa aytilmay qolmagan munosabatlardir.",
      "Uning yo'li begona tuyulsa, demak unda sizda yo'q narsa bor.",
      "Moslik yarmi tug'ma, yarmi esa quriladigan narsa.",
      "Suyanish va berish navbat bilan almashsa, munosabat uzoq yashaydi.",
      "Baldan ko'ra muhimi — o'sha balni qanday o'qishingiz.",
      "Fasllaringiz boshqacha bo'lsa, bir-biringizga o'z faslingizni so'zlab bering.",
    ],
    gateTitle: "Natijangiz tayyor",
    gateBody:
      "Uni ochish uchun qisqa reklamani ko'ring. Reklama daromadi bu xizmatni bepul tutib turadi.",
    watchButton: "Reklamani ko'rib, natijani ochish",
    watching: "Reklama ko'rilmoqda",
    remaining: "Natija {seconds} soniyadan keyin ochiladi",
  },
  report: {
    title: "Bu talqinni PDF sifatida saqlang",
    body: "Bu natijani uch sahifali PDF ga aylantiramiz; unga ekranda ko'rsatilmaydigan besh unsur kuchi raqamlari ham kiradi.",
    buyButton: "{price} to'lab yuklab olish",
    preparing: "Hozircha mavjud emas",
    ordering: "Buyurtma yaratilmoqda…",
    paying: "To'lov amalga oshirilmoqda…",
    issuing: "Hisobot tayyorlanmoqda…",
    done: "Yuklab olindi. Qaytadan olish uchun quyidagi tugmani bosing.",
    failed: "To'lov yoki yuklab olish amalga oshmadi. Birozdan so'ng qayta urinib ko'ring.",
    retry: "Qaytadan yuklab olish",
    contents: [
      "1-sahifa — moslik darajasi, juftlikning kuchli tomoni va e'tibor beriladigan joylar",
      "2-sahifa — munosabatning shakli, o'n xudo va bo'limlar bo'yicha ballar",
      "3-sahifa — ikkala jadval va besh unsur kuchi",
    ],
    consentLabel:
      "Bu to'lovdan keyin darhol yetkaziladigan raqamli mahsulot ekanini va **yuklab olish tugagach, oddiy fikr o'zgarishi sababli tovardan voz kechish cheklanishini** tushundim.",
    consentRequired: "To'lashdan oldin voz kechish shartlarini tasdiqlang.",
    productInfoTitle: "Mahsulot ma'lumoti",
    productInfo: [
      ["Ishlab chiqaruvchi", "{brand}"],
      ["Format", "Bitta PDF hujjat (3 sahifa), to'lovdan so'ng darhol ekrandan yuklab olinadi."],
      ["Talablar", "PDF ochadigan har qanday qurilma. O'rnatish yoki ro'yxatdan o'tish shart emas."],
      ["Foydalanish muddati", "Cheklovsiz. Yuklab olingan fayl sizda qoladi."],
      ["Qayta yuklab olish", "Bitta buyurtma bo'yicha besh martagacha. Biz nusxasini saqlamaymiz, shuning uchun natija ekranidan chiqib ketsangiz, uni qayta yaratib bo'lmaydi."],
      ["Voz kechish", "Yuklab olish boshlanguncha to'liq qaytariladi. Tugagandan keyin fikr o'zgarishi sababli voz kechish cheklanadi (Koreya elektron tijorat qonuni 17-modda 2-band)."],
      ["Almashtirish va qaytarish xarajati", "Yo'q — raqamli mahsulot, hech narsa jo'natilmaydi."],
    ],
    refundContact:
      "Pulni qaytarish yoki savollar uchun quyidagi mijozlar markazi yoki elektron pochtaga murojaat qiling. Hujjat yaratilmagan bo'lsa yoki yechib olingan summa buyurtmadan farq qilsa, to'liq qaytaramiz.",
  },
  affinityReport: {
    title: "Mos qiyofa talqinini PDF sifatida saqlang",
    body: "Bu talqinni to'rt sahifali PDF ga aylantiramiz. Unga **ekran ko'rsatmaydigan to'liq reyting** ham kiradi — ekran uchta eng yaxshisini beradi, PDF esa o'nta turni va o'n ikkita muchani to'liq oladi.",
    buyButton: "{price} to'lab yuklab olish",
    preparing: "Tayyorlanmoqda",
    ordering: "Buyurtma yaratilmoqda…",
    paying: "To'lov amalga oshirilmoqda…",
    issuing: "Hisobot yig'ilmoqda…",
    done: "Yuklab olindi. Qaytadan olish uchun quyidagi tugmani bosing.",
    failed: "To'lov yoki yuklab olish o'tmadi. Tez orada qayta urinib ko'ring.",
    retry: "Qaytadan yuklab olish",
    contents: [
      "1-sahifa — Sizning o'rningiz va sizga nima yetishmayotgani",
      "2-sahifa — Sizga mos uchta qiyofa va xatti-harakat ishoralari",
      "3-sahifa — Mehnat talab qiladigan qiyofa hamda kun hokimlarining to'liq reytingi",
      "4-sahifa — O'n ikki muchaning to'liq reytingi, tug'ilgan yillari bilan",
    ],
    consentLabel:
      "Bu to'lovdan keyin darhol yetkaziladigan raqamli mahsulot. **Yuklab olish tugagach, fikr o'zgarishi sababli voz kechish huquqi cheklanishini** tushundim.",
    consentRequired: "To'lashdan oldin voz kechish shartlariga rozilik bildiring.",
    productInfoTitle: "Mahsulot ma'lumoti",
    productInfo: [
      ["Ishlab chiqaruvchi", "{brand}"],
      ["Format", "Bitta PDF hujjat (4 sahifa), to'lovdan so'ng darhol shu ekrandan yuklab olinadi."],
      ["Talablar", "PDF ochadigan har qanday qurilma. O'rnatish ham, hisob ham kerak emas."],
      ["Mavjudlik muddati", "Vaqt chegarasi yo'q. Yuklab olingan fayl sizniki bo'lib qoladi."],
      ["Qayta yuklab olish", "Bitta buyurtma bo'yicha 5 martagacha. Faylni saqlamaymiz, shuning uchun bu ekrandan chiqib ketsangiz, uni qayta yig'ib bo'lmaydi."],
      ["Voz kechish", "Yuklab olish tugaguncha to'liq qaytariladi. Tugagandan keyin fikr o'zgarishi sababli voz kechish cheklanadi."],
      ["Almashtirish va qaytarish xarajati", "Yo'q. Jo'natiladigan narsa yo'q."],
    ],
    refundContact:
      "Pulni qaytarish yoki savollar uchun quyidagi qo'llab-quvvatlash xizmati yoki elektron pochtaga murojaat qiling. Hujjat umuman yaratilmagan bo'lsa yoki yechib olingan summa buyurtmadan farq qilsa, to'liq qaytaramiz.",
  },
  footer: {
    privacy: "Maxfiylik",
    terms: "Shartlar",
    refund: "Qaytarish",
    pricing: "Narxlar",
    legalEntity: "Kompaniya",
    representative: "Vakil",
    businessNumber: "Ro'yxat raqami",
    mailOrderNumber: "Onlayn savdo",
    address: "Manzil",
    customerCenter: "Mijozlarga xizmat",
    email: "Email",
    privacyOfficer: "Maxfiylik vakili",
    hostingProvider: "Hosting",
    providedBy: "Taqdim etuvchi",
    effective: "Kuchga kirish sanasi",
    backHome: "Bosh sahifaga",
  },
  bands: {
    EXCELLENT: "Juda yaxshi moslik",
    GOOD: "Kuchli moslik",
    FAIR: "O'rtacha moslik",
    CHALLENGING: "Mehnat talab qiladigan moslik",
  },
  engines: {
    saju: {
      name: "Saju mosligi",
      description:
        "Kun hokimi unsurlari, unsurlar muvozanati va kun tarmog'ini birga o'qiydi.",
    },
    zodiac: {
      name: "Mucha mosligi",
      description: "Ikki tug'ilgan yil tarmog'i orasidagi munosabatni o'qiydi.",
    },
  },
  factors: {
    dayMasterRelation: "Kun hokimi unsurlari",
    spouseStar: "Turmush o'rtoq yulduzi",
    elementSupply: "Unsurlar ta'minoti",
    dayBranchRelation: "Kun tarmog'i",
    branchRelation: "Mucha belgilari",
  },
  notes: {
    "strength.dayMasterRelation":
      "Tabiatlaringiz bir-biriga xizmat qiladigan tarzda joylashgan. Sherigingizning yo'li begona tuyulganda ham, u oxir-oqibat sizda yetishmagan narsani to'ldiradi.",
    "strength.spouseStar":
      "Ikkovingiz ham an'anada turmush o'rtoq o'rni deb o'qiladigan quvvatni tashiysiz. Boshidanoq sababsiz yengil tuyulgan bo'lsa, ehtimol sababi shu.",
    "strength.elementSupply":
      "Har biringizda ikkinchisiga hozir kerak bo'lgan narsa bor. Yolg'iz qo'zg'atish qiyin bo'lgan ishlar birga osonroq yuradi.",
    "strength.dayBranchRelation":
      "Kun tarmog'i an'anada turmush o'rtoqning o'rni deb o'qiladi. Sizniki bir-biriga yaxshi tushgan, shuning uchun birga o'tkazilgan vaqt qulay kechadi.",
    "strength.branchRelation":
      "Mucha belgilaringiz bir-biriga yaxshi tushgan — chetdan tabiiy ko'rinadigan va birinchi uchrashuvdayoq oson o'qiladigan juftlik.",
    "caution.dayMasterRelation":
      "Tabiatlar mana shu yerda ishqalanadi. Bitta ish oldida sur'at va uslubingiz farq qiladi, buni esa ataylab qilingan deb o'qish oson. Xulosadan oldin jarayon haqida kelishib oling.",
    "caution.spouseStar":
      "Ikkovingiz ham an'ana ikkinchisining turmush o'rtoq o'rni deb ataydigan unsurni tashimaysiz. Tortishish darhol bo'lmasligi mumkin; bu juftlik vaqt o'tishi bilan to'planadi.",
    "caution.elementSupply":
      "Har biringizga kerak bo'lgan narsa ikkinchisida ham yupqa. Ikkovingiz uddalaydigan ishni juda yaxshi qilasiz — ammo ikkovingizda ham yetishmaydigan joylar bo'sh qolaveradi. Uni munosabatdan tashqaridan to'ldirgan ma'qul.",
    "caution.dayBranchRelation":
      "Birga yashash o'rnida ishqalanish ehtimoli bor. Odatda katta masalalarda emas, kundalik odatlarda ko'rinadi, shuning uchun bir nechta qoidani oldindan kelishib qo'yish yordam beradi.",
    "caution.branchRelation":
      "Mucha belgilaringiz bir-biriga qarama-qarshi turadi. Narsalarga boshqacha qaraysiz, bu ishqalanish keltiradi — ayni paytda bir-biringizdan o'rganadigan narsa ham ko'p degani.",

    "spouseStar.MUTUAL":
      "Har biringiz ikkinchisining turmush o'rtoq o'rniga aniq to'g'ri kelasiz — an'anaviy Saju eng yuqori baholaydigan juftlik.",
    "spouseStar.STRONG":
      "Biringiz turmush o'rtoq o'rniga aniq to'g'ri kelasiz, ikkinchingiz esa unga yaqin. Bir-biringizga qaratilgan tuyg'uning o'lchami biroz farq qilishi mumkin.",
    "spouseStar.PARTIAL":
      "Faqat biringiz ikkinchisining turmush o'rtoq o'rnida turasiz. Dastlabki tortishish bir tomonga og'adi, shuning uchun buni aytishni kechiktirmagan ma'qul.",
    "spouseStar.SLIGHT":
      "Biringiz turmush o'rtoq o'rniga yondosh o'rindasiz. Bu darhol keladigan tortishishdan ko'ra, birga o'tkazilgan vaqt bilan to'planadi.",
    "spouseStar.NONE":
      "Ikkovingiz ham an'ana turmush o'rtoq o'rni deb ataydigan joyni egallamaysiz. Bu juftlik tortishish orqali emas, yonma-yon yashash orqali quriladi.",
    "dayMaster.CLASH_BONDED":
      "{elementA} va {elementB} bir-birini tiyadi, lekin qutblari qarama-qarshi. An'ana buni er-xotin juftligi deb o'qiydi — taranglik mehrga aylanadi.",
    "dayMaster.CLASH_HARSH":
      "{elementA} va {elementB} bir xil qutb bilan bir-birini tiyadi. Zaryad kuchli, ammo har biri ikkinchisiga yuklaydigan og'irlik ham shunchalik katta.",
    "dayMaster.FLOW_GUARDED":
      "Biringiz quvvat berasiz, ikkinchingiz uni ushlab qoladi. O'tkirroq turtki sherik tomonidan mo'tadillashtiriladi — an'anada qo'riqlangan juftlik deb ataladi.",
    "dayMaster.FLOW_BLOCKED":
      "Biringiz quvvat berasiz, ikkinchingiz esa uni olib ketadi. Bu yerda beruvchi taraf tez charchaydi, shuning uchun kim nima berayotganini va nima olayotganini ochiq aytish foyda qiladi.",
    "dayMaster.PEER_EVEN":
      "Ikkovingiz ham {elementA} quvvatini bir xil qutb bilan tashiysiz. Bu munosabatni teng va qulay qiladi, lekin hech biringiz ikkinchisini oldinga turtmaysiz.",
    "dayMaster.PEER_RIVAL":
      "Ikkovingiz ham {elementA} quvvatini qarama-qarshi qutb bilan tashiysiz. Tortishish tez keladi, ammo bitta maydon uchun bellashasiz.",
    "supply.AMPLE":
      "Har biringizda ikkinchisiga kerak narsa mo'l. Birinchi odamga {needA}, ikkinchisiga {needB} kerak — va sherigi o'sha joyni to'ldiradi.",
    "supply.ENOUGH":
      "Har biringizda ikkinchisiga kerak narsadan ma'lum ulush bor: birinchi odamga {needA}, ikkinchisiga {needB}.",
    "supply.THIN":
      "Har biringizga kerak narsa — birinchi odamga {needA}, ikkinchisiga {needB} — sherigida yupqa.",
    "supply.SCARCE":
      "Hech biringiz ikkinchisiga kerak narsani osongina bera olmaysiz: birinchi odamga {needA}, ikkinchisiga {needB} kerak, ammo ikkala joy ham bo'sh. Uni munosabatdan tashqaridan to'ldirgan ma'qul.",
    "dayBranch.SAMHAP":
      "Kun tarmoqlari uchlik uyg'unlik hosil qiladi — turmush o'rtoq o'rnidagi eng kuchli juftlik.",
    "dayBranch.BANHAP":
      "Kun tarmoqlari uchlikning tayanch belgisi atrofida yarim uyg'unlik hosil qiladi. Turmush o'rtoq o'rnida yaxshi mos juftlik.",
    "dayBranch.YUKHAP": "Kun tarmoqlari oltilik uyg'unlik hosil qiladi. Bir-biringizni o'zingizga tortasiz.",
    "dayBranch.SAME":
      "Kun tarmoqlari bir xil. Bu munosabatni yengil qiladi, lekin yangilik kam qoldiradi.",
    "dayBranch.NEUTRAL": "Kun tarmoqlari orasida alohida munosabat yo'q.",
    "dayBranch.WONJIN":
      "Kun tarmoqlari yashirin ranjish holatida. Ochiq janjal kam chiqadi, ammo nomini topish qiyin bo'lgan gina to'planib boradi — uni ichda saqlagandan ko'ra o'sha zahoti aytgan yaxshi.",
    "dayBranch.CHUNG":
      "Kun tarmoqlari to'qnashadi. Bu o'rin ishqalanishga moyil, shuning uchun bir-biringiz bilan qanday gaplashishingiz muhim.",
    "zodiac.SAMHAP":
      "{animalA} va {animalB} uchlik uyg'unlik hosil qiladi — mucha bo'yicha eng yaxshi juftlik.",
    "zodiac.BANHAP":
      "{animalA} va {animalB} uchlikning tayanchi atrofida yarim uyg'unlik hosil qiladi, shuning uchun bir-biringizga mos kelasiz.",
    "zodiac.YUKHAP": "{animalA} va {animalB} oltilik uyg'unlik hosil qiladi. Bir-biringizga yaxshi mos kelasiz.",
    "zodiac.SAME": "Ikkovingiz ham {animalA} yilida tug'ilgansiz, shuning uchun tabiatlaringiz bir-biriga sado beradi.",
    "zodiac.NEUTRAL": "{animalA} va {animalB} orasida alohida munosabat yo'q.",
    "zodiac.WONJIN":
      "{animalA} va {animalB} yashirin ranjish holatida — ochiq janjal kamdan-kam bo'ladi, lekin sezilmas nomuvofiqlik uzoq qoladi.",
    "zodiac.CHUNG":
      "{animalA} va {animalB} to'qnashadi. Keskin farq qilasiz, bu esa o'rganadigan narsa ko'p degani.",
  },
  animals: {
    rat: "Sichqon",
    ox: "Ho'kiz",
    tiger: "Yo'lbars",
    rabbit: "Quyon",
    dragon: "Ajdaho",
    snake: "Ilon",
    horse: "Ot",
    goat: "Echki",
    monkey: "Maymun",
    rooster: "Xo'roz",
    dog: "It",
    pig: "Cho'chqa",
  },
  elements: {
    WOOD: "Yog'och",
    FIRE: "Olov",
    EARTH: "Tuproq",
    METAL: "Metall",
    WATER: "Suv",
  },
};
