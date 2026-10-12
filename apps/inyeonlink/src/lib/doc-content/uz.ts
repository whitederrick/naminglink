import type { DocPage, NoticeCopy } from "./types";
import type { DocKey } from "./ko";

/** O‘zbekcha — `scripts/translate-doc-content.ts`가 만든다. 손으로 고치지 말 것. */
export const UZ_DOCS = {
  "about": {
    "eyebrow": "Haqida",
    "title": "Inyeon-Link haqida",
    "summary": "Biz ikki tug‘ilish xaritasini Koreya saju an'anasida taqqoslaymiz. Biz nima hisoblaymiz va nima da'vo qilmaymiz.",
    "backLabel": "Bosh sahifa",
    "sections": [
      {
        "title": "Biz nima qilamiz",
        "blocks": [
          {
            "p": "Inyeon-Link tug‘ilish sanalari va vaqtlaridan ikki tug‘ilish xaritasini tuzadi va **ikki energiya to‘plami qanday uchrashishini ko‘rsatadi.** Siz shuningdek, o‘z xaritangizni alohida o‘qishingiz va qaysi temperamentlar sizga mos kelishini ko‘rishingiz mumkin."
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
            "p": "Ballar faqat belgilangan qoidalardan kelib chiqadi. An'anaviy tushunchalar — o‘n xudo, yer shoxlari munosabatlari, qo‘llab-quvvatlovchi element — qoidalar sifatida ifodalanadi, shuning uchun **bir xil kirish har doim bir xil natijani beradi.** Qoidalar o‘zgarganda, biz eski o‘qishlar harakatlanmaganligini ta'minlash uchun regressiya tizimini ishga tushiramiz."
          },
          {
            "p": "**Sun'iy intellekt ishtirok etmaydi.** Ekrandagi har bir jumla hisoblangan natijaga bog‘langan belgilangan matn."
          }
        ]
      },
      {
        "title": "Biz nima da'vo qilmaymiz",
        "blocks": [
          {
            "ul": [
              "**Biz kelajakni aytmaymiz.** Bu yerda hech narsa sizga kimnidir izlash yoki undan qochish kerakligini aytmaydi. Bu an'anadan olingan ma'lumot.",
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
    "summary": "Inyeon-Link barcha qoidalarni ochib beradi. Siz elementlar va ularning vaznlarini, yer shoxlari munosabatlari jadvalidan olingan ballarni va kuchli kun poyasi bilan zaif kun poyasi o‘rtasidagi farqni belgilovchi chegara qiymatlarini tekshirishingiz mumkin — ekrandagi raqamlar qayerdan kelganini ko‘rishingiz mumkin.",
    "backLabel": "Boshlanishga qaytish",
    "sections": [
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Bu yerda yozilgan qiymatlar **hisoblash kodidan to‘g‘ridan-to‘g‘ri o‘qilgan.** Ular matnga qo‘lda yozilmaganligi sababli, agar qoidalar o‘zgarsa, ushbu hujjatdagi raqamlar ham o‘zgaradi."
          }
        ]
      }
    ]
  },
  "guide/how-compatibility": {
    "eyebrow": "Xizmat Asosi",
    "title": "Saju Muvofiqligi Nima?",
    "summary": "Bu to‘rt element va ularning mos keluvchi vaznlarini aniqlaydi va nima uchun ushbu to‘rt element tanlanganligini tushuntiradi. Shuningdek, tug‘ilish vaqtini bilmasdan ham hisoblashlar amalga oshirilishi mumkinligini ko‘rsatadi.",
    "backLabel": "Hisoblash Asosi",
    "sections": [
      {
        "title": "Ikki O‘qni Hisoblash va Birlashtirish",
        "blocks": [
          {
            "p": "Moslik darajasi ikki shoxdan keladi. **Saju muvofiqligi** har ikkala shaxsning to‘liq saju asl xaritasini ko‘rib chiqadi, **zodiak muvofiqligi** esa tug‘ilish yilidan bir yer shoxini hisobga oladi. Yakuniy qiymat ikkitasining vaznli o‘rtacha hisoblanishi orqali olinadi."
          },
          {
            "table": {
              "head": [
                "O‘q",
                "Nima hisobga olinadi",
                "Vazn"
              ],
              "rows": [
                [
                  "Saju Muvofiqligi",
                  "Kun poyasi, kun shoxi, va beshta element — to‘rt element",
                  "{weightSaju}"
                ],
                [
                  "Zodiak Muvofiqligi",
                  "Yil shoxlari o‘rtasidagi munosabat",
                  "{weightZodiac}"
                ]
              ]
            }
          },
          {
            "p": "Saju tomoni ko‘proq og‘ir, chunki ishlatiladigan ma'lumotlar miqdori farq qiladi. Saju to‘rt ustunni hisobga oladi, zodiak esa faqat bitta belgi bilan cheklanadi. Biroq, zodiak ikkita sababga ko‘ra chiqarib tashlanmaydi — bu eng intuitiv tushunarli element va bu **tug‘ilish vaqtini bilmasdan ham qiymati o‘zgarmaydigan yagona o‘qdir.**"
          }
        ]
      },
      {
        "title": "Saju Muvofiqligining To‘rt Elementi",
        "blocks": [
          {
            "p": "Saju tomoni to‘rt qismga bo‘linadi. Har bir element tanlanadi, shunda ularning hisobga oladigan narsalari bir-biriga to‘g‘ri kelmaydi."
          },
          {
            "figure": "four-pillars",
            "caption": "Saju tug‘ilish yili, oyi, kuni va soati uchun osmon poyalari va yer shoxlaridan iborat sakkiz belgidan tashkil topgan. Quyida keltirilgan kun poyasi va kun shoxi kun ustunidagi ikki belgidir.",
            "labels": {
              "year": "Yil Ustuni",
              "yearNote": "Asos · Zodiak",
              "month": "Oy Ustuni",
              "monthNote": "Mavsum · Kuch",
              "day": "Kun Ustuni",
              "dayNote": "Men · Turmush o'rtog'i saroyi",
              "hour": "Soat Ustuni",
              "hourNote": "Keyingi Yillar · Foydalanish",
              "stem": "Osmon Poyasi",
              "stemNote": "Kun Poyasi = Men",
              "branch": "Yer Shoxi",
              "branchNote": "Kun Shoxi = Turmush o'rtog'i saroyi"
            }
          },
          {
            "table": {
              "head": [
                "Element",
                "Nima hisobga olinadi",
                "Og'irlik"
              ],
              "rows": [
                [
                  "Kun poyasi munosabati",
                  "Ikkita odamning kun poyalari (日干) bir-biriga qanday ta'sir qiladi — O'n Xudolar orqali qaraladi",
                  "{weightDayMaster}"
                ],
                [
                  "Besh elementning to'ldirilishi",
                  "Hamkoringizda menga kerak bo'lgan energiya bormi — hozirgi vaqtda kerak bo'lgan qo'llab-quvvatlovchi element orqali qaraladi",
                  "{weightElementSupply}"
                ],
                [
                  "Turmush o'rtog'i yulduzi",
                  "Hamkoringizning kun poyasi mening turmush o'rtog'i pozitsiyamga mos keladimi?",
                  "{weightSpouseStar}"
                ],
                [
                  "Kun shoxi munosabati",
                  "Ikkita odamning kun shoxlari (日支) birlashma yoki to'qnashuvmi?",
                  "{weightDayBranch}"
                ]
              ]
            }
          },
          {
            "p": "Kun shoxi o'qiladi, chunki an'anaga ko'ra u **turmush o'rtog'i saroyi** sifatida qaraladi. To'rt ustun ichidan hamkorga ishora qiluvchisi aynan shu bo'lib, shuning uchun moslik birinchi navbatda shu yerga qaraydi."
          }
        ]
      },
      {
        "title": "Agar jins oshkor qilinmasa, turmush o'rtog'i elementi chiqarib tashlanadi",
        "blocks": [
          {
            "p": "Turmush o'rtog'i elementi hisoblash uchun jinsni bilishni talab qiladi. An'ana turmush o'rtog'iga ishora qiluvchi pozitsiyani jinsga qarab boshqacha o'qiydi. Agar oshkor qilinmasa, bu element **chiqariladi** va qolgan uch elementning og'irliklari qayta normallashtiriladi."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bu 0 ball sifatida hisobga olinmaydi",
        "blocks": [
          {
            "p": "Agar yo'q pozitsiyalar 0 ball sifatida hisobga olinsa, ball jins oshkor qilinmaganligi sababli adolatsiz ravishda pasayadi. Og'irliklarni qayta normallashtirish bu muammoni oldini oladi."
          }
        ]
      },
      {
        "title": "Tug'ilish vaqtini bilmasdan hisoblashlar amalga oshirilishi mumkin",
        "blocks": [
          {
            "p": "Tug'ilish vaqti soat ustunini aniqlash uchun ishlatiladi. Agar noma'lum bo'lsa, hisoblashlar soat ustunisiz amalga oshiriladi va bu haqda natijalar ekranida ko'rsatiladi. To'rt moslik elementlari orasida soat ustuni uchun to'g'ridan-to'g'ri kiritish yo'q, shuning uchun qiymatlar sezilarli darajada o'zgarishsiz qoladi, lekin bu besh elementning muvozanatiga ta'sir qiladi."
          },
          {
            "p": "Agar siz vaqtni bilsangiz, iltimos, tug'ilgan joyni ham tanlang. Agar standart vaqt haqiqiy quyosh pozitsiyasidan farq qilsa, uni shunday ishlatish soat ustunini noto'g'ri joylashtirishi mumkin [(haqiqiy quyosh vaqti tuzatish)](/guide/true-solar-time)."
          }
        ]
      },
      {
        "title": "Bir xil kiritish har doim bir xil qiymat beradi",
        "blocks": [
          {
            "p": "Barcha ballar qoidalar asosida belgilanadi. Sun'iy intellektdan foydalanilmaydi, shuningdek, tasodifiy raqamlar ham ishlatilmaydi. Shuning uchun, bir xil ikki tug'ilish sanasini bir necha marta kiritish turli natijalar bermaydi. Ma'lumotlarni saqlamaydigan xizmat sifatida oldingi natijalarni qayta olish mumkin emas, lekin **deterministiklik** buni qoplaydi."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Qoidalarni o'zgartirish versiyani oshiradi",
        "blocks": [
          {
            "p": "Har safar ball berish qoidalari o'zgartirilganda, dvigatel versiyasi yangilanadi. Versiya natijalar ekranining pastki qismida ko'rsatiladi, bu sizga ko'rayotgan raqamlarni hisoblashda qaysi qoidalar ishlatilganini ajratishga imkon beradi."
          }
        ]
      },
      {
        "title": "Bu natija nima emas",
        "blocks": [
          {
            "p": "Bu an'anaga asoslangan qoidalar orqali hisoblangan **ma'lumot manbai**. Bu ilmiy bashorat emas, shuningdek, ikki shaxs o'rtasidagi munosabatlar haqida aniq bayonot emas. Bu sababdan ball oralig'i taxminan 45 balldan kam bo'lmaydi — hech qanday birlashma 0 ballga yaqin qiymat bermaydi."
          }
        ]
      }
    ]
  },
  "guide/branches": {
    "eyebrow": "Munosabatlar jadvali",
    "title": "Zodiak hayvonlari va kun shoxlari qanday uchrashadi — O'n ikki shox jadvali",
    "summary": "Ikki kishining zodiak hayvonlari va kun shoxlari yonma-yon qo'yilganda ishlatiladigan munosabatlar jadvali. U o'n ikki hayvonning har biri uchun qaysi hayvonlar bilan uyg'unlik, to'qnashuv yoki nizo hosil qilishini ko'rsatadi va har bir munosabatning ballini ochiq keltiradi.",
    "backLabel": "Hisoblash asosi",
    "sections": [
      {
        "title": "Zodiak hayvonlari va kun shoxlari bir xil jadvaldan foydalanadi",
        "blocks": [
          {
            "p": "Inyeon-Link ikki kishining yer shoxlarini ikki joyda yonma-yon qo'yadi: tug'ilgan yil shoxiga qaraydigan **zodiak mosligi** va tug'ilgan kun shoxiga qaraydigan **kun shoxi mosligi** (turmush o'rtog'i saroyi). Ikkalasi ham quyidagi jadval bilan baholanadi; farq faqat yakuniy ballda har birining og'irligida."
          },
          {
            "figure": "branch-wheel",
            "caption": "O'n ikki belgini doira bo'ylab joylashtirsak, munosabatlar bir qarashda ko'rinadi. To'qnashuv doim to'g'ri qarama-qarshi tomonda turadi, olti uyg'unlik juftligi va tinch nizo esa yaqinroq qo'shnilardir. Bu chiziqlar qo'lda chizilmagan; ular to'g'ridan-to'g'ri hisoblash qoidalaridan chiziladi.",
            "labels": {
              "alt": "O'n ikki yer shoxi doira bo'ylab joylashgan, olti uyg'unlik, to'qnashuv va nizo juftliklarini chiziqlar bog'laydigan diagramma.",
              "yukhap": "Olti uyg'unlik",
              "chung": "To'qnashuv",
              "wonjin": "Nizo",
              "rat": "Sichqon",
              "ox": "Sigir",
              "tiger": "Yo'lbars",
              "rabbit": "Quyon",
              "dragon": "Ajdar",
              "snake": "Ilon",
              "horse": "Ot",
              "goat": "Qo'y",
              "monkey": "Maymun",
              "rooster": "Xo'roz",
              "dog": "It",
              "pig": "Cho'chqa"
            }
          }
        ]
      },
      {
        "title": "O'n ikki zodiak hayvonining har biri uchun munosabatlar",
        "blocks": [
          {
            "p": "Jadval har bir hayvon uchun u qaysi hayvonlar bilan qanday munosabatda ekanini sanab o'tadi. Faqat bu xizmat uyg'unlik deb tan oladigan juftliklar keltirilgan, shuning uchun qatorda ko'rinmagan hayvon u bilan alohida munosabatga ega emas — u **neytral**."
          },
          {
            "table": {
              "caption": "Bitta hayvon nuqtai nazaridan to'rt xil munosabat",
              "head": [
                "Sizning hayvoningiz",
                "Tortishuvchi juft (olti uyg'unlik)",
                "Yarim uchlik",
                "Ichdan qarama-qarshi (nizo)",
                "Yuzma-yuz to'qnashuv"
              ],
              "rows": [
                [
                  "Sichqon (子)",
                  "Sigir",
                  "Maymun · Ajdar",
                  "Qo'y",
                  "Ot"
                ],
                [
                  "Sigir (丑)",
                  "Sichqon",
                  "Xo'roz",
                  "Ot",
                  "Qo'y"
                ],
                [
                  "Yo'lbars (寅)",
                  "Cho'chqa",
                  "Ot",
                  "Xo'roz",
                  "Maymun"
                ],
                [
                  "Quyon (卯)",
                  "It",
                  "Cho'chqa · Qo'y",
                  "Maymun",
                  "Xo'roz"
                ],
                [
                  "Ajdar (辰)",
                  "Xo'roz",
                  "Sichqon",
                  "Cho'chqa",
                  "It"
                ],
                [
                  "Ilon (巳)",
                  "Maymun",
                  "Xo'roz",
                  "It",
                  "Cho'chqa"
                ],
                [
                  "Ot (午)",
                  "Qo'y",
                  "Yo'lbars · It",
                  "Sigir",
                  "Sichqon"
                ],
                [
                  "Qo'y (未)",
                  "Ot",
                  "Quyon",
                  "Sichqon",
                  "Sigir"
                ],
                [
                  "Maymun (申)",
                  "Ilon",
                  "Sichqon",
                  "Quyon",
                  "Yo'lbars"
                ],
                [
                  "Xo'roz (酉)",
                  "Ajdar",
                  "Ilon · Sigir",
                  "Yo'lbars",
                  "Quyon"
                ],
                [
                  "It (戌)",
                  "Quyon",
                  "Ot",
                  "Ilon",
                  "Ajdar"
                ],
                [
                  "Cho'chqa (亥)",
                  "Yo'lbars",
                  "Quyon",
                  "Ajdar",
                  "Ilon"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Ikki kishi jadvalda uchrashganda",
        "blocks": [
          {
            "p": "Jadvalni o'qish ikki hayvonni bitta qatordan topishni anglatadi. Quyida misol sifatida bir nechta juftlik keltirilgan."
          },
          {
            "ul": [
              "**Sichqon va Sigir** — olti uyg'unlik. U faqat ikki belgini talab qiladi, shuning uchun moslikda eng tez-tez uchraydigan va yaxshi uyg'unlikdir.",
              "**Sichqon va Ajdar** — yarim uchlik: 申子辰 uch belgisidan o'rtadagisini (子) o'z ichiga olgan ikkitasi.",
              "**Sichqon va Yo'lbars** — jadvalda yo'q, shuning uchun neytral: na uyg'unlik, na to'qnashuv, shunchaki boshlang'ich daraja.",
              "**Sichqon va Qo'y** — nizo. Yuzaki tinch ko'rinadi, ammo nomutanosiblik uzoq davom etadi deb hisoblanadi.",
              "**Yo'lbars va Maymun** — to'qnashuv. Ular aynan qarama-qarshi turadi va yuzma-yuz to'qnashadi deb qaraladi."
            ]
          }
        ]
      },
      {
        "title": "Har bir munosabat necha ball oladi",
        "blocks": [
          {
            "table": {
              "caption": "Eng yuqoridan boshlab. Bular Inyeon-Link haqiqatda ishlatadigan qiymatlar.",
              "head": [
                "Munosabat",
                "Ball"
              ],
              "rows": [
                [
                  "Olti uyg'unlik",
                  "{scoreYukhap}"
                ],
                [
                  "Yarim uchlik",
                  "{scoreBanhap}"
                ],
                [
                  "Bir xil shox",
                  "{scoreSame}"
                ],
                [
                  "Neytral",
                  "{scoreNeutral}"
                ],
                [
                  "Nizo",
                  "{scoreWonjin}"
                ],
                [
                  "To'qnashuv",
                  "{scoreChung}"
                ]
              ]
            }
          },
          {
            "p": "Bir xil shox (bir hayvonli ikki kishi) tortishuvni emas, o'xshashlikni bildiradi, shuning uchun neytraldan biroz yuqorida turadi. Zodiak yoki kun shoxi mosligi bo'lishidan qat'i nazar, bu jadvaldagi qiymat to'g'ridan-to'g'ri yakuniy ballga kiradi."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Nega to'liq uchlik jadvalda yo'q",
        "blocks": [
          {
            "p": "To'liq uchlik (申子辰, 巳酉丑, 寅午戌, 亥卯未) barcha uch belgini talab qiladi. Ikki kishini yonma-yon qo'ysak, faqat ikkitasi chiqadi, shuning uchun moslikda to'liq uchlik bo'lishi mumkin emas va faqat yarim uchlik uchraydi. To'liq uchlikning {scoreSamhap} ballik qiymati bir kishining o'z jadvalida uch belgi birga kelgan holat uchun saqlanadi."
          }
        ]
      },
      {
        "title": "申辰, 巳丑, 寅戌 va 亥未 uyg'unlik hisoblanmaydi",
        "blocks": [
          {
            "p": "Ba'zi usullar bir uchlik guruhining istalgan ikki belgisini yarim uchlik deb hisoblaydi. Inyeon-Link bunday qilmaydi: yuqoridagi yarim uchlik ustuni ko'rsatganidek, u faqat guruh markazidagi **shoh shoxni** (子, 午, 卯, 酉) o'z ichiga olgan juftliklarni qabul qiladi. Unsiz juftlikda shakllanish yig'iladigan markaz yo'q, shuning uchun u neytral deb hisoblanadi."
          }
        ]
      },
      {
        "title": "Nizo va to'qnashuv eng pastda turmaydi",
        "blocks": [
          {
            "p": "Faqat uyg'unlik va to'qnashuv sanalganda, barcha olti nizo juftligi neytralda yo'qolib ketardi. Shuning uchun nizoning o'z o'rni bor: yuzma-yuz to'qnashuvdan yuqori va neytraldan past, {scoreWonjin} ball."
          },
          {
            "p": "To'qnashuv ham {scoreChung} ballni saqlab qoladi. An'anaviy myeongri'da to'qnashuv — bu to'qnashish, munosabatning oxiri emas. Nolga yaqin qiymat xizmatni ikki kishi haqida hukm chiqarishga olib kelardi, shuning uchun oraliq farqni ko'rsatadigan, ammo hukm chiqarmaydigan darajada keng saqlanadi."
          }
        ]
      }
    ]
  },
  "guide/zodiac": {
    "eyebrow": "Zodiak",
    "title": "Nima uchun zodiak mosligi yil shoxini hisobga oladi?",
    "summary": "Zodiak tug'ilgan yilning yer shoxi hisoblanadi. Bu saju yil ustuni asosida olinganligini tushuntiradi, shuningdek, zodiak mosligining ahamiyatini aniqlaydi.",
    "backLabel": "Hisoblash Asosi",
    "sections": [
      {
        "title": "Zodiak tug'ilgan yilning yer shoxi hisoblanadi",
        "blocks": [
          {
            "p": "Saju to'rt ustundan iborat: yil, oy, kun va soat, har bir ustun bir osmon poyasi va bir yer shoxini o'z ichiga oladi. **Yil shoxi** zodiak belgisi deb ataladigan hayvonni olib yuradigan shoxdir."
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
                  "Maymun"
                ],
                [
                  "酉",
                  "Xo'roz"
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
            "p": "Zodiak o'zgaradigan nuqta na quyosh taqvimi 1-yanvar, na Oyning Yangi Yili. Saju yilini o'zgartirish standarti **Ipchun** dir. Shuning uchun, yanvar yoki fevralning boshida tug'ilganlar taqvimda ko'rsatilgan yildan farqli zodiak yiliga ega bo'lishi mumkin."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Nima uchun biz zodiak haqida to'g'ridan-to'g'ri so'ramaymiz",
        "blocks": [
          {
            "p": "Shuning uchun biz faqat tug'ilgan sanani to'playmiz, zodiakni kiritish ekranida so'ramaymiz. Saju dvigateli yil shoxini hisoblaganda, Ipchun chegarasi avtomatik ravishda moslashtiriladi. Agar siz uni to'g'ridan-to'g'ri tanlasangiz, fevralning boshida tug'ilgan kishi o'zining haqiqiy zodiakiga mos kelmaydigan zodiakni tanlashi mumkin."
          }
        ]
      },
      {
        "title": "Zodiak mosligi faqat bitta munosabatni hisobga oladi",
        "blocks": [
          {
            "p": "Zodiak mosligini hisoblash oddiy. Bu ikki odamning yil shoxlarini taqqoslaydi va munosabatning uyg'un, to'qnashuv yoki tinch nizoli ekanligini aniqlaydi va bu ballni shunday ishlatadi. Faqat bitta element bo'lgani uchun, vaznlarni taqsimlash shart emas."
          },
          {
            "p": "Har bir munosabat uchun ballar [O'n Ikki Shoxlar Munosabatlar Jadvali](/guide/branches) da keltirilgan. Kun shoxi mosligi ham xuddi shu jadvaldan foydalanadi."
          }
        ]
      },
      {
        "title": "Vaznni belgilash sababi",
        "blocks": [
          {
            "p": "Zodiak mosligi yakuniy moslik darajasining {weightZodiac} ni hisobga oladi. Saju mosligi to'rt ustunni ko'rib chiqsa, zodiak faqat bitta xarakterni hisobga oladi, shuning uchun ular teng vaznlanishi mumkin emas."
          },
          {
            "p": "Biroq, uni chiqarib tashlashning ikki sababi bor."
          },
          {
            "ul": [
              "**Bu eng intuitiv tushunarli elementdir**. An'anaviy so'z boyligini bilmasangiz ham, 'yo'lbars va maymun to'qnashadi' tushunarli.",
              "**Bu tug'ilish vaqti noma'lum bo'lsa ham o'zgarishsiz qoladigan yagona o'qdir**. Agar siz vaqtni bilmasangiz, soat ustuni yo'qoladi va besh elementning kuchi o'zgaradi, lekin yil shoxi o'zgarmaydi."
            ]
          }
        ]
      },
      {
        "title": "Siz zodiak mosligini alohida ham ko'rishingiz mumkin",
        "blocks": [
          {
            "p": "Natijalar ekranida biz saju mosligi va zodiak mosligini alohida ko'rsatamiz. Agar faqat yakuniy moslik darajasi taqdim etilsa, bu raqam qayerdan kelganini aniqlash qiyin. Agar ikkita qiymat sezilarli darajada farq qilsa, bu o'z-o'zidan e'tiborga molikdir."
          }
        ]
      }
    ]
  },
  "guide/zodiac-rat": {
    "eyebrow": "Hayvon bo'yicha",
    "title": "Sichqon o'n ikki zodiak hayvoni bilan qanday uchrashadi",
    "summary": "Sichqon (子) o'n ikki zodiak hayvonining har biri bilan qanday munosabatda bo'lishi, har biri necha ball olishi va bu ball yakuniy moslik darajasining qancha qismini egallashi — Inyeon-Link hisoblash qoidalaridagi aynan shu ko'rinishda keltirilgan.",
    "backLabel": "Hisoblash asosi",
    "sections": [
      {
        "title": "Sichqon — o'n ikki shoxning birinchisi",
        "blocks": [
          {
            "p": "Sichqon — tug'ilgan yil shoxi **子** bo'lgan kishi. 子 o'n ikki yer shoxining birinchisi bo'lib, o'n ikki belgi doira bo'ylab joylashtirilganda 午 (Ot) belgisining aynan qarshisida turadi."
          },
          {
            "p": "Moslik natijasi Sichqon yilida tug'ilgan kishi uchun ko'rsatadigan satr: \"Tez sezadi va keragini tez qo'lga kiritadi. Xavf paytida birinchi bo'lib qimirlaydi.\" Bu satrning munosabat ballariga aloqasi yo'q va quyidagi ballarga ta'sir qilmaydi."
          }
        ]
      },
      {
        "title": "O'n ikki zodiak hayvoni bir qarashda",
        "blocks": [
          {
            "p": "Qolgan hayvonlarning har biri ketma-ket Sichqon bilan solishtiriladi. Faqat bu xizmat uyg'unlik deb tan oladigan juftliklar munosabat sifatida yoziladi; qolgan hammasi neytral."
          },
          {
            "table": {
              "caption": "Sichqon va o'n ikki zodiak hayvoni",
              "head": [
                "Boshqa hayvon",
                "Munosabat",
                "Ball"
              ],
              "rows": [
                [
                  "Sichqon (子)",
                  "Bir xil shox",
                  "{scoreSame}"
                ],
                [
                  "Sigir (丑)",
                  "Olti uyg'unlik",
                  "{scoreYukhap}"
                ],
                [
                  "Yo'lbars (寅)",
                  "Neytral",
                  "{scoreNeutral}"
                ],
                [
                  "Quyon (卯)",
                  "Neytral",
                  "{scoreNeutral}"
                ],
                [
                  "Ajdar (辰)",
                  "Yarim uchlik",
                  "{scoreBanhap}"
                ],
                [
                  "Ilon (巳)",
                  "Neytral",
                  "{scoreNeutral}"
                ],
                [
                  "Ot (午)",
                  "To'qnashuv",
                  "{scoreChung}"
                ],
                [
                  "Qo'y (未)",
                  "Nizo",
                  "{scoreWonjin}"
                ],
                [
                  "Maymun (申)",
                  "Yarim uchlik",
                  "{scoreBanhap}"
                ],
                [
                  "Xo'roz (酉)",
                  "Neytral",
                  "{scoreNeutral}"
                ],
                [
                  "It (戌)",
                  "Neytral",
                  "{scoreNeutral}"
                ],
                [
                  "Cho'chqa (亥)",
                  "Neytral",
                  "{scoreNeutral}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Sigir — tortishuvchi juft (olti uyg'unlik)",
        "blocks": [
          {
            "p": "子 va 丑 faqat ikki belgi bilan uyg'unlik hosil qiladi. Olti uyg'unlik moslikda eng tez-tez uchraydigan yaxshi munosabat bo'lib, Sichqon va Sigir {scoreYukhap} ball oladi — bu Sichqon olishi mumkin bo'lgan eng yuqori ball."
          }
        ]
      },
      {
        "title": "Ajdar va Maymun — shoh shoxni o'z ichiga olgan yarim uchlik",
        "blocks": [
          {
            "p": "申子辰 — bitta uchlik guruhi (suv guruhi), 子 esa uning markazidagi **shoh shox**. Inyeon-Link faqat shoh shoxni o'z ichiga olgan juftliklarni qabul qiladi, shuning uchun Sichqon Ajdar bilan ham, Maymun bilan ham yarim uchlik ({scoreBanhap}) hosil qiladi."
          },
          {
            "p": "Aksincha, **Maymun va Ajdar birgalikda** markaziy 子 belgisiga ega emas, shuning uchun ular uyg'unlik hisoblanmaydi va neytral deb qaraladi. Bir uchlik guruhi ichida ham yarim uchlikni Sichqon hosil qiladi."
          }
        ]
      },
      {
        "title": "Ot — yuzma-yuz to'qnashuv (To'qnashuv)",
        "blocks": [
          {
            "p": "子 va 午 doirada aynan bir-biriga qarama-qarshi turadi. Bu xizmat to'qnashuv uchun ham {scoreChung} ballni saqlaydi. An'anaviy myeongri'da to'qnashuv — bu to'qnashish, munosabatning oxiri emas, pastki chegaraga yaqin ball berish esa ikki kishi haqida hukm chiqarishga teng bo'lardi. Shunday bo'lsa-da, bu Sichqon olishi mumkin bo'lgan eng past ball."
          }
        ]
      },
      {
        "title": "Qo'y — tinch nizo (Nizo)",
        "blocks": [
          {
            "p": "子 va 未 to'qnashuv o'rni bo'lgan 午 (Ot) belgisining yonida turadi va an'anaga ko'ra bir-biridan ranjigan, ammo ajrala olmaydigan juftlik deb qaraladi. Yuzaki tinch ko'rinadi, ammo nomutanosiblik uzoq davom etadi deb hisoblanadi, shuning uchun u {scoreWonjin} oladi — to'qnashuvdan ({scoreChung}) yuqori va neytraldan ({scoreNeutral}) past."
          }
        ]
      },
      {
        "title": "Qolgan 6 hayvon va Sichqon yana bir Sichqon bilan",
        "blocks": [
          {
            "p": "Yo'lbars, Quyon, Ilon, Xo'roz, It va Cho'chqa Sichqon bilan na uyg'unlik, na to'qnashuv, na nizo hosil qiladi: ular **neytral** va {scoreNeutral} ball oladi. Ular boshlang'ich daraja, na yaxshi, na yomon."
          },
          {
            "p": "Ikki Sichqon yilida tug'ilgan kishi {scoreSame} ball oladi. Bu ularning bir-biriga o'xshashini bildiradi, tortishishni emas, shuning uchun neytraldan biroz yuqorida turadi."
          }
        ]
      },
      {
        "title": "Bu ball yakuniy moslik darajasining qancha qismini egallaydi",
        "blocks": [
          {
            "p": "Ikki kishining shoxlari yonma-yon qo'yiladigan ikki joy bor."
          },
          {
            "ul": [
              "**Zodiak mosligi** tug'ilgan yil shoxiga qaraydi. U yakuniy moslik darajasining {weightZodiac} qismini egallaydi.",
              "**Kun shoxi mosligi** tug'ilgan kun shoxiga qaraydi. U saju mosligining ({weightSaju}) {weightDayBranch} qismini egallaydi, bu yakuniy moslik darajasining {weightDayBranchTotal} qismi."
            ]
          },
          {
            "p": "Masalan, Sichqon yilida tug'ilgan kishi Ot yilida tug'ilgan kishi bilan uchrashganda, zodiak mosligi to'qnashuvni beradi. Qolgan hamma narsa teng bo'lsa, yakuniy moslik darajasi neytral juftlikka nisbatan {swingZodiacChung} ball past chiqadi. Sigir yilida tug'ilgan kishi bilan bu olti uyg'unlik bo'lib, daraja {swingZodiacYukhap} ball yuqori chiqadi."
          },
          {
            "p": "Yil va kun shoxlari farq qilishi mumkin. Kun shoxlari 子 va 午 bo'lgan ikki Sichqon yilida tug'ilgan kishi zodiak mosligida bir xil shox ({scoreSame}), kun shoxi mosligida esa to'qnashuv ({scoreChung}) oladi."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bu qo'llanma nimani aytmaydi",
        "blocks": [
          {
            "ul": [
              "Bitta hayvon ikki kishi o'rtasidagi munosabatni hal qilmaydi. Yakuniy moslik darajasining {weightSaju} qismi saju mosligi bilan belgilanadi.",
              "Yuqoridagi ball o'zgarishlari boshqa hamma narsa teng deb faraz qiladi; haqiqiy natijani ikki kishining butun saju jadvali belgilaydi.",
              "Qaysi munosabat necha ball olishining to'liq jadvali [o'n ikki shox jadvali](/guide/branches)da, zodiak nima uchun tug'ilgan yil shoxidan o'qilishi esa [Zodiak mosligi nega yil shoxiga qaraydi](/guide/zodiac)da keltirilgan."
            ]
          },
          {
            "p": "Qolgan hayvonlar ham xuddi shunday yoritilgan. [Sigir](/guide/zodiac-ox) · [Yo'lbars](/guide/zodiac-tiger) · [Quyon](/guide/zodiac-rabbit) · [Ajdar](/guide/zodiac-dragon) · [Ilon](/guide/zodiac-snake) · [Ot](/guide/zodiac-horse) · [Qo'y](/guide/zodiac-goat) · [Maymun](/guide/zodiac-monkey) · [Xo'roz](/guide/zodiac-rooster) · [It](/guide/zodiac-dog) · [Cho'chqa](/guide/zodiac-pig)"
          }
        ]
      }
    ]
  },

  "guide/zodiac-ox": {
    "eyebrow": "Hayvon bo'yicha",
    "title": "Sigir o'n ikki zodiak hayvoni bilan qanday uchrashadi",
    "summary": "Sigir (丑) o'n ikki zodiak hayvonining har biri bilan qanday munosabatda bo'lishi, har biri necha ball olishi va bu ball yakuniy moslik darajasining qancha qismini egallashi — Inyeon-Link hisoblash qoidalaridagi aynan shu ko'rinishda keltirilgan.",
    "backLabel": "Hisoblash asosi",
    "sections": [
      {
        "title": "Sigir — o'n ikki shoxning ikkinchisi",
        "blocks": [
          {
            "p": "Sigir — tug'ilgan yil shoxi **丑** bo'lgan kishi. 丑 o'n ikki yer shoxining ikkinchisi bo'lib, o'n ikki belgi doira bo'ylab joylashtirilganda 未 (Qo'y) belgisining aynan qarshisida turadi."
          },
          {
            "p": "Moslik natijasi Sigir yilida tug'ilgan kishi uchun ko'rsatadigan satr: \"Sekin ko'rinadi-yu, ishni oxiriga yetkazadi. Bir olgan yukini tashlamaydi.\" Bu satrning munosabat ballariga aloqasi yo'q va quyidagi ballarga ta'sir qilmaydi."
          }
        ]
      },
      {
        "title": "O'n ikki zodiak hayvoni bir qarashda",
        "blocks": [
          {
            "p": "Qolgan hayvonlarning har biri ketma-ket Sigir bilan solishtiriladi. Faqat bu xizmat uyg'unlik deb tan oladigan juftliklar munosabat sifatida yoziladi; qolgan hammasi neytral."
          },
          {
            "table": {
              "caption": "Sigir va o'n ikki zodiak hayvoni",
              "head": [
                "Boshqa hayvon",
                "Munosabat",
                "Ball"
              ],
              "rows": [
                [
                  "Sichqon (子)",
                  "Olti uyg'unlik",
                  "{scoreYukhap}"
                ],
                [
                  "Sigir (丑)",
                  "Bir xil shox",
                  "{scoreSame}"
                ],
                [
                  "Yo'lbars (寅)",
                  "Neytral",
                  "{scoreNeutral}"
                ],
                [
                  "Quyon (卯)",
                  "Neytral",
                  "{scoreNeutral}"
                ],
                [
                  "Ajdar (辰)",
                  "Neytral",
                  "{scoreNeutral}"
                ],
                [
                  "Ilon (巳)",
                  "Neytral",
                  "{scoreNeutral}"
                ],
                [
                  "Ot (午)",
                  "Nizo",
                  "{scoreWonjin}"
                ],
                [
                  "Qo'y (未)",
                  "To'qnashuv",
                  "{scoreChung}"
                ],
                [
                  "Maymun (申)",
                  "Neytral",
                  "{scoreNeutral}"
                ],
                [
                  "Xo'roz (酉)",
                  "Yarim uchlik",
                  "{scoreBanhap}"
                ],
                [
                  "It (戌)",
                  "Neytral",
                  "{scoreNeutral}"
                ],
                [
                  "Cho'chqa (亥)",
                  "Neytral",
                  "{scoreNeutral}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Sichqon — tortishuvchi juft (olti uyg'unlik)",
        "blocks": [
          {
            "p": "丑 va 子 faqat ikki belgi bilan uyg'unlik hosil qiladi. Olti uyg'unlik moslikda eng tez-tez uchraydigan yaxshi munosabat bo'lib, Sigir va Sichqon {scoreYukhap} ball oladi — bu Sigir olishi mumkin bo'lgan eng yuqori ball."
          }
        ]
      },
      {
        "title": "Xo'roz — shoh shoxni o'z ichiga olgan yarim uchlik",
        "blocks": [
          {
            "p": "巳酉丑 — bitta uchlik guruhi (metall guruhi), 酉 esa uning markazidagi **shoh shox**. Inyeon-Link faqat shoh shoxni o'z ichiga olgan juftliklarni qabul qiladi, shuning uchun Sigir faqat Xo'roz bilan yarim uchlik ({scoreBanhap}) hosil qiladi."
          },
          {
            "p": "Xuddi shu guruhdagi Ilon (巳) bilan markaziy 酉 belgisi yetishmaydi, shuning uchun u uyg'unlik hisoblanmaydi va neytral deb qaraladi ({scoreNeutral}). Bir guruhga mansub bo'lish har bir juftlikni uyg'unlik qilmaydi."
          }
        ]
      },
      {
        "title": "Qo'y — yuzma-yuz to'qnashuv (To'qnashuv)",
        "blocks": [
          {
            "p": "丑 va 未 doirada aynan bir-biriga qarama-qarshi turadi. Bu xizmat to'qnashuv uchun ham {scoreChung} ballni saqlaydi. An'anaviy myeongri'da to'qnashuv — bu to'qnashish, munosabatning oxiri emas, pastki chegaraga yaqin ball berish esa ikki kishi haqida hukm chiqarishga teng bo'lardi. Shunday bo'lsa-da, bu Sigir olishi mumkin bo'lgan eng past ball."
          }
        ]
      },
      {
        "title": "Ot — tinch nizo (Nizo)",
        "blocks": [
          {
            "p": "丑 va 午 to'qnashuv o'rni bo'lgan 未 (Qo'y) belgisining yonida turadi va an'anaga ko'ra bir-biridan ranjigan, ammo ajrala olmaydigan juftlik deb qaraladi. Yuzaki tinch ko'rinadi, ammo nomutanosiblik uzoq davom etadi deb hisoblanadi, shuning uchun u {scoreWonjin} oladi — to'qnashuvdan ({scoreChung}) yuqori va neytraldan ({scoreNeutral}) past."
          }
        ]
      },
      {
        "title": "Qolgan 7 hayvon va Sigir yana bir Sigir bilan",
        "blocks": [
          {
            "p": "Yo'lbars, Quyon, Ajdar, Ilon, Maymun, It va Cho'chqa Sigir bilan na uyg'unlik, na to'qnashuv, na nizo hosil qiladi: ular **neytral** va {scoreNeutral} ball oladi. Ular boshlang'ich daraja, na yaxshi, na yomon."
          },
          {
            "p": "Ikki Sigir yilida tug'ilgan kishi {scoreSame} ball oladi. Bu ularning bir-biriga o'xshashini bildiradi, tortishishni emas, shuning uchun neytraldan biroz yuqorida turadi."
          }
        ]
      },
      {
        "title": "Bu ball yakuniy moslik darajasining qancha qismini egallaydi",
        "blocks": [
          {
            "p": "Ikki kishining shoxlari yonma-yon qo'yiladigan ikki joy bor."
          },
          {
            "ul": [
              "**Zodiak mosligi** tug'ilgan yil shoxiga qaraydi. U yakuniy moslik darajasining {weightZodiac} qismini egallaydi.",
              "**Kun shoxi mosligi** tug'ilgan kun shoxiga qaraydi. U saju mosligining ({weightSaju}) {weightDayBranch} qismini egallaydi, bu yakuniy moslik darajasining {weightDayBranchTotal} qismi."
            ]
          },
          {
            "p": "Masalan, Sigir yilida tug'ilgan kishi Qo'y yilida tug'ilgan kishi bilan uchrashganda, zodiak mosligi to'qnashuvni beradi. Qolgan hamma narsa teng bo'lsa, yakuniy moslik darajasi neytral juftlikka nisbatan {swingZodiacChung} ball past chiqadi. Sichqon yilida tug'ilgan kishi bilan bu olti uyg'unlik bo'lib, daraja {swingZodiacYukhap} ball yuqori chiqadi."
          },
          {
            "p": "Yil va kun shoxlari farq qilishi mumkin. Kun shoxlari 丑 va 未 bo'lgan ikki Sigir yilida tug'ilgan kishi zodiak mosligida bir xil shox ({scoreSame}), kun shoxi mosligida esa to'qnashuv ({scoreChung}) oladi."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bu qo'llanma nimani aytmaydi",
        "blocks": [
          {
            "ul": [
              "Bitta hayvon ikki kishi o'rtasidagi munosabatni hal qilmaydi. Yakuniy moslik darajasining {weightSaju} qismi saju mosligi bilan belgilanadi.",
              "Yuqoridagi ball o'zgarishlari boshqa hamma narsa teng deb faraz qiladi; haqiqiy natijani ikki kishining butun saju jadvali belgilaydi.",
              "Qaysi munosabat necha ball olishining to'liq jadvali [o'n ikki shox jadvali](/guide/branches)da, zodiak nima uchun tug'ilgan yil shoxidan o'qilishi esa [Zodiak mosligi nega yil shoxiga qaraydi](/guide/zodiac)da keltirilgan."
            ]
          },
          {
            "p": "Qolgan hayvonlar ham xuddi shunday yoritilgan. [Sichqon](/guide/zodiac-rat) · [Yo'lbars](/guide/zodiac-tiger) · [Quyon](/guide/zodiac-rabbit) · [Ajdar](/guide/zodiac-dragon) · [Ilon](/guide/zodiac-snake) · [Ot](/guide/zodiac-horse) · [Qo'y](/guide/zodiac-goat) · [Maymun](/guide/zodiac-monkey) · [Xo'roz](/guide/zodiac-rooster) · [It](/guide/zodiac-dog) · [Cho'chqa](/guide/zodiac-pig)"
          }
        ]
      }
    ]
  },

  "guide/zodiac-tiger": {
    "eyebrow": "Hayvon bo'yicha",
    "title": "Yo'lbars o'n ikki zodiak hayvoni bilan qanday uchrashadi",
    "summary": "Yo'lbars (寅) o'n ikki zodiak hayvonining har biri bilan qanday munosabatda bo'lishi, har biri necha ball olishi va bu ball yakuniy moslik darajasining qancha qismini egallashi — Inyeon-Link hisoblash qoidalaridagi aynan shu ko'rinishda keltirilgan.",
    "backLabel": "Hisoblash asosi",
    "sections": [
      {
        "title": "Yo'lbars — o'n ikki shoxning uchinchisi",
        "blocks": [
          {
            "p": "Yo'lbars — tug'ilgan yil shoxi **寅** bo'lgan kishi. 寅 o'n ikki yer shoxining uchinchisi bo'lib, o'n ikki belgi doira bo'ylab joylashtirilganda 申 (Maymun) belgisining aynan qarshisida turadi."
          },
          {
            "p": "Moslik natijasi Yo'lbars yilida tug'ilgan kishi uchun ko'rsatadigan satr: \"Qo'rqmas va oldinda yuradi. Adolatsizlikni indamay o'tkazib yubormaydi.\" Bu satrning munosabat ballariga aloqasi yo'q va quyidagi ballarga ta'sir qilmaydi."
          }
        ]
      },
      {
        "title": "O'n ikki zodiak hayvoni bir qarashda",
        "blocks": [
          {
            "p": "Qolgan hayvonlarning har biri ketma-ket Yo'lbars bilan solishtiriladi. Faqat bu xizmat uyg'unlik deb tan oladigan juftliklar munosabat sifatida yoziladi; qolgan hammasi neytral."
          },
          {
            "table": {
              "caption": "Yo'lbars va o'n ikki zodiak hayvoni",
              "head": [
                "Boshqa hayvon",
                "Munosabat",
                "Ball"
              ],
              "rows": [
                [
                  "Sichqon (子)",
                  "Neytral",
                  "{scoreNeutral}"
                ],
                [
                  "Sigir (丑)",
                  "Neytral",
                  "{scoreNeutral}"
                ],
                [
                  "Yo'lbars (寅)",
                  "Bir xil shox",
                  "{scoreSame}"
                ],
                [
                  "Quyon (卯)",
                  "Neytral",
                  "{scoreNeutral}"
                ],
                [
                  "Ajdar (辰)",
                  "Neytral",
                  "{scoreNeutral}"
                ],
                [
                  "Ilon (巳)",
                  "Neytral",
                  "{scoreNeutral}"
                ],
                [
                  "Ot (午)",
                  "Yarim uchlik",
                  "{scoreBanhap}"
                ],
                [
                  "Qo'y (未)",
                  "Neytral",
                  "{scoreNeutral}"
                ],
                [
                  "Maymun (申)",
                  "To'qnashuv",
                  "{scoreChung}"
                ],
                [
                  "Xo'roz (酉)",
                  "Nizo",
                  "{scoreWonjin}"
                ],
                [
                  "It (戌)",
                  "Neytral",
                  "{scoreNeutral}"
                ],
                [
                  "Cho'chqa (亥)",
                  "Olti uyg'unlik",
                  "{scoreYukhap}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Cho'chqa — tortishuvchi juft (olti uyg'unlik)",
        "blocks": [
          {
            "p": "寅 va 亥 faqat ikki belgi bilan uyg'unlik hosil qiladi. Olti uyg'unlik moslikda eng tez-tez uchraydigan yaxshi munosabat bo'lib, Yo'lbars va Cho'chqa {scoreYukhap} ball oladi — bu Yo'lbars olishi mumkin bo'lgan eng yuqori ball."
          }
        ]
      },
      {
        "title": "Ot — shoh shoxni o'z ichiga olgan yarim uchlik",
        "blocks": [
          {
            "p": "寅午戌 — bitta uchlik guruhi (olov guruhi), 午 esa uning markazidagi **shoh shox**. Inyeon-Link faqat shoh shoxni o'z ichiga olgan juftliklarni qabul qiladi, shuning uchun Yo'lbars faqat Ot bilan yarim uchlik ({scoreBanhap}) hosil qiladi."
          },
          {
            "p": "Xuddi shu guruhdagi It (戌) bilan markaziy 午 belgisi yetishmaydi, shuning uchun u uyg'unlik hisoblanmaydi va neytral deb qaraladi ({scoreNeutral}). Bir guruhga mansub bo'lish har bir juftlikni uyg'unlik qilmaydi."
          }
        ]
      },
      {
        "title": "Maymun — yuzma-yuz to'qnashuv (To'qnashuv)",
        "blocks": [
          {
            "p": "寅 va 申 doirada aynan bir-biriga qarama-qarshi turadi. Bu xizmat to'qnashuv uchun ham {scoreChung} ballni saqlaydi. An'anaviy myeongri'da to'qnashuv — bu to'qnashish, munosabatning oxiri emas, pastki chegaraga yaqin ball berish esa ikki kishi haqida hukm chiqarishga teng bo'lardi. Shunday bo'lsa-da, bu Yo'lbars olishi mumkin bo'lgan eng past ball."
          }
        ]
      },
      {
        "title": "Xo'roz — tinch nizo (Nizo)",
        "blocks": [
          {
            "p": "寅 va 酉 to'qnashuv o'rni bo'lgan 申 (Maymun) belgisining yonida turadi va an'anaga ko'ra bir-biridan ranjigan, ammo ajrala olmaydigan juftlik deb qaraladi. Yuzaki tinch ko'rinadi, ammo nomutanosiblik uzoq davom etadi deb hisoblanadi, shuning uchun u {scoreWonjin} oladi — to'qnashuvdan ({scoreChung}) yuqori va neytraldan ({scoreNeutral}) past."
          }
        ]
      },
      {
        "title": "Qolgan 7 hayvon va Yo'lbars yana bir Yo'lbars bilan",
        "blocks": [
          {
            "p": "Sichqon, Sigir, Quyon, Ajdar, Ilon, Qo'y va It Yo'lbars bilan na uyg'unlik, na to'qnashuv, na nizo hosil qiladi: ular **neytral** va {scoreNeutral} ball oladi. Ular boshlang'ich daraja, na yaxshi, na yomon."
          },
          {
            "p": "Ikki Yo'lbars yilida tug'ilgan kishi {scoreSame} ball oladi. Bu ularning bir-biriga o'xshashini bildiradi, tortishishni emas, shuning uchun neytraldan biroz yuqorida turadi."
          }
        ]
      },
      {
        "title": "Bu ball yakuniy moslik darajasining qancha qismini egallaydi",
        "blocks": [
          {
            "p": "Ikki kishining shoxlari yonma-yon qo'yiladigan ikki joy bor."
          },
          {
            "ul": [
              "**Zodiak mosligi** tug'ilgan yil shoxiga qaraydi. U yakuniy moslik darajasining {weightZodiac} qismini egallaydi.",
              "**Kun shoxi mosligi** tug'ilgan kun shoxiga qaraydi. U saju mosligining ({weightSaju}) {weightDayBranch} qismini egallaydi, bu yakuniy moslik darajasining {weightDayBranchTotal} qismi."
            ]
          },
          {
            "p": "Masalan, Yo'lbars yilida tug'ilgan kishi Maymun yilida tug'ilgan kishi bilan uchrashganda, zodiak mosligi to'qnashuvni beradi. Qolgan hamma narsa teng bo'lsa, yakuniy moslik darajasi neytral juftlikka nisbatan {swingZodiacChung} ball past chiqadi. Cho'chqa yilida tug'ilgan kishi bilan bu olti uyg'unlik bo'lib, daraja {swingZodiacYukhap} ball yuqori chiqadi."
          },
          {
            "p": "Yil va kun shoxlari farq qilishi mumkin. Kun shoxlari 寅 va 申 bo'lgan ikki Yo'lbars yilida tug'ilgan kishi zodiak mosligida bir xil shox ({scoreSame}), kun shoxi mosligida esa to'qnashuv ({scoreChung}) oladi."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bu qo'llanma nimani aytmaydi",
        "blocks": [
          {
            "ul": [
              "Bitta hayvon ikki kishi o'rtasidagi munosabatni hal qilmaydi. Yakuniy moslik darajasining {weightSaju} qismi saju mosligi bilan belgilanadi.",
              "Yuqoridagi ball o'zgarishlari boshqa hamma narsa teng deb faraz qiladi; haqiqiy natijani ikki kishining butun saju jadvali belgilaydi.",
              "Qaysi munosabat necha ball olishining to'liq jadvali [o'n ikki shox jadvali](/guide/branches)da, zodiak nima uchun tug'ilgan yil shoxidan o'qilishi esa [Zodiak mosligi nega yil shoxiga qaraydi](/guide/zodiac)da keltirilgan."
            ]
          },
          {
            "p": "Qolgan hayvonlar ham xuddi shunday yoritilgan. [Sichqon](/guide/zodiac-rat) · [Sigir](/guide/zodiac-ox) · [Quyon](/guide/zodiac-rabbit) · [Ajdar](/guide/zodiac-dragon) · [Ilon](/guide/zodiac-snake) · [Ot](/guide/zodiac-horse) · [Qo'y](/guide/zodiac-goat) · [Maymun](/guide/zodiac-monkey) · [Xo'roz](/guide/zodiac-rooster) · [It](/guide/zodiac-dog) · [Cho'chqa](/guide/zodiac-pig)"
          }
        ]
      }
    ]
  },

  "guide/zodiac-rabbit": {
    "eyebrow": "Hayvon bo'yicha",
    "title": "Quyon o'n ikki zodiak hayvoni bilan qanday uchrashadi",
    "summary": "Quyon (卯) o'n ikki zodiak hayvonining har biri bilan qanday munosabatda bo'lishi, har biri necha ball olishi va bu ball yakuniy moslik darajasining qancha qismini egallashi — Inyeon-Link hisoblash qoidalaridagi aynan shu ko'rinishda keltirilgan.",
    "backLabel": "Hisoblash asosi",
    "sections": [
      {
        "title": "Quyon — o'n ikki shoxning to'rtinchisi",
        "blocks": [
          {
            "p": "Quyon — tug'ilgan yil shoxi **卯** bo'lgan kishi. 卯 o'n ikki yer shoxining to'rtinchisi bo'lib, o'n ikki belgi doira bo'ylab joylashtirilganda 酉 (Xo'roz) belgisining aynan qarshisida turadi."
          },
          {
            "p": "Moslik natijasi Quyon yilida tug'ilgan kishi uchun ko'rsatadigan satr: \"Muloyim va sezgir. To'qnashishdan ko'ra aylanib o'tishni biladi.\" Bu satrning munosabat ballariga aloqasi yo'q va quyidagi ballarga ta'sir qilmaydi."
          }
        ]
      },
      {
        "title": "O'n ikki zodiak hayvoni bir qarashda",
        "blocks": [
          {
            "p": "Qolgan hayvonlarning har biri ketma-ket Quyon bilan solishtiriladi. Faqat bu xizmat uyg'unlik deb tan oladigan juftliklar munosabat sifatida yoziladi; qolgan hammasi neytral."
          },
          {
            "table": {
              "caption": "Quyon va o'n ikki zodiak hayvoni",
              "head": [
                "Boshqa hayvon",
                "Munosabat",
                "Ball"
              ],
              "rows": [
                [
                  "Sichqon (子)",
                  "Neytral",
                  "{scoreNeutral}"
                ],
                [
                  "Sigir (丑)",
                  "Neytral",
                  "{scoreNeutral}"
                ],
                [
                  "Yo'lbars (寅)",
                  "Neytral",
                  "{scoreNeutral}"
                ],
                [
                  "Quyon (卯)",
                  "Bir xil shox",
                  "{scoreSame}"
                ],
                [
                  "Ajdar (辰)",
                  "Neytral",
                  "{scoreNeutral}"
                ],
                [
                  "Ilon (巳)",
                  "Neytral",
                  "{scoreNeutral}"
                ],
                [
                  "Ot (午)",
                  "Neytral",
                  "{scoreNeutral}"
                ],
                [
                  "Qo'y (未)",
                  "Yarim uchlik",
                  "{scoreBanhap}"
                ],
                [
                  "Maymun (申)",
                  "Nizo",
                  "{scoreWonjin}"
                ],
                [
                  "Xo'roz (酉)",
                  "To'qnashuv",
                  "{scoreChung}"
                ],
                [
                  "It (戌)",
                  "Olti uyg'unlik",
                  "{scoreYukhap}"
                ],
                [
                  "Cho'chqa (亥)",
                  "Yarim uchlik",
                  "{scoreBanhap}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "It — tortishuvchi juft (olti uyg'unlik)",
        "blocks": [
          {
            "p": "卯 va 戌 faqat ikki belgi bilan uyg'unlik hosil qiladi. Olti uyg'unlik moslikda eng tez-tez uchraydigan yaxshi munosabat bo'lib, Quyon va It {scoreYukhap} ball oladi — bu Quyon olishi mumkin bo'lgan eng yuqori ball."
          }
        ]
      },
      {
        "title": "Qo'y va Cho'chqa — shoh shoxni o'z ichiga olgan yarim uchlik",
        "blocks": [
          {
            "p": "亥卯未 — bitta uchlik guruhi (yog'och guruhi), 卯 esa uning markazidagi **shoh shox**. Inyeon-Link faqat shoh shoxni o'z ichiga olgan juftliklarni qabul qiladi, shuning uchun Quyon Qo'y bilan ham, Cho'chqa bilan ham yarim uchlik ({scoreBanhap}) hosil qiladi."
          },
          {
            "p": "Aksincha, **Cho'chqa va Qo'y birgalikda** markaziy 卯 belgisiga ega emas, shuning uchun ular uyg'unlik hisoblanmaydi va neytral deb qaraladi. Bir uchlik guruhi ichida ham yarim uchlikni Quyon hosil qiladi."
          }
        ]
      },
      {
        "title": "Xo'roz — yuzma-yuz to'qnashuv (To'qnashuv)",
        "blocks": [
          {
            "p": "卯 va 酉 doirada aynan bir-biriga qarama-qarshi turadi. Bu xizmat to'qnashuv uchun ham {scoreChung} ballni saqlaydi. An'anaviy myeongri'da to'qnashuv — bu to'qnashish, munosabatning oxiri emas, pastki chegaraga yaqin ball berish esa ikki kishi haqida hukm chiqarishga teng bo'lardi. Shunday bo'lsa-da, bu Quyon olishi mumkin bo'lgan eng past ball."
          }
        ]
      },
      {
        "title": "Maymun — tinch nizo (Nizo)",
        "blocks": [
          {
            "p": "卯 va 申 to'qnashuv o'rni bo'lgan 酉 (Xo'roz) belgisining yonida turadi va an'anaga ko'ra bir-biridan ranjigan, ammo ajrala olmaydigan juftlik deb qaraladi. Yuzaki tinch ko'rinadi, ammo nomutanosiblik uzoq davom etadi deb hisoblanadi, shuning uchun u {scoreWonjin} oladi — to'qnashuvdan ({scoreChung}) yuqori va neytraldan ({scoreNeutral}) past."
          }
        ]
      },
      {
        "title": "Qolgan 6 hayvon va Quyon yana bir Quyon bilan",
        "blocks": [
          {
            "p": "Sichqon, Sigir, Yo'lbars, Ajdar, Ilon va Ot Quyon bilan na uyg'unlik, na to'qnashuv, na nizo hosil qiladi: ular **neytral** va {scoreNeutral} ball oladi. Ular boshlang'ich daraja, na yaxshi, na yomon."
          },
          {
            "p": "Ikki Quyon yilida tug'ilgan kishi {scoreSame} ball oladi. Bu ularning bir-biriga o'xshashini bildiradi, tortishishni emas, shuning uchun neytraldan biroz yuqorida turadi."
          }
        ]
      },
      {
        "title": "Bu ball yakuniy moslik darajasining qancha qismini egallaydi",
        "blocks": [
          {
            "p": "Ikki kishining shoxlari yonma-yon qo'yiladigan ikki joy bor."
          },
          {
            "ul": [
              "**Zodiak mosligi** tug'ilgan yil shoxiga qaraydi. U yakuniy moslik darajasining {weightZodiac} qismini egallaydi.",
              "**Kun shoxi mosligi** tug'ilgan kun shoxiga qaraydi. U saju mosligining ({weightSaju}) {weightDayBranch} qismini egallaydi, bu yakuniy moslik darajasining {weightDayBranchTotal} qismi."
            ]
          },
          {
            "p": "Masalan, Quyon yilida tug'ilgan kishi Xo'roz yilida tug'ilgan kishi bilan uchrashganda, zodiak mosligi to'qnashuvni beradi. Qolgan hamma narsa teng bo'lsa, yakuniy moslik darajasi neytral juftlikka nisbatan {swingZodiacChung} ball past chiqadi. It yilida tug'ilgan kishi bilan bu olti uyg'unlik bo'lib, daraja {swingZodiacYukhap} ball yuqori chiqadi."
          },
          {
            "p": "Yil va kun shoxlari farq qilishi mumkin. Kun shoxlari 卯 va 酉 bo'lgan ikki Quyon yilida tug'ilgan kishi zodiak mosligida bir xil shox ({scoreSame}), kun shoxi mosligida esa to'qnashuv ({scoreChung}) oladi."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bu qo'llanma nimani aytmaydi",
        "blocks": [
          {
            "ul": [
              "Bitta hayvon ikki kishi o'rtasidagi munosabatni hal qilmaydi. Yakuniy moslik darajasining {weightSaju} qismi saju mosligi bilan belgilanadi.",
              "Yuqoridagi ball o'zgarishlari boshqa hamma narsa teng deb faraz qiladi; haqiqiy natijani ikki kishining butun saju jadvali belgilaydi.",
              "Qaysi munosabat necha ball olishining to'liq jadvali [o'n ikki shox jadvali](/guide/branches)da, zodiak nima uchun tug'ilgan yil shoxidan o'qilishi esa [Zodiak mosligi nega yil shoxiga qaraydi](/guide/zodiac)da keltirilgan."
            ]
          },
          {
            "p": "Qolgan hayvonlar ham xuddi shunday yoritilgan. [Sichqon](/guide/zodiac-rat) · [Sigir](/guide/zodiac-ox) · [Yo'lbars](/guide/zodiac-tiger) · [Ajdar](/guide/zodiac-dragon) · [Ilon](/guide/zodiac-snake) · [Ot](/guide/zodiac-horse) · [Qo'y](/guide/zodiac-goat) · [Maymun](/guide/zodiac-monkey) · [Xo'roz](/guide/zodiac-rooster) · [It](/guide/zodiac-dog) · [Cho'chqa](/guide/zodiac-pig)"
          }
        ]
      }
    ]
  },

  "guide/zodiac-dragon": {
    "eyebrow": "Hayvon bo'yicha",
    "title": "Ajdar o'n ikki zodiak hayvoni bilan qanday uchrashadi",
    "summary": "Ajdar (辰) o'n ikki zodiak hayvonining har biri bilan qanday munosabatda bo'lishi, har biri necha ball olishi va bu ball yakuniy moslik darajasining qancha qismini egallashi — Inyeon-Link hisoblash qoidalaridagi aynan shu ko'rinishda keltirilgan.",
    "backLabel": "Hisoblash asosi",
    "sections": [
      {
        "title": "Ajdar — o'n ikki shoxning beshinchisi",
        "blocks": [
          {
            "p": "Ajdar — tug'ilgan yil shoxi **辰** bo'lgan kishi. 辰 o'n ikki yer shoxining beshinchisi bo'lib, o'n ikki belgi doira bo'ylab joylashtirilganda 戌 (It) belgisining aynan qarshisida turadi."
          },
          {
            "p": "Moslik natijasi Ajdar yilida tug'ilgan kishi uchun ko'rsatadigan satr: \"Ko'ngli keng, orzusi baland. Oddiy narsadan kamdan-kam qanoat hosil qiladi.\" Bu satrning munosabat ballariga aloqasi yo'q va quyidagi ballarga ta'sir qilmaydi."
          }
        ]
      },
      {
        "title": "O'n ikki zodiak hayvoni bir qarashda",
        "blocks": [
          {
            "p": "Qolgan hayvonlarning har biri ketma-ket Ajdar bilan solishtiriladi. Faqat bu xizmat uyg'unlik deb tan oladigan juftliklar munosabat sifatida yoziladi; qolgan hammasi neytral."
          },
          {
            "table": {
              "caption": "Ajdar va o'n ikki zodiak hayvoni",
              "head": [
                "Boshqa hayvon",
                "Munosabat",
                "Ball"
              ],
              "rows": [
                [
                  "Sichqon (子)",
                  "Yarim uchlik",
                  "{scoreBanhap}"
                ],
                [
                  "Sigir (丑)",
                  "Neytral",
                  "{scoreNeutral}"
                ],
                [
                  "Yo'lbars (寅)",
                  "Neytral",
                  "{scoreNeutral}"
                ],
                [
                  "Quyon (卯)",
                  "Neytral",
                  "{scoreNeutral}"
                ],
                [
                  "Ajdar (辰)",
                  "Bir xil shox",
                  "{scoreSame}"
                ],
                [
                  "Ilon (巳)",
                  "Neytral",
                  "{scoreNeutral}"
                ],
                [
                  "Ot (午)",
                  "Neytral",
                  "{scoreNeutral}"
                ],
                [
                  "Qo'y (未)",
                  "Neytral",
                  "{scoreNeutral}"
                ],
                [
                  "Maymun (申)",
                  "Neytral",
                  "{scoreNeutral}"
                ],
                [
                  "Xo'roz (酉)",
                  "Olti uyg'unlik",
                  "{scoreYukhap}"
                ],
                [
                  "It (戌)",
                  "To'qnashuv",
                  "{scoreChung}"
                ],
                [
                  "Cho'chqa (亥)",
                  "Nizo",
                  "{scoreWonjin}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Xo'roz — tortishuvchi juft (olti uyg'unlik)",
        "blocks": [
          {
            "p": "辰 va 酉 faqat ikki belgi bilan uyg'unlik hosil qiladi. Olti uyg'unlik moslikda eng tez-tez uchraydigan yaxshi munosabat bo'lib, Ajdar va Xo'roz {scoreYukhap} ball oladi — bu Ajdar olishi mumkin bo'lgan eng yuqori ball."
          }
        ]
      },
      {
        "title": "Sichqon — shoh shoxni o'z ichiga olgan yarim uchlik",
        "blocks": [
          {
            "p": "申子辰 — bitta uchlik guruhi (suv guruhi), 子 esa uning markazidagi **shoh shox**. Inyeon-Link faqat shoh shoxni o'z ichiga olgan juftliklarni qabul qiladi, shuning uchun Ajdar faqat Sichqon bilan yarim uchlik ({scoreBanhap}) hosil qiladi."
          },
          {
            "p": "Xuddi shu guruhdagi Maymun (申) bilan markaziy 子 belgisi yetishmaydi, shuning uchun u uyg'unlik hisoblanmaydi va neytral deb qaraladi ({scoreNeutral}). Bir guruhga mansub bo'lish har bir juftlikni uyg'unlik qilmaydi."
          }
        ]
      },
      {
        "title": "It — yuzma-yuz to'qnashuv (To'qnashuv)",
        "blocks": [
          {
            "p": "辰 va 戌 doirada aynan bir-biriga qarama-qarshi turadi. Bu xizmat to'qnashuv uchun ham {scoreChung} ballni saqlaydi. An'anaviy myeongri'da to'qnashuv — bu to'qnashish, munosabatning oxiri emas, pastki chegaraga yaqin ball berish esa ikki kishi haqida hukm chiqarishga teng bo'lardi. Shunday bo'lsa-da, bu Ajdar olishi mumkin bo'lgan eng past ball."
          }
        ]
      },
      {
        "title": "Cho'chqa — tinch nizo (Nizo)",
        "blocks": [
          {
            "p": "辰 va 亥 to'qnashuv o'rni bo'lgan 戌 (It) belgisining yonida turadi va an'anaga ko'ra bir-biridan ranjigan, ammo ajrala olmaydigan juftlik deb qaraladi. Yuzaki tinch ko'rinadi, ammo nomutanosiblik uzoq davom etadi deb hisoblanadi, shuning uchun u {scoreWonjin} oladi — to'qnashuvdan ({scoreChung}) yuqori va neytraldan ({scoreNeutral}) past."
          }
        ]
      },
      {
        "title": "Qolgan 7 hayvon va Ajdar yana bir Ajdar bilan",
        "blocks": [
          {
            "p": "Sigir, Yo'lbars, Quyon, Ilon, Ot, Qo'y va Maymun Ajdar bilan na uyg'unlik, na to'qnashuv, na nizo hosil qiladi: ular **neytral** va {scoreNeutral} ball oladi. Ular boshlang'ich daraja, na yaxshi, na yomon."
          },
          {
            "p": "Ikki Ajdar yilida tug'ilgan kishi {scoreSame} ball oladi. Bu ularning bir-biriga o'xshashini bildiradi, tortishishni emas, shuning uchun neytraldan biroz yuqorida turadi."
          }
        ]
      },
      {
        "title": "Bu ball yakuniy moslik darajasining qancha qismini egallaydi",
        "blocks": [
          {
            "p": "Ikki kishining shoxlari yonma-yon qo'yiladigan ikki joy bor."
          },
          {
            "ul": [
              "**Zodiak mosligi** tug'ilgan yil shoxiga qaraydi. U yakuniy moslik darajasining {weightZodiac} qismini egallaydi.",
              "**Kun shoxi mosligi** tug'ilgan kun shoxiga qaraydi. U saju mosligining ({weightSaju}) {weightDayBranch} qismini egallaydi, bu yakuniy moslik darajasining {weightDayBranchTotal} qismi."
            ]
          },
          {
            "p": "Masalan, Ajdar yilida tug'ilgan kishi It yilida tug'ilgan kishi bilan uchrashganda, zodiak mosligi to'qnashuvni beradi. Qolgan hamma narsa teng bo'lsa, yakuniy moslik darajasi neytral juftlikka nisbatan {swingZodiacChung} ball past chiqadi. Xo'roz yilida tug'ilgan kishi bilan bu olti uyg'unlik bo'lib, daraja {swingZodiacYukhap} ball yuqori chiqadi."
          },
          {
            "p": "Yil va kun shoxlari farq qilishi mumkin. Kun shoxlari 辰 va 戌 bo'lgan ikki Ajdar yilida tug'ilgan kishi zodiak mosligida bir xil shox ({scoreSame}), kun shoxi mosligida esa to'qnashuv ({scoreChung}) oladi."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bu qo'llanma nimani aytmaydi",
        "blocks": [
          {
            "ul": [
              "Bitta hayvon ikki kishi o'rtasidagi munosabatni hal qilmaydi. Yakuniy moslik darajasining {weightSaju} qismi saju mosligi bilan belgilanadi.",
              "Yuqoridagi ball o'zgarishlari boshqa hamma narsa teng deb faraz qiladi; haqiqiy natijani ikki kishining butun saju jadvali belgilaydi.",
              "Qaysi munosabat necha ball olishining to'liq jadvali [o'n ikki shox jadvali](/guide/branches)da, zodiak nima uchun tug'ilgan yil shoxidan o'qilishi esa [Zodiak mosligi nega yil shoxiga qaraydi](/guide/zodiac)da keltirilgan."
            ]
          },
          {
            "p": "Qolgan hayvonlar ham xuddi shunday yoritilgan. [Sichqon](/guide/zodiac-rat) · [Sigir](/guide/zodiac-ox) · [Yo'lbars](/guide/zodiac-tiger) · [Quyon](/guide/zodiac-rabbit) · [Ilon](/guide/zodiac-snake) · [Ot](/guide/zodiac-horse) · [Qo'y](/guide/zodiac-goat) · [Maymun](/guide/zodiac-monkey) · [Xo'roz](/guide/zodiac-rooster) · [It](/guide/zodiac-dog) · [Cho'chqa](/guide/zodiac-pig)"
          }
        ]
      }
    ]
  },

  "guide/zodiac-snake": {
    "eyebrow": "Hayvon bo'yicha",
    "title": "Ilon o'n ikki zodiak hayvoni bilan qanday uchrashadi",
    "summary": "Ilon (巳) o'n ikki zodiak hayvonining har biri bilan qanday munosabatda bo'lishi, har biri necha ball olishi va bu ball yakuniy moslik darajasining qancha qismini egallashi — Inyeon-Link hisoblash qoidalaridagi aynan shu ko'rinishda keltirilgan.",
    "backLabel": "Hisoblash asosi",
    "sections": [
      {
        "title": "Ilon — o'n ikki shoxning oltinchisi",
        "blocks": [
          {
            "p": "Ilon — tug'ilgan yil shoxi **巳** bo'lgan kishi. 巳 o'n ikki yer shoxining oltinchisi bo'lib, o'n ikki belgi doira bo'ylab joylashtirilganda 亥 (Cho'chqa) belgisining aynan qarshisida turadi."
          },
          {
            "p": "Moslik natijasi Ilon yilida tug'ilgan kishi uchun ko'rsatadigan satr: \"Ichini ochmaydi va chuqur o'ylaydi. Xulosasi aniq.\" Bu satrning munosabat ballariga aloqasi yo'q va quyidagi ballarga ta'sir qilmaydi."
          }
        ]
      },
      {
        "title": "O'n ikki zodiak hayvoni bir qarashda",
        "blocks": [
          {
            "p": "Qolgan hayvonlarning har biri ketma-ket Ilon bilan solishtiriladi. Faqat bu xizmat uyg'unlik deb tan oladigan juftliklar munosabat sifatida yoziladi; qolgan hammasi neytral."
          },
          {
            "table": {
              "caption": "Ilon va o'n ikki zodiak hayvoni",
              "head": [
                "Boshqa hayvon",
                "Munosabat",
                "Ball"
              ],
              "rows": [
                [
                  "Sichqon (子)",
                  "Neytral",
                  "{scoreNeutral}"
                ],
                [
                  "Sigir (丑)",
                  "Neytral",
                  "{scoreNeutral}"
                ],
                [
                  "Yo'lbars (寅)",
                  "Neytral",
                  "{scoreNeutral}"
                ],
                [
                  "Quyon (卯)",
                  "Neytral",
                  "{scoreNeutral}"
                ],
                [
                  "Ajdar (辰)",
                  "Neytral",
                  "{scoreNeutral}"
                ],
                [
                  "Ilon (巳)",
                  "Bir xil shox",
                  "{scoreSame}"
                ],
                [
                  "Ot (午)",
                  "Neytral",
                  "{scoreNeutral}"
                ],
                [
                  "Qo'y (未)",
                  "Neytral",
                  "{scoreNeutral}"
                ],
                [
                  "Maymun (申)",
                  "Olti uyg'unlik",
                  "{scoreYukhap}"
                ],
                [
                  "Xo'roz (酉)",
                  "Yarim uchlik",
                  "{scoreBanhap}"
                ],
                [
                  "It (戌)",
                  "Nizo",
                  "{scoreWonjin}"
                ],
                [
                  "Cho'chqa (亥)",
                  "To'qnashuv",
                  "{scoreChung}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Maymun — tortishuvchi juft (olti uyg'unlik)",
        "blocks": [
          {
            "p": "巳 va 申 faqat ikki belgi bilan uyg'unlik hosil qiladi. Olti uyg'unlik moslikda eng tez-tez uchraydigan yaxshi munosabat bo'lib, Ilon va Maymun {scoreYukhap} ball oladi — bu Ilon olishi mumkin bo'lgan eng yuqori ball."
          }
        ]
      },
      {
        "title": "Xo'roz — shoh shoxni o'z ichiga olgan yarim uchlik",
        "blocks": [
          {
            "p": "巳酉丑 — bitta uchlik guruhi (metall guruhi), 酉 esa uning markazidagi **shoh shox**. Inyeon-Link faqat shoh shoxni o'z ichiga olgan juftliklarni qabul qiladi, shuning uchun Ilon faqat Xo'roz bilan yarim uchlik ({scoreBanhap}) hosil qiladi."
          },
          {
            "p": "Xuddi shu guruhdagi Sigir (丑) bilan markaziy 酉 belgisi yetishmaydi, shuning uchun u uyg'unlik hisoblanmaydi va neytral deb qaraladi ({scoreNeutral}). Bir guruhga mansub bo'lish har bir juftlikni uyg'unlik qilmaydi."
          }
        ]
      },
      {
        "title": "Cho'chqa — yuzma-yuz to'qnashuv (To'qnashuv)",
        "blocks": [
          {
            "p": "巳 va 亥 doirada aynan bir-biriga qarama-qarshi turadi. Bu xizmat to'qnashuv uchun ham {scoreChung} ballni saqlaydi. An'anaviy myeongri'da to'qnashuv — bu to'qnashish, munosabatning oxiri emas, pastki chegaraga yaqin ball berish esa ikki kishi haqida hukm chiqarishga teng bo'lardi. Shunday bo'lsa-da, bu Ilon olishi mumkin bo'lgan eng past ball."
          }
        ]
      },
      {
        "title": "It — tinch nizo (Nizo)",
        "blocks": [
          {
            "p": "巳 va 戌 to'qnashuv o'rni bo'lgan 亥 (Cho'chqa) belgisining yonida turadi va an'anaga ko'ra bir-biridan ranjigan, ammo ajrala olmaydigan juftlik deb qaraladi. Yuzaki tinch ko'rinadi, ammo nomutanosiblik uzoq davom etadi deb hisoblanadi, shuning uchun u {scoreWonjin} oladi — to'qnashuvdan ({scoreChung}) yuqori va neytraldan ({scoreNeutral}) past."
          }
        ]
      },
      {
        "title": "Qolgan 7 hayvon va Ilon yana bir Ilon bilan",
        "blocks": [
          {
            "p": "Sichqon, Sigir, Yo'lbars, Quyon, Ajdar, Ot va Qo'y Ilon bilan na uyg'unlik, na to'qnashuv, na nizo hosil qiladi: ular **neytral** va {scoreNeutral} ball oladi. Ular boshlang'ich daraja, na yaxshi, na yomon."
          },
          {
            "p": "Ikki Ilon yilida tug'ilgan kishi {scoreSame} ball oladi. Bu ularning bir-biriga o'xshashini bildiradi, tortishishni emas, shuning uchun neytraldan biroz yuqorida turadi."
          }
        ]
      },
      {
        "title": "Bu ball yakuniy moslik darajasining qancha qismini egallaydi",
        "blocks": [
          {
            "p": "Ikki kishining shoxlari yonma-yon qo'yiladigan ikki joy bor."
          },
          {
            "ul": [
              "**Zodiak mosligi** tug'ilgan yil shoxiga qaraydi. U yakuniy moslik darajasining {weightZodiac} qismini egallaydi.",
              "**Kun shoxi mosligi** tug'ilgan kun shoxiga qaraydi. U saju mosligining ({weightSaju}) {weightDayBranch} qismini egallaydi, bu yakuniy moslik darajasining {weightDayBranchTotal} qismi."
            ]
          },
          {
            "p": "Masalan, Ilon yilida tug'ilgan kishi Cho'chqa yilida tug'ilgan kishi bilan uchrashganda, zodiak mosligi to'qnashuvni beradi. Qolgan hamma narsa teng bo'lsa, yakuniy moslik darajasi neytral juftlikka nisbatan {swingZodiacChung} ball past chiqadi. Maymun yilida tug'ilgan kishi bilan bu olti uyg'unlik bo'lib, daraja {swingZodiacYukhap} ball yuqori chiqadi."
          },
          {
            "p": "Yil va kun shoxlari farq qilishi mumkin. Kun shoxlari 巳 va 亥 bo'lgan ikki Ilon yilida tug'ilgan kishi zodiak mosligida bir xil shox ({scoreSame}), kun shoxi mosligida esa to'qnashuv ({scoreChung}) oladi."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bu qo'llanma nimani aytmaydi",
        "blocks": [
          {
            "ul": [
              "Bitta hayvon ikki kishi o'rtasidagi munosabatni hal qilmaydi. Yakuniy moslik darajasining {weightSaju} qismi saju mosligi bilan belgilanadi.",
              "Yuqoridagi ball o'zgarishlari boshqa hamma narsa teng deb faraz qiladi; haqiqiy natijani ikki kishining butun saju jadvali belgilaydi.",
              "Qaysi munosabat necha ball olishining to'liq jadvali [o'n ikki shox jadvali](/guide/branches)da, zodiak nima uchun tug'ilgan yil shoxidan o'qilishi esa [Zodiak mosligi nega yil shoxiga qaraydi](/guide/zodiac)da keltirilgan."
            ]
          },
          {
            "p": "Qolgan hayvonlar ham xuddi shunday yoritilgan. [Sichqon](/guide/zodiac-rat) · [Sigir](/guide/zodiac-ox) · [Yo'lbars](/guide/zodiac-tiger) · [Quyon](/guide/zodiac-rabbit) · [Ajdar](/guide/zodiac-dragon) · [Ot](/guide/zodiac-horse) · [Qo'y](/guide/zodiac-goat) · [Maymun](/guide/zodiac-monkey) · [Xo'roz](/guide/zodiac-rooster) · [It](/guide/zodiac-dog) · [Cho'chqa](/guide/zodiac-pig)"
          }
        ]
      }
    ]
  },

  "guide/zodiac-horse": {
    "eyebrow": "Hayvon bo'yicha",
    "title": "Ot o'n ikki zodiak hayvoni bilan qanday uchrashadi",
    "summary": "Ot (午) o'n ikki zodiak hayvonining har biri bilan qanday munosabatda bo'lishi, har biri necha ball olishi va bu ball yakuniy moslik darajasining qancha qismini egallashi — Inyeon-Link hisoblash qoidalaridagi aynan shu ko'rinishda keltirilgan.",
    "backLabel": "Hisoblash asosi",
    "sections": [
      {
        "title": "Ot — o'n ikki shoxning yettinchisi",
        "blocks": [
          {
            "p": "Ot — tug'ilgan yil shoxi **午** bo'lgan kishi. 午 o'n ikki yer shoxining yettinchisi bo'lib, o'n ikki belgi doira bo'ylab joylashtirilganda 子 (Sichqon) belgisining aynan qarshisida turadi."
          },
          {
            "p": "Moslik natijasi Ot yilida tug'ilgan kishi uchun ko'rsatadigan satr: \"Quvnoq va harakatchan. Qamalib qolish unga eng og'iri.\" Bu satrning munosabat ballariga aloqasi yo'q va quyidagi ballarga ta'sir qilmaydi."
          }
        ]
      },
      {
        "title": "O'n ikki zodiak hayvoni bir qarashda",
        "blocks": [
          {
            "p": "Qolgan hayvonlarning har biri ketma-ket Ot bilan solishtiriladi. Faqat bu xizmat uyg'unlik deb tan oladigan juftliklar munosabat sifatida yoziladi; qolgan hammasi neytral."
          },
          {
            "table": {
              "caption": "Ot va o'n ikki zodiak hayvoni",
              "head": [
                "Boshqa hayvon",
                "Munosabat",
                "Ball"
              ],
              "rows": [
                [
                  "Sichqon (子)",
                  "To'qnashuv",
                  "{scoreChung}"
                ],
                [
                  "Sigir (丑)",
                  "Nizo",
                  "{scoreWonjin}"
                ],
                [
                  "Yo'lbars (寅)",
                  "Yarim uchlik",
                  "{scoreBanhap}"
                ],
                [
                  "Quyon (卯)",
                  "Neytral",
                  "{scoreNeutral}"
                ],
                [
                  "Ajdar (辰)",
                  "Neytral",
                  "{scoreNeutral}"
                ],
                [
                  "Ilon (巳)",
                  "Neytral",
                  "{scoreNeutral}"
                ],
                [
                  "Ot (午)",
                  "Bir xil shox",
                  "{scoreSame}"
                ],
                [
                  "Qo'y (未)",
                  "Olti uyg'unlik",
                  "{scoreYukhap}"
                ],
                [
                  "Maymun (申)",
                  "Neytral",
                  "{scoreNeutral}"
                ],
                [
                  "Xo'roz (酉)",
                  "Neytral",
                  "{scoreNeutral}"
                ],
                [
                  "It (戌)",
                  "Yarim uchlik",
                  "{scoreBanhap}"
                ],
                [
                  "Cho'chqa (亥)",
                  "Neytral",
                  "{scoreNeutral}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Qo'y — tortishuvchi juft (olti uyg'unlik)",
        "blocks": [
          {
            "p": "午 va 未 faqat ikki belgi bilan uyg'unlik hosil qiladi. Olti uyg'unlik moslikda eng tez-tez uchraydigan yaxshi munosabat bo'lib, Ot va Qo'y {scoreYukhap} ball oladi — bu Ot olishi mumkin bo'lgan eng yuqori ball."
          }
        ]
      },
      {
        "title": "Yo'lbars va It — shoh shoxni o'z ichiga olgan yarim uchlik",
        "blocks": [
          {
            "p": "寅午戌 — bitta uchlik guruhi (olov guruhi), 午 esa uning markazidagi **shoh shox**. Inyeon-Link faqat shoh shoxni o'z ichiga olgan juftliklarni qabul qiladi, shuning uchun Ot Yo'lbars bilan ham, It bilan ham yarim uchlik ({scoreBanhap}) hosil qiladi."
          },
          {
            "p": "Aksincha, **Yo'lbars va It birgalikda** markaziy 午 belgisiga ega emas, shuning uchun ular uyg'unlik hisoblanmaydi va neytral deb qaraladi. Bir uchlik guruhi ichida ham yarim uchlikni Ot hosil qiladi."
          }
        ]
      },
      {
        "title": "Sichqon — yuzma-yuz to'qnashuv (To'qnashuv)",
        "blocks": [
          {
            "p": "午 va 子 doirada aynan bir-biriga qarama-qarshi turadi. Bu xizmat to'qnashuv uchun ham {scoreChung} ballni saqlaydi. An'anaviy myeongri'da to'qnashuv — bu to'qnashish, munosabatning oxiri emas, pastki chegaraga yaqin ball berish esa ikki kishi haqida hukm chiqarishga teng bo'lardi. Shunday bo'lsa-da, bu Ot olishi mumkin bo'lgan eng past ball."
          }
        ]
      },
      {
        "title": "Sigir — tinch nizo (Nizo)",
        "blocks": [
          {
            "p": "午 va 丑 to'qnashuv o'rni bo'lgan 子 (Sichqon) belgisining yonida turadi va an'anaga ko'ra bir-biridan ranjigan, ammo ajrala olmaydigan juftlik deb qaraladi. Yuzaki tinch ko'rinadi, ammo nomutanosiblik uzoq davom etadi deb hisoblanadi, shuning uchun u {scoreWonjin} oladi — to'qnashuvdan ({scoreChung}) yuqori va neytraldan ({scoreNeutral}) past."
          }
        ]
      },
      {
        "title": "Qolgan 6 hayvon va Ot yana bir Ot bilan",
        "blocks": [
          {
            "p": "Quyon, Ajdar, Ilon, Maymun, Xo'roz va Cho'chqa Ot bilan na uyg'unlik, na to'qnashuv, na nizo hosil qiladi: ular **neytral** va {scoreNeutral} ball oladi. Ular boshlang'ich daraja, na yaxshi, na yomon."
          },
          {
            "p": "Ikki Ot yilida tug'ilgan kishi {scoreSame} ball oladi. Bu ularning bir-biriga o'xshashini bildiradi, tortishishni emas, shuning uchun neytraldan biroz yuqorida turadi."
          }
        ]
      },
      {
        "title": "Bu ball yakuniy moslik darajasining qancha qismini egallaydi",
        "blocks": [
          {
            "p": "Ikki kishining shoxlari yonma-yon qo'yiladigan ikki joy bor."
          },
          {
            "ul": [
              "**Zodiak mosligi** tug'ilgan yil shoxiga qaraydi. U yakuniy moslik darajasining {weightZodiac} qismini egallaydi.",
              "**Kun shoxi mosligi** tug'ilgan kun shoxiga qaraydi. U saju mosligining ({weightSaju}) {weightDayBranch} qismini egallaydi, bu yakuniy moslik darajasining {weightDayBranchTotal} qismi."
            ]
          },
          {
            "p": "Masalan, Ot yilida tug'ilgan kishi Sichqon yilida tug'ilgan kishi bilan uchrashganda, zodiak mosligi to'qnashuvni beradi. Qolgan hamma narsa teng bo'lsa, yakuniy moslik darajasi neytral juftlikka nisbatan {swingZodiacChung} ball past chiqadi. Qo'y yilida tug'ilgan kishi bilan bu olti uyg'unlik bo'lib, daraja {swingZodiacYukhap} ball yuqori chiqadi."
          },
          {
            "p": "Yil va kun shoxlari farq qilishi mumkin. Kun shoxlari 午 va 子 bo'lgan ikki Ot yilida tug'ilgan kishi zodiak mosligida bir xil shox ({scoreSame}), kun shoxi mosligida esa to'qnashuv ({scoreChung}) oladi."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bu qo'llanma nimani aytmaydi",
        "blocks": [
          {
            "ul": [
              "Bitta hayvon ikki kishi o'rtasidagi munosabatni hal qilmaydi. Yakuniy moslik darajasining {weightSaju} qismi saju mosligi bilan belgilanadi.",
              "Yuqoridagi ball o'zgarishlari boshqa hamma narsa teng deb faraz qiladi; haqiqiy natijani ikki kishining butun saju jadvali belgilaydi.",
              "Qaysi munosabat necha ball olishining to'liq jadvali [o'n ikki shox jadvali](/guide/branches)da, zodiak nima uchun tug'ilgan yil shoxidan o'qilishi esa [Zodiak mosligi nega yil shoxiga qaraydi](/guide/zodiac)da keltirilgan."
            ]
          },
          {
            "p": "Qolgan hayvonlar ham xuddi shunday yoritilgan. [Sichqon](/guide/zodiac-rat) · [Sigir](/guide/zodiac-ox) · [Yo'lbars](/guide/zodiac-tiger) · [Quyon](/guide/zodiac-rabbit) · [Ajdar](/guide/zodiac-dragon) · [Ilon](/guide/zodiac-snake) · [Qo'y](/guide/zodiac-goat) · [Maymun](/guide/zodiac-monkey) · [Xo'roz](/guide/zodiac-rooster) · [It](/guide/zodiac-dog) · [Cho'chqa](/guide/zodiac-pig)"
          }
        ]
      }
    ]
  },

  "guide/zodiac-goat": {
    "eyebrow": "Hayvon bo'yicha",
    "title": "Qo'y o'n ikki zodiak hayvoni bilan qanday uchrashadi",
    "summary": "Qo'y (未) o'n ikki zodiak hayvonining har biri bilan qanday munosabatda bo'lishi, har biri necha ball olishi va bu ball yakuniy moslik darajasining qancha qismini egallashi — Inyeon-Link hisoblash qoidalaridagi aynan shu ko'rinishda keltirilgan.",
    "backLabel": "Hisoblash asosi",
    "sections": [
      {
        "title": "Qo'y — o'n ikki shoxning sakkizinchisi",
        "blocks": [
          {
            "p": "Qo'y — tug'ilgan yil shoxi **未** bo'lgan kishi. 未 o'n ikki yer shoxining sakkizinchisi bo'lib, o'n ikki belgi doira bo'ylab joylashtirilganda 丑 (Sigir) belgisining aynan qarshisida turadi."
          },
          {
            "p": "Moslik natijasi Qo'y yilida tug'ilgan kishi uchun ko'rsatadigan satr: \"Mehribon va e'tiborli. Qattiq so'zni uzoq ko'nglida saqlaydi.\" Bu satrning munosabat ballariga aloqasi yo'q va quyidagi ballarga ta'sir qilmaydi."
          }
        ]
      },
      {
        "title": "O'n ikki zodiak hayvoni bir qarashda",
        "blocks": [
          {
            "p": "Qolgan hayvonlarning har biri ketma-ket Qo'y bilan solishtiriladi. Faqat bu xizmat uyg'unlik deb tan oladigan juftliklar munosabat sifatida yoziladi; qolgan hammasi neytral."
          },
          {
            "table": {
              "caption": "Qo'y va o'n ikki zodiak hayvoni",
              "head": [
                "Boshqa hayvon",
                "Munosabat",
                "Ball"
              ],
              "rows": [
                [
                  "Sichqon (子)",
                  "Nizo",
                  "{scoreWonjin}"
                ],
                [
                  "Sigir (丑)",
                  "To'qnashuv",
                  "{scoreChung}"
                ],
                [
                  "Yo'lbars (寅)",
                  "Neytral",
                  "{scoreNeutral}"
                ],
                [
                  "Quyon (卯)",
                  "Yarim uchlik",
                  "{scoreBanhap}"
                ],
                [
                  "Ajdar (辰)",
                  "Neytral",
                  "{scoreNeutral}"
                ],
                [
                  "Ilon (巳)",
                  "Neytral",
                  "{scoreNeutral}"
                ],
                [
                  "Ot (午)",
                  "Olti uyg'unlik",
                  "{scoreYukhap}"
                ],
                [
                  "Qo'y (未)",
                  "Bir xil shox",
                  "{scoreSame}"
                ],
                [
                  "Maymun (申)",
                  "Neytral",
                  "{scoreNeutral}"
                ],
                [
                  "Xo'roz (酉)",
                  "Neytral",
                  "{scoreNeutral}"
                ],
                [
                  "It (戌)",
                  "Neytral",
                  "{scoreNeutral}"
                ],
                [
                  "Cho'chqa (亥)",
                  "Neytral",
                  "{scoreNeutral}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Ot — tortishuvchi juft (olti uyg'unlik)",
        "blocks": [
          {
            "p": "未 va 午 faqat ikki belgi bilan uyg'unlik hosil qiladi. Olti uyg'unlik moslikda eng tez-tez uchraydigan yaxshi munosabat bo'lib, Qo'y va Ot {scoreYukhap} ball oladi — bu Qo'y olishi mumkin bo'lgan eng yuqori ball."
          }
        ]
      },
      {
        "title": "Quyon — shoh shoxni o'z ichiga olgan yarim uchlik",
        "blocks": [
          {
            "p": "亥卯未 — bitta uchlik guruhi (yog'och guruhi), 卯 esa uning markazidagi **shoh shox**. Inyeon-Link faqat shoh shoxni o'z ichiga olgan juftliklarni qabul qiladi, shuning uchun Qo'y faqat Quyon bilan yarim uchlik ({scoreBanhap}) hosil qiladi."
          },
          {
            "p": "Xuddi shu guruhdagi Cho'chqa (亥) bilan markaziy 卯 belgisi yetishmaydi, shuning uchun u uyg'unlik hisoblanmaydi va neytral deb qaraladi ({scoreNeutral}). Bir guruhga mansub bo'lish har bir juftlikni uyg'unlik qilmaydi."
          }
        ]
      },
      {
        "title": "Sigir — yuzma-yuz to'qnashuv (To'qnashuv)",
        "blocks": [
          {
            "p": "未 va 丑 doirada aynan bir-biriga qarama-qarshi turadi. Bu xizmat to'qnashuv uchun ham {scoreChung} ballni saqlaydi. An'anaviy myeongri'da to'qnashuv — bu to'qnashish, munosabatning oxiri emas, pastki chegaraga yaqin ball berish esa ikki kishi haqida hukm chiqarishga teng bo'lardi. Shunday bo'lsa-da, bu Qo'y olishi mumkin bo'lgan eng past ball."
          }
        ]
      },
      {
        "title": "Sichqon — tinch nizo (Nizo)",
        "blocks": [
          {
            "p": "未 va 子 to'qnashuv o'rni bo'lgan 丑 (Sigir) belgisining yonida turadi va an'anaga ko'ra bir-biridan ranjigan, ammo ajrala olmaydigan juftlik deb qaraladi. Yuzaki tinch ko'rinadi, ammo nomutanosiblik uzoq davom etadi deb hisoblanadi, shuning uchun u {scoreWonjin} oladi — to'qnashuvdan ({scoreChung}) yuqori va neytraldan ({scoreNeutral}) past."
          }
        ]
      },
      {
        "title": "Qolgan 7 hayvon va Qo'y yana bir Qo'y bilan",
        "blocks": [
          {
            "p": "Yo'lbars, Ajdar, Ilon, Maymun, Xo'roz, It va Cho'chqa Qo'y bilan na uyg'unlik, na to'qnashuv, na nizo hosil qiladi: ular **neytral** va {scoreNeutral} ball oladi. Ular boshlang'ich daraja, na yaxshi, na yomon."
          },
          {
            "p": "Ikki Qo'y yilida tug'ilgan kishi {scoreSame} ball oladi. Bu ularning bir-biriga o'xshashini bildiradi, tortishishni emas, shuning uchun neytraldan biroz yuqorida turadi."
          }
        ]
      },
      {
        "title": "Bu ball yakuniy moslik darajasining qancha qismini egallaydi",
        "blocks": [
          {
            "p": "Ikki kishining shoxlari yonma-yon qo'yiladigan ikki joy bor."
          },
          {
            "ul": [
              "**Zodiak mosligi** tug'ilgan yil shoxiga qaraydi. U yakuniy moslik darajasining {weightZodiac} qismini egallaydi.",
              "**Kun shoxi mosligi** tug'ilgan kun shoxiga qaraydi. U saju mosligining ({weightSaju}) {weightDayBranch} qismini egallaydi, bu yakuniy moslik darajasining {weightDayBranchTotal} qismi."
            ]
          },
          {
            "p": "Masalan, Qo'y yilida tug'ilgan kishi Sigir yilida tug'ilgan kishi bilan uchrashganda, zodiak mosligi to'qnashuvni beradi. Qolgan hamma narsa teng bo'lsa, yakuniy moslik darajasi neytral juftlikka nisbatan {swingZodiacChung} ball past chiqadi. Ot yilida tug'ilgan kishi bilan bu olti uyg'unlik bo'lib, daraja {swingZodiacYukhap} ball yuqori chiqadi."
          },
          {
            "p": "Yil va kun shoxlari farq qilishi mumkin. Kun shoxlari 未 va 丑 bo'lgan ikki Qo'y yilida tug'ilgan kishi zodiak mosligida bir xil shox ({scoreSame}), kun shoxi mosligida esa to'qnashuv ({scoreChung}) oladi."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bu qo'llanma nimani aytmaydi",
        "blocks": [
          {
            "ul": [
              "Bitta hayvon ikki kishi o'rtasidagi munosabatni hal qilmaydi. Yakuniy moslik darajasining {weightSaju} qismi saju mosligi bilan belgilanadi.",
              "Yuqoridagi ball o'zgarishlari boshqa hamma narsa teng deb faraz qiladi; haqiqiy natijani ikki kishining butun saju jadvali belgilaydi.",
              "Qaysi munosabat necha ball olishining to'liq jadvali [o'n ikki shox jadvali](/guide/branches)da, zodiak nima uchun tug'ilgan yil shoxidan o'qilishi esa [Zodiak mosligi nega yil shoxiga qaraydi](/guide/zodiac)da keltirilgan."
            ]
          },
          {
            "p": "Qolgan hayvonlar ham xuddi shunday yoritilgan. [Sichqon](/guide/zodiac-rat) · [Sigir](/guide/zodiac-ox) · [Yo'lbars](/guide/zodiac-tiger) · [Quyon](/guide/zodiac-rabbit) · [Ajdar](/guide/zodiac-dragon) · [Ilon](/guide/zodiac-snake) · [Ot](/guide/zodiac-horse) · [Maymun](/guide/zodiac-monkey) · [Xo'roz](/guide/zodiac-rooster) · [It](/guide/zodiac-dog) · [Cho'chqa](/guide/zodiac-pig)"
          }
        ]
      }
    ]
  },

  "guide/zodiac-monkey": {
    "eyebrow": "Hayvon bo'yicha",
    "title": "Maymun o'n ikki zodiak hayvoni bilan qanday uchrashadi",
    "summary": "Maymun (申) o'n ikki zodiak hayvonining har biri bilan qanday munosabatda bo'lishi, har biri necha ball olishi va bu ball yakuniy moslik darajasining qancha qismini egallashi — Inyeon-Link hisoblash qoidalaridagi aynan shu ko'rinishda keltirilgan.",
    "backLabel": "Hisoblash asosi",
    "sections": [
      {
        "title": "Maymun — o'n ikki shoxning to'qqizinchisi",
        "blocks": [
          {
            "p": "Maymun — tug'ilgan yil shoxi **申** bo'lgan kishi. 申 o'n ikki yer shoxining to'qqizinchisi bo'lib, o'n ikki belgi doira bo'ylab joylashtirilganda 寅 (Yo'lbars) belgisining aynan qarshisida turadi."
          },
          {
            "p": "Moslik natijasi Maymun yilida tug'ilgan kishi uchun ko'rsatadigan satr: \"Uddaburon va tez moslashadi. Takrorlanadigan ishdan zerikadi.\" Bu satrning munosabat ballariga aloqasi yo'q va quyidagi ballarga ta'sir qilmaydi."
          }
        ]
      },
      {
        "title": "O'n ikki zodiak hayvoni bir qarashda",
        "blocks": [
          {
            "p": "Qolgan hayvonlarning har biri ketma-ket Maymun bilan solishtiriladi. Faqat bu xizmat uyg'unlik deb tan oladigan juftliklar munosabat sifatida yoziladi; qolgan hammasi neytral."
          },
          {
            "table": {
              "caption": "Maymun va o'n ikki zodiak hayvoni",
              "head": [
                "Boshqa hayvon",
                "Munosabat",
                "Ball"
              ],
              "rows": [
                [
                  "Sichqon (子)",
                  "Yarim uchlik",
                  "{scoreBanhap}"
                ],
                [
                  "Sigir (丑)",
                  "Neytral",
                  "{scoreNeutral}"
                ],
                [
                  "Yo'lbars (寅)",
                  "To'qnashuv",
                  "{scoreChung}"
                ],
                [
                  "Quyon (卯)",
                  "Nizo",
                  "{scoreWonjin}"
                ],
                [
                  "Ajdar (辰)",
                  "Neytral",
                  "{scoreNeutral}"
                ],
                [
                  "Ilon (巳)",
                  "Olti uyg'unlik",
                  "{scoreYukhap}"
                ],
                [
                  "Ot (午)",
                  "Neytral",
                  "{scoreNeutral}"
                ],
                [
                  "Qo'y (未)",
                  "Neytral",
                  "{scoreNeutral}"
                ],
                [
                  "Maymun (申)",
                  "Bir xil shox",
                  "{scoreSame}"
                ],
                [
                  "Xo'roz (酉)",
                  "Neytral",
                  "{scoreNeutral}"
                ],
                [
                  "It (戌)",
                  "Neytral",
                  "{scoreNeutral}"
                ],
                [
                  "Cho'chqa (亥)",
                  "Neytral",
                  "{scoreNeutral}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Ilon — tortishuvchi juft (olti uyg'unlik)",
        "blocks": [
          {
            "p": "申 va 巳 faqat ikki belgi bilan uyg'unlik hosil qiladi. Olti uyg'unlik moslikda eng tez-tez uchraydigan yaxshi munosabat bo'lib, Maymun va Ilon {scoreYukhap} ball oladi — bu Maymun olishi mumkin bo'lgan eng yuqori ball."
          }
        ]
      },
      {
        "title": "Sichqon — shoh shoxni o'z ichiga olgan yarim uchlik",
        "blocks": [
          {
            "p": "申子辰 — bitta uchlik guruhi (suv guruhi), 子 esa uning markazidagi **shoh shox**. Inyeon-Link faqat shoh shoxni o'z ichiga olgan juftliklarni qabul qiladi, shuning uchun Maymun faqat Sichqon bilan yarim uchlik ({scoreBanhap}) hosil qiladi."
          },
          {
            "p": "Xuddi shu guruhdagi Ajdar (辰) bilan markaziy 子 belgisi yetishmaydi, shuning uchun u uyg'unlik hisoblanmaydi va neytral deb qaraladi ({scoreNeutral}). Bir guruhga mansub bo'lish har bir juftlikni uyg'unlik qilmaydi."
          }
        ]
      },
      {
        "title": "Yo'lbars — yuzma-yuz to'qnashuv (To'qnashuv)",
        "blocks": [
          {
            "p": "申 va 寅 doirada aynan bir-biriga qarama-qarshi turadi. Bu xizmat to'qnashuv uchun ham {scoreChung} ballni saqlaydi. An'anaviy myeongri'da to'qnashuv — bu to'qnashish, munosabatning oxiri emas, pastki chegaraga yaqin ball berish esa ikki kishi haqida hukm chiqarishga teng bo'lardi. Shunday bo'lsa-da, bu Maymun olishi mumkin bo'lgan eng past ball."
          }
        ]
      },
      {
        "title": "Quyon — tinch nizo (Nizo)",
        "blocks": [
          {
            "p": "申 va 卯 to'qnashuv o'rni bo'lgan 寅 (Yo'lbars) belgisining yonida turadi va an'anaga ko'ra bir-biridan ranjigan, ammo ajrala olmaydigan juftlik deb qaraladi. Yuzaki tinch ko'rinadi, ammo nomutanosiblik uzoq davom etadi deb hisoblanadi, shuning uchun u {scoreWonjin} oladi — to'qnashuvdan ({scoreChung}) yuqori va neytraldan ({scoreNeutral}) past."
          }
        ]
      },
      {
        "title": "Qolgan 7 hayvon va Maymun yana bir Maymun bilan",
        "blocks": [
          {
            "p": "Sigir, Ajdar, Ot, Qo'y, Xo'roz, It va Cho'chqa Maymun bilan na uyg'unlik, na to'qnashuv, na nizo hosil qiladi: ular **neytral** va {scoreNeutral} ball oladi. Ular boshlang'ich daraja, na yaxshi, na yomon."
          },
          {
            "p": "Ikki Maymun yilida tug'ilgan kishi {scoreSame} ball oladi. Bu ularning bir-biriga o'xshashini bildiradi, tortishishni emas, shuning uchun neytraldan biroz yuqorida turadi."
          }
        ]
      },
      {
        "title": "Bu ball yakuniy moslik darajasining qancha qismini egallaydi",
        "blocks": [
          {
            "p": "Ikki kishining shoxlari yonma-yon qo'yiladigan ikki joy bor."
          },
          {
            "ul": [
              "**Zodiak mosligi** tug'ilgan yil shoxiga qaraydi. U yakuniy moslik darajasining {weightZodiac} qismini egallaydi.",
              "**Kun shoxi mosligi** tug'ilgan kun shoxiga qaraydi. U saju mosligining ({weightSaju}) {weightDayBranch} qismini egallaydi, bu yakuniy moslik darajasining {weightDayBranchTotal} qismi."
            ]
          },
          {
            "p": "Masalan, Maymun yilida tug'ilgan kishi Yo'lbars yilida tug'ilgan kishi bilan uchrashganda, zodiak mosligi to'qnashuvni beradi. Qolgan hamma narsa teng bo'lsa, yakuniy moslik darajasi neytral juftlikka nisbatan {swingZodiacChung} ball past chiqadi. Ilon yilida tug'ilgan kishi bilan bu olti uyg'unlik bo'lib, daraja {swingZodiacYukhap} ball yuqori chiqadi."
          },
          {
            "p": "Yil va kun shoxlari farq qilishi mumkin. Kun shoxlari 申 va 寅 bo'lgan ikki Maymun yilida tug'ilgan kishi zodiak mosligida bir xil shox ({scoreSame}), kun shoxi mosligida esa to'qnashuv ({scoreChung}) oladi."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bu qo'llanma nimani aytmaydi",
        "blocks": [
          {
            "ul": [
              "Bitta hayvon ikki kishi o'rtasidagi munosabatni hal qilmaydi. Yakuniy moslik darajasining {weightSaju} qismi saju mosligi bilan belgilanadi.",
              "Yuqoridagi ball o'zgarishlari boshqa hamma narsa teng deb faraz qiladi; haqiqiy natijani ikki kishining butun saju jadvali belgilaydi.",
              "Qaysi munosabat necha ball olishining to'liq jadvali [o'n ikki shox jadvali](/guide/branches)da, zodiak nima uchun tug'ilgan yil shoxidan o'qilishi esa [Zodiak mosligi nega yil shoxiga qaraydi](/guide/zodiac)da keltirilgan."
            ]
          },
          {
            "p": "Qolgan hayvonlar ham xuddi shunday yoritilgan. [Sichqon](/guide/zodiac-rat) · [Sigir](/guide/zodiac-ox) · [Yo'lbars](/guide/zodiac-tiger) · [Quyon](/guide/zodiac-rabbit) · [Ajdar](/guide/zodiac-dragon) · [Ilon](/guide/zodiac-snake) · [Ot](/guide/zodiac-horse) · [Qo'y](/guide/zodiac-goat) · [Xo'roz](/guide/zodiac-rooster) · [It](/guide/zodiac-dog) · [Cho'chqa](/guide/zodiac-pig)"
          }
        ]
      }
    ]
  },

  "guide/zodiac-rooster": {
    "eyebrow": "Hayvon bo'yicha",
    "title": "Xo'roz o'n ikki zodiak hayvoni bilan qanday uchrashadi",
    "summary": "Xo'roz (酉) o'n ikki zodiak hayvonining har biri bilan qanday munosabatda bo'lishi, har biri necha ball olishi va bu ball yakuniy moslik darajasining qancha qismini egallashi — Inyeon-Link hisoblash qoidalaridagi aynan shu ko'rinishda keltirilgan.",
    "backLabel": "Hisoblash asosi",
    "sections": [
      {
        "title": "Xo'roz — o'n ikki shoxning o'ninchisi",
        "blocks": [
          {
            "p": "Xo'roz — tug'ilgan yil shoxi **酉** bo'lgan kishi. 酉 o'n ikki yer shoxining o'ninchisi bo'lib, o'n ikki belgi doira bo'ylab joylashtirilganda 卯 (Quyon) belgisining aynan qarshisida turadi."
          },
          {
            "p": "Moslik natijasi Xo'roz yilida tug'ilgan kishi uchun ko'rsatadigan satr: \"Mehnatkash va sinchkov. Joyida turmagan narsani qoldirolmaydi.\" Bu satrning munosabat ballariga aloqasi yo'q va quyidagi ballarga ta'sir qilmaydi."
          }
        ]
      },
      {
        "title": "O'n ikki zodiak hayvoni bir qarashda",
        "blocks": [
          {
            "p": "Qolgan hayvonlarning har biri ketma-ket Xo'roz bilan solishtiriladi. Faqat bu xizmat uyg'unlik deb tan oladigan juftliklar munosabat sifatida yoziladi; qolgan hammasi neytral."
          },
          {
            "table": {
              "caption": "Xo'roz va o'n ikki zodiak hayvoni",
              "head": [
                "Boshqa hayvon",
                "Munosabat",
                "Ball"
              ],
              "rows": [
                [
                  "Sichqon (子)",
                  "Neytral",
                  "{scoreNeutral}"
                ],
                [
                  "Sigir (丑)",
                  "Yarim uchlik",
                  "{scoreBanhap}"
                ],
                [
                  "Yo'lbars (寅)",
                  "Nizo",
                  "{scoreWonjin}"
                ],
                [
                  "Quyon (卯)",
                  "To'qnashuv",
                  "{scoreChung}"
                ],
                [
                  "Ajdar (辰)",
                  "Olti uyg'unlik",
                  "{scoreYukhap}"
                ],
                [
                  "Ilon (巳)",
                  "Yarim uchlik",
                  "{scoreBanhap}"
                ],
                [
                  "Ot (午)",
                  "Neytral",
                  "{scoreNeutral}"
                ],
                [
                  "Qo'y (未)",
                  "Neytral",
                  "{scoreNeutral}"
                ],
                [
                  "Maymun (申)",
                  "Neytral",
                  "{scoreNeutral}"
                ],
                [
                  "Xo'roz (酉)",
                  "Bir xil shox",
                  "{scoreSame}"
                ],
                [
                  "It (戌)",
                  "Neytral",
                  "{scoreNeutral}"
                ],
                [
                  "Cho'chqa (亥)",
                  "Neytral",
                  "{scoreNeutral}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Ajdar — tortishuvchi juft (olti uyg'unlik)",
        "blocks": [
          {
            "p": "酉 va 辰 faqat ikki belgi bilan uyg'unlik hosil qiladi. Olti uyg'unlik moslikda eng tez-tez uchraydigan yaxshi munosabat bo'lib, Xo'roz va Ajdar {scoreYukhap} ball oladi — bu Xo'roz olishi mumkin bo'lgan eng yuqori ball."
          }
        ]
      },
      {
        "title": "Sigir va Ilon — shoh shoxni o'z ichiga olgan yarim uchlik",
        "blocks": [
          {
            "p": "巳酉丑 — bitta uchlik guruhi (metall guruhi), 酉 esa uning markazidagi **shoh shox**. Inyeon-Link faqat shoh shoxni o'z ichiga olgan juftliklarni qabul qiladi, shuning uchun Xo'roz Sigir bilan ham, Ilon bilan ham yarim uchlik ({scoreBanhap}) hosil qiladi."
          },
          {
            "p": "Aksincha, **Ilon va Sigir birgalikda** markaziy 酉 belgisiga ega emas, shuning uchun ular uyg'unlik hisoblanmaydi va neytral deb qaraladi. Bir uchlik guruhi ichida ham yarim uchlikni Xo'roz hosil qiladi."
          }
        ]
      },
      {
        "title": "Quyon — yuzma-yuz to'qnashuv (To'qnashuv)",
        "blocks": [
          {
            "p": "酉 va 卯 doirada aynan bir-biriga qarama-qarshi turadi. Bu xizmat to'qnashuv uchun ham {scoreChung} ballni saqlaydi. An'anaviy myeongri'da to'qnashuv — bu to'qnashish, munosabatning oxiri emas, pastki chegaraga yaqin ball berish esa ikki kishi haqida hukm chiqarishga teng bo'lardi. Shunday bo'lsa-da, bu Xo'roz olishi mumkin bo'lgan eng past ball."
          }
        ]
      },
      {
        "title": "Yo'lbars — tinch nizo (Nizo)",
        "blocks": [
          {
            "p": "酉 va 寅 to'qnashuv o'rni bo'lgan 卯 (Quyon) belgisining yonida turadi va an'anaga ko'ra bir-biridan ranjigan, ammo ajrala olmaydigan juftlik deb qaraladi. Yuzaki tinch ko'rinadi, ammo nomutanosiblik uzoq davom etadi deb hisoblanadi, shuning uchun u {scoreWonjin} oladi — to'qnashuvdan ({scoreChung}) yuqori va neytraldan ({scoreNeutral}) past."
          }
        ]
      },
      {
        "title": "Qolgan 6 hayvon va Xo'roz yana bir Xo'roz bilan",
        "blocks": [
          {
            "p": "Sichqon, Ot, Qo'y, Maymun, It va Cho'chqa Xo'roz bilan na uyg'unlik, na to'qnashuv, na nizo hosil qiladi: ular **neytral** va {scoreNeutral} ball oladi. Ular boshlang'ich daraja, na yaxshi, na yomon."
          },
          {
            "p": "Ikki Xo'roz yilida tug'ilgan kishi {scoreSame} ball oladi. Bu ularning bir-biriga o'xshashini bildiradi, tortishishni emas, shuning uchun neytraldan biroz yuqorida turadi."
          }
        ]
      },
      {
        "title": "Bu ball yakuniy moslik darajasining qancha qismini egallaydi",
        "blocks": [
          {
            "p": "Ikki kishining shoxlari yonma-yon qo'yiladigan ikki joy bor."
          },
          {
            "ul": [
              "**Zodiak mosligi** tug'ilgan yil shoxiga qaraydi. U yakuniy moslik darajasining {weightZodiac} qismini egallaydi.",
              "**Kun shoxi mosligi** tug'ilgan kun shoxiga qaraydi. U saju mosligining ({weightSaju}) {weightDayBranch} qismini egallaydi, bu yakuniy moslik darajasining {weightDayBranchTotal} qismi."
            ]
          },
          {
            "p": "Masalan, Xo'roz yilida tug'ilgan kishi Quyon yilida tug'ilgan kishi bilan uchrashganda, zodiak mosligi to'qnashuvni beradi. Qolgan hamma narsa teng bo'lsa, yakuniy moslik darajasi neytral juftlikka nisbatan {swingZodiacChung} ball past chiqadi. Ajdar yilida tug'ilgan kishi bilan bu olti uyg'unlik bo'lib, daraja {swingZodiacYukhap} ball yuqori chiqadi."
          },
          {
            "p": "Yil va kun shoxlari farq qilishi mumkin. Kun shoxlari 酉 va 卯 bo'lgan ikki Xo'roz yilida tug'ilgan kishi zodiak mosligida bir xil shox ({scoreSame}), kun shoxi mosligida esa to'qnashuv ({scoreChung}) oladi."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bu qo'llanma nimani aytmaydi",
        "blocks": [
          {
            "ul": [
              "Bitta hayvon ikki kishi o'rtasidagi munosabatni hal qilmaydi. Yakuniy moslik darajasining {weightSaju} qismi saju mosligi bilan belgilanadi.",
              "Yuqoridagi ball o'zgarishlari boshqa hamma narsa teng deb faraz qiladi; haqiqiy natijani ikki kishining butun saju jadvali belgilaydi.",
              "Qaysi munosabat necha ball olishining to'liq jadvali [o'n ikki shox jadvali](/guide/branches)da, zodiak nima uchun tug'ilgan yil shoxidan o'qilishi esa [Zodiak mosligi nega yil shoxiga qaraydi](/guide/zodiac)da keltirilgan."
            ]
          },
          {
            "p": "Qolgan hayvonlar ham xuddi shunday yoritilgan. [Sichqon](/guide/zodiac-rat) · [Sigir](/guide/zodiac-ox) · [Yo'lbars](/guide/zodiac-tiger) · [Quyon](/guide/zodiac-rabbit) · [Ajdar](/guide/zodiac-dragon) · [Ilon](/guide/zodiac-snake) · [Ot](/guide/zodiac-horse) · [Qo'y](/guide/zodiac-goat) · [Maymun](/guide/zodiac-monkey) · [It](/guide/zodiac-dog) · [Cho'chqa](/guide/zodiac-pig)"
          }
        ]
      }
    ]
  },

  "guide/zodiac-dog": {
    "eyebrow": "Hayvon bo'yicha",
    "title": "It o'n ikki zodiak hayvoni bilan qanday uchrashadi",
    "summary": "It (戌) o'n ikki zodiak hayvonining har biri bilan qanday munosabatda bo'lishi, har biri necha ball olishi va bu ball yakuniy moslik darajasining qancha qismini egallashi — Inyeon-Link hisoblash qoidalaridagi aynan shu ko'rinishda keltirilgan.",
    "backLabel": "Hisoblash asosi",
    "sections": [
      {
        "title": "It — o'n ikki shoxning o'n birinchisi",
        "blocks": [
          {
            "p": "It — tug'ilgan yil shoxi **戌** bo'lgan kishi. 戌 o'n ikki yer shoxining o'n birinchisi bo'lib, o'n ikki belgi doira bo'ylab joylashtirilganda 辰 (Ajdar) belgisining aynan qarshisida turadi."
          },
          {
            "p": "Moslik natijasi It yilida tug'ilgan kishi uchun ko'rsatadigan satr: \"Bir ishongach oxirigacha sodiq. Xiyonat unga ayniqsa og'ir botadi.\" Bu satrning munosabat ballariga aloqasi yo'q va quyidagi ballarga ta'sir qilmaydi."
          }
        ]
      },
      {
        "title": "O'n ikki zodiak hayvoni bir qarashda",
        "blocks": [
          {
            "p": "Qolgan hayvonlarning har biri ketma-ket It bilan solishtiriladi. Faqat bu xizmat uyg'unlik deb tan oladigan juftliklar munosabat sifatida yoziladi; qolgan hammasi neytral."
          },
          {
            "table": {
              "caption": "It va o'n ikki zodiak hayvoni",
              "head": [
                "Boshqa hayvon",
                "Munosabat",
                "Ball"
              ],
              "rows": [
                [
                  "Sichqon (子)",
                  "Neytral",
                  "{scoreNeutral}"
                ],
                [
                  "Sigir (丑)",
                  "Neytral",
                  "{scoreNeutral}"
                ],
                [
                  "Yo'lbars (寅)",
                  "Neytral",
                  "{scoreNeutral}"
                ],
                [
                  "Quyon (卯)",
                  "Olti uyg'unlik",
                  "{scoreYukhap}"
                ],
                [
                  "Ajdar (辰)",
                  "To'qnashuv",
                  "{scoreChung}"
                ],
                [
                  "Ilon (巳)",
                  "Nizo",
                  "{scoreWonjin}"
                ],
                [
                  "Ot (午)",
                  "Yarim uchlik",
                  "{scoreBanhap}"
                ],
                [
                  "Qo'y (未)",
                  "Neytral",
                  "{scoreNeutral}"
                ],
                [
                  "Maymun (申)",
                  "Neytral",
                  "{scoreNeutral}"
                ],
                [
                  "Xo'roz (酉)",
                  "Neytral",
                  "{scoreNeutral}"
                ],
                [
                  "It (戌)",
                  "Bir xil shox",
                  "{scoreSame}"
                ],
                [
                  "Cho'chqa (亥)",
                  "Neytral",
                  "{scoreNeutral}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Quyon — tortishuvchi juft (olti uyg'unlik)",
        "blocks": [
          {
            "p": "戌 va 卯 faqat ikki belgi bilan uyg'unlik hosil qiladi. Olti uyg'unlik moslikda eng tez-tez uchraydigan yaxshi munosabat bo'lib, It va Quyon {scoreYukhap} ball oladi — bu It olishi mumkin bo'lgan eng yuqori ball."
          }
        ]
      },
      {
        "title": "Ot — shoh shoxni o'z ichiga olgan yarim uchlik",
        "blocks": [
          {
            "p": "寅午戌 — bitta uchlik guruhi (olov guruhi), 午 esa uning markazidagi **shoh shox**. Inyeon-Link faqat shoh shoxni o'z ichiga olgan juftliklarni qabul qiladi, shuning uchun It faqat Ot bilan yarim uchlik ({scoreBanhap}) hosil qiladi."
          },
          {
            "p": "Xuddi shu guruhdagi Yo'lbars (寅) bilan markaziy 午 belgisi yetishmaydi, shuning uchun u uyg'unlik hisoblanmaydi va neytral deb qaraladi ({scoreNeutral}). Bir guruhga mansub bo'lish har bir juftlikni uyg'unlik qilmaydi."
          }
        ]
      },
      {
        "title": "Ajdar — yuzma-yuz to'qnashuv (To'qnashuv)",
        "blocks": [
          {
            "p": "戌 va 辰 doirada aynan bir-biriga qarama-qarshi turadi. Bu xizmat to'qnashuv uchun ham {scoreChung} ballni saqlaydi. An'anaviy myeongri'da to'qnashuv — bu to'qnashish, munosabatning oxiri emas, pastki chegaraga yaqin ball berish esa ikki kishi haqida hukm chiqarishga teng bo'lardi. Shunday bo'lsa-da, bu It olishi mumkin bo'lgan eng past ball."
          }
        ]
      },
      {
        "title": "Ilon — tinch nizo (Nizo)",
        "blocks": [
          {
            "p": "戌 va 巳 to'qnashuv o'rni bo'lgan 辰 (Ajdar) belgisining yonida turadi va an'anaga ko'ra bir-biridan ranjigan, ammo ajrala olmaydigan juftlik deb qaraladi. Yuzaki tinch ko'rinadi, ammo nomutanosiblik uzoq davom etadi deb hisoblanadi, shuning uchun u {scoreWonjin} oladi — to'qnashuvdan ({scoreChung}) yuqori va neytraldan ({scoreNeutral}) past."
          }
        ]
      },
      {
        "title": "Qolgan 7 hayvon va It yana bir It bilan",
        "blocks": [
          {
            "p": "Sichqon, Sigir, Yo'lbars, Qo'y, Maymun, Xo'roz va Cho'chqa It bilan na uyg'unlik, na to'qnashuv, na nizo hosil qiladi: ular **neytral** va {scoreNeutral} ball oladi. Ular boshlang'ich daraja, na yaxshi, na yomon."
          },
          {
            "p": "Ikki It yilida tug'ilgan kishi {scoreSame} ball oladi. Bu ularning bir-biriga o'xshashini bildiradi, tortishishni emas, shuning uchun neytraldan biroz yuqorida turadi."
          }
        ]
      },
      {
        "title": "Bu ball yakuniy moslik darajasining qancha qismini egallaydi",
        "blocks": [
          {
            "p": "Ikki kishining shoxlari yonma-yon qo'yiladigan ikki joy bor."
          },
          {
            "ul": [
              "**Zodiak mosligi** tug'ilgan yil shoxiga qaraydi. U yakuniy moslik darajasining {weightZodiac} qismini egallaydi.",
              "**Kun shoxi mosligi** tug'ilgan kun shoxiga qaraydi. U saju mosligining ({weightSaju}) {weightDayBranch} qismini egallaydi, bu yakuniy moslik darajasining {weightDayBranchTotal} qismi."
            ]
          },
          {
            "p": "Masalan, It yilida tug'ilgan kishi Ajdar yilida tug'ilgan kishi bilan uchrashganda, zodiak mosligi to'qnashuvni beradi. Qolgan hamma narsa teng bo'lsa, yakuniy moslik darajasi neytral juftlikka nisbatan {swingZodiacChung} ball past chiqadi. Quyon yilida tug'ilgan kishi bilan bu olti uyg'unlik bo'lib, daraja {swingZodiacYukhap} ball yuqori chiqadi."
          },
          {
            "p": "Yil va kun shoxlari farq qilishi mumkin. Kun shoxlari 戌 va 辰 bo'lgan ikki It yilida tug'ilgan kishi zodiak mosligida bir xil shox ({scoreSame}), kun shoxi mosligida esa to'qnashuv ({scoreChung}) oladi."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bu qo'llanma nimani aytmaydi",
        "blocks": [
          {
            "ul": [
              "Bitta hayvon ikki kishi o'rtasidagi munosabatni hal qilmaydi. Yakuniy moslik darajasining {weightSaju} qismi saju mosligi bilan belgilanadi.",
              "Yuqoridagi ball o'zgarishlari boshqa hamma narsa teng deb faraz qiladi; haqiqiy natijani ikki kishining butun saju jadvali belgilaydi.",
              "Qaysi munosabat necha ball olishining to'liq jadvali [o'n ikki shox jadvali](/guide/branches)da, zodiak nima uchun tug'ilgan yil shoxidan o'qilishi esa [Zodiak mosligi nega yil shoxiga qaraydi](/guide/zodiac)da keltirilgan."
            ]
          },
          {
            "p": "Qolgan hayvonlar ham xuddi shunday yoritilgan. [Sichqon](/guide/zodiac-rat) · [Sigir](/guide/zodiac-ox) · [Yo'lbars](/guide/zodiac-tiger) · [Quyon](/guide/zodiac-rabbit) · [Ajdar](/guide/zodiac-dragon) · [Ilon](/guide/zodiac-snake) · [Ot](/guide/zodiac-horse) · [Qo'y](/guide/zodiac-goat) · [Maymun](/guide/zodiac-monkey) · [Xo'roz](/guide/zodiac-rooster) · [Cho'chqa](/guide/zodiac-pig)"
          }
        ]
      }
    ]
  },

  "guide/zodiac-pig": {
    "eyebrow": "Hayvon bo'yicha",
    "title": "Cho'chqa o'n ikki zodiak hayvoni bilan qanday uchrashadi",
    "summary": "Cho'chqa (亥) o'n ikki zodiak hayvonining har biri bilan qanday munosabatda bo'lishi, har biri necha ball olishi va bu ball yakuniy moslik darajasining qancha qismini egallashi — Inyeon-Link hisoblash qoidalaridagi aynan shu ko'rinishda keltirilgan.",
    "backLabel": "Hisoblash asosi",
    "sections": [
      {
        "title": "Cho'chqa — o'n ikki shoxning o'n ikkinchisi",
        "blocks": [
          {
            "p": "Cho'chqa — tug'ilgan yil shoxi **亥** bo'lgan kishi. 亥 o'n ikki yer shoxining o'n ikkinchisi bo'lib, o'n ikki belgi doira bo'ylab joylashtirilganda 巳 (Ilon) belgisining aynan qarshisida turadi."
          },
          {
            "p": "Moslik natijasi Cho'chqa yilida tug'ilgan kishi uchun ko'rsatadigan satr: \"Saxiy va ochiqko'ngil. Oson ishonadi, ba'zan shundan zarar ko'radi.\" Bu satrning munosabat ballariga aloqasi yo'q va quyidagi ballarga ta'sir qilmaydi."
          }
        ]
      },
      {
        "title": "O'n ikki zodiak hayvoni bir qarashda",
        "blocks": [
          {
            "p": "Qolgan hayvonlarning har biri ketma-ket Cho'chqa bilan solishtiriladi. Faqat bu xizmat uyg'unlik deb tan oladigan juftliklar munosabat sifatida yoziladi; qolgan hammasi neytral."
          },
          {
            "table": {
              "caption": "Cho'chqa va o'n ikki zodiak hayvoni",
              "head": [
                "Boshqa hayvon",
                "Munosabat",
                "Ball"
              ],
              "rows": [
                [
                  "Sichqon (子)",
                  "Neytral",
                  "{scoreNeutral}"
                ],
                [
                  "Sigir (丑)",
                  "Neytral",
                  "{scoreNeutral}"
                ],
                [
                  "Yo'lbars (寅)",
                  "Olti uyg'unlik",
                  "{scoreYukhap}"
                ],
                [
                  "Quyon (卯)",
                  "Yarim uchlik",
                  "{scoreBanhap}"
                ],
                [
                  "Ajdar (辰)",
                  "Nizo",
                  "{scoreWonjin}"
                ],
                [
                  "Ilon (巳)",
                  "To'qnashuv",
                  "{scoreChung}"
                ],
                [
                  "Ot (午)",
                  "Neytral",
                  "{scoreNeutral}"
                ],
                [
                  "Qo'y (未)",
                  "Neytral",
                  "{scoreNeutral}"
                ],
                [
                  "Maymun (申)",
                  "Neytral",
                  "{scoreNeutral}"
                ],
                [
                  "Xo'roz (酉)",
                  "Neytral",
                  "{scoreNeutral}"
                ],
                [
                  "It (戌)",
                  "Neytral",
                  "{scoreNeutral}"
                ],
                [
                  "Cho'chqa (亥)",
                  "Bir xil shox",
                  "{scoreSame}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Yo'lbars — tortishuvchi juft (olti uyg'unlik)",
        "blocks": [
          {
            "p": "亥 va 寅 faqat ikki belgi bilan uyg'unlik hosil qiladi. Olti uyg'unlik moslikda eng tez-tez uchraydigan yaxshi munosabat bo'lib, Cho'chqa va Yo'lbars {scoreYukhap} ball oladi — bu Cho'chqa olishi mumkin bo'lgan eng yuqori ball."
          }
        ]
      },
      {
        "title": "Quyon — shoh shoxni o'z ichiga olgan yarim uchlik",
        "blocks": [
          {
            "p": "亥卯未 — bitta uchlik guruhi (yog'och guruhi), 卯 esa uning markazidagi **shoh shox**. Inyeon-Link faqat shoh shoxni o'z ichiga olgan juftliklarni qabul qiladi, shuning uchun Cho'chqa faqat Quyon bilan yarim uchlik ({scoreBanhap}) hosil qiladi."
          },
          {
            "p": "Xuddi shu guruhdagi Qo'y (未) bilan markaziy 卯 belgisi yetishmaydi, shuning uchun u uyg'unlik hisoblanmaydi va neytral deb qaraladi ({scoreNeutral}). Bir guruhga mansub bo'lish har bir juftlikni uyg'unlik qilmaydi."
          }
        ]
      },
      {
        "title": "Ilon — yuzma-yuz to'qnashuv (To'qnashuv)",
        "blocks": [
          {
            "p": "亥 va 巳 doirada aynan bir-biriga qarama-qarshi turadi. Bu xizmat to'qnashuv uchun ham {scoreChung} ballni saqlaydi. An'anaviy myeongri'da to'qnashuv — bu to'qnashish, munosabatning oxiri emas, pastki chegaraga yaqin ball berish esa ikki kishi haqida hukm chiqarishga teng bo'lardi. Shunday bo'lsa-da, bu Cho'chqa olishi mumkin bo'lgan eng past ball."
          }
        ]
      },
      {
        "title": "Ajdar — tinch nizo (Nizo)",
        "blocks": [
          {
            "p": "亥 va 辰 to'qnashuv o'rni bo'lgan 巳 (Ilon) belgisining yonida turadi va an'anaga ko'ra bir-biridan ranjigan, ammo ajrala olmaydigan juftlik deb qaraladi. Yuzaki tinch ko'rinadi, ammo nomutanosiblik uzoq davom etadi deb hisoblanadi, shuning uchun u {scoreWonjin} oladi — to'qnashuvdan ({scoreChung}) yuqori va neytraldan ({scoreNeutral}) past."
          }
        ]
      },
      {
        "title": "Qolgan 7 hayvon va Cho'chqa yana bir Cho'chqa bilan",
        "blocks": [
          {
            "p": "Sichqon, Sigir, Ot, Qo'y, Maymun, Xo'roz va It Cho'chqa bilan na uyg'unlik, na to'qnashuv, na nizo hosil qiladi: ular **neytral** va {scoreNeutral} ball oladi. Ular boshlang'ich daraja, na yaxshi, na yomon."
          },
          {
            "p": "Ikki Cho'chqa yilida tug'ilgan kishi {scoreSame} ball oladi. Bu ularning bir-biriga o'xshashini bildiradi, tortishishni emas, shuning uchun neytraldan biroz yuqorida turadi."
          }
        ]
      },
      {
        "title": "Bu ball yakuniy moslik darajasining qancha qismini egallaydi",
        "blocks": [
          {
            "p": "Ikki kishining shoxlari yonma-yon qo'yiladigan ikki joy bor."
          },
          {
            "ul": [
              "**Zodiak mosligi** tug'ilgan yil shoxiga qaraydi. U yakuniy moslik darajasining {weightZodiac} qismini egallaydi.",
              "**Kun shoxi mosligi** tug'ilgan kun shoxiga qaraydi. U saju mosligining ({weightSaju}) {weightDayBranch} qismini egallaydi, bu yakuniy moslik darajasining {weightDayBranchTotal} qismi."
            ]
          },
          {
            "p": "Masalan, Cho'chqa yilida tug'ilgan kishi Ilon yilida tug'ilgan kishi bilan uchrashganda, zodiak mosligi to'qnashuvni beradi. Qolgan hamma narsa teng bo'lsa, yakuniy moslik darajasi neytral juftlikka nisbatan {swingZodiacChung} ball past chiqadi. Yo'lbars yilida tug'ilgan kishi bilan bu olti uyg'unlik bo'lib, daraja {swingZodiacYukhap} ball yuqori chiqadi."
          },
          {
            "p": "Yil va kun shoxlari farq qilishi mumkin. Kun shoxlari 亥 va 巳 bo'lgan ikki Cho'chqa yilida tug'ilgan kishi zodiak mosligida bir xil shox ({scoreSame}), kun shoxi mosligida esa to'qnashuv ({scoreChung}) oladi."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bu qo'llanma nimani aytmaydi",
        "blocks": [
          {
            "ul": [
              "Bitta hayvon ikki kishi o'rtasidagi munosabatni hal qilmaydi. Yakuniy moslik darajasining {weightSaju} qismi saju mosligi bilan belgilanadi.",
              "Yuqoridagi ball o'zgarishlari boshqa hamma narsa teng deb faraz qiladi; haqiqiy natijani ikki kishining butun saju jadvali belgilaydi.",
              "Qaysi munosabat necha ball olishining to'liq jadvali [o'n ikki shox jadvali](/guide/branches)da, zodiak nima uchun tug'ilgan yil shoxidan o'qilishi esa [Zodiak mosligi nega yil shoxiga qaraydi](/guide/zodiac)da keltirilgan."
            ]
          },
          {
            "p": "Qolgan hayvonlar ham xuddi shunday yoritilgan. [Sichqon](/guide/zodiac-rat) · [Sigir](/guide/zodiac-ox) · [Yo'lbars](/guide/zodiac-tiger) · [Quyon](/guide/zodiac-rabbit) · [Ajdar](/guide/zodiac-dragon) · [Ilon](/guide/zodiac-snake) · [Ot](/guide/zodiac-horse) · [Qo'y](/guide/zodiac-goat) · [Maymun](/guide/zodiac-monkey) · [Xo'roz](/guide/zodiac-rooster) · [It](/guide/zodiac-dog)"
          }
        ]
      }
    ]
  },

  "guide/ten-gods": {
    "eyebrow": "O'n Xudo",
    "title": "O'n Xudo va Turmush o'rtog'i Pozitsiyasi",
    "summary": "Biz har bir insonning kun poyasini O'n Xudolar orqali bir-biriga qarab ko'rib chiqamiz. To'g'ridan-to'g'ri boylik va bilvosita boylikning farqli o'qilishi sababini tushuntiramiz, garchi ikkalasi ham boylik bo'lsa.",
    "backLabel": "Hisoblash Asosi",
    "sections": [
      {
        "title": "Kun poyasi shaxsning o'zidir",
        "blocks": [
          {
            "p": "Saju ning sakkiz belgisi orasida, **kun poyasi** (tug'ilish kunining osmon poyasi) shaxsning o'zini anglatadi. Qolgan yetti belgi esa, o'sha kun poyasi joylashgan muhitni o'qiydi."
          },
          {
            "p": "**O'n Xudo** (十神) kun poyasining boshqa belgilarni qanday qabul qilishini o'n toifaga bo'ladi. Meni boqadigan narsa **manba**, menga teng bo'lgan narsa **hamkasb**, men ishlab chiqaradigan narsa **natija**, men nazorat qiladigan narsa **boylik**, va meni nazorat qiladigan narsa **hokimiyat** — har bir beshtasi polaritetga bo'linadi, bu esa o'nni hosil qiladi."
          }
        ]
      },
      {
        "title": "Har bir shaxsning kun poyasi bir-biriga qanday ta'sir qiladi",
        "blocks": [
          {
            "p": "Bu moslikdagi birinchi elementdir. A ning kun poyasi B ning kun poyasini qanday qabul qilishi aniqlangach, B ning A ga bo'lgan qabul qilish ham aniqlanadi, shuning uchun **faqat olti imkoniyat** mavjud."
          },
          {
            "table": {
              "caption": "Eng yuqori ball bo'yicha tartibda",
              "head": [
                "Juftlik",
                "Yin/Yang",
                "Ism",
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
                  "Zararli Ofitser ↔ To'g'ridan-to'g'ri Manba",
                  "Teskari polaritet",
                  "Zararli Ofitser Muhrni kiygan (傷官佩印)",
                  "Bir tomon boshqa tomonning kuchli energiyasini o'rab oladi."
                ],
                [
                  "Do'st ↔ Do'st",
                  "Bir xil polaritet",
                  "Teng",
                  "Ular bir-biriga o'xshaydi va teng, lekin bir-biriga bosim o'tkazmaydi."
                ],
                [
                  "Raqib ↔ Raqib",
                  "Teskari polaritet",
                  "Raqobat",
                  "Ular bir-biriga tortiladi, lekin bir xil pozitsiya uchun raqobatlashadi."
                ],
                [
                  "Bilvosita Boylik ↔ Bilvosita Hokimiyat",
                  "Bir xil polaritet",
                  "Sovuq bog'lanish (無情)",
                  "Tashviq kuchli, lekin yuk ham og'ir."
                ],
                [
                  "Yeyish Xudosi ↔ Bilvosita Manba",
                  "Bir xil polaritet",
                  "Boyqush yulduzi ovqatni o'g'irlaydi (梟神奪食)",
                  "Berilgan energiya qarshi tomon tomonidan olinadi, oqimni to'sadi."
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Yin va Yang kesishgan joyda",
        "blocks": [
          {
            "p": "Yin va yang mos kelmagan tomon (To'g'ri Boylik, To'g'ri Ofitser, To'g'ri Hamkasb) hissiy, bir xil tomon (Manba, Ofitser, Hamkasb) esa hissiy emas, bu esa O'n Xudoning to'g'ri va yon tomonini ajratadigan printsipdir."
          }
        ]
      },
      {
        "title": "O'n Xudolar bilan ko'rishning sababi, uch elementdan ko'ra",
        "blocks": [
          {
            "p": "Kun poyasining uch element bilan munosabatini ko'rish usuli mavjud (o'zaro ishlab chiqarish, bir xil, o'zaro yengish). Bu oddiy, lekin **yin va yang yo'qoladi.** 甲 (yang daraxti) va 乙 (yin daraxti) bir xil 'bir xil' ga aylanadi, 甲 va 甲 kabi, va o'zaro yengish bitta ballga bosiladi, yo'nalish yoki yin va yangsiz."
          },
          {
            "p": "Turmush o'rtog'i pozitsiyasi O'n Xudolar nuqtai nazaridan baholanishi kerak. Agar besh element tomonidan ko'rilgan narsalar va O'n Xudolar tomonidan ko'rilgan narsalar bir dvigatelga aralashtirilsa, bir xil ikkita belgi uchun ikkita standart bo'ladi. Shuning uchun, biz O'n Xudolar bilan birlashtiramiz."
          }
        ]
      },
      {
        "title": "Turmush o'rtog'i pozitsiyasi To'g'ri Boylik va To'g'ri Ofitser",
        "blocks": [
          {
            "p": "An'anada, O'n Xudolardan qaysi biri turmush o'rtog'ini anglatadi, jinsga qarab farq qiladi."
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
                  "Bilvosita Boylik (偏財)"
                ],
                [
                  "Ayol",
                  "To'g'ri Hokimiyat (正官)",
                  "Bilvosita Hokimiyat (偏官)"
                ]
              ]
            }
          },
          {
            "p": "Bir xil manba bo'lsa ham, faqat hissiy **To'g'ri Boylik** turmush o'rtoqlik pozitsiyasi sifatida hisobga olinadi, manba esa faoliyat va boylik tabiati sifatida o'qiladi. Shuning uchun, To'g'ri Boylik va To'g'ri Ofitser 2 ball sifatida hisoblanadi, Manba va Ofitser esa 1 ball hisoblanadi va ikkala yo'nalish yig'iladi — agar ikkisi ham turmush o'rtoqlik pozitsiyalari sifatida ko'rilsa, bu eng yuqori hisoblanadi."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Agar jins oshkor qilinmasa, ushbu bandni o'tkazib yuboring",
        "blocks": [
          {
            "p": "Agar hal qilinmaydigan band 0 ballga belgilansa, bu adolatsiz past ballga olib keladi. Bandni o'tkazib yuborganidan keyin qolgan vazn yana normallashtiriladi [(band va vazn)](/guide/how-compatibility)."
          }
        ]
      },
      {
        "title": "Biz munosabatlar shaklini ham ko'rsatamiz",
        "blocks": [
          {
            "p": "Balldan tashqari, biz natijalar ekranida kun poyalarining juftligi qanday **shaklga ega** ekanligini ta'riflaymiz. Ular o'xshash pozitsiyalarmi, bir tomoni boshqasini qo'llab-quvvatlaydimi yoki bir tomoni bostirilganmi — agar bu qo'llab-quvvatlovchi yoki bostiruvchi munosabat bo'lsa, qaysi tomon o'sha pozitsiyani egallaganini aniqlaymiz."
          },
          {
            "p": "Agar faqat bitta ball taqdim etilsa, bu 'nima bo'ldi' degan savolni qoldiradi. Shakl ball emas, balki o'qish uchun bir narsa, va hatto past ballarga ega juftliklar ham talqin qilish uchun biror narsa bor."
          }
        ]
      }
    ]
  },
  "guide/yongsin": {
    "eyebrow": "Besh element",
    "title": "Qo'llab-quvvatlovchi Element — Hozirda kerak bo'lgan energiya",
    "summary": "Biz besh elementni 'ikki tanladimi' deb emas, balki 'qarshi tomonimda menga kerak bo'lgan narsa bormi' deb ko'rib chiqamiz. Shuningdek, kuchli kun poyasi va zaif kun poyasini ajratib turuvchi chegara qiymatini ham oshkor qilamiz.",
    "backLabel": "Hisoblash asoslari",
    "sections": [
      {
        "title": "Besh elementlar 'muvozanatli' bo'lishi moslik masalasi emas",
        "blocks": [
          {
            "p": "Besh energiyaning teng taqsimlanganligini o'lchash usuli mavjud, bu ikki odamning besh elementlarini birlashtirish orqali amalga oshiriladi. Ammo, moslik masalasi bu emas. **Qarshi tomonimda menga kerak bo'lgan narsa bormi?**"
          },
          {
            "p": "Muvozanat darajasi simmetrik, ammo to'ldiruvchi tabiatan assimetrikdir. Bu A ning kerakli narsa B ning kerakli narsasidan farq qiladi. Shuning uchun, har bir tomonni alohida o'lchaymiz va o'rtacha hisoblaymiz — o'rtacha bo'lgani uchun, umumiy ball simmetrik qoladi."
          }
        ]
      },
      {
        "title": "Qo'llab-quvvatlovchi Element — Agar ortiqcha bo'lsa, kamaytiring, agar yetarli bo'lmasa, qo'shing",
        "blocks": [
          {
            "p": "Qo'llab-quvvatlovchi Element (用神) — 'bu odamga hozirda kerak bo'lgan energiya'. Uni aniqlash uchun bir nechta usullar mavjud (bostirish, qo'llab-quvvatlash, kasallik va aloqa), lekin bu qoidalar bilan tarjima qilinishi mumkin, va eng keng tarqalgan usul **bostirish (抑扶)**. Agar kun poyasi kuchli bo'lsa, kamaytirish energiyasi kerak deb hisoblanadi, agar zaif bo'lsa, qo'shish energiyasi kerak deb hisoblanadi."
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
                  "Kuchli kun poyasi (身强)",
                  "Kamaytiruvchi energiya — 食傷 (sik-sang) · 財星 (jae-seong) · 官星 (gwan-seong)",
                  "Uch"
                ],
                [
                  "Zaif kun poyasi (身弱)",
                  "Qo'shish energiyasi — 印星 (in-seong) · 比劫 (bi-gyeob)",
                  "Ikki"
                ],
                [
                  "Muvozanatli (中和)",
                  "Qo'llab-quvvatlovchi element bilan qoplanmaydi, shuning uchun eng nozik energiya",
                  "Ikki"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Kuch va zaiflik uchun chegara qiymatlari",
        "blocks": [
          {
            "p": "Kun poyasi tomoni **印星 va 比劫** — menga tug'diradigan energiya va menga o'xshaydigan energiya. Beshdan ikki bo'lgani uchun, agar energiya to'liq muvozanatli bo'lsa, bu {evenAllyRatio} ga aylanadi. Ushbu qiymatdan yuqorida va pastda chegaralar o'rnatiladi."
          },
          {
            "table": {
              "caption": "Umumiy kuchdagi ittifoqchilar (印星 + 比劫) nisbati",
              "head": [
                "Nisbati",
                "Hukm"
              ],
              "rows": [
                [
                  "{strongThreshold} yoki ko'proq",
                  "Kuchli kun poyasi"
                ],
                [
                  "{weakThreshold} yoki ko'proq va {strongThreshold} dan kam",
                  "Muvozanatli"
                ],
                [
                  "Kam {weakThreshold} dan",
                  "Zaif kun poyasi"
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
            "p": "Muvozanat, qo'llab-quvvatlovchi element bilan qoplanmaydi. Bu vaqtda, biz ikki eng nozik energiyani zarur deb ko'ramiz. Natija ekranida, bu aniq bayonot emas, balki 'hozirda nozik pozitsiyada' deb qayd etiladi."
          }
        ]
      },
      {
        "title": "Kuch xarakterlar soni emas",
        "blocks": [
          {
            "p": "Besh elementlarning kuchini hisoblaganda, biz oddiygina sakkiz xarakterni ko'rmaymiz. Biz yer shoxlari ichidagi yashirin osmon poyalarini (地藏干) va tug'ilgan oy energiyasining mavsumini (月令) aks ettiruvchi qiymatdan foydalanamiz."
          },
          {
            "p": "Agar biz faqat yuzaki xarakterlarni hisoblasak, hatto ikki xarakterli 木 ham mavsumga qarab butunlay boshqacha kuchga ega ekanligini unutamiz. Bahorda bo'lgan 木 va kuzda bo'lgan 木, garchi ular bir xil xarakter bo'lsa-da, turlicha kuchga ega."
          }
        ]
      },
      {
        "title": "To'ldirish darajasini baholash",
        "blocks": [
          {
            "p": "Biz raqibning kuchida qo'llab-quvvatlovchi elementimning nisbati bilan qaraymiz. Ammo, biz ushbu nisbati to'g'ridan-to'g'ri ishlatmaymiz, balki **kutilishni qo'llab-quvvatlovchi elementning o'lchamiga bo'lamiz.** Kuchli bo'lganda, qo'llab-quvvatlovchi element uchta (kutilish 60%), va zaif bo'lganda, u ikki (kutilish 40%), shuning uchun nisbati to'g'ridan-to'g'ri ishlatish kuchli odam har doim yuqori ball oladi degan ma'noni anglatadi."
          },
          {
            "p": "Agar kutilgan darajaga to'ldirilsa, 78 ballga yaqin ball olinadi, agar ko'p to'ldirilsa, 100 ballga yetadi, agar sezilarli darajada kam bo'lsa, 55 ballga yaqinlashadi. Bu yerda ham, pastki 0 ga o'rnatilmagan."
          }
        ]
      },
      {
        "title": "Bu dastlabki hukm",
        "blocks": [
          {
            "p": "Amaliy saju tahlili qo'llab-quvvatlovchi elementni aniqlash uchun shakl va mavsumiy iqlimni (mavsumning issiqligi va namligi) hisobga oladi, va xulosalar ishlatilgan usulga qarab farq qilishi mumkin. Inyeon-Link faqat **kuch qiymatlari** orqali o'lchash mumkin bo'lgan qo'llab-quvvatlovchi elementlardan foydalanadi. Bu qoidalar bilan tarjima qilinishi mumkin bo'lgan narsalarni ishlatish printsipiga bog'liq, shuning uchun bir xil kirish har doim bir xil javob beradi."
          },
          {
            "p": "Buning o'rniga, natija ekranida har bir insonning kuchi va zaifligi hozirda kerak bo'lgan energiya bilan birga **o'qish materiallari** sifatida taqdim etiladi. Bu ball asosini yashirishdan qochish uchun."
          }
        ]
      }
    ]
  },
  "guide/affinity": {
    "eyebrow": "Bizning standartlarimiz",
    "title": "Inyeon’s Match — Umumiy ball berilmasligi sababi",
    "summary": "Biz faqat bitta odamning ma'lumotlarini olib, raqibning pozitsiyasini bo'sh qoldiramiz va barcha mumkin bo'lgan qiymatlarni o'sha pozitsiyaga joylashtiramiz. Bu usulda olingan turga umumiy ball qo'shilmasligi sababini tushuntiramiz.",
    "backLabel": "Hisoblash asoslari",
    "sections": [
      {
        "title": "Raqibning pozitsiyasini bo'sh qoldirib hisoblashlar amalga oshiriladi",
        "blocks": [
          {
            "p": "Muvofiqlik ballari ikki odamni moslashtirish orqali hisoblanadi. **Inyeon’s Match** faqat bitta odamning ma'lumotlarini olib, raqibning pozitsiyasini bo'sh qoldirib, o'sha pozitsiyaga kirishi mumkin bo'lgan barcha qiymatlarni sinovdan o'tkazadi. Bu muvofiqlik dvigatelini teskari ishlatish kabi."
          },
          {
            "p": "Shunday qilib, raqibning tug'ilgan sanasini bilish shart emas. Biz hali uchrashmagan odam haqida 'Menga qaysi turdagi moslik profili mos keladi?' deb ayta olamiz."
          }
        ]
      },
      {
        "title": "Millionlab kombinatsiyalarni hisoblamaymiz",
        "blocks": [
          {
            "p": "Saju muvofiqlik balli to'rt elementdan iborat bo'lib, **har bir element o'zini tekshirishda bir-biriga to'g'ri kelmaydi.**"
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
                  "Kun poyasi munosabati · Turmush o'rtog'i tabiati",
                  "Ikkala odamning kun poyalari — osmon poyalari",
                  "10"
                ],
                [
                  "Besh elementni to'ldirish",
                  "Mening qo'llab-quvvatlovchi elementim va raqibning besh element kuchi",
                  "5"
                ],
                [
                  "kun shoxi munosabati",
                  "ikki odamning kun shoxlari",
                  "12"
                ],
                [
                  "zodiak munosabati",
                  "ikki odamning yil shoxlari",
                  "12"
                ]
              ]
            }
          },
          {
            "p": "Elementlar o'rtasida qiymatlar almashilmaydi, shuning uchun **har bir tarmoq uchun eng yuqori nuqtani topish umumiy eng yuqori nuqtani beradi.** Tug'ilgan sanalar kombinatsiyalarini tekshirish shart emas — faqat o'n osmon poyasini, o'n ikki yer shoxini va besh elementni belgilash kifoya."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bir xil qoidalar amal qiladi",
        "blocks": [
          {
            "p": "Bu yerda yozilgan ballar to'g'ridan-to'g'ri muvofiqlik dvigatelidan olinadi. Yangi qoidalar yaratilmaganligi sababli, bu yerda yuqoriga chiqqan tur ham haqiqiy muvofiqlikda o'sha element uchun eng yuqori ballga ega bo'ladi. Agar muvofiqlik qoidalari o'zgartirilsa, bu ekran ham shunga mos keladi."
          }
        ]
      },
      {
        "title": "Umumiy ball berilmaydi",
        "blocks": [
          {
            "p": "Bu ekran ustida eng muhim qaror. Har bir tarmoq uchun eng yuqori ballarni yig'ish 'mukammal moslik' keltirishi mumkin, lekin o'sha odam **haqiqatan ham mavjud bo'lmasligi mumkin.**"
          },
          {
            "p": "Haqiqiy odamlar, kun poyasi va besh element alohida ishlamaydi. 甲木 bilan tug'ilgan odam odatda kuchli 木 energiyasiga ham ega. Tarmoqlarni alohida hisoblash usuli bu bog'lanishni e'tiborga olmaydi, shuning uchun har bir tarmoq uchun eng yuqori ballarni bog'lash orqali olingan qiymat haqiqiy hayotda mavjud bo'lmagan kombinatsiya bo'ladi."
          },
          {
            "p": "Shuning uchun, ekran faqat **element ballarini** ko'rsatadi va umumiy ball bermaydi. Umumiy ball raqibning tug'ilgan sanasini [saju muvofiqligi](/compatibility) orqali olish bilan hisoblanadi."
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
            "p": "Ba'zi turlar yuqori ball olgan sabablari ham har bir element bo'yicha qayd etilgan — kun poyasi qulay pozitsiyada bo'ladimi yoki o'sha odamda hozirda kerak bo'lgan energiya bormi."
          }
        ]
      },
      {
        "title": "Tasdiqlash vositasi",
        "blocks": [
          {
            "p": "Siz o'ylagan odam o'sha turga mos keladimi, deb qiziqishingiz mumkin. Natijalar ekranidagi tasdiqlash vositasiga ularning tug'ilgan sanasini kiritib, sizga ularning kun poyasi, kun shoxi va yil shoxini ma'lum qilasiz. Kiruvchi qiymatlar hozirda saqlanmaydi [(saqlanmaydi)](/guide/no-storage)."
          }
        ]
      }
    ]
  },
  "guide/true-solar-time": {
    "eyebrow": "Vaqt",
    "title": "Har bir kishining tug'ilgan vaqti alohida tuzatiladi",
    "summary": "Moslik ikki kishining vaqtini alohida hisoblaydi. Bu tug'ilgan joy va davrlar farq qilganda tuzatish qanday qo'llanishini va faqat bittasi vaqtini bilmaganda nima o'zgarishini tushuntiradi.",
    "backLabel": "Hisoblash asosi",
    "sections": [
      {
        "title": "Soat va quyosh bir-biriga mos kelmaydi",
        "blocks": [
          {
            "p": "Sajuda tug'ilgan vaqt soatdan emas, quyoshning o'rnidan o'qiladi. Biroq butun mamlakat bitta standart vaqtdan foydalanadi, shuning uchun har qanday joyning soati va quyoshi bir-biridan uzoqlashadi."
          },
          {
            "p": "Koreyaning standart vaqti 135°E ga asoslangan, Seul esa taxminan 127°E da joylashgan. Seul quyoshi eng baland nuqtasiga soat ko'rsatganidan taxminan **32 daqiqa** kechroq yetadi."
          }
        ]
      },
      {
        "kind": "note",
        "title": "32 daqiqa soat ustunini bir qadam siljitishi mumkin",
        "blocks": [
          {
            "p": "Seulda soat bo'yicha 11:40 da tug'ilgan kishi haqiqiy quyosh vaqti bo'yicha 11:08 da tug'ilgan, bu hali ham Ot soati (午, 11:00–13:00) ichida. Soat bo'yicha 11:20 da tug'ilgan bo'lsa, u 10:48 da tug'ilgan, bu Ilon soatiga (巳, 9:00–11:00) to'g'ri keladi. Tuzatish aynan shunday chegarada turgan odamlar uchun mavjud."
          }
        ]
      },
      {
        "title": "Tuzatish har bir kishiga alohida qo'llanadi",
        "blocks": [
          {
            "p": "Moslik har bir kishining jadvalini alohida tuzadi. Shuning uchun kiritish ekrani tug'ilgan joyni **har bir kishi uchun** so'raydi. Agar biri Seulda, boshqasi chet elda tug'ilgan bo'lsa, ularning vaqtlari turli uzunlik va vaqt zonalari bilan alohida tuzatiladi."
          },
          {
            "p": "Shaharlar ro'yxatida hozir {cityCount} ta joy bor. Uzunligi keng farq qiladigan mamlakatlar uchun shaharlar bo'linadi, chunki **15° uzunlik soat ustunini bir qadam siljitadi**."
          },
          {
            "p": "Tanlamasangiz, Seul ishlatiladi. Agar faqat bir kishi chet elda tug'ilgan bo'lib, ikkalasi ham Seulda qoldirilsa, faqat chet elda tug'ilgan kishining soat ustuni noto'g'ri bo'ladi; ikkinchi kishining qiymatlariga ta'sir qilmaydi, chunki tuzatish har bir kishiga alohida qo'llanadi."
          }
        ]
      },
      {
        "title": "Turli davrlarda turli standart vaqtlar ishlatilgan",
        "blocks": [
          {
            "p": "Yoshi turlicha ikki kishi turli davrlarning standart vaqti ostida yashagan. Shuning uchun faqat uzunlik farqi yetarli emas."
          },
          {
            "ul": [
              "**1912 yilgacha** — Koreyada yagona standart vaqt bo'lmagan (mahalliy o'rtacha vaqt).",
              "**1954–1961** — standart vaqt UTC+8:30 bo'lgan.",
              "**1948–51 · 1955–60 · 1987–88** — yozgi vaqt amal qilgan."
            ]
          },
          {
            "p": "Inyeon-Link standart meridianni qat'iy belgilamaydi. U tug'ilgan joyning **IANA vaqt zonasini** qidirib, o'sha paytda amalda bo'lgan standart vaqtni topadi, shuning uchun tug'ilgan yillari farq qilsa ham har bir kishining o'z davri qo'llanadi."
          }
        ]
      },
      {
        "title": "Yarim tundan keyin kun poyasi o'zgaradi",
        "blocks": [
          {
            "p": "Tuzatish −32 daqiqa, shuning uchun soat bo'yicha 00:00 va 00:32 orasida tug'ilgan kishi haqiqiy quyosh vaqti bo'yicha **oldingi kunning 23:00 soatida** tug'ilgan. Sana ham shunga mos ravishda orqaga suriladi."
          },
          {
            "p": "Moslikda bu juda muhim. Kun ustuni bir kun orqaga o'tsa, kun poyasi ham, kun shoxi ham o'zgaradi, shuning uchun kun poyasi munosabati, Turmush o'rtog'i yulduzi va kun shoxi munosabati boshqa belgilar bilan qayta hisoblanadi, besh element kuchlari ham siljiydi."
          }
        ]
      },
      {
        "title": "Faqat bir kishi vaqtini bilmasa ham mayli",
        "blocks": [
          {
            "p": "Tug'ilgan vaqt majburiy emas va ikkitadan faqat biri vaqtini bilmasa ham moslik hisoblanadi. Faqat vaqtini bilmagan kishi soat ustunisiz hisoblanadi va natija ekrani buni aytadi. Ikkinchi kishining qiymatlari o'zgarmaydi."
          },
          {
            "p": "Moslikning to'rt bandidan hech biri soat ustunidan bevosita foydalanmaydi, lekin u besh element kuchiga ta'sir qiladi, shuning uchun bilsangiz kiritganingiz aniqroq. Zodiak mosligi vaqt bor-yo'qligidan qat'i nazar bir xil qiymat beradi — [u faqat yil shoxiga qaraydi](/guide/zodiac)."
          }
        ]
      }
    ]
  },
  "guide/no-storage": {
    "eyebrow": "Maxfiylik",
    "title": "Ikki kishining ma'lumotlarini saqlamasligimiz qanday ta'minlanadi",
    "summary": "Moslik boshqa kishining tug'ilgan sanasini ham kiritishni so'raydi. Bu hech bir kishining kiritgan ma'lumoti hech qayerda yozilmasligi texnik jihatdan nimani anglatishini va natija havolasi bilan nima birga yurishini tushuntiradi.",
    "backLabel": "Hisoblash asosi",
    "sections": [
      {
        "title": "Siz boshqa kishining ma'lumotini kiritasiz",
        "blocks": [
          {
            "p": "Moslik ekrani sizning tug'ilgan sanangizni va boshqa kishining sanasini birga oladi. Boshqa kishining tug'ilgan sanasi uning shaxsiy ma'lumoti, shuning uchun Inyeon-Link ikkalasiga qanday munosabatda bo'lishini alohida tushuntiramiz."
          },
          {
            "p": "Hisob qaydnomasi yo'q va ism, elektron pochta yoki telefon raqamini so'ramaymiz. Biz faqat ikkita tug'ilgan sana va ixtiyoriy ravishda tug'ilgan vaqt, joy va jinsni olamiz, hisoblash tugagach hech biri qolmaydi."
          },
          {
            "p": "Natija ekranida ko'rsatiladigan ko'rinadigan ism uchun maydon bor, lekin u faqat ko'rsatish uchun va hisoblashda ishlatilmaydi. Haqiqiy ism kiritishingiz shart emas."
          }
        ]
      },
      {
        "title": "Natija havolasi ikkala tug'ilgan sanani o'z ichiga oladi",
        "blocks": [
          {
            "p": "Hisoblash tugagach, manzil quyidagicha ko'rinadi."
          },
          {
            "p": "**/ko/compatibility/result#eyJhIjp7InkiOjE5OTAsLi4u**"
          },
          {
            "p": "**#** dan keyingi qism ikki kishining kiritgan ma'lumotini saqlaydi. U fragment deb ataladi va veb standartiga ko'ra **brauzer uni serverga yubormaydi**. U hujjat ichidagi o'rinni ko'rsatish uchun mo'ljallangan, shuning uchun server uni hech qachon ko'rmaydi."
          },
          {
            "p": "Natija havolasini ochganingizda brauzer shu qiymatni o'qiydi va hisoblashni so'raydi; server kerakli qiymatlarni oladi, javobni qaytaradi va ularni unutadi."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Havolani boshqa kishiga yuborishdan oldin",
        "blocks": [
          {
            "p": "Serverda saqlanmaslik havolaning sir bo'lishi bilan bir xil emas. Havolani olgan har kim ikkala tug'ilgan sanani o'zgarishsiz ko'radi, suhbat xonasida qolgan havola esa serverimizdan qat'i nazar o'sha xonada qoladi. Iltimos, unda boshqa kishining ma'lumoti borligini yodda tutib yuboring."
          }
        ]
      },
      {
        "title": "Hisoblash serverda ishlasa-da, nega hech narsa qolmaydi",
        "blocks": [
          {
            "p": "Saju jadvalini tuzish uchun brauzerga yuborish uchun juda katta almanax jadvali kerak, shuning uchun hisoblash serverda ishlaydi. Lekin **so'rov qayta ishlangach, qiymatlar boshqa hech qayerda ishlatilmaydi.** Ularni ma'lumotlar bazasiga yozadigan kod yo'q."
          },
          {
            "p": "Qoladigan yagona yozuv — bir kishining qisqa vaqt ichida juda ko'p so'rov yuborishini to'xtatadigan hisoblagich. Unda tug'ilgan sana yo'q va IP manzil o'z holicha saqlanmaydi; u sana bilan birga xeshlangan bitta qiymatni sanaydi va kun o'zgarganda bu qiymat o'zgaradi."
          }
        ]
      },
      {
        "title": "Saqlamaslik bilan nimadan voz kechamiz",
        "blocks": [
          {
            "p": "Hech narsa saqlanmagani uchun bir nechta narsadan voz kechganmiz."
          },
          {
            "ul": [
              "**O'tgan moslik natijasini qayta ololmaysiz.** Uni yana ko'rish uchun havolani saqlab qo'yishingiz kerak.",
              "**Bir xil ikki kishi har safar qayta hisoblanadi.** Kesh yo'q. Lekin har bir qoida deterministik, shuning uchun [bir xil kiritish doim bir xil qiymat beradi](/guide/how-compatibility).",
              "**Yangilash reklama to'sig'ini qaytaradi.** Uni ko'rganingiz haqida yozuv saqlanadigan joy yo'q."
            ]
          }
        ]
      },
      {
        "title": "Hisobot sotib olsangiz",
        "blocks": [
          {
            "p": "Hisobot sotib olsangiz, shu paytda tranzaksiya yozuvi saqlanadi: to'lov yozuvlari qonun talab qiladigan saqlash muddatiga ega, buyurtma tarixisiz esa pulni qaytarishni amalga oshirib bo'lmaydi. Shunda ham **ikkala tug'ilgan sana buyurtmaga biriktirilmaydi**; to'lov tasdiqlangach PDF yaratilayotganda ular qayta so'raladi va faqat o'sha payt ishlatiladi."
          },
          {
            "p": "Batafsil ma'lumot [maxfiylik siyosati](/privacy) da."
          }
        ]
      }
    ]
  },
  "guide/reports": {
    "eyebrow": "Pullik Mahsulotlar",
    "title": "Pullik hisobotda nimalar kiritilgan?",
    "summary": "Bu ekran o'zgarmasdan, PDF ga nima qo'shilganini har bir element bo'yicha tushuntiradi. Qiymatlar va mazmunlar haqiqiy mahsulot sozlamalaridan o'qiladi.",
    "backLabel": "Hisoblash Asosi",
    "sections": [
      {
        "title": "Ekran o'zgarmaydi, faqat PDF ga qo'shiladi",
        "blocks": [
          {
            "p": "Moslik hisoblashlari va natija so'rovlari **bepul**. Moslashuv darajalari, element ballari va vaznlari, ikkala shaxsning saju asl diagrammalari va munosabat shakli ekran orqali ko'rinadi. Pullik hisobotni yaratishda ekrandan hech narsa olib tashlanmagan."
          },
          {
            "p": "Hisobotning maqsadi **ekranda yo'q bo'lgan qatlamlarni qo'shishdir**. Va o'sha qatlam soxta emas; u ball berish jarayonida allaqachon hisoblangan qiymatlardan iborat, lekin ekranda ishlatilmagan."
          }
        ]
      },
      {
        "title": "Saju Moslik Hisoboti PDF — {priceGunghapDomestic}",
        "slot": "gunghapContents",
        "blocks": [
          {
            "p": "Mahalliy to'lov {priceGunghapDomestic} (QQS ni o'z ichiga olgan holda), xalqaro to'lov {priceGunghapGlobal}. A4 {pagesGunghap} sahifalar."
          }
        ]
      },
      {
        "blocks": [
          {
            "p": "**1-3 sahifalar ekranda ko'rsatilgan narsalarni saqlash uchun tashkil etilgan** va **4-sahifadan boshlab ekranda ko'rsatilmagan kontentdir**. Quyida ba'zi narsalar nega ekranda ko'rsatilmaganligi tushuntiriladi."
          }
        ]
      },
      {
        "title": "4-sahifa — Ikkita energiyaning yo'nalishi",
        "blocks": [
          {
            "p": "Ekranda ko'rsatilgan besh elementning elementlari bitta ball sifatida taqdim etiladi. Biroq, bu bitta ball **ikki yo'nalishning o'rtacha qiymati** — boshqasining meni qanchalik to'ldirishi va men boshqani qanchalik to'ldirayotganimni o'lchash va bu qiymatlarni o'rtacha hisoblash."
          },
          {
            "p": "To'ldirish bir-biriga **asimmetrik**. Bu, men uchun zarur bo'lgan energiyalar va boshqalar uchun zarur bo'lgan energiyalar farq qiladi. Agar siz faqat o'rtacha qiymatga qarasangiz, bir tomonni boshqasini sezilarli darajada to'ldiradigan munosabat va ikkala tomon bir-birini teng to'ldiradigan munosabat bir xil raqam sifatida ko'rinadi. Hisobot bu ikkita farq qiladi."
          },
          {
            "p": "Shuningdek, ushbu bo'limda **to'rt ustun munosabat jadvali** ham kiritilgan. Moslashuv darajasiga kiradigan yagona ustun — bu kun shoxidir (日支) — chunki bu erda turmush o'rtog'i pozitsiyasi, lekin boshqa yil, oy va soat shoxlari ham bir xil munosabat jadvali bilan o'qilishi mumkin."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ushbu jadvaldagi ballar moslashuv darajasiga kirmaydi",
        "blocks": [
          {
            "p": "Agar kiritilsa, umumiy ball o'zgaradi va allaqachon yuborilgan natija havolasiga mos kelmaydi. Shuning uchun, bu faqat o'qish material sifatida kiritilgan va bu haqda jadval ostida eslatma berilgan."
          }
        ]
      },
      {
        "title": "5-sahifa — Har bir insonning saju'siga yaqinroq qarash",
        "blocks": [
          {
            "p": "Ekrandagi besh elementning ustunlari **qanchalik mavjudligini** ko'rsatadi. Hisobot **tug'ilish oyi ushbu energiyani qo'llab-quvvatlaydimi yoki yo'qmi** qo'shadi. Bir xil miqdorda bo'lsa ham, kuchli (旺) energiya va o'lgan (死) energiya turlicha kuchga ega."
          },
          {
            "p": "Siz kuchlarni ko'rishingiz mumkin, tug'ilish oyining energiyasini ko'paytirishdan oldin va keyin yonma-yon ko'rsatib, faslning uni qanday ko'targanini ko'rsatadi. Kuchli kun poyasi va zaif kun poyasi o'rtasidagi farqni belgilovchi **ittifoq nisbati** ham eslatilgan — ekran faqat hukmni ko'rsatadi, lekin hisobot bu hukm qayerda qilinganini ko'rsatadi."
          }
        ]
      },
      {
        "title": "6-sahifa — Boshqa insonning to'rt ustuni menga nima anglatadi",
        "blocks": [
          {
            "p": "Moslashuv darajasi faqat ikkala shaxsning **kun poyalarini** taqqoslaydi. Biroq, boshqa insonning qolgan uchta ustuni ham O'n Xudo tomonidan bir xil qoidalar asosida aniqlanadi. Siz faqat kun poyasiga qarab **bu inson menga nima anglatishini** tushunishingiz mumkin, lekin **o'sha insonning pozitsiyasi menga nima anglatishini** bilolmaysiz."
          },
          {
            "p": "Yo'nalishlar mavjud bo'lgani uchun, ikkala tomon alohida taqdim etiladi. Men ko'rayotganim va boshqalar ko'rayotganlari farq qiladi."
          }
        ]
      },
      {
        "title": "7-sahifa — Ushbu saju qanday hisoblangan",
        "blocks": [
          {
            "p": "Tug'ilish vaqti haqiqiy quyosh vaqtidan qanchalik o'zgartirilgani, tuzatish sanani o'zgartirganmi yoki yo'qmi va saju yaratilganida quyosh va oy sanalari qanday bo'lganligi haqida ma'lumot beradi. Konseptsiyasi [Tug'ilish vaqtini haqiqiy quyosh vaqtiga moslashtirish](/guide/true-solar-time) hujjatida tushuntirilgan, lekin **sizning holatingizda qanchalik daqiqa o'zgartirilganligi** har bir kishi uchun farq qiladi, shuning uchun bu faqat hisobotda kiritilgan."
          }
        ]
      },
      {
        "title": "Inyeon moslashuv profili hisobot PDF — {priceAffinityDomestic}",
        "slot": "affinityContents",
        "blocks": [
          {
            "p": "Mahalliy to'lov {priceAffinityDomestic} (QQSni o'z ichiga olgan holda), xalqaro to'lov {priceAffinityGlobal}. A4 {pagesAffinity} sahifalar."
          }
        ]
      },
      {
        "blocks": [
          {
            "p": "Ushbu bo'lim **umumiy reyting jadvali**. Ekran faqat yaxshi mos keladigan to'plamlarni ko'rsatadi, lekin hisobot barcha o'n ta osmon poyasi va o'n ikki ta yer shoxini **to'liq** reyting qiladi. Agar siz faqat eng yuqori to'plamlarga qarasangiz, 'keyingi kim' va 'qaysi eng mos kelmaydigan' haqida bilolmaysiz."
          }
        ]
      },
      {
        "title": "Sotib olishdan oldin bilishingiz kerak bo'lgan narsalar",
        "blocks": [
          {
            "p": "**Server fayllarni saqlamaydi.** To'lov tasdiqlangandan so'ng, hujjat yaratiladi va darhol yuboriladi, serverda hech narsa qoldirmaydi. Ushbu xizmatning kiritilgan qiymatlarni saqlamaslik printsipi to'langan oqimda ham saqlanadi."
          },
          {
            "p": "Shuning uchun, **to'lovdan so'ng faylni darhol saqlang.** Siz bir xil buyurtmani besh marta qabul qilishingiz mumkin, lekin natijalar ekranidan chiqib ketganingizda va kiritilgan qiymatlar yo'qolsa, uni qayta yaratib bo'lmaydi."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Hisobotlar ham ma'lumot manbalari",
        "blocks": [
          {
            "p": "Uzoqroq bo'lsa, xulosa yanada aniqroq degani emas. Hisobotda ko'proq bo'lgan narsa **bir xil hisoblashning asosidir**, kuchli da'vo emas. Ta'qdirni o'qish amaliyotchiga qarab xulosalar farq qilishi mumkin bo'lgan soha, va ushbu xizmat faqat qoidalar asosida tarjima qilinadigan narsalarni hisoblaydi."
          }
        ]
      }
    ]
  },
  "notice": {
    "eyebrow": "E'lon",
    "title": "E'lonlar",
    "summary": "Bu foydalanishga ta'sir etuvchi o'zgarishlar haqida xabar berish joyidir.",
    "backLabel": "Bosh sahifaga qaytish",
    "sections": []
  },
  "contact": {
    "eyebrow": "Aloqa",
    "title": "So'rovlar",
    "summary": "Bu foydalanish, qaytarish, shaxsiy ma'lumotlar so'rovlari va xato xabarlarini so'rash uchun kanal, shuningdek, biznes ma'lumotlari.",
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
              "**Hisoblash Xato Hisoboti** — Agar saju asl jadvali yoki balli g'alati ko'rinayotgan bo'lsa, iltimos, bizga xabar bering. Agar siz sanani va vaqtni kiritganingizni qo'shsangiz, biz bir xil qiymatlar bilan qayta hisoblaymiz."
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
            "p": "So'rov emailida tug'ilish sanasi va vaqtini kiritishingiz shart emas. Biz kiritilgan qiymatlarni saqlamaymiz, shuning uchun ularni qayta ololmaymiz, va buyurtma raqami tasdiqlash uchun yetarli. Iltimos, agar hisoblash xato hisobotiga zarur bo'lsa, faqat uni qo'shing."
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
  "intro": "Foydalanish shartlaringizga o'zgartirishlar — narxlar, siyosatlar — bu yerda kuchga kirishidan oldin e'lon qilinadi. Ichki yaxshilanishlar ro'yxatga olinmaydi: bu yerda ko'rsatilganlar sizga kerak bo'lgan ma'lumotlardir.",
  "empty": {
    "title": "Hali hech qanday e'lon yo'q",
    "body": "Biror narsa o'zgarganda, bu yerda paydo bo'ladi."
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
        "Savollar, qaytarishlar, maxfiylik so'rovlari va hisoblash xatolari haqida hisobotlar endi bitta joyga yo'naltiriladi — pastki qismdagi aloqa sahifasini ko'ring.",
        "Agar biror narsa noto'g'ri hisoblangan ko'rinsa, iltimos, uni ishlab chiqargan tug'ilish tafsilotlarini qo'shing. Siz kiritgan ma'lumotlarni saqlamaymiz, shuning uchun ularni kiritmasangiz, o'qishni qayta tiklay olmaymiz."
      ]
    },
    "2026-08-01-pdf-language": {
      "title": "Hisobotlar Arab va Khmer tillarida ingliz tilida chiqariladi",
      "body": [
        "Agar siz Arab yoki Khmer tilida o'qiyotgan bo'lsangiz, sotib olgan PDF hisobotingiz ingliz tilida tayyorlanadi. Hujjatlarimizni joylashtiradigan vosita hali o'sha yozuvlarda paragraflarni belgilay olmaydi.",
        "Ekran sizning tilingizda qoladi va ismingiz hisobot ichida o'z yozuvingizda chop etiladi.",
        "Xuddi shu eslatma to'lovdan oldin paydo bo'ladi. Vosita bu yozuvlarni qo'llab-quvvatlaganda, biz bu yerda aytamiz."
      ]
    },
    "2026-08-01-engine-version": {
      "title": "Har bir o'qish foydalanilgan qoidalar versiyasini o'z ichiga oladi",
      "body": [
        "Har bir o'qish va hisobot uni ishlab chiqarish uchun ishlatilgan qoidalar to'plamini o'z ichiga oladi (masalan, inyeonlink-match-v10). Bir xil kirish bir xil qoidalar to'plamida har doim bir xil raqamlarni beradi.",
        "Agar biz talqin qoidalarini ballni o'zgartiradigan tarzda o'zgartirsak, biz buni birinchi bo'lib bu yerda e'lon qilamiz, kuchga kirish sanasi bilan — chunki sizda allaqachon mavjud bo'lgan natija havolasi boshqacha o'qiladi.",
        "Hozirgi qoidalar to'plami v10. To'lovlar hali ochiq emas."
      ]
    }
  }
} satisfies NoticeCopy;
