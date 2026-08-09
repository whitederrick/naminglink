import type { DocPage, NoticeCopy } from "./types";
import type { DocKey } from "./ko";

/** O‘zbekcha — `scripts/translate-doc-content.ts`가 만든다. 손으로 고치지 말 것. */
export const UZ_DOCS = {
  "about": {
    "eyebrow": "Haqida",
    "title": "Naming-Link haqida",
    "summary": "Biz sizga koreyscha ismlarni tanlash va tushunishda yordam beramiz. Natijalarimizni qanday asosda shakllantirishimiz va nima qilishdan qasddan voz kechishimiz haqida ma'lumot.",
    "backLabel": "Bosh sahifa",
    "sections": [
      {
        "title": "Biz nima qilamiz",
        "blocks": [
          {
            "p": "Naming-Link sizga **koreyscha ismlarni tanlash va tushunishda yordam beradi** — bolalarning ismidagi hanja, xorijda foydalanish uchun koreyscha ism, o'z ismingizning Hangul yozuvi va muhr yoki chop etilgan hisobot kabi esdaliklar."
          },
          {
            "p": "Natijalarni ko'rish **bepul va hisob qaydnomasi talab qilmaydi.** Pullik narsalar hech qachon ekranda ko'rsatilganlarni qayta sotmaydi: ular ko'proq nomzodlarni ochadi, yozma tahlil qo'shadi yoki natijani saqlanadigan narsaga aylantiradi."
          }
        ]
      },
      {
        "title": "Bizning javoblarimiz qanday asosda",
        "blocks": [
          {
            "p": "Hanja **Koreya Oliy Sudi tomonidan belgilangan rasmiy ism-hanja jadvalidan** kelib chiqadi. Har bir belgi ismlarda foydalanish uchun belgilangan o'qish bilan birga keladi, va jadvaldan tashqaridagi belgilar ro'yxatdan o'tkazilmaydi. Biz o'sha ro'yxatga qo'shmaymiz yoki sevimlilarni tanlamaymiz."
          },
          {
            "p": "Saju va besh element raqamlari **koreyscha lunisolal taqvimdan** hisoblanadi, tug'ilish vaqti tug'ilgan joy uchun haqiqiy quyosh vaqti bilan to'g'rilanadi. O'qish an'anaviy ma'lumot sifatida beriladi, bashorat emas."
          },
          {
            "p": "Yozma tushuntirishlar AI tomonidan ishlab chiqariladi. **Ixtiro qilishdan saqlanish** uchun modelga faqat sizning ma'lumotlaringiz va bizning ma'lumotlarimiz beriladi va ichida qolish uchun ko'rsatma beriladi. Qo'llanmalar buni batafsil tushuntiradi."
          }
        ]
      },
      {
        "title": "Biz nima qilmaymiz",
        "blocks": [
          {
            "ul": [
              "**Biz bashorat qilmaymiz.** Bu yerda hech narsa omad, boylik yoki himoya va'da qilmaydi.",
              "**Biz ismingizni saqlamaymiz.** Bepul natijalar hech qachon bizning serverlarimizga yozilmaydi, va pullik hujjatlar nusxasini saqlamasdan yetkaziladi.",
              "**To'lash yaxshiroq javobni sotib olmaydi.** Reklama orqali ochish va to'lov orqali ochish bir xil mazmunni beradi."
            ]
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Xizmat 23 tilda mavjud. Pullik PDF hujjatlari arab va khmer tillarida ingliz tilida beriladi — PDF chiqaruvchi o'sha yozuvlarni qo'llab-quvvatlamaydi — va biz to'lovdan oldin ekranda buni aytamiz."
          }
        ]
      },
      {
        "title": "Aloqa",
        "blocks": [
          {
            "p": "Kompaniya ma'lumotlari va biz bilan bog'lanish usullari [aloqa sahifasida](/contact) mavjud, shu jumladan qaytarish, maxfiylik so'rovlari va xato xabarlarini."
          }
        ]
      }
    ]
  },
  "guide": {
    "eyebrow": "Naming-Link qanday ishlaydi",
    "title": "Ismingizni qanday asosda tanlaymiz",
    "summary": "Koreyscha familiyani qanday tanlaymiz, berilgan ismni taklif qilishdan oldin nima tekshiramiz va ismingizni Hangulda qanday yozamiz — qasddan qoldirgan qismlar bilan.",
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
    "title": "Har bir belgi uchun belgilangan o'qish — bitta talaffuz",
    "summary": "Rasmiy jadval faqat belgilar ro'yxatini tuzmaydi. U shuningdek, har bir belgi ismlarda ishlatilganda qanday o'qilishi kerakligini belgilaydi.",
    "backLabel": "Qo'llanma",
    "sections": [
      {
        "title": "Har bir belgi uchun belgilangan o'qish",
        "blocks": [
          {
            "p": "Ism-hanja jadvali faqat qaysi belgilar ishlatilishi mumkinligini hal qilmaydi. **U shuningdek, har bir belgi ismlarda paydo bo'lganda qanday o'qilishi kerakligini belgilaydi.** Ushbu belgilangan o'qish ro'yxatdan o'tkazish uchun asos bo'ladi."
          },
          {
            "p": "Ko'p hanja bir nechta mumkin bo'lgan o'qishlarga ega. Biroq, ism hujjatlarda yoziladi va ovoz chiqariladi, shuning uchun u aniq bitta o'qishga ega bo'lishi kerak. Shuning uchun jadval har bir belgiga ismlarda foydalanish uchun o'qishini belgilaydi, va boshqa o'qish ro'yxatdan o'tkazilmaydi."
          }
        ]
      },
      {
        "title": "Shuning uchun ovoz birinchi o'rinda",
        "blocks": [
          {
            "p": "Shuning uchun Naming-Link ovozni belgilashdan oldin hanja qidiradi. Agar ism \"지은\" bo'lsa, ma'no faqat **지** o'qishiga tayinlangan belgilar va **은** o'qishiga tayinlangan belgilar orasidan tanlanishi mumkin."
          },
          {
            "p": "Qanday yaxshi ma'no bo'lmasin, o'qishi mos kelmaydigan belgi o'sha ism uchun ishlatilmaydi. Biz shuningdek, ismingizni belgi bilan moslashtirish uchun hech qachon o'zgartirmaymiz — ism umr bo'yi aytiladi va ovoz birinchi o'rinda hal qilinadi, hanja esa keyin keladi."
          }
        ]
      },
      {
        "title": "Familiyalar bu jadvaldan tashqarida",
        "blocks": [
          {
            "p": "Bu ko'pincha noto'g'ri tushuniladi. **Jadval berilgan ismni boshqaradi, familiyani emas.** Familiya ro'yxatda allaqachon mavjud bo'lgan narsaga amal qiladi, shuning uchun ba'zi odamlar ism-hanja jadvalida bo'lmagan belgilarni ishlatishadi."
          },
          {
            "p": "Shuning uchun Naming-Link familiya hanjasini boshqacha ko'radi. Biz faqat sizga familiya topishda yordam beramiz, va biz jadvaldan tashqaridagi belgilarga ega bo'lgan odamlar uchun to'g'ridan-to'g'ri kiritish uchun bir maydon qoldiramiz. Namgung va Seonwoo kabi ikki silabali familiyalar ham xuddi shunday kiritiladi."
          }
        ]
      }
    ]
  },
  "guide/how-hangul-transliteration": {
    "eyebrow": "Bu qanday ishlaydi",
    "title": "Ismingizni Hangulda qanday yozamiz",
    "summary": "Biz xorijiy ismlarni Hangulda yozishda qanday tovushlarni tanlaymiz va nega hanja qo'shmaymiz.",
    "backLabel": "Qo'llanma",
    "sections": [
      {
        "title": "Biz ma'noni emas, tovushni olib boramiz",
        "blocks": [
          {
            "p": "Ushbu xizmat **ismingizni** Hangulda yozadi. Bu sizga koreyscha ism bermaydi. Michael bo'ladi 마이클 — bir xil ism, koreyslar uni o'qiy olishi va aytishi uchun yozilgan. Biz uni o'xshash ma'noga ega bo'lgan koreyscha ismga almashtirmaymiz."
          },
          {
            "p": "Agar sizga koreyscha ism kerak bo'lsa, **bu boshqa xizmat**. Biri ismingizni saqlaydi va faqat yozuvni o'zgartiradi; ikkinchisi esa yangi ism taklif qiladi."
          }
        ]
      },
      {
        "title": "Koreyscha tovushlar yo'q",
        "blocks": [
          {
            "p": "Har bir tilda koreys tilida yo'q tovushlar mavjud — f, v, z, th va koreys tilida mavjud bo'lmagan unli farqlari. Bular uchun biz **koreys tilida gapiruvchi shaxs aslida nima deydi** deb yozamiz, asl fonetikani har bir belgi bo'yicha transkriptsiya qilish o'rniga. Maqsad — ishlatiladigan yozuv, eng texnik jihatdan sodiq bo'lgan emas."
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
            "p": "Yagona to'g'ri javob yo'q. Asl tovushga eng yaqin yozuv, Koreyada eng ko'p ishlatiladigan yozuv va yozilishi eng oson bo'lgan yozuv ko'pincha uch xil narsadir. Shuning uchun biz ularni birga ko'rsatamiz va ularni ajratib turadigan narsalarni aytamiz."
          },
          {
            "p": "Agar ularning hech biri to'g'ri his qilmasa, siz xohlagan tovush haqida bir maslahat qo'shishingiz mumkin va yana bir marta sinab ko'rishingiz mumkin — masalan, ma'lum bir silabni boshqacha yozish kerakligini aytish."
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
    "summary": "Biz mavjud familiyalardan tanlaymiz, ismingizning qanday oson aytilishi va yozilishi haqida o'ylaymiz va ismingizning maqsadini so'raymiz.",
    "backLabel": "Qo'llanma",
    "sections": [
      {
        "title": "Biz familiyadan boshlaymiz",
        "blocks": [
          {
            "p": "Koreyada familiya birinchi o'rinda turadi va berilgan ismlar kabi erkin ixtiro qilinmaydi — siz uni meros qilib olasiz. Shuning uchun biz faqat koreyslar haqiqatan ham bor bo'lgan familiyalarni taklif qilamiz. Bizning standart bazamiz **20 ta eng keng tarqalgan familiyalar**, bu esa aholi sonining taxminan 80% ni qamrab oladi."
          },
          {
            "p": "Agar sizning familiyangiz tovushi bilan haqiqiy koreys familiyasiga mos kelsa — Wang bilan 왕, Ye bilan 예 — biz uni birinchi o'rinda qo'yamiz. Asl ismingizga bog'lanish muhimroq, tasodifiy tanlangan familiyadan ko'ra."
          },
          {
            "p": "Siz familiyani o'zingiz tanlashingiz yoki bizdan birini tavsiya qilishimizni so'rashingiz mumkin. Har holda, bu **mavjud familiya bo'ladi**."
          }
        ]
      },
      {
        "title": "Aytilishi oson, yozilishi oson",
        "blocks": [
          {
            "p": "Bu Koreyada sizni haqiqatan ham chaqiradigan ism, shuning uchun birinchi narsa biz tekshiradigan narsa — koreys buni bir marta eshitib, yozib olishi mumkinmi. Har safar yozilishi kerak bo'lgan ism sizga yuk, bizga emas."
          },
          {
            "p": "Ma'no ham muhim. Koreys berilgan ismlari odatda bir ma'noga ega, shuning uchun biz sizga ismingiz qanday o'qilishi va nima uchun tanlanganini aytamiz — faqat ismning o'zi emas."
          }
        ]
      },
      {
        "title": "Biz ismning maqsadini so'raymiz",
        "blocks": [
          {
            "p": "Universitet hujjatlari uchun ism do'stlaringiz xonada baqiradigan ism yoki onlayn foydalanadigan nom bilan bir xil emas. Biz siz uni qanday ishlatmoqchi ekanligingizni so'raymiz va buni hisobga olamiz."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bu transliteratsiya emas",
        "blocks": [
          {
            "p": "Bu yerda biz **yangi koreys ismini** taklif qilamiz. Agar siz mavjud ismingizni Hangulda yozmoqchi bo'lsangiz — Michael ni 마이클 sifatida — [Hangul yozuv qo'llanmasi](/guide/how-hangul-transliteration) ga qarang."
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
    "summary": "Savollar, qaytarish, maxfiylik so'rovlari va xato xabarlarini qanday yuborish, kompaniya ma'lumotlarimiz bilan.",
    "backLabel": "Bosh sahifa",
    "sections": [
      {
        "title": "Bizga elektron pochta yuboring",
        "blocks": [
          {
            "p": "Yozing **{email}**. Biz ikki ish kunida javob beramiz. Buyurtma bilan bog'liq har qanday narsa — to'lov, qaytarish, olmagan fayl — iltimos, **buyurtma raqamingiz yoki to'lagan elektron pochtangizni** qo'shing."
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
              "**To'lovlar va qaytarish** — agar hujjat hech qachon tayyorlanmagan bo'lsa yoki olinadigan miqdor sizning buyurtmangizdan farq qilsa, biz to'liq qaytaramiz. [Qaytarish siyosati](/refund-policy) ga qarang.",
              "**Maxfiylik** — ma'lumotlaringizga kirish, to'g'rilash yoki o'chirish so'rovlari. [Maxfiylik siyosati](/privacy) ga qarang.",
              "**To'g'rilashlar** — agar hanja ma'nosi, o'qilishi yoki hisoblash noto'g'ri ko'rinsa, bizga ayting. Qaysi ekran va nima kiritganingizni aytish juda yordam beradi.",
              "**Boshqa narsalar** — hamkorliklar va matbuot ham shu manzilga boradi."
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
            "p": "Siz xabaringizda ism yoki tug'ilgan sana kiritishingiz shart emas. Bepul natijalar bizning serverlarimizda saqlanmaydi, shuning uchun biz ularni qayta qidirib topa olmaymiz — buyurtma raqami yetarli."
          }
        ]
      }
    ]
  },
  "guide/avoid": {
    "eyebrow": "An'analar",
    "title": "An'anaviy ravishda qochish kerak bo'lgan belgilar",
    "summary": "Bu qonun bilan taqiqlanmagan, lekin bu bir an'anadir. Biz qochilgan belgilar va ularning sabablari haqida yozganmiz, shuningdek, biz buni qanday hal qilamiz.",
    "backLabel": "Foydalanish qo'llanmasi",
    "sections": [
      {
        "title": "Qonuniy ravishda qabul qilinadigan belgilar",
        "blocks": [
          {
            "stats": [
              {
                "value": "{avoidTotal} belgi",
                "label": "Qochilgan belgilar to'plami"
              },
              {
                "value": "{avoidCommonlyUsed} belgi",
                "label": "Ular orasida, hali ham keng qo'llaniladigan belgilar"
              }
            ]
          },
          {
            "p": "Shaxsiy nomlar ro'yxatiga kiritilgan belgilar mavjud va **qonuniy ravishda qabul qilinadi**, lekin ular nomlar uchun mos kelmaydi."
          },
          {
            "p": "Asosiy fikr shundaki, **\"ortiqcha ma'no aslida nojo'ya hisoblanadi.\"** Bu juda qimmatbaho (珍 xazina, 寶 marvarid) deb hisoblangan belgilar, shuningdek, juda kuchli mavjudlikka ega deb hisoblangan belgilar (王 podshoh, 帝 imperator) va odamga mos kelmaydigan, masalan, osmon yoki ilohlar kabi belgilarni o'z ichiga oladi. Bu nomning odamni o'zidan o'zib ketishi mumkinligi haqidagi qadimiy tushunchani aks ettiradi."
          },
          {
            "p": "**Biroq, bu belgilar ishlatilmaydigan emas.** Bu qonuniy taqiqlash emas, balki an'ana, va an'analar mintaqaga, oilaga va avlodga qarab farq qiladi va vaqt o'tishi bilan o'zgarishi mumkin."
          },
          {
            "p": "Aslida, biz to'plagan {avoidTotal} belgilar orasida, {avoidCommonlyUsed} hali ham nomlarda keng qo'llaniladi. Ularning qochilganligi ma'lum bo'lsa-da, hali ham keng qo'llanilishi bu an'ananing mutlaq emasligini ko'rsatadi."
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
              "**Osmon va tabiat** — Quyosh, oy va osmon kabi odamga mos kelmaydigan juda ulug'vor narsalar",
              "**Podshohlar va aristokratiya** — Podshoh yoki imperator kabi maqomni anglatadigan belgilar",
              "**Ilohiy mavjudotlar** — Xudolar yoki ruhlar kabi muqaddas olamlarni anglatadigan belgilar",
              "**Mavsumlar va boshqalar** — Maxsus vaqtlar yoki holatlarga bog'liq belgilar",
              "**Hayvonlar** — Ajdaho yoki yo'lbars kabi kuchli energiyaga ega deb hisoblangan hayvonlar",
              "**Ortga qaytish** — Ortga qaytish ma'nosi juda katta yoki to'lib-toshgan belgilar"
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
        "title": "Kiritish ekranida mavjud bo'lgan variantlar",
        "blocks": [
          {
            "p": "**Qochilgan belgilarni nomzodlardan chiqarish** — Agar yoqilgan bo'lsa, ular to'liq chiqariladi. Agar o'chirilmagan bo'lsa, ular natijalarda \"An'anaviy ravishda qochish kerak\" yorlig'i bilan va sabab bilan birga qoladi."
          },
          {
            "p": "**Hatto keng qo'llaniladigan belgilarni ham chiqarish** — Bu qochish ro'yxatida bo'lgan, lekin aslida keng qo'llaniladigan belgilarni chiqaradi (圭·琳·玲·元·太·星·海 va boshqalar). Agar yoqilgan bo'lsa, nomzodlar sezilarli darajada kamayadi."
          },
          {
            "p": "Standart **o'chirish emas, balki faqat ko'rsatish**dir. Agar ular ro'yxatdan tinch olib tashlansa, bu belgini ishlatmoqchi bo'lganlarga u mavjud emasdek ko'rinishi mumkin."
          }
        ]
      },
      {
        "title": "Variantlarning yo'qolmasligini ta'minlash",
        "blocks": [
          {
            "p": "Agar o'sha sillab uchun ishlatiladigan belgilar qolmasa, biz o'sha sillab uchun chiqarishni olib tashlaymiz va nomzodlarni ko'rsatamiz. Biz buni umuman hech qanday variant bo'lmasligidan yaxshiroq deb hisoblaymiz."
          }
        ]
      }
    ]
  },
  "guide/how-korean-to-global": {
    "eyebrow": "Xizmat Asosi",
    "title": "Global nom konversiyasi uchun asos nima?",
    "summary": "Biz beshta nuqtai nazardan nomzodlarni taqdim etamiz, har bir tilning yozuv tizimlarini saqlab qolamiz va faqat mavjud nomlardan foydalanamiz.",
    "backLabel": "Foydalanish qo'llanmasi",
    "sections": [
      {
        "title": "Nomzodlar beshta nuqtai nazardan taqdim etiladi",
        "blocks": [
          {
            "p": "Bir nomni boshqa tilga tarjima qilishning bitta yo'li yo'q. Ovozni yoki ma'noni saqlashga qarab, mahalliy kontekstda tabiiy nomni tanlash yoki shaxsiylikni ustun qo'yish, javoblar farq qiladi. Shuning uchun, bitta variantni taqdim etish o'rniga, biz **beshta turli nuqtai nazardan bitta variantni taqdim etamiz**."
          },
          {
            "ul": [
              "**Ovoz saqlash varianti** — Asl nomning ovozini iloji boricha saqlaydi",
              "**Ma'no tarjima varianti** — Ismda mavjud bo'lgan ma'noni o'sha tilga tarjima qiladi",
              "**Ovoz va ma'no murosasi varianti** — Har biridan yarmi olinadi",
              "**Mahalliy haqiqiy variant** — O'sha madaniy kontekstda aslida keng qo'llaniladigan nomlarni tanlaydi",
              "**Shaxsiylik va brend yaratish varianti** — Esda qoladigan va o'ziga xos nomlarni ustun qo'yadi"
            ]
          },
          {
            "p": "Besh variant taqdim etilishi kafolatlanadi. Har bir kishining afzalliklari farq qilishi sababli, biz bitta to'g'ri javobni taqdim etishdan ko'ra tanlov imkoniyatini berishni yaxshiroq deb hisoblaymiz."
          }
        ]
      },
      {
        "title": "Har bir tilning yozuv tizimlari qoidalari farq qiladi",
        "blocks": [
          {
            "p": "Agar roman harflarini ishlatmaydigan tilga tarjima qilinsa, u o'sha tilning yozuv tizimida yozilishi kerak. Yapon tilida bu kana va kanji bo'ladi; rus, mo'g'ul va qozog' tilida bu kirill alifbosida; arab tilida bu arab yozuvida; va tay, kmer va hind tilida bu o'zlarining yozuv tizimlarida bo'ladi. Agar siz uni roman harflarida yozsangiz va \"yapon ismi\" deb atasangiz, bu mamlakatda ishlatilmaydi."
          },
          {
            "p": "Shuning uchun, har bir tilning yozuv tizimi uchun alohida qoidalarimiz bor va server natijalarni o'sha yozuv tizimida ekanligini ta'minlash uchun yana bir bor tekshiradi. Familiyalarning o'chirilishi yoki Hangulni aralashtirish kabi xatolar bu yerda filtrlashdan o'tadi."
          }
        ]
      },
      {
        "title": "Biz aslida ishlatiladigan nomlardan foydalanamiz",
        "blocks": [
          {
            "p": "O'sha mamlakatda mavjud bo'lmagan, lekin ishonarli ko'rinadigan nomlarni yaratmaslik uchun, biz variantlarimizni mavjud nomlarga asoslaymiz. Nomlar hujjatlarda va tanishtirishlarda ishlatiladi, shuning uchun agar mahalliy odam \"bunday nom yo'q\" deb o'ylasa, bu ishlatilmaydi."
          }
        ]
      },
      {
        "title": "Biz tanlov va tavsifni ajratamiz",
        "blocks": [
          {
            "p": "Biz beshta nomzodni aniqlash vazifasini har bir nomzodning batafsil tavsifidan alohida bajaramiz. Tavsif ko'p vaqt talab qilgani uchun, biz bu qismni alohida ajratamiz va bir vaqtning o'zida yaratamiz."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Nima uchun bu o'zgartirildi?",
        "blocks": [
          {
            "p": "Dastlab, biz beshta nuqtai nazarni alohida yaratdik. Bu tezroq edi, lekin **nomzodlar soni har safar farq qilar edi.** Har bir kishi nomzodlarni tanlaganda, takrorlanishlar yoki farqlar bo'lib, agar biri muvaffaqiyatsiz bo'lsa, o'sha nomzod butunlay yo'qolardi, natijada beshta emas, faqat ikki yoki uchta qolardi."
          },
          {
            "p": "Endi, biz nomzodlar to'plamini va nuqtai nazar taqsimotini bir marta belgilaganimiz sababli, **soni o'zgaruvchan emas.** Agar bir ta'rif muvaffaqiyatsiz bo'lsa, nomzodlar qoladi va qisqa ma'lumot bilan taqdim etiladi. Biz buni bir oz ko'proq vaqt olsada, doimiy ravishda bir xil sonni saqlash yaxshiroq deb hisoblaymiz."
          }
        ]
      }
    ]
  },
  "guide/how-hanja-meaning": {
    "eyebrow": "Xizmat Asosi",
    "title": "Hanja ma'nolarini moslashtirishning asosi nima?",
    "summary": "Birinchidan, tovushlar belgilangan va faqat o'sha tovush bilan ro'yxatdan o'tkazilishi mumkin bo'lgan hanja to'plangan, va ma'no bitta belgi sifatida emas, balki birlashma sifatida ko'riladi.",
    "backLabel": "Foydalanish Qo'llanmasi",
    "sections": [
      {
        "title": "Birinchidan, tovushlarni belgilang",
        "blocks": [
          {
            "p": "Agar siz \"지은\" deb belgilagan bo'lsangiz, unda **지** va **은** o'zgarmaydi. Biz hanja bilan mos kelishi uchun ismining tovushini o'zgartirmaymiz. Ism — bu umr bo'yi chaqiriladigan narsa, va biz tovush avval belgilanishi, keyin esa hanja kelishi kerak deb hisoblaymiz."
          },
          {
            "figure": "hanja-match-flow",
            "labels": {
              "soundStep": "① Tovushni belgilang",
              "soundNote": "Biz uni belgi bilan moslashtirish uchun hech qachon o'zgartirmaymiz",
              "tableStep": "② Rasmiy jadval bo'yicha filtrlash",
              "tableBody": "faqat o'sha o'qish bilan belgilangan belgilar",
              "tableNote": "{total} belgilar ichidan",
              "tableNoteNoCount": "faqat jadvalda mavjud belgilar",
              "combineStep": "③ Ikkalasini birga o'qish",
              "combineNote": "ma'no juftlik qanday o'qilishi bilan bog'liq, har bir belgi alohida emas"
            },
            "caption": "Bu nomzodlar qisqartirilishi tartibi. Bu avval hanja tanlash va tovushlarni moslashtirish haqida emas, balki tovushlar avval kelishi va faqat o'sha tovush bilan o'qilishi belgilangan belgilar nomzod bo'lishi kerak."
          }
        ]
      },
      {
        "title": "Faqat o'sha tovush bilan ro'yxatdan o'tkazilishi mumkin bo'lgan hanja to'plang",
        "blocks": [
          {
            "p": "Rasmiy nom-hanja jadvalida har bir belgi uchun ismlar ishlatilganda belgilangan o'qish mavjud. Faqat **지** va **은** sifatida o'qilishi belgilangan belgilar nomzod bo'ladi. Ma'no qanchalik yaxshi bo'lmasin, agar o'qish mos kelmasa, u o'sha ism uchun hanja bo'la olmaydi."
          },
          {
            "p": "Nomzodlarni tanlash doirasi Oliy Sud jadvalidan {characterTotal} belgilarni o'z ichiga oladi. Ushbu jadvalda mavjud bo'lmagan belgilar umuman taqdim etilmaydi — hatto ko'rsatilsa ham, ro'yxatdan o'tkazilishi mumkin emas."
          },
          {
            "p": "Oliy Sud tomonidan e'lon qilingan jadvaldagi belgilar soni biroz ko'proq. Jadvalda **standart belgi kodlari bo'lmagan belgilar** ham mavjud, bu belgilar ekranlarda va hujjatlarda to'g'ri ko'rsatilmaydi, shuning uchun bu belgilar nomzodlardan chiqarib tashlangan. Ushbu belgilar bilan ro'yxatdan o'tish mumkinligini aniqlash uchun tegishli organ bilan tekshirishingiz kerak."
          }
        ]
      },
      {
        "title": "Ma'no bitta belgi sifatida emas, balki birlashma sifatida ko'riladi",
        "blocks": [
          {
            "p": "Har bir alohida belgi yaxshi bo'lishi va ikkita belgi birlashganda o'qiladigan ma'no yaxshi bo'lishi farq qiladi. Ismlar birlashmalar sifatida o'qiladi, shuning uchun biz birgalikda birlashmalarni ko'rib chiqamiz. Agar siz kiritmoqchi bo'lgan yoki qochmoqchi bo'lgan maxsus ma'nolar bo'lsa, ular hisobga olinadi."
          },
          {
            "p": "Agar siz avlod belgisidan foydalanayotgan bo'lsangiz, o'sha belgi belgilangan va qolgan pozitsiyalardan birlashmalar qidiriladi. Familiya (성) rasmiy nom-hanja jadvali tomonidan cheklangan emas, shuning uchun u alohida ko'rib chiqiladi."
          }
        ]
      },
      {
        "title": "Biz ularni olib tashlamasdan, qochish odatlarini ko'rsatamiz",
        "blocks": [
          {
            "p": "Agar an'anaviy ravishda qochish kerak deb hisoblangan belgi nomzodlar ichida bo'lsa, biz uni olib tashlamaymiz, balki sababi bilan birga ko'rsatamiz. Bu an'ana masalasi, qonun emas, va siz uni butunlay kiritish ekranidan chiqarib tashlashni tanlashingiz mumkin. Batafsil ma'lumot uchun [An'anaviy Qochish Hanja](/guide/avoid) ga qarang."
          }
        ]
      },
      {
        "title": "Biz chiqarib tashlash sabablari haqida ham ma'lumot beramiz",
        "blocks": [
          {
            "p": "Biz ba'zi belgilar nomzodlardan chiqarib tashlangan sabablarini ko'rsatamiz. Agar biz faqat tanlanganlarni ko'rsatsak, siz \"nima uchun bu tanlandi?\" deb bilolmaysiz. Agar o'sha sillab uchun foydalanish mumkin bo'lgan belgilar qolmasa, biz o'sha sillab uchun chiqarib tashlashni olib tashlaymiz va nomzodlarni ko'rsatamiz."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Natijalarni qanday o'qish kerak",
        "blocks": [
          {
            "p": "Nomzodlar **nuqtai nazar, emas reytinglar**. Birinchisi eng yaxshi ism degani emas; ular turli nuqtai nazarlardan tanlangan. Ma'nolar birlashmasini birinchi o'ringa qo'yadiganlar, kamdan-kam uchraydigan belgilarni tanlaydiganlar va neytrallikni ta'kidlaydiganlar yonma-yon taqdim etiladi. Javob siz qaysi nuqtai nazarni qadrlayotganingizga qarab farq qiladi."
          }
        ]
      }
    ]
  },
  "guide/what-we-dont-use": {
    "eyebrow": "Bizning Standartlarimiz",
    "title": "Nimalarni Ishlatmaymiz",
    "summary": "Biz umumiy taqdir yoki raqamli ballarni belgilamaymiz, shuningdek, chiziq hisoblarini ishlatmaymiz. Beshta element faqat qo'shimcha o'q sifatida ishlatiladi. Mana sabablari.",
    "backLabel": "Foydalanish Qo'llanmasi",
    "sections": [
      {
        "title": "Umumiy taqdir yoki raqamli ballarni belgilamaslik sabablari",
        "blocks": [
          {
            "p": "Ismlarga baho berish uchun umumiy taqdir yoki raqamli ballarni belgilaydigan usullar mavjud. Naming-Link bu raqamlarni taqdim etmaydi. Sabablari to'rt xil."
          },
          {
            "p": "**Birinchidan, bitta standart yo'q.** Taqdirni hisoblash usullari maktabga qarab farq qiladi va bir xil ism bir standart bo'yicha ijobiy baholanib, boshqasida salbiy baholanishi mumkin. Qaysi biri to'g'ri ekanligini aniqlash uchun asosimiz yo'q. Bittasini javob sifatida taqdim etish halol emas."
          },
          {
            "p": "**Ikkinchidan, bu hisob-kitoblar chiziq hisoblariga tayanadi.** Biroq, Oliy Sud ma'lumotlari chiziq hisoblarini umuman o'z ichiga olmaydi. Bundan tashqari, chiziq hisoblari oddiy yoki soddalashtirilgan belgilar sifatida hisoblanganiga va qanday radikallar hisoblanganiga qarab farq qilishi mumkin. Asosiy raqamlar aniq belgilangan emas, shuning uchun ularning ustida qurilgan ballar ham aniq bo'lolmaydi."
          },
          {
            "p": "**Uchinchidan, raqamlar haqiqatdan ko'ra mustahkamroq ko'rinadi.** \"87 ball\" deganda, bu o'lchangan qiymat sifatida ko'rinadi, oddiy talqin emas. Ushbu ismlar o'sha raqamdan bosim his qilishi mumkin, haqiqatan ham muhim bo'lgan narsalarni chetga surib (Chaqirish yoqimli mi? Ma'no mos keladimi? Istalgan tilaklarni o'z ichiga oladimi?)."
          },
          {
            "p": "**To'rtinchidan, tasdiqlashning iloji yo'q.** Ism va inson hayoti o'rtasidagi munosabatni tasdiqlash mumkin emas. Noto'g'ri yoki to'g'ri deb aytib bo'lmaydigan narsani ballga aylantirish tasdiqlanmaydigan raqamni keltirib chiqaradi, garchi bu noto'g'ri bo'lmasa ham."
          },
          {
            "p": "Biz faqat **tasdiqlangan narsalarni** ishlatamiz. Oliy Sud rasmiy nom-hanja jadvali, har bir belgi uchun belgilangan o'qishlar va jadvalda keltirilgan ma'nolar. Buning o'rniga, biz ushbu nomzodning tanlanish sabablari va ba'zi belgilarni chiqarib tashlash sabablari haqida ma'lumot beramiz, **ballar o'rniga sabablarga** ko'rsatamiz."
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
            "p": "Chiziq hisoblarini ishlatish uchun biz boshqa joydan raqamlarni olishimiz kerak bo'ladi, lekin agar biz o'sha raqamlarning qayerdan kelganini va qanday mezonlar asosida hisoblanganini aniqlay olmasak, bu ismlarni asossiz raqamlarga asoslanib baholashni anglatadi. Biz tasdiqlanmagan qiymatlarga asoslangan ismlarni baholashdan voz kechishga qaror qildik."
          }
        ]
      },
      {
        "title": "Biz beshta elementi faqat ma'lumot sifatida ishlatamiz",
        "blocks": [
          {
            "figure": "five-elements",
            "labels": {
              "alt": "Beshta element doira ichida joylashgan: avlod qo'shnilar o'rtasida o'tadi, nazorat birini o'tkazib yuboradi",
              "wood": "daraxt",
              "fire": "olov",
              "earth": "yer",
              "metal": "metal",
              "water": "water",
              "saeng": "Avlod — har biri o'z qo'shnisini tug'diradi",
              "geuk": "Boshqarish — har biri o'ziga o'tkazganini cheklaydi"
            },
            "caption": "Besh element o'rtasidagi munosabatlar. Doira bo'ylab harakat qilish o'zaro avlod berishni (相生) ifodalaydi, birini o'tkazib yuborish va bosish esa o'zaro cheklashni (相剋) anglatadi. Biz bu munosabatni faqat nomzodlarni taqqoslash uchun qo'shimcha o'q sifatida ishlatamiz."
          },
          {
            "p": "Agar siz tug'ilgan oyingizni kiritgan bo'lsangiz, biz o'sha oyga asoslangan besh elementlarning soddalashtirilgan ma'lumotlarini nomzodlarni taqqoslash uchun qo'shimcha o'q sifatida ishlatamiz. Biroq, bu aniq saju tahlili emas va **nomlar insonning taqdirini yoki xarakterini belgilaydi, deb da'vo qilmaymiz.**"
          },
          {
            "p": "Oxirgi tanlovda bizning ustuvorligimiz ovozlar, ma'nolar birikmalari, oilaning ifodalamoqchi bo'lgan qadriyatlari va ro'yxatdan o'tkazilishi mumkinligi hisobga olinadi. Agar siz tug'ilgan oyingizni kiritmagan bo'lsangiz, biz besh elementlar ma'lumotlarini tahlildan to'liq chiqaramiz — noma'lum ma'lumotlar haqida tasodifiy taxminlar qilmaymiz."
          },
          {
            "p": "Agar siz aniq saju asosidagi tahlilni xohlasangiz, biz buni alohida batafsil hisobotda qamrab olamiz. Besh elementlarni bepul hanja moslashtirishda ustuvorlik bermasligimizning sababi, tug'ilish sanasi va vaqtiga asoslangan besh elementlardan kelib chiqadigan hukmlarni aniq deb ko'rsatishni xohlamasligimizdir."
          }
        ]
      }
    ]
  },
  "guide/what-we-sell": {
    "eyebrow": "To'lovli Mahsulotlar",
    "title": "To'lovli mahsulotlarga nimalar kiradi?",
    "summary": "Biz har bir mahsulot uchun bepul ko'rinadigan narsalarni va to'lov bilan keladigan qo'shimcha xususiyatlarni aniqlaymiz. Narxlar haqiqiy mahsulot sozlamalaridan olinadi.",
    "backLabel": "Foydalanish Qo'llanmasi",
    "sections": [
      {
        "title": "Bepul ko'rinadigan nimalar?",
        "blocks": [
          {
            "p": "Nom yaratish va natijalarni ko'rish **bepul**. Hech qanday a'zolik ro'yxatdan o'tkazish talab qilinmaydi. Siz hanja mos keladigan ma'nolarini, koreys nomlarini yaratishni, global nomlarni o'zgartirishni va Hangul talaffuz belgilanishini ko'rishingiz mumkin, shuningdek, ekranda tavsiya etilgan natijalar va ularning asoslari ko'rsatiladi."
          },
          {
            "p": "To'lovli mahsulotlar **allaqachon ekranda ko'rsatilgan narsalarni qayta sotmaydi.** Ular ko'proq nomzodlarni ochadi, ko'proq izohlar qo'shadi yoki saqlash yoki uzatish mumkin bo'lgan format yaratadi."
          }
        ]
      },
      {
        "title": "Barcha nomzodlarni to'liq ochish — {priceUnlock}",
        "blocks": [
          {
            "p": "Tavsiya etilgan natijalar nomzodlarni birma-bir ochish uchun tuzilgan. Reklamalarni ko'rishda, bir vaqtning o'zida bitta ochiladi, bu mahsulot esa **barcha qolgan nomzodlarni bir marta ochadi**."
          },
          {
            "p": "Agar siz shoshilmasangiz, xarid qilishingiz shart emas. **Reklamalar orqali ochilgan natijalar va to'lovdan olinganlar mutlaqo bir xil** — bu kutish masalasi, va to'lash yaxshiroq nomzodlarni keltirmaydi."
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
              "**Maksimal 5 hanja nomzodlari batafsil** — {priceFiveDetail}. Siz ekranda besh nomzod uchun izohlarni kengaytirishingiz mumkin. PDF mavjud emas.",
              "**Maksimal 10 hanja nomzodlari kengaytirilgan batafsil PDF** — {priceTenDetail}. Nomzodlar soni o'nga oshadi va PDF hujjati qo'shiladi.",
              "**Maksimal 10 hanja nomzodlari saju va besh elementlar bo'yicha keng qamrovli hisobot** — {priceTenSaju}. Yuqoridagilarga qo'shimcha ravishda, bu tug'ilish sanasidan kelib chiqadigan saju diagrammasini va besh elementlarning kuchlarini o'z ichiga oladi, nima uchun ma'lum bir hanja o'sha nomga mos kelishini besh elementlar nuqtai nazaridan o'rganadi."
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Hanja o'zi jamoatchilikka ochiq ma'lumotdir",
        "blocks": [
          {
            "p": "Foydalanish mumkin bo'lgan hanja va ularning ma'nolari Koreya Oliy Sudining rasmiy nom-hanja jadvalidan kelib chiqadi va bularning barchasi xizmatning qo'llanma hujjatlarida jamoatchilikka ochiqdir. To'lovli mahsulotlar hanja ma'lumotlarini emas, balki **uni nomga muvofiq tanlash va izohlash jarayonini** sotadi."
          }
        ]
      },
      {
        "title": "Global Foydalanuvchilar uchun PDFlar",
        "blocks": [
          {
            "p": "Chet el nomlarini koreys nomlariga aylantirish yoki nomlarni Hangulda yozish uchun mavjud hujjatlar. Narxlar to'lov ekranida ko'rsatilgan miqdorlarga mos keladi."
          },
          {
            "ul": [
              "**Koreys Nomi Premium Hisoboti** — 3 sahifa. Kaligrafiya qopqog'ini, nomning ma'nosi va tanlash sababi, shuningdek, saju va besh elementlar talqinini o'z ichiga oladi.",
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
            "p": "**Bu yerda, mahsulotlar yetkazib berishni o'z ichiga oladi.** Oldingi narsalardan farqli o'laroq, ishlab chiqarish va yetkazib berish vaqt talab etadi va qabul qilish manzili talab qilinadi. Yetkazib berish ma'lumotlari faqat buyurtma jarayonida ishlatiladi va qonuniy saqlash uchun, jarayon tugagach, siyosatda belgilangan muddatdan so'ng yo'q qilinadi."
          }
        ]
      },
      {
        "title": "Xarid qilishdan oldin bilishingiz kerak bo'lgan narsalar",
        "blocks": [
          {
            "p": "**Raqamli mahsulotlar to'lov amalga oshirilgandan so'ng darhol taqdim etiladi.** Siz yuklab olish boshlanmasidan oldin har qanday vaqtda bekor qilishingiz va to'liq qaytarib olishingiz mumkin, lekin yuklab olish tugagach, oddiy fikr o'zgarishi sababli qaytish cheklangan (Elektron tijorat to'g'risidagi qonunning 17-moddasi, 2-band). Ushbu shart to'lov ekranida alohida kelishilgan."
          },
          {
            "p": "**Natijalar mazmuni bo'yicha shikoyatlar qaytarish uchun sabab bo'lmaydi.** Biroq, agar hujjat yaratilmagan bo'lsa, fayl ochilmasa yoki to'lov miqdori buyurtmadan farq qilsa, bu qayta chiqarish yoki to'liq qaytarish sifatida ko'rib chiqiladi."
          },
          {
            "p": "Batafsil shartlar [Qaytarish Siyosati](/refund-policy) va [Narxlar Qo'llanmasi](/pricing) da bayon etilgan. Ushbu matn nimalar kiritilganini ko'rsatadi va qonuniy shartlar ushbu ikki hujjatda ustuvor hisoblanadi."
          }
        ]
      }
    ]
  },
  "guide/hanja-basics": {
    "eyebrow": "Tizim",
    "title": "Rasmiy nom-hanja nima?",
    "summary": "Bolalar nomlari uchun foydalanish mumkin bo'lgan hanja Koreya Oliy Sudida jadvalda belgilangan. Bu jadval nima va nima uchun belgilanganligini qisqacha bayon etadi.",
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
                "value": "{syllableCount} silabalar",
                "label": "Hangul silabalari kiritilgan"
              },
              {
                "value": "{effectiveDate}",
                "label": "Jadvalga murojaat sanasi"
              }
            ]
          },
          {
            "p": "Siz bolalar nomi uchun har qanday belgini ishlata olmaysiz. **Tug'ilish ro'yxatiga kiritish uchun foydalanish mumkin bo'lgan hanja Koreya Oliy Sudida jadvalda belgilangan, va faqat o'sha jadvaldagi belgilar nomlar uchun hanja sifatida ro'yxatdan o'tkazilishi mumkin.** Bu rasmiy nom-hanja deb ataladi."
          }
        ]
      },
      {
        "title": "Nima uchun belgilangan?",
        "blocks": [
          {
            "p": "Hanja juda ko'p. Ularning ichida ba'zilari yoqimsiz ma'nolarga ega, ba'zilari endi ishlatilmaydi va tanish o'qishlari yo'q, ba'zilari esa kompyuterlarda umuman ko'rsatilmaydi. Agar bunday belgilar nomga kiritilsa, oxir-oqibat bu nomni umr bo'yi ishlatadigan shaxsga yuk bo'ladi. Nomlar turli joylarda, masalan, yashash ro'yxati, pasportlar, banklar va maktablarda buzilishi yoki boshqacha o'qilishi mumkin, bu esa shaxsni o'z nomini tushuntirishga majbur qiladi."
          },
          {
            "p": "Shuning uchun, ismlarda foydalanish mumkin bo'lgan hanja doirasini oldindan belgilash usuli tanlangan. Bu cheklovchi qoidalar emas, balki inson hayoti davomida ismlarning muammosiz ishlatilishini ta'minlash uchun mexanizmdir."
          }
        ]
      },
      {
        "title": "Ta'riflar qaysi asosda berilgan?",
        "blocks": [
          {
            "p": "Oliy sud rasmiy nom-hanja jadvalini tuzadi, zaruratga qarab yangilanadi va belgilar qo'shiladi."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ushbu ekranda foydalanilgan materiallar",
        "blocks": [
          {
            "p": "{publisher} rasmiy nom-hanja ma'lumotlari · {effectiveDate} holatiga ko'ra"
          },
          {
            "p": "{characterTotal} belgi {syllableCount} Hangul silabalarini qamrab oladi. Asl faylning hash qiymati ham saqlanadi, shuning uchun jadval o'zgarganda, qachon va nima o'zgarganini tekshirish mumkin."
          }
        ]
      },
      {
        "title": "Oliy sud tomonidan e'lon qilingan belgilar soni biz ko'rsatganlardan farq qiladi",
        "blocks": [
          {
            "p": "**Oliy sud tomonidan e'lon qilingan rasmiy nom-hanja {announcedTotal} belgidan iborat, biz taqdim etayotgan nomzodlar esa {characterTotal} belgidan iborat.** Bu farqni yashirish uchun hech qanday sabab yo'q, shuning uchun biz uni ochiq aytamiz."
          },
          {
            "p": "Agar siz Oliy sudning so'rov ma'lumotlarini tekshirsangiz, unda {listedTotal} belgi mavjud. Ularning ichida, **{excludedNoStandardCode} belgi** — **global umumiy belgi kodida (Unicode) joyi bo'lmagan belgilar.** Oliy sud tizimi bunday belgilarni faqat o'z tizimida ishlaydigan raqamlar bilan muomala qiladi va ular ekranda **rasmlar** sifatida ko'rsatiladi."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Boshqa shriftlarni qo'shish muammoni hal qilmaydi",
        "blocks": [
          {
            "p": "Bir belgi ekranda ko'rinishi uchun, u **dunyo tomonidan kelishilgan raqamga ega bo'lishi kerak**, va shrift o'sha raqamga mos keladigan tasvirni o'z ichiga olishi kerak. Raqami bo'lmagan belgilar hech qanday shriftga kiritilishi mumkin emas. Qancha shrift qo'shsak ham, bu belgilar bo'sh kvadratlar sifatida ko'rinadi."
          }
        ]
      },
      {
        "title": "Shuning uchun, ular nomzodlardan olib tashlandi",
        "blocks": [
          {
            "p": "**Ko'rsatilmaydigan belgilar bilan ro'yxatni to'ldirish foydali emas.** Ushbu belgilarning ko'p ma'nolari ham bizning ma'lumotlarimizda bo'sh, bu esa ismlarni ma'nolar asosida tanlash usuliga mos kelmaydi."
          },
          {
            "p": "**Eng muhim sabab esa ismi ishlatiladigan shaxsga bog'liq.** Ism — bu inson hayoti davomida turli joylarda kiritiladigan qiymat. Belgilari bo'lmagan belgilar banklar, maktablar, shifoxonalar yoki pasportlar tizimlarida, hatto tug'ilish ro'yxatidan o'tgandan keyin ham kiritilishi yoki chop etilishi mumkin emas. Shuning uchun, bunday belgilarni tavsiya qila olmaymiz."
          },
          {
            "p": "Biroq, **biz bu belgilarni ishlatilishi mumkin yoki yo'qligini belgilamaymiz.** Ular Oliy sud jadvalidagi belgilar bo'lgani uchun, ro'yxatga olish o'zi mumkin. Agar siz haqiqatan ham o'sha belgini ishlatmoqchi bo'lsangiz, Oliy sudning elektron oila aloqalari ro'yxatga olish tizimida to'g'ridan-to'g'ri tekshiring va **haqiqiy ishlatilishi haqida tegishli organ bilan so'rang.**"
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
            "p": "Shuning uchun, biz jadvalda bo'lmagan belgilarni nomzod sifatida taqdim etmaymiz. Ekranda ko'rinadigan barcha hanja tug'ilish ro'yxatiga olish uchun haqiqatan ham ishlatilishi mumkin bo'lgan belgilar. To'liq ro'yxat [Rasmiy Nom-Hanja To'liq Ro'yxati](/guide/hanja) da mavjud."
          }
        ]
      }
    ]
  },
  "guide/hanja": {
    "eyebrow": "Ro'yxat",
    "title": "Rasmiy Nom Hanja To'liq Ro'yxati",
    "summary": "Biz tug'ilish ro'yxatiga olish uchun ishlatilishi mumkin bo'lgan hanja ni boshlang'ich unli bilan tartibga solganmiz. Har bir belgi uchun ismda ishlatilganda belgilangan o'qilishi va ma'nosi ko'rinadi.",
    "backLabel": "Foydalanish Qo'llanmasi",
    "sections": [
      {
        "title": "Boshlang'ich Unli Bo'yicha Qidirish",
        "slot": "chosung",
        "blocks": [
          {
            "p": "Bu Oliy sudning rasmiy nom-hanja jadvalidan {characterTotal} belgini o'z ichiga oladi. Har bir belgi ismda ishlatilganda **o'qilishi** va ma'nosi bilan birga keladi. Jadvalga kiritilmagan belgilar ism hanja sifatida ro'yxatga olinmaydi, shuning uchun siz bu yerda keltirilgan belgilar orasidan tanlashingiz kerak."
          },
          {
            "p": "Pastdagi tugmadagi ikkita raqam **o'sha boshlang'ich unli bilan bog'liq belgilar soni** va **qamrab olingan silabalar soni** ni ko'rsatadi."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Agar qidirayotgan belgi ro'yxatda bo'lmasa",
        "blocks": [
          {
            "p": "Oliy sud tomonidan e'lon qilingan belgilar soni {announcedTotal}, lekin bu ro'yxat {characterTotal} belgini o'z ichiga oladi. **{excludedNoStandardCode} belgi farqi — bu universal belgi kodida joyi bo'lmagan belgilar tufayli hech qanday shriftda ko'rsatilmaydigan belgilar.** Oliy sud tizimi bunday belgilarni rasmlar sifatida ko'rsatadi."
          },
          {
            "p": "Biz buni batafsil bayon etdik va nima uchun bunday belgilarni tavsiya qilmaymiz [Rasmiy Nom Hanja nima?](/guide/hanja-basics) da. Siz bunday belgilarni haqiqiy ishlatilishi uchun tegishli organ bilan tekshirishingiz kerak."
          }
        ]
      },
      {
        "title": "Kam Belgilarga Ega Boshlang'ich Unlilar",
        "slot": "tiny",
        "blocks": [
          {
            "p": "Quyidagi boshlang'ich unlilar juda kam rasmiy nom hanja ga ega, shuning uchun biz ularni alohida sahifasiz bu yerda ko'rsatdik."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ushbu Ro'yxatni Qanday O'qish",
        "blocks": [
          {
            "p": "Masalan, **伽 · 가 · 절** uchun, ismda \"伽\" ishlatilganda, u **가** deb o'qiladi va \"ma'bad\" degan ma'noni anglatadi. Bir xil hanja uchun ham, ismda ishlatilganda o'qilishi jadval tomonidan belgilangan va boshqa usulda ishlatilishi mumkin emas."
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
  "intro": "Foydalanish shartlaringizga o'zgartirishlar — narxlar, siyosatlar — bu yerda kuchga kirishidan oldin e'lon qilinadi. Ichki yaxshilanishlar ro'yxatga olinmaydi: bu yerda ko'rinadiganlar siz bilishingiz kerak bo'lganlardir.",
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
        "Savollar, qaytarishlar, maxfiylik so'rovlari va xato hisobotlari endi bitta joyga boradi. Pastki qismdagi aloqa sahifasi bizning elektron pochta manzilimiz va kompaniya ma'lumotlarimizni ko'rsatadi.",
        "Bizning javoblarimiz qaysi asosda berilganligi va biz qasddan qilmaydigan narsalar haqida ma'lumotlar haqidagi sahifada yozilgan."
      ]
    },
    "2026-08-01-pdf-language": {
      "title": "PDF hisobotlari arab va khmer tillarida ingliz tilida chiqariladi",
      "body": [
        "Agar siz xizmatdan arab yoki khmer tilida foydalansangiz, sotib olgan PDFingiz ingliz tilida tayyorlanadi. Hujjatlarimizni joylashtiradigan vosita hali o'sha ikki yozuvda paragraflarni o'rnatolmaydi.",
        "Ekran sizning tilingizda qoladi va ismingiz hujjat ichida o'z yozuvingizda chop etiladi.",
        "To'lovdan oldin bir xil eslatma paydo bo'ladi. Qandaydir vosita bu yozuvlarni qo'llab-quvvatlaganda, biz bu yerda aytib o'tamiz."
      ]
    },
    "2026-08-01-payments-preparing": {
      "title": "To'lovlar hali ochiq emas",
      "body": [
        "Ism yaratish va natijani o'qish bugun bepul, va hisob qaydnomasi kerak emas.",
        "To'langan narsalar hali sotuvda emas. Narxlar sahifasida ko'rsatilgan miqdorlar sotuvlar ochilganda amal qiladi."
      ]
    }
  }
} satisfies NoticeCopy;
