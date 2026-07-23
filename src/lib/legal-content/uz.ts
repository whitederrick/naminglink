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
          title: "1. Xizmatning tabiati",
          paragraphs: [
            "Naming-Link AI asosidagi nom berish studiyasi bo'lib, quyidagi to'rt xizmatni taqdim etadi: ① Koreyscha nomga mos keladigan Xitoycha ma'no moslashuvi ② Koreyscha nomni global nomga aylantirish ③ Chet el nomini Koreyscha nomga aylantirish ④ Global nomni talaffuzga ko'ra Koreyscha yozish.",
            "Natijalar nom berish va talqin qilishda yordam beruvchi ma'lumotlar bo'lib, oilaviy munosabatlar ro'yxati, pasport, viza, brend, huquqiy hujjatlar kabi rasmiy ro'yxatga olish imkoniyatini kafolatlamaydi.",
          ],
        },
        {
          title: "2. A'zo va a'zo bo'lmagan foydalanuvchilar",
          paragraphs: [
            "Nom tahlili va reklama mukofoti asosidagi nomlar ko'rinishi a'zo bo'lmagan foydalanuvchilar tomonidan ham foydalanilishi mumkin. A'zolik yoki kirish faqat mahsulot buyurtma qilish va buyurtma tarixini tekshirish kabi hisob qaydnomasi talab qilinadigan funksiyalar uchun so'ralishi mumkin.",
          ],
        },
        {
          title: "3. AI natijalari va ko'rib chiqish mas'uliyati",
          paragraphs: [
            "AI tavsiya natijalari til, madaniyat va an'anaviy ma'lumotlarni o'z ichiga oladi. Foydalanuvchilar oxirgi nomni tanlashdan oldin tegishli tashkilotlar, mutaxassislar, mahalliy foydalanuvchilar, huquqiy va brend ko'rib chiqishlari orqali mosligini tasdiqlashlari kerak.",
          ],
        },
        {
          title: "4. Pullik xizmatlar",
          paragraphs: [
            "Xitoycha ma'no moslashuvi xizmatining batafsil mahsulotlari quyidagilardir: ① nomlar uchun maksimal 5 ta batafsil tavsif va Xitoycha umumiy batafsil: 2,900 won ② nomlar uchun maksimal 10 ta kengaytirilgan batafsil tavsif, Xitoycha umumiy batafsil va saqlash uchun PDF: 4,900 won ③ nomlar uchun maksimal 10 ta batafsil, Xitoycha umumiy batafsil, saju va besh element tahlili va saqlash uchun PDF: 9,900 won.",
            "Global nomni aylantirish, Koreyscha nomni aylantirish, Koreyscha talaffuz yozish xizmatlarida qolgan nomlarning barchasini reklamasiz bir marta ochiq ko'rsatadigan mahsulot (ichki to'lov 990 won, xorijiy to'lov US$1.99) taqdim etilishi mumkin. To'lov funksiyasi faollashtirilgunga qadar faqat reklama mukofoti asosidagi ko'rinish taqdim etiladi.",
            "Global foydalanuvchilar uchun raqamli mahsulot sifatida ④ Koreyscha nomlar bo'yicha umumiy hisobot PDF (US$9.99): tavsiya etilgan nomlarning barchasining tanlangan shrift nomi san'ati, ma'no talqini, besh element tahlili ⑤ Koreyscha talaffuz o'tkazish san'ati PDF (US$2.99): tanlangan shrift nomi san'ati va talaffuz ko'rsatmasi ⑥ Nom san'ati to'plami PDF (US$1.99): tanlangan nomni bir xil shrift bo'yicha san'at sifatida taqdim etish. Har bir mahsulotning narxi va qo'llaniladigan shriftlar soni ekranda ko'rsatilgan qiymatlarga muvofiq bo'ladi.",
            "Pullik batafsil hisobotlar va tahlil natijalari, PDF fayllari to'lov amalga oshirilgandan so'ng 24 soat davomida qayta ko'rish va yuklab olish mumkin, saqlash muddati o'tgach avtomatik ravishda o'chiriladi.",
            "Nom muhrlari kabi jismoniy mahsulotlar ichki 39,000 won, xorijiy US$34.99 (xalqaro yetkazib berish xarajatlari kiritilgan) kabi mahsulotlar bo'yicha narx va shartlar bilan taqdim etiladi. Barcha pullik mahsulotlar to'lovdan oldin mahsulot mazmuni, narxi, taqdimot usuli, qaytarish shartlari ekranda ko'rsatiladi.",
          ],
        },
        {
          title: "5. Reklama mukofoti asosidagi xizmatlar",
          paragraphs: [
            "Reklama ko'rish orqali nomlarni qulflashni ochish faqat reklama taqdimotchisi tomonidan normal mukofot tasdiqlanganda qo'llaniladi. Avtomatlashtirilgan reklama qayta ijro etish, mukofot manipulyatsiyasi, noaniq takroriy so'rovlar cheklanishi mumkin.",
          ],
        },
        {
          title: "6. Ta'qiqlangan harakatlar",
          paragraphs: [
            "Boshqalarning shaxsiy ma'lumotlarini ruxsatsiz kiritish, kamsitish, nafrat, o'zini o'zi tanitish maqsadida nomlar yaratish, avtomatlashtirilgan ortiqcha so'rovlar, xizmatni buzish, natijalarni yolg'on rasmiy tasdiqlash taqiqlanadi.",
          ],
        },
        {
          title: "7. Mas'uliyatni cheklash",
          paragraphs: [
            "Kompaniya, qasddan yoki jiddiy xatolar bo'lmasa, AI tavsiya natijalaridan foydalanish natijasida yuzaga kelgan bilvosita zararlar, kutgan foyda yo'qotilishi, rasmiy ro'yxatga olishni rad etish, uchinchi tomon nizolari uchun mas'uliyatni o'z zimmasiga olmaydi.",
          ],
        },
        {
          title: "8. Murojaat",
          paragraphs: [
            "Xizmat bo'yicha murojaat: platforest.inc@gmail.com",
          ],
        },
      ],
    },
    privacy: {
      title: "Maxfiylik siyosati",
      description: `${companyInfo.serviceName} xizmatida shaxsiy ma'lumotlar qanday qayta ishlanishi haqida ma'lumot beradi.`,
      effectiveDate: LEGAL_EFFECTIVE_DATE,
      sections: [
        {
          title: "1. Shaxsiy ma'lumotlarni qayta ishlash bo'yicha ma'lumotlar",
          paragraphs: [
            "A'zolik bo'lmagan foydalanuvchilar ism xizmatidan foydalanganda ism, tug'ilgan sana, tug'ilgan vaqt, mamlakat, til, foydalanish maqsadi va talaffuz ko'rsatmalari tahlil natijalari jarayonida vaqtincha qayta ishlanadi, ammo kiritilgan ma'lumotlar va natijalar xizmat ma'lumotlar bazasida saqlanmaydi.",
            "A'zolik ro'yxatdan o'tish va kirish jarayonida elektron pochta manzili va kirish tarixi (tasdiq tarixi) qayta ishlanadi.",
            "Pullik batafsil hisobot uchun to'lov amalga oshirilganda buyurtma identifikatsiya ma'lumotlari, to'lov holati va hisobotni yaratish uchun zarur bo'lgan kiritish va tahlil natijalari saqlash muddati (to'lovdan keyin 24 soat) davomida qayta ishlanadi. Kartochka raqami kabi to'lov vositalari ma'lumotlari to'lov xizmat ko'rsatuvchisi tomonidan bevosita qayta ishlanadi va kompaniya buni saqlamaydi.",
            "Tovar buyurtma funksiyasidan faqat buyurtmachining ismi, elektron pochta, aloqa ma'lumotlari, yetkazib berish manzili, to'lov holati va buyurtma qayta ishlash ma'lumotlari qo'shimcha ravishda qayta ishlanishi mumkin.",
            "Xizmat barqarorligini ta'minlash va suiiste'molni oldini olish maqsadida kunlik o'zgaradigan shaxsiylashtirilmagan tashrif buyuruvchilar hash, so'rov vaqti, xizmat turi, bepul foydalanish soni, AI tokenlari, javob vaqti, qayta ishlash holati va reklama ko'rsatish, mukofot tadbirlari minimal operatsion jurnal sifatida qayta ishlanishi mumkin.",
          ],
        },
        {
          title: "2. Shaxsiy ma'lumotlarni qayta ishlash maqsadi",
          paragraphs: [
            "Kiritilgan qiymatlar asosida ism tavsiyalari, talaffuz tahlili, mamlakatlarga qarab til va madaniyat tahlili, bepul foydalanish chegaralari, reklama mukofotlarini tasdiqlash, mijozlar so'rovlariga javob berish, to'lov va yetkazib berish jarayonlarini amalga oshirish, suiiste'molni oldini olish maqsadida shaxsiy ma'lumotlar qayta ishlanadi.",
          ],
        },
        {
          title: "3. Saqlash va yo'q qilish",
          paragraphs: [
            "Tahlil kiritish va natijalar faqat kirgan a'zo natijalarni saqlashni aniq tanlagan taqdirda hisobga saqlanadi, a'zo o'chirgan yoki saqlash maqsadi tugagandan so'ng yo'q qilinadi. A'zolik bo'lmagan foydalanuvchilar va saqlashni tanlamagan a'zolarning kiritish va natijalari saqlanmaydi.",
            "Pullik batafsil hisobotning kiritish, tahlil natijalari va PDF fayli to'lov amalga oshirilgandan so'ng 24 soatdan keyin avtomatik ravishda o'chiriladi. To'lov va buyurtma tranzaksiya yozuvlari tegishli qonun hujjatlarining qonuniy saqlash muddati bo'yicha alohida saqlanadi.",
            "Yetkazib berish tafsilotlari buyurtma qayta ishlash va qaytarish, nizolarni hal qilish uchun zarur bo'lgan muddat o'tgach yo'q qilinadi yoki shaxsiylashtirilmaydi.",
          ],
        },
        {
          title: "4. Uchinchi tomonlarga taqdim etish va qayta ishlashni topshirish",
          paragraphs: [
            "Xizmatni boshqarish uchun Supabase (ma'lumotlar bazasi, tasdiqlash), Vercel (hosting), OpenAI API (AI tahlili), reklama tarmog'i, to'lov xizmat ko'rsatuvchisi (PortOne), yetkazib berish va ishlab chiqarish hamkorlariga zarur bo'lgan ma'lumotlar qayta ishlanishi yoki topshirilishi mumkin.",
          ],
        },
        {
          title: "5. Shaxsiy ma'lumotlarni xorijga o'tkazish",
          paragraphs: [
            "Kompaniya xizmat ko'rsatish maqsadida quyidagi tarzda shaxsiy ma'lumotlarni xorijga o'tkazadi (qayta ishlashni topshirish). O'tkazish axborot-kommunikatsiya tarmog'i orqali amalga oshiriladi.",
            "① OpenAI, L.L.C. (AQSh) — o'tkaziladigan ma'lumotlar: ism, tug'ilgan sana, tug'ilgan vaqt, jins, mamlakat, til va boshqalar — o'tkazish maqsadi: AI asosidagi ism, talaffuz, ma'no tahlili — saqlash va foydalanish muddati: xizmat ko'rsatish muddati (kiritilgan ma'lumotlar OpenAI siyosati bo'yicha model o'qitish uchun ishlatilmaydi va suiiste'molni monitoring qilish maqsadida maksimal 30 kun saqlanadi).",
            "② Supabase, Inc. (AQSh) — o'tkaziladigan ma'lumotlar: buyurtma va to'lov holati ma'lumotlari, a'zo elektron pochta manzili, pullik hisobot kiritish va natijalari (to'lovdan keyin 24 soat), tovar buyurtma qilinganda buyurtmachining ismi, aloqa ma'lumotlari, yetkazib berish manzili — o'tkazish maqsadi: ma'lumotlar bazasi, tasdiqlash, saqlash — saqlash va foydalanish muddati: xizmat ko'rsatish muddati yoki har bir elementning saqlash muddati.",
            "③ Vercel, Inc. (AQSh) — o'tkaziladigan ma'lumotlar: xizmatdan foydalanish jarayonida uzatiladigan ulanish va so'rov ma'lumotlari — o'tkazish maqsadi: ilova hostingi — saqlash va foydalanish muddati: xizmat ko'rsatish muddati.",
            "Foydalanuvchilar shaxsiy ma'lumotlarni xorijga o'tkazishga rozilik berishni rad etishlari mumkin, ammo ushbu jarayon xizmat ko'rsatish uchun zarur bo'lganligi sababli, rad etish xizmatdan foydalanishni cheklashi mumkin.",
          ],
        },
        {
          title: "6. Foydalanuvchilarning huquqlari",
          paragraphs: [
            "Foydalanuvchilar shaxsiy ma'lumotlarni ko'rish, tuzatish, o'chirish, qayta ishlashni to'xtatish, rozilikni bekor qilishni so'rashlari mumkin. So'rovlar mijozlar markazining elektron pochta manziliga qabul qilinadi va shaxsni tasdiqlashdan so'ng amalga oshiriladi.",
          ],
        },
        {
          title: "7. Shaxsiy ma'lumotlarni himoya qilish bo'yicha mas'ul shaxs",
          paragraphs: [
            "Mas'ul shaxs: Kvak Unha",
            "Elektron pochta: platforest.inc@gmail.com",
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
          title: "1. Umumiy printsiplar",
          paragraphs: [
            "To'lov funksiyasi faollashtirilgandan so'ng, har bir mahsulotning taqdim etilish usuli, ishlab chiqarishni boshlash vaqti, yuklab olish imkoniyatiga qarab, qaytarish mumkin bo'lgan doira o'zgarishi mumkin. Aniq shartlar to'lovdan oldin mahsulot ekranida e'lon qilinadi.",
          ],
        },
        {
          title: "2. Xitoycha batafsil hisobot (2,900 won · 4,900 won · 9,900 won)",
          paragraphs: [
            "To'lovdan so'ng AI batafsil tahlil yaratish boshlanmaguncha bekor qilish mumkin. Tahlil yaratish tugagach va ko'rish yoki yuklab olish mumkin bo'lgach, oddiy kayfiyat o'zgarishi sababli qaytarish cheklanishi mumkin.",
            "Mazmun xatosi, tizim nosozligi sababli yaratish muvaffaqiyatsizligi, to'lov summasi mos kelmasligi aniqlangan taqdirda qayta berish yoki qaytarish bilan hal qilinadi. Saqlash muddati (to'lovdan keyin 24 soat) o'tgan taqdirda yuklab olish tugatilgan bo'lsa, bu qaytarish sababi hisoblanmaydi.",
          ],
        },
        {
          title: "3. Nomzodlarning umumiy ochilishi (ichki 990 won · xorijiy US$1.99)",
          paragraphs: [
            "Global nom o'zgartirish, Koreys nom o'zgartirish, Koreys talaffuzini yozish xizmatining nomzodlarning umumiy ochilishi to'lov darhol taqdim etiladigan raqamli kontentdir. Nomzodlarni ko'rish boshlanmaguncha bekor qilish mumkin, ko'rishdan so'ng oddiy kayfiyat o'zgarishi sababli qaytarish cheklanishi mumkin.",
            "Tizim xatosi sababli nomzodlar normal ravishda ochilmagan taqdirda qayta taqdim etish yoki qaytarish bilan hal qilinadi.",
          ],
        },
        {
          title: "4. Global raqamli PDF mahsulotlari (US$9.99·US$2.99·US$1.99)",
          paragraphs: [
            "Koreys nomi bo'yicha umumiy hisobot (US$9.99), Koreys talaffuzini o'zgartirish san'ati (US$2.99), nom san'ati to'plami (US$1.99) to'lovdan so'ng yaratiladigan raqamli kontentdir. PDF yaratish boshlanmaguncha bekor qilish mumkin, yaratish tugagach va yuklab olish mumkin bo'lgach, oddiy kayfiyat o'zgarishi sababli qaytarish cheklanishi mumkin.",
            "Yaratish muvaffaqiyatsizligi, mazmun xatosi, to'lov summasi mos kelmasligi aniqlangan taqdirda qayta berish yoki qaytarish bilan hal qilinadi. Saqlash muddati (to'lovdan keyin 24 soat) o'tgan taqdirda yuklab olish tugatilgan bo'lsa, bu qaytarish sababi hisoblanmaydi.",
          ],
        },
        {
          title: "5. Maxsus tayyorlangan mahsulotlar (nom muhrlari va boshqalar)",
          paragraphs: [
            "Nom muhrlari kabi shaxsiy maxsus tayyorlangan mahsulotlar (ichki 39,000 won · xorijiy US$34.99, xalqaro yetkazib berish xarajatlari kiritilgan) ishlab chiqarishni boshlashgacha bekor qilinishi mumkin. Ishlab chiqarishni boshlagandan so'ng, o'yin matni shaxsiylashtirilgan holda tasdiqlanadi, shuning uchun oddiy kayfiyat o'zgarishi sababli qaytarish cheklanishi mumkin, xatolar, buzilishlar, noto'g'ri ishlab chiqarish yoki yetkazib berish muammolari aniqlangandan so'ng almashtirish, qayta ishlab chiqarish yoki qaytarish orqali hal qilinadi.",
          ],
        },
        {
          title: "5. Reklama asosidagi qulfni ochish",
          paragraphs: [
            "Reklama ko'rish orqali taqdim etiladigan imtiyozlar to'lov mahsuloti emas. Reklama tarmog'idagi xato sababli kompensatsiya berilmagan taqdirda, xizmat ichida qayta urinib ko'rish yoki mijozlar markaziga murojaat qilish orqali hal qilinadi.",
          ],
        },
        {
          title: "6. Murojaat",
          paragraphs: [
            "Qaytarish bo'yicha murojaat: platforest.inc@gmail.com",
          ],
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
            "Xanji ma'nosi moslashuvi, global nom o'zgartirish, Koreys nom o'zgartirish, Koreys talaffuz belgilash to'rt xil xizmatning asosiy tahlili a'zolarga bepul taqdim etiladi va kunlik foydalanish cheklovlari qo'llanilishi mumkin.",
          ],
        },
        {
          title: "Reklama mukofotli foydalanish",
          paragraphs: [
            "Reklama ko'rilgandan so'ng nomzodlarni ochish, qo'shimcha to'lovsiz taqdim etiladigan reklama turidagi imtiyozdir. Har bir reklama uchun keyingi nomzodlardan biri ochiladi. Reklama zaxirasi, mamlakat, qurilma yoki reklama ta'minotchisi siyosatiga qarab foydalanish imkoniyati o'zgarishi mumkin.",
          ],
        },
        {
          title: "Xanji ma'nosi moslashuvi batafsil mahsulot",
          paragraphs: [
            "Nomzod maksimal 5 ta batafsil tavsif va xanji umumiy batafsil: 2,900 won",
            "Nomzod maksimal 10 ta kengaytirilgan batafsil tavsif, xanji umumiy batafsil va saqlash uchun PDF: 4,900 won",
            "Nomzod maksimal 10 ta batafsil, xanji umumiy batafsil, saju·o'lar tahlili va saqlash uchun PDF: 9,900 won",
            "Pullik hisobotlar va PDF to'lovdan so'ng 24 soat davomida qayta ko'rish va yuklab olish mumkin, keyin avtomatik ravishda o'chiriladi.",
          ],
        },
        {
          title: "Nomzodlarni to'liq bir martada ochish",
          paragraphs: [
            "Global nom o'zgartirish, Koreys nom o'zgartirish, Koreys talaffuz belgilash xizmatlarida qolgan nomzodlarni reklamasiz bir martada ochish: ichki to'lov 990 won, xorijiy to'lov US$1.99 (to'lov funksiyasi tayyorlanmoqda)",
          ],
        },
        {
          title: "Global raqamli PDF mahsuloti",
          paragraphs: [
            "Koreys nomi umumiy hisobot PDF (tavsiya etilgan nomlarning badiiy san'ati, ma'nosi izoh va o'lar tahliliga oid ma'lumotlar): US$9.99",
            "Koreys talaffuz o'zgartirish san'ati PDF (tanlangan shrift nomi san'ati va talaffuz ko'rsatmalari): US$2.99",
            "Nom san'ati to'plami PDF (tanlangan nom 1 ta shrift bo'yicha san'at sifatida taqdim etiladi): US$1.99",
            "Narxlar va qo'llaniladigan shriftlar soni ekranda ko'rsatilgan qiymatlarga muvofiq bo'ladi, PDF to'lovdan so'ng 24 soat davomida qayta yuklab olish mumkin va keyin avtomatik ravishda o'chiriladi. (to'lov funksiyasi tayyorlanmoqda)",
          ],
        },
        {
          title: "Koreys nomi mahsulotlari",
          paragraphs: [
            "Nom muhr: ichki 39,000 won · xorijiy US$34.99 (xalqaro yetkazib berish xarajatlari kiritilgan). Boshqa jismoniy mahsulotlar uchun narx, yetkazib berish xarajatlari va ishlab chiqarish muddati alohida ko'rsatiladi.",
          ],
        },
        {
          title: "Rasmiy to'lovdan oldin ma'lumot",
          paragraphs: [
            "PG tekshiruvi, aloqa savdo faoliyati haqida xabar berish, ishlab chiqarish hamkorlik shartlari tasdiqlangandan so'ng haqiqiy to'lov miqdori, yetkazib berish xarajatlari, ishlab chiqarish muddati, qaytarish shartlari mahsulot ekranida yana ko'rsatiladi.",
          ],
        },
      ],
    },
  },
};

export default content;
