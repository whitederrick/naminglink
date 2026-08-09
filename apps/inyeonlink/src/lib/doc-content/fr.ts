import type { DocPage, NoticeCopy } from "./types";
import type { DocKey } from "./ko";

/** Français — `scripts/translate-doc-content.ts`가 만든다. 손으로 고치지 말 것. */
export const FR_DOCS = {
  "about": {
    "eyebrow": "À propos",
    "title": "À propos d'Inyeon-Link",
    "summary": "Nous comparons deux cartes de naissance selon la tradition coréenne du saju. Voici ce que nous calculons et ce que nous refusons de revendiquer.",
    "backLabel": "Accueil",
    "sections": [
      {
        "title": "Ce que nous faisons",
        "blocks": [
          {
            "p": "Inyeon-Link construit deux cartes de naissance à partir des dates et heures de naissance et montre **comment les deux ensembles d'énergies se rencontrent.** Vous pouvez également lire votre propre carte seule et voir quels tempéraments tendent à vous convenir."
          },
          {
            "p": "La lecture à l'écran est **gratuite et ne nécessite pas de compte.** Les éléments payants sont des rapports PDF contenant des chiffres que l'écran ne montre jamais — forces des éléments, associations des dix dieux et relations à travers les quatre piliers."
          }
        ]
      },
      {
        "title": "Ce que nous calculons",
        "blocks": [
          {
            "p": "Les cartes sont construites à partir de l'**almanach lunisolaire coréen**, et l'heure de naissance est corrigée à l'**heure solaire vraie** pour le lieu de naissance — la même heure d'horloge signifie une position du soleil différente selon l'endroit où vous êtes né."
          },
          {
            "p": "Les scores proviennent uniquement de règles fixes. Les concepts traditionnels — dix dieux, relations entre branches, élément de soutien — sont exprimés sous forme de règles, donc **la même entrée donne toujours le même résultat.** Lorsque une règle change, nous exécutons un système de régression pour nous assurer que les lectures plus anciennes n'ont pas été modifiées."
          },
          {
            "p": "**Aucune IA n'est impliquée.** Chaque phrase à l'écran est un texte fixe attaché à un résultat calculé."
          }
        ]
      },
      {
        "title": "Ce que nous ne revendiquons pas",
        "blocks": [
          {
            "ul": [
              "**Nous ne faisons pas de prédictions.** Rien ici ne vous dit de poursuivre ou d'éviter qui que ce soit. C'est une référence tirée d'une tradition.",
              "**Nous ne stockons pas ce que vous entrez.** Les détails de naissance sont utilisés au moment du calcul et ne sont jamais notés ; les liens de résultat vivent dans la partie de l'URL qu'un navigateur n'envoie pas à un serveur.",
              "**Un score n'est pas un verdict sur une personne.** Un nombre bas n'invalide pas une relation."
            ]
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "La méthode est décrite en détail dans les [guides](/guide). Les détails de l'entreprise et comment nous contacter se trouvent sur la [page de contact](/contact)."
          }
        ]
      }
    ]
  }
} satisfies Record<DocKey, DocPage>;

export const FR_NOTICES = {
  "kindLabels": {
    "service": "Service",
    "product": "Produits",
    "policy": "Politique",
    "support": "Support"
  },
  "intro": "Les modifications de vos conditions d'utilisation — prix, politiques — sont publiées ici avant qu'elles n'entrent en vigueur. Les améliorations internes ne sont pas listées : ce qui apparaît ici est ce que vous devez savoir.",
  "empty": {
    "title": "Aucune notification pour le moment",
    "body": "Lorsque quelque chose change, cela apparaîtra ici."
  },
  "effective": "Prend effet le {date}",
  "pager": {
    "label": "Pages de notification",
    "newer": "← Plus récent",
    "older": "Plus ancien →"
  },
  "items": {}
} satisfies NoticeCopy;
