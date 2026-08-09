import type { DocPage, NoticeCopy } from "./types";
import type { DocKey } from "./ko";

/** Français — `scripts/translate-doc-content.ts`가 만든다. 손으로 고치지 말 것. */
export const FR_DOCS = {
  "about": {
    "eyebrow": "À propos",
    "title": "À propos de Naming-Link",
    "summary": "Nous vous aidons à choisir et comprendre les noms coréens. Voici sur quoi nous basons nos résultats, et ce que nous ne faisons délibérément pas.",
    "backLabel": "Accueil",
    "sections": [
      {
        "title": "Ce que nous faisons",
        "blocks": [
          {
            "p": "Naming-Link vous aide à **choisir et comprendre les noms coréens** — le hanja derrière le nom d'un enfant, un nom coréen à utiliser à l'étranger, une orthographe en Hangul de votre propre nom, et des souvenirs tels qu'un sceau ou un rapport imprimé."
          },
          {
            "p": "Voir vos résultats est **gratuit et ne nécessite pas de compte.** Les éléments payants ne revendent jamais ce que l'écran vous a déjà montré : ils ouvrent plus de candidats, ajoutent une analyse écrite, ou transforment le résultat en quelque chose que vous pouvez garder."
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
            "p": "Les figures de saju et des cinq éléments sont calculées à partir de l'**almanach lunisolaire coréen**, avec l'heure de naissance corrigée au temps solaire vrai pour le lieu de naissance. La lecture est une référence traditionnelle, pas une prédiction."
          },
          {
            "p": "Les explications écrites sont produites par l'IA. Pour éviter qu'elle **n'invente des choses**, le modèle reçoit uniquement vos données d'entrée et nos propres données de référence, et il est dit de rester à l'intérieur de cela. Les guides expliquent cela en détail."
          }
        ]
      },
      {
        "title": "Ce que nous ne faisons pas",
        "blocks": [
          {
            "ul": [
              "**Nous ne faisons pas de prédictions.** Rien ici ne promet de la chance, de la richesse ou de la protection.",
              "**Nous ne stockons pas votre nom.** Les résultats gratuits ne sont jamais écrits sur nos serveurs, et les documents payants sont livrés sans conserver une copie du fichier.",
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
  "guide": {
    "eyebrow": "Comment fonctionne Naming-Link",
    "title": "Sur quoi nous basons votre nom",
    "summary": "Comment nous choisissons un nom de famille coréen, ce que nous vérifions avant de suggérer un prénom, et comment nous écrivons votre nom en Hangul — avec les parties que nous laissons délibérément de côté.",
    "backLabel": "Guide",
    "sections": [
      {
        "title": "",
        "blocks": [
          {
            "stats": [
              {
                "value": "{characterTotal}",
                "label": "caractères hanja de nom"
              },
              {
                "value": "{syllableCount}",
                "label": "syllabes en Hangul couvertes"
              },
              {
                "value": "{effectiveDate}",
                "label": "date d'entrée en vigueur de la table"
              },
              {
                "value": "{avoidTotal}",
                "label": "caractères traditionnellement évités"
              }
            ]
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
            "p": "La table des hanja de noms ne décide pas seulement quels caractères peuvent être utilisés. **Elle fixe également comment chaque caractère est lu lorsqu'il apparaît dans un nom.** Cette lecture fixe est celle sur laquelle se base l'enregistrement."
          },
          {
            "p": "La plupart des hanja ont plusieurs lectures possibles. Un nom, cependant, est écrit sur des documents et prononcé à voix haute, donc il a besoin d'exactement une. La table attribue donc à chaque caractère sa lecture pour une utilisation dans les noms, et aucune autre lecture ne peut être enregistrée."
          }
        ]
      },
      {
        "title": "Ainsi, le son vient en premier",
        "blocks": [
          {
            "p": "C'est pourquoi Naming-Link fixe le son avant de chercher des hanja. Si le nom est \"지은\", la signification ne peut être choisie qu'entre les caractères assignés à la lecture **지** et les caractères assignés à la lecture **은**."
          },
          {
            "p": "Aussi bonne qu'une signification soit, un caractère dont la lecture ne correspond pas ne peut pas être utilisé pour ce nom. Nous ne changeons également jamais le son d'un nom pour l'adapter à un caractère — un nom est prononcé toute une vie, et le son est fixé en premier, avec le hanja suivant."
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
            "p": "C'est pourquoi Naming-Link traite les hanja de nom de famille différemment. Nous vous aidons uniquement à trouver un nom de famille, et nous laissons un champ pour en entrer un directement, pour les personnes dont le caractère est en dehors de la table. Les noms de famille à deux syllabes tels que Namgung et Seonwoo sont entrés de la même manière."
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
            "p": "Ce service écrit **votre nom** en Hangul. Il ne vous donne pas un nom coréen. Michael devient 마이클 — le même nom, écrit de manière à ce que les Coréens puissent le lire et le prononcer. Nous ne l'échangeons pas contre un nom coréen qui signifie quelque chose de similaire."
          },
          {
            "p": "Si un nom coréen est ce que vous voulez, **c'est un service différent**. L'un garde votre nom et change seulement l'écriture ; l'autre propose un nouveau nom."
          }
        ]
      },
      {
        "title": "Les sons coréens n'ont pas",
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
            "p": "Il n'y a pas de réponse unique. L'orthographe la plus proche du son original, celle la plus couramment utilisée en Corée, et celle la plus facile à écrire sont souvent trois choses différentes. Nous les montrons donc ensemble et expliquons ce qui les sépare."
          },
          {
            "p": "Si aucune d'elles ne semble correcte, vous pouvez ajouter un indice sur le son que vous souhaitez et relancer — par exemple, qu'une syllabe particulière devrait être écrite différemment."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Pas de hanja ici",
        "blocks": [
          {
            "p": "Nous n'attachons pas de hanja à une translittération. Les hanja portent un sens, et ce processus concerne le son. Associer des caractères uniquement au son peut vous donner un sens que vous n'avez jamais demandé."
          }
        ]
      }
    ]
  },
  "guide/how-global-to-korean": {
    "eyebrow": "Comment ça fonctionne",
    "title": "Comment nous construisons un nom coréen",
    "summary": "Nous choisissons parmi les noms de famille qui existent, évaluons la facilité avec laquelle le nom est prononcé et écrit, et demandons à quoi sert le nom.",
    "backLabel": "Guide",
    "sections": [
      {
        "title": "Nous commençons par le nom de famille",
        "blocks": [
          {
            "p": "En Corée, le nom de famille vient en premier, et contrairement aux prénoms, il n'est pas librement inventé — vous l'héritez. Nous ne suggérons donc que des noms de famille que les Coréens ont réellement. Notre pool par défaut est constitué des **20 noms de famille les plus courants**, qui couvrent ensemble environ 80 % de la population."
          },
          {
            "p": "Si votre propre nom de famille coïncide avec un vrai nom coréen par le son — Wang avec 왕, Ye avec 예 — nous mettons celui-ci en premier. Garder un lien avec votre nom original vaut plus qu'un nom de famille choisi au hasard."
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
            "p": "C'est un nom que les gens en Corée vous appelleront réellement, donc la première chose que nous vérifions est si un Coréen peut l'entendre une fois et l'écrire. Un nom qui nécessite d'être épelé à chaque fois est un fardeau que vous portez, pas nous."
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
            "p": "Un nom pour des documents universitaires n'est pas le même qu'un nom que des amis crieront à travers une pièce, ou un pseudonyme que vous utiliserez en ligne. Nous demandons comment vous prévoyez de l'utiliser et en tenons compte."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ce n'est pas une translittération",
        "blocks": [
          {
            "p": "Ici, nous proposons un **nouveau nom coréen**. Si vous souhaitez que votre nom existant soit écrit en Hangul — Michael comme 마이클 — consultez le [guide d'orthographe en Hangul](/guide/how-hangul-transliteration)."
          }
        ]
      }
    ]
  },
  "notice": {
    "eyebrow": "Avis",
    "title": "Avis",
    "summary": "Où nous annonçons des changements qui affectent la façon dont vous utilisez le service.",
    "backLabel": "Accueil",
    "sections": []
  },
  "contact": {
    "eyebrow": "Contact",
    "title": "Contactez-nous",
    "summary": "Comment nous joindre pour des questions, des remboursements, des demandes de confidentialité et des rapports d'erreurs, avec nos coordonnées.",
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
              "**Tout le reste** — les partenariats et la presse vont à la même adresse."
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
    "title": "Caractères Traditionnellement Évités",
    "summary": "Ce n'est pas interdit par la loi mais c'est une coutume. Nous avons écrit sur ce qui a été évité et pourquoi, et comment nous le gérons.",
    "backLabel": "Guide d'Utilisation",
    "sections": [
      {
        "title": "Caractères Légalement Acceptables",
        "blocks": [
          {
            "stats": [
              {
                "value": "{avoidTotal} caractères",
                "label": "Caractères Évités Compilés"
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
            "p": "La pensée sous-jacente est que **\"un sens excessif est en réalité indésirable.\"** Cela reflète un ancien sens de la retenue, croyant qu'un nom peut éclipser la personne."
          },
          {
            "ul": [
              "珍·寶 — caractères considérés comme trop précieux",
              "王·帝 — caractères considérés comme portant trop de force",
              "ciel et divinités — trop grand pour qu'une personne puisse incarner"
            ]
          },
          {
            "p": "**Cependant, ces caractères ne sont pas inutilisables.** Ce n'est pas une prohibition légale mais une coutume, et les coutumes varient selon la région, la famille et la génération, et peuvent changer avec le temps."
          },
          {
            "p": "En fait, parmi les {avoidTotal} caractères que nous avons compilés, {avoidCommonlyUsed} sont encore couramment utilisés dans les noms. Le fait qu'ils soient connus pour être évités mais encore largement utilisés indique que cette coutume n'est pas absolue."
          }
        ]
      },
      {
        "title": "Quelles Catégories Existe-t-il ?",
        "blocks": [
          {
            "p": "Les caractères actuellement compilés sont divisés en sept catégories."
          },
          {
            "ul": [
              "**Trésors et Objets** — Caractères qui se réfèrent directement à la richesse ou aux objets",
              "**Ciel et Nature** — Des choses comme le soleil, la lune et le ciel qui sont considérées comme trop grandes pour qu'une personne puisse les incarner",
              "**Rois et Noblesse** — Caractères qui signifient un statut, comme roi ou empereur",
              "**Êtres Divins** — Caractères qui se réfèrent à des royaumes sacrés, comme des dieux ou des esprits",
              "**Saisons et Autres** — Caractères liés à des temps ou états spécifiques",
              "**Animaux** — Animaux considérés comme ayant une forte énergie, comme des dragons ou des tigres",
              "**Excessivité** — Caractères vus comme ayant des significations trop grandes ou débordantes"
            ]
          }
        ]
      },
      {
        "title": "Vous Pouvez Ajouter ou Supprimer des Caractères Vous-Même",
        "blocks": [
          {
            "p": "Nous ne supprimons pas arbitrairement ces caractères. **Nous avons fourni deux options sur l'écran d'entrée pour que le nommeur choisisse comment les gérer.**"
          }
        ]
      },
      {
        "kind": "note",
        "title": "Options Disponibles sur l'Écran d'Entrée",
        "blocks": [
          {
            "p": "**Exclure les Caractères Évités des Candidats** — Si activé, ils sont complètement exclus. Si désactivé, ils restent dans les résultats avec une étiquette \"Traditionnellement Évitée\" et la raison attachée."
          },
          {
            "p": "**Exclure Même les Caractères Couramment Utilisés** — Cela exclut les caractères qui sont sur la liste d'évitement mais qui sont en réalité largement utilisés (圭·琳·玲·元·太·星·海, etc.). Si activé, les candidats seront considérablement réduits."
          },
          {
            "p": "La valeur par défaut est de **ne pas exclure mais seulement afficher** ces caractères. S'ils sont silencieusement retirés de la liste, cela peut sembler à ceux qui veulent utiliser ce caractère qu'il n'existe pas."
          }
        ]
      },
      {
        "title": "Assurer que les Options Ne Disparaissent Pas",
        "blocks": [
          {
            "p": "S'il n'y a plus de caractères utilisables pour cette syllabe, nous lèverons l'exclusion pour cette syllabe et montrerons des candidats. Nous croyons que c'est mieux que de ne pas avoir d'options du tout."
          }
        ]
      }
    ]
  },
  "guide/how-korean-to-global": {
    "eyebrow": "Base du Service",
    "title": "Quelle Est la Base de la Conversion de Noms Globaux ?",
    "summary": "Nous fournissons des candidats selon cinq perspectives, en maintenant les systèmes d'écriture de chaque langue et en utilisant uniquement des noms existants.",
    "backLabel": "Guide d'Utilisation",
    "sections": [
      {
        "title": "Les Candidats Sont Fournis Selon Cinq Perspectives",
        "blocks": [
          {
            "p": "Il n'y a pas qu'une seule façon de traduire un nom dans une autre langue. Selon qu'il faut préserver le son ou le sens, choisir un nom naturel dans le contexte local ou prioriser l'individualité, les réponses varieront. Par conséquent, au lieu de présenter une option, nous fournissons **une de chacune des cinq perspectives différentes**."
          },
          {
            "ul": [
              "**Option de Préservation du Son** — Préserve le son du nom original autant que possible",
              "**Option de Traduction du Sens** — Traduit le sens contenu dans le nom dans le nom de cette langue",
              "**Option de Compromis entre Son et Sens** — Prend la moitié de chaque",
              "**Option Authentique Locale** — Choisit des noms qui sont réellement couramment utilisés dans ce contexte culturel",
              "**Option d'Individualité et de Marque** — Priorise des noms qui sont mémorables et distinctifs"
            ]
          },
          {
            "p": "Cinq options sont garanties d'être fournies. Étant donné que les préférences varient d'une personne à l'autre, nous croyons qu'il est préférable de permettre des choix plutôt que de présenter une seule comme la réponse correcte."
          }
        ]
      },
      {
        "title": "Chaque Langue a des Règles Différentes pour les Systèmes d'Écriture",
        "blocks": [
          {
            "p": "Lors de la traduction dans une langue qui n'utilise pas les lettres romaines, elle doit être écrite dans le script de cette langue. Pour le japonais, ce serait kana et kanji ; pour le russe, le mongol et le kazakh, ce serait cyrillique ; pour l'arabe, ce serait l'écriture arabe ; et pour le thaï, le khmer et l'hindi, ce serait leurs scripts respectifs. Si vous l'écrivez en lettres romaines et l'appelez un \"nom japonais\", il ne peut pas être utilisé dans ce pays."
          },
          {
            "p": "Par conséquent, nous avons des règles distinctes pour chaque système d'écriture de langue, et le serveur vérifie une fois de plus pour s'assurer que les résultats sont dans ce système d'écriture. Des erreurs telles que l'omission de noms de famille ou le mélange avec le Hangul sont filtrées ici."
          }
        ]
      },
      {
        "title": "Nous Utilisons des Noms Qui Sont Réellement Utilisés",
        "blocks": [
          {
            "p": "Pour éviter de créer des noms qui semblent plausibles mais qui n'existent pas dans ce pays, nous basons nos options sur des noms existants. Les noms sont utilisés dans des documents et des présentations, donc si une personne locale pense \"il n'y a pas de tel nom,\" il ne peut pas être utilisé."
          }
        ]
      },
      {
        "title": "Nous séparons la sélection et la description",
        "blocks": [
          {
            "p": "Nous gérons la tâche de déterminer cinq candidats séparément de la tâche de décrire chaque candidat en détail. Comme la description prend beaucoup de temps, nous séparons cette partie pour la créer simultanément."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Pourquoi cela a-t-il été changé ?",
        "blocks": [
          {
            "p": "Au départ, nous créions les cinq perspectives séparément. C'était plus rapide, mais **le nombre de candidats variait à chaque fois.** À mesure que chaque personne sélectionnait des candidats, il y avait des chevauchements ou des divergences, et si l'un échouait, ce candidat disparaissait complètement, ne laissant que deux ou trois au lieu de cinq."
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
    "title": "Quelle est la base pour faire correspondre les significations des hanja ?",
    "summary": "Tout d'abord, les sons sont fixes, et seuls les hanja qui peuvent être enregistrés avec ce son sont rassemblés, et la signification est considérée comme une combinaison plutôt qu'un seul caractère.",
    "backLabel": "Guide d'utilisation",
    "sections": [
      {
        "title": "D'abord, fixez les sons",
        "blocks": [
          {
            "p": "Si vous avez décidé sur \"지은\", alors **지** et **은** ne changent pas. Nous ne modifions pas le son du nom pour correspondre au hanja. Un nom est quelque chose qui est appelé pour toute une vie, et nous croyons que l'ordre est que le son est fixé en premier, suivi par le hanja."
          },
          {
            "figure": "hanja-match-flow",
            "labels": {
              "soundStep": "① Fixez le son",
              "soundNote": "Nous ne le changeons jamais pour correspondre à un caractère",
              "tableStep": "② Filtrer par la table officielle",
              "tableBody": "seuls les caractères assignés à cette lecture",
              "tableNote": "parmi tous les {total} caractères dans la table",
              "tableNoteNoCount": "seuls les caractères qui sont dans la table",
              "combineStep": "③ Lisez les deux ensemble",
              "combineNote": "la signification est comment la paire se lit, pas chaque caractère seul"
            },
            "caption": "C'est l'ordre dans lequel les candidats sont réduits. Il ne s'agit pas de choisir le hanja en premier et de faire correspondre les sons, mais plutôt que les sons viennent en premier, et seuls les caractères désignés pour être lus avec ce son deviennent des candidats."
          }
        ]
      },
      {
        "title": "Rassemblez uniquement les hanja qui peuvent être enregistrés avec ce son",
        "blocks": [
          {
            "p": "La table officielle des hanja de noms a une lecture désignée pour chaque caractère lorsqu'il est utilisé dans des noms. Seuls les caractères désignés pour être lus comme **지** et **은** deviennent des candidats. Peu importe la qualité de la signification, si la lecture ne correspond pas, cela ne peut pas être le hanja pour ce nom."
          },
          {
            "p": "La plage pour sélectionner des candidats est de {characterTotal} caractères de la table de la Cour Suprême. Les caractères qui ne sont pas dans cette table ne sont pas présentés du tout — même s'ils sont montrés, ils ne peuvent pas être enregistrés."
          },
          {
            "p": "Le nombre de caractères dans la table publiée par la Cour Suprême est légèrement supérieur à cela. La table comprend également **des caractères sans codes de caractères standard**, qui ne peuvent pas être correctement affichés sur les écrans et les documents, donc ces caractères ont été exclus des candidats. Vous devez vérifier auprès de l'autorité compétente si vous pouvez vous enregistrer avec ces caractères."
          }
        ]
      },
      {
        "title": "La signification est considérée comme une combinaison, pas un seul caractère",
        "blocks": [
          {
            "p": "La signification de chaque caractère individuel étant bonne et la signification lue lorsque deux caractères sont combinés étant bonne sont différentes. Les noms sont lus comme des combinaisons, donc nous examinons les combinaisons ensemble. Si vous avez des significations spécifiques que vous souhaitez inclure ou éviter, celles-ci sont prises en compte."
          },
          {
            "p": "Si vous utilisez un caractère de génération, ce caractère est fixe, et des combinaisons sont recherchées à partir des positions restantes. Le nom de famille (성) n'est pas restreint par la table officielle des hanja de noms, donc il est traité séparément."
          }
        ]
      },
      {
        "title": "Nous indiquons les coutumes d'évitement sans les supprimer",
        "blocks": [
          {
            "p": "Si un caractère traditionnellement considéré comme à éviter est inclus dans les candidats, nous ne l'enlevons pas mais montrons la raison avec. C'est une question de coutume, pas de loi, et vous pouvez choisir de l'exclure complètement de l'écran d'entrée. Pour plus de détails, voir [Hanja traditionnellement évités](/guide/avoid)."
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
            "p": "Les candidats sont **des perspectives, pas des classements**. Le premier ne signifie pas que c'est le meilleur nom ; ils sont sélectionnés selon différentes perspectives. Ceux qui priorisent la combinaison de significations, ceux qui choisissent des caractères peu communs, et ceux qui mettent l'accent sur la neutralité sont présentés côte à côte. La réponse varie selon la perspective que vous valorisez."
          }
        ]
      }
    ]
  },
  "guide/what-we-dont-use": {
    "eyebrow": "Nos normes",
    "title": "Ce que nous n'utilisons pas",
    "summary": "Nous n'assignons pas de fortune totale ou de scores numériques, ni nous n'utilisons des comptes de traits. Les cinq éléments sont utilisés uniquement comme un axe complémentaire. Voici les raisons.",
    "backLabel": "Guide d'utilisation",
    "sections": [
      {
        "title": "Raisons de ne pas assigner de fortune totale ou de scores numériques",
        "blocks": [
          {
            "p": "Il existe des méthodes qui assignent une fortune totale ou des scores numériques aux noms pour les évaluer. Naming-Link ne fournit pas ces chiffres. Les raisons sont au nombre de quatre."
          },
          {
            "p": "**Tout d'abord, il n'y a pas qu'une seule norme.** Les méthodes de calcul de la fortune varient selon l'école, et le même nom peut être évalué positivement par une norme et négativement par une autre. Nous n'avons pas de base pour décider laquelle est correcte. Il est malhonnête de présenter l'une comme si c'était la réponse."
          },
          {
            "p": "**Deuxièmement, ces calculs reposent sur des comptes de traits.** Cependant, les données de la Cour Suprême n'incluent pas du tout de comptes de traits. De plus, les comptes de traits peuvent varier selon qu'ils sont comptés comme caractères réguliers ou simplifiés et comment les radicaux sont comptés. Puisque les nombres fondamentaux ne sont pas définitivement établis, les scores construits sur eux ne peuvent pas être définitifs."
          },
          {
            "p": "**Troisièmement, les chiffres semblent plus solides que la réalité.** Quand il est dit \"87 points\", cela ressemble à une valeur mesurée plutôt qu'à une interprétation conventionnelle. Ceux qui nomment peuvent se sentir pressés par ce chiffre, mettant de côté ce qui est vraiment important (Est-il agréable à appeler ? La signification convient-elle ? Contient-il les souhaits désirés ?)."
          },
          {
            "p": "**Quatrièmement, il n'y a aucun moyen de vérifier.** La relation entre un nom et la vie d'une personne ne peut pas être vérifiée. Convertir quelque chose qui ne peut pas être dit comme vrai ou faux en un score aboutit à un nombre qui ne peut pas être confirmé, même s'il ne peut pas être faux."
          },
          {
            "p": "Nous n'utilisons que ce qui peut être **justifié.** La table officielle des hanja de noms de la Cour Suprême, les lectures désignées pour chaque caractère, et les significations listées dans la table. Au lieu de cela, nous fournissons des raisons pour lesquelles ce candidat a été sélectionné et pourquoi certains caractères ont été exclus, montrant **des raisons au lieu de scores**."
          }
        ]
      },
      {
        "title": "Nous n'utilisons pas de comptes de traits",
        "blocks": [
          {
            "p": "Les données officielles des hanja de noms fournies par la Cour Suprême n'incluent pas de comptes de traits. Parmi les {characterTotal} caractères que nous avons reçus, **pas un seul caractère n'a de comptes de traits.**"
          },
          {
            "p": "Pour utiliser des comptes de traits, nous devrions obtenir des chiffres d'ailleurs, mais si nous ne pouvons pas clarifier d'où viennent ces chiffres et quels critères ont été utilisés pour les compter, cela signifierait juger les noms sur la base de chiffres non fondés. Nous avons décidé de ne pas évaluer les noms sur des valeurs qui ne peuvent pas être justifiées."
          }
        ]
      },
      {
        "title": "Nous utilisons les cinq éléments uniquement comme référence",
        "blocks": [
          {
            "figure": "five-elements",
            "labels": {
              "alt": "Les cinq éléments placés en cercle : la génération se déroule entre voisins, le contrôle saute un",
              "wood": "bois",
              "fire": "feu",
              "earth": "terre",
              "metal": "métal",
              "water": "eau",
              "saeng": "Génération — chaque élément engendre son voisin",
              "geuk": "Contrôle — chaque élément restreint celui qu'il saute"
            },
            "caption": "Les relations entre les cinq éléments. Se déplacer le long du cercle représente une génération mutuelle (相生), tandis que sauter un élément et en presser un autre représente une restriction mutuelle (相剋). Nous utilisons cette relation uniquement comme un axe supplémentaire pour comparer les candidats."
          },
          {
            "p": "Si vous avez saisi votre mois de naissance, nous utilisons une référence simplifiée des cinq éléments basée sur ce mois comme un axe supplémentaire pour comparer les candidats. Cependant, cela ne constitue pas une analyse précise de saju, et **nous ne prétendons pas que les noms déterminent le destin ou le caractère d'une personne.**"
          },
          {
            "p": "Dans la sélection finale, ce que nous priorisons ce sont les sons, les combinaisons de significations, les valeurs que la famille souhaite transmettre, et si cela peut réellement être enregistré. Si vous n'avez pas saisi votre mois de naissance, nous excluons complètement la référence aux cinq éléments de l'analyse — nous ne faisons pas d'hypothèses arbitraires sur des informations inconnues."
          },
          {
            "p": "Si vous souhaitez une analyse précise basée sur le saju, nous le couvrons dans un rapport détaillé séparé. La raison pour laquelle nous ne priorisons pas les cinq éléments dans l'appariement gratuit de hanja est que nous ne voulons pas présenter des jugements basés sur les cinq éléments dérivés d'une date et d'une heure de naissance incomplètes comme s'ils étaient définitifs."
          }
        ]
      }
    ]
  },
  "guide/what-we-sell": {
    "eyebrow": "Produits payants",
    "title": "Que comprend les produits payants ?",
    "summary": "Nous clarifions ce qui est visible gratuitement et quelles fonctionnalités supplémentaires sont disponibles avec le paiement pour chaque produit. Les prix sont récupérés à partir des paramètres réels du produit.",
    "backLabel": "Guide d'utilisation",
    "sections": [
      {
        "title": "Que voit-on gratuitement ?",
        "blocks": [
          {
            "p": "Créer un nom et voir les résultats est **gratuit**. Aucune inscription de membre n'est requise. Vous pouvez voir les significations correspondantes des hanja, créer des noms coréens, la conversion de noms mondiaux, et la notation de prononciation en Hangul, ainsi que les résultats recommandés et leurs justifications à l'écran."
          },
          {
            "p": "Les produits payants ne **revendent pas ce qui a déjà été affiché à l'écran.** Ils ouvrent plus de candidats, ajoutent plus d'explications, ou créent un format qui peut être stocké ou transmis."
          }
        ]
      },
      {
        "title": "Divulgation complète de tous les candidats — {priceUnlock}",
        "blocks": [
          {
            "p": "Les résultats recommandés sont structurés pour ouvrir les candidats un par un. Lors de la visualisation des publicités, un candidat s'ouvre à la fois, tandis que ce produit **ouvre tous les candidats restants en une seule fois**."
          },
          {
            "p": "Si vous n'êtes pas pressé, vous n'avez pas besoin d'acheter. Les **résultats de l'ouverture via des publicités et ceux du paiement sont complètement les mêmes** — il s'agit simplement d'une question d'attente, et le paiement ne donne pas de meilleurs candidats."
          }
        ]
      },
      {
        "title": "Détails des Hanja — Trois Étapes",
        "blocks": [
          {
            "p": "Il existe trois produits détaillés dans le processus de sélection des hanja à attacher à un nom en Hangul."
          },
          {
            "ul": [
              "**Maximum 5 candidats hanja détaillés** — {priceFiveDetail}. Vous pouvez développer les explications pour jusqu'à cinq candidats à l'écran. Il n'y a pas de PDF.",
              "**Maximum 10 candidats hanja PDF détaillé étendu** — {priceTenDetail}. Le nombre de candidats augmente à dix, et un document PDF est inclus.",
              "**Maximum 10 candidats hanja saju et rapport complet sur les cinq éléments** — {priceTenSaju}. En plus de ce qui précède, il inclut le tableau de saju dérivé de la date de naissance et les forces des cinq éléments, examinant pourquoi un hanja particulier convient à ce nom du point de vue des cinq éléments."
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Le Hanja lui-même est une information publique",
        "blocks": [
          {
            "p": "Les hanja utilisables et leurs significations proviennent de l'**informations publiques** de la table des hanja de noms établie par la Cour suprême de Corée, et tous sont disponibles publiquement dans les documents d'orientation du service. Ce que les produits payants vendent n'est pas l'information hanja mais **l'acte de sélectionner et d'expliquer selon le nom**."
          }
        ]
      },
      {
        "title": "PDFs pour les utilisateurs mondiaux",
        "blocks": [
          {
            "p": "Documents disponibles pour convertir des noms étrangers en noms coréens ou écrire des noms en Hangul. Les prix suivent les montants affichés à l'écran de paiement."
          },
          {
            "ul": [
              "**Rapport Premium sur le Nom Coréen** — 3 pages. Comprend une couverture en calligraphie, la signification du nom et la raison de son choix, ainsi que l'interprétation du saju et des cinq éléments.",
              "**Art du Nom en Hangul** — 2 pages. Comprend une couverture en calligraphie et un guide de prononciation. Il contient comment écrire le nom en Hangul et comment le prononcer."
            ]
          }
        ]
      },
      {
        "title": "Tampon de Nom",
        "blocks": [
          {
            "p": "Nous gravons le nom créé à l'écran dans un tampon physique et vous l'envoyons. Les prix varient selon le modèle — sceau rond {priceStampRound}, sceau carré {priceStampSquare}, sceau en ébène {priceStampEbony}. L'expédition internationale est également disponible."
          },
          {
            "p": "**À partir d'ici, les produits incluent l'expédition.** Contrairement aux articles précédents, la production et l'expédition prennent du temps, et une adresse de réception est requise. Les informations d'expédition ne sont utilisées que pour le traitement des commandes et la conservation légale, et une fois le traitement terminé, elles seront détruites après la période spécifiée dans la politique."
          }
        ]
      },
      {
        "title": "Choses à savoir avant d'acheter",
        "blocks": [
          {
            "p": "**Les produits numériques sont fournis immédiatement après le paiement.** Vous pouvez annuler et recevoir un remboursement complet à tout moment avant le début du téléchargement, mais une fois le téléchargement terminé, le retrait en raison d'un simple changement d'avis est restreint (Article 17, Paragraphe 2 de la Loi sur le commerce électronique). Cette condition est séparément convenue sur l'écran de paiement."
          },
          {
            "p": "**Les plaintes concernant le contenu des résultats ne sont pas un motif de remboursement.** Cependant, si le document n'a pas été créé, le fichier ne peut pas être ouvert, ou le montant du paiement diffère de la commande, cela sera traité comme une réémission ou un remboursement complet."
          },
          {
            "p": "Les conditions détaillées sont décrites dans la [Politique de Remboursement](/refund-policy) et le [Guide des Prix](/pricing). Ce texte sert de guide à ce qui est inclus, et les conditions légales sont prioritaires dans ces deux documents."
          }
        ]
      }
    ]
  },
  "guide/hanja-basics": {
    "eyebrow": "Système",
    "title": "Qu'est-ce que le hanja de nom officiel ?",
    "summary": "Le hanja qui peut être utilisé pour les noms d'enfants a été établi par la Cour suprême dans un tableau. Cela résume ce qu'est le tableau et pourquoi il a été établi.",
    "backLabel": "Guide d'utilisation",
    "sections": [
      {
        "title": "Qu'est-ce que le hanja de nom officiel ?",
        "blocks": [
          {
            "stats": [
              {
                "value": "{characterTotal} caractères",
                "label": "Hanja de nom officiel"
              },
              {
                "value": "{syllableCount} syllabes",
                "label": "Syllabes en Hangul incluses"
              },
              {
                "value": "{effectiveDate}",
                "label": "Date de référence du tableau"
              }
            ]
          },
          {
            "p": "Vous ne pouvez pas utiliser n'importe quel caractère pour le nom d'un enfant. **Les hanja qui peuvent être utilisés pour l'enregistrement de naissance ont été établis par la Cour suprême dans un tableau, et seuls les caractères de ce tableau peuvent être enregistrés comme hanja pour les noms.** Cela s'appelle l'official name-hanja."
          }
        ]
      },
      {
        "title": "Pourquoi cela a-t-il été établi ?",
        "blocks": [
          {
            "p": "Il existe des dizaines de milliers de hanja. Parmi eux, certains ont des significations désagréables, d'autres ne sont plus utilisés et n'ont pas de lectures connues, et certains ne peuvent pas être affichés sur les ordinateurs. Si de tels caractères sont inclus dans un nom, la personne qui porte finalement le fardeau est celle qui utilisera ce nom toute sa vie. Les noms peuvent être mal écrits ou lus différemment dans divers endroits tels que l'enregistrement des résidents, les passeports, les banques et les écoles, obligeant l'individu à expliquer son propre nom."
          },
          {
            "p": "Par conséquent, une méthode a été choisie pour prédéfinir la gamme de hanja qui peuvent être utilisés dans les noms. Plutôt que d'être une réglementation restrictive, il s'agit davantage d'un mécanisme pour garantir que les noms peuvent être utilisés sans problèmes tout au long de la vie d'une personne."
          }
        ]
      },
      {
        "title": "Quelle est la base des définitions ?",
        "blocks": [
          {
            "p": "La Cour suprême établit le tableau officiel des hanja, qui est révisé si nécessaire, et des caractères y sont ajoutés."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Matériaux utilisés dans cet écran",
        "blocks": [
          {
            "p": "{publisher} données officielles sur les hanja · À partir du {effectiveDate}"
          },
          {
            "p": "{characterTotal} caractères couvrent {syllableCount} syllabes en Hangul. La valeur de hachage du fichier original est également stockée, donc si le tableau change, il peut être vérifié quand et ce qui a changé."
          }
        ]
      },
      {
        "title": "Le nombre de caractères annoncé par la Cour suprême diffère de ce que nous montrons",
        "blocks": [
          {
            "p": "**L'official name-hanja annoncé par la Cour suprême est de {announcedTotal} caractères, tandis que ce que nous présentons comme candidats est de {characterTotal} caractères.** Il n'y a aucune raison de cacher cette différence, donc nous l'énonçons clairement."
          },
          {
            "p": "Si vous vérifiez les données d'enquête de la Cour suprême, elles contiennent {listedTotal} caractères. Parmi eux, **{excludedNoStandardCode} caractères** sont **des caractères qui n'ont pas de place dans le code de caractère commun mondial (Unicode).** Le système de la Cour suprême traite ces caractères avec des numéros qui ne fonctionnent que dans son propre système, et ils sont affichés comme **images** plutôt que comme caractères à l'écran."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ajouter plus de polices ne résoudra pas le problème",
        "blocks": [
          {
            "p": "Pour qu'un caractère apparaisse à l'écran, il doit avoir un **numéro convenu par le monde**, et la police contient l'image correspondant à ce numéro. Les caractères qui n'ont pas de numéro ne peuvent pas être inclus dans aucune police. Peu importe combien de polices nous ajoutons, ces caractères apparaîtront comme des carrés vides."
          }
        ]
      },
      {
        "title": "Par conséquent, ils ont été retirés des candidats",
        "blocks": [
          {
            "p": "**Remplir la liste avec des caractères qui ne peuvent pas être affichés n'est pas utile.** La plupart des significations de ces caractères sont également vides dans nos données, ce qui ne correspond pas à la méthode de service choisissant des noms en fonction des significations."
          },
          {
            "p": "**La raison plus importante concerne la personne qui utilisera le nom.** Un nom est une valeur qui sera saisie à divers endroits tout au long de la vie d'une personne. Les caractères sans codes de caractères peuvent ne pas être saisis ou imprimés dans les systèmes des banques, des écoles, des hôpitaux ou des passeports, même après avoir complété l'enregistrement de naissance. Par conséquent, nous ne pouvons pas recommander de tels caractères."
          },
          {
            "p": "Cependant, **nous ne déterminons pas si ces caractères peuvent être utilisés ou non.** Étant donné qu'ils sont des caractères dans le tableau de la Cour suprême, l'enregistrement lui-même peut être possible. Si vous souhaitez vraiment utiliser ce caractère, veuillez vérifier directement dans le système d'enregistrement électronique des relations familiales de la Cour suprême, et **demandez à l'autorité compétente sur l'utilisabilité réelle.**"
          }
        ]
      },
      {
        "title": "Si vous souhaitez utiliser des hanja non présents dans le tableau",
        "blocks": [
          {
            "p": "Vous ne pouvez pas les utiliser. Pour être précis, ces caractères ne seront pas enregistrés comme hanja pour le nom, et le nom sera uniquement enregistré en Hangul. Si vous souhaitez utiliser des hanja en plus, vous devez choisir parmi le tableau."
          },
          {
            "p": "Par conséquent, nous ne présentons pas les caractères qui ne sont pas dans le tableau comme candidats. Tous les hanja visibles à l'écran sont des caractères qui peuvent réellement être utilisés pour l'enregistrement de naissance. La liste complète est disponible dans la [Liste complète des official name-hanja](/guide/hanja)."
          }
        ]
      }
    ]
  },
  "guide/hanja": {
    "eyebrow": "Liste",
    "title": "Liste complète des official name-hanja",
    "summary": "Nous avons organisé les hanja qui peuvent être utilisés pour l'enregistrement de naissance par consonne initiale. Vous pouvez voir la lecture désignée et la signification de chaque caractère lorsqu'il est utilisé dans des noms.",
    "backLabel": "Guide d'utilisation",
    "sections": [
      {
        "title": "Recherche par consonne initiale",
        "slot": "chosung",
        "blocks": [
          {
            "p": "Cela inclut tous les {characterTotal} caractères du tableau officiel des hanja de la Cour suprême. Chaque caractère comprend la **lecture lorsqu'il est utilisé dans des noms** et sa signification. Les caractères non inclus dans le tableau ne peuvent pas être enregistrés comme hanja de nom, donc vous devez choisir parmi les caractères listés ici."
          },
          {
            "p": "Les deux chiffres sur le bouton ci-dessous représentent le **nombre de caractères avec cette consonne initiale** et le **nombre de syllabes couvertes**."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Si le caractère que vous recherchez n'est pas dans la liste",
        "blocks": [
          {
            "p": "Le nombre de caractères annoncé par la Cour suprême est de {announcedTotal}, mais cette liste contient {characterTotal} caractères. **La différence de {excludedNoStandardCode} caractères est celle qui ne peut pas être affichée dans aucune police en raison de l'absence de place dans le code de caractère universel.** Le système de la Cour suprême affiche ces caractères sous forme d'images."
          },
          {
            "p": "Nous avons détaillé les raisons de cela et pourquoi nous ne recommandons pas ces caractères dans [Qu'est-ce que l'official name-hanja ?](/guide/hanja-basics). Vous devriez vérifier auprès de l'autorité compétente pour l'utilisabilité réelle de ces caractères."
          }
        ]
      },
      {
        "title": "Consonnes initiales avec peu de caractères",
        "slot": "tiny",
        "blocks": [
          {
            "p": "Les consonnes initiales ci-dessous ont très peu de official name-hanja, donc nous les avons affichées ici sans page séparée."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Comment lire cette liste",
        "blocks": [
          {
            "p": "Pour **伽 · 가 · 절**, lorsque vous utilisez \"伽\" dans un nom, il se lit comme **가** et signifie \"temple\". Même pour le même hanja, la lecture lorsqu'il est utilisé dans des noms est fixée par le tableau, et il ne peut pas être utilisé d'une autre manière."
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
  "intro": "Les modifications de vos conditions d'utilisation — prix, politiques — sont publiées ici avant qu'elles n'entrent en vigueur. Les améliorations internes ne sont pas listées : ce qui apparaît ici est ce que vous devez savoir.",
  "empty": {
    "title": "Pas encore de notifications",
    "body": "Lorsque quelque chose change, cela apparaîtra ici."
  },
  "effective": "Prend effet le {date}",
  "pager": {
    "label": "Pages de notifications",
    "newer": "← Plus récent",
    "older": "Plus ancien →"
  },
  "items": {
    "2026-08-02-contact": {
      "title": "Les pages de contact et à propos sont maintenant ouvertes",
      "body": [
        "Les questions, remboursements, demandes de confidentialité et rapports d'erreurs ont maintenant un seul endroit où aller. La page de contact dans le pied de page liste notre email et les détails de l'entreprise.",
        "Ce sur quoi se basent nos réponses, et ce que nous ne faisons délibérément pas, est écrit sur la page à propos."
      ]
    },
    "2026-08-01-pdf-language": {
      "title": "Les rapports PDF sont émis en anglais pour l'arabe et le khmer",
      "body": [
        "Si vous utilisez le service en arabe ou en khmer, le PDF que vous achetez est produit en anglais. L'outil qui met en page nos documents ne peut pas encore définir des paragraphes dans ces deux scripts.",
        "L'écran reste dans votre langue, et votre nom est imprimé dans votre propre script à l'intérieur du document.",
        "La même note apparaît avant le paiement. Lorsque l'outil prendra en charge ces scripts, nous le mentionnerons ici."
      ]
    },
    "2026-08-01-payments-preparing": {
      "title": "Les paiements ne sont pas encore ouverts",
      "body": [
        "Créer un nom et lire le résultat est gratuit aujourd'hui, et aucun compte n'est nécessaire.",
        "Les articles payants ne sont pas encore en vente. Les montants affichés sur la page de tarification sont ceux qui s'appliqueront une fois les ventes ouvertes."
      ]
    }
  }
} satisfies NoticeCopy;
