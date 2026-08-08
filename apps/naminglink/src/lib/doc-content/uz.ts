import type { DocPage, NoticeCopy } from "./types";
import type { DocKey } from "./ko";

/** O‘zbekcha — `scripts/translate-doc-content.ts`가 만든다. 손으로 고치지 말 것. */
export const UZ_DOCS = {
  "about": {
    "eyebrow": "Haqqında",
    "title": "Naming-Link haqida",
    "summary": "Biz sizga koreyscha ismlarni tanlash va tushunishda yordam beramiz. Natijalarimizni qanday asosda shakllantirayotganimiz va nima qilmasligimiz haqida ma'lumot beramiz.",
    "backLabel": "Bosh sahifa",
    "sections": [
      {
        "title": "Nima qilamiz",
        "blocks": [
          {
            "p": "Naming-Link sizga **koreyscha ismlarni tanlash va tushunishda** yordam beradi — bolalar ismi uchun hanja, xorijda foydalanish uchun koreyscha ism, o'z ismingizning Hangul yozuvi va muhr yoki chop etilgan hisobot kabi esdaliklar."
          },
          {
            "p": "Natijalarni ko'rish **bepul va hisob qaydnomasi talab qilmaydi.** Pullik mahsulotlar ekranda ko'rsatilganlarni qayta sotmaydi: ular ko'proq nomzodlarni ochadi, yozma tahlil qo'shadi yoki natijani saqlashingiz mumkin bo'lgan narsaga aylantiradi."
          }
        ]
      },
      {
        "title": "Bizning javoblarimiz nima asosida",
        "blocks": [
          {
            "p": "Hanja **Koreya Oliy sudining rasmiy ism-hanja jadvalidan** keladi. Har bir belgi ismlarda foydalanish uchun belgilangan o'qilishi bilan birga keladi va jadvaldan tashqaridagi belgilar ro'yxatdan o'tkazilmaydi. Biz bu ro'yxatga qo'shmaymiz yoki sevimlilarni tanlamaymiz."
          },
          {
            "p": "Saju va besh elementlar **koreyscha lunisolal taqvimidan** hisoblanadi, tug'ilgan vaqt tug'ilgan joy uchun haqiqiy quyosh vaqti bilan to'g'irlanadi. O'qish an'anaviy ma'lumotnoma bo'lib, bashorat emas."
          },
          {
            "p": "Yozma tushuntirishlar AI tomonidan ishlab chiqariladi. **Yana biror narsani ixtiro qilmasligi** uchun modelga faqat sizning kiritishingiz va bizning ma'lumotlarimiz beriladi va shundan tashqariga chiqmasligi aytiladi. Qo'llanmalar buni batafsil tushuntiradi."
          }
        ]
      },
      {
        "title": "Nima qilmaymiz",
        "blocks": [
          {
            "ul": [
              "**Biz bashorat qilmaymiz.** Bu yerda hech narsa omad, boylik yoki himoya va'da qilmaydi.",
              "**Biz ismingizni saqlamaymiz.** Bepul natijalar hech qachon serverlarimizda yozilmaydi va pullik hujjatlar nusxasini saqlamasdan yetkaziladi.",
              "**To'lov qilish yaxshiroq javob bermaydi.** Reklama orqali ochish va to'lov orqali ochish bir xil mazmun beradi."
            ]
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Xizmat 23 tilda mavjud. Pullik PDF-lar arab va khmer tillari uchun ingliz tilida chiqariladi — PDF yaratish vositasi bu yozuvlarni qo'llab-quvvatlamaydi — va biz buni to'lovdan oldin ekranda aytamiz."
          }
        ]
      },
      {
        "title": "Aloqa",
        "blocks": [
          {
            "p": "Bizning kompaniya ma'lumotlarimiz va biz bilan bog'lanish usullari [aloqa sahifasida](/contact) mavjud, shu jumladan qaytarish, maxfiylik so'rovlari va xato xabarlari."
          }
        ]
      }
    ]
  },
  "guide/reading": {
    "eyebrow": "O'qish",
    "title": "Belgilangan o'qish — har bir belgi uchun bitta talaffuz",
    "summary": "Rasmiy jadval faqat belgilarni ro'yxatga olmaydi. U shuningdek, har bir belgi ismlarda ishlatilganda qanday o'qilishi belgilangan.",
    "backLabel": "Qo'llanma",
    "sections": [
      {
        "title": "Har bir belgi uchun belgilangan o'qish",
        "blocks": [
          {
            "p": "Ism-hanja jadvali faqat qaysi belgilar ishlatilishi mumkinligini belgilamaydi. **U shuningdek, har bir belgi ismlarda ishlatilganda qanday o'qilishi belgilangan.** Ushbu belgilangan o'qish ro'yxatdan o'tkazish uchun asos bo'ladi."
          },
          {
            "p": "Ko'p hanja bir nechta mumkin bo'lgan o'qishlarga ega. Biroq, ism hujjatlarda yoziladi va ovoz chiqariladi, shuning uchun u aniq bitta o'qishga ega bo'lishi kerak. Shuning uchun jadval har bir belgiga ismlarda foydalanish uchun o'qishini belgilaydi va boshqa o'qish ro'yxatdan o'tkazilmaydi."
          }
        ]
      },
      {
        "title": "Shuning uchun ovoz birinchi o'rinda",
        "blocks": [
          {
            "p": "Bu sababdan Naming-Link hanja qidirishdan oldin ovozni belgilaydi. Agar ism \"지은\" bo'lsa, ma'nosi faqat **지** o'qilishi belgilangan belgilar va **은** o'qilishi belgilangan belgilar orasidan tanlanishi mumkin."
          },
          {
            "p": "Ma'no qanchalik yaxshi bo'lmasin, o'qilishi mos kelmaydigan belgi ushbu ism uchun ishlatilmaydi. Biz shuningdek, ismning ovozini belgi bilan moslashtirish uchun o'zgartirmaymiz — ism bir umr davomida aytiladi va ovoz avval belgilangan, hanja esa keyin keladi."
          }
        ]
      },
      {
        "title": "Familiya ismlari bu jadvaldan tashqarida",
        "blocks": [
          {
            "p": "Bu ko'pincha noto'g'ri tushuniladi. **Jadval berilgan ismni boshqaradi, familiya ism emas.** Familiya ismi allaqachon oilaviy ro'yxatda mavjud bo'lgan narsaga amal qiladi, shuning uchun ba'zi odamlar ism-hanja jadvalida bo'lmagan belgilarni familiya sifatida ishlatadilar."
          },
          {
            "p": "Shuning uchun Naming-Link familiya hanjalarini boshqacha ko'radi. Biz faqat familiya topishda yordam beramiz va jadvaldan tashqarida bo'lgan belgi uchun to'g'ridan-to'g'ri kiritish maydonini qoldiramiz. Namgung va Seonwoo kabi ikki sillabali familiyalar ham shunday kiritiladi."
          }
        ]
      }
    ]
  },
  "guide/how-hangul-transliteration": {
    "eyebrow": "Qanday ishlaydi",
    "title": "Biz ismingizni Hangulda qanday yozamiz",
    "summary": "Biz xorijiy ismlarni Hangulda yozishda qanday ovozlarni tanlaymiz va nega hanja qo'shmaymiz.",
    "backLabel": "Qo'llanma",
    "sections": [
      {
        "title": "Biz ovozni, ma'noni emas, ko'chiramiz",
        "blocks": [
          {
            "p": "Bu xizmat **ismingizni** Hangulda yozadi. Sizga koreyscha ism bermaydi. Michael \"마이클\" bo'ladi — bir xil ism, koreyslar o'qishi va aytishi uchun yozilgan. Biz uni tasodifan o'xshash ma'noga ega bo'lgan koreyscha ismga almashtirmaymiz."
          },
          {
            "p": "Agar siz koreyscha ismni xohlasangiz, **bu boshqa xizmat**. Biri ismingizni saqlaydi va faqat yozuvni o'zgartiradi; ikkinchisi yangi ism taklif qiladi."
          }
        ]
      },
      {
        "title": "Koreyscha bo'lmagan ovozlar qanday ishlanadi",
        "blocks": [
          {
            "p": "Har bir tilda koreys tilida yo'q ovozlar mavjud — f, v, z, th va koreys tilida farqlanmaydigan unli tovushlar. Bular uchun biz **koreys tilida gapiruvchi odamning aslida aytadigan ovozini** yozamiz, asl fonetikani har bir belgi bilan transkriptsiya qilish o'rniga. Maqsad — ishlatiladigan yozuv, eng texnik jihatdan sodiq bo'lgan emas."
          },
          {
            "p": "Bir xil yozuv ism qayerdan kelganiga qarab farq qilishi mumkin, shuning uchun biz sizning tilingiz va mamlakatingizni so'raymiz va o'sha talaffuzdan ish boshlaymiz."
          }
        ]
      },
      {
        "title": "Bir nechta yozuvlar, yonma-yon",
        "blocks": [
          {
            "p": "Bitta to'g'ri javob yo'q. Asl ovozga eng yaqin yozuv, Koreyada eng ko'p ishlatiladigan yozuv va yozish oson bo'lgan yozuv ko'pincha uch xil narsadir. Shuning uchun biz ularni birga ko'rsatamiz va ularni ajratadigan narsalarni aytamiz."
          },
          {
            "p": "Agar ularning hech biri to'g'ri his qilmasa, siz xohlagan ovoz haqida bir maslahat qo'shishingiz va yana bir marta o'tkazishingiz mumkin — masalan, ma'lum bir sillabani boshqacha yozish kerakligini aytish."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bu yerda hanja yo'q",
        "blocks": [
          {
            "p": "Biz transliteratsiyaga hanja qo'shmaymiz. Hanja ma'no olib yuradi, va bu jarayon ovoz haqida. Faqat ovozga mos keladigan belgilarni moslashtirish sizni hech qachon so'ramagan ma'noga olib kelishi mumkin."
          }
        ]
      }
    ]
  },
  "guide/how-global-to-korean": {
    "eyebrow": "Qanday ishlaydi",
    "title": "Biz koreyscha ismni qanday quramiz",
    "summary": "Biz mavjud familiyalardan tanlaymiz, ismingizni aytish va yozish qanchalik osonligini baholaymiz va ismning maqsadini so'raymiz.",
    "backLabel": "Qo'llanma",
    "sections": [
      {
        "title": "Biz familiyadan boshlaymiz",
        "blocks": [
          {
            "p": "Koreyada familiya birinchi o'rinda turadi va berilgan ismlardan farqli o'laroq, u erkin ixtiro qilinmaydi — siz uni meros qilib olasiz. Shuning uchun biz faqat koreyslar tomonidan haqiqatan ham ishlatiladigan familiyalarni taklif qilamiz. Bizning asosiy bazamiz **eng ko'p tarqalgan 20 ta familiya**, bu esa aholi sonining taxminan 80% ni qamrab oladi."
          },
          {
            "p": "Agar sizning familiyangiz tasodifan haqiqiy koreys familiyasi bilan ovozda mos kelsa — Wang \"왕\", Ye \"예\" — biz avval o'shani ko'rsatamiz. Asl ismingizga bog'lanish saqlab qolish tasodifiy tanlangan familiyadan ko'ra muhimroq."
          },
          {
            "p": "Siz familiyani o'zingiz tanlashingiz yoki bizga tavsiya qilishimizga ruxsat berishingiz mumkin. Har qanday holatda ham bu **mavjud familiya** bo'ladi."
          }
        ]
      },
      {
        "title": "Aytilishi oson, yozilishi oson",
        "blocks": [
          {
            "p": "Bu Koreyada sizni haqiqatan ham chaqiradigan ism, shuning uchun biz birinchi navbatda koreyslar buni bir marta eshitib, yozib olishlarini tekshiramiz. Har safar yozilishi kerak bo'lgan ism sizga yuk bo'ladi, bizga emas."
          },
          {
            "p": "Ma'no ham muhim. Koreyscha berilgan ismlar odatda bir ma'noni o'z ichiga oladi, shuning uchun biz sizga ism qanday o'qilishi va nima uchun tanlanganini aytamiz — faqat ismning o'zi emas."
          }
        ]
      },
      {
        "title": "Biz ismning maqsadini so'raymiz",
        "blocks": [
          {
            "p": "Universitet hujjatlari uchun ism do'stlaringizning bir xonada baqiradigan ismi bilan bir xil emas yoki onlayn foydalanadigan nom. Biz sizdan uni qanday ishlatmoqchi ekanligingizni so'raymiz va buni hisobga olamiz."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bu transliteratsiya emas",
        "blocks": [
          {
            "p": "Bu yerda biz **yangi koreyscha ismni taklif qilamiz**. Agar siz mavjud ismingizni Hangulda yozishni xohlasangiz — Michael \"마이클\" sifatida — [Hangul yozuv qo'llanmasiga](/guide/how-hangul-transliteration) qarang."
          }
        ]
      }
    ]
  },
  "notice": {
    "eyebrow": "E'lonlar",
    "title": "E'lonlar",
    "summary": "Xizmatdan foydalanishingizga ta'sir qiladigan o'zgarishlarni e'lon qilamiz.",
    "backLabel": "Bosh sahifa",
    "sections": []
  },
  "contact": {
    "eyebrow": "Aloqa",
    "title": "Biz bilan bog'laning",
    "summary": "Savollar, qaytarish, maxfiylik so'rovlari va xato xabarlari uchun biz bilan bog'lanish usullari, kompaniya ma'lumotlarimiz bilan.",
    "backLabel": "Bosh sahifa",
    "sections": [
      {
        "title": "Bizga elektron pochta yozing",
        "blocks": [
          {
            "p": "Bizga **{email}** manziliga yozing. Biz ikki ish kunida javob beramiz. Buyurtma bilan bog'liq har qanday narsalar — to'lov, qaytarish, olmagan fayl — iltimos, **buyurtma raqamingiz yoki to'lov qilingan elektron pochta** manzilingizni qo'shing."
          },
          {
            "p": "Telefon so'rovlari: {customerCenter} (koreys ish vaqti)."
          }
        ]
      },
      {
        "title": "Bu yerga nima yuborish kerak",
        "blocks": [
          {
            "ul": [
              "**To'lovlar va qaytarish** — agar hujjat hech qachon tayyorlanmagan bo'lsa yoki to'lov miqdori buyurtmangizdan farq qilsa, biz to'liq qaytaramiz. [Qaytarish siyosati](/refund-policy)ga qarang.",
              "**Maxfiylik** — ma'lumotlaringizga kirish, to'g'rilash yoki o'chirish so'rovlari. [Maxfiylik siyosati](/privacy)ga qarang.",
              "**Tuzatish** — agar hanja ma'nosi, o'qilishi yoki hisoblash natijasi noto'g'ri ko'rinsa, bizga xabar bering. Qaysi ekranda va nima kiritganingizni aytish juda yordam beradi.",
              "**Boshqa narsalar** — hamkorlik va matbuot ham shu manzilga yuboriladi."
            ]
          }
        ]
      },
      {
        "title": "Kompaniya ma'lumotlari",
        "blocks": [
          {
            "ul": [
              "**Yuridik shaxs** — {companyName}",
              "**Vakil** — {representative}",
              "**Biznes ro'yxatga olish raqami** — {businessNumber}",
              "**Pochta orqali savdo raqami** — {mailOrderNumber}",
              "**Manzil** — {address}",
              "**Mijozlarga xizmat** — {customerCenter}",
              "**Elektron pochta** — {email}",
              "**Maxfiylik mas'uli** — {privacyOfficer}",
              "**Hosting provayderi** — {hostingProvider}"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Siz xabaringizda ism yoki tug'ilgan sanani kiritishingiz shart emas. Bepul natijalar serverlarimizda saqlanmaydi, shuning uchun biz ularni qayta topa olmaymiz — buyurtma raqami yetarli."
          }
        ]
      }
    ]
  }
} satisfies Record<DocKey, DocPage>;

export const UZ_NOTICES = {
  "kindLabels": {
    "service": "Xizmat",
    "product": "Mahsulotlar",
    "policy": "Siyosat",
    "support": "Yordam"
  },
  "intro": "Foydalanish shartlaringizga ta'sir qiladigan o'zgarishlar — narxlar, siyosatlar — bu yerda kuchga kirishidan oldin e'lon qilinadi. Ichki yaxshilanishlar ro'yxatga olinmaydi: bu yerda ko'rsatilganlar siz bilishingiz kerak bo'lgan narsalardir.",
  "empty": {
    "title": "Hali hech qanday e'lon yo'q",
    "body": "Biror narsa o'zgarganda, bu yerda paydo bo'ladi."
  },
  "effective": "{date} dan kuchga kiradi",
  "pager": {
    "label": "E'lon sahifalari",
    "newer": "← Yangilari",
    "older": "Eski →"
  },
  "items": {
    "2026-08-02-contact": {
      "title": "Aloqa va Haqida sahifalari endi ochiq",
      "body": [
        "Savollar, qaytarish, maxfiylik so'rovlari va xato xabarlari endi bitta joyga boradi. Pastki qismdagi aloqa sahifasi bizning elektron pochta va kompaniya ma'lumotlarimizni ko'rsatadi.",
        "Bizning javoblarimiz nima asosida va nima qilmasligimiz haqida ma'lumotlar haqida sahifada yozilgan."
      ]
    },
    "2026-08-01-pdf-language": {
      "title": "PDF hisobotlari arab va khmer tillari uchun ingliz tilida chiqariladi",
      "body": [
        "Agar siz xizmatdan arab yoki khmer tilida foydalansangiz, xarid qilgan PDF-ingiz ingliz tilida tayyorlanadi. Hujjatlarimizni joylashtiradigan vosita hali bu ikki yozuvda paragraflarni qo'llab-quvvatlamaydi.",
        "Ekran sizning tilingizda qoladi va ismingiz hujjat ichida o'z yozuvingizda chop etiladi.",
        "To'lovdan oldin ham xuddi shunday eslatma paydo bo'ladi. Vosita ushbu yozuvlarni qo'llab-quvvatlaganda, biz bu yerda aytamiz."
      ]
    },
    "2026-08-01-payments-preparing": {
      "title": "To'lovlar hali ochiq emas",
      "body": [
        "Ism yaratish va natijani ko'rish bugun bepul va hisob qaydnomasi talab qilinmaydi.",
        "Pullik mahsulotlar hali sotuvga chiqarilmagan. Narxlar sahifasida ko'rsatilgan miqdor sotuv ochilganda qo'llaniladi."
      ]
    }
  }
} satisfies NoticeCopy;
