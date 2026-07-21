import { companyInfo, LEGAL_EFFECTIVE_DATE } from "@/lib/company";
import type { LegalLocaleContent } from "./types";

const content: LegalLocaleContent = {
  labels: {
    effectiveDate: "Date d'entrée en vigueur",
    referenceDate: "Date de référence",
    login: "Connexion",
  },
  documents: {
    terms: {
      title: "Conditions d'utilisation",
      description: `Les présentes conditions décrivent les modalités d'utilisation et l'étendue du service ${companyInfo.serviceName}.`,
      effectiveDate: LEGAL_EFFECTIVE_DATE,
      sections: [
        {
          title: "1. Nature du service",
          paragraphs: [
            "Naming-Link est un studio de nommage basé sur l'IA qui propose les quatre services suivants : (1) l'association de hanja (caractères chinois) porteurs de sens aux prénoms coréens, (2) la conversion de prénoms coréens en prénoms internationaux, (3) la conversion de prénoms étrangers en prénoms coréens, et (4) la transcription phonétique de prénoms internationaux en hangeul.",
            "Les résultats constituent des documents de référence destinés à faciliter le choix et l'interprétation d'un prénom. Ils ne garantissent aucune possibilité d'enregistrement officiel, notamment auprès des registres d'état civil, pour les passeports, les visas, les marques ou les documents juridiques.",
          ],
        },
        {
          title: "2. Utilisation avec ou sans compte",
          paragraphs: [
            "L'analyse de prénoms et le déblocage de candidats par visionnage de publicités sont accessibles sans compte. L'inscription ou la connexion n'est demandée que pour les fonctionnalités nécessitant un compte, telles que la commande d'articles dérivés et la consultation de l'historique des commandes.",
          ],
        },
        {
          title: "3. Résultats de l'IA et responsabilité de vérification",
          paragraphs: [
            "Les recommandations de l'IA comportent des références linguistiques, culturelles et traditionnelles. Avant de choisir définitivement un prénom, l'utilisateur doit en vérifier la pertinence auprès des organismes compétents, d'experts, de locuteurs locaux, et par un examen juridique ou en matière de marques.",
          ],
        },
        {
          title: "4. Services payants",
          paragraphs: [
            "Le service d'association de sens en hanja propose les produits détaillés suivants : (1) explications détaillées pour un maximum de 5 candidats et analyse complète des hanja : ₩2,900 (KRW) ; (2) explications détaillées étendues pour un maximum de 10 candidats, analyse complète des hanja et PDF de collection : ₩4,900 ; (3) détails pour un maximum de 10 candidats, analyse complète des hanja, analyse saju (Quatre Piliers) et Cinq Éléments, et PDF de collection : ₩9,900.",
            "Dans les services de conversion en prénom international, de conversion en prénom coréen et de transcription phonétique en hangeul, un produit débloquant en une seule fois l'ensemble des candidats restants, sans publicité (₩990), peut être proposé. Tant que la fonction de paiement n'est pas activée, seul le déblocage par visionnage de publicités est disponible.",
            "Les rapports détaillés payants, les résultats d'analyse et les fichiers PDF restent consultables et téléchargeables pendant 24 heures après le paiement, puis sont automatiquement supprimés à l'expiration de cette période de conservation.",
            "Les produits physiques, tels que les articles dérivés de prénoms coréens, peuvent être proposés à des prix et conditions distincts. Pour chaque produit payant, le contenu du produit, le prix, le mode de fourniture et les conditions de remboursement sont indiqués à l'écran avant le paiement.",
          ],
        },
        {
          title: "5. Services avec récompense publicitaire",
          paragraphs: [
            "Le déblocage de candidats par visionnage de publicités ne s'applique que lorsque le fournisseur publicitaire a normalement confirmé la récompense. La lecture automatisée de publicités, la manipulation des récompenses et les demandes répétées anormales peuvent être restreintes.",
          ],
        },
        {
          title: "6. Comportements interdits",
          paragraphs: [
            "Sont interdits : la saisie sans autorisation des données personnelles d'autrui, la génération de prénoms à des fins discriminatoires, haineuses ou d'usurpation d'identité, les demandes excessives automatisées, la provocation de dysfonctionnements du service et la présentation mensongère des résultats comme officiellement certifiés.",
          ],
        },
        {
          title: "7. Limitation de responsabilité",
          paragraphs: [
            "Sauf faute intentionnelle ou négligence grave, la société décline toute responsabilité pour les dommages indirects, la perte de gains escomptés, le refus d'enregistrement officiel ou les litiges avec des tiers résultant de l'utilisation des recommandations de l'IA.",
          ],
        },
        {
          title: "8. Contact",
          paragraphs: [`Demandes concernant le service : ${companyInfo.email}`],
        },
      ],
    },
    privacy: {
      title: "Politique de confidentialité",
      description: `La présente politique décrit les règles de traitement des données personnelles de ${companyInfo.serviceName}.`,
      effectiveDate: LEGAL_EFFECTIVE_DATE,
      sections: [
        {
          title: "1. Données personnelles traitées",
          paragraphs: [
            "Lors de l'utilisation des services de prénoms sans compte, le prénom, la date et l'heure de naissance, le pays, la langue, la finalité d'utilisation et les indications de prononciation sont traités temporairement pour générer les résultats d'analyse ; les données saisies et les résultats générés ne sont toutefois pas enregistrés dans la base de données du service.",
            "Lors de l'achat d'un rapport détaillé payant, les informations d'identification de la commande, l'état du paiement ainsi que les données saisies et résultats d'analyse nécessaires à la génération du rapport sont traités pendant la période de conservation (24 heures après le paiement). Les informations relatives aux moyens de paiement, telles que les numéros de carte, sont traitées directement par le prestataire de paiement ; la société ne les conserve pas.",
            "Ce n'est que lors de l'utilisation de la fonction de commande d'articles dérivés que le nom du commanditaire, l'adresse e-mail, le numéro de téléphone, l'adresse de livraison, l'état du paiement et les informations de traitement de la commande peuvent en outre être traités.",
            "Afin d'assurer la stabilité du service et de prévenir les abus, nous pouvons traiter, à titre de journaux d'exploitation minimaux, un hachage de visiteur anonymisé renouvelé quotidiennement, l'heure des requêtes, le type de service, le nombre d'utilisations gratuites, les jetons d'IA, les temps de réponse, l'état de traitement, ainsi que les événements d'affichage publicitaire et de récompense.",
          ],
        },
        {
          title: "2. Finalités du traitement",
          paragraphs: [
            "Les données personnelles sont traitées aux fins suivantes : recommandation de prénoms à partir des données saisies, analyse de la prononciation, analyse linguistique et culturelle par pays, limitation de l'utilisation gratuite, vérification des récompenses publicitaires, réponse aux demandes des clients, traitement des paiements et des livraisons, et prévention des utilisations frauduleuses.",
          ],
        },
        {
          title: "3. Conservation et suppression",
          paragraphs: [
            "Les données saisies et les résultats d'analyse ne sont conservés dans le compte que lorsqu'un membre connecté choisit expressément de les enregistrer ; ils sont supprimés lorsque le membre les efface ou lorsque la finalité de conservation prend fin. Les données saisies et les résultats des utilisateurs sans compte, ainsi que des membres n'ayant pas choisi l'enregistrement, ne sont pas conservés.",
            "Les données saisies, les résultats d'analyse et les fichiers PDF des rapports détaillés payants sont automatiquement supprimés 24 heures après le paiement. Les enregistrements de transactions de paiement et de commande sont conservés séparément pendant les durées légales prévues par la réglementation applicable.",
            "Les informations détaillées de livraison sont supprimées ou anonymisées à l'expiration de la période nécessaire au traitement des commandes, aux retours et à la gestion des litiges.",
          ],
        },
        {
          title: "4. Communication à des tiers et sous-traitance",
          paragraphs: [
            "Pour l'exploitation du service, les informations nécessaires peuvent être traitées par, ou confiées à, Supabase (base de données et authentification), Vercel (hébergement), l'OpenAI API (analyse par IA), des réseaux publicitaires, le prestataire de paiement (PortOne) et des partenaires de livraison et de fabrication.",
          ],
        },
        {
          title: "5. Possibilité de transfert à l'étranger",
          paragraphs: [
            "Dans le cadre de certains traitements — hébergement cloud, authentification, API d'IA, publicité, envoi d'e-mails — les données personnelles peuvent être traitées sur des serveurs situés à l'étranger. Les pays de destination, les sous-traitants, les finalités et les durées de conservation seront communiqués en détail une fois les prestataires de services définitivement désignés.",
          ],
        },
        {
          title: "6. Droits des utilisateurs",
          paragraphs: [
            "Les utilisateurs peuvent demander l'accès à leurs données personnelles, leur rectification, leur suppression, la suspension de leur traitement, ainsi que le retrait de leur consentement. Les demandes sont reçues par e-mail auprès du service client et traitées après vérification de l'identité.",
          ],
        },
        {
          title: "7. Responsable de la protection des données personnelles",
          paragraphs: [
            `Responsable : ${companyInfo.privacyOfficer}`,
            `E-mail : ${companyInfo.email}`,
          ],
        },
      ],
    },
    refund: {
      title: "Politique de remboursement et d'annulation",
      description:
        "La présente politique décrit les conditions d'annulation et de remboursement des produits numériques et des articles dérivés personnalisés.",
      effectiveDate: LEGAL_EFFECTIVE_DATE,
      sections: [
        {
          title: "1. Principes généraux",
          paragraphs: [
            "Une fois la fonction de paiement activée, l'étendue des remboursements possibles peut varier selon le mode de fourniture de chaque produit, le moment du début de la fabrication et l'état du téléchargement. Les conditions précises sont indiquées sur l'écran du produit avant le paiement.",
          ],
        },
        {
          title: "2. Rapports détaillés de hanja (₩2,900 / ₩4,900 / ₩9,900)",
          paragraphs: [
            "L'annulation est possible après le paiement tant que la génération de l'analyse détaillée par l'IA n'a pas commencé. Une fois la génération achevée et le rapport consultable ou téléchargeable, le remboursement pour simple changement d'avis peut être restreint.",
            "En cas d'erreur de contenu, d'échec de génération dû à une défaillance du système ou de montant de paiement non conforme, nous procédons à une nouvelle émission du rapport ou à un remboursement. L'expiration de la période de conservation (24 heures après le paiement) mettant fin au téléchargement ne constitue pas un motif de remboursement.",
          ],
        },
        {
          title: "3. Déblocage de l'ensemble des candidats (₩990)",
          paragraphs: [
            "Le déblocage groupé des candidats dans les services de conversion en prénom international, de conversion en prénom coréen et de transcription phonétique en hangeul est un contenu numérique fourni immédiatement après le paiement. L'annulation est possible avant le début de la consultation des candidats ; après consultation, le remboursement pour simple changement d'avis peut être restreint.",
            "Si les candidats ne sont pas correctement débloqués en raison d'une erreur système, nous procédons à une nouvelle fourniture ou à un remboursement.",
          ],
        },
        {
          title: "4. Articles dérivés personnalisés",
          paragraphs: [
            "Les articles personnalisés peuvent être annulés jusqu'au début de la fabrication. Après le début de la fabrication, le remboursement pour simple changement d'avis peut être restreint ; les fautes de frappe, dommages, erreurs de fabrication ou problèmes de livraison sont traités, après vérification, par échange, refabrication ou remboursement, selon le mode approprié.",
          ],
        },
        {
          title: "5. Déblocage par publicité",
          paragraphs: [
            "Les avantages obtenus par visionnage de publicités ne sont pas des produits payants. Si une récompense n'est pas accordée en raison d'une erreur du réseau publicitaire, la situation est traitée par une nouvelle tentative au sein du service ou en contactant le service client.",
          ],
        },
        {
          title: "6. Contact",
          paragraphs: [`Demandes de remboursement : ${companyInfo.email}`],
        },
      ],
    },
    pricing: {
      title: "Grille tarifaire",
      description:
        "Cette page présente l'étendue des services gratuits et les prix des produits payants.",
      effectiveDate: LEGAL_EFFECTIVE_DATE,
      sections: [
        {
          title: "Analyse de base (gratuite)",
          paragraphs: [
            "L'analyse de base des quatre services — association de sens en hanja (caractères chinois), conversion en prénom international, conversion en prénom coréen et transcription phonétique en hangeul — est fournie gratuitement aux utilisateurs sans compte ; des limites d'utilisation quotidiennes peuvent s'appliquer.",
          ],
        },
        {
          title: "Utilisation avec récompense publicitaire",
          paragraphs: [
            "Le déblocage de candidats après le visionnage d'une publicité est un avantage publicitaire fourni sans paiement supplémentaire. Chaque publicité débloque le candidat suivant. La disponibilité peut varier selon l'inventaire publicitaire, le pays, l'appareil ou la politique du fournisseur publicitaire.",
          ],
        },
        {
          title: "Produits détaillés d'association de sens en hanja",
          paragraphs: [
            "Explications détaillées pour un maximum de 5 candidats et analyse complète des hanja : ₩2,900 (KRW)",
            "Explications détaillées étendues pour un maximum de 10 candidats, analyse complète des hanja et PDF de collection : ₩4,900",
            "Détails pour un maximum de 10 candidats, analyse complète des hanja, analyse saju (Quatre Piliers) et Cinq Éléments, et PDF de collection : ₩9,900",
            "Les rapports payants et les PDF restent consultables et téléchargeables pendant 24 heures après le paiement, puis sont automatiquement supprimés.",
          ],
        },
        {
          title: "Déblocage de l'ensemble des candidats",
          paragraphs: [
            "Déblocage en une seule fois, sans publicité, de l'ensemble des candidats restants dans les services de conversion en prénom international, de conversion en prénom coréen et de transcription phonétique en hangeul : ₩990 (fonction de paiement en préparation)",
          ],
        },
        {
          title: "Articles dérivés de prénoms coréens",
          paragraphs: [
            "Pour les articles dérivés physiques, tels que les tampons de nom, le prix, les frais de livraison et le délai de fabrication sont indiqués séparément pour chaque produit.",
          ],
        },
        {
          title: "Informations avant le lancement officiel des paiements",
          paragraphs: [
            "Une fois finalisés l'examen par le prestataire de paiement, la déclaration d'activité de vente à distance et les conditions de partenariat de fabrication, le montant réel du paiement, les frais de livraison, le délai de fabrication et les conditions de remboursement seront de nouveau indiqués sur l'écran de chaque produit.",
          ],
        },
      ],
    },
  },
};

export default content;
