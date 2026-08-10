import type { DocPage, NoticeCopy } from "./types";
import type { DocKey } from "./ko";

/** Italiano — `scripts/translate-doc-content.ts`가 만든다. 손으로 고치지 말 것. */
export const IT_DOCS = {
  "about": {
    "eyebrow": "Introduzione",
    "title": "Introduzione a Dreams-Link",
    "summary": "Questo è un servizio che interpreta i sogni utilizzando un dizionario di simboli per l'interpretazione dei sogni tradizionale. Chiarisce cosa viene utilizzato come base e cosa non viene menzionato.",
    "backLabel": "Torna alla Home",
    "sections": [
      {
        "title": "Cosa facciamo?",
        "blocks": [
          {
            "p": "Dreams-Link trova **simboli utilizzati nell'interpretazione tradizionale dei sogni** dai sogni che scrivi e mostra i loro significati. Poiché i sogni sono qualcosa che sperimentiamo quotidianamente, le interpretazioni visualizzate sullo schermo sono **gratuite e non richiedono iscrizione.**"
          },
          {
            "p": "Le uniche cose vendute a pagamento sono **due forme di conservazione** — un'immagine (carta dei sogni) contenente un sogno positivo e un PDF che cattura il contesto quando appare un simbolo tradizionalmente considerato un sogno di concezione."
          }
        ]
      },
      {
        "title": "Qual è la base per l'interpretazione?",
        "blocks": [
          {
            "p": "La base per l'interpretazione è un **dizionario di {symbolTotal} simboli**. Troviamo simboli nel testo del sogno e mostriamo solo i significati registrati nel dizionario per quei simboli. Se un simbolo ha più significati, scegliamo in base al contesto — ad esempio, tenere un serpente e essere morsi sono tradizionalmente considerati opposti."
          },
          {
            "p": "La ricerca viene effettuata **solo secondo regole fisse**. Se si tratta dello stesso sogno, gli stessi simboli appariranno sempre e l'interpretazione non cambierà da ieri a oggi."
          }
        ]
      },
      {
        "title": "Cosa non diciamo?",
        "blocks": [
          {
            "p": "**Non inventiamo significati tradizionali che non sono nel dizionario.** Se non vengono trovati simboli, dichiariamo semplicemente che non ne sono stati trovati e concludiamo. Riempire quello spazio con parole plausibili è ciò di cui questo servizio è più cauto."
          },
          {
            "p": "**Un sogno di concezione è semplicemente un segno, non un giudizio.** Ti informiamo solo che un simbolo tradizionalmente considerato un sogno di concezione è apparso nel sogno. Non prevediamo gravidanze o il sesso del bambino, e non c'è alcuna base per tali affermazioni."
          },
          {
            "p": "Non facciamo **affermazioni definitive sulla salute, la ricchezza o la carriera.** Questo è un riferimento dalla prospettiva dell'interpretazione tradizionale dei sogni e non è un consiglio medico, finanziario o legale."
          }
        ]
      },
      {
        "title": "Non conserviamo i sogni che scrivi.",
        "blocks": [
          {
            "p": "Le storie dei sogni sono la parte più privata di ciò che questo servizio riceve. Pertanto, **non le memorizziamo.** Ciò che inserisci è trasportato solo nell'URL e utilizzato per la lettura; non è registrato in alcun database sui nostri server."
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
  "guide": {
    "eyebrow": "Base per il Calcolo",
    "title": "Qual è la base per il calcolo?",
    "summary": "Riveliamo tutte le regole che Dreams-Link utilizza. Puoi controllare quali simboli vengono trovati, cosa è scritto nel dizionario — da dove provengono le interpretazioni visualizzate sullo schermo.",
    "backLabel": "Torna alla Home",
    "sections": [
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Tutti i numeri scritti qui sono **letto direttamente dal dizionario dei simboli e dalle regole di corrispondenza.** Poiché non trascriviamo manualmente il testo, se il dizionario viene ampliato o le regole vengono cambiate, i numeri in questi documenti cambieranno."
          }
        ]
      }
    ]
  },
  "guide/symbol-dictionary": {
    "eyebrow": "Base per il Servizio",
    "title": "Qual è la base del dizionario dei simboli?",
    "summary": "Chiarisce da dove provengono le interpretazioni. I criteri per dividere 215 simboli in nove categorie, il motivo per cui solo 24 possono essere giustificati e perché non riempiamo i vuoti.",
    "backLabel": "Base per l'Interpretazione",
    "sections": [
      {
        "title": "Mostriamo solo ciò che è scritto nel dizionario.",
        "blocks": [
          {
            "p": "Le interpretazioni di Dreams-Link provengono da un **dizionario di simboli pre-scritto**. Troviamo simboli nel testo che fornisci e mostriamo i significati registrati nel dizionario per quei simboli. Non creiamo parole che non sono nel dizionario."
          },
          {
            "p": "Attualmente, il dizionario contiene **{symbolTotal} simboli**, e quei simboli hanno un totale di **{meaningTotal} significati**. La maggior parte dei simboli ha solo un significato, mentre alcuni ne hanno più a seconda del contesto."
          }
        ]
      },
      {
        "title": "Divisi in nove categorie.",
        "blocks": [
          {
            "p": "Abbiamo raggruppato ciò che appare nei sogni in nove categorie in base alle loro caratteristiche. I numeri tra parentesi sono i conteggi attuali."
          },
          {
            "ul": [
              "**Oggetti**({categoryThing}) · **Animali**({categoryAnimal}) · **Natura**({categoryNature}) — le tre categorie più grandi. L'interpretazione tradizionale dei sogni discute principalmente oggetti visibili, animali ed elementi del cielo e dell'acqua.",
              "**Azioni**({categoryAction}) · **Corpo**({categoryBody}) — ciò che è stato fatto, come essere inseguiti o cadere, e dove sul corpo, come il viso o i capelli.",
              "**Persone**({categoryPerson}) · **Luoghi**({categoryPlace}) · **Colori**({categoryColor}) · **Numeri**({categoryNumber})"
            ]
          },
          {
            "p": "Per visualizzarli per categoria, puoi vedere l'elenco completo nel [dizionario dei simboli](/dream/symbols)."
          }
        ]
      },
      {
        "title": "Solo {cultureNoteTotal} possono essere giustificati.",
        "blocks": [
          {
            "p": "Tra i simboli, **{cultureNoteTotal}** hanno motivi per l'interpretazione scritti accanto a loro. Ad esempio, il motivo per distinguere tra denti superiori e inferiori in un sogno di perdere denti. I simboli rimanenti hanno spazi vuoti."
          },
          {
            "p": "**Non abbiamo riempito gli spazi vuoti.** Aggiungere origini plausibili renderebbe il documento più spesso, ma in quel momento, questo dizionario non trasmetterebbe la tradizione ma la fabbricherebbe. È più onesto distinguere tra ciò che può e non può essere giustificato."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Motivi per non espandere arbitrariamente il dizionario.",
        "blocks": [
          {
            "p": "Abbiamo effettivamente tentato di espandere i simboli a centinaia ma abbiamo rinunciato. Le voci generate automaticamente ripetevano frasi come 'romanticismo → buona relazione' o non fornivano alcuna fonte tradizionale documentata. Abbiamo concluso che **trovare accuratamente ciò che esiste** è meglio che semplicemente aumentare i numeri."
          }
        ]
      },
      {
        "title": "Buono e cattivo sono predeterminati dal dizionario.",
        "blocks": [
          {
            "p": "Ogni simbolo porta la sua auspiciosità registrata accanto ad esso. **Buono {polarityPositive}**, **ambivalente {polarityAmbivalent}**, **cauteloso {polarityNegative}**, e **neutro {polarityNeutral}**."
          },
          {
            "p": "Il fatto che i significati positivi superino la metà non è perché siamo generosi, ma perché l'interpretazione tradizionale dei sogni è sempre stata così — simboli grandi e forti come maiali, draghi e fuoco sono stati generalmente visti come buoni presagi. Tuttavia, non tutti i sogni sono interpretati positivamente. Questo valore riflette la natura di ciascun simbolo, e l'atmosfera generale del sogno viene rivalutata raccogliendo i simboli trovati."
          }
        ]
      }
    ]
  },
  "guide/how-matching-works": {
    "eyebrow": "Base per il Servizio",
    "title": "Come trovare simboli nelle storie dei sogni.",
    "summary": "Spiega come i simboli vengono selezionati da frasi scritte liberamente e come filtriamo un simbolo che si trova semplicemente all'interno di una parola più lunga — 별 (\"stella\") dentro 특별할 (\"niente di speciale\").",
    "backLabel": "Base per l'Interpretazione",
    "sections": [
      {
        "title": "Troviamo simboli nel testo che fornisci.",
        "blocks": [
          {
            "p": "Quando scrivi liberamente la tua storia di sogni, cerchiamo simboli in quel testo dal dizionario. Non è necessario selezionare elementi o scrivere in un formato specifico. Scrivi semplicemente come faresti normalmente, come 'Ieri notte, un enorme pitone si è avvolto attorno a me.'"
          },
          {
            "p": "Quando cerchiamo, non consideriamo solo il nome del simbolo ma anche **{aliasTotal} nomi alternativi**. Queste sono parole che si riferiscono alla stessa cosa, come 구렁이 (gureongi) e 뱀 (baem), 떨어지다 (tteoreojida) e 빠지다 (ppajida). Sono incluse anche le variazioni con le desinenze, come 「떨어지는」 (tteoreojineun) · 「쫓겨서」 (jjotgyeoseo) · 「빠졌다」 (ppajyeotda)."
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
              "별 (\"stella\") nascosto dentro 특**별**할 (\"niente di speciale\")",
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
  "guide/one-symbol-many-meanings": {
    "eyebrow": "Fondamento del Servizio",
    "title": "Il motivo per cui lo stesso simbolo ha significati diversi",
    "summary": "Tradizionalmente, tenere un serpente e essere morsi da uno sono opposti. Questo discute la struttura in cui 215 simboli hanno 256 significati e come interpretare le situazioni.",
    "backLabel": "Fondamento dell'Interpretazione",
    "sections": [
      {
        "title": "Anche se i simboli sono gli stessi, situazioni diverse producono significati diversi",
        "blocks": [
          {
            "p": "Nell'interpretazione dei sogni tradizionale, un singolo simbolo non ha sempre un significato. Anche per lo stesso serpente, **tenerlo e essere morsi sono stati interpretati come completamente opposti.** Questo è anche annotato nel dizionario."
          },
          {
            "p": "Ecco perché i {symbolTotal} simboli hanno un totale di {meaningTotal} significati. Ogni significato include **il contesto in cui si applica**, e se quel contesto è visibile nel testo che fornisci, selezioniamo quel significato."
          }
        ]
      },
      {
        "title": "Come identificare la situazione",
        "blocks": [
          {
            "p": "Controlliamo se il testo che hai fornito contiene parole che indicano quella situazione. In 「뱀이 나를 물었다」 (baemi nareul mul-eotda), la situazione del morso è descritta, mentre in 「뱀을 품에 안았다」 (baemeul pume anatda), la situazione del tenere è descritta. Se non ci sono parole che indicano la situazione, la interpretiamo usando il **significato di base** di quel simbolo."
          },
          {
            "p": "Pertanto, quando scrivi il tuo sogno, se includi **non solo ciò che è apparso ma anche quali azioni sono state intraprese**, l'interpretazione sarà più accurata. 「돼지를 봤다」 (dwaeji-reul bwatda) comunica meno di 「돼지가 집으로 들어왔다」 (dwaeji-ga jib-euro deureowatda)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Più scrivi, meglio è, ma non è necessario scrivere lungo",
        "blocks": [
          {
            "p": "Due o tre frasi sono sufficienti. Scrivere più a lungo non significa trovare più simboli; piuttosto, se parole non correlate sono mescolate, potrebbero essere identificati simboli irrilevanti."
          }
        ]
      },
      {
        "title": "Ci sono {contextSplitSymbolTotal} simboli con significati divisi",
        "blocks": [
          {
            "p": "Tra i {symbolTotal} simboli nel dizionario, **{contextSplitSymbolTotal}** hanno significati che variano a seconda della situazione. Gli altri sono stati letti in un'unica direzione indipendentemente dalla situazione."
          },
          {
            "p": "Questi {contextSplitSymbolTotal} sono le aree più cautelose. Interpretare male la situazione può portare a comunicare buone notizie come cattive notizie, o viceversa. Pertanto, se la situazione non è chiara, non **scegliamo forzatamente un lato e invece andiamo con il significato di base** di quel simbolo — non vogliamo affermare qualcosa di incerto come se fosse certo."
          }
        ]
      },
      {
        "kind": "note",
        "title": "I sentimenti al risveglio sono considerati anch'essi",
        "blocks": [
          {
            "p": "I sentimenti e la ripetizione richiesti sotto il contenuto del sogno non vengono utilizzati per trovare simboli. Vengono consultati quando si decide quale modo interpretare in situazioni con significati divisi. Non è necessario scegliere; i risultati saranno comunque forniti."
          }
        ]
      },
      {
        "title": "L'atmosfera generale del sogno è conteggiata separatamente",
        "blocks": [
          {
            "p": "Se vengono trovati più simboli, raccogliamo se ciascuno di quei simboli è positivo o cauto per determinare il tono generale del sogno. Un sogno che include un simbolo buono e uno cauto non è semplicemente definito come un 'buon sogno.'"
          },
          {
            "p": "Puoi visualizzare in anteprima i vari simboli e i loro significati nel [dizionario dei simboli](/dream/symbols). È anche utile dare un'occhiata a ciò che è incluso prima di scrivere il tuo sogno."
          }
        ]
      }
    ]
  },
  "guide/good-and-bad": {
    "eyebrow": "Fondamento del Servizio",
    "title": "Criteri per distinguere i sogni auspiciosi e i sogni inauspiciosi",
    "summary": "I quattro valori assegnati a ciascun simbolo e la loro distribuzione, il motivo per cui quelli positivi superano la metà, e perché comunichiamo sogni misti come misti.",
    "backLabel": "Fondamento dell'Interpretazione",
    "sections": [
      {
        "title": "A ciascun simbolo è assegnato uno dei quattro valori",
        "blocks": [
          {
            "p": "Tra i {symbolTotal} simboli nel dizionario, ciascuno è categorizzato come uno dei seguenti."
          },
          {
            "ul": [
              "**{polarityPositive} simboli positivi** — quelli interpretati come eventi fortunati come ricchezze, celebrazioni e benefattori.",
              "**{polarityAmbivalent} simboli che variano a seconda della situazione** — come i serpenti, il cui significato può cambiare a seconda di ciò che è stato fatto. Questa categoria è la più cauta.",
              "**{polarityNegative} simboli inauspiciosi** — quelli visti come pettegolezzi, dispute o perdite.",
              "**{polarityNeutral} simboli neutri** — quelli che non sono né buoni né cattivi di per sé, come colori o numeri."
            ]
          }
        ]
      },
      {
        "title": "Il motivo per cui i simboli positivi superano la metà",
        "blocks": [
          {
            "p": "Questo non è perché siamo generosi nelle nostre valutazioni. **L'interpretazione tradizionale dei sogni (dream interpretation) è sempre stata così.** Simboli grandi e potenti come maiali, draghi, fuoco e acqua sono stati generalmente visti come buoni presagi, e il dizionario riflette quella tradizione."
          },
          {
            "p": "Pertanto, il fatto che 'sia apparso un simbolo buono' non significa 'accadranno cose buone.' Ciò che possiamo comunicare è limitato a come quel simbolo è stato interpretato nella tradizione."
          }
        ]
      },
      {
        "title": "Il tono di un sogno è raccolto dai suoi simboli",
        "blocks": [
          {
            "p": "Se vengono trovati più simboli, raccogliamo la loro rispettiva auspiciosità per determinare il tono generale del sogno. Se appaiono solo simboli positivi, è un buon sogno; se appaiono solo simboli inauspiciosi, è un sogno inauspicioso; se **misti, lo comunichiamo come misto.**"
          },
          {
            "p": "Non categorizziamo forzatamente simboli misti in un solo lato. In realtà, i sogni che le persone hanno sono spesso misti, e riassumerli come 'un buon sogno' non è né accurato né utile."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Parole da Non Usare",
        "blocks": [
          {
            "p": "Non fare affermazioni definitive su cosa accadrà, quando accadrà, o riguardo alla salute e alla ricchezza. Trasmettere i significati dei simboli tramandati attraverso la tradizione è diverso dal prevedere il futuro."
          }
        ]
      },
      {
        "title": "Quando Appare un Sogno Infausto",
        "blocks": [
          {
            "p": "Anche se appare un simbolo interpretato come avvertimento, non è necessariamente una cattiva notizia. Nella tradizione dell'interpretazione dei sogni, un sogno infausto è generalmente stato usato come **una dichiarazione che punta alla situazione attuale**. Se appare un simbolo che suggerisce conflitto, può essere interpretato come un promemoria per trattenere le parole."
          },
          {
            "p": "Per lo stesso motivo, questo servizio non vende talismani o amuleti. Ciò che viene venduto è solo [due modi per tenere i tuoi sogni](/guide/reports)."
          }
        ]
      }
    ]
  },
  "guide/conception-dreams": {
    "eyebrow": "Sogno di Concepimento",
    "title": "Come Interpretare i Sogni di Concepimento",
    "summary": "Rivela come determinare 27 simboli di sogni di concepimento, perché non tutti i sogni di maiale sono considerati sogni di concepimento, e il principio che non prevede gravidanza o genere.",
    "backLabel": "Base di Interpretazione",
    "sections": [
      {
        "title": "Prima, Chiarisci Questo",
        "blocks": [
          {
            "p": "**Dreams-Link non determina lo stato di gravidanza. Non indica nemmeno il genere del bambino.** Queste sono questioni che non possono essere conosciute attraverso i sogni, e non è qualcosa che possiamo fare."
          },
          {
            "p": "Ciò che possiamo dirti è limitato a questo — **il fatto che un simbolo tradizionalmente considerato un sogno di concepimento sia apparso in questo sogno.** Questo è tutto ciò che i nostri antenati interpretavano quel simbolo."
          }
        ]
      },
      {
        "title": "Ci Sono {conceptionSymbolTotal} Simboli Considerati Sogni di Concepimento",
        "blocks": [
          {
            "p": "Tra i {symbolTotal} simboli nel dizionario, **{conceptionSymbolTotal}** sono contrassegnati come sogni di concepimento. Ci sono molti animali come draghi, maiali e serpenti, così come frutti come pesche e castagne, e il sole e la luna sono inclusi."
          },
          {
            "p": "Tuttavia, **l'apparizione di quel simbolo non significa immediatamente che sia un sogno di concepimento.** È qui che questo servizio ha messo impegno."
          }
        ]
      },
      {
        "title": "Il Giudizio si Basa sul Significato Reale, Non sui Simboli",
        "blocks": [
          {
            "p": "Il maiale è un simbolo di sogni di concepimento e allo stesso tempo **rappresenta sogni di ricchezza.** Se viene considerato un sogno di concepimento solo perché è apparso il simbolo, allora tutti coloro che hanno sognato maiali avrebbero avuto un sogno di concepimento. In realtà, è stato per lo più interpretato come un sogno di ricchezza."
          },
          {
            "p": "Pertanto, guardiamo **il significato reale derivato da quel simbolo, non il simbolo stesso.** Lo contrassegniamo come sogno di concepimento solo quando il significato tende verso il concepimento nella situazione che hai fornito. Anche con lo stesso maiale, la lettura cambia se la frase differisce."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Se Menzioni la Gravidanza, Guardiamo Prima a Quella",
        "blocks": [
          {
            "p": "Se la tua scrittura include parole come gravidanza, sogno di concepimento, o parto, guardiamo prima al significato di quel simbolo che tende verso il concepimento. Anche con lo stesso sogno di maiale, il modo in cui i nostri antenati lo interpretavano variava a seconda della situazione attuale."
          }
        ]
      },
      {
        "title": "Il Motivo per Separare i Rapporti sui Sogni di Concepimento",
        "blocks": [
          {
            "p": "I sogni di concepimento servono a uno scopo diverso rispetto ad altri sogni. Vengono spesso discussi anche dopo la nascita del bambino e condivisi tra i membri della famiglia. Pertanto, piuttosto che vederlo semplicemente su uno schermo, abbiamo creato un **documento che può essere conservato.**"
          },
          {
            "p": "Ciò che è incluso è annotato in [due modi per tenere i tuoi sogni](/guide/reports). Puoi vedere tutte le interpretazioni senza acquistare ciò che vedi sullo schermo."
          }
        ]
      }
    ]
  },
  "guide/how-to-write": {
    "eyebrow": "Come Usare",
    "title": "Come Scrivere Efficacemente il Tuo Sogno",
    "summary": "Se scrivi ciò che hai visto e fatto, sarà ben interpretato. Spiega perché un singolo verbo può determinare il significato e perché chiediamo riguardo ai sentimenti e alla ripetizione.",
    "backLabel": "Base di Interpretazione",
    "sections": [
      {
        "title": "Per Favore Scrivi Ciò che Hai Visto e Fatto",
        "blocks": [
          {
            "p": "Non c'è un formato specifico. Un paio di frasi come parli normalmente è sufficiente. Tuttavia, ciò che funziona bene è determinato — **ciò che è visibile** e **ciò che è accaduto.**"
          },
          {
            "ul": [
              "Funziona bene — 「Un grande serpente mi ha avvolto」, 「Ho visto acqua chiara scorrere」, 「Sono caduto da un luogo alto」",
              "Non funziona — 「Avevo paura」, 「Mi sentivo strano」, 「Mi sembrava che qualcuno mi odiasse」"
            ]
          },
          {
            "p": "Se scrivi solo sentimenti, non ci saranno simboli da trovare. Questo perché l'interpretazione tradizionale dei sogni parla di [oggetti e azioni](/guide/categories), non di emozioni."
          }
        ]
      },
      {
        "title": "Scrivere Ciò che Hai Fatto Rende Più Preciso",
        "blocks": [
          {
            "p": "Anche con lo stesso simbolo, ci sono {contextSplitSymbolTotal} casi in cui i significati differiscono a seconda della situazione. Tradizionalmente, tenere un serpente e essere morsi sono stati interpretati come opposti."
          },
          {
            "p": "Pertanto, 「Ho visto un maiale」 è meno preciso di 「Un maiale è entrato in casa」, e 「C'era acqua」 è meno preciso di 「Ho bevuto acqua chiara.」 **Un singolo verbo determina il significato.**"
          }
        ]
      },
      {
        "title": "Perché Chiediamo Riguardo ai Sentimenti e alla Ripetizione",
        "blocks": [
          {
            "p": "Sotto il contenuto del sogno, c'è un posto per selezionare **il sentimento quando ti sei svegliato** e **se hai ripetuto lo stesso sogno.** Non è necessario scegliere entrambi affinché venga fornito un risultato."
          },
          {
            "p": "Questi valori non vengono utilizzati per trovare simboli. Vengono consultati quando si determina **quale significato scegliere** dallo stesso simbolo e come comunicare il risultato."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Nei Casi in Cui Menzioni la Gravidanza",
        "blocks": [
          {
            "p": "Se la tua scrittura include parole come gravidanza, sogno di concepimento, o parto, guardiamo prima al significato di quel simbolo che tende verso il concepimento. Anche con lo stesso sogno di maiale, il modo in cui i nostri antenati lo interpretavano variava a seconda della situazione attuale — [come interpretare i sogni di concepimento](/guide/conception-dreams)."
          }
        ]
      },
      {
        "title": "Non È Necessario Scrivere Testi Lunghi",
        "blocks": [
          {
            "p": "Un testo più lungo non significa che verranno trovati più simboli. Piuttosto, se parole irrilevanti sono mescolate in lunghezza, c'è una maggiore possibilità che parole non correlate vengano interpretate come simboli. **Per favore scrivi solo le scene che ricordi.**"
          },
          {
            "p": "Il testo che fornisci non viene salvato da nessuna parte. Il motivo per cui puoi scrivere liberamente è annotato in [il metodo di non archiviazione](/guide/no-storage)."
          }
        ]
      }
    ]
  },
  "guide/categories": {
    "eyebrow": "Base del Servizio",
    "title": "Criteri Divisi in Nove Categorie",
    "summary": "Da oggetti, animali e natura a colori e numeri, ci sono nove categorie e un motivo per non includere una categoria emotiva.",
    "backLabel": "Base di Interpretazione",
    "sections": [
      {
        "title": "I Simboli nei Sogni Sono Divisi in Nove Categorie",
        "blocks": [
          {
            "p": "I {symbolTotal} simboli sono raggruppati in nove categorie in base alle loro caratteristiche. I criteri per la divisione sono **come appaiono nei sogni** — sia come animali, oggetti, o azioni che abbiamo compiuto."
          },
          {
            "ul": [
              "**Oggetti {categoryThing}** — Articoli tangibili come denaro, specchi e coltelli. Questa è la categoria più ampia.",
              "**Animali {categoryAnimal}** — drago·maiale·serpente·mucca. Molti di questi sono visti come **a conception dream**.",
              "**Natura {categoryNature}** — cose che sono grandi e antiche come acqua·fuoco·sole·luna·montagna.",
              "**Azione {categoryAction}** — cose fatte nei sogni come essere inseguiti·cadere·volare.",
              "**Corpo {categoryBody}** — denti·capelli·sangue. Il significato varia a seconda di dove si trova sul corpo.",
              "**Persona {categoryPerson}** · **Luogo {categoryPlace}** · **Colore {categoryColor}** · **Numero {categoryNumber}**"
            ]
          }
        ]
      },
      {
        "title": "Perché non c'è una categoria emozioni?",
        "blocks": [
          {
            "p": "Categorie come 「ansia」·「desiderio」 non sono incluse. **Questo perché la tradizionale interpretazione dei sogni non affronta le emozioni.** Le vecchie interpretazioni si concentravano su ciò che era visibile e su ciò che accadeva, piuttosto che sui sentimenti del sognatore."
          },
          {
            "p": "abbiamo cercato di creare una categoria emozioni, ma i risultati erano termini come 「perdita di affetto」·「stabilità emotiva」. Questi non sono **simboli** dei sogni ma vocaboli della psicologia moderna. Questo è un tipo di servizio diverso e non è ciò che questo dizionario si propone di fare."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Quindi quando scrivi",
        "blocks": [
          {
            "p": "Per favore scrivi **cosa hai visto e fatto** piuttosto che sentimenti; porterà risultati molto migliori. Tuttavia, ti chiederemo dei tuoi sentimenti al risveglio separatamente — anche lo stesso simbolo può avere significati diversi a seconda della situazione."
          }
        ]
      },
      {
        "title": "Colori e numeri non stanno da soli",
        "blocks": [
          {
            "p": "Colore {categoryColor} e numero {categoryNumber} non hanno significati intrinsecamente buoni o cattivi. Proprio come un serpente bianco e un serpente nero sono diversi, i loro significati cambiano a seconda di **ciò con cui sono associati**. Pertanto, queste due categorie sono considerate in congiunzione con altri simboli."
          },
          {
            "p": "Un elenco completo per categoria è disponibile nel [dizionario dei simboli](/dream/symbols). Aprire un simbolo mostrerà il suo significato tradizionale, categoria e simboli correlati."
          }
        ]
      }
    ]
  },
  "guide/not-found": {
    "eyebrow": "Come usare",
    "title": "Quando un simbolo non può essere trovato",
    "summary": "Se non riesci a trovarlo, ti informeremo che non è stato trovato. discuteremo perché non può essere trovato, cosa ti mostreremo invece su quella schermata e come il dizionario viene ampliato.",
    "backLabel": "Base di interpretazione",
    "sections": [
      {
        "title": "Quando non trovato, ti informeremo che non è stato trovato",
        "blocks": [
          {
            "p": "Se non riusciamo a trovare simboli nel testo che hai fornito, ti **informeremo che non è stato trovato.** Non ci forzeremo ad associarlo a qualcosa di simile o a creare frasi plausibili per riempire lo spazio."
          },
          {
            "p": "Questo è ciò di cui questo servizio è più cauto. Nel momento in cui riempiamo un vuoto, infrangiamo la promessa di trasmettere solo interpretazioni tramandate."
          }
        ]
      },
      {
        "title": "Perché non può essere trovato?",
        "blocks": [
          {
            "p": "Di solito, è uno dei seguenti."
          },
          {
            "ul": [
              "**È un simbolo non ancora nel dizionario.** Attualmente, ci sono {symbolTotal} simboli elencati, ma ce ne sono molti altri che potrebbero apparire nei sogni.",
              "**Hai scritto solo emozioni.** Se ci sono solo emozioni come 「avevo paura」·「mi sentivo strano」, non ci sono simboli che possono essere abbinati. L'interpretazione tradizionale dei sogni parla di **oggetti e azioni visibili** piuttosto che di emozioni.",
              "**È troppo breve.** È meglio scrivere in frasi piuttosto che in una o due parole."
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Quando provi a scrivere di nuovo",
        "blocks": [
          {
            "p": "Per favore includi **cosa hai visto e cosa hai fatto** nel sogno. Dire 「ero ansioso」 è meno efficace che dire 「sono caduto da un luogo alto」, e dire 「mi è piaciuto」 è meno efficace che dire 「ho visto acqua chiara scorrere」."
          }
        ]
      },
      {
        "title": "non lasciamo uno schermo vuoto",
        "blocks": [
          {
            "p": "Quando qualcosa non può essere trovato, mostreremo anche **{popularSymbolCount} simboli frequentemente cercati** su quella schermata. Questi sono selezionati dal dizionario in base alla loro rappresentatività, il che può aiutarti a ricordare se uno di essi è apparso nel tuo sogno."
          },
          {
            "p": "Se desideri sfogliare l'intero elenco, ci sono {symbolTotal} simboli organizzati per categoria nel [dizionario dei simboli](/dream/symbols). Ogni simbolo include il suo significato tradizionale e simboli correlati."
          }
        ]
      },
      {
        "title": "Come sarà ampliato il dizionario in futuro?",
        "blocks": [
          {
            "p": "Piuttosto che aumentare i numeri, ci concentriamo su **identificare accuratamente ciò che è già presente**. Abbiamo incluso {aliasTotal} nomi alternativi per lo stesso simbolo, e abbiamo reso possibile riconoscere parole che cambiano forma con suffissi."
          },
          {
            "p": "Quando espandiamo i simboli stessi, includeremo solo quelli che possono **fornire una fonte tradizionale documentata.** Aumentare semplicemente i numeri senza prove diventa creazione piuttosto che un dizionario — abbiamo documentato i tentativi e i risultati in [perché non usiamo modelli](/guide/no-ai)."
          }
        ]
      }
    ]
  },
  "guide/no-ai": {
    "eyebrow": "Base del servizio",
    "title": "Motivi per non utilizzare intelligenza artificiale nell'interpretazione dei sogni",
    "summary": "Non c'è codice che chiama un modello nel processo di creazione dell'interpretazione. abbiamo abbandonato il tentativo di espandere il dizionario utilizzando un modello basato su risultati empirici, e quindi ciò che è stato guadagnato e ciò che è stato rinunciato.",
    "backLabel": "Base di interpretazione",
    "sections": [
      {
        "title": "L'intelligenza artificiale non è utilizzata nell'interpretazione dei sogni",
        "blocks": [
          {
            "p": "Molti attuali servizi di interpretazione dei sogni mostrano testi generati inserendo storie di sogni in modelli generativi. Dreams-Link non fa così. **Non c'è codice che chiama un modello nel processo di creazione dell'interpretazione.**"
          },
          {
            "p": "Ciò che facciamo è semplice. troviamo simboli nel testo che fornisci che sono nel dizionario e selezioniamo e mostriamo i significati che il dizionario ha scritto per quei simboli. Non c'è spazio per frasi che non sono nel dizionario."
          }
        ]
      },
      {
        "title": "Perché è stata presa questa decisione?",
        "blocks": [
          {
            "p": "**I modelli non dicono di non sapere ciò che non sanno.** Quando si chiede di simboli senza una fonte tradizionale documentata, fabbricano origini plausibili. E se sia fabbricato o meno è qualcosa che il lettore non può discernere. Se si inserisce creazione al posto della trasmissione della tradizione, il presupposto del servizio crolla."
          },
          {
            "p": "abbiamo effettivamente provato a far creare simboli a un modello per espandere il dizionario. Su sessantasei esempi che valevano la pena considerare, **cinquantacinque non potevano fornire alcuna fonte tradizionale documentata**, e alcuni includevano cose che non potevano esistere nell'interpretazione tradizionale dei sogni, come metropolitane e autostrade. Pertanto, **nessuno è stato incluso.**"
          }
        ]
      },
      {
        "kind": "note",
        "title": "Lo stesso valeva anche per modelli più grandi",
        "blocks": [
          {
            "p": "Quando abbiamo provato lo stesso compito con un modello migliore, solo uno su diciannove è passato, e quello era solo una ripetizione delle stesse parole nella posizione di prova. I modelli più grandi parlano solo **più plausibilmente** di ciò che non sanno."
          }
        ]
      },
      {
        "title": "I vantaggi di non utilizzare un modello",
        "blocks": [
          {
            "ul": [
              "**Se è lo stesso sogno, la stessa interpretazione uscirà.** La formulazione non cambia ogni volta.",
              "**È veloce.** Non c'è attesa per la risposta di un modello, quindi i risultati vengono consegnati immediatamente.",
              "**Il sogno che hai fornito non esce.** Non c'è bisogno di inviarlo a server esterni — per favore leggi insieme a [il metodo di non archiviazione](/guide/no-storage).",
              "**Può essere offerto gratuitamente.** I sogni sono qualcosa che sogniamo ogni giorno, quindi ci sono molte richieste. Se un modello viene chiamato per ogni richiesta, i costi devono essere coperti da qualche parte."
            ]
          }
        ]
      },
      {
        "title": "Cosa viene sacrificato invece",
        "blocks": [
          {
            "p": "Non possiamo interpretare ciò che non è nel dizionario. Se fosse stato utilizzato un modello, qualsiasi cosa tu avessi scritto avrebbe prodotto una risposta plausibile. Abbiamo scelto il lato che **dice che non poteva essere trovato quando non poteva essere trovato**. Ciò che mostriamo in quel momento è scritto in [quando un simbolo non può essere trovato](/guide/not-found)."
          }
        ]
      }
    ]
  },
  "guide/reports": {
    "eyebrow": "Prodotti a pagamento",
    "title": "Due modi per conservare i tuoi sogni",
    "summary": "L'interpretazione stessa non comporta un costo. Spieghiamo quali sono le due cose che vendiamo, cosa contengono e perché non sono interpretazioni migliori.",
    "backLabel": "Base dell'interpretazione",
    "sections": [
      {
        "title": "L'interpretazione stessa non comporta un costo",
        "blocks": [
          {
            "p": "Annotare i tuoi sogni e vedere quali simboli sono presenti **non costa denaro e non richiede iscrizione.** Poiché le persone sognano ogni giorno, abbiamo deciso che questo spazio dovrebbe essere gratuito."
          },
          {
            "p": "**Le due cose che vendiamo non sono interpretazioni migliori.** Sono **due modi per mantenere la stessa interpretazione.** Il contenuto che vedi sullo schermo non cambia dopo il pagamento."
          }
        ]
      },
      {
        "title": "Dream Card — Un'immagine",
        "blocks": [
          {
            "p": "Forniamo i simboli trovati nel tuo sogno e i loro significati in **un'immagine.** È un file immagine, non un PDF, quindi puoi salvarlo così com'è o inviarlo ad altri."
          },
          {
            "p": "Questo è per coloro che si sentono dispiaciuti quando un bel sogno scompare dopo aver chiuso lo schermo. Poiché non salviamo i sogni, se vuoi conservarlo, questo è l'unico modo per farlo."
          }
        ]
      },
      {
        "title": "Rapporto sul sogno di concezione — Documento di {conceptionPages} pagine",
        "blocks": [
          {
            "p": "Per i sogni che mostrano simboli interpretati come sogni di concezione, creiamo un **documento di {conceptionPages} pagine.** Include quali simboli sono apparsi, come quei simboli sono stati tradizionalmente interpretati e un luogo per registrarlo."
          },
          {
            "p": "Poiché un sogno di concezione viene spesso discusso e condiviso tra i membri della famiglia anche dopo la nascita del bambino, abbiamo creato un documento separato per sogni che sono troppo preziosi per essere visualizzati solo sullo schermo."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Parole non dette qui",
        "blocks": [
          {
            "p": "Non determiniamo lo stato di gravidanza o il sesso del bambino. Tali affermazioni non compaiono nel documento. Per dettagli, vedere [come interpretare un sogno di concezione](/guide/conception-dreams)."
          }
        ]
      },
      {
        "title": "Perché non c'è più documento",
        "blocks": [
          {
            "p": "I servizi per i fratelli forniscono rapporti di nove pagine. Il motore saju estrae molti valori da una sola data di nascita. L'interpretazione dei sogni non funziona in questo modo."
          },
          {
            "p": "I simboli elencati nel dizionario sono in totale {symbolTotal}, e la maggior parte di essi ha **un significato ciascuno.** Per estendere ciò in nove pagine, dovremmo scrivere significati tradizionali che non si trovano in alcun materiale, e questo è esattamente ciò che questo servizio ha deciso di non fare. Pertanto, il documento è lungo solo quanto i materiali onestamente consentono, e non di più."
          }
        ]
      },
      {
        "title": "Prezzi e stato delle vendite",
        "blocks": [
          {
            "p": "I prezzi sono elencati nella [guida ai prezzi](/pricing). Il motivo per cui questo documento non elenca gli importi è intenzionale — per prevenire situazioni in cui il documento di guida rimane con importi obsoleti quando i prezzi cambiano. Lo schermo e i termini leggono tutti lo stesso importo da un unico posto."
          },
          {
            "p": "I documenti che acquisti possono **essere ricevuti di nuovo con lo stesso ordine.** Tuttavia, poiché non conserviamo file, una volta che lasci lo schermo dei risultati, non puoi ricrearli — ti preghiamo di conservare i file che ricevi."
          }
        ]
      }
    ]
  },
  "guide/no-storage": {
    "eyebrow": "Informazioni personali",
    "title": "Il metodo di non memorizzare i sogni che annoti",
    "summary": "Spieghiamo cosa significa tecnicamente che le storie dei sogni non sono registrate da nessuna parte e cosa contiene il link ai risultati.",
    "backLabel": "Base dell'interpretazione",
    "sections": [
      {
        "title": "Nessuna iscrizione richiesta",
        "blocks": [
          {
            "p": "Dreams-Link non crea account. Non raccogliamo nomi, email o numeri di telefono. Le uniche cose che raccogliamo sono i sogni che annoti, come ti sei sentito al risveglio e se sogni lo stesso sogno ripetutamente, e ciò non rimane dopo che l'interpretazione è completata."
          },
          {
            "p": "Le storie dei sogni sono i valori più privati che questo servizio riceve. Ecco perché le regole sono più severe del necessario — non abbiamo nemmeno creato una tabella per annotare ciò che invii."
          }
        ]
      },
      {
        "title": "Cosa contiene il link ai risultati",
        "blocks": [
          {
            "p": "Quando il calcolo è completo, l'indirizzo apparirà così."
          },
          {
            "p": "**/ko/dream/result#eyJ0IjoiSSBkcmVhbXQgb2YgYSBjYXJwLi4u**"
          },
          {
            "p": "Ciò che segue **#** è il valore di input. Questa parte è chiamata **frammento**, che è **una parte che il browser non invia al server**. Questo è un comportamento web standard e non una regola che abbiamo creato — è stato originariamente progettato per indicare una posizione all'interno di un documento, quindi il server non ha bisogno di vederlo."
          },
          {
            "p": "Qui, questa proprietà è particolarmente importante — il sogno che hai fornito **non rimane nei registri di accesso.**"
          },
          {
            "p": "In altre parole, quando apri il link ai risultati, il browser legge quel valore per richiedere un calcolo, e il nostro server riceve il valore per il calcolo, restituisce la risposta e poi lo dimentica."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Si prega di fare attenzione quando si inviano link ad altri",
        "blocks": [
          {
            "p": "Il fatto che non sia memorizzato sul server non significa che il link sia sicuro. Il link ai risultati contiene il sogno che hai fornito, quindi la persona che riceve quel link può leggere quel contenuto."
          }
        ]
      },
      {
        "title": "Perché il calcolo viene eseguito sul server ma non memorizzato?",
        "blocks": [
          {
            "p": "Il calcolo stesso viene eseguito sul server. Trovare simboli richiede l'intero dizionario, e quel dizionario è troppo grande per essere inviato al browser. Mantenere il dizionario sul server significa anche che quando un errore viene corretto, viene riflesso per tutti contemporaneamente. Tuttavia, **dopo aver elaborato la richiesta, quel valore non viene utilizzato da nessuna parte.** Non c'è codice per inserirlo nel database."
          },
          {
            "p": "Viene mantenuto un record minimo necessario per il funzionamento — un contatore per prevenire che la stessa persona invii troppe richieste in un breve periodo. Questo non include il contenuto del sogno, e l'IP di accesso non viene nemmeno conservato. Solo un valore, hashato con la data, viene conteggiato, e quel valore cambia quando cambia il giorno."
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
              "**Non c'è diario dei sogni.** Non puoi recuperare l'interpretazione della settimana scorsa, e devi avere il link per vederla di nuovo. Questo è fatto intenzionalmente — per creare un diario, gli scritti più privati devono essere continuamente memorizzati.",
              "**Calcoliamo lo stesso valore ogni volta.** Non c'è cache. Invece, il dizionario è fisso e le regole di corrispondenza sono deterministiche, quindi lo stesso testo produrrà sempre lo stesso simbolo — le regole sostituiscono ciò che la cache avrebbe garantito.",
              "**Aggiornare riporterà di nuovo la porta pubblicitaria.** Questo perché non c'è modo di lasciare registri di visualizzazione."
            ]
          }
        ]
      },
      {
        "title": "In caso di acquisto",
        "blocks": [
          {
            "p": "Se acquisti un rapporto, verrà mantenuto un record della transazione in quel momento. Il pagamento ha un periodo di conservazione definito dalla legge, e senza una cronologia degli ordini, i rimborsi non possono essere elaborati. Tuttavia, anche in quel caso, **il testo del sogno utilizzato per la lettura non è allegato all'ordine** — viene ricevuto di nuovo e scritto in quel momento quando si crea il documento dopo la conferma del pagamento."
          },
          {
            "p": "Per dettagli, si prega di fare riferimento alla [politica sulla privacy](/privacy)."
          }
        ]
      }
    ]
  },
  "notice": {
    "eyebrow": "Avviso",
    "title": "Annunci",
    "summary": "Questo è un luogo per informarti sui cambiamenti che potrebbero influenzare il tuo utilizzo.",
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
              "**Pagamento e Rimborso** — Se il documento non è stato creato o l'importo del pagamento differisce dall'ordine, verrà fornito un rimborso completo. Le condizioni sono nella [politica di rimborso](/refund-policy).",
              "**Informazioni Personali** — Accettiamo richieste di accesso, correzione e cancellazione. La politica di elaborazione è nella [politica sulla privacy](/privacy).",
              "**Segnalazione di Errori di Interpretazione** — Se i simboli sono stati trovati in modo errato o l'interpretazione sembra strana, ti preghiamo di farcelo sapere. Se includi quando hai scritto quella storia di sogno, possiamo esaminarla di nuovo con lo stesso testo."
            ]
          }
        ]
      },
      {
        "title": "Informazioni Aziendali",
        "blocks": [
          {
            "ul": [
              "**Nome Azienda** — {companyName}",
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
            "p": "Non è necessario riscrivere il sogno fornito nell'email di richiesta. Non salviamo gli input, quindi non possiamo esaminarli di nuovo, e il numero d'ordine è sufficiente per la verifica. Si prega di annotarlo solo se è assolutamente necessario, come per segnalare errori di interpretazione."
          }
        ]
      }
    ]
  },
  "guide/what-we-do-not-do": {
    "eyebrow": "Principi del Servizio",
    "title": "Cosa Non Facciamo",
    "summary": "Non forniamo numeri della lotteria, diari dei sogni, determinazioni di gravidanza o amuleti. Spieghiamo perché abbiamo scelto di non fare ciascuna di queste cose.",
    "backLabel": "Base di Interpretazione",
    "sections": [
      {
        "title": "Non forniamo numeri della lotteria",
        "blocks": [
          {
            "p": "Sebbene sia comunemente trattato nei servizi di interpretazione dei sogni, non lo facciamo. **Non c'è alcuna base nell'interpretazione tradizionale dei sogni per estrarre numeri dai sogni.** Anche se ci sono registrazioni di interpretazione dei sogni di maiali come ricchezza, non esiste alcuna regola in alcuna letteratura che produca sei numeri da questo."
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
            "p": "Sebbene sarebbe comodo avere una funzione per raccogliere sogni passati, richiederebbe di **memorizzare continuamente i sogni che fornisci.** Le narrazioni dei sogni sono l'aspetto più privato di ciò che questo servizio riceve, e abbiamo deciso di non scambiare ciò."
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
            "p": "Indicheremo solo che è apparso un simbolo interpretato come un a conception dream (sogno di concezione). Se sei incinta o se il bambino è una figlia o un figlio **non è qualcosa che può essere conosciuto attraverso i sogni.** Tali affermazioni non appaiono sullo schermo o nei documenti a pagamento."
          }
        ]
      },
      {
        "title": "Non vendiamo amuleti o charm",
        "blocks": [
          {
            "p": "Un simbolo letto come inauspicioso non è un motivo per acquistare nulla. Un sogno inauspicioso è stato tradizionalmente usato per **indicare una situazione da esaminare ora**, non per pagare per evitare qualcosa."
          },
          {
            "p": "Non creiamo ansia per vendere qualcosa basato su di esso. Le uniche cose che vendiamo sono le due menzionate sopra, e nessuna fornisce un'interpretazione aggiuntiva ma piuttosto **modi per conservare lo stesso contenuto.**"
          }
        ]
      },
      {
        "kind": "note",
        "title": "Non facciamo affermazioni definitive sul futuro",
        "blocks": [
          {
            "p": "Non facciamo affermazioni definitive su se qualcosa accadrà, quando accadrà, o riguardo a salute, ricchezza o durata della vita. Trasmettere i significati dei simboli tradizionali e prevedere il futuro sono questioni diverse."
          }
        ]
      },
      {
        "title": "Non fabbrichiamo interpretazioni che non esistono",
        "blocks": [
          {
            "p": "Per simboli che non esistono nel dizionario, **indicheremo che non siamo riusciti a trovarli.** Non mettiamo insieme quelli simili o riempiamo lo spazio con frasi plausibili. Pertanto, questo servizio non [usa intelligenza artificiale per l'interpretazione dei sogni](/guide/no-ai). Il modello non dice che non sa ciò che non sa."
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
  "intro": "I cambiamenti ai tuoi termini di utilizzo — prezzi, politiche — sono pubblicati qui prima che entrino in vigore. Miglioramenti interni come lo schermo che diventa più veloce non sono pubblicati qui: ciò che appare qui è ciò che devi sapere.",
  "empty": {
    "title": "Nessun avviso pubblicato",
    "body": "Se ci sono cambiamenti di cui informarti, saranno pubblicati qui."
  },
  "effective": "Efficace dal {date}",
  "pager": {
    "label": "Pagina di Notifica",
    "newer": "← Più Recenti",
    "older": "Notifiche Precedenti →"
  },
  "items": {
    "2026-08-06-no-storage": {
      "title": "Il sogno che hai fornito non è memorizzato.",
      "body": [
        "Le storie dei sogni sono i valori più privati che questo servizio riceve. Pertanto, non sono registrate in alcun tavolo. L'input è trasportato solo nell'indirizzo del risultato per il calcolo, e una volta chiusa la finestra, scompare.",
        "Abbiamo deciso di non creare una funzione che raccoglie i sogni e mostra il flusso (diario dei sogni). È una funzione utile, ma per farlo, i testi più privati devono essere continuamente memorizzati.",
        "Quando invii il link del risultato ad altri, contiene il contenuto del sogno. Ti preghiamo di fare attenzione quando condividi."
      ]
    },
    "2026-08-06-engine-version": {
      "title": "I risultati includono il dizionario dei simboli e i criteri di calcolo.",
      "body": [
        "La base per l'interpretazione è il dizionario dei simboli di interpretazione dei sogni tradizionale. I risultati e i documenti includeranno la versione di quel dizionario (ad es., 1.2.0) e la versione delle regole di corrispondenza (ad esempio dream-1.0.0). Lo stesso sogno produrrà sempre lo stesso simbolo basato sugli stessi criteri.",
        "Se aggiungiamo simboli al dizionario o cambiamo i significati in un modo che può alterare i risultati, questo fatto è presentato qui. Questo perché i risultati che hai ricevuto in precedenza potrebbero cambiare.",
        "Non creiamo significati tradizionali che non sono nel dizionario. Se non vengono trovati simboli, affermiamo semplicemente che non ne sono stati trovati e concludiamo."
      ]
    },
    "2026-08-06-conception": {
      "title": "Ti informiamo solo riguardo a un a conception dream e non facciamo giudizi.",
      "body": [
        "Se nel sogno appaiono simboli tradizionalmente considerati come un a conception dream, ti informeremo di questo fatto. Tuttavia, non determiniamo lo stato di gravidanza o il sesso del bambino — tali affermazioni non hanno fondamento, e i giudizi medici sono responsabilità delle istituzioni mediche.",
        "La menzione di figli e figlie nelle narrazioni tradizionali è un riflesso delle usanze che sono state tramandate, e non significa che stiamo prevedendo correttamente."
      ]
    }
  }
} satisfies NoticeCopy;
