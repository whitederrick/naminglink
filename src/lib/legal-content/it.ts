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
            "Naming-Link è uno studio di naming basato sull'IA che offre quattro servizi: (1) abbinamento di nomi coreani con hanja (caratteri cinesi) dal significato appropriato, (2) conversione di nomi coreani in nomi globali, (3) conversione di nomi stranieri in nomi coreani e (4) trascrizione fonetica di nomi globali in hangul.",
            "I risultati costituiscono materiale di riferimento a supporto della scelta e dell'interpretazione dei nomi. Non garantiscono l'idoneità alla registrazione ufficiale, ad esempio nei registri di stato civile, passaporti, visti, marchi o documenti legali.",
          ],
        },
        {
          title: "2. Utilizzo da parte di membri e ospiti",
          paragraphs: [
            "L'analisi dei nomi e lo sblocco dei candidati tramite pubblicità con ricompensa sono disponibili anche senza account. La registrazione o l'accesso possono essere richiesti solo per le funzioni che necessitano di un account, come l'ordine di articoli di merchandising e la consultazione della cronologia degli ordini.",
          ],
        },
        {
          title: "3. Risultati dell'IA e responsabilità di verifica",
          paragraphs: [
            "I risultati raccomandati dall'IA includono riferimenti linguistici, culturali e tradizionali. Prima della scelta definitiva di un nome, l'utente deve verificarne l'idoneità tramite le autorità competenti, esperti, parlanti locali e verifiche legali o di marchio.",
          ],
        },
        {
          title: "4. Servizi a pagamento",
          paragraphs: [
            "Il servizio di abbinamento del significato degli hanja offre i seguenti prodotti dettagliati: (1) spiegazioni dettagliate per un massimo di 5 candidati più un'analisi complessiva degli hanja: ₩2,900 (KRW); (2) spiegazioni dettagliate estese per un massimo di 10 candidati, un'analisi complessiva degli hanja e un PDF da conservare: ₩4,900; (3) dettagli per un massimo di 10 candidati, un'analisi complessiva degli hanja, un'analisi saju (Quattro Pilastri) e Cinque Elementi e un PDF da conservare: ₩9,900.",
            "Nei servizi di conversione in nomi globali, conversione in nomi coreani e trascrizione fonetica in hangul può essere offerto un prodotto che sblocca in una sola volta, senza pubblicità, tutti i candidati rimanenti (₩990). Prima dell'attivazione delle funzioni di pagamento è disponibile soltanto lo sblocco tramite pubblicità con ricompensa.",
            "I report dettagliati a pagamento, i risultati delle analisi e i file PDF restano consultabili e scaricabili per 24 ore dopo il pagamento; al termine del periodo di conservazione vengono eliminati automaticamente.",
            "I prodotti fisici, come gli articoli di merchandising con nomi coreani, possono essere offerti a prezzi e condizioni separati. Per ogni prodotto a pagamento, il contenuto del prodotto, il prezzo, la modalità di fornitura e le condizioni di rimborso sono indicati a schermo prima del pagamento.",
          ],
        },
        {
          title: "5. Funzioni con pubblicità a ricompensa",
          paragraphs: [
            "Lo sblocco dei candidati tramite visione di pubblicità si applica solo dopo che il fornitore pubblicitario ha confermato regolarmente la ricompensa. La riproduzione automatizzata di annunci, la manipolazione delle ricompense e le richieste ripetute anomale possono essere limitate.",
          ],
        },
        {
          title: "6. Condotte vietate",
          paragraphs: [
            "Sono vietati: l'inserimento non autorizzato di dati personali di terzi, la generazione di nomi a fini discriminatori, di odio o di sostituzione di persona, le richieste eccessive automatizzate, il causare interruzioni del servizio e la presentazione dei risultati come falsamente certificati in via ufficiale.",
          ],
        },
        {
          title: "7. Limitazione di responsabilità",
          paragraphs: [
            "Salvo dolo o colpa grave, la società non risponde di danni indiretti, mancato guadagno atteso, rifiuto di registrazioni ufficiali o controversie con terzi derivanti dall'uso dei risultati raccomandati dall'IA.",
          ],
        },
        {
          title: "8. Contatti",
          paragraphs: [`Richieste sul servizio: ${companyInfo.email}`],
        },
      ],
    },
    privacy: {
      title: "Informativa sulla privacy",
      description: `Questa informativa descrive i criteri di trattamento dei dati personali di ${companyInfo.serviceName}.`,
      effectiveDate: LEGAL_EFFECTIVE_DATE,
      sections: [
        {
          title: "1. Dati personali trattati",
          paragraphs: [
            "Quando i servizi sui nomi vengono utilizzati come ospite, nome, data e ora di nascita, paese, lingua, finalità d'uso e indicazioni sulla pronuncia sono trattati temporaneamente nel processo di generazione dei risultati dell'analisi, ma i contenuti inseriti e i risultati generati non vengono salvati nel database del servizio.",
            "In caso di acquisto di un report dettagliato a pagamento, gli identificativi dell'ordine, lo stato del pagamento e gli input e i risultati di analisi necessari alla generazione del report sono trattati per il periodo di conservazione (24 ore dopo il pagamento). I dati dei mezzi di pagamento, come il numero di carta, sono trattati direttamente dal fornitore di servizi di pagamento e la società non li conserva.",
            "Solo in caso di utilizzo della funzione di ordine degli articoli di merchandising possono essere trattati in aggiunta il nome dell'ordinante, l'email, il recapito, l'indirizzo di consegna, lo stato del pagamento e le informazioni di gestione dell'ordine.",
            "Per la stabilità del servizio e la prevenzione degli abusi possono essere trattati, come log operativi minimi, un hash de-identificato del visitatore che cambia ogni giorno, l'orario della richiesta, il tipo di servizio, il numero di utilizzi gratuiti, i token IA, i tempi di risposta, lo stato di elaborazione e gli eventi di visualizzazione delle pubblicità e di ricompensa.",
          ],
        },
        {
          title: "2. Finalità del trattamento dei dati personali",
          paragraphs: [
            "I dati personali sono trattati per la raccomandazione di nomi basata sui valori inseriti, l'analisi della pronuncia, l'analisi per paese della lingua e dell'area culturale, i limiti di utilizzo gratuito, la verifica delle ricompense pubblicitarie, l'assistenza clienti, la gestione dei pagamenti e delle consegne e la prevenzione degli usi fraudolenti.",
          ],
        },
        {
          title: "3. Conservazione e cancellazione",
          paragraphs: [
            "Gli input e i risultati delle analisi sono conservati nell'account solo quando un membro che ha effettuato l'accesso sceglie esplicitamente di salvarli, e vengono cancellati quando il membro li elimina o quando cessa la finalità di conservazione. Gli input e i risultati degli ospiti e dei membri che non scelgono di salvarli non vengono conservati.",
            "Gli input, i risultati di analisi e i file PDF dei report dettagliati a pagamento vengono eliminati automaticamente 24 ore dopo il completamento del pagamento. I registri delle transazioni di pagamento e degli ordini sono conservati separatamente per i periodi di conservazione previsti dalla normativa applicabile.",
            "I dettagli di consegna vengono cancellati o de-identificati una volta trascorso il periodo necessario per la gestione dell'ordine, i resi e la risoluzione delle controversie.",
          ],
        },
        {
          title: "4. Comunicazione a terzi e trattamento su incarico",
          paragraphs: [
            "Per il funzionamento del servizio, le informazioni necessarie possono essere trattate da o affidate a Supabase (database e autenticazione), Vercel (hosting), OpenAI API (analisi IA), reti pubblicitarie, il fornitore di servizi di pagamento (PortOne) e partner di consegna e produzione.",
          ],
        },
        {
          title: "5. Possibili trasferimenti all'estero",
          paragraphs: [
            "In alcune fasi del trattamento, come hosting cloud, autenticazione, API di IA, pubblicità e invio di email, i dati personali possono essere trattati su server all'estero. I paesi di destinazione, gli incaricati del trattamento, le finalità e i periodi di conservazione saranno comunicati in dettaglio una volta definiti i fornitori dei servizi.",
          ],
        },
        {
          title: "6. Diritti degli utenti",
          paragraphs: [
            "Gli utenti possono richiedere l'accesso ai propri dati personali, la loro rettifica, cancellazione o sospensione del trattamento, nonché revocare il consenso. Le richieste sono ricevute tramite l'email del servizio clienti e gestite dopo la verifica dell'identità.",
          ],
        },
        {
          title: "7. Responsabile della protezione dei dati personali",
          paragraphs: [
            `Responsabile: ${companyInfo.privacyOfficer}`,
            `Email: ${companyInfo.email}`,
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
          title: "1. Principi generali",
          paragraphs: [
            "Una volta attivate le funzioni di pagamento, l'ambito rimborsabile può variare a seconda della modalità di fornitura di ciascun prodotto, del momento di avvio della produzione e dello stato di download. Le condizioni specifiche sono indicate sulla schermata del prodotto prima del pagamento.",
          ],
        },
        {
          title: "2. Report dettagliati sugli hanja (₩2,900 / ₩4,900 / ₩9,900)",
          paragraphs: [
            "Dopo il pagamento, la cancellazione è possibile finché la generazione dell'analisi dettagliata da parte dell'IA non è iniziata. Una volta completata la generazione e resi possibili la consultazione o il download, il rimborso per semplice ripensamento può essere limitato.",
            "In caso di errori nei contenuti, mancata generazione dovuta a guasti di sistema o incongruenze nell'importo pagato accertate, si procede alla riemissione o al rimborso. La scadenza del periodo di conservazione (24 ore dopo il pagamento) con conseguente fine della possibilità di download non costituisce motivo di rimborso.",
          ],
        },
        {
          title: "3. Sblocco di tutti i candidati (₩990)",
          paragraphs: [
            "Lo sblocco in blocco dei candidati nei servizi di conversione in nomi globali, conversione in nomi coreani e trascrizione fonetica in hangul è un contenuto digitale fornito immediatamente al pagamento. La cancellazione è possibile prima dell'inizio della consultazione dei candidati; dopo la consultazione, il rimborso per semplice ripensamento può essere limitato.",
            "Se, a causa di un errore di sistema, i candidati non vengono sbloccati correttamente, si procede a una nuova fornitura o al rimborso.",
          ],
        },
        {
          title: "4. Articoli di merchandising personalizzati",
          paragraphs: [
            "Gli articoli personalizzati possono essere cancellati fino all'avvio della produzione. Dopo l'avvio della produzione, il rimborso per semplice ripensamento può essere limitato; errori di scrittura, danni, difetti di produzione o problemi di consegna vengono gestiti, previa verifica, con la modalità appropriata tra sostituzione, nuova produzione o rimborso.",
          ],
        },
        {
          title: "5. Sblocco tramite pubblicità",
          paragraphs: [
            "I vantaggi ottenuti tramite la visione di pubblicità non sono prodotti a pagamento. Se la ricompensa non viene erogata a causa di un errore della rete pubblicitaria, la questione viene gestita con un nuovo tentativo all'interno del servizio o contattando il servizio clienti.",
          ],
        },
        {
          title: "6. Contatti",
          paragraphs: [`Richieste di rimborso: ${companyInfo.email}`],
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
            "L'analisi di base dei quattro servizi — abbinamento del significato degli hanja (caratteri cinesi), conversione in nomi globali, conversione in nomi coreani e trascrizione fonetica in hangul — è offerta gratuitamente anche agli ospiti e può essere soggetta a limiti di utilizzo giornalieri.",
          ],
        },
        {
          title: "Utilizzo con pubblicità a ricompensa",
          paragraphs: [
            "Lo sblocco dei candidati dopo la visione di una pubblicità è un vantaggio pubblicitario fornito senza pagamento aggiuntivo. Ogni pubblicità sblocca il candidato successivo. La disponibilità può variare in base all'inventario pubblicitario, al paese, al dispositivo o alle politiche del fornitore pubblicitario.",
          ],
        },
        {
          title: "Prodotti dettagliati di abbinamento del significato degli hanja",
          paragraphs: [
            "Spiegazioni dettagliate per un massimo di 5 candidati più un'analisi complessiva degli hanja: ₩2,900",
            "Spiegazioni dettagliate estese per un massimo di 10 candidati, un'analisi complessiva degli hanja e un PDF da conservare: ₩4,900",
            "Dettagli per un massimo di 10 candidati, un'analisi complessiva degli hanja, un'analisi saju (Quattro Pilastri) e Cinque Elementi e un PDF da conservare: ₩9,900",
            "I report a pagamento e i PDF restano consultabili e scaricabili per 24 ore dopo il pagamento; in seguito vengono eliminati automaticamente.",
          ],
        },
        {
          title: "Sblocco di tutti i candidati",
          paragraphs: [
            "Sblocco in una sola volta, senza pubblicità, di tutti i candidati rimanenti nei servizi di conversione in nomi globali, conversione in nomi coreani e trascrizione fonetica in hangul: ₩990 (funzione di pagamento in preparazione)",
          ],
        },
        {
          title: "Articoli di merchandising con nomi coreani",
          paragraphs: [
            "Per gli articoli di merchandising fisici, come il timbro del nome, il prezzo per prodotto, le spese di spedizione e i tempi di produzione sono comunicati separatamente.",
          ],
        },
        {
          title: "Informazioni prima del lancio ufficiale dei pagamenti",
          paragraphs: [
            "Una volta definiti l'esame del gestore dei pagamenti (PG), la registrazione dell'attività di vendita a distanza e le condizioni delle partnership di produzione, l'importo effettivo del pagamento, le spese di spedizione, i tempi di produzione e le condizioni di rimborso saranno comunicati nuovamente sulla schermata di ciascun prodotto.",
          ],
        },
      ],
    },
  },
};

export default content;
