import type { DocPage, NoticeCopy } from "./types";
import type { DocKey } from "./ko";

/** Italiano — `scripts/translate-doc-content.ts`가 만든다. 손으로 고치지 말 것. */
export const IT_DOCS = {
  "guide": {
    "eyebrow": "Base per il Calcolo",
    "title": "Qual è la base per il calcolo?",
    "summary": "Riveliamo tutte le regole che Dreams-Link utilizza. Puoi controllare quali simboli sono presenti, cosa è scritto nel dizionario — da dove provengono le interpretazioni visualizzate sullo schermo.",
    "backLabel": "Torna alla Home",
    "sections": [
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Tutti i numeri scritti qui sono **letto direttamente dal dizionario dei simboli e dalle regole di corrispondenza.** Poiché non trascriviamo manualmente il testo, se il dizionario viene ampliato o le regole vengono modificate, i numeri in questi documenti cambieranno."
          }
        ]
      }
    ]
  },
  "guide/how-matching-works": {
    "eyebrow": "Base per il Servizio",
    "title": "Come trovare simboli nelle storie dei sogni.",
    "summary": "Spiega come i simboli vengono selezionati da frasi scritte liberamente e come filtriamo un simbolo che si trova semplicemente all'interno di una parola più lunga — 별 (\"stella\") all'interno di 특별할 (\"niente di speciale\").",
    "backLabel": "Base per l'Interpretazione",
    "sections": [
      {
        "title": "Troviamo simboli nel testo che fornisci.",
        "blocks": [
          {
            "p": "Quando scrivi liberamente la tua storia di sogni, cerchiamo simboli in quel testo dal dizionario. Non è necessario selezionare elementi o scrivere in un formato specifico. Scrivi semplicemente come faresti normalmente, come 'La scorsa notte, un enorme pitone si è avvolto attorno a me.'"
          },
          {
            "p": "Quando cerchiamo, non guardiamo solo al nome del simbolo ma anche a **{aliasTotal} nomi alternativi**. Queste sono parole che si riferiscono alla stessa cosa, come 구렁이 (gureongi) e 뱀 (baem), 떨어지다 (tteoreojida) e 빠지다 (ppajida). Sono incluse anche le variazioni con le desinenze, come 「떨어지는」 (tteoreojineun) · 「쫓겨서」 (jjotgyeoseo) · 「빠졌다」 (ppajyeotda)."
          }
        ]
      },
      {
        "title": "I caratteri che appaiono accidentalmente all'interno di una parola non contano",
        "blocks": [
          {
            "p": "Questo è l'aspetto più difficile in coreano. Tra i simboli, ci sono **{singleCharSymbolTotal} simboli a carattere singolo** come **별** (byeol) · **말** (mal) · **배** (bae) · **손** (son), che appaiono frequentemente in altre parole."
          },
          {
            "ul": [
              "별 (\"stella\") nascosta dentro 특**별**할 (\"niente di speciale\")",
              "게 (\"granchio\") nascosto dentro 누군가에**게** (\"da qualcuno\")",
              "말 (\"cavallo\") dentro **말**했다 (\"ha detto\"), e 배 (\"barca, pera\") dentro **배**가 고팠다 (\"eravamo affamati\")"
            ]
          },
          {
            "p": "Contare questi come simboli porta a interpretazioni irrilevanti. Pertanto, esaminiamo i caratteri circostanti — se **c'è un carattere coreano davanti**, lo trattiamo come parte di una parola più lunga e non lo contiamo, e verifichiamo **se ciò che segue è una particella o una desinenza verbale**, permettendo a 「소가」 (soga) di passare mentre filtriamo 「소리」 (sori)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ecco come ha funzionato finora",
        "blocks": [
          {
            "p": "Prima di implementare questa regola, testando con dodici frasi reali, **tutte e dodici** contenevano simboli irrilevanti. Una frase senza contenuto significativo è stata persino contrassegnata come un a conception dream."
          },
          {
            "p": "Ora, ne rimane uno — il 배 (bae) in 「배가 고팠다」 (bae ga gopatda). Poiché suona lo stesso ma ha un significato diverso, non può essere filtrato solo dai caratteri circostanti."
          },
          {
            "p": "Non trovare qualcosa è una questione onesta. Tuttavia, trovare qualcosa di irrilevante significa stabilire una tradizione dietro quella parola che non ha mai avuto."
          }
        ]
      },
      {
        "title": "Gli stessi caratteri producono sempre gli stessi risultati",
        "blocks": [
          {
            "p": "Non c'è spazio per il caso nelle regole di corrispondenza. Poiché il dizionario è fisso e le regole sono stabilite, se inserisci di nuovo la stessa frase, **lo stesso simbolo apparirà nello stesso ordine**. L'interpretazione che vedi oggi non differirà da quella che vedrai domani."
          },
          {
            "p": "Questa qualità è anche una promessa che ci siamo fatti. Le interpretazioni che cambiano ogni volta sono divertenti ma mancano di fondamento. Questo si collega alla storia di [perché non usiamo modelli](/guide/no-ai)."
          }
        ]
      }
    ]
  },
  "guide/no-storage": {
    "eyebrow": "Informazioni Personali",
    "title": "Il Metodo di Non Memorizzare i Sogni Che Scrivi",
    "summary": "Spieghiamo cosa significa tecnicamente che le storie dei sogni non sono registrate da nessuna parte, e cosa è contenuto nel link dei risultati.",
    "backLabel": "Base per l'Interpretazione",
    "sections": [
      {
        "title": "Nessuna Iscrizione Richiesta",
        "blocks": [
          {
            "p": "Dreams-Link non crea account. Non raccogliamo nomi, email o numeri di telefono. Le uniche cose che raccogliamo sono i sogni che scrivi, come ti sei sentito quando ti sei svegliato, e se sogni lo stesso sogno ripetutamente, e questo non rimane dopo che l'interpretazione è completa."
          },
          {
            "p": "Le storie dei sogni sono il valore più privato che questo servizio riceve. Ecco perché le regole sono più severe del necessario — non abbiamo nemmeno creato una tabella per scrivere ciò che invii."
          }
        ]
      },
      {
        "title": "Cosa è contenuto nel link dei risultati",
        "blocks": [
          {
            "p": "Quando il calcolo è completo, l'indirizzo apparirà così."
          },
          {
            "p": "**/ko/dream/result#eyJ0IjoiSSBkcmVhbXQgb2YgYSBjYXJwLi4u**"
          },
          {
            "p": "Ciò che segue **#** è il valore di input. Questa parte è chiamata **frammento**, che è una **parte che il browser non invia al server**. Questo è un comportamento web standard e non una regola che abbiamo creato — è stato originariamente progettato per indicare una posizione all'interno di un documento, quindi il server non ha bisogno di vederlo."
          },
          {
            "p": "Qui, questa proprietà è particolarmente importante — il sogno che hai fornito **non rimane nei registri di accesso.**"
          },
          {
            "p": "In altre parole, quando apri il link dei risultati, il browser legge quel valore per richiedere un calcolo, e il nostro server riceve il valore per il calcolo, restituisce la risposta e poi lo dimentica."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Si prega di fare attenzione quando si inviano link ad altri",
        "blocks": [
          {
            "p": "Il fatto che non sia memorizzato sul server non significa che il link sia sicuro. Il link dei risultati contiene il sogno che hai fornito, quindi la persona che riceve quel link può leggere quel contenuto."
          }
        ]
      },
      {
        "title": "Perché il calcolo viene effettuato sul server ma non memorizzato?",
        "blocks": [
          {
            "p": "Il calcolo stesso viene effettuato sul server. Trovare simboli richiede l'intero dizionario, e quel dizionario è troppo grande per essere inviato al browser. Mantenere il dizionario sul server significa anche che quando un errore viene corretto, viene riflesso per tutti contemporaneamente. Tuttavia, **dopo aver elaborato la richiesta, quel valore non viene utilizzato da nessuna parte.** Non c'è codice per inserirlo nel database."
          },
          {
            "p": "Viene mantenuto un record minimo necessario per il funzionamento — un contatore per prevenire che la stessa persona invii troppe richieste in breve tempo. Questo non include il contenuto del sogno, e l'IP di accesso non viene nemmeno conservato. Solo un valore, hashato con la data, viene conteggiato, e quel valore cambia quando cambia il giorno."
          }
        ]
      },
      {
        "title": "Cosa non può essere fatto perché non è memorizzato",
        "blocks": [
          {
            "p": "Ad essere onesti, ci sono cose a cui abbiamo rinunciato perché non memorizziamo dati."
          },
          {
            "ul": [
              "**Non c'è un diario dei sogni.** Non puoi recuperare l'interpretazione della settimana scorsa, e devi avere il link per vederla di nuovo. Questo è fatto intenzionalmente — per creare un diario, gli scritti più privati devono essere continuamente memorizzati.",
              "**Calcoliamo lo stesso valore ogni volta.** Non c'è cache. Invece, il dizionario è fisso e le regole di corrispondenza sono deterministiche, quindi lo stesso testo produrrà sempre lo stesso simbolo — le regole sostituiscono ciò che la cache avrebbe garantito.",
              "**Aggiornare porterà di nuovo alla porta pubblicitaria.** Questo perché non c'è modo di lasciare registri di visualizzazione."
            ]
          }
        ]
      },
      {
        "title": "In caso di acquisto",
        "blocks": [
          {
            "p": "Se acquisti un rapporto, un record di transazione sarà mantenuto in quel momento. Il pagamento ha un periodo di conservazione definito dalla legge, e senza una cronologia degli ordini, i rimborsi non possono essere elaborati. Tuttavia, anche in quel caso, **il testo del sogno utilizzato per la lettura non è allegato all'ordine** — viene ricevuto di nuovo e scritto in quel momento quando si crea il documento dopo la conferma del pagamento."
          },
          {
            "p": "Per dettagli, si prega di fare riferimento alla [privacy policy](/privacy)."
          }
        ]
      }
    ]
  },
  "notice": {
    "eyebrow": "Avviso",
    "title": "Annunci",
    "summary": "Questo è un luogo per informarti di cambiamenti che potrebbero influenzare il tuo utilizzo.",
    "backLabel": "Torna alla Home",
    "sections": []
  },
  "contact": {
    "eyebrow": "Contatto",
    "title": "Richieste",
    "summary": "Questo è il canale per richieste riguardanti l'uso, rimborsi, richieste di informazioni personali e segnalazioni di errori, insieme a informazioni aziendali.",
    "backLabel": "Torna alla Home",
    "sections": [
      {
        "title": "Contatto via Email",
        "blocks": [
          {
            "p": "Si prega di inviare richieste a **{email}**. Risponderemo entro 2 giorni lavorativi. Per richieste di pagamento e rimborso, è più veloce includere il tuo **numero d'ordine o email di pagamento**."
          },
          {
            "p": "Le richieste telefoniche vengono ricevute presso {customerCenter}."
          }
        ]
      },
      {
        "title": "Cosa può essere inviato a questo canale?",
        "blocks": [
          {
            "ul": [
              "**Pagamento e Rimborso** — Se il documento non è stato creato o l'importo del pagamento differisce dall'ordine, verrà fornito un rimborso completo. Le condizioni sono nella [refund policy](/refund-policy).",
              "**Informazioni Personali** — Accettiamo richieste di accesso, correzione e cancellazione. La politica di elaborazione è nella [privacy policy](/privacy).",
              "**Segnala Errori di Interpretazione** — Se i simboli sono stati trovati in modo errato o l'interpretazione sembra strana, ti preghiamo di farcelo sapere. Se includi quando hai scritto quella storia di sogno, possiamo controllarla di nuovo con lo stesso testo."
            ]
          }
        ]
      },
      {
        "title": "Informazioni Aziendali",
        "blocks": [
          {
            "ul": [
              "**Nome Aziendale** — {companyName}",
              "**Rappresentante** — {representative}",
              "**Numero di Registrazione Aziendale** — {businessNumber}",
              "**Numero di Registrazione per Vendita per Posta** — {mailOrderNumber}",
              "**Indirizzo** — {address}",
              "**Centro Assistenza Clienti** — {customerCenter}",
              "**Email** — {email}",
              "**Responsabile della Protezione delle Informazioni Personali** — {privacyOfficer}",
              "**Fornitore di Hosting** — {hostingProvider}"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Non è necessario riscrivere il sogno che hai fornito nell'email di richiesta. Non salviamo gli input, quindi non possiamo controllarli di nuovo, e il numero d'ordine è sufficiente per la verifica. Si prega di annotarlo solo se è assolutamente necessario, come per segnalare errori di interpretazione."
          }
        ]
      }
    ]
  },
  "guide/what-we-do-not-do": {
    "eyebrow": "Principi di Servizio",
    "title": "Cosa Non Facciamo",
    "summary": "Non forniamo numeri della lotteria, diari dei sogni, determinazioni di gravidanza o amuleti. Spieghiamo perché abbiamo scelto di non fare ciascuna di queste cose.",
    "backLabel": "Base di Interpretazione",
    "sections": [
      {
        "title": "Non forniamo numeri della lotteria",
        "blocks": [
          {
            "p": "Sebbene sia comunemente trattato nei servizi di interpretazione dei sogni, noi non lo facciamo. **Non c'è alcuna base nell'interpretazione tradizionale dei sogni per estrarre numeri dai sogni.** Anche se ci sono registrazioni di interpretazioni di sogni di maiali come ricchezza, non c'è alcuna regola in alcuna letteratura che produca sei numeri da questo."
          },
          {
            "p": "Per crearli, dovremmo inventarli, e in quel momento, questo servizio non sarebbe più un luogo per trasmettere le interpretazioni tramandate dalla tradizione. Questo è particolarmente preoccupante poiché potrebbe portare a perdite finanziarie."
          }
        ]
      },
      {
        "title": "Non creiamo diari dei sogni",
        "blocks": [
          {
            "p": "Sebbene sarebbe comodo avere una funzione per raccogliere sogni passati, richiederebbe di **memorizzare continuamente i sogni che fornisci.** Le narrazioni dei sogni sono l'aspetto più privato di ciò che questo servizio riceve, e abbiamo deciso di non scambiarlo."
          },
          {
            "p": "Invece, i sogni che desideri conservare possono essere **presi come immagini o documenti.** La responsabilità per la memorizzazione spetta agli utenti, non a noi — [Due Modi per Conservare i Tuoi Sogni](/guide/reports)"
          }
        ]
      },
      {
        "title": "Non determiniamo gravidanza o genere",
        "blocks": [
          {
            "p": "Dichiareremo solo che è apparso un simbolo interpretato come un a conception dream (sogno di concezione). Se sei incinta o se il bambino è una figlia o un figlio **non è qualcosa che può essere conosciuto attraverso i sogni.** Tali affermazioni non appaiono sullo schermo o nei documenti a pagamento."
          }
        ]
      },
      {
        "title": "Non vendiamo amuleti o talismani",
        "blocks": [
          {
            "p": "Un simbolo letto come inauspicioso non è un motivo per acquistare nulla. Un sogno inauspicioso è stato tradizionalmente usato per **indicare una situazione da esaminare ora**, non per pagare per evitare qualcosa."
          },
          {
            "p": "Non creiamo ansia per vendere qualcosa basato su di esso. Le uniche cose che vendiamo sono le due menzionate sopra, e nessuna fornisce un'interpretazione aggiuntiva ma piuttosto **modi per mantenere lo stesso contenuto.**"
          }
        ]
      },
      {
        "kind": "note",
        "title": "Non facciamo affermazioni definitive sul futuro",
        "blocks": [
          {
            "p": "Non facciamo affermazioni definitive su se qualcosa accadrà, quando accadrà, o riguardo alla salute, alla ricchezza o alla durata della vita. Trasmettere i significati dei simboli tradizionali e prevedere il futuro sono questioni diverse."
          }
        ]
      },
      {
        "title": "Non fabbrichiamo interpretazioni che non esistono",
        "blocks": [
          {
            "p": "Per simboli che non esistono nel dizionario, **dichiareremo che non siamo riusciti a trovarli.** Non mettiamo insieme quelli simili o riempiamo lo spazio con frasi plausibili. Pertanto, questo servizio non [usa intelligenza artificiale per l'interpretazione dei sogni](/guide/no-ai). Il modello non dice che non sa ciò che non sa."
          }
        ]
      }
    ]
  },
  "about": {
    "eyebrow": "Introduzione",
    "title": "Introduzione a Dreams-Link",
    "summary": "Questo è un servizio che interpreta i sogni utilizzando un dizionario di simboli di interpretazione dei sogni tradizionale. Chiarisce ciò che è basato e ciò che non è dichiarato.",
    "backLabel": "Torna alla Home",
    "sections": [
      {
        "title": "Cosa facciamo?",
        "blocks": [
          {
            "p": "Dreams-Link trova **simboli utilizzati nell'interpretazione dei sogni tradizionale** dai sogni che scrivi e mostra i loro significati. Poiché i sogni sono qualcosa che abbiamo ogni giorno, le interpretazioni che vedi sullo schermo sono **gratuite e non richiedono iscrizione.**"
          },
          {
            "p": "Le uniche cose vendute a pagamento sono **due forme di conservazione** — un'immagine contenente un sogno positivo (carta dei sogni) e un PDF che contiene il contesto quando appare un simbolo tradizionalmente considerato un sogno di concezione."
          }
        ]
      },
      {
        "title": "Qual è la base?",
        "blocks": [
          {
            "p": "La base per l'interpretazione è un **dizionario di {symbolTotal} simboli**. Troviamo simboli nel testo del sogno e mostriamo solo i significati registrati nel dizionario per quei simboli. Se un simbolo ha più significati, scegliamo in base alla situazione — poiché il sole nascente e il sole calante sono tradizionalmente interpretati come opposti."
          },
          {
            "p": "Tutti i significati nel dizionario sono **tradotti dai testi originali di antichi libri di interpretazione dei sogni**, e ogni significato è accompagnato dal testo originale che ha servito da base. I testi originali utilizzati come base sono due — il **Zhou Gong's Dream Interpretation**, che è stato letto a lungo in Asia orientale, e il **Miller's Dream Book** dall'Occidente pubblicato nel 1901."
          },
          {
            "p": "La ricerca viene effettuata **solo secondo regole fisse**. Lo stesso sogno produrrà sempre gli stessi simboli, e le interpretazioni non cambiano da ieri a oggi."
          }
        ]
      },
      {
        "title": "Cosa non diciamo?",
        "blocks": [
          {
            "p": "**Non creiamo significati tradizionali che non sono nel dizionario.** Se non vengono trovati simboli, affermiamo semplicemente che non ne sono stati trovati e concludiamo. Riempire quello spazio con parole plausibili è ciò di cui questo servizio è più cauto."
          },
          {
            "p": "**I sogni di concezione sono semplicemente indicazioni, non determinazioni.** Ti informiamo solo che un simbolo tradizionalmente considerato un sogno di concezione è apparso nel sogno. Non prevediamo gravidanze o il sesso del bambino, e non c'è base per tali affermazioni."
          },
          {
            "p": "Non facciamo **affermazioni definitive sulla salute, sulla ricchezza o sulla carriera.** Questo è un riferimento dalla prospettiva dell'interpretazione tradizionale dei sogni e non è un consiglio medico, finanziario o legale."
          }
        ]
      },
      {
        "title": "Non conserviamo i sogni che scrivi.",
        "blocks": [
          {
            "p": "Le storie dei sogni sono la parte più privata di ciò che questo servizio riceve. Pertanto, **non le memorizziamo.** Gli input vengono utilizzati solo per calcoli e non vengono registrati in alcuna forma sul server."
          },
          {
            "p": "Abbiamo deciso **di non creare una funzione per raccogliere sogni come un diario dei sogni.** È una funzionalità preziosa, ma richiederebbe di conservare gli scritti più privati."
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Il metodo è descritto in modo più dettagliato nel [documento guida](/guide). Le informazioni aziendali e i dettagli di contatto possono essere trovati in [contattaci](/contact)."
          }
        ]
      }
    ]
  },
  "guide/symbol-dictionary": {
    "eyebrow": "Base del servizio",
    "title": "Qual è la base del dizionario dei simboli?",
    "summary": "Chiarisce da dove provengono le interpretazioni. I criteri per dividere {symbolTotal} simboli in otto categorie, il motivo per cui vengono allegati passaggi di testo originali a ciascun significato e il principio di non riempire spazi vuoti.",
    "backLabel": "Base dell'interpretazione",
    "sections": [
      {
        "title": "Mostriamo solo ciò che è scritto nel dizionario.",
        "blocks": [
          {
            "p": "Le interpretazioni di Dreams-Link provengono da un **dizionario di simboli pre-scritto**. Troviamo simboli nel testo che fornisci e mostriamo i significati registrati nel dizionario per quei simboli così come sono. Non creiamo parole che non sono nel dizionario."
          },
          {
            "p": "Attualmente, il dizionario contiene **{symbolTotal} simboli**, e tutti quei simboli hanno un totale di **{meaningTotal} significati**. Alcuni simboli hanno solo un significato, ma la maggior parte ne ha diversi, e per ciascun significato, **la situazione in cui quel significato si applica** è anche annotata."
          }
        ]
      },
      {
        "title": "Divisi in otto categorie.",
        "blocks": [
          {
            "p": "Abbiamo raggruppato ciò che appare nei sogni in otto categorie in base alle loro caratteristiche. Il numero attualmente elencato è tra parentesi."
          },
          {
            "ul": [
              "**Oggetti**({categoryThing}) · **Azioni**({categoryAction}) · **Animali**({categoryAnimal}) — le tre categorie più spesse. Queste sono principalmente ciò di cui discutono i vecchi libri di interpretazione dei sogni: oggetti visibili, bestie e azioni compiute nei sogni.",
              "**Natura**({categoryNature}) · **Persone**({categoryPerson}) — grandi e antiche cose come acqua, fuoco, sole e luna, e persone che appaiono nei sogni come re, ladri e defunti.",
              "**Luoghi**({categoryPlace}) · **Corpo**({categoryBody}) · **Colori**({categoryColor}) — luoghi come case e tombe, parti del corpo come denti, capelli e sangue, e colori."
            ]
          },
          {
            "p": "Per visualizzarli per categoria, puoi vedere l'elenco completo nel [dizionario dei simboli](/dream/symbols)."
          }
        ]
      },
      {
        "title": "Ogni significato è accompagnato da un passaggio di testo originale.",
        "blocks": [
          {
            "p": "Ognuno dei **{meaningTotal} significati** nel dizionario è accompagnato dal **passaggio di testo originale** che ha servito da base per quel significato. Tutti i {symbolTotal} simboli hanno questo — se non c'è un passaggio di testo originale, l'entry stessa non può essere creata."
          },
          {
            "p": "I testi originali utilizzati come base sono due. **Zhou Gong's Dream Interpretation** è un libro di interpretazione dei sogni che è stato letto a lungo in Asia orientale, e **Miller's Dream Book** è un libro occidentale pubblicato nel 1901. Quando apri un simbolo, puoi vedere da quale testo originale proviene il significato, insieme al passaggio e al suo significato."
          },
          {
            "p": "**Non riempiamo spazi vuoti.** Aggiungere origini plausibili renderebbe il documento più spesso, ma in quel momento, questo dizionario non sarebbe più una traduzione di ciò che è stato tramandato, ma piuttosto una fabbricazione. Non scriviamo ciò che non è nel testo originale, e per ciò che scriviamo, dobbiamo allegare il testo originale."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Quando espandiamo, espandiamo solo dal testo originale.",
        "blocks": [
          {
            "p": "Abbiamo cercato di creare voci basate su modelli di simboli, ma le voci risultanti ripetono le stesse parole come 「amore → buona relazione」 o non forniscono alcuna base dalla tradizione. Pertanto, **non le abbiamo incluse.** L'attuale dimensione del dizionario è dovuta alla traduzione dei testi originali, non alla creazione di voci — le ragioni per non utilizzare modelli sono dettagliate in [perché non usiamo modelli](/guide/no-ai)."
          }
        ]
      },
      {
        "title": "Buono e cattivo sono predeterminati dal dizionario.",
        "blocks": [
          {
            "p": "Ogni simbolo è accompagnato da indicazioni di auspiciosità e inauspiciosità. **Buono {polarityPositive}**, **ambivalente a seconda della situazione {polarityAmbivalent}**, **cauteloso {polarityNegative}**, e **neutro {polarityNeutral}**."
          },
          {
            "p": "Tra le quattro categorie, **la maggior parte è quella che varia a seconda della situazione.** Questo non è qualcosa che abbiamo bilanciato; è così che è scritto nei testi originali — anche per lo stesso simbolo, ci sono molti luoghi in cui è stato interpretato in modo opposto a seconda di ciò che è stato fatto. Questo valore riflette la natura di ciascun simbolo, e l'atmosfera generale del sogno viene ricalcolata raccogliendo i simboli trovati."
          }
        ]
      }
    ]
  },
  "guide/one-symbol-many-meanings": {
    "eyebrow": "Base del servizio",
    "title": "Perché lo stesso simbolo ha significati diversi.",
    "summary": "Il sole nascente e il sole calante sono tradizionalmente interpretati come opposti. Questo discute la struttura in cui {symbolTotal} simboli hanno {meaningTotal} significati e come discernere la situazione.",
    "backLabel": "Base dell'interpretazione",
    "sections": [
      {
        "title": "Anche se i simboli sono gli stessi, situazioni diverse producono significati diversi.",
        "blocks": [
          {
            "p": "Nei vecchi libri di interpretazione dei sogni, un simbolo non ha sempre un significato. Anche per lo stesso sole, **il sole nascente e il sole calante sono stati interpretati in modo opposto** — il primo indica prosperità nella famiglia, mentre il secondo indica preoccupazioni per la perdita dei genitori. Il dizionario è scritto in questo modo."
          },
          {
            "p": "Il motivo per cui i {symbolTotal} simboli hanno un totale di {meaningTotal} significati è che per ciascun significato, **la situazione in cui quel significato si applica** è anche annotata, quindi se quella situazione è visibile nel testo che fornisci, scegliamo quel significato."
          }
        ]
      },
      {
        "title": "Come discerniamo la situazione?",
        "blocks": [
          {
            "p": "Controlliamo se ci sono parole che indicano la situazione nel testo che fornisci. Nella frase 「Ho visto il sole calante」, è indicata la situazione del calare, mentre in 「Ho visto il sole appena sorgere」, è indicata la situazione dell'alzarsi. Se non ci sono parole che indicano la situazione, la interpretiamo in base al **significato di base** di quel simbolo."
          },
          {
            "p": "Quindi, quando scrivi il tuo sogno, ti preghiamo di includere **non solo ciò che è apparso ma anche quali azioni sono state compiute**; questo renderà l'interpretazione più accurata. Dire \"Ho visto un maiale\" comunica meno di \"il maiale è entrato in casa.\""
          }
        ]
      },
      {
        "kind": "note",
        "title": "Più scrivi, meglio è, ma non è necessario scrivere in modo esteso.",
        "blocks": [
          {
            "p": "Alcune frasi sono sufficienti. Scrivere di più non significa necessariamente trovare più simboli; piuttosto, se dichiarazioni non correlate sono mescolate, potrebbe portare a simboli errati."
          }
        ]
      },
      {
        "title": "Ci sono {contextSplitSymbolTotal} simboli con significati variabili.",
        "blocks": [
          {
            "p": "Dei {symbolTotal} simboli nel dizionario, **{contextSplitSymbolTotal}** hanno significati che variano a seconda della situazione. Gli altri possono essere interpretati in un'unica direzione indipendentemente dalla situazione."
          },
          {
            "p": "Questi **{contextSplitSymbolTotal}** simboli sono i più delicati. Interpretare male la situazione può portare a trasmettere buone notizie come cattive, o viceversa. Pertanto, se la situazione non è chiara, ci atteniamo al **significato di base del simbolo** senza forzare una scelta — non vogliamo parlare dell'incerto come se fosse certo."
          }
        ]
      },
      {
        "kind": "note",
        "title": "La sensazione al risveglio è presa in considerazione.",
        "blocks": [
          {
            "p": "Le sensazioni e le ripetizioni richieste sotto il contenuto del sogno non vengono utilizzate per trovare simboli. Vengono riferite quando si determina in quale modo interpretare nei casi di significati variabili. Non è necessario scegliere; i risultati verranno comunque forniti."
          }
        ]
      },
      {
        "title": "L'atmosfera generale del sogno è conteggiata separatamente.",
        "blocks": [
          {
            "p": "Se vengono trovati più simboli, raccogliamo se ciascun simbolo è positivo o cauteloso per determinare il tono generale del sogno. Un sogno che presenta un simbolo buono e un simbolo cauteloso non è semplicemente chiamato \"buon sogno.\""
          },
          {
            "p": "Puoi visualizzare in anteprima i vari simboli e i loro significati nel [dizionario dei simboli](/dream/symbols). È anche utile dare un'occhiata a ciò che è incluso prima di annotare il tuo sogno."
          }
        ]
      }
    ]
  },
  "guide/good-and-bad": {
    "eyebrow": "Base del servizio",
    "title": "Criteri per distinguere tra sogni auspiciosi e ominosi",
    "summary": "I quattro valori assegnati a ciascun simbolo e la loro distribuzione, le ragioni per i significati più variabili e perché discutiamo i sogni misti come misti.",
    "backLabel": "Base dell'interpretazione",
    "sections": [
      {
        "title": "A ciascun simbolo è assegnata una delle quattro categorie.",
        "blocks": [
          {
            "p": "I {symbolTotal} simboli nel dizionario sono ciascuno categorizzati come uno dei seguenti."
          },
          {
            "ul": [
              "**Positivo {polarityPositive}** — interpretato come eventi piacevoli come ricchezze, celebrazioni o benefattori.",
              "**Ambivalente {polarityAmbivalent}** — simboli come il sole o il maiale che possono avere i loro significati invertiti a seconda delle azioni intraprese. **Questa è la categoria più comune e la più cauta.**",
              "**Cauteloso {polarityNegative}** — interpretato come dispute, perdite o eventi negativi.",
              "**Neutro {polarityNeutral}** — simboli che non sono né auspiciosi né ominosi di per sé, come i colori."
            ]
          }
        ]
      },
      {
        "title": "Ragioni per i significati più variabili",
        "blocks": [
          {
            "p": "Questo non è un equilibrio che abbiamo raggiunto. **È come sono scritti i testi originali.** I vecchi testi di interpretazione dei sogni registravano significati diversi per lo stesso simbolo a seconda della situazione, e molte di quelle situazioni sono opposte — catturare un maiale è auspicioso, ma un maiale che muore da solo è ominoso, e lo stesso vale per il sole che sorge e tramonta."
          },
          {
            "p": "Pertanto, il fatto che \"sia apparso un simbolo buono\" non significa \"accadranno cose buone.\" Ciò che possiamo trasmettere è limitato a come quel simbolo è stato interpretato nella tradizione."
          }
        ]
      },
      {
        "title": "Il tono di un sogno è raccolto dai suoi simboli.",
        "blocks": [
          {
            "p": "Se vengono trovati più simboli, raccogliamo i loro significati auspiciosi e cautelosi per determinare il tono generale del sogno. Se appaiono solo simboli positivi, è un buon sogno; se appaiono solo simboli cautelosi, è un sogno cauteloso; se **misti, lo discuteremo come misto.**"
          },
          {
            "p": "Non forziamo un'interpretazione mista in un solo lato. In realtà, i sogni che le persone hanno sono per lo più misti, e riassumerli come \"un buon sogno\" non è né accurato né utile."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Parole non dette",
        "blocks": [
          {
            "p": "Non facciamo affermazioni definitive su ciò che accadrà, quando accadrà, o riguardo alla salute e alla ricchezza. Tradurre i significati dei simboli tradizionali è diverso dal prevedere il futuro."
          }
        ]
      },
      {
        "title": "Quando appaiono sogni cautelosi",
        "blocks": [
          {
            "p": "Anche se appare un simbolo interpretato come cauteloso, non significa necessariamente cattive notizie. Nella tradizionale interpretazione dei sogni, i sogni ominosi sono stati generalmente usati per indicare **la situazione che deve essere esaminata ora.** Se appare un simbolo interpretato come una disputa, può essere letto come un suggerimento per tenere la bocca chiusa."
          },
          {
            "p": "Per lo stesso motivo, questo servizio non vende talismani o amuleti. Le uniche cose vendute sono [due metodi per mantenere i tuoi sogni](/guide/reports)."
          }
        ]
      }
    ]
  },
  "guide/conception-dreams": {
    "eyebrow": "Sogni di concezione",
    "title": "Come distinguere i sogni di concezione",
    "summary": "Come determiniamo i {conceptionSymbolTotal} simboli dei sogni di concezione, perché non tutti i sogni di maiale sono sogni di concezione, e il principio secondo cui non determiniamo gravidanza o genere.",
    "backLabel": "Base dell'interpretazione",
    "sections": [
      {
        "title": "Prima, chiarifichiamo.",
        "blocks": [
          {
            "p": "**Dreams-Link non determina lo stato di gravidanza. Non dichiariamo nemmeno il genere del bambino.** Questo non è qualcosa che può essere conosciuto attraverso i sogni, né è qualcosa che possiamo fare."
          },
          {
            "p": "Ciò che possiamo trasmettere è limitato a questo — **il fatto che un simbolo tradizionalmente interpretato come sogno di concezione sia apparso in questo sogno.** Come quel simbolo è stato interpretato dagli antichi è tutto ciò che possiamo fornire."
          }
        ]
      },
      {
        "title": "Ci sono {conceptionSymbolTotal} simboli interpretati come sogni di concezione.",
        "blocks": [
          {
            "p": "Dei {symbolTotal} simboli nel dizionario, **{conceptionSymbolTotal}** sono contrassegnati come sogni di concezione. Molti sono animali come draghi, maiali e tigri, così come frutti come pesche, cachi e jujube, e includono anche il sole e la luna."
          },
          {
            "p": "Tuttavia, **solo perché quel simbolo è apparso non significa immediatamente che sia un sogno di concezione.** Qui è dove questo servizio ha messo un notevole impegno."
          }
        ]
      },
      {
        "title": "Determiniamo in base al significato scelto, non al simbolo.",
        "blocks": [
          {
            "p": "Il maiale è un simbolo di sogni di concezione, ma è anche **il rappresentante dei sogni di ricchezza.** Se dichiariamo che è un sogno di concezione solo perché è apparso il simbolo, allora tutti coloro che sognano maiali avrebbero sogni di concezione. In realtà, la maggior parte è stata interpretata come sogni di ricchezza."
          },
          {
            "p": "Pertanto, guardiamo **il significato effettivo scelto da quel simbolo, non solo il simbolo stesso.** Lo contrassegniamo come sogno di concezione solo quando il significato inclinato verso la concezione è scelto in base alla situazione che hai fornito. Anche con lo stesso maiale, l'interpretazione può differire in base alla frase."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Se menzioni la gravidanza, guarderemo prima a quello.",
        "blocks": [
          {
            "p": "Se la tua scrittura include termini come gravidanza, sogni di concezione o parto, daremo priorità al significato di concezione tra i significati che quel simbolo detiene. Anche lo stesso sogno può essere interpretato in modo diverso in base alla situazione attuale."
          }
        ]
      },
      {
        "title": "Il motivo per avere un rapporto separato sui sogni di concezione.",
        "blocks": [
          {
            "p": "I sogni di concezione servono a uno scopo diverso rispetto ad altri sogni. Vengono spesso discussi molto tempo dopo la nascita del bambino e condivisi tra i membri della famiglia. Pertanto, piuttosto che semplicemente visualizzarlo su uno schermo, abbiamo creato un **documento che può essere conservato.**"
          },
          {
            "p": "Ciò che è incluso è delineato in [due metodi per mantenere i tuoi sogni](/guide/reports). Puoi visualizzare tutte le interpretazioni senza acquistarle."
          }
        ]
      }
    ]
  },
  "guide/how-to-write": {
    "eyebrow": "Come usare",
    "title": "Come scrivere un sogno",
    "summary": "Se annoti ciò che hai visto e fatto, verrà interpretato bene. Spieghiamo perché un singolo verbo decide il significato e perché chiediamo anche come ti sei sentito e se il sogno si ripete.",
    "backLabel": "Base dell'interpretazione",
    "sections": [
      {
        "title": "Per favore, scrivi ciò che hai visto e fatto",
        "blocks": [
          {
            "p": "Non c'è un formato specifico. Due o tre frasi, come parleresti normalmente, sono sufficienti. Tuttavia, ciò che è ben interpretato è determinato — **ciò che hai visto** e **ciò che è accaduto**."
          },
          {
            "ul": [
              "Ben interpretato — 「Un grande serpente si è avvolto attorno a me」, 「Ho visto acqua limpida scorrere」, 「Il mio dente è caduto da solo」",
              "Non interpretato — 「Avevo paura」, 「Mi sentivo strano」, 「Sembrava che qualcuno mi odiasse」"
            ]
          },
          {
            "p": "Se scrivi solo i tuoi sentimenti, non ci saranno simboli da trovare. L'interpretazione dei sogni tradizionale parla di [oggetti e azioni](/guide/categories), non di emozioni."
          }
        ]
      },
      {
        "title": "Scrivere ciò che hai fatto rende tutto più accurato",
        "blocks": [
          {
            "p": "Anche lo stesso simbolo può avere significati diversi a seconda della situazione, con {contextSplitSymbolTotal} casi. L'alba e il tramonto sono stati tradizionalmente interpretati in modi opposti."
          },
          {
            "p": "Pertanto, 「Ho visto un maiale」 è meno accurato di 「Il maiale è entrato in casa」, e 「C'era acqua」 è meno accurato di 「Ho bevuto acqua limpida」. **Un singolo verbo determina il significato.**"
          }
        ]
      },
      {
        "title": "Il motivo per cui chiediamo dei sentimenti e della ricorrenza",
        "blocks": [
          {
            "p": "Sotto il contenuto del sogno, c'è un luogo per scegliere **come ti sei sentito al risveglio** e **se hai sogni ricorrenti**. Non è necessario selezionare entrambi affinché vengano forniti risultati."
          },
          {
            "p": "Questi valori non vengono utilizzati per trovare simboli. Vengono riferiti quando si decide **quale significato scegliere** dallo stesso simbolo e come comunicare i risultati. I sogni ricorrenti sono stati tradizionalmente visti in modo diverso rispetto a un sogno avuto una sola volta."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Nei casi che menzionano la gravidanza",
        "blocks": [
          {
            "p": "Se il testo include parole come gravidanza, sogno di concezione, o parto, guardiamo prima al significato del sogno di concezione di quel simbolo. Anche lo stesso sogno di maiale è stato interpretato in modo diverso dagli antichi a seconda della situazione — [come distinguere 태몽](/guide/conception-dreams)"
          }
        ]
      },
      {
        "title": "Non è necessario scrivere a lungo",
        "blocks": [
          {
            "p": "Una lunghezza maggiore non significa che verranno trovati più simboli. Infatti, se parole non correlate vengono mescolate in modo lungo, c'è una maggiore possibilità che parole irrilevanti vengano interpretate come simboli. Si prega di scrivere solo le **scene memorabili**."
          },
          {
            "p": "Il testo che scrivi non verrà salvato da nessuna parte. Il motivo per cui puoi scrivere liberamente è spiegato in [il metodo di non salvataggio](/guide/no-storage)."
          }
        ]
      }
    ]
  },
  "guide/categories": {
    "eyebrow": "Base del Servizio",
    "title": "Criteri Divisi in Otto Categorie",
    "summary": "Otto categorie — da oggetti, azioni e animali fino al corpo e ai colori — con quanti simboli ciascuna contiene, e perché non c'è categoria per le emozioni.",
    "backLabel": "Base dell'Interpretazione",
    "sections": [
      {
        "title": "Diviso in otto categorie di ciò che appare nei sogni",
        "blocks": [
          {
            "p": "Abbiamo raggruppato {symbolTotal} simboli in otto categorie in base al loro carattere. La domanda di divisione è **come appare nel sogno** — una bestia, un oggetto, o qualcosa che hai fatto."
          },
          {
            "ul": [
              "**Oggetti {categoryThing}** — articoli tangibili come denaro, specchi e coltelli. Questa è la categoria più ampia.",
              "**Azioni {categoryAction}** — cose fatte o vissute nel sogno, come fare il bagno, festeggiare, o essere picchiati.",
              "**Animali {categoryAnimal}** — draghi, maiali, serpenti e mucche. Molti di questi sono stati visti come 태몽.",
              "**Natura {categoryNature}** — cose grandi e antiche come acqua, fuoco, sole e luna.",
              "**Persone {categoryPerson}** — persone che appaiono nei sogni, come re, ladri e individui deceduti.",
              "**Luoghi {categoryPlace}** — località in cui si verificano i sogni, come case, pozzi e tombe.",
              "**Corpo {categoryBody}** — denti, capelli, sangue. Il significato varia a seconda di dove si trova sul corpo.",
              "**Colori {categoryColor}** — non hanno intrinsecamente un valore buono o cattivo e vengono interpretati in base a ciò con cui sono associati."
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Il motivo per cui non ci sono categorie numeriche",
        "blocks": [
          {
            "p": "Non abbiamo creato una categoria per numeri come 「tre」 o 「sette」. **Nessuno dei due testi originali stabilisce un numero come voce.** Per aprire quella categoria e compilarla, dovremmo scrivere qualcosa che non appare in nessuno dei due testi."
          }
        ]
      },
      {
        "title": "Perché non c'è una categoria emotiva",
        "blocks": [
          {
            "p": "Non abbiamo creato una categoria per sentimenti come 「ansia」 o 「desiderio」. **Questo perché i testi di interpretazione dei sogni antichi non menzionano le emozioni.** Entrambi i testi originali parlano di ciò che è visto e di ciò che accade, non dei sentimenti del sognatore come oggetto di interpretazione."
          },
          {
            "p": "Una volta abbiamo provato a costruire una categoria per le emozioni, e ciò che ne è uscito sono stati termini come 「perdita di affetto」 e 「stabilità emotiva」. Questi non sono **forme** che appaiono nei sogni ma vocaboli della psicologia moderna. Questo è un tipo di servizio diverso e non è ciò che questo dizionario intende fare."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Quindi quando scrivi",
        "blocks": [
          {
            "p": "Per favore, scrivi **ciò che hai visto e fatto** piuttosto che sentimenti, poiché sarà molto meglio interpretato. Tuttavia, chiediamo separatamente come ti sei sentito al risveglio — questo viene riferito in situazioni in cui i significati possono variare anche per lo stesso simbolo."
          }
        ]
      },
      {
        "title": "I colori non vengono usati da soli",
        "blocks": [
          {
            "p": "I colori {categoryColor} non hanno intrinsecamente un valore buono o cattivo. Proprio come i serpenti blu e i serpenti rossi sono stati interpretati in modo diverso, i loro significati cambiano in base a **ciò con cui sono associati**. Pertanto, questa categoria è considerata come valori letti quando appaiono con altri simboli."
          },
          {
            "p": "L'elenco completo per categoria è disponibile nel [Dizionario dei Simboli](/dream/symbols). Quando apri un simbolo, verranno forniti il significato trasmesso, la categoria e i simboli correlati."
          }
        ]
      }
    ]
  },
  "guide/not-found": {
    "eyebrow": "Come Usare",
    "title": "Quando un Simbolo Non Viene Trovato",
    "summary": "Se non viene trovato nulla, lo diciamo. Copriamo perché ciò accade, cosa mostriamo su quella schermata invece, e come il dizionario viene espanso.",
    "backLabel": "Base dell'Interpretazione",
    "sections": [
      {
        "title": "Quando non troviamo nulla, diciamo che non abbiamo trovato nulla",
        "blocks": [
          {
            "p": "Se non possiamo trovare un singolo simbolo nel testo che hai scritto, **ti diciamo che non abbiamo trovato nulla.** Non forziamo un simbolo simile su di esso, né scriviamo una frase plausibile per riempire il vuoto."
          },
          {
            "p": "Questo è il problema più preoccupante per questo servizio. Nel momento in cui riempi il vuoto, l'interpretazione che ne deriva e ciò che è realmente fatto divergono."
          }
        ]
      },
      {
        "title": "Perché non può essere trovato?",
        "blocks": [
          {
            "p": "Di solito è uno dei seguenti."
          },
          {
            "ul": [
              "**È un simbolo che non è ancora nel dizionario.** Attualmente, ci sono {symbolTotal} simboli elencati, ma ce ne sono molti altri che potrebbero apparire nei sogni.",
              "**Hai scritto solo i tuoi sentimenti.** Se hai solo emozioni come \"avevo paura\" o \"mi sentivo strano\", non ci sono simboli che possono essere identificati. L'interpretazione dei sogni tradizionale si riferisce a **oggetti e azioni visibili**, non emozioni.",
              "**È troppo breve.** È meglio scrivere in frasi piuttosto che solo una o due parole."
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Quando provi a scrivere di nuovo",
        "blocks": [
          {
            "p": "Per favore, includi **cosa hai visto e cosa hai fatto** nel sogno. Dire \"ero ansioso\" è meno efficace che dire \"i miei denti sono caduti da soli,\" e \"mi è piaciuto\" è meno efficace che dire \"ho visto acqua chiara scorrere.\""
          }
        ]
      },
      {
        "title": "Non lasciamo uno schermo vuoto",
        "blocks": [
          {
            "p": "Quando qualcosa non può essere trovato, mostriamo anche **{popularSymbolCount} simboli frequentemente cercati** su quello schermo. Questi sono selezionati tra i più rappresentativi nel dizionario, il che può aiutarti a ricordare se uno di essi era nel tuo sogno."
          },
          {
            "p": "Se vuoi sfogliare tutto, puoi trovare {symbolTotal} simboli organizzati per categoria nel [dizionario dei simboli](/dream/symbols). Ogni simbolo include il suo significato trasmesso e simboli correlati."
          }
        ]
      },
      {
        "title": "Come si espanderà il dizionario in futuro?",
        "blocks": [
          {
            "p": "Piuttosto che aumentare i numeri, ci stiamo concentrando prima su **identificare accuratamente ciò che è già presente**. Abbiamo incluso {aliasTotal} nomi alternativi per gli stessi simboli, e ci siamo assicurati che le parole con suffissi che cambiano le loro forme possano essere identificate."
          },
          {
            "p": "Quando espandiamo i simboli stessi, includiamo solo **ciò che è scritto nel testo originale**. Se un significato non ha una frase originale corrispondente, non verrà creato un ingresso — semplicemente aumentare i numeri senza fondamento lo trasforma in creazione, non in un dizionario. Le ragioni di questo tentativo e i suoi risultati sono documentati in [perché non usiamo modelli](/guide/no-ai)."
          }
        ]
      }
    ]
  },
  "guide/no-ai": {
    "eyebrow": "Base del Servizio",
    "title": "Motivi per non utilizzare intelligenza artificiale nell'interpretazione dei sogni",
    "summary": "Non c'è codice che chiama un modello per creare interpretazioni. Questo è il risultato del tentativo di espandere il dizionario utilizzando un modello e ciò che è stato guadagnato e ciò che è stato sacrificato come risultato.",
    "backLabel": "Base dell'Interpretazione",
    "sections": [
      {
        "title": "L'intelligenza artificiale non è utilizzata nell'interpretazione dei sogni",
        "blocks": [
          {
            "p": "Molti servizi attuali di interpretazione dei sogni mostrano scritti generati inserendo storie di sogni in modelli generativi. Dreams-Link non fa questo. **Non c'è codice che chiama un modello per creare interpretazioni.**"
          },
          {
            "p": "Ciò che facciamo è semplice. Troviamo i simboli nel testo che fornisci e selezioniamo i significati che il dizionario ha scritto su quei simboli. Non c'è spazio per frasi che non sono nel dizionario."
          },
          {
            "p": "Il dizionario stesso non è creato da un modello. Ogni significato è accompagnato da **quale passaggio del testo originale di interpretazione dei sogni proviene**, e quel passaggio è confrontato parola per parola con il file originale."
          }
        ]
      },
      {
        "title": "Perché è stata presa questa decisione?",
        "blocks": [
          {
            "p": "**I modelli non dicono che non sanno cosa non sanno.** Quando vengono chiesti simboli senza fondamento trasmesso, fabbricano origini plausibili. E se sia fabbricato o meno è qualcosa che il lettore non può discernere. Se la creazione viene inserita al posto della trasmissione della tradizione, il presupposto del servizio crolla."
          },
          {
            "p": "Abbiamo provato a far creare simboli a un modello per espandere il dizionario. Su sessantasei esempi selezionati come degni di adozione, **cinquantacinque non potevano fornire alcun fondamento trasmesso**, e ci sono stati anche esempi come metropolitana e autostrada che non possono esistere nell'interpretazione dei sogni tradizionale. Pertanto, **nessuno è stato incluso.**"
          }
        ]
      },
      {
        "kind": "note",
        "title": "Lo stesso valeva anche per un modello più grande",
        "blocks": [
          {
            "p": "Quando abbiamo eseguito la stessa cosa su un modello migliore, uno su diciannove è passato, e quello era semplicemente una ripetizione della stessa parola con lo stesso fondamento. Un modello più grande parla solo **in modo più plausibile** di ciò che non sa."
          }
        ]
      },
      {
        "title": "I benefici di non utilizzare un modello",
        "blocks": [
          {
            "ul": [
              "**Se è lo stesso sogno, la stessa interpretazione uscirà.** Le parole non cambiano ogni volta che lo guardi.",
              "**È veloce.** Non c'è attesa per la risposta del modello, quindi i risultati sono immediatamente disponibili.",
              "**Il sogno che hai scritto non esce.** Non c'è bisogno di inviarlo al server di un'azienda esterna — per favore leggi questo insieme a [il metodo che non salva](/guide/no-storage).",
              "**Può essere offerto gratuitamente.** I sogni sono qualcosa che abbiamo ogni giorno, quindi ci sono molte richieste. Se un modello viene chiamato per ogni richiesta, i costi devono essere coperti da qualche parte."
            ]
          }
        ]
      },
      {
        "title": "Invece, cosa è stato sacrificato",
        "blocks": [
          {
            "p": "Non possiamo interpretare ciò che non è nel dizionario. Se avessimo usato un modello, ci sarebbe stata una risposta plausibile per qualunque cosa tu avessi scritto. Abbiamo scelto di **dire che non potevamo trovarlo quando non potevamo trovarlo.** Ciò che mostriamo in quel momento è documentato in [quando un simbolo non può essere trovato](/guide/not-found)."
          }
        ]
      }
    ]
  },
  "guide/reports": {
    "eyebrow": "Prodotti a Pagamento",
    "title": "Due Modi per Conservare i Tuoi Sogni",
    "summary": "L'interpretazione stessa non comporta una spesa. Spiega quali sono le due opzioni a pagamento, cosa contengono e perché non sono interpretazioni migliori.",
    "backLabel": "Base dell'Interpretazione",
    "sections": [
      {
        "title": "L'interpretazione stessa non comporta una spesa",
        "blocks": [
          {
            "p": "Scrivere il tuo sogno e vedere quali simboli sono inclusi **non costa denaro e non richiede iscrizione.** Poiché le persone sognano ogni giorno, abbiamo giudicato che questo spazio dovrebbe essere offerto gratuitamente."
          },
          {
            "p": "**Le due opzioni a pagamento non sono interpretazioni migliori.** Sono **due modi per mantenere la stessa interpretazione.** Il contenuto che vedi sullo schermo non cambia dopo il pagamento."
          }
        ]
      },
      {
        "title": "Dream Card — Un'Immagine",
        "blocks": [
          {
            "p": "Forniamo i simboli trovati nel tuo sogno e i loro significati in **un'immagine.** È un file immagine, non un PDF, quindi puoi salvarlo così com'è o inviarlo ad altri."
          },
          {
            "p": "Questo è per coloro che si sentono dispiaciuti quando un buon sogno scompare dopo la chiusura dello schermo. Poiché non salviamo i sogni, questo è l'unico modo per conservarli se desideri preservarli."
          }
        ]
      },
      {
        "title": "Rapporto sul Sogno di Concezione — Documento di {conceptionPages} pagine",
        "blocks": [
          {
            "p": "Creiamo un **documento di {conceptionPages} pagine** sui sogni che mostrano simboli che indicano un sogno di concezione. Include quali simboli sono apparsi, come quei simboli sono stati tradizionalmente interpretati, e uno spazio per registrare tali informazioni."
          },
          {
            "p": "I sogni di concezione vengono spesso discussi e condivisi tra i membri della famiglia anche dopo la nascita del bambino, quindi abbiamo creato un documento separato per sogni che sono troppo preziosi per essere semplicemente visualizzati sullo schermo."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Parole non utilizzate nemmeno qui",
        "blocks": [
          {
            "p": "Non facciamo giudizi sullo stato di gravidanza o sul sesso del bambino. Tali affermazioni non sono incluse nel documento. Per ulteriori dettagli, si prega di fare riferimento a [come vengono filtrati i sogni di concezione](/guide/conception-dreams)."
          }
        ]
      },
      {
        "title": "Perché non c'è più documento?",
        "blocks": [
          {
            "p": "Il servizio fraterno produce un rapporto di nove pagine. Questo perché il motore saju estrae molti valori da una singola data di nascita. L'interpretazione dei sogni nella tradizione coreana non funziona in questo modo."
          },
          {
            "p": "Il dizionario contiene {symbolTotal} simboli e {meaningTotal} significati, ma **solo pochi simboli si applicano effettivamente a un singolo sogno**. Per espandere ciò in nove pagine, si dovrebbe scrivere cose che non si trovano in alcun testo originale, e questo è precisamente ciò che questo servizio ha scelto di non fare. Pertanto, il documento è lungo quanto i materiali onestamente consentono, e non di più."
          }
        ]
      },
      {
        "title": "Valori e Disponibilità",
        "blocks": [
          {
            "p": "I prezzi sono disponibili nella [guida ai prezzi](/pricing). Il motivo per cui questo documento non elenca gli importi è intenzionale — per prevenire situazioni in cui il documento di guida rimane con importi obsoleti quando i valori cambiano. Lo schermo e i termini leggono tutti gli importi dallo stesso luogo."
          },
          {
            "p": "Il documento per cui hai pagato può **essere ricevuto di nuovo con lo stesso ordine.** Tuttavia, poiché non memorizziamo i file, non può essere ricreato una volta che lasci la schermata dei risultati — ti preghiamo di conservare il file che hai ricevuto."
          }
        ]
      }
    ]
  }
} satisfies Record<DocKey, DocPage>;

export const IT_NOTICES = {
  "kindLabels": {
    "service": "Servizio",
    "product": "Rapporti",
    "engine": "Calcolo",
    "support": "Supporto"
  },
  "intro": "Le modifiche ai tuoi termini di utilizzo — prezzi, politiche — vengono pubblicate qui prima che entrino in vigore. I miglioramenti interni, come il caricamento più veloce della schermata, non vengono pubblicati qui: ciò che appare qui è ciò che devi sapere.",
  "empty": {
    "title": "Nessun avviso pubblicato",
    "body": "Se ci sono modifiche di cui informarti, verranno pubblicate qui."
  },
  "effective": "Efficace dal {date}",
  "pager": {
    "label": "Pagina degli avvisi",
    "newer": "← Più recente",
    "older": "Avvisi precedenti →"
  },
  "items": {
    "2026-08-06-no-storage": {
      "title": "Il sogno che hai fornito non è memorizzato.",
      "body": [
        "Le storie dei sogni sono i valori più privati che questo servizio riceve. Pertanto, non vengono registrate in alcun database. L'input è trasmesso solo nell'indirizzo del risultato per il calcolo, e una volta chiusa la finestra, scompare.",
        "Abbiamo deciso di non creare una funzione che raccoglie i sogni e mostra il flusso (diario dei sogni). È una funzione utile, ma per farlo, i scritti più privati devono essere continuamente memorizzati.",
        "Quando invii il link del risultato ad altri, contiene il contenuto del sogno. Ti preghiamo di fare attenzione quando condividi."
      ]
    },
    "2026-08-06-engine-version": {
      "title": "I risultati includono il dizionario dei simboli e i criteri di calcolo.",
      "body": [
        "La base per l'interpretazione è il dizionario dei simboli di interpretazione dei sogni tradizionale. I risultati e i documenti includeranno la versione di quel dizionario (ad esempio, 1.2.0) e la versione delle regole di corrispondenza (ad esempio dream-1.0.0). Lo stesso sogno produrrà sempre lo stesso simbolo basato sugli stessi criteri.",
        "Se aggiungiamo simboli al dizionario o cambiamo i significati in un modo che può alterare i risultati, questo fatto viene presentato qui. Questo perché i risultati che hai ricevuto in precedenza potrebbero cambiare.",
        "Non creiamo significati tradizionali che non sono nel dizionario. Se non vengono trovati simboli, semplicemente dichiariamo che non ne sono stati trovati e concludiamo."
      ]
    },
    "2026-08-06-conception": {
      "title": "Ti informiamo solo riguardo a un a conception dream e non facciamo giudizi.",
      "body": [
        "Se nel sogno compaiono simboli tradizionalmente considerati come un a conception dream, ti informeremo di questo fatto. Tuttavia, non determiniamo lo stato di gravidanza o il sesso del bambino — tali affermazioni non hanno fondamento, e i giudizi medici sono responsabilità delle istituzioni mediche.",
        "La menzione di figli e figlie nelle narrazioni tradizionali è un riflesso delle consuetudini che sono state tramandate, e non significa che stiamo prevedendo correttamente."
      ]
    }
  }
} satisfies NoticeCopy;
