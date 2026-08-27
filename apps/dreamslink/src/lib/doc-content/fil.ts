import type { DocPage, NoticeCopy } from "./types";
import type { DocKey } from "./ko";

/** Filipino — `scripts/translate-doc-content.ts`가 만든다. 손으로 고치지 말 것. */
export const FIL_DOCS = {
  "about": {
    "eyebrow": "Panimula",
    "title": "Panimula sa Dreams-Link",
    "summary": "Ito ay isang serbisyo na nag-iinterpret ng mga pangarap gamit ang isang tradisyonal na diksyunaryo ng simbolo para sa dream interpretation. Nililinaw nito kung ano ang ginagamit bilang batayan at kung ano ang hindi nabanggit.",
    "backLabel": "Bumalik sa Tahanan",
    "sections": [
      {
        "title": "Ano ang ginagawa namin?",
        "blocks": [
          {
            "p": "Ang Dreams-Link ay naghahanap ng **mga simbolo na ginagamit sa tradisyonal na dream interpretation** mula sa mga pangarap na iyong isinulat at ipinapakita ang kanilang mga kahulugan. Dahil ang mga pangarap ay isang bagay na ating nararanasan araw-araw, ang mga interpretasyon na ipinapakita sa screen ay **libre at hindi nangangailangan ng membership.**"
          },
          {
            "p": "Ang tanging mga bagay na ibinibenta para sa bayad ay **dalawang anyo ng pag-iingat** — isang imahe (dream card) na naglalaman ng magandang panaginip at isang PDF na kumukuha ng background kapag ang isang simbolo na tradisyonal na itinuturing na isang a conception dream ay lumitaw."
          }
        ]
      },
      {
        "title": "Ano ang batayan para sa interpretasyon?",
        "blocks": [
          {
            "p": "Ang batayan para sa interpretasyon ay isang **diksyunaryo ng {symbolTotal} simbolo**. Naghahanap kami ng mga simbolo sa teksto ng pangarap at ipinapakita lamang ang mga kahulugan na nakarehistro sa diksyunaryo para sa mga simbolong iyon. Kung ang isang simbolo ay may maraming kahulugan, pinipili namin batay sa konteksto — halimbawa, ang paghawak sa isang ahas at ang pagkakagat ay tradisyonal na itinuturing na magkasalungat."
          },
          {
            "p": "Ang paghahanap ay ginagawa **ayon lamang sa mga nakatakdang alituntunin**. Kung ito ay parehong pangarap, ang parehong mga simbolo ay palaging lilitaw, at ang interpretasyon ay hindi magbabago mula kahapon hanggang ngayon."
          }
        ]
      },
      {
        "title": "Ano ang hindi namin sinasabi?",
        "blocks": [
          {
            "p": "**Hindi kami nag-iimbento ng mga tradisyonal na kahulugan na wala sa diksyunaryo.** Kung walang mga simbolo na natagpuan, simpleng sinasabi namin na wala at nagtatapos. Ang pagpunan sa espasyong iyon ng mga kapani-paniwalang salita ay kung ano ang pinaka-ingat na ginagawa ng serbisyong ito."
          },
          {
            "p": "**Ang isang a conception dream ay simpleng tanda lamang, hindi isang hatol.** Ipinapaalam lamang namin sa iyo na isang simbolo na tradisyonal na itinuturing na isang a conception dream ang lumitaw sa panaginip. Hindi kami nag-predict ng pagbubuntis o kasarian ng bata, at walang batayan para sa mga ganitong pahayag."
          },
          {
            "p": "Hindi kami **gumagawa ng mga tiyak na pahayag tungkol sa kalusugan, kayamanan, o karera.** Ito ay isang sanggunian mula sa pananaw ng tradisyonal na dream interpretation at hindi medikal, pinansyal, o legal na payo."
          }
        ]
      },
      {
        "title": "Hindi namin itinatago ang mga pangarap na iyong isinulat.",
        "blocks": [
          {
            "p": "Ang mga kwento ng pangarap ay ang pinaka-pribadong bahagi ng natatanggap ng serbisyong ito. Samakatuwid, **hindi namin ito iniimbak.** Ang iyong ipinasok ay dinadala lamang sa URL at ginagamit para sa pagbasa; hindi ito naitala sa anumang talahanayan sa aming mga server."
          },
          {
            "p": "Nagpasya kami **na hindi lumikha ng isang function upang mangolekta ng mga pangarap tulad ng isang diary ng pangarap.** Ito ay isang mahalagang tampok, ngunit mangangailangan ito ng pagpapanatili ng pinaka-pribadong mga isinulat."
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
  "guide": {
    "eyebrow": "Batayan para sa Pagkalkula",
    "title": "Ano ang batayan para sa pagkalkula?",
    "summary": "Ipinapahayag namin ang lahat ng mga alituntunin na ginagamit ng Dreams-Link. Maaari mong suriin kung aling mga simbolo ang natagpuan, kung ano ang nakasulat sa diksyunaryo — kung saan nagmumula ang mga interpretasyon na ipinapakita sa screen.",
    "backLabel": "Bumalik sa Tahanan",
    "sections": [
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Lahat ng mga numerong nakasulat dito ay **direktang binasa mula sa diksyunaryo ng simbolo at ang mga patakaran sa pagtutugma.** Dahil hindi namin manu-manong isinusulat ang teksto, kung ang diksyunaryo ay pinalawak o ang mga patakaran ay binago, ang mga numero sa mga dokumentong ito ay magbabago rin."
          }
        ]
      }
    ]
  },
  "guide/symbol-dictionary": {
    "eyebrow": "Batayan para sa Serbisyo",
    "title": "Ano ang batayan ng diksyunaryo ng simbolo?",
    "summary": "Nililinaw nito kung saan nagmumula ang mga interpretasyon. Ang mga pamantayan para sa paghahati ng {symbolTotal} simbolo sa siyam na kategorya, ang dahilan kung bakit {cultureNoteTotal} lamang ang maaaring patunayan, at kung bakit hindi namin pinupunan ang mga puwang.",
    "backLabel": "Batayan para sa Interpretasyon",
    "sections": [
      {
        "title": "Ipinapakita lamang namin ang nakasulat sa diksyunaryo.",
        "blocks": [
          {
            "p": "Ang mga interpretasyon mula sa Dreams-Link ay nagmumula sa isang **naka-prewrite na diksyunaryo ng simbolo**. Naghahanap kami ng mga simbolo sa teksto na iyong ibinigay at ipinapakita ang mga kahulugan na nakarehistro sa diksyunaryo para sa mga simbolong iyon. Hindi kami lumilikha ng mga salita na wala sa diksyunaryo."
          },
          {
            "p": "Sa kasalukuyan, ang diksyunaryo ay naglalaman ng **{symbolTotal} simbolo**, at ang mga simbolong iyon ay may kabuuang **{meaningTotal} kahulugan**. Karamihan sa mga simbolo ay may isang kahulugan lamang, habang ang ilan ay may maraming depende sa konteksto."
          }
        ]
      },
      {
        "title": "Nahati sa siyam na kategorya.",
        "blocks": [
          {
            "p": "Pinagsama-sama namin ang mga lumalabas sa mga pangarap sa siyam na kategorya batay sa kanilang mga katangian. Ang mga numero sa loob ng panaklong ay ang kasalukuyang bilang."
          },
          {
            "ul": [
              "**Mga Bagay**({categoryThing}) · **Mga Hayop**({categoryAnimal}) · **Kalikasang**({categoryNature}) — ang tatlong pinakamalaking kategorya. Ang tradisyonal na dream interpretation ay pangunahing tinatalakay ang mga nakikitang bagay, hayop, at mga elemento ng langit at tubig.",
              "**Mga Aksyon**({categoryAction}) · **Katawan**({categoryBody}) — kung ano ang ginawa, tulad ng hinahabol o nahuhulog, at kung saan sa katawan, tulad ng mukha o buhok.",
              "**Mga Tao**({categoryPerson}) · **Mga Lugar**({categoryPlace}) · **Mga Kulay**({categoryColor}) · **Mga Numero**({categoryNumber})"
            ]
          },
          {
            "p": "Upang makita ang mga ito ayon sa kategorya, maaari mong tingnan ang buong listahan sa [symbol dictionary](/dream/symbols)."
          }
        ]
      },
      {
        "title": "Tanging {cultureNoteTotal} ang maaaring patunayan.",
        "blocks": [
          {
            "p": "Kabilang sa mga simbolo, **{cultureNoteTotal}** ang may mga dahilan para sa interpretasyon na nakasulat kasama nila. Halimbawa, ang dahilan para sa paghihiwalay ng mga itaas at ibabang ngipin sa isang pangarap ng pagkawala ng ngipin. Ang natitirang mga simbolo ay may mga puwang."
          },
          {
            "p": "**Hindi namin pinunan ang mga puwang.** Ang pagdaragdag ng mga kapani-paniwalang pinagmulan ay magpapabigat sa dokumento, ngunit sa sandaling iyon, ang diksyunaryong ito ay hindi maghahatid ng tradisyon kundi mag-iimbento nito. Mas tapat na tukuyin ang kung ano ang maaaring at hindi maaaring patunayan."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Mga dahilan para sa hindi arbitraryong pagpapalawak ng diksyunaryo.",
        "blocks": [
          {
            "p": "Talagang sinubukan naming palawakin ang mga simbolo sa daan-daang ngunit sumuko. Ang mga awtomatikong nabuo na entry ay paulit-ulit na nagbigay ng parehong mga parirala tulad ng 'romansa → magandang relasyon' o nabigong magbigay ng anumang nakadokumento na tradisyonal na pinagmulan. Napagpasyahan naming **mas mabuti ang tumpak na paghahanap sa kung ano ang umiiral** kaysa sa simpleng pagtaas ng mga numero."
          }
        ]
      },
      {
        "title": "Ang mabuti at masama ay itinatakda ng diksyunaryo.",
        "blocks": [
          {
            "p": "Bawat simbolo ay may kasamang auspiciousness na nakarehistro kasama nito. **Mabuti {polarityPositive}**, **ambivalent {polarityAmbivalent}**, **nag-iingat {polarityNegative}**, at **neutral {polarityNeutral}**."
          },
          {
            "p": "Ang katotohanan na ang mga mabuting kahulugan ay lumalampas sa kalahati ay hindi dahil kami ay mapagbigay, kundi dahil ang tradisyonal na dream interpretation ay palaging ganito — ang malalaki at malalakas na simbolo tulad ng mga baboy, dragon, at apoy ay karaniwang itinuturing na mga magandang pangitain. Gayunpaman, hindi lahat ng mga pangarap ay positibong na-iinterpret. Ang halagang ito ay sumasalamin sa kalikasan ng bawat simbolo, at ang pangkalahatang atmospera ng pangarap ay muling sinusuri sa pamamagitan ng pagsasama-sama ng mga natagpuang simbolo."
          }
        ]
      }
    ]
  },
  "guide/how-matching-works": {
    "eyebrow": "Batayan para sa Serbisyo",
    "title": "Paano hanapin ang mga simbolo sa mga kwento ng pangarap.",
    "summary": "Ipinapaliwanag nito kung paano pinipili ang mga simbolo mula sa malayang isinulat na mga pangungusap at kung paano namin sinasala ang isang simbolo na nagkataong nakaupo sa loob ng isang mas mahabang salita — 별 (\"bituin\") sa loob ng 특별할 (\"walang espesyal\").",
    "backLabel": "Batayan para sa Interpretasyon",
    "sections": [
      {
        "title": "Naghahanap kami ng mga simbolo sa teksto na iyong ibinigay.",
        "blocks": [
          {
            "p": "Kapag malaya mong isinulat ang iyong kwento ng pangarap, naghahanap kami ng mga simbolo sa tekstong iyon mula sa diksyunaryo. Hindi mo kailangang pumili ng mga item o sumulat sa isang tiyak na format. Isulat lamang tulad ng karaniwan mong ginagawa, tulad ng 'Kagabi, isang malaking python ang umikot sa akin.'"
          },
          {
            "p": "Kapag naghahanap, hindi lamang namin tinitingnan ang pangalan ng simbolo kundi pati na rin ang **{aliasTotal} alternatibong pangalan**. Ito ay mga salitang tumutukoy sa parehong bagay, tulad ng 구렁이 (gureongi) at 뱀 (baem), 떨어지다 (tteoreojida) at 빠지다 (ppajida). Kasama rin ang mga pagbabago sa mga wakas, tulad ng 「떨어지는」 (tteoreojineun) · 「쫓겨서」 (jjotgyeoseo) · 「빠졌다」 (ppajyeotda)."
          }
        ]
      },
      {
        "title": "Ang mga karakter na aksidenteng lumilitaw sa loob ng isang salita ay hindi binibilang",
        "blocks": [
          {
            "p": "Ito ang pinaka mahirap na aspeto sa Korean. Sa mga simbolo, mayroong **{singleCharSymbolTotal} mga simbolo na may isang karakter** tulad ng **별** (byeol) · **말** (mal) · **배** (bae) · **손** (son), na madalas na lumilitaw sa ibang mga salita."
          },
          {
            "ul": [
              "별 (\"bituin\") na nakatago sa loob ng 특**별**할 (\"walang espesyal\")",
              "게 (\"alimango\") na nakatago sa loob ng 누군가에**게** (\"sa pamamagitan ng isang tao\")",
              "말 (\"kabayo\") sa loob ng **말**했다 (\"nagsabi\"), at 배 (\"bangka, peras\") sa loob ng **배**가 고팠다 (\"kami ay nagugutom\")"
            ]
          },
          {
            "p": "Ang pagbibilang sa mga ito bilang mga simbolo ay nagdudulot ng hindi kaugnay na mga interpretasyon. Samakatuwid, sinusuri namin ang mga nakapaligid na karakter — kung **mayroong isang karakter na Korean sa harap**, itinuturing namin itong bahagi ng mas mahabang salita at hindi ito binibilang, at tinitingnan namin **kung ang kasunod ay isang particle o isang wakas ng pandiwa**, na nagpapahintulot sa 「소가」 (soga) na makalusot habang sinasala ang 「소리」 (sori)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ganito ito gumagana",
        "blocks": [
          {
            "p": "Bago ipatupad ang patakarang ito, nang subukan gamit ang labindalawang aktwal na pangungusap, **lahat ng labindalawa** ay naglalaman ng mga hindi kaugnay na simbolo. Isang pangungusap na walang makabuluhang nilalaman ay itinuturing pang isang a conception dream."
          },
          {
            "p": "Ngayon, isa na lamang ang natitira — ang 배 (bae) sa 「배가 고팠다」 (bae ga gopatda). Dahil ito ay tunog na pareho ngunit may ibang kahulugan, hindi ito maaaring masala lamang sa pamamagitan ng mga nakapaligid na karakter."
          },
          {
            "p": "Ang hindi paghanap ng isang bagay ay isang tapat na bagay. Gayunpaman, ang paghahanap ng isang hindi kaugnay na bagay ay nangangahulugan ng pagtatag ng isang tradisyon sa likod ng salitang iyon na hindi ito kailanman nagkaroon."
          }
        ]
      },
      {
        "title": "Ang parehong mga karakter ay palaging nagbubunga ng parehong mga resulta",
        "blocks": [
          {
            "p": "Walang puwang para sa pagkakataon sa mga patakaran ng pagtutugma. Dahil ang diksyunaryo ay nakatakda at ang mga patakaran ay itinatag, kung ipapasok mo ang parehong pangungusap muli, **ang parehong simbolo ay lilitaw sa parehong pagkakasunod-sunod**. Ang interpretasyon na nakikita mo ngayon ay hindi mag-iiba mula sa isa na makikita mo bukas."
          },
          {
            "p": "Ang kalidad na ito ay isang pangako rin na ginawa namin sa aming sarili. Ang mga interpretasyon na nagbabago sa bawat pagkakataon ay nakakaaliw ngunit kulang sa pundasyon. Ito ay konektado sa kwento ng [bakit hindi kami gumagamit ng mga modelo](/guide/no-ai)."
          }
        ]
      }
    ]
  },
  "guide/one-symbol-many-meanings": {
    "eyebrow": "Batayan ng Serbisyo",
    "title": "Ang dahilan kung bakit ang parehong simbolo ay may iba't ibang kahulugan",
    "summary": "Tradisyonal, ang paghawak ng ahas at ang pagkakagat ng isa ay mga kabaligtaran. Tinalakay nito ang estruktura kung saan {symbolTotal} simbolo ang may {meaningTotal} kahulugan at kung paano i-interpret ang mga sitwasyon.",
    "backLabel": "Batayan ng Interpretasyon",
    "sections": [
      {
        "title": "Kahit na ang mga simbolo ay pareho, ang iba't ibang sitwasyon ay nagbubunga ng iba't ibang kahulugan",
        "blocks": [
          {
            "p": "Sa tradisyonal na interpretasyon ng mga pangarap, ang isang simbolo ay hindi palaging may isang kahulugan. Kahit para sa parehong ahas, **ang paghawak dito at ang pagkakagat ay na-interpret bilang ganap na kabaligtaran.** Ito rin ay nakasaad sa diksyunaryo."
          },
          {
            "p": "Ito ang dahilan kung bakit ang {symbolTotal} mga simbolo ay may kabuuang {meaningTotal} kahulugan. Ang bawat kahulugan ay kasama ang **konteksto kung saan ito naaangkop**, at kung ang konteksto na iyon ay nakikita sa teksto na ibinibigay mo, pinipili namin ang kahulugan na iyon."
          }
        ]
      },
      {
        "title": "Paano matukoy ang sitwasyon",
        "blocks": [
          {
            "p": "Sinusuri namin kung ang teksto na ibinigay mo ay naglalaman ng mga salitang nagpapahiwatig ng sitwasyong iyon. Sa 「뱀이 나를 물었다」 (baemi nareul mul-eotda), ang sitwasyon ng pagkakagat ay inilarawan, habang sa 「뱀을 품에 안았다」 (baemeul pume anatda), ang sitwasyon ng paghawak ay inilarawan. Kung walang mga salitang nagpapahiwatig ng sitwasyon, ini-interpret ito gamit ang **pangunahing kahulugan** ng simbolong iyon."
          },
          {
            "p": "Samakatuwid, kapag nagsusulat ng iyong pangarap, kung isasama mo ang **hindi lamang kung ano ang lumitaw kundi pati na rin kung anong mga aksyon ang ginawa**, ang interpretasyon ay magiging mas tumpak. Ang 「돼지를 봤다」 (dwaeji-reul bwatda) ay nagdadala ng mas kaunting impormasyon kaysa sa 「돼지가 집으로 들어왔다」 (dwaeji-ga jib-euro deureowatda)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Mas mabuti ang mas maraming pagsusulat, ngunit walang pangangailangan na magsulat ng mahaba",
        "blocks": [
          {
            "p": "Dalawa o tatlong pangungusap ay sapat na. Ang mas mahabang pagsusulat ay hindi nangangahulugang makakahanap ng mas maraming simbolo; sa halip, kung ang mga hindi kaugnay na salita ay nahalo, maaaring makilala ang mga hindi kaugnay na simbolo."
          }
        ]
      },
      {
        "title": "Mayroong {contextSplitSymbolTotal} mga simbolo na may nahahating kahulugan",
        "blocks": [
          {
            "p": "Kabilang sa {symbolTotal} mga simbolo sa diksyunaryo, **{contextSplitSymbolTotal}** ay may mga kahulugan na nag-iiba depende sa sitwasyon. Ang natitira ay binasa sa isang direksyon anuman ang sitwasyon."
          },
          {
            "p": "Ang mga {contextSplitSymbolTotal} na ito ang pinaka maingat na mga lugar. Ang maling pagbasa ng sitwasyon ay maaaring magdulot ng pagpapahayag ng magandang balita bilang masamang balita, o kabaligtaran. Samakatuwid, kung ang sitwasyon ay hindi malinaw, hindi kami **nagpipilit na pumili ng isang panig at sa halip ay ginagamit ang pangunahing kahulugan** ng simbolong iyon — ayaw naming ipahayag ang isang hindi tiyak na bagay na parang ito ay tiyak."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ang mga damdamin sa paggising ay isinasaalang-alang din",
        "blocks": [
          {
            "p": "Ang mga damdamin at pag-uulit na tinanong sa ibaba ng nilalaman ng pangarap ay hindi ginagamit upang makahanap ng mga simbolo. Sinasalamin ang mga ito kapag nagpapasya kung aling paraan ang i-interpret sa mga sitwasyon na may nahahating kahulugan. Hindi mo kailangang pumili; ang mga resulta ay ibibigay pa rin."
          }
        ]
      },
      {
        "title": "Ang kabuuang atmospera ng pangarap ay binibilang nang hiwalay",
        "blocks": [
          {
            "p": "Kung maraming simbolo ang natagpuan, kinokolekta namin kung ang bawat isa sa mga simbolong iyon ay positibo o maingat upang matukoy ang kabuuang tono ng pangarap. Ang isang pangarap na may kasamang isang magandang simbolo at isang maingat na simbolo ay hindi simpleng tinutukoy bilang 'magandang pangarap.'"
          },
          {
            "p": "Maaari mong suriin ang iba't ibang simbolo at ang kanilang mga kahulugan sa [diksiyonaryo ng simbolo](/dream/symbols). Magandang tingnan din kung ano ang kasama bago isulat ang iyong pangarap."
          }
        ]
      }
    ]
  },
  "guide/good-and-bad": {
    "eyebrow": "Batayan ng Serbisyo",
    "title": "Mga pamantayan para sa pagkilala ng mga magandang pangarap at mga masamang pangarap",
    "summary": "Ang apat na halaga na itinalaga sa bawat simbolo at ang kanilang pamamahagi, ang dahilan kung bakit ang mga positibo ay lumampas sa kalahati, at kung bakit namin ipinapahayag ang mga halo-halong pangarap bilang halo-halo.",
    "backLabel": "Batayan ng Interpretasyon",
    "sections": [
      {
        "title": "Bawat simbolo ay itinalaga ng isa sa apat na halaga",
        "blocks": [
          {
            "p": "Kabilang sa {symbolTotal} mga simbolo sa diksyunaryo, ang bawat isa ay nakategorya bilang isa sa mga sumusunod."
          },
          {
            "ul": [
              "**{polarityPositive} mga positibong simbolo** — mga iyon na na-interpret bilang mga masuwerteng kaganapan tulad ng kayamanan, pagdiriwang, at mga tagapagtulong.",
              "**{polarityAmbivalent} mga simbolo na nag-iiba ayon sa sitwasyon** — tulad ng mga ahas, kung saan ang kahulugan ay maaaring magbago depende sa kung ano ang ginawa. Ang kategoryang ito ang pinaka maingat.",
              "**{polarityNegative} mga masamang simbolo** — mga iyon na nakikita bilang tsismis, alitan, o pagkawala.",
              "**{polarityNeutral} mga neutral na simbolo** — mga iyon na hindi mabuti o masama sa kanilang sarili, tulad ng mga kulay o numero."
            ]
          }
        ]
      },
      {
        "title": "Ang dahilan kung bakit ang mga positibong simbolo ay lumampas sa kalahati",
        "blocks": [
          {
            "p": "Ito ay hindi dahil kami ay mapagbigay sa aming mga pagtatasa. **Ang tradisyonal na interpretasyon ng mga pangarap (dream interpretation) ay palaging ganito.** Ang malalaki at makapangyarihang mga simbolo tulad ng mga baboy, dragon, apoy, at tubig ay karaniwang itinuturing na mga mabuting pangitain, at ang diksyunaryo ay sumasalamin sa tradisyong iyon."
          },
          {
            "p": "Samakatuwid, ang katotohanan na 'isang magandang simbolo ang lumitaw' ay hindi nangangahulugang 'mga magagandang bagay ang mangyayari.' Ang maipapahayag namin ay limitado sa kung paano ang simbolong iyon ay na-interpret sa tradisyon."
          }
        ]
      },
      {
        "title": "Ang tono ng isang pangarap ay kinokolekta mula sa mga simbolo nito",
        "blocks": [
          {
            "p": "Kung maraming simbolo ang natagpuan, kinokolekta namin ang kanilang mga kaukulang kabutihan upang matukoy ang kabuuang tono ng pangarap. Kung tanging mga positibong simbolo ang lumitaw, ito ay isang magandang pangarap; kung tanging mga masamang simbolo ang lumitaw, ito ay isang masamang pangarap; kung **halo-halo, ipinapahayag namin ito bilang halo-halo.**"
          },
          {
            "p": "Hindi namin pinipilit na ikategorya ang mga halo-halong simbolo sa isang panig. Sa katotohanan, ang mga pangarap na mayroon ang mga tao ay madalas na halo-halo, at ang pagbuod sa mga ito bilang 'isang magandang pangarap' ay hindi tumpak o nakakatulong."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Mga Salitang Hindi Dapat Gamitin",
        "blocks": [
          {
            "p": "Huwag gumawa ng tiyak na pahayag tungkol sa kung ano ang mangyayari, kailan ito mangyayari, o tungkol sa kalusugan at kayamanan. Ang pagpapahayag ng mga kahulugan ng mga simbolo na ipinasa sa pamamagitan ng tradisyon ay iba sa paghulang ng hinaharap."
          }
        ]
      },
      {
        "title": "Kapag Lumitaw ang Isang Ominous Dream",
        "blocks": [
          {
            "p": "Kahit na may simbolo na itinuturing na babala, hindi ito nangangahulugang masamang balita. Sa tradisyonal na dream interpretation, ang isang ominous dream ay karaniwang ginagamit bilang **isang pahayag na tumutukoy sa kasalukuyang sitwasyon.** Kung may simbolo na nagmumungkahi ng hidwaan, maaari itong basahin bilang paalala na magpigil sa mga salita."
          },
          {
            "p": "Dahil dito, ang serbisyong ito ay hindi nagbebenta ng mga amulet o charms. Ang ibinibenta ay tanging [dalawang paraan upang itago ang iyong mga pangarap](/guide/reports)."
          }
        ]
      }
    ]
  },
  "guide/conception-dreams": {
    "eyebrow": "a conception dream",
    "title": "Paano I-interpret ang mga a conception dream",
    "summary": "Ipinapakita nito kung paano matutukoy ang {conceptionSymbolTotal} simbolo ng a conception dream, kung bakit hindi lahat ng mga panaginip tungkol sa baboy ay itinuturing na mga a conception dream, at ang prinsipyo na hindi nag-predict ng pagbubuntis o kasarian.",
    "backLabel": "Batayan ng Interpretasyon",
    "sections": [
      {
        "title": "Una, Linawin Ito",
        "blocks": [
          {
            "p": "**Dreams-Link ay hindi nagtatakda ng katayuan ng pagbubuntis. Hindi rin nito ipinapahiwatig ang kasarian ng bata.** Ito ay mga bagay na hindi maaaring malaman sa pamamagitan ng mga pangarap, at hindi ito isang bagay na maaari naming gawin."
          },
          {
            "p": "Ang maibabahagi lamang namin sa iyo ay limitado sa — **ang katotohanan na isang simbolo na tradisyonal na itinuturing na isang a conception dream ang lumitaw sa panaginip na ito.** Iyan lamang ang tungkol sa kung paano ito ininterpret ng ating mga ninuno."
          }
        ]
      },
      {
        "title": "Mayroong {conceptionSymbolTotal} simbolo na itinuturing na mga a conception dream",
        "blocks": [
          {
            "p": "Kabilang sa {symbolTotal} simbolo sa diksyunaryo, **{conceptionSymbolTotal}** ang itinuturing na mga a conception dream. Maraming mga hayop tulad ng mga dragon, baboy, at ahas, pati na rin ang mga prutas tulad ng mga peach at kastanyas, at ang araw at buwan ay kasama."
          },
          {
            "p": "Gayunpaman, **ang paglitaw ng simbolong iyon ay hindi agad nangangahulugang ito ay isang a conception dream.** Dito naglaan ng pagsisikap ang serbisyong ito."
          }
        ]
      },
      {
        "title": "Ang Paghuhusga ay Batay sa Aktwal na Kahulugan, Hindi sa mga Simbolo",
        "blocks": [
          {
            "p": "Ang baboy ay isang simbolo ng mga a conception dream at sabay-sabay **kumakatawan sa mga panaginip tungkol sa kayamanan.** Kung itinuturing itong isang a conception dream dahil lamang sa paglitaw ng simbolo, kung gayon lahat ng nangarap ng mga baboy ay magkakaroon ng a conception dream. Sa katotohanan, ito ay kadalasang ininterpret bilang isang panaginip tungkol sa kayamanan."
          },
          {
            "p": "Samakatuwid, tinitingnan namin ang **aktwal na kahulugan na nakuha mula sa simbolong iyon, hindi ang simbolo mismo.** Itinuturing lamang namin itong isang a conception dream kapag ang kahulugan na nakatuon sa pagbubuntis ay pinili sa sitwasyong ibinigay mo. Kahit na sa parehong baboy, nagbabago ang pagbasa kung nag-iiba ang pangungusap."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Kung Binanggit Mo ang Pagbubuntis, Titingnan Namin Ito Una",
        "blocks": [
          {
            "p": "Kung ang iyong isinulat ay may kasamang mga salita tulad ng pagbubuntis, a conception dream, o panganganak, una naming titingnan ang kahulugan ng simbolong iyon na nakatuon sa pagbubuntis. Kahit na sa parehong panaginip tungkol sa baboy, nag-iiba ang paraan ng interpretasyon ng ating mga ninuno depende sa kasalukuyang sitwasyon."
          }
        ]
      },
      {
        "title": "Ang Dahilan sa Paghihiwalay ng mga Ulat ng a conception dream",
        "blocks": [
          {
            "p": "Ang mga a conception dream ay may ibang layunin kaysa sa ibang mga panaginip. Kadalasan itong pinag-uusapan kahit na pagkatapos ipanganak ang bata at ibinabahagi sa mga miyembro ng pamilya. Samakatuwid, sa halip na tingnan lamang ito sa isang screen, lumikha kami ng hiwalay na **dokumento na maaaring itago.**"
          },
          {
            "p": "Ang kasama ay nakasulat sa [dalawang paraan upang itago ang iyong mga pangarap](/guide/reports). Makikita mo ang lahat ng interpretasyon nang hindi bumibili ng nakikita mo sa screen."
          }
        ]
      }
    ]
  },
  "guide/how-to-write": {
    "eyebrow": "Paano Gamitin",
    "title": "Paano Epektibong Isulat ang Iyong Pangarap",
    "summary": "Kung isusulat mo ang nakita at ginawa mo, ito ay maayos na mai-interpret. Ipinaliwanag nito kung bakit ang isang solong pandiwa ay maaaring magtakda ng kahulugan at kung bakit kami nagtatanong tungkol sa mga damdamin at pag-uulit.",
    "backLabel": "Batayan ng Interpretasyon",
    "sections": [
      {
        "title": "Mangyaring Isulat ang Nakita at Ginawa Mo",
        "blocks": [
          {
            "p": "Walang tiyak na format. Ang ilang mga pangungusap gaya ng karaniwan mong sinasabi ay sapat na. Gayunpaman, ang gumagana nang maayos ay tinutukoy — **ano ang nakikita** at **ano ang nangyari.**"
          },
          {
            "ul": [
              "Gumagana nang maayos — 「Isang malaking ahas ang nakabalot sa akin」, 「Nakita ko ang malinaw na tubig na umaagos」, 「Nahulog ako mula sa mataas na lugar」",
              "Hindi gumagana — 「Natakot ako」, 「Nakaramdam ako ng kakaiba」, 「Parang may isang tao na kinamumuhian ako」"
            ]
          },
          {
            "p": "Kung isusulat mo lamang ang mga damdamin, walang mga simbolo na mahahanap. Ito ay dahil ang tradisyonal na dream interpretation ay nagsasalita tungkol sa [mga bagay at aksyon](/guide/categories), hindi mga emosyon."
          }
        ]
      },
      {
        "title": "Ang Pagsusulat ng Iyong Ginawa ay Ginagawa itong Mas Tumpak",
        "blocks": [
          {
            "p": "Kahit na sa parehong simbolo, mayroong {contextSplitSymbolTotal} mga kaso kung saan nag-iiba ang mga kahulugan depende sa sitwasyon. Tradisyonal na ang paghawak sa isang ahas at pagkakagat ay ininterpret bilang mga kabaligtaran."
          },
          {
            "p": "Kaya, ang 「Nakita ko ang isang baboy」 ay hindi gaanong tumpak kaysa sa 「Isang baboy ang pumasok sa bahay」, at ang 「May tubig」 ay hindi gaanong tumpak kaysa sa 「Uminom ako ng malinaw na tubig.」 **Isang solong pandiwa ang nagtatakda ng kahulugan.**"
          }
        ]
      },
      {
        "title": "Bakit Kami Nagtatanong Tungkol sa mga Damdamin at Pag-uulit",
        "blocks": [
          {
            "p": "Sa ilalim ng nilalaman ng pangarap, mayroong isang lugar upang pumili ng **ang damdamin nang magising ka** at **kung ikaw ay umulit ng parehong pangarap.** Hindi mo kailangang pumili ng pareho para makapagbigay ng resulta."
          },
          {
            "p": "Ang mga halagang ito ay hindi ginagamit upang makahanap ng mga simbolo. Sinasalamin ang mga ito kapag tinutukoy **kung aling kahulugan ang pipiliin** mula sa parehong simbolo at kung paano ipahayag ang resulta."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Sa Mga Kasong Binanggit Mo ang Pagbubuntis",
        "blocks": [
          {
            "p": "Kung ang iyong isinulat ay may kasamang mga salita tulad ng pagbubuntis, a conception dream, o panganganak, una naming titingnan ang kahulugan ng simbolong iyon na nakatuon sa pagbubuntis. Kahit na sa parehong panaginip tungkol sa baboy, nag-iiba ang paraan ng interpretasyon ng ating mga ninuno depende sa kasalukuyang sitwasyon — [paano i-interpret ang mga a conception dream](/guide/conception-dreams)."
          }
        ]
      },
      {
        "title": "Walang Kailangan na Isulat ang Mahahabang Teksto",
        "blocks": [
          {
            "p": "Ang mas mahabang teksto ay hindi nangangahulugang mas maraming simbolo ang mahahanap. Sa halip, kung ang mga hindi kaugnay na salita ay nahalo nang mahaba, may mas malaking pagkakataon na ang mga hindi kaugnay na salita ay ma-interpret bilang mga simbolo. **Mangyaring isulat lamang ang mga eksenang naaalala mo.**"
          },
          {
            "p": "Ang teksto na ibinibigay mo ay hindi nai-save kahit saan. Ang dahilan kung bakit maaari kang magsulat nang malaya ay nakasulat sa [pamamaraan ng hindi pag-iimbak](/guide/no-storage)."
          }
        ]
      }
    ]
  },
  "guide/categories": {
    "eyebrow": "Batayan ng Serbisyo",
    "title": "Mga Pamantayan na Nahahati sa Siyam na Kategorya",
    "summary": "Mula sa mga bagay, hayop, at kalikasan hanggang sa mga kulay at numero, mayroong siyam na kategorya at isang dahilan para hindi isama ang isang emosyonal na kategorya.",
    "backLabel": "Batayan ng Interpretasyon",
    "sections": [
      {
        "title": "Ang mga Simbolo sa mga Pangarap ay Nahahati sa Siyam na Kategorya",
        "blocks": [
          {
            "p": "Ang {symbolTotal} simbolo ay pinagsama-sama sa siyam na kategorya batay sa kanilang mga katangian. Ang pamantayan para sa paghahati ay **kung paano sila lumilitaw sa mga pangarap** — kung bilang mga hayop, bagay, o mga aksyon na ginawa natin."
          },
          {
            "ul": [
              "**Mga Bagay {categoryThing}** — Mga nakikitang item tulad ng pera, salamin, at kutsilyo. Ito ang pinakamakapal na kategorya.",
              "**Mga Hayop {categoryAnimal}** — dragon·baboy·ahas·baka. Marami sa mga ito ang itinuturing na mga a conception dream.",
              "**Kalikasan {categoryNature}** — mga bagay na malalaki at sinauna tulad ng tubig·apoy·araw·buwan·bundok.",
              "**Aksyon {categoryAction}** — mga bagay na ginawa sa mga pangarap tulad ng hinahabol·nahuhulog·lumilipad.",
              "**Katawan {categoryBody}** — ngipin·buhok·dugo. Ang kahulugan ay nag-iiba depende sa kung saan sa katawan ito naroroon.",
              "**Tao {categoryPerson}** · **Lugar {categoryPlace}** · **Kulay {categoryColor}** · **Bilang {categoryNumber}**"
            ]
          }
        ]
      },
      {
        "title": "Bakit walang kategorya ng emosyon?",
        "blocks": [
          {
            "p": "Ang mga kategorya tulad ng 「anxiety」·「longing」 ay hindi kasama. **Ito ay dahil ang tradisyonal na interpretasyon ng panaginip ay hindi tumutukoy sa mga emosyon.** Ang mga lumang interpretasyon ay nakatuon sa kung ano ang nakikita at kung ano ang nangyari, sa halip na sa mga damdamin ng nangangarap."
          },
          {
            "p": "sinubukan naming lumikha ng isang kategorya ng emosyon, ngunit ang mga resulta ay mga terminong tulad ng 「pagkawala ng pagmamahal」·「emosyonal na katatagan」. Ang mga ito ay hindi **mga simbolo** mula sa mga pangarap kundi bokabularyo mula sa modernong sikolohiya. Iyon ay isang ibang uri ng serbisyo at hindi ang layunin ng diksyunaryong ito."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Kaya kapag nagsusulat ka",
        "blocks": [
          {
            "p": "Mangyaring isulat ang **kung ano ang nakita at ginawa mo** sa halip na mga damdamin; ito ay magbibigay ng mas magandang resulta. Gayunpaman, tatanungin namin ang tungkol sa iyong mga damdamin sa paggising nang hiwalay — kahit na ang parehong simbolo ay maaaring magkaroon ng iba't ibang kahulugan depende sa sitwasyon."
          }
        ]
      },
      {
        "title": "Ang mga kulay at bilang ay hindi nakatayo nang mag-isa",
        "blocks": [
          {
            "p": "Kulay {categoryColor} at bilang {categoryNumber} ay walang likas na mabuti o masamang kahulugan. Tulad ng isang puting ahas at isang itim na ahas ay magkaiba, ang kanilang mga kahulugan ay nagbabago depende sa **kung ano ang kanilang kaugnayan**. Samakatuwid, ang dalawang kategoryang ito ay isinasaalang-alang kasama ng iba pang mga simbolo."
          },
          {
            "p": "Isang kumpletong listahan ayon sa kategorya ay available sa [diksiyonaryo ng simbolo](/dream/symbols). Ang pagbubukas ng isang simbolo ay magpapakita ng tradisyonal na kahulugan nito, kategorya, at mga kaugnay na simbolo."
          }
        ]
      }
    ]
  },
  "guide/not-found": {
    "eyebrow": "Paano gamitin",
    "title": "Kapag ang isang simbolo ay hindi matatagpuan",
    "summary": "Kung hindi mo ito mahanap, ipapaalam namin sa iyo na ito ay hindi natagpuan. tatalakayin namin kung bakit ito hindi matatagpuan, kung ano ang ipapakita namin sa iyo sa halip sa screen na iyon, at kung paano pinalawak ang diksyunaryo.",
    "backLabel": "Batayan ng interpretasyon",
    "sections": [
      {
        "title": "Kapag hindi natagpuan, ipapaalam namin sa iyo na ito ay hindi natagpuan",
        "blocks": [
          {
            "p": "Kung hindi kami makahanap ng anumang mga simbolo sa teksto na iyong ibinigay, kami ay **ipapaalam sa iyo na ito ay hindi natagpuan.** hindi kami pipilitin na iugnay ito sa isang bagay na katulad o lumikha ng mga kapani-paniwalang pangungusap upang punan ang puwang."
          },
          {
            "p": "Ito ang pinaka-maingat na aspeto ng serbisyong ito. Sa sandaling punan namin ang isang puwang, sinisira nito ang pangako na kami ay naglilipat lamang ng mga naipasa na interpretasyon."
          }
        ]
      },
      {
        "title": "Bakit hindi ito matatagpuan?",
        "blocks": [
          {
            "p": "Karaniwan, isa ito sa mga sumusunod."
          },
          {
            "ul": [
              "**Ito ay isang simbolo na hindi pa nasa diksyunaryo.** Sa kasalukuyan, mayroong {symbolTotal} mga simbolo na nakalista, ngunit marami pang iba na maaaring lumitaw sa mga pangarap.",
              "**Nagsulat ka lamang ng mga damdamin.** Kung mayroong mga emosyon lamang tulad ng 「natatakot ako」·「nakakaramdam ako ng kakaiba」, walang mga simbolo na maaaring itugma. Ang tradisyonal na interpretasyon ng panaginip ay nagsasalita tungkol sa **mga nakikitang bagay at aksyon** sa halip na mga emosyon.",
              "**Masyado itong maikli.** Mas mabuting sumulat sa mga pangungusap kaysa sa isa o dalawang salita."
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Kapag sinubukan mong magsulat muli",
        "blocks": [
          {
            "p": "Mangyaring isama ang **kung ano ang nakita at kung ano ang ginawa mo** sa pangarap. Ang pagsasabi ng 「ako ay nababahala」 ay hindi gaanong epektibo kaysa sa pagsasabi ng 「nahulog ako mula sa mataas na lugar」, at ang pagsasabi ng 「nagustuhan ko ito」 ay hindi gaanong epektibo kaysa sa pagsasabi ng 「nakita ko ang malinaw na tubig na umaagos」."
          }
        ]
      },
      {
        "title": "hindi kami nag-iiwan ng blangkong screen",
        "blocks": [
          {
            "p": "Kapag may isang bagay na hindi matatagpuan, ipapakita rin namin ang **{popularSymbolCount} madalas na hinahanap na mga simbolo** sa screen na iyon. Ang mga ito ay pinili mula sa diksyunaryo batay sa kanilang representativeness, na makakatulong sa iyo na maalala kung isa sa mga ito ay lumitaw sa iyong pangarap."
          },
          {
            "p": "Kung nais mong tingnan ang buong listahan, mayroong {symbolTotal} mga simbolo na nakaayos ayon sa kategorya sa [diksiyonaryo ng simbolo](/dream/symbols). Ang bawat simbolo ay may kasamang tradisyonal na kahulugan nito at mga kaugnay na simbolo."
          }
        ]
      },
      {
        "title": "Paano palalawakin ang diksyunaryo sa hinaharap?",
        "blocks": [
          {
            "p": "Sa halip na dagdagan ang mga numero, kami ay nakatuon sa **tumpak na pagtukoy sa kung ano ang naroroon na.** isinama namin ang {aliasTotal} mga alternatibong pangalan para sa parehong simbolo, at nagawa naming makilala ang mga salitang nagbabago ng anyo sa mga suffix."
          },
          {
            "p": "Kapag pinalawak ang mga simbolo mismo, isasama lamang namin ang mga iyon na maaaring **magbigay ng dokumentadong tradisyonal na pinagmulan.** Ang simpleng pagdaragdag ng mga numero nang walang ebidensya ay nagiging paglikha sa halip na isang diksyunaryo — naitala namin ang mga pagsubok at resulta sa [bakit hindi kami gumagamit ng mga modelo](/guide/no-ai)."
          }
        ]
      }
    ]
  },
  "guide/no-ai": {
    "eyebrow": "Batayan ng serbisyo",
    "title": "Mga Dahilan para sa Hindi Paggamit ng Artipisyal na Katalinuhan sa Interpretasyon ng Panaginip",
    "summary": "Walang code na tumatawag sa isang modelo sa proseso ng paglikha ng interpretasyon. tinalikuran namin ang pagtatangkang palawakin ang diksyunaryo gamit ang isang modelo batay sa mga empirikal na resulta, at sa gayon kung ano ang nakuha at kung ano ang isinusuko.",
    "backLabel": "Batayan ng interpretasyon",
    "sections": [
      {
        "title": "Hindi ginagamit ang artipisyal na katalinuhan sa interpretasyon ng panaginip",
        "blocks": [
          {
            "p": "Maraming kasalukuyang serbisyo ng interpretasyon ng panaginip ang nagpapakita ng mga teksto na nabuo sa pamamagitan ng pagpasok ng mga kwento ng panaginip sa mga generative model. Ang Dreams-Link ay hindi gumagawa nito. **Walang code na tumatawag sa isang modelo sa proseso ng paglikha ng interpretasyon.**"
          },
          {
            "p": "Ang ginagawa namin ay simple. hinahanap namin ang mga simbolo sa teksto na iyong ibinigay na nasa diksyunaryo at pinipili at ipinapakita ang mga kahulugan na nakasulat ng diksyunaryo para sa mga simbolong iyon. Walang puwang para sa mga pangungusap na wala sa diksyunaryo."
          }
        ]
      },
      {
        "title": "Bakit ginawa ang desisyong ito?",
        "blocks": [
          {
            "p": "**Ang mga modelo ay hindi nagsasabi na hindi nila alam ang hindi nila alam.** Kapag tinanong tungkol sa mga simbolo na walang dokumentadong tradisyonal na pinagmulan, nag-iimbento sila ng mga kapani-paniwalang pinagmulan. At kung ito ay imbento o hindi ay isang bagay na hindi matutukoy ng mambabasa. Kung ang isang tao ay naglalagay ng paglikha sa halip na paglilipat ng tradisyon, ang premise ng serbisyo ay bumabagsak."
          },
          {
            "p": "talagang sinubukan naming magkaroon ng isang modelo na lumikha ng mga simbolo upang palawakin ang diksyunaryo. Mula sa animnapu't anim na halimbawa na karapat-dapat isaalang-alang, **limampu't lima ang hindi makapagbigay ng anumang nakadokumento na tradisyonal na pinagmulan**, at ang ilan ay naglalaman ng mga bagay na hindi maaaring umiral sa tradisyonal na interpretasyon ng panaginip, tulad ng mga subway at highway. Samakatuwid, **wala sa mga ito ang isinama.**"
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ganito rin ang nangyari kahit sa mas malalaking modelo",
        "blocks": [
          {
            "p": "Nang sinubukan namin ang parehong gawain gamit ang mas mahusay na modelo, isa lamang sa labing siyam ang pumasa, at ang isa ay simpleng pag-uulit ng parehong mga salita sa posisyon ng ebidensya. Ang mas malalaking modelo ay nagsasalita lamang ng **mas kapani-paniwala** tungkol sa hindi nila alam."
          }
        ]
      },
      {
        "title": "Ang mga benepisyo ng hindi paggamit ng modelo",
        "blocks": [
          {
            "ul": [
              "**Kung ito ay parehong pangarap, ang parehong interpretasyon ay lalabas.** Ang wording ay hindi nagbabago sa bawat pagkakataon.",
              "**Mabilis ito.** Walang paghihintay para sa tugon ng modelo, kaya ang mga resulta ay agad na naibigay.",
              "**Ang pangarap na iyong ibinigay ay hindi lumalabas.** Walang pangangailangan na ipadala ito sa mga server ng panlabas na kumpanya — mangyaring basahin kasama ang [pamamaraan ng hindi pag-iimbak](/guide/no-storage).",
              "**Maaari itong ialok nang libre.** Ang mga pangarap ay isang bagay na ating pinapangarap araw-araw, kaya maraming mga katanungan. Kung ang isang modelo ay tatawagin para sa bawat katanungan, ang mga gastos ay dapat na masaklaw sa isang lugar."
            ]
          }
        ]
      },
      {
        "title": "Ano ang isinusuko sa halip",
        "blocks": [
          {
            "p": "Hindi namin ma-interpret ang hindi nasa diksyunaryo. Kung may modelo na ginamit, anumang isinulat mo ay makakabuo ng isang kapani-paniwala na sagot. Pinili namin ang panig na **sinasabing hindi ito mahahanap kapag hindi ito mahahanap.** Ang ipinapakita namin sa oras na iyon ay nakasulat sa [kapag hindi mahahanap ang isang simbolo](/guide/not-found)."
          }
        ]
      }
    ]
  },
  "guide/reports": {
    "eyebrow": "Bayad na Produkto",
    "title": "Dalawang Paraan upang Panatilihin ang Iyong mga Pangarap",
    "summary": "Ang interpretasyon mismo ay hindi nagdudulot ng bayad. Ipinaliwanag namin kung ano ang dalawang bagay na binebenta namin, kung ano ang nilalaman nito, at kung bakit hindi ito mas mahusay na mga interpretasyon.",
    "backLabel": "Batayan ng Interpretasyon",
    "sections": [
      {
        "title": "Ang interpretasyon mismo ay hindi nagdudulot ng bayad",
        "blocks": [
          {
            "p": "Ang pagsusulat ng iyong mga pangarap at pagtingin kung anong mga simbolo ang naroroon **ay hindi nagkakahalaga ng pera at hindi nangangailangan ng membership.** Dahil ang mga tao ay nangangarap araw-araw, nagpasya kami na ang espasyong ito ay dapat na libre."
          },
          {
            "p": "**Ang dalawang bagay na binebenta namin ay hindi mas mahusay na mga interpretasyon.** Sila ay **dalawang paraan upang panatilihin ang parehong interpretasyon.** Ang nilalaman na nakikita mo sa screen ay hindi nagbabago pagkatapos ng bayad."
          }
        ]
      },
      {
        "title": "Dream Card — Isang Imahe",
        "blocks": [
          {
            "p": "Ipinapakita namin ang mga simbolo na natagpuan sa iyong pangarap at ang kanilang mga kahulugan sa **isang imahe.** Ito ay isang file ng imahe, hindi isang PDF, kaya maaari mo itong i-save gaya ng ito o ipadala ito sa iba."
          },
          {
            "p": "Ito ay para sa mga nakakaranas ng panghihinayang kapag ang isang magandang pangarap ay nawawala pagkatapos isara ang screen. Dahil hindi namin sine-save ang mga pangarap, kung nais mong panatilihin ito, ito ang tanging paraan upang makuha ito."
          }
        ]
      },
      {
        "title": "Ulat ng Conception Dream — Dokumento {conceptionPages} Pahina",
        "blocks": [
          {
            "p": "Para sa mga pangarap na nagpapakita ng mga simbolo na na-interpret bilang mga conception dream, lumikha kami ng isang **{conceptionPages}-pahinang dokumento.** Kasama dito kung anong mga simbolo ang lumitaw, kung paano ang mga simbolong iyon ay tradisyonal na na-interpret, at isang lugar upang itala iyon."
          },
          {
            "p": "Dahil ang mga conception dream ay madalas na pinag-uusapan at ibinabahagi sa mga miyembro ng pamilya kahit na pagkatapos ipanganak ang bata, lumikha kami ng isang hiwalay na dokumento para sa mga pangarap na masyadong mahalaga upang tingnan lamang sa screen."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Mga Salitang Hindi Nasabi Dito",
        "blocks": [
          {
            "p": "Hindi namin tinutukoy ang katayuan ng pagbubuntis o ang kasarian ng bata. Ang mga ganitong pahayag ay hindi lumalabas sa dokumento. Para sa mga detalye, tingnan ang [kung paano i-interpret ang isang conception dream](/guide/conception-dreams)."
          }
        ]
      },
      {
        "title": "Bakit Wala Nang Dokumento",
        "blocks": [
          {
            "p": "Nagbibigay ang mga serbisyo ng kapatid ng siyam na pahinang ulat. Ang saju engine ay kumukuha ng maraming halaga mula sa isang petsa ng kapanganakan. Ang dream interpretation ay hindi gumagana sa ganitong paraan."
          },
          {
            "p": "Ang mga simbolo na nakalista sa diksyunaryo ay kabuuang {symbolTotal}, at karamihan sa kanila ay may **isang kahulugan bawat isa.** Upang mapahaba iyon sa siyam na pahina, kailangan naming isulat ang mga tradisyonal na kahulugan na hindi matatagpuan sa anumang materyal, at iyon mismo ang pinili ng serbisyong ito na huwag gawin. Samakatuwid, ang dokumento ay kasing haba lamang ng mga materyales na tapat na pinapayagan, at hindi mas mahaba."
          }
        ]
      },
      {
        "title": "Mga Presyo at Katayuan ng Benta",
        "blocks": [
          {
            "p": "Ang mga presyo ay nakalista sa [pricing guide](/pricing). Ang dahilan kung bakit hindi nakalista ang mga halaga sa dokumentong ito ay sinadya — upang maiwasan ang mga sitwasyon kung saan ang dokumento ng gabay ay nananatili sa mga lumang halaga kapag nagbago ang mga presyo. Ang screen at mga termino ay lahat nagbabasa ng parehong halaga mula sa isang lugar."
          },
          {
            "p": "Ang mga dokumentong binibili mo ay **maaaring matanggap muli sa parehong order.** Gayunpaman, dahil hindi kami nag-iimbak ng mga file, kapag umalis ka sa resulta ng screen, hindi mo na maibabalik ang mga ito — mangyaring itago ang mga file na natanggap mo."
          }
        ]
      }
    ]
  },
  "guide/no-storage": {
    "eyebrow": "Personal na Impormasyon",
    "title": "Ang Paraan ng Hindi Pagsasaayos ng mga Pangarap na Isinusulat Mo",
    "summary": "Ipinaliwanag namin kung ano ang teknikal na kahulugan na ang mga kwento ng pangarap ay hindi naitala kahit saan, at kung ano ang nilalaman sa resulta ng link.",
    "backLabel": "Batayan ng Interpretasyon",
    "sections": [
      {
        "title": "Walang Kinakailangang Membership",
        "blocks": [
          {
            "p": "Ang Dreams-Link ay hindi lumikha ng mga account. Hindi kami nangongolekta ng mga pangalan, email, o numero ng telepono. Ang tanging mga bagay na kinokolekta namin ay ang mga pangarap na isinusulat mo, kung paano mo naramdaman nang magising ka, at kung nangangarap ka ng parehong pangarap nang paulit-ulit, at iyon ay hindi nananatili pagkatapos makumpleto ang interpretasyon."
          },
          {
            "p": "Ang mga kwento ng pangarap ay ang pinaka-pribadong mga halaga na natatanggap ng serbisyong ito. Ito ang dahilan kung bakit mas mahigpit ang mga patakaran kaysa sa kinakailangan — hindi pa kami nakalikha ng talahanayan upang isulat kung ano ang iyong isinusumite."
          }
        ]
      },
      {
        "title": "Ano ang nilalaman sa resulta ng link",
        "blocks": [
          {
            "p": "Kapag kumpleto na ang kalkulasyon, ang address ay magiging ganito."
          },
          {
            "p": "**/ko/dream/result#eyJ0IjoiSSBkcmVhbXQgb2YgYSBjYXJwLi4u**"
          },
          {
            "p": "Ang sumusunod **#** ay ang input value. Ang bahaging ito ay tinatawag na **fragment**, na isang **bahagi na hindi ipinapadala ng browser sa server.** Ito ay karaniwang pag-uugali sa web at hindi isang patakaran na nilikha namin — ito ay orihinal na dinisenyo upang ipakita ang isang lokasyon sa loob ng isang dokumento, kaya walang pangangailangan ang server na makita ito."
          },
          {
            "p": "Dito, ang katangiang ito ay partikular na mahalaga — ang pangarap na ibinigay mo **ay hindi nananatili sa mga tala ng pag-access.**"
          },
          {
            "p": "Sa ibang salita, kapag binuksan mo ang resulta ng link, binabasa ng browser ang halagang iyon upang humiling ng kalkulasyon, at ang aming server ay tumatanggap ng halaga para sa kalkulasyon, ibinabalik ang sagot, at pagkatapos ay nakakalimutan ito."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Mangyaring mag-ingat kapag nagpapadala ng mga link sa iba",
        "blocks": [
          {
            "p": "Ang katotohanan na hindi ito nakaimbak sa server ay hindi nangangahulugang ang link ay ligtas. Ang resulta ng link ay naglalaman ng pangarap na ibinigay mo, kaya ang taong tumanggap ng link na iyon ay maaaring basahin ang nilalaman na iyon."
          }
        ]
      },
      {
        "title": "Bakit ang kalkulasyon ay ginagawa sa server ngunit hindi nakaimbak?",
        "blocks": [
          {
            "p": "Ang kalkulasyon mismo ay ginagawa sa server. Ang paghahanap ng mga simbolo ay nangangailangan ng buong diksyunaryo, at ang diksyunaryong iyon ay masyadong malaki upang maipadala sa browser. Ang pagpapanatili ng diksyunaryo sa server ay nangangahulugan din na kapag ang isang pagkakamali ay naituwid, ito ay naipapakita para sa lahat nang sabay-sabay. Gayunpaman, **pagkatapos iproseso ang kahilingan, ang halagang iyon ay hindi ginagamit kahit saan.** Walang code upang ipasok ito sa database."
          },
          {
            "p": "Isang minimal na tala na kinakailangan para sa operasyon ang pinananatili — isang counter upang maiwasan ang parehong tao na magpadala ng labis na mga kahilingan sa maikling panahon. Hindi ito kasama ang nilalaman ng pangarap, at ang access IP ay hindi rin itinatago. Isang halaga lamang, hashed kasama ang petsa, ang binibilang, at ang halagang iyon ay nagbabago kapag nagbago ang araw."
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
              "**Walang diary ng pangarap.** Hindi mo maibabalik ang interpretasyon mula sa nakaraang linggo, at kailangan mong magkaroon ng link upang makita itong muli. Ito ay sinadya — upang lumikha ng isang diary, ang pinaka-pribadong mga sulatin ay dapat na patuloy na nakaimbak.",
              "**Kinakalkula namin ang parehong halaga muli sa bawat pagkakataon.** Walang cache. Sa halip, ang diksyunaryo ay nakatakda, at ang mga patakaran ng pagtutugma ay deterministic, kaya ang parehong teksto ay laging magbibigay ng parehong simbolo — ang mga patakaran ay pumapalit sa kung ano ang garantisadong ng cache.",
              "**Ang pag-refresh ay muling magdadala ng advertisement gate.** Ito ay dahil walang lugar upang iwanan ang mga tala ng pagtingin."
            ]
          }
        ]
      },
      {
        "title": "Sa kaso ng pagbili",
        "blocks": [
          {
            "p": "Kung bumili ka ng ulat, isang tala ng transaksyon ang itatago sa oras na iyon. Ang pagbabayad ay may legal na tinukoy na panahon ng pagpapanatili, at walang kasaysayan ng order, hindi maiproseso ang mga refund. Gayunpaman, kahit na sa mga pagkakataong iyon, **ang teksto ng pangarap na ginamit para sa pagbabasa ay hindi nakalakip sa order** — ito ay muling natanggap at isinulat sa sandaling iyon kapag nilikha ang dokumento pagkatapos ng kumpirmasyon ng pagbabayad."
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
    "title": "Anunsyo",
    "summary": "Ito ay isang lugar upang ipaalam sa iyo ang mga pagbabago na maaaring makaapekto sa iyong paggamit.",
    "backLabel": "Bumalik sa Tahanan",
    "sections": []
  },
  "contact": {
    "eyebrow": "Makipag-ugnay",
    "title": "Mga Katanungan",
    "summary": "Ito ang channel para sa mga katanungan tungkol sa paggamit, mga refund, mga kahilingan sa personal na impormasyon, at mga ulat ng error, kasama ang impormasyon sa negosyo.",
    "backLabel": "Bumalik sa Tahanan",
    "sections": [
      {
        "title": "Makipag-ugnay sa Email",
        "blocks": [
          {
            "p": "Mangyaring ipadala ang mga katanungan sa **{email}**. Kami ay tutugon sa loob ng 2 araw ng negosyo. Para sa mga katanungan tungkol sa pagbabayad at refund, mas mabilis na isama ang iyong **numero ng order o email sa pagbabayad**."
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
              "**Pagbabayad at Refund** — Kung ang dokumento ay hindi pa nalikha o ang halaga ng pagbabayad ay naiiba mula sa order, isang buong refund ang ibibigay. Ang mga kondisyon ay nasa [patakaran sa refund](/refund-policy).",
              "**Personal na Impormasyon** — Tumatanggap kami ng mga kahilingan para sa pag-access, pagwawasto, at pagtanggal. Ang patakaran sa pagproseso ay nasa [patakaran sa privacy](/privacy).",
              "**Ulat ng mga Error sa Pagsasalin** — Kung ang mga simbolo ay natagpuan na mali o ang pagsasalin ay tila kakaiba, mangyaring ipaalam sa amin. Kung isasama mo kung kailan mo isinulat ang kwento ng panaginip na iyon, maaari naming suriin muli gamit ang parehong teksto."
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
              "**Numero ng Rehistro ng Negosyo** — {businessNumber}",
              "**Numero ng Rehistro ng Negosyo sa Mail Order** — {mailOrderNumber}",
              "**Tirahan** — {address}",
              "**Sentro ng Customer** — {customerCenter}",
              "**Email** — {email}",
              "**Opisyal sa Proteksyon ng Personal na Impormasyon** — {privacyOfficer}",
              "**Tagapagbigay ng Hosting** — {hostingProvider}"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Hindi mo kailangang isulat muli ang panaginip na ibinigay mo sa email ng katanungan. Hindi namin iniimbak ang mga input, kaya hindi namin ito mahanap muli, at ang numero ng order ay sapat para sa beripikasyon. Mangyaring isulat lamang ito kung talagang kinakailangan, tulad ng para sa pag-uulat ng mga error sa pagsasalin."
          }
        ]
      }
    ]
  },
  "guide/what-we-do-not-do": {
    "eyebrow": "Mga Prinsipyo ng Serbisyo",
    "title": "Ano ang Hindi Namin Ginagawa",
    "summary": "Hindi kami nagbibigay ng mga numero ng lotto, mga talaarawan ng panaginip, mga pagtukoy sa pagbubuntis, o mga anting-anting. Ipinaliwanag namin kung bakit pinili naming hindi gawin ang bawat isa sa mga ito.",
    "backLabel": "Batayan ng Pagsasalin",
    "sections": [
      {
        "title": "Hindi kami nagbibigay ng mga numero ng lotto",
        "blocks": [
          {
            "p": "Bagaman karaniwang tinatalakay ito sa mga serbisyo ng interpretasyon ng panaginip, hindi namin ito ginagawa. **Walang batayan sa tradisyonal na interpretasyon ng panaginip para sa pagkuha ng mga numero mula sa mga panaginip.** Habang may mga tala ng pag-interpret ng mga panaginip tungkol sa baboy bilang kayamanan, walang patakaran sa anumang literatura na naglalabas ng anim na numero mula dito."
          },
          {
            "p": "Upang lumikha ng mga ito, kailangan naming mag-imbento, at sa sandaling iyon, ang serbisyong ito ay hindi na magiging lugar para sa paghahatid ng mga interpretasyon na ipinasa ng tradisyon. Ito ay lalo na nag-aalala dahil maaari itong humantong sa pagkawala ng pinansyal."
          }
        ]
      },
      {
        "title": "Hindi kami gumagawa ng mga talaarawan ng panaginip",
        "blocks": [
          {
            "p": "Bagaman magiging maginhawa na magkaroon ng tampok upang kolektahin ang mga nakaraang panaginip, kakailanganin nito na **patuloy na itago ang mga panaginip na ibinibigay mo.** Ang mga kwento ng panaginip ang pinaka-pribadong aspeto ng tinatanggap ng serbisyong ito, at nagpasya kaming hindi ipagpalit iyon."
          },
          {
            "p": "Sa halip, ang mga panaginip na nais mong itago ay maaaring **kunin bilang mga imahe o dokumento.** Ang responsibilidad para sa imbakan ay nasa mga gumagamit, hindi sa amin — [Dalawang Paraan upang Itago ang Iyong mga Panaginip](/guide/reports)"
          }
        ]
      },
      {
        "title": "Hindi kami nagtutukoy ng pagbubuntis o kasarian",
        "blocks": [
          {
            "p": "Ipinapahayag lamang namin na isang simbolo na ininterpret bilang isang a conception dream (a conception dream) ang lumitaw. Kung ikaw ay buntis o kung ang bata ay isang anak na babae o anak na lalaki ay **hindi isang bagay na maaaring malaman sa pamamagitan ng mga panaginip.** Ang mga ganitong pahayag ay hindi lumilitaw sa screen o sa mga bayad na dokumento."
          }
        ]
      },
      {
        "title": "Hindi kami nagbebenta ng mga anting-anting o charms",
        "blocks": [
          {
            "p": "Ang isang simbolo na binasa bilang hindi kanais-nais ay hindi dahilan upang bumili ng anumang bagay. Ang isang hindi kanais-nais na panaginip ay tradisyonal na ginamit upang **ipakita ang isang sitwasyon na dapat suriin ngayon**, hindi upang magbayad upang maiwasan ang isang bagay."
          },
          {
            "p": "Hindi kami lumikha ng pagkabahala upang magbenta ng isang bagay batay dito. Ang tanging mga bagay na ibinibenta namin ay ang dalawang nabanggit sa itaas, at wala sa mga ito ang nagbibigay ng karagdagang interpretasyon kundi **mga paraan upang itago ang parehong nilalaman.**"
          }
        ]
      },
      {
        "kind": "note",
        "title": "Hindi kami gumagawa ng mga tiyak na pahayag tungkol sa hinaharap",
        "blocks": [
          {
            "p": "Hindi kami gumagawa ng mga tiyak na pahayag tungkol sa kung mangyayari ang isang bagay, kailan ito mangyayari, o tungkol sa kalusugan, kayamanan, o habang-buhay. Ang paghahatid ng mga kahulugan ng tradisyonal na simbolo at ang paghula sa hinaharap ay magkaibang bagay."
          }
        ]
      },
      {
        "title": "Hindi kami gumagawa ng mga interpretasyon na hindi umiiral",
        "blocks": [
          {
            "p": "Para sa mga simbolo na hindi umiiral sa diksyunaryo, kami ay **magsasabi na hindi namin ito mahanap.** Hindi kami bumubuo ng mga katulad nito o pinupuno ang espasyo ng mga kapani-paniwalang pangungusap. Samakatuwid, ang serbisyong ito ay hindi [gumagamit ng artificial intelligence para sa interpretasyon ng panaginip](/guide/no-ai). Ang modelo ay hindi nagsasabi na hindi nito alam kung ano ang hindi nito alam."
          }
        ]
      }
    ]
  }
} satisfies Record<DocKey, DocPage>;

export const FIL_NOTICES = {
  "kindLabels": {
    "service": "Serbisyo",
    "product": "Mga Ulat",
    "engine": "Kalkulasyon",
    "support": "Suporta"
  },
  "intro": "Ang mga pagbabago sa iyong mga tuntunin ng paggamit — mga presyo, patakaran — ay nai-post dito bago sila magkabisa. Ang mga panloob na pagpapabuti tulad ng pagbilis ng screen ay hindi nai-post dito: ang lumalabas dito ay kung ano ang kailangan mong malaman.",
  "empty": {
    "title": "Walang nai-post na mga anunsyo",
    "body": "Kung may mga pagbabago na dapat ipaalam sa iyo, ilalathala ang mga ito dito."
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
        "Ang mga kwento ng panaginip ay ang pinaka-pribadong halaga na natatanggap ng serbisyong ito. Samakatuwid, hindi sila naitatala sa anumang talahanayan. Ang input ay dinadala lamang sa resulta para sa pagkalkula, at sa sandaling isara ang bintana, ito ay nawawala.",
        "Nagpasya kaming huwag lumikha ng tampok na nangangalap ng mga panaginip at nagpapakita ng daloy (talaarawan ng panaginip). Ito ay isang kapaki-pakinabang na tampok, ngunit upang gawin ito, ang pinaka-pribadong mga sulatin ay dapat na patuloy na nakaimbak.",
        "Kapag ipinadala mo ang link ng resulta sa iba, naglalaman ito ng nilalaman ng panaginip. Mangyaring mag-ingat kapag nagbabahagi."
      ]
    },
    "2026-08-06-engine-version": {
      "title": "Kasama sa mga resulta ang simbolo ng diksyunaryo at mga pamantayan sa pagkalkula.",
      "body": [
        "Ang batayan para sa interpretasyon ay ang tradisyonal na diksyunaryo ng simbolo ng interpretasyon ng panaginip. Ang mga resulta at dokumento ay isasama ang bersyon ng diksyunaryong iyon (hal., 1.2.0) at ang bersyon ng mga patakaran sa pagtutugma (halimbawa, dream-1.0.0). Ang parehong panaginip ay palaging magbibigay ng parehong simbolo batay sa parehong pamantayan.",
        "Kung magdadagdag kami ng mga simbolo sa diksyunaryo o magbabago ng mga kahulugan sa paraang makakaapekto sa mga resulta, ang katotohanang ito ay ipapakita dito. Ito ay dahil ang mga resulta na natanggap mo dati ay maaaring magbago.",
        "Hindi kami lumilikha ng mga tradisyonal na kahulugan na wala sa diksyunaryo. Kung walang mga simbolo na natagpuan, simpleng sinasabi namin na walang natagpuan at nagtatapos."
      ]
    },
    "2026-08-06-conception": {
      "title": "Ipinapaalam lamang namin sa iyo ang tungkol sa isang a conception dream at hindi gumagawa ng mga hatol.",
      "body": [
        "Kung ang mga simbolo na tradisyonal na itinuturing na isang a conception dream ay lumitaw sa panaginip, ipapaalam namin sa iyo ang katotohanang iyon. Gayunpaman, hindi namin tinutukoy ang katayuan ng pagbubuntis o kasarian ng bata — ang mga ganitong pahayag ay walang batayan, at ang mga medikal na hatol ay responsibilidad ng mga institusyong medikal.",
        "Ang pagbanggit ng mga anak na lalaki at babae sa mga tradisyonal na salaysay ay isang pagsasalamin ng mga kaugalian na naipasa, at hindi ito nangangahulugang tama ang aming mga hula."
      ]
    }
  }
} satisfies NoticeCopy;
