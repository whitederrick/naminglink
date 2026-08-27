import type { DocPage, NoticeCopy } from "./types";
import type { DocKey } from "./ko";

/** Polski — `scripts/translate-doc-content.ts`가 만든다. 손으로 고치지 말 것. */
export const PL_DOCS = {
  "about": {
    "eyebrow": "Wprowadzenie",
    "title": "Wprowadzenie do Dreams-Link",
    "summary": "To usługa, która interpretuje sny przy użyciu tradycyjnego słownika symboli do interpretacji snów. Wyjaśnia, co jest używane jako podstawa, a co nie jest wspomniane.",
    "backLabel": "Powrót do Strony Głównej",
    "sections": [
      {
        "title": "Co robimy?",
        "blocks": [
          {
            "p": "Dreams-Link znajduje **symbole używane w tradycyjnej interpretacji snów** w snach, które zapisujesz, i pokazuje ich znaczenia. Ponieważ sny są czymś, co doświadczamy codziennie, interpretacje wyświetlane na ekranie są **darmowe i nie wymagają członkostwa.**"
          },
          {
            "p": "The only things sold for a fee are **two forms of preservation** — an image (dream card) containing a good dream and a PDF that captures the background when a symbol traditionally considered a a conception dream appears."
          }
        ]
      },
      {
        "title": "Na jakiej podstawie dokonujemy interpretacji?",
        "blocks": [
          {
            "p": "Podstawą interpretacji jest **słownik {symbolTotal} symboli**. Znajdujemy symbole w tekście snu i pokazujemy tylko znaczenia zapisane w słowniku dla tych symboli. Jeśli symbol ma wiele znaczeń, wybieramy na podstawie kontekstu — na przykład, trzymanie węża i bycie ukąszonym są tradycyjnie uważane za przeciwieństwa."
          },
          {
            "p": "Wyszukiwanie odbywa się **tylko według ustalonych zasad**. Jeśli to ten sam sen, te same symbole zawsze się pojawią, a interpretacja nie zmieni się z wczoraj na dzisiaj."
          }
        ]
      },
      {
        "title": "Czego nie mówimy?",
        "blocks": [
          {
            "p": "**Nie wymyślamy tradycyjnych znaczeń, które nie znajdują się w słowniku.** Jeśli nie znaleziono symboli, po prostu stwierdzamy, że żadne nie zostały znalezione i kończymy. Wypełnianie tej przestrzeni wiarygodnymi słowami jest tym, na co ta usługa jest najbardziej ostrożna."
          },
          {
            "p": "**A a conception dream is merely a sign, not a judgment.** We only inform you that a symbol traditionally considered a a conception dream appeared in the dream. We do not predict pregnancy or the child's gender, and there is no basis for such claims."
          },
          {
            "p": "Nie **formułujemy ostatecznych stwierdzeń na temat zdrowia, bogactwa ani kariery.** To odniesienie z perspektywy tradycyjnej interpretacji snów i nie jest poradą medyczną, finansową ani prawną."
          }
        ]
      },
      {
        "title": "Nie przechowujemy snów, które zapisujesz.",
        "blocks": [
          {
            "p": "Historie snów są najbardziej prywatną częścią tego, co ta usługa otrzymuje. Dlatego **nie przechowujemy ich.** To, co wprowadzasz, jest przenoszone tylko w URL i używane do odczytu; nie jest rejestrowane w żadnej tabeli na naszych serwerach."
          },
          {
            "p": "Zdecydowaliśmy **nie tworzyć funkcji do zbierania snów jak dziennik snów.** To cenny element, ale wymagałby przechowywania najbardziej prywatnych zapisów."
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Metoda jest opisana bardziej szczegółowo w [dokumencie przewodnim](/guide). Informacje o firmie i dane kontaktowe można znaleźć w [skontaktuj się z nami](/contact)."
          }
        ]
      }
    ]
  },
  "guide": {
    "eyebrow": "Podstawa obliczeń",
    "title": "Jaka jest podstawa obliczeń?",
    "summary": "Ujawniamy wszystkie zasady, które stosuje Dreams-Link. Możesz sprawdzić, które symbole są znalezione, co jest zapisane w słowniku — skąd pochodzą interpretacje wyświetlane na ekranie.",
    "backLabel": "Powrót do Strony Głównej",
    "sections": [
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Wszystkie liczby zapisane tutaj są **odczytywane bezpośrednio z słownika symboli i zasad dopasowania.** Ponieważ nie przepisujemy ręcznie tekstu, jeśli słownik zostanie rozszerzony lub zasady zmienione, liczby w tych dokumentach również się zmienią."
          }
        ]
      }
    ]
  },
  "guide/symbol-dictionary": {
    "eyebrow": "Podstawa usługi",
    "title": "Jaka jest podstawa słownika symboli?",
    "summary": "Wyjaśnia, skąd pochodzą interpretacje. Kryteria podziału {symbolTotal} symboli na dziewięć kategorii, powód, dla którego tylko {cultureNoteTotal} mogą być uzasadnione, oraz dlaczego nie wypełniamy luk.",
    "backLabel": "Podstawa interpretacji",
    "sections": [
      {
        "title": "Pokazujemy tylko to, co jest zapisane w słowniku.",
        "blocks": [
          {
            "p": "Interpretacje z Dreams-Link pochodzą z **gotowego słownika symboli**. Znajdujemy symbole w tekście, który dostarczasz, i pokazujemy znaczenia zapisane w słowniku dla tych symboli. Nie tworzymy słów, które nie znajdują się w słowniku."
          },
          {
            "p": "Obecnie słownik zawiera **{symbolTotal} symboli**, a te symbole mają łącznie **{meaningTotal} znaczeń**. Większość symboli ma tylko jedno znaczenie, podczas gdy niektóre mają wiele w zależności od kontekstu."
          }
        ]
      },
      {
        "title": "Podzielone na dziewięć kategorii.",
        "blocks": [
          {
            "p": "Podzieliliśmy to, co pojawia się w snach, na dziewięć kategorii na podstawie ich cech. Liczby w nawiasach to aktualne ilości."
          },
          {
            "ul": [
              "**Obiekty**({categoryThing}) · **Zwierzęta**({categoryAnimal}) · **Natura**({categoryNature}) — trzy największe kategorie. Tradycyjna interpretacja snów głównie omawia widoczne obiekty, zwierzęta oraz elementy nieba i wody.",
              "**Akcje**({categoryAction}) · **Ciało**({categoryBody}) — co zostało zrobione, jak bycie ściganym lub upadkiem, oraz gdzie na ciele, jak twarz czy włosy.",
              "**Ludzie**({categoryPerson}) · **Miejsca**({categoryPlace}) · **Kolory**({categoryColor}) · **Liczby**({categoryNumber})"
            ]
          },
          {
            "p": "Aby je zobaczyć według kategorii, możesz zobaczyć pełną listę w [słowniku symboli](/dream/symbols)."
          }
        ]
      },
      {
        "title": "Tylko {cultureNoteTotal} mogą być uzasadnione.",
        "blocks": [
          {
            "p": "Wśród symboli, **{cultureNoteTotal}** mają powody interpretacji zapisane obok nich. Na przykład, powód rozróżnienia między górnymi a dolnymi zębami w śnie o utracie zębów. Pozostałe symbole mają puste miejsca."
          },
          {
            "p": "**Nie wypełniliśmy pustych miejsc.** Dodanie wiarygodnych źródeł sprawiłoby, że dokument byłby grubszy, ale w tym momencie ten słownik nie przekazywałby tradycji, lecz ją fałszował. Uczciwiej jest rozróżniać to, co można i czego nie można uzasadnić."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Powody, dla których nie rozszerzamy słownika arbitralnie.",
        "blocks": [
          {
            "p": "Rzeczywiście próbowaliśmy rozszerzyć symbole do setek, ale się poddaliśmy. Automatycznie generowane wpisy albo powtarzały te same frazy, jak 'romans → dobry związek', albo nie dostarczały żadnego udokumentowanego źródła tradycyjnego. Doszliśmy do wniosku, że **dokładne znajdowanie tego, co istnieje** jest lepsze niż po prostu zwiększanie liczb."
          }
        ]
      },
      {
        "title": "Dobre i złe są z góry określone przez słownik.",
        "blocks": [
          {
            "p": "Każdy symbol niesie ze sobą swoją pomyślność zapisaną obok niego. **Dobre {polarityPositive}**, **ambiwalentne {polarityAmbivalent}**, **ostrzegawcze {polarityNegative}**, i **neutralne {polarityNeutral}**."
          },
          {
            "p": "Fakt, że dobre znaczenia przewyższają połowę, nie wynika z naszej hojności, lecz z tego, że tradycyjna interpretacja snów zawsze taka była — duże i silne symbole, takie jak świnie, smoki i ogień, były generalnie postrzegane jako dobre omen. Jednak nie wszystkie sny są interpretowane pozytywnie. Ta wartość odzwierciedla naturę każdego symbolu, a ogólna atmosfera snu jest ponownie oceniana przez zbieranie znalezionych symboli."
          }
        ]
      }
    ]
  },
  "guide/how-matching-works": {
    "eyebrow": "Podstawa usługi",
    "title": "Jak znaleźć symbole w historiach snów.",
    "summary": "Wyjaśnia, jak symbole są wybierane z swobodnie napisanych zdań i jak filtrujemy symbol, który przypadkowo znajduje się wewnątrz dłuższego słowa — 별 (\"gwiazda\") wewnątrz 특별할 (\"nic specjalnego\").",
    "backLabel": "Podstawa interpretacji",
    "sections": [
      {
        "title": "Znajdujemy symbole w tekście, który dostarczasz.",
        "blocks": [
          {
            "p": "Gdy swobodnie piszesz swoją historię snu, szukamy symboli w tym tekście z słownika. Nie musisz wybierać elementów ani pisać w określonym formacie. Po prostu pisz tak, jak zwykle, na przykład 'Wczoraj w nocy ogromny pyton owinął się wokół mnie.'"
          },
          {
            "p": "Podczas wyszukiwania zwracamy uwagę nie tylko na nazwę symbolu, ale także na **{aliasTotal} alternatywne nazwy**. Są to słowa, które odnoszą się do tego samego, jak 구렁이 (gureongi) i 뱀 (baem), 떨어지다 (tteoreojida) i 빠지다 (ppajida). Warianty z końcówkami, takie jak 「떨어지는」 (tteoreojineun) · 「쫓겨서」 (jjotgyeoseo) · 「빠졌다」 (ppajyeotda), są również uwzględniane."
          }
        ]
      },
      {
        "title": "Znaki, które przypadkowo pojawiają się w słowie, nie są brane pod uwagę",
        "blocks": [
          {
            "p": "To jest najtrudniejszy aspekt w języku koreańskim. Wśród symboli znajdują się **{singleCharSymbolTotal} symbole jednoczłonowe** takie jak **별** (byeol) · **말** (mal) · **배** (bae) · **손** (son), które często pojawiają się w innych słowach."
          },
          {
            "ul": [
              "별 (\"gwiazda\") ukryta w 특**별**할 (\"nic specjalnego\")",
              "게 (\"krab\") ukryta w 누군가에**게** (\"przez kogoś\")",
              "말 (\"koń\") w **말**했다 (\"powiedział\"), a 배 (\"łódź, gruszka\") w **배**가 고팠다 (\"byliśmy głodni\")"
            ]
          },
          {
            "p": "Liczenie tych jako symboli prowadzi do nieistotnych interpretacji. Dlatego badamy otaczające znaki — jeśli **przed nim znajduje się znak koreański**, traktujemy go jako część dłuższego słowa i nie liczymy go, a także sprawdzamy **czy to, co następuje, jest partykułą lub końcówką czasownika**, pozwalając 「소가」 (soga) przejść, a filtrując 「소리」 (sori)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Tak to działało",
        "blocks": [
          {
            "p": "Before implementing this rule, when testing with twelve actual sentences, **all twelve** contained irrelevant symbols. One sentence with no significant content was even marked as a a conception dream."
          },
          {
            "p": "Teraz pozostaje jeden — 배 (bae) w 「배가 고팠다」 (bae ga gopatda). Ponieważ brzmi tak samo, ale ma inne znaczenie, nie można go odfiltrować tylko na podstawie otaczających znaków."
          },
          {
            "p": "Nie znalezienie czegoś to uczciwa sprawa. Jednak znalezienie czegoś nieistotnego oznacza ustanowienie tradycji związanej z tym słowem, której nigdy nie miało."
          }
        ]
      },
      {
        "title": "Te same znaki zawsze dają te same wyniki",
        "blocks": [
          {
            "p": "Nie ma miejsca na przypadek w zasadach dopasowywania. Ponieważ słownik jest stały, a zasady ustalone, jeśli ponownie wprowadzisz to samo zdanie, **ten sam symbol pojawi się w tej samej kolejności**. Interpretacja, którą widzisz dzisiaj, nie różni się od tej, którą zobaczysz jutro."
          },
          {
            "p": "Ta jakość jest również obietnicą, którą złożyliśmy sobie. Interpretacje, które zmieniają się za każdym razem, są zabawne, ale brakuje im fundamentu. To łączy się z historią [dlaczego nie używamy modeli](/guide/no-ai)."
          }
        ]
      }
    ]
  },
  "guide/one-symbol-many-meanings": {
    "eyebrow": "Podstawa usługi",
    "title": "Powód, dla którego ten sam symbol ma różne znaczenia",
    "summary": "Tradycyjnie, trzymanie węża i bycie przez niego ukąszonym to przeciwieństwa. To omawia strukturę, w której {symbolTotal} symboli ma {meaningTotal} znaczeń i jak interpretować sytuacje.",
    "backLabel": "Podstawa interpretacji",
    "sections": [
      {
        "title": "Nawet jeśli symbole są takie same, różne sytuacje dają różne znaczenia",
        "blocks": [
          {
            "p": "W tradycyjnej interpretacji snów, pojedynczy symbol nie zawsze ma jedno znaczenie. Nawet dla tego samego węża, **trzymanie go i bycie ukąszonym były interpretowane jako całkowite przeciwieństwa.** To jest również zauważone w słowniku."
          },
          {
            "p": "Dlatego {symbolTotal} symbole mają łącznie {meaningTotal} znaczeń. Każde znaczenie obejmuje **kontekst, w którym ma zastosowanie**, a jeśli ten kontekst jest widoczny w tekście, który dostarczasz, wybieramy to znaczenie."
          }
        ]
      },
      {
        "title": "Jak zidentyfikować sytuację",
        "blocks": [
          {
            "p": "Sprawdzamy, czy tekst, który dostarczyłeś, zawiera słowa wskazujące na tę sytuację. W 「뱀이 나를 물었다」 (baemi nareul mul-eotda) opisana jest sytuacja ukąszenia, podczas gdy w 「뱀을 품에 안았다」 (baemeul pume anatda) opisana jest sytuacja trzymania. Jeśli nie ma słów wskazujących na sytuację, interpretujemy to używając **podstawowego znaczenia** tego symbolu."
          },
          {
            "p": "Dlatego, pisząc swój sen, jeśli uwzględnisz **nie tylko to, co się pojawiło, ale także jakie działania zostały podjęte**, interpretacja będzie dokładniejsza. 「돼지를 봤다」 (dwaeji-reul bwatda) przekazuje mniej niż 「돼지가 집으로 들어왔다」 (dwaeji-ga jib-euro deureowatda)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Im więcej piszesz, tym lepiej, ale nie ma potrzeby pisać długo",
        "blocks": [
          {
            "p": "Dwa lub trzy zdania są wystarczające. Dłuższe pisanie nie oznacza znalezienia większej liczby symboli; raczej, jeśli niepowiązane słowa są wymieszane, mogą być zidentyfikowane nieistotne symbole."
          }
        ]
      },
      {
        "title": "Jest {contextSplitSymbolTotal} symboli z podzielonymi znaczeniami",
        "blocks": [
          {
            "p": "Wśród {symbolTotal} symboli w słowniku, **{contextSplitSymbolTotal}** mają znaczenia, które różnią się w zależności od sytuacji. Pozostałe były odczytywane w jednym kierunku, niezależnie od sytuacji."
          },
          {
            "p": "Te {contextSplitSymbolTotal} to najbardziej ostrożne obszary. Błędne odczytanie sytuacji może prowadzić do przekazywania dobrych wiadomości jako złych, lub odwrotnie. Dlatego, jeśli sytuacja jest niejasna, nie **wymuszamy wyboru jednej strony, a zamiast tego idziemy z podstawowym znaczeniem** tego symbolu — nie chcemy stwierdzać czegoś niepewnego, jakby było pewne."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Uczucia po przebudzeniu są również brane pod uwagę",
        "blocks": [
          {
            "p": "Uczucia i powtórzenia pytane poniżej treści snu nie są używane do znajdowania symboli. Są one brane pod uwagę przy podejmowaniu decyzji, w którą stronę interpretować w sytuacjach z podzielonymi znaczeniami. Nie musisz wybierać; wyniki i tak będą dostarczone."
          }
        ]
      },
      {
        "title": "Ogólna atmosfera snu jest liczona osobno",
        "blocks": [
          {
            "p": "Jeśli znaleziono wiele symboli, zbieramy, czy każdy z tych symboli jest pozytywny, czy ostrożny, aby określić ogólny ton snu. Sen, który zawiera jeden dobry symbol i jeden ostrożny symbol, nie jest po prostu określany jako 'dobry sen'."
          },
          {
            "p": "Możesz zobaczyć różne symbole i ich znaczenia w [słowniku symboli](/dream/symbols). Dobrze jest również rzucić okiem na to, co jest zawarte przed napisaniem swojego snu."
          }
        ]
      }
    ]
  },
  "guide/good-and-bad": {
    "eyebrow": "Podstawa usługi",
    "title": "Criteria for distinguishing auspicious dreams and inauspicious dreams",
    "summary": "Cztery wartości przypisane do każdego symbolu i ich rozkład, powód, dla którego pozytywne przewyższają połowę, oraz dlaczego komunikujemy mieszane sny jako mieszane.",
    "backLabel": "Podstawa interpretacji",
    "sections": [
      {
        "title": "Każdemu symbolowi przypisana jest jedna z czterech wartości",
        "blocks": [
          {
            "p": "Wśród {symbolTotal} symboli w słowniku, każdy jest klasyfikowany jako jeden z następujących."
          },
          {
            "ul": [
              "**{polarityPositive} pozytywne symbole** — te interpretowane jako szczęśliwe wydarzenia, takie jak bogactwo, uroczystości i dobroczyńcy.",
              "**{polarityAmbivalent} symbole, które różnią się w zależności od sytuacji** — jak węże, gdzie znaczenie może się zmieniać w zależności od tego, co zostało zrobione. Ta kategoria jest najbardziej ostrożna.",
              "**{polarityNegative} niekorzystne symbole** — te postrzegane jako plotki, spory lub straty.",
              "**{polarityNeutral} neutralne symbole** — te, które same w sobie nie są ani dobre, ani złe, jak kolory czy liczby."
            ]
          }
        ]
      },
      {
        "title": "Powód, dla którego pozytywne symbole przewyższają połowę",
        "blocks": [
          {
            "p": "This is not because we are generous in our assessments. **Traditional dream interpretation (dream interpretation) has always been this way.** Large and powerful symbols like pigs, dragons, fire, and water have generally been viewed as good omens, and the dictionary reflects that tradition."
          },
          {
            "p": "Zatem fakt, że 'pojawił się dobry symbol', nie oznacza, że 'zdarzą się dobre rzeczy.' To, co możemy przekazać, jest ograniczone do tego, jak ten symbol był interpretowany w tradycji."
          }
        ]
      },
      {
        "title": "Ton snu zbierany jest z jego symboli",
        "blocks": [
          {
            "p": "Jeśli znaleziono wiele symboli, zbieramy ich odpowiednią pomyślność, aby określić ogólny ton snu. Jeśli pojawią się tylko pozytywne symbole, to jest to dobry sen; jeśli pojawią się tylko niekorzystne symbole, to jest to niekorzystny sen; jeśli **są mieszane, komunikujemy to jako mieszane.**"
          },
          {
            "p": "Nie przymuszamy do kategoryzowania mieszanych symboli w jedną stronę. W rzeczywistości sny, które mają ludzie, są często mieszane, a podsumowanie ich jako 'dobry sen' nie jest ani dokładne, ani pomocne."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Słowa, których nie należy używać",
        "blocks": [
          {
            "p": "Nie należy formułować definitywnych stwierdzeń na temat tego, co się wydarzy, kiedy to się wydarzy, ani dotyczących zdrowia i bogactwa. Przekazywanie znaczeń symboli przekazywanych przez tradycję różni się od przewidywania przyszłości."
          }
        ]
      },
      {
        "title": "Kiedy pojawia się zły sen",
        "blocks": [
          {
            "p": "Nawet jeśli pojawi się symbol interpretowany jako ostrzeżenie, niekoniecznie oznacza to złe wieści. W tradycyjnej interpretacji snów zły sen był zazwyczaj używany jako **stwierdzenie wskazujące na obecną sytuację**. Jeśli pojawi się symbol sugerujący konflikt, można go odczytać jako przypomnienie, aby powstrzymać się od słów."
          },
          {
            "p": "Z tego samego powodu, ta usługa nie sprzedaje talizmanów ani amuletów. Sprzedawane są tylko [dwa sposoby na zachowanie swoich snów](/guide/reports)."
          }
        ]
      }
    ]
  },
  "guide/conception-dreams": {
    "eyebrow": "Sen o poczęciu",
    "title": "Jak interpretować sny o poczęciu",
    "summary": "Wyjaśnia, jak określić {conceptionSymbolTotal} symboli snów o poczęciu, dlaczego nie wszystkie sny o świniach są uważane za sny o poczęciu oraz zasady, które nie przewidują ciąży ani płci.",
    "backLabel": "Podstawa interpretacji",
    "sections": [
      {
        "title": "Najpierw wyjaśnij to",
        "blocks": [
          {
            "p": "**Dreams-Link nie określa statusu ciąży. Nie wskazuje również na płeć dziecka.** To są sprawy, których nie można poznać przez sny, i nie jest to coś, co możemy zrobić."
          },
          {
            "p": "To, co możemy Ci powiedzieć, jest ograniczone do tego — **faktu, że symbol tradycyjnie uważany za sen o poczęciu pojawił się w tym śnie.** To wszystko, co nasi przodkowie interpretowali w odniesieniu do tego symbolu."
          }
        ]
      },
      {
        "title": "Jest {conceptionSymbolTotal} symboli uważanych za sny o poczęciu",
        "blocks": [
          {
            "p": "Spośród {symbolTotal} symboli w słowniku, **{conceptionSymbolTotal}** oznaczono jako sny o poczęciu. Wiele zwierząt, takich jak smoki, świnie i węże, a także owoce, takie jak brzoskwinie i kasztany, oraz słońce i księżyc są włączone."
          },
          {
            "p": "Jednak **pojawienie się tego symbolu nie oznacza od razu, że jest to sen o poczęciu.** To jest miejsce, w którym ta usługa włożyła wysiłek."
          }
        ]
      },
      {
        "title": "Ocena opiera się na rzeczywistym znaczeniu, a nie symbolach",
        "blocks": [
          {
            "p": "Świnia jest symbolem snów o poczęciu i jednocześnie **reprezentuje sny o bogactwie.** Jeśli uznamy to za sen o poczęciu tylko dlatego, że symbol się pojawił, to każdy, kto śnił o świniach, miałby sen o poczęciu. W rzeczywistości był on głównie interpretowany jako sen o bogactwie."
          },
          {
            "p": "Dlatego patrzymy na **rzeczywiste znaczenie wywodzące się z tego symbolu, a nie na sam symbol.** Oznaczamy go jako sen o poczęciu tylko wtedy, gdy w danej sytuacji wybrane jest znaczenie skłaniające się ku poczęciu. Nawet w przypadku tej samej świni, odczyt zmienia się, jeśli zdanie się różni."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Jeśli wspominasz o ciąży, najpierw to analizujemy",
        "blocks": [
          {
            "p": "Jeśli w Twoim opisie pojawiają się słowa takie jak ciąża, sen o poczęciu lub poród, najpierw patrzymy na znaczenie tego symbolu skłaniającego się ku poczęciu. Nawet w przypadku tego samego snu o świni, sposób, w jaki nasi przodkowie go interpretowali, różnił się w zależności od obecnej sytuacji."
          }
        ]
      },
      {
        "title": "Powód oddzielania raportów o snach o poczęciu",
        "blocks": [
          {
            "p": "Sny o poczęciu mają inny cel niż inne sny. Często są omawiane nawet po narodzinach dziecka i dzielone wśród członków rodziny. Dlatego zamiast tylko oglądać je na ekranie, stworzyliśmy osobny **dokument, który można zachować.**"
          },
          {
            "p": "Co jest zawarte, jest zapisane w [dwóch sposobach na zachowanie swoich snów](/guide/reports). Możesz zobaczyć wszystkie interpretacje bez zakupu tego, co widzisz na ekranie."
          }
        ]
      }
    ]
  },
  "guide/how-to-write": {
    "eyebrow": "Jak używać",
    "title": "Jak skutecznie opisać swój sen",
    "summary": "Jeśli zapiszesz to, co widziałeś i robiłeś, będzie to dobrze interpretowane. Wyjaśnia, dlaczego pojedynczy czasownik może określić znaczenie i dlaczego pytamy o uczucia i powtórzenia.",
    "backLabel": "Podstawa interpretacji",
    "sections": [
      {
        "title": "Proszę opisać, co widziałeś i robiłeś",
        "blocks": [
          {
            "p": "Nie ma konkretnego formatu. Kilka zdań, jak zwykle mówisz, jest wystarczające. Jednak to, co działa dobrze, jest określone — **co jest widoczne** i **co się wydarzyło.**"
          },
          {
            "ul": [
              "Działa dobrze — 「Duży wąż owinął się wokół mnie」, 「Widziałem czystą wodę płynącą」, 「Spadłem z wysokiego miejsca」",
              "Nie działa — 「Bałem się」, 「Czułem się dziwnie」, 「Czułem, że ktoś mnie nienawidzi」"
            ]
          },
          {
            "p": "Jeśli zapiszesz tylko uczucia, nie będzie symboli do znalezienia. Dzieje się tak, ponieważ tradycyjna interpretacja snów mówi o [przedmiotach i działaniach](/guide/categories), a nie o emocjach."
          }
        ]
      },
      {
        "title": "Pisanie o tym, co zrobiłeś, czyni to bardziej dokładnym",
        "blocks": [
          {
            "p": "Nawet w przypadku tego samego symbolu, istnieje {contextSplitSymbolTotal} przypadków, w których znaczenia różnią się w zależności od sytuacji. Tradycyjnie trzymanie węża i bycie ukąszonym interpretowano jako przeciwieństwa."
          },
          {
            "p": "Dlatego 「Widziałem świnię」 jest mniej dokładne niż 「Świnia weszła do domu」, a 「Była woda」 jest mniej dokładne niż 「Piłem czystą wodę.」 **Pojedynczy czasownik określa znaczenie.**"
          }
        ]
      },
      {
        "title": "Dlaczego pytamy o uczucia i powtórzenia",
        "blocks": [
          {
            "p": "Poniżej treści snu znajduje się miejsce do wyboru **uczucia, gdy się obudziłeś** oraz **czy powtórzyłeś ten sam sen.** Nie musisz wybierać obu, aby uzyskać wynik."
          },
          {
            "p": "Te wartości nie są używane do znajdowania symboli. Są one odniesieniem przy określaniu **które znaczenie wybrać** z tego samego symbolu i jak przekazać wynik."
          }
        ]
      },
      {
        "kind": "note",
        "title": "W przypadkach, gdy wspominasz o ciąży",
        "blocks": [
          {
            "p": "Jeśli w Twoim opisie pojawiają się słowa takie jak ciąża, sen o poczęciu lub poród, najpierw patrzymy na znaczenie tego symbolu skłaniającego się ku poczęciu. Nawet w przypadku tego samego snu o świni, sposób, w jaki nasi przodkowie go interpretowali, różnił się w zależności od obecnej sytuacji — [jak interpretować sny o poczęciu](/guide/conception-dreams)."
          }
        ]
      },
      {
        "title": "Nie ma potrzeby pisania długich tekstów",
        "blocks": [
          {
            "p": "Dłuższy tekst nie oznacza, że znajdzie się więcej symboli. Raczej, jeśli nieistotne słowa są wymieszane w długości, istnieje większa szansa, że niepowiązane słowa będą interpretowane jako symbole. **Proszę pisać tylko o scenach, które pamiętasz.**"
          },
          {
            "p": "Tekst, który podajesz, nie jest nigdzie zapisywany. Powód, dla którego możesz pisać swobodnie, jest zapisany w [metodzie nieprzechowywania](/guide/no-storage)."
          }
        ]
      }
    ]
  },
  "guide/categories": {
    "eyebrow": "Podstawa usługi",
    "title": "Kryteria podzielone na dziewięć kategorii",
    "summary": "Od przedmiotów, zwierząt i natury po kolory i liczby, istnieje dziewięć kategorii i powód, dla którego nie uwzględniono kategorii emocjonalnej.",
    "backLabel": "Podstawa interpretacji",
    "sections": [
      {
        "title": "Symbole w snach są podzielone na dziewięć kategorii",
        "blocks": [
          {
            "p": "{symbolTotal} symbole są grupowane w dziewięć kategorii na podstawie ich cech. Kryterium podziału to **jak pojawiają się w snach** — czy jako zwierzęta, przedmioty, czy działania, które podjęliśmy."
          },
          {
            "ul": [
              "**Przedmioty {categoryThing}** — Namacalne przedmioty, takie jak pieniądze, lustra i noże. To jest najgrubsza kategoria.",
              "**Animals {categoryAnimal}** — dragon·pig·snake·cow. Many of these are seen as conception dreams.",
              "**Natura {categoryNature}** — rzeczy duże i starożytne jak woda·ogień·słońce·księżyc·góra.",
              "**Akcja {categoryAction}** — rzeczy robione w snach jak bycie ściganym·upadek·latanie.",
              "**Ciało {categoryBody}** — zęby·włosy·krew. Znaczenie różni się w zależności od miejsca na ciele.",
              "**Osoba {categoryPerson}** · **Miejsce {categoryPlace}** · **Kolor {categoryColor}** · **Liczba {categoryNumber}**"
            ]
          }
        ]
      },
      {
        "title": "Dlaczego nie ma kategorii emocji?",
        "blocks": [
          {
            "p": "Kategorie takie jak 「lęk」·「tęsknota」 nie są uwzględnione. **Dzieje się tak, ponieważ tradycyjna interpretacja snów nie zajmuje się emocjami.** Stare interpretacje koncentrowały się na tym, co było widoczne i co się wydarzyło, a nie na uczuciach śniącego."
          },
          {
            "p": "próbowaliśmy stworzyć kategorię emocji, ale wynikiem były terminy takie jak 「utrata uczucia」·「stabilność emocjonalna」. To nie są **symbole** z snów, ale słownictwo z nowoczesnej psychologii. To inny rodzaj usługi i nie to jest celem tego słownika."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Więc kiedy piszesz",
        "blocks": [
          {
            "p": "Proszę zapisać **co widziałeś i co robiłeś** zamiast uczuć; przyniesie to znacznie lepsze wyniki. Jednak zapytamy o twoje uczucia po przebudzeniu osobno — nawet ten sam symbol może mieć różne znaczenia w zależności od sytuacji."
          }
        ]
      },
      {
        "title": "Kolory i liczby nie stoją same",
        "blocks": [
          {
            "p": "Kolor {categoryColor} i liczba {categoryNumber} nie mają wrodzonych dobrych ani złych znaczeń. Tak jak biały wąż i czarny wąż są różne, ich znaczenia zmieniają się w zależności od **tego, z czym są związane**. Dlatego te dwie kategorie są rozpatrywane w połączeniu z innymi symbolami."
          },
          {
            "p": "Pełna lista według kategorii jest dostępna w [słowniku symboli](/dream/symbols). Otworzenie symbolu pokaże jego tradycyjne znaczenie, kategorię i powiązane symbole."
          }
        ]
      }
    ]
  },
  "guide/not-found": {
    "eyebrow": "Jak używać",
    "title": "Kiedy symbol nie może być znaleziony",
    "summary": "Jeśli nie możesz go znaleźć, poinformujemy cię, że nie został znaleziony. omówimy, dlaczego nie może być znaleziony, co pokażemy ci zamiast tego na tym ekranie i jak słownik jest rozszerzany.",
    "backLabel": "Podstawa interpretacji",
    "sections": [
      {
        "title": "Kiedy nie znaleziono, poinformujemy cię, że nie został znaleziony",
        "blocks": [
          {
            "p": "Jeśli nie możemy znaleźć żadnych symboli w tekście, który podałeś, **poinformujemy cię, że nie został znaleziony.** nie będziemy na siłę łączyć go z czymś podobnym ani tworzyć wiarygodnych zdań, aby wypełnić przestrzeń."
          },
          {
            "p": "To jest to, na co ta usługa jest najbardziej ostrożna. W momencie, gdy wypełniamy lukę, łamiemy obietnicę, że przekazujemy tylko przekazywane interpretacje."
          }
        ]
      },
      {
        "title": "Dlaczego nie można go znaleźć?",
        "blocks": [
          {
            "p": "Zwykle jest to jedna z następujących rzeczy."
          },
          {
            "ul": [
              "**To symbol, który jeszcze nie znajduje się w słowniku.** Obecnie jest {symbolTotal} symboli wymienionych, ale jest wiele więcej, które mogą pojawić się w snach.",
              "**Napisałeś tylko uczucia.** Jeśli są tylko emocje takie jak 「bałem się」·「czułem się dziwnie」, nie ma symboli, które można by dopasować. Tradycyjna interpretacja snów mówi o **widocznych obiektach i działaniach** zamiast emocji.",
              "**Jest zbyt krótki.** Lepiej jest pisać w zdaniach niż w jednym lub dwóch słowach."
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Kiedy spróbujesz napisać ponownie",
        "blocks": [
          {
            "p": "Proszę uwzględnić **co widziałeś i co robiłeś** w śnie. Mówienie 「byłem zaniepokojony」 jest mniej skuteczne niż mówienie 「spadłem z wysokiego miejsca」, a mówienie 「podobało mi się」 jest mniej skuteczne niż mówienie 「widziałem czystą wodę płynącą」."
          }
        ]
      },
      {
        "title": "nie zostawiamy pustego ekranu",
        "blocks": [
          {
            "p": "Kiedy coś nie może być znalezione, pokażemy również **{popularSymbolCount} często wyszukiwanych symboli** na tym ekranie. Są one wybierane z słownika na podstawie ich reprezentatywności, co może pomóc ci przypomnieć, czy któryś z nich pojawił się w twoim śnie."
          },
          {
            "p": "Jeśli chcesz przeglądać całą listę, jest {symbolTotal} symboli zorganizowanych według kategorii w [słowniku symboli](/dream/symbols). Każdy symbol zawiera jego tradycyjne znaczenie i powiązane symbole."
          }
        ]
      },
      {
        "title": "Jak słownik będzie rozszerzany w przyszłości?",
        "blocks": [
          {
            "p": "Zamiast zwiększać liczby, koncentrujemy się na **dokładnym identyfikowaniu tego, co już istnieje**. uwzględniliśmy {aliasTotal} alternatywnych nazw dla tego samego symbolu i umożliwiliśmy rozpoznawanie słów, które zmieniają formę z sufiksami."
          },
          {
            "p": "Podczas rozszerzania samych symboli, uwzględnimy tylko te, które mogą **zapewnić udokumentowane tradycyjne źródło.** Proste zwiększanie liczby bez dowodów staje się tworzeniem, a nie słownikiem — udokumentowaliśmy próby i wyniki w [dlaczego nie używamy modeli](/guide/no-ai)."
          }
        ]
      }
    ]
  },
  "guide/no-ai": {
    "eyebrow": "Podstawa usługi",
    "title": "Powody, dla których nie używamy sztucznej inteligencji w interpretacji snów",
    "summary": "Nie ma kodu, który wywołuje model w procesie tworzenia interpretacji. porzuciliśmy próbę rozszerzenia słownika przy użyciu modelu opartego na wynikach empirycznych, a tym samym to, co zyskano i co porzucono.",
    "backLabel": "Podstawa interpretacji",
    "sections": [
      {
        "title": "Sztuczna inteligencja nie jest używana w interpretacji snów",
        "blocks": [
          {
            "p": "Wiele obecnych usług interpretacji snów pokazuje teksty generowane przez wstawianie opowieści o snach do modeli generatywnych. Dreams-Link tego nie robi. **Nie ma kodu, który wywołuje model w procesie tworzenia interpretacji.**"
          },
          {
            "p": "To, co robimy, jest proste. znajdujemy symbole w tekście, który dostarczasz, które znajdują się w słowniku i wybieramy oraz pokazujemy znaczenia, które słownik napisał dla tych symboli. Nie ma miejsca na zdania, które nie znajdują się w słowniku."
          }
        ]
      },
      {
        "title": "Dlaczego podjęto tę decyzję?",
        "blocks": [
          {
            "p": "**Modele nie mówią, że nie wiedzą, czego nie wiedzą.** Kiedy pytane o symbole bez udokumentowanego tradycyjnego źródła, fałszują wiarygodne pochodzenie. A czy jest to fałszywe, czy nie, to coś, czego czytelnik nie może dostrzec. Jeśli w miejsce przekazywania tradycji wstawia się tworzenie, premisa usługi się załamuje."
          },
          {
            "p": "w rzeczywistości próbowaliśmy, aby model stworzył symbole w celu rozszerzenia słownika. Spośród sześćdziesięciu sześciu przykładów, które były warte rozważenia, **pięćdziesiąt pięć nie mogło dostarczyć żadnego udokumentowanego tradycyjnego źródła**, a niektóre zawierały rzeczy, które nie mogły istnieć w tradycyjnej interpretacji snów, jak metro i autostrady. Dlatego **żaden nie został uwzględniony.**"
          }
        ]
      },
      {
        "kind": "note",
        "title": "To samo dotyczyło nawet większych modeli",
        "blocks": [
          {
            "p": "Kiedy próbowaliśmy tego samego zadania z lepszym modelem, tylko jeden z dziewiętnastu przeszedł, a ten jeden był tylko powtórzeniem tych samych słów w pozycji dowodowej. Większe modele mówią tylko **bardziej wiarygodnie** o tym, czego nie wiedzą."
          }
        ]
      },
      {
        "title": "Korzyści z nieużywania modelu",
        "blocks": [
          {
            "ul": [
              "**Jeśli to ten sam sen, ta sama interpretacja wyjdzie.** Sformułowanie nie zmienia się za każdym razem.",
              "**Jest szybko.** Nie ma czekania na odpowiedź modelu, więc wyniki są dostarczane natychmiast.",
              "**Sen, który podałeś, nie wychodzi na zewnątrz.** Nie ma potrzeby wysyłania go na zewnętrzne serwery firmy — proszę przeczytać [metodę nieprzechowywania](/guide/no-storage).",
              "**Można to oferować za darmo.** Sny to coś, co śnimy każdego dnia, więc jest wiele zapytań. Jeśli model jest wywoływany dla każdego zapytania, koszty muszą być gdzieś pokryte."
            ]
          }
        ]
      },
      {
        "title": "Co jest oddawane w zamian",
        "blocks": [
          {
            "p": "Nie możemy interpretować tego, co nie znajduje się w słowniku. Gdyby użyto modelu, wszystko, co napisałeś, mogłoby dać wiarygodną odpowiedź. Wybraliśmy stronę, która **mówi, że nie można tego znaleźć, gdy nie można tego znaleźć**. To, co pokazujemy w tym czasie, jest zapisane w [gdy symbol nie może być znaleziony](/guide/not-found)."
          }
        ]
      }
    ]
  },
  "guide/reports": {
    "eyebrow": "Płatne produkty",
    "title": "Dwa sposoby na zachowanie swoich snów",
    "summary": "Interpretacja sama w sobie nie wiąże się z opłatą. Wyjaśniamy, czym są dwie rzeczy, które sprzedajemy, co zawierają i dlaczego nie są lepszymi interpretacjami.",
    "backLabel": "Podstawa interpretacji",
    "sections": [
      {
        "title": "Interpretacja sama w sobie nie wiąże się z opłatą",
        "blocks": [
          {
            "p": "Zapisanie swoich snów i zobaczenie, jakie symbole są obecne **nie kosztuje pieniędzy i nie wymaga członkostwa.** Ponieważ ludzie śnią każdego dnia, zdecydowaliśmy, że ta przestrzeń powinna być darmowa."
          },
          {
            "p": "**Dwie rzeczy, które sprzedajemy, nie są lepszymi interpretacjami.** Są **dwoma sposobami na zachowanie tej samej interpretacji.** Treść, którą widzisz na ekranie, nie zmienia się po dokonaniu płatności."
          }
        ]
      },
      {
        "title": "Karta snu — Jeden obraz",
        "blocks": [
          {
            "p": "Dostarczamy symbole znalezione w twoim śnie oraz ich znaczenia w **jednym obrazie.** To plik graficzny, a nie PDF, więc możesz go zapisać w tej formie lub wysłać innym."
          },
          {
            "p": "To dla tych, którzy czują żal, gdy dobry sen znika po zamknięciu ekranu. Ponieważ nie zapisujemy snów, jeśli chcesz go zachować, to jest jedyny sposób, aby to zrobić."
          }
        ]
      },
      {
        "title": "Raport o śnie poczęcia — Dokument {conceptionPages} stron",
        "blocks": [
          {
            "p": "Dla snów, które pokazują symbole interpretowane jako sny poczęcia, tworzymy **{conceptionPages}-stronicowy dokument.** Zawiera on, jakie symbole się pojawiły, jak te symbole były tradycyjnie interpretowane oraz miejsce na zapisanie tego."
          },
          {
            "p": "Ponieważ sny poczęcia często są omawiane i dzielone wśród członków rodziny nawet po narodzinach dziecka, stworzyliśmy osobny dokument dla snów, które są zbyt cenne, aby tylko je oglądać na ekranie."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Słowa, które również nie zostały tu powiedziane",
        "blocks": [
          {
            "p": "Nie określamy statusu ciąży ani płci dziecka. Takie stwierdzenia nie pojawiają się w dokumencie. Szczegóły znajdziesz w [jak interpretować sen poczęcia](/guide/conception-dreams)."
          }
        ]
      },
      {
        "title": "Dlaczego nie ma już dokumentu",
        "blocks": [
          {
            "p": "Usługi rodzeństwa dostarczają dziewięcio-stronicowe raporty. Silnik saju wyciąga wiele wartości z jednego daty urodzenia. Interpretacja snów nie działa w ten sposób."
          },
          {
            "p": "Symbole wymienione w słowniku łącznie wynoszą {symbolTotal}, a większość z nich ma **jedno znaczenie.** Aby rozciągnąć to na dziewięć stron, musielibyśmy napisać tradycyjne znaczenia, które nie znajdują się w żadnym materiale, a to dokładnie to, czego ta usługa postanowiła nie robić. Dlatego dokument jest tylko tak długi, jak materiały uczciwie pozwalają, a nie dłużej."
          }
        ]
      },
      {
        "title": "Ceny i status sprzedaży",
        "blocks": [
          {
            "p": "Ceny są wymienione w [przewodniku po cenach](/pricing). Powód, dla którego ten dokument nie wymienia kwot, jest zamierzony — aby zapobiec sytuacjom, w których dokument z wytycznymi pozostaje z przestarzałymi kwotami, gdy ceny się zmieniają. Ekran i warunki odczytują tę samą kwotę z jednego miejsca."
          },
          {
            "p": "Dokumenty, które kupujesz, mogą **być odebrane ponownie przy tym samym zamówieniu.** Jednakże, ponieważ nie przechowujemy plików, po opuszczeniu ekranu wyników nie możesz ich odtworzyć — proszę zachować pliki, które otrzymujesz."
          }
        ]
      }
    ]
  },
  "guide/no-storage": {
    "eyebrow": "Informacje osobiste",
    "title": "Metoda nieprzechowywania snów, które zapisujesz",
    "summary": "Wyjaśniamy, co technicznie oznacza, że historie snów nie są nigdzie rejestrowane, oraz co zawiera link do wyników.",
    "backLabel": "Podstawa interpretacji",
    "sections": [
      {
        "title": "Nie wymaga członkostwa",
        "blocks": [
          {
            "p": "Dreams-Link nie tworzy kont. Nie zbieramy imion, adresów e-mail ani numerów telefonów. Jedynymi rzeczami, które zbieramy, są sny, które zapisujesz, jak się czułeś po przebudzeniu oraz czy śnisz ten sam sen wielokrotnie, a to nie pozostaje po zakończeniu interpretacji."
          },
          {
            "p": "Historie snów są najbardziej prywatnymi wartościami, które ta usługa otrzymuje. Dlatego zasady są surowsze niż konieczne — nawet nie stworzyliśmy tabeli do zapisania tego, co przesyłasz."
          }
        ]
      },
      {
        "title": "Co zawiera link do wyników",
        "blocks": [
          {
            "p": "Gdy obliczenia są zakończone, adres będzie wyglądał tak."
          },
          {
            "p": "**/ko/dream/result#eyJ0IjoiSSBkcmVhbXQgb2YgYSBjYXJwLi4u**"
          },
          {
            "p": "To, co następuje po **#**, to wartość wejściowa. Ta część nazywana jest **fragmentem**, który jest **częścią, której przeglądarka nie wysyła do serwera**. To standardowe zachowanie w sieci, a nie zasada, którą stworzyliśmy — pierwotnie zaprojektowano to, aby wskazać lokalizację w dokumencie, więc serwer nie ma potrzeby jej widzieć."
          },
          {
            "p": "Tutaj ta właściwość jest szczególnie ważna — dostarczony przez ciebie sen **nie pozostaje w rejestrach dostępu.**"
          },
          {
            "p": "Innymi słowy, gdy otwierasz link do wyników, przeglądarka odczytuje tę wartość, aby zażądać obliczenia, a nasz serwer otrzymuje wartość do obliczenia, zwraca odpowiedź, a następnie o niej zapomina."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Proszę być ostrożnym przy wysyłaniu linków do innych",
        "blocks": [
          {
            "p": "Fakt, że nie jest przechowywany na serwerze, nie oznacza, że link jest bezpieczny. Link do wyników zawiera sen, który podałeś, więc osoba, która otrzyma ten link, może przeczytać tę treść."
          }
        ]
      },
      {
        "title": "Dlaczego obliczenia są wykonywane na serwerze, ale nie są przechowywane?",
        "blocks": [
          {
            "p": "Obliczenia same w sobie są wykonywane na serwerze. Znalezienie symboli wymaga całego słownika, a ten słownik jest zbyt duży, aby można go było przesłać do przeglądarki. Przechowywanie słownika na serwerze oznacza również, że gdy błąd zostanie naprawiony, jest to odzwierciedlane dla wszystkich jednocześnie. Jednak **po przetworzeniu żądania ta wartość nie jest używana nigdzie.** Nie ma kodu, który wstawia ją do bazy danych."
          },
          {
            "p": "Minimalny zapis niezbędny do działania jest przechowywany — licznik, aby zapobiec zbyt wielu żądaniom od tej samej osoby w krótkim czasie. To nie obejmuje treści snu, a adres IP dostępu również nie jest przechowywany. Tylko jedna wartość, haszowana z datą, jest liczona, a ta wartość zmienia się, gdy zmienia się dzień."
          }
        ]
      },
      {
        "title": "Co nie może być zrobione, ponieważ nie jest przechowywane",
        "blocks": [
          {
            "p": "Szczerze mówiąc, są rzeczy, z których zrezygnowaliśmy, ponieważ nie przechowujemy danych."
          },
          {
            "ul": [
              "**Nie ma dziennika snów.** Nie możesz odzyskać interpretacji z zeszłego tygodnia, a aby zobaczyć ją ponownie, musisz mieć link. Zrobiono to celowo — aby stworzyć dziennik, najbardziej prywatne zapisy muszą być ciągle przechowywane.",
              "**Obliczamy tę samą wartość za każdym razem.** Nie ma pamięci podręcznej. Zamiast tego słownik jest stały, a zasady dopasowania są deterministyczne, więc ten sam tekst zawsze da ten sam symbol — zasady zastępują to, co pamięć podręczna mogłaby zagwarantować.",
              "**Odświeżenie ponownie wywoła bramkę reklamową.** Dzieje się tak, ponieważ nie ma miejsca na pozostawienie zapisów przeglądania."
            ]
          }
        ]
      },
      {
        "title": "W przypadku zakupu",
        "blocks": [
          {
            "p": "Jeśli kupisz raport, w tym czasie zostanie zachowany zapis transakcji. Płatność ma ustawiony prawnie okres przechowywania, a bez historii zamówienia nie można przetworzyć zwrotów. Jednak nawet wtedy **tekst snu użyty do odczytu nie jest dołączany do zamówienia** — jest odbierany ponownie i zapisywany w momencie tworzenia dokumentu po potwierdzeniu płatności."
          },
          {
            "p": "Szczegóły znajdziesz w [polityce prywatności](/privacy)."
          }
        ]
      }
    ]
  },
  "notice": {
    "eyebrow": "Ogłoszenie",
    "title": "Ogłoszenia",
    "summary": "To jest miejsce, aby poinformować Cię o zmianach, które mogą wpłynąć na Twoje korzystanie.",
    "backLabel": "Powrót do Strony Głównej",
    "sections": []
  },
  "contact": {
    "eyebrow": "Kontakt",
    "title": "Zapytania",
    "summary": "To jest kanał do zapytań dotyczących korzystania, zwrotów, próśb o dane osobowe oraz zgłaszania błędów, a także informacji o firmie.",
    "backLabel": "Powrót do Strony Głównej",
    "sections": [
      {
        "title": "Kontakt przez Email",
        "blocks": [
          {
            "p": "Proszę wysłać zapytania na **{email}**. Odpowiemy w ciągu 2 dni roboczych. W przypadku zapytań dotyczących płatności i zwrotów, szybciej będzie dołączyć **numer zamówienia lub email płatności**."
          },
          {
            "p": "Zapytania telefoniczne są przyjmowane pod {customerCenter}."
          }
        ]
      },
      {
        "title": "Co można wysłać na ten kanał?",
        "blocks": [
          {
            "ul": [
              "**Płatność i Zwrot** — Jeśli dokument nie został utworzony lub kwota płatności różni się od zamówienia, zostanie przyznany pełny zwrot. Warunki znajdują się w [polityce zwrotów](/refund-policy).",
              "**Dane Osobowe** — Przyjmujemy prośby o dostęp, korektę i usunięcie. Polityka przetwarzania znajduje się w [polityce prywatności](/privacy).",
              "**Zgłaszanie Błędów w Interpretacji** — Jeśli symbole zostały znalezione niepoprawnie lub interpretacja wydaje się dziwna, prosimy dać nam znać. Jeśli dołączysz, kiedy napisałeś tę historię snu, możemy ponownie ją sprawdzić z tym samym tekstem."
            ]
          }
        ]
      },
      {
        "title": "Informacje o Firmie",
        "blocks": [
          {
            "ul": [
              "**Nazwa Firmy** — {companyName}",
              "**Przedstawiciel** — {representative}",
              "**Numer Rejestracji Firmy** — {businessNumber}",
              "**Numer Rejestracji Sprzedaży Wysyłkowej** — {mailOrderNumber}",
              "**Adres** — {address}",
              "**Centrum Obsługi Klienta** — {customerCenter}",
              "**Email** — {email}",
              "**Inspektor Ochrony Danych Osobowych** — {privacyOfficer}",
              "**Dostawca Usług Hostingowych** — {hostingProvider}"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Nie musisz przepisywać snu, który podałeś w emailu z zapytaniem. Nie zapisujemy danych, więc nie możemy ich ponownie sprawdzić, a numer zamówienia wystarczy do weryfikacji. Proszę zapisać go tylko, jeśli jest to absolutnie konieczne, na przykład w przypadku zgłaszania błędów w interpretacji."
          }
        ]
      }
    ]
  },
  "guide/what-we-do-not-do": {
    "eyebrow": "Zasady Usługi",
    "title": "Czego Nie Robimy",
    "summary": "Nie dostarczamy numerów loterii, dzienników snów, określeń ciąży ani talizmanów. Wyjaśniamy, dlaczego zdecydowaliśmy się nie robić żadnej z tych rzeczy.",
    "backLabel": "Podstawa Interpretacji",
    "sections": [
      {
        "title": "Nie dostarczamy numerów loterii",
        "blocks": [
          {
            "p": "Chociaż jest to powszechnie poruszane w usługach interpretacji snów, nie robimy tego. **Nie ma podstaw w tradycyjnej interpretacji snów do wyciągania numerów z snów.** Choć istnieją zapisy interpretujące sny o świniach jako bogactwo, nie ma żadnej zasady w literaturze, która produkuje sześć numerów z tego."
          },
          {
            "p": "Aby je stworzyć, musielibyśmy je wymyślić, a w tym momencie ta usługa przestałaby być miejscem przekazywania interpretacji przekazywanych przez tradycję. Jest to szczególnie niepokojące, ponieważ może prowadzić do strat finansowych."
          }
        ]
      },
      {
        "title": "Nie tworzymy dzienników snów",
        "blocks": [
          {
            "p": "Chociaż byłoby wygodnie mieć funkcję do zbierania przeszłych snów, wymagałoby to od nas **ciągłego przechowywania snów, które podajesz.** Narracje snów są najbardziej prywatnym aspektem tego, co ta usługa otrzymuje, i zdecydowaliśmy się nie wymieniać tego."
          },
          {
            "p": "Zamiast tego, sny, które chcesz zachować, mogą być **zrobione jako obrazy lub dokumenty.** Odpowiedzialność za przechowywanie spoczywa na użytkownikach, a nie na nas — [Dwa Sposoby na Zachowanie Swoich Snów](/guide/reports)"
          }
        ]
      },
      {
        "title": "Nie określamy ciąży ani płci",
        "blocks": [
          {
            "p": "We will only state that a symbol interpreted as a a conception dream (conception dream) has appeared. Whether you are pregnant or whether the child is a daughter or son is **not something that can be known through dreams.** Such statements do not appear on the screen or in paid documents."
          }
        ]
      },
      {
        "title": "Nie sprzedajemy talizmanów ani amuletów",
        "blocks": [
          {
            "p": "Symbol odczytany jako niepomyślny nie jest powodem do kupowania czegokolwiek. Niepomyślny sen był tradycyjnie używany do **wskazywania sytuacji do zbadania teraz**, a nie do płacenia za uniknięcie czegoś."
          },
          {
            "p": "Nie tworzymy niepokoju, aby sprzedać coś na jego podstawie. Jedynymi rzeczami, które sprzedajemy, są te dwie wymienione powyżej, a żadna z nich nie zapewnia dodatkowej interpretacji, lecz raczej **sposoby na zachowanie tej samej treści.**"
          }
        ]
      },
      {
        "kind": "note",
        "title": "Nie składamy ostatecznych stwierdzeń o przyszłości",
        "blocks": [
          {
            "p": "Nie składamy ostatecznych stwierdzeń o tym, czy coś się wydarzy, kiedy się wydarzy, ani dotyczących zdrowia, bogactwa czy długości życia. Przekazywanie znaczeń tradycyjnych symboli a przewidywanie przyszłości to różne sprawy."
          }
        ]
      },
      {
        "title": "Nie fałszujemy interpretacji, które nie istnieją",
        "blocks": [
          {
            "p": "Dla symboli, które nie istnieją w słowniku, **stwierdzimy, że nie mogliśmy ich znaleźć.** Nie łączymy podobnych ani nie wypełniamy przestrzeni wiarygodnymi zdaniami. Dlatego ta usługa nie [używa sztucznej inteligencji do interpretacji snów](/guide/no-ai). Model nie mówi, że nie wie, co nie wie."
          }
        ]
      }
    ]
  }
} satisfies Record<DocKey, DocPage>;

export const PL_NOTICES = {
  "kindLabels": {
    "service": "Usługa",
    "product": "Raporty",
    "engine": "Obliczenia",
    "support": "Wsparcie"
  },
  "intro": "Zmiany w Twoich warunkach korzystania — ceny, polityki — są publikowane tutaj przed ich wejściem w życie. Wewnętrzne ulepszenia, takie jak szybszy ekran, nie są tutaj publikowane: to, co się tutaj pojawia, to to, co musisz wiedzieć.",
  "empty": {
    "title": "Brak opublikowanych ogłoszeń",
    "body": "Jeśli będą jakiekolwiek zmiany do przekazania, zostaną one opublikowane tutaj."
  },
  "effective": "Wchodzi w życie od {date}",
  "pager": {
    "label": "Strona powiadomień",
    "newer": "← Najnowsze",
    "older": "Poprzednie powiadomienia →"
  },
  "items": {
    "2026-08-06-no-storage": {
      "title": "Podany przez Ciebie sen nie jest przechowywany.",
      "body": [
        "Historie snów są najbardziej prywatnymi wartościami, które ta usługa otrzymuje. Dlatego nie są one rejestrowane w żadnej tabeli. Wprowadzenie jest jedynie przenoszone w adresie wyniku do obliczeń, a po zamknięciu okna znika.",
        "Zdecydowaliśmy się nie tworzyć funkcji, która zbiera sny i pokazuje ich przebieg (dziennik snów). To użyteczna funkcja, ale aby to zrobić, najbardziej prywatne zapisy muszą być ciągle przechowywane.",
        "Kiedy wysyłasz link do wyniku innym, zawiera on treść snu. Proszę zachować ostrożność przy udostępnianiu."
      ]
    },
    "2026-08-06-engine-version": {
      "title": "Wyniki zawierają słownik symboli i kryteria obliczeń.",
      "body": [
        "Podstawą interpretacji jest tradycyjny słownik symboli w interpretacji snów. Wyniki i dokumenty będą zawierały wersję tego słownika (np. 1.2.0) oraz wersję reguł dopasowania (na przykład dream-1.0.0). Ten sam sen zawsze przyniesie ten sam symbol na podstawie tych samych kryteriów.",
        "Jeśli dodamy symbole do słownika lub zmienimy znaczenia w sposób, który może wpłynąć na wyniki, ten fakt zostanie przedstawiony tutaj. Dzieje się tak, ponieważ wyniki, które otrzymałeś wcześniej, mogą się zmienić.",
        "Nie tworzymy tradycyjnych znaczeń, które nie znajdują się w słowniku. Jeśli nie znaleziono symboli, po prostu stwierdzamy, że żadne nie zostały znalezione i kończymy."
      ]
    },
    "2026-08-06-conception": {
      "title": "Informujemy tylko o śnie o poczęciu i nie wydajemy osądów.",
      "body": [
        "Jeśli w śnie pojawią się symbole tradycyjnie postrzegane jako sen o poczęciu, poinformujemy Cię o tym fakcie. Jednak nie określamy statusu ciąży ani płci dziecka — takie twierdzenia nie mają podstaw, a medyczne osądy są odpowiedzialnością instytucji medycznych.",
        "Wzmianka o synach i córkach w tradycyjnych narracjach jest odzwierciedleniem zwyczajów, które zostały przekazane, i nie oznacza, że przewidujemy to poprawnie."
      ]
    }
  }
} satisfies NoticeCopy;
