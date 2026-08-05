import type { LegalLocaleDocuments } from "@/lib/legal-locales/types";

// ko 원본에서 자동 생성된 번역이다(scripts/translate-legal.mjs). 손으로 고쳐도 되지만,
// 다시 생성하면 덮어쓴다 — 문구를 바꿀 일이 있으면 ko를 먼저 고치고 전체를 다시 만들 것.
// 사업자 정보와 가격은 플레이스홀더로 남아 있고 실제 값은 getLegalDocument가 넣는다.

const d0 = {
  "title": "Politique de traitement des données personnelles",
  "intro": "Saju-Link ne conserve pas les informations nécessaires à l'interprétation du saju (사주). Cette politique décrit ce que le service reçoit, ce qu'il ne conserve pas et ce qui est enregistré automatiquement.",
  "sections": [
    {
      "heading": "1. Informations non conservées",
      "paragraphs": [
        "Les informations saisies pour l'interprétation du saju, telles que la date de naissance, l'heure de naissance, le lieu de naissance, le sexe et le nom utilisé, ne sont **pas conservées nulle part.** Elles sont uniquement utilisées en mémoire du serveur pendant le traitement de la demande et disparaissent avec la réponse.",
        "Elles ne sont pas enregistrées dans une base de données et ne sont pas conservées dans un fichier séparé. Comme il n'y a pas d'inscription, les valeurs saisies ne sont pas liées à une personne spécifique."
      ]
    },
    {
      "heading": "2. Informations contenues dans le lien de résultat",
      "paragraphs": [
        "L'adresse de l'écran de résultats contient les valeurs saisies sous forme codée. Cependant, cette valeur se trouve après le # dans l'adresse, et selon les normes web, le contenu après le # n'est pas envoyé par le navigateur au serveur. Par conséquent, même si le lien de résultat est ouvert, seul le chemin de l'adresse reste dans les enregistrements d'accès du serveur.",
        "Si le lien de résultat est envoyé à une autre personne, cette personne peut également voir le même résultat. Le lien lui-même contient les valeurs saisies, donc la décision de partager ou non appartient à l'utilisateur."
      ]
    },
    {
      "heading": "3. Informations collectées automatiquement",
      "paragraphs": [
        "Il n'y a pas d'informations collectées par le service pour identifier l'utilisateur. Cependant, un minimum d'enregistrements nécessaires au fonctionnement du service web est automatiquement conservé par le fournisseur d'infrastructure."
      ],
      "bullets": [
        "Adresse IP d'accès, date et heure d'accès, type de navigateur, etc. — enregistrements d'accès au serveur généraux",
        "Informations sur le pays — utilisées uniquement pour déterminer automatiquement la langue de l'écran et non conservées"
      ]
    },
    {
      "heading": "4. Cookies et publicités",
      "paragraphs": [
        "Le service lui-même n'utilise pas de cookies pour suivre les utilisateurs.",
        "Actuellement, il n'y a pas de publicités affichées dans ce service. Si des publicités sont affichées à l'avenir, le fournisseur de publicité (par exemple, Google) peut utiliser des cookies pour afficher des publicités. Dans ce cas, cette clause sera d'abord modifiée pour indiquer ce qui change avant de commencer."
      ]
    },
    {
      "heading": "5. Informations conservées lors du paiement",
      "paragraphs": [
        "Actuellement, aucun produit payant n'est vendu, donc il n'y a pas d'informations conservées liées au paiement.",
        "Lorsque la vente commencera, les éléments suivants seront conservés pour le traitement des paiements et la conservation des enregistrements de transactions conformément à la législation : **même à ce moment-là, les valeurs saisies pour l'interprétation du saju et le PDF généré ne seront pas conservés**, et aucune information permettant d'identifier l'utilisateur, comme le nom, les coordonnées ou l'adresse, ne sera collectée."
      ],
      "bullets": [
        "Numéro de commande et identifiant de paiement",
        "Montant du paiement, devise et état du paiement (non payé, payé, annulé)",
        "Type de produit, état de traitement, nombre de téléchargements de documents, date de commande",
        "Langue de l'écran au moment de la commande et distinction de la région de paiement (domestique, international)",
        "Durée de conservation — Selon l'article 6 de la loi sur la protection des consommateurs dans le commerce électronique, les enregistrements relatifs au paiement et à la fourniture de biens seront conservés pendant 5 ans, et les enregistrements concernant les plaintes ou les litiges des consommateurs seront conservés pendant 3 ans avant d'être détruits."
      ]
    },
    {
      "heading": "6. Fourniture à des tiers et sous-traitance",
      "paragraphs": [
        "Il n'y a pas de données personnelles conservées, donc il n'y a pas de données personnelles fournies à des tiers.",
        "Pour l'exploitation du service, l'infrastructure d'hébergement de {hostingProvider} est utilisée, et dans ce processus, les enregistrements d'accès mentionnés au point 3 sont traités conformément à la politique de ce fournisseur.",
        "Lorsque la vente de produits payants commencera, les paiements nationaux seront confiés à Toss Payments, et les paiements internationaux à PortOne (PayPal). Les informations sur les moyens de paiement, telles que les numéros de carte et les numéros de compte, seront également traitées directement par ces entreprises, et le service ne les recevra pas."
      ]
    },
    {
      "heading": "7. Droits de l'utilisateur",
      "paragraphs": [
        "Il n'y a pas de données personnelles conservées, donc il n'y a pas de demande d'accès, de correction ou de suppression à adresser.",
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
        "En cas de modification de cette politique, la date d'entrée en vigueur et les modifications seront publiées sur cette page. Si le contenu du traitement change réellement, comme l'affichage de publicités ou le début de la vente de produits payants, nous informerons d'abord de la modification."
      ]
    }
  ],
  "effectiveLabel": "Date d'entrée en vigueur"
};

const d1 = {
  "title": "Conditions d'utilisation",
  "intro": "Ces conditions définissent les modalités d'utilisation du service Saju-Link (ci-après dénommé « Service »). En utilisant le service, vous acceptez ces conditions.",
  "sections": [
    {
      "heading": "1. Nature du service",
      "paragraphs": [
        "Le service présente le natal chart (saju) et l'équilibre des cinq éléments en appliquant les règles de la divination traditionnelle (saju) sur la base de la date de naissance et de l'heure de naissance saisies.",
        "Les scores et les interprétations fournis sont des **références selon la perspective de la divination traditionnelle et ne constituent pas des prévisions scientifiques ou des affirmations sur l'avenir, la santé ou les biens d'un individu.** Un score bas ne signifie pas que la journée est mauvaise, et un score élevé ne garantit rien non plus.",
        "**Les phrases d'interprétation des rapports payants sont rédigées par une IA générative.** Cependant, tous les chiffres tels que les scores, les troncs célestes et les forces des éléments sont calculés par le moteur de règles du service, et l'IA ne modifie ni ne crée ces valeurs. Si aucune interprétation n'est produite, une description basée sur les valeurs calculées par le moteur sera utilisée à la place, et le nombre de pages et les éléments inclus dans le document sont exactement ceux mentionnés au point 3 ci-dessous."
      ]
    },
    {
      "heading": "2. Frais d'utilisation",
      "paragraphs": [
        "Le service est actuellement entièrement gratuit et ne nécessite pas d'inscription.",
        "Lorsque la vente de produits payants (deux rapports PDF) commencera, les conditions du point 3 ci-dessous s'appliqueront. Ces conditions seront à nouveau communiquées avant le début de la vente."
      ]
    },
    {
      "heading": "3. Produits payants et remboursements",
      "paragraphs": [
        "Les produits payants proposés sont **deux rapports PDF**. Les deux transforment les résultats affichés à l'écran en documents, et contiennent des informations qui ne sont pas affichées à l'écran.",
        "**Rapport de lecture de vie Saju PDF (A4 5 pages)** — Comprend les tendances innées, les forces et les points à surveiller, les huit caractères du natal chart, les forces des éléments et la force du tronc céleste, l'énergie nécessaire actuellement, l'horoscope du jour et les quatre domaines de la vie (richesse, amour, carrière, santé). Paiement national {priceDomestic} (TVA incluse), paiement international {priceGlobal}.",
        "**Rapport de lecture de vie premium PDF (A4 7 pages)** — Ajoute deux pages aux cinq pages du rapport de lecture de vie. Comprend les dix dieux des quatre piliers et la méthode Wangshangxiushusa (comment les énergies saisonnières sont placées), l'horoscope de l'année, les ajustements des scores du jour par catégorie, et les détails de correction pour le temps de Jin Tai Yang. Paiement national {priceAffinityDomestic} (TVA incluse), paiement international {priceAffinityGlobal}.",
        "Les paiements nationaux peuvent être effectués via Toss Payments en utilisant des cartes de crédit, des cartes de débit et des paiements simplifiés (Toss Pay, Kakao Pay, Naver Pay, Payco, etc.), et les paiements internationaux se font via PayPal à travers PortOne. Le montant final est celui affiché sur l'écran de paiement.",
        "**Le service ne conserve ni les valeurs saisies par l'utilisateur ni les fichiers PDF générés.** Une fois le paiement approuvé, le document est généré et téléchargé immédiatement, sans rien laisser sur le serveur. Par conséquent, le fichier téléchargé doit être conservé par l'utilisateur lui-même.",
        "En cas d'interruption du téléchargement ou de perte du fichier, il est possible de le télécharger à nouveau **jusqu'à 5 fois** avec la même commande. Cependant, si les valeurs saisies disparaissent en dehors de l'écran de résultats, il ne sera pas possible de les recréer, donc veuillez enregistrer le fichier immédiatement après le paiement."
      ],
      "bullets": [
        "**Avant le début du téléchargement après le paiement, vous pouvez** annuler à tout moment et obtenir un remboursement intégral.",
        "**Après la fin du téléchargement,** le droit de rétractation pour simple changement d'avis est limité. Il s'agit de contenu numérique fourni immédiatement, ce qui rend impossible le retour à l'état initial, et cela correspond aux motifs de restriction de rétractation définis à l'article 17, paragraphe 2 de la loi sur la protection des consommateurs dans le commerce électronique.",
        "**En cas d'erreur système empêchant la création du document, si le fichier ne s'ouvre pas ou si le montant payé diffère de la commande,** un nouvel envoi ou un remboursement intégral sera effectué.",
        "**Les plaintes concernant le contenu des résultats** ne constituent pas un motif de remboursement. L'interprétation du saju est une référence selon la perspective de la divination traditionnelle, et sa nature est expliquée avant le paiement (voir point 1 ci-dessus).",
        "Les demandes de réémission après avoir utilisé les 5 réémissions sont considérées comme non valables pour un remboursement.",
        "**Si un mineur effectue un paiement sans le consentement de son représentant légal,** celui-ci ou le mineur peut annuler ce paiement. Veuillez nous en informer via les coordonnées ci-dessous pour obtenir un remboursement."
      ]
    },
    {
      "heading": "4. Concernant les résultats des calculs",
      "paragraphs": [
        "Tous les scores sont calculés selon des règles publiques, donc si les mêmes valeurs sont saisies, le même résultat sera toujours obtenu.",
        "Si l'heure de naissance n'est pas saisie, le calcul sera effectué sans le pilier horaire (시주), ce qui peut entraîner des résultats différents. Plus le lieu de naissance est choisi avec précision, plus le calcul du pilier horaire sera exact.",
        "Le calcul du calendrier de vie utilise une bibliothèque de calcul publique, et les résultats peuvent varier en fonction de la manière dont les saisons et les fuseaux horaires sont traités."
      ]
    },
    {
      "heading": "5. Responsabilité de l'utilisateur",
      "paragraphs": [
        "L'utilisateur peut saisir la date de naissance d'autrui, mais ne doit pas utiliser les résultats de manière à nuire à autrui.",
        "Ne pas utiliser les résultats du service comme base pour des décisions influençant les droits d'autrui, telles que le mariage, le divorce, l'embauche ou les transactions. Le service n'est pas conçu à de telles fins."
      ]
    },
    {
      "heading": "6. Comportements interdits",
      "paragraphs": [
        "Les actions suivantes ne sont pas autorisées."
      ],
      "bullets": [
        "Envoyer des demandes excessives à l'aide d'outils automatisés pour perturber le fonctionnement du service",
        "Présenter les résultats du service comme des faits ou des résultats d'expertise",
        "Dupliquer ou modifier le service pour offrir un service identique"
      ]
    },
    {
      "heading": "7. Exonération de responsabilité",
      "paragraphs": [
        "Le service ne fournit que des références et ne saurait être tenu responsable des jugements et des résultats basés sur ces résultats par l'utilisateur.",
        "En cas d'interruption du service pour des raisons indépendantes de notre volonté, telles que des catastrophes naturelles ou des défaillances des fournisseurs d'infrastructure, nous ne serons pas responsables des dommages en résultant."
      ]
    },
    {
      "heading": "8. Droits de propriété intellectuelle",
      "paragraphs": [
        "Les droits sur l'interface du service, les phrases et les implémentations des règles de calcul appartiennent à l'opérateur. L'utilisateur peut enregistrer ou partager les résultats à des fins personnelles."
      ]
    },
    {
      "heading": "9. Modifications des conditions et loi applicable",
      "paragraphs": [
        "En cas de modification des conditions, celles-ci seront publiées sur cette page avec la date d'entrée en vigueur.",
        "Ces conditions sont régies par la loi de la République de Corée, et les litiges liés à l'utilisation du service seront traités conformément aux procédures définies par les lois pertinentes."
      ]
    }
  ],
  "effectiveLabel": "Date d'entrée en vigueur"
};

const d2 = {
  "title": "Politique de remboursement et d'annulation",
  "intro": "Voici les critères d'annulation et de remboursement pour le rapport de lecture de saju (사주) au format PDF. Nous avons rassemblé des informations similaires à l'article 3 des conditions générales.",
  "sections": [
    {
      "heading": "1. Nature des produits",
      "paragraphs": [
        "Les produits vendus sont le **rapport de lecture de saju (사주) PDF (A4 5 pages)** et le **rapport de lecture premium de saju (사주) PDF (A4 7 pages)**, qui sont tous deux des contenus numériques créés et envoyés immédiatement après l'approbation du paiement.",
        "**Le service ne conserve ni les données saisies par l'utilisateur ni le fichier PDF créé.** Par conséquent, le fichier téléchargé doit être conservé par l'utilisateur."
      ],
      "bullets": []
    },
    {
      "heading": "2. Droit de rétractation",
      "paragraphs": [
        "Cela suit les critères établis par la loi sur le commerce électronique."
      ],
      "bullets": [
        "**Avant le début du téléchargement,** il est possible d'annuler à tout moment et de recevoir un remboursement intégral.",
        "**Après la fin du téléchargement,** le droit de rétractation pour simple changement d'avis est limité. Il s'agit d'un contenu numérique fourni immédiatement après le paiement, ce qui le rend non récupérable, conformément à l'article 17, paragraphe 2 de la loi sur la protection des consommateurs dans le commerce électronique. Cette information est préalablement communiquée et un consentement est obtenu à l'écran de paiement."
      ]
    },
    {
      "heading": "3. Cas de remboursement intégral",
      "paragraphs": [
        "Dans les cas suivants, un remboursement intégral ou une réémission sera traité après vérification des raisons."
      ],
      "bullets": [
        "En cas d'erreur système empêchant la création du document",
        "Si le fichier téléchargé ne s'ouvre pas",
        "Si le montant payé est différent de la commande",
        "**Si un mineur a effectué un paiement sans le consentement de son représentant légal** — La personne concernée ou son représentant légal peut demander l'annulation."
      ]
    },
    {
      "heading": "4. Cas non remboursables",
      "paragraphs": [],
      "bullets": [
        "**Insatisfaction concernant le contenu des résultats.** L'interprétation du saju (사주) est un document de référence selon la perspective traditionnelle de la divination, et sa nature est expliquée avant le paiement.",
        "Demande de réémission après avoir utilisé les 5 réémissions autorisées."
      ]
    },
    {
      "heading": "5. Méthode de soumission",
      "paragraphs": [
        "Les demandes de remboursement ou d'informations doivent être soumises au service client ({customerCenter}) ou par e-mail ({email}). Fournir le numéro de commande facilitera la vérification.",
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
        "**L'interprétation de saju (사주) et la consultation de la fortune du jour sont gratuites.** Aucune inscription n'est nécessaire.",
        "Vous pouvez voir à l'écran les huit caractères de votre natal chart, la force des cinq éléments, la force et la faiblesse du jour, l'évaluation et la classification de votre fortune du jour, ainsi que les scores des quatre domaines de la vie."
      ]
    },
    {
      "heading": "2. Rapport de lecture de vie saju PDF (payant)",
      "paragraphs": [
        "Paiement national {priceDomestic} (TVA incluse) · Paiement international {priceGlobal}",
        "Nous vous fournirons les résultats à l'écran sous forme de document PDF de **5 pages A4**. Cela inclut la couverture, le résumé, les tendances innées et les points forts à surveiller, la natal chart et la force des cinq éléments, la fortune du jour, et les quatre domaines de la vie dans un seul document.",
        "Vous pouvez le télécharger à nouveau **jusqu'à 5 fois** avec la même commande. Cependant, si les valeurs d'entrée disparaissent en dehors de l'écran des résultats, vous ne pourrez pas le recréer, donc veuillez enregistrer le fichier immédiatement après le paiement."
      ]
    },
    {
      "heading": "3. Rapport de lecture de vie premium PDF (payant)",
      "paragraphs": [
        "Paiement national {priceAffinityDomestic} (TVA incluse) · Paiement international {priceAffinityGlobal}",
        "C'est un document de **7 pages A4** avec **deux pages supplémentaires**. Les ajouts comprennent les dix dieux des quatre piliers et les détails de correction de l'année de fortune et des scores du jour, qui ne sont pas affichés à l'écran.",
        "Les conditions de réémission sont les mêmes que pour le rapport de lecture de vie."
      ]
    },
    {
      "heading": "4. Méthodes de paiement",
      "paragraphs": [
        "**National** — Vous pouvez utiliser des cartes de crédit et de débit ainsi que des paiements simplifiés (Toss Pay, Kakao Pay, Naver Pay, Payco, etc.) via Toss Payments.",
        "**International** — Vous pouvez payer via PayPal par l'intermédiaire de PortOne.",
        "Le montant final du paiement est celui affiché à l'écran de paiement."
      ]
    },
    {
      "heading": "5. Changement de prix",
      "paragraphs": [
        "En cas de changement de prix, nous l'annoncerons d'abord sur cette page. Les commandes déjà réglées ne seront pas affectées par le prix modifié."
      ]
    }
  ],
  "effectiveLabel": "Date d'entrée en vigueur"
};

const d4 = {
  "title": "Politique de traitement des données personnelles",
  "intro": "Saju-Link ne conserve pas d'informations nécessaires à l'interprétation du saju (사주). Cette politique décrit ce que le service reçoit, ce qui n'est pas conservé et ce qui est enregistré automatiquement.",
  "sections": [
    {
      "heading": "1. Informations non conservées",
      "paragraphs": [
        "Les informations saisies pour l'interprétation du saju, telles que la date de naissance, l'heure de naissance, le lieu de naissance, le sexe et le nom utilisé, ne sont **pas conservées nulle part.** Elles sont utilisées uniquement dans la mémoire du serveur pendant le traitement de la demande et disparaissent avec la réponse.",
        "Aucune donnée n'est enregistrée dans la base de données, et il n'y a pas de fichiers séparés. Comme il n'y a pas d'inscription, les valeurs saisies ne sont pas liées à une personne spécifique."
      ]
    },
    {
      "heading": "2. Informations contenues dans le lien de résultat",
      "paragraphs": [
        "L'adresse de l'écran de résultats contient les valeurs saisies sous forme codée. Cependant, cette valeur se trouve après le # dans l'adresse, et selon les normes web, le contenu après le # n'est pas envoyé par le navigateur au serveur. Par conséquent, même si le lien de résultat est ouvert, seul le chemin de l'adresse reste dans les enregistrements de connexion du serveur.",
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
      "heading": "4. Cookies et publicités",
      "paragraphs": [
        "Le service lui-même n'utilise pas de cookies pour identifier ou suivre les utilisateurs. Les informations saisies pour l'interprétation du saju ne sont pas transmises aux annonceurs.",
        "Ce service diffuse des publicités via Google AdSense. Dans ce processus, les événements suivants se produisent."
      ],
      "bullets": [
        "Des fournisseurs tiers, y compris Google, peuvent stocker ou lire des cookies dans le navigateur de l'utilisateur.",
        "Google utilise des cookies pour diffuser des publicités basées sur l'historique de visites de ce site et d'autres sites.",
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
        "Lorsque la vente commence, les éléments suivants seront conservés pour le traitement des paiements et la conservation des enregistrements de transactions conformément à la législation : **même à ce moment-là, les valeurs saisies pour l'interprétation du saju et le PDF généré ne seront pas conservés**, et aucune information permettant d'identifier l'utilisateur, comme le nom, les coordonnées ou l'adresse, ne sera collectée."
      ],
      "bullets": [
        "Numéro de commande et identifiant de paiement",
        "Montant du paiement, devise et état du paiement (non payé, payé, annulé)",
        "Classification du produit, état de traitement, nombre de téléchargements de documents, date et heure de commande",
        "Langue de l'écran au moment de la commande et classification de la région de paiement (domestique, international)",
        "Durée de conservation — Selon l'article 6 de la loi sur la protection des consommateurs dans le commerce électronique, les enregistrements relatifs au paiement et à la fourniture de biens seront conservés pendant 5 ans, et les enregistrements relatifs aux plaintes ou aux litiges des consommateurs seront conservés pendant 3 ans avant d'être détruits."
      ]
    },
    {
      "heading": "6. Fourniture à des tiers et sous-traitance",
      "paragraphs": [
        "Il n'y a pas de données personnelles conservées, donc aucune donnée personnelle n'est fournie à des tiers.",
        "Pour l'exploitation du service, l'infrastructure d'hébergement de {hostingProvider} est utilisée, et dans ce processus, les enregistrements de connexion mentionnés au point 3 sont traités conformément à la politique de ce fournisseur.",
        "Lorsque la vente de produits payants commence, les paiements nationaux sont confiés à Toss Payments, et les paiements internationaux à PortOne (PayPal). Les informations sur les moyens de paiement, telles que les numéros de carte et de compte, sont également traitées directement par ces entreprises, et le service ne les reçoit pas."
      ]
    },
    {
      "heading": "7. Droits des utilisateurs",
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
      "heading": "10. Modifications de la politique",
      "paragraphs": [
        "En cas de modification de cette politique, la date d'entrée en vigueur et les modifications seront publiées sur cette page. Si le contenu du traitement change réellement, comme le début de la diffusion de publicités ou la vente de produits payants, nous informerons d'abord de la modification."
      ]
    }
  ],
  "effectiveLabel": "Date d'entrée en vigueur"
};

const d5 = {
  "title": "Politique de traitement des données personnelles",
  "intro": "Saju-Link ne conserve pas les informations nécessaires à l'interprétation du saju (사주). Cette politique décrit ce que le service reçoit, ce qu'il ne conserve pas, et ce qui est enregistré automatiquement.",
  "sections": [
    {
      "heading": "1. Informations non conservées",
      "paragraphs": [
        "Les informations saisies pour l'interprétation du saju, telles que la date de naissance, l'heure de naissance, le lieu de naissance, le sexe et le nom utilisé, ne sont **pas conservées nulle part.** Elles sont uniquement utilisées en mémoire du serveur pendant le traitement de la demande et disparaissent avec la réponse.",
        "Ces données ne sont pas enregistrées dans une base de données et ne sont pas conservées dans un fichier séparé. Comme il n'y a pas d'inscription, les valeurs saisies ne sont pas liées à une personne spécifique."
      ]
    },
    {
      "heading": "2. Informations contenues dans le lien des résultats",
      "paragraphs": [
        "L'adresse de l'écran des résultats contient les valeurs saisies sous forme codée. Cependant, cette valeur se trouve après le # dans l'adresse, et selon les normes web, le contenu après le # n'est pas envoyé par le navigateur au serveur. Par conséquent, même si le lien des résultats est ouvert, seul le chemin de l'adresse reste dans les enregistrements de connexion du serveur.",
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
        "Actuellement, il n'y a pas de publicités affichées dans ce service. Si des publicités sont affichées à l'avenir, le fournisseur de publicité (par exemple, Google) peut utiliser des cookies pour afficher des publicités. Dans ce cas, cette clause sera d'abord modifiée pour indiquer ce qui change avant de commencer."
      ]
    },
    {
      "heading": "5. Informations conservées lors du paiement",
      "paragraphs": [
        "Lors du paiement d'un produit payant (rapport PDF), les informations de commande sont conservées pour le traitement du paiement et la conservation des enregistrements de transactions conformément à la législation.",
        "**Les valeurs saisies pour l'interprétation du saju et le PDF généré ne sont pas conservés même après le paiement.** Le principe énoncé au point 1 reste inchangé, indépendamment du paiement. Les éléments conservés sont les suivants, et aucune information permettant d'identifier l'utilisateur, comme le nom, les coordonnées ou l'adresse, n'est incluse."
      ],
      "bullets": [
        "Numéro de commande et identifiant de paiement",
        "Montant du paiement, devise et état du paiement (non payé, payé, annulé)",
        "Type de produit, état de traitement, nombre de téléchargements du document, date de commande",
        "Langue de l'écran au moment de la commande et distinction de la région de paiement (domestique, international)",
        "Durée de conservation — Conformément à l'article 6 de la loi sur la protection des consommateurs dans le commerce électronique, les enregistrements relatifs au paiement et à la fourniture de biens sont conservés pendant 5 ans, et les enregistrements relatifs aux plaintes ou aux litiges des consommateurs sont conservés pendant 3 ans avant d'être détruits."
      ]
    },
    {
      "heading": "6. Fourniture à des tiers et sous-traitance",
      "paragraphs": [
        "Comme aucune donnée personnelle permettant d'identifier l'utilisateur n'est conservée, il n'y a pas de données personnelles fournies à des tiers. Le traitement des paiements est sous-traité aux entreprises suivantes.",
        "Le service utilise l'infrastructure d'hébergement de {hostingProvider}, et dans ce processus, les enregistrements de connexion mentionnés au point 3 sont traités conformément à la politique de cette entreprise.",
        "Les paiements domestiques sont traités par Toss Payments, tandis que les paiements internationaux sont traités par PayPal via PortOne. Les informations sur les moyens de paiement, telles que les numéros de carte et de compte, sont directement traitées par ces entreprises, et le service ne les reçoit ni ne les conserve."
      ]
    },
    {
      "heading": "7. Droits des utilisateurs",
      "paragraphs": [
        "Les valeurs saisies pour l'interprétation du saju ne sont pas conservées, donc il n'y a pas de demande d'accès, de correction ou de suppression à adresser. Les enregistrements de commande restants après paiement doivent être conservés pendant la période définie par la loi, et ne peuvent donc pas être supprimés pendant cette période, mais seront détruits après cette période.",
        "L'utilisateur peut effacer toutes les traces de saisie simplement en supprimant le lien des résultats dans la barre d'adresse du navigateur.",
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
        "Le service fournit une référence basée sur les règles de la divination traditionnelle coréenne (saju) en utilisant la date de naissance et l'heure de naissance saisies pour afficher le natal chart (원국) et la force des cinq éléments, la force du jour, ainsi que la position du jour et du natal chart.",
        "Les scores et les interprétations fournis sont **des références selon la perspective de la divination traditionnelle et ne constituent pas des prévisions scientifiques ou des affirmations sur l'avenir, la santé ou les biens d'un individu.** Un score bas ne signifie pas que la journée est mauvaise, et un score élevé ne garantit rien non plus.",
        "**Les phrases d'interprétation des rapports payants sont rédigées par une IA générative.** Cependant, tous les chiffres tels que les scores, les branches célestes et la force des cinq éléments sont calculés par le moteur de règles du service, et l'IA ne modifie ni ne crée ces valeurs. Si l'interprétation ne peut pas être générée, une description basée sur les valeurs calculées par le moteur sera utilisée à la place, et le nombre de pages et les éléments inclus dans le document sont exactement ceux mentionnés au point 3 ci-dessous."
      ]
    },
    {
      "heading": "2. Frais d'utilisation",
      "paragraphs": [
        "L'interprétation de saju et la consultation de la fortune du jour sont gratuites et ne nécessitent pas d'inscription.",
        "Recevoir les résultats sous forme de rapport PDF est payant. Les prix et conditions sont affichés au point 3 ci-dessous et sur l'écran de paiement."
      ]
    },
    {
      "heading": "3. Produits payants et remboursements",
      "paragraphs": [
        "Les produits payants proposés sont **deux types de rapports PDF.** Les deux transforment les résultats affichés à l'écran en documents, incluant des informations non présentes à l'écran.",
        "**Rapport de lecture de vie saju PDF (A4 5 pages)** — Comprend les tendances innées, les forces et les points à surveiller, les huit caractères du natal chart, la force des cinq éléments et la force du jour, l'énergie nécessaire actuellement, la fortune du jour et les quatre domaines de la vie (richesse, amour, carrière, santé). Paiement national {priceDomestic} (TVA incluse), paiement international {priceGlobal}.",
        "**Rapport premium de lecture de vie PDF (A4 7 pages)** — Ajoute deux pages aux cinq pages du rapport de lecture de vie. Comprend les dix déités des quatre piliers et la méthode de répartition saisonnière, la fortune de l'année, les ajustements des scores du jour par catégorie, et les détails de correction pour le temps de Jin Tai Yang. Paiement national {priceAffinityDomestic} (TVA incluse), paiement international {priceAffinityGlobal}.",
        "Les paiements nationaux peuvent être effectués via Toss Payments en utilisant des cartes de crédit, des cartes de débit et des paiements simplifiés (Toss Pay, Kakao Pay, Naver Pay, Payco, etc.), et les paiements internationaux se font via PayPal par PortOne. Le montant final est celui affiché sur l'écran de paiement.",
        "**Le service ne conserve ni les valeurs saisies par l'utilisateur ni les fichiers PDF générés.** Une fois le paiement approuvé, le document est généré et envoyé immédiatement, sans rien conserver sur le serveur. Par conséquent, le fichier téléchargé doit être conservé par l'utilisateur.",
        "En cas d'interruption du téléchargement ou de perte du fichier, il est possible de le télécharger à nouveau **jusqu'à 5 fois** avec la même commande. Cependant, si les valeurs saisies disparaissent en dehors de l'écran de résultats, il ne sera pas possible de les recréer, donc veuillez sauvegarder le fichier immédiatement après le paiement."
      ],
      "bullets": [
        "**Avant le début du téléchargement après le paiement, vous pouvez annuler à tout moment et obtenir un remboursement intégral.**",
        "**Après la fin du téléchargement, le droit de rétractation pour simple changement d'avis est limité.** Il s'agit de contenu numérique fourni immédiatement et qui ne peut pas être restitué, ce qui correspond aux motifs de limitation de rétractation définis à l'article 17, paragraphe 2 de la loi sur la protection des consommateurs dans le commerce électronique.",
        "**En cas d'erreur système empêchant la création du document, de fichier non ouvrable ou de montant de paiement différent de la commande,** un réémission ou un remboursement intégral sera effectué.",
        "**Les plaintes concernant le contenu des résultats** ne constituent pas un motif de remboursement. L'interprétation de saju est une référence selon la perspective de la divination traditionnelle, et sa nature est expliquée avant le paiement (voir point 1 ci-dessus).",
        "Les demandes de réémission après avoir utilisé les 5 réémissions ne constituent pas un motif de remboursement.",
        "**Si un mineur effectue un paiement sans le consentement de son représentant légal,** lui-même ou son représentant légal peut annuler ce paiement. Veuillez nous en informer via les coordonnées ci-dessous pour obtenir un remboursement."
      ]
    },
    {
      "heading": "4. Concernant les résultats de calcul",
      "paragraphs": [
        "Tous les scores sont calculés selon des règles publiques, donc si les mêmes valeurs sont saisies, les mêmes résultats seront toujours obtenus.",
        "Si l'heure de naissance n'est pas saisie, le calcul est effectué sans la branche temporelle (時柱), ce qui peut entraîner des résultats différents. Plus le lieu de naissance est choisi avec précision, plus le calcul de la branche temporelle sera exact.",
        "Le calcul du calendrier de vie utilise une bibliothèque de calcul publique, et les résultats peuvent varier en fonction de la manière dont les saisons et les fuseaux horaires sont traités."
      ]
    },
    {
      "heading": "5. Responsabilité de l'utilisateur",
      "paragraphs": [
        "L'utilisateur peut saisir la date de naissance d'autrui, mais ne doit pas utiliser les résultats de manière préjudiciable pour autrui.",
        "Ne pas utiliser les résultats du service comme base pour des décisions influençant les droits d'autrui, telles que le mariage, le divorce, l'embauche ou les transactions. Le service n'est pas conçu à cette fin."
      ]
    },
    {
      "heading": "6. Comportements interdits",
      "paragraphs": [
        "Les comportements suivants ne sont pas autorisés."
      ],
      "bullets": [
        "Envoyer des demandes excessives à l'aide d'outils automatisés pour perturber le fonctionnement du service",
        "Présenter les résultats du service comme des faits ou des résultats d'expertise",
        "Dupliquer ou modifier le service pour fournir un service identique"
      ]
    },
    {
      "heading": "7. Exonération de responsabilité",
      "paragraphs": [
        "Le service ne fournit que des références et ne saurait être tenu responsable des décisions prises par l'utilisateur sur la base des résultats et de leurs conséquences.",
        "En cas d'interruption du service pour des raisons indépendantes de notre volonté, telles que des catastrophes naturelles ou des pannes des fournisseurs d'infrastructure, nous ne serons pas responsables des dommages en résultant."
      ]
    },
    {
      "heading": "8. Droits de propriété intellectuelle",
      "paragraphs": [
        "Les droits sur l'interface du service, les phrases et les implémentations des règles de calcul appartiennent à l'opérateur. L'utilisateur peut enregistrer ou partager les résultats à des fins personnelles."
      ]
    },
    {
      "heading": "9. Modifications des conditions et loi applicable",
      "paragraphs": [
        "En cas de modification des conditions, celles-ci seront publiées sur cette page avec la date d'entrée en vigueur.",
        "Ces conditions sont régies par la loi coréenne, et tout litige lié à l'utilisation du service sera traité conformément aux procédures établies par la législation applicable."
      ]
    }
  ],
  "effectiveLabel": "Date d'entrée en vigueur"
};

const d7 = {
  "title": "Politique de traitement des données personnelles",
  "intro": "Saju-Link ne conserve pas d'informations nécessaires à l'interprétation du saju (사주). Cette politique décrit ce que le service reçoit, ce qu'il ne conserve pas et ce qui est enregistré automatiquement.",
  "sections": [
    {
      "heading": "1. Informations non conservées",
      "paragraphs": [
        "Les informations saisies pour l'interprétation du saju, telles que la date de naissance, l'heure de naissance, le lieu de naissance, le sexe et le nom utilisé, ne sont **pas conservées nulle part.** Elles sont uniquement utilisées dans la mémoire du serveur pendant le traitement de la demande et disparaissent avec la réponse.",
        "Aucune donnée n'est enregistrée dans la base de données et aucun fichier séparé n'est conservé. Étant donné qu'il n'y a pas d'inscription, les valeurs saisies ne sont pas liées à une personne spécifique."
      ]
    },
    {
      "heading": "2. Informations contenues dans le lien de résultat",
      "paragraphs": [
        "L'adresse de l'écran de résultat contient les valeurs saisies sous forme codée. Cependant, cette valeur se trouve après le # dans l'adresse, et selon les normes web, le contenu après le # n'est pas envoyé par le navigateur au serveur. Par conséquent, même si le lien de résultat est ouvert, seul le chemin de l'adresse reste dans les enregistrements de connexion du serveur.",
        "Si le lien de résultat est envoyé à une autre personne, cette personne pourra également voir le même résultat. Le lien lui-même contient les valeurs saisies, donc la décision de partager appartient à l'utilisateur."
      ]
    },
    {
      "heading": "3. Informations collectées automatiquement",
      "paragraphs": [
        "Il n'y a pas d'informations collectées par le service pour identifier l'utilisateur. Cependant, un minimum d'enregistrements nécessaires au fonctionnement du service web est automatiquement conservé par le fournisseur d'infrastructure."
      ],
      "bullets": [
        "Adresse IP de connexion, date et heure de connexion, type de navigateur, etc., enregistrements de connexion serveur généraux",
        "Informations sur le pays — utilisées uniquement pour déterminer automatiquement la langue de l'écran et non conservées"
      ]
    },
    {
      "heading": "4. Cookies et publicités",
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
        "Lorsqu'un produit payant (rapport PDF) est acheté, les informations de commande sont conservées pour le traitement du paiement et la conservation des enregistrements de transaction conformément à la législation.",
        "**Les valeurs saisies pour l'interprétation du saju et le PDF généré ne sont pas conservés même après paiement.** Le principe énoncé au point 1 reste inchangé, indépendamment du paiement. Les éléments conservés sont les suivants, et les informations permettant d'identifier l'utilisateur, telles que le nom, les coordonnées et l'adresse, ne sont pas incluses."
      ],
      "bullets": [
        "Numéro de commande et identifiant de paiement",
        "Montant du paiement, devise et état du paiement (non payé, payé, annulé)",
        "Type de produit, état de traitement, nombre de téléchargements de documents, date et heure de commande",
        "Langue de l'écran au moment de la commande et distinction de la région de paiement (domestique ou international)",
        "Durée de conservation — Conformément à l'article 6 de la loi sur la protection des consommateurs dans le commerce électronique, les enregistrements concernant le paiement et la fourniture de biens sont conservés pendant 5 ans, et les enregistrements concernant les plaintes ou les litiges des consommateurs sont conservés pendant 3 ans avant d'être détruits."
      ]
    },
    {
      "heading": "6. Fourniture à des tiers et sous-traitance",
      "paragraphs": [
        "Étant donné qu'aucune donnée personnelle permettant d'identifier l'utilisateur n'est conservée, aucune donnée personnelle n'est fournie à des tiers. Le traitement des paiements est sous-traité aux entreprises suivantes.",
        "Le service utilise l'infrastructure d'hébergement de {hostingProvider}, et dans ce processus, les enregistrements de connexion mentionnés au point 3 sont traités conformément à la politique de cette entreprise.",
        "Les paiements nationaux sont traités par Toss Payments, tandis que les paiements internationaux sont traités par PayPal via PortOne. Les informations sur les moyens de paiement, telles que les numéros de carte et les numéros de compte, sont directement traitées par ces entreprises, et le service ne les reçoit ni ne les conserve."
      ]
    },
    {
      "heading": "7. Droits de l'utilisateur",
      "paragraphs": [
        "Étant donné que les valeurs saisies pour l'interprétation du saju ne sont pas conservées, il n'y a pas de demande d'accès, de correction ou de suppression à adresser. Les enregistrements de commande restants après paiement doivent être conservés pendant la période définie par la loi, et ne peuvent donc pas être supprimés pendant cette période, mais seront détruits après cette période.",
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
