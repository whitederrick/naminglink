import { companyInfo, LEGAL_EFFECTIVE_DATE } from "@/lib/company";
import type { LegalLocaleContent } from "./types";

const content: LegalLocaleContent = {
  labels: {
    effectiveDate: "Data di entrata in vigore",
    referenceDate: "Data di riferimento",
    login: "Accedi",
    close: "Chiudi",
  },
  documents: {
    terms: {
      title: "Termini di servizio",
      description: `Questi termini descrivono le condizioni di utilizzo e l'ambito del servizio ${companyInfo.serviceName}.`,
      effectiveDate: LEGAL_EFFECTIVE_DATE,
      sections: [
        {
          title: "1. Natura del servizio",
          paragraphs: [
            "Naming-Link è uno studio di naming basato su AI che offre i seguenti quattro servizi: ① abbinamento del significato dei caratteri cinesi ai nomi in coreano ② conversione di nomi coreani in nomi globali ③ conversione di nomi stranieri in nomi coreani ④ trascrizione di nomi globali in coreano secondo la pronuncia.",
            "I risultati sono materiali di riferimento che aiutano nella creazione e nell'interpretazione dei nomi e non garantiscono la possibilità di registrazione ufficiale per registri di stato civile, passaporti, visti, marchi, documenti legali, ecc.",
          ],
        },
        {
          title: "2. Utilizzo da parte di membri e non membri",
          paragraphs: [
            "L'analisi dei nomi e la visualizzazione dei candidati con compenso pubblicitario sono accessibili anche ai non membri. L'iscrizione o il login sono richiesti solo per funzionalità che necessitano di un account, come l'ordine di prodotti e la verifica della cronologia degli ordini.",
          ],
        },
        {
          title: "3. Responsabilità per i risultati dell'AI e revisione",
          paragraphs: [
            "I risultati raccomandati dall'AI includono riferimenti linguistici, culturali e tradizionali. Gli utenti devono verificare l'idoneità attraverso enti competenti, esperti, utenti locali e revisioni legali/marchiali prima di scegliere il nome finale.",
          ],
        },
        {
          title: "4. Servizi a pagamento",
          paragraphs: [
            "I dettagli del servizio di abbinamento del significato dei caratteri cinesi sono i seguenti: ① massimo 5 candidati con descrizione dettagliata e dettagli complessivi dei caratteri cinesi: 2.900 ₩ ② massimo 10 candidati con descrizione dettagliata estesa, dettagli complessivi dei caratteri cinesi e PDF per la conservazione: 4.900 ₩ ③ massimo 10 candidati con dettagli, dettagli complessivi dei caratteri cinesi, analisi del destino e degli elementi e PDF per la conservazione: 9.900 ₩.",
            "Nei servizi di conversione di nomi globali, conversione di nomi coreani e trascrizione fonetica in coreano, può essere offerto un prodotto che rivela tutti i candidati rimanenti senza pubblicità in una sola volta (pagamento nazionale 990 ₩, pagamento internazionale US$1.99). Prima dell'attivazione della funzione di pagamento, è disponibile solo la visualizzazione con compenso pubblicitario.",
            "Per gli utenti globali, i prodotti digitali comprendono ④ PDF del rapporto completo sui nomi in coreano (US$9.99): arte del nome con caratteri consigliati, interpretazione del significato e riferimento all'analisi del destino e degli elementi ⑤ PDF dell'arte di conversione della pronuncia in coreano (US$2.99): arte del nome con caratteri scelti e guida alla pronuncia ⑥ PDF del pacchetto di arte del nome (US$1.99): fornitura di un nome scelto in arte con caratteri selezionati. I prezzi e il numero di caratteri applicabili per ciascun prodotto seguono i valori indicati sullo schermo.",
            "I rapporti dettagliati a pagamento e i risultati delle analisi, i file PDF possono essere visualizzati e scaricati nuovamente entro 24 ore dopo il completamento del pagamento e verranno eliminati automaticamente dopo il periodo di conservazione.",
            "I prodotti fisici come i timbri per nomi sono offerti a prezzi e condizioni specifici, come 39.000 ₩ in Corea e US$34.99 all'estero (spese di spedizione internazionale incluse). Tutti i prodotti a pagamento mostrano sullo schermo i dettagli del prodotto, il prezzo, il metodo di fornitura e le condizioni di rimborso prima del pagamento.",
          ],
        },
        {
          title: "5. Servizio con compenso pubblicitario",
          paragraphs: [
            "Lo sblocco dei candidati tramite la visione di pubblicità si applica solo quando la conferma della normale compensazione da parte del fornitore di pubblicità è completata. La riproduzione automatizzata di pubblicità, la manipolazione della compensazione e le richieste ripetute anomale possono essere limitate.",
          ],
        },
        {
          title: "6. Atti vietati",
          paragraphs: [
            "È vietato inserire senza autorizzazione i dati personali di altri, generare nomi per scopi di discriminazione, odio o impersonificazione, effettuare richieste eccessive automatizzate, causare malfunzionamenti del servizio e indicare falsamente l'autenticità ufficiale dei risultati.",
          ],
        },
        {
          title: "7. Limitazione della responsabilità",
          paragraphs: [
            "L'azienda non è responsabile per danni indiretti, perdita di profitti attesi, rifiuto di registrazione ufficiale o controversie di terzi derivanti dall'uso dei risultati raccomandati dall'AI, a meno che non ci sia dolo o grave negligenza.",
          ],
        },
        {
          title: "8. Contatti",
          paragraphs: [
            "Richieste di servizio: platforest.inc@gmail.com",
          ],
        },
      ],
    },
    privacy: {
      title: "Informativa sulla privacy",
      description: `Questa informativa descrive i criteri di trattamento dei dati personali di ${companyInfo.serviceName}.`,
      effectiveDate: LEGAL_EFFECTIVE_DATE,
      sections: [
        {
          title: "1. Categorie di dati personali trattati",
          paragraphs: [
            "Quando si utilizza il servizio di nomi per non membri, il nome, la data di nascita, l'ora di nascita, il paese, la lingua, lo scopo d'uso e gli indizi di pronuncia vengono trattati temporaneamente durante il processo di generazione dei risultati analitici, ma i contenuti inseriti e i risultati generati non vengono memorizzati nel database del servizio.",
            "Durante la registrazione e il login, vengono trattati l'indirizzo email e la cronologia di accesso (storico di autenticazione).",
            "Quando si effettua il pagamento per un rapporto dettagliato a pagamento, le informazioni identificative dell'ordine, lo stato del pagamento e i dati di input e risultati analitici necessari per la generazione del rapporto vengono trattati per un periodo di conservazione (24 ore dopo il pagamento). Le informazioni sui metodi di pagamento, come il numero della carta, vengono trattate direttamente dal fornitore di servizi di pagamento e l'azienda non le memorizza.",
            "Solo quando si utilizza la funzione di ordinazione di beni, possono essere trattati ulteriormente il nome dell'ordinante, l'email, il numero di contatto, l'indirizzo di spedizione, lo stato del pagamento e le informazioni sul trattamento dell'ordine.",
            "Per garantire la stabilità del servizio e prevenire abusi, possono essere trattati come log operativi minimi gli hash dei visitatori non identificabili che cambiano quotidianamente, l'orario della richiesta, il tipo di servizio, il numero di utilizzi gratuiti, i token AI, i tempi di risposta, lo stato di elaborazione e la visualizzazione degli annunci e gli eventi di ricompensa.",
          ],
        },
        {
          title: "2. Scopi del trattamento dei dati personali",
          paragraphs: [
            "I dati personali vengono trattati per raccomandazioni di nomi basate sui valori di input, analisi della pronuncia, analisi delle lingue e delle culture per paese, limitazione dell'uso gratuito, verifica delle ricompense pubblicitarie, gestione delle richieste dei clienti, elaborazione dei pagamenti e delle spedizioni, e prevenzione di utilizzi fraudolenti.",
          ],
        },
        {
          title: "3. Conservazione e distruzione",
          paragraphs: [
            "I dati di input e i risultati analitici vengono conservati nell'account solo se il membro loggato ha esplicitamente scelto di salvare i risultati, e vengono distrutti se il membro li elimina o se lo scopo di conservazione termina. I dati di input e i risultati di membri non registrati e di membri che non hanno scelto di salvare non vengono memorizzati.",
            "I dati di input, i risultati analitici e i file PDF del rapporto dettagliato a pagamento vengono automaticamente eliminati dopo 24 ore dal completamento del pagamento. Le registrazioni delle transazioni di pagamento e degli ordini vengono conservate separatamente in base ai periodi di conservazione legali previsti dalla normativa vigente.",
            "I dettagli di spedizione dell'ordine di beni (nome dell'ordinante, email, contatto, indirizzo di spedizione, richieste, frase da incidere sul timbro) saranno distrutti dopo 90 giorni dalla data di completamento della spedizione o dalla data di cancellazione dell'ordine. Le informazioni inserite per ordini interrotti che non sono stati completati fino al pagamento saranno distrutte dopo 24 ore. Anche dopo la distruzione, i registri delle transazioni di pagamento e di ordine rimarranno in base ai periodi di conservazione legali previsti dalla normativa vigente.",
          ],
        },
        {
          title: "4. Fornitura a terzi e delega del trattamento",
          paragraphs: [
            "Per il funzionamento del servizio, le informazioni necessarie possono essere trattate o delegate a Supabase (database, autenticazione), Vercel (hosting), OpenAI API (analisi AI), reti pubblicitarie, fornitori di servizi di pagamento (PortOne) e partner di spedizione e produzione.",
          ],
        },
        {
          title: "5. Trasferimento di dati personali all'estero",
          paragraphs: [
            "L'azienda trasferisce (delega il trattamento) i dati personali all'estero come segue per fornire il servizio. Il trasferimento avviene tramite modalità di trasmissione attraverso reti di telecomunicazione.",
            "① OpenAI, L.L.C. (Stati Uniti) — Categorie trasferite: nome, data di nascita, ora di nascita, sesso, paese, lingua e altri valori di input analitici — Scopo del trasferimento: analisi di nomi, pronunce e significati basati su AI — Periodo di conservazione e utilizzo: durata del servizio fornito (i dati di input non vengono utilizzati per l'apprendimento del modello secondo le politiche di OpenAI e vengono conservati per un massimo di 30 giorni per scopi di monitoraggio degli abusi prima di essere eliminati).",
            "② Supabase, Inc. (Stati Uniti) — Categorie trasferite: informazioni sullo stato degli ordini e dei pagamenti, email dei membri, input e risultati dei rapporti a pagamento (24 ore dopo il pagamento), nome dell'ordinante, numero di contatto e indirizzo di spedizione durante l'ordinazione di beni — Scopo del trasferimento: database, autenticazione, conservazione — Periodo di conservazione e utilizzo: durata del servizio fornito o fino al periodo di conservazione di ciascuna voce.",
            "③ Vercel, Inc. (Stati Uniti) — Categorie trasferite: informazioni di accesso e richiesta trasmesse durante l'utilizzo del servizio — Scopo del trasferimento: hosting dell'applicazione — Periodo di conservazione e utilizzo: durata del servizio fornito.",
            "Gli utenti possono rifiutare il consenso al trasferimento dei dati personali all'estero, tuttavia, poiché tale trattamento è essenziale per la fornitura del servizio, il rifiuto potrebbe limitare l'utilizzo del servizio.",
          ],
        },
        {
          title: "6. Diritti degli utenti",
          paragraphs: [
            "Gli utenti possono richiedere l'accesso, la correzione, la cancellazione, la sospensione del trattamento e la revoca del consenso ai dati personali. Le richieste vengono ricevute tramite email al servizio clienti e vengono elaborate dopo la verifica dell'identità.",
          ],
        },
        {
          title: "7. Responsabile della protezione dei dati personali",
          paragraphs: [
            "Responsabile: Gwak Eun-ha",
            "Email: platforest.inc@gmail.com",
          ],
        },
      ],
    },
    refund: {
      title: "Politica di rimborso e cancellazione",
      description:
        "Questa politica descrive i criteri di cancellazione e rimborso per i prodotti digitali e gli articoli di merchandising personalizzati.",
      effectiveDate: LEGAL_EFFECTIVE_DATE,
      sections: [
        {
          title: "1. Principi comuni",
          paragraphs: [
            "Una volta attivata la funzione di pagamento, l'ambito di rimborso può variare a seconda del modo in cui viene fornito ciascun prodotto, del momento di avvio della produzione e della possibilità di download. Le condizioni specifiche saranno comunicate nella schermata del prodotto prima del pagamento.",
          ],
        },
        {
          title: "2. Rapporto dettagliato sui caratteri cinesi (₩2,900·₩4,900·₩9,900)",
          paragraphs: [
            "È possibile annullare l'ordine prima dell'inizio della generazione dell'analisi dettagliata da parte dell'AI. Una volta completata la generazione dell'analisi e resa disponibile per la visualizzazione o il download, il rimborso per semplice ripensamento potrebbe essere limitato.",
            "In caso di errore di contenuto, guasto del sistema che causa il fallimento della generazione o discrepanza nell'importo del pagamento, verrà effettuata una riemissione o un rimborso. Se il download termina a causa del superamento del periodo di conservazione (24 ore dopo il pagamento), ciò non costituisce motivo di rimborso.",
          ],
        },
        {
          title: "3. Pubblicazione complessiva dei candidati (₩990 in Corea · US$1.99 all'estero)",
          paragraphs: [
            "La pubblicazione complessiva dei candidati per il servizio di conversione dei nomi globali, conversione dei nomi coreani e trascrizione fonetica in hangul è contenuto digitale fornito immediatamente dopo il pagamento. È possibile annullare l'ordine prima dell'inizio della visualizzazione dei candidati, mentre dopo la visualizzazione il rimborso per semplice ripensamento potrebbe essere limitato.",
            "In caso di errore di sistema che impedisca la pubblicazione normale dei candidati, verrà effettuata una riemissione o un rimborso.",
          ],
        },
        {
          title: "4. Prodotto digitale PDF globale (US$9.99·US$2.99·US$1.99)",
          paragraphs: [
            "Il rapporto completo sui nomi in hangul (US$9.99), l'arte di conversione della pronuncia in hangul (US$2.99) e il pacchetto di arte dei nomi (US$1.99) sono contenuti digitali generati dopo il pagamento. È possibile annullare l'ordine prima dell'inizio della generazione del PDF, mentre dopo il completamento della generazione e la disponibilità per il download, il rimborso per semplice ripensamento potrebbe essere limitato.",
            "In caso di fallimento della generazione, errore di contenuto o discrepanza nell'importo del pagamento, verrà effettuata una riemissione o un rimborso. Se il download termina a causa del superamento del periodo di conservazione (24 ore dopo il pagamento), ciò non costituisce motivo di rimborso.",
          ],
        },
        {
          title: "5. Prodotti personalizzati (timbri per nomi, ecc.)",
          paragraphs: [
            "I prodotti personalizzati come i timbri per nomi (₩39,000 in Corea · US$34.99 all'estero, spese di spedizione internazionale incluse) possono essere annullati fino all'inizio della produzione. Dopo l'inizio della produzione, poiché la frase di incisione viene confermata in modo personalizzato, il rimborso per semplice ripensamento potrebbe essere limitato, mentre errori di battitura, danni, produzione errata o problemi di spedizione verranno gestiti in modo appropriato tramite scambio, riemissione o rimborso dopo verifica.",
          ],
        },
        {
          title: "5. Sblocco pubblicitario",
          paragraphs: [
            "I vantaggi della visione di annunci non sono prodotti a pagamento. In caso di mancato pagamento della compensazione a causa di un errore nella rete pubblicitaria, verrà gestito tramite ripetizione all'interno del servizio o contattando il servizio clienti.",
          ],
        },
        {
          title: "6. Contatti",
          paragraphs: [
            "Richiesta di rimborso: platforest.inc@gmail.com",
          ],
        },
      ],
    },
    pricing: {
      title: "Guida ai prezzi",
      description:
        "Questa guida descrive l'ambito dei servizi gratuiti e i prezzi dei prodotti a pagamento.",
      effectiveDate: LEGAL_EFFECTIVE_DATE,
      sections: [
        {
          title: "Analisi di base (gratuita)",
          paragraphs: [
            "L'analisi di base dei quattro servizi di corrispondenza del significato dei caratteri cinesi, conversione di nomi globali, conversione di nomi coreani e traslitterazione in Hangul è fornita gratuitamente agli utenti non registrati, con possibili limiti di utilizzo giornaliero.",
          ],
        },
        {
          title: "Utilizzo con compenso pubblicitario",
          paragraphs: [
            "Lo sblocco dei candidati dopo la visione di annunci è un beneficio pubblicitario fornito senza pagamento separato. Per ogni annuncio visualizzato, si sblocca un candidato successivo. La disponibilità può variare in base alle scorte pubblicitarie, al paese, al dispositivo o alle politiche del fornitore di annunci.",
          ],
        },
        {
          title: "Dettagli del prodotto di corrispondenza del significato dei caratteri cinesi",
          paragraphs: [
            "Descrizione dettagliata di un massimo di 5 candidati e dettagli completi sui caratteri cinesi: 2.900 won",
            "Descrizione dettagliata estesa di un massimo di 10 candidati, dettagli completi sui caratteri cinesi e PDF per collezionisti: 4.900 won",
            "Dettagli di un massimo di 10 candidati, dettagli completi sui caratteri cinesi, analisi del destino e dei cinque elementi e PDF per collezionisti: 9.900 won",
            "I rapporti a pagamento e i PDF possono essere visualizzati e scaricati nuovamente entro 24 ore dopo il pagamento e verranno automaticamente eliminati successivamente.",
          ],
        },
        {
          title: "Pubblicazione totale dei candidati",
          paragraphs: [
            "Pubblicazione simultanea di tutti i candidati rimanenti senza pubblicità nei servizi di conversione di nomi globali, conversione di nomi coreani e traslitterazione in Hangul: pagamento nazionale 990 won, pagamento internazionale US$1.99 (funzione di pagamento in preparazione)",
          ],
        },
        {
          title: "Prodotti PDF digitali globali",
          paragraphs: [
            "Rapporto PDF completo sui nomi in Hangul (arte dei nomi e interpretazione del significato di tutti i candidati raccomandati, riferimento al destino e ai cinque elementi): US$9.99",
            "Arte PDF per la traslitterazione in Hangul (arte del nome con caratteri scelti e guida alla pronuncia): US$2.99",
            "Pacchetto arte del nome PDF (fornito come arte in base ai caratteri scelti per un nome selezionato): US$1.99",
            "I prezzi e il numero di caratteri applicabili seguono i valori indicati sullo schermo, e il PDF può essere scaricato nuovamente entro 24 ore dopo il pagamento e verrà automaticamente eliminato successivamente. (funzione di pagamento in preparazione)",
          ],
        },
        {
          title: "Merchandising di nomi in Hangul",
          paragraphs: [
            "Timbro con nome: 39.000 won in Corea · US$34.99 all'estero (spese di spedizione internazionale incluse). Altri articoli fisici hanno prezzi, spese di spedizione e tempi di produzione comunicati separatamente per ciascun prodotto.",
          ],
        },
        {
          title: "Informazioni prima del pagamento ufficiale",
          paragraphs: [
            "Una volta definiti i requisiti per la revisione PG, la registrazione per la vendita per corrispondenza e le condizioni di partnership per la produzione, l'importo effettivo del pagamento, le spese di spedizione, i tempi di produzione e le condizioni di rimborso verranno nuovamente comunicati sulla schermata del prodotto.",
          ],
        },
      ],
    },
  },
};

export default content;
