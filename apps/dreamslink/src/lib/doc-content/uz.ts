import type { DocPage, NoticeCopy } from "./types";
import type { DocKey } from "./ko";

/** O‘zbekcha — `scripts/translate-doc-content.ts`가 만든다. 손으로 고치지 말 것. */
export const UZ_DOCS = {
  "guide": {
    "eyebrow": "Hisoblash uchun asos",
    "title": "Hisoblash uchun asos nima?",
    "summary": "Biz Dreams-Link tomonidan ishlatiladigan barcha qoidalarni oshkor qilamiz. Siz qaysi ramzlar topilganini, lug'atda nima yozilganini — ekranda ko'rsatilgan talqinlar qayerdan kelayotganini tekshirishingiz mumkin.",
    "backLabel": "Bosh sahifaga qaytish",
    "sections": [
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Bu yerda yozilgan barcha raqamlar **ramzlar lug'atidan va moslashuv qoidalaridan to'g'ridan-to'g'ri o'qiladi.** Biz matnni qo'lda yozmaymiz, agar lug'at kengaytirilsa yoki qoidalar o'zgartirilsa, ushbu hujjatlardagi raqamlar ham o'zgaradi."
          }
        ]
      }
    ]
  },
  "guide/how-matching-works": {
    "eyebrow": "Xizmat uchun asos",
    "title": "Tush hikoyalarida ramzlarni qanday topish.",
    "summary": "Bu erda ramzlar erkin yozilgan jumlalardan qanday tanlanishi va biz uzun so'z ichida tasodifan joylashgan ramzni qanday filtrlashimiz tushuntiriladi — 별 (\"yulduz\") 특별할 (\"maxsus emas\") ichida.",
    "backLabel": "Talqin asoslari",
    "sections": [
      {
        "title": "Biz siz taqdim etgan matnda ramzlarni topamiz.",
        "blocks": [
          {
            "p": "Siz tush hikoyangizni erkin yozganingizda, biz o'sha matndan lug'atdan ramzlarni qidiramiz. Siz elementlarni tanlashingiz yoki maxsus formatda yozishingiz shart emas. Faqat odatdagidek yozing, masalan: 'Kecha katta piton menga o'raldi.'"
          },
          {
            "p": "Qidirishda biz ramzning nomidan tashqari **{aliasTotal} alternativ nomlarni** ham ko'rib chiqamiz. Bu bir xil narsani anglatadigan so'zlar, masalan, 구렁이 (gureongi) va 뱀 (baem), 떨어지다 (tteoreojida) va 빠지다 (ppajida). Yakunlari bilan farqlar, masalan 「떨어지는」 (tteoreojineun) · 「쫓겨서」 (jjotgyeoseo) · 「빠졌다」 (ppajyeotda), ham kiritiladi."
          }
        ]
      },
      {
        "title": "Tasodifan so'z ichida paydo bo'lgan belgilar hisobga olinmaydi",
        "blocks": [
          {
            "p": "Bu Koreyada eng qiyin jihatdir. Ramzlar orasida **{singleCharSymbolTotal} bitta belgili ramzlar** mavjud, masalan **별** (byeol) · **말** (mal) · **배** (bae) · **손** (son), bu boshqa so'zlarda tez-tez uchraydi."
          },
          {
            "ul": [
              "별 (\"yulduz\") 특**별**할 (\"maxsus emas\") ichida yashirin",
              "게 (\"rak\") 누군가에**게** (\"biror kishi tomonidan\") ichida yashirin",
              "말 (\"ot\") **말**했다 (\"aytdi\") ichida, va 배 (\"kema, nok\") **배**가 고팠다 (\"och qolgan edik\") ichida."
            ]
          },
          {
            "p": "Bularni ramz sifatida hisoblash noaniq talqinlarga olib keladi. Shuning uchun, biz atrofdagi belgilarni tekshiramiz — agar **oldida koreyscha belgi bo'lsa**, biz uni uzun so'zning bir qismi sifatida qabul qilamiz va hisobga olmaymiz, va **keyin nima kelayotganini, bir bo'lak yoki fe'l oxiri ekanligini** ko'rib chiqamiz, 「소가」 (soga) ni o'tkazib, 「소리」 (sori) ni filtrlashimiz mumkin."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bu qanday ishlayotganini ko'rsatadi",
        "blocks": [
          {
            "p": "Ushbu qoidani amalga oshirishdan oldin, o'n ikki haqiqiy jumla bilan sinov o'tkazganda, **barcha o'n ikki** noaniq ramzlarni o'z ichiga oldi. Mazmuni ahamiyatsiz bo'lgan bir jumla hatto ta'sir qilish tushini belgilab qo'ygan edi."
          },
          {
            "p": "Endi, bitta qoladi — 배 (bae) 「배가 고팠다」 (bae ga gopatda) ichida. U bir xil tovushga ega, lekin boshqa ma'noga ega, shuning uchun atrofdagi belgilar orqali filtrlash mumkin emas."
          },
          {
            "p": "Bir narsani topmaslik — bu halol masala. Biroq, biror noaniq narsani topish, o'sha so'z atrofida hech qachon bo'lmagan an'anani o'rnatishni anglatadi."
          }
        ]
      },
      {
        "title": "Bir xil belgilar har doim bir xil natijalarni beradi",
        "blocks": [
          {
            "p": "Moslashuv qoidalarida tasodifiylik uchun joy yo'q. Lug'at o'zgarmas va qoidalar belgilangan, agar siz bir xil jumlani yana kiritganingizda, **bir xil ramz bir xil tartibda paydo bo'ladi**. Bugun ko'rgan talqiningiz ertaga ko'rganingizdan farq qilmaydi."
          },
          {
            "p": "Bu sifat ham o'zimizga bergan va'damizdir. Har safar o'zgaradigan talqinlar qiziqarli, lekin asosdan mahrum. Bu [model ishlatmasligimiz sababi](/guide/no-ai) hikoyasiga bog'liq."
          }
        ]
      }
    ]
  },
  "guide/no-storage": {
    "eyebrow": "Shaxsiy ma'lumotlar",
    "title": "Yozilgan tushlarni saqlamaslik usuli",
    "summary": "Biz tush hikoyalari hech qanday joyda yozilmasligini texnik jihatdan nimani anglatishini va natija havolasida nima borligini tushuntiramiz.",
    "backLabel": "Talqin asoslari",
    "sections": [
      {
        "title": "A'zolik talab qilinmaydi",
        "blocks": [
          {
            "p": "Dreams-Link hisoblar yaratmaydi. Biz ismlar, elektron pochta manzillari yoki telefon raqamlarini to'playmiz. Biz yig'adigan yagona narsalar — siz yozgan tushlar, uyg'onganingizda qanday his qilganingiz va bir xil tushni takroran ko'rganingizdir, va bu talqin tugagach qolmaydi."
          },
          {
            "p": "Tush hikoyalari bu xizmat oladigan eng shaxsiy qiymatlardir. Shuning uchun qoidalar zaruriyatdan qat'iyroq — biz siz taqdim etgan narsalarni yozish uchun hatto jadval yaratmadik."
          }
        ]
      },
      {
        "title": "Natija havolasida nima bor",
        "blocks": [
          {
            "p": "Hisoblash tugagach, manzil quyidagicha ko'rinadi."
          },
          {
            "p": "**/ko/dream/result#eyJ0IjoiSSBkcmVhbXQgb2YgYSBjYXJwLi4u**"
          },
          {
            "p": "**#** dan keyin keladigan narsa — kiritilgan qiymat. Ushbu qism **fragment** deb ataladi, bu **brauzer serverga yubormaydigan qismdir**. Bu standart veb xulq-atvori va biz yaratgan qoidalar emas — aslida bu hujjat ichida joylashuvni ko'rsatish uchun mo'ljallangan, shuning uchun serverga uni ko'rish zarurati yo'q."
          },
          {
            "p": "Bu yerda, ushbu xususiyat ayniqsa muhim — siz taqdim etgan tush **kirish yozuvlarida qolmaydi.**"
          },
          {
            "p": "Boshqacha qilib aytganda, natija havolasini ochganingizda, brauzer o'sha qiymatni hisoblashni so'rash uchun o'qiydi, va bizning server hisoblash uchun qiymatni qabul qiladi, javobni qaytaradi va keyin uni unutadi."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Boshqalarga havolalarni yuborishda ehtiyot bo'ling",
        "blocks": [
          {
            "p": "Serverda saqlanmasligi havolaning xavfsiz ekanligini anglatmaydi. Natija havolasi siz taqdim etgan tushni o'z ichiga oladi, shuning uchun ushbu havolani olgan kishi o'sha mazmunni o'qishi mumkin."
          }
        ]
      },
      {
        "title": "Nima uchun hisoblash serverda amalga oshiriladi, lekin saqlanmaydi?",
        "blocks": [
          {
            "p": "Hisoblash o'z-o'zidan serverda amalga oshiriladi. Ramzlarni topish uchun butun lug'at kerak, va bu lug'at brauzerga yuborish uchun juda katta. Lug'atni serverda saqlash, shuningdek, xato tuzatilganda, bu har kimga bir vaqtning o'zida aks etishini anglatadi. Biroq, **so'rovni qayta ishlagandan so'ng, bu qiymat hech qanday joyda ishlatilmaydi.** Uni ma'lumotlar bazasiga kiritish uchun hech qanday kod yo'q."
          },
          {
            "p": "Ishlash uchun zarur bo'lgan minimal yozuv saqlanadi — bir xil shaxsning qisqa vaqt ichida juda ko'p so'rov yuborishini oldini olish uchun hisoblagich. Bu tush mazmunini o'z ichiga olmaydi, va kirish IP ham saqlanmaydi. Faqat bir qiymat, sanaga xashlangan, hisoblanadi va bu qiymat kun o'zgarganda o'zgaradi."
          }
        ]
      },
      {
        "title": "Saqlanmasligi sababli nima amalga oshirilmaydi",
        "blocks": [
          {
            "p": "Haqiqatdan ham, biz ma'lumotlarni saqlamaslik sababli ba'zi narsalardan voz kechganmiz."
          },
          {
            "ul": [
              "**Tushlar kundaligi yo'q.** Siz o'tgan haftadagi talqinni qaytarib ololmaysiz, va uni yana ko'rish uchun havolaga ega bo'lishingiz kerak. Bu maqsadli ravishda amalga oshiriladi — kundalik yaratish uchun, eng shaxsiy yozuvlar doimiy ravishda saqlanishi kerak.",
              "**Biz har safar bir xil qiymatni hisoblaymiz.** Kesh yo'q. Buning o'rniga, lug'at o'zgarmas va moslashuv qoidalari aniqlangan, shuning uchun bir xil matn har doim bir xil ramz beradi — qoidalar keshni kafolatlagan narsalarni almashtiradi.",
              "**Yangilash reklama eshigini yana ko'rsatadi.** Bu ko'rish yozuvlarini qoldirish uchun joy yo'qligi sababli."
            ]
          }
        ]
      },
      {
        "title": "Sotib olish holatida",
        "blocks": [
          {
            "p": "Agar siz hisobot sotib olsangiz, o'sha paytda tranzaksiya yozuvi saqlanadi. To'lovning qonuniy belgilangan saqlash muddati bor, va buyurtma tarixisiz qaytarmalar amalga oshirilmaydi. Biroq, hatto shunda, **o'qish uchun ishlatilgan tush matni buyurtmaga qo'shilmaydi** — bu to'lov tasdiqlangandan so'ng hujjatni yaratishda yana olinadi va yoziladi."
          },
          {
            "p": "Batafsil ma'lumot uchun iltimos, [maxfiylik siyosati](/privacy) ga murojaat qiling."
          }
        ]
      }
    ]
  },
  "notice": {
    "eyebrow": "E'lon",
    "title": "E'lonlar",
    "summary": "Bu sizning foydalanishingizga ta'sir qilishi mumkin bo'lgan o'zgarishlar haqida xabar berish joyidir.",
    "backLabel": "Bosh sahifaga qaytish",
    "sections": []
  },
  "contact": {
    "eyebrow": "Aloqa",
    "title": "So'rovlar",
    "summary": "Bu foydalanish, qaytarish, shaxsiy ma'lumotlar so'rovlari va xato xabarlarini yuborish uchun aloqa kanali.",
    "backLabel": "Bosh sahifaga qaytish",
    "sections": [
      {
        "title": "Email orqali aloqa",
        "blocks": [
          {
            "p": "Iltimos, so'rovlarni **{email}** ga yuboring. Biz 2 ish kuni ichida javob beramiz. To'lov va qaytarish so'rovlari uchun, **buyurtma raqami yoki to'lov emailingizni** kiritish tezroq."
          },
          {
            "p": "Telefon so'rovlari {customerCenter} da qabul qilinadi."
          }
        ]
      },
      {
        "title": "Bu kanalda nima yuborilishi mumkin?",
        "blocks": [
          {
            "ul": [
              "**To'lov va Qaytarish** — Agar hujjat yaratilmagan bo'lsa yoki to'lov miqdori buyurtmadan farq qilsa, to'liq qaytarish taqdim etiladi. Shartlar [qaytarish siyosati](/refund-policy) da.",
              "**Shaxsiy Ma'lumotlar** — Biz kirish, tuzatish va o'chirish so'rovlarini qabul qilamiz. Qayta ishlash siyosati [maxfiylik siyosati](/privacy) da.",
              "**Tafsir Xatolarini Hisobot Berish** — Agar ramzlar noto'g'ri topilgan bo'lsa yoki tafsir g'alati ko'rinsa, iltimos, bizga xabar bering. Agar siz o'sha tush hikoyasini qachon yozganingizni kiritgan bo'lsangiz, biz uni yana bir bor shu matn bilan ko'rib chiqamiz."
            ]
          }
        ]
      },
      {
        "title": "Biznes Ma'lumotlari",
        "blocks": [
          {
            "ul": [
              "**Biznes Nomi** — {companyName}",
              "**Vakil** — {representative}",
              "**Biznes Ro'yxatga Olish Raqami** — {businessNumber}",
              "**Pochta Buyurtma Biznes Ro'yxatga Olish Raqami** — {mailOrderNumber}",
              "**Manzil** — {address}",
              "**Mijoz Markazi** — {customerCenter}",
              "**Email** — {email}",
              "**Shaxsiy Ma'lumotlarni Himoya Qilish Bo'yicha Mas'ul Shaxs** — {privacyOfficer}",
              "**Hosting Provayderi** — {hostingProvider}"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Iltimos, so'rov emailingizda taqdim etgan tushni qayta yozishingiz shart emas. Biz kiritmalarni saqlamaymiz, shuning uchun biz ularni yana ko'rib chiqolmaymiz, va buyurtma raqami tasdiqlash uchun yetarli. Faqat zarur bo'lsa, masalan, tafsir xatolarini hisobot berish uchun yozing."
          }
        ]
      }
    ]
  },
  "guide/what-we-do-not-do": {
    "eyebrow": "Xizmat Prinsiplari",
    "title": "Biz Nima Qilmaymiz",
    "summary": "Biz lotereya raqamlarini, tush jurnalini, homiladorlik aniqlashni yoki talismanlarni taqdim etmaymiz. Har birini qilmaslik sabablarimizni tushuntiramiz.",
    "backLabel": "Tafsir Asosi",
    "sections": [
      {
        "title": "Biz lotereya raqamlarini taqdim etmaymiz",
        "blocks": [
          {
            "p": "Bu tushlarni talqin qilish xizmatlarida keng tarqalgan bo'lsa-da, biz buni qilmaymiz. **Tushlardan raqamlar olish uchun an'anaviy tush talqini asoslari yo'q.** Cho'chqa tushlarini boylik sifatida talqin qilish haqida yozuvlar bo'lsa-da, buni ishlab chiqaradigan hech qanday adabiyot qoidasi yo'q."
          },
          {
            "p": "Ularni yaratish uchun, biz ularni o'ylab topishimiz kerak bo'ladi, va o'sha paytda, bu xizmat an'anaviy ravishda berilgan talqinlarni etkazish joyi bo'lmaydi. Bu ayniqsa moliyaviy yo'qotishga olib kelishi mumkin."
          }
        ]
      },
      {
        "title": "Biz tush jurnallarini yaratmaymiz",
        "blocks": [
          {
            "p": "O'tgan tushlarni to'plash imkoniyati qulay bo'lsa-da, bu bizdan **taqdim etgan tushlarni doimiy saqlashni talab qiladi.** Tush hikoyalari bu xizmat oladigan eng shaxsiy jihatdir, va biz buni almashmaslikka qaror qildik."
          },
          {
            "p": "Buning o'rniga, saqlamoqchi bo'lgan tushlaringizni **rasm yoki hujjat sifatida olish mumkin.** Saqlash mas'uliyati foydalanuvchilarga, bizga emas — [Tushlaringizni Saqlashning Ikki Usuli](/guide/reports)"
          }
        ]
      },
      {
        "title": "Biz homiladorlik yoki jinsni aniqlamaymiz",
        "blocks": [
          {
            "p": "Biz faqat bir **a conception dream** (conception dream) sifatida talqin qilingan bir ramz paydo bo'lganini aytamiz. Siz homiladormisiz yoki bola qizmi yoki o'g'ilmi, bu **tushlar orqali bilib bo'lmaydi.** Bunday bayonotlar ekranda yoki pullik hujjatlarda ko'rinmaydi."
          }
        ]
      },
      {
        "title": "Biz talismanlar yoki charm sotmaymiz",
        "blocks": [
          {
            "p": "Yomon ramz sifatida o'qilgan narsa sotib olish uchun sabab emas. Yomon tush an'anaviy ravishda **hozirda tekshirilishi kerak bo'lgan vaziyatni ko'rsatish uchun** ishlatiladi, biror narsani oldini olish uchun to'lash emas."
          },
          {
            "p": "Biz buni sotish uchun xavotir yaratmaymiz. Biz faqat yuqorida aytib o'tilgan ikkita narsani sotamiz, va hech biri qo'shimcha talqin bermaydi, balki **bir xil mazmunni saqlash usullaridir.**"
          }
        ]
      },
      {
        "kind": "note",
        "title": "Biz kelajak haqida aniq bayonotlar bermaymiz",
        "blocks": [
          {
            "p": "Biz biror narsa sodir bo'ladimi, qachon sodir bo'ladi yoki sog'liq, boylik yoki umr haqida aniq bayonotlar bermaymiz. An'anaviy ramzlarning ma'nolarini etkazish va kelajakni bashorat qilish turli masalalardir."
          }
        ]
      },
      {
        "title": "Biz mavjud bo'lmagan talqinlarni yasamaymiz",
        "blocks": [
          {
            "p": "Lug'atda mavjud bo'lmagan ramzlar uchun, biz **ularni topa olmadik deb aytamiz.** Biz o'xshashlarini yig'maymiz yoki joyni ishonarli jumlalar bilan to'ldirmaymiz. Shuning uchun, bu xizmat [tush talqini uchun sun'iy intellektdan foydalanmaydi](/guide/no-ai). Model bilmaydigan narsalarini bilmayman demaydi."
          }
        ]
      }
    ]
  },
  "about": {
    "eyebrow": "Kirish",
    "title": "Dreams-Link ga Kirish",
    "summary": "Bu an'anaviy tush talqini ramzlari lug'atidan foydalanib tushlarni talqin qiluvchi xizmatdir. Bu nimaga asoslanganini va nima aytilmaganini aniqlashtiradi.",
    "backLabel": "Bosh sahifaga qaytish",
    "sections": [
      {
        "title": "Biz nima qilamiz?",
        "blocks": [
          {
            "p": "Dreams-Link siz yozgan tushlardan **an'anaviy tush talqini uchun ishlatiladigan ramzlarni** topadi va ularning ma'nolarini ko'rsatadi. Tushlar har kuni ko'radigan narsalar bo'lgani uchun, ekranda ko'rgan talqinlaringiz **bepul va a'zolik talab qilmaydi.**"
          },
          {
            "p": "To'lov evaziga sotiladigan yagona narsalar **ikki turdagi saqlash** — yaxshi tushni o'z ichiga olgan rasm (tush kartasi) va ramz an'anaviy ravishda tug'ilish tushiga o'xshash paytda paydo bo'lganida fonni o'z ichiga olgan PDF."
          }
        ]
      },
      {
        "title": "Asos nima?",
        "blocks": [
          {
            "p": "Talqin qilishning asosi **{symbolTotal} ramzlar lug'ati**dir. Biz tush matnida ramzlarni topamiz va faqat o'sha ramzlar uchun lug'atda qayd etilgan ma'nolarni ko'rsatamiz. Agar ramzning bir nechta ma'nosi bo'lsa, biz vaziyatga qarab tanlaymiz — ko'tarilayotgan quyosh va botayotgan quyosh an'anaviy ravishda qarama-qarshi talqin qilinadi."
          },
          {
            "p": "Lug'atdagi barcha ma'nolar **eski tush talqini kitoblarining asl matnlaridan tarjima qilingan**, va har bir ma'no uning asosini tashkil etuvchi asl matn bilan birga keltirilgan. Asos sifatida ishlatilgan asl matnlar ikkita — **Zhou Gong's Dream Interpretation**, Sharqiy Osiyoda uzoq vaqt davomida o'qilgan tush talqini kitobi, va 1901 yilda nashr etilgan **Miller's Dream Book**."
          },
          {
            "p": "Qidiruv **faqat belgilangan qoidalarga** asosan amalga oshiriladi. Bir xil tush har doim bir xil ramzlarni beradi va talqinlar kechagi kundan bugungi kunga o'zgarmaydi."
          }
        ]
      },
      {
        "title": "Biz nima demaymiz?",
        "blocks": [
          {
            "p": "**Biz lug'atda bo'lmagan an'anaviy ma'nolarni yaratmaymiz.** Agar hech qanday ramz topilmasa, biz shunchaki hech narsa topilmaganini aytamiz va xulosa qilamiz. O'sha joyni ishonchli so'zlar bilan to'ldirish — bu xizmatning eng ehtiyotkorlik bilan yondashadigan jihati."
          },
          {
            "p": "**Tug'ilish tushlari faqat ko'rsatkichlardir, belgilovchi emas.** Biz sizga tushda an'anaviy ravishda tug'ilish tushiga o'xshash ramz paydo bo'lganini faqat xabar beramiz. Biz homiladorlik yoki bolaning jinsi haqida bashorat bermaymiz, va bunday da'volar uchun hech qanday asos yo'q."
          },
          {
            "p": "Biz **salomatlik, boylik yoki kasb haqida aniq bayonotlar bermaymiz.** Bu an'anaviy tush talqini nuqtai nazaridan ma'lumotdir va tibbiy, moliyaviy yoki huquqiy maslahat emas."
          }
        ]
      },
      {
        "title": "Biz siz yozgan tushlarni saqlamaymiz.",
        "blocks": [
          {
            "p": "Tush hikoyalari bu xizmatga keladigan eng shaxsiy qismdir. Shuning uchun, biz **ularni saqlamaymiz.** Kirishlar faqat hisob-kitoblar uchun ishlatiladi va serverda hech qanday shaklda qayd etilmaydi."
          },
          {
            "p": "Biz **tushlarni tush daftari kabi to'plash funksiyasini yaratmaslikka qaror qildik.** Bu qimmatli xususiyat, lekin eng shaxsiy yozuvlarni saqlashni talab qiladi."
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Usul haqida batafsil ma'lumot [qo'llanma hujjatida](/guide) keltirilgan. Biznes ma'lumotlari va aloqa tafsilotlarini [biz bilan bog'lanish](/contact) bo'limida topishingiz mumkin."
          }
        ]
      }
    ]
  },
  "guide/symbol-dictionary": {
    "eyebrow": "Xizmatning asosi",
    "title": "Ramzlar lug'ati asosini nima?",
    "summary": "Bu talqinlarning qayerdan kelishini aniqlaydi. {symbolTotal} ramzlarni sakkiz toifaga bo'lish mezonlari, har bir ma'noga asl matn parchalarini qo'shish sababi va bo'sh joylarni to'ldirmaslik printsipi.",
    "backLabel": "Talqin asoslari",
    "sections": [
      {
        "title": "Biz faqat lug'atda yozilgan narsalarni ko'rsatamiz.",
        "blocks": [
          {
            "p": "Dreams-Link talqinlari **oldindan yozilgan ramzlar lug'atidan** keladi. Biz siz taqdim etgan matnda ramzlarni topamiz va o'sha ramzlar uchun lug'atda qayd etilgan ma'nolarni shunday ko'rsatamiz. Biz lug'atda bo'lmagan so'zlarni yaratmaymiz."
          },
          {
            "p": "Hozirda lug'atda **{symbolTotal} ramz** mavjud, va bu ramzlarning jami **{meaningTotal} ma'nosi** bor. Ba'zi ramzlar faqat bitta ma'noga ega, lekin ko'pchilikda bir necha ma'no bor, va har bir ma'no uchun **o'sha ma'no qo'llaniladigan vaziyat** ham qayd etilgan."
          }
        ]
      },
      {
        "title": "Sakkiz toifaga bo'lingan.",
        "blocks": [
          {
            "p": "Biz tushlarda paydo bo'ladigan narsalarni ularning xususiyatlariga asoslanib sakkiz toifaga guruhladik. Hozirda ro'yxatga olingan son qavs ichida keltirilgan."
          },
          {
            "ul": [
              "**Obyektlar**({categoryThing}) · **Harakatlar**({categoryAction}) · **Hayvonlar**({categoryAnimal}) — uchta eng katta toifa. Bu asosan eski tush talqini kitoblarida muhokama qilinadi: ko'rinadigan obyektlar, yirtqich hayvonlar va tushlarda amalga oshiriladigan harakatlar.",
              "**Tabiat**({categoryNature}) · **Odamlar**({categoryPerson}) — suv, olov, quyosh va oy kabi katta va qadimiy narsalar, va tushlarda paydo bo'ladigan odamlar, masalan, shohlar, o'g'rilar va vafot etganlar.",
              "**Joylar**({categoryPlace}) · **Tanalar**({categoryBody}) · **Ranglar**({categoryColor}) — uylar va qabristonlar kabi joylar, tishlar, sochlar va qon kabi tana qismlari, va ranglar."
            ]
          },
          {
            "p": "Ularni toifaga ko'ra ko'rish uchun, siz [ramzlar lug'atida](/dream/symbols) to'liq ro'yxatni ko'rishingiz mumkin."
          }
        ]
      },
      {
        "title": "Har bir ma'no asl matn parchasi bilan birga.",
        "blocks": [
          {
            "p": "Lug'atdagi **{meaningTotal} ma'nolar**ning har biri **o'sha ma'no uchun asos bo'lgan asl matn parchasi** bilan birga keltirilgan. Barcha {symbolTotal} ramzlar buni o'z ichiga oladi — agar asl matn parchasi bo'lmasa, kirish o'zi yaratilmaydi."
          },
          {
            "p": "Asos sifatida ishlatilgan asl matnlar ikkita. **Zhou Gong's Dream Interpretation** — Sharqiy Osiyoda uzoq vaqt davomida o'qilgan tush talqini kitobi, va **Miller's Dream Book** — 1901 yilda nashr etilgan G'arbiy kitob. Siz ramzni ochganingizda, ma'noning qaysi asl matndan kelganini, parchasi va uning ma'nosi bilan birga ko'rishingiz mumkin."
          },
          {
            "p": "**Biz bo'sh joylarni to'ldirmaymiz.** Ishonchli kelib chiqishlarni qo'shish hujjatni qalinlashtiradi, lekin o'sha paytda, bu lug'at an'anaviy ravishda o'z ichiga olgan narsalarning tarjimasi bo'lmaydi, balki yaratilgan bo'ladi. Biz asl matnda bo'lmagan narsalarni yozmaymiz, va yozgan narsalarimiz uchun asl matnni qo'shishimiz kerak."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Kengaytirilganda, biz faqat asl matndan kengaytiramiz.",
        "blocks": [
          {
            "p": "Biz ramzlar modellariga asoslanib kirishlar yaratishga harakat qildik, lekin natijada olingan kirishlar yoki bir xil so'zlarni takrorlaydi, masalan 「love → good relationship」 yoki an'anadan hech qanday asos bermaydi. Shuning uchun, **biz hech narsani kiritmadik.** Hozirgi lug'atning o'lchami asl matnlarni tarjima qilish natijasidir, kirishlar yaratish emas — modellarni ishlatmaslik sabablari [nima uchun modellarni ishlatmaymiz](/guide/no-ai) bo'limida batafsil keltirilgan."
          }
        ]
      },
      {
        "title": "Yaxshi va yomon lug'at tomonidan oldindan belgilangan.",
        "blocks": [
          {
            "p": "Har bir ramzga omadli va omadli bo'lmaganlik ko'rsatkichlari qo'shiladi. **Yaxshi {polarityPositive}**, **vaziyatga qarab ambivalent {polarityAmbivalent}**, **ogohlantiruvchi {polarityNegative}**, va **noyob {polarityNeutral}**."
          },
          {
            "p": "To'rt toifadan **vaziyatga qarab o'zgaradiganlar eng ko'p.** Bu biz muvozanatga keltirmagan narsadir; bu asl matnlarda qanday yozilgan — bir xil ramz uchun, nima qilinganiga qarab ko'p joylarda qarama-qarshi talqin qilingan. Ushbu qiymat har bir ramzning tabiati aks ettiradi, va tushning umumiy muhitini topilgan ramzlarni yig'ish orqali qayta hisoblash amalga oshiriladi."
          }
        ]
      }
    ]
  },
  "guide/one-symbol-many-meanings": {
    "eyebrow": "Xizmat Asosi",
    "title": "Nima uchun bir xil ramzning turli ma'nolari bor.",
    "summary": "Ko'tarilayotgan quyosh va botayotgan quyosh an'anaviy ravishda qarama-qarshi talqin qilinadi. Bu {symbolTotal} ramzlar {meaningTotal} ma'noga ega bo'lgan tuzilmani va vaziyatni qanday aniqlashni muhokama qiladi.",
    "backLabel": "Talqin asoslari",
    "sections": [
      {
        "title": "Ramzlar bir xil bo'lsa ham, turli vaziyatlar turli ma'nolarni beradi.",
        "blocks": [
          {
            "p": "Eski tush talqini kitoblarida, bir ramz har doim bitta ma'noga ega emas. Bir xil quyosh uchun ham, **ko'tarilayotgan quyosh va botayotgan quyosh qarama-qarshi talqin qilingan** — birinchisi oilada farovonlikni, ikkinchisi esa ota-onalarni yo'qotish haqida xavotirni bildiradi. Lug'at shunday yozilgan."
          },
          {
            "p": "{symbolTotal} ramzning jami {meaningTotal} ma'noga ega bo'lishining sababi shundaki, har bir ma'no uchun **o'sha ma'no qo'llaniladigan vaziyat** ham qayd etilgan, shuning uchun agar o'sha vaziyat siz taqdim etgan matnda ko'rinadigan bo'lsa, biz o'sha ma'noni tanlaymiz."
          }
        ]
      },
      {
        "title": "Vaziyatni qanday aniqlaymiz?",
        "blocks": [
          {
            "p": "Biz siz taqdim etgan matnda vaziyatni ko'rsatadigan so'zlarni qidiramiz. 「Men quyosh botayotganini ko'rdim」 jumlasida, botish vaziyati ko'rsatilgan, «Men quyoshni ko'tarilayotganini ko'rdim» jumlasida esa, ko'tarilish vaziyati ko'rsatilgan. Agar vaziyatni ko'rsatadigan so'zlar bo'lmasa, biz o'sha ramzning **asosiy ma'nosi**ga asoslanib talqin qilamiz."
          },
          {
            "p": "Shuning uchun, tushingizni yozganingizda, iltimos, **faqat paydo bo'lgan narsalarni emas, balki amalga oshirilgan harakatlarni ham qo'shing**; bu talqinni aniqroq qiladi. «Men cho'chqani ko'rdim» demoqdan ko'ra «cho'chqa uyga kirdi» demoq ancha ma'noli."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ko'proq yozsangiz, yaxshiroq, lekin keng yozish shart emas.",
        "blocks": [
          {
            "p": "Bir necha jumla kifoya. Ko'proq yozish ko'proq ramzlarni topish demak emas; aksincha, aloqasiz bayonotlar aralashsa, bu noto'g'ri ramzlarga olib kelishi mumkin."
          }
        ]
      },
      {
        "title": "Turli ma'nolarga ega {contextSplitSymbolTotal} ramz mavjud.",
        "blocks": [
          {
            "p": "Lug'atdagi {symbolTotal} ramzlardan **{contextSplitSymbolTotal}** ta ramzning ma'nolari vaziyatga qarab o'zgaradi. Qolganlari esa vaziyatdan qat'i nazar, bitta yo'nalishda talqin qilinadi."
          },
          {
            "p": "Ushbu **{contextSplitSymbolTotal}** ta ramz eng nozik hisoblanadi. Vaziyatni noto'g'ri tushunish yaxshi xabarni yomon xabar sifatida etkazish yoki aksincha bo'lishiga olib kelishi mumkin. Shuning uchun, agar vaziyat aniq bo'lmasa, biz **ramzning asosiy ma'nosi** bilan harakat qilamiz — biz noaniq narsalarni aniq kabi gapirmoqchi emasmiz."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Uyanishdagi his-tuyg'u ham hisobga olinadi.",
        "blocks": [
          {
            "p": "Tush mazmunidan pastda so'ralgan his-tuyg'ular va takrorlanishlar ramzlarni topish uchun ishlatilmaydi. Ular o'zgaruvchan ma'nolar holatida talqin yo'nalishini aniqlashda murojaat qilinadi. Siz tanlov qilishingiz shart emas; natijalar hali ham taqdim etiladi."
          }
        ]
      },
      {
        "title": "Tushning umumiy muhitini alohida hisobga olamiz.",
        "blocks": [
          {
            "p": "Agar bir nechta ramzlar topilsa, har bir ramzning ijobiy yoki ehtiyotkor ekanligini to'plab, tushning umumiy ohangini aniqlaymiz. Bir yaxshi ramz va bir ehtiyotkor ramzni o'z ichiga olgan tushni shunchaki \"yaxshi tush\" deb atamaymiz."
          },
          {
            "p": "Siz [ramzlar lug'atida](/dream/symbols) turli ramzlar va ularning ma'nolarini oldindan ko'rishingiz mumkin. Tushingizni yozishdan oldin, ichida nima borligini ko'zdan kechirish ham yaxshi."
          }
        ]
      }
    ]
  },
  "guide/good-and-bad": {
    "eyebrow": "Xizmatning asosi",
    "title": "Yaxshi va yomon tushlarni ajratish mezonlari",
    "summary": "Har bir ramzga berilgan to'rt qiymat va ularning taqsimoti, eng o'zgaruvchan ma'nolar sabablari va aralash tushlarni aralash sifatida muhokama qilishimiz sabablari.",
    "backLabel": "Talqin asoslari",
    "sections": [
      {
        "title": "Har bir ramz to'rt toifadan biriga tayinlanadi.",
        "blocks": [
          {
            "p": "Lug'atdagi {symbolTotal} ramzlar quyidagi toifalardan biriga joylashtiriladi."
          },
          {
            "ul": [
              "**Ijobiy {polarityPositive}** — boylik, bayramlar yoki yordamchilar kabi yoqimli voqealar sifatida talqin qilinadi.",
              "**Ambivalent {polarityAmbivalent}** — quyosh yoki cho'chqa kabi ramzlar, ularning ma'nolari amalga oshirilgan harakatlarga qarab o'zgarishi mumkin. **Bu eng keng tarqalgan va eng ehtiyotkor toifa.**",
              "**Ehtiyotkor {polarityNegative}** — nizolar, yo'qotishlar yoki salbiy voqealar sifatida talqin qilinadi.",
              "**Neytral {polarityNeutral}** — o'zida na omadli, na yomon bo'lmagan ramzlar, masalan, ranglar."
            ]
          }
        ]
      },
      {
        "title": "Eng o'zgaruvchan ma'nolar sabablari",
        "blocks": [
          {
            "p": "Bu biz erishgan muvozanat emas. **Bu asl matnlar qanday yozilgan.** Eski tush talqini matnlari bir xil ramz uchun vaziyatga qarab turli ma'nolarni qayd etgan, va bu vaziyatlarning ko'pchiligi qarama-qarshi — cho'chqani tutish omadli, lekin cho'chqaning o'z-o'zidan o'lishi yomon, va bu quyoshning chiqishi va botishi uchun ham shunday."
          },
          {
            "p": "Shuning uchun, \"yaxshi ramz paydo bo'ldi\" degani \"yaxshi narsalar bo'ladi\" degani emas. Biz etkazishi mumkin bo'lgan narsa, o'sha ramzning an'anada qanday talqin qilinganiga bog'liq."
          }
        ]
      },
      {
        "title": "Tushning ohangi ramzlaridan to'planadi.",
        "blocks": [
          {
            "p": "Agar bir nechta ramzlar topilsa, biz ularning omadli va ehtiyotkor ma'nolarini to'playmiz, tushning umumiy ohangini aniqlaymiz. Agar faqat ijobiy ramzlar paydo bo'lsa, bu yaxshi tush; agar faqat ehtiyotkor ramzlar paydo bo'lsa, bu ehtiyotkor tush; agar **aralash bo'lsa, biz uni aralash sifatida muhokama qilamiz.**"
          },
          {
            "p": "Biz aralash talqinni bir tomonga majburlamaymiz. Haqiqatan ham, odamlar ko'pincha aralash tushlar ko'radilar va ularni \"yaxshi tush\" deb qisqartirish na aniq, na foydali."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Aytilmagan so'zlar",
        "blocks": [
          {
            "p": "Biz nima bo'lishi, qachon bo'lishi yoki salomatlik va boylik haqida aniq bayonotlar bermaymiz. An'anaviy ramzlarning ma'nolarini tarjima qilish kelajakni bashorat qilishdan farq qiladi."
          }
        ]
      },
      {
        "title": "Ehtiyotkor tushlar paydo bo'lganda",
        "blocks": [
          {
            "p": "Ehtiyotkor sifatida talqin qilingan ramz paydo bo'lsa ham, bu yomon xabar degani emas. An'anaviy tush talqini bo'yicha, yomon tushlar odatda **hozirda tekshirilishi kerak bo'lgan vaziyatni ko'rsatish uchun ishlatiladi.** Agar nizoni bildiruvchi ramz paydo bo'lsa, bu og'zini tiqish tavsiyasini o'z ichiga olishi mumkin."
          },
          {
            "p": "Shu sababdan, bu xizmat amuletlar yoki charm sotmaydi. Sotiladigan yagona narsalar [tushingizni saqlashning ikki usuli](/guide/reports)dir."
          }
        ]
      }
    ]
  },
  "guide/conception-dreams": {
    "eyebrow": "Tug'ilish tushlari",
    "title": "Tug'ilish tushlarini qanday ajratish kerak",
    "summary": "Biz {conceptionSymbolTotal} tug'ilish tushlari ramzlarini qanday aniqlaymiz, nega barcha cho'chqa tushlari tug'ilish tushlari emas, va biz homiladorlik yoki jinsni aniqlamaymiz.",
    "backLabel": "Talqin asoslari",
    "sections": [
      {
        "title": "Birinchidan, aniqlik kiritaylik.",
        "blocks": [
          {
            "p": "**Dreams-Link homiladorlik holatini aniqlamaydi. Biz bolaning jinsini ham aytmaymiz.** Bu tushlar orqali bilib bo'ladigan narsa emas, shuningdek, biz ham buni qila olmaymiz."
          },
          {
            "p": "Biz etkazishi mumkin bo'lgan narsa shundan iborat — **an'anaviy ravishda tug'ilish tushlari sifatida talqin qilingan ramz ushbu tushda paydo bo'ldi.** O'sha ramz qadimgi davrlarda qanday talqin qilinganini faqat shuni taqdim etishimiz mumkin."
          }
        ]
      },
      {
        "title": "Tug'ilish tushlari sifatida talqin qilingan {conceptionSymbolTotal} ta ramz mavjud.",
        "blocks": [
          {
            "p": "Lug'atdagi {symbolTotal} ramzlardan **{conceptionSymbolTotal}** tasi tug'ilish tushlari sifatida belgilangan. Ko'pchiligi ajdaho, cho'chqa va yo'lbars kabi hayvonlar, shuningdek, shaftoli, xurmo va jujube kabi mevalar, shuningdek, quyosh va oyni o'z ichiga oladi."
          },
          {
            "p": "Biroq, **shunchaki o'sha ramz paydo bo'ldi, deb aytish tug'ilish tushidir, degani emas.** Bu xizmatning katta mehnati qo'yilgan joy."
          }
        ]
      },
      {
        "title": "Biz tanlangan ma'noga asoslanib aniqlaymiz, ramzga emas.",
        "blocks": [
          {
            "p": "Cho'chqa tug'ilish tushlari ramzi, lekin u shuningdek **boylik tushlari ramzi.** Agar biz uni faqat ramz paydo bo'lganligi uchun tug'ilish tushi deb e'lon qilsak, unda cho'chqa ko'rgan har bir kishi tug'ilish tushlarini ko'rgan bo'lardi. Haqiqatan ham, ko'pchilik boylik tushlari sifatida talqin qilingan."
          },
          {
            "p": "Shuning uchun, biz **o'sha ramzdan tanlangan haqiqiy ma'noni, faqat ramzning o'zini emas,** ko'rib chiqamiz. Biz faqat siz taqdim etgan vaziyatga asoslanib tug'ilish tomoniga moyil bo'lgan ma'no tanlanganda, uni tug'ilish tushi sifatida belgilaymiz. Bir xil cho'chqa bilan ham, talqin jumlaga qarab farq qilishi mumkin."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Agar siz homiladorlikni eslasangiz, biz avval buni ko'rib chiqamiz.",
        "blocks": [
          {
            "p": "Agar sizning yozuvingizda homiladorlik, tug'ilish tushlari yoki tug'ilish kabi atamalar bo'lsa, biz ramzning usuli ichida tug'ilish ma'nosini birinchi o'rinda ko'rib chiqamiz. Hatto bir xil tush ham, hozirgi vaziyatga qarab boshqacha talqin qilinishi mumkin."
          }
        ]
      },
      {
        "title": "Tug'ilish tushlari hisobotini alohida qilish sababi.",
        "blocks": [
          {
            "p": "Tug'ilish tushlari boshqa tushlardan farqli maqsadga xizmat qiladi. Ular ko'pincha bola tug'ilgandan keyin uzoq vaqt muhokama qilinadi va oila a'zolari o'rtasida bo'lishiladi. Shuning uchun, shunchaki ekran orqali ko'rish o'rniga, biz **saqlanadigan hujjat yaratdik.**"
          },
          {
            "p": "Nima kiritilganligi [tushingizni saqlashning ikki usuli](/guide/reports)da bayon etilgan. Siz xarid qilmasdan barcha talqinlarni ko'rishingiz mumkin."
          }
        ]
      }
    ]
  },
  "guide/how-to-write": {
    "eyebrow": "Qanday foydalanish",
    "title": "Tushni qanday yozish kerak",
    "summary": "Agar siz ko'rgan va qilgan narsalaringizni yozsangiz, bu yaxshi talqin qilinadi. Biz bitta fe'l ma'noni qanday belgilashini va nega biz sizdan his-tuyg'ularingizni va tushning takrorlanishini so'raymiz.",
    "backLabel": "Talqin asoslari",
    "sections": [
      {
        "title": "Iltimos, ko‘rganingiz va qilganingizni yozib qo‘ying",
        "blocks": [
          {
            "p": "Maxsus format yo‘q. Odatdagidek gapirganingizdek, ikki yoki uch jumla kifoya. Biroq, yaxshi talqin qilingan narsa — **ko‘rganingiz** va **bo‘lib o‘tgan voqealar**."
          },
          {
            "ul": [
              "Yaxshi talqin qilingan — 「Katta ilon menga o‘ralgan edi」, 「Men toza suv oqayotganini ko‘rdim」, 「Tishim o‘z-o‘zidan tushib qoldi」",
              "Talqin qilinmagan — 「Men qo‘rqdim」, 「Men g‘alati his qildim」, 「Kimdir mendan nafratlanayotgandek tuyuldi」"
            ]
          },
          {
            "p": "Agar siz faqat his-tuyg'ularingizni yozsangiz, hech qanday ramzlarni topa olmaysiz. An'anaviy **dream interpretation** [ob'ektlar va harakatlar](/guide/categories) haqida gapiradi, his-tuyg'ular haqida emas."
          }
        ]
      },
      {
        "title": "Qilgan narsalaringizni yozish aniqroq qiladi",
        "blocks": [
          {
            "p": "Bir xil ramz turli vaziyatlarda {contextSplitSymbolTotal} holatda turlicha ma’noga ega bo‘lishi mumkin. Quyosh chiqishi va botishi an’anaviy ravishda qarama-qarshi tarzda talqin qilingan."
          },
          {
            "p": "Shuning uchun, 「Men cho‘chqa ko‘rdim」 jumlasi 「Cho‘chqa uyga kirdi」 jumlasidan kamroq aniq, va 「Suv bor edi」 jumlasi 「Men toza suv ichdim」 jumlasidan kamroq aniq. **Bitta fe’l ma’noni belgilaydi.**"
          }
        ]
      },
      {
        "title": "His-tuyg‘ular va takrorlanish haqida so‘rash sababi",
        "blocks": [
          {
            "p": "Hayol mazmunidan pastda, **uyg‘onganingizda qanday his qilganingizni** va **takroriy hayollar bormi** tanlash uchun joy mavjud. Natijalar berilishi uchun ikkisini ham tanlashingiz shart emas."
          },
          {
            "p": "Bu qiymatlar ramzlarni topish uchun ishlatilmaydi. Ular bir xil ramzdan **qaysi ma’noni tanlash** va natijalarni qanday etkazish bo‘yicha qaror qabul qilishda ko‘rsatma sifatida ishlatiladi. Takroriy hayollar an’anaviy ravishda bir marta ko‘rilgan hayoldan boshqacha qaraladi."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Homiladorlik haqida eslatmalar bo‘lganda",
        "blocks": [
          {
            "p": "Agar matnda homiladorlik, **taemong** yoki tug‘ilish kabi so‘zlar bo‘lsa, avval o‘sha ramzning **taemong** ma’nosiga qaraymiz. Hatto bir xil cho‘chqa hayoli qadimgi odamlar tomonidan vaziyatga qarab turlicha talqin qilingan — [taemongni qanday ajratish](/guide/conception-dreams)"
          }
        ]
      },
      {
        "title": "Uzoq yozish shart emas",
        "blocks": [
          {
            "p": "Uzoqroq uzunlik ko‘proq ramzlar topiladi degani emas. Aslida, agar aloqasiz so‘zlar uzun yozilsa, alohida so‘zlar ramz sifatida talqin qilinishi ehtimoli oshadi. Iltimos, faqat **esda qolarli sahnalarni** yozing."
          },
          {
            "p": "Yozgan matningiz hech joyda saqlanmaydi. Erkin yozishingiz mumkin bo‘lgan sababi [saqlamaslik usuli](/guide/no-storage)da tushuntirilgan."
          }
        ]
      }
    ]
  },
  "guide/categories": {
    "eyebrow": "Xizmat Asosi",
    "title": "Sakkizta Kategoriya Bo‘yicha Me’yorlar",
    "summary": "Sakkizta kategoriya — ob’ektlar, harakatlar va hayvonlardan tortib tanaga va ranglarga qadar — har birida qancha ramz borligi va his-tuyg‘ular uchun kategoriya yo‘qligi sababi.",
    "backLabel": "Talqin Asosi",
    "sections": [
      {
        "title": "Hayollarda paydo bo‘ladigan narsalar sakkiz kategoriya bo‘yicha ajratilgan",
        "blocks": [
          {
            "p": "Biz {symbolTotal} ramzlarni xarakteriga qarab sakkiz kategoriya bo‘yicha guruhladik. Ajratish savoli — **hayolda qanday ko‘rinishda paydo bo‘ladi** — yirtqich hayvon, ob’ekt yoki qilgan narsangiz."
          },
          {
            "ul": [
              "**Ob’ektlar {categoryThing}** — pul, oynalar va pichoq kabi moddiy narsalar. Bu eng qalin kategoriya.",
              "**Harakatlar {categoryAction}** — hayolda amalga oshirilgan yoki boshdan kechirilgan narsalar, masalan, cho‘milish, bayram qilish yoki urilish.",
              "**Hayvonlar {categoryAnimal}** — ajdarlar, cho‘chqalar, ilonlar va sigirlar. Ularning ko‘plari **taemong** sifatida qaralgan.",
              "**Tabiat {categoryNature}** — suv, olov, quyosh va oy kabi katta va qadimiy narsalar.",
              "**Odamlar {categoryPerson}** — hayollarda paydo bo‘ladigan odamlar, masalan, shohlar, o‘g‘rilar va vafot etgan shaxslar.",
              "**Joylar {categoryPlace}** — hayollar sodir bo‘ladigan joylar, masalan, uylar, quduqlar va qabristonlar.",
              "**Tanalar {categoryBody}** — tishlar, sochlar, qon. Ma’no tananing qaysi joyida bo‘lishiga qarab farq qiladi.",
              "**Ranglar {categoryColor}** — ularning o‘zida yaxshi yoki yomon yo‘q va ular qanday bog‘langaniga qarab talqin qilinadi."
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Raqamli kategoriyalarni yo‘qligi sababi",
        "blocks": [
          {
            "p": "Biz raqamlar uchun kategoriya yaratmadik, masalan, 「uch」 yoki 「yetti」. **Ikkita asl matn ham raqamni kiritmaydi.** O‘sha kategoriyani ochish va to‘ldirish uchun biz hech bir matnda ko‘rinmaydigan narsani yozishimiz kerak bo‘lardi."
          }
        ]
      },
      {
        "title": "His-tuyg‘u kategoriyasi yo‘qligi sababi",
        "blocks": [
          {
            "p": "Biz his-tuyg‘ular uchun kategoriya yaratmadik, masalan, 「tashvish」 yoki 「intizorlik」. **Bu qadimgi hayol talqini matnlarida his-tuyg‘ular haqida hech narsa aytilmaganligi sababidir.** Ikkita asl matn ko‘rgan narsalar va bo‘lib o‘tgan voqealar haqida gapiradi, talqin obyekti sifatida esa hayol egasining his-tuyg‘ulari haqida emas."
          },
          {
            "p": "Biz bir vaqtlar his-tuyg‘ular uchun kategoriya yaratishga harakat qildik, va natijada 「sevgi yo‘qotish」 va 「emotsional barqarorlik」 kabi atamalar paydo bo‘ldi. Bu **ko‘rinishlar** hayollarda paydo bo‘lmaydi, balki zamonaviy psixologiyadan olingan so‘zlardir. Bu boshqa turdagi xizmat va bu lug‘atning maqsadi emas."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Shunday qilib, siz yozganingizda",
        "blocks": [
          {
            "p": "Iltimos, his-tuyg‘ular o‘rniga **ko‘rganingiz va qilganingizni** yozing, chunki bu ancha yaxshi talqin qilinadi. Biroq, biz siz uyg‘onganingizda qanday his qilganingiz haqida alohida so‘raymiz — bu bir xil ramz uchun ma’nolar farq qilishi mumkin bo‘lgan vaziyatlarda ko‘rsatma sifatida ishlatiladi."
          }
        ]
      },
      {
        "title": "Ranglar yolg‘iz ishlatilmaydi",
        "blocks": [
          {
            "p": "Ranglar {categoryColor} o‘zida yaxshi yoki yomon yo‘q. Qanday qilib ko‘k ilonlar va qizil ilonlar turlicha talqin qilinganidek, ularning ma’nolari **bog‘langan narsalarga** qarab o‘zgaradi. Shuning uchun, bu kategoriya boshqa ramzlar bilan paydo bo‘lganda o‘qiladigan qiymatlar sifatida qaraladi."
          },
          {
            "p": "Kategoriya bo‘yicha to‘liq ro‘yxat [Ramzlar Lug‘ati](/dream/symbols)da mavjud. Siz ramzni ochganingizda, etkazilgan ma’no, kategoriya va bog‘langan ramzlar taqdim etiladi."
          }
        ]
      }
    ]
  },
  "guide/not-found": {
    "eyebrow": "Qanday Foydalanish",
    "title": "Ramz topilmaganda",
    "summary": "Agar hech narsa topilmasa, biz shuni aytamiz. Nima uchun bu sodir bo‘lishi, o‘sha ekranda nima ko‘rsatishimiz va lug‘at qanday kengaytirilishi haqida gapiramiz.",
    "backLabel": "Talqin Asosi",
    "sections": [
      {
        "title": "Hech narsa topilmasa, hech narsa topilganini aytamiz",
        "blocks": [
          {
            "p": "Agar siz yozgan matnda biron bir ramz topa olmasak, biz **hech narsa topilganini aytamiz.** Biz unga o‘xshash ramzni majburan kiritmaymiz yoki bo‘shliqni to‘ldirish uchun ishonarli jumla yozmaymiz."
          },
          {
            "p": "Bu xizmat uchun eng muhim masala. Siz bo‘shliqni to‘ldirganingizda, kelayotgan talqin va aslida amalga oshirilgan narsa farq qiladi."
          }
        ]
      },
      {
        "title": "Nima uchun topilmaydi?",
        "blocks": [
          {
            "p": "Bu odatda quyidagi sabablardan biri."
          },
          {
            "ul": [
              "**Bu hali lug‘atda yo‘q ramz.** Hozirda {symbolTotal} ta ramz ro‘yxatga olingan, lekin hayollarda paydo bo‘lishi mumkin bo‘lgan ko‘plab boshqa ramzlar mavjud.",
              "**Siz faqat his-tuyg'ularingizni yozdingiz.** Agar sizda \"Men qo'rqib qoldim\" yoki \"Men g'alati his qildim\" kabi his-tuyg'ular bo'lsa, aniqlanadigan ramzlar yo'q. An'anaviy **dream interpretation** **ko'rinadigan ob'ektlar va harakatlar** haqida gapiradi, his-tuyg'ular haqida emas.",
              "**Bu juda qisqa.** Faqat bir yoki ikki so'zdan ko'ra, jumlalar bilan yozish yaxshiroq."
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Qayta yozishga harakat qilganingizda",
        "blocks": [
          {
            "p": "Iltimos, tushdagi **nima ko'rganingiz va nima qilganingizni** qo'shing. \"Men xavotirda edim\" demoqdan ko'ra \"tishlarim o'z-o'zidan tushdi\" demoq samaraliroq, va \"men buni yoqtirdim\" demoqdan ko'ra \"men toza suv oqayotganini ko'rdim\" demoq samaraliroq."
          }
        ]
      },
      {
        "title": "Biz bo'sh ekran qoldirmaymiz",
        "blocks": [
          {
            "p": "Nimadir topilmasa, biz shuningdek, o'sha ekranda **{popularSymbolCount} tez-tez qidirilgan ramzlar** ni ko'rsatamiz. Bu ramzlar lug'atdagi eng vakillik qiluvchi ramzlardan tanlanadi, bu sizga agar ulardan biri tushingizda bo'lgan bo'lsa, eslashga yordam beradi."
          },
          {
            "p": "Agar siz hamma narsani ko'rishni xohlasangiz, siz {symbolTotal} ramzlarni toifalar bo'yicha tartiblangan holda [ramzlar lug'atida](/dream/symbols) topishingiz mumkin. Har bir ramz o'zining ma'nosi va bog'liq ramzlarini o'z ichiga oladi."
          }
        ]
      },
      {
        "title": "Lug'at kelajakda qanday kengayadi?",
        "blocks": [
          {
            "p": "Sonlarni oshirishdan ko'ra, biz avval **allaqachon mavjud bo'lgan narsalarni aniq aniqlashga** e'tibor qaratmoqdamiz. Biz bir xil ramzlar uchun {aliasTotal} alternativ nomlarni qo'shdik va shakllarini o'zgartiruvchi qo'shimchalar bilan so'zlar ham aniqlanishini ta'minladik."
          },
          {
            "p": "Ramzlarni kengaytirishda, biz faqat **asl matnda yozilgan narsalarni** qo'shamiz. Agar bir ma'no uchun mos keladigan asl ibora bo'lmasa, yozuv yaratilmaydi — asosga ega bo'lmagan sonlarni oshirish yaratilish, lug'at emas. Ushbu urinish va uning natijalari [nima uchun modellarni ishlatmaymiz](/guide/no-ai) da hujjatlashtirilgan."
          }
        ]
      }
    ]
  },
  "guide/no-ai": {
    "eyebrow": "Xizmat Asosi",
    "title": "Tushlarni talqin qilishda sun'iy intellektni ishlatmaslik sabablari",
    "summary": "Talqinlarni yaratish uchun modelni chaqiradigan kod yo'q. Bu lug'atni model yordamida kengaytirishga urinish natijasi va natijada nimalar qo'lga kiritilgan va nimalar qurbon qilingan.",
    "backLabel": "Talqin Asosi",
    "sections": [
      {
        "title": "Tushlarni talqin qilishda sun'iy intellekt ishlatilmaydi",
        "blocks": [
          {
            "p": "Hozirgi ko'plab tushlarni talqin qilish xizmatlari tush hikoyalarini generativ modellarga kiritish orqali yaratilgan yozuvlarni ko'rsatadi. Dreams-Link buni qilmaydi. **Talqinlarni yaratish uchun modelni chaqiradigan kod yo'q.**"
          },
          {
            "p": "Bizning ishimiz oddiy. Biz siz taqdim etgan matndagi ramzlarni topamiz va lug'atda o'sha ramzlar haqida yozilgan ma'nolarni tanlaymiz. Lug'atda bo'lmagan jumlalar uchun joy yo'q."
          },
          {
            "p": "Lug'atning o'zi model tomonidan yaratilmaydi. Har bir ma'no **qaysi asl tushlarni talqin qilish matnidan kelib chiqqanligi bilan** birga keladi va o'sha parcha asl fayl bilan so'zma-so'z solishtiriladi."
          }
        ]
      },
      {
        "title": "Nima uchun bu qaror qabul qilindi?",
        "blocks": [
          {
            "p": "**Modellar bilmaydigan narsalarini bilmayman demaydi.** Ular asosga ega bo'lmagan ramzlar haqida so'ralganda, ular ishonarli kelib chiqishlarni ixtiro qiladilar. Va bu ixtiro qilingan yoki yo'qligini o'quvchi farqlay olmaydi. An'anani etkazish o'rniga yaratilish kiritilsa, xizmatning poydevori qulaydi."
          },
          {
            "p": "Biz lug'atni kengaytirish uchun ramzlar yaratishga modelni ishlatishga harakat qildik. Qabul qilishga loyiq deb topilgan oltmish olti misoldan, **ellik besh ta etkazilgan asosni taqdim eta olmadi**, shuningdek, an'anaviy tushlarni talqin qilishda mavjud bo'lmaydigan metro va avtomagistral kabi misollar ham bor edi. Shuning uchun, **hech biri qo'shilmagan.**"
          }
        ]
      },
      {
        "kind": "note",
        "title": "Katta model bilan ham shunday bo'lgan",
        "blocks": [
          {
            "p": "Biz yaxshiroq modelda ham xuddi shunday ishni bajarganimizda, o'n to'qqizdan biri o'tdi, va o'sha biri faqat bir xil asos bilan bir xil so'zning takrorlanishi edi. Katta model faqat **boshqalar uchun ishonarliroq** gapiradi."
          }
        ]
      },
      {
        "title": "Model ishlatmaslikning foydalari",
        "blocks": [
          {
            "ul": [
              "**Agar bu bir xil tush bo'lsa, bir xil talqin chiqadi.** Har safar uni ko'rganingizda so'zlar o'zgarmaydi.",
              "**Bu tez.** Modelning javobini kutish shart emas, shuning uchun natijalar darhol mavjud.",
              "**Siz yozgan tush tashqariga chiqmaydi.** Uni tashqi kompaniya serveriga yuborish shart emas — iltimos, buni [saqlanmaydigan usul bilan](/guide/no-storage) birga o'qing.",
              "**Bu bepul taklif qilinishi mumkin.** Tushlar har kuni bo'ladi, shuning uchun ko'p so'rovlar mavjud. Agar har bir so'rov uchun model chaqirilsa, xarajat bir joydan qoplanishi kerak."
            ]
          }
        ]
      },
      {
        "title": "Buning o'rniga, nimalar qurbon qilingan",
        "blocks": [
          {
            "p": "Biz lug'atda bo'lmagan narsalarni talqin qila olmaymiz. Agar biz modeldan foydalanganimizda, siz yozgan narsalar uchun ishonarli javob bo'lar edi. Biz **topa olmaganimizda topa olmadik deb aytishni** tanladik. O'sha paytda ko'rsatadigan narsamiz [ramz topilmasa](/guide/not-found) da hujjatlashtirilgan."
          }
        ]
      }
    ]
  },
  "guide/reports": {
    "eyebrow": "Pullik Mahsulotlar",
    "title": "Tushlaringizni saqlashning ikki usuli",
    "summary": "Talqin o'zi xarajat talab qilmaydi. Bu ikki pullik variant nima ekanligini, ularning tarkibini va nima uchun yaxshiroq talqinlar emasligini tushuntiradi.",
    "backLabel": "Talqin Asosi",
    "sections": [
      {
        "title": "Talqin o'zi xarajat talab qilmaydi",
        "blocks": [
          {
            "p": "Tushingizni yozib qo'yish va qaysi ramzlar mavjudligini ko'rish **pul talab qilmaydi va a'zolikni talab qilmaydi.** Odamlar har kuni tush ko'rganligi sababli, biz bu joyni bepul taklif qilishimiz kerak deb hisobladik."
          },
          {
            "p": "**Ikki pullik variant yaxshiroq talqinlar emas.** Ular **bir xil talqinni saqlashning ikki usuli.** To'siqda ko'rgan mazmuningiz to'lovdan keyin o'zgarmaydi."
          }
        ]
      },
      {
        "title": "Tush Kartasi — Bir Rasm",
        "blocks": [
          {
            "p": "Biz sizning tushingizda topilgan ramzlar va ularning ma'nolarini **bir rasmda** taqdim etamiz. Bu rasm fayli, PDF emas, shuning uchun siz uni shunday saqlashingiz yoki boshqalarga yuborishingiz mumkin."
          },
          {
            "p": "Bu yaxshi tush ekranni yopganda yo'qolganida afsuslanadiganlar uchun. Biz tushlarni saqlamaymiz, shuning uchun agar siz ularni saqlamoqchi bo'lsangiz, bu yagona usul."
          }
        ]
      },
      {
        "title": "Tug'ilish Tushi Hisoboti — Hujjat {conceptionPages} sahifa",
        "blocks": [
          {
            "p": "Biz **{conceptionPages}-sahifali hujjat** yaratamiz, bu tug'ilish tushini ko'rsatadigan ramzlarni o'z ichiga oladi. U qaysi ramzlar paydo bo'lganini, o'sha ramzlar an'anaviy ravishda qanday talqin qilinganini va o'sha ma'lumotlarni yozish uchun joyni o'z ichiga oladi."
          },
          {
            "p": "Tug'ilish tushlari ko'pincha bolalar tug'ilgandan keyin ham oila a'zolari o'rtasida muhokama qilinadi va bo'lishiladi, shuning uchun biz ekranda ko'rish uchun juda qimmatli tushlar uchun alohida hujjat yaratdik."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bu yerda ham ishlatilmagan so'zlar",
        "blocks": [
          {
            "p": "Biz homiladorlik holati yoki bolalar jinsiga oid hukmlar bermaymiz. Bunday bayonotlar hujjatda kiritilmaydi. Qo'shimcha ma'lumot uchun, iltimos, [tug'ilish tushlari qanday filtrlanishi haqida](/guide/conception-dreams) qarang."
          }
        ]
      },
      {
        "title": "Nima uchun hujjat endi yo'q?",
        "blocks": [
          {
            "p": "Ushbu xizmat to'qqiz betlik hisobot tayyorlaydi. Bu, **saju** dvigateli bitta tug'ilish sanasidan ko'p qiymatlarni chiqarib olgani uchun. An'anaviy **dream interpretation** shunday ishlamaydi."
          },
          {
            "p": "Lug'atda {symbolTotal} ramzlar va {meaningTotal} ma'nolar mavjud, lekin **birgina tushga haqiqatan ham bir necha ramzlar tegishli.** Buni to'qqiz sahifaga kengaytirish uchun, asl matnda topilmaydigan narsalarni yozish kerak bo'ladi, va aynan shu xizmat buni qilmaslikka qaror qildi. Shuning uchun, hujjat materiallar halol ruxsat berganicha uzun, va undan ko'proq emas."
          }
        ]
      },
      {
        "title": "Qiymatlar va Mavjudlik",
        "blocks": [
          {
            "p": "Narxlar [narxlar qo'llanmasida](/pricing) mavjud. Ushbu hujjat miqdorlarni ro'yxatga olmasligi sababi maqsadli — qiymatlar o'zgarganda eski miqdorlar bilan qolish holatlarini oldini olish. Ekran va shartlar barcha miqdorlarni bir joydan o'qiydi."
          },
          {
            "p": "Siz to'lagan hujjat **bir xil buyurtma bilan qayta olinishi mumkin.** Biroq, biz fayllarni saqlamaymiz, shuning uchun natijalar ekranidan chiqib ketgandan so'ng, uni qayta yaratish mumkin emas — iltimos, olgan faylingizni saqlang."
          }
        ]
      }
    ]
  }
} satisfies Record<DocKey, DocPage>;

export const UZ_NOTICES = {
  "kindLabels": {
    "service": "Xizmat",
    "product": "Hisobotlar",
    "engine": "Hisoblash",
    "support": "Qo'llab-quvvatlash"
  },
  "intro": "Foydalanish shartlaringizga o'zgarishlar — narxlar, siyosatlar — bu yerda kuchga kirishidan oldin e'lon qilinadi. Ichki yaxshilanishlar, masalan, ekran tezligini oshirish bu yerda e'lon qilinmaydi: bu yerda ko'rsatilganlar siz bilishingiz kerak bo'lgan ma'lumotlardir.",
  "empty": {
    "title": "E'lon qilingan hech qanday xabar yo'q",
    "body": "Agar sizga xabar berish kerak bo'lgan o'zgarishlar bo'lsa, ular bu yerda e'lon qilinadi."
  },
  "effective": "{date} dan kuchga kiradi",
  "pager": {
    "label": "Xabarlar sahifasi",
    "newer": "← Eng yangi",
    "older": "Oldingi e'lonlar →"
  },
  "items": {
    "2026-08-06-no-storage": {
      "title": "Siz taqdim etgan tush saqlanmaydi.",
      "body": [
        "Tush hikoyalari bu xizmat tomonidan qabul qilingan eng shaxsiy qiymatlardir. Shuning uchun, ular hech qanday jadvalda yozilmaydi. Kirish faqat hisoblash uchun natija manzilida olib boriladi va oynani yopganda, yo'qoladi.",
        "Biz tushlarni to'plab, oqimini ko'rsatadigan xususiyatni yaratmaslikka qaror qildik (tush daftari). Bu foydali xususiyat, lekin buni amalga oshirish uchun eng shaxsiy yozuvlar doimiy ravishda saqlanishi kerak.",
        "Natija havolasini boshqalarga yuborganingizda, u tush mazmunini o'z ichiga oladi. Bo'lishishda ehtiyot bo'ling."
      ]
    },
    "2026-08-06-engine-version": {
      "title": "Natijalar ramzlar lug'ati va hisoblash mezonlarini o'z ichiga oladi.",
      "body": [
        "Tushni talqin qilishning asosi an'anaviy tush talqini ramzlar lug'atidir. Natijalar va hujjatlar ushbu lug'at versiyasini (masalan, 1.2.0) va moslashuv qoidalari versiyasini (masalan, dream-1.0.0) o'z ichiga oladi. Bir xil tush har doim bir xil mezon asosida bir xil ramz beradi.",
        "Agar biz lug'atga ramzlar qo'shsak yoki natijalarni o'zgartirishi mumkin bo'lgan ma'nolarni o'zgartirsak, bu haqda bu yerda ma'lumot beriladi. Bu siz oldin olgan natijalaringiz o'zgarishi mumkinligini anglatadi.",
        "Biz lug'atda mavjud bo'lmagan an'anaviy ma'nolarni yaratmaymiz. Agar hech qanday ramz topilmasa, biz shunchaki hech narsa topilmaganini aytamiz va yakunlaymiz."
      ]
    },
    "2026-08-06-conception": {
      "title": "Biz faqat ta'sir tushini xabar beramiz va hukm bermaymiz.",
      "body": [
        "Agar tushda an'anaviy ravishda ta'sir tushiga o'xshash ramzlar paydo bo'lsa, biz sizni bu haqda xabardor qilamiz. Biroq, biz homiladorlik holatini yoki bolaning jinsini aniqlamaymiz — bunday da'volar asosga ega emas va tibbiy hukmlar tibbiyot muassasalarining mas'uliyatidir.",
        "An'anaviy hikoyalarda o'g'il va qizlar haqida aytilishi, bu an'analar orqali o'tgan odatlarning aksidir va bu bizning to'g'ri bashorat qilayotganimizni anglatmaydi."
      ]
    }
  }
} satisfies NoticeCopy;
