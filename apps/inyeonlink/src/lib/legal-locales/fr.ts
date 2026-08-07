import type { LegalLocaleDocuments } from "@/lib/legal-locales/types";

// ko 원본에서 자동 생성된 번역이다(scripts/translate-legal.mjs). 손으로 고쳐도 되지만,
// 다시 생성하면 덮어쓴다 — 문구를 바꿀 일이 있으면 ko를 먼저 고치고 전체를 다시 만들 것.
// 사업자 정보와 가격은 플레이스홀더로 남아 있고 실제 값은 getLegalDocument가 넣는다.

const d0 = {
  "title": "Politique de traitement des données personnelles",
  "intro": "InyeonLink ne conserve pas les informations nécessaires au calcul de compatibilité. Cette politique décrit ce que le service reçoit, ce qu'il ne conserve pas et ce qui est enregistré automatiquement.",
  "sections": [
    {
      "heading": "1. Informations non conservées",
      "paragraphs": [
        "Les dates de naissance, heures de naissance, lieux de naissance, sexe et noms donnés saisis pour le calcul de compatibilité ne sont **pas conservés nulle part.** Ils sont utilisés uniquement en mémoire serveur pendant le traitement de la demande et disparaissent avec la réponse.",
        "Aucune donnée n'est enregistrée dans la base de données, ni conservée dans un fichier séparé. Comme il n'y a pas d'inscription, les valeurs saisies ne sont pas liées à une personne spécifique."
      ]
    },
    {
      "heading": "2. Informations contenues dans le lien de résultat",
      "paragraphs": [
        "L'adresse de l'écran de résultats contient les valeurs saisies sous forme codée. Cependant, cette valeur se trouve après le # dans l'adresse, et selon les normes web, le contenu après le # n'est pas envoyé par le navigateur au serveur. Par conséquent, même si vous ouvrez le lien de résultat, seul le chemin de l'adresse reste dans les enregistrements de connexion du serveur.",
        "Si vous envoyez le lien de résultat à une autre personne, cette personne pourra également voir le même résultat. Le lien lui-même contient les valeurs saisies, donc la décision de partager ou non appartient à l'utilisateur."
      ]
    },
    {
      "heading": "3. Informations collectées automatiquement",
      "paragraphs": [
        "Il n'y a pas d'informations collectées par le service pour identifier les utilisateurs. Cependant, un minimum d'enregistrements nécessaires au fonctionnement du service est automatiquement conservé par le fournisseur d'infrastructure."
      ],
      "bullets": [
        "Adresse IP de connexion, date et heure de connexion, type de navigateur, etc., enregistrements de connexion serveur généraux",
        "Informations sur le pays — utilisées uniquement pour déterminer automatiquement la langue de l'écran et ne sont pas conservées"
      ]
    },
    {
      "heading": "4. Cookies et publicité",
      "paragraphs": [
        "Le service lui-même n'utilise pas de cookies pour suivre les utilisateurs.",
        "Actuellement, il n'y a pas de publicités affichées sur ce service. Si des publicités sont affichées à l'avenir, le fournisseur de publicité (par exemple, Google) peut utiliser des cookies pour afficher des publicités. Dans ce cas, cette clause sera d'abord modifiée pour expliquer ce qui change avant de commencer."
      ]
    },
    {
      "heading": "5. Informations conservées lors du paiement",
      "paragraphs": [
        "Actuellement, aucun produit payant n'est vendu, donc il n'y a pas d'informations conservées liées aux paiements.",
        "Lorsque la vente commencera, les éléments suivants seront conservés pour le traitement des paiements et la conservation des enregistrements de transactions conformément à la législation : **même à ce moment-là, les valeurs saisies pour le calcul de compatibilité et le PDF généré ne seront pas conservés**, et aucune information permettant d'identifier l'utilisateur, comme le nom, les coordonnées ou l'adresse, ne sera collectée."
      ],
      "bullets": [
        "Numéro de commande et identifiant de paiement",
        "Montant du paiement, devise et état du paiement (non payé, payé, annulé)",
        "Classification des produits, état de traitement, nombre de téléchargements de documents, date de commande",
        "Langue de l'écran au moment de la commande et classification de la région de paiement (domestique, international)",
        "Durée de conservation — Selon l'article 6 de la loi sur la protection des consommateurs dans le commerce électronique, les enregistrements concernant le paiement et la fourniture de biens seront conservés pendant 5 ans, et les enregistrements concernant le traitement des plaintes ou des litiges des consommateurs seront conservés pendant 3 ans avant d'être détruits."
      ]
    },
    {
      "heading": "6. Fourniture à des tiers et sous-traitance",
      "paragraphs": [
        "Il n'y a pas de données personnelles conservées, donc il n'y a pas de données personnelles fournies à des tiers.",
        "Le service utilise l'infrastructure d'hébergement de {hostingProvider}, et dans ce processus, les enregistrements de connexion mentionnés au point 3 sont traités selon la politique de ce fournisseur.",
        "Lorsque la vente de produits payants commencera, les paiements nationaux seront confiés à Toss Payments, et les paiements internationaux à PortOne (PayPal). Les informations sur les moyens de paiement, telles que les numéros de carte et de compte, seront également traitées directement par ces entreprises, et le service ne les recevra pas."
      ]
    },
    {
      "heading": "7. Droits des utilisateurs",
      "paragraphs": [
        "Il n'y a pas de données personnelles conservées, donc il n'y a pas de demande d'accès, de correction ou de suppression à adresser.",
        "Les utilisateurs peuvent supprimer toutes les traces de saisie simplement en effaçant le lien de résultat dans la barre d'adresse du navigateur.",
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
        "En cas de modification de cette politique, la date d'entrée en vigueur et les modifications seront publiées sur cette page. Si le contenu du traitement change réellement, comme le début de l'affichage de publicités ou la vente de produits payants, nous informerons d'abord des modifications."
      ]
    }
  ],
  "effectiveLabel": "Date d'entrée en vigueur"
};

const d1 = {
  "title": "Conditions d'utilisation",
  "intro": "Ces conditions définissent les modalités d'utilisation du service InyeonLink (ci-après dénommé « service »). En utilisant le service, vous acceptez ces conditions.",
  "sections": [
    {
      "heading": "1. Nature du service",
      "paragraphs": [
        "Le service fournit des informations sur la relation entre deux personnes en appliquant les règles des relations de la divination traditionnelle (saju) et du zodiaque coréen (십이지) sur la base de la date de naissance saisie.",
        "Le taux de correspondance et les interprétations présentés sont des **documents de référence selon une perspective d'interprétation traditionnelle, et ne constituent pas des prévisions scientifiques ou des affirmations sur la relation.** Un score bas ne signifie pas que la relation est mauvaise, et un score élevé ne garantit pas la relation."
      ]
    },
    {
      "heading": "2. Frais d'utilisation",
      "paragraphs": [
        "Le service est actuellement entièrement gratuit et ne nécessite pas d'inscription.",
        "Lorsque la vente de produits payants (compatibility report PDF et inyeon report PDF) commencera, les conditions de l'article 3 ci-dessous s'appliqueront. Ces conditions seront à nouveau communiquées avant le début de la vente."
      ]
    },
    {
      "heading": "3. Produits payants et remboursements",
      "paragraphs": [
        "Les produits payants proposés sont **deux rapports PDF**. Les deux transforment les résultats affichés à l'écran en documents, incluant des informations non présentes à l'écran.",
        "**Rapport de compatibilité saju PDF** — 7 pages. Il contient la direction des énergies échangées, un tableau examinant plus en détail les saju de chacun, et les bases de calcul. Prix pour les paiements nationaux {priceDomestic} (TVA incluse), prix pour les paiements internationaux {priceGlobal}.",
        "**Rapport de lien PDF** — 4 pages. Il contient un tableau complet des dix tiges célestes et des douze signes du zodiaque, qui ne sont pas affichés à l'écran. Prix pour les paiements nationaux {priceAffinityDomestic} (TVA incluse), prix pour les paiements internationaux {priceAffinityGlobal}.",
        "Les paiements nationaux peuvent être effectués par carte de crédit ou de débit et paiement simplifié (Toss Payments, KakaoPay, NaverPay, Payco, etc.) via Toss Payments, tandis que les paiements internationaux se font par PayPal via PortOne. Le montant final est celui affiché à l'écran de paiement.",
        "**Le service ne conserve ni les valeurs saisies par l'utilisateur, ni les fichiers PDF générés.** Une fois le paiement approuvé, le document est généré et téléchargé immédiatement, sans rien laisser sur le serveur. Par conséquent, le fichier téléchargé doit être conservé par l'utilisateur.",
        "En cas d'interruption du téléchargement ou de perte du fichier, il est possible de le télécharger à nouveau **jusqu'à 5 fois** avec la même commande. Cependant, si les valeurs saisies disparaissent en dehors de l'écran de résultats, il ne sera pas possible de les recréer, donc veuillez enregistrer le fichier immédiatement après le paiement."
      ],
      "bullets": [
        "**Avant le début du téléchargement après le paiement, vous pouvez annuler à tout moment et obtenir un remboursement intégral.**",
        "**Après la fin du téléchargement, le droit de rétractation pour simple changement d'avis est limité.** Il s'agit de contenu numérique fourni immédiatement, ce qui rend impossible le retour à l'état initial, et cela correspond aux motifs de restriction de rétractation définis à l'article 17, paragraphe 2 de la loi sur la protection des consommateurs dans le commerce électronique.",
        "**En cas d'erreur système empêchant la création du document, si le fichier ne s'ouvre pas ou si le montant payé diffère de la commande,** un réémission ou un remboursement intégral sera effectué.",
        "**Les plaintes concernant le contenu des résultats** ne constituent pas un motif de remboursement. Les résultats de compatibilité sont des documents de référence selon une perspective d'interprétation traditionnelle, et leur nature est expliquée avant le paiement (voir article 1 ci-dessus).",
        "Les demandes de réémission après avoir utilisé les 5 réémissions sont considérées comme non remboursables.",
        "**Si un mineur effectue un paiement sans le consentement de son représentant légal,** celui-ci ou le mineur peut annuler ce paiement. Veuillez nous en informer aux coordonnées ci-dessous pour obtenir un remboursement."
      ]
    },
    {
      "heading": "4. Concernant les résultats de calcul",
      "paragraphs": [
        "Tous les scores sont calculés selon des règles publiées, donc si les mêmes valeurs sont saisies, les mêmes résultats seront toujours obtenus.",
        "Si l'heure de naissance n'est pas saisie, le calcul se fait sans le pilier temporel (시주), ce qui peut entraîner des résultats différents. Plus le lieu de naissance est choisi avec précision, plus le calcul du pilier temporel sera exact.",
        "Le calcul du calendrier de naissance utilise une bibliothèque de calcul publique, et les résultats peuvent varier en fonction de la manière dont les saisons et les fuseaux horaires sont traités."
      ]
    },
    {
      "heading": "5. Responsabilité de l'utilisateur",
      "paragraphs": [
        "L'utilisateur peut saisir la date de naissance d'autrui, mais ne doit pas utiliser les résultats de manière préjudiciable pour autrui.",
        "Ne pas utiliser les résultats du service comme base pour des décisions influençant les droits d'autrui, tels que le mariage, le divorce, l'embauche ou les transactions. Le service n'est pas conçu à de telles fins."
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
        "Le service ne fournit que des documents de référence et ne saurait être tenu responsable des jugements et de leurs conséquences basés sur les résultats par l'utilisateur.",
        "En cas d'interruption du service pour des raisons indépendantes de notre volonté, telles que des catastrophes naturelles ou des pannes d'infrastructure, nous ne serons pas responsables des dommages en résultant."
      ]
    },
    {
      "heading": "8. Droits de propriété intellectuelle",
      "paragraphs": [
        "Les droits sur l'interface du service, les textes et les mises en œuvre des règles de calcul appartiennent à l'opérateur. L'utilisateur peut enregistrer ou partager les résultats à des fins personnelles."
      ]
    },
    {
      "heading": "9. Modifications des conditions et loi applicable",
      "paragraphs": [
        "En cas de modification des conditions, celles-ci seront publiées sur cette page avec la date d'entrée en vigueur.",
        "Ces conditions sont régies par la loi de la République de Corée, et tout litige lié à l'utilisation du service sera traité conformément aux procédures définies par la législation applicable."
      ]
    }
  ],
  "effectiveLabel": "Date d'entrée en vigueur"
};

const d2 = {
  "title": "Politique de remboursement et d'annulation",
  "intro": "Voici les critères d'annulation et de remboursement pour le rapport de compatibilité PDF. Nous avons rassemblé des informations similaires à celles de l'article 3 des conditions générales.",
  "sections": [
    {
      "heading": "1. Nature du produit",
      "paragraphs": [
        "Le produit vendu est un **rapport de compatibilité PDF** unique, et une fois le paiement approuvé, le document est créé sur-le-champ et envoyé immédiatement en tant que contenu numérique.",
        "**Le service ne conserve ni les données saisies par l'utilisateur ni le fichier PDF généré.** Par conséquent, le fichier téléchargé doit être conservé par l'utilisateur lui-même."
      ]
    },
    {
      "heading": "2. Droit de rétractation",
      "paragraphs": [
        "Nous suivons les critères établis par la loi sur le commerce électronique."
      ],
      "bullets": [
        "**Avant le début du téléchargement,** vous pouvez annuler à tout moment et obtenir un remboursement intégral.",
        "**Après la fin du téléchargement,** le droit de rétractation pour simple changement d'avis est limité. Il s'agit d'un contenu numérique fourni immédiatement après le paiement, et il est impossible de revenir à l'état antérieur, ce qui correspond aux raisons de limitation définies à l'article 17, paragraphe 2 de la loi sur la protection des consommateurs dans le commerce électronique. Cette information est préalablement communiquée et un consentement est obtenu à l'écran de paiement."
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
        "**Si un mineur a effectué le paiement sans le consentement de son représentant légal** — La personne concernée ou son représentant légal peut demander l'annulation."
      ]
    },
    {
      "heading": "4. Cas non éligibles au remboursement",
      "paragraphs": [],
      "bullets": [
        "**Insatisfaction concernant le contenu des résultats.** Les résultats de compatibilité sont des références basées sur une interprétation traditionnelle, et leur nature est expliquée avant le paiement.",
        "Nouvelle demande après avoir utilisé les 5 réémissions autorisées."
      ]
    },
    {
      "heading": "5. Méthode de soumission",
      "paragraphs": [
        "Les demandes de remboursement ou d'informations doivent être soumises au service client ({customerCenter}) ou par e-mail ({email}). Veuillez également fournir votre numéro de commande pour un traitement rapide.",
        "Les remboursements seront effectués par le moyen de paiement utilisé, et en fonction des conditions de la société de carte ou de paiement, cela peut prendre entre 3 et 7 jours ouvrables pour être reflété."
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
        "**Le calcul de compatibilité et la consultation des résultats sont gratuits.** L'inscription n'est pas nécessaire.",
        "Vous pouvez voir à l'écran le taux de correspondance, les scores par élément, les piliers saju (사주) de deux personnes et la force des cinq éléments, ainsi que la forme de la relation."
      ]
    },
    {
      "heading": "2. Rapport de compatibilité PDF (payant)",
      "paragraphs": [
        "Paiement national {priceDomestic} (TVA incluse) · Paiement international {priceGlobal}",
        "Nous vous fournissons un document PDF de 7 pages contenant les résultats affichés. Il inclut la direction des énergies échangées, un tableau plus détaillé des piliers saju (사주) de chacun, le lieu de rencontre des quatre piliers, ainsi que les bases de calcul qui ne sont pas affichées à l'écran.",
        "Avec la même commande, vous pouvez le télécharger à nouveau **jusqu'à 5 fois**. Cependant, si vous perdez les valeurs d'entrée en sortant de l'écran des résultats, vous ne pourrez pas le recréer, donc veuillez enregistrer le fichier immédiatement après le paiement."
      ]
    },
    {
      "heading": "3. Rapport de lien PDF (payant)",
      "paragraphs": [
        "Paiement national {priceAffinityDomestic} (TVA incluse) · Paiement international {priceAffinityGlobal}",
        "Nous vous fournissons un document PDF de 4 pages contenant les résultats affichés. Bien que l'écran ne montre que les ensembles de liens compatibles, le PDF contient un tableau complet des dix tiges célestes et des douze signes du zodiaque.",
        "Les conditions de réémission sont les mêmes que pour le rapport de compatibilité."
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
        "En cas de changement de prix, cela sera d'abord publié sur cette page. Les commandes déjà réglées ne seront pas affectées par le prix modifié."
      ]
    }
  ],
  "effectiveLabel": "Date d'entrée en vigueur"
};

const d4 = {
  "title": "Politique de traitement des données personnelles",
  "intro": "InyeonLink ne conserve pas les informations nécessaires au calcul de compatibilité. Cette politique décrit ce que le service reçoit, ce qu'il ne conserve pas et ce qui est enregistré automatiquement.",
  "sections": [
    {
      "heading": "1. Informations non conservées",
      "paragraphs": [
        "Les dates de naissance, heures de naissance, lieux de naissance, sexes et noms fournis pour le calcul de compatibilité ne sont **pas enregistrés nulle part.** Ils sont utilisés uniquement dans la mémoire du serveur pendant le traitement de la demande et disparaissent avec la réponse.",
        "Aucune donnée n'est enregistrée dans la base de données et aucun fichier séparé n'est conservé. Comme il n'y a pas d'inscription, les valeurs saisies ne sont pas liées à une personne spécifique."
      ]
    },
    {
      "heading": "2. Informations contenues dans le lien de résultat",
      "paragraphs": [
        "L'adresse de l'écran de résultat contient les valeurs saisies sous forme codée. Cependant, cette valeur se trouve après le # dans l'adresse, et selon les normes web, le contenu après le # n'est pas envoyé par le navigateur au serveur. Par conséquent, même si le lien de résultat est ouvert, seul le chemin de l'adresse reste dans les enregistrements de connexion du serveur.",
        "Si le lien de résultat est envoyé à une autre personne, cette personne pourra également voir le même résultat. Le lien lui-même contient les valeurs saisies, donc la décision de partager ou non appartient à l'utilisateur."
      ]
    },
    {
      "heading": "3. Informations collectées automatiquement",
      "paragraphs": [
        "Il n'y a pas d'informations collectées par le service pour identifier les utilisateurs. Cependant, un minimum d'enregistrements nécessaires au fonctionnement du service est automatiquement conservé par le fournisseur d'infrastructure."
      ],
      "bullets": [
        "Adresse IP de connexion, date et heure de connexion, type de navigateur, etc. — enregistrements de connexion serveur généraux",
        "Informations sur le pays — utilisées uniquement pour déterminer automatiquement la langue de l'écran et non conservées"
      ]
    },
    {
      "heading": "4. Cookies et publicité",
      "paragraphs": [
        "Le service lui-même n'utilise pas de cookies pour identifier ou suivre les utilisateurs. Les informations saisies pour le calcul de compatibilité ne sont pas transmises aux annonceurs.",
        "Ce service affiche des publicités via Google AdSense. Dans ce processus, les événements suivants se produisent."
      ],
      "bullets": [
        "Des fournisseurs tiers, y compris Google, peuvent stocker ou lire des cookies dans le navigateur de l'utilisateur.",
        "Google utilise des cookies pour afficher des publicités basées sur l'historique de visites de ce site et d'autres sites.",
        "L'utilisateur peut désactiver les publicités personnalisées dans les paramètres publicitaires de Google (google.com/settings/ads). Même après désactivation, les publicités continueront d'apparaître, mais leur pertinence pour l'utilisateur sera réduite.",
        "Les publicités personnalisées de tous les fournisseurs tiers peuvent être désactivées en une seule fois sur aboutads.info/choices.",
        "Il est également possible de bloquer les cookies dans les paramètres du navigateur.",
        "Pour les utilisateurs de l'Espace économique européen, du Royaume-Uni et de la Suisse, le consentement à l'utilisation des cookies publicitaires est demandé au préalable."
      ]
    },
    {
      "heading": "5. Informations conservées lors du paiement",
      "paragraphs": [
        "Actuellement, aucun produit payant n'est vendu, donc aucune information liée au paiement n'est conservée.",
        "Lorsque la vente commence, les éléments suivants seront conservés pour le traitement des paiements et la conservation des enregistrements de transactions conformément à la législation. **À ce moment-là, les valeurs saisies pour le calcul de compatibilité et le PDF généré ne seront pas conservés**, et aucune information permettant d'identifier l'utilisateur, telle que le nom, les coordonnées ou l'adresse, ne sera collectée."
      ],
      "bullets": [
        "Numéro de commande et identifiant de paiement",
        "Montant du paiement, devise et état du paiement (non payé, payé, annulé)",
        "Classification du produit, état de traitement, nombre de téléchargements de documents, date de commande",
        "Langue de l'écran au moment de la commande et classification de la région de paiement (domestique, international)",
        "Durée de conservation — Conformément à l'article 6 de la loi sur la protection des consommateurs dans le commerce électronique, les enregistrements relatifs au paiement et à la fourniture de biens seront conservés pendant 5 ans, et les enregistrements relatifs aux plaintes ou aux litiges des consommateurs seront conservés pendant 3 ans avant d'être détruits."
      ]
    },
    {
      "heading": "6. Fourniture à des tiers et sous-traitance",
      "paragraphs": [
        "Comme il n'y a pas de données personnelles conservées, il n'y a pas de données personnelles fournies à des tiers.",
        "Le service utilise l'infrastructure d'hébergement de {hostingProvider}, et dans ce processus, les enregistrements de connexion mentionnés au point 3 sont traités conformément à la politique de ce fournisseur.",
        "Lorsque la vente de produits payants commence, les paiements nationaux sont confiés à Toss Payments, et les paiements internationaux à PortOne (PayPal). Les informations sur les moyens de paiement, telles que les numéros de carte et de compte, sont également directement traitées par ces entreprises, et le service ne les reçoit pas."
      ]
    },
    {
      "heading": "7. Droits des utilisateurs",
      "paragraphs": [
        "Comme il n'y a pas de données personnelles conservées, il n'y a pas de demande d'accès, de correction ou de suppression à adresser.",
        "L'utilisateur peut supprimer toutes les traces saisies simplement en effaçant le lien de résultat dans la barre d'adresse du navigateur.",
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
        "En cas de modification de cette politique, la date d'entrée en vigueur et les modifications seront publiées sur cette page. Si le contenu du traitement change réellement, par exemple avec le début de la diffusion de publicités ou de la vente de produits payants, nous informerons d'abord de la modification."
      ]
    }
  ],
  "effectiveLabel": "Date d'entrée en vigueur"
};

const d5 = {
  "title": "Politique de traitement des données personnelles",
  "intro": "InyeonLink ne conserve pas les informations nécessaires au calcul de compatibilité. Cette politique décrit ce que le service reçoit, ce qu'il ne conserve pas et ce qui est automatiquement enregistré.",
  "sections": [
    {
      "heading": "1. Informations non conservées",
      "paragraphs": [
        "Les dates de naissance, heures de naissance, lieux de naissance, sexes et noms fournis pour le calcul de compatibilité ne sont **pas enregistrés nulle part.** Ils sont utilisés uniquement dans la mémoire du serveur pendant le traitement de la demande et disparaissent avec la réponse.",
        "Aucune donnée n'est enregistrée dans la base de données et aucun fichier séparé n'est conservé. Comme il n'y a pas d'inscription, les valeurs saisies ne sont pas liées à une personne spécifique."
      ]
    },
    {
      "heading": "2. Informations contenues dans le lien de résultat",
      "paragraphs": [
        "L'adresse de l'écran de résultats contient les valeurs saisies sous forme codée. Cependant, cette valeur se trouve après le # dans l'adresse, et selon les normes web, le contenu après le # n'est pas envoyé par le navigateur au serveur. Par conséquent, même si le lien de résultat est ouvert, seul le chemin de l'adresse reste dans les enregistrements d'accès du serveur.",
        "Si vous envoyez le lien de résultat à une autre personne, cette personne pourra également voir le même résultat. Le lien lui-même contient les valeurs saisies, donc la décision de partager ou non appartient à l'utilisateur."
      ]
    },
    {
      "heading": "3. Informations collectées automatiquement",
      "paragraphs": [
        "Il n'y a pas d'informations collectées par le service pour identifier les utilisateurs. Cependant, un minimum d'enregistrements nécessaires au fonctionnement du service est automatiquement conservé par le fournisseur d'infrastructure."
      ],
      "bullets": [
        "Adresse IP d'accès, date et heure d'accès, type de navigateur, etc. — enregistrements d'accès serveur généraux",
        "Informations sur le pays — utilisées uniquement pour déterminer automatiquement la langue de l'écran et non conservées"
      ]
    },
    {
      "heading": "4. Cookies et publicité",
      "paragraphs": [
        "Le service lui-même n'utilise pas de cookies pour suivre les utilisateurs.",
        "Actuellement, ce service n'affiche pas de publicités. Si des publicités sont affichées à l'avenir, le fournisseur de publicité (par exemple, Google) peut utiliser des cookies pour afficher des publicités. Dans ce cas, cette clause sera d'abord modifiée pour clarifier ce qui change avant de commencer."
      ]
    },
    {
      "heading": "5. Informations conservées lors du paiement",
      "paragraphs": [
        "Lors du paiement d'un produit payant (rapport PDF), les informations de commande sont conservées pour le traitement du paiement et la conservation des enregistrements de transaction conformément à la législation.",
        "**Les valeurs saisies pour le calcul de compatibilité et le PDF généré ne sont pas conservés même après le paiement.** Le principe énoncé au point 1 reste inchangé, indépendamment du paiement. Les éléments conservés sont les suivants, et aucune information permettant d'identifier l'utilisateur, comme le nom, les coordonnées ou l'adresse, n'est incluse."
      ],
      "bullets": [
        "Numéro de commande et identifiant de paiement",
        "Montant du paiement, devise et état du paiement (non payé, payé, annulé)",
        "Type de produit, état de traitement, nombre de téléchargements du document, date de commande",
        "Langue de l'écran au moment de la commande et distinction de la région de paiement (domestique, international)",
        "Durée de conservation — Conformément à l'article 6 de la loi sur la protection des consommateurs dans le commerce électronique, les enregistrements relatifs au paiement et à la fourniture de biens sont conservés pendant 5 ans, et les enregistrements concernant les plaintes ou litiges des consommateurs sont conservés pendant 3 ans avant d'être détruits."
      ]
    },
    {
      "heading": "6. Fourniture à des tiers et sous-traitance",
      "paragraphs": [
        "Comme aucune donnée personnelle permettant d'identifier les utilisateurs n'est conservée, aucune donnée personnelle n'est fournie à des tiers. Le traitement des paiements est sous-traité aux entreprises suivantes.",
        "Le service utilise l'infrastructure d'hébergement de {hostingProvider}, et dans ce processus, les enregistrements d'accès mentionnés au point 3 sont traités conformément à la politique de cette entreprise.",
        "Les paiements nationaux sont traités par Toss Payments, tandis que les paiements internationaux sont traités par PayPal via PortOne. Les informations sur les moyens de paiement, telles que les numéros de carte et de compte, sont directement traitées par ces entreprises, et le service ne les reçoit ni ne les conserve."
      ]
    },
    {
      "heading": "7. Droits des utilisateurs",
      "paragraphs": [
        "Comme les valeurs saisies pour le calcul de compatibilité ne sont pas conservées, il n'y a pas de demande d'accès, de correction ou de suppression à adresser. Les enregistrements de commande restants après paiement doivent être conservés pendant la période définie par la loi, et ils ne peuvent pas être supprimés pendant cette période, mais seront détruits après cette période.",
        "Les utilisateurs peuvent supprimer toutes les traces de saisie simplement en effaçant le lien de résultat dans la barre d'adresse de leur navigateur.",
        "Pour toute question concernant l'utilisation du service, veuillez nous contacter aux coordonnées ci-dessous."
      ]
    },
    {
      "heading": "8. Données personnelles des enfants",
      "paragraphs": [
        "Ce service n'est pas destiné aux enfants de moins de 14 ans et ne collecte pas de données personnelles auprès d'enfants."
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
        "En cas de modification de cette politique, la date d'entrée en vigueur et les modifications seront publiées sur cette page. Si le contenu du traitement change réellement, comme le début de l'affichage de publicités ou la vente de produits payants, nous informerons d'abord de la modification."
      ]
    }
  ],
  "effectiveLabel": "Date d'entrée en vigueur"
};

const d6 = {
  "title": "Conditions d'utilisation",
  "intro": "Ces conditions définissent les modalités d'utilisation du service InyeonLink (ci-après dénommé « service »). En utilisant le service, vous acceptez ces conditions.",
  "sections": [
    {
      "heading": "1. Nature du service",
      "paragraphs": [
        "Le service fournit des informations sur la relation entre deux personnes en appliquant les règles de la divination traditionnelle (saju) et des signes du zodiaque coréen (띠) en fonction de la date de naissance saisie.",
        "Le taux de correspondance et les interprétations présentés sont des **documents de référence selon une perspective d'interprétation traditionnelle, et ne constituent pas des prévisions scientifiques ou des affirmations sur la relation.** Un score bas ne signifie pas que la relation est mauvaise, et un score élevé ne garantit pas la relation."
      ]
    },
    {
      "heading": "2. Frais d'utilisation",
      "paragraphs": [
        "Le calcul de la compatibilité et la consultation des résultats sont gratuits et ne nécessitent pas d'inscription.",
        "Recevoir les résultats sous forme de rapport PDF est payant. Les prix et conditions sont indiqués à la section 3 ci-dessous et sur l'écran de paiement."
      ]
    },
    {
      "heading": "3. Produits payants et remboursements",
      "paragraphs": [
        "Les produits payants proposés sont **deux types de rapports PDF.** Les deux transforment les résultats affichés à l'écran en documents, incluant des informations non présentes à l'écran.",
        "**Rapport de compatibilité saju PDF** — 7 pages. Il contient la direction des énergies échangées, un tableau examinant plus en détail les saju de chacun, et les fondements des calculs. Paiement national {priceDomestic} (TVA incluse), paiement international {priceGlobal}.",
        "**Rapport de lien PDF** — 4 pages. Il contient le tableau complet des dix tiges célestes et des douze signes du zodiaque, qui ne sont pas affichés à l'écran. Paiement national {priceAffinityDomestic} (TVA incluse), paiement international {priceAffinityGlobal}.",
        "Les paiements nationaux peuvent être effectués via Toss Payments en utilisant des cartes de crédit, de débit et des paiements simplifiés (Toss Pay, Kakao Pay, Naver Pay, Payco, etc.), tandis que les paiements internationaux se font via PayPal par PortOne. Le montant final est celui affiché sur l'écran de paiement.",
        "**Le service ne conserve ni les valeurs saisies par l'utilisateur ni les fichiers PDF générés.** Une fois le paiement approuvé, le document est généré et envoyé immédiatement, sans rien conserver sur le serveur. Par conséquent, le fichier téléchargé doit être conservé par l'utilisateur.",
        "En cas d'interruption du téléchargement ou de perte du fichier, il est possible de le télécharger à nouveau **jusqu'à 5 fois** avec la même commande. Cependant, si les valeurs saisies disparaissent en dehors de l'écran des résultats, il ne sera pas possible de les recréer, donc veuillez sauvegarder le fichier immédiatement après le paiement."
      ],
      "bullets": [
        "**Avant le début du téléchargement après le paiement, vous pouvez annuler à tout moment et obtenir un remboursement intégral.**",
        "**Après la fin du téléchargement, le droit de rétractation pour simple changement d'avis est limité.** Il s'agit de contenu numérique fourni immédiatement, et cela correspond aux raisons de limitation du droit de rétractation définies à l'article 17, paragraphe 2 de la loi sur la protection des consommateurs dans le commerce électronique.",
        "**En cas d'erreur système empêchant la création du document, si le fichier ne s'ouvre pas ou si le montant payé diffère de la commande,** un nouvel envoi ou un remboursement intégral sera effectué.",
        "**Les plaintes concernant le contenu des résultats** ne constituent pas un motif de remboursement. Les résultats de compatibilité sont des documents de référence selon une perspective d'interprétation traditionnelle, et leur nature est expliquée avant le paiement (voir section 1 ci-dessus).",
        "Les demandes de réémission après avoir utilisé les 5 réémissions sont considérées comme non remboursables.",
        "**Si un mineur effectue un paiement sans le consentement de son représentant légal,** celui-ci ou le mineur peut annuler ce paiement. Veuillez nous en informer aux coordonnées ci-dessous pour obtenir un remboursement."
      ]
    },
    {
      "heading": "4. Concernant les résultats des calculs",
      "paragraphs": [
        "Tous les scores sont calculés selon des règles publiques, donc si les mêmes valeurs sont saisies, les mêmes résultats seront toujours obtenus.",
        "Si l'heure de naissance n'est pas saisie, le calcul se fait sans le pilier horaire (시주), ce qui peut entraîner des résultats différents. Plus le lieu de naissance est choisi avec précision, plus le calcul du pilier horaire sera exact.",
        "Le calcul du calendrier lunaire utilise une bibliothèque de calcul publique, et les résultats peuvent varier en fonction de la manière dont les saisons et les fuseaux horaires sont traités."
      ]
    },
    {
      "heading": "5. Responsabilité de l'utilisateur",
      "paragraphs": [
        "L'utilisateur peut saisir la date de naissance d'autrui, mais ne doit pas utiliser les résultats de manière préjudiciable à autrui.",
        "Ne pas utiliser les résultats du service comme base pour des décisions influençant les droits d'autrui, tels que le mariage, le divorce, l'embauche ou les transactions. Le service n'est pas conçu à cette fin."
      ]
    },
    {
      "heading": "6. Comportements interdits",
      "paragraphs": [
        "Les actions suivantes ne sont pas autorisées."
      ],
      "bullets": [
        "Envoyer des demandes excessives à l'aide d'outils automatisés, perturbant le fonctionnement du service",
        "Présenter les résultats du service comme des faits ou des résultats d'expertise",
        "Dupliquer ou modifier le service pour fournir un service identique"
      ]
    },
    {
      "heading": "7. Exonération de responsabilité",
      "paragraphs": [
        "Le service ne fournit que des documents de référence et ne peut être tenu responsable des jugements et des résultats basés sur ceux-ci par l'utilisateur.",
        "En cas d'interruption du service pour des raisons indépendantes de notre volonté, telles que des catastrophes naturelles ou des pannes de fournisseurs d'infrastructure, nous ne serons pas responsables des dommages en résultant."
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
        "Ces conditions sont régies par la loi de la République de Corée, et les litiges liés à l'utilisation du service seront traités conformément aux procédures définies par la législation applicable."
      ]
    }
  ],
  "effectiveLabel": "Date d'entrée en vigueur"
};

const d7 = {
  "title": "Politique de traitement des données personnelles",
  "intro": "InyeonLink ne conserve pas les informations nécessaires au calcul de compatibilité. Cette politique décrit ce que le service reçoit, ce qu'il ne conserve pas et ce qui est automatiquement enregistré.",
  "sections": [
    {
      "heading": "1. Informations non conservées",
      "paragraphs": [
        "Les dates de naissance, heures de naissance, lieux de naissance, sexes et noms utilisés pour le calcul de compatibilité ne sont **pas enregistrés nulle part.** Ils ne sont utilisés que dans la mémoire du serveur pendant le traitement de la demande et disparaissent avec la réponse.",
        "Aucune donnée n'est enregistrée dans la base de données et aucun fichier séparé n'est conservé. Comme il n'y a pas d'inscription, les valeurs saisies ne sont pas liées à une personne spécifique."
      ]
    },
    {
      "heading": "2. Informations contenues dans le lien de résultat",
      "paragraphs": [
        "L'adresse de l'écran de résultats contient les valeurs saisies sous forme codée. Cependant, cette valeur se trouve après le # dans l'adresse, et selon les normes web, le contenu après le # n'est pas envoyé par le navigateur au serveur. Par conséquent, même si vous ouvrez le lien de résultat, seul le chemin de l'adresse reste dans les enregistrements de connexion du serveur.",
        "Si vous envoyez le lien de résultat à une autre personne, cette personne pourra également voir le même résultat. Le lien lui-même contient les valeurs saisies, donc la décision de partager appartient à l'utilisateur."
      ]
    },
    {
      "heading": "3. Informations collectées automatiquement",
      "paragraphs": [
        "Il n'y a pas d'informations collectées par le service pour identifier les utilisateurs. Cependant, un minimum d'enregistrements nécessaires au fonctionnement du service est automatiquement conservé par le fournisseur d'infrastructure."
      ],
      "bullets": [
        "Adresse IP de connexion, date et heure de connexion, type de navigateur, etc., enregistrements de connexion du serveur habituels",
        "Informations sur le pays — utilisées uniquement pour déterminer automatiquement la langue de l'écran et non conservées"
      ]
    },
    {
      "heading": "4. Cookies et publicité",
      "paragraphs": [
        "Le service lui-même n'utilise pas de cookies pour identifier ou suivre les utilisateurs. Les informations saisies pour le calcul de compatibilité ne sont pas transmises aux annonceurs.",
        "Ce service diffuse des publicités via Google AdSense. Dans ce processus, les événements suivants se produisent."
      ],
      "bullets": [
        "Des fournisseurs tiers, y compris Google, peuvent stocker ou lire des cookies dans le navigateur de l'utilisateur.",
        "Google utilise des cookies pour diffuser des publicités basées sur l'historique de visites de ce site et d'autres sites.",
        "Les utilisateurs peuvent désactiver les publicités personnalisées dans les paramètres publicitaires de Google (google.com/settings/ads). Même si désactivées, les publicités continueront à s'afficher, mais leur pertinence pour l'utilisateur sera réduite.",
        "Les publicités personnalisées de tous les fournisseurs tiers peuvent être désactivées en une seule fois sur aboutads.info/choices.",
        "Il est également possible de bloquer les cookies dans les paramètres du navigateur.",
        "Pour les utilisateurs de l'Espace économique européen, du Royaume-Uni et de la Suisse, un consentement préalable est demandé pour l'utilisation des cookies publicitaires."
      ]
    },
    {
      "heading": "5. Informations conservées lors du paiement",
      "paragraphs": [
        "Lors du paiement d'un produit payant (compatibility report PDF), les informations de commande sont conservées pour le traitement du paiement et la conservation des enregistrements de transactions conformément à la loi.",
        "**Les valeurs saisies pour le calcul de compatibilité et le PDF généré ne sont pas conservés même après paiement.** Le principe énoncé au point 1 reste inchangé, indépendamment du paiement. Les éléments conservés sont les suivants, sans inclure d'informations permettant d'identifier l'utilisateur telles que le nom, les coordonnées ou l'adresse."
      ],
      "bullets": [
        "Numéro de commande et identifiant de paiement",
        "Montant du paiement, devise et état du paiement (non payé, payé, annulé)",
        "Type de produit, état de traitement, nombre de téléchargements de documents, heure de commande",
        "Langue de l'écran au moment de la commande et distinction de la région de paiement (domestique ou international)",
        "Durée de conservation — Selon l'article 6 de la loi sur la protection des consommateurs dans le commerce électronique, les enregistrements relatifs au paiement et à la fourniture de biens sont conservés pendant 5 ans, et les enregistrements relatifs aux plaintes ou litiges des consommateurs sont conservés pendant 3 ans avant d'être détruits."
      ]
    },
    {
      "heading": "6. Fourniture et traitement par des tiers",
      "paragraphs": [
        "Comme aucune donnée personnelle permettant d'identifier l'utilisateur n'est conservée, il n'y a pas de données personnelles fournies à des tiers. Le traitement des paiements est confié aux entreprises suivantes.",
        "Le service utilise l'infrastructure d'hébergement de {hostingProvider}, et dans ce processus, les enregistrements de connexion mentionnés au point 3 sont traités conformément à la politique de cette entreprise.",
        "Les paiements domestiques sont traités par Toss Payments, tandis que les paiements internationaux sont traités par PayPal via PortOne. Les informations sur les moyens de paiement, telles que les numéros de carte et de compte, sont traitées directement par ces entreprises, et le service ne les reçoit ni ne les conserve."
      ]
    },
    {
      "heading": "7. Droits des utilisateurs",
      "paragraphs": [
        "Comme les valeurs saisies pour le calcul de compatibilité ne sont pas conservées, il n'y a pas de demande d'accès, de correction ou de suppression à adresser. Les enregistrements de commande restants après paiement doivent être conservés pendant la période définie par la loi, et ne peuvent donc pas être supprimés pendant cette période, mais seront détruits après cette période.",
        "Les utilisateurs peuvent supprimer toutes les traces de saisie simplement en effaçant le lien de résultat dans la barre d'adresse du navigateur.",
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
