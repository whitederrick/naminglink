import type { DocPage, NoticeCopy } from "./types";
import type { DocKey } from "./ko";

/** O‘zbekcha — `scripts/translate-doc-content.ts`가 만든다. 손으로 고치지 말 것. */
export const UZ_DOCS = {
  "about": {
    "eyebrow": "Kirish",
    "title": "Saju-Link Kirish",
    "summary": "Bu sizning tug'ilgan sana va vaqtingizga asoslangan saju (to'rt ustunli o'qish) xizmatidir va sakkiz belgi nimani anglatishini tushuntiradi. Bu hisoblangan va hisoblanmagan narsalarni aniqlaydi.",
    "backLabel": "Bosh sahifaga qaytish",
    "sections": [
      {
        "title": "Biz nima qilamiz?",
        "blocks": [
          {
            "p": "Saju-Link sizning tug'ilgan sana va vaqtingizga asoslangan **saju (to'rt ustun) jadvalini tuzadi va sakkiz belgi nimani anglatishini ko'rsatadi**. Bu besh elementning kuchini va kun ustunining kuchini o'qiydi, shuningdek, kun ustuniga asoslangan bugungi taqdirni ham ko'rib chiqadi."
          },
          {
            "p": "Ekranda ko'rganingiz **bepul va a'zolikni talab qilmaydi.** Pullik mahsulot — ekranda ko'rsatilmagan qiymatlarni o'z ichiga olgan PDF hujjati — kuchli kun ustuni va zaif kun ustuni, Wang Sang Hyu Su Sa va haqiqiy quyosh vaqti uchun tuzatish tafsilotlarini ajratish asosidir."
          }
        ]
      },
      {
        "title": "Biz nima hisoblaymiz?",
        "blocks": [
          {
            "p": "Saju **manseyeok (Koreya lunisolal taqvimi)** yordamida tuziladi. Tug'ilish vaqi haqiqiy quyosh vaqtiga to'g'irlanadi — chunki quyoshning haqiqiy pozitsiyasi hududga qarab farq qiladi, hatto soat bir xil vaqtni ko'rsatganda ham."
          },
          {
            "p": "Ballar faqat belgilangan qoidalarga muvofiq beriladi. An'anaviy 명리 (myeongri, taqdirni o'rganish) tushunchalari, masalan, O'n Xudo, yerli filial munosabatlari va qo'llab-quvvatlovchi elementlar hisoblash qoidalariga aylantiriladi, va **bir xil kirish har doim bir xil qiymatni beradi**. Qoidalar o'zgartirilganda, oldingi natijalar o'zgarmasligini ta'minlash uchun regressiya testi o'tkaziladi."
          },
          {
            "p": "**Ekrandagi jumlalarda AI ishlatilmaydi.** Bepul ekranda paydo bo'ladigan tushuntirishlar hisoblash natijalariga bog'langan o'zgaruvchan iboralardir. **Faqat pullik hisobotlardagi talqinlar** generativ AI dan foydalanadi, va hatto shunda, AI ballarni yaratmaydi — u faqat dvigatel tomonidan taqdim etilgan qiymatlar asosida jumlalarni yozadi."
          }
        ]
      },
      {
        "title": "Biz nima demaymiz?",
        "blocks": [
          {
            "ul": [
              "**Biz taqdirni aytmaymiz.** Sizga kimnidir uchratish yoki qochish kerakligini yozmaymiz. Bu an'anaviy 명리 nuqtai nazarlarini qisqacha bayon etuvchi ma'lumotnoma.",
              "**Biz kirishlarni saqlamaymiz.** Tug'ilgan sana va vaqt faqat hisoblash paytida ishlatiladi va serverda saqlanmaydi. Natija havolasi ham brauzer serverga yubormaydigan joyda saqlanadi.",
              "**Ballar insoniy qiymatlar sifatida hisoblanmaydi.** Bugungi taqdir past bo'lsa, bu kunni tark etishingiz kerak degani emas."
            ]
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Tafsilotli hisoblash usullari [Foydalanuvchi qo'llanmasi](/guide) da yozilgan. Biznes ma'lumotlari va aloqa tafsilotlarini [Biz bilan bog'laning](/contact) da topishingiz mumkin."
          }
        ]
      }
    ]
  },
  "guide": {
    "eyebrow": "Hisoblash Asosi",
    "title": "Hisoblashlar uchun asos nima?",
    "summary": "Biz Saju-Link tomonidan ishlatiladigan barcha qoidalarni oshkor qilamiz. Ekranda ko'rsatilgan raqamlar qayerdan kelganini, bugungi taqdir uchun tuzatishlarni, yerli filial munosabatlari jadvalidan olingan ballarni va kuchli kun ustuni va zaif kun ustuni o'rtasidagi chegaraviy qiymatlarni tekshirishingiz mumkin.",
    "backLabel": "Bosh sahifaga qaytish",
    "sections": [
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Bu yerda yozilgan qiymatlar **hisoblash kodidan to'g'ridan-to'g'ri o'qiladi**. Ular matnga qo'lda yozilmagan, agar qoidalar o'zgartirilsa, ushbu hujjatdagi raqamlar ham shunga muvofiq o'zgaradi."
          }
        ]
      }
    ]
  },
  "guide/natal-chart": {
    "eyebrow": "Xizmat Asosi",
    "title": "Saju Jadvali — Sakkiz belgi qayerdan keladi?",
    "summary": "Bu yil, oy, kun va tug'ilish vaqti qanday qilib to'rt ustun va sakkiz belgiga aylanishini tushuntiradi va qaysi belgi sizni ko'rsatishini aniqlaydi. Shuningdek, bu aniq tug'ilish vaqtini bilmasdan ham qanday ko'rinishi mumkinligini muhokama qiladi.",
    "backLabel": "Hisoblash Asosi",
    "sections": [
      {
        "title": "To'rt Ustun, Sakkiz Belgilar",
        "blocks": [
          {
            "p": "Saju (四柱) aslida **to'rt ustun** degan ma'noni anglatadi. Har bir yil, oy, kun va tug'ilish vaqti bir ustun sifatida o'rnatiladi va har bir ustun uchun ikkita belgi yoziladi. Shunday qilib, jami sakkiz belgi bo'ladi, bu **원국 (won-guk)** deb ataladi."
          },
          {
            "table": {
              "head": [
                "Ustun",
                "Bu qayerdan keladi?",
                "Ikki Belgilar"
              ],
              "rows": [
                [
                  "Yil Ustuni (年柱)",
                  "Tug'ilgan yil",
                  "Heavenly Stem + Earthly Branch"
                ],
                [
                  "Oy Ustuni (月柱)",
                  "Tug'ilgan oy",
                  "Heavenly Stem + Earthly Branch"
                ],
                [
                  "Kun Ustuni (日柱)",
                  "Tug'ilgan kun",
                  "Heavenly Stem + Earthly Branch"
                ],
                [
                  "Vaqt Ustuni (時柱)",
                  "Tug'ilish vaqti",
                  "Heavenly Stem + Earthly Branch"
                ]
              ]
            }
          },
          {
            "p": "Yuqori belgilar heavenly stems (天干) deb ataladi, pastki belgilar esa earthly branches (地支) deb ataladi. O'n heavenly stems va o'n ikki earthly branches mavjud. O'n ikki earthly branches odatda **zodiak belgilar** deb ataladi."
          }
        ]
      },
      {
        "title": "Ular orasida, bir belgi menga ishora qiladi.",
        "blocks": [
          {
            "p": "Sakkiz belgining barchasi bir xil og'irlikka ega emas. **Tug'ilish kunining heavenly stem** — ayniqsa, kun ustunining yuqori belgisi — **o'zimni** ko'rsatadi. Bu **kun ustuni (日干)** deb ataladi."
          },
          {
            "figure": "four-pillars",
            "caption": "Saju sakkiz belgidan iborat bo'lib, har bir yil, oy, kun va tug'ilish vaqti uchun ikkita belgi ishlatiladi, ular heavenly stems va earthly branches bilan ifodalanadi. Bu yerda, muhim kun ustuni (日干) — o'zimni ko'rsatadigan belgi.",
            "labels": {
              "year": "Yil Ustuni",
              "yearNote": "Asos · Zodiak Belgisi",
              "month": "Oy Ustuni",
              "monthNote": "Mavsum · Kuch",
              "day": "Kun Ustuni",
              "dayNote": "O'zini · Juftlik Saroyi",
              "hour": "Soat Ustuni",
              "hourNote": "Keyin Yillar · Foydalanish",
              "stem": "Osmon Ustuni",
              "stemNote": "Kun Ustuni = O'zini",
              "branch": "Yer Tarmog'i",
              "branchNote": "Kun Tarmog'i = Juftlik Saroyi"
            }
          },
          {
            "p": "Ushbu xizmat ko'rsatishi asosan bitta belgi — tendentsiyalarni talqin qilish, besh elementning kuchi, hozirda kerak bo'lgan energiya va bugungi o'qish Kun Ustuniga asoslanib o'lchanadi. Qolgan yetti belgi 'Kun Ustuni qaysi muhitda joylashgan'ligini ko'rsatadi."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Tug'ilgan Kun Nima Uchun?",
        "blocks": [
          {
            "p": "Yil Ustuni o'sha yilda tug'ilgan har kim uchun bir xil, va Oy Ustuni o'sha oyda tug'ilgan har kim uchun bir xil. Kun Ustuni kun o'zgarganda o'zgaradi va an'anaviy taqdirni aytish bu pozitsiyani Song sulolasidan beri O'zini deb hisoblaydi. Agar Soat Ustuni qo'shilsa, u bir xil kunda tug'ilganlar o'rtasida farq qiladi."
          }
        ]
      },
      {
        "title": "Quyosh Terminalari Bilan Bo'linadi, Kalendar Yili Bilan Emas",
        "blocks": [
          {
            "p": "Saju yili 1-yanvarda o'zgarmaydi, balki **Ipchun (taxminan 4-fevral)** da o'zgaradi. Oy ham quyosh terminalari asosida bo'linadi."
          },
          {
            "p": "Shunday qilib, **yanvar va fevralning boshida tug'ilganlar o'tgan yilning Yil Ustunini oladilar**. Bu zodiak belgilariga oid umumiy tushunmovchiliklar paydo bo'lish joyidir. Agar siz lunar tug'ilgan kunni kiritgan bo'lsangiz, u quyoshga qaytariladi va keyin quyosh terminalari bo'yicha bo'linadi."
          }
        ]
      },
      {
        "title": "Tug'ilgan Vaqtni Bilmasangiz Ham O'qishingiz Mumkin",
        "blocks": [
          {
            "p": "Agar siz vaqtni kiritmasangiz, o'qish uchta ustun va olti belgiga asoslanadi, Soat Ustunini hisobga olmasdan. Biz yo'qolgan qiymatlarni taxmin qilmaymiz — Soat Ustunini tasodifan belgilash besh elementning kuchini buzishi mumkin, bu esa ehtimoliy to'g'ri xulosalardan ko'ra noto'g'ri xulosalarga olib keladi."
          },
          {
            "p": "Agar siz vaqtni bilsangiz, uni qo'shish yaxshiroqdir. Sakkizdan ikkita belgi qo'shilganda, besh elementning kuchi va baholanishi o'zgarishi mumkin. Biroq, biz soat vaqtini to'g'ridan-to'g'ri ishlatmaymiz, balki [Haqiqiy Quyosh Vaqti](/guide/true-solar-time) dan foydalanamiz."
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Sakkiz belgini besh element sifatida hisoblash usuli [Besh Element Kuchlari va Kuchli/Zayif Kun Ustuni](/guide/five-elements) da davom etadi, qolgan belgilarni Kun Ustuniga asoslanib o'qish usuli esa [O'n Xudo](/guide/ten-gods) da davom etadi."
          }
        ]
      }
    ]
  },
  "guide/five-elements": {
    "eyebrow": "Besh Element",
    "title": "Besh Element Kuchlari va Kuchli/Zayif Kun Ustuni",
    "summary": "Biz sakkiz belgini besh element sifatida hisoblaymiz, qaysi energiya kuchli va qaysi zaif ekanligini ko'rish uchun. Biz Kun Ustunining kuchini belgilovchi chegaraviy qiymatlarni (45%·35%) oshkor qilamiz.",
    "backLabel": "Hisoblash Asosi",
    "sections": [
      {
        "title": "Sakkiz Belgini Besh Energiya Sifatida Hisoblash",
        "blocks": [
          {
            "p": "O'n Osmon Ustunlari va O'n Ikki Yer Tarmog'i har biri **Besh Elementga (五行)** tegishli — Daraxt (木), Olov (火), Yer (土), Metall (金), Suv (水). Biz asl diagrammadagi belgilarni o'z elementlariga qarab hisoblaganimizda, qaysi energiya kuchli va qaysi zaif ekanligini aniqlaymiz."
          },
          {
            "p": "Biroq, biz faqat raqamlarni hisoblamaymiz. Biz shuningdek, **tug'ilgan oy o'sha energiyani qo'llab-quvvatlaydimi yoki yo'qmi** ni ham hisobga olamiz. Hatto bir xil belgi ham o'z mavsumiga mos kelishiga qarab turlicha kuchga ega bo'lishi mumkin. Bu Oy Belgisi (月令) deb ataladi va besh bosqichga bo'linadi: Wang (旺), Sang (相), Hyu (休), Su (囚), va Sa (死)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ekran va Hisobot O'rtasidagi Farq",
        "blocks": [
          {
            "p": "Bepul ekran faqat **Oy Belgisini hisobga olgan holda kuchni ko'rsatadi**. Oy Belgisi oldidan va Wang, Sang, Hyu, Su, va Sa jadvali pullik hisobotda kiritilgan — bu sizga baholash qayerda farq qilganini to'g'ridan-to'g'ri tekshirish uchun taqdim etiladi."
          }
        ]
      },
      {
        "title": "Kun Ustunining Kuchliligi — Kuchli va Zaif",
        "blocks": [
          {
            "p": "Besh elementning kuchlarini hisoblagandan so'ng, biz **Kun Ustuni kuchli yoki zaifmi** ekanligini baholaymiz. Me'yor Kun Ustuniga mos keladigan energiyalar nisbati hisoblanadi."
          },
          {
            "p": "Kun Ustuniga mos keladigan energiyalar **Insoniyat va Hamroh** — meni tug'diradigan energiyalar va menga o'xshash energiyalar. Beshdan ikkita bo'lgani uchun, agar tarafkashlik bo'lmasa, bu {evenAllyRatio} atrofida bo'ladi. Biz bu chegaradan yuqorida va pastda muvozanatli deb baholaymiz."
          },
          {
            "table": {
              "head": [
                "Kun Ustuniga Mos Keladigan Energiya Nisbati",
                "Baholash",
                "Bu Nima Degani?"
              ],
              "rows": [
                [
                  "{strongThreshold} yoki yuqori",
                  "Kuchli Kun Ustuni (身强)",
                  "Kun Ustunini qo'llab-quvvatlaydigan energiyalar ko'p."
                ],
                [
                  "{weakThreshold} yoki yuqori va {strongThreshold} dan kam",
                  "Muvozanatli (中和)",
                  "Ikkala yo'nalishda ham xulosa qilish qiyin."
                ],
                [
                  "{weakThreshold} dan kam",
                  "Zaif Kun Ustuni (身弱)",
                  "Kun Ustunini qo'llab-quvvatlaydigan energiyalar zaif."
                ]
              ]
            }
          },
          {
            "p": "Ushbu jadvaldagi raqamlar matndan ko'chirilmagan, balki **to'g'ridan-to'g'ri dvigateldan o'qilgan**. Agar qoidalar o'zgarsa, ushbu hujjat ham o'zgaradi."
          }
        ]
      },
      {
        "title": "Kuch Yaxshi yoki Yomon Emas",
        "blocks": [
          {
            "p": "Kuchli bo'lish yaxshi degani emas, zaif bo'lish yomon degani emas. Agar kuchli bo'lsa, oldinga surish kuchi bor, lekin bir tomonga og'ishga oson; agar zaif bo'lsa, boshqalarning kuchini olish oson, lekin yolg'iz qiyinchilikka duch kelganda tez charchash mumkin. **Ikkala holatda ham kerakli energiyalar farq qiladi.**"
          },
          {
            "p": "Ushbu 'kerakli energiya'ni aniqlash qo'llab-quvvatlovchi elementdir, va bu [Qo'llab-quvvatlovchi Element](/guide/yongsin) da davom etadi."
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Sakkiz belgining qanday tashkil etilishi [Saju Asl Diagrammasi](/guide/natal-chart) da. Bugungi Kun Ustuni ushbu kuch bilan qanday o'zaro ta'sir qilishi [Bugungi O'qish](/guide/today-fortune) da qamrab olingan."
          }
        ]
      }
    ]
  },
  "guide/yongsin": {
    "eyebrow": "Qo'llab-quvvatlovchi Element",
    "title": "Qo'llab-quvvatlovchi Element — Hozir Kerakli Energiya",
    "summary": "Agar Kun Ustuni kuchli bo'lsa, biz energiyani kamaytirish kerak deb hisoblaymiz; agar zaif bo'lsa, biz energiyani qo'llab-quvvatlash zarur deb hisoblaymiz. Bu energiyani qanday tanlash va muvozanatli bo'lganda qanday boshqarishni tushuntiradi.",
    "backLabel": "Hisoblash Asosi",
    "sections": [
      {
        "title": "Besh Element Yetarli Emas",
        "blocks": [
          {
            "p": "Besh elementning teng taqsimlanganligini o'lchash usullari mavjud. Biroq, aslida zarur bo'lgan narsa **bu sajudagi yetishmayotgan va ortiqcha narsalar**."
          },
          {
            "p": "Teng taqsimlangan saju har doim qulay emas, shuningdek, qiyshaygan saju har doim qiyin emas. Qiyshayish yo'nalishi va uni yengillashtiradigan elementning mavjudligi kesishma nuqtasidir."
          }
        ]
      },
      {
        "title": "Qo'llab-quvvatlovchi Element — Ortig'i Bo'lsa Kamaytirish, Yetishmasa Qo'shish",
        "blocks": [
          {
            "p": "Qo'llab-quvvatlovchi element (用神) — **bu odamga hozirda kerak bo'lgan energiya**. Uni aniqlash uchun bir nechta usullar mavjud (kamaytirish, qo'shish, kasallik va uyg'unlik), lekin eng keng tarqalgan usul **kamaytirish (抑扶)** hisoblanadi. Agar kun ustuni kuchli bo'lsa, kamaytirish energiyasi kerak deb hisoblanadi; agar zaif bo'lsa, qo'shish energiyasi zarur."
          },
          {
            "table": {
              "head": [
                "Hukm",
                "Nima Kerak",
                "Turlar Soni"
              ],
              "rows": [
                [
                  "Kuchli Kun Ustuni (身强)",
                  "Kamaytirish Energiya — Oziq-ovqat va Boylik, Rasmiy Lavozim",
                  "Uch"
                ],
                [
                  "Zaif Kun Ustuni (身弱)",
                  "Qo'shish Energiya — Resurs, Hamkor",
                  "Ikki"
                ],
                [
                  "Muvozanatli (中和)",
                  "Kamaytirish bilan qoplab bo'lmaydi, shuning uchun eng nozik energiya",
                  "Ikki"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Kuch va Zaiflik uchun Mezon",
        "blocks": [
          {
            "p": "Kun ustuni tomoni **Resurs va Hamkor** — meni tug'diradigan energiya va menga o'xshaydigan energiya. Beshdan ikki kishi ishtirok etganligi sababli, to'liq muvozanat {evenAllyRatio} bo'ladi. Kenglik yuqorida va pastda {evenAllyRatio} ga o'rnatiladi."
          },
          {
            "table": {
              "caption": "Umumiy Kuchdagi Hamkorlar Nisbati (Resurs + Hamkor)",
              "head": [
                "Nisbat",
                "Hukm"
              ],
              "rows": [
                [
                  "{strongThreshold} yoki ko'proq",
                  "Kuchli Kun Ustuni"
                ],
                [
                  "{weakThreshold} yoki ko'proq va {strongThreshold} dan kam",
                  "Muvozanatli"
                ],
                [
                  "{weakThreshold} dan kam",
                  "Zaif Kun Ustuni"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Muvozanat 'Kam Aniq Hukm'",
        "blocks": [
          {
            "p": "Muvozanat demak, kamaytirish bilan qoplab bo'lmaydi. Bu vaqtda, ikkita eng nozik energiya shunchaki zarur deb hisoblanadi. Natija ekranida bu 'hozirgi nozik pozitsiya' sifatida qayd etiladi, aniq bayonot emas."
          }
        ]
      },
      {
        "title": "Kuch Sonlar Bilan Belgilanmaydi",
        "blocks": [
          {
            "p": "Besh elementning kuchini hisoblashda, sakkiz belgi ko'rinishi bo'yicha hisobga olinmaydi. Qiymatlar yerli tarmoqlardagi yashirin osmoniy ustunlarni (地藏干) va tug'ilgan oy energiyasining mavsumini (月令) aks ettiradi."
          },
          {
            "p": "Faqat yuzaki belgilarni hisoblash, hatto bir xil 木 belgilar mavsumga qarab mutlaqo boshqacha kuchga ega bo'lishini e'tiborga olmaydi. Bahor 木 va kuz 木, bir xil belgi bo'lsa-da, turli kuchlarga ega."
          }
        ]
      },
      {
        "title": "Qo'llab-quvvatlovchi Elementni Qayerda Ishlatish",
        "blocks": [
          {
            "p": "Aniqlangan qo'llab-quvvatlovchi element ikki joyda ishlatiladi. Biri natija ekranidagi **'hozirda kerak bo'lgan energiya'**, ikkinchisi esa [bugungi taqdir](/guide/today-fortune) — bugungi energiya qo'llab-quvvatlovchi elementga mos keladimi, bu o'sha kunda ballni eng ko'p harakatlantiradigan elementdir."
          }
        ]
      },
      {
        "title": "Bu Oddiy Hukm",
        "blocks": [
          {
            "p": "Amaliy taqdir tahlili shakl va mavsumiy shartlarni (mavsumning issiqligi va namligi) hisobga olib, qo'llab-quvvatlovchi elementni aniqlaydi va xulosalar usulga qarab farq qilishi mumkin. Saju-Link faqat **kuch qiymatlari bilan o'lchanadigan kamaytirishni** ishlatadi. Bu qoidalarni faqat o'zgartirish mumkin bo'lgan narsalarni ishlatish printsipiga asoslangan, shuning uchun bir xil kirish har doim bir xil javob beradi."
          },
          {
            "p": "Buning o'rniga, natija ekranida hozirgi kerak bo'lgan energiya bilan birga kuchli va zaif kun ustunini **o'qish materiallari** sifatida taqdim etadi. Bu ball asosini yashirishdan qochish uchun."
          }
        ]
      }
    ]
  },
  "guide/ten-gods": {
    "eyebrow": "O'n Xudo",
    "title": "O'n Xudo — Mening Sajudagi O'n Pozitsiya",
    "summary": "Kun ustuniga asoslanib, qolgan belgilar o'n nomga bo'linadi. Ular bir xil boylik elementi bo'lsa ham, oddiy boylik va qo'shimcha boylikni ajratish sabablari muhokama qilinadi.",
    "backLabel": "Hisoblash Asosi",
    "sections": [
      {
        "title": "Kun Ustuni O'zini Anglatadi",
        "blocks": [
          {
            "p": "Sajudagi sakkiz belgining ichida **kun ustuni** (tug'ilish kunining osmoniy ustuni) o'zini anglatadi. Qolgan yetti belgi esa o'sha kun ustuni mavjud bo'lgan muhit sifatida o'qiladi."
          },
          {
            "p": "**O'n Xudo** (十神) — kun ustuni boshqa belgilarni qanday qabul qilishi bo'yicha o'n bo'linma. Meni boqadigan energiya Resurs, menga o'xshaydigan energiya Hamkor, meni tug'diradigan energiya Oziq-ovqat va Boylik, meni bostiradigan energiya Rasmiy Lavozim, va men bostiradigan energiya Boylik — bu besh tarmoq yanada yin va yang ga bo'linadi, o'nni tashkil etadi."
          }
        ]
      },
      {
        "title": "Qolgan Yetti Belgining Mening Uchun Ma'nosi",
        "blocks": [
          {
            "p": "Kun ustuni aniqlangandan so'ng, asl diagrammadagi qolgan belgilar har biri nom oladi. Meni tug'diradigan energiya, menga o'xshaydigan energiya, meni tug'diradigan energiya, meni bostiradigan energiya, va men bostiradigan energiya — bu besh tarmoq yanada **o'n** ga bo'linadi, yin va yang orqali. Bu O'n Xudo."
          },
          {
            "p": "Shunday qilib, O'n Xudo boshqalar bilan munosabatlar emas, balki **o'zim ichidagi pozitsiyalar** ga taalluqlidir. Qaysi pozitsiyalar qalin yoki nozik bo'lsa, bu mening tendensiyalarim va hayotimning yo'lini ko'rsatadi."
          }
        ]
      },
      {
        "title": "O'n Xudo sifatida ko'rish sababi Uch Element o'rniga",
        "blocks": [
          {
            "p": "Kun shartini faqat uch jihatdan ko'rish usuli mavjud, bu esa beshta element (o'stiruvchi, bir xil va qarama-qarshi) orqali amalga oshiriladi. Bu oddiy, lekin **yin va yang yo'qoladi.** 甲 (yang daraxti) va 乙 (yin daraxti) 甲 bilan bir xil bo'ladi, bu 'bir xil' ni ifodalaydi, va qarama-qarshi munosabat bitta ballga birlashtiriladi, yo'nalish yoki yin va yangsiz."
          },
          {
            "p": "Turmush o'rtog'i pozitsiyasi Ten Gods bo'yicha yin va yang nuqtai nazaridan baholanishi kerak. Agar beshta element orqali ko'rilgan narsalar Ten Gods orqali ko'rilgan narsalar bilan bir joyda aralashtirilsa, bir xil ikkita belgi uchun ikkita standart bo'ladi. Shuning uchun, biz uni Ten Gods ostida birlashtiramiz."
          }
        ]
      },
      {
        "title": "Turmush o'rtog'i pozitsiyasi 정재 va 정관",
        "blocks": [
          {
            "p": "An'anaviy taqdirni bashorat qilish turmush o'rtog'i pozitsiyasini jinsga qarab boshqacha ko'radi. Erkaklar uchun bu **정재 (正財)**, ayollar uchun esa **정관 (正官)**. Ular bir xil boylik elementi bo'lsa ham, faqat yin va yangda mos kelmaydigan 정재 turmush o'rtog'i pozitsiyasi sifatida hisoblanadi, o'z navbatida 편재 esa turmush o'rtog'i sifatida emas, balki faoliyat va boylik nuqtai nazaridan o'qiladi."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Agar jinsni ko'rsatmasangiz, bu pozitsiya chiqarib tashlanadi",
        "blocks": [
          {
            "p": "Bu 정재 yoki 정관 qaysi tomonni turmush o'rtog'i pozitsiyasi sifatida hisoblashni aniqlash mumkin emasligi sababli. Yo'qolgan qiymatni to'ldirish uchun taxmin qilish o'rniga, biz qolgan narsalarni o'sha birisiz o'qiymiz."
          }
        ]
      }
    ]
  },
  "guide/today-fortune": {
    "eyebrow": "Bugungi taqdir",
    "title": "Bugungi taqdir qanday chiqadi?",
    "summary": "Bugungi kunning kun sharti asl diagrammaga solishtiriladi. O'stiruvchi elementlarning o'n ikki munosabati va erdagi shoxlarning yetti munosabati, shuningdek, yigirma element va ularning mos qo'shilish va ayirishlari to'liq ochiladi.",
    "backLabel": "Hisoblash asoslari",
    "sections": [
      {
        "title": "Bugun, biz uni sakkiz belgi kabi o'rnatamiz",
        "blocks": [
          {
            "p": "Har bir kunning o'ziga xos **일진 (日辰)** bor. Asl diagrammaning kun aylanishini o'rnatish usulidan foydalanib, bugun ham bir heavenly stem va bir earthly branch bilan bog'langan. Bugungi taqdir bu ikki belgini asl diagrammaga solishtirish haqida."
          },
          {
            "p": "Asosiy ball **{baseScore} ball**. Quyidagi narsalar qo'shiladi va ayiriladi, va nihoyat, bu {clampLow} ball va {clampHigh} ball o'rtasida cheklangan — 0 ball yoki 100 ball haqida gapirmaymiz."
          }
        ]
      },
      {
        "title": "① Bugungi energiya menga kerakmi?",
        "blocks": [
          {
            "p": "Bu eng muhim pozitsiya. Biz bugungi energiya 'hozir kerak bo'lgan energiyaga' mos kelishini tekshiramiz, bu esa [억부용신](/guide/yongsin) tomonidan aniqlanadi."
          },
          {
            "table": {
              "head": [
                "Bugungi energiya",
                "Qo'shish/Ayirish"
              ],
              "rows": [
                [
                  "Hozir kerak bo'lgan energiya",
                  "{todayIsYongsin}"
                ],
                [
                  "Bu kerakli energiyani hosil qiladi",
                  "{todayGeneratesYongsin}"
                ],
                [
                  "Bu kerakli energiyani bostiradi",
                  "{todayControlsYongsin}"
                ],
                [
                  "Bu allaqachon to'lib ketgan tomonga ko'proq bosim o'tkazadi",
                  "{todayIsGisin}"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "기신 ni '용신 dan tashqari hamma narsa' deb hisoblamang",
        "blocks": [
          {
            "p": "Agar siz shunday qilsangiz, nafaqat 용신 ni hosil qiluvchi energiya, balki 용신 ni bostiruvchi energiya ham yomon bo'ladi, va yuqoridagi jadvaldagi oxirgi ikki qator farqlanmaydi. Faqat **qarama-qarshi tomonga ko'proq bosim o'tkazadigan** energiya 억부 ma'nosiga ko'ra 기신 sifatida ko'riladi."
          }
        ]
      },
      {
        "title": "② Bugungi heavenly stem va kun shartining o'rtasidagi munosabat",
        "blocks": [
          {
            "p": "O'stiruvchi va qarama-qarshi munosabatlar beshta elementlar o'rtasida kun sharti va bugungi heavenly stem o'rtasida to'g'ridan-to'g'ri qo'llaniladi."
          },
          {
            "table": {
              "head": [
                "Munosabat",
                "Qo'shish/Ayirish"
              ],
              "rows": [
                [
                  "Bugun meni hosil qiladi",
                  "{generatesSelf}"
                ],
                [
                  "Bugun va men bir xil energiya",
                  "{sameElement}"
                ],
                [
                  "Men bugunni bostiraman",
                  "{selfControls}"
                ],
                [
                  "Men bugun bilan oqib o'taman",
                  "{selfGenerates}"
                ],
                [
                  "Bugun meni bostiradi",
                  "{controlsSelf}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "③ Bugungi earthly branch asl diagrammaning earthly branchlari bilan uchrashadi",
        "blocks": [
          {
            "p": "Bugungi earthly branch asl diagrammaning earthly branchlari bilan solishtiriladi. Munosabatlar jadvali [십이지 관계](/guide/branches) da mavjud."
          },
          {
            "table": {
              "head": [
                "Munosabat",
                "Qo'shish/Ayirish"
              ],
              "rows": [
                [
                  "to'liq triad (三合)",
                  "{branchSamhap}"
                ],
                [
                  "olti-harmoniya juftligi (六合)",
                  "{branchYukhap}"
                ],
                [
                  "yarim triad (半合)",
                  "{branchBanhap}"
                ],
                [
                  "qulay, davomli nizolar (怨嗔)",
                  "{branchWonjin}"
                ],
                [
                  "to'qnashuv (沖)",
                  "{branchChung}"
                ]
              ]
            }
          },
          {
            "p": "Bir nechta ustunlar bo'lsa, bir nechta munosabatlar paydo bo'ladi. Barchasi qo'shiladi, lekin bu butun element **±{branchMaxAbs} ballar** bilan cheklangan — bu birgina yerli shoxli munosabatning butun kunni belgilashini oldini olish uchun."
          }
        ]
      },
      {
        "title": "④ Kuchga asoslangan tuzatish",
        "blocks": [
          {
            "p": "Bir xil energiya bilan, kuchli kun ustuni va zaif kun ustuni uchun ma'no farq qiladi. Shuning uchun, biz oxirgi tuzatishni amalga oshiramiz."
          },
          {
            "table": {
              "head": [
                "Holat",
                "Tuzatish"
              ],
              "rows": [
                [
                  "Zaif kun ustuni, lekin bugun ularni qo'llab-quvvatlaydi",
                  "{weakTodayHelps}"
                ],
                [
                  "Kuchli kun ustuni, lekin bugun yukni mos ravishda kamaytiradi",
                  "{strongTodayDrains}"
                ],
                [
                  "Kuchli kun ustuni, lekin bugun qo'llab-quvvatlashni kuchaytiradi",
                  "{strongTodayHelps}"
                ],
                [
                  "Zaif kun ustuni, lekin bugun yukni oshiradi",
                  "{weakTodayBurdens}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Ballar daraja va sohalar bo'yicha",
        "blocks": [
          {
            "p": "Umumiy ball beshta darajaga bo'linadi."
          },
          {
            "table": {
              "head": [
                "Ball",
                "Daraja"
              ],
              "rows": [
                [
                  "{gradeDaegilMin} ball yoki ko'proq",
                  "Katta Baxt (大吉)"
                ],
                [
                  "{gradeGilMin} ball yoki ko'proq",
                  "Baxt (吉)"
                ],
                [
                  "{gradePyeongMin} ball yoki ko'proq",
                  "O'rtacha (平)"
                ],
                [
                  "{gradeJuuiMin} ball yoki ko'proq",
                  "E'tibor (注意)"
                ],
                [
                  "{gradeJosimMin} ball yoki ko'proq",
                  "E'tibor bering (操心)"
                ]
              ]
            }
          },
          {
            "p": "Boylik, sevgi, kasb va salomatlik sohalarining to'rt sohalari jami {overallShare} ballni meros qilib oladi, qolganlari esa O'n Xudo va ushbu sohalarga tegishli yerli shoxli munosabatlar bo'yicha taqsimlanadi. Shuning uchun, umumiy ball bir xil bo'lsa ham, sohalar bo'yicha raqamlar shaxsdan shaxsga farq qiladi."
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Yuqoridagi raqamlar barchasi dvigatel sozlamalaridan o'qiladi. Agar qoidalar o'zgartirilsa, ushbu hujjat ham o'zgaradi va har qanday ball o'zgarishlari avval [E'lon](/notice)da e'lon qilinadi."
          }
        ]
      }
    ]
  },
  "guide/branches": {
    "eyebrow": "Munosabatlar Jadvali",
    "title": "Yerli Shoxli Munosabatlar — Kombinatsiya, To'qnashuv va Nizolar",
    "summary": "Bu bugungi kun ustunining tug'ilish jadvali bilan qanday munosabatda bo'lishini ko'rsatadigan munosabatlar jadvali. Har bir kombinatsiya, to'qnashuv va nizoning nima ekanligini va qancha ballga ega ekanligini ochib beradi.",
    "backLabel": "Hisoblash Asosi",
    "sections": [
      {
        "title": "Yerli Shoxlar O'n Ikki Belgidir",
        "blocks": [
          {
            "p": "O'n ikki yerli shox (十二支) — 子 丑 寅 卯 辰 巳 午 未 申 酉 戌 亥. Ommaviy ravishda tanilgan zodiak belgilar — Sichqon, Sigir, Yo'lbars, Qo'y, Ajdaho, Ilon, Ot, Qo'y, Maymun, Xoncha, It, Cho'chqa — har biri ushbu o'n ikki belgidan biriga bog'langan."
          },
          {
            "figure": "branch-wheel",
            "caption": "O'n ikki belgi doira ichida joylashtirilganda, munosabatlar aniq ko'rinadi. To'qnashuv (沖) har doim bir-biriga qarshi turadi, o'n olti-hamkorlik va nizolar esa yaqin juftliklardir. Ushbu chiziqlar matnda yozilmagan, balki hisoblash qoidalaridan to'g'ridan-to'g'ri olingan.",
            "labels": {
              "alt": "O'n ikki yerli shox doira ichida joylashtirilgan va o'n olti-hamkorlik, to'qnashuv va nizolarni bog'laydigan chiziqlar ko'rsatilgan diagramma.",
              "yukhap": "O'n Olti-Hamkorlik",
              "chung": "To'qnashuv",
              "wonjin": "Nizolar",
              "rat": "Sichqon",
              "ox": "Sigir",
              "tiger": "Yo'lbars",
              "rabbit": "Qo'y",
              "dragon": "Ajdaho",
              "snake": "ilonga",
              "horse": "ot",
              "goat": "qoʻy",
              "monkey": "maymun",
              "rooster": "tovuq",
              "dog": "it",
              "pig": "choʻchqa"
            }
          },
          {
            "p": "Saju da, toʻrt ustun har biri bitta yerli shoxga ega. **Bugungi o'qish** **kunning shoxini** asl jadvalning toʻrt shoxiga moslashtirish orqali aniqlanadi, quyidagi munosabatlar jadvali yordamida."
          }
        ]
      },
      {
        "title": "Umumiy Munosabatlar Jadvali",
        "blocks": [
          {
            "table": {
              "caption": "Eng yuqori ball bo'yicha tartiblangan. Bu Saju-Link tomonidan ishlatiladigan qiymatlar.",
              "head": [
                "Munosabat",
                "Mos Juft",
                "Ma'nosi",
                "Ball"
              ],
              "rows": [
                [
                  "Triad (三合)",
                  "申子辰 · 巳酉丑 · 寅午戌 · 亥卯未",
                  "Uchta belgi birlashganda, to'liq elementar shakl (局) hosil qiladi. Bu eng kuchli kombinatsiya hisoblanadi.",
                  "{scoreSamhap}"
                ],
                [
                  "Oltita Muvofiqlik (六合)",
                  "子丑 · 寅亥 · 卯戌 · 辰酉 · 巳申 · 午未",
                  "Bir-birini tortadigan juftlar. Bu faqat ikki belgidan iborat bo'lgan eng keng tarqalgan kombinatsiya.",
                  "{scoreYukhap}"
                ],
                [
                  "Yarim Triad (半合)",
                  "Triad dan biror bir shoh belgisini (子·酉·午·卯) o'z ichiga olgan ikki belgi",
                  "Markaziy belgi bo'lgan yarim kombinatsiya. Bu faqat ikki belgi bilan to'liq elementar shakl hosil qilmaydi, shuning uchun triad dan pastroq.",
                  "{scoreBanhap}"
                ],
                [
                  "Bir xil Shox",
                  "子子 · 丑丑 …",
                  "Bir xil belgilar. Bu ularning bir-biriga o'xshashligini anglatadi, lekin tortishish emas, shuning uchun ular o'rtaga joylashtiriladi.",
                  "{scoreSame}"
                ],
                [
                  "Munosabat Yo'q",
                  "Yuqorida yoki pastda joylashmagan juftlar",
                  "Maxsus munosabatga ega bo'lmagan kombinatsiyalar. Bu ma'lumot nuqtasi sifatida xizmat qiladi.",
                  "{scoreNeutral}"
                ],
                [
                  "Tinch Nizo (怨嗔)",
                  "子未 · 丑午 · 寅酉 · 卯申 · 辰亥 · 巳戌",
                  "Nafratlariga qaramay ajralib bo'lmaydigan juftlar. Ular yuzaki tinch ko'rinadi, lekin uzoq davom etishi hisoblanadi.",
                  "{scoreWonjin}"
                ],
                [
                  "To'qnashuv (沖)",
                  "子午 · 丑未 · 寅申 · 卯酉 · 辰戌 · 巳亥",
                  "To'qnashadigan juftlar. Bu bir-biriga qarshi turgan oltita juftdir.",
                  "{scoreChung}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Triadlar va Yarim Triadlar",
        "blocks": [
          {
            "p": "Triad uchun uchta belgi mavjud bo'lishi kerak. Asl jadvalda to'rt yerli shox bor, shuning uchun kunning shoxi ular bilan birlashishi mumkin, bu esa triadni hosil qiladi — o'sha paytda, {scoreSamhap} ballini oladi. Agar faqat ikki belgi ishtirok etsa, bu yarim triad."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Yarim Triadlar Tan olish uchun Shahzoda Belgilarini Talab qiladi",
        "blocks": [
          {
            "p": "Agar ikkita belgi bir xil triad guruhiga mansub bo'lsa, bu yarim triad sifatida hisoblanadigan usul ham mavjud. Bu 申辰 kabi kombinatsiyalarni yuqori ball olishiga imkon beradi, bu esa kombinatsiya deb atash qiyin. Shuning uchun, bu xizmat faqat shoh belgilarni (子·酉·午·卯) o'z ichiga olgan yarim triadni tan oladi va 申辰·巳丑·寅戌·亥未 kabi kombinatsiyalarni haqiqiy deb hisoblamaydi."
          }
        ]
      },
      {
        "title": "Tinch Nizoni Ajratish Sababi",
        "blocks": [
          {
            "p": "Tinch nizoning olti juftlari to'qnashuvlar kabi tez-tez ko'rinadi. Agar biz to'qnashuvlar va kombinatsiyalarni hisoblasak, bu olti juft {scoreNeutral} balli munosabat yo'q balli ostida qoladi, shuning uchun ular alohida joylashtiriladi."
          },
          {
            "p": "Agar to'qnashuvlar bir-biriga to'qnashadigan juftlar bo'lsa va aniq ko'rsatilsa, tinch nizo noaniq mos kelmaydi. Shuning uchun, u {scoreWonjin} ballida joylashtiriladi, bu to'qnashuvlardan ({scoreChung}) yuqori, lekin albatta munosabat yo'q ({scoreNeutral}) dan past."
          }
        ]
      },
      {
        "title": "To'qnashuvlar uchun ham ballar beriladi",
        "blocks": [
          {
            "p": "Eng past to'qnash balli {scoreChung}. 0 ga yaqin qiymat berish qasddan emas. An'anaviy 명리 (myeongri) da to'qnashuv 'oxir' emas, balki 'to'qnashuv' hisoblanadi va pastki qiymat berish xizmatning munosabat haqida aniq bayonot berishini anglatadi."
          },
          {
            "p": "{scoreChung} dan minimal va {scoreSamhap} dan maksimal bo'lib, farq aniq ko'rinadi, lekin qat'iy emas."
          }
        ]
      }
    ]
  },
  "guide/zodiac": {
    "eyebrow": "Zodiak Belgisi",
    "title": "Zodiak Belgisi Saju da qayerda?",
    "summary": "Zodiak belgisi siz tug'ilgan yilning yerli shoxidir. Bu saju yili kalendar yilidan olinganligini tushuntiradi va erta yanvar yoki fevralda tug'ilganlar o'tgan yilning zodiak belgisiga ega bo'lishining sababini tushuntiradi.",
    "backLabel": "Hisoblash Asosi",
    "sections": [
      {
        "title": "Zodiak belgisi siz tug'ilgan yilning yerli shoxidir.",
        "blocks": [
          {
            "p": "Saju to'rt ustundan iborat: yil, oy, kun va soat, har bir ustun bir osmon shoxini va bir yer shoxini o'z ichiga oladi. Ular orasida, **yilning yerli shoxi**, yoki 연지 (yil shoxi), biz zodiak belgisi deb ataydigan hayvon."
          },
          {
            "table": {
              "caption": "O'n Ikki Yerli Shox va Zodiak Belgilari",
              "head": [
                "Yerli Shoxi",
                "Zodiak Belgisi"
              ],
              "rows": [
                [
                  "子",
                  "Sichqon"
                ],
                [
                  "丑",
                  "Sigir"
                ],
                [
                  "寅",
                  "Jang'ir"
                ],
                [
                  "卯",
                  "Quyon"
                ],
                [
                  "辰",
                  "Ajdar"
                ],
                [
                  "巳",
                  "Ilon"
                ],
                [
                  "午",
                  "Ot"
                ],
                [
                  "未",
                  "Qo'y"
                ],
                [
                  "申",
                  "Maymun"
                ],
                [
                  "酉",
                  "Tovuq"
                ],
                [
                  "戌",
                  "It"
                ],
                [
                  "亥",
                  "Cho'chqa"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Biz saju yilidan foydalanamiz, kalendar yilidan emas.",
        "blocks": [
          {
            "p": "Zodiak belgisi o'zgaradigan nuqta na quyosh kalendari 1-yanvar, na O'rta Yangi Yil. Saju da yilni o'zgartirish standarti **Ipchun** dir. Shuning uchun, erta yanvar yoki fevralda tug'ilganlar kalendar ko'rsatganidan farqli zodiak belgisiga ega bo'lishi mumkin."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Biz zodiak belgisini to'g'ridan-to'g'ri so'ramasligimizning sababi.",
        "blocks": [
          {
            "p": "Shuning uchun, biz faqat tug'ilgan sanani so'raymiz, zodiak belgisini kiritish ekranida tanlamaymiz. Saju dvigateli yilni hisoblaganda, avtomatik ravishda Ipchun chegarasi bilan mos keladi. Agar to'g'ridan-to'g'ri tanlansa, erta fevralda tug'ilgan kishi o'zining haqiqiy belgisiga mos kelmaydigan zodiak belgisini tanlaydi."
          }
        ]
      },
      {
        "title": "Zodiak belgisi saju da bir belgi.",
        "blocks": [
          {
            "p": "Sakkiz belgi orasida zodiak belgisiga mos keladigan **bir 연지 (yil shoxi)** mavjud. Boshqa yetti belgi — ayniqsa, o'zini anglatadigan kun shoxi — zodiak belgisi bilan aloqasi yo'q."
          },
          {
            "p": "Bir xil yilda tug'ilgan odamlar barchasi bir xil zodiak belgisiga ega. Shuning uchun, zodiak belgisidan bilish mumkin bo'lgan narsa faqat sakkiz belgidan biri darajasida. Bu xizmatning zodiak belgisini alohida yoki muhim deb hisoblamasligining sababi — 연지 (yil shoxi) kuchi va bugungi 일진 (kunlik taqdir) hukmi boshqa yerli shoxlar kabi hisoblanadi."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Yana, zodiak belgisini ko'rsatishimizning sababi.",
        "blocks": [
          {
            "p": "Bu terminologiya haqida bilmasangiz ham, ma'nosi tushuniladigan yagona pozitsiya. Agar zodiak belgisi asl diagramma ekranida 연지 (yil shoxi) bilan birga qayd etilsa, bu boshqa yetti belgini o'qish uchun bir iz bo'ladi."
          }
        ]
      },
      {
        "title": "Agar tug'ilgan vaqtni bilmasangiz ham, yil shoxi o'zgarishsiz qoladi.",
        "blocks": [
          {
            "p": "Agar vaqtni kiritmasangiz, soat ustuni o'tkazib yuboriladi va 오행 (besh element) kuchi o'zgaradi. Biroq, **yil shoxi o'zgarishsiz qoladi** — bu faqat siz tug'ilgan yil bilan belgilanadi."
          },
          {
            "p": "Shuning uchun, yil shoxidan kelib chiqadigan hikoya vaqtni bilmaydiganlar uchun ham o'zgarishsiz qoladi. Aksincha, bu zodiak belgisiga asoslangan holda aytilishi mumkin bo'lgan narsa cheklangan, vaqt kiritilgan yoki kiritilmaganidan qat'i nazar."
          }
        ]
      }
    ]
  },
  "guide/true-solar-time": {
    "eyebrow": "Vaqt",
    "title": "Biz tug'ilgan vaqtni haqiqiy quyosh vaqtiga aylantiramiz.",
    "summary": "Standart vaqt va quyoshning haqiqiy pozitsiyasi farq qiladi. Bu tug'ilgan joyning uzunligiga qarab vaqtni moslashtirish zarurligini tushuntiradi, shunda soat ustuni to'g'ri bo'ladi.",
    "backLabel": "Hisoblash Asosi",
    "sections": [
      {
        "title": "Soat va quyosh vaqti farq qiladi",
        "blocks": [
          {
            "p": "Saju ning soat ustuni (時柱) quyoshning pozitsiyasiga asoslanadi. Biroq, biz ko'rayotgan soat butun mamlakat uchun bitta standart vaqtni ishlatadi, bu esa quyoshning haqiqiy pozitsiyasi bilan mos kelmaydi."
          },
          {
            "p": "Koreyaning standart vaqti 135° sharqiy uzunlikka asoslangan. Seulning uzunligi taxminan 127° bo'lib, bu taxminan 8° g'arbda, bu esa quyoshning zenitiga kechroq yetishiga olib keladi — soat bo'yicha tushlik payti, Seulda quyosh hali ham zenitidan oldinda. Bu farq taxminan **32 daqiqa**."
          }
        ]
      },
      {
        "kind": "note",
        "title": "32 daqiqa soat ustunini bir slotga o'zgartiradi",
        "blocks": [
          {
            "p": "Saju da vaqt ikki soatlik birliklarga bo'linadi. Chegaraga yaqin tug'ilganlar 32 daqiqalik farq bilan soat ustunlari to'liq o'zgaradi — aynan shu chegarada joylashganlar uchun tuzatishlar zarur."
          }
        ]
      },
      {
        "title": "Nima uchun tug'ilgan joyingizni so'rashadi",
        "blocks": [
          {
            "p": "Agar uzunlik farq qilsa, tuzatish miqdori ham farq qiladi. Agar Seulga asoslangan tuzatishni chet elda tug'ilgan kishiga qo'llasangiz, soat ustuni sezilarli darajada mos kelmaydi. Shuning uchun, kiritish ekranida tug'ilgan joyingizni tanlashingiz so'raladi va hisoblashlar o'sha shaharning uzunligi va standart vaqtiga asoslanadi. Hozirda ro'yxatda {cityCount} joy mavjud."
          },
          {
            "p": "Bir xil mamlakat ichida ham, sezilarli darajada farq qiluvchi uzunliklarga ega joylar (masalan, Amerika Qo'shma Shtatlari, Rossiya, Indoneziya va boshqalar) shaharlar bo'lib bo'lingan. **15° uzunlik bir soat ustuniga teng**."
          },
          {
            "p": "Agar siz tanlamasangiz, hisoblashlar Seulga asoslangan holda amalga oshiriladi. Ko'p tug'ilishlar ichki mamlakatda bo'ladi, shuning uchun bu xatoga kamroq moyil, lekin agar siz chet elda tug'ilgan bo'lsangiz, iltimos, tanlashni unutmang."
          }
        ]
      },
      {
        "title": "Standart vaqt o'tmishda bir necha marta o'zgargan",
        "blocks": [
          {
            "p": "Tuzatishni oddiy qilib \"uzunlik farqi ÷ 15° × 60 daqiqa\" deb hisoblash mumkin emas. Standart vaqt o'z vaqtida turlicha bo'lgan."
          },
          {
            "table": {
              "caption": "Koreyaning standart vaqtidagi o'zgarishlar — bu davrda tug'ilganlar oddiy hisoblashlar bilan mos kelmaydi",
              "head": [
                "Davr",
                "Nima farq qildi?"
              ],
              "rows": [
                [
                  "1912 yildan oldin",
                  "Standart vaqt yo'q edi (mahalliy o'rtacha vaqt)"
                ],
                [
                  "1954 – 1961",
                  "Standart vaqt UTC+8:30 edi"
                ],
                [
                  "1948 – 51 · 1955 – 60 · 1987 – 88",
                  "Yozgi vaqtni saqlash amalga oshirildi"
                ]
              ]
            }
          },
          {
            "p": "Saju-Link standart meridianni doimiy qiymat sifatida belgilamaydi, balki tug'ilgan joyning **IANA vaqt zonasi** ma'lumotlariga asoslanib o'sha paytdagi haqiqiy standart vaqtni hisoblaydi. Yozgi vaqt va o'tmish standart vaqtlar avtomatik ravishda aks ettiriladi."
          }
        ]
      },
      {
        "title": "Yarim tunda tug'ilish sanani ham hisobga oladi",
        "blocks": [
          {
            "p": "Tuzatish -32 daqiqa bo'lgani uchun, soat bo'yicha 00:00 dan 00:32 gacha tug'ilganlar haqiqiy quyosh vaqtida **oldingi kunning 11 PM** da bo'ladi. Agar faqat vaqt orqaga o'zgartirilsa va sana o'zgarmasa, u kun ustunini (日柱) \"oldingi kunning 11 PM\" deb yozadi."
          },
          {
            "p": "Saju-Link bu holatda sanani ham tuzatadi. Kun ustunidan yuqoridagi belgi kun ustuni (日干) ga tegishli bo'lib, o'zimni ko'rsatadi, shuning uchun agar bu mos kelmasa, talqinning deyarli barcha elementlari mos kelmaydi."
          }
        ]
      },
      {
        "title": "Vaqtni bilishingiz shart emas",
        "blocks": [
          {
            "p": "Tug'ilish vaqti ixtiyoriydir. Agar siz bilmasangiz, hisoblashlar soat ustunisiz amalga oshiriladi va bu haqda natijalar ekranida ko'rsatiladi. Bu esa sakkizta belgidan ikkitasining yo'qligini anglatadi, bu esa besh elementlarning kuchi va zaifligini baholashga ta'sir qiladi, shuning uchun agar bilsangiz, uni kiritish aniqroq bo'ladi."
          },
          {
            "p": "Yil ustuni (띠) har doim bir xil bo'ladi — [chunki biz faqat yil ustuniga qaraymiz](/guide/zodiac)."
          }
        ]
      }
    ]
  },
  "guide/no-storage": {
    "eyebrow": "Shaxsiy Ma'lumotlar",
    "title": "Kiritilgan ma'lumotlarni saqlamaydigan usul",
    "summary": "Tug'ilgan sana hech qayerda yozilmasligi texnik jihatdan nimani anglatishini va natija havolasida nima borligini aniqlaydi.",
    "backLabel": "Hisoblash Asosi",
    "sections": [
      {
        "title": "A'zolik ro'yxatdan o'tkazish yo'q",
        "blocks": [
          {
            "p": "Saju-Link hisoblar yaratmaydi. U ism, elektron pochta yoki telefon raqamlarini to'playdi. Yegulik ma'lumotlar faqat tug'ilgan sana va (ixtiyoriy) tug'ilish vaqti, tug'ilgan joy va jinsni o'z ichiga oladi va bu ma'lumotlar hisoblash tugagach qolmaydi."
          },
          {
            "p": "Natijalar ekranida ko'rsatish uchun sarlavha kiritish maydoni mavjud, lekin bu **faqat ko'rsatish maqsadlari uchun** va hisoblashlarda ishlatilmaydi. Siz haqiqiy ismingizni kiritishingiz shart emas."
          }
        ]
      },
      {
        "title": "Natija havolasida nima bor?",
        "blocks": [
          {
            "p": "Hisoblash tugagach, manzil quyidagicha ko'rinadi."
          },
          {
            "p": "**/ko/reading/result#eyJhIjp7InkiOjE5OTAsLi4u**"
          },
          {
            "p": "**#** dan keyin keladiganlar kiritilgan qiymatlar. Bu qism **fragment** deb ataladi, bu esa **brauzer serverga yubormaydigan bo'lim**. Bu standart veb xulq-atvor va biz yaratgan qoidalar emas — bu aslida hujjat ichidagi pozitsiyani ko'rsatish uchun mo'ljallangan, shuning uchun serverga ko'rish zarurati yo'q."
          },
          {
            "p": "Boshqacha qilib aytganda, natija havolasini ochganingizda, brauzer o'sha qiymatni hisoblashni so'rash uchun o'qiydi va bizning serverimiz hisoblash uchun foydalanish uchun qiymatlarni oladi, javobni qaytaradi va keyin uni unutadi."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Havolani boshqalarga yuborishda ehtiyot bo'ling",
        "blocks": [
          {
            "p": "Serverda saqlanmasligi havolaning xavfsizligini anglatmaydi. Natija havolasi ikki shaxsning tug'ilgan sanalarini o'z ichiga oladi, shuning uchun o'sha havolani olgan shaxs bir xil natijani ko'rishi mumkin."
          }
        ]
      },
      {
        "title": "Nima uchun hisoblash serverda amalga oshiriladi, lekin saqlanmaydi?",
        "blocks": [
          {
            "p": "Hisoblash o'zi serverda amalga oshiriladi. Saju ni yaratish uchun lunisolar almanax jadvali kerak, va bu jadval brauzerga yuborish uchun juda katta. Biroq, **so'rovni qayta ishlagandan so'ng, biz bu qiymatni hech qayerda ishlatmaymiz.** Uni ma'lumotlar bazasiga kiritish uchun hech qanday kod yo'q."
          },
          {
            "p": "Ishlash uchun zarur bo'lgan minimal yozuvlar saqlanadi — bir xil shaxsning qisqa vaqt ichida juda ko'p so'rov yuborishini oldini olish uchun hisoblagich. Bu tug'ilgan sana kiritilmaydi va kirish IP saqlanmaydi. Faqat bir qiymat tug'ilgan sana bilan hash qilingan holda hisoblanadi va bu qiymat kun o'zgarganda o'zgaradi."
          }
        ]
      },
      {
        "title": "Ma'lumotlar saqlanmaganligi sababli amalga oshirilmaydigan narsalar",
        "blocks": [
          {
            "p": "Haqiqatdan ham, ma'lumotlarni saqlamaslik sababli berilgan narsalar bor."
          },
          {
            "ul": [
              "**O'tgan natijalarni qaytarib ololmaysiz.** Ularni yana ko'rish uchun havolaga ega bo'lishingiz kerak.",
              "**Bir xil qiymatlar qayta hisoblanadi.** Kesh yo'q. Biroq, barcha qoidalar deterministik bo'lgani uchun, [bir xil kiritish har doim bir xil qiymatni beradi](/guide/natal-chart).",
              "**Yangilash reklama eshigini qaytaradi.** Bu ko'rish tarixini qoldirish uchun joy yo'qligi sababli."
            ]
          }
        ]
      },
      {
        "title": "Agar siz xarid qilsangiz",
        "blocks": [
          {
            "p": "Hisobot xarid qilganda, tranzaksiya yozuvi saqlanadi. To'lov qonuniy saqlash muddatlariga bog'liq va buyurtma tarixi bo'lmasa, qaytarish amalga oshirilmaydi. Biroq, hozirda **saju hisoblash uchun ishlatiladigan tug'ilgan sana buyurtmaga qo'shilmaydi** — to'lov tasdiqlangandan so'ng PDF yaratishda yana so'raladi."
          },
          {
            "p": "Qo'shimcha ma'lumotlar uchun iltimos, [Maxfiylik siyosatimiz](/privacy)ga murojaat qiling."
          }
        ]
      }
    ]
  },
  "guide/reports": {
    "eyebrow": "To'langan mahsulotlar",
    "title": "To'langan hisobotda nimalar mavjud",
    "summary": "Bu PDFga nimalar qo'shilganini aniqlaydi, ekran o'zgarmasdan. Qiymatlar va mazmunlar haqiqiy mahsulot sozlamalaridan olinadi.",
    "backLabel": "Hisoblash asoslari",
    "sections": [
      {
        "title": "Ekranni o'zgartirmasdan, faqat PDFga qo'shildi",
        "blocks": [
          {
            "p": "Saju hisoblash va natijalarni so'rash **bepul**. Siz ekranda, asl diagramma, besh element, bugungi omad va ularning asoslari, hech narsa chiqarib tashlanmasdan, to'langan hisobotni yaratishda ko'rishingiz mumkin."
          },
          {
            "p": "Hisobotning roli **ekranda mavjud bo'lmagan qatlamlarni qo'shishdir**. Ushbu qatlamlar ixtiro qilinmagan; ular ball berish jarayonida allaqachon hisoblangan qiymatlardir, lekin ekranda ishlatilmagan."
          }
        ]
      },
      {
        "title": "Umr bo'yi saju va bu yilgi omad hisobot PDF — {priceDomestic}",
        "slot": "reportContents",
        "blocks": [
          {
            "p": "Mahalliy to'lov {priceDomestic} (QQSni o'z ichiga oladi), xalqaro to'lov {priceGlobal}. Bu {pageCount} A4 sahifalaridan iborat."
          }
        ]
      },
      {
        "blocks": [
          {
            "p": "Mundarija to'g'ridan-to'g'ri mahsulot tavsifidan o'qiladi. **Sahifalar soni asl hujjat bilan bir xil** — bu mahsulot ma'lumotlari e'lonida ko'rsatilgan qiymatdir."
          }
        ]
      },
      {
        "title": "Ekranda yo'q nimalar",
        "blocks": [
          {
            "p": "Bepul ekran asl diagramma, besh element va bugungi omadni ko'rsatadi. Hisoblash jarayonida ishlab chiqarilgan, lekin ekranda ko'rsatilmagan uchta qiymat mavjud va bu to'langan hisobotning qismlari."
          },
          {
            "ul": [
              "**Kun ustuni qulaylik nisbati** — Bu kuchli yoki zaif kun ustuni qachon hukm qilinganini raqamli ko'rsatadi. Faqat hukm nomi bu qachon chekkada yoki keng ekanligini ko'rsatmaydi.",
              "**Wang Sang Hyu Su Sa** — Tug'ilgan oy har bir energiyani qanchalik ko'targanini ko'rsatadi. Agar kuch barometr 'qanchalik bor' deb ko'rsatsa, bu jadval 'mavsumda bormi'ni ko'rsatadi.",
              "**Haqiqiy quyosh vaqti tuzatish tafsilotlari** — Konseptsiyasi yo'riqnoma hujjatida mavjud, lekin **'sizning holatingizda necha daqiqa o'zgartirildi'** har bir kishi uchun turlicha qiymatdir, shuning uchun faqat hisobotda kiritilgan."
            ]
          }
        ]
      },
      {
        "title": "Xarid qilishdan oldin bilishingiz kerak bo'lgan narsalar",
        "blocks": [
          {
            "p": "**Server fayllarni saqlamaydi.** To'lov tasdiqlangandan so'ng, hujjat yaratiladi va darhol yuboriladi, serverda hech narsa qoldirmaydi. Ushbu xizmatning kiritilgan qiymatlarni saqlamaslik printsipi to'langan jarayonda ham saqlanadi."
          },
          {
            "p": "Shuning uchun, **to'lovdan so'ng faylni darhol saqlang.** Siz bir xil buyurtma bilan besh marta olishingiz mumkin, lekin natija ekranidan chiqib ketganingizda va kiritilgan qiymatlar yo'qolsa, uni qayta yaratish mumkin emas."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Hisobotlar ham ma'lumot manbalari",
        "blocks": [
          {
            "p": "Sahifalar soni oshgani uchun xulosalar ko'proq ishonchli degani emas. Hisobot qo'shadigan narsa **bir xil hisoblash asosidir**, kuchli da'vo emas. Taqdir — bu xulosalar amaliyotchiga qarab farq qilishi mumkin bo'lgan soha, va ushbu xizmat faqat qoidalar bilan tarjima qilinadigan narsalarni hisoblaydi."
          }
        ]
      }
    ]
  },
  "notice": {
    "eyebrow": "E'lon",
    "title": "E'lonlar",
    "summary": "Bu foydalanishga ta'sir qilishi mumkin bo'lgan o'zgarishlar haqida ma'lumot berish joyidir.",
    "backLabel": "Boshiga qaytish",
    "sections": []
  },
  "contact": {
    "eyebrow": "Aloqa",
    "title": "So'rovlar",
    "summary": "Bu foydalanish, qaytarish, shaxsiy ma'lumotlar so'rovlari va xato xabarlari bo'yicha so'rovlar uchun kanal, shuningdek, biznes ma'lumotlari.",
    "backLabel": "Boshiga qaytish",
    "sections": [
      {
        "title": "Email orqali aloqa",
        "blocks": [
          {
            "p": "Iltimos, so'rovlarni **{email}** manziliga yuboring. Biz 2 ish kuni ichida javob beramiz. To'lov va qaytarish so'rovlari uchun, iltimos, **buyurtma raqamini yoki to'lov uchun ishlatilgan emailni** tezroq tasdiqlash uchun qo'shing."
          },
          {
            "p": "Telefon orqali so'rovlar {customerCenter}da qabul qilinadi."
          }
        ]
      },
      {
        "title": "Ushbu kanalga nimalar yuborilishi mumkin",
        "blocks": [
          {
            "ul": [
              "**To'lov va qaytarish** — Agar hujjat yaratilmagan bo'lsa yoki to'lov miqdori buyurtmadan farq qilsa, to'liq qaytarish taqdim etiladi. Shartlar [Qaytarish siyosati](/refund-policy)da.",
              "**Shaxsiy ma'lumotlar** — Biz ko'rish, tuzatish va o'chirish so'rovlarini qabul qilamiz. Qayta ishlash siyosati [Maxfiylik siyosati](/privacy)da.",
              "**Hisoblash xato xabari** — Agar saju asl diagrammasi yoki ballari g'alati ko'rinsa, iltimos, bizga xabar bering. Agar siz tug'ilgan sana va vaqtni kiritganingizni qo'shsangiz, biz bir xil qiymatlar bilan qayta hisoblashimiz mumkin."
            ]
          }
        ]
      },
      {
        "title": "Biznes ma'lumotlari",
        "blocks": [
          {
            "ul": [
              "**Biznes nomi** — {companyName}",
              "**Vakil** — {representative}",
              "**Biznes ro'yxatga olish raqami** — {businessNumber}",
              "**Pochta buyurtma biznesi ro'yxatga olish raqami** — {mailOrderNumber}",
              "**Manzil** — {address}",
              "**Mijozlar markazi** — {customerCenter}",
              "**Email** — {email}",
              "**Shaxsiy ma'lumotlarni himoya qilish bo'yicha mas'ul shaxs** — {privacyOfficer}",
              "**Hosting provayderi** — {hostingProvider}"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "So'rov emailida tug'ilgan sana va vaqtni kiritish shart emas. Biz kiritmalarni saqlamaymiz, shuning uchun keyinchalik ularni qaytarib olishimiz mumkin emas, va tasdiqlanishi kerak bo'lgan narsa uchun buyurtma raqami yetarli. Iltimos, faqat qiymatlar mutlaqo zarur bo'lganda, masalan, hisoblash xato xabari kabi, qo'shing."
          }
        ]
      }
    ]
  }
} satisfies Record<DocKey, DocPage>;

export const UZ_NOTICES = {
  "kindLabels": {
    "service": "Xizmat",
    "product": "Hisobot",
    "engine": "Hisoblash mezonlari",
    "support": "So'rov"
  },
  "intro": "Narxlar va shartlar kabi foydalanish shartlariga ta'sir etuvchi o'zgarishlar amalga oshirilishidan oldin bu yerda e'lon qilinadi. Ekran tezroq bo'lishi kabi ko'plab ichki yaxshilanishlar mavjud — bu yerda faqat bilishingiz kerak bo'lgan ma'lumotlar keltiriladi.",
  "empty": {
    "title": "Hech qanday e'lon joylashtirilmagan.",
    "body": "Agar sizga ma'lum qilinishi kerak bo'lgan o'zgarishlar bo'lsa, ular bu yerda joylashtiriladi."
  },
  "effective": "Amalga oshirish sanasi: {date}",
  "pager": {
    "label": "E'lonlar sahifasi",
    "newer": "← Eng so'nggi",
    "older": "Oldingi e'lonlar →"
  },
  "items": {
    "2026-08-02-contact": {
      "title": "So'rov oynasi va xizmatni tanishtirish sahifasi ochildi.",
      "body": [
        "Biz so'rovlar, qaytarishlar, shaxsiy ma'lumotlar so'rovlari va hisoblash xatolarini xabar berish uchun yagona oynani to'pladik. Buni ekran pastida 'So'rov' bo'limida tekshirishingiz mumkin.",
        "Agar sizda hisoblash xatosi ko'rinadigan bo'lsa, iltimos, kiritgan tug'ilish sanasi va vaqtini qo'shing. Biz kiritishni saqlamaymiz, shuning uchun bu qiymatsiz qayta hisoblashni amalga oshira olmaymiz."
      ]
    },
    "2026-08-01-pdf-language": {
      "title": "Arab va Khmer ekranlarida hisobot ingliz tilida tayyorlanadi.",
      "body": [
        "Agar siz ekranni arab yoki Khmer tilida ko'rayotgan bo'lsangiz, xarid qilgan PDF hisobotingiz ingliz tilida yaratiladi. Bu, asbob hali ushbu ikki yozuvni paragrafga formatlashga qodir emasligi sababli.",
        "Siz hali ham ekranni o'z holida ko'rishingiz mumkin va hisobotda yozilgan ism siz kiritganidek bo'ladi.",
        "Bir xil ma'lumotlar to'lov ekranida ham oldindan taqdim etiladi. Ushbu asbob ushbu yozuvlarni qo'llab-quvvatlaganda sizni bu yerda xabardor qilamiz."
      ]
    },
    "2026-08-01-engine-version": {
      "title": "Hisoblash mezonlari natijalar bilan birga kiritiladi.",
      "body": [
        "Natijalar ekranidan va hisobotdan pastda, hisoblash mezonlari (masalan, sajulink-natal-v1) ko'rsatiladi. Agar kiritish bir xil bo'lsa, bir xil qiymat har doim bir xil mezonlar ostida chiqadi.",
        "Agar 명리 (myeongri) talqin qilish qoidalari o'zgartirilsa va ballar farq qilishi mumkin bo'lsa, biz avval bu haqda va amal qilish sanasini bu yerda joylashtiramiz. Bu, siz oldin olgan natija havolalaridagi raqamlar o'zgarishi mumkin.",
        "Hozirgi mezon v10, va to'lov hali tayyorlanmoqda."
      ]
    }
  }
} satisfies NoticeCopy;
