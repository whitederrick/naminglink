// 사주링크 화면 사전의 Uzbek (O'zbekcha)(uz) 번역이다.
//
// **`scripts/translate-i18n.ts`가 만든 파일이다.** 키 구성·중첩·배열 길이는 en을 그대로
// 복사하고 문자열만 갈아 끼우므로 구조가 어긋날 자리가 없다. 손으로 고칠 때도 키를 더하거나
// 빼지 말 것 — `verify-i18n`이 en과 대조해 잡는다.
//
// **인연링크에서 물려받은 옛 번역을 되살린 것이 아니다.** 그 파일들은 궁합 서비스의 UI라,
// 되살리면 사주 화면에 궁합·인연이 다시 들어온다. 새 ko·en에서 다시 옮겼다.

import type { Dictionary } from "@/lib/i18n";

export const uz: Dictionary = {
  "brand": "SajuLink",
  "tagline": "Tug'ilgan sana orqali o'qiladigan to'rt ustunlaringiz",
  "currentLanguage": "Joriy til",
  "moreLanguages": "Yana",
  "closeLanguages": "Yopish",
  "landing": {
    "title": "Siz tug‘ilgan sakkiz belgi\n",
    "subtitle": "Sizga faqat tug‘ilgan sana kerak.\nBiz sizning Saju (To‘rt ustun) jadvalingizni tuzamiz, besh elementning muvozanatini hisoblaymiz va kun ustunining kuchini o‘rganamiz.",
    "cta": "Mening Sajumni ko‘rish",
    "howTitle": "Qanday hisoblanadi",
    "steps": [
      "Tug‘ilgan sanangizni kiriting. Tug‘ilish vaqti ixtiyoriy.",
      "Tug‘ilgan yil, oy, kun va soat sakkiz belgi bo‘lib, sizning natal jadvalingizni tashkil etadi. Ulardan har bir elementning og‘irligini va kun ustunining kuchini o‘rganamiz.",
      "Bugungi ustun o‘sha jadvalga qo‘yilib, bugungi taqdiringizni ham ko‘rsatadi."
    ],
    "privacyTitle": "Kiritilgan ma'lumot saqlanmaydi",
    "privacyBody": "Tug'ilgan sanalar faqat natija hisoblanayotgan paytda ishlatiladi va hech qayerga yozilmaydi. Ro'yxatdan o'tish shart emas. Natija havolasidagi ma'lumot serverga yuborilmaydi.",
    "disclaimer": "Bu an'anaviy Saju o‘qilishi ma'lumot sifatida taqdim etiladi. Bu ilmiy bashorat yoki hech kimning kelajagi haqida hukm emas."
  },
  "form": {
    "title": "Sizning tug'ilgan sanangiz",
    "description": "Tug'ilgan vaqtni bilish talqinni aniqroq qiladi, lekin u majburiy emas.",
    "meLegend": "Siz haqingizda",
    "nickname": "Qanday atalsin",
    "nicknamePlaceholder": "masalan: Men",
    "nicknameHint": "Faqat natija ekranida ko'rsatiladi. Hisobda ishlatilmaydi.",
    "gender": "Jins",
    "male": "Erkak",
    "female": "Ayol",
    "genderUnspecified": "Aytishni istamayman",
    "genderHint": "An'anaviy Saju turmush o'rtog' va farzand pozitsiyalarini jinsga qarab boshqacha o'qiydi. Agar siz buni o'tkazib yuborsangiz, ushbu omillar hisob-kitobdan chiqariladi.",
    "birthplace": "Tug'ilgan joy",
    "birthplaceHint": "Soat ustuni sizning tug'ilgan joyingizdagi haqiqiy quyosh vaqtidan hisoblanadi. Agar sizning tug'ilgan joyingiz ro'yxatda bo'lmasa, eng yaqin shaharni tanlang.\nKoreya materikida shaharlar o'rtasidagi farq ikki daqiqadan kam. Yozgi vaqt va tarixiy vaqt zonasi o'zgarishlari ham hisobga olinadi.",
    "calendar": "Taqvim",
    "solar": "Quyosh",
    "lunar": "Oy",
    "leapMonth": "Kabisa oyi",
    "birthDate": "Tug'ilgan sana",
    "year": "Yil",
    "month": "Oy",
    "day": "Kun",
    "birthTime": "Tug'ilgan vaqt",
    "unknownTime": "Vaqtni bilmayman",
    "hour": "Soat",
    "minute": "Daqiqa",
    "submit": "Reklamani ko'ring va mening Sajumni ko'ring",
    "submitNoAd": "Mening Sajumni ko'ring",
    "submitting": "Hisoblanmoqda…",
    "errorInvalidDate": "Tug'ilgan sanani tekshiring. Oy taqvimi bo'lsa, kabisa oyiga to'g'ri kelmasligini ham tekshiring.",
    "errorGeneric": "Hisob amalga oshmadi. Birozdan so'ng qayta urinib ko'ring."
  },
  "reading": {
    "chartTitle": "Sizning natal chartingiz",
    "chartHint": "Saju tug‘ilgan yil, oy, kun va soatni har biri ikki belgi sifatida ko‘rsatadi. Quyida keltirilgan hamma narsa ushbu sakkiz belgidan o‘qiladi.",
    "pillarYear": "Yil",
    "pillarMonth": "Oy",
    "pillarDay": "Kun",
    "pillarHour": "Soat",
    "pillarHourUnknown": "Tug'ilgan vaqt yo'q",
    "dayMasterLabel": "Kun hokimi",
    "animalLabel": "Mucha",
    "seasonLabel": "Tug'ilgan fasl",
    "elementsTitle": "Besh unsur kuchi",
    "strongest": "Eng kuchlisi",
    "scarcest": "Eng kamyobi",
    "strengthTitle": "Siz tug‘ilgan kuch",
    "cautionTitle": "E'tibor beriladigan joy",
    "bodyStrengthTitle": "Kun hokimining kuchi",
    "favorableLabel": "Hozir kerak bo'lgan quvvat"
  },
  "bodyStrength": {
    "STRONG": {
      "name": "Kuchli kun hokimi (身强)",
      "body": "Kun hokimingizni qo'llab-quvvatlaydigan unsurlar to'kis. Bu sizga o'z kuchingiz bilan oldinga siljish imkonini beradi, lekin bir tomonga og'ib ketish ham oson — ortiqchani olib ketadigan quvvat bo'lgandagina osoyishta bo'lasiz."
    },
    "BALANCED": {
      "name": "Muvozanatli kun hokimi (中和)",
      "body": "Kun hokimingizni qo'llaydigan va undan oladigan kuchlar deyarli teng. Bir tomonga qat'iy hukm chiqarish qiyin bo'lgani uchun, bu yerda hozir eng yupqa turgan quvvatni kerakli deb o'qiymiz."
    },
    "WEAK": {
      "name": "Kuchsiz kun hokimi (身弱)",
      "body": "Kun hokimingizni qo'llab-quvvatlaydigan unsurlar yupqa. Atrofdagilarning kuchidan yaxshi foydalanasiz, lekin uzoq vaqt yolg'iz chidashda charchaysiz — orqangizda tayanch bo'lganda kuchga to'lasiz."
    }
  },
  "tenGods": {
    "BIGYEON": {
      "name": "Hamroh (比肩)",
      "body": "Siz bilan yelkama-yelka turadigan energiya. Qalin bo'lsa, o'z joyingizni ushlab turish kuchini beradi va avval o'z ulushingizni talab qiladi."
    },
    "GEOPJAE": {
      "name": "Raqib (劫財)",
      "body": "Sizga o'xshash, lekin boshqacha ishlaydigan energiya. U itarish kuchini beradi, lekin ortiqcha bo'lsa, ushlab turganingiz tarqalishi oson."
    },
    "SIKSIN": {
      "name": "Ifoda (食神)",
      "body": "Ichingizdagi narsalarni dunyoga chiqaradigan energiya. Ifoda va hayotning oddiy zavqi shu yerda keladi; u joylashgan joyda, osonlik bo'ladi."
    },
    "SANGGWAN": {
      "name": "Buzuvchi (傷官)",
      "body": "Qattiq ramkani silkitadigan energiya. U iste'dod va o'tkir qirralar beradi, lekin ortiqcha bo'lsa, qoidalar va darajalar bilan to'qnashadi."
    },
    "PYEONJAE": {
      "name": "Kutilmagan boylik (偏財)",
      "body": "Keng turdagi boylik energiyasi. Faol va erkin, u kutilmagan joylardan imkoniyatlar olib keladi."
    },
    "JEONGJAE": {
      "name": "Barqaror boylik (正財)",
      "body": "Tinch boylik energiyasi, bo'lak-bo'lak to'plangan. An'anaviy Saju uni erkak uchun rafiqa pozitsiyasi sifatida ham o'qiydi."
    },
    "PYEONGWAN": {
      "name": "Sinovchi (偏官)",
      "body": "Sizni doimo hushyor va to'g'ri tutadigan energiya. Siz bosim ostida kuchayishingiz mumkin, lekin ortiqcha bo'lsa, doimo quvib kelayotganingizni his qilasiz."
    },
    "JEONGGWAN": {
      "name": "Nufuz (正官)",
      "body": "Sizni to'g'ri yo'lga qo'yadigan tartib energiyasi. U ismingiz va mavqeingizni saqlaydi; an'anaviy Saju uni ayol uchun rafiqa pozitsiyasi sifatida ham o'qiydi."
    },
    "PYEONIN": {
      "name": "Noodatiy tayanch (偏印)",
      "body": "Sizni g'ayrioddiy yo'l bilan qo'llab-quvvatlaydigan energiya. U chuqur qazish kuchini beradi, lekin ortiqcha bo'lsa, fikr qo'lni oldinga olib chiqadi."
    },
    "JEONGIN": {
      "name": "G'amxo'rlik (正印)",
      "body": "Sizni ushlab, o'stiradigan energiya. U o'rganish va tayanch beradi; ortiqcha bo'lsa, o'z yo'lingizga chiqish kechikadi."
    }
  },
  "dayMasters": {
    "甲": {
      "name": "Yang Yog'och (甲)",
      "trait": "Tik o'sadigan baland daraxt. Yo'nalish belgilangach chayqalmaydi va egilishdan ko'ra chidashni tanlaydi."
    },
    "乙": {
      "name": "Yin Yog'och (乙)",
      "trait": "Chirmovuq kabi egiluvchan o't. Sharoitga qarab egiladi-yu, oldinga yuraveradi va uzilmaydi."
    },
    "丙": {
      "name": "Yang Olov (丙)",
      "trait": "Tush paytidagi quyosh. Hissiyot ochiq ko'rinadi, atrof yorishadi, oldinga chiqish tabiiy keladi."
    },
    "丁": {
      "name": "Yin Olov (丁)",
      "trait": "Sham va chiroq yorug'i. Sokin va uzoq yonadi, avvalo eng yaqinlarini isitadi."
    },
    "戊": {
      "name": "Yang Tuproq (戊)",
      "trait": "Keng dala va tog'. Silkitish qiyin, suyanish oson, ammo qabul qilingan qarorni o'zgartirishga shoshmaydi."
    },
    "己": {
      "name": "Yin Tuproq (己)",
      "trait": "Ekin tuprog'i. Nima kelsa qabul qilib o'stiradi, ko'z-ko'z qilishdan ko'ra parvarishga yaqin."
    },
    "庚": {
      "name": "Yang Metall (庚)",
      "trait": "Ishlov ko'rmagan temir. Qat'iy va aniq, osilib qolgan ishlarga sabri yo'q."
    },
    "辛": {
      "name": "Yin Metall (辛)",
      "trait": "Sayqallangan qimmatbaho tosh. Nozik did va yuqori talab; uvol qilingan ishni e'tiborsiz qoldirmaydi."
    },
    "壬": {
      "name": "Yang Suv (壬)",
      "trait": "Daryo va dengiz. Qarashi keng, narsalarning qay tomonga oqayotganini ilg'aydi."
    },
    "癸": {
      "name": "Yin Suv (癸)",
      "trait": "Shabnam va yomg'ir. Sokin singib boradi, so'zdan oldin kayfiyatni o'qiydi."
    }
  },
  "dayMasterSigns": {
    "甲": [
      "Birinchi uchrashuvda ham o'ylaganini borligicha aytadi.",
      "Bir marta belgilangan reja yoki va'dani kamdan-kam o'zgartiradi.",
      "Rad etganda aylantirmaydi, shuning uchun qo'pol eshitilishi mumkin."
    ],
    "乙": [
      "To'qnashuvdan chetlab, boshqa yo'ldan boradi.",
      "Yumshoq ko'rinadi, lekin oxiri o'zi mo'ljallagan joyda bo'ladi.",
      "Davraga qo'shilishdan oldin kayfiyatni chamalaydi."
    ],
    "丙": [
      "Endi tanishgan odamga birinchi bo'lib gap qotadi.",
      "Nimani yoqtirishi va yoqtirmasligi yuzidan bilinadi.",
      "Yig'ilishda o'zi sezmagan holda markazda turadi."
    ],
    "丁": [
      "Avvaliga jim, yaqinlashgach mehr bilan g'amxo'rlik qiladi.",
      "Katta davradan ko'ra bir-ikki kishi bilan uzoq suhbatni afzal ko'radi.",
      "O'tib ketgan gapni esda saqlab, keyin eslatadi."
    ],
    "戊": [
      "Kam gapiradi; shoshilinch paytda ham ovozi kamdan-kam ko'tariladi.",
      "Hamma qarorni cho'zganda, oxirida yakun yasaydigan odam.",
      "Bir marta aytilgan yo'q uzoq vaqt yo'qligicha qoladi."
    ],
    "己": [
      "O'zi gapirganidan ko'ra ko'proq tinglaydi.",
      "Rad etolmagani uchun ishlar unga to'planib qoladi.",
      "Bildirmay qilib qo'ygan yordami keyin ma'lum bo'ladi."
    ],
    "庚": [
      "Tez qaror qiladi va shu zahoti aytadi.",
      "Gapni yumshatmaydi, shuning uchun sovuq tuyulishi mumkin.",
      "Ish cho'zilsa, bezovtaligi ko'rinib turadi."
    ],
    "辛": [
      "Kiyim va tanlaydigan narsalarida aniq mezoni bor.",
      "Chala qilingan ishni indamay o'tkazib yubormaydi.",
      "Maqtovga xasis, lekin bir tan olsa, aniq tan oladi."
    ],
    "壬": [
      "Har xil odamlar bilan bemalol qo'shilib ketadi.",
      "Ko'z oldidagi ishdan oldin keyingi gaplarni ochadi.",
      "Bir joyda uzoq bog'lanib qolishdan siqiladi."
    ],
    "癸": [
      "Kam gapiradi, lekin vaziyatni aniq o'qib turadi.",
      "Kayfiyat o'zgarganini birinchi bo'lib sezadi.",
      "Ichini ochmaydi, shuning uchun uni bilish vaqt oladi."
    ]
  },
  "animalTraits": {
    "rat": "Tez sezadi va keragini tez qo'lga kiritadi. Xavf paytida birinchi bo'lib qimirlaydi.",
    "ox": "Sekin ko'rinadi-yu, ishni oxiriga yetkazadi. Bir olgan yukini tashlamaydi.",
    "tiger": "Qo'rqmas va oldinda yuradi. Adolatsizlikni indamay o'tkazib yubormaydi.",
    "rabbit": "Muloyim va sezgir. To'qnashishdan ko'ra aylanib o'tishni biladi.",
    "dragon": "Ko'ngli keng, orzusi baland. Oddiy narsadan kamdan-kam qanoat hosil qiladi.",
    "snake": "Ichini ochmaydi va chuqur o'ylaydi. Xulosasi aniq.",
    "horse": "Quvnoq va harakatchan. Qamalib qolish unga eng og'iri.",
    "goat": "Mehribon va e'tiborli. Qattiq so'zni uzoq ko'nglida saqlaydi.",
    "monkey": "Uddaburon va tez moslashadi. Takrorlanadigan ishdan zerikadi.",
    "rooster": "Mehnatkash va sinchkov. Joyida turmagan narsani qoldirolmaydi.",
    "dog": "Bir ishongach oxirigacha sodiq. Xiyonat unga ayniqsa og'ir botadi.",
    "pig": "Saxiy va ochiqko'ngil. Oson ishonadi, ba'zan shundan zarar ko'radi."
  },
  "result": {
    "title": "Sizning Saju o'qishingiz",
    "recalculate": "Qaytadan boshlash",
    "copyLink": "Natija havolasini nusxalash",
    "copied": "Nusxalandi",
    "missingInput": "Bu natijani o'qib bo'lmadi. Iltimos, sanalarni qayta kiriting.",
    "partialTime": "Tug'ilgan vaqt kiritilmagani uchun soat ustuni hisobga olinmadi. Uni qo'shsangiz, talqin aniqroq bo'ladi.",
    "engineVersion": "Hisob mezoni",
    "disclaimer": "Bu an'anaviy Saju o'qilishi, ma'lumot sifatida taqdim etilgan. Bu ilmiy bashorat yoki kelajagingizga oid hukm emas."
  },
  "today": {
    "menu": "Bugungi taqdir",
    "title": "Bugungi taqdir",
    "pillarLabel": "Bugungi ustun",
    "scoreLabel": "Bugungi ball",
    "grades": {
      "DAEGIL": {
        "name": "Juda omadli",
        "body": "Bugungi energiya sizning chartingizga eng yaxshi burchakda mos keladi. Kechiktirgan ishlaringizni bajarish uchun yaxshi kun."
      },
      "GIL": {
        "name": "Omadli",
        "body": "Bugun siz bilan birga oqim bor. Odatda qiladigan ishlaringiz odatdagidan osonroq bo'ladi."
      },
      "PYEONG": {
        "name": "Teng",
        "body": "Hech narsa sizni bosim qilmaydi va hech narsa to'sqinlik qilmaydi. Odatdagidek ish tuting va odatdagidek natijaga erishasiz."
      },
      "JUUI": {
        "name": "E'tibor bering",
        "body": "Bugungi energiyaning ba'zilari sizning chartingizga qarshi keladi. Yangi ish boshlashdan ko'ra, mavjud ishlarni tugatishga ko'proq e'tibor berish yaxshiroq."
      },
      "JOSIM": {
        "name": "Ehtiyot bo'ling",
        "body": "Bugungi energiya sizning chartingizga ta'sir qiladi. Agar qaror kutishi mumkin bo'lsa, kutib turing."
      }
    },
    "categories": {
      "wealth": "Pul",
      "love": "Sevgi",
      "career": "Ish",
      "health": "Sog'liq"
    },
    "luckyTitle": "Bugun bularni yaqin tuting",
    "luckyElement": "Element",
    "luckyColor": "Rang",
    "luckyDirection": "Yo'nalish",
    "luckyTime": "Soatlar",
    "luckyNumber": "Raqamlar",
    "luckyColors": {
      "TEAL": "ko'k",
      "GREEN": "yashil",
      "RED": "qizil",
      "ORANGE": "to'q sariq",
      "YELLOW": "sariq",
      "OCHRE": "sariq-brown",
      "WHITE": "oq",
      "GOLD": "oltin",
      "BLACK": "qora",
      "NAVY": "ko'k"
    },
    "luckyDirections": {
      "EAST": "Sharq",
      "SOUTH": "Janub",
      "CENTER": "Markaz",
      "WEST": "G'arb",
      "NORTH": "Shimol"
    },
    "basisTitle": "Bu ball qayerdan keladi",
    "factors": {
      "TODAY_IS_YONGSIN": "Bugungi element sizning chartingizga kerak bo'lgan elementdir",
      "TODAY_GENERATES_YONGSIN": "Bugungi element sizning chartingizga kerak bo'lgan elementni oziqlantiradi",
      "TODAY_IS_GISIN": "Bugungi element allaqachon to'la bo'lgan tomonni yanada kuchaytiradi",
      "TODAY_CONTROLS_YONGSIN": "Bugungi element sizning chartingizga kerak bo'lgan elementni bosadi",
      "TODAY_GENERATES_SELF": "Bugungi element sizning kun ustuningizni qo'llab-quvvatlaydi",
      "TODAY_SAME_ELEMENT": "Bugungi element sizning kun ustuningiz bilan bir xil",
      "SELF_GENERATES_TODAY": "Sizning kun ustuningiz bugungi elementga oqadi",
      "TODAY_CONTROLS_SELF": "Bugungi element sizning kun ustuningizni bosadi",
      "SELF_CONTROLS_TODAY": "Sizning kun ustozingiz bugungi elementni ushlab turadi",
      "WEAK_HELPED": "Zaif kun ustoziga bugun kuch beriladi",
      "STRONG_OVERFED": "Kuchli kun ustoziga bugun og'irlik qo'shiladi",
      "STRONG_DRAINED": "Kuchli kun ustoziga bugun yaxshiroq muvozanatga o'tish uchun tortiladi",
      "WEAK_BURDENED": "Zaif kun ustoziga bugun ko'proq yuk beriladi",
      "BRANCH_SAMHAP": "Bugungi tarmoq sizning xaritangiz bilan to'liq uchlik hosil qiladi",
      "BRANCH_BANHAP": "Bugungi tarmoq sizning xaritangiz bilan yarim uchlik hosil qiladi",
      "BRANCH_YUKHAP": "Bugungi tarmoq sizning xaritangiz bilan olti-hamkorlik hosil qiladi",
      "BRANCH_SAME": "Bugungi tarmoq sizning xaritangizdagi bir xil",
      "BRANCH_NEUTRAL": "Bugungi tarmoq sizning xaritangiz bilan hech qanday aloqasi yo'q",
      "BRANCH_WONJIN": "Bugungi tarmoq sizning xaritangiz bilan tinch murosada",
      "BRANCH_CHUNG": "Bugungi tarmoq sizning xaritangiz bilan to'qnashadi"
    },
    "bookmarkHint": "Tug'ilgan sanangizni saqlamaymiz, shuning uchun har safar qayta kiritilishi kerak. **Bu natija havolasini belgilab qo'ying** va har kuni o'sha kunning taqdiri ochiladi.",
    "disclaimer": "Bugungi taqdir kun ustuni va sizning chartingiz o'rtasidagi munosabatni ballga aylantiradi. Bu kunni qanday o'tkazish haqida eslatma, bashorat emas."
  },
  "ads": {
    "label": "Reklama"
  },
  "analyzing": {
    "title": "Chartingizni tuzish",
    "quotes": [
      "Saju — bu belgilangan javob emas. Bu o'zingizni tushunish uchun bir til.",
      "Tug'ilgan energiyangizni bilish va uni yashash ikki xil narsadir.",
      "Kuchli pozitsiya foydalanishga bog'liq; zaif pozitsiya esa to'ldirishga bog'liq.",
      "Bir xil sakkiz belgi, ularni qanday o'qishingizga qarab, boshqa bir kunni yaratadi.",
      "Yaxshi kunni kutishdan ko'ra, mavjud kuningizni qanday ishlatishni bilish yaxshiroqdir.",
      "Odamlar zaiflik deb ataydigan joy, odatda, eng katta o'sish sodir bo'ladigan joydir.",
      "Ba'zi energiyalar mavsum tomonidan suriladi; ba'zilarini esa o'zingiz yaratishingiz kerak.",
      "Ballardan ko'ra muhimroq narsa, uni qanday o'qishingizdir.",
      "Bugungi taqdir, bir kunlik ob-havo, yashayotgan joyingizdagi iqlim emas.",
      "Sajuni bilish, oldinga qarash emas, balki o'zingizni ko'rish demakdir."
    ],
    "watching": "Reklama ko'rilmoqda",
    "remaining": "Natija {seconds} soniyadan keyin ochiladi"
  },
  "reportDetail": {
    "depthTitle": "Sizning chartingizga yaqinroq nazar",
    "vitalityTitle": "Fasl nimani oldinga suradi",
    "vitalityHint": "Bars elementning qancha mavjudligini ko'rsatadi; bu jadval tug'ilgan oy uni ko'tarishiga ta'sir qiladimi yoki yo'qmi. Bir xil miqdor wangda va sada har xil kuchga ega.",
    "vitalities": {
      "WANG": {
        "name": "Van (旺)",
        "body": "eng kuchli holatda"
      },
      "SANG": {
        "name": "San (相)",
        "body": "kuchda keyingi"
      },
      "HYU": {
        "name": "Xyu (休)",
        "body": "navbatidan keyin dam olmoqda"
      },
      "SU": {
        "name": "Su (囚)",
        "body": "qiyin harakatlanadigan, ushlab turilgan"
      },
      "SA": {
        "name": "Sa (死)",
        "body": "eng kuchsiz holatda"
      }
    },
    "rawLabel": "Mavsumdan oldin",
    "strengthLabel": "Mavsumdan keyin",
    "earthSeasonNote": "O'zgaruvchan oyda (辰未戌丑) tug'ilgan, shuning uchun yer ham wang sifatida hisoblanadi.",
    "allyRatioLabel": "Do'st nisbati",
    "allyRatioHint": "Resurs va hamroh yulduzlarining birlashgan ulushi. 45% dan yuqori kuchli, 35% dan past esa zaif hisoblanadi. Qaror qanchalik yaqin bo'lganini ko'rishingiz uchun raqamni keltiramiz.",
    "stemGodsTitle": "Har bir ustun siz uchun nima",
    "stemGodsHint": "Sizning kun ustunidan o'lchangan holda, qolgan har bir ustun o'n xudoning nomini oladi. Qaysi biri qalin bo'lsa, temperament haqida ko'p narsani aytadi.",
    "pillarColumn": "Ustun",
    "tenGodColumn": "O'n xudo",
    "meaningColumn": "Bu nima degani",
    "yearOutlookTitle": "Bu yilning ko'rinishi",
    "factorsTitle": "Bugungi ball qayerdan keladi",
    "factorsHint": "Ekranda omillar nomlari ko'rsatiladi; bu yerda har birining qo'shgan yoki olib tashlagan ballari chop etiladi.",
    "deltaColumn": "Ballar",
    "appendixTitle": "Bu chart qanday tuzildi",
    "timeCorrectionLabel": "Tug'ilgan vaqt",
    "timeCorrectionApplied": "Haqiqiy quyosh vaqtiga tuzatilib, {time} deb olindi.",
    "timeCorrectionNone": "Tug'ilish vaqti berilmagan, shuning uchun soat ustuni chiqarib tashlandi.",
    "timeCorrectionDateShift": "To'g'rilash {date} ga o'tkazdi, shuning uchun o'sha kunning ustuni ishlatildi.",
    "calendarLabel": "Xarita tuzilgan sana",
    "solarLabel": "Quyosh",
    "lunarLabel": "Oy",
    "lunarUnavailable": "Bu sana taqvim jadvalida yo'q, shuning uchun oy sanasi ko'rsatilmaydi."
  },
  "report": {
    "title": "Hayotingizni PDF formatida saqlang",
    "body": "Biz ushbu o'qishni PDF formatiga aylantiramiz — sizning natal chartingiz, besh elementning og'irligi, kun ustunligingizning kuchi va hozir nima kerakligi, va bugungi taqdir, barchasi bitta sahifada.",
    "buyButton": "{price} to'lab yuklab olish",
    "preparing": "Hozircha mavjud emas",
    "ordering": "Buyurtma yaratilmoqda…",
    "paying": "To'lov amalga oshirilmoqda…",
    "issuing": "Hisobot tayyorlanmoqda…",
    "done": "Yuklab olindi. Qaytadan olish uchun quyidagi tugmani bosing.",
    "failed": "To'lov yoki yuklab olish amalga oshmadi. Birozdan so'ng qayta urinib ko'ring.",
    "retry": "Qaytadan yuklab olish",
    "contents": [
      "Sizning kun ustunligingiz va temperamentingiz — qisqacha, kuchlar va ehtiyot bo'lish kerak bo'lgan jihatlar",
      "Sizning natal chartingiz — to'rt ustunning sakkiz belgisi",
      "Besh elementning og'irligi, eng qalin va eng yupqa",
      "Sizning kun ustunligingizning kuchi va hozir nima kerakligi",
      "Bugungi taqdir va to'rt soha (pul, sevgi, ish, salomatlik)"
    ],
    "consentLabel": "Bu to'lovdan keyin darhol yetkaziladigan raqamli mahsulot ekanini va **yuklab olish tugagach, oddiy fikr o'zgarishi sababli tovardan voz kechish cheklanishini** tushundim.",
    "consentRequired": "To'lashdan oldin voz kechish shartlarini tasdiqlang.",
    "productInfoTitle": "Mahsulot ma'lumoti",
    "productInfo": [
      [
        "Ishlab chiqaruvchi",
        "{brand}"
      ],
      [
        "Format",
        "Bitta PDF hujjati (5 A4 sahifa), to'lovdan so'ng darhol ekranda yuklab olinadi."
      ],
      [
        "Talablar",
        "PDF ochadigan har qanday qurilma. O'rnatish yoki ro'yxatdan o'tish shart emas."
      ],
      [
        "Foydalanish muddati",
        "Cheklovsiz. Yuklab olingan fayl sizda qoladi."
      ],
      [
        "Qayta yuklab olish",
        "Bitta buyurtma bo'yicha besh martagacha. Biz nusxasini saqlamaymiz, shuning uchun natija ekranidan chiqib ketsangiz, uni qayta yaratib bo'lmaydi."
      ],
      [
        "Voz kechish",
        "Yuklab olish boshlanguncha to'liq qaytariladi. Tugagandan keyin fikr o'zgarishi sababli voz kechish cheklanadi (Koreya elektron tijorat qonuni 17-modda 2-band)."
      ],
      [
        "Almashtirish va qaytarish xarajati",
        "Yo'q — raqamli mahsulot, hech narsa jo'natilmaydi."
      ]
    ],
    "refundContact": "Pulni qaytarish yoki savollar uchun quyidagi mijozlar markazi yoki elektron pochtaga murojaat qiling. Hujjat yaratilmagan bo'lsa yoki yechib olingan summa buyurtmadan farq qilsa, to'liq qaytaramiz.",
    "pdfLanguageNotice": "PDF shu ekran bilan bir xil tilda tayyorlanadi."
  },
  "premiumReport": {
    "title": "Premium o'qishingizni PDF sifatida saqlang",
    "body": "Hayot o'qishidagi hamma narsa, shuningdek **ekranda hech qachon ko'rinmaydigan raqamlar** — kuchli yoki zaifni belgilovchi do'stlar nisbati, tug'ilgan oy har bir elementni qanchalik ko'targani va tug'ilish soatingizga qo'llanilgan haqiqiy quyosh vaqti tuzatish.",
    "buyButton": "{price} to'lang va yuklab oling",
    "preparing": "Hali mavjud emas",
    "ordering": "Buyurtmangizni tayyorlash…",
    "paying": "To'lovni qayta ishlash…",
    "issuing": "Hisobotni tayyorlash…",
    "done": "Yuklab olindi. Uni yana yuklab olish uchun quyidagi tugmani ishlating.",
    "failed": "To'lov yoki yuklab olish muvaffaqiyatsiz bo'ldi. Iltimos, bir ozdan keyin qayta urinib ko'ring.",
    "retry": "Yana yuklab olish",
    "contents": [
      "Sizning kun ustingiz va temperamentingiz — qisqacha, kuchlar va ehtiyot bo'lish kerak bo'lgan jihatlar",
      "Sajuningiz — to'rt ustunning sakkiz belgisi",
      "Besh element, sizning kun ustingizning kuchi va uning nima kerakligi",
      "Bugungi taqdir va to'rt soha (pul, sevgi, ish, salomatlik)",
      "Har bir ustun siz uchun nima — sizning chartingizdan o'qilgan o'n xudo",
      "Mavsumiy holat va ittifoqchilik nisbati — hukmning orqasidagi raqamlar",
      "Bu yilning ko'rinishi, bugungi ballarni hisoblash omillari va vaqtni tuzatish"
    ],
    "consentLabel": "Men bu raqamli kontent to'lovdan so'ng darhol taqdim etilishini tushunaman va **yuklab olish tugagandan so'ng oddiy fikr o'zgartirish uchun qaytarish cheklanganligini** tasdiqlayman.",
    "consentRequired": "To'lovdan oldin qaytarish shartlarini tasdiqlang.",
    "productInfoTitle": "Mahsulot haqida ma'lumot",
    "productInfo": [
      [
        "Ta'minotchisi",
        "{brand}"
      ],
      [
        "Format",
        "Bitta PDF hujjati (7 A4 sahifa), to'lovdan so'ng darhol ekranda yuklab olinadi."
      ],
      [
        "Talablar",
        "PDF ni ochadigan har qanday qurilma. O'rnatish yoki hisob yaratish shart emas."
      ],
      [
        "Foydalanish muddati",
        "Cheklov yo'q. Yuklab olingan faylni siz saqlaysiz."
      ],
      [
        "Qayta yuklab olish",
        "Bir xil buyurtma bo'yicha besh marta. Biz faylni saqlamaymiz, shuning uchun natija ekranidan chiqib ketgandan so'ng, uni qayta yaratish mumkin emas."
      ],
      [
        "Qaytarish",
        "Yuklab olish boshlanishidan oldin to'liq qaytarish. Tugallangandan so'ng, fikrni o'zgartirish uchun qaytarish cheklangan (Qonun 17(2), Janubiy Koreya Elektron tijorat qonuni)."
      ],
      [
        "Qaytarish xarajatlari",
        "Yo'q — raqamli kontent, hech narsa jo'natilmaydi."
      ]
    ],
    "refundContact": "Qaytarish yoki savollar uchun, quyidagi mijozlar markaziga yoki elektron pochta orqali murojaat qiling. Hujjat tayyorlanmasa yoki to'langan summa buyurtmadan farq qilsa, to'liq qaytaramiz.",
    "pdfLanguageNotice": "PDF ushbu ekran bilan bir xil tilda tayyorlanadi."
  },
  "fallbackReport": {
    "summary": "{season} energiyasida tug'ilgan {dayMaster} kun ustunidir. Butun xaritada {strongest} eng qalin va {scarcest} eng yupqa. Quyidagi barcha ma'lumotlar ushbu sakkiz belgidan kelib chiqadi — har bir raqam va har bir ustun hisoblangan, tanlanmagan.",
    "personality": "Sizning kun ustuningiz {dayMaster} — {element} energiyasi — va bu xarita {strengthName} sifatida o'qiladi. Qaysi tomoni qalinroq, kun ustunini qo'llab-quvvatlaydigan yoki undan tortib oladigan narsa, donni shakllantiradi va kundalik hayotda bu quyidagicha ko'rinadi.",
    "cautions": {
      "STRONG": [
        "Siz juda kuchli harakat qilasiz, shuning uchun ko'pincha burilishni faqat sodir bo'lgandan keyin sezishingiz mumkin.",
        "Yordam mavjud bo'lsa ham, siz oxir-oqibat buni yolg'iz hal qilasiz, bu esa ishni kattalashtiradi.",
        "O'zingizdan ortiqcha narsalarni olib tashlash uchun joy qoldirsangiz, hammasi joyiga tushadi."
      ],
      "BALANCED": [
        "Hech narsa sizni bir tomonga siljitmaydi, shuning uchun qarorni kechiktirish shunchaki kechiktirilgan holda qoladi.",
        "Siz vaziyatga yaxshi moslashasiz, bu esa o'z chizig'ingizni xiralashtirishi mumkin.",
        "Hozir eng yupqa bo'lgan narsaga qarab yo'nalish belgilash sizga uslub beradi."
      ],
      "WEAK": [
        "Yolg'iz turish sizni kutganingizdan tezroq charchatadi.",
        "Orqangizda hech narsa bo'lmasa, qarorlar sirpanchiq bo'ladi va vaqt o'tadi.",
        "Qo'llab-quvvatlovchi odamlarni yaqin tutish bu xaritada zaiflik emas — bu usuldir."
      ]
    },
    "scarcityCaution": "Hozir eng yupqa element {scarcest}. Ushbu element boshqaradigan joyda siz harakat qilishda eng sekin bo'lasiz.",
    "elementBalance": "Kuchli tomondan, {strongest} {strongestPct}% bilan yetakchilik qiladi va {scarcest} {scarcestPct}% bilan orqada qoladi. Tug'ilgan oyingiz {season}da joylashgan, bu esa ushbu elementni yana bir marta ko'taradi — bir xil miqdor, mavsum uni qo'llab-quvvatlaydimi yoki yo'qmi, kuchini o'zgartiradi. Hozir sizga kerak bo'lgan narsa {favorable}, va bu element to'ldirilganda ishlar osonlashadi.",
    "todayHeadline": "Bugun {grade} sifatida o'qiladi",
    "todayMessage": "Bugun ballingiz {score}, baholash {gradeName}. {gradeBody} Kun ustuni {pillar}, va ushbu ballni eng katta o'zgartirgan omil “{topFactor}” edi.",
    "todayAdvice": {
      "HIGH": "Uzoq vaqt davomida kechiktirilgan xabarni yoki tartibni olish uchun yaxshi kun — lekin buni bugun tugatishga harakat qilmaslik yaxshiroq.",
      "MID": "Odatdagidek qiling va odatda oladigan narsangizni olasiz. Yangi bir narsani boshlash o'rniga, allaqachon qo'lingizda bo'lgan narsani bir qadam oldinga siljiting.",
      "LOW": "Bugungi kun jadvalga qarshi keladi. Yangi boshlashdan ko'ra, tugatish va tekshirishga sarflash yaxshiroq."
    },
    "luckyNote": "Bugungi omadli element {element}. {colors} diapazoni, {direction} tomoni va {time} atrofidagi soatlar bu energiya eng kuchli bo'lgan joylardir.",
    "domains": {
      "wealth": "Bugun pul {score} sifatida o'qiladi. Bu qiymat bugungi energiyaning boylik yulduzlariga (財星) yetib borishiga qarab o'zgaradi — sizning qo'lga oladigan va yig'adigan narsalaringiz.",
      "love": "Bugun sevgi {score} sifatida o'qiladi. Bu qiymat bugungi tarmoqning sizning kun tarmog'ingiz (日支) bilan qanday uchrashishiga qarab belgilanadi — uyg'unlik uni ko'taradi, to'qnashuv esa pastga tortadi.",
      "career": "Bugun ish {score} sifatida o'qiladi. Bu qiymat bugungi energiyaning ofitser (官星) va chiqim (食傷) yulduzlariga yetib borishiga qarab o'zgaradi — sizning qabul qiladigan va chiqaradigan narsalaringiz.",
      "health": "Bugun salomatlik {score} sifatida o'qiladi. Bu qiymat sizning tug'ilgan tarmog'ingizning bugungi kunda qanchalik to'qnashuvga kirishishi va bugungi element sizga kerak bo'lgan elementmi yoki yo'qligiga qarab belgilanadi."
    },
    "yearOutlook": "Bu yilning ustuni {pillar}, {element}ni olib yuradi. {relation} Ushbu o'qish faqat yil ustunining sizga hozir kerak bo'lgan narsalar bilan qanday uchrashishini ko'radi; yilni oyma-oy bo'lib ajratmaydi.",
    "yearRelations": {
      "YONGSIN": "Sizga kerakli element aynan shu yili keladi. O'z vaqtida qo'yib qo'ygan narsalaringizni chiqarish uchun mos vaqt.",
      "GENERATES": "Bu yil sizga kerakli elementni oziqlantiradi, shuning uchun hozirgi vaqt asta-sekin yumshoq bo'ladi — darhol emas, lekin barqaror ravishda.",
      "GISIN": "Bu yil siz allaqachon qaratilgan yo'nalishga yana bir bor bosim o'tkazadi. Yangi narsalarni ochishdan ko'ra, qo'lingizdagi narsalarni tugatish yaxshiroq.",
      "CONTROLS": "Bu yil sizga kerakli elementga bosim o'tkazadigan biror narsa bor, shuning uchun qarorlar sekinroq keladi. O'z muddatlaringizni belgilash yordam beradi.",
      "NEUTRAL": "Bu yil sizga kerakli element bilan to'qnashmaydi va uni oziqlantirmaydi. O'zingizda bor narsalarni saqlab qolish yaxshiroq."
    },
    "disclaimer": "An'anaviy myeongri ma'lumotlari, ilmiy bashorat yoki kelajakda nima bo'lishi kerakligi haqida bayonot emas."
  },
  "footer": {
    "privacy": "Maxfiylik",
    "terms": "Shartlar",
    "refund": "Qaytarish",
    "pricing": "Narxlar",
    "legalEntity": "Kompaniya",
    "representative": "Vakil",
    "businessNumber": "Ro'yxat raqami",
    "mailOrderNumber": "Onlayn savdo",
    "address": "Manzil",
    "customerCenter": "Mijozlarga xizmat",
    "email": "Email",
    "privacyOfficer": "Maxfiylik vakili",
    "hostingProvider": "Hosting",
    "providedBy": "Taqdim etuvchi",
    "effective": "Kuchga kirish sanasi",
    "backHome": "Bosh sahifaga"
  },
  "animals": {
    "rat": "Sichqon",
    "ox": "Ho'kiz",
    "tiger": "Yo'lbars",
    "rabbit": "Quyon",
    "dragon": "Ajdaho",
    "snake": "Ilon",
    "horse": "Ot",
    "goat": "Echki",
    "monkey": "Maymun",
    "rooster": "Xo'roz",
    "dog": "It",
    "pig": "Cho'chqa"
  },
  "elements": {
    "WOOD": "Yog'och",
    "FIRE": "Olov",
    "EARTH": "Tuproq",
    "METAL": "Metall",
    "WATER": "Suv"
  }
};
