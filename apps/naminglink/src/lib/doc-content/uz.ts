import type { DocPage, NoticeCopy } from "./types";
import type { DocKey } from "./ko";

/** O‘zbekcha — `scripts/translate-doc-content.ts`가 만든다. 손으로 고치지 말 것. */
export const UZ_DOCS = {
  "about": {
    "eyebrow": "Haqida",
    "title": "Naming-Link haqida",
    "summary": "Biz sizga koreyscha ismlarni tanlash va tushunishda yordam beramiz. Natijalarimizni qanday asosda shakllantirishimiz va nima qilmasligimiz haqida ma'lumot.",
    "backLabel": "Bosh sahifa",
    "sections": [
      {
        "title": "Biz nima qilamiz",
        "blocks": [
          {
            "p": "Naming-Link sizga **koreyscha ismlarni tanlash va tushunishda yordam beradi** — bolangizning ismidagi hanja, chet elda ishlatish uchun koreyscha ism, o'z ismingizning Hangul yozuvi va muhr yoki chop etilgan hisobot kabi esdaliklar."
          },
          {
            "p": "Natijalaringizni ko'rish **bepul va hisob qaydnomasi talab qilmaydi.** To'langan narsalar ekranda ko'rsatilganlarni qayta sotmaydi: ular ko'proq nomzodlarni ochadi, yozma tahlil qo'shadi yoki natijani saqlashingiz mumkin bo'lgan narsaga aylantiradi."
          }
        ]
      },
      {
        "title": "Bizning javoblarimiz qanday asosda shakllanadi",
        "blocks": [
          {
            "p": "Hanja **Koreya Oliy sudining rasmiy ism-hanja jadvalidan** kelib chiqadi. Har bir belgi ismlar uchun belgilangan o'qilishi bor va jadvaldan tashqaridagi belgilar ro'yxatga olinmaydi. Biz o'sha ro'yxatga qo'shmaymiz yoki sevimlilarni tanlamaymiz."
          },
          {
            "p": "Saju va besh element raqamlari **koreyscha lunisolal taqvimidan** hisoblanadi, tug'ilish vaqti tug'ilgan joy uchun haqiqiy quyosh vaqti bilan to'g'rilanadi. O'qish an'anaviy manba sifatida xizmat qiladi, bashorat emas."
          },
          {
            "p": "Yozma tushuntirishlar AI tomonidan ishlab chiqariladi. **Ixtiro qilishdan** saqlanish uchun modelga faqat sizning ma'lumotingiz va bizning ma'lumotlarimiz beriladi va ichida qolish uchun ko'rsatma beriladi. Qo'llanmalar buni batafsil tushuntiradi."
          }
        ]
      },
      {
        "title": "Biz nima qilmaymiz",
        "blocks": [
          {
            "ul": [
              "**Biz bashorat qilmaymiz.** Bu yerda hech narsa omad, boylik yoki himoya va'da qilmaydi.",
              "**Biz sizning ismingizni saqlamaymiz.** Bepul natijalar hech qachon bizning serverlarimizga yozilmaydi va to'langan hujjatlar nusxasiz yetkaziladi.",
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
            "p": "Kompaniya ma'lumotlari va biz bilan bog'lanish usullari [aloqa sahifasida](/contact) mavjud, shu jumladan qaytarish, maxfiylik so'rovlari va xato xabarlarini."
          }
        ]
      }
    ]
  },
  "guide/reading": {
    "eyebrow": "O'qishlar",
    "title": "Har bir belgi uchun belgilangan o'qish",
    "summary": "Rasmiy jadval faqat belgilarni ro'yxatga olish bilan cheklanmaydi. U shuningdek, har bir belgi ismlar uchun ishlatilganda qanday o'qilishi kerakligini belgilaydi.",
    "backLabel": "Qo'llanma",
    "sections": [
      {
        "title": "Har bir belgi uchun belgilangan o'qish",
        "blocks": [
          {
            "p": "Ism-hanja jadvali faqat qaysi belgilar ishlatilishi mumkinligini belgilamaydi. **U shuningdek, har bir belgi ismlar uchun paydo bo'lganda qanday o'qilishi kerakligini belgilaydi.** Ushbu belgilangan o'qish ro'yxatga olishda asos bo'ladi."
          },
          {
            "p": "Ko'p hanja bir nechta mumkin bo'lgan o'qishlarga ega. Biroq, ism hujjatlarda yoziladi va ovoz chiqariladi, shuning uchun u aniq bitta o'qishga ega bo'lishi kerak. Shuning uchun jadval har bir belgiga ismlar uchun o'qishini belgilaydi va boshqa o'qish ro'yxatga olinmaydi."
          }
        ]
      },
      {
        "title": "Shuning uchun ovoz birinchi o'rinda",
        "blocks": [
          {
            "p": "Shu sababdan Naming-Link ovozni hanja qidirishdan oldin belgilaydi. Agar ism \"지은\" bo'lsa, ma'nosi faqat **지** o'qishiga tayinlangan belgilar va **은** o'qishiga tayinlangan belgilar orasidan tanlanishi mumkin."
          },
          {
            "p": "Qanday yaxshi ma'no bo'lmasin, o'qishi mos kelmaydigan belgi ushbu ism uchun ishlatilmaydi. Biz shuningdek, ismingizni belgi bilan moslashtirish uchun hech qachon o'zgartirmaymiz — ism umr bo'yi aytiladi va ovoz birinchi o'rinda belgilangan, hanja esa keyin keladi."
          }
        ]
      },
      {
        "title": "Familiya ismlari bu jadvaldan tashqarida",
        "blocks": [
          {
            "p": "Bu ko'pincha noto'g'ri tushuniladi. **Jadval berilgan ismni boshqaradi, familiya ism emas.** Familiya ismi allaqachon familiya ro'yxatiga asoslanadi, shuning uchun ba'zi odamlar ism-hanja jadvalida bo'lmagan belgilarni ishlatadilar."
          },
          {
            "p": "Shu sababdan Naming-Link familiya hanjasini boshqacha ko'radi. Biz faqat sizga familiya topishda yordam beramiz va jadvaldan tashqaridagi belgiga ega bo'lgan odamlar uchun to'g'ridan-to'g'ri kiritish maydoni qoldiramiz. Namgung va Seonwoo kabi ikki sillabali familiyalar ham xuddi shunday kiritiladi."
          }
        ]
      }
    ]
  },
  "guide/how-hangul-transliteration": {
    "eyebrow": "Qanday ishlaydi",
    "title": "Biz sizning ismingizni Hangulda qanday yozamiz",
    "summary": "Chet el ismini Hangulda yozishda qanday tovushlarni tanlaymiz va nega hanja qo'shmaymiz.",
    "backLabel": "Qo'llanma",
    "sections": [
      {
        "title": "Biz tovushni, ma'noni emas, olib boramiz",
        "blocks": [
          {
            "p": "Ushbu xizmat **sizning ismingizni** Hangulda yozadi. Bu sizga koreyscha ism bermaydi. Michael bo'ladi 마이클 — bir xil ism, koreyslar uni o'qishi va aytishi uchun yozilgan. Biz uni o'xshash ma'noga ega bo'lgan koreyscha ismga almashtirmaymiz."
          },
          {
            "p": "Agar sizga koreyscha ism kerak bo'lsa, **bu boshqa xizmatdir.** Biri sizning ismingizni saqlaydi va faqat yozuvni o'zgartiradi; ikkinchisi yangi ism taklif qiladi."
          }
        ]
      },
      {
        "title": "Koreyscha tovushlar yo'q",
        "blocks": [
          {
            "p": "Har bir tilda koreys tilida yo'q tovushlar mavjud — f, v, z, th va koreys tilida farqlanmaydigan unli tovushlar. Bular uchun biz **koreys tilida gapiruvchi odamning haqiqatan ham aytadigan** so'zini yozamiz, asl fonetikani har bir belgiga mos ravishda yozish o'rniga. Maqsad — ishlatiladigan yozuv, eng texnik jihatdan to'g'ri bo'lgan emas."
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
            "p": "Yagona to'g'ri javob yo'q. Asl tovushga eng yaqin yozuv, Koreyada eng ko'p ishlatiladigan yozuv va eng oson yoziladigan yozuv ko'pincha uch xil narsadir. Shuning uchun biz ularni birga ko'rsatamiz va ularni ajratadigan narsalarni aytamiz."
          },
          {
            "p": "Agar ularning hech biri to'g'ri his qilmasa, siz kerakli tovush haqida bir ko'rsatma qo'shishingiz mumkin va yana bir marta ishga tushirishingiz mumkin — masalan, ma'lum bir sillaba boshqacha yozilishi kerakligini aytish."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bu yerda hanja yo'q",
        "blocks": [
          {
            "p": "Biz transliteratsiyaga hanja qo'shmaymiz. Hanja ma'no olib keladi va bu jarayon tovush haqida. Faqat tovushga mos keladigan belgilarni moslashtirish sizga hech qachon so'ramagan ma'noga olib kelishi mumkin."
          }
        ]
      }
    ]
  },
  "guide/how-global-to-korean": {
    "eyebrow": "Qanday ishlaydi",
    "title": "Biz koreyscha ismni qanday quramiz",
    "summary": "Biz mavjud familiyalardan tanlaymiz, ismlarni aytish va yozish qanchalik osonligini baholaymiz va ismning maqsadini so'raymiz.",
    "backLabel": "Qo'llanma",
    "sections": [
      {
        "title": "Biz familiya nomidan boshlaymiz",
        "blocks": [
          {
            "p": "Koreyada familiya birinchi o'rinda turadi va berilgan nomlardan farqli o'laroq, u erkin ixtiro qilinmaydi — siz uni meros qilib olasiz. Shuning uchun biz faqat koreyslar haqiqatan ham bor bo'lgan familiyalarni taklif qilamiz. Bizning standart bazamiz **20 ta eng keng tarqalgan familiya**, bu esa aholi sonining taxminan 80% ni qamrab oladi."
          },
          {
            "p": "Agar sizning familiyangiz haqiqiy koreys familiyasiga tovush jihatidan mos kelsa — Wang bilan 왕, Ye bilan 예 — biz uni birinchi o'ringa qo'yamiz. Asl ismingizga bog'lanish tasavvuri, tasodifiy tanlangan familiyadan ko'ra muhimroq."
          },
          {
            "p": "Siz familiyani o'zingiz tanlashingiz mumkin yoki bizdan birini tavsiya qilishimizni so'rashingiz mumkin. Har holda, bu **mavjud bo'lgan familiya** bo'ladi."
          }
        ]
      },
      {
        "title": "Aytilishi oson, yozilishi oson",
        "blocks": [
          {
            "p": "Bu Koreyada sizni haqiqatan ham chaqiradigan ism, shuning uchun biz birinchi navbatda koreyslar uni bir marta eshitib yozib olishlarini tekshiramiz. Har safar imlo qilishni talab qiladigan ism — bu sizning yukingiz, bizning emas."
          },
          {
            "p": "Ma'no ham muhim. Koreys berilgan ismlari odatda bir ma'noga ega, shuning uchun biz sizga ism qanday o'qilishi va nima uchun tanlanganini aytamiz — faqat ismning o'zi emas."
          }
        ]
      },
      {
        "title": "Biz ism nima uchun ekanligini so'raymiz",
        "blocks": [
          {
            "p": "Universitet hujjatlari uchun ism, do'stlaringiz xonada baqiradigan ism yoki onlayn foydalanadigan ism bilan bir xil emas. Biz siz uni qanday ishlatmoqchi ekanligingizni so'raymiz va buni hisobga olamiz."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bu transliteratsiya emas",
        "blocks": [
          {
            "p": "Bu yerda biz **yangi koreys ismini** taklif qilamiz. Agar siz mavjud ismingizni Hangul'da yozmoqchi bo'lsangiz — Michael sifatida 마이클 — [Hangul imlo qo'llanmasi](/guide/how-hangul-transliteration) ga qarang."
          }
        ]
      }
    ]
  },
  "notice": {
    "eyebrow": "E'lonlar",
    "title": "E'lonlar",
    "summary": "Biz xizmatdan foydalanishingizga ta'sir etadigan o'zgarishlarni e'lon qilamiz.",
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
            "p": "Yozing **{email}**. Biz ikki ish kuni ichida javob beramiz. Buyurtma bilan bog'liq har qanday narsalar — to'lov, qaytarish, siz olmagan fayl — iltimos, **buyurtma raqamingiz yoki to'lagan elektron pochtangizni** qo'shing."
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
              "**To'lovlar va qaytarish** — agar hujjat hech qachon tayyorlanmagan bo'lsa, yoki olinadigan summa sizning buyurtmangizdan farq qilsa, biz to'liq qaytaramiz. [Qaytarish siyosati](/refund-policy) ga qarang.",
              "**Maxfiylik** — ma'lumotlaringizga kirish, tuzatish yoki o'chirish so'rovlari. [Maxfiylik siyosati](/privacy) ga qarang.",
              "**Tuzatishlar** — agar bir hanja ma'nosi, o'qilishi yoki hisoblash xato ko'rinsa, bizga ayting. Qaysi ekran va nima kiritganingizni eslatish juda yordam beradi.",
              "**Boshqa narsalar** — hamkorliklar va matbuot ham shu manzilga yuboriladi."
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
              "**Pochta orqali savdo raqami** — {mailOrderNumber}",
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
            "p": "Xabaringizda ism yoki tug'ilgan sanani kiritishingiz shart emas. Bepul natijalar hech qachon serverlarimizda saqlanmaydi, shuning uchun biz ularni qayta topa olmaymiz — buyurtma raqami etarli."
          }
        ]
      }
    ]
  },
  "guide/avoid": {
    "eyebrow": "An'analar",
    "title": "An'anaviy ravishda qochilgan belgilar",
    "summary": "Bu qonun bilan taqiqlanmagan, lekin an'ana. Biz qochilgan narsalar va nima uchun, shuningdek, biz buni qanday hal qilayotganimiz haqida yozganmiz.",
    "backLabel": "Foydalanish qo'llanmasi",
    "sections": [
      {
        "title": "Yuridik jihatdan qabul qilinadigan belgilar",
        "blocks": [
          {
            "stats": [
              {
                "value": "{avoidTotal} belgi",
                "label": "Qochilgan belgilar ro'yxati"
              },
              {
                "value": "{avoidCommonlyUsed} belgi",
                "label": "Ular orasida, hali ham keng qo'llaniladigan belgilar"
              }
            ]
          },
          {
            "p": "Shaxsiy ismlar uchun belgilar ro'yxatiga kiritilgan va **yuridik jihatdan qabul qilinadigan**, lekin ismlar uchun mos kelmaydigan belgilar mavjud."
          },
          {
            "p": "Asosiy fikr shundaki, **\"ortiqcha ma'no aslida nojo'ya hisoblanadi.\"** Bu juda qimmatbaho deb hisoblangan belgilarni (珍 xazina, 寶 marvarid), juda kuchli mavjudlikka ega deb qaraladigan belgilarni (王 podshoh, 帝 imperator) va odamning o'zida mujassam bo'lishi uchun juda ulug'vor deb hisoblangan belgilarni, masalan, osmon yoki xudolarni o'z ichiga oladi. Bu eski cheklov hissini aks ettiradi, chunki ism odamni o'zidan o'zib ketishi mumkin deb hisoblanadi."
          },
          {
            "p": "**Biroq, bu belgilar ishlatilmaydi deb hisoblanmaydi.** Bu qonuniy taqiqlash emas, balki an'ana, va an'analar mintaqa, oila va avlodlarga qarab farq qiladi va vaqt o'tishi bilan o'zgarishi mumkin."
          },
          {
            "p": "Aslida, biz to'plagan {avoidTotal} belgi ichida, {avoidCommonlyUsed} hali ham ismlarda keng qo'llaniladi. Ularning qochish kerak deb hisoblangan bo'lsa-da, keng qo'llanilishi bu an'anani mutlaq emasligini ko'rsatadi."
          }
        ]
      },
      {
        "title": "Qanday Kategoriyalar Mavjud?",
        "blocks": [
          {
            "p": "Hozirda to'plangan belgilar yetti kategoriya bo'yicha taqsimlangan."
          },
          {
            "ul": [
              "**Xazinalar va Ob'ektlar** — To'g'ridan-to'g'ri boylik yoki narsalarga ishora qiluvchi belgilar",
              "**Osmon va Tabiyat** — Quyosh, oy va osmon kabi inson uchun juda ulug'vor deb hisoblangan narsalar",
              "**Shohlar va Aslzodalar** — Shahzoda yoki imperator kabi maqomni bildiruvchi belgilar",
              "**Qudratli Odamlar** — Xudolar yoki ruhlar kabi muqaddas sohalarga ishora qiluvchi belgilar",
              "**Mavsumlar va Boshqalar** — Muayyan vaqtlar yoki holatlarga bog'liq belgilar",
              "**Hayvonlar** — Ajdaho yoki yo'lbars kabi kuchli energiyaga ega deb hisoblangan hayvonlar",
              "**O'ta Ko'pchilik** — Haddan tashqari katta yoki to'lib-toshgan ma'nolarga ega deb hisoblangan belgilar"
            ]
          }
        ]
      },
      {
        "title": "Belgilarni O'zingiz Qo'shishingiz yoki O'chirishingiz Mumkin",
        "blocks": [
          {
            "p": "Biz bu belgilarni tasodifan o'chirmaymiz. **Biz nom beruvchi uchun ularni qanday boshqarishni tanlash uchun kiritish ekranida ikkita variant taqdim etdik.**"
          }
        ]
      },
      {
        "kind": "note",
        "title": "Kiritish Ekranida Mavjud Variantlar",
        "blocks": [
          {
            "p": "**Qochish kerak bo'lgan belgilarni nomzodlardan chiqarish** — Agar yoqilgan bo'lsa, ular to'liq chiqariladi. Agar o'chirilmagan bo'lsa, ular natijalarda \"An'anaviy ravishda qochish kerak\" yorlig'i bilan va sabab bilan birga qoladi."
          },
          {
            "p": "**Hatto Keng Qo'llaniladigan Belgilarni Ham O'chirish** — Bu qochish ro'yxatida bo'lgan, lekin aslida keng qo'llaniladigan belgilarni chiqaradi (圭·琳·玲·元·太·星·海 va boshqalar). Agar yoqilgan bo'lsa, nomzodlar sezilarli darajada kamayadi."
          },
          {
            "p": "Standart **o'chirish emas, balki faqat ko'rsatish**dir. Agar ular ro'yxatdan tinch olib tashlansa, bu belgini ishlatmoqchi bo'lganlar uchun u mavjud emasdek ko'rinishi mumkin."
          }
        ]
      },
      {
        "title": "Variantlarning Yo'qolmasligini Ta'minlash",
        "blocks": [
          {
            "p": "Agar o'sha sillab uchun foydalanish mumkin bo'lgan belgilar qolmasa, biz o'sha sillab uchun chiqarishni olib tashlaymiz va nomzodlarni ko'rsatamiz. Biz buni umuman hech qanday variant bo'lmasligidan yaxshiroq deb hisoblaymiz."
          }
        ]
      }
    ]
  },
  "guide/how-korean-to-global": {
    "eyebrow": "Xizmat Asosi",
    "title": "Global Ism O'zgartirishning Asosi Nima?",
    "summary": "Biz har bir tilning yozuv tizimlarini saqlab, faqat mavjud ismlardan nomzodlar taqdim etamiz.",
    "backLabel": "Foydalanish Qo'llanmasi",
    "sections": [
      {
        "title": "Nomzodlar Besh Perspektivdan Taqdim Etiladi",
        "blocks": [
          {
            "p": "Ismni boshqa tilga tarjima qilishning bitta yo'li yo'q. Ovozni yoki ma'noni saqlashga qarab, mahalliy kontekstda tabiiy ism tanlash yoki shaxsiylikni ustun qo'yish, javoblar farq qiladi. Shuning uchun, bitta variantni taqdim etish o'rniga, biz **besh turli perspektivdan bitta variant taqdim etamiz**."
          },
          {
            "ul": [
              "**Ovozni Saqlash Varianti** — Asl ismining ovozini iloji boricha saqlaydi",
              "**Ma'no Tarjima Varianti** — Ismda mavjud bo'lgan ma'noni o'sha tilga tarjima qiladi",
              "**Ovoz va Ma'no Kompromis Varianti** — Har ikkala tomondan yarim oladi",
              "**Mahalliy Haqiqiy Varianti** — O'sha madaniy kontekstda aslida keng qo'llaniladigan ismlarni tanlaydi",
              "**Shaxsiylik va Brending Varianti** — Esda qoladigan va ajralib turadigan ismlarni ustun qo'yadi"
            ]
          },
          {
            "p": "Besh variant taqdim etilishi kafolatlanadi. Har bir insonning afzalliklari farq qilishi sababli, biz bitta to'g'ri javobni taqdim etishdan ko'ra tanlovlarni taqdim etishni yaxshiroq deb hisoblaymiz."
          }
        ]
      },
      {
        "title": "Har Bir Tilda Turli Yozuv Tizimi Qoidalari Bor",
        "blocks": [
          {
            "p": "Agar roman harflarini ishlatmaydigan tilga tarjima qilinayotgan bo'lsa, u o'sha tilning yozuv tizimida yozilishi kerak. Yapon tilida bu kana va kanji bo'ladi; rus, mo'g'ul va qozog' tilida esa, kirill bo'ladi; arab tilida arab yozuvi; tay, khmer va hind tillarida esa, o'z yozuvlari bo'ladi. Agar siz uni roman harflarida yozsangiz va \"yapon ismi\" deb atasangiz, u o'sha mamlakatda ishlatilmaydi."
          },
          {
            "p": "Shuning uchun, har bir tilning yozuv tizimi uchun alohida qoidalarimiz bor va server natijalarni o'sha yozuv tizimida ekanligini yana bir bor tekshiradi. Familiyalarning o'chirilishi yoki Hangulni aralashtirish kabi xatolar bu yerda filtrlanadi."
          }
        ]
      },
      {
        "title": "Biz Haqiqatan Mavjud Ismlarni Ishlatamiz",
        "blocks": [
          {
            "p": "Haqiqatan mavjud bo'lmagan, lekin ishonarli ko'rinadigan ismlar yaratmaslik uchun, biz variantlarimizni mavjud ismlar asosida quramiz. Ismlar hujjatlarda va tanishtirishlarda ishlatiladi, shuning uchun agar mahalliy odam \"bunday ism yo'q\" deb o'ylasa, u ishlatilmaydi."
          }
        ]
      },
      {
        "title": "Biz Tanlov va Tavsifni Ajratamiz",
        "blocks": [
          {
            "p": "Biz beshta nomzodni aniqlash vazifasini har bir nomzodni batafsil tavsiflash vazifasidan alohida bajaramiz. Tavsif ko'p vaqt talab qilishi sababli, biz bu qismini alohida ajratamiz va bir vaqtning o'zida yaratamiz."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Nima Uchun Bu O'zgartirildi?",
        "blocks": [
          {
            "p": "Dastlab, biz beshta perspektivani alohida yaratdik. Bu tezroq edi, lekin **nomzodlar soni har safar farq qilardi.** Har bir kishi nomzodlarni tanlaganda, takrorlanishlar yoki farqlar bo'lib, agar biri muvaffaqiyatsiz bo'lsa, o'sha nomzod butunlay yo'qolardi, natijada beshta o'rniga faqat ikki yoki uchta qolardi."
          },
          {
            "p": "Endi, biz nomzodlar to'plamini va perspektivalar taqsimotini bir vaqtning o'zida aniqlaymiz, **soni belgilangan.** Agar bir tavsif muvaffaqiyatsiz bo'lsa, nomzodlar qoladi va qisqa ma'lumot bilan taqdim etiladi. Biz buni har doim bir xil sonni saqlash yaxshiroq deb hisoblaymiz, hatto bu biroz ko'proq vaqt olsa ham."
          }
        ]
      }
    ]
  },
  "guide/how-hanja-meaning": {
    "eyebrow": "Xizmat Asosi",
    "title": "Hanja ma'nolarini moslashtirishning asosi nima?",
    "summary": "Birinchidan, ovozlar belgilangan va faqat o'sha ovoz bilan ro'yxatdan o'tkazilishi mumkin bo'lgan hanja to'plangan, va ma'no bitta belgidan ko'ra kombinatsiya sifatida ko'riladi.",
    "backLabel": "Foydalanish Qo'llanmasi",
    "sections": [
      {
        "title": "Birinchidan, ovozlarni belgilash",
        "blocks": [
          {
            "p": "\"지은\" deb belgilagan bo'lsangiz, unda **지** va **은** o'zgarmaydi. Biz ismning ovozini hanja bilan moslashtirish uchun o'zgartirmaymiz. Ism — bu umr bo'yi chaqiriladigan narsa, va biz ovoz birinchi belgilanishi, so'ngra hanja bo'lishi kerak deb hisoblaymiz."
          },
          {
            "figure": "hanja-match-flow",
            "labels": {
              "soundStep": "① Ovozlarni belgilang",
              "soundNote": "Biz uni belgi bilan moslashtirish uchun hech qachon o'zgartirmaymiz",
              "tableStep": "② Rasmiy jadval bo'yicha filtrlang",
              "tableBody": "faqat o'sha o'qishga tayinlangan belgilar",
              "tableNote": "jadvaldagi barcha {total} belgi",
              "tableNoteNoCount": "faqat jadvalda mavjud belgilar",
              "combineStep": "③ Ikkalasini birga o'qish",
              "combineNote": "ma'no juftlik qanday o'qilsa, shunday, har bir belgi alohida emas"
            },
            "caption": "Bu nomzodlar qanday toraytirilishi tartibi. Bu avval hanja tanlash va tovushlarni moslashtirish haqida emas, balki tovushlar avval keladi va faqat o'sha tovush bilan o'qilishi belgilangan belgilar nomzodlar bo'ladi."
          }
        ]
      },
      {
        "title": "O'sha tovush bilan ro'yxatdan o'tishi mumkin bo'lgan hanja to'plang",
        "blocks": [
          {
            "p": "Rasmiy nom-hanja jadvalida har bir belgi uchun nomlarda ishlatilganda belgilangan o'qish mavjud. Faqat **지** va **은** sifatida o'qilishi belgilangan belgilar nomzodlar bo'ladi. Ma'no qanchalik yaxshi bo'lmasin, agar o'qish mos kelmasa, bu nom uchun hanja bo'la olmaydi."
          },
          {
            "p": "Nomzodlarni tanlash doirasi Oliy Sud jadvalidan {characterTotal} belgilar. Ushbu jadvalda mavjud bo'lmagan belgilar umuman taqdim etilmaydi — ko'rsatilsa ham, ro'yxatdan o'tkazilishi mumkin emas."
          },
          {
            "p": "Oliy Sud tomonidan e'lon qilingan jadvaldagi belgilar soni biroz ko'p. Jadvalda **standart belgi kodlari bo'lmagan belgilar** ham mavjud, bu belgilar ekranlarda va hujjatlarda to'g'ri ko'rsatilmaydi, shuning uchun bu belgilar nomzodlardan chiqarib tashlangan. Ushbu belgilar bilan ro'yxatdan o'tishingiz mumkinligini tegishli organ bilan tekshirishingiz kerak."
          }
        ]
      },
      {
        "title": "Ma'no birlashma sifatida ko'riladi, bitta belgi sifatida emas",
        "blocks": [
          {
            "p": "Har bir alohida belgi ma'nosi yaxshi bo'lishi va ikkita belgi birlashganda o'qilgan ma'no yaxshi bo'lishi farq qiladi. Ismlar birlashmalar sifatida o'qiladi, shuning uchun biz birgalikda birlashmalarni ko'rib chiqamiz. Agar siz kiritmoqchi bo'lgan yoki qochmoqchi bo'lgan aniq ma'nolar bo'lsa, ular hisobga olinadi."
          },
          {
            "p": "Agar siz avlod belgisini ishlatayotgan bo'lsangiz, bu belgi belgilangan va qolgan pozitsiyalardan birlashmalar qidiriladi. Familiya (성) rasmiy nom-hanja jadvali tomonidan cheklangan emas, shuning uchun u alohida ko'rib chiqiladi."
          }
        ]
      },
      {
        "title": "Biz qochish odatlarini ko'rsatamiz, lekin ularni olib tashlamaymiz",
        "blocks": [
          {
            "p": "Agar an'anaviy ravishda qochilishi kerak bo'lgan belgi nomzodlar ichiga kiritilgan bo'lsa, biz uni olib tashlamaymiz, balki sababi bilan birga ko'rsatamiz. Bu an'ana masalasi, qonun emas, va siz uni butunlay kiritish ekranidan chiqarib tashlashni tanlashingiz mumkin. Qo'shimcha ma'lumot uchun [An'anaviy Qochiladigan Hanja](/guide/avoid) ga qarang."
          }
        ]
      },
      {
        "title": "Biz sizga chiqarib tashlash sabablari haqida ham ma'lumot beramiz",
        "blocks": [
          {
            "p": "Biz ba'zi belgilar nomzodlardan chiqarib tashlangan sabablarini ko'rsatamiz. Agar biz faqat tanlanganlarni ko'rsatsak, siz \"nega bu?\" deb bilolmaysiz. Agar o'sha silab uchun foydalanish mumkin bo'lgan belgilar qolmasa, biz o'sha silab uchun chiqarib tashlashni olib tashlaymiz va nomzodlarni ko'rsatamiz."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Natijalarni qanday o'qish",
        "blocks": [
          {
            "p": "Nomzodlar **nuqtai nazar, reyting emas**. Birinchi biri eng yaxshi nom demak emas; ular turli nuqtai nazarlardan tanlangan. Ma'nolar birlashmasini birinchi o'rinda qo'yadiganlar, kamdan-kam uchraydigan belgilarni tanlaydiganlar va neytrallikni ta'kidlaydiganlar yonma-yon taqdim etiladi. Javob siz qaysi nuqtai nazarni qadrlashingizga qarab farq qiladi."
          }
        ]
      }
    ]
  },
  "guide/what-we-dont-use": {
    "eyebrow": "Bizning Standartlar",
    "title": "Biz Nimalarni Ishlatmaymiz",
    "summary": "Biz umumiy baxt yoki raqamli ballarni belgilamaymiz, shuningdek, chiziq hisoblarini ishlatmaymiz. O'n ikki element faqat qo'shimcha o'lchov sifatida ishlatiladi. Mana sabablar.",
    "backLabel": "Foydalanish Qo'llanmasi",
    "sections": [
      {
        "title": "Umumiy baxt yoki raqamli ballarni belgilamaslik sabablari",
        "blocks": [
          {
            "p": "Ismlarga umumiy baxt yoki raqamli ballarni belgilash usullari mavjud. Naming-Link bu raqamlarni taqdim etmaydi. Sabablari to'rt xil."
          },
          {
            "p": "**Birinchidan, bitta standart yo'q.** Baxtni hisoblash usullari maktabga qarab farq qiladi va bir xil nom bir standart bo'yicha ijobiy baholanishi mumkin, boshqasi esa salbiy. Qaysi biri to'g'ri ekanligini aniqlash uchun asosimiz yo'q. Bittasini javob sifatida taqdim etish samimiy emas."
          },
          {
            "p": "**Ikkinchidan, bu hisob-kitoblar chiziq hisoblariga tayanadi.** Biroq, Oliy Sud ma'lumotlari chiziq hisoblarini umuman o'z ichiga olmaydi. Bundan tashqari, chiziq hisoblari oddiy yoki soddalashtirilgan belgilar sifatida hisobga olinganiga va qanday radikallar hisobga olinganiga qarab farq qilishi mumkin. Asosiy raqamlar aniq belgilangan emas, shuning uchun ularga asoslangan ballar ham aniq bo'lmaydi."
          },
          {
            "p": "**Uchinchidan, raqamlar haqiqatdan ko'ra mustahkamroq ko'rinadi.** \"87 ball\" deganda, bu o'lchangan qiymat kabi ko'rinadi, oddiy talqin emas. Ushbu nomlar o'sha raqamdan bosim ostida bo'lishi mumkin, haqiqatan ham muhim bo'lgan narsalarni chetga surib qo'yadi (Uni chaqirish yoqimli mi? Ma'no mos keladimi? Istalgan tilaklarni o'z ichiga oladimi?)."
          },
          {
            "p": "**To'rtinchidan, tasdiqlash usuli yo'q.** Ism va inson hayoti o'rtasidagi munosabatni tasdiqlash mumkin emas. To'g'ri yoki noto'g'ri deb aytib bo'lmaydigan narsani ballga aylantirish tasdiqlanmaydigan raqamni keltirib chiqaradi, garchi bu noto'g'ri bo'lmasa ham."
          },
          {
            "p": "Biz faqat **tasdiqlangan** narsalarni ishlatamiz. Oliy Sud rasmiy nom-hanja jadvali, har bir belgi uchun belgilangan o'qishlar va jadvalda keltirilgan ma'nolar. Buning o'rniga, biz ushbu nomzodning nima uchun tanlanganligi va ba'zi belgilarni nima uchun chiqarib tashlanganligi haqida sabablari bilan taqdim etamiz, **ballar o'rniga sabablarga** ko'rsatamiz."
          }
        ]
      },
      {
        "title": "Biz chiziq hisoblarini ishlatmaymiz",
        "blocks": [
          {
            "p": "Oliy Sud tomonidan taqdim etilgan rasmiy nom-hanja ma'lumotlari chiziq hisoblarini o'z ichiga olmaydi. Biz olgan {characterTotal} belgilar ichida, **birorta belgi ham chiziq hisoblariga ega emas.**"
          },
          {
            "p": "Chiziq hisoblarini ishlatish uchun, biz boshqa joydan raqamlarni olishimiz kerak bo'ladi, lekin agar biz bu raqamlarning qayerdan kelganini va qanday mezonlar asosida hisoblanganini aniqlay olmasak, bu ismlarni asossiz raqamlarga asoslangan holda baholashni anglatadi. Biz tasdiqlanmagan qiymatlar asosida ismlarni baholashga qaror qildik."
          }
        ]
      },
      {
        "title": "Biz o'n ikki elementlarni faqat ma'lumot sifatida ishlatamiz",
        "blocks": [
          {
            "figure": "five-elements",
            "labels": {
              "alt": "O'n ikki elementlar doira ichida joylashgan: avlod qo'shnilar o'rtasida o'tadi, nazorat birini o'tkazib yuboradi",
              "wood": "daraxt",
              "fire": "olov",
              "earth": "yer",
              "metal": "metall",
              "water": "suv",
              "saeng": "Avlod — har biri qo'shnisini tug'diradi",
              "geuk": "Nazorat — har biri o'tkazib yuborganini cheklaydi"
            },
            "caption": "O'n ikki elementlar o'rtasidagi munosabatlar. Doira bo'ylab harakat qilish o'zaro avlodni (相生) anglatadi, birini o'tkazib yuborish va bosim o'tkazish esa o'zaro cheklashni (相剋) anglatadi. Biz ushbu munosabatni faqat nomzodlarni taqqoslash uchun qo'shimcha o'lchov sifatida ishlatamiz."
          },
          {
            "p": "Agar siz tug'ilgan oyingizni kiritgan bo'lsangiz, biz o'sha oyga asoslangan o'n ikki elementlarning soddalashtirilgan ma'lumotlarini nomzodlarni taqqoslash uchun qo'shimcha o'lchov sifatida ishlatamiz. Biroq, bu aniq saju tahlili emas va **biz ismlar insonning taqdirini yoki xarakterini belgilaydi deb da'vo qilmaymiz.**"
          },
          {
            "p": "Oxirgi tanlovda bizning ustuvorligimiz tovushlar, ma'nolar birlashmasi, oilaning etkazmoqchi bo'lgan qiymatlari va haqiqatan ham ro'yxatdan o'tkazilishi mumkinligi. Agar siz tug'ilgan oyingizni kiritmagan bo'lsangiz, biz o'n ikki elementlar ma'lumotlarini tahlildan butunlay chiqarib tashlaymiz — biz noma'lum ma'lumotlar haqida tasodifiy taxminlar qilmaymiz."
          },
          {
            "p": "Agar siz aniq saju asosidagi tahlilni xohlasangiz, biz buni alohida batafsil hisobotda qamrab olamiz. Bizning bepul hanja moslashtirishda o'n ikki elementlarga ustuvorlik bermasligimizning sababi, tug'ilish sanasi va vaqtiga asoslangan o'n ikki elementlardan kelib chiqadigan hukmlarni aniq deb taqdim etishni istamasligimizdir."
          }
        ]
      }
    ]
  },
  "guide/what-we-sell": {
    "eyebrow": "Pullik Mahsulotlar",
    "title": "Pullik mahsulotlarga nimalar kiradi?",
    "summary": "Biz har bir mahsulot uchun bepul ko'rinadigan narsalarni va to'lov bilan keladigan qo'shimcha funksiyalarni aniqlaymiz. Narxlar haqiqiy mahsulot sozlamalaridan olinadi.",
    "backLabel": "Foydalanish Qo'llanmasi",
    "sections": [
      {
        "title": "Bepul ko'rinadigan narsalar nimalar?",
        "blocks": [
          {
            "p": "Ism yaratish va natijalarni ko‘rish **bepul**. A'zolik ro'yxatdan o'tish talab qilinmaydi. Siz hanja'ning mos keluvchi ma'nolarini, koreyscha ismlar yaratishni, global ism konversiyasini va Hangul talaffuz belgilanishini, shuningdek, tavsiya etilgan natijalar va ularning asoslarini ekranda ko‘rishingiz mumkin."
          },
          {
            "p": "To'langan mahsulotlar **ekranda allaqachon ko'rsatilgan narsalarni qayta sotmaydi.** Ular ko'proq nomzodlarni ochadi, ko'proq izohlar qo'shadi yoki saqlash yoki uzatish mumkin bo'lgan format yaratadi."
          }
        ]
      },
      {
        "title": "Barcha nomzodlarning to'liq ochilishi — {priceUnlock}",
        "blocks": [
          {
            "p": "Tavsiya etilgan natijalar nomzodlarni birma-bir ochish uchun tuzilgan. Reklamalarni ko'rishda, bitta ochiladi, bu mahsulot esa **barcha qolgan nomzodlarni bir vaqtning o'zida ochadi**."
          },
          {
            "p": "Agar siz shoshilmasangiz, xarid qilishingiz shart emas. **Reklamalar orqali ochilgan natijalar va to'lov orqali olingan natijalar mutlaqo bir xil** — bu faqat kutish masalasi, va to'lash yaxshiroq nomzodlarni keltirmaydi."
          }
        ]
      },
      {
        "title": "Hanja Tafsilotlari — Uch Bosqich",
        "blocks": [
          {
            "p": "Hangul ismi bilan biriktiriladigan hanja tanlash jarayonida uchta batafsil mahsulot mavjud."
          },
          {
            "ul": [
              "**Maksimal 5 hanja nomzodlari batafsil** — {priceFiveDetail}. Siz ekranda beshta nomzod uchun izohlarni kengaytirishingiz mumkin. PDF mavjud emas.",
              "**Maksimal 10 hanja nomzodlari kengaytirilgan batafsil PDF** — {priceTenDetail}. Nomzodlar soni o'n taga oshadi va PDF hujjati qo'shiladi.",
              "**Maksimal 10 hanja nomzodlari saju va beshta elementlar bo'yicha keng qamrovli hisobot** — {priceTenSaju}. Yuqoridagilarga qo'shimcha ravishda, bu tug'ilgan sana asosida olingan saju jadvalini va beshta elementlar kuchlarini o'z ichiga oladi, bu esa ma'lum bir hanja nima uchun o'sha ismga mos kelishini beshta elementlar nuqtai nazaridan o'rganadi."
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Hanja o'zi jamoatga ochiq ma'lumotdir",
        "blocks": [
          {
            "p": "Foydalanish mumkin bo'lgan hanja va ularning ma'nolari Koreya Oliy Sudi tomonidan belgilangan rasmiy ism-hanja jadvalidan kelib chiqadi va barchasi xizmat ko'rsatish hujjatlarida jamoatga ochiqdir. To'langan mahsulotlar hanja ma'lumotlarini emas, balki **uni ismga mos ravishda tanlash va tushuntirish jarayonini** sotadi."
          }
        ]
      },
      {
        "title": "Global Foydalanuvchilar uchun PDFlar",
        "blocks": [
          {
            "p": "Tashqi ismlarni koreyscha ismlarga aylantirish yoki ismlarni Hangulda yozish uchun mavjud hujjatlar. Narxlar to'lov ekranida ko'rsatilgan miqdorlarga mos keladi."
          },
          {
            "ul": [
              "**Koreyscha Ism Premium Hisoboti** — 3 sahifa. Kaligrafiya qopqog'ini, ismingizning ma'nosini va tanlash sababini, shuningdek, saju va beshta elementlar talqinini o'z ichiga oladi.",
              "**Hangul Ism San'ati** — 2 sahifa. Kaligrafiya qopqog'ini va talaffuz qo'llanmasini o'z ichiga oladi. Bu ismingizni Hangulda qanday yozishni va qanday talaffuz qilishni ko'rsatadi."
            ]
          }
        ]
      },
      {
        "title": "Ism Möhri",
        "blocks": [
          {
            "p": "Ekranda yaratilgan ismingizni jismoniy möhri sifatida o'yib, sizga yuboramiz. Narxlar modelga qarab farq qiladi — dumaloq muhr {priceStampRound}, kvadrat muhr {priceStampSquare}, ebony muhr {priceStampEbony}. Xalqaro yetkazib berish ham mavjud."
          },
          {
            "p": "**Bu yerda mahsulotlar yetkazib berishni o'z ichiga oladi.** Oldingi narsalardan farqli o'laroq, ishlab chiqarish va yetkazib berish vaqt talab qiladi va qabul qilish manzili talab etiladi. Yetkazib berish ma'lumotlari faqat buyurtma qayta ishlash va qonuniy saqlash uchun ishlatiladi, va qayta ishlash tugagach, siyosatda belgilangan muddatdan so'ng yo'q qilinadi."
          }
        ]
      },
      {
        "title": "Xarid qilishdan oldin bilishingiz kerak bo'lgan narsalar",
        "blocks": [
          {
            "p": "**Raqamli mahsulotlar to'lov amalga oshirilgandan so'ng darhol taqdim etiladi.** Siz yuklab olish boshlanmasdan oldin istalgan vaqtda bekor qilishingiz va to'liq qaytarib olishingiz mumkin, lekin yuklab olish tugagach, oddiy fikr o'zgarishi sababli qaytish cheklangan (Elektron tijorat to'g'risidagi qonunning 17-moddasi, 2-band). Ushbu shart to'lov ekranida alohida kelishilgan."
          },
          {
            "p": "**Natijalar mazmuni bo'yicha shikoyatlar qaytarish uchun sabab emas.** Biroq, agar hujjat yaratilmagan bo'lsa, fayl ochilmasa yoki to'lov miqdori buyurtmadan farq qilsa, bu qayta chiqarish yoki to'liq qaytarish sifatida ko'rib chiqiladi."
          },
          {
            "p": "Batafsil shartlar [Qaytarish Siyosati](/refund-policy) va [Narxlar Qo'llanmasi](/pricing) da bayon etilgan. Ushbu matn nimalar kiritilganini ko'rsatadi va qonuniy shartlar ushbu ikki hujjatda ustunlikka ega."
          }
        ]
      }
    ]
  },
  "guide/hanja-basics": {
    "eyebrow": "Tizim",
    "title": "Rasmiy ism-hanja nima?",
    "summary": "Bolalar ismlari uchun foydalanish mumkin bo'lgan hanja Koreya Oliy Sudi tomonidan jadvalda belgilangan. Bu jadval nima ekanligini va nima uchun belgilanganini qisqacha bayon etadi.",
    "backLabel": "Foydalanish Qo'llanmasi",
    "sections": [
      {
        "title": "Rasmiy ism-hanja nima?",
        "blocks": [
          {
            "stats": [
              {
                "value": "{characterTotal} belgi",
                "label": "Rasmiy ism-hanja"
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
            "p": "Siz bolalar ismi uchun har qanday belgini ishlata olmaysiz. **Tug'ilish ro'yxatiga qo'yish uchun foydalanish mumkin bo'lgan hanja Koreya Oliy Sudi tomonidan jadvalda belgilangan, va faqat o'sha jadvaldagi belgilar ismlar uchun hanja sifatida ro'yxatga olinishi mumkin.** Bu rasmiy ism-hanja deb ataladi."
          }
        ]
      },
      {
        "title": "Nima uchun belgilangan?",
        "blocks": [
          {
            "p": "Hanja juda ko'p. Ularning ichida ba'zilari noxush ma'nolarga ega, ba'zilari endi ishlatilmaydi va o'qilishi noma'lum, ba'zilari esa umuman kompyuterlarda ko'rsatilmaydi. Agar bunday belgilar ismingizga kiritilsa, oxir-oqibat buni o'z umrida ishlatadigan shaxsga yuk bo'ladi. Ismlar turli joylarda, masalan, yashash ro'yxati, pasportlar, banklar va maktablarda buzilishi yoki boshqacha o'qilishi mumkin, bu esa shaxsni o'z ismini tushuntirishga majbur qiladi."
          },
          {
            "p": "Shuning uchun, ismlarda foydalanish mumkin bo'lgan hanja doirasini oldindan belgilash usuli tanlangan. Bu cheklovli qoidalar bo'lishdan ko'ra, shaxsning umr bo'yi muammosiz foydalanishi uchun ismlarni ta'minlash mexanizmi hisoblanadi."
          }
        ]
      },
      {
        "title": "Ta'riflar uchun asos nima?",
        "blocks": [
          {
            "p": "Oliy sud rasmiy ism-hanja jadvalini belgilaydi, zaruratga qarab yangilanadi va belgilar qo'shiladi."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ushbu ekran uchun ishlatiladigan materiallar",
        "blocks": [
          {
            "p": "{publisher} rasmiy ism-hanja ma'lumotlari · {effectiveDate} holatiga ko'ra"
          },
          {
            "p": "{characterTotal} belgilar {syllableCount} Hangul silabalarini qamrab oladi. Asl faylning hash qiymati ham saqlanadi, shuning uchun jadval o'zgarganda, qachon va nima o'zgarganini tekshirish mumkin."
          }
        ]
      },
      {
        "title": "Oliy sud tomonidan e'lon qilingan belgilar soni biz ko'rsatganlardan farq qiladi",
        "blocks": [
          {
            "p": "**Oliy sud tomonidan e'lon qilingan rasmiy ism-hanja {announcedTotal} belgi, biz taklif qilayotgan nomzodlar esa {characterTotal} belgidir.** Ushbu farqni yashirish uchun hech qanday sabab yo'q, shuning uchun biz buni ochiq aytamiz."
          },
          {
            "p": "Agar siz Oliy sudning so'rov ma'lumotlarini tekshirsangiz, unda {listedTotal} belgilar mavjud. Ularning ichida **{excludedNoStandardCode} belgilar** **global umumiy belgilar kodida (Unicode) joyi bo'lmagan belgilar.** Oliy sudning tizimi bunday belgilarni faqat o'z tizimida ishlaydigan raqamlar bilan muomala qiladi va ular ekranda **rasmlar** sifatida ko'rsatiladi."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Qo'shimcha shriftlar muammoni hal qilmaydi",
        "blocks": [
          {
            "p": "Bir belgi ekranda ko'rinishi uchun, u **dunyo tomonidan kelishilgan raqamga** ega bo'lishi kerak va shrift o'sha raqamga mos keladigan rasmni o'z ichiga olishi kerak. Raqami bo'lmagan belgilar hech qanday shriftga kiritilmaydi. Qancha shrift qo'shsak ham, bu belgilar bo'sh kvadratlar sifatida ko'rinadi."
          }
        ]
      },
      {
        "title": "Shuning uchun, ular nomzodlardan olib tashlangan",
        "blocks": [
          {
            "p": "**Ko'rsatilmaydigan belgilar bilan ro'yxatni to'ldirish foydali emas.** Ushbu belgilarning ko'p ma'nolari bizning ma'lumotlarimizda ham bo'sh, bu esa xizmatning ma'nolarga asoslangan ismlar tanlash uslubiga mos kelmaydi."
          },
          {
            "p": "**Muhim sabab, ismini ishlatadigan shaxs bilan bog'liq.** Ism, inson hayoti davomida turli joylarda kiritiladigan qiymatdir. Belgilarsiz belgilar banklar, maktablar, kasalxonalar yoki pasportlar tizimlarida kiritilishi yoki chop etilishi mumkin emas, hatto tug'ilish ro'yxatidan o'tgandan keyin ham. Shuning uchun, bunday belgilarni tavsiya qila olmaymiz."
          },
          {
            "p": "Biroq, **bunday belgilarni ishlatish mumkin yoki yo'qligini biz belgilamaymiz.** Ular Oliy sudning jadvalidagi belgilar bo'lgani uchun, ro'yxatga olish o'zi mumkin bo'lishi mumkin. Agar siz haqiqatan ham o'sha belgini ishlatmoqchi bo'lsangiz, iltimos, Oliy sudning elektron oila aloqalari ro'yxatga olish tizimida to'g'ridan-to'g'ri tekshiring va **haqiqiy ishlatilishi haqida tegishli organ bilan so'rang.**"
          }
        ]
      },
      {
        "title": "Agar siz jadvalda bo'lmagan hanja ishlatmoqchi bo'lsangiz",
        "blocks": [
          {
            "p": "Siz ularni ishlata olmaysiz. Aniqroq aytganda, bunday belgilar ism uchun hanja sifatida ro'yxatga olinmaydi va ism faqat Hangulda yoziladi. Agar siz hanja ishlatmoqchi bo'lsangiz, jadvaldan tanlashingiz kerak."
          },
          {
            "p": "Shuning uchun, biz jadvalda bo'lmagan belgilarni nomzod sifatida taqdim etmaymiz. Ekranda ko'rinadigan barcha hanja tug'ilish ro'yxatiga haqiqatan ham ishlatilishi mumkin bo'lgan belgilar. To'liq ro'yxat [Rasmiy Ism-Hanja To'liq Ro'yxati](/guide/hanja) da mavjud."
          }
        ]
      }
    ]
  },
  "guide/hanja": {
    "eyebrow": "Ro'yxat",
    "title": "Rasmiy Ism Hanja To'liq Ro'yxati",
    "summary": "Biz tug'ilish ro'yxatiga ishlatilishi mumkin bo'lgan hanjalarni bosh tovush bo'yicha tartibladik. Har bir belgi uchun ismda ishlatilganda belgilangan o'qish va ma'noni ko'rishingiz mumkin.",
    "backLabel": "Foydalanish Qo'llanmasi",
    "sections": [
      {
        "title": "Bosh Tovush Bo'yicha Qidirish",
        "slot": "chosung",
        "blocks": [
          {
            "p": "Bu Oliy sudning rasmiy ism-hanja jadvalidan {characterTotal} belgini o'z ichiga oladi. Har bir belgi ismda ishlatilganda **o'qilishi** va uning ma'nosi kiritilgan. Jadvalda bo'lmagan belgilar ism hanja sifatida ro'yxatga olinmaydi, shuning uchun siz bu yerda keltirilgan belgilarni tanlashingiz kerak."
          },
          {
            "p": "Pastdagi tugmadagi ikki raqam **ushbu bosh tovushga ega belgilar sonini** va **qamrab olingan silablar sonini** ko'rsatadi."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Agar siz qidirayotgan belgi ro'yxatda bo'lmasa",
        "blocks": [
          {
            "p": "Oliy sud tomonidan e'lon qilingan belgilar soni {announcedTotal}, lekin bu ro'yxat {characterTotal} belgini o'z ichiga oladi. **{excludedNoStandardCode} belgi, universal belgi kodida joy yo'qligi sababli hech qanday shrift bilan ko'rsatilmaydi.** Oliy sudning tizimi bu belgilarni tasvirlar sifatida ko'rsatadi."
          },
          {
            "p": "Biz buni batafsil bayon etdik va bunday belgilarni tavsiya qilmasligimiz sabablarini [Rasmiy Ism Hanja nima?](/guide/hanja-basics) da ko'rsatdik. Siz bunday belgilarni haqiqiy ishlatilishi uchun tegishli organ bilan tekshirishingiz kerak."
          }
        ]
      },
      {
        "title": "Kam Belgilarga Ega Bosh Tovushlar",
        "slot": "tiny",
        "blocks": [
          {
            "p": "Quyidagi bosh tovushlar juda kam rasmiy ism hanja mavjud, shuning uchun biz ularni alohida sahifasiz ko'rsatdik."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ushbu Ro'yxatni Qanday O'qish",
        "blocks": [
          {
            "p": "**伽 · 가 · 절** uchun, ismda \"伽\" ishlatilganda, u **가** deb o'qiladi va \"ma'bad\" degan ma'noni anglatadi. Bir xil hanja uchun, ismda ishlatilganda o'qilishi jadval tomonidan belgilangan va boshqa usulda ishlatilishi mumkin emas."
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
  "intro": "Foydalanish shartlaringizga o'zgarishlar — narxlar, siyosatlar — bu yerda kuchga kirishidan oldin e'lon qilinadi. Ichki yaxshilanishlar ro'yxatga olinmaydi: bu yerda ko'rinadiganlar siz bilishingiz kerak bo'lgan narsalardir.",
  "empty": {
    "title": "Hali hech qanday e'lon yo'q",
    "body": "Biror narsa o'zgarganda, bu yerda ko'rinadi."
  },
  "effective": "{date} dan kuchga kiradi",
  "pager": {
    "label": "E'lon sahifalari",
    "newer": "← Yangiroq",
    "older": "Eski →"
  },
  "items": {
    "2026-08-02-contact": {
      "title": "Aloqa va Haqida sahifalari endi ochiq",
      "body": [
        "Savollar, qaytarishlar, maxfiylik so'rovlari va xato xabarlar uchun endi bitta joy mavjud. Pastki qismdagi aloqa sahifasida bizning elektron pochta manzilimiz va kompaniya ma'lumotlari keltirilgan.",
        "Bizning javoblarimiz asoslangan narsalar va biz qasddan qilmaydigan narsalar haqidagi ma'lumotlar haqida sahifada yozilgan."
      ]
    },
    "2026-08-01-pdf-language": {
      "title": "PDF hisobotlari arab va khmer tillarida ingliz tilida chiqariladi",
      "body": [
        "Agar siz xizmatdan arab yoki khmer tilida foydalansangiz, sotib olgan PDF ingliz tilida tayyorlanadi. Hujjatlarimizni joylashtiruvchi vosita hali o'sha ikki yozuvda paragraflarni o'rnatolmaydi.",
        "Ekran sizning tilingizda qoladi va ismingiz hujjat ichida o'z yozuvingizda chop etiladi.",
        "To'lovdan oldin bir xil eslatma ko'rinadi. Vosita bu yozuvlarni qo'llab-quvvatlaganda, biz bu yerda aytamiz."
      ]
    },
    "2026-08-01-payments-preparing": {
      "title": "To'lovlar hali ochiq emas",
      "body": [
        "Ism yaratish va natijani o'qish bugun bepul, va hisob qaydnomasi kerak emas.",
        "Pullik mahsulotlar hali sotuvda emas. Narxlar sahifasida ko'rsatilgan miqdorlar sotuv ochilganda amal qiladi."
      ]
    }
  }
} satisfies NoticeCopy;
