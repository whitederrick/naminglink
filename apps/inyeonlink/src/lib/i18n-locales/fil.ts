// 인연링크(사주 궁합·인연의 결) 화면 문구의 필리핀어(fil, Tagalog) 사전.
// `src/lib/i18n.ts`의 `en` 사전을 구조와 번역의 기준으로 삼고, 영어가 모호하거나 사주 용어의
// 뉘앙스가 필요한 자리는 같은 파일의 `ko` 원문을 대조해 맞췄다. 언어 선택기 3개 키와 footer의
// 13개 키(customerCenter·effective·backHome 제외)는 naminglink의 fil 문구를 그대로 가져왔다.

import type { Dictionary } from "@/lib/i18n";

export const fil: Dictionary = {
  brand: "InyeonLink",
  tagline: "Pagkakatugma ayon sa Saju at sa mga sagisag ng zodiac",
  currentLanguage: "Kasalukuyang wika",
  moreLanguages: "Higit pa",
  closeLanguages: "Isara",
  landing: {
    title: "Tingnan kung paano magkabagay\nang dalawang tao",
    subtitle:
      "Petsa lang ng kapanganakan ang kailangan.\nPinagsasama namin ang pagkakatugma sa Saju (Apat na Haligi) at ang pagkakatugma sa zodiac, at ipinapakita ito bilang match rate.",
    cta: "Tingnan ang pagkakatugma sa Saju",
    howTitle: "Paano ito kinakalkula",
    steps: [
      "Ilagay ang petsa ng kapanganakan ng dalawa. Opsyonal ang oras ng kapanganakan.",
      "Ang pagkakatugma sa Saju ay galing sa elemento ng day master, sa balanse ng mga elemento, at sa sanga ng araw; ang pagkakatugma sa zodiac ay galing sa sanga ng taon.",
      "Pinagsasama ang dalawang iskor tungo sa isang timbang na match rate.",
    ],
    privacyTitle: "Walang inilalagay na iniimbak",
    privacyBody:
      "Ginagamit lang ang mga petsa ng kapanganakan habang kinakalkula ang resulta at hindi kailanman itinatala. Walang kailangang account. Walang ipinapadala sa server mula sa nilalaman ng link ng resulta.",
    disclaimer:
      "Ito ay tradisyonal na pagbasa ng Saju na inaalok bilang sanggunian. Hindi ito siyentipikong hula ni hatol sa anumang relasyon.",
  },
  form: {
    title: "Petsa ng kapanganakan ng dalawa",
    description:
      "Mas matalas ang pagbasa kung alam ang oras ng kapanganakan, pero hindi ito kinakailangan.",
    personA: "Unang tao",
    personB: "Pangalawang tao",
    nickname: "Itatawag sa kanya",
    nicknamePlaceholder: "hal. Ako",
    nicknameHint: "Lumalabas lang sa screen ng resulta. Hindi ito ginagamit sa pagkalkula.",
    gender: "Kasarian",
    male: "Lalaki",
    female: "Babae",
    genderUnspecified: "Ayaw sabihin",
    genderHint:
      "Iba ang pagbasa ng tradisyonal na Saju sa puwesto ng asawa depende sa kasarian. Kung lalaktawan mo ito, hindi isasama ang bahaging iyon sa pagkalkula.",
    birthplace: "Lugar ng kapanganakan",
    birthplaceHint:
      "Kinakalkula ang haligi ng oras mula sa tunay na oras ng araw sa lugar ng iyong kapanganakan, kasama ang daylight saving at ang mga lumang pagbabago sa time zone. Kung wala sa listahan ang lugar mo, piliin ang pinakamalapit na lungsod — habang mas malapit, mas tumpak ang haligi ng oras.",
    calendar: "Kalendaryo",
    solar: "Solar",
    lunar: "Lunar",
    leapMonth: "Buwang leap",
    birthDate: "Petsa ng kapanganakan",
    year: "Taon",
    month: "Buwan",
    day: "Araw",
    birthTime: "Oras ng kapanganakan",
    unknownTime: "Hindi ko alam ang oras",
    hour: "Oras",
    minute: "Minuto",
    submit: "Manood ng patalastas at tingnan ang resulta ng pagkakatugma",
    submitNoAd: "Tingnan ang resulta ng pagkakatugma",
    submitting: "Kinakalkula…",
    errorInvalidDate:
      "Pakisuri ang petsa ng kapanganakan. Kung lunar ang petsa, tingnan din kung nasa buwang leap ito.",
    errorGeneric: "Hindi natuloy ang pagkalkula. Pakisubukan muli maya-maya.",
  },
  reading: {
    chartTitle: "Ang Saju ninyong dalawa",
    chartHint:
      "Isinusulat ng Saju ang taon, buwan, araw, at oras ng kapanganakan bilang tig-dalawang titik. Ang mga iskor sa ibaba ay galing lahat sa walong titik na ito.",
    pillarYear: "Taon",
    pillarMonth: "Buwan",
    pillarDay: "Araw",
    pillarHour: "Oras",
    pillarHourUnknown: "Walang oras ng kapanganakan",
    dayMasterLabel: "Day master",
    animalLabel: "Zodiac",
    seasonLabel: "Panahon ng kapanganakan",
    elementsTitle: "Lakas ng mga elemento",
    strongest: "Pinakamalakas",
    scarcest: "Pinakakaunti",
    strengthTitle: "Ang lakas ng pagsasamang ito",
    cautionTitle: "Dapat bantayan",
    bodyStrengthTitle: "Lakas ng day master",
    favorableLabel: "Kailangan mo ngayon",
  },
  bodyStrength: {
    STRONG: {
      name: "Malakas na day master",
      body: "Sagana ang mga elementong sumusuporta sa iyong day master. Nagbibigay iyon ng sariling sigla, pero madali ring kumiling sa isang panig — mas napapanatag ka kapag may kumukuha ng sobra.",
    },
    BALANCED: {
      name: "Balanseng day master",
      body: "Halos pantay ang sumusuporta sa iyong day master at ang kumukuha rito. Mahirap pumanig sa alinman, kaya rito ay itinuturing naming kailangan mo ang pinakamanipis na elemento.",
    },
    WEAK: {
      name: "Mahinang day master",
      body: "Manipis ang mga elementong sumusuporta sa iyong day master. Magaling kang humugot ng lakas sa paligid, pero napapagod ka kapag matagal na nag-iisa — lumalakas ka kapag may sumusuporta sa iyo.",
    },
  },
  relation: {
    title: "Ang pagitan ninyong dalawa",
    hint: "Sampung termino ang gamit ng Saju para pangalanan ang paraan ng pagtingin ng dalawang day master sa isa't isa. May direksyon ang pagbasa — puwedeng magkaiba ang tingin mo sa kanya at ang tingin niya sa iyo.",
    directionLabel: "{from} → {to}",
    shapes: {
      ALIKE: {
        name: "Magkahawig",
        body: "Iisang enerhiya ang dala ng inyong day master. Maraming hindi na kailangang sabihin at nagtatagpo ang panlasa ninyo. Ang kaso, pareho kayong malakas at mahina sa iisang bahagi, kaya sa mahirap na sitwasyon ay pareho kayong natitigilan sa iisang punto.",
      },
      NURTURING: {
        name: "Isang nagpapalago, isang namumukadkad",
        body: "Isang direksyon lang ang daloy ng enerhiya. Panatag ang tumatanggap at dumarami ang gusto niyang gawin; nasisiyahan naman ang nagbibigay sa pag-unlad ng kabila. Dahil iisa ang direksyon ng daloy, kailangang may bumabalik o mauubusan ang nagbibigay.",
      },
      TENSION: {
        name: "Isang humahawak sa isa",
        body: "Nasa puwesto ang isa sa inyo na pumipigil sa kabila. Ang tensyong iyon ang pumipigil sa inyong maluwagan, at kadalasang nagbubunga kapag magkatulong kayo. Madaling maramdaman ng pinipigilan na palagi siyang sinusuri, kaya dapat maunang dumating ang pagkilala kaysa sa pagtutuwid.",
      },
    },
    leadNote: {
      NURTURING: "Dito, **{lead}** ang nagbibigay ng enerhiya.",
      TENSION: "Dito, **{lead}** ang nagtatakda ng takbo.",
    },
  },
  tenGods: {
    BIGYEON: {
      name: "Kasama (比肩)",
      body: "Taong nakatabi mo, balikat sa balikat. Madaling kausap at madaling samahan — pero mahirap magbigay kapag iisa ang gusto ninyong dalawa.",
    },
    GEOPJAE: {
      name: "Karibal (劫財)",
      body: "Magkahawig, pero magkaiba ang paraan. Malakas kayo kapag iisa ang tinutulak; nagiging maselan naman ang kuwenta kapag may hahatiin.",
    },
    SIKSIN: {
      name: "Pagpapahayag (食神)",
      body: "Taong naglalabas ng nasa loob mo. Mas nagsasalita ka at mas dumarami ang gusto mong gawin kapag kasama siya. Isa ito sa pinakakomportableng puwesto.",
    },
    SANGGWAN: {
      name: "Manggugulo (傷官)",
      body: "Taong yumayanig sa balangkas mo. Nakakawili at nakakapukaw — pero kapag tumalim na ang mga salita ninyo, matagal gumaling ang sugat.",
    },
    PYEONJAE: {
      name: "Biglaang yaman (偏財)",
      body: "Taong gusto mong alagaan. Maraming biglaang saya, bagaman puwedeng manatiling magaan ang bigat ng relasyon.",
    },
    JEONGJAE: {
      name: "Matatag na yaman (正財)",
      body: "Sa tradisyon, ito ang puwesto ng asawa para sa lalaki. Tuloy-tuloy ang pag-aaruga, at sa pang-araw-araw na buhay tumitino ang relasyon, hindi sa mga rurok.",
    },
    PYEONGWAN: {
      name: "Humahamon (偏官)",
      body: "Taong laging nagpapaalerto sa iyo. Malakas ang hatak at mahirap alisan ng tingin, pero kapag matagal na ang lapit, puwedeng maramdaman itong presyon.",
    },
    JEONGGWAN: {
      name: "Awtoridad (正官)",
      body: "Sa tradisyon, ito ang puwesto ng asawa para sa babae. Itinutuwid ka niya, at nagdadala siya ng kaayusan at katatagan sa relasyon.",
    },
    PYEONIN: {
      name: "Di-karaniwang suporta (偏印)",
      body: "Taong tumutulong sa iyo sa di-pangkaraniwang paraan. May mga sandali ng tunay na lalim, bagaman kailangan ng panahon para maintindihan ang paraan ng isa't isa.",
    },
    JEONGIN: {
      name: "Pag-aaruga (正印)",
      body: "Taong yumayakap at nag-aalaga sa iyo. Gusto mong sumandal, at napapanatag ang isip mo. Pero kung iisang panig lang ang sumasandal, kumikiling ang relasyon.",
    },
  },
  dayMasters: {
    甲: { name: "Yang na Kahoy (甲)", trait: "Matayog na punong tuwid ang tubo. Kapag naitakda na ang direksyon, hindi na ito nag-aalangan, at mas pipiliing magtiis kaysa yumuko." },
    乙: { name: "Yin na Kahoy (乙)", trait: "Baging — malambot na damo. Yumuyuko ito ayon sa sitwasyon para makasulong, at hindi napipigtas." },
    丙: { name: "Yang na Apoy (丙)", trait: "Araw sa tanghaling tapat. Hayag ang damdamin, lumiliwanag ang paligid, at natural lang ang pag-una sa harapan." },
    丁: { name: "Yin na Apoy (丁)", trait: "Liwanag ng kandila. Tahimik itong nagniningas at matagal, at unang nagpapainit sa mga pinakamalapit." },
    戊: { name: "Yang na Lupa (戊)", trait: "Malawak na lupa at bundok. Mahirap yanigin at madaling sandalan, bagaman mabagal magbago ng pasyang naitakda na." },
    己: { name: "Yin na Lupa (己)", trait: "Lupa ng bukid. Tinatanggap nito ang anumang dumating at pinalalago, mas nag-aaruga kaysa nagpapakita." },
    庚: { name: "Yang na Metal (庚)", trait: "Bakal na hindi pa hinuhubog. Matalas magpasya at malinaw ang hangganan, kaunti ang pasensya sa bagay na nakabitin." },
    辛: { name: "Yin na Metal (辛)", trait: "Hasang hiyas. Pinong panlasa at mataas na pamantayan; mahirap palampasin ang burarang gawa." },
    壬: { name: "Yang na Tubig (壬)", trait: "Ilog at dagat. Malawak ang pananaw, at may mata kung saan patungo ang agos." },
    癸: { name: "Yin na Tubig (癸)", trait: "Hamog at ulan. Tahimik itong tumatagos, at nababasa ang himig bago pa ang salita." },
  },
  dayMasterSigns: {
    甲: [
      "Sinasabi ang iniisip kahit sa unang pagkikita.",
      "Bihirang baguhin ang planong o pangakong naitakda na.",
      "Diretsong tumatanggi, kaya minsan tunog matigas.",
    ],
    乙: [
      "Umiiwas sa harapang banggaan at ibang daan ang tinatahak.",
      "Mukhang malambot, pero napupunta pa rin sa balak niyang puntahan.",
      "Sinusuri muna ang himig ng grupo bago sumali.",
    ],
    丙: [
      "Siya ang unang kumikibo sa bagong kakilala.",
      "Nakikita sa mukha ang gusto at ayaw niya.",
      "Napupunta sa gitna ng pagtitipon nang hindi sinasadya.",
    ],
    丁: [
      "Tahimik sa simula, maalaga kapag naging malapit na.",
      "Mas gusto ang mahabang usapan kasama ang isa o dalawa kaysa sa maraming tao.",
      "Naaalala ang pabiglang nasabi mo at binabanggit ito mamaya.",
    ],
    戊: [
      "Kaunti ang salita; bihirang tumaas ang boses kahit nagmamadali.",
      "Siya ang nagsasaayos sa huli habang ipinagpapaliban ng iba ang pasya.",
      "Kapag nagsabi ng hindi, matagal itong mananatiling hindi.",
    ],
    己: [
      "Mas matagal makinig kaysa magsalita.",
      "Hirap tumanggi, kaya nagkukumpol sa kanya ang trabaho.",
      "Ang tahimik niyang inasikaso ay saka lang nalalaman.",
    ],
    庚: [
      "Mabilis magpasya at doon mismo sinasabi.",
      "Hindi nagpapalambot ng salita, kaya minsan tunog malamig.",
      "Halatang naiinip kapag humahaba ang usapin.",
    ],
    辛: [
      "Malinaw ang pamantayan sa damit at sa mga piniling gamit.",
      "Hindi mapalampas ang kalahating gawa nang hindi ito binabanggit.",
      "Kuripot sa papuri, pero tiyak kapag kumilala na.",
    ],
    壬: [
      "Madaling makihalubilo sa lahat ng uri ng tao.",
      "Nauuna niyang pag-usapan ang malayong bukas kaysa sa nasa harapan.",
      "Nayayamot kapag matagal na nakatali sa iisang lugar.",
    ],
    癸: [
      "Kaunti ang salita pero tumpak ang basa niya sa sitwasyon.",
      "Siya ang unang nakakapansin kapag nagbago ang himig.",
      "Hindi basta ipinapakita ang kalooban, kaya kailangan ng panahon para makilala.",
    ],
  },
  animalTraits: {
    rat: "Mabilis makapansin at mabilis kumuha ng mahalaga. Siya ang unang kumikilos sa gipit.",
    ox: "Mukhang mabagal pero tinatapos ang sinimulan. Ang tinanggap niya, hindi niya binibitawan.",
    tiger: "Walang takot at laging nangunguna. Hindi mapalampas ang kawalang-katarungan.",
    rabbit: "Mahinahon at mapansin. Marunong lumihis sa halip na bumangga.",
    dragon: "Malawak ang puso at mataas ang mithiin. Bihirang makuntento sa karaniwan.",
    snake: "Hindi basta naglalabas ng kalooban at malalim mag-isip. Tumpak humatol.",
    horse: "Masigla at hindi mapakali. Pinakamahirap para sa kanya ang makulong.",
    goat: "Mainit ang loob at maalalahanin. Matagal dala ang matatalim na salita.",
    monkey: "Maparaan at mabilis makibagay. Nababagot sa paulit-ulit.",
    rooster: "Masipag at maselan. Hindi matiis ang bagay na wala sa lugar.",
    dog: "Tapat hanggang huli kapag nagtiwala na. Lalong malalim ang sugat ng pagtataksil.",
    pig: "Bukas-palad at prangka. Madaling magtiwala, minsan ay may kapalit.",
  },
  affinity: {
    menu: "Hibla ng tadhana",
    formTitle: "Anong uri ng tao ang bagay sa iyo",
    formDescription:
      "Isang petsa ng kapanganakan lang ang kailangan. Puwede mo itong basahin kahit hindi mo alam ang kaarawan ninuman — o kahit wala ka pang iniisip na tao.",
    meLegend: "Ikaw",
    genderHint:
      "Iba ang pagbasa ng tradisyonal na Saju sa puwesto ng asawa depende sa kasarian. Kung hindi mo ito itatakda, tinatanggal ang bahaging iyon sa halip na hulaan.",
    seekingLabel: "Hinahanap",
    seekingHint:
      "Ang puwesto ng asawa (Jeongjae / Jeonggwan) ay masusuri lamang kapag alam ang kasarian ng dalawa.",
    seekingAny: "Hindi tinukoy",
    submit: "Manood ng patalastas at tingnan ang resulta ng ugnayan",
    submitNoAd: "Tingnan ang resulta ng ugnayan",
    submitting: "Binabasa…",

    resultTitle: "Hibla ng iyong tadhana",
    intro:
      "Narito ang hibla ng taong kinikilingan ng iyong Saju. **Nakikilala ang mga uring ito sa ugali,** bago mo pa malaman ang kaarawan nila.",
    scoreCaption:
      "Ito ang parehong iskor kada bahagi na ginagamit sa pagkakatugma — hindi ito pinagsamang match rate.",
    meTitle: "Ang puwesto mo",
    meBody: "Ikaw ay {dayMaster}, at sa ngayon ay {strength}.",
    meHint:
      "Isinusulat ng Saju ang taon, buwan, araw, at oras ng iyong kapanganakan bilang walong titik. **Ang unang titik ng araw ng kapanganakan ang kumakatawan sa iyo** — tinatawag itong day stem. Ang lahat ng uri sa ibaba ay hinati ayon sa isang titik na iyon.",
    bestTitle: "Mga hiblang bagay sa iyo",
    bestHint:
      "Ito ang day stem ng ibang tao — **ang enerhiya ng araw ng kanilang kapanganakan** — na hinati sa sampung uri, at ang tatlong ito ang umaangkop sa iyo. Madalas mahuhulaan mo ito sa mga asal sa ibaba, bago mo pa malaman ang kaarawan nila.",
    signsTitle: "Ganito ito lumilitaw",
    avoidTitle: "Mga hiblang kailangan ng pagsisikap",
    avoidHint:
      "Hindi ito babala. Ibig sabihin, mamaya darating ang ginhawa, matapos kayong parehong maglaan ng panahon.",
    bondLabel: "Pagkakatugma ng ugali",
    spouseLabel: "Puwesto ng asawa",
    spouseSkipped: "Hindi itinakda ang kasarian, kaya tinanggal ang bahaging ito",
    scoreHelp:
      "**Pagkakatugma ng ugali** — kung paano nagkakabit ang enerhiya ng inyong dalawang araw ng kapanganakan. Kahit magkatunggaling pares, pinakamataas ang iskor kapag magkasalungat ang yin at yang.\n**Puwesto ng asawa** — sa tradisyonal na Saju, may nakalaang isang puwesto para sa asawa: Jeongjae para sa lalaki, Jeonggwan para sa babae. Tinitingnan namin ito sa **magkabilang panig** — kung siya ang humahawak ng puwestong iyon para sa iyo, at kung ikaw ang humahawak nito para sa kanya. Ang pares na pareho itong taglay ang pinakamataas ang turing sa tradisyon.",
    typeHeading: "Taong tulad ng {name}",
    needTitle: "Ang kulang sa iyo ngayon",
    needBody:
      "Kung malakas sa kanya ang {elements}, napupunan nito ang manipis na bahagi mo.",
    needHint:
      "Hindi mababasa sa tingin lang ang limang elemento ng isang tao. Pero kapag nalaman mo na ang petsa ng kanyang kapanganakan, dito ka unang tumingin.",
    zodiacTitle: "Ang zodiac, bilang dagdag",
    zodiacHint:
      "Taon lang ng kapanganakan ang kailangan ng zodiac, kaya ito ang pinakamabilis tingnan. Isa lang din ito sa apat na haligi — ituring itong pahiwatig.",
    zodiacGood: "Mga sagisag na bagay sa iyo",
    zodiacHard: "Mga sagisag na madaling bumangga",
    tableType: "Uri",
    tableSign: "Sagisag",
    tableYears: "Mga taon ng kapanganakan",
    bornYear: "isinilang {year}",
    younger: "{n} taong nakababata",
    older: "{n} taong nakatatanda",
    sameAge: "magkasing-edad",
    zodiacYearsCaution:
      "Sa Saju, nagpapalit ang taon sa Ipchun (mga 4 Pebrero), hindi sa 1 Enero. **Ang isinilang tuwing Enero o unang bahagi ng Pebrero ay nasa sagisag ng nakaraang taon**, kaya sa mga kaarawang iyon ay tingnan ang magkabilang taon.",
    dayBranchTitle: "Siya kaya ang bagay sa akin?",
    dayBranchBody:
      "Petsa lang ng kapanganakan ang kailangan para tingnan kung bagay sa iyo ang isang tao.\nPara sa buong pagbasa, gamitin ang pagkakatugma sa Saju sa ibaba ng pahinang ito.",
    check: {
      button: "Tingnan gamit ang kaarawan niya",
      title: "Anong hibla ang taong ito?",
      body: "Ilagay ang petsa ng kapanganakan at sasabihin namin kung alin siya sa sampung uri sa itaas. Walang kinakalkulang iskor ng pagkakatugma.",
      submit: "Tingnan",
      checking: "Tinitingnan…",
      rank: "ika-{rank} mo",
      heading: "Ang taong ito ay {name}",
      caution:
        "Araw lang ng kapanganakan ang binabasa nito. **Kung isinilang siya malapit sa hatinggabi**, puwedeng mahulog sa magkabilang araw, at ang mga kaarawan sa Enero o unang bahagi ng Pebrero ay nasa sagisag ng nakaraang taon.",
      close: "Isara",
      another: "Tingnan ang ibang tao",
      error: "Pakisuri ang petsa — wala ito o labas sa saklaw.",
    },
    nextTitle: "May tao ka bang iniisip?",
    nextBody:
      "Ilagay ang petsa ng kapanganakan ninyong dalawa at lalabas ang tunay na match rate, kasama ang lahat ng bahagi sa itaas na pinagsama.",
    nextButton: "Tingnan ang pagkakatugma sa Saju",
    recalculate: "Basahin muli",
    copyLink: "Kopyahin ang link ng resulta",
    copied: "Nakopya",
    missingInput: "Hindi mabasa ang resulta. Pakiulit mula sa simula.",
    partialTime:
      "Walang ibinigay na oras ng kapanganakan, kaya inalis ang haligi ng oras. Kapag idinagdag ito, mas magiging tumpak kung ano ang kulang sa iyo.",
    disclaimer:
      "Sanggunian ito mula sa pananaw ng tradisyonal na Saju. Hindi nito sinasabing hanapin o iwasan ang isang tiyak na tao.",
  },
  result: {
    title: "Resulta ng pagkakatugma",
    totalLabel: "Match rate",
    breakdown: "Iskor kada bahagi",
    recalculate: "Magsimula muli",
    copyLink: "Kopyahin ang link ng resulta",
    copied: "Nakopya",
    missingInput: "Hindi mabasa ang resultang ito. Pakilagay muli ang mga petsa.",
    partialTime:
      "Walang ibinigay na oras ng kapanganakan, kaya inalis ang haligi ng oras. Kapag idinagdag ito, mas tumpak ang pagbasa.",
    engineVersion: "Kinalkula gamit ang",
    disclaimer:
      "Ito ay tradisyonal na pagbasa ng Saju na inaalok bilang sanggunian. Hindi ito siyentipikong hula ni hatol sa anumang relasyon.",
  },
  ads: { label: "Patalastas" },
  selfAds: {
    label: "Mga kaugnay na serbisyo",
    comingSoon: "Malapit nang dumating",
    purposes: {
      naminglink: "Mga pangalan sa Korean at hanja na pinili batay sa kahulugan at bilang ng mga stroke",
      inyeonlink: "Paano nagkakasya ang dalawang tao, batay sa kanilang apat na haligi at mga zodiac sign",
      sajulink: "Ang iyong sariling apat na haligi, at kung paano ito nakakatugon sa araw na ito",
      dreamslink: "Mga pagbasa ng pangarap na hinango mula sa isang diksyunaryo ng mga simbolo",
      placelink: "Mga lugar na pwedeng puntahan sa isang date sa Korea, ibinabahagi at inirerekomenda",
    },
  },
  analyzing: {
    title: "Binabasa ang Saju ninyong dalawa",
    quotes: [
      "Ang tamang tao ay hindi gaanong natatagpuan kundi nakikilala.",
      "Ang magkabagay ay hindi ang hindi kailanman nagtatalo — ito ang bumabalik pagkatapos magtalo.",
      "Hindi takdang sagot ang Saju. Isa itong wika para magkaintindihan.",
      "May pagsasamang magaan dahil magkahawig kayo; may nagtuturo naman dahil magkaiba kayo.",
      "Ang relasyong tumatagal ay kadalasang iyong walang matagal na hindi nasabi.",
      "Kung banyaga sa iyo ang paraan niya, may taglay siyang wala ka.",
      "Ang pagkakatugma ay kalahating dala mula sa kapanganakan at kalahating binubuo.",
      "Tumatagal ang relasyon kapag nagpapalitan ang pagsandal at ang pagbibigay.",
      "Mas mahalaga kaysa sa iskor ang paraan ng pagbasa mo rito.",
      "Kung magkaiba ang inyong panahon, ikuwento ninyo sa isa't isa kung ano ang panahon ninyo.",
    ],
    watching: "Pinapanood ang patalastas",
    remaining: "Bubukas ang resulta sa loob ng {seconds}s",
  },
  report: {
    title: "Itago ang pagbasang ito bilang PDF",
    body:
      "Ginagawa naming 7-pahinang PDF ang resultang ito. **Apat sa mga pahinang iyon ay wala sa screen** — kung saang direksyon dumadaloy ang enerhiya, mas malapitang tingin sa bawat tsart, kung saan nagtatagpo ang apat na haligi, at kung paano ito kinalkula.",
    buyButton: "Bayaran ang {price} at i-download",
    preparing: "Hindi pa available",
    ordering: "Ginagawa ang order mo…",
    paying: "Pinoproseso ang bayad…",
    issuing: "Inihahanda ang report mo…",
    done: "Na-download na. Gamitin ang button sa ibaba para i-download itong muli.",
    failed: "Hindi natuloy ang bayad o ang download. Pakisubukan muli maya-maya.",
    retry: "I-download muli",
    contents: [
      "Pahina 1 — match rate, ang lakas ng pagsasama, at ang dapat bantayan",
      "Pahina 2 — ang hugis ng relasyon, ang sampung diyos, at ang iskor kada bahagi",
      "Pahina 3 — ang Saju ninyong dalawa at ang lakas ng mga elemento",
          "Pahina 4 — kung saang direksyon dumadaloy ang enerhiya at kung saan nagtatagpo ang apat na haligi",
      "Pahina 5 — mas malapitang tingin sa bawat tsart (ang itinutulak ng panahon)",
      "Pahina 6 — ano ang bawat haligi niya para sa inyo",
      "Pahina 7 — ganito kinalkula ang mga tsart na ito",
    ],
    consentLabel:
      "Nauunawaan kong digital content ito na ibinibigay agad pagkatapos ng bayad, at na **limitado ang pag-urong dahil lang sa pagbabago ng isip kapag natapos na ang download**.",
    consentRequired: "Pakikumpirma ang mga tuntunin ng pag-urong bago magbayad.",
    productInfoTitle: "Impormasyon ng produkto",
    productInfo: [
      ["Tagapagbigay", "{brand}"],
      ["Anyo", "Isang PDF na dokumento (7 pahina), ida-download sa screen agad pagkatapos ng bayad."],
      ["Kailangan", "Kahit anong device na makakabukas ng PDF. Walang i-install, walang account."],
      ["Panahon ng paggamit", "Walang hangganan. Sa iyo ang file na na-download mo."],
      ["Muling pag-download", "Hanggang limang beses sa iisang order. Wala kaming itinatagong kopya, kaya hindi na ito magagawang muli kapag umalis ka sa screen ng resulta."],
      ["Pag-urong", "Buong refund bago magsimula ang download. Pagkatapos nitong makumpleto, limitado ang pag-urong dahil sa pagbabago ng isip (Art. 17(2), Korean E-Commerce Act)."],
      ["Gastos sa pagsasauli", "Wala — digital content, walang ipinapadala."],
    ],
    refundContact:
      "Para sa refund o katanungan, makipag-ugnayan sa customer service o sa email sa ibaba. Kung hindi nagawa ang dokumento, o iba ang siningil sa halagang nasa order, ibinabalik namin ang buong bayad.",
    pdfLanguageNotice:
      "Ang PDF ay ginagawa sa parehong wika ng screen na ito.",
  },
  affinityReport: {
    title: "Itago ang hibla ng iyong tadhana bilang PDF",
    body: "Ginagawa naming apat na pahinang PDF ang pagbasang ito. Kasama rito ang **buong ranking na hindi ipinapakita sa screen** — tatlo lang ang ibinibigay ng screen, samantalang dala ng PDF ang sampung uri at ang labindalawang sagisag.",
    buyButton: "Bayaran ang {price} at i-download",
    preparing: "Inihahanda",
    ordering: "Ginagawa ang order…",
    paying: "Pinoproseso ang bayad…",
    issuing: "Binubuo ang report mo…",
    done: "Na-download na. Gamitin ang button sa ibaba para makuha itong muli.",
    failed: "Hindi natuloy ang bayad o ang download. Pakisubukan muli mamaya.",
    retry: "I-download muli",
    contents: [
      "Pahina 1 — Ang puwesto mo at ang kulang sa iyo",
      "Pahina 2 — Tatlong hiblang bagay sa iyo, may mga palatandaan sa asal",
      "Pahina 3 — Ang hiblang kailangan ng pagsisikap, at ang buong ranking ng day stem",
      "Pahina 4 — Buong ranking ng labindalawang sagisag, kasama ang mga taon ng kapanganakan",
    ],
    consentLabel:
      "Digital content ito na ibinibigay agad pagkatapos ng bayad. Nauunawaan kong **kapag natapos na ang download, limitado na ang karapatang umurong dahil sa pagbabago ng isip.**",
    consentRequired: "Pakisang-ayunan ang mga tuntunin ng pag-urong bago magbayad.",
    productInfoTitle: "Impormasyon ng produkto",
    productInfo: [
      ["Tagapagbigay", "{brand}"],
      ["Anyo", "Isang PDF na dokumento (4 na pahina), ida-download sa screen na ito agad pagkatapos ng bayad."],
      ["Kailangan", "Kahit anong device na makakabukas ng PDF. Walang i-install, walang account."],
      ["Panahon ng paggamit", "Walang taning. Sa iyo ang na-download na file."],
      ["Muling pag-download", "Hanggang 5 beses sa iisang order. Hindi namin iniimbak ang file, kaya hindi na ito mabubuong muli kapag umalis ka sa screen na ito."],
      ["Pag-urong", "Buong refund bago makumpleto ang download. Pagkatapos nitong makumpleto, limitado ang pag-urong dahil sa pagbabago ng isip."],
      ["Gastos sa pagsasauli", "Wala. Walang ipinapadala."],
    ],
    refundContact:
      "Para sa refund o katanungan, makipag-ugnayan sa support desk o sa email sa ibaba. Kung hindi kailanman nagawa ang dokumento, o iba ang siningil sa halagang nasa order, ibinabalik namin ang buong bayad.",
    pdfLanguageNotice:
      "Ang PDF ay ginagawa sa parehong wika ng screen na ito.",
  },
  reportDetail: {
    supplyTitle: "Saang direksyon dumadaloy ang enerhiya",
    supplyHint: "Ang puntos ng Limang Elemento ay katamtaman ng dalawang direksyon. Itinatago ng katamtaman kung sino ang nagpupuno kanino. Dito ay hinihiwalay namin — may mga pares na iisang panig lang ang mahusay na napupunan.",
    supplyReceiveLabel: "Gaano napupunan si {name}",
    needsLabel: "Ang kailangan ngayon",
    bondTitle: "Ang ugnayan ng dalawang Panginoon ng Araw",
    depthTitle: "Mas malapitang tingin sa bawat tsart",
    vitalityTitle: "Ang itinutulak ng panahon",
    vitalityHint: "Ipinapakita ng mga bar kung gaano karami ang bawat elemento. Ipinapakita ng talahanayang ito kung itinutulak ba ito ng buwan ng kapanganakan. Ang parehong dami ay iba ang bisa sa Wang kaysa sa Sa.",
    vitalities: {
      WANG: { name: "Wang (旺)", body: "nasa rurok" },
      SANG: { name: "Sang (相)", body: "susunod na aangat" },
      HYU: { name: "Hyu (休)", body: "nagpapahinga pagkatapos ng panahon nito" },
      SU: { name: "Su (囚)", body: "nakakulong, mahirap gumalaw" },
      SA: { name: "Sa (死)", body: "nasa pinakamahina" },
    },
    seasonBoostTitle: "Gaano ito itinaas ng buwan",
    rawLabel: "Bago ang buwan",
    strengthLabel: "Pagkatapos ng buwan",
    earthSeasonNote: "Isinilang sa buwan ng palipat (辰未戌丑), kaya itinuring ding nasa rurok ang Lupa.",
    allyRatioLabel: "Bahagi ng panig ng Panginoon ng Araw",
    allyRatioHint: "Yaman kasama ang Kapantay, sa kabuuan. Higit sa 45% ay malakas, mababa sa 35% ay mahina. Inilalagay namin ang bilang upang makita ninyo kung saan bumagsak ang hatol.",
    pillarsTitle: "Kung saan nagtatagpo ang apat na haligi",
    pillarsHint: "Ang sanga ng Araw lamang ang pumapasok sa antas ng bagay — iyon ang upuan ng asawa. Mababasa rin ang tatlong haligi sa parehong talahanayan, kaya isinama namin.",
    branchRelations: {
      SAMHAP: "Tatluhang pagkakaisa",
      BANHAP: "Kalahating pagkakaisa",
      YUKHAP: "Anim na pagkakaisa",
      SAME: "Parehong sanga",
      NEUTRAL: "Walang ugnayan",
      WONJIN: "Tanim na sama ng loob",
      CHUNG: "Banggaan",
    },
    pillarColumn: "Haligi",
    relationColumn: "Ugnayan",
    relationScoreColumn: "Puntos",
    tenGodColumn: "Sampung Diyos",
    stemGodsTitle: "Ano ang bawat haligi niya para sa inyo",
    stemGodsHint: "Ang antas ng bagay ay naghahambing lamang ng Panginoon ng Araw. Ang parehong tuntunin ang nagtatakda ng Diyos para sa iba niyang haligi — makikita kung aling bahagi ng taong iyon ang ano para sa inyo.",
    seesLabel: "Sa paningin ni {from}",
    notScoredNote: "Hindi kasama sa antas ng bagay ang mga puntos sa talahanayang ito. Nakalimbag ito upang maihambing ninyo ang tindi.",
    appendixTitle: "Ganito kinalkula ang tsart na ito",
    timeCorrectionLabel: "Oras ng kapanganakan",
    timeCorrectionApplied: "Itinama sa tunay na oras ng araw at binasa bilang {time}.",
    timeCorrectionNone: "Walang ibinigay na oras ng kapanganakan, kaya iniwan ang haligi ng Oras.",
    timeCorrectionDateShift: "Inilipat ng pagtatama ang petsa sa {date}; ang haligi ng Araw ay kinuha sa araw na iyon.",
    calendarLabel: "Petsang pinagbatayan ng tsart",
    solarLabel: "Solar",
    lunarLabel: "Lunar",
    lunarUnavailable: "Wala ang araw na ito sa talaan ng almanake, kaya hindi mailimbag ang petsang lunar.",
  },
  footer: {
    privacy: "Privacy",
    terms: "Mga Tuntunin",
    refund: "Refund",
    pricing: "Presyo",
    legalEntity: "Kompanya",
    representative: "Kinatawan",
    businessNumber: "Rehistro",
    mailOrderNumber: "Online commerce",
    address: "Address",
    customerCenter: "Serbisyo sa kostumer",
    email: "Email",
    privacyOfficer: "Privacy officer",
    hostingProvider: "Hosting",
    providedBy: "Provided by",
    effective: "Bisa mula",
    backHome: "Bumalik sa simula",
  },
  bands: {
    EXCELLENT: "Napakabagay na pagsasama",
    GOOD: "Bagay na pagsasama",
    FAIR: "Katamtamang pagsasama",
    CHALLENGING: "Pagsasamang kailangan ng pagsisikap",
  },
  engines: {
    saju: {
      name: "Pagkakatugma sa Saju",
      description:
        "Sabay na binabasa ang elemento ng day master, ang balanse ng mga elemento, at ang sanga ng araw.",
    },
    zodiac: {
      name: "Pagkakatugma sa zodiac",
      description: "Binabasa ang ugnayan ng dalawang sanga ng taon ng kapanganakan.",
    },
  },
  factors: {
    dayMasterRelation: "Elemento ng day master",
    spouseStar: "Bituin ng asawa",
    elementSupply: "Suplay ng elemento",
    dayBranchRelation: "Sanga ng araw",
    branchRelation: "Mga sagisag ng zodiac",
  },
  notes: {
    "strength.dayMasterRelation":
      "Nakapuwesto ang inyong ugali sa paraang nakakatulong sa isa't isa. Kahit banyaga ang paraan ng kabila, kadalasan ay ito ang pumupuno sa kulang mo.",
    "strength.spouseStar":
      "Taglay ninyong dalawa ang elementong sa tradisyon ay binabasa bilang puwesto ng asawa. Kung magaan agad ang pakiramdam mula sa simula nang walang malinaw na dahilan, malamang ito ang sanhi.",
    "strength.elementSupply":
      "Taglay ng bawat isa ang kasalukuyang kailangan ng kabila. Ang mga bagay na mahirap galawin nang mag-isa ay mas gumagaan kapag magkasama kayo.",
    "strength.dayBranchRelation":
      "Sa tradisyon, ang sanga ng araw ang binabasa bilang upuan ng asawa. Magkabagay ang inyong sanga, kaya kadalasang komportable ang oras na magkasama kayo.",
    "strength.branchRelation":
      "Magkabagay ang inyong sagisag ng zodiac — ang uri ng pagsasamang mukhang natural sa paningin ng iba at madaling basahin sa unang pagkikita.",
    "caution.dayMasterRelation":
      "Dito nagkukuskusan ang ugali. Sa iisang gawain, magkaiba ang inyong bilis at paraan, kaya madaling isiping sinasadya ito ng kabila. Pagkasunduan muna ang proseso bago ang konklusyon.",
    "caution.spouseStar":
      "Wala sa inyong dalawa ang may taglay ng tinatawag ng tradisyon na elemento ng puwesto ng asawa. Maaaring hindi agad dumating ang hatak; sa halip, ito ang uri ng pagsasamang naiipon sa paglipas ng panahon.",
    "caution.elementSupply":
      "Manipis din sa kabila ang kailangan ng bawat isa. Ang mga bagay na parehong magaling sa inyo ay talagang magaling — pero nananatiling walang laman ang mga bahaging parehong kulang. Mas mabuting punan iyon mula sa labas ng relasyon.",
    "caution.dayBranchRelation":
      "Madaling magkaroon ng alitan sa puwesto ng pinagsasaluhang buhay. Kadalasan ay lumalabas ito sa maliliit na gawi kaysa sa malalaking usapin, kaya nakakatulong ang maagang pagtatakda ng ilang tuntunin.",
    "caution.branchRelation":
      "Magkasalungat ang inyong sagisag ng zodiac. Magkaiba ang inyong pagtingin, kaya nagkakabanggaan — pero ibig ding sabihin nito na marami kayong matututunan sa isa't isa.",

    "spouseStar.MUTUAL":
      "Tumpak na nasa puwesto ng asawa ng isa't isa kayong dalawa — ito ang pagsasamang pinakamataas ang turing sa tradisyonal na Saju.",
    "spouseStar.STRONG":
      "Ang isa sa inyo ay tumpak na nasa puwesto ng asawa, at ang isa naman ay malapit dito. Maaaring bahagyang magkaiba ang laki ng nadarama ninyo sa isa't isa.",
    "spouseStar.PARTIAL":
      "Isa lang sa inyo ang nasa puwesto ng asawa ng kabila. Kadalasang iisang panig ang unang hatak, kaya mabuting huwag ipagpaliban ang pagsasabi nito.",
    "spouseStar.SLIGHT":
      "Ang isa sa inyo ay katabi ng puwesto ng asawa. Naiipon ito sa panahong magkasama kayo sa halip na dumating bilang agarang pagkahumaling.",
    "spouseStar.NONE":
      "Wala sa inyong dalawa ang sumasakop sa tinatawag ng tradisyon na puwesto ng asawa. Nabubuo ang pagsasamang ito sa pamumuhay na magkatabi, hindi sa hatak.",
    "dayMaster.CLASH_BONDED":
      "Nagpipigilan ang {elementA} at ang {elementB}, pero magkasalungat ang polaridad. Binabasa ito ng tradisyon bilang pares ng mag-asawa — kadalasang nagiging pagmamahal ang tensyon.",
    "dayMaster.CLASH_HARSH":
      "Nagpipigilan ang {elementA} at ang {elementB} at iisa ang polaridad. Malakas ang pukaw, at kasinlaki rin ang bigat na ipinapataw ng isa sa isa.",
    "dayMaster.FLOW_GUARDED":
      "Ang isa sa inyo ay naglalabas ng enerhiya at ang isa naman ang humahawak nito. Nahuhubog ng kabila ang mas matalim na sigla — ito ang tinatawag ng tradisyon na binabantayang pares.",
    "dayMaster.FLOW_BLOCKED":
      "Ang isa sa inyo ay naglalabas ng enerhiya at ang isa naman ang kumukuha nito. Madaling mapagod dito ang nagbibigay, kaya nakakatulong na sabihin nang malinaw kung ano ang ibinibigay at kinukuha ng bawat isa.",
    "dayMaster.PEER_EVEN":
      "Parehong may enerhiya ng {elementA} kayo at iisa pa ang polaridad. Pantay at magaan iyon, pero mahina ang tulak ninyo sa isa't isa.",
    "dayMaster.PEER_RIVAL":
      "Parehong may enerhiya ng {elementA} kayo pero magkasalungat ang polaridad. Mabilis ang hatak, pero nag-aagawan kayo sa iisang lupa.",
    "supply.AMPLE":
      "Sagana sa bawat isa ang kailangan ng kabila. Kailangan ng unang tao ang {needA} at ng pangalawa ang {needB} — at ang kabila ang pumupuno nito.",
    "supply.ENOUGH":
      "May sapat na taglay ang bawat isa sa kailangan ng kabila: {needA} para sa unang tao, {needB} para sa pangalawa.",
    "supply.THIN":
      "Ang kailangan ng bawat isa — {needA} para sa unang tao, {needB} para sa pangalawa — ay manipis din sa kabila.",
    "supply.SCARCE":
      "Hindi basta maibibigay ng isa't isa ang kailangan ng kabila: {needA} para sa unang tao, {needB} para sa pangalawa, at walang laman ang dalawang bahaging iyon. Mas mabuting punan iyon mula sa labas ng relasyon.",
    "dayBranch.SAMHAP":
      "Bumubuo ng tatluhang pagkakaisa ang sanga ng araw — ang pinakamalakas na pares sa puwesto ng asawa.",
    "dayBranch.BANHAP":
      "Bumubuo ng kalahating pagkakaisa ang sanga ng araw sa palibot ng gitna ng tatluhan. Bagay na bagay na pares sa puwesto ng asawa.",
    "dayBranch.YUKHAP": "Bumubuo ng anim na pagkakaisa ang sanga ng araw. Naghahatakan kayo sa isa't isa.",
    "dayBranch.SAME":
      "Magkapareho ang sanga ng araw. Nagpapagaan iyon, pero kaunti ang bago.",
    "dayBranch.NEUTRAL": "Walang tanging ugnayan ang mga sanga ng araw.",
    "dayBranch.WONJIN":
      "Nasa tahimik na tampuhan ang sanga ng araw. Bihirang sumabog nang hayagan, pero naiipon ang mga hinanakit na mahirap pangalanan — mas mabuting sabihin agad kaysa palampasin.",
    "dayBranch.CHUNG":
      "Nagbabanggaan ang sanga ng araw. Madaling magkaalitan sa puwestong ito, kaya mahalaga ang paraan ng pag-uusap ninyo.",
    "zodiac.SAMHAP":
      "Bumubuo ng tatluhang pagkakaisa ang {animalA} at ang {animalB} — ang pinakamagandang pares sa zodiac.",
    "zodiac.BANHAP":
      "Bumubuo ng kalahating pagkakaisa ang {animalA} at ang {animalB} sa palibot ng gitna ng tatluhan, kaya bagay kayo sa isa't isa.",
    "zodiac.YUKHAP": "Bumubuo ng anim na pagkakaisa ang {animalA} at ang {animalB}. Bagay na bagay kayo.",
    "zodiac.SAME": "Parehong isinilang kayo sa taon ng {animalA}, kaya magkahawig ang inyong ugali.",
    "zodiac.NEUTRAL": "Walang tanging ugnayan ang {animalA} at ang {animalB}.",
    "zodiac.WONJIN":
      "Nasa tahimik na tampuhan ang {animalA} at ang {animalB} — bihira ang hayagang away, pero may banayad na di-pagkakaunawaan na matagal manatili.",
    "zodiac.CHUNG":
      "Nagbabanggaan ang {animalA} at ang {animalB}. Malaki ang pagkakaiba ninyo, kaya marami rin kayong matututunan.",
  },
  animals: {
    rat: "Daga",
    ox: "Baka",
    tiger: "Tigre",
    rabbit: "Kuneho",
    dragon: "Dragon",
    snake: "Ahas",
    horse: "Kabayo",
    goat: "Kambing",
    monkey: "Unggoy",
    rooster: "Tandang",
    dog: "Aso",
    pig: "Baboy",
  },
  elements: {
    WOOD: "Kahoy",
    FIRE: "Apoy",
    EARTH: "Lupa",
    METAL: "Metal",
    WATER: "Tubig",
  },
};
