import type { LegalLocaleDocuments } from "@/lib/legal-locales/types";

// ko 원본에서 자동 생성된 번역이다(scripts/translate-legal.mjs). 손으로 고쳐도 되지만,
// 다시 생성하면 덮어쓴다 — 문구를 바꿀 일이 있으면 ko를 먼저 고치고 전체를 다시 만들 것.
// 사업자 정보와 가격은 플레이스홀더로 남아 있고 실제 값은 getLegalDocument가 넣는다.

const d0 = {
  "title": "Shaxsiy ma'lumotlarni qayta ishlash siyosati",
  "intro": "InyeonLink moslik hisoblash uchun zarur bo'lgan ma'lumotlarni saqlamaydi. Ushbu siyosat xizmat qanday ma'lumotlarni olishini, qanday ma'lumotlarni qoldirmasligini va qanday ma'lumotlar avtomatik ravishda yozilishini tushuntiradi.",
  "sections": [
    {
      "heading": "1. Saqlanmaydigan ma'lumotlar",
      "paragraphs": [
        "Moslik hisoblash uchun kiritilgan tug'ilgan sana, tug'ilish vaqti, tug'ilgan joy, jins, chaqiruvchi ism **hech qayerda saqlanmaydi.** So'rovni qayta ishlash davomida server xotirasida foydalaniladi va javob bilan birga yo'qoladi.",
        "Ma'lumotlar bazasiga yozilmaydi va alohida fayl sifatida ham qoldirilmaydi. Ro'yxatdan o'tish bo'lmagani uchun kiritilgan ma'lumotlar ma'lum bir shaxs bilan bog'lanmaydi."
      ]
    },
    {
      "heading": "2. Natija havolasida joylashgan ma'lumotlar",
      "paragraphs": [
        "Natija ekranining manzilida kiritilgan ma'lumotlar shifrlangan holda joylashgan. Biroq, bu qiymat manzilning # belgisidan keyin joylashgan va veb standartlariga ko'ra # dan keyin joylashgan ma'lumotlar brauzer tomonidan serverga yuborilmaydi. Shuning uchun natija havolasini ochganda, serverga ulanish yozuvlarida faqat manzilning yo'li qoladi.",
        "Natija havolasini boshqa odamga yuborsangiz, o'sha odam ham bir xil natijani ko'rishi mumkin. Havola o'z ichiga kiritilgan ma'lumotlarni saqlaydi, shuning uchun ulashish yoki ulashmaslikni foydalanuvchi o'zi hal qilishi kerak."
      ]
    },
    {
      "heading": "3. Avtomatik ravishda to'plangan ma'lumotlar",
      "paragraphs": [
        "Xizmat foydalanuvchini aniqlash uchun to'plangan ma'lumotlar yo'q. Biroq, veb xizmatni boshqarish uchun zarur bo'lgan minimal yozuvlar infratuzilma ta'minotchisi tomonidan avtomatik ravishda qoldiriladi."
      ],
      "bullets": [
        "Ulanish IP manzili, ulanma vaqti, brauzer turi kabi umumiy serverga ulanish yozuvlari",
        "Mamlakat ma'lumotlari — ekran tilini avtomatik ravishda belgilash uchun ishlatiladi va saqlanmaydi"
      ]
    },
    {
      "heading": "4. Cookie va reklama",
      "paragraphs": [
        "Xizmat o'z-o'zidan foydalanuvchini kuzatish uchun cookie-lardan foydalanmaydi.",
        "Hozirda ushbu xizmatda reklama joylashtirilmaydi. Kelajakda reklama joylashtirilsa, reklama ta'minotchisi (masalan, Google) reklama joylashtirish uchun cookie-lardan foydalanishi mumkin. O'shanda, ushbu bandni avval o'zgartirib, nimalar o'zgarishini tushuntirib beramiz."
      ]
    },
    {
      "heading": "5. To'lov paytida saqlanadigan ma'lumotlar",
      "paragraphs": [
        "Hozirda pullik mahsulotlar sotilmaydi, shuning uchun to'lov bilan bog'liq saqlanadigan ma'lumotlar ham yo'q.",
        "Sotuvni boshlaganda, to'lovni qayta ishlash va qonuniy savdo yozuvlarini saqlash uchun quyidagi ma'lumotlar saqlanadi. **O'shanda ham moslik hisoblash uchun kiritilgan qiymatlar va yaratilgan PDF saqlanmaydi**, ism, aloqa, manzil kabi foydalanuvchini aniqlovchi ma'lumotlar olinmaydi."
      ],
      "bullets": [
        "Buyurtma raqami va to'lov identifikatori",
        "To'lov summasi, valyuta va to'lov holati (to'lanmagan, to'langan, bekor qilingan)",
        "Mahsulot turi, qayta ishlash holati, hujjatni yuklab olish soni, buyurtma vaqti",
        "Buyurtma paytidagi ekran tili va to'lov hududi (ichki, xorijiy)",
        "Saqlash muddati — «Elektron tijorat va iste'molchilarni himoya qilish to'g'risidagi qonun»ning 6-moddasiga muvofiq, to'lov va tovarlarni taqdim etish bo'yicha yozuvlar 5 yil davomida, iste'molchilarning shikoyatlari yoki nizolarini hal qilish bo'yicha yozuvlar 3 yil davomida saqlanadi va keyin yo'q qilinadi."
      ]
    },
    {
      "heading": "6. Uchinchi shaxslarga taqdim etish va qayta ishlashni topshirish",
      "paragraphs": [
        "Saqlanadigan shaxsiy ma'lumotlar yo'qligi sababli uchinchi shaxslarga taqdim etiladigan shaxsiy ma'lumotlar ham yo'q.",
        "Xizmatni boshqarish uchun {hostingProvider}ning hosting infratuzilmasidan foydalaniladi va bu jarayonda yuqoridagi 3-banddagi ulanish yozuvlari ushbu tadbirkor siyosatiga muvofiq qayta ishlanadi.",
        "Pullik mahsulotlar sotuvini boshlaganda, ichki to'lovlar Toss Paymentsga, xorijiy to'lovlar PortOne (PayPal)ga topshiriladi. Kartalar raqami, hisob raqami kabi to'lov vositalari ma'lumotlari o'shanda ham ushbu tadbirkorlar tomonidan to'g'ridan-to'g'ri qayta ishlanadi va xizmat ulardan ma'lumot olmaydi."
      ]
    },
    {
      "heading": "7. Foydalanuvchining huquqlari",
      "paragraphs": [
        "Saqlanadigan shaxsiy ma'lumotlar yo'qligi sababli ko'rish, tuzatish yoki o'chirishni so'rash mumkin bo'lgan ma'lumotlar yo'q.",
        "Foydalanuvchi brauzer manzil satrining natija havolasini o'chirish orqali kiritilgan izlarni to'liq yo'q qilishi mumkin.",
        "Xizmatdan foydalanish bilan bog'liq savollar bo'lsa, quyidagi aloqa manzili orqali bizga xabar bering."
      ]
    },
    {
      "heading": "8. Bolalar shaxsiy ma'lumotlari",
      "paragraphs": [
        "Ushbu xizmat 14 yoshga to'lmagan bolalarga mo'ljallanmagan va bolalardan shaxsiy ma'lumotlarni to'plamaydi."
      ]
    },
    {
      "heading": "9. Shaxsiy ma'lumotlarni himoya qilish mas'uliyati",
      "paragraphs": [
        "Himoya mas'uli: {privacyOfficer}",
        "Aloqa: {email} / {customerCenter}"
      ]
    },
    {
      "heading": "10. Siyosatni o'zgartirish",
      "paragraphs": [
        "Ushbu siyosatni o'zgartirganimizda, amalga oshirish sanasi va o'zgarishlar mazmuni ushbu sahifada e'lon qilinadi. Reklama joylashtirish yoki pullik mahsulot sotishni boshlash kabi haqiqatan ham qayta ishlash mazmuni o'zgaradigan hollarda, o'zgarishlar haqida avval xabar beramiz."
      ]
    }
  ],
  "effectiveLabel": "Amalga oshirish sanasi"
};

const d1 = {
  "title": "Foydalanish shartlari",
  "intro": "Ushbu shartlar InyeonLink (keyingi o‘rinda “xizmat”) dan foydalanish shartlarini belgilaydi. Xizmatdan foydalanish orqali siz ushbu shartlarga rozilik bildirgan hisoblanasiz.",
  "sections": [
    {
      "heading": "1. Xizmatning tabiati",
      "paragraphs": [
        "Xizmat kiritilgan tug‘ilgan sanaga asoslanib, an'anaviy nomli (saju) va o‘n ikki hayvon (zodiak) munosabatlari qoidalarini qo‘llab, ikki shaxsning munosabatlarini ma'lumot sifatida ko‘rsatadi.",
        "Taqdim etilayotgan moslik darajasi va izohlar **an'anaviy talqin nuqtai nazaridan ma'lumot sifatida berilgan bo‘lib, ilmiy bashorat yoki munosabatlar bo‘yicha aniq xulosalar emas.** Ballar past bo‘lsa, munosabat yomon degani emas va yuqori bo‘lsa, munosabat kafolatlangan degani emas."
      ]
    },
    {
      "heading": "2. Foydalanish to‘lovi",
      "paragraphs": [
        "Hozirda xizmat to‘liq bepul taqdim etiladi va a'zo bo‘lish shart emas.",
        "Pullik mahsulotlar (hisobot PDF ikki xil) sotuvga chiqarilganda, quyidagi 3-band shartlari qo‘llaniladi. Sotuv boshlanishidan oldin ushbu shartlar yana e'lon qilinadi."
      ]
    },
    {
      "heading": "3. Pullik mahsulotlar va qaytarish",
      "paragraphs": [
        "Sotilayotgan pullik mahsulotlar **hisobot PDF ikki xil**dir. Ikkalasi ham ekran natijalarini hujjatga aylantirib beradi va ekranda ko‘rsatilmagan ma'lumotlarni o‘z ichiga oladi.",
        "**Saju moslik hisobot PDF** — 7 sahifa. Ikkita kuchning harakat yo‘nalishi, har birining saju'sini chuqurroq ko‘rish uchun jadval, to‘rt ustunning kesishgan joyi, hisoblash asoslari kiritiladi. Mahalliy to‘lov {priceDomestic} (QQS kiritilgan), xorijiy to‘lov {priceGlobal}.",
        "**Inyonnin tug‘ilishi hisobot PDF** — 4 sahifa. Ekranda ko‘rsatilmagan o‘n ikkita hayvon va o‘n ikki hayvonning to‘liq reyting jadvali kiritiladi. Mahalliy to‘lov {priceAffinityDomestic} (QQS kiritilgan), xorijiy to‘lov {priceAffinityGlobal}.",
        "Mahalliy to‘lovlar Toss Payments orqali kredit va debit kartalar va qulay to‘lov (TossPay, KakaoPay, NaverPay, Payco va boshqalar) orqali amalga oshirilishi mumkin, xorijiy to‘lovlar esa PortOne orqali PayPal orqali amalga oshiriladi. Yakuniy summa to‘lov ekranida ko‘rsatilgan summaga muvofiq bo‘ladi.",
        "**Xizmat foydalanuvchining kiritgan ma'lumotlarini ham, tayyorlangan PDF fayllarni ham saqlamaydi.** To‘lov tasdiqlangandan so‘ng, darhol hujjat tayyorlanadi va serverda hech narsa qoldirilmaydi. Shuning uchun yuklab olingan faylni foydalanuvchi o‘zi saqlashi kerak.",
        "Yuklab olish to‘xtatilsa yoki fayl yo‘qolsa, bir xil buyurtma bilan **5 marta** qayta yuklab olish mumkin. Biroq, natija ekranidan chiqib kiritilgan ma'lumotlar yo‘qolsa, qayta tayyorlanmaydi, shuning uchun to‘lovdan so‘ng faylni saqlashingizni iltimos qilamiz."
      ],
      "bullets": [
        "**To‘lovdan keyin yuklab olish boshlanmasdan oldin** har qanday vaqtda bekor qilishingiz va to‘liq qaytarib olishingiz mumkin.",
        "**Yuklab olish tugagandan so‘ng** oddiy xohish bilan qaytarish cheklangan. To‘lov darhol taqdim etiladigan va tiklash imkoni bo‘lmagan raqamli kontent bo‘lib, bu «Elektron tijorat va iste'molchilarni himoya qilish to‘g‘risida»gi qonunning 17-moddasi 2-bandida belgilangan qaytarish cheklovlari sababidir.",
        "**Tizim xatosi tufayli hujjat tayyorlanmasa, fayl ochilmasa yoki to‘lov summasi buyurtmadan farq qilsa** qayta berish yoki to‘liq qaytarish bilan hal qilinadi.",
        "**Natijalar bo‘yicha shikoyatlar** qaytarish sababi hisoblanmaydi. Moslik natijalari an'anaviy talqin nuqtai nazaridan ma'lumot sifatida berilgan va uning tabiati to‘lovdan oldin ma'lum qilinadi (yuqoridagi 1-band).",
        "Qayta berish uchun 5 marta foydalanilgandan keyin qayta so‘rov qilish qaytarish sababi hisoblanmaydi.",
        "**Kichik yoshdagi shaxs qonuniy vakilining roziligisiz to‘lov qilgan taqdirda** o‘zi yoki qonuniy vakili ushbu to‘lovni bekor qilish huquqiga ega. Quyidagi aloqa ma'lumotlari orqali xabar bersangiz, sizga qaytarish amalga oshiriladi."
      ]
    },
    {
      "heading": "4. Hisoblash natijalari haqida",
      "paragraphs": [
        "Barcha ballar ochiq qoidalarga muvofiq hisoblanadi, shuning uchun bir xil qiymat kiritilganda har doim bir xil natija olinadi.",
        "Tug‘ilish vaqtini kiritmasangiz, vaqt ustunini hisobga olmasdan hisoblanadi, shuning uchun natija farq qilishi mumkin. Tug‘ilish joyini aniq tanlash natijalarni hisoblashni yanada aniq qiladi.",
        "Mansel hisoblash ochiq hisoblash kutubxonalaridan foydalanadi va vaqt zonasi va davrni hisoblash usuliga ko‘ra boshqa mansel va natijalar farq qilishi mumkin."
      ]
    },
    {
      "heading": "5. Foydalanuvchining mas'uliyati",
      "paragraphs": [
        "Foydalanuvchi boshqalarning tug‘ilgan sanasini kiritishi mumkin, ammo bu natijalarni boshqalarga zarar yetkazish maqsadida ishlatmasligi kerak.",
        "Xizmat natijalarini nikoh, ajralish, ishga olish, savdo va boshqa shaxslarning huquqlariga ta'sir ko‘rsatadigan qarorlar uchun asos sifatida ishlatmang. Xizmat bunday maqsadlar uchun yaratilmagan."
      ]
    },
    {
      "heading": "6. Ta'qiqlangan harakatlar",
      "paragraphs": [
        "Quyidagi harakatlar taqiqlanadi."
      ],
      "bullets": [
        "Avtomatlashtirilgan vositalar orqali ortiqcha so‘rovlar yuborib xizmatni ishga tushirishga to‘sqinlik qilish",
        "Xizmat natijalarini haqiqat yoki mutaxassis bahosi sifatida taqdim etish",
        "Xizmatni nusxalash va o‘zgartirib bir xil xizmatni taqdim etish"
      ]
    },
    {
      "heading": "7. Mas'uliyatdan ozod qilish",
      "paragraphs": [
        "Xizmat faqat ma'lumot sifatida taqdim etiladi va foydalanuvchi natijalar asosida qabul qilgan qarorlar va ularning natijalari uchun mas'uliyatni o‘z zimmasiga olmaydi.",
        "Tabiiy ofatlar, infratuzilma ta'minotchilarining nosozliklari kabi nazorat qila olmaydigan sabablarga ko‘ra xizmat to‘xtatilsa, buning natijasida yuzaga kelgan zarar uchun mas'uliyatni o‘z zimmasiga olmaydi."
      ]
    },
    {
      "heading": "8. Intellektual mulk huquqlari",
      "paragraphs": [
        "Xizmatning ekranlari, matnlari, hisoblash qoidalarining amalga oshirilishiga oid huquqlar operatorga tegishlidir. Foydalanuvchilar shaxsiy maqsadlar uchun natijalarni saqlash yoki ulashishi mumkin."
      ]
    },
    {
      "heading": "9. Shartlarni o‘zgartirish va qonuniy asos",
      "paragraphs": [
        "Shartlarni o‘zgartirish hollarda, amalga oshirish sanasi bilan birga ushbu sahifada e'lon qilinadi.",
        "Ushbu shartlar Janubiy Koreya qonunlariga muvofiq bo‘lib, xizmatdan foydalanish bilan bog‘liq nizolar tegishli qonunlar tomonidan belgilangan tartibga muvofiq hal qilinadi."
      ]
    }
  ],
  "effectiveLabel": "Amalga kirish sanasi"
};

const d2 = {
  "title": "Qaytarish va bekor qilish siyosati",
  "intro": "Kompatibilite hisobot PDF'sining bekor qilish va qaytarish mezonlari. Shartnoma 3-bandidagi ma'lumotlarni alohida to'pladik.",
  "sections": [
    {
      "heading": "1. Mahsulotning tabiati",
      "paragraphs": [
        "Sotilayotgan mahsulot **kompatibilite hisobot PDF** bo'lib, to'lov tasdiqlangandan so'ng darhol hujjat tayyorlanib, yuklab olish uchun taqdim etiladigan raqamli kontentdir.",
        "**Xizmat foydalanuvchining kiritgan ma'lumotlarini va tayyorlangan PDF faylini saqlamaydi.** Shuning uchun yuklab olingan faylni foydalanuvchi o'zi saqlashi kerak."
      ]
    },
    {
      "heading": "2. Taklifni bekor qilish",
      "paragraphs": [
        "Elektron tijorat qonunida belgilangan mezonlarga amal qilinadi."
      ],
      "bullets": [
        "**Yuklab olish boshlanmasdan oldin** istalgan vaqtda bekor qilib, to'liq qaytarib olish mumkin.",
        "**Yuklab olish tugagandan so'ng** oddiy xohish bilan taklifni bekor qilish cheklangan. To'lov darhol taqdim etiladigan va qaytarib bo'lmaydigan raqamli kontent bo'lib, bu «Elektron tijorat va iste'molchilarni himoya qilish to'g'risida»gi qonunning 17-moddasining 2-bandida belgilangan cheklov sabablari hisoblanadi. To'lov sahifasida bu haqda oldindan xabardor qilinadi va rozilik olinadi."
      ]
    },
    {
      "heading": "3. To'liq qaytariladigan hollarda",
      "paragraphs": [
        "Quyidagi hollarda sababni tekshirib, qayta berish yoki to'liq qaytarish amalga oshiriladi."
      ],
      "bullets": [
        "Tizim xatosi tufayli hujjat tayyorlanmagan hollarda",
        "Yuklab olingan fayl ochilmaydigan hollarda",
        "To'lov summasi buyurtma bilan farq qilgan hollarda",
        "**Voyaga yetmagan shaxs qonuniy vakilining roziligisiz to'lov qilgan hollarda** — o'zlari yoki qonuniy vakillari bekor qilishni so'rashlari mumkin."
      ]
    },
    {
      "heading": "4. Qaytarish sababi bo'lmagan hollarda",
      "paragraphs": [],
      "bullets": [
        "**Natijalar mazmuniga nisbatan norozilik.** Kompatibilite natijalari an'anaviy talqin nuqtai nazaridan ma'lumot sifatida taqdim etiladi va uning tabiati to'lovdan oldin ma'lum qilinadi.",
        "Qayta berishning 5 marta ishlatilganidan keyin qayta so'rov."
      ]
    },
    {
      "heading": "5. Qabul qilish usuli",
      "paragraphs": [
        "Qaytarish va savollar uchun mijozlar markaziga ({customerCenter}) yoki elektron pochta ({email}) orqali murojaat qilishingizni so'raymiz. Buyurtma raqamini ham aytsangiz, tasdiqlash tezroq bo'ladi.",
        "Qaytarish to'lov qilingan usulga qaytariladi va karta kompaniyasi yoki to'lov provayderining shartlariga qarab, qaytarish 3-7 ish kunini olishi mumkin."
      ]
    }
  ],
  "effectiveLabel": "Amalga oshirish sanasi"
};

const d3 = {
  "title": "Narxlar haqida ma'lumot",
  "intro": "Bepul xizmatlar va pullik mahsulotlarning narxlarini taqdim etamiz.",
  "sections": [
    {
      "heading": "1. Bepul",
      "paragraphs": [
        "**Muvofiqlik hisoblash va natijalarni ko'rish bepuldir.** Ro'yxatdan o'tish shart emas.",
        "Moslashuv darajasi, har bir bo'lim bo'yicha ballar, ikki kishining saju (사주) asosi va beshta element kuchi, munosabatlar shakli hammasini ekranda ko'rishingiz mumkin."
      ]
    },
    {
      "heading": "2. Muvofiqlik hisobot PDF (pullik)",
      "paragraphs": [
        "Ichki to'lov {priceDomestic} (Qo'shimcha qiymat solig'i kiritilgan) · Xalqaro to'lov {priceGlobal}",
        "Ekrandagi natijalarni 7 betli PDF hujjatiga aylantiramiz. Ikkita energiyaning harakat yo'nalishi, har birining saju (사주) ko'rinishini yanada chuqurroq ko'rish uchun jadval, to'rt ustun uchrashadigan joy, hisoblash asoslari kabi ekranda ko'rinmaydigan ma'lumotlar kiritiladi.",
        "Bir xil buyurtma bilan **5 marta** qayta yuklab olishingiz mumkin. Biroq, natija ekrani tashqarisida kiritilgan ma'lumotlar yo'qolsa, qayta yaratish mumkin emas, shuning uchun to'lovdan so'ng faylni saqlashingizni iltimos qilamiz."
      ]
    },
    {
      "heading": "3. Inyonga bog'lanish hisobot PDF (pullik)",
      "paragraphs": [
        "Ichki to'lov {priceAffinityDomestic} (Qo'shimcha qiymat solig'i kiritilgan) · Xalqaro to'lov {priceAffinityGlobal}",
        "Ekrandagi natijalarni 4 betli PDF hujjatiga aylantiramiz. Ekran faqat yaxshi mos keladigan bog'lanishlarni ko'rsatadi, lekin PDFda osmonning o'n ikki hayvonining to'liq reyting jadvali mavjud.",
        "Qayta berish shartlari muvofiqlik hisobotiga o'xshashdir."
      ]
    },
    {
      "heading": "4. To'lov usullari",
      "paragraphs": [
        "**Ichki** — Toss Payments orqali kredit va debit kartalar va qulay to'lov (Toss Pay, Kakao Pay, Naver Pay, Payco va boshqalar) orqali foydalanishingiz mumkin.",
        "**Xalqaro** — PortOne orqali PayPal bilan to'lov qilishingiz mumkin.",
        "Oxirgi to'lov miqdori to'lov ekranida ko'rsatilgan miqdorni hisobga oladi."
      ]
    },
    {
      "heading": "5. Narx o'zgarishi",
      "paragraphs": [
        "Narx o'zgartirilganda, avval bu sahifada e'lon qilinadi. Allaqachon to'langan buyurtmalarga o'zgartirilgan narxlar tatbiq etilmaydi."
      ]
    }
  ],
  "effectiveLabel": "Amalga oshirish sanasi"
};

const d4 = {
  "title": "Shaxsiy ma'lumotlarni qayta ishlash siyosati",
  "intro": "InyeonLink moslik hisoblash uchun zarur bo'lgan ma'lumotlarni saqlamaydi. Ushbu siyosat xizmat qanday ma'lumotlarni olishini, qanday ma'lumotlarni qoldirmasligini va qanday ma'lumotlar avtomatik ravishda yozilishini tushuntiradi.",
  "sections": [
    {
      "heading": "1. Saqlanmaydigan ma'lumotlar",
      "paragraphs": [
        "Moslik hisoblash uchun kiritilgan tug'ilgan sana, tug'ilish vaqti, tug'ilgan joy, jins, chaqiruvchi ism **hech qayerda saqlanmaydi.** So'rovni qayta ishlash davomida server xotirasida foydalaniladi va javob bilan birga yo'qoladi.",
        "Ma'lumotlar bazasiga yozilmaydi va alohida fayl sifatida ham qoldirilmaydi. A'zolik ro'yxatdan o'tkazish bo'lmagani uchun kiritilgan ma'lumotlar hech kim bilan bog'lanmaydi."
      ]
    },
    {
      "heading": "2. Natija havolasida joylashgan ma'lumotlar",
      "paragraphs": [
        "Natija ekranining manzilida kiritilgan ma'lumotlar shifrlangan holda joylashgan. Biroq, bu qiymat manzilning # dan keyin joylashgan va veb standartlariga ko'ra # dan keyin joylashgan ma'lumotlar brauzer tomonidan serverga yuborilmaydi. Shuning uchun natija havolasini ochganingizda, serverga ulanish yozuvlarida faqat manzilning yo'li qoladi.",
        "Natija havolasini boshqa odamga yuborsangiz, u ham xuddi shu natijani ko'rishi mumkin. Havola o'zi kiritilgan ma'lumotlarni o'z ichiga olganligi sababli, ulashish yoki ulashmaslikni foydalanuvchi o'zi hal qilishi kerak."
      ]
    },
    {
      "heading": "3. Avtomatik ravishda to'plangan ma'lumotlar",
      "paragraphs": [
        "Xizmat foydalanuvchini aniqlash uchun to'plangan ma'lumotlar yo'q. Biroq, veb xizmatni boshqarish uchun zarur bo'lgan minimal yozuvlar infratuzilma ta'minotchisi tomonidan avtomatik ravishda qoldiriladi."
      ],
      "bullets": [
        "Ulanish IP manzili, ulanish vaqti, brauzer turi kabi umumiy server ulanish yozuvlari",
        "Mamlakat ma'lumotlari — ekran tilini avtomatik ravishda belgilash uchun ishlatiladi va saqlanmaydi"
      ]
    },
    {
      "heading": "4. Cookie va reklama",
      "paragraphs": [
        "Xizmat o'zini foydalanuvchini aniqlash yoki kuzatish uchun cookie-lardan foydalanmaydi. Moslik hisoblashda kiritilgan ma'lumotlar reklama tadbirkorlariga uzatilmaydi.",
        "Ushbu xizmat Google AdSense orqali reklama joylashtiradi. Ushbu jarayonda quyidagi ishlar sodir bo'ladi."
      ],
      "bullets": [
        "Google kabi uchinchi tomon ta'minotchilari foydalanuvchining brauzeriga cookie-larni saqlashi yoki o'qishi mumkin.",
        "Google ushbu sayt va boshqa bir qator saytlar bo'yicha tashrif yozuvlari asosida reklama joylashtirish uchun cookie-lardan foydalanadi.",
        "Foydalanuvchilar Google reklama sozlamalarida (google.com/settings/ads) moslashtirilgan reklamalardan voz kechishlari mumkin. Voz kechgan taqdirda ham reklama davom etadi, faqat foydalanuvchi bilan bog'liqligi kamayadi.",
        "Uchinchidan, ta'minotchilar bo'yicha moslashtirilgan reklamalardan voz kechish uchun aboutads.info/choices saytida bir marta voz kechish mumkin.",
        "Brauzer sozlamalarida cookie-larni bloklash usuli ham mavjud.",
        "Yevropa iqtisodiy hududi, Buyuk Britaniya va Shveytsariya foydalanuvchilariga reklama cookie-laridan foydalanish bo'yicha oldindan rozilik so'raladi."
      ]
    },
    {
      "heading": "5. To'lov paytida saqlanadigan ma'lumotlar",
      "paragraphs": [
        "Hozirda pullik mahsulotlar sotilmaydi, shuning uchun to'lov bilan bog'liq saqlanadigan ma'lumotlar ham yo'q.",
        "Sotishni boshlaganda, to'lovni qayta ishlash va qonuniy savdo yozuvlarini saqlash uchun quyidagi ma'lumotlar saqlanadi. **O'shanda ham moslik hisoblashda kiritilgan qiymatlar va yaratilgan PDF saqlanmaydi**, ism, aloqa ma'lumotlari, manzil kabi foydalanuvchini aniqlovchi ma'lumotlar olinmaydi."
      ],
      "bullets": [
        "Buyurtma raqami va to'lov identifikatori",
        "To'lov summasi, valyuta va to'lov holati (to'lanmagan, to'langan, bekor qilingan)",
        "Mahsulot turi, qayta ishlash holati, hujjatni yuklab olish soni, buyurtma vaqti",
        "Buyurtma paytidagi ekran tili va to'lov hududi (ichki, xorijiy)",
        "Saqlash muddati — «Elektron tijorat va iste'molchilarni himoya qilish to'g'risida» qonunning 6-moddasiga muvofiq, to'lov va tovarlarni taqdim etish bo'yicha yozuvlar 5 yil davomida, iste'molchilarning shikoyatlari yoki nizolarini hal qilish bo'yicha yozuvlar 3 yil davomida saqlanadi va keyin yo'q qilinadi."
      ]
    },
    {
      "heading": "6. Uchinchilarga taqdim etish va qayta ishlashni topshirish",
      "paragraphs": [
        "Saqlanadigan shaxsiy ma'lumotlar yo'qligi sababli uchinchilarga taqdim etiladigan shaxsiy ma'lumotlar ham yo'q.",
        "Xizmatni boshqarish uchun {hostingProvider}ning hosting infratuzilmasidan foydalaniladi va bu jarayonda 3-banddagi ulanish yozuvlari ushbu tadbirkor siyosatiga muvofiq qayta ishlanadi.",
        "Pullik mahsulotlar sotishni boshlaganda, ichki to'lovlar Toss Paymentsga, xorijiy to'lovlar esa PortOne (PayPal)ga topshiriladi. Kartalar raqami, hisob raqami kabi to'lov vositalari ma'lumotlari o'shanda ham ushbu tadbirkorlar tomonidan to'g'ridan-to'g'ri qayta ishlanadi va xizmat ulardan ma'lumot olmaydi."
      ]
    },
    {
      "heading": "7. Foydalanuvchining huquqlari",
      "paragraphs": [
        "Saqlanadigan shaxsiy ma'lumotlar yo'qligi sababli ko'rish, tuzatish yoki o'chirishni so'rash uchun hech qanday ma'lumot yo'q.",
        "Foydalanuvchi brauzer manzil satrining natija havolasini o'chirish orqali kiritilgan izlarni to'liq yo'q qilishi mumkin.",
        "Xizmatdan foydalanish bilan bog'liq savollaringiz bo'lsa, quyidagi aloqa ma'lumotlari orqali bizga xabar bering."
      ]
    },
    {
      "heading": "8. Bolalar shaxsiy ma'lumotlari",
      "paragraphs": [
        "Ushbu xizmat 14 yoshgacha bo'lgan bolalarga mo'ljallanmagan va bolalardan shaxsiy ma'lumotlarni to'plamaydi."
      ]
    },
    {
      "heading": "9. Shaxsiy ma'lumotlarni himoya qilish mas'uli",
      "paragraphs": [
        "Himoya mas'uli: {privacyOfficer}",
        "Aloqa: {email} / {customerCenter}"
      ]
    },
    {
      "heading": "10. Siyosatning o'zgarishi",
      "paragraphs": [
        "Ushbu siyosatni o'zgartirgan taqdirda, amalga oshirish sanasi va o'zgarishlar mazmuni ushbu sahifada e'lon qilinadi. Reklama joylashtirish yoki pullik mahsulotlar sotishni boshlash kabi haqiqatan ham qayta ishlash mazmuni o'zgaradigan bo'lsa, o'zgarishlar haqida avval xabar beriladi."
      ]
    }
  ],
  "effectiveLabel": "Amalga oshirish sanasi"
};

const d5 = {
  "title": "Shaxsiy ma'lumotlarni qayta ishlash siyosati",
  "intro": "InyeonLink moslik hisoblash uchun zarur bo'lgan ma'lumotlarni saqlamaydi. Ushbu siyosat xizmat qanday ma'lumotlarni olishini, qanday ma'lumotlarni qoldirmasligini va qanday ma'lumotlar avtomatik ravishda yozilishini tushuntiradi.",
  "sections": [
    {
      "heading": "1. Saqlanmaydigan ma'lumotlar",
      "paragraphs": [
        "Moslik hisoblash uchun kiritilgan tug'ilgan sana, tug'ilish vaqti, tug'ilgan joy, jins, chaqiruvchi ism **hech qayerda saqlanmaydi.** So'rovni qayta ishlash davomida server xotirasida faqat foydalaniladi va javob bilan birga yo'qoladi.",
        "Ma'lumotlar bazasida yozilmaydi va alohida fayl sifatida ham qoldirilmaydi. A'zolik ro'yxatdan o'tish bo'lmagani uchun kiritilgan ma'lumotlar ma'lum bir shaxs bilan bog'lanmaydi."
      ]
    },
    {
      "heading": "2. Natija havolasida joylashgan ma'lumotlar",
      "paragraphs": [
        "Natija sahifasining manzilida kiritilgan ma'lumotlar shifrlangan holda joylashgan. Biroq, bu qiymat manzilning # dan keyin joylashgan va veb standartlariga ko'ra # dan keyin joylashgan ma'lumotlar brauzer tomonidan serverga yuborilmaydi. Shuning uchun natija havolasini ochganingizda, serverga ulanish yozuvlarida faqat manzilning yo'li qoladi.",
        "Natija havolasini boshqa odamga yuborsangiz, u ham xuddi shu natijani ko'rishi mumkin. Havola o'zi kiritilgan ma'lumotlarni o'z ichiga olganligi sababli, ulashish yoki ulashmaslikni foydalanuvchi o'zi hal qilishi kerak."
      ]
    },
    {
      "heading": "3. Avtomatik ravishda to'plangan ma'lumotlar",
      "paragraphs": [
        "Xizmat foydalanuvchini aniqlash uchun to'playdigan ma'lumotlar yo'q. Biroq, veb xizmatni boshqarish uchun zarur bo'lgan minimal yozuvlar infratuzilma ta'minotchisi tomonidan avtomatik ravishda qoldiriladi."
      ],
      "bullets": [
        "Ulanish IP manzili, ulanma vaqti, brauzer turi kabi umumiy server ulanish yozuvlari",
        "Mamlakat ma'lumotlari — ekran tilini avtomatik ravishda belgilash uchun ishlatiladi va saqlanmaydi"
      ]
    },
    {
      "heading": "4. Cookie va reklama",
      "paragraphs": [
        "Xizmat o'z-o'zidan foydalanuvchini kuzatish uchun cookie-lardan foydalanmaydi.",
        "Hozirda ushbu xizmatda reklama joylashtirilmaydi. Kelajakda reklama joylashtirilsa, reklama ta'minotchisi (masalan, Google) reklama joylashtirish uchun cookie-lardan foydalanishi mumkin. O'shanda, ushbu bandni avval o'zgartirib, nimalar o'zgarishini ko'rsatamiz."
      ]
    },
    {
      "heading": "5. To'lov paytida saqlanadigan ma'lumotlar",
      "paragraphs": [
        "Pullik mahsulot (hisoboti PDF) to'langanida, to'lovni qayta ishlash va qonuniy savdo yozuvlarini saqlash uchun buyurtma ma'lumotlari saqlanadi.",
        "**Moslik hisoblashda kiritilgan qiymatlar va yaratilgan PDF to'langan taqdirda ham saqlanmaydi.** Yuqoridagi 1-bandning printsipi to'lovdan qat'i nazar o'zgarishsiz qoladi. Saqlanadigan ma'lumotlar quyidagilardir va ism, aloqa ma'lumotlari, manzil kabi foydalanuvchini aniqlovchi ma'lumotlar kiritilmaydi."
      ],
      "bullets": [
        "Buyurtma raqami va to'lov identifikatori",
        "To'lov summasi, valyuta va to'lov holati (to'lanmagan, to'langan, bekor qilingan)",
        "Mahsulot turi, qayta ishlash holati, hujjatni yuklab olish soni, buyurtma vaqti",
        "Buyurtma vaqtidagi ekran tili va to'lov hududi (ichki, xorijiy)",
        "Saqlash muddati — «Elektron tijorat va iste'molchilarni himoya qilish to'g'risida» qonunning 6-moddasiga muvofiq, to'lov va tovarlarni ta'minlash bo'yicha yozuvlar 5 yil davomida, iste'molchilarning shikoyatlari yoki nizolarini hal qilish bo'yicha yozuvlar 3 yil davomida saqlanadi va keyin yo'q qilinadi."
      ]
    },
    {
      "heading": "6. Uchinchilarga taqdim etish va qayta ishlashni topshirish",
      "paragraphs": [
        "Foydalanuvchini aniqlovchi shaxsiy ma'lumotlar saqlanmaganligi sababli, uchinchilarga taqdim etiladigan shaxsiy ma'lumotlar ham yo'q. To'lovni quyidagi tashkilotlarga topshiramiz.",
        "Xizmatni boshqarish uchun {hostingProvider} hosting infratuzilmasidan foydalanamiz va bu jarayonda yuqoridagi 3-banddagi ulanish yozuvlari ushbu tashkilotning siyosatiga muvofiq qayta ishlanadi.",
        "Ichki to'lovlar Toss Payments tomonidan, xorijiy to'lovlar esa PortOne orqali PayPal tomonidan qayta ishlanadi. Kartalar raqami, hisob raqami kabi to'lov vositalari ma'lumotlari ushbu tashkilotlar tomonidan to'g'ridan-to'g'ri qayta ishlanadi va xizmat ularni qabul qilmaydi va saqlamaydi."
      ]
    },
    {
      "heading": "7. Foydalanuvchining huquqlari",
      "paragraphs": [
        "Moslik hisoblashda kiritilgan qiymatlar saqlanmaganligi sababli, ko'rish, tuzatish yoki o'chirishni so'rash uchun hech qanday ma'lumot yo'q. To'lovdan qolgan buyurtma yozuvlari qonun tomonidan belgilangan muddat davomida saqlanishi shart, shuning uchun bu muddat davomida o'chirib bo'lmaydi va muddat o'tgach yo'q qilinadi.",
        "Foydalanuvchi brauzer manzil satrining natija havolasini o'chirish orqali kiritilgan izlarni to'liq yo'q qilishi mumkin.",
        "Xizmatdan foydalanish bilan bog'liq savollaringiz bo'lsa, quyidagi aloqa ma'lumotlari orqali bizga xabar bering."
      ]
    },
    {
      "heading": "8. Bolalarning shaxsiy ma'lumotlari",
      "paragraphs": [
        "Ushbu xizmat 14 yoshgacha bo'lgan bolalarga mo'ljallanmagan va bolalardan shaxsiy ma'lumotlarni to'plamaydi."
      ]
    },
    {
      "heading": "9. Shaxsiy ma'lumotlarni himoya qilish mas'uliyati",
      "paragraphs": [
        "Himoya mas'uli: {privacyOfficer}",
        "Aloqa: {email} / {customerCenter}"
      ]
    },
    {
      "heading": "10. Siyosatni o'zgartirish",
      "paragraphs": [
        "Ushbu siyosatni o'zgartirganimizda, amalga oshirish sanasi va o'zgarishlar mazmuni ushbu sahifada e'lon qilinadi. Reklama joylashtirish yoki pullik mahsulotlarni sotishni boshlash kabi haqiqatan ham qayta ishlash mazmuni o'zgaradigan bo'lsa, o'zgarishlar haqida avval xabar beramiz."
      ]
    }
  ],
  "effectiveLabel": "Amalga oshirish sanasi"
};

const d6 = {
  "title": "Foydalanish shartlari",
  "intro": "Ushbu shartlar InyeonLink (keyingi o‘rinda “xizmat”) xizmatidan foydalanish shartlarini belgilaydi. Xizmatdan foydalanish orqali siz ushbu shartlarga rozilik bildirgan hisoblanasiz.",
  "sections": [
    {
      "heading": "1. Xizmatning tabiati",
      "paragraphs": [
        "Xizmat kiritilgan tug‘ilgan sanaga asoslanib, an'anaviy nomzod (saju) va o‘n ikki hayvon (zodiak) munosabatlari qoidalarini qo‘llab, ikki shaxsning munosabatlarini ma'lumot sifatida ko‘rsatadi.",
        "Taqdim etilgan moslik darajasi va izohlar **an'anaviy talqin nuqtai nazaridan ma'lumot sifatida berilgan bo‘lib, ilmiy bashorat yoki munosabatlar bo‘yicha aniq xulosalar emas.** Ballar past bo‘lsa, munosabat yomon degani emas va yuqori bo‘lsa, munosabat kafolatlanadi degani emas."
      ]
    },
    {
      "heading": "2. Foydalanish to‘lovi",
      "paragraphs": [
        "Moslik hisoblash va natijalarni ko‘rish bepul va a'zolik ro‘yxatdan o‘tishni talab qilmaydi.",
        "Natijalarni PDF hisobot sifatida olish pullikdir. Narx va shartlar quyidagi 3-band va to‘lov sahifasida ko‘rsatiladi."
      ]
    },
    {
      "heading": "3. Pullik mahsulotlar va qaytarish",
      "paragraphs": [
        "Sotiladigan pullik mahsulotlar **hisobot PDF ikki xil**dir. Ikkalasi ham ekrandagi natijalarni hujjatga aylantiradi va ekranda bo‘lmagan ma'lumotlarni o‘z ichiga oladi.",
        "**Saju moslik hisobot PDF** — 7 sahifa. Ikkita kuchning harakat yo‘nalishi, har birining sajusini chuqurroq ko‘rish uchun jadval, to‘rt ustun uchrashadigan joy, hisoblash asoslari kiritiladi. Ichki to‘lov {priceDomestic} (QQS kiritilgan), xorijiy to‘lov {priceGlobal}.",
        "**Inyonga bog‘lanish hisobot PDF** — 4 sahifa. Ekranda bo‘lmagan osmon ustunlarining o‘n ikki hayvonning umumiy reyting jadvali kiritiladi. Ichki to‘lov {priceAffinityDomestic} (QQS kiritilgan), xorijiy to‘lov {priceAffinityGlobal}.",
        "Ichki to‘lovlar Toss Payments orqali kredit va chek kartalari va qulay to‘lov (Toss Pay, Kakao Pay, Naver Pay, Payco va boshqalar) orqali amalga oshirilishi mumkin, xorijiy to‘lovlar esa PortOne orqali PayPal orqali amalga oshiriladi. Yakuniy summa to‘lov sahifasida ko‘rsatilgan summaga muvofiq bo‘ladi.",
        "**Xizmat foydalanuvchining kiritgan ma'lumotlarini va yaratilgan PDF faylini saqlamaydi.** To‘lov tasdiqlangandan so‘ng, darhol hujjatni yaratib, yuklab beradi va serverda hech narsa qoldirmaydi. Shuning uchun yuklab olingan faylni foydalanuvchi o‘zi saqlashi kerak.",
        "Yuklab olish to‘xtatilsa yoki fayl yo‘qolsa, bir xil buyurtma bilan **5 marta** qayta yuklab olish mumkin. Biroq, natija sahnasidan chiqib, kiritilgan ma'lumotlar yo‘qolsa, qayta yaratish mumkin emas, shuning uchun to‘lovdan so‘ng faylni saqlab qo‘yishingizni iltimos qilamiz."
      ],
      "bullets": [
        "**To‘lovdan keyin yuklab olish boshlanmasdan oldin** istalgan vaqtda bekor qilish va to‘liq qaytarish olish mumkin.",
        "**Yuklab olish tugagandan so‘ng** oddiy xohish bilan qaytarish cheklangan. To‘lov darhol taqdim etilgan va tiklash mumkin bo‘lmagan raqamli kontent bo‘lib, bu «Elektron tijorat va iste'molchilarni himoya qilish to‘g‘risida»gi qonunning 17-moddasining 2-bandida belgilangan qaytarish cheklov sabablari hisoblanadi.",
        "**Tizim xatosi tufayli hujjat yaratilmasa, fayl ochilmasa yoki to‘lov summasi buyurtmadan farq qilsa** qayta berish yoki to‘liq qaytarish bilan hal qilinadi.",
        "**Natijalar bo‘yicha shikoyatlar** qaytarish sababi hisoblanmaydi. Moslik natijalari an'anaviy talqin nuqtai nazaridan ma'lumot sifatida berilgan va uning tabiati to‘lovdan oldin ma'lum qilinadi (yuqoridagi 1-band).",
        "Qayta berish uchun 5 marta foydalanilgandan keyin qayta so‘rov qilish qaytarish sababi hisoblanmaydi.",
        "**Kichik yoshli shaxs qonuniy vakilining roziligisiz to‘lov qilgan taqdirda** o‘zlari yoki qonuniy vakillari ushbu to‘lovni bekor qilishlari mumkin. Quyidagi aloqa ma'lumotlariga xabar bersangiz, sizga qaytarish beramiz."
      ]
    },
    {
      "heading": "4. Hisoblash natijalari haqida",
      "paragraphs": [
        "Barcha ballar ochiq qoidalarga muvofiq hisoblanadi, shuning uchun bir xil qiymat kiritilganda har doim bir xil natija olinadi.",
        "Tug‘ilish vaqtini kiritmasangiz, vaqt ustunini hisobga olmasdan hisoblanadi, shuning uchun natija farq qilishi mumkin. Tug‘ilish joyini aniq tanlash vaqt ustunini hisoblashni aniq qiladi.",
        "Mansel hisoblash ochiq hisoblash kutubxonasidan foydalanadi va vaqt zonasi va davrni hisoblash usuli boshqa mansel va natijalarni farqlanishiga olib kelishi mumkin."
      ]
    },
    {
      "heading": "5. Foydalanuvchining mas'uliyati",
      "paragraphs": [
        "Foydalanuvchi boshqalar tug‘ilgan sanasini kiritishi mumkin, ammo bu natijalarni boshqalarga zarar yetkazish uchun ishlatmasligi kerak.",
        "Xizmat natijalarini nikoh, ajralish, ishga olish, savdo va boshqalar kabi boshqalarning huquqlariga ta'sir qiluvchi qarorlar uchun asos sifatida ishlatmang. Xizmat bunday maqsadlar uchun yaratilmagan."
      ]
    },
    {
      "heading": "6. Ta'qiqlangan harakatlar",
      "paragraphs": [
        "Quyidagi harakatlar taqiqlanadi."
      ],
      "bullets": [
        "Avtomatlashtirilgan vositalar orqali ortiqcha so‘rovlar yuborib, xizmatni ishlashini to‘xtatish harakati",
        "Xizmat natijalarini haqiqat yoki mutaxassis fikri sifatida taqdim etish harakati",
        "Xizmatni nusxalash va o‘zgartirib, bir xil xizmatni taqdim etish harakati"
      ]
    },
    {
      "heading": "7. Mas'uliyatdan ozod qilish",
      "paragraphs": [
        "Xizmat faqat ma'lumotlarni taqdim etadi va foydalanuvchi natijalar asosida qabul qilgan qarorlar va ularning natijalari uchun mas'uliyatni o‘z zimmasiga olmaydi.",
        "Tabiiy ofatlar, infratuzilma ta'minotchilarining nosozliklari kabi nazoratdan tashqari sabablarga ko‘ra xizmat to‘xtatilsa, buning natijasida yuzaga kelgan zarar uchun mas'uliyatni o‘z zimmasiga olmaydi."
      ]
    },
    {
      "heading": "8. Intellektual mulk huquqlari",
      "paragraphs": [
        "Xizmatning ekrani, matnlari, hisoblash qoidalarining amalga oshirilishi huquqlari operatorga tegishlidir. Foydalanuvchi shaxsiy maqsadlar uchun natijalarni saqlashi yoki ulashishi mumkin."
      ]
    },
    {
      "heading": "9. Shartlarni o‘zgartirish va qonuniy asos",
      "paragraphs": [
        "Shartlarni o‘zgartirish hollarda, amalga oshirish sanasi bilan birga ushbu sahifada e'lon qilinadi.",
        "Ushbu shartlar Janubiy Koreya qonunlariga muvofiq bo‘lib, xizmatdan foydalanish bilan bog‘liq nizolar tegishli qonunlar belgilagan tartibga muvofiq hal qilinadi."
      ]
    }
  ],
  "effectiveLabel": "Amalga kirish sanasi"
};

const d7 = {
  "title": "Shaxsiy ma'lumotlarni qayta ishlash siyosati",
  "intro": "InyeonLink moslik hisoblash uchun zarur bo'lgan ma'lumotlarni saqlamaydi. Ushbu siyosat xizmat qanday ma'lumotlarni olishini, qanday ma'lumotlarni qoldirmasligini va qanday ma'lumotlar avtomatik ravishda yozilishini tushuntiradi.",
  "sections": [
    {
      "heading": "1. Saqlanmaydigan ma'lumotlar",
      "paragraphs": [
        "Moslik hisoblash uchun kiritilgan tug'ilgan sana, tug'ilish vaqti, tug'ilgan joy, jins, chaqiruvchi ism **hech qayerda saqlanmaydi.** So'rovni qayta ishlash davomida server xotirasida faqat foydalaniladi va javob bilan birga yo'qoladi.",
        "Ma'lumotlar bazasiga yozilmaydi va alohida fayl sifatida ham qoldirilmaydi. A'zolik ro'yxatdan o'tish bo'lmagani uchun kiritilgan ma'lumotlar ma'lum bir shaxs bilan bog'lanmaydi."
      ]
    },
    {
      "heading": "2. Natija havolasida joylashgan ma'lumotlar",
      "paragraphs": [
        "Natija ekranining manzilida kiritilgan ma'lumotlar shifrlangan holda joylashadi. Biroq, bu qiymat manzilning # dan keyin joylashgan bo'lib, veb standartlariga ko'ra # dan keyin joylashgan ma'lumotlar brauzer tomonidan serverga yuborilmaydi. Shuning uchun natija havolasini ochganingizda, serverga ulanish yozuvlarida faqat manzilning yo'li qoladi.",
        "Natija havolasini boshqa odamga yuborsangiz, u ham xuddi shu natijani ko'rishi mumkin. Havola o'z ichiga kiritilgan ma'lumotlarni o'z ichiga olganligi sababli, ulashish yoki ulashmaslikni foydalanuvchi o'zi hal qilishi kerak."
      ]
    },
    {
      "heading": "3. Avtomatik ravishda to'plangan ma'lumotlar",
      "paragraphs": [
        "Xizmat foydalanuvchini aniqlash uchun to'plagan ma'lumotlar yo'q. Biroq, veb xizmatni boshqarish uchun zarur bo'lgan minimal yozuvlar infratuzilma ta'minotchisi tomonidan avtomatik ravishda qoldiriladi."
      ],
      "bullets": [
        "Ulanish IP manzili, ulanma vaqti, brauzer turi kabi umumiy server ulanish yozuvlari",
        "Mamlakat ma'lumotlari — ekran tilini avtomatik ravishda belgilash uchun ishlatiladi va saqlanmaydi"
      ]
    },
    {
      "heading": "4. Cookie va reklama",
      "paragraphs": [
        "Xizmat o'z-o'zini aniqlash yoki kuzatish uchun cookie-lardan foydalanmaydi. Moslik hisoblashda kiritilgan ma'lumotlar reklama tadbirkorlariga uzatilmaydi.",
        "Ushbu xizmat Google AdSense orqali reklama joylashtiradi. Ushbu jarayonda quyidagi holatlar yuz beradi."
      ],
      "bullets": [
        "Google kabi uchinchi tomon ta'minotchilari foydalanuvchining brauzeriga cookie-larni saqlashi yoki o'qishi mumkin.",
        "Google ushbu sayt va boshqa bir qator saytlar bo'yicha tashrif yozuvlarini asosida reklama joylashtirish uchun cookie-lardan foydalanadi.",
        "Foydalanuvchilar Google reklama sozlamalarida (google.com/settings/ads) moslashtirilgan reklamalardan voz kechishlari mumkin. Voz kechgan taqdirda ham reklama o'z-o'zidan ko'rsatiladi, faqat foydalanuvchi bilan bog'liqligi kamayadi.",
        "Uchinchidan, ta'minotchilar bo'yicha moslashtirilgan reklamalardan bir vaqtning o'zida voz kechish mumkin (aboutads.info/choices).",
        "Brauzer sozlamalarida cookie-larni bloklash usuli ham mavjud.",
        "Yevropa iqtisodiy hududi, Buyuk Britaniya va Shveytsariya foydalanuvchilariga reklama cookie-laridan foydalanish uchun avval ruxsat so'raladi."
      ]
    },
    {
      "heading": "5. To'lov paytida saqlanadigan ma'lumotlar",
      "paragraphs": [
        "Pullik mahsulot (hisoboti PDF) uchun to'lov amalga oshirilganda, to'lovni qayta ishlash va qonuniy savdo yozuvlarini saqlash uchun buyurtma ma'lumotlari saqlanadi.",
        "**Moslik hisoblashda kiritilgan qiymatlar va yaratilgan PDF to'lov qilingan taqdirda ham saqlanmaydi.** Yuqoridagi 1-bandning printsipi to'lovdan qat'i nazar o'zgarishsiz qoladi. Saqlanadigan ma'lumotlar quyidagilarni o'z ichiga oladi va ism, aloqa ma'lumotlari, manzil kabi foydalanuvchini aniqlovchi ma'lumotlar kiritilmaydi."
      ],
      "bullets": [
        "Buyurtma raqami va to'lov identifikatori",
        "To'lov miqdori, valyuta va to'lov holati (to'lanmagan, to'langan, bekor qilingan)",
        "Mahsulot turi, qayta ishlash holati, hujjatni yuklab olish soni, buyurtma vaqti",
        "Buyurtma paytidagi ekran tili va to'lov hududi (ichki, xorijiy)",
        "Saqlash muddati — «Elektron tijorat va iste'molchilarni himoya qilish to'g'risida» qonunning 6-moddasiga muvofiq, to'lov va tovarlarni taqdim etish bo'yicha yozuvlar 5 yil davomida, iste'molchilar shikoyatlari yoki nizolarini hal qilish bo'yicha yozuvlar 3 yil davomida saqlanadi va keyin yo'q qilinadi."
      ]
    },
    {
      "heading": "6. Uchinchilarga taqdim etish va qayta ishlashni topshirish",
      "paragraphs": [
        "Foydalanuvchini aniqlovchi shaxsiy ma'lumotlar saqlanmaganligi sababli, uchinchilarga taqdim etiladigan shaxsiy ma'lumotlar ham yo'q. To'lovni qayta ishlash quyidagi tadbirkorlarga topshiriladi.",
        "Xizmatni boshqarish uchun {hostingProvider} hosting infratuzilmasidan foydalaniladi va bu jarayonda 3-banddagi ulanish yozuvlari ushbu tadbirkor siyosatiga muvofiq qayta ishlanadi.",
        "Ichki to'lovlar Toss Payments tomonidan, xorijiy to'lovlar esa PortOne orqali PayPal tomonidan qayta ishlanadi. Kartalar raqami, hisob raqami kabi to'lov vositalari ma'lumotlari ushbu tadbirkorlar tomonidan to'g'ridan-to'g'ri qayta ishlanadi va xizmat ularni qabul qilmaydi va saqlamaydi."
      ]
    },
    {
      "heading": "7. Foydalanuvchining huquqlari",
      "paragraphs": [
        "Moslik hisoblashda kiritilgan ma'lumotlar saqlanmaganligi sababli, ko'rish, tuzatish yoki o'chirishni so'rash uchun hech qanday maqsad yo'q. To'lov bilan qoldirilgan buyurtma yozuvlari qonun tomonidan belgilangan muddat davomida saqlanishi shart, shuning uchun bu muddat davomida o'chirib bo'lmaydi va muddat o'tgach yo'q qilinadi.",
        "Foydalanuvchilar brauzer manzil satrining natija havolasini o'chirish orqali kiritilgan izlarni to'liq yo'q qilishi mumkin.",
        "Xizmatdan foydalanish bilan bog'liq savollaringiz bo'lsa, quyidagi aloqa ma'lumotlari orqali bizga xabar bering."
      ]
    },
    {
      "heading": "8. Bolalar shaxsiy ma'lumotlari",
      "paragraphs": [
        "Ushbu xizmat 14 yoshgacha bo'lgan bolalarga mo'ljallanmagan va bolalardan shaxsiy ma'lumotlarni to'plamaydi."
      ]
    },
    {
      "heading": "9. Shaxsiy ma'lumotlarni himoya qilish mas'uliyati",
      "paragraphs": [
        "Himoya mas'uliyati: {privacyOfficer}",
        "Aloqa: {email} / {customerCenter}"
      ]
    },
    {
      "heading": "10. Siyosatning o'zgarishi",
      "paragraphs": [
        "Ushbu siyosatni o'zgartirganda, amalga oshirish sanasi va o'zgarishlar haqida ushbu sahifada e'lon qilinadi. Reklama joylashtirish yoki pullik mahsulotlarni sotishni boshlash kabi haqiqatan ham qayta ishlash mazmuni o'zgaradigan bo'lsa, o'zgarishlar haqida avval xabar beriladi."
      ]
    }
  ],
  "effectiveLabel": "Amalga oshirish sanasi"
};

export const uz: LegalLocaleDocuments = {
  a0p0: {
    privacy: d0,
    terms: d1,
    refund: d2,
    pricing: d3,
  },
  a1p0: {
    privacy: d4,
    terms: d1,
    refund: d2,
    pricing: d3,
  },
  a0p1: {
    privacy: d5,
    terms: d6,
    refund: d2,
    pricing: d3,
  },
  a1p1: {
    privacy: d7,
    terms: d6,
    refund: d2,
    pricing: d3,
  },
};
