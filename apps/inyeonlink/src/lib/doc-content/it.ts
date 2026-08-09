import type { DocPage, NoticeCopy } from "./types";
import type { DocKey } from "./ko";

/** Italiano — `scripts/translate-doc-content.ts`가 만든다. 손으로 고치지 말 것. */
export const IT_DOCS = {
  "about": {
    "eyebrow": "Informazioni",
    "title": "Informazioni su Inyeon-Link",
    "summary": "Confrontiamo due grafici di nascita secondo la tradizione del Saju coreano. Ecco cosa calcoliamo e cosa ci rifiutiamo di affermare.",
    "backLabel": "Home",
    "sections": [
      {
        "title": "Cosa facciamo",
        "blocks": [
          {
            "p": "Inyeon-Link costruisce due grafici di nascita a partire dalle date e dagli orari di nascita e mostra **come i due insiemi di energie si incontrano.** Puoi anche leggere il tuo grafico da solo e vedere quali temperamenti tendono a suitedarti."
          },
          {
            "p": "La lettura sullo schermo è **gratuita e non richiede un account.** Gli articoli a pagamento sono report PDF che contengono dati che lo schermo non mostra mai — forze degli elementi, abbinamenti dei dieci dei e le relazioni tra tutti e quattro i pilastri."
          }
        ]
      },
      {
        "title": "Cosa calcoliamo",
        "blocks": [
          {
            "p": "I grafici sono costruiti dall'**almanacco lunisolare coreano**, e l'orario di nascita è corretto per il **tempo solare vero** del luogo di nascita — lo stesso orario significa una posizione del sole diversa a seconda di dove sei nato."
          },
          {
            "p": "I punteggi derivano solo da regole fisse. I concetti tradizionali — dieci dei, relazioni tra rami, l'elemento di supporto — sono espressi come regole, quindi **lo stesso input dà sempre lo stesso risultato.** Quando una regola cambia, eseguiamo un'analisi di regressione per assicurarci che le letture più vecchie non siano state alterate."
          },
          {
            "p": "**Nessuna intelligenza artificiale è coinvolta.** Ogni frase sullo schermo è un testo fisso collegato a un risultato calcolato."
          }
        ]
      },
      {
        "title": "Cosa non affermeremo",
        "blocks": [
          {
            "ul": [
              "**Non facciamo previsioni.** Nulla qui ti dice di perseguire o evitare qualcuno. È un riferimento tratto da una tradizione.",
              "**Non memorizziamo ciò che inserisci.** I dettagli di nascita sono utilizzati solo per il momento del calcolo e non vengono mai annotati; i link ai risultati vivono nella parte dell'URL che un browser non invia a un server.",
              "**Un punteggio non è un verdetto su una persona.** Un numero basso non invalida una relazione."
            ]
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Il metodo è descritto in dettaglio nelle [guide](/guide). I dettagli dell'azienda e come contattarci sono nella [pagina di contatto](/contact)."
          }
        ]
      }
    ]
  }
} satisfies Record<DocKey, DocPage>;

export const IT_NOTICES = {
  "kindLabels": {
    "service": "Servizio",
    "product": "Prodotti",
    "policy": "Politica",
    "support": "Supporto"
  },
  "intro": "Le modifiche ai tuoi termini di utilizzo — prezzi, politiche — sono pubblicate qui prima di entrare in vigore. I miglioramenti interni non sono elencati: ciò che appare qui è ciò che devi sapere.",
  "empty": {
    "title": "Nessun avviso ancora",
    "body": "Quando qualcosa cambia, apparirà qui."
  },
  "effective": "Entrerà in vigore il {date}",
  "pager": {
    "label": "Pagine di avviso",
    "newer": "← Più recente",
    "older": "Più vecchio →"
  },
  "items": {}
} satisfies NoticeCopy;
