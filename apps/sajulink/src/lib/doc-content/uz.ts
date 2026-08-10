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
            "p": "Saju-Link sizning tug'ilgan sana va vaqtingizga asoslangan **saju (to'rt ustun) diagrammasini tuzadi va sakkiz belgi nimani anglatishini ko'rsatadi**. Bu besh elementning kuchini va kun ustunining kuchini o'qiydi, shuningdek, kunning ustuni asosida bugungi omadni tekshiradi."
          },
          {
            "p": "Ekranda ko'rganingiz **bepul va a'zolik talab qilmaydi.** Pullik mahsulot — ekranda ko'rsatilmagan qiymatlarni o'z ichiga olgan PDF hujjati — kuchli kun ustuni va zaif kun ustuni o'rtasidagi farqni aniqlash, Wang Sang Hyu Su Sa va haqiqiy quyosh vaqti uchun tuzatish tafsilotlari."
          }
        ]
      },
      {
        "title": "Biz nima hisoblaymiz?",
        "blocks": [
          {
            "p": "Saju **manseyeok (Koreya lunisolal almanaxi)** yordamida tuziladi. Tug'ilish vaqti tug'ilgan joyning **haqiqiy quyosh vaqti** ga to'g'irlanadi — chunki quyoshning haqiqiy pozitsiyasi mintaqaga qarab farq qiladi, hatto soat bir xil vaqtni ko'rsatganda ham."
          },
          {
            "p": "Ballar faqat belgilangan qoidalarga muvofiq beriladi. An'anaviy myeongri (Koreya taqdir o'rganish) dan olingan tushunchalar, masalan, O'n Xudo, yerli shoxlar o'rtasidagi munosabatlar va elementlarni muvozanatlash qoidalariga aylantiriladi, va **bir xil kirish har doim bir xil qiymatni beradi**. Qoidalar o'zgartirilganda, oldingi natijalar o'zgarmasligini ta'minlash uchun regressiya testi o'tkaziladi."
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
              "**Biz taqdirni bashorat qilmaymiz.** Sizni kimnidir uchratish yoki undan qochish kerakligini yozmaymiz. Bu an'anaviy myeongri nuqtai nazarlarini qisqacha bayon etuvchi ma'lumot materialidir.",
              "**Biz kiritmalarni saqlamaymiz.** Tug'ilgan sana va vaqt faqat hisoblash paytida ishlatiladi va serverda saqlanmaydi. Natija havolasi ham brauzer serverga yubormaydigan joyda saqlanadi.",
              "**Ballar insoniy qiymatlar sifatida qabul qilinmaydi.** Bugungi omad past bo'lsa, bu kunni tark etishingiz kerak degani emas."
            ]
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Aniq hisoblash usullari [Foydalanuvchi Qo'llanmasi](/guide) da yozilgan. Biznes ma'lumotlari va aloqa tafsilotlarini [Aloqa](/contact) bo'limida topishingiz mumkin."
          }
        ]
      }
    ]
  },
  "guide": {
    "eyebrow": "Hisoblash Asosi",
    "title": "Hisoblashlar uchun asos nima?",
    "summary": "Biz Saju-Link tomonidan ishlatiladigan barcha qoidalarni oshkor qilamiz. Ekranda ko'rsatilgan raqamlarning qayerdan kelishini, bugungi omad uchun tuzatishlar, yerli shoxlar o'rtasidagi munosabatlar jadvalidan olingan ballar va kuchli kun ustuni va zaif kun ustuni o'rtasidagi chegara qiymatlarini tekshirishingiz mumkin.",
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
    "title": "natal chart — Sakkiz belgi qayerdan keladi?",
    "summary": "Bu yil, oy, kun va tug'ilish vaqti qanday qilib to'rt ustun va sakkiz belgiga aylanishini tushuntiradi va qaysi belgi sizni ko'rsatishini aniqlaydi. Shuningdek, bu tug'ilish vaqtini aniq bilmasdan ham qanday ko'rinishi mumkinligini muhokama qiladi.",
    "backLabel": "Hisoblash Asosi",
    "sections": [
      {
        "title": "To'rt Ustun, Sakkiz Belgilar",
        "blocks": [
          {
            "p": "Saju (四柱) aslida **to'rt ustun** degan ma'noni anglatadi. Har bir yil, oy, kun va tug'ilish vaqti bir ustun sifatida o'rnatiladi va har bir ustun uchun ikkita belgi yoziladi. Shunday qilib, jami sakkiz belgi mavjud bo'lib, bu **natal chart** deb ataladi."
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
            "p": "Sakkiz belgi bir xil vaznga ega emas. **Tug'ilish kunining heavenly stem** i, ya'ni kun ustunining yuqori belgisi, **o'zimni** ko'rsatadi. Bu **kun ustuni (日干)** deb ataladi."
          },
          {
            "figure": "four-pillars",
            "caption": "Saju sakkiz belgidan iborat bo'lib, har bir yil, oy, kun va vaqt uchun ikkita belgi ishlatiladi, ular heavenly stems va earthly branches bilan ifodalanadi. Bu yerda, muhim kun ustuni (日干) — o'zimni ko'rsatadigan belgi.",
            "labels": {
              "year": "Yil Ustuni",
              "yearNote": "Asos · Zodiak Belgisi",
              "month": "Oy Ustuni",
              "monthNote": "Mavsum · Kuch",
              "day": "Kun Ustuni",
              "dayNote": "O'zlik · Turmush O'rtoqlari Saroyi",
              "hour": "Soat Ustuni",
              "hourNote": "Keyin Qismlar · Foydalanish",
              "stem": "Osmon Ustuni",
              "stemNote": "Kun Ustuni = O'zlik",
              "branch": "Yer Tarmog'i",
              "branchNote": "Kun Tarmog'i = Turmush O'rtoqlari Saroyi"
            }
          },
          {
            "p": "Ushbu xizmat ko'rsatishi asosan bitta belgi — tendentsiyalarni talqin qilish, besh elementning kuchi, hozirgi zarur energiya va bugungi omadni o'lchash Kun Ustuniga asoslanadi. Qolgan yetti belgi 'Kun Ustuni qaysi muhitda joylashganligini' ko'rsatadi."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Tug'ilgan Kun Nima Uchun?",
        "blocks": [
          {
            "p": "Yil Ustuni o'sha yilda tug'ilganlar uchun bir xil, va Oy Ustuni o'sha oyda tug'ilganlar uchun bir xil. Kun Ustuni kun o'zgarganda o'zgaradi va an'anaviy taqdirni aytish bu pozitsiyani O'zlik deb hisoblaydi, Song sulolasidan beri. Agar Soat Ustuni qo'shilsa, u hatto bir xil kunda tug'ilganlar orasida farq qiladi."
          }
        ]
      },
      {
        "title": "Quyosh Terminalari Bo'yicha Bo'linadi, Taqvim Yili Bo'yicha Emas",
        "blocks": [
          {
            "p": "Saju yili 1-yanvarda o'zgarmaydi, balki **Ipchun (taxminan 4-fevralda)** o'zgaradi. Oy ham quyosh terminalari asosida bo'linadi."
          },
          {
            "p": "Shunday qilib, **yanvar va fevralning boshida tug'ilganlar o'tgan yilning Yil Ustunini oladilar**. Bu yerda zodiak belgilariga oid umumiy tushunmovchilik paydo bo'ladi. Agar siz lunar tug'ilgan kunni kiritgan bo'lsangiz, u quyoshga qaytariladi va keyin quyosh terminalari bo'yicha bo'linadi."
          }
        ]
      },
      {
        "title": "Tug'ilgan Vaqtni Bilmasangiz Ham O'qishingiz Mumkin",
        "blocks": [
          {
            "p": "Agar siz vaqtni kiritmasangiz, o'qish uchta ustun va olti belgiga asoslanadi, Soat Ustunini hisobga olmasdan. Biz yo'qolgan qiymatlarni taxmin qilmaymiz — Soat Ustunini tasodifan belgilash besh elementning kuchini buzishi mumkin, natijada ehtimoliy to'g'ri xulosalar o'rniga noto'g'ri xulosalar kelib chiqadi."
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
            "p": "Sakkiz belgini besh element sifatida kuchini baholash usuli [Besh Element Kuch va Kuchli/Zayif Kun Ustuni](/guide/five-elements) da davom etadi, Kun Ustuniga asoslangan qolgan belgilarni o'qish usuli esa [O'n Xudo](/guide/ten-gods) da davom etadi."
          }
        ]
      }
    ]
  },
  "guide/five-elements": {
    "eyebrow": "Besh Element",
    "title": "Besh Element Kuch va Kuchli/Zayif Kun Ustuni",
    "summary": "Biz sakkiz belgini besh element sifatida hisoblaymiz, qaysi energiya kuchli va qaysi zaif ekanligini ko'rish uchun. Biz Kun Ustunining kuchini belgilaydigan chegaraviy qiymatlarni (45%·35%) oshkor qilamiz.",
    "backLabel": "Hisoblash Asosi",
    "sections": [
      {
        "title": "Sakkiz Belgini Besh Energiya Sifatida Hisoblash",
        "blocks": [
          {
            "p": "O'n Osmon Ustunlari va O'n Ikki Yer Tarmog'i har biri **Besh Elementga (五行)** — Daraxt (木), Olov (火), Yer (土), Metall (金), Suv (水) ga tegishli. Tug'ilish xaritasidagi belgilarni ularning tegishli elementlari bo'yicha hisoblash orqali, qaysi energiya kuchli va qaysi zaif ekanligini aniqlaymiz."
          },
          {
            "p": "Biroq, biz faqat raqamlarni hisoblamaymiz. Biz shuningdek, **tug'ilgan oy o'sha energiyani qo'llab-quvvatlaydimi yoki yo'qligini** ham hisobga olamiz. Hatto bir xil belgi ham o'z mavsumiga mos kelishiga qarab turlicha kuchga ega bo'lishi mumkin. Bu Oy Belgisi (月令) deb ataladi va besh bosqichga bo'linadi: Wang (旺), Sang (相), Hyu (休), Su (囚), va Sa (死)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ekran va Hisobot Qanday Farq Qiladi",
        "blocks": [
          {
            "p": "Bepul ekran faqat **Oy Belgisini aks ettirib kuchni ko'rsatadi**. Oy Belgisi oldidan va Wang, Sang, Hyu, Su, va Sa jadvali pullik hisobotda kiritilgan — bu sizga baholash qayerda farq qilganini to'g'ridan-to'g'ri tekshirish uchun taqdim etiladi."
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
            "p": "Kun Ustuniga mos keladigan energiyalar **Resurs va Hamkor** — meni tug'diradigan energiyalar va menga o'xshash energiyalar. Beshdan ikkita bo'lgani uchun, agar tarafkashlik bo'lmasa, bu {evenAllyRatio} atrofida bo'ladi. Biz o'sha raqam atrofidagi hududni muvozanatli deb hisoblaymiz va uning ustida va ostida kuchli yoki zaif deb o'qiymiz."
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
                  "Ikkala tomonga ham xulosa chiqarish qiyin."
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
            "p": "Ushbu jadvaldagi raqamlar matndan ko'chirilmagan, balki **to'g'ridan-to'g'ri dvigatordan o'qilgan**. Agar qoidalar o'zgarsa, ushbu hujjat ham o'zgaradi."
          }
        ]
      },
      {
        "title": "Kuch Yaxshi yoki Yomon Emas",
        "blocks": [
          {
            "p": "Kuchli bo'lish yomon emas, zaif bo'lish esa yaxshi emas. Agar kuchli bo'lsa, oldinga surish kuchi bor, lekin bir tomonga qiyshayish oson; agar zaif bo'lsa, boshqalarning kuchini olish oson, lekin yolg'iz qiyinchilikka dosh berish oson emas. **Zarur energiyalar har ikkala holatda ham farq qiladi.**"
          },
          {
            "p": "Zarur energiyani aniqlash muvozanatli elementdir va bu [Muvozanatli Element](/guide/yongsin) da davom etadi."
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Sakkiz belgi qanday tashkil etilishi [tug'ilish xaritasi](/guide/natal-chart) da. Bugungi Kun Ustuni bu kuch bilan qanday o'zaro ta'sir qilishi [bugungi omad](/guide/today-fortune) da qamrab olingan."
          }
        ]
      }
    ]
  },
  "guide/yongsin": {
    "eyebrow": "Muvozanatli Element",
    "title": "Muvozanatli Element — Hozir Zarur Energiya",
    "summary": "Agar Kun Ustuni kuchli bo'lsa, biz energiyani kamaytirish zarur deb hisoblaymiz; agar zaif bo'lsa, energiyani qo'llab-quvvatlash zarur deb hisoblaymiz. Bu energiyani qanday tanlash va muvozanatga kelganda qanday boshqarishni tushuntiradi.",
    "backLabel": "Hisoblash Asosi",
    "sections": [
      {
        "title": "Besh Element Yetarli Emas",
        "blocks": [
          {
            "p": "Besh elementning teng taqsimlanganligini o'lchash usullari mavjud. Biroq, haqiqatan ham zarur bo'lgan narsa **bu sajudagi yetishmayotgan va ortiqcha narsalardir**."
          },
          {
            "p": "Teng taqsimlangan saju har doim qulay emas, shuningdek, qiyshiq saju har doim qiyin emas. Qiyshiqning yo'nalishi va uni yumshatadigan elementning mavjudligi muhim nuqtadir."
          }
        ]
      },
      {
        "title": "Balanslash Elementi — Ortig'ini Kamaytirish, Yetishmayotganini Qo'shish",
        "blocks": [
          {
            "p": "Balanslash elementi (用神) — **bu odamga hozirda kerak bo'lgan energiya**. Uni aniqlash uchun bir nechta usullar mavjud (boshlash va qo'llab-quvvatlash, mavsumiy balans, zarba, vositachilik), va qoidalar sifatida ifodalanishi mumkin bo'lgan — va eng keng tarqalgan — usul **boshlash va qo'llab-quvvatlash (抑扶)** hisoblanadi. Agar kun ustuni kuchli bo'lsa, kamaytirish uchun energiya kerak deb hisoblanadi; agar zaif bo'lsa, qo'shish uchun energiya zarur."
          },
          {
            "table": {
              "head": [
                "Hukm",
                "Nima Kerak",
                "Turi Soni"
              ],
              "rows": [
                [
                  "Kuchli Kun Ustuni (身强)",
                  "O'chirish uchun energiya — Chiqarish, Boylik va Rasmiy",
                  "Uch"
                ],
                [
                  "Zaif Kun Ustuni (身弱)",
                  "Qo'shish uchun energiya — Resurs, Hamkor",
                  "Ikki"
                ],
                [
                  "Balanslangan (中和)",
                  "Boshlash va qo'llab-quvvatlash orqali hal qilinmaydi, shuning uchun eng nozik energiyalar",
                  "Ikki"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Kuch va Zaiflikning Chegarasi",
        "blocks": [
          {
            "p": "Kun ustuni tomoni **Resurs va Hamkor** — meni tug'diradigan energiya va menga o'xshaydigan energiya. Beshdan ikki kishi ishtirok etganligi sababli, to'liq balans {evenAllyRatio} bo'ladi. Ushbu {evenAllyRatio} dan yuqori va pastki kenglik belgilanadi."
          },
          {
            "table": {
              "caption": "Umumiy Kuchdagi Hamkorlar (Resurs + Hamkor) Nisbati",
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
                  "Balanslangan"
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
        "title": "Balanslangan 'Kam Aniq Hukm'",
        "blocks": [
          {
            "p": "Balanslangan degani, boshlash va qo'llab-quvvatlash uni hal qila olmaydi. Bu vaqtda, ikki eng nozik energiya shunchaki zarur deb hisoblanadi. Natija ekranida, bu aniq bayonot emas, balki 'hozirgi nozik pozitsiya' sifatida qayd etiladi."
          }
        ]
      },
      {
        "title": "Kuch Harakterlar Soniga Bog'liq Emas",
        "blocks": [
          {
            "p": "Besh elementning kuchini hisoblaganda, sakkiz harakter ko'rinishida hisobga olinmaydi. Qiymatlar, yerli tarmoqlardagi yashirin osmonga tegishli ustunlar (地藏干) va tug'ilgan oy energiyasining mavsumi (月令) bilan bog'liq."
          },
          {
            "p": "Faqat yuzaki harakterlarni hisoblash, hatto bir xil 木 harakterlar mavsumga qarab mutlaqo boshqacha kuchga ega bo'lishini e'tiborga olmaydi. Bahor va kuzdagi 木, bir xil harakter bo'lsa-da, turli kuchlarga ega."
          }
        ]
      },
      {
        "title": "Balanslash Elementini Qayerda Qo'llash",
        "blocks": [
          {
            "p": "Aniqlangan balanslash elementi ikki joyda ishlatiladi. Biri natija ekranidagi **'hozirda kerak bo'lgan energiya'**, ikkinchisi esa [bugungi taqdir](/guide/today-fortune) — bugungi energiya balanslash elementiga mos keladimi, bu kunda ballarni eng ko'p harakatlantiradigan narsadir."
          }
        ]
      },
      {
        "title": "Bu Oddiy Hukm",
        "blocks": [
          {
            "p": "Haqiqiy taqdir tahlili shakllanish va mavsumiy shartlarni (mavsumning issiqligi va namligi) hisobga olib, balanslash elementini aniqlaydi va xulosalar usulga qarab farq qilishi mumkin. Saju-Link faqat **kuch qiymatlari bilan o'lchash mumkin bo'lgan kamaytirishni** ishlatadi. Bu qoidalar sifatida ifodalanishi mumkin bo'lgan narsalarni ishlatish printsipiga bog'liq, shuning uchun bir xil kirish har doim bir xil javob beradi."
          },
          {
            "p": "Buning o'rniga, natija ekranida hozirda kerak bo'lgan energiya bilan birga kuchli va zaif kun ustuni ham **o'qish materiallari** sifatida taqdim etiladi. Bu ball asosini yashirishdan qochish uchun."
          }
        ]
      }
    ]
  },
  "guide/ten-gods": {
    "eyebrow": "O'n Xudo",
    "title": "O'n Xudo — Mening Sajudagi O'n Pozitsiya",
    "summary": "Kun ustuniga asoslanib, qolgan harakterlar o'n nomga bo'linadi. Ular bir xil boylik elementi bo'lsa ham, oddiy boylik va qo'shimcha boylikni ajratish sabablarini muhokama qiladi.",
    "backLabel": "Hisoblash Asosi",
    "sections": [
      {
        "title": "Kun Ustuni Odamning O'zi",
        "blocks": [
          {
            "p": "Sajudagi sakkiz harakter orasida, **kun ustuni** (tug'ilish kunining osmonga tegishli ustuni) odamning o'zini anglatadi. Qolgan yetti harakter bu kun ustuni mavjud bo'lgan muhit sifatida o'qiladi."
          },
          {
            "p": "**O'n Xudo** (十神) — kun ustuni boshqa harakterlarni qanday qabul qilishi bo'yicha o'n bo'linma. Meni boqadigan energiya Resurs, menga o'xshaydigan energiya Hamkor, meni tug'diradigan energiya Oziq-ovqat va Boylik, meni bostiradigan energiya Rasmiy Pozitsiya, va men bostiradigan energiya Boylik — bu besh toifani yanada ikki qismga bo'lish orqali o'n hosil qiladi."
          }
        ]
      },
      {
        "title": "Qolgan Yetti Harakter Menga Nima Anglatadi",
        "blocks": [
          {
            "p": "Kun ustuni aniqlangandan so'ng, tug'ilish xaritasidagi qolgan harakterlar har biri nom oladi. Meni tug'diradigan energiya, menga o'xshaydigan energiya, meni tug'diradigan energiya, meni bostiradigan energiya va men bostiradigan energiya — bu besh tarmoq yana **o'n** ga bo'linadi, yin va yang orqali. Bu O'n Xudo."
          },
          {
            "p": "Shunday qilib, O'n Xudo boshqalar bilan munosabatlar emas, balki **o'zim ichidagi pozitsiyalar** ga ishora qiladi. Qaysi pozitsiyalar qalin yoki nozik bo'lsa, bu mening tendensiyalarim va hayotim tarzini ko'rsatadi."
          }
        ]
      },
      {
        "title": "Nima uchun biz buni O'n Xudo orqali o'qiymiz, uch elementar munosabatlar orqali emas",
        "blocks": [
          {
            "p": "Kun ustuni (day stem) o'zining uch jihati orqali faqat uchta o'n element (the five elements) orqali ko'rish usuli ham mavjud (qo'llab-quvvatlovchi, bir xil va qarama-qarshi). Bu oddiy, lekin **yin va yang yo'qoladi.** 甲 (yang daraxti) va 乙 (yin daraxti) 甲 bilan bir xil bo'ladi, bu 'bir xil' ni ifodalaydi, va qarama-qarshi munosabatlar bitta ballga birlashtiriladi, yo'nalish yoki yin va yangsiz."
          },
          {
            "p": "Turmush o'rtog'i pozitsiyasi Ten Gods (the Ten Gods) nuqtai nazaridan yin va yang bo'yicha baholanishi kerak. Agar o'n elementlar (the five elements) orqali ko'rilgan narsalar Ten Gods (the Ten Gods) orqali ko'rilgan narsalar bilan bir xil dvigatelga aralashtirilsa, ikkita xarakter uchun ikkita standart bo'ladi. Shuning uchun, biz buni Ten Gods (the Ten Gods) ostida birlashtiramiz."
          }
        ]
      },
      {
        "title": "Turmush o'rtog'i pozitsiyasi To'g'ri Boylik va To'g'ri Rasmiy",
        "blocks": [
          {
            "p": "An'anaviy taqdirni aytish turmush o'rtog'i pozitsiyasini jinsga qarab boshqacha ko'radi. Erkaklar uchun bu **To'g'ri Boylik (正財)**, ayollar uchun esa **To'g'ri Rasmiy (正官)**. Agar ular bir xil boylik elementi bo'lsa ham, faqat yin va yangda mos kelmaydigan To'g'ri Boylik turmush o'rtog'i pozitsiyasi sifatida hisobga olinadi, Indirect Wealth esa turmush o'rtog'i sifatida emas, balki faoliyat va boylik nuqtai nazaridan o'qiladi."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Agar jinsni ko'rsatmasangiz, bu pozitsiya chiqarib tashlanadi",
        "blocks": [
          {
            "p": "Bu, qaysi tomonni, To'g'ri Boylik yoki To'g'ri Rasmiy, turmush o'rtog'i pozitsiyasi sifatida hisobga olishni aniqlash mumkin emasligi sababli. Yo'qolgan qiymatni to'ldirish uchun taxmin qilish o'rniga, biz qolgan narsalarni o'sha birisiz o'qiymiz."
          }
        ]
      }
    ]
  },
  "guide/today-fortune": {
    "eyebrow": "Bugungi taqdir",
    "title": "Bugungi taqdir qanday chiqadi?",
    "summary": "Bugungi kun ustuni (day stem) tug'ilgan xarita bilan taqqoslanadi. O'n uchta bosim va qo'llab-quvvatlash munosabatlari va yetti erdagi filial munosabatlari, shuningdek, yigirma element va ularning tegishli qo'shilishlari va ayirishlari to'liq ochiq.",
    "backLabel": "Hisoblash asoslari",
    "sections": [
      {
        "title": "Bugun, biz uni sakkiz belgiga o'xshab o'rnatamiz",
        "blocks": [
          {
            "p": "Har bir kun o'zining **kun ustuni (日辰)** ga ega. Tug'ilgan xaritaning kun ustunini o'rnatish usulidan foydalanib, bugun ham bir heavenly stem (heavenly stem) va bir earthly branch (earthly branch) bilan bog'langan. Bugungi taqdir tug'ilgan xarita bilan o'sha ikki xarakterni taqqoslash haqida."
          },
          {
            "p": "Asosiy ball **{baseScore} ball**. Quyidagi narsalar qo'shiladi va ayiriladi, va nihoyat, bu {clampLow} ball va {clampHigh} ball o'rtasida cheklangan — 0 ball yoki 100 ball haqida hech narsa aytilmaydi."
          }
        ]
      },
      {
        "title": "① Bugungi energiya menga kerakmi?",
        "blocks": [
          {
            "p": "Bu eng muhim pozitsiya. Biz bugungi energiya 'hozir kerak bo'lgan energiya' ga mos kelishini tekshiramiz, bu [balanslash elementi](/guide/yongsin) tomonidan aniqlanadi."
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
        "title": "Salbiy elementi 'balanslash elementi tashqari hamma narsa' deb hisoblamang",
        "blocks": [
          {
            "p": "Agar shunday qilsangiz, balanslash elementini hosil qiladigan energiya va balanslash elementini bostiradigan energiya yomon bo'ladi, va yuqoridagi jadvaldagi oxirgi ikki qator ajratib bo'lmaydi. Faqat **qarama-qarshi tomonga ko'proq bosim o'tkazadigan** energiya bosim va yordam ma'nosiga ko'ra salbiy element sifatida ko'riladi."
          }
        ]
      },
      {
        "title": "② Bugungi heavenly stem va kun ustuni o'rtasidagi munosabat",
        "blocks": [
          {
            "p": "Besh elementning yordam beruvchi va qarama-qarshi munosabatlari to'g'ridan-to'g'ri kun ustuni va bugungi heavenly stem o'rtasida qo'llaniladi."
          },
          {
            "table": {
              "head": [
                "Munozara",
                "Qo'shish/Ayirish"
              ],
              "rows": [
                [
                  "Bugun meni hosil qiladi",
                  "{generatesSelf}"
                ],
                [
                  "Bugun va men bir xil energiyamiz",
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
        "title": "③ Bugungi yerli shox tug'ilish xaritasining yerli shoxlari bilan uchrashadi",
        "blocks": [
          {
            "p": "Bugungi yerli shox tug'ilish xaritasining yerli shoxlari bilan solishtiriladi. Munosabatlar jadvali o'zi [yerli shox munosabatlari](/guide/branches) ichida."
          },
          {
            "table": {
              "head": [
                "Munozara",
                "Qo'shish/Ayirish"
              ],
              "rows": [
                [
                  "triad (三合)",
                  "{branchSamhap}"
                ],
                [
                  "six harmony (六合)",
                  "{branchYukhap}"
                ],
                [
                  "half triad (半合)",
                  "{branchBanhap}"
                ],
                [
                  "qulay murosasizlik (怨嗔)",
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
            "p": "Bir nechta ustunlar mavjud bo'lganda, bir nechta munosabatlar paydo bo'ladi. Barchasi qo'shiladi, lekin bu butun element **±{branchMaxAbs} ballar** bilan cheklangan — bu bitta yerli filial munosabatining butun kunni belgilashini oldini olish uchun."
          }
        ]
      },
      {
        "title": "④ Kuchga Asoslangan Tuzatish",
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
        "title": "Ballar Bo'yicha Daraja va Soha",
        "blocks": [
          {
            "p": "Jami ball beshta darajaga bo'linadi."
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
                  "Buyuk Baxt (大吉)"
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
                  "E'tibor Bering (操心)"
                ]
              ]
            }
          },
          {
            "p": "Boylik, sevgi, kasb va salomatlik sohalarining to'rt sohalari jami ballning {overallShare} qismini meros qilib oladi, qolgan qismi esa o'sha sohalarga tegishli bo'lgan O'n Xudo va yerli filial munosabatlari bo'yicha taqsimlanadi. Shuning uchun, jami ball bir xil bo'lsa ham, sohalar bo'yicha raqamlar shaxsdan shaxsga farq qiladi."
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
    "title": "Yerli Filial Munosabatlari — Kombinatsiya, To'qnashuv va Murosasizlik",
    "summary": "Bu bugungi kun ustuni qanday qilib tug'ilish xaritasiga ta'sir qilayotganini ko'rsatadigan munosabatlar jadvali. Har bir kombinatsiya, to'qnashuv va murosasizlikni va ularning ballarini ochib beradi.",
    "backLabel": "Hisoblash Asosi",
    "sections": [
      {
        "title": "Yerli Filialar O'n Ikki Belgidir",
        "blocks": [
          {
            "p": "O'n ikki yerli filial (十二支) quyidagilar: 子 丑 寅 卯 辰 巳 午 未 申 酉 戌 亥. Ommaviy tanilgan zodiak belgilar — Sichqon, Sigir, Sher, Qoplon, Ajdaho, Ilon, Ot, Qo'y, Maymun, Xonadon, It, Cho'chqa — har biri ushbu o'n ikki belgidan biriga bog'langan."
          },
          {
            "figure": "branch-wheel",
            "caption": "O'n ikki belgi aylana shaklida joylashtirilganda, munosabatlar aniq ko'rinadi. To'qnashuv (沖) har doim bir-biriga qarshi turadi, o'n ikki belgi orasida olti uyg'unlik va murosasizlik yaqin juftliklardir. Ushbu chiziqlar matnda yozilmagan, balki to'g'ridan-to'g'ri hisoblash qoidalaridan kelib chiqadi.",
            "labels": {
              "alt": "O'n ikki yerli filialni aylana shaklida joylashtirilgan va olti uyg'unlik, to'qnashuv va murosasizlikni bog'laydigan chiziqlar bilan ko'rsatadigan diagramma.",
              "yukhap": "olti uyg'unlik",
              "chung": "To'qnashuv",
              "wonjin": "Murosasizlik",
              "rat": "Sichqon",
              "ox": "Sigir",
              "tiger": "Sher",
              "rabbit": "Qoplon",
              "dragon": "Ajdaho",
              "snake": "ilonga",
              "horse": "ot",
              "goat": "echki",
              "monkey": "maymun",
              "rooster": "to'ng'iz",
              "dog": "it",
              "pig": "cho'chqa"
            }
          },
          {
            "p": "Saju da, to'rt ustunning har biri bitta yerli tarmoqka ega. **Bugungi o'qish** **kunning tarmog'i**ni tug'ilgan xaritaning to'rt tarmog'i bilan moslashtirish orqali aniqlanadi, quyida berilgan munosabatlar jadvali yordamida."
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
                  "triad (三合)",
                  "申子辰 · 巳酉丑 · 寅午戌 · 亥卯未",
                  "Uch belgi birlashganda, ular to'liq elementar shakl (局) hosil qiladi. Bu eng kuchli kombinatsiya hisoblanadi.",
                  "{scoreSamhap}"
                ],
                [
                  "olti uyg'unlik (六合)",
                  "子丑 · 寅亥 · 卯戌 · 辰酉 · 巳申 · 午未",
                  "Bir-birini jalb qiluvchi juftlar. Bu eng keng tarqalgan kombinatsiya, chunki u faqat ikkita belgidan iborat.",
                  "{scoreYukhap}"
                ],
                [
                  "yarim triad (半合)",
                  "Triad dan birinchi qirolicha belgilarni (子·酉·午·卯) o'z ichiga olgan ikkita belgi",
                  "Yarim triad, shaklga markaziy bo'lgan belgi o'z ichiga oladi. Bu faqat ikkita belgidan iborat bo'lib, to'liq elementar shaklni hosil qilmaydi, shuning uchun triaddan pastroq.",
                  "{scoreBanhap}"
                ],
                [
                  "Bir xil Tarmoq",
                  "子子 · 丑丑 …",
                  "Bir-biriga o'xshash belgilar. Bu ularning bir-biriga o'xshashligini anglatadi, lekin jalb qilishni anglatmaydi, shuning uchun ular o'rtada joylashgan.",
                  "{scoreSame}"
                ],
                [
                  "Munosabat Yo'q",
                  "Ushbu yuqoridagi yoki pastdagi joyda joylashmagan juftlar",
                  "Maxsus munosabatga ega bo'lmagan kombinatsiyalar. Bu ma'lumot nuqtasi sifatida xizmat qiladi.",
                  "{scoreNeutral}"
                ],
                [
                  "sokin nizolar (怨嗔)",
                  "子未 · 丑午 · 寅酉 · 卯申 · 辰亥 · 巳戌",
                  "Nafratlariga qaramay ajralib bo'lmaydigan juftlar. Ular yuzaki sokin ko'rinadi, lekin uzoq davom etishi hisoblanadi.",
                  "{scoreWonjin}"
                ],
                [
                  "To'qnashuv (沖)",
                  "子午 · 丑未 · 寅申 · 卯酉 · 辰戌 · 巳亥",
                  "To'qnashuvga uchraydigan juftlar. Bu bir-biriga qarshi turgan olti juft.",
                  "{scoreChung}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "triadlar va yarim triadlar",
        "blocks": [
          {
            "p": "Triad barcha uch belgining mavjudligini talab qiladi. Tug'ilgan xaritada to'rt yer tarmog'i mavjud bo'lgani uchun, kunning tarmog'i ular bilan birlashishi mumkin, bu triadni hosil qiladi — o'sha paytda, u {scoreSamhap} ball oladi. Agar faqat ikkita belgi ishtirok etsa, bu yarim triad."
          }
        ]
      },
      {
        "kind": "note",
        "title": "yarim triadlar Qirolicha Belgilarni Tan olishni Talab qiladi",
        "blocks": [
          {
            "p": "Agar ikkita belgi ham bir xil triad guruhiga mansub bo'lsa, bu yarim triad sifatida hisoblanadigan usul ham mavjud. Bu 申辰 kabi kombinatsiyalarni yuqori ball olishiga imkon beradi, bu esa kombinatsiya deb atash qiyin. Shuning uchun, bu xizmat faqat qirolicha belgilarni (子·酉·午·卯) o'z ichiga olgan yarim triadni tan oladi va 申辰·巳丑·寅戌·亥未 kabi kombinatsiyalarni haqiqiy deb hisoblamaydi."
          }
        ]
      },
      {
        "title": "sokin nizolarni ajratish sababi",
        "blocks": [
          {
            "p": "Sokin nizolarning olti juftlari to'qnashuvlar kabi tez-tez ko'rinadi. Agar faqat kombinatsiyalar va to'qnashuvlar hisobga olinsa, bu olti juft {scoreNeutral} balli munosabat yo'q balli ostida qoladi, shuning uchun ular alohida joylashtiriladi."
          },
          {
            "p": "Agar to'qnashuvlar bir-biriga to'qnashadigan va aniq ko'rsatilgan juftlar bo'lsa, sokin nizolar noaniq tarzda mos keladi. Shuning uchun, bu {scoreWonjin} balliga joylashtiriladi, bu to'qnashuvlardan ({scoreChung}) yuqori, lekin albatta munosabat yo'q ({scoreNeutral}) dan past."
          }
        ]
      },
      {
        "title": "To'qnashuvlar uchun ham ballar beriladi",
        "blocks": [
          {
            "p": "Eng past to'qnash balli {scoreChung}. 0 ga yaqin qiymat berilmasligi qasddir. An'anaviy myeongri da to'qnashuv 'oxir' emas, balki 'to'qnashuv' hisoblanadi va pastki qiymat berish xizmatning munosabat haqida aniq bayonot berishini anglatadi."
          },
          {
            "p": "{scoreChung} dan minimal va {scoreSamhap} dan maksimal bo'lgan farq aniq ko'rinadi, lekin aniq emas."
          }
        ]
      }
    ]
  },
  "guide/zodiac": {
    "eyebrow": "Zodiak Belgisi",
    "title": "Zodiak Belgisi Saju da qayerda?",
    "summary": "Zodiak belgisi siz tug'ilgan yilning yerli shoxidir. Bu, zodiak belgisining kalendar yilidan emas, balki saju yilidan olinishi sababini tushuntiradi va yanvar yoki fevralning boshida tug'ilganlar o'tgan yilning zodiak belgisiga ega bo'lishini tushuntiradi.",
    "backLabel": "Hisoblash Asosi",
    "sections": [
      {
        "title": "Zodiak belgisi siz tug'ilgan yilning yerli shoxidir.",
        "blocks": [
          {
            "p": "Saju to'rt ustundan iborat: yil, oy, kun va soat, har bir ustun bir osmon shoxi va bir yer shoxiga ega. Ularning orasida **yilning yer shoxi**, yoki yil shoxi, zodiak belgisi deb ataydigan hayvondir."
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
                  "Yo'lbars"
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
            "p": "Zodiak belgisi o'zgaradigan nuqta na quyosh kalendari 1-yanvar, na esa O'rta Yangi Yil. Saju da yilni o'zgartirish standarti **Ipchun** dir. Shuning uchun, yanvar yoki fevralning boshida tug'ilganlar kalendar ko'rsatganidan farqli zodiak belgisiga ega bo'lishi mumkin."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Biz zodiak belgisini to'g'ridan-to'g'ri so'ramasligimiz sababi.",
        "blocks": [
          {
            "p": "Shuning uchun, biz faqat tug'ilgan sanani so'raymiz, zodiak belgisini kiritish ekranida tanlamaymiz. Saju dvigateli yilni hisoblaganda, u avtomatik ravishda Ipchun chegarasi bilan mos keladi. Agar to'g'ridan-to'g'ri tanlansa, fevralning boshida tug'ilgan kishi o'zining haqiqiy belgisiga mos kelmaydigan zodiak belgisini tanlaydi."
          }
        ]
      },
      {
        "title": "Zodiak belgisi saju da bir belgi.",
        "blocks": [
          {
            "p": "Sakkizta belgilar orasida zodiak belgisiga mos keladigan **bitta yil shoxi** mavjud. Boshqa yetti belgi — ayniqsa o'zini anglatadigan kun shoxi — zodiak belgisi bilan aloqasi yo'q."
          },
          {
            "p": "Bir xil yilda tug'ilgan odamlar barchasi bir xil zodiak belgisiga ega. Shuning uchun, zodiak belgisidan bilish mumkin bo'lgan narsa faqat sakkizta belgidan biri qadar. Bu xizmatning zodiak belgisini alohida yoki muhim deb hisoblamasligining sababi — yil shoxi kuchi hisoblanadi va bugungi kunning kun ustuni boshqa yerli shoxlar kabi hisoblanadi."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Shunga qaramay, zodiak belgisini ko'rsatishimizning sababi.",
        "blocks": [
          {
            "p": "Bu, myeongri terminologiyasini bilmasangiz ham, ma'nosi tushuniladigan yagona pozitsiya. Agar zodiak belgisi tug'ilgan xarita ekranida yil shoxi bilan birga ko'rsatilsa, bu boshqa yetti belgini o'qish uchun bir iz bo'ladi."
          }
        ]
      },
      {
        "title": "Yil shoxi tug'ilgan vaqtni bilmasangiz ham, o'zgarmaydi.",
        "blocks": [
          {
            "p": "Agar vaqtni kiritmasangiz, soat ustuni o'tkazib yuboriladi va besh elementning kuchi o'zgaradi. Biroq, **yil shoxi o'zgarmaydi** — bu faqat siz tug'ilgan yil bilan belgilanadi."
          },
          {
            "p": "Shuning uchun, yil shoxidan kelib chiqadigan hikoya vaqtni bilmaydiganlar uchun ham o'zgarmaydi. Aksincha, bu zodiak belgisiga asoslangan holda aytilishi mumkin bo'lgan narsalar cheklanganligini anglatadi, vaqt kiritilgan yoki kiritilmaganidan qat'i nazar."
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
            "p": "Saju ning soat ustuni (時柱) quyoshning joylashuviga qarab belgilanadi. Biroq, biz ko'rayotgan soat butun mamlakat uchun yagona standart vaqtni ishlatadi, bu esa quyoshning haqiqiy joylashuvi bilan mos kelmaydi."
          },
          {
            "p": "Koreyaning standart vaqti 135° sharqiy uzunlikka asoslangan. Seulning uzunligi taxminan 127° bo'lib, bu taxminan 8° g'arbda, natijada quyosh o'zining zenitiga kechroq yetib boradi — soat bo'yicha tushlik payti, Seulda quyosh hali ham zenitidan oldinda. Bu farq taxminan **32 daqiqa**."
          }
        ]
      },
      {
        "kind": "note",
        "title": "32 daqiqa soat ustunini bir joyga o'zgartiradi",
        "blocks": [
          {
            "p": "Saju da vaqt ikki soatlik birliklarga bo'linadi. Chegaraga yaqin tug'ilganlar 32 daqiqa farqi bilan soat ustuni to'liq o'zgaradi — aynan shu chegarada bo'lganlar uchun tuzatishlar zarur."
          }
        ]
      },
      {
        "title": "Nima uchun tug'ilgan joyingizni so'raymiz",
        "blocks": [
          {
            "p": "Agar uzunlik farq qilsa, tuzatish miqdori ham farq qiladi. Agar Seulga asoslangan tuzatishni chet elda tug'ilgan kishiga qo'llasangiz, soat ustuni sezilarli darajada noto'g'ri bo'ladi. Shuning uchun, kirish ekranida tug'ilgan joyingizni tanlashingiz so'raladi va hisoblashlar o'sha shaharning uzunligi va standart vaqtiga asoslanib amalga oshiriladi. Hozirda ro'yxatda {cityCount} joy mavjud."
          },
          {
            "p": "Bir xil mamlakat ichida ham, sezilarli darajada farq qiluvchi uzunliklarga ega joylar (masalan, Amerika Qo'shma Shtatlari, Rossiya, Indoneziya va boshqalar) shaharlar bo'yicha bo'lingan. **15° uzunlik bir soat ustuniga teng**."
          },
          {
            "p": "Agar siz tanlamasangiz, hisoblashlar Seulga asoslangan holda amalga oshiriladi. Ko'p tug'ilishlar ichki mamlakatda bo'ladi, shuning uchun bu kam xato qiladi, lekin agar siz chet elda tug'ilgan bo'lsangiz, iltimos, tanlashni unutmang."
          }
        ]
      },
      {
        "title": "Standart vaqt o'tmishda bir necha marta o'zgargan",
        "blocks": [
          {
            "p": "Tuzatishni oddiygina \"uzunlik farqi ÷ 15° × 60 daqiqa\" sifatida hisoblash mumkin emasligi uchun sabab bor. Standart vaqt o'z davrlarida farq qilgan."
          },
          {
            "table": {
              "caption": "Koreyaning standart vaqtidagi o'zgarishlar — ushbu davrda tug'ilganlar oddiy hisoblashlar bilan mos kelmaydi",
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
                  "Yozgi vaqtni tejash joriy etilgan"
                ]
              ]
            }
          },
          {
            "p": "Saju-Link standart meridianni doimiy qiymat sifatida belgilamaydi, balki tug'ilgan joyning **IANA vaqt zonasiga** asoslangan holda o'sha paytdagi haqiqiy standart vaqtni hisoblaydi. Yozgi vaqt va o'tmish standart vaqtlar avtomatik ravishda aks ettiriladi."
          }
        ]
      },
      {
        "title": "Yarim tunda tug'ilganlar sanani ham hisobga oladi",
        "blocks": [
          {
            "p": "Tuzatish -32 daqiqa bo'lgani uchun, soat bo'yicha 00:00 dan 00:32 gacha tug'ilganlar haqiqiy quyosh vaqtida **oldingi kun soat 11 da** bo'ladi. Agar faqat vaqt orqaga o'zgartirilsa va sana o'zgarmasa, bu kun ustunini (日柱) \"oldingi kun soat 11 da\" deb yozadi."
          },
          {
            "p": "Saju-Link bu holatda sanani ham tuzatadi. Kun ustunidan yuqoridagi belgi kun ustuni (日干) bo'lib, o'zimni ko'rsatadi, shuning uchun agar bu noto'g'ri bo'lsa, talqinning deyarli barcha elementlari noto'g'ri bo'ladi."
          }
        ]
      },
      {
        "title": "Vaqtni bilishingiz shart emas",
        "blocks": [
          {
            "p": "Tug'ilish vaqti ixtiyoriydir. Agar siz bilmasangiz, hisoblashlar soat ustunisiz amalga oshiriladi va bu haqda natijalar ekranida ko'rsatiladi. Bu esa sakkizta belgi ichidan ikkita yo'qolganligini anglatadi, shuning uchun bu besh elementlarning kuchi va zaifligini baholashga ta'sir qiladi, agar bilsangiz, uni kiritish aniqroq bo'ladi."
          },
          {
            "p": "Yil ustuni (zodiak hayvoni) har doim bir xil bo'ladi — [chunki biz faqat yil ustuniga qaraymiz](/guide/zodiac)."
          }
        ]
      }
    ]
  },
  "guide/no-storage": {
    "eyebrow": "Shaxsiy Ma'lumotlar",
    "title": "Kiritilgan ma'lumotlarni saqlamaydigan usul",
    "summary": "Tug'ilgan sana hech qayerda yozilmasligini texnik jihatdan qanday anglatishini va natija havolasida nima borligini aniqlaydi.",
    "backLabel": "Hisoblash Asosi",
    "sections": [
      {
        "title": "A'zolik ro'yxatdan o'tkazish yo'q",
        "blocks": [
          {
            "p": "Saju-Link hisoblar yaratmaydi. U ism, elektron pochta yoki telefon raqamlarini to'playdi. Yagona to'plangan ma'lumot tug'ilgan sana va (ixtiyoriy) tug'ilish vaqti, tug'ilgan joy va jinsdir, va bu ma'lumot hisoblash tugagach qolmaydi."
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
            "p": "**#** dan keyin keladiganlar kiritilgan qiymatlardir. Bu qism **fragment** deb ataladi, bu esa **brauzer serverga yubormaydigan qismdir**. Bu standart veb xulq-atvori va biz yaratgan qoidalar emas — aslida hujjat ichidagi joylashuvni ko'rsatish uchun mo'ljallangan, shuning uchun serverga uni ko'rish zarurati yo'q."
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
            "p": "Serverda saqlanmasligi havolaning xavfsiz ekanligini anglatmaydi. Natija havolasi ikki shaxsning tug'ilgan sanalarini o'z ichiga oladi, shuning uchun ushbu havolani olgan kishi bir xil natijani ko'rishi mumkin."
          }
        ]
      },
      {
        "title": "Nima uchun hisoblash serverda amalga oshiriladi, lekin saqlanmaydi?",
        "blocks": [
          {
            "p": "Hisoblash o'zida serverda amalga oshiriladi. Saju ni yaratish uchun lunisolar almanax jadvali kerak, va bu jadval brauzerga yuborish uchun juda katta. Biroq, **so'rovni qayta ishlagandan so'ng, biz o'sha qiymatni hech joyda ishlatmaymiz.** Uni ma'lumotlar bazasiga kiritish uchun hech qanday kod yo'q."
          },
          {
            "p": "Ishlash uchun zarur bo'lgan minimal yozuvlar saqlanadi — bir xil shaxsning qisqa vaqt ichida juda ko'p so'rov yuborishini oldini olish uchun hisoblagich. Bu tug'ilgan sanani o'z ichiga olmaydi va kirish IP saqlanmaydi. Faqat bir qiymat tug'ilgan sana bilan hash qilingan holda hisoblanadi va bu qiymat kun o'zgarganda o'zgaradi."
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
              "**O'tmish natijalarini qaytarib ololmaysiz.** Ularni yana ko'rish uchun havolaga ega bo'lishingiz kerak.",
              "**Bir xil qiymatlar qayta hisoblanadi.** Kesh yo'q. Biroq, barcha qoidalar deterministik bo'lgani uchun, [bir xil kiritish har doim bir xil qiymatni beradi](/guide/natal-chart).",
              "**Yangilash reklama eshigini qaytaradi.** Bu ko'rish tarixini qoldirish joyi yo'qligi sababli."
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
            "p": "Qo'shimcha ma'lumotlar uchun iltimos, bizning [Maxfiylik Siyosatimiz](/privacy) ga murojaat qiling."
          }
        ]
      }
    ]
  },
  "guide/reports": {
    "eyebrow": "To'langan mahsulotlar",
    "title": "To'langan hisobotda nimalar mavjud",
    "summary": "Bu PDFga nimalar qo'shilgani haqida ma'lumot beradi, ekran o'zgarmaydi. Qiymatlar va mazmun haqiqiy mahsulot sozlamalaridan olinadi.",
    "backLabel": "Hisoblash asoslari",
    "sections": [
      {
        "title": "Ekranni o'zgartirmasdan, faqat PDFga qo'shildi",
        "blocks": [
          {
            "p": "Saju hisoblash va natijalarni so'rash **bepul**. Siz ekranda, shu jumladan, tug'ilgan xarita, besh element, bugungi taqdir va ularning asoslarini ko'rishingiz mumkin, chunki to'langan hisobotni yaratishda hech narsa chiqarib tashlanmagan."
          },
          {
            "p": "Hisobotning roli **ekranda mavjud bo'lmagan qatlamlarni qo'shishdir**. Ushbu qatlamlar ixtiro qilinmagan; ular ball berish jarayonida allaqachon hisoblangan qiymatlardir, lekin ekranda ishlatilmagan."
          }
        ]
      },
      {
        "title": "Umr bo'yi saju va bu yilning taqdir hisobot PDFi — {priceDomestic}",
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
            "p": "Mundarija to'g'ridan-to'g'ri mahsulot tavsifidan o'qiladi. **Sahifalar soni haqiqiy hujjat bilan bir xil** — bu mahsulot ma'lumotlari e'lonida ko'rsatilgan qiymatdir."
          }
        ]
      },
      {
        "title": "Ekranda nima yo'q",
        "blocks": [
          {
            "p": "Bepul ekran tug'ilgan xarita, besh element va bugungi taqdirni ko'rsatadi. Hisoblash jarayonida ishlab chiqarilgan uchta qiymat mavjud, lekin ular ekranda ko'rsatilmaydi, va bu to'langan hisobotning qismlaridir."
          },
          {
            "ul": [
              "**Kun ustunining do'stlari nisbati** — Bu kuchli yoki zaif kun ustuni haqida qaysi hukm chiqarilganini raqamli ko'rsatadi. Faqat hukm nomi uning qirralarda yoki keng ekanligini ko'rsatmaydi.",
              "**Wang Sang Hyu Su Sa** — Tug'ilgan oy har bir energiyani qanchalik ko'targanini ko'rsatadi. Agar kuch barometri 'qanchalik mavjud' bo'lsa, bu jadval 'mavsumda bormi' ni ko'rsatadi.",
              "**Haqiqiy quyosh vaqti tuzatish tafsilotlari** — Konseptsiyasi yo'riqnoma hujjatida mavjud, lekin **'sizning holatingizda necha daqiqa o'zgartirilgan'** har bir inson uchun turlicha qiymatdir, shuning uchun faqat hisobotda kiritilgan."
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
            "p": "Shuning uchun, **to'lovdan so'ng faylni darhol saqlang.** Siz bir xil buyurtma bilan besh marta qabul qilishingiz mumkin, lekin natija ekranidan chiqib ketganingizda va kiritilgan qiymatlar yo'qolsa, uni qayta yaratish mumkin emas."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Hisobotlar ham ma'lumot manbai sifatida",
        "blocks": [
          {
            "p": "Sahifalar soni oshgani uchun xulosalar yanada aniqroq degani emas. Hisobot qo'shadigan narsa **bir xil hisoblash asosidir**, kuchliroq da'vo emas. Taqdir - bu xulosalar amaliyotchiga qarab o'zgarishi mumkin bo'lgan soha, va ushbu xizmat faqat qoidalar bilan tarjima qilinadigan narsalarni hisoblaydi."
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
    "summary": "Bu foydalanish, qaytarish, shaxsiy ma'lumotlar so'rovlari va xato xabarlarini, shuningdek, biznes ma'lumotlarini so'rash uchun kanal.",
    "backLabel": "Boshiga qaytish",
    "sections": [
      {
        "title": "Email orqali aloqa",
        "blocks": [
          {
            "p": "Iltimos, so'rovlarni **{email}** ga yuboring. Biz 2 ish kuni ichida javob beramiz. To'lov va qaytarish so'rovlari uchun, iltimos, tezroq tasdiqlash uchun **buyurtma raqamini yoki to'lovda ishlatilgan emailni** qo'shing."
          },
          {
            "p": "Telefon orqali so'rovlar {customerCenter} da qabul qilinadi."
          }
        ]
      },
      {
        "title": "Ushbu kanalda nimalar yuborilishi mumkin",
        "blocks": [
          {
            "ul": [
              "**To'lov va qaytarish** — Agar hujjat yaratilmagan bo'lsa yoki to'lov miqdori buyurtmadan farq qilsa, to'liq qaytarish taqdim etiladi. Shartlar [Qaytarish Siyosati](/refund-policy) da.",
              "**Shaxsiy ma'lumotlar** — Biz ko'rish, tuzatish va o'chirish so'rovlarini qabul qilamiz. Qayta ishlash siyosati [Maxfiylik Siyosati](/privacy) da.",
              "**Hisoblash xato xabari** — Agar saju tug'ilgan xaritasi yoki ballari g'alati ko'rinsa, iltimos, bizga xabar bering. Agar siz tug'ilgan sana va vaqtni kiritganingizni qo'shsangiz, biz bir xil qiymatlar bilan qayta hisoblashimiz mumkin."
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
            "p": "So'rov emailida tug'ilgan sana va vaqtni kiritish shart emas. Biz kiritilganlarni saqlamaymiz, shuning uchun keyinchalik ularni qaytarib olishimiz mumkin emas, va tasdiqlanishi kerak bo'lgan narsa buyurtma raqami bilan yetarli. Faqat qiymatlar mutlaqo zarur bo'lsa, masalan, hisoblash xato xabari kabi, uni qo'shing."
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
  "intro": "Narxlar va shartlar kabi foydalanish shartlariga ta'sir qiluvchi o'zgarishlar amalga oshirilishidan oldin bu yerda e'lon qilinadi. Ekran tezligini oshirish kabi ichki yaxshilanishlar bu yerda e'lon qilinmaydi: bu yerda faqat sizga kerak bo'lgan ma'lumotlar ko'rsatiladi.",
  "empty": {
    "title": "Hech qanday e'lon joylashtirilmagan.",
    "body": "Agar sizga ma'lum qilish kerak bo'lgan o'zgarishlar bo'lsa, ular bu yerda e'lon qilinadi."
  },
  "effective": "Amalga oshiriladi {date} dan",
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
        "Agar siz ekraningizni arab yoki Khmer tilida ko'rayotgan bo'lsangiz, xarid qilgan PDF hisobotingiz ingliz tilida tayyorlanadi. Bu, ushbu ikki yozuvni paragraflarga formatlash uchun vosita hali tayyor emasligi sababli.",
        "Siz hali ham ekran ko'rinishini ko'rishingiz mumkin va hisobotda yozilgan ism siz kiritganidek bo'ladi.",
        "Bir xil ma'lumotlar to'lov ekranida ham oldindan taqdim etiladi. Ushbu yozuvlarni qo'llab-quvvatlaydigan vosita tayyor bo'lganda, biz bu yerda sizni xabardor qilamiz."
      ]
    },
    "2026-08-01-engine-version": {
      "title": "Hisoblash mezonlari natijalar bilan birga kiritiladi.",
      "body": [
        "Natijalar ekranidan va hisobotdan pastda, hisoblash mezonlari (masalan, sajulink-natal-v1) ko'rsatiladi. Agar kiritish bir xil bo'lsa, bir xil mezonlar ostida har doim bir xil qiymat chiqadi.",
        "Agar myeongri ni talqin qilish qoidalari o'zgartirilsa va ballar farq qilishi mumkin bo'lsa, biz avval bu haqda va amal qilish sanasini bu yerda joylashtiramiz. Bu, oldin olgan natija havolalaringizdagi raqamlar o'zgarishi mumkinligi sababli.",
        "Hozirgi mezon v10, to'lov esa hali tayyorlanmoqda."
      ]
    }
  }
} satisfies NoticeCopy;
