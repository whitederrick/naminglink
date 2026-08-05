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
    "howTitle": "Comment ça fonctionne",
    "steps": [
      "Entrez votre date de naissance. L'heure de naissance est optionnelle.",
      "L'année, le mois, le jour et l'heure de votre naissance deviennent huit caractères — votre carte natale. À partir de cela, nous lisons le poids de chaque élément et la force de votre jour maître.",
      "Le pilier d'aujourd'hui est superposé à cette carte pour vous donner aussi la fortune d'aujourd'hui."
    ],
    "privacyTitle": "Rien de ce que vous entrez n'est enregistré",
    "privacyBody": "Les dates de naissance ne sont utilisées que pendant le calcul du résultat et ne sont jamais enregistrées. Aucun compte n'est nécessaire. Rien contenu dans un lien de résultat n'est envoyé au serveur.",
    "disclaimer": "Ceci est une lecture traditionnelle de Saju proposée à titre de référence. Ce n'est pas une prédiction scientifique ni un verdict sur l'avenir de quiconque."
  },
  "form": {
    "title": "Votre date de naissance",
    "description": "Connaître l'heure de naissance rend la lecture plus précise, mais ce n'est pas obligatoire.",
    "meLegend": "À propos de vous",
    "nickname": "Comment les appeler",
    "nicknamePlaceholder": "ex. Moi",
    "nicknameHint": "Affiché uniquement sur l'écran de résultat. Il n'est pas utilisé dans le calcul.",
    "gender": "Genre",
    "male": "Homme",
    "female": "Femme",
    "genderUnspecified": "Préfère ne pas dire",
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
    "errorInvalidDate": "Veuillez vérifier la date de naissance. Pour les dates lunaires, vérifiez également si elle tombe dans un mois intercalaire.",
    "errorGeneric": "Le calcul a échoué. Veuillez réessayer dans un instant."
  },
  "reading": {
    "chartTitle": "Votre carte natale",
    "chartHint": "Le saju représente l'année, le mois, le jour et l'heure de naissance sous forme de deux caractères chacun. Tout ce qui suit est interprété à partir de ces huit caractères.",
    "pillarYear": "Année",
    "pillarMonth": "Mois",
    "pillarDay": "Jour",
    "pillarHour": "Heure",
    "pillarHourUnknown": "Pas d'heure de naissance",
    "dayMasterLabel": "Maître du jour",
    "animalLabel": "Zodiaque",
    "seasonLabel": "Saison de naissance",
    "elementsTitle": "Force élémentaire",
    "strongest": "Le plus fort",
    "scarcest": "Le plus rare",
    "strengthTitle": "Ce avec quoi vous êtes né",
    "cautionTitle": "Ce à surveiller",
    "bodyStrengthTitle": "Force du maître du jour",
    "favorableLabel": "Ce dont vous avez besoin maintenant"
  },
  "bodyStrength": {
    "STRONG": {
      "name": "Maître de jour fort",
      "body": "Les éléments soutenant votre maître de jour sont pleins. Cela vous donne une dynamique propre, mais cela penche facilement d'un côté — vous avez tendance à vous installer lorsque quelque chose tire l'excès."
    },
    "BALANCED": {
      "name": "Maître de jour équilibré",
      "body": "Ce qui soutient votre maître de jour et ce qui en tire est presque égal. Trop proche pour trancher d'un côté ou de l'autre, donc ici nous lisons ce qui est le plus mince comme ce dont vous avez besoin."
    },
    "WEAK": {
      "name": "Maître de jour faible",
      "body": "Les éléments soutenant votre maître de jour sont fins. Vous empruntez bien la force qui vous entoure, mais vous vous épuisez à tenir seul — vous vous épanouissez lorsque quelque chose vous soutient."
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
      "name": "Gain imprévu (偏財)",
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
      "name": "Soutien non conventionnel (偏印)",
      "body": "Énergie qui vous soutient par un chemin inhabituel. Elle accorde le pouvoir de creuser profondément, mais en excès, la pensée précède la main."
    },
    "JEONGIN": {
      "name": "Nurture (正印)",
      "body": "L'énergie qui vous tient et vous élève. Elle donne l'apprentissage et quelque chose sur quoi s'appuyer ; en excès, se lancer seul vient tard."
    }
  },
  "dayMasters": {
    "甲": {
      "name": "Bois Yang (甲)",
      "trait": "Un grand arbre qui pousse droit. Une fois la direction fixée, il ne vacille pas et préfère endurer plutôt que de plier."
    },
    "乙": {
      "name": "Bois Yin (乙)",
      "trait": "Une vigne — une herbe flexible. Elle se plie aux circonstances pour continuer à avancer, et ne se casse pas."
    },
    "丙": {
      "name": "Feu Yang (丙)",
      "trait": "Le soleil de midi. Les émotions se montrent clairement, la pièce s'illumine, et avancer vient naturellement."
    },
    "丁": {
      "name": "Feu Yin (丁)",
      "trait": "Lumière de bougie. Elle brûle doucement et longtemps, et réchauffe d'abord ceux qui sont proches."
    },
    "戊": {
      "name": "Terre Yang (戊)",
      "trait": "Terres ouvertes et montagnes. Difficile à secouer et facile à s'appuyer, bien que lente à changer une décision une fois prise."
    },
    "己": {
      "name": "Terre Yin (己)",
      "trait": "Terre de champ. Elle absorbe tout ce qui vient et le fait croître, s'occupant plutôt que de se montrer."
    },
    "庚": {
      "name": "Métal Yang (庚)",
      "trait": "Fer brut. Décisif et tranchant, avec peu de patience pour les choses laissées en suspens."
    },
    "辛": {
      "name": "Métal Yin (辛)",
      "trait": "Une gemme taillée. Goût fin et normes élevées ; la négligence est difficile à laisser passer."
    },
    "壬": {
      "name": "Eau Yang (壬)",
      "trait": "Rivière et mer. Large d'esprit, avec un œil pour la façon dont les choses coulent."
    },
    "癸": {
      "name": "Eau Yin (癸)",
      "trait": "Rosée et pluie. Elle s'infiltre doucement et lit l'humeur avant les mots."
    }
  },
  "dayMasterSigns": {
    "甲": [
      "Dit ce qu'il pense même lors d'une première rencontre.",
      "Change rarement un plan ou une promesse une fois établis.",
      "Refuse les choses directement, ce qui peut sembler brusque."
    ],
    "乙": [
      "Évite la confrontation et prend un autre chemin.",
      "Semble doux, mais finit par arriver là où il voulait aller.",
      "Lit l'ambiance avant de rejoindre un groupe."
    ],
    "丙": [
      "Parle en premier aux personnes qu'il vient de rencontrer.",
      "Ce qu'il aime et n'aime pas se voit sur son visage.",
      "Se retrouve au centre d'un rassemblement sans effort."
    ],
    "丁": [
      "Silencieux au début, attentif une fois proche.",
      "Préfère une longue conversation avec un ou deux plutôt qu'avec une foule.",
      "Se souvient d'une remarque passée et en parle plus tard."
    ],
    "戊": [
      "Parle peu ; sa voix ne monte que rarement même quand c'est urgent.",
      "Celui qui règle les choses à la fin pendant que les autres procrastinent.",
      "Un non, une fois donné, reste un non pendant longtemps."
    ],
    "己": [
      "Écoute plus longtemps qu'il ne parle.",
      "A du mal à refuser, donc le travail s'accumule.",
      "Ce qu'il a pris soin de faire discrètement ne ressort que plus tard."
    ],
    "庚": [
      "Décide rapidement et le dit sur le champ.",
      "Ne tourne pas les choses, ce qui peut sembler froid.",
      "Visiblement agité quand quelque chose traîne."
    ],
    "辛": [
      "A des normes claires concernant les vêtements et les choses qu'il choisit.",
      "Ne peut pas laisser passer un travail à moitié fait sans le signaler.",
      "Économe en éloges, mais définitif quand il le pense."
    ],
    "壬": [
      "S'intègre facilement avec toutes sortes de personnes.",
      "Évoque ce qui vient plus tard avant ce qui est devant lui.",
      "S'ennuie d'être attaché à un seul endroit trop longtemps."
    ],
    "癸": [
      "Parle peu mais a bien compris la situation.",
      "Le premier à remarquer quand l'ambiance change.",
      "Garde sa vie intérieure proche, donc il faut du temps pour le connaître."
    ]
  },
  "animalTraits": {
    "rat": "Rapide à remarquer et rapide à sécuriser ce qui compte. Premier à agir en cas de crise.",
    "ox": "Lent à regarder mais voit les choses au bout. Ce qu'il prend, il ne lâche pas.",
    "tiger": "Intrépide et en avant. Ne peut pas laisser passer l'injustice.",
    "rabbit": "Doux et perceptif. Sait comment contourner plutôt que de heurter.",
    "dragon": "Généreux avec de grands idéaux. Rarement satisfait de l'ordinaire.",
    "snake": "Garde ses propres conseils et pense profondément. Juge avec précision.",
    "horse": "Brillant et agité. Être enfermé est la chose la plus difficile.",
    "goat": "Chaleureux et attentionné. Gardent des mots durs pendant longtemps.",
    "monkey": "Ingénieux et rapide à s'adapter. S'ennuie de la répétition.",
    "rooster": "Diligent et exigeant. Ne peut pas laisser une chose hors de sa place.",
    "dog": "Loyal jusqu'à la fin une fois la confiance accordée. La trahison fait particulièrement mal.",
    "pig": "Généreux et franc. Fait confiance facilement, parfois à ses dépens."
  },
  "result": {
    "title": "Votre lecture de Saju",
    "recalculate": "Recommencer",
    "copyLink": "Copier le lien du résultat",
    "copied": "Copié",
    "missingInput": "Ce résultat n'a pas pu être lu. Veuillez entrer les dates à nouveau.",
    "partialTime": "Aucun temps de naissance n'a été donné, donc le pilier horaire a été omis. L'ajouter rend la lecture plus précise.",
    "engineVersion": "Calculé avec",
    "disclaimer": "Ceci est une lecture de Saju traditionnelle proposée à titre de référence. Ce n'est pas une prédiction scientifique ou un verdict sur votre avenir."
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
    "watching": "Regarder la publicité",
    "remaining": "Votre résultat s'ouvre dans {seconds}s"
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
        "body": "repos après son tour"
      },
      "SU": {
        "name": "Su (囚)",
        "body": "retenu, difficile à déplacer"
      },
      "SA": {
        "name": "Sa (死)",
        "body": "à son minimum"
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
    "factorsTitle": "D'où provient le score d'aujourd'hui",
    "factorsHint": "L'écran nomme les facteurs ; ici, chacun est imprimé avec les points qu'il a ajoutés ou retirés.",
    "deltaColumn": "Points",
    "appendixTitle": "Comment cette carte a été construite",
    "timeCorrectionLabel": "Heure de naissance",
    "timeCorrectionApplied": "Corrigé à l'heure solaire réelle et lu comme {time}.",
    "timeCorrectionNone": "Aucune heure de naissance n'a été donnée, donc le pilier horaire a été omis.",
    "timeCorrectionDateShift": "La correction a déplacé la date à {date}, donc le pilier de ce jour a été utilisé.",
    "calendarLabel": "Date à partir de laquelle la carte a été tirée",
    "solarLabel": "Solaire",
    "lunarLabel": "Lunaire",
    "lunarUnavailable": "Cette date n'est pas dans le tableau des almanachs, donc aucune date lunaire n'est affichée."
  },
  "report": {
    "title": "Conservez votre lecture de vie en tant que PDF",
    "body": "Nous transformons cette lecture en un PDF — votre natal chart, le poids des cinq éléments, la force de votre jour maître et ce dont il a besoin maintenant, et la fortune d’aujourd’hui, le tout sur une seule page.",
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
      "Votre natal chart — les huit caractères des quatre piliers",
      "Le poids des cinq éléments, le plus épais et le plus fin",
      "La force de votre jour maître, et l'énergie dont il a besoin maintenant",
      "La fortune d’aujourd’hui et les quatre domaines (argent, amour, travail, santé)"
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
        "Un document PDF (5 pages A4), téléchargé à l'écran immédiatement après le paiement."
      ],
      [
        "Conditions d'utilisation",
        "Tout appareil capable d'ouvrir un PDF. Aucune installation ou compte requis."
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
        "Même lorsque de l'aide est disponible, vous finissez par gérer cela seul, ce qui rend le travail plus important.",
        "Les choses se stabilisent lorsque vous laissez de la place pour ce qui tire l'excès."
      ],
      "BALANCED": [
        "Rien ne vous incline d'un côté ou de l'autre, donc une décision reportée reste simplement reportée.",
        "Vous vous adaptez bien à la situation, ce qui peut brouiller où se trouve votre propre ligne.",
        "Se diriger vers ce qui est le plus fin en ce moment vous donne une direction à suivre."
      ],
      "WEAK": [
        "Tenir seul vous épuise plus vite que vous ne l'attendez.",
        "Sans rien derrière vous, les décisions glissent et le moment passe.",
        "Garder des personnes de soutien près de vous n'est pas une faiblesse dans ce tableau — c'est la méthode."
      ]
    },
    "scarcityCaution": "L'élément le plus fin en ce moment est {scarcest}. Tout ce que cet élément gouverne est où vous agissez le plus lentement.",
    "elementBalance": "Par force, {strongest} domine à {strongestPct}% et {scarcest} traîne à {scarcestPct}%. Votre mois de naissance se trouve dans {season}, ce qui pousse cet élément à nouveau — la même quantité porte une force différente selon que la saison la soutient ou non. Ce dont vous avez besoin maintenant est {favorable}, et les choses s'apaisent là où cet élément est comblé.",
    "todayHeadline": "Aujourd'hui se lit comme {grade}",
    "todayMessage": "Aujourd'hui, le score est de {score}, noté {gradeName}. {gradeBody} Le pilier du jour est {pillar}, et le plus grand facteur ayant influencé ce score était « {topFactor} ».",
    "todayAdvice": {
      "HIGH": "Une bonne journée pour reprendre le message ou le rangement que vous avez remis à plus tard — bien qu'il soit préférable de ne pas essayer de tout finir aujourd'hui.",
      "MID": "Faites comme d'habitude et vous obtiendrez ce que vous obtenez habituellement. Plutôt que de commencer quelque chose de nouveau, faites avancer une chose déjà en main d'un pas.",
      "LOW": "Une partie d'aujourd'hui va à l'encontre du tableau. Mieux vaut passer du temps à finir et à vérifier qu'à commencer."
    },
    "luckyNote": "L'élément chanceux d'aujourd'hui est {element}. La gamme {colors}, le côté {direction}, et les heures autour de {time} sont où cette énergie est la plus forte.",
    "domains": {
      "wealth": "L'argent se lit {score} aujourd'hui. Cette valeur varie selon que l'énergie d'aujourd'hui atteint les étoiles de richesse (財星) — ce que vous gérez et ce que vous récoltez.",
      "love": "L'affection se lit {score} aujourd'hui. Cette valeur est déterminée par la façon dont la branche d'aujourd'hui rencontre votre branche de jour (日支), le palais du conjoint — l'harmonie l'élève, un choc la tire vers le bas.",
      "career": "Le travail se lit {score} aujourd'hui. Cette valeur varie selon que l'énergie d'aujourd'hui atteint les étoiles de l'officier (官星) et de la production (食傷) — ce que vous prenez en charge et ce que vous produisez.",
      "health": "La santé se lit {score} aujourd'hui. Cette valeur est déterminée par combien de vos branches natales se heurtent aujourd'hui, et par le fait que l'élément d'aujourd'hui est celui dont vous avez besoin."
    },
    "yearOutlook": "Le pilier de cette année est {pillar}, portant {element}. {relation} Cette lecture ne considère que la façon dont le pilier de l'année rencontre ce dont vous avez besoin maintenant ; elle ne décompose pas l'année mois par mois.",
    "yearRelations": {
      "YONGSIN": "L'élément dont vous avez besoin arrive directement cette année. Un moment propice pour sortir ce que vous aviez mis de côté.",
      "GENERATES": "Cette année nourrit l'élément dont vous avez besoin, donc le courant devient plus doux — pas immédiatement, mais progressivement.",
      "GISIN": "Cette année pousse encore une fois dans la direction où vous penchiez déjà. Mieux vaut passer du temps à clôturer ce qui est en main qu'à ouvrir quelque chose de nouveau.",
      "CONTROLS": "Quelque chose cette année appuie sur l'élément dont vous avez besoin, donc les décisions prennent plus de temps. Fixer vos propres délais aide.",
      "NEUTRAL": "Cette année ne s'oppose ni ne nourrit ce dont vous avez besoin. Garder le terrain que vous avez est le meilleur échange."
    },
    "disclaimer": "Référence traditionnelle de myeongri, pas une prédiction scientifique ou une déclaration sur ce qui doit se produire."
  },
  "footer": {
    "privacy": "Politique de confidentialité",
    "terms": "Conditions d'utilisation",
    "refund": "Annulation et remboursements",
    "pricing": "Tarification",
    "legalEntity": "Entreprise",
    "representative": "Représentant",
    "businessNumber": "Numéro d'enregistrement",
    "mailOrderNumber": "Enregistrement e-commerce",
    "address": "Adresse",
    "customerCenter": "Service client",
    "email": "Email",
    "privacyOfficer": "Responsable de la protection des données",
    "hostingProvider": "Hébergement",
    "providedBy": "Fournit par",
    "effective": "En vigueur",
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
