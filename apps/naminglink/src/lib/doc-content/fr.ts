import type { DocPage, NoticeCopy } from "./types";
import type { GlobalDocKey } from "./keys";

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
            "p": "Naming-Link vous aide à **choisir et comprendre les noms coréens** — le hanja derrière le nom d'un enfant, un nom coréen à utiliser à l'étranger, une écriture en Hangul de votre propre nom, et des souvenirs tels qu'un sceau ou un rapport imprimé."
          },
          {
            "p": "Voir vos résultats est **gratuit et ne nécessite pas de compte.** Les éléments payants ne revendent jamais ce que l'écran vous a déjà montré : ils ouvrent plus de candidats, ajoutent une analyse écrite, ou transforment le résultat en quelque chose que vous pouvez garder."
          }
        ]
      },
      {
        "title": "Pour qui chaque service est destiné",
        "blocks": [
          {
            "p": "Il existe deux types de service ici : un pour les personnes qui **ont déjà un nom coréen**, et un pour les personnes qui **en ont besoin**. Ils nécessitent des choses différentes de votre part, donc ils sont offerts dans différentes langues."
          },
          {
            "ul": [
              "**Offert dans votre langue** — écrire votre propre nom en Hangul, et construire un nom coréen. Ceux-ci sont pour les personnes sans nom coréen, donc ils suivent la langue dans laquelle vous arrivez.",
              "**Offert uniquement en coréen** — trouver le hanja pour un enfant, et transformer un nom coréen en un nom à utiliser à l'étranger. Les deux nécessitent un **nom en Hangul existant** pour fonctionner, donc les écrans et leurs guides restent en coréen."
            ]
          }
        ]
      },
      {
        "title": "Sur quoi se basent nos réponses",
        "blocks": [
          {
            "p": "Le hanja provient de la **table officielle de hanja de noms de la Cour suprême de Corée.** Chaque caractère a une lecture fixe pour une utilisation dans les noms, et les caractères en dehors de la table ne peuvent pas être enregistrés. Nous n'ajoutons pas à cette liste ni ne choisissons de favoris."
          },
          {
            "p": "Les figures de saju et des cinq éléments sont calculées à partir de l'**almanach lunisolaire coréen**, avec l'heure de naissance corrigée au temps solaire vrai pour le lieu de naissance. La lecture est une référence traditionnelle, pas une prédiction."
          },
          {
            "p": "Les explications écrites sont produites par l'IA. Pour éviter qu'elle **n'invente des choses**, le modèle ne reçoit que vos entrées et nos propres données de référence, et on lui dit de rester à l'intérieur. Les guides expliquent cela en détail."
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
              "**Payer n'achète pas une meilleure réponse.** Débloquer avec une publicité et débloquer avec un paiement donnent exactement le même contenu."
            ]
          }
        ]
      },
      {
        "title": "Où se situent nos données et traductions",
        "blocks": [
          {
            "p": "**Nous préférerions le dire clairement.** Vous dire ce qu'une personne a vérifié et ce que personne n'a vérifié est plus utile que de prétendre que tout a été examiné."
          },
          {
            "ul": [
              "**Données de hanja de noms** — la table de hanja de noms de {publisher}, à partir de {effectiveDate}. Nous conservons un hachage du fichier source, donc si la table change, nous pouvons dire ce qui a changé.",
              "**Compilé par** Platforest. Les caractères, lectures et significations sont repris de la table tels quels ; nous n'ajoutons ni ne supprimons.",
              "**Traduction** — écrite d'abord en coréen, puis en anglais, puis dans les autres langues. **Ce sont des traductions automatiques, vérifiées automatiquement** — pour les phrases manquantes, la terminologie cohérente, et les valeurs insérées restant intactes. Elles n'ont pas été révisées par des locuteurs natifs.",
              "**Explications écrites** sont produites par l'IA, restreintes à vos entrées et à nos propres données de référence afin qu'elle n'invente pas de faits."
            ]
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Le service est disponible en 23 langues. Les PDF payants sont émis en anglais pour l'arabe et le khmer — le moteur de rendu PDF ne prend pas en charge ces scripts — et nous le disons à l'écran avant que vous ne payiez."
          }
        ]
      },
      {
        "title": "Contact",
        "blocks": [
          {
            "p": "Les détails de l'entreprise et comment nous contacter sont sur la [page de contact](/contact), y compris les remboursements, les demandes de confidentialité et les rapports d'erreur."
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
                "label": "caractères de hanja de noms"
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
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Les guides ci-dessous couvrent les services offerts dans votre langue. Naming-Link propose également deux services pour les personnes qui **ont déjà un nom coréen** — trouver le hanja pour un enfant, et transformer un nom coréen en un nom à utiliser à l'étranger. Ceux-ci nécessitent un nom en Hangul existant, donc les services et leurs guides sont en coréen."
          },
          {
            "p": "[À propos](/about) explique quel service est pour qui."
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
            "p": "Si un nom coréen est ce que vous voulez, **c'est un service différent**. L'un garde votre nom et ne change que l'écriture ; l'autre propose un nouveau nom."
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
      },
      {
        "title": "Cela fonctionne à l'opposé de la romanisation des passeports",
        "blocks": [
          {
            "p": "Ces deux-là sont faciles à confondre, voici donc la différence : **ils fonctionnent dans des directions opposées.**"
          },
          {
            "ul": [
              "**La romanisation** prend le nom en Hangul d'une personne coréenne et l'écrit en alphabet latin. Elle est fixée lorsque le passeport est délivré, et à partir de ce moment, les billets, visas et comptes bancaires suivent tous cette orthographe. 김민준 devient Kim Minjun.",
              "**La translittération en Hangul** — ce que fait ce service — fonctionne dans l'autre sens. Elle prend un nom écrit en alphabet latin et écrit comment il sonne en Hangul. Daniel devient 대니얼."
            ]
          },
          {
            "p": "Donc, ce que vous obtenez ici **ne change pas l'orthographe de votre passeport.** Cette romanisation est déjà fixée ; c'est ce nom écrit de nouveau en Hangul. Les deux ne se convertissent pas toujours exactement l'un dans l'autre — écrire un son que le coréen n'a pas perd un peu d'information en cours de route."
          }
        ]
      },
      {
        "title": "Où vous utiliseriez cette orthographe",
        "blocks": [
          {
            "p": "Une orthographe en Hangul est généralement nécessaire dans des endroits comme ceux-ci."
          },
          {
            "ul": [
              "**Se présenter** — montrer votre nom en Hangul, ou le dire en coréen",
              "**Un champ de nom en Hangul sur un formulaire** — enregistrements et demandes qui demandent votre nom en Hangul. Notez que **l'institution décide de ce qui figure sur un document officiel** — ce que vous obtenez ici ne remplace pas cela",
              "**Un tampon de nom ou un souvenir** — l'orthographe à graver"
            ]
          },
          {
            "p": "**Il est normal qu'il y ait plus d'une orthographe défendable.** Lorsqu'un nom peut être écrit de plusieurs façons en Hangul, nous les montrons côte à côte et laissons le choix à vous."
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
            "p": "Si votre propre nom de famille coïncide avec un vrai nom coréen par sonorité — Wang avec 왕, Ye avec 예 — nous mettons celui-ci en premier. Garder un lien avec votre nom d'origine vaut plus qu'un nom de famille choisi au hasard."
          },
          {
            "p": "Vous pouvez choisir un nom de famille vous-même ou nous laisser en recommander un. Dans tous les cas, ce sera **un nom de famille qui existe**."
          }
        ]
      },
      {
        "title": "Il y a vingt-six noms de famille parmi lesquels choisir",
        "blocks": [
          {
            "p": "Nous avons délibérément gardé la liste étroite. **Les noms de famille coréens sont vraiment concentrés** — Kim, Lee et Park à eux seuls représentent environ 45 % de la population, et les vingt premiers environ 80 %. Ajouter des noms de famille rares élargirait le menu, mais produirait également des noms que les Coréens n'entendent pas comme des noms."
          },
          {
            "ul": [
              "**Les vingt noms de famille les plus courants** (environ 80 % de la population) — 김 Kim · 이 Lee · 박 Park · 최 Choi · 정 Jung · 강 Kang · 조 Cho · 윤 Yoon · 장 Jang · 임 Lim · 한 Han · 오 Oh · 서 Seo · 신 Shin · 권 Kwon · 황 Hwang · 안 Ahn · 송 Song · 전 Jeon · 홍 Hong",
              "**Des noms de famille réels ajoutés pour garder un lien sonore** — 왕 Wang · 진 Jin · 백 Baek · 마 Ma · 나 Na · 유 Yoo"
            ]
          },
          {
            "p": "Le deuxième groupe existe pour que **votre propre nom de famille puisse se transmettre par sonorité**. Wang, Jin, Baek, Ma, Na et Yoo sont des noms de famille que les Coréens ont déjà, donc dire votre nom garde un lien avec celui que vous avez commencé. Les vingt-six sont tous des noms de famille en usage réel — aucun d'eux n'est notre invention."
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
        "title": "Envoyez-nous un e-mail",
        "blocks": [
          {
            "p": "Écrivez à **{email}**. Nous répondons dans les deux jours ouvrables. Pour toute question concernant une commande — paiement, remboursement, un fichier que vous n'avez pas reçu — veuillez inclure votre **numéro de commande ou l'e-mail avec lequel vous avez payé**."
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
              "**Corrections** — si un hanja signifiant, une lecture ou un calcul semble incorrect, dites-le nous. Mentionner quel écran et ce que vous avez saisi aide beaucoup.",
              "**Autre chose** — les partenariats et la presse vont à la même adresse."
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
  "guide/what-we-dont-use": {
    "eyebrow": "Nos Normes",
    "title": "Ce que nous ne utilisons pas",
    "summary": "Nous n'assignons pas de fortune totale ou de scores numériques, et nous n'utilisons pas de comptes de traits. Les cinq éléments ne sont utilisés qu'en tant qu'axe complémentaire. Voici les raisons.",
    "backLabel": "Guide d'utilisation",
    "sections": [
      {
        "title": "Raisons de ne pas attribuer de fortune totale ou de scores numériques",
        "blocks": [
          {
            "p": "Il existe des méthodes qui attribuent une fortune totale ou des scores numériques aux noms pour les évaluer. Naming-Link ne fournit pas ces chiffres. Les raisons sont au nombre de quatre."
          },
          {
            "p": "**Premièrement, il n'y a pas qu'une seule norme.** Les méthodes de calcul de la fortune varient selon l'école, et le même nom peut être évalué positivement par une norme et négativement par une autre. Nous n'avons aucune base pour décider laquelle est correcte. Il est malhonnête de présenter l'une comme si c'était la réponse."
          },
          {
            "p": "**Deuxièmement, ces calculs reposent sur des comptes de traits.** Cependant, les données de la Cour Suprême n'incluent pas du tout de comptes de traits. De plus, les comptes de traits peuvent varier selon qu'ils sont comptés comme des caractères réguliers ou simplifiés et comment les radicaux sont comptés. Puisque les chiffres fondamentaux ne sont pas définitivement établis, les scores construits sur eux ne peuvent pas être définitifs."
          },
          {
            "p": "**Troisièmement, les chiffres semblent plus solides que la réalité.** Quand il est dit \"87 points\", cela ressemble à une valeur mesurée plutôt qu'à une interprétation conventionnelle. Ces noms peuvent se sentir sous pression à cause de ce chiffre, mettant de côté ce qui est vraiment important (Est-il agréable à appeler ? Le sens convient-il ? Contient-il les souhaits désirés ?)."
          },
          {
            "p": "**Quatrièmement, il n'y a aucun moyen de vérifier.** La relation entre un nom et la vie d'une personne ne peut pas être vérifiée. Convertir quelque chose qui ne peut pas être dit comme vrai ou faux en un score aboutit à un chiffre qui ne peut pas être confirmé, même s'il ne peut pas être faux."
          },
          {
            "p": "Nous n'utilisons que ce qui peut être **étayé.** Le tableau officiel des hanja de la Cour Suprême, les lectures désignées pour chaque caractère, et les significations listées dans le tableau. Au lieu de cela, nous fournissons des raisons pour lesquelles ce candidat a été sélectionné et pourquoi certains caractères ont été exclus, montrant **des raisons au lieu de scores**."
          }
        ]
      },
      {
        "title": "Nous n'utilisons pas de comptes de traits",
        "blocks": [
          {
            "p": "Les données officielles des hanja fournies par la Cour Suprême n'incluent pas de comptes de traits. Parmi les {characterTotal} caractères que nous avons reçus, **pas un seul caractère n'a de comptes de traits.**"
          },
          {
            "p": "Pour utiliser des comptes de traits, nous devrions obtenir des chiffres d'ailleurs, mais si nous ne pouvons pas clarifier d'où viennent ces chiffres et quels critères ont été utilisés pour les compter, cela signifierait juger des noms sur la base de chiffres non fondés. Nous avons décidé de ne pas évaluer les noms sur la base de valeurs qui ne peuvent pas être étayées."
          }
        ]
      },
      {
        "title": "Nous utilisons les cinq éléments uniquement comme référence",
        "blocks": [
          {
            "figure": "five-elements",
            "labels": {
              "alt": "Les cinq éléments placés en cercle : la génération se produit entre voisins, le contrôle saute un élément",
              "wood": "bois",
              "fire": "feu",
              "earth": "terre",
              "metal": "métal",
              "water": "eau",
              "saeng": "Génération — chacun engendre son voisin",
              "geuk": "Contrôle — chacun restreint celui qu'il saute"
            },
            "caption": "Les relations entre les cinq éléments. Se déplacer le long du cercle représente une génération mutuelle (相生), tandis que sauter un élément et appuyer représente une restriction mutuelle (相剋). Nous utilisons cette relation uniquement comme un axe complémentaire pour comparer les candidats."
          },
          {
            "p": "Si vous avez saisi votre mois de naissance, nous utilisons une référence simplifiée des cinq éléments basée sur ce mois comme un axe complémentaire pour comparer les candidats. Cependant, ce n'est pas une analyse saju précise, et **nous ne prétendons pas que les noms déterminent le destin ou le caractère d'une personne.**"
          },
          {
            "p": "Dans la sélection finale, ce que nous priorisons ce sont les sons, les combinaisons de significations, les valeurs que la famille souhaite transmettre, et si cela peut réellement être enregistré. Si vous n'avez pas saisi votre mois de naissance, nous excluons complètement la référence des cinq éléments de l'analyse — nous ne faisons pas d'assumptions arbitraires sur des informations inconnues."
          },
          {
            "p": "Si vous souhaitez une analyse précise basée sur le saju, nous le couvrons dans un rapport détaillé séparé. La raison pour laquelle nous ne priorisons pas les cinq éléments dans l'appariement gratuit des hanja est que nous ne voulons pas présenter des jugements basés sur les cinq éléments dérivés d'une date et d'une heure de naissance incomplètes comme s'ils étaient définitifs."
          }
        ]
      }
    ]
  },
  "guide/what-we-sell": {
    "eyebrow": "Produits payants",
    "title": "Qu'est-ce qui est inclus dans les produits payants ?",
    "summary": "Nous clarifions ce qui est visible gratuitement et quelles fonctionnalités supplémentaires sont disponibles avec le paiement pour chaque produit. Les prix sont récupérés des paramètres réels du produit.",
    "backLabel": "Guide d'utilisation",
    "sections": [
      {
        "title": "Qu'est-ce qui est visible gratuitement ?",
        "blocks": [
          {
            "p": "Créer un nom et voir les résultats est **gratuit**. Aucune inscription de membre n'est requise. Vous pouvez voir les significations correspondantes des hanja, créer des noms coréens, la conversion de noms globaux, et la notation de prononciation en Hangul, ainsi que les résultats recommandés et leurs justifications à l'écran."
          },
          {
            "p": "Les produits payants ne **revendent pas ce qui a déjà été montré à l'écran.** Ils ouvrent plus de candidats, ajoutent plus d'explications, ou créent un format qui peut être stocké ou transmis."
          }
        ]
      },
      {
        "title": "Divulgation complète de tous les candidats — {priceUnlock}",
        "blocks": [
          {
            "p": "Les résultats recommandés sont structurés pour ouvrir les candidats un par un. Lors de la visualisation des annonces, un s'ouvre à la fois, tandis que ce produit **ouvre tous les candidats restants en même temps**."
          },
          {
            "p": "Si vous n'êtes pas pressé, vous n'avez pas besoin d'acheter. Les **résultats de l'ouverture via des annonces et ceux du paiement sont complètement identiques** — il s'agit simplement d'une question d'attente, et le paiement ne donne pas de meilleurs candidats."
          }
        ]
      },
      {
        "title": "Détails sur les hanja — Trois étapes",
        "blocks": [
          {
            "p": "Il existe trois produits détaillés dans le processus de sélection des hanja à attacher à un nom en Hangul."
          },
          {
            "ul": [
              "**Maximum 5 candidats hanja détaillés** — {priceFiveDetail}. Vous pouvez développer les explications pour jusqu'à cinq candidats à l'écran. Il n'y a pas de PDF.",
              "**Maximum 10 candidats hanja PDF détaillé** — {priceTenDetail}. Le nombre de candidats augmente à dix, et un document PDF est inclus.",
              "**Maximum 10 candidats hanja rapport complet saju et les cinq éléments** — {priceTenSaju}. En plus de ce qui précède, il comprend le tableau saju dérivé de la date de naissance et les forces des cinq éléments, examinant pourquoi un hanja particulier convient à ce nom du point de vue des cinq éléments."
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Le hanja lui-même est une information disponible publiquement",
        "blocks": [
          {
            "p": "Les hanja utilisables et leurs significations proviennent de l'**informations sur les hanja de nom** mise en place par la Cour suprême de Corée, et tout est disponible publiquement dans les documents d'orientation du service. Ce que les produits payants vendent n'est pas l'information sur le hanja mais **l'acte de le sélectionner et de l'expliquer selon le nom**."
          }
        ]
      },
      {
        "title": "PDF pour utilisateurs globaux",
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
            "p": "**Les produits numériques sont fournis immédiatement après le paiement.** Vous pouvez annuler et recevoir un remboursement complet à tout moment avant le début du téléchargement, mais une fois le téléchargement terminé, le retrait en raison d'un simple changement d'avis est restreint (Article 17, Paragraphe 2 de la Loi sur le commerce électronique). Cette condition est acceptée séparément à l'écran de paiement."
          },
          {
            "p": "**Les plaintes concernant le contenu des résultats ne sont pas un motif de remboursement.** Cependant, si le document n'a pas été créé, le fichier ne peut pas être ouvert, ou le montant du paiement diffère de la commande, cela sera traité comme une réémission ou un remboursement complet."
          },
          {
            "p": "Les conditions détaillées sont décrites dans la [Politique de Remboursement](/refund-policy) et le [Guide des Prix](/pricing). Ce texte sert de guide sur ce qui est inclus, et les conditions légales sont prioritaires dans ces deux documents."
          }
        ]
      }
    ]
  }
} satisfies Record<GlobalDocKey, DocPage>;

export const FR_NOTICES = {
  "kindLabels": {
    "service": "Service",
    "product": "Produits",
    "policy": "Politique",
    "support": "Support"
  },
  "intro": "Les changements de vos conditions d'utilisation — prix, politiques — sont publiés ici avant qu'ils n'entrent en vigueur. Les améliorations internes ne sont pas listées : ce qui apparaît ici est ce que vous devez savoir.",
  "empty": {
    "title": "Aucune notification pour le moment",
    "body": "Lorsque quelque chose change, cela apparaîtra ici."
  },
  "effective": "Prend effet le {date}",
  "pager": {
    "label": "Pages de notification",
    "newer": "← Plus récent",
    "older": "Plus ancien →"
  },
  "items": {
    "2026-08-02-contact": {
      "title": "Les pages de contact et à propos sont maintenant ouvertes",
      "body": [
        "Questions, remboursements, demandes de confidentialité et rapports d'erreurs ont maintenant un seul endroit où aller. La page de contact dans le pied de page liste notre e-mail et les détails de l'entreprise.",
        "Sur quoi se basent nos réponses, et ce que nous ne faisons délibérément pas, est écrit sur la page à propos."
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
        "Les articles payants ne sont pas encore en vente. Les montants affichés sur la page des prix sont ceux qui s'appliqueront une fois les ventes ouvertes."
      ]
    }
  }
} satisfies NoticeCopy;
