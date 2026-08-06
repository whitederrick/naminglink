import type { LegalLocaleDocuments } from "@/lib/legal-locales/types";

// ko 원본에서 자동 생성된 번역이다(scripts/translate-legal.mjs). 손으로 고쳐도 되지만,
// 다시 생성하면 덮어쓴다 — 문구를 바꿀 일이 있으면 ko를 먼저 고치고 전체를 다시 만들 것.
// 사업자 정보와 가격은 플레이스홀더로 남아 있고 실제 값은 getLegalDocument가 넣는다.

const d0 = {
  "title": "Politique de traitement des données personnelles",
  "intro": "Dreams-Link ne conserve pas d'informations nécessaires à l'interprétation des rêves. Cette politique décrit ce que le service reçoit, ce qu'il ne conserve pas et ce qui est enregistré automatiquement.",
  "sections": [
    {
      "heading": "1. Informations non conservées",
      "paragraphs": [
        "Les récits de rêves que vous soumettez pour l'interprétation, vos sentiments au réveil, et si vous faites des rêves récurrents ne sont **pas conservés nulle part.** Ils sont utilisés uniquement en mémoire serveur pendant le traitement de la demande et disparaissent avec la réponse.",
        "Aucune donnée n'est enregistrée dans la base de données, et il n'y a pas de fichiers séparés. Comme il n'y a pas d'inscription, les valeurs saisies ne sont pas liées à une personne spécifique.",
        "Les récits de rêves sont les valeurs les plus personnelles que ce service reçoit. C'est pourquoi il n'y a pas de fonction pour revoir les résultats passés (journal de rêves) — cette fonction nécessiterait de conserver les écrits que vous avez soumis."
      ]
    },
    {
      "heading": "2. Informations contenues dans le lien de résultat",
      "paragraphs": [
        "L'adresse de l'écran de résultats contient les valeurs saisies sous forme codée. Cependant, cette valeur se trouve après le # dans l'adresse, et selon les normes web, le contenu après le # n'est pas envoyé au serveur par le navigateur. Par conséquent, même si vous ouvrez le lien de résultat, seul le chemin de l'adresse reste dans les enregistrements de connexion du serveur.",
        "Si vous envoyez le lien de résultat à une autre personne, cette personne pourra également voir le même résultat. Le lien lui-même contient les valeurs saisies, donc la décision de partager appartient à l'utilisateur."
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
      "heading": "4. Cookies et publicités",
      "paragraphs": [
        "Le service lui-même n'utilise pas de cookies pour suivre les utilisateurs.",
        "Actuellement, il n'y a pas de publicités affichées sur ce service. Si des publicités sont affichées à l'avenir, le fournisseur de publicité (par exemple, Google) peut utiliser des cookies pour la diffusion des annonces. Dans ce cas, cette clause sera d'abord modifiée pour clarifier ce qui change avant de commencer."
      ]
    },
    {
      "heading": "5. Informations conservées lors du paiement",
      "paragraphs": [
        "Actuellement, aucun produit payant n'est vendu, donc il n'y a pas d'informations conservées liées aux paiements.",
        "Lorsque la vente commencera, les éléments suivants seront conservés pour le traitement des paiements et la conservation des enregistrements de transactions conformément à la législation : **les rêves que vous avez soumis et les fichiers créés ne seront pas conservés**, et aucune information permettant d'identifier l'utilisateur, comme le nom, les coordonnées ou l'adresse, ne sera collectée."
      ],
      "bullets": [
        "Numéro de commande et identifiant de paiement",
        "Montant du paiement, devise et état du paiement (non payé, payé, annulé)",
        "Type de produit, état de traitement, nombre de téléchargements de documents, heure de commande",
        "Langue de l'écran au moment de la commande et distinction de la région de paiement (domestique, international)",
        "Durée de conservation — Selon l'article 6 de la loi sur la protection des consommateurs dans le commerce électronique, les enregistrements relatifs au paiement et à la fourniture de biens seront conservés pendant 5 ans, et les enregistrements relatifs aux plaintes ou aux litiges des consommateurs seront conservés pendant 3 ans avant d'être détruits."
      ]
    },
    {
      "heading": "6. Fourniture à des tiers et sous-traitance",
      "paragraphs": [
        "Il n'y a pas de données personnelles conservées, donc il n'y a pas de données personnelles fournies à des tiers.",
        "Pour le fonctionnement du service, l'infrastructure d'hébergement de {hostingProvider} est utilisée, et dans ce processus, les enregistrements de connexion mentionnés au point 3 sont traités conformément à la politique de ce fournisseur.",
        "Lorsque la vente de produits payants commencera, les paiements nationaux seront confiés à Toss Payments, et les paiements internationaux à PortOne (PayPal). Les informations sur les moyens de paiement, telles que les numéros de carte et de compte, seront également traitées directement par ces entreprises, et le service ne les recevra pas."
      ]
    },
    {
      "heading": "7. Droits des utilisateurs",
      "paragraphs": [
        "Il n'y a pas de données personnelles conservées, donc il n'y a pas de demande d'accès, de correction ou de suppression à adresser.",
        "Les utilisateurs peuvent supprimer toutes les traces de saisie simplement en effaçant le lien de résultat dans la barre d'adresse de leur navigateur.",
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
        "En cas de modification de cette politique, la date d'entrée en vigueur et les modifications seront publiées sur cette page. Si le contenu du traitement change réellement, comme le début de la diffusion de publicités ou la vente de produits payants, nous informerons d'abord de la modification."
      ]
    }
  ],
  "effectiveLabel": "Date d'entrée en vigueur"
};

const d1 = {
  "title": "Conditions d'utilisation",
  "intro": "Ces conditions définissent les conditions d'utilisation du service Dreams-Link (ci-après dénommé « service »). En utilisant le service, vous acceptez ces conditions.",
  "sections": [
    {
      "heading": "1. Nature du service",
      "paragraphs": [
        "Le service recherche des symboles de rêve dans les rêves que les utilisateurs soumettent et fournit des références sur la signification de ces symboles selon la tradition. Il est indiqué qu'aucun symbole non répertorié ne sera trouvé et qu'aucune signification ne sera inventée.",
        "Les symboles et interprétations présentés sont des **références selon une perspective d'interprétation traditionnelle et ne constituent pas des prévisions sur l'avenir ni des conseils médicaux, financiers ou juridiques.** Un bon rêve ne garantit pas qu'un événement se produira, et un mauvais rêve ne signifie pas qu'un événement est prévu.",
        "**Les résultats liés aux rêves de conception ne déterminent pas la grossesse ni le sexe de l'enfant.** Nous vous informerons uniquement des symboles traditionnellement considérés comme des rêves de conception et de leur contexte."
      ]
    },
    {
      "heading": "2. Frais d'utilisation",
      "paragraphs": [
        "Le service est actuellement entièrement gratuit et ne nécessite pas d'inscription.",
        "Lorsque la vente de produits payants (image de carte de rêve, rapport de rêve de conception en PDF) commencera, les conditions de l'article 3 ci-dessous s'appliqueront. Ces conditions seront à nouveau communiquées avant le début de la vente."
      ]
    },
    {
      "heading": "3. Produits payants et remboursements",
      "paragraphs": [
        "Les produits payants proposés sont **deux types**. L'interprétation gratuite peut être utilisée sans paiement, tandis que les deux produits ci-dessous sont fournis sous une forme qui permet de conserver les résultats.",
        "**Carte de rêve** — Il s'agit d'un fichier image unique. Elle conserve et permet de partager les symboles et significations traditionnelles du rêve de ce jour. **Ce n'est pas un document (PDF).** Paiement national {priceCardDomestic} (TVA incluse), paiement international {priceCardGlobal}.",
        "**Rapport de rêve de conception en PDF** — 4 pages. Ce document contient la signification traditionnelle des symboles et leur contexte. **Il ne détermine pas la grossesse** — nous vous informerons uniquement que des symboles traditionnellement considérés comme des rêves de conception sont apparus dans le rêve. Paiement national {priceConceptionDomestic} (TVA incluse), paiement international {priceConceptionGlobal}.",
        "Les paiements nationaux peuvent être effectués via Toss Payments en utilisant des cartes de crédit, de débit et des paiements simplifiés (Toss Pay, Kakao Pay, Naver Pay, Payco, etc.), et les paiements internationaux se font via PayPal par l'intermédiaire de PortOne. Le montant final est celui affiché à l'écran de paiement.",
        "**Le service ne conserve ni les valeurs saisies par l'utilisateur ni les fichiers PDF générés.** Une fois le paiement approuvé, le document est créé et envoyé immédiatement, sans rien laisser sur le serveur. Par conséquent, le fichier téléchargé doit être conservé par l'utilisateur.",
        "En cas d'interruption du téléchargement ou de perte du fichier, il est possible de le télécharger à nouveau **jusqu'à 5 fois** avec la même commande. Cependant, si les valeurs saisies disparaissent en dehors de l'écran de résultats, il ne sera pas possible de les recréer, donc veuillez enregistrer le fichier immédiatement après le paiement."
      ],
      "bullets": [
        "**Avant le début du téléchargement après le paiement, vous pouvez** annuler à tout moment et obtenir un remboursement intégral.",
        "**Après la fin du téléchargement,** le droit de rétractation pour simple changement d'avis est limité. Il s'agit de contenu numérique fourni immédiatement et qui ne peut pas être restitué, ce qui correspond aux motifs de limitation du droit de rétractation définis à l'article 17, paragraphe 2 de la loi sur la protection des consommateurs dans le commerce électronique.",
        "**En cas d'erreur système empêchant la création du document, de fichier ne s'ouvrant pas, ou si le montant payé diffère de la commande,** cela sera traité par un réémission ou un remboursement intégral.",
        "**Les plaintes concernant le contenu des résultats** ne constituent pas un motif de remboursement. Les résultats d'interprétation sont des références selon une perspective d'interprétation traditionnelle, et cette nature est expliquée avant le paiement (voir l'article 1 ci-dessus).",
        "Les demandes de réémission après avoir utilisé les 5 réémissions sont considérées comme ne constituant pas un motif de remboursement.",
        "**Si un mineur effectue un paiement sans le consentement de son représentant légal,** celui-ci ou le mineur peut annuler ce paiement. Veuillez nous en informer aux coordonnées ci-dessous pour obtenir un remboursement."
      ]
    },
    {
      "heading": "4. Concernant les résultats d'interprétation",
      "paragraphs": [
        "Les règles de recherche des symboles suivent un dictionnaire public et une procédure établie, donc si le même texte est saisi, les mêmes symboles apparaîtront toujours.",
        "Plus vous écrivez brièvement, moins il y aura de symboles trouvés. Les symboles non répertoriés ne seront pas trouvés, et dans ce cas, le résultat sera laissé vide.",
        "Le dictionnaire de symboles est une compilation de la littérature d'interprétation des rêves et des traditions orales, et les interprétations peuvent varier selon les régions et les époques."
      ]
    },
    {
      "heading": "5. Responsabilité de l'utilisateur",
      "paragraphs": [
        "L'utilisateur peut écrire sur les rêves d'autrui, mais ne doit pas utiliser les résultats de manière à nuire à autrui.",
        "Ne pas utiliser les résultats du service comme base pour des décisions affectant les droits ou intérêts des personnes, tels que la grossesse, la santé, les investissements ou l'embauche. Le service n'est pas conçu à cette fin."
      ]
    },
    {
      "heading": "6. Comportements interdits",
      "paragraphs": [
        "Les comportements suivants ne sont pas autorisés."
      ],
      "bullets": [
        "Envoyer des demandes excessives à l'aide d'outils automatisés qui perturbent le fonctionnement du service",
        "Présenter les résultats du service comme des faits ou des résultats d'experts",
        "Dupliquer ou modifier le service pour fournir un service identique"
      ]
    },
    {
      "heading": "7. Exonération de responsabilité",
      "paragraphs": [
        "Le service ne fournit que des références et ne sera pas responsable des décisions prises par l'utilisateur sur la base des résultats et de leurs conséquences.",
        "En cas d'interruption du service pour des raisons indépendantes de notre volonté, telles que des catastrophes naturelles ou des pannes de fournisseurs d'infrastructure, nous ne serons pas responsables des dommages causés."
      ]
    },
    {
      "heading": "8. Droits de propriété intellectuelle",
      "paragraphs": [
        "Les droits sur l'interface du service, les phrases et la mise en œuvre des règles de calcul appartiennent à l'opérateur. L'utilisateur peut enregistrer ou partager les résultats à des fins personnelles."
      ]
    },
    {
      "heading": "9. Modifications des conditions et loi applicable",
      "paragraphs": [
        "En cas de modification des conditions, elles seront publiées sur cette page avec la date d'entrée en vigueur.",
        "Ces conditions sont régies par la loi de la République de Corée, et les litiges liés à l'utilisation du service seront traités conformément aux procédures définies par les lois pertinentes."
      ]
    }
  ],
  "effectiveLabel": "Date d'entrée en vigueur"
};

const d2 = {
  "title": "Politique de remboursement et d'annulation",
  "intro": "Critères d'annulation et de remboursement pour les produits payants. Nous avons rassemblé des informations similaires à l'article 3 des conditions générales.",
  "sections": [
    {
      "heading": "1. Nature des produits",
      "paragraphs": [
        "Les produits vendus sont une **carte de rêve (꿈 카드)** (image unique) et un **rapport de rêve de conception (태몽 리포트)** (PDF), qui sont tous deux des contenus numériques créés et envoyés immédiatement après l'approbation du paiement.",
        "**Le service ne conserve ni le rêve que vous avez écrit ni le fichier créé.** Par conséquent, le fichier téléchargé doit être conservé par l'utilisateur."
      ],
      "bullets": []
    },
    {
      "heading": "2. Droit de rétractation",
      "paragraphs": [
        "Nous suivons les critères établis par la loi sur le commerce électronique."
      ],
      "bullets": [
        "**Avant le début du téléchargement,** vous pouvez annuler à tout moment et obtenir un remboursement intégral.",
        "**Après la fin du téléchargement,** le droit de rétractation pour simple changement d'avis est limité. Il s'agit de contenus numériques fournis immédiatement après le paiement, et cela correspond aux motifs de restriction définis à l'article 17, paragraphe 2 de la loi sur la protection des consommateurs dans le commerce électronique. Cela est préalablement indiqué et accepté sur l'écran de paiement."
      ]
    },
    {
      "heading": "3. Cas de remboursement intégral",
      "paragraphs": [
        "Dans les cas suivants, après vérification des raisons, nous procéderons à un réémission ou à un remboursement intégral."
      ],
      "bullets": [
        "En cas d'erreur système empêchant la création du fichier",
        "Si le fichier téléchargé ne s'ouvre pas",
        "Si le montant payé diffère de la commande",
        "**Si un mineur a effectué le paiement sans le consentement de son représentant légal** — La personne concernée ou son représentant légal peut demander l'annulation."
      ]
    },
    {
      "heading": "4. Cas non remboursables",
      "paragraphs": [],
      "bullets": [
        "**Insatisfaction concernant le contenu des résultats.** Les résultats d'interprétation des rêves sont des références basées sur une perspective d'interprétation traditionnelle, et leur nature est expliquée avant le paiement. Cela inclut les cas où les symboles présents dans le rêve ne sont pas trouvés, ce qui entraîne des résultats courts — afin de ne pas inventer de significations inexistantes.",
        "Demande de réémission après avoir utilisé les 5 réémissions autorisées."
      ]
    },
    {
      "heading": "5. Méthode de soumission",
      "paragraphs": [
        "Les demandes de remboursement ou d'informations doivent être soumises au service client ({customerCenter}) ou par e-mail ({email}). Si vous fournissez votre numéro de commande, cela facilitera la vérification.",
        "Les remboursements seront effectués par le moyen de paiement utilisé, et en fonction des conditions de la société de carte ou de paiement, cela peut prendre de 3 à 7 jours ouvrables pour être reflété."
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
        "**La consultation des rêves et l'affichage des résultats sont gratuits.** Aucune inscription n'est requise.",
        "Vous pouvez voir à l'écran les symboles trouvés dans le rêve, leur signification ainsi que ce que ces symboles indiquent ensemble. Les rêves étant quelque chose que l'on fait chaque jour, ce service ne limite pas les consultations."
      ]
    },
    {
      "heading": "2. Carte de rêve (payant)",
      "paragraphs": [
        "Paiement national {priceCardDomestic} (TVA incluse) · Paiement international {priceCardGlobal}",
        "Nous vous fournissons le résultat à l'écran sous la forme d'une **image unique**. C'est un format facile à conserver ou à envoyer, et ce n'est pas un **document PDF.**",
        "Vous pouvez le télécharger à nouveau **jusqu'à 5 fois** avec la même commande. Cependant, si vous quittez l'écran des résultats et que les valeurs saisies disparaissent, vous ne pourrez pas le recréer, donc veuillez enregistrer le fichier immédiatement après le paiement."
      ]
    },
    {
      "heading": "3. Rapport de rêve de conception PDF (payant)",
      "paragraphs": [
        "Paiement national {priceConceptionDomestic} (TVA incluse) · Paiement international {priceConceptionGlobal}",
        "Lorsque des symboles traditionnellement considérés comme des rêves de conception apparaissent, nous vous fournissons un résumé de la signification de ces symboles et de leur contexte dans un PDF de 4 pages. **Nous ne déterminons pas la grossesse ni le sexe du fœtus.**",
        "Les conditions de réémission sont les mêmes que pour la carte de rêve."
      ]
    },
    {
      "heading": "4. Méthodes de paiement",
      "paragraphs": [
        "**National** — Vous pouvez utiliser des cartes de crédit ou de débit et des paiements simplifiés (Toss Pay, KakaoPay, Naver Pay, Payco, etc.) via Toss Payments.",
        "**International** — Vous pouvez payer via PayPal par l'intermédiaire de PortOne.",
        "Le montant final du paiement est celui affiché à l'écran de paiement."
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
  "intro": "Dreams-Link ne conserve pas d'informations nécessaires à l'interprétation des rêves. Cette politique décrit ce que le service reçoit, ce qu'il ne conserve pas et ce qui est enregistré automatiquement.",
  "sections": [
    {
      "heading": "1. Informations non conservées",
      "paragraphs": [
        "Les récits de rêves que vous soumettez pour l'interprétation, vos sentiments au réveil, et si vous faites des rêves récurrents ne sont **pas enregistrés nulle part.** Ils sont uniquement utilisés en mémoire serveur pendant le traitement de la demande et disparaissent avec la réponse.",
        "Aucune donnée n'est enregistrée dans une base de données, et il n'y a pas de fichiers séparés. Comme il n'y a pas d'inscription, les valeurs saisies ne sont pas liées à une personne spécifique.",
        "Les récits de rêves sont les valeurs les plus personnelles que ce service reçoit. C'est pourquoi il n'y a pas de fonction pour revoir les résultats passés (journal de rêves) — cette fonction nécessiterait de conserver les écrits que vous avez soumis."
      ]
    },
    {
      "heading": "2. Informations contenues dans le lien de résultat",
      "paragraphs": [
        "L'adresse de l'écran de résultat contient les valeurs saisies sous forme codée. Cependant, cette valeur se trouve après le # dans l'adresse, et selon les normes web, le contenu après le # n'est pas envoyé au serveur par le navigateur. Par conséquent, même si vous ouvrez le lien de résultat, seul le chemin de l'adresse reste dans les enregistrements d'accès du serveur.",
        "Si vous envoyez le lien de résultat à une autre personne, elle pourra également voir le même résultat. Le lien lui-même contient les valeurs saisies, donc la décision de partager appartient à l'utilisateur."
      ]
    },
    {
      "heading": "3. Informations collectées automatiquement",
      "paragraphs": [
        "Il n'y a pas d'informations collectées par le service pour identifier les utilisateurs. Cependant, un minimum d'enregistrements nécessaires au fonctionnement du service est automatiquement conservé par le fournisseur d'infrastructure."
      ],
      "bullets": [
        "Adresse IP d'accès, date et heure d'accès, type de navigateur, etc. en tant qu'enregistrements d'accès serveur généraux",
        "Informations sur le pays — utilisées uniquement pour déterminer automatiquement la langue de l'écran et ne sont pas conservées"
      ]
    },
    {
      "heading": "4. Cookies et publicité",
      "paragraphs": [
        "Le service lui-même n'utilise pas de cookies pour identifier ou suivre les utilisateurs. Les récits de rêves que vous soumettez ne sont pas transmis aux annonceurs.",
        "Ce service affiche des publicités via Google AdSense. Dans ce processus, les événements suivants se produisent."
      ],
      "bullets": [
        "Des fournisseurs tiers, y compris Google, peuvent stocker ou lire des cookies dans le navigateur de l'utilisateur.",
        "Google utilise des cookies pour afficher des publicités basées sur l'historique de visites de ce site et d'autres sites.",
        "L'utilisateur peut désactiver les publicités personnalisées dans les paramètres publicitaires de Google (google.com/settings/ads). Même si désactivées, les publicités continueront d'apparaître, mais leur pertinence pour l'utilisateur sera réduite.",
        "Les publicités personnalisées de tous les fournisseurs tiers peuvent être désactivées en une seule fois sur aboutads.info/choices.",
        "Il est également possible de bloquer les cookies dans les paramètres du navigateur.",
        "Pour les utilisateurs de l'Espace économique européen, du Royaume-Uni et de la Suisse, le consentement à l'utilisation des cookies publicitaires est demandé au préalable."
      ]
    },
    {
      "heading": "5. Informations conservées lors du paiement",
      "paragraphs": [
        "Actuellement, aucun produit payant n'est vendu, donc aucune information liée au paiement n'est conservée.",
        "Lorsque la vente commence, les éléments suivants seront conservés pour le traitement des paiements et la conservation des enregistrements de transactions conformément à la législation. **À ce moment-là, les rêves que vous avez soumis et les fichiers créés ne seront pas conservés**, et aucune information permettant d'identifier l'utilisateur, comme le nom, les coordonnées ou l'adresse, ne sera collectée."
      ],
      "bullets": [
        "Numéro de commande et identifiant de paiement",
        "Montant du paiement, devise et état du paiement (non payé, payé, annulé)",
        "Type de produit, état de traitement, nombre de téléchargements de documents, date de commande",
        "Langue de l'écran au moment de la commande et distinction de la région de paiement (domestique, international)",
        "Durée de conservation — Selon l'article 6 de la loi sur la protection des consommateurs dans le commerce électronique, les enregistrements concernant le paiement et la fourniture de biens seront conservés pendant 5 ans, et les enregistrements concernant les plaintes ou les litiges des consommateurs seront conservés pendant 3 ans avant d'être détruits."
      ]
    },
    {
      "heading": "6. Fourniture à des tiers et sous-traitance",
      "paragraphs": [
        "Il n'y a pas de données personnelles conservées, donc aucune donnée personnelle n'est fournie à des tiers.",
        "Pour le fonctionnement du service, l'infrastructure d'hébergement de {hostingProvider} est utilisée, et dans ce processus, les enregistrements d'accès mentionnés au point 3 sont traités selon la politique de ce fournisseur.",
        "Lorsque la vente de produits payants commence, les paiements nationaux sont confiés à Toss Payments, et les paiements internationaux à PortOne (PayPal). Les informations sur les moyens de paiement, telles que les numéros de carte et de compte, sont également traitées directement par ces entreprises, et le service ne les reçoit pas."
      ]
    },
    {
      "heading": "7. Droits des utilisateurs",
      "paragraphs": [
        "Il n'y a pas de données personnelles conservées, donc il n'y a pas de demande d'accès, de correction ou de suppression à adresser.",
        "L'utilisateur peut effacer toutes les traces de saisie simplement en supprimant le lien de résultat dans la barre d'adresse du navigateur.",
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
        "En cas de modification de cette politique, la date d'entrée en vigueur et les modifications seront publiées sur cette page. Si le contenu du traitement change réellement, par exemple avec le début de la diffusion de publicités ou la vente de produits payants, nous informerons d'abord de la modification."
      ]
    }
  ],
  "effectiveLabel": "Date d'entrée en vigueur"
};

const d5 = {
  "title": "Politique de traitement des données personnelles",
  "intro": "Dreams-Link ne conserve pas les informations nécessaires à l'interprétation des rêves. Cette politique décrit ce que le service reçoit, ce qu'il ne conserve pas et ce qui est enregistré automatiquement.",
  "sections": [
    {
      "heading": "1. Informations non conservées",
      "paragraphs": [
        "Les récits de rêves que vous soumettez pour l'interprétation, vos sentiments au réveil et si vous faites des rêves récurrents ne sont **pas conservés nulle part.** Ils sont utilisés uniquement en mémoire serveur pendant le traitement de la demande et disparaissent avec la réponse.",
        "Aucune donnée n'est enregistrée dans la base de données et aucun fichier séparé n'est conservé. Comme il n'y a pas d'inscription, les valeurs saisies ne sont pas liées à une personne spécifique.",
        "Les récits de rêves sont les valeurs les plus personnelles que ce service reçoit. C'est pourquoi il n'y a pas de fonctionnalité pour revoir les résultats passés (journal de rêves) — cette fonctionnalité nécessiterait de conserver les écrits que vous avez soumis."
      ]
    },
    {
      "heading": "2. Informations contenues dans le lien de résultat",
      "paragraphs": [
        "L'adresse de l'écran de résultats contient les valeurs saisies sous forme codée. Cependant, cette valeur se trouve après le # dans l'adresse, et selon les normes web, le contenu après le # n'est pas envoyé au serveur par le navigateur. Par conséquent, même si vous ouvrez le lien de résultat, seul le chemin de l'adresse reste dans les enregistrements de connexion du serveur.",
        "Si vous envoyez le lien de résultat à une autre personne, cette personne pourra également voir le même résultat. Le lien lui-même contient les valeurs saisies, donc la décision de partager appartient à l'utilisateur."
      ]
    },
    {
      "heading": "3. Informations collectées automatiquement",
      "paragraphs": [
        "Aucune information n'est collectée pour identifier l'utilisateur. Cependant, un minimum d'enregistrements nécessaires au fonctionnement du service est automatiquement conservé par le fournisseur d'infrastructure."
      ],
      "bullets": [
        "Adresse IP de connexion, date et heure de connexion, type de navigateur, etc. — enregistrements de connexion serveur généraux",
        "Informations sur le pays — utilisées uniquement pour déterminer automatiquement la langue de l'écran et non conservées"
      ]
    },
    {
      "heading": "4. Cookies et publicités",
      "paragraphs": [
        "Le service lui-même n'utilise pas de cookies pour suivre les utilisateurs.",
        "Actuellement, ce service ne diffuse pas de publicités. Si des publicités sont diffusées à l'avenir, le fournisseur de publicités (par exemple, Google) peut utiliser des cookies pour la diffusion des annonces. Dans ce cas, cette clause sera d'abord modifiée pour expliquer ce qui change avant de commencer."
      ]
    },
    {
      "heading": "5. Informations conservées lors du paiement",
      "paragraphs": [
        "Lors de l'achat de produits payants (carte de rêve, rapport de rêve de conception), les informations de commande sont conservées pour le traitement du paiement et la conservation des enregistrements de transaction conformément à la législation.",
        "**Les rêves que vous avez soumis et les fichiers créés ne sont pas conservés même après le paiement.** Le principe énoncé au point 1 reste inchangé, indépendamment du paiement. Les éléments conservés sont les suivants, et aucune information permettant d'identifier l'utilisateur, comme le nom, les coordonnées ou l'adresse, n'est incluse."
      ],
      "bullets": [
        "Numéro de commande et identifiant de paiement",
        "Montant du paiement, devise et état du paiement (non payé, payé, annulé)",
        "Type de produit, état de traitement, nombre de téléchargements de documents, heure de commande",
        "Langue de l'écran au moment de la commande et distinction de la région de paiement (domestique, international)",
        "Durée de conservation — Conformément à l'article 6 de la loi sur la protection des consommateurs dans le commerce électronique, les enregistrements relatifs au paiement et à la fourniture de biens sont conservés pendant 5 ans, et les enregistrements relatifs aux plaintes ou aux litiges des consommateurs sont conservés pendant 3 ans avant d'être détruits."
      ]
    },
    {
      "heading": "6. Fourniture à des tiers et sous-traitance",
      "paragraphs": [
        "Aucune donnée personnelle permettant d'identifier l'utilisateur n'est conservée, donc aucune donnée personnelle n'est fournie à des tiers. Le traitement des paiements est sous-traité aux entreprises suivantes.",
        "L'infrastructure d'hébergement de {hostingProvider} est utilisée pour le fonctionnement du service, et dans ce processus, les enregistrements de connexion mentionnés au point 3 sont traités conformément à la politique de cette entreprise.",
        "Les paiements nationaux sont traités par Toss Payments, tandis que les paiements internationaux sont traités par PayPal via PortOne. Les informations sur les moyens de paiement, telles que les numéros de carte et de compte, sont directement traitées par ces entreprises, et le service ne les reçoit ni ne les conserve."
      ]
    },
    {
      "heading": "7. Droits de l'utilisateur",
      "paragraphs": [
        "Les rêves que vous avez soumis ne sont pas conservés, donc il n'y a pas de demande d'accès, de correction ou de suppression à adresser. Les enregistrements de commande restants après paiement doivent être conservés pendant la période définie par la loi, et ils ne peuvent pas être supprimés pendant cette période, mais seront détruits après cette période.",
        "L'utilisateur peut supprimer toutes les traces de saisie simplement en effaçant le lien de résultat dans la barre d'adresse du navigateur.",
        "Pour toute question concernant l'utilisation du service, veuillez nous contacter aux coordonnées ci-dessous."
      ]
    },
    {
      "heading": "8. Informations personnelles des enfants",
      "paragraphs": [
        "Ce service n'est pas destiné aux enfants de moins de 14 ans et ne collecte pas d'informations personnelles auprès des enfants."
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

const d6 = {
  "title": "Conditions d'utilisation",
  "intro": "Ces conditions définissent les modalités d'utilisation du service Dreams-Link (ci-après dénommé « service »). En utilisant le service, vous acceptez ces conditions.",
  "sections": [
    {
      "heading": "1. Nature du service",
      "paragraphs": [
        "Le service permet à l'utilisateur de rechercher des symboles de rêve dans les rêves qu'il a écrits, et de fournir des références sur la signification de ces symboles selon la tradition. Nous ne dirons pas que nous n'avons pas trouvé de symboles qui ne figurent pas dans le dictionnaire.",
        "Les symboles et interprétations présentés sont des **références selon une perspective d'interprétation traditionnelle, et ne constituent pas des prévisions sur l'avenir ni des conseils médicaux, financiers ou juridiques.** Un bon rêve ne garantit pas qu'un événement se produira, et un mauvais rêve ne signifie pas qu'un événement est inévitable.",
        "**Les résultats liés aux rêves de conception ne déterminent pas la grossesse ni le sexe de l'enfant.** Nous vous informerons uniquement des symboles traditionnellement considérés comme des rêves de conception qui apparaissent dans le rêve et de leur contexte."
      ]
    },
    {
      "heading": "2. Frais d'utilisation",
      "paragraphs": [
        "La consultation des rêves et la visualisation des résultats sont gratuites et ne nécessitent pas d'inscription.",
        "Recevoir les résultats sous forme de carte de rêve (image) ou de rapport de rêve de conception (PDF) est payant. Les prix et conditions sont affichés dans la section 3 ci-dessous et sur l'écran de paiement."
      ]
    },
    {
      "heading": "3. Produits payants et remboursements",
      "paragraphs": [
        "Les produits payants que nous proposons sont **deux**. Vous pouvez utiliser l'interprétation gratuite sans paiement, et les deux produits ci-dessous vous permettent de conserver les résultats sous une forme tangible.",
        "**Carte de rêve** — Il s'agit d'un fichier image unique. Elle conserve et permet de partager les symboles et significations traditionnelles du rêve que vous avez fait ce jour-là. **Ce n'est pas un document (PDF).** Paiement national {priceCardDomestic} (TVA incluse), paiement international {priceCardGlobal}.",
        "**Rapport de rêve de conception PDF** — 4 pages. Il contient la signification traditionnelle des symboles et leur contexte sous forme de document. **Il ne détermine pas la grossesse** — nous vous informerons uniquement que des symboles traditionnellement considérés comme des rêves de conception sont apparus dans le rêve. Paiement national {priceConceptionDomestic} (TVA incluse), paiement international {priceConceptionGlobal}.",
        "Pour les paiements nationaux, vous pouvez utiliser des cartes de crédit ou de débit et des paiements simplifiés (Toss Pay, Kakao Pay, Naver Pay, Payco, etc.) via Toss Payments, et pour les paiements internationaux, via PayPal par PortOne. Le montant final est celui affiché sur l'écran de paiement.",
        "**Le service ne conserve ni les données saisies par l'utilisateur ni les fichiers PDF générés.** Une fois le paiement approuvé, le document est créé et envoyé immédiatement, sans rien conserver sur le serveur. Par conséquent, le fichier téléchargé doit être conservé par l'utilisateur.",
        "En cas d'interruption du téléchargement ou de perte du fichier, il est possible de le télécharger à nouveau **jusqu'à 5 fois** avec la même commande. Cependant, si vous quittez l'écran des résultats et que les données saisies disparaissent, il ne sera pas possible de le recréer, donc veuillez sauvegarder le fichier immédiatement après le paiement."
      ],
      "bullets": [
        "**Avant le début du téléchargement après le paiement, vous pouvez** annuler à tout moment et obtenir un remboursement intégral.",
        "**Après la fin du téléchargement,** le droit de rétractation pour simple changement d'avis est limité. Il s'agit de contenu numérique fourni immédiatement après le paiement, et cela correspond aux raisons de limitation du droit de rétractation définies à l'article 17, paragraphe 2 de la loi sur la protection des consommateurs dans le commerce électronique.",
        "**En cas d'erreur système empêchant la création du document, de fichier ne s'ouvrant pas ou de montant de paiement différent de la commande,** un réémission ou un remboursement intégral sera effectué.",
        "**Les plaintes concernant le contenu des résultats** ne constituent pas un motif de remboursement. Les résultats d'interprétation sont des références selon une perspective d'interprétation traditionnelle, et leur nature est expliquée avant le paiement (voir point 1 ci-dessus).",
        "Les demandes de remboursement après avoir utilisé les 5 réémissions sont considérées comme non valables.",
        "**Si un mineur effectue un paiement sans le consentement de son représentant légal,** lui-même ou son représentant légal peut annuler ce paiement. Veuillez nous en informer aux coordonnées ci-dessous pour obtenir un remboursement."
      ]
    },
    {
      "heading": "4. Concernant les résultats d'interprétation",
      "paragraphs": [
        "Les règles de recherche des symboles suivent un dictionnaire public et une procédure établie, donc si vous écrivez le même texte, vous obtiendrez toujours les mêmes symboles.",
        "Plus vous écrivez brièvement, moins il y aura de symboles. Nous ne pouvons pas trouver des symboles qui ne figurent pas dans le dictionnaire, et dans ce cas, nous laisserons le résultat vide.",
        "Le dictionnaire des symboles est une compilation de documents d'interprétation des rêves transmis et de traditions orales, et les interprétations peuvent varier selon les régions et les époques."
      ]
    },
    {
      "heading": "5. Responsabilité de l'utilisateur",
      "paragraphs": [
        "L'utilisateur peut écrire les rêves d'autrui, mais il ne doit pas utiliser les résultats de manière à nuire à autrui.",
        "Ne pas utiliser les résultats du service comme base pour des décisions affectant les droits ou intérêts des personnes, tels que la grossesse, la santé, les investissements ou l'embauche. Le service n'est pas conçu à cette fin."
      ]
    },
    {
      "heading": "6. Comportements interdits",
      "paragraphs": [
        "Les actions suivantes ne sont pas autorisées."
      ],
      "bullets": [
        "Envoyer des demandes excessives avec des outils automatisés qui perturbent le fonctionnement du service",
        "Présenter les résultats du service comme des faits ou des résultats d'expertise",
        "Dupliquer ou modifier le service pour fournir un service identique"
      ]
    },
    {
      "heading": "7. Exonération de responsabilité",
      "paragraphs": [
        "Le service ne fournit que des références et ne prend aucune responsabilité pour les décisions prises par l'utilisateur sur la base des résultats et leurs conséquences.",
        "En cas d'interruption du service pour des raisons indépendantes de notre volonté, telles que des catastrophes naturelles ou des défaillances des fournisseurs d'infrastructure, nous ne serons pas responsables des dommages en résultant."
      ]
    },
    {
      "heading": "8. Droits de propriété intellectuelle",
      "paragraphs": [
        "Les droits sur l'interface du service, les phrases et les mises en œuvre des règles de calcul appartiennent à l'opérateur. L'utilisateur peut enregistrer ou partager les résultats à des fins personnelles."
      ]
    },
    {
      "heading": "9. Modifications des conditions et loi applicable",
      "paragraphs": [
        "En cas de modification des conditions, elles seront publiées sur cette page avec la date d'entrée en vigueur.",
        "Ces conditions sont régies par la loi de la République de Corée, et tout litige lié à l'utilisation du service sera traité conformément aux procédures définies par la législation applicable."
      ]
    }
  ],
  "effectiveLabel": "Date d'entrée en vigueur"
};

const d7 = {
  "title": "Politique de traitement des données personnelles",
  "intro": "Dreams-Link ne conserve pas d'informations nécessaires à l'interprétation des rêves. Cette politique décrit ce que le service reçoit, ce qu'il ne conserve pas et ce qui est enregistré automatiquement.",
  "sections": [
    {
      "heading": "1. Informations non conservées",
      "paragraphs": [
        "Les récits de rêves que vous soumettez pour l'interprétation, vos sentiments au réveil, et si vous faites des rêves récurrents ne sont **pas enregistrés nulle part.** Ils sont utilisés uniquement en mémoire serveur pendant le traitement de la demande et disparaissent avec la réponse.",
        "Aucune donnée n'est enregistrée dans une base de données, ni conservée dans un fichier séparé. Comme il n'y a pas d'inscription, les valeurs saisies ne sont pas liées à une personne spécifique.",
        "Les récits de rêves sont les valeurs les plus privées que ce service reçoit. C'est pourquoi il n'y a pas de fonctionnalité pour revoir les résultats précédents (journal de rêves) — cette fonctionnalité nécessiterait de conserver les écrits que vous avez soumis."
      ]
    },
    {
      "heading": "2. Informations contenues dans le lien de résultat",
      "paragraphs": [
        "L'adresse de l'écran de résultats contient des valeurs codées. Cependant, cette valeur se trouve après le # dans l'adresse, et selon les normes web, le contenu après le # n'est pas envoyé au serveur par le navigateur. Par conséquent, même si vous ouvrez le lien de résultat, seul le chemin de l'adresse reste dans les journaux d'accès du serveur.",
        "Si vous envoyez le lien de résultat à une autre personne, cette personne pourra également voir le même résultat. Le lien lui-même contient les valeurs saisies, donc la décision de partager appartient à l'utilisateur."
      ]
    },
    {
      "heading": "3. Informations collectées automatiquement",
      "paragraphs": [
        "Il n'y a pas d'informations collectées par le service pour identifier les utilisateurs. Cependant, un minimum d'enregistrements nécessaires au fonctionnement du service est automatiquement conservé par le fournisseur d'infrastructure."
      ],
      "bullets": [
        "Adresse IP d'accès, date et heure d'accès, type de navigateur, etc., enregistrements d'accès serveur généraux",
        "Informations sur le pays — utilisées uniquement pour déterminer automatiquement la langue de l'écran et non conservées"
      ]
    },
    {
      "heading": "4. Cookies et publicité",
      "paragraphs": [
        "Le service lui-même n'utilise pas de cookies pour identifier ou suivre les utilisateurs. Les récits de rêves que vous soumettez ne sont pas transmis aux annonceurs.",
        "Ce service affiche des publicités via Google AdSense. Dans ce processus, les événements suivants se produisent."
      ],
      "bullets": [
        "Des fournisseurs tiers, y compris Google, peuvent stocker ou lire des cookies dans le navigateur de l'utilisateur.",
        "Google utilise des cookies pour afficher des publicités basées sur l'historique de visites de ce site et d'autres sites.",
        "L'utilisateur peut désactiver les publicités personnalisées dans les paramètres publicitaires de Google (google.com/settings/ads). Même si désactivées, les publicités continueront d'apparaître, mais leur pertinence pour l'utilisateur sera réduite.",
        "Les publicités personnalisées de tous les fournisseurs tiers peuvent être désactivées en une seule fois sur aboutads.info/choices.",
        "Il est également possible de bloquer les cookies dans les paramètres du navigateur.",
        "Pour les utilisateurs de l'Espace économique européen, du Royaume-Uni et de la Suisse, le consentement à l'utilisation des cookies publicitaires est demandé au préalable."
      ]
    },
    {
      "heading": "5. Informations conservées lors du paiement",
      "paragraphs": [
        "Lorsque vous effectuez un paiement pour des produits payants (carte de rêve, rapport de rêve de conception), les informations de commande sont conservées pour le traitement du paiement et la conservation des enregistrements de transactions conformément à la législation.",
        "**Les rêves que vous avez soumis et les fichiers créés ne sont pas conservés même en cas de paiement.** Le principe énoncé au point 1 reste inchangé, indépendamment du paiement. Les éléments conservés sont les suivants, et aucune information permettant d'identifier l'utilisateur, comme le nom, les coordonnées ou l'adresse, n'est incluse."
      ],
      "bullets": [
        "Numéro de commande et identifiant de paiement",
        "Montant du paiement, devise et état du paiement (non payé, payé, annulé)",
        "Type de produit, état de traitement, nombre de téléchargements de documents, heure de commande",
        "Langue de l'écran au moment de la commande et distinction de la région de paiement (domestique, international)",
        "Durée de conservation — Conformément à l'article 6 de la loi sur la protection des consommateurs dans le commerce électronique, les enregistrements relatifs au paiement et à la fourniture de biens sont conservés pendant 5 ans, et les enregistrements relatifs aux plaintes ou litiges des consommateurs sont conservés pendant 3 ans avant d'être détruits."
      ]
    },
    {
      "heading": "6. Fourniture à des tiers et sous-traitance",
      "paragraphs": [
        "Étant donné que nous ne conservons pas de données personnelles permettant d'identifier les utilisateurs, il n'y a pas de données personnelles fournies à des tiers. Le traitement des paiements est sous-traité aux entreprises suivantes.",
        "Nous utilisons l'infrastructure d'hébergement de {hostingProvider} pour le fonctionnement du service, et dans ce processus, les enregistrements d'accès du point 3 sont traités conformément à la politique de cette entreprise.",
        "Les paiements nationaux sont traités par Toss Payments, tandis que les paiements internationaux sont traités par PayPal via PortOne. Les informations de paiement telles que les numéros de carte et de compte sont directement traitées par ces entreprises, et le service ne les reçoit ni ne les conserve."
      ]
    },
    {
      "heading": "7. Droits des utilisateurs",
      "paragraphs": [
        "Étant donné que les rêves que vous avez soumis ne sont pas conservés, il n'y a pas de demande d'accès, de correction ou de suppression à adresser. Les enregistrements de commande restants en cas de paiement doivent être conservés pendant la période définie par la loi, et ne peuvent donc pas être supprimés pendant cette période, mais seront détruits après cette période.",
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
