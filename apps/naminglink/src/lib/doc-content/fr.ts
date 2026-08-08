import type { DocPage, NoticeCopy } from "./types";
import type { DocKey } from "./ko";

/** Français — `scripts/translate-doc-content.ts`가 만든다. 손으로 고치지 말 것. */
export const FR_DOCS = {
  "about": {
    "eyebrow": "À propos",
    "title": "À propos de Naming-Link",
    "summary": "Nous vous aidons à choisir et à comprendre les noms coréens. Voici sur quoi nous basons nos résultats et ce que nous ne faisons délibérément pas.",
    "backLabel": "Accueil",
    "sections": [
      {
        "title": "Ce que nous faisons",
        "blocks": [
          {
            "p": "Naming-Link vous aide à **choisir et comprendre les noms coréens** — le hanja derrière le nom d'un enfant, un nom coréen à utiliser à l'étranger, une écriture en Hangul de votre propre nom, et des souvenirs tels qu'un sceau ou un rapport imprimé."
          },
          {
            "p": "Voir vos résultats est **gratuit et ne nécessite pas de compte.** Les éléments payants ne revendent jamais ce que l'écran vous a déjà montré : ils ouvrent plus de candidats, ajoutent une analyse écrite ou transforment le résultat en quelque chose que vous pouvez conserver."
          }
        ]
      },
      {
        "title": "Sur quoi se basent nos réponses",
        "blocks": [
          {
            "p": "Les hanja proviennent de la **table officielle des hanja de noms de la Cour suprême de Corée.** Chaque caractère a une lecture fixe pour une utilisation dans les noms, et les caractères en dehors de la table ne peuvent pas être enregistrés. Nous n'ajoutons pas à cette liste ni ne choisissons de favoris."
          },
          {
            "p": "Le saju et les figures des cinq éléments sont calculés à partir de l'**almanach lunisolaire coréen**, avec l'heure de naissance corrigée pour correspondre à l'heure solaire réelle du lieu de naissance. La lecture est une référence traditionnelle, pas une prédiction."
          },
          {
            "p": "Les explications écrites sont produites par l'IA. Pour éviter qu'elle **n'invente des choses**, le modèle ne reçoit que votre entrée et nos propres données de référence, et il est demandé de rester à l'intérieur de cela. Les guides expliquent cela en détail."
          }
        ]
      },
      {
        "title": "Ce que nous ne faisons pas",
        "blocks": [
          {
            "ul": [
              "**Nous ne faisons pas de prédictions.** Rien ici ne promet de la chance, de la richesse ou de la protection.",
              "**Nous ne stockons pas votre nom.** Les résultats gratuits ne sont jamais enregistrés sur nos serveurs, et les documents payants sont livrés sans conserver de copie du fichier.",
              "**Payer n'achète pas une meilleure réponse.** Déverrouiller avec une publicité et déverrouiller avec un paiement donnent exactement le même contenu."
            ]
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Le service est disponible en 23 langues. Les PDF payants sont émis en anglais pour l'arabe et le khmer — le générateur de PDF ne prend pas en charge ces scripts — et nous le disons à l'écran avant que vous ne payiez."
          }
        ]
      },
      {
        "title": "Contact",
        "blocks": [
          {
            "p": "Les informations sur l'entreprise et comment nous contacter sont sur la [page de contact](/contact), y compris les remboursements, les demandes de confidentialité et les rapports d'erreur."
          }
        ]
      }
    ]
  },
  "guide/reading": {
    "eyebrow": "Lectures",
    "title": "Lectures fixes — une prononciation par caractère",
    "summary": "La table officielle ne liste pas seulement les caractères. Elle fixe également comment chacun est lu lorsqu'il est utilisé dans un nom.",
    "backLabel": "Guide",
    "sections": [
      {
        "title": "Une lecture fixe pour chaque caractère",
        "blocks": [
          {
            "p": "La table des hanja de noms ne décide pas seulement quels caractères peuvent être utilisés. **Elle fixe également comment chaque caractère est lu lorsqu'il apparaît dans un nom.** Cette lecture fixe est celle sur laquelle l'enregistrement se base."
          },
          {
            "p": "La plupart des hanja ont plusieurs lectures possibles. Un nom, cependant, est écrit sur des documents et prononcé à voix haute, donc il a besoin d'une seule lecture. La table attribue donc à chaque caractère sa lecture pour une utilisation dans les noms, et aucune autre lecture ne peut être enregistrée."
          }
        ]
      },
      {
        "title": "Ainsi, le son vient en premier",
        "blocks": [
          {
            "p": "C'est pourquoi Naming-Link fixe le son avant de chercher des hanja. Si le nom est \"지은\", le sens ne peut être choisi qu'entre les caractères assignés à la lecture **지** et les caractères assignés à la lecture **은**."
          },
          {
            "p": "Aussi bon qu'un sens soit, un caractère dont la lecture ne correspond pas ne peut pas être utilisé pour ce nom. Nous ne changeons également jamais le son d'un nom pour l'adapter à un caractère — un nom est prononcé toute une vie, et le son est fixé en premier, suivi par le hanja."
          }
        ]
      },
      {
        "title": "Les noms de famille sont en dehors de cette table",
        "blocks": [
          {
            "p": "C'est souvent mal compris. **La table régit le prénom, pas le nom de famille.** Un nom de famille suit ce qui est déjà sur le registre familial, donc certaines personnes utilisent des caractères qui ne figurent pas dans la table des hanja de noms."
          },
          {
            "p": "C'est pourquoi Naming-Link traite les hanja de nom de famille différemment. Nous vous aidons seulement à trouver un nom de famille, et nous laissons un champ pour en entrer un directement, pour les personnes dont le caractère est en dehors de la table. Les noms de famille à deux syllabes comme Namgung et Seonwoo sont saisis de la même manière."
          }
        ]
      }
    ]
  },
  "guide/how-hangul-transliteration": {
    "eyebrow": "Comment ça fonctionne",
    "title": "Comment nous écrivons votre nom en Hangul",
    "summary": "Comment nous choisissons les sons lors de l'écriture d'un nom étranger en Hangul, et pourquoi nous n'attachons pas de hanja.",
    "backLabel": "Guide",
    "sections": [
      {
        "title": "Nous portons le son, pas le sens",
        "blocks": [
          {
            "p": "Ce service écrit **votre nom** en Hangul. Il ne vous donne pas un nom coréen. Michael devient 마이클 — le même nom, écrit de manière à ce que les Coréens puissent le lire et le prononcer. Nous ne l'échangeons pas contre un nom coréen qui signifie quelque chose de similaire."
          },
          {
            "p": "Si un nom coréen est ce que vous voulez, **c'est un service différent.** L'un garde votre nom et change seulement l'écriture ; l'autre propose un nouveau nom."
          }
        ]
      },
      {
        "title": "Les sons que le coréen n'a pas",
        "blocks": [
          {
            "p": "Chaque langue a des sons que le coréen n'a pas — f, v, z, th, et des distinctions vocaliques que le coréen ne fait pas. Pour ceux-ci, nous écrivons ce que **un locuteur coréen dit réellement** lorsqu'il lit votre nom à voix haute, plutôt que de transcrire la phonétique originale symbole par symbole. L'objectif est l'orthographe qui sera utilisée, pas la plus techniquement fidèle."
          },
          {
            "p": "La même orthographe peut différer selon l'origine d'un nom, donc nous demandons votre langue et votre pays et travaillons à partir de cette prononciation."
          }
        ]
      },
      {
        "title": "Plusieurs orthographes, côte à côte",
        "blocks": [
          {
            "p": "Il n'y a pas de réponse unique. L'orthographe la plus proche du son original, celle la plus couramment utilisée en Corée, et celle la plus facile à écrire sont souvent trois choses différentes. Donc nous les montrons ensemble et expliquons ce qui les sépare."
          },
          {
            "p": "Si aucune d'elles ne semble correcte, vous pouvez ajouter un indice sur le son que vous souhaitez et relancer l'analyse — par exemple, qu'une syllabe particulière devrait être écrite différemment."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Pas de hanja ici",
        "blocks": [
          {
            "p": "Nous n'attachons pas de hanja à une translittération. Les hanja portent un sens, et ce flux concerne le son. Associer des caractères uniquement au son peut vous donner un sens que vous n'avez jamais demandé."
          }
        ]
      }
    ]
  },
  "guide/how-global-to-korean": {
    "eyebrow": "Comment ça fonctionne",
    "title": "Comment nous construisons un nom coréen",
    "summary": "Nous choisissons parmi les noms de famille qui existent, évaluons la facilité avec laquelle le nom est dit et écrit, et demandons à quoi sert le nom.",
    "backLabel": "Guide",
    "sections": [
      {
        "title": "Nous commençons par le nom de famille",
        "blocks": [
          {
            "p": "En Corée, le nom de famille vient en premier, et contrairement aux prénoms, il n'est pas librement inventé — vous l'héritez. Nous ne suggérons donc que des noms de famille que les Coréens ont réellement. Notre pool par défaut est constitué des **20 noms de famille les plus courants**, qui couvrent ensemble environ 80 % de la population."
          },
          {
            "p": "Si votre propre nom de famille coïncide par le son avec un vrai nom coréen — Wang avec 왕, Ye avec 예 — nous le mettons en premier. Garder un lien avec votre nom d'origine vaut plus qu'un nom de famille choisi au hasard."
          },
          {
            "p": "Vous pouvez choisir un nom de famille vous-même ou nous laisser en recommander un. Dans tous les cas, ce sera **un nom de famille qui existe**."
          }
        ]
      },
      {
        "title": "Facile à dire, facile à écrire",
        "blocks": [
          {
            "p": "C'est un nom que les gens en Corée vont réellement vous appeler, donc la première chose que nous vérifions est si un Coréen peut l'entendre une fois et l'écrire. Un nom qui nécessite d'être épelé à chaque fois est un fardeau que vous portez, pas nous."
          },
          {
            "p": "Le sens compte aussi. Les prénoms coréens portent généralement un sens, donc nous vous disons comment le nom se lit et pourquoi nous l'avons choisi — pas seulement le nom lui-même."
          }
        ]
      },
      {
        "title": "Nous demandons à quoi sert le nom",
        "blocks": [
          {
            "p": "Un nom pour des documents universitaires n'est pas le même qu'un nom que des amis crieront à travers une pièce, ou un pseudonyme que vous utiliserez en ligne. Nous demandons comment vous prévoyez de l'utiliser et en tenons compte."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ce n'est pas une translittération",
        "blocks": [
          {
            "p": "Ici, nous proposons un **nouveau nom coréen**. Si vous souhaitez que votre nom existant soit écrit en Hangul — Michael comme 마이클 — consultez le [guide de translittération en Hangul](/guide/how-hangul-transliteration)."
          }
        ]
      }
    ]
  },
  "notice": {
    "eyebrow": "Avis",
    "title": "Avis",
    "summary": "Où nous annonçons les changements qui affectent votre utilisation du service.",
    "backLabel": "Accueil",
    "sections": []
  },
  "contact": {
    "eyebrow": "Contact",
    "title": "Contactez-nous",
    "summary": "Comment nous contacter pour des questions, des remboursements, des demandes de confidentialité et des rapports d'erreur, avec nos informations d'entreprise.",
    "backLabel": "Accueil",
    "sections": [
      {
        "title": "Envoyez-nous un email",
        "blocks": [
          {
            "p": "Écrivez à **{email}**. Nous répondons dans les deux jours ouvrables. Pour toute question concernant une commande — paiement, remboursement, un fichier que vous n'avez pas reçu — veuillez inclure votre **numéro de commande ou l'email avec lequel vous avez payé**."
          },
          {
            "p": "Enquêtes téléphoniques : {customerCenter} (heures d'ouverture coréennes)."
          }
        ]
      },
      {
        "title": "Que devez-vous envoyer ici",
        "blocks": [
          {
            "ul": [
              "**Paiements et remboursements** — si un document n'a jamais été produit, ou si le montant facturé diffère de votre commande, nous remboursons intégralement. Consultez la [politique de remboursement](/refund-policy).",
              "**Confidentialité** — demandes d'accès, de correction ou de suppression de vos données. Consultez la [politique de confidentialité](/privacy).",
              "**Corrections** — si un sens, une lecture ou un calcul de hanja semble incorrect, dites-le nous. Mentionner quel écran et ce que vous avez entré aide beaucoup.",
              "**Tout le reste** — les partenariats et la presse vont à la même adresse."
            ]
          }
        ]
      },
      {
        "title": "Informations sur l'entreprise",
        "blocks": [
          {
            "ul": [
              "**Entité légale** — {companyName}",
              "**Représentant** — {representative}",
              "**Numéro d'enregistrement commercial** — {businessNumber}",
              "**Numéro de vente par correspondance** — {mailOrderNumber}",
              "**Adresse** — {address}",
              "**Service client** — {customerCenter}",
              "**Email** — {email}",
              "**Responsable de la confidentialité** — {privacyOfficer}",
              "**Fournisseur d'hébergement** — {hostingProvider}"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Vous n'avez pas besoin d'inclure un nom ou une date de naissance dans votre message. Les résultats gratuits ne sont jamais stockés sur nos serveurs, donc nous ne pouvons pas les retrouver — un numéro de commande suffit."
          }
        ]
      }
    ]
  },
  "guide/avoid": {
    "eyebrow": "Coutumes",
    "title": "Caractères traditionnellement évités",
    "summary": "Ce n'est pas interdit par la loi mais c'est une coutume. Nous avons écrit sur ce qui a été évité et pourquoi, et comment nous le gérons.",
    "backLabel": "Guide d'utilisation",
    "sections": [
      {
        "title": "Caractères légalement acceptables",
        "blocks": [
          {
            "stats": [
              {
                "value": "{avoidTotal} caractères",
                "label": "Caractères évités compilés"
              },
              {
                "value": "{avoidCommonlyUsed} caractères",
                "label": "Parmi eux, caractères encore couramment utilisés"
              }
            ]
          },
          {
            "p": "Il existe des caractères qui sont inclus dans la liste des caractères pour les noms personnels et **sont légalement acceptables**, mais qui sont considérés comme inappropriés pour les noms."
          },
          {
            "p": "La pensée sous-jacente est que **\"un sens excessif est en réalité indésirable.\"** Cela inclut des caractères considérés comme trop précieux (珍·寶), des caractères vus comme ayant une présence trop forte (王·帝), et ceux considérés comme trop grands pour qu'une personne puisse les incarner, comme le ciel ou les divinités. Cela reflète un ancien sens de retenue, croyant qu'un nom peut éclipser la personne."
          },
          {
            "p": "**Cependant, ces caractères ne sont pas inutilisables.** Ce n'est pas une interdiction légale mais une coutume, et les coutumes varient selon la région, la famille et la génération, et peuvent changer avec le temps."
          },
          {
            "p": "En fait, parmi les {avoidTotal} caractères que nous avons compilés, {avoidCommonlyUsed} sont encore couramment utilisés dans les noms. Le fait qu'ils soient connus pour être évités mais encore largement utilisés indique que cette coutume n'est pas absolue."
          }
        ]
      },
      {
        "title": "Quelles catégories existent ?",
        "blocks": [
          {
            "p": "Les caractères actuellement compilés sont divisés en sept catégories."
          },
          {
            "ul": [
              "**Trésors et objets** — Caractères qui se réfèrent directement à la richesse ou aux objets",
              "**Ciel et nature** — Choses comme le soleil, la lune et le ciel qui sont considérées comme trop grandes pour qu'une personne puisse les incarner",
              "**Rois et noblesse** — Caractères qui signifient un statut, comme roi ou empereur",
              "**Êtres divins** — Caractères qui se réfèrent à des royaumes sacrés, comme des dieux ou des esprits",
              "**Saisons et autres** — Caractères liés à des temps ou états spécifiques",
              "**Animaux** — Animaux considérés comme ayant une forte énergie, comme des dragons ou des tigres",
              "**Excès** — Caractères vus comme ayant des significations trop grandes ou débordantes"
            ]
          }
        ]
      },
      {
        "title": "Vous pouvez ajouter ou retirer des caractères vous-même",
        "blocks": [
          {
            "p": "Nous ne supprimons pas arbitrairement ces caractères. **Nous avons fourni deux options sur l'écran d'entrée pour que le nommer choisisse comment les gérer.**"
          }
        ]
      },
      {
        "kind": "note",
        "title": "Options disponibles sur l'écran d'entrée",
        "blocks": [
          {
            "p": "**Exclure les caractères évités des candidats** — Si activé, ils sont complètement exclus. Si désactivé, ils restent dans les résultats avec une étiquette \"Traditionnellement évités\" et la raison jointe."
          },
          {
            "p": "**Exclure même les caractères couramment utilisés** — Cela exclut les caractères qui figurent sur la liste d'évitement mais qui sont en réalité largement utilisés (圭·琳·玲·元·太·星·海, etc.). Si activé, les candidats seront considérablement réduits."
          },
          {
            "p": "La valeur par défaut est de **ne pas exclure mais seulement afficher**. S'ils sont silencieusement retirés de la liste, cela peut sembler à ceux qui souhaitent utiliser ce caractère comme s'il n'existait pas."
          }
        ]
      },
      {
        "title": "Assurer que les options ne disparaissent pas",
        "blocks": [
          {
            "p": "S'il n'y a plus de caractères utilisables pour cette syllabe, nous lèverons l'exclusion pour cette syllabe et montrerons les candidats. Nous croyons que c'est mieux que de ne pas avoir d'options du tout."
          }
        ]
      }
    ]
  },
  "guide/how-korean-to-global": {
    "eyebrow": "Base du service",
    "title": "Quelle est la base de la conversion de noms globaux ?",
    "summary": "Nous fournissons des candidats de cinq perspectives, en maintenant les systèmes d'écriture de chaque langue et en utilisant uniquement des noms existants.",
    "backLabel": "Guide d'utilisation",
    "sections": [
      {
        "title": "Les candidats sont fournis de cinq perspectives",
        "blocks": [
          {
            "p": "Il n'y a pas qu'une seule façon de traduire un nom dans une autre langue. Selon qu'il faut préserver le son ou le sens, choisir un nom naturel dans le contexte local ou prioriser l'individualité, les réponses varieront. Par conséquent, au lieu de présenter une option, nous fournissons **une de chacune des cinq perspectives différentes**."
          },
          {
            "ul": [
              "**Option de préservation du son** — Préserve le son du nom original autant que possible",
              "**Option de traduction du sens** — Traduit le sens contenu dans le nom dans le nom de cette langue",
              "**Option de compromis entre son et sens** — Prend la moitié de chaque",
              "**Option d'authenticité locale** — Choisit des noms qui sont réellement couramment utilisés dans ce contexte culturel",
              "**Option d'individualité et de marque** — Priorise les noms qui sont mémorables et distinctifs"
            ]
          },
          {
            "p": "Cinq options sont garanties d'être fournies. Puisque les préférences varient d'une personne à l'autre, nous croyons qu'il est préférable de permettre des choix plutôt que de présenter une comme la réponse correcte."
          }
        ]
      },
      {
        "title": "Chaque langue a des règles différentes pour les systèmes d'écriture",
        "blocks": [
          {
            "p": "Lors de la traduction dans une langue qui n'utilise pas les lettres romaines, elle doit être écrite dans le script de cette langue. Pour le japonais, ce serait kana et kanji ; pour le russe, le mongol et le kazakh, ce serait cyrillique ; pour l'arabe, ce serait le script arabe ; et pour le thaï, le khmer et l'hindi, ce serait leurs scripts respectifs. Si vous l'écrivez en lettres romaines et l'appelez un \"nom japonais\", il ne peut pas être utilisé dans ce pays."
          },
          {
            "p": "Par conséquent, nous avons des règles distinctes pour le système d'écriture de chaque langue, et le serveur vérifie une fois de plus pour s'assurer que les résultats sont dans ce système d'écriture. Les erreurs telles que l'omission des noms de famille ou le mélange avec le Hangul sont filtrées ici."
          }
        ]
      },
      {
        "title": "",
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
            "p": ""
          }
        ]
      },
      {
        "kind": "note",
        "title": "",
        "blocks": [
          {
            "p": "Au départ, nous avons créé les cinq perspectives séparément. C'était plus rapide, mais **le nombre de candidats variait à chaque fois.** Comme chaque personne sélectionnait des candidats, il y avait des chevauchements ou des divergences, et si l'un échouait, ce candidat disparaissait complètement, ne laissant que deux ou trois au lieu de cinq."
          },
          {
            "p": "Maintenant, puisque nous déterminons l'ensemble des candidats et la distribution des perspectives en une seule fois, **le nombre est fixe.** Même si une description échoue, les candidats restent et sont présentés avec des informations brèves. Nous croyons qu'il est préférable d'avoir toujours le même nombre, même si cela prend un peu plus de temps."
          }
        ]
      }
    ]
  }
} satisfies Record<DocKey, DocPage>;

export const FR_NOTICES = {
  "kindLabels": {
    "service": "",
    "product": "",
    "policy": "",
    "support": ""
  },
  "intro": "",
  "empty": {
    "title": "",
    "body": ""
  },
  "effective": "Prend effet {date}",
  "pager": {
    "label": "",
    "newer": "",
    "older": ""
  },
  "items": {
    "2026-08-02-contact": {
      "title": "",
      "body": [
        "",
        ""
      ]
    },
    "2026-08-01-pdf-language": {
      "title": "",
      "body": [
        "",
        "",
        ""
      ]
    },
    "2026-08-01-payments-preparing": {
      "title": "",
      "body": [
        "",
        ""
      ]
    }
  }
} satisfies NoticeCopy;
