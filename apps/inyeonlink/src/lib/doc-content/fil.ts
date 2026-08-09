import type { DocPage, NoticeCopy } from "./types";
import type { DocKey } from "./ko";

/** Filipino — `scripts/translate-doc-content.ts`가 만든다. 손으로 고치지 말 것. */
export const FIL_DOCS = {
  "about": {
    "eyebrow": "Tungkol sa",
    "title": "Tungkol sa Inyeon-Link",
    "summary": "Ikinukumpara namin ang dalawang tsart ng kapanganakan sa tradisyong Korean Saju. Narito ang aming mga kinakalkula, at kung ano ang hindi namin inaangkin.",
    "backLabel": "Bahay",
    "sections": [
      {
        "title": "Ano ang ginagawa namin",
        "blocks": [
          {
            "p": "Bumubuo ang Inyeon-Link ng dalawang tsart ng kapanganakan mula sa mga petsa at oras ng kapanganakan at ipinapakita **kung paano nagtatagpo ang dalawang set ng enerhiya.** Maaari mo ring basahin ang iyong sariling tsart nang mag-isa at makita kung aling mga temperamento ang karaniwang angkop sa iyo."
          },
          {
            "p": "Ang pagbabasa sa screen ay **libre at hindi nangangailangan ng account.** Ang mga bayad na item ay mga PDF na ulat na nagdadala ng mga numerong hindi kailanman ipinapakita ng screen — lakas ng elemento, mga pares ng sampung diyos at ang mga relasyon sa lahat ng apat na haligi."
          }
        ]
      },
      {
        "title": "Ano ang aming kinakalkula",
        "blocks": [
          {
            "p": "Ang mga tsart ay binubuo mula sa **Korean lunisolar almanac**, at ang oras ng kapanganakan ay itinatama sa **tunay na oras ng araw** para sa lugar ng kapanganakan — ang parehong oras ng orasan ay nangangahulugang ibang posisyon ng araw depende sa kung saan ka ipinanganak."
          },
          {
            "p": "Ang mga marka ay nagmumula lamang sa mga nakatakdang patakaran. Ang mga tradisyunal na konsepto — sampung diyos, ugnayan ng sanga, ang sumusuportang elemento — ay ipinapahayag bilang mga patakaran, kaya **ang parehong input ay palaging nagbibigay ng parehong resulta.** Kapag nagbago ang isang patakaran, nagpapatakbo kami ng regression harness upang matiyak na ang mga mas lumang pagbabasa ay hindi nagbago."
          },
          {
            "p": "**Walang AI na kasangkot.** Ang bawat pangungusap sa screen ay nakatakdang teksto na nakakabit sa isang kinakalkulang resulta."
          }
        ]
      },
      {
        "title": "Ano ang hindi namin inaangkin",
        "blocks": [
          {
            "ul": [
              "**Hindi kami nagkukuwento ng kapalaran.** Walang sinuman dito ang nagsasabi sa iyo na habulin o iwasan ang sinuman. Ito ay isang sanggunian na hinango mula sa isang tradisyon.",
              "**Hindi namin iniimbak ang iyong ipinasok.** Ang mga detalye ng kapanganakan ay ginagamit para sa sandali ng pagkalkula at hindi kailanman isinusulat; ang mga link ng resulta ay nasa bahagi ng URL na hindi ipinapadala ng browser sa server.",
              "**Ang isang marka ay hindi hatol sa isang tao.** Ang mababang numero ay hindi nagpapawalang-bisa sa isang relasyon."
            ]
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Ang pamamaraan ay inilarawan nang detalyado sa [mga gabay](/guide). Ang mga detalye ng kumpanya at kung paano kami makokontak ay nasa [pahina ng contact](/contact)."
          }
        ]
      }
    ]
  }
} satisfies Record<DocKey, DocPage>;

export const FIL_NOTICES = {
  "kindLabels": {
    "service": "Serbisyo",
    "product": "Mga Produkto",
    "policy": "Patakaran",
    "support": "Suporta"
  },
  "intro": "Ang mga pagbabago sa iyong mga tuntunin ng paggamit — mga presyo, patakaran — ay nai-post dito bago sila magkabisa. Ang mga panloob na pagpapabuti ay hindi nakalista: ang lumalabas dito ay kung ano ang kailangan mong malaman.",
  "empty": {
    "title": "Walang mga abiso pa",
    "body": "Kapag may nagbago, ito ay lilitaw dito."
  },
  "effective": "Magiging epektibo {date}",
  "pager": {
    "label": "Mga pahina ng abiso",
    "newer": "← Mas bago",
    "older": "Mas matanda →"
  },
  "items": {}
} satisfies NoticeCopy;
