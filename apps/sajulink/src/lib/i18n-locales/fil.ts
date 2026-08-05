// 사주링크 화면 사전의 Filipino (Tagalog)(fil) 번역이다.
//
// **`scripts/translate-i18n.ts`가 만든 파일이다.** 키 구성·중첩·배열 길이는 en을 그대로
// 복사하고 문자열만 갈아 끼우므로 구조가 어긋날 자리가 없다. 손으로 고칠 때도 키를 더하거나
// 빼지 말 것 — `verify-i18n`이 en과 대조해 잡는다.
//
// **인연링크에서 물려받은 옛 번역을 되살린 것이 아니다.** 그 파일들은 궁합 서비스의 UI라,
// 되살리면 사주 화면에 궁합·인연이 다시 들어온다. 새 ko·en에서 다시 옮겼다.

import type { Dictionary } from "@/lib/i18n";

export const fil: Dictionary = {
  "brand": "SajuLink",
  "tagline": "Ang Iyong Apat na Haligi, binasa mula sa petsa ng kapanganakan",
  "currentLanguage": "Kasalukuyang wika",
  "moreLanguages": "Higit pa",
  "closeLanguages": "Isara",
  "landing": {
    "title": "Ang walong karakter\nyou were born with",
    "subtitle": "Kailangan mo lang ay isang petsa ng kapanganakan.\nBubuuin namin ang iyong Saju (Four Pillars) chart, susukatin ang limang elemento at babasahin ang lakas ng iyong day master.",
    "cta": "Tingnan ang aking Saju",
    "howTitle": "Paano ito kinakalkula",
    "steps": [
      "Ilagay ang iyong petsa ng kapanganakan. Ang oras ng kapanganakan ay opsyonal.",
      "Ang taon, buwan, araw at oras ng iyong kapanganakan ay nagiging walong karakter — ang iyong natal chart. Mula dito, susukatin namin ang bigat ng bawat elemento at ang lakas ng iyong day master.",
      "Ang haligi ng araw na ito ay ilalagay laban sa chart na iyon upang ibigay ang iyong kapalaran sa araw na ito."
    ],
    "privacyTitle": "Walang inilalagay na iniimbak",
    "privacyBody": "Ginagamit lang ang mga petsa ng kapanganakan habang kinakalkula ang resulta at hindi kailanman itinatala. Walang kailangang account. Walang ipinapadala sa server mula sa nilalaman ng link ng resulta.",
    "disclaimer": "Ito ay isang tradisyonal na pagbasa ng Saju na inaalok para sa sanggunian. Ito ay hindi isang siyentipikong prediksyon o hatol sa hinaharap ng sinuman."
  },
  "form": {
    "title": "Ang iyong petsa ng kapanganakan",
    "description": "Mas matalas ang pagbasa kung alam ang oras ng kapanganakan, pero hindi ito kinakailangan.",
    "meLegend": "Tungkol sa iyo",
    "nickname": "Itatawag sa kanya",
    "nicknamePlaceholder": "hal. Ako",
    "nicknameHint": "Lumalabas lang sa screen ng resulta. Hindi ito ginagamit sa pagkalkula.",
    "gender": "Kasarian",
    "male": "Lalaki",
    "female": "Babae",
    "genderUnspecified": "Ayaw sabihin",
    "genderHint": "Ang tradisyonal na Saju ay nagbabasa ng mga posisyon ng asawa at anak nang iba ayon sa kasarian. Kung hindi mo ito ilalagay, ang mga salik na iyon ay hindi isasama sa kalkulasyon.",
    "birthplace": "Lugar ng kapanganakan",
    "birthplaceHint": "Ang haligi ng oras ay kinakalkula mula sa tunay na solar na oras sa iyong lugar ng kapanganakan. Kung ang iyong lugar ng kapanganakan ay hindi nakalista, pumili ng pinakamalapit na lungsod.\nSa loob ng mainland Korea, ang pagkakaiba sa pagitan ng mga lungsod ay nasa ilalim ng dalawang minuto. Ang daylight saving at mga pagbabago sa makasaysayang time-zone ay isinasama rin.",
    "calendar": "Kalendaryo",
    "solar": "Solar",
    "lunar": "Lunar",
    "leapMonth": "Buwang leap",
    "birthDate": "Petsa ng kapanganakan",
    "year": "Taon",
    "month": "Buwan",
    "day": "Araw",
    "birthTime": "Oras ng kapanganakan",
    "unknownTime": "Hindi ko alam ang oras",
    "hour": "Oras",
    "minute": "Minuto",
    "submit": "Manood ng ad at tingnan ang aking Saju",
    "submitNoAd": "Tingnan ang aking Saju",
    "submitting": "Kinakalkula…",
    "errorInvalidDate": "Pakisuri ang petsa ng kapanganakan. Kung lunar ang petsa, tingnan din kung nasa buwang leap ito.",
    "errorGeneric": "Hindi natuloy ang pagkalkula. Pakisubukan muli maya-maya."
  },
  "reading": {
    "chartTitle": "Ang iyong natal chart",
    "chartHint": "Ang Saju ay naglalarawan ng taon, buwan, araw at oras ng kapanganakan bilang tig-dalawang karakter. Lahat ng nasa ibaba ay binabasa mula sa walong karakter na ito.",
    "pillarYear": "Taon",
    "pillarMonth": "Buwan",
    "pillarDay": "Araw",
    "pillarHour": "Oras",
    "pillarHourUnknown": "Walang oras ng kapanganakan",
    "dayMasterLabel": "Day master",
    "animalLabel": "Zodiac",
    "seasonLabel": "Panahon ng kapanganakan",
    "elementsTitle": "Lakas ng mga elemento",
    "strongest": "Pinakamalakas",
    "scarcest": "Pinakakaunti",
    "strengthTitle": "Ang iyong mga ipinanganak na lakas",
    "cautionTitle": "Dapat bantayan",
    "bodyStrengthTitle": "Lakas ng day master",
    "favorableLabel": "Kailangan mo ngayon"
  },
  "bodyStrength": {
    "STRONG": {
      "name": "Malakas na day master",
      "body": "Sagana ang mga elementong sumusuporta sa iyong day master. Nagbibigay iyon ng sariling sigla, pero madali ring kumiling sa isang panig — mas napapanatag ka kapag may kumukuha ng sobra."
    },
    "BALANCED": {
      "name": "Balanseng day master",
      "body": "Halos pantay ang sumusuporta sa iyong day master at ang kumukuha rito. Mahirap pumanig sa alinman, kaya rito ay itinuturing naming kailangan mo ang pinakamanipis na elemento."
    },
    "WEAK": {
      "name": "Mahinang day master",
      "body": "Manipis ang mga elementong sumusuporta sa iyong day master. Magaling kang humugot ng lakas sa paligid, pero napapagod ka kapag matagal na nag-iisa — lumalakas ka kapag may sumusuporta sa iyo."
    }
  },
  "tenGods": {
    "BIGYEON": {
      "name": "Kasama (比肩)",
      "body": "Ang enerhiya na nakatayo sa tabi mo. Makapal, nagbibigay ito sa iyo ng lakas upang ipaglaban ang iyong sariling lupa at kunin ang iyong bahagi muna."
    },
    "GEOPJAE": {
      "name": "Karibal (劫財)",
      "body": "Enerhiya na kahawig mo ngunit may ibang paraan ng pagkilos. Nagbibigay ito ng puwersa sa isang pagtulak, ngunit sa labis, ang iyong hawak ay madaling kumalat."
    },
    "SIKSIN": {
      "name": "Pagpapahayag (食神)",
      "body": "Ang enerhiya na humihila ng nasa loob mo palabas sa mundo. Ang pagpapahayag at ang simpleng kasiyahan ng pamumuhay ay nagmumula dito; kung saan ito naroroon, mayroong kaginhawaan."
    },
    "SANGGWAN": {
      "name": "Manggugulo (傷官)",
      "body": "Ang enerhiya na nagpapagalaw sa isang nakatakdang balangkas. Nagbibigay ito ng talento at matalim na talas, ngunit sa labis, ito ay sumasalungat sa mga patakaran at ranggo."
    },
    "PYEONJAE": {
      "name": "Biglaang yaman (偏財)",
      "body": "Enerhiya ng kayamanan na malawak. Aktibo at malaya sa kung ano ang mayroon ito, nagdadala ito ng mga pagkakataon mula sa mga hindi inaasahang lugar."
    },
    "JEONGJAE": {
      "name": "Matatag na yaman (正財)",
      "body": "Enerhiya ng kayamanan na matatag, na naipon ng paunti-unti. Sa tradisyonal na Saju, ito rin ay binabasa bilang posisyon ng asawa para sa isang lalaki."
    },
    "PYEONGWAN": {
      "name": "Humahamon (偏官)",
      "body": "Ang enerhiya na nagpapanatili sa iyo na alerto at tuwid. Lumalakas ka sa ilalim ng presyon, bagaman sa labis, palagi kang nakakaramdam na hinahabol."
    },
    "JEONGGWAN": {
      "name": "Awtoridad (正官)",
      "body": "Ang enerhiya ng kaayusan na nagtatama sa iyo. Pinapanatili nito ang iyong pangalan at katayuan; sa tradisyonal na Saju, ito rin ay binabasa bilang posisyon ng asawa para sa isang babae."
    },
    "PYEONIN": {
      "name": "Di-karaniwang suporta (偏印)",
      "body": "Enerhiya na sumusuporta sa iyo sa isang hindi karaniwang daan. Nagbibigay ito ng kapangyarihan upang maghukay ng malalim, bagaman sa labis, ang pag-iisip ay nauuna sa kamay."
    },
    "JEONGIN": {
      "name": "Pag-aaruga (正印)",
      "body": "Ang enerhiya na humahawak at nagpapalago sa iyo. Nagbibigay ito ng kaalaman at isang bagay na masasandalan; sa labis, ang pagsisimula sa iyong sariling landas ay nahuhuli."
    }
  },
  "dayMasters": {
    "甲": {
      "name": "Yang na Kahoy (甲)",
      "trait": "Matayog na punong tuwid ang tubo. Kapag naitakda na ang direksyon, hindi na ito nag-aalangan, at mas pipiliing magtiis kaysa yumuko."
    },
    "乙": {
      "name": "Yin na Kahoy (乙)",
      "trait": "Baging — malambot na damo. Yumuyuko ito ayon sa sitwasyon para makasulong, at hindi napipigtas."
    },
    "丙": {
      "name": "Yang na Apoy (丙)",
      "trait": "Araw sa tanghaling tapat. Hayag ang damdamin, lumiliwanag ang paligid, at natural lang ang pag-una sa harapan."
    },
    "丁": {
      "name": "Yin na Apoy (丁)",
      "trait": "Liwanag ng kandila. Tahimik itong nagniningas at matagal, at unang nagpapainit sa mga pinakamalapit."
    },
    "戊": {
      "name": "Yang na Lupa (戊)",
      "trait": "Malawak na lupa at bundok. Mahirap yanigin at madaling sandalan, bagaman mabagal magbago ng pasyang naitakda na."
    },
    "己": {
      "name": "Yin na Lupa (己)",
      "trait": "Lupa ng bukid. Tinatanggap nito ang anumang dumating at pinalalago, mas nag-aaruga kaysa nagpapakita."
    },
    "庚": {
      "name": "Yang na Metal (庚)",
      "trait": "Bakal na hindi pa hinuhubog. Matalas magpasya at malinaw ang hangganan, kaunti ang pasensya sa bagay na nakabitin."
    },
    "辛": {
      "name": "Yin na Metal (辛)",
      "trait": "Hasang hiyas. Pinong panlasa at mataas na pamantayan; mahirap palampasin ang burarang gawa."
    },
    "壬": {
      "name": "Yang na Tubig (壬)",
      "trait": "Ilog at dagat. Malawak ang pananaw, at may mata kung saan patungo ang agos."
    },
    "癸": {
      "name": "Yin na Tubig (癸)",
      "trait": "Hamog at ulan. Tahimik itong tumatagos, at nababasa ang himig bago pa ang salita."
    }
  },
  "dayMasterSigns": {
    "甲": [
      "Sinasabi ang iniisip kahit sa unang pagkikita.",
      "Bihirang baguhin ang planong o pangakong naitakda na.",
      "Diretsong tumatanggi, kaya minsan tunog matigas."
    ],
    "乙": [
      "Umiiwas sa harapang banggaan at ibang daan ang tinatahak.",
      "Mukhang malambot, pero napupunta pa rin sa balak niyang puntahan.",
      "Sinusuri muna ang himig ng grupo bago sumali."
    ],
    "丙": [
      "Siya ang unang kumikibo sa bagong kakilala.",
      "Nakikita sa mukha ang gusto at ayaw niya.",
      "Napupunta sa gitna ng pagtitipon nang hindi sinasadya."
    ],
    "丁": [
      "Tahimik sa simula, maalaga kapag naging malapit na.",
      "Mas gusto ang mahabang usapan kasama ang isa o dalawa kaysa sa maraming tao.",
      "Naaalala ang pabiglang nasabi mo at binabanggit ito mamaya."
    ],
    "戊": [
      "Kaunti ang salita; bihirang tumaas ang boses kahit nagmamadali.",
      "Siya ang nagsasaayos sa huli habang ipinagpapaliban ng iba ang pasya.",
      "Kapag nagsabi ng hindi, matagal itong mananatiling hindi."
    ],
    "己": [
      "Mas matagal makinig kaysa magsalita.",
      "Hirap tumanggi, kaya nagkukumpol sa kanya ang trabaho.",
      "Ang tahimik niyang inasikaso ay saka lang nalalaman."
    ],
    "庚": [
      "Mabilis magpasya at doon mismo sinasabi.",
      "Hindi nagpapalambot ng salita, kaya minsan tunog malamig.",
      "Halatang naiinip kapag humahaba ang usapin."
    ],
    "辛": [
      "Malinaw ang pamantayan sa damit at sa mga piniling gamit.",
      "Hindi mapalampas ang kalahating gawa nang hindi ito binabanggit.",
      "Kuripot sa papuri, pero tiyak kapag kumilala na."
    ],
    "壬": [
      "Madaling makihalubilo sa lahat ng uri ng tao.",
      "Nauuna niyang pag-usapan ang malayong bukas kaysa sa nasa harapan.",
      "Nayayamot kapag matagal na nakatali sa iisang lugar."
    ],
    "癸": [
      "Kaunti ang salita pero tumpak ang basa niya sa sitwasyon.",
      "Siya ang unang nakakapansin kapag nagbago ang himig.",
      "Hindi basta ipinapakita ang kalooban, kaya kailangan ng panahon para makilala."
    ]
  },
  "animalTraits": {
    "rat": "Mabilis makapansin at mabilis kumuha ng mahalaga. Siya ang unang kumikilos sa gipit.",
    "ox": "Mukhang mabagal pero tinatapos ang sinimulan. Ang tinanggap niya, hindi niya binibitawan.",
    "tiger": "Walang takot at laging nangunguna. Hindi mapalampas ang kawalang-katarungan.",
    "rabbit": "Mahinahon at mapansin. Marunong lumihis sa halip na bumangga.",
    "dragon": "Malawak ang puso at mataas ang mithiin. Bihirang makuntento sa karaniwan.",
    "snake": "Hindi basta naglalabas ng kalooban at malalim mag-isip. Tumpak humatol.",
    "horse": "Masigla at hindi mapakali. Pinakamahirap para sa kanya ang makulong.",
    "goat": "Mainit ang loob at maalalahanin. Matagal dala ang matatalim na salita.",
    "monkey": "Maparaan at mabilis makibagay. Nababagot sa paulit-ulit.",
    "rooster": "Masipag at maselan. Hindi matiis ang bagay na wala sa lugar.",
    "dog": "Tapat hanggang huli kapag nagtiwala na. Lalong malalim ang sugat ng pagtataksil.",
    "pig": "Bukas-palad at prangka. Madaling magtiwala, minsan ay may kapalit."
  },
  "result": {
    "title": "Ang iyong Saju na pagbasa",
    "recalculate": "Magsimula muli",
    "copyLink": "Kopyahin ang link ng resulta",
    "copied": "Nakopya",
    "missingInput": "Hindi mabasa ang resultang ito. Pakilagay muli ang mga petsa.",
    "partialTime": "Walang ibinigay na oras ng kapanganakan, kaya inalis ang haligi ng oras. Kapag idinagdag ito, mas tumpak ang pagbasa.",
    "engineVersion": "Kinalkula gamit ang",
    "disclaimer": "Ito ay isang tradisyonal na pagbasa ng Saju na inaalok para sa sanggunian. Hindi ito isang siyentipikong hula o hatol sa iyong hinaharap."
  },
  "today": {
    "menu": "Suwerteng araw na ito",
    "title": "Suwerteng araw na ito",
    "pillarLabel": "Pilar ng araw na ito",
    "scoreLabel": "Iskor ng araw na ito",
    "grades": {
      "DAEGIL": {
        "name": "Napakabuti",
        "body": "Ang enerhiya ng araw na ito ay tumutugma sa iyong tsart sa pinakamainam na anggulo. Magandang araw upang simulan ang mga bagay na iyong ipinagpaliban."
      },
      "GIL": {
        "name": "Magandang tanda",
        "body": "Ang agos ay kasama mo ngayon. Ang mga karaniwang ginagawa mo ay mas madali kaysa sa karaniwan."
      },
      "PYEONG": {
        "name": "Pantay",
        "body": "Walang nagtutulak sa iyo at walang humahadlang sa iyo. Gawin ang karaniwan mong ginagawa at makakamit mo ang karaniwan mong nakukuha."
      },
      "JUUI": {
        "name": "Mag-ingat",
        "body": "Ang ilan sa enerhiya ng araw na ito ay salungat sa iyong tsart. Mas mabuting tapusin ang mga bagay kaysa simulan ang mga ito."
      },
      "JOSIM": {
        "name": "Mag-ingat ka",
        "body": "Ang enerhiya ng araw na ito ay nakadikit sa iyong tsart. Kung ang isang desisyon ay maaaring maghintay, hayaan mo itong maghintay."
      }
    },
    "categories": {
      "wealth": "Pera",
      "love": "Pag-ibig",
      "career": "Trabaho",
      "health": "Kalusugan"
    },
    "luckyTitle": "Panatilihin ang mga ito malapit ngayon",
    "luckyElement": "Elemento",
    "luckyColor": "Kulay",
    "luckyDirection": "Direksyon",
    "luckyTime": "Oras",
    "luckyNumber": "Mga numero",
    "luckyColors": {
      "TEAL": "berde-abo",
      "GREEN": "berde",
      "RED": "pula",
      "ORANGE": "kahel",
      "YELLOW": "dilaw",
      "OCHRE": "dilaw-lupa",
      "WHITE": "puti",
      "GOLD": "ginto",
      "BLACK": "itim",
      "NAVY": "dilaw na asul"
    },
    "luckyDirections": {
      "EAST": "Silangan",
      "SOUTH": "Timog",
      "CENTER": "Sentro",
      "WEST": "Kanluran",
      "NORTH": "Hilaga"
    },
    "basisTitle": "Saan nagmula ang score na ito",
    "factors": {
      "TODAY_IS_YONGSIN": "Ang elemento ng araw na ito ay ang kailangan ng iyong tsart",
      "TODAY_GENERATES_YONGSIN": "Ang elemento ng araw na ito ay nagbibigay ng suporta sa kailangan ng iyong tsart",
      "TODAY_IS_GISIN": "Ang elemento ng araw na ito ay higit pang nagtutulak sa bahagi na puno na",
      "TODAY_CONTROLS_YONGSIN": "Ang elemento ng araw na ito ay humahawak sa kailangan ng iyong tsart",
      "TODAY_GENERATES_SELF": "Ang elemento ng araw na ito ay sumusuporta sa iyong day master",
      "TODAY_SAME_ELEMENT": "Ang elemento ng araw na ito ay kapareho ng iyong day master",
      "SELF_GENERATES_TODAY": "Ang iyong day master ay umaagos patungo sa elemento ng araw na ito",
      "TODAY_CONTROLS_SELF": "Ang elemento ng araw na ito ay humahawak sa iyong day master",
      "SELF_CONTROLS_TODAY": "Ang iyong day master ay humahawak sa elemento ng araw na ito",
      "WEAK_HELPED": "Ang isang mahina day master ay binibigyan ng lakas ngayon",
      "STRONG_OVERFED": "Ang isang malakas na day master ay nagiging mas mabigat ngayon",
      "STRONG_DRAINED": "Ang isang malakas na day master ay nahahatak pababa para sa mas magandang balanse ngayon",
      "WEAK_BURDENED": "Ang isang mahina day master ay binibigyan ng higit pang pasanin ngayon",
      "BRANCH_SAMHAP": "Ang sangay ngayon ay bumubuo ng isang buong trine sa iyong tsart",
      "BRANCH_BANHAP": "Ang sangay ngayon ay bumubuo ng isang kalahating trine sa iyong tsart",
      "BRANCH_YUKHAP": "Ang sangay ngayon ay bumubuo ng isang anim na pagkakaisa sa iyong tsart",
      "BRANCH_SAME": "Ang sangay ngayon ay kapareho ng isa sa iyong tsart",
      "BRANCH_NEUTRAL": "Ang sangay ngayon ay walang partikular na ugnayan sa iyong tsart",
      "BRANCH_WONJIN": "Ang sangay ngayon ay nakaupo sa tahimik na hindi pagkakaunawaan sa iyong tsart",
      "BRANCH_CHUNG": "Ang sangay ngayon ay sumasalungat sa iyong tsart"
    },
    "bookmarkHint": "Hindi namin iniimbak ang iyong petsa ng kapanganakan, kaya kailangan itong ipasok muli sa bawat pagkakataon. **I-bookmark ang link na ito ng resulta** at bubuksan nito ang kapalaran ng araw na iyon araw-araw.",
    "disclaimer": "Ang kapalaran ng araw na ito ay nagiging isang iskor sa relasyon sa pagitan ng day pillar at ng iyong chart. Ito ay isang tala kung paano gugugulin ang araw, hindi isang hula."
  },
  "ads": {
    "label": "Patalastas"
  },
  "analyzing": {
    "title": "Binubuo ang iyong tsart",
    "quotes": [
      "Ang Saju ay hindi isang nakatakdang sagot. Ito ay isang wika para sa pag-unawa sa iyong sarili.",
      "Ang pagkakaalam sa kung ano ang dala mo sa iyong kapanganakan at ang pamumuhay dito ay dalawang magkaibang bagay.",
      "Ang malakas na posisyon ay isang usaping paggamit; ang manipis na isa, isang usaping pagpuno.",
      "Ang parehong walong karakter ay nagiging ibang araw depende sa kung paano mo ito binabasa.",
      "Mas mabuti pa kaysa sa paghihintay ng magandang araw ay ang malaman kung paano gamitin ang mayroon ka.",
      "Ang posisyon na tinatawag ng mga tao na kahinaan ay karaniwang kung saan nagaganap ang pinakamalaking pag-unlad.",
      "May ilang enerhiya na itinutulak ng panahon; may ilan na kailangan mong likhain para sa iyong sarili.",
      "Ang mas mahalaga kaysa sa iskor ay kung paano mo ito binabasa.",
      "Ang kapalaran ng araw na ito ay ang panahon para sa isang araw, hindi ang klima kung saan ka nakatira.",
      "Ang pagkakaalam sa iyong Saju ay nangangahulugang makita ang iyong sarili, hindi ang pagtingin sa hinaharap."
    ],
    "watching": "Pinapanood ang patalastas",
    "remaining": "Bubukas ang resulta sa loob ng {seconds}s"
  },
  "reportDetail": {
    "depthTitle": "Isang mas malapit na pagtingin sa iyong tsart",
    "vitalityTitle": "Ang itinutulak ng panahon",
    "vitalityHint": "Ang mga bar ay nagsasabi kung gaano karami ang isang elemento; ang talahanayang ito ay nagsasabi kung ang buwan ng kapanganakan ay nagtutulak nito pataas. Ang parehong halaga ay may iba't ibang lakas sa wang kaysa sa sa.",
    "vitalities": {
      "WANG": {
        "name": "Wang (旺)",
        "body": "sa pinakamalakas nito"
      },
      "SANG": {
        "name": "Sang (相)",
        "body": "susunod sa lakas"
      },
      "HYU": {
        "name": "Hyu (休)",
        "body": "nagpapahinga pagkatapos ng panahon nito"
      },
      "SU": {
        "name": "Su (囚)",
        "body": "nakatago, mahirap ilipat"
      },
      "SA": {
        "name": "Sa (死)",
        "body": "nasa pinakamahina"
      }
    },
    "rawLabel": "Bago ang panahon",
    "strengthLabel": "Pagkatapos ng panahon",
    "earthSeasonNote": "Ipinanganak sa isang transisyonal na buwan (辰未戌丑), kaya ang lupa ay itinuturing ding wang.",
    "allyRatioLabel": "Ratio ng kaalyado",
    "allyRatioHint": "Ang bahagi na hawak ng mga bituin ng yaman at kasama na pinagsama. Higit sa 45% ay malakas, mas mababa sa 35% ay mahina. Ang numero ay naka-print upang makita mo kung gaano kalapit ang hatol.",
    "stemGodsTitle": "Ano ang bawat haligi sa iyo",
    "stemGodsHint": "Sinusukat mula sa iyong day master, ang bawat natitirang stem ay tumatagal ng isa sa mga pangalan ng sampung diyos. Alin sa kanila ang makapal ay marami ang sinasabi tungkol sa ugali.",
    "pillarColumn": "Haligi",
    "tenGodColumn": "Sampung diyos",
    "meaningColumn": "Ano ang ibig sabihin nito",
    "yearOutlookTitle": "Pangkalahatang pananaw para sa taong ito",
    "domainsTitle": "Apat na larangan ng buhay",
    "factorsTitle": "Saan nagmula ang iskor ngayon",
    "factorsHint": "Ang screen ay nagpapakita ng mga salik; dito, bawat isa ay nakalista kasama ang mga puntos na idinagdag o inalis.",
    "deltaColumn": "Mga puntos",
    "appendixTitle": "Paano nabuo ang tsart na ito",
    "timeCorrectionLabel": "Oras ng kapanganakan",
    "timeCorrectionApplied": "Itinama sa tunay na oras ng araw at binasa bilang {time}.",
    "timeCorrectionNone": "Walang ibinigay na oras ng kapanganakan, kaya't hindi isinama ang haligi ng oras.",
    "timeCorrectionDateShift": "Inilipat ng pagwawasto ang petsa sa {date}, kaya't ang haligi ng araw na iyon ang ginamit.",
    "calendarLabel": "Petsang pinagbatayan ng tsart",
    "solarLabel": "Solar",
    "lunarLabel": "Lunar",
    "lunarUnavailable": "Ang petsang ito ay wala sa talahanayan ng almanac, kaya't walang ipinakitang petsang lunar."
  },
  "report": {
    "title": "Itago ang iyong pagbabasa ng buhay bilang PDF",
    "body": "Gagawin naming PDF ang pagbabasang ito — ang iyong natal chart, ang bigat ng limang elemento, ang lakas ng iyong day master at kung ano ang kailangan nito ngayon, at ang kapalaran para sa araw na ito, lahat sa isang pahina.",
    "buyButton": "Bayaran ang {price} at i-download",
    "preparing": "Hindi pa available",
    "ordering": "Ginagawa ang order mo…",
    "paying": "Pinoproseso ang bayad…",
    "issuing": "Inihahanda ang report mo…",
    "done": "Na-download na. Gamitin ang button sa ibaba para i-download itong muli.",
    "failed": "Hindi natuloy ang bayad o ang download. Pakisubukan muli maya-maya.",
    "retry": "I-download muli",
    "contents": [
      "Ang iyong day master at temperamento — isang buod, mga lakas at mga pag-iingat",
      "Ang iyong natal chart — ang walong karakter ng apat na haligi",
      "Ang bigat ng limang elemento, pinakamakapal at pinakamanipis",
      "Ang lakas ng iyong day master, at ang enerhiyang kailangan nito ngayon",
      "Ang kapalaran para sa araw na ito at ang apat na larangan (pera, pag-ibig, trabaho, kalusugan)"
    ],
    "consentLabel": "Nauunawaan kong digital content ito na ibinibigay agad pagkatapos ng bayad, at na **limitado ang pag-urong dahil lang sa pagbabago ng isip kapag natapos na ang download**.",
    "consentRequired": "Pakikumpirma ang mga tuntunin ng pag-urong bago magbayad.",
    "productInfoTitle": "Impormasyon ng produkto",
    "productInfo": [
      [
        "Tagapagbigay",
        "{brand}"
      ],
      [
        "Anyo",
        "Isang PDF na dokumento (5 A4 na pahina), na mada-download sa screen kaagad pagkatapos ng bayad."
      ],
      [
        "Kailangan",
        "Kahit anong device na makakabukas ng PDF. Walang i-install, walang account."
      ],
      [
        "Panahon ng paggamit",
        "Walang hangganan. Sa iyo ang file na na-download mo."
      ],
      [
        "Muling pag-download",
        "Hanggang limang beses sa iisang order. Wala kaming itinatagong kopya, kaya hindi na ito magagawang muli kapag umalis ka sa screen ng resulta."
      ],
      [
        "Pag-urong",
        "Buong refund bago magsimula ang download. Pagkatapos nitong makumpleto, limitado ang pag-urong dahil sa pagbabago ng isip (Art. 17(2), Korean E-Commerce Act)."
      ],
      [
        "Gastos sa pagsasauli",
        "Wala — digital content, walang ipinapadala."
      ]
    ],
    "refundContact": "Para sa refund o katanungan, makipag-ugnayan sa customer service o sa email sa ibaba. Kung hindi nagawa ang dokumento, o iba ang siningil sa halagang nasa order, ibinabalik namin ang buong bayad.",
    "pdfLanguageNotice": "Ang PDF ay ginagawa sa parehong wika ng screen na ito."
  },
  "premiumReport": {
    "title": "Itago ang iyong premium na pagbabasa bilang PDF",
    "body": "Lahat ng nasa pagbabasa ng buhay, kasama ang **mga numero sa likod nito na hindi kailanman lumalabas sa screen** — ang ratio ng kaalyado na nagpasya kung malakas o mahina, kung gaano kalayo ang itinulak ng buwan ng kapanganakan ang bawat elemento, at ang tunay na pagwawasto ng oras ng araw na inilapat sa iyong oras ng kapanganakan.",
    "buyButton": "Magbayad ng {price} at i-download",
    "preparing": "Hindi pa available",
    "ordering": "Nagawa ang iyong order…",
    "paying": "Pinoproseso ang pagbabayad…",
    "issuing": "Inihahanda ang iyong ulat…",
    "done": "Na-download. Gamitin ang button sa ibaba upang i-download muli ito.",
    "failed": "Nabigo ang pagbabayad o pag-download. Mangyaring subukan muli sa isang sandali.",
    "retry": "I-download muli",
    "contents": [
      "Ang iyong day master at temperamento — isang buod, mga lakas at mga pag-iingat",
      "Ang iyong natal chart — ang walong karakter ng apat na haligi",
      "Ang limang elemento, ang lakas ng iyong day master at kung ano ang kailangan nito",
      "Ang kapalaran ngayon at ang apat na larangan (pera, pag-ibig, trabaho, kalusugan)",
      "Ano ang bawat haligi para sa iyo — ang ten gods na nabasa mula sa iyong tsart",
      "Pagsusuri ng seasonal at ratio ng kaalyado — ang mga numero sa likod ng hatol",
      "Ang pananaw para sa taong ito, mga salik sa pag-score ngayon, at ang pagwawasto ng oras"
    ],
    "consentLabel": "Nauunawaan ko na ito ay digital na nilalaman na ibinibigay agad sa pagbabayad, at na **ang pag-atras para sa simpleng pagbabago ng isip ay limitado kapag natapos na ang pag-download**.",
    "consentRequired": "Mangyaring kumpirmahin ang mga tuntunin ng pag-atras bago magbayad.",
    "productInfoTitle": "Impormasyon tungkol sa produkto",
    "productInfo": [
      [
        "Tagapagbigay",
        "{brand}"
      ],
      [
        "Format",
        "Isang PDF na dokumento (7 A4 na pahina), na mada-download sa screen agad pagkatapos ng pagbabayad."
      ],
      [
        "Mga Kinakailangan",
        "Anumang device na makakapagbukas ng PDF. Walang kinakailangang installation o account."
      ],
      [
        "Termino ng paggamit",
        "Walang limitasyon. Ikaw ang mag-iingat ng file na iyong ida-download."
      ],
      [
        "Muling pag-download",
        "Hanggang limang beses sa parehong order. Wala kaming kopya, kaya hindi na ito maibabalik kapag umalis ka sa resulta ng screen."
      ],
      [
        "Pag-withdraw",
        "Buong refund bago magsimula ang pag-download. Matapos itong makumpleto, ang pag-withdraw para sa pagbabago ng isip ay limitado (Art. 17(2), Batas sa E-Commerce ng Korea)."
      ],
      [
        "Mga gastos sa pagbabalik",
        "Wala — digital na nilalaman, walang ipinapadala."
      ]
    ],
    "refundContact": "Para sa mga refund o katanungan, makipag-ugnayan sa customer center o sa email sa ibaba. Kung ang dokumento ay hindi maiproduce, o ang halagang sinisingil ay naiiba mula sa order, ibabalik namin ang buong halaga.",
    "pdfLanguageNotice": "Ang PDF ay ginawa sa parehong wika ng screen na ito."
  },
  "fallbackReport": {
    "summary": "Isang {dayMaster} na araw na isinilang sa enerhiya ng {season}. Sa buong tsart, ang {strongest} ay pinakamakapal at ang {scarcest} ay pinakamahinang. Lahat ng nasa ibaba ay nagmumula sa walong karakter na iyon — bawat numero at bawat haligi dito ay kinakalkula, hindi pinili.",
    "personality": "Ang iyong araw na master ay {dayMaster} — enerhiya ng {element} — at ang tsart na ito ay nagbabasa bilang {strengthName}. Aling panig ang mas makapal, kung ano ang sumusuporta sa araw na master o kung ano ang kumukuha mula dito, ay siyang humuhubog sa butil, at sa pang-araw-araw na buhay ay lumalabas ito sa ganitong paraan.",
    "cautions": {
      "STRONG": [
        "Nagtutulak ka ng sapat na lakas na madalas mong napapansin ang pagkiling lamang pagkatapos itong mangyari.",
        "Kahit saan may tulong, nagtatapos kang humahawak nito nang mag-isa, na nagpapalaki sa trabaho.",
        "Ang mga bagay ay nagiging maayos kapag nag-iwan ka ng puwang para sa anumang kumukuha ng labis."
      ],
      "BALANCED": [
        "Walang nag-uudyok sa iyo sa alinmang panig, kaya ang isang ipinagpalibang desisyon ay nananatiling ipinagpaliban.",
        "Mabuti ang iyong pag-aangkop sa sitwasyon, na maaaring magdulot ng pagkalabo kung nasaan ang iyong sariling linya.",
        "Ang pag-ikot patungo sa anumang kasalukuyang pinakamahinang nagbibigay sa iyo ng direksyon na dapat hawakan."
      ],
      "WEAK": [
        "Ang paghawak nang mag-isa ay nagpapagod sa iyo nang mas maaga kaysa sa inaasahan mo.",
        "Walang anuman sa likod mo, ang mga desisyon ay dumudulas at ang pagkakataon ay lumilipas.",
        "Ang pagpapanatili ng mga sumusuportang tao sa malapit ay hindi kahinaan sa tsart na ito — ito ay ang pamamaraan."
      ]
    },
    "scarcityCaution": "Ang pinakamahinang elemento sa ngayon ay {scarcest}. Anuman ang pinamamahalaan ng elementong iyon ay kung saan ka pinakamabagal kumilos.",
    "elementBalance": "Sa lakas, ang {strongest} ang nangunguna sa {strongestPct}% at ang {scarcest} ay nahuhuli sa {scarcestPct}%. Ang buwan ng iyong kapanganakan ay nasa {season}, na nagtutulak sa elementong iyon pataas muli — ang parehong dami ay may iba't ibang puwersa depende sa kung sinusuportahan ito ng panahon. Ang kailangan mo ngayon ay {favorable}, at ang mga bagay ay nagiging madali kung ang elementong iyon ay napupuno.",
    "todayHeadline": "Ngayon ay {grade}",
    "todayMessage": "Ngayon ay may iskor na {score}, na na-grade na {gradeName}. {gradeBody} Ang day pillar ay {pillar}, at ang pinakamalaking salik sa iskor na iyon ay “{topFactor}”.",
    "todayAdvice": {
      "HIGH": "Isang magandang araw upang kunin ang mensahe o ang pag-aayos na iyong ipinagpaliban — bagaman mas mabuti na huwag subukang tapusin ang lahat ngayon.",
      "MID": "Gawin mo ang karaniwan mong ginagawa at makakakuha ka ng karaniwan mong nakukuha. Sa halip na magsimula ng bago, ilipat ang isang bagay na nasa kamay na isang hakbang pasulong.",
      "LOW": "Ang ilan sa ngayon ay laban sa tsart. Mas mabuting gugulin ang oras sa pagtatapos at pag-check kaysa sa pagsisimula."
    },
    "luckyNote": "Ang masuwerteng elemento ng araw na ito ay {element}. Ang hanay ng {colors}, ang bahagi ng {direction}, at ang mga oras sa paligid ng {time} ay kung saan ang enerhiyang iyon ay pinakamabigat.",
    "domains": {
      "wealth": "Mula sa natal chart, ang yaman ay umabot sa {score}. Sinusukat nito ang kinikita kasama ang lakas upang dalhin ito.",
      "love": "Mula sa natal chart, ang pagmamahal ay umabot sa {score}. Sinusukat nito ang bituin ng asawa kasama ang hugis ng upuang kinaroroonan nito.",
      "career": "Mula sa natal chart, ang trabaho ay umabot sa {score}. Sinusukat nito ang mga responsibilidad na tinatanggap mo kasama ang mga ibinibigay mo.",
      "health": "Mula sa natal chart, ang kalusugan ay umabot sa {score}. Sinusukat nito ang balanse na dala mo mula sa kapanganakan kasama ang mga salungatan sa loob nito."
    },
    "yearOutlook": "Ang pillar ng taong ito ay {pillar}, na may dalang {element}. {relation} Ang pagbasa na ito ay tumitingin lamang sa kung paano nakikita ng pillar ng taon ang kung ano ang kailangan mo ngayon; hindi nito hinahati ang taon buwan-buwan.",
    "yearRelations": {
      "YONGSIN": "Dumarating nang direkta ang elemento na kailangan mo sa taong ito. Tamang panahon upang ilabas ang mga bagay na iyong itinabi.",
      "GENERATES": "Pinapakain ng taong ito ang elemento na kailangan mo, kaya ang kasalukuyan ay nagiging mas banayad — hindi agad, kundi unti-unti.",
      "GISIN": "Minsan pang itinutulak ng taong ito ang direksyong iyong pinapuntahan. Mas mabuting tapusin ang mga bagay na nasa kamay kaysa simulan ang bago.",
      "CONTROLS": "May isang bagay sa taong ito na humihimok sa elemento na kailangan mo, kaya ang mga desisyon ay dumarating nang mas mabagal. Ang pagtatakda ng sariling mga deadline ay nakakatulong.",
      "NEUTRAL": "Sa taong ito, hindi ito sumasalungat o nagpapakain sa iyong kailangan. Ang pagpapanatili ng iyong kasalukuyang posisyon ay mas mainam."
    },
    "disclaimer": "Tradisyunal na sanggunian ng myeongri, hindi isang siyentipikong prediksyon o pahayag tungkol sa kung ano ang dapat mangyari.",
    "tenGodDepth": {
      "BIGYEON": {
        "thick": "Ang Companion ay makapal. Ikaw ay bumubuo gamit ang iyong sariling mga kamay sa halip na manghiram, na nagpapalakas sa iyo na dalhin ang isang gawain hanggang sa katapusan. Ngunit ang pagtanggap ng tulong ay isang kasanayan din, at ang pagtrato dito bilang isang kahinaan ay nag-iiwan sa iyo na nag-iisa sa mga bagay — at nagkakaroon ng banggaan, sa mga bahagi, sa sinumang nakatayo sa tabi mo. Kung saan ang trabaho ay ibinabahagi, ang pag-aalok ng iyong kamay muna ay lumalabas na mas mabilis na ruta.",
        "absent": "Ang Companion ay wala. Ang paggalaw kasama ang iba ay mas angkop para sa iyo kaysa sa pagpapanatili ng iyong sariling lupa. Ikaw ay nag-aalinlangan nang matagal kung ang desisyon ay sa iyo lamang, at bumibilis kapag may kasama ka. Kapag ang isang posisyon ay sa iyo upang hawakan, mahalagang sanayin ang pagtulak."
      },
      "GEOPJAE": {
        "thick": "Ang Rob Wealth ay makapal. Ikaw ay unang kumikilos kung saan ang iba ay nag-aalinlangan. Ang puwersang iyon ay hindi madaling magbago patungo sa pagpapanatili, kaya ang iyong kinikita ay hindi nagtatagal sa kamay. Ang pagpapasya nang maaga kung saan pupunta ang pera ay hindi pagtitipid sa tsart na ito — ito ay isang pamamaraan.",
        "absent": "Ang Rob Wealth ay wala. Ikaw ay bihirang pumilit ng isang bagay at umiwas sa mga kumpetisyon. Kaunti ang iyong nawawala, ngunit ikaw ay isang hakbang na huli kapag may kailangang itulak nang mabuti. Kung saan ang mga pusta ay totoo, ang pagtatakda ng sariling deadline ay nakakatulong."
      },
      "SIKSIN": {
        "thick": "Ang Eating God ay makapal. Ang nasa loob ay madaling lumabas, kaya ang paggawa, paglaki at pagpapakain ay komportableng lupa. Magaling ka sa mga gawain na ginagawa nang dahan-dahan at mahaba, at ang mga resulta ay dumarating nang huli ngunit tuloy-tuloy. Ngunit kapag ang ginhawa ay humahaba, ikaw ay nananatili sa halip na lumawak.",
        "absent": "Ang Eating God ay wala. Ang daluyan mula sa loob patungo sa labas ay manipis: ang pag-iisip ay naroon, ngunit ang pagsasabi nito ay huli. Ang paghihintay hanggang ang lahat ay handa ay nagpapaliban sa pagsisimula. Ang paglalabas ng isang bagay na hindi pa tapos ay hindi isang pagkatalo sa tsart na ito."
      },
      "SANGGWAN": {
        "thick": "Ang Hurting Officer ay makapal. Nakikita mo ang mga bagay na hindi tama sa isang nakatakdang balangkas bago ang sinuman, at mayroon kang mga salita upang pangalanan ito. Kumikinang ka kung saan ginagawa ang mga bagay at sumasalungat ka kung saan itinatago ang mga ito. Mahalaga ang tamang pagsasabi dito gaya ng pagkakita nito.",
        "absent": "Walang Hurting Officer. Naghahanap ka ng paraan sa loob ng isang balangkas sa halip na ugain ito. Bihira kang makipagbanggaan sa mga tao, ngunit pinapayagan mong dumaan ang mga bagay kung saan dapat itong magbago, at nagiging sanhi ito ng pagkabigo. Mas mabuti nang huwag ipagpaliban ang salitang kailangang sabihin."
      },
      "PYEONJAE": {
        "thick": "Ang Indirect Wealth ay makapal. Nasa maraming lugar ang iyong kamay at malawak ang iyong pagkakataon, kaya nagbubukas ang mga bagay sa mga hindi inaasahang sulok. Gayunpaman, ang dapat na ipangalagaan ay dapat ding alagaan, at hindi ka gaanong interesado sa pangangalaga — kaya patuloy kang nabibigo na tipunin ang iyong binuksan. Ang pagsasara ng isa bago buksan ang susunod ay ang kaayusan na kailangan ng chart na ito.",
        "absent": "Walang Indirect Wealth. Pinipili mong kunin ang tiyak na bagay sa pamilyar na lupa sa halip na lumawak. Mas kaunti ang nakakagambala sa iyo, at madalas mong nakikita ang mas malalaking pagkakataon na lumilipas. Ang pagpapalawak ng iyong abot ng isang daliri sa isang pagkakataon ay nakakatulong."
      },
      "JEONGJAE": {
        "thick": "Ang Direct Wealth ay makapal. Binibilang mo ang pumapasok at lumalabas, at nagtatayo ka — kaya ang lupa sa ilalim mo ay tumitibay sa paglipas ng panahon. Ang pag-abot lamang sa tiyak na bagay ay nagpapabagal sa iyo sa pagkakataon, at ang labis na pagtitipid ay nagpapabigat sa iyong kamay kung saan dapat itong buksan. Ang pagpapasya nang maaga kung para saan ang pera ay nakakatulong.",
        "absent": "Walang Direct Wealth. Ang panig ng patuloy na pag-iipon ay manipis, kaya ang pamamahala sa mga dumarating ay patuloy na naipagpapaliban. Ang pagkita at pag-iingat ay magkaibang kasanayan; ang chart na ito ay kailangang matutunan ang pangalawang isa nang hiwalay. Ang mga patakaran na naglilipat ng pera nang hindi mo pinipili sa bawat pagkakataon ay bagay na bagay sa iyo."
      },
      "PYEONGWAN": {
        "thick": "Ang Indirect Officer ay makapal. Ang presyon ay naglalabas ng iyong lakas, at ikaw ay may dalang responsibilidad na mabigat para sa iba. Kapag ang tensyon ay hindi nawawala, gayunpaman, ito ay tumitigas sa isang pakiramdam ng pangangaso at ang pahinga ay hindi na parang pahinga. Ang pagtatakda ng oras upang huminto ay hindi katamaran sa chart na ito.",
        "absent": "Walang Indirect Officer. Kaunti ang pumipigil sa iyo, na magaan sa isip, ngunit ang kapangyarihang panatilihin ang iyong sarili na tuwid sa isang krisis ay manipis. Mas maganda ang iyong takbo kapag may itinakdang deadline o pangako mula sa labas."
      },
      "JEONGGWAN": {
        "thick": "Ang Direct Officer ay makapal. Ang iyong posisyon at ang mga linya na iyong pinapanatili ay malinaw, at ang pagpapanatili sa mga ito ang pinagmumulan ng iyong katatagan — nagtatayo ka ng tiwala sa loob ng mga sistema. Kung saan ang mga patakaran ay nanginginig, mabagal kang humusga, at kung saan ang board ay sa iyo upang itakda, nararamdaman mong nakakulong ka.",
        "absent": "Walang Direct Officer. Ang isang paraan na iyong ginawa ay mas angkop sa iyo kaysa sa isang lugar na itinakda mula sa labas. Iyan ay kalayaan, ngunit ang pamantayan ay madaling nanginginig; ang pagsusulat ng iyong sariling mga patakaran na parang ito ay patakaran ay nakakatulong."
      },
      "PYEONIN": {
        "thick": "Ang Indirect Resource ay makapal. Pumapasok ka sa daan na iniiwasan ng iba at bumubuo ng iyong sariling lalim. Malakas ang pagkatuto at ang pagsukat, ngunit ang pag-iisip ay nauuna sa kamay at maaari kang mapagod bago ka magsimula. Ang paggalaw sa kalahating handa ay bagay na bagay sa chart na ito.",
        "absent": "Walang Indirect Resource. Natututo ka sa pamamagitan ng pagbangga sa mga bagay sa halip na sa pamamagitan ng pag-ukit. Hindi ka mabagal matuto, ngunit ang pag-aaral na hawak nang nag-iisa sa mahabang panahon ay hindi angkop sa iyo. Ang pagtatanong sa mga tao at pag-aaral sa sahig ay mas mabilis."
      },
      "JEONGIN": {
        "thick": "Ang Direct Resource ay makapal. Ang sumusuportang lugar ay sapat, kaya ang pagkatuto at isang lugar na mapagkakatiwalaan ay hindi nauubos. Ang katatagan na ito ay nagpapabagal sa pag-usad, at ang paghahanda ay nagiging dahilan ng pagkaantala ng simula. Ang pagkakaroon ng isang lugar kung saan ang natanggap mo ay ibinabalik ay sulit.",
        "absent": "Walang Direct Resource. Nagtayo ka ng sarili mong pundasyon, kaya ang pagtayo nang mag-isa ay maaga nang lumago. Ang paghingi ng tulong ay hindi pamilyar, at nag-iisa ka kahit na hindi mo kailangang gawin. Sa chart na ito, ang paghingi ay may malaking halaga."
      }
    },
    "natalFactors": {
      "WEALTH_STARS": "Gaano karaming kayamanan (財星) ang dala ng chart — ang kapal ng iyong hinahawakan at kinokolekta.",
      "WEALTH_STRONG_BODY": "Ang day master ay puno, kaya may lakas upang dalhin ang kayamanan.",
      "WEALTH_WEAK_BODY": "Ang day master ay manipis, kaya mahirap dalhin ang kayamanan kahit na ito ay naroroon.",
      "WEALTH_YONGSIN": "Ang kailangan mo ngayon ay ang parehong elemento ng mga bituin ng kayamanan, kaya mas madali ang pagdating ng lupa.",
      "LOVE_SPOUSE_STAR": "Gaano karaming asawa star ang dala ng chart — direktang kayamanan para sa mga lalaki, direktang opisyal para sa mga babae.",
      "LOVE_SPOUSE_PALACE": "Ang asawa star ay nakaupo sa loob ng iyong day branch, ang asawa palace, kaya ang upuan ay puno.",
      "LOVE_PALACE_CHUNG": "Ang asawa palace ay sumasalungat sa ibang branch, kaya ang upuan na iyon ay hindi matatag.",
      "LOVE_GENDER_UNKNOWN": "Walang gender na naipasok, kaya hindi binilang ang asawa star. Ang halaga ay nahahati sa pagitan ng mga bituin ng kayamanan at opisyal ayon sa gender, at hindi kami pumipili ng isa nang basta-basta.",
      "CAREER_OFFICER": "Ang mga opisyal na bituin (正官·偏官) sa chart — ang kapal ng iyong tinatanggap at pinapanatili.",
      "CAREER_OUTPUT": "Ang mga output stars (食神·傷官) sa chart — ang kapal ng iyong inilalabas at ipinapahayag.",
      "CAREER_STRONG_BODY": "Ang araw na tagapamahala ay puno, kaya ginagamit nito ang mga bituin ng opisyal sa halip na mapresyohan ng mga ito.",
      "HEALTH_BALANCE": "Gaano ka pantay ang limang elemento — mas lumihis ito sa isang panig, mas maraming strain ang bumabagsak sa kung ano ang pinamamahalaan ng elementong iyon.",
      "HEALTH_CHUNG": "Ilang pares ng sanga ang nagbabanggaan sa loob ng tsart.",
      "HEALTH_EXTREME_BODY": "Ang araw na tagapamahala ay nakatuon sa isang panig, na isang strain sa sarili nito. Ang balanseng araw na tagapamahala ay walang nawawala dito."
    },
    "yongsinDepth": {
      "STRONG": "Ang mga elementong sumusuporta sa iyong araw na tagapamahala ay puno. Nagbibigay ito sa iyo ng sariling lakas ngunit madaling lumihis sa isang panig, kaya ang kailangan mo ngayon ay hindi higit pang suporta — ito ay **isang bagay na mag-aalis ng labis**. {favorable} ang gumagawa nito. Kung saan umaabot ang elementong iyon — naglalabas, tumatanggap, nag-iipon — ay kung saan ka nagiging komportable.",
      "BALANCED": "Ang sumusuporta sa iyong araw na tagapamahala at ang kumukuha mula rito ay halos pantay. Napakalapit upang tawaging alinman, kaya dito natin binabasa ang **anumang pinakamahinang** kailangan: {favorable}. Ang isang tsart na hindi nakatuon ay mahusay na umaangkop ngunit malabo ang sariling linya, kaya ang pagtuon sa manipis na lugar ay nagbibigay sa iyo ng direksyon na dapat hawakan.",
      "WEAK": "Ang mga elementong sumusuporta sa iyong araw na tagapamahala ay manipis. Mahusay kang humiram ng lakas mula sa paligid mo ngunit napapagod sa paghawak nang mag-isa, kaya ang kailangan mo ngayon ay **isang bagay na sumusuporta at pumuno sa iyo**. {favorable} ang gumagawa nito. Ang pagpapanatili ng mga sumusuportang bagay na malapit ay hindi isang kahinaan sa tsart na ito — ito ay isang pamamaraan."
    }
  },
  "footer": {
    "privacy": "Privacy",
    "terms": "Mga Tuntunin",
    "refund": "Refund",
    "pricing": "Presyo",
    "legalEntity": "Kompanya",
    "representative": "Kinatawan",
    "businessNumber": "Rehistro",
    "mailOrderNumber": "Online commerce",
    "address": "Address",
    "customerCenter": "Serbisyo sa kostumer",
    "email": "Email",
    "privacyOfficer": "Privacy officer",
    "hostingProvider": "Hosting",
    "providedBy": "Provided by",
    "effective": "Bisa mula",
    "backHome": "Bumalik sa simula"
  },
  "animals": {
    "rat": "Daga",
    "ox": "Baka",
    "tiger": "Tigre",
    "rabbit": "Kuneho",
    "dragon": "Dragon",
    "snake": "Ahas",
    "horse": "Kabayo",
    "goat": "Kambing",
    "monkey": "Unggoy",
    "rooster": "Tandang",
    "dog": "Aso",
    "pig": "Baboy"
  },
  "elements": {
    "WOOD": "Kahoy",
    "FIRE": "Apoy",
    "EARTH": "Lupa",
    "METAL": "Metal",
    "WATER": "Tubig"
  }
};
