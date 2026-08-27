import type { DocPage, NoticeCopy } from "./types";
import type { DocKey } from "./ko";

/** O‘zbekcha — `scripts/translate-doc-content.ts`가 만든다. 손으로 고치지 말 것. */
export const UZ_DOCS = {
  "about": {
    "eyebrow": "Kirish",
    "title": "Dreams-Link ga Kirish",
    "summary": "Bu, an'anaviy **dream interpretation** ramzlar lug'atidan foydalanib, tushlarni talqin qiluvchi xizmatdir. Qanday asosda ishlatilishini va nima haqida gapirilmasligini aniqlaydi.",
    "backLabel": "Bosh sahifaga qaytish",
    "sections": [
      {
        "title": "Biz nima qilamiz?",
        "blocks": [
          {
            "p": "Dreams-Link siz yozgan tushlardan **an'anaviy dream interpretation** da ishlatiladigan ramzlarni topadi va ularning ma'nolarini ko'rsatadi. Tushlar biz har kuni boshdan kechirishimiz uchun, ekranda ko'rsatilgan talqinlar **bepul va a'zolik talab qilmaydi.**"
          },
          {
            "p": "To'lov evaziga sotiladigan yagona narsalar **ikki turdagi saqlash** — yaxshi tushni o'z ichiga olgan tasvir (tush kartasi) va ramz an'anaviy ravishda ta'kidlangan ta'lim tushida paydo bo'lganida fonni aks ettiruvchi PDF."
          }
        ]
      },
      {
        "title": "Talqin uchun asos nima?",
        "blocks": [
          {
            "p": "Talqin uchun asos **{symbolTotal} ramzlar** lug'atidir. Biz tush matnida ramzlarni topamiz va faqat o'sha ramzlar uchun lug'atda yozilgan ma'nolarni ko'rsatamiz. Agar bir ramzning bir nechta ma'nosi bo'lsa, biz kontekstga asoslanib tanlaymiz — masalan, ilonni ushlash va chaqish an'anaviy ravishda qarama-qarshi hisoblanadi."
          },
          {
            "p": "Qidirish **faqat belgilangan qoidalarga** muvofiq amalga oshiriladi. Agar tush bir xil bo'lsa, bir xil ramzlar har doim paydo bo'ladi va talqin kechagi kundan bugungi kunga o'zgarmaydi."
          }
        ]
      },
      {
        "title": "Biz nima demaymiz?",
        "blocks": [
          {
            "p": "**Biz lug'atda yo'q an'anaviy ma'nolarni ixtiro qilmaymiz.** Agar hech qanday ramz topilmasa, biz shunchaki hech narsa topilmaganini aytamiz va xulosa qilamiz. O'sha joyni ishonarli so'zlar bilan to'ldirish bu xizmatning eng ehtiyotkorlik bilan yondashadigan joyidir."
          },
          {
            "p": "**Ta'lim tush — bu faqat bir belgi, hukm emas.** Biz faqat an'anaviy ravishda ta'lim tush deb hisoblangan ramz tushda paydo bo'lganini xabar beramiz. Biz homiladorlik yoki bolaning jinsi haqida bashorat bermaymiz va bunday da'volar uchun hech qanday asos yo'q."
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
            "p": "Tush hikoyalari bu xizmat oladigan eng shaxsiy qismdir. Shuning uchun, biz **ularni saqlamaymiz.** Siz kiritgan ma'lumot faqat URL da saqlanadi va o'qish uchun ishlatiladi; bu bizning serverlarimizda hech qanday jadvalda yozilmaydi."
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
            "p": "Usul haqida batafsil ma'lumot [qo'llanma hujjatida](/guide) keltirilgan. Biznes ma'lumotlari va aloqa tafsilotlarini [biz bilan bog'laning](/contact) bo'limida topishingiz mumkin."
          }
        ]
      }
    ]
  },
  "guide": {
    "eyebrow": "Hisoblash Asosi",
    "title": "Hisoblash asosi nima?",
    "summary": "Biz Dreams-Link foydalanadigan barcha qoidalarni oshkor qilamiz. Qanday ramzlar topilganini, lug'atda nima yozilganini — ekranda ko'rsatilgan talqinlar qayerdan kelayotganini tekshirishingiz mumkin.",
    "backLabel": "Bosh sahifaga qaytish",
    "sections": [
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Bu yerda yozilgan barcha raqamlar **ramzlar lug'atidan va mos kelish qoidalaridan to'g'ridan-to'g'ri o'qiladi.** Biz matnni qo'lda yozmaymiz, agar lug'at kengaytirilsa yoki qoidalar o'zgartirilsa, ushbu hujjatlardagi raqamlar ham o'zgaradi."
          }
        ]
      }
    ]
  },
  "guide/symbol-dictionary": {
    "eyebrow": "Xizmatning Asosi",
    "title": "Ramzlar lug'ati asosini nima?",
    "summary": "Bu talqinlarning qayerdan kelishini aniqlaydi. {symbolTotal} ramzni to'qqiz toifaga bo'lish mezonlari, faqat {cultureNoteTotal} tasdiqlanishi mumkinligi sababi va nima uchun bo'shliqlarni to'ldirmasligimizni tushuntiradi.",
    "backLabel": "Talqin Asosi",
    "sections": [
      {
        "title": "Biz faqat lug'atda yozilganlarni ko'rsatamiz.",
        "blocks": [
          {
            "p": "Dreams-Link dan olingan talqinlar **oldindan yozilgan ramzlar lug'atidan** keladi. Biz siz taqdim etgan matnda ramzlarni topamiz va o'sha ramzlar uchun lug'atda yozilgan ma'nolarni ko'rsatamiz. Biz lug'atda yo'q so'zlarni yaratmaymiz."
          },
          {
            "p": "Hozirda lug'atda **{symbolTotal} ramz** mavjud va bu ramzlar jami **{meaningTotal} ma'no** ga ega. Ko'p ramzlar faqat bitta ma'noga ega, ba'zilari esa kontekstga qarab bir nechta ma'noga ega."
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
              "**Harakatlar**({categoryAction}) · **Tanalar**({categoryBody}) — qilingan ishlar, masalan, quvish yoki yiqilish, va tananing qaysi joyida, masalan, yuz yoki soch.",
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
            "p": "**Biz bo'sh joylarni to'ldirmadik.** Ishonchli kelib chiqishlarni qo'shish hujjatni qalinlashtiradi, lekin o'sha paytda, bu lug'at an'anani etkazmaydi, balki uni ixtiro qiladi. Nima tasdiqlanishi mumkin va nima tasdiqlanishi mumkin emasligini ajratish yanada halol."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Lug'atni tasodifan kengaytirish sabablari.",
        "blocks": [
          {
            "p": "Biz aslida ramzlarni yuzlab kengaytirishga harakat qildik, lekin buni to'xtatdik. Avtomatik ravishda yaratilgan yozuvlar yoki 'romantika → yaxshi munosabat' kabi bir xil iboralarni takrorladi yoki hujjatlashtirilgan an'anaviy manba taqdim etishda muvaffaqiyatsiz bo'ldi. Biz **mavjud narsalarni aniq topish** raqamlarni shunchaki oshirishdan yaxshiroq degan xulosaga keldik."
          }
        ]
      },
      {
        "title": "Yaxshi va yomon lug'at tomonidan oldindan belgilangan.",
        "blocks": [
          {
            "p": "Har bir ramz o'ziga xosligi bilan birga yozilgan. **Yaxshi {polarityPositive}**, **noaniq {polarityAmbivalent}**, **ogohlik {polarityNegative}**, va **noto'g'ri {polarityNeutral}**."
          },
          {
            "p": "Yaxshi ma'nolar yarmidan ko'p bo'lishi bizning saxiyligimizdan emas, balki an'anaviy **dream interpretation** har doim shunday bo'lganligi sababli — cho'chqalar, ajdaho va olov kabi katta va kuchli ramzlar odatda yaxshi omonatlar sifatida ko'rilgan. Biroq, barcha tushlar ijobiy talqin qilinmaydi. Bu qiymat har bir ramzning tabiati va topilgan ramzlarni yig'ish orqali tushning umumiy muhitini qayta baholashni aks ettiradi."
          }
        ]
      }
    ]
  },
  "guide/how-matching-works": {
    "eyebrow": "Xizmatning Asosi",
    "title": "Tush hikoyalarida ramzlarni qanday topish.",
    "summary": "Bu erda ramzlar erkin yozilgan jumlalardan qanday tanlanishi va uzun so'z ichida tasodifan joylashgan ramzlarni qanday filtrlaymiz — 별 (\"yulduz\") 특별할 (\"maxsus emas\") ichida.",
    "backLabel": "Talqin Asosi",
    "sections": [
      {
        "title": "Biz siz taqdim etgan matnda ramzlarni topamiz.",
        "blocks": [
          {
            "p": "Siz tush hikoyangizni erkin yozganingizda, biz o'sha matndan lug'atdan ramzlarni qidiramiz. Siz elementlarni tanlashingiz yoki maxsus formatda yozishingiz shart emas. Faqat odatdagidek yozing, masalan, 'Kecha katta piton menga o'raldi.'"
          },
          {
            "p": "Qidirishda, biz nafaqat ramzning nomini, balki **{aliasTotal} alternativ nomlarni** ham ko'rib chiqamiz. Bu so'zlar bir xil narsani anglatadi, masalan, 구렁이 (gureongi) va 뱀 (baem), 떨어지다 (tteoreojida) va 빠지다 (ppajida). Ulanishlar, masalan 「떨어지는」 (tteoreojineun) · 「쫓겨서」 (jjotgyeoseo) · 「빠졌다」 (ppajyeotda), ham kiritiladi."
          }
        ]
      },
      {
        "title": "So'z ichida tasodifan paydo bo'lgan belgilar hisobga olinmaydi",
        "blocks": [
          {
            "p": "Bu Koreyada eng qiyin jihatdir. Ramzlar orasida **{singleCharSymbolTotal} bitta belgili ramzlar** mavjud, masalan **별** (byeol) · **말** (mal) · **배** (bae) · **손** (son), bu ramzlar boshqa so'zlarda tez-tez uchraydi."
          },
          {
            "ul": [
              "별 (\"yulduz\") 특**별**할 (\"maxsus emas\") ichida yashiringan",
              "게 (\"rak\") 누군가에**게** (\"biror kishi tomonidan\") ichida yashiringan",
              "말 (\"ot\") **말**했다 (\"aytdi\") ichida, va 배 (\"qayiqqa, nok\") **배**가 고팠다 (\"och qolgan edi\") ichida"
            ]
          },
          {
            "p": "Bularni ramz sifatida hisoblash noaniq talqinlarga olib keladi. Shuning uchun, biz atrofdagi belgilarni tekshiramiz — agar **oldinda Koreyscha belgi bo'lsa**, biz uni uzoqroq so'zning bir qismi sifatida qabul qilamiz va hisobga olmaymiz, va **keyin kelayotgan narsa partikulami yoki fe'l oxiri ekanligini** ko'rib chiqamiz, 「소가」 (soga) ni o'tkazib, 「소리」 (sori) ni filtrlashimiz mumkin."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bu qanday ishlayotgani",
        "blocks": [
          {
            "p": "Ushbu qoidani amalga oshirishdan oldin, o'n ikki haqiqiy jumlalar bilan sinov o'tkazilganda, **barcha o'n ikki** noaniq ramzlarni o'z ichiga oldi. Muhim mazmunsiz bir jumla hatto ta'sirli tush ko'rish sifatida belgilangan edi."
          },
          {
            "p": "Endi, bir narsa qoladi — 「배가 고팠다」 (bae ga gopatda) ichidagi 배 (bae). U bir xil tovushga ega, lekin boshqa ma'noga ega, shuning uchun atrofdagi belgilar orqali filtrlash mumkin emas."
          },
          {
            "p": "Bir narsani topmaslik — bu halol masala. Biroq, noaniq narsani topish, o'sha so'z atrofida hech qachon bo'lmagan an'anani o'rnatishni anglatadi."
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
            "p": "Ushbu sifat ham biz o'zimizga bergan va'dadir. Har safar o'zgaradigan talqinlar qiziqarli, lekin asosdan mahrum. Bu [model ishlatmasligimizning sababi](/guide/no-ai) hikoyasiga bog'liq."
          }
        ]
      }
    ]
  },
  "guide/one-symbol-many-meanings": {
    "eyebrow": "Xizmat Asosi",
    "title": "Bir xil ramzning turli ma'nolarga ega bo'lishining sababi",
    "summary": "An'anaviy ravishda, ilonni ushlash va undan chaqish qarama-qarshi. Bu {symbolTotal} ramzning {meaningTotal} ma'noga ega bo'lishi va vaziyatlarni qanday talqin qilishni muhokama qiladi.",
    "backLabel": "Talqin Asosi",
    "sections": [
      {
        "title": "Ramzlar bir xil bo'lsa ham, turli vaziyatlar turli ma'nolarni keltirib chiqaradi",
        "blocks": [
          {
            "p": "An'anaviy tush ko'rish talqinida, bitta ramz har doim bitta ma'noga ega emas. Bir xil ilon uchun ham, **uni ushlash va chaqilish mutlaqo qarama-qarshi talqin qilingan.** Bu lug'atda ham qayd etilgan."
          },
          {
            "p": "Shuning uchun {symbolTotal} ramzlar jami {meaningTotal} ma'noga ega. Har bir ma'no **qaysi kontekstda qo'llanilishini** o'z ichiga oladi, va agar bu kontekst siz taqdim etgan matnda ko'rinadigan bo'lsa, biz o'sha ma'noni tanlaymiz."
          }
        ]
      },
      {
        "title": "Vaziyatni qanday aniqlash",
        "blocks": [
          {
            "p": "Biz siz taqdim etgan matnda o'sha vaziyatni ko'rsatadigan so'zlar mavjudligini tekshiramiz. 「뱀이 나를 물었다」 (baemi nareul mul-eotda) da chaqilish vaziyati tasvirlangan, 「뱀을 품에 안았다」 (baemeul pume anatda) da esa ushlash vaziyati tasvirlangan. Agar vaziyatni ko'rsatadigan so'zlar bo'lmasa, biz o'sha ramzning **asosiy ma'nosi** orqali talqin qilamiz."
          },
          {
            "p": "Shuning uchun, tushingizni yozayotganda, agar siz **nafaqat paydo bo'lgan narsalarni, balki qaysi harakatlar amalga oshirilganini** ham qo'shsangiz, talqin yanada aniqroq bo'ladi. 「돼지를 봤다」 (dwaeji-reul bwatda) 「돼지가 집으로 들어왔다」 (dwaeji-ga jib-euro deureowatda) dan kamroq ma'no beradi."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Qanchalik ko'p yozsangiz, shuncha yaxshi, lekin uzoq yozish shart emas",
        "blocks": [
          {
            "p": "Ikki yoki uch jumla kifoya. Uzoq yozish ko'proq ramzlarni topish demak emas; aksincha, agar aloqasiz so'zlar aralashsa, noaniq ramzlar aniqlanishi mumkin."
          }
        ]
      },
      {
        "title": "{contextSplitSymbolTotal} ramzlar bo'lib, ularning ma'nolari bo'linadi",
        "blocks": [
          {
            "p": "Lug'atdagi {symbolTotal} ramzlar orasida, **{contextSplitSymbolTotal}** vaziyatga qarab o'zgaradigan ma'nolarga ega. Qolganlari esa vaziyatga qarab bitta yo'nalishda o'qilgan."
          },
          {
            "p": "Bu {contextSplitSymbolTotal} eng ehtiyotkorlik bilan yondashiladigan sohalardir. Vaziyatni noto'g'ri tushunish yaxshi xabarni yomon xabar sifatida etkazishga yoki aksincha olib kelishi mumkin. Shuning uchun, agar vaziyat aniq bo'lmasa, biz **bir tomonni majburan tanlamaymiz va o'sha ramzning asosiy ma'nosi bilan boramiz** — biz noaniq narsani aniq kabi bayon etishni xohlamaymiz."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Uyg'onganingizdagi his-tuyg'ular ham hisobga olinadi",
        "blocks": [
          {
            "p": "Tush mazmunidan pastda so'ralgan his-tuyg'ular va takrorlanish ramzlarni topish uchun ishlatilmaydi. Ular bo'linadigan ma'nolar bilan vaziyatni talqin qilishda qaysi yo'nalishda talqin qilishni hal qilishda ko'rsatma sifatida ishlatiladi. Siz tanlash shart emas; natijalar hali ham taqdim etiladi."
          }
        ]
      },
      {
        "title": "Tushning umumiy muhitini alohida hisobga olishadi",
        "blocks": [
          {
            "p": "Agar bir nechta ramzlar topilsa, biz har bir ramzning ijobiy yoki ehtiyotkor ekanligini to'plab, tushning umumiy ohangini aniqlaymiz. Bitta yaxshi ramz va bitta ehtiyotkor ramzni o'z ichiga olgan tush shunchaki 'yaxshi tush' deb atalmaydi."
          },
          {
            "p": "Siz turli ramzlar va ularning ma'nolarini [ramzlar lug'atida](/dream/symbols) oldindan ko'rishingiz mumkin. Tushingizni yozishdan oldin, nimalar kiritilganiga bir nazar tashlash ham yaxshi."
          }
        ]
      }
    ]
  },
  "guide/good-and-bad": {
    "eyebrow": "Xizmat Asosi",
    "title": "Yaxshi tushlar va yomon tushlarni ajratish mezonlari",
    "summary": "Har bir ramzga berilgan to'rtta qiymat va ularning taqsimoti, ijobiylar nega yarmidan ortiq, va nega aralash tushlarni aralash sifatida etkazamiz.",
    "backLabel": "Talqin Asosi",
    "sections": [
      {
        "title": "Har bir ramzga to'rtta qiymat beriladi",
        "blocks": [
          {
            "p": "Lug'atdagi {symbolTotal} ramzlar orasida, har biri quyidagi toifalardan biriga kiritilgan."
          },
          {
            "ul": [
              "**{polarityPositive} ijobiy ramzlar** — boylik, bayramlar va yordamchilar kabi omadli voqealar sifatida talqin qilingan.",
              "**{polarityAmbivalent} vaziyatga qarab o'zgaradigan ramzlar** — ilonlar kabi, ma'nosi amalga oshirilgan ishga qarab o'zgarishi mumkin. Ushbu toifa eng ehtiyotkor.",
              "**{polarityNegative} yomon ramzlar** — g'iybat, tortishuvlar yoki yo'qotishlar sifatida ko'rilgan.",
              "**{polarityNeutral} neytral ramzlar** — o'z-o'zidan yaxshi yoki yomon bo'lmagan, ranglar yoki raqamlar kabi."
            ]
          }
        ]
      },
      {
        "title": "Ijobiy ramzlar yarmidan ortiq bo'lishining sababi",
        "blocks": [
          {
            "p": "Bu bizning baholarimizda saxiy ekanligimiz sababli emas. **An'anaviy tush ko'rish talqini (tush talqini) har doim shunday bo'lgan.** Katta va kuchli ramzlar, masalan, cho'chqalar, ajdaho, olov va suv, odatda yaxshi omens sifatida qaraladi, va lug'at bu an'anani aks ettiradi."
          },
          {
            "p": "Shunday qilib, 'yaxshi ramz paydo bo'ldi' degani 'yaxshi narsalar bo'ladi' degani emas. Biz etkazishi mumkin bo'lgan narsa an'anada o'sha ramz qanday talqin qilinganligi bilan cheklangan."
          }
        ]
      },
      {
        "title": "Tushning ohangi ramzlaridan to'planadi",
        "blocks": [
          {
            "p": "Agar bir nechta ramzlar topilsa, biz ularning mos ravishda omadliligini to'playmiz va tushning umumiy ohangini aniqlaymiz. Agar faqat ijobiy ramzlar paydo bo'lsa, bu yaxshi tush; agar faqat yomon ramzlar paydo bo'lsa, bu yomon tush; agar **aralash bo'lsa, biz uni aralash sifatida etkazamiz.**"
          },
          {
            "p": "Biz aralash ramzlarni bir tomonga majburan tasniflamaymiz. Haqiqatda, odamlar ko'rgan tushlar ko'pincha aralash bo'ladi va ularni 'yaxshi tush' deb qisqartirish nafaqat aniq emas, balki foydali ham emas."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ishlatmaslik kerak bo'lgan so'zlar",
        "blocks": [
          {
            "p": "Nima bo'lishi, qachon bo'lishi yoki sog'liq va boylik haqida aniq bayonotlar bermang. An'anaviy ravishda o'tkazilgan ramzlarning ma'nolarini etkazish kelajakni bashorat qilishdan farq qiladi."
          }
        ]
      },
      {
        "title": "Afsusli tush paydo bo'lganda",
        "blocks": [
          {
            "p": "Ehtiyotkorlikni bildiruvchi ramz paydo bo'lsa ham, bu shart emaski, bu yomon xabar. An'anaviy tush talqinida, afsusli tush odatda **hozirgi vaziyatga ishora qiluvchi bayonot sifatida** ishlatiladi. Agar nizoni bildiruvchi ramz paydo bo'lsa, bu so'zlarni ushlab turish uchun eslatma sifatida o'qilishi mumkin."
          },
          {
            "p": "Shu sababdan, bu xizmat talismanlar yoki charm sotmaydi. Sotiladigan narsa faqat [tushlaringizni saqlashning ikki usuli](/guide/reports)."
          }
        ]
      }
    ]
  },
  "guide/conception-dreams": {
    "eyebrow": "Tug'ilish tushlari",
    "title": "Tug'ilish tushlarini qanday talqin qilish kerak",
    "summary": "Bu {conceptionSymbolTotal} ta tug'ilish tushlari ramzlarini qanday aniqlashni, barcha cho'chqa tushlari tug'ilish tushlari deb hisoblanmasligini va homiladorlik yoki jinsni bashorat qilmaydigan printsipni ochib beradi.",
    "backLabel": "Talqin asoslari",
    "sections": [
      {
        "title": "Birinchidan, buni aniqlang",
        "blocks": [
          {
            "p": "**Dreams-Link homiladorlik holatini aniqlamaydi. Bu bolaning jinsini ham ko'rsatmaydi.** Bu tushlar orqali bilib bo'lmaydigan masalalardir va biz buni amalga oshira olmaymiz."
          },
          {
            "p": "Sizga ayta oladiganimiz faqat shundan iborat — **an'anaviy ravishda tug'ilish tushlari sifatida qaraladigan ramz ushbu tushda paydo bo'ldi.** Bu bizning ajdodlarimiz ushbu ramzni qanday talqin qilganligi haqida."
          }
        ]
      },
      {
        "title": "Tug'ilish tushlari sifatida qaraladigan {conceptionSymbolTotal} ta ramz mavjud",
        "blocks": [
          {
            "p": "Lug'atdagi {symbolTotal} ta ramzdan **{conceptionSymbolTotal}** tasi tug'ilish tushlari sifatida belgilangan. Ular orasida ajdaho, cho'chqa va ilon kabi ko'plab hayvonlar, shuningdek, shaftoli va kestanalar kabi mevalar, quyosh va oy ham mavjud."
          },
          {
            "p": "Biroq, **ushbu ramzning paydo bo'lishi darhol tug'ilish tushidir degani emas.** Bu xizmatning harakat qilgan joyidir."
          }
        ]
      },
      {
        "title": "Qaror haqiqiy ma'niga asoslangan, ramzlarga emas",
        "blocks": [
          {
            "p": "Cho'chqa tug'ilish tushlari ramzi bo'lib, shu bilan birga **boylik tushlarini ham bildiradi.** Agar faqat ramz paydo bo'lganligi sababli bu tug'ilish tushlari deb hisoblangan bo'lsa, unda cho'chqa tushini ko'rgan har kim tug'ilish tushini ko'rgan bo'lardi. Haqiqatan ham, bu ko'proq boylik tushlari sifatida talqin qilingan."
          },
          {
            "p": "Shuning uchun, biz **ushbu ramzdan olingan haqiqiy ma'nini, ramzning o'zini emas,** ko'rib chiqamiz. Biz faqat siz taqdim etgan vaziyatda tug'ilishga moyil bo'lgan ma'no tanlanganida uni tug'ilish tushlari sifatida belgilaymiz. Bir xil cho'chqa bilan ham, agar jumla farq qilsa, talqin o'zgaradi."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Agar siz homiladorlikni eslasangiz, biz avval buni ko'rib chiqamiz",
        "blocks": [
          {
            "p": "Agar sizning yozuvingizda homiladorlik, tug'ilish tushlari yoki tug'ilish kabi so'zlar bo'lsa, biz avval ushbu ramzning tug'ilishga moyil bo'lgan ma'nisini ko'rib chiqamiz. Bir xil cho'chqa tushida ham, ajdodlarimizning talqini hozirgi vaziyatga qarab farq qilgan."
          }
        ]
      },
      {
        "title": "Tug'ilish tushlari hisobotlarini ajratish sababi",
        "blocks": [
          {
            "p": "Tug'ilish tushlari boshqa tushlardan farqli maqsadga xizmat qiladi. Ular bolalar tug'ilgandan keyin ham ko'p gapiriladi va oila a'zolari o'rtasida baham ko'riladi. Shuning uchun, uni faqat ekranda ko'rish o'rniga, biz alohida **saqlanadigan hujjat yaratdik.**"
          },
          {
            "p": "Nima kiritilganligi [tushlaringizni saqlashning ikki usuli](/guide/reports) da qayd etilgan. Siz ekranda ko'rgan narsalarni sotib olmasdan barcha talqinlarni ko'rishingiz mumkin."
          }
        ]
      }
    ]
  },
  "guide/how-to-write": {
    "eyebrow": "Qanday foydalanish kerak",
    "title": "Tushingizni samarali yozish usuli",
    "summary": "Agar siz ko'rgan va qilgan narsalaringizni yozsangiz, bu yaxshi talqin qilinadi. Birgina fe'l ma'noni qanday belgilashi va biz his-tuyg'ular va takrorlanish haqida nega so'rashimizni tushuntiradi.",
    "backLabel": "Talqin asoslari",
    "sections": [
      {
        "title": "Iltimos, ko'rgan va qilgan narsalaringizni yozing",
        "blocks": [
          {
            "p": "Maxsus format yo'q. Odatda gapirganingizdek bir necha jumla kifoya. Biroq, yaxshi ishlaydigan narsa — **ko'rinadigan narsa** va **bo'lgan voqealar.**"
          },
          {
            "ul": [
              "Yaxshi ishlaydi — 「Meni katta ilon o'rab oldi」, 「Men toza suv oqayotganini ko'rdim」, 「Men baland joydan yiqildim」",
              "Yaxshi ishlamaydi — 「Men qo'rqdim」, 「Men g'alati his qildim」, 「Men kimdir mendan nafratlanayotgandek his qildim」"
            ]
          },
          {
            "p": "Agar siz faqat his-tuyg'ularni yozsangiz, hech qanday ramz topilmaydi. Bu an'anaviy tush talqini [ob'ektlar va harakatlar](/guide/categories) haqida, his-tuyg'ular haqida emas."
          }
        ]
      },
      {
        "title": "Qilgan narsalaringizni yozish aniqroq qiladi",
        "blocks": [
          {
            "p": "Bir xil ramz bilan ham, vaziyatga qarab ma'nolar farq qiladigan {contextSplitSymbolTotal} ta holat mavjud. An'anaviy ravishda, ilonni ushlash va chaqish qarama-qarshi talqin qilingan."
          },
          {
            "p": "Shunday qilib, 「Men cho'chqani ko'rdim」 jumlasi 「Cho'chqa uyga kirdi」 jumlasidan kamroq aniq, va 「Suv bor edi」 jumlasi 「Men toza suv ichdim」 jumlasidan kamroq aniq. **Birgina fe'l ma'noni belgilaydi.**"
          }
        ]
      },
      {
        "title": "Nega his-tuyg'ular va takrorlanish haqida so'raymiz",
        "blocks": [
          {
            "p": "Tush mazmunidan pastda **uyg'onganingizda his qilgan his-tuyg'u** va **bir xil tushni takrorlaganingizni** tanlash uchun joy mavjud. Natija berish uchun ikkisini tanlash shart emas."
          },
          {
            "p": "Ushbu qiymatlar ramzlarni topish uchun ishlatilmaydi. Ular **bir xil ramzdan qaysi ma'noni tanlash** va natijani qanday etkazish uchun ko'rsatma sifatida ishlatiladi."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Agar siz homiladorlikni eslasangiz",
        "blocks": [
          {
            "p": "Agar sizning yozuvingizda homiladorlik, tug'ilish tushlari yoki tug'ilish kabi so'zlar bo'lsa, biz avval ushbu ramzning tug'ilishga moyil bo'lgan ma'nisini ko'rib chiqamiz. Bir xil cho'chqa tushida ham, ajdodlarimizning talqini hozirgi vaziyatga qarab farq qilgan — [tug'ilish tushlarini qanday talqin qilish kerak](/guide/conception-dreams)."
          }
        ]
      },
      {
        "title": "Uzoq matn yozish shart emas",
        "blocks": [
          {
            "p": "Uzoq matn ko'proq ramzlar topilishini anglatmaydi. Aksincha, agar aloqasiz so'zlar uzunroq aralashsa, aloqasiz so'zlar ramz sifatida talqin qilinishi ehtimoli oshadi. **Iltimos, faqat eslagan sahnalarni yozing.**"
          },
          {
            "p": "Siz taqdim etgan matn hech joyda saqlanmaydi. Erkin yozishingiz mumkin bo'lgan sabab [saqlamaslik usuli](/guide/no-storage) da qayd etilgan."
          }
        ]
      }
    ]
  },
  "guide/categories": {
    "eyebrow": "Xizmat asoslari",
    "title": "To'qqiz toifaga bo'lingan mezonlar",
    "summary": "Ob'ektlar, hayvonlar va tabiatdan tortib ranglar va raqamlargacha to'qqiz toifa mavjud va his-tuyg'u toifasini kiritmaslik sababi bor.",
    "backLabel": "Talqin asoslari",
    "sections": [
      {
        "title": "Tushlardagi ramzlar to'qqiz toifaga bo'lingan",
        "blocks": [
          {
            "p": "{symbolTotal} ta ramz xususiyatlariga qarab to'qqiz toifaga guruhlangan. Bo'linish mezoni **tushlarda qanday ko'rinishi** — hayvonlar, ob'ektlar yoki bizning qilgan harakatlarimiz sifatida."
          },
          {
            "ul": [
              "**Ob'ektlar {categoryThing}** — pul, oynalar va pichoq kabi moddiy narsalar. Bu eng katta toifa.",
              "**Hayvonlar {categoryAnimal}** — ajdaho·cho'chqa·ilonga·sigir. Ularning ko'pchiligi ta'lim tushlari sifatida ko'riladi.",
              "**Tabiat {categoryNature}** — suv·olov·quyosh·oy·tog'. Katta va qadimiy narsalar.",
              "**Harakat {categoryAction}** — tushlarda amalga oshiriladigan narsalar, masalan, quvvatish·tushish·uchish.",
              "**Tan body {categoryBody}** — tish·soch·qon. Ma'no tananing qaysi qismida bo'lishiga qarab farq qiladi.",
              "**Shaxs {categoryPerson}** · **Joy {categoryPlace}** · **Rang {categoryColor}** · **Raqam {categoryNumber}**"
            ]
          }
        ]
      },
      {
        "title": "Nima uchun hissiyotlar kategoriyasi yo'q?",
        "blocks": [
          {
            "p": "「tashvish」·「sog'inch」 kabi kategoriyalar kiritilmagan. **Bu an'anaviy tush talqini hissiyotlarni ko'rib chiqmaydi.** Eski talqinlar ko'rinadigan narsalar va sodir bo'lgan voqealarga e'tibor qaratgan, tush egasining his-tuyg'ulariga emas."
          },
          {
            "p": "Biz hissiyotlar kategoriyasini yaratishga harakat qildik, lekin natijalar «sevgini yo'qotish»·«hissiy barqarorlik» kabi atamalar bo'ldi. Bu tushlardan olingan **simvollar** emas, balki zamonaviy psixologiyadan olingan lug'atdir. Bu boshqa turdagi xizmat va bu lug'atning maqsadi emas."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Shunday qilib, siz yozganingizda",
        "blocks": [
          {
            "p": "Iltimos, his-tuyg'ular o'rniga **nima ko'rganingiz va nima qilganingizni** yozing; bu ancha yaxshi natijalar beradi. Biroq, biz uyg'onganingizda his-tuyg'ularingiz haqida alohida so'raymiz — hatto bir xil simbol ham vaziyatga qarab turlicha ma'noga ega bo'lishi mumkin."
          }
        ]
      },
      {
        "title": "Ranglar va raqamlar mustaqil emas",
        "blocks": [
          {
            "p": "Rang {categoryColor} va raqam {categoryNumber} o'z-o'zidan yaxshi yoki yomon ma'nolarga ega emas. Oq ilon va qora ilon farqli bo'lgani kabi, ularning ma'nolari **nima bilan bog'liq ekanligiga** qarab o'zgaradi. Shuning uchun, bu ikki kategoriya boshqa simvollar bilan birgalikda ko'rib chiqiladi."
          },
          {
            "p": "Kategoriyalarga ko'ra to'liq ro'yxat [simvol lug'atida](/dream/symbols) mavjud. Bir simvolni ochish uning an'anaviy ma'nosi, kategoriyasi va bog'liq simvollarini ko'rsatadi."
          }
        ]
      }
    ]
  },
  "guide/not-found": {
    "eyebrow": "Qanday foydalanish",
    "title": "Agar simvol topilmasa",
    "summary": "Agar siz uni topa olmasangiz, biz sizga topilmaganligini xabar qilamiz. Nima uchun topilmaganligini, o'sha ekranda sizga nima ko'rsatamiz va lug'at qanday kengaytirilishini muhokama qilamiz.",
    "backLabel": "Talqin asoslari",
    "sections": [
      {
        "title": "Topilmasa, sizga topilmaganligi haqida xabar beramiz",
        "blocks": [
          {
            "p": "Agar siz taqdim etgan matnda hech qanday simvollarni topa olmasak, biz **topilmaganligini xabar beramiz.** Biz uni biror narsa bilan majburan bog'lash yoki bo'sh joyni to'ldirish uchun ishonarli jumlalar yaratmaymiz."
          },
          {
            "p": "Bu xizmatning eng ehtiyotkorligi bilan bog'liq. Agar biz bo'sh joyni to'ldirsak, bu an'anaviy talqinlarni faqat uzatish va'dasini buzadi."
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
              "**Bu hali lug'atda yo'q simvol.** Hozirda {symbolTotal} simvol ro'yxatga olingan, lekin tushlarda ko'proq ko'rinishi mumkin.",
              "**Siz faqat his-tuyg'ularni yozdingiz.** Agar faqat «men qo'rqdim»·«men g'alati his qildim» kabi hissiyotlar bo'lsa, mos keladigan simvollar yo'q. An'anaviy tush talqini **ko'rinadigan ob'ektlar va harakatlar** haqida gapiradi, hissiyotlar haqida emas.",
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
            "p": "Iltimos, tushda **nima ko'rganingiz va nima qilganingizni** qo'shing. «Men tashvishlandim» demoqdan ko'ra «men baland joydan tushdim» demoq yaxshiroq, va «men yoqtirdim» demoqdan ko'ra «men toza suv oqayotganini ko'rdim» demoq yaxshiroq."
          }
        ]
      },
      {
        "title": "biz bo'sh ekran qoldirmaymiz",
        "blocks": [
          {
            "p": "Agar biror narsa topilmasa, biz o'sha ekranda **{popularSymbolCount} tez-tez qidirilgan simvollarni** ham ko'rsatamiz. Bu simvollar o'z vakilliklariga asoslanib lug'atdan tanlanadi, bu sizga agar ulardan biri tushingizda paydo bo'lgan bo'lsa, eslab qolishga yordam beradi."
          },
          {
            "p": "Agar siz to'liq ro'yxatni ko'rmoqchi bo'lsangiz, [simvol lug'atida](/dream/symbols) {symbolTotal} simvol kategoriyalarga ko'ra tartiblangan. Har bir simvol uning an'anaviy ma'nosi va bog'liq simvollarini o'z ichiga oladi."
          }
        ]
      },
      {
        "title": "Kelajakda lug'at qanday kengaytiriladi?",
        "blocks": [
          {
            "p": "Sonlarni oshirishdan ko'ra, biz **allaqachon mavjud bo'lgan narsalarni aniq aniqlashga** e'tibor qaratyapmiz. Biz bir xil simvol uchun {aliasTotal} alternativ nomlarni kiritdik va qo'shimchalar bilan shaklini o'zgartiradigan so'zlarni tanib olish imkonini yaratdik."
          },
          {
            "p": "Simvollarni kengaytirishda, biz faqat **hujjatlashtirilgan an'anaviy manbani taqdim eta oladiganlarni** kiritamiz. Dalilsiz sonlarni oshirish yaratilish bo'ladi, lug'at emas — biz [nima uchun modellarni ishlatmaymiz](/guide/no-ai) da urinishlar va natijalarni hujjatlashtirdik."
          }
        ]
      }
    ]
  },
  "guide/no-ai": {
    "eyebrow": "Xizmat asoslari",
    "title": "Tush talqinida sun'iy intellektni ishlatmaslik sabablari",
    "summary": "Talqin yaratish jarayonida modelni chaqiradigan kod yo'q. Biz empirik natijalarga asoslangan modeldan foydalanib lug'atni kengaytirish urinishidan voz kechdik, shuning uchun nima olingan va nima berilgan.",
    "backLabel": "Talqin asoslari",
    "sections": [
      {
        "title": "Tush talqinida sun'iy intellekt ishlatilmaydi",
        "blocks": [
          {
            "p": "Hozirgi tush talqini xizmatlari tush hikoyalarini generativ modellarga kiritish orqali yaratilgan matnlarni ko'rsatadi. Dreams-Link buni qilmaydi. **Talqin yaratish jarayonida modelni chaqiradigan kod yo'q.**"
          },
          {
            "p": "Bizning ishimiz oddiy. Biz siz taqdim etgan matndan lug'atda mavjud bo'lgan simvollarni topamiz va o'sha simvollar uchun lug'atda yozilgan ma'nolarni tanlaymiz va ko'rsatamiz. Lug'atda bo'lmagan jumlalar uchun joy yo'q."
          }
        ]
      },
      {
        "title": "Nima uchun bu qaror qabul qilindi?",
        "blocks": [
          {
            "p": "**Modellar bilmaydigan narsalarini bilmayman demaydi.** Hujjatlangan an'anaviy manbasi bo'lmagan simvollar haqida so'ralganda, ular ishonarli kelib chiqishlarni yasaydilar. Va bu yasangan yoki yo'qligini o'quvchi farqlay olmaydi. Agar an'anani uzatish o'rniga yaratilishni kiritilsa, xizmatning asosiy tamoyili buziladi."
          },
          {
            "p": "Biz aslida lug'atni kengaytirish uchun model yaratishga harakat qildik. O'n olti misoldan, **ellik besh hujjatlashtirilgan an'anaviy manbani taqdim eta olmadi**, va ba'zilari an'anaviy tush talqinida mavjud bo'lmagan narsalarni o'z ichiga oldi, masalan, metro va avtomagistrallar. Shuning uchun, **hech biri kiritilmadi.**"
          }
        ]
      },
      {
        "kind": "note",
        "title": "Katta modellar bilan ham shunday bo'lgan",
        "blocks": [
          {
            "p": "Yaxshi model bilan bir xil vazifani bajarishga harakat qilganda, o'n to'qqizdan faqat biri o'tdi, va o'sha biri dalil pozitsiyasida bir xil so'zlarni takrorlash edi. Katta modellar faqat **ko'proq ishonarli** gapiradilar, bilmaydigan narsalari haqida."
          }
        ]
      },
      {
        "title": "Model ishlatmaslikning foydalari",
        "blocks": [
          {
            "ul": [
              "**Agar bu bir xil tush bo'lsa, bir xil talqin chiqadi.** Har safar so'zlashuv o'zgarishsiz qoladi.",
              "**Bu tez.** Modelning javobini kutish shart emas, shuning uchun natijalar darhol yetkaziladi.",
              "**Siz taqdim etgan tush tashqariga chiqmaydi.** Uni tashqi kompaniya serverlariga yuborish shart emas — iltimos, [saqlamaslik usuli](/guide/no-storage) bilan birga o'qing.",
              "**Bu bepul taklif qilinishi mumkin.** Tushlar har kuni ko'riladigan narsalar, shuning uchun ko'p so'rovlar mavjud. Agar har bir so'rov uchun model chaqirilsa, xarajatlar bir joydan qoplanishi kerak."
            ]
          }
        ]
      },
      {
        "title": "Nima berilgan o‘rniga",
        "blocks": [
          {
            "p": "Biz lug‘atda bo‘lmagan narsalarni talqin qila olmaymiz. Agar model ishlatilgan bo‘lsa, yozgan har qanday narsangiz mumkin bo‘lgan javobni berardi. Biz **topilmaganida topilmaganini aytadigan tomonni tanladik**. O‘sha paytda ko‘rsatadigan narsamiz [simvol topilmaganida](/guide/not-found) yozilgan."
          }
        ]
      }
    ]
  },
  "guide/reports": {
    "eyebrow": "To‘lovli Mahsulotlar",
    "title": "Tushlaringizni Saqlashning Ikki Yo‘li",
    "summary": "Talqin o‘zi to‘lovni talab qilmaydi. Biz sotadigan ikki narsaning nima ekanligini, ularning tarkibini va nima uchun yaxshiroq talqinlar emasligini tushuntiramiz.",
    "backLabel": "Talqin Asosi",
    "sections": [
      {
        "title": "Talqin o‘zi to‘lovni talab qilmaydi",
        "blocks": [
          {
            "p": "Tushlaringizni yozib qo‘yish va qanday simvollar mavjudligini ko‘rish **pul talab qilmaydi va a’zolikni talab qilmaydi.** Odamlar har kuni tush ko‘radiganligi sababli, biz bu joyni bepul bo‘lishiga qaror qildik."
          },
          {
            "p": "**Sotadigan ikki narsamiz yaxshiroq talqinlar emas.** Ular **bir xil talqinni saqlashning ikki usuli.** Ekranda ko‘rayotgan mazmun to‘lovdan keyin o‘zgarmaydi."
          }
        ]
      },
      {
        "title": "Tush Kartasi — Bir Rasm",
        "blocks": [
          {
            "p": "Biz sizning tushingizda topilgan simvollarni va ularning ma’nolarini **bir rasmda** taqdim etamiz. Bu rasm fayli, PDF emas, shuning uchun uni shunday saqlashingiz yoki boshqalarga yuborishingiz mumkin."
          },
          {
            "p": "Bu yaxshi tush ekranni yopganda yo‘qolganida afsuslanadiganlar uchun. Biz tushlarni saqlamaymiz, agar siz uni saqlamoqchi bo‘lsangiz, bu uni olishning yagona usuli."
          }
        ]
      },
      {
        "title": "Tug‘ilish Tushi Hisoboti — Hujjat {conceptionPages} Bet",
        "blocks": [
          {
            "p": "Tug‘ilish tushlari sifatida talqin qilingan simvollarni ko‘rsatadigan tushlar uchun biz **{conceptionPages} betli hujjat tayyorlaymiz.** U qaysi simvollar paydo bo‘lganini, ularning an’anaviy talqinlari qanday bo‘lganini va yozish joyini o‘z ichiga oladi."
          },
          {
            "p": "Tug‘ilish tushlari ko‘pincha bolalar tug‘ilgandan keyin ham oila a’zolari o‘rtasida muhokama qilinadi va ulashiladi, shuning uchun biz ekran ustida ko‘rish uchun juda qimmatli tushlar uchun alohida hujjat tayyorladik."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bu yerda ham aytilmagan so‘zlar",
        "blocks": [
          {
            "p": "Biz homiladorlik holatini yoki bolaning jinsini aniqlamaymiz. Bunday bayonotlar hujjatda ko‘rinmaydi. Batafsil ma’lumot uchun [tug‘ilish tushini qanday talqin qilish](/guide/conception-dreams)ga qarang."
          }
        ]
      },
      {
        "title": "Nima uchun endi hujjat yo‘q",
        "blocks": [
          {
            "p": "Ushbu xizmatlar to‘qqiz betli hisobotlarni taqdim etadi. Saju (to‘rt ustunli o‘qish) dvigateli bitta tug‘ilish sanasidan ko‘plab qiymatlarni chiqaradi. Tush talqini shunday ishlamaydi."
          },
          {
            "p": "Lug‘atda keltirilgan simvollar jami {symbolTotal}, va ularning aksariyati **bitta ma’noga ega.** Buni to‘qqiz betga cho‘zish uchun, biz hech qanday materialda topilmaydigan an’anaviy ma’nolarni yozishimiz kerak bo‘ladi, va aynan shu xizmat buni qilmaslikka qaror qildi. Shuning uchun, hujjat faqat materiallar halol ruxsat berganicha uzun, va undan uzun emas."
          }
        ]
      },
      {
        "title": "Narxlar va Savdo Holati",
        "blocks": [
          {
            "p": "Narxlar [narxlar qo‘llanmasida](/pricing) keltirilgan. Ushbu hujjatda miqdorlar ko‘rsatilmaganligi sababi maqsadli — narxlar o‘zgarganda, yo‘riqnoma hujjati eski miqdorlar bilan qolmasligi uchun. Ekran va shartlar bitta joydan bir xil miqdorni o‘qiydi."
          },
          {
            "p": "Siz sotib olgan hujjatlar **bir xil buyurtma bilan yana olinishi mumkin.** Biroq, biz fayllarni saqlamaymiz, natija ekranini tark etganingizdan so‘ng, ularni qayta yaratib bo‘lmaydi — iltimos, olgan fayllaringizni saqlang."
          }
        ]
      }
    ]
  },
  "guide/no-storage": {
    "eyebrow": "Shaxsiy Ma’lumotlar",
    "title": "Yozgan Tushlaringizni Saqlamaslik Usuli",
    "summary": "Biz tush hikoyalari hech qanday joyda yozilmasligini texnik jihatdan nima anglatishini va natija havolasida nima borligini tushuntiramiz.",
    "backLabel": "Talqin Asosi",
    "sections": [
      {
        "title": "A’zolik Talab Qilinmaydi",
        "blocks": [
          {
            "p": "Dreams-Link hisoblar yaratmaydi. Biz ism, elektron pochta yoki telefon raqamlarini yig‘maymiz. Yig‘adigan yagona narsalar — siz yozgan tushlar, uyg‘onganingizda qanday his qilganingiz va bir xil tushni takroran ko‘rasizmi, va bu talqin tugagandan keyin qolmaydi."
          },
          {
            "p": "Tush hikoyalari bu xizmat oladigan eng shaxsiy qiymatlardir. Shuning uchun qoidalar zaruriyatdan qat’iyroq — biz siz yuborgan narsalarni yozish uchun hatto jadval ham yaratmadik."
          }
        ]
      },
      {
        "title": "Natija havolasida nima bor",
        "blocks": [
          {
            "p": "Hisoblash tugagach, manzil quyidagicha ko‘rinadi."
          },
          {
            "p": "**/ko/dream/result#eyJ0IjoiSSBkcmVhbXQgb2YgYSBjYXJwLi4u**"
          },
          {
            "p": "**#** dan keyin keladigan narsa — kirish qiymati. Ushbu qism **fragment** deb ataladi, bu **brauzer serverga yubormaydigan qism.** Bu standart veb xulq-atvori va biz yaratgan qoidalar emas — aslida hujjat ichida joylashuvni ko‘rsatish uchun mo‘ljallangan, shuning uchun serverga uni ko‘rish zarurati yo‘q."
          },
          {
            "p": "Bu yerda, ushbu xususiyat ayniqsa muhim — siz taqdim etgan tush **kirish yozuvlarida qolmaydi.**"
          },
          {
            "p": "Boshqacha qilib aytganda, natija havolasini ochganingizda, brauzer o‘sha qiymatni hisoblashni so‘rash uchun o‘qiydi, va bizning server hisoblash uchun qiymatni qabul qiladi, javobni qaytaradi va keyin uni unutadi."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Boshqalarga havolalarni yuborishda ehtiyot bo‘ling",
        "blocks": [
          {
            "p": "Serverda saqlanmasligi havolaning xavfsizligini anglatmaydi. Natija havolasi siz taqdim etgan tushni o‘z ichiga oladi, shuning uchun ushbu havolani olgan kishi o‘sha mazmunni o‘qishi mumkin."
          }
        ]
      },
      {
        "title": "Nima uchun hisoblash serverda amalga oshiriladi, lekin saqlanmaydi?",
        "blocks": [
          {
            "p": "Hisoblash o‘zi serverda amalga oshiriladi. Simvollarni topish uchun butun lug‘at kerak, va bu lug‘at brauzerga yuborish uchun juda katta. Lug‘atni serverda saqlash, shuningdek, xato tuzatilganda, bu har kim uchun bir vaqtning o‘zida aks etishini anglatadi. Biroq, **so‘rovni qayta ishlagandan keyin, bu qiymat hech joyda ishlatilmaydi.** Uni ma’lumotlar bazasiga kiritish uchun hech qanday kod yo‘q."
          },
          {
            "p": "Ishlash uchun zarur bo‘lgan minimal yozuv saqlanadi — bir xil odamning qisqa vaqt ichida juda ko‘p so‘rov yuborishini oldini olish uchun hisoblagich. Bu tush mazmunini o‘z ichiga olmaydi, va kirish IP ham saqlanmaydi. Faqat bitta qiymat, sanaga xashlangan, hisoblanadi, va bu qiymat kun o‘zgarganda o‘zgaradi."
          }
        ]
      },
      {
        "title": "Saqlanmasligi sababli nima amalga oshirilmaydi",
        "blocks": [
          {
            "p": "Haqiqatdan ham, biz ma’lumotlarni saqlamasligimiz sababli, berilgan narsalardan voz kechganmiz."
          },
          {
            "ul": [
              "**Tushlar daftari yo‘q.** O‘tgan haftadagi talqinni qaytarib ololmaysiz, va uni yana ko‘rish uchun havolaga ega bo‘lishingiz kerak. Bu maqsadli amalga oshiriladi — daftarga, eng shaxsiy yozuvlar doimiy ravishda saqlanishi kerak.",
              "**Biz har safar bir xil qiymatni hisoblaymiz.** Kesh yo‘q. Buning o‘rniga, lug‘at o‘zgarmas, va moslashuv qoidalari deterministik, shuning uchun bir xil matn har doim bir xil simvolni beradi — qoidalar keshni kafolatlagan narsalarni almashtiradi.",
              "**Yangilash reklama eshigini yana ko‘rsatadi.** Bu ko‘rish yozuvlarini qoldirish uchun hech joy yo‘q."
            ]
          }
        ]
      },
      {
        "title": "Sotib olish holatida",
        "blocks": [
          {
            "p": "Agar siz hisobot sotib olsangiz, o‘sha paytda tranzaksiya yozuvi saqlanadi. To‘lovning qonuniy belgilangan saqlash muddati bor, va buyurtma tarixisiz qaytarmalar amalga oshirilmaydi. Biroq, shunda ham, **o‘qish uchun ishlatilgan tush matni buyurtmaga qo‘shilmaydi** — bu yana olinadi va to‘lov tasdiqlangandan keyin hujjatni yaratishda o‘sha paytda yoziladi."
          },
          {
            "p": "Batafsil ma’lumot uchun, iltimos [maxfiylik siyosatiga](/privacy) qarang."
          }
        ]
      }
    ]
  },
  "notice": {
    "eyebrow": "E’lon",
    "title": "E'lonlar",
    "summary": "Bu sizning foydalanishingizga ta'sir qilishi mumkin bo'lgan o'zgarishlar haqida xabardor qilish joyidir.",
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
            "p": "Iltimos, so'rovlaringizni **{email}** manziliga yuboring. Biz 2 ish kuni ichida javob beramiz. To'lov va qaytarish so'rovlari uchun, iltimos, **buyurtma raqamingiz yoki to'lov emailingizni** kiritishni tezroq amalga oshiradi."
          },
          {
            "p": "Telefon orqali so'rovlar {customerCenter} da qabul qilinadi."
          }
        ]
      },
      {
        "title": "Bu kanalda nima yuborilishi mumkin?",
        "blocks": [
          {
            "ul": [
              "**To'lov va Qaytarish** — Agar hujjat yaratilmagan bo'lsa yoki to'lov miqdori buyurtmadan farq qilsa, to'liq qaytarish amalga oshiriladi. Shartlar [qaytarish siyosati](/refund-policy) da.",
              "**Shaxsiy Ma'lumotlar** — Biz kirish, tuzatish va o'chirish so'rovlarini qabul qilamiz. Qayta ishlash siyosati [maxfiylik siyosati](/privacy) da.",
              "**Talqin Xatolarini Hisobot Berish** — Agar ramzlar noto'g'ri topilgan bo'lsa yoki talqin g'alati ko'rinsa, iltimos, bizga xabar bering. Agar siz ushbu tush hikoyasini qachon yozganingizni kiritgan bo'lsangiz, biz uni yana bir bor shu matn bilan ko'rib chiqamiz."
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
              "**Mijozlar Markazi** — {customerCenter}",
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
            "p": "Siz so'rov emailida taqdim etgan tushni qayta yozishingiz shart emas. Biz kirishlarni saqlamaymiz, shuning uchun biz ularni yana ko'rib chiqolmaymiz, va buyurtma raqami tasdiqlash uchun yetarli. Iltimos, faqat zarur bo'lsa, masalan, talqin xatolarini hisobot berish uchun yozing."
          }
        ]
      }
    ]
  },
  "guide/what-we-do-not-do": {
    "eyebrow": "Xizmat Prinsiplari",
    "title": "Biz Nima Qilmaymiz",
    "summary": "Biz lotereya raqamlarini, tush jurnalini, homiladorlikni aniqlashni yoki talismanlarni taqdim etmaymiz. Har birini qilmaslik sabablari haqida tushuntiramiz.",
    "backLabel": "Talqin Asosi",
    "sections": [
      {
        "title": "Biz lotereya raqamlarini taqdim etmaymiz",
        "blocks": [
          {
            "p": "Bu tush talqin xizmatlarida keng tarqalgan bo'lsa-da, biz buni qilmaymiz. **Tushlardan raqamlar olish uchun an'anaviy tush talqini asos yo'q.** Cho'chqa tushlarini boylik sifatida talqin qilish haqida yozuvlar mavjud, lekin buni ishlab chiqaradigan hech qanday adabiyotda qoidalar yo'q."
          },
          {
            "p": "Ularni yaratish uchun, biz ularni o'ylab topishimiz kerak bo'ladi, va shu paytda, bu xizmat an'anaviy ravishda berilgan talqinlarni etkazish joyi bo'lmaydi. Bu ayniqsa moliyaviy yo'qotishga olib kelishi mumkin."
          }
        ]
      },
      {
        "title": "Biz tush jurnalini yaratmaymiz",
        "blocks": [
          {
            "p": "O'tgan tushlarni to'plash imkoniyati qulay bo'lsa-da, bu bizni **taqdim etgan tushlaringizni doimiy saqlashga** majbur qiladi. Tush hikoyalari bu xizmat oladigan eng shaxsiy jihatdir, va biz buni almashmaslikka qaror qildik."
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
            "p": "Biz faqat ta'lim tush (ta'lim tush) sifatida talqin qilingan ramz paydo bo'lganini aytamiz. Siz homiladormisiz yoki bola qizmi yoki o'g'ilmi **tushlar orqali bilib bo'lmaydi.** Bunday bayonotlar ekranda yoki pullik hujjatlarda ko'rinmaydi."
          }
        ]
      },
      {
        "title": "Biz talismanlar yoki charm sotmaymiz",
        "blocks": [
          {
            "p": "Noqulay deb o'qilgan ramz biror narsani sotib olish uchun sabab emas. Noqulay tush an'anaviy ravishda **hozir tekshirilishi kerak bo'lgan vaziyatni ko'rsatish uchun** ishlatiladi, biror narsani to'lash uchun emas."
          },
          {
            "p": "Biz buni sotish uchun xavotir yaratmaymiz. Biz sotadigan yagona narsalar yuqorida aytib o'tilgan ikkita, va hech biri qo'shimcha talqin bermaydi, balki **bir xil mazmunni saqlash usullaridir.**"
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
            "p": "Lug'atda mavjud bo'lmagan ramzlar uchun, biz **ularni topa olmadik deb aytamiz.** Biz o'xshashlarini birlashtirmaymiz yoki joyni ishonarli jumlalar bilan to'ldirmaymiz. Shuning uchun, bu xizmat [tush talqini uchun sun'iy intellektdan foydalanmaydi](/guide/no-ai). Model bilmaydigan narsalarini bilmaydi deb aytmaydi."
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
  "intro": "Sizning foydalanish shartlaringizga — narxlar, siyosatlar — ta'sir qilishi mumkin bo'lgan o'zgarishlar bu yerda e'lon qilinadi. Ichki yaxshilanishlar, masalan, ekran tezligini oshirish, bu yerda e'lon qilinmaydi: bu yerda ko'rinadigan narsa siz bilishingiz kerak bo'lgan narsadir.",
  "empty": {
    "title": "E'lonlar joylashtirilmagan",
    "body": "Agar sizga xabar berish kerak bo'lgan o'zgarishlar bo'lsa, ular bu yerda e'lon qilinadi."
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
        "Tush hikoyalari bu xizmat tomonidan qabul qilingan eng shaxsiy qiymatlardir. Shuning uchun, ular hech qanday jadvalda yozilmaydi. Kirish faqat hisoblash uchun natija manzilida olib boriladi va oynani yopganda, u yo'qoladi.",
        "Biz tushlarni to'playdigan va oqimini ko'rsatadigan xususiyatni yaratmaslikka qaror qildik (tush daftari). Bu foydali xususiyat, lekin buni amalga oshirish uchun eng shaxsiy yozuvlar doimiy ravishda saqlanishi kerak.",
        "Natija havolasini boshqalarga yuborganingizda, u tush mazmunini o'z ichiga oladi. Bo'lishishda ehtiyot bo'ling."
      ]
    },
    "2026-08-06-engine-version": {
      "title": "Natijalar ramzlar lug'ati va hisoblash mezonlarini o'z ichiga oladi.",
      "body": [
        "Tushni talqin qilishning asosi an'anaviy tush talqini ramzlar lug'atidir. Natijalar va hujjatlar ushbu lug'atning versiyasini (masalan, 1.2.0) va moslashuv qoidalarining versiyasini (masalan, dream-1.0.0) o'z ichiga oladi. Bir xil tush har doim bir xil mezon asosida bir xil ramzni beradi.",
        "Agar biz lug'atga ramzlar qo'shsak yoki natijalarni o'zgartirishi mumkin bo'lgan ma'nolarni o'zgartirsak, bu haqda ma'lumot beriladi. Bu siz oldin olgan natijalar o'zgarishi mumkinligini anglatadi.",
        "Biz lug'atda mavjud bo'lmagan an'anaviy ma'nolarni yaratmaymiz. Agar hech qanday ramz topilmasa, biz shunchaki hech narsa topilmaganini aytamiz va xulosaga kelamiz."
      ]
    },
    "2026-08-06-conception": {
      "title": "Biz faqat ta'lim tushiga oid ma'lumot beramiz va hukm qilmaymiz.",
      "body": [
        "Agar tushda an'anaviy ravishda ta'lim tushiga oid ramzlar paydo bo'lsa, biz sizga bu haqda xabar beramiz. Biroq, biz homiladorlik holatini yoki bolaning jinsini aniqlamaymiz — bunday da'volarning asoslari yo'q va tibbiy hukmlar tibbiyot muassasalarining mas'uliyatidir.",
        "An'anaviy hikoyalarda o'g'il va qizlar haqida aytilishi, o'tgan an'analarni aks ettiradi va bu bizning to'g'ri bashorat qilayotganimizni anglatmaydi."
      ]
    }
  }
} satisfies NoticeCopy;
