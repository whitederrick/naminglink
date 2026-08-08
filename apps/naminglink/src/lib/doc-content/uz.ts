import type { DocPage, NoticeCopy } from "./types";
import type { DocKey } from "./ko";

/** O‘zbekcha — `scripts/translate-doc-content.ts`가 만든다. 손으로 고치지 말 것. */
export const UZ_DOCS = {
  "about": {
    "eyebrow": "Haqida",
    "title": "Naming-Link haqida",
    "summary": "Biz sizga koreys ismlarini tanlash va tushunishda yordam beramiz. Natijalarimizni qanday asosda shakllantirayotganimiz va nima qilmasligimiz haqida.",
    "backLabel": "Bosh sahifa",
    "sections": [
      {
        "title": "Biz nima qilamiz",
        "blocks": [
          {
            "p": "Naming-Link sizga **koreys ismlarini tanlash va tushunishda** yordam beradi — bolangizning ismidagi hanja, chet elda foydalanish uchun koreys ismi, o'z ismingizning Hangul yozuvi va muhr yoki chop etilgan hisobot kabi esdaliklar."
          },
          {
            "p": "Natijalaringizni ko'rish **bepul va hisob qaydnomasi talab qilmaydi.** Pullik narsalar hech qachon ekranda ko'rsatilgan narsalarni qayta sotmaydi: ular ko'proq nomzodlarni ochadi, yozma tahlil qo'shadi yoki natijani saqlanadigan narsaga aylantiradi."
          }
        ]
      },
      {
        "title": "Bizning javoblarimiz qanday asosda",
        "blocks": [
          {
            "p": "Hanja **Koreya Oliy Sudi tomonidan belgilangan rasmiy ismlar-hanja jadvalidan** keladi. Har bir belgi ismlar uchun belgilangan o'qilishi bor va jadvaldan tashqaridagi belgilar ro'yxatdan o'tkazilmaydi. Biz ushbu ro'yxatga qo'shmaymiz yoki sevimlilarni tanlamaymiz."
          },
          {
            "p": "Saju va besh element raqamlari **koreys lunisolal taqvimidan** hisoblanadi, tug'ilish vaqti tug'ilgan joy uchun haqiqiy quyosh vaqti bilan to'g'irlanadi. O'qish an'anaviy ma'lumot sifatida beriladi, bashorat emas."
          },
          {
            "p": "Yozma tushuntirishlar AI tomonidan ishlab chiqariladi. **Ixtiro qilishdan** saqlanish uchun modelga faqat sizning ma'lumotlaringiz va bizning ma'lumotlarimiz beriladi va ichida qolish uchun ko'rsatma beriladi. Qo'llanmalar buni batafsil tushuntiradi."
          }
        ]
      },
      {
        "title": "Biz nima qilmaymiz",
        "blocks": [
          {
            "ul": [
              "**Biz taqdirni bashorat qilmaymiz.** Bu yerda hech narsa omad, boylik yoki himoya va'da qilmaydi.",
              "**Biz sizning ismingizni saqlamaymiz.** Bepul natijalar hech qachon bizning serverlarimizga yozilmaydi va pullik hujjatlar nusxasini saqlamasdan yetkaziladi.",
              "**To'lash yaxshiroq javobni sotib olmaydi.** Reklama orqali ochish va to'lov orqali ochish bir xil mazmunni beradi."
            ]
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Xizmat 23 tilda mavjud. Pullik PDF hujjatlari arab va khmer tillarida ingliz tilida beriladi — PDF yaratish dasturi ushbu yozuvlarni qo'llab-quvvatlamaydi — va biz to'lovdan oldin ekranda buni aytamiz."
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
    "title": "Belgilangan o'qishlar — har bir belgi uchun bitta talaffuz",
    "summary": "Rasmiy jadval faqat belgilarni ro'yxatga olmaydi. U shuningdek, har bir belgi ismlar uchun ishlatilganda qanday o'qilishi kerakligini belgilaydi.",
    "backLabel": "Qo'llanma",
    "sections": [
      {
        "title": "Har bir belgi uchun belgilangan o'qish",
        "blocks": [
          {
            "p": "Ismlar-hanja jadvali faqat qaysi belgilar ishlatilishi mumkinligini belgilamaydi. **U shuningdek, har bir belgi ismlar paydo bo'lganda qanday o'qilishi kerakligini belgilaydi.** Ushbu belgilangan o'qish ro'yxatdan o'tkazish uchun asos bo'ladi."
          },
          {
            "p": "Ko'p hanja bir nechta mumkin bo'lgan o'qishlarga ega. Biroq, bir ism hujjatlarda yoziladi va ovoz chiqariladi, shuning uchun u aniq bitta o'qishga ega bo'lishi kerak. Shuning uchun jadval har bir belgiga ismlar uchun o'qishini belgilaydi va boshqa o'qish ro'yxatdan o'tkazilmaydi."
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
            "p": "Qanday ma'no yaxshi bo'lmasin, o'qilishi mos kelmaydigan belgi ushbu ism uchun ishlatilmaydi. Biz shuningdek, ismingizni belgi bilan moslashtirish uchun hech qachon o'zgartirmaymiz — ism hayot davomida aytiladi va ovoz birinchi o'rinda belgilangan, hanja esa keyin keladi."
          }
        ]
      },
      {
        "title": "Familiya ismlari ushbu jadvaldan tashqarida",
        "blocks": [
          {
            "p": "Bu ko'pincha noto'g'ri tushuniladi. **Jadval berilgan ismni boshqaradi, familiya ismiga emas.** Familiya ismi allaqachon oilaviy ro'yxatda mavjud bo'lgan narsaga amal qiladi, shuning uchun ba'zi odamlar ismlar-hanja jadvalida bo'lmagan belgilarni ishlatishadi."
          },
          {
            "p": "Shuning uchun Naming-Link familiya hanja bilan boshqacha munosabatda bo'ladi. Biz faqat sizga familiya topishda yordam beramiz va jadvaldan tashqarida bo'lganlar uchun to'g'ridan-to'g'ri kiritish maydoni qoldiramiz. Namgung va Seonwoo kabi ikki bo'lakli familiyalar bir xil tarzda kiritiladi."
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
            "p": "Ushbu xizmat **ismingizni** Hangulda yozadi. Bu sizga koreys ismini bermaydi. Michael bo'ladi 마이클 — bir xil ism, koreyslar uni o'qishi va aytishi uchun yozilgan. Biz uni o'xshash ma'noga ega bo'lgan koreys ismi bilan almashtirmaymiz."
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
            "p": "Har bir tilda koreysda yo'q tovushlar mavjud — f, v, z, th va koreysning qilmaydigan unli farqlari. Bular uchun biz **koreys tilida gapiruvchi odamning asl ismni o'qiganda aytadigan narsasini** yozamiz, asl fonetikani har bir belgi bo'yicha yozish o'rniga. Maqsad — ishlatiladigan yozuv, eng texnik jihatdan to'g'ri bo'lishi emas."
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
            "p": "Bitta to'g'ri javob yo'q. Asl tovushga eng yaqin yozuv, Koreyada eng ko'p ishlatiladigan yozuv va eng oson yoziladigan yozuv ko'pincha uch xil narsadir. Shuning uchun biz ularni birga ko'rsatamiz va ularni ajratadigan narsalarni aytamiz."
          },
          {
            "p": "Agar hech biri to'g'ri his qilmasa, siz kerakli tovush haqida bir ko'rsatma qo'shishingiz mumkin va yana bir marta sinab ko'rishingiz mumkin — masalan, ma'lum bir sillabani boshqacha yozish kerakligini aytish."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bu yerda hanja yo'q",
        "blocks": [
          {
            "p": "Biz transliteratsiyaga hanja qo'shmaymiz. Hanja ma'no olib keladi va bu jarayon tovush haqida. Faqat tovushga mos keladigan belgilarni moslashtirish sizni hech qachon so'ramagan ma'noga olib kelishi mumkin."
          }
        ]
      }
    ]
  },
  "guide/how-global-to-korean": {
    "eyebrow": "Qanday ishlaydi",
    "title": "Biz koreys ismini qanday quramiz",
    "summary": "Biz mavjud familiyalardan tanlaymiz, ismingizni aytish va yozish qanchalik osonligini baholaymiz va ismning maqsadini so'raymiz.",
    "backLabel": "Qo'llanma",
    "sections": [
      {
        "title": "Biz familiya nomidan boshlaymiz",
        "blocks": [
          {
            "p": "Koreyada familiya birinchi o'rinda turadi va berilgan nomlardan farqli o'laroq, u erkin ixtiro qilinmaydi — siz uni meros qilib olasiz. Shuning uchun biz faqat koreyslar tomonidan haqiqatan ham ishlatiladigan familiyalarni taklif qilamiz. Bizning standart bazamiz **20 ta eng keng tarqalgan familiya**, bu esa aholi sonining taxminan 80% ni qamrab oladi."
          },
          {
            "p": "Agar sizning familiyangiz haqiqiy koreys familiyasiga tovush jihatidan mos kelsa — Wang bilan 왕, Ye bilan 예 — biz uni birinchi o'ringa qo'yamiz. Asl ismingizga bog'lanish, tasodifiy tanlangan familiyadan ko'ra muhimroq."
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
            "p": "Bu Koreyada sizni haqiqatan ham chaqiradigan ism, shuning uchun biz birinchi navbatda koreyslar uni bir marta eshitib yozib olishi mumkinligini tekshiramiz. Har safar yozib berishni talab qiladigan ism — bu sizning yukingiz, bizning emas."
          },
          {
            "p": "Ma'no ham muhim. Koreys berilgan ismlari odatda bir ma'noni o'z ichiga oladi, shuning uchun biz sizga ismning qanday o'qilishi va nima uchun tanlanganini aytamiz — faqat ismning o'zi emas."
          }
        ]
      },
      {
        "title": "Biz ismning maqsadini so'raymiz",
        "blocks": [
          {
            "p": "Universitet hujjatlari uchun ism, do'stlaringiz xonada baqiradigan ism yoki onlayn foydalanadigan nom bilan bir xil emas. Biz siz uni qanday ishlatmoqchi ekanligingizni so'raymiz va buni hisobga olamiz."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bu transliteratsiya emas",
        "blocks": [
          {
            "p": "Bu yerda biz **yangi koreys ismini** taklif qilamiz. Agar siz mavjud ismingizni Hangul da yozilishini xohlasangiz — Michael ni 마이클 sifatida — [Hangul yozuv qo'llanmasiga](/guide/how-hangul-transliteration) qarang."
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
    "summary": "Savollar, qaytarish, maxfiylik so'rovlari va xato xabarlari uchun biz bilan qanday bog'lanishni, kompaniya ma'lumotlarimiz bilan.",
    "backLabel": "Bosh sahifa",
    "sections": [
      {
        "title": "Bizga elektron pochta yuboring",
        "blocks": [
          {
            "p": "**{email}** manziliga yozing. Biz ikki ish kuni ichida javob beramiz. Buyurtma bilan bog'liq har qanday narsalar — to'lov, qaytarish, olmagan fayl — iltimos, **buyurtma raqamingiz yoki to'lagan elektron pochta manzilingizni** qo'shing."
          },
          {
            "p": "Telefon so'rovlari: {customerCenter} (Koreya ish vaqti)."
          }
        ]
      },
      {
        "title": "Bu yerda nima yuborish kerak",
        "blocks": [
          {
            "ul": [
              "**To'lovlar va qaytarish** — agar hujjat hech qachon tayyorlanmagan bo'lsa yoki to'langan summa buyurtmangizdan farq qilsa, biz to'liq qaytaramiz. [Qaytarish siyosatiga](/refund-policy) qarang.",
              "**Maxfiylik** — ma'lumotlaringizga kirish, to'g'rilash yoki o'chirish so'rovlari. [Maxfiylik siyosatiga](/privacy) qarang.",
              "**To'g'rilashlar** — agar bir hanja ma'nosi, o'qilishi yoki hisoblash noto'g'ri ko'rinsa, bizga xabar bering. Qaysi ekranda va nima kiritganingizni aytish juda yordam beradi.",
              "**Boshqa narsalar** — hamkorlik va matbuot uchun bir xil manzilga murojaat qiling."
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
            "p": "Xabaringizda ism yoki tug'ilgan sanani kiritishingiz shart emas. Bepul natijalar hech qachon serverlarimizda saqlanmaydi, shuning uchun biz ularni yana topa olmaymiz — buyurtma raqami yetarli."
          }
        ]
      }
    ]
  },
  "guide/avoid": {
    "eyebrow": "An'analar",
    "title": "An'anaviy ravishda qochilgan belgilar",
    "summary": "Bu qonun bilan taqiqlanmagan, lekin an'ana. Biz qochilgan narsalar va sabablarini, shuningdek, qanday qilib buni hal qilayotganimizni yozdik.",
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
            "p": "Asosiy fikr shundaki, **\"ortiqcha ma'no aslida nojo'ya hisoblanadi.\"** Bu juda qimmatbaho (珍·寶) deb hisoblangan belgilar, juda kuchli mavjudlikka ega (王·帝) deb qaraladigan belgilar va odamning o'zida bo'lishi uchun juda ulug'vor deb hisoblangan belgilar, masalan, osmon yoki xudolar. Bu ism odamni ortda qoldirishi mumkin deb hisoblangan eski cheklov hissini aks ettiradi."
          },
          {
            "p": "**Biroq, bu belgilar ishlatilmaydigan emas.** Bu qonuniy taqiqlash emas, balki an'ana, va an'analar mintaqa, oila va avlodlarga qarab farq qiladi va vaqt o'tishi bilan o'zgarishi mumkin."
          },
          {
            "p": "Aslida, biz to'plagan {avoidTotal} belgi ichida, {avoidCommonlyUsed} hali ham ismlarda keng qo'llaniladi. Ularning qochish kerak deb hisoblanganiga qaramay, keng tarqalganligi bu an'anani mutlaq emasligini ko'rsatadi."
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
              "**Xazinalar va Ob'ektlar** — To'g'ridan-to'g'ri boylik yoki narsalarni anglatadigan belgilar",
              "**Osmon va Tabiyat** — Quyosh, oy va osmon kabi inson uchun juda ulug'vor deb hisoblangan narsalar",
              "**Shohlar va Aslzodalar** — Shahzoda yoki imperator kabi maqomni anglatadigan belgilar",
              "**Qudratli Mavjudotlar** — Xudolar yoki ruhlar kabi muqaddas olamlarni anglatadigan belgilar",
              "**Fasl va Boshqalar** — Maxsus vaqtlar yoki holatlarga bog'liq belgilar",
              "**Hayvonlar** — Ajdaho yoki yo'lbars kabi kuchli energiyaga ega deb hisoblangan hayvonlar",
              "**O'ta Katta** — O'ta katta yoki to'lib-toshgan ma'nolarga ega deb hisoblangan belgilar"
            ]
          }
        ]
      },
      {
        "title": "Belgilarni O'zingiz Qo'shishingiz yoki O'chirishingiz Mumkin",
        "blocks": [
          {
            "p": "Biz bu belgilarni tasodifan o'chirmaymiz. **Nomerga qanday munosabatda bo'lishni tanlash uchun kirish ekranida ikkita variant taqdim etdik.**"
          }
        ]
      },
      {
        "kind": "note",
        "title": "Kirish Ekranida Mavjud Variantlar",
        "blocks": [
          {
            "p": "**Qochish kerak bo'lgan belgilarni nomzodlardan chiqarish** — Agar yoqilgan bo'lsa, ular to'liq chiqariladi. Agar o'chirilmagan bo'lsa, ular natijalarda \"An'anaviy Qochish\" yorlig'i bilan va sabab bilan qoladi."
          },
          {
            "p": "**Hatto Keng Qo'llaniladigan Belgilarni Ham Qochirish** — Bu qochish ro'yxatida bo'lgan, lekin aslida keng qo'llaniladigan belgilarni chiqaradi (圭·琳·玲·元·太·星·海 va boshqalar). Agar yoqilgan bo'lsa, nomzodlar sezilarli darajada kamayadi."
          },
          {
            "p": "Standart **o'chirish emas, balki faqat ko'rsatish**. Agar ular ro'yxatdan tinch olib tashlansa, bu belgini ishlatmoqchi bo'lganlarga u mavjud emasdek ko'rinishi mumkin."
          }
        ]
      },
      {
        "title": "Variantlarning Yo'qolmasligini Ta'minlash",
        "blocks": [
          {
            "p": "Agar o'sha sillab uchun foydalanish mumkin bo'lgan belgilar qolmasa, biz o'sha sillab uchun chiqarishni olib tashlaymiz va nomzodlarni ko'rsatamiz. Biz buni umuman variantlar bo'lmasligidan yaxshiroq deb hisoblaymiz."
          }
        ]
      }
    ]
  },
  "guide/how-korean-to-global": {
    "eyebrow": "Xizmat Asosi",
    "title": "Global Ism O'zgartirishning Asosi Nima?",
    "summary": "Biz har bir tilning yozuv tizimlarini saqlab qolgan holda va faqat mavjud ismlardan foydalangan holda, beshta nuqtai nazardan nomzodlarni taqdim etamiz.",
    "backLabel": "Foydalanish Qo'llanmasi",
    "sections": [
      {
        "title": "Nomzodlar Beshta Nuqtai Nazardan Taqdim Etiladi",
        "blocks": [
          {
            "p": "Ismni boshqa tilga tarjima qilishning bitta yo'li yo'q. Ovozni yoki ma'noni saqlashga qarab, mahalliy kontekstda tabiiy ismni tanlash yoki shaxsiylikni ustun qo'yish, javoblar farq qiladi. Shuning uchun, bitta variantni taqdim etish o'rniga, biz **beshta turli nuqtai nazardan bitta variantni taqdim etamiz**."
          },
          {
            "ul": [
              "**Ovozni Saqlash Variant** — Asl isming ovozini iloji boricha saqlaydi",
              "**Ma'no Tarjima Variant** — Ismda mavjud bo'lgan ma'noni o'sha tilga tarjima qiladi",
              "**Ovoz va Ma'no Kompromis Variant** — Har biridan yarim oladi",
              "**Mahalliy Asl Variant** — O'sha madaniy kontekstda aslida keng qo'llaniladigan ismlarni tanlaydi",
              "**Shaxsiy va Brend Variant** — Esda qoladigan va ajralib turadigan ismlarni ustun qo'yadi"
            ]
          },
          {
            "p": "Besh variant taqdim etilishi kafolatlanadi. Har bir insonning afzalliklari farq qilishi sababli, biz bitta to'g'ri javobni taqdim etishdan ko'ra tanlovlarni taqdim etishni yaxshiroq deb hisoblaymiz."
          }
        ]
      },
      {
        "title": "Har Bir Tilda Yozuv Tizimi Qoidalari Turlicha",
        "blocks": [
          {
            "p": "Agar roman harflarini ishlatmaydigan tilga tarjima qilinsa, u o'sha tilning yozuv tizimida yozilishi kerak. Yapon tilida bu kana va kanji; rus, mo'g'ul va qozog'iston tillarida bu kirill; arab tilida bu arab yozuvi; tay, khmer va hind tillarida esa o'z yozuvlari bo'ladi. Agar siz uni roman harflarida yozsangiz va \"yapon ismi\" deb atasangiz, bu mamlakatda ishlatilmaydi."
          },
          {
            "p": "Shuning uchun, har bir tilning yozuv tizimi uchun alohida qoidalarimiz bor va server natijalarni o'sha yozuv tizimida bo'lishini ta'minlash uchun yana bir bor tekshiradi. Familiyalarning o'chirilishi yoki Hangulni aralashtirish kabi xatolar bu yerda filtrlashdan o'tadi."
          }
        ]
      },
      {
        "title": "Biz Haqiqatan Mavjud Ismlarni Ishlatamiz",
        "blocks": [
          {
            "p": "Mavjud bo'lmagan, lekin ishonarli ko'rinadigan ismlarni yaratmaslik uchun, biz variantlarimizni mavjud ismlar asosida shakllantiramiz. Ismlar hujjatlar va tanishtirishlarda ishlatiladi, shuning uchun agar mahalliy odam \"bunday ism yo'q\" deb o'ylasa, bu ishlatilmaydi."
          }
        ]
      },
      {
        "title": "Biz Tanlov va Tavsifni Ajratamiz",
        "blocks": [
          {
            "p": "Biz beshta nomzodni aniqlash vazifasini har bir nomzodni batafsil tavsiflash vazifasidan alohida bajaramiz. Tavsif ko'p vaqt talab qilgani uchun, biz bu qismni ajratamiz va bir vaqtning o'zida yaratamiz."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Nima Uchun Bu O'zgartirildi?",
        "blocks": [
          {
            "p": "Dastlab, biz beshta nuqtai nazarni alohida yaratdik. Bu tezroq edi, lekin **nomzodlar soni har safar farq qilar edi.** Har bir kishi nomzodlarni tanlaganida, takrorlanishlar yoki farqlar bo'lar edi va agar biri muvaffaqiyatsiz bo'lsa, o'sha nomzod butunlay yo'qolardi, natijada besh o'rniga faqat ikki yoki uchta qolardi."
          },
          {
            "p": "Endi, biz nomzodlar to'plamini va nuqtai nazar taqsimotini bir vaqtning o'zida aniqlaymiz, **soni o'zgaruvchan.** Agar bir tavsif muvaffaqiyatsiz bo'lsa, nomzodlar qoladi va qisqa ma'lumot bilan taqdim etiladi. Biz bir xil sonni doimiy ravishda saqlash yaxshiroq deb hisoblaymiz, hatto bu biroz ko'proq vaqt olsa ham."
          }
        ]
      }
    ]
  },
  "guide/how-hanja-meaning": {
    "eyebrow": "Xizmat Asosi",
    "title": "Hanja ma'nolarini moslashtirishning asosi nima?",
    "summary": "Birinchidan, ovozlar belgilangan, va faqat o'sha ovoz bilan ro'yxatdan o'tishi mumkin bo'lgan hanja to'planadi, va ma'no bitta belgi sifatida emas, balki birikma sifatida ko'riladi.",
    "backLabel": "Foydalanish Qo'llanmasi",
    "sections": [
      {
        "title": "Birinchidan, ovozlarni belgilash",
        "blocks": [
          {
            "p": "Agar siz \"지은\" deb belgilasangiz, unda **지** va **은** o'zgarmaydi. Biz isming ovozini hanja bilan moslashtirish uchun o'zgartirmaymiz. Ism — bu umr bo'yi chaqiriladigan narsa, va biz ovoz birinchi belgilanishi, so'ngra hanja kelishi kerak deb hisoblaymiz."
          },
          {
            "figure": "hanja-match-flow",
            "caption": "Bu nomzodlar qanday toraytirilishi tartibidir. Bu avval hanja tanlash va ovozlarni moslashtirish haqida emas, balki ovozlar birinchi kelishi va faqat o'sha ovoz bilan o'qilishi belgilangan belgilar nomzod bo'lishidir."
          }
        ]
      },
      {
        "title": "Faqat o'sha ovoz bilan ro'yxatdan o'tishi mumkin bo'lgan hanja to'plang",
        "blocks": [
          {
            "p": "Rasmiy nom-hanja jadvalida har bir belgi uchun ismlarda ishlatilganda belgilangan o'qish mavjud. Faqat **지** va **은** sifatida o'qilishi belgilangan belgilar nomzod bo'ladi. Qanday yaxshi ma'no bo'lmasin, agar o'qish mos kelmasa, bu ism uchun hanja bo'la olmaydi."
          },
          {
            "p": "Nomzodlarni tanlash uchun doira Oliy Sud jadvalidan {characterTotal} belgilar. Ushbu jadvalda bo'lmagan belgilar umuman taqdim etilmaydi — hatto ko'rsatilsa ham, ular ro'yxatdan o'tkazilmaydi."
          },
          {
            "p": "Oliy sud tomonidan nashr etilgan jadvaldagi belgilar soni biroz ko'p. Jadvalda **standart belgi kodlari bo'lmagan belgilar** ham mavjud, ular ekranlarda va hujjatlarda to'g'ri ko'rsatilmaydi, shuning uchun bu belgilar nomzodlardan chiqarib tashlangan. Siz ushbu belgilar bilan ro'yxatdan o'tishingiz mumkinmi yoki yo'qligini tegishli organ bilan tekshirishingiz kerak."
          }
        ]
      },
      {
        "title": "Ma'no birlashtirish sifatida ko'riladi, bitta belgi sifatida emas",
        "blocks": [
          {
            "p": "Har bir alohida belgi yaxshi bo'lishi va ikki belgi birlashganda o'qiladigan ma'no yaxshi bo'lishi farq qiladi. Ismlar birlashmalar sifatida o'qiladi, shuning uchun biz birgalikda birlashmalarga qaraymiz. Agar siz kiritmoqchi bo'lgan yoki qochmoqchi bo'lgan aniq ma'nolar bo'lsa, ular hisobga olinadi."
          },
          {
            "p": "Agar siz avlod belgisini ishlatayotgan bo'lsangiz, bu belgi o'rnatilgan va qolgan pozitsiyalardan birlashmalar qidiriladi. Familiya (성) rasmiy nom-hanja jadvali tomonidan cheklangan emas, shuning uchun u alohida ko'rib chiqiladi."
          }
        ]
      },
      {
        "title": "Biz qochish odatlarini olib tashlamasdan ko'rsatamiz",
        "blocks": [
          {
            "p": "Agar an'anaviy ravishda qochish kerak deb hisoblangan belgi nomzodlar orasida bo'lsa, biz uni olib tashlamaymiz, balki sababi bilan birga ko'rsatamiz. Bu an'ana masalasi, qonun emas, va siz uni butunlay kiritish ekranidan chiqarib tashlashni tanlashingiz mumkin. Qo'shimcha ma'lumot uchun [An'anaviy Qochish Hanja](/guide/avoid) ga qarang."
          }
        ]
      },
      {
        "title": "Biz chiqarib tashlash sabablari haqida ham xabar beramiz",
        "blocks": [
          {
            "p": "Biz ba'zi belgilarni nomzodlardan chiqarib tashlash sabablari haqida ma'lumot beramiz. Agar biz faqat tanlanganlarni ko'rsatsak, siz \"nima uchun bu?\" deb bilolmaysiz. Agar o'sha sillab uchun foydalanish mumkin bo'lgan belgilar qolmasa, biz o'sha sillab uchun chiqarib tashlashni olib tashlaymiz va nomzodlarni ko'rsatamiz."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Natijalarni qanday o'qish kerak",
        "blocks": [
          {
            "p": "Nomzodlar **nuqtai nazar, reyting emas**. Birinchisi eng yaxshi ism degani emas; ular turli nuqtai nazarlardan tanlangan. Ma'nolar birlashmasini birinchi o'ringa qo'yadiganlar, kamdan-kam uchraydigan belgilarni tanlaydiganlar va neytrallikni ta'kidlaydiganlar yonma-yon taqdim etiladi. Javob siz qaysi nuqtai nazarni qadrlayotganingizga qarab farq qiladi."
          }
        ]
      }
    ]
  },
  "guide/what-we-dont-use": {
    "eyebrow": "Bizning Standartlarimiz",
    "title": "Biz Nimalarni Ishlatmaymiz",
    "summary": "Biz umumiy taqdir yoki raqamli ballarni belgilamaymiz, shuningdek, chiziq hisoblarini ishlatmaymiz. Besh element faqat qo'shimcha o'lchov sifatida ishlatiladi. Mana sabablari.",
    "backLabel": "Foydalanish Qo'llanmasi",
    "sections": [
      {
        "title": "Umumiy taqdir yoki raqamli ballarni belgilamaslik sabablari",
        "blocks": [
          {
            "p": "Ismlarga umumiy taqdir yoki raqamli ballarni belgilash usullari mavjud. Naming-Link bu raqamlarni taqdim etmaydi. Sabablari to'rt xil."
          },
          {
            "p": "**Birinchidan, bitta standart yo'q.** Taqdirni hisoblash usullari maktabga qarab farq qiladi va bir xil ism bir standart bo'yicha ijobiy baholanishi, boshqasi bo'yicha esa salbiy baholanishi mumkin. Qaysi biri to'g'ri ekanligini aniqlash uchun asosimiz yo'q. Bitta javobni taqdim etish nohonatdir."
          },
          {
            "p": "**Ikkinchidan, bu hisob-kitoblar chiziq hisoblariga tayanadi.** Biroq, Oliy sud ma'lumotlari chiziq hisoblarini umuman o'z ichiga olmaydi. Bundan tashqari, chiziq hisoblari oddiy yoki soddalashtirilgan belgilar sifatida hisoblanganiga va qanday radikallar hisoblanganiga qarab farq qilishi mumkin. Asosiy raqamlar aniq belgilangan emasligi sababli, ularning ustida qurilgan ballar ham aniq bo'lolmaydi."
          },
          {
            "p": "**Uchinchidan, raqamlar haqiqatdan ko'ra mustahkamroq ko'rinadi.** \"87 ball\" deganda, bu o'lchangan qiymat kabi ko'rinadi, an'anaviy talqin emas. Bu ismlar o'sha raqamdan bosim ostida his qilishi mumkin, haqiqatan ham muhim bo'lgan narsalarni chetga surib qo'yadi (Uni chaqirish yoqimli mi? Ma'no mos keladimi? Istalgan tilaklarni o'z ichiga oladimi?)."
          },
          {
            "p": "**To'rtinchidan, tasdiqlash usuli yo'q.** Ism va inson hayoti o'rtasidagi munosabatni tasdiqlash mumkin emas. Noto'g'ri yoki to'g'ri deb aytib bo'lmaydigan narsani ballga aylantirish tasdiqlanmaydigan raqamni keltirib chiqaradi, garchi bu noto'g'ri bo'lmasa ham."
          },
          {
            "p": "Biz faqat **tasdiqlangan** narsalarni ishlatamiz. Oliy sud rasmiy nom-hanja jadvali, har bir belgi uchun belgilangan o'qishlar va jadvalda keltirilgan ma'nolar. Buning o'rniga, biz nima uchun ushbu nomzod tanlanganini va nima uchun ba'zi belgilar chiqarib tashlanganini ko'rsatamiz, **ballar o'rniga sabablarga** e'tibor qaratamiz."
          }
        ]
      },
      {
        "title": "Biz chiziq hisoblarini ishlatmaymiz",
        "blocks": [
          {
            "p": "Oliy sud tomonidan taqdim etilgan rasmiy nom-hanja ma'lumotlari chiziq hisoblarini o'z ichiga olmaydi. Biz olgan {characterTotal} belgilar orasida **birorta belgi ham chiziq hisoblariga ega emas.**"
          },
          {
            "p": "Chiziq hisoblarini ishlatish uchun, biz boshqa joydan raqamlarni olishimiz kerak bo'ladi, lekin agar biz bu raqamlar qayerdan kelganini va qanday mezonlar asosida hisoblanganini aniqlay olmasak, bu ismlarni asossiz raqamlarga asoslangan holda baholashni anglatadi. Biz tasdiqlanmagan qiymatlarga asoslangan ismlarni baholashdan voz kechishga qaror qildik."
          }
        ]
      },
      {
        "title": "Besh elementlarni faqat ma'lumot sifatida ishlatamiz",
        "blocks": [
          {
            "figure": "five-elements",
            "caption": "Besh element o'rtasidagi munosabatlar. Doira bo'ylab harakat qilish o'zaro hosil qilishni (相生) anglatadi, birini o'tkazib yuborish va bosim o'tkazish o'zaro cheklashni (相剋) anglatadi. Biz bu munosabatni faqat nomzodlarni taqqoslash uchun qo'shimcha o'lchov sifatida ishlatamiz."
          },
          {
            "p": "Agar siz tug'ilgan oyingizni kiritgan bo'lsangiz, biz o'sha oyga asoslangan besh elementlarning soddalashtirilgan ma'lumotlarini nomzodlarni taqqoslash uchun qo'shimcha o'lchov sifatida ishlatamiz. Biroq, bu aniq saju tahlili emas va **biz ismlarning inson taqdirini yoki xarakterini belgilashini da'vo qilmaymiz.**"
          },
          {
            "p": "Oxirgi tanlovda bizning ustuvorligimiz tovushlar, ma'nolar birlashmasi, oilaning etkazmoqchi bo'lgan qiymatlari va ro'yxatdan o'tkazilishi mumkinligi. Agar siz tug'ilgan oyingizni kiritmagan bo'lsangiz, biz besh elementlar ma'lumotlarini tahlildan butunlay chiqarib tashlaymiz — biz noma'lum ma'lumotlar haqida tasodifiy taxminlar qilmaymiz."
          },
          {
            "p": "Agar siz aniq saju asosidagi tahlilni xohlasangiz, biz buni alohida batafsil hisobotda qamrab olamiz. Besh elementlarni bepul hanja moslashuvda ustuvor qilishimizning sababi shundaki, tug'ilish sanasi va vaqti to'liq bo'lmagan holda olingan besh elementlarga asoslangan hukmlarni aniq deb taqdim etishni istamaymiz."
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
        "title": "Bepul ko'rinadigan nimalar?",
        "blocks": [
          {
            "p": "Ism yaratish va natijalarni ko'rish **bepul**. Hech qanday a'zolik ro'yxatdan o'tkazish talab qilinmaydi. Siz hanja moslashuvlarini, koreys ismlarini yaratishni, global ism konversiyasini va Hangul talaffuz belgilashini ko'rishingiz mumkin, shuningdek, tavsiya etilgan natijalar va ularning asoslarini ekranda ko'rishingiz mumkin."
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
            "p": "Tavsiya etilgan natijalar birma-bir nomzodlarni ochish uchun tuzilgan. Reklama ko'rishda, bitta nomzod bir vaqtning o'zida ochiladi, bu mahsulot esa **barcha qolgan nomzodlarni bir marta ochadi**."
          },
          {
            "p": "Agar siz shoshilayotgan bo'lsangiz, xarid qilishingiz shart emas. **Reklama orqali ochilgan natijalar va to'lovdan olinganlar mutlaqo bir xil** — bu faqat kutish masalasi, va to'lash yaxshiroq nomzodlarni keltirmaydi."
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
              "**Maksimal 5 hanja nomzodlari batafsil** — {priceFiveDetail}. Siz ekranda besh nomzod uchun tushuntirishlarni kengaytirishingiz mumkin. PDF mavjud emas.",
              "**Maksimal 10 hanja nomzodlari kengaytirilgan batafsil PDF** — {priceTenDetail}. Nomzodlar soni o'n taga oshadi va PDF hujjati qo'shiladi.",
              "**Maksimal 10 hanja nomzodlari saju va besh elementlar bo'yicha keng qamrovli hisobot** — {priceTenSaju}. Yuqoridagilarga qo'shimcha ravishda, bu tug'ilish sanasidan olingan saju diagrammasini va besh elementlar kuchlarini o'z ichiga oladi, nima uchun ma'lum bir hanja ushbu ismga mos kelishini besh elementlar nuqtai nazaridan o'rganadi."
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Hanja o'zi ommaviy ma'lumotdir",
        "blocks": [
          {
            "p": "Foydalanish mumkin bo'lgan hanja va ularning ma'nolari Oliy sud tomonidan belgilangan rasmiy nom-hanja jadvalidan keladi va barchasi xizmat ko'rsatish hujjatlarida ommaviy ravishda mavjud. Pullik mahsulotlar hanja ma'lumotlarini emas, balki **uni ismga qarab tanlash va tushuntirish jarayonini** sotadi."
          }
        ]
      },
      {
        "title": "Global Foydalanuvchilar uchun PDFlar",
        "blocks": [
          {
            "p": "Chet el ismlarini koreys ismlariga aylantirish yoki ismlarni Hangulda yozish uchun mavjud hujjatlar. Narxlar to'lov ekranida ko'rsatilgan miqdorlarga mos keladi."
          },
          {
            "ul": [
              "**Koreys Ismi Premium Hisoboti** — 3 sahifa. Kaligrafiya qopqog'i, isming ma'nosi va uni tanlash sababi, shuningdek, saju va besh elementlar talqini kiritilgan.",
              "**Hangul Ism San'ati** — 2 sahifa. Kaligrafiya qopqog'i va talaffuz qo'llanmasini o'z ichiga oladi. Bu ismingizni Hangulda qanday yozishni va qanday talaffuz qilishni o'z ichiga oladi."
            ]
          }
        ]
      },
      {
        "title": "Ism muhr",
        "blocks": [
          {
            "p": "Biz ekranda yaratilgan ismni jismoniy muhrga o'yib, sizga yuboramiz. Narxlar modelga qarab farq qiladi — dumaloq muhr {priceStampRound}, kvadrat muhr {priceStampSquare}, qora muhr {priceStampEbony}. Xalqaro yetkazib berish ham mavjud."
          },
          {
            "p": "**Bu yerda mahsulotlar yetkazib berishni o'z ichiga oladi.** Oldingi mahsulotlardan farqli o'laroq, ishlab chiqarish va yetkazib berish vaqt talab qiladi va qabul qilish manzili kerak. Yetkazib berish ma'lumotlari faqat buyurtma qayta ishlash va qonuniy saqlash uchun ishlatiladi, va qayta ishlash tugagach, siyosatda belgilangan muddatdan so'ng yo'q qilinadi."
          }
        ]
      },
      {
        "title": "Sotib olishdan oldin bilishingiz kerak bo'lgan narsalar",
        "blocks": [
          {
            "p": "**Raqamli mahsulotlar to'lov amalga oshirilgandan so'ng darhol taqdim etiladi.** Siz yuklab olish boshlanishidan oldin istalgan vaqtda bekor qilishingiz va to'liq qaytarib olishingiz mumkin, lekin yuklab olish tugagach, oddiy fikr o'zgarishi sababli qaytarish cheklangan (Elektron tijorat to'g'risidagi qonunning 17-moddasi, 2-band). Ushbu shart to'lov ekranida alohida kelishilgan."
          },
          {
            "p": "**Natijalar mazmuni bo'yicha shikoyatlar qaytarish uchun sabab emas.** Biroq, agar hujjat yaratilmagan bo'lsa, fayl ochilmasa yoki to'lov miqdori buyurtmadan farq qilsa, bu qayta chiqarish yoki to'liq qaytarish sifatida ko'rib chiqiladi."
          },
          {
            "p": "Batafsil shartlar [Qaytarish siyosati](/refund-policy) va [Narxlar qo'llanmasi](/pricing) da keltirilgan. Ushbu matn nima kiritilganligini ko'rsatadi va qonuniy shartlar ushbu ikki hujjatda ustunlikka ega."
          }
        ]
      }
    ]
  },
  "guide/hanja-basics": {
    "eyebrow": "Tizim",
    "title": "Rasmiy ism-hanja nima?",
    "summary": "Bolalar ismlari uchun ishlatilishi mumkin bo'lgan hanja Oliy sud tomonidan jadvalda belgilangan. Bu jadval nima va nima uchun belgilanganligini qisqacha bayon etadi.",
    "backLabel": "Foydalanish qo'llanmasi",
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
                "label": "Hangul silabalari"
              },
              {
                "value": "{effectiveDate}",
                "label": "Jadvalga murojaat sanasi"
              }
            ]
          },
          {
            "p": "Siz bolalar ismlari uchun har qanday belgi ishlata olmaysiz. **Tug'ilish ro'yxatiga olish uchun ishlatilishi mumkin bo'lgan hanja Oliy sud tomonidan jadvalda belgilangan va faqat o'sha jadvaldagi belgilar ism-hanja sifatida ro'yxatga olinishi mumkin.** Bu rasmiy ism-hanja deb ataladi."
          }
        ]
      },
      {
        "title": "Nima uchun belgilangan?",
        "blocks": [
          {
            "p": "Hanjalar soni o'n minglab. Ularning ba'zilari noxush ma'noga ega, ba'zilari endi ishlatilmaydi va o'qilishi ma'lum emas, ba'zilari esa umuman kompyuterlarda ko'rsatilmaydi. Agar bunday belgilar ismga kiritilsa, oxir-oqibat buni o'z umrida ishlatadigan shaxsga yuk bo'ladi. Ismlar turli joylarda, masalan, yashash ro'yxati, pasportlar, banklar va maktablarda turlicha o'qilishi yoki buzilishi mumkin, bu esa shaxsni o'z ismini tushuntirishga majbur qiladi."
          },
          {
            "p": "Shuning uchun, ismlarda ishlatilishi mumkin bo'lgan hanja doirasini oldindan belgilash usuli tanlangan. Bu cheklovchi qoidalar bo'lishdan ko'ra, shaxsning umri davomida muammosiz ishlatilishi uchun ismlarni ta'minlash mexanizmi."
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
        "title": "Ushbu ekranda ishlatiladigan materiallar",
        "blocks": [
          {
            "p": "{publisher} rasmiy ism-hanja ma'lumotlari · {effectiveDate} holatiga ko'ra"
          },
          {
            "p": "{characterTotal} belgilar {syllableCount} Hangul silabalarini qamrab oladi. Asl faylning hash qiymati ham saqlanadi, shuning uchun jadval o'zgarganda, qachon va nima o'zgarganligini tekshirish mumkin."
          }
        ]
      },
      {
        "title": "Oliy sud tomonidan e'lon qilingan belgilar soni biz ko'rsatganlardan farq qiladi",
        "blocks": [
          {
            "p": "**Oliy sud tomonidan e'lon qilingan rasmiy ism-hanja {announcedTotal} belgidan iborat, biz taqdim etayotgan nomzodlar esa {characterTotal} belgidan iborat.** Ushbu farqni yashirish uchun hech qanday sabab yo'q, shuning uchun biz uni ochiq aytamiz."
          },
          {
            "p": "Agar siz Oliy sudning so'rov ma'lumotlarini tekshirsangiz, u {listedTotal} belgini o'z ichiga oladi. Ularning ichida, **{excludedNoStandardCode} belgi** — **global umumiy belgi kodida (Unicode) joyi bo'lmagan belgilar.** Oliy sud tizimi bunday belgilarni faqat o'z tizimida ishlaydigan raqamlar bilan ko'radi va ular ekranda **rasmlar** sifatida ko'rsatiladi."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Qo'shimcha shriftlar muammoni hal qilmaydi",
        "blocks": [
          {
            "p": "Bir belgi ekranda ko'rinishi uchun, u **dunyo tomonidan kelishilgan raqamga** ega bo'lishi kerak va shrift o'sha raqamga mos keluvchi rasmni o'z ichiga oladi. Raqamga ega bo'lmagan belgilar hech qanday shriftga kiritilmaydi. Qancha shrift qo'shsak ham, bu belgilar bo'sh kvadratlar sifatida ko'rinadi."
          }
        ]
      },
      {
        "title": "Shuning uchun, ular nomzodlardan olib tashlandi",
        "blocks": [
          {
            "p": "**Ko'rsatilmaydigan belgilar bilan ro'yxatni to'ldirish foydali emas.** Ushbu belgilarning ko'p ma'nolari ham ma'lumotlarimizda bo'sh, bu esa xizmatning ma'nolar asosida ism tanlash usuliga mos kelmaydi."
          },
          {
            "p": "**Muqaddas sabab esa ismni ishlatadigan shaxsga bog'liq.** Ism — bu shaxsning umri davomida turli joylarda kiritiladigan qiymat. Belgilarga ega bo'lmagan belgilar banklar, maktablar, shifoxonalar yoki pasportlar tizimlarida ro'yxatga olishdan so'ng ham kiritilmasligi yoki chop etilmasligi mumkin. Shuning uchun, bunday belgilarni tavsiya qila olmaymiz."
          },
          {
            "p": "Biroq, **biz bunday belgilarni ishlatish mumkin yoki yo'qligini aniqlamaymiz.** Ular Oliy sud jadvalidagi belgilar bo'lgani uchun, ro'yxatga olish mumkin. Agar siz haqiqatan ham o'sha belgini ishlatmoqchi bo'lsangiz, Oliy sudning elektron oilaviy munosabatlar ro'yxatga olish tizimida to'g'ridan-to'g'ri tekshiring va **mavjud organ bilan haqiqiy foydalanish imkoniyatini so'rang.**"
          }
        ]
      },
      {
        "title": "Agar siz jadvalda bo'lmagan hanjani ishlatmoqchi bo'lsangiz",
        "blocks": [
          {
            "p": "Siz ularni ishlata olmaysiz. To'g'ri aytganda, bunday belgilar ism-hanja sifatida ro'yxatga olinmaydi va ism faqat Hangulda yoziladi. Agar siz hanjani birga ishlatmoqchi bo'lsangiz, jadvaldan tanlashingiz kerak."
          },
          {
            "p": "Shuning uchun, biz jadvalda bo'lmagan belgilarni nomzod sifatida taqdim etmaymiz. Ekranda ko'rinadigan barcha hanja tug'ilish ro'yxatiga olish uchun haqiqatan ham ishlatilishi mumkin bo'lgan belgilar. To'liq ro'yxat [Rasmiy ism-hanja to'liq ro'yxati](/guide/hanja) da mavjud."
          }
        ]
      }
    ]
  },
  "guide/hanja": {
    "eyebrow": "Ro'yxat",
    "title": "Rasmiy ism-hanja to'liq ro'yxati",
    "summary": "Biz tug'ilish ro'yxatiga olish uchun ishlatilishi mumkin bo'lgan hanjalarni bosh harf bo'yicha tartibga solganmiz. Har bir belgi uchun ismda ishlatilganda belgilangan o'qish va ma'noni ko'rishingiz mumkin.",
    "backLabel": "Foydalanish qo'llanmasi",
    "sections": [
      {
        "title": "Bosh harf bo'yicha qidirish",
        "slot": "chosung",
        "blocks": [
          {
            "p": "Bu Oliy sudning rasmiy ism-hanja jadvalidan {characterTotal} belgini o'z ichiga oladi. Har bir belgi ismda ishlatilganda **o'qish va ma'nosini** o'z ichiga oladi. Jadvalda kiritilmagan belgilar ism-hanja sifatida ro'yxatga olinmaydi, shuning uchun siz bu yerda ko'rsatilgan belgilarni tanlashingiz kerak."
          },
          {
            "p": "Pastdagi tugmadagi ikkita raqam **o'sha bosh harfga ega belgilar sonini** va **qamrab olingan silabalar sonini** ko'rsatadi."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Agar siz qidirayotgan belgi ro'yxatda bo'lmasa",
        "blocks": [
          {
            "p": "Oliy sud tomonidan e'lon qilingan belgilar soni {announcedTotal}, lekin bu ro'yxat {characterTotal} belgini o'z ichiga oladi. **{excludedNoStandardCode} belgi ko'rsatilmaydigan belgilar bo'lib, universal belgi kodida joyi yo'q.** Oliy sud tizimi bunday belgilarni rasmlar sifatida ko'rsatadi."
          },
          {
            "p": "Biz buni batafsil bayon etdik va bunday belgilarni tavsiya qilmasligimiz sabablarini [Rasmiy ism-hanja nima?](/guide/hanja-basics) da ko'rsatdik. Siz bunday belgilarni haqiqiy foydalanish imkoniyatini tekshirish uchun tegishli organ bilan bog'lanishingiz kerak."
          }
        ]
      },
      {
        "title": "Bosh Harflar Kam Belgilar Bilan",
        "slot": "kichik",
        "blocks": [
          {
            "p": "Quyidagi bosh harflar juda kam rasmiy nom-hanja mavjud, shuning uchun biz ularni alohida sahifasiz bu yerda ko'rsatdik."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ushbu Ro'yxatni Qanday O'qish",
        "blocks": [
          {
            "p": "**伽 · 가 · 절** uchun, nomda \"伽\" ishlatilganda, u **가** deb o'qiladi va \"ma'bad\" degan ma'noni anglatadi. Bir xil hanja uchun ham, nomlarda ishlatilganda o'qilishi jadval tomonidan belgilangan va boshqa usulda ishlatilishi mumkin emas."
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
  "intro": "Foydalanish shartlaringizga o'zgartirishlar — narxlar, siyosatlar — bu yerda kuchga kirishidan oldin e'lon qilinadi. Ichki yaxshilanishlar ro'yxatga olinmaydi: bu yerda ko'rsatilganlar sizga kerak bo'lgan ma'lumotlardir.",
  "empty": {
    "title": "Hali hech qanday e'lon yo'q",
    "body": "Biror narsa o'zgarganda, bu yerda ko'rsatiladi."
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
        "Savollar, qaytarishlar, maxfiylik so'rovlari va xato xabarlarini endi bitta joyga yuborishingiz mumkin. Pastki qismdagi aloqa sahifasi bizning elektron pochta manzilimiz va kompaniya ma'lumotlarimizni ko'rsatadi.",
        "Bizning javoblarimiz qaysi asosda berilganligi va biz qasddan nima qilmasligimiz haqida ma'lumot haqida sahifada yozilgan."
      ]
    },
    "2026-08-01-pdf-language": {
      "title": "PDF hisobotlari Arabcha va Khmer tilida ingliz tilida chiqariladi",
      "body": [
        "Agar siz xizmatdan Arabcha yoki Khmer tilida foydalansangiz, sotib olgan PDFingiz ingliz tilida tayyorlanadi. Hujjatlarimizni joylashtiradigan vosita hali o'sha ikki yozuvda paragraflarni o'rnatolmaydi.",
        "Ekran sizning tilingizda qoladi va ismingiz hujjat ichida o'z yozuvingizda chop etiladi.",
        "To'lovdan oldin bir xil eslatma ko'rsatiladi. Vosita ushbu yozuvlarni qo'llab-quvvatlaganda, biz bu yerda aytamiz."
      ]
    },
    "2026-08-01-payments-preparing": {
      "title": "To'lovlar hali ochiq emas",
      "body": [
        "Ism yaratish va natijani o'qish bugun bepul, va hisob kerak emas.",
        "Pullik mahsulotlar hali sotuvda emas. Narxlar sahifasida ko'rsatilgan miqdorlar sotuvlar ochilgandan keyin amal qiladi."
      ]
    }
  }
} satisfies NoticeCopy;
