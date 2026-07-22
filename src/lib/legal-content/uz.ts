import { companyInfo, LEGAL_EFFECTIVE_DATE } from "@/lib/company";
import type { LegalLocaleContent } from "./types";

const content: LegalLocaleContent = {
  labels: {
    effectiveDate: "Kuchga kirgan sana",
    referenceDate: "Holat sanasi",
    login: "Kirish",
    close: "Yopish",
  },
  documents: {
    terms: {
      title: "Foydalanish shartlari",
      description: `${companyInfo.serviceName} xizmatidan foydalanish shartlari va xizmat doirasi haqida ma'lumot beradi.`,
      effectiveDate: LEGAL_EFFECTIVE_DATE,
      sections: [
        {
          title: "1. Xizmatning mohiyati",
          paragraphs: [
            "Naming-Link — sun'iy intellekt (AI) asosidagi nomlash studiyasi bo‘lib, quyidagi to‘rt xizmatni taqdim etadi: ① Hangul (koreys) yozuvidagi ismga mos Hanja (xitoy ierogliflari) ma'nolarini moslashtirish; ② koreyscha ismni xalqaro (global) ismga aylantirish; ③ chet el ismini koreyscha ismga aylantirish; ④ xalqaro ismni talaffuziga ko‘ra Hangul yozuvida ifodalash.",
            "Natijalar ism tanlash va talqin qilishga yordam beruvchi ma'lumotnoma hisoblanadi hamda oilaviy holat reyestri, pasport, viza, tovar belgisi, huquqiy hujjatlar kabi rasmiy ro‘yxatdan o‘tkazish imkoniyatini kafolatlamaydi.",
          ],
        },
        {
          title: "2. A'zolar va mehmon foydalanuvchilar",
          paragraphs: [
            "Ism tahlili va reklama evaziga nomzodlarni ko‘rish xizmatidan a'zo bo‘lmagan foydalanuvchilar ham foydalanishi mumkin. Ro‘yxatdan o‘tish yoki tizimga kirish faqat esdalik buyumlariga buyurtma berish va buyurtmalar tarixini ko‘rish kabi hisob talab qilinadigan funksiyalarda so‘ralishi mumkin.",
          ],
        },
        {
          title: "3. AI natijalari va tekshirish mas'uliyati",
          paragraphs: [
            "AI tavsiyalari lingvistik, madaniy va an'anaviy ma'lumotlarni o‘z ichiga oladi. Foydalanuvchi yakuniy ismni tanlashdan oldin tegishli idoralar, mutaxassislar, mahalliy foydalanuvchilar hamda huquqiy va tovar belgisi tekshiruvi orqali ismning mosligini tasdiqlashi lozim.",
          ],
        },
        {
          title: "4. Pullik xizmatlar",
          paragraphs: [
            "Hanja ma'nosini moslashtirish xizmatining batafsil mahsulotlari quyidagilardan iborat: ① 5 tagacha nomzod uchun batafsil izoh va Hanja bo‘yicha umumiy batafsil tahlil: ₩2,900 (KRW); ② 10 tagacha nomzod uchun kengaytirilgan batafsil izoh, Hanja bo‘yicha umumiy batafsil tahlil va esdalik uchun PDF: ₩4,900; ③ 10 tagacha nomzod uchun batafsil tahlil, Hanja bo‘yicha umumiy batafsil tahlil, Saju (To‘rt ustun) va Besh unsur tahlili hamda esdalik uchun PDF: ₩9,900.",
            "Xalqaro ismga aylantirish, koreyscha ismga aylantirish va Hangul talaffuz yozuvi xizmatlarida qolgan barcha nomzodlarni reklamasiz bir vaqtning o‘zida ochib beruvchi mahsulot (US$1.99) taklif etilishi mumkin. To‘lov funksiyasi ishga tushirilgunga qadar faqat reklama evaziga ko‘rish taqdim etiladi.",
            "Pullik batafsil hisobotlar, tahlil natijalari va PDF fayllarni to‘lov yakunlangandan so‘ng 24 soat davomida qayta ko‘rish va yuklab olish mumkin; saqlash muddati tugagach, ular avtomatik o‘chiriladi.",
            "Koreyscha ism tushirilgan esdalik buyumlari kabi jismoniy mahsulotlar alohida narx va shartlarda taklif etilishi mumkin. Barcha pullik mahsulotlar bo‘yicha mahsulot mazmuni, narxi, taqdim etish usuli va pulni qaytarish shartlari to‘lovdan oldin ekranda e'lon qilinadi.",
          ],
        },
        {
          title: "5. Reklama evaziga taqdim etiladigan xizmatlar",
          paragraphs: [
            "Reklama tomosha qilish orqali nomzodlarni ochish faqat reklama provayderi tomonidan mukofot to‘g‘ri tasdiqlangan taqdirda qo‘llaniladi. Avtomatlashtirilgan reklama ijrosi, mukofotni soxtalashtirish va g‘ayritabiiy takroriy so‘rovlar cheklanishi mumkin.",
          ],
        },
        {
          title: "6. Taqiqlangan harakatlar",
          paragraphs: [
            "Boshqa shaxsning shaxsiy ma'lumotlarini ruxsatsiz kiritish, kamsitish, nafrat uyg‘otish yoki o‘zini boshqa shaxs qilib ko‘rsatish maqsadida ism yaratish, avtomatlashtirilgan ortiqcha so‘rovlar yuborish, xizmat ishlashiga xalal berish hamda natijalarni yolg‘on ravishda rasmiy tasdiqlangan deb ko‘rsatish taqiqlanadi.",
          ],
        },
        {
          title: "7. Javobgarlikni cheklash",
          paragraphs: [
            "Qasddan yoki qo‘pol ehtiyotsizlik holatlari bundan mustasno, kompaniya AI tavsiyalaridan foydalanish natijasida yuzaga kelgan bilvosita zararlar, kutilgan foydaning yo‘qotilishi, rasmiy ro‘yxatdan o‘tkazishning rad etilishi yoki uchinchi shaxslar bilan nizolar uchun javobgar bo‘lmaydi.",
          ],
        },
        {
          title: "8. Aloqa",
          paragraphs: [`Xizmat bo‘yicha murojaatlar: ${companyInfo.email}`],
        },
      ],
    },
    privacy: {
      title: "Maxfiylik siyosati",
      description: `${companyInfo.serviceName} xizmatida shaxsiy ma'lumotlar qanday qayta ishlanishi haqida ma'lumot beradi.`,
      effectiveDate: LEGAL_EFFECTIVE_DATE,
      sections: [
        {
          title: "1. Qayta ishlanadigan shaxsiy ma'lumotlar",
          paragraphs: [
            "Mehmon sifatida ism xizmatlaridan foydalanilganda ism, tug‘ilgan sana va vaqt, mamlakat, til, foydalanish maqsadi hamda talaffuz bo‘yicha ko‘rsatmalar tahlil natijalarini yaratish jarayonida vaqtincha qayta ishlanadi, biroq kiritilgan ma'lumotlar va yaratilgan natijalar xizmat ma'lumotlar bazasida saqlanmaydi.",
            "Pullik batafsil hisobot uchun to‘lov amalga oshirilganda buyurtma identifikatsiya ma'lumotlari, to‘lov holati hamda hisobotni yaratish uchun zarur kiritilgan ma'lumotlar va tahlil natijalari saqlash muddati (to‘lovdan keyin 24 soat) davomida qayta ishlanadi. Karta raqami kabi to‘lov vositasi ma'lumotlari to‘lov operatori tomonidan bevosita qayta ishlanadi va kompaniya ularni saqlamaydi.",
            "Faqat esdalik buyumlariga buyurtma berish funksiyasidan foydalanilganda buyurtmachining ismi, elektron pochtasi, telefon raqami, yetkazib berish manzili, to‘lov holati va buyurtmani qayta ishlash ma'lumotlari qo‘shimcha ravishda qayta ishlanishi mumkin.",
            "Xizmat barqarorligi va suiiste'molning oldini olish maqsadida har kuni o‘zgarib turadigan identifikatsiyalab bo‘lmaydigan tashrif buyuruvchi xeshi, so‘rov vaqti, xizmat turi, bepul foydalanishlar soni, AI tokenlari, javob vaqti, qayta ishlash holati hamda reklama ko‘rsatilishi va mukofot hodisalari minimal operatsion jurnallar sifatida qayta ishlanishi mumkin.",
          ],
        },
        {
          title: "2. Shaxsiy ma'lumotlarni qayta ishlash maqsadlari",
          paragraphs: [
            "Shaxsiy ma'lumotlar kiritilgan ma'lumotlar asosida ism tavsiya qilish, talaffuz tahlili, mamlakatlar bo‘yicha til va madaniy muhit tahlili, bepul foydalanish miqdorini cheklash, reklama mukofotini tasdiqlash, mijozlar murojaatlariga javob berish, to‘lov va yetkazib berishni amalga oshirish hamda insofsiz foydalanishning oldini olish maqsadida qayta ishlanadi.",
          ],
        },
        {
          title: "3. Saqlash va yo‘q qilish",
          paragraphs: [
            "Tahlil uchun kiritilgan ma'lumotlar va natijalar faqat tizimga kirgan a'zo natijalarni saqlashni aniq tanlagan taqdirdagina uning hisobida saqlanadi hamda a'zo ularni o‘chirganda yoki saqlash maqsadi tugaganda yo‘q qilinadi. Mehmonlarning hamda saqlashni tanlamagan a'zolarning kiritgan ma'lumotlari va natijalari saqlanmaydi.",
            "Pullik batafsil hisobotning kiritilgan ma'lumotlari, tahlil natijalari va PDF fayllari to‘lov yakunlangandan 24 soat o‘tgach avtomatik o‘chiriladi. To‘lov va buyurtma bo‘yicha bitim yozuvlari tegishli qonunchilikda belgilangan qonuniy saqlash muddatlariga muvofiq alohida saqlanadi.",
            "Yetkazib berish tafsilotlari buyurtmani qayta ishlash, qaytarish va nizolarni hal qilish uchun zarur muddat o‘tgach yo‘q qilinadi yoki identifikatsiyalab bo‘lmaydigan holga keltiriladi.",
          ],
        },
        {
          title: "4. Uchinchi shaxslarga taqdim etish va qayta ishlashni topshirish",
          paragraphs: [
            "Xizmatni yuritish maqsadida zarur ma'lumotlar Supabase (ma'lumotlar bazasi va autentifikatsiya), Vercel (hosting), OpenAI API (AI tahlili), reklama tarmoqlari, to‘lov operatori (PortOne) hamda yetkazib berish va ishlab chiqarish bo‘yicha hamkorlar tomonidan qayta ishlanishi yoki ularga topshirilishi mumkin.",
          ],
        },
        {
          title: "5. Xorijga uzatish ehtimoli",
          paragraphs: [
            "Bulutli hosting, autentifikatsiya, AI API, reklama, elektron pochta yuborish kabi ayrim jarayonlarda shaxsiy ma'lumotlar xorijdagi serverlarda qayta ishlanishi mumkin. Uzatiladigan mamlakatlar, qayta ishlovchilar, maqsadlar va saqlash muddatlari xizmat provayderlari uzil-kesil belgilangach batafsil e'lon qilinadi.",
          ],
        },
        {
          title: "6. Foydalanuvchi huquqlari",
          paragraphs: [
            "Foydalanuvchi o‘z shaxsiy ma'lumotlari bilan tanishish, ularni tuzatish, o‘chirish, qayta ishlashni to‘xtatib turish va rozilikni qaytarib olishni so‘rashi mumkin. So‘rovlar mijozlarga xizmat ko‘rsatish elektron pochtasi orqali qabul qilinadi va shaxs tasdiqlangach ko‘rib chiqiladi.",
          ],
        },
        {
          title: "7. Shaxsiy ma'lumotlarni himoya qilish bo‘yicha mas'ul shaxs",
          paragraphs: [
            `Mas'ul shaxs: ${companyInfo.privacyOfficer}`,
            `Elektron pochta: ${companyInfo.email}`,
          ],
        },
      ],
    },
    refund: {
      title: "Pulni qaytarish va bekor qilish siyosati",
      description:
        "Raqamli mahsulotlar va buyurtma asosida tayyorlanadigan esdalik buyumlarini bekor qilish hamda pulni qaytarish mezonlari haqida ma'lumot beradi.",
      effectiveDate: LEGAL_EFFECTIVE_DATE,
      sections: [
        {
          title: "1. Umumiy tamoyillar",
          paragraphs: [
            "To‘lov funksiyasi ishga tushirilgach, har bir mahsulotning taqdim etish usuli, ishlab chiqarish boshlangan vaqti va yuklab olinganligiga qarab pulni qaytarish doirasi turlicha bo‘lishi mumkin. Aniq shartlar to‘lovdan oldin mahsulot ekranida e'lon qilinadi.",
          ],
        },
        {
          title: "2. Hanja batafsil hisobotlari (₩2,900 / ₩4,900 / ₩9,900)",
          paragraphs: [
            "To‘lovdan so‘ng AI batafsil tahlilini yaratish boshlangunga qadar buyurtmani bekor qilish mumkin. Tahlil yaratilib, uni ko‘rish yoki yuklab olish imkoni paydo bo‘lgach, shunchaki fikrdan qaytish sababli pulni qaytarish cheklanishi mumkin.",
            "Mazmundagi xatolik, tizim nosozligi tufayli yaratishning muvaffaqiyatsiz yakunlanishi yoki to‘lov summasining mos kelmasligi aniqlansa, hisobot qayta taqdim etiladi yoki pul qaytariladi. Saqlash muddati (to‘lovdan keyin 24 soat) tugashi sababli yuklab olish imkonining yopilishi pulni qaytarish uchun asos hisoblanmaydi.",
          ],
        },
        {
          title: "3. Barcha nomzodlarni birdaniga ochish (US$1.99)",
          paragraphs: [
            "Xalqaro ismga aylantirish, koreyscha ismga aylantirish va Hangul talaffuz yozuvi xizmatlarida nomzodlarni birdaniga ochish — to‘lov amalga oshirilishi bilanoq taqdim etiladigan raqamli kontent. Nomzodlarni ko‘rish boshlangunga qadar bekor qilish mumkin; ko‘rish boshlangandan so‘ng shunchaki fikrdan qaytish sababli pulni qaytarish cheklanishi mumkin.",
            "Tizim xatosi tufayli nomzodlar to‘g‘ri ochilmagan bo‘lsa, ular qayta taqdim etiladi yoki pul qaytariladi.",
          ],
        },
        {
          title: "4. Buyurtma asosida tayyorlanadigan esdalik buyumlari",
          paragraphs: [
            "Shaxsiy buyurtma asosida tayyorlanadigan mahsulotlarni ishlab chiqarish boshlangunga qadar bekor qilish mumkin. Ishlab chiqarish boshlangach, shunchaki fikrdan qaytish sababli pulni qaytarish cheklanishi mumkin; imlo xatosi, shikastlanish, noto‘g‘ri tayyorlanish yoki yetkazib berishdagi muammolar tekshirilgach, almashtirish, qayta tayyorlash yoki pulni qaytarish usullaridan mosi bilan hal qilinadi.",
          ],
        },
        {
          title: "5. Reklama orqali ochish",
          paragraphs: [
            "Reklama tomosha qilish evaziga beriladigan imtiyozlar pullik mahsulot emas. Reklama tarmog‘idagi xatolik tufayli mukofot berilmagan bo‘lsa, masala xizmat ichida qayta urinish yoki mijozlarga xizmat ko‘rsatish markaziga murojaat qilish orqali hal qilinadi.",
          ],
        },
        {
          title: "6. Aloqa",
          paragraphs: [`Pulni qaytarish bo‘yicha murojaatlar: ${companyInfo.email}`],
        },
      ],
    },
    pricing: {
      title: "Narxlar bo‘yicha qo‘llanma",
      description:
        "Bepul xizmatlar doirasi va pullik mahsulotlar narxlari haqida ma'lumot beradi.",
      effectiveDate: LEGAL_EFFECTIVE_DATE,
      sections: [
        {
          title: "Asosiy tahlil (bepul)",
          paragraphs: [
            "Hanja (xitoy ierogliflari) ma'nosini moslashtirish, xalqaro ismga aylantirish, koreyscha ismga aylantirish va Hangul talaffuz yozuvi — to‘rtala xizmatning asosiy tahlili mehmon foydalanuvchilarga bepul taqdim etiladi va kunlik foydalanish cheklovi qo‘llanilishi mumkin.",
          ],
        },
        {
          title: "Reklama evaziga foydalanish",
          paragraphs: [
            "Reklama tomosha qilingandan so‘ng nomzodlarni ochish alohida to‘lovsiz taqdim etiladigan reklama asosidagi imtiyozdir. Har bir reklama uchun keyingi bitta nomzod ochiladi. Reklama zaxirasi, mamlakat, qurilma yoki reklama provayderi siyosatiga qarab foydalanish imkoniyati o‘zgarishi mumkin.",
          ],
        },
        {
          title: "Hanja ma'nosini moslashtirish bo‘yicha batafsil mahsulotlar",
          paragraphs: [
            "5 tagacha nomzod uchun batafsil izoh va Hanja bo‘yicha umumiy batafsil tahlil: ₩2,900",
            "10 tagacha nomzod uchun kengaytirilgan batafsil izoh, Hanja bo‘yicha umumiy batafsil tahlil va esdalik uchun PDF: ₩4,900",
            "10 tagacha nomzod uchun batafsil tahlil, Hanja bo‘yicha umumiy batafsil tahlil, Saju (To‘rt ustun) va Besh unsur tahlili hamda esdalik uchun PDF: ₩9,900",
            "Pullik hisobotlar va PDF fayllarni to‘lovdan keyin 24 soat davomida qayta ko‘rish va yuklab olish mumkin; so‘ngra ular avtomatik o‘chiriladi.",
          ],
        },
        {
          title: "Barcha nomzodlarni birdaniga ochish",
          paragraphs: [
            "Xalqaro ismga aylantirish, koreyscha ismga aylantirish va Hangul talaffuz yozuvi xizmatlarida qolgan barcha nomzodlarni reklamasiz bir vaqtning o‘zida ochish: US$1.99 (to‘lov funksiyasi tayyorlanmoqda)",
          ],
        },
        {
          title: "Koreyscha ism tushirilgan esdalik buyumlari",
          paragraphs: [
            "Ism muhri kabi jismoniy esdalik buyumlari uchun har bir mahsulot narxi, yetkazib berish haqi va tayyorlash muddati alohida e'lon qilinadi.",
          ],
        },
        {
          title: "To‘lov to‘liq ishga tushirilishidan oldingi ma'lumot",
          paragraphs: [
            "To‘lov operatori (PG) tekshiruvi, masofaviy savdo faoliyatini ro‘yxatdan o‘tkazish va ishlab chiqarish bo‘yicha hamkorlik shartlari uzil-kesil belgilangach, haqiqiy to‘lov summasi, yetkazib berish haqi, tayyorlash muddati va pulni qaytarish shartlari mahsulot ekranlarida qayta e'lon qilinadi.",
          ],
        },
      ],
    },
  },
};

export default content;
