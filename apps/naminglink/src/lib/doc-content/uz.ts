import type { DocPage, NoticeCopy } from "./types";
import type { GlobalDocKey } from "./keys";

/** O‘zbekcha — `scripts/translate-doc-content.ts`가 만든다. 손으로 고치지 말 것. */
export const UZ_DOCS = {
  "about": {
    "eyebrow": "Haqqida",
    "title": "Naming-Link Haqida",
    "summary": "Biz sizga koreys ismlarini tanlash va tushunishda yordam beramiz. Natijalarimizni qanday asosda shakllantirayotganimiz va nima qilishni maqsad qilmasligimiz haqida.",
    "backLabel": "Bosh sahifa",
    "sections": [
      {
        "title": "Biz nima qilamiz",
        "blocks": [
          {
            "p": "Naming-Link sizga **koreys ismlarini tanlash va tushunishda** yordam beradi — bolalar ismining ortidagi hanja, chet elda foydalanish uchun koreys ismi, o'z ismingizning Hangul yozuvi va muhr yoki chop etilgan hisobot kabi esdaliklar."
          },
          {
            "p": "Natijalaringizni ko'rish **bepul va hisob qaydnomasi talab qilmaydi.** Pullik narsalar hech qachon ekranda ko'rsatilgan narsalarni qayta sotmaydi: ular ko'proq nomzodlarni ochadi, yozma tahlil qo'shadi yoki natijani saqlashingiz mumkin bo'lgan narsaga aylantiradi."
          }
        ]
      },
      {
        "title": "Har bir xizmat kim uchun",
        "blocks": [
          {
            "p": "Bu yerda ikkita xizmat turi mavjud: biri **allaqachon koreys ismi bor** odamlar uchun, ikkinchisi esa **birini kerak** bo'lganlar uchun. Ular sizdan turlicha narsalarni talab qiladi, shuning uchun ular turli tillarda taklif etiladi."
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
        "title": "Bizning javoblarimiz qanday asosda",
        "blocks": [
          {
            "p": "Hanja **Koreya Oliy Sudi tomonidan belgilangan rasmiy ismlar-hanja jadvalidan** keladi. Har bir belgi ismlar uchun belgilangan o'qishga ega, va jadvaldan tashqaridagi belgilar ro'yxatga olinmaydi. Biz o'sha ro'yxatga qo'shmaymiz yoki sevimlilarni tanlamaymiz."
          },
          {
            "p": "Saju va besh element raqamlari **koreys lunisolal taqvimidan** hisoblanadi, tug'ilish vaqti tug'ilgan joy uchun haqiqiy quyosh vaqti bilan to'g'irlanadi. O'qish an'anaviy ma'lumotnoma bo'lib, bashorat emas."
          },
          {
            "p": "Yozma tushuntirishlar AI tomonidan ishlab chiqariladi. **narsalarni ixtiro qilishdan** saqlanish uchun, model faqat sizning kirishingiz va bizning ma'lumotlarimiz bilan ta'minlanadi va ichida qolish uchun aytiladi. Qo'llanmalar buni batafsil tushuntiradi."
          }
        ]
      },
      {
        "title": "Biz nima qilmaymiz",
        "blocks": [
          {
            "ul": [
              "**Biz bashorat qilmaymiz.** Bu yerda hech narsa omad, boylik yoki himoya va'da qilmaydi.",
              "**Biz sizning ismingizni saqlamaymiz.** Bepul natijalar hech qachon serverlarimizga yozilmaydi, va pullik hujjatlar nusxasini saqlamasdan yetkaziladi.",
              "**To'lov qilish yaxshiroq javobni sotib olmaydi.** Reklama orqali ochish va to'lov orqali ochish bir xil mazmunni beradi."
            ]
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Xizmat 23 tilda mavjud. Pullik PDF hujjatlar Arab va Khmer tillarida ingliz tilida chiqariladi — PDF renderer o'sha yozuvlarni qo'llab-quvvatlamaydi — va biz buni to'lovdan oldin ekranda aytamiz."
          }
        ]
      },
      {
        "title": "Aloqa",
        "blocks": [
          {
            "p": "Kompaniya ma'lumotlari va biz bilan qanday bog'lanish haqida [aloqa sahifasida](/contact) mavjud, shu jumladan qaytish, maxfiylik so'rovlari va xato xabarlar."
          }
        ]
      }
    ]
  },
  "guide": {
    "eyebrow": "Naming-Link qanday ishlaydi",
    "title": "Biz sizning ismingizni qanday asosda tanlaymiz",
    "summary": "Koreys familiyasini qanday tanlaymiz, berilgan ismni taklif qilishdan oldin nima tekshiramiz va ismingizni Hangulda qanday yozamiz — qoldirgan qismlarimiz bilan.",
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
                "label": "qamrab olingan Hangul sillablar"
              },
              {
                "value": "{effectiveDate}",
                "label": "jadval amal qilish sanasi"
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
            "p": "Quyidagi qo'llanmalar sizning tilingizda taklif etilgan xizmatlarni qamrab oladi. Naming-Link shuningdek, **allaqachon koreys ismi bor** odamlar uchun ikkita xizmatga ega — bolalar uchun ismlar-hanja topish va koreys ismini chet elda foydalanish uchun aylantirish. Ular mavjud Hangul ismini talab qiladi, shuning uchun xizmatlar va ularning qo'llanmalari koreys tilida."
          },
          {
            "p": "[Haqida](/about) qaysi xizmat kim uchun ekanligini tushuntiradi."
          }
        ]
      }
    ]
  },
  "guide/how-hangul-transliteration": {
    "eyebrow": "Bu qanday ishlaydi",
    "title": "Biz ismingizni Hangulda qanday yozamiz",
    "summary": "Biz xorijiy ismlarni Hangulda yozishda qanday tovushlarni tanlaymiz va nega hanja qo'shmaymiz.",
    "backLabel": "Qo'llanma",
    "sections": [
      {
        "title": "Biz ma'noni emas, tovushni olib boramiz",
        "blocks": [
          {
            "p": "Bu xizmat **sizning ismingizni** Hangulda yozadi. Bu sizga koreys ismini bermaydi. Michael becomes 마이클 — bir xil ism, koreyslar uni o'qishi va aytishi uchun yozilgan. Biz uni o'xshash ma'noga ega bo'lgan koreys ismi bilan almashtirmaymiz."
          },
          {
            "p": "Agar sizga koreys ismi kerak bo'lsa, **bu boshqa xizmat**. Biri ismingizni saqlaydi va faqat yozuvni o'zgartiradi; ikkinchisi yangi ism taklif qiladi."
          }
        ]
      },
      {
        "title": "Koreysda yo'q tovushlar",
        "blocks": [
          {
            "p": "Har bir tilda koreysda yo'q tovushlar mavjud — f, v, z, th va koreys qilmaydigan unli farqlar. Bular uchun biz **koreys tilida gapiradigan odamning aslida aytadigan** so'zini yozamiz, asl fonetikani har bir belgi bo'yicha yozish o'rniga. Maqsad — ishlatiladigan yozuv, eng texnik jihatdan to'g'ri bo'lgan emas."
          },
          {
            "p": "Bir ismning kelib chiqishiga qarab, bir xil yozuv farq qilishi mumkin, shuning uchun biz sizning tilingiz va mamlakatingizni so'raymiz va o'sha talaffuzdan ishlaymiz."
          }
        ]
      },
      {
        "title": "Bir nechta yozuvlar, yonma-yon",
        "blocks": [
          {
            "p": "Yagona to'g'ri javob yo'q. Asl tovushga eng yaqin yozuv, Koreyada eng ko'p ishlatiladigan va eng oson yoziladigan yozuvlar ko'pincha uch xil narsadir. Shuning uchun biz ularni birga ko'rsatamiz va ularni ajratadigan narsalarni aytamiz."
          },
          {
            "p": "Agar ularning hech biri to'g'ri his qilmasa, siz kerakli tovush haqida bir maslahat qo'shishingiz mumkin va yana bir marta ishga tushirishingiz mumkin — masalan, ma'lum bir sillabani boshqacha yozish kerakligini."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bu yerda hanja yo'q",
        "blocks": [
          {
            "p": "Biz transliteratsiyaga hanja qo'shmaymiz. Hanja ma'no olib keladi, va bu jarayon tovush haqida. Belgilarni faqat tovushga moslashtirish sizni so'ramagan ma'noga olib kelishi mumkin."
          }
        ]
      }
    ]
  },
  "guide/how-global-to-korean": {
    "eyebrow": "Qanday ishlaydi",
    "title": "Biz qanday qilib koreyscha ism yaratamiz",
    "summary": "Biz mavjud familiyalardan tanlaymiz, ismlarning aytilishi va yozilishi qanchalik osonligini baholaymiz va ism nima uchun kerakligini so'raymiz.",
    "backLabel": "Qo'llanma",
    "sections": [
      {
        "title": "Biz familiyadan boshlaymiz",
        "blocks": [
          {
            "p": "Koreyada familiya birinchi o'rinda turadi va berilgan ismlardan farqli o'laroq, u erkin ixtiro qilinmaydi — siz uni meros qilib olasiz. Shuning uchun biz faqat koreyslar haqiqatan ham bor bo'lgan familiyalarni taklif qilamiz. Bizning asosiy bazamiz **20 ta eng keng tarqalgan familiya**, bu esa aholi sonining taxminan 80% ni qamrab oladi."
          },
          {
            "p": "Agar sizning familiyangiz haqiqiy koreys familiyasi bilan tovush jihatidan mos kelsa — Wang bilan 왕, Ye bilan 예 — biz uni birinchi o'ringa qo'yamiz. Asl ismingizga bog'lanish tasodifiy tanlangan familiyadan ko'ra muhimroq."
          },
          {
            "p": "Siz familiyani o'zingiz tanlashingiz mumkin yoki bizdan birini tavsiya qilishimizni so'rashingiz mumkin. Har qanday holatda ham bu **mavjud familiya** bo'ladi."
          }
        ]
      },
      {
        "title": "Aytilishi oson, yozilishi oson",
        "blocks": [
          {
            "p": "Bu Koreyada sizni haqiqatan ham chaqiradigan ism, shuning uchun biz birinchi navbatda koreyslar uni bir marta eshitib, yozib olishlari mumkinligini tekshiramiz. Har safar yozib berishni talab qiladigan ism sizga yuk bo'ladi, bizga emas."
          },
          {
            "p": "Ma'no ham muhim. Koreys berilgan ismlari odatda ma'no olib keladi, shuning uchun biz sizga ism qanday o'qilishi va nima uchun tanlanganini aytamiz — faqat ismning o'zi emas."
          }
        ]
      },
      {
        "title": "Biz ism nima uchun kerakligini so'raymiz",
        "blocks": [
          {
            "p": "Universitet hujjatlari uchun ism, do'stlaringiz xonada baqiradigan ism yoki onlayn foydalanadigan ism bir xil emas. Biz siz uni qanday ishlatmoqchi ekanligingizni so'raymiz va buni hisobga olamiz."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bu transliteratsiya emas",
        "blocks": [
          {
            "p": "Bu yerda biz **yangi koreys ismini** taklif qilamiz. Agar siz mavjud ismingizni Hangulda yozmoqchi bo'lsangiz — Michael ni 마이클 sifatida — [Hangul yozuvi qo'llanmasi](/guide/how-hangul-transliteration) ga qarang."
          }
        ]
      }
    ]
  },
  "notice": {
    "eyebrow": "E'lonlar",
    "title": "E'lonlar",
    "summary": "Biz xizmatdan foydalanishingizga ta'sir qiluvchi o'zgarishlarni e'lon qilamiz.",
    "backLabel": "Bosh sahifa",
    "sections": []
  },
  "contact": {
    "eyebrow": "Aloqa",
    "title": "Biz bilan bog'laning",
    "summary": "Savollar, qaytarish, maxfiylik so'rovlari va xato xabarlarini yuborish uchun biz bilan qanday bog'lanishni, kompaniya ma'lumotlarimiz bilan.",
    "backLabel": "Bosh sahifa",
    "sections": [
      {
        "title": "Bizga elektron pochta yuboring",
        "blocks": [
          {
            "p": "Yozing **{email}**. Biz ikki ish kunida javob beramiz. Buyurtma bilan bog'liq har qanday narsalar — to'lov, qaytarish, olmagan fayl — iltimos, **buyurtma raqamingizni yoki to'lov qilingan elektron pochtani** qo'shing."
          },
          {
            "p": "Telefon so'rovlari: {customerCenter} (Koreya ish vaqti)."
          }
        ]
      },
      {
        "title": "Bu yerga nima yuborish kerak",
        "blocks": [
          {
            "ul": [
              "**To'lovlar va qaytarish** — agar hujjat hech qachon tayyorlanmagan bo'lsa, yoki to'lov miqdori sizning buyurtmangizdan farq qilsa, biz to'liq qaytaramiz. [Qaytarish siyosati](/refund-policy) ga qarang.",
              "**Maxfiylik** — ma'lumotlaringizga kirish, to'g'rilash yoki o'chirish so'rovlari. [Maxfiylik siyosati](/privacy) ga qarang.",
              "**To'g'rilashlar** — agar hanja ma'nosi, o'qilishi yoki hisoblash noto'g'ri ko'rinsa, bizga ayting. Qaysi ekran va nima kiritganingizni aytish juda yordam beradi.",
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
              "**Biznes ro'yxatga olish raqami** — {businessNumber}",
              "**Pochta buyurtmalari raqami** — {mailOrderNumber}",
              "**Manzil** — {address}",
              "**Mijozlarga xizmat** — {customerCenter}",
              "**Elektron pochta** — {email}",
              "**Maxfiylik bo'yicha mas'ul** — {privacyOfficer}",
              "**Hosting provayderi** — {hostingProvider}"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Xabaringizda ism yoki tug'ilgan sanani kiritishingiz shart emas. Bepul natijalar bizning serverlarimizda saqlanmaydi, shuning uchun biz ularni qayta topa olmaymiz — buyurtma raqami yetarli."
          }
        ]
      }
    ]
  },
  "guide/what-we-dont-use": {
    "eyebrow": "Bizning Standartlar",
    "title": "Biz Nimalarni Ishlatmaymiz",
    "summary": "Biz umumiy taqdir yoki raqamli ballarni belgilamaymiz, shuningdek, chiziq hisoblarini ishlatmaymiz. Besh element faqat qo'shimcha o'lchov sifatida ishlatiladi. Sabablari quyida keltirilgan.",
    "backLabel": "Foydalanish Qo'llanmasi",
    "sections": [
      {
        "title": "Umumiy taqdir yoki raqamli ballarni belgilamaslik sabablari",
        "blocks": [
          {
            "p": "Ismlarga umumiy taqdir yoki raqamli ballarni belgilash usullari mavjud. Naming-Link bu raqamlarni taqdim etmaydi. Sabablari to'rt xil."
          },
          {
            "p": "**Birinchidan, bitta standart yo'q.** Baxtni hisoblash usullari maktabga qarab farq qiladi va bir xil nom bir standart bo'yicha ijobiy, boshqasi bo'yicha esa salbiy baholanishi mumkin. Qaysi biri to'g'ri ekanligini aniqlash uchun asosimiz yo'q. Bittasini javob sifatida taqdim etish halol emas."
          },
          {
            "p": "**Ikkinchidan, bu hisoblashlar chiziq sonlariga tayanadi.** Biroq, Oliy sud ma'lumotlari chiziq sonlarini umuman o'z ichiga olmaydi. Bundan tashqari, chiziq sonlari oddiy yoki soddalashtirilgan belgilar sifatida hisoblanishiga va qanday radikallar hisobga olinayotganiga qarab farq qilishi mumkin. Asosiy raqamlar aniq belgilangan emasligi sababli, ularga asoslangan ballar ham aniq bo'lmaydi."
          },
          {
            "p": "**Uchinchidan, raqamlar haqiqatdan ko'ra mustahkamroq ko'rinadi.** \"87 ball\" deganda, bu o'lchangan qiymat kabi ko'rinadi, oddiy talqin emas. Ushbu nomlar o'sha raqamdan bosim ostida his qilinishi mumkin, haqiqatan muhim bo'lgan narsalarni chetga surib (Uni chaqirish yoqimli mi? Ma'nosi mos keladimi? Istalgan tilaklarni o'z ichiga oladimi?)."
          },
          {
            "p": "**To'rtinchidan, tasdiqlash usuli yo'q.** Bir nom va inson hayoti o'rtasidagi munosabatni tasdiqlash mumkin emas. To'g'ri yoki noto'g'ri deb aytib bo'lmaydigan narsani ballga aylantirish tasdiqlanmaydigan raqamni keltirib chiqaradi, garchi bu noto'g'ri bo'lmasa ham."
          },
          {
            "p": "Biz faqat **tasdiqlangan** narsalarni ishlatamiz. Oliy sudning rasmiy nom-hanja jadvali, har bir belgi uchun belgilangan o'qishlar va jadvalda keltirilgan ma'nolar. Buning o'rniga, biz ushbu nomzodning nima uchun tanlanganini va nima uchun ayrim belgilar chiqarib tashlanganini ko'rsatamiz, **ballar o'rniga sabablarni** ko'rsatamiz."
          }
        ]
      },
      {
        "title": "Biz chiziq sonlarini ishlatmaymiz",
        "blocks": [
          {
            "p": "Oliy sud tomonidan taqdim etilgan rasmiy nom-hanja ma'lumotlari chiziq sonlarini o'z ichiga olmaydi. Biz olgan {characterTotal} belgilar ichida **birorta belgi ham chiziq sonlariga ega emas.**"
          },
          {
            "p": "Chiziq sonlarini ishlatish uchun, biz boshqa joydan raqamlarni olishimiz kerak bo'ladi, lekin agar biz bu raqamlar qayerdan kelganini va ularni hisoblashda qanday mezonlar ishlatilganini aniqlay olmasak, bu nomlarni asossiz raqamlarga asoslangan holda baholashni anglatadi. Biz tasdiqlanmagan qiymatlar asosida nomlarni baholashni tanlamadik."
          }
        ]
      },
      {
        "title": "Biz faqat besh elementlarni ma'lumot sifatida ishlatamiz",
        "blocks": [
          {
            "figure": "five-elements",
            "labels": {
              "alt": "Besh elementlar doira ichida joylashgan: avlod qo'shnilar o'rtasida o'tadi, nazorat birini o'tkazib yuboradi",
              "wood": "daraxt",
              "fire": "olov",
              "earth": "yer",
              "metal": "metall",
              "water": "suv",
              "saeng": "Avlod — har biri qo'shnisini tug'diradi",
              "geuk": "Nazorat — har biri o'tkazib yuborilganini cheklaydi"
            },
            "caption": "Besh elementlar o'rtasidagi munosabatlar. Doira bo'ylab harakat qilish o'zaro avlodni (相生) anglatadi, birini o'tkazib yuborish va bosim o'tkazish esa o'zaro cheklashni (相剋) anglatadi. Biz bu munosabatni faqat nomzodlarni taqqoslash uchun qo'shimcha o'q sifatida ishlatamiz."
          },
          {
            "p": "Agar siz tug'ilgan oyingizni kiritgan bo'lsangiz, biz o'sha oyga asoslangan besh elementlarning soddalashtirilgan ma'lumotlarini nomzodlarni taqqoslash uchun qo'shimcha o'q sifatida ishlatamiz. Biroq, bu aniq saju tahlili emas va **nomlar insonning taqdirini yoki xarakterini belgilaydi, deb da'vo qilmaymiz.**"
          },
          {
            "p": "Oxirgi tanlovda bizning ustuvorligimiz ovozlar, ma'nolar kombinatsiyalari, oilaning etkazmoqchi bo'lgan qiymatlari va ro'yxatdan o'tkazilishi mumkinligi. Agar siz tug'ilgan oyingizni kiritmagan bo'lsangiz, biz besh elementlar ma'lumotlarini tahlildan to'liq chiqaramiz — biz noma'lum ma'lumotlar haqida tasodifiy taxminlar qilmaymiz."
          },
          {
            "p": "Agar siz aniq saju asosidagi tahlilni xohlasangiz, biz buni alohida batafsil hisobotda qamrab olamiz. Besh elementlarni bepul hanja moslashda ustuvor qilmasligimizning sababi shundaki, tug'ilish sanasi va vaqtiga asoslangan to'liq bo'lmagan besh elementlardan olingan baholarni aniq deb taqdim etishni xohlamaymiz."
          }
        ]
      }
    ]
  },
  "guide/what-we-sell": {
    "eyebrow": "Pullik Mahsulotlar",
    "title": "Pullik mahsulotlarga nimalar kiradi?",
    "summary": "Biz bepul ko'rinadigan narsalarni va har bir mahsulot uchun to'lov bilan keladigan qo'shimcha xususiyatlarni aniqlaymiz. Narxlar haqiqiy mahsulot sozlamalaridan olinadi.",
    "backLabel": "Foydalanish Qo'llanmasi",
    "sections": [
      {
        "title": "Bepul ko'rinadigan nimalar?",
        "blocks": [
          {
            "p": "Nom yaratish va natijalarni ko'rish **bepul**. Hech qanday a'zo ro'yxatdan o'tish talab qilinmaydi. Siz hanja mos keladigan ma'nolarni, koreys nomlarini yaratishni, global nomlarni o'zgartirishni va Hangul talaffuz notatsiyasini ko'rishingiz mumkin, shuningdek, tavsiya etilgan natijalar va ularning asoslarini ekranda ko'rsatamiz."
          },
          {
            "p": "Pullik mahsulotlar **allaqachon ekranda ko'rsatilgan narsalarni qayta sotmaydi.** Ular ko'proq nomzodlarni ochadi, ko'proq tushuntirishlar qo'shadi yoki saqlash yoki uzatish mumkin bo'lgan format yaratadi."
          }
        ]
      },
      {
        "title": "Barcha nomzodlarni to'liq ochish — {priceUnlock}",
        "blocks": [
          {
            "p": "Tavsiya etilgan natijalar nomzodlarni birma-bir ochish uchun tuzilgan. Reklamalarni ko'rishda, biri bir vaqtning o'zida ochiladi, bu mahsulot esa **barcha qolgan nomzodlarni bir marta ochadi**."
          },
          {
            "p": "Agar siz shoshilmayotgan bo'lsangiz, xarid qilishingiz shart emas. **Reklamalar orqali ochilgan natijalar va to'lov orqali olinganlar mutlaqo bir xil** — bu faqat kutish masalasi, va to'lov qilish yaxshiroq nomzodlarni keltirmaydi."
          }
        ]
      },
      {
        "title": "Hanja Tafsilotlari — Uch Bosqich",
        "blocks": [
          {
            "p": "Hangul nomiga qo'shiladigan hanja tanlash jarayonida uchta batafsil mahsulot mavjud."
          },
          {
            "ul": [
              "**Maksimal 5 hanja nomzodlari batafsil** — {priceFiveDetail}. Siz ekranda beshta nomzod uchun tushuntirishlarni kengaytirishingiz mumkin. PDF mavjud emas.",
              "**Maksimal 10 hanja nomzodlari kengaytirilgan batafsil PDF** — {priceTenDetail}. Nomzodlar soni o'n taga oshadi va PDF hujjati qo'shiladi.",
              "**Maksimal 10 hanja nomzodlari saju va besh elementlar bo'yicha keng qamrovli hisobot** — {priceTenSaju}. Yuqoridagilarga qo'shimcha ravishda, bu tug'ilish sanasidan olingan saju jadvalini va besh elementlar kuchlarini o'z ichiga oladi, nima uchun ma'lum bir hanja ushbu nomga mos kelishini besh elementlar nuqtai nazaridan o'rganadi."
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Hanja o'zi jamoatchilikka ochiq ma'lumotdir",
        "blocks": [
          {
            "p": "Foydalanish mumkin bo'lgan hanja va ularning ma'nolari Oliy sud tomonidan belgilangan rasmiy nom-hanja jadvalidan kelib chiqadi va bularning barchasi xizmat ko'rsatish qo'llanmasida jamoatchilikka ochiq. Pullik mahsulotlar hanja ma'lumotlarini emas, balki **nomga muvofiq tanlash va tushuntirish jarayonini** sotadi."
          }
        ]
      },
      {
        "title": "Global Foydalanuvchilar uchun PDF",
        "blocks": [
          {
            "p": "Chet el nomlarini koreys nomlariga aylantirish yoki nomlarni Hangulda yozish uchun mavjud hujjatlar. Narxlar to'lov ekranida ko'rsatilgan miqdorlarga mos keladi."
          },
          {
            "ul": [
              "**Koreys Nomi Premium Hisoboti** — 3 sahifa. Kaligrafiya qopqog'i, nomning ma'nosi va tanlash sababi, saju va besh elementlar tahlili kiritilgan.",
              "**Hangul Nomi San'ati** — 2 sahifa. Kaligrafiya qopqog'i va talaffuz qo'llanmasini o'z ichiga oladi. Bu nomni Hangulda qanday yozish va qanday talaffuz qilishni o'z ichiga oladi."
            ]
          }
        ]
      },
      {
        "title": "Nom Möhri",
        "blocks": [
          {
            "p": "Biz ekranda yaratilgan nomni jismoniy möhri sifatida o'yib, sizga yuboramiz. Narxlar modelga qarab farq qiladi — dumaloq muhr {priceStampRound}, kvadrat muhr {priceStampSquare}, qora muhr {priceStampEbony}. Xalqaro yetkazib berish ham mavjud."
          },
          {
            "p": "**Bu yerda mahsulotlar yetkazib berishni o'z ichiga oladi.** Oldingi narsalardan farqli o'laroq, ishlab chiqarish va yetkazib berish vaqt talab qiladi va qabul qilish manzili talab qilinadi. Yetkazib berish ma'lumotlari faqat buyurtma jarayonini amalga oshirish va qonuniy saqlash uchun ishlatiladi, va jarayon tugagach, siyosatda belgilangan muddatdan so'ng yo'q qilinadi."
          }
        ]
      },
      {
        "title": "Xarid qilishdan oldin bilishingiz kerak bo'lgan narsalar",
        "blocks": [
          {
            "p": "**Raqamli mahsulotlar to'lov amalga oshirilgandan so'ng darhol taqdim etiladi.** Siz yuklab olish boshlanishidan oldin har qanday vaqtda bekor qilishingiz va to'liq qaytarib olishingiz mumkin, lekin yuklab olish tugagach, oddiy fikr o'zgarishi sababli qaytish cheklangan (Elektron tijorat to'g'risidagi qonunning 17-moddasi, 2-band). Ushbu shart to'lov ekranida alohida kelishilgan."
          },
          {
            "p": "**Natijalar mazmuni bo'yicha shikoyatlar qaytarish uchun sabab emas.** Biroq, agar hujjat yaratilmagan bo'lsa, fayl ochilmasa yoki to'lov miqdori buyurtmadan farq qilsa, bu qayta chiqarish yoki to'liq qaytarish sifatida ko'rib chiqiladi."
          },
          {
            "p": "Batafsil shartlar [Qaytarish Siyosati](/refund-policy) va [Narxlar Qo'llanmasi](/pricing) da keltirilgan. Ushbu matn nima kiritilganini ko'rsatadi va qonuniy shartlar ushbu ikkita hujjatda ustuvor hisoblanadi."
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
    "support": "Qo'llab-quvvatlash"
  },
  "intro": "**Foydalanish shartlaringizdagi o'zgarishlar — narxlar, siyosatlar — bu yerda kuchga kirishidan oldin e'lon qilinadi. Ichki yaxshilanishlar ro'yxatga olinmaydi: bu yerda ko'rsatilganlar siz bilishingiz kerak bo'lgan narsalardir.**",
  "empty": {
    "title": "Hali hech qanday e'lon yo'q",
    "body": "Biror narsa o'zgarganda, bu yerda ko'rsatiladi."
  },
  "effective": "{date} dan kuchga kiradi",
  "pager": {
    "label": "E'lon sahifalari",
    "newer": "← Yangiroq",
    "older": "Eskiroq →"
  },
  "items": {
    "2026-08-02-contact": {
      "title": "Aloqa va Haqida sahifalari endi ochiq",
      "body": [
        "Savollar, qaytishlar, maxfiylik so'rovlari va xato xabarlarini bitta joyga yuborishingiz mumkin. Pastki qismdagi aloqa sahifasi bizning elektron pochta manzilimiz va kompaniya ma'lumotlarimizni ko'rsatadi.",
        "Bizning javoblarimiz nimaga asoslanganligi va biz qasddan nima qilmasligimiz haqida ma'lumot haqida sahifasida yozilgan."
      ]
    },
    "2026-08-01-pdf-language": {
      "title": "PDF hisobotlari arab va khmer tillarida ingliz tilida chiqariladi",
      "body": [
        "Agar siz arab yoki khmer tilida xizmatdan foydalansangiz, xarid qilgan PDF ingliz tilida tayyorlanadi. Hujjatlarimizni joylashtiradigan vosita hali o'sha ikki yozuvda paragraflarni belgilay olmaydi.",
        "Ekran sizning tilingizda qoladi va ismingiz hujjat ichida o'z yozuvingizda chop etiladi.",
        "To'lovdan oldin bir xil eslatma ko'rsatiladi. Vosita bu yozuvlarni qo'llab-quvvatlaganda, biz bu yerda aytib o'tamiz."
      ]
    },
    "2026-08-01-payments-preparing": {
      "title": "To'lovlar hali ochiq emas",
      "body": [
        "Ism yaratish va natijani o'qish bugun bepul, va hisob kerak emas.",
        "To'langan mahsulotlar hali sotuvda emas. Narxlar sahifasida ko'rsatilgan miqdorlar sotuvlar ochilganda qo'llaniladi."
      ]
    }
  }
} satisfies NoticeCopy;
