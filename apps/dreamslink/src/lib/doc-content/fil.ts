import type { DocPage, NoticeCopy } from "./types";
import type { DocKey } from "./ko";

/** Filipino — `scripts/translate-doc-content.ts`가 만든다. 손으로 고치지 말 것. */
export const FIL_DOCS = {
  "guide": {
    "eyebrow": "Batayan para sa Pagkalkula",
    "title": "Ano ang batayan para sa pagkalkula?",
    "summary": "Ipinapahayag namin ang lahat ng mga patakaran na ginagamit ng Dreams-Link. Maaari mong suriin kung aling mga simbolo ang natagpuan, kung ano ang nakasulat sa diksyunaryo — kung saan nagmula ang mga interpretasyon na ipinapakita sa screen.",
    "backLabel": "Bumalik sa Tahanan",
    "sections": [
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Lahat ng mga numerong nakasulat dito ay **direktang kinuha mula sa simbolo diksyunaryo at mga patakaran ng pagtutugma.** Dahil hindi namin mano-manong isinusulat ang teksto, kung ang diksyunaryo ay pinalawak o ang mga patakaran ay binago, ang mga numero sa mga dokumentong ito ay magbabago rin."
          }
        ]
      }
    ]
  },
  "guide/how-matching-works": {
    "eyebrow": "Batayan para sa Serbisyo",
    "title": "Paano makahanap ng mga simbolo sa mga kwento ng panaginip.",
    "summary": "Ipinaliwanag nito kung paano pinipili ang mga simbolo mula sa malayang nakasulat na mga pangungusap at kung paano namin sinasala ang isang simbolo na nagkataon lamang na nasa loob ng mas mahabang salita — 별 (\"bituin\") sa loob ng 특별할 (\"walang espesyal\").",
    "backLabel": "Batayan para sa Interpretasyon",
    "sections": [
      {
        "title": "Naghahanap kami ng mga simbolo sa teksto na ibinibigay mo.",
        "blocks": [
          {
            "p": "Kapag malaya mong isinusulat ang iyong kwento ng panaginip, naghahanap kami ng mga simbolo sa tekstong iyon mula sa diksyunaryo. Hindi mo kailangang pumili ng mga item o sumulat sa isang tiyak na format. Isulat lamang tulad ng karaniwan mong ginagawa, tulad ng 'Kagabi, isang malaking python ang umikot sa akin.'"
          },
          {
            "p": "Kapag naghahanap, hindi lamang namin tinitingnan ang pangalan ng simbolo kundi pati na rin ang **{aliasTotal} alternatibong pangalan**. Ito ay mga salitang tumutukoy sa parehong bagay, tulad ng 구렁이 (gureongi) at 뱀 (baem), 떨어지다 (tteoreojida) at 빠지다 (ppajida). Kasama rin ang mga pagbabago sa mga pagtatapos, tulad ng 「떨어지는」 (tteoreojineun) · 「쫓겨서」 (jjotgyeoseo) · 「빠졌다」 (ppajyeotda)."
          }
        ]
      },
      {
        "title": "Ang mga karakter na aksidenteng lumilitaw sa loob ng isang salita ay hindi binibilang",
        "blocks": [
          {
            "p": "Ito ang pinaka-hamon na aspeto sa Korean. Sa mga simbolo, mayroong **{singleCharSymbolTotal} simbolo na isang karakter** tulad ng **별** (byeol) · **말** (mal) · **배** (bae) · **손** (son), na madalas na lumilitaw sa ibang mga salita."
          },
          {
            "ul": [
              "별 (\"bituin\") na nagtatago sa loob ng 특**별**할 (\"walang espesyal\")",
              "게 (\"alimango\") na nagtatago sa loob ng 누군가에**게** (\"sa pamamagitan ng isang tao\")",
              "말 (\"kabayo\") sa loob ng **말**했다 (\"nagsabi\"), at 배 (\"bangka, peras\") sa loob ng **배**가 고팠다 (\"Kami ay nagugutom\")"
            ]
          },
          {
            "p": "Ang pagbibilang sa mga ito bilang mga simbolo ay nagreresulta sa mga hindi kaugnay na interpretasyon. Samakatuwid, sinisiyasat namin ang mga nakapaligid na karakter — kung **mayroong isang karakter na Korean sa harap**, itinuturing namin itong bahagi ng mas mahabang salita at hindi ito binibilang, at tinitingnan namin **kung ano ang sumusunod ay isang particle o isang pandiwang pagtatapos**, pinapayagan ang 「소가」 (soga) na dumaan habang sinasala ang 「소리」 (sori)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ganito ito nagtrabaho",
        "blocks": [
          {
            "p": "Bago ipatupad ang patakarang ito, nang subukan gamit ang labindalawang aktwal na pangungusap, **lahat ng labindalawa** ay naglalaman ng mga hindi kaugnay na simbolo. Isang pangungusap na walang makabuluhang nilalaman ay naitala pa bilang isang a conception dream."
          },
          {
            "p": "Ngayon, isa na lamang ang natitira — ang 배 (bae) sa 「배가 고팠다」 (bae ga gopatda). Dahil ito ay tunog na pareho ngunit may ibang kahulugan, hindi ito maaaring masala lamang sa pamamagitan ng mga nakapaligid na karakter."
          },
          {
            "p": "Ang hindi paghahanap ng isang bagay ay isang tapat na bagay. Gayunpaman, ang paghahanap ng isang bagay na hindi kaugnay ay nangangahulugang pagtataguyod ng isang tradisyon sa likod ng salitang iyon na wala naman."
          }
        ]
      },
      {
        "title": "Ang parehong mga karakter ay palaging nagbubunga ng parehong mga resulta",
        "blocks": [
          {
            "p": "Walang puwang para sa pagkakataon sa mga patakaran ng pagtutugma. Dahil ang diksyunaryo ay nakatakda at ang mga patakaran ay itinatag, kung ipinasok mo ang parehong pangungusap muli, **ang parehong simbolo ay lilitaw sa parehong pagkakasunod-sunod**. Ang interpretasyon na nakikita mo ngayon ay hindi mag-iiba mula sa isa na makikita mo bukas."
          },
          {
            "p": "Ang kalidad na ito ay isa ring pangako na ginawa namin sa aming sarili. Ang mga interpretasyon na nagbabago sa bawat pagkakataon ay nakakaaliw ngunit walang pundasyon. Ito ay konektado sa kwento ng [bakit hindi kami gumagamit ng mga modelo](/guide/no-ai)."
          }
        ]
      }
    ]
  },
  "guide/no-storage": {
    "eyebrow": "Personal na Impormasyon",
    "title": "Ang Paraan ng Hindi Pagtatago ng mga Panaginip na Isinusulat Mo",
    "summary": "Ipinaliwanag namin kung ano ang teknikal na kahulugan na ang mga kwento ng panaginip ay hindi naitala kahit saan, at kung ano ang nilalaman sa resulta ng link.",
    "backLabel": "Batayan ng Interpretasyon",
    "sections": [
      {
        "title": "Walang Kailangan na Membership",
        "blocks": [
          {
            "p": "Ang Dreams-Link ay hindi lumilikha ng mga account. Hindi kami nangongolekta ng mga pangalan, email, o numero ng telepono. Ang tanging mga bagay na kinokolekta namin ay ang mga panaginip na isinusulat mo, kung ano ang naramdaman mo nang magising ka, at kung ikaw ay nananaginip ng parehong panaginip nang paulit-ulit, at hindi ito nananatili pagkatapos makumpleto ang interpretasyon."
          },
          {
            "p": "Ang mga kwento ng panaginip ay ang pinaka-pribadong mga halaga na natatanggap ng serbisyong ito. Ito ang dahilan kung bakit ang mga patakaran ay mas mahigpit kaysa sa kinakailangan — hindi pa kami nakalikha ng talahanayan upang isulat ang iyong isinumiteng impormasyon."
          }
        ]
      },
      {
        "title": "Ano ang nilalaman sa resulta ng link",
        "blocks": [
          {
            "p": "Kapag kumpleto na ang pagkalkula, ang address ay magiging ganito."
          },
          {
            "p": "**/ko/dream/result#eyJ0IjoiSSBkcmVhbXQgb2YgYSBjYXJwLi4u**"
          },
          {
            "p": "Ang sumusunod na **#** ay ang input value. Ang bahaging ito ay tinatawag na **fragment**, na isang **bahagi na hindi ipinapadala ng browser sa server**. Ito ay karaniwang pag-uugali sa web at hindi isang patakaran na nilikha namin — ito ay orihinal na dinisenyo upang ipahiwatig ang isang lokasyon sa loob ng isang dokumento, kaya walang pangangailangan ang server na makita ito."
          },
          {
            "p": "Dito, ang katangiang ito ay partikular na mahalaga — ang panaginip na ibinigay mo **ay hindi nananatili sa mga tala ng pag-access.**"
          },
          {
            "p": "Sa ibang salita, kapag binuksan mo ang resulta ng link, binabasa ng browser ang halagang iyon upang humiling ng pagkalkula, at ang aming server ay tumatanggap ng halaga para sa pagkalkula, ibinabalik ang sagot, at pagkatapos ay nakakalimutan ito."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Mangyaring mag-ingat kapag nagpapadala ng mga link sa iba",
        "blocks": [
          {
            "p": "Ang katotohanan na hindi ito nakaimbak sa server ay hindi nangangahulugang ang link ay ligtas. Ang resulta ng link ay naglalaman ng panaginip na ibinigay mo, kaya ang taong tumanggap ng link na iyon ay maaaring basahin ang nilalaman na iyon."
          }
        ]
      },
      {
        "title": "Bakit ang pagkalkula ay ginagawa sa server ngunit hindi nakaimbak?",
        "blocks": [
          {
            "p": "Ang pagkalkula mismo ay ginagawa sa server. Ang paghahanap ng mga simbolo ay nangangailangan ng buong diksyunaryo, at ang diksyunaryong iyon ay masyadong malaki upang ipadala sa browser. Ang pagpapanatili ng diksyunaryo sa server ay nangangahulugan din na kapag ang isang pagkakamali ay naituwid, ito ay naipapakita para sa lahat nang sabay-sabay. Gayunpaman, **pagkatapos iproseso ang kahilingan, ang halagang iyon ay hindi ginagamit kahit saan.** Walang code upang ipasok ito sa database."
          },
          {
            "p": "Isang minimal na tala na kinakailangan para sa operasyon ang pinananatili — isang counter upang maiwasan ang parehong tao na magpadala ng labis na mga kahilingan sa maikling panahon. Hindi ito kasama ang nilalaman ng panaginip, at ang access IP ay hindi rin itinatago. Isang halaga lamang, na hashed kasama ang petsa, ang binibilang, at ang halagang iyon ay nagbabago kapag nagbago ang araw."
          }
        ]
      },
      {
        "title": "Ano ang hindi maaaring gawin dahil hindi ito nakaimbak",
        "blocks": [
          {
            "p": "Sa totoo lang, may mga bagay na isinuko namin dahil hindi kami nag-iimbak ng data."
          },
          {
            "ul": [
              "**Walang talaarawan ng panaginip.** Hindi mo maibabalik ang interpretasyon mula sa nakaraang linggo, at kailangan mong magkaroon ng link upang makita ito muli. Ito ay sinadyang ginawa — upang lumikha ng isang talaarawan, ang pinaka-pribadong mga sulatin ay dapat na patuloy na nakaimbak.",
              "**Bawat pagkakataon ay kinakalkula namin ang parehong halaga muli.** Walang cache. Sa halip, ang diksyunaryo ay nakatakda, at ang mga patakaran ng pagtutugma ay deterministic, kaya ang parehong teksto ay palaging magbubunga ng parehong simbolo — ang mga patakaran ay pumapalit sa kung ano ang garantisado ng cache.",
              "**Ang pag-refresh ay muling magdadala sa pintuan ng advertisement.** Ito ay dahil walang lugar upang iwanan ang mga tala ng pagtingin."
            ]
          }
        ]
      },
      {
        "title": "Sa kaso ng pagbili",
        "blocks": [
          {
            "p": "Kung bumili ka ng ulat, isang tala ng transaksyon ang itatago sa oras na iyon. Ang pagbabayad ay may legal na tinukoy na panahon ng pagpapanatili, at walang kasaysayan ng order, hindi maaaring iproseso ang mga refund. Gayunpaman, kahit na sa mga pagkakataong iyon, **ang teksto ng panaginip na ginamit para sa pagbabasa ay hindi nakakabit sa order** — ito ay muling natanggap at isinulat sa sandaling iyon kapag nilikha ang dokumento pagkatapos ng kumpirmasyon ng pagbabayad."
          },
          {
            "p": "Para sa mga detalye, mangyaring sumangguni sa [privacy policy](/privacy)."
          }
        ]
      }
    ]
  },
  "notice": {
    "eyebrow": "Pabatid",
    "title": "Mga Anunsyo",
    "summary": "Ito ay isang lugar upang ipaalam sa iyo ang mga pagbabago na maaaring makaapekto sa iyong paggamit.",
    "backLabel": "Bumalik sa Tahanan",
    "sections": []
  },
  "contact": {
    "eyebrow": "Makipag-ugnayan",
    "title": "Mga Katanungan",
    "summary": "Ito ang channel para sa mga katanungan tungkol sa paggamit, mga refund, mga kahilingan sa personal na impormasyon, at mga ulat ng error, kasama ang impormasyon sa negosyo.",
    "backLabel": "Bumalik sa Tahanan",
    "sections": [
      {
        "title": "Makipag-ugnayan sa pamamagitan ng Email",
        "blocks": [
          {
            "p": "Mangyaring ipadala ang mga katanungan sa **{email}**. Kami ay tutugon sa loob ng 2 araw ng negosyo. Para sa mga katanungan tungkol sa pagbabayad at refund, mas mabilis kung isasama mo ang iyong **order number o payment email**."
          },
          {
            "p": "Ang mga katanungan sa telepono ay tinatanggap sa {customerCenter}."
          }
        ]
      },
      {
        "title": "Ano ang maaaring ipadala sa channel na ito?",
        "blocks": [
          {
            "ul": [
              "**Pagbabayad at Refund** — Kung ang dokumento ay hindi pa nalikha o ang halaga ng pagbabayad ay naiiba mula sa order, isang buong refund ang ibibigay. Ang mga kondisyon ay nasa [refund policy](/refund-policy).",
              "**Personal na Impormasyon** — Tinatanggap namin ang mga kahilingan para sa pag-access, pagwawasto, at pagtanggal. Ang patakaran sa pagproseso ay nasa [privacy policy](/privacy).",
              "**Ulat ng mga Error sa Interpretasyon** — Kung ang mga simbolo ay natagpuan na mali o ang interpretasyon ay tila kakaiba, mangyaring ipaalam sa amin. Kung isasama mo kung kailan mo isinulat ang kwento ng panaginip na iyon, maaari naming suriin muli gamit ang parehong teksto."
            ]
          }
        ]
      },
      {
        "title": "Impormasyon sa Negosyo",
        "blocks": [
          {
            "ul": [
              "**Pangalan ng Negosyo** — {companyName}",
              "**Kinatawan** — {representative}",
              "**Numero ng Rehistrasyon ng Negosyo** — {businessNumber}",
              "**Numero ng Rehistrasyon ng Mail Order** — {mailOrderNumber}",
              "**Tirahan** — {address}",
              "**Customer Center** — {customerCenter}",
              "**Email** — {email}",
              "**Opisyal sa Proteksyon ng Personal na Impormasyon** — {privacyOfficer}",
              "**Hosting Provider** — {hostingProvider}"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Hindi mo kailangang isulat muli ang panaginip na ibinigay mo sa email ng katanungan. Hindi namin iniimbak ang mga input, kaya hindi namin ito mahanap muli, at ang order number ay sapat para sa beripikasyon. Mangyaring isulat lamang ito kung talagang kinakailangan, tulad ng para sa pag-uulat ng mga error sa interpretasyon."
          }
        ]
      }
    ]
  },
  "guide/what-we-do-not-do": {
    "eyebrow": "Mga Prinsipyo ng Serbisyo",
    "title": "Ano ang Hindi Namin Ginagawa",
    "summary": "Hindi kami nagbibigay ng mga numero ng lotto, mga talaarawan ng panaginip, mga pagtukoy sa pagbubuntis, o mga anting-anting. Ipinaliwanag namin kung bakit pinili naming hindi gawin ang bawat isa sa mga ito.",
    "backLabel": "Batayan ng Interpretasyon",
    "sections": [
      {
        "title": "Hindi kami nagbibigay ng mga numero ng lotto",
        "blocks": [
          {
            "p": "Bagaman karaniwang tinatalakay ito sa mga serbisyo ng interpretasyon ng panaginip, hindi namin ito ginagawa. **Walang batayan sa tradisyonal na interpretasyon ng panaginip para sa pagkuha ng mga numero mula sa mga panaginip.** Bagaman may mga tala ng pag-interpret ng mga panaginip tungkol sa baboy bilang kayamanan, walang patakaran sa anumang literatura na naglalabas ng anim na numero mula dito."
          },
          {
            "p": "Upang likhain ang mga ito, kailangan naming gumawa ng mga ito, at sa sandaling iyon, ang serbisyong ito ay hindi na magiging lugar para sa paghahatid ng mga interpretasyon na ipinasa ng tradisyon. Ito ay lalong nag-aalala dahil maaari itong humantong sa pagkawala ng pinansyal."
          }
        ]
      },
      {
        "title": "Hindi kami lumilikha ng mga talaarawan ng panaginip",
        "blocks": [
          {
            "p": "Bagaman magiging maginhawa na magkaroon ng tampok upang kolektahin ang mga nakaraang panaginip, kakailanganin nito na **patuloy na itago ang mga panaginip na ibinigay mo.** Ang mga kwento ng panaginip ang pinaka-pribadong aspeto ng natatanggap ng serbisyong ito, at napagpasyahan naming hindi ipagpalit iyon."
          },
          {
            "p": "Sa halip, ang mga panaginip na nais mong itago ay maaaring **kunin bilang mga larawan o dokumento.** Ang responsibilidad para sa imbakan ay nasa mga gumagamit, hindi sa amin — [Dalawang Paraan upang Itago ang Iyong mga Panaginip](/guide/reports)"
          }
        ]
      },
      {
        "title": "Hindi kami tumutukoy ng pagbubuntis o kasarian",
        "blocks": [
          {
            "p": "Sasabiin lamang namin na isang simbolo na na-interpret bilang isang a conception dream (conception dream) ang lumitaw. Kung ikaw ay buntis o kung ang bata ay isang anak na babae o lalaki ay **hindi bagay na maaaring malaman sa pamamagitan ng mga pangarap.** Ang mga ganitong pahayag ay hindi lumalabas sa screen o sa mga bayad na dokumento."
          }
        ]
      },
      {
        "title": "Hindi kami nagbebenta ng mga anting-anting o charms",
        "blocks": [
          {
            "p": "Isang simbolo na binasa bilang hindi kanais-nais ay hindi dahilan upang bumili ng kahit ano. Ang isang an ominous dream ay tradisyonal na ginamit upang **ipakita ang isang sitwasyon na dapat suriin ngayon**, hindi upang magbayad upang maiwasan ang isang bagay."
          },
          {
            "p": "Hindi kami lumilikha ng pagkabahala upang magbenta ng isang bagay batay dito. Ang tanging mga bagay na ibinenta namin ay ang dalawang nabanggit sa itaas, at wala sa mga ito ang nagbibigay ng karagdagang interpretasyon kundi **mga paraan upang itago ang parehong nilalaman.**"
          }
        ]
      },
      {
        "kind": "note",
        "title": "Hindi kami gumagawa ng mga tiyak na pahayag tungkol sa hinaharap",
        "blocks": [
          {
            "p": "Hindi kami gumagawa ng mga tiyak na pahayag tungkol sa kung may mangyayari, kung kailan ito mangyayari, o tungkol sa kalusugan, kayamanan, o habang-buhay. Ang paghahatid ng mga kahulugan ng tradisyonal na simbolo at ang paghuhula ng hinaharap ay magkaibang bagay."
          }
        ]
      },
      {
        "title": "Hindi kami gumagawa ng mga interpretasyon na hindi umiiral",
        "blocks": [
          {
            "p": "Para sa mga simbolo na hindi umiiral sa diksyunaryo, kami ay **magsasabi na hindi namin sila natagpuan.** Hindi kami bumubuo ng mga katulad na simbolo o pinupuno ang espasyo ng mga kapani-paniwalang pangungusap. Samakatuwid, ang serbisyong ito ay hindi [gumagamit ng artificial intelligence para sa dream interpretation](/guide/no-ai). Ang modelo ay hindi nagsasabi na hindi nito alam kung ano ang hindi nito alam."
          }
        ]
      }
    ]
  },
  "about": {
    "eyebrow": "Panimula",
    "title": "Panimula sa Dreams-Link",
    "summary": "Ito ay isang serbisyo na nag-iinterpret ng mga panaginip gamit ang isang tradisyonal na diksyunaryo ng simbolo ng interpretasyon ng panaginip. Nililinaw nito kung ano ang batayan at kung ano ang hindi nakasaad.",
    "backLabel": "Bumalik sa Tahanan",
    "sections": [
      {
        "title": "Ano ang ginagawa namin?",
        "blocks": [
          {
            "p": "Ang Dreams-Link ay nagahanap ng **mga simbolo na ginagamit sa tradisyonal na interpretasyon ng mga pangarap** mula sa mga pangarap na iyong isinulat at ipinapakita ang kanilang mga kahulugan. Dahil ang mga pangarap ay isang bagay na mayroon tayo araw-araw, ang mga interpretasyon na nakikita mo sa screen ay **libre at hindi nangangailangan ng membership.**"
          },
          {
            "p": "Ang tanging mga bagay na ibinibenta para sa isang bayad ay **dalawang anyo ng pagpapanatili** — isang imahe na naglalaman ng isang magandang pangarap (dream card) at isang PDF na naglalaman ng background kapag ang isang simbolo na tradisyonal na itinuturing na a conception dream ay lumitaw."
          }
        ]
      },
      {
        "title": "Ano ang batayan?",
        "blocks": [
          {
            "p": "Ang batayan para sa interpretasyon ay isang **diksiyonaryo ng {symbolTotal} simbolo**. Naghahanap kami ng mga simbolo sa teksto ng pangarap at ipinapakita lamang ang mga kahulugan na nakarehistro sa diksiyonaryo para sa mga simbolong iyon. Kung ang isang simbolo ay may maraming kahulugan, pinipili namin batay sa sitwasyon — dahil ang pagsikat ng araw at ang paglubog ng araw ay tradisyonal na itinuturing na mga kabaligtaran."
          },
          {
            "p": "Lahat ng mga kahulugan sa diksiyonaryo ay **isinalin mula sa mga orihinal na teksto ng mga lumang aklat ng interpretasyon ng mga pangarap**, at bawat kahulugan ay sinasamahan ng orihinal na teksto na nagsilbing batayan nito. Ang mga orihinal na teksto na ginamit bilang batayan ay dalawa — ang **Zhou Gong's Dream Interpretation**, na matagal nang binabasa sa Silangang Asya, at ang **Miller's Dream Book** mula sa Kanluran na inilathala noong 1901."
          },
          {
            "p": "Ang paghahanap ay ginagawa **lamang sa pamamagitan ng mga nakatakdang alituntunin**. Ang parehong pangarap ay palaging magbibigay ng parehong mga simbolo, at ang mga interpretasyon ay hindi nagbabago mula kahapon hanggang ngayon."
          }
        ]
      },
      {
        "title": "Ano ang hindi namin sinasabi?",
        "blocks": [
          {
            "p": "**Hindi kami lumilikha ng mga tradisyonal na kahulugan na wala sa diksiyonaryo.** Kung walang mga simbolo na natagpuan, sinasabi lamang namin na wala at nagtatapos. Ang pagpunan ng puwang na iyon ng mga kapani-paniwalang salita ay kung ano ang pinaka-ingat na ginagawa ng serbisyong ito."
          },
          {
            "p": "**Ang mga a conception dream ay simpleng mga indikasyon, hindi mga pagtukoy.** Ipinapaalam lamang namin sa iyo na isang simbolo na tradisyonal na itinuturing na a conception dream ang lumitaw sa pangarap. Hindi kami nag-predict ng pagbubuntis o ng kasarian ng bata, at walang batayan para sa mga ganitong pahayag."
          },
          {
            "p": "Hindi kami **gumagawa ng mga tiyak na pahayag tungkol sa kalusugan, kayamanan, o karera.** Ito ay isang sanggunian mula sa pananaw ng tradisyonal na interpretasyon ng mga pangarap at hindi medikal, pinansyal, o legal na payo."
          }
        ]
      },
      {
        "title": "Hindi namin itinatago ang mga pangarap na iyong isinulat.",
        "blocks": [
          {
            "p": "Ang mga kwento ng pangarap ay ang pinaka-pribadong bahagi ng natanggap ng serbisyong ito. Samakatuwid, **hindi namin ito iniimbak.** Ang mga input ay ginagamit lamang para sa mga kalkulasyon at hindi naitala sa anumang anyo sa server."
          },
          {
            "p": "Nagpasya kami **na hindi lumikha ng isang function upang mangolekta ng mga pangarap tulad ng isang diary ng pangarap.** Ito ay isang mahalagang tampok, ngunit mangangailangan ito ng pag-iingat sa pinaka-pribadong mga sulatin."
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Ang pamamaraan ay inilarawan nang mas detalyado sa [guide document](/guide). Ang impormasyon sa negosyo at mga detalye ng contact ay matatagpuan sa [contact us](/contact)."
          }
        ]
      }
    ]
  },
  "guide/symbol-dictionary": {
    "eyebrow": "Batayan ng serbisyo",
    "title": "Ano ang batayan ng diksiyonaryo ng simbolo?",
    "summary": "Nililinaw nito kung saan nagmumula ang mga interpretasyon. Ang mga pamantayan para sa paghahati ng {symbolTotal} simbolo sa walong kategorya, ang dahilan para sa paglalakip ng mga orihinal na teksto sa bawat kahulugan, at ang prinsipyo ng hindi pagpunan ng mga walang laman na puwang.",
    "backLabel": "Batayan ng interpretasyon",
    "sections": [
      {
        "title": "Ipinapakita lamang namin ang nakasulat sa diksiyonaryo.",
        "blocks": [
          {
            "p": "Ang mga interpretasyon ng Dreams-Link ay nagmumula sa isang **naka-prewrite na diksiyonaryo ng simbolo**. Naghahanap kami ng mga simbolo sa teksto na iyong ibinigay at ipinapakita ang mga kahulugan na nakarehistro sa diksiyonaryo para sa mga simbolong iyon gaya ng mga ito. Hindi kami lumilikha ng mga salita na wala sa diksiyonaryo."
          },
          {
            "p": "Sa kasalukuyan, ang diksiyonaryo ay naglalaman ng **{symbolTotal} simbolo**, at lahat ng mga simbolong iyon ay may kabuuang **{meaningTotal} kahulugan**. Ang ilang mga simbolo ay may isang kahulugan lamang, ngunit karamihan ay may marami, at para sa bawat kahulugan, **ang sitwasyon kung saan ang kahulugan na iyon ay naaangkop** ay nakatala rin."
          }
        ]
      },
      {
        "title": "Nahati sa walong kategorya.",
        "blocks": [
          {
            "p": "Ingrupo namin ang mga lumalabas sa mga pangarap sa walong kategorya batay sa kanilang mga katangian. Ang bilang na kasalukuyang nakalista ay nasa panaklong."
          },
          {
            "ul": [
              "**Mga Bagay**({categoryThing}) · **Mga Aksyon**({categoryAction}) · **Mga Hayop**({categoryAnimal}) — ang tatlong pinakamabigat na kategorya. Ito ang pangunahing tinalakay ng mga lumang aklat ng interpretasyon ng mga pangarap: mga nakikitang bagay, mga hayop, at mga aksyon na ginawa sa mga pangarap.",
              "**Kalikasang**({categoryNature}) · **Mga Tao**({categoryPerson}) — malalaki at sinaunang bagay tulad ng tubig, apoy, araw, at buwan, at mga tao na lumalabas sa mga pangarap tulad ng mga hari, magnanakaw, at mga yumao.",
              "**Mga Lugar**({categoryPlace}) · **Katawan**({categoryBody}) · **Mga Kulay**({categoryColor}) — mga lokasyon tulad ng mga bahay at libingan, mga bahagi ng katawan tulad ng mga ngipin, buhok, at dugo, at mga kulay."
            ]
          },
          {
            "p": "Upang makita ang mga ito ayon sa kategorya, maaari mong tingnan ang kumpletong listahan sa [symbol dictionary](/dream/symbols)."
          }
        ]
      },
      {
        "title": "Bawat kahulugan ay sinasamahan ng isang orihinal na teksto.",
        "blocks": [
          {
            "p": "Bawat isa sa **{meaningTotal} kahulugan** sa diksiyonaryo ay sinasamahan ng **orihinal na teksto** na nagsilbing batayan para sa kahulugan na iyon. Lahat ng {symbolTotal} simbolo ay may ganito — kung walang orihinal na teksto, hindi maaaring malikha ang entry."
          },
          {
            "p": "Ang mga orihinal na teksto na ginamit bilang batayan ay dalawa. Ang **Zhou Gong's Dream Interpretation** ay isang aklat ng interpretasyon ng mga pangarap na matagal nang binabasa sa Silangang Asya, at ang **Miller's Dream Book** ay isang aklat mula sa Kanluran na inilathala noong 1901. Kapag binuksan mo ang isang simbolo, makikita mo kung aling orihinal na teksto nagmula ang kahulugan, kasama ang teksto at ang kahulugan nito."
          },
          {
            "p": "**Hindi kami nag-puno ng mga walang laman na puwang.** Ang pagdaragdag ng mga kapani-paniwala na pinagmulan ay magpapabigat sa dokumento, ngunit sa sandaling iyon, ang diksiyonaryong ito ay hindi na magiging isang pagsasalin ng mga naipasa kundi isang imbensyon. Hindi kami sumusulat ng hindi nakasulat sa orihinal na teksto, at para sa aming sinusulat, dapat naming ilakip ang orihinal na teksto."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Kapag nagpapalawak, nagpalawak lamang kami mula sa orihinal na teksto.",
        "blocks": [
          {
            "p": "Sinubukan naming lumikha ng mga entry batay sa mga modelo ng simbolo, ngunit ang mga resulta ay paulit-ulit na mga salita tulad ng 「pag-ibig → magandang relasyon」 o nabigo na magbigay ng anumang batayan mula sa tradisyon. Samakatuwid, **hindi kami nagdagdag ng anumang.** Ang kasalukuyang laki ng diksiyonaryo ay dahil sa pagsasalin ng mga orihinal na teksto, hindi sa paglikha ng mga entry — ang mga dahilan para sa hindi paggamit ng mga modelo ay detalyado sa [bakit hindi kami gumagamit ng mga modelo](/guide/no-ai)."
          }
        ]
      },
      {
        "title": "Ang mabuti at masama ay itinatakda ng diksiyonaryo.",
        "blocks": [
          {
            "p": "Bawat simbolo ay sinasamahan ng mga palatandaan ng auspiciousness at inauspiciousness. **Mabuti {polarityPositive}**, **ambivalent depende sa sitwasyon {polarityAmbivalent}**, **nagbibigay ng babala {polarityNegative}**, at **neutral {polarityNeutral}**."
          },
          {
            "p": "Sa apat na kategorya, **ang pinakamarami ay ang mga nag-iiba depende sa sitwasyon.** Ito ay hindi isang bagay na aming binalanse; ito ay kung paano ito nakasulat sa mga orihinal na teksto — kahit para sa parehong simbolo, maraming mga lugar kung saan ito ay na-interpret na kabaligtaran depende sa kung ano ang ginawa. Ang halagang ito ay sumasalamin sa kalikasan ng bawat simbolo, at ang kabuuang atmospera ng pangarap ay muling kinakalkula sa pamamagitan ng pagtipon ng mga natagpuang simbolo."
          }
        ]
      }
    ]
  },
  "guide/one-symbol-many-meanings": {
    "eyebrow": "Batayan ng Serbisyo",
    "title": "Bakit ang parehong simbolo ay may iba't ibang kahulugan.",
    "summary": "Ang pagsikat ng araw at ang paglubog ng araw ay tradisyonal na itinuturing na mga kabaligtaran. Tinalakay nito ang estruktura kung saan ang {symbolTotal} simbolo ay may {meaningTotal} kahulugan at kung paano matukoy ang sitwasyon.",
    "backLabel": "Batayan ng interpretasyon",
    "sections": [
      {
        "title": "Kahit na ang mga simbolo ay pareho, ang iba't ibang sitwasyon ay nagbubunga ng iba't ibang kahulugan.",
        "blocks": [
          {
            "p": "Sa mga lumang aklat ng interpretasyon ng mga pangarap, ang isang simbolo ay hindi palaging may isang kahulugan. Kahit para sa parehong araw, **ang pagsikat ng araw at ang paglubog ng araw ay na-interpret na kabaligtaran** — ang una ay nagpapahiwatig ng kasaganaan sa sambahayan, habang ang huli ay nagpapahiwatig ng mga alalahanin tungkol sa pagkawala ng mga magulang. Ang diksiyonaryo ay nakasulat sa ganitong paraan."
          },
          {
            "p": "Ang dahilan kung bakit ang {symbolTotal} simbolo ay may kabuuang {meaningTotal} kahulugan ay dahil para sa bawat kahulugan, **ang sitwasyon kung saan ang kahulugan na iyon ay naaangkop** ay nakatala rin, kaya kung ang sitwasyong iyon ay nakikita sa teksto na iyong ibinigay, pinipili namin ang kahulugan na iyon."
          }
        ]
      },
      {
        "title": "Paano namin natutukoy ang sitwasyon?",
        "blocks": [
          {
            "p": "Tinitingnan namin kung may mga salita na nagpapahiwatig ng sitwasyon sa teksto na iyong ibinigay. Sa pariral na 「Nakita ko ang araw na lumulubog」, ang sitwasyon ng paglubog ay ipinapakita, habang sa 「Nakita ko ang araw na sumisikat」, ang sitwasyon ng pagsikat ay ipinapakita. Kung walang mga salita na nagpapahiwatig ng sitwasyon, ini-interpret namin ito batay sa **pangunahing kahulugan** ng simbolong iyon."
          },
          {
            "p": "Kaya kapag isinusulat mo ang iyong pangarap, mangyaring isama ang **hindi lamang kung ano ang lumitaw kundi pati na rin kung anong mga aksyon ang ginawa**; ito ay magpapagawa ng mas tumpak na interpretasyon. Ang pagsasabi ng \"Nakita ko ang isang baboy\" ay nagdadala ng mas kaunting impormasyon kaysa sa \"pumasok ang baboy sa bahay.\""
          }
        ]
      },
      {
        "kind": "note",
        "title": "Mas mabuti kung mas marami kang isusulat, ngunit hindi kinakailangan ng mas detalyado.",
        "blocks": [
          {
            "p": "Ilang pangungusap ay sapat na. Ang mas maraming pagsusulat ay hindi nangangahulugang mas maraming simbolo ang matutuklasan; sa halip, kung ang mga hindi kaugnay na pahayag ay nahalo, maaaring humantong ito sa maling mga simbolo."
          }
        ]
      },
      {
        "title": "Mayroong {contextSplitSymbolTotal} simbolo na may iba't ibang kahulugan.",
        "blocks": [
          {
            "p": "Sa {symbolTotal} na simbolo sa diksyunaryo, **{contextSplitSymbolTotal}** ang may mga kahulugan na nag-iiba depende sa sitwasyon. Ang natitira ay maaaring bigyang-kahulugan sa isang direksyon anuman ang sitwasyon."
          },
          {
            "p": "Ang mga **{contextSplitSymbolTotal}** simbolo na ito ay ang pinaka-sensitibo. Ang maling pagbasa sa sitwasyon ay maaaring magdulot ng paghahatid ng magandang balita bilang masamang balita, o kabaligtaran. Samakatuwid, kung ang sitwasyon ay hindi malinaw, susundin natin ang **pangunahing kahulugan ng simbolo** nang hindi pinipilit ang isang pagpipilian — ayaw nating pag-usapan ang hindi tiyak na parang ito ay tiyak."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Isinasaalang-alang din ang pakiramdam sa paggising.",
        "blocks": [
          {
            "p": "Ang mga damdamin at pag-uulit na tinanong sa ibaba ng nilalaman ng panaginip ay hindi ginagamit upang makahanap ng mga simbolo. Sinasangguni ang mga ito kapag tinutukoy kung aling paraan ang dapat bigyang-kahulugan sa mga kaso ng nag-iibang kahulugan. Hindi mo kailangang pumili; ang mga resulta ay ibibigay pa rin."
          }
        ]
      },
      {
        "title": "Ang kabuuang atmospera ng panaginip ay binibilang nang hiwalay.",
        "blocks": [
          {
            "p": "Kung maraming simbolo ang natagpuan, kinokolekta namin kung ang bawat simbolo ay positibo o nagbabala upang matukoy ang kabuuang tono ng panaginip. Ang isang panaginip na nagtatampok ng isang magandang simbolo at isang nagbabala na simbolo ay hindi basta tinatawag na \"magandang panaginip.\""
          },
          {
            "p": "Maaari mong suriin ang iba't ibang simbolo at ang kanilang mga kahulugan sa [symbol dictionary](/dream/symbols). Magandang tingnan din ang mga kasama bago isulat ang iyong panaginip."
          }
        ]
      }
    ]
  },
  "guide/good-and-bad": {
    "eyebrow": "Batayan ng serbisyo",
    "title": "Mga pamantayan para sa pagkilala sa mga auspicious at ominous na panaginip",
    "summary": "Ang apat na halaga na itinalaga sa bawat simbolo at ang kanilang pamamahagi, ang mga dahilan para sa pinaka-nag-iibang kahulugan, at kung bakit natin tinatalakay ang mga halo-halong panaginip bilang halo-halo.",
    "backLabel": "Batayan ng interpretasyon",
    "sections": [
      {
        "title": "Bawat simbolo ay itinalaga sa isa sa apat na kategorya.",
        "blocks": [
          {
            "p": "Ang {symbolTotal} na simbolo sa diksyunaryo ay bawat isa ay nakategorya bilang isa sa mga sumusunod."
          },
          {
            "ul": [
              "**Positibo {polarityPositive}** — binibigyang-kahulugan bilang mga kaaya-ayang kaganapan tulad ng kayamanan, pagdiriwang, o mga tagapagbigay.",
              "**Ambivalent {polarityAmbivalent}** — mga simbolo tulad ng araw o baboy na maaaring magkaroon ng kanilang mga kahulugan na nababaligtad depende sa mga aksyon na ginawa. **Ito ang pinaka-karaniwan at pinaka-maingat na kategorya.**",
              "**Nagbabala {polarityNegative}** — binibigyang-kahulugan bilang mga alitan, pagkalugi, o negatibong kaganapan.",
              "**Neutral {polarityNeutral}** — mga simbolo na hindi auspicious o ominous sa kanilang sarili, tulad ng mga kulay."
            ]
          }
        ]
      },
      {
        "title": "Mga dahilan para sa pinaka-nag-iibang kahulugan",
        "blocks": [
          {
            "p": "Ito ay hindi isang balanse na aming naitayo. **Ito ay kung paano nakasulat ang mga orihinal na teksto.** Ang mga lumang teksto ng interpretasyon ng panaginip ay nagtatala ng iba't ibang kahulugan para sa parehong simbolo depende sa sitwasyon, at marami sa mga sitwasyong iyon ay salungat — ang pagkuha ng baboy ay auspicious, ngunit ang pagkamatay ng baboy sa kanyang sarili ay ominous, at ganoon din ang pag-akyat at paglubog ng araw."
          },
          {
            "p": "Samakatuwid, ang katotohanan na \"isang magandang simbolo ang lumitaw\" ay hindi nangangahulugang \"mga magagandang bagay ang mangyayari.\" Ang maaari naming ipahayag ay limitado sa kung paano ang simbolong iyon ay na-interpret sa tradisyon."
          }
        ]
      },
      {
        "title": "Ang tono ng isang panaginip ay kinokolekta mula sa mga simbolo nito.",
        "blocks": [
          {
            "p": "Kung maraming simbolo ang natagpuan, kinokolekta namin ang kanilang mga auspicious at nagbabala na kahulugan upang matukoy ang kabuuang tono ng panaginip. Kung tanging mga positibong simbolo ang lumitaw, ito ay isang magandang panaginip; kung tanging mga nagbabala na simbolo ang lumitaw, ito ay isang nagbabala na panaginip; kung **halo-halo, tatalakayin natin ito bilang halo-halo.**"
          },
          {
            "p": "Hindi namin pinipilit ang isang halo-halong interpretasyon sa isang panig. Sa katotohanan, ang mga panaginip na mayroon ang mga tao ay kadalasang halo-halo, at ang pagbuo sa mga ito bilang \"isang magandang panaginip\" ay hindi tumpak o nakakatulong."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Mga salitang hindi nasabi",
        "blocks": [
          {
            "p": "Hindi kami gumagawa ng mga tiyak na pahayag tungkol sa kung ano ang mangyayari, kailan ito mangyayari, o tungkol sa kalusugan at kayamanan. Ang pagsasalin ng mga kahulugan ng tradisyonal na simbolo ay iba sa paghuhula ng hinaharap."
          }
        ]
      },
      {
        "title": "Kapag lumitaw ang mga nagbabala na panaginip",
        "blocks": [
          {
            "p": "Kahit na ang isang simbolo na itinuturing na nagbabala ay lumitaw, hindi ito nangangahulugang masamang balita. Sa tradisyonal na interpretasyon ng panaginip, ang mga ominous na panaginip ay karaniwang ginamit upang ipahiwatig **ang sitwasyon na kailangang suriin ngayon.** Kung ang isang simbolo na itinuturing na alitan ay lumitaw, maaari itong basahin bilang mungkahi na huwag magsalita."
          },
          {
            "p": "Para sa parehong dahilan, ang serbisyong ito ay hindi nagbebenta ng mga amulet o charms. Ang tanging mga bagay na ibinibenta ay [dalawang paraan upang panatilihin ang iyong mga panaginip](/guide/reports)."
          }
        ]
      }
    ]
  },
  "guide/conception-dreams": {
    "eyebrow": "Mga panaginip ng pagbubuntis",
    "title": "Paano makilala ang mga panaginip ng pagbubuntis",
    "summary": "Paano namin tinutukoy ang {conceptionSymbolTotal} na simbolo ng panaginip ng pagbubuntis, kung bakit hindi lahat ng panaginip ng baboy ay mga panaginip ng pagbubuntis, at ang prinsipyo na hindi namin tinutukoy ang pagbubuntis o kasarian.",
    "backLabel": "Batayan ng interpretasyon",
    "sections": [
      {
        "title": "Una, linawin natin.",
        "blocks": [
          {
            "p": "**Dreams-Link ay hindi tumutukoy sa katayuan ng pagbubuntis. Hindi rin namin sinasabi ang kasarian ng bata.** Ito ay hindi isang bagay na maaaring malaman sa pamamagitan ng mga panaginip, ni ito ay isang bagay na maaari naming gawin."
          },
          {
            "p": "Ang maaari naming ipahayag ay limitado sa ito — **ang katotohanan na isang simbolo na tradisyonal na itinuturing na panaginip ng pagbubuntis ay lumitaw sa panaginip na ito.** Kung paano ang simbolong iyon ay na-interpret ng mga sinaunang tao ay lahat ng maaari naming ibigay."
          }
        ]
      },
      {
        "title": "Mayroong {conceptionSymbolTotal} simbolo na itinuturing na mga panaginip ng pagbubuntis.",
        "blocks": [
          {
            "p": "Sa {symbolTotal} na simbolo sa diksyunaryo, **{conceptionSymbolTotal}** ang itinalaga bilang mga panaginip ng pagbubuntis. Marami sa mga ito ay mga hayop tulad ng mga dragon, baboy, at tigre, pati na rin ang mga prutas tulad ng mga peach, persimmon, at jujube, at kasama rin ang araw at buwan."
          },
          {
            "p": "Gayunpaman, **hindi dahil lumitaw ang simbolo na iyon ay agad na nangangahulugang ito ay isang panaginip ng pagbubuntis.** Dito naglaan ang serbisyong ito ng makabuluhang pagsisikap."
          }
        ]
      },
      {
        "title": "Tinutukoy namin batay sa napiling kahulugan, hindi sa simbolo.",
        "blocks": [
          {
            "p": "Ang baboy ay isang simbolo ng mga panaginip ng pagbubuntis, ngunit ito rin ay **kinatawan ng mga panaginip ng kayamanan.** Kung idedeklara naming ito ay isang panaginip ng pagbubuntis dahil lamang sa lumitaw ang simbolo, kung gayon ang lahat ng nangangarap ng mga baboy ay magkakaroon ng mga panaginip ng pagbubuntis. Sa katotohanan, karamihan ay na-interpret bilang mga panaginip ng kayamanan."
          },
          {
            "p": "Samakatuwid, tinitingnan namin ang **aktwal na napiling kahulugan mula sa simbolo, hindi lamang ang simbolo mismo.** Itinatala lamang namin ito bilang isang panaginip ng pagbubuntis kapag ang kahulugan na nakatuon sa pagbubuntis ay pinili batay sa sitwasyong iyong ibinigay. Kahit na sa parehong baboy, ang interpretasyon ay maaaring mag-iba batay sa pangungusap."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Kung binanggit mo ang pagbubuntis, titingnan namin iyon muna.",
        "blocks": [
          {
            "p": "Kung ang iyong pagsusulat ay may kasamang mga termino tulad ng pagbubuntis, mga panaginip ng pagbubuntis, o panganganak, bibigyan namin ng priyoridad ang kahulugan ng pagbubuntis sa mga kahulugan na hawak ng simbolo. Kahit na ang parehong panaginip ay maaaring bigyang-kahulugan nang iba batay sa kasalukuyang sitwasyon."
          }
        ]
      },
      {
        "title": "Ang dahilan para magkaroon ng hiwalay na ulat ng panaginip ng pagbubuntis.",
        "blocks": [
          {
            "p": "Ang mga panaginip ng pagbubuntis ay may ibang layunin kaysa sa ibang mga panaginip. Kadalasan silang tinatalakay nang matagal pagkatapos ipanganak ang bata at ibinabahagi sa mga miyembro ng pamilya. Samakatuwid, sa halip na tingnan lamang ito sa isang screen, lumikha kami ng isang **dokumento na maaaring itago.**"
          },
          {
            "p": "Ang mga kasama ay nakabalangkas sa [dalawang paraan upang panatilihin ang iyong mga panaginip](/guide/reports). Maaari mong tingnan ang lahat ng interpretasyon nang hindi ito binibili."
          }
        ]
      }
    ]
  },
  "guide/how-to-write": {
    "eyebrow": "Paano Gamitin",
    "title": "Paano Sumulat ng Panaginip",
    "summary": "Kung isusulat mo ang nakita at ginawa mo, ito ay ma-iinterpret nang maayos. Ipinaliwanag namin kung bakit ang isang solong pandiwa ang nagtatakda ng kahulugan, at kung bakit tinatanong din namin kung ano ang naramdaman mo at kung ang panaginip ay umuulit.",
    "backLabel": "Batayan ng interpretasyon",
    "sections": [
      {
        "title": "Mangyaring isulat ang nakita at ginawa mo",
        "blocks": [
          {
            "p": "Walang tiyak na format. Dalawa o tatlong pangungusap, gaya ng karaniwan mong sinasabi, ay sapat na. Gayunpaman, ang maayos na interpretasyon ay nakabatay sa — **kung ano ang nakita mo** at **kung ano ang nangyari**."
          },
          {
            "ul": [
              "Maayos na interpretasyon — 「Isang malaking ahas ang nakabalot sa akin」, 「Nakita kong umaagos ang malinaw na tubig」, 「Nahulog ang aking ngipin nang mag-isa」",
              "Hindi na-interpret — 「Natakot ako」, 「Nakaramdam ako ng kakaiba」, 「Parang may taong galit sa akin」"
            ]
          },
          {
            "p": "Kung isusulat mo lamang ang iyong mga damdamin, walang mga simbolo na matutukoy. Ang tradisyunal na dream interpretation ay nagsasalita tungkol sa [mga bagay at aksyon](/guide/categories), hindi emosyon."
          }
        ]
      },
      {
        "title": "Ang pagsusulat ng iyong ginawa ay nagpapadali sa pagiging tumpak",
        "blocks": [
          {
            "p": "Kahit ang parehong simbolo ay maaaring magkaroon ng iba't ibang kahulugan depende sa sitwasyon, na may {contextSplitSymbolTotal} na mga kaso. Ang pagsikat at paglubog ng araw ay tradisyunal na na-interpret sa magkasalungat na paraan."
          },
          {
            "p": "Samakatuwid, ang 「Nakita ko ang isang baboy」 ay hindi gaanong tumpak kaysa sa 「Pumasok ang baboy sa bahay」, at ang 「May tubig」 ay hindi gaanong tumpak kaysa sa 「Uminom ako ng malinaw na tubig」. **Isang pandiwa ang nagtatakda ng kahulugan.**"
          }
        ]
      },
      {
        "title": "Ang dahilan para tanungin ang tungkol sa mga damdamin at pag-uulit",
        "blocks": [
          {
            "p": "Sa ibaba ng nilalaman ng panaginip, mayroong isang lugar upang pumili ng **kung paano ka nakaramdam nang magising ka** at **kung mayroon kang mga paulit-ulit na panaginip**. Hindi mo kailangang piliin ang pareho para makuha ang mga resulta."
          },
          {
            "p": "Ang mga halagang ito ay hindi ginagamit upang makahanap ng mga simbolo. Sinasalamin ang mga ito kapag nagpapasya **kung aling kahulugan ang pipiliin** mula sa parehong simbolo at kung paano ipahayag ang mga resulta. Ang mga paulit-ulit na panaginip ay tradisyunal na tiningnan nang iba mula sa isang panaginip na naranasan lamang minsan."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Sa mga kasong binabanggit ang pagbubuntis",
        "blocks": [
          {
            "p": "Kung ang teksto ay naglalaman ng mga salitang tulad ng pagbubuntis, conception dream, o panganganak, tinitingnan muna namin ang kahulugan ng conception-dream ng simbolong iyon. Kahit ang parehong panaginip tungkol sa baboy ay na-interpret nang iba ng mga sinaunang tao depende sa sitwasyon — [kung paano makilala ang 태몽](/guide/conception-dreams)"
          }
        ]
      },
      {
        "title": "Walang pangangailangan na magsulat ng mahaba",
        "blocks": [
          {
            "p": "Ang mas mahabang haba ay hindi nangangahulugang mas maraming simbolo ang matutukoy. Sa katunayan, kung ang mga hindi nauugnay na salita ay mahahalo nang mahaba, may mas mataas na pagkakataon na ang mga hindi kaugnay na salita ay ma-interpret bilang mga simbolo. Mangyaring isulat lamang ang **mga alaala na eksena**."
          },
          {
            "p": "Ang teksto na isusulat mo ay hindi mase-save kahit saan. Ang dahilan kung bakit maaari kang magsulat nang malaya ay ipinaliwanag sa [pamamaraan ng hindi pag-save](/guide/no-storage)."
          }
        ]
      }
    ]
  },
  "guide/categories": {
    "eyebrow": "Batayan ng Serbisyo",
    "title": "Mga Pamantayan na Nahahati sa Walong Kategorya",
    "summary": "Walong kategorya — mula sa mga bagay, aksyon at hayop hanggang sa katawan at mga kulay — na may bilang ng mga simbolo na hawak ng bawat isa, at kung bakit walang kategorya para sa mga emosyon.",
    "backLabel": "Batayan ng Interpretasyon",
    "sections": [
      {
        "title": "Nahati sa walong kategorya ng mga lumalabas sa mga panaginip",
        "blocks": [
          {
            "p": "Pinagsama-sama namin ang {symbolTotal} na mga simbolo sa walong kategorya ayon sa kanilang katangian. Ang tanong sa paghahati ay **kung ano ang lumalabas sa panaginip** — isang hayop, isang bagay, o isang bagay na ginawa mo."
          },
          {
            "ul": [
              "**Mga Bagay {categoryThing}** — mga nakahawak na bagay tulad ng pera, salamin, at kutsilyo. Ito ang pinakamakapal na kategorya.",
              "**Mga Aksyon {categoryAction}** — mga bagay na ginawa o naranasan sa panaginip, tulad ng pagligo, pagdiriwang, o pinapalo.",
              "**Mga Hayop {categoryAnimal}** — mga dragon, baboy, ahas, at baka. Marami sa mga ito ay tiningnan bilang 태몽.",
              "**Kalikasan {categoryNature}** — malalaki at sinaunang bagay tulad ng tubig, apoy, araw, at buwan.",
              "**Mga Tao {categoryPerson}** — mga taong lumalabas sa mga panaginip, tulad ng mga hari, magnanakaw, at mga yumaong indibidwal.",
              "**Mga Lugar {categoryPlace}** — mga lokasyon kung saan nagaganap ang mga panaginip, tulad ng mga bahay, balon, at libingan.",
              "**Katawan {categoryBody}** — mga ngipin, buhok, dugo. Ang kahulugan ay nag-iiba depende sa kung saan sa katawan ito naroroon.",
              "**Mga Kulay {categoryColor}** — wala silang likas na mabuti o masama at na-interpret batay sa kung ano ang kanilang kaugnayan."
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ang dahilan kung bakit walang mga kategoryang numerikal",
        "blocks": [
          {
            "p": "Hindi kami lumikha ng kategorya para sa mga numero tulad ng 「tatlo」 o 「pito」. **Walang alinman sa dalawang orihinal na teksto ang nagtakda ng numero bilang isang entry.** Upang buksan ang kategoryang iyon at punan ito, kailangan naming magsulat ng isang bagay na hindi lumalabas sa alinman sa mga teksto."
          }
        ]
      },
      {
        "title": "Bakit walang kategoryang emosyonal",
        "blocks": [
          {
            "p": "Hindi kami lumikha ng kategorya para sa mga damdamin tulad ng 「pagkabalisa」 o 「pagkamiss」. **Ito ay dahil hindi binanggit ng mga sinaunang teksto ng dream interpretation ang mga emosyon.** Parehong orihinal na teksto ay nagsasalita tungkol sa kung ano ang nakita at kung ano ang nangyari, hindi ang mga damdamin ng mangarap bilang isang paksa ng interpretasyon."
          },
          {
            "p": "Sinubukan naming bumuo ng isang kategorya para sa mga emosyon, at ang lumabas ay mga terminong tulad ng 「pagkawala ng pagmamahal」 at 「emosyonal na katatagan」. Ang mga ito ay hindi **mga anyo** na lumalabas sa mga panaginip kundi bokabularyo mula sa modernong sikolohiya. Iyon ay isang ibang uri ng serbisyo at hindi ang layunin ng diksyunaryong ito."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Kaya kapag nagsusulat ka",
        "blocks": [
          {
            "p": "Mangyaring isulat ang **kung ano ang nakita at ginawa mo** sa halip na mga damdamin, dahil mas mabuti itong ma-interpret. Gayunpaman, kami ay nagtatanong nang hiwalay tungkol sa kung paano ka nakaramdam nang magising ka — ito ay sinasalamin sa mga sitwasyon kung saan ang mga kahulugan ay maaaring mag-iba kahit para sa parehong simbolo."
          }
        ]
      },
      {
        "title": "Ang mga kulay ay hindi ginagamit nang nag-iisa",
        "blocks": [
          {
            "p": "Ang mga kulay {categoryColor} ay walang likas na mabuti o masama. Tulad ng ang mga asul na ahas at pulang ahas ay na-interpret nang iba, ang kanilang mga kahulugan ay nagbabago batay sa **kung ano ang kanilang kaugnayan**. Samakatuwid, ang kategoryang ito ay itinuturing na mga halaga na binabasa kapag lumalabas kasama ng iba pang mga simbolo."
          },
          {
            "p": "Ang kumpletong listahan ayon sa kategorya ay makukuha sa [Diksyunaryo ng Simbolo](/dream/symbols). Kapag binuksan mo ang isang simbolo, ang naipahayag na kahulugan, kategorya, at mga kaugnay na simbolo ay ibibigay."
          }
        ]
      }
    ]
  },
  "guide/not-found": {
    "eyebrow": "Paano Gamitin",
    "title": "Kapag Walang Natagpuang Simbolo",
    "summary": "Kung walang natagpuan, sinasabi naming wala. Saklaw namin kung bakit nangyayari iyon, kung ano ang ipinapakita namin sa screen na iyon sa halip, at kung paano pinalawak ang diksyunaryo.",
    "backLabel": "Batayan ng Interpretasyon",
    "sections": [
      {
        "title": "Kapag wala kaming natagpuan, sinasabi naming wala kaming natagpuan",
        "blocks": [
          {
            "p": "Kung hindi kami makahanap ng isang simbolo sa teksto na isinulat mo, **sinasabi naming wala kaming natagpuan.** Hindi kami nagpipilit ng katulad na simbolo dito, o nagsusulat ng isang kapani-paniwala na pangungusap upang punan ang puwang."
          },
          {
            "p": "Ito ang pinaka-nababahalang isyu para sa serbisyong ito. Sa sandaling punan mo ang puwang, ang interpretasyon na lumalabas at kung ano ang talagang ginawa ay nagkakaiba."
          }
        ]
      },
      {
        "title": "Bakit hindi ito matagpuan?",
        "blocks": [
          {
            "p": "Karaniwan, isa ito sa mga sumusunod."
          },
          {
            "ul": [
              "**Ito ay isang simbolo na hindi pa nasa diksyunaryo.** Sa kasalukuyan, mayroong {symbolTotal} na mga simbolo na nakalista, ngunit marami pang iba na maaaring lumabas sa mga panaginip.",
              "**Isinulat mo lamang ang iyong mga damdamin.** Kung mayroon ka lamang mga emosyon tulad ng \"Natakot ako\" o \"Naramdaman kong kakaiba,\" walang mga simbolo na maaaring matukoy. Ang tradisyonal na dream interpretation ay tumutukoy sa **mga nakikitang bagay at aksyon**, hindi mga emosyon.",
              "**Masyadong maikli.** Mas mabuti na magsulat sa mga pangungusap kaysa sa isang o dalawang salita lamang."
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Kapag sinubukan mong magsulat muli",
        "blocks": [
          {
            "p": "Mangyaring isama ang **kung ano ang nakita mo at kung ano ang ginawa mo** sa panaginip. Ang pagsasabi ng \"nabalisa ako\" ay hindi gaanong epektibo kaysa sa pagsasabi ng \"nahulog ang aking mga ngipin nang mag-isa,\" at ang \"nagustuhan ko ito\" ay hindi gaanong epektibo kaysa sa pagsasabi ng \"nakita kong umaagos ang malinaw na tubig.\""
          }
        ]
      },
      {
        "title": "Hindi kami nag-iiwan ng blangkong screen",
        "blocks": [
          {
            "p": "Kapag may hindi matatagpuan, ipinapakita rin namin ang **{popularSymbolCount} madalas na hinahanap na mga simbolo** sa screen na iyon. Ang mga ito ay pinili mula sa pinaka-representatibo sa diksyunaryo, na makakatulong sa iyo na maalala kung isa sa mga ito ay nasa iyong panaginip."
          },
          {
            "p": "Kung nais mong mag-browse sa lahat, makikita mo ang {symbolTotal} mga simbolo na nakaayos ayon sa kategorya sa [symbol dictionary](/dream/symbols). Ang bawat simbolo ay may kasamang kahulugan at mga kaugnay na simbolo."
          }
        ]
      },
      {
        "title": "Paano lalawak ang diksyunaryo sa hinaharap?",
        "blocks": [
          {
            "p": "Sa halip na dagdagan ang mga numero, nakatuon kami muna sa **tamang pagtukoy sa kung ano ang naroroon na.** Isinama namin ang {aliasTotal} mga alternatibong pangalan para sa parehong mga simbolo, at siniguro naming ang mga salitang may mga suffix na nagbabago ng kanilang anyo ay maaari ring matukoy."
          },
          {
            "p": "Kapag pinalawak ang mga simbolo mismo, isinasama lamang namin ang **kung ano ang nakasulat sa orihinal na teksto.** Kung ang isang kahulugan ay walang katumbas na orihinal na parirala, hindi gagawa ng entry — ang simpleng pagdaragdag ng mga numero nang walang batayan ay nagiging paglikha, hindi isang diksyunaryo. Ang mga dahilan para sa pagtatangkang ito at ang mga resulta nito ay nakadokumento sa [bakit hindi kami gumagamit ng mga modelo](/guide/no-ai)."
          }
        ]
      }
    ]
  },
  "guide/no-ai": {
    "eyebrow": "Batayan ng Serbisyo",
    "title": "Mga dahilan para hindi gumamit ng artipisyal na katalinuhan sa dream interpretation",
    "summary": "Walang code na tumatawag sa isang modelo upang lumikha ng mga interpretasyon. Ito ay resulta ng pagtatangkang palawakin ang diksyunaryo gamit ang isang modelo at kung ano ang nakuha at kung ano ang isinakripisyo bilang resulta.",
    "backLabel": "Batayan ng Interpretasyon",
    "sections": [
      {
        "title": "Hindi ginagamit ang artipisyal na katalinuhan sa dream interpretation",
        "blocks": [
          {
            "p": "Maraming kasalukuyang serbisyo sa dream interpretation ang nagpapakita ng mga sulatin na nalikha sa pamamagitan ng pagpasok ng mga kwento ng pangarap sa mga generative model. Ang Dreams-Link ay hindi gumagawa nito. **Walang code na tumatawag sa isang modelo upang lumikha ng mga interpretasyon.**"
          },
          {
            "p": "Ang ginagawa namin ay simple. Hinahanap namin ang mga simbolo sa teksto na ibinibigay mo at pinipili ang mga kahulugan na nakasulat ng diksyunaryo tungkol sa mga simbolong iyon. Walang puwang para sa mga pangungusap na wala sa diksyunaryo."
          },
          {
            "p": "Ang diksyunaryo mismo ay hindi nilikha ng isang modelo. Bawat kahulugan ay sinasamahan ng **kung aling talata mula sa orihinal na teksto ng dream interpretation ito nagmula**, at ang talatang iyon ay inihahambing ng salita-sa-salita sa orihinal na file."
          }
        ]
      },
      {
        "title": "Bakit ginawa ang desisyong ito?",
        "blocks": [
          {
            "p": "**Hindi sinasabi ng mga modelo na hindi nila alam kung ano ang hindi nila alam.** Kapag tinanong tungkol sa mga simbolo na walang nakasaad na batayan, nag-iimbento sila ng mga kapani-paniwalang pinagmulan. At kung ito ay imbento o hindi ay isang bagay na hindi kayang matukoy ng mambabasa. Kung ang paglikha ay ipinasok sa lugar ng pagpapahayag ng tradisyon, bumabagsak ang premise ng serbisyo."
          },
          {
            "p": "Sinubukan naming hayaan ang isang modelo na lumikha ng mga simbolo upang palawakin ang diksyunaryo. Mula sa animnapu't anim na halimbawa na pinili bilang karapat-dapat sa pagtanggap, **limampu't lima ang hindi makapagbigay ng anumang naipahayag na batayan**, at mayroon ding mga halimbawa tulad ng subway at highway na hindi maaaring umiral sa tradisyonal na dream interpretation. Samakatuwid, **wala sa mga ito ang isinama.**"
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ganito rin ang nangyari kahit na sa mas malaking modelo",
        "blocks": [
          {
            "p": "Nang patakbuhin namin ang parehong bagay sa isang mas mahusay na modelo, isa sa labing siyam ang pumasa, at iyon ay simpleng pag-uulit ng parehong salita na may parehong batayan. Ang mas malaking modelo ay nagsasalita lamang ng **mas kapani-paniwala** tungkol sa kung ano ang hindi nito alam."
          }
        ]
      },
      {
        "title": "Ang mga benepisyo ng hindi paggamit ng modelo",
        "blocks": [
          {
            "ul": [
              "**Kung ito ay parehong panaginip, ang parehong interpretasyon ay lalabas.** Ang mga salita ay hindi nagbabago sa tuwing titingnan mo ito.",
              "**Mabilis ito.** Walang paghihintay para sa tugon ng modelo, kaya agad na magagamit ang mga resulta.",
              "**Ang panaginip na isinulat mo ay hindi lumalabas.** Walang pangangailangan na ipadala ito sa server ng isang panlabas na kumpanya — mangyaring basahin ito kasama ng [pamamaraan na hindi nagse-save](/guide/no-storage).",
              "**Maaari itong ialok nang libre.** Ang mga panaginip ay isang bagay na mayroon tayo araw-araw, kaya maraming mga pagtatanong. Kung isang modelo ang tatawagin para sa bawat pagtatanong, ang gastos ay dapat masakop mula sa kung saan."
            ]
          }
        ]
      },
      {
        "title": "Sa halip, ano ang isinakripisyo",
        "blocks": [
          {
            "p": "Hindi namin ma-interpret ang hindi nasa diksyunaryo. Kung ginamit namin ang isang modelo, magkakaroon ng kapani-paniwalang sagot para sa anumang isinulat mo. Pinili naming **sabihin na hindi namin ito mahanap kapag hindi namin ito mahanap.** Ang ipinapakita namin sa oras na iyon ay nakadokumento sa [kapag hindi matatagpuan ang isang simbolo](/guide/not-found)."
          }
        ]
      }
    ]
  },
  "guide/reports": {
    "eyebrow": "Bayad na Produkto",
    "title": "Dalawang Paraan upang Panatilihin ang Iyong mga Panaginip",
    "summary": "Ang interpretasyon mismo ay hindi nagdudulot ng bayad. Ipinaliwanag nito kung ano ang dalawang bayad na opsyon, kung ano ang nilalaman nila, at kung bakit hindi sila mas mahusay na mga interpretasyon.",
    "backLabel": "Batayan ng Interpretasyon",
    "sections": [
      {
        "title": "Ang interpretasyon mismo ay hindi nagdudulot ng bayad",
        "blocks": [
          {
            "p": "Ang pagsusulat ng iyong panaginip at pagtingin kung anong mga simbolo ang kasama **ay hindi nagkakahalaga ng pera at hindi nangangailangan ng membership.** Dahil ang mga tao ay nangangarap araw-araw, hinusgahan naming dapat itong ialok nang libre."
          },
          {
            "p": "**Ang dalawang bayad na opsyon ay hindi mas mahusay na mga interpretasyon.** Sila ay **dalawang paraan upang panatilihin ang parehong interpretasyon.** Ang nilalaman na nakikita mo sa screen ay hindi nagbabago pagkatapos ng bayad."
          }
        ]
      },
      {
        "title": "Dream Card — Isang Imahe",
        "blocks": [
          {
            "p": "Ipinapakita namin ang mga simbolo na natagpuan sa iyong panaginip at ang kanilang mga kahulugan sa **isang imahe.** Ito ay isang file ng imahe, hindi isang PDF, kaya maaari mo itong i-save nang ganoon o ipadala ito sa iba."
          },
          {
            "p": "Ito ay para sa mga nakakaranas ng panghihinayang kapag ang isang magandang panaginip ay nawawala pagkatapos isara ang screen. Dahil hindi namin sine-save ang mga panaginip, ito ang tanging paraan upang mapanatili ang mga ito kung nais mong itago ang mga ito."
          }
        ]
      },
      {
        "title": "Ulat ng a conception dream — Dokumento na {conceptionPages} na pahina",
        "blocks": [
          {
            "p": "Gumagawa kami ng isang **{conceptionPages}-page na dokumento** tungkol sa mga pangarap na nagpapakita ng mga simbolo na nagpapahiwatig ng isang a conception dream. Kasama rito kung aling mga simbolo ang lumitaw, kung paano ang mga simbolong iyon ay tradisyonal na na-interpret, at isang espasyo upang itala ang impormasyong iyon."
          },
          {
            "p": "Ang mga a conception dream ay madalas na pinag-uusapan at ibinabahagi sa mga miyembro ng pamilya kahit na pagkatapos ipanganak ang bata, kaya't lumikha kami ng isang hiwalay na dokumento para sa mga pangarap na masyadong mahalaga upang tingnan lamang sa screen."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Mga salitang hindi ginamit dito",
        "blocks": [
          {
            "p": "Hindi kami gumagawa ng mga paghuhusga tungkol sa katayuan ng pagbubuntis o kasarian ng bata. Ang mga ganitong pahayag ay hindi kasama sa dokumento. Para sa karagdagang detalye, mangyaring sumangguni sa [kung paano na-filter ang mga a conception dream](/guide/conception-dreams)."
          }
        ]
      },
      {
        "title": "Bakit wala nang dokumento?",
        "blocks": [
          {
            "p": "Ang serbisyo ng kapatid ay gumagawa ng isang ulat na siyam na pahina. Ito ay dahil ang saju engine ay kumukuha ng maraming halaga mula sa isang solong petsa ng kapanganakan. Ang dream interpretation sa tradisyon ng Korea ay hindi gumagana sa ganitong paraan."
          },
          {
            "p": "Ang diksyunaryo ay naglalaman ng {symbolTotal} mga simbolo at {meaningTotal} mga kahulugan, ngunit **ilang mga simbolo lamang ang talagang naaangkop sa isang solong panaginip.** Upang palawakin iyon sa siyam na pahina, kinakailangan na magsulat ng mga bagay na hindi matatagpuan sa anumang orihinal na teksto, at iyon mismo ang pinili ng serbisyong ito na hindi gawin. Samakatuwid, ang dokumento ay kasing haba ng pinapayagan ng mga materyales nang tapat, at hindi na mas mahaba."
          }
        ]
      },
      {
        "title": "Mga Halaga at Kakayahang Magamit",
        "blocks": [
          {
            "p": "Ang mga presyo ay makikita sa [pricing guide](/pricing). Ang dahilan kung bakit hindi nakalista ang mga halaga sa dokumentong ito ay sinadya — upang maiwasan ang mga sitwasyon kung saan ang dokumento ng gabay ay nananatili na may mga luma at hindi napapanahong halaga kapag nagbago ang mga halaga. Ang screen at mga termino ay lahat nagbabasa ng mga halaga mula sa parehong lugar."
          },
          {
            "p": "Ang dokumentong binayaran mo ay **maaaring matanggap muli sa parehong order.** Gayunpaman, dahil hindi kami nag-iimbak ng mga file, hindi ito maibabalik kapag umalis ka sa screen ng mga resulta — mangyaring itago ang file na natanggap mo."
          }
        ]
      }
    ]
  }
} satisfies Record<DocKey, DocPage>;

export const FIL_NOTICES = {
  "kindLabels": {
    "service": "Serbisyo",
    "product": "Ulat",
    "engine": "Kalkulasyon",
    "support": "Suporta"
  },
  "intro": "Ang mga pagbabago sa iyong mga tuntunin ng paggamit — mga presyo, patakaran — ay nai-post dito bago ito magkabisa. Ang mga panloob na pagpapabuti tulad ng pagpapabilis ng screen ay hindi nai-post dito: ang nakapaskil dito ay ang kailangan mong malaman.",
  "empty": {
    "title": "Walang nai-post na abiso",
    "body": "Kung mayroong anumang mga pagbabago na dapat ipaalam sa iyo, ito ay ipo-post dito."
  },
  "effective": "Epektibo mula sa {date}",
  "pager": {
    "label": "Pahina ng Abiso",
    "newer": "← Pinakabago",
    "older": "Nakaraang Mga Abiso →"
  },
  "items": {
    "2026-08-06-no-storage": {
      "title": "Ang panaginip na ibinigay mo ay hindi nakaimbak.",
      "body": [
        "Ang mga kwento ng panaginip ay ang pinaka-pribadong halaga na natatanggap ng serbisyong ito. Samakatuwid, hindi ito naitala sa anumang talahanayan. Ang input ay dinadala lamang sa address ng resulta para sa kalkulasyon, at kapag ang bintana ay isinara, ito ay nawawala.",
        "Nagpasya kaming hindi lumikha ng tampok na nag-iipon ng mga panaginip at nagpapakita ng daloy (panaginip na talaarawan). Ito ay isang kapaki-pakinabang na tampok, ngunit upang gawin ito, ang pinaka-pribadong mga sulatin ay dapat na patuloy na nakaimbak.",
        "Kapag ipinadala mo ang link ng resulta sa iba, naglalaman ito ng nilalaman ng panaginip. Mangyaring mag-ingat kapag nagbabahagi."
      ]
    },
    "2026-08-06-engine-version": {
      "title": "Kasama sa mga resulta ang simbolo ng diksyunaryo at mga pamantayan ng kalkulasyon.",
      "body": [
        "Ang batayan para sa interpretasyon ay ang tradisyonal na diksyunaryo ng simbolo ng interpretasyon ng panaginip. Ang mga resulta at dokumento ay isasama ang bersyon ng diksyunaryong iyon (hal., 1.2.0) at ang bersyon ng mga patakaran ng pagtutugma (halimbawa, panaginip-1.0.0). Ang parehong panaginip ay palaging magbibigay ng parehong simbolo batay sa parehong pamantayan.",
        "Kung magdadagdag kami ng mga simbolo sa diksyunaryo o babaguhin ang mga kahulugan sa paraang makakaapekto sa mga resulta, ang katotohanang ito ay ipapakita dito. Ito ay dahil ang mga resulta na natanggap mo dati ay maaaring magbago.",
        "Hindi kami lumilikha ng mga tradisyonal na kahulugan na wala sa diksyunaryo. Kung walang mga simbolo na natagpuan, simpleng sinasabi namin na wala at nagtatapos."
      ]
    },
    "2026-08-06-conception": {
      "title": "Ipinapaalam lamang namin sa iyo ang tungkol sa isang a conception dream at hindi kami gumagawa ng mga paghuhusga.",
      "body": [
        "Kung ang mga simbolo na tradisyonal na itinuturing na a conception dream ay lumitaw sa pangarap, ipapaalam namin sa iyo ang katotohanang iyon. Gayunpaman, hindi namin tinutukoy ang katayuan ng pagbubuntis o kasarian ng bata — ang mga ganitong pahayag ay walang batayan, at ang mga medikal na paghuhusga ay responsibilidad ng mga institusyong medikal.",
        "Ang pagbanggit ng mga anak na lalaki at babae sa mga tradisyonal na salaysay ay isang repleksyon ng mga kaugalian na naipasa, at hindi ito nangangahulugang tama ang aming mga hula."
      ]
    }
  }
} satisfies NoticeCopy;
