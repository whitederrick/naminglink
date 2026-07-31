// 인연링크(사주 궁합·인연의 결) 화면 사전의 프랑스어(fr) 판이다.
// `src/lib/i18n.ts`의 `en`을 번역 기준으로 삼고, 영어가 모호한 자리는 같은 파일의 `ko` 원문을 대조해 옮겼다.
// 언어 선택기 3개 키와 footer의 13개 키는 naminglink(`src/lib/i18n.ts`·`src/components/SiteFooter.tsx`)의 fr 문구를 그대로 가져와 두 서비스의 표기를 맞췄다.

import type { Dictionary } from "@/lib/i18n";

export const fr: Dictionary = {
  brand: "InyeonLink",
  tagline: "La compatibilité lue à travers le Saju et les signes du zodiaque",
  currentLanguage: "Langue actuelle",
  moreLanguages: "Plus",
  closeLanguages: "Fermer",
  landing: {
    title: "Découvrez comment deux personnes\ns'accordent",
    subtitle:
      "Une date de naissance suffit.\nNous combinons la compatibilité Saju (Quatre Piliers) et la compatibilité du zodiaque pour en donner un taux de compatibilité.",
    cta: "Voir la compatibilité Saju",
    howTitle: "Comment ça marche",
    steps: [
      "Saisissez les deux dates de naissance. L'heure de naissance est facultative.",
      "La compatibilité Saju vient des éléments des maîtres du jour, de l'équilibre des éléments et de la branche du jour ; la compatibilité du zodiaque vient de la branche de l'année.",
      "Les deux scores sont combinés en un taux de compatibilité pondéré.",
    ],
    privacyTitle: "Rien de ce que vous saisissez n'est conservé",
    privacyBody:
      "Les dates de naissance ne servent qu'au calcul du résultat et ne sont jamais enregistrées. Aucun compte n'est nécessaire. Rien de ce que contient un lien de résultat n'est envoyé au serveur.",
    disclaimer:
      "Il s'agit d'une lecture Saju traditionnelle proposée à titre indicatif. Ce n'est ni une prédiction scientifique ni un jugement sur une relation.",
  },
  form: {
    title: "Les deux dates de naissance",
    description:
      "Connaître l'heure de naissance affine la lecture, mais ce n'est pas obligatoire.",
    personA: "Première personne",
    personB: "Deuxième personne",
    nickname: "Comment l'appeler",
    nicknamePlaceholder: "ex. : Moi",
    nicknameHint:
      "Affiché uniquement sur l'écran de résultat. Ce nom n'entre pas dans le calcul.",
    gender: "Genre",
    male: "Homme",
    female: "Femme",
    genderUnspecified: "Je préfère ne pas le dire",
    genderHint:
      "Le Saju traditionnel lit la position du conjoint différemment selon le genre. Si vous ne le précisez pas, ce facteur est retiré du calcul.",
    birthplace: "Lieu de naissance",
    birthplaceHint:
      "Le pilier de l'heure est calculé à partir du temps solaire vrai de votre lieu de naissance, en tenant compte de l'heure d'été et des changements de fuseau horaire passés. Si votre lieu de naissance ne figure pas dans la liste, choisissez la ville la plus proche — plus elle est proche, plus le pilier de l'heure est exact.",
    calendar: "Calendrier",
    solar: "Solaire",
    lunar: "Lunaire",
    leapMonth: "Mois intercalaire",
    birthDate: "Date de naissance",
    year: "Année",
    month: "Mois",
    day: "Jour",
    birthTime: "Heure de naissance",
    unknownTime: "Je ne connais pas l'heure",
    hour: "Heure",
    minute: "Minute",
    submit: "Regarder une publicité puis voir le résultat de compatibilité",
    submitting: "Calcul en cours…",
    errorInvalidDate:
      "Veuillez vérifier la date de naissance. Pour une date lunaire, vérifiez aussi s'il s'agit d'un mois intercalaire.",
    errorGeneric: "Le calcul a échoué. Veuillez réessayer dans un instant.",
  },
  reading: {
    chartTitle: "Les deux thèmes",
    chartHint:
      "Le Saju écrit l'année, le mois, le jour et l'heure de naissance avec deux caractères chacun. Tous les scores ci-dessous découlent de ces huit caractères.",
    pillarYear: "Année",
    pillarMonth: "Mois",
    pillarDay: "Jour",
    pillarHour: "Heure",
    pillarHourUnknown: "Heure de naissance inconnue",
    dayMasterLabel: "Maître du jour",
    animalLabel: "Zodiaque",
    seasonLabel: "Saison de naissance",
    elementsTitle: "Force des éléments",
    strongest: "Le plus fort",
    scarcest: "Le plus rare",
    strengthTitle: "Les atouts de ce duo",
    cautionTitle: "Points de vigilance",
    bodyStrengthTitle: "Force du maître du jour",
    favorableLabel: "Ce qu'il vous faut maintenant",
  },
  bodyStrength: {
    STRONG: {
      name: "Maître du jour fort",
      body: "Les éléments qui soutiennent votre maître du jour sont abondants. Cela vous donne un élan qui vous est propre, mais l'ensemble penche vite d'un côté — vous vous apaisez plutôt quand quelque chose vient absorber ce trop-plein.",
    },
    BALANCED: {
      name: "Maître du jour équilibré",
      body: "Ce qui soutient votre maître du jour et ce qui le sollicite sont presque à égalité. Impossible de trancher dans un sens ou dans l'autre : ici, nous lisons donc comme votre besoin ce qui est le plus mince.",
    },
    WEAK: {
      name: "Maître du jour faible",
      body: "Les éléments qui soutiennent votre maître du jour sont minces. Vous savez emprunter de la force autour de vous, mais vous vous épuisez à tenir seul — vous vous révélez quand quelque chose vous soutient.",
    },
  },
  relation: {
    title: "Comment vous vous situez l'un par rapport à l'autre",
    hint: "Le Saju nomme par dix termes la façon dont deux maîtres du jour se regardent. La lecture a un sens : la façon dont vous voyez l'autre et celle dont l'autre vous voit peuvent différer.",
    directionLabel: "{from} → {to}",
    shapes: {
      ALIKE: {
        name: "Semblables",
        body: "Vos maîtres du jour portent la même énergie. Beaucoup de choses vont de soi et vos goûts se recoupent. Le revers, c'est que vous êtes forts et faibles aux mêmes endroits : la difficulté a donc tendance à vous bloquer tous les deux au même point.",
      },
      NURTURING: {
        name: "L'un nourrit, l'autre s'épanouit",
        body: "L'énergie circule dans un seul sens. Celui qui reçoit se sent à l'aise et trouve plus de choses à entreprendre ; celui qui donne tire satisfaction de voir l'autre réussir. Comme le flux est à sens unique, il faut que quelque chose revienne, sinon celui qui donne finit par s'épuiser.",
      },
      TENSION: {
        name: "L'un cadre l'autre",
        body: "L'un de vous occupe la position qui retient l'autre. Cette tension vous empêche tous deux de vous relâcher et donne souvent des résultats quand vous travaillez ensemble. Celui qui est retenu peut se sentir jugé en permanence : la reconnaissance doit donc venir avant la correction.",
      },
    },
    leadNote: {
      NURTURING: "Ici, c'est **{lead}** qui donne l'énergie.",
      TENSION: "Ici, c'est **{lead}** qui donne le rythme.",
    },
  },
  tenGods: {
    BIGYEON: {
      name: "Compagnon (比肩)",
      body: "Quelqu'un qui se tient à vos côtés, d'égal à égal. Facile à aborder et agréable à fréquenter — mais difficile de céder quand vous voulez tous deux la même chose.",
    },
    GEOPJAE: {
      name: "Rival (劫財)",
      body: "Semblable, mais avec une autre manière de faire. Redoutable quand vous poussez dans le même sens ; pointilleux sur les comptes dès qu'il y a quelque chose à partager.",
    },
    SIKSIN: {
      name: "Expression (食神)",
      body: "Quelqu'un qui fait sortir ce qu'il y a en vous. À ses côtés, vous parlez davantage et vous avez envie d'entreprendre. L'une des positions les plus confortables qui soient.",
    },
    SANGGWAN: {
      name: "Perturbateur (傷官)",
      body: "Quelqu'un qui bouscule votre cadre. Intéressant et stimulant — mais dès que les mots s'aiguisent entre vous, la coupure dure.",
    },
    PYEONJAE: {
      name: "Aubaine (偏財)",
      body: "Quelqu'un dont vous avez envie de prendre soin. Beaucoup de plaisir spontané, même si le poids de la relation peut rester léger.",
    },
    JEONGJAE: {
      name: "Richesse stable (正財)",
      body: "Traditionnellement la position du conjoint pour un homme. L'attention vient avec constance, et la relation s'installe dans le quotidien plutôt que dans les sommets.",
    },
    PYEONGWAN: {
      name: "Défi (偏官)",
      body: "Quelqu'un qui vous tient en alerte. L'attirance est forte et difficile à ignorer, mais une proximité prolongée peut se mettre à peser.",
    },
    JEONGGWAN: {
      name: "Autorité (正官)",
      body: "Traditionnellement la position du conjoint pour une femme. Cette personne vous remet dans le droit chemin et apporte de l'ordre et de la stabilité à la relation.",
    },
    PYEONIN: {
      name: "Soutien atypique (偏印)",
      body: "Quelqu'un qui vous aide d'une manière inhabituelle. Il y a des moments d'une vraie profondeur, mais il faut du temps pour comprendre la méthode de l'autre.",
    },
    JEONGIN: {
      name: "Bienveillance (正印)",
      body: "Quelqu'un qui vous accueille et prend soin de vous. Vous avez envie de vous appuyer sur cette personne et l'esprit s'apaise. Mais si l'appui ne va que dans un sens, la relation penche.",
    },
  },
  dayMasters: {
    甲: { name: "Bois Yang (甲)", trait: "Un grand arbre qui pousse droit. Une fois la direction fixée, il ne vacille pas, et il préfère endurer plutôt que plier." },
    乙: { name: "Bois Yin (乙)", trait: "Une liane, une herbe souple. Elle plie avec les circonstances pour continuer d'avancer, et elle ne casse pas." },
    丙: { name: "Feu Yang (丙)", trait: "Le soleil de midi. Les sentiments s'affichent, la pièce s'éclaire, et se mettre en avant vient naturellement." },
    丁: { name: "Feu Yin (丁)", trait: "La lumière d'une bougie. Elle brûle doucement et longtemps, et réchauffe d'abord les plus proches." },
    戊: { name: "Terre Yang (戊)", trait: "La plaine et la montagne. Difficile à ébranler et facile à prendre pour appui, mais lente à revenir sur une décision prise." },
    己: { name: "Terre Yin (己)", trait: "La terre des champs. Elle accueille ce qui vient et le fait grandir : elle entretient plutôt qu'elle ne se montre." },
    庚: { name: "Métal Yang (庚)", trait: "Du fer brut. Décidé et net, avec peu de patience pour ce qui reste en suspens." },
    辛: { name: "Métal Yin (辛)", trait: "Une pierre précieuse taillée. Un goût raffiné et des exigences élevées ; le travail bâclé passe difficilement." },
    壬: { name: "Eau Yang (壬)", trait: "Le fleuve et la mer. Une vision large et l'œil pour voir comment les choses évoluent." },
    癸: { name: "Eau Yin (癸)", trait: "La rosée et la pluie. Elle s'infiltre en silence et lit l'ambiance avant les mots." },
  },
  dayMasterSigns: {
    甲: [
      "Dit ce qu'elle pense dès la première rencontre.",
      "Change rarement un plan ou une promesse une fois fixés.",
      "Refuse sans détour, ce qui peut sembler abrupt.",
    ],
    乙: [
      "Contourne l'affrontement et prend un autre chemin.",
      "Paraît souple, et pourtant finit là où elle voulait aller.",
      "Observe l'ambiance avant de se joindre à un groupe.",
    ],
    丙: [
      "Adresse la parole en premier aux personnes qu'elle vient de rencontrer.",
      "Ce qu'elle aime et ce qu'elle n'aime pas se lit sur son visage.",
      "Se retrouve au centre du groupe sans le chercher.",
    ],
    丁: [
      "Discrète au début, attentionnée une fois la proximité installée.",
      "Préfère une longue conversation à deux ou trois plutôt qu'en grand groupe.",
      "Retient une remarque lancée en passant et y revient plus tard.",
    ],
    戊: [
      "Parle peu ; sa voix monte rarement, même dans l'urgence.",
      "Celle qui tranche à la fin quand les autres repoussent la décision.",
      "Un non, une fois donné, reste non pour longtemps.",
    ],
    己: [
      "Écoute plus longtemps qu'elle ne parle.",
      "A du mal à refuser, si bien que le travail s'accumule sur elle.",
      "Ce dont elle s'est occupée discrètement ne se découvre que plus tard.",
    ],
    庚: [
      "Décide vite et le dit sur-le-champ.",
      "N'adoucit pas les choses, ce qui peut paraître froid.",
      "Visiblement impatiente quand une affaire traîne.",
    ],
    辛: [
      "A des critères précis pour ses vêtements et les objets qu'elle choisit.",
      "Ne peut pas laisser passer un travail à moitié fait sans le signaler.",
      "Avare de compliments, mais catégorique quand elle en fait un.",
    ],
    壬: [
      "Se mêle facilement à toutes sortes de gens.",
      "Évoque la suite avant ce qui est devant elle.",
      "Supporte mal d'être retenue longtemps au même endroit.",
    ],
    癸: [
      "Parle peu mais a lu la situation avec exactitude.",
      "La première à remarquer quand l'ambiance change.",
      "Garde sa vie intérieure pour elle : il faut du temps pour la connaître.",
    ],
  },
  animalTraits: {
    rat: "Remarque vite et met vite à l'abri ce qui compte. Le premier à bouger en cas de crise.",
    ox: "Paraît lent mais va jusqu'au bout. Ce qu'il prend en charge, il ne le lâche pas.",
    tiger: "Sans peur et en première ligne. Ne peut pas laisser passer une injustice.",
    rabbit: "Doux et perspicace. Sait contourner plutôt qu'entrer en collision.",
    dragon: "Grand cœur et idéaux élevés. Se contente rarement de l'ordinaire.",
    snake: "Garde ses pensées pour lui et réfléchit en profondeur. Juge avec justesse.",
    horse: "Enjoué et remuant. Être enfermé est ce qu'il supporte le moins.",
    goat: "Chaleureux et attentionné. Garde longtemps les paroles dures.",
    monkey: "Ingénieux et prompt à s'adapter. La répétition l'ennuie.",
    rooster: "Appliqué et rigoureux. Ne peut rien laisser de travers.",
    dog: "Loyal jusqu'au bout une fois la confiance donnée. La trahison le blesse particulièrement.",
    pig: "Généreux et direct. Fait confiance facilement, parfois à ses dépens.",
  },
  affinity: {
    menu: "Votre profil d'affinité",
    formTitle: "Quel genre de personne vous convient",
    formDescription:
      "Une seule date de naissance suffit. Vous pouvez lire ceci sans connaître l'anniversaire de qui que ce soit — ou sans avoir encore quelqu'un en tête.",
    meLegend: "Vous",
    genderHint:
      "Le Saju traditionnel lit la position du conjoint différemment selon le genre. Si vous ne le précisez pas, ce facteur est retiré plutôt que deviné.",
    seekingLabel: "Vous cherchez",
    seekingHint:
      "La position du conjoint (Jeongjae / Jeonggwan) ne peut être établie que si les deux genres sont connus.",
    seekingAny: "Non précisé",
    submit: "Regarder une publicité puis voir le résultat du profil de relation",
    submitting: "Lecture en cours…",

    resultTitle: "Votre profil d'affinité",
    intro:
      "Voici le grain de personne vers lequel penche votre thème. **Vous pouvez reconnaître ces types au tempérament,** bien avant d'apprendre une date de naissance.",
    scoreCaption:
      "Ce sont les mêmes scores par facteur que ceux du moteur de compatibilité — pas un taux de compatibilité global.",
    meTitle: "Votre position",
    meBody: "Vous êtes {dayMaster}, et vous êtes actuellement {strength}.",
    meHint:
      "Le Saju écrit votre année, mois, jour et heure de naissance en huit caractères. **Le premier caractère du jour de naissance vous représente** — on l'appelle le tronc du jour. Tous les types ci-dessous sont classés selon ce seul caractère.",
    bestTitle: "Les grains qui vous conviennent",
    bestHint:
      "Il s'agit du tronc du jour de l'autre personne — **l'énergie du jour où elle est née** — réparti en dix sortes, dont ces trois s'accordent avec le vôtre. On peut souvent le deviner d'après les comportements ci-dessous, bien avant de connaître une date de naissance.",
    signsTitle: "Comment cela se manifeste",
    avoidTitle: "Les grains qui demandent du travail",
    avoidHint:
      "Ce n'est pas un avertissement. Cela veut dire que la facilité vient plus tard, une fois que vous y avez tous deux consacré du temps.",
    bondLabel: "Accord des tempéraments",
    spouseLabel: "Position du conjoint",
    spouseSkipped: "Le genre n'a pas été précisé, ce facteur a donc été retiré",
    scoreHelp:
      "**Accord des tempéraments** — la façon dont les énergies de vos deux jours de naissance s'emboîtent. Même un duo fait de tensions obtient le score le plus élevé lorsque le yin et le yang sont croisés.\n**Position du conjoint** — le Saju traditionnel réserve une position au conjoint : Jeongjae pour les hommes, Jeonggwan pour les femmes. Nous la vérifions **dans les deux sens** : si l'autre occupe cette position pour vous, et si vous l'occupez pour l'autre. Les deux à la fois, c'est le duo que la tradition estime le plus.",
    typeHeading: "Quelqu'un comme {name}",
    needTitle: "Ce qui vous manque en ce moment",
    needBody:
      "Si {elements} est fort chez l'autre, cela comble la place qui est mince chez vous.",
    needHint:
      "On ne lit pas les cinq éléments de quelqu'un au premier coup d'œil. Mais dès que vous connaissez sa date de naissance, regardez ici en premier.",
    zodiacTitle: "Le zodiaque, en complément",
    zodiacHint:
      "Le zodiaque ne demande que l'année de naissance : c'est donc le plus rapide à vérifier. Ce n'est aussi qu'un pilier sur quatre — prenez-le comme un indice.",
    zodiacGood: "Les signes qui vous conviennent",
    zodiacHard: "Les signes qui frottent",
    tableType: "Type",
    tableSign: "Signe",
    tableYears: "Années de naissance",
    bornYear: "né en {year}",
    younger: "{n} an(s) de moins",
    older: "{n} an(s) de plus",
    sameAge: "même âge",
    zodiacYearsCaution:
      "En Saju, l'année change à Ipchun (vers le 4 février), et non le 1er janvier. **Toute personne née en janvier ou au début de février relève du signe de l'année précédente** : pour ces dates, vérifiez donc l'année de part et d'autre.",
    dayBranchTitle: "Est-ce la bonne personne pour moi ?",
    dayBranchBody:
      "Une date de naissance suffit pour vérifier si quelqu'un vous convient.\nPour la lecture complète, utilisez la compatibilité Saju en bas de cette page.",
    check: {
      button: "Vérifier avec sa date de naissance",
      title: "Quel grain est cette personne ?",
      body: "Saisissez une date de naissance et nous vous dirons auquel des dix types ci-dessus elle appartient. Aucun score de compatibilité n'est calculé.",
      submit: "Vérifier",
      checking: "Vérification…",
      rank: "votre n° {rank}",
      heading: "Cette personne est {name}",
      caution:
        "Cette lecture ne porte que sur le jour de naissance. **Si la personne est née autour de minuit,** le jour peut basculer d'un côté ou de l'autre, et les naissances de janvier ou du début de février relèvent du signe de l'année précédente.",
      close: "Fermer",
      another: "Vérifier quelqu'un d'autre",
      error: "Veuillez vérifier la date — elle n'existe pas ou se situe hors de la plage autorisée.",
    },
    nextTitle: "Quelqu'un en tête ?",
    nextBody:
      "Saisissez les deux dates de naissance et vous obtenez le vrai taux de compatibilité, tous les facteurs ci-dessus additionnés.",
    nextButton: "Voir la compatibilité Saju",
    recalculate: "Relancer la lecture",
    copyLink: "Copier le lien du résultat",
    copied: "Copié",
    missingInput: "Nous n'avons pas pu lire le résultat. Veuillez recommencer.",
    partialTime:
      "Aucune heure de naissance n'a été indiquée, le pilier de l'heure a donc été laissé de côté. L'ajouter précise ce qui vous manque.",
    disclaimer:
      "Une référence du point de vue du Saju traditionnel. Il ne s'agit pas de vous dire de rechercher ou d'éviter une personne en particulier.",
  },
  result: {
    title: "Résultat de compatibilité",
    totalLabel: "Taux de compatibilité",
    breakdown: "Score par facteur",
    recalculate: "Recommencer",
    copyLink: "Copier le lien du résultat",
    copied: "Copié",
    missingInput: "Ce résultat n'a pas pu être lu. Veuillez saisir de nouveau les dates.",
    partialTime:
      "Aucune heure de naissance n'a été indiquée, le pilier de l'heure a donc été laissé de côté. L'ajouter rend la lecture plus précise.",
    engineVersion: "Calculé avec",
    disclaimer:
      "Il s'agit d'une lecture Saju traditionnelle proposée à titre indicatif. Ce n'est ni une prédiction scientifique ni un jugement sur une relation.",
  },
  ads: { label: "Publicité" },
  analyzing: {
    title: "Lecture des deux thèmes",
    quotes: [
      "On ne rencontre pas tant la bonne personne qu'on la reconnaît.",
      "Une bonne entente n'est pas celle où l'on ne se dispute jamais : c'est celle où l'on revient après s'être disputé.",
      "Le Saju n'est pas une réponse figée. C'est une langue parmi d'autres pour se comprendre.",
      "Certains duos sont faciles parce que vous vous ressemblez ; d'autres vous instruisent parce que vous êtes différents.",
      "Les relations qui durent sont le plus souvent celles où rien n'est resté trop longtemps non-dit.",
      "Si sa manière de faire vous semble étrangère, c'est que cette personne possède quelque chose que vous n'avez pas.",
      "La compatibilité, c'est pour moitié ce avec quoi on naît et pour moitié ce que l'on construit.",
      "Une relation dure quand s'appuyer et donner alternent.",
      "Ce qui compte plus que le score, c'est la façon de le lire.",
      "Si vos saisons diffèrent, dites-vous l'un à l'autre à quoi ressemble votre saison.",
    ],
    gateTitle: "Votre résultat est prêt",
    gateBody:
      "Regardez une courte publicité pour l'ouvrir. Ce sont les revenus publicitaires qui permettent de garder ce service gratuit.",
    watchButton: "Voir une publicité pour découvrir le résultat",
    watching: "Publicité en cours",
    remaining: "Votre résultat s'ouvre dans {seconds} s",
  },
  report: {
    title: "Conservez cette lecture en PDF",
    body: "Nous transformons ce résultat en un PDF de trois pages, incluant les valeurs de force des éléments qui ne sont pas affichées à l'écran.",
    buyButton: "Payer {price} et télécharger",
    preparing: "Pas encore disponible",
    ordering: "Création de votre commande…",
    paying: "Paiement en cours…",
    issuing: "Préparation de votre rapport…",
    done: "Téléchargé. Utilisez le bouton ci-dessous pour le télécharger à nouveau.",
    failed: "Le paiement ou le téléchargement a échoué. Veuillez réessayer dans un instant.",
    retry: "Télécharger à nouveau",
    contents: [
      "Page 1 — taux de compatibilité, atouts du duo et points de vigilance",
      "Page 2 — la forme de la relation, les dix dieux et les scores par facteur",
      "Page 3 — les deux thèmes et la force des éléments",
    ],
    consentLabel:
      "Je comprends qu'il s'agit d'un contenu numérique fourni immédiatement après le paiement, et que **le droit de rétractation pour simple changement d'avis est restreint une fois le téléchargement terminé**.",
    consentRequired: "Veuillez confirmer les conditions de rétractation avant de payer.",
    productInfoTitle: "Informations sur le produit",
    productInfo: [
      ["Fournisseur", "{brand}"],
      ["Format", "Un document PDF (3 pages), téléchargé à l'écran juste après le paiement."],
      ["Prérequis", "Tout appareil capable d'ouvrir un PDF. Aucune installation ni aucun compte requis."],
      ["Durée d'utilisation", "Sans limite. Le fichier téléchargé vous appartient."],
      ["Nouveau téléchargement", "Jusqu'à cinq fois pour la même commande. Nous n'en conservons aucune copie : le document ne peut donc plus être produit une fois l'écran de résultat quitté."],
      ["Rétractation", "Remboursement intégral avant le début du téléchargement. Une fois celui-ci terminé, la rétractation pour changement d'avis est restreinte (art. 17, al. 2 de la loi coréenne sur le commerce électronique)."],
      ["Frais de retour", "Aucun — contenu numérique, rien n'est expédié."],
    ],
    refundContact:
      "Pour un remboursement ou une question, contactez le service client ou l'adresse e-mail ci-dessous. Si le document n'a pas pu être produit, ou si le montant débité diffère de la commande, nous remboursons intégralement.",
  },
  affinityReport: {
    title: "Conservez votre profil d'affinité en PDF",
    body: "Nous transformons cette lecture en un PDF de quatre pages. Il contient **le classement complet que l'écran ne montre pas** — l'écran vous donne les trois premiers, le PDF reprend les dix types et les douze signes.",
    buyButton: "Payer {price} et télécharger",
    preparing: "En préparation",
    ordering: "Création de la commande…",
    paying: "Paiement en cours…",
    issuing: "Construction de votre rapport…",
    done: "Téléchargé. Utilisez le bouton ci-dessous pour le récupérer à nouveau.",
    failed: "Le paiement ou le téléchargement n'a pas abouti. Veuillez réessayer sous peu.",
    retry: "Télécharger à nouveau",
    contents: [
      "Page 1 — Votre position et ce qui vous manque",
      "Page 2 — Trois grains qui vous conviennent, avec les indices de comportement",
      "Page 3 — Le grain qui demande du travail, plus le classement complet des troncs du jour",
      "Page 4 — Classement complet des douze signes, avec les années de naissance",
    ],
    consentLabel:
      "Il s'agit d'un contenu numérique fourni immédiatement après le paiement. Je comprends qu'**une fois le téléchargement terminé, le droit de rétractation pour changement d'avis est limité.**",
    consentRequired: "Veuillez accepter les conditions de rétractation avant de payer.",
    productInfoTitle: "Informations sur le produit",
    productInfo: [
      ["Fournisseur", "{brand}"],
      ["Format", "Un document PDF (4 pages), téléchargé sur cet écran juste après le paiement."],
      ["Prérequis", "Tout appareil capable d'ouvrir un PDF. Aucune installation, aucun compte."],
      ["Disponibilité", "Sans limite de durée. Le fichier téléchargé est à vous."],
      ["Nouveau téléchargement", "Jusqu'à 5 fois pour la même commande. Nous ne conservons pas le fichier : il ne peut donc plus être reconstruit une fois cet écran quitté."],
      ["Rétractation", "Remboursement intégral avant la fin du téléchargement. Une fois celui-ci terminé, la rétractation pour changement d'avis est limitée."],
      ["Frais de retour", "Aucun. Il n'y a rien à expédier."],
    ],
    refundContact:
      "Pour un remboursement ou une question, contactez le service d'assistance ou l'adresse e-mail ci-dessous. Si le document n'a jamais été produit, ou si le montant débité diffère de la commande, nous remboursons intégralement.",
  },
  reportDetail: {
    supplyTitle: "Le sens de circulation de l'énergie",
    supplyHint: "Le score des Cinq Éléments est la moyenne de deux sens. Une moyenne masque qui nourrit qui. Ici nous les séparons : dans certains couples, un seul côté est bien pourvu.",
    supplyReceiveLabel: "Ce que reçoit {name}",
    needsLabel: "Ce qu'il faut maintenant",
    bondTitle: "Le lien entre les deux Maîtres du Jour",
    depthTitle: "Un regard plus attentif sur chaque thème",
    vitalityTitle: "Ce que la saison pousse en avant",
    vitalityHint: "Les barres montrent la quantité de chaque élément. Ce tableau montre si le mois de naissance le pousse. La même quantité n'agit pas de la même façon à Wang qu'à Sa.",
    vitalities: {
      WANG: { name: "Wang (旺)", body: "à son apogée" },
      SANG: { name: "Sang (相)", body: "le suivant à monter" },
      HYU: { name: "Hyu (休)", body: "au repos après son tour" },
      SU: { name: "Su (囚)", body: "enfermé, difficile à mouvoir" },
      SA: { name: "Sa (死)", body: "au plus faible" },
    },
    seasonBoostTitle: "De combien le mois l'a soulevé",
    rawLabel: "Avant le mois",
    strengthLabel: "Après le mois",
    earthSeasonNote: "Naissance dans un mois de transition (辰未戌丑) : la Terre a aussi été considérée comme dominante.",
    allyRatioLabel: "Part du camp du Maître du Jour",
    allyRatioHint: "Ressource plus Pair, rapportés à l'ensemble. Au-dessus de 45 %, Maître du Jour fort ; en dessous de 35 %, faible. Nous affichons le chiffre pour que vous voyiez où le verdict est tombé.",
    pillarsTitle: "Là où les quatre piliers se rencontrent",
    pillarsHint: "Seule la branche du Jour entre dans la compatibilité : c'est le siège conjugal. Les trois autres piliers se lisent avec le même tableau, nous les incluons donc.",
    branchRelations: {
      SAMHAP: "Triple harmonie",
      BANHAP: "Demi-harmonie",
      YUKHAP: "Sextuple harmonie",
      SAME: "Même branche",
      NEUTRAL: "Aucune relation",
      WONJIN: "Ressentiment",
      CHUNG: "Choc",
    },
    pillarColumn: "Pilier",
    relationColumn: "Relation",
    relationScoreColumn: "Points",
    tenGodColumn: "Dix Dieux",
    stemGodsTitle: "Ce que chacun de ses piliers est pour vous",
    stemGodsHint: "La compatibilité ne compare que les Maîtres du Jour. La même règle fixe un Dieu pour ses autres piliers : elle montre quelle part de cette personne est quoi pour vous.",
    seesLabel: "Vu par {from}",
    notScoredNote: "Les scores de ce tableau n'entrent pas dans la compatibilité. Ils sont imprimés pour comparer les intensités.",
    appendixTitle: "Comment ce thème a été calculé",
    timeCorrectionLabel: "Heure de naissance",
    timeCorrectionApplied: "Corrigée en temps solaire vrai et lue comme {time}.",
    timeCorrectionNone: "Aucune heure de naissance n'a été fournie ; le pilier de l'Heure a été omis.",
    timeCorrectionDateShift: "La correction a déplacé la date au {date} ; le pilier du Jour vient de ce jour-là.",
    calendarLabel: "Date à partir de laquelle le thème a été établi",
    solarLabel: "Solaire",
    lunarLabel: "Lunaire",
    lunarUnavailable: "Ce jour manque dans la table de l'almanach ; la date lunaire n'a pas pu être imprimée.",
  },
  footer: {
    privacy: "Confidentialité",
    terms: "Conditions",
    refund: "Remboursement",
    pricing: "Tarifs",
    legalEntity: "Société",
    representative: "Représentant",
    businessNumber: "Registre",
    mailOrderNumber: "Vente en ligne",
    address: "Adresse",
    customerCenter: "Service client",
    email: "Email",
    privacyOfficer: "Données perso.",
    hostingProvider: "Hébergement",
    providedBy: "Fourni par",
    effective: "Entrée en vigueur",
    backHome: "Retour à l'accueil",
  },
  bands: {
    EXCELLENT: "Une entente exceptionnelle",
    GOOD: "Une entente solide",
    FAIR: "Une entente praticable",
    CHALLENGING: "Une entente qui demande des efforts",
  },
  engines: {
    saju: {
      name: "Compatibilité Saju",
      description:
        "Lit ensemble les éléments des maîtres du jour, l'équilibre des éléments et la branche du jour.",
    },
    zodiac: {
      name: "Compatibilité du zodiaque",
      description: "Lit la relation entre les deux branches de l'année de naissance.",
    },
  },
  factors: {
    dayMasterRelation: "Éléments des maîtres du jour",
    spouseStar: "Étoile du conjoint",
    elementSupply: "Apport des éléments",
    dayBranchRelation: "Branche du jour",
    branchRelation: "Signes du zodiaque",
  },
  notes: {
    "strength.dayMasterRelation":
      "Vos tempéraments occupent une position qui sert l'autre. Même quand la manière de l'autre semble étrangère, elle tend à fournir ce qui vous manque.",
    "strength.spouseStar":
      "Vous portez chacun l'élément traditionnellement lu comme la position du conjoint. Si les choses ont paru faciles dès le début sans raison évidente, c'est probablement pour cela.",
    "strength.elementSupply":
      "Chacun détient ce dont l'autre a besoin en ce moment. Ce qui était difficile à faire bouger seul devient généralement plus simple à deux.",
    "strength.dayBranchRelation":
      "La branche du jour est traditionnellement lue comme le siège du conjoint. Les vôtres s'accordent bien, ce qui rend le temps passé ensemble confortable.",
    "strength.branchRelation":
      "Les signes du zodiaque s'accordent bien — le genre de duo qui paraît naturel de l'extérieur et se lit facilement dès la première rencontre.",
    "caution.dayMasterRelation":
      "C'est là que les tempéraments frottent. Face à la même tâche, votre rythme et votre méthode diffèrent, ce qui se prend facilement pour de la mauvaise volonté. Mettez-vous d'accord sur le processus avant la conclusion.",
    "caution.spouseStar":
      "Aucun de vous ne porte ce que la tradition appelle l'élément de la position du conjoint de l'autre. L'attirance peut ne pas être immédiate ; ce duo se construit plutôt par accumulation, avec le temps.",
    "caution.elementSupply":
      "Ce dont chacun a besoin est également mince chez l'autre. Ce que vous savez faire tous les deux, vous le faites très bien — mais les endroits où vous manquez tous deux restent vides. Mieux vaut aller les combler en dehors de la relation.",
    "caution.dayBranchRelation":
      "Des frictions sont probables dans la position de la vie commune. Elles apparaissent en général dans de petites habitudes plutôt que dans les grandes affaires : fixer quelques règles tôt aide beaucoup.",
    "caution.branchRelation":
      "Vos signes du zodiaque se font face. Vous voyez les choses différemment, ce qui crée des frictions — et signifie aussi que vous avez beaucoup à apprendre l'un de l'autre.",

    "spouseStar.MUTUAL":
      "Chacun de vous occupe exactement la position du conjoint de l'autre — le duo que le Saju traditionnel estime le plus.",
    "spouseStar.STRONG":
      "L'un de vous occupe exactement la position du conjoint et l'autre s'en approche. Ce que chacun éprouve pour l'autre peut différer un peu en intensité.",
    "spouseStar.PARTIAL":
      "Un seul de vous occupe la position du conjoint de l'autre. L'attirance initiale penche généralement d'un côté : mieux vaut ne pas remettre à plus tard le fait de le dire.",
    "spouseStar.SLIGHT":
      "L'un de vous se situe juste à côté de la position du conjoint. Cela s'accumule avec le temps passé ensemble plutôt que d'arriver comme une attirance immédiate.",
    "spouseStar.NONE":
      "Aucun de vous n'occupe ce que la tradition appelle la position du conjoint. Ce duo se bâtit en vivant côte à côte plutôt que par attirance.",
    "dayMaster.CLASH_BONDED":
      "{elementA} et {elementB} se retiennent mutuellement, mais avec des polarités opposées. La tradition y lit le duo conjugal — la friction tend à se muer en attachement.",
    "dayMaster.CLASH_HARSH":
      "{elementA} et {elementB} se retiennent mutuellement avec la même polarité. La charge est forte, et le poids que chacun fait porter à l'autre l'est tout autant.",
    "dayMaster.FLOW_GUARDED":
      "L'un de vous libère son énergie et l'autre la retient. L'élan le plus vif se trouve tempéré par l'autre — ce que la tradition appelle un duo protégé.",
    "dayMaster.FLOW_BLOCKED":
      "L'un de vous libère son énergie et l'autre la lui retire. Celui qui donne se fatigue vite ici : il est utile de dire clairement ce que chacun donne et reçoit.",
    "dayMaster.PEER_EVEN":
      "Tous deux portent l'énergie {elementA} avec la même polarité. Cela rend les choses égales et faciles, mais aucun ne pousse l'autre en avant.",
    "dayMaster.PEER_RIVAL":
      "Tous deux portent l'énergie {elementA} avec des polarités opposées. L'attirance est rapide, mais vous convoitez le même terrain.",
    "supply.AMPLE":
      "Chacun de vous détient en abondance ce dont l'autre a besoin. La première personne a besoin de {needA} et la seconde de {needB} — et l'autre le fournit.",
    "supply.ENOUGH":
      "Chacun de vous détient une bonne part de ce dont l'autre a besoin : {needA} pour la première personne, {needB} pour la seconde.",
    "supply.THIN":
      "Ce dont chacun de vous a besoin — {needA} pour la première personne, {needB} pour la seconde — est mince chez l'autre.",
    "supply.SCARCE":
      "Aucun de vous ne peut aisément fournir ce dont l'autre a besoin : {needA} pour la première personne, {needB} pour la seconde, et les deux places restent vides. Mieux vaut aller chercher cela en dehors de la relation.",
    "dayBranch.SAMHAP":
      "Les branches du jour forment une triple harmonie — le duo le plus fort dans la position du conjoint.",
    "dayBranch.BANHAP":
      "Les branches du jour forment une demi-harmonie autour du pivot d'une triple harmonie. Un duo bien assorti dans la position du conjoint.",
    "dayBranch.YUKHAP": "Les branches du jour forment une harmonie sextuple. Vous vous attirez mutuellement.",
    "dayBranch.SAME":
      "Les branches du jour sont identiques. Cela rend les choses faciles, mais laisse peu de nouveauté.",
    "dayBranch.NEUTRAL": "Les branches du jour n'entretiennent pas de relation particulière.",
    "dayBranch.WONJIN":
      "Les branches du jour se tiennent dans un ressentiment silencieux. Peu de choses éclatent ouvertement, mais des griefs difficiles à nommer ont tendance à s'accumuler — mieux vaut les dire sur le moment que les laisser passer.",
    "dayBranch.CHUNG":
      "Les branches du jour s'opposent. Cette position est sujette aux frictions : la façon dont vous vous parlez compte.",
    "zodiac.SAMHAP":
      "Les signes {animalA} et {animalB} forment une triple harmonie — le meilleur duo du zodiaque.",
    "zodiac.BANHAP":
      "Les signes {animalA} et {animalB} forment une demi-harmonie autour du pivot d'une triple harmonie : vous vous convenez.",
    "zodiac.YUKHAP": "Les signes {animalA} et {animalB} forment une harmonie sextuple. Vous vous convenez très bien.",
    "zodiac.SAME": "Vous êtes tous deux nés sous le signe {animalA}, vos tempéraments se font donc écho.",
    "zodiac.NEUTRAL": "Les signes {animalA} et {animalB} n'entretiennent pas de relation particulière.",
    "zodiac.WONJIN":
      "Les signes {animalA} et {animalB} se tiennent dans un ressentiment silencieux — rarement une querelle ouverte, mais un désaccord subtil qui a tendance à durer.",
    "zodiac.CHUNG":
      "Les signes {animalA} et {animalB} s'opposent. Vous différez nettement, ce qui signifie aussi qu'il y a beaucoup à apprendre.",
  },
  animals: {
    rat: "Rat",
    ox: "Bœuf",
    tiger: "Tigre",
    rabbit: "Lapin",
    dragon: "Dragon",
    snake: "Serpent",
    horse: "Cheval",
    goat: "Chèvre",
    monkey: "Singe",
    rooster: "Coq",
    dog: "Chien",
    pig: "Cochon",
  },
  elements: {
    WOOD: "Bois",
    FIRE: "Feu",
    EARTH: "Terre",
    METAL: "Métal",
    WATER: "Eau",
  },
};
