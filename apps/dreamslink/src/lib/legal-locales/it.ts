import type { LegalLocaleDocuments } from "@/lib/legal-locales/types";

// ko 원본에서 자동 생성된 번역이다(scripts/translate-legal.mjs). 손으로 고쳐도 되지만,
// 다시 생성하면 덮어쓴다 — 문구를 바꿀 일이 있으면 ko를 먼저 고치고 전체를 다시 만들 것.
// 사업자 정보와 가격은 플레이스홀더로 남아 있고 실제 값은 getLegalDocument가 넣는다.

const d0 = {
  "title": "Informativa sul trattamento dei dati personali",
  "intro": "Dreams-Link non memorizza informazioni necessarie per l'interpretazione dei sogni. Questa informativa descrive cosa viene ricevuto dal servizio, cosa non viene conservato e cosa viene registrato automaticamente.",
  "sections": [
    {
      "heading": "1. Informazioni non memorizzate",
      "paragraphs": [
        "Le storie dei sogni che scrivete per l'interpretazione, i vostri sentimenti al risveglio e se sognate ripetutamente lo stesso sogno **non vengono memorizzati in alcun modo.** Vengono utilizzati solo temporaneamente nella memoria del server durante l'elaborazione della richiesta e scompaiono con la risposta.",
        "Non vengono registrati nel database e non vengono conservati in file separati. Poiché non è richiesta alcuna registrazione, i dati inseriti non possono essere collegati a una persona specifica.",
        "Le storie dei sogni sono i dati più personali che questo servizio riceve. Pertanto, non è stata implementata una funzione per rivedere i risultati passati (diario dei sogni) — tale funzione richiederebbe la conservazione dei testi che avete scritto."
      ]
    },
    {
      "heading": "2. Informazioni contenute nel link dei risultati",
      "paragraphs": [
        "L'indirizzo della pagina dei risultati contiene i valori di input codificati. Tuttavia, questi valori si trovano dopo il simbolo # nell'indirizzo, e secondo gli standard web, il contenuto dopo il # non viene inviato dal browser al server. Pertanto, anche se si apre il link dei risultati, nella registrazione degli accessi al server rimane solo il percorso dell'indirizzo.",
        "Se inviate il link a qualcun altro, quella persona potrà vedere gli stessi risultati. Poiché il link stesso contiene i valori di input, la decisione di condividerlo spetta all'utente."
      ]
    },
    {
      "heading": "3. Informazioni raccolte automaticamente",
      "paragraphs": [
        "Non vengono raccolte informazioni per identificare gli utenti. Tuttavia, vengono registrati automaticamente dal fornitore di infrastruttura i minimi dati necessari per il funzionamento del servizio."
      ],
      "bullets": [
        "Indirizzo IP di accesso, data e ora di accesso, tipo di browser e altre registrazioni generali degli accessi al server",
        "Informazioni sul paese — utilizzate solo per determinare automaticamente la lingua della pagina e non vengono memorizzate"
      ]
    },
    {
      "heading": "4. Cookie e pubblicità",
      "paragraphs": [
        "Il servizio stesso non utilizza cookie per tracciare gli utenti.",
        "Attualmente, non ci sono annunci pubblicitari su questo servizio. Se in futuro verranno pubblicati annunci, il fornitore di pubblicità (ad esempio Google) potrebbe utilizzare cookie per la pubblicazione degli annunci. In tal caso, questa clausola sarà modificata per chiarire cosa cambia prima di iniziare."
      ]
    },
    {
      "heading": "5. Informazioni memorizzate al momento del pagamento",
      "paragraphs": [
        "Attualmente non vengono venduti prodotti a pagamento, quindi non ci sono informazioni memorizzate relative ai pagamenti.",
        "Quando inizieremo a vendere, verranno memorizzati i seguenti elementi per il trattamento dei pagamenti e la conservazione dei registri delle transazioni ai sensi della legge: **anche in quel caso, i sogni che avete scritto e i file creati non verranno memorizzati**, né verranno raccolte informazioni identificative come nome, contatto e indirizzo."
      ],
      "bullets": [
        "Numero d'ordine e identificatore di pagamento",
        "Importo del pagamento, valuta e stato del pagamento (non pagato, pagato, annullato)",
        "Tipo di prodotto, stato di elaborazione, numero di download del documento, data e ora dell'ordine",
        "Lingua della pagina al momento dell'ordine e distinzione della regione di pagamento (nazionale, internazionale)",
        "Periodo di conservazione — secondo l'articolo 6 della legge sulla protezione dei consumatori nel commercio elettronico, i registri relativi ai pagamenti e alla fornitura di beni saranno conservati per 5 anni, mentre i registri relativi a reclami o controversie dei consumatori saranno conservati per 3 anni e poi distrutti."
      ]
    },
    {
      "heading": "6. Fornitura a terzi e delega al trattamento",
      "paragraphs": [
        "Non essendoci dati personali memorizzati, non vengono forniti dati personali a terzi.",
        "Per il funzionamento del servizio, utilizziamo l'infrastruttura di hosting di {hostingProvider}, e in questo processo, i registri di accesso di cui al punto 3 vengono trattati secondo le politiche di quel fornitore.",
        "Quando iniziamo a vendere prodotti a pagamento, i pagamenti nazionali saranno delegati a Toss Payments, mentre i pagamenti internazionali saranno delegati a PortOne (PayPal). Le informazioni sui metodi di pagamento come numeri di carta e numeri di conto saranno gestite direttamente da questi fornitori e non saranno ricevute dal servizio."
      ]
    },
    {
      "heading": "7. Diritti degli utenti",
      "paragraphs": [
        "Non essendoci dati personali memorizzati, non ci sono soggetti a cui richiedere accesso, correzione o cancellazione.",
        "Gli utenti possono eliminare tutte le tracce di input semplicemente cancellando il link dei risultati dalla barra degli indirizzi del browser.",
        "Se avete domande relative all'uso del servizio, vi preghiamo di contattarci ai seguenti recapiti."
      ]
    },
    {
      "heading": "8. Dati personali dei minori",
      "paragraphs": [
        "Questo servizio non è destinato a bambini di età inferiore ai 14 anni e non raccoglie dati personali da bambini."
      ]
    },
    {
      "heading": "9. Responsabile della protezione dei dati personali",
      "paragraphs": [
        "Responsabile della protezione: {privacyOfficer}",
        "Contatti: {email} / {customerCenter}"
      ]
    },
    {
      "heading": "10. Modifiche all'informativa",
      "paragraphs": [
        "In caso di modifica di questa informativa, la data di entrata in vigore e i dettagli delle modifiche saranno pubblicati su questa pagina. Se ci saranno cambiamenti effettivi, come l'inizio della pubblicazione di annunci o la vendita di prodotti a pagamento, informeremo prima della modifica."
      ]
    }
  ],
  "effectiveLabel": "Data di entrata in vigore"
};

const d1 = {
  "title": "Termini di utilizzo",
  "intro": "Questi termini stabiliscono le condizioni per l'utilizzo del servizio Dreams-Link (di seguito \"Servizio\"). Utilizzando il Servizio, si considera che si accettino questi termini.",
  "sections": [
    {
      "heading": "1. Natura del Servizio",
      "paragraphs": [
        "Il Servizio cerca simboli di sogni forniti dagli utenti e mostra i significati tradizionali associati a tali simboli come materiale di riferimento. Si afferma di non poter trovare simboli non presenti nel dizionario e non si inventano significati inesistenti.",
        "I simboli e le interpretazioni presentati sono **materiale di riferimento da una prospettiva di interpretazione tradizionale e non costituiscono previsioni sul futuro né consulenze mediche, finanziarie o legali.** Un sogno positivo non garantisce alcun evento, e un sogno negativo non implica che un evento sia programmato.",
        "**I risultati relativi ai sogni di concezione non determinano la gravidanza o il sesso del feto.** Si informa solo che simboli tradizionalmente considerati sogni di concezione sono emersi, insieme al loro contesto."
      ]
    },
    {
      "heading": "2. Tariffe di utilizzo",
      "paragraphs": [
        "Attualmente, il Servizio è completamente gratuito e non è necessaria la registrazione.",
        "Quando inizieremo a vendere prodotti a pagamento (immagine della carta dei sogni, rapporto sui sogni di concezione in PDF), si applicheranno le condizioni del paragrafo 3 sottostante. Prima dell'inizio delle vendite, questi termini verranno nuovamente comunicati."
      ]
    },
    {
      "heading": "3. Prodotti a pagamento e rimborsi",
      "paragraphs": [
        "I prodotti a pagamento in vendita sono **due**. Le interpretazioni gratuite possono essere utilizzate senza pagamento, mentre i due prodotti sottostanti vengono forniti in una forma che consente di conservarne i risultati.",
        "**Carta dei sogni** — è un'immagine in formato file. Viene creata un'immagine che conserva e consente di condividere i simboli e i significati tradizionali emersi dal sogno di quel giorno. **Non è un documento (PDF).** Pagamento nazionale {priceCardDomestic} (IVA inclusa), pagamento internazionale {priceCardGlobal}.",
        "**Rapporto sui sogni di concezione in PDF** — 4 pagine. Contiene il significato tradizionale dei simboli emersi e il loro contesto in forma di documento. **Non determina la gravidanza** — si informa solo che simboli tradizionalmente considerati sogni di concezione sono emersi nel sogno. Pagamento nazionale {priceConceptionDomestic} (IVA inclusa), pagamento internazionale {priceConceptionGlobal}.",
        "I pagamenti nazionali possono essere effettuati tramite Toss Payments utilizzando carte di credito/debito e pagamenti semplificati (Toss, KakaoPay, NaverPay, Payco, ecc.), mentre i pagamenti internazionali avvengono tramite PayPal attraverso PortOne. L'importo finale è quello visualizzato nella schermata di pagamento.",
        "**Il Servizio non conserva né i dati inseriti dall'utente né i file PDF creati.** Una volta approvato il pagamento, il documento viene creato e inviato immediatamente, senza lasciare nulla sul server. Pertanto, il file scaricato deve essere conservato dall'utente stesso.",
        "In caso di interruzione del download o smarrimento del file, è possibile scaricare nuovamente fino a **5 volte** con lo stesso ordine. Tuttavia, se si esce dalla schermata dei risultati e i dati inseriti vengono persi, non sarà possibile ricrearli, quindi si prega di salvare il file subito dopo il pagamento."
      ],
      "bullets": [
        "**Fino a quando il download non inizia dopo il pagamento,** è possibile annullare in qualsiasi momento e ricevere un rimborso completo.",
        "**Dopo il completamento del download,** il recesso per semplice ripensamento è limitato. Si tratta di contenuti digitali forniti immediatamente e non ripristinabili, che rientrano nei motivi di limitazione del recesso stabiliti dall'articolo 17, comma 2, della Legge sulla protezione dei consumatori nel commercio elettronico.",
        "**In caso di errore di sistema che impedisce la creazione del documento, file non apribili o importo di pagamento diverso dall'ordine,** verrà trattato come riemissione o rimborso completo.",
        "**Le lamentele sui contenuti dei risultati** non costituiscono motivo di rimborso. I risultati delle interpretazioni sono materiale di riferimento da una prospettiva di interpretazione tradizionale e la loro natura è stata comunicata prima del pagamento (vedi paragrafo 1).",
        "Richieste di riemissione dopo aver utilizzato tutte le 5 volte non costituiscono motivo di rimborso.",
        "**Se un minorenne effettua un pagamento senza il consenso del legale rappresentante,** il minorenne o il legale rappresentante possono annullare il pagamento. Si prega di informare il contatto sottostante per ricevere un rimborso."
      ]
    },
    {
      "heading": "4. Risultati delle interpretazioni",
      "paragraphs": [
        "Le regole per la ricerca dei simboli seguono un dizionario pubblico e procedure stabilite, quindi scrivendo lo stesso testo si ottiene sempre lo stesso simbolo.",
        "Scrivendo in modo conciso, il numero di simboli emersi diminuisce. Non si possono trovare simboli non presenti nel dizionario e in tal caso si lascerà il risultato vuoto.",
        "Il dizionario dei simboli è una raccolta di testi di interpretazione tradizionale e racconti orali, e le interpretazioni possono variare a seconda della regione e del periodo."
      ]
    },
    {
      "heading": "5. Responsabilità dell'utente",
      "paragraphs": [
        "L'utente può scrivere i sogni di altre persone, ma non deve utilizzare i risultati in modo da danneggiare gli altri.",
        "Non utilizzare i risultati del Servizio come base per decisioni che influenzano i diritti o gli interessi delle persone, come gravidanza, salute, investimenti o assunzioni. Il Servizio non è stato creato per tali scopi."
      ]
    },
    {
      "heading": "6. Attività vietate",
      "paragraphs": [
        "Le seguenti attività non sono consentite."
      ],
      "bullets": [
        "Inviare richieste eccessive tramite strumenti automatizzati che ostacolano il funzionamento del Servizio",
        "Presentare i risultati del Servizio come fatti o come risultati di esperti",
        "Duplicare o modificare il Servizio per fornire un servizio identico"
      ]
    },
    {
      "heading": "7. Esclusione di responsabilità",
      "paragraphs": [
        "Il Servizio fornisce solo materiale di riferimento e non si assume responsabilità per le decisioni e i risultati derivanti da tali decisioni basate sui risultati.",
        "Non si assume responsabilità per danni derivanti da interruzioni del Servizio causate da eventi incontrollabili, come calamità naturali o guasti dei fornitori di infrastrutture."
      ]
    },
    {
      "heading": "8. Diritti di proprietà intellettuale",
      "paragraphs": [
        "I diritti relativi allo schermo del Servizio, ai testi e alle implementazioni delle regole di calcolo appartengono all'operatore. Gli utenti possono salvare o condividere i risultati per scopi personali."
      ]
    },
    {
      "heading": "9. Modifiche ai termini e legge applicabile",
      "paragraphs": [
        "In caso di modifica dei termini, verranno pubblicati su questa pagina con la data di entrata in vigore.",
        "Questi termini sono regolati dalla legge della Repubblica di Corea e le controversie relative all'utilizzo del Servizio seguiranno le procedure stabilite dalle leggi pertinenti."
      ]
    }
  ],
  "effectiveLabel": "Data di entrata in vigore"
};

const d2 = {
  "title": "Politica di rimborso e cancellazione",
  "intro": "Questi sono i criteri per la cancellazione e il rimborso dei prodotti a pagamento. Abbiamo raccolto separatamente i contenuti dell'articolo 3 delle condizioni.",
  "sections": [
    {
      "heading": "1. Natura del prodotto",
      "paragraphs": [
        "I prodotti in vendita sono **dream card (immagine 1)** e **conception dream report (태몽 리포트) PDF**, entrambi contenuti digitali che vengono creati e inviati immediatamente dopo l'approvazione del pagamento.",
        "**Il servizio non conserva né il sogno che hai scritto né il file creato.** Pertanto, il file scaricato deve essere conservato direttamente dall'utente."
      ]
    },
    {
      "heading": "2. Diritto di recesso",
      "paragraphs": [
        "Si seguono i criteri stabiliti dalla legge sul commercio elettronico."
      ],
      "bullets": [
        "**Prima dell'inizio del download,** è possibile cancellare in qualsiasi momento e ricevere un rimborso completo.",
        "**Dopo il completamento del download,** il diritto di recesso per semplice ripensamento è limitato. Si tratta di contenuti digitali forniti immediatamente dopo il pagamento, per i quali non è possibile il ripristino, e ciò rientra nei motivi di limitazione stabiliti dall'articolo 17, comma 2 della legge sulla protezione dei consumatori nel commercio elettronico. Questa informazione viene comunicata e il consenso viene ottenuto nella schermata di pagamento."
      ]
    },
    {
      "heading": "3. Casi di rimborso completo",
      "paragraphs": [
        "Nei seguenti casi, dopo aver verificato il motivo, procederemo con il riemissione o il rimborso completo."
      ],
      "bullets": [
        "In caso di errore di sistema che impedisce la creazione del file",
        "Se il file scaricato non si apre",
        "Se l'importo pagato è diverso da quello ordinato",
        "**Se un minorenne ha effettuato il pagamento senza il consenso del legale rappresentante** — sia il minorenne che il legale rappresentante possono richiedere la cancellazione."
      ]
    },
    {
      "heading": "4. Casi non validi per il rimborso",
      "paragraphs": [],
      "bullets": [
        "**Insoddisfazione riguardo al contenuto del risultato.** I risultati dell'interpretazione dei sogni sono materiali di riferimento secondo la tradizione interpretativa e questa natura è comunicata prima del pagamento. Se non si riesce a trovare i simboli presenti nel sogno, e il risultato è breve, ciò rientra in questa categoria — non si inventano significati inesistenti.",
        "Richiesta di riemissione dopo aver utilizzato tutte e cinque le possibilità."
      ]
    },
    {
      "heading": "5. Modalità di richiesta",
      "paragraphs": [
        "Per rimborsi e domande, si prega di contattare il servizio clienti ({customerCenter}) o inviare un'email a ({email}). Se fornisci anche il numero dell'ordine, la verifica sarà più rapida.",
        "I rimborsi saranno effettuati tramite il metodo di pagamento utilizzato, e a seconda delle circostanze della società della carta o del pagamento, potrebbero essere necessari da 3 a 7 giorni lavorativi per l'elaborazione."
      ]
    }
  ],
  "effectiveLabel": "Data di entrata in vigore"
};

const d3 = {
  "title": "Informazioni sui Prezzi",
  "intro": "Fornisce informazioni sull'ambito dei servizi gratuiti e sui prezzi dei prodotti a pagamento.",
  "sections": [
    {
      "heading": "1. Gratuito",
      "paragraphs": [
        "**La consultazione e la visualizzazione dei risultati sono gratuite.** Non è necessaria la registrazione.",
        "Puoi visualizzare sullo schermo i simboli trovati nel sogno, il significato di quei simboli e ciò che indicano insieme. Poiché i sogni vengono sognati ogni giorno, questo servizio non ha limiti di consultazione."
      ]
    },
    {
      "heading": "2. Dream Card (a pagamento)",
      "paragraphs": [
        "Pagamento nazionale {priceCardDomestic} (IVA inclusa) · Pagamento internazionale {priceCardGlobal}",
        "Ti forniamo i risultati sullo schermo in **un'unica immagine**. È una forma facile da conservare o inviare, **non è un documento PDF.**",
        "Puoi scaricare nuovamente fino a **5 volte** con lo stesso ordine. Tuttavia, se esci dalla schermata dei risultati e i dati di input scompaiono, non potrai ricrearlo, quindi ti preghiamo di salvare il file subito dopo il pagamento."
      ]
    },
    {
      "heading": "3. Conception Dream Report PDF (a pagamento)",
      "paragraphs": [
        "Pagamento nazionale {priceConceptionDomestic} (IVA inclusa) · Pagamento internazionale {priceConceptionGlobal}",
        "Quando ci sono simboli tradizionalmente considerati come sogni di concezione, ti forniamo un riepilogo del significato di quei simboli e del contesto trasmesso in un PDF di 4 pagine. **Non determina la gravidanza o il sesso del feto.**",
        "Le condizioni di riemissione sono le stesse della Dream Card."
      ]
    },
    {
      "heading": "4. Metodi di Pagamento",
      "paragraphs": [
        "**Nazionale** — Puoi utilizzare carte di credito/debito e pagamenti rapidi (Toss Payments, KakaoPay, NaverPay, Payco, ecc.) tramite Toss Payments.",
        "**Internazionale** — Puoi pagare tramite PayPal attraverso PortOne.",
        "L'importo finale del pagamento è quello visualizzato nella schermata di pagamento."
      ]
    },
    {
      "heading": "5. Modifica dei Prezzi",
      "paragraphs": [
        "In caso di modifica dei prezzi, verrà pubblicato prima su questa pagina. I prezzi modificati non si applicano agli ordini già completati."
      ]
    }
  ],
  "effectiveLabel": "Data di Efficacia"
};

const d4 = {
  "title": "Politica di trattamento dei dati personali",
  "intro": "Dreams-Link non memorizza informazioni necessarie per l'interpretazione dei sogni. Questa politica descrive cosa viene ricevuto dal servizio, cosa non viene conservato e cosa viene registrato automaticamente.",
  "sections": [
    {
      "heading": "1. Informazioni non memorizzate",
      "paragraphs": [
        "Le storie dei sogni che scrivete per l'interpretazione, i vostri sentimenti al risveglio e se sognate ripetutamente lo stesso sogno **non vengono memorizzati da nessuna parte.** Vengono utilizzati solo temporaneamente nella memoria del server durante l'elaborazione della richiesta e scompaiono con la risposta.",
        "Non vengono registrati nel database e non vengono conservati in file separati. Non essendoci registrazione degli utenti, i dati inseriti non sono collegati a persone specifiche.",
        "Le storie dei sogni sono tra i dati più privati ricevuti da questo servizio. Pertanto, non è presente una funzione per rivedere i risultati passati (diario dei sogni) — tale funzione richiederebbe la conservazione continua dei testi forniti."
      ]
    },
    {
      "heading": "2. Informazioni contenute nel link dei risultati",
      "paragraphs": [
        "L'indirizzo della pagina dei risultati contiene i valori di input codificati. Tuttavia, questi valori si trovano dopo il simbolo # nell'indirizzo, e secondo gli standard web, il contenuto dopo il # non viene inviato dal browser al server. Pertanto, anche se si apre il link dei risultati, nella registrazione degli accessi del server rimarrà solo il percorso dell'indirizzo.",
        "Se si invia il link dei risultati a qualcun altro, quella persona potrà vedere gli stessi risultati. Poiché il link stesso contiene i valori di input, la decisione di condividerlo spetta all'utente."
      ]
    },
    {
      "heading": "3. Informazioni raccolte automaticamente",
      "paragraphs": [
        "Non vengono raccolte informazioni per identificare gli utenti. Tuttavia, vengono registrati automaticamente dal fornitore di infrastruttura i minimi dati necessari per il funzionamento del servizio."
      ],
      "bullets": [
        "Indirizzo IP di accesso, data e ora di accesso, tipo di browser e altre registrazioni generali di accesso al server",
        "Informazioni sul paese — utilizzate solo per determinare automaticamente la lingua della pagina e non vengono memorizzate"
      ]
    },
    {
      "heading": "4. Cookie e pubblicità",
      "paragraphs": [
        "Il servizio stesso non utilizza cookie per identificare o tracciare gli utenti. Le storie dei sogni fornite non vengono trasmesse agli inserzionisti.",
        "Questo servizio pubblica annunci tramite Google AdSense. Durante questo processo avvengono le seguenti operazioni."
      ],
      "bullets": [
        "Fornitori terzi, inclusa Google, possono memorizzare o leggere cookie nel browser dell'utente.",
        "Google utilizza cookie per pubblicare annunci basati sulla cronologia di visita di questo sito e di altri siti.",
        "Gli utenti possono disattivare gli annunci personalizzati nelle impostazioni pubblicitarie di Google (google.com/settings/ads). Anche se disattivati, gli annunci continueranno a essere visualizzati, ma saranno meno pertinenti per l'utente.",
        "Gli annunci personalizzati di tutti i fornitori terzi possono essere disattivati in un colpo solo su aboutads.info/choices.",
        "Esiste anche un modo per bloccare i cookie nelle impostazioni del browser.",
        "Agli utenti dell'Area Economica Europea, del Regno Unito e della Svizzera viene prima chiesto il consenso all'uso dei cookie pubblicitari."
      ]
    },
    {
      "heading": "5. Informazioni memorizzate al momento del pagamento",
      "paragraphs": [
        "Attualmente non vengono venduti prodotti a pagamento, quindi non ci sono informazioni memorizzate relative ai pagamenti.",
        "Quando inizieremo a vendere, verranno memorizzati i seguenti elementi per il trattamento dei pagamenti e la conservazione dei registri delle transazioni ai sensi della legge: **anche in quel caso, i sogni forniti e i file creati non verranno memorizzati**, né verranno raccolte informazioni identificative come nome, contatto, indirizzo."
      ],
      "bullets": [
        "Numero d'ordine e identificatore di pagamento",
        "Importo del pagamento, valuta e stato del pagamento (non pagato, pagato, annullato)",
        "Tipo di prodotto, stato di elaborazione, numero di download del documento, data e ora dell'ordine",
        "Lingua della pagina al momento dell'ordine e distinzione della regione di pagamento (nazionale, internazionale)",
        "Periodo di conservazione — secondo l'articolo 6 della legge sulla protezione dei consumatori nel commercio elettronico, i registri relativi ai pagamenti e alla fornitura di beni saranno conservati per 5 anni, mentre i registri relativi alla gestione dei reclami o delle controversie dei consumatori saranno conservati per 3 anni prima di essere distrutti."
      ]
    },
    {
      "heading": "6. Fornitura a terzi e delega del trattamento",
      "paragraphs": [
        "Non essendoci dati personali memorizzati, non vengono forniti dati personali a terzi.",
        "Per il funzionamento del servizio, utilizziamo l'infrastruttura di hosting di {hostingProvider}, e durante questo processo, i registri di accesso di cui al punto 3 sono trattati secondo le politiche di quel fornitore.",
        "Quando iniziamo a vendere prodotti a pagamento, i pagamenti nazionali saranno delegati a Toss Payments e i pagamenti internazionali a PortOne (PayPal). Le informazioni sui metodi di pagamento come numeri di carta e numeri di conto saranno gestite direttamente da questi fornitori e non saranno ricevute dal servizio."
      ]
    },
    {
      "heading": "7. Diritti degli utenti",
      "paragraphs": [
        "Non essendoci dati personali memorizzati, non ci sono soggetti a cui richiedere accesso, correzione o cancellazione.",
        "Gli utenti possono eliminare tutte le tracce di input semplicemente cancellando il link dei risultati dalla barra degli indirizzi del browser.",
        "Se avete domande relative all'uso del servizio, vi preghiamo di contattarci ai seguenti recapiti."
      ]
    },
    {
      "heading": "8. Dati personali dei minori",
      "paragraphs": [
        "Questo servizio non è destinato a bambini di età inferiore ai 14 anni e non raccoglie dati personali da bambini."
      ]
    },
    {
      "heading": "9. Responsabile della protezione dei dati personali",
      "paragraphs": [
        "Responsabile della protezione: {privacyOfficer}",
        "Contatti: {email} / {customerCenter}"
      ]
    },
    {
      "heading": "10. Modifiche alla politica",
      "paragraphs": [
        "In caso di modifica di questa politica, la data di entrata in vigore e i dettagli delle modifiche saranno pubblicati su questa pagina. Se ci sono cambiamenti effettivi nel trattamento, come l'inizio della pubblicazione di annunci o la vendita di prodotti a pagamento, informeremo prima della modifica."
      ]
    }
  ],
  "effectiveLabel": "Data di entrata in vigore"
};

const d5 = {
  "title": "Politica di trattamento dei dati personali",
  "intro": "Dreams-Link non memorizza informazioni necessarie per l'interpretazione dei sogni. Questa politica descrive cosa viene ricevuto dal servizio, cosa non viene conservato e cosa viene registrato automaticamente.",
  "sections": [
    {
      "heading": "1. Informazioni non memorizzate",
      "paragraphs": [
        "Le storie dei sogni che scrivi per l'interpretazione, i tuoi sentimenti al risveglio e se sogni ripetutamente lo stesso sogno **non vengono memorizzati in alcun modo.** Vengono utilizzati solo temporaneamente nella memoria del server durante l'elaborazione della richiesta e scompaiono con la risposta.",
        "Non vengono registrati nel database e non vengono conservati in file separati. Non essendoci registrazione, i dati inseriti non sono collegati a persone specifiche.",
        "Le storie dei sogni sono le informazioni più private che questo servizio riceve. Pertanto, non è stata implementata una funzione per rivedere i risultati passati (diario dei sogni) — tale funzione richiederebbe la conservazione continua dei testi che hai scritto."
      ]
    },
    {
      "heading": "2. Informazioni contenute nel link dei risultati",
      "paragraphs": [
        "L'indirizzo della schermata dei risultati contiene i valori di input codificati. Tuttavia, questi valori si trovano dopo il simbolo # nell'indirizzo, e secondo gli standard web, il contenuto dopo il # non viene inviato dal browser al server. Pertanto, anche se apri il link dei risultati, solo il percorso dell'indirizzo rimane nei registri di accesso del server.",
        "Se invii il link dei risultati a qualcun altro, quella persona potrà vedere gli stessi risultati. Poiché il link stesso contiene i valori di input, la decisione di condividerlo spetta all'utente."
      ]
    },
    {
      "heading": "3. Informazioni raccolte automaticamente",
      "paragraphs": [
        "Non vengono raccolte informazioni per identificare gli utenti. Tuttavia, vengono registrati automaticamente dal fornitore di infrastrutture i minimi dati necessari per il funzionamento del servizio."
      ],
      "bullets": [
        "Indirizzo IP di accesso, data e ora di accesso, tipo di browser e altre registrazioni generali di accesso al server",
        "Informazioni sul paese — utilizzate solo per determinare automaticamente la lingua della schermata e non vengono memorizzate"
      ]
    },
    {
      "heading": "4. Cookie e pubblicità",
      "paragraphs": [
        "Il servizio stesso non utilizza cookie per tracciare gli utenti.",
        "Attualmente, non ci sono annunci pubblicitari su questo servizio. In futuro, se verranno pubblicati annunci, i fornitori di annunci (ad esempio, Google) potrebbero utilizzare cookie per la pubblicazione degli annunci. In tal caso, questa clausola verrà modificata per chiarire cosa cambia prima dell'inizio della pubblicazione."
      ]
    },
    {
      "heading": "5. Informazioni memorizzate al momento del pagamento",
      "paragraphs": [
        "Quando acquisti prodotti a pagamento (dream card, rapporto sui sogni di concezione), le informazioni sull'ordine vengono memorizzate per l'elaborazione del pagamento e per la conservazione dei registri delle transazioni come richiesto dalla legge.",
        "**I sogni che hai scritto e i file creati non vengono memorizzati nemmeno in caso di pagamento.** Il principio di cui al punto 1 rimane invariato, indipendentemente dal pagamento. Gli elementi memorizzati sono i seguenti e non includono informazioni identificative come nome, contatto e indirizzo."
      ],
      "bullets": [
        "Numero d'ordine e identificatore di pagamento",
        "Importo del pagamento, valuta e stato del pagamento (non pagato, pagamento completato, annullato)",
        "Tipo di prodotto, stato di elaborazione, numero di download del documento, data e ora dell'ordine",
        "Lingua della schermata al momento dell'ordine e distinzione della regione di pagamento (nazionale, internazionale)",
        "Periodo di conservazione — secondo l'articolo 6 della legge sulla protezione dei consumatori nel commercio elettronico, i registri relativi ai pagamenti e alla fornitura di beni saranno conservati per 5 anni, mentre i registri relativi a reclami o controversie dei consumatori saranno conservati per 3 anni e poi distrutti."
      ]
    },
    {
      "heading": "6. Fornitura a terzi e delega del trattamento",
      "paragraphs": [
        "Non memorizzando dati personali identificabili, non ci sono dati personali forniti a terzi. Il trattamento dei pagamenti è delegato ai seguenti fornitori.",
        "Per il funzionamento del servizio, utilizziamo l'infrastruttura di hosting di {hostingProvider}, e in questo processo, i registri di accesso di cui al punto 3 vengono trattati secondo le politiche di quel fornitore.",
        "I pagamenti nazionali sono gestiti da Toss Payments, mentre i pagamenti internazionali sono elaborati tramite PayPal attraverso PortOne. Le informazioni sui metodi di pagamento come numeri di carta e numeri di conto sono gestite direttamente da questi fornitori e il servizio non le riceve né le memorizza."
      ]
    },
    {
      "heading": "7. Diritti degli utenti",
      "paragraphs": [
        "Poiché i sogni che hai scritto non vengono memorizzati, non ci sono soggetti a cui richiedere accesso, correzione o cancellazione. I registri degli ordini rimanenti a seguito del pagamento devono essere conservati per il periodo stabilito dalla legge, quindi non possono essere cancellati durante quel periodo e saranno distrutti una volta scaduto.",
        "Gli utenti possono eliminare tutte le tracce di input semplicemente cancellando il link dei risultati dalla barra degli indirizzi del browser.",
        "Se hai domande relative all'uso del servizio, ti preghiamo di contattarci ai dettagli sottostanti."
      ]
    },
    {
      "heading": "8. Dati personali dei minori",
      "paragraphs": [
        "Questo servizio non è destinato a bambini di età inferiore ai 14 anni e non raccoglie dati personali da bambini."
      ]
    },
    {
      "heading": "9. Responsabile della protezione dei dati personali",
      "paragraphs": [
        "Responsabile della protezione: {privacyOfficer}",
        "Contatti: {email} / {customerCenter}"
      ]
    },
    {
      "heading": "10. Modifiche alla politica",
      "paragraphs": [
        "In caso di modifica di questa politica, la data di entrata in vigore e i dettagli delle modifiche saranno pubblicati su questa pagina. Se ci sono cambiamenti effettivi nel trattamento, come l'inizio della pubblicazione di annunci o la vendita di prodotti a pagamento, informeremo prima della modifica."
      ]
    }
  ],
  "effectiveLabel": "Data di entrata in vigore"
};

const d6 = {
  "title": "Termini di utilizzo",
  "intro": "Questi termini stabiliscono le condizioni per l'utilizzo del servizio Dreams-Link (di seguito \"Servizio\"). Utilizzando il servizio, si considera che si accettino questi termini.",
  "sections": [
    {
      "heading": "1. Natura del servizio",
      "paragraphs": [
        "Il servizio cerca simboli tradizionali di interpretazione dei sogni nei sogni forniti dagli utenti e mostra i significati associati a tali simboli come materiale di riferimento. Si dichiara che non è possibile trovare simboli non presenti nel dizionario e non si inventano significati inesistenti.",
        "I simboli e le interpretazioni presentati sono **materiale di riferimento dal punto di vista dell'interpretazione tradizionale e non costituiscono previsioni sul futuro né consulenze mediche, finanziarie o legali.** Un sogno positivo non garantisce che accada qualcosa di buono, e un sogno negativo non implica che qualcosa di cattivo sia programmato.",
        "**I risultati relativi ai sogni di concezione non determinano la gravidanza o il sesso del feto.** Si informa solo che un simbolo tradizionalmente considerato un sogno di concezione è apparso nel sogno e il suo contesto."
      ]
    },
    {
      "heading": "2. Tariffe di utilizzo",
      "paragraphs": [
        "La consultazione e la visualizzazione dei risultati dell'interpretazione dei sogni sono gratuite e non è necessaria la registrazione.",
        "Ricevere i risultati sotto forma di carta dei sogni (dream card) (immagine) o rapporto sui sogni di concezione (태몽 리포트) (PDF) è a pagamento. Prezzi e condizioni sono indicati nel paragrafo 3 e nella schermata di pagamento."
      ]
    },
    {
      "heading": "3. Prodotti a pagamento e rimborsi",
      "paragraphs": [
        "I prodotti a pagamento in vendita sono **due**. È possibile utilizzare l'interpretazione gratuita senza alcun pagamento, mentre i due prodotti sottostanti vengono forniti in una forma che consente di conservarne i risultati.",
        "**Carta dei sogni** — un file immagine. Viene creata un'immagine che conserva e consente di condividere i simboli e i significati tradizionali del sogno di quel giorno. **Non è un documento (PDF).** Pagamento nazionale {priceCardDomestic} (IVA inclusa), pagamento internazionale {priceCardGlobal}.",
        "**Rapporto sui sogni di concezione PDF** — 4 pagine. Contiene il significato tradizionale dei simboli e il loro contesto in forma di documento. **Non determina la gravidanza** — si informa solo che un simbolo tradizionalmente considerato un sogno di concezione è apparso nel sogno. Pagamento nazionale {priceConceptionDomestic} (IVA inclusa), pagamento internazionale {priceConceptionGlobal}.",
        "Il pagamento nazionale può essere effettuato tramite Toss Payments utilizzando carte di credito/debito e pagamenti semplificati (Toss Pay, Kakao Pay, Naver Pay, Payco, ecc.), mentre il pagamento internazionale avviene tramite PayPal attraverso PortOne. L'importo finale è quello visualizzato nella schermata di pagamento.",
        "**Il servizio non conserva né i dati inseriti dall'utente né i file PDF creati.** Una volta approvato il pagamento, il documento viene creato e inviato immediatamente, senza lasciare nulla sul server. Pertanto, il file scaricato deve essere conservato dall'utente.",
        "In caso di interruzione del download o smarrimento del file, è possibile scaricare nuovamente fino a **5 volte** con lo stesso ordine. Tuttavia, se si esce dalla schermata dei risultati e i dati inseriti vengono persi, non sarà possibile ricrearlo, quindi si prega di salvare il file subito dopo il pagamento."
      ],
      "bullets": [
        "**Fino a quando il download non inizia dopo il pagamento,** è possibile annullare in qualsiasi momento e ricevere un rimborso completo.",
        "**Dopo il completamento del download,** il recesso per semplice ripensamento è limitato. Si tratta di contenuti digitali forniti immediatamente e non ripristinabili, che rientrano nei motivi di limitazione del recesso stabiliti dall'articolo 17, comma 2 della legge sulla protezione dei consumatori nel commercio elettronico.",
        "**In caso di errore di sistema che impedisce la creazione del documento, file non apribili o importo di pagamento diverso dall'ordine,** verrà trattato come riemissione o rimborso completo.",
        "**Le lamentele sui contenuti dei risultati** non costituiscono motivo di rimborso. I risultati dell'interpretazione sono materiale di riferimento dal punto di vista dell'interpretazione tradizionale e questa natura è comunicata prima del pagamento (vedi punto 1).",
        "Richieste di riemissione dopo aver utilizzato tutte le 5 volte non costituiscono motivo di rimborso.",
        "**Se un minorenne effettua un pagamento senza il consenso del legale rappresentante,** il minorenne o il legale rappresentante possono annullare il pagamento. Se ci informate tramite i contatti sottostanti, procederemo al rimborso."
      ]
    },
    {
      "heading": "4. Risultati dell'interpretazione dei sogni",
      "paragraphs": [
        "Le regole per la ricerca dei simboli seguono un dizionario pubblico e procedure stabilite, quindi scrivendo lo stesso testo si ottiene sempre lo stesso simbolo.",
        "Scrivendo in modo conciso, il numero di simboli trovati diminuisce. Non è possibile trovare simboli non presenti nel dizionario e in tal caso i risultati rimarranno vuoti.",
        "Il dizionario dei simboli è una raccolta di testi tradizionali di interpretazione dei sogni e racconti orali, e le interpretazioni possono variare a seconda della regione e del periodo."
      ]
    },
    {
      "heading": "5. Responsabilità dell'utente",
      "paragraphs": [
        "L'utente può scrivere i sogni di altre persone, ma non deve utilizzare i risultati in modo da danneggiare gli altri.",
        "Non utilizzare i risultati del servizio come base per decisioni che influenzano i diritti o gli interessi delle persone, come gravidanza, salute, investimenti, assunzioni, ecc. Il servizio non è stato creato per tali scopi."
      ]
    },
    {
      "heading": "6. Attività vietate",
      "paragraphs": [
        "Le seguenti attività non sono consentite."
      ],
      "bullets": [
        "Inviare richieste eccessive tramite strumenti automatizzati che ostacolano il funzionamento del servizio",
        "Presentare i risultati del servizio come fatti o come risultati di esperti",
        "Duplicare o modificare il servizio per fornire lo stesso servizio"
      ]
    },
    {
      "heading": "7. Esclusione di responsabilità",
      "paragraphs": [
        "Il servizio fornisce solo materiale di riferimento e non si assume responsabilità per le decisioni e i risultati derivanti da tali decisioni basate sui risultati.",
        "In caso di interruzione del servizio per motivi al di fuori del controllo, come calamità naturali o guasti dei fornitori di infrastrutture, non si assume responsabilità per i danni derivanti."
      ]
    },
    {
      "heading": "8. Diritti di proprietà intellettuale",
      "paragraphs": [
        "I diritti sui contenuti, frasi e implementazioni delle regole di calcolo del servizio appartengono all'operatore. L'utente può salvare o condividere i risultati per scopi personali."
      ]
    },
    {
      "heading": "9. Modifiche ai termini e legge applicabile",
      "paragraphs": [
        "In caso di modifica dei termini, saranno pubblicati su questa pagina con la data di entrata in vigore.",
        "Questi termini sono regolati dalla legge della Repubblica di Corea e le controversie relative all'utilizzo del servizio seguiranno le procedure stabilite dalle leggi pertinenti."
      ]
    }
  ],
  "effectiveLabel": "Data di entrata in vigore"
};

const d7 = {
  "title": "Politica di trattamento dei dati personali",
  "intro": "Dreams-Link non memorizza informazioni necessarie per l'interpretazione dei sogni. Questa politica descrive cosa viene ricevuto dal servizio, cosa non viene lasciato e cosa viene registrato automaticamente.",
  "sections": [
    {
      "heading": "1. Informazioni non memorizzate",
      "paragraphs": [
        "Le storie dei sogni che scrivete per l'interpretazione, i vostri sentimenti al risveglio e se sognate ripetutamente lo stesso sogno **non vengono memorizzati da nessuna parte.** Vengono utilizzati solo temporaneamente nella memoria del server durante l'elaborazione della richiesta e scompaiono con la risposta.",
        "Non vengono registrati nel database e non vengono conservati in file separati. Non essendoci registrazione degli utenti, i dati inseriti non sono collegati a persone specifiche.",
        "Le storie dei sogni sono i dati più privati che questo servizio riceve. Pertanto, non è presente una funzione per rivedere i risultati passati (diario dei sogni) — tale funzione richiederebbe la conservazione continua dei testi che avete scritto."
      ]
    },
    {
      "heading": "2. Informazioni contenute nel link dei risultati",
      "paragraphs": [
        "L'indirizzo della schermata dei risultati contiene i valori di input codificati. Tuttavia, questi valori si trovano dopo il simbolo # nell'indirizzo, e secondo gli standard web, il contenuto dopo il # non viene inviato dal browser al server. Pertanto, anche se si apre il link dei risultati, nella registrazione degli accessi del server rimane solo il percorso dell'indirizzo.",
        "Se inviate il link dei risultati a qualcun altro, quella persona potrà vedere gli stessi risultati. Poiché il link stesso contiene i valori di input, la decisione di condividerlo spetta all'utente."
      ]
    },
    {
      "heading": "3. Informazioni raccolte automaticamente",
      "paragraphs": [
        "Non vengono raccolte informazioni per identificare gli utenti. Tuttavia, vengono automaticamente registrati dal fornitore di infrastruttura i minimi dati necessari per il funzionamento del servizio."
      ],
      "bullets": [
        "Indirizzo IP di accesso, data e ora di accesso, tipo di browser e altre registrazioni generali degli accessi al server",
        "Informazioni sul paese — utilizzate solo per determinare automaticamente la lingua della schermata e non vengono memorizzate"
      ]
    },
    {
      "heading": "4. Cookie e pubblicità",
      "paragraphs": [
        "Il servizio stesso non utilizza cookie per identificare o tracciare gli utenti. Le storie dei sogni che scrivete non vengono trasmesse agli inserzionisti.",
        "Questo servizio pubblica annunci tramite Google AdSense. Durante questo processo avvengono le seguenti operazioni."
      ],
      "bullets": [
        "Fornitori terzi, inclusi Google, possono memorizzare o leggere cookie nel browser dell'utente.",
        "Google utilizza i cookie per pubblicare annunci basati sulla cronologia delle visite a questo e ad altri siti.",
        "Gli utenti possono disattivare gli annunci personalizzati nelle impostazioni pubblicitarie di Google (google.com/settings/ads). Anche se disattivati, gli annunci continueranno a essere visualizzati, ma saranno meno pertinenti per l'utente.",
        "Gli annunci personalizzati di tutti i fornitori terzi possono essere disattivati in una sola volta su aboutads.info/choices.",
        "Esiste anche un modo per bloccare i cookie nelle impostazioni del browser.",
        "Agli utenti dello Spazio Economico Europeo, del Regno Unito e della Svizzera viene prima chiesto il consenso all'uso dei cookie pubblicitari."
      ]
    },
    {
      "heading": "5. Informazioni memorizzate al momento del pagamento",
      "paragraphs": [
        "Quando si effettua un pagamento per prodotti a pagamento (dream card, rapporto sui sogni di concezione), le informazioni dell'ordine vengono memorizzate per l'elaborazione del pagamento e per la conservazione dei registri delle transazioni come richiesto dalla legge.",
        "**I sogni che scrivete e i file creati non vengono memorizzati nemmeno in caso di pagamento.** Il principio di cui al punto 1 rimane invariato, indipendentemente dal pagamento. Gli elementi memorizzati sono i seguenti, e non includono informazioni identificative come nome, contatto e indirizzo."
      ],
      "bullets": [
        "Numero d'ordine e identificatore di pagamento",
        "Importo del pagamento, valuta e stato del pagamento (non pagato, pagamento completato, annullato)",
        "Tipo di prodotto, stato di elaborazione, numero di download del documento, data e ora dell'ordine",
        "Lingua della schermata al momento dell'ordine e distinzione della regione di pagamento (nazionale, internazionale)",
        "Periodo di conservazione — secondo l'articolo 6 della Legge sulla protezione dei consumatori nel commercio elettronico, i registri relativi ai pagamenti e alla fornitura di beni saranno conservati per 5 anni, mentre i registri relativi a reclami o controversie dei consumatori saranno conservati per 3 anni e poi distrutti."
      ]
    },
    {
      "heading": "6. Fornitura a terzi e delega al trattamento",
      "paragraphs": [
        "Non memorizzando dati personali identificabili, non vengono forniti dati personali a terzi. L'elaborazione dei pagamenti è delegata ai seguenti fornitori.",
        "Per il funzionamento del servizio, utilizziamo l'infrastruttura di hosting di {hostingProvider}, e in questo processo, i registri di accesso di cui al punto 3 vengono trattati secondo le politiche di quel fornitore.",
        "I pagamenti nazionali sono gestiti da Toss Payments, mentre i pagamenti internazionali sono elaborati tramite PayPal di PortOne. Le informazioni sui metodi di pagamento, come numeri di carta e numeri di conto, sono gestite direttamente da questi fornitori e il servizio non le riceve né le memorizza."
      ]
    },
    {
      "heading": "7. Diritti degli utenti",
      "paragraphs": [
        "Poiché i sogni che scrivete non vengono memorizzati, non ci sono soggetti a cui richiedere l'accesso, la correzione o la cancellazione. I registri degli ordini rimanenti a seguito del pagamento devono essere conservati per il periodo stabilito dalla legge e non possono essere cancellati durante tale periodo; una volta scaduto, verranno distrutti.",
        "Gli utenti possono eliminare tutte le tracce di input semplicemente cancellando il link dei risultati dalla barra degli indirizzi del browser.",
        "Se avete domande relative all'uso del servizio, vi preghiamo di contattarci ai seguenti recapiti."
      ]
    },
    {
      "heading": "8. Dati personali dei minori",
      "paragraphs": [
        "Questo servizio non è destinato a bambini di età inferiore ai 14 anni e non raccoglie dati personali da bambini."
      ]
    },
    {
      "heading": "9. Responsabile della protezione dei dati personali",
      "paragraphs": [
        "Responsabile della protezione: {privacyOfficer}",
        "Contatti: {email} / {customerCenter}"
      ]
    },
    {
      "heading": "10. Modifiche alla politica",
      "paragraphs": [
        "In caso di modifica di questa politica, la data di entrata in vigore e i dettagli delle modifiche saranno pubblicati su questa pagina. Se ci sono cambiamenti effettivi nel trattamento, come l'inizio della pubblicazione di annunci o la vendita di prodotti a pagamento, verrà data notifica anticipata delle modifiche."
      ]
    }
  ],
  "effectiveLabel": "Data di entrata in vigore"
};

export const it: LegalLocaleDocuments = {
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
