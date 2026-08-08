import type { DocPage, NoticeCopy } from "./types";
import type { DocKey } from "./ko";

/** O‘zbekcha — `scripts/translate-doc-content.ts`가 만든다. 손으로 고치지 말 것. */
export const UZ_DOCS = {
  "about": {
    "eyebrow": "Haqida",
    "title": "Naming-Link haqida",
    "summary": "Biz sizga koreys ismlarini tanlash va tushunishda yordam beramiz. Natijalarimizni asoslaydigan narsalar va qasddan qilmaydigan narsalarimiz bu.",
    "backLabel": "Bosh sahifa",
    "sections": [
      {
        "title": "Biz nima qilamiz",
        "blocks": [
          {
            "p": "Naming-Link sizga **koreys ismlarini tanlash va tushunishda yordam beradi** — bolalarning ismidagi hanja, chet elda ishlatiladigan koreys ismi, o'z ismingizning Hangul yozuvi va muhr yoki chop etilgan hisobot kabi esdaliklar."
          },
          {
            "p": "Natijalaringizni ko'rish **bepul va hisob qaydnomasi talab qilmaydi.** Pullik narsalar ekranda ko'rsatilganlarni qayta sotmaydi: ular ko'proq nomzodlarni ochadi, yozma tahlil qo'shadi yoki natijani saqlanadigan narsaga aylantiradi."
          }
        ]
      },
      {
        "title": "Bizning javoblarimiz nima asosida",
        "blocks": [
          {
            "p": "Hanja **Koreya Oliy sudining rasmiy ismlar-hanja jadvalidan** keladi. Har bir belgi ismlar uchun belgilangan o'qishga ega va jadvaldan tashqaridagi belgilar ro'yxatdan o'tkazilmaydi. Biz ushbu ro'yxatga qo'shmaymiz yoki sevimlilarni tanlamaymiz."
          },
          {
            "p": "Saju va besh element raqamlari **koreys lunisolal taqvimidan** hisoblanadi, tug'ilish vaqti tug'ilgan joy uchun haqiqiy quyosh vaqti bilan to'g'rilanadi. O'qish an'anaviy ma'lumot sifatida beriladi, bashorat emas."
          },
          {
            "p": "Yozma tushuntirishlar AI tomonidan ishlab chiqariladi. **Narsalarni ixtiro qilishdan** saqlanish uchun, modelga faqat sizning kirishingiz va bizning ma'lumotlarimiz beriladi va ichida qolish uchun ko'rsatma beriladi. Qo'llanmalar buni batafsil tushuntiradi."
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
              "**To'lash yaxshiroq javobni sotib olmaydi.** Reklama orqali ochish va to'lov orqali ochish bir xil mazmunni beradi."
            ]
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Xizmat 23 tilda mavjud. Pullik PDF-lar arab va khmer tillarida ingliz tilida chiqariladi — PDF yaratish vositasi ushbu yozuvlarni qo'llab-quvvatlamaydi — va biz to'lovdan oldin ekranda buni aytamiz."
          }
        ]
      },
      {
        "title": "Aloqa",
        "blocks": [
          {
            "p": "Kompaniya tafsilotlari va biz bilan qanday bog'lanish haqida ma'lumotlar [aloqa sahifasida](/contact) mavjud, shu jumladan qaytish, maxfiylik so'rovlari va xato xabarlarini."
          }
        ]
      }
    ]
  },
  "guide/reading": {
    "eyebrow": "O'qishlar",
    "title": "Belgilangan o'qishlar — har bir belgi uchun bitta talaffuz",
    "summary": "Rasmiy jadval faqat belgilarni ro'yxatga olmaydi. U shuningdek, har bir belgi ismlarda ishlatilganda qanday o'qilishi kerakligini belgilaydi.",
    "backLabel": "Qo'llanma",
    "sections": [
      {
        "title": "Har bir belgi uchun belgilangan o'qish",
        "blocks": [
          {
            "p": "Ismlar-hanja jadvali faqat qaysi belgilar ishlatilishi mumkinligini hal qilmaydi. **U shuningdek, har bir belgi ismlar paydo bo'lganida qanday o'qilishi kerakligini belgilaydi.** Ushbu belgilangan o'qish ro'yxatdan o'tkazish uchun asos bo'ladi."
          },
          {
            "p": "Ko'p hanja bir nechta mumkin bo'lgan o'qishlarga ega. Biroq, ism hujjatlarda yoziladi va ovoz chiqariladi, shuning uchun u aniq bitta o'qishga ega bo'lishi kerak. Shuning uchun jadval har bir belgiga ismlar uchun o'qishini tayinlaydi va boshqa o'qish ro'yxatdan o'tkazilmaydi."
          }
        ]
      },
      {
        "title": "Shuning uchun ovoz birinchi o'rinda",
        "blocks": [
          {
            "p": "Shuning uchun Naming-Link ovozni hanja qidirishdan oldin belgilaydi. Agar ism \"지은\" bo'lsa, ma'nosi faqat **지** o'qishiga tayinlangan belgilar va **은** o'qishiga tayinlangan belgilar orasidan tanlanishi mumkin."
          },
          {
            "p": "Qanday yaxshi ma'no bo'lmasin, o'qishi mos kelmaydigan belgi ushbu ism uchun ishlatilmaydi. Biz shuningdek, ismingizni belgi bilan moslashtirish uchun hech qachon o'zgartirmaymiz — ism bir umr davomida aytiladi va ovoz birinchi o'rinda belgilangan, hanja esa keyin keladi."
          }
        ]
      },
      {
        "title": "Familiya ismlari ushbu jadvaldan tashqarida",
        "blocks": [
          {
            "p": "Bu ko'pincha noto'g'ri tushuniladi. **Jadval berilgan ismni boshqaradi, familiya ismini emas.** Familiya ismi allaqachon oilaviy ro'yxatda mavjud bo'lgan narsaga amal qiladi, shuning uchun ba'zi odamlar ismlar-hanja jadvalida bo'lmagan belgilarni ishlatishadi."
          },
          {
            "p": "Shuning uchun Naming-Link familiya hanja bilan boshqacha muomala qiladi. Biz faqat sizga familiya topishda yordam beramiz va jadvaldan tashqarida bo'lgan odamlar uchun to'g'ridan-to'g'ri kiritish uchun bir maydon qoldiramiz. Namgung va Seonwoo kabi ikki sillabali familiyalar ham shunday kiritiladi."
          }
        ]
      }
    ]
  },
  "guide/how-hangul-transliteration": {
    "eyebrow": "Qanday ishlaydi",
    "title": "Biz sizning ismingizni Hangulda qanday yozamiz",
    "summary": "Chet el ismini Hangulda yozishda qanday ovozlarni tanlaymiz va nega hanja qo'shmaymiz.",
    "backLabel": "Qo'llanma",
    "sections": [
      {
        "title": "Biz ovozni, ma'noni emas",
        "blocks": [
          {
            "p": "Ushbu xizmat **sizning ismingizni** Hangulda yozadi. Sizga koreys ismi bermaydi. Michael bo'ladi 마이클 — bir xil ism, koreyslar uni o'qishi va aytishi uchun yozilgan. Biz uni shunchaki o'xshash ma'noga ega bo'lgan koreys ismi bilan almashtirmaymiz."
          },
          {
            "p": "Agar sizga koreys ismi kerak bo'lsa, **bu boshqa xizmatdir.** Biri sizning ismingizni saqlaydi va faqat yozuvni o'zgartiradi; ikkinchisi yangi ism taklif qiladi."
          }
        ]
      },
      {
        "title": "Koreysda yo'q ovozlar",
        "blocks": [
          {
            "p": "Har bir tilda koreysda yo'q ovozlar mavjud — f, v, z, th va koreys qilmaydigan unli farqlar. Bular uchun biz **koreys tilida gapiruvchi odamning sizning ismingizni ovoz chiqarib o'qiganda aytadigan narsasini** yozamiz, asl fonetikani har bir belgisi bilan yozish o'rniga. Maqsad — ishlatiladigan yozuv, eng texnik jihatdan sodiq bo'lgan emas."
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
            "p": "Bitta to'g'ri javob yo'q. Asl ovozga eng yaqin yozuv, Koreyada eng ko'p ishlatiladigan yozuv va yozish uchun eng oson bo'lgan yozuv ko'pincha uch xil narsadir. Shuning uchun biz ularni birga ko'rsatamiz va ularni ajratadigan narsani aytamiz."
          },
          {
            "p": "Agar ularning hech biri to'g'ri his qilmasa, siz kerakli ovoz haqida bir ko'rsatma qo'shishingiz va yana bir marta ishga tushirishingiz mumkin — masalan, ma'lum bir sillaba boshqacha yozilishi kerakligini."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bu yerda hanja yo'q",
        "blocks": [
          {
            "p": "Biz transliteratsiyaga hanja qo'shmaymiz. Hanja ma'no olib keladi va bu oqim ovoz haqida. Belgilarni faqat ovozga moslashtirish sizni hech qachon so'ramagan ma'noga olib kelishi mumkin."
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
        "title": "Biz familiya ismidan boshlaymiz",
        "blocks": [
          {
            "p": "Koreyada familiya ism birinchi o'rinda keladi va berilgan ismlardan farqli o'laroq, u erkin ixtiro qilinmaydi — siz uni meros qilib olasiz. Shuning uchun biz faqat koreys odamlarida mavjud bo'lgan familiyalarni taklif qilamiz. Bizning standart bazamiz **eng ko'p tarqalgan 20 familiya** bo'lib, ular birgalikda aholi sonining taxminan 80% ni qamrab oladi."
          },
          {
            "p": "Agar sizning familiyangiz ovoz bilan haqiqiy koreys familiyasiga mos kelsa — Wang bilan 왕, Ye bilan 예 — biz uni birinchi o'ringa qo'yamiz. Asl ismingizga bog'lanish muhimroq, tasodifiy tanlangan familiyadan."
          },
          {
            "p": "Siz familiyani o'zingiz tanlashingiz yoki bizga taklif qilishimizga ruxsat berishingiz mumkin. Har qanday holda, bu **mavjud familiya bo'ladi.**"
          }
        ]
      },
      {
        "title": "Aytilishi oson, yozilishi oson",
        "blocks": [
          {
            "p": "Bu Koreyada odamlar sizni haqiqatan ham chaqiradigan ism, shuning uchun birinchi narsa biz tekshiradigan narsa — koreys buni bir marta eshitib, yozib olishi mumkinmi. Har safar yozilishi kerak bo'lgan ism — bu sizning yukingiz, bizning emas."
          },
          {
            "p": "Ma'no ham muhim. Koreys berilgan ismlari odatda bitta ma'noni olib yuradi, shuning uchun biz sizga ism qanday o'qilishini va nima uchun tanlaganimizni aytamiz — faqat ismning o'zi emas."
          }
        ]
      },
      {
        "title": "Biz ismning maqsadini so'raymiz",
        "blocks": [
          {
            "p": "Universitet hujjatlari uchun ism do'stlaringizning xonada baqiradigan ismidan yoki onlayn foydalanadigan nomdan farq qiladi. Biz siz uni qanday ishlatmoqchi ekanligingizni so'raymiz va buni hisobga olamiz."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bu transliteratsiya emas",
        "blocks": [
          {
            "p": "Bu yerda biz **yangi koreys ismini** taklif qilamiz. Agar siz mavjud ismingizni Hangulda yozmoqchi bo'lsangiz — Michael ni 마이클 deb — [Hangul yozuvi qo'llanmasiga](/guide/how-hangul-transliteration) qarang."
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
    "summary": "Savollar, qaytish, maxfiylik so'rovlari va xato xabarlarini biz bilan bog'lanish usuli, kompaniya tafsilotlari bilan.",
    "backLabel": "Bosh sahifa",
    "sections": [
      {
        "title": "Bizga elektron pochta yozing",
        "blocks": [
          {
            "p": "**{email}** ga yozing. Biz ikki ish kunida javob beramiz. Buyurtma bilan bog'liq har qanday narsalar — to'lov, qaytish, olmagan fayl — iltimos, **buyurtma raqamingiz yoki to'lov qilingan elektron pochtangizni** qo'shing."
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
              "**To'lovlar va qaytish** — agar hujjat hech qachon ishlab chiqarilmagan bo'lsa yoki to'lov miqdori sizning buyurtmangizdan farq qilsa, biz to'liq qaytaramiz. [Qaytish siyosatini](/refund-policy) ko'ring.",
              "**Maxfiylik** — ma'lumotlaringizga kirish, tuzatish yoki o'chirish so'rovlari. [Maxfiylik siyosatini](/privacy) ko'ring.",
              "**Tuzatish** — agar biron bir hanja ma'nosi, o'qishi yoki hisoblash noto'g'ri ko'rinsa, bizga ayting. Qaysi ekran va nima kiritganingizni aytish juda yordam beradi.",
              "**Boshqa narsalar** — hamkorlik va matbuot ham shu manzilga boradi."
            ]
          }
        ]
      },
      {
        "title": "Kompaniya tafsilotlari",
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
              "**Maxfiylik ofitseri** — {privacyOfficer}",
              "**Hosting provayderi** — {hostingProvider}"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Xabaringizda ism yoki tug'ilgan sanani kiritishingiz shart emas. Bepul natijalar hech qachon serverlarimizda saqlanmaydi, shuning uchun biz ularni qayta topa olmaymiz — buyurtma raqami yetarli."
          }
        ]
      }
    ]
  },
  "guide/avoid": {
    "eyebrow": "An'analar",
    "title": "An'anaviy ravishda qochiladigan belgilar",
    "summary": "Bu qonun bilan taqiqlanmagan, lekin bu an'ana. Biz qochilgan narsalar va nega qochilganligi haqida yozganmiz va biz buni qanday hal qilamiz.",
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
                "label": "Ular orasida, hali ham keng qo'llaniladigan belgilar"
              }
            ]
          },
          {
            "p": "Shaxsiy ismlar uchun belgilar ro'yxatiga kiritilgan va **qonuniy ravishda qabul qilingan** bo'lsa-da, ismlar uchun mos kelmaydigan belgilar mavjud."
          },
          {
            "p": "Asosiy fikr shundaki, **\"ortiqcha ma'no aslida nojo'ya hisoblanadi.\"** Bu juda qimmatbaho (珍·寶) deb hisoblangan belgilar, juda kuchli mavjudlikka ega deb hisoblangan belgilar (王·帝) va odamning o'zida bo'lishi uchun juda ulug'vor deb hisoblangan belgilar, masalan, osmon yoki xudolar. Bu odamni ortiqcha ko'rsatadigan ismning bo'lishi mumkinligi haqidagi qadimiy tushunchani aks ettiradi."
          },
          {
            "p": "**Biroq, bu belgilar ishlatilmaydi.** Bu qonuniy taqiqlash emas, balki an'ana va an'analar mintaqaga, oilaga va avlodga qarab farq qiladi va vaqt o'tishi bilan o'zgarishi mumkin."
          },
          {
            "p": "Aslida, biz to'plagan {avoidTotal} belgilar orasida, {avoidCommonlyUsed} hali ham ismlarda keng qo'llaniladi. Ular qochish kerak deb hisoblangan bo'lsa-da, hali ham keng qo'llanilishi bu an'ananing mutlaq emasligini ko'rsatadi."
          }
        ]
      },
      {
        "title": "Qanday toifalar mavjud?",
        "blocks": [
          {
            "p": "Hozirgi kunda to'plangan belgilar yetti toifaga bo'lingan."
          },
          {
            "ul": [
              "**Xazinalar va buyumlar** — boylik yoki buyumlarni bevosita anglatadigan belgilar",
              "**Osmon va tabiat** — quyosh, oy va osmon kabi odam uchun juda ulug'vor deb hisoblangan narsalar",
              "**Shohlar va aristokratiya** — shoh yoki imperator kabi maqomni anglatadigan belgilar",
              "**Qudratli mavjudotlar** — xudolar yoki ruhlar kabi muqaddas sohalarga ishora qiluvchi belgilar",
              "**Mavsumlar va boshqalar** — ma'lum vaqtlar yoki holatlarga bog'liq belgilar",
              "**Hayvonlar** — ajdarlar yoki yo'lbarslar kabi kuchli energiyaga ega deb hisoblangan hayvonlar",
              "**Ortiqcha** — juda katta yoki to'lib-toshgan ma'noga ega deb hisoblangan belgilar"
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
            "p": "**Qochilgan belgilarni nomzodlardan chiqarib tashlash** — agar yoqilgan bo'lsa, ular to'liq chiqarib tashlanadi. Agar o'chirilmagan bo'lsa, ular natijalarda \"An'anaviy ravishda qochilgan\" yorlig'i bilan qoladi va sabab bilan birga ko'rsatiladi."
          },
          {
            "p": "**Hatto keng qo'llaniladigan belgilarni chiqarib tashlash** — bu qochish ro'yxatida bo'lgan, lekin aslida keng qo'llaniladigan belgilarni chiqarib tashlaydi (圭·琳·玲·元·太·星·海 va boshqalar). Agar yoqilgan bo'lsa, nomzodlar sezilarli darajada kamayadi."
          },
          {
            "p": "Standart **o'chirish emas, balki faqat ko'rsatish**. Agar ular ro'yxatdan tinch olib tashlansa, bu belgini ishlatmoqchi bo'lganlarga u mavjud emasdek ko'rinishi mumkin."
          }
        ]
      },
      {
        "title": "Variantlarning yo'qolmasligini ta'minlash",
        "blocks": [
          {
            "p": "Agar o'sha sillaba uchun ishlatiladigan belgilar qolmasa, biz o'sha sillaba uchun chiqarishni olib tashlaymiz va nomzodlarni ko'rsatamiz. Biz buni umuman hech qanday variant bo'lmaslikdan yaxshiroq deb hisoblaymiz."
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
            "p": "Ismni boshqa tilga tarjima qilishning bitta yo'li yo'q. Ovoz yoki ma'noni saqlashga qarab, mahalliy kontekstda tabiiy ism tanlash yoki individualizmni ustun qo'yish, javoblar farq qiladi. Shuning uchun, bitta variantni taqdim etish o'rniga, biz **besh xil nuqtai nazardan bitta variantni taqdim etamiz.**"
          },
          {
            "ul": [
              "**Ovoz saqlash varianti** — asl ismining ovozini iloji boricha saqlaydi",
              "**Ma'no tarjima varianti** — ismdagi ma'noni o'sha tilga tarjima qiladi",
              "**Ovoz va ma'no murosasi varianti** — har biridan yarim oladi",
              "**Mahalliy haqiqiy variant** — o'sha madaniy kontekstda haqiqatan ham keng qo'llaniladigan ismlarni tanlaydi",
              "**Individualizm va brend yaratish varianti** — esda qoladigan va o'ziga xos ismlarni ustun qo'yadi"
            ]
          },
          {
            "p": "Besh variant taqdim etilishi kafolatlanadi. Har bir insonning afzalliklari farq qilishi sababli, biz bitta to'g'ri javobni taqdim etishdan ko'ra, tanlovlarni taqdim etishni yaxshiroq deb hisoblaymiz."
          }
        ]
      },
      {
        "title": "Har bir tilning yozuv tizimi qoidalari farq qiladi",
        "blocks": [
          {
            "p": "Agar roman harflarini ishlatmaydigan tilga tarjima qilinayotgan bo'lsa, u o'sha tilning yozuv tizimida yozilishi kerak. Yapon tilida bu kana va kanji bo'ladi; rus, mongol va qozog'iston tillarida bu kirill bo'ladi; arab tilida bu arab yozuvi bo'ladi; tay, khmer va hind tillarida esa o'z yozuvlari bo'ladi. Agar siz uni roman harflarida yozsangiz va \"yapon ismi\" deb atasangiz, bu mamlakatda ishlatilmaydi."
          },
          {
            "p": "Shuning uchun, har bir tilning yozuv tizimi uchun alohida qoidalar mavjud va server natijalarni o'sha yozuv tizimida bo'lishini ta'minlash uchun yana bir marta tekshiradi. Familiyalarni o'tkazib yuborish yoki Hangulni aralashtirish kabi xatolar bu yerda filtrlanadi."
          }
        ]
      },
      {
        "title": "Biz haqiqatan ham ishlatiladigan ismlardan foydalanamiz",
        "blocks": [
          {
            "p": "Haqiqatan ham mavjud bo'lmagan, lekin ishonarli ko'rinadigan ismlarni yaratmaslik uchun, biz variantlarimizni mavjud ismlarga asoslaymiz. Ismlar hujjatlarda va tanishtirishlarda ishlatiladi, shuning uchun agar mahalliy odam \"bunday ism yo'q\" deb o'ylasa, u ishlatilmaydi."
          }
        ]
      },
      {
        "title": "Tanlov va tavsifni ajratamiz",
        "blocks": [
          {
            "p": "Biz besh nomzodni aniqlash vazifasini har bir nomzodni batafsil tavsiflash vazifasidan alohida bajaramiz. Tavsif ko'p vaqt talab qiladi, shuning uchun biz bu qismni alohida yaratamiz."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Nima uchun bu o'zgartirildi?",
        "blocks": [
          {
            "p": "Dastlab, biz besh nuqtai nazarni alohida yaratdik. Bu tezroq edi, lekin **nomzodlar soni har safar farq qilardi.** Har bir kishi nomzodlarni tanlaganda, bir-biriga to'g'ri keladigan yoki farq qiladigan narsalar bo'lar edi va agar biri muvaffaqiyatsiz bo'lsa, o'sha nomzod butunlay yo'qolardi, natijada besh o'rniga faqat ikki yoki uchta qolardi."
          },
          {
            "p": "Endi, biz nomzodlar to'plamini va nuqtai nazar taqsimotini bir vaqtning o'zida aniqlaymiz, **soni o'zgaruvchan.** Bir tavsif muvaffaqiyatsiz bo'lsa ham, nomzodlar qoladi va qisqa ma'lumot bilan taqdim etiladi. Biz bir xil sonni doimiy ravishda saqlashni yaxshiroq deb hisoblaymiz, hatto bu biroz ko'proq vaqt oladi."
          }
        ]
      }
    ]
  },
  "guide/how-hanja-meaning": {
    "eyebrow": "Xizmat asoslari",
    "title": "Hanja ma'nolari moslashuvi uchun asos nima?",
    "summary": "Birinchidan, ovozlar belgilangan va faqat o'sha ovoz bilan ro'yxatdan o'tkazilishi mumkin bo'lgan hanja to'planadi, va ma'no bitta belgi sifatida emas, balki kombinatsiya sifatida ko'riladi.",
    "backLabel": "Foydalanish qo'llanmasi",
    "sections": [
      {
        "title": "Birinchidan, ovozlarni belgilash",
        "blocks": [
          {
            "p": "Agar siz \"지은\" deb belgilasangiz, unda **지** va **은** o'zgarmaydi. Biz hanja bilan mos kelishi uchun ismingizning ovozini o'zgartirmaymiz. Ism bir umr davomida aytiladi va biz ovoz birinchi o'rinda belgilangan, hanja esa keyin keladi deb hisoblaymiz."
          },
          {
            "figure": "hanja-match-flow",
            "caption": "Nomzodlar qanday tartibda toraytiriladi. Bu hanja tanlash va ovozlarni moslashtirish haqida emas, balki ovozlar birinchi o'rinda keladi va faqat o'sha ovoz bilan o'qilishi belgilangan belgilar nomzodlar bo'ladi."
          }
        ]
      },
      {
        "title": "Faqat o'sha ovoz bilan ro'yxatdan o'tkazilishi mumkin bo'lgan hanja to'plang",
        "blocks": [
          {
            "p": "Rasmiy ismlar-hanja jadvali har bir belgi uchun ismlarda ishlatilganda belgilangan o'qishga ega. Faqat **지** va **은** o'qishiga tayinlangan belgilar nomzodlar bo'ladi. Qanday yaxshi ma'no bo'lmasin, agar o'qish mos kelmasa, bu hanja bo'lmaydi."
          },
          {
            "p": "Nomzodlarni tanlash doirasi Oliy sud jadvalidan {characterTotal} belgilar. Ushbu jadvalda bo'lmagan belgilar umuman taqdim etilmaydi — hatto ko'rsatilsa ham, ular ro'yxatdan o'tkazilmaydi."
          },
          {
            "p": "Oliy sud tomonidan e'lon qilingan jadvaldagi belgilar soni biroz ko'p. Jadvalda **standart belgi kodlari bo'lmagan belgilar** ham mavjud bo'lib, ular ekranlarda va hujjatlarda to'g'ri ko'rsatilmaydi, shuning uchun bu belgilar nomzodlardan chiqarib tashlangan. Ushbu belgilar bilan ro'yxatdan o'tkazish mumkinligini aniqlash uchun tegishli organ bilan tekshirishingiz kerak."
          }
        ]
      },
      {
        "title": "Ma'no bitta belgi sifatida emas, balki kombinatsiya sifatida ko'riladi",
        "blocks": [
          {
            "p": "Har bir alohida belgi yaxshi bo'lishi va ikki belgi birlashganda o'qilishi yaxshi bo'lishi farq qiladi. Ismlar kombinatsiyalar sifatida o'qiladi, shuning uchun biz kombinatsiyalarni birgalikda ko'rib chiqamiz. Agar siz kiritmoqchi bo'lgan yoki qochmoqchi bo'lgan aniq ma'nolar bo'lsa, ular hisobga olinadi."
          },
          {
            "p": "Agar siz avlod belgisi ishlatayotgan bo'lsangiz, o'sha belgi belgilangan va qolgan pozitsiyalardan kombinatsiyalar qidiriladi. Familiya ismi (성) rasmiy ismlar-hanja jadvali tomonidan cheklangan emas, shuning uchun u alohida ko'rib chiqiladi."
          }
        ]
      },
      {
        "title": "Biz qochish an'analarini olib tashlamasdan ko'rsatamiz",
        "blocks": [
          {
            "p": "Agar nomzodlar orasida an'anaviy ravishda qochiladigan belgi bo'lsa, biz uni olib tashlamaymiz, balki sababi bilan birga ko'rsatamiz. Bu qonun masalasi emas, balki an'ana va siz uni kiritish ekranidan to'liq chiqarib tashlashni tanlashingiz mumkin. Batafsil ma'lumot uchun [An'anaviy ravishda qochiladigan Hanja](/guide/avoid) ga qarang."
          }
        ]
      },
      {
        "title": "Biz sizga chiqarish sabablari haqida ham ma'lumot beramiz",
        "blocks": [
          {
            "p": "Biz ba'zi belgilarni nomzodlardan chiqarish sabablari haqida ma'lumot beramiz. Agar biz faqat tanlanganlarni ko'rsatsak, siz \"nega bu tanlandi?\" deb bilolmaysiz. Agar o'sha sillaba uchun ishlatiladigan belgilar qolmasa, biz o'sha sillaba uchun chiqarishni olib tashlaymiz va nomzodlarni ko'rsatamiz."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Natijalarni qanday o'qish kerak",
        "blocks": [
          {
            "p": "Nomzodlar **nuqtai nazar, emas, balki reytinglar.** Birinchisi eng yaxshi ism degani emas; ular turli nuqtai nazarlardan tanlangan. Ma'nolar kombinatsiyasini ustun qo'yadiganlar, kamdan-kam ishlatiladigan belgilarni tanlaydiganlar va neytrallikni ta'kidlaydiganlar yonma-yon taqdim etiladi. Javob siz qaysi nuqtai nazarni qadrlashingizga qarab farq qiladi."
          }
        ]
      }
    ]
  },
  "guide/what-we-dont-use": {
    "eyebrow": "Bizning standartlarimiz",
    "title": "Biz nima ishlatmaymiz",
    "summary": "Biz umumiy taqdir yoki raqamli ballarni tayinlamaymiz, shuningdek, chiziq hisoblarini ishlatmaymiz. Besh elementlar faqat qo'shimcha o'lchov sifatida ishlatiladi. Bu yerda sabablari.",
    "backLabel": "Foydalanish qo'llanmasi",
    "sections": [
      {
        "title": "Umumiy taqdir yoki raqamli ballarni tayinlamaslik sabablari",
        "blocks": [
          {
            "p": "Ismlarga ball berish uchun umumiy taqdir yoki raqamli ballarni tayinlash usullari mavjud. Naming-Link bu raqamlarni taqdim etmaydi. Sabablari to'rt xil."
          },
          {
            "p": "**Birinchidan, bitta standart yo'q.** Ta'sirni hisoblash usullari maktabga qarab farq qiladi va bir xil ism bir standart bo'yicha ijobiy baholanishi mumkin, boshqasi esa salbiy baholanishi mumkin. Qaysi biri to'g'ri ekanligini aniqlash uchun asosimiz yo'q. Bitta javobni taqdim etish nohonatdir."
          },
          {
            "p": "**Ikkinchidan, bu hisob-kitoblar chiziq hisoblariga tayanadi.** Biroq, Oliy sud ma'lumotlari chiziq hisoblarini umuman o'z ichiga olmaydi. Bundan tashqari, chiziq hisoblari oddiy yoki soddalashtirilgan belgilar sifatida hisoblanganiga va qanday radikallar hisoblanganiga qarab farq qilishi mumkin. Asosiy raqamlar aniq belgilangan emas, shuning uchun ularga asoslangan ballar ham aniq bo'lmaydi."
          },
          {
            "p": "**Uchinchidan, raqamlar haqiqatdan ko'ra mustahkam ko'rinadi.** \"87 ball\" deganda, bu o'lchangan qiymat kabi ko'rinadi, an'anaviy talqin emas. Bu nom beruvchilarni o'sha raqamdan bosim o'tkazishi mumkin, muhim narsalarni chetga surib (Bu chaqirish uchun yoqimli? Ma'no mos keladimi? Istalgan tilaklarni o'z ichiga oladimi?)."
          },
          {
            "p": "**To'rtinchidan, tasdiqlash usuli yo'q.** Ism va inson hayoti o'rtasidagi munosabatni tasdiqlash mumkin emas. Nima to'g'ri yoki noto'g'ri deb aytib bo'lmaydigan narsani ballga aylantirish tasdiqlanmaydigan raqamga olib keladi, garchi bu noto'g'ri bo'lmasa ham."
          },
          {
            "p": "Biz faqat **tasdiqlangan** narsalarni ishlatamiz. Oliy sudning rasmiy ismlar-hanja jadvali, har bir belgi uchun belgilangan o'qishlar va jadvalda ko'rsatilgan ma'nolar. Buning o'rniga, biz ushbu nomzod nima uchun tanlanganligi va nega ba'zi belgilar chiqarib tashlanganligi haqida sabablarga ega bo'lamiz, **ballar o'rniga sabablarga ko'rsatamiz.**"
          }
        ]
      },
      {
        "title": "Biz chiziq hisoblarini ishlatmaymiz",
        "blocks": [
          {
            "p": "Oliy sud tomonidan taqdim etilgan rasmiy ismlar-hanja ma'lumotlari chiziq hisoblarini o'z ichiga olmaydi. Biz olgan {characterTotal} belgilar orasida **birorta belgi ham chiziq hisoblariga ega emas.**"
          },
          {
            "p": "Chiziq hisoblarini ishlatish uchun biz boshqa joydan raqamlarni olishimiz kerak bo'ladi, lekin agar biz bu raqamlarning qayerdan kelganini va qanday mezonlar asosida hisoblanganini aniqlay olmasak, bu asossiz raqamlarga asoslangan ismlarni baholashni anglatadi. Biz ismlarni asossiz qiymatlarga asoslanib baholashni tanlamadik."
          }
        ]
      },
      {
        "title": "Biz besh elementlarni faqat ma'lumot sifatida ishlatamiz",
        "blocks": [
          {
            "figure": "five-elements",
            "caption": "Besh elementlar o'rtasidagi munosabatlar. Doira bo'ylab harakat qilish o'zaro ishlab chiqarishni (相生) anglatadi, birini o'tkazib yuborish va bosish esa o'zaro cheklashni (相剋) anglatadi. Biz bu munosabatni faqat nomzodlarni taqqoslash uchun qo'shimcha o'lchov sifatida ishlatamiz."
          },
          {
            "p": "Agar siz tug'ilgan oyingizni kiritgan bo'lsangiz, biz o'sha oyga asoslangan besh elementlarning soddalashtirilgan ma'lumotlarini nomzodlarni taqqoslash uchun qo'shimcha o'lchov sifatida ishlatamiz. Biroq, bu aniq saju tahlili emas va **biz ismlar insonning taqdirini yoki xarakterini belgilaydi deb da'vo qilmaymiz.**"
          },
          {
            "p": "Oxirgi tanlovda biz ustun qo'yadigan narsalar ovozlar, ma'nolar kombinatsiyalari, oilaning etkazmoqchi bo'lgan qiymatlari va ro'yxatdan o'tkazilishi mumkinligi. Agar siz tug'ilgan oyingizni kiritmagan bo'lsangiz, biz besh elementlar ma'lumotlarini tahlildan to'liq chiqaramiz — biz noma'lum ma'lumotlar haqida tasodifiy taxminlar qilmaymiz."
          },
          {
            "p": "Agar siz aniq saju asosidagi tahlilni xohlasangiz, biz buni alohida batafsil hisobotda qamrab olamiz. Besh elementlarni bepul hanja moslashuviga ustun qo'ymasligimizning sababi shundaki, biz tug'ilish sanasi va vaqtidan olingan besh elementlarga asoslangan hukmlarni aniq deb taqdim etishni xohlamaymiz."
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
  "intro": "Foydalanish shartlaringizga o'zgarishlar — narxlar, siyosatlar — kuchga kirishidan oldin bu yerda e'lon qilinadi. Ichki yaxshilanishlar ro'yxatga olinmaydi: bu yerda ko'rinadigan narsa sizga kerak.",
  "empty": {
    "title": "Hali hech qanday e'lon yo'q",
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
        "Savollar, qaytish, maxfiylik so'rovlari va xato xabarlarini endi bitta joyga yuborishingiz mumkin. Pastki qismdagi aloqa sahifasi bizning elektron pochta va kompaniya tafsilotlarimizni ko'rsatadi.",
        "Bizning javoblarimiz nima asosida va qasddan nima qilmaymiz, haqidagi ma'lumotlar haqida sahifada yozilgan."
      ]
    },
    "2026-08-01-pdf-language": {
      "title": "PDF hisobotlari arab va khmer tillarida ingliz tilida chiqariladi",
      "body": [
        "Agar siz arab yoki khmer tilida xizmatdan foydalansangiz, sotib olgan PDF-ingiz ingliz tilida ishlab chiqariladi. Hujjatlarimizni joylashtiruvchi vosita hali o'sha ikki yozuvda paragraflarni o'rnatmaydi.",
        "Ekran sizning tilingizda qoladi va ismingiz hujjat ichida o'z yozuvingizda chop etiladi.",
        "To'lovdan oldin bir xil eslatma ko'rinadi. Vosita ushbu yozuvlarni qo'llab-quvvatlaganda, biz bu yerda aytamiz."
      ]
    },
    "2026-08-01-payments-preparing": {
      "title": "To'lovlar hali ochiq emas",
      "body": [
        "Ism yaratish va natijani o'qish bugun bepul va hisob qaydnomasi talab qilinmaydi.",
        "Pullik narsalar hali sotuvda emas. Narxlar sahifasida ko'rsatilgan miqdorlar sotuvlar ochilganda qo'llaniladi."
      ]
    }
  }
} satisfies NoticeCopy;
