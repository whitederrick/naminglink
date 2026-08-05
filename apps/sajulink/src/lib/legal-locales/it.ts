import type { LegalLocaleDocuments } from "@/lib/legal-locales/types";

// ko 원본에서 자동 생성된 번역이다(scripts/translate-legal.mjs). 손으로 고쳐도 되지만,
// 다시 생성하면 덮어쓴다 — 문구를 바꿀 일이 있으면 ko를 먼저 고치고 전체를 다시 만들 것.
// 사업자 정보와 가격은 플레이스홀더로 남아 있고 실제 값은 getLegalDocument가 넣는다.

const d0 = {
  "title": "Informativa sul trattamento dei dati personali",
  "intro": "Saju-Link non memorizza informazioni necessarie per l'interpretazione del saju (사주). Questa informativa descrive cosa viene ricevuto dal servizio, cosa non viene memorizzato e cosa viene registrato automaticamente.",
  "sections": [
    {
      "heading": "1. Informazioni non memorizzate",
      "paragraphs": [
        "La data di nascita, l'ora di nascita, il luogo di nascita, il sesso e il nome forniti per l'interpretazione del saju (사주) **non vengono memorizzati in alcun luogo.** Vengono utilizzati solo nella memoria del server durante l'elaborazione della richiesta e scompaiono con la risposta.",
        "Non vengono registrati nel database e non vengono conservati in file separati. Non essendoci registrazione, i valori inseriti non sono collegati a persone specifiche."
      ]
    },
    {
      "heading": "2. Informazioni contenute nel link dei risultati",
      "paragraphs": [
        "L'indirizzo della schermata dei risultati contiene i valori inseriti codificati. Tuttavia, questo valore si trova dopo il # nell'indirizzo e, secondo gli standard web, il contenuto dopo il # non viene inviato dal browser al server. Pertanto, anche se si apre il link dei risultati, nel registro di accesso del server rimane solo il percorso dell'indirizzo.",
        "Se si invia il link dei risultati a un'altra persona, anche quella persona può vedere gli stessi risultati. Poiché il link stesso contiene i valori inseriti, la decisione di condividerlo spetta all'utente."
      ]
    },
    {
      "heading": "3. Informazioni raccolte automaticamente",
      "paragraphs": [
        "Non vengono raccolte informazioni per identificare l'utente. Tuttavia, vengono registrati automaticamente dal fornitore di infrastrutture i minimi dati necessari per il funzionamento del servizio web."
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
        "Attualmente, non ci sono pubblicità visualizzate in questo servizio. Se in futuro verranno visualizzate pubblicità, i fornitori di pubblicità (ad esempio Google) potrebbero utilizzare cookie per la pubblicazione degli annunci. In tal caso, questa clausola verrà modificata per chiarire cosa cambia prima di iniziare."
      ]
    },
    {
      "heading": "5. Informazioni memorizzate al momento del pagamento",
      "paragraphs": [
        "Attualmente non vengono venduti prodotti a pagamento, quindi non ci sono informazioni memorizzate relative ai pagamenti.",
        "Quando inizieremo a vendere, verranno memorizzati i seguenti elementi per l'elaborazione dei pagamenti e la conservazione dei registri delle transazioni ai sensi della legge. **Anche in quel caso, i valori inseriti per l'interpretazione del saju (사주) e il PDF generato non verranno memorizzati**, né verranno raccolte informazioni identificative come nome, contatto e indirizzo."
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
      "heading": "6. Fornitura a terzi e delega al trattamento",
      "paragraphs": [
        "Non essendoci dati personali memorizzati, non ci sono dati personali forniti a terzi.",
        "Per il funzionamento del servizio, utilizziamo l'infrastruttura di hosting di {hostingProvider}, e in questo processo i registri di accesso di cui al punto 3 vengono trattati secondo le politiche di quel fornitore.",
        "Quando iniziamo a vendere prodotti a pagamento, i pagamenti nazionali saranno delegati a Toss Payments, mentre i pagamenti internazionali saranno delegati a PortOne (PayPal). Le informazioni sui metodi di pagamento come numero di carta e numero di conto saranno gestite direttamente da questi fornitori e il servizio non le riceverà."
      ]
    },
    {
      "heading": "7. Diritti degli utenti",
      "paragraphs": [
        "Non essendoci dati personali memorizzati, non ci sono soggetti a cui richiedere accesso, correzione o cancellazione.",
        "Gli utenti possono eliminare tutte le tracce di input semplicemente cancellando il link dei risultati dalla barra degli indirizzi del browser.",
        "Se ci sono domande relative all'uso del servizio, si prega di contattarci ai dettagli sottostanti."
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
        "In caso di modifica di questa informativa, la data di entrata in vigore e i dettagli delle modifiche saranno pubblicati su questa pagina. Se ci sono cambiamenti effettivi nel trattamento, come l'inizio della pubblicazione di pubblicità o la vendita di prodotti a pagamento, informeremo prima della modifica."
      ]
    }
  ],
  "effectiveLabel": "Data di entrata in vigore"
};

const d1 = {
  "title": "Termini di utilizzo",
  "intro": "Questi termini stabiliscono le condizioni di utilizzo del servizio Saju-Link (di seguito \"Servizio\"). Utilizzando il servizio, si considera che si accetti questi termini.",
  "effectiveLabel": "Data di entrata in vigore",
  "sections": [
    {
      "heading": "1. Natura del servizio",
      "paragraphs": [
        "Il servizio applica le regole della tradizionale astrologia coreana (saju) basandosi sulla data di nascita e sull'orario di nascita forniti, mostrando come riferimento il grafico natale, il bilanciamento dei cinque elementi, la forza e la debolezza del giorno, e la posizione in cui il giorno e il grafico natale si incontrano.",
        "I punteggi e le spiegazioni forniti sono **materiale di riferimento secondo la prospettiva della tradizionale astrologia coreana, e non costituiscono previsioni scientifiche né affermazioni sul futuro, la salute o il patrimonio di un individuo.** Un punteggio basso non implica che quel giorno sia negativo, e un punteggio alto non garantisce nulla.",
        "**Le frasi di interpretazione dei rapporti a pagamento sono scritte da un'IA generativa.** Tuttavia, tutti i punteggi, i segni zodiacali e le forze degli elementi, ecc., sono calcolati dal motore di regole del servizio, e l'IA non modifica o crea nuovi valori. Nel caso in cui non sia possibile generare un'interpretazione, la descrizione scritta con i valori calcolati dal motore verrà inserita nello stesso punto, e il numero di pagine del documento e gli elementi inclusi rimangono come indicato nel punto 3 sottostante."
      ]
    },
    {
      "heading": "2. Tariffe di utilizzo",
      "paragraphs": [
        "Il servizio attuale è fornito interamente gratuitamente e non è necessaria la registrazione.",
        "Con l'inizio della vendita dei prodotti a pagamento (due rapporti PDF), si applicano le condizioni del punto 3 qui di seguito. Prima dell'inizio della vendita, questi termini saranno nuovamente comunicati."
      ]
    },
    {
      "heading": "3. Prodotti a pagamento e rimborso",
      "paragraphs": [
        "I prodotti a pagamento in vendita sono **un PDF del \"rapporto di lettura della vita saju (사주) e delle fortune dell'anno\"**. Si tratta di un documento che riporta i risultati visualizzati sullo schermo, insieme a contenuti non presenti sullo schermo.",
        "**A4 9 pagine** — copertina e riepilogo, inclinazioni e punti di forza innati, aspetti da considerare, otto caratteri del natale e potere dei cinque elementi, forza e debolezza del giorno e l'energia necessaria al momento (energia vitale), dieci divinità delle quattro colonne e posizioni evidenti in questo saju (사주), quattro aree della vita viste dal natale (ricchezza, amore, professione, salute) e le relative basi, dettagli della correzione del tempo di Jin Tai Yang, e le previsioni per quest'anno. Pagamento nazionale {priceDomestic} (IVA inclusa), pagamento internazionale {priceGlobal}.",
        "**L'oroscopo di oggi non è contenuto in questo documento.** Si tratta di un valore che cambia ogni giorno e viene fornito gratuitamente sullo schermo; questo documento è composto dall'interpretazione del natale che non cambia mai e dalla fortuna di quest'anno.",
        "I pagamenti nazionali possono essere effettuati tramite Toss Payments utilizzando carte di credito, carte di debito e pagamenti semplificati (Toss Pay, Kakao Pay, Naver Pay, Payco, ecc.), mentre i pagamenti internazionali avvengono tramite PayPal attraverso PortOne. L'importo finale è quello visualizzato nella schermata di pagamento.",
        "**Il servizio non conserva né i dati inseriti dall'utente né i file PDF generati.** Una volta approvato il pagamento, il documento viene creato e scaricato immediatamente, senza lasciare nulla sul server. Pertanto, il file scaricato deve essere conservato direttamente dall'utente.",
        "In caso di interruzione del download o di smarrimento del file, è possibile scaricare nuovamente fino a **5 volte** con lo stesso ordine. Tuttavia, se i valori di input scompaiono al di fuori della schermata dei risultati, non sarà possibile ricrearli, quindi si prega di salvare il file subito dopo il pagamento."
      ],
      "bullets": [
        "**Fino a quando il download non inizia dopo il pagamento** è possibile annullare in qualsiasi momento e ricevere un rimborso completo.",
        "**Dopo il completamento del download** il recesso dall'ordine per semplice ripensamento è limitato. Si tratta di contenuti digitali forniti immediatamente al pagamento e non è possibile il ripristino dello stato precedente, il che rientra nelle motivazioni per la limitazione del recesso dall'ordine stabilite dall'articolo 17, comma 2 della \"Legge sulla protezione dei consumatori nel commercio elettronico\".",
        "In caso di **errore di sistema che impedisce la creazione del documento, di file che non si aprono o di un importo di pagamento diverso da quello dell'ordine**, verrà effettuata una riemissione o un rimborso totale.",
        "**I reclami riguardanti il contenuto dei risultati** non costituiscono motivo di rimborso. L'interpretazione del saju (사주) è un materiale di riferimento secondo la prospettiva della tradizionale astrologia coreana, e la sua natura è comunicata prima del pagamento (punto 1 sopra).",
        "La richiesta di riemissione dopo aver utilizzato tutte e cinque le riemissioni non costituisce motivo di rimborso.",
        "**Nel caso in cui un minorenne effettui un pagamento senza il consenso del legale rappresentante** il minorenne o il legale rappresentante possono annullare tale pagamento. Se ci informate ai contatti sottostanti, provvederemo al rimborso."
      ]
    },
    {
      "heading": "4. Risultati del calcolo",
      "paragraphs": [
        "Tutti i punteggi vengono calcolati secondo regole pubbliche, quindi se si inseriscono gli stessi valori, si otterranno sempre gli stessi risultati.",
        "Se non si inserisce l'orario di nascita, il calcolo verrà effettuato escludendo il pilastro orario (時柱), pertanto i risultati potrebbero variare. Maggiore è la precisione nella scelta del luogo di nascita, più accurato sarà il calcolo del pilastro orario.",
        "Il calcolo del saju (사주) utilizza librerie di calcolo pubbliche e i risultati possono variare a seconda del metodo di gestione delle stagioni e dei fusi orari."
      ]
    },
    {
      "heading": "5. Responsabilità dell'utente",
      "paragraphs": [
        "L'utente può inserire la data di nascita di un'altra persona, ma non deve utilizzare i risultati in modo da recare danno a tale persona.",
        "Non utilizzare i risultati del servizio come base per giudizi che influenzano i diritti di terzi, come matrimonio, divorzio, assunzione o transazioni. Il servizio non è stato creato per tali scopi."
      ]
    },
    {
      "heading": "6. Atti vietati",
      "paragraphs": [
        "Le seguenti azioni non sono consentite."
      ],
      "bullets": [
        "L'atto di inviare richieste eccessive tramite strumenti automatizzati che ostacolano il funzionamento del servizio.",
        "L'atto di presentare i risultati del servizio come fatti o come risultati di valutazioni di esperti.",
        "l'atto di duplicare o modificare il servizio per fornire un servizio identico"
      ]
    },
    {
      "heading": "7. Esclusione di responsabilità",
      "paragraphs": [
        "Il servizio fornisce solo materiali di riferimento e non si assume alcuna responsabilità per le decisioni prese dall'utente basate sui risultati e per le conseguenze di tali decisioni.",
        "Non ci assumiamo alcuna responsabilità per i danni derivanti dall'interruzione del servizio a causa di eventi di forza maggiore, come calamità naturali o guasti da parte del fornitore di infrastrutture."
      ]
    },
    {
      "heading": "8. Diritti di proprietà intellettuale",
      "paragraphs": [
        "I diritti relativi all'implementazione dello schermo del servizio, del testo e delle regole di calcolo appartengono all'operatore. L'utente può salvare o condividere i risultati per scopi personali."
      ]
    },
    {
      "heading": "9. Modifica dei termini e legge applicabile",
      "paragraphs": [
        "In caso di modifica dei termini, verranno pubblicati su questa pagina con la data di entrata in vigore.",
        "Questi termini sono regolati dalla legge della Repubblica di Corea e le controversie relative all'uso del servizio seguiranno le procedure stabilite dalle leggi pertinenti."
      ]
    }
  ]
};

const d2 = {
  "title": "Politica di rimborso e cancellazione",
  "intro": "Questi sono i criteri per la cancellazione e il rimborso del rapporto di lettura della vita saju (사주) in formato PDF. Abbiamo raccolto separatamente i contenuti dell'articolo 3 delle condizioni.",
  "sections": [
    {
      "heading": "1. Natura del prodotto",
      "paragraphs": [
        "I prodotti in vendita sono **rapporto di lettura della vita saju PDF (A4 5 pagine)** e **rapporto premium di lettura della vita saju PDF (A4 7 pagine)**, entrambi contenuti digitali che vengono creati e inviati immediatamente non appena il pagamento è approvato.",
        "**Il servizio non conserva né i dati inseriti dall'utente né il file PDF creato.** Pertanto, il file scaricato deve essere conservato direttamente dall'utente."
      ]
    },
    {
      "heading": "2. Diritto di recesso",
      "paragraphs": [
        "Si seguono i criteri stabiliti dalla legge sul commercio elettronico."
      ],
      "bullets": [
        "**Prima dell'inizio del download,** è possibile annullare in qualsiasi momento e ricevere un rimborso completo.",
        "**Dopo il completamento del download,** il diritto di recesso per semplice ripensamento è limitato. Si tratta di contenuti digitali forniti immediatamente e non ripristinabili, che rientrano nei motivi di limitazione stabiliti dall'articolo 17, comma 2 della legge sulla protezione dei consumatori nel commercio elettronico. Questa informazione viene comunicata e il consenso viene ottenuto nella schermata di pagamento."
      ]
    },
    {
      "heading": "3. Casi di rimborso completo",
      "paragraphs": [
        "Nei seguenti casi, dopo aver verificato il motivo, procederemo con il rimborso completo o la riemissione."
      ],
      "bullets": [
        "In caso di errore di sistema che impedisce la creazione del documento",
        "Se il file scaricato non si apre",
        "Se l'importo pagato è diverso da quello dell'ordine",
        "**Se un minorenne ha effettuato il pagamento senza il consenso del legale rappresentante** — Il richiedente può essere il minorenne stesso o il legale rappresentante."
      ]
    },
    {
      "heading": "4. Casi non validi per il rimborso",
      "paragraphs": [],
      "bullets": [
        "**Insoddisfazione riguardo al contenuto dei risultati.** L'interpretazione del saju (사주) è un materiale di riferimento secondo la prospettiva della tradizionale astrologia coreana, e questa natura è stata comunicata prima del pagamento.",
        "Richiesta di riemissione dopo aver utilizzato tutte e cinque le riemissioni."
      ]
    },
    {
      "heading": "5. Modalità di richiesta",
      "paragraphs": [
        "Per rimborsi e richieste, si prega di contattare il servizio clienti ({customerCenter}) o via email ({email}). Se fornite anche il numero dell'ordine, la verifica sarà più rapida.",
        "I rimborsi saranno effettuati utilizzando il metodo di pagamento utilizzato, e a seconda delle circostanze della società della carta o del servizio di pagamento, potrebbero essere necessari da 3 a 7 giorni lavorativi per l'elaborazione."
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
        "**La lettura del saju (사주) e la consultazione della fortuna di oggi sono gratuite.** Non è necessaria la registrazione.",
        "È possibile visualizzare sullo schermo gli otto caratteri del saju, il bilanciamento degli elementi, la forza e la debolezza del giorno, l'energia necessaria al momento, il punteggio e il grado della fortuna di oggi, e i punteggi delle quattro aree della vita."
      ]
    },
    {
      "heading": "2. Report di Lettura della Vita Saju e Fortuna di Quest'Anno PDF (a pagamento)",
      "paragraphs": [
        "Pagamento nazionale {priceDomestic} (IVA inclusa) · Pagamento internazionale {priceGlobal}",
        "I risultati sullo schermo vengono forniti in un documento PDF di **9 pagine A4**. Include informazioni non visualizzate sullo schermo — la forza e la debolezza del giorno, l'energia necessaria al momento, i dieci segni delle quattro colonne e le posizioni evidenti in questo saju, Wang Sang Hyu Su Sa, le quattro aree della vita viste nel saju e i numeri di riferimento, i dettagli della correzione del tempo di Jin Tai Yang, la fortuna di quest'anno — tutto questo è incluso.",
        "Con lo stesso ordine è possibile scaricare nuovamente fino a **5 volte**. Tuttavia, se i valori di input scompaiono al di fuori della schermata dei risultati, non sarà possibile ricrearli, quindi si prega di salvare il file subito dopo il pagamento."
      ]
    },
    {
      "heading": "4. Metodi di Pagamento",
      "paragraphs": [
        "**Nazionale** — È possibile utilizzare carte di credito/debito e pagamenti rapidi (Toss Payments, KakaoPay, NaverPay, Payco, ecc.) tramite Toss Payments.",
        "**Internazionale** — È possibile pagare tramite PayPal attraverso PortOne.",
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
  "effectiveLabel": "Data di Entrata in Vigore"
};

const d4 = {
  "title": "Informativa sul trattamento dei dati personali",
  "intro": "Saju-Link non memorizza informazioni necessarie per l'interpretazione del saju (사주). Questa informativa descrive cosa viene ricevuto dal servizio, cosa non viene lasciato e cosa viene registrato automaticamente.",
  "sections": [
    {
      "heading": "1. Informazioni non memorizzate",
      "paragraphs": [
        "La data di nascita, l'ora di nascita, il luogo di nascita, il sesso e il nome forniti per l'interpretazione del saju (사주) **non vengono memorizzati in alcun luogo.** Vengono utilizzati solo nella memoria del server durante l'elaborazione della richiesta e scompaiono con la risposta.",
        "Non vengono registrati nel database e non vengono lasciati in file separati. Non essendoci registrazione, i valori inseriti non sono collegati a persone specifiche."
      ]
    },
    {
      "heading": "2. Informazioni contenute nel link dei risultati",
      "paragraphs": [
        "L'indirizzo della schermata dei risultati include i valori inseriti in forma codificata. Tuttavia, questo valore si trova dopo il # nell'indirizzo, e secondo gli standard web, il contenuto dopo il # non viene inviato dal browser al server. Pertanto, anche se si apre il link dei risultati, nel registro di accesso del server rimane solo il percorso dell'indirizzo.",
        "Se si invia il link dei risultati a un'altra persona, anche quella persona può vedere gli stessi risultati. Poiché il link stesso contiene i valori inseriti, si prega di valutare se condividerlo o meno."
      ]
    },
    {
      "heading": "3. Informazioni raccolte automaticamente",
      "paragraphs": [
        "Non vengono raccolte informazioni per identificare l'utente. Tuttavia, vengono mantenuti automaticamente i registri minimi necessari per il funzionamento del servizio web da parte del fornitore di infrastrutture."
      ],
      "bullets": [
        "Indirizzo IP di accesso, data e ora di accesso, tipo di browser e altre registrazioni generali di accesso al server",
        "Informazioni sul paese — utilizzate solo per determinare automaticamente la lingua della schermata e non vengono memorizzate"
      ]
    },
    {
      "heading": "4. Cookie e pubblicità",
      "paragraphs": [
        "Il servizio stesso non utilizza cookie per identificare o tracciare gli utenti. Le informazioni inserite per l'interpretazione del saju (사주) non vengono trasmesse agli inserzionisti.",
        "Questo servizio pubblica annunci tramite Google AdSense. Durante questo processo, si verificano le seguenti situazioni."
      ],
      "bullets": [
        "Fornitori terzi, inclusa Google, possono memorizzare o leggere cookie nel browser dell'utente.",
        "Google utilizza cookie per pubblicare annunci basati sulla cronologia delle visite a questo e ad altri siti.",
        "L'utente può disattivare gli annunci personalizzati nelle impostazioni pubblicitarie di Google (google.com/settings/ads). Anche se disattivati, gli annunci continueranno a essere visualizzati, ma saranno meno pertinenti per l'utente.",
        "Gli annunci personalizzati di tutti i fornitori terzi possono essere disattivati in un colpo solo su aboutads.info/choices.",
        "Esiste anche un modo per bloccare i cookie nelle impostazioni del browser.",
        "Agli utenti dell'Area Economica Europea, del Regno Unito e della Svizzera viene prima chiesto il consenso all'uso dei cookie pubblicitari."
      ]
    },
    {
      "heading": "5. Informazioni memorizzate al momento del pagamento",
      "paragraphs": [
        "Attualmente non vengono venduti prodotti a pagamento, quindi non ci sono informazioni memorizzate relative ai pagamenti.",
        "Quando inizieremo a vendere, verranno memorizzati i seguenti elementi per il trattamento dei pagamenti e la conservazione dei registri delle transazioni ai sensi della legge. **Anche in quel caso, i valori inseriti per l'interpretazione del saju (사주) e il PDF generato non verranno memorizzati**, né verranno raccolte informazioni identificative come nome, contatto e indirizzo."
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
      "heading": "6. Fornitura a terzi e delega al trattamento",
      "paragraphs": [
        "Non essendoci dati personali memorizzati, non ci sono dati personali forniti a terzi.",
        "Per il funzionamento del servizio, utilizziamo l'infrastruttura di hosting di {hostingProvider}, e in questo processo, i registri di accesso di cui al punto 3 vengono trattati secondo le politiche di quel fornitore.",
        "Quando iniziamo a vendere prodotti a pagamento, i pagamenti nazionali saranno delegati a Toss Payments, mentre i pagamenti internazionali saranno delegati a PortOne (PayPal). Le informazioni sui metodi di pagamento come numero di carta e numero di conto saranno gestite direttamente da questi fornitori, e il servizio non le riceverà."
      ]
    },
    {
      "heading": "7. Diritti degli utenti",
      "paragraphs": [
        "Non essendoci dati personali memorizzati, non ci sono soggetti a cui richiedere accesso, correzione o cancellazione.",
        "L'utente può eliminare tutte le tracce di input semplicemente cancellando il link dei risultati dalla barra degli indirizzi del browser.",
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
        "In caso di modifica di questa informativa, la data di entrata in vigore e i dettagli delle modifiche saranno pubblicati su questa pagina. Se ci sono cambiamenti effettivi nel trattamento, come l'inizio della pubblicazione di annunci o la vendita di prodotti a pagamento, informeremo prima della modifica."
      ]
    }
  ],
  "effectiveLabel": "Data di entrata in vigore"
};

const d5 = {
  "title": "Informativa sul trattamento dei dati personali",
  "intro": "Saju-Link non memorizza informazioni necessarie per la lettura del saju (사주). Questa informativa descrive cosa viene ricevuto dal servizio, cosa non viene conservato e cosa viene registrato automaticamente.",
  "sections": [
    {
      "heading": "1. Informazioni non memorizzate",
      "paragraphs": [
        "La data di nascita, l'ora di nascita, il luogo di nascita, il sesso e il nome forniti per la lettura del saju (사주) **non vengono memorizzati in alcun modo.** Vengono utilizzati solo nella memoria del server durante l'elaborazione della richiesta e scompaiono con la risposta.",
        "Non vengono registrati nel database e non vengono conservati in file separati. Non essendoci registrazione degli utenti, i valori inseriti non sono collegati a persone specifiche."
      ]
    },
    {
      "heading": "2. Informazioni contenute nel link dei risultati",
      "paragraphs": [
        "L'indirizzo della schermata dei risultati contiene i valori inseriti in forma codificata. Tuttavia, questo valore si trova dopo il # nell'indirizzo e, secondo gli standard web, il contenuto dopo il # non viene inviato dal browser al server. Pertanto, anche se si apre il link dei risultati, nella registrazione degli accessi al server rimane solo il percorso dell'indirizzo.",
        "Se si invia il link dei risultati a un'altra persona, anche quella persona può vedere gli stessi risultati. Poiché il link stesso contiene i valori inseriti, la decisione di condividerlo spetta all'utente."
      ]
    },
    {
      "heading": "3. Informazioni raccolte automaticamente",
      "paragraphs": [
        "Non vengono raccolte informazioni per identificare l'utente. Tuttavia, vengono registrati automaticamente dal fornitore di infrastrutture i minimi dati necessari per il funzionamento del servizio web."
      ],
      "bullets": [
        "Indirizzo IP di accesso, data e ora di accesso, tipo di browser e altre registrazioni generali degli accessi al server",
        "Informazioni sul paese — utilizzate solo per determinare automaticamente la lingua della schermata e non vengono memorizzate"
      ]
    },
    {
      "heading": "4. Cookie e pubblicità",
      "paragraphs": [
        "Il servizio stesso non utilizza cookie per tracciare gli utenti.",
        "Attualmente, non ci sono annunci pubblicitari visualizzati in questo servizio. In futuro, se verranno visualizzati annunci, i fornitori di annunci (ad es. Google) potrebbero utilizzare cookie per la pubblicazione degli annunci. In tal caso, questa clausola verrà modificata in anticipo per chiarire cosa cambia."
      ]
    },
    {
      "heading": "5. Informazioni memorizzate al momento del pagamento",
      "paragraphs": [
        "Quando si effettua un pagamento per un prodotto a pagamento (rapporto PDF), le informazioni dell'ordine vengono memorizzate per l'elaborazione del pagamento e per la conservazione dei registri delle transazioni ai sensi della legge.",
        "**I valori inseriti per la lettura del saju (사주) e il PDF generato non vengono memorizzati nemmeno in caso di pagamento.** Il principio di cui al punto 1 rimane invariato, indipendentemente dal pagamento. Gli elementi memorizzati sono i seguenti e non includono informazioni identificative come nome, contatto e indirizzo."
      ],
      "bullets": [
        "Numero d'ordine e identificatore di pagamento",
        "Importo del pagamento, valuta e stato del pagamento (non pagato, pagato, annullato)",
        "Tipo di prodotto, stato di elaborazione, numero di download del documento, data e ora dell'ordine",
        "Lingua della schermata al momento dell'ordine e distinzione della regione di pagamento (nazionale, internazionale)",
        "Periodo di conservazione — ai sensi dell'articolo 6 della legge sulla protezione dei consumatori nel commercio elettronico, i registri relativi ai pagamenti e alla fornitura di beni sono conservati per 5 anni, mentre i registri relativi a reclami o controversie dei consumatori sono conservati per 3 anni e poi distrutti."
      ]
    },
    {
      "heading": "6. Fornitura a terzi e delega al trattamento",
      "paragraphs": [
        "Non memorizzando dati personali identificabili, non vengono forniti dati personali a terzi. L'elaborazione dei pagamenti è delegata ai seguenti fornitori.",
        "Per il funzionamento del servizio, utilizziamo l'infrastruttura di hosting di {hostingProvider}, e in questo processo, i registri di accesso di cui al punto 3 vengono trattati secondo le politiche di quel fornitore.",
        "I pagamenti nazionali sono gestiti da Toss Payments, mentre i pagamenti internazionali sono elaborati tramite PayPal attraverso PortOne. Le informazioni sui metodi di pagamento, come numeri di carta e numeri di conto, sono gestite direttamente da questi fornitori e il servizio non le riceve né le memorizza."
      ]
    },
    {
      "heading": "7. Diritti degli utenti",
      "paragraphs": [
        "Poiché i valori inseriti per la lettura del saju (사주) non vengono memorizzati, non ci sono soggetti a cui richiedere accesso, correzione o cancellazione. I registri degli ordini rimanenti a seguito del pagamento devono essere conservati per il periodo stabilito dalla legge, pertanto non possono essere cancellati durante tale periodo e verranno distrutti al termine del periodo.",
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
        "In caso di modifica di questa informativa, la data di entrata in vigore e i dettagli delle modifiche saranno pubblicati su questa pagina. Se ci sono cambiamenti effettivi nel trattamento, come l'inizio della pubblicazione di annunci o la vendita di prodotti a pagamento, verrà data comunicazione anticipata della modifica."
      ]
    }
  ],
  "effectiveLabel": "Data di entrata in vigore"
};

const d6 = {
  "title": "Termini di utilizzo",
  "intro": "Questi termini stabiliscono le condizioni per l'utilizzo del servizio Saju-Link (di seguito \"Servizio\"). Utilizzando il Servizio, si considera che si accetti questi termini.",
  "sections": [
    {
      "heading": "1. Natura del Servizio",
      "paragraphs": [
        "Il Servizio mostra un riferimento basato sulla data di nascita e sull'ora di nascita inserite, applicando le regole della tradizionale astrologia coreana (saju) per presentare il grafico natale e il potere dei cinque elementi, la forza e la debolezza del giorno, e il giorno fortunato in relazione al grafico natale.",
        "I punteggi e le spiegazioni forniti sono **materiale di riferimento dal punto di vista dell'astrologia tradizionale e non costituiscono previsioni scientifiche o affermazioni sul futuro, la salute o la ricchezza di un individuo.** Un punteggio basso non significa che quel giorno sia negativo, e un punteggio alto non garantisce nulla.",
        "**Le frasi di spiegazione dei rapporti a pagamento sono scritte da un'IA generativa.** Tuttavia, tutti i valori come punteggi, segni e potere degli elementi sono calcolati dal motore di regole del Servizio, e l'IA non modifica o crea nuovi valori. Se non è possibile generare una spiegazione, viene inserita una descrizione basata sui valori calcolati dal motore, e il numero di pagine del documento e gli elementi inclusi sono esattamente quelli descritti nel paragrafo 3 sottostante."
      ]
    },
    {
      "heading": "2. Tariffe di utilizzo",
      "paragraphs": [
        "La lettura del saju e la consultazione della fortuna del giorno sono gratuite e non è necessaria la registrazione.",
        "Ricevere i risultati in un rapporto PDF è a pagamento. Prezzi e condizioni sono indicati nel paragrafo 3 sottostante e nella schermata di pagamento."
      ]
    },
    {
      "heading": "3. Prodotti a pagamento e rimborsi",
      "paragraphs": [
        "Il prodotto a pagamento in vendita è **un rapporto PDF di «Lettura della vita del saju e della fortuna dell'anno»**. Si tratta di trasformare i risultati visualizzati in un documento, che include anche contenuti non presenti sullo schermo.",
        "**9 pagine A4** — copertina e riepilogo, inclinazioni e punti di forza innati, potere degli otto caratteri del grafico natale e dei cinque elementi, forza e debolezza del giorno e l'energia necessaria (yongshin), i dieci segni delle quattro colonne e i punti salienti di questo saju, le quattro aree della vita (ricchezza, affetto, professione, salute) e le relative basi, dettagli della correzione dell'ora solare, e la fortuna dell'anno sono inclusi. Prezzo per il pagamento nazionale {priceDomestic} (IVA inclusa), pagamento internazionale {priceGlobal}.",
        "**La fortuna del giorno non è inclusa in questo documento.** Poiché i valori cambiano ogni giorno, sono forniti gratuitamente sullo schermo, e questo documento è composto da un'interpretazione del grafico natale che non cambia mai e dalla fortuna dell'anno.",
        "Per i pagamenti nazionali, è possibile utilizzare carte di credito/debito e pagamenti rapidi (Toss Payments, KakaoPay, NaverPay, Payco, ecc.) tramite Toss Payments, mentre per i pagamenti internazionali si utilizza PayPal tramite PortOne. L'importo finale è quello visualizzato nella schermata di pagamento.",
        "**Il Servizio non conserva né i dati inseriti dall'utente né i file PDF generati.** Una volta approvato il pagamento, il documento viene creato e scaricato immediatamente, senza lasciare nulla sul server. Pertanto, il file scaricato deve essere conservato dall'utente stesso.",
        "In caso di interruzione del download o smarrimento del file, è possibile scaricare nuovamente fino a **5 volte** con lo stesso ordine. Tuttavia, se i dati di input scompaiono al di fuori della schermata dei risultati, non sarà possibile ricrearli, quindi si prega di salvare il file subito dopo il pagamento."
      ],
      "bullets": [
        "**Fino a quando il download non inizia dopo il pagamento,** è possibile annullare in qualsiasi momento e ricevere un rimborso completo.",
        "**Dopo il completamento del download,** il recesso per semplice ripensamento è limitato. Si tratta di contenuti digitali forniti immediatamente e non ripristinabili, che rientrano nei motivi di limitazione del recesso stabiliti dall'articolo 17, comma 2 della Legge sulla protezione dei consumatori nel commercio elettronico.",
        "**In caso di errore di sistema che impedisce la creazione del documento, file non apribili o importo di pagamento diverso dall'ordine,** verrà effettuata una riemissione o un rimborso completo.",
        "**Le lamentele sui contenuti dei risultati** non costituiscono motivo di rimborso. La lettura del saju è materiale di riferimento dal punto di vista dell'astrologia tradizionale e la sua natura è stata comunicata prima del pagamento (vedi paragrafo 1).",
        "Richieste di riemissione dopo aver utilizzato tutte le 5 volte non costituiscono motivo di rimborso.",
        "**Se un minorenne effettua un pagamento senza il consenso del legale rappresentante,** il minorenne o il legale rappresentante possono annullare quel pagamento. Si prega di informare il contatto sottostante per ricevere un rimborso."
      ]
    },
    {
      "heading": "4. Risultati dei calcoli",
      "paragraphs": [
        "Tutti i punteggi sono calcolati secondo regole pubbliche, quindi inserendo gli stessi valori si ottiene sempre lo stesso risultato.",
        "Se non si inserisce l'ora di nascita, il calcolo esclude il segno orario (時柱), quindi i risultati possono variare. Maggiore è la precisione nella scelta del luogo di nascita, più accurato sarà il calcolo del segno orario.",
        "Il calcolo del calendario lunare utilizza una libreria di calcolo pubblica e i risultati possono variare a seconda del trattamento delle stagioni e dei fusi orari."
      ]
    },
    {
      "heading": "5. Responsabilità dell'utente",
      "paragraphs": [
        "L'utente può inserire la data di nascita di altre persone, ma non deve utilizzare i risultati in modo da danneggiare terzi.",
        "Non utilizzare i risultati del Servizio come base per decisioni che influenzano i diritti di altri, come matrimonio, divorzio, assunzioni o transazioni. Il Servizio non è stato creato per tali scopi."
      ]
    },
    {
      "heading": "6. Atti vietati",
      "paragraphs": [
        "Le seguenti azioni non sono consentite."
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
        "Il Servizio fornisce solo materiale di riferimento e non si assume responsabilità per le decisioni e i risultati derivanti da tali decisioni da parte dell'utente.",
        "Non si assume responsabilità per danni derivanti dall'interruzione del Servizio per cause non controllabili, come eventi naturali o guasti dei fornitori di infrastrutture."
      ]
    },
    {
      "heading": "8. Diritti di proprietà intellettuale",
      "paragraphs": [
        "I diritti relativi allo schermo del Servizio, ai testi e all'implementazione delle regole di calcolo appartengono all'operatore. L'utente può salvare o condividere i risultati per scopi personali."
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
  "intro": "Saju-Link non memorizza informazioni necessarie per l'interpretazione del saju (사주). Questa informativa descrive cosa viene ricevuto dal servizio, cosa non viene memorizzato e cosa viene registrato automaticamente.",
  "sections": [
    {
      "heading": "1. Informazioni non memorizzate",
      "paragraphs": [
        "La data di nascita, l'ora di nascita, il luogo di nascita, il sesso e il nome forniti per l'interpretazione del saju (사주) **non vengono memorizzati in alcun luogo.** Vengono utilizzati solo nella memoria del server durante l'elaborazione della richiesta e scompaiono con la risposta.",
        "Non vengono registrati nel database e non vengono conservati in file separati. Non essendoci registrazione degli utenti, i valori inseriti non sono collegati a persone specifiche."
      ]
    },
    {
      "heading": "2. Informazioni contenute nel link dei risultati",
      "paragraphs": [
        "L'indirizzo della schermata dei risultati contiene i valori inseriti codificati. Tuttavia, questo valore si trova dopo il simbolo # nell'indirizzo, e secondo gli standard web, il contenuto dopo il # non viene inviato dal browser al server. Pertanto, anche se si apre il link dei risultati, nel registro di accesso del server rimane solo il percorso dell'indirizzo.",
        "Se si invia il link dei risultati a un'altra persona, anche quella persona può vedere gli stessi risultati. Poiché il link stesso contiene i valori inseriti, si prega di valutare se condividerlo o meno."
      ]
    },
    {
      "heading": "3. Informazioni raccolte automaticamente",
      "paragraphs": [
        "Non vengono raccolte informazioni per identificare gli utenti. Tuttavia, vengono registrati automaticamente dal fornitore di infrastrutture i minimi dati necessari per il funzionamento del servizio web."
      ],
      "bullets": [
        "Indirizzo IP di accesso, data e ora di accesso, tipo di browser e altre registrazioni generali di accesso al server",
        "Informazioni sul paese — utilizzate solo per determinare automaticamente la lingua della schermata e non vengono memorizzate"
      ]
    },
    {
      "heading": "4. Cookie e pubblicità",
      "paragraphs": [
        "Il servizio stesso non utilizza cookie per identificare o tracciare gli utenti. Le informazioni inserite per l'interpretazione del saju (사주) non vengono trasmesse agli inserzionisti.",
        "Questo servizio pubblica annunci tramite Google AdSense. Durante questo processo avvengono le seguenti operazioni."
      ],
      "bullets": [
        "Fornitori terzi, inclusi Google, possono memorizzare o leggere cookie nel browser dell'utente.",
        "Google utilizza cookie per pubblicare annunci basati sulla cronologia delle visite a questo e ad altri siti.",
        "Gli utenti possono disattivare gli annunci personalizzati nelle impostazioni pubblicitarie di Google (google.com/settings/ads). Anche se disattivati, gli annunci continueranno a essere visualizzati, ma la loro rilevanza per l'utente diminuirà.",
        "Gli annunci personalizzati di fornitori terzi possono essere disattivati in un colpo solo su aboutads.info/choices.",
        "È possibile anche bloccare i cookie tramite le impostazioni del browser.",
        "Agli utenti dello Spazio Economico Europeo, del Regno Unito e della Svizzera viene prima chiesto il consenso all'uso dei cookie pubblicitari."
      ]
    },
    {
      "heading": "5. Informazioni memorizzate al momento del pagamento",
      "paragraphs": [
        "Quando si effettua un pagamento per un prodotto a pagamento (report PDF), le informazioni dell'ordine vengono memorizzate per l'elaborazione del pagamento e per la conservazione dei registri delle transazioni ai sensi della legge.",
        "**I valori inseriti per l'interpretazione del saju (사주) e il PDF generato non vengono memorizzati nemmeno in caso di pagamento.** Il principio di cui al punto 1 rimane invariato indipendentemente dal pagamento. Gli elementi memorizzati sono i seguenti, e non includono informazioni identificative come nome, contatto e indirizzo."
      ],
      "bullets": [
        "Numero d'ordine e identificatore di pagamento",
        "Importo del pagamento, valuta e stato del pagamento (non pagato, pagato, annullato)",
        "Tipo di prodotto, stato di elaborazione, numero di download del documento, data e ora dell'ordine",
        "Lingua della schermata al momento dell'ordine e distinzione della regione di pagamento (nazionale o internazionale)",
        "Periodo di conservazione — secondo l'articolo 6 della legge sulla protezione dei consumatori nel commercio elettronico, i registri relativi al pagamento e alla fornitura di beni sono conservati per 5 anni, mentre i registri relativi a reclami o controversie dei consumatori sono conservati per 3 anni e poi distrutti."
      ]
    },
    {
      "heading": "6. Fornitura a terzi e delega del trattamento",
      "paragraphs": [
        "Non memorizzando dati personali identificabili, non vengono forniti dati personali a terzi. L'elaborazione dei pagamenti è delegata ai seguenti fornitori.",
        "Per il funzionamento del servizio, utilizziamo l'infrastruttura di hosting di {hostingProvider}, e in questo processo i registri di accesso di cui al punto 3 vengono trattati secondo le politiche di quel fornitore.",
        "I pagamenti nazionali sono gestiti da Toss Payments, mentre i pagamenti internazionali sono elaborati tramite PayPal di PortOne. Le informazioni sui metodi di pagamento come numero di carta e numero di conto sono gestite direttamente da questi fornitori, e il servizio non le riceve né le memorizza."
      ]
    },
    {
      "heading": "7. Diritti degli utenti",
      "paragraphs": [
        "Poiché i valori inseriti per l'interpretazione del saju (사주) non vengono memorizzati, non ci sono soggetti a cui richiedere accesso, correzione o cancellazione. I registri degli ordini rimanenti a seguito del pagamento devono essere conservati per il periodo stabilito dalla legge, quindi non possono essere cancellati durante quel periodo, ma saranno distrutti una volta scaduto.",
        "Gli utenti possono eliminare tutte le tracce di input semplicemente cancellando il link dei risultati dalla barra degli indirizzi del browser.",
        "Per eventuali domande relative all'utilizzo del servizio, si prega di contattare ai seguenti indirizzi."
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
        "In caso di modifica di questa informativa, la data di entrata in vigore e i dettagli delle modifiche saranno pubblicati su questa pagina. Se ci sono cambiamenti effettivi nel trattamento, come l'inizio della pubblicazione di annunci o la vendita di prodotti a pagamento, verrà data comunicazione anticipata delle modifiche."
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
