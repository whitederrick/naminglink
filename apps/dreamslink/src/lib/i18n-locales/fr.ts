// 드림링크 화면 사전의 French (Français)(fr) 번역이다.
//
// **`scripts/translate-i18n.ts`가 만든 파일이다.** 키 구성·중첩·배열 길이는 en을 그대로
// 복사하고 문자열만 갈아 끼우므로 구조가 어긋날 자리가 없다. 손으로 고칠 때도 키를 더하거나
// 빼지 말 것 — `verify-i18n`이 en과 대조해 잡는다.
//
// **옛 궁합 번역을 통째로 되살린 것이 아니다.** en 원문이 글자까지 같은 자리(푸터·언어
// 선택기·광고 라벨)만 물려받고, 해몽용으로 새로 쓴 자리는 새 ko·en에서 다시 옮겼다.

import type { Dictionary } from "@/lib/i18n";

export const fr: Dictionary = {
  "brand": "Dreams-Link",
  "tagline": "Le rêve d'aujourd'hui, interprété à travers les symboles traditionnels coréens",
  "currentLanguage": "Langue actuelle",
  "moreLanguages": "Plus",
  "closeLanguages": "Fermer",
  "dream": {
    "title": "Interprétation des rêves",
    "subtitle": "Écrivez le rêve que vous avez eu et nous le chercherons dans un dictionnaire des symboles traditionnels coréens des rêves.",
    "textLabel": "De quoi avez-vous rêvé ?",
    "textPlaceholder": "Écrivez-le comme vous vous en souvenez. Par exemple : une carpe a sauté hors de l'eau claire",
    "moodLabel": "Comment vous vous êtes senti au réveil",
    "moods": {
      "good": "Bien",
      "scary": "Effrayant",
      "strange": "Étrange",
      "sad": "Triste",
      "unsure": "Pas sûr"
    },
    "recurringLabel": "Je fais ce rêve encore et encore",
    "submit": "Lire mon rêve",
    "submitting": "Recherche en cours…",
    "errorEmpty": "Veuillez écrire un peu plus sur le rêve.",
    "errorGeneric": "Nous n'avons pas pu charger la lecture. Veuillez réessayer dans un moment.",
    "resultTitle": "Interprétation de rêve",
    "symbolsHeading": "Symboles trouvés dans votre rêve",
    "noSymbols": "Aucun symbole traditionnel de notre dictionnaire n'est apparu dans ce rêve. Nous laissons cela vide plutôt que d'inventer une signification.",
    "themesHeading": "Ce à quoi ils pointent ensemble",
    "conceptionNotice": "Des symboles traditionnellement interprétés comme des présages de conception apparaissent ici. Cela ne détermine pas la grossesse.",
    "disclaimer": "Ceci est un matériel de référence d'un point de vue traditionnel d'interprétation de rêve, et non un conseil médical, financier ou juridique. Nous ne stockons pas le rêve que vous avez écrit.",
    "again": "Lire un autre rêve"
  },
  "landing": {
    "title": "Interprétez votre rêve\nà la manière traditionnelle",
    "subtitle": "Nous recherchons les symboles de votre rêve dans un dictionnaire de la tradition coréenne des rêves.\nPas de date de naissance, pas d'inscription.",
    "howTitle": "Comment ça fonctionne",
    "steps": [
      "Écrivez le rêve tel que vous vous en souvenez. Une phrase ou deux suffisent.",
      "Nous cherchons dans un dictionnaire des symboles traditionnels coréens ce qui y est apparu. Si un symbole n'y figure pas, nous le signalons.",
      "Vous voyez ce que chaque symbole a longtemps été considéré comme signifiant, et ce qu'ils indiquent ensemble."
    ],
    "privacyTitle": "Le rêve que vous écrivez n'est pas stocké",
    "privacyBody": "Ce que vous écrivez est utilisé uniquement pendant que l'interprétation est en cours, et n'est jamais enregistré.\nAucun compte n'est nécessaire, et rien n'est laissé sur le serveur une fois l'interprétation terminée.",
    "disclaimer": "Ceci est un matériel de référence d'un point de vue traditionnel d'interprétation des rêves. Ce n'est pas une prédiction de ce qui est à venir, ni un conseil médical ou financier."
  },
  "ads": {
    "label": "Publicité"
  },
  "analyzing": {
    "title": "À la recherche des symboles dans votre rêve",
    "quotes": [
      "Un rêve a tendance à refléter les derniers jours plus que les jours à venir.",
      "Le même symbole a été interprété différemment selon la personne qui a rêvé.",
      "La traditionnelle 해몽 n'est pas une clé de réponse. C'est un ensemble d'histoires accumulées au fil du temps.",
      "Un rêve effrayant n'est pas nécessairement un mauvais rêve. Cela peut être la marque laissée par un esprit surpris.",
      "C'est bien si vous ne vous souvenez que d'un fragment. Un symbole suffit pour commencer.",
      "Un rêve qui revient souvent est généralement lié à quelque chose d'inachevé.",
      "La clarté de l'eau et sa couleur sont ce que les anciens lecteurs observaient de plus près.",
      "La façon dont vous vous êtes senti au réveil persiste aussi longtemps que ce que vous avez réellement vu.",
      "Que le rêve soit bon ou non, il vaut mieux ne pas laisser cela décider de votre journée.",
      "Une lecture n'est pas un mot sur ce qui va se passer. C'est un second regard sur ce qui est déjà là."
    ],
    "watching": "Publicité en cours",
    "remaining": "Votre résultat s'ouvre dans {seconds} s"
  },
  "dreamCard": {
    "title": "Conservez ce rêve sous forme de carte",
    "body": "Nous avons rassemblé le rêve que vous avez écrit et les symboles que nous avons trouvés dans une seule image. C'est **un fichier image, pas un PDF**, donc vous pouvez le sauvegarder ou l'envoyer tel quel.",
    "buyButton": "Obtenez-le pour {price}",
    "preparing": "Préparation en cours",
    "ordering": "Création de la commande…",
    "paying": "Traitement du paiement…",
    "issuing": "Création de la carte…",
    "done": "Terminé. Utilisez le bouton ci-dessous pour le télécharger à nouveau.",
    "failed": "Le paiement ou le téléchargement a échoué. Veuillez réessayer dans un moment.",
    "retry": "Télécharger à nouveau",
    "contents": [
      "Les symboles trouvés dans votre rêve et ce qu'ils signifient traditionnellement",
      "Ce que ces symboles indiquent ensemble",
      "La date du rêve et la version du dictionnaire"
    ],
    "consentLabel": "Ce contenu numérique est livré immédiatement après le paiement. Je comprends que **une fois le téléchargement terminé, le droit de se rétracter pour un changement d'avis est limité**.",
    "consentRequired": "Vous devez accepter les conditions de rétractation avant de payer.",
    "productInfoTitle": "Informations sur le produit",
    "productInfo": [
      [
        "Fournisseur",
        "{brand}"
      ],
      [
        "Format",
        "1 fichier image (PNG), téléchargé sur cet écran immédiatement après le paiement. Ce n'est pas un document PDF."
      ],
      [
        "Conditions d'utilisation",
        "Tout appareil capable d'ouvrir une image. Pas d'installation ni de compte requis."
      ],
      [
        "Disponibilité",
        "Pas de limite de temps. Le fichier téléchargé est à vous."
      ],
      [
        "Télécharger à nouveau",
        "Jusqu'à 5 fois sur la même commande. Nous ne conservons pas le fichier, il ne peut donc pas être recréé une fois que vous quittez l'écran de résultats."
      ],
      [
        "Retrait",
        "Remboursement intégral avant la fin du téléchargement. Par la suite, le retrait pour changement d'avis est limité (loi coréenne sur le commerce électronique art. 17(2))."
      ],
      [
        "Frais de retour",
        "Aucun. Le contenu numérique n'est pas expédié."
      ]
    ],
    "refundContact": "Pour les remboursements ou les questions, contactez le service d'assistance ou l'adresse e-mail ci-dessous. Si le fichier n'a jamais été produit, ou si le montant facturé diffère de la commande, nous le remboursons intégralement.",
    "pdfLanguageNotice": "Le texte sur la carte apparaît dans la même langue que cet écran."
  },
  "conceptionReport": {
    "title": "Conservez la lecture des omens de conception en tant que PDF",
    "body": "Lorsque des symboles traditionnellement lus comme des présages de conception apparaissent, un PDF de 4 pages présente ce qui est apparu, ce que cela a traditionnellement signifié, et d'où provient cette interprétation. Cela ne détermine pas la grossesse ni le sexe d'un enfant.",
    "buyButton": "Obtenez-le pour {price}",
    "preparing": "Préparation en cours",
    "ordering": "Création de la commande…",
    "paying": "Traitement du paiement…",
    "issuing": "Élaboration du rapport…",
    "done": "Terminé. Utilisez le bouton ci-dessous pour le télécharger à nouveau.",
    "failed": "Le paiement ou le téléchargement a échoué. Veuillez réessayer dans un moment.",
    "retry": "Télécharger à nouveau",
    "contents": [
      "Page 1 — le rêve que vous avez écrit et ce qui y a été trouvé",
      "Page 2 — chaque symbole et ce qu'il a traditionnellement signifié",
      "Page 3 — pourquoi ceux-ci sont considérés comme des présages de conception",
      "Page 4 — une page à conserver (la date et les avertissements)"
    ],
    "consentLabel": "Ce contenu numérique est livré immédiatement après le paiement. Je comprends que **une fois le téléchargement terminé, le droit de se rétracter pour un changement d'avis est limité**.",
    "consentRequired": "Vous devez accepter les conditions de rétractation avant de payer.",
    "productInfoTitle": "Informations sur le produit",
    "productInfo": [
      [
        "Fournisseur",
        "{brand}"
      ],
      [
        "Format",
        "1 document PDF (4 pages), téléchargé sur cet écran immédiatement après le paiement."
      ],
      [
        "Exigences",
        "Tout appareil capable d'ouvrir un PDF. Pas d'installation et pas de compte."
      ],
      [
        "Disponibilité",
        "Pas de limite de temps. Le fichier téléchargé est à vous."
      ],
      [
        "Télécharger à nouveau",
        "Jusqu'à 5 fois pour la même commande. Nous ne conservons pas le fichier, donc il ne peut pas être recréé une fois que vous quittez l'écran de résultats."
      ],
      [
        "Retrait",
        "Remboursement complet avant la fin du téléchargement. Par la suite, le retrait pour changement d'avis est limité (loi coréenne sur le commerce électronique art. 17(2))."
      ],
      [
        "Frais de retour",
        "Aucun. Le contenu numérique n'est pas expédié."
      ]
    ],
    "refundContact": "Pour les remboursements ou les questions, contactez le service d'assistance ou l'adresse e-mail ci-dessous. Si le document n'a jamais été produit, ou si le montant facturé diffère de la commande, nous le remboursons intégralement.",
    "pdfLanguageNotice": "Le PDF est dans la même langue que cet écran."
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
  }
};
