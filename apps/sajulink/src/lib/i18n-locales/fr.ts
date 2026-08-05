// 사주링크 화면 사전의 French (Français)(fr) 번역이다.
//
// **`scripts/translate-i18n.ts`가 만든 파일이다.** 키 구성·중첩·배열 길이는 en을 그대로
// 복사하고 문자열만 갈아 끼우므로 구조가 어긋날 자리가 없다. 손으로 고칠 때도 키를 더하거나
// 빼지 말 것 — `verify-i18n`이 en과 대조해 잡는다.
//
// **인연링크에서 물려받은 옛 번역을 되살린 것이 아니다.** 그 파일들은 궁합 서비스의 UI라,
// 되살리면 사주 화면에 궁합·인연이 다시 들어온다. 새 ko·en에서 다시 옮겼다.

import type { Dictionary } from "@/lib/i18n";

export const fr: Dictionary = {
  "brand": "SajuLink",
  "tagline": "Vos Quatre Piliers, lus à partir d'une date de naissance",
  "currentLanguage": "Langue actuelle",
  "moreLanguages": "Plus",
  "closeLanguages": "Fermer",
  "landing": {
    "title": "Les huit caractères\navec lesquels vous êtes né",
    "subtitle": "Tout ce dont vous avez besoin est une date de naissance.\nNous construisons votre Saju (Quatre Piliers), pesons les cinq éléments et lisons la force de votre jour maître.",
    "cta": "Voir mon Saju",
    "howTitle": "Comment ça marche",
    "steps": [
      "Entrez votre date de naissance. L'heure de naissance est optionnelle.",
      "L'année, le mois, le jour et l'heure de votre naissance deviennent huit caractères — votre carte natale. À partir de cela, nous lisons le poids de chaque élément et la force de votre jour maître.",
      "Le pilier d'aujourd'hui est superposé à cette carte pour vous donner aussi la fortune d'aujourd'hui."
    ],
    "privacyTitle": "Rien de ce que vous saisissez n'est conservé",
    "privacyBody": "Les dates de naissance ne servent qu'au calcul du résultat et ne sont jamais enregistrées. Aucun compte n'est nécessaire. Rien de ce que contient un lien de résultat n'est envoyé au serveur.",
    "disclaimer": "Ceci est une lecture traditionnelle de Saju proposée à titre de référence. Ce n'est pas une prédiction scientifique ni un verdict sur l'avenir de quiconque."
  },
  "form": {
    "title": "Votre date de naissance",
    "description": "Connaître l'heure de naissance affine la lecture, mais ce n'est pas obligatoire.",
    "meLegend": "À propos de vous",
    "nickname": "Comment l'appeler",
    "nicknamePlaceholder": "ex. : Moi",
    "nicknameHint": "Affiché uniquement sur l'écran de résultat. Ce nom n'entre pas dans le calcul.",
    "gender": "Genre",
    "male": "Homme",
    "female": "Femme",
    "genderUnspecified": "Je préfère ne pas le dire",
    "genderHint": "La lecture traditionnelle de Saju considère les positions du conjoint et de l'enfant différemment selon le genre. Si vous omettez cela, ces facteurs ne seront pas pris en compte dans le calcul.",
    "birthplace": "Lieu de naissance",
    "birthplaceHint": "Le pilier horaire est calculé à partir de l'heure solaire réelle à votre lieu de naissance. Si votre lieu de naissance n'est pas répertorié, choisissez la ville la plus proche.\nDans la Corée continentale, la différence entre les villes est inférieure à deux minutes. L'heure d'été et les changements historiques de fuseau horaire sont également pris en compte.",
    "calendar": "Calendrier",
    "solar": "Solaire",
    "lunar": "Lunaire",
    "leapMonth": "Mois intercalaire",
    "birthDate": "Date de naissance",
    "year": "Année",
    "month": "Mois",
    "day": "Jour",
    "birthTime": "Heure de naissance",
    "unknownTime": "Je ne connais pas l'heure",
    "hour": "Heure",
    "minute": "Minute",
    "submit": "Regarder la publicité et voir mon Saju",
    "submitNoAd": "Voir mon Saju",
    "submitting": "Calcul en cours…",
    "errorInvalidDate": "Veuillez vérifier la date de naissance. Pour une date lunaire, vérifiez aussi s'il s'agit d'un mois intercalaire.",
    "errorGeneric": "Le calcul a échoué. Veuillez réessayer dans un instant."
  },
  "reading": {
    "chartTitle": "Votre carte natale",
    "chartHint": "Le saju représente l'année, le mois, le jour et l'heure de naissance sous forme de deux caractères chacun. Tout ce qui suit est interprété à partir de ces huit caractères.",
    "pillarYear": "Année",
    "pillarMonth": "Mois",
    "pillarDay": "Jour",
    "pillarHour": "Heure",
    "pillarHourUnknown": "Heure de naissance inconnue",
    "dayMasterLabel": "Maître du jour",
    "animalLabel": "Zodiaque",
    "seasonLabel": "Saison de naissance",
    "elementsTitle": "Force des éléments",
    "strongest": "Le plus fort",
    "scarcest": "Le plus rare",
    "strengthTitle": "Ce avec quoi vous êtes né",
    "cautionTitle": "Points de vigilance",
    "bodyStrengthTitle": "Force du maître du jour",
    "favorableLabel": "Ce qu'il vous faut maintenant"
  },
  "bodyStrength": {
    "STRONG": {
      "name": "Maître du jour fort",
      "body": "Les éléments qui soutiennent votre maître du jour sont abondants. Cela vous donne un élan qui vous est propre, mais l'ensemble penche vite d'un côté — vous vous apaisez plutôt quand quelque chose vient absorber ce trop-plein."
    },
    "BALANCED": {
      "name": "Maître du jour équilibré",
      "body": "Ce qui soutient votre maître du jour et ce qui le sollicite sont presque à égalité. Impossible de trancher dans un sens ou dans l'autre : ici, nous lisons donc comme votre besoin ce qui est le plus mince."
    },
    "WEAK": {
      "name": "Maître du jour faible",
      "body": "Les éléments qui soutiennent votre maître du jour sont minces. Vous savez emprunter de la force autour de vous, mais vous vous épuisez à tenir seul — vous vous révélez quand quelque chose vous soutient."
    }
  },
  "tenGods": {
    "BIGYEON": {
      "name": "Compagnon (比肩)",
      "body": "L'énergie qui se tient à vos côtés. Épaisse, elle vous donne la force de tenir votre propre terrain et de revendiquer votre part en premier."
    },
    "GEOPJAE": {
      "name": "Rival (劫財)",
      "body": "Énergie qui vous ressemble mais fonctionne différemment. Elle prête force à une poussée, mais en excès, ce que vous détenez a tendance à se disperser."
    },
    "SIKSIN": {
      "name": "Expression (食神)",
      "body": "L'énergie qui fait sortir ce qui est en vous dans le monde. L'expression et le plaisir simple de vivre viennent d'ici ; là où elle se trouve, il y a de l'aisance."
    },
    "SANGGWAN": {
      "name": "Perturbateur (傷官)",
      "body": "L'énergie qui dérange un cadre fixe. Elle accorde du talent et un tranchant, mais en excès, elle entre en collision avec les règles et le rang."
    },
    "PYEONJAE": {
      "name": "Aubaine (偏財)",
      "body": "Énergie de richesse de type large. Active et libre avec ce qu'elle a, elle apporte des chances de sources inattendues."
    },
    "JEONGJAE": {
      "name": "Richesse stable (正財)",
      "body": "Énergie de richesse de type stable, rassemblée morceau par morceau. La Saju traditionnelle la lit également comme la position du conjoint pour un homme."
    },
    "PYEONGWAN": {
      "name": "Défi (偏官)",
      "body": "L'énergie qui vous maintient sur le qui-vive et droit. Vous devenez fort sous pression, mais en excès, cela vous laisse toujours avec un sentiment de poursuite."
    },
    "JEONGGWAN": {
      "name": "Autorité (正官)",
      "body": "L'énergie de l'ordre qui vous remet sur le droit chemin. Elle préserve votre nom et votre statut ; la Saju traditionnelle la lit également comme la position du conjoint pour une femme."
    },
    "PYEONIN": {
      "name": "Soutien atypique (偏印)",
      "body": "Énergie qui vous soutient par un chemin inhabituel. Elle accorde le pouvoir de creuser profondément, mais en excès, la pensée précède la main."
    },
    "JEONGIN": {
      "name": "Bienveillance (正印)",
      "body": "L'énergie qui vous tient et vous élève. Elle donne l'apprentissage et quelque chose sur quoi s'appuyer ; en excès, se lancer seul vient tard."
    }
  },
  "dayMasters": {
    "甲": {
      "name": "Bois Yang (甲)",
      "trait": "Un grand arbre qui pousse droit. Une fois la direction fixée, il ne vacille pas, et il préfère endurer plutôt que plier."
    },
    "乙": {
      "name": "Bois Yin (乙)",
      "trait": "Une liane, une herbe souple. Elle plie avec les circonstances pour continuer d'avancer, et elle ne casse pas."
    },
    "丙": {
      "name": "Feu Yang (丙)",
      "trait": "Le soleil de midi. Les sentiments s'affichent, la pièce s'éclaire, et se mettre en avant vient naturellement."
    },
    "丁": {
      "name": "Feu Yin (丁)",
      "trait": "La lumière d'une bougie. Elle brûle doucement et longtemps, et réchauffe d'abord les plus proches."
    },
    "戊": {
      "name": "Terre Yang (戊)",
      "trait": "La plaine et la montagne. Difficile à ébranler et facile à prendre pour appui, mais lente à revenir sur une décision prise."
    },
    "己": {
      "name": "Terre Yin (己)",
      "trait": "La terre des champs. Elle accueille ce qui vient et le fait grandir : elle entretient plutôt qu'elle ne se montre."
    },
    "庚": {
      "name": "Métal Yang (庚)",
      "trait": "Du fer brut. Décidé et net, avec peu de patience pour ce qui reste en suspens."
    },
    "辛": {
      "name": "Métal Yin (辛)",
      "trait": "Une pierre précieuse taillée. Un goût raffiné et des exigences élevées ; le travail bâclé passe difficilement."
    },
    "壬": {
      "name": "Eau Yang (壬)",
      "trait": "Le fleuve et la mer. Une vision large et l'œil pour voir comment les choses évoluent."
    },
    "癸": {
      "name": "Eau Yin (癸)",
      "trait": "La rosée et la pluie. Elle s'infiltre en silence et lit l'ambiance avant les mots."
    }
  },
  "dayMasterSigns": {
    "甲": [
      "Dit ce qu'elle pense dès la première rencontre.",
      "Change rarement un plan ou une promesse une fois fixés.",
      "Refuse sans détour, ce qui peut sembler abrupt."
    ],
    "乙": [
      "Contourne l'affrontement et prend un autre chemin.",
      "Paraît souple, et pourtant finit là où elle voulait aller.",
      "Observe l'ambiance avant de se joindre à un groupe."
    ],
    "丙": [
      "Adresse la parole en premier aux personnes qu'elle vient de rencontrer.",
      "Ce qu'elle aime et ce qu'elle n'aime pas se lit sur son visage.",
      "Se retrouve au centre du groupe sans le chercher."
    ],
    "丁": [
      "Discrète au début, attentionnée une fois la proximité installée.",
      "Préfère une longue conversation à deux ou trois plutôt qu'en grand groupe.",
      "Retient une remarque lancée en passant et y revient plus tard."
    ],
    "戊": [
      "Parle peu ; sa voix monte rarement, même dans l'urgence.",
      "Celle qui tranche à la fin quand les autres repoussent la décision.",
      "Un non, une fois donné, reste non pour longtemps."
    ],
    "己": [
      "Écoute plus longtemps qu'elle ne parle.",
      "A du mal à refuser, si bien que le travail s'accumule sur elle.",
      "Ce dont elle s'est occupée discrètement ne se découvre que plus tard."
    ],
    "庚": [
      "Décide vite et le dit sur-le-champ.",
      "N'adoucit pas les choses, ce qui peut paraître froid.",
      "Visiblement impatiente quand une affaire traîne."
    ],
    "辛": [
      "A des critères précis pour ses vêtements et les objets qu'elle choisit.",
      "Ne peut pas laisser passer un travail à moitié fait sans le signaler.",
      "Avare de compliments, mais catégorique quand elle en fait un."
    ],
    "壬": [
      "Se mêle facilement à toutes sortes de gens.",
      "Évoque la suite avant ce qui est devant elle.",
      "Supporte mal d'être retenue longtemps au même endroit."
    ],
    "癸": [
      "Parle peu mais a lu la situation avec exactitude.",
      "La première à remarquer quand l'ambiance change.",
      "Garde sa vie intérieure pour elle : il faut du temps pour la connaître."
    ]
  },
  "animalTraits": {
    "rat": "Remarque vite et met vite à l'abri ce qui compte. Le premier à bouger en cas de crise.",
    "ox": "Paraît lent mais va jusqu'au bout. Ce qu'il prend en charge, il ne le lâche pas.",
    "tiger": "Sans peur et en première ligne. Ne peut pas laisser passer une injustice.",
    "rabbit": "Doux et perspicace. Sait contourner plutôt qu'entrer en collision.",
    "dragon": "Grand cœur et idéaux élevés. Se contente rarement de l'ordinaire.",
    "snake": "Garde ses pensées pour lui et réfléchit en profondeur. Juge avec justesse.",
    "horse": "Enjoué et remuant. Être enfermé est ce qu'il supporte le moins.",
    "goat": "Chaleureux et attentionné. Garde longtemps les paroles dures.",
    "monkey": "Ingénieux et prompt à s'adapter. La répétition l'ennuie.",
    "rooster": "Appliqué et rigoureux. Ne peut rien laisser de travers.",
    "dog": "Loyal jusqu'au bout une fois la confiance donnée. La trahison le blesse particulièrement.",
    "pig": "Généreux et direct. Fait confiance facilement, parfois à ses dépens."
  },
  "result": {
    "title": "Votre lecture de Saju",
    "recalculate": "Recommencer",
    "copyLink": "Copier le lien du résultat",
    "copied": "Copié",
    "missingInput": "Ce résultat n'a pas pu être lu. Veuillez saisir de nouveau les dates.",
    "partialTime": "Aucune heure de naissance n'a été indiquée, le pilier de l'heure a donc été laissé de côté. L'ajouter rend la lecture plus précise.",
    "engineVersion": "Calculé avec",
    "disclaimer": "Ceci est une lecture de Saju traditionnelle proposée à titre de référence. Ce n'est pas une prédiction scientifique ou un verdict sur votre avenir.",
    "seeToday": "Voir la fortune d’aujourd’hui",
    "seeReading": "Voir votre carte natale"
  },
  "today": {
    "menu": "La fortune du jour",
    "title": "La fortune du jour",
    "pillarLabel": "Le pilier du jour",
    "scoreLabel": "Le score du jour",
    "grades": {
      "DAEGIL": {
        "name": "Très favorable",
        "body": "L'énergie d'aujourd'hui s'aligne parfaitement avec votre chart. Une bonne journée pour reprendre ce que vous avez remis à plus tard."
      },
      "GIL": {
        "name": "Favorable",
        "body": "Le courant vous accompagne aujourd'hui. Ce que vous faites habituellement se déroule plus facilement que d'habitude."
      },
      "PYEONG": {
        "name": "Équilibré",
        "body": "Rien ne vous pousse et rien ne vous bloque. Faites comme d'habitude et vous obtiendrez ce que vous obtenez habituellement."
      },
      "JUUI": {
        "name": "Prenez soin",
        "body": "Une partie de l'énergie d'aujourd'hui s'oppose à votre chart. Il vaut mieux finir les choses que de commencer de nouvelles."
      },
      "JOSIM": {
        "name": "Soyez prudent",
        "body": "L'énergie d'aujourd'hui pèse sur votre chart. Si une décision peut attendre, laissez-la attendre."
      }
    },
    "categories": {
      "wealth": "Argent",
      "love": "Amour",
      "career": "Travail",
      "health": "Santé"
    },
    "luckyTitle": "Gardez ces éléments près de vous aujourd'hui",
    "luckyElement": "Élément",
    "luckyColor": "Couleur",
    "luckyDirection": "Direction",
    "luckyTime": "Heures",
    "luckyNumber": "Nombres",
    "luckyColors": {
      "TEAL": "bleu sarcelle",
      "GREEN": "vert",
      "RED": "rouge",
      "ORANGE": "orange",
      "YELLOW": "jaune",
      "OCHRE": "ocre",
      "WHITE": "blanc",
      "GOLD": "or",
      "BLACK": "noir",
      "NAVY": "bleu marine"
    },
    "luckyDirections": {
      "EAST": "Est",
      "SOUTH": "Sud",
      "CENTER": "Centre",
      "WEST": "Ouest",
      "NORTH": "Nord"
    },
    "basisTitle": "D'où vient ce score",
    "factors": {
      "TODAY_IS_YONGSIN": "L'élément d'aujourd'hui est celui dont votre chart a besoin",
      "TODAY_GENERATES_YONGSIN": "L'élément d'aujourd'hui nourrit celui dont votre chart a besoin",
      "TODAY_IS_GISIN": "L'élément d'aujourd'hui pousse davantage le côté déjà plein",
      "TODAY_CONTROLS_YONGSIN": "L'élément d'aujourd'hui maintient en bas celui dont votre chart a besoin",
      "TODAY_GENERATES_SELF": "L'élément d'aujourd'hui soutient votre maître du jour",
      "TODAY_SAME_ELEMENT": "L'élément d'aujourd'hui est le même que votre maître du jour",
      "SELF_GENERATES_TODAY": "Votre maître du jour s'écoule dans l'élément d'aujourd'hui",
      "TODAY_CONTROLS_SELF": "L'élément d'aujourd'hui maintient votre maître du jour",
      "SELF_CONTROLS_TODAY": "Votre maître du jour maintient l'élément d'aujourd'hui",
      "WEAK_HELPED": "Un maître du jour faible reçoit de la force aujourd'hui",
      "STRONG_OVERFED": "Un maître du jour fort est alourdi aujourd'hui",
      "STRONG_DRAINED": "Un maître du jour fort est équilibré aujourd'hui",
      "WEAK_BURDENED": "Un maître du jour faible reçoit plus à porter aujourd'hui",
      "BRANCH_SAMHAP": "Le soutien d'aujourd'hui forme un trine complet avec votre chart",
      "BRANCH_BANHAP": "Le soutien d'aujourd'hui forme un demi-trine avec votre chart",
      "BRANCH_YUKHAP": "Le soutien d'aujourd'hui forme une harmonie à six avec votre chart",
      "BRANCH_SAME": "Le soutien d'aujourd'hui est le même que celui de votre chart",
      "BRANCH_NEUTRAL": "Le soutien d'aujourd'hui n'a pas de lien particulier avec votre chart",
      "BRANCH_WONJIN": "Le soutien d'aujourd'hui est en désaccord silencieux avec votre chart",
      "BRANCH_CHUNG": "Le soutien d'aujourd'hui entre en conflit avec votre chart"
    },
    "bookmarkHint": "Nous ne stockons pas votre date de naissance, donc elle doit être saisie à nouveau chaque fois. **Ajoutez ce lien de résultat aux favoris** et il ouvrira la fortune de ce jour chaque jour.",
    "disclaimer": "La fortune d'aujourd'hui transforme la relation entre le pilier du jour et votre chart en un score. C'est une note sur comment passer la journée, pas une prophétie."
  },
  "ads": {
    "label": "Publicité"
  },
  "selfAds": {
    "label": "Services associés",
    "comingSoon": "À venir bientôt",
    "purposes": {
      "naminglink": "Noms coréens et hanja choisis par signification et nombre de traits",
      "inyeonlink": "Comment deux personnes s'harmonisent, lu à partir de leurs quatre piliers et signes du zodiaque",
      "sajulink": "Vos propres quatre piliers, et comment aujourd'hui les rencontre",
      "dreamslink": "Interprétations de rêves tirées d'un dictionnaire de symboles",
      "placelink": "Lieux à visiter lors d'un rendez-vous en Corée, partagés et recommandés"
    }
  },
  "analyzing": {
    "title": "Construire votre carte",
    "quotes": [
      "Le Saju n'est pas une réponse fixe. C'est une langue pour comprendre soi-même.",
      "Savoir ce avec quoi vous êtes né et vivre cela sont deux choses différentes.",
      "Une position forte dépend de son utilisation ; une position faible, de son remplissage.",
      "Les mêmes huit caractères font un jour différent selon la façon dont vous les lisez.",
      "Mieux que d'attendre un bon jour, c'est de savoir comment utiliser celui que vous avez.",
      "La position que les gens appellent une faiblesse est généralement celle où la plus grande croissance se produit.",
      "Certaines énergies sont poussées par la saison ; d'autres, vous devez les créer vous-même.",
      "Ce qui compte plus que le score, c'est comment vous le lisez.",
      "La fortune d'aujourd'hui est la météo d'un jour, pas le climat où vous vivez.",
      "Connaître votre Saju signifie se voir, pas voir devant."
    ],
    "watching": "Publicité en cours",
    "remaining": "Votre résultat s'ouvre dans {seconds} s"
  },
  "reportDetail": {
    "depthTitle": "Un aperçu plus approfondi de votre carte",
    "vitalityTitle": "Ce que la saison pousse en avant",
    "vitalityHint": "Les barres indiquent combien d'un élément il y a ; ce tableau indique si le mois de naissance le pousse. La même quantité a une force différente à wang qu'à sa.",
    "vitalities": {
      "WANG": {
        "name": "Wang (旺)",
        "body": "à son maximum"
      },
      "SANG": {
        "name": "Sang (相)",
        "body": "suivant en force"
      },
      "HYU": {
        "name": "Hyu (休)",
        "body": "au repos après son tour"
      },
      "SU": {
        "name": "Su (囚)",
        "body": "retenu, difficile à déplacer"
      },
      "SA": {
        "name": "Sa (死)",
        "body": "au plus faible"
      }
    },
    "rawLabel": "Avant la saison",
    "strengthLabel": "Après la saison",
    "earthSeasonNote": "Né dans un mois de transition (辰未戌丑), donc la terre est également comptée comme wang.",
    "allyRatioLabel": "Ratio d'allié",
    "allyRatioHint": "La part détenue par les étoiles de ressource et de compagnon combinées. Au-dessus de 45 % est fort, en dessous de 35 % est faible. Le nombre est imprimé pour que vous puissiez voir à quel point le verdict était proche.",
    "stemGodsTitle": "Ce que chaque pilier représente pour vous",
    "stemGodsHint": "Mesuré à partir de votre jour maître, chaque tige restante prend l'un des noms des dix dieux. Ceux qui sont plus nombreux en disent long sur le tempérament.",
    "pillarColumn": "Pilier",
    "tenGodColumn": "Dix dieux",
    "meaningColumn": "Ce que cela signifie",
    "yearOutlookTitle": "Perspectives de cette année",
    "domainsTitle": "Quatre domaines de la vie",
    "yongsinTitle": "Ce dont vous avez besoin maintenant",
    "tenGodDepthTitle": "Ce qui se démarque dans ce tableau",
    "disclaimerTitle": "Comment lire ce document",
    "yearOutlookUnavailable": "Le pilier de cette année n'a pas pu être lu, donc cette section est laissée vide. Tout ce qui se trouve sur les pages précédentes reste valable.",
    "factorsTitle": "D'où provient le score de chaque domaine",
    "factorsHint": "L'écran nomme les facteurs ; ici, chacun est imprimé avec les points qu'il a ajoutés ou retirés.",
    "deltaColumn": "Points",
    "appendixTitle": "Comment cette carte a été construite",
    "timeCorrectionLabel": "Heure de naissance",
    "timeCorrectionApplied": "Corrigée en temps solaire vrai et lue comme {time}.",
    "timeCorrectionNone": "Aucune heure de naissance n'a été donnée, donc le pilier horaire a été omis.",
    "timeCorrectionDateShift": "La correction a déplacé la date à {date}, donc le pilier de ce jour a été utilisé.",
    "calendarLabel": "Date à partir de laquelle le thème a été établi",
    "solarLabel": "Solaire",
    "lunarLabel": "Lunaire",
    "lunarUnavailable": "Cette date n'est pas dans le tableau des almanachs, donc aucune date lunaire n'est affichée."
  },
  "report": {
    "title": "Lecture de vie et l'année à venir",
    "body": "Nous transformons cette lecture en un PDF et ajoutons la couche que l'écran ne montre jamais : la force de votre jour maître et ce dont il a besoin maintenant, les dix dieux de vos quatre piliers, les quatre domaines de la vie lus à partir de votre carte natale avec les chiffres qui les sous-tendent, et les perspectives pour cette année. La fortune d'aujourd'hui n'est pas incluse — elle change chaque jour, donc elle reste gratuite à l'écran.",
    "buyButton": "Payer {price} et télécharger",
    "preparing": "Pas encore disponible",
    "ordering": "Création de votre commande…",
    "paying": "Paiement en cours…",
    "issuing": "Préparation de votre rapport…",
    "done": "Téléchargé. Utilisez le bouton ci-dessous pour le télécharger à nouveau.",
    "failed": "Le paiement ou le téléchargement a échoué. Veuillez réessayer dans un instant.",
    "retry": "Télécharger à nouveau",
    "contents": [
      "Votre jour maître et tempérament — un résumé, forces et précautions",
      "Votre carte natale et le poids des cinq éléments — les huit caractères",
      "La force de votre jour maître, et l'énergie dont il a besoin maintenant",
      "Vitalité saisonnière et les dix dieux de vos quatre piliers",
      "Ce qui se démarque dans cette carte — les dix dieux épais et ceux absents",
      "Les quatre domaines de la vie lus à partir de votre carte natale, avec les chiffres derrière chacun",
      "La correction du temps solaire vrai, et les perspectives pour cette année"
    ],
    "consentLabel": "Je comprends qu'il s'agit d'un contenu numérique fourni immédiatement après le paiement, et que **le droit de rétractation pour simple changement d'avis est restreint une fois le téléchargement terminé**.",
    "consentRequired": "Veuillez confirmer les conditions de rétractation avant de payer.",
    "productInfoTitle": "Informations sur le produit",
    "productInfo": [
      [
        "Fournisseur",
        "{brand}"
      ],
      [
        "Format",
        "Un document PDF (9 pages A4), téléchargé à l'écran immédiatement après le paiement."
      ],
      [
        "Prérequis",
        "Tout appareil capable d'ouvrir un PDF. Aucune installation ni aucun compte requis."
      ],
      [
        "Durée d'utilisation",
        "Sans limite. Le fichier téléchargé vous appartient."
      ],
      [
        "Nouveau téléchargement",
        "Jusqu'à cinq fois pour la même commande. Nous n'en conservons aucune copie : le document ne peut donc plus être produit une fois l'écran de résultat quitté."
      ],
      [
        "Rétractation",
        "Remboursement intégral avant le début du téléchargement. Une fois celui-ci terminé, la rétractation pour changement d'avis est restreinte (art. 17, al. 2 de la loi coréenne sur le commerce électronique)."
      ],
      [
        "Frais de retour",
        "Aucun — contenu numérique, rien n'est expédié."
      ]
    ],
    "refundContact": "Pour un remboursement ou une question, contactez le service client ou l'adresse e-mail ci-dessous. Si le document n'a pas pu être produit, ou si le montant débité diffère de la commande, nous remboursons intégralement.",
    "pdfLanguageNotice": "Le PDF est produit dans la même langue que cet écran."
  },
  "premiumReport": {
    "title": "Conservez votre lecture premium au format PDF",
    "body": "Tout dans la lecture de vie, plus **les chiffres derrière qui n'apparaissent jamais à l'écran** — le ratio d'allié qui a décidé de la force ou de la faiblesse, à quel point le mois de naissance a poussé chaque élément vers le haut, et la correction du temps solaire vrai appliquée à votre heure de naissance.",
    "buyButton": "Payez {price} et téléchargez",
    "preparing": "Pas encore disponible",
    "ordering": "Création de votre commande…",
    "paying": "Traitement du paiement…",
    "issuing": "Préparation de votre rapport…",
    "done": "Téléchargé. Utilisez le bouton ci-dessous pour le télécharger à nouveau.",
    "failed": "Le paiement ou le téléchargement a échoué. Veuillez réessayer dans un moment.",
    "retry": "Télécharger à nouveau",
    "contents": [
      "Votre jour maître et tempérament — un résumé, forces et précautions",
      "Votre carte natale — les huit caractères des quatre piliers",
      "Les cinq éléments, la force de votre jour maître et ce dont il a besoin",
      "La fortune d'aujourd'hui et les quatre domaines (argent, amour, travail, santé)",
      "Ce que chaque pilier représente pour vous — les dix dieux lus à partir de votre carte",
      "Position saisonnière et ratio d'allié — les chiffres derrière le verdict",
      "Perspectives de cette année, facteurs de notation d'aujourd'hui, et correction du temps"
    ],
    "consentLabel": "Je comprends que ceci est un contenu numérique livré immédiatement après le paiement, et que **le retrait pour un simple changement d'avis est restreint une fois le téléchargement terminé**.",
    "consentRequired": "Veuillez confirmer les conditions de retrait avant de payer.",
    "productInfoTitle": "Informations sur le produit",
    "productInfo": [
      [
        "Fournisseur",
        "{brand}"
      ],
      [
        "Format",
        "Un document PDF (7 pages A4), téléchargé à l'écran juste après le paiement."
      ],
      [
        "Conditions d'utilisation",
        "Tout appareil capable d'ouvrir un PDF. Pas d'installation ni de compte requis."
      ],
      [
        "Durée d'utilisation",
        "Aucune limite. Vous conservez le fichier que vous téléchargez."
      ],
      [
        "Téléchargement à nouveau",
        "Jusqu'à cinq fois sur la même commande. Nous ne conservons aucune copie, donc il ne peut pas être produit à nouveau une fois que vous quittez l'écran de résultat."
      ],
      [
        "Retrait",
        "Remboursement complet avant le début du téléchargement. Après son achèvement, le retrait pour un changement d'avis est restreint (Art. 17(2), Loi coréenne sur le commerce électronique)."
      ],
      [
        "Frais de retour",
        "Aucun — contenu numérique, rien n'est expédié."
      ]
    ],
    "refundContact": "Pour les remboursements ou questions, contactez le centre client ou l'email ci-dessous. Si le document n'a pas pu être produit, ou si le montant facturé diffère de la commande, nous remboursons intégralement.",
    "pdfLanguageNotice": "Le document PDF est produit dans la même langue que cet écran."
  },
  "fallbackReport": {
    "summary": "Un maître de jour {dayMaster} né dans l'énergie de {season}. Dans l'ensemble du tableau, {strongest} est le plus épais et {scarcest} est le plus fin. Tout ce qui suit découle de ces huit caractères — chaque nombre et chaque pilier ici est calculé, pas choisi.",
    "personality": "Votre maître de jour est {dayMaster} — énergie {element} — et ce tableau se lit comme {strengthName}. Quel côté est le plus épais, ce qui soutient le maître de jour ou ce qui en tire, façonne le grain, et dans la vie quotidienne, cela se manifeste comme ceci.",
    "cautions": {
      "STRONG": [
        "Vous poussez si fort que vous ne remarquez souvent l'inclinaison qu'après qu'elle se soit produite.",
        "Même là où de l'aide est disponible, vous finissez par gérer cela seul, ce qui rend la tâche plus grande.",
        "Les choses se stabilisent lorsque vous laissez de la place pour ce qui tire l'excès."
      ],
      "BALANCED": [
        "Rien ne vous incline d'un côté ou de l'autre, donc une décision reportée reste simplement reportée.",
        "Vous vous adaptez bien à la situation, ce qui peut brouiller où se trouve votre propre ligne.",
        "Diriger vers ce qui est le plus fin en ce moment vous donne une direction à tenir."
      ],
      "WEAK": [
        "Tenir seul vous épuise plus vite que vous ne l'attendez.",
        "Sans rien derrière vous, les décisions glissent et le moment passe.",
        "Garder des personnes de soutien près de vous n'est pas une faiblesse dans ce tableau — c'est la méthode."
      ]
    },
    "scarcityCaution": "L'élément le plus fin en ce moment est {scarcest}. Tout ce que cet élément gouverne est là où vous agissez le plus lentement.",
    "elementBalance": "Par force, {strongest} mène à {strongestPct}% et {scarcest} est à la traîne à {scarcestPct}%. Votre mois de naissance se trouve dans {season}, ce qui pousse cet élément encore plus haut — la même quantité a une force différente selon que la saison la soutient ou non. Ce dont vous avez besoin maintenant est {favorable}, et les choses s'apaisent là où cet élément est comblé.",
    "todayHeadline": "Aujourd'hui se lit comme {grade}",
    "todayMessage": "Aujourd'hui, le score est de {score}, noté {gradeName}. {gradeBody} Le pilier du jour est {pillar}, et le plus grand facteur de ce score était « {topFactor} ».",
    "todayAdvice": {
      "HIGH": "Une bonne journée pour reprendre le message ou le rangement que vous avez remis à plus tard — bien qu'il soit préférable de ne pas essayer de tout terminer aujourd'hui.",
      "MID": "Faites comme d'habitude et vous obtiendrez ce que vous obtenez d'habitude. Plutôt que de commencer quelque chose de nouveau, faites avancer une chose déjà en main d'un pas.",
      "LOW": "Une partie d'aujourd'hui va à l'encontre du tableau. Mieux vaut passer du temps à finir et à vérifier qu'à commencer."
    },
    "luckyNote": "L'élément chanceux d'aujourd'hui est {element}. La gamme {colors}, le côté {direction}, et les heures autour de {time} sont où cette énergie est la plus forte.",
    "domains": {
      "wealth": "Lisez à partir du natal chart, l'argent vient à {score}. Cela pèse ce que vous gagnez avec la force de le porter.",
      "love": "Lisez à partir du natal chart, l'affection vient à {score}. Cela pèse l'étoile du conjoint avec la forme du siège dans lequel elle se trouve.",
      "career": "Lisez à partir du natal chart, le travail vient à {score}. Cela pèse ce que vous prenez avec ce que vous mettez en avant.",
      "health": "Lisez à partir du natal chart, la santé vient à {score}. Cela pèse l'équilibre avec lequel vous êtes né avec ce qui entre en conflit à l'intérieur."
    },
    "yearOutlook": "Le pilier de cette année est {pillar}, portant {element}. {relation} Cette lecture ne considère que la façon dont le pilier de l'année rencontre ce dont vous avez besoin maintenant ; elle ne décompose pas l'année mois par mois.",
    "yearRelations": {
      "YONGSIN": "L'élément dont vous avez besoin arrive directement cette année. Un moment propice pour sortir ce que vous aviez mis de côté.",
      "GENERATES": "Cette année nourrit l'élément dont vous avez besoin, donc l'ambiance devient plus douce — pas immédiatement, mais progressivement.",
      "GISIN": "Cette année pousse encore une fois dans la direction où vous penchiez déjà. Il vaut mieux passer du temps à clôturer ce qui est en main plutôt qu'à ouvrir quelque chose de nouveau.",
      "CONTROLS": "Quelque chose cette année appuie sur l'élément dont vous avez besoin, donc les décisions prennent plus de temps. Fixer vos propres délais aide.",
      "NEUTRAL": "Cette année ne s'oppose ni ne nourrit ce dont vous avez besoin. Conserver ce que vous avez est le meilleur choix."
    },
    "disclaimer": "Référence traditionnelle de myeongri, pas une prédiction scientifique ou une déclaration sur ce qui doit arriver.",
    "tenGodDepth": {
      "BIGYEON": {
        "thick": "Le Compagnon est fort. Vous construisez de vos propres mains plutôt que d'emprunter, ce qui vous rend fort pour mener une tâche à son terme. Mais accepter de l'aide est aussi une compétence, et le considérer comme une faiblesse vous laisse porter des choses seul — et entrer en collision, sur les parts, avec quiconque se tient à vos côtés. Là où le travail est partagé, tendre la main en premier s'avère être le chemin le plus rapide.",
        "absent": "Le Compagnon est absent. Agir avec les autres vous convient mieux que de tenir votre propre terrain. Vous hésitez longtemps lorsque la décision vous appartient seul, et vous prenez de la vitesse une fois que quelqu'un est avec vous. Lorsque vous devez tenir une position, il vaut la peine de pratiquer la poussée."
      },
      "GEOPJAE": {
        "thick": "La Richesse Robuste est forte. Vous agissez en premier là où les autres hésitent. Cette force ne se transforme pas facilement en conservation, donc ce que vous gagnez ne reste pas longtemps en main. Décider à l'avance où va l'argent n'est pas de l'économie dans ce tableau — c'est une méthode.",
        "absent": "La Richesse Robuste est absente. Vous ne forcez que rarement une chose et vous évitez les concours. Vous perdez peu, mais vous êtes un peu en retard lorsque quelque chose doit être poussé fortement. Là où les enjeux sont réels, fixer votre propre délai aide."
      },
      "SIKSIN": {
        "thick": "Le Dieu de l'Alimentation est fort. Ce qui est à l'intérieur sort facilement, donc créer, grandir et nourrir sont des terrains confortables. Vous excellez dans un travail qui se fait lentement et longtemps, et les résultats arrivent tard mais régulièrement. Lorsque le confort s'étend, cependant, vous vous installez plutôt que de vous élargir.",
        "absent": "Le Dieu de l'Alimentation est absent. Le canal de l'intérieur vers l'extérieur est mince : la pensée est là, mais l'expression est tardive. Attendre que tout soit prêt retarde le début. Mettre quelque chose à l'extérieur à moitié fini n'est pas une perte dans ce tableau."
      },
      "SANGGWAN": {
        "thick": "L'Officier Blessant est épais. Vous voyez ce qui est hors de place dans un cadre fixe avant quiconque, et vous avez les mots pour le nommer. Vous brillez là où les choses se créent et vous entrez en collision là où les choses sont conservées. La manière dont la bonne chose est dite compte autant ici que le fait de la voir.",
        "absent": "L'Officier Blessant est absent. Vous cherchez le moyen à travers un cadre plutôt que de le secouer. Vous entrez rarement en conflit avec les gens, mais vous laissez passer des choses là où elles devraient changer, et cela se transforme en frustration. Mieux vaut ne pas reporter le mot qui doit être dit."
      },
      "PYEONJAE": {
        "thick": "La Richesse Indirecte est épaisse. Vous gardez une main dans plusieurs endroits et saisissez les opportunités largement, donc les choses s'ouvrent dans des coins inattendus. Ce qui est étendu doit également être entretenu, cependant, et l'entretien vous intéresse moins — donc vous continuez à échouer à rassembler ce que vous avez ouvert. Fermer un avant d'ouvrir le suivant est l'ordre dont ce tableau a besoin.",
        "absent": "La Richesse Indirecte est absente. Vous prenez la chose sûre sur un terrain familier plutôt que de vous étendre largement. Il y a moins de choses pour vous secouer, et vous regardez les plus grandes chances passer tout aussi souvent. Élargir votre portée d'un pouce à la fois aide."
      },
      "JEONGJAE": {
        "thick": "La Richesse Directe est épaisse. Vous comptez ce qui entre et ce qui sort, et vous construisez — donc le sol sous vous se renforce avec le temps. Ne viser que la chose certaine vous rend en retard pour saisir l'opportunité, et l'économie poussée trop loin rend votre main lourde là où elle devrait s'ouvrir. Décider à l'avance à quoi sert l'argent aide.",
        "absent": "La Richesse Directe est absente. Le côté accumulation stable est mince, donc gérer ce qui arrive continue d'être reporté. Gagner et garder sont des compétences différentes ; ce tableau doit apprendre la seconde séparément. Des règles qui déplacent l'argent sans que vous décidiez chaque fois vous conviennent bien."
      },
      "PYEONGWAN": {
        "thick": "L'Officier Indirect est épais. La pression fait ressortir votre force, et vous portez des responsabilités que d'autres trouvent lourdes. Lorsque la tension ne se lève jamais, cependant, elle se durcit en un sentiment de traque et le repos cesse de ressembler à du repos. Fixer un moment pour s'arrêter n'est pas de l'oisiveté dans ce tableau.",
        "absent": "L'Officier Indirect est absent. Peu de choses pèsent sur vous, ce qui est facile pour l'esprit, mais le pouvoir de vous tenir debout dans une crise est mince. Vous faites beaucoup mieux lorsqu'une échéance ou une promesse est fixée de l'extérieur."
      },
      "JEONGGWAN": {
        "thick": "L'Officier Direct est épais. Votre position et les lignes que vous maintenez sont claires, et les maintenir est d'où vient votre stabilité — vous construisez la confiance à l'intérieur des systèmes. Là où les règles vacillent, vous êtes lent à juger, et là où le tableau est à vous de fixer, vous vous sentez à l'étroit.",
        "absent": "L'Officier Direct est absent. Une manière que vous avez créée vous convient mieux qu'un endroit assigné de l'extérieur. C'est la liberté, mais la norme vacille facilement ; écrire vos propres règles comme si elles étaient des politiques aide."
      },
      "PYEONIN": {
        "thick": "La Ressource Indirecte est épaisse. Vous empruntez le chemin que les autres évitent et construisez une profondeur qui vous est propre. L'apprentissage et l'évaluation sont forts, mais la pensée dépasse la main et vous pouvez être fatigué avant de commencer. Bouger à moitié prêt convient à ce tableau.",
        "absent": "La Ressource Indirecte est absente. Vous apprenez en vous heurtant aux choses plutôt qu'en creusant. Vous n'êtes pas lent à apprendre, mais l'étude tenue seule pendant de longues périodes ne vous convient pas. Demander aux gens et apprendre sur le terrain est plus rapide."
      },
      "JEONGIN": {
        "thick": "La Ressource Directe est épaisse. Ce qui vous soutient est ample, donc l'apprentissage et un endroit où s'appuyer ne manquent jamais. Cette stabilité rend le fait d'avancer tardif, et la préparation devient la raison d'un début reporté. Garder un endroit où ce que vous avez reçu retourne est bénéfique.",
        "absent": "La Ressource Directe est absente. Vous avez créé votre propre fondation, donc vous vous êtes tenu seul tôt. Demander de l'aide est inhabituel, cependant, et vous vous en tenez à vous-même même lorsque ce n'est pas nécessaire. Dans ce graphique, demander a une grande valeur."
      }
    },
    "natalFactors": {
      "WEALTH_STARS": "Combien de richesse (財星) le graphique porte — l'épaisseur de ce que vous manipulez et rassemblez.",
      "WEALTH_STRONG_BODY": "Le maître du jour est plein, donc il y a de la force pour porter la richesse.",
      "WEALTH_WEAK_BODY": "Le maître du jour est mince, donc la richesse est difficile à porter même là où elle existe.",
      "WEALTH_YONGSIN": "Ce dont vous avez besoin maintenant est le même élément que les étoiles de richesse, afin que ce terrain soit plus facile.",
      "LOVE_SPOUSE_STAR": "Combien d'étoiles de conjoint le graphique porte — richesse directe pour les hommes, officier direct pour les femmes.",
      "LOVE_SPOUSE_PALACE": "L'étoile de conjoint se trouve à l'intérieur de votre branche de jour, le palais du conjoint, donc le siège est occupé.",
      "LOVE_PALACE_CHUNG": "Le palais du conjoint entre en conflit avec une autre branche, donc ce siège est instable.",
      "LOVE_GENDER_UNKNOWN": "Aucun genre n'a été entré, donc l'étoile de conjoint n'a pas été comptée. La valeur se divise entre les étoiles de richesse et d'officier selon le genre, et nous ne choisissons pas l'un arbitrairement.",
      "CAREER_OFFICER": "Les étoiles d'officier (正官·偏官) dans le graphique — l'épaisseur de ce que vous prenez et gardez.",
      "CAREER_OUTPUT": "Les étoiles de sortie (食神·傷官) dans le graphique — l'épaisseur de ce que vous produisez et exprimez.",
      "CAREER_STRONG_BODY": "Le maître du jour est plein, donc il utilise les étoiles officielles plutôt que d'être pressé par elles.",
      "HEALTH_BALANCE": "À quel point les cinq éléments sont-ils équilibrés — plus cela penche d'un côté, plus la pression tombe sur ce que cet élément gouverne.",
      "HEALTH_CHUNG": "Combien de paires de branches s'affrontent à l'intérieur du tableau.",
      "HEALTH_EXTREME_BODY": "Le maître du jour penche fortement d'un côté, ce qui est une pression en soi. Un maître du jour équilibré ne perd rien ici."
    },
    "yongsinDepth": {
      "STRONG": "Les éléments soutenant votre jour maître sont pleins. Cela vous donne une force propre mais penche facilement d'un côté, donc ce dont vous avez besoin maintenant n'est pas plus de soutien — c'est quelque chose pour évacuer l'excès. {favorable} fait cela. L'endroit où cet élément atteint — émettre, prendre, rassembler — est là où vous vous installez.",
      "BALANCED": "Ce qui soutient votre jour maître et ce qui en tire est presque équilibré. Trop proche pour trancher d'un côté ou de l'autre, donc ici nous lisons ce qui est le plus fin comme ce dont vous avez besoin : {favorable}. Un graphique qui ne penche pas s'adapte bien mais brouille sa propre ligne, donc se diriger vers l'endroit fin vous donne une direction à tenir.",
      "WEAK": "Les éléments soutenant votre jour maître sont fins. Vous empruntez bien la force autour de vous mais vous vous épuisez à tenir seul, donc ce dont vous avez besoin maintenant est quelque chose pour vous soutenir et vous remplir. {favorable} fait cela. Garder des choses de soutien près de vous n'est pas une faiblesse dans ce graphique — c'est la méthode."
    }
  },
  "footer": {
    "privacy": "Confidentialité",
    "terms": "Conditions",
    "refund": "Remboursement",
    "pricing": "Tarifs",
    "legalEntity": "Société",
    "representative": "Représentant",
    "businessNumber": "Registre",
    "mailOrderNumber": "Vente en ligne",
    "address": "Adresse",
    "customerCenter": "Service client",
    "email": "Email",
    "privacyOfficer": "Données perso.",
    "hostingProvider": "Hébergement",
    "providedBy": "Fourni par",
    "effective": "Entrée en vigueur",
    "backHome": "Retour à l'accueil"
  },
  "animals": {
    "rat": "Rat",
    "ox": "Bœuf",
    "tiger": "Tigre",
    "rabbit": "Lapin",
    "dragon": "Dragon",
    "snake": "Serpent",
    "horse": "Cheval",
    "goat": "Chèvre",
    "monkey": "Singe",
    "rooster": "Coq",
    "dog": "Chien",
    "pig": "Cochon"
  },
  "elements": {
    "WOOD": "Bois",
    "FIRE": "Feu",
    "EARTH": "Terre",
    "METAL": "Métal",
    "WATER": "Eau"
  }
};
