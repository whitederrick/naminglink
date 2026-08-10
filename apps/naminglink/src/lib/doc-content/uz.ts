import type { DocPage, NoticeCopy } from "./types";
import type { GlobalDocKey } from "./keys";

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
} satisfies Record<GlobalDocKey, DocPage>;

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
