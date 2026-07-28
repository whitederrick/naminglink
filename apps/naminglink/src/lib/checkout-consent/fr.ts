import type { ConsentCopySet } from "@/lib/checkout-consent/types";

// Version française. Traduction du texte coréen d'origine (ko.ts), qui seul fait foi
// juridiquement. Si l'original change, ce fichier doit être revu en même temps.

export const fr: ConsentCopySet = {
  DIGITAL: {
    infoTitle: "Informations sur le produit",
    info: [
      ["Fournisseur", "Naming-Link"],
      ["Format", "Contenu numérique (résultat à l'écran ou document PDF). Fourni immédiatement après le paiement."],
      ["Prérequis", "Un navigateur internet ou tout appareil capable d'ouvrir un PDF. Aucune installation n'est nécessaire."],
      ["Durée d'utilisation", "Sans limite. Le fichier téléchargé reste en possession de l'utilisateur."],
      ["Rétractation", "Remboursement intégral avant le début de la fourniture. Une fois celle-ci commencée, la rétractation pour simple changement d'avis est limitée (art. 17(2) de la loi coréenne sur le commerce électronique)."],
      ["Frais d'échange ou de retour", "Aucun. S'agissant d'un contenu numérique, il n'y a pas de livraison."],
    ],
    consent:
      "Je confirme que ce produit est un contenu numérique fourni immédiatement après le paiement et que **la rétractation pour simple changement d'avis est limitée dès que la fourniture a commencé**.",
    required: "Vous devez accepter les limites du droit de rétractation pour pouvoir payer.",
    refund:
      "Pour un remboursement ou une question, adressez-vous au service client ou à l'adresse e-mail indiqués ci-dessous. Si une erreur système a empêché la fourniture du produit, ou si le montant débité diffère de la commande, nous vous remboursons intégralement.",
  },
  MADE_TO_ORDER: {
    infoTitle: "Informations sur le produit",
    info: [
      ["Fournisseur", "Naming-Link"],
      ["Format", "Sceau physique (dojang) gravé individuellement avec le texte que vous commandez."],
      ["Mode de fabrication", "Après réception de la commande, nous vérifions le texte et la police, puis lançons la gravure."],
      ["Livraison", "Expédié une fois la gravure terminée. Livraison par transporteur en Corée, expédition internationale à l'étranger."],
      ["Rétractation", "**Avant le début de la gravure**, remboursement intégral. Une fois celle-ci commencée, la rétractation est limitée : il s'agit d'un bien produit individuellement selon votre commande et qui ne peut pas être revendu (art. 17(2) de la loi coréenne sur le commerce électronique)."],
      ["Échange et retour", "Si l'article est endommagé, mal gravé ou différent de la commande, nous le refabriquons gratuitement ou vous remboursons intégralement."],
      ["Frais de retour", "Gratuits dans les cas ci-dessus. En cas de simple changement d'avis, l'annulation n'est possible qu'avant le début de la gravure."],
    ],
    consent:
      "Je confirme que ce sceau est un **produit fabriqué sur commande, gravé avec le texte que j'ai indiqué, et que la rétractation pour simple changement d'avis est limitée dès que la gravure a commencé**.",
    required: "Vous devez accepter les limites du droit de rétractation pour pouvoir payer.",
    refund:
      "Pour un remboursement ou une question, adressez-vous au service client ou à l'adresse e-mail indiqués ci-dessous. Si l'article est endommagé, mal gravé ou différent de la commande, nous le refabriquons gratuitement ou vous remboursons intégralement.",
  },
};
