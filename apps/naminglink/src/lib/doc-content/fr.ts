import type { DocPage, NoticeCopy } from "./types";
import type { DocKey } from "./ko";

/** Français — `scripts/translate-doc-content.ts`가 만든다. 손으로 고치지 말 것. */
export const FR_DOCS = {
  "about": {
    "eyebrow": "À propos",
    "title": "À propos de Naming-Link",
    "summary": "Nous vous aidons à choisir et à comprendre les noms coréens. Voici sur quoi nous basons nos résultats, et ce que nous ne faisons délibérément pas.",
    "backLabel": "Accueil",
    "sections": [
      {
        "title": "Ce que nous faisons",
        "blocks": [
          {
            "p": "Naming-Link vous aide à **choisir et comprendre les noms coréens** — le hanja derrière le nom d'un enfant, un nom coréen à utiliser à l'étranger, une orthographe en Hangul de votre propre nom, et des souvenirs tels qu'un sceau ou un rapport imprimé."
          },
          {
            "p": "Voir vos résultats est **gratuit et ne nécessite pas de compte.** Les éléments payants ne revendent jamais ce que l'écran vous a déjà montré : ils ouvrent plus de candidats, ajoutent une analyse écrite, ou transforment le résultat en quelque chose que vous pouvez conserver."
          }
        ]
      },
      {
        "title": "Sur quoi se basent nos réponses",
        "blocks": [
          {
            "p": "Le hanja provient de la **table officielle de hanja pour noms de la Cour suprême de Corée.** Chaque caractère a une lecture fixe pour une utilisation dans les noms, et les caractères en dehors de la table ne peuvent pas être enregistrés. Nous n'ajoutons pas à cette liste ni ne choisissons de favoris."
          },
          {
            "p": "Les figures de saju et des cinq éléments sont calculées à partir de l'**almanach lunisolaire coréen**, avec l'heure de naissance corrigée au temps solaire vrai pour le lieu de naissance. La lecture est une référence traditionnelle, pas une prédiction."
          },
          {
            "p": "Les explications écrites sont produites par l'IA. Pour éviter qu'elle **n'invente des choses**, le modèle reçoit uniquement vos données d'entrée et nos propres données de référence, et on lui dit de rester à l'intérieur. Les guides expliquent cela en détail."
          }
        ]
      },
      {
        "title": "Ce que nous ne faisons pas",
        "blocks": [
          {
            "ul": [
              "**Nous ne faisons pas de prédictions.** Rien ici ne promet de la chance, de la richesse ou de la protection.",
              "**Nous ne stockons pas votre nom.** Les résultats gratuits ne sont jamais enregistrés sur nos serveurs, et les documents payants sont livrés sans conserver une copie du fichier.",
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
            "p": "Les détails de l'entreprise et comment nous contacter sont sur la [page de contact](/contact), y compris les remboursements, les demandes de confidentialité et les rapports d'erreurs."
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
            "p": "La table de hanja pour noms ne décide pas seulement quels caractères peuvent être utilisés. **Elle fixe également comment chaque caractère est lu lorsqu'il apparaît dans un nom.** Cette lecture fixe est celle sur laquelle se base l'enregistrement."
          },
          {
            "p": "La plupart des hanja ont plusieurs lectures possibles. Un nom, cependant, est écrit sur des documents et prononcé à voix haute, donc il a besoin d'une seule lecture exacte. La table attribue donc à chaque caractère sa lecture pour une utilisation dans les noms, et aucune autre lecture ne peut être enregistrée."
          }
        ]
      },
      {
        "title": "Ainsi, le son vient en premier",
        "blocks": [
          {
            "p": "C'est pourquoi Naming-Link fixe le son avant de chercher le hanja. Si le nom est \"지은\", le sens ne peut être choisi qu'entre les caractères assignés à la lecture **지** et les caractères assignés à la lecture **은**."
          },
          {
            "p": "Peu importe à quel point un sens est bon, un caractère dont la lecture ne correspond pas ne peut pas être utilisé pour ce nom. Nous ne changeons jamais non plus le son d'un nom pour l'adapter à un caractère — un nom est prononcé toute une vie, et le son est fixé en premier, suivi du hanja."
          }
        ]
      },
      {
        "title": "Les noms de famille sont en dehors de cette table",
        "blocks": [
          {
            "p": "C'est souvent mal compris. **La table régit le prénom, pas le nom de famille.** Un nom de famille suit ce qui est déjà sur le registre familial, donc certaines personnes utilisent des caractères qui ne figurent pas dans la table de hanja."
          },
          {
            "p": "C'est pourquoi Naming-Link traite le hanja de nom de famille différemment. Nous vous aidons uniquement à trouver un nom de famille, et nous laissons un champ pour en entrer un directement, pour les personnes dont le caractère est en dehors de la table. Les noms de famille à deux syllabes tels que Namgung et Seonwoo sont saisis de la même manière."
          }
        ]
      }
    ]
  },
  "guide/how-hangul-transliteration": {
    "eyebrow": "Comment cela fonctionne",
    "title": "Comment nous écrivons votre nom en Hangul",
    "summary": "Comment nous choisissons les sons lors de l'écriture d'un nom étranger en Hangul, et pourquoi nous n'attachons pas de hanja.",
    "backLabel": "Guide",
    "sections": [
      {
        "title": "Nous portons le son, pas le sens",
        "blocks": [
          {
            "p": "Ce service écrit **votre nom** en Hangul. Il ne vous donne pas un nom coréen. Michael devient 마이클 — le même nom, écrit pour que les Coréens puissent le lire et le prononcer. Nous ne l'échangeons pas contre un nom coréen qui signifie quelque chose de similaire."
          },
          {
            "p": "Si un nom coréen est ce que vous voulez, **c'est un service différent**. L'un garde votre nom et ne change que le script ; l'autre propose un nouveau nom."
          }
        ]
      },
      {
        "title": "Des sons que le coréen n'a pas",
        "blocks": [
          {
            "p": "Chaque langue a des sons que le coréen n'a pas — f, v, z, th, et des distinctions vocales que le coréen ne fait pas. Pour ceux-ci, nous écrivons ce que **un locuteur coréen dit réellement** lorsqu'il lit votre nom à voix haute, plutôt que de transcrire la phonétique originale symbole par symbole. L'objectif est l'orthographe qui sera utilisée, pas la plus techniquement fidèle."
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
            "p": "Il n'y a pas de réponse unique. L'orthographe la plus proche du son original, celle la plus couramment utilisée en Corée, et celle la plus facile à écrire sont souvent trois choses différentes. Nous les montrons donc ensemble et expliquons ce qui les sépare."
          },
          {
            "p": "Si aucune d'entre elles ne semble correcte, vous pouvez ajouter un indice sur le son que vous souhaitez et relancer — par exemple, qu'une syllabe particulière devrait être écrite différemment."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Pas de hanja ici",
        "blocks": [
          {
            "p": "Nous n'attachons pas de hanja à une translittération. Le hanja porte un sens, et ce flux concerne le son. Associer des caractères uniquement au son peut vous donner un sens que vous n'avez jamais demandé."
          }
        ]
      }
    ]
  },
  "guide/how-global-to-korean": {
    "eyebrow": "Comment cela fonctionne",
    "title": "Comment nous construisons un nom coréen",
    "summary": "Nous choisissons parmi des noms de famille qui existent, évaluons la facilité avec laquelle le nom est dit et écrit, et demandons à quoi sert le nom.",
    "backLabel": "Guide",
    "sections": [
      {
        "title": "Nous commençons par le nom de famille",
        "blocks": [
          {
            "p": "En Corée, le nom de famille vient en premier, et contrairement aux prénoms, il n'est pas librement inventé — vous l'héritez. Nous ne suggérons donc que des noms de famille que les Coréens ont réellement. Notre pool par défaut est les **20 noms de famille les plus courants**, qui couvrent ensemble environ 80 % de la population."
          },
          {
            "p": "Si votre propre nom de famille coïncide par le son avec un vrai nom coréen — Wang avec 왕, Ye avec 예 — nous mettons celui-ci en premier. Garder un lien avec votre nom d'origine vaut plus qu'un nom de famille choisi au hasard."
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
            "p": "C'est un nom que les gens en Corée vous appelleront réellement, donc la première chose que nous vérifions est si un Coréen peut l'entendre une fois et l'écrire. Un nom qui doit être épelé à chaque fois est un fardeau que vous portez, pas nous."
          },
          {
            "p": "Le sens compte aussi. Les prénoms coréens portent généralement un sens, donc nous vous disons ce que le nom signifie et pourquoi nous l'avons choisi — pas seulement le nom lui-même."
          }
        ]
      },
      {
        "title": "Nous demandons à quoi sert le nom",
        "blocks": [
          {
            "p": "Un nom pour des documents universitaires n'est pas le même qu'un nom que des amis crieront à travers une pièce, ou un pseudo que vous utiliserez en ligne. Nous demandons comment vous prévoyez de l'utiliser et en tenons compte."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ce n'est pas une translittération",
        "blocks": [
          {
            "p": "Ici, nous proposons un **nouveau nom coréen**. Si vous voulez que votre nom existant soit écrit en Hangul — Michael comme 마이클 — consultez le [guide d'orthographe en Hangul](/guide/how-hangul-transliteration)."
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
    "summary": "Comment nous contacter pour des questions, des remboursements, des demandes de confidentialité et des rapports d'erreurs, avec nos détails d'entreprise.",
    "backLabel": "Accueil",
    "sections": [
      {
        "title": "Envoyez-nous un email",
        "blocks": [
          {
            "p": "Écrivez à **{email}**. Nous répondons dans les deux jours ouvrables. Pour toute question concernant une commande — paiement, remboursement, un fichier que vous n'avez pas reçu — veuillez inclure votre **numéro de commande ou l'email avec lequel vous avez payé**."
          },
          {
            "p": "Enquêtes téléphoniques : {customerCenter} (heures d'ouverture des entreprises coréennes)."
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
              "**Corrections** — si un sens de hanja, une lecture ou un calcul semble incorrect, dites-le nous. Mentionner quel écran et ce que vous avez saisi aide beaucoup.",
              "**Tout le reste** — partenariats et presse vont à la même adresse."
            ]
          }
        ]
      },
      {
        "title": "Détails de l'entreprise",
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
    "eyebrow": "Usages",
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
                "label": "Parmi eux, des caractères encore couramment utilisés"
              }
            ]
          },
          {
            "p": "Il existe des caractères qui sont inclus dans la liste des caractères pour noms personnels et **sont légalement acceptables**, mais qui sont considérés comme inappropriés pour les noms."
          },
          {
            "p": "La pensée sous-jacente est que **\"un sens excessif est en réalité indésirable.\"** Cela inclut des caractères considérés comme trop précieux (珍·寶), des caractères perçus comme ayant une présence trop forte (王·帝), et ceux jugés trop grands pour qu'une personne puisse les incarner, comme le ciel ou les divinités. Cela reflète un ancien sens de retenue, croyant qu'un nom peut éclipser la personne."
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
              "**Rois et noblesse** — Caractères qui signifient le statut, comme roi ou empereur",
              "**Êtres divins** — Caractères qui se réfèrent à des royaumes sacrés, comme des dieux ou des esprits",
              "**Saisons et autres** — Caractères liés à des temps ou états spécifiques",
              "**Animaux** — Animaux considérés comme ayant une forte énergie, comme des dragons ou des tigres",
              "**Excessivité** — Caractères perçus comme ayant des significations trop grandes ou débordantes"
            ]
          }
        ]
      },
      {
        "title": "Vous pouvez ajouter ou supprimer des caractères vous-même",
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
            "p": "La valeur par défaut est de **ne pas exclure mais seulement d'afficher**. S'ils sont silencieusement retirés de la liste, cela peut sembler à ceux qui souhaitent utiliser ce caractère comme s'il n'existait pas."
          }
        ]
      },
      {
        "title": "Assurer que les options ne disparaissent pas",
        "blocks": [
          {
            "p": "S'il n'y a plus de caractères utilisables pour cette syllabe, nous lèverons l'exclusion pour cette syllabe et montrerons les candidats. Nous croyons que c'est mieux que de n'avoir aucune option."
          }
        ]
      }
    ]
  },
  "guide/how-korean-to-global": {
    "eyebrow": "Base du service",
    "title": "Quelle est la base de la conversion des noms globaux ?",
    "summary": "Nous fournissons des candidats de cinq perspectives, en maintenant les systèmes d'écriture de chaque langue et en utilisant uniquement des noms existants.",
    "backLabel": "Guide d'utilisation",
    "sections": [
      {
        "title": "Des candidats sont fournis de cinq perspectives",
        "blocks": [
          {
            "p": "Il n'y a pas qu'une seule façon de traduire un nom dans une autre langue. Selon qu'il faut préserver le son ou le sens, choisir un nom naturel dans le contexte local ou privilégier l'individualité, les réponses varieront. Par conséquent, au lieu de présenter une option, nous fournissons **une de chacune des cinq perspectives différentes**."
          },
          {
            "ul": [
              "**Option de préservation du son** — Préserve le son du nom original autant que possible",
              "**Option de traduction du sens** — Traduit le sens contenu dans le nom dans le nom de cette langue",
              "**Option de compromis entre son et sens** — Prend la moitié de chaque",
              "**Option authentique locale** — Choisit des noms qui sont réellement couramment utilisés dans ce contexte culturel",
              "**Option d'individualité et de marque** — Privilégie des noms mémorables et distinctifs"
            ]
          },
          {
            "p": "Cinq options sont garanties d'être fournies. Étant donné que les préférences varient d'une personne à l'autre, nous croyons qu'il est préférable de permettre des choix plutôt que de présenter une seule comme la réponse correcte."
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
            "p": "Par conséquent, nous avons des règles distinctes pour chaque système d'écriture de langue, et le serveur vérifie une fois de plus pour s'assurer que les résultats sont dans ce système d'écriture. Des erreurs telles que l'omission de noms de famille ou le mélange avec le Hangul sont filtrées ici."
          }
        ]
      },
      {
        "title": "Nous utilisons des noms qui sont réellement utilisés",
        "blocks": [
          {
            "p": "Pour éviter de créer des noms qui semblent plausibles mais n'existent pas dans ce pays, nous basons nos options sur des noms existants. Les noms sont utilisés dans des documents et des présentations, donc si une personne locale pense \"il n'y a pas de tel nom\", il ne peut pas être utilisé."
          }
        ]
      },
      {
        "title": "Nous séparons la sélection et la description",
        "blocks": [
          {
            "p": "Nous gérons la tâche de déterminer cinq candidats séparément de la tâche de décrire chaque candidat en détail. Étant donné que la description prend beaucoup de temps, nous séparons cette partie pour la créer simultanément."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Pourquoi cela a-t-il été changé ?",
        "blocks": [
          {
            "p": "Au départ, nous avons créé les cinq perspectives séparément. C'était plus rapide, mais **le nombre de candidats variait à chaque fois.** À mesure que chaque personne sélectionnait des candidats, il y avait des chevauchements ou des divergences, et si un échouait, ce candidat disparaissait complètement, ne laissant que deux ou trois au lieu de cinq."
          },
          {
            "p": "Maintenant, puisque nous déterminons l'ensemble des candidats et la distribution des perspectives en une seule fois, **le nombre est fixe.** Même si une description échoue, les candidats restent et sont présentés avec des informations brèves. Nous croyons qu'il est préférable d'avoir toujours le même nombre, même si cela prend un peu plus de temps."
          }
        ]
      }
    ]
  },
  "guide/how-hanja-meaning": {
    "eyebrow": "Base du service",
    "title": "Quelle est la base de l'appariement des significations de hanja ?",
    "summary": "Tout d'abord, les sons sont fixés, et seuls les hanja qui peuvent être enregistrés avec ce son sont rassemblés, et le sens est considéré comme une combinaison plutôt qu'un caractère unique.",
    "backLabel": "Guide d'utilisation",
    "sections": [
      {
        "title": "D'abord, fixez les sons",
        "blocks": [
          {
            "p": "Si vous avez décidé sur \"지은\", alors **지** et **은** ne changent pas. Nous ne modifions pas le son du nom pour correspondre au hanja. Un nom est quelque chose qui est appelé toute une vie, et nous croyons que l'ordre est que le son est fixé en premier, suivi du hanja."
          },
          {
            "figure": "hanja-match-flow",
            "caption": "C'est l'ordre dans lequel les candidats sont restreints. Il ne s'agit pas de choisir le hanja en premier et de faire correspondre les sons, mais plutôt que les sons viennent en premier, et seuls les caractères désignés pour être lus avec ce son deviennent des candidats."
          }
        ]
      },
      {
        "title": "Rassembler uniquement les hanja qui peuvent être enregistrés avec ce son",
        "blocks": [
          {
            "p": "La table officielle de hanja pour noms a une lecture désignée pour chaque caractère lorsqu'il est utilisé dans des noms. Seuls les caractères désignés pour être lus comme **지** et **은** deviennent des candidats. Peu importe à quel point le sens est bon, si la lecture ne correspond pas, cela ne peut pas être le hanja pour ce nom."
          },
          {
            "p": "La plage de sélection des candidats est de {characterTotal} caractères de la table de la Cour suprême. Les caractères qui ne figurent pas dans cette table ne sont pas présentés du tout — même s'ils sont affichés, ils ne peuvent pas être enregistrés."
          },
          {
            "p": "Le nombre de caractères dans la table publiée par la Cour suprême est légèrement supérieur à cela. La table comprend également **des caractères sans codes de caractères standard**, qui ne peuvent pas être correctement affichés sur les écrans et les documents, donc ces caractères ont été exclus des candidats. Vous devez vérifier auprès de l'autorité compétente si vous pouvez vous enregistrer avec ces caractères."
          }
        ]
      },
      {
        "title": "Le sens est considéré comme une combinaison, pas un caractère unique",
        "blocks": [
          {
            "p": "Le fait que chaque caractère individuel ait un bon sens et que le sens lu lorsque deux caractères sont combinés soit bon sont différents. Les noms sont lus comme des combinaisons, donc nous examinons les combinaisons ensemble. Si vous avez des significations spécifiques que vous souhaitez inclure ou éviter, celles-ci sont prises en compte."
          },
          {
            "p": "Si vous utilisez un caractère de génération, ce caractère est fixe, et des combinaisons sont recherchées à partir des positions restantes. Le nom de famille (성) n'est pas restreint par la table officielle de hanja pour noms, donc il est traité séparément."
          }
        ]
      },
      {
        "title": "Nous indiquons les coutumes d'évitement sans les supprimer",
        "blocks": [
          {
            "p": "Si un caractère traditionnellement considéré comme à éviter est inclus dans les candidats, nous ne l'enlevons pas mais montrons la raison qui l'accompagne. C'est une question de coutume, pas de loi, et vous pouvez choisir de l'exclure complètement de l'écran d'entrée. Pour plus de détails, voir [Hanja traditionnellement évités](/guide/avoid)."
          }
        ]
      },
      {
        "title": "Nous vous informons également des raisons d'exclusion",
        "blocks": [
          {
            "p": "Nous montrons pourquoi certains caractères ont été exclus des candidats. Si nous ne montrons que ce qui a été choisi, vous ne pouvez pas savoir \"pourquoi celui-ci ?\" S'il n'y a plus de caractères utilisables pour cette syllabe, nous lèverons l'exclusion pour cette syllabe et montrerons les candidats."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Comment lire les résultats",
        "blocks": [
          {
            "p": "Les candidats sont **des perspectives, pas des classements**. Le premier ne signifie pas que c'est le meilleur nom ; ils sont sélectionnés de différentes perspectives. Ceux qui privilégient la combinaison de significations, ceux qui choisissent des caractères peu communs, et ceux qui mettent l'accent sur la neutralité sont présentés côte à côte. La réponse varie selon la perspective que vous valorisez."
          }
        ]
      }
    ]
  },
  "guide/what-we-dont-use": {
    "eyebrow": "Nos normes",
    "title": "Ce que nous n'utilisons pas",
    "summary": "Nous n'assignons pas de fortune totale ou de scores numériques, et nous n'utilisons pas de comptes de traits. Les cinq éléments sont utilisés uniquement comme un axe complémentaire. Voici les raisons.",
    "backLabel": "Guide d'utilisation",
    "sections": [
      {
        "title": "Raisons de ne pas assigner de fortune totale ou de scores numériques",
        "blocks": [
          {
            "p": "Il existe des méthodes qui assignent une fortune totale ou des scores numériques aux noms pour les évaluer. Naming-Link ne fournit pas ces chiffres. Les raisons sont au nombre de quatre."
          },
          {
            "p": "**Tout d'abord, il n'y a pas qu'une seule norme.** Les méthodes de calcul de la fortune varient selon les écoles, et le même nom peut être évalué positivement par une norme et négativement par une autre. Nous n'avons pas de base pour décider laquelle est correcte. Il est malhonnête de présenter une comme si c'était la réponse."
          },
          {
            "p": "**Deuxièmement, ces calculs reposent sur des comptes de traits.** Cependant, les données de la Cour suprême n'incluent pas du tout de comptes de traits. De plus, les comptes de traits peuvent varier selon qu'ils sont comptés comme caractères réguliers ou simplifiés et comment les radicaux sont comptés. Puisque les nombres fondamentaux ne sont pas définitivement établis, les scores construits sur eux ne peuvent pas être définitifs."
          },
          {
            "p": "**Troisièmement, les chiffres semblent plus solides que la réalité.** Quand il est dit \"87 points\", cela semble être une valeur mesurée plutôt qu'une interprétation conventionnelle. Ces noms peuvent se sentir pressés par ce chiffre, mettant de côté ce qui est vraiment important (Est-il agréable à appeler ? Le sens convient-il ? Contient-il les souhaits désirés ?)."
          },
          {
            "p": "**Quatrièmement, il n'y a aucun moyen de vérifier.** La relation entre un nom et la vie d'une personne ne peut pas être vérifiée. Convertir quelque chose qui ne peut pas être dit comme juste ou faux en un score donne un nombre qui ne peut pas être confirmé, même s'il ne peut pas être faux."
          },
          {
            "p": "Nous n'utilisons que ce qui peut être **justifié.** La table officielle de hanja de la Cour suprême, les lectures désignées pour chaque caractère, et les significations listées dans la table. Au lieu de cela, nous fournissons des raisons pour lesquelles ce candidat a été sélectionné et pourquoi certains caractères ont été exclus, montrant **des raisons au lieu de scores**."
          }
        ]
      },
      {
        "title": "Nous n'utilisons pas de comptes de traits",
        "blocks": [
          {
            "p": "Les données officielles de hanja fournies par la Cour suprême n'incluent pas de comptes de traits. Parmi les {characterTotal} caractères que nous avons reçus, **pas un seul caractère n'a de comptes de traits.**"
          },
          {
            "p": "Pour utiliser des comptes de traits, nous devrions obtenir des chiffres d'ailleurs, mais si nous ne pouvons pas clarifier d'où viennent ces chiffres et quels critères ont été utilisés pour les compter, cela signifierait juger des noms sur la base de chiffres non fondés. Nous avons décidé de ne pas évaluer les noms sur des valeurs qui ne peuvent pas être justifiées."
          }
        ]
      },
      {
        "title": "Nous utilisons les cinq éléments uniquement comme référence",
        "blocks": [
          {
            "figure": "five-elements",
            "caption": "Les relations entre les cinq éléments. Se déplacer le long du cercle représente la génération mutuelle (相生), tandis que sauter un et presser vers le bas représente la contrainte mutuelle (相剋). Nous utilisons cette relation uniquement comme un axe complémentaire pour comparer les candidats."
          },
          {
            "p": "Si vous avez entré votre mois de naissance, nous utilisons une référence simplifiée des cinq éléments basée sur ce mois comme un axe complémentaire pour comparer les candidats. Cependant, ce n'est pas une analyse de saju précise, et **nous ne prétendons pas que les noms déterminent le destin ou le caractère d'une personne.**"
          },
          {
            "p": "Dans la sélection finale, ce que nous privilégions ce sont les sons, les combinaisons de significations, les valeurs que la famille souhaite transmettre, et si cela peut réellement être enregistré. Si vous n'avez pas entré votre mois de naissance, nous excluons complètement la référence aux cinq éléments de l'analyse — nous ne faisons pas d'hypothèses arbitraires sur des informations inconnues."
          },
          {
            "p": "Si vous souhaitez une analyse précise basée sur le saju, nous couvrons cela dans un rapport détaillé séparé. La raison pour laquelle nous ne privilégions pas les cinq éléments dans l'appariement gratuit de hanja est que nous ne voulons pas présenter des jugements basés sur les cinq éléments dérivés d'une date et d'une heure de naissance incomplètes comme s'ils étaient définitifs."
          }
        ]
      }
    ]
  }
} satisfies Record<DocKey, DocPage>;

export const FR_NOTICES = {
  "kindLabels": {
    "service": "Service",
    "product": "Produits",
    "policy": "Politique",
    "support": "Support"
  },
  "intro": "Les changements de vos conditions d'utilisation — prix, politiques — sont affichés ici avant qu'ils n'entrent en vigueur. Les améliorations internes ne sont pas listées : ce qui apparaît ici est ce que vous devez savoir.",
  "empty": {
    "title": "Pas encore d'avis",
    "body": "Lorsque quelque chose change, cela apparaîtra ici."
  },
  "effective": "Prend effet le {date}",
  "pager": {
    "label": "Pages d'avis",
    "newer": "← Plus récent",
    "older": "Plus ancien →"
  },
  "items": {
    "2026-08-02-contact": {
      "title": "Les pages de contact et à propos sont maintenant ouvertes",
      "body": [
        "Les questions, remboursements, demandes de confidentialité et rapports d'erreurs ont maintenant un endroit unique. La page de contact dans le pied de page liste notre email et les détails de l'entreprise.",
        "Ce sur quoi se basent nos réponses, et ce que nous ne faisons délibérément pas, est écrit sur la page à propos."
      ]
    },
    "2026-08-01-pdf-language": {
      "title": "Les rapports PDF sont émis en anglais pour l'arabe et le khmer",
      "body": [
        "Si vous utilisez le service en arabe ou en khmer, le PDF que vous achetez est produit en anglais. L'outil qui met en page nos documents ne peut pas encore définir des paragraphes dans ces deux scripts.",
        "L'écran reste dans votre langue, et votre nom est imprimé dans votre propre script à l'intérieur du document.",
        "La même note apparaît avant le paiement. Lorsque l'outil prend en charge ces scripts, nous le dirons ici."
      ]
    },
    "2026-08-01-payments-preparing": {
      "title": "Les paiements ne sont pas encore ouverts",
      "body": [
        "Créer un nom et lire le résultat est gratuit aujourd'hui, et aucun compte n'est nécessaire.",
        "Les éléments payants ne sont pas encore en vente. Les montants indiqués sur la page de tarification sont ceux qui s'appliqueront une fois les ventes ouvertes."
      ]
    }
  }
} satisfies NoticeCopy;
