import type { LegalLocaleDocuments } from "@/lib/legal-locales/types";

// ko 원본에서 자동 생성된 번역이다(scripts/translate-legal.mjs). 손으로 고쳐도 되지만,
// 다시 생성하면 덮어쓴다 — 문구를 바꿀 일이 있으면 ko를 먼저 고치고 전체를 다시 만들 것.
// 사업자 정보와 가격은 플레이스홀더로 남아 있고 실제 값은 getLegalDocument가 넣는다.

const d0 = {
  "title": "Informativa sul trattamento dei dati personali",
  "intro": "InyeonLink non memorizza le informazioni necessarie per il calcolo della compatibilità. Questa politica descrive cosa viene ricevuto dal servizio, cosa non viene lasciato e cosa viene registrato automaticamente.",
  "sections": [
    {
      "heading": "1. Informazioni non memorizzate",
      "paragraphs": [
        "Le date di nascita, l'orario di nascita, il luogo di nascita, il sesso e il nome utilizzato inseriti per il calcolo della compatibilità **non vengono memorizzati in alcun modo.** Vengono utilizzati solo nella memoria del server durante l'elaborazione della richiesta e scompaiono con la risposta.",
        "Non vengono registrati nel database e non vengono conservati in file separati. Non essendoci registrazione, i valori inseriti non sono collegati a persone specifiche."
      ]
    },
    {
      "heading": "2. Informazioni contenute nel link dei risultati",
      "paragraphs": [
        "L'indirizzo della schermata dei risultati contiene i valori inseriti codificati. Tuttavia, questo valore si trova dopo il # nell'indirizzo e, secondo gli standard web, il contenuto dopo il # non viene inviato dal browser al server. Pertanto, anche se si apre il link dei risultati, nella registrazione degli accessi al server rimane solo il percorso dell'indirizzo.",
        "Se si invia il link dei risultati a un'altra persona, anche quella persona potrà vedere gli stessi risultati. Poiché il link stesso contiene i valori inseriti, la decisione di condividerlo spetta all'utente."
      ]
    },
    {
      "heading": "3. Informazioni raccolte automaticamente",
      "paragraphs": [
        "Non vengono raccolte informazioni per identificare gli utenti. Tuttavia, vengono registrati automaticamente i minimi dati necessari per il funzionamento del servizio da parte del fornitore di infrastrutture."
      ],
      "bullets": [
        "Indirizzo IP di accesso, data e ora di accesso, tipo di browser e altre registrazioni generali degli accessi al server",
        "Informazioni sul paese — utilizzate solo per determinare automaticamente la lingua dello schermo e non vengono memorizzate"
      ]
    },
    {
      "heading": "4. Cookie e pubblicità",
      "paragraphs": [
        "Il servizio stesso non utilizza cookie per tracciare gli utenti.",
        "Attualmente, non ci sono annunci pubblicati su questo servizio. Se in futuro verranno pubblicati annunci, i fornitori di annunci (ad es. Google) potrebbero utilizzare cookie per la pubblicazione degli annunci. In tal caso, questa clausola verrà modificata in anticipo per chiarire cosa cambia."
      ]
    },
    {
      "heading": "5. Informazioni memorizzate al momento del pagamento",
      "paragraphs": [
        "Attualmente non vengono venduti prodotti a pagamento, quindi non ci sono informazioni memorizzate relative ai pagamenti.",
        "Quando inizieremo a vendere, verranno memorizzati i seguenti elementi per il trattamento dei pagamenti e la conservazione dei registri delle transazioni ai sensi della legge. **Anche in quel caso, i valori inseriti per il calcolo della compatibilità e il PDF creato non verranno memorizzati**, né verranno raccolte informazioni identificative come nome, contatto e indirizzo."
      ],
      "bullets": [
        "Numero d'ordine e identificatore di pagamento",
        "Importo del pagamento, valuta e stato del pagamento (non pagato, pagamento completato, annullato)",
        "Tipo di prodotto, stato di elaborazione, numero di download del documento, data e ora dell'ordine",
        "Lingua dello schermo al momento dell'ordine e distinzione della regione di pagamento (nazionale, internazionale)",
        "Periodo di conservazione — Ai sensi dell'articolo 6 della «Legge sulla protezione dei consumatori nel commercio elettronico», i registri relativi ai pagamenti e alla fornitura di beni saranno conservati per 5 anni, mentre i registri relativi alla gestione dei reclami o delle controversie dei consumatori saranno conservati per 3 anni e poi distrutti."
      ]
    },
    {
      "heading": "6. Fornitura a terzi e delega al trattamento",
      "paragraphs": [
        "Non essendoci dati personali memorizzati, non ci sono dati personali forniti a terzi.",
        "Per il funzionamento del servizio, utilizziamo l'infrastruttura di hosting di {hostingProvider}, e in questo processo, i registri di accesso di cui al punto 3 vengono trattati secondo le politiche di quel fornitore.",
        "Quando iniziamo a vendere prodotti a pagamento, i pagamenti nazionali saranno delegati a Toss Payments, mentre i pagamenti internazionali saranno delegati a PortOne (PayPal). Le informazioni sui metodi di pagamento come numero di carta e numero di conto saranno gestite direttamente da questi fornitori e il servizio non le riceverà."
      ]
    },
    {
      "heading": "7. Diritti degli utenti",
      "paragraphs": [
        "Non essendoci dati personali memorizzati, non ci sono soggetti a cui richiedere accesso, correzione o cancellazione.",
        "Gli utenti possono eliminare tutte le tracce di input semplicemente cancellando il link dei risultati dalla barra degli indirizzi del browser.",
        "Se ci sono domande relative all'uso del servizio, si prega di contattarci ai seguenti recapiti."
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

const d1 = {
  "title": "Termini di utilizzo",
  "intro": "Questi termini stabiliscono le condizioni per l'utilizzo del servizio InyeonLink (di seguito \"Servizio\"). Utilizzando il servizio, si considera che si accetti questi termini.",
  "sections": [
    {
      "heading": "1. Natura del servizio",
      "paragraphs": [
        "Il servizio mostra le relazioni tra due persone applicando le regole delle tradizionali divinazioni coreane (saju) e del sistema zodiacale coreano basato sulle date di nascita inserite.",
        "Le percentuali di corrispondenza e le spiegazioni fornite sono **materiale di riferimento dal punto di vista dell'interpretazione tradizionale e non costituiscono previsioni scientifiche o affermazioni sui rapporti.** Un punteggio basso non implica necessariamente una cattiva relazione, e un punteggio alto non garantisce una relazione positiva."
      ]
    },
    {
      "heading": "2. Tariffe di utilizzo",
      "paragraphs": [
        "Attualmente, il servizio è completamente gratuito e non è necessaria la registrazione.",
        "Quando inizieremo a vendere prodotti a pagamento (rapporto di compatibilità in formato PDF), si applicheranno le condizioni di cui al punto 3 sottostante. Prima dell'inizio delle vendite, questi termini saranno nuovamente comunicati."
      ]
    },
    {
      "heading": "3. Prodotti a pagamento e rimborsi",
      "paragraphs": [
        "L'unico prodotto a pagamento in vendita è il **rapporto di compatibilità in formato PDF**. Creeremo un documento PDF di 3 pagine con i risultati visualizzati sullo schermo, includendo anche i valori delle forze degli elementi che non sono mostrati sullo schermo.",
        "Il prezzo è di {priceDomestic} per i pagamenti nazionali (IVA inclusa) e {priceGlobal} per i pagamenti internazionali. I pagamenti nazionali possono essere effettuati tramite Toss Payments utilizzando carte di credito/debito e pagamenti semplificati (Toss Pay, Kakao Pay, Naver Pay, Payco, ecc.), mentre i pagamenti internazionali avvengono tramite PayPal attraverso PortOne. L'importo finale è quello visualizzato nella schermata di pagamento.",
        "**Il servizio non conserva né i dati inseriti dall'utente né il file PDF creato.** Una volta approvato il pagamento, il documento viene generato e scaricato immediatamente, senza lasciare nulla sul server. Pertanto, l'utente deve conservare direttamente il file scaricato.",
        "In caso di interruzione del download o smarrimento del file, è possibile scaricarlo nuovamente fino a **5 volte** con lo stesso ordine. Tuttavia, se i dati di input vengono persi al di fuori della schermata dei risultati, non sarà possibile ricrearli, quindi si prega di salvare il file subito dopo il pagamento."
      ],
      "bullets": [
        "**Prima dell'inizio del download dopo il pagamento,** è possibile annullare in qualsiasi momento e ricevere un rimborso completo.",
        "**Dopo il completamento del download,** il diritto di recesso per semplice ripensamento è limitato. Si tratta di contenuti digitali forniti immediatamente e non ripristinabili, che rientrano nei motivi di limitazione del diritto di recesso ai sensi dell'articolo 17, comma 2 della Legge sulla protezione dei consumatori nel commercio elettronico.",
        "**In caso di errore di sistema che impedisca la creazione del documento, file non apribili o importo di pagamento diverso dall'ordine,** verrà effettuata una riemissione o un rimborso completo.",
        "**Le lamentele sui contenuti dei risultati** non costituiscono motivo di rimborso. I risultati della compatibilità sono materiale di riferimento dal punto di vista dell'interpretazione tradizionale e questa natura è comunicata prima del pagamento (vedi punto 1).",
        "Richieste di riemissione dopo aver utilizzato tutte le 5 volte non costituiscono motivo di rimborso.",
        "**Se un minorenne effettua un pagamento senza il consenso del proprio rappresentante legale,** il minorenne o il rappresentante legale possono annullare tale pagamento. Si prega di contattarci ai dettagli sottostanti per ricevere un rimborso."
      ]
    },
    {
      "heading": "4. Risultati dei calcoli",
      "paragraphs": [
        "Tutti i punteggi sono calcolati secondo regole pubbliche, quindi inserendo gli stessi valori si ottiene sempre lo stesso risultato.",
        "Se non viene inserito l'orario di nascita, il calcolo esclude il pilastro temporale (時柱), quindi i risultati possono variare. Maggiore è la precisione nella scelta del luogo di nascita, più accurato sarà il calcolo del pilastro temporale.",
        "Il calcolo del saju utilizza una libreria di calcolo pubblica e i risultati possono variare a seconda del trattamento delle stagioni e dei fusi orari."
      ]
    },
    {
      "heading": "5. Responsabilità dell'utente",
      "paragraphs": [
        "L'utente può inserire le date di nascita di altre persone, ma non deve utilizzare i risultati in modo da danneggiare gli altri.",
        "Non utilizzare i risultati del servizio come base per decisioni che influenzano i diritti di terzi, come matrimonio, divorzio, assunzioni o transazioni. Il servizio non è stato creato per tali scopi."
      ]
    },
    {
      "heading": "6. Atti vietati",
      "paragraphs": [
        "Le seguenti azioni non sono consentite."
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
        "Il servizio fornisce solo materiale di riferimento e non si assume responsabilità per le decisioni e i risultati derivanti da tali decisioni da parte dell'utente.",
        "Non ci assumiamo responsabilità per danni derivanti da interruzioni del servizio causate da eventi incontrollabili come calamità naturali o guasti dei fornitori di infrastrutture."
      ]
    },
    {
      "heading": "8. Diritti di proprietà intellettuale",
      "paragraphs": [
        "I diritti relativi allo schermo del servizio, ai testi e alle implementazioni delle regole di calcolo appartengono all'operatore. Gli utenti possono salvare o condividere i risultati per scopi personali."
      ]
    },
    {
      "heading": "9. Modifiche ai termini e legge applicabile",
      "paragraphs": [
        "In caso di modifica dei termini, questi saranno pubblicati su questa pagina con la data di entrata in vigore.",
        "Questi termini sono regolati dalla legge della Repubblica di Corea e le controversie relative all'utilizzo del servizio seguiranno le procedure stabilite dalle leggi pertinenti."
      ]
    }
  ],
  "effectiveLabel": "Data di entrata in vigore"
};

const d2 = {
  "title": "Politica di rimborso e cancellazione",
  "intro": "Questi sono i criteri per la cancellazione e il rimborso del report di compatibilità in formato PDF. Abbiamo raccolto separatamente contenuti simili a quelli dell'articolo 3 dei termini e condizioni.",
  "sections": [
    {
      "heading": "1. Natura del prodotto",
      "paragraphs": [
        "Il prodotto in vendita è un'unica **report di compatibilità in formato PDF**, e una volta approvato il pagamento, il documento viene creato e inviato immediatamente come contenuto digitale.",
        "**Il servizio non conserva né i dati inseriti dall'utente né il file PDF creato.** Pertanto, il file scaricato deve essere conservato direttamente dall'utente."
      ]
    },
    {
      "heading": "2. Diritto di recesso",
      "paragraphs": [
        "Si seguono i criteri stabiliti dalla legge sul commercio elettronico."
      ],
      "bullets": [
        "**Fino a quando il download non è iniziato,** è possibile annullare in qualsiasi momento e ricevere un rimborso completo.",
        "**Dopo il completamento del download,** il diritto di recesso per semplice ripensamento è limitato. Si tratta di contenuti digitali forniti immediatamente e non ripristinabili, che rientrano nei motivi di limitazione stabiliti dall'articolo 17, comma 2 della 「Legge sulla protezione dei consumatori nel commercio elettronico」. Questa informazione viene comunicata e il consenso viene ottenuto nella schermata di pagamento."
      ]
    },
    {
      "heading": "3. Casi di rimborso completo",
      "paragraphs": [
        "Nei seguenti casi, dopo aver verificato il motivo, procederemo con la riemissione o il rimborso completo."
      ],
      "bullets": [
        "In caso di errore di sistema che impedisce la creazione del documento",
        "Se il file scaricato non si apre",
        "Se l'importo pagato è diverso da quello dell'ordine",
        "**Se un minorenne ha effettuato il pagamento senza il consenso del legale rappresentante** — È possibile richiedere l'annullamento da parte dell'interessato o del legale rappresentante."
      ]
    },
    {
      "heading": "4. Casi non validi per il rimborso",
      "paragraphs": [],
      "bullets": [
        "**Insoddisfazione riguardo al contenuto dei risultati.** I risultati della compatibilità sono materiali di riferimento secondo la tradizione interpretativa e la loro natura è stata comunicata prima del pagamento.",
        "Richiesta di riemissione dopo aver utilizzato tutte e cinque le possibilità di riemissione."
      ]
    },
    {
      "heading": "5. Modalità di ricezione",
      "paragraphs": [
        "Per rimborsi e richieste, si prega di contattare il centro assistenza ({customerCenter}) o inviare un'email a ({email}). Se ci fornite il numero dell'ordine, la verifica sarà più rapida.",
        "I rimborsi saranno effettuati tramite il metodo di pagamento utilizzato, e a seconda delle circostanze della società della carta o del fornitore di pagamento, potrebbero essere necessari da 3 a 7 giorni lavorativi per l'elaborazione."
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
        "**Il calcolo della compatibilità e la consultazione dei risultati sono gratuiti.** Non è necessaria la registrazione.",
        "È possibile visualizzare il tasso di corrispondenza, i punteggi per ciascun elemento, le quattro colonne del saju delle due persone e la forza degli elementi, nonché la forma della relazione, tutto sullo schermo."
      ]
    },
    {
      "heading": "2. Report di Compatibilità PDF (a pagamento)",
      "paragraphs": [
        "Pagamento domestico {priceDomestic} (IVA inclusa) · Pagamento internazionale {priceGlobal}",
        "Creiamo un documento PDF di 3 pagine con i risultati visualizzati sullo schermo. Include anche i valori della forza degli elementi che non sono mostrati sullo schermo.",
        "Puoi scaricare nuovamente lo stesso ordine fino a **5 volte**. Tuttavia, se esci dalla schermata dei risultati e i valori di input scompaiono, non sarà possibile ricrearlo, quindi ti preghiamo di salvare il file subito dopo il pagamento."
      ]
    },
    {
      "heading": "3. Metodi di Pagamento",
      "paragraphs": [
        "**Nazionale** — Puoi utilizzare carte di credito/debito e pagamenti semplificati (Toss Payments, KakaoPay, NaverPay, Payco, ecc.) tramite Toss Payments.",
        "**Internazionale** — Puoi pagare tramite PayPal attraverso PortOne.",
        "L'importo finale del pagamento è quello visualizzato nella schermata di pagamento."
      ]
    },
    {
      "heading": "4. Modifica dei Prezzi",
      "paragraphs": [
        "In caso di modifica dei prezzi, verrà prima pubblicato su questa pagina. I prezzi modificati non si applicano agli ordini già completati."
      ]
    }
  ],
  "effectiveLabel": "Data di Efficacia"
};

const d4 = {
  "title": "Politica di trattamento dei dati personali",
  "intro": "InyeonLink non memorizza informazioni necessarie per il calcolo della compatibilità. Questa politica descrive cosa viene ricevuto dal servizio, cosa non viene lasciato e cosa viene registrato automaticamente.",
  "sections": [
    {
      "heading": "1. Informazioni non memorizzate",
      "paragraphs": [
        "Le informazioni inserite per il calcolo della compatibilità, come data di nascita, ora di nascita, luogo di nascita, sesso e nome, **non vengono salvate in alcun luogo.** Vengono utilizzate solo nella memoria del server durante l'elaborazione della richiesta e scompaiono con la risposta.",
        "Non vengono registrate nel database e non vengono lasciate in file separati. Non essendoci registrazione degli utenti, i valori inseriti non sono collegati a persone specifiche."
      ]
    },
    {
      "heading": "2. Informazioni contenute nel link dei risultati",
      "paragraphs": [
        "L'indirizzo della schermata dei risultati contiene i valori inseriti codificati. Tuttavia, questo valore si trova dopo il # nell'indirizzo e, secondo gli standard web, il contenuto dopo il # non viene inviato dal browser al server. Pertanto, anche se si apre il link dei risultati, nella registrazione degli accessi al server rimane solo il percorso dell'indirizzo.",
        "Se si invia il link dei risultati a un'altra persona, anche quella persona può vedere gli stessi risultati. Poiché il link stesso contiene i valori inseriti, la decisione di condividerlo spetta all'utente."
      ]
    },
    {
      "heading": "3. Informazioni raccolte automaticamente",
      "paragraphs": [
        "Non vengono raccolte informazioni per identificare gli utenti. Tuttavia, vengono mantenuti automaticamente solo i registri minimi necessari per il funzionamento del servizio da parte del fornitore di infrastruttura."
      ],
      "bullets": [
        "Indirizzo IP di accesso, data e ora di accesso, tipo di browser e altre registrazioni generali degli accessi al server",
        "Informazioni sul paese — utilizzate solo per determinare automaticamente la lingua dello schermo e non vengono memorizzate"
      ]
    },
    {
      "heading": "4. Cookie e pubblicità",
      "paragraphs": [
        "Il servizio stesso non utilizza cookie per identificare o tracciare gli utenti. Le informazioni inserite per il calcolo della compatibilità non vengono trasmesse agli inserzionisti.",
        "Questo servizio pubblica annunci tramite Google AdSense. Durante questo processo, si verificano le seguenti situazioni."
      ],
      "bullets": [
        "Fornitori terzi, inclusi Google, possono memorizzare o leggere cookie nel browser dell'utente.",
        "Google utilizza cookie per pubblicare annunci basati sulla cronologia di visita di questo sito e di altri siti.",
        "Gli utenti possono disattivare gli annunci personalizzati nelle impostazioni pubblicitarie di Google (google.com/settings/ads). Anche se disattivati, gli annunci continueranno a essere visualizzati, ma saranno meno pertinenti per l'utente.",
        "Gli annunci personalizzati di tutti i fornitori terzi possono essere disattivati in una sola volta su aboutads.info/choices.",
        "Esiste anche un modo per bloccare i cookie nelle impostazioni del browser.",
        "Agli utenti dello Spazio Economico Europeo, Regno Unito e Svizzera viene prima chiesto il consenso all'uso dei cookie pubblicitari."
      ]
    },
    {
      "heading": "5. Informazioni memorizzate al momento del pagamento",
      "paragraphs": [
        "Attualmente non vengono venduti prodotti a pagamento, quindi non ci sono informazioni memorizzate relative ai pagamenti.",
        "Quando inizieremo a vendere, verranno memorizzati i seguenti elementi per il trattamento dei pagamenti e la conservazione dei registri delle transazioni ai sensi della legge. **Anche in quel caso, i valori inseriti per il calcolo della compatibilità e il PDF generato non verranno memorizzati**, e non verranno raccolte informazioni identificative come nome, contatto e indirizzo."
      ],
      "bullets": [
        "Numero d'ordine e identificatore di pagamento",
        "Importo del pagamento, valuta e stato del pagamento (non pagato, pagato, annullato)",
        "Tipo di prodotto, stato di elaborazione, numero di download del documento, data e ora dell'ordine",
        "Lingua dello schermo al momento dell'ordine e distinzione della regione di pagamento (nazionale o internazionale)",
        "Periodo di conservazione — Ai sensi dell'articolo 6 della Legge sulla protezione dei consumatori nel commercio elettronico, i registri relativi ai pagamenti e alla fornitura di beni saranno conservati per 5 anni, mentre i registri relativi alla gestione di reclami o controversie dei consumatori saranno conservati per 3 anni e poi distrutti."
      ]
    },
    {
      "heading": "6. Fornitura a terzi e delega al trattamento",
      "paragraphs": [
        "Non essendoci dati personali memorizzati, non ci sono dati personali forniti a terzi.",
        "Per il funzionamento del servizio, utilizziamo l'infrastruttura di hosting di {hostingProvider}, e in questo processo, i registri di accesso di cui al punto 3 vengono trattati secondo le politiche di quel fornitore.",
        "Quando iniziamo a vendere prodotti a pagamento, i pagamenti nazionali saranno delegati a Toss Payments e i pagamenti internazionali a PortOne (PayPal). Le informazioni sui metodi di pagamento, come numeri di carta e numeri di conto, saranno gestite direttamente da questi fornitori e il servizio non le riceverà."
      ]
    },
    {
      "heading": "7. Diritti degli utenti",
      "paragraphs": [
        "Non essendoci dati personali memorizzati, non ci sono soggetti a cui richiedere accesso, correzione o cancellazione.",
        "Gli utenti possono eliminare tutte le tracce di input semplicemente cancellando il link dei risultati dalla barra degli indirizzi del browser.",
        "Se ci sono domande relative all'uso del servizio, si prega di contattarci ai seguenti recapiti."
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
        "In caso di modifica di questa politica, la data di entrata in vigore e i dettagli delle modifiche saranno pubblicati su questa pagina. Se ci sono cambiamenti effettivi nel trattamento, come l'inizio della pubblicazione di annunci o la vendita di prodotti a pagamento, verrà data notifica anticipata della modifica."
      ]
    }
  ],
  "effectiveLabel": "Data di entrata in vigore"
};

const d5 = {
  "title": "Politica di trattamento dei dati personali",
  "intro": "InyeonLink non memorizza le informazioni necessarie per il calcolo della compatibilità. Questa politica descrive cosa viene ricevuto dal servizio, cosa non viene lasciato e cosa viene registrato automaticamente.",
  "sections": [
    {
      "heading": "1. Informazioni non memorizzate",
      "paragraphs": [
        "Le date di nascita, l'orario di nascita, il luogo di nascita, il sesso e il nome utilizzato inseriti per il calcolo della compatibilità **non vengono memorizzati in alcun luogo.** Vengono utilizzati solo nella memoria del server durante l'elaborazione della richiesta e scompaiono con la risposta.",
        "Non vengono registrati nel database e non vengono lasciati in file separati. Non essendoci registrazione, i valori inseriti non sono collegati a persone specifiche."
      ]
    },
    {
      "heading": "2. Informazioni contenute nel link dei risultati",
      "paragraphs": [
        "L'indirizzo della schermata dei risultati contiene i valori inseriti codificati. Tuttavia, questo valore si trova dopo il # nell'indirizzo e, secondo gli standard web, il contenuto dopo il # non viene inviato dal browser al server. Pertanto, anche se si apre il link dei risultati, nella registrazione degli accessi al server rimane solo il percorso dell'indirizzo.",
        "Se si invia il link dei risultati a un'altra persona, anche quella persona può vedere gli stessi risultati. Poiché il link stesso contiene i valori inseriti, si prega di valutare se condividerlo."
      ]
    },
    {
      "heading": "3. Informazioni raccolte automaticamente",
      "paragraphs": [
        "Non vengono raccolte informazioni per identificare gli utenti. Tuttavia, vengono automaticamente registrati i minimi dati necessari per il funzionamento del servizio forniti dal fornitore di infrastrutture."
      ],
      "bullets": [
        "Indirizzo IP di accesso, data e ora di accesso, tipo di browser e altre registrazioni generali degli accessi al server",
        "Informazioni sul paese — utilizzate solo per determinare automaticamente la lingua dello schermo e non vengono memorizzate"
      ]
    },
    {
      "heading": "4. Cookie e pubblicità",
      "paragraphs": [
        "Il servizio stesso non utilizza cookie per tracciare gli utenti.",
        "Attualmente, non ci sono pubblicità visualizzate su questo servizio. In futuro, se verranno visualizzate pubblicità, i fornitori di pubblicità (ad es. Google) potrebbero utilizzare cookie per la visualizzazione degli annunci. In tal caso, questa clausola verrà modificata in anticipo per chiarire cosa cambia."
      ]
    },
    {
      "heading": "5. Informazioni memorizzate al momento del pagamento",
      "paragraphs": [
        "Quando si effettua il pagamento per un prodotto a pagamento (report PDF di compatibilità), le informazioni sull'ordine vengono memorizzate per l'elaborazione del pagamento e per la conservazione dei registri delle transazioni ai sensi della legge.",
        "**I valori inseriti per il calcolo della compatibilità e il PDF creato non vengono memorizzati nemmeno in caso di pagamento.** Il principio di cui al punto 1 rimane invariato, indipendentemente dal pagamento. Gli elementi memorizzati sono i seguenti e non includono informazioni identificative come nome, contatto e indirizzo."
      ],
      "bullets": [
        "Numero d'ordine e identificatore di pagamento",
        "Importo del pagamento, valuta e stato del pagamento (non pagato, pagamento completato, annullato)",
        "Tipo di prodotto, stato di elaborazione, numero di download del documento, data e ora dell'ordine",
        "Lingua dello schermo al momento dell'ordine e distinzione della regione di pagamento (nazionale, internazionale)",
        "Periodo di conservazione — ai sensi dell'articolo 6 della «Legge sulla protezione dei consumatori nel commercio elettronico», i registri relativi al pagamento e alla fornitura di beni saranno conservati per 5 anni, mentre i registri relativi alla gestione di reclami o controversie dei consumatori saranno conservati per 3 anni e poi distrutti."
      ]
    },
    {
      "heading": "6. Fornitura a terzi e delega del trattamento",
      "paragraphs": [
        "Non memorizzando dati personali identificabili, non vengono forniti dati personali a terzi. L'elaborazione dei pagamenti è delegata ai seguenti fornitori.",
        "Per il funzionamento del servizio, utilizziamo l'infrastruttura di hosting di {hostingProvider}, e in questo processo, i registri di accesso di cui al punto 3 vengono trattati secondo le politiche di quel fornitore.",
        "I pagamenti nazionali sono gestiti da Toss Payments, mentre i pagamenti internazionali sono gestiti tramite PayPal di PortOne. Le informazioni sui metodi di pagamento come numeri di carta e numeri di conto sono gestite direttamente da questi fornitori e il servizio non le riceve né le memorizza."
      ]
    },
    {
      "heading": "7. Diritti degli utenti",
      "paragraphs": [
        "Poiché i valori inseriti per il calcolo della compatibilità non vengono memorizzati, non ci sono soggetti a cui richiedere accesso, correzione o cancellazione. I registri degli ordini rimanenti a seguito del pagamento devono essere conservati per il periodo stabilito dalla legge, quindi non possono essere cancellati durante quel periodo, ma saranno distrutti una volta scaduto il termine.",
        "Gli utenti possono eliminare tutte le tracce di input semplicemente cancellando il link dei risultati dalla barra degli indirizzi del browser.",
        "Se ci sono domande relative all'uso del servizio, si prega di contattare ai dettagli sottostanti."
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
        "In caso di modifica di questa politica, la data di entrata in vigore e i dettagli delle modifiche saranno pubblicati su questa pagina. Se ci sono cambiamenti effettivi nel trattamento, come l'inizio della pubblicità o della vendita di prodotti a pagamento, verrà data notifica in anticipo."
      ]
    }
  ],
  "effectiveLabel": "Data di entrata in vigore"
};

const d6 = {
  "title": "Termini di utilizzo",
  "intro": "Questi termini stabiliscono le condizioni per l'utilizzo del servizio InyeonLink (di seguito \"Servizio\"). Utilizzando il Servizio, si considera che si accettino questi termini.",
  "sections": [
    {
      "heading": "1. Natura del Servizio",
      "paragraphs": [
        "Il Servizio mostra, come materiale di riferimento, la relazione tra due persone applicando le regole della tradizionale astrologia coreana (saju) e del sistema zodiacale coreano (doppio segno) basato sulla data di nascita inserita.",
        "Il tasso di corrispondenza e le spiegazioni forniti sono **materiale di riferimento dal punto di vista dell'interpretazione tradizionale e non costituiscono previsioni scientifiche o affermazioni sui rapporti.** Un punteggio basso non implica necessariamente una cattiva relazione, e un punteggio alto non garantisce una relazione positiva."
      ]
    },
    {
      "heading": "2. Tariffe di utilizzo",
      "paragraphs": [
        "Il calcolo della compatibilità e la consultazione dei risultati sono gratuiti e non è necessaria la registrazione.",
        "Ricevere i risultati in un report PDF è a pagamento. Prezzi e condizioni sono indicati nel paragrafo 3 e nella schermata di pagamento."
      ]
    },
    {
      "heading": "3. Prodotti a pagamento e rimborsi",
      "paragraphs": [
        "L'unico prodotto a pagamento in vendita è il **report PDF di compatibilità**. Creeremo un documento PDF di 3 pagine con i risultati visualizzati sullo schermo, includendo anche i valori delle forze degli elementi che non sono mostrati sullo schermo.",
        "Il prezzo è {priceDomestic} per i pagamenti nazionali (IVA inclusa) e {priceGlobal} per i pagamenti internazionali. I pagamenti nazionali possono essere effettuati tramite Toss Payments utilizzando carte di credito/debito e pagamenti semplificati (Toss Pay, Kakao Pay, Naver Pay, Payco, ecc.), mentre i pagamenti internazionali avvengono tramite PayPal attraverso PortOne. L'importo finale è quello visualizzato nella schermata di pagamento.",
        "**Il Servizio non conserva né i dati inseriti dall'utente né il file PDF generato.** Una volta approvato il pagamento, il documento viene creato e inviato immediatamente, senza lasciare nulla sul server. Pertanto, il file scaricato deve essere conservato dall'utente.",
        "In caso di interruzione del download o smarrimento del file, è possibile scaricarlo nuovamente fino a **5 volte** con lo stesso ordine. Tuttavia, se si esce dalla schermata dei risultati e i dati inseriti vengono persi, non sarà possibile ricrearli, quindi si prega di salvare il file subito dopo il pagamento."
      ],
      "bullets": [
        "**Fino a quando il download non inizia dopo il pagamento,** è possibile annullare in qualsiasi momento e ricevere un rimborso completo.",
        "**Dopo il completamento del download,** il recesso per semplice ripensamento è limitato. Si tratta di contenuti digitali forniti immediatamente e non recuperabili, che rientrano nei motivi di limitazione del recesso stabiliti dall'articolo 17, comma 2 della Legge sulla protezione dei consumatori nel commercio elettronico.",
        "**In caso di errore di sistema che impedisca la creazione del documento, file non apribili o importo di pagamento diverso dall'ordine,** verrà effettuata una riemissione o un rimborso completo.",
        "**Le lamentele sui contenuti dei risultati** non costituiscono motivo di rimborso. I risultati della compatibilità sono materiale di riferimento dal punto di vista dell'interpretazione tradizionale e questa natura è comunicata prima del pagamento (vedi paragrafo 1).",
        "Richieste di riemissione dopo aver utilizzato tutte le 5 volte non costituiscono motivo di rimborso.",
        "**Se un minorenne effettua un pagamento senza il consenso del legale rappresentante,** il minorenne o il legale rappresentante possono annullare tale pagamento. Si prega di informare il contatto sottostante per ricevere un rimborso."
      ]
    },
    {
      "heading": "4. Risultati del calcolo",
      "paragraphs": [
        "Tutti i punteggi sono calcolati secondo regole pubbliche, quindi inserendo gli stessi valori si ottiene sempre lo stesso risultato.",
        "Se non viene inserito l'orario di nascita, il calcolo esclude il pilastro temporale (時柱), quindi i risultati possono variare. Maggiore è la precisione nella scelta del luogo di nascita, più accurato sarà il calcolo del pilastro temporale.",
        "Il calcolo del saju utilizza una libreria di calcolo pubblica e i risultati possono variare a seconda del trattamento delle stagioni e dei fusi orari."
      ]
    },
    {
      "heading": "5. Responsabilità dell'utente",
      "paragraphs": [
        "L'utente può inserire la data di nascita di altre persone, ma non deve utilizzare i risultati in modo da recare danno a terzi.",
        "Non utilizzare i risultati del Servizio come base per decisioni che influenzano i diritti di terzi, come matrimonio, divorzio, assunzione o transazioni. Il Servizio non è stato creato per tali scopi."
      ]
    },
    {
      "heading": "6. Atti vietati",
      "paragraphs": [
        "Le seguenti azioni non sono consentite."
      ],
      "bullets": [
        "Inviare richieste eccessive tramite strumenti automatizzati che disturbano il funzionamento del Servizio",
        "Presentare i risultati del Servizio come fatti o come risultati di esperti",
        "Replicare o modificare il Servizio per fornire un servizio identico"
      ]
    },
    {
      "heading": "7. Esclusione di responsabilità",
      "paragraphs": [
        "Il Servizio fornisce solo materiale di riferimento e non si assume responsabilità per le decisioni e i risultati derivanti da tali decisioni basate sui risultati.",
        "Non ci si assume responsabilità per danni derivanti da interruzioni del Servizio causate da eventi incontrollabili, come calamità naturali o guasti dei fornitori di infrastrutture."
      ]
    },
    {
      "heading": "8. Diritti di proprietà intellettuale",
      "paragraphs": [
        "I diritti sui contenuti visivi, testi e implementazioni delle regole di calcolo del Servizio appartengono all'operatore. Gli utenti possono salvare o condividere i risultati per scopi personali."
      ]
    },
    {
      "heading": "9. Modifiche ai termini e legge applicabile",
      "paragraphs": [
        "In caso di modifica dei termini, saranno pubblicati su questa pagina con la data di entrata in vigore.",
        "Questi termini sono regolati dalla legge della Repubblica di Corea e le controversie relative all'utilizzo del Servizio seguiranno le procedure stabilite dalle leggi pertinenti."
      ]
    }
  ],
  "effectiveLabel": "Data di entrata in vigore"
};

const d7 = {
  "title": "Informativa sulla gestione dei dati personali",
  "intro": "InyeonLink non memorizza informazioni necessarie per il calcolo della compatibilità. Questa informativa descrive cosa viene ricevuto dal servizio, cosa non viene lasciato e cosa viene registrato automaticamente.",
  "sections": [
    {
      "heading": "1. Informazioni non memorizzate",
      "paragraphs": [
        "Le date di nascita, l'ora di nascita, il luogo di nascita, il sesso e il nome fornito per il calcolo della compatibilità **non vengono memorizzati da nessuna parte.** Vengono utilizzati solo nella memoria del server durante l'elaborazione della richiesta e scompaiono con la risposta.",
        "Non vengono registrati nel database e non vengono conservati in file separati. Non essendoci registrazione, i valori inseriti non sono collegati a persone specifiche."
      ]
    },
    {
      "heading": "2. Informazioni contenute nel link dei risultati",
      "paragraphs": [
        "L'indirizzo della schermata dei risultati include i valori inseriti codificati. Tuttavia, questo valore si trova dopo il # nell'indirizzo e, secondo gli standard web, il contenuto dopo il # non viene inviato dal browser al server. Pertanto, anche se si apre il link dei risultati, nella registrazione degli accessi al server rimane solo il percorso dell'indirizzo.",
        "Se si invia il link dei risultati a un'altra persona, anche quella persona potrà vedere gli stessi risultati. Poiché il link stesso contiene i valori inseriti, la decisione di condividerlo spetta all'utente."
      ]
    },
    {
      "heading": "3. Informazioni raccolte automaticamente",
      "paragraphs": [
        "Non vengono raccolte informazioni per identificare gli utenti. Tuttavia, vengono registrati automaticamente i minimi dati necessari per il funzionamento del servizio da parte del fornitore di infrastrutture."
      ],
      "bullets": [
        "Indirizzo IP di accesso, data e ora di accesso, tipo di browser e altre registrazioni generali degli accessi al server",
        "Informazioni sul paese — utilizzate solo per determinare automaticamente la lingua dello schermo e non vengono memorizzate"
      ]
    },
    {
      "heading": "4. Cookie e pubblicità",
      "paragraphs": [
        "Il servizio stesso non utilizza cookie per identificare o tracciare gli utenti. Le informazioni inserite per il calcolo della compatibilità non vengono trasmesse agli inserzionisti.",
        "Questo servizio pubblica annunci tramite Google AdSense. In questo processo avvengono le seguenti operazioni."
      ],
      "bullets": [
        "Fornitori terzi, inclusi Google, possono memorizzare o leggere cookie nel browser dell'utente.",
        "Google utilizza cookie per pubblicare annunci basati sulla cronologia delle visite a questo e ad altri siti.",
        "Gli utenti possono disattivare gli annunci personalizzati nelle impostazioni pubblicitarie di Google (google.com/settings/ads). Anche se disattivati, gli annunci continueranno a essere visualizzati, ma la loro pertinenza per l'utente diminuirà.",
        "Gli annunci personalizzati di tutti i fornitori terzi possono essere disattivati in una sola volta su aboutads.info/choices.",
        "È anche possibile bloccare i cookie nelle impostazioni del browser.",
        "Agli utenti dello Spazio Economico Europeo, Regno Unito e Svizzera viene prima chiesto il consenso all'uso dei cookie pubblicitari."
      ]
    },
    {
      "heading": "5. Informazioni memorizzate al momento del pagamento",
      "paragraphs": [
        "Quando si effettua un pagamento per un prodotto a pagamento (report PDF di compatibilità), le informazioni dell'ordine vengono memorizzate per l'elaborazione del pagamento e per la conservazione dei registri delle transazioni ai sensi della legge.",
        "**I valori inseriti per il calcolo della compatibilità e il PDF creato non vengono memorizzati nemmeno in caso di pagamento.** Il principio di cui al punto 1 rimane invariato, indipendentemente dal pagamento. Gli elementi memorizzati sono i seguenti e non includono informazioni identificative come nome, contatto e indirizzo."
      ],
      "bullets": [
        "Numero d'ordine e identificatore di pagamento",
        "Importo del pagamento, valuta e stato del pagamento (non pagato, pagamento completato, annullato)",
        "Tipo di prodotto, stato di elaborazione, numero di download del documento, data e ora dell'ordine",
        "Lingua dello schermo al momento dell'ordine e distinzione della regione di pagamento (nazionale o internazionale)",
        "Periodo di conservazione — ai sensi dell'articolo 6 della legge sulla protezione dei consumatori nel commercio elettronico, i registri relativi al pagamento e alla fornitura di beni sono conservati per 5 anni, mentre i registri relativi a reclami o controversie dei consumatori sono conservati per 3 anni e poi distrutti."
      ]
    },
    {
      "heading": "6. Fornitura a terzi e delega del trattamento",
      "paragraphs": [
        "Non memorizzando informazioni personali identificabili, non vengono fornite informazioni personali a terzi. L'elaborazione dei pagamenti è delegata ai seguenti fornitori.",
        "Per il funzionamento del servizio, utilizziamo l'infrastruttura di hosting di {hostingProvider}, e in questo processo, i registri di accesso di cui al punto 3 vengono trattati secondo le politiche di quel fornitore.",
        "I pagamenti nazionali sono gestiti da Toss Payments, mentre i pagamenti internazionali sono gestiti tramite PayPal di PortOne. Le informazioni sui metodi di pagamento, come numeri di carta e numeri di conto, sono gestite direttamente da questi fornitori e il servizio non le riceve né le memorizza."
      ]
    },
    {
      "heading": "7. Diritti degli utenti",
      "paragraphs": [
        "Poiché i valori inseriti per il calcolo della compatibilità non vengono memorizzati, non ci sono soggetti a cui richiedere accesso, correzione o cancellazione. I registri degli ordini rimanenti a seguito del pagamento devono essere conservati per il periodo stabilito dalla legge e non possono essere cancellati durante tale periodo; dopo la scadenza, verranno distrutti.",
        "Gli utenti possono eliminare tutte le tracce di input semplicemente cancellando il link dei risultati dalla barra degli indirizzi del browser.",
        "Se ci sono domande relative all'uso del servizio, si prega di contattarci ai seguenti recapiti."
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
        "In caso di modifica di questa informativa, la data di entrata in vigore e i dettagli delle modifiche saranno pubblicati su questa pagina. Se ci sono cambiamenti effettivi nel trattamento, come l'inizio della pubblicazione di annunci o la vendita di prodotti a pagamento, verrà data notifica anticipata della modifica."
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
