import type { DocPage, NoticeCopy } from "./types";
import type { DocKey } from "./ko";

/** O‘zbekcha — `scripts/translate-doc-content.ts`가 만든다. 손으로 고치지 말 것. */
export const UZ_DOCS = {
  "about": {
    "eyebrow": "Haqida",
    "title": "Inyeon-Link haqida",
    "summary": "Biz ikki tug‘ilish xaritasini Koreya Saju an'anasida taqqoslaymiz. Biz nima hisoblaymiz va nima da'vo qilmaymiz.",
    "backLabel": "Bosh sahifa",
    "sections": [
      {
        "title": "Biz nima qilamiz",
        "blocks": [
          {
            "p": "Inyeon-Link tug‘ilish sanalari va vaqtlaridan ikki tug‘ilish xaritasini tuzadi va **ikki energiya to‘plami qanday uchrashishini ko‘rsatadi.** Siz o‘z xaritangizni alohida o‘qishingiz va qaysi temperamentlar sizga mos kelishini ko‘rishingiz mumkin."
          },
          {
            "p": "Ekranda o‘qish **bepul va hisob qaydnomasi talab qilmaydi.** Pullik narsalar — ekranda hech qachon ko‘rsatilmaydigan raqamlarni o‘z ichiga olgan PDF hisobotlar — element kuchlari, o‘n xudo juftliklari va to‘rt ustun bo‘ylab munosabatlar."
          }
        ]
      },
      {
        "title": "Biz nima hisoblaymiz",
        "blocks": [
          {
            "p": "Xaritalar **Koreya lunisolal taqvimidan** tuziladi va tug‘ilish vaqti tug‘ilish joyi uchun **haqiqiy quyosh vaqti** ga to‘g‘rilanadi — bir xil soat vaqti, tug‘ilgan joyingizga qarab, quyoshning turli pozitsiyalarini anglatadi."
          },
          {
            "p": "Ballar faqat belgilangan qoidalardan kelib chiqadi. An'anaviy tushunchalar — o‘n xudo, shoxlar munosabatlari, qo‘llab-quvvatlovchi element — qoidalar sifatida ifodalanadi, shuning uchun **bir xil kirish har doim bir xil natijani beradi.** Qoidalar o‘zgarganda, biz eski o‘qishlarning o‘zgarmaganligini ta'minlash uchun regressiya tizimini ishga tushiramiz."
          },
          {
            "p": "**AI ishtirok etmaydi.** Ekrandagi har bir jumla hisoblangan natijaga bog‘langan belgilangan matn."
          }
        ]
      },
      {
        "title": "Biz nima da'vo qilmaymiz",
        "blocks": [
          {
            "ul": [
              "**Biz taqdirni aytmaymiz.** Bu yerda hech narsa sizni kimnidir izlash yoki undan qochishga undamaydi. Bu an'anadan olingan ma'lumot.",
              "**Biz siz kiritgan ma'lumotlarni saqlamaymiz.** Tug‘ilish tafsilotlari hisoblash paytida ishlatiladi va hech qachon yozilmaydi; natija havolalari brauzer serverga yubormaydigan URL qismida yashaydi.",
              "**Ball shaxsga hukm emas.** Past raqam munosabatni bekor qilmaydi."
            ]
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Usul batafsil [qo‘llanmalarda](/guide) tasvirlangan. Kompaniya tafsilotlari va biz bilan qanday bog‘lanish haqida [aloqa sahifasida](/contact) ma'lumotlar mavjud."
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
    "support": "Qo‘llab-quvvatlash"
  },
  "intro": "Foydalanish shartlaringizga o‘zgartirishlar — narxlar, siyosatlar — bu yerda kuchga kirishidan oldin e'lon qilinadi. Ichki yaxshilanishlar ro‘yxatga olinmaydi: bu yerda ko‘rsatilganlar sizga kerak bo‘lgan ma'lumotlardir.",
  "empty": {
    "title": "Hali hech qanday e'lon yo‘q",
    "body": "Biror narsa o‘zgarganda, bu yerda paydo bo‘ladi."
  },
  "effective": "Kuchga kiradi {date}",
  "pager": {
    "label": "E'lon sahifalari",
    "newer": "← Yangi",
    "older": "Eski →"
  },
  "items": {}
} satisfies NoticeCopy;
