import type { DocPage, NoticeCopy } from "./types";
import type { DocKey } from "./ko";

/** O‘zbekcha — `scripts/translate-doc-content.ts`가 만든다. 손으로 고치지 말 것. */
export const UZ_DOCS = {
  "about": {
    "eyebrow": "Haqida",
    "title": "Naming-Link haqida",
    "summary": "Biz sizga koreyscha ismlarni tanlash va tushunishda yordam beramiz. Biz natijalarimizni qanday asosda shakllantiramiz va nima qilmasligimizni bilib oling.",
    "backLabel": "Bosh sahifa",
    "sections": [
      {
        "title": "Biz nima qilamiz",
        "blocks": [
          {
            "p": "Naming-Link sizga **koreyscha ismlarni tanlash va tushunishda** yordam beradi — bolangizning ismidagi hanja, xorijda foydalanish uchun koreyscha ism, o'z ismingizning Hangul yozuvi va muhr yoki chop etilgan hisobot kabi esdaliklar."
          },
          {
            "p": "Natijalaringizni ko'rish **bepul va hisob qaydnomasi talab qilmaydi.** To'langan narsalar ekranda allaqachon ko'rsatilganlarni qayta sotmaydi: ular ko'proq nomzodlarni ochadi, yozma tahlil qo'shadi yoki natijani saqlab qo'yishingiz mumkin bo'lgan narsaga aylantiradi."
          }
        ]
      },
      {
        "title": "Bizning javoblarimiz nima asosida",
        "blocks": [
          {
            "p": "Hanja **Koreya Oliy Sudi tomonidan belgilangan rasmiy ism-hanja jadvalidan** kelib chiqadi. Har bir belgi ismlar uchun belgilangan o'qilishi bor va jadvaldan tashqaridagi belgilar ro'yxatdan o'tkazilmaydi. Biz o'sha ro'yxatga qo'shmaymiz yoki sevimlilarni tanlamaymiz."
          },
          {
            "p": "Saju va besh element raqamlari **koreyscha lunisolal taqvim**dan hisoblanadi, tug'ilish vaqti tug'ilgan joy uchun haqiqiy quyosh vaqti bilan to'g'irlanadi. O'qish an'anaviy ma'lumotnoma bo'lib, bashorat emas."
          },
          {
            "p": "Yozma tushuntirishlar AI tomonidan ishlab chiqariladi. **Ixtiro qilishdan** saqlanish uchun modelga faqat sizning kirishingiz va bizning ma'lumotlarimiz beriladi va ichida qolish uchun ko'rsatma beriladi. Qo'llanmalar buni batafsil tushuntiradi."
          }
        ]
      },
      {
        "title": "Biz nima qilmaymiz",
        "blocks": [
          {
            "ul": [
              "**Biz bashorat qilmaymiz.** Bu yerda hech narsa omad, boylik yoki himoya va'da qilmaydi.",
              "**Biz sizning ismingizni saqlamaymiz.** Bepul natijalar hech qachon bizning serverlarimizga yozilmaydi va to'langan hujjatlar faylning nusxasini saqlamasdan yetkaziladi.",
              "**To'lash yaxshiroq javobni sotib olmaydi.** Reklama orqali ochish va to'lov orqali ochish bir xil mazmunni beradi."
            ]
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Xizmat 23 tilda mavjud. To'langan PDF hujjatlari arab va khmer tillarida ingliz tilida beriladi — PDF yaratish dasturi o'sha yozuvlarni qo'llab-quvvatlamaydi — va biz to'lovdan oldin ekranda buni aytamiz."
          }
        ]
      },
      {
        "title": "Aloqa",
        "blocks": [
          {
            "p": "Kompaniya ma'lumotlari va biz bilan qanday bog'lanish haqida [aloqa sahifasida](/contact) mavjud, shu jumladan qaytish, maxfiylik so'rovlari va xato xabarlari."
          }
        ]
      }
    ]
  },
  "guide": {
    "eyebrow": "Naming-Link qanday ishlaydi",
    "title": "Biz sizning ismingizni qanday asosda tanlaymiz",
    "summary": "Koreyscha familiyani qanday tanlaymiz, berilgan ismni taklif qilishdan oldin nima tekshiramiz va ismingizni Hangulda qanday yozamiz — biz qasddan qoldirgan qismlar bilan.",
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
                "label": "qamrab olingan Hangul silabalar"
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
      }
    ]
  },
  "guide/reading": {
    "eyebrow": "O'qishlar",
    "title": "Belgi uchun bir o'qish — bitta talaffuz",
    "summary": "Rasmiy jadval faqat belgilar ro'yxatini tuzmaydi. U shuningdek, har bir belgi ismda ishlatilganda qanday o'qilishi kerakligini belgilaydi.",
    "backLabel": "Qo'llanma",
    "sections": [
      {
        "title": "Har bir belgi uchun belgilangan o'qish",
        "blocks": [
          {
            "p": "Ism-hanja jadvali faqat qaysi belgilar ishlatilishi mumkinligini hal qilmaydi. **U shuningdek, har bir belgi ismda paydo bo'lganda qanday o'qilishi kerakligini belgilaydi.** Ushbu belgilangan o'qish ro'yxatdan o'tkazish uchun asos bo'ladi."
          },
          {
            "p": "Ko'p hanja bir nechta mumkin bo'lgan o'qishlarga ega. Biroq, ism hujjatlarda yoziladi va ovoz chiqariladi, shuning uchun u aniq bitta o'qishga ega bo'lishi kerak. Shuning uchun jadval har bir belgiga ismda ishlatilishi uchun o'qishini belgilaydi va boshqa o'qish ro'yxatdan o'tkazilmaydi."
          }
        ]
      },
      {
        "title": "Shuning uchun ovoz birinchi o'rinda",
        "blocks": [
          {
            "p": "Shuning uchun Naming-Link ovozni hanja qidirishdan oldin belgilaydi. Agar ism \"지은\" bo'lsa, ma'no faqat **지** o'qishiga tayinlangan belgilar va **은** o'qishiga tayinlangan belgilar orasidan tanlanishi mumkin."
          },
          {
            "p": "Qanday yaxshi ma'no bo'lmasin, o'qilishi mos kelmaydigan belgi o'sha ism uchun ishlatilmaydi. Biz shuningdek, ismingizning ovozini belgi bilan moslashtirmaymiz — ism bir umr davomida aytiladi va ovoz birinchi o'rinda belgilangan, hanja esa keyin keladi."
          }
        ]
      },
      {
        "title": "Familiyalar bu jadvaldan tashqarida",
        "blocks": [
          {
            "p": "Bu ko'pincha noto'g'ri tushuniladi. **Jadval berilgan ismni boshqaradi, familiyani emas.** Familiya allaqachon oilaviy ro'yxatda mavjud bo'lgan narsaga amal qiladi, shuning uchun ba'zi odamlar ism-hanja jadvalida bo'lmagan belgilarni ishlatishadi."
          },
          {
            "p": "Shuning uchun Naming-Link familiya hanjasini boshqacha muomala qiladi. Biz sizga faqat familiya topishda yordam beramiz va jadvaldan tashqarida bo'lganlar uchun to'g'ridan-to'g'ri kiritish uchun maydon qoldiramiz. Namgung va Seonwoo kabi ikki silabali familiyalar ham xuddi shunday kiritiladi."
          }
        ]
      }
    ]
  },
  "guide/how-hangul-transliteration": {
    "eyebrow": "Qanday ishlaydi",
    "title": "Biz ismingizni Hangulda qanday yozamiz",
    "summary": "Biz xorijiy ismlarni Hangulda yozishda qanday tovushlarni tanlaymiz va nega hanja qo'shmaymiz.",
    "backLabel": "Qo'llanma",
    "sections": [
      {
        "title": "Biz ma'noni emas, tovushni olib boramiz",
        "blocks": [
          {
            "p": "Ushbu xizmat **sizning ismingizni** Hangulda yozadi. U sizga koreyscha ism bermaydi. Michael bo'ladi 마이클 — bir xil ism, koreyslar uni o'qishi va aytishi uchun yozilgan. Biz uni o'xshash ma'noga ega bo'lgan koreyscha ismga almashtirmaymiz."
          },
          {
            "p": "Agar sizga koreyscha ism kerak bo'lsa, **bu boshqa xizmat**. Biri ismingizni saqlaydi va faqat yozuvni o'zgartiradi; ikkinchisi esa yangi ism taklif qiladi."
          }
        ]
      },
      {
        "title": "Koreyscha tovushlar mavjud emas",
        "blocks": [
          {
            "p": "Har bir tilning koreys tilida yo'q tovushlari bor — f, v, z, th va koreys tilida mavjud bo'lmagan unli farqlari. Shuning uchun biz sizning ismingizni baland ovozda o'qiganda **koreys tilida gapiruvchi haqiqatan nima deydi** deb yozamiz, asl fonetikani har bir belgi bilan yozish o'rniga. Maqsad — ishlatiladigan yozuv, eng texnik jihatdan to'g'ri bo'lganidan ko'ra."
          },
          {
            "p": "Bir xil yozuv ismning kelib chiqishiga qarab farq qilishi mumkin, shuning uchun biz sizning tilingiz va mamlakatingizni so'raymiz va o'sha talaffuzdan ish olib boramiz."
          }
        ]
      },
      {
        "title": "Bir nechta yozuvlar, yonma-yon",
        "blocks": [
          {
            "p": "Bitta to'g'ri javob yo'q. Asl tovushga eng yaqin yozuv, Koreyada eng ko'p ishlatiladigan yozuv va eng oson yoziladigan yozuv ko'pincha uch xil narsadir. Shuning uchun biz ularni birga ko'rsatamiz va ularni ajratib turadigan narsalarni aytamiz."
          },
          {
            "p": "Agar ularning hech biri to'g'ri his qilmasa, siz xohlagan tovush haqida bir ko'rsatma qo'shishingiz mumkin va yana bir marta sinab ko'ring — masalan, ma'lum bir silabni boshqacha yozish kerakligini aytish."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bu yerda hanja yo'q",
        "blocks": [
          {
            "p": "Biz transliteratsiyaga hanja qo'shmaymiz. Hanja ma'no olib keladi, va bu jarayon tovush haqida. Faqat tovushga mos keladigan belgilarni tanlash sizni hech qachon so'ramagan ma'noga olib kelishi mumkin."
          }
        ]
      }
    ]
  },
  "guide/how-global-to-korean": {
    "eyebrow": "Qanday ishlaydi",
    "title": "Koreyscha ismni qanday quramiz",
    "summary": "Biz mavjud familiyalardan tanlaymiz, ismingizni aytish va yozish qanchalik osonligini baholaymiz va ismning maqsadini so'raymiz.",
    "backLabel": "Qo'llanma",
    "sections": [
      {
        "title": "Biz familiyadan boshlaymiz",
        "blocks": [
          {
            "p": "Koreyada familiya birinchi o'rinda turadi va berilgan ismlardan farqli o'laroq, u erkin ixtiro qilinmaydi — siz uni meros qilib olasiz. Shuning uchun biz faqat koreyslar haqiqatan mavjud bo'lgan familiyalarni taklif qilamiz. Bizning standart bazamiz **20 ta eng keng tarqalgan familiya**, bu esa aholi sonining taxminan 80% ni qamrab oladi."
          },
          {
            "p": "Agar sizning familiyangiz haqiqiy koreys familiyasiga tovush jihatidan mos kelsa — Wang bilan 왕, Ye bilan 예 — biz uni birinchi o'rinda qo'yamiz. Asl ismingizga bog'lanish saqlash, tasodifiy tanlangan familiyadan ko'ra ko'proq ahamiyatga ega."
          },
          {
            "p": "Siz familiyani o'zingiz tanlashingiz yoki bizdan birini tavsiya qilishimizga ruxsat berishingiz mumkin. Har qanday holatda ham bu **mavjud familiya bo'ladi**."
          }
        ]
      },
      {
        "title": "Aytilishi oson, yozilishi oson",
        "blocks": [
          {
            "p": "Bu Koreyada sizni haqiqatan chaqiradigan ism, shuning uchun biz birinchi navbatda koreyslar uni bir marta eshitib, yozib olishlarini tekshiramiz. Har safar yozib berishni talab qiladigan ism — bu sizning yukingiz, bizning emas."
          },
          {
            "p": "Ma'no ham muhim. Koreys berilgan ismlari odatda bir ma'noga ega, shuning uchun biz sizga ism qanday o'qilishi va nima uchun tanlanganini aytamiz — faqat ismning o'zi emas."
          }
        ]
      },
      {
        "title": "Biz ismning maqsadini so'raymiz",
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
            "p": "Bu yerda biz **yangi koreys ismini** taklif qilamiz. Agar siz mavjud ismingizni Hangulda yozmoqchi bo'lsangiz — Michael ni 마이클 deb yozing — [Hangul yozuv qo'llanmasi](/guide/how-hangul-transliteration) ga qarang."
          }
        ]
      }
    ]
  },
  "notice": {
    "eyebrow": "E'lonlar",
    "title": "E'lonlar",
    "summary": "Biz xizmatdan foydalanishingizga ta'sir qiladigan o'zgarishlarni e'lon qilamiz.",
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
            "p": "**{email}** ga yozing. Biz ikki ish kuni ichida javob beramiz. Buyurtma bilan bog'liq har qanday narsalar — to'lov, qaytarish, olmagan fayl — iltimos, **buyurtma raqamingiz yoki to'lagan elektron pochtangizni** qo'shing."
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
              "**To'lovlar va qaytarish** — agar hujjat hech qachon tayyorlanmagan bo'lsa yoki to'langan summa sizning buyurtmangizdan farq qilsa, biz to'liq qaytaramiz. [Qaytarish siyosati](/refund-policy) ga qarang.",
              "**Maxfiylik** — ma'lumotlaringizga kirish, to'g'rilash yoki o'chirish so'rovlari. [Maxfiylik siyosati](/privacy) ga qarang.",
              "**To'g'rilashlar** — agar hanja ma'nosi, o'qilishi yoki hisoblash noto'g'ri ko'rinsa, bizga ayting. Qaysi ekran va nima kiritganingizni aytish juda yordam beradi.",
              "**Boshqa narsalar** — hamkorlik va matbuot uchun ham xuddi shu manzilga boring."
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
            "p": "Siz xabaringizda ism yoki tug'ilgan sana kiritishingiz shart emas. Bepul natijalar hech qachon serverlarimizda saqlanmaydi, shuning uchun biz ularni qayta qidirib topa olmaymiz — buyurtma raqami yetarli."
          }
        ]
      }
    ]
  },
  "guide/avoid": {
    "eyebrow": "An'analar",
    "title": "An'anaviy Ravishda Qochish Kerak Bo'lgan Belgilar",
    "summary": "Bu qonun bilan taqiqlanmagan, lekin an'ana hisoblanadi. Biz qochilgan belgilar va nima uchun qochilganligi, shuningdek, buni qanday hal qilayotganimiz haqida yozganmiz.",
    "backLabel": "Foydalanish Qo'llanmasi",
    "sections": [
      {
        "title": "Qonuniy Qabul Qilingan Belgilar",
        "blocks": [
          {
            "stats": [
              {
                "value": "{avoidTotal} belgi",
                "label": "Qochilgan Belgilar Ro'yxati"
              },
              {
                "value": "{avoidCommonlyUsed} belgi",
                "label": "Ular orasida, hali ham keng qo'llaniladigan belgilar"
              }
            ]
          },
          {
            "p": "Shaxsiy nomlar ro'yxatiga kiritilgan, **qonuniy qabul qilingan** belgilar mavjud, lekin ular nomlar uchun mos kelmaydi."
          },
          {
            "p": "Asosiy fikr shundaki, **\"ortiqcha ma'no aslida nojo'ya hisoblanadi.\"** Bu, ism shaxsni o'zidan o'zib ketishi mumkin deb hisoblaydigan qadimiy cheklov hissini aks ettiradi."
          },
          {
            "ul": [
              "珍·寶 — juda qimmatbaho deb hisoblangan belgilar",
              "王·帝 — juda kuchli deb hisoblangan belgilar",
              "osmon va xudolar — inson uchun juda ulug'vor"
            ]
          },
          {
            "p": "**Biroq, bu belgilar ishlatilmaydigan emas.** Bu qonuniy taqiqlash emas, balki an'ana, va an'analar mintaqa, oila va avlodga qarab farq qiladi va vaqt o'tishi bilan o'zgarishi mumkin."
          },
          {
            "p": "Aslida, biz to'plagan {avoidTotal} belgilar orasida, {avoidCommonlyUsed} hali ham nomlarda keng qo'llaniladi. Ular qochilgan deb bilinsa ham, keng qo'llanilishi bu an'ananing mutlaq emasligini ko'rsatadi."
          }
        ]
      },
      {
        "title": "Qanday Kategoriyalar Mavjud?",
        "blocks": [
          {
            "p": "Hozirda to'plangan belgilar yetti kategoriya bo'yicha bo'lingan."
          },
          {
            "ul": [
              "**Xazinalar va Buyumlar** — to'g'ridan-to'g'ri boylik yoki buyumlarga ishora qiluvchi belgilar",
              "**Osmon va Tabiyat** — quyosh, oy va osmon kabi inson uchun juda ulug'vor deb hisoblangan narsalar",
              "**Shohlar va Nobillar** — shoh yoki imperator kabi maqomni anglatadigan belgilar",
              "**Qudratli Mavjudotlar** — xudolar yoki ruhlar kabi muqaddas olamlarni anglatadigan belgilar",
              "**Fasl va Boshqalar** — ma'lum vaqtlar yoki holatlarga bog'liq belgilar",
              "**Hayvonlar** — kuchli energiyaga ega deb hisoblangan hayvonlar, masalan, ajdaho yoki yo'lbars",
              "**Ortga Qaytish** — ortiqcha katta yoki to'lib-toshgan ma'noga ega deb hisoblangan belgilar"
            ]
          }
        ]
      },
      {
        "title": "Siz Belgilarni O'zingiz Qo'shishingiz yoki O'chirishingiz Mumkin",
        "blocks": [
          {
            "p": "Biz bu belgilarni tasodifan o'chirmaymiz. **Biz nom beruvchi uchun ularni qanday hal qilishni tanlash uchun kiritish ekranida ikkita variant taqdim etdik.**"
          }
        ]
      },
      {
        "kind": "note",
        "title": "Kiritish Ekranida Mavjud Variantlar",
        "blocks": [
          {
            "p": "**Qochilgan Belgilarni Nomzodlardan O'chirish** — Agar yoqilgan bo'lsa, ular to'liq o'chiriladi. Agar o'chirilmagan bo'lsa, ular natijalarda \"An'anaviy Ravishda Qochilgan\" yorlig'i bilan va sabab bilan qoladi."
          },
          {
            "p": "**Hatto Keng Qo'llaniladigan Belgilarni O'chirish** — Bu qochish ro'yxatida bo'lgan, lekin aslida keng qo'llaniladigan belgilarni o'chiradi (圭·琳·玲·元·太·星·海 va boshqalar). Agar yoqilgan bo'lsa, nomzodlar sezilarli darajada kamayadi."
          },
          {
            "p": "Standart **o'chirmaslik, balki faqat ko'rsatish** hisoblanadi. Agar ular ro'yxatdan tinch olib tashlansa, bu belgini ishlatmoqchi bo'lganlarga u mavjud emasdek ko'rinishi mumkin."
          }
        ]
      },
      {
        "title": "Variantlarning Yo'qolmasligini Ta'minlash",
        "blocks": [
          {
            "p": "Agar o'sha sillab uchun foydalaniladigan belgilar qolmasa, biz o'sha sillab uchun cheklovni olib tashlaymiz va nomzodlarni ko'rsatamiz. Biz buni umuman hech qanday variant bo'lmasligidan yaxshiroq deb hisoblaymiz."
          }
        ]
      }
    ]
  },
  "guide/how-korean-to-global": {
    "eyebrow": "Xizmat Asosi",
    "title": "Global Ism O'zgartirishining Asosi Nima?",
    "summary": "Biz har bir tilning yozuv tizimlarini saqlab, faqat mavjud nomlardan foydalanib, besh nuqtai nazardan nomzodlar taqdim etamiz.",
    "backLabel": "Foydalanish Qo'llanmasi",
    "sections": [
      {
        "title": "Nomzodlar Besh Nuqtai Nazardan Taqdim Etiladi",
        "blocks": [
          {
            "p": "Bir ismni boshqa tilga tarjima qilishning bitta yo'li yo'q. Ovozni yoki ma'noni saqlashga qarab, mahalliy kontekstdagi tabiiy ismni tanlash yoki shaxsiylikni ustun qo'yish, javoblar farq qiladi. Shuning uchun, bitta variantni taqdim etish o'rniga, biz **besh turli nuqtai nazardan bitta variant taqdim etamiz.**"
          },
          {
            "ul": [
              "**Ovoz Saqlash Variant** — asl ismning ovozini iloji boricha saqlaydi",
              "**Ma'no Tarjima Variant** — ismda mavjud bo'lgan ma'noni o'sha tilga tarjima qiladi",
              "**Ovoz va Ma'no Kompromis Variant** — har biridan yarmini oladi",
              "**Mahalliy Asl Variant** — o'sha madaniy kontekstdagi haqiqatan ham keng qo'llaniladigan nomlarni tanlaydi",
              "**Shaxsiylik va Brending Variant** — esda qolarli va o'ziga xos nomlarni ustun qo'yadi"
            ]
          },
          {
            "p": "Besh variant taqdim etilishi kafolatlanadi. Har bir insonning afzalliklari farq qiladi, shuning uchun bitta to'g'ri javobni taqdim etishdan ko'ra, tanlovlarga ruxsat berish yaxshiroq deb hisoblaymiz."
          }
        ]
      },
      {
        "title": "Har Bir Tilning Yozuv Tizimi Qoidalari Farq Qiladi",
        "blocks": [
          {
            "p": "Agar roman harflarini ishlatmaydigan tilga tarjima qilinsa, u o'sha tilning yozuv tizimida yozilishi kerak. Yapon tilida bu kana va kanji bo'ladi; rus, mo'g'ul va qozog' tilida bu kirill bo'ladi; arab tilida bu arab yozuvi bo'ladi; va tay, kmer va hind tillarida bu o'z yozuvlari bo'ladi. Agar siz uni roman harflarida yozsangiz va \"yapon ismi\" deb atasangiz, bu mamlakatda ishlatilmaydi."
          },
          {
            "p": "Shuning uchun, har bir tilning yozuv tizimi uchun alohida qoidalarimiz bor va server natijalarni o'sha yozuv tizimida ekanligini yana bir bor tekshiradi. Familiyalarning o'chirilishi yoki Hangulni aralashtirish kabi xatolar bu yerda filtrlashdan o'tadi."
          }
        ]
      },
      {
        "title": "Biz Haqiqatan Ham Ishlatiladigan Ismlarni Ishlatamiz",
        "blocks": [
          {
            "p": "Nomlar o'sha mamlakatda mavjud bo'lmagan, lekin ishonarli ko'rinadigan nomlarni yaratmaslik uchun, biz variantlarimizni mavjud nomlarga asoslaymiz. Nomlar hujjatlar va tanishtirishlarda ishlatiladi, shuning uchun agar mahalliy odam \"bunday nom yo'q\" deb o'ylasa, bu nom ishlatilmaydi."
          }
        ]
      },
      {
        "title": "Biz Tanlov va Tavsifni Ajratamiz",
        "blocks": [
          {
            "p": "Biz beshta nomzodni aniqlash vazifasini har bir nomzodni batafsil tavsiflash vazifasidan alohida bajaramiz. Tavsif ko'p vaqt talab qilgani uchun, biz bu qismni alohida ajratamiz va bir vaqtning o'zida yaratamiz."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Nima uchun bu o'zgartirildi?",
        "blocks": [
          {
            "p": "Dastlab, biz beshta nuqtai nazarni alohida yaratdik. Bu tezroq edi, lekin **nomzodlar soni har safar o'zgarardi.** Har bir kishi nomzodlarni tanlaganida, takrorlanishlar yoki farqlar bo'lib, agar biri muvaffaqiyatsiz bo'lsa, o'sha nomzod butunlay yo'qolardi, natijada beshta o'rniga faqat ikki yoki uchta qolardi."
          },
          {
            "p": "Endi, biz nomzodlar to'plamini va nuqtai nazar taqsimotini bir vaqtning o'zida aniqlaganimiz sababli, **soni o'zgaruvchan emas.** Agar bir tavsif muvaffaqiyatsiz bo'lsa, nomzodlar qoladi va qisqa ma'lumot bilan taqdim etiladi. Biz bir xil sonni doimiy ravishda saqlash yaxshiroq deb hisoblaymiz, hatto bu biroz ko'proq vaqt talab qilsa ham."
          }
        ]
      }
    ]
  },
  "guide/how-hanja-meaning": {
    "eyebrow": "Xizmat Asosi",
    "title": "Hanja ma'nolarini moslashtirishning asosi nima?",
    "summary": "Birinchidan, tovushlar belgilangan va faqat o'sha tovush bilan ro'yxatdan o'tishi mumkin bo'lgan hanja to'plangan, va ma'no bitta belgi sifatida emas, balki kombinatsiya sifatida ko'rib chiqiladi.",
    "backLabel": "Foydalanish Qo'llanmasi",
    "sections": [
      {
        "title": "Birinchidan, tovushlarni belgilang",
        "blocks": [
          {
            "p": "Agar siz \"지은\" deb belgilagan bo'lsangiz, unda **지** va **은** o'zgarmaydi. Biz nomning tovushini hanja bilan moslashtirish uchun o'zgartirmaymiz. Nom - bu umr bo'yi chaqiriladigan narsa, va bizning fikrimizcha, tartib shundaki, avval tovush belgilanadi, keyin esa hanja."
          },
          {
            "figure": "hanja-match-flow",
            "labels": {
              "soundStep": "① Tovushni belgilang",
              "soundNote": "Biz uni belgi bilan moslashtirish uchun hech qachon o'zgartirmaymiz",
              "tableStep": "② Rasmiy jadval bo'yicha filtrlash",
              "tableBody": "faqat o'sha o'qish bilan belgilangan belgilar",
              "tableNote": "jadvaldagi barcha {total} belgilar ichidan",
              "tableNoteNoCount": "faqat jadvalda mavjud bo'lgan belgilar",
              "combineStep": "③ Ikki belgini birga o'qish",
              "combineNote": "ma'no juftlik qanday o'qilsa, shunday ko'riladi, har bir belgi alohida emas"
            },
            "caption": "Nomzodlar qanchalik toraytirilishi tartibi. Bu avval hanja tanlash va tovushlarni moslashtirish emas, balki tovushlar avval kelishi va faqat o'sha tovush bilan o'qilishi belgilangan belgilar nomzodlar bo'lishidir."
          }
        ]
      },
      {
        "title": "Faqat o'sha tovush bilan ro'yxatdan o'tishi mumkin bo'lgan hanja to'plang",
        "blocks": [
          {
            "p": "Rasmiy nom-hanja jadvalida har bir belgi uchun nomlarda ishlatilganda belgilangan o'qish mavjud. Faqat **지** va **은** sifatida o'qilishi belgilangan belgilar nomzodlar bo'ladi. Ma'no qanchalik yaxshi bo'lmasin, agar o'qish mos kelmasa, bu hanja o'sha nom uchun bo'lmaydi."
          },
          {
            "p": "Nomzodlarni tanlash doirasi Oliy Sud jadvalidan {characterTotal} belgilarni o'z ichiga oladi. Ushbu jadvalda mavjud bo'lmagan belgilar umuman taqdim etilmaydi — hatto ko'rsatilsa ham, ular ro'yxatdan o'tkazilmaydi."
          },
          {
            "p": "Oliy Sud tomonidan e'lon qilingan jadvaldagi belgilar soni biroz ko'p. Jadvalda shuningdek, **standart belgi kodlari bo'lmagan belgilar** ham mavjud bo'lib, ular ekranlarda va hujjatlarda to'g'ri ko'rsatilmaydi, shuning uchun bu belgilar nomzodlardan chiqarib tashlangan. Ushbu belgilar bilan ro'yxatdan o'tishingiz mumkinligini aniqlash uchun tegishli organ bilan tekshirishingiz kerak."
          }
        ]
      },
      {
        "title": "Ma'no bitta belgi sifatida emas, balki kombinatsiya sifatida ko'riladi",
        "blocks": [
          {
            "p": "Har bir alohida belgi ma'nosi yaxshi bo'lishi va ikki belgi birlashganda o'qiladigan ma'no yaxshi bo'lishi farq qiladi. Nomlar kombinatsiyalar sifatida o'qiladi, shuning uchun biz kombinatsiyalarni birga ko'rib chiqamiz. Agar siz kiritmoqchi yoki qochmoqchi bo'lgan aniq ma'nolar bo'lsa, ular hisobga olinadi."
          },
          {
            "p": "Agar siz avlod belgisidan foydalanayotgan bo'lsangiz, o'sha belgi belgilangan bo'ladi va qolgan pozitsiyalardan kombinatsiyalar qidiriladi. Familiya (성) rasmiy nom-hanja jadvali tomonidan cheklangan emas, shuning uchun u alohida ko'rib chiqiladi."
          }
        ]
      },
      {
        "title": "Biz qochish an'analarini olib tashlamasdan ko'rsatamiz",
        "blocks": [
          {
            "p": "Agar nomzodlar ichida an'anaviy ravishda qochish kerak deb hisoblangan belgi bo'lsa, biz uni olib tashlamaymiz, balki sababi bilan birga ko'rsatamiz. Bu an'ana masalasi, qonun emas, va siz uni butunlay kiritish ekranidan chiqarib tashlashni tanlashingiz mumkin. Batafsil ma'lumot uchun [An'anaviy Qochish Hanja](/guide/avoid) ga qarang."
          }
        ]
      },
      {
        "title": "Biz sizga chiqarib tashlash sabablari haqida ham ma'lumot beramiz",
        "blocks": [
          {
            "p": "Biz ba'zi belgilarni nomzodlardan chiqarib tashlash sabablari haqida ma'lumot beramiz. Agar biz faqat tanlanganlarni ko'rsatsak, siz \"nima uchun bu tanlandi?\" deb bilolmaysiz. Agar o'sha sillab uchun foydalanish mumkin bo'lgan belgilar qolmasa, biz o'sha sillab uchun chiqarib tashlashni bekor qilamiz va nomzodlarni ko'rsatamiz."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Natijalarni qanday o'qish kerak",
        "blocks": [
          {
            "p": "Nomzodlar **nuqtai nazar, reyting emas**. Birinchisi eng yaxshi nom degani emas; ular turli nuqtai nazarlardan tanlangan. Ma'nolar kombinatsiyasini birinchi o'ringa qo'yadiganlar, kamdan-kam uchraydigan belgilarni tanlaydiganlar va neytrallikni ta'kidlaydiganlar yonma-yon taqdim etiladi. Javob qaysi nuqtai nazarni qadrlashingizga qarab farq qiladi."
          }
        ]
      }
    ]
  },
  "guide/what-we-dont-use": {
    "eyebrow": "Bizning Standartlarimiz",
    "title": "Nimani Ishlatmaymiz",
    "summary": "Biz umumiy baxt yoki raqamli ballarni belgilamaymiz, shuningdek, chiziq hisoblarini ishlatmaymiz. Besh element faqat qo'shimcha o'q sifatida ishlatiladi. Mana sabablari.",
    "backLabel": "Foydalanish Qo'llanmasi",
    "sections": [
      {
        "title": "Umumiy baxt yoki raqamli ballarni belgilamaslik sabablari",
        "blocks": [
          {
            "p": "Ba'zi nomlarga baho berish uchun umumiy baxt yoki raqamli ballarni belgilaydigan usullar mavjud. Naming-Link bu raqamlarni taqdim etmaydi. Sabablari to'rt xil."
          },
          {
            "p": "**Birinchidan, bitta standart yo'q.** Baxtni hisoblash usullari maktabga qarab farq qiladi va bir xil nom bir standart bo'yicha ijobiy, boshqasida esa salbiy baholanishi mumkin. Qaysi biri to'g'ri ekanligini aniqlash uchun bizda asos yo'q. Birini javob sifatida taqdim etish halol emas."
          },
          {
            "p": "**Ikkinchidan, bu hisob-kitoblar chiziq hisoblariga tayanadi.** Biroq, Oliy Sud ma'lumotlari chiziq hisoblarini umuman o'z ichiga olmaydi. Bundan tashqari, chiziq hisoblari oddiy yoki soddalashtirilgan belgilar sifatida hisoblanganiga va qanday radikallar hisoblanganiga qarab farq qilishi mumkin. Asosiy raqamlar aniq belgilangan emasligi sababli, ularga asoslangan ballar ham aniq bo'lmaydi."
          },
          {
            "p": "**Uchinchidan, raqamlar haqiqatdan ko'ra mustahkamroq ko'rinadi.** \"87 ball\" deganda, bu o'lchangan qiymat sifatida qabul qilinadi, oddiy talqin emas. Ushbu nomlar o'sha raqamdan bosim ostida his qilishlari mumkin, haqiqatan ham muhim bo'lgan narsalarni chetga surib (Chaqirish qanchalik yoqimli? Ma'no mos keladimi? Istalgan tilaklarni o'z ichiga oladimi?)."
          },
          {
            "p": "**To'rtinchidan, tasdiqlash usuli yo'q.** Nom va inson hayoti o'rtasidagi munosabatni tasdiqlash mumkin emas. To'g'ri yoki noto'g'ri deb aytib bo'lmaydigan narsani ballga aylantirish tasdiqlanmaydigan raqamni keltirib chiqaradi, garchi bu noto'g'ri bo'lmasa ham."
          },
          {
            "p": "Biz faqat **tasdiqlangan** narsalarni ishlatamiz. Oliy Sud rasmiy nom-hanja jadvali, har bir belgi uchun belgilangan o'qishlar va jadvalda keltirilgan ma'nolar. Aksincha, biz ushbu nomzodning tanlanish sabablari va ba'zi belgilarni chiqarib tashlash sabablari haqida ma'lumot beramiz, **ballar o'rniga sabablarga** ko'rsatamiz."
          }
        ]
      },
      {
        "title": "Biz chiziq hisoblarini ishlatmaymiz",
        "blocks": [
          {
            "p": "Oliy Sud tomonidan taqdim etilgan rasmiy nom-hanja ma'lumotlari chiziq hisoblarini o'z ichiga olmaydi. Biz olgan {characterTotal} belgilar ichida **birorta belgi ham chiziq hisoblariga ega emas.**"
          },
          {
            "p": "Chiziq hisoblarini ishlatish uchun, biz boshqa joydan raqamlarni olishimiz kerak bo'ladi, lekin agar biz bu raqamlarning qayerdan kelganini va qanday mezonlar asosida hisoblanganini aniqlay olmasak, bu nomlarni asossiz raqamlarga asoslangan holda baholashni anglatadi. Biz tasdiqlanmagan qiymatlarga asoslangan nomlarni baholashdan voz kechishga qaror qildik."
          }
        ]
      },
      {
        "title": "Biz besh elementni faqat ma'lumot sifatida ishlatamiz",
        "blocks": [
          {
            "figure": "five-elements",
            "labels": {
              "alt": "Besh element doira ichida joylashgan: avlod qo'shnilar o'rtasida o'tadi, nazorat birni o'tkazib yuboradi",
              "wood": "daraxt",
              "fire": "olov",
              "earth": "yer",
              "metal": "metall",
              "water": "suv",
              "saeng": "Avlod — har biri o'z qo'shnisini tug'diradi",
              "geuk": "Boshqarish — har biri o'ziga o'tkazilmaganini cheklaydi"
            },
            "caption": "Besh element o'rtasidagi munosabatlar. Doira bo'ylab harakat qilish o'zaro avlod berishni (相生) ifodalaydi, birini o'tkazib yuborish va bosish esa o'zaro cheklashni (相剋) ifodalaydi. Biz bu munosabatni faqat nomzodlarni taqqoslash uchun qo'shimcha o'q sifatida ishlatamiz."
          },
          {
            "p": "Agar siz tug'ilgan oyingizni kiritgan bo'lsangiz, biz o'sha oyga asoslangan besh elementlarning soddalashtirilgan ma'lumotlarini nomzodlarni taqqoslash uchun qo'shimcha o'q sifatida ishlatamiz. Biroq, bu aniq saju tahlili emas va **biz nomlar insonning taqdirini yoki xarakterini belgilaydi deb da'vo qilmaymiz.**"
          },
          {
            "p": "Oxirgi tanlovda bizning ustuvorligimiz ovozlar, ma'nolar kombinatsiyalari, oilaning ifodalamoqchi bo'lgan qiymatlari va ro'yxatdan o'tkazilishi mumkinligi. Agar siz tug'ilgan oyingizni kiritmagan bo'lsangiz, biz besh elementlar ma'lumotlarini tahlildan to'liq chiqaramiz — biz noma'lum ma'lumotlar haqida tasodifiy taxminlar qilmaymiz."
          },
          {
            "p": "Agar siz aniq saju asosidagi tahlilni xohlasangiz, biz buni alohida batafsil hisobotda qamrab olamiz. Besh elementlarni bepul hanja moslashida ustuvor qilmasligimizning sababi, tug'ilgan sana va vaqtga asoslangan besh elementlardan kelib chiqqan hukmlarni aniq deb ko'rsatishni xohlamaymiz."
          }
        ]
      }
    ]
  },
  "guide/what-we-sell": {
    "eyebrow": "To'lovli Mahsulotlar",
    "title": "To'lovli mahsulotlarga nimalar kiradi?",
    "summary": "Biz bepul ko'rinadigan narsalarni va har bir mahsulot uchun to'lov bilan keladigan qo'shimcha funksiyalarni aniqlaymiz. Narxlar haqiqiy mahsulot sozlamalaridan olinadi.",
    "backLabel": "Foydalanish Qo'llanmasi",
    "sections": [
      {
        "title": "Bepul ko'rinadigan nimalar?",
        "blocks": [
          {
            "p": "Nom yaratish va natijalarni ko'rish **bepul**. A'zolik ro'yxatdan o'tkazish talab qilinmaydi. Siz hanja moslashuvlarini, koreys nomlarini yaratishni, global nomlarni o'zgartirishni va Hangul talaffuz belgilashini ko'rishingiz mumkin, shuningdek, tavsiya etilgan natijalar va ularning asoslari ekranda ko'rsatiladi."
          },
          {
            "p": "To'lovli mahsulotlar **allaqachon ekranda ko'rsatilgan narsalarni qayta sotmaydi.** Ular ko'proq nomzodlarni ochadi, ko'proq tushuntirishlar qo'shadi yoki saqlash yoki uzatish mumkin bo'lgan format yaratadi."
          }
        ]
      },
      {
        "title": "Barcha nomzodlarni to'liq oshkor qilish — {priceUnlock}",
        "blocks": [
          {
            "p": "Tavsiya etilgan natijalar nomzodlarni birma-bir ochish uchun tuzilgan. Reklama ko'rishda, bitta ochiladi, bu mahsulot esa **barcha qolgan nomzodlarni bir marta ochadi**."
          },
          {
            "p": "Agar siz shoshilmasangiz, xarid qilishingiz shart emas. **Reklama orqali ochish natijalari va to'lovdan keladigan natijalar mutlaqo bir xil** — bu faqat kutish masalasi, va to'lov qilish yaxshiroq nomzodlarni keltirmaydi."
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
              "**Maksimal 5 hanja nomzodlari batafsil** — {priceFiveDetail}. Siz ekranda besh nomzod uchun tushuntirishlarni kengaytirishingiz mumkin. PDF mavjud emas.",
              "**Maksimal 10 hanja nomzodlari kengaytirilgan batafsil PDF** — {priceTenDetail}. Nomzodlar soni o'n taga oshadi va PDF hujjati qo'shiladi.",
              "**Maksimal 10 hanja nomzodlari saju va besh elementlar bo'yicha keng qamrovli hisobot** — {priceTenSaju}. Yuqoridagilarga qo'shimcha ravishda, bu tug'ilgan sana asosida olingan saju diagrammasini va besh elementlarning kuchlarini o'z ichiga oladi, nega ma'lum bir hanja o'sha nomga mos kelishini besh elementlar nuqtai nazaridan o'rganadi."
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Hanja o'zi jamoatchilikka ochiq ma'lumotdir",
        "blocks": [
          {
            "p": "Foydalanish mumkin bo'lgan hanja va ularning ma'nolari Koreya Oliy Sudining rasmiy nom-hanja jadvalidan olingan va barchasi xizmat ko'rsatish hujjatlarida jamoatchilikka ochiq. To'lovli mahsulotlar hanja ma'lumotlarini emas, balki **uni nomga muvofiq tanlash va tushuntirish jarayonini** sotadi."
          }
        ]
      },
      {
        "title": "Global Foydalanuvchilar uchun PDFlar",
        "blocks": [
          {
            "p": "Tashqi nomlarni koreys nomlariga aylantirish yoki nomlarni Hangulda yozish uchun mavjud hujjatlar. Narxlar to'lov ekranida ko'rsatilgan miqdorlarga mos keladi."
          },
          {
            "ul": [
              "**Koreys Nomi Premium Hisoboti** — 3 sahifa. Kaligrafiya qopqog'ini, nomning ma'nosi va tanlash sababi, shuningdek, saju va besh elementlar talqinini o'z ichiga oladi.",
              "**Hangul Nomi San'ati** — 2 sahifa. Kaligrafiya qopqog'i va talaffuz qo'llanmasini o'z ichiga oladi. Bu nomni Hangulda qanday yozishni va qanday talaffuz qilishni o'z ichiga oladi."
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
            "p": "**Bu yerda mahsulotlar yetkazib berishni o'z ichiga oladi.** Oldingi mahsulotlardan farqli o'laroq, ishlab chiqarish va yetkazib berish vaqt talab etadi va qabul qilish manzili talab qilinadi. Yetkazib berish ma'lumotlari faqat buyurtma jarayonida ishlatiladi va huquqiy saqlash uchun, jarayon tugagach, siyosatda belgilangan muddatdan so'ng yo'q qilinadi."
          }
        ]
      },
      {
        "title": "Xarid qilishdan oldin bilishingiz kerak bo'lgan narsalar",
        "blocks": [
          {
            "p": "**Raqamli mahsulotlar to'lov amalga oshirilganda darhol taqdim etiladi.** Siz yuklab olish boshlanishidan oldin har qanday vaqtda bekor qilishingiz va to'liq qaytarib olishingiz mumkin, lekin yuklab olish tugagach, oddiy fikr o'zgarishi sababli qaytish cheklangan (Elektron Savdo Qonunining 17-moddasi, 2-band). Ushbu shart to'lov ekranida alohida kelishilgan."
          },
          {
            "p": "**Natijalar mazmuni bo'yicha shikoyatlar qaytarish uchun sabab emas.** Biroq, agar hujjat yaratilmagan bo'lsa, fayl ochilmasa yoki to'lov miqdori buyurtmadan farq qilsa, bu qayta chiqarish yoki to'liq qaytarish sifatida ko'rib chiqiladi."
          },
          {
            "p": "Batafsil shartlar [Qaytarish Siyosati](/refund-policy) va [Narxlar Qo'llanmasi](/pricing) da bayon etilgan. Ushbu matn nimalar kiritilganini ko'rsatadi va huquqiy shartlar ushbu ikki hujjatda ustuvor hisoblanadi."
          }
        ]
      }
    ]
  },
  "guide/hanja-basics": {
    "eyebrow": "Tizim",
    "title": "Rasmiy nom-hanja nima?",
    "summary": "Bolalar nomlari uchun foydalanish mumkin bo'lgan hanja Koreya Oliy Sudida jadvalda belgilangan. Bu jadval nima va nima uchun belgilanganini qisqacha bayon etadi.",
    "backLabel": "Foydalanish Qo'llanmasi",
    "sections": [
      {
        "title": "Rasmiy nom-hanja nima?",
        "blocks": [
          {
            "stats": [
              {
                "value": "{characterTotal} belgi",
                "label": "Rasmiy nom-hanja"
              },
              {
                "value": "{syllableCount} silab",
                "label": "Hangul silabalarini o'z ichiga oladi"
              },
              {
                "value": "{effectiveDate}",
                "label": "Jadvalga murojaat sanasi"
              }
            ]
          },
          {
            "p": "Bolalar ismi uchun har qanday belgi ishlatilmaydi. **Tug'ilish ro'yxatiga kiritish uchun ishlatilishi mumkin bo'lgan hanja Oliy sud tomonidan jadvalda belgilangan va faqat shu jadvaldagi belgilar ismlar uchun hanja sifatida ro'yxatga olinishi mumkin.** Bu rasmiy nom-hanja deb ataladi."
          }
        ]
      },
      {
        "title": "Nima uchun bu belgilangan?",
        "blocks": [
          {
            "p": "Hanja minglab. Ularning ba'zilari noxush ma'nolarga ega, ba'zilari endi ishlatilmaydi va o'qilishi ma'lum emas, ba'zilari esa kompyuterlarda umuman ko'rsatilmaydi. Agar bunday belgilar ismga kiritilsa, oxir-oqibat bu ismni umr bo'yi ishlatadigan shaxsga yuklanadi. Ismlar turli joylarda, masalan, yashash ro'yxati, pasportlar, banklar va maktablarda buzilishi yoki boshqacha o'qilishi mumkin, bu esa shaxsni o'z ismini tushuntirishga majbur qiladi."
          },
          {
            "p": "Shuning uchun, ismlarda ishlatilishi mumkin bo'lgan hanja doirasini oldindan belgilash usuli tanlangan. Bu cheklovchi qoidalar emas, balki ismlarning shaxsning hayoti davomida muammosiz ishlatilishini ta'minlash mexanizmi."
          }
        ]
      },
      {
        "title": "Ta'riflar qaysi asosda belgilangan?",
        "blocks": [
          {
            "p": "Oliy sud rasmiy nom-hanja jadvalini belgilaydi, zaruratga qarab yangilanadi va belgilar qo'shiladi."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ushbu ekran uchun ishlatiladigan materiallar",
        "blocks": [
          {
            "p": "{publisher} rasmiy nom-hanja ma'lumotlari · {effectiveDate} holatiga ko'ra"
          },
          {
            "p": "{characterTotal} belgi {syllableCount} Hangul bo'laklarini qamrab oladi. Asl faylning hash qiymati ham saqlanadi, shuning uchun jadval o'zgarganda, qachon va nima o'zgarganini tekshirish mumkin."
          }
        ]
      },
      {
        "title": "Oliy sud tomonidan e'lon qilingan belgilar soni biz ko'rsatganlardan farq qiladi",
        "blocks": [
          {
            "p": "**Oliy sud tomonidan e'lon qilingan rasmiy nom-hanja {announcedTotal} belgidan iborat, biz taqdim etayotgan nomzodlar esa {characterTotal} belgidan iborat.** Bu farqni yashirishning hech qanday sababi yo'q, shuning uchun biz uni ochiq aytamiz."
          },
          {
            "p": "Agar siz Oliy sudning so'rov ma'lumotlarini tekshirsangiz, unda {listedTotal} belgi mavjud. Ularning ichida, **{excludedNoStandardCode} belgi** — **global umumiy belgi kodida (Unicode) joyi bo'lmagan belgilar.** Oliy sud tizimi bunday belgilarni faqat o'z tizimida ishlaydigan raqamlar bilan ko'radi va ular ekranda **rasmlar** sifatida ko'rsatiladi."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Qo'shimcha shriftlar muammoni hal qilmaydi",
        "blocks": [
          {
            "p": "Bir belgi ekranda ko'rinishi uchun, u **dunyo tomonidan kelishilgan raqamga** ega bo'lishi kerak va shrift o'sha raqamga mos keladigan rasmni o'z ichiga oladi. Raqami bo'lmagan belgilar hech qanday shriftga kiritilmaydi. Qancha shrift qo'shsak ham, bu belgilar bo'sh kvadratlar sifatida ko'rinadi."
          }
        ]
      },
      {
        "title": "Shuning uchun, ular nomzodlardan olib tashlangan",
        "blocks": [
          {
            "p": "**Ko'rsatilmaydigan belgilar bilan ro'yxatni to'ldirish foydali emas.** Bu belgilarning ko'p ma'nolari ham bizning ma'lumotlarimizda bo'sh, bu esa xizmatning ma'nolar asosida ism tanlash uslubiga mos kelmaydi."
          },
          {
            "p": "**Muhimroq sabab ismni ishlatadigan shaxs bilan bog'liq.** Ism — bu shaxsning hayoti davomida turli joylarda kiritiladigan qiymat. Belgilari bo'lmagan belgilar banklar, maktablar, shifoxonalar yoki pasportlar tizimlarida tug'ilish ro'yxatini to'ldirgandan keyin ham kiritilmasligi yoki chop etilmasligi mumkin. Shuning uchun, bunday belgilarni tavsiya qila olmaymiz."
          },
          {
            "p": "Biroq, **biz bunday belgilarni ishlatish mumkin yoki yo'qligini belgilamaymiz.** Ular Oliy sudning jadvalidagi belgilar bo'lgani uchun, ro'yxatga olish o'zi mumkin. Agar siz haqiqatan ham o'sha belgini ishlatmoqchi bo'lsangiz, iltimos, Oliy sudning elektron oilaviy munosabatlar ro'yxatga olish tizimida to'g'ridan-to'g'ri tekshiring va **mavjudlik haqida tegishli organ bilan so'rang.**"
          }
        ]
      },
      {
        "title": "Agar jadvalda bo'lmagan hanja ishlatmoqchi bo'lsangiz",
        "blocks": [
          {
            "p": "Ularni ishlata olmaysiz. To'g'ri aytganda, bu belgilar ism uchun hanja sifatida ro'yxatga olinmaydi va ism faqat Hangulda yoziladi. Agar siz hanja bilan birga ishlatmoqchi bo'lsangiz, jadvaldan tanlashingiz kerak."
          },
          {
            "p": "Shuning uchun, biz jadvalda bo'lmagan belgilarni nomzodlar sifatida taqdim etmaymiz. Ekranda ko'rinadigan barcha hanja tug'ilish ro'yxatiga kiritilishi mumkin bo'lgan belgilar. To'liq ro'yxat [Rasmiy Nom-Hanja To'liq Ro'yxati](/guide/hanja) da mavjud."
          }
        ]
      }
    ]
  },
  "guide/hanja": {
    "eyebrow": "Ro'yxat",
    "title": "Rasmiy Nom Hanja To'liq Ro'yxati",
    "summary": "Biz tug'ilish ro'yxatiga kiritilishi mumkin bo'lgan hanja ni boshlang'ich undosh bo'yicha tartibga solganmiz. Har bir belgi uchun belgilangan o'qish va ma'noni ko'rishingiz mumkin.",
    "backLabel": "Foydalanish Qo'llanmasi",
    "sections": [
      {
        "title": "Boshlang'ich Undosh Bo'yicha Qidirish",
        "slot": "chosung",
        "blocks": [
          {
            "p": "Bu Oliy sudning rasmiy nom-hanja jadvalidan {characterTotal} belgini o'z ichiga oladi. Har bir belgi **ismda ishlatilganda o'qilishi** va uning ma'nosini o'z ichiga oladi. Jadvalga kiritilmagan belgilar ism hanja sifatida ro'yxatga olinmaydi, shuning uchun siz bu yerda keltirilgan belgilarni tanlashingiz kerak."
          },
          {
            "p": "Quyidagi tugmadagi ikkita raqam **shu boshlang'ich undoshga ega belgilar soni** va **qamrab olingan bo'laklar soni** ni ko'rsatadi."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Agar qidirayotgan belgingiz ro'yxatda bo'lmasa",
        "blocks": [
          {
            "p": "Oliy sud tomonidan e'lon qilingan belgilar soni {announcedTotal}, lekin bu ro'yxat {characterTotal} belgini o'z ichiga oladi. **{excludedNoStandardCode} belgi farqi — bu universal belgi kodida joyi bo'lmagan belgilar tufayli hech qanday shriftda ko'rsatilmaydigan belgilar.** Oliy sud tizimi bunday belgilarni rasmlar sifatida ko'rsatadi."
          },
          {
            "p": "Biz buni batafsil bayon etdik va nima uchun bunday belgilarni tavsiya qilmaymiz [Rasmiy Nom Hanja Nima?](/guide/hanja-basics) da. Siz bunday belgilarni haqiqiy foydalanish uchun tegishli organ bilan tekshirishingiz kerak."
          }
        ]
      },
      {
        "title": "Kam Belgilarga Ega Boshlang'ich Undoshlar",
        "slot": "tiny",
        "blocks": [
          {
            "p": "Quyidagi boshlang'ich undoshlar juda kam rasmiy nom-hanja ga ega, shuning uchun biz ularni alohida sahifasiz bu yerda ko'rsatdik."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ushbu Ro'yxatni Qanday O'qish",
        "blocks": [
          {
            "p": "**伽 · 가 · 절** uchun, ismda \"伽\" ishlatilganda, u **가** deb o'qiladi va \"ma'bad\" degan ma'noni anglatadi. Bir xil hanja uchun, ismda ishlatilganda o'qish jadval tomonidan belgilangan va boshqa usulda ishlatilishi mumkin emas."
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
    "support": "Qo'llab-quvvatlash"
  },
  "intro": "Foydalanish shartlaringizga o'zgarishlar — narxlar, siyosatlar — bu yerda kuchga kirishidan oldin e'lon qilinadi. Ichki yaxshilanishlar ro'yxatga olinmaydi: bu yerda ko'rinadigan narsa siz bilishingiz kerak bo'lgan narsadir.",
  "empty": {
    "title": "Hali hech qanday e'lon yo'q",
    "body": "Biror narsa o'zgarganda, bu yerda ko'rinadi."
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
        "Savollar, qaytishlar, maxfiylik so'rovlari va xato hisobotlari endi bitta joyga boradi. Pastki qismdagi aloqa sahifasi bizning elektron pochta va kompaniya ma'lumotlarimizni ko'rsatadi.",
        "**Bizning javoblarimiz** qaysi asosda berilganligi va **nimani qasddan qilmasligimiz** haqida ma'lumot **haqida** sahifasida yozilgan."
      ]
    },
    "2026-08-01-pdf-language": {
      "title": "PDF hisobotlari arab va khmer tillarida ingliz tilida chiqariladi",
      "body": [
        "Agar siz xizmatdan arab yoki khmer tilida foydalansangiz, xarid qilgan PDFingiz ingliz tilida tayyorlanadi. Hujjatlarimizni joylashtiradigan vosita hali o'sha ikki yozuvda paragraflarni o'rnatolmaydi.",
        "Ekran sizning tilingizda qoladi va ismingiz hujjat ichida o'z yozuvingizda chop etiladi.",
        "To'lovdan oldin bir xil eslatma paydo bo'ladi. Vosita bu yozuvlarni qo'llab-quvvatlaganda, biz bu yerda aytib o'tamiz."
      ]
    },
    "2026-08-01-payments-preparing": {
      "title": "To'lovlar hali ochilmagan",
      "body": [
        "Ism yaratish va natijani o'qish bugun bepul, va hisob qaydnomasi kerak emas.",
        "Pullik narsalar hali sotuvga chiqarilmagan. Narxlar sahifasida ko'rsatilgan miqdorlar sotuv ochilganda qo'llaniladi."
      ]
    }
  }
} satisfies NoticeCopy;
