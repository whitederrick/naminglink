import type { DocPage, NoticeCopy } from "./types";
import type { DocKey } from "./ko";

/** O‘zbekcha — `scripts/translate-doc-content.ts`가 만든다. 손으로 고치지 말 것. */
export const UZ_DOCS = {
  "about": {
    "eyebrow": "Haqida",
    "title": "Inyeon-Link haqida",
    "summary": "Biz ikkita tug‘ilish xaritasini Koreya saju an'anasida taqqoslaymiz. Biz hisoblaydigan narsalar va da'vo qilmaydigan narsalar.",
    "backLabel": "Bosh sahifa",
    "sections": [
      {
        "title": "Biz nima qilamiz",
        "blocks": [
          {
            "p": "Inyeon-Link tug‘ilish sanalari va vaqtlaridan ikkita tug‘ilish xaritasini tuzadi va **ikki energiya to‘plami qanday uchrashishini ko‘rsatadi.** Siz shuningdek, o‘z xaritangizni alohida o‘qishingiz va qaysi temperamentlar sizga mos kelishini ko‘rishingiz mumkin."
          },
          {
            "p": "Ekranda o‘qish **bepul va hisob qaydnomasi talab qilmaydi.** Pullik mahsulotlar esa ekranda hech qachon ko‘rsatilmaydigan raqamlarni o‘z ichiga olgan PDF hisobotlardir — element kuchlari, o‘n xudolar juftliklari va to‘rt ustun bo‘yicha munosabatlar."
          }
        ]
      },
      {
        "title": "Biz nima hisoblaymiz",
        "blocks": [
          {
            "p": "Xaritalar **Koreya lunisolar almanagidan** tuziladi va tug‘ilish vaqti tug‘ilish joyi uchun **haqiqiy quyosh vaqti** ga to‘g‘rilanadi — bir xil soat vaqti tug‘ilgan joyingizga qarab quyosh pozitsiyasini o‘zgartiradi."
          },
          {
            "p": "Ballar faqat belgilangan qoidalardan kelib chiqadi. An'anaviy tushunchalar — o‘n xudo, shox munosabatlari, qo‘llab-quvvatlovchi element — qoidalar sifatida ifodalanadi, shuning uchun **bir xil kirish har doim bir xil natijani beradi.** Qoidalar o‘zgarganda, biz eski o‘qishlar harakatlanmaganligini ta'minlash uchun regressiya tizimini ishga tushiramiz."
          },
          {
            "p": "**Hech qanday sun'iy intellekt ishtirok etmaydi.** Ekrandagi har bir jumla hisoblangan natijaga bog‘langan belgilangan matn."
          }
        ]
      },
      {
        "title": "Biz nima da'vo qilmaymiz",
        "blocks": [
          {
            "ul": [
              "**Biz taqdirni aytmaymiz.** Bu yerda hech narsa sizni qidirishga yoki qochishga undamaydi. Bu an'ana asosida olingan ma'lumot.",
              "**Biz siz kiritgan ma'lumotlarni saqlamaymiz.** Tug‘ilish tafsilotlari hisoblash paytida ishlatiladi va hech qachon yozilmaydi; natija havolalari brauzer serverga yubormaydigan URL qismida yashaydi.",
              "**Ball shaxsga hukm emas.** Past raqam munosabatni bekor qilmaydi."
            ]
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Usul batafsil [qo‘llanmalarda](/guide) tasvirlangan. Kompaniya tafsilotlari va biz bilan qanday bog‘lanish haqida [aloqa sahifasida](/contact) ma'lumotlar mavjud."
          }
        ]
      }
    ]
  },
  "guide": {
    "eyebrow": "Hisoblash Asosi",
    "title": "Hisoblash Asosi nima?",
    "summary": "Inyeon-Link barcha qoidalarni ochib beradi. Siz elementlar va ularning og‘irliklarini, yer shoxlari munosabatlari jadvalidan olingan ballarni va kuchli kun ustuni bilan zaif kun ustuni o‘rtasidagi farqni belgilaydigan chegara qiymatlarini tekshirishingiz mumkin — ekrandagi raqamlar qayerdan kelayotganini ko‘rishingiz mumkin.",
    "backLabel": "Boshlanishga qaytish",
    "sections": [
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Bu yerda yozilgan qiymatlar **hisoblash kodidan to‘g‘ridan-to‘g‘ri o‘qilgan.** Ular matnga qo‘lda yozilmagan, shuning uchun qoidalar o‘zgarganda, ushbu hujjatdagi raqamlar ham o‘zgaradi."
          }
        ]
      }
    ]
  },
  "guide/how-compatibility": {
    "eyebrow": "Xizmat Asosi",
    "title": "Saju mosligi nimaga qaraydi?",
    "summary": "Bu to‘rt element va ularning mos ravishda og‘irliklarini aniqlaydi va nega ushbu to‘rt tanlanganini tushuntiradi. Shuningdek, tug‘ilish vaqtini bilmasdan ham hisoblash mumkinligi haqida ma'lumot beradi.",
    "backLabel": "Hisoblash Asosi",
    "sections": [
      {
        "title": "Ikki O‘qni Hisoblash va Birlashtirish",
        "blocks": [
          {
            "p": "Moslik darajasi ikkita shoxdan kelib chiqadi. **Saju mosligi** ikkita shaxsning to‘liq saju asl xaritasiga qaraydi, **zodiak mosligi** esa tug‘ilish yilidan bir yer shoxini hisobga oladi. Yakuniy qiymat ikkitasini og‘irlikli o‘rtacha hisoblash orqali olinadi."
          },
          {
            "table": {
              "head": [
                "O‘q",
                "Nima hisobga olinadi",
                "Og‘irlik"
              ],
              "rows": [
                [
                  "Saju Mosligi",
                  "Kun ustuni, kun shoxi va beshta element — to‘rt element",
                  "{weightSaju}"
                ],
                [
                  "Zodiak Mosligi",
                  "Yil shoxlari o‘rtasidagi munosabat",
                  "{weightZodiac}"
                ]
              ]
            }
          },
          {
            "p": "Saju tomoni ancha og‘irroq, chunki ishlatiladigan ma'lumotlar miqdori farq qiladi. Saju to‘rt ustunni hisobga oladi, zodiak esa faqat bitta belgi ko‘radi. Biroq, zodiak ikkita sababga ko‘ra chiqarib tashlanmaydi — bu eng intuitiv tushunarli element va bu **tug‘ilish vaqtini bilmasdan ham qiymati o‘zgarmaydigan yagona o‘qdir.**"
          }
        ]
      },
      {
        "title": "Saju Mosligining To‘rt Elementi",
        "blocks": [
          {
            "p": "Saju tomoni to‘rt qismga bo‘linadi. Har bir element tanlanadi, shunda ularning hisobga oladigan narsalari bir-biriga to‘g‘ri kelmaydi."
          },
          {
            "figure": "four-pillars",
            "caption": "Saju tug‘ilish yili, oyi, kuni va soati uchun osmon shoxlari va yer shoxlaridan tashkil topgan sakkiz belgidan iborat. Quyida keltirilgan kun ustuni va kun shoxi — kun ustunidagi ikkita belgi.",
            "labels": {
              "year": "Yil Ustuni",
              "yearNote": "Asos · Zodiak",
              "month": "Oy Ustuni",
              "monthNote": "Mavsum · Kuch",
              "day": "Kun Ustuni",
              "dayNote": "Men · Er-xotin saroyi",
              "hour": "Soat Ustuni",
              "hourNote": "Keyingi Yillar · Foydalanish",
              "stem": "Osmon Shoxi",
              "stemNote": "Kun Shoxi = Men",
              "branch": "Yerlik Tarmoq",
              "branchNote": "Kun Tarmoq = Xotin-qiz Saroyi"
            }
          },
          {
            "table": {
              "head": [
                "Maqola",
                "Nima hisobga olinadi",
                "Og'irlik"
              ],
              "rows": [
                [
                  "Kun Stem Munosabati",
                  "Ikkita odamning kun stemlari (日干) bir-biriga qanday ta'sir qiladi — O'n Xudo orqali ko'rinadi",
                  "{weightDayMaster}"
                ],
                [
                  "Besh Elementni To'ldirish",
                  "Hamkoringizda menga kerak bo'lgan energiya bormi — hozirgi chartga kerak bo'lgan qo'llab-quvvatlovchi element orqali ko'rinadi",
                  "{weightElementSupply}"
                ],
                [
                  "Xotin-qiz Yulduzi",
                  "Hamkoringizning kun stemi mening xotin-qiz pozitsiyamga mos keladimi?",
                  "{weightSpouseStar}"
                ],
                [
                  "Kun Tarmoq Munosabati",
                  "Ikkita odamning kun tarmoqlari (日支) birlashma yoki to'qnashuvmi?",
                  "{weightDayBranch}"
                ]
              ]
            }
          },
          {
            "p": "Kun tarmoq o'qiladi, chunki an'ana uni **xotin-qiz saroyi** sifatida ko'radi. To'rt ustundan u hamkorga ishora qiladigan birinchi joydir, bu esa moslikni ko'rish uchun birinchi joy qiladi."
          }
        ]
      },
      {
        "title": "Agar jins oshkor qilinmasa, xotin-qiz elementi chiqarib tashlanadi",
        "blocks": [
          {
            "p": "Xotin-qiz elementi hisoblash uchun jinsni bilishni talab qiladi. An'ana xotin-qizga ishora qiladigan pozitsiyani jinsga qarab boshqacha o'qiydi. Agar oshkor qilinmasa, bu element ** chiqarib tashlanadi** va qolgan uch elementning og'irliklari qayta normallashtiriladi."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bu 0 ball sifatida hisoblanmaydi",
        "blocks": [
          {
            "p": "Agar yo'q pozitsiyalar 0 ball sifatida hisoblangan bo'lsa, ball jins oshkor qilinmaganligi sababli adolatsiz ravishda pasayadi. Og'irliklarni qayta normallashtirish bu muammoni oldini oladi."
          }
        ]
      },
      {
        "title": "Tug'ilish vaqtini bilmasdan hisoblashlar amalga oshirilishi mumkin",
        "blocks": [
          {
            "p": "Tug'ilish vaqti soat ustunini aniqlash uchun ishlatiladi. Agar noma'lum bo'lsa, hisoblashlar soat ustunisiz amalga oshiriladi va bu haqda natijalar ekranida ko'rsatiladi. To'rt moslik elementlari orasida soat ustuni uchun to'g'ridan-to'g'ri kiritish yo'q, shuning uchun qiymatlar sezilarli darajada o'zgarish qilmaydi, lekin bu besh elementning muvozanatiga ta'sir qiladi."
          },
          {
            "p": "Agar siz vaqtni bilsangiz, iltimos, tug'ilish joyini ham tanlang. Agar standart vaqt haqiqiy quyosh pozitsiyasidan farq qilsa, uni shunday ishlatish soat ustunini noto'g'ri joylashtirishi mumkin [(haqiqiy quyosh vaqti tuzatish)](/guide/true-solar-time)."
          }
        ]
      },
      {
        "title": "Bir xil kiritish har doim bir xil qiymatni beradi",
        "blocks": [
          {
            "p": "Barcha ballar qoidalar asosida belgilanadi. Sun'iy intellekt ishlatilmaydi, shuningdek, tasodifiy raqamlar ham qo'llanilmaydi. Shuning uchun, bir xil ikkita tug'ilish sanasini bir necha marta kiritish turlicha natijalar bermaydi. Ma'lumotlarni saqlamaydigan xizmat sifatida, oldingi natijalarni qayta olish mumkin emas, lekin **deterministiklik** buni qoplaydi."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Qoidalarni o'zgartirish versiyani oshiradi",
        "blocks": [
          {
            "p": "Ballash qoidalari har o'zgartirilganda, dvigatel versiyasi yangilanadi. Versiya natijalar ekranining pastki qismida ko'rsatiladi, bu sizga ko'rayotgan raqamlarni hisoblashda qaysi qoidalar ishlatilganini ajratishga imkon beradi."
          }
        ]
      },
      {
        "title": "Bu natija nima emas",
        "blocks": [
          {
            "p": "Bu an'anaga asoslangan qoidalar orqali hisoblangan **ma'lumot manbai**. Bu ilmiy bashorat emas, shuningdek, ikki shaxs o'rtasidagi munosabatlar haqida aniq bayonot emas. Ball oralig'i bu sababdan taxminan 45 balldan kam bo'lmagan darajada belgilangan — hech qanday birlashma 0 ballga yaqin qiymat bermaydi."
          }
        ]
      }
    ]
  },
  "guide/branches": {
    "eyebrow": "Munosabatlar Jadvali",
    "title": "O'n Ikki Yerlik Tarmoq — Birlashma, To'qnashuv, Nizo",
    "summary": "Bu kun tarmoq mosligi va zodiak mosligi uchun ishlatiladigan munosabatlar jadvali. Har bir birlashma, to'qnashuv va nizoning nima anglatishini va ularning mos keluvchi ballarini to'liq ochib beradi.",
    "backLabel": "Hisoblash Asosi",
    "sections": [
      {
        "title": "Yerlik tarmoqlar o'n ikki belgidan iborat",
        "blocks": [
          {
            "p": "O'n ikki yerlik tarmoq (十二支) quyidagilar: 子 丑 寅 卯 辰 巳 午 未 申 酉 戌 亥. Har bir o'n ikki belgi bilan tanish bo'lgan zodiak belgilariga bog'liq."
          },
          {
            "figure": "branch-wheel",
            "caption": "O'n ikki belgini doira shaklida joylashtirish munosabatlarni aniq ko'rish imkonini beradi. To'qnashuv har doim to'g'ridan-to'g'ri qarama-qarshi o'tiradi, o'n olti-hamkor juftligi va tinch nizolar yaqin qo'shnilar hisoblanadi. Ushbu chiziqlar to'g'ridan-to'g'ri hisoblash qoidalaridan olingan, matnda yozilmagan.",
            "labels": {
              "alt": "O'n ikki yerlik tarmoq doira shaklida joylashtirilgan va o'n olti-hamkor, to'qnashuv va nizolarni bog'lovchi chiziqlar ko'rsatilgan diagramma.",
              "yukhap": "O'n Olti-Hamkor",
              "chung": "To'qnashuv",
              "wonjin": "Nizo",
              "rat": "Sichqon",
              "ox": "Sigir",
              "tiger": "Jang'chi",
              "rabbit": "Qo'y",
              "dragon": "Ajdar",
              "snake": "Ilon",
              "horse": "Ot",
              "goat": "Qo'y",
              "monkey": "Maymun",
              "rooster": "Tovuq",
              "dog": "It",
              "pig": "Cho'chqa"
            }
          },
          {
            "p": "Saju da, to'rt ustunning har biri bir yerli shoxga ega. Inyeon-Link **kun shoxi** (xotin-palaga) va **yil shoxi** (zodiak hayvoni) ni ulardan foydalanadi. Ikkala pozitsiya quyidagi munosabatlar jadvali yordamida baholanadi."
          }
        ]
      },
      {
        "title": "Butun Munosabatlar Jadvali",
        "blocks": [
          {
            "table": {
              "caption": "Eng yuqori ball bo'yicha tartiblangan. Bu Inyeon-Link tomonidan haqiqatan foydalaniladigan qiymatlar.",
              "head": [
                "Munosabat",
                "Mos Juft",
                "Ma'nosi",
                "Ball"
              ],
              "rows": [
                [
                  "Kombinatsiya (三合)",
                  "申子辰 · 巳酉丑 · 寅午戌 · 亥卯未",
                  "Uch belgi yig'ilganda, ular to'liq elementar shaklni hosil qiladi — **guk** (局). Bu eng kuchli kombinatsiya hisoblanadi.",
                  "{scoreSamhap}"
                ],
                [
                  "Olti-Harmoniya (六合)",
                  "子丑 · 寅亥 · 卯戌 · 辰酉 · 巳申 · 午未",
                  "Bir-birini jalb qiladigan juftlar. Bu moslikda eng keng tarqalgan kombinatsiya, chunki u faqat ikki belgidan iborat.",
                  "{scoreYukhap}"
                ],
                [
                  "Yarim triad (半合)",
                  "Triad (子·酉·午·卯) dan bir qirollik shoxini (王地) o'z ichiga olgan ikki belgi",
                  "Markaziy shakldagi belgini o'z ichiga olgan yarim kombinatsiya. Faqat ikki belgi bilan to'liq kombinatsiya hosil qila olmaydi, bu esa uni to'liq triaddan past qiladi.",
                  "{scoreBanhap}"
                ],
                [
                  "Bir xil yerli shox",
                  "子子 · 丑丑 …",
                  "Bir xil belgilar. Bu ularning bir-biriga o'xshashligini anglatadi, lekin bu jalb qilishni anglatmaydi, shuning uchun o'rtada joylashtiriladi.",
                  "{scoreSame}"
                ],
                [
                  "Neytral",
                  "Yuqarida yoki pastda joylashmagan juftlar",
                  "Maxsus munosabatga ega bo'lmagan kombinatsiya. Bu referens nuqtasi.",
                  "{scoreNeutral}"
                ],
                [
                  "Jim nizolar (怨嗔)",
                  "子未 · 丑午 · 寅酉 · 卯申 · 辰亥 · 巳戌",
                  "G'azabni ichida saqlagan juftlar. Ular tashqi ko'rinishda jim bo'lishadi, lekin uzoq davom etishi hisoblanadi.",
                  "{scoreWonjin}"
                ],
                [
                  "To'qnashuv (沖)",
                  "子午 · 丑未 · 寅申 · 卯酉 · 辰戌 · 巳亥",
                  "To'qnashuvga duch keladigan juftlar. Bu olti juft bir-biriga qarshi turadi.",
                  "{scoreChung}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "To'liq triadlar ushbu xizmatda ko'rinmaydi",
        "blocks": [
          {
            "p": "To'liq triad uch belgini hosil qilishni talab qiladi. Biroq, moslik ikki odamning yerli shoxlarini **birma-bir** moslashtirish orqali tuziladi, natijada faqat ikki belgi paydo bo'ladi. Shuning uchun, bu yerda ko'rinadigan narsa har doim yarim triad bo'lib, to'liq triad {scoreSamhap} ballari har bir saju ichidagi shakllarni o'rganishda saqlanadi."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Yarim triadlar qirollik shoxini o'z ichiga olishi kerak",
        "blocks": [
          {
            "p": "Agar ikkita belgi bir xil triad guruhiga mansub bo'lsa, bu yarim triad sifatida hisoblanadigan usul ham mavjud. Bu 申辰 kabi triad deb atash qiyin bo'lgan kombinatsiyalar uchun ham yuqori ballarga olib kelishi mumkin. Shuning uchun, ushbu xizmat faqat qirollik shoxini (王地) (子·酉·午·卯) o'z ichiga olgan juftlar uchun yarim triadni tan oladi va qirollik shoxisiz 申辰·巳丑·寅戌·亥未 kabi kombinatsiyalar triad sifatida hisoblanmaydi."
          }
        ]
      },
      {
        "title": "Jim nizolarni ajratish sababi",
        "blocks": [
          {
            "p": "Jim nizolarning olti jufti moslikda to'qnashuvlar kabi tez-tez ko'rinadi. Agar biz kombinatsiyalarni juftlar va to'qnashuvlar sifatida hisoblasak, bu olti juft neytral {scoreNeutral} ballari ostida qoladi, shuning uchun ular alohida joylashtiriladi."
          },
          {
            "p": "To'qnashuvlar ochiq va ta'sirchan bo'lsa, jim nizolar nozik tarzda mos kelmaydi. Shuning uchun, bu {scoreWonjin} balli joylashtiriladi, bu to'qnashuvlardan ({scoreChung}) yuqori, lekin neytral ({scoreNeutral}) dan aniq past."
          }
        ]
      },
      {
        "title": "Ballar to'qnashuvlarga ham beriladi",
        "blocks": [
          {
            "p": "Eng past to'qnashuv balli {scoreChung}. Maqsad 0 ga yaqin qiymat berish emas. An'anada to'qnashuv 'oxir' emas, balki 'to'qnashuv' hisoblanadi va past ball berish xizmatning munosabat haqida aniq bayonot berishini anglatadi."
          },
          {
            "p": "Eng kam {scoreChung} va eng ko'p {scoreSamhap} bilan, oralig'i aniq, lekin bu aniq xulosa bermaydi."
          }
        ]
      }
    ]
  },
  "guide/zodiac": {
    "eyebrow": "Zodiak",
    "title": "Nima uchun zodiak mosligi yil shoxini hisobga oladi?",
    "summary": "Zodiak tug'ilgan yilning yer shoxi hisoblanadi. Bu saju yil ustuni asosida olinganligini tushuntiradi va zodiak mosligining ahamiyatini aniqlaydi.",
    "backLabel": "Hisoblash Asosi",
    "sections": [
      {
        "title": "Zodiak tug'ilgan yilning yer shoxi",
        "blocks": [
          {
            "p": "Saju to'rt ustundan iborat: yil, oy, kun va soat, har bir ustun bir heavenly stem va bir yer shoxini o'z ichiga oladi. **Yil shoxi** zodiak belgisi deb ataladigan hayvonni olib yuradigan shoxdir."
          },
          {
            "table": {
              "caption": "O'n Ikki Yer Shoxi va Zodiak",
              "head": [
                "Yer Shoxi",
                "Zodiak"
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
                  "Simi"
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
        "title": "Biz saju yilini, taqvim yilini emas, ishlatamiz",
        "blocks": [
          {
            "p": "Zodiak o'zgaradigan nuqta na quyosh taqvimi 1-yanvar, na O'rta Yil. Saju yilini o'zgartirish standarti **Ipchun**. Shuning uchun, yanvar yoki fevralning boshida tug'ilganlar taqvimda ko'rsatilgan zodiak yilidan farq qilishi mumkin."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Zodiak haqida to'g'ridan-to'g'ri so'ramasligimiz sababi",
        "blocks": [
          {
            "p": "Shuning uchun, biz faqat tug'ilgan sanani to'playmiz, zodiakni kiritish ekranida so'ramaymiz. Saju dvigateli yil shoxini hisoblaganda, Ipchun chegarasi avtomatik ravishda moslashtiriladi. Agar siz uni to'g'ridan-to'g'ri tanlasangiz, fevralning boshida tug'ilgan kishi o'z haqiqiy zodiakiga mos kelmaydigan zodiakni tanlashi mumkin."
          }
        ]
      },
      {
        "title": "Zodiak mosligi faqat bitta munosabatni hisobga oladi",
        "blocks": [
          {
            "p": "Zodiak mosligini hisoblash oddiy. Bu ikki kishining yil shoxlarini taqqoslaydi, munosabatning uyg'un, to'qnashuv yoki tinch nizoli ekanligini aniqlaydi va bu ballni shunday ishlatadi. Faqat bitta element bo'lgani uchun, vaznlarni taqsimlashga hojat yo'q."
          },
          {
            "p": "Har bir munosabat uchun ballar [O'n Ikki Shoxlar Munosabatlar Jadvalida](/guide/branches) keltirilgan. Kun shoxi mosligi ham xuddi shu jadvaldan foydalanadi."
          }
        ]
      },
      {
        "title": "Vaznni belgilash sababi",
        "blocks": [
          {
            "p": "Zodiak mosligi yakuniy moslik darajasining {weightZodiac} qismini hisobga oladi. Saju mosligi to'rt ustunni ko'rib chiqsa, zodiak faqat bitta xarakterni hisobga oladi, shuning uchun ular teng vaznlanishi mumkin emas."
          },
          {
            "p": "Biroq, uni chiqarib tashlamaslik uchun ikkita sabab bor."
          },
          {
            "ul": [
              "**Bu eng intuitiv tushunarli elementdir**. An'anaviy so'z boyligini bilmasangiz ham, 'yo'lbars va simi to'qnashadi' tushunarli.",
              "**Bu tug'ilish vaqti noma'lum bo'lsa ham o'zgarishsiz qoladigan yagona o'qlar**. Agar siz vaqtni bilmasangiz, soat ustuni yo'qoladi va beshta elementning kuchi o'zgaradi, lekin yil shoxi bir xil qoladi."
            ]
          }
        ]
      },
      {
        "title": "Siz zodiak mosligini alohida ham ko'rishingiz mumkin",
        "blocks": [
          {
            "p": "Natijalar ekranida biz saju mosligi va zodiak mosligini alohida ko'rsatamiz. Agar faqat yakuniy moslik darajasi taqdim etilsa, bu raqam qayerdan kelganini aniqlash qiyin. Agar ikkita qiymat sezilarli darajada farq qilsa, bu o'z-o'zidan e'tiborga molik."
          }
        ]
      }
    ]
  },
  "guide/ten-gods": {
    "eyebrow": "O'n Xudo",
    "title": "O'n Xudo va Er-xotin Pozitsiyasi",
    "summary": "Biz har bir insonning kun shoxini O'n Xudolar orqali bir-biriga qanday ta'sir qilayotganini ko'rib chiqamiz. To'g'ridan-to'g'ri boylik va bilvosita boylik qanday qilib farq qilinayotganini tushuntiramiz, garchi ikkalasi ham boylik bo'lsa.",
    "backLabel": "Hisoblash Asosi",
    "sections": [
      {
        "title": "Kun ustuni shaxsning o'zidir",
        "blocks": [
          {
            "p": "Saju ning sakkiz belgisi orasida, **kun ustuni** (tug'ilish kunining osmonga tegishli ustuni) shaxsning o'zini anglatadi. Qolgan yetti belgi esa, o'sha kun ustuni joylashgan muhitni o'qiydi."
          },
          {
            "p": "**O'n Xudo** (十神) kun ustunining boshqa belgilarni qanday qabul qilishini o'n toifaga bo'ladi. Meni boqadigan narsa **resurs**, menga teng bo'lgan narsa **hamkasb**, men ishlab chiqaradigan narsa **chiqarish**, men nazorat qiladigan narsa **boylik**, va meni nazorat qiladigan narsa **hokimiyat** — har bir besh narsa polaritetga bo'linadi, bu esa o'nni hosil qiladi."
          }
        ]
      },
      {
        "title": "Har bir shaxsning kun ustuni bir-biriga qanday ta'sir qiladi",
        "blocks": [
          {
            "p": "Bu moslikdagi birinchi elementdir. A ning kun ustuni B ning kun ustunini qanday qabul qilishi aniqlangach, B ning A ga bo'lgan qabul qilish ham aniqlanadi, shuning uchun **faqat olti imkoniyat** mavjud."
          },
          {
            "table": {
              "caption": "Eng yuqori ball bo'yicha tartibda",
              "head": [
                "Juftlik",
                "Yin/Yang",
                "Nomi",
                "Ma'nosi"
              ],
              "rows": [
                [
                  "To'g'ridan-to'g'ri Boylik ↔ To'g'ridan-to'g'ri Hokimiyat",
                  "Teskari polaritet",
                  "Iliq bog'lanish (有情)",
                  "Bu juftlik an'anaviy ravishda turmush o'rtog'ining pozitsiyasi sifatida ko'riladi. Yin va yang mos kelmaydi, bir-birini o'ziga tortadi."
                ],
                [
                  "Zararli Ofitser ↔ To'g'ridan-to'g'ri Resurs",
                  "Teskari polaritet",
                  "Zararli Ofitser muhrni kiygan (傷官佩印)",
                  "Bir tomoni boshqa tomonning kuchli energiyasini o'rab oladi."
                ],
                [
                  "Do'st ↔ Do'st",
                  "Bir xil polaritet",
                  "Teng",
                  "Ular bir-biriga o'xshaydi va teng, lekin bir-birini bosim qilmaydi."
                ],
                [
                  "Raqib ↔ Raqib",
                  "Teskari polaritet",
                  "Raqobat",
                  "Ular bir-biriga o'ziga tortiladi, lekin bir xil pozitsiya uchun raqobatlashadi."
                ],
                [
                  "Nisbiy Boylik ↔ Nisbiy Hokimiyat",
                  "Bir xil polaritet",
                  "Sovuq bog'lanish (無情)",
                  "Tashvish katta, lekin yuk ham og'ir."
                ],
                [
                  "Yeyish Xudosi ↔ Nisbiy Resurs",
                  "Bir xil polaritet",
                  "Qush yulduzi ovqatni o'g'irladi (梟神奪食)",
                  "Berilgan energiya qarshi tomon tomonidan olinadi, oqimni to'sadi."
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Yin va Yang kesishish nuqtasida",
        "blocks": [
          {
            "p": "Yin va yang mos kelmaydigan tomonda (To'g'ri Boylik, To'g'ri Ofitser, To'g'ri Hamkasb) hissiy, bir xil tomonda (Resurs, Ofitser, Hamkasb) esa hissiy emas, bu esa O'n Xudoning to'g'ri va yon tomonini ajratadigan printsipdir."
          }
        ]
      },
      {
        "title": "O'n Xudolar bilan ko'rishning sababi, uch elementdan ko'ra",
        "blocks": [
          {
            "p": "Kun ustunining uch element bilan munosabatini ko'rish usuli mavjud (o'zaro ishlab chiqarish, bir xil bo'lish, o'zaro ustunlik). Bu oddiy, lekin **yin va yang yo'qoladi.** 甲 (yang yog'och) va 乙 (yin yog'och) bir xil 'bir xil' ga aylanadi, masalan 甲 va 甲, va o'zaro ustunlik yo'nalish yoki yin va yangsiz bitta ballga siqiladi."
          },
          {
            "p": "Turmush o'rtog'i pozitsiyasi O'n Xudolar nuqtai nazaridan baholanishi kerak. Agar besh elementlar tomonidan ko'rilgan elementlar va O'n Xudolar tomonidan ko'rilgan elementlar bir motor ichida aralashtirilsa, bir xil ikki belgi uchun ikkita standart bo'ladi. Shuning uchun, biz O'n Xudolar bilan birlashtiramiz."
          }
        ]
      },
      {
        "title": "Turmush o'rtog'i pozitsiyasi To'g'ri Boylik va To'g'ri Ofitserdir",
        "blocks": [
          {
            "p": "An'anada, O'n Xudolar qaysi biri turmush o'rtog'ini ifodalashi jinsga qarab farq qiladi."
          },
          {
            "table": {
              "head": [
                "Jins",
                "Turmush o'rtog'i Pozitsiyasi",
                "Mos Pozitsiya"
              ],
              "rows": [
                [
                  "Erkak",
                  "To'g'ri Boylik (正財)",
                  "Nisbiy Boylik (偏財)"
                ],
                [
                  "Ayol",
                  "To'g'ri Hokimiyat (正官)",
                  "Nisbiy Hokimiyat (偏官)"
                ]
              ]
            }
          },
          {
            "p": "Bir xil resurs bo'lsa ham, faqat hissiy **To'g'ri Boylik** turmush o'rtog'i pozitsiyasi sifatida hisobga olinadi, resurs esa faoliyat va boylikning tabiati sifatida o'qiladi. Shuning uchun, To'g'ri Boylik va To'g'ri Ofitser 2 ball sifatida hisoblanadi, Resurs va Ofitser esa 1 ball hisoblanadi va ikkala yo'nalish yig'iladi — agar ikkalasi ham turmush o'rtog'i pozitsiyalari sifatida ko'rilsa, bu eng yuqori hisoblanadi."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Agar jins oshkor qilinmasa, ushbu elementni o'tkazib yuboring",
        "blocks": [
          {
            "p": "Agar hal qilinmaydigan element 0 ballga belgilansa, bu adolatsiz past ballga olib keladi. Elementni o'tkazib yuborganidan keyin qolgan og'irlik yana normallashtiriladi [(element va og'irlik)](/guide/how-compatibility)."
          }
        ]
      },
      {
        "title": "Biz munosabatlarning shaklini ham ko'rsatamiz",
        "blocks": [
          {
            "p": "Balldan tashqari, biz natijalar ekranida kun ustunlarining juftligi qanday **shaklga ega** ekanligini ta'riflaymiz. Ular o'xshash pozitsiyalarmi, bir tomoni boshqa tomonni qo'llab-quvvatlaydimi yoki bir tomoni bostirilganmi — agar bu qo'llab-quvvatlovchi yoki bostiruvchi munosabat bo'lsa, qaysi tomon bu pozitsiyani egallaganini aniqlaymiz."
          },
          {
            "p": "Agar faqat bitta ball taqdim etilsa, bu 'nima uchun' savolini qoldiradi. Shakl ball emas, balki o'qish uchun bir narsa, va hatto past ballga ega juftliklar ham talqin qilish uchun biror narsa bor."
          }
        ]
      }
    ]
  },
  "guide/yongsin": {
    "eyebrow": "Besh element",
    "title": "Qo'llab-quvvatlovchi Element — Hozir kerak bo'lgan energiya",
    "summary": "Biz besh elementni 'ikki tanladimi' deb emas, balki 'qarshi tomonimda menga kerak bo'lgan narsa bormi' deb ko'rib chiqamiz. Shuningdek, kuchli kun ustuni bilan zaif kun ustuni o'rtasidagi farqni belgilovchi chegaraviy qiymatni ham oshkor qilamiz.",
    "backLabel": "Hisoblash asoslari",
    "sections": [
      {
        "title": "Besh elementlar 'muvozanatli' bo'lishi muvofiqlik masalasi emas",
        "blocks": [
          {
            "p": "Besh energiyaning teng taqsimlanganligini o'lchash usuli mavjud, bu ikki odamning besh elementini birlashtirish orqali amalga oshiriladi. Ammo, muvofiqlik masalasi shunday emas. **Qarshi tomonimda menga kerak bo'lgan narsa bormi?**"
          },
          {
            "p": "Muvozanat darajasi simmetrik, lekin to'ldiruvchi tabiiy asimmetrikdir. Bu A ning kerakli narsa B ning kerakli narsasidan farq qiladi. Shuning uchun, har bir tomonni alohida o'lchaymiz va o'rtacha hisoblaymiz — bu o'rtacha bo'lgani uchun, umumiy ball simmetrik qoladi."
          }
        ]
      },
      {
        "title": "Qo'llab-quvvatlovchi Element — Agar ortiqcha bo'lsa, kamaytiring, agar yetarli bo'lmasa, qo'shing",
        "blocks": [
          {
            "p": "Qo'llab-quvvatlovchi Element (用神) — 'bu odamga hozir kerak bo'lgan energiya'. Buni aniqlash uchun bir nechta usullar mavjud (bostirish, qo'llab-quvvatlash, kasallik va aloqa), lekin bu qoidalar bilan ifodalanishi mumkin, va eng keng tarqalgan usul **bostirish (抑扶)**. Agar kun ustuni kuchli bo'lsa, kamaytirish uchun energiya kerak deb hisoblanadi, agar zaif bo'lsa, qo'shish uchun energiya kerak."
          },
          {
            "table": {
              "head": [
                "Hukm",
                "Nima kerak",
                "Qancha"
              ],
              "rows": [
                [
                  "Kuchli kun ustuni (身强)",
                  "Kamaytiruvchi energiya — 食傷 (sik-sang) · 財星 (jae-seong) · 官星 (gwan-seong)",
                  "Uch"
                ],
                [
                  "Zaif kun ustuni (身弱)",
                  "Qo'shadigan energiya — 印星 (in-seong) · 比劫 (bi-gyeob)",
                  "Ikki"
                ],
                [
                  "Muvozanatli (中和)",
                  "Qo'llab-quvvatlovchi element bilan qoplanmaydi, shuning uchun bu eng nozik energiya",
                  "Ikki"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Kuch va zaiflik uchun chegaraviy qiymatlar",
        "blocks": [
          {
            "p": "Kun ustuni tomoni **印星 va 比劫** — menga tug'diradigan energiya va menga o'xshaydigan energiya. Beshdan ikkita, agar energiya to'liq muvozanatli bo'lsa, {evenAllyRatio} ga aylanadi. Ushbu qiymatdan yuqori va pastda chegaralar belgilangan."
          },
          {
            "table": {
              "caption": "Umumiy kuchdagi ittifoqchilar nisbati (印星 + 比劫)",
              "head": [
                "Nisbati",
                "Hukm"
              ],
              "rows": [
                [
                  "{strongThreshold} yoki ko'p",
                  "Kuchli kun ustuni"
                ],
                [
                  "{weakThreshold} yoki ko'p va {strongThreshold} dan kam",
                  "Muvozanatli"
                ],
                [
                  "{weakThreshold} dan kam",
                  "Zaif kun ustuni"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Muvozanat 'kam aniq hukm' dir",
        "blocks": [
          {
            "p": "Muvozanat qo'llab-quvvatlovchi element bilan qoplanmaydi. Bu vaqtda, biz faqat ikkita eng nozik energiyani zarur deb ko'ramiz. Natija ekranida bu 'hozir nozik pozitsiyada' deb yozilgan, aniq bayonot emas."
          }
        ]
      },
      {
        "title": "Kuch belgilar soni emas",
        "blocks": [
          {
            "p": "Besh elementning kuchini hisoblashda, biz oddiygina sakkiz belgini ko'rmaymiz. Biz yerli tarmoqlardagi yashirin osmonga tegishli ustunlarni (地藏干) va tug'ilgan oy energiyasining mavsumini (月令) aks ettiruvchi qiymatni ishlatamiz."
          },
          {
            "p": "Agar biz faqat yuzaki belgilarni hisoblasak, bahor va kuzda bir xil belgi bo'lsa ham, kuchlarining butunlay farqini o'tkazib yuboramiz. Bahoridagi 木 va kuzidagi 木, garchi ular bir xil belgi bo'lsa ham, turlicha kuchlarga ega."
          }
        ]
      },
      {
        "title": "To'ldirish darajasini baholash",
        "blocks": [
          {
            "p": "Biz raqibning kuchidagi qo'llab-quvvatlovchi elementimning nisbati bilan qaraymiz. Ammo, biz ushbu nisbati to'g'ridan-to'g'ri ishlatmaymiz, balki **kutilayotgan qiymatni qo'llab-quvvatlovchi elementning o'lchamiga bo'lamiz.** Kuchli bo'lganda, qo'llab-quvvatlovchi element uchta (kutilish 60%), zaif bo'lganda esa ikki (kutilish 40%), shuning uchun nisbati to'g'ridan-to'g'ri ishlatish kuchli odam har doim yuqori ball oladi degan ma'noni anglatadi."
          },
          {
            "p": "Agar kutilgan darajaga to'ldirilsa, 78 ballga yaqin ball olinadi, agar ko'proq to'ldirilsa, 100 ballga yetadi, agar sezilarli darajada yetishmasa, 55 ballga yaqinlashadi. Bu yerda ham, pastki 0 ga belgilangan emas."
          }
        ]
      },
      {
        "title": "Bu dastlabki hukmdir",
        "blocks": [
          {
            "p": "Amaliy saju tahlili qo'llab-quvvatlovchi elementni aniqlash uchun shakl va mavsumiy iqlimni (mavsumning issiqligi va namligi) hisobga oladi va xulosalar ishlatilgan usulga qarab farq qilishi mumkin. Inyeon-Link faqat **kuch qiymatlari** orqali o'lchash mumkin bo'lgan qo'llab-quvvatlovchi elementlarni ishlatadi. Bu qoidalar bilan ifodalash mumkin bo'lgan narsalarni ishlatish printsipiga asoslangan, shuning uchun bir xil kirish har doim bir xil javob beradi."
          },
          {
            "p": "Buning o'rniga, natija ekranida har bir odamning kuchi va zaifligi hozir kerak bo'lgan energiya bilan birga **o'qish materiallari** sifatida taqdim etiladi. Bu ball asosini yashirishdan qochish uchun amalga oshiriladi."
          }
        ]
      }
    ]
  },
  "guide/affinity": {
    "eyebrow": "Bizning standartlarimiz",
    "title": "Inyeon’s Match — Umumiy ballni taqdim etmaslik sababi",
    "summary": "Biz faqat bitta odamning ma'lumotlarini olamiz, raqibning pozitsiyasini bo'sh qoldirib, o'sha pozitsiyaga kirishi mumkin bo'lgan barcha qiymatlarni almashtiramiz. Bu usulda olingan turga umumiy ball qo'shmaslik sababini tushuntiramiz.",
    "backLabel": "Hisoblash asoslari",
    "sections": [
      {
        "title": "Raqibning pozitsiyasini bo'sh qoldirib hisoblashlar amalga oshiriladi",
        "blocks": [
          {
            "p": "Moslik ballari ikki odamni moslashtirish orqali hisoblanadi. **Inyeon’s Match** faqat bitta odamning ma'lumotlarini oladi, raqibning pozitsiyasini bo'sh qoldirib, o'sha pozitsiyaga kirishi mumkin bo'lgan barcha qiymatlarni sinovdan o'tkazadi. Bu moslik dvigatelini teskari ishlatish kabi."
          },
          {
            "p": "Shunday qilib, raqibning tug'ilgan sanasini bilish shart emas. Biz hali uchrashmagan odam haqida 'Menga qaysi tur mos keladi?' deb aytishimiz mumkin."
          }
        ]
      },
      {
        "title": "Millionlab kombinatsiyalarni hisoblamaymiz",
        "blocks": [
          {
            "p": "Saju moslik balli to'rtta elementdan iborat va **har bir element o'zini tekshirishda bir-biriga to'g'ri kelmaydi.**"
          },
          {
            "table": {
              "head": [
                "Element",
                "Tahlil o'qi nima",
                "Hollarning soni"
              ],
              "rows": [
                [
                  "Kun ustuni munosabati · Er-xotin tabiati",
                  "Ikkala odamning kun ustunlari — osmonga tegishli ustunlar",
                  "10"
                ],
                [
                  "Besh elementni to'ldirish",
                  "Mening qo'llab-quvvatlovchi elementim va raqibning besh element kuchi",
                  "5"
                ],
                [
                  "kun tarmog'i munosabati",
                  "ikki odamning kun tarmoqlari",
                  "12"
                ],
                [
                  "zodiak munosabati",
                  "ikki odamning yil tarmoqlari",
                  "12"
                ]
              ]
            }
          },
          {
            "p": "Qiymatlar elementlar o'rtasida almashmaydi, shuning uchun **har bir tarmoq uchun eng yuqori nuqtani topish umumiy eng yuqori nuqtani beradi.** Tug'ilgan sanalar kombinatsiyalarini tekshirish shart emas — faqat o'n osmonga tegishli ustunlar, o'n ikki erga tegishli tarmoqlar va besh elementni belgilash kifoya."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bir xil qoidalar amal qiladi",
        "blocks": [
          {
            "p": "Bu yerda yozilgan ballar to'g'ridan-to'g'ri moslik dvigatelidan olingan. Yangi qoidalar yaratilmaganligi sababli, bu yerda eng yuqori natija ko'rsatilgan tur haqiqiy moslikda ham ushbu element uchun eng yuqori ballga ega bo'ladi. Agar moslik qoidalari o'zgartirilsa, bu ekran ham shunga mos keladi."
          }
        ]
      },
      {
        "title": "Umumiy ball taqdim etilmaydi",
        "blocks": [
          {
            "p": "Bu ekran ustida eng muhim qaror. Har bir tarmoq uchun eng yuqori ballarni yig'ish 'mukammal moslik' keltirishi mumkin, lekin o'sha odam **haqiqatan ham mavjud emas.**"
          },
          {
            "p": "Haqiqiy odamlar, kun ustuni va besh element alohida ishlamaydi. 甲木 bilan tug'ilgan odam odatda kuchli 木 energiyasiga ham ega. Tarmoqlarni alohida hisoblash usuli o'sha bog'lanishni e'tiborga olmaydi, shuning uchun har bir tarmoq uchun eng yuqori ballarni bog'lash orqali olingan qiymat haqiqatda mavjud bo'lmagan kombinatsiya bo'ladi."
          },
          {
            "p": "Shuning uchun, ekran faqat **element ballarini** ko'rsatadi va umumiy ballni taqdim etmaydi. Umumiy ball raqibning tug'ilgan sanasini [saju mosligi](/compatibility) orqali olish bilan hisoblanadi."
          }
        ]
      },
      {
        "title": "'Moslik turlari'ni qanday o'qish kerak",
        "blocks": [
          {
            "p": "Natija 'agar siz ushbu turdagi odam bilan uchrashsangiz, bu element yuqori ball oladi' degan ma'noni anglatadi. Bu odamni tanlash mezoni emas, balki o'zimni tushunishning bir nuqtai nazaridan o'qish usuli."
          },
          {
            "p": "Ba'zi turlar yuqori ball olgan sabablari ham har bir element bo'yicha qayd etilgan — kun ustuni qulay pozitsiyada bo'ladimi yoki o'sha odamda hozirda kerak bo'lgan energiya mavjudmi."
          }
        ]
      },
      {
        "title": "Tasdiqlash vositasi",
        "blocks": [
          {
            "p": "Siz o'zingizning xayolingizdagi odam ushbu turga mos keladimi, deb qiziqishingiz mumkin. Natijalar ekranidagi tasdiqlash vositasiga ularning tug'ilgan sanasini kiritib, siz ularning kun ustuni, kun tarmog'i va yil tarmog'ini bilib olasiz. Kiruvchi qiymatlar hozirda saqlanmaydi [(saqlanmaydi)](/guide/no-storage)."
          }
        ]
      }
    ]
  },
  "guide/true-solar-time": {
    "eyebrow": "Vaqt",
    "title": "Tug'ilgan vaqtni haqiqiy quyosh vaqti bilan aylantirish",
    "summary": "Standart vaqt va quyoshning haqiqiy pozitsiyasi farq qiladi. Vaqt ustuni to'g'ri bo'lishi uchun tug'ilgan joyning uzunligiga asoslanib tuzatilishi kerak.",
    "backLabel": "Hisoblash asoslari",
    "sections": [
      {
        "title": "Soatdagi vaqt va quyosh vaqti farq qiladi",
        "blocks": [
          {
            "p": "Saju vaqt ustuni (時柱) quyosh pozitsiyasiga asoslanadi. Biroq, biz ko'rayotgan soat butun mamlakat uchun yagona standart vaqtni ishlatadi, bu esa quyoshning haqiqiy pozitsiyasi bilan farq qiladi."
          },
          {
            "p": "Koreyaning standart vaqti 135° sharqiy uzunlikka asoslangan. Seulning uzunligi taxminan 127° bo'lib, bu taxminan 8° g'arbiydir, bu esa quyoshning zenitiga yetish vaqtini kechiktiradi — soat bo'yicha tush payti bo'lganda, Seulda quyosh hali zenitga yetmagan. Bu farq taxminan **32 daqiqa**."
          }
        ]
      },
      {
        "kind": "note",
        "title": "32 daqiqa vaqt ustunini bir slotga o'zgartiradi",
        "blocks": [
          {
            "p": "Saju vaqt ikki soatlik birliklarga bo'lingan. Chegaraga yaqin tug'ilganlar 32 daqiqa farqi bilan vaqt ustunlari to'liq o'zgarishi mumkin — bu tuzatish aynan ushbu chegarada tushganlar uchun zarur."
          }
        ]
      },
      {
        "title": "Nima uchun tug'ilgan joyni so'raymiz",
        "blocks": [
          {
            "p": "Agar uzunlik farq qilsa, tuzatish miqdori ham farq qiladi. Seulga asoslangan tuzatishni chet elda tug'ilganlarga qo'llash vaqt ustunida katta farq keltiradi. Shuning uchun, kirish ekranida tug'ilgan joyingizni tanlashingiz kerak va hisoblash o'sha shaharning uzunligi va standart vaqtiga asoslanadi. Hozirda ro'yxatda {cityCount} joy mavjud."
          },
          {
            "p": "Bir xil mamlakat ichida (masalan, AQSH, Rossiya, Indoneziya va boshqalar) uzunlik juda farq qiladigan joylarda shaharlar bo'lingan. **15° uzunlik bir vaqt ustuni slotiga teng.**"
          },
          {
            "p": "Agar siz tanlamasangiz, hisoblash Seulga asoslanadi. Ko'p tug'ilishlar ichki mamlakatda bo'lgani uchun bu xato qilish imkoniyatini kamaytiradi, lekin agar siz chet elda tug'ilgan bo'lsangiz, iltimos, tanlashni unutmang."
          }
        ]
      },
      {
        "title": "Standart vaqt o'tmishda bir necha marta o'zgargan",
        "blocks": [
          {
            "p": "Tuzatishni oddiy qilib 'uzunlik farqi ÷ 15° × 60 daqiqa' deb hisoblash mumkin emasligi sababli bir sabab bor. Standart vaqt o'z davrlarida farq qilgan."
          },
          {
            "table": {
              "caption": "Koreyaning standart vaqti o'zgarishlari — bu davrda tug'ilganlar oddiy hisob-kitoblar bilan farqlarga ega bo'lishadi",
              "head": [
                "Davr",
                "Nima farq qildi"
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
                  "Yozgi vaqtni saqlash vaqti joriy etildi"
                ]
              ]
            }
          },
          {
            "p": "Inyeon-Link standart meridian uchun o'zgaruvchan qiymat ishlatmaydi, balki tug'ilgan joyning **IANA vaqt zonasiga** asoslanib, o'sha paytda haqiqatan ham ishlatilgan standart vaqtni hisoblaydi. Yozgi vaqtni saqlash va o'tgan standart vaqtlar avtomatik ravishda aks ettiriladi."
          }
        ]
      },
      {
        "title": "Yarim kechadan keyin tug'ilganlar sanani ham hisobga oladi",
        "blocks": [
          {
            "p": "To'g'rilash -32 daqiqa bo'lgani uchun, soat bo'yicha 00:00 dan 00:32 gacha tug'ilganlar haqiqiy quyosh vaqtida **oldingi kunning 23:00** da bo'ladi. Agar faqat vaqt qaytarilsa va sana o'zgartirilmasa, kun ustuni 'oldingi kunning 23:00' deb yoziladi."
          },
          {
            "p": "Inyeon-Link bu holatda sanani ham qaytaradi. Kun ustuni saju da shaxsni ko'rsatadi, shuning uchun agar bu noto'g'ri bo'lsa, deyarli barcha moslik elementlari noto'g'ri bo'ladi."
          }
        ]
      },
      {
        "title": "Vaqtni bilishingiz shart emas",
        "blocks": [
          {
            "p": "Tug'ilish vaqti ixtiyoriydir. Agar siz bilmasangiz, hisoblash vaqt ustunisiz amalga oshiriladi va bu haqda natijalar ekranida ko'rsatiladi. Moslikda vaqt ustunini to'g'ridan-to'g'ri yozish talab qilinmaydi, lekin bu beshta elementga ta'sir qiladi, shuning uchun agar bilsangiz, uni kiritish aniqroq bo'ladi."
          },
          {
            "p": "Zodiak mosligi har doim bir xil qiymatga ega, vaqtga qaramay — [chunki u faqat yil ustunini ko'radi](/guide/zodiac)."
          }
        ]
      }
    ]
  },
  "guide/no-storage": {
    "eyebrow": "Shaxsiy Ma'lumotlar",
    "title": "Kiritilgan ma'lumotlarni saqlamaslik usuli",
    "summary": "Bu sizning tug'ilgan sanangiz hech joyda yozilmasligini texnik jihatdan nimani anglatishini va natija havolasida nima kiritilganini tushuntiradi.",
    "backLabel": "Hisoblash Asosi",
    "sections": [
      {
        "title": "A'zolik talab qilinmaydi",
        "blocks": [
          {
            "p": "Inyeon-Link hisoblar yaratmaydi. U ismlar, elektron pochta manzillari yoki telefon raqamlarini yig'maydi. Yig'iladigan yagona ma'lumot tug'ilgan sana va (ixtiyoriy ravishda) tug'ilish vaqti, tug'ilish joyi va jinsdir, va hatto bu hisoblash tugagandan so'ng qolmaydi."
          },
          {
            "p": "Natijalar ekranida ko'rsatish uchun sarlavha kiritish maydoni mavjud, lekin bu **faqat ko'rsatish maqsadlari uchun** va hisoblashda ishlatilmaydi. Siz haqiqiy ismingizni kiritishingiz shart emas."
          }
        ]
      },
      {
        "title": "Natija havolasida nima kiritilgan?",
        "blocks": [
          {
            "p": "Hisoblash tugagach, manzil quyidagicha ko'rinadi."
          },
          {
            "p": "**/ko/compatibility/result#eyJhIjp7InkiOjE5OTAsLi4u**"
          },
          {
            "p": "**#** dan keyin keladiganlar kiritilgan qiymatlar. Bu qism **fragment** deb ataladi, bu **brauzer serverga yubormaydigan bo'lim**. Bu standart veb xulq-atvori va biz yaratgan qoidalar emas — aslida hujjat ichidagi joyni ko'rsatish uchun mo'ljallangan, shuning uchun serverga uni ko'rish zarurati yo'q."
          },
          {
            "p": "Boshqacha qilib aytganda, natija havolasini ochganingizda, brauzer o'sha qiymatni hisoblashni so'rash uchun o'qiydi va bizning serverimiz hisoblash uchun zarur bo'lgan qiymatlarni oladi, javobni qaytaradi va keyin uni unutadi."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Boshqalarga havolalarni yuborishda ehtiyot bo'ling",
        "blocks": [
          {
            "p": "Bu serverda saqlanmasligi va havolaning xavfsizligi bir xil emas. Natija havolasi sizning ikkita tug'ilgan sanangizni o'z ichiga oladi, shuning uchun o'sha havolani olgan kishi bir xil natijani ko'rishi mumkin."
          }
        ]
      },
      {
        "title": "Nima uchun hisoblash serverda amalga oshiriladi, lekin saqlanmaydi?",
        "blocks": [
          {
            "p": "Hisoblash o'zi serverda amalga oshiriladi. Saju yaratish uchun Koreya lunisolar almanagi kerak, va bu jadval brauzerga yuborish uchun juda katta. Biroq, **so'rovni qayta ishlagandan so'ng, o'sha qiymat hech joyda ishlatilmaydi.** Uni ma'lumotlar bazasida saqlash uchun hech qanday kod yo'q."
          },
          {
            "p": "Ishlash uchun zarur bo'lgan minimal yozuv saqlanadi — bir xil shaxsning qisqa vaqt ichida juda ko'p so'rov yuborishini oldini olish uchun hisoblagich. Bu tug'ilgan sanani o'z ichiga olmaydi, va kirish IPsi ham saqlanmaydi. Faqat bitta qiymat, sanaga xeshlangan holda, hisoblanadi va o'sha qiymat kun o'zgarganda o'zgaradi."
          }
        ]
      },
      {
        "title": "Ma'lumotlar saqlanmaganligi sababli amalga oshirilmaydigan narsalar",
        "blocks": [
          {
            "p": "Haqiqatdan ham, biz ma'lumotlarni saqlamaymiz, shuning uchun ba'zi narsalardan voz kechganmiz."
          },
          {
            "ul": [
              "**O'tgan natijalarni qaytarib ololmaysiz.** Ularni yana ko'rish uchun havolaga ega bo'lishingiz kerak.",
              "**Bir xil qiymatlar qayta hisoblanadi.** Kesh yo'q. Biroq, barcha qoidalar deterministik bo'lgani uchun, [bir xil kiritish har doim bir xil qiymatni beradi](/guide/how-compatibility).",
              "**Yangilash reklama darvozasi qaytadi.** Bu ko'rish yozuvlarini saqlash joyi yo'qligi sababli."
            ]
          }
        ]
      },
      {
        "title": "Sotib olish holatida",
        "blocks": [
          {
            "p": "Agar siz hisobot sotib olsangiz, o'sha paytda tranzaksiya yozuvi saqlanadi. Qonun to'lovlar uchun saqlash muddatini belgilaydi va buyurtma tarixi bo'lmasa, qaytarish amalga oshirilmaydi. Biroq, shunda ham, **moslik hisoblashlari uchun ishlatilgan tug'ilgan sana buyurtmaga bog'lanmaydi** — to'lov tasdiqlangandan so'ng PDF yaratishda yana yig'iladi."
          },
          {
            "p": "Tafsilotlar [Maxfiylik siyosatida](/privacy) bayon etilgan."
          }
        ]
      }
    ]
  },
  "guide/reports": {
    "eyebrow": "Pullik Mahsulotlar",
    "title": "Pullik hisobotda nima kiritilgan?",
    "summary": "Bu ekran o'zgarmasdan PDF ga qo'shilgan narsalarni, har birini tushuntiradi. Qiymatlar va mazmunlar haqiqiy mahsulot sozlamalaridan o'qiladi.",
    "backLabel": "Hisoblash Asosi",
    "sections": [
      {
        "title": "Ekran o'zgarmaydi, faqat PDF ga qo'shiladi",
        "blocks": [
          {
            "p": "Moslik hisoblashlari va natijalarni so'rash **bepul**. Moslashuv ko'rsatkichlari, element ballari va vaznlari, ikkala shaxsning saju asl diagrammalari va munosabat shakli ekran orqali ko'rinishi mumkin. Pullik hisobotni yaratishda ekrandan hech narsa olib tashlanmagan."
          },
          {
            "p": "Hisobotning maqsadi **ekranda yo'q bo'lgan qatlamlarni qo'shishdir**. Va o'sha qatlam soxta emas; u ballar jarayonida allaqachon hisoblangan, lekin ekranda ishlatilmagan qiymatlardan iborat."
          }
        ]
      },
      {
        "title": "Saju Moslik Hisoboti PDF — {priceGunghapDomestic}",
        "slot": "gunghapContents",
        "blocks": [
          {
            "p": "Mahalliy to'lov {priceGunghapDomestic} (QQSni o'z ichiga olgan holda), xalqaro to'lov {priceGunghapGlobal}. A4 {pagesGunghap} sahifa."
          }
        ]
      },
      {
        "blocks": [
          {
            "p": "**1-3-sahifalar ekranda ko'rsatilgan narsalarni saqlash uchun tashkil etilgan** va **4-sahifadan boshlab ekranda bo'lmagan kontent**. Quyida ba'zi narsalar ekranda ko'rsatilmaganligi sababi tushuntiriladi."
          }
        ]
      },
      {
        "title": "4-sahifa — Ikkita energiyaning yo'nalishi",
        "blocks": [
          {
            "p": "Ekranda ko'rsatilgan besh elementning elementlari bitta ball sifatida taqdim etiladi. Biroq, bu bitta ball **ikki yo'nalishning o'rtacha qiymati** — boshqasi menga qancha to'ldirishi va men boshqasini qancha to'ldirayotganimni o'lchab, o'sha qiymatlarni o'rtacha qiladi."
          },
          {
            "p": "To'ldirish o'zaro **asimmetrik**dir. Bu, menga kerak bo'lgan energiyalar va boshqaga kerak bo'lgan energiyalar farq qiladi. Agar siz faqat o'rtacha qiymatga qarasangiz, bir tomon boshqasini sezilarli darajada to'ldiradigan munosabat va ikkala tomon bir-birini teng to'ldiradigan munosabat bir xil raqam sifatida ko'rinadi. Hisobot bu ikkitasini ajratadi."
          },
          {
            "p": "Shuningdek, ushbu bo'limda **to'rt ustunlarning munosabat jadvali** ham kiritilgan. Moslashuv darajasiga kiradigan yagona narsa kunning filialidir (日支) — chunki bu turmush o'rtog'ining pozitsiyasi — lekin boshqa yil, oy va soat filialari ham shu munosabat jadvali bilan o'qilishi mumkin."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ushbu jadvaldagi ballar moslashuv darajasiga kirmaydi",
        "blocks": [
          {
            "p": "Agar kiritilsa, umumiy ball o'zgaradi va allaqachon yuborilgan natija havolasi bilan mos kelmaydi. Shuning uchun, bu faqat o'qish material sifatida kiritilgan va bu haqda jadval ostida eslatma berilgan."
          }
        ]
      },
      {
        "title": "5-sahifa — Har bir insonning saju'siga yaqinroq qarash",
        "blocks": [
          {
            "p": "Ekrandagi besh elementning ustunlari **qanchalik mavjudligini** ko'rsatadi. Hisobot **tug'ilish oyi ushbu energiyani qo'llab-quvvatlaydimi** yoki yo'qligini qo'shadi. Bir xil miqdorda bo'lsa ham, kuchli energiya (旺) va o'lik energiya (死) turlicha kuchga ega."
          },
          {
            "p": "Siz tug'ilish oyining energiyasi bilan ko'paytirgandan oldin va keyin kuchlarni yonma-yon ko'rishingiz mumkin, bu mavsumning uni qanday ko'targanini ko'rsatadi. Kuchli kun ustuni va zaif kun ustuni o'rtasidagi **ittifoq nisbati** ham qayd etilgan — ekran faqat hukmni ko'rsatadi, ammo hisobot bu hukm qayerda qilinganini ko'rsatadi."
          }
        ]
      },
      {
        "title": "6-sahifa — Boshqa insonning to'rt ustuni menga nima anglatadi",
        "blocks": [
          {
            "p": "Moslashuv darajasi faqat ikkala shaxsning **kun ustunlarini** taqqoslaydi. Biroq, boshqa insonning qolgan uchta ustuni ham Ten Gods tomonidan bir xil qoidalar bilan aniqlanadi. Siz faqat kun ustuniga qarab **bu inson menga nima anglatishini** tushunishingiz mumkin, lekin **o'sha insonning pozitsiyasi menga nima anglatishini** bilolmaysiz."
          },
          {
            "p": ""
          }
        ]
      },
      {
        "title": "7-sahifa — Ushbu saju qanday hisoblangan",
        "blocks": [
          {
            "p": "Tug'ilish vaqti haqiqiy quyosh vaqtidan qancha o'zgartirilgani, tuzatish sanani o'zgartirishga olib kelganmi yoki yo'qligini va saju yaratilganida quyosh va oy sanalari qanday bo'lganini ko'rsatadi. Konseptsiyani [Tug'ilish vaqtini haqiqiy quyosh vaqtidan o'zgartirish](/guide/true-solar-time) hujjatida tushuntiriladi, lekin **sizning holatingizda qancha daqiqa o'zgartirilgani** har bir inson uchun farq qiladi, shuning uchun bu faqat hisobotda kiritilgan."
          }
        ]
      },
      {
        "title": "Inyeon moslik profili hisobot PDF — {priceAffinityDomestic}",
        "slot": "affinityContents",
        "blocks": [
          {
            "p": "Mahalliy to'lov {priceAffinityDomestic} (QQSni o'z ichiga olgan holda), xalqaro to'lov {priceAffinityGlobal}. A4 {pagesAffinity} sahifa."
          }
        ]
      },
      {
        "blocks": [
          {
            "p": ""
          }
        ]
      },
      {
        "title": "",
        "blocks": [
          {
            "p": "**Server fayllarni saqlamaydi.** To'lov tasdiqlangandan so'ng, hujjat yaratiladi va darhol yuboriladi, serverda hech narsa qoldirmaydi. Ushbu xizmatning kiritilgan qiymatlarni saqlamaslik tamoyili to'langan jarayonda ham saqlanadi."
          },
          {
            "p": "Shuning uchun, **to'lovdan so'ng faylni darhol saqlang.** Siz bir xil buyurtmani besh marta olishingiz mumkin, lekin natijalar ekranidan chiqib, kiritilgan qiymatlar yo'qolsa, uni qayta yaratib bo'lmaydi."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Hisobotlar ham ma'lumot manbai",
        "blocks": [
          {
            "p": "Uzoqlik oshgani bilan xulosa ko'proq aniq degani emas. Hisobotda ko'proq mavjud bo'lgan narsa **bir xil hisoblashning asosi**, kuchli da'vo emas. Ta'qdirni o'qish amaliyotchiga qarab xulosalar farq qilishi mumkin bo'lgan soha, va ushbu xizmat faqat qoidalarga tarjima qilinadigan narsalarni hisoblaydi."
          }
        ]
      }
    ]
  },
  "notice": {
    "eyebrow": "E'lon",
    "title": "E'lonlar",
    "summary": "Bu foydalanishga ta'sir etuvchi o'zgarishlar haqida ma'lumot berish joyidir.",
    "backLabel": "Bosh sahifaga qaytish",
    "sections": []
  },
  "contact": {
    "eyebrow": "Aloqa",
    "title": "So'rovlar",
    "summary": "Bu foydalanish, qaytarish, shaxsiy ma'lumotlar so'rovlari va xato xabarlariga oid so'rovlar uchun kanal, shuningdek, biznes ma'lumotlari.",
    "backLabel": "Bosh sahifaga qaytish",
    "sections": [
      {
        "title": "Email orqali aloqa",
        "blocks": [
          {
            "p": "Iltimos, so'rovlarni **{email}** manziliga yuboring. Biz 2 ish kuni ichida javob beramiz. To'lov va qaytarish so'rovlari uchun, iltimos, **buyurtma raqamini yoki to'lov uchun ishlatilgan emailni** tezroq tasdiqlash uchun qo'shing."
          },
          {
            "p": "Telefon orqali so'rovlar {customerCenter} raqamida amalga oshirilishi mumkin."
          }
        ]
      },
      {
        "title": "Ushbu kanalga nima yuborilishi mumkin?",
        "blocks": [
          {
            "ul": [
              "**To'lov va Qaytarish** — Agar hujjat yaratilmagan bo'lsa yoki to'lov miqdori buyurtmadan farq qilsa, to'liq qaytarish taqdim etiladi. Shartlar [qaytarish siyosati](/refund-policy)da.",
              "**Shaxsiy Ma'lumotlar** — Biz ko'rish, tuzatish va o'chirish so'rovlarini qabul qilamiz. Qayta ishlash siyosati [maxfiylik siyosati](/privacy)da.",
              "**Hisoblash Xatosi Hisoboti** — Agar saju asl jadvali yoki ball g'alati ko'rinsa, iltimos, bizga xabar bering. Agar siz sanani va vaqtni kiritganingizni qo'shsangiz, biz bir xil qiymatlar bilan qayta hisoblashimiz mumkin."
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
              "**Pochta Buyurtmasi Biznes Ro'yxatga Olish Raqami** — {mailOrderNumber}",
              "**Manzil** — {address}",
              "**Mijozlar Markazi** — {customerCenter}",
              "**Email** — {email}",
              "**Shaxsiy Ma'lumotlarni Himoya Qiluvchi Shaxs** — {privacyOfficer}",
              "**Hosting Provayderi** — {hostingProvider}"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Sizga so'rov emailida tug'ilgan sana va vaqtni kiritishingiz shart emas. Biz kirishlarni saqlamaymiz, shuning uchun ularni qayta tiklay olmaymiz, va buyurtma raqami tasdiqlash uchun yetarli. Iltimos, faqat hisob-kitob xato hisobotlari uchun zarur bo'lsa, uni qo'shing."
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
  "intro": "Foydalanish shartlaringizga o'zgarishlar — narxlar, siyosatlar — bu yerda kuchga kirishidan oldin e'lon qilinadi. Ichki yaxshilanishlar ro'yxatga olinmaydi: bu yerda ko'rsatilganlar siz bilishingiz kerak bo'lgan narsalardir.",
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
        "Savollar, qaytarishlar, maxfiylik so'rovlari va hisoblash xatolari haqida xabarlar endi bitta joyga yo'naltiriladi — pastki qismdagi aloqa sahifasini ko'ring.",
        "Agar biror narsa noto'g'ri hisoblangan bo'lsa, iltimos, uni ishlab chiqaruvchi tug'ilish tafsilotlarini qo'shing. Biz siz kiritgan ma'lumotlarni saqlamaymiz, shuning uchun ularni kiritmasangiz, o'qishni qayta tiklay olmaymiz."
      ]
    },
    "2026-08-01-pdf-language": {
      "title": "Hisobotlar arab va khmer tillarida ingliz tilida chiqariladi",
      "body": [
        "Agar siz arab yoki khmer tilida o'qiyotgan bo'lsangiz, xarid qilgan PDF hisobotingiz ingliz tilida tayyorlanadi. Hujjatlarimizni joylashtiradigan vosita hali o'sha yozuvlarda paragraflarni belgilay olmaydi.",
        "Ekran sizning tilingizda qoladi va ismingiz hisobot ichida o'z yozuvingizda chop etiladi.",
        "To'lovdan oldin shunga o'xshash eslatma ko'rsatiladi. Vosita ushbu yozuvlarni qo'llab-quvvatlaganda, biz bu yerda aytib o'tamiz."
      ]
    },
    "2026-08-01-engine-version": {
      "title": "Har bir o'qish ishlatilgan qoidalar versiyasini o'z ichiga oladi",
      "body": [
        "Har bir o'qish va hisobot uni ishlab chiqarish uchun ishlatilgan qoidalar to'plamini o'z ichiga oladi (masalan, inyeonlink-match-v10). Bir xil kirish bir xil qoidalar to'plamida har doim bir xil raqamlarni beradi.",
        "Agar biz bahoni o'zgartirishi mumkin bo'lgan talqin qoidalarini o'zgartirsak, biz bu yerda avval e'lon qilamiz, kuchga kirish sanasi bilan — chunki siz allaqachon ushlab turgan natija havolasi boshqacha o'qilishi mumkin.",
        "Hozirgi qoidalar to'plami v10. To'lovlar hali ochiq emas."
      ]
    }
  }
} satisfies NoticeCopy;
