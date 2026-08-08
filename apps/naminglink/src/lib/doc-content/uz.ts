import type { DocPage, NoticeCopy } from "./types";
import type { DocKey } from "./ko";

/** O‘zbekcha — `scripts/translate-doc-content.ts`가 만든다. 손으로 고치지 말 것. */
export const UZ_DOCS = {
  "about": {
    "eyebrow": "Haqqida",
    "title": "Naming-Link Haqida",
    "summary": "Biz sizga koreyscha ismlarni tanlash va tushunishda yordam beramiz. Natijalarimizni qanday asosda shakllantirishimiz va nima qilishni maqsad qilmasligimiz haqida.",
    "backLabel": "Bosh sahifa",
    "sections": [
      {
        "title": "Biz nima qilamiz",
        "blocks": [
          {
            "p": "Naming-Link sizga **koreyscha ismlarni tanlash va tushunishda** yordam beradi — bolangizning ismidagi hanja, xorijda ishlatiladigan koreyscha ism, o'z ismingizning Hangul yozuvi va muhr yoki chop etilgan hisobot kabi esdaliklar."
          },
          {
            "p": "Natijalaringizni ko'rish **bepul va hisob qaydnomasi talab qilmaydi.** Pullik mahsulotlar ekranda ko'rsatilganlarni qayta sotmaydi: ular ko'proq nomzodlarni ochadi, yozma tahlil qo'shadi yoki natijani saqlanadigan narsaga aylantiradi."
          }
        ]
      },
      {
        "title": "Bizning javoblarimiz qanday asosda",
        "blocks": [
          {
            "p": "Hanja **Koreya Oliy Sudi tomonidan belgilangan rasmiy ism-hanja jadvalidan** kelib chiqadi. Har bir belgi ismlar uchun belgilangan o'qilishi bor va jadvaldan tashqaridagi belgilar ro'yxatdan o'tkazilmaydi. Biz o'sha ro'yxatga qo'shmaymiz yoki sevimlilarni tanlamaymiz."
          },
          {
            "p": "Saju va besh element raqamlari **koreyscha lunisolal taqvim**dan hisoblanadi, tug'ilish vaqti tug'ilgan joy uchun haqiqiy quyosh vaqti bilan to'g'irlanadi. O'qish an'anaviy ma'lumot sifatida beriladi, bashorat emas."
          },
          {
            "p": "Yozma tushuntirishlar AI tomonidan ishlab chiqariladi. **Ixtiro qilishdan saqlanish** uchun modelga faqat sizning kirishingiz va bizning ma'lumotlarimiz beriladi va ichida qolish uchun ko'rsatma beriladi. Qo'llanmalar buni batafsil tushuntiradi."
          }
        ]
      },
      {
        "title": "Biz nima qilmaymiz",
        "blocks": [
          {
            "ul": [
              "**Biz bashorat qilmaymiz.** Bu yerda hech narsa omad, boylik yoki himoya va'da qilmaydi.",
              "**Biz sizning ismingizni saqlamaymiz.** Bepul natijalar hech qachon serverlarimizga yozilmaydi va pullik hujjatlar nusxasini saqlamasdan yetkaziladi.",
              "**To'lash yaxshiroq javobni sotib olmaydi.** Reklama orqali ochish va to'lov orqali ochish bir xil mazmun beradi."
            ]
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Xizmat 23 tilda mavjud. Pullik PDF-lar arab va khmer tillarida ingliz tilida chiqariladi — PDF yaratish vositasi o'sha yozuvlarni qo'llab-quvvatlamaydi — va biz to'lovdan oldin ekranda buni aytamiz."
          }
        ]
      },
      {
        "title": "Aloqa",
        "blocks": [
          {
            "p": "Kompaniya ma'lumotlari va biz bilan bog'lanish usullari [aloqa sahifasida](/contact) mavjud, shu jumladan qaytish, maxfiylik so'rovlari va xato xabarlarini."
          }
        ]
      }
    ]
  },
  "guide/reading": {
    "eyebrow": "O'qishlar",
    "title": "Har bir belgi uchun belgilangan o'qish",
    "summary": "Rasmiy jadval faqat belgilar ro'yxatini keltirmaydi. U shuningdek, har bir belgi ismlarda ishlatilganda qanday o'qilishi kerakligini belgilaydi.",
    "backLabel": "Qo'llanma",
    "sections": [
      {
        "title": "Har bir belgi uchun belgilangan o'qish",
        "blocks": [
          {
            "p": "Ism-hanja jadvali faqat qaysi belgilar ishlatilishi mumkinligini belgilamaydi. **U har bir belgi ismlar uchun qanday o'qilishi kerakligini ham belgilaydi.** Ushbu belgilangan o'qish ro'yxatdan o'tkazish uchun asos bo'ladi."
          },
          {
            "p": "Ko'p hanja bir nechta mumkin bo'lgan o'qishlarga ega. Biroq, ism hujjatlarda yoziladi va ovoz chiqariladi, shuning uchun u aniq bitta o'qishga ega bo'lishi kerak. Shuning uchun jadval har bir belgiga ismlar uchun o'qishini belgilaydi va boshqa o'qish ro'yxatdan o'tkazilmaydi."
          }
        ]
      },
      {
        "title": "Shuning uchun ovoz birinchi o'rinda",
        "blocks": [
          {
            "p": "Shuning uchun Naming-Link ovozni belgilashdan oldin hanja qidiradi. Agar ism \"지은\" bo'lsa, ma'nosi faqat **지** o'qishiga tayinlangan belgilar va **은** o'qishiga tayinlangan belgilar orasidan tanlanishi mumkin."
          },
          {
            "p": "Qanday yaxshi ma'no bo'lmasin, o'qishi mos kelmaydigan belgi o'sha ism uchun ishlatilmaydi. Biz shuningdek, ismingizni belgi bilan moslashtirish uchun hech qachon o'zgartirmaymiz — ism bir umr davomida aytiladi va ovoz birinchi o'rinda belgilangan, hanja esa keyin keladi."
          }
        ]
      },
      {
        "title": "Familiya ismlari bu jadvaldan tashqarida",
        "blocks": [
          {
            "p": "Bu ko'pincha noto'g'ri tushuniladi. **Jadval berilgan ismni boshqaradi, familiya ismiga emas.** Familiya ismi allaqachon oilaviy ro'yxatda mavjud bo'lgan narsaga amal qiladi, shuning uchun ba'zi odamlar ism-hanja jadvalida bo'lmagan belgilarni ishlatishadi."
          },
          {
            "p": "Shuning uchun Naming-Link familiya hanja bilan boshqacha muomala qiladi. Biz faqat sizga familiya topishga yordam beramiz va jadvaldan tashqaridagi belgilarga ega bo'lgan odamlar uchun to'g'ridan-to'g'ri kiritish maydoni qoldiramiz. Namgung va Seonwoo kabi ikki silabali familiyalar bir xil usulda kiritiladi."
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
        "title": "Biz tovushni, ma'noni emas, olib boramiz",
        "blocks": [
          {
            "p": "Ushbu xizmat **ismingizni** Hangulda yozadi. Bu sizga koreyscha ism bermaydi. Michael bo'ladi 마이클 — bir xil ism, koreyslar uni o'qishi va aytishi uchun yozilgan. Biz uni o'xshash ma'noga ega bo'lgan koreyscha ismga almashtirmaymiz."
          },
          {
            "p": "Agar sizga koreyscha ism kerak bo'lsa, **bu boshqa xizmatdir.** Biri ismingizni saqlaydi va faqat yozuvni o'zgartiradi; ikkinchisi yangi ism taklif qiladi."
          }
        ]
      },
      {
        "title": "Koreyscha yo'q tovushlar",
        "blocks": [
          {
            "p": "Har bir tilda koreyscha yo'q tovushlar mavjud — f, v, z, th va koreyscha farq qilmaydigan unli tovushlar. Bular uchun biz **koreyscha gapiruvchi aslida aytadigan** narsani yozamiz, asl fonetikani har bir belgi bo'yicha transkriptsiya qilish o'rniga. Maqsad ishlatiladigan yozuvni olish, eng texnik jihatdan to'g'ri bo'lganini emas."
          },
          {
            "p": "Bir xil yozuv ismning kelib chiqishiga qarab farq qilishi mumkin, shuning uchun biz sizning tilingiz va mamlakatingizni so'raymiz va o'sha o'qishdan ish olib boramiz."
          }
        ]
      },
      {
        "title": "Bir nechta yozuvlar, yonma-yon",
        "blocks": [
          {
            "p": "Bitta to'g'ri javob yo'q. Asl tovushga eng yaqin yozuv, Koreyada eng ko'p ishlatiladigan yozuv va yozish uchun eng oson bo'lgan yozuv ko'pincha uch xil narsadir. Shuning uchun biz ularni birga ko'rsatamiz va ularni ajratib turadigan narsani aytamiz."
          },
          {
            "p": "Agar hech biri to'g'ri his qilmasa, siz xohlagan tovush haqida bir ko'rsatma qo'shishingiz va yana ishga tushirishingiz mumkin — masalan, ma'lum bir silabani boshqacha yozish kerakligini."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bu yerda hanja yo'q",
        "blocks": [
          {
            "p": "Biz transliteratsiyaga hanja qo'shmaymiz. Hanja ma'no olib keladi, va bu jarayon tovush haqida. Tovushga mos keladigan belgilarni moslashtirish sizni hech qachon so'ramagan ma'noga olib kelishi mumkin."
          }
        ]
      }
    ]
  },
  "guide/how-global-to-korean": {
    "eyebrow": "Qanday ishlaydi",
    "title": "Biz koreyscha ismni qanday quramiz",
    "summary": "Biz mavjud familiyalardan tanlaymiz, ismingizni aytish va yozish qanchalik osonligini baholaymiz va ismning maqsadini so'raymiz.",
    "backLabel": "Qo'llanma",
    "sections": [
      {
        "title": "Biz familiya ismidan boshlaymiz",
        "blocks": [
          {
            "p": "Koreyada familiya ism birinchi o'rinda bo'ladi va berilgan ismlardan farqli o'laroq, u erkin ixtiro qilinmaydi — siz uni meros qilib olasiz. Shuning uchun biz faqat koreyslar haqiqatan ham ishlatadigan familiyalarni taklif qilamiz. Bizning standart bazamiz **20 ta eng keng tarqalgan familiya** bo'lib, ular birgalikda aholining taxminan 80% ni qamrab oladi."
          },
          {
            "p": "Agar sizning familiyangiz haqiqiy koreyscha biri bilan tovushi mos kelsa — Wang bilan 왕, Ye bilan 예 — biz o'shani birinchi o'ringa qo'yamiz. Asl ismingizga bog'lanish saqlash tasodifiy tanlangan familiyadan ko'ra ko'proq ahamiyatga ega."
          },
          {
            "p": "Siz familiyani o'zingiz tanlashingiz yoki bizga taklif qilishimizga ruxsat berishingiz mumkin. Har holda, bu **mavjud familiya bo'ladi**."
          }
        ]
      },
      {
        "title": "Aytilishi oson, yozilishi oson",
        "blocks": [
          {
            "p": "Bu Koreyada sizni haqiqatan ham chaqiradigan ism, shuning uchun birinchi narsa biz koreyslar uni bir marta eshitib yozib olishi mumkinligini tekshiramiz. Har safar yozib olishni talab qiladigan ism sizga yuk bo'ladi, bizga emas."
          },
          {
            "p": "Ma'no ham muhim. Koreyscha berilgan ismlar odatda bitta ma'noni o'z ichiga oladi, shuning uchun biz sizga ismingiz qanday o'qilishini va nima uchun tanlaganimizni aytamiz — faqat ismning o'zi emas."
          }
        ]
      },
      {
        "title": "Biz ismning maqsadini so'raymiz",
        "blocks": [
          {
            "p": "Universitet hujjatlari uchun ism do'stlaringizning bir xonadan baqirishi uchun yoki onlayn foydalanadigan nomdan farq qiladi. Biz sizdan uni qanday ishlatmoqchi ekanligingizni so'raymiz va buni hisobga olamiz."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bu transliteratsiya emas",
        "blocks": [
          {
            "p": "Bu yerda biz **yangi koreyscha ism** taklif qilamiz. Agar siz o'z ismingizni Hangulda yozmoqchi bo'lsangiz — Michael bo'lsa, 마이클 — [Hangul yozuvi qo'llanmasiga](/guide/how-hangul-transliteration) qarang."
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
    "summary": "Savollar, qaytish, maxfiylik so'rovlari va xato xabarlarini biz bilan bog'lanish usullari, kompaniya ma'lumotlarimiz bilan.",
    "backLabel": "Bosh sahifa",
    "sections": [
      {
        "title": "Bizga elektron pochta yuboring",
        "blocks": [
          {
            "p": "**{email}** manziliga yozing. Biz ikki ish kuni ichida javob beramiz. Buyurtma bilan bog'liq har qanday narsalar — to'lov, qaytish, sizga yetkazilmagan fayl — iltimos, **buyurtma raqamingiz yoki to'lov qilingan elektron pochta manzilingizni** qo'shing."
          },
          {
            "p": "Telefon so'rovlari: {customerCenter} (koreys ish vaqti)."
          }
        ]
      },
      {
        "title": "Bu yerda nima yuborish kerak",
        "blocks": [
          {
            "ul": [
              "**To'lovlar va qaytish** — agar hujjat hech qachon ishlab chiqarilmagan bo'lsa yoki to'lov miqdori buyurtmangizdan farq qilsa, biz to'liq qaytaramiz. [Qaytish siyosatini](/refund-policy) ko'ring.",
              "**Maxfiylik** — ma'lumotlaringizga kirish, to'g'rilash yoki o'chirish so'rovlari. [Maxfiylik siyosatini](/privacy) ko'ring.",
              "**Tuzatishlar** — agar biron bir hanja ma'nosi, o'qishi yoki hisoblash noto'g'ri ko'rinsa, bizga ayting. Qaysi ekranda va nima kiritganingizni aytish juda yordam beradi.",
              "**Boshqa har qanday narsa** — hamkorlik va matbuot ham shu manzilga boradi."
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
              "**Maxfiylik bo'yicha mas'ul shaxs** — {privacyOfficer}",
              "**Hosting provayderi** — {hostingProvider}"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Xabaringizda ism yoki tug'ilgan sana kiritishingiz shart emas. Bepul natijalar hech qachon serverlarimizda saqlanmaydi, shuning uchun biz ularni qayta topa olmaymiz — buyurtma raqami yetarli."
          }
        ]
      }
    ]
  },
  "guide/avoid": {
    "eyebrow": "An'analar",
    "title": "An'anaviy ravishda qochiladigan belgilar",
    "summary": "Bu qonun bilan taqiqlanmagan, lekin an'ana. Biz qochilgan narsalar va nima uchun, shuningdek, buni qanday hal qilamiz haqida yozganmiz.",
    "backLabel": "Foydalanish qo'llanmasi",
    "sections": [
      {
        "title": "Qonuniy ravishda qabul qilingan belgilar",
        "blocks": [
          {
            "stats": [
              {
                "value": "{avoidTotal} belgi",
                "label": "Qochilgan belgilar ro'yxati"
              },
              {
                "value": "{avoidCommonlyUsed} belgi",
                "label": "Ular orasida, hali ham keng tarqalgan belgilar"
              }
            ]
          },
          {
            "p": "Shaxsiy ismlar uchun belgilar ro'yxatiga kiritilgan va **qonuniy ravishda qabul qilingan**, lekin ismlar uchun noqulay deb hisoblangan belgilar mavjud."
          },
          {
            "p": "Asosiy fikr **\"ortiqcha ma'no aslida nojoya\"** deb hisoblanadi. Bu juda qimmatbaho (珍·寶) deb hisoblangan belgilar, juda kuchli mavjudlikka ega deb hisoblangan belgilar (王·帝) va odamning o'ziga sig'maydigan, osmon yoki xudolar kabi juda ulug'vor deb hisoblangan belgilarni o'z ichiga oladi. Bu eski cheklov hissini aks ettiradi, ismingiz odamni o'zidan o'zib ketishi mumkin deb hisoblaydi."
          },
          {
            "p": "**Biroq, bu belgilar ishlatilmaydi deb hisoblanmaydi.** Bu qonuniy taqiqlash emas, balki an'ana, va an'analar mintaqa, oila va avlodga qarab farq qiladi va vaqt o'tishi bilan o'zgarishi mumkin."
          },
          {
            "p": "Aslida, biz to'plagan {avoidTotal} belgidan {avoidCommonlyUsed} hali ham ismlarda keng tarqalgan. Ular qochiladigan deb hisoblanganiga qaramay, hali ham keng tarqalganligi bu an'ananing mutlaq emasligini ko'rsatadi."
          }
        ]
      },
      {
        "title": "Qanday toifalar mavjud?",
        "blocks": [
          {
            "p": "Hozirda to'plangan belgilar yetti toifaga bo'lingan."
          },
          {
            "ul": [
              "**Xazinalar va buyumlar** — To'g'ridan-to'g'ri boylik yoki buyumlarga ishora qiluvchi belgilar",
              "**Osmon va tabiat** — Quyosh, oy va osmon kabi odamning o'ziga sig'maydigan juda ulug'vor narsalar",
              "**Shohlar va aristokratiya** — Shahzoda yoki imperator kabi maqomni anglatadigan belgilar",
              "**Qudratli mavjudotlar** — Xudolar yoki ruhlar kabi muqaddas olamlarni anglatadigan belgilar",
              "**Mavsumlar va boshqalar** — Maxsus vaqtlar yoki holatlarga bog'liq belgilar",
              "**Hayvonlar** — Ajdaho yoki yo'lbars kabi kuchli energiyaga ega deb hisoblangan hayvonlar",
              "**Ortga qaytish** — Ortga qaytish ma'nosi juda katta yoki to'lib-toshgan deb hisoblangan belgilar"
            ]
          }
        ]
      },
      {
        "title": "Siz belgilarni o'zingiz qo'shishingiz yoki olib tashlashingiz mumkin",
        "blocks": [
          {
            "p": "Biz bu belgilarni tasodifan o'chirmaymiz. **Biz nom beruvchi uchun ularni qanday hal qilishni tanlash uchun kiritish ekranida ikkita variant taqdim etdik.**"
          }
        ]
      },
      {
        "kind": "note",
        "title": "Kiritish ekranida mavjud variantlar",
        "blocks": [
          {
            "p": "**Qochilgan belgilarni nomzodlardan chiqarib tashlash** — Agar yoqilgan bo'lsa, ular to'liq chiqarib tashlanadi. Agar o'chirilmagan bo'lsa, ular natijalarda \"An'anaviy ravishda qochilgan\" yorlig'i bilan va sabab bilan birga qoladi."
          },
          {
            "p": "**Hatto keng tarqalgan belgilarni chiqarib tashlash** — Bu qochish ro'yxatida bo'lgan, lekin aslida keng tarqalgan belgilarni chiqarib tashlaydi (圭·琳·玲·元·太·星·海 va boshqalar). Agar yoqilgan bo'lsa, nomzodlar sezilarli darajada kamayadi."
          },
          {
            "p": "Standart **o'chirmaslik, balki faqat ko'rsatish**. Agar ular ro'yxatdan tinch olib tashlangan bo'lsa, bu belgini ishlatmoqchi bo'lganlarga u mavjud emasdek ko'rinishi mumkin."
          }
        ]
      },
      {
        "title": "Variantlarning yo'qolmasligini ta'minlash",
        "blocks": [
          {
            "p": "Agar o'sha silaba uchun ishlatiladigan belgilar qolmasa, biz o'sha silaba uchun chiqarishni olib tashlaymiz va nomzodlarni ko'rsatamiz. Biz buni umuman hech qanday variant bo'lmasligidan yaxshiroq deb hisoblaymiz."
          }
        ]
      }
    ]
  },
  "guide/how-korean-to-global": {
    "eyebrow": "Xizmat asoslari",
    "title": "Global ism konversiyasi uchun asos nima?",
    "summary": "Biz besh nuqtai nazardan nomzodlarni taqdim etamiz, har bir tilning yozuv tizimlarini saqlab qolamiz va faqat mavjud ismlardan foydalanamiz.",
    "backLabel": "Foydalanish qo'llanmasi",
    "sections": [
      {
        "title": "Nomzodlar besh nuqtai nazardan taqdim etiladi",
        "blocks": [
          {
            "p": "Ismni boshqa tilga tarjima qilishning bitta yo'li yo'q. Tovushni yoki ma'noni saqlash, mahalliy kontekstda tabiiy ism tanlash yoki shaxsiy xususiyatni ustun qo'yishdan kelib chiqib, javoblar farq qiladi. Shuning uchun, bitta variantni taqdim etish o'rniga, biz **besh xil nuqtai nazardan bitta variantni taqdim etamiz**."
          },
          {
            "ul": [
              "**Tovushni saqlash varianti** — Asl ismingizning tovushini iloji boricha saqlaydi",
              "**Ma'no tarjimasi varianti** — Ismda mavjud bo'lgan ma'noni o'sha tilga tarjima qiladi",
              "**Tovush va ma'no murosasi varianti** — Har biridan yarim oladi",
              "**Mahalliy haqiqiy variant** — O'sha madaniy kontekstdagi haqiqatan ham keng tarqalgan ismlarni tanlaydi",
              "**Shaxsiy xususiyat va brend varianti** — Esda qolarli va ajralib turadigan ismlarni ustun qo'yadi"
            ]
          },
          {
            "p": "Besh variant taqdim etilishi kafolatlanadi. Har bir kishi uchun afzalliklar farq qiladi, shuning uchun bitta to'g'ri javobni taqdim etishdan ko'ra, tanlovlarni taqdim etish yaxshiroq deb hisoblaymiz."
          }
        ]
      },
      {
        "title": "Har bir tilning yozuv tizimlari qoidalari farq qiladi",
        "blocks": [
          {
            "p": "Roman harflarini ishlatmaydigan tilga tarjima qilganda, u o'sha tilning yozuvida yozilishi kerak. Yapon tilida bu kana va kanji bo'ladi; rus, mo'g'ul va qozog' tilida bu kirill bo'ladi; arab tilida bu arab yozuvi bo'ladi; tay, khmer va hind tilida esa o'z yozuvlari bo'ladi. Agar siz uni roman harflarida yozsangiz va \"yaponcha ism\" deb atasangiz, bu mamlakatda ishlatilmaydi."
          },
          {
            "p": "Shuning uchun, har bir tilning yozuv tizimi uchun alohida qoidalarimiz bor va server natijalarni o'sha yozuvda bo'lishini ta'minlash uchun yana bir bor tekshiradi. Familiyalarni o'tkazib yuborish yoki Hangulni aralashtirish kabi xatolar bu yerda filtrlashdan o'tadi."
          }
        ]
      },
      {
        "title": "Biz haqiqatan ham ishlatiladigan ismlarni ishlatamiz",
        "blocks": [
          {
            "p": "Haqiqatan ham mavjud bo'lmagan, lekin ishonarli ko'rinadigan ismlarni yaratmaslik uchun, biz variantlarimizni mavjud ismlarga asoslaymiz. Ismlar hujjatlarda va tanishtirishlarda ishlatiladi, shuning uchun agar mahalliy odam \"bunday ism yo'q\" deb o'ylasa, bu ishlatilmaydi."
          }
        ]
      },
      {
        "title": "Tanlov va tavsifni ajratamiz",
        "blocks": [
          {
            "p": "Biz besh nomzodni aniqlash vazifasini har bir nomzodning batafsil tavsifidan ajratamiz. Tavsif ko'p vaqt talab qiladigan jarayon bo'lgani uchun, biz bu qismni alohida ajratamiz va bir vaqtning o'zida yaratamiz."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Nima uchun bu o'zgartirildi?",
        "blocks": [
          {
            "p": "Dastlab, biz besh nuqtai nazarni alohida yaratdik. Bu tezroq edi, lekin **nomzodlar soni har safar farq qilar edi.** Har bir kishi nomzodlarni tanlaganda, takrorlanishlar yoki farqlar bo'lar edi va agar biri muvaffaqiyatsiz bo'lsa, o'sha nomzod butunlay yo'q bo'lib ketardi, natijada besh o'rniga faqat ikki yoki uchta qolardi."
          },
          {
            "p": "Endi, biz nomzodlar to'plamini va nuqtai nazar taqsimotini bir vaqtning o'zida aniqlaymiz, **soni o'zgaruvchan.** Bir tavsif muvaffaqiyatsiz bo'lsa ham, nomzodlar qoladi va qisqa ma'lumot bilan taqdim etiladi. Biz bir xil sonni doimiy ravishda saqlash yaxshiroq deb hisoblaymiz, hatto bu biroz ko'proq vaqt oladi."
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
  "intro": "Foydalanish shartlaringizga — narxlar, siyosatlar — ta'sir etadigan o'zgarishlar bu yerda e'lon qilinadi. Ichki yaxshilanishlar ro'yxatga olinmaydi: bu yerda ko'rinadigan narsa sizga kerak bo'lgan ma'lumot.",
  "empty": {
    "title": "Hali e'lonlar yo'q",
    "body": "Biror narsa o'zgarganda, bu yerda ko'rinadi."
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
        "Savollar, qaytish, maxfiylik so'rovlari va xato xabarlarini bitta joyga yuborish mumkin. Pastki qismdagi aloqa sahifasi bizning elektron pochta manzilimiz va kompaniya ma'lumotlarimizni ko'rsatadi.",
        "Bizning javoblarimiz qanday asosda shakllantirilishi va nima qilishni maqsad qilmasligimiz haqida haqida sahifasida yozilgan."
      ]
    },
    "2026-08-01-pdf-language": {
      "title": "PDF hisobotlari arab va khmer tillarida ingliz tilida chiqariladi",
      "body": [
        "Agar siz arab yoki khmer tilida xizmatdan foydalansangiz, sotib olgan PDF-ingiz ingliz tilida ishlab chiqariladi. Hujjatlarimizni joylashtiruvchi vosita hali o'sha ikki yozuvda paragraflarni o'rnatolmaydi.",
        "Ekran sizning tilingizda qoladi va ismingiz hujjat ichida o'z yozuvingizda chop etiladi.",
        "To'lovdan oldin bir xil eslatma ko'rinadi. Vosita ushbu yozuvlarni qo'llab-quvvatlaganda, biz bu yerda aytamiz."
      ]
    },
    "2026-08-01-payments-preparing": {
      "title": "To'lovlar hali ochiq emas",
      "body": [
        "Ism yaratish va natijani o'qish bugun bepul, va hisob qaydnomasi talab qilinmaydi.",
        "Pullik mahsulotlar hali sotuvda emas. Narxlar sahifasida ko'rsatilgan miqdorlar sotuvlar ochilganda qo'llaniladi."
      ]
    }
  }
} satisfies NoticeCopy;
