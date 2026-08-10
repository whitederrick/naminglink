import type { DocPage, NoticeCopy } from "./types";
import type { GlobalDocKey } from "./keys";

/** O‘zbekcha — `scripts/translate-doc-content.ts`가 만든다. 손으로 고치지 말 것. */
export const UZ_DOCS = {
  "about": {
    "eyebrow": "Haqqida",
    "title": "Naming-Link Haqida",
    "summary": "Biz sizga koreys ismlarini tanlash va tushunishda yordam beramiz. Natijalarimizni qanday asosda shakllantirayotganimiz va nima qilmasligimiz haqida.",
    "backLabel": "Bosh sahifa",
    "sections": [
      {
        "title": "Biz nima qilamiz",
        "blocks": [
          {
            "p": "Naming-Link sizga **koreys ismlarini tanlash va tushunishda** yordam beradi — bolalar ismidagi hanja, chet elda foydalanish uchun koreys ismi, o'z ismingizning Hangul yozuvi va muhr yoki chop etilgan hisobot kabi esdaliklar."
          },
          {
            "p": "Natijalaringizni ko'rish **bepul va hisob qaydnomasi talab qilmaydi.** Pullik mahsulotlar hech qachon ekranda allaqachon ko'rsatilgan narsalarni qayta sotmaydi: ular ko'proq nomzodlarni ochadi, yozma tahlil qo'shadi yoki natijani saqlashingiz mumkin bo'lgan narsaga aylantiradi."
          }
        ]
      },
      {
        "title": "Har bir xizmat kimga mo'ljallangan",
        "blocks": [
          {
            "p": "Bu yerda ikki xil xizmat mavjud: biri **allaqachon koreys ismi bor** odamlar uchun, ikkinchisi esa **birini kerak** bo'lganlar uchun. Ular sizdan turlicha narsalarni talab qiladi, shuning uchun ular turli tillarda taklif etiladi."
          },
          {
            "ul": [
              "**Sizning tilingizda taklif etiladi** — o'z ismingizni Hangulda yozish va koreys ismini yaratish. Bu koreys ismi bo'lmagan odamlar uchun, shuning uchun ular siz kelgan tilga mos keladi.",
              "**Faqat koreys tilida taklif etiladi** — bolalar uchun ismlar-hanja topish va koreys ismini chet elda foydalanish uchun aylantirish. Ikkalasi ham ishlash uchun **mavjud Hangul ismini** talab qiladi, shuning uchun ekranlar va ularning qo'llanmalari koreys tilida qoladi."
            ]
          }
        ]
      },
      {
        "title": "Bizning javoblarimiz nima asosida",
        "blocks": [
          {
            "p": "Hanja **Koreya Oliy Sudi tomonidan belgilangan rasmiy ismlar-hanja jadvalidan** keladi. Har bir belgi ismlar uchun belgilangan o'qilishi bor va jadvaldan tashqaridagi belgilar ro'yxatdan o'tkazilmaydi. Biz bu ro'yxatga qo'shmaymiz yoki sevimlilarni tanlamaymiz."
          },
          {
            "p": "Saju va besh element raqamlari **koreys lunisolal taqvimidan** hisoblanadi, tug'ilish vaqti tug'ilgan joy uchun haqiqiy quyosh vaqtiga to'g'irlanadi. O'qish an'anaviy ma'lumotnoma bo'lib, bashorat emas."
          },
          {
            "p": "Yozma tushuntirishlar AI tomonidan ishlab chiqariladi. **Faktlar ixtiro qilmasligi** uchun modelga faqat sizning ma'lumotingiz va bizning ma'lumotlarimiz beriladi va ichida qolish uchun ko'rsatma beriladi. Qo'llanmalar buni batafsil tushuntiradi."
          }
        ]
      },
      {
        "title": "Biz nima qilmaymiz",
        "blocks": [
          {
            "ul": [
              "**Biz taqdirni bashorat qilmaymiz.** Bu yerda hech narsa omad, boylik yoki himoya va'da qilmaydi.",
              "**Biz sizning ismingizni saqlamaymiz.** Bepul natijalar hech qachon serverlarimizga yozilmaydi va pullik hujjatlar nusxasini saqlamasdan yetkaziladi.",
              "**To'lash yaxshiroq javobni sotib olmaydi.** Reklama orqali ochish va to'lov orqali ochish bir xil mazmunni beradi."
            ]
          }
        ]
      },
      {
        "title": "Bizning ma'lumotlarimiz va tarjimalarimiz qayerda",
        "blocks": [
          {
            "p": "**Biz buni ochiq aytishni afzal ko'ramiz.** Sizga kim nima tekshirgani va hech kim nima tekshirmagani haqida ma'lumot berish, hamma narsaning ko'rib chiqilganini da'vo qilishdan ko'ra foydalidir."
          },
          {
            "ul": [
              "**Ismlar-hanja ma'lumotlari** — {publisher} ismlar-hanja jadvali, {effectiveDate} holatiga ko'ra. Biz manba faylining hashini saqlaymiz, shuning uchun agar jadval o'zgarsa, nima o'zgarganini bilishimiz mumkin.",
              "**Tuzuvchi** Platforest. Belgilar, o'qishlar va ma'nolar jadvaldan o'z holicha o'tkaziladi; biz qo'shmaymiz yoki olib tashlamaymiz.",
              "**Tarjima** — avval koreys tilida, keyin ingliz tilida, so'ngra boshqa tillarda yoziladi. **Bu mashina tarjimalari, avtomatik ravishda tekshirilgan** — yo'qolgan jumlalar, izchil terminologiya va kiritilgan qiymatlarning saqlanishi uchun. Ular mahalliy spikerlar tomonidan ko'rib chiqilmagan.",
              "**Yozma tushuntirishlar** AI tomonidan ishlab chiqariladi, sizning ma'lumotingiz va bizning ma'lumotlarimizga cheklangan holda, shunda u faktlarni ixtiro qilmaydi."
            ]
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Xizmat 23 tilda mavjud. Pullik PDF hujjatlari arab va khmer tillarida ingliz tilida chiqariladi — PDF renderer bu skriptlarni qo'llab-quvvatlamaydi — va biz buni to'lovdan oldin ekranda aytamiz."
          }
        ]
      },
      {
        "title": "Aloqa",
        "blocks": [
          {
            "p": "Kompaniya ma'lumotlari va biz bilan qanday bog'lanish haqida [aloqa sahifasida](/contact) mavjud, shu jumladan qaytarish, maxfiylik so'rovlari va xato xabarlar."
          }
        ]
      }
    ]
  },
  "guide": {
    "eyebrow": "Naming-Link qanday ishlaydi",
    "title": "Biz sizning ismingizni nima asosida tanlaymiz",
    "summary": "Koreys familiyasini qanday tanlaymiz, berilgan ismi taklif qilishdan oldin nima tekshiramiz va ismingizni Hangulda qanday yozamiz — qasddan qoldirgan qismlar bilan.",
    "backLabel": "Qo'llanma",
    "sections": [
      {
        "title": "",
        "blocks": [
          {
            "stats": [
              {
                "value": "{characterTotal}",
                "label": "ism-hanja belgilar"
              },
              {
                "value": "{syllableCount}",
                "label": "Hangul bo'yicha qamrab olingan silablar"
              },
              {
                "value": "{effectiveDate}",
                "label": "jadvalning amal qilish sanasi"
              },
              {
                "value": "{avoidTotal}",
                "label": "an'anaviy ravishda qochilgan belgilar"
              }
            ]
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Quyidagi qo'llanmalar sizning tilingizda taklif etilgan xizmatlarni qamrab oladi. Naming-Link shuningdek, **allaqachon koreys ismi bor** odamlar uchun ikki xizmatga ega — bolalar uchun ismlar-hanja topish va koreys ismini chet elda foydalanish uchun aylantirish. Ular mavjud Hangul ismini talab qiladi, shuning uchun xizmatlar va ularning qo'llanmalari koreys tilida."
          },
          {
            "p": "[Haqida](/about) qaysi xizmat kimga mo'ljallanganini tushuntiradi."
          }
        ]
      }
    ]
  },
  "guide/how-hangul-transliteration": {
    "eyebrow": "Qanday ishlaydi",
    "title": "Biz ismingizni Hangulda qanday yozamiz",
    "summary": "Chet el ismini Hangulda yozishda qanday tovushlarni tanlaymiz va nega hanja qo'shmaymiz.",
    "backLabel": "Qo'llanma",
    "sections": [
      {
        "title": "Biz tovushni, ma'noni emas, olib boramiz",
        "blocks": [
          {
            "p": "Bu xizmat **sizning ismingizni** Hangulda yozadi. Bu sizga koreys ismini bermaydi. Michael becomes 마이클 — bir xil ism, koreyslar uni o'qiydigan va aytadigan tarzda yozilgan. Biz uni shunchaki o'xshash ma'noga ega bo'lgan koreys ismi bilan almashtirmaymiz."
          },
          {
            "p": "Agar sizga koreys ismi kerak bo'lsa, **bu boshqa xizmat**. Biri ismingizni saqlaydi va faqat yozuvni o'zgartiradi; ikkinchisi yangi ism taklif qiladi."
          }
        ]
      },
      {
        "title": "Korean tilida yo'q tovushlar",
        "blocks": [
          {
            "p": "Har bir tilda Korean tilida yo'q tovushlar mavjud — f, v, z, th va Korean tilida farqlanmaydigan unli tovushlar. Shuning uchun biz sizning ismingizni ovoz chiqarib o'qiganda **Korean tilida gapiruvchi haqiqatan aytadigan** shaklda yozamiz, asl fonetikani har bir belgisi bilan transkriptsiya qilish o'rniga. Maqsad — ishlatiladigan yozuv, eng texnik jihatdan sodiq bo'lgan emas."
          },
          {
            "p": "Bir xil yozuv nomning kelib chiqishiga qarab farq qilishi mumkin, shuning uchun biz sizning tilingiz va mamlakatingizni so'raymiz va o'sha talaffuzdan ish olib boramiz."
          }
        ]
      },
      {
        "title": "Bir nechta yozuvlar, yonma-yon",
        "blocks": [
          {
            "p": "Yagona to'g'ri javob yo'q. Asl tovushga eng yaqin yozuv, Koreyada eng ko'p ishlatiladigan yozuv va yozilishi eng oson bo'lgan yozuv ko'pincha uchta turli narsadir. Shuning uchun biz ularni birga ko'rsatamiz va ularni ajratib turadigan narsalarni aytamiz."
          },
          {
            "p": "Agar ularning hech biri to'g'ri his qilmasa, siz xohlagan tovush haqida bir ko'rsatma qo'shishingiz mumkin va yana bir bor o'tkazasiz — masalan, ma'lum bir silabni boshqacha yozish kerakligini."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bu yerda hanja yo'q",
        "blocks": [
          {
            "p": "Biz transliteratsiyaga hanja qo'shmaymiz. Hanja ma'no olib keladi, va bu jarayon tovush haqida. Faqat tovushga mos keladigan belgilarni tanlash sizni so'ragan ma'noga olib kelishi mumkin."
          }
        ]
      },
      {
        "title": "Bu pasport romanizatsiyasidan qarama-qarshi yo'nalishda",
        "blocks": [
          {
            "p": "Bu ikkita osonlik bilan aralashishi mumkin, shuning uchun farqni tushuntiramiz: **ular qarama-qarshi yo'nalishlarda harakat qiladi.**"
          },
          {
            "ul": [
              "**Romanizatsiya** Korean shaxsning Hangul ismini Lotin alifbosida yozadi. Bu pasport berilganda belgilangan va shundan keyin chiptalar, vizalar va bank hisob raqamlari ham o'sha yozuvga amal qiladi. 김민준 Kim Minjun bo'ladi.",
              "**Hangul transliteratsiyasi** — bu xizmatning vazifasi — boshqa yo'nalishda harakat qiladi. Bu Lotin alifbosida yozilgan ismini olib, uning Hangul'dagi qanday tovushini yozadi. Daniel 대니얼 bo'ladi."
            ]
          },
          {
            "p": "Shunday qilib, bu yerda olganingiz **pasportingizdagi yozuvni o'zgartirmaydi.** O'sha romanizatsiya allaqachon belgilangan; bu ismingizni Hangul'da qayta yozish. Ikkita har doim bir-biriga to'g'ri kelmasligi mumkin — Korean tilida yo'q tovushni yozish yo'lda bir oz ma'lumotni yo'qotadi."
          }
        ]
      },
      {
        "title": "Bu yozuvni qayerda ishlatishingiz mumkin",
        "blocks": [
          {
            "p": "Hangul yozuvi odatda quyidagi joylarda kerak bo'ladi."
          },
          {
            "ul": [
              "**O'zingizni tanishtirish** — ismingizni Hangul'da ko'rsatish yoki Korean tilida aytish",
              "**Forma ustida Hangul ismi maydoni** — ismingizni Hangul'da so'raydigan ro'yxatlar va arizalar. E'tibor bering, **muassasa rasmiy hujjatda nima bo'lishini belgilaydi** — bu yerda olganingiz o'sha uchun o'rnini bosmaydi.",
              "**Ism muhr yoki esdalik** — o'yma uchun yozuv"
            ]
          },
          {
            "p": "**Bir nechta yozuvning asosli bo'lishi odatiy hol.** Agar ismni Hangul'da bir necha usulda yozish mumkin bo'lsa, biz ularni yonma-yon ko'rsatamiz va tanlovni sizga qoldiramiz."
          }
        ]
      }
    ]
  },
  "guide/how-global-to-korean": {
    "eyebrow": "Qanday ishlaydi",
    "title": "Korean ismini qanday quramiz",
    "summary": "Biz mavjud familiyalardan tanlaymiz, ismingizni aytish va yozish qanchalik osonligini baholaymiz va ismingizning maqsadini so'raymiz.",
    "backLabel": "Qo'llanma",
    "sections": [
      {
        "title": "Biz familiyadan boshlaymiz",
        "blocks": [
          {
            "p": "Koreyada familiya birinchi o'rinda bo'ladi va berilgan ismlar kabi erkin ixtiro qilinmaydi — siz uni meros qilib olasiz. Shuning uchun biz faqat Korean odamlarida haqiqatan mavjud bo'lgan familiyalarni taklif qilamiz. Bizning standart bazamiz **20 ta eng keng tarqalgan familiya**, bu esa aholi sonining taxminan 80% ni qamrab oladi."
          },
          {
            "p": "Agar sizning familiyangiz haqiqiy Korean familiyasi bilan tovush jihatidan mos kelsa — Wang 왕, Ye 예 — biz o'shani birinchi o'ringa qo'yamiz. Asl ismingizga bog'lanish saqlash tasodifiy tanlangan familiyadan ko'ra ko'proq ahamiyatga ega."
          },
          {
            "p": "Siz familiyani o'zingiz tanlashingiz yoki bizdan taklif qilishimizni so'rashingiz mumkin. Har qanday holatda ham, bu **mavjud familiya bo'ladi**."
          }
        ]
      },
      {
        "title": "Tanlash uchun yigirma olti familiya mavjud",
        "blocks": [
          {
            "p": "Biz ro'yxatni maqsadli ravishda tor tutdik. **Korean familiyalari haqiqatan ham konsentratsiyalangan** — Kim, Lee va Park o'zlari aholi sonining taxminan 45% ni tashkil etadi, va eng yuqori yigirma esa taxminan 80%. Kam uchraydigan familiyalarni qo'shish menyuni kengaytiradi, lekin bu Koreyaliklar tomonidan ism sifatida eshitilmaydigan nomlarni ham keltiradi."
          },
          {
            "ul": [
              "**Eng keng tarqalgan yigirma** (aholi sonining taxminan 80%) — 김 Kim · 이 Lee · 박 Park · 최 Choi · 정 Jung · 강 Kang · 조 Cho · 윤 Yoon · 장 Jang · 임 Lim · 한 Han · 오 Oh · 서 Seo · 신 Shin · 권 Kwon · 황 Hwang · 안 Ahn · 송 Song · 전 Jeon · 홍 Hong",
              "**Tovushni saqlash uchun qo'shilgan haqiqiy familiyalar** — 왕 Wang · 진 Jin · 백 Baek · 마 Ma · 나 Na · 유 Yoo"
            ]
          },
          {
            "p": "Ikkinchi guruh sizning familiyangiz tovush jihatidan o'tishi uchun mavjud. Wang, Jin, Baek, Ma, Na va Yoo Koreyaliklar allaqachon bor bo'lgan familiyalar, shuning uchun ismingizni aytish siz boshlagan ismingizga bog'lanishni saqlaydi. Barcha yigirma olti familiya haqiqiy foydalanishda — ularning hech biri bizning ixtiromiz emas."
          }
        ]
      },
      {
        "title": "Aytilishi oson, yozilishi oson",
        "blocks": [
          {
            "p": "Bu Koreyada sizni haqiqatan chaqiradigan ism, shuning uchun birinchi narsa biz tekshiramiz — Korean odam buni bir marta eshitib, yozib olish mumkinmi. Har safar yozilishi kerak bo'lgan ism sizga yuk bo'ladi, bizga emas."
          },
          {
            "p": "Ma'no ham muhim. Korean berilgan ismlari odatda bir ma'noga ega, shuning uchun biz sizga ismning qanday o'qilishi va nima uchun tanlanganini aytamiz — faqat ismning o'zi emas."
          }
        ]
      },
      {
        "title": "Biz ismning maqsadini so'raymiz",
        "blocks": [
          {
            "p": "Universitet hujjatlari uchun ism, do'stlaringiz xonada baqiradigan ism yoki onlayn foydalanadigan nom bir xil emas. Biz sizdan uni qanday ishlatmoqchi ekanligingizni so'raymiz va buni hisobga olamiz."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bu transliteratsiya emas",
        "blocks": [
          {
            "p": "Bu yerda biz **yangi Korean ismini** taklif qilamiz. Agar siz mavjud ismingizni Hangul'da yozmoqchi bo'lsangiz — Michael as 마이클 — [Hangul yozuv qo'llanmasi](/guide/how-hangul-transliteration) ga qarang."
          }
        ]
      }
    ]
  },
  "notice": {
    "eyebrow": "E'lonlar",
    "title": "E'lonlar",
    "summary": "Biz xizmatdan foydalanishingizga ta'sir etuvchi o'zgarishlarni e'lon qilamiz.",
    "backLabel": "Bosh sahifa",
    "sections": []
  },
  "contact": {
    "eyebrow": "Aloqa",
    "title": "Biz bilan bog'laning",
    "summary": "Savollar, qaytarishlar, maxfiylik so'rovlari va xato xabarlarini olish uchun biz bilan qanday bog'lanishingiz mumkin, kompaniya ma'lumotlarimiz bilan.",
    "backLabel": "Bosh sahifa",
    "sections": [
      {
        "title": "Bizga elektron pochta yuboring",
        "blocks": [
          {
            "p": "Yozing **{email}**. Biz ikki ish kuni ichida javob beramiz. Buyurtma bilan bog'liq har qanday narsalar — to'lov, qaytarish, olmagan fayl — iltimos, **buyurtma raqamingiz yoki to'lov qilingan elektron pochtangizni** qo'shing."
          },
          {
            "p": "Telefon so'rovlari: {customerCenter} (Korean ish soatlari)."
          }
        ]
      },
      {
        "title": "Bu yerga nima yuborish kerak",
        "blocks": [
          {
            "ul": [
              "**To'lovlar va qaytarishlar** — agar hujjat hech qachon tayyorlanmagan bo'lsa yoki to'langan summa sizning buyurtmangizdan farq qilsa, biz to'liq qaytaramiz. [Qaytarish siyosati](/refund-policy)ni ko'ring.",
              "**Maxfiylik** — ma'lumotlaringizga kirish, to'g'rilash yoki o'chirish uchun so'rovlar. [Maxfiylik siyosati](/privacy)ni ko'ring.",
              "**To'g'rilashlar** — agar biron bir hanja ma'nosi, o'qilishi yoki hisoblash noto'g'ri ko'rinsa, bizga xabar bering. Qaysi ekran va nima kiritganingizni aytish juda yordam beradi.",
              "**Boshqa narsalar** — hamkorliklar va matbuot uchun ham shu manzilga murojaat qiling."
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
              "**Pochta buyurtmalari raqami** — {mailOrderNumber}",
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
            "p": "Xabaringizda ism yoki tug'ilgan sana kiritishingiz shart emas. Bepul natijalar hech qachon serverlarimizda saqlanmaydi, shuning uchun biz ularni qayta qidirib topa olmaymiz — buyurtma raqami etarli."
          }
        ]
      }
    ]
  },
  "guide/what-we-dont-use": {
    "eyebrow": "Bizning Standartlarimiz",
    "title": "Nimani ishlatmaymiz",
    "summary": "Biz umumiy boylik yoki raqamli ballarni tayinlamaymiz, shuningdek, chiziq hisoblarini ham ishlatmaymiz. Besh element faqat qo'shimcha o'lchov sifatida ishlatiladi. Bu erda sabablari keltirilgan.",
    "backLabel": "Foydalanish Qo'llanmasi",
    "sections": [
      {
        "title": "Umumiy boylik yoki raqamli ballarni tayinlamaslik sabablari",
        "blocks": [
          {
            "p": "Ismlarga umumiy boylik yoki raqamli ballarni tayinlash usullari mavjud. Naming-Link bu raqamlarni taqdim etmaydi. Sabablari to'rt xil."
          },
          {
            "p": "**Birinchidan, bitta standart yo'q.** Boylikni hisoblash usullari maktabga qarab farq qiladi va bir xil ism bir standart bo'yicha ijobiy, boshqasi bo'yicha esa salbiy baholanishi mumkin. Qaysi biri to'g'ri ekanligini aniqlash uchun asosimiz yo'q. Bittasini to'g'ri javob sifatida taqdim etish halol emas."
          },
          {
            "p": "**Ikkinchidan, bu hisoblashlar chiziq hisoblariga tayanadi.** Biroq, Oliy sud ma'lumotlari chiziq hisoblarini umuman o'z ichiga olmaydi. Bundan tashqari, chiziq hisoblari oddiy yoki soddalashtirilgan belgilar sifatida hisoblanganiga va qanday radikallar hisoblanganiga qarab farq qilishi mumkin. Asosiy raqamlar aniq belgilangan emasligi sababli, ularga asoslangan ballar ham aniq bo'lmaydi."
          },
          {
            "p": "**Uchinchidan, raqamlar haqiqatdan ko'ra mustahkam ko'rinadi.** \"87 ball\" deganda, bu o'lchangan qiymat sifatida qabul qilinadi, oddiy talqin emas. Bu ismlar o'sha raqamdan bosim ostida bo'lishi mumkin, haqiqatan muhim bo'lgan narsalarni chetga surib qo'yadi (Uni chaqirish yoqimli mi? Ma'no mos keladimi? Istalgan xohishlarni o'z ichiga oladimi?)."
          },
          {
            "p": "**To'rtinchidan, tasdiqlash usuli yo'q.** Ism va inson hayoti o'rtasidagi munosabatni tasdiqlash mumkin emas. Noto'g'ri yoki to'g'ri deb aytib bo'lmaydigan narsani ballga aylantirish tasdiqlanmaydigan raqamga olib keladi, garchi bu noto'g'ri bo'lmasa ham."
          },
          {
            "p": "Biz faqat **tasdiqlangan** narsalarni ishlatamiz. Oliy sudning rasmiy ism-hanja jadvali, har bir belgi uchun belgilangan o'qishlar va jadvalda keltirilgan ma'nolar. Buning o'rniga, biz ushbu nomzodning tanlanish sabablari va ba'zi belgilarni chiqarib tashlash sabablari haqida ma'lumot beramiz, **ballar o'rniga sabablarga** e'tibor qaratamiz."
          }
        ]
      },
      {
        "title": "Biz chiziq hisoblarini ishlatmaymiz",
        "blocks": [
          {
            "p": "Oliy sud tomonidan taqdim etilgan rasmiy ism-hanja ma'lumotlari chiziq hisoblarini o'z ichiga olmaydi. Biz olgan {characterTotal} belgilar orasida **birorta belgi ham chiziq hisoblariga ega emas.**"
          },
          {
            "p": "Chiziq hisoblarini ishlatish uchun, biz boshqa joydan raqamlarni olishimiz kerak bo'ladi, lekin agar biz bu raqamlarning qayerdan kelganini va qanday mezonlar asosida hisoblanganini aniqlay olmasak, bu ismlarni asossiz raqamlarga asoslanib baholashni anglatadi. Biz tasdiqlanmagan qiymatlarga asoslangan ismlarni baholashdan voz kechishga qaror qildik."
          }
        ]
      },
      {
        "title": "Besh elementlarni faqat ma'lumot sifatida ishlatamiz",
        "blocks": [
          {
            "figure": "five-elements",
            "labels": {
              "alt": "Besh elementlar doirada joylashgan: avlod qo'shnilar o'rtasida o'tadi, nazorat birini o'tkazib yuboradi",
              "wood": "daraxt",
              "fire": "olov",
              "earth": "yer",
              "metal": "metall",
              "water": "suv",
              "saeng": "Avlod — har biri qo'shnisini keltiradi",
              "geuk": "Nazorat — har biri o'tkazib yuborganini cheklaydi"
            },
            "caption": "Besh elementlar o'rtasidagi munosabatlar. Doira bo'ylab harakat qilish o'zaro avlodni (相生) ifodalaydi, birini o'tkazib yuborish va bosim o'tkazish o'zaro cheklashni (相剋) ifodalaydi. Biz bu munosabatni faqat nomzodlarni taqqoslash uchun qo'shimcha o'lchov sifatida ishlatamiz."
          },
          {
            "p": "Agar siz tug'ilgan oyingizni kiritgan bo'lsangiz, biz o'sha oyga asoslangan besh elementlarning soddalashtirilgan ma'lumotlarini nomzodlarni taqqoslash uchun qo'shimcha o'lchov sifatida ishlatamiz. Biroq, bu aniq saju tahlili emas va **biz ismlarning insonning taqdirini yoki xarakterini belgilashini da'vo qilmaymiz.**"
          },
          {
            "p": "Oxirgi tanlovda, bizning ustuvorligimiz tovushlar, ma'nolar kombinatsiyalari, oilaning etkazmoqchi bo'lgan qadriyatlari va ro'yxatdan o'tkazilishi mumkinligi hisobga olinadi. Agar siz tug'ilgan oyingizni kiritmagan bo'lsangiz, biz besh elementlar ma'lumotlarini tahlildan to'liq chiqaramiz — biz noma'lum ma'lumotlar haqida tasodifiy taxminlar qilmaymiz."
          },
          {
            "p": "Agar siz aniq saju asosidagi tahlilni xohlasangiz, biz buni alohida batafsil hisobotda qamrab olamiz. Besh elementlarni bepul hanja moslashuvda ustuvor qilmasligimizning sababi shundaki, tug'ilgan sana va vaqtga asoslangan besh elementlardan kelib chiqadigan hukmlarni aniq deb taqdim etishni xohlamaymiz."
          }
        ]
      }
    ]
  },
  "guide/what-we-sell": {
    "eyebrow": "Pullik Mahsulotlar",
    "title": "Pullik mahsulotlarga nimalar kiradi?",
    "summary": "Biz bepul ko'rinadigan narsalar va har bir mahsulot uchun to'lov bilan keladigan qo'shimcha xususiyatlarni aniqlaymiz. Narxlar haqiqiy mahsulot sozlamalaridan olinadi.",
    "backLabel": "Foydalanish Qo'llanmasi",
    "sections": [
      {
        "title": "Bepul nimalar ko'rinadi?",
        "blocks": [
          {
            "p": "Ism yaratish va natijalarni ko'rish **bepul**. A'zolik ro'yxatdan o'tish shart emas. Siz hanja moslashuvlarining ma'nolarini, koreys ismlarini yaratishni, global ism konversiyasini va Hangul talaffuz notatsiyasini ko'rishingiz mumkin, shuningdek, ekranda tavsiya etilgan natijalar va ularning asoslari."
          },
          {
            "p": "Pullik mahsulotlar **allaqachon ekranda ko'rsatilgan narsalarni qayta sotmaydi.** Ular ko'proq nomzodlarni ochadi, ko'proq tushuntirishlar qo'shadi yoki saqlanishi yoki uzatilishi mumkin bo'lgan format yaratadi."
          }
        ]
      },
      {
        "title": "Barcha nomzodlar to‘g‘risida to‘liq ma'lumot — {priceUnlock}",
        "blocks": [
          {
            "p": "Tavsiya etilgan natijalar nomzodlarni birma-bir ochish uchun tuzilgan. E'lonlarni ko‘rishda, bir vaqtning o‘zida bitta ochiladi, bu mahsulot esa **barcha qolgan nomzodlarni bir vaqtning o‘zida ochadi**."
          },
          {
            "p": "Agar siz shoshilmayotgan bo‘lsangiz, xarid qilishingiz shart emas. **E'lonlar orqali ochish natijalari va to‘lov orqali ochish natijalari mutlaqo bir xil** — bu faqat kutish masalasi, va to‘lov qilish yaxshiroq nomzodlarni keltirmaydi."
          }
        ]
      },
      {
        "title": "Hanja Tafsilotlari — Uch Bosqich",
        "blocks": [
          {
            "p": "Hangul ismi bilan birga qo‘shiladigan hanja tanlash jarayonida uchta batafsil mahsulot mavjud."
          },
          {
            "ul": [
              "**Maksimal 5 hanja nomzodlari batafsil** — {priceFiveDetail}. Ekranda beshta nomzod uchun tushuntirishlarni kengaytirishingiz mumkin. PDF mavjud emas.",
              "**Maksimal 10 hanja nomzodlari kengaytirilgan batafsil PDF** — {priceTenDetail}. Nomzodlar soni o‘n taga oshadi va PDF hujjati qo‘shiladi.",
              "**Maksimal 10 hanja nomzodlari saju va beshta elementlar bo‘yicha keng qamrovli hisobot** — {priceTenSaju}. Yuqoridagilarga qo‘shimcha ravishda, bu tug‘ilgan sana asosida olingan saju jadvalini va beshta elementlar kuchlarini o‘z ichiga oladi, ma'lum bir hanjaning nima uchun shu ismga mos kelishini beshta elementlar nuqtai nazaridan o‘rganadi."
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Hanja o‘zi jamoatchilikka ochiq ma'lumot",
        "blocks": [
          {
            "p": "Foydalanish mumkin bo‘lgan hanja va ularning ma'nolari Koreya Oliy Sudining rasmiy nom-hanja jadvalidan kelib chiqadi va barchasi xizmat ko‘rsatish hujjatlarida jamoatchilikka ochiq. To‘langan mahsulotlar hanja ma'lumotlarini emas, balki **uni ismga muvofiq tanlash va tushuntirish jarayonini** sotadi."
          }
        ]
      },
      {
        "title": "Xalqaro Foydalanuvchilar Uchun PDF",
        "blocks": [
          {
            "p": "Chet el ismlarini koreys ismlariga aylantirish yoki ismlarni Hangulda yozish uchun mavjud hujjatlar. Narxlar to‘lov ekranida ko‘rsatilgan miqdorlarga mos keladi."
          },
          {
            "ul": [
              "**Koreys Ismi Premium Hisoboti** — 3 sahifa. Kaligrafiya muqovasi, ismingizning ma'nosi va uni tanlash sababi, shuningdek, saju va beshta elementlar talqini kiritilgan.",
              "**Hangul Ism San'ati** — 2 sahifa. Kaligrafiya muqovasi va talaffuz qo‘llanmasini o‘z ichiga oladi. Ismni Hangulda qanday yozish va qanday talaffuz qilishni o‘z ichiga oladi."
            ]
          }
        ]
      },
      {
        "title": "Ism Möhri",
        "blocks": [
          {
            "p": "Biz ekranda yaratilgan ismingizni jismoniy muhrga o‘yib, sizga yuboramiz. Narxlar modelga qarab farq qiladi — dumaloq muhr {priceStampRound}, kvadrat muhr {priceStampSquare}, ebano muhr {priceStampEbony}. Xalqaro yetkazib berish ham mavjud."
          },
          {
            "p": "**Bu yerda mahsulotlar yetkazib berishni o‘z ichiga oladi.** Oldingi mahsulotlardan farqli o‘laroq, ishlab chiqarish va yetkazib berish vaqt talab etadi va qabul qilish manzili talab qilinadi. Yetkazib berish ma'lumotlari faqat buyurtma qayta ishlash uchun ishlatiladi va qonuniy saqlash uchun, qayta ishlash tugagach, siyosatda belgilangan muddatdan so‘ng yo‘q qilinadi."
          }
        ]
      },
      {
        "title": "Xarid qilishdan oldin bilishingiz kerak bo‘lgan narsalar",
        "blocks": [
          {
            "p": "**Raqamli mahsulotlar to‘lov amalga oshirilgandan so‘ng darhol taqdim etiladi.** Siz yuklab olish boshlanmasidan oldin istalgan vaqtda bekor qilishingiz va to‘liq qaytarib olishingiz mumkin, lekin yuklab olish tugagach, oddiy fikr o‘zgartirish sababli qaytish cheklangan (Elektron Savdo Qonunining 17-moddasi, 2-band). Ushbu shart to‘lov ekranida alohida kelishilgan."
          },
          {
            "p": "**Natijalar mazmuni bo‘yicha shikoyatlar qaytarish uchun sabab emas.** Biroq, agar hujjat yaratilmagan bo‘lsa, fayl ochilmasa yoki to‘lov miqdori buyurtmadan farq qilsa, bu qayta chiqarish yoki to‘liq qaytarish sifatida ko‘rib chiqiladi."
          },
          {
            "p": "Batafsil shartlar [Qaytarish Siyosati](/refund-policy) va [Narxlar Qo‘llanmasi](/pricing) da keltirilgan. Ushbu matn nima kiritilganini ko‘rsatadi va qonuniy shartlar ushbu ikki hujjatda ustunlikka ega."
          }
        ]
      }
    ]
  }
} satisfies Record<GlobalDocKey, DocPage>;

export const UZ_NOTICES = {
  "kindLabels": {
    "service": "Xizmat",
    "product": "Mahsulotlar",
    "policy": "Siyosat",
    "support": "Qo‘llab-quvvatlash"
  },
  "intro": "Foydalanish shartlaringizdagi o‘zgarishlar — narxlar, siyosatlar — ular kuchga kirishidan oldin bu yerda e'lon qilinadi. Ichki yaxshilanishlar ro‘yxatga olinmaydi: bu yerda ko‘rsatilganlar siz bilishingiz kerak bo‘lgan narsalardir.",
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
  "items": {
    "2026-08-02-contact": {
      "title": "Aloqa va Haqida sahifalari endi ochiq",
      "body": [
        "Savollar, qaytarishlar, maxfiylik so‘rovlari va xato xabarlari endi bitta joyga yo‘naltiriladi. Pastki qismdagi aloqa sahifasi bizning elektron pochta manzilimiz va kompaniya ma'lumotlarini ko‘rsatadi.",
        "Bizning javoblarimiz asoslangan narsalar va biz qasddan qilmaydigan narsalar haqidagi ma'lumotlar haqida sahifada yozilgan."
      ]
    },
    "2026-08-01-pdf-language": {
      "title": "PDF hisobotlari arab va khmer tillarida ingliz tilida chiqariladi",
      "body": [
        "Agar siz xizmatdan arab yoki khmer tilida foydalansangiz, xarid qilgan PDF ingliz tilida ishlab chiqariladi. Hujjatlarimizni joylashtiradigan vosita hali o‘sha ikki yozuvda paragraflarni belgilay olmaydi.",
        "Ekran sizning tilingizda qoladi va ismingiz hujjat ichida o‘z yozuvingizda chop etiladi.",
        "To‘lovdan oldin bir xil eslatma paydo bo‘ladi. Vosita ushbu yozuvlarni qo‘llab-quvvatlaganda, biz bu yerda aytamiz."
      ]
    },
    "2026-08-01-payments-preparing": {
      "title": "To‘lovlar hali ochiq emas",
      "body": [
        "Ism yaratish va natijani o‘qish bugun bepul, va hisob ochish shart emas.",
        "To‘langan mahsulotlar hali sotuvda emas. Narxlar sahifasida ko‘rsatilgan miqdorlar sotuvlar ochilganda amal qiladi."
      ]
    }
  }
} satisfies NoticeCopy;
