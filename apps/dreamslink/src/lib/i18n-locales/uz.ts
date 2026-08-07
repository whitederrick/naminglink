// 드림링크 화면 사전의 Uzbek (O'zbekcha)(uz) 번역이다.
//
// **`scripts/translate-i18n.ts`가 만든 파일이다.** 키 구성·중첩·배열 길이는 en을 그대로
// 복사하고 문자열만 갈아 끼우므로 구조가 어긋날 자리가 없다. 손으로 고칠 때도 키를 더하거나
// 빼지 말 것 — `verify-i18n`이 en과 대조해 잡는다.
//
// **옛 궁합 번역을 통째로 되살린 것이 아니다.** en 원문이 글자까지 같은 자리(푸터·언어
// 선택기·광고 라벨)만 물려받고, 해몽용으로 새로 쓴 자리는 새 ko·en에서 다시 옮겼다.

import type { Dictionary } from "@/lib/i18n";

export const uz: Dictionary = {
  "brand": "Dreams-Link",
  "tagline": "Bugungi tush, an'anaviy koreys tush ramzlari orqali o'qiladi",
  "currentLanguage": "Joriy til",
  "moreLanguages": "Yana",
  "closeLanguages": "Yopish",
  "dream": {
    "title": "Tushlarni talqin qilish",
    "subtitle": "O'zingiz ko'rgan tushni yozing va biz uni an'anaviy koreys tush ramzlari lug'atida qidiramiz.",
    "textLabel": "Siz nima haqida tush ko'rdingiz?",
    "textPlaceholder": "Esingizda qolganidek yozing. Masalan: toza suvdan bir baliq sakrab chiqdi",
    "moodLabel": "Uyanish paytida his qilgan his-tuyg'ularingiz",
    "moods": {
      "good": "Yaxshi",
      "scary": "Qo'rqinchli",
      "strange": "G'alati",
      "sad": "G'amgin",
      "unsure": "Ishonch hosil emasman"
    },
    "recurringLabel": "Men bu tushni qayta-qayta ko'raman",
    "submit": "Tushimni o'qish",
    "submitting": "Qidiryapmiz…",
    "errorEmpty": "Iltimos, tush haqida biroz ko'proq yozing.",
    "errorGeneric": "O'qishni yuklab olish mumkin emas edi. Iltimos, bir ozdan keyin qayta urinib ko'ring.",
    "resultTitle": "Tushni o'qish",
    "symbolsHeading": "Tushingizda topilgan ramzlar",
    "noSymbols": "Bizning lug'atimizdan bu tushda an'anaviy ramzlar ko'rinmadi. Ma'noni ixtiro qilmaslik uchun buni bo'sh qoldiramiz.",
    "themesHeading": "Ular birgalikda nimani anglatadi",
    "conceptionNotice": "Bu yerda tae mong (homiladorlikni bildiruvchi tush) sifatida an'anaviy ravishda o'qilgan ramzlar mavjud. Bu homiladorlikni aniqlamaydi.",
    "browseSymbols": "An'anaviy ramzlar lug'atini ko'rish",
    "popularSymbols": "Tez-tez qidiriladigan ramzlar",
    "disclaimer": "Bu an'anaviy tush o'qish nuqtai nazaridan ma'lumot materialidir, tibbiy, moliyaviy yoki huquqiy maslahat emas. Siz yozgan tushni saqlamaymiz.",
    "again": "Boshqa tushni o'qish"
  },
  "landing": {
    "title": "Tushingizni o'qing\nan'anaviy usulda",
    "subtitle": "Biz sizning tushingizdagi ramzlarni an'anaviy koreys tush talqini lug'atida qidiramiz.\nTug'ilgan sana, ro'yxatdan o'tish kerak emas.",
    "howTitle": "Qanday ishlaydi",
    "steps": [
      "Tushingizni eslaganingizcha yozing. Bir yoki ikki jumla kifoya.",
      "Biz an'anaviy koreys tush ramzlari lug'atida paydo bo'lgan ramzlarni qidiramiz. Agar ramz u yerda bo'lmasa, biz buni aytamiz.",
      "Siz har bir ramzning uzoq vaqtdan beri nima anglatishini va ularning birgalikda nimani ko'rsatishini ko'rasiz."
    ],
    "privacyTitle": "Yozgan tushingiz saqlanmaydi",
    "privacyBody": "Siz yozgan narsalar faqat talqin ishlanayotgan paytda ishlatiladi va hech qachon yozilmaydi.\nHisob kerak emas va talqin tugagach, serverda hech narsa qolmaydi.",
    "disclaimer": "Bu an'anaviy tush talqini nuqtai nazaridan ma'lumotdir. Bu kelajakni bashorat qilish emas, shuningdek, tibbiy yoki moliyaviy maslahat emas."
  },
  "ads": {
    "label": "Reklama"
  },
  "selfAds": {
    "label": "Bog'liq xizmatlar",
    "comingSoon": "Tez orada",
    "purposes": {
      "naminglink": "Ma'no va chiziq soni bo'yicha tanlangan koreyscha va hanja nomlari",
      "inyeonlink": "Ikkita odamning to'rt ustuni va zodiak belgilari orqali qanday mos kelishini o'qish",
      "sajulink": "Sizning o'z to'rt ustuningiz va bugun ularni qanday kutib olishi",
      "dreamslink": "Ramzlar lug'atidan olingan tushlarni o'qish",
      "placelink": "Koreyada uchrashuv uchun borish kerak bo'lgan joylar, baham ko'rilgan va tavsiya etilgan"
    }
  },
  "analyzing": {
    "title": "Tushingizdagi ramzlarni qidiryapsiz",
    "quotes": [
      "Bir tush ko'proq o'tgan bir necha kunni aks ettiradi, kelajakni emas.",
      "Bir xil ramz har kimning tushiga qarab boshqacha talqin qilingan.",
      "An'anaviy tush talqini javob kaliti emas. Bu uzoq vaqt davomida to'plangan hikoyalar to'plamidir.",
      "Qo'rqinchli tush yomon tush bilan bir xil emas. Bu hayajonlangan ongning qoldirgan izidir.",
      "Agar siz faqat bir parchani eslasangiz, bu yaxshi. Bir ramz boshlash uchun yetarli.",
      "Qayta-qayta keladigan tush odatda tugallanmagan biror narsa bilan birga keladi.",
      "Suvning qanchalik toza va qanday rangda ekanligi, eski o'quvchilar tomonidan eng yaqin kuzatilgan narsalardir.",
      "Uyg'onganingizdagi his-tuyg'u ko'rgan narsangiz kabi uzoq davom etadi.",
      "Yaxshi tush yoki yomon tush bo'lsin, uni kuningizni belgilashiga yo'l qo'ymaslik yaxshiroq.",
      "Tush talqini kelajakda nima bo'lishi haqida so'z emas. Bu allaqachon mavjud bo'lgan narsaga yana bir nazar."
    ],
    "watching": "Reklama ko'rilmoqda",
    "remaining": "Natija {seconds} soniyadan keyin ochiladi"
  },
  "dreamCard": {
    "title": "Ushbu tushni karta sifatida saqlang",
    "body": "Siz yozgan tush va biz topgan ramzlarni bitta tasvirga joylashtirdik. Bu **PDF emas, rasm fayli**, shuning uchun uni saqlashingiz yoki shunday yuborishingiz mumkin.",
    "buyButton": "{price} ga oling",
    "preparing": "Tayyorlanmoqda",
    "ordering": "Buyurtma yaratilmoqda…",
    "paying": "To'lov olinmoqda…",
    "issuing": "Karta tayyorlanmoqda…",
    "done": "Tayyor. Uni yana yuklab olish uchun quyidagi tugmani ishlating.",
    "failed": "To'lov yoki yuklab olishda xato yuz berdi. Iltimos, bir ozdan keyin qayta urinib ko'ring.",
    "retry": "Yana yuklab olish",
    "contents": [
      "Tushingizda topilgan ramzlar va ularning an'anaviy ma'nolari",
      "Ushbu ramzlar birgalikda nimani anglatishini",
      "Tushning sanasi va ramzlar lug'ati versiyasi"
    ],
    "consentLabel": "Bu to'lovdan so'ng darhol taqdim etiladigan raqamli kontentdir. **yuklab olish tugagandan so'ng fikrni o'zgartirish huquqi cheklanganligini** tushunaman.",
    "consentRequired": "To'lovdan oldin qaytarish shartlariga rozi bo'lishingiz kerak.",
    "productInfoTitle": "Mahsulot haqida ma'lumot",
    "productInfo": [
      [
        "Ta'minotchi",
        "{brand}"
      ],
      [
        "Format",
        "1 ta rasm fayli (PNG), to'lovdan so'ng darhol ushbu ekrandan yuklab olinadi. Bu PDF hujjati emas."
      ],
      [
        "Talablar",
        "Rasmni ochish imkoniyati bo'lgan har qanday qurilma. O'rnatish yoki hisob yaratish shart emas."
      ],
      [
        "Mavjudlik",
        "Vaqt cheklovi yo'q. Yuklab olingan fayl sizga tegishli."
      ],
      [
        "Qayta yuklab olish",
        "Bir xil buyurtma bo'yicha 5 marta. Server faylni saqlamaydi, shuning uchun natija ekranidan chiqib ketgandan so'ng, uni qayta yaratish mumkin emas."
      ],
      [
        "Qaytarish",
        "Yuklab olish tugamadan oldin to'liq qaytarish. Keyin, fikrni o'zgartirish uchun qaytarish cheklangan (Koreya Elektron Tijorat Qonuni 17(2)-modda)."
      ],
      [
        "Qaytarish xarajatlari",
        "Yo'q. Raqamli kontent yetkazib berilmaydi."
      ]
    ],
    "refundContact": "Qaytarish yoki savollar uchun, quyidagi qo'llab-quvvatlash stoli yoki elektron pochta manziliga murojaat qiling. Agar fayl hech qachon yaratilmagan bo'lsa yoki to'langan summa buyurtmadan farq qilsa, biz to'liq qaytaramiz.",
    "pdfLanguageNotice": "Karta ustidagi matn ushbu ekran bilan bir xil tilida chiqadi."
  },
  "conceptionReport": {
    "title": "Tug'ilish-omen haqidagi o'qishni PDF sifatida saqlang",
    "body": "Agar an'anaviy ravishda homiladorlik belgisi sifatida o'qilgan ramzlar paydo bo'lsa, 4 betlik PDFda nima paydo bo'lgan, uning an'anaviy ma'nosi va bu o'qish qayerdan kelib chiqqani ko'rsatiladi. Bu homiladorlikni yoki bolaning jinsini aniqlamaydi.",
    "buyButton": "{price} ga oling",
    "preparing": "Tayyorlanmoqda",
    "ordering": "Buyurtma yaratilmoqda…",
    "paying": "To'lov olinmoqda…",
    "issuing": "Hisobot tayyorlanmoqda…",
    "done": "Bajarildi. Qayta yuklab olish uchun quyidagi tugmani ishlating.",
    "failed": "To'lov yoki yuklab olish muvaffaqiyatsiz bo'ldi. Iltimos, bir ozdan keyin qayta urinib ko'ring.",
    "retry": "Qayta yuklab olish",
    "contents": [
      "1-bet — siz yozgan tush va unda topilgan narsalar",
      "2-bet — har bir ramz va uning an'anaviy ma'nosi",
      "3-bet — nima uchun bular tug'ilish alomatlari sifatida o'qiladi",
      "4-bet — saqlash uchun sahifa (sana va ogohlantirishlar)"
    ],
    "consentLabel": "Bu raqamli kontent to'lovdan so'ng darhol taqdim etiladi. **bir marta yuklab olish tugagach, fikrni o'zgartirish huquqi cheklanganligini tushunaman**.",
    "consentRequired": "To'lovdan oldin qaytarish shartlariga rozi bo'lishingiz kerak.",
    "productInfoTitle": "Mahsulot haqida ma'lumot",
    "productInfo": [
      [
        "Taqdim etuvchi",
        "{brand}"
      ],
      [
        "Format",
        "1 ta PDF hujjati (4 bet), to'lovdan so'ng darhol ushbu ekranda yuklab olinadi."
      ],
      [
        "Talablar",
        "PDFni ochish imkoniyati bo'lgan har qanday qurilma. O'rnatish va hisob yaratish shart emas."
      ],
      [
        "Mavjudlik",
        "Cheklov yo'q. Yuklab olingan fayl sizning mulkingiz."
      ],
      [
        "Qayta yuklab olish",
        "Bir xil buyurtma bo'yicha 5 marta. Server faylni saqlamaydi, shuning uchun natija ekranidan chiqib ketgandan so'ng, uni qayta yaratish mumkin emas."
      ],
      [
        "Bekor qilish",
        "Yuklab olish tugamaganidan oldin to'liq qaytarish. Keyin, fikrni o'zgartirish uchun bekor qilish cheklangan (Koreya Elektron Tijorat Qonuni 17(2)-modda)."
      ],
      [
        "Qaytarish xarajatlari",
        "Yo'q. Raqamli kontent yetkazib berilmaydi."
      ]
    ],
    "refundContact": "Qaytarish yoki savollar uchun, qo'llab-quvvatlash xizmatiga yoki quyidagi elektron pochta manziliga murojaat qiling. Agar hujjat hech qachon tayyorlanmagan bo'lsa yoki to'lov miqdori buyurtmadan farq qilsa, biz to'liq qaytaramiz.",
    "pdfLanguageNotice": "PDF hujjati ushbu ekran bilan bir xil tilga chiqadi."
  },
  "footer": {
    "privacy": "Maxfiylik",
    "terms": "Shartlar",
    "refund": "Qaytarish",
    "pricing": "Narxlar",
    "legalEntity": "Kompaniya",
    "representative": "Vakil",
    "businessNumber": "Ro'yxat raqami",
    "mailOrderNumber": "Onlayn savdo",
    "address": "Manzil",
    "customerCenter": "Mijozlarga xizmat",
    "email": "Email",
    "privacyOfficer": "Maxfiylik vakili",
    "hostingProvider": "Hosting",
    "providedBy": "Taqdim etuvchi",
    "effective": "Kuchga kirish sanasi",
    "backHome": "Bosh sahifaga"
  }
};
