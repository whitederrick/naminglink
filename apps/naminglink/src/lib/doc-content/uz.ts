import type { DocPage, NoticeCopy } from "./types";
import type { DocKey } from "./ko";

/** O‘zbekcha — `scripts/translate-doc-content.ts`가 만든다. 손으로 고치지 말 것. */
export const UZ_DOCS = {
  "about": {
    "eyebrow": "Haqqında",
    "title": "Naming-Link haqida",
    "summary": "Biz sizga koreyscha ismlarni tanlash va tushunishda yordam beramiz. Natijalarimizni qanday asosda shakllantirayotganimiz va nima qilmasligimizni tushuntiramiz.",
    "backLabel": "Bosh sahifa",
    "sections": [
      {
        "title": "Biz nima qilamiz",
        "blocks": [
          {
            "p": "Naming-Link sizga **koreyscha ismlarni tanlash va tushunishda** yordam beradi — bolalar ismidagi hanja, xorijda ishlatish uchun koreyscha ism, o'z ismingizning Hangul yozuvi va muhr yoki chop etilgan hisobot kabi esdaliklar."
          },
          {
            "p": "Natijalarni ko'rish **bepul va hisob qaydnomasi talab qilmaydi.** Pullik mahsulotlar ekranda ko'rsatilgan narsalarni qayta sotmaydi: ular ko'proq nomzodlarni ochadi, yozma tahlil qo'shadi yoki natijani saqlash mumkin bo'lgan narsaga aylantiradi."
          }
        ]
      },
      {
        "title": "Bizning javoblarimiz nima asosida",
        "blocks": [
          {
            "p": "Hanja **Koreya Oliy sudining rasmiy ism-hanja jadvalidan** olingan. Har bir belgi ismlarda ishlatish uchun belgilangan o'qilishi bilan birga keladi va jadvaldan tashqaridagi belgilar ro'yxatdan o'tkazilmaydi. Biz ushbu ro'yxatga qo'shmaymiz yoki sevimlilarni tanlamaymiz."
          },
          {
            "p": "Saju va besh elementli raqamlar **koreys lunisolal taqvimidan** hisoblanadi, tug'ilish vaqti tug'ilgan joy uchun haqiqiy quyosh vaqti bilan to'g'irlanadi. O'qish an'anaviy ma'lumot sifatida beriladi, bashorat emas."
          },
          {
            "p": "Yozma tushuntirishlar AI tomonidan ishlab chiqariladi. **narsalarni ixtiro qilishdan** saqlanish uchun, modelga faqat sizning kiritishingiz va bizning ma'lumotlarimiz beriladi va u ichida qolishi aytiladi. Qo'llanmalar buni batafsil tushuntiradi."
          }
        ]
      },
      {
        "title": "Biz nima qilmaymiz",
        "blocks": [
          {
            "ul": [
              "**Biz taqdirni aytmaymiz.** Bu yerda hech narsa omad, boylik yoki himoya va'da qilmaydi.",
              "**Biz ismingizni saqlamaymiz.** Bepul natijalar hech qachon serverlarimizga yozilmaydi va pullik hujjatlar nusxasini saqlamasdan yetkaziladi.",
              "**To'lov yaxshiroq javob bermaydi.** Reklama orqali ochish va to'lov orqali ochish bir xil mazmunni beradi."
            ]
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Xizmat 23 tilda mavjud. Pullik PDF hujjatlar arab va khmer tillarida ingliz tilida chiqariladi — PDF formatlash vositasi ushbu yozuvlarni qo'llab-quvvatlamaydi — va biz buni to'lovdan oldin ekranda aytamiz."
          }
        ]
      },
      {
        "title": "Aloqa",
        "blocks": [
          {
            "p": "Bizning kompaniya ma'lumotlarimiz va biz bilan bog'lanish usullari [aloqa sahifasida](/contact) joylashgan, shu jumladan qaytarish, shaxsiy ma'lumotlar so'rovlari va xato xabarlari."
          }
        ]
      }
    ]
  },
  "notice": {
    "eyebrow": "E'lonlar",
    "title": "E'lonlar",
    "summary": "Xizmatdan foydalanishingizga ta'sir etadigan o'zgarishlarni e'lon qilamiz.",
    "backLabel": "Bosh sahifa",
    "sections": []
  },
  "contact": {
    "eyebrow": "Aloqa",
    "title": "Biz bilan bog'laning",
    "summary": "Savollar, qaytarish, shaxsiy ma'lumotlar so'rovlari va xato xabarlari uchun biz bilan bog'lanish usullari, kompaniya ma'lumotlarimiz bilan.",
    "backLabel": "Bosh sahifa",
    "sections": [
      {
        "title": "Bizga elektron pochta orqali yozing",
        "blocks": [
          {
            "p": "Yozing **{email}**. Biz ikki ish kunida javob beramiz. Buyurtma bilan bog'liq har qanday narsalar — to'lov, qaytarish, olmagan fayl — iltimos, **buyurtma raqamingiz yoki to'lov qilingan elektron pochta** manzilingizni qo'shing."
          },
          {
            "p": "Telefon orqali so'rovlar: {customerCenter} (koreys ish vaqti)."
          }
        ]
      },
      {
        "title": "Bu yerga nima yuborish kerak",
        "blocks": [
          {
            "ul": [
              "**To'lovlar va qaytarish** — agar hujjat hech qachon tayyorlanmagan bo'lsa yoki to'lov miqdori sizning buyurtmangizdan farq qilsa, biz to'liq qaytaramiz. [Qaytarish siyosatini](/refund-policy) ko'ring.",
              "**Shaxsiy ma'lumotlar** — ma'lumotlaringizga kirish, tuzatish yoki o'chirish so'rovlari. [Shaxsiy ma'lumotlar siyosatini](/privacy) ko'ring.",
              "**Tuzatish** — agar hanja ma'nosi, o'qilishi yoki hisoblash natijasi noto'g'ri ko'rinsa, bizga xabar bering. Qaysi ekranda va nima kiritganingizni aytish juda yordam beradi.",
              "**Boshqa narsalar** — hamkorlik va matbuot uchun ham shu manzilga yuboring."
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
              "**Biznes ro'yxatdan o'tkazish raqami** — {businessNumber}",
              "**Pochta orqali savdo raqami** — {mailOrderNumber}",
              "**Manzil** — {address}",
              "**Mijozlarga xizmat** — {customerCenter}",
              "**Elektron pochta** — {email}",
              "**Shaxsiy ma'lumotlar mas'uli** — {privacyOfficer}",
              "**Hosting provayderi** — {hostingProvider}"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Xabaringizda ism yoki tug'ilgan sanani kiritishingiz shart emas. Bepul natijalar serverlarimizda saqlanmaydi, shuning uchun biz ularni qayta topa olmaymiz — buyurtma raqami yetarli."
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
  "intro": "Foydalanish shartlaringizga ta'sir etadigan o'zgarishlar — narxlar, siyosatlar — bu yerda kuchga kirishidan oldin e'lon qilinadi. Ichki yaxshilanishlar ro'yxatga olinmaydi: bu yerda ko'rsatilganlar siz bilishingiz kerak bo'lgan narsalardir.",
  "empty": {
    "title": "Hali e'lonlar yo'q",
    "body": "Biror narsa o'zgarganda, bu yerda ko'rsatiladi."
  },
  "effective": "{date} dan kuchga kiradi",
  "pager": {
    "label": "E'lon sahifalari",
    "newer": "← Yangi",
    "older": "Eski →"
  },
  "items": {
    "2026-08-02-contact": {
      "title": "Aloqa va Haqida sahifalari endi ochiq",
      "body": [
        "Savollar, qaytarish, shaxsiy ma'lumotlar so'rovlari va xato xabarlari endi bitta joyga boradi. Pastki qismdagi aloqa sahifasida bizning elektron pochta va kompaniya ma'lumotlarimiz keltirilgan.",
        "Bizning javoblarimiz nima asosida va nima qilmasligimiz haqida ma'lumotlar haqida sahifada yozilgan."
      ]
    },
    "2026-08-01-pdf-language": {
      "title": "PDF hisobotlari arab va khmer tillarida ingliz tilida chiqariladi",
      "body": [
        "Agar siz xizmatdan arab yoki khmer tilida foydalansangiz, xarid qilgan PDF hujjatingiz ingliz tilida tayyorlanadi. Hujjatlarimizni joylashtiruvchi vosita hali ushbu yozuvlarni paragraflarga joylay olmaydi.",
        "Ekran sizning tilingizda qoladi va ismingiz hujjat ichida o'z yozuvingizda chop etiladi.",
        "To'lovdan oldin ham bir xil eslatma ko'rsatiladi. Vosita ushbu yozuvlarni qo'llab-quvvatlaganda, biz bu yerda aytamiz."
      ]
    },
    "2026-08-01-payments-preparing": {
      "title": "To'lovlar hali ochiq emas",
      "body": [
        "Ism yaratish va natijani ko'rish bugun bepul va hisob qaydnomasi talab qilinmaydi.",
        "Pullik mahsulotlar hali sotuvga chiqarilmagan. Narxlar sahifasida ko'rsatilgan miqdorlar sotuv ochilganda qo'llaniladi."
      ]
    }
  }
} satisfies NoticeCopy;
