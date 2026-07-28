import type { ConsentCopySet } from "@/lib/checkout-consent/types";

// O'zbekcha (lotin). Koreyscha asl matn (ko.ts) me'yor hisoblanadi — ma'no farq qilsa,
// ko.ts kuchga ega.

export const uz: ConsentCopySet = {
  DIGITAL: {
    infoTitle: "Mahsulot ma'lumoti",
    info: [
      ["Ishlab chiquvchi / Yetkazib beruvchi", "Naming-Link"],
      ["Mahsulot turi", "Raqamli kontent (ekrandagi natija yoki PDF hujjat). To'lovdan so'ng darhol taqdim etiladi."],
      ["Foydalanish sharti", "Internet brauzer yoki PDF ochadigan istalgan qurilma. Alohida o'rnatish talab qilinmaydi."],
      ["Foydalanish muddati", "Cheklanmagan. Yuklab olingan fayl foydalanuvchida qoladi."],
      ["Shartnomadan voz kechish", "Taqdim etish boshlanishidan oldin summa to'liq qaytariladi. Boshlangandan keyin shunchaki fikr o'zgarishi sababli voz kechish cheklanadi (Koreya Elektron tijorat qonuni, 17-modda 2-qism)."],
      ["Almashtirish / qaytarish xarajati", "Yo'q. Raqamli kontent bo'lgani uchun yetkazib berish amalga oshirilmaydi."],
    ],
    consent:
      "Ushbu mahsulot to'lovdan so'ng darhol taqdim etiladigan raqamli kontent ekanini va **taqdim etish boshlangach shunchaki fikr o'zgarishi sababli shartnomadan voz kechish cheklanishini** tasdiqlayman.",
    required: "To'lov qilish uchun voz kechish cheklovlariga rozilik bildirishingiz kerak.",
    refund:
      "Pulni qaytarish yoki savollar uchun quyidagi mijozlarga xizmat ko'rsatish markazi yoki elektron pochtaga murojaat qiling. Tizim xatosi tufayli mahsulot taqdim etilmagan bo'lsa yoki yechib olingan summa buyurtmadan farq qilsa, summani to'liq qaytaramiz.",
  },
  MADE_TO_ORDER: {
    infoTitle: "Mahsulot ma'lumoti",
    info: [
      ["Ishlab chiquvchi / Yetkazib beruvchi", "Naming-Link"],
      ["Mahsulot turi", "Siz buyurtma qilgan matn o'yib tushiriladigan, har biri alohida tayyorlanadigan haqiqiy muhr (dojang)."],
      ["Tayyorlash usuli", "Buyurtma qabul qilingach matn va shrift tasdiqlanadi, so'ng o'yish ishi boshlanadi."],
      ["Yetkazib berish", "O'yish tugagach jo'natiladi. Koreya ichida kuryer, chet elga xalqaro jo'natma."],
      ["Shartnomadan voz kechish", "**O'yish boshlanishidan oldin** summa to'liq qaytariladi. Boshlangandan keyin voz kechish cheklanadi — mahsulot buyurtmangizga ko'ra alohida ishlab chiqarilgani uchun qayta sotib bo'lmaydi (Koreya Elektron tijorat qonuni, 17-modda 2-qism)."],
      ["Almashtirish / qaytarish", "Mahsulot shikastlangan, noto'g'ri o'yilgan yoki buyurtmadan boshqa bo'lsa, uni bepul qayta tayyorlaymiz yoki summani to'liq qaytaramiz."],
      ["Qaytarish xarajati", "Yuqoridagi hollarda bepul. Shunchaki fikr o'zgarishi bo'yicha bekor qilish faqat o'yish boshlanishidan oldin mumkin."],
    ],
    consent:
      "Ushbu muhr men bergan matn o'yib tayyorlanadigan **buyurtma asosidagi mahsulot ekanini va o'yish boshlangach shunchaki fikr o'zgarishi sababli shartnomadan voz kechish cheklanishini** tasdiqlayman.",
    required: "To'lov qilish uchun voz kechish cheklovlariga rozilik bildirishingiz kerak.",
    refund:
      "Pulni qaytarish yoki savollar uchun quyidagi mijozlarga xizmat ko'rsatish markazi yoki elektron pochtaga murojaat qiling. Shikastlangan, noto'g'ri o'yilgan yoki buyurtmaga mos kelmaydigan mahsulotlar bepul qayta tayyorlanadi yoki summasi to'liq qaytariladi.",
  },
};
