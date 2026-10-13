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
        "blocks": [
          {
            "p": "Saju tug'ilgan yilingiz, oyingiz, kuningiz va soatingizni ikkitadan xitoy belgisi bilan, jami sakkiz belgi qilib yozadi. Har bir juftning yuqori belgisi **heavenly stem**, pastki belgisi **earthly branch** deb ataladi, tug'ilgan kuningizning ikki belgisi esa **kun ustuni** deyiladi. Agar bu so'zlar sizga yangi bo'lsa, [Heavenly stems, earthly branches va kun ustuni — belgilarni qanday o'qish kerak](/guide/saju-letters) maqolasidan boshlang."
          },
          {
            "ul": [
              "**Heavenly stems** — Sajuning yuqoridagi o'nta belgisi. Har bir belgining o'z elementi va qutbi aniq belgilangan, tug'ilgan kuningizning stemi esa sizni ko'rsatadigan day stemdir.",
              "**Earthly branches** — Sajuning pastdagi o'n ikkita belgisi, zodiak hayvonlari bilan bir xil belgilar. Har bir branch ichida hidden stems saqlaydi.",
              "**Kun ustunlari** — tug'ilgan kuningizning stemi va branchi hosil qilgan juftlik. Bunday juftliklar 甲子 dan 癸亥 gacha jami 60 ta bo'lib, har birining o'z maqolasi bor. Ularni pastdagi yig'ilgan ro'yxatlardan topasiz."
            ]
          }
        ]
      },
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
  "guide/stem-gap": {
    "eyebrow": "Heavenly stems",
    "title": "Yang Yog'och (甲) — Yog'och, Yang",
    "summary": "Heavenly stem 甲 haqida: uning elementi va qutbi, boshqa to'qqiz stemni qanday o'qishi (Ten Gods) va qaysi earthly branches uni ushlab turishi — Saju-Link hisoblash qoidalarida qanday bo'lsa, aynan shunday keltirilgan.",
    "backLabel": "Hisoblash asosi",
    "sections": [
      {
        "title": "Yang Yog'och (甲) — o'nta heavenly stemning birinchisi",
        "blocks": [
          {
            "p": "甲 — o'nta heavenly stemning birinchisi. Uning elementi — Yog'och, qutbi — Yang. Saju-Link day stemi 甲 bo'lgan insonni \"Yang Yog'och (甲)\" deb ataydi."
          },
          {
            "p": "Natija ekrani bu day stem uchun quyidagi satrni ko'rsatadi: “Tik o'sadigan baland daraxt. Yo'nalish belgilangach chayqalmaydi va egilishdan ko'ra chidashni tanlaydi.” Bu satrning quyidagi jadval yoki ballar bilan aloqasi yo'q."
          }
        ]
      },
      {
        "title": "Boshqa stemlarni qanday o'qishi (Ten Gods)",
        "blocks": [
          {
            "p": "Day stem 甲 bo'lganda, o'n stemning har biri quyidagicha o'qiladi. O'qishning yo'nalishi bor: bu 甲 boshqa stemni qanday o'qishidir, boshqa stem tomonidan 甲 o'qilsa, boshqa nom chiqishi mumkin."
          },
          {
            "table": {
              "caption": "Day stem Yang Yog'och (甲) bo'lganda Ten Gods",
              "head": [
                "Boshqa stem",
                "Element va qutb",
                "Ten God nomi"
              ],
              "rows": [
                [
                  "Yang Yog'och (甲)",
                  "Yog'och Yang",
                  "Hamroh (比肩)"
                ],
                [
                  "Yin Yog'och (乙)",
                  "Yog'och Yin",
                  "Raqib (劫財)"
                ],
                [
                  "Yang Olov (丙)",
                  "Olov Yang",
                  "Ifoda (食神)"
                ],
                [
                  "Yin Olov (丁)",
                  "Olov Yin",
                  "Buzuvchi (傷官)"
                ],
                [
                  "Yang Tuproq (戊)",
                  "Tuproq Yang",
                  "Kutilmagan boylik (偏財)"
                ],
                [
                  "Yin Tuproq (己)",
                  "Tuproq Yin",
                  "Barqaror boylik (正財)"
                ],
                [
                  "Yang Metall (庚)",
                  "Metall Yang",
                  "Sinovchi (偏官)"
                ],
                [
                  "Yin Metall (辛)",
                  "Metall Yin",
                  "Nufuz (正官)"
                ],
                [
                  "Yang Suv (壬)",
                  "Suv Yang",
                  "Noodatiy tayanch (偏印)"
                ],
                [
                  "Yin Suv (癸)",
                  "Suv Yin",
                  "G'amxo'rlik (正印)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Turmush o'rtog'i pozitsiyasi sifatida o'qiladigan stemlar",
        "blocks": [
          {
            "p": "An'anaviy myeongri turmush o'rtog'i pozitsiyasini erkaklar uchun Barqaror boylik (正財), ayollar uchun Nufuz (正官) deb o'qiydi. Day stem 甲 bo'lganda, Barqaror boylik — 己, Nufuz — 辛. Jinsingizni ko'rsatmasangiz, bu pozitsiya o'qilmaydi."
          }
        ]
      },
      {
        "title": "Stem 甲 joylashgan earthly branches",
        "blocks": [
          {
            "p": "Stem 甲 earthly branches ichida qayerda yashirinib turishi (hidden stems). Ulush — shu branchning o'ttiz kunidan stem 甲 egallaydigan qismi."
          },
          {
            "table": {
              "caption": "Stem 甲 joylashgan earthly branches",
              "head": [
                "Branch",
                "Hayvon",
                "Pozitsiya",
                "Ulush"
              ],
              "rows": [
                [
                  "寅",
                  "Yo'lbars",
                  "asosiy (本氣)",
                  "{hidInBon}"
                ],
                [
                  "卯",
                  "Quyon",
                  "qoldiq (餘氣)",
                  "{hidMyoYeo}"
                ],
                [
                  "亥",
                  "Cho'chqa",
                  "o'rta (中氣)",
                  "{hidHaeJung}"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bu qo'llanma nimani aytmaydi",
        "blocks": [
          {
            "ul": [
              "Bitta stem insonni belgilab bermaydi. Saju sakkiz belgining o'zaro munosabatidan o'qiladi.",
              "Ten Gods — day stemdan chiqariladigan hukm. Bir xil ikki belgi qaysi biri day stem ekanligiga qarab boshqa nom oladi."
            ]
          },
          {
            "p": "To'liq Ten Gods [Ten Gods qo'llanmasi](/guide/ten-gods) da, element kuchlari va oy belgisi esa [besh element qo'llanmasi](/guide/five-elements) da keltirilgan. Boshqa stemlar: [Yin Yog'och (乙)](/guide/stem-eul) · [Yang Olov (丙)](/guide/stem-byeong) · [Yin Olov (丁)](/guide/stem-jeong) · [Yang Tuproq (戊)](/guide/stem-mu) · [Yin Tuproq (己)](/guide/stem-gi) · [Yang Metall (庚)](/guide/stem-gyeong) · [Yin Metall (辛)](/guide/stem-sin) · [Yang Suv (壬)](/guide/stem-im) · [Yin Suv (癸)](/guide/stem-gye)"
          }
        ]
      }
    ]
  },

  "guide/stem-eul": {
    "eyebrow": "Heavenly stems",
    "title": "Yin Yog'och (乙) — Yog'och, Yin",
    "summary": "Heavenly stem 乙 haqida: uning elementi va qutbi, boshqa to'qqiz stemni qanday o'qishi (Ten Gods) va qaysi earthly branches uni ushlab turishi — Saju-Link hisoblash qoidalarida qanday bo'lsa, aynan shunday keltirilgan.",
    "backLabel": "Hisoblash asosi",
    "sections": [
      {
        "title": "Yin Yog'och (乙) — o'nta heavenly stemning ikkinchisi",
        "blocks": [
          {
            "p": "乙 — o'nta heavenly stemning ikkinchisi. Uning elementi — Yog'och, qutbi — Yin. Saju-Link day stemi 乙 bo'lgan insonni \"Yin Yog'och (乙)\" deb ataydi."
          },
          {
            "p": "Natija ekrani bu day stem uchun quyidagi satrni ko'rsatadi: “Chirmovuq kabi egiluvchan o't. Sharoitga qarab egiladi-yu, oldinga yuraveradi va uzilmaydi.” Bu satrning quyidagi jadval yoki ballar bilan aloqasi yo'q."
          }
        ]
      },
      {
        "title": "Boshqa stemlarni qanday o'qishi (Ten Gods)",
        "blocks": [
          {
            "p": "Day stem 乙 bo'lganda, o'n stemning har biri quyidagicha o'qiladi. O'qishning yo'nalishi bor: bu 乙 boshqa stemni qanday o'qishidir, boshqa stem tomonidan 乙 o'qilsa, boshqa nom chiqishi mumkin."
          },
          {
            "table": {
              "caption": "Day stem Yin Yog'och (乙) bo'lganda Ten Gods",
              "head": [
                "Boshqa stem",
                "Element va qutb",
                "Ten God nomi"
              ],
              "rows": [
                [
                  "Yang Yog'och (甲)",
                  "Yog'och Yang",
                  "Raqib (劫財)"
                ],
                [
                  "Yin Yog'och (乙)",
                  "Yog'och Yin",
                  "Hamroh (比肩)"
                ],
                [
                  "Yang Olov (丙)",
                  "Olov Yang",
                  "Buzuvchi (傷官)"
                ],
                [
                  "Yin Olov (丁)",
                  "Olov Yin",
                  "Ifoda (食神)"
                ],
                [
                  "Yang Tuproq (戊)",
                  "Tuproq Yang",
                  "Barqaror boylik (正財)"
                ],
                [
                  "Yin Tuproq (己)",
                  "Tuproq Yin",
                  "Kutilmagan boylik (偏財)"
                ],
                [
                  "Yang Metall (庚)",
                  "Metall Yang",
                  "Nufuz (正官)"
                ],
                [
                  "Yin Metall (辛)",
                  "Metall Yin",
                  "Sinovchi (偏官)"
                ],
                [
                  "Yang Suv (壬)",
                  "Suv Yang",
                  "G'amxo'rlik (正印)"
                ],
                [
                  "Yin Suv (癸)",
                  "Suv Yin",
                  "Noodatiy tayanch (偏印)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Turmush o'rtog'i pozitsiyasi sifatida o'qiladigan stemlar",
        "blocks": [
          {
            "p": "An'anaviy myeongri turmush o'rtog'i pozitsiyasini erkaklar uchun Barqaror boylik (正財), ayollar uchun Nufuz (正官) deb o'qiydi. Day stem 乙 bo'lganda, Barqaror boylik — 戊, Nufuz — 庚. Jinsingizni ko'rsatmasangiz, bu pozitsiya o'qilmaydi."
          }
        ]
      },
      {
        "title": "Stem 乙 joylashgan earthly branches",
        "blocks": [
          {
            "p": "Stem 乙 earthly branches ichida qayerda yashirinib turishi (hidden stems). Ulush — shu branchning o'ttiz kunidan stem 乙 egallaydigan qismi."
          },
          {
            "table": {
              "caption": "Stem 乙 joylashgan earthly branches",
              "head": [
                "Branch",
                "Hayvon",
                "Pozitsiya",
                "Ulush"
              ],
              "rows": [
                [
                  "卯",
                  "Quyon",
                  "asosiy (本氣)",
                  "{hidMyoBon}"
                ],
                [
                  "辰",
                  "Ajdar",
                  "qoldiq (餘氣)",
                  "{hidJinYeo}"
                ],
                [
                  "未",
                  "Qo'y",
                  "o'rta (中氣)",
                  "{hidMiJung}"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bu qo'llanma nimani aytmaydi",
        "blocks": [
          {
            "ul": [
              "Bitta stem insonni belgilab bermaydi. Saju sakkiz belgining o'zaro munosabatidan o'qiladi.",
              "Ten Gods — day stemdan chiqariladigan hukm. Bir xil ikki belgi qaysi biri day stem ekanligiga qarab boshqa nom oladi."
            ]
          },
          {
            "p": "To'liq Ten Gods [Ten Gods qo'llanmasi](/guide/ten-gods) da, element kuchlari va oy belgisi esa [besh element qo'llanmasi](/guide/five-elements) da keltirilgan. Boshqa stemlar: [Yang Yog'och (甲)](/guide/stem-gap) · [Yang Olov (丙)](/guide/stem-byeong) · [Yin Olov (丁)](/guide/stem-jeong) · [Yang Tuproq (戊)](/guide/stem-mu) · [Yin Tuproq (己)](/guide/stem-gi) · [Yang Metall (庚)](/guide/stem-gyeong) · [Yin Metall (辛)](/guide/stem-sin) · [Yang Suv (壬)](/guide/stem-im) · [Yin Suv (癸)](/guide/stem-gye)"
          }
        ]
      }
    ]
  },

  "guide/stem-byeong": {
    "eyebrow": "Heavenly stems",
    "title": "Yang Olov (丙) — Olov, Yang",
    "summary": "Heavenly stem 丙 haqida: uning elementi va qutbi, boshqa to'qqiz stemni qanday o'qishi (Ten Gods) va qaysi earthly branches uni ushlab turishi — Saju-Link hisoblash qoidalarida qanday bo'lsa, aynan shunday keltirilgan.",
    "backLabel": "Hisoblash asosi",
    "sections": [
      {
        "title": "Yang Olov (丙) — o'nta heavenly stemning uchinchisi",
        "blocks": [
          {
            "p": "丙 — o'nta heavenly stemning uchinchisi. Uning elementi — Olov, qutbi — Yang. Saju-Link day stemi 丙 bo'lgan insonni \"Yang Olov (丙)\" deb ataydi."
          },
          {
            "p": "Natija ekrani bu day stem uchun quyidagi satrni ko'rsatadi: “Tush paytidagi quyosh. Hissiyot ochiq ko'rinadi, atrof yorishadi, oldinga chiqish tabiiy keladi.” Bu satrning quyidagi jadval yoki ballar bilan aloqasi yo'q."
          }
        ]
      },
      {
        "title": "Boshqa stemlarni qanday o'qishi (Ten Gods)",
        "blocks": [
          {
            "p": "Day stem 丙 bo'lganda, o'n stemning har biri quyidagicha o'qiladi. O'qishning yo'nalishi bor: bu 丙 boshqa stemni qanday o'qishidir, boshqa stem tomonidan 丙 o'qilsa, boshqa nom chiqishi mumkin."
          },
          {
            "table": {
              "caption": "Day stem Yang Olov (丙) bo'lganda Ten Gods",
              "head": [
                "Boshqa stem",
                "Element va qutb",
                "Ten God nomi"
              ],
              "rows": [
                [
                  "Yang Yog'och (甲)",
                  "Yog'och Yang",
                  "Noodatiy tayanch (偏印)"
                ],
                [
                  "Yin Yog'och (乙)",
                  "Yog'och Yin",
                  "G'amxo'rlik (正印)"
                ],
                [
                  "Yang Olov (丙)",
                  "Olov Yang",
                  "Hamroh (比肩)"
                ],
                [
                  "Yin Olov (丁)",
                  "Olov Yin",
                  "Raqib (劫財)"
                ],
                [
                  "Yang Tuproq (戊)",
                  "Tuproq Yang",
                  "Ifoda (食神)"
                ],
                [
                  "Yin Tuproq (己)",
                  "Tuproq Yin",
                  "Buzuvchi (傷官)"
                ],
                [
                  "Yang Metall (庚)",
                  "Metall Yang",
                  "Kutilmagan boylik (偏財)"
                ],
                [
                  "Yin Metall (辛)",
                  "Metall Yin",
                  "Barqaror boylik (正財)"
                ],
                [
                  "Yang Suv (壬)",
                  "Suv Yang",
                  "Sinovchi (偏官)"
                ],
                [
                  "Yin Suv (癸)",
                  "Suv Yin",
                  "Nufuz (正官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Turmush o'rtog'i pozitsiyasi sifatida o'qiladigan stemlar",
        "blocks": [
          {
            "p": "An'anaviy myeongri turmush o'rtog'i pozitsiyasini erkaklar uchun Barqaror boylik (正財), ayollar uchun Nufuz (正官) deb o'qiydi. Day stem 丙 bo'lganda, Barqaror boylik — 辛, Nufuz — 癸. Jinsingizni ko'rsatmasangiz, bu pozitsiya o'qilmaydi."
          }
        ]
      },
      {
        "title": "Stem 丙 joylashgan earthly branches",
        "blocks": [
          {
            "p": "Stem 丙 earthly branches ichida qayerda yashirinib turishi (hidden stems). Ulush — shu branchning o'ttiz kunidan stem 丙 egallaydigan qismi."
          },
          {
            "table": {
              "caption": "Stem 丙 joylashgan earthly branches",
              "head": [
                "Branch",
                "Hayvon",
                "Pozitsiya",
                "Ulush"
              ],
              "rows": [
                [
                  "寅",
                  "Yo'lbars",
                  "o'rta (中氣)",
                  "{hidInJung}"
                ],
                [
                  "巳",
                  "Ilon",
                  "asosiy (本氣)",
                  "{hidSaBon}"
                ],
                [
                  "午",
                  "Ot",
                  "qoldiq (餘氣)",
                  "{hidOYeo}"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bu qo'llanma nimani aytmaydi",
        "blocks": [
          {
            "ul": [
              "Bitta stem insonni belgilab bermaydi. Saju sakkiz belgining o'zaro munosabatidan o'qiladi.",
              "Ten Gods — day stemdan chiqariladigan hukm. Bir xil ikki belgi qaysi biri day stem ekanligiga qarab boshqa nom oladi."
            ]
          },
          {
            "p": "To'liq Ten Gods [Ten Gods qo'llanmasi](/guide/ten-gods) da, element kuchlari va oy belgisi esa [besh element qo'llanmasi](/guide/five-elements) da keltirilgan. Boshqa stemlar: [Yang Yog'och (甲)](/guide/stem-gap) · [Yin Yog'och (乙)](/guide/stem-eul) · [Yin Olov (丁)](/guide/stem-jeong) · [Yang Tuproq (戊)](/guide/stem-mu) · [Yin Tuproq (己)](/guide/stem-gi) · [Yang Metall (庚)](/guide/stem-gyeong) · [Yin Metall (辛)](/guide/stem-sin) · [Yang Suv (壬)](/guide/stem-im) · [Yin Suv (癸)](/guide/stem-gye)"
          }
        ]
      }
    ]
  },

  "guide/stem-jeong": {
    "eyebrow": "Heavenly stems",
    "title": "Yin Olov (丁) — Olov, Yin",
    "summary": "Heavenly stem 丁 haqida: uning elementi va qutbi, boshqa to'qqiz stemni qanday o'qishi (Ten Gods) va qaysi earthly branches uni ushlab turishi — Saju-Link hisoblash qoidalarida qanday bo'lsa, aynan shunday keltirilgan.",
    "backLabel": "Hisoblash asosi",
    "sections": [
      {
        "title": "Yin Olov (丁) — o'nta heavenly stemning to'rtinchisi",
        "blocks": [
          {
            "p": "丁 — o'nta heavenly stemning to'rtinchisi. Uning elementi — Olov, qutbi — Yin. Saju-Link day stemi 丁 bo'lgan insonni \"Yin Olov (丁)\" deb ataydi."
          },
          {
            "p": "Natija ekrani bu day stem uchun quyidagi satrni ko'rsatadi: “Sham va chiroq yorug'i. Sokin va uzoq yonadi, avvalo eng yaqinlarini isitadi.” Bu satrning quyidagi jadval yoki ballar bilan aloqasi yo'q."
          }
        ]
      },
      {
        "title": "Boshqa stemlarni qanday o'qishi (Ten Gods)",
        "blocks": [
          {
            "p": "Day stem 丁 bo'lganda, o'n stemning har biri quyidagicha o'qiladi. O'qishning yo'nalishi bor: bu 丁 boshqa stemni qanday o'qishidir, boshqa stem tomonidan 丁 o'qilsa, boshqa nom chiqishi mumkin."
          },
          {
            "table": {
              "caption": "Day stem Yin Olov (丁) bo'lganda Ten Gods",
              "head": [
                "Boshqa stem",
                "Element va qutb",
                "Ten God nomi"
              ],
              "rows": [
                [
                  "Yang Yog'och (甲)",
                  "Yog'och Yang",
                  "G'amxo'rlik (正印)"
                ],
                [
                  "Yin Yog'och (乙)",
                  "Yog'och Yin",
                  "Noodatiy tayanch (偏印)"
                ],
                [
                  "Yang Olov (丙)",
                  "Olov Yang",
                  "Raqib (劫財)"
                ],
                [
                  "Yin Olov (丁)",
                  "Olov Yin",
                  "Hamroh (比肩)"
                ],
                [
                  "Yang Tuproq (戊)",
                  "Tuproq Yang",
                  "Buzuvchi (傷官)"
                ],
                [
                  "Yin Tuproq (己)",
                  "Tuproq Yin",
                  "Ifoda (食神)"
                ],
                [
                  "Yang Metall (庚)",
                  "Metall Yang",
                  "Barqaror boylik (正財)"
                ],
                [
                  "Yin Metall (辛)",
                  "Metall Yin",
                  "Kutilmagan boylik (偏財)"
                ],
                [
                  "Yang Suv (壬)",
                  "Suv Yang",
                  "Nufuz (正官)"
                ],
                [
                  "Yin Suv (癸)",
                  "Suv Yin",
                  "Sinovchi (偏官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Turmush o'rtog'i pozitsiyasi sifatida o'qiladigan stemlar",
        "blocks": [
          {
            "p": "An'anaviy myeongri turmush o'rtog'i pozitsiyasini erkaklar uchun Barqaror boylik (正財), ayollar uchun Nufuz (正官) deb o'qiydi. Day stem 丁 bo'lganda, Barqaror boylik — 庚, Nufuz — 壬. Jinsingizni ko'rsatmasangiz, bu pozitsiya o'qilmaydi."
          }
        ]
      },
      {
        "title": "Stem 丁 joylashgan earthly branches",
        "blocks": [
          {
            "p": "Stem 丁 earthly branches ichida qayerda yashirinib turishi (hidden stems). Ulush — shu branchning o'ttiz kunidan stem 丁 egallaydigan qismi."
          },
          {
            "table": {
              "caption": "Stem 丁 joylashgan earthly branches",
              "head": [
                "Branch",
                "Hayvon",
                "Pozitsiya",
                "Ulush"
              ],
              "rows": [
                [
                  "午",
                  "Ot",
                  "asosiy (本氣)",
                  "{hidOBon}"
                ],
                [
                  "未",
                  "Qo'y",
                  "qoldiq (餘氣)",
                  "{hidMiYeo}"
                ],
                [
                  "戌",
                  "It",
                  "o'rta (中氣)",
                  "{hidSulJung}"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bu qo'llanma nimani aytmaydi",
        "blocks": [
          {
            "ul": [
              "Bitta stem insonni belgilab bermaydi. Saju sakkiz belgining o'zaro munosabatidan o'qiladi.",
              "Ten Gods — day stemdan chiqariladigan hukm. Bir xil ikki belgi qaysi biri day stem ekanligiga qarab boshqa nom oladi."
            ]
          },
          {
            "p": "To'liq Ten Gods [Ten Gods qo'llanmasi](/guide/ten-gods) da, element kuchlari va oy belgisi esa [besh element qo'llanmasi](/guide/five-elements) da keltirilgan. Boshqa stemlar: [Yang Yog'och (甲)](/guide/stem-gap) · [Yin Yog'och (乙)](/guide/stem-eul) · [Yang Olov (丙)](/guide/stem-byeong) · [Yang Tuproq (戊)](/guide/stem-mu) · [Yin Tuproq (己)](/guide/stem-gi) · [Yang Metall (庚)](/guide/stem-gyeong) · [Yin Metall (辛)](/guide/stem-sin) · [Yang Suv (壬)](/guide/stem-im) · [Yin Suv (癸)](/guide/stem-gye)"
          }
        ]
      }
    ]
  },

  "guide/stem-mu": {
    "eyebrow": "Heavenly stems",
    "title": "Yang Tuproq (戊) — Tuproq, Yang",
    "summary": "Heavenly stem 戊 haqida: uning elementi va qutbi, boshqa to'qqiz stemni qanday o'qishi (Ten Gods) va qaysi earthly branches uni ushlab turishi — Saju-Link hisoblash qoidalarida qanday bo'lsa, aynan shunday keltirilgan.",
    "backLabel": "Hisoblash asosi",
    "sections": [
      {
        "title": "Yang Tuproq (戊) — o'nta heavenly stemning beshinchisi",
        "blocks": [
          {
            "p": "戊 — o'nta heavenly stemning beshinchisi. Uning elementi — Tuproq, qutbi — Yang. Saju-Link day stemi 戊 bo'lgan insonni \"Yang Tuproq (戊)\" deb ataydi."
          },
          {
            "p": "Natija ekrani bu day stem uchun quyidagi satrni ko'rsatadi: “Keng dala va tog'. Silkitish qiyin, suyanish oson, ammo qabul qilingan qarorni o'zgartirishga shoshmaydi.” Bu satrning quyidagi jadval yoki ballar bilan aloqasi yo'q."
          }
        ]
      },
      {
        "title": "Boshqa stemlarni qanday o'qishi (Ten Gods)",
        "blocks": [
          {
            "p": "Day stem 戊 bo'lganda, o'n stemning har biri quyidagicha o'qiladi. O'qishning yo'nalishi bor: bu 戊 boshqa stemni qanday o'qishidir, boshqa stem tomonidan 戊 o'qilsa, boshqa nom chiqishi mumkin."
          },
          {
            "table": {
              "caption": "Day stem Yang Tuproq (戊) bo'lganda Ten Gods",
              "head": [
                "Boshqa stem",
                "Element va qutb",
                "Ten God nomi"
              ],
              "rows": [
                [
                  "Yang Yog'och (甲)",
                  "Yog'och Yang",
                  "Sinovchi (偏官)"
                ],
                [
                  "Yin Yog'och (乙)",
                  "Yog'och Yin",
                  "Nufuz (正官)"
                ],
                [
                  "Yang Olov (丙)",
                  "Olov Yang",
                  "Noodatiy tayanch (偏印)"
                ],
                [
                  "Yin Olov (丁)",
                  "Olov Yin",
                  "G'amxo'rlik (正印)"
                ],
                [
                  "Yang Tuproq (戊)",
                  "Tuproq Yang",
                  "Hamroh (比肩)"
                ],
                [
                  "Yin Tuproq (己)",
                  "Tuproq Yin",
                  "Raqib (劫財)"
                ],
                [
                  "Yang Metall (庚)",
                  "Metall Yang",
                  "Ifoda (食神)"
                ],
                [
                  "Yin Metall (辛)",
                  "Metall Yin",
                  "Buzuvchi (傷官)"
                ],
                [
                  "Yang Suv (壬)",
                  "Suv Yang",
                  "Kutilmagan boylik (偏財)"
                ],
                [
                  "Yin Suv (癸)",
                  "Suv Yin",
                  "Barqaror boylik (正財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Turmush o'rtog'i pozitsiyasi sifatida o'qiladigan stemlar",
        "blocks": [
          {
            "p": "An'anaviy myeongri turmush o'rtog'i pozitsiyasini erkaklar uchun Barqaror boylik (正財), ayollar uchun Nufuz (正官) deb o'qiydi. Day stem 戊 bo'lganda, Barqaror boylik — 癸, Nufuz — 乙. Jinsingizni ko'rsatmasangiz, bu pozitsiya o'qilmaydi."
          }
        ]
      },
      {
        "title": "Stem 戊 joylashgan earthly branches",
        "blocks": [
          {
            "p": "Stem 戊 earthly branches ichida qayerda yashirinib turishi (hidden stems). Ulush — shu branchning o'ttiz kunidan stem 戊 egallaydigan qismi."
          },
          {
            "table": {
              "caption": "Stem 戊 joylashgan earthly branches",
              "head": [
                "Branch",
                "Hayvon",
                "Pozitsiya",
                "Ulush"
              ],
              "rows": [
                [
                  "寅",
                  "Yo'lbars",
                  "qoldiq (餘氣)",
                  "{hidInYeo}"
                ],
                [
                  "辰",
                  "Ajdar",
                  "asosiy (本氣)",
                  "{hidJinBon}"
                ],
                [
                  "巳",
                  "Ilon",
                  "qoldiq (餘氣)",
                  "{hidSaYeo}"
                ],
                [
                  "申",
                  "Maymun",
                  "qoldiq (餘氣)",
                  "{hidSinYeo}"
                ],
                [
                  "戌",
                  "It",
                  "asosiy (本氣)",
                  "{hidSulBon}"
                ],
                [
                  "亥",
                  "Cho'chqa",
                  "qoldiq (餘氣)",
                  "{hidHaeYeo}"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bu qo'llanma nimani aytmaydi",
        "blocks": [
          {
            "ul": [
              "Bitta stem insonni belgilab bermaydi. Saju sakkiz belgining o'zaro munosabatidan o'qiladi.",
              "Ten Gods — day stemdan chiqariladigan hukm. Bir xil ikki belgi qaysi biri day stem ekanligiga qarab boshqa nom oladi."
            ]
          },
          {
            "p": "To'liq Ten Gods [Ten Gods qo'llanmasi](/guide/ten-gods) da, element kuchlari va oy belgisi esa [besh element qo'llanmasi](/guide/five-elements) da keltirilgan. Boshqa stemlar: [Yang Yog'och (甲)](/guide/stem-gap) · [Yin Yog'och (乙)](/guide/stem-eul) · [Yang Olov (丙)](/guide/stem-byeong) · [Yin Olov (丁)](/guide/stem-jeong) · [Yin Tuproq (己)](/guide/stem-gi) · [Yang Metall (庚)](/guide/stem-gyeong) · [Yin Metall (辛)](/guide/stem-sin) · [Yang Suv (壬)](/guide/stem-im) · [Yin Suv (癸)](/guide/stem-gye)"
          }
        ]
      }
    ]
  },

  "guide/stem-gi": {
    "eyebrow": "Heavenly stems",
    "title": "Yin Tuproq (己) — Tuproq, Yin",
    "summary": "Heavenly stem 己 haqida: uning elementi va qutbi, boshqa to'qqiz stemni qanday o'qishi (Ten Gods) va qaysi earthly branches uni ushlab turishi — Saju-Link hisoblash qoidalarida qanday bo'lsa, aynan shunday keltirilgan.",
    "backLabel": "Hisoblash asosi",
    "sections": [
      {
        "title": "Yin Tuproq (己) — o'nta heavenly stemning oltinchisi",
        "blocks": [
          {
            "p": "己 — o'nta heavenly stemning oltinchisi. Uning elementi — Tuproq, qutbi — Yin. Saju-Link day stemi 己 bo'lgan insonni \"Yin Tuproq (己)\" deb ataydi."
          },
          {
            "p": "Natija ekrani bu day stem uchun quyidagi satrni ko'rsatadi: “Ekin tuprog'i. Nima kelsa qabul qilib o'stiradi, ko'z-ko'z qilishdan ko'ra parvarishga yaqin.” Bu satrning quyidagi jadval yoki ballar bilan aloqasi yo'q."
          }
        ]
      },
      {
        "title": "Boshqa stemlarni qanday o'qishi (Ten Gods)",
        "blocks": [
          {
            "p": "Day stem 己 bo'lganda, o'n stemning har biri quyidagicha o'qiladi. O'qishning yo'nalishi bor: bu 己 boshqa stemni qanday o'qishidir, boshqa stem tomonidan 己 o'qilsa, boshqa nom chiqishi mumkin."
          },
          {
            "table": {
              "caption": "Day stem Yin Tuproq (己) bo'lganda Ten Gods",
              "head": [
                "Boshqa stem",
                "Element va qutb",
                "Ten God nomi"
              ],
              "rows": [
                [
                  "Yang Yog'och (甲)",
                  "Yog'och Yang",
                  "Nufuz (正官)"
                ],
                [
                  "Yin Yog'och (乙)",
                  "Yog'och Yin",
                  "Sinovchi (偏官)"
                ],
                [
                  "Yang Olov (丙)",
                  "Olov Yang",
                  "G'amxo'rlik (正印)"
                ],
                [
                  "Yin Olov (丁)",
                  "Olov Yin",
                  "Noodatiy tayanch (偏印)"
                ],
                [
                  "Yang Tuproq (戊)",
                  "Tuproq Yang",
                  "Raqib (劫財)"
                ],
                [
                  "Yin Tuproq (己)",
                  "Tuproq Yin",
                  "Hamroh (比肩)"
                ],
                [
                  "Yang Metall (庚)",
                  "Metall Yang",
                  "Buzuvchi (傷官)"
                ],
                [
                  "Yin Metall (辛)",
                  "Metall Yin",
                  "Ifoda (食神)"
                ],
                [
                  "Yang Suv (壬)",
                  "Suv Yang",
                  "Barqaror boylik (正財)"
                ],
                [
                  "Yin Suv (癸)",
                  "Suv Yin",
                  "Kutilmagan boylik (偏財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Turmush o'rtog'i pozitsiyasi sifatida o'qiladigan stemlar",
        "blocks": [
          {
            "p": "An'anaviy myeongri turmush o'rtog'i pozitsiyasini erkaklar uchun Barqaror boylik (正財), ayollar uchun Nufuz (正官) deb o'qiydi. Day stem 己 bo'lganda, Barqaror boylik — 壬, Nufuz — 甲. Jinsingizni ko'rsatmasangiz, bu pozitsiya o'qilmaydi."
          }
        ]
      },
      {
        "title": "Stem 己 joylashgan earthly branches",
        "blocks": [
          {
            "p": "Stem 己 earthly branches ichida qayerda yashirinib turishi (hidden stems). Ulush — shu branchning o'ttiz kunidan stem 己 egallaydigan qismi."
          },
          {
            "table": {
              "caption": "Stem 己 joylashgan earthly branches",
              "head": [
                "Branch",
                "Hayvon",
                "Pozitsiya",
                "Ulush"
              ],
              "rows": [
                [
                  "丑",
                  "Sigir",
                  "asosiy (本氣)",
                  "{hidChukBon}"
                ],
                [
                  "午",
                  "Ot",
                  "o'rta (中氣)",
                  "{hidOJung}"
                ],
                [
                  "未",
                  "Qo'y",
                  "asosiy (本氣)",
                  "{hidMiBon}"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bu qo'llanma nimani aytmaydi",
        "blocks": [
          {
            "ul": [
              "Bitta stem insonni belgilab bermaydi. Saju sakkiz belgining o'zaro munosabatidan o'qiladi.",
              "Ten Gods — day stemdan chiqariladigan hukm. Bir xil ikki belgi qaysi biri day stem ekanligiga qarab boshqa nom oladi."
            ]
          },
          {
            "p": "To'liq Ten Gods [Ten Gods qo'llanmasi](/guide/ten-gods) da, element kuchlari va oy belgisi esa [besh element qo'llanmasi](/guide/five-elements) da keltirilgan. Boshqa stemlar: [Yang Yog'och (甲)](/guide/stem-gap) · [Yin Yog'och (乙)](/guide/stem-eul) · [Yang Olov (丙)](/guide/stem-byeong) · [Yin Olov (丁)](/guide/stem-jeong) · [Yang Tuproq (戊)](/guide/stem-mu) · [Yang Metall (庚)](/guide/stem-gyeong) · [Yin Metall (辛)](/guide/stem-sin) · [Yang Suv (壬)](/guide/stem-im) · [Yin Suv (癸)](/guide/stem-gye)"
          }
        ]
      }
    ]
  },

  "guide/stem-gyeong": {
    "eyebrow": "Heavenly stems",
    "title": "Yang Metall (庚) — Metall, Yang",
    "summary": "Heavenly stem 庚 haqida: uning elementi va qutbi, boshqa to'qqiz stemni qanday o'qishi (Ten Gods) va qaysi earthly branches uni ushlab turishi — Saju-Link hisoblash qoidalarida qanday bo'lsa, aynan shunday keltirilgan.",
    "backLabel": "Hisoblash asosi",
    "sections": [
      {
        "title": "Yang Metall (庚) — o'nta heavenly stemning yettinchisi",
        "blocks": [
          {
            "p": "庚 — o'nta heavenly stemning yettinchisi. Uning elementi — Metall, qutbi — Yang. Saju-Link day stemi 庚 bo'lgan insonni \"Yang Metall (庚)\" deb ataydi."
          },
          {
            "p": "Natija ekrani bu day stem uchun quyidagi satrni ko'rsatadi: “Ishlov ko'rmagan temir. Qat'iy va aniq, osilib qolgan ishlarga sabri yo'q.” Bu satrning quyidagi jadval yoki ballar bilan aloqasi yo'q."
          }
        ]
      },
      {
        "title": "Boshqa stemlarni qanday o'qishi (Ten Gods)",
        "blocks": [
          {
            "p": "Day stem 庚 bo'lganda, o'n stemning har biri quyidagicha o'qiladi. O'qishning yo'nalishi bor: bu 庚 boshqa stemni qanday o'qishidir, boshqa stem tomonidan 庚 o'qilsa, boshqa nom chiqishi mumkin."
          },
          {
            "table": {
              "caption": "Day stem Yang Metall (庚) bo'lganda Ten Gods",
              "head": [
                "Boshqa stem",
                "Element va qutb",
                "Ten God nomi"
              ],
              "rows": [
                [
                  "Yang Yog'och (甲)",
                  "Yog'och Yang",
                  "Kutilmagan boylik (偏財)"
                ],
                [
                  "Yin Yog'och (乙)",
                  "Yog'och Yin",
                  "Barqaror boylik (正財)"
                ],
                [
                  "Yang Olov (丙)",
                  "Olov Yang",
                  "Sinovchi (偏官)"
                ],
                [
                  "Yin Olov (丁)",
                  "Olov Yin",
                  "Nufuz (正官)"
                ],
                [
                  "Yang Tuproq (戊)",
                  "Tuproq Yang",
                  "Noodatiy tayanch (偏印)"
                ],
                [
                  "Yin Tuproq (己)",
                  "Tuproq Yin",
                  "G'amxo'rlik (正印)"
                ],
                [
                  "Yang Metall (庚)",
                  "Metall Yang",
                  "Hamroh (比肩)"
                ],
                [
                  "Yin Metall (辛)",
                  "Metall Yin",
                  "Raqib (劫財)"
                ],
                [
                  "Yang Suv (壬)",
                  "Suv Yang",
                  "Ifoda (食神)"
                ],
                [
                  "Yin Suv (癸)",
                  "Suv Yin",
                  "Buzuvchi (傷官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Turmush o'rtog'i pozitsiyasi sifatida o'qiladigan stemlar",
        "blocks": [
          {
            "p": "An'anaviy myeongri turmush o'rtog'i pozitsiyasini erkaklar uchun Barqaror boylik (正財), ayollar uchun Nufuz (正官) deb o'qiydi. Day stem 庚 bo'lganda, Barqaror boylik — 乙, Nufuz — 丁. Jinsingizni ko'rsatmasangiz, bu pozitsiya o'qilmaydi."
          }
        ]
      },
      {
        "title": "Stem 庚 joylashgan earthly branches",
        "blocks": [
          {
            "p": "Stem 庚 earthly branches ichida qayerda yashirinib turishi (hidden stems). Ulush — shu branchning o'ttiz kunidan stem 庚 egallaydigan qismi."
          },
          {
            "table": {
              "caption": "Stem 庚 joylashgan earthly branches",
              "head": [
                "Branch",
                "Hayvon",
                "Pozitsiya",
                "Ulush"
              ],
              "rows": [
                [
                  "巳",
                  "Ilon",
                  "o'rta (中氣)",
                  "{hidSaJung}"
                ],
                [
                  "申",
                  "Maymun",
                  "asosiy (本氣)",
                  "{hidSinBon}"
                ],
                [
                  "酉",
                  "Xo'roz",
                  "qoldiq (餘氣)",
                  "{hidYuYeo}"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bu qo'llanma nimani aytmaydi",
        "blocks": [
          {
            "ul": [
              "Bitta stem insonni belgilab bermaydi. Saju sakkiz belgining o'zaro munosabatidan o'qiladi.",
              "Ten Gods — day stemdan chiqariladigan hukm. Bir xil ikki belgi qaysi biri day stem ekanligiga qarab boshqa nom oladi."
            ]
          },
          {
            "p": "To'liq Ten Gods [Ten Gods qo'llanmasi](/guide/ten-gods) da, element kuchlari va oy belgisi esa [besh element qo'llanmasi](/guide/five-elements) da keltirilgan. Boshqa stemlar: [Yang Yog'och (甲)](/guide/stem-gap) · [Yin Yog'och (乙)](/guide/stem-eul) · [Yang Olov (丙)](/guide/stem-byeong) · [Yin Olov (丁)](/guide/stem-jeong) · [Yang Tuproq (戊)](/guide/stem-mu) · [Yin Tuproq (己)](/guide/stem-gi) · [Yin Metall (辛)](/guide/stem-sin) · [Yang Suv (壬)](/guide/stem-im) · [Yin Suv (癸)](/guide/stem-gye)"
          }
        ]
      }
    ]
  },

  "guide/stem-sin": {
    "eyebrow": "Heavenly stems",
    "title": "Yin Metall (辛) — Metall, Yin",
    "summary": "Heavenly stem 辛 haqida: uning elementi va qutbi, boshqa to'qqiz stemni qanday o'qishi (Ten Gods) va qaysi earthly branches uni ushlab turishi — Saju-Link hisoblash qoidalarida qanday bo'lsa, aynan shunday keltirilgan.",
    "backLabel": "Hisoblash asosi",
    "sections": [
      {
        "title": "Yin Metall (辛) — o'nta heavenly stemning sakkizinchisi",
        "blocks": [
          {
            "p": "辛 — o'nta heavenly stemning sakkizinchisi. Uning elementi — Metall, qutbi — Yin. Saju-Link day stemi 辛 bo'lgan insonni \"Yin Metall (辛)\" deb ataydi."
          },
          {
            "p": "Natija ekrani bu day stem uchun quyidagi satrni ko'rsatadi: “Sayqallangan qimmatbaho tosh. Nozik did va yuqori talab; uvol qilingan ishni e'tiborsiz qoldirmaydi.” Bu satrning quyidagi jadval yoki ballar bilan aloqasi yo'q."
          }
        ]
      },
      {
        "title": "Boshqa stemlarni qanday o'qishi (Ten Gods)",
        "blocks": [
          {
            "p": "Day stem 辛 bo'lganda, o'n stemning har biri quyidagicha o'qiladi. O'qishning yo'nalishi bor: bu 辛 boshqa stemni qanday o'qishidir, boshqa stem tomonidan 辛 o'qilsa, boshqa nom chiqishi mumkin."
          },
          {
            "table": {
              "caption": "Day stem Yin Metall (辛) bo'lganda Ten Gods",
              "head": [
                "Boshqa stem",
                "Element va qutb",
                "Ten God nomi"
              ],
              "rows": [
                [
                  "Yang Yog'och (甲)",
                  "Yog'och Yang",
                  "Barqaror boylik (正財)"
                ],
                [
                  "Yin Yog'och (乙)",
                  "Yog'och Yin",
                  "Kutilmagan boylik (偏財)"
                ],
                [
                  "Yang Olov (丙)",
                  "Olov Yang",
                  "Nufuz (正官)"
                ],
                [
                  "Yin Olov (丁)",
                  "Olov Yin",
                  "Sinovchi (偏官)"
                ],
                [
                  "Yang Tuproq (戊)",
                  "Tuproq Yang",
                  "G'amxo'rlik (正印)"
                ],
                [
                  "Yin Tuproq (己)",
                  "Tuproq Yin",
                  "Noodatiy tayanch (偏印)"
                ],
                [
                  "Yang Metall (庚)",
                  "Metall Yang",
                  "Raqib (劫財)"
                ],
                [
                  "Yin Metall (辛)",
                  "Metall Yin",
                  "Hamroh (比肩)"
                ],
                [
                  "Yang Suv (壬)",
                  "Suv Yang",
                  "Buzuvchi (傷官)"
                ],
                [
                  "Yin Suv (癸)",
                  "Suv Yin",
                  "Ifoda (食神)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Turmush o'rtog'i pozitsiyasi sifatida o'qiladigan stemlar",
        "blocks": [
          {
            "p": "An'anaviy myeongri turmush o'rtog'i pozitsiyasini erkaklar uchun Barqaror boylik (正財), ayollar uchun Nufuz (正官) deb o'qiydi. Day stem 辛 bo'lganda, Barqaror boylik — 甲, Nufuz — 丙. Jinsingizni ko'rsatmasangiz, bu pozitsiya o'qilmaydi."
          }
        ]
      },
      {
        "title": "Stem 辛 joylashgan earthly branches",
        "blocks": [
          {
            "p": "Stem 辛 earthly branches ichida qayerda yashirinib turishi (hidden stems). Ulush — shu branchning o'ttiz kunidan stem 辛 egallaydigan qismi."
          },
          {
            "table": {
              "caption": "Stem 辛 joylashgan earthly branches",
              "head": [
                "Branch",
                "Hayvon",
                "Pozitsiya",
                "Ulush"
              ],
              "rows": [
                [
                  "丑",
                  "Sigir",
                  "o'rta (中氣)",
                  "{hidChukJung}"
                ],
                [
                  "酉",
                  "Xo'roz",
                  "asosiy (本氣)",
                  "{hidYuBon}"
                ],
                [
                  "戌",
                  "It",
                  "qoldiq (餘氣)",
                  "{hidSulYeo}"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bu qo'llanma nimani aytmaydi",
        "blocks": [
          {
            "ul": [
              "Bitta stem insonni belgilab bermaydi. Saju sakkiz belgining o'zaro munosabatidan o'qiladi.",
              "Ten Gods — day stemdan chiqariladigan hukm. Bir xil ikki belgi qaysi biri day stem ekanligiga qarab boshqa nom oladi."
            ]
          },
          {
            "p": "To'liq Ten Gods [Ten Gods qo'llanmasi](/guide/ten-gods) da, element kuchlari va oy belgisi esa [besh element qo'llanmasi](/guide/five-elements) da keltirilgan. Boshqa stemlar: [Yang Yog'och (甲)](/guide/stem-gap) · [Yin Yog'och (乙)](/guide/stem-eul) · [Yang Olov (丙)](/guide/stem-byeong) · [Yin Olov (丁)](/guide/stem-jeong) · [Yang Tuproq (戊)](/guide/stem-mu) · [Yin Tuproq (己)](/guide/stem-gi) · [Yang Metall (庚)](/guide/stem-gyeong) · [Yang Suv (壬)](/guide/stem-im) · [Yin Suv (癸)](/guide/stem-gye)"
          }
        ]
      }
    ]
  },

  "guide/stem-im": {
    "eyebrow": "Heavenly stems",
    "title": "Yang Suv (壬) — Suv, Yang",
    "summary": "Heavenly stem 壬 haqida: uning elementi va qutbi, boshqa to'qqiz stemni qanday o'qishi (Ten Gods) va qaysi earthly branches uni ushlab turishi — Saju-Link hisoblash qoidalarida qanday bo'lsa, aynan shunday keltirilgan.",
    "backLabel": "Hisoblash asosi",
    "sections": [
      {
        "title": "Yang Suv (壬) — o'nta heavenly stemning to'qqizinchisi",
        "blocks": [
          {
            "p": "壬 — o'nta heavenly stemning to'qqizinchisi. Uning elementi — Suv, qutbi — Yang. Saju-Link day stemi 壬 bo'lgan insonni \"Yang Suv (壬)\" deb ataydi."
          },
          {
            "p": "Natija ekrani bu day stem uchun quyidagi satrni ko'rsatadi: “Daryo va dengiz. Qarashi keng, narsalarning qay tomonga oqayotganini ilg'aydi.” Bu satrning quyidagi jadval yoki ballar bilan aloqasi yo'q."
          }
        ]
      },
      {
        "title": "Boshqa stemlarni qanday o'qishi (Ten Gods)",
        "blocks": [
          {
            "p": "Day stem 壬 bo'lganda, o'n stemning har biri quyidagicha o'qiladi. O'qishning yo'nalishi bor: bu 壬 boshqa stemni qanday o'qishidir, boshqa stem tomonidan 壬 o'qilsa, boshqa nom chiqishi mumkin."
          },
          {
            "table": {
              "caption": "Day stem Yang Suv (壬) bo'lganda Ten Gods",
              "head": [
                "Boshqa stem",
                "Element va qutb",
                "Ten God nomi"
              ],
              "rows": [
                [
                  "Yang Yog'och (甲)",
                  "Yog'och Yang",
                  "Ifoda (食神)"
                ],
                [
                  "Yin Yog'och (乙)",
                  "Yog'och Yin",
                  "Buzuvchi (傷官)"
                ],
                [
                  "Yang Olov (丙)",
                  "Olov Yang",
                  "Kutilmagan boylik (偏財)"
                ],
                [
                  "Yin Olov (丁)",
                  "Olov Yin",
                  "Barqaror boylik (正財)"
                ],
                [
                  "Yang Tuproq (戊)",
                  "Tuproq Yang",
                  "Sinovchi (偏官)"
                ],
                [
                  "Yin Tuproq (己)",
                  "Tuproq Yin",
                  "Nufuz (正官)"
                ],
                [
                  "Yang Metall (庚)",
                  "Metall Yang",
                  "Noodatiy tayanch (偏印)"
                ],
                [
                  "Yin Metall (辛)",
                  "Metall Yin",
                  "G'amxo'rlik (正印)"
                ],
                [
                  "Yang Suv (壬)",
                  "Suv Yang",
                  "Hamroh (比肩)"
                ],
                [
                  "Yin Suv (癸)",
                  "Suv Yin",
                  "Raqib (劫財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Turmush o'rtog'i pozitsiyasi sifatida o'qiladigan stemlar",
        "blocks": [
          {
            "p": "An'anaviy myeongri turmush o'rtog'i pozitsiyasini erkaklar uchun Barqaror boylik (正財), ayollar uchun Nufuz (正官) deb o'qiydi. Day stem 壬 bo'lganda, Barqaror boylik — 丁, Nufuz — 己. Jinsingizni ko'rsatmasangiz, bu pozitsiya o'qilmaydi."
          }
        ]
      },
      {
        "title": "Stem 壬 joylashgan earthly branches",
        "blocks": [
          {
            "p": "Stem 壬 earthly branches ichida qayerda yashirinib turishi (hidden stems). Ulush — shu branchning o'ttiz kunidan stem 壬 egallaydigan qismi."
          },
          {
            "table": {
              "caption": "Stem 壬 joylashgan earthly branches",
              "head": [
                "Branch",
                "Hayvon",
                "Pozitsiya",
                "Ulush"
              ],
              "rows": [
                [
                  "子",
                  "Sichqon",
                  "qoldiq (餘氣)",
                  "{hidJaYeo}"
                ],
                [
                  "申",
                  "Maymun",
                  "o'rta (中氣)",
                  "{hidSinJung}"
                ],
                [
                  "亥",
                  "Cho'chqa",
                  "asosiy (本氣)",
                  "{hidHaeBon}"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bu qo'llanma nimani aytmaydi",
        "blocks": [
          {
            "ul": [
              "Bitta stem insonni belgilab bermaydi. Saju sakkiz belgining o'zaro munosabatidan o'qiladi.",
              "Ten Gods — day stemdan chiqariladigan hukm. Bir xil ikki belgi qaysi biri day stem ekanligiga qarab boshqa nom oladi."
            ]
          },
          {
            "p": "To'liq Ten Gods [Ten Gods qo'llanmasi](/guide/ten-gods) da, element kuchlari va oy belgisi esa [besh element qo'llanmasi](/guide/five-elements) da keltirilgan. Boshqa stemlar: [Yang Yog'och (甲)](/guide/stem-gap) · [Yin Yog'och (乙)](/guide/stem-eul) · [Yang Olov (丙)](/guide/stem-byeong) · [Yin Olov (丁)](/guide/stem-jeong) · [Yang Tuproq (戊)](/guide/stem-mu) · [Yin Tuproq (己)](/guide/stem-gi) · [Yang Metall (庚)](/guide/stem-gyeong) · [Yin Metall (辛)](/guide/stem-sin) · [Yin Suv (癸)](/guide/stem-gye)"
          }
        ]
      }
    ]
  },

  "guide/stem-gye": {
    "eyebrow": "Heavenly stems",
    "title": "Yin Suv (癸) — Suv, Yin",
    "summary": "Heavenly stem 癸 haqida: uning elementi va qutbi, boshqa to'qqiz stemni qanday o'qishi (Ten Gods) va qaysi earthly branches uni ushlab turishi — Saju-Link hisoblash qoidalarida qanday bo'lsa, aynan shunday keltirilgan.",
    "backLabel": "Hisoblash asosi",
    "sections": [
      {
        "title": "Yin Suv (癸) — o'nta heavenly stemning o'ninchisi",
        "blocks": [
          {
            "p": "癸 — o'nta heavenly stemning o'ninchisi. Uning elementi — Suv, qutbi — Yin. Saju-Link day stemi 癸 bo'lgan insonni \"Yin Suv (癸)\" deb ataydi."
          },
          {
            "p": "Natija ekrani bu day stem uchun quyidagi satrni ko'rsatadi: “Shabnam va yomg'ir. Sokin singib boradi, so'zdan oldin kayfiyatni o'qiydi.” Bu satrning quyidagi jadval yoki ballar bilan aloqasi yo'q."
          }
        ]
      },
      {
        "title": "Boshqa stemlarni qanday o'qishi (Ten Gods)",
        "blocks": [
          {
            "p": "Day stem 癸 bo'lganda, o'n stemning har biri quyidagicha o'qiladi. O'qishning yo'nalishi bor: bu 癸 boshqa stemni qanday o'qishidir, boshqa stem tomonidan 癸 o'qilsa, boshqa nom chiqishi mumkin."
          },
          {
            "table": {
              "caption": "Day stem Yin Suv (癸) bo'lganda Ten Gods",
              "head": [
                "Boshqa stem",
                "Element va qutb",
                "Ten God nomi"
              ],
              "rows": [
                [
                  "Yang Yog'och (甲)",
                  "Yog'och Yang",
                  "Buzuvchi (傷官)"
                ],
                [
                  "Yin Yog'och (乙)",
                  "Yog'och Yin",
                  "Ifoda (食神)"
                ],
                [
                  "Yang Olov (丙)",
                  "Olov Yang",
                  "Barqaror boylik (正財)"
                ],
                [
                  "Yin Olov (丁)",
                  "Olov Yin",
                  "Kutilmagan boylik (偏財)"
                ],
                [
                  "Yang Tuproq (戊)",
                  "Tuproq Yang",
                  "Nufuz (正官)"
                ],
                [
                  "Yin Tuproq (己)",
                  "Tuproq Yin",
                  "Sinovchi (偏官)"
                ],
                [
                  "Yang Metall (庚)",
                  "Metall Yang",
                  "G'amxo'rlik (正印)"
                ],
                [
                  "Yin Metall (辛)",
                  "Metall Yin",
                  "Noodatiy tayanch (偏印)"
                ],
                [
                  "Yang Suv (壬)",
                  "Suv Yang",
                  "Raqib (劫財)"
                ],
                [
                  "Yin Suv (癸)",
                  "Suv Yin",
                  "Hamroh (比肩)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Turmush o'rtog'i pozitsiyasi sifatida o'qiladigan stemlar",
        "blocks": [
          {
            "p": "An'anaviy myeongri turmush o'rtog'i pozitsiyasini erkaklar uchun Barqaror boylik (正財), ayollar uchun Nufuz (正官) deb o'qiydi. Day stem 癸 bo'lganda, Barqaror boylik — 丙, Nufuz — 戊. Jinsingizni ko'rsatmasangiz, bu pozitsiya o'qilmaydi."
          }
        ]
      },
      {
        "title": "Stem 癸 joylashgan earthly branches",
        "blocks": [
          {
            "p": "Stem 癸 earthly branches ichida qayerda yashirinib turishi (hidden stems). Ulush — shu branchning o'ttiz kunidan stem 癸 egallaydigan qismi."
          },
          {
            "table": {
              "caption": "Stem 癸 joylashgan earthly branches",
              "head": [
                "Branch",
                "Hayvon",
                "Pozitsiya",
                "Ulush"
              ],
              "rows": [
                [
                  "子",
                  "Sichqon",
                  "asosiy (本氣)",
                  "{hidJaBon}"
                ],
                [
                  "丑",
                  "Sigir",
                  "qoldiq (餘氣)",
                  "{hidChukYeo}"
                ],
                [
                  "辰",
                  "Ajdar",
                  "o'rta (中氣)",
                  "{hidJinJung}"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bu qo'llanma nimani aytmaydi",
        "blocks": [
          {
            "ul": [
              "Bitta stem insonni belgilab bermaydi. Saju sakkiz belgining o'zaro munosabatidan o'qiladi.",
              "Ten Gods — day stemdan chiqariladigan hukm. Bir xil ikki belgi qaysi biri day stem ekanligiga qarab boshqa nom oladi."
            ]
          },
          {
            "p": "To'liq Ten Gods [Ten Gods qo'llanmasi](/guide/ten-gods) da, element kuchlari va oy belgisi esa [besh element qo'llanmasi](/guide/five-elements) da keltirilgan. Boshqa stemlar: [Yang Yog'och (甲)](/guide/stem-gap) · [Yin Yog'och (乙)](/guide/stem-eul) · [Yang Olov (丙)](/guide/stem-byeong) · [Yin Olov (丁)](/guide/stem-jeong) · [Yang Tuproq (戊)](/guide/stem-mu) · [Yin Tuproq (己)](/guide/stem-gi) · [Yang Metall (庚)](/guide/stem-gyeong) · [Yin Metall (辛)](/guide/stem-sin) · [Yang Suv (壬)](/guide/stem-im)"
          }
        ]
      }
    ]
  },

  "guide/branch-ja": {
    "eyebrow": "Earthly branches",
    "title": "子 — earthly branch: Sichqon",
    "summary": "Earthly branch 子 ushlab turgan stemlar (hidden stems), u month branch bo'lganda besh element kuchi va har bir day stem uchun o'qiladigan Ten Gods — Saju-Link hisoblash qoidalarida qanday bo'lsa, aynan shunday keltirilgan.",
    "backLabel": "Hisoblash asosi",
    "sections": [
      {
        "title": "子 — o'n ikki earthly branchning birinchisi",
        "blocks": [
          {
            "p": "子 — o'n ikki earthly branchning birinchisi va Sichqon hayvoniga tegishli. Tug'ilgan oyning branchi 子 bo'lsa, fasl — qish, faslga egalik qiluvchi element — Suv."
          },
          {
            "p": "Tug'ilgan kunning branchi 子 bo'lsa, bu belgi turmush o'rtog'i pozitsiyasi bo'ladi. Quyida bu branch qaysi stemlarni ushlab turishi va ular day stemga nisbatan nima ekanligi ko'rsatilgan."
          }
        ]
      },
      {
        "title": "Bu branch ushlab turgan stemlar (hidden stems)",
        "blocks": [
          {
            "p": "Branch — bitta ko'rinadigan belgi, lekin ichida stemlarni saqlaydi. Ulush — branchning o'ttiz kuni stemlar o'rtasida qanday bo'linishi, asosiy stem esa branchning vakillik energiyasi."
          },
          {
            "table": {
              "caption": "Hidden stems: 子",
              "head": [
                "Stem",
                "Element va qutb",
                "Pozitsiya",
                "Ulush"
              ],
              "rows": [
                [
                  "Yang Suv (壬)",
                  "Suv Yang",
                  "qoldiq (餘氣)",
                  "{hidJaYeo}"
                ],
                [
                  "Yin Suv (癸)",
                  "Suv Yin",
                  "asosiy (本氣)",
                  "{hidJaBon}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Month branch 子 bo'lgandagi besh element kuchi",
        "blocks": [
          {
            "p": "Tug'ilgan oyning branchi 子 bo'lsa, har bir element bir holat oladi (Van, San, Xyu, Su, Sa) va bu holat uning kuchiga qo'llaniladigan ko'paytirgichga aylanadi."
          },
          {
            "table": {
              "caption": "Month branch 子 uchun element holatlari (qish)",
              "head": [
                "Element",
                "Holat",
                "Ko'paytirgich"
              ],
              "rows": [
                [
                  "Yog'och",
                  "San (相)",
                  "{vitalitySang}"
                ],
                [
                  "Olov",
                  "Sa (死)",
                  "{vitalitySa}"
                ],
                [
                  "Tuproq",
                  "Su (囚)",
                  "{vitalitySu}"
                ],
                [
                  "Metall",
                  "Xyu (休)",
                  "{vitalityHyu}"
                ],
                [
                  "Suv",
                  "Van (旺)",
                  "{vitalityWang}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Day stem bo'yicha Ten Gods",
        "blocks": [
          {
            "p": "Branch 子 ichidagi bir xil hidden stems day stemga qarab turli Ten Gods bo'ladi. Kun branchi 子 bo'lganda, bu jadval turmush o'rtog'i pozitsiyasining o'qilishidir."
          },
          {
            "table": {
              "caption": "Hidden stems 子: har bir day stemga nisbatan nima ekanligi",
              "head": [
                "Day stem",
                "Yang Suv (壬) — qoldiq (餘氣)",
                "Yin Suv (癸) — asosiy (本氣)"
              ],
              "rows": [
                [
                  "Yang Yog'och (甲)",
                  "Noodatiy tayanch (偏印)",
                  "G'amxo'rlik (正印)"
                ],
                [
                  "Yin Yog'och (乙)",
                  "G'amxo'rlik (正印)",
                  "Noodatiy tayanch (偏印)"
                ],
                [
                  "Yang Olov (丙)",
                  "Sinovchi (偏官)",
                  "Nufuz (正官)"
                ],
                [
                  "Yin Olov (丁)",
                  "Nufuz (正官)",
                  "Sinovchi (偏官)"
                ],
                [
                  "Yang Tuproq (戊)",
                  "Kutilmagan boylik (偏財)",
                  "Barqaror boylik (正財)"
                ],
                [
                  "Yin Tuproq (己)",
                  "Barqaror boylik (正財)",
                  "Kutilmagan boylik (偏財)"
                ],
                [
                  "Yang Metall (庚)",
                  "Ifoda (食神)",
                  "Buzuvchi (傷官)"
                ],
                [
                  "Yin Metall (辛)",
                  "Buzuvchi (傷官)",
                  "Ifoda (食神)"
                ],
                [
                  "Yang Suv (壬)",
                  "Hamroh (比肩)",
                  "Raqib (劫財)"
                ],
                [
                  "Yin Suv (癸)",
                  "Raqib (劫財)",
                  "Hamroh (比肩)"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bu qo'llanma nimani aytmaydi",
        "blocks": [
          {
            "ul": [
              "Bitta branch insonni belgilab bermaydi. Bir xil branch day stem va month branchga qarab turlicha o'qiladi.",
              "Branchlar o'rtasidagi uyg'unlik, to'qnashuv va kelishmovchilik kabi munosabatlar bu yerda ko'rib chiqilmagan."
            ]
          },
          {
            "p": "Branchlar o'rtasidagi munosabatlar [o'n ikki branch jadvali](/guide/branches) da, uning zodiak hayvoni sifatidagi ma'nosi esa [zodiak Saju ichida qayerda turishi](/guide/zodiac) da keltirilgan. Boshqa branchlar: [丑 (Sigir)](/guide/branch-chuk) · [寅 (Yo'lbars)](/guide/branch-in) · [卯 (Quyon)](/guide/branch-myo) · [辰 (Ajdar)](/guide/branch-jin) · [巳 (Ilon)](/guide/branch-sa) · [午 (Ot)](/guide/branch-o) · [未 (Qo'y)](/guide/branch-mi) · [申 (Maymun)](/guide/branch-sin) · [酉 (Xo'roz)](/guide/branch-yu) · [戌 (It)](/guide/branch-sul) · [亥 (Cho'chqa)](/guide/branch-hae)"
          }
        ]
      }
    ]
  },

  "guide/branch-chuk": {
    "eyebrow": "Earthly branches",
    "title": "丑 — earthly branch: Sigir",
    "summary": "Earthly branch 丑 ushlab turgan stemlar (hidden stems), u month branch bo'lganda besh element kuchi va har bir day stem uchun o'qiladigan Ten Gods — Saju-Link hisoblash qoidalarida qanday bo'lsa, aynan shunday keltirilgan.",
    "backLabel": "Hisoblash asosi",
    "sections": [
      {
        "title": "丑 — o'n ikki earthly branchning ikkinchisi",
        "blocks": [
          {
            "p": "丑 — o'n ikki earthly branchning ikkinchisi va Sigir hayvoniga tegishli. Tug'ilgan oyning branchi 丑 bo'lsa, fasl — qish, faslga egalik qiluvchi element — Suv. Bu o'tish oyi (辰未戌丑), shuning uchun Tuproq ham Van holatida hisoblanadi."
          },
          {
            "p": "Tug'ilgan kunning branchi 丑 bo'lsa, bu belgi turmush o'rtog'i pozitsiyasi bo'ladi. Quyida bu branch qaysi stemlarni ushlab turishi va ular day stemga nisbatan nima ekanligi ko'rsatilgan."
          }
        ]
      },
      {
        "title": "Bu branch ushlab turgan stemlar (hidden stems)",
        "blocks": [
          {
            "p": "Branch — bitta ko'rinadigan belgi, lekin ichida stemlarni saqlaydi. Ulush — branchning o'ttiz kuni stemlar o'rtasida qanday bo'linishi, asosiy stem esa branchning vakillik energiyasi."
          },
          {
            "table": {
              "caption": "Hidden stems: 丑",
              "head": [
                "Stem",
                "Element va qutb",
                "Pozitsiya",
                "Ulush"
              ],
              "rows": [
                [
                  "Yin Suv (癸)",
                  "Suv Yin",
                  "qoldiq (餘氣)",
                  "{hidChukYeo}"
                ],
                [
                  "Yin Metall (辛)",
                  "Metall Yin",
                  "o'rta (中氣)",
                  "{hidChukJung}"
                ],
                [
                  "Yin Tuproq (己)",
                  "Tuproq Yin",
                  "asosiy (本氣)",
                  "{hidChukBon}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Month branch 丑 bo'lgandagi besh element kuchi",
        "blocks": [
          {
            "p": "Tug'ilgan oyning branchi 丑 bo'lsa, har bir element bir holat oladi (Van, San, Xyu, Su, Sa) va bu holat uning kuchiga qo'llaniladigan ko'paytirgichga aylanadi."
          },
          {
            "table": {
              "caption": "Month branch 丑 uchun element holatlari (qish (o'tish oyi))",
              "head": [
                "Element",
                "Holat",
                "Ko'paytirgich"
              ],
              "rows": [
                [
                  "Yog'och",
                  "San (相)",
                  "{vitalitySang}"
                ],
                [
                  "Olov",
                  "Sa (死)",
                  "{vitalitySa}"
                ],
                [
                  "Tuproq",
                  "Van (旺)",
                  "{vitalityWang}"
                ],
                [
                  "Metall",
                  "Xyu (休)",
                  "{vitalityHyu}"
                ],
                [
                  "Suv",
                  "Van (旺)",
                  "{vitalityWang}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Day stem bo'yicha Ten Gods",
        "blocks": [
          {
            "p": "Branch 丑 ichidagi bir xil hidden stems day stemga qarab turli Ten Gods bo'ladi. Kun branchi 丑 bo'lganda, bu jadval turmush o'rtog'i pozitsiyasining o'qilishidir."
          },
          {
            "table": {
              "caption": "Hidden stems 丑: har bir day stemga nisbatan nima ekanligi",
              "head": [
                "Day stem",
                "Yin Suv (癸) — qoldiq (餘氣)",
                "Yin Metall (辛) — o'rta (中氣)",
                "Yin Tuproq (己) — asosiy (本氣)"
              ],
              "rows": [
                [
                  "Yang Yog'och (甲)",
                  "G'amxo'rlik (正印)",
                  "Nufuz (正官)",
                  "Barqaror boylik (正財)"
                ],
                [
                  "Yin Yog'och (乙)",
                  "Noodatiy tayanch (偏印)",
                  "Sinovchi (偏官)",
                  "Kutilmagan boylik (偏財)"
                ],
                [
                  "Yang Olov (丙)",
                  "Nufuz (正官)",
                  "Barqaror boylik (正財)",
                  "Buzuvchi (傷官)"
                ],
                [
                  "Yin Olov (丁)",
                  "Sinovchi (偏官)",
                  "Kutilmagan boylik (偏財)",
                  "Ifoda (食神)"
                ],
                [
                  "Yang Tuproq (戊)",
                  "Barqaror boylik (正財)",
                  "Buzuvchi (傷官)",
                  "Raqib (劫財)"
                ],
                [
                  "Yin Tuproq (己)",
                  "Kutilmagan boylik (偏財)",
                  "Ifoda (食神)",
                  "Hamroh (比肩)"
                ],
                [
                  "Yang Metall (庚)",
                  "Buzuvchi (傷官)",
                  "Raqib (劫財)",
                  "G'amxo'rlik (正印)"
                ],
                [
                  "Yin Metall (辛)",
                  "Ifoda (食神)",
                  "Hamroh (比肩)",
                  "Noodatiy tayanch (偏印)"
                ],
                [
                  "Yang Suv (壬)",
                  "Raqib (劫財)",
                  "G'amxo'rlik (正印)",
                  "Nufuz (正官)"
                ],
                [
                  "Yin Suv (癸)",
                  "Hamroh (比肩)",
                  "Noodatiy tayanch (偏印)",
                  "Sinovchi (偏官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bu qo'llanma nimani aytmaydi",
        "blocks": [
          {
            "ul": [
              "Bitta branch insonni belgilab bermaydi. Bir xil branch day stem va month branchga qarab turlicha o'qiladi.",
              "Branchlar o'rtasidagi uyg'unlik, to'qnashuv va kelishmovchilik kabi munosabatlar bu yerda ko'rib chiqilmagan."
            ]
          },
          {
            "p": "Branchlar o'rtasidagi munosabatlar [o'n ikki branch jadvali](/guide/branches) da, uning zodiak hayvoni sifatidagi ma'nosi esa [zodiak Saju ichida qayerda turishi](/guide/zodiac) da keltirilgan. Boshqa branchlar: [子 (Sichqon)](/guide/branch-ja) · [寅 (Yo'lbars)](/guide/branch-in) · [卯 (Quyon)](/guide/branch-myo) · [辰 (Ajdar)](/guide/branch-jin) · [巳 (Ilon)](/guide/branch-sa) · [午 (Ot)](/guide/branch-o) · [未 (Qo'y)](/guide/branch-mi) · [申 (Maymun)](/guide/branch-sin) · [酉 (Xo'roz)](/guide/branch-yu) · [戌 (It)](/guide/branch-sul) · [亥 (Cho'chqa)](/guide/branch-hae)"
          }
        ]
      }
    ]
  },

  "guide/branch-in": {
    "eyebrow": "Earthly branches",
    "title": "寅 — earthly branch: Yo'lbars",
    "summary": "Earthly branch 寅 ushlab turgan stemlar (hidden stems), u month branch bo'lganda besh element kuchi va har bir day stem uchun o'qiladigan Ten Gods — Saju-Link hisoblash qoidalarida qanday bo'lsa, aynan shunday keltirilgan.",
    "backLabel": "Hisoblash asosi",
    "sections": [
      {
        "title": "寅 — o'n ikki earthly branchning uchinchisi",
        "blocks": [
          {
            "p": "寅 — o'n ikki earthly branchning uchinchisi va Yo'lbars hayvoniga tegishli. Tug'ilgan oyning branchi 寅 bo'lsa, fasl — bahor, faslga egalik qiluvchi element — Yog'och."
          },
          {
            "p": "Tug'ilgan kunning branchi 寅 bo'lsa, bu belgi turmush o'rtog'i pozitsiyasi bo'ladi. Quyida bu branch qaysi stemlarni ushlab turishi va ular day stemga nisbatan nima ekanligi ko'rsatilgan."
          }
        ]
      },
      {
        "title": "Bu branch ushlab turgan stemlar (hidden stems)",
        "blocks": [
          {
            "p": "Branch — bitta ko'rinadigan belgi, lekin ichida stemlarni saqlaydi. Ulush — branchning o'ttiz kuni stemlar o'rtasida qanday bo'linishi, asosiy stem esa branchning vakillik energiyasi."
          },
          {
            "table": {
              "caption": "Hidden stems: 寅",
              "head": [
                "Stem",
                "Element va qutb",
                "Pozitsiya",
                "Ulush"
              ],
              "rows": [
                [
                  "Yang Tuproq (戊)",
                  "Tuproq Yang",
                  "qoldiq (餘氣)",
                  "{hidInYeo}"
                ],
                [
                  "Yang Olov (丙)",
                  "Olov Yang",
                  "o'rta (中氣)",
                  "{hidInJung}"
                ],
                [
                  "Yang Yog'och (甲)",
                  "Yog'och Yang",
                  "asosiy (本氣)",
                  "{hidInBon}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Month branch 寅 bo'lgandagi besh element kuchi",
        "blocks": [
          {
            "p": "Tug'ilgan oyning branchi 寅 bo'lsa, har bir element bir holat oladi (Van, San, Xyu, Su, Sa) va bu holat uning kuchiga qo'llaniladigan ko'paytirgichga aylanadi."
          },
          {
            "table": {
              "caption": "Month branch 寅 uchun element holatlari (bahor)",
              "head": [
                "Element",
                "Holat",
                "Ko'paytirgich"
              ],
              "rows": [
                [
                  "Yog'och",
                  "Van (旺)",
                  "{vitalityWang}"
                ],
                [
                  "Olov",
                  "San (相)",
                  "{vitalitySang}"
                ],
                [
                  "Tuproq",
                  "Sa (死)",
                  "{vitalitySa}"
                ],
                [
                  "Metall",
                  "Su (囚)",
                  "{vitalitySu}"
                ],
                [
                  "Suv",
                  "Xyu (休)",
                  "{vitalityHyu}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Day stem bo'yicha Ten Gods",
        "blocks": [
          {
            "p": "Branch 寅 ichidagi bir xil hidden stems day stemga qarab turli Ten Gods bo'ladi. Kun branchi 寅 bo'lganda, bu jadval turmush o'rtog'i pozitsiyasining o'qilishidir."
          },
          {
            "table": {
              "caption": "Hidden stems 寅: har bir day stemga nisbatan nima ekanligi",
              "head": [
                "Day stem",
                "Yang Tuproq (戊) — qoldiq (餘氣)",
                "Yang Olov (丙) — o'rta (中氣)",
                "Yang Yog'och (甲) — asosiy (本氣)"
              ],
              "rows": [
                [
                  "Yang Yog'och (甲)",
                  "Kutilmagan boylik (偏財)",
                  "Ifoda (食神)",
                  "Hamroh (比肩)"
                ],
                [
                  "Yin Yog'och (乙)",
                  "Barqaror boylik (正財)",
                  "Buzuvchi (傷官)",
                  "Raqib (劫財)"
                ],
                [
                  "Yang Olov (丙)",
                  "Ifoda (食神)",
                  "Hamroh (比肩)",
                  "Noodatiy tayanch (偏印)"
                ],
                [
                  "Yin Olov (丁)",
                  "Buzuvchi (傷官)",
                  "Raqib (劫財)",
                  "G'amxo'rlik (正印)"
                ],
                [
                  "Yang Tuproq (戊)",
                  "Hamroh (比肩)",
                  "Noodatiy tayanch (偏印)",
                  "Sinovchi (偏官)"
                ],
                [
                  "Yin Tuproq (己)",
                  "Raqib (劫財)",
                  "G'amxo'rlik (正印)",
                  "Nufuz (正官)"
                ],
                [
                  "Yang Metall (庚)",
                  "Noodatiy tayanch (偏印)",
                  "Sinovchi (偏官)",
                  "Kutilmagan boylik (偏財)"
                ],
                [
                  "Yin Metall (辛)",
                  "G'amxo'rlik (正印)",
                  "Nufuz (正官)",
                  "Barqaror boylik (正財)"
                ],
                [
                  "Yang Suv (壬)",
                  "Sinovchi (偏官)",
                  "Kutilmagan boylik (偏財)",
                  "Ifoda (食神)"
                ],
                [
                  "Yin Suv (癸)",
                  "Nufuz (正官)",
                  "Barqaror boylik (正財)",
                  "Buzuvchi (傷官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bu qo'llanma nimani aytmaydi",
        "blocks": [
          {
            "ul": [
              "Bitta branch insonni belgilab bermaydi. Bir xil branch day stem va month branchga qarab turlicha o'qiladi.",
              "Branchlar o'rtasidagi uyg'unlik, to'qnashuv va kelishmovchilik kabi munosabatlar bu yerda ko'rib chiqilmagan."
            ]
          },
          {
            "p": "Branchlar o'rtasidagi munosabatlar [o'n ikki branch jadvali](/guide/branches) da, uning zodiak hayvoni sifatidagi ma'nosi esa [zodiak Saju ichida qayerda turishi](/guide/zodiac) da keltirilgan. Boshqa branchlar: [子 (Sichqon)](/guide/branch-ja) · [丑 (Sigir)](/guide/branch-chuk) · [卯 (Quyon)](/guide/branch-myo) · [辰 (Ajdar)](/guide/branch-jin) · [巳 (Ilon)](/guide/branch-sa) · [午 (Ot)](/guide/branch-o) · [未 (Qo'y)](/guide/branch-mi) · [申 (Maymun)](/guide/branch-sin) · [酉 (Xo'roz)](/guide/branch-yu) · [戌 (It)](/guide/branch-sul) · [亥 (Cho'chqa)](/guide/branch-hae)"
          }
        ]
      }
    ]
  },

  "guide/branch-myo": {
    "eyebrow": "Earthly branches",
    "title": "卯 — earthly branch: Quyon",
    "summary": "Earthly branch 卯 ushlab turgan stemlar (hidden stems), u month branch bo'lganda besh element kuchi va har bir day stem uchun o'qiladigan Ten Gods — Saju-Link hisoblash qoidalarida qanday bo'lsa, aynan shunday keltirilgan.",
    "backLabel": "Hisoblash asosi",
    "sections": [
      {
        "title": "卯 — o'n ikki earthly branchning to'rtinchisi",
        "blocks": [
          {
            "p": "卯 — o'n ikki earthly branchning to'rtinchisi va Quyon hayvoniga tegishli. Tug'ilgan oyning branchi 卯 bo'lsa, fasl — bahor, faslga egalik qiluvchi element — Yog'och."
          },
          {
            "p": "Tug'ilgan kunning branchi 卯 bo'lsa, bu belgi turmush o'rtog'i pozitsiyasi bo'ladi. Quyida bu branch qaysi stemlarni ushlab turishi va ular day stemga nisbatan nima ekanligi ko'rsatilgan."
          }
        ]
      },
      {
        "title": "Bu branch ushlab turgan stemlar (hidden stems)",
        "blocks": [
          {
            "p": "Branch — bitta ko'rinadigan belgi, lekin ichida stemlarni saqlaydi. Ulush — branchning o'ttiz kuni stemlar o'rtasida qanday bo'linishi, asosiy stem esa branchning vakillik energiyasi."
          },
          {
            "table": {
              "caption": "Hidden stems: 卯",
              "head": [
                "Stem",
                "Element va qutb",
                "Pozitsiya",
                "Ulush"
              ],
              "rows": [
                [
                  "Yang Yog'och (甲)",
                  "Yog'och Yang",
                  "qoldiq (餘氣)",
                  "{hidMyoYeo}"
                ],
                [
                  "Yin Yog'och (乙)",
                  "Yog'och Yin",
                  "asosiy (本氣)",
                  "{hidMyoBon}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Month branch 卯 bo'lgandagi besh element kuchi",
        "blocks": [
          {
            "p": "Tug'ilgan oyning branchi 卯 bo'lsa, har bir element bir holat oladi (Van, San, Xyu, Su, Sa) va bu holat uning kuchiga qo'llaniladigan ko'paytirgichga aylanadi."
          },
          {
            "table": {
              "caption": "Month branch 卯 uchun element holatlari (bahor)",
              "head": [
                "Element",
                "Holat",
                "Ko'paytirgich"
              ],
              "rows": [
                [
                  "Yog'och",
                  "Van (旺)",
                  "{vitalityWang}"
                ],
                [
                  "Olov",
                  "San (相)",
                  "{vitalitySang}"
                ],
                [
                  "Tuproq",
                  "Sa (死)",
                  "{vitalitySa}"
                ],
                [
                  "Metall",
                  "Su (囚)",
                  "{vitalitySu}"
                ],
                [
                  "Suv",
                  "Xyu (休)",
                  "{vitalityHyu}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Day stem bo'yicha Ten Gods",
        "blocks": [
          {
            "p": "Branch 卯 ichidagi bir xil hidden stems day stemga qarab turli Ten Gods bo'ladi. Kun branchi 卯 bo'lganda, bu jadval turmush o'rtog'i pozitsiyasining o'qilishidir."
          },
          {
            "table": {
              "caption": "Hidden stems 卯: har bir day stemga nisbatan nima ekanligi",
              "head": [
                "Day stem",
                "Yang Yog'och (甲) — qoldiq (餘氣)",
                "Yin Yog'och (乙) — asosiy (本氣)"
              ],
              "rows": [
                [
                  "Yang Yog'och (甲)",
                  "Hamroh (比肩)",
                  "Raqib (劫財)"
                ],
                [
                  "Yin Yog'och (乙)",
                  "Raqib (劫財)",
                  "Hamroh (比肩)"
                ],
                [
                  "Yang Olov (丙)",
                  "Noodatiy tayanch (偏印)",
                  "G'amxo'rlik (正印)"
                ],
                [
                  "Yin Olov (丁)",
                  "G'amxo'rlik (正印)",
                  "Noodatiy tayanch (偏印)"
                ],
                [
                  "Yang Tuproq (戊)",
                  "Sinovchi (偏官)",
                  "Nufuz (正官)"
                ],
                [
                  "Yin Tuproq (己)",
                  "Nufuz (正官)",
                  "Sinovchi (偏官)"
                ],
                [
                  "Yang Metall (庚)",
                  "Kutilmagan boylik (偏財)",
                  "Barqaror boylik (正財)"
                ],
                [
                  "Yin Metall (辛)",
                  "Barqaror boylik (正財)",
                  "Kutilmagan boylik (偏財)"
                ],
                [
                  "Yang Suv (壬)",
                  "Ifoda (食神)",
                  "Buzuvchi (傷官)"
                ],
                [
                  "Yin Suv (癸)",
                  "Buzuvchi (傷官)",
                  "Ifoda (食神)"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bu qo'llanma nimani aytmaydi",
        "blocks": [
          {
            "ul": [
              "Bitta branch insonni belgilab bermaydi. Bir xil branch day stem va month branchga qarab turlicha o'qiladi.",
              "Branchlar o'rtasidagi uyg'unlik, to'qnashuv va kelishmovchilik kabi munosabatlar bu yerda ko'rib chiqilmagan."
            ]
          },
          {
            "p": "Branchlar o'rtasidagi munosabatlar [o'n ikki branch jadvali](/guide/branches) da, uning zodiak hayvoni sifatidagi ma'nosi esa [zodiak Saju ichida qayerda turishi](/guide/zodiac) da keltirilgan. Boshqa branchlar: [子 (Sichqon)](/guide/branch-ja) · [丑 (Sigir)](/guide/branch-chuk) · [寅 (Yo'lbars)](/guide/branch-in) · [辰 (Ajdar)](/guide/branch-jin) · [巳 (Ilon)](/guide/branch-sa) · [午 (Ot)](/guide/branch-o) · [未 (Qo'y)](/guide/branch-mi) · [申 (Maymun)](/guide/branch-sin) · [酉 (Xo'roz)](/guide/branch-yu) · [戌 (It)](/guide/branch-sul) · [亥 (Cho'chqa)](/guide/branch-hae)"
          }
        ]
      }
    ]
  },

  "guide/branch-jin": {
    "eyebrow": "Earthly branches",
    "title": "辰 — earthly branch: Ajdar",
    "summary": "Earthly branch 辰 ushlab turgan stemlar (hidden stems), u month branch bo'lganda besh element kuchi va har bir day stem uchun o'qiladigan Ten Gods — Saju-Link hisoblash qoidalarida qanday bo'lsa, aynan shunday keltirilgan.",
    "backLabel": "Hisoblash asosi",
    "sections": [
      {
        "title": "辰 — o'n ikki earthly branchning beshinchisi",
        "blocks": [
          {
            "p": "辰 — o'n ikki earthly branchning beshinchisi va Ajdar hayvoniga tegishli. Tug'ilgan oyning branchi 辰 bo'lsa, fasl — bahor, faslga egalik qiluvchi element — Yog'och. Bu o'tish oyi (辰未戌丑), shuning uchun Tuproq ham Van holatida hisoblanadi."
          },
          {
            "p": "Tug'ilgan kunning branchi 辰 bo'lsa, bu belgi turmush o'rtog'i pozitsiyasi bo'ladi. Quyida bu branch qaysi stemlarni ushlab turishi va ular day stemga nisbatan nima ekanligi ko'rsatilgan."
          }
        ]
      },
      {
        "title": "Bu branch ushlab turgan stemlar (hidden stems)",
        "blocks": [
          {
            "p": "Branch — bitta ko'rinadigan belgi, lekin ichida stemlarni saqlaydi. Ulush — branchning o'ttiz kuni stemlar o'rtasida qanday bo'linishi, asosiy stem esa branchning vakillik energiyasi."
          },
          {
            "table": {
              "caption": "Hidden stems: 辰",
              "head": [
                "Stem",
                "Element va qutb",
                "Pozitsiya",
                "Ulush"
              ],
              "rows": [
                [
                  "Yin Yog'och (乙)",
                  "Yog'och Yin",
                  "qoldiq (餘氣)",
                  "{hidJinYeo}"
                ],
                [
                  "Yin Suv (癸)",
                  "Suv Yin",
                  "o'rta (中氣)",
                  "{hidJinJung}"
                ],
                [
                  "Yang Tuproq (戊)",
                  "Tuproq Yang",
                  "asosiy (本氣)",
                  "{hidJinBon}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Month branch 辰 bo'lgandagi besh element kuchi",
        "blocks": [
          {
            "p": "Tug'ilgan oyning branchi 辰 bo'lsa, har bir element bir holat oladi (Van, San, Xyu, Su, Sa) va bu holat uning kuchiga qo'llaniladigan ko'paytirgichga aylanadi."
          },
          {
            "table": {
              "caption": "Month branch 辰 uchun element holatlari (bahor (o'tish oyi))",
              "head": [
                "Element",
                "Holat",
                "Ko'paytirgich"
              ],
              "rows": [
                [
                  "Yog'och",
                  "Van (旺)",
                  "{vitalityWang}"
                ],
                [
                  "Olov",
                  "San (相)",
                  "{vitalitySang}"
                ],
                [
                  "Tuproq",
                  "Van (旺)",
                  "{vitalityWang}"
                ],
                [
                  "Metall",
                  "Su (囚)",
                  "{vitalitySu}"
                ],
                [
                  "Suv",
                  "Xyu (休)",
                  "{vitalityHyu}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Day stem bo'yicha Ten Gods",
        "blocks": [
          {
            "p": "Branch 辰 ichidagi bir xil hidden stems day stemga qarab turli Ten Gods bo'ladi. Kun branchi 辰 bo'lganda, bu jadval turmush o'rtog'i pozitsiyasining o'qilishidir."
          },
          {
            "table": {
              "caption": "Hidden stems 辰: har bir day stemga nisbatan nima ekanligi",
              "head": [
                "Day stem",
                "Yin Yog'och (乙) — qoldiq (餘氣)",
                "Yin Suv (癸) — o'rta (中氣)",
                "Yang Tuproq (戊) — asosiy (本氣)"
              ],
              "rows": [
                [
                  "Yang Yog'och (甲)",
                  "Raqib (劫財)",
                  "G'amxo'rlik (正印)",
                  "Kutilmagan boylik (偏財)"
                ],
                [
                  "Yin Yog'och (乙)",
                  "Hamroh (比肩)",
                  "Noodatiy tayanch (偏印)",
                  "Barqaror boylik (正財)"
                ],
                [
                  "Yang Olov (丙)",
                  "G'amxo'rlik (正印)",
                  "Nufuz (正官)",
                  "Ifoda (食神)"
                ],
                [
                  "Yin Olov (丁)",
                  "Noodatiy tayanch (偏印)",
                  "Sinovchi (偏官)",
                  "Buzuvchi (傷官)"
                ],
                [
                  "Yang Tuproq (戊)",
                  "Nufuz (正官)",
                  "Barqaror boylik (正財)",
                  "Hamroh (比肩)"
                ],
                [
                  "Yin Tuproq (己)",
                  "Sinovchi (偏官)",
                  "Kutilmagan boylik (偏財)",
                  "Raqib (劫財)"
                ],
                [
                  "Yang Metall (庚)",
                  "Barqaror boylik (正財)",
                  "Buzuvchi (傷官)",
                  "Noodatiy tayanch (偏印)"
                ],
                [
                  "Yin Metall (辛)",
                  "Kutilmagan boylik (偏財)",
                  "Ifoda (食神)",
                  "G'amxo'rlik (正印)"
                ],
                [
                  "Yang Suv (壬)",
                  "Buzuvchi (傷官)",
                  "Raqib (劫財)",
                  "Sinovchi (偏官)"
                ],
                [
                  "Yin Suv (癸)",
                  "Ifoda (食神)",
                  "Hamroh (比肩)",
                  "Nufuz (正官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bu qo'llanma nimani aytmaydi",
        "blocks": [
          {
            "ul": [
              "Bitta branch insonni belgilab bermaydi. Bir xil branch day stem va month branchga qarab turlicha o'qiladi.",
              "Branchlar o'rtasidagi uyg'unlik, to'qnashuv va kelishmovchilik kabi munosabatlar bu yerda ko'rib chiqilmagan."
            ]
          },
          {
            "p": "Branchlar o'rtasidagi munosabatlar [o'n ikki branch jadvali](/guide/branches) da, uning zodiak hayvoni sifatidagi ma'nosi esa [zodiak Saju ichida qayerda turishi](/guide/zodiac) da keltirilgan. Boshqa branchlar: [子 (Sichqon)](/guide/branch-ja) · [丑 (Sigir)](/guide/branch-chuk) · [寅 (Yo'lbars)](/guide/branch-in) · [卯 (Quyon)](/guide/branch-myo) · [巳 (Ilon)](/guide/branch-sa) · [午 (Ot)](/guide/branch-o) · [未 (Qo'y)](/guide/branch-mi) · [申 (Maymun)](/guide/branch-sin) · [酉 (Xo'roz)](/guide/branch-yu) · [戌 (It)](/guide/branch-sul) · [亥 (Cho'chqa)](/guide/branch-hae)"
          }
        ]
      }
    ]
  },

  "guide/branch-sa": {
    "eyebrow": "Earthly branches",
    "title": "巳 — earthly branch: Ilon",
    "summary": "Earthly branch 巳 ushlab turgan stemlar (hidden stems), u month branch bo'lganda besh element kuchi va har bir day stem uchun o'qiladigan Ten Gods — Saju-Link hisoblash qoidalarida qanday bo'lsa, aynan shunday keltirilgan.",
    "backLabel": "Hisoblash asosi",
    "sections": [
      {
        "title": "巳 — o'n ikki earthly branchning oltinchisi",
        "blocks": [
          {
            "p": "巳 — o'n ikki earthly branchning oltinchisi va Ilon hayvoniga tegishli. Tug'ilgan oyning branchi 巳 bo'lsa, fasl — yoz, faslga egalik qiluvchi element — Olov."
          },
          {
            "p": "Tug'ilgan kunning branchi 巳 bo'lsa, bu belgi turmush o'rtog'i pozitsiyasi bo'ladi. Quyida bu branch qaysi stemlarni ushlab turishi va ular day stemga nisbatan nima ekanligi ko'rsatilgan."
          }
        ]
      },
      {
        "title": "Bu branch ushlab turgan stemlar (hidden stems)",
        "blocks": [
          {
            "p": "Branch — bitta ko'rinadigan belgi, lekin ichida stemlarni saqlaydi. Ulush — branchning o'ttiz kuni stemlar o'rtasida qanday bo'linishi, asosiy stem esa branchning vakillik energiyasi."
          },
          {
            "table": {
              "caption": "Hidden stems: 巳",
              "head": [
                "Stem",
                "Element va qutb",
                "Pozitsiya",
                "Ulush"
              ],
              "rows": [
                [
                  "Yang Tuproq (戊)",
                  "Tuproq Yang",
                  "qoldiq (餘氣)",
                  "{hidSaYeo}"
                ],
                [
                  "Yang Metall (庚)",
                  "Metall Yang",
                  "o'rta (中氣)",
                  "{hidSaJung}"
                ],
                [
                  "Yang Olov (丙)",
                  "Olov Yang",
                  "asosiy (本氣)",
                  "{hidSaBon}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Month branch 巳 bo'lgandagi besh element kuchi",
        "blocks": [
          {
            "p": "Tug'ilgan oyning branchi 巳 bo'lsa, har bir element bir holat oladi (Van, San, Xyu, Su, Sa) va bu holat uning kuchiga qo'llaniladigan ko'paytirgichga aylanadi."
          },
          {
            "table": {
              "caption": "Month branch 巳 uchun element holatlari (yoz)",
              "head": [
                "Element",
                "Holat",
                "Ko'paytirgich"
              ],
              "rows": [
                [
                  "Yog'och",
                  "Xyu (休)",
                  "{vitalityHyu}"
                ],
                [
                  "Olov",
                  "Van (旺)",
                  "{vitalityWang}"
                ],
                [
                  "Tuproq",
                  "San (相)",
                  "{vitalitySang}"
                ],
                [
                  "Metall",
                  "Sa (死)",
                  "{vitalitySa}"
                ],
                [
                  "Suv",
                  "Su (囚)",
                  "{vitalitySu}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Day stem bo'yicha Ten Gods",
        "blocks": [
          {
            "p": "Branch 巳 ichidagi bir xil hidden stems day stemga qarab turli Ten Gods bo'ladi. Kun branchi 巳 bo'lganda, bu jadval turmush o'rtog'i pozitsiyasining o'qilishidir."
          },
          {
            "table": {
              "caption": "Hidden stems 巳: har bir day stemga nisbatan nima ekanligi",
              "head": [
                "Day stem",
                "Yang Tuproq (戊) — qoldiq (餘氣)",
                "Yang Metall (庚) — o'rta (中氣)",
                "Yang Olov (丙) — asosiy (本氣)"
              ],
              "rows": [
                [
                  "Yang Yog'och (甲)",
                  "Kutilmagan boylik (偏財)",
                  "Sinovchi (偏官)",
                  "Ifoda (食神)"
                ],
                [
                  "Yin Yog'och (乙)",
                  "Barqaror boylik (正財)",
                  "Nufuz (正官)",
                  "Buzuvchi (傷官)"
                ],
                [
                  "Yang Olov (丙)",
                  "Ifoda (食神)",
                  "Kutilmagan boylik (偏財)",
                  "Hamroh (比肩)"
                ],
                [
                  "Yin Olov (丁)",
                  "Buzuvchi (傷官)",
                  "Barqaror boylik (正財)",
                  "Raqib (劫財)"
                ],
                [
                  "Yang Tuproq (戊)",
                  "Hamroh (比肩)",
                  "Ifoda (食神)",
                  "Noodatiy tayanch (偏印)"
                ],
                [
                  "Yin Tuproq (己)",
                  "Raqib (劫財)",
                  "Buzuvchi (傷官)",
                  "G'amxo'rlik (正印)"
                ],
                [
                  "Yang Metall (庚)",
                  "Noodatiy tayanch (偏印)",
                  "Hamroh (比肩)",
                  "Sinovchi (偏官)"
                ],
                [
                  "Yin Metall (辛)",
                  "G'amxo'rlik (正印)",
                  "Raqib (劫財)",
                  "Nufuz (正官)"
                ],
                [
                  "Yang Suv (壬)",
                  "Sinovchi (偏官)",
                  "Noodatiy tayanch (偏印)",
                  "Kutilmagan boylik (偏財)"
                ],
                [
                  "Yin Suv (癸)",
                  "Nufuz (正官)",
                  "G'amxo'rlik (正印)",
                  "Barqaror boylik (正財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bu qo'llanma nimani aytmaydi",
        "blocks": [
          {
            "ul": [
              "Bitta branch insonni belgilab bermaydi. Bir xil branch day stem va month branchga qarab turlicha o'qiladi.",
              "Branchlar o'rtasidagi uyg'unlik, to'qnashuv va kelishmovchilik kabi munosabatlar bu yerda ko'rib chiqilmagan."
            ]
          },
          {
            "p": "Branchlar o'rtasidagi munosabatlar [o'n ikki branch jadvali](/guide/branches) da, uning zodiak hayvoni sifatidagi ma'nosi esa [zodiak Saju ichida qayerda turishi](/guide/zodiac) da keltirilgan. Boshqa branchlar: [子 (Sichqon)](/guide/branch-ja) · [丑 (Sigir)](/guide/branch-chuk) · [寅 (Yo'lbars)](/guide/branch-in) · [卯 (Quyon)](/guide/branch-myo) · [辰 (Ajdar)](/guide/branch-jin) · [午 (Ot)](/guide/branch-o) · [未 (Qo'y)](/guide/branch-mi) · [申 (Maymun)](/guide/branch-sin) · [酉 (Xo'roz)](/guide/branch-yu) · [戌 (It)](/guide/branch-sul) · [亥 (Cho'chqa)](/guide/branch-hae)"
          }
        ]
      }
    ]
  },

  "guide/branch-o": {
    "eyebrow": "Earthly branches",
    "title": "午 — earthly branch: Ot",
    "summary": "Earthly branch 午 ushlab turgan stemlar (hidden stems), u month branch bo'lganda besh element kuchi va har bir day stem uchun o'qiladigan Ten Gods — Saju-Link hisoblash qoidalarida qanday bo'lsa, aynan shunday keltirilgan.",
    "backLabel": "Hisoblash asosi",
    "sections": [
      {
        "title": "午 — o'n ikki earthly branchning yettinchisi",
        "blocks": [
          {
            "p": "午 — o'n ikki earthly branchning yettinchisi va Ot hayvoniga tegishli. Tug'ilgan oyning branchi 午 bo'lsa, fasl — yoz, faslga egalik qiluvchi element — Olov."
          },
          {
            "p": "Tug'ilgan kunning branchi 午 bo'lsa, bu belgi turmush o'rtog'i pozitsiyasi bo'ladi. Quyida bu branch qaysi stemlarni ushlab turishi va ular day stemga nisbatan nima ekanligi ko'rsatilgan."
          }
        ]
      },
      {
        "title": "Bu branch ushlab turgan stemlar (hidden stems)",
        "blocks": [
          {
            "p": "Branch — bitta ko'rinadigan belgi, lekin ichida stemlarni saqlaydi. Ulush — branchning o'ttiz kuni stemlar o'rtasida qanday bo'linishi, asosiy stem esa branchning vakillik energiyasi."
          },
          {
            "table": {
              "caption": "Hidden stems: 午",
              "head": [
                "Stem",
                "Element va qutb",
                "Pozitsiya",
                "Ulush"
              ],
              "rows": [
                [
                  "Yang Olov (丙)",
                  "Olov Yang",
                  "qoldiq (餘氣)",
                  "{hidOYeo}"
                ],
                [
                  "Yin Tuproq (己)",
                  "Tuproq Yin",
                  "o'rta (中氣)",
                  "{hidOJung}"
                ],
                [
                  "Yin Olov (丁)",
                  "Olov Yin",
                  "asosiy (本氣)",
                  "{hidOBon}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Month branch 午 bo'lgandagi besh element kuchi",
        "blocks": [
          {
            "p": "Tug'ilgan oyning branchi 午 bo'lsa, har bir element bir holat oladi (Van, San, Xyu, Su, Sa) va bu holat uning kuchiga qo'llaniladigan ko'paytirgichga aylanadi."
          },
          {
            "table": {
              "caption": "Month branch 午 uchun element holatlari (yoz)",
              "head": [
                "Element",
                "Holat",
                "Ko'paytirgich"
              ],
              "rows": [
                [
                  "Yog'och",
                  "Xyu (休)",
                  "{vitalityHyu}"
                ],
                [
                  "Olov",
                  "Van (旺)",
                  "{vitalityWang}"
                ],
                [
                  "Tuproq",
                  "San (相)",
                  "{vitalitySang}"
                ],
                [
                  "Metall",
                  "Sa (死)",
                  "{vitalitySa}"
                ],
                [
                  "Suv",
                  "Su (囚)",
                  "{vitalitySu}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Day stem bo'yicha Ten Gods",
        "blocks": [
          {
            "p": "Branch 午 ichidagi bir xil hidden stems day stemga qarab turli Ten Gods bo'ladi. Kun branchi 午 bo'lganda, bu jadval turmush o'rtog'i pozitsiyasining o'qilishidir."
          },
          {
            "table": {
              "caption": "Hidden stems 午: har bir day stemga nisbatan nima ekanligi",
              "head": [
                "Day stem",
                "Yang Olov (丙) — qoldiq (餘氣)",
                "Yin Tuproq (己) — o'rta (中氣)",
                "Yin Olov (丁) — asosiy (本氣)"
              ],
              "rows": [
                [
                  "Yang Yog'och (甲)",
                  "Ifoda (食神)",
                  "Barqaror boylik (正財)",
                  "Buzuvchi (傷官)"
                ],
                [
                  "Yin Yog'och (乙)",
                  "Buzuvchi (傷官)",
                  "Kutilmagan boylik (偏財)",
                  "Ifoda (食神)"
                ],
                [
                  "Yang Olov (丙)",
                  "Hamroh (比肩)",
                  "Buzuvchi (傷官)",
                  "Raqib (劫財)"
                ],
                [
                  "Yin Olov (丁)",
                  "Raqib (劫財)",
                  "Ifoda (食神)",
                  "Hamroh (比肩)"
                ],
                [
                  "Yang Tuproq (戊)",
                  "Noodatiy tayanch (偏印)",
                  "Raqib (劫財)",
                  "G'amxo'rlik (正印)"
                ],
                [
                  "Yin Tuproq (己)",
                  "G'amxo'rlik (正印)",
                  "Hamroh (比肩)",
                  "Noodatiy tayanch (偏印)"
                ],
                [
                  "Yang Metall (庚)",
                  "Sinovchi (偏官)",
                  "G'amxo'rlik (正印)",
                  "Nufuz (正官)"
                ],
                [
                  "Yin Metall (辛)",
                  "Nufuz (正官)",
                  "Noodatiy tayanch (偏印)",
                  "Sinovchi (偏官)"
                ],
                [
                  "Yang Suv (壬)",
                  "Kutilmagan boylik (偏財)",
                  "Nufuz (正官)",
                  "Barqaror boylik (正財)"
                ],
                [
                  "Yin Suv (癸)",
                  "Barqaror boylik (正財)",
                  "Sinovchi (偏官)",
                  "Kutilmagan boylik (偏財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bu qo'llanma nimani aytmaydi",
        "blocks": [
          {
            "ul": [
              "Bitta branch insonni belgilab bermaydi. Bir xil branch day stem va month branchga qarab turlicha o'qiladi.",
              "Branchlar o'rtasidagi uyg'unlik, to'qnashuv va kelishmovchilik kabi munosabatlar bu yerda ko'rib chiqilmagan."
            ]
          },
          {
            "p": "Branchlar o'rtasidagi munosabatlar [o'n ikki branch jadvali](/guide/branches) da, uning zodiak hayvoni sifatidagi ma'nosi esa [zodiak Saju ichida qayerda turishi](/guide/zodiac) da keltirilgan. Boshqa branchlar: [子 (Sichqon)](/guide/branch-ja) · [丑 (Sigir)](/guide/branch-chuk) · [寅 (Yo'lbars)](/guide/branch-in) · [卯 (Quyon)](/guide/branch-myo) · [辰 (Ajdar)](/guide/branch-jin) · [巳 (Ilon)](/guide/branch-sa) · [未 (Qo'y)](/guide/branch-mi) · [申 (Maymun)](/guide/branch-sin) · [酉 (Xo'roz)](/guide/branch-yu) · [戌 (It)](/guide/branch-sul) · [亥 (Cho'chqa)](/guide/branch-hae)"
          }
        ]
      }
    ]
  },

  "guide/branch-mi": {
    "eyebrow": "Earthly branches",
    "title": "未 — earthly branch: Qo'y",
    "summary": "Earthly branch 未 ushlab turgan stemlar (hidden stems), u month branch bo'lganda besh element kuchi va har bir day stem uchun o'qiladigan Ten Gods — Saju-Link hisoblash qoidalarida qanday bo'lsa, aynan shunday keltirilgan.",
    "backLabel": "Hisoblash asosi",
    "sections": [
      {
        "title": "未 — o'n ikki earthly branchning sakkizinchisi",
        "blocks": [
          {
            "p": "未 — o'n ikki earthly branchning sakkizinchisi va Qo'y hayvoniga tegishli. Tug'ilgan oyning branchi 未 bo'lsa, fasl — yoz, faslga egalik qiluvchi element — Olov. Bu o'tish oyi (辰未戌丑), shuning uchun Tuproq ham Van holatida hisoblanadi."
          },
          {
            "p": "Tug'ilgan kunning branchi 未 bo'lsa, bu belgi turmush o'rtog'i pozitsiyasi bo'ladi. Quyida bu branch qaysi stemlarni ushlab turishi va ular day stemga nisbatan nima ekanligi ko'rsatilgan."
          }
        ]
      },
      {
        "title": "Bu branch ushlab turgan stemlar (hidden stems)",
        "blocks": [
          {
            "p": "Branch — bitta ko'rinadigan belgi, lekin ichida stemlarni saqlaydi. Ulush — branchning o'ttiz kuni stemlar o'rtasida qanday bo'linishi, asosiy stem esa branchning vakillik energiyasi."
          },
          {
            "table": {
              "caption": "Hidden stems: 未",
              "head": [
                "Stem",
                "Element va qutb",
                "Pozitsiya",
                "Ulush"
              ],
              "rows": [
                [
                  "Yin Olov (丁)",
                  "Olov Yin",
                  "qoldiq (餘氣)",
                  "{hidMiYeo}"
                ],
                [
                  "Yin Yog'och (乙)",
                  "Yog'och Yin",
                  "o'rta (中氣)",
                  "{hidMiJung}"
                ],
                [
                  "Yin Tuproq (己)",
                  "Tuproq Yin",
                  "asosiy (本氣)",
                  "{hidMiBon}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Month branch 未 bo'lgandagi besh element kuchi",
        "blocks": [
          {
            "p": "Tug'ilgan oyning branchi 未 bo'lsa, har bir element bir holat oladi (Van, San, Xyu, Su, Sa) va bu holat uning kuchiga qo'llaniladigan ko'paytirgichga aylanadi."
          },
          {
            "table": {
              "caption": "Month branch 未 uchun element holatlari (yoz (o'tish oyi))",
              "head": [
                "Element",
                "Holat",
                "Ko'paytirgich"
              ],
              "rows": [
                [
                  "Yog'och",
                  "Xyu (休)",
                  "{vitalityHyu}"
                ],
                [
                  "Olov",
                  "Van (旺)",
                  "{vitalityWang}"
                ],
                [
                  "Tuproq",
                  "Van (旺)",
                  "{vitalityWang}"
                ],
                [
                  "Metall",
                  "Sa (死)",
                  "{vitalitySa}"
                ],
                [
                  "Suv",
                  "Su (囚)",
                  "{vitalitySu}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Day stem bo'yicha Ten Gods",
        "blocks": [
          {
            "p": "Branch 未 ichidagi bir xil hidden stems day stemga qarab turli Ten Gods bo'ladi. Kun branchi 未 bo'lganda, bu jadval turmush o'rtog'i pozitsiyasining o'qilishidir."
          },
          {
            "table": {
              "caption": "Hidden stems 未: har bir day stemga nisbatan nima ekanligi",
              "head": [
                "Day stem",
                "Yin Olov (丁) — qoldiq (餘氣)",
                "Yin Yog'och (乙) — o'rta (中氣)",
                "Yin Tuproq (己) — asosiy (本氣)"
              ],
              "rows": [
                [
                  "Yang Yog'och (甲)",
                  "Buzuvchi (傷官)",
                  "Raqib (劫財)",
                  "Barqaror boylik (正財)"
                ],
                [
                  "Yin Yog'och (乙)",
                  "Ifoda (食神)",
                  "Hamroh (比肩)",
                  "Kutilmagan boylik (偏財)"
                ],
                [
                  "Yang Olov (丙)",
                  "Raqib (劫財)",
                  "G'amxo'rlik (正印)",
                  "Buzuvchi (傷官)"
                ],
                [
                  "Yin Olov (丁)",
                  "Hamroh (比肩)",
                  "Noodatiy tayanch (偏印)",
                  "Ifoda (食神)"
                ],
                [
                  "Yang Tuproq (戊)",
                  "G'amxo'rlik (正印)",
                  "Nufuz (正官)",
                  "Raqib (劫財)"
                ],
                [
                  "Yin Tuproq (己)",
                  "Noodatiy tayanch (偏印)",
                  "Sinovchi (偏官)",
                  "Hamroh (比肩)"
                ],
                [
                  "Yang Metall (庚)",
                  "Nufuz (正官)",
                  "Barqaror boylik (正財)",
                  "G'amxo'rlik (正印)"
                ],
                [
                  "Yin Metall (辛)",
                  "Sinovchi (偏官)",
                  "Kutilmagan boylik (偏財)",
                  "Noodatiy tayanch (偏印)"
                ],
                [
                  "Yang Suv (壬)",
                  "Barqaror boylik (正財)",
                  "Buzuvchi (傷官)",
                  "Nufuz (正官)"
                ],
                [
                  "Yin Suv (癸)",
                  "Kutilmagan boylik (偏財)",
                  "Ifoda (食神)",
                  "Sinovchi (偏官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bu qo'llanma nimani aytmaydi",
        "blocks": [
          {
            "ul": [
              "Bitta branch insonni belgilab bermaydi. Bir xil branch day stem va month branchga qarab turlicha o'qiladi.",
              "Branchlar o'rtasidagi uyg'unlik, to'qnashuv va kelishmovchilik kabi munosabatlar bu yerda ko'rib chiqilmagan."
            ]
          },
          {
            "p": "Branchlar o'rtasidagi munosabatlar [o'n ikki branch jadvali](/guide/branches) da, uning zodiak hayvoni sifatidagi ma'nosi esa [zodiak Saju ichida qayerda turishi](/guide/zodiac) da keltirilgan. Boshqa branchlar: [子 (Sichqon)](/guide/branch-ja) · [丑 (Sigir)](/guide/branch-chuk) · [寅 (Yo'lbars)](/guide/branch-in) · [卯 (Quyon)](/guide/branch-myo) · [辰 (Ajdar)](/guide/branch-jin) · [巳 (Ilon)](/guide/branch-sa) · [午 (Ot)](/guide/branch-o) · [申 (Maymun)](/guide/branch-sin) · [酉 (Xo'roz)](/guide/branch-yu) · [戌 (It)](/guide/branch-sul) · [亥 (Cho'chqa)](/guide/branch-hae)"
          }
        ]
      }
    ]
  },

  "guide/branch-sin": {
    "eyebrow": "Earthly branches",
    "title": "申 — earthly branch: Maymun",
    "summary": "Earthly branch 申 ushlab turgan stemlar (hidden stems), u month branch bo'lganda besh element kuchi va har bir day stem uchun o'qiladigan Ten Gods — Saju-Link hisoblash qoidalarida qanday bo'lsa, aynan shunday keltirilgan.",
    "backLabel": "Hisoblash asosi",
    "sections": [
      {
        "title": "申 — o'n ikki earthly branchning to'qqizinchisi",
        "blocks": [
          {
            "p": "申 — o'n ikki earthly branchning to'qqizinchisi va Maymun hayvoniga tegishli. Tug'ilgan oyning branchi 申 bo'lsa, fasl — kuz, faslga egalik qiluvchi element — Metall."
          },
          {
            "p": "Tug'ilgan kunning branchi 申 bo'lsa, bu belgi turmush o'rtog'i pozitsiyasi bo'ladi. Quyida bu branch qaysi stemlarni ushlab turishi va ular day stemga nisbatan nima ekanligi ko'rsatilgan."
          }
        ]
      },
      {
        "title": "Bu branch ushlab turgan stemlar (hidden stems)",
        "blocks": [
          {
            "p": "Branch — bitta ko'rinadigan belgi, lekin ichida stemlarni saqlaydi. Ulush — branchning o'ttiz kuni stemlar o'rtasida qanday bo'linishi, asosiy stem esa branchning vakillik energiyasi."
          },
          {
            "table": {
              "caption": "Hidden stems: 申",
              "head": [
                "Stem",
                "Element va qutb",
                "Pozitsiya",
                "Ulush"
              ],
              "rows": [
                [
                  "Yang Tuproq (戊)",
                  "Tuproq Yang",
                  "qoldiq (餘氣)",
                  "{hidSinYeo}"
                ],
                [
                  "Yang Suv (壬)",
                  "Suv Yang",
                  "o'rta (中氣)",
                  "{hidSinJung}"
                ],
                [
                  "Yang Metall (庚)",
                  "Metall Yang",
                  "asosiy (本氣)",
                  "{hidSinBon}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Month branch 申 bo'lgandagi besh element kuchi",
        "blocks": [
          {
            "p": "Tug'ilgan oyning branchi 申 bo'lsa, har bir element bir holat oladi (Van, San, Xyu, Su, Sa) va bu holat uning kuchiga qo'llaniladigan ko'paytirgichga aylanadi."
          },
          {
            "table": {
              "caption": "Month branch 申 uchun element holatlari (kuz)",
              "head": [
                "Element",
                "Holat",
                "Ko'paytirgich"
              ],
              "rows": [
                [
                  "Yog'och",
                  "Sa (死)",
                  "{vitalitySa}"
                ],
                [
                  "Olov",
                  "Su (囚)",
                  "{vitalitySu}"
                ],
                [
                  "Tuproq",
                  "Xyu (休)",
                  "{vitalityHyu}"
                ],
                [
                  "Metall",
                  "Van (旺)",
                  "{vitalityWang}"
                ],
                [
                  "Suv",
                  "San (相)",
                  "{vitalitySang}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Day stem bo'yicha Ten Gods",
        "blocks": [
          {
            "p": "Branch 申 ichidagi bir xil hidden stems day stemga qarab turli Ten Gods bo'ladi. Kun branchi 申 bo'lganda, bu jadval turmush o'rtog'i pozitsiyasining o'qilishidir."
          },
          {
            "table": {
              "caption": "Hidden stems 申: har bir day stemga nisbatan nima ekanligi",
              "head": [
                "Day stem",
                "Yang Tuproq (戊) — qoldiq (餘氣)",
                "Yang Suv (壬) — o'rta (中氣)",
                "Yang Metall (庚) — asosiy (本氣)"
              ],
              "rows": [
                [
                  "Yang Yog'och (甲)",
                  "Kutilmagan boylik (偏財)",
                  "Noodatiy tayanch (偏印)",
                  "Sinovchi (偏官)"
                ],
                [
                  "Yin Yog'och (乙)",
                  "Barqaror boylik (正財)",
                  "G'amxo'rlik (正印)",
                  "Nufuz (正官)"
                ],
                [
                  "Yang Olov (丙)",
                  "Ifoda (食神)",
                  "Sinovchi (偏官)",
                  "Kutilmagan boylik (偏財)"
                ],
                [
                  "Yin Olov (丁)",
                  "Buzuvchi (傷官)",
                  "Nufuz (正官)",
                  "Barqaror boylik (正財)"
                ],
                [
                  "Yang Tuproq (戊)",
                  "Hamroh (比肩)",
                  "Kutilmagan boylik (偏財)",
                  "Ifoda (食神)"
                ],
                [
                  "Yin Tuproq (己)",
                  "Raqib (劫財)",
                  "Barqaror boylik (正財)",
                  "Buzuvchi (傷官)"
                ],
                [
                  "Yang Metall (庚)",
                  "Noodatiy tayanch (偏印)",
                  "Ifoda (食神)",
                  "Hamroh (比肩)"
                ],
                [
                  "Yin Metall (辛)",
                  "G'amxo'rlik (正印)",
                  "Buzuvchi (傷官)",
                  "Raqib (劫財)"
                ],
                [
                  "Yang Suv (壬)",
                  "Sinovchi (偏官)",
                  "Hamroh (比肩)",
                  "Noodatiy tayanch (偏印)"
                ],
                [
                  "Yin Suv (癸)",
                  "Nufuz (正官)",
                  "Raqib (劫財)",
                  "G'amxo'rlik (正印)"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bu qo'llanma nimani aytmaydi",
        "blocks": [
          {
            "ul": [
              "Bitta branch insonni belgilab bermaydi. Bir xil branch day stem va month branchga qarab turlicha o'qiladi.",
              "Branchlar o'rtasidagi uyg'unlik, to'qnashuv va kelishmovchilik kabi munosabatlar bu yerda ko'rib chiqilmagan."
            ]
          },
          {
            "p": "Branchlar o'rtasidagi munosabatlar [o'n ikki branch jadvali](/guide/branches) da, uning zodiak hayvoni sifatidagi ma'nosi esa [zodiak Saju ichida qayerda turishi](/guide/zodiac) da keltirilgan. Boshqa branchlar: [子 (Sichqon)](/guide/branch-ja) · [丑 (Sigir)](/guide/branch-chuk) · [寅 (Yo'lbars)](/guide/branch-in) · [卯 (Quyon)](/guide/branch-myo) · [辰 (Ajdar)](/guide/branch-jin) · [巳 (Ilon)](/guide/branch-sa) · [午 (Ot)](/guide/branch-o) · [未 (Qo'y)](/guide/branch-mi) · [酉 (Xo'roz)](/guide/branch-yu) · [戌 (It)](/guide/branch-sul) · [亥 (Cho'chqa)](/guide/branch-hae)"
          }
        ]
      }
    ]
  },

  "guide/branch-yu": {
    "eyebrow": "Earthly branches",
    "title": "酉 — earthly branch: Xo'roz",
    "summary": "Earthly branch 酉 ushlab turgan stemlar (hidden stems), u month branch bo'lganda besh element kuchi va har bir day stem uchun o'qiladigan Ten Gods — Saju-Link hisoblash qoidalarida qanday bo'lsa, aynan shunday keltirilgan.",
    "backLabel": "Hisoblash asosi",
    "sections": [
      {
        "title": "酉 — o'n ikki earthly branchning o'ninchisi",
        "blocks": [
          {
            "p": "酉 — o'n ikki earthly branchning o'ninchisi va Xo'roz hayvoniga tegishli. Tug'ilgan oyning branchi 酉 bo'lsa, fasl — kuz, faslga egalik qiluvchi element — Metall."
          },
          {
            "p": "Tug'ilgan kunning branchi 酉 bo'lsa, bu belgi turmush o'rtog'i pozitsiyasi bo'ladi. Quyida bu branch qaysi stemlarni ushlab turishi va ular day stemga nisbatan nima ekanligi ko'rsatilgan."
          }
        ]
      },
      {
        "title": "Bu branch ushlab turgan stemlar (hidden stems)",
        "blocks": [
          {
            "p": "Branch — bitta ko'rinadigan belgi, lekin ichida stemlarni saqlaydi. Ulush — branchning o'ttiz kuni stemlar o'rtasida qanday bo'linishi, asosiy stem esa branchning vakillik energiyasi."
          },
          {
            "table": {
              "caption": "Hidden stems: 酉",
              "head": [
                "Stem",
                "Element va qutb",
                "Pozitsiya",
                "Ulush"
              ],
              "rows": [
                [
                  "Yang Metall (庚)",
                  "Metall Yang",
                  "qoldiq (餘氣)",
                  "{hidYuYeo}"
                ],
                [
                  "Yin Metall (辛)",
                  "Metall Yin",
                  "asosiy (本氣)",
                  "{hidYuBon}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Month branch 酉 bo'lgandagi besh element kuchi",
        "blocks": [
          {
            "p": "Tug'ilgan oyning branchi 酉 bo'lsa, har bir element bir holat oladi (Van, San, Xyu, Su, Sa) va bu holat uning kuchiga qo'llaniladigan ko'paytirgichga aylanadi."
          },
          {
            "table": {
              "caption": "Month branch 酉 uchun element holatlari (kuz)",
              "head": [
                "Element",
                "Holat",
                "Ko'paytirgich"
              ],
              "rows": [
                [
                  "Yog'och",
                  "Sa (死)",
                  "{vitalitySa}"
                ],
                [
                  "Olov",
                  "Su (囚)",
                  "{vitalitySu}"
                ],
                [
                  "Tuproq",
                  "Xyu (休)",
                  "{vitalityHyu}"
                ],
                [
                  "Metall",
                  "Van (旺)",
                  "{vitalityWang}"
                ],
                [
                  "Suv",
                  "San (相)",
                  "{vitalitySang}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Day stem bo'yicha Ten Gods",
        "blocks": [
          {
            "p": "Branch 酉 ichidagi bir xil hidden stems day stemga qarab turli Ten Gods bo'ladi. Kun branchi 酉 bo'lganda, bu jadval turmush o'rtog'i pozitsiyasining o'qilishidir."
          },
          {
            "table": {
              "caption": "Hidden stems 酉: har bir day stemga nisbatan nima ekanligi",
              "head": [
                "Day stem",
                "Yang Metall (庚) — qoldiq (餘氣)",
                "Yin Metall (辛) — asosiy (本氣)"
              ],
              "rows": [
                [
                  "Yang Yog'och (甲)",
                  "Sinovchi (偏官)",
                  "Nufuz (正官)"
                ],
                [
                  "Yin Yog'och (乙)",
                  "Nufuz (正官)",
                  "Sinovchi (偏官)"
                ],
                [
                  "Yang Olov (丙)",
                  "Kutilmagan boylik (偏財)",
                  "Barqaror boylik (正財)"
                ],
                [
                  "Yin Olov (丁)",
                  "Barqaror boylik (正財)",
                  "Kutilmagan boylik (偏財)"
                ],
                [
                  "Yang Tuproq (戊)",
                  "Ifoda (食神)",
                  "Buzuvchi (傷官)"
                ],
                [
                  "Yin Tuproq (己)",
                  "Buzuvchi (傷官)",
                  "Ifoda (食神)"
                ],
                [
                  "Yang Metall (庚)",
                  "Hamroh (比肩)",
                  "Raqib (劫財)"
                ],
                [
                  "Yin Metall (辛)",
                  "Raqib (劫財)",
                  "Hamroh (比肩)"
                ],
                [
                  "Yang Suv (壬)",
                  "Noodatiy tayanch (偏印)",
                  "G'amxo'rlik (正印)"
                ],
                [
                  "Yin Suv (癸)",
                  "G'amxo'rlik (正印)",
                  "Noodatiy tayanch (偏印)"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bu qo'llanma nimani aytmaydi",
        "blocks": [
          {
            "ul": [
              "Bitta branch insonni belgilab bermaydi. Bir xil branch day stem va month branchga qarab turlicha o'qiladi.",
              "Branchlar o'rtasidagi uyg'unlik, to'qnashuv va kelishmovchilik kabi munosabatlar bu yerda ko'rib chiqilmagan."
            ]
          },
          {
            "p": "Branchlar o'rtasidagi munosabatlar [o'n ikki branch jadvali](/guide/branches) da, uning zodiak hayvoni sifatidagi ma'nosi esa [zodiak Saju ichida qayerda turishi](/guide/zodiac) da keltirilgan. Boshqa branchlar: [子 (Sichqon)](/guide/branch-ja) · [丑 (Sigir)](/guide/branch-chuk) · [寅 (Yo'lbars)](/guide/branch-in) · [卯 (Quyon)](/guide/branch-myo) · [辰 (Ajdar)](/guide/branch-jin) · [巳 (Ilon)](/guide/branch-sa) · [午 (Ot)](/guide/branch-o) · [未 (Qo'y)](/guide/branch-mi) · [申 (Maymun)](/guide/branch-sin) · [戌 (It)](/guide/branch-sul) · [亥 (Cho'chqa)](/guide/branch-hae)"
          }
        ]
      }
    ]
  },

  "guide/branch-sul": {
    "eyebrow": "Earthly branches",
    "title": "戌 — earthly branch: It",
    "summary": "Earthly branch 戌 ushlab turgan stemlar (hidden stems), u month branch bo'lganda besh element kuchi va har bir day stem uchun o'qiladigan Ten Gods — Saju-Link hisoblash qoidalarida qanday bo'lsa, aynan shunday keltirilgan.",
    "backLabel": "Hisoblash asosi",
    "sections": [
      {
        "title": "戌 — o'n ikki earthly branchning o'n birinchisi",
        "blocks": [
          {
            "p": "戌 — o'n ikki earthly branchning o'n birinchisi va It hayvoniga tegishli. Tug'ilgan oyning branchi 戌 bo'lsa, fasl — kuz, faslga egalik qiluvchi element — Metall. Bu o'tish oyi (辰未戌丑), shuning uchun Tuproq ham Van holatida hisoblanadi."
          },
          {
            "p": "Tug'ilgan kunning branchi 戌 bo'lsa, bu belgi turmush o'rtog'i pozitsiyasi bo'ladi. Quyida bu branch qaysi stemlarni ushlab turishi va ular day stemga nisbatan nima ekanligi ko'rsatilgan."
          }
        ]
      },
      {
        "title": "Bu branch ushlab turgan stemlar (hidden stems)",
        "blocks": [
          {
            "p": "Branch — bitta ko'rinadigan belgi, lekin ichida stemlarni saqlaydi. Ulush — branchning o'ttiz kuni stemlar o'rtasida qanday bo'linishi, asosiy stem esa branchning vakillik energiyasi."
          },
          {
            "table": {
              "caption": "Hidden stems: 戌",
              "head": [
                "Stem",
                "Element va qutb",
                "Pozitsiya",
                "Ulush"
              ],
              "rows": [
                [
                  "Yin Metall (辛)",
                  "Metall Yin",
                  "qoldiq (餘氣)",
                  "{hidSulYeo}"
                ],
                [
                  "Yin Olov (丁)",
                  "Olov Yin",
                  "o'rta (中氣)",
                  "{hidSulJung}"
                ],
                [
                  "Yang Tuproq (戊)",
                  "Tuproq Yang",
                  "asosiy (本氣)",
                  "{hidSulBon}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Month branch 戌 bo'lgandagi besh element kuchi",
        "blocks": [
          {
            "p": "Tug'ilgan oyning branchi 戌 bo'lsa, har bir element bir holat oladi (Van, San, Xyu, Su, Sa) va bu holat uning kuchiga qo'llaniladigan ko'paytirgichga aylanadi."
          },
          {
            "table": {
              "caption": "Month branch 戌 uchun element holatlari (kuz (o'tish oyi))",
              "head": [
                "Element",
                "Holat",
                "Ko'paytirgich"
              ],
              "rows": [
                [
                  "Yog'och",
                  "Sa (死)",
                  "{vitalitySa}"
                ],
                [
                  "Olov",
                  "Su (囚)",
                  "{vitalitySu}"
                ],
                [
                  "Tuproq",
                  "Van (旺)",
                  "{vitalityWang}"
                ],
                [
                  "Metall",
                  "Van (旺)",
                  "{vitalityWang}"
                ],
                [
                  "Suv",
                  "San (相)",
                  "{vitalitySang}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Day stem bo'yicha Ten Gods",
        "blocks": [
          {
            "p": "Branch 戌 ichidagi bir xil hidden stems day stemga qarab turli Ten Gods bo'ladi. Kun branchi 戌 bo'lganda, bu jadval turmush o'rtog'i pozitsiyasining o'qilishidir."
          },
          {
            "table": {
              "caption": "Hidden stems 戌: har bir day stemga nisbatan nima ekanligi",
              "head": [
                "Day stem",
                "Yin Metall (辛) — qoldiq (餘氣)",
                "Yin Olov (丁) — o'rta (中氣)",
                "Yang Tuproq (戊) — asosiy (本氣)"
              ],
              "rows": [
                [
                  "Yang Yog'och (甲)",
                  "Nufuz (正官)",
                  "Buzuvchi (傷官)",
                  "Kutilmagan boylik (偏財)"
                ],
                [
                  "Yin Yog'och (乙)",
                  "Sinovchi (偏官)",
                  "Ifoda (食神)",
                  "Barqaror boylik (正財)"
                ],
                [
                  "Yang Olov (丙)",
                  "Barqaror boylik (正財)",
                  "Raqib (劫財)",
                  "Ifoda (食神)"
                ],
                [
                  "Yin Olov (丁)",
                  "Kutilmagan boylik (偏財)",
                  "Hamroh (比肩)",
                  "Buzuvchi (傷官)"
                ],
                [
                  "Yang Tuproq (戊)",
                  "Buzuvchi (傷官)",
                  "G'amxo'rlik (正印)",
                  "Hamroh (比肩)"
                ],
                [
                  "Yin Tuproq (己)",
                  "Ifoda (食神)",
                  "Noodatiy tayanch (偏印)",
                  "Raqib (劫財)"
                ],
                [
                  "Yang Metall (庚)",
                  "Raqib (劫財)",
                  "Nufuz (正官)",
                  "Noodatiy tayanch (偏印)"
                ],
                [
                  "Yin Metall (辛)",
                  "Hamroh (比肩)",
                  "Sinovchi (偏官)",
                  "G'amxo'rlik (正印)"
                ],
                [
                  "Yang Suv (壬)",
                  "G'amxo'rlik (正印)",
                  "Barqaror boylik (正財)",
                  "Sinovchi (偏官)"
                ],
                [
                  "Yin Suv (癸)",
                  "Noodatiy tayanch (偏印)",
                  "Kutilmagan boylik (偏財)",
                  "Nufuz (正官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bu qo'llanma nimani aytmaydi",
        "blocks": [
          {
            "ul": [
              "Bitta branch insonni belgilab bermaydi. Bir xil branch day stem va month branchga qarab turlicha o'qiladi.",
              "Branchlar o'rtasidagi uyg'unlik, to'qnashuv va kelishmovchilik kabi munosabatlar bu yerda ko'rib chiqilmagan."
            ]
          },
          {
            "p": "Branchlar o'rtasidagi munosabatlar [o'n ikki branch jadvali](/guide/branches) da, uning zodiak hayvoni sifatidagi ma'nosi esa [zodiak Saju ichida qayerda turishi](/guide/zodiac) da keltirilgan. Boshqa branchlar: [子 (Sichqon)](/guide/branch-ja) · [丑 (Sigir)](/guide/branch-chuk) · [寅 (Yo'lbars)](/guide/branch-in) · [卯 (Quyon)](/guide/branch-myo) · [辰 (Ajdar)](/guide/branch-jin) · [巳 (Ilon)](/guide/branch-sa) · [午 (Ot)](/guide/branch-o) · [未 (Qo'y)](/guide/branch-mi) · [申 (Maymun)](/guide/branch-sin) · [酉 (Xo'roz)](/guide/branch-yu) · [亥 (Cho'chqa)](/guide/branch-hae)"
          }
        ]
      }
    ]
  },

  "guide/branch-hae": {
    "eyebrow": "Earthly branches",
    "title": "亥 — earthly branch: Cho'chqa",
    "summary": "Earthly branch 亥 ushlab turgan stemlar (hidden stems), u month branch bo'lganda besh element kuchi va har bir day stem uchun o'qiladigan Ten Gods — Saju-Link hisoblash qoidalarida qanday bo'lsa, aynan shunday keltirilgan.",
    "backLabel": "Hisoblash asosi",
    "sections": [
      {
        "title": "亥 — o'n ikki earthly branchning o'n ikkinchisi",
        "blocks": [
          {
            "p": "亥 — o'n ikki earthly branchning o'n ikkinchisi va Cho'chqa hayvoniga tegishli. Tug'ilgan oyning branchi 亥 bo'lsa, fasl — qish, faslga egalik qiluvchi element — Suv."
          },
          {
            "p": "Tug'ilgan kunning branchi 亥 bo'lsa, bu belgi turmush o'rtog'i pozitsiyasi bo'ladi. Quyida bu branch qaysi stemlarni ushlab turishi va ular day stemga nisbatan nima ekanligi ko'rsatilgan."
          }
        ]
      },
      {
        "title": "Bu branch ushlab turgan stemlar (hidden stems)",
        "blocks": [
          {
            "p": "Branch — bitta ko'rinadigan belgi, lekin ichida stemlarni saqlaydi. Ulush — branchning o'ttiz kuni stemlar o'rtasida qanday bo'linishi, asosiy stem esa branchning vakillik energiyasi."
          },
          {
            "table": {
              "caption": "Hidden stems: 亥",
              "head": [
                "Stem",
                "Element va qutb",
                "Pozitsiya",
                "Ulush"
              ],
              "rows": [
                [
                  "Yang Tuproq (戊)",
                  "Tuproq Yang",
                  "qoldiq (餘氣)",
                  "{hidHaeYeo}"
                ],
                [
                  "Yang Yog'och (甲)",
                  "Yog'och Yang",
                  "o'rta (中氣)",
                  "{hidHaeJung}"
                ],
                [
                  "Yang Suv (壬)",
                  "Suv Yang",
                  "asosiy (本氣)",
                  "{hidHaeBon}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Month branch 亥 bo'lgandagi besh element kuchi",
        "blocks": [
          {
            "p": "Tug'ilgan oyning branchi 亥 bo'lsa, har bir element bir holat oladi (Van, San, Xyu, Su, Sa) va bu holat uning kuchiga qo'llaniladigan ko'paytirgichga aylanadi."
          },
          {
            "table": {
              "caption": "Month branch 亥 uchun element holatlari (qish)",
              "head": [
                "Element",
                "Holat",
                "Ko'paytirgich"
              ],
              "rows": [
                [
                  "Yog'och",
                  "San (相)",
                  "{vitalitySang}"
                ],
                [
                  "Olov",
                  "Sa (死)",
                  "{vitalitySa}"
                ],
                [
                  "Tuproq",
                  "Su (囚)",
                  "{vitalitySu}"
                ],
                [
                  "Metall",
                  "Xyu (休)",
                  "{vitalityHyu}"
                ],
                [
                  "Suv",
                  "Van (旺)",
                  "{vitalityWang}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Day stem bo'yicha Ten Gods",
        "blocks": [
          {
            "p": "Branch 亥 ichidagi bir xil hidden stems day stemga qarab turli Ten Gods bo'ladi. Kun branchi 亥 bo'lganda, bu jadval turmush o'rtog'i pozitsiyasining o'qilishidir."
          },
          {
            "table": {
              "caption": "Hidden stems 亥: har bir day stemga nisbatan nima ekanligi",
              "head": [
                "Day stem",
                "Yang Tuproq (戊) — qoldiq (餘氣)",
                "Yang Yog'och (甲) — o'rta (中氣)",
                "Yang Suv (壬) — asosiy (本氣)"
              ],
              "rows": [
                [
                  "Yang Yog'och (甲)",
                  "Kutilmagan boylik (偏財)",
                  "Hamroh (比肩)",
                  "Noodatiy tayanch (偏印)"
                ],
                [
                  "Yin Yog'och (乙)",
                  "Barqaror boylik (正財)",
                  "Raqib (劫財)",
                  "G'amxo'rlik (正印)"
                ],
                [
                  "Yang Olov (丙)",
                  "Ifoda (食神)",
                  "Noodatiy tayanch (偏印)",
                  "Sinovchi (偏官)"
                ],
                [
                  "Yin Olov (丁)",
                  "Buzuvchi (傷官)",
                  "G'amxo'rlik (正印)",
                  "Nufuz (正官)"
                ],
                [
                  "Yang Tuproq (戊)",
                  "Hamroh (比肩)",
                  "Sinovchi (偏官)",
                  "Kutilmagan boylik (偏財)"
                ],
                [
                  "Yin Tuproq (己)",
                  "Raqib (劫財)",
                  "Nufuz (正官)",
                  "Barqaror boylik (正財)"
                ],
                [
                  "Yang Metall (庚)",
                  "Noodatiy tayanch (偏印)",
                  "Kutilmagan boylik (偏財)",
                  "Ifoda (食神)"
                ],
                [
                  "Yin Metall (辛)",
                  "G'amxo'rlik (正印)",
                  "Barqaror boylik (正財)",
                  "Buzuvchi (傷官)"
                ],
                [
                  "Yang Suv (壬)",
                  "Sinovchi (偏官)",
                  "Ifoda (食神)",
                  "Hamroh (比肩)"
                ],
                [
                  "Yin Suv (癸)",
                  "Nufuz (正官)",
                  "Buzuvchi (傷官)",
                  "Raqib (劫財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bu qo'llanma nimani aytmaydi",
        "blocks": [
          {
            "ul": [
              "Bitta branch insonni belgilab bermaydi. Bir xil branch day stem va month branchga qarab turlicha o'qiladi.",
              "Branchlar o'rtasidagi uyg'unlik, to'qnashuv va kelishmovchilik kabi munosabatlar bu yerda ko'rib chiqilmagan."
            ]
          },
          {
            "p": "Branchlar o'rtasidagi munosabatlar [o'n ikki branch jadvali](/guide/branches) da, uning zodiak hayvoni sifatidagi ma'nosi esa [zodiak Saju ichida qayerda turishi](/guide/zodiac) da keltirilgan. Boshqa branchlar: [子 (Sichqon)](/guide/branch-ja) · [丑 (Sigir)](/guide/branch-chuk) · [寅 (Yo'lbars)](/guide/branch-in) · [卯 (Quyon)](/guide/branch-myo) · [辰 (Ajdar)](/guide/branch-jin) · [巳 (Ilon)](/guide/branch-sa) · [午 (Ot)](/guide/branch-o) · [未 (Qo'y)](/guide/branch-mi) · [申 (Maymun)](/guide/branch-sin) · [酉 (Xo'roz)](/guide/branch-yu) · [戌 (It)](/guide/branch-sul)"
          }
        ]
      }
    ]
  },

  "guide/pillar-gap-ja": {
    "eyebrow": "Kun ustunlari",
    "title": "Kun ustuni 甲子",
    "summary": "Kun ustuni 甲子 Saju-Link hisoblash qoidalariga ko'ra qanday o'qiladi: kun branchi ushlab turgan stemlarning day stemga nisbatan nima ekanligi — qoidalardagi tartibda aynan shunday keltirilgan.",
    "backLabel": "Hisoblash asosi",
    "sections": [
      {
        "title": "甲子 — oltmishlik siklda kun ustuni raqami: 1",
        "blocks": [
          {
            "p": "Tug'ilgan kunning stem-branchi 甲子 bo'lsa, day stem — 甲 (Yog'och, Yang), kun branchi — 子 (Sichqon). Oltmishlik siklda bu kombinatsiya raqami: 1."
          },
          {
            "p": "Saju-Link day stemi 甲 bo'lgan insonni \"Yang Yog'och (甲)\" deb ataydi va natija ekrani ko'rsatadigan satr: “Tik o'sadigan baland daraxt. Yo'nalish belgilangach chayqalmaydi va egilishdan ko'ra chidashni tanlaydi.” Bu satrning quyidagi o'qish yoki ballar bilan aloqasi yo'q."
          }
        ]
      },
      {
        "title": "Kun branchi 子 ushlab turgan stemlarning day stemga nisbatan nima ekanligi",
        "blocks": [
          {
            "p": "Kun branchi — turmush o'rtog'i pozitsiyasi. Day stem 甲 nuqtai nazaridan o'qilganda, branch 子 ushlab turgan stemlar quyidagicha. Asosiy stem (癸) — branchning vakillik energiyasi."
          },
          {
            "table": {
              "caption": "Kun branchi 甲子: hidden stems",
              "head": [
                "Hidden stem",
                "Pozitsiya",
                "Ulush",
                "Day stem 甲 uchun"
              ],
              "rows": [
                [
                  "Yang Suv (壬)",
                  "qoldiq (餘氣)",
                  "{hidJaYeo}",
                  "Noodatiy tayanch (偏印)"
                ],
                [
                  "Yin Suv (癸)",
                  "asosiy (本氣)",
                  "{hidJaBon}",
                  "G'amxo'rlik (正印)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Turmush o'rtog'i pozitsiyasi va bu kun ustuni",
        "blocks": [
          {
            "p": "An'anaviy myeongri turmush o'rtog'i pozitsiyasini erkaklar uchun Barqaror boylik (正財), ayollar uchun Nufuz (正官) deb o'qiydi. Day stem 甲 bo'lganda, Barqaror boylik — 己, Nufuz — 辛."
          },
          {
            "p": "Erkaklar uchun turmush o'rtog'i pozitsiyasi (Barqaror boylik) — 己. 己 子 ichida saqlanmaydi."
          },
          {
            "p": "Ayollar uchun turmush o'rtog'i pozitsiyasi (Nufuz) — 辛. 辛 子 ichida saqlanmaydi."
          }
        ]
      },
      {
        "title": "Qo'shni kun ustunlari va ular tarkibidagi belgilar",
        "blocks": [
          {
            "p": "Oltmishlik siklda oldingi kun ustuni — [癸亥](/guide/pillar-gye-hae), keyingisi — [乙丑](/guide/pillar-eul-chuk)."
          },
          {
            "p": "Tarkibi: [Yang Yog'och (甲)](/guide/stem-gap) va [子 (Sichqon)](/guide/branch-ja)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bu qo'llanma nimani aytmaydi",
        "blocks": [
          {
            "ul": [
              "Bitta kun ustuni insonni yoki munosabatni belgilab bermaydi. Saju to'rt ustunning sakkiz belgisi o'zaro qanday bog'lanishidan o'qiladi.",
              "Turmush o'rtog'i pozitsiyasini o'qish an'anaviy myeongri qoidasidan olingan, jinsingizni ko'rsatmasangiz bu pozitsiya o'qilmaydi."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-eul-chuk": {
    "eyebrow": "Kun ustunlari",
    "title": "Kun ustuni 乙丑",
    "summary": "Kun ustuni 乙丑 Saju-Link hisoblash qoidalariga ko'ra qanday o'qiladi: kun branchi ushlab turgan stemlarning day stemga nisbatan nima ekanligi — qoidalardagi tartibda aynan shunday keltirilgan.",
    "backLabel": "Hisoblash asosi",
    "sections": [
      {
        "title": "乙丑 — oltmishlik siklda kun ustuni raqami: 2",
        "blocks": [
          {
            "p": "Tug'ilgan kunning stem-branchi 乙丑 bo'lsa, day stem — 乙 (Yog'och, Yin), kun branchi — 丑 (Sigir). Oltmishlik siklda bu kombinatsiya raqami: 2."
          },
          {
            "p": "Saju-Link day stemi 乙 bo'lgan insonni \"Yin Yog'och (乙)\" deb ataydi va natija ekrani ko'rsatadigan satr: “Chirmovuq kabi egiluvchan o't. Sharoitga qarab egiladi-yu, oldinga yuraveradi va uzilmaydi.” Bu satrning quyidagi o'qish yoki ballar bilan aloqasi yo'q."
          }
        ]
      },
      {
        "title": "Kun branchi 丑 ushlab turgan stemlarning day stemga nisbatan nima ekanligi",
        "blocks": [
          {
            "p": "Kun branchi — turmush o'rtog'i pozitsiyasi. Day stem 乙 nuqtai nazaridan o'qilganda, branch 丑 ushlab turgan stemlar quyidagicha. Asosiy stem (己) — branchning vakillik energiyasi."
          },
          {
            "table": {
              "caption": "Kun branchi 乙丑: hidden stems",
              "head": [
                "Hidden stem",
                "Pozitsiya",
                "Ulush",
                "Day stem 乙 uchun"
              ],
              "rows": [
                [
                  "Yin Suv (癸)",
                  "qoldiq (餘氣)",
                  "{hidChukYeo}",
                  "Noodatiy tayanch (偏印)"
                ],
                [
                  "Yin Metall (辛)",
                  "o'rta (中氣)",
                  "{hidChukJung}",
                  "Sinovchi (偏官)"
                ],
                [
                  "Yin Tuproq (己)",
                  "asosiy (本氣)",
                  "{hidChukBon}",
                  "Kutilmagan boylik (偏財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Turmush o'rtog'i pozitsiyasi va bu kun ustuni",
        "blocks": [
          {
            "p": "An'anaviy myeongri turmush o'rtog'i pozitsiyasini erkaklar uchun Barqaror boylik (正財), ayollar uchun Nufuz (正官) deb o'qiydi. Day stem 乙 bo'lganda, Barqaror boylik — 戊, Nufuz — 庚."
          },
          {
            "p": "Erkaklar uchun turmush o'rtog'i pozitsiyasi (Barqaror boylik) — 戊. 戊 丑 ichida saqlanmaydi."
          },
          {
            "p": "Ayollar uchun turmush o'rtog'i pozitsiyasi (Nufuz) — 庚. 庚 丑 ichida saqlanmaydi."
          }
        ]
      },
      {
        "title": "Qo'shni kun ustunlari va ular tarkibidagi belgilar",
        "blocks": [
          {
            "p": "Oltmishlik siklda oldingi kun ustuni — [甲子](/guide/pillar-gap-ja), keyingisi — [丙寅](/guide/pillar-byeong-in)."
          },
          {
            "p": "Tarkibi: [Yin Yog'och (乙)](/guide/stem-eul) va [丑 (Sigir)](/guide/branch-chuk)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bu qo'llanma nimani aytmaydi",
        "blocks": [
          {
            "ul": [
              "Bitta kun ustuni insonni yoki munosabatni belgilab bermaydi. Saju to'rt ustunning sakkiz belgisi o'zaro qanday bog'lanishidan o'qiladi.",
              "Turmush o'rtog'i pozitsiyasini o'qish an'anaviy myeongri qoidasidan olingan, jinsingizni ko'rsatmasangiz bu pozitsiya o'qilmaydi."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-byeong-in": {
    "eyebrow": "Kun ustunlari",
    "title": "Kun ustuni 丙寅",
    "summary": "Kun ustuni 丙寅 Saju-Link hisoblash qoidalariga ko'ra qanday o'qiladi: kun branchi ushlab turgan stemlarning day stemga nisbatan nima ekanligi — qoidalardagi tartibda aynan shunday keltirilgan.",
    "backLabel": "Hisoblash asosi",
    "sections": [
      {
        "title": "丙寅 — oltmishlik siklda kun ustuni raqami: 3",
        "blocks": [
          {
            "p": "Tug'ilgan kunning stem-branchi 丙寅 bo'lsa, day stem — 丙 (Olov, Yang), kun branchi — 寅 (Yo'lbars). Oltmishlik siklda bu kombinatsiya raqami: 3."
          },
          {
            "p": "Saju-Link day stemi 丙 bo'lgan insonni \"Yang Olov (丙)\" deb ataydi va natija ekrani ko'rsatadigan satr: “Tush paytidagi quyosh. Hissiyot ochiq ko'rinadi, atrof yorishadi, oldinga chiqish tabiiy keladi.” Bu satrning quyidagi o'qish yoki ballar bilan aloqasi yo'q."
          }
        ]
      },
      {
        "title": "Kun branchi 寅 ushlab turgan stemlarning day stemga nisbatan nima ekanligi",
        "blocks": [
          {
            "p": "Kun branchi — turmush o'rtog'i pozitsiyasi. Day stem 丙 nuqtai nazaridan o'qilganda, branch 寅 ushlab turgan stemlar quyidagicha. Asosiy stem (甲) — branchning vakillik energiyasi."
          },
          {
            "table": {
              "caption": "Kun branchi 丙寅: hidden stems",
              "head": [
                "Hidden stem",
                "Pozitsiya",
                "Ulush",
                "Day stem 丙 uchun"
              ],
              "rows": [
                [
                  "Yang Tuproq (戊)",
                  "qoldiq (餘氣)",
                  "{hidInYeo}",
                  "Ifoda (食神)"
                ],
                [
                  "Yang Olov (丙)",
                  "o'rta (中氣)",
                  "{hidInJung}",
                  "Hamroh (比肩)"
                ],
                [
                  "Yang Yog'och (甲)",
                  "asosiy (本氣)",
                  "{hidInBon}",
                  "Noodatiy tayanch (偏印)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Turmush o'rtog'i pozitsiyasi va bu kun ustuni",
        "blocks": [
          {
            "p": "An'anaviy myeongri turmush o'rtog'i pozitsiyasini erkaklar uchun Barqaror boylik (正財), ayollar uchun Nufuz (正官) deb o'qiydi. Day stem 丙 bo'lganda, Barqaror boylik — 辛, Nufuz — 癸."
          },
          {
            "p": "Erkaklar uchun turmush o'rtog'i pozitsiyasi (Barqaror boylik) — 辛. 辛 寅 ichida saqlanmaydi."
          },
          {
            "p": "Ayollar uchun turmush o'rtog'i pozitsiyasi (Nufuz) — 癸. 癸 寅 ichida saqlanmaydi."
          }
        ]
      },
      {
        "title": "Qo'shni kun ustunlari va ular tarkibidagi belgilar",
        "blocks": [
          {
            "p": "Oltmishlik siklda oldingi kun ustuni — [乙丑](/guide/pillar-eul-chuk), keyingisi — [丁卯](/guide/pillar-jeong-myo)."
          },
          {
            "p": "Tarkibi: [Yang Olov (丙)](/guide/stem-byeong) va [寅 (Yo'lbars)](/guide/branch-in)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bu qo'llanma nimani aytmaydi",
        "blocks": [
          {
            "ul": [
              "Bitta kun ustuni insonni yoki munosabatni belgilab bermaydi. Saju to'rt ustunning sakkiz belgisi o'zaro qanday bog'lanishidan o'qiladi.",
              "Turmush o'rtog'i pozitsiyasini o'qish an'anaviy myeongri qoidasidan olingan, jinsingizni ko'rsatmasangiz bu pozitsiya o'qilmaydi."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-jeong-myo": {
    "eyebrow": "Kun ustunlari",
    "title": "Kun ustuni 丁卯",
    "summary": "Kun ustuni 丁卯 Saju-Link hisoblash qoidalariga ko'ra qanday o'qiladi: kun branchi ushlab turgan stemlarning day stemga nisbatan nima ekanligi — qoidalardagi tartibda aynan shunday keltirilgan.",
    "backLabel": "Hisoblash asosi",
    "sections": [
      {
        "title": "丁卯 — oltmishlik siklda kun ustuni raqami: 4",
        "blocks": [
          {
            "p": "Tug'ilgan kunning stem-branchi 丁卯 bo'lsa, day stem — 丁 (Olov, Yin), kun branchi — 卯 (Quyon). Oltmishlik siklda bu kombinatsiya raqami: 4."
          },
          {
            "p": "Saju-Link day stemi 丁 bo'lgan insonni \"Yin Olov (丁)\" deb ataydi va natija ekrani ko'rsatadigan satr: “Sham va chiroq yorug'i. Sokin va uzoq yonadi, avvalo eng yaqinlarini isitadi.” Bu satrning quyidagi o'qish yoki ballar bilan aloqasi yo'q."
          }
        ]
      },
      {
        "title": "Kun branchi 卯 ushlab turgan stemlarning day stemga nisbatan nima ekanligi",
        "blocks": [
          {
            "p": "Kun branchi — turmush o'rtog'i pozitsiyasi. Day stem 丁 nuqtai nazaridan o'qilganda, branch 卯 ushlab turgan stemlar quyidagicha. Asosiy stem (乙) — branchning vakillik energiyasi."
          },
          {
            "table": {
              "caption": "Kun branchi 丁卯: hidden stems",
              "head": [
                "Hidden stem",
                "Pozitsiya",
                "Ulush",
                "Day stem 丁 uchun"
              ],
              "rows": [
                [
                  "Yang Yog'och (甲)",
                  "qoldiq (餘氣)",
                  "{hidMyoYeo}",
                  "G'amxo'rlik (正印)"
                ],
                [
                  "Yin Yog'och (乙)",
                  "asosiy (本氣)",
                  "{hidMyoBon}",
                  "Noodatiy tayanch (偏印)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Turmush o'rtog'i pozitsiyasi va bu kun ustuni",
        "blocks": [
          {
            "p": "An'anaviy myeongri turmush o'rtog'i pozitsiyasini erkaklar uchun Barqaror boylik (正財), ayollar uchun Nufuz (正官) deb o'qiydi. Day stem 丁 bo'lganda, Barqaror boylik — 庚, Nufuz — 壬."
          },
          {
            "p": "Erkaklar uchun turmush o'rtog'i pozitsiyasi (Barqaror boylik) — 庚. 庚 卯 ichida saqlanmaydi."
          },
          {
            "p": "Ayollar uchun turmush o'rtog'i pozitsiyasi (Nufuz) — 壬. 壬 卯 ichida saqlanmaydi."
          }
        ]
      },
      {
        "title": "Qo'shni kun ustunlari va ular tarkibidagi belgilar",
        "blocks": [
          {
            "p": "Oltmishlik siklda oldingi kun ustuni — [丙寅](/guide/pillar-byeong-in), keyingisi — [戊辰](/guide/pillar-mu-jin)."
          },
          {
            "p": "Tarkibi: [Yin Olov (丁)](/guide/stem-jeong) va [卯 (Quyon)](/guide/branch-myo)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bu qo'llanma nimani aytmaydi",
        "blocks": [
          {
            "ul": [
              "Bitta kun ustuni insonni yoki munosabatni belgilab bermaydi. Saju to'rt ustunning sakkiz belgisi o'zaro qanday bog'lanishidan o'qiladi.",
              "Turmush o'rtog'i pozitsiyasini o'qish an'anaviy myeongri qoidasidan olingan, jinsingizni ko'rsatmasangiz bu pozitsiya o'qilmaydi."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-mu-jin": {
    "eyebrow": "Kun ustunlari",
    "title": "Kun ustuni 戊辰",
    "summary": "Kun ustuni 戊辰 Saju-Link hisoblash qoidalariga ko'ra qanday o'qiladi: kun branchi ushlab turgan stemlarning day stemga nisbatan nima ekanligi — qoidalardagi tartibda aynan shunday keltirilgan.",
    "backLabel": "Hisoblash asosi",
    "sections": [
      {
        "title": "戊辰 — oltmishlik siklda kun ustuni raqami: 5",
        "blocks": [
          {
            "p": "Tug'ilgan kunning stem-branchi 戊辰 bo'lsa, day stem — 戊 (Tuproq, Yang), kun branchi — 辰 (Ajdar). Oltmishlik siklda bu kombinatsiya raqami: 5."
          },
          {
            "p": "Saju-Link day stemi 戊 bo'lgan insonni \"Yang Tuproq (戊)\" deb ataydi va natija ekrani ko'rsatadigan satr: “Keng dala va tog'. Silkitish qiyin, suyanish oson, ammo qabul qilingan qarorni o'zgartirishga shoshmaydi.” Bu satrning quyidagi o'qish yoki ballar bilan aloqasi yo'q."
          }
        ]
      },
      {
        "title": "Kun branchi 辰 ushlab turgan stemlarning day stemga nisbatan nima ekanligi",
        "blocks": [
          {
            "p": "Kun branchi — turmush o'rtog'i pozitsiyasi. Day stem 戊 nuqtai nazaridan o'qilganda, branch 辰 ushlab turgan stemlar quyidagicha. Asosiy stem (戊) — branchning vakillik energiyasi."
          },
          {
            "table": {
              "caption": "Kun branchi 戊辰: hidden stems",
              "head": [
                "Hidden stem",
                "Pozitsiya",
                "Ulush",
                "Day stem 戊 uchun"
              ],
              "rows": [
                [
                  "Yin Yog'och (乙)",
                  "qoldiq (餘氣)",
                  "{hidJinYeo}",
                  "Nufuz (正官)"
                ],
                [
                  "Yin Suv (癸)",
                  "o'rta (中氣)",
                  "{hidJinJung}",
                  "Barqaror boylik (正財)"
                ],
                [
                  "Yang Tuproq (戊)",
                  "asosiy (本氣)",
                  "{hidJinBon}",
                  "Hamroh (比肩)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Turmush o'rtog'i pozitsiyasi va bu kun ustuni",
        "blocks": [
          {
            "p": "An'anaviy myeongri turmush o'rtog'i pozitsiyasini erkaklar uchun Barqaror boylik (正財), ayollar uchun Nufuz (正官) deb o'qiydi. Day stem 戊 bo'lganda, Barqaror boylik — 癸, Nufuz — 乙."
          },
          {
            "p": "Erkaklar uchun turmush o'rtog'i pozitsiyasi (Barqaror boylik) — 癸. 癸 辰 ichida saqlanadi (o'rta (中氣))."
          },
          {
            "p": "Ayollar uchun turmush o'rtog'i pozitsiyasi (Nufuz) — 乙. 乙 辰 ichida saqlanadi (qoldiq (餘氣))."
          }
        ]
      },
      {
        "title": "Qo'shni kun ustunlari va ular tarkibidagi belgilar",
        "blocks": [
          {
            "p": "Oltmishlik siklda oldingi kun ustuni — [丁卯](/guide/pillar-jeong-myo), keyingisi — [己巳](/guide/pillar-gi-sa)."
          },
          {
            "p": "Tarkibi: [Yang Tuproq (戊)](/guide/stem-mu) va [辰 (Ajdar)](/guide/branch-jin)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bu qo'llanma nimani aytmaydi",
        "blocks": [
          {
            "ul": [
              "Bitta kun ustuni insonni yoki munosabatni belgilab bermaydi. Saju to'rt ustunning sakkiz belgisi o'zaro qanday bog'lanishidan o'qiladi.",
              "Turmush o'rtog'i pozitsiyasini o'qish an'anaviy myeongri qoidasidan olingan, jinsingizni ko'rsatmasangiz bu pozitsiya o'qilmaydi."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gi-sa": {
    "eyebrow": "Kun ustunlari",
    "title": "Kun ustuni 己巳",
    "summary": "Kun ustuni 己巳 Saju-Link hisoblash qoidalariga ko'ra qanday o'qiladi: kun branchi ushlab turgan stemlarning day stemga nisbatan nima ekanligi — qoidalardagi tartibda aynan shunday keltirilgan.",
    "backLabel": "Hisoblash asosi",
    "sections": [
      {
        "title": "己巳 — oltmishlik siklda kun ustuni raqami: 6",
        "blocks": [
          {
            "p": "Tug'ilgan kunning stem-branchi 己巳 bo'lsa, day stem — 己 (Tuproq, Yin), kun branchi — 巳 (Ilon). Oltmishlik siklda bu kombinatsiya raqami: 6."
          },
          {
            "p": "Saju-Link day stemi 己 bo'lgan insonni \"Yin Tuproq (己)\" deb ataydi va natija ekrani ko'rsatadigan satr: “Ekin tuprog'i. Nima kelsa qabul qilib o'stiradi, ko'z-ko'z qilishdan ko'ra parvarishga yaqin.” Bu satrning quyidagi o'qish yoki ballar bilan aloqasi yo'q."
          }
        ]
      },
      {
        "title": "Kun branchi 巳 ushlab turgan stemlarning day stemga nisbatan nima ekanligi",
        "blocks": [
          {
            "p": "Kun branchi — turmush o'rtog'i pozitsiyasi. Day stem 己 nuqtai nazaridan o'qilganda, branch 巳 ushlab turgan stemlar quyidagicha. Asosiy stem (丙) — branchning vakillik energiyasi."
          },
          {
            "table": {
              "caption": "Kun branchi 己巳: hidden stems",
              "head": [
                "Hidden stem",
                "Pozitsiya",
                "Ulush",
                "Day stem 己 uchun"
              ],
              "rows": [
                [
                  "Yang Tuproq (戊)",
                  "qoldiq (餘氣)",
                  "{hidSaYeo}",
                  "Raqib (劫財)"
                ],
                [
                  "Yang Metall (庚)",
                  "o'rta (中氣)",
                  "{hidSaJung}",
                  "Buzuvchi (傷官)"
                ],
                [
                  "Yang Olov (丙)",
                  "asosiy (本氣)",
                  "{hidSaBon}",
                  "G'amxo'rlik (正印)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Turmush o'rtog'i pozitsiyasi va bu kun ustuni",
        "blocks": [
          {
            "p": "An'anaviy myeongri turmush o'rtog'i pozitsiyasini erkaklar uchun Barqaror boylik (正財), ayollar uchun Nufuz (正官) deb o'qiydi. Day stem 己 bo'lganda, Barqaror boylik — 壬, Nufuz — 甲."
          },
          {
            "p": "Erkaklar uchun turmush o'rtog'i pozitsiyasi (Barqaror boylik) — 壬. 壬 巳 ichida saqlanmaydi."
          },
          {
            "p": "Ayollar uchun turmush o'rtog'i pozitsiyasi (Nufuz) — 甲. 甲 巳 ichida saqlanmaydi."
          }
        ]
      },
      {
        "title": "Qo'shni kun ustunlari va ular tarkibidagi belgilar",
        "blocks": [
          {
            "p": "Oltmishlik siklda oldingi kun ustuni — [戊辰](/guide/pillar-mu-jin), keyingisi — [庚午](/guide/pillar-gyeong-o)."
          },
          {
            "p": "Tarkibi: [Yin Tuproq (己)](/guide/stem-gi) va [巳 (Ilon)](/guide/branch-sa)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bu qo'llanma nimani aytmaydi",
        "blocks": [
          {
            "ul": [
              "Bitta kun ustuni insonni yoki munosabatni belgilab bermaydi. Saju to'rt ustunning sakkiz belgisi o'zaro qanday bog'lanishidan o'qiladi.",
              "Turmush o'rtog'i pozitsiyasini o'qish an'anaviy myeongri qoidasidan olingan, jinsingizni ko'rsatmasangiz bu pozitsiya o'qilmaydi."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gyeong-o": {
    "eyebrow": "Kun ustunlari",
    "title": "Kun ustuni 庚午",
    "summary": "Kun ustuni 庚午 Saju-Link hisoblash qoidalariga ko'ra qanday o'qiladi: kun branchi ushlab turgan stemlarning day stemga nisbatan nima ekanligi — qoidalardagi tartibda aynan shunday keltirilgan.",
    "backLabel": "Hisoblash asosi",
    "sections": [
      {
        "title": "庚午 — oltmishlik siklda kun ustuni raqami: 7",
        "blocks": [
          {
            "p": "Tug'ilgan kunning stem-branchi 庚午 bo'lsa, day stem — 庚 (Metall, Yang), kun branchi — 午 (Ot). Oltmishlik siklda bu kombinatsiya raqami: 7."
          },
          {
            "p": "Saju-Link day stemi 庚 bo'lgan insonni \"Yang Metall (庚)\" deb ataydi va natija ekrani ko'rsatadigan satr: “Ishlov ko'rmagan temir. Qat'iy va aniq, osilib qolgan ishlarga sabri yo'q.” Bu satrning quyidagi o'qish yoki ballar bilan aloqasi yo'q."
          }
        ]
      },
      {
        "title": "Kun branchi 午 ushlab turgan stemlarning day stemga nisbatan nima ekanligi",
        "blocks": [
          {
            "p": "Kun branchi — turmush o'rtog'i pozitsiyasi. Day stem 庚 nuqtai nazaridan o'qilganda, branch 午 ushlab turgan stemlar quyidagicha. Asosiy stem (丁) — branchning vakillik energiyasi."
          },
          {
            "table": {
              "caption": "Kun branchi 庚午: hidden stems",
              "head": [
                "Hidden stem",
                "Pozitsiya",
                "Ulush",
                "Day stem 庚 uchun"
              ],
              "rows": [
                [
                  "Yang Olov (丙)",
                  "qoldiq (餘氣)",
                  "{hidOYeo}",
                  "Sinovchi (偏官)"
                ],
                [
                  "Yin Tuproq (己)",
                  "o'rta (中氣)",
                  "{hidOJung}",
                  "G'amxo'rlik (正印)"
                ],
                [
                  "Yin Olov (丁)",
                  "asosiy (本氣)",
                  "{hidOBon}",
                  "Nufuz (正官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Turmush o'rtog'i pozitsiyasi va bu kun ustuni",
        "blocks": [
          {
            "p": "An'anaviy myeongri turmush o'rtog'i pozitsiyasini erkaklar uchun Barqaror boylik (正財), ayollar uchun Nufuz (正官) deb o'qiydi. Day stem 庚 bo'lganda, Barqaror boylik — 乙, Nufuz — 丁."
          },
          {
            "p": "Erkaklar uchun turmush o'rtog'i pozitsiyasi (Barqaror boylik) — 乙. 乙 午 ichida saqlanmaydi."
          },
          {
            "p": "Ayollar uchun turmush o'rtog'i pozitsiyasi (Nufuz) — 丁. 丁 午 ichida saqlanadi (asosiy (本氣))."
          }
        ]
      },
      {
        "title": "Qo'shni kun ustunlari va ular tarkibidagi belgilar",
        "blocks": [
          {
            "p": "Oltmishlik siklda oldingi kun ustuni — [己巳](/guide/pillar-gi-sa), keyingisi — [辛未](/guide/pillar-sin-mi)."
          },
          {
            "p": "Tarkibi: [Yang Metall (庚)](/guide/stem-gyeong) va [午 (Ot)](/guide/branch-o)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bu qo'llanma nimani aytmaydi",
        "blocks": [
          {
            "ul": [
              "Bitta kun ustuni insonni yoki munosabatni belgilab bermaydi. Saju to'rt ustunning sakkiz belgisi o'zaro qanday bog'lanishidan o'qiladi.",
              "Turmush o'rtog'i pozitsiyasini o'qish an'anaviy myeongri qoidasidan olingan, jinsingizni ko'rsatmasangiz bu pozitsiya o'qilmaydi."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-sin-mi": {
    "eyebrow": "Kun ustunlari",
    "title": "Kun ustuni 辛未",
    "summary": "Kun ustuni 辛未 Saju-Link hisoblash qoidalariga ko'ra qanday o'qiladi: kun branchi ushlab turgan stemlarning day stemga nisbatan nima ekanligi — qoidalardagi tartibda aynan shunday keltirilgan.",
    "backLabel": "Hisoblash asosi",
    "sections": [
      {
        "title": "辛未 — oltmishlik siklda kun ustuni raqami: 8",
        "blocks": [
          {
            "p": "Tug'ilgan kunning stem-branchi 辛未 bo'lsa, day stem — 辛 (Metall, Yin), kun branchi — 未 (Qo'y). Oltmishlik siklda bu kombinatsiya raqami: 8."
          },
          {
            "p": "Saju-Link day stemi 辛 bo'lgan insonni \"Yin Metall (辛)\" deb ataydi va natija ekrani ko'rsatadigan satr: “Sayqallangan qimmatbaho tosh. Nozik did va yuqori talab; uvol qilingan ishni e'tiborsiz qoldirmaydi.” Bu satrning quyidagi o'qish yoki ballar bilan aloqasi yo'q."
          }
        ]
      },
      {
        "title": "Kun branchi 未 ushlab turgan stemlarning day stemga nisbatan nima ekanligi",
        "blocks": [
          {
            "p": "Kun branchi — turmush o'rtog'i pozitsiyasi. Day stem 辛 nuqtai nazaridan o'qilganda, branch 未 ushlab turgan stemlar quyidagicha. Asosiy stem (己) — branchning vakillik energiyasi."
          },
          {
            "table": {
              "caption": "Kun branchi 辛未: hidden stems",
              "head": [
                "Hidden stem",
                "Pozitsiya",
                "Ulush",
                "Day stem 辛 uchun"
              ],
              "rows": [
                [
                  "Yin Olov (丁)",
                  "qoldiq (餘氣)",
                  "{hidMiYeo}",
                  "Sinovchi (偏官)"
                ],
                [
                  "Yin Yog'och (乙)",
                  "o'rta (中氣)",
                  "{hidMiJung}",
                  "Kutilmagan boylik (偏財)"
                ],
                [
                  "Yin Tuproq (己)",
                  "asosiy (本氣)",
                  "{hidMiBon}",
                  "Noodatiy tayanch (偏印)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Turmush o'rtog'i pozitsiyasi va bu kun ustuni",
        "blocks": [
          {
            "p": "An'anaviy myeongri turmush o'rtog'i pozitsiyasini erkaklar uchun Barqaror boylik (正財), ayollar uchun Nufuz (正官) deb o'qiydi. Day stem 辛 bo'lganda, Barqaror boylik — 甲, Nufuz — 丙."
          },
          {
            "p": "Erkaklar uchun turmush o'rtog'i pozitsiyasi (Barqaror boylik) — 甲. 甲 未 ichida saqlanmaydi."
          },
          {
            "p": "Ayollar uchun turmush o'rtog'i pozitsiyasi (Nufuz) — 丙. 丙 未 ichida saqlanmaydi."
          }
        ]
      },
      {
        "title": "Qo'shni kun ustunlari va ular tarkibidagi belgilar",
        "blocks": [
          {
            "p": "Oltmishlik siklda oldingi kun ustuni — [庚午](/guide/pillar-gyeong-o), keyingisi — [壬申](/guide/pillar-im-sin)."
          },
          {
            "p": "Tarkibi: [Yin Metall (辛)](/guide/stem-sin) va [未 (Qo'y)](/guide/branch-mi)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bu qo'llanma nimani aytmaydi",
        "blocks": [
          {
            "ul": [
              "Bitta kun ustuni insonni yoki munosabatni belgilab bermaydi. Saju to'rt ustunning sakkiz belgisi o'zaro qanday bog'lanishidan o'qiladi.",
              "Turmush o'rtog'i pozitsiyasini o'qish an'anaviy myeongri qoidasidan olingan, jinsingizni ko'rsatmasangiz bu pozitsiya o'qilmaydi."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-im-sin": {
    "eyebrow": "Kun ustunlari",
    "title": "Kun ustuni 壬申",
    "summary": "Kun ustuni 壬申 Saju-Link hisoblash qoidalariga ko'ra qanday o'qiladi: kun branchi ushlab turgan stemlarning day stemga nisbatan nima ekanligi — qoidalardagi tartibda aynan shunday keltirilgan.",
    "backLabel": "Hisoblash asosi",
    "sections": [
      {
        "title": "壬申 — oltmishlik siklda kun ustuni raqami: 9",
        "blocks": [
          {
            "p": "Tug'ilgan kunning stem-branchi 壬申 bo'lsa, day stem — 壬 (Suv, Yang), kun branchi — 申 (Maymun). Oltmishlik siklda bu kombinatsiya raqami: 9."
          },
          {
            "p": "Saju-Link day stemi 壬 bo'lgan insonni \"Yang Suv (壬)\" deb ataydi va natija ekrani ko'rsatadigan satr: “Daryo va dengiz. Qarashi keng, narsalarning qay tomonga oqayotganini ilg'aydi.” Bu satrning quyidagi o'qish yoki ballar bilan aloqasi yo'q."
          }
        ]
      },
      {
        "title": "Kun branchi 申 ushlab turgan stemlarning day stemga nisbatan nima ekanligi",
        "blocks": [
          {
            "p": "Kun branchi — turmush o'rtog'i pozitsiyasi. Day stem 壬 nuqtai nazaridan o'qilganda, branch 申 ushlab turgan stemlar quyidagicha. Asosiy stem (庚) — branchning vakillik energiyasi."
          },
          {
            "table": {
              "caption": "Kun branchi 壬申: hidden stems",
              "head": [
                "Hidden stem",
                "Pozitsiya",
                "Ulush",
                "Day stem 壬 uchun"
              ],
              "rows": [
                [
                  "Yang Tuproq (戊)",
                  "qoldiq (餘氣)",
                  "{hidSinYeo}",
                  "Sinovchi (偏官)"
                ],
                [
                  "Yang Suv (壬)",
                  "o'rta (中氣)",
                  "{hidSinJung}",
                  "Hamroh (比肩)"
                ],
                [
                  "Yang Metall (庚)",
                  "asosiy (本氣)",
                  "{hidSinBon}",
                  "Noodatiy tayanch (偏印)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Turmush o'rtog'i pozitsiyasi va bu kun ustuni",
        "blocks": [
          {
            "p": "An'anaviy myeongri turmush o'rtog'i pozitsiyasini erkaklar uchun Barqaror boylik (正財), ayollar uchun Nufuz (正官) deb o'qiydi. Day stem 壬 bo'lganda, Barqaror boylik — 丁, Nufuz — 己."
          },
          {
            "p": "Erkaklar uchun turmush o'rtog'i pozitsiyasi (Barqaror boylik) — 丁. 丁 申 ichida saqlanmaydi."
          },
          {
            "p": "Ayollar uchun turmush o'rtog'i pozitsiyasi (Nufuz) — 己. 己 申 ichida saqlanmaydi."
          }
        ]
      },
      {
        "title": "Qo'shni kun ustunlari va ular tarkibidagi belgilar",
        "blocks": [
          {
            "p": "Oltmishlik siklda oldingi kun ustuni — [辛未](/guide/pillar-sin-mi), keyingisi — [癸酉](/guide/pillar-gye-yu)."
          },
          {
            "p": "Tarkibi: [Yang Suv (壬)](/guide/stem-im) va [申 (Maymun)](/guide/branch-sin)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bu qo'llanma nimani aytmaydi",
        "blocks": [
          {
            "ul": [
              "Bitta kun ustuni insonni yoki munosabatni belgilab bermaydi. Saju to'rt ustunning sakkiz belgisi o'zaro qanday bog'lanishidan o'qiladi.",
              "Turmush o'rtog'i pozitsiyasini o'qish an'anaviy myeongri qoidasidan olingan, jinsingizni ko'rsatmasangiz bu pozitsiya o'qilmaydi."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gye-yu": {
    "eyebrow": "Kun ustunlari",
    "title": "Kun ustuni 癸酉",
    "summary": "Kun ustuni 癸酉 Saju-Link hisoblash qoidalariga ko'ra qanday o'qiladi: kun branchi ushlab turgan stemlarning day stemga nisbatan nima ekanligi — qoidalardagi tartibda aynan shunday keltirilgan.",
    "backLabel": "Hisoblash asosi",
    "sections": [
      {
        "title": "癸酉 — oltmishlik siklda kun ustuni raqami: 10",
        "blocks": [
          {
            "p": "Tug'ilgan kunning stem-branchi 癸酉 bo'lsa, day stem — 癸 (Suv, Yin), kun branchi — 酉 (Xo'roz). Oltmishlik siklda bu kombinatsiya raqami: 10."
          },
          {
            "p": "Saju-Link day stemi 癸 bo'lgan insonni \"Yin Suv (癸)\" deb ataydi va natija ekrani ko'rsatadigan satr: “Shabnam va yomg'ir. Sokin singib boradi, so'zdan oldin kayfiyatni o'qiydi.” Bu satrning quyidagi o'qish yoki ballar bilan aloqasi yo'q."
          }
        ]
      },
      {
        "title": "Kun branchi 酉 ushlab turgan stemlarning day stemga nisbatan nima ekanligi",
        "blocks": [
          {
            "p": "Kun branchi — turmush o'rtog'i pozitsiyasi. Day stem 癸 nuqtai nazaridan o'qilganda, branch 酉 ushlab turgan stemlar quyidagicha. Asosiy stem (辛) — branchning vakillik energiyasi."
          },
          {
            "table": {
              "caption": "Kun branchi 癸酉: hidden stems",
              "head": [
                "Hidden stem",
                "Pozitsiya",
                "Ulush",
                "Day stem 癸 uchun"
              ],
              "rows": [
                [
                  "Yang Metall (庚)",
                  "qoldiq (餘氣)",
                  "{hidYuYeo}",
                  "G'amxo'rlik (正印)"
                ],
                [
                  "Yin Metall (辛)",
                  "asosiy (本氣)",
                  "{hidYuBon}",
                  "Noodatiy tayanch (偏印)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Turmush o'rtog'i pozitsiyasi va bu kun ustuni",
        "blocks": [
          {
            "p": "An'anaviy myeongri turmush o'rtog'i pozitsiyasini erkaklar uchun Barqaror boylik (正財), ayollar uchun Nufuz (正官) deb o'qiydi. Day stem 癸 bo'lganda, Barqaror boylik — 丙, Nufuz — 戊."
          },
          {
            "p": "Erkaklar uchun turmush o'rtog'i pozitsiyasi (Barqaror boylik) — 丙. 丙 酉 ichida saqlanmaydi."
          },
          {
            "p": "Ayollar uchun turmush o'rtog'i pozitsiyasi (Nufuz) — 戊. 戊 酉 ichida saqlanmaydi."
          }
        ]
      },
      {
        "title": "Qo'shni kun ustunlari va ular tarkibidagi belgilar",
        "blocks": [
          {
            "p": "Oltmishlik siklda oldingi kun ustuni — [壬申](/guide/pillar-im-sin), keyingisi — [甲戌](/guide/pillar-gap-sul)."
          },
          {
            "p": "Tarkibi: [Yin Suv (癸)](/guide/stem-gye) va [酉 (Xo'roz)](/guide/branch-yu)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bu qo'llanma nimani aytmaydi",
        "blocks": [
          {
            "ul": [
              "Bitta kun ustuni insonni yoki munosabatni belgilab bermaydi. Saju to'rt ustunning sakkiz belgisi o'zaro qanday bog'lanishidan o'qiladi.",
              "Turmush o'rtog'i pozitsiyasini o'qish an'anaviy myeongri qoidasidan olingan, jinsingizni ko'rsatmasangiz bu pozitsiya o'qilmaydi."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gap-sul": {
    "eyebrow": "Kun ustunlari",
    "title": "Kun ustuni 甲戌",
    "summary": "Kun ustuni 甲戌 Saju-Link hisoblash qoidalariga ko'ra qanday o'qiladi: kun branchi ushlab turgan stemlarning day stemga nisbatan nima ekanligi — qoidalardagi tartibda aynan shunday keltirilgan.",
    "backLabel": "Hisoblash asosi",
    "sections": [
      {
        "title": "甲戌 — oltmishlik siklda kun ustuni raqami: 11",
        "blocks": [
          {
            "p": "Tug'ilgan kunning stem-branchi 甲戌 bo'lsa, day stem — 甲 (Yog'och, Yang), kun branchi — 戌 (It). Oltmishlik siklda bu kombinatsiya raqami: 11."
          },
          {
            "p": "Saju-Link day stemi 甲 bo'lgan insonni \"Yang Yog'och (甲)\" deb ataydi va natija ekrani ko'rsatadigan satr: “Tik o'sadigan baland daraxt. Yo'nalish belgilangach chayqalmaydi va egilishdan ko'ra chidashni tanlaydi.” Bu satrning quyidagi o'qish yoki ballar bilan aloqasi yo'q."
          }
        ]
      },
      {
        "title": "Kun branchi 戌 ushlab turgan stemlarning day stemga nisbatan nima ekanligi",
        "blocks": [
          {
            "p": "Kun branchi — turmush o'rtog'i pozitsiyasi. Day stem 甲 nuqtai nazaridan o'qilganda, branch 戌 ushlab turgan stemlar quyidagicha. Asosiy stem (戊) — branchning vakillik energiyasi."
          },
          {
            "table": {
              "caption": "Kun branchi 甲戌: hidden stems",
              "head": [
                "Hidden stem",
                "Pozitsiya",
                "Ulush",
                "Day stem 甲 uchun"
              ],
              "rows": [
                [
                  "Yin Metall (辛)",
                  "qoldiq (餘氣)",
                  "{hidSulYeo}",
                  "Nufuz (正官)"
                ],
                [
                  "Yin Olov (丁)",
                  "o'rta (中氣)",
                  "{hidSulJung}",
                  "Buzuvchi (傷官)"
                ],
                [
                  "Yang Tuproq (戊)",
                  "asosiy (本氣)",
                  "{hidSulBon}",
                  "Kutilmagan boylik (偏財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Turmush o'rtog'i pozitsiyasi va bu kun ustuni",
        "blocks": [
          {
            "p": "An'anaviy myeongri turmush o'rtog'i pozitsiyasini erkaklar uchun Barqaror boylik (正財), ayollar uchun Nufuz (正官) deb o'qiydi. Day stem 甲 bo'lganda, Barqaror boylik — 己, Nufuz — 辛."
          },
          {
            "p": "Erkaklar uchun turmush o'rtog'i pozitsiyasi (Barqaror boylik) — 己. 己 戌 ichida saqlanmaydi."
          },
          {
            "p": "Ayollar uchun turmush o'rtog'i pozitsiyasi (Nufuz) — 辛. 辛 戌 ichida saqlanadi (qoldiq (餘氣))."
          }
        ]
      },
      {
        "title": "Qo'shni kun ustunlari va ular tarkibidagi belgilar",
        "blocks": [
          {
            "p": "Oltmishlik siklda oldingi kun ustuni — [癸酉](/guide/pillar-gye-yu), keyingisi — [乙亥](/guide/pillar-eul-hae)."
          },
          {
            "p": "Tarkibi: [Yang Yog'och (甲)](/guide/stem-gap) va [戌 (It)](/guide/branch-sul)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bu qo'llanma nimani aytmaydi",
        "blocks": [
          {
            "ul": [
              "Bitta kun ustuni insonni yoki munosabatni belgilab bermaydi. Saju to'rt ustunning sakkiz belgisi o'zaro qanday bog'lanishidan o'qiladi.",
              "Turmush o'rtog'i pozitsiyasini o'qish an'anaviy myeongri qoidasidan olingan, jinsingizni ko'rsatmasangiz bu pozitsiya o'qilmaydi."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-eul-hae": {
    "eyebrow": "Kun ustunlari",
    "title": "Kun ustuni 乙亥",
    "summary": "Kun ustuni 乙亥 Saju-Link hisoblash qoidalariga ko'ra qanday o'qiladi: kun branchi ushlab turgan stemlarning day stemga nisbatan nima ekanligi — qoidalardagi tartibda aynan shunday keltirilgan.",
    "backLabel": "Hisoblash asosi",
    "sections": [
      {
        "title": "乙亥 — oltmishlik siklda kun ustuni raqami: 12",
        "blocks": [
          {
            "p": "Tug'ilgan kunning stem-branchi 乙亥 bo'lsa, day stem — 乙 (Yog'och, Yin), kun branchi — 亥 (Cho'chqa). Oltmishlik siklda bu kombinatsiya raqami: 12."
          },
          {
            "p": "Saju-Link day stemi 乙 bo'lgan insonni \"Yin Yog'och (乙)\" deb ataydi va natija ekrani ko'rsatadigan satr: “Chirmovuq kabi egiluvchan o't. Sharoitga qarab egiladi-yu, oldinga yuraveradi va uzilmaydi.” Bu satrning quyidagi o'qish yoki ballar bilan aloqasi yo'q."
          }
        ]
      },
      {
        "title": "Kun branchi 亥 ushlab turgan stemlarning day stemga nisbatan nima ekanligi",
        "blocks": [
          {
            "p": "Kun branchi — turmush o'rtog'i pozitsiyasi. Day stem 乙 nuqtai nazaridan o'qilganda, branch 亥 ushlab turgan stemlar quyidagicha. Asosiy stem (壬) — branchning vakillik energiyasi."
          },
          {
            "table": {
              "caption": "Kun branchi 乙亥: hidden stems",
              "head": [
                "Hidden stem",
                "Pozitsiya",
                "Ulush",
                "Day stem 乙 uchun"
              ],
              "rows": [
                [
                  "Yang Tuproq (戊)",
                  "qoldiq (餘氣)",
                  "{hidHaeYeo}",
                  "Barqaror boylik (正財)"
                ],
                [
                  "Yang Yog'och (甲)",
                  "o'rta (中氣)",
                  "{hidHaeJung}",
                  "Raqib (劫財)"
                ],
                [
                  "Yang Suv (壬)",
                  "asosiy (本氣)",
                  "{hidHaeBon}",
                  "G'amxo'rlik (正印)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Turmush o'rtog'i pozitsiyasi va bu kun ustuni",
        "blocks": [
          {
            "p": "An'anaviy myeongri turmush o'rtog'i pozitsiyasini erkaklar uchun Barqaror boylik (正財), ayollar uchun Nufuz (正官) deb o'qiydi. Day stem 乙 bo'lganda, Barqaror boylik — 戊, Nufuz — 庚."
          },
          {
            "p": "Erkaklar uchun turmush o'rtog'i pozitsiyasi (Barqaror boylik) — 戊. 戊 亥 ichida saqlanadi (qoldiq (餘氣))."
          },
          {
            "p": "Ayollar uchun turmush o'rtog'i pozitsiyasi (Nufuz) — 庚. 庚 亥 ichida saqlanmaydi."
          }
        ]
      },
      {
        "title": "Qo'shni kun ustunlari va ular tarkibidagi belgilar",
        "blocks": [
          {
            "p": "Oltmishlik siklda oldingi kun ustuni — [甲戌](/guide/pillar-gap-sul), keyingisi — [丙子](/guide/pillar-byeong-ja)."
          },
          {
            "p": "Tarkibi: [Yin Yog'och (乙)](/guide/stem-eul) va [亥 (Cho'chqa)](/guide/branch-hae)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bu qo'llanma nimani aytmaydi",
        "blocks": [
          {
            "ul": [
              "Bitta kun ustuni insonni yoki munosabatni belgilab bermaydi. Saju to'rt ustunning sakkiz belgisi o'zaro qanday bog'lanishidan o'qiladi.",
              "Turmush o'rtog'i pozitsiyasini o'qish an'anaviy myeongri qoidasidan olingan, jinsingizni ko'rsatmasangiz bu pozitsiya o'qilmaydi."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-byeong-ja": {
    "eyebrow": "Kun ustunlari",
    "title": "Kun ustuni 丙子",
    "summary": "Kun ustuni 丙子 Saju-Link hisoblash qoidalariga ko'ra qanday o'qiladi: kun branchi ushlab turgan stemlarning day stemga nisbatan nima ekanligi — qoidalardagi tartibda aynan shunday keltirilgan.",
    "backLabel": "Hisoblash asosi",
    "sections": [
      {
        "title": "丙子 — oltmishlik siklda kun ustuni raqami: 13",
        "blocks": [
          {
            "p": "Tug'ilgan kunning stem-branchi 丙子 bo'lsa, day stem — 丙 (Olov, Yang), kun branchi — 子 (Sichqon). Oltmishlik siklda bu kombinatsiya raqami: 13."
          },
          {
            "p": "Saju-Link day stemi 丙 bo'lgan insonni \"Yang Olov (丙)\" deb ataydi va natija ekrani ko'rsatadigan satr: “Tush paytidagi quyosh. Hissiyot ochiq ko'rinadi, atrof yorishadi, oldinga chiqish tabiiy keladi.” Bu satrning quyidagi o'qish yoki ballar bilan aloqasi yo'q."
          }
        ]
      },
      {
        "title": "Kun branchi 子 ushlab turgan stemlarning day stemga nisbatan nima ekanligi",
        "blocks": [
          {
            "p": "Kun branchi — turmush o'rtog'i pozitsiyasi. Day stem 丙 nuqtai nazaridan o'qilganda, branch 子 ushlab turgan stemlar quyidagicha. Asosiy stem (癸) — branchning vakillik energiyasi."
          },
          {
            "table": {
              "caption": "Kun branchi 丙子: hidden stems",
              "head": [
                "Hidden stem",
                "Pozitsiya",
                "Ulush",
                "Day stem 丙 uchun"
              ],
              "rows": [
                [
                  "Yang Suv (壬)",
                  "qoldiq (餘氣)",
                  "{hidJaYeo}",
                  "Sinovchi (偏官)"
                ],
                [
                  "Yin Suv (癸)",
                  "asosiy (本氣)",
                  "{hidJaBon}",
                  "Nufuz (正官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Turmush o'rtog'i pozitsiyasi va bu kun ustuni",
        "blocks": [
          {
            "p": "An'anaviy myeongri turmush o'rtog'i pozitsiyasini erkaklar uchun Barqaror boylik (正財), ayollar uchun Nufuz (正官) deb o'qiydi. Day stem 丙 bo'lganda, Barqaror boylik — 辛, Nufuz — 癸."
          },
          {
            "p": "Erkaklar uchun turmush o'rtog'i pozitsiyasi (Barqaror boylik) — 辛. 辛 子 ichida saqlanmaydi."
          },
          {
            "p": "Ayollar uchun turmush o'rtog'i pozitsiyasi (Nufuz) — 癸. 癸 子 ichida saqlanadi (asosiy (本氣))."
          }
        ]
      },
      {
        "title": "Qo'shni kun ustunlari va ular tarkibidagi belgilar",
        "blocks": [
          {
            "p": "Oltmishlik siklda oldingi kun ustuni — [乙亥](/guide/pillar-eul-hae), keyingisi — [丁丑](/guide/pillar-jeong-chuk)."
          },
          {
            "p": "Tarkibi: [Yang Olov (丙)](/guide/stem-byeong) va [子 (Sichqon)](/guide/branch-ja)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bu qo'llanma nimani aytmaydi",
        "blocks": [
          {
            "ul": [
              "Bitta kun ustuni insonni yoki munosabatni belgilab bermaydi. Saju to'rt ustunning sakkiz belgisi o'zaro qanday bog'lanishidan o'qiladi.",
              "Turmush o'rtog'i pozitsiyasini o'qish an'anaviy myeongri qoidasidan olingan, jinsingizni ko'rsatmasangiz bu pozitsiya o'qilmaydi."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-jeong-chuk": {
    "eyebrow": "Kun ustunlari",
    "title": "Kun ustuni 丁丑",
    "summary": "Kun ustuni 丁丑 Saju-Link hisoblash qoidalariga ko'ra qanday o'qiladi: kun branchi ushlab turgan stemlarning day stemga nisbatan nima ekanligi — qoidalardagi tartibda aynan shunday keltirilgan.",
    "backLabel": "Hisoblash asosi",
    "sections": [
      {
        "title": "丁丑 — oltmishlik siklda kun ustuni raqami: 14",
        "blocks": [
          {
            "p": "Tug'ilgan kunning stem-branchi 丁丑 bo'lsa, day stem — 丁 (Olov, Yin), kun branchi — 丑 (Sigir). Oltmishlik siklda bu kombinatsiya raqami: 14."
          },
          {
            "p": "Saju-Link day stemi 丁 bo'lgan insonni \"Yin Olov (丁)\" deb ataydi va natija ekrani ko'rsatadigan satr: “Sham va chiroq yorug'i. Sokin va uzoq yonadi, avvalo eng yaqinlarini isitadi.” Bu satrning quyidagi o'qish yoki ballar bilan aloqasi yo'q."
          }
        ]
      },
      {
        "title": "Kun branchi 丑 ushlab turgan stemlarning day stemga nisbatan nima ekanligi",
        "blocks": [
          {
            "p": "Kun branchi — turmush o'rtog'i pozitsiyasi. Day stem 丁 nuqtai nazaridan o'qilganda, branch 丑 ushlab turgan stemlar quyidagicha. Asosiy stem (己) — branchning vakillik energiyasi."
          },
          {
            "table": {
              "caption": "Kun branchi 丁丑: hidden stems",
              "head": [
                "Hidden stem",
                "Pozitsiya",
                "Ulush",
                "Day stem 丁 uchun"
              ],
              "rows": [
                [
                  "Yin Suv (癸)",
                  "qoldiq (餘氣)",
                  "{hidChukYeo}",
                  "Sinovchi (偏官)"
                ],
                [
                  "Yin Metall (辛)",
                  "o'rta (中氣)",
                  "{hidChukJung}",
                  "Kutilmagan boylik (偏財)"
                ],
                [
                  "Yin Tuproq (己)",
                  "asosiy (本氣)",
                  "{hidChukBon}",
                  "Ifoda (食神)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Turmush o'rtog'i pozitsiyasi va bu kun ustuni",
        "blocks": [
          {
            "p": "An'anaviy myeongri turmush o'rtog'i pozitsiyasini erkaklar uchun Barqaror boylik (正財), ayollar uchun Nufuz (正官) deb o'qiydi. Day stem 丁 bo'lganda, Barqaror boylik — 庚, Nufuz — 壬."
          },
          {
            "p": "Erkaklar uchun turmush o'rtog'i pozitsiyasi (Barqaror boylik) — 庚. 庚 丑 ichida saqlanmaydi."
          },
          {
            "p": "Ayollar uchun turmush o'rtog'i pozitsiyasi (Nufuz) — 壬. 壬 丑 ichida saqlanmaydi."
          }
        ]
      },
      {
        "title": "Qo'shni kun ustunlari va ular tarkibidagi belgilar",
        "blocks": [
          {
            "p": "Oltmishlik siklda oldingi kun ustuni — [丙子](/guide/pillar-byeong-ja), keyingisi — [戊寅](/guide/pillar-mu-in)."
          },
          {
            "p": "Tarkibi: [Yin Olov (丁)](/guide/stem-jeong) va [丑 (Sigir)](/guide/branch-chuk)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bu qo'llanma nimani aytmaydi",
        "blocks": [
          {
            "ul": [
              "Bitta kun ustuni insonni yoki munosabatni belgilab bermaydi. Saju to'rt ustunning sakkiz belgisi o'zaro qanday bog'lanishidan o'qiladi.",
              "Turmush o'rtog'i pozitsiyasini o'qish an'anaviy myeongri qoidasidan olingan, jinsingizni ko'rsatmasangiz bu pozitsiya o'qilmaydi."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-mu-in": {
    "eyebrow": "Kun ustunlari",
    "title": "Kun ustuni 戊寅",
    "summary": "Kun ustuni 戊寅 Saju-Link hisoblash qoidalariga ko'ra qanday o'qiladi: kun branchi ushlab turgan stemlarning day stemga nisbatan nima ekanligi — qoidalardagi tartibda aynan shunday keltirilgan.",
    "backLabel": "Hisoblash asosi",
    "sections": [
      {
        "title": "戊寅 — oltmishlik siklda kun ustuni raqami: 15",
        "blocks": [
          {
            "p": "Tug'ilgan kunning stem-branchi 戊寅 bo'lsa, day stem — 戊 (Tuproq, Yang), kun branchi — 寅 (Yo'lbars). Oltmishlik siklda bu kombinatsiya raqami: 15."
          },
          {
            "p": "Saju-Link day stemi 戊 bo'lgan insonni \"Yang Tuproq (戊)\" deb ataydi va natija ekrani ko'rsatadigan satr: “Keng dala va tog'. Silkitish qiyin, suyanish oson, ammo qabul qilingan qarorni o'zgartirishga shoshmaydi.” Bu satrning quyidagi o'qish yoki ballar bilan aloqasi yo'q."
          }
        ]
      },
      {
        "title": "Kun branchi 寅 ushlab turgan stemlarning day stemga nisbatan nima ekanligi",
        "blocks": [
          {
            "p": "Kun branchi — turmush o'rtog'i pozitsiyasi. Day stem 戊 nuqtai nazaridan o'qilganda, branch 寅 ushlab turgan stemlar quyidagicha. Asosiy stem (甲) — branchning vakillik energiyasi."
          },
          {
            "table": {
              "caption": "Kun branchi 戊寅: hidden stems",
              "head": [
                "Hidden stem",
                "Pozitsiya",
                "Ulush",
                "Day stem 戊 uchun"
              ],
              "rows": [
                [
                  "Yang Tuproq (戊)",
                  "qoldiq (餘氣)",
                  "{hidInYeo}",
                  "Hamroh (比肩)"
                ],
                [
                  "Yang Olov (丙)",
                  "o'rta (中氣)",
                  "{hidInJung}",
                  "Noodatiy tayanch (偏印)"
                ],
                [
                  "Yang Yog'och (甲)",
                  "asosiy (本氣)",
                  "{hidInBon}",
                  "Sinovchi (偏官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Turmush o'rtog'i pozitsiyasi va bu kun ustuni",
        "blocks": [
          {
            "p": "An'anaviy myeongri turmush o'rtog'i pozitsiyasini erkaklar uchun Barqaror boylik (正財), ayollar uchun Nufuz (正官) deb o'qiydi. Day stem 戊 bo'lganda, Barqaror boylik — 癸, Nufuz — 乙."
          },
          {
            "p": "Erkaklar uchun turmush o'rtog'i pozitsiyasi (Barqaror boylik) — 癸. 癸 寅 ichida saqlanmaydi."
          },
          {
            "p": "Ayollar uchun turmush o'rtog'i pozitsiyasi (Nufuz) — 乙. 乙 寅 ichida saqlanmaydi."
          }
        ]
      },
      {
        "title": "Qo'shni kun ustunlari va ular tarkibidagi belgilar",
        "blocks": [
          {
            "p": "Oltmishlik siklda oldingi kun ustuni — [丁丑](/guide/pillar-jeong-chuk), keyingisi — [己卯](/guide/pillar-gi-myo)."
          },
          {
            "p": "Tarkibi: [Yang Tuproq (戊)](/guide/stem-mu) va [寅 (Yo'lbars)](/guide/branch-in)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bu qo'llanma nimani aytmaydi",
        "blocks": [
          {
            "ul": [
              "Bitta kun ustuni insonni yoki munosabatni belgilab bermaydi. Saju to'rt ustunning sakkiz belgisi o'zaro qanday bog'lanishidan o'qiladi.",
              "Turmush o'rtog'i pozitsiyasini o'qish an'anaviy myeongri qoidasidan olingan, jinsingizni ko'rsatmasangiz bu pozitsiya o'qilmaydi."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gi-myo": {
    "eyebrow": "Kun ustunlari",
    "title": "Kun ustuni 己卯",
    "summary": "Kun ustuni 己卯 Saju-Link hisoblash qoidalariga ko'ra qanday o'qiladi: kun branchi ushlab turgan stemlarning day stemga nisbatan nima ekanligi — qoidalardagi tartibda aynan shunday keltirilgan.",
    "backLabel": "Hisoblash asosi",
    "sections": [
      {
        "title": "己卯 — oltmishlik siklda kun ustuni raqami: 16",
        "blocks": [
          {
            "p": "Tug'ilgan kunning stem-branchi 己卯 bo'lsa, day stem — 己 (Tuproq, Yin), kun branchi — 卯 (Quyon). Oltmishlik siklda bu kombinatsiya raqami: 16."
          },
          {
            "p": "Saju-Link day stemi 己 bo'lgan insonni \"Yin Tuproq (己)\" deb ataydi va natija ekrani ko'rsatadigan satr: “Ekin tuprog'i. Nima kelsa qabul qilib o'stiradi, ko'z-ko'z qilishdan ko'ra parvarishga yaqin.” Bu satrning quyidagi o'qish yoki ballar bilan aloqasi yo'q."
          }
        ]
      },
      {
        "title": "Kun branchi 卯 ushlab turgan stemlarning day stemga nisbatan nima ekanligi",
        "blocks": [
          {
            "p": "Kun branchi — turmush o'rtog'i pozitsiyasi. Day stem 己 nuqtai nazaridan o'qilganda, branch 卯 ushlab turgan stemlar quyidagicha. Asosiy stem (乙) — branchning vakillik energiyasi."
          },
          {
            "table": {
              "caption": "Kun branchi 己卯: hidden stems",
              "head": [
                "Hidden stem",
                "Pozitsiya",
                "Ulush",
                "Day stem 己 uchun"
              ],
              "rows": [
                [
                  "Yang Yog'och (甲)",
                  "qoldiq (餘氣)",
                  "{hidMyoYeo}",
                  "Nufuz (正官)"
                ],
                [
                  "Yin Yog'och (乙)",
                  "asosiy (本氣)",
                  "{hidMyoBon}",
                  "Sinovchi (偏官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Turmush o'rtog'i pozitsiyasi va bu kun ustuni",
        "blocks": [
          {
            "p": "An'anaviy myeongri turmush o'rtog'i pozitsiyasini erkaklar uchun Barqaror boylik (正財), ayollar uchun Nufuz (正官) deb o'qiydi. Day stem 己 bo'lganda, Barqaror boylik — 壬, Nufuz — 甲."
          },
          {
            "p": "Erkaklar uchun turmush o'rtog'i pozitsiyasi (Barqaror boylik) — 壬. 壬 卯 ichida saqlanmaydi."
          },
          {
            "p": "Ayollar uchun turmush o'rtog'i pozitsiyasi (Nufuz) — 甲. 甲 卯 ichida saqlanadi (qoldiq (餘氣))."
          }
        ]
      },
      {
        "title": "Qo'shni kun ustunlari va ular tarkibidagi belgilar",
        "blocks": [
          {
            "p": "Oltmishlik siklda oldingi kun ustuni — [戊寅](/guide/pillar-mu-in), keyingisi — [庚辰](/guide/pillar-gyeong-jin)."
          },
          {
            "p": "Tarkibi: [Yin Tuproq (己)](/guide/stem-gi) va [卯 (Quyon)](/guide/branch-myo)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bu qo'llanma nimani aytmaydi",
        "blocks": [
          {
            "ul": [
              "Bitta kun ustuni insonni yoki munosabatni belgilab bermaydi. Saju to'rt ustunning sakkiz belgisi o'zaro qanday bog'lanishidan o'qiladi.",
              "Turmush o'rtog'i pozitsiyasini o'qish an'anaviy myeongri qoidasidan olingan, jinsingizni ko'rsatmasangiz bu pozitsiya o'qilmaydi."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gyeong-jin": {
    "eyebrow": "Kun ustunlari",
    "title": "Kun ustuni 庚辰",
    "summary": "Kun ustuni 庚辰 Saju-Link hisoblash qoidalariga ko'ra qanday o'qiladi: kun branchi ushlab turgan stemlarning day stemga nisbatan nima ekanligi — qoidalardagi tartibda aynan shunday keltirilgan.",
    "backLabel": "Hisoblash asosi",
    "sections": [
      {
        "title": "庚辰 — oltmishlik siklda kun ustuni raqami: 17",
        "blocks": [
          {
            "p": "Tug'ilgan kunning stem-branchi 庚辰 bo'lsa, day stem — 庚 (Metall, Yang), kun branchi — 辰 (Ajdar). Oltmishlik siklda bu kombinatsiya raqami: 17."
          },
          {
            "p": "Saju-Link day stemi 庚 bo'lgan insonni \"Yang Metall (庚)\" deb ataydi va natija ekrani ko'rsatadigan satr: “Ishlov ko'rmagan temir. Qat'iy va aniq, osilib qolgan ishlarga sabri yo'q.” Bu satrning quyidagi o'qish yoki ballar bilan aloqasi yo'q."
          }
        ]
      },
      {
        "title": "Kun branchi 辰 ushlab turgan stemlarning day stemga nisbatan nima ekanligi",
        "blocks": [
          {
            "p": "Kun branchi — turmush o'rtog'i pozitsiyasi. Day stem 庚 nuqtai nazaridan o'qilganda, branch 辰 ushlab turgan stemlar quyidagicha. Asosiy stem (戊) — branchning vakillik energiyasi."
          },
          {
            "table": {
              "caption": "Kun branchi 庚辰: hidden stems",
              "head": [
                "Hidden stem",
                "Pozitsiya",
                "Ulush",
                "Day stem 庚 uchun"
              ],
              "rows": [
                [
                  "Yin Yog'och (乙)",
                  "qoldiq (餘氣)",
                  "{hidJinYeo}",
                  "Barqaror boylik (正財)"
                ],
                [
                  "Yin Suv (癸)",
                  "o'rta (中氣)",
                  "{hidJinJung}",
                  "Buzuvchi (傷官)"
                ],
                [
                  "Yang Tuproq (戊)",
                  "asosiy (本氣)",
                  "{hidJinBon}",
                  "Noodatiy tayanch (偏印)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Turmush o'rtog'i pozitsiyasi va bu kun ustuni",
        "blocks": [
          {
            "p": "An'anaviy myeongri turmush o'rtog'i pozitsiyasini erkaklar uchun Barqaror boylik (正財), ayollar uchun Nufuz (正官) deb o'qiydi. Day stem 庚 bo'lganda, Barqaror boylik — 乙, Nufuz — 丁."
          },
          {
            "p": "Erkaklar uchun turmush o'rtog'i pozitsiyasi (Barqaror boylik) — 乙. 乙 辰 ichida saqlanadi (qoldiq (餘氣))."
          },
          {
            "p": "Ayollar uchun turmush o'rtog'i pozitsiyasi (Nufuz) — 丁. 丁 辰 ichida saqlanmaydi."
          }
        ]
      },
      {
        "title": "Qo'shni kun ustunlari va ular tarkibidagi belgilar",
        "blocks": [
          {
            "p": "Oltmishlik siklda oldingi kun ustuni — [己卯](/guide/pillar-gi-myo), keyingisi — [辛巳](/guide/pillar-sin-sa)."
          },
          {
            "p": "Tarkibi: [Yang Metall (庚)](/guide/stem-gyeong) va [辰 (Ajdar)](/guide/branch-jin)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bu qo'llanma nimani aytmaydi",
        "blocks": [
          {
            "ul": [
              "Bitta kun ustuni insonni yoki munosabatni belgilab bermaydi. Saju to'rt ustunning sakkiz belgisi o'zaro qanday bog'lanishidan o'qiladi.",
              "Turmush o'rtog'i pozitsiyasini o'qish an'anaviy myeongri qoidasidan olingan, jinsingizni ko'rsatmasangiz bu pozitsiya o'qilmaydi."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-sin-sa": {
    "eyebrow": "Kun ustunlari",
    "title": "Kun ustuni 辛巳",
    "summary": "Kun ustuni 辛巳 Saju-Link hisoblash qoidalariga ko'ra qanday o'qiladi: kun branchi ushlab turgan stemlarning day stemga nisbatan nima ekanligi — qoidalardagi tartibda aynan shunday keltirilgan.",
    "backLabel": "Hisoblash asosi",
    "sections": [
      {
        "title": "辛巳 — oltmishlik siklda kun ustuni raqami: 18",
        "blocks": [
          {
            "p": "Tug'ilgan kunning stem-branchi 辛巳 bo'lsa, day stem — 辛 (Metall, Yin), kun branchi — 巳 (Ilon). Oltmishlik siklda bu kombinatsiya raqami: 18."
          },
          {
            "p": "Saju-Link day stemi 辛 bo'lgan insonni \"Yin Metall (辛)\" deb ataydi va natija ekrani ko'rsatadigan satr: “Sayqallangan qimmatbaho tosh. Nozik did va yuqori talab; uvol qilingan ishni e'tiborsiz qoldirmaydi.” Bu satrning quyidagi o'qish yoki ballar bilan aloqasi yo'q."
          }
        ]
      },
      {
        "title": "Kun branchi 巳 ushlab turgan stemlarning day stemga nisbatan nima ekanligi",
        "blocks": [
          {
            "p": "Kun branchi — turmush o'rtog'i pozitsiyasi. Day stem 辛 nuqtai nazaridan o'qilganda, branch 巳 ushlab turgan stemlar quyidagicha. Asosiy stem (丙) — branchning vakillik energiyasi."
          },
          {
            "table": {
              "caption": "Kun branchi 辛巳: hidden stems",
              "head": [
                "Hidden stem",
                "Pozitsiya",
                "Ulush",
                "Day stem 辛 uchun"
              ],
              "rows": [
                [
                  "Yang Tuproq (戊)",
                  "qoldiq (餘氣)",
                  "{hidSaYeo}",
                  "G'amxo'rlik (正印)"
                ],
                [
                  "Yang Metall (庚)",
                  "o'rta (中氣)",
                  "{hidSaJung}",
                  "Raqib (劫財)"
                ],
                [
                  "Yang Olov (丙)",
                  "asosiy (本氣)",
                  "{hidSaBon}",
                  "Nufuz (正官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Turmush o'rtog'i pozitsiyasi va bu kun ustuni",
        "blocks": [
          {
            "p": "An'anaviy myeongri turmush o'rtog'i pozitsiyasini erkaklar uchun Barqaror boylik (正財), ayollar uchun Nufuz (正官) deb o'qiydi. Day stem 辛 bo'lganda, Barqaror boylik — 甲, Nufuz — 丙."
          },
          {
            "p": "Erkaklar uchun turmush o'rtog'i pozitsiyasi (Barqaror boylik) — 甲. 甲 巳 ichida saqlanmaydi."
          },
          {
            "p": "Ayollar uchun turmush o'rtog'i pozitsiyasi (Nufuz) — 丙. 丙 巳 ichida saqlanadi (asosiy (本氣))."
          }
        ]
      },
      {
        "title": "Qo'shni kun ustunlari va ular tarkibidagi belgilar",
        "blocks": [
          {
            "p": "Oltmishlik siklda oldingi kun ustuni — [庚辰](/guide/pillar-gyeong-jin), keyingisi — [壬午](/guide/pillar-im-o)."
          },
          {
            "p": "Tarkibi: [Yin Metall (辛)](/guide/stem-sin) va [巳 (Ilon)](/guide/branch-sa)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bu qo'llanma nimani aytmaydi",
        "blocks": [
          {
            "ul": [
              "Bitta kun ustuni insonni yoki munosabatni belgilab bermaydi. Saju to'rt ustunning sakkiz belgisi o'zaro qanday bog'lanishidan o'qiladi.",
              "Turmush o'rtog'i pozitsiyasini o'qish an'anaviy myeongri qoidasidan olingan, jinsingizni ko'rsatmasangiz bu pozitsiya o'qilmaydi."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-im-o": {
    "eyebrow": "Kun ustunlari",
    "title": "Kun ustuni 壬午",
    "summary": "Kun ustuni 壬午 Saju-Link hisoblash qoidalariga ko'ra qanday o'qiladi: kun branchi ushlab turgan stemlarning day stemga nisbatan nima ekanligi — qoidalardagi tartibda aynan shunday keltirilgan.",
    "backLabel": "Hisoblash asosi",
    "sections": [
      {
        "title": "壬午 — oltmishlik siklda kun ustuni raqami: 19",
        "blocks": [
          {
            "p": "Tug'ilgan kunning stem-branchi 壬午 bo'lsa, day stem — 壬 (Suv, Yang), kun branchi — 午 (Ot). Oltmishlik siklda bu kombinatsiya raqami: 19."
          },
          {
            "p": "Saju-Link day stemi 壬 bo'lgan insonni \"Yang Suv (壬)\" deb ataydi va natija ekrani ko'rsatadigan satr: “Daryo va dengiz. Qarashi keng, narsalarning qay tomonga oqayotganini ilg'aydi.” Bu satrning quyidagi o'qish yoki ballar bilan aloqasi yo'q."
          }
        ]
      },
      {
        "title": "Kun branchi 午 ushlab turgan stemlarning day stemga nisbatan nima ekanligi",
        "blocks": [
          {
            "p": "Kun branchi — turmush o'rtog'i pozitsiyasi. Day stem 壬 nuqtai nazaridan o'qilganda, branch 午 ushlab turgan stemlar quyidagicha. Asosiy stem (丁) — branchning vakillik energiyasi."
          },
          {
            "table": {
              "caption": "Kun branchi 壬午: hidden stems",
              "head": [
                "Hidden stem",
                "Pozitsiya",
                "Ulush",
                "Day stem 壬 uchun"
              ],
              "rows": [
                [
                  "Yang Olov (丙)",
                  "qoldiq (餘氣)",
                  "{hidOYeo}",
                  "Kutilmagan boylik (偏財)"
                ],
                [
                  "Yin Tuproq (己)",
                  "o'rta (中氣)",
                  "{hidOJung}",
                  "Nufuz (正官)"
                ],
                [
                  "Yin Olov (丁)",
                  "asosiy (本氣)",
                  "{hidOBon}",
                  "Barqaror boylik (正財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Turmush o'rtog'i pozitsiyasi va bu kun ustuni",
        "blocks": [
          {
            "p": "An'anaviy myeongri turmush o'rtog'i pozitsiyasini erkaklar uchun Barqaror boylik (正財), ayollar uchun Nufuz (正官) deb o'qiydi. Day stem 壬 bo'lganda, Barqaror boylik — 丁, Nufuz — 己."
          },
          {
            "p": "Erkaklar uchun turmush o'rtog'i pozitsiyasi (Barqaror boylik) — 丁. 丁 午 ichida saqlanadi (asosiy (本氣))."
          },
          {
            "p": "Ayollar uchun turmush o'rtog'i pozitsiyasi (Nufuz) — 己. 己 午 ichida saqlanadi (o'rta (中氣))."
          }
        ]
      },
      {
        "title": "Qo'shni kun ustunlari va ular tarkibidagi belgilar",
        "blocks": [
          {
            "p": "Oltmishlik siklda oldingi kun ustuni — [辛巳](/guide/pillar-sin-sa), keyingisi — [癸未](/guide/pillar-gye-mi)."
          },
          {
            "p": "Tarkibi: [Yang Suv (壬)](/guide/stem-im) va [午 (Ot)](/guide/branch-o)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bu qo'llanma nimani aytmaydi",
        "blocks": [
          {
            "ul": [
              "Bitta kun ustuni insonni yoki munosabatni belgilab bermaydi. Saju to'rt ustunning sakkiz belgisi o'zaro qanday bog'lanishidan o'qiladi.",
              "Turmush o'rtog'i pozitsiyasini o'qish an'anaviy myeongri qoidasidan olingan, jinsingizni ko'rsatmasangiz bu pozitsiya o'qilmaydi."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gye-mi": {
    "eyebrow": "Kun ustunlari",
    "title": "Kun ustuni 癸未",
    "summary": "Kun ustuni 癸未 Saju-Link hisoblash qoidalariga ko'ra qanday o'qiladi: kun branchi ushlab turgan stemlarning day stemga nisbatan nima ekanligi — qoidalardagi tartibda aynan shunday keltirilgan.",
    "backLabel": "Hisoblash asosi",
    "sections": [
      {
        "title": "癸未 — oltmishlik siklda kun ustuni raqami: 20",
        "blocks": [
          {
            "p": "Tug'ilgan kunning stem-branchi 癸未 bo'lsa, day stem — 癸 (Suv, Yin), kun branchi — 未 (Qo'y). Oltmishlik siklda bu kombinatsiya raqami: 20."
          },
          {
            "p": "Saju-Link day stemi 癸 bo'lgan insonni \"Yin Suv (癸)\" deb ataydi va natija ekrani ko'rsatadigan satr: “Shabnam va yomg'ir. Sokin singib boradi, so'zdan oldin kayfiyatni o'qiydi.” Bu satrning quyidagi o'qish yoki ballar bilan aloqasi yo'q."
          }
        ]
      },
      {
        "title": "Kun branchi 未 ushlab turgan stemlarning day stemga nisbatan nima ekanligi",
        "blocks": [
          {
            "p": "Kun branchi — turmush o'rtog'i pozitsiyasi. Day stem 癸 nuqtai nazaridan o'qilganda, branch 未 ushlab turgan stemlar quyidagicha. Asosiy stem (己) — branchning vakillik energiyasi."
          },
          {
            "table": {
              "caption": "Kun branchi 癸未: hidden stems",
              "head": [
                "Hidden stem",
                "Pozitsiya",
                "Ulush",
                "Day stem 癸 uchun"
              ],
              "rows": [
                [
                  "Yin Olov (丁)",
                  "qoldiq (餘氣)",
                  "{hidMiYeo}",
                  "Kutilmagan boylik (偏財)"
                ],
                [
                  "Yin Yog'och (乙)",
                  "o'rta (中氣)",
                  "{hidMiJung}",
                  "Ifoda (食神)"
                ],
                [
                  "Yin Tuproq (己)",
                  "asosiy (本氣)",
                  "{hidMiBon}",
                  "Sinovchi (偏官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Turmush o'rtog'i pozitsiyasi va bu kun ustuni",
        "blocks": [
          {
            "p": "An'anaviy myeongri turmush o'rtog'i pozitsiyasini erkaklar uchun Barqaror boylik (正財), ayollar uchun Nufuz (正官) deb o'qiydi. Day stem 癸 bo'lganda, Barqaror boylik — 丙, Nufuz — 戊."
          },
          {
            "p": "Erkaklar uchun turmush o'rtog'i pozitsiyasi (Barqaror boylik) — 丙. 丙 未 ichida saqlanmaydi."
          },
          {
            "p": "Ayollar uchun turmush o'rtog'i pozitsiyasi (Nufuz) — 戊. 戊 未 ichida saqlanmaydi."
          }
        ]
      },
      {
        "title": "Qo'shni kun ustunlari va ular tarkibidagi belgilar",
        "blocks": [
          {
            "p": "Oltmishlik siklda oldingi kun ustuni — [壬午](/guide/pillar-im-o), keyingisi — [甲申](/guide/pillar-gap-sin)."
          },
          {
            "p": "Tarkibi: [Yin Suv (癸)](/guide/stem-gye) va [未 (Qo'y)](/guide/branch-mi)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bu qo'llanma nimani aytmaydi",
        "blocks": [
          {
            "ul": [
              "Bitta kun ustuni insonni yoki munosabatni belgilab bermaydi. Saju to'rt ustunning sakkiz belgisi o'zaro qanday bog'lanishidan o'qiladi.",
              "Turmush o'rtog'i pozitsiyasini o'qish an'anaviy myeongri qoidasidan olingan, jinsingizni ko'rsatmasangiz bu pozitsiya o'qilmaydi."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gap-sin": {
    "eyebrow": "Kun ustunlari",
    "title": "Kun ustuni 甲申",
    "summary": "Kun ustuni 甲申 Saju-Link hisoblash qoidalariga ko'ra qanday o'qiladi: kun branchi ushlab turgan stemlarning day stemga nisbatan nima ekanligi — qoidalardagi tartibda aynan shunday keltirilgan.",
    "backLabel": "Hisoblash asosi",
    "sections": [
      {
        "title": "甲申 — oltmishlik siklda kun ustuni raqami: 21",
        "blocks": [
          {
            "p": "Tug'ilgan kunning stem-branchi 甲申 bo'lsa, day stem — 甲 (Yog'och, Yang), kun branchi — 申 (Maymun). Oltmishlik siklda bu kombinatsiya raqami: 21."
          },
          {
            "p": "Saju-Link day stemi 甲 bo'lgan insonni \"Yang Yog'och (甲)\" deb ataydi va natija ekrani ko'rsatadigan satr: “Tik o'sadigan baland daraxt. Yo'nalish belgilangach chayqalmaydi va egilishdan ko'ra chidashni tanlaydi.” Bu satrning quyidagi o'qish yoki ballar bilan aloqasi yo'q."
          }
        ]
      },
      {
        "title": "Kun branchi 申 ushlab turgan stemlarning day stemga nisbatan nima ekanligi",
        "blocks": [
          {
            "p": "Kun branchi — turmush o'rtog'i pozitsiyasi. Day stem 甲 nuqtai nazaridan o'qilganda, branch 申 ushlab turgan stemlar quyidagicha. Asosiy stem (庚) — branchning vakillik energiyasi."
          },
          {
            "table": {
              "caption": "Kun branchi 甲申: hidden stems",
              "head": [
                "Hidden stem",
                "Pozitsiya",
                "Ulush",
                "Day stem 甲 uchun"
              ],
              "rows": [
                [
                  "Yang Tuproq (戊)",
                  "qoldiq (餘氣)",
                  "{hidSinYeo}",
                  "Kutilmagan boylik (偏財)"
                ],
                [
                  "Yang Suv (壬)",
                  "o'rta (中氣)",
                  "{hidSinJung}",
                  "Noodatiy tayanch (偏印)"
                ],
                [
                  "Yang Metall (庚)",
                  "asosiy (本氣)",
                  "{hidSinBon}",
                  "Sinovchi (偏官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Turmush o'rtog'i pozitsiyasi va bu kun ustuni",
        "blocks": [
          {
            "p": "An'anaviy myeongri turmush o'rtog'i pozitsiyasini erkaklar uchun Barqaror boylik (正財), ayollar uchun Nufuz (正官) deb o'qiydi. Day stem 甲 bo'lganda, Barqaror boylik — 己, Nufuz — 辛."
          },
          {
            "p": "Erkaklar uchun turmush o'rtog'i pozitsiyasi (Barqaror boylik) — 己. 己 申 ichida saqlanmaydi."
          },
          {
            "p": "Ayollar uchun turmush o'rtog'i pozitsiyasi (Nufuz) — 辛. 辛 申 ichida saqlanmaydi."
          }
        ]
      },
      {
        "title": "Qo'shni kun ustunlari va ular tarkibidagi belgilar",
        "blocks": [
          {
            "p": "Oltmishlik siklda oldingi kun ustuni — [癸未](/guide/pillar-gye-mi), keyingisi — [乙酉](/guide/pillar-eul-yu)."
          },
          {
            "p": "Tarkibi: [Yang Yog'och (甲)](/guide/stem-gap) va [申 (Maymun)](/guide/branch-sin)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bu qo'llanma nimani aytmaydi",
        "blocks": [
          {
            "ul": [
              "Bitta kun ustuni insonni yoki munosabatni belgilab bermaydi. Saju to'rt ustunning sakkiz belgisi o'zaro qanday bog'lanishidan o'qiladi.",
              "Turmush o'rtog'i pozitsiyasini o'qish an'anaviy myeongri qoidasidan olingan, jinsingizni ko'rsatmasangiz bu pozitsiya o'qilmaydi."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-eul-yu": {
    "eyebrow": "Kun ustunlari",
    "title": "Kun ustuni 乙酉",
    "summary": "Kun ustuni 乙酉 Saju-Link hisoblash qoidalariga ko'ra qanday o'qiladi: kun branchi ushlab turgan stemlarning day stemga nisbatan nima ekanligi — qoidalardagi tartibda aynan shunday keltirilgan.",
    "backLabel": "Hisoblash asosi",
    "sections": [
      {
        "title": "乙酉 — oltmishlik siklda kun ustuni raqami: 22",
        "blocks": [
          {
            "p": "Tug'ilgan kunning stem-branchi 乙酉 bo'lsa, day stem — 乙 (Yog'och, Yin), kun branchi — 酉 (Xo'roz). Oltmishlik siklda bu kombinatsiya raqami: 22."
          },
          {
            "p": "Saju-Link day stemi 乙 bo'lgan insonni \"Yin Yog'och (乙)\" deb ataydi va natija ekrani ko'rsatadigan satr: “Chirmovuq kabi egiluvchan o't. Sharoitga qarab egiladi-yu, oldinga yuraveradi va uzilmaydi.” Bu satrning quyidagi o'qish yoki ballar bilan aloqasi yo'q."
          }
        ]
      },
      {
        "title": "Kun branchi 酉 ushlab turgan stemlarning day stemga nisbatan nima ekanligi",
        "blocks": [
          {
            "p": "Kun branchi — turmush o'rtog'i pozitsiyasi. Day stem 乙 nuqtai nazaridan o'qilganda, branch 酉 ushlab turgan stemlar quyidagicha. Asosiy stem (辛) — branchning vakillik energiyasi."
          },
          {
            "table": {
              "caption": "Kun branchi 乙酉: hidden stems",
              "head": [
                "Hidden stem",
                "Pozitsiya",
                "Ulush",
                "Day stem 乙 uchun"
              ],
              "rows": [
                [
                  "Yang Metall (庚)",
                  "qoldiq (餘氣)",
                  "{hidYuYeo}",
                  "Nufuz (正官)"
                ],
                [
                  "Yin Metall (辛)",
                  "asosiy (本氣)",
                  "{hidYuBon}",
                  "Sinovchi (偏官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Turmush o'rtog'i pozitsiyasi va bu kun ustuni",
        "blocks": [
          {
            "p": "An'anaviy myeongri turmush o'rtog'i pozitsiyasini erkaklar uchun Barqaror boylik (正財), ayollar uchun Nufuz (正官) deb o'qiydi. Day stem 乙 bo'lganda, Barqaror boylik — 戊, Nufuz — 庚."
          },
          {
            "p": "Erkaklar uchun turmush o'rtog'i pozitsiyasi (Barqaror boylik) — 戊. 戊 酉 ichida saqlanmaydi."
          },
          {
            "p": "Ayollar uchun turmush o'rtog'i pozitsiyasi (Nufuz) — 庚. 庚 酉 ichida saqlanadi (qoldiq (餘氣))."
          }
        ]
      },
      {
        "title": "Qo'shni kun ustunlari va ular tarkibidagi belgilar",
        "blocks": [
          {
            "p": "Oltmishlik siklda oldingi kun ustuni — [甲申](/guide/pillar-gap-sin), keyingisi — [丙戌](/guide/pillar-byeong-sul)."
          },
          {
            "p": "Tarkibi: [Yin Yog'och (乙)](/guide/stem-eul) va [酉 (Xo'roz)](/guide/branch-yu)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bu qo'llanma nimani aytmaydi",
        "blocks": [
          {
            "ul": [
              "Bitta kun ustuni insonni yoki munosabatni belgilab bermaydi. Saju to'rt ustunning sakkiz belgisi o'zaro qanday bog'lanishidan o'qiladi.",
              "Turmush o'rtog'i pozitsiyasini o'qish an'anaviy myeongri qoidasidan olingan, jinsingizni ko'rsatmasangiz bu pozitsiya o'qilmaydi."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-byeong-sul": {
    "eyebrow": "Kun ustunlari",
    "title": "Kun ustuni 丙戌",
    "summary": "Kun ustuni 丙戌 Saju-Link hisoblash qoidalariga ko'ra qanday o'qiladi: kun branchi ushlab turgan stemlarning day stemga nisbatan nima ekanligi — qoidalardagi tartibda aynan shunday keltirilgan.",
    "backLabel": "Hisoblash asosi",
    "sections": [
      {
        "title": "丙戌 — oltmishlik siklda kun ustuni raqami: 23",
        "blocks": [
          {
            "p": "Tug'ilgan kunning stem-branchi 丙戌 bo'lsa, day stem — 丙 (Olov, Yang), kun branchi — 戌 (It). Oltmishlik siklda bu kombinatsiya raqami: 23."
          },
          {
            "p": "Saju-Link day stemi 丙 bo'lgan insonni \"Yang Olov (丙)\" deb ataydi va natija ekrani ko'rsatadigan satr: “Tush paytidagi quyosh. Hissiyot ochiq ko'rinadi, atrof yorishadi, oldinga chiqish tabiiy keladi.” Bu satrning quyidagi o'qish yoki ballar bilan aloqasi yo'q."
          }
        ]
      },
      {
        "title": "Kun branchi 戌 ushlab turgan stemlarning day stemga nisbatan nima ekanligi",
        "blocks": [
          {
            "p": "Kun branchi — turmush o'rtog'i pozitsiyasi. Day stem 丙 nuqtai nazaridan o'qilganda, branch 戌 ushlab turgan stemlar quyidagicha. Asosiy stem (戊) — branchning vakillik energiyasi."
          },
          {
            "table": {
              "caption": "Kun branchi 丙戌: hidden stems",
              "head": [
                "Hidden stem",
                "Pozitsiya",
                "Ulush",
                "Day stem 丙 uchun"
              ],
              "rows": [
                [
                  "Yin Metall (辛)",
                  "qoldiq (餘氣)",
                  "{hidSulYeo}",
                  "Barqaror boylik (正財)"
                ],
                [
                  "Yin Olov (丁)",
                  "o'rta (中氣)",
                  "{hidSulJung}",
                  "Raqib (劫財)"
                ],
                [
                  "Yang Tuproq (戊)",
                  "asosiy (本氣)",
                  "{hidSulBon}",
                  "Ifoda (食神)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Turmush o'rtog'i pozitsiyasi va bu kun ustuni",
        "blocks": [
          {
            "p": "An'anaviy myeongri turmush o'rtog'i pozitsiyasini erkaklar uchun Barqaror boylik (正財), ayollar uchun Nufuz (正官) deb o'qiydi. Day stem 丙 bo'lganda, Barqaror boylik — 辛, Nufuz — 癸."
          },
          {
            "p": "Erkaklar uchun turmush o'rtog'i pozitsiyasi (Barqaror boylik) — 辛. 辛 戌 ichida saqlanadi (qoldiq (餘氣))."
          },
          {
            "p": "Ayollar uchun turmush o'rtog'i pozitsiyasi (Nufuz) — 癸. 癸 戌 ichida saqlanmaydi."
          }
        ]
      },
      {
        "title": "Qo'shni kun ustunlari va ular tarkibidagi belgilar",
        "blocks": [
          {
            "p": "Oltmishlik siklda oldingi kun ustuni — [乙酉](/guide/pillar-eul-yu), keyingisi — [丁亥](/guide/pillar-jeong-hae)."
          },
          {
            "p": "Tarkibi: [Yang Olov (丙)](/guide/stem-byeong) va [戌 (It)](/guide/branch-sul)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bu qo'llanma nimani aytmaydi",
        "blocks": [
          {
            "ul": [
              "Bitta kun ustuni insonni yoki munosabatni belgilab bermaydi. Saju to'rt ustunning sakkiz belgisi o'zaro qanday bog'lanishidan o'qiladi.",
              "Turmush o'rtog'i pozitsiyasini o'qish an'anaviy myeongri qoidasidan olingan, jinsingizni ko'rsatmasangiz bu pozitsiya o'qilmaydi."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-jeong-hae": {
    "eyebrow": "Kun ustunlari",
    "title": "Kun ustuni 丁亥",
    "summary": "Kun ustuni 丁亥 Saju-Link hisoblash qoidalariga ko'ra qanday o'qiladi: kun branchi ushlab turgan stemlarning day stemga nisbatan nima ekanligi — qoidalardagi tartibda aynan shunday keltirilgan.",
    "backLabel": "Hisoblash asosi",
    "sections": [
      {
        "title": "丁亥 — oltmishlik siklda kun ustuni raqami: 24",
        "blocks": [
          {
            "p": "Tug'ilgan kunning stem-branchi 丁亥 bo'lsa, day stem — 丁 (Olov, Yin), kun branchi — 亥 (Cho'chqa). Oltmishlik siklda bu kombinatsiya raqami: 24."
          },
          {
            "p": "Saju-Link day stemi 丁 bo'lgan insonni \"Yin Olov (丁)\" deb ataydi va natija ekrani ko'rsatadigan satr: “Sham va chiroq yorug'i. Sokin va uzoq yonadi, avvalo eng yaqinlarini isitadi.” Bu satrning quyidagi o'qish yoki ballar bilan aloqasi yo'q."
          }
        ]
      },
      {
        "title": "Kun branchi 亥 ushlab turgan stemlarning day stemga nisbatan nima ekanligi",
        "blocks": [
          {
            "p": "Kun branchi — turmush o'rtog'i pozitsiyasi. Day stem 丁 nuqtai nazaridan o'qilganda, branch 亥 ushlab turgan stemlar quyidagicha. Asosiy stem (壬) — branchning vakillik energiyasi."
          },
          {
            "table": {
              "caption": "Kun branchi 丁亥: hidden stems",
              "head": [
                "Hidden stem",
                "Pozitsiya",
                "Ulush",
                "Day stem 丁 uchun"
              ],
              "rows": [
                [
                  "Yang Tuproq (戊)",
                  "qoldiq (餘氣)",
                  "{hidHaeYeo}",
                  "Buzuvchi (傷官)"
                ],
                [
                  "Yang Yog'och (甲)",
                  "o'rta (中氣)",
                  "{hidHaeJung}",
                  "G'amxo'rlik (正印)"
                ],
                [
                  "Yang Suv (壬)",
                  "asosiy (本氣)",
                  "{hidHaeBon}",
                  "Nufuz (正官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Turmush o'rtog'i pozitsiyasi va bu kun ustuni",
        "blocks": [
          {
            "p": "An'anaviy myeongri turmush o'rtog'i pozitsiyasini erkaklar uchun Barqaror boylik (正財), ayollar uchun Nufuz (正官) deb o'qiydi. Day stem 丁 bo'lganda, Barqaror boylik — 庚, Nufuz — 壬."
          },
          {
            "p": "Erkaklar uchun turmush o'rtog'i pozitsiyasi (Barqaror boylik) — 庚. 庚 亥 ichida saqlanmaydi."
          },
          {
            "p": "Ayollar uchun turmush o'rtog'i pozitsiyasi (Nufuz) — 壬. 壬 亥 ichida saqlanadi (asosiy (本氣))."
          }
        ]
      },
      {
        "title": "Qo'shni kun ustunlari va ular tarkibidagi belgilar",
        "blocks": [
          {
            "p": "Oltmishlik siklda oldingi kun ustuni — [丙戌](/guide/pillar-byeong-sul), keyingisi — [戊子](/guide/pillar-mu-ja)."
          },
          {
            "p": "Tarkibi: [Yin Olov (丁)](/guide/stem-jeong) va [亥 (Cho'chqa)](/guide/branch-hae)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bu qo'llanma nimani aytmaydi",
        "blocks": [
          {
            "ul": [
              "Bitta kun ustuni insonni yoki munosabatni belgilab bermaydi. Saju to'rt ustunning sakkiz belgisi o'zaro qanday bog'lanishidan o'qiladi.",
              "Turmush o'rtog'i pozitsiyasini o'qish an'anaviy myeongri qoidasidan olingan, jinsingizni ko'rsatmasangiz bu pozitsiya o'qilmaydi."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-mu-ja": {
    "eyebrow": "Kun ustunlari",
    "title": "Kun ustuni 戊子",
    "summary": "Kun ustuni 戊子 Saju-Link hisoblash qoidalariga ko'ra qanday o'qiladi: kun branchi ushlab turgan stemlarning day stemga nisbatan nima ekanligi — qoidalardagi tartibda aynan shunday keltirilgan.",
    "backLabel": "Hisoblash asosi",
    "sections": [
      {
        "title": "戊子 — oltmishlik siklda kun ustuni raqami: 25",
        "blocks": [
          {
            "p": "Tug'ilgan kunning stem-branchi 戊子 bo'lsa, day stem — 戊 (Tuproq, Yang), kun branchi — 子 (Sichqon). Oltmishlik siklda bu kombinatsiya raqami: 25."
          },
          {
            "p": "Saju-Link day stemi 戊 bo'lgan insonni \"Yang Tuproq (戊)\" deb ataydi va natija ekrani ko'rsatadigan satr: “Keng dala va tog'. Silkitish qiyin, suyanish oson, ammo qabul qilingan qarorni o'zgartirishga shoshmaydi.” Bu satrning quyidagi o'qish yoki ballar bilan aloqasi yo'q."
          }
        ]
      },
      {
        "title": "Kun branchi 子 ushlab turgan stemlarning day stemga nisbatan nima ekanligi",
        "blocks": [
          {
            "p": "Kun branchi — turmush o'rtog'i pozitsiyasi. Day stem 戊 nuqtai nazaridan o'qilganda, branch 子 ushlab turgan stemlar quyidagicha. Asosiy stem (癸) — branchning vakillik energiyasi."
          },
          {
            "table": {
              "caption": "Kun branchi 戊子: hidden stems",
              "head": [
                "Hidden stem",
                "Pozitsiya",
                "Ulush",
                "Day stem 戊 uchun"
              ],
              "rows": [
                [
                  "Yang Suv (壬)",
                  "qoldiq (餘氣)",
                  "{hidJaYeo}",
                  "Kutilmagan boylik (偏財)"
                ],
                [
                  "Yin Suv (癸)",
                  "asosiy (本氣)",
                  "{hidJaBon}",
                  "Barqaror boylik (正財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Turmush o'rtog'i pozitsiyasi va bu kun ustuni",
        "blocks": [
          {
            "p": "An'anaviy myeongri turmush o'rtog'i pozitsiyasini erkaklar uchun Barqaror boylik (正財), ayollar uchun Nufuz (正官) deb o'qiydi. Day stem 戊 bo'lganda, Barqaror boylik — 癸, Nufuz — 乙."
          },
          {
            "p": "Erkaklar uchun turmush o'rtog'i pozitsiyasi (Barqaror boylik) — 癸. 癸 子 ichida saqlanadi (asosiy (本氣))."
          },
          {
            "p": "Ayollar uchun turmush o'rtog'i pozitsiyasi (Nufuz) — 乙. 乙 子 ichida saqlanmaydi."
          }
        ]
      },
      {
        "title": "Qo'shni kun ustunlari va ular tarkibidagi belgilar",
        "blocks": [
          {
            "p": "Oltmishlik siklda oldingi kun ustuni — [丁亥](/guide/pillar-jeong-hae), keyingisi — [己丑](/guide/pillar-gi-chuk)."
          },
          {
            "p": "Tarkibi: [Yang Tuproq (戊)](/guide/stem-mu) va [子 (Sichqon)](/guide/branch-ja)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bu qo'llanma nimani aytmaydi",
        "blocks": [
          {
            "ul": [
              "Bitta kun ustuni insonni yoki munosabatni belgilab bermaydi. Saju to'rt ustunning sakkiz belgisi o'zaro qanday bog'lanishidan o'qiladi.",
              "Turmush o'rtog'i pozitsiyasini o'qish an'anaviy myeongri qoidasidan olingan, jinsingizni ko'rsatmasangiz bu pozitsiya o'qilmaydi."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gi-chuk": {
    "eyebrow": "Kun ustunlari",
    "title": "Kun ustuni 己丑",
    "summary": "Kun ustuni 己丑 Saju-Link hisoblash qoidalariga ko'ra qanday o'qiladi: kun branchi ushlab turgan stemlarning day stemga nisbatan nima ekanligi — qoidalardagi tartibda aynan shunday keltirilgan.",
    "backLabel": "Hisoblash asosi",
    "sections": [
      {
        "title": "己丑 — oltmishlik siklda kun ustuni raqami: 26",
        "blocks": [
          {
            "p": "Tug'ilgan kunning stem-branchi 己丑 bo'lsa, day stem — 己 (Tuproq, Yin), kun branchi — 丑 (Sigir). Oltmishlik siklda bu kombinatsiya raqami: 26."
          },
          {
            "p": "Saju-Link day stemi 己 bo'lgan insonni \"Yin Tuproq (己)\" deb ataydi va natija ekrani ko'rsatadigan satr: “Ekin tuprog'i. Nima kelsa qabul qilib o'stiradi, ko'z-ko'z qilishdan ko'ra parvarishga yaqin.” Bu satrning quyidagi o'qish yoki ballar bilan aloqasi yo'q."
          }
        ]
      },
      {
        "title": "Kun branchi 丑 ushlab turgan stemlarning day stemga nisbatan nima ekanligi",
        "blocks": [
          {
            "p": "Kun branchi — turmush o'rtog'i pozitsiyasi. Day stem 己 nuqtai nazaridan o'qilganda, branch 丑 ushlab turgan stemlar quyidagicha. Asosiy stem (己) — branchning vakillik energiyasi."
          },
          {
            "table": {
              "caption": "Kun branchi 己丑: hidden stems",
              "head": [
                "Hidden stem",
                "Pozitsiya",
                "Ulush",
                "Day stem 己 uchun"
              ],
              "rows": [
                [
                  "Yin Suv (癸)",
                  "qoldiq (餘氣)",
                  "{hidChukYeo}",
                  "Kutilmagan boylik (偏財)"
                ],
                [
                  "Yin Metall (辛)",
                  "o'rta (中氣)",
                  "{hidChukJung}",
                  "Ifoda (食神)"
                ],
                [
                  "Yin Tuproq (己)",
                  "asosiy (本氣)",
                  "{hidChukBon}",
                  "Hamroh (比肩)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Turmush o'rtog'i pozitsiyasi va bu kun ustuni",
        "blocks": [
          {
            "p": "An'anaviy myeongri turmush o'rtog'i pozitsiyasini erkaklar uchun Barqaror boylik (正財), ayollar uchun Nufuz (正官) deb o'qiydi. Day stem 己 bo'lganda, Barqaror boylik — 壬, Nufuz — 甲."
          },
          {
            "p": "Erkaklar uchun turmush o'rtog'i pozitsiyasi (Barqaror boylik) — 壬. 壬 丑 ichida saqlanmaydi."
          },
          {
            "p": "Ayollar uchun turmush o'rtog'i pozitsiyasi (Nufuz) — 甲. 甲 丑 ichida saqlanmaydi."
          }
        ]
      },
      {
        "title": "Qo'shni kun ustunlari va ular tarkibidagi belgilar",
        "blocks": [
          {
            "p": "Oltmishlik siklda oldingi kun ustuni — [戊子](/guide/pillar-mu-ja), keyingisi — [庚寅](/guide/pillar-gyeong-in)."
          },
          {
            "p": "Tarkibi: [Yin Tuproq (己)](/guide/stem-gi) va [丑 (Sigir)](/guide/branch-chuk)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bu qo'llanma nimani aytmaydi",
        "blocks": [
          {
            "ul": [
              "Bitta kun ustuni insonni yoki munosabatni belgilab bermaydi. Saju to'rt ustunning sakkiz belgisi o'zaro qanday bog'lanishidan o'qiladi.",
              "Turmush o'rtog'i pozitsiyasini o'qish an'anaviy myeongri qoidasidan olingan, jinsingizni ko'rsatmasangiz bu pozitsiya o'qilmaydi."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gyeong-in": {
    "eyebrow": "Kun ustunlari",
    "title": "Kun ustuni 庚寅",
    "summary": "Kun ustuni 庚寅 Saju-Link hisoblash qoidalariga ko'ra qanday o'qiladi: kun branchi ushlab turgan stemlarning day stemga nisbatan nima ekanligi — qoidalardagi tartibda aynan shunday keltirilgan.",
    "backLabel": "Hisoblash asosi",
    "sections": [
      {
        "title": "庚寅 — oltmishlik siklda kun ustuni raqami: 27",
        "blocks": [
          {
            "p": "Tug'ilgan kunning stem-branchi 庚寅 bo'lsa, day stem — 庚 (Metall, Yang), kun branchi — 寅 (Yo'lbars). Oltmishlik siklda bu kombinatsiya raqami: 27."
          },
          {
            "p": "Saju-Link day stemi 庚 bo'lgan insonni \"Yang Metall (庚)\" deb ataydi va natija ekrani ko'rsatadigan satr: “Ishlov ko'rmagan temir. Qat'iy va aniq, osilib qolgan ishlarga sabri yo'q.” Bu satrning quyidagi o'qish yoki ballar bilan aloqasi yo'q."
          }
        ]
      },
      {
        "title": "Kun branchi 寅 ushlab turgan stemlarning day stemga nisbatan nima ekanligi",
        "blocks": [
          {
            "p": "Kun branchi — turmush o'rtog'i pozitsiyasi. Day stem 庚 nuqtai nazaridan o'qilganda, branch 寅 ushlab turgan stemlar quyidagicha. Asosiy stem (甲) — branchning vakillik energiyasi."
          },
          {
            "table": {
              "caption": "Kun branchi 庚寅: hidden stems",
              "head": [
                "Hidden stem",
                "Pozitsiya",
                "Ulush",
                "Day stem 庚 uchun"
              ],
              "rows": [
                [
                  "Yang Tuproq (戊)",
                  "qoldiq (餘氣)",
                  "{hidInYeo}",
                  "Noodatiy tayanch (偏印)"
                ],
                [
                  "Yang Olov (丙)",
                  "o'rta (中氣)",
                  "{hidInJung}",
                  "Sinovchi (偏官)"
                ],
                [
                  "Yang Yog'och (甲)",
                  "asosiy (本氣)",
                  "{hidInBon}",
                  "Kutilmagan boylik (偏財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Turmush o'rtog'i pozitsiyasi va bu kun ustuni",
        "blocks": [
          {
            "p": "An'anaviy myeongri turmush o'rtog'i pozitsiyasini erkaklar uchun Barqaror boylik (正財), ayollar uchun Nufuz (正官) deb o'qiydi. Day stem 庚 bo'lganda, Barqaror boylik — 乙, Nufuz — 丁."
          },
          {
            "p": "Erkaklar uchun turmush o'rtog'i pozitsiyasi (Barqaror boylik) — 乙. 乙 寅 ichida saqlanmaydi."
          },
          {
            "p": "Ayollar uchun turmush o'rtog'i pozitsiyasi (Nufuz) — 丁. 丁 寅 ichida saqlanmaydi."
          }
        ]
      },
      {
        "title": "Qo'shni kun ustunlari va ular tarkibidagi belgilar",
        "blocks": [
          {
            "p": "Oltmishlik siklda oldingi kun ustuni — [己丑](/guide/pillar-gi-chuk), keyingisi — [辛卯](/guide/pillar-sin-myo)."
          },
          {
            "p": "Tarkibi: [Yang Metall (庚)](/guide/stem-gyeong) va [寅 (Yo'lbars)](/guide/branch-in)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bu qo'llanma nimani aytmaydi",
        "blocks": [
          {
            "ul": [
              "Bitta kun ustuni insonni yoki munosabatni belgilab bermaydi. Saju to'rt ustunning sakkiz belgisi o'zaro qanday bog'lanishidan o'qiladi.",
              "Turmush o'rtog'i pozitsiyasini o'qish an'anaviy myeongri qoidasidan olingan, jinsingizni ko'rsatmasangiz bu pozitsiya o'qilmaydi."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-sin-myo": {
    "eyebrow": "Kun ustunlari",
    "title": "Kun ustuni 辛卯",
    "summary": "Kun ustuni 辛卯 Saju-Link hisoblash qoidalariga ko'ra qanday o'qiladi: kun branchi ushlab turgan stemlarning day stemga nisbatan nima ekanligi — qoidalardagi tartibda aynan shunday keltirilgan.",
    "backLabel": "Hisoblash asosi",
    "sections": [
      {
        "title": "辛卯 — oltmishlik siklda kun ustuni raqami: 28",
        "blocks": [
          {
            "p": "Tug'ilgan kunning stem-branchi 辛卯 bo'lsa, day stem — 辛 (Metall, Yin), kun branchi — 卯 (Quyon). Oltmishlik siklda bu kombinatsiya raqami: 28."
          },
          {
            "p": "Saju-Link day stemi 辛 bo'lgan insonni \"Yin Metall (辛)\" deb ataydi va natija ekrani ko'rsatadigan satr: “Sayqallangan qimmatbaho tosh. Nozik did va yuqori talab; uvol qilingan ishni e'tiborsiz qoldirmaydi.” Bu satrning quyidagi o'qish yoki ballar bilan aloqasi yo'q."
          }
        ]
      },
      {
        "title": "Kun branchi 卯 ushlab turgan stemlarning day stemga nisbatan nima ekanligi",
        "blocks": [
          {
            "p": "Kun branchi — turmush o'rtog'i pozitsiyasi. Day stem 辛 nuqtai nazaridan o'qilganda, branch 卯 ushlab turgan stemlar quyidagicha. Asosiy stem (乙) — branchning vakillik energiyasi."
          },
          {
            "table": {
              "caption": "Kun branchi 辛卯: hidden stems",
              "head": [
                "Hidden stem",
                "Pozitsiya",
                "Ulush",
                "Day stem 辛 uchun"
              ],
              "rows": [
                [
                  "Yang Yog'och (甲)",
                  "qoldiq (餘氣)",
                  "{hidMyoYeo}",
                  "Barqaror boylik (正財)"
                ],
                [
                  "Yin Yog'och (乙)",
                  "asosiy (本氣)",
                  "{hidMyoBon}",
                  "Kutilmagan boylik (偏財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Turmush o'rtog'i pozitsiyasi va bu kun ustuni",
        "blocks": [
          {
            "p": "An'anaviy myeongri turmush o'rtog'i pozitsiyasini erkaklar uchun Barqaror boylik (正財), ayollar uchun Nufuz (正官) deb o'qiydi. Day stem 辛 bo'lganda, Barqaror boylik — 甲, Nufuz — 丙."
          },
          {
            "p": "Erkaklar uchun turmush o'rtog'i pozitsiyasi (Barqaror boylik) — 甲. 甲 卯 ichida saqlanadi (qoldiq (餘氣))."
          },
          {
            "p": "Ayollar uchun turmush o'rtog'i pozitsiyasi (Nufuz) — 丙. 丙 卯 ichida saqlanmaydi."
          }
        ]
      },
      {
        "title": "Qo'shni kun ustunlari va ular tarkibidagi belgilar",
        "blocks": [
          {
            "p": "Oltmishlik siklda oldingi kun ustuni — [庚寅](/guide/pillar-gyeong-in), keyingisi — [壬辰](/guide/pillar-im-jin)."
          },
          {
            "p": "Tarkibi: [Yin Metall (辛)](/guide/stem-sin) va [卯 (Quyon)](/guide/branch-myo)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bu qo'llanma nimani aytmaydi",
        "blocks": [
          {
            "ul": [
              "Bitta kun ustuni insonni yoki munosabatni belgilab bermaydi. Saju to'rt ustunning sakkiz belgisi o'zaro qanday bog'lanishidan o'qiladi.",
              "Turmush o'rtog'i pozitsiyasini o'qish an'anaviy myeongri qoidasidan olingan, jinsingizni ko'rsatmasangiz bu pozitsiya o'qilmaydi."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-im-jin": {
    "eyebrow": "Kun ustunlari",
    "title": "Kun ustuni 壬辰",
    "summary": "Kun ustuni 壬辰 Saju-Link hisoblash qoidalariga ko'ra qanday o'qiladi: kun branchi ushlab turgan stemlarning day stemga nisbatan nima ekanligi — qoidalardagi tartibda aynan shunday keltirilgan.",
    "backLabel": "Hisoblash asosi",
    "sections": [
      {
        "title": "壬辰 — oltmishlik siklda kun ustuni raqami: 29",
        "blocks": [
          {
            "p": "Tug'ilgan kunning stem-branchi 壬辰 bo'lsa, day stem — 壬 (Suv, Yang), kun branchi — 辰 (Ajdar). Oltmishlik siklda bu kombinatsiya raqami: 29."
          },
          {
            "p": "Saju-Link day stemi 壬 bo'lgan insonni \"Yang Suv (壬)\" deb ataydi va natija ekrani ko'rsatadigan satr: “Daryo va dengiz. Qarashi keng, narsalarning qay tomonga oqayotganini ilg'aydi.” Bu satrning quyidagi o'qish yoki ballar bilan aloqasi yo'q."
          }
        ]
      },
      {
        "title": "Kun branchi 辰 ushlab turgan stemlarning day stemga nisbatan nima ekanligi",
        "blocks": [
          {
            "p": "Kun branchi — turmush o'rtog'i pozitsiyasi. Day stem 壬 nuqtai nazaridan o'qilganda, branch 辰 ushlab turgan stemlar quyidagicha. Asosiy stem (戊) — branchning vakillik energiyasi."
          },
          {
            "table": {
              "caption": "Kun branchi 壬辰: hidden stems",
              "head": [
                "Hidden stem",
                "Pozitsiya",
                "Ulush",
                "Day stem 壬 uchun"
              ],
              "rows": [
                [
                  "Yin Yog'och (乙)",
                  "qoldiq (餘氣)",
                  "{hidJinYeo}",
                  "Buzuvchi (傷官)"
                ],
                [
                  "Yin Suv (癸)",
                  "o'rta (中氣)",
                  "{hidJinJung}",
                  "Raqib (劫財)"
                ],
                [
                  "Yang Tuproq (戊)",
                  "asosiy (本氣)",
                  "{hidJinBon}",
                  "Sinovchi (偏官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Turmush o'rtog'i pozitsiyasi va bu kun ustuni",
        "blocks": [
          {
            "p": "An'anaviy myeongri turmush o'rtog'i pozitsiyasini erkaklar uchun Barqaror boylik (正財), ayollar uchun Nufuz (正官) deb o'qiydi. Day stem 壬 bo'lganda, Barqaror boylik — 丁, Nufuz — 己."
          },
          {
            "p": "Erkaklar uchun turmush o'rtog'i pozitsiyasi (Barqaror boylik) — 丁. 丁 辰 ichida saqlanmaydi."
          },
          {
            "p": "Ayollar uchun turmush o'rtog'i pozitsiyasi (Nufuz) — 己. 己 辰 ichida saqlanmaydi."
          }
        ]
      },
      {
        "title": "Qo'shni kun ustunlari va ular tarkibidagi belgilar",
        "blocks": [
          {
            "p": "Oltmishlik siklda oldingi kun ustuni — [辛卯](/guide/pillar-sin-myo), keyingisi — [癸巳](/guide/pillar-gye-sa)."
          },
          {
            "p": "Tarkibi: [Yang Suv (壬)](/guide/stem-im) va [辰 (Ajdar)](/guide/branch-jin)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bu qo'llanma nimani aytmaydi",
        "blocks": [
          {
            "ul": [
              "Bitta kun ustuni insonni yoki munosabatni belgilab bermaydi. Saju to'rt ustunning sakkiz belgisi o'zaro qanday bog'lanishidan o'qiladi.",
              "Turmush o'rtog'i pozitsiyasini o'qish an'anaviy myeongri qoidasidan olingan, jinsingizni ko'rsatmasangiz bu pozitsiya o'qilmaydi."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gye-sa": {
    "eyebrow": "Kun ustunlari",
    "title": "Kun ustuni 癸巳",
    "summary": "Kun ustuni 癸巳 Saju-Link hisoblash qoidalariga ko'ra qanday o'qiladi: kun branchi ushlab turgan stemlarning day stemga nisbatan nima ekanligi — qoidalardagi tartibda aynan shunday keltirilgan.",
    "backLabel": "Hisoblash asosi",
    "sections": [
      {
        "title": "癸巳 — oltmishlik siklda kun ustuni raqami: 30",
        "blocks": [
          {
            "p": "Tug'ilgan kunning stem-branchi 癸巳 bo'lsa, day stem — 癸 (Suv, Yin), kun branchi — 巳 (Ilon). Oltmishlik siklda bu kombinatsiya raqami: 30."
          },
          {
            "p": "Saju-Link day stemi 癸 bo'lgan insonni \"Yin Suv (癸)\" deb ataydi va natija ekrani ko'rsatadigan satr: “Shabnam va yomg'ir. Sokin singib boradi, so'zdan oldin kayfiyatni o'qiydi.” Bu satrning quyidagi o'qish yoki ballar bilan aloqasi yo'q."
          }
        ]
      },
      {
        "title": "Kun branchi 巳 ushlab turgan stemlarning day stemga nisbatan nima ekanligi",
        "blocks": [
          {
            "p": "Kun branchi — turmush o'rtog'i pozitsiyasi. Day stem 癸 nuqtai nazaridan o'qilganda, branch 巳 ushlab turgan stemlar quyidagicha. Asosiy stem (丙) — branchning vakillik energiyasi."
          },
          {
            "table": {
              "caption": "Kun branchi 癸巳: hidden stems",
              "head": [
                "Hidden stem",
                "Pozitsiya",
                "Ulush",
                "Day stem 癸 uchun"
              ],
              "rows": [
                [
                  "Yang Tuproq (戊)",
                  "qoldiq (餘氣)",
                  "{hidSaYeo}",
                  "Nufuz (正官)"
                ],
                [
                  "Yang Metall (庚)",
                  "o'rta (中氣)",
                  "{hidSaJung}",
                  "G'amxo'rlik (正印)"
                ],
                [
                  "Yang Olov (丙)",
                  "asosiy (本氣)",
                  "{hidSaBon}",
                  "Barqaror boylik (正財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Turmush o'rtog'i pozitsiyasi va bu kun ustuni",
        "blocks": [
          {
            "p": "An'anaviy myeongri turmush o'rtog'i pozitsiyasini erkaklar uchun Barqaror boylik (正財), ayollar uchun Nufuz (正官) deb o'qiydi. Day stem 癸 bo'lganda, Barqaror boylik — 丙, Nufuz — 戊."
          },
          {
            "p": "Erkaklar uchun turmush o'rtog'i pozitsiyasi (Barqaror boylik) — 丙. 丙 巳 ichida saqlanadi (asosiy (本氣))."
          },
          {
            "p": "Ayollar uchun turmush o'rtog'i pozitsiyasi (Nufuz) — 戊. 戊 巳 ichida saqlanadi (qoldiq (餘氣))."
          }
        ]
      },
      {
        "title": "Qo'shni kun ustunlari va ular tarkibidagi belgilar",
        "blocks": [
          {
            "p": "Oltmishlik siklda oldingi kun ustuni — [壬辰](/guide/pillar-im-jin), keyingisi — [甲午](/guide/pillar-gap-o)."
          },
          {
            "p": "Tarkibi: [Yin Suv (癸)](/guide/stem-gye) va [巳 (Ilon)](/guide/branch-sa)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bu qo'llanma nimani aytmaydi",
        "blocks": [
          {
            "ul": [
              "Bitta kun ustuni insonni yoki munosabatni belgilab bermaydi. Saju to'rt ustunning sakkiz belgisi o'zaro qanday bog'lanishidan o'qiladi.",
              "Turmush o'rtog'i pozitsiyasini o'qish an'anaviy myeongri qoidasidan olingan, jinsingizni ko'rsatmasangiz bu pozitsiya o'qilmaydi."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gap-o": {
    "eyebrow": "Kun ustunlari",
    "title": "Kun ustuni 甲午",
    "summary": "Kun ustuni 甲午 Saju-Link hisoblash qoidalariga ko'ra qanday o'qiladi: kun branchi ushlab turgan stemlarning day stemga nisbatan nima ekanligi — qoidalardagi tartibda aynan shunday keltirilgan.",
    "backLabel": "Hisoblash asosi",
    "sections": [
      {
        "title": "甲午 — oltmishlik siklda kun ustuni raqami: 31",
        "blocks": [
          {
            "p": "Tug'ilgan kunning stem-branchi 甲午 bo'lsa, day stem — 甲 (Yog'och, Yang), kun branchi — 午 (Ot). Oltmishlik siklda bu kombinatsiya raqami: 31."
          },
          {
            "p": "Saju-Link day stemi 甲 bo'lgan insonni \"Yang Yog'och (甲)\" deb ataydi va natija ekrani ko'rsatadigan satr: “Tik o'sadigan baland daraxt. Yo'nalish belgilangach chayqalmaydi va egilishdan ko'ra chidashni tanlaydi.” Bu satrning quyidagi o'qish yoki ballar bilan aloqasi yo'q."
          }
        ]
      },
      {
        "title": "Kun branchi 午 ushlab turgan stemlarning day stemga nisbatan nima ekanligi",
        "blocks": [
          {
            "p": "Kun branchi — turmush o'rtog'i pozitsiyasi. Day stem 甲 nuqtai nazaridan o'qilganda, branch 午 ushlab turgan stemlar quyidagicha. Asosiy stem (丁) — branchning vakillik energiyasi."
          },
          {
            "table": {
              "caption": "Kun branchi 甲午: hidden stems",
              "head": [
                "Hidden stem",
                "Pozitsiya",
                "Ulush",
                "Day stem 甲 uchun"
              ],
              "rows": [
                [
                  "Yang Olov (丙)",
                  "qoldiq (餘氣)",
                  "{hidOYeo}",
                  "Ifoda (食神)"
                ],
                [
                  "Yin Tuproq (己)",
                  "o'rta (中氣)",
                  "{hidOJung}",
                  "Barqaror boylik (正財)"
                ],
                [
                  "Yin Olov (丁)",
                  "asosiy (本氣)",
                  "{hidOBon}",
                  "Buzuvchi (傷官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Turmush o'rtog'i pozitsiyasi va bu kun ustuni",
        "blocks": [
          {
            "p": "An'anaviy myeongri turmush o'rtog'i pozitsiyasini erkaklar uchun Barqaror boylik (正財), ayollar uchun Nufuz (正官) deb o'qiydi. Day stem 甲 bo'lganda, Barqaror boylik — 己, Nufuz — 辛."
          },
          {
            "p": "Erkaklar uchun turmush o'rtog'i pozitsiyasi (Barqaror boylik) — 己. 己 午 ichida saqlanadi (o'rta (中氣))."
          },
          {
            "p": "Ayollar uchun turmush o'rtog'i pozitsiyasi (Nufuz) — 辛. 辛 午 ichida saqlanmaydi."
          }
        ]
      },
      {
        "title": "Qo'shni kun ustunlari va ular tarkibidagi belgilar",
        "blocks": [
          {
            "p": "Oltmishlik siklda oldingi kun ustuni — [癸巳](/guide/pillar-gye-sa), keyingisi — [乙未](/guide/pillar-eul-mi)."
          },
          {
            "p": "Tarkibi: [Yang Yog'och (甲)](/guide/stem-gap) va [午 (Ot)](/guide/branch-o)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bu qo'llanma nimani aytmaydi",
        "blocks": [
          {
            "ul": [
              "Bitta kun ustuni insonni yoki munosabatni belgilab bermaydi. Saju to'rt ustunning sakkiz belgisi o'zaro qanday bog'lanishidan o'qiladi.",
              "Turmush o'rtog'i pozitsiyasini o'qish an'anaviy myeongri qoidasidan olingan, jinsingizni ko'rsatmasangiz bu pozitsiya o'qilmaydi."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-eul-mi": {
    "eyebrow": "Kun ustunlari",
    "title": "Kun ustuni 乙未",
    "summary": "Kun ustuni 乙未 Saju-Link hisoblash qoidalariga ko'ra qanday o'qiladi: kun branchi ushlab turgan stemlarning day stemga nisbatan nima ekanligi — qoidalardagi tartibda aynan shunday keltirilgan.",
    "backLabel": "Hisoblash asosi",
    "sections": [
      {
        "title": "乙未 — oltmishlik siklda kun ustuni raqami: 32",
        "blocks": [
          {
            "p": "Tug'ilgan kunning stem-branchi 乙未 bo'lsa, day stem — 乙 (Yog'och, Yin), kun branchi — 未 (Qo'y). Oltmishlik siklda bu kombinatsiya raqami: 32."
          },
          {
            "p": "Saju-Link day stemi 乙 bo'lgan insonni \"Yin Yog'och (乙)\" deb ataydi va natija ekrani ko'rsatadigan satr: “Chirmovuq kabi egiluvchan o't. Sharoitga qarab egiladi-yu, oldinga yuraveradi va uzilmaydi.” Bu satrning quyidagi o'qish yoki ballar bilan aloqasi yo'q."
          }
        ]
      },
      {
        "title": "Kun branchi 未 ushlab turgan stemlarning day stemga nisbatan nima ekanligi",
        "blocks": [
          {
            "p": "Kun branchi — turmush o'rtog'i pozitsiyasi. Day stem 乙 nuqtai nazaridan o'qilganda, branch 未 ushlab turgan stemlar quyidagicha. Asosiy stem (己) — branchning vakillik energiyasi."
          },
          {
            "table": {
              "caption": "Kun branchi 乙未: hidden stems",
              "head": [
                "Hidden stem",
                "Pozitsiya",
                "Ulush",
                "Day stem 乙 uchun"
              ],
              "rows": [
                [
                  "Yin Olov (丁)",
                  "qoldiq (餘氣)",
                  "{hidMiYeo}",
                  "Ifoda (食神)"
                ],
                [
                  "Yin Yog'och (乙)",
                  "o'rta (中氣)",
                  "{hidMiJung}",
                  "Hamroh (比肩)"
                ],
                [
                  "Yin Tuproq (己)",
                  "asosiy (本氣)",
                  "{hidMiBon}",
                  "Kutilmagan boylik (偏財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Turmush o'rtog'i pozitsiyasi va bu kun ustuni",
        "blocks": [
          {
            "p": "An'anaviy myeongri turmush o'rtog'i pozitsiyasini erkaklar uchun Barqaror boylik (正財), ayollar uchun Nufuz (正官) deb o'qiydi. Day stem 乙 bo'lganda, Barqaror boylik — 戊, Nufuz — 庚."
          },
          {
            "p": "Erkaklar uchun turmush o'rtog'i pozitsiyasi (Barqaror boylik) — 戊. 戊 未 ichida saqlanmaydi."
          },
          {
            "p": "Ayollar uchun turmush o'rtog'i pozitsiyasi (Nufuz) — 庚. 庚 未 ichida saqlanmaydi."
          }
        ]
      },
      {
        "title": "Qo'shni kun ustunlari va ular tarkibidagi belgilar",
        "blocks": [
          {
            "p": "Oltmishlik siklda oldingi kun ustuni — [甲午](/guide/pillar-gap-o), keyingisi — [丙申](/guide/pillar-byeong-sin)."
          },
          {
            "p": "Tarkibi: [Yin Yog'och (乙)](/guide/stem-eul) va [未 (Qo'y)](/guide/branch-mi)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bu qo'llanma nimani aytmaydi",
        "blocks": [
          {
            "ul": [
              "Bitta kun ustuni insonni yoki munosabatni belgilab bermaydi. Saju to'rt ustunning sakkiz belgisi o'zaro qanday bog'lanishidan o'qiladi.",
              "Turmush o'rtog'i pozitsiyasini o'qish an'anaviy myeongri qoidasidan olingan, jinsingizni ko'rsatmasangiz bu pozitsiya o'qilmaydi."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-byeong-sin": {
    "eyebrow": "Kun ustunlari",
    "title": "Kun ustuni 丙申",
    "summary": "Kun ustuni 丙申 Saju-Link hisoblash qoidalariga ko'ra qanday o'qiladi: kun branchi ushlab turgan stemlarning day stemga nisbatan nima ekanligi — qoidalardagi tartibda aynan shunday keltirilgan.",
    "backLabel": "Hisoblash asosi",
    "sections": [
      {
        "title": "丙申 — oltmishlik siklda kun ustuni raqami: 33",
        "blocks": [
          {
            "p": "Tug'ilgan kunning stem-branchi 丙申 bo'lsa, day stem — 丙 (Olov, Yang), kun branchi — 申 (Maymun). Oltmishlik siklda bu kombinatsiya raqami: 33."
          },
          {
            "p": "Saju-Link day stemi 丙 bo'lgan insonni \"Yang Olov (丙)\" deb ataydi va natija ekrani ko'rsatadigan satr: “Tush paytidagi quyosh. Hissiyot ochiq ko'rinadi, atrof yorishadi, oldinga chiqish tabiiy keladi.” Bu satrning quyidagi o'qish yoki ballar bilan aloqasi yo'q."
          }
        ]
      },
      {
        "title": "Kun branchi 申 ushlab turgan stemlarning day stemga nisbatan nima ekanligi",
        "blocks": [
          {
            "p": "Kun branchi — turmush o'rtog'i pozitsiyasi. Day stem 丙 nuqtai nazaridan o'qilganda, branch 申 ushlab turgan stemlar quyidagicha. Asosiy stem (庚) — branchning vakillik energiyasi."
          },
          {
            "table": {
              "caption": "Kun branchi 丙申: hidden stems",
              "head": [
                "Hidden stem",
                "Pozitsiya",
                "Ulush",
                "Day stem 丙 uchun"
              ],
              "rows": [
                [
                  "Yang Tuproq (戊)",
                  "qoldiq (餘氣)",
                  "{hidSinYeo}",
                  "Ifoda (食神)"
                ],
                [
                  "Yang Suv (壬)",
                  "o'rta (中氣)",
                  "{hidSinJung}",
                  "Sinovchi (偏官)"
                ],
                [
                  "Yang Metall (庚)",
                  "asosiy (本氣)",
                  "{hidSinBon}",
                  "Kutilmagan boylik (偏財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Turmush o'rtog'i pozitsiyasi va bu kun ustuni",
        "blocks": [
          {
            "p": "An'anaviy myeongri turmush o'rtog'i pozitsiyasini erkaklar uchun Barqaror boylik (正財), ayollar uchun Nufuz (正官) deb o'qiydi. Day stem 丙 bo'lganda, Barqaror boylik — 辛, Nufuz — 癸."
          },
          {
            "p": "Erkaklar uchun turmush o'rtog'i pozitsiyasi (Barqaror boylik) — 辛. 辛 申 ichida saqlanmaydi."
          },
          {
            "p": "Ayollar uchun turmush o'rtog'i pozitsiyasi (Nufuz) — 癸. 癸 申 ichida saqlanmaydi."
          }
        ]
      },
      {
        "title": "Qo'shni kun ustunlari va ular tarkibidagi belgilar",
        "blocks": [
          {
            "p": "Oltmishlik siklda oldingi kun ustuni — [乙未](/guide/pillar-eul-mi), keyingisi — [丁酉](/guide/pillar-jeong-yu)."
          },
          {
            "p": "Tarkibi: [Yang Olov (丙)](/guide/stem-byeong) va [申 (Maymun)](/guide/branch-sin)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bu qo'llanma nimani aytmaydi",
        "blocks": [
          {
            "ul": [
              "Bitta kun ustuni insonni yoki munosabatni belgilab bermaydi. Saju to'rt ustunning sakkiz belgisi o'zaro qanday bog'lanishidan o'qiladi.",
              "Turmush o'rtog'i pozitsiyasini o'qish an'anaviy myeongri qoidasidan olingan, jinsingizni ko'rsatmasangiz bu pozitsiya o'qilmaydi."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-jeong-yu": {
    "eyebrow": "Kun ustunlari",
    "title": "Kun ustuni 丁酉",
    "summary": "Kun ustuni 丁酉 Saju-Link hisoblash qoidalariga ko'ra qanday o'qiladi: kun branchi ushlab turgan stemlarning day stemga nisbatan nima ekanligi — qoidalardagi tartibda aynan shunday keltirilgan.",
    "backLabel": "Hisoblash asosi",
    "sections": [
      {
        "title": "丁酉 — oltmishlik siklda kun ustuni raqami: 34",
        "blocks": [
          {
            "p": "Tug'ilgan kunning stem-branchi 丁酉 bo'lsa, day stem — 丁 (Olov, Yin), kun branchi — 酉 (Xo'roz). Oltmishlik siklda bu kombinatsiya raqami: 34."
          },
          {
            "p": "Saju-Link day stemi 丁 bo'lgan insonni \"Yin Olov (丁)\" deb ataydi va natija ekrani ko'rsatadigan satr: “Sham va chiroq yorug'i. Sokin va uzoq yonadi, avvalo eng yaqinlarini isitadi.” Bu satrning quyidagi o'qish yoki ballar bilan aloqasi yo'q."
          }
        ]
      },
      {
        "title": "Kun branchi 酉 ushlab turgan stemlarning day stemga nisbatan nima ekanligi",
        "blocks": [
          {
            "p": "Kun branchi — turmush o'rtog'i pozitsiyasi. Day stem 丁 nuqtai nazaridan o'qilganda, branch 酉 ushlab turgan stemlar quyidagicha. Asosiy stem (辛) — branchning vakillik energiyasi."
          },
          {
            "table": {
              "caption": "Kun branchi 丁酉: hidden stems",
              "head": [
                "Hidden stem",
                "Pozitsiya",
                "Ulush",
                "Day stem 丁 uchun"
              ],
              "rows": [
                [
                  "Yang Metall (庚)",
                  "qoldiq (餘氣)",
                  "{hidYuYeo}",
                  "Barqaror boylik (正財)"
                ],
                [
                  "Yin Metall (辛)",
                  "asosiy (本氣)",
                  "{hidYuBon}",
                  "Kutilmagan boylik (偏財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Turmush o'rtog'i pozitsiyasi va bu kun ustuni",
        "blocks": [
          {
            "p": "An'anaviy myeongri turmush o'rtog'i pozitsiyasini erkaklar uchun Barqaror boylik (正財), ayollar uchun Nufuz (正官) deb o'qiydi. Day stem 丁 bo'lganda, Barqaror boylik — 庚, Nufuz — 壬."
          },
          {
            "p": "Erkaklar uchun turmush o'rtog'i pozitsiyasi (Barqaror boylik) — 庚. 庚 酉 ichida saqlanadi (qoldiq (餘氣))."
          },
          {
            "p": "Ayollar uchun turmush o'rtog'i pozitsiyasi (Nufuz) — 壬. 壬 酉 ichida saqlanmaydi."
          }
        ]
      },
      {
        "title": "Qo'shni kun ustunlari va ular tarkibidagi belgilar",
        "blocks": [
          {
            "p": "Oltmishlik siklda oldingi kun ustuni — [丙申](/guide/pillar-byeong-sin), keyingisi — [戊戌](/guide/pillar-mu-sul)."
          },
          {
            "p": "Tarkibi: [Yin Olov (丁)](/guide/stem-jeong) va [酉 (Xo'roz)](/guide/branch-yu)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bu qo'llanma nimani aytmaydi",
        "blocks": [
          {
            "ul": [
              "Bitta kun ustuni insonni yoki munosabatni belgilab bermaydi. Saju to'rt ustunning sakkiz belgisi o'zaro qanday bog'lanishidan o'qiladi.",
              "Turmush o'rtog'i pozitsiyasini o'qish an'anaviy myeongri qoidasidan olingan, jinsingizni ko'rsatmasangiz bu pozitsiya o'qilmaydi."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-mu-sul": {
    "eyebrow": "Kun ustunlari",
    "title": "Kun ustuni 戊戌",
    "summary": "Kun ustuni 戊戌 Saju-Link hisoblash qoidalariga ko'ra qanday o'qiladi: kun branchi ushlab turgan stemlarning day stemga nisbatan nima ekanligi — qoidalardagi tartibda aynan shunday keltirilgan.",
    "backLabel": "Hisoblash asosi",
    "sections": [
      {
        "title": "戊戌 — oltmishlik siklda kun ustuni raqami: 35",
        "blocks": [
          {
            "p": "Tug'ilgan kunning stem-branchi 戊戌 bo'lsa, day stem — 戊 (Tuproq, Yang), kun branchi — 戌 (It). Oltmishlik siklda bu kombinatsiya raqami: 35."
          },
          {
            "p": "Saju-Link day stemi 戊 bo'lgan insonni \"Yang Tuproq (戊)\" deb ataydi va natija ekrani ko'rsatadigan satr: “Keng dala va tog'. Silkitish qiyin, suyanish oson, ammo qabul qilingan qarorni o'zgartirishga shoshmaydi.” Bu satrning quyidagi o'qish yoki ballar bilan aloqasi yo'q."
          }
        ]
      },
      {
        "title": "Kun branchi 戌 ushlab turgan stemlarning day stemga nisbatan nima ekanligi",
        "blocks": [
          {
            "p": "Kun branchi — turmush o'rtog'i pozitsiyasi. Day stem 戊 nuqtai nazaridan o'qilganda, branch 戌 ushlab turgan stemlar quyidagicha. Asosiy stem (戊) — branchning vakillik energiyasi."
          },
          {
            "table": {
              "caption": "Kun branchi 戊戌: hidden stems",
              "head": [
                "Hidden stem",
                "Pozitsiya",
                "Ulush",
                "Day stem 戊 uchun"
              ],
              "rows": [
                [
                  "Yin Metall (辛)",
                  "qoldiq (餘氣)",
                  "{hidSulYeo}",
                  "Buzuvchi (傷官)"
                ],
                [
                  "Yin Olov (丁)",
                  "o'rta (中氣)",
                  "{hidSulJung}",
                  "G'amxo'rlik (正印)"
                ],
                [
                  "Yang Tuproq (戊)",
                  "asosiy (本氣)",
                  "{hidSulBon}",
                  "Hamroh (比肩)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Turmush o'rtog'i pozitsiyasi va bu kun ustuni",
        "blocks": [
          {
            "p": "An'anaviy myeongri turmush o'rtog'i pozitsiyasini erkaklar uchun Barqaror boylik (正財), ayollar uchun Nufuz (正官) deb o'qiydi. Day stem 戊 bo'lganda, Barqaror boylik — 癸, Nufuz — 乙."
          },
          {
            "p": "Erkaklar uchun turmush o'rtog'i pozitsiyasi (Barqaror boylik) — 癸. 癸 戌 ichida saqlanmaydi."
          },
          {
            "p": "Ayollar uchun turmush o'rtog'i pozitsiyasi (Nufuz) — 乙. 乙 戌 ichida saqlanmaydi."
          }
        ]
      },
      {
        "title": "Qo'shni kun ustunlari va ular tarkibidagi belgilar",
        "blocks": [
          {
            "p": "Oltmishlik siklda oldingi kun ustuni — [丁酉](/guide/pillar-jeong-yu), keyingisi — [己亥](/guide/pillar-gi-hae)."
          },
          {
            "p": "Tarkibi: [Yang Tuproq (戊)](/guide/stem-mu) va [戌 (It)](/guide/branch-sul)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bu qo'llanma nimani aytmaydi",
        "blocks": [
          {
            "ul": [
              "Bitta kun ustuni insonni yoki munosabatni belgilab bermaydi. Saju to'rt ustunning sakkiz belgisi o'zaro qanday bog'lanishidan o'qiladi.",
              "Turmush o'rtog'i pozitsiyasini o'qish an'anaviy myeongri qoidasidan olingan, jinsingizni ko'rsatmasangiz bu pozitsiya o'qilmaydi."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gi-hae": {
    "eyebrow": "Kun ustunlari",
    "title": "Kun ustuni 己亥",
    "summary": "Kun ustuni 己亥 Saju-Link hisoblash qoidalariga ko'ra qanday o'qiladi: kun branchi ushlab turgan stemlarning day stemga nisbatan nima ekanligi — qoidalardagi tartibda aynan shunday keltirilgan.",
    "backLabel": "Hisoblash asosi",
    "sections": [
      {
        "title": "己亥 — oltmishlik siklda kun ustuni raqami: 36",
        "blocks": [
          {
            "p": "Tug'ilgan kunning stem-branchi 己亥 bo'lsa, day stem — 己 (Tuproq, Yin), kun branchi — 亥 (Cho'chqa). Oltmishlik siklda bu kombinatsiya raqami: 36."
          },
          {
            "p": "Saju-Link day stemi 己 bo'lgan insonni \"Yin Tuproq (己)\" deb ataydi va natija ekrani ko'rsatadigan satr: “Ekin tuprog'i. Nima kelsa qabul qilib o'stiradi, ko'z-ko'z qilishdan ko'ra parvarishga yaqin.” Bu satrning quyidagi o'qish yoki ballar bilan aloqasi yo'q."
          }
        ]
      },
      {
        "title": "Kun branchi 亥 ushlab turgan stemlarning day stemga nisbatan nima ekanligi",
        "blocks": [
          {
            "p": "Kun branchi — turmush o'rtog'i pozitsiyasi. Day stem 己 nuqtai nazaridan o'qilganda, branch 亥 ushlab turgan stemlar quyidagicha. Asosiy stem (壬) — branchning vakillik energiyasi."
          },
          {
            "table": {
              "caption": "Kun branchi 己亥: hidden stems",
              "head": [
                "Hidden stem",
                "Pozitsiya",
                "Ulush",
                "Day stem 己 uchun"
              ],
              "rows": [
                [
                  "Yang Tuproq (戊)",
                  "qoldiq (餘氣)",
                  "{hidHaeYeo}",
                  "Raqib (劫財)"
                ],
                [
                  "Yang Yog'och (甲)",
                  "o'rta (中氣)",
                  "{hidHaeJung}",
                  "Nufuz (正官)"
                ],
                [
                  "Yang Suv (壬)",
                  "asosiy (本氣)",
                  "{hidHaeBon}",
                  "Barqaror boylik (正財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Turmush o'rtog'i pozitsiyasi va bu kun ustuni",
        "blocks": [
          {
            "p": "An'anaviy myeongri turmush o'rtog'i pozitsiyasini erkaklar uchun Barqaror boylik (正財), ayollar uchun Nufuz (正官) deb o'qiydi. Day stem 己 bo'lganda, Barqaror boylik — 壬, Nufuz — 甲."
          },
          {
            "p": "Erkaklar uchun turmush o'rtog'i pozitsiyasi (Barqaror boylik) — 壬. 壬 亥 ichida saqlanadi (asosiy (本氣))."
          },
          {
            "p": "Ayollar uchun turmush o'rtog'i pozitsiyasi (Nufuz) — 甲. 甲 亥 ichida saqlanadi (o'rta (中氣))."
          }
        ]
      },
      {
        "title": "Qo'shni kun ustunlari va ular tarkibidagi belgilar",
        "blocks": [
          {
            "p": "Oltmishlik siklda oldingi kun ustuni — [戊戌](/guide/pillar-mu-sul), keyingisi — [庚子](/guide/pillar-gyeong-ja)."
          },
          {
            "p": "Tarkibi: [Yin Tuproq (己)](/guide/stem-gi) va [亥 (Cho'chqa)](/guide/branch-hae)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bu qo'llanma nimani aytmaydi",
        "blocks": [
          {
            "ul": [
              "Bitta kun ustuni insonni yoki munosabatni belgilab bermaydi. Saju to'rt ustunning sakkiz belgisi o'zaro qanday bog'lanishidan o'qiladi.",
              "Turmush o'rtog'i pozitsiyasini o'qish an'anaviy myeongri qoidasidan olingan, jinsingizni ko'rsatmasangiz bu pozitsiya o'qilmaydi."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gyeong-ja": {
    "eyebrow": "Kun ustunlari",
    "title": "Kun ustuni 庚子",
    "summary": "Kun ustuni 庚子 Saju-Link hisoblash qoidalariga ko'ra qanday o'qiladi: kun branchi ushlab turgan stemlarning day stemga nisbatan nima ekanligi — qoidalardagi tartibda aynan shunday keltirilgan.",
    "backLabel": "Hisoblash asosi",
    "sections": [
      {
        "title": "庚子 — oltmishlik siklda kun ustuni raqami: 37",
        "blocks": [
          {
            "p": "Tug'ilgan kunning stem-branchi 庚子 bo'lsa, day stem — 庚 (Metall, Yang), kun branchi — 子 (Sichqon). Oltmishlik siklda bu kombinatsiya raqami: 37."
          },
          {
            "p": "Saju-Link day stemi 庚 bo'lgan insonni \"Yang Metall (庚)\" deb ataydi va natija ekrani ko'rsatadigan satr: “Ishlov ko'rmagan temir. Qat'iy va aniq, osilib qolgan ishlarga sabri yo'q.” Bu satrning quyidagi o'qish yoki ballar bilan aloqasi yo'q."
          }
        ]
      },
      {
        "title": "Kun branchi 子 ushlab turgan stemlarning day stemga nisbatan nima ekanligi",
        "blocks": [
          {
            "p": "Kun branchi — turmush o'rtog'i pozitsiyasi. Day stem 庚 nuqtai nazaridan o'qilganda, branch 子 ushlab turgan stemlar quyidagicha. Asosiy stem (癸) — branchning vakillik energiyasi."
          },
          {
            "table": {
              "caption": "Kun branchi 庚子: hidden stems",
              "head": [
                "Hidden stem",
                "Pozitsiya",
                "Ulush",
                "Day stem 庚 uchun"
              ],
              "rows": [
                [
                  "Yang Suv (壬)",
                  "qoldiq (餘氣)",
                  "{hidJaYeo}",
                  "Ifoda (食神)"
                ],
                [
                  "Yin Suv (癸)",
                  "asosiy (本氣)",
                  "{hidJaBon}",
                  "Buzuvchi (傷官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Turmush o'rtog'i pozitsiyasi va bu kun ustuni",
        "blocks": [
          {
            "p": "An'anaviy myeongri turmush o'rtog'i pozitsiyasini erkaklar uchun Barqaror boylik (正財), ayollar uchun Nufuz (正官) deb o'qiydi. Day stem 庚 bo'lganda, Barqaror boylik — 乙, Nufuz — 丁."
          },
          {
            "p": "Erkaklar uchun turmush o'rtog'i pozitsiyasi (Barqaror boylik) — 乙. 乙 子 ichida saqlanmaydi."
          },
          {
            "p": "Ayollar uchun turmush o'rtog'i pozitsiyasi (Nufuz) — 丁. 丁 子 ichida saqlanmaydi."
          }
        ]
      },
      {
        "title": "Qo'shni kun ustunlari va ular tarkibidagi belgilar",
        "blocks": [
          {
            "p": "Oltmishlik siklda oldingi kun ustuni — [己亥](/guide/pillar-gi-hae), keyingisi — [辛丑](/guide/pillar-sin-chuk)."
          },
          {
            "p": "Tarkibi: [Yang Metall (庚)](/guide/stem-gyeong) va [子 (Sichqon)](/guide/branch-ja)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bu qo'llanma nimani aytmaydi",
        "blocks": [
          {
            "ul": [
              "Bitta kun ustuni insonni yoki munosabatni belgilab bermaydi. Saju to'rt ustunning sakkiz belgisi o'zaro qanday bog'lanishidan o'qiladi.",
              "Turmush o'rtog'i pozitsiyasini o'qish an'anaviy myeongri qoidasidan olingan, jinsingizni ko'rsatmasangiz bu pozitsiya o'qilmaydi."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-sin-chuk": {
    "eyebrow": "Kun ustunlari",
    "title": "Kun ustuni 辛丑",
    "summary": "Kun ustuni 辛丑 Saju-Link hisoblash qoidalariga ko'ra qanday o'qiladi: kun branchi ushlab turgan stemlarning day stemga nisbatan nima ekanligi — qoidalardagi tartibda aynan shunday keltirilgan.",
    "backLabel": "Hisoblash asosi",
    "sections": [
      {
        "title": "辛丑 — oltmishlik siklda kun ustuni raqami: 38",
        "blocks": [
          {
            "p": "Tug'ilgan kunning stem-branchi 辛丑 bo'lsa, day stem — 辛 (Metall, Yin), kun branchi — 丑 (Sigir). Oltmishlik siklda bu kombinatsiya raqami: 38."
          },
          {
            "p": "Saju-Link day stemi 辛 bo'lgan insonni \"Yin Metall (辛)\" deb ataydi va natija ekrani ko'rsatadigan satr: “Sayqallangan qimmatbaho tosh. Nozik did va yuqori talab; uvol qilingan ishni e'tiborsiz qoldirmaydi.” Bu satrning quyidagi o'qish yoki ballar bilan aloqasi yo'q."
          }
        ]
      },
      {
        "title": "Kun branchi 丑 ushlab turgan stemlarning day stemga nisbatan nima ekanligi",
        "blocks": [
          {
            "p": "Kun branchi — turmush o'rtog'i pozitsiyasi. Day stem 辛 nuqtai nazaridan o'qilganda, branch 丑 ushlab turgan stemlar quyidagicha. Asosiy stem (己) — branchning vakillik energiyasi."
          },
          {
            "table": {
              "caption": "Kun branchi 辛丑: hidden stems",
              "head": [
                "Hidden stem",
                "Pozitsiya",
                "Ulush",
                "Day stem 辛 uchun"
              ],
              "rows": [
                [
                  "Yin Suv (癸)",
                  "qoldiq (餘氣)",
                  "{hidChukYeo}",
                  "Ifoda (食神)"
                ],
                [
                  "Yin Metall (辛)",
                  "o'rta (中氣)",
                  "{hidChukJung}",
                  "Hamroh (比肩)"
                ],
                [
                  "Yin Tuproq (己)",
                  "asosiy (本氣)",
                  "{hidChukBon}",
                  "Noodatiy tayanch (偏印)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Turmush o'rtog'i pozitsiyasi va bu kun ustuni",
        "blocks": [
          {
            "p": "An'anaviy myeongri turmush o'rtog'i pozitsiyasini erkaklar uchun Barqaror boylik (正財), ayollar uchun Nufuz (正官) deb o'qiydi. Day stem 辛 bo'lganda, Barqaror boylik — 甲, Nufuz — 丙."
          },
          {
            "p": "Erkaklar uchun turmush o'rtog'i pozitsiyasi (Barqaror boylik) — 甲. 甲 丑 ichida saqlanmaydi."
          },
          {
            "p": "Ayollar uchun turmush o'rtog'i pozitsiyasi (Nufuz) — 丙. 丙 丑 ichida saqlanmaydi."
          }
        ]
      },
      {
        "title": "Qo'shni kun ustunlari va ular tarkibidagi belgilar",
        "blocks": [
          {
            "p": "Oltmishlik siklda oldingi kun ustuni — [庚子](/guide/pillar-gyeong-ja), keyingisi — [壬寅](/guide/pillar-im-in)."
          },
          {
            "p": "Tarkibi: [Yin Metall (辛)](/guide/stem-sin) va [丑 (Sigir)](/guide/branch-chuk)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bu qo'llanma nimani aytmaydi",
        "blocks": [
          {
            "ul": [
              "Bitta kun ustuni insonni yoki munosabatni belgilab bermaydi. Saju to'rt ustunning sakkiz belgisi o'zaro qanday bog'lanishidan o'qiladi.",
              "Turmush o'rtog'i pozitsiyasini o'qish an'anaviy myeongri qoidasidan olingan, jinsingizni ko'rsatmasangiz bu pozitsiya o'qilmaydi."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-im-in": {
    "eyebrow": "Kun ustunlari",
    "title": "Kun ustuni 壬寅",
    "summary": "Kun ustuni 壬寅 Saju-Link hisoblash qoidalariga ko'ra qanday o'qiladi: kun branchi ushlab turgan stemlarning day stemga nisbatan nima ekanligi — qoidalardagi tartibda aynan shunday keltirilgan.",
    "backLabel": "Hisoblash asosi",
    "sections": [
      {
        "title": "壬寅 — oltmishlik siklda kun ustuni raqami: 39",
        "blocks": [
          {
            "p": "Tug'ilgan kunning stem-branchi 壬寅 bo'lsa, day stem — 壬 (Suv, Yang), kun branchi — 寅 (Yo'lbars). Oltmishlik siklda bu kombinatsiya raqami: 39."
          },
          {
            "p": "Saju-Link day stemi 壬 bo'lgan insonni \"Yang Suv (壬)\" deb ataydi va natija ekrani ko'rsatadigan satr: “Daryo va dengiz. Qarashi keng, narsalarning qay tomonga oqayotganini ilg'aydi.” Bu satrning quyidagi o'qish yoki ballar bilan aloqasi yo'q."
          }
        ]
      },
      {
        "title": "Kun branchi 寅 ushlab turgan stemlarning day stemga nisbatan nima ekanligi",
        "blocks": [
          {
            "p": "Kun branchi — turmush o'rtog'i pozitsiyasi. Day stem 壬 nuqtai nazaridan o'qilganda, branch 寅 ushlab turgan stemlar quyidagicha. Asosiy stem (甲) — branchning vakillik energiyasi."
          },
          {
            "table": {
              "caption": "Kun branchi 壬寅: hidden stems",
              "head": [
                "Hidden stem",
                "Pozitsiya",
                "Ulush",
                "Day stem 壬 uchun"
              ],
              "rows": [
                [
                  "Yang Tuproq (戊)",
                  "qoldiq (餘氣)",
                  "{hidInYeo}",
                  "Sinovchi (偏官)"
                ],
                [
                  "Yang Olov (丙)",
                  "o'rta (中氣)",
                  "{hidInJung}",
                  "Kutilmagan boylik (偏財)"
                ],
                [
                  "Yang Yog'och (甲)",
                  "asosiy (本氣)",
                  "{hidInBon}",
                  "Ifoda (食神)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Turmush o'rtog'i pozitsiyasi va bu kun ustuni",
        "blocks": [
          {
            "p": "An'anaviy myeongri turmush o'rtog'i pozitsiyasini erkaklar uchun Barqaror boylik (正財), ayollar uchun Nufuz (正官) deb o'qiydi. Day stem 壬 bo'lganda, Barqaror boylik — 丁, Nufuz — 己."
          },
          {
            "p": "Erkaklar uchun turmush o'rtog'i pozitsiyasi (Barqaror boylik) — 丁. 丁 寅 ichida saqlanmaydi."
          },
          {
            "p": "Ayollar uchun turmush o'rtog'i pozitsiyasi (Nufuz) — 己. 己 寅 ichida saqlanmaydi."
          }
        ]
      },
      {
        "title": "Qo'shni kun ustunlari va ular tarkibidagi belgilar",
        "blocks": [
          {
            "p": "Oltmishlik siklda oldingi kun ustuni — [辛丑](/guide/pillar-sin-chuk), keyingisi — [癸卯](/guide/pillar-gye-myo)."
          },
          {
            "p": "Tarkibi: [Yang Suv (壬)](/guide/stem-im) va [寅 (Yo'lbars)](/guide/branch-in)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bu qo'llanma nimani aytmaydi",
        "blocks": [
          {
            "ul": [
              "Bitta kun ustuni insonni yoki munosabatni belgilab bermaydi. Saju to'rt ustunning sakkiz belgisi o'zaro qanday bog'lanishidan o'qiladi.",
              "Turmush o'rtog'i pozitsiyasini o'qish an'anaviy myeongri qoidasidan olingan, jinsingizni ko'rsatmasangiz bu pozitsiya o'qilmaydi."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gye-myo": {
    "eyebrow": "Kun ustunlari",
    "title": "Kun ustuni 癸卯",
    "summary": "Kun ustuni 癸卯 Saju-Link hisoblash qoidalariga ko'ra qanday o'qiladi: kun branchi ushlab turgan stemlarning day stemga nisbatan nima ekanligi — qoidalardagi tartibda aynan shunday keltirilgan.",
    "backLabel": "Hisoblash asosi",
    "sections": [
      {
        "title": "癸卯 — oltmishlik siklda kun ustuni raqami: 40",
        "blocks": [
          {
            "p": "Tug'ilgan kunning stem-branchi 癸卯 bo'lsa, day stem — 癸 (Suv, Yin), kun branchi — 卯 (Quyon). Oltmishlik siklda bu kombinatsiya raqami: 40."
          },
          {
            "p": "Saju-Link day stemi 癸 bo'lgan insonni \"Yin Suv (癸)\" deb ataydi va natija ekrani ko'rsatadigan satr: “Shabnam va yomg'ir. Sokin singib boradi, so'zdan oldin kayfiyatni o'qiydi.” Bu satrning quyidagi o'qish yoki ballar bilan aloqasi yo'q."
          }
        ]
      },
      {
        "title": "Kun branchi 卯 ushlab turgan stemlarning day stemga nisbatan nima ekanligi",
        "blocks": [
          {
            "p": "Kun branchi — turmush o'rtog'i pozitsiyasi. Day stem 癸 nuqtai nazaridan o'qilganda, branch 卯 ushlab turgan stemlar quyidagicha. Asosiy stem (乙) — branchning vakillik energiyasi."
          },
          {
            "table": {
              "caption": "Kun branchi 癸卯: hidden stems",
              "head": [
                "Hidden stem",
                "Pozitsiya",
                "Ulush",
                "Day stem 癸 uchun"
              ],
              "rows": [
                [
                  "Yang Yog'och (甲)",
                  "qoldiq (餘氣)",
                  "{hidMyoYeo}",
                  "Buzuvchi (傷官)"
                ],
                [
                  "Yin Yog'och (乙)",
                  "asosiy (本氣)",
                  "{hidMyoBon}",
                  "Ifoda (食神)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Turmush o'rtog'i pozitsiyasi va bu kun ustuni",
        "blocks": [
          {
            "p": "An'anaviy myeongri turmush o'rtog'i pozitsiyasini erkaklar uchun Barqaror boylik (正財), ayollar uchun Nufuz (正官) deb o'qiydi. Day stem 癸 bo'lganda, Barqaror boylik — 丙, Nufuz — 戊."
          },
          {
            "p": "Erkaklar uchun turmush o'rtog'i pozitsiyasi (Barqaror boylik) — 丙. 丙 卯 ichida saqlanmaydi."
          },
          {
            "p": "Ayollar uchun turmush o'rtog'i pozitsiyasi (Nufuz) — 戊. 戊 卯 ichida saqlanmaydi."
          }
        ]
      },
      {
        "title": "Qo'shni kun ustunlari va ular tarkibidagi belgilar",
        "blocks": [
          {
            "p": "Oltmishlik siklda oldingi kun ustuni — [壬寅](/guide/pillar-im-in), keyingisi — [甲辰](/guide/pillar-gap-jin)."
          },
          {
            "p": "Tarkibi: [Yin Suv (癸)](/guide/stem-gye) va [卯 (Quyon)](/guide/branch-myo)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bu qo'llanma nimani aytmaydi",
        "blocks": [
          {
            "ul": [
              "Bitta kun ustuni insonni yoki munosabatni belgilab bermaydi. Saju to'rt ustunning sakkiz belgisi o'zaro qanday bog'lanishidan o'qiladi.",
              "Turmush o'rtog'i pozitsiyasini o'qish an'anaviy myeongri qoidasidan olingan, jinsingizni ko'rsatmasangiz bu pozitsiya o'qilmaydi."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gap-jin": {
    "eyebrow": "Kun ustunlari",
    "title": "Kun ustuni 甲辰",
    "summary": "Kun ustuni 甲辰 Saju-Link hisoblash qoidalariga ko'ra qanday o'qiladi: kun branchi ushlab turgan stemlarning day stemga nisbatan nima ekanligi — qoidalardagi tartibda aynan shunday keltirilgan.",
    "backLabel": "Hisoblash asosi",
    "sections": [
      {
        "title": "甲辰 — oltmishlik siklda kun ustuni raqami: 41",
        "blocks": [
          {
            "p": "Tug'ilgan kunning stem-branchi 甲辰 bo'lsa, day stem — 甲 (Yog'och, Yang), kun branchi — 辰 (Ajdar). Oltmishlik siklda bu kombinatsiya raqami: 41."
          },
          {
            "p": "Saju-Link day stemi 甲 bo'lgan insonni \"Yang Yog'och (甲)\" deb ataydi va natija ekrani ko'rsatadigan satr: “Tik o'sadigan baland daraxt. Yo'nalish belgilangach chayqalmaydi va egilishdan ko'ra chidashni tanlaydi.” Bu satrning quyidagi o'qish yoki ballar bilan aloqasi yo'q."
          }
        ]
      },
      {
        "title": "Kun branchi 辰 ushlab turgan stemlarning day stemga nisbatan nima ekanligi",
        "blocks": [
          {
            "p": "Kun branchi — turmush o'rtog'i pozitsiyasi. Day stem 甲 nuqtai nazaridan o'qilganda, branch 辰 ushlab turgan stemlar quyidagicha. Asosiy stem (戊) — branchning vakillik energiyasi."
          },
          {
            "table": {
              "caption": "Kun branchi 甲辰: hidden stems",
              "head": [
                "Hidden stem",
                "Pozitsiya",
                "Ulush",
                "Day stem 甲 uchun"
              ],
              "rows": [
                [
                  "Yin Yog'och (乙)",
                  "qoldiq (餘氣)",
                  "{hidJinYeo}",
                  "Raqib (劫財)"
                ],
                [
                  "Yin Suv (癸)",
                  "o'rta (中氣)",
                  "{hidJinJung}",
                  "G'amxo'rlik (正印)"
                ],
                [
                  "Yang Tuproq (戊)",
                  "asosiy (本氣)",
                  "{hidJinBon}",
                  "Kutilmagan boylik (偏財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Turmush o'rtog'i pozitsiyasi va bu kun ustuni",
        "blocks": [
          {
            "p": "An'anaviy myeongri turmush o'rtog'i pozitsiyasini erkaklar uchun Barqaror boylik (正財), ayollar uchun Nufuz (正官) deb o'qiydi. Day stem 甲 bo'lganda, Barqaror boylik — 己, Nufuz — 辛."
          },
          {
            "p": "Erkaklar uchun turmush o'rtog'i pozitsiyasi (Barqaror boylik) — 己. 己 辰 ichida saqlanmaydi."
          },
          {
            "p": "Ayollar uchun turmush o'rtog'i pozitsiyasi (Nufuz) — 辛. 辛 辰 ichida saqlanmaydi."
          }
        ]
      },
      {
        "title": "Qo'shni kun ustunlari va ular tarkibidagi belgilar",
        "blocks": [
          {
            "p": "Oltmishlik siklda oldingi kun ustuni — [癸卯](/guide/pillar-gye-myo), keyingisi — [乙巳](/guide/pillar-eul-sa)."
          },
          {
            "p": "Tarkibi: [Yang Yog'och (甲)](/guide/stem-gap) va [辰 (Ajdar)](/guide/branch-jin)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bu qo'llanma nimani aytmaydi",
        "blocks": [
          {
            "ul": [
              "Bitta kun ustuni insonni yoki munosabatni belgilab bermaydi. Saju to'rt ustunning sakkiz belgisi o'zaro qanday bog'lanishidan o'qiladi.",
              "Turmush o'rtog'i pozitsiyasini o'qish an'anaviy myeongri qoidasidan olingan, jinsingizni ko'rsatmasangiz bu pozitsiya o'qilmaydi."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-eul-sa": {
    "eyebrow": "Kun ustunlari",
    "title": "Kun ustuni 乙巳",
    "summary": "Kun ustuni 乙巳 Saju-Link hisoblash qoidalariga ko'ra qanday o'qiladi: kun branchi ushlab turgan stemlarning day stemga nisbatan nima ekanligi — qoidalardagi tartibda aynan shunday keltirilgan.",
    "backLabel": "Hisoblash asosi",
    "sections": [
      {
        "title": "乙巳 — oltmishlik siklda kun ustuni raqami: 42",
        "blocks": [
          {
            "p": "Tug'ilgan kunning stem-branchi 乙巳 bo'lsa, day stem — 乙 (Yog'och, Yin), kun branchi — 巳 (Ilon). Oltmishlik siklda bu kombinatsiya raqami: 42."
          },
          {
            "p": "Saju-Link day stemi 乙 bo'lgan insonni \"Yin Yog'och (乙)\" deb ataydi va natija ekrani ko'rsatadigan satr: “Chirmovuq kabi egiluvchan o't. Sharoitga qarab egiladi-yu, oldinga yuraveradi va uzilmaydi.” Bu satrning quyidagi o'qish yoki ballar bilan aloqasi yo'q."
          }
        ]
      },
      {
        "title": "Kun branchi 巳 ushlab turgan stemlarning day stemga nisbatan nima ekanligi",
        "blocks": [
          {
            "p": "Kun branchi — turmush o'rtog'i pozitsiyasi. Day stem 乙 nuqtai nazaridan o'qilganda, branch 巳 ushlab turgan stemlar quyidagicha. Asosiy stem (丙) — branchning vakillik energiyasi."
          },
          {
            "table": {
              "caption": "Kun branchi 乙巳: hidden stems",
              "head": [
                "Hidden stem",
                "Pozitsiya",
                "Ulush",
                "Day stem 乙 uchun"
              ],
              "rows": [
                [
                  "Yang Tuproq (戊)",
                  "qoldiq (餘氣)",
                  "{hidSaYeo}",
                  "Barqaror boylik (正財)"
                ],
                [
                  "Yang Metall (庚)",
                  "o'rta (中氣)",
                  "{hidSaJung}",
                  "Nufuz (正官)"
                ],
                [
                  "Yang Olov (丙)",
                  "asosiy (本氣)",
                  "{hidSaBon}",
                  "Buzuvchi (傷官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Turmush o'rtog'i pozitsiyasi va bu kun ustuni",
        "blocks": [
          {
            "p": "An'anaviy myeongri turmush o'rtog'i pozitsiyasini erkaklar uchun Barqaror boylik (正財), ayollar uchun Nufuz (正官) deb o'qiydi. Day stem 乙 bo'lganda, Barqaror boylik — 戊, Nufuz — 庚."
          },
          {
            "p": "Erkaklar uchun turmush o'rtog'i pozitsiyasi (Barqaror boylik) — 戊. 戊 巳 ichida saqlanadi (qoldiq (餘氣))."
          },
          {
            "p": "Ayollar uchun turmush o'rtog'i pozitsiyasi (Nufuz) — 庚. 庚 巳 ichida saqlanadi (o'rta (中氣))."
          }
        ]
      },
      {
        "title": "Qo'shni kun ustunlari va ular tarkibidagi belgilar",
        "blocks": [
          {
            "p": "Oltmishlik siklda oldingi kun ustuni — [甲辰](/guide/pillar-gap-jin), keyingisi — [丙午](/guide/pillar-byeong-o)."
          },
          {
            "p": "Tarkibi: [Yin Yog'och (乙)](/guide/stem-eul) va [巳 (Ilon)](/guide/branch-sa)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bu qo'llanma nimani aytmaydi",
        "blocks": [
          {
            "ul": [
              "Bitta kun ustuni insonni yoki munosabatni belgilab bermaydi. Saju to'rt ustunning sakkiz belgisi o'zaro qanday bog'lanishidan o'qiladi.",
              "Turmush o'rtog'i pozitsiyasini o'qish an'anaviy myeongri qoidasidan olingan, jinsingizni ko'rsatmasangiz bu pozitsiya o'qilmaydi."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-byeong-o": {
    "eyebrow": "Kun ustunlari",
    "title": "Kun ustuni 丙午",
    "summary": "Kun ustuni 丙午 Saju-Link hisoblash qoidalariga ko'ra qanday o'qiladi: kun branchi ushlab turgan stemlarning day stemga nisbatan nima ekanligi — qoidalardagi tartibda aynan shunday keltirilgan.",
    "backLabel": "Hisoblash asosi",
    "sections": [
      {
        "title": "丙午 — oltmishlik siklda kun ustuni raqami: 43",
        "blocks": [
          {
            "p": "Tug'ilgan kunning stem-branchi 丙午 bo'lsa, day stem — 丙 (Olov, Yang), kun branchi — 午 (Ot). Oltmishlik siklda bu kombinatsiya raqami: 43."
          },
          {
            "p": "Saju-Link day stemi 丙 bo'lgan insonni \"Yang Olov (丙)\" deb ataydi va natija ekrani ko'rsatadigan satr: “Tush paytidagi quyosh. Hissiyot ochiq ko'rinadi, atrof yorishadi, oldinga chiqish tabiiy keladi.” Bu satrning quyidagi o'qish yoki ballar bilan aloqasi yo'q."
          }
        ]
      },
      {
        "title": "Kun branchi 午 ushlab turgan stemlarning day stemga nisbatan nima ekanligi",
        "blocks": [
          {
            "p": "Kun branchi — turmush o'rtog'i pozitsiyasi. Day stem 丙 nuqtai nazaridan o'qilganda, branch 午 ushlab turgan stemlar quyidagicha. Asosiy stem (丁) — branchning vakillik energiyasi."
          },
          {
            "table": {
              "caption": "Kun branchi 丙午: hidden stems",
              "head": [
                "Hidden stem",
                "Pozitsiya",
                "Ulush",
                "Day stem 丙 uchun"
              ],
              "rows": [
                [
                  "Yang Olov (丙)",
                  "qoldiq (餘氣)",
                  "{hidOYeo}",
                  "Hamroh (比肩)"
                ],
                [
                  "Yin Tuproq (己)",
                  "o'rta (中氣)",
                  "{hidOJung}",
                  "Buzuvchi (傷官)"
                ],
                [
                  "Yin Olov (丁)",
                  "asosiy (本氣)",
                  "{hidOBon}",
                  "Raqib (劫財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Turmush o'rtog'i pozitsiyasi va bu kun ustuni",
        "blocks": [
          {
            "p": "An'anaviy myeongri turmush o'rtog'i pozitsiyasini erkaklar uchun Barqaror boylik (正財), ayollar uchun Nufuz (正官) deb o'qiydi. Day stem 丙 bo'lganda, Barqaror boylik — 辛, Nufuz — 癸."
          },
          {
            "p": "Erkaklar uchun turmush o'rtog'i pozitsiyasi (Barqaror boylik) — 辛. 辛 午 ichida saqlanmaydi."
          },
          {
            "p": "Ayollar uchun turmush o'rtog'i pozitsiyasi (Nufuz) — 癸. 癸 午 ichida saqlanmaydi."
          }
        ]
      },
      {
        "title": "Qo'shni kun ustunlari va ular tarkibidagi belgilar",
        "blocks": [
          {
            "p": "Oltmishlik siklda oldingi kun ustuni — [乙巳](/guide/pillar-eul-sa), keyingisi — [丁未](/guide/pillar-jeong-mi)."
          },
          {
            "p": "Tarkibi: [Yang Olov (丙)](/guide/stem-byeong) va [午 (Ot)](/guide/branch-o)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bu qo'llanma nimani aytmaydi",
        "blocks": [
          {
            "ul": [
              "Bitta kun ustuni insonni yoki munosabatni belgilab bermaydi. Saju to'rt ustunning sakkiz belgisi o'zaro qanday bog'lanishidan o'qiladi.",
              "Turmush o'rtog'i pozitsiyasini o'qish an'anaviy myeongri qoidasidan olingan, jinsingizni ko'rsatmasangiz bu pozitsiya o'qilmaydi."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-jeong-mi": {
    "eyebrow": "Kun ustunlari",
    "title": "Kun ustuni 丁未",
    "summary": "Kun ustuni 丁未 Saju-Link hisoblash qoidalariga ko'ra qanday o'qiladi: kun branchi ushlab turgan stemlarning day stemga nisbatan nima ekanligi — qoidalardagi tartibda aynan shunday keltirilgan.",
    "backLabel": "Hisoblash asosi",
    "sections": [
      {
        "title": "丁未 — oltmishlik siklda kun ustuni raqami: 44",
        "blocks": [
          {
            "p": "Tug'ilgan kunning stem-branchi 丁未 bo'lsa, day stem — 丁 (Olov, Yin), kun branchi — 未 (Qo'y). Oltmishlik siklda bu kombinatsiya raqami: 44."
          },
          {
            "p": "Saju-Link day stemi 丁 bo'lgan insonni \"Yin Olov (丁)\" deb ataydi va natija ekrani ko'rsatadigan satr: “Sham va chiroq yorug'i. Sokin va uzoq yonadi, avvalo eng yaqinlarini isitadi.” Bu satrning quyidagi o'qish yoki ballar bilan aloqasi yo'q."
          }
        ]
      },
      {
        "title": "Kun branchi 未 ushlab turgan stemlarning day stemga nisbatan nima ekanligi",
        "blocks": [
          {
            "p": "Kun branchi — turmush o'rtog'i pozitsiyasi. Day stem 丁 nuqtai nazaridan o'qilganda, branch 未 ushlab turgan stemlar quyidagicha. Asosiy stem (己) — branchning vakillik energiyasi."
          },
          {
            "table": {
              "caption": "Kun branchi 丁未: hidden stems",
              "head": [
                "Hidden stem",
                "Pozitsiya",
                "Ulush",
                "Day stem 丁 uchun"
              ],
              "rows": [
                [
                  "Yin Olov (丁)",
                  "qoldiq (餘氣)",
                  "{hidMiYeo}",
                  "Hamroh (比肩)"
                ],
                [
                  "Yin Yog'och (乙)",
                  "o'rta (中氣)",
                  "{hidMiJung}",
                  "Noodatiy tayanch (偏印)"
                ],
                [
                  "Yin Tuproq (己)",
                  "asosiy (本氣)",
                  "{hidMiBon}",
                  "Ifoda (食神)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Turmush o'rtog'i pozitsiyasi va bu kun ustuni",
        "blocks": [
          {
            "p": "An'anaviy myeongri turmush o'rtog'i pozitsiyasini erkaklar uchun Barqaror boylik (正財), ayollar uchun Nufuz (正官) deb o'qiydi. Day stem 丁 bo'lganda, Barqaror boylik — 庚, Nufuz — 壬."
          },
          {
            "p": "Erkaklar uchun turmush o'rtog'i pozitsiyasi (Barqaror boylik) — 庚. 庚 未 ichida saqlanmaydi."
          },
          {
            "p": "Ayollar uchun turmush o'rtog'i pozitsiyasi (Nufuz) — 壬. 壬 未 ichida saqlanmaydi."
          }
        ]
      },
      {
        "title": "Qo'shni kun ustunlari va ular tarkibidagi belgilar",
        "blocks": [
          {
            "p": "Oltmishlik siklda oldingi kun ustuni — [丙午](/guide/pillar-byeong-o), keyingisi — [戊申](/guide/pillar-mu-sin)."
          },
          {
            "p": "Tarkibi: [Yin Olov (丁)](/guide/stem-jeong) va [未 (Qo'y)](/guide/branch-mi)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bu qo'llanma nimani aytmaydi",
        "blocks": [
          {
            "ul": [
              "Bitta kun ustuni insonni yoki munosabatni belgilab bermaydi. Saju to'rt ustunning sakkiz belgisi o'zaro qanday bog'lanishidan o'qiladi.",
              "Turmush o'rtog'i pozitsiyasini o'qish an'anaviy myeongri qoidasidan olingan, jinsingizni ko'rsatmasangiz bu pozitsiya o'qilmaydi."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-mu-sin": {
    "eyebrow": "Kun ustunlari",
    "title": "Kun ustuni 戊申",
    "summary": "Kun ustuni 戊申 Saju-Link hisoblash qoidalariga ko'ra qanday o'qiladi: kun branchi ushlab turgan stemlarning day stemga nisbatan nima ekanligi — qoidalardagi tartibda aynan shunday keltirilgan.",
    "backLabel": "Hisoblash asosi",
    "sections": [
      {
        "title": "戊申 — oltmishlik siklda kun ustuni raqami: 45",
        "blocks": [
          {
            "p": "Tug'ilgan kunning stem-branchi 戊申 bo'lsa, day stem — 戊 (Tuproq, Yang), kun branchi — 申 (Maymun). Oltmishlik siklda bu kombinatsiya raqami: 45."
          },
          {
            "p": "Saju-Link day stemi 戊 bo'lgan insonni \"Yang Tuproq (戊)\" deb ataydi va natija ekrani ko'rsatadigan satr: “Keng dala va tog'. Silkitish qiyin, suyanish oson, ammo qabul qilingan qarorni o'zgartirishga shoshmaydi.” Bu satrning quyidagi o'qish yoki ballar bilan aloqasi yo'q."
          }
        ]
      },
      {
        "title": "Kun branchi 申 ushlab turgan stemlarning day stemga nisbatan nima ekanligi",
        "blocks": [
          {
            "p": "Kun branchi — turmush o'rtog'i pozitsiyasi. Day stem 戊 nuqtai nazaridan o'qilganda, branch 申 ushlab turgan stemlar quyidagicha. Asosiy stem (庚) — branchning vakillik energiyasi."
          },
          {
            "table": {
              "caption": "Kun branchi 戊申: hidden stems",
              "head": [
                "Hidden stem",
                "Pozitsiya",
                "Ulush",
                "Day stem 戊 uchun"
              ],
              "rows": [
                [
                  "Yang Tuproq (戊)",
                  "qoldiq (餘氣)",
                  "{hidSinYeo}",
                  "Hamroh (比肩)"
                ],
                [
                  "Yang Suv (壬)",
                  "o'rta (中氣)",
                  "{hidSinJung}",
                  "Kutilmagan boylik (偏財)"
                ],
                [
                  "Yang Metall (庚)",
                  "asosiy (本氣)",
                  "{hidSinBon}",
                  "Ifoda (食神)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Turmush o'rtog'i pozitsiyasi va bu kun ustuni",
        "blocks": [
          {
            "p": "An'anaviy myeongri turmush o'rtog'i pozitsiyasini erkaklar uchun Barqaror boylik (正財), ayollar uchun Nufuz (正官) deb o'qiydi. Day stem 戊 bo'lganda, Barqaror boylik — 癸, Nufuz — 乙."
          },
          {
            "p": "Erkaklar uchun turmush o'rtog'i pozitsiyasi (Barqaror boylik) — 癸. 癸 申 ichida saqlanmaydi."
          },
          {
            "p": "Ayollar uchun turmush o'rtog'i pozitsiyasi (Nufuz) — 乙. 乙 申 ichida saqlanmaydi."
          }
        ]
      },
      {
        "title": "Qo'shni kun ustunlari va ular tarkibidagi belgilar",
        "blocks": [
          {
            "p": "Oltmishlik siklda oldingi kun ustuni — [丁未](/guide/pillar-jeong-mi), keyingisi — [己酉](/guide/pillar-gi-yu)."
          },
          {
            "p": "Tarkibi: [Yang Tuproq (戊)](/guide/stem-mu) va [申 (Maymun)](/guide/branch-sin)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bu qo'llanma nimani aytmaydi",
        "blocks": [
          {
            "ul": [
              "Bitta kun ustuni insonni yoki munosabatni belgilab bermaydi. Saju to'rt ustunning sakkiz belgisi o'zaro qanday bog'lanishidan o'qiladi.",
              "Turmush o'rtog'i pozitsiyasini o'qish an'anaviy myeongri qoidasidan olingan, jinsingizni ko'rsatmasangiz bu pozitsiya o'qilmaydi."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gi-yu": {
    "eyebrow": "Kun ustunlari",
    "title": "Kun ustuni 己酉",
    "summary": "Kun ustuni 己酉 Saju-Link hisoblash qoidalariga ko'ra qanday o'qiladi: kun branchi ushlab turgan stemlarning day stemga nisbatan nima ekanligi — qoidalardagi tartibda aynan shunday keltirilgan.",
    "backLabel": "Hisoblash asosi",
    "sections": [
      {
        "title": "己酉 — oltmishlik siklda kun ustuni raqami: 46",
        "blocks": [
          {
            "p": "Tug'ilgan kunning stem-branchi 己酉 bo'lsa, day stem — 己 (Tuproq, Yin), kun branchi — 酉 (Xo'roz). Oltmishlik siklda bu kombinatsiya raqami: 46."
          },
          {
            "p": "Saju-Link day stemi 己 bo'lgan insonni \"Yin Tuproq (己)\" deb ataydi va natija ekrani ko'rsatadigan satr: “Ekin tuprog'i. Nima kelsa qabul qilib o'stiradi, ko'z-ko'z qilishdan ko'ra parvarishga yaqin.” Bu satrning quyidagi o'qish yoki ballar bilan aloqasi yo'q."
          }
        ]
      },
      {
        "title": "Kun branchi 酉 ushlab turgan stemlarning day stemga nisbatan nima ekanligi",
        "blocks": [
          {
            "p": "Kun branchi — turmush o'rtog'i pozitsiyasi. Day stem 己 nuqtai nazaridan o'qilganda, branch 酉 ushlab turgan stemlar quyidagicha. Asosiy stem (辛) — branchning vakillik energiyasi."
          },
          {
            "table": {
              "caption": "Kun branchi 己酉: hidden stems",
              "head": [
                "Hidden stem",
                "Pozitsiya",
                "Ulush",
                "Day stem 己 uchun"
              ],
              "rows": [
                [
                  "Yang Metall (庚)",
                  "qoldiq (餘氣)",
                  "{hidYuYeo}",
                  "Buzuvchi (傷官)"
                ],
                [
                  "Yin Metall (辛)",
                  "asosiy (本氣)",
                  "{hidYuBon}",
                  "Ifoda (食神)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Turmush o'rtog'i pozitsiyasi va bu kun ustuni",
        "blocks": [
          {
            "p": "An'anaviy myeongri turmush o'rtog'i pozitsiyasini erkaklar uchun Barqaror boylik (正財), ayollar uchun Nufuz (正官) deb o'qiydi. Day stem 己 bo'lganda, Barqaror boylik — 壬, Nufuz — 甲."
          },
          {
            "p": "Erkaklar uchun turmush o'rtog'i pozitsiyasi (Barqaror boylik) — 壬. 壬 酉 ichida saqlanmaydi."
          },
          {
            "p": "Ayollar uchun turmush o'rtog'i pozitsiyasi (Nufuz) — 甲. 甲 酉 ichida saqlanmaydi."
          }
        ]
      },
      {
        "title": "Qo'shni kun ustunlari va ular tarkibidagi belgilar",
        "blocks": [
          {
            "p": "Oltmishlik siklda oldingi kun ustuni — [戊申](/guide/pillar-mu-sin), keyingisi — [庚戌](/guide/pillar-gyeong-sul)."
          },
          {
            "p": "Tarkibi: [Yin Tuproq (己)](/guide/stem-gi) va [酉 (Xo'roz)](/guide/branch-yu)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bu qo'llanma nimani aytmaydi",
        "blocks": [
          {
            "ul": [
              "Bitta kun ustuni insonni yoki munosabatni belgilab bermaydi. Saju to'rt ustunning sakkiz belgisi o'zaro qanday bog'lanishidan o'qiladi.",
              "Turmush o'rtog'i pozitsiyasini o'qish an'anaviy myeongri qoidasidan olingan, jinsingizni ko'rsatmasangiz bu pozitsiya o'qilmaydi."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gyeong-sul": {
    "eyebrow": "Kun ustunlari",
    "title": "Kun ustuni 庚戌",
    "summary": "Kun ustuni 庚戌 Saju-Link hisoblash qoidalariga ko'ra qanday o'qiladi: kun branchi ushlab turgan stemlarning day stemga nisbatan nima ekanligi — qoidalardagi tartibda aynan shunday keltirilgan.",
    "backLabel": "Hisoblash asosi",
    "sections": [
      {
        "title": "庚戌 — oltmishlik siklda kun ustuni raqami: 47",
        "blocks": [
          {
            "p": "Tug'ilgan kunning stem-branchi 庚戌 bo'lsa, day stem — 庚 (Metall, Yang), kun branchi — 戌 (It). Oltmishlik siklda bu kombinatsiya raqami: 47."
          },
          {
            "p": "Saju-Link day stemi 庚 bo'lgan insonni \"Yang Metall (庚)\" deb ataydi va natija ekrani ko'rsatadigan satr: “Ishlov ko'rmagan temir. Qat'iy va aniq, osilib qolgan ishlarga sabri yo'q.” Bu satrning quyidagi o'qish yoki ballar bilan aloqasi yo'q."
          }
        ]
      },
      {
        "title": "Kun branchi 戌 ushlab turgan stemlarning day stemga nisbatan nima ekanligi",
        "blocks": [
          {
            "p": "Kun branchi — turmush o'rtog'i pozitsiyasi. Day stem 庚 nuqtai nazaridan o'qilganda, branch 戌 ushlab turgan stemlar quyidagicha. Asosiy stem (戊) — branchning vakillik energiyasi."
          },
          {
            "table": {
              "caption": "Kun branchi 庚戌: hidden stems",
              "head": [
                "Hidden stem",
                "Pozitsiya",
                "Ulush",
                "Day stem 庚 uchun"
              ],
              "rows": [
                [
                  "Yin Metall (辛)",
                  "qoldiq (餘氣)",
                  "{hidSulYeo}",
                  "Raqib (劫財)"
                ],
                [
                  "Yin Olov (丁)",
                  "o'rta (中氣)",
                  "{hidSulJung}",
                  "Nufuz (正官)"
                ],
                [
                  "Yang Tuproq (戊)",
                  "asosiy (本氣)",
                  "{hidSulBon}",
                  "Noodatiy tayanch (偏印)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Turmush o'rtog'i pozitsiyasi va bu kun ustuni",
        "blocks": [
          {
            "p": "An'anaviy myeongri turmush o'rtog'i pozitsiyasini erkaklar uchun Barqaror boylik (正財), ayollar uchun Nufuz (正官) deb o'qiydi. Day stem 庚 bo'lganda, Barqaror boylik — 乙, Nufuz — 丁."
          },
          {
            "p": "Erkaklar uchun turmush o'rtog'i pozitsiyasi (Barqaror boylik) — 乙. 乙 戌 ichida saqlanmaydi."
          },
          {
            "p": "Ayollar uchun turmush o'rtog'i pozitsiyasi (Nufuz) — 丁. 丁 戌 ichida saqlanadi (o'rta (中氣))."
          }
        ]
      },
      {
        "title": "Qo'shni kun ustunlari va ular tarkibidagi belgilar",
        "blocks": [
          {
            "p": "Oltmishlik siklda oldingi kun ustuni — [己酉](/guide/pillar-gi-yu), keyingisi — [辛亥](/guide/pillar-sin-hae)."
          },
          {
            "p": "Tarkibi: [Yang Metall (庚)](/guide/stem-gyeong) va [戌 (It)](/guide/branch-sul)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bu qo'llanma nimani aytmaydi",
        "blocks": [
          {
            "ul": [
              "Bitta kun ustuni insonni yoki munosabatni belgilab bermaydi. Saju to'rt ustunning sakkiz belgisi o'zaro qanday bog'lanishidan o'qiladi.",
              "Turmush o'rtog'i pozitsiyasini o'qish an'anaviy myeongri qoidasidan olingan, jinsingizni ko'rsatmasangiz bu pozitsiya o'qilmaydi."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-sin-hae": {
    "eyebrow": "Kun ustunlari",
    "title": "Kun ustuni 辛亥",
    "summary": "Kun ustuni 辛亥 Saju-Link hisoblash qoidalariga ko'ra qanday o'qiladi: kun branchi ushlab turgan stemlarning day stemga nisbatan nima ekanligi — qoidalardagi tartibda aynan shunday keltirilgan.",
    "backLabel": "Hisoblash asosi",
    "sections": [
      {
        "title": "辛亥 — oltmishlik siklda kun ustuni raqami: 48",
        "blocks": [
          {
            "p": "Tug'ilgan kunning stem-branchi 辛亥 bo'lsa, day stem — 辛 (Metall, Yin), kun branchi — 亥 (Cho'chqa). Oltmishlik siklda bu kombinatsiya raqami: 48."
          },
          {
            "p": "Saju-Link day stemi 辛 bo'lgan insonni \"Yin Metall (辛)\" deb ataydi va natija ekrani ko'rsatadigan satr: “Sayqallangan qimmatbaho tosh. Nozik did va yuqori talab; uvol qilingan ishni e'tiborsiz qoldirmaydi.” Bu satrning quyidagi o'qish yoki ballar bilan aloqasi yo'q."
          }
        ]
      },
      {
        "title": "Kun branchi 亥 ushlab turgan stemlarning day stemga nisbatan nima ekanligi",
        "blocks": [
          {
            "p": "Kun branchi — turmush o'rtog'i pozitsiyasi. Day stem 辛 nuqtai nazaridan o'qilganda, branch 亥 ushlab turgan stemlar quyidagicha. Asosiy stem (壬) — branchning vakillik energiyasi."
          },
          {
            "table": {
              "caption": "Kun branchi 辛亥: hidden stems",
              "head": [
                "Hidden stem",
                "Pozitsiya",
                "Ulush",
                "Day stem 辛 uchun"
              ],
              "rows": [
                [
                  "Yang Tuproq (戊)",
                  "qoldiq (餘氣)",
                  "{hidHaeYeo}",
                  "G'amxo'rlik (正印)"
                ],
                [
                  "Yang Yog'och (甲)",
                  "o'rta (中氣)",
                  "{hidHaeJung}",
                  "Barqaror boylik (正財)"
                ],
                [
                  "Yang Suv (壬)",
                  "asosiy (本氣)",
                  "{hidHaeBon}",
                  "Buzuvchi (傷官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Turmush o'rtog'i pozitsiyasi va bu kun ustuni",
        "blocks": [
          {
            "p": "An'anaviy myeongri turmush o'rtog'i pozitsiyasini erkaklar uchun Barqaror boylik (正財), ayollar uchun Nufuz (正官) deb o'qiydi. Day stem 辛 bo'lganda, Barqaror boylik — 甲, Nufuz — 丙."
          },
          {
            "p": "Erkaklar uchun turmush o'rtog'i pozitsiyasi (Barqaror boylik) — 甲. 甲 亥 ichida saqlanadi (o'rta (中氣))."
          },
          {
            "p": "Ayollar uchun turmush o'rtog'i pozitsiyasi (Nufuz) — 丙. 丙 亥 ichida saqlanmaydi."
          }
        ]
      },
      {
        "title": "Qo'shni kun ustunlari va ular tarkibidagi belgilar",
        "blocks": [
          {
            "p": "Oltmishlik siklda oldingi kun ustuni — [庚戌](/guide/pillar-gyeong-sul), keyingisi — [壬子](/guide/pillar-im-ja)."
          },
          {
            "p": "Tarkibi: [Yin Metall (辛)](/guide/stem-sin) va [亥 (Cho'chqa)](/guide/branch-hae)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bu qo'llanma nimani aytmaydi",
        "blocks": [
          {
            "ul": [
              "Bitta kun ustuni insonni yoki munosabatni belgilab bermaydi. Saju to'rt ustunning sakkiz belgisi o'zaro qanday bog'lanishidan o'qiladi.",
              "Turmush o'rtog'i pozitsiyasini o'qish an'anaviy myeongri qoidasidan olingan, jinsingizni ko'rsatmasangiz bu pozitsiya o'qilmaydi."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-im-ja": {
    "eyebrow": "Kun ustunlari",
    "title": "Kun ustuni 壬子",
    "summary": "Kun ustuni 壬子 Saju-Link hisoblash qoidalariga ko'ra qanday o'qiladi: kun branchi ushlab turgan stemlarning day stemga nisbatan nima ekanligi — qoidalardagi tartibda aynan shunday keltirilgan.",
    "backLabel": "Hisoblash asosi",
    "sections": [
      {
        "title": "壬子 — oltmishlik siklda kun ustuni raqami: 49",
        "blocks": [
          {
            "p": "Tug'ilgan kunning stem-branchi 壬子 bo'lsa, day stem — 壬 (Suv, Yang), kun branchi — 子 (Sichqon). Oltmishlik siklda bu kombinatsiya raqami: 49."
          },
          {
            "p": "Saju-Link day stemi 壬 bo'lgan insonni \"Yang Suv (壬)\" deb ataydi va natija ekrani ko'rsatadigan satr: “Daryo va dengiz. Qarashi keng, narsalarning qay tomonga oqayotganini ilg'aydi.” Bu satrning quyidagi o'qish yoki ballar bilan aloqasi yo'q."
          }
        ]
      },
      {
        "title": "Kun branchi 子 ushlab turgan stemlarning day stemga nisbatan nima ekanligi",
        "blocks": [
          {
            "p": "Kun branchi — turmush o'rtog'i pozitsiyasi. Day stem 壬 nuqtai nazaridan o'qilganda, branch 子 ushlab turgan stemlar quyidagicha. Asosiy stem (癸) — branchning vakillik energiyasi."
          },
          {
            "table": {
              "caption": "Kun branchi 壬子: hidden stems",
              "head": [
                "Hidden stem",
                "Pozitsiya",
                "Ulush",
                "Day stem 壬 uchun"
              ],
              "rows": [
                [
                  "Yang Suv (壬)",
                  "qoldiq (餘氣)",
                  "{hidJaYeo}",
                  "Hamroh (比肩)"
                ],
                [
                  "Yin Suv (癸)",
                  "asosiy (本氣)",
                  "{hidJaBon}",
                  "Raqib (劫財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Turmush o'rtog'i pozitsiyasi va bu kun ustuni",
        "blocks": [
          {
            "p": "An'anaviy myeongri turmush o'rtog'i pozitsiyasini erkaklar uchun Barqaror boylik (正財), ayollar uchun Nufuz (正官) deb o'qiydi. Day stem 壬 bo'lganda, Barqaror boylik — 丁, Nufuz — 己."
          },
          {
            "p": "Erkaklar uchun turmush o'rtog'i pozitsiyasi (Barqaror boylik) — 丁. 丁 子 ichida saqlanmaydi."
          },
          {
            "p": "Ayollar uchun turmush o'rtog'i pozitsiyasi (Nufuz) — 己. 己 子 ichida saqlanmaydi."
          }
        ]
      },
      {
        "title": "Qo'shni kun ustunlari va ular tarkibidagi belgilar",
        "blocks": [
          {
            "p": "Oltmishlik siklda oldingi kun ustuni — [辛亥](/guide/pillar-sin-hae), keyingisi — [癸丑](/guide/pillar-gye-chuk)."
          },
          {
            "p": "Tarkibi: [Yang Suv (壬)](/guide/stem-im) va [子 (Sichqon)](/guide/branch-ja)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bu qo'llanma nimani aytmaydi",
        "blocks": [
          {
            "ul": [
              "Bitta kun ustuni insonni yoki munosabatni belgilab bermaydi. Saju to'rt ustunning sakkiz belgisi o'zaro qanday bog'lanishidan o'qiladi.",
              "Turmush o'rtog'i pozitsiyasini o'qish an'anaviy myeongri qoidasidan olingan, jinsingizni ko'rsatmasangiz bu pozitsiya o'qilmaydi."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gye-chuk": {
    "eyebrow": "Kun ustunlari",
    "title": "Kun ustuni 癸丑",
    "summary": "Kun ustuni 癸丑 Saju-Link hisoblash qoidalariga ko'ra qanday o'qiladi: kun branchi ushlab turgan stemlarning day stemga nisbatan nima ekanligi — qoidalardagi tartibda aynan shunday keltirilgan.",
    "backLabel": "Hisoblash asosi",
    "sections": [
      {
        "title": "癸丑 — oltmishlik siklda kun ustuni raqami: 50",
        "blocks": [
          {
            "p": "Tug'ilgan kunning stem-branchi 癸丑 bo'lsa, day stem — 癸 (Suv, Yin), kun branchi — 丑 (Sigir). Oltmishlik siklda bu kombinatsiya raqami: 50."
          },
          {
            "p": "Saju-Link day stemi 癸 bo'lgan insonni \"Yin Suv (癸)\" deb ataydi va natija ekrani ko'rsatadigan satr: “Shabnam va yomg'ir. Sokin singib boradi, so'zdan oldin kayfiyatni o'qiydi.” Bu satrning quyidagi o'qish yoki ballar bilan aloqasi yo'q."
          }
        ]
      },
      {
        "title": "Kun branchi 丑 ushlab turgan stemlarning day stemga nisbatan nima ekanligi",
        "blocks": [
          {
            "p": "Kun branchi — turmush o'rtog'i pozitsiyasi. Day stem 癸 nuqtai nazaridan o'qilganda, branch 丑 ushlab turgan stemlar quyidagicha. Asosiy stem (己) — branchning vakillik energiyasi."
          },
          {
            "table": {
              "caption": "Kun branchi 癸丑: hidden stems",
              "head": [
                "Hidden stem",
                "Pozitsiya",
                "Ulush",
                "Day stem 癸 uchun"
              ],
              "rows": [
                [
                  "Yin Suv (癸)",
                  "qoldiq (餘氣)",
                  "{hidChukYeo}",
                  "Hamroh (比肩)"
                ],
                [
                  "Yin Metall (辛)",
                  "o'rta (中氣)",
                  "{hidChukJung}",
                  "Noodatiy tayanch (偏印)"
                ],
                [
                  "Yin Tuproq (己)",
                  "asosiy (本氣)",
                  "{hidChukBon}",
                  "Sinovchi (偏官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Turmush o'rtog'i pozitsiyasi va bu kun ustuni",
        "blocks": [
          {
            "p": "An'anaviy myeongri turmush o'rtog'i pozitsiyasini erkaklar uchun Barqaror boylik (正財), ayollar uchun Nufuz (正官) deb o'qiydi. Day stem 癸 bo'lganda, Barqaror boylik — 丙, Nufuz — 戊."
          },
          {
            "p": "Erkaklar uchun turmush o'rtog'i pozitsiyasi (Barqaror boylik) — 丙. 丙 丑 ichida saqlanmaydi."
          },
          {
            "p": "Ayollar uchun turmush o'rtog'i pozitsiyasi (Nufuz) — 戊. 戊 丑 ichida saqlanmaydi."
          }
        ]
      },
      {
        "title": "Qo'shni kun ustunlari va ular tarkibidagi belgilar",
        "blocks": [
          {
            "p": "Oltmishlik siklda oldingi kun ustuni — [壬子](/guide/pillar-im-ja), keyingisi — [甲寅](/guide/pillar-gap-in)."
          },
          {
            "p": "Tarkibi: [Yin Suv (癸)](/guide/stem-gye) va [丑 (Sigir)](/guide/branch-chuk)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bu qo'llanma nimani aytmaydi",
        "blocks": [
          {
            "ul": [
              "Bitta kun ustuni insonni yoki munosabatni belgilab bermaydi. Saju to'rt ustunning sakkiz belgisi o'zaro qanday bog'lanishidan o'qiladi.",
              "Turmush o'rtog'i pozitsiyasini o'qish an'anaviy myeongri qoidasidan olingan, jinsingizni ko'rsatmasangiz bu pozitsiya o'qilmaydi."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gap-in": {
    "eyebrow": "Kun ustunlari",
    "title": "Kun ustuni 甲寅",
    "summary": "Kun ustuni 甲寅 Saju-Link hisoblash qoidalariga ko'ra qanday o'qiladi: kun branchi ushlab turgan stemlarning day stemga nisbatan nima ekanligi — qoidalardagi tartibda aynan shunday keltirilgan.",
    "backLabel": "Hisoblash asosi",
    "sections": [
      {
        "title": "甲寅 — oltmishlik siklda kun ustuni raqami: 51",
        "blocks": [
          {
            "p": "Tug'ilgan kunning stem-branchi 甲寅 bo'lsa, day stem — 甲 (Yog'och, Yang), kun branchi — 寅 (Yo'lbars). Oltmishlik siklda bu kombinatsiya raqami: 51."
          },
          {
            "p": "Saju-Link day stemi 甲 bo'lgan insonni \"Yang Yog'och (甲)\" deb ataydi va natija ekrani ko'rsatadigan satr: “Tik o'sadigan baland daraxt. Yo'nalish belgilangach chayqalmaydi va egilishdan ko'ra chidashni tanlaydi.” Bu satrning quyidagi o'qish yoki ballar bilan aloqasi yo'q."
          }
        ]
      },
      {
        "title": "Kun branchi 寅 ushlab turgan stemlarning day stemga nisbatan nima ekanligi",
        "blocks": [
          {
            "p": "Kun branchi — turmush o'rtog'i pozitsiyasi. Day stem 甲 nuqtai nazaridan o'qilganda, branch 寅 ushlab turgan stemlar quyidagicha. Asosiy stem (甲) — branchning vakillik energiyasi."
          },
          {
            "table": {
              "caption": "Kun branchi 甲寅: hidden stems",
              "head": [
                "Hidden stem",
                "Pozitsiya",
                "Ulush",
                "Day stem 甲 uchun"
              ],
              "rows": [
                [
                  "Yang Tuproq (戊)",
                  "qoldiq (餘氣)",
                  "{hidInYeo}",
                  "Kutilmagan boylik (偏財)"
                ],
                [
                  "Yang Olov (丙)",
                  "o'rta (中氣)",
                  "{hidInJung}",
                  "Ifoda (食神)"
                ],
                [
                  "Yang Yog'och (甲)",
                  "asosiy (本氣)",
                  "{hidInBon}",
                  "Hamroh (比肩)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Turmush o'rtog'i pozitsiyasi va bu kun ustuni",
        "blocks": [
          {
            "p": "An'anaviy myeongri turmush o'rtog'i pozitsiyasini erkaklar uchun Barqaror boylik (正財), ayollar uchun Nufuz (正官) deb o'qiydi. Day stem 甲 bo'lganda, Barqaror boylik — 己, Nufuz — 辛."
          },
          {
            "p": "Erkaklar uchun turmush o'rtog'i pozitsiyasi (Barqaror boylik) — 己. 己 寅 ichida saqlanmaydi."
          },
          {
            "p": "Ayollar uchun turmush o'rtog'i pozitsiyasi (Nufuz) — 辛. 辛 寅 ichida saqlanmaydi."
          }
        ]
      },
      {
        "title": "Qo'shni kun ustunlari va ular tarkibidagi belgilar",
        "blocks": [
          {
            "p": "Oltmishlik siklda oldingi kun ustuni — [癸丑](/guide/pillar-gye-chuk), keyingisi — [乙卯](/guide/pillar-eul-myo)."
          },
          {
            "p": "Tarkibi: [Yang Yog'och (甲)](/guide/stem-gap) va [寅 (Yo'lbars)](/guide/branch-in)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bu qo'llanma nimani aytmaydi",
        "blocks": [
          {
            "ul": [
              "Bitta kun ustuni insonni yoki munosabatni belgilab bermaydi. Saju to'rt ustunning sakkiz belgisi o'zaro qanday bog'lanishidan o'qiladi.",
              "Turmush o'rtog'i pozitsiyasini o'qish an'anaviy myeongri qoidasidan olingan, jinsingizni ko'rsatmasangiz bu pozitsiya o'qilmaydi."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-eul-myo": {
    "eyebrow": "Kun ustunlari",
    "title": "Kun ustuni 乙卯",
    "summary": "Kun ustuni 乙卯 Saju-Link hisoblash qoidalariga ko'ra qanday o'qiladi: kun branchi ushlab turgan stemlarning day stemga nisbatan nima ekanligi — qoidalardagi tartibda aynan shunday keltirilgan.",
    "backLabel": "Hisoblash asosi",
    "sections": [
      {
        "title": "乙卯 — oltmishlik siklda kun ustuni raqami: 52",
        "blocks": [
          {
            "p": "Tug'ilgan kunning stem-branchi 乙卯 bo'lsa, day stem — 乙 (Yog'och, Yin), kun branchi — 卯 (Quyon). Oltmishlik siklda bu kombinatsiya raqami: 52."
          },
          {
            "p": "Saju-Link day stemi 乙 bo'lgan insonni \"Yin Yog'och (乙)\" deb ataydi va natija ekrani ko'rsatadigan satr: “Chirmovuq kabi egiluvchan o't. Sharoitga qarab egiladi-yu, oldinga yuraveradi va uzilmaydi.” Bu satrning quyidagi o'qish yoki ballar bilan aloqasi yo'q."
          }
        ]
      },
      {
        "title": "Kun branchi 卯 ushlab turgan stemlarning day stemga nisbatan nima ekanligi",
        "blocks": [
          {
            "p": "Kun branchi — turmush o'rtog'i pozitsiyasi. Day stem 乙 nuqtai nazaridan o'qilganda, branch 卯 ushlab turgan stemlar quyidagicha. Asosiy stem (乙) — branchning vakillik energiyasi."
          },
          {
            "table": {
              "caption": "Kun branchi 乙卯: hidden stems",
              "head": [
                "Hidden stem",
                "Pozitsiya",
                "Ulush",
                "Day stem 乙 uchun"
              ],
              "rows": [
                [
                  "Yang Yog'och (甲)",
                  "qoldiq (餘氣)",
                  "{hidMyoYeo}",
                  "Raqib (劫財)"
                ],
                [
                  "Yin Yog'och (乙)",
                  "asosiy (本氣)",
                  "{hidMyoBon}",
                  "Hamroh (比肩)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Turmush o'rtog'i pozitsiyasi va bu kun ustuni",
        "blocks": [
          {
            "p": "An'anaviy myeongri turmush o'rtog'i pozitsiyasini erkaklar uchun Barqaror boylik (正財), ayollar uchun Nufuz (正官) deb o'qiydi. Day stem 乙 bo'lganda, Barqaror boylik — 戊, Nufuz — 庚."
          },
          {
            "p": "Erkaklar uchun turmush o'rtog'i pozitsiyasi (Barqaror boylik) — 戊. 戊 卯 ichida saqlanmaydi."
          },
          {
            "p": "Ayollar uchun turmush o'rtog'i pozitsiyasi (Nufuz) — 庚. 庚 卯 ichida saqlanmaydi."
          }
        ]
      },
      {
        "title": "Qo'shni kun ustunlari va ular tarkibidagi belgilar",
        "blocks": [
          {
            "p": "Oltmishlik siklda oldingi kun ustuni — [甲寅](/guide/pillar-gap-in), keyingisi — [丙辰](/guide/pillar-byeong-jin)."
          },
          {
            "p": "Tarkibi: [Yin Yog'och (乙)](/guide/stem-eul) va [卯 (Quyon)](/guide/branch-myo)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bu qo'llanma nimani aytmaydi",
        "blocks": [
          {
            "ul": [
              "Bitta kun ustuni insonni yoki munosabatni belgilab bermaydi. Saju to'rt ustunning sakkiz belgisi o'zaro qanday bog'lanishidan o'qiladi.",
              "Turmush o'rtog'i pozitsiyasini o'qish an'anaviy myeongri qoidasidan olingan, jinsingizni ko'rsatmasangiz bu pozitsiya o'qilmaydi."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-byeong-jin": {
    "eyebrow": "Kun ustunlari",
    "title": "Kun ustuni 丙辰",
    "summary": "Kun ustuni 丙辰 Saju-Link hisoblash qoidalariga ko'ra qanday o'qiladi: kun branchi ushlab turgan stemlarning day stemga nisbatan nima ekanligi — qoidalardagi tartibda aynan shunday keltirilgan.",
    "backLabel": "Hisoblash asosi",
    "sections": [
      {
        "title": "丙辰 — oltmishlik siklda kun ustuni raqami: 53",
        "blocks": [
          {
            "p": "Tug'ilgan kunning stem-branchi 丙辰 bo'lsa, day stem — 丙 (Olov, Yang), kun branchi — 辰 (Ajdar). Oltmishlik siklda bu kombinatsiya raqami: 53."
          },
          {
            "p": "Saju-Link day stemi 丙 bo'lgan insonni \"Yang Olov (丙)\" deb ataydi va natija ekrani ko'rsatadigan satr: “Tush paytidagi quyosh. Hissiyot ochiq ko'rinadi, atrof yorishadi, oldinga chiqish tabiiy keladi.” Bu satrning quyidagi o'qish yoki ballar bilan aloqasi yo'q."
          }
        ]
      },
      {
        "title": "Kun branchi 辰 ushlab turgan stemlarning day stemga nisbatan nima ekanligi",
        "blocks": [
          {
            "p": "Kun branchi — turmush o'rtog'i pozitsiyasi. Day stem 丙 nuqtai nazaridan o'qilganda, branch 辰 ushlab turgan stemlar quyidagicha. Asosiy stem (戊) — branchning vakillik energiyasi."
          },
          {
            "table": {
              "caption": "Kun branchi 丙辰: hidden stems",
              "head": [
                "Hidden stem",
                "Pozitsiya",
                "Ulush",
                "Day stem 丙 uchun"
              ],
              "rows": [
                [
                  "Yin Yog'och (乙)",
                  "qoldiq (餘氣)",
                  "{hidJinYeo}",
                  "G'amxo'rlik (正印)"
                ],
                [
                  "Yin Suv (癸)",
                  "o'rta (中氣)",
                  "{hidJinJung}",
                  "Nufuz (正官)"
                ],
                [
                  "Yang Tuproq (戊)",
                  "asosiy (本氣)",
                  "{hidJinBon}",
                  "Ifoda (食神)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Turmush o'rtog'i pozitsiyasi va bu kun ustuni",
        "blocks": [
          {
            "p": "An'anaviy myeongri turmush o'rtog'i pozitsiyasini erkaklar uchun Barqaror boylik (正財), ayollar uchun Nufuz (正官) deb o'qiydi. Day stem 丙 bo'lganda, Barqaror boylik — 辛, Nufuz — 癸."
          },
          {
            "p": "Erkaklar uchun turmush o'rtog'i pozitsiyasi (Barqaror boylik) — 辛. 辛 辰 ichida saqlanmaydi."
          },
          {
            "p": "Ayollar uchun turmush o'rtog'i pozitsiyasi (Nufuz) — 癸. 癸 辰 ichida saqlanadi (o'rta (中氣))."
          }
        ]
      },
      {
        "title": "Qo'shni kun ustunlari va ular tarkibidagi belgilar",
        "blocks": [
          {
            "p": "Oltmishlik siklda oldingi kun ustuni — [乙卯](/guide/pillar-eul-myo), keyingisi — [丁巳](/guide/pillar-jeong-sa)."
          },
          {
            "p": "Tarkibi: [Yang Olov (丙)](/guide/stem-byeong) va [辰 (Ajdar)](/guide/branch-jin)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bu qo'llanma nimani aytmaydi",
        "blocks": [
          {
            "ul": [
              "Bitta kun ustuni insonni yoki munosabatni belgilab bermaydi. Saju to'rt ustunning sakkiz belgisi o'zaro qanday bog'lanishidan o'qiladi.",
              "Turmush o'rtog'i pozitsiyasini o'qish an'anaviy myeongri qoidasidan olingan, jinsingizni ko'rsatmasangiz bu pozitsiya o'qilmaydi."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-jeong-sa": {
    "eyebrow": "Kun ustunlari",
    "title": "Kun ustuni 丁巳",
    "summary": "Kun ustuni 丁巳 Saju-Link hisoblash qoidalariga ko'ra qanday o'qiladi: kun branchi ushlab turgan stemlarning day stemga nisbatan nima ekanligi — qoidalardagi tartibda aynan shunday keltirilgan.",
    "backLabel": "Hisoblash asosi",
    "sections": [
      {
        "title": "丁巳 — oltmishlik siklda kun ustuni raqami: 54",
        "blocks": [
          {
            "p": "Tug'ilgan kunning stem-branchi 丁巳 bo'lsa, day stem — 丁 (Olov, Yin), kun branchi — 巳 (Ilon). Oltmishlik siklda bu kombinatsiya raqami: 54."
          },
          {
            "p": "Saju-Link day stemi 丁 bo'lgan insonni \"Yin Olov (丁)\" deb ataydi va natija ekrani ko'rsatadigan satr: “Sham va chiroq yorug'i. Sokin va uzoq yonadi, avvalo eng yaqinlarini isitadi.” Bu satrning quyidagi o'qish yoki ballar bilan aloqasi yo'q."
          }
        ]
      },
      {
        "title": "Kun branchi 巳 ushlab turgan stemlarning day stemga nisbatan nima ekanligi",
        "blocks": [
          {
            "p": "Kun branchi — turmush o'rtog'i pozitsiyasi. Day stem 丁 nuqtai nazaridan o'qilganda, branch 巳 ushlab turgan stemlar quyidagicha. Asosiy stem (丙) — branchning vakillik energiyasi."
          },
          {
            "table": {
              "caption": "Kun branchi 丁巳: hidden stems",
              "head": [
                "Hidden stem",
                "Pozitsiya",
                "Ulush",
                "Day stem 丁 uchun"
              ],
              "rows": [
                [
                  "Yang Tuproq (戊)",
                  "qoldiq (餘氣)",
                  "{hidSaYeo}",
                  "Buzuvchi (傷官)"
                ],
                [
                  "Yang Metall (庚)",
                  "o'rta (中氣)",
                  "{hidSaJung}",
                  "Barqaror boylik (正財)"
                ],
                [
                  "Yang Olov (丙)",
                  "asosiy (本氣)",
                  "{hidSaBon}",
                  "Raqib (劫財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Turmush o'rtog'i pozitsiyasi va bu kun ustuni",
        "blocks": [
          {
            "p": "An'anaviy myeongri turmush o'rtog'i pozitsiyasini erkaklar uchun Barqaror boylik (正財), ayollar uchun Nufuz (正官) deb o'qiydi. Day stem 丁 bo'lganda, Barqaror boylik — 庚, Nufuz — 壬."
          },
          {
            "p": "Erkaklar uchun turmush o'rtog'i pozitsiyasi (Barqaror boylik) — 庚. 庚 巳 ichida saqlanadi (o'rta (中氣))."
          },
          {
            "p": "Ayollar uchun turmush o'rtog'i pozitsiyasi (Nufuz) — 壬. 壬 巳 ichida saqlanmaydi."
          }
        ]
      },
      {
        "title": "Qo'shni kun ustunlari va ular tarkibidagi belgilar",
        "blocks": [
          {
            "p": "Oltmishlik siklda oldingi kun ustuni — [丙辰](/guide/pillar-byeong-jin), keyingisi — [戊午](/guide/pillar-mu-o)."
          },
          {
            "p": "Tarkibi: [Yin Olov (丁)](/guide/stem-jeong) va [巳 (Ilon)](/guide/branch-sa)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bu qo'llanma nimani aytmaydi",
        "blocks": [
          {
            "ul": [
              "Bitta kun ustuni insonni yoki munosabatni belgilab bermaydi. Saju to'rt ustunning sakkiz belgisi o'zaro qanday bog'lanishidan o'qiladi.",
              "Turmush o'rtog'i pozitsiyasini o'qish an'anaviy myeongri qoidasidan olingan, jinsingizni ko'rsatmasangiz bu pozitsiya o'qilmaydi."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-mu-o": {
    "eyebrow": "Kun ustunlari",
    "title": "Kun ustuni 戊午",
    "summary": "Kun ustuni 戊午 Saju-Link hisoblash qoidalariga ko'ra qanday o'qiladi: kun branchi ushlab turgan stemlarning day stemga nisbatan nima ekanligi — qoidalardagi tartibda aynan shunday keltirilgan.",
    "backLabel": "Hisoblash asosi",
    "sections": [
      {
        "title": "戊午 — oltmishlik siklda kun ustuni raqami: 55",
        "blocks": [
          {
            "p": "Tug'ilgan kunning stem-branchi 戊午 bo'lsa, day stem — 戊 (Tuproq, Yang), kun branchi — 午 (Ot). Oltmishlik siklda bu kombinatsiya raqami: 55."
          },
          {
            "p": "Saju-Link day stemi 戊 bo'lgan insonni \"Yang Tuproq (戊)\" deb ataydi va natija ekrani ko'rsatadigan satr: “Keng dala va tog'. Silkitish qiyin, suyanish oson, ammo qabul qilingan qarorni o'zgartirishga shoshmaydi.” Bu satrning quyidagi o'qish yoki ballar bilan aloqasi yo'q."
          }
        ]
      },
      {
        "title": "Kun branchi 午 ushlab turgan stemlarning day stemga nisbatan nima ekanligi",
        "blocks": [
          {
            "p": "Kun branchi — turmush o'rtog'i pozitsiyasi. Day stem 戊 nuqtai nazaridan o'qilganda, branch 午 ushlab turgan stemlar quyidagicha. Asosiy stem (丁) — branchning vakillik energiyasi."
          },
          {
            "table": {
              "caption": "Kun branchi 戊午: hidden stems",
              "head": [
                "Hidden stem",
                "Pozitsiya",
                "Ulush",
                "Day stem 戊 uchun"
              ],
              "rows": [
                [
                  "Yang Olov (丙)",
                  "qoldiq (餘氣)",
                  "{hidOYeo}",
                  "Noodatiy tayanch (偏印)"
                ],
                [
                  "Yin Tuproq (己)",
                  "o'rta (中氣)",
                  "{hidOJung}",
                  "Raqib (劫財)"
                ],
                [
                  "Yin Olov (丁)",
                  "asosiy (本氣)",
                  "{hidOBon}",
                  "G'amxo'rlik (正印)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Turmush o'rtog'i pozitsiyasi va bu kun ustuni",
        "blocks": [
          {
            "p": "An'anaviy myeongri turmush o'rtog'i pozitsiyasini erkaklar uchun Barqaror boylik (正財), ayollar uchun Nufuz (正官) deb o'qiydi. Day stem 戊 bo'lganda, Barqaror boylik — 癸, Nufuz — 乙."
          },
          {
            "p": "Erkaklar uchun turmush o'rtog'i pozitsiyasi (Barqaror boylik) — 癸. 癸 午 ichida saqlanmaydi."
          },
          {
            "p": "Ayollar uchun turmush o'rtog'i pozitsiyasi (Nufuz) — 乙. 乙 午 ichida saqlanmaydi."
          }
        ]
      },
      {
        "title": "Qo'shni kun ustunlari va ular tarkibidagi belgilar",
        "blocks": [
          {
            "p": "Oltmishlik siklda oldingi kun ustuni — [丁巳](/guide/pillar-jeong-sa), keyingisi — [己未](/guide/pillar-gi-mi)."
          },
          {
            "p": "Tarkibi: [Yang Tuproq (戊)](/guide/stem-mu) va [午 (Ot)](/guide/branch-o)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bu qo'llanma nimani aytmaydi",
        "blocks": [
          {
            "ul": [
              "Bitta kun ustuni insonni yoki munosabatni belgilab bermaydi. Saju to'rt ustunning sakkiz belgisi o'zaro qanday bog'lanishidan o'qiladi.",
              "Turmush o'rtog'i pozitsiyasini o'qish an'anaviy myeongri qoidasidan olingan, jinsingizni ko'rsatmasangiz bu pozitsiya o'qilmaydi."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gi-mi": {
    "eyebrow": "Kun ustunlari",
    "title": "Kun ustuni 己未",
    "summary": "Kun ustuni 己未 Saju-Link hisoblash qoidalariga ko'ra qanday o'qiladi: kun branchi ushlab turgan stemlarning day stemga nisbatan nima ekanligi — qoidalardagi tartibda aynan shunday keltirilgan.",
    "backLabel": "Hisoblash asosi",
    "sections": [
      {
        "title": "己未 — oltmishlik siklda kun ustuni raqami: 56",
        "blocks": [
          {
            "p": "Tug'ilgan kunning stem-branchi 己未 bo'lsa, day stem — 己 (Tuproq, Yin), kun branchi — 未 (Qo'y). Oltmishlik siklda bu kombinatsiya raqami: 56."
          },
          {
            "p": "Saju-Link day stemi 己 bo'lgan insonni \"Yin Tuproq (己)\" deb ataydi va natija ekrani ko'rsatadigan satr: “Ekin tuprog'i. Nima kelsa qabul qilib o'stiradi, ko'z-ko'z qilishdan ko'ra parvarishga yaqin.” Bu satrning quyidagi o'qish yoki ballar bilan aloqasi yo'q."
          }
        ]
      },
      {
        "title": "Kun branchi 未 ushlab turgan stemlarning day stemga nisbatan nima ekanligi",
        "blocks": [
          {
            "p": "Kun branchi — turmush o'rtog'i pozitsiyasi. Day stem 己 nuqtai nazaridan o'qilganda, branch 未 ushlab turgan stemlar quyidagicha. Asosiy stem (己) — branchning vakillik energiyasi."
          },
          {
            "table": {
              "caption": "Kun branchi 己未: hidden stems",
              "head": [
                "Hidden stem",
                "Pozitsiya",
                "Ulush",
                "Day stem 己 uchun"
              ],
              "rows": [
                [
                  "Yin Olov (丁)",
                  "qoldiq (餘氣)",
                  "{hidMiYeo}",
                  "Noodatiy tayanch (偏印)"
                ],
                [
                  "Yin Yog'och (乙)",
                  "o'rta (中氣)",
                  "{hidMiJung}",
                  "Sinovchi (偏官)"
                ],
                [
                  "Yin Tuproq (己)",
                  "asosiy (本氣)",
                  "{hidMiBon}",
                  "Hamroh (比肩)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Turmush o'rtog'i pozitsiyasi va bu kun ustuni",
        "blocks": [
          {
            "p": "An'anaviy myeongri turmush o'rtog'i pozitsiyasini erkaklar uchun Barqaror boylik (正財), ayollar uchun Nufuz (正官) deb o'qiydi. Day stem 己 bo'lganda, Barqaror boylik — 壬, Nufuz — 甲."
          },
          {
            "p": "Erkaklar uchun turmush o'rtog'i pozitsiyasi (Barqaror boylik) — 壬. 壬 未 ichida saqlanmaydi."
          },
          {
            "p": "Ayollar uchun turmush o'rtog'i pozitsiyasi (Nufuz) — 甲. 甲 未 ichida saqlanmaydi."
          }
        ]
      },
      {
        "title": "Qo'shni kun ustunlari va ular tarkibidagi belgilar",
        "blocks": [
          {
            "p": "Oltmishlik siklda oldingi kun ustuni — [戊午](/guide/pillar-mu-o), keyingisi — [庚申](/guide/pillar-gyeong-sin)."
          },
          {
            "p": "Tarkibi: [Yin Tuproq (己)](/guide/stem-gi) va [未 (Qo'y)](/guide/branch-mi)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bu qo'llanma nimani aytmaydi",
        "blocks": [
          {
            "ul": [
              "Bitta kun ustuni insonni yoki munosabatni belgilab bermaydi. Saju to'rt ustunning sakkiz belgisi o'zaro qanday bog'lanishidan o'qiladi.",
              "Turmush o'rtog'i pozitsiyasini o'qish an'anaviy myeongri qoidasidan olingan, jinsingizni ko'rsatmasangiz bu pozitsiya o'qilmaydi."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gyeong-sin": {
    "eyebrow": "Kun ustunlari",
    "title": "Kun ustuni 庚申",
    "summary": "Kun ustuni 庚申 Saju-Link hisoblash qoidalariga ko'ra qanday o'qiladi: kun branchi ushlab turgan stemlarning day stemga nisbatan nima ekanligi — qoidalardagi tartibda aynan shunday keltirilgan.",
    "backLabel": "Hisoblash asosi",
    "sections": [
      {
        "title": "庚申 — oltmishlik siklda kun ustuni raqami: 57",
        "blocks": [
          {
            "p": "Tug'ilgan kunning stem-branchi 庚申 bo'lsa, day stem — 庚 (Metall, Yang), kun branchi — 申 (Maymun). Oltmishlik siklda bu kombinatsiya raqami: 57."
          },
          {
            "p": "Saju-Link day stemi 庚 bo'lgan insonni \"Yang Metall (庚)\" deb ataydi va natija ekrani ko'rsatadigan satr: “Ishlov ko'rmagan temir. Qat'iy va aniq, osilib qolgan ishlarga sabri yo'q.” Bu satrning quyidagi o'qish yoki ballar bilan aloqasi yo'q."
          }
        ]
      },
      {
        "title": "Kun branchi 申 ushlab turgan stemlarning day stemga nisbatan nima ekanligi",
        "blocks": [
          {
            "p": "Kun branchi — turmush o'rtog'i pozitsiyasi. Day stem 庚 nuqtai nazaridan o'qilganda, branch 申 ushlab turgan stemlar quyidagicha. Asosiy stem (庚) — branchning vakillik energiyasi."
          },
          {
            "table": {
              "caption": "Kun branchi 庚申: hidden stems",
              "head": [
                "Hidden stem",
                "Pozitsiya",
                "Ulush",
                "Day stem 庚 uchun"
              ],
              "rows": [
                [
                  "Yang Tuproq (戊)",
                  "qoldiq (餘氣)",
                  "{hidSinYeo}",
                  "Noodatiy tayanch (偏印)"
                ],
                [
                  "Yang Suv (壬)",
                  "o'rta (中氣)",
                  "{hidSinJung}",
                  "Ifoda (食神)"
                ],
                [
                  "Yang Metall (庚)",
                  "asosiy (本氣)",
                  "{hidSinBon}",
                  "Hamroh (比肩)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Turmush o'rtog'i pozitsiyasi va bu kun ustuni",
        "blocks": [
          {
            "p": "An'anaviy myeongri turmush o'rtog'i pozitsiyasini erkaklar uchun Barqaror boylik (正財), ayollar uchun Nufuz (正官) deb o'qiydi. Day stem 庚 bo'lganda, Barqaror boylik — 乙, Nufuz — 丁."
          },
          {
            "p": "Erkaklar uchun turmush o'rtog'i pozitsiyasi (Barqaror boylik) — 乙. 乙 申 ichida saqlanmaydi."
          },
          {
            "p": "Ayollar uchun turmush o'rtog'i pozitsiyasi (Nufuz) — 丁. 丁 申 ichida saqlanmaydi."
          }
        ]
      },
      {
        "title": "Qo'shni kun ustunlari va ular tarkibidagi belgilar",
        "blocks": [
          {
            "p": "Oltmishlik siklda oldingi kun ustuni — [己未](/guide/pillar-gi-mi), keyingisi — [辛酉](/guide/pillar-sin-yu)."
          },
          {
            "p": "Tarkibi: [Yang Metall (庚)](/guide/stem-gyeong) va [申 (Maymun)](/guide/branch-sin)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bu qo'llanma nimani aytmaydi",
        "blocks": [
          {
            "ul": [
              "Bitta kun ustuni insonni yoki munosabatni belgilab bermaydi. Saju to'rt ustunning sakkiz belgisi o'zaro qanday bog'lanishidan o'qiladi.",
              "Turmush o'rtog'i pozitsiyasini o'qish an'anaviy myeongri qoidasidan olingan, jinsingizni ko'rsatmasangiz bu pozitsiya o'qilmaydi."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-sin-yu": {
    "eyebrow": "Kun ustunlari",
    "title": "Kun ustuni 辛酉",
    "summary": "Kun ustuni 辛酉 Saju-Link hisoblash qoidalariga ko'ra qanday o'qiladi: kun branchi ushlab turgan stemlarning day stemga nisbatan nima ekanligi — qoidalardagi tartibda aynan shunday keltirilgan.",
    "backLabel": "Hisoblash asosi",
    "sections": [
      {
        "title": "辛酉 — oltmishlik siklda kun ustuni raqami: 58",
        "blocks": [
          {
            "p": "Tug'ilgan kunning stem-branchi 辛酉 bo'lsa, day stem — 辛 (Metall, Yin), kun branchi — 酉 (Xo'roz). Oltmishlik siklda bu kombinatsiya raqami: 58."
          },
          {
            "p": "Saju-Link day stemi 辛 bo'lgan insonni \"Yin Metall (辛)\" deb ataydi va natija ekrani ko'rsatadigan satr: “Sayqallangan qimmatbaho tosh. Nozik did va yuqori talab; uvol qilingan ishni e'tiborsiz qoldirmaydi.” Bu satrning quyidagi o'qish yoki ballar bilan aloqasi yo'q."
          }
        ]
      },
      {
        "title": "Kun branchi 酉 ushlab turgan stemlarning day stemga nisbatan nima ekanligi",
        "blocks": [
          {
            "p": "Kun branchi — turmush o'rtog'i pozitsiyasi. Day stem 辛 nuqtai nazaridan o'qilganda, branch 酉 ushlab turgan stemlar quyidagicha. Asosiy stem (辛) — branchning vakillik energiyasi."
          },
          {
            "table": {
              "caption": "Kun branchi 辛酉: hidden stems",
              "head": [
                "Hidden stem",
                "Pozitsiya",
                "Ulush",
                "Day stem 辛 uchun"
              ],
              "rows": [
                [
                  "Yang Metall (庚)",
                  "qoldiq (餘氣)",
                  "{hidYuYeo}",
                  "Raqib (劫財)"
                ],
                [
                  "Yin Metall (辛)",
                  "asosiy (本氣)",
                  "{hidYuBon}",
                  "Hamroh (比肩)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Turmush o'rtog'i pozitsiyasi va bu kun ustuni",
        "blocks": [
          {
            "p": "An'anaviy myeongri turmush o'rtog'i pozitsiyasini erkaklar uchun Barqaror boylik (正財), ayollar uchun Nufuz (正官) deb o'qiydi. Day stem 辛 bo'lganda, Barqaror boylik — 甲, Nufuz — 丙."
          },
          {
            "p": "Erkaklar uchun turmush o'rtog'i pozitsiyasi (Barqaror boylik) — 甲. 甲 酉 ichida saqlanmaydi."
          },
          {
            "p": "Ayollar uchun turmush o'rtog'i pozitsiyasi (Nufuz) — 丙. 丙 酉 ichida saqlanmaydi."
          }
        ]
      },
      {
        "title": "Qo'shni kun ustunlari va ular tarkibidagi belgilar",
        "blocks": [
          {
            "p": "Oltmishlik siklda oldingi kun ustuni — [庚申](/guide/pillar-gyeong-sin), keyingisi — [壬戌](/guide/pillar-im-sul)."
          },
          {
            "p": "Tarkibi: [Yin Metall (辛)](/guide/stem-sin) va [酉 (Xo'roz)](/guide/branch-yu)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bu qo'llanma nimani aytmaydi",
        "blocks": [
          {
            "ul": [
              "Bitta kun ustuni insonni yoki munosabatni belgilab bermaydi. Saju to'rt ustunning sakkiz belgisi o'zaro qanday bog'lanishidan o'qiladi.",
              "Turmush o'rtog'i pozitsiyasini o'qish an'anaviy myeongri qoidasidan olingan, jinsingizni ko'rsatmasangiz bu pozitsiya o'qilmaydi."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-im-sul": {
    "eyebrow": "Kun ustunlari",
    "title": "Kun ustuni 壬戌",
    "summary": "Kun ustuni 壬戌 Saju-Link hisoblash qoidalariga ko'ra qanday o'qiladi: kun branchi ushlab turgan stemlarning day stemga nisbatan nima ekanligi — qoidalardagi tartibda aynan shunday keltirilgan.",
    "backLabel": "Hisoblash asosi",
    "sections": [
      {
        "title": "壬戌 — oltmishlik siklda kun ustuni raqami: 59",
        "blocks": [
          {
            "p": "Tug'ilgan kunning stem-branchi 壬戌 bo'lsa, day stem — 壬 (Suv, Yang), kun branchi — 戌 (It). Oltmishlik siklda bu kombinatsiya raqami: 59."
          },
          {
            "p": "Saju-Link day stemi 壬 bo'lgan insonni \"Yang Suv (壬)\" deb ataydi va natija ekrani ko'rsatadigan satr: “Daryo va dengiz. Qarashi keng, narsalarning qay tomonga oqayotganini ilg'aydi.” Bu satrning quyidagi o'qish yoki ballar bilan aloqasi yo'q."
          }
        ]
      },
      {
        "title": "Kun branchi 戌 ushlab turgan stemlarning day stemga nisbatan nima ekanligi",
        "blocks": [
          {
            "p": "Kun branchi — turmush o'rtog'i pozitsiyasi. Day stem 壬 nuqtai nazaridan o'qilganda, branch 戌 ushlab turgan stemlar quyidagicha. Asosiy stem (戊) — branchning vakillik energiyasi."
          },
          {
            "table": {
              "caption": "Kun branchi 壬戌: hidden stems",
              "head": [
                "Hidden stem",
                "Pozitsiya",
                "Ulush",
                "Day stem 壬 uchun"
              ],
              "rows": [
                [
                  "Yin Metall (辛)",
                  "qoldiq (餘氣)",
                  "{hidSulYeo}",
                  "G'amxo'rlik (正印)"
                ],
                [
                  "Yin Olov (丁)",
                  "o'rta (中氣)",
                  "{hidSulJung}",
                  "Barqaror boylik (正財)"
                ],
                [
                  "Yang Tuproq (戊)",
                  "asosiy (本氣)",
                  "{hidSulBon}",
                  "Sinovchi (偏官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Turmush o'rtog'i pozitsiyasi va bu kun ustuni",
        "blocks": [
          {
            "p": "An'anaviy myeongri turmush o'rtog'i pozitsiyasini erkaklar uchun Barqaror boylik (正財), ayollar uchun Nufuz (正官) deb o'qiydi. Day stem 壬 bo'lganda, Barqaror boylik — 丁, Nufuz — 己."
          },
          {
            "p": "Erkaklar uchun turmush o'rtog'i pozitsiyasi (Barqaror boylik) — 丁. 丁 戌 ichida saqlanadi (o'rta (中氣))."
          },
          {
            "p": "Ayollar uchun turmush o'rtog'i pozitsiyasi (Nufuz) — 己. 己 戌 ichida saqlanmaydi."
          }
        ]
      },
      {
        "title": "Qo'shni kun ustunlari va ular tarkibidagi belgilar",
        "blocks": [
          {
            "p": "Oltmishlik siklda oldingi kun ustuni — [辛酉](/guide/pillar-sin-yu), keyingisi — [癸亥](/guide/pillar-gye-hae)."
          },
          {
            "p": "Tarkibi: [Yang Suv (壬)](/guide/stem-im) va [戌 (It)](/guide/branch-sul)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bu qo'llanma nimani aytmaydi",
        "blocks": [
          {
            "ul": [
              "Bitta kun ustuni insonni yoki munosabatni belgilab bermaydi. Saju to'rt ustunning sakkiz belgisi o'zaro qanday bog'lanishidan o'qiladi.",
              "Turmush o'rtog'i pozitsiyasini o'qish an'anaviy myeongri qoidasidan olingan, jinsingizni ko'rsatmasangiz bu pozitsiya o'qilmaydi."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gye-hae": {
    "eyebrow": "Kun ustunlari",
    "title": "Kun ustuni 癸亥",
    "summary": "Kun ustuni 癸亥 Saju-Link hisoblash qoidalariga ko'ra qanday o'qiladi: kun branchi ushlab turgan stemlarning day stemga nisbatan nima ekanligi — qoidalardagi tartibda aynan shunday keltirilgan.",
    "backLabel": "Hisoblash asosi",
    "sections": [
      {
        "title": "癸亥 — oltmishlik siklda kun ustuni raqami: 60",
        "blocks": [
          {
            "p": "Tug'ilgan kunning stem-branchi 癸亥 bo'lsa, day stem — 癸 (Suv, Yin), kun branchi — 亥 (Cho'chqa). Oltmishlik siklda bu kombinatsiya raqami: 60."
          },
          {
            "p": "Saju-Link day stemi 癸 bo'lgan insonni \"Yin Suv (癸)\" deb ataydi va natija ekrani ko'rsatadigan satr: “Shabnam va yomg'ir. Sokin singib boradi, so'zdan oldin kayfiyatni o'qiydi.” Bu satrning quyidagi o'qish yoki ballar bilan aloqasi yo'q."
          }
        ]
      },
      {
        "title": "Kun branchi 亥 ushlab turgan stemlarning day stemga nisbatan nima ekanligi",
        "blocks": [
          {
            "p": "Kun branchi — turmush o'rtog'i pozitsiyasi. Day stem 癸 nuqtai nazaridan o'qilganda, branch 亥 ushlab turgan stemlar quyidagicha. Asosiy stem (壬) — branchning vakillik energiyasi."
          },
          {
            "table": {
              "caption": "Kun branchi 癸亥: hidden stems",
              "head": [
                "Hidden stem",
                "Pozitsiya",
                "Ulush",
                "Day stem 癸 uchun"
              ],
              "rows": [
                [
                  "Yang Tuproq (戊)",
                  "qoldiq (餘氣)",
                  "{hidHaeYeo}",
                  "Nufuz (正官)"
                ],
                [
                  "Yang Yog'och (甲)",
                  "o'rta (中氣)",
                  "{hidHaeJung}",
                  "Buzuvchi (傷官)"
                ],
                [
                  "Yang Suv (壬)",
                  "asosiy (本氣)",
                  "{hidHaeBon}",
                  "Raqib (劫財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Turmush o'rtog'i pozitsiyasi va bu kun ustuni",
        "blocks": [
          {
            "p": "An'anaviy myeongri turmush o'rtog'i pozitsiyasini erkaklar uchun Barqaror boylik (正財), ayollar uchun Nufuz (正官) deb o'qiydi. Day stem 癸 bo'lganda, Barqaror boylik — 丙, Nufuz — 戊."
          },
          {
            "p": "Erkaklar uchun turmush o'rtog'i pozitsiyasi (Barqaror boylik) — 丙. 丙 亥 ichida saqlanmaydi."
          },
          {
            "p": "Ayollar uchun turmush o'rtog'i pozitsiyasi (Nufuz) — 戊. 戊 亥 ichida saqlanadi (qoldiq (餘氣))."
          }
        ]
      },
      {
        "title": "Qo'shni kun ustunlari va ular tarkibidagi belgilar",
        "blocks": [
          {
            "p": "Oltmishlik siklda oldingi kun ustuni — [壬戌](/guide/pillar-im-sul), keyingisi — [甲子](/guide/pillar-gap-ja)."
          },
          {
            "p": "Tarkibi: [Yin Suv (癸)](/guide/stem-gye) va [亥 (Cho'chqa)](/guide/branch-hae)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bu qo'llanma nimani aytmaydi",
        "blocks": [
          {
            "ul": [
              "Bitta kun ustuni insonni yoki munosabatni belgilab bermaydi. Saju to'rt ustunning sakkiz belgisi o'zaro qanday bog'lanishidan o'qiladi.",
              "Turmush o'rtog'i pozitsiyasini o'qish an'anaviy myeongri qoidasidan olingan, jinsingizni ko'rsatmasangiz bu pozitsiya o'qilmaydi."
            ]
          }
        ]
      }
    ]
  },

  "guide/saju-letters": {
    "eyebrow": "Shu yerdan boshlang",
    "title": "Heavenly stems, earthly branches va kun ustuni — belgilarni qanday o'qish kerak",
    "summary": "Saju chartidagi sakkiz belgi nima ekanini hamda heavenly stems, earthly branches va kun ustuni nimani anglatishini ikkita oddiy jadval bilan tushuntiradi.",
    "backLabel": "Hisoblash asosi",
    "sections": [
      {
        "title": "Saju ikki xil belgi bilan yoziladi",
        "blocks": [
          {
            "p": "Saju chartidagi sakkiz belgi yuqori va pastki belgilarga bo'linadi. Yuqori belgi o'nta **heavenly stem (天干)** dan biri, pastki belgi esa o'n ikkita **earthly branch (地支)** dan biridir."
          },
          {
            "p": "Stemni energiya turining nomi, branchni esa vaqt va joyning nomi deb tasavvur qiling. Hafta kunlari nomlarini yodlamaganingiz kabi, ularni ham yodlash shart emas; pastdagi jadvallardan topib o'qisangiz bo'ladi. To'rt ustun qanday qilib sakkiz belgiga aylanishi [natal chart qo'llanmasi](/guide/natal-chart)da tushuntirilgan."
          }
        ]
      },
      {
        "title": "O'nta heavenly stem",
        "blocks": [
          {
            "p": "O'nta heavenly stem bor. Beshta element (Yog'och, Olov, Tuproq, Metall, Suv) har biri ikkitadan stemni oladi va har bir juftlikda birinchisi Yang (陽), ikkinchisi Yin (陰) bo'ladi."
          },
          {
            "table": {
              "caption": "Element va qutbi bilan o'nta heavenly stem",
              "head": [
                "Heavenly stem",
                "Element va qutb"
              ],
              "rows": [
                [
                  "Yang Yog'och (甲)",
                  "Yog'och Yang"
                ],
                [
                  "Yin Yog'och (乙)",
                  "Yog'och Yin"
                ],
                [
                  "Yang Olov (丙)",
                  "Olov Yang"
                ],
                [
                  "Yin Olov (丁)",
                  "Olov Yin"
                ],
                [
                  "Yang Tuproq (戊)",
                  "Tuproq Yang"
                ],
                [
                  "Yin Tuproq (己)",
                  "Tuproq Yin"
                ],
                [
                  "Yang Metall (庚)",
                  "Metall Yang"
                ],
                [
                  "Yin Metall (辛)",
                  "Metall Yin"
                ],
                [
                  "Yang Suv (壬)",
                  "Suv Yang"
                ],
                [
                  "Yin Suv (癸)",
                  "Suv Yin"
                ]
              ]
            }
          },
          {
            "p": "Siz tug'ilgan kunning stemi **day stem (日干)** deb ataladi va u sizni ko'rsatadigan belgidir."
          }
        ]
      },
      {
        "title": "O'n ikkita earthly branch",
        "blocks": [
          {
            "p": "O'n ikkita earthly branch bor va har biriga zodiak hayvonlaridan biri biriktirilgan. Demak, o'n ikki branch — bu zodiak belgilarining o'zi."
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
          },
          {
            "p": "Branch bitta belgiga o'xshaydi, lekin ichida stemlarni saqlaydi. Ular **hidden stems (支藏干)** deb ataladi. Branch qaysi stemlarni va qancha miqdorda saqlashi har bir branchning lug'at maqolasida ko'rsatilgan. Zodiak hayvoni qanday aniqlanishi haqida [zodiak belgisi qo'llanmasi](/guide/zodiac)ga qarang."
          }
        ]
      },
      {
        "title": "Kun ustuni — stem va branchdan iborat juftlik",
        "blocks": [
          {
            "p": "Saju chartidagi har bir ustun ikki belgidan iborat: bitta stem va bitta branch juftligi. Siz tug'ilgan kunning ustuni **kun ustuni (日柱)** hisoblanadi."
          },
          {
            "p": "Stemlar va branchlarni tartib bilan juftlasangiz, 甲子, 乙丑, 丙寅 dan 癸亥 gacha **oltmish** ta kombinatsiya hosil bo'ladi. Bu aylanish oltmishlik sikl deb ataladi. U 10 × 12 = 120 emas, oltmish bo'lishining sababi — Yang stem faqat Yang branch bilan, Yin stem faqat Yin branch bilan juftlashadi."
          },
          {
            "p": "Kun ustunining yuqori belgisi — yuqorida tanishgan day stemingiz. Har bir ustunni alohida tushuntiruvchi maqolalar [qo'llanmalar ro'yxati](/guide) pastidagi stem, branch va kun ustuni lug'atlarida bor."
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
