import type { LegalLocaleDocuments } from "@/lib/legal-locales/types";

// ko 원본에서 자동 생성된 번역이다(scripts/translate-legal.mjs). 손으로 고쳐도 되지만,
// 다시 생성하면 덮어쓴다 — 문구를 바꿀 일이 있으면 ko를 먼저 고치고 전체를 다시 만들 것.
// 사업자 정보와 가격은 플레이스홀더로 남아 있고 실제 값은 getLegalDocument가 넣는다.

const d0 = {
  "title": "Politique de traitement des données personnelles",
  "intro": "Saju-Link ne conserve pas d'informations nécessaires à l'interprétation du saju (사주). Cette politique décrit ce que le service reçoit, ce qui n'est pas conservé et ce qui est automatiquement enregistré.",
  "sections": [
    {
      "heading": "1. Informations non conservées",
      "paragraphs": [
        "Les informations saisies pour l'interprétation du saju, telles que la date de naissance, l'heure de naissance, le lieu de naissance, le sexe et le nom utilisé, ne sont **pas conservées nulle part.** Elles sont uniquement utilisées en mémoire du serveur pendant le traitement de la demande et disparaissent avec la réponse.",
        "Aucune donnée n'est enregistrée dans la base de données et aucun fichier séparé n'est conservé. Étant donné qu'il n'y a pas d'inscription, les valeurs saisies ne sont pas liées à une personne spécifique."
      ]
    },
    {
      "heading": "2. Informations contenues dans le lien de résultat",
      "paragraphs": [
        "L'adresse de l'écran de résultats contient les valeurs saisies sous forme codée. Cependant, cette valeur se trouve après le # dans l'adresse, et selon les normes web, le contenu après le # n'est pas envoyé par le navigateur au serveur. Par conséquent, même si le lien de résultat est ouvert, seul le chemin de l'adresse reste dans les enregistrements de connexion du serveur.",
        "Si le lien de résultat est envoyé à une autre personne, cette personne pourra également voir le même résultat. Le lien lui-même contient les valeurs saisies, donc la décision de partager ou non appartient à l'utilisateur."
      ]
    },
    {
      "heading": "3. Informations collectées automatiquement",
      "paragraphs": [
        "Il n'y a aucune information collectée par le service pour identifier l'utilisateur. Cependant, un minimum d'enregistrements nécessaires au fonctionnement du service web est automatiquement conservé par le fournisseur d'infrastructure."
      ],
      "bullets": [
        "Adresse IP de connexion, date et heure de connexion, type de navigateur, etc. — enregistrements de connexion serveur généraux",
        "Informations sur le pays — utilisées uniquement pour déterminer automatiquement la langue de l'écran et ne sont pas conservées"
      ]
    },
    {
      "heading": "4. Cookies et publicités",
      "paragraphs": [
        "Le service lui-même n'utilise pas de cookies pour suivre les utilisateurs.",
        "Actuellement, aucune publicité n'est diffusée sur ce service. Si des publicités sont diffusées à l'avenir, le fournisseur de publicité (par exemple, Google) peut utiliser des cookies pour la diffusion des annonces. Dans ce cas, cette clause sera d'abord modifiée pour clarifier ce qui change avant de commencer."
      ]
    },
    {
      "heading": "5. Informations conservées lors du paiement",
      "paragraphs": [
        "Actuellement, aucun produit payant n'est vendu, donc aucune information liée au paiement n'est conservée.",
        "Lorsque la vente commencera, les éléments suivants seront conservés pour le traitement des paiements et la conservation des enregistrements de transactions conformément à la législation : **même à ce moment-là, les valeurs saisies pour l'interprétation du saju et le PDF généré ne seront pas conservés**, et aucune information permettant d'identifier l'utilisateur, comme le nom, les coordonnées ou l'adresse, ne sera collectée."
      ],
      "bullets": [
        "Numéro de commande et identifiant de paiement",
        "Montant du paiement, devise et état du paiement (non payé, payé, annulé)",
        "Classification du produit, état de traitement, nombre de téléchargements de documents, date de commande",
        "Langue de l'écran au moment de la commande et classification de la région de paiement (domestique, international)",
        "Durée de conservation — Conformément à l'article 6 de la loi sur la protection des consommateurs dans le commerce électronique, les enregistrements relatifs au paiement et à la fourniture de biens seront conservés pendant 5 ans, et les enregistrements relatifs aux plaintes ou litiges des consommateurs seront conservés pendant 3 ans avant d'être détruits."
      ]
    },
    {
      "heading": "6. Fourniture à des tiers et sous-traitance",
      "paragraphs": [
        "Il n'y a pas de données personnelles conservées, donc aucune donnée personnelle n'est fournie à des tiers.",
        "Pour l'exploitation du service, l'infrastructure d'hébergement de {hostingProvider} est utilisée, et dans ce processus, les enregistrements de connexion mentionnés au point 3 sont traités conformément à la politique de ce prestataire.",
        "Lorsque la vente de produits payants commencera, les paiements nationaux seront confiés à Toss Payments, et les paiements internationaux à PortOne (PayPal). Les informations sur les moyens de paiement, telles que les numéros de carte et de compte, seront également traitées directement par ces prestataires, et le service ne les recevra pas."
      ]
    },
    {
      "heading": "7. Droits de l'utilisateur",
      "paragraphs": [
        "Il n'y a pas de données personnelles conservées, donc il n'y a pas de demande d'accès, de correction ou de suppression à adresser.",
        "L'utilisateur peut supprimer toutes les traces de saisie simplement en effaçant le lien de résultat dans la barre d'adresse du navigateur.",
        "Pour toute question liée à l'utilisation du service, veuillez nous contacter aux coordonnées ci-dessous."
      ]
    },
    {
      "heading": "8. Données personnelles des enfants",
      "paragraphs": [
        "Ce service n'est pas destiné aux enfants de moins de 14 ans et ne collecte pas de données personnelles auprès des enfants."
      ]
    },
    {
      "heading": "9. Responsable de la protection des données personnelles",
      "paragraphs": [
        "Responsable de la protection : {privacyOfficer}",
        "Contact : {email} / {customerCenter}"
      ]
    },
    {
      "heading": "10. Modification de la politique",
      "paragraphs": [
        "En cas de modification de cette politique, la date d'entrée en vigueur et les modifications seront publiées sur cette page. Si le contenu du traitement change réellement, comme la diffusion de publicités ou le début de la vente de produits payants, nous informerons d'abord de la modification."
      ]
    }
  ],
  "effectiveLabel": "Date d'entrée en vigueur"
};

const d1 = {
  "title": "Conditions d'utilisation",
  "intro": "Ces conditions définissent les conditions d'utilisation du service Saju-Link (ci-après dénommé « service »). En utilisant le service, vous acceptez ces conditions.",
  "sections": [
    {
      "heading": "1. Nature du service",
      "paragraphs": [
        "Le service présente le natal chart (원국) et l'équilibre des cinq éléments en appliquant les règles de la divination traditionnelle (saju) sur la base de la date de naissance et de l'heure de naissance saisies.",
        "Les scores et interprétations fournis sont des **matériaux de référence selon la perspective de la divination traditionnelle et ne constituent pas des prévisions scientifiques ou des affirmations sur l'avenir, la santé ou les biens d'un individu.** Un score bas ne signifie pas que la journée est mauvaise, et un score élevé ne garantit rien non plus.",
        "**Les phrases d'interprétation des rapports payants sont rédigées par une IA générative.** Cependant, tous les chiffres tels que les scores, les troncs célestes et l'équilibre des cinq éléments sont calculés par le moteur de règles du service, et l'IA ne modifie ni ne crée ces valeurs. Si aucune interprétation n'est produite, une description basée sur les valeurs calculées par le moteur sera utilisée à la place, et le nombre de pages et les éléments inclus dans le document sont exactement ceux mentionnés au point 3 ci-dessous."
      ]
    },
    {
      "heading": "2. Frais d'utilisation",
      "paragraphs": [
        "Le service est actuellement entièrement gratuit et ne nécessite pas d'inscription.",
        "Lorsque la vente de produits payants (un rapport PDF) commencera, les conditions du point 3 ci-dessous s'appliqueront. Les conditions seront à nouveau notifiées avant le début de la vente."
      ]
    },
    {
      "heading": "3. Produits payants et remboursements",
      "paragraphs": [
        "Le produit payant proposé est **un rapport PDF sur la vie de saju et la fortune de cette année**. Il s'agit de créer un document à partir des résultats affichés à l'écran, qui contiendra également des informations non affichées à l'écran.",
        "**9 pages A4** — couverture et résumé, tendances innées et points forts à surveiller, les huit caractères du natal chart et l'équilibre des cinq éléments, la force du tronc céleste et l'énergie nécessaire actuellement (yongsin), les dix dieux des quatre piliers et les positions marquantes dans ce saju, les quatre domaines de la vie vus dans le natal chart (richesse, amour, carrière, santé) et leurs justifications, les détails de correction de l'heure de Jin Tai Yang, ainsi que la fortune de cette année. Paiement national {priceDomestic} (TVA incluse), paiement international {priceGlobal}.",
        "**La fortune d'aujourd'hui ne sera pas incluse dans ce document.** Étant une valeur qui change chaque jour, elle est fournie gratuitement à l'écran, tandis que ce document est constitué d'une interprétation du natal chart qui ne changera jamais et de la fortune de cette année.",
        "Les paiements nationaux peuvent être effectués via Toss Payments en utilisant des cartes de crédit, de débit et des paiements simplifiés (Toss Pay, Kakao Pay, Naver Pay, Payco, etc.), et les paiements internationaux se font via PayPal par PortOne. Le montant final est celui affiché à l'écran de paiement.",
        "**Le service ne conserve ni les valeurs saisies par l'utilisateur ni le fichier PDF généré.** Une fois le paiement approuvé, le document est créé et téléchargé immédiatement, sans rien laisser sur le serveur. Par conséquent, le fichier téléchargé doit être conservé par l'utilisateur lui-même.",
        "En cas d'interruption du téléchargement ou de perte du fichier, il est possible de le télécharger à nouveau **jusqu'à 5 fois** avec la même commande. Cependant, si les valeurs saisies disparaissent en dehors de l'écran de résultats, il ne sera pas possible de les recréer, donc veuillez enregistrer le fichier immédiatement après le paiement."
      ],
      "bullets": [
        "**Avant le début du téléchargement après le paiement, vous pouvez** annuler à tout moment et obtenir un remboursement intégral.",
        "**Après la fin du téléchargement,** le droit de rétractation pour simple changement d'avis est limité. Il s'agit de contenu numérique fourni immédiatement et dont la restauration est impossible, ce qui correspond aux motifs de limitation du droit de rétractation définis à l'article 17, paragraphe 2 de la loi sur la protection des consommateurs dans le commerce électronique.",
        "**En cas d'erreur système empêchant la création du document, si le fichier ne s'ouvre pas ou si le montant payé diffère de la commande,** un réémission ou un remboursement intégral sera effectué.",
        "**Les plaintes concernant le contenu des résultats** ne constituent pas un motif de remboursement. L'interprétation du saju est un matériel de référence selon la perspective de la divination traditionnelle, et sa nature est expliquée avant le paiement (voir point 1 ci-dessus).",
        "Les demandes de réémission après avoir utilisé les 5 réémissions sont considérées comme non valables pour un remboursement.",
        "**Si un mineur effectue un paiement sans le consentement de son représentant légal,** lui-même ou son représentant légal peut annuler ce paiement. Veuillez nous en informer aux coordonnées ci-dessous pour obtenir un remboursement."
      ]
    },
    {
      "heading": "4. Concernant les résultats de calcul",
      "paragraphs": [
        "Tous les scores sont calculés selon des règles publiques, donc si les mêmes valeurs sont saisies, le même résultat sera toujours obtenu.",
        "Si l'heure de naissance n'est pas saisie, le calcul se fera sans le tronc céleste (시주), ce qui peut entraîner des résultats différents. Plus le lieu de naissance est choisi avec précision, plus le calcul du tronc céleste sera exact.",
        "Le calcul du calendrier de vie utilise une bibliothèque de calcul publique, et les résultats peuvent différer en fonction de la manière dont les saisons et les fuseaux horaires sont traités."
      ]
    },
    {
      "heading": "5. Responsabilité de l'utilisateur",
      "paragraphs": [
        "L'utilisateur peut saisir la date de naissance d'autrui, mais ne doit pas utiliser les résultats de manière préjudiciable pour autrui.",
        "Ne pas utiliser les résultats du service comme base pour des décisions influençant les droits d'autrui, telles que le mariage, le divorce, l'embauche ou les transactions. Le service n'est pas conçu à de telles fins."
      ]
    },
    {
      "heading": "6. Comportements interdits",
      "paragraphs": [
        "Les comportements suivants ne sont pas autorisés."
      ],
      "bullets": [
        "Envoyer des demandes excessives à l'aide d'outils automatisés qui perturbent l'exploitation du service",
        "Présenter les résultats du service comme des faits ou des résultats d'expertise",
        "Dupliquer ou modifier le service pour fournir un service identique"
      ]
    },
    {
      "heading": "7. Exonération de responsabilité",
      "paragraphs": [
        "Le service ne fournit que des matériaux de référence et ne saurait être tenu responsable des décisions prises par l'utilisateur sur la base des résultats et de leurs conséquences.",
        "En cas d'interruption du service pour des raisons incontrôlables telles que des catastrophes naturelles ou des pannes des fournisseurs d'infrastructure, le service ne sera pas responsable des dommages en résultant."
      ]
    },
    {
      "heading": "8. Droits de propriété intellectuelle",
      "paragraphs": [
        "Les droits sur l'interface du service, les phrases et la mise en œuvre des règles de calcul appartiennent à l'opérateur. L'utilisateur peut enregistrer ou partager les résultats à des fins personnelles."
      ]
    },
    {
      "heading": "9. Modification des conditions et loi applicable",
      "paragraphs": [
        "En cas de modification des conditions, celles-ci seront publiées sur cette page avec la date d'entrée en vigueur.",
        "Ces conditions sont régies par la loi de la République de Corée, et les litiges liés à l'utilisation du service seront traités conformément aux procédures définies par la législation applicable."
      ]
    }
  ],
  "effectiveLabel": "Date d'entrée en vigueur"
};

const d2 = {
  "title": "Politique de remboursement et d'annulation",
  "intro": "Voici les critères d'annulation et de remboursement pour le rapport de lecture de saju (사주) PDF. Nous avons rassemblé des informations similaires à l'article 3 des conditions générales.",
  "sections": [
    {
      "heading": "1. Nature du produit",
      "paragraphs": [
        "Le produit vendu est **un rapport de saju (사주) et de fortune de l'année PDF (A4 9 pages)**, qui est un contenu numérique créé et envoyé immédiatement après l'approbation du paiement.",
        "**Le service ne conserve ni les données saisies par l'utilisateur ni le fichier PDF créé.** Par conséquent, le fichier téléchargé doit être conservé par l'utilisateur."
      ],
      "bullets": []
    },
    {
      "heading": "2. Droit de rétractation",
      "paragraphs": [
        "Nous suivons les critères établis par la loi sur le commerce électronique."
      ],
      "bullets": [
        "**Avant le début du téléchargement,** vous pouvez annuler à tout moment et obtenir un remboursement complet.",
        "**Après la fin du téléchargement,** le droit de rétractation pour simple changement d'avis est limité. Il s'agit d'un contenu numérique fourni immédiatement après le paiement, et cela correspond aux raisons de limitation définies à l'article 17, paragraphe 2 de la loi sur la protection des consommateurs dans le commerce électronique. Cette information est préalablement communiquée et votre consentement est requis sur l'écran de paiement."
      ]
    },
    {
      "heading": "3. Cas de remboursement intégral",
      "paragraphs": [
        "Dans les cas suivants, après vérification des raisons, nous procéderons à un réémission ou à un remboursement intégral."
      ],
      "bullets": [
        "En cas d'erreur système empêchant la création du document",
        "Si le fichier téléchargé ne s'ouvre pas",
        "Si le montant payé diffère de la commande",
        "**Si un mineur a effectué le paiement sans le consentement de son représentant légal** — La demande d'annulation peut être faite par le mineur ou son représentant légal."
      ]
    },
    {
      "heading": "4. Cas non remboursables",
      "paragraphs": [],
      "bullets": [
        "**Insatisfaction concernant le contenu des résultats.** L'interprétation du saju (사주) est une référence selon la perspective traditionnelle de la divination, et sa nature est expliquée avant le paiement.",
        "Demande de réémission après avoir utilisé les 5 réémissions autorisées."
      ]
    },
    {
      "heading": "5. Méthode de soumission",
      "paragraphs": [
        "Les demandes de remboursement ou d'informations doivent être soumises au service client ({customerCenter}) ou par e-mail ({email}). Veuillez également indiquer votre numéro de commande pour un traitement rapide.",
        "Les remboursements seront effectués par le moyen de paiement utilisé, et selon les conditions de la société de carte ou de paiement, cela peut prendre de 3 à 7 jours ouvrables pour être reflété."
      ]
    }
  ],
  "effectiveLabel": "Date d'entrée en vigueur"
};

const d3 = {
  "title": "Informations tarifaires",
  "intro": "Nous vous informons de l'étendue des services gratuits et des prix des produits payants.",
  "sections": [
    {
      "heading": "1. Gratuit",
      "paragraphs": [
        "**L'interprétation du saju (사주) et la consultation de la fortune du jour sont gratuites.** Aucune inscription n'est nécessaire.",
        "Vous pouvez voir sur l'écran les huit caractères de votre natal chart, la force des cinq éléments, la force et la faiblesse de votre jour, l'énergie nécessaire actuellement, le score et le grade de votre fortune du jour, ainsi que les scores des quatre domaines de la vie."
      ]
    },
    {
      "heading": "2. Rapport de lecture de vie saju et fortune de l'année PDF (payant)",
      "paragraphs": [
        "Prix domestique {priceDomestic} (TVA incluse) · Prix international {priceGlobal}",
        "Nous vous fournirons un document PDF de **9 pages A4** contenant les résultats affichés à l'écran. Ce qui n'apparaît pas à l'écran — la force et la faiblesse de votre jour, l'énergie nécessaire actuellement, les dix dieux des quatre piliers et les positions marquantes dans ce saju, les détails de la correction de l'heure solaire, les quatre domaines de la vie vus dans le natal chart et les chiffres de référence, ainsi que la fortune de cette année — seront également inclus.",
        "Vous pouvez télécharger à nouveau jusqu'à **5 fois** avec la même commande. Cependant, si les valeurs d'entrée disparaissent en dehors de l'écran des résultats, vous ne pourrez pas les recréer, donc veuillez enregistrer le fichier immédiatement après le paiement."
      ]
    },
    {
      "heading": "4. Méthodes de paiement",
      "paragraphs": [
        "**National** — Vous pouvez utiliser des cartes de crédit et de débit ainsi que des paiements simplifiés (Toss Payments, KakaoPay, NaverPay, Payco, etc.) via Toss Payments.",
        "**International** — Vous pouvez payer via PayPal par l'intermédiaire de PortOne.",
        "Le montant final du paiement est celui affiché sur l'écran de paiement."
      ]
    },
    {
      "heading": "5. Changement de prix",
      "paragraphs": [
        "En cas de changement de prix, nous l'afficherons d'abord sur cette page. Les commandes déjà réglées ne seront pas soumises au prix modifié."
      ]
    }
  ],
  "effectiveLabel": "Date d'entrée en vigueur"
};

const d4 = {
  "title": "Politique de traitement des données personnelles",
  "intro": "Saju-Link ne conserve pas les informations nécessaires à l'interprétation du saju (사주). Cette politique décrit ce que le service reçoit, ce qui n'est pas conservé et ce qui est enregistré automatiquement.",
  "sections": [
    {
      "heading": "1. Informations non conservées",
      "paragraphs": [
        "Les informations saisies pour l'interprétation du saju, telles que la date de naissance, l'heure de naissance, le lieu de naissance, le sexe et le nom utilisé, ne sont **pas conservées nulle part.** Elles sont utilisées uniquement en mémoire serveur pendant le traitement de la demande et disparaissent avec la réponse.",
        "Aucune donnée n'est enregistrée dans la base de données et aucun fichier séparé n'est conservé. Étant donné qu'il n'y a pas d'inscription, les valeurs saisies ne sont pas liées à une personne spécifique."
      ]
    },
    {
      "heading": "2. Informations contenues dans le lien de résultat",
      "paragraphs": [
        "L'adresse de l'écran de résultats contient les valeurs saisies sous forme codée. Cependant, cette valeur se trouve après le # dans l'adresse, et selon les normes web, le contenu après le # n'est pas envoyé au serveur par le navigateur. Par conséquent, même si le lien de résultat est ouvert, seuls le chemin de l'adresse reste dans les enregistrements de connexion du serveur.",
        "Si le lien de résultat est envoyé à une autre personne, cette personne peut également voir le même résultat. Le lien lui-même contient les valeurs saisies, donc la décision de partager ou non appartient à l'utilisateur."
      ]
    },
    {
      "heading": "3. Informations collectées automatiquement",
      "paragraphs": [
        "Il n'y a pas d'informations collectées par le service pour identifier l'utilisateur. Cependant, un minimum d'enregistrements nécessaires au fonctionnement du service web est automatiquement conservé par le fournisseur d'infrastructure."
      ],
      "bullets": [
        "Adresse IP de connexion, date et heure de connexion, type de navigateur, etc., enregistrements de connexion serveur généraux",
        "Informations sur le pays — utilisées uniquement pour déterminer automatiquement la langue de l'écran et ne sont pas conservées"
      ]
    },
    {
      "heading": "4. Cookies et publicité",
      "paragraphs": [
        "Le service lui-même n'utilise pas de cookies pour identifier ou suivre les utilisateurs. Les informations saisies pour l'interprétation du saju ne sont pas transmises aux annonceurs.",
        "Ce service affiche des publicités via Google AdSense. Dans ce processus, les événements suivants se produisent."
      ],
      "bullets": [
        "Des fournisseurs tiers, y compris Google, peuvent stocker ou lire des cookies dans le navigateur de l'utilisateur.",
        "Google utilise des cookies pour afficher des publicités basées sur l'historique de visites de ce site et d'autres sites.",
        "L'utilisateur peut désactiver les publicités personnalisées dans les paramètres publicitaires de Google (google.com/settings/ads). Même après désactivation, les publicités continueront d'apparaître, mais leur pertinence pour l'utilisateur sera réduite.",
        "Les publicités personnalisées de tous les fournisseurs tiers peuvent être désactivées en une seule fois sur aboutads.info/choices.",
        "Il est également possible de bloquer les cookies dans les paramètres du navigateur.",
        "Pour les utilisateurs de l'Espace économique européen, du Royaume-Uni et de la Suisse, un consentement préalable est demandé pour l'utilisation des cookies publicitaires."
      ]
    },
    {
      "heading": "5. Informations conservées lors du paiement",
      "paragraphs": [
        "Actuellement, aucun produit payant n'est vendu, donc aucune information liée au paiement n'est conservée.",
        "Lorsque la vente commencera, les éléments suivants seront conservés pour le traitement des paiements et la conservation des enregistrements de transactions conformément à la législation : **à ce moment-là, les valeurs saisies pour l'interprétation du saju et le PDF généré ne seront pas conservés**, et aucune information permettant d'identifier l'utilisateur, comme le nom, les coordonnées ou l'adresse, ne sera collectée."
      ],
      "bullets": [
        "Numéro de commande et identifiant de paiement",
        "Montant du paiement, devise et état du paiement (non payé, payé, annulé)",
        "Classification du produit, état de traitement, nombre de téléchargements de documents, date et heure de commande",
        "Langue de l'écran au moment de la commande et classification de la région de paiement (domestique, international)",
        "Durée de conservation — Selon l'article 6 de la loi sur la protection des consommateurs dans le commerce électronique, les enregistrements relatifs au paiement et à la fourniture de biens seront conservés pendant 5 ans, et les enregistrements concernant les plaintes ou les litiges des consommateurs seront conservés pendant 3 ans avant d'être détruits."
      ]
    },
    {
      "heading": "6. Fourniture à des tiers et sous-traitance",
      "paragraphs": [
        "Il n'y a pas de données personnelles conservées, donc aucune donnée personnelle n'est fournie à des tiers.",
        "Pour le fonctionnement du service, l'infrastructure d'hébergement de {hostingProvider} est utilisée, et dans ce processus, les enregistrements de connexion mentionnés au point 3 sont traités selon la politique de ce fournisseur.",
        "Lorsque la vente de produits payants commencera, les paiements nationaux seront confiés à Toss Payments, et les paiements internationaux à PortOne (PayPal). Les informations sur les moyens de paiement, telles que les numéros de carte et de compte, seront également traitées directement par ces entreprises, et le service ne les recevra pas."
      ]
    },
    {
      "heading": "7. Droits de l'utilisateur",
      "paragraphs": [
        "Il n'y a pas de données personnelles conservées, donc il n'y a pas de demande d'accès, de correction ou de suppression à adresser.",
        "L'utilisateur peut effacer toutes les traces de saisie simplement en supprimant le lien de résultat dans la barre d'adresse du navigateur.",
        "Pour toute question liée à l'utilisation du service, veuillez nous contacter aux coordonnées ci-dessous."
      ]
    },
    {
      "heading": "8. Données personnelles des enfants",
      "paragraphs": [
        "Ce service n'est pas destiné aux enfants de moins de 14 ans et ne collecte pas de données personnelles auprès des enfants."
      ]
    },
    {
      "heading": "9. Responsable de la protection des données personnelles",
      "paragraphs": [
        "Responsable de la protection : {privacyOfficer}",
        "Contact : {email} / {customerCenter}"
      ]
    },
    {
      "heading": "10. Modification de la politique",
      "paragraphs": [
        "En cas de modification de cette politique, la date d'entrée en vigueur et les modifications seront publiées sur cette page. Si le contenu du traitement change réellement, comme le début de la diffusion de publicités ou la vente de produits payants, nous informerons d'abord de la modification."
      ]
    }
  ],
  "effectiveLabel": "Date d'entrée en vigueur"
};

const d5 = {
  "title": "Politique de traitement des données personnelles",
  "intro": "Saju-Link ne conserve pas les informations nécessaires à l'interprétation du saju (사주). Cette politique décrit ce que le service reçoit, ce qui n'est pas conservé et ce qui est automatiquement enregistré.",
  "sections": [
    {
      "heading": "1. Informations non conservées",
      "paragraphs": [
        "Les informations saisies pour l'interprétation du saju, telles que la date de naissance, l'heure de naissance, le lieu de naissance, le sexe et le nom utilisé, ne sont **pas conservées nulle part.** Elles sont uniquement utilisées dans la mémoire du serveur pendant le traitement de la demande et disparaissent avec la réponse.",
        "Elles ne sont pas enregistrées dans une base de données et ne sont pas conservées dans un fichier séparé. Comme il n'y a pas d'inscription, les valeurs saisies ne sont pas liées à une personne spécifique."
      ]
    },
    {
      "heading": "2. Informations contenues dans le lien des résultats",
      "paragraphs": [
        "L'adresse de l'écran des résultats contient les valeurs saisies sous forme codée. Cependant, cette valeur se trouve après le # dans l'adresse, et selon les normes web, le contenu après le # n'est pas envoyé par le navigateur au serveur. Par conséquent, même si vous ouvrez le lien des résultats, seul le chemin de l'adresse reste dans les enregistrements de connexion du serveur.",
        "Si vous envoyez le lien des résultats à une autre personne, cette personne pourra également voir les mêmes résultats. Le lien lui-même contient les valeurs saisies, donc la décision de partager ou non appartient à l'utilisateur."
      ]
    },
    {
      "heading": "3. Informations collectées automatiquement",
      "paragraphs": [
        "Il n'y a pas d'informations collectées par le service pour identifier l'utilisateur. Cependant, un minimum d'enregistrements nécessaires au fonctionnement du service web est automatiquement conservé par le fournisseur d'infrastructure."
      ],
      "bullets": [
        "Adresse IP de connexion, date et heure de connexion, type de navigateur, etc. — enregistrements de connexion serveur généraux",
        "Informations sur le pays — utilisées uniquement pour déterminer automatiquement la langue de l'écran et ne sont pas conservées"
      ]
    },
    {
      "heading": "4. Cookies et publicités",
      "paragraphs": [
        "Le service lui-même n'utilise pas de cookies pour suivre les utilisateurs.",
        "Actuellement, il n'y a pas de publicités affichées dans ce service. Si des publicités sont affichées à l'avenir, le fournisseur de publicité (par exemple, Google) peut utiliser des cookies pour afficher des publicités. Dans ce cas, cette clause sera d'abord modifiée pour clarifier ce qui change avant de commencer."
      ]
    },
    {
      "heading": "5. Informations conservées lors du paiement",
      "paragraphs": [
        "Lorsque vous payez pour un produit payant (rapport PDF), les informations de commande sont conservées pour le traitement du paiement et la conservation des enregistrements de transactions conformément à la législation.",
        "**Les valeurs saisies pour l'interprétation du saju et le PDF généré ne sont pas conservés même après le paiement.** Le principe énoncé au point 1 reste inchangé, indépendamment du paiement. Les éléments conservés sont les suivants, et les informations permettant d'identifier l'utilisateur, telles que le nom, les coordonnées et l'adresse, ne sont pas incluses."
      ],
      "bullets": [
        "Numéro de commande et identifiant de paiement",
        "Montant du paiement, devise et état du paiement (non payé, payé, annulé)",
        "Classification du produit, état de traitement, nombre de téléchargements du document, date de commande",
        "Langue de l'écran au moment de la commande et classification de la région de paiement (domestique, international)",
        "Durée de conservation — Conformément à l'article 6 de la loi sur la protection des consommateurs dans le commerce électronique, les enregistrements concernant le paiement et la fourniture de biens sont conservés pendant 5 ans, et les enregistrements concernant les plaintes ou les litiges des consommateurs sont conservés pendant 3 ans avant d'être détruits."
      ]
    },
    {
      "heading": "6. Fourniture à des tiers et sous-traitance",
      "paragraphs": [
        "Comme aucune donnée personnelle permettant d'identifier l'utilisateur n'est conservée, il n'y a pas de données personnelles fournies à des tiers. Le traitement des paiements est sous-traité aux entreprises suivantes.",
        "Le service utilise l'infrastructure d'hébergement de {hostingProvider}, et dans ce processus, les enregistrements de connexion mentionnés au point 3 sont traités conformément à la politique de cette entreprise.",
        "Les paiements nationaux sont traités par Toss Payments, tandis que les paiements internationaux sont traités par PayPal via PortOne. Les informations sur les moyens de paiement, telles que les numéros de carte et de compte, sont directement traitées par ces entreprises, et le service ne les reçoit ni ne les conserve."
      ]
    },
    {
      "heading": "7. Droits des utilisateurs",
      "paragraphs": [
        "Comme les valeurs saisies pour l'interprétation du saju ne sont pas conservées, il n'y a pas de demande d'accès, de correction ou de suppression à adresser. Les enregistrements de commande restants après paiement doivent être conservés pendant la période définie par la loi, et ils ne peuvent pas être supprimés pendant cette période, mais seront détruits après cette période.",
        "L'utilisateur peut supprimer toutes les traces de saisie simplement en effaçant le lien des résultats dans la barre d'adresse du navigateur.",
        "Pour toute question concernant l'utilisation du service, veuillez nous contacter aux coordonnées ci-dessous."
      ]
    },
    {
      "heading": "8. Données personnelles des enfants",
      "paragraphs": [
        "Ce service n'est pas destiné aux enfants de moins de 14 ans et ne collecte pas de données personnelles auprès des enfants."
      ]
    },
    {
      "heading": "9. Responsable de la protection des données personnelles",
      "paragraphs": [
        "Responsable de la protection : {privacyOfficer}",
        "Contact : {email} / {customerCenter}"
      ]
    },
    {
      "heading": "10. Modification de la politique",
      "paragraphs": [
        "En cas de modification de cette politique, la date d'entrée en vigueur et les modifications seront publiées sur cette page. Si le contenu du traitement change réellement, par exemple avec l'affichage de publicités ou la vente de produits payants, nous informerons d'abord de la modification."
      ]
    }
  ],
  "effectiveLabel": "Date d'entrée en vigueur"
};

const d6 = {
  "title": "Conditions d'utilisation",
  "intro": "Ces conditions définissent les modalités d'utilisation du service Saju-Link (ci-après dénommé « service »). En utilisant le service, vous acceptez ces conditions.",
  "sections": [
    {
      "heading": "1. Nature du service",
      "paragraphs": [
        "Le service présente la carte natale et l'équilibre des cinq éléments en appliquant les règles de la divination traditionnelle coréenne (saju) sur la base de la date de naissance et de l'heure de naissance saisies.",
        "Les scores et interprétations fournis sont **des références selon la perspective de la divination traditionnelle et ne constituent pas des prévisions scientifiques ni des affirmations sur l'avenir, la santé ou les biens d'un individu.** Un score bas ne signifie pas que la journée sera mauvaise, et un score élevé ne garantit rien.",
        "**Les phrases d'interprétation des rapports payants sont rédigées par une IA générative.** Cependant, tous les chiffres tels que les scores, les troncs et la force des éléments sont calculés par le moteur de règles du service, et l'IA ne modifie ni ne crée ces valeurs. En cas d'incapacité à produire une interprétation, une description basée sur les valeurs calculées par le moteur sera insérée au même endroit, et le nombre de pages et les éléments inclus dans le document sont exactement ceux mentionnés au point 3 ci-dessous."
      ]
    },
    {
      "heading": "2. Frais d'utilisation",
      "paragraphs": [
        "L'interprétation du saju et la consultation de la fortune du jour sont gratuites et ne nécessitent pas d'inscription.",
        "Recevoir les résultats sous forme de rapport PDF est payant. Les prix et conditions sont affichés au point 3 ci-dessous et sur l'écran de paiement."
      ]
    },
    {
      "heading": "3. Produits payants et remboursements",
      "paragraphs": [
        "Le produit payant proposé est **un rapport PDF sur la vie et la fortune de cette année**. Il s'agit de créer un document à partir des résultats affichés à l'écran, avec des informations supplémentaires non visibles à l'écran.",
        "**9 pages A4** — couverture et résumé, tendances innées et points forts à surveiller, les huit caractères de la carte natale et la force des éléments, la force du tronc et l'énergie nécessaire actuellement (yangshin), les dix dieux des quatre piliers et les positions marquantes dans ce saju, les quatre domaines de la vie vus dans la carte natale (richesse, amour, carrière, santé) et leurs justifications, les détails de correction de l'heure de naissance, ainsi que la fortune de cette année. Paiement national {priceDomestic} (TVA incluse), paiement international {priceGlobal}.",
        "**La fortune du jour n'est pas incluse dans ce document.** Étant une valeur qui change chaque jour, elle est fournie gratuitement à l'écran, tandis que ce document est constitué d'une interprétation de la carte natale qui ne change jamais et de la fortune de cette année.",
        "Pour les paiements nationaux, vous pouvez utiliser des cartes de crédit, de débit et des paiements simplifiés (Toss Payments, KakaoPay, NaverPay, Payco, etc.) via Toss Payments, et pour les paiements internationaux, via PayPal à travers PortOne. Le montant final est celui affiché sur l'écran de paiement.",
        "**Le service ne conserve ni les valeurs saisies par l'utilisateur ni le fichier PDF généré.** Une fois le paiement approuvé, le document est créé et téléchargé immédiatement, sans rien laisser sur le serveur. Par conséquent, le fichier téléchargé doit être conservé par l'utilisateur.",
        "En cas d'interruption du téléchargement ou de perte du fichier, il est possible de le télécharger à nouveau **jusqu'à 5 fois** avec la même commande. Cependant, si les valeurs saisies disparaissent en dehors de l'écran de résultats, il ne sera pas possible de les recréer, donc veuillez sauvegarder le fichier immédiatement après le paiement."
      ],
      "bullets": [
        "**Avant le début du téléchargement après le paiement, vous pouvez** annuler à tout moment et obtenir un remboursement intégral.",
        "**Après la fin du téléchargement,** le droit de rétractation pour simple changement d'avis est limité. Il s'agit de contenu numérique fourni immédiatement, rendant la restitution impossible, ce qui correspond aux motifs de limitation de rétractation définis à l'article 17, paragraphe 2 de la loi sur la protection des consommateurs dans le commerce électronique.",
        "**En cas d'erreur système empêchant la création du document, si le fichier ne s'ouvre pas ou si le montant payé diffère de la commande,** un nouvel envoi ou un remboursement intégral sera effectué.",
        "**Les plaintes concernant le contenu des résultats** ne constituent pas un motif de remboursement. L'interprétation du saju est une référence selon la perspective de la divination traditionnelle, et sa nature est expliquée avant le paiement (voir point 1 ci-dessus).",
        "Les demandes de réémission après avoir utilisé les 5 réémissions sont considérées comme non remboursables.",
        "**Si un mineur effectue un paiement sans le consentement de son représentant légal,** celui-ci ou le mineur peut annuler ce paiement. Veuillez nous en informer via les coordonnées ci-dessous pour obtenir un remboursement."
      ]
    },
    {
      "heading": "4. Concernant les résultats des calculs",
      "paragraphs": [
        "Tous les scores sont calculés selon des règles publiques, donc si les mêmes valeurs sont saisies, le même résultat sera toujours obtenu.",
        "Si l'heure de naissance n'est pas saisie, le calcul est effectué sans le pilier horaire (시주), ce qui peut entraîner des résultats différents. Plus le lieu de naissance est choisi avec précision, plus le calcul du pilier horaire sera exact.",
        "Le calcul du calendrier des naissances utilise une bibliothèque de calculs publique, et les résultats peuvent varier en fonction du traitement des saisons et des fuseaux horaires."
      ]
    },
    {
      "heading": "5. Responsabilité de l'utilisateur",
      "paragraphs": [
        "L'utilisateur peut saisir la date de naissance d'autrui, mais ne doit pas utiliser les résultats de manière préjudiciable pour autrui.",
        "Ne pas utiliser les résultats du service comme base pour des décisions influençant les droits d'autrui, telles que le mariage, le divorce, l'embauche ou les transactions. Le service n'est pas conçu à de telles fins."
      ]
    },
    {
      "heading": "6. Comportements interdits",
      "paragraphs": [
        "Les comportements suivants ne sont pas autorisés."
      ],
      "bullets": [
        "Envoyer des demandes excessives à l'aide d'outils automatisés, perturbant le fonctionnement du service",
        "Présenter les résultats du service comme des faits ou des résultats d'experts",
        "Dupliquer ou modifier le service pour fournir un service identique"
      ]
    },
    {
      "heading": "7. Exonération de responsabilité",
      "paragraphs": [
        "Le service ne fournit que des références et ne saurait être tenu responsable des jugements et des résultats basés sur ces résultats par l'utilisateur.",
        "En cas d'interruption du service pour des raisons indépendantes de notre volonté, telles que des catastrophes naturelles ou des pannes d'infrastructure, nous ne serons pas responsables des dommages en résultant."
      ]
    },
    {
      "heading": "8. Droits de propriété intellectuelle",
      "paragraphs": [
        "Les droits sur l'interface du service, les phrases et les implémentations des règles de calcul appartiennent à l'opérateur. L'utilisateur peut sauvegarder ou partager les résultats à des fins personnelles."
      ]
    },
    {
      "heading": "9. Modifications des conditions et loi applicable",
      "paragraphs": [
        "En cas de modification des conditions, celles-ci seront publiées sur cette page avec la date d'entrée en vigueur.",
        "Ces conditions sont régies par le droit coréen, et tout litige lié à l'utilisation du service sera traité conformément aux procédures définies par la législation applicable."
      ]
    }
  ],
  "effectiveLabel": "Date d'entrée en vigueur"
};

const d7 = {
  "title": "Politique de traitement des données personnelles",
  "intro": "Saju-Link ne conserve pas les informations nécessaires à l'interprétation du saju (사주). Cette politique décrit ce que le service reçoit, ce qu'il ne conserve pas et ce qui est automatiquement enregistré.",
  "sections": [
    {
      "heading": "1. Informations non conservées",
      "paragraphs": [
        "Les informations saisies pour l'interprétation du saju, telles que la date de naissance, l'heure de naissance, le lieu de naissance, le sexe et le nom utilisé, ne sont **pas conservées nulle part.** Elles sont uniquement utilisées en mémoire serveur pendant le traitement de la demande et disparaissent avec la réponse.",
        "Aucune donnée n'est enregistrée dans la base de données et aucun fichier séparé n'est conservé. Étant donné qu'il n'y a pas d'inscription, les valeurs saisies ne sont pas liées à une personne spécifique."
      ]
    },
    {
      "heading": "2. Informations contenues dans le lien de résultat",
      "paragraphs": [
        "L'adresse de l'écran de résultat contient les valeurs saisies sous forme codée. Cependant, cette valeur se trouve après le # dans l'adresse, et selon les normes web, le contenu après le # n'est pas envoyé par le navigateur au serveur. Par conséquent, même si le lien de résultat est ouvert, seul le chemin de l'adresse reste dans les enregistrements de connexion du serveur.",
        "Si le lien de résultat est envoyé à une autre personne, cette personne peut également voir le même résultat. Le lien lui-même contient les valeurs saisies, donc la décision de partager ou non appartient à l'utilisateur."
      ]
    },
    {
      "heading": "3. Informations collectées automatiquement",
      "paragraphs": [
        "Il n'y a pas d'informations collectées par le service pour identifier l'utilisateur. Cependant, un minimum d'enregistrements nécessaires au fonctionnement du service web est automatiquement conservé par le fournisseur d'infrastructure."
      ],
      "bullets": [
        "Adresse IP de connexion, date et heure de connexion, type de navigateur, etc., enregistrements de connexion serveur généraux",
        "Informations sur le pays — utilisées uniquement pour déterminer automatiquement la langue de l'écran et ne sont pas conservées"
      ]
    },
    {
      "heading": "4. Cookies et publicité",
      "paragraphs": [
        "Le service lui-même n'utilise pas de cookies pour identifier ou suivre les utilisateurs. Les informations saisies pour l'interprétation du saju ne sont pas transmises aux annonceurs.",
        "Ce service affiche des publicités via Google AdSense. Dans ce processus, les événements suivants se produisent."
      ],
      "bullets": [
        "Des fournisseurs tiers, y compris Google, peuvent stocker ou lire des cookies dans le navigateur de l'utilisateur.",
        "Google utilise des cookies pour afficher des publicités basées sur l'historique de visites de ce site et d'autres sites.",
        "L'utilisateur peut désactiver les publicités personnalisées dans les paramètres publicitaires de Google (google.com/settings/ads). Même si désactivées, les publicités continueront d'apparaître, mais leur pertinence pour l'utilisateur sera réduite.",
        "Les publicités personnalisées de tous les fournisseurs tiers peuvent être désactivées en une seule fois sur aboutads.info/choices.",
        "Il est également possible de bloquer les cookies dans les paramètres du navigateur.",
        "Les utilisateurs de l'Espace économique européen, du Royaume-Uni et de la Suisse doivent d'abord donner leur consentement à l'utilisation des cookies publicitaires."
      ]
    },
    {
      "heading": "5. Informations conservées lors du paiement",
      "paragraphs": [
        "Lorsqu'un produit payant (rapport PDF) est acheté, les informations de commande sont conservées pour le traitement du paiement et la conservation des enregistrements de transactions conformément à la législation.",
        "**Les valeurs saisies pour l'interprétation du saju et le PDF généré ne sont pas conservés même après le paiement.** Le principe énoncé au point 1 reste inchangé, indépendamment du paiement. Les éléments conservés sont les suivants, et aucune information permettant d'identifier l'utilisateur, comme le nom, les coordonnées ou l'adresse, n'est incluse."
      ],
      "bullets": [
        "Numéro de commande et identifiant de paiement",
        "Montant du paiement, devise et état du paiement (non payé, payé, annulé)",
        "Type de produit, état de traitement, nombre de téléchargements du document, date et heure de la commande",
        "Langue de l'écran au moment de la commande et distinction de la région de paiement (domestique ou international)",
        "Durée de conservation — Conformément à l'article 6 de la loi sur la protection des consommateurs dans le commerce électronique, les enregistrements relatifs au paiement et à la fourniture de biens sont conservés pendant 5 ans, et les enregistrements relatifs aux plaintes ou aux litiges des consommateurs sont conservés pendant 3 ans avant d'être détruits."
      ]
    },
    {
      "heading": "6. Fourniture à des tiers et sous-traitance",
      "paragraphs": [
        "Étant donné qu'aucune donnée personnelle permettant d'identifier l'utilisateur n'est conservée, il n'y a pas de données personnelles fournies à des tiers. Le traitement des paiements est sous-traité aux entreprises suivantes.",
        "Le service utilise l'infrastructure d'hébergement de {hostingProvider}, et dans ce processus, les enregistrements de connexion mentionnés au point 3 sont traités conformément à la politique de cette entreprise.",
        "Les paiements domestiques sont traités par Toss Payments, tandis que les paiements internationaux sont traités par PayPal via PortOne. Les informations sur les moyens de paiement, telles que les numéros de carte et de compte, sont directement traitées par ces entreprises, et le service ne les reçoit ni ne les conserve."
      ]
    },
    {
      "heading": "7. Droits de l'utilisateur",
      "paragraphs": [
        "Les valeurs saisies pour l'interprétation du saju ne sont pas conservées, donc il n'y a pas de demande d'accès, de correction ou de suppression à adresser. Les enregistrements de commande restants après paiement doivent être conservés pendant la période définie par la loi, et ils ne peuvent pas être supprimés pendant cette période, mais seront détruits une fois celle-ci écoulée.",
        "L'utilisateur peut supprimer toutes les traces de saisie simplement en effaçant le lien de résultat dans la barre d'adresse du navigateur.",
        "Pour toute question concernant l'utilisation du service, veuillez nous contacter aux coordonnées ci-dessous."
      ]
    },
    {
      "heading": "8. Données personnelles des enfants",
      "paragraphs": [
        "Ce service n'est pas destiné aux enfants de moins de 14 ans et ne collecte pas de données personnelles auprès des enfants."
      ]
    },
    {
      "heading": "9. Responsable de la protection des données personnelles",
      "paragraphs": [
        "Responsable de la protection : {privacyOfficer}",
        "Contact : {email} / {customerCenter}"
      ]
    },
    {
      "heading": "10. Modifications de la politique",
      "paragraphs": [
        "En cas de modification de cette politique, la date d'entrée en vigueur et les modifications seront publiées sur cette page. Si le contenu du traitement change réellement, par exemple avec le début de la diffusion de publicités ou de la vente de produits payants, nous informerons d'abord de la modification."
      ]
    }
  ],
  "effectiveLabel": "Date d'entrée en vigueur"
};

export const fr: LegalLocaleDocuments = {
  a0p0: {
    privacy: d0,
    terms: d1,
    refund: d2,
    pricing: d3,
  },
  a1p0: {
    privacy: d4,
    terms: d1,
    refund: d2,
    pricing: d3,
  },
  a0p1: {
    privacy: d5,
    terms: d6,
    refund: d2,
    pricing: d3,
  },
  a1p1: {
    privacy: d7,
    terms: d6,
    refund: d2,
    pricing: d3,
  },
};
