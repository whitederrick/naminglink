import type { DocPage, NoticeCopy } from "./types";
import type { DocKey } from "./ko";

/** O‘zbekcha — `scripts/translate-doc-content.ts`가 만든다. 손으로 고치지 말 것. */
export const UZ_DOCS = {
  "about": {
    "eyebrow": "Kirish",
    "title": "Dreams-Link ga Kirish",
    "summary": "Bu xizmat an'anaviy **dream interpretation** ramzlar lug'atidan foydalanib, tushlarni talqin qiladi. Qanday asosda ishlatilganini va qanday narsalar aytilmaganini aniqlaydi.",
    "backLabel": "Bosh sahifaga qaytish",
    "sections": [
      {
        "title": "Biz nima qilamiz?",
        "blocks": [
          {
            "p": "Dreams-Link siz yozgan tushlardan **an'anaviy dream interpretation** da ishlatiladigan ramzlarni topadi va ularning ma'nolarini ko'rsatadi. Tushlar biz har kuni boshdan kechiradigan narsalar bo'lgani uchun, ekranda ko'rsatiladigan talqinlar **bepul va a'zolik talab qilmaydi.**"
          },
          {
            "p": "Faqat **ikki turdagi saqlash** uchun haq olinadi — yaxshi tushni o'z ichiga olgan rasm (tush kartasi) va an'anaviy ravishda **태몽** deb hisoblangan ramz paydo bo'lganda fonni aks ettiruvchi PDF."
          }
        ]
      },
      {
        "title": "Talqin uchun asos nima?",
        "blocks": [
          {
            "p": "Talqin uchun asos **{symbolTotal} ramzlar** lug'ati. Tush matnida ramzlarni topamiz va faqat o'sha ramzlar uchun lug'atda yozilgan ma'nolarni ko'rsatamiz. Agar bir ramzning bir nechta ma'nosi bo'lsa, biz kontekstga qarab tanlaymiz — masalan, ilonni ushlash va chaqmoq olish an'anaviy ravishda qarama-qarshi hisoblanadi."
          },
          {
            "p": "Qidiruv **faqat belgilangan qoidalarga** muvofiq amalga oshiriladi. Agar tush bir xil bo'lsa, bir xil ramzlar har doim paydo bo'ladi va talqin kechagi kundan bugungi kunga o'zgarmaydi."
          }
        ]
      },
      {
        "title": "Biz nima demaymiz?",
        "blocks": [
          {
            "p": "**Biz lug'atda yo'q an'anaviy ma'nolarni ixtiro qilmaymiz.** Agar ramzlar topilmasa, biz shunchaki hech narsa topilmaganini aytamiz va xulosa qilamiz. O'sha joyni mumkin bo'lgan so'zlar bilan to'ldirish bu xizmatning eng ehtiyotkorligi."
          },
          {
            "p": "**Bir 태몽 faqat belgi, hukm emas.** Biz sizga tushda an'anaviy ravishda **태몽** deb hisoblangan ramz paydo bo'lganini xabar beramiz. Biz homiladorlik yoki bolaning jinsi haqida bashorat bermaymiz va bunday da'volar uchun asos yo'q."
          },
          {
            "p": "Biz **salomatlik, boylik yoki kasb haqida aniq bayonotlar bermaymiz.** Bu an'anaviy **dream interpretation** nuqtai nazaridan ma'lumotdir va tibbiy, moliyaviy yoki huquqiy maslahat emas."
          }
        ]
      },
      {
        "title": "Siz yozgan tushlarni saqlamaymiz.",
        "blocks": [
          {
            "p": "Tush hikoyalari bu xizmat oladigan eng shaxsiy qismdir. Shuning uchun, biz **ularni saqlamaymiz.** Kirish faqat hisob-kitoblar uchun ishlatiladi va hech qanday server loglarida yozilmaydi."
          },
          {
            "p": "Biz **tushlar kundaligi kabi tushlarni yig'ish funksiyasini yaratmaslikka qaror qildik.** Bu qimmatli xususiyat, lekin eng shaxsiy yozuvlarni saqlashni talab qiladi."
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Usul [qo'llanma hujjatida](/guide) batafsil bayon etilgan. Biznes ma'lumotlari va aloqa tafsilotlarini [biz bilan bog'laning](/contact) bo'limida topishingiz mumkin."
          }
        ]
      }
    ]
  },
  "guide": {
    "eyebrow": "Hisoblash Asosi",
    "title": "Hisoblashning asosi nima?",
    "summary": "Biz Dreams-Link tomonidan ishlatiladigan barcha qoidalarni oshkor qilamiz. Qaysi ramzlar topilganini, lug'atda nima yozilganini — ekranda ko'rsatiladigan talqinlar qayerdan kelayotganini tekshirishingiz mumkin.",
    "backLabel": "Bosh sahifaga qaytish",
    "sections": [
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Bu yerda yozilgan barcha raqamlar **ramzlar lug'atidan va qidiruv qoidalaridan to'g'ridan-to'g'ri o'qiladi.** Biz matnni qo'lda yozmaymiz, agar lug'at kengaytirilsa yoki qoidalar o'zgartirilsa, bu hujjatlardagi raqamlar ham o'zgaradi."
          }
        ]
      }
    ]
  },
  "guide/symbol-dictionary": {
    "eyebrow": "Xizmatning Asosi",
    "title": "Ramzlar lug'ati asosini nima?",
    "summary": "Bu talqinlarning qayerdan kelayotganini aniqlaydi. 215 ramzni to'qqiz toifaga bo'lish uchun mezonlar, faqat 24 tasdiqlanishi mumkin bo'lgan sabablari va nima uchun bo'shliqlarni to'ldirmasligimizni tushuntiradi.",
    "backLabel": "Talqin Asosi",
    "sections": [
      {
        "title": "Biz faqat lug'atda yozilganlarni ko'rsatamiz.",
        "blocks": [
          {
            "p": "Dreams-Link dan olingan talqinlar **oldindan yozilgan ramzlar lug'atidan** keladi. Siz taqdim etgan matnda ramzlarni topamiz va o'sha ramzlar uchun lug'atda yozilgan ma'nolarni ko'rsatamiz. Biz lug'atda yo'q so'zlarni yaratmaymiz."
          },
          {
            "p": "Hozirda lug'atda **{symbolTotal} ramz** mavjud va bu ramzlar jami **{meaningTotal} ma'no** ga ega. Ko'p ramzlar faqat bitta ma'noga ega, ba'zilari esa kontekstga qarab bir necha ma'noga ega."
          }
        ]
      },
      {
        "title": "To'qqiz toifaga bo'lingan.",
        "blocks": [
          {
            "p": "Biz tushlarda paydo bo'ladigan narsalarni ularning xususiyatlariga asoslanib to'qqiz toifaga guruhladik. Qavs ichidagi raqamlar hozirgi hisoblar."
          },
          {
            "ul": [
              "**Obyektlar**({categoryThing}) · **Hayvonlar**({categoryAnimal}) · **Tabiat**({categoryNature}) — uchta eng katta toifa. An'anaviy **dream interpretation** asosan ko'rinadigan obyektlar, hayvonlar va osmon va suv elementlarini muhokama qiladi.",
              "**Harakatlar**({categoryAction}) · **Tanalar**({categoryBody}) — qilingan ishlar, masalan, quvish yoki tushish, va tananing qaysi joyida, masalan, yuz yoki soch.",
              "**Odamlar**({categoryPerson}) · **Joylar**({categoryPlace}) · **Ranglar**({categoryColor}) · **Raqamlar**({categoryNumber})"
            ]
          },
          {
            "p": "Ularni toifalar bo'yicha ko'rish uchun siz [ramzlar lug'atida](/dream/symbols) to'liq ro'yxatini ko'rishingiz mumkin."
          }
        ]
      },
      {
        "title": "Faqat {cultureNoteTotal} tasdiqlanishi mumkin.",
        "blocks": [
          {
            "p": "Ramzlar orasida **{cultureNoteTotal}** talqin uchun sabablari yozilgan. Masalan, tishlarni yo'qotish tushida yuqori va pastki tishlarni ajratish sababi. Qolgan ramzlar bo'sh joylarga ega."
          },
          {
            "p": "**Biz bo'sh joylarni to'ldirmadik.** Mavjud bo'lgan asoslarni qo'shish hujjatni qalinlashtiradi, lekin o'sha paytda bu lug'at an'anani etkazmaydi, balki uni ixtiro qiladi. Nima tasdiqlanishi mumkin va nima tasdiqlanishi mumkin emasligini ajratish yanada halol."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Lug'atni ixtiyoriy ravishda kengaytirmaslik sabablari.",
        "blocks": [
          {
            "p": "Biz aslida ramzlarni yuzlab kengaytirishga harakat qildik, lekin voz kechdik. Avtomatik ravishda yaratilgan yozuvlar yoki bir xil iboralarni takrorladi, masalan, 'romantika → yaxshi munosabat' yoki tasdiqlangan kelib chiqishlarni taqdim eta olmadi. Biz **mavjud narsalarni aniq topish** raqamlarni oshirishdan yaxshiroq deb xulosa qildik."
          }
        ]
      },
      {
        "title": "Yaxshi va yomon lug'at tomonidan oldindan belgilangan.",
        "blocks": [
          {
            "p": "Har bir ramzda yaxshi va yomon ma'nolar mavjud. **Yaxshi {polarityPositive}**, **noaniq {polarityAmbivalent}**, **ogohlantiruvchi {polarityNegative}**, va **neytral {polarityNeutral}**."
          },
          {
            "p": "Yaxshi ma'nolar yarmidan ko'p bo'lishi bizning saxiyligimizdan emas, balki an'anaviy **dream interpretation** doimo shunday bo'lganligi sababli — cho'chqalar, ajdaho va olov kabi katta va kuchli ramzlar odatda yaxshi omenlar sifatida ko'rilgan. Biroq, barcha tushlar ijobiy talqin qilinmaydi. Bu qiymat har bir ramzning tabiati va topilgan ramzlarni yig'ish orqali tushning umumiy muhitini qayta baholashni aks ettiradi."
          }
        ]
      }
    ]
  },
  "guide/how-matching-works": {
    "eyebrow": "Xizmatning Asosi",
    "title": "Tush hikoyalarida ramzlarni qanday topish.",
    "summary": "Bu erda ramzlar qanday qilib erkin yozilgan jumlalardan tanlanishi va 'maxsus' kabi so'zlarga tasodifan kirgan harflarni qanday filtrlash haqida tushuntiriladi.",
    "backLabel": "Talqin Asosi",
    "sections": [
      {
        "title": "Biz siz taqdim etgan matnda ramzlarni topamiz.",
        "blocks": [
          {
            "p": "Siz tush hikoyangizni erkin yozganingizda, biz o'sha matndan lug'atdan ramzlarni qidiramiz. Siz narsalarni tanlash yoki maxsus formatda yozishingiz shart emas. Faqat odatdagidek yozing, masalan, 'Kecha kechqurun, katta piton menga o'raldi.'"
          },
          {
            "p": "Qidirishda, biz nafaqat ramzning nomini, balki **{aliasTotal} alternativ nomlarni** ham ko'rib chiqamiz. Bu so'zlar bir xil narsani anglatadi, masalan, 구렁이 (gureongi) va 뱀 (baem), 떨어지다 (tteoreojida) va 빠지다 (ppajida). Tugallanishlar bilan farqlar, masalan, 「떨어지는」 (tteoreojineun) · 「쫓겨서」 (jjotgyeoseo) · 「빠졌다」 (ppajyeotda), ham kiritiladi."
          }
        ]
      },
      {
        "title": "So'z ichida tasodifan paydo bo'lgan belgilar hisobga olinmaydi",
        "blocks": [
          {
            "p": "Bu Koreyada eng qiyin jihatdir. Ramzlar orasida **{singleCharSymbolTotal} bitta belgi** mavjud, masalan, **별** (byeol) · **말** (mal) · **배** (bae) · **손** (son), bu boshqa so'zlarda tez-tez uchraydi."
          },
          {
            "ul": [
              "«Oddiy kun edi» degan iboradagi **yulduz**",
              "«Kimdir meni quvdi» degan iboradagi **narsa**",
              "«O'sha kishi aytdi» degan iboradagi **so'z** va «och qolganimda» degan iboradagi **qorin**"
            ]
          },
          {
            "p": "Bularni ramz sifatida hisoblash noaniq talqinlarga olib keladi. Shuning uchun, biz atrofdagi belgilarni ko'rib chiqamiz — agar **oldinda koreyscha belgi bo'lsa**, biz uni so'zning bir qismi deb hisoblaymiz va hisobga olmaymiz, va oxirida qo'shilgan belgi qism yoki tugallanish ekanligini ajratamiz, 「소가」 (soga) ni o'tkazib, 「소리」 (sori) ni filtrlash imkonini beradi."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bu qanday ishlayotganini ko'rsatadi",
        "blocks": [
          {
            "p": "Ushbu qoidani amalga oshirishdan oldin, o'n ikki haqiqiy jumla bilan sinov o'tkazilganda, **barcha o'n ikki** noaniq ramzlarni o'z ichiga oldi. Mazmuni ahamiyatga ega bo'lmagan bir jumla hatto 태몽 (taemong) sifatida belgilangan edi."
          },
          {
            "p": "Endi, bir narsa qolmoqda — 「배가 고팠다」 (bae ga gopatda) iborasidagi 배 (bae). U bir xil tovushga ega, lekin boshqa ma'noga ega, shuning uchun atrofdagi belgilar bilan faqat filtrlash mumkin emas."
          },
          {
            "p": "Bir narsani topmaslik halol masala. Biroq, noaniq narsani topish, o'sha so'z atrofida hech qachon bo'lmagan an'anani o'rnatishni anglatadi."
          }
        ]
      },
      {
        "title": "Bir xil belgilar har doim bir xil natijalarni beradi",
        "blocks": [
          {
            "p": "Qidirish qoidalarida tasodifiylik uchun joy yo'q. Lug'at mustahkam va qoidalar belgilangan, agar siz bir xil jumlani yana kiritganingizda, **bir xil ramz bir xil tartibda paydo bo'ladi**. Bugun ko'rgan talqiningiz ertaga ko'rganingizdan farq qilmaydi."
          },
          {
            "p": "Ushbu sifat ham biz o'zimizga bergan va'dadir. Har safar o'zgaradigan talqinlar qiziqarli, lekin asosdan mahrum. Bu [model ishlatmasligimizning sababi](/guide/no-ai) hikoyasiga bog'liq."
          }
        ]
      }
    ]
  },
  "guide/one-symbol-many-meanings": {
    "eyebrow": "Xizmat Asosi",
    "title": "Bir xil ramzning turli ma'nolarga ega bo'lishining sababi",
    "summary": "An'anaviy ravishda, ilonni ushlash va undan chaqmoq olish qarama-qarshi tushunchalardir. Bu 215 ramzning 256 ma'noga ega bo'lishi va vaziyatlarni qanday talqin qilish haqida muhokama qiladi.",
    "backLabel": "Talqin Asosi",
    "sections": [
      {
        "title": "Ramzlar bir xil bo'lsa ham, turli vaziyatlar turli ma'nolarni keltirib chiqaradi",
        "blocks": [
          {
            "p": "An'anaviy 해몽 (dream interpretation) da, bitta ramz har doim bitta ma'noga ega emas. Bir xil ilon uchun ham, **uni ushlash va chaqmoq olish mutlaqo qarama-qarshi talqin qilingan.** Bu lug'atda ham qayd etilgan."
          },
          {
            "p": "Shuning uchun, {symbolTotal} ramzlar jami {meaningTotal} ma'noga ega. Har bir ma'no **qaysi kontekstda qo'llanilishini** o'z ichiga oladi, agar o'sha kontekst siz taqdim etgan matnda ko'rinadigan bo'lsa, biz o'sha ma'noni tanlaymiz."
          }
        ]
      },
      {
        "title": "Vaziyatni qanday aniqlash kerak",
        "blocks": [
          {
            "p": "Biz siz taqdim etgan matnda o'sha vaziyatni ko'rsatadigan so'zlar mavjudligini tekshiramiz. 「뱀이 나를 물었다」 (baemi nareul mul-eotda) iborasida chaqmoq olish vaziyati tasvirlangan, 「뱀을 품에 안았다」 (baemeul pume anatda) iborasida esa ushlash vaziyati tasvirlangan. Agar vaziyatni ko'rsatadigan so'zlar bo'lmasa, biz o'sha ramzning **asosiy ma'nosi** yordamida talqin qilamiz."
          },
          {
            "p": "Shuning uchun, agar siz tushingizni yozayotganda, **nafaqat paydo bo'lgan narsalarni, balki qaysi harakatlar amalga oshirilganini** ham qo'shsangiz, talqin aniqroq bo'ladi. 「돼지를 봤다」 (dwaeji-reul bwatda) iborasi 「돼지가 집으로 들어왔다」 (dwaeji-ga jib-euro deureowatda) iborasidan kamroq ma'no anglatadi."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Qanchalik ko'p yozsangiz, shuncha yaxshi, lekin uzun yozish shart emas",
        "blocks": [
          {
            "p": "Ikki yoki uch jumla yetarli. Uzoq yozish ko'proq ramzlarni topish demak emas; aksincha, agar aloqasiz so'zlar aralashsa, noaniq ramzlar aniqlanishi mumkin."
          }
        ]
      },
      {
        "title": "{contextSplitSymbolTotal} ta ma'nosi bo'lingan ramzlar mavjud",
        "blocks": [
          {
            "p": "Lug'atdagi {symbolTotal} ramzlar orasida, **{contextSplitSymbolTotal}** vaziyatga qarab o'zgaradigan ma'nolarga ega. Qolganlari esa vaziyatga qarab bir yo'nalishda o'qilgan."
          },
          {
            "p": "Bu {contextSplitSymbolTotal} eng ehtiyotkor joylardir. Vaziyatni noto'g'ri tushunish yaxshi xabarni yomon xabar sifatida yoki aksincha etkazishga olib kelishi mumkin. Shuning uchun, agar vaziyat aniq bo'lmasa, biz **bir tomonni majburan tanlamaymiz va o'sha ramzning asosiy ma'nosi bilan boramiz** — biz noaniq narsani aniq kabi aytishni xohlamaymiz."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Uyg'onganingizdagi his-tuyg'ular ham hisobga olinadi",
        "blocks": [
          {
            "p": "Tush mazmunidan pastda so'ralgan his-tuyg'ular va takrorlanish ramzlarni topish uchun ishlatilmaydi. Ular bo'lingan ma'nolar bilan vaziyatlarda talqin qilishni hal qilishda ko'rsatiladi. Siz tanlash shart emas; natijalar hali ham taqdim etiladi."
          }
        ]
      },
      {
        "title": "Tushning umumiy muhitini alohida hisobga olishadi",
        "blocks": [
          {
            "p": "Agar bir nechta ramzlar topilsa, biz har bir ramzning ijobiy yoki ehtiyotkor ekanligini yig'amiz, tushning umumiy ohangini aniqlash uchun. Bir yaxshi ramz va bir ehtiyotkor ramzni o'z ichiga olgan tush shunchaki 'yaxshi tush' deb atalmaydi."
          },
          {
            "p": "Siz [ramzlar lug'ati](/dream/symbols) da turli ramzlar va ularning ma'nolarini oldindan ko'rishingiz mumkin. Tushingizni yozishdan oldin nimalar kiritilganini ko'zdan kechirish ham yaxshi."
          }
        ]
      }
    ]
  },
  "guide/good-and-bad": {
    "eyebrow": "Xizmat Asosi",
    "title": "길몽 (auspicious dreams) va 흉몽 (ominous dreams) ni ajratish mezonlari",
    "summary": "Har bir ramzga berilgan to'rt qiymat va ularning taqsimoti, ijobiylar nega yarimdan ko'pni tashkil etishi va aralash tushlarni nega aralash sifatida etkazishimiz.",
    "backLabel": "Talqin Asosi",
    "sections": [
      {
        "title": "Har bir ramzga to'rt qiymatdan biri beriladi",
        "blocks": [
          {
            "p": "Lug'atdagi {symbolTotal} ramzlar orasida har biri quyidagi toifalardan biriga kiritilgan."
          },
          {
            "ul": [
              "**{polarityPositive} ijobiy ramzlar** — boylik, bayramlar va yordamchilar kabi omadli voqealar sifatida talqin qilingan.",
              "**{polarityAmbivalent} vaziyatga qarab o'zgaradigan ramzlar** — ilonlar kabi, ma'nosi amalga oshirilgan ishga qarab o'zgarishi mumkin. Ushbu toifa eng ehtiyotkor.",
              "**{polarityNegative} ehtiyotkor ramzlar** — g'iybat, tortishuvlar yoki yo'qotishlar sifatida ko'rilgan.",
              "**{polarityNeutral} neytral ramzlar** — o'zlari yaxshi yoki yomon bo'lmagan, ranglar yoki raqamlar kabi."
            ]
          }
        ]
      },
      {
        "title": "Ijobiy ramzlarning yarimdan ko'p bo'lishining sababi",
        "blocks": [
          {
            "p": "Bu biz baholashda saxiymiz degani emas. **An'anaviy 해몽 (dream interpretation) har doim shunday bo'lgan.** Cho'chqalar, ajdaho, olov va suv kabi katta va kuchli ramzlar odatda yaxshi omonatlar sifatida ko'rilgan va lug'at o'sha an'anani aks ettiradi."
          },
          {
            "p": "Shunday qilib, 'yaxshi ramz paydo bo'ldi' degani 'yaxshi narsalar bo'ladi' degani emas. Biz etkazishi mumkin bo'lgan narsa o'sha ramz an'anada qanday talqin qilinganiga cheklangan."
          }
        ]
      },
      {
        "title": "Tushning ohangi ramzlaridan yig'iladi",
        "blocks": [
          {
            "p": "Agar bir nechta ramzlar topilsa, biz ularning mos ravishda omadligini yig'amiz, tushning umumiy ohangini aniqlash uchun. Agar faqat ijobiy ramzlar paydo bo'lsa, bu yaxshi tush; agar faqat ehtiyotkor ramzlar paydo bo'lsa, bu ehtiyotkor tush; agar **aralash bo'lsa, biz uni aralash sifatida etkazamiz.**"
          },
          {
            "p": "Biz aralash ramzlarni bir tomonga majburan tasniflamaymiz. Haqiqatan ham, odamlar ko'pincha aralash tushlar ko'rishadi va ularni 'yaxshi tush' deb qisqartirish to'g'ri yoki foydali emas."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ishlatmaslik kerak bo'lgan so'zlar",
        "blocks": [
          {
            "p": "Nima bo'lishi, qachon bo'lishi yoki salomatlik va boylik haqida aniq bayonotlar bermang. An'anaviy ravishda o'tkazilgan ramzlarning ma'nolarini etkazish, kelajakni bashorat qilishdan farq qiladi."
          }
        ]
      },
      {
        "title": "Ogohlantiruvchi tush paydo bo'lganda",
        "blocks": [
          {
            "p": "Ogohlantiruvchi sifatida talqin qilingan ramz paydo bo'lsa ham, bu shartli ravishda yomon xabar emas. An'anaviy tush talqini bo'yicha, **bu holatga ishora qiluvchi bayonot** sifatida odatda yomon tush ishlatiladi. Agar ziddiyatni ko'rsatadigan ramz paydo bo'lsa, bu so'zlarni ushlab turish uchun eslatma sifatida o'qilishi mumkin."
          },
          {
            "p": "Shu sababdan, bu xizmat talismanlar yoki charm sotmaydi. Sotiladigan narsa faqat [tushlaringizni saqlashning ikki usuli](/guide/reports)dir."
          }
        ]
      }
    ]
  },
  "guide/conception-dreams": {
    "eyebrow": "Tug'ilish Tushi",
    "title": "Tug'ilish tushlarini qanday talqin qilish kerak",
    "summary": "27 ta tug'ilish tushlari ramzlarini qanday aniqlashni, barcha cho'chqa tushlari tug'ilish tushlari deb hisoblanmasligini va homiladorlik yoki jinsni bashorat qilmaydigan printsipni ochib beradi.",
    "backLabel": "Talqin Asosi",
    "sections": [
      {
        "title": "Birinchidan, buni aniqlang",
        "blocks": [
          {
            "p": "**Dreams-Link homiladorlik holatini aniqlamaydi. Bu shuningdek, bolaning jinsini ko'rsatmaydi.** Bu tushlar orqali bilib bo'lmaydigan masalalar va biz buni amalga oshira olmaymiz."
          },
          {
            "p": "Biz sizga ayta oladigan narsa faqat shundan iborat — **bu tushda an'anaviy ravishda tug'ilish tushlari sifatida qaraladigan ramz paydo bo'ldi.** Bu bizning ajdodlarimiz o'sha ramzni qanday talqin qilganligi haqida."
          }
        ]
      },
      {
        "title": "Tug'ilish tushlari sifatida qaraladigan {conceptionSymbolTotal} ta ramz mavjud",
        "blocks": [
          {
            "p": "Lug'atdagi {symbolTotal} ta ramzdan **{conceptionSymbolTotal}** tasi tug'ilish tushlari sifatida belgilangan. Ular orasida ajdaho, cho'chqa, ilon kabi ko'plab hayvonlar, shaftoli va kestanalar kabi mevalar, shuningdek, quyosh va oy ham mavjud."
          },
          {
            "p": "Biroq, **o'sha ramzning paydo bo'lishi darhol tug'ilish tushidir, degani emas.** Bu xizmatning harakat qilgan joyi."
          }
        ]
      },
      {
        "title": "Qaror haqiqiy ma'niga asoslangan, ramzlarga emas",
        "blocks": [
          {
            "p": "Cho'chqa tug'ilish tushlari ramzi bo'lib, shu bilan birga **boylik tushlarini ham ifodalaydi.** Agar ramz paydo bo'lganligi uchun uni tug'ilish tushlari deb hisoblasak, unda cho'chqa tushini ko'rgan har kim tug'ilish tushiga ega bo'ladi. Haqiqatan ham, bu ko'proq boylik tushlari sifatida talqin qilingan."
          },
          {
            "p": "Shuning uchun, biz **o'sha ramzdan olingan haqiqiy ma'nini, ramzning o'zini emas,** ko'rib chiqamiz. Biz uni tug'ilish tomonida ma'no tanlangan vaziyatda tug'ilish tushlari sifatida belgilaymiz. Bir xil cho'chqa bo'lsa ham, kontekst farq qilsa, qaror o'zgaradi."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Agar siz homiladorlikni eslasangiz, biz avval buni ko'rib chiqamiz",
        "blocks": [
          {
            "p": "Agar sizning yozuvingizda homiladorlik, tug'ilish tushlari yoki tug'ilish kabi so'zlar bo'lsa, biz avval o'sha ramzning tug'ilish tomonidagi ma'nisini ko'rib chiqamiz. Bir xil cho'chqa tushida ham, ajdodlarimiz uni talqin qilish usuli hozirgi vaziyatga qarab farq qilgan."
          }
        ]
      },
      {
        "title": "Tug'ilish tushlari hisobotlarini ajratish sababi",
        "blocks": [
          {
            "p": "Tug'ilish tushlari boshqa tushlardan farqli maqsadga xizmat qiladi. Ular bolalar tug'ilgandan keyin ham ko'p gapiriladi va oila a'zolari o'rtasida bo'lishiladi. Shuning uchun, uni faqat ekranda ko'rish o'rniga, biz alohida **saqlash mumkin bo'lgan hujjat yaratdik.**"
          },
          {
            "p": "Nima kiritilganligi [tushlaringizni saqlashning ikki usuli](/guide/reports)da qayd etilgan. Siz ekranda ko'rgan narsalarni sotib olmasdan barcha talqinlarni ko'rishingiz mumkin."
          }
        ]
      }
    ]
  },
  "guide/how-to-write": {
    "eyebrow": "Qanday foydalanish kerak",
    "title": "Tushingizni samarali yozish usuli",
    "summary": "Siz ko'rgan va qilgan narsalaringizni yozsangiz, yaxshi talqin qilinadi. Birgina fe'l ma'noni qanday belgilashi va biz his-tuyg'ular va takrorlanish haqida nega so'raymiz, shuni tushuntiradi.",
    "backLabel": "Talqin Asosi",
    "sections": [
      {
        "title": "Iltimos, ko'rgan va qilgan narsalaringizni yozing",
        "blocks": [
          {
            "p": "Maxsus format yo'q. Odatda gapirganingizdek bir necha jumla yetarli. Biroq, yaxshi ishlaydigan narsa — **ko'rinadigan narsalar** va **bo'lgan voqealar.**"
          },
          {
            "ul": [
              "Yaxshi ishlaydi — 「Meni katta ilon o'rab oldi」, 「Men toza suv oqayotganini ko'rdim」, 「Men baland joydan yiqildim」",
              "Yaxshi ishlamaydi — 「Men qo'rqdim」, 「Men g'alati his qildim」, 「Men kimdir menga nafratlanayotgandek his qildim」"
            ]
          },
          {
            "p": "Agar siz faqat his-tuyg'ularni yozsangiz, hech qanday ramzlarni topish mumkin emas. Bu an'anaviy tush talqini [ob'ektlar va harakatlar](/guide/categories) haqida, his-tuyg'ular haqida emas."
          }
        ]
      },
      {
        "title": "Nima qilganingizni yozish aniqroq qiladi",
        "blocks": [
          {
            "p": "Bir xil ramz bilan birga, vaziyatga qarab ma'nilar farq qiladigan {contextSplitSymbolTotal} ta holatlar mavjud. An'anaviy ravishda, ilonni ushlash va chaqish ziddiyat sifatida talqin qilingan."
          },
          {
            "p": "Shunday qilib, 「Men cho'chqani ko'rdim」, 「Cho'chqa uyga kirdi」dan kamroq aniq, va 「Suv bor edi」, 「Men toza suv ichdim」dan kamroq aniq. **Bitta fe'l ma'nini belgilaydi.**"
          }
        ]
      },
      {
        "title": "Nega his-tuyg'ular va takrorlanish haqida so'raymiz",
        "blocks": [
          {
            "p": "Tush mazmunidan pastda **uyg'onganingizda his qilgan his-tuyg'u** va **bir xil tushni takrorlaganingiz**ni tanlash uchun joy mavjud. Natija berish uchun ikkisini tanlashingiz shart emas."
          },
          {
            "p": "Bu qiymatlar ramzlarni topish uchun ishlatilmaydi. Ular **bir xil ramzdan qaysi ma'nini tanlash** va natijani qanday etkazish uchun ko'rsatiladi."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Agar siz homiladorlikni eslasangiz",
        "blocks": [
          {
            "p": "Agar sizning yozuvingizda homiladorlik, tug'ilish tushlari yoki tug'ilish kabi so'zlar bo'lsa, biz avval o'sha ramzning tug'ilish tomonidagi ma'nisini ko'rib chiqamiz. Bir xil cho'chqa tushida ham, ajdodlarimiz uni talqin qilish usuli hozirgi vaziyatga qarab farq qilgan — [tug'ilish tushlarini qanday talqin qilish](/guide/conception-dreams)."
          }
        ]
      },
      {
        "title": "Uzoq matn yozish shart emas",
        "blocks": [
          {
            "p": "Uzoq matn ko'proq ramzlar topilishini anglatmaydi. Aksincha, agar aloqasiz so'zlar uzunroq aralashsa, aloqasiz so'zlar ramzlar sifatida talqin qilinishi ehtimoli ko'proq."
          },
          {
            "p": "Siz taqdim etgan matn hech joyda saqlanmaydi. Sizning erkin yozishingiz mumkin bo'lishining sababi [saqlamaslik usuli](/guide/no-storage)da qayd etilgan."
          }
        ]
      }
    ]
  },
  "guide/categories": {
    "eyebrow": "Xizmat Asosi",
    "title": "To'qqiz toifaga bo'lingan mezonlar",
    "summary": "Ob'ektlar, hayvonlar va tabiatdan ranglar va raqamlargacha to'qqiz toifa mavjud va his-tuyg'u toifasini kiritmaslik sababi bor.",
    "backLabel": "Talqin Asosi",
    "sections": [
      {
        "title": "Tushlardagi ramzlar to'qqiz toifaga bo'lingan",
        "blocks": [
          {
            "p": "{symbolTotal} ta ramz xususiyatlariga qarab to'qqiz toifaga guruhlangan. Bo'linish mezoni **tushlarda qanday paydo bo'lishi** — hayvonlar, ob'ektlar yoki men qilgan harakatlar sifatida."
          },
          {
            "ul": [
              "**Ob'ektlar {categoryThing}** — pul, oynalar va pichoq kabi moddiy narsalar. Bu eng katta toifa.",
              "**Hayvonlar {categoryAnimal}** — ajdaho·cho'chqa·ilonga·sigir. Ularning ko'pchiligi 태몽 (conception dreams) sifatida ko'riladi.",
              "**Tabiat {categoryNature}** — suv·olov·quyosh·oy·tog'lar kabi katta va qadimiy narsalar.",
              "**Harakat {categoryAction}** — tushlarda sodir bo'ladigan narsalar, masalan, quvvatish·tushish·uchish.",
              "**Tan body {categoryBody}** — tish·soch·qon. Ma'no tananing qaysi joyida bo'lishiga qarab farq qiladi.",
              "**Shaxs {categoryPerson}** · **Joy {categoryPlace}** · **Rang {categoryColor}** · **Raqam {categoryNumber}**"
            ]
          }
        ]
      },
      {
        "title": "Nima uchun hissiyotlar kategoriyasi yo'q?",
        "blocks": [
          {
            "p": "「tashvish」·「intizorlik」 kabi kategoriyalar kiritilmagan. **Bu an'anaviy 해몽 (dream interpretation) hissiyotlarni ko'rib chiqmaydi.** Eski talqinlar ko'rinadigan narsalar va sodir bo'lgan voqealarga e'tibor qaratgan, tush egasining his-tuyg'ulariga emas."
          },
          {
            "p": "Men hissiyotlar kategoriyasini yaratishga harakat qildim, lekin natijalar 「sevgi yo'qotish」·「hissiy barqarorlik」 kabi atamalar bo'ldi. Bu tushlardan olingan **simvollar** emas, balki zamonaviy psixologiyadan olingan lug'at. Bu boshqa turdagi xizmat va bu lug'atning maqsadi emas."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Shunday qilib, siz yozganingizda",
        "blocks": [
          {
            "p": "Iltimos, his-tuyg'ular o'rniga **nima ko'rganingiz va nima qilganingizni** yozing; bu ancha yaxshi natijalar beradi. Biroq, uyg'onganingizda his-tuyg'ularingiz haqida alohida so'rayman — hatto bir xil simbol ham vaziyatga qarab turlicha ma'noga ega bo'lishi mumkin."
          }
        ]
      },
      {
        "title": "Ranglar va raqamlar yolg'iz turmaydi",
        "blocks": [
          {
            "p": "Rang {categoryColor} va raqam {categoryNumber} o'z-o'zidan yaxshi yoki yomon ma'nolarga ega emas. Oq ilon va qora ilon farq qiladi, ularning ma'nolari **nima bilan bog'liq ekanligiga** qarab o'zgaradi. Shuning uchun, bu ikki kategoriya boshqa simvollar bilan birgalikda ko'rib chiqiladi."
          },
          {
            "p": "Kategoriyalarga qarab to'liq ro'yxat [Simvol Lug'ati](/dream/symbols)da mavjud. Bir simvolni ochish uning uzatilgan ma'nosi, kategoriyasi va bog'liq simvollarini ko'rsatadi."
          }
        ]
      }
    ]
  },
  "guide/not-found": {
    "eyebrow": "Qanday foydalanish",
    "title": "Agar simvol topilmasa",
    "summary": "Agar siz uni topa olmasangiz, men sizga topilmaganligini xabar beraman. Nima uchun topilmaganligini, o'sha ekranda sizga nima ko'rsatishimni va lug'at qanday kengaytirilishini muhokama qilaman.",
    "backLabel": "Talqin asoslari",
    "sections": [
      {
        "title": "Topilmasa, men sizga topilmaganligini xabar beraman",
        "blocks": [
          {
            "p": "Agar siz bergan matnda hech qanday simvol topa olmasam, men **topilmaganligini xabar beraman.** Men uni o'xshash narsalar bilan majburan bog'lamayman yoki bo'sh joyni to'ldirish uchun ishonarli jumlalar yaratmayman."
          },
          {
            "p": "Bu xizmatning eng ehtiyotkorligi bilan bog'liq. Men bo'sh joyni to'ldirganimda, talqinlarni etkazish bayonotiga zid keladi."
          }
        ]
      },
      {
        "title": "Nima uchun topilmaydi?",
        "blocks": [
          {
            "p": "Odatda, bu quyidagi sabablardan biri."
          },
          {
            "ul": [
              "**Bu hali lug'atda mavjud bo'lmagan simvol.** Hozirda {symbolTotal} ta simvol ro'yxatga olingan, lekin tushlarda paydo bo'lishi mumkin bo'lgan ko'plab boshqa simvollar mavjud.",
              "**Siz faqat his-tuyg'ularni yozdingiz.** Agar faqat 「men qo'rqdim」·「men g'alati his qildim」 kabi hissiyotlar bo'lsa, mos keladigan simvollar yo'q. An'anaviy 해몽 **ko'rinadigan ob'ektlar va harakatlar** haqida gapiradi, hissiyotlar haqida emas.",
              "**Bu juda qisqa.** Bir yoki ikki so'zdan ko'ra jumlalar bilan yozish yaxshiroq."
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Qayta yozishga harakat qilganingizda",
        "blocks": [
          {
            "p": "Iltimos, tushda **nima ko'rganingiz va nima qilganingizni** qo'shing. 「Men tashvishlandim」 demoqdan ko'ra 「Men baland joydan tushdim」 demoq samaraliroq, va 「Men buni yoqtirdim」 demoqdan ko'ra 「Men toza suv oqayotganini ko'rdim」 demoq samaraliroq."
          }
        ]
      },
      {
        "title": "Men bo'sh ekran qoldirmayman",
        "blocks": [
          {
            "p": "Agar biror narsa topilmasa, men o'sha ekranda **{popularSymbolCount} tez-tez qidiriladigan simvollarni** ham ko'rsataman. Bu simvollar, ularning vakillik asosida lug'atdan tanlangan, agar ulardan biri tushingizda paydo bo'lgan bo'lsa, eslab qolishingizga yordam beradi."
          },
          {
            "p": "Agar siz to'liq ro'yxatni ko'rmoqchi bo'lsangiz, [Simvol Lug'ati](/dream/symbols)da kategoriya bo'yicha tashkil etilgan {symbolTotal} ta simvol mavjud. Har bir simvol uning uzatilgan ma'nosi va bog'liq simvollarini o'z ichiga oladi."
          }
        ]
      },
      {
        "title": "Lug'at kelajakda qanday kengaytiriladi?",
        "blocks": [
          {
            "p": "Sonlarni oshirishdan ko'ra, men **allaqachon mavjud bo'lgan narsalarni aniq aniqlashga** e'tibor qaratyapman. Men bir xil simvol uchun {aliasTotal} alternativ nomlarni kiritdim va qo'shimchalar bilan shakl o'zgartiradigan so'zlarni tanib olish imkonini berdim."
          },
          {
            "p": "Simvollarni kengaytirayotganda, men faqat **uzatilgan dalilni taqdim eta oladiganlarni** kiritaman. Dalilsiz sonlarni oshirish yaratuvchilikka aylanadi, lug'at emas — men [Nima uchun modellarni ishlatmayman](/guide/no-ai)da urinishlar va natijalarni hujjatlashtirdim."
          }
        ]
      }
    ]
  },
  "guide/no-ai": {
    "eyebrow": "Xizmat asoslari",
    "title": "해몽da sun'iy intellektni ishlatmaslik sabablari",
    "summary": "Talqin yaratish jarayonida modelni chaqiradigan kod yo'q. Men empirik natijalarga asoslangan model yordamida lug'atni kengaytirish urinishini tark etdim, shuning uchun nima olingan va nima berilgan.",
    "backLabel": "Talqin asoslari",
    "sections": [
      {
        "title": "해몽da sun'iy intellekt ishlatilmaydi",
        "blocks": [
          {
            "p": "Hozirgi 해몽 xizmatlarining ko'pchiligi tush hikoyalarini generativ modellarga kiritish orqali yaratilgan matnlarni ko'rsatadi. Dreams-Link buni qilmaydi. **Talqin yaratish jarayonida modelni chaqiradigan kod yo'q.**"
          },
          {
            "p": "Men qilayotgan ish oddiy. Men siz taqdim etgan matndan lug'atda mavjud bo'lgan simvollarni topaman va ularning ma'nolarini tanlayman va ko'rsataman. Lug'atda mavjud bo'lmagan jumlalar uchun joy yo'q."
          }
        ]
      },
      {
        "title": "Bu qaror nima uchun qabul qilindi?",
        "blocks": [
          {
            "p": "**Modellar bilmaydigan narsalarini bilmayman demaydi.** Uzatilgan dalili bo'lmagan simvollar haqida so'ralganda, ular ishonarli kelib chiqishlarni yasaydilar. Va bu yasangan yoki yo'qligini o'quvchi farqlay olmaydi. Agar an'anani etkazish o'rniga yaratuvchilik kiritilsa, xizmatning poydevori qulaydi."
          },
          {
            "p": "Men aslida modelga simvollar yaratishga harakat qildim, lug'atni kengaytirish uchun. O'ylashga arziydigan oltmish olti misoldan, **ellik besh uzatilgan dalilni taqdim eta olmadilar**, va ba'zilari an'anaviy 해몽da mavjud bo'lmaydigan narsalarni o'z ichiga oldi, masalan, metro va avtomagistrallar. Shuning uchun, **hech biri kiritilmadi.**"
          }
        ]
      },
      {
        "kind": "note",
        "title": "Katta modellar bilan ham shunday bo'lgan",
        "blocks": [
          {
            "p": "Yaxshi model bilan bir xil vazifani bajarishga harakat qilganimda, o'n to'qqizdan faqat bitta o'tdi, va o'sha bitta dalil pozitsiyasida bir xil so'zlarni takrorlash edi. Katta modellar **bilmaydigan narsalar haqida** faqat **ko'proq ishonarli** gapirishadi."
          }
        ]
      },
      {
        "title": "Model ishlatmaslikning afzalliklari",
        "blocks": [
          {
            "ul": [
              "**Agar bu bir xil tush bo'lsa, bir xil talqin chiqadi.** Har safar so'zlar o'zgarmaydi.",
              "**Bu tez.** Modelning javobini kutish shart emas, shuning uchun natijalar darhol yetkaziladi.",
              "**Siz taqdim etgan tush tashqariga chiqmaydi.** Uni tashqi kompaniya serverlariga yuborish shart emas — iltimos, [saqlamaslik usuli](/guide/no-storage) bilan birga o'qing.",
              "**Bu bepul taklif qilinishi mumkin.** Tushlar har kuni ko'radigan narsalar, shuning uchun ko'p so'rovlar mavjud. Agar har bir so'rov uchun model chaqirilsa, xarajatlar bir joyda qoplanishi kerak."
            ]
          }
        ]
      },
      {
        "title": "Nima berilgan o‘rniga",
        "blocks": [
          {
            "p": "Biz lug‘atda yo‘q narsani talqin qila olmaymiz. Agar model ishlatilgan bo‘lsa, yozganingiz har qanday ishonarli javobni keltirgan bo‘lardi. Biz **topilmaganida topilmaganini aytadigan tomonni tanladik**. O‘sha paytda ko‘rsatadigan narsamiz [simvol topilmaganida](/guide/not-found) yozilgan."
          }
        ]
      }
    ]
  },
  "guide/reports": {
    "eyebrow": "To‘lovli Mahsulotlar",
    "title": "Orzularingizni Saqlashning Ikki Usuli",
    "summary": "Talqin o‘zi to‘lovni talab qilmaydi. Biz sotadigan ikkita narsani, ularning tarkibini va nima uchun yaxshiroq talqinlar emasligini tushuntiramiz.",
    "backLabel": "Talqin Asosi",
    "sections": [
      {
        "title": "Talqin o‘zi to‘lovni talab qilmaydi",
        "blocks": [
          {
            "p": "Orzularingizni yozib qo‘yish va qaysi simvollar mavjudligini ko‘rish **pul talab qilmaydi va a’zolikni talab qilmaydi.** Odamlar har kuni orzu qilgani uchun, biz bu joyni bepul qilishga qaror qildik."
          },
          {
            "p": "**Sotadigan ikkita narsa yaxshiroq talqinlar emas.** Ular **bir xil talqinni saqlashning ikki usuli.** Ekranda ko‘rayotgan mazmuningiz to‘lovdan keyin o‘zgarmaydi."
          }
        ]
      },
      {
        "title": "Orzu Kartasi — Bir Rasm",
        "blocks": [
          {
            "p": "Biz sizning orzuingizda topilgan simvollarni va ularning ma’nolarini **bir rasmda** taqdim etamiz. Bu rasm fayli, PDF emas, shuning uchun uni shunday saqlashingiz yoki boshqalarga yuborishingiz mumkin."
          },
          {
            "p": "Bu, yaxshi orzu ekranni yopganda yo‘qolganida afsuslanadiganlar uchun. Biz orzularni saqlamaymiz, agar siz uni saqlamoqchi bo‘lsangiz, bu buni olishning yagona usuli."
          }
        ]
      },
      {
        "title": "태몽 Report — Hujjat {conceptionPages} Sahifa",
        "blocks": [
          {
            "p": "태몽 (conception dreams) sifatida talqin qilingan simvollarni ko‘rsatadigan orzular uchun, biz **{conceptionPages}-sahifali hujjat tayyorlaymiz.** U qaysi simvollar paydo bo‘lgani, bu simvollar an’anaviy ravishda qanday talqin qilinganligi va yozish joyini o‘z ichiga oladi."
          },
          {
            "p": "태몽 ko‘pincha bolalar tug‘ilgandan keyin ham oila a’zolari o‘rtasida muhokama qilinadi va bo‘lishiladi, shuning uchun biz ekranda ko‘rish uchun juda qimmatbaho bo‘lgan orzular uchun alohida hujjat tayyorladik."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bu yerda ham aytilmagan so‘zlar",
        "blocks": [
          {
            "p": "Biz homiladorlik holatini yoki bolaning jinsini aniqlamaymiz. Bunday bayonotlar hujjatda ko‘rinmaydi. Batafsil ma’lumot uchun [태몽ni qanday talqin qilish](/guide/conception-dreams)ga qarang."
          }
        ]
      },
      {
        "title": "Nima uchun Hujjat Endi Yo‘q",
        "blocks": [
          {
            "p": "Akalar xizmatlari to‘qqiz sahifali hisobotlarni taqdim etadi. Saju dvigateli bitta tug‘ilgan sana orqali ko‘plab qiymatlarni chiqaradi. Orzu talqini shunday ishlamaydi."
          },
          {
            "p": "Lug‘atda keltirilgan simvollar jami {symbolTotal} ni tashkil etadi va ularning aksariyati **bitta ma’noga ega.** Buni to‘qqiz sahifaga cho‘zish uchun, biz an’anaviy ma’nolarni yozishimiz kerak bo‘ladi, bu esa hech qanday materialda topilmaydi, va aynan shu xizmat buni qilmaslikka qaror qildi. Shuning uchun, hujjat faqat materiallar halol ravishda ruxsat bergan uzunlikda bo‘ladi, va undan uzun emas."
          }
        ]
      },
      {
        "title": "Narxlar va Savdo Holati",
        "blocks": [
          {
            "p": "Narxlar [narxlar qo‘llanmasida](/pricing) keltirilgan. Ushbu hujjat miqdorlarni ko‘rsatmasligi sababi maqsadli — narxlar o‘zgarganda, yo‘riqnoma hujjati eski miqdorlar bilan qolmasligi uchun. Ekran va shartlar bitta joydan bir xil miqdorni o‘qiydi."
          },
          {
            "p": "Siz sotib olgan hujjatlar **bir xil buyurtma bilan qayta olinishi mumkin.** Biroq, biz fayllarni saqlamaymiz, natija ekranini tark etganingizdan so‘ng, ularni qayta yaratib bo‘lmaydi — iltimos, olgan fayllaringizni saqlang."
          }
        ]
      }
    ]
  },
  "guide/no-storage": {
    "eyebrow": "Shaxsiy Ma’lumotlar",
    "title": "Yozgan Orzularni Saqlamaslik Usuli",
    "summary": "Biz orzu hikoyalari hech qayerda yozilmasligini texnik jihatdan nima anglatishini va natija havolasida nima mavjudligini tushuntiramiz.",
    "backLabel": "Talqin Asosi",
    "sections": [
      {
        "title": "A’zolik Talab Qilinmaydi",
        "blocks": [
          {
            "p": "Dreams-Link hisoblar yaratmaydi. Biz ismlar, elektron pochta manzillari yoki telefon raqamlarini to‘playmiz. Biz to‘playdigan yagona narsalar — siz yozgan orzular, uyg‘onganingizda qanday his qilganingiz va bir xil orzuni takroran orzu qilasizmi, va bu talqin tugagandan keyin qolmaydi."
          },
          {
            "p": "Orzu hikoyalari bu xizmat oladigan eng shaxsiy qiymatlardir. Shuning uchun qoidalar zaruriyatdan ko‘ra qat’iyroq — biz siz yuborgan narsalarni yozish uchun joy ham tashkil etmadik."
          }
        ]
      },
      {
        "title": "Natija havolasida nima mavjud",
        "blocks": [
          {
            "p": "Hisoblash tugagach, manzil quyidagicha ko‘rinadi."
          },
          {
            "p": "**/ko/dream/result#eyJ0IjoiSSBkcmVhbXQgb2YgYSBjYXJwLi4u**"
          },
          {
            "p": "Keyingi **#** belgisidan keyin kiritilgan qiymat. Bu qism **fragment** deb ataladi, bu **brauzer serverga yubormaydigan qism**. Bu standart veb xulq-atvori va biz yaratgan qoidalar emas — aslida hujjat ichida joyni ko‘rsatish uchun mo‘ljallangan, shuning uchun serverga uni ko‘rish zarurati yo‘q."
          },
          {
            "p": "Bu yerda, bu xususiyat ayniqsa muhim — siz taqdim etgan orzu **kirish yozuvlarida qolmaydi.**"
          },
          {
            "p": "Boshqacha qilib aytganda, natija havolasini ochganingizda, brauzer o‘sha qiymatni hisoblashni so‘rash uchun o‘qiydi, va bizning serverimiz hisoblash uchun qiymatni qabul qiladi, javobni qaytaradi va keyin uni unutadi."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Boshqalarga havolalarni yuborishda ehtiyot bo‘ling",
        "blocks": [
          {
            "p": "Serverda saqlanmasligi havolaning xavfsizligini anglatmaydi. Natija havolasi siz taqdim etgan orzuni o‘z ichiga oladi, shuning uchun o‘sha havolani olgan kishi o‘sha mazmunni o‘qishi mumkin."
          }
        ]
      },
      {
        "title": "Nima uchun hisoblash serverda amalga oshiriladi, lekin saqlanmaydi?",
        "blocks": [
          {
            "p": "Hisoblash o‘zi serverda amalga oshiriladi. Simvollarni topish butun lug‘atni talab qiladi, va bu lug‘at brauzerga yuborish uchun juda katta. Lug‘atni serverda saqlash, shuningdek, xato tuzatilganda, bu hamma uchun bir vaqtning o‘zida aks etishini anglatadi. Biroq, **so‘rovni qayta ishlagandan keyin, bu qiymat hech joyda ishlatilmaydi.** Uni ma’lumotlar bazasiga kiritish uchun hech qanday kod yo‘q."
          },
          {
            "p": "Ishlash uchun zarur minimal yozuv saqlanadi — bir xil odamning qisqa vaqt ichida juda ko‘p so‘rov yuborishini oldini olish uchun hisoblagich. Bu orzu mazmunini o‘z ichiga olmaydi, va kirish IP ham saqlanmaydi. Faqat bitta qiymat, sanaga xashlangan, hisoblanadi va bu qiymat kun o‘zgarganda o‘zgaradi."
          }
        ]
      },
      {
        "title": "Saqlanmasligi sababli nima qilish mumkin emas",
        "blocks": [
          {
            "p": "Haqiqatdan ham, biz ma’lumotlarni saqlamasligimiz sababli, berilgan narsalardan voz kechganmiz."
          },
          {
            "ul": [
              "**Orzu daftari yo‘q.** O‘tgan haftadagi talqinni qaytarib ololmaysiz, va uni yana ko‘rish uchun havola kerak. Bu maqsadli amalga oshiriladi — daftarda eng shaxsiy yozuvlar doimiy ravishda saqlanishi kerak.",
              "**Bir xil qiymatni yana topish.** Kesh yo‘q. Buning o‘rniga, lug‘at o‘zgarmas va moslashuv qoidalari aniqlik bilan belgilangan, shuning uchun bir xil matn har doim bir xil simvolni keltiradi — qoidalar keshni kafolatlagan narsalarni almashtiradi.",
              "**Yangilash reklama eshigini yana ochadi.** Bu, ko‘rish yozuvlarini qoldirish uchun hech joy yo‘qligi sababli."
            ]
          }
        ]
      },
      {
        "title": "Sotib olish holatida",
        "blocks": [
          {
            "p": "Agar siz hisobot sotib olsangiz, o‘sha paytda tranzaksiya yozuvi saqlanadi. To‘lovning qonuniy belgilangan saqlash muddati bor, va buyurtma tarixi bo‘lmasa, qaytarmalar amalga oshirilmaydi. Biroq, shunda ham, **talqinda yozilgan orzu mazmuni buyurtmaga qo‘shilmaydi** — to‘lov tasdiqlangandan keyin hujjatni yaratishda yana olinadi va yoziladi."
          },
          {
            "p": "Batafsil ma’lumot uchun, iltimos [maxfiylik siyosatiga](/privacy) murojaat qiling."
          }
        ]
      }
    ]
  },
  "notice": {
    "eyebrow": "E’lon",
    "title": "E'lonlar",
    "summary": "Bu sizning foydalanishingizga ta'sir qilishi mumkin bo'lgan o'zgarishlar haqida ma'lumot berish joyidir.",
    "backLabel": "Bosh sahifaga qaytish",
    "sections": []
  },
  "contact": {
    "eyebrow": "Aloqa",
    "title": "So'rovlar",
    "summary": "Bu foydalanish, qaytarish, shaxsiy ma'lumotlar so'rovlari va xato xabarlarini, shuningdek, biznes ma'lumotlarini so'rash uchun kanal.",
    "backLabel": "Bosh sahifaga qaytish",
    "sections": [
      {
        "title": "Email orqali aloqa",
        "blocks": [
          {
            "p": "Iltimos, so'rovlaringizni **{email}** manziliga yuboring. Biz 2 ish kuni ichida javob beramiz. To'lov va qaytarish so'rovlari uchun, **buyurtma raqamingiz yoki to'lov emailingizni** kiritish tezroq bo'ladi."
          },
          {
            "p": "Telefon orqali so'rovlar {customerCenter} da qabul qilinadi."
          }
        ]
      },
      {
        "title": "Bu kanalda nimalar yuborilishi mumkin?",
        "blocks": [
          {
            "ul": [
              "**To'lov va Qaytarish** — Agar hujjat yaratilmagan bo'lsa yoki to'lov miqdori buyurtmadan farq qilsa, to'liq qaytarish amalga oshiriladi. Shartlar [qaytarish siyosatida](/refund-policy) mavjud.",
              "**Shaxsiy Ma'lumotlar** — Biz kirish, tuzatish va o'chirish so'rovlarini qabul qilamiz. Qayta ishlash siyosati [maxfiylik siyosatida](/privacy) mavjud.",
              "**Talqin Xatolarini Hisobot Berish** — Agar ramzlar noto'g'ri topilgan bo'lsa yoki talqin g'alati ko'rinsa, iltimos, bizga xabar bering. Agar siz o'sha tush hikoyasini qachon yozganingizni kiritgan bo'lsangiz, biz uni yana bir bor shu matn bilan ko'rib chiqishimiz mumkin."
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
              "**Shaxsiy Ma'lumotlarni Himoya Qilish Bo'yicha Mas'ul** — {privacyOfficer}",
              "**Hosting Provayderi** — {hostingProvider}"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Siz so'rov emailida taqdim etgan tushni qayta yozishingiz shart emas. Biz kirishlarni saqlamaymiz, shuning uchun ularni yana ko'rib chiqishimiz mumkin emas, va buyurtma raqami tasdiqlash uchun yetarli. Iltimos, faqat zarur bo'lsa, masalan, talqin xatolarini hisobot berish uchun yozing."
          }
        ]
      }
    ]
  },
  "guide/what-we-do-not-do": {
    "eyebrow": "Xizmat Printsiplari",
    "title": "Nimalarni Qilmaymiz",
    "summary": "Biz lotereya raqamlarini, tush jurnallarini, homiladorlik aniqlashni yoki talismanlarni taqdim etmaymiz. Har birini qilmaslik sabablari haqida tushuntiramiz.",
    "backLabel": "Talqin Asosi",
    "sections": [
      {
        "title": "Biz lotereya raqamlarini taqdim etmaymiz",
        "blocks": [
          {
            "p": "Bu tushlar talqini xizmatlarida keng tarqalgan bo'lsa-da, biz buni qilmaymiz. **Tushlardan raqamlar olish uchun an'anaviy tush talqini asoslari yo'q.** Cho'chqa tushlarini boylik sifatida talqin qilish haqida yozuvlar mavjud, lekin buni amalga oshiradigan hech qanday adabiyotda qoidalar yo'q."
          },
          {
            "p": "Ularni yaratish uchun, biz ularni o'ylab topishimiz kerak bo'ladi, va o'sha paytda, bu xizmat an'anaviy talqinlarni etkazish joyi bo'lmaydi. Bu moliyaviy yo'qotishga olib kelishi mumkinligi ayniqsa xavotirli."
          }
        ]
      },
      {
        "title": "Biz tush jurnallarini yaratmaymiz",
        "blocks": [
          {
            "p": "O'tgan tushlarni to'plash imkoniyati qulay bo'lsa-da, bu bizni **taqdim etgan tushlaringizni doimiy saqlashga** majbur qiladi. Tush hikoyalari bu xizmat qabul qiladigan eng shaxsiy jihatdir, va biz buni almashmaslikka qaror qildik."
          },
          {
            "p": "Buning o'rniga, saqlamoqchi bo'lgan tushlaringizni **rasmlar yoki hujjatlar sifatida olish mumkin.** Saqlash mas'uliyati foydalanuvchilarga, bizga emas — [Tushlaringizni Saqlashning Ikki Usuli](/guide/reports)"
          }
        ]
      },
      {
        "title": "Biz homiladorlik yoki jinsni aniqlamaymiz",
        "blocks": [
          {
            "p": "Biz faqat bir ramzning 태몽 (homiladorlik tush) sifatida talqin qilinganini aytishimiz mumkin. Siz homiladormisiz yoki bola qizmi yoki o'g'ilmi, bu **tushlar orqali bilib bo'lmaydi.** Bunday bayonotlar ekranda yoki pullik hujjatlarda ko'rinmaydi."
          }
        ]
      },
      {
        "title": "Biz talismanlar yoki charm sotmaymiz",
        "blocks": [
          {
            "p": "Bir ramz ehtiyotkorlik sifatida talqin qilinganligi sababli, biror narsani sotib olish uchun sabab yo'q. An'anaviy ravishda, 흉몽 (noqonuniy tush) **hozirda tekshirilishi kerak bo'lgan vaziyatni ko'rsatish uchun** ishlatilgan, biror narsani oldini olish uchun to'lash emas."
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
            "p": "Biz biror narsaning bo'lishi, qachon bo'lishi yoki sog'liq, boylik yoki umr haqida aniq bayonotlar bermaymiz. An'anaviy ramzlarning ma'nolarini etkazish va kelajakni bashorat qilish turli masalalardir."
          }
        ]
      },
      {
        "title": "Biz mavjud bo'lmagan talqinlarni yaratmaymiz",
        "blocks": [
          {
            "p": "Lug'atda mavjud bo'lmagan ramzlar uchun, biz **ularni topa olmadik deb aytamiz.** Biz o'xshashlarini birlashtirmaymiz yoki joyni ishonchli jumlalar bilan to'ldirmaymiz. Shuning uchun, bu xizmat [tush talqini uchun sun'iy intellektdan foydalanmaydi](/guide/no-ai). Model bilmaydigan narsalarini bilmaydi deb aytmaydi."
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
  "intro": "Foydalanish shartlaringizga — narxlar, siyosatlar — ta'sir qilishi mumkin bo'lgan o'zgarishlar bu yerda e'lon qilinadi. Ichki yaxshilanishlar, masalan, ekran tezligini oshirish, bu yerda e'lon qilinmaydi: bu yerda ko'rinadigan narsa sizga kerak bo'lgan ma'lumot.",
  "empty": {
    "title": "E'lonlar joylashtirilmagan",
    "body": "Agar sizga ma'lum qilinadigan o'zgarishlar bo'lsa, ular bu yerda e'lon qilinadi."
  },
  "effective": "Kuchga kirish sanasi: {date}",
  "pager": {
    "label": "E'lonlar Sahifasi",
    "newer": "← Eng Yangi",
    "older": "Oldingi E'lonlar →"
  },
  "items": {
    "2026-08-06-no-storage": {
      "title": "Siz taqdim etgan tush saqlanmagan.",
      "body": [
        "Tush hikoyalari bu xizmat oladigan eng shaxsiy qiymatlardir. Shuning uchun, ular hech qanday jadvalda qayd etilmaydi. Kirish faqat hisoblash uchun natija manzilida olib boriladi va deraza yopilganda, yo'qoladi.",
        "Biz tushlarni to'playdigan va oqimini ko'rsatadigan (tush daftari) funksiyani yaratmaslikka qaror qildik. Bu foydali funksiya, lekin buni amalga oshirish uchun eng shaxsiy yozuvlar doimiy ravishda saqlanishi kerak.",
        "Natija havolasini boshqalarga yuborganingizda, u tush mazmunini o'z ichiga oladi. Bo'lishishda ehtiyot bo'ling."
      ]
    },
    "2026-08-06-engine-version": {
      "title": "Natijalar ramzlar lug'ati va hisoblash mezonlarini o'z ichiga oladi.",
      "body": [
        "Tushni talqin qilishning asosi an'anaviy 해몽 (tush talqini) ramzlar lug'atidir. Natijalar va hujjatlar o'sha lug'atning versiyasini (masalan, 1.2.0) va qoidalarni topish mezonlarini (masalan, dream-1.0.0) o'z ichiga oladi. Bir xil tush har doim bir xil mezon asosida bir xil ramz beradi.",
        "Agar ramzlarni qo'shish yoki ma'nolarni oldindan o'zgartirish natijalarni o'zgartirishi mumkin bo'lsa, bu haqda ma'lumot beriladi. Bu siz oldin olgan natijalaringiz o'zgarishi mumkinligini anglatadi.",
        "Biz lug'atda mavjud bo'lmagan an'anaviy ma'nolarni yaratmaymiz. Agar hech qanday ramz topilmasa, biz shunchaki hech narsa topilmaganligini aytamiz va xulosa qilamiz."
      ]
    },
    "2026-08-06-conception": {
      "title": "Biz faqat 태몽 haqida ma'lumot beramiz va hukm qilmaymiz.",
      "body": [
        "Agar tushda an'anaviy ravishda 태몽 sifatida ko'riladigan ramzlar paydo bo'lsa, biz sizga bu haqda ma'lumot beramiz. Biroq, biz homiladorlik holatini yoki bolaning jinsini aniqlamaymiz — bunday da'volarning asoslari yo'q va tibbiy hukmlar tibbiyot muassasalarining mas'uliyatidir.",
        "An'anaviy hikoyalarda o'g'il va qizlar haqida eslatmalar, o'tkazilgan odatlarning aksidir va bu bizning to'g'ri bashorat qilayotganimizni anglatmaydi."
      ]
    }
  }
} satisfies NoticeCopy;
