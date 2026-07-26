import { companyInfo, LEGAL_EFFECTIVE_DATE } from "@/lib/company";
import type { LegalLocaleContent } from "./types";

const content: LegalLocaleContent = {
  labels: {
    effectiveDate: "Date d'entrée en vigueur",
    referenceDate: "Date de référence",
    login: "Connexion",
    close: "Fermer",
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
            "Naming-Link est un studio de nommage basé sur l'IA qui propose les quatre services suivants : ① Correspondance de signification des caractères chinois pour les noms en coréen ② Conversion de noms coréens en noms globaux ③ Conversion de noms étrangers en noms coréens ④ Transcription phonétique de noms globaux en coréen.",
            "Les résultats sont des documents de référence pour aider à la nomination et à l'interprétation, et ne garantissent pas la possibilité d'enregistrement officiel, tels que l'enregistrement des relations familiales, les passeports, les visas, les marques, les documents juridiques, etc.",
          ],
        },
        {
          title: "2. Utilisation par les membres et les non-membres",
          paragraphs: [
            "L'analyse des noms et la consultation des candidats avec compensation publicitaire sont accessibles aux non-membres. L'inscription ou la connexion est requise uniquement pour les fonctionnalités nécessitant un compte, telles que la commande de produits et la vérification de l'historique des commandes.",
          ],
        },
        {
          title: "3. Résultats de l'IA et responsabilité de révision",
          paragraphs: [
            "Les résultats recommandés par l'IA incluent des références linguistiques, culturelles et traditionnelles. Les utilisateurs doivent vérifier la pertinence auprès des organismes concernés, des experts, des utilisateurs locaux, ainsi que par des examens juridiques et de marques avant de choisir un nom final.",
          ],
        },
        {
          title: "4. Services payants",
          paragraphs: [
            "Les détails des services de correspondance de signification des caractères chinois sont les suivants : ① Description détaillée de jusqu'à 5 candidats et détails complets des caractères chinois : ₩2,900 ② Description détaillée étendue de jusqu'à 10 candidats, détails complets des caractères chinois et PDF à conserver : ₩4,900 ③ Détails de jusqu'à 10 candidats, détails complets des caractères chinois, analyse des quatre piliers et des cinq éléments, et PDF à conserver : ₩9,900.",
            "Pour les services de conversion de noms globaux, de conversion de noms coréens et de transcription phonétique en coréen, un produit peut être proposé pour révéler tous les candidats restants sans publicité en une seule fois (₩990 pour les paiements nationaux, US$1.99 pour les paiements internationaux). Avant l'activation de la fonction de paiement, seule la consultation avec compensation publicitaire est disponible.",
            "Pour les utilisateurs globaux, les produits numériques suivants sont proposés : ④ Rapport complet sur les noms en coréen PDF (US$9.99) : Art des noms des candidats recommandés, explication des significations et références aux quatre piliers et aux cinq éléments ⑤ Art de conversion phonétique en coréen PDF (US99.$2) : Art des noms avec police choisie et guide de prononciation ⑥ Pack d'art de noms PDF (US$1.99) : Fourniture d'un art pour un nom choisi selon la police sélectionnée. Les prix et le nombre de polices appliquées pour chaque produit sont conformes aux valeurs affichées à l'écran.",
            "Les rapports détaillés payants et les résultats d'analyse, ainsi que les fichiers PDF, peuvent être consultés et téléchargés à nouveau pendant 24 heures après le paiement, et seront automatiquement supprimés après la période de conservation.",
            "Les produits physiques tels que les tampons de nom sont proposés à des prix et conditions spécifiques, notamment ₩39,000 en Corée et US$34.99 à l'étranger (frais de livraison internationale inclus). Tous les produits payants affichent les détails du produit, le prix, le mode de fourniture et les conditions de remboursement à l'écran avant le paiement.",
          ],
        },
        {
          title: "5. Service de compensation publicitaire",
          paragraphs: [
            "Le déverrouillage des candidats par la visualisation de publicités ne s'applique que lorsque la vérification de la compensation normale par le fournisseur de publicité est terminée. La lecture automatique des publicités, la manipulation de compensation et les demandes répétées anormales peuvent être limitées.",
          ],
        },
        {
          title: "6. Actes interdits",
          paragraphs: [
            "Il est interdit d'entrer sans autorisation des informations personnelles d'autrui, de générer des noms à des fins de discrimination, de haine ou d'usurpation, de soumettre des demandes excessives automatisées, de provoquer des dysfonctionnements du service, et d'afficher de manière fausse des certifications officielles des résultats.",
          ],
        },
        {
          title: "7. Limitation de responsabilité",
          paragraphs: [
            "La société n'est pas responsable des dommages indirects, de la perte de bénéfices escomptés, du refus d'enregistrement officiel ou des litiges avec des tiers résultant de l'utilisation des résultats recommandés par l'IA, sauf en cas de faute intentionnelle ou de négligence grave.",
          ],
        },
        {
          title: "8. Contact",
          paragraphs: [
            "Pour toute question concernant le service : platforest.inc@gmail.com",
          ],
        },
      ],
    },
    privacy: {
      title: "Politique de confidentialité",
      description: `La présente politique décrit les règles de traitement des données personnelles de ${companyInfo.serviceName}.`,
      effectiveDate: LEGAL_EFFECTIVE_DATE,
      sections: [
        {
          title: "1. Catégories de données personnelles traitées",
          paragraphs: [
            "Lors de l'utilisation du service de nom sans inscription, le nom, la date de naissance, l'heure de naissance, le pays, la langue, l'objectif d'utilisation et les indices de prononciation sont temporairement traités au cours du processus de génération des résultats d'analyse, mais les données saisies et les résultats générés ne sont pas stockés dans la base de données du service.",
            "Lors de l'inscription et de la connexion, l'adresse e-mail et l'historique de connexion (historique d'authentification) sont traités.",
            "Lors du paiement d'un rapport détaillé payant, les informations d'identification de la commande, l'état du paiement et les entrées/résultats d'analyse nécessaires à la génération du rapport sont traités pendant la période de conservation (24 heures après le paiement). Les informations sur les moyens de paiement, telles que le numéro de carte, sont traitées directement par le prestataire de paiement, et la société ne les stocke pas.",
            "Les informations supplémentaires telles que le nom du commanditaire, l'adresse e-mail, les coordonnées, l'adresse de livraison, l'état du paiement et les informations de traitement de la commande peuvent être traitées uniquement lors de l'utilisation de la fonction de commande de marchandises.",
            "Pour assurer la stabilité du service et prévenir les abus, des journaux d'exploitation minimaux peuvent être traités, comprenant des hachages de visiteurs anonymisés changeant quotidiennement, l'heure de la demande, le type de service, le nombre d'utilisations gratuites, les temps de réponse et d'AI token, l'état de traitement, ainsi que l'affichage de publicités et les événements de récompense.",
          ],
        },
        {
          title: "2. Objectifs du traitement des données personnelles",
          paragraphs: [
            "Les données personnelles sont traitées pour des recommandations de noms basées sur les valeurs saisies, l'analyse de la prononciation, l'analyse des langues et des cultures par pays, la limitation de l'utilisation gratuite, la vérification des récompenses publicitaires, la réponse aux demandes des clients, le traitement des paiements et des livraisons, ainsi que la prévention des abus.",
          ],
        },
        {
          title: "3. Conservation et destruction des données",
          paragraphs: [
            "Les entrées et résultats d'analyse ne sont conservés dans le compte d'un membre que si ce dernier choisit explicitement de les sauvegarder, et ils sont détruits lorsque le membre les supprime ou lorsque l'objectif de conservation prend fin. Les entrées et résultats des membres qui ne choisissent pas de sauvegarder et des non-membres ne sont pas stockés.",
            "Les entrées, résultats d'analyse et fichiers PDF des rapports détaillés payants sont automatiquement supprimés 24 heures après la finalisation du paiement. Les enregistrements de transactions de paiement et de commande sont conservés séparément conformément aux périodes de conservation légales prévues par la législation applicable.",
            "Les détails de livraison de la commande de marchandises (nom du commanditaire, e-mail, numéro de contact, adresse de livraison, demandes spéciales, texte à graver sur le tampon) seront détruits 90 jours après la date de livraison ou d'annulation de la commande. Les informations saisies pour les commandes interrompues qui n'ont pas abouti au paiement seront détruites 24 heures après l'interruption. Même après la destruction, les enregistrements de transactions de paiement et de commande seront conservés conformément aux périodes de conservation légales prévues par la législation applicable.",
          ],
        },
        {
          title: "4. Fourniture à des tiers et sous-traitance du traitement",
          paragraphs: [
            "Pour l'exploitation du service, des informations nécessaires peuvent être traitées ou sous-traitées à Supabase (base de données, authentification), Vercel (hébergement), OpenAI API (analyse AI), réseaux publicitaires, prestataires de paiement (PortOne), et partenaires de livraison et de fabrication.",
          ],
        },
        {
          title: "5. Transfert de données personnelles à l'étranger",
          paragraphs: [
            "La société transfère (sous-traite) des données personnelles à l'étranger comme suit pour fournir le service. Le transfert se fait par transmission via des réseaux de communication.",
            "① OpenAI, L.L.C. (États-Unis) — Éléments transférés : nom, date de naissance, heure de naissance, sexe, pays, langue, etc. — Objectif du transfert : analyse des noms, prononciation et signification basée sur l'IA — Durée de conservation et d'utilisation : durée de fourniture du service (les données saisies ne sont pas utilisées pour l'apprentissage des modèles selon la politique d'OpenAI et sont supprimées après un maximum de 30 jours à des fins de surveillance des abus).",
            "② Supabase, Inc. (États-Unis) — Éléments transférés : informations sur l'état des commandes et des paiements, e-mail des membres, entrées et résultats des rapports payants (24 heures après le paiement), nom du commanditaire, coordonnées et adresse de livraison lors de la commande de marchandises — Objectif du transfert : base de données, authentification, stockage — Durée de conservation et d'utilisation : durée de fourniture du service ou jusqu'à la période de conservation de chaque élément.",
            "③ Vercel, Inc. (États-Unis) — Éléments transférés : informations de connexion et de demande transmises lors de l'utilisation du service — Objectif du transfert : hébergement d'applications — Durée de conservation et d'utilisation : durée de fourniture du service.",
            "Les utilisateurs peuvent refuser leur consentement au transfert de données personnelles à l'étranger, mais ce traitement étant essentiel à la fourniture du service, le refus peut limiter l'utilisation du service.",
          ],
        },
        {
          title: "6. Droits des utilisateurs",
          paragraphs: [
            "Les utilisateurs peuvent demander l'accès, la rectification, la suppression, l'arrêt du traitement et le retrait de leur consentement concernant leurs données personnelles. Les demandes sont reçues par e-mail au service client et seront traitées après vérification de l'identité.",
          ],
        },
        {
          title: "7. Responsable de la protection des données personnelles",
          paragraphs: [
            "Responsable : 곽은하",
            "E-mail : platforest.inc@gmail.com",
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
          title: "1. Principes communs",
          paragraphs: [
            "Lorsque la fonction de paiement est activée, la portée des remboursements peut varier en fonction du mode de fourniture de chaque produit, du moment de début de la production et de la possibilité de téléchargement. Les conditions spécifiques seront indiquées sur l'écran du produit avant le paiement.",
          ],
        },
        {
          title: "2. Rapport détaillé en caractères chinois (₩2,900·₩4,900·₩9,900)",
          paragraphs: [
            "Il est possible d'annuler avant le début de la génération de l'analyse détaillée par l'IA après le paiement. Une fois la génération de l'analyse terminée et accessible pour consultation ou téléchargement, le remboursement pour simple changement d'avis peut être limité.",
            "En cas d'erreur de contenu, d'échec de génération dû à un dysfonctionnement du système, ou de non-concordance du montant payé, un réémission ou un remboursement sera effectué. Si le téléchargement est terminé en raison de l'expiration de la période de conservation (24 heures après le paiement), cela ne constitue pas un motif de remboursement.",
          ],
        },
        {
          title: "3. Publication groupée de tous les candidats (₩990 en Corée · US$1.99 à l'étranger)",
          paragraphs: [
            "La publication groupée des candidats pour le service de conversion de noms globaux, de conversion de noms coréens et de transcription phonétique en coréen est un contenu numérique fourni immédiatement après le paiement. Il est possible d'annuler avant le début de la consultation des candidats, et après consultation, le remboursement pour simple changement d'avis peut être limité.",
            "En cas d'erreur système empêchant la publication normale des candidats, un réémission ou un remboursement sera effectué.",
          ],
        },
        {
          title: "4. Produit numérique PDF global (US$9.99·US$2.99·US$1.99)",
          paragraphs: [
            "Le rapport complet sur les noms coréens (US$9.99), l'art de conversion phonétique en coréen (US$2.99), et le pack d'art de noms (US$1.99) sont des contenus numériques générés après le paiement. Il est possible d'annuler avant le début de la génération du PDF, et une fois la génération terminée et le téléchargement disponible, le remboursement pour simple changement d'avis peut être limité.",
            "En cas d'échec de génération, d'erreur de contenu, ou de non-concordance du montant payé, un réémission ou un remboursement sera effectué. Si le téléchargement est terminé en raison de l'expiration de la période de conservation (24 heures après le paiement), cela ne constitue pas un motif de remboursement.",
          ],
        },
        {
          title: "5. Produits personnalisés (tampons de nom, etc.)",
          paragraphs: [
            "Les articles personnalisés tels que les tampons de nom (₩39,000 en Corée · US$34.99 à l'étranger, frais de livraison internationale inclus) peuvent être annulés jusqu'à avant le début de la production. Après le début de la production, le texte gravé est confirmé de manière personnalisée, donc le remboursement pour simple changement d'avis peut être limité, et les erreurs de frappe, les dommages, les erreurs de production ou les problèmes de livraison seront traités de manière appropriée par échange, nouvelle production ou remboursement après vérification.",
          ],
        },
        {
          title: "5. Déverrouillage par publicité",
          paragraphs: [
            "Les avantages liés à la visualisation de publicités ne sont pas des produits payants. En cas de non-paiement de la récompense en raison d'une erreur du réseau publicitaire, cela sera traité par une nouvelle tentative dans le service ou en contactant le service client.",
          ],
        },
        {
          title: "6. Contact",
          paragraphs: [
            "Pour toute demande de remboursement : platforest.inc@gmail.com",
          ],
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
            "L'analyse de base des quatre services de correspondance de signification des caractères chinois, de conversion de noms mondiaux, de conversion de noms coréens et de transcription phonétique en hangeul est fournie gratuitement aux non-membres, avec une limite d'utilisation quotidienne pouvant s'appliquer.",
          ],
        },
        {
          title: "Utilisation avec compensation publicitaire",
          paragraphs: [
            "Le déverrouillage des candidats après visionnage de publicités est un avantage publicitaire fourni sans paiement supplémentaire. Une publicité permet d'ouvrir un candidat. La disponibilité peut varier en fonction des stocks publicitaires, du pays, de l'appareil ou des politiques du fournisseur de publicité.",
          ],
        },
        {
          title: "Détails du produit de correspondance de signification des caractères chinois",
          paragraphs: [
            "Description détaillée de jusqu'à 5 candidats et détails complets des caractères chinois : ₩2,900",
            "Description détaillée étendue de jusqu'à 10 candidats, détails complets des caractères chinois et PDF à conserver : ₩4,900",
            "Détails de jusqu'à 10 candidats, détails complets des caractères chinois, analyse des quatre piliers et des cinq éléments, et PDF à conserver : ₩9,900",
            "Les rapports payants et les PDF peuvent être consultés et téléchargés à nouveau pendant 24 heures après le paiement, puis seront automatiquement supprimés.",
          ],
        },
        {
          title: "Publication groupée de tous les candidats",
          paragraphs: [
            "Publication de tous les candidats restants dans les services de conversion de noms mondiaux, de conversion de noms coréens et de transcription phonétique en hangeul sans publicité : paiement national ₩990, paiement international US$1.99 (fonction de paiement en préparation)",
          ],
        },
        {
          title: "Produits PDF numériques mondiaux",
          paragraphs: [
            "Rapport PDF complet sur les noms en hangeul (art des noms recommandés, explication des significations, référence aux quatre piliers et aux cinq éléments) : US$9.99",
            "Art de conversion phonétique en hangeul PDF (art des noms avec police choisie et guide de prononciation) : US$2.99",
            "Pack d'art de noms PDF (art d'un nom choisi fourni selon la police sélectionnée) : US$1.99",
            "Les prix et le nombre de polices appliquées suivent les valeurs indiquées à l'écran, et le PDF peut être téléchargé à nouveau pendant 24 heures après le paiement, puis sera automatiquement supprimé. (fonction de paiement en préparation)",
          ],
        },
        {
          title: "Produits dérivés de noms en hangeul",
          paragraphs: [
            "Tampon de nom : ₩39,000 en national · US$34.99 à l'international (frais de livraison internationale inclus). D'autres produits physiques auront des prix, frais de livraison et délais de production indiqués séparément.",
          ],
        },
        {
          title: "Informations avant paiement officiel",
          paragraphs: [
            "Une fois que l'examen PG, l'enregistrement de la vente à distance et les conditions de partenariat de production sont confirmés, le montant réel du paiement, les frais de livraison, le délai de production et les conditions de remboursement seront à nouveau indiqués sur l'écran du produit.",
          ],
        },
      ],
    },
  },
};

export default content;
