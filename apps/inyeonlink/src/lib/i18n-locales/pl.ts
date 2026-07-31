// 인연링크 화면 사전의 폴란드어(pl) 판. `src/lib/i18n.ts`의 `en`을 구조·번역 기준으로 옮겼고,
// 영어가 모호하거나 사주 용어의 결이 필요한 자리는 같은 파일의 `ko` 원문을 대조해 뜻을 맞췄다.
// 언어 선택기 3개 키와 footer 13개 키는 naminglink(`i18n.ts`·`SiteFooter.tsx`)의 pl을 그대로 가져왔다.
// 폴란드어는 7격이라 자리표시자({dayMaster} 등)는 전부 주격이 그대로 들어가는 어순(콜론·대시·주어)에만 두었다.

import type { Dictionary } from "@/lib/i18n";

export const pl: Dictionary = {
  brand: "InyeonLink",
  tagline: "Zgodność czytana z Saju i znaków zodiaku",
  currentLanguage: "Obecny język",
  moreLanguages: "Więcej",
  closeLanguages: "Zamknij",
  landing: {
    title: "Zobacz, jak dwoje ludzi\npasuje do siebie",
    subtitle:
      "Wystarczy data urodzenia.\nŁączymy zgodność Saju (Cztery Filary) ze zgodnością zodiaku i pokazujemy ją jako wskaźnik dopasowania.",
    cta: "Sprawdź zgodność Saju",
    howTitle: "Jak to działa",
    steps: [
      "Podaj obie daty urodzenia. Godzina urodzenia jest opcjonalna.",
      "Zgodność Saju wynika z żywiołów pni dziennych, równowagi żywiołów i gałęzi dnia; zgodność zodiaku — z gałęzi roku.",
      "Oba wyniki łączymy w ważony wskaźnik dopasowania.",
    ],
    privacyTitle: "Nic z tego, co wpiszesz, nie jest zapisywane",
    privacyBody:
      "Daty urodzenia służą wyłącznie do obliczenia wyniku i nigdzie nie są zapisywane. Konto nie jest potrzebne. Nic z tego, co niesie link z wynikiem, nie trafia na serwer.",
    disclaimer:
      "To tradycyjna interpretacja Saju podana dla orientacji. Nie jest naukową prognozą ani wyrokiem o jakimkolwiek związku.",
  },
  form: {
    title: "Obie daty urodzenia",
    description:
      "Znajomość godziny urodzenia wyostrza odczyt, ale nie jest wymagana.",
    personA: "Pierwsza osoba",
    personB: "Druga osoba",
    nickname: "Nazwa wyświetlana",
    nicknamePlaceholder: "np. Ja",
    nicknameHint: "Widoczna tylko na ekranie wyniku. Nie wpływa na obliczenia.",
    gender: "Płeć",
    male: "Mężczyzna",
    female: "Kobieta",
    genderUnspecified: "Wolę nie podawać",
    genderHint:
      "Tradycyjne Saju czyta pozycję małżeńską inaczej u każdej płci. Jeśli to pominiesz, ten czynnik zostanie wyłączony z obliczeń.",
    birthplace: "Miejsce urodzenia",
    birthplaceHint:
      "Filar godziny liczymy z prawdziwego czasu słonecznego w miejscu urodzenia, z uwzględnieniem czasu letniego i historycznych zmian stref czasowych. Jeśli Twojego miejsca urodzenia nie ma na liście, wybierz najbliższe miasto — im bliżej, tym dokładniejszy filar godziny.",
    calendar: "Kalendarz",
    solar: "Słoneczny",
    lunar: "Księżycowy",
    leapMonth: "Miesiąc przestępny",
    birthDate: "Data urodzenia",
    year: "Rok",
    month: "Miesiąc",
    day: "Dzień",
    birthTime: "Godzina urodzenia",
    unknownTime: "Nie znam godziny",
    hour: "Godzina",
    minute: "Minuta",
    submit: "Obejrzyj reklamę i zobacz wynik",
    submitting: "Obliczanie…",
    errorInvalidDate:
      "Sprawdź datę urodzenia. Przy dacie księżycowej sprawdź też, czy wypada w miesiącu przestępnym.",
    errorGeneric: "Obliczenie się nie powiodło. Spróbuj ponownie za chwilę.",
  },
  reading: {
    chartTitle: "Oba układy Saju",
    chartHint:
      "Saju zapisuje rok, miesiąc, dzień i godzinę urodzenia — każde dwoma znakami. Wszystkie poniższe wyniki biorą się z tych ośmiu znaków.",
    pillarYear: "Rok",
    pillarMonth: "Miesiąc",
    pillarDay: "Dzień",
    pillarHour: "Godzina",
    pillarHourUnknown: "Brak godziny urodzenia",
    dayMasterLabel: "Pień dzienny",
    animalLabel: "Zodiak",
    seasonLabel: "Pora roku urodzenia",
    elementsTitle: "Siła żywiołów",
    strongest: "Najsilniejszy",
    scarcest: "Najrzadszy",
    strengthTitle: "Co przemawia za tą parą",
    cautionTitle: "Na co uważać",
    bodyStrengthTitle: "Siła pnia dziennego",
    favorableLabel: "Czego teraz potrzebujesz",
  },
  bodyStrength: {
    STRONG: {
      name: "Mocny pień dzienny",
      body: "Żywioły wspierające Twój pień dzienny są w nadmiarze. Daje to własny napęd, ale łatwo przechyla szalę w jedną stronę — uspokajasz się dopiero wtedy, gdy coś odprowadza ten nadmiar.",
    },
    BALANCED: {
      name: "Zrównoważony pień dzienny",
      body: "To, co wspiera Twój pień dzienny, i to, co z niego czerpie, stoją niemal po równo. Zbyt blisko, by rozstrzygnąć na którąkolwiek stronę, więc za potrzebę uznajemy tu ten żywioł, którego jest najmniej.",
    },
    WEAK: {
      name: "Słaby pień dzienny",
      body: "Żywiołów wspierających Twój pień dzienny jest mało. Dobrze pożyczasz siłę z otoczenia, ale wyczerpujesz się, gdy długo trwasz w pojedynkę — rozwijasz się wtedy, gdy ktoś Cię podtrzymuje.",
    },
  },
  relation: {
    title: "Jak się wobec siebie ustawiacie",
    hint: "Saju nazywa dziesięcioma określeniami sposób, w jaki dwa pnie dzienne patrzą na siebie. Odczyt ma kierunek — to, jak Ty widzisz drugą osobę, może różnić się od tego, jak ona widzi Ciebie.",
    directionLabel: "{from} → {to}",
    shapes: {
      ALIKE: {
        name: "Podobni",
        body: "Wasze pnie dzienne niosą tę samą energię. Wiele rozumie się bez słów, a gusta się pokrywają. Haczyk w tym, że jesteście mocni i słabi w tych samych miejscach, więc trudność zatrzymuje oboje w tym samym punkcie.",
      },
      NURTURING: {
        name: "Jedno karmi, drugie rozkwita",
        body: "Energia płynie w jedną stronę. Strona przyjmująca czuje się swobodnie i znajduje więcej rzeczy, na które ma ochotę; strona dająca czerpie satysfakcję z tego, że drugiej się wiedzie. Skoro przepływ jest jednokierunkowy, coś musi wracać — inaczej dający w końcu wysycha.",
      },
      TENSION: {
        name: "Jedno trzyma drugie w ryzach",
        body: "Jedno z Was zajmuje pozycję, która powściąga drugie. To napięcie nie pozwala Wam popuścić i zwykle przynosi efekty we wspólnej pracy. Strona powściągana może czuć się stale oceniana, więc uznanie musi wyprzedzać poprawianie.",
      },
    },
    leadNote: {
      NURTURING: "Energię oddaje tu: **{lead}**.",
      TENSION: "Tempo nadaje tu: **{lead}**.",
    },
  },
  tenGods: {
    BIGYEON: {
      name: "Towarzysz (比肩)",
      body: "Ktoś, kto stoi ramię w ramię. Łatwo się z nim rozmawia i łatwo przy nim być — trudno jednak ustąpić, gdy oboje chcecie tego samego.",
    },
    GEOPJAE: {
      name: "Rywal (劫財)",
      body: "Podobny, ale robi to inaczej. Wielka siła, gdy pchacie w tę samą stronę; drobiazgowość w rachunkach, gdy pojawi się coś do podziału.",
    },
    SIKSIN: {
      name: "Ekspresja (食神)",
      body: "Ktoś, kto wydobywa z Ciebie to, co w Tobie jest. Przy nim mówisz więcej i więcej chcesz robić. Jedna z najwygodniejszych pozycji, jakie są.",
    },
    SANGGWAN: {
      name: "Burzyciel (傷官)",
      body: "Ktoś, kto rozchwiewa Twoje ramy. Ciekawy i pobudzający — ale gdy słowa między Wami staną się ostre, cięcie zostaje na długo.",
    },
    PYEONJAE: {
      name: "Zmienne bogactwo (偏財)",
      body: "Ktoś, kim chce się zaopiekować. Sporo spontanicznej radości, choć ciężar relacji potrafi pozostać lekki.",
    },
    JEONGJAE: {
      name: "Stałe bogactwo (正財)",
      body: "Tradycyjnie pozycja małżeńska u mężczyzny. Troska przychodzi regularnie, a związek osiada w zwykłej codzienności zamiast w uniesieniach.",
    },
    PYEONGWAN: {
      name: "Wyzwanie (偏官)",
      body: "Ktoś, kto trzyma Cię w napięciu. Przyciąga mocno i trudno oderwać wzrok, ale dłuższa bliskość zaczyna ciążyć jak presja.",
    },
    JEONGGWAN: {
      name: "Autorytet (正官)",
      body: "Tradycyjnie pozycja małżeńska u kobiety. Prostuje Cię i wnosi do związku porządek oraz spokój.",
    },
    PYEONIN: {
      name: "Nietypowe wsparcie (偏印)",
      body: "Ktoś, kto pomaga Ci w niecodzienny sposób. Bywają chwile prawdziwej głębi, choć zrozumienie swoich metod zabiera czas.",
    },
    JEONGIN: {
      name: "Opieka (正印)",
      body: "Ktoś, kto przygarnia i troszczy się o Ciebie. Chce się przy nim oprzeć, a głowa się uspokaja. Jeśli jednak opieranie idzie tylko w jedną stronę, relacja się przechyla.",
    },
  },
  dayMasters: {
    甲: { name: "Drewno Yang (甲)", trait: "Wysokie drzewo rosnące prosto. Gdy kierunek jest już obrany, nie chwieje się i woli wytrzymać, niż się ugiąć." },
    乙: { name: "Drewno Yin (乙)", trait: "Pnącze — giętka trawa. Ugina się pod okolicznościami, żeby iść dalej, i nie pęka." },
    丙: { name: "Ogień Yang (丙)", trait: "Słońce w południe. Uczucia widać wprost, w pomieszczeniu robi się jaśniej, a wychodzenie przed szereg przychodzi naturalnie." },
    丁: { name: "Ogień Yin (丁)", trait: "Światło świecy. Pali się cicho i długo, a ogrzewa najpierw tych najbliższych." },
    戊: { name: "Ziemia Yang (戊)", trait: "Otwarty ląd i góry. Trudno tym zachwiać i łatwo się o to oprzeć, choć raz podjęta decyzja zmienia się powoli." },
    己: { name: "Ziemia Yin (己)", trait: "Gleba pola. Przyjmuje to, co przyjdzie, i to wyhodowuje — raczej pielęgnuje, niż pokazuje." },
    庚: { name: "Metal Yang (庚)", trait: "Nieobrobione żelazo. Zdecydowany i jednoznaczny, bez cierpliwości do spraw zawieszonych." },
    辛: { name: "Metal Yin (辛)", trait: "Oszlifowany klejnot. Wyczulony smak i wysokie wymagania; niedbałość trudno tu puścić płazem." },
    壬: { name: "Woda Yang (壬)", trait: "Rzeka i morze. Szerokie spojrzenie i oko do tego, jak sprawy płyną." },
    癸: { name: "Woda Yin (癸)", trait: "Rosa i deszcz. Wsiąka cicho i czyta nastrój, zanim padną słowa." },
  },
  dayMasterSigns: {
    甲: [
      "Mówi, co myśli, nawet na pierwszym spotkaniu.",
      "Rzadko zmienia plan albo obietnicę, gdy ta już zapadła.",
      "Odmawia wprost, co potrafi zabrzmieć szorstko.",
    ],
    乙: [
      "Omija konfrontację i wybiera inną drogę.",
      "Sprawia wrażenie miękkiego, a i tak dociera tam, gdzie chciał.",
      "Najpierw czyta nastroje, zanim dołączy do grupy.",
    ],
    丙: [
      "Pierwszy zagaduje osoby dopiero co poznane.",
      "Sympatię i niechęć widać po twarzy.",
      "Bez starania ląduje w środku towarzystwa.",
    ],
    丁: [
      "Na początku cichy, przy bliskiej znajomości — uważny.",
      "Woli długą rozmowę z jedną czy dwiema osobami niż tłum.",
      "Zapamiętuje rzuconą mimochodem uwagę i wraca do niej później.",
    ],
    戊: [
      "Mówi mało; głos rzadko mu się podnosi nawet w pilnych sprawach.",
      "Gdy inni odkładają decyzję, na końcu rozstrzyga to właśnie on.",
      "Raz powiedziane „nie” zostaje „nie” na długo.",
    ],
    己: [
      "Słucha dłużej, niż mówi.",
      "Trudno mu odmówić, więc praca się na nim piętrzy.",
      "To, czym po cichu się zajął, wychodzi na jaw dopiero później.",
    ],
    庚: [
      "Decyduje szybko i mówi o tym od razu.",
      "Nie łagodzi przekazu, co bywa odbierane jako chłód.",
      "Widocznie się niecierpliwi, gdy sprawa się wlecze.",
    ],
    辛: [
      "Ma jasne kryteria co do ubrań i rzeczy, które wybiera.",
      "Nie umie przepuścić byle jak zrobionej roboty bez uwagi.",
      "Skąpy w pochwałach, ale gdy już uzna, to na serio.",
    ],
    壬: [
      "Łatwo dogaduje się z najróżniejszymi ludźmi.",
      "Wcześniej mówi o tym, co będzie potem, niż o tym, co jest teraz.",
      "Źle znosi przywiązanie do jednego miejsca na dłużej.",
    ],
    癸: [
      "Mówi mało, a sytuację odczytał dokładnie.",
      "Pierwszy zauważa zmianę nastroju.",
      "Trzyma wnętrze blisko siebie, więc poznanie go zabiera czas.",
    ],
  },
  animalTraits: {
    rat: "Szybko zauważa i szybko zabezpiecza to, co ważne. Pierwszy rusza w kryzysie.",
    ox: "Z pozoru powolny, ale doprowadza rzeczy do końca. Czego się podejmie, tego nie porzuca.",
    tiger: "Nieustraszony i zawsze z przodu. Nie przejdzie obojętnie obok niesprawiedliwości.",
    rabbit: "Łagodny i spostrzegawczy. Umie obejść, zamiast zderzyć się czołowo.",
    dragon: "Wielkie serce i wysokie ideały. Rzadko zadowala się zwyczajnością.",
    snake: "Zachowuje zdanie dla siebie i myśli głęboko. Ocenia trafnie.",
    horse: "Pogodny i niespokojny. Najtrudniej znosi ogrodzenie.",
    goat: "Ciepła i uważna. Ostre słowa nosi w sobie długo.",
    monkey: "Pomysłowa i szybko się dostosowuje. Nudzi ją powtarzalność.",
    rooster: "Pracowity i skrupulatny. Nie zostawi rzeczy nie na swoim miejscu.",
    dog: "Wierny do końca, gdy raz zaufa. Zdrada rani go szczególnie mocno.",
    pig: "Hojna i szczera. Ufa łatwo, czasem swoim kosztem.",
  },
  affinity: {
    menu: "Twój profil dopasowania",
    formTitle: "Jaka osoba do Ciebie pasuje",
    formDescription:
      "Wystarczy jedna data urodzenia. Możesz to przeczytać, nie znając niczyjej daty — albo nie mając jeszcze nikogo na myśli.",
    meLegend: "Ty",
    genderHint:
      "Tradycyjne Saju czyta pozycję małżeńską inaczej u każdej płci. Zostaw to pole puste, a ten czynnik zostanie pominięty, a nie zgadnięty.",
    seekingLabel: "Szukam",
    seekingHint:
      "Pozycję małżeńską (Jeongjae / Jeonggwan) da się ocenić tylko wtedy, gdy znane są obie płcie.",
    seekingAny: "Nie określono",
    submit: "Obejrzyj reklamę i zobacz wynik profilu",
    submitting: "Czytanie…",

    resultTitle: "Twój profil dopasowania",
    intro:
      "Oto rodzaj osoby, ku któremu skłania się Twój układ. **Te typy rozpoznasz po usposobieniu,** na długo zanim poznasz czyjąś datę urodzenia.",
    scoreCaption:
      "To te same wyniki poszczególnych czynników, których używa silnik zgodności — nie łączny wskaźnik dopasowania.",
    meTitle: "Gdzie stoisz",
    meBody: "{dayMaster} — to Twój pień dzienny. Stan na teraz: {strength}.",
    meHint:
      "Saju zapisuje rok, miesiąc, dzień i godzinę urodzenia w ośmiu znakach. **Pierwszy znak dnia urodzenia oznacza Ciebie** — nazywamy go pniem dziennym. Wszystkie typy poniżej są uporządkowane według tego jednego znaku.",
    bestTitle: "Usposobienia, które do Ciebie pasują",
    bestHint:
      "To pień dzienny drugiej osoby — **energia dnia, w którym się urodziła** — podzielony na dziesięć rodzajów, z których te trzy zazębiają się z Twoim. Często rozpoznasz je po zachowaniach poniżej, na długo zanim poznasz datę urodzenia.",
    signsTitle: "Jak to widać",
    avoidTitle: "Usposobienie, które wymaga pracy",
    avoidHint:
      "To nie ostrzeżenie. Znaczy tyle, że łatwość przychodzi później, gdy oboje włożycie w to czas.",
    bondLabel: "Zazębienie usposobień",
    spouseLabel: "Pozycja małżeńska",
    spouseSkipped: "Płeć została pominięta, więc ten czynnik odpadł",
    scoreHelp:
      "**Zazębienie usposobień** — jak energie Waszych dni urodzenia zazębiają się ze sobą. Nawet para działająca na zasadzie przyciągania i odpychania dostaje najwięcej wtedy, gdy yin i yang są skrzyżowane.\n**Pozycja małżeńska** — tradycyjne Saju wydziela jedną pozycję dla współmałżonka: Jeongjae u mężczyzn, Jeonggwan u kobiet. Sprawdzamy to **w obie strony** — czy druga osoba zajmuje tę pozycję wobec Ciebie i czy Ty zajmujesz ją wobec niej. Jedno i drugie naraz to para, którą tradycja ceni najwyżej.",
    typeHeading: "Ktoś jak {name}",
    needTitle: "Czego Ci teraz brakuje",
    needBody:
      "Brakuje Ci teraz tego: {elements}. Jeśli u drugiej osoby tego jest dużo, wypełni miejsce, które u Ciebie jest puste.",
    needHint:
      "Nie da się odczytać czyichś pięciu żywiołów na pierwszy rzut oka. Ale gdy poznasz datę urodzenia, zajrzyj tu najpierw.",
    zodiacTitle: "Zodiak — na marginesie",
    zodiacHint:
      "Zodiak potrzebuje tylko roku urodzenia, więc sprawdzisz go najszybciej. To jednak tylko jeden z czterech filarów — traktuj go jako wskazówkę.",
    zodiacGood: "Znaki, które pasują",
    zodiacHard: "Znaki, które zgrzytają",
    tableType: "Typ",
    tableSign: "Znak",
    tableYears: "Lata urodzenia",
    bornYear: "rocznik {year}",
    younger: "młodszy o {n} lat",
    older: "starszy o {n} lat",
    sameAge: "ten sam rocznik",
    zodiacYearsCaution:
      "W Saju rok zmienia się w Ipchun (około 4 lutego), a nie 1 stycznia. **Kto urodził się w styczniu albo na początku lutego, należy do znaku poprzedniego roku**, więc przy takich datach sprawdź rok po obu stronach.",
    dayBranchTitle: "Czy to ta osoba dla mnie?",
    dayBranchBody:
      "Wystarczy data urodzenia, żeby sprawdzić, czy ktoś do Ciebie pasuje.\nPełny odczyt znajdziesz w zgodności Saju na dole tej strony.",
    check: {
      button: "Sprawdź czyjąś datę urodzenia",
      title: "Jakie to usposobienie?",
      body: "Podaj datę urodzenia, a powiemy, którym z dziesięciu typów powyżej jest ta osoba. Nie liczymy wyniku zgodności.",
      submit: "Sprawdź",
      checking: "Sprawdzanie…",
      rank: "Twoje miejsce: {rank}",
      heading: "Ta osoba to: {name}",
      caution:
        "To odczyt z samego dnia urodzenia. **Jeśli ktoś urodził się około północy**, dzień może wypaść po którejkolwiek stronie, a daty ze stycznia i początku lutego należą do znaku poprzedniego roku.",
      close: "Zamknij",
      another: "Sprawdź kogoś innego",
      error: "Sprawdź datę — taka nie istnieje albo wykracza poza zakres.",
    },
    nextTitle: "Masz kogoś na myśli?",
    nextBody:
      "Podaj obie daty urodzenia, a dostaniesz prawdziwy wskaźnik dopasowania, z podsumowaniem wszystkich powyższych czynników.",
    nextButton: "Sprawdź zgodność Saju",
    recalculate: "Przeczytaj jeszcze raz",
    copyLink: "Kopiuj link do wyniku",
    copied: "Skopiowano",
    missingInput: "Nie udało się odczytać wyniku. Zacznij od nowa.",
    partialTime:
      "Godzina urodzenia nie została podana, więc filar godziny pominięto. Jej dodanie wyostrzy to, czego Ci brakuje.",
    disclaimer:
      "Materiał poglądowy z perspektywy tradycyjnego Saju. Nie każe szukać ani unikać żadnej konkretnej osoby.",
  },
  result: {
    title: "Wynik zgodności",
    totalLabel: "Wskaźnik dopasowania",
    breakdown: "Wynik według czynników",
    recalculate: "Zacznij od nowa",
    copyLink: "Kopiuj link do wyniku",
    copied: "Skopiowano",
    missingInput: "Nie udało się odczytać tego wyniku. Podaj daty jeszcze raz.",
    partialTime:
      "Godzina urodzenia nie została podana, więc filar godziny pominięto. Jej dodanie uściśli odczyt.",
    engineVersion: "Obliczono według",
    disclaimer:
      "To tradycyjna interpretacja Saju podana dla orientacji. Nie jest naukową prognozą ani wyrokiem o jakimkolwiek związku.",
  },
  ads: { label: "Reklama" },
  analyzing: {
    title: "Czytamy oba układy",
    quotes: [
      "Właściwej osoby nie tyle się spotyka, co rozpoznaje.",
      "Dobra para to nie ta, która się nie kłóci — to ta, która po kłótni wraca.",
      "Saju nie jest gotową odpowiedzią. To jeden z języków rozumienia się nawzajem.",
      "Bywają pary łatwe, bo podobne, i takie, które uczą, bo różne.",
      "Związki, które trwają, to zwykle te, w których nic nie zostawało niedopowiedziane za długo.",
      "Jeśli czyjś sposób wydaje się obcy, znaczy to, że ta osoba ma coś, czego Ty nie masz.",
      "Zgodność to w połowie to, z czym się rodzisz, i w połowie to, co budujesz.",
      "Związek trwa wtedy, gdy opieranie się i dawanie zmieniają się miejscami.",
      "Ważniejsze od wyniku jest to, jak się go czyta.",
      "Jeśli macie różne pory roku, opowiedzcie sobie, jaka jest Wasza.",
    ],
    gateTitle: "Twój wynik jest gotowy",
    gateBody:
      "Obejrzyj krótką reklamę, żeby go otworzyć. To przychód z reklam utrzymuje tę usługę za darmo.",
    watchButton: "Obejrzyj reklamę i zobacz wynik",
    watching: "Trwa reklama",
    remaining: "Wynik otworzy się za: {seconds} s",
  },
  report: {
    title: "Zachowaj ten odczyt jako PDF",
    body: "Zamieniamy ten wynik w trzystronicowy PDF, razem z wartościami siły żywiołów, których nie ma na ekranie.",
    buyButton: "Zapłać {price} i pobierz",
    preparing: "Jeszcze niedostępne",
    ordering: "Tworzymy zamówienie…",
    paying: "Przetwarzamy płatność…",
    issuing: "Przygotowujemy raport…",
    done: "Pobrano. Użyj przycisku poniżej, aby pobrać jeszcze raz.",
    failed: "Płatność albo pobieranie nie powiodło się. Spróbuj ponownie za chwilę.",
    retry: "Pobierz ponownie",
    contents: [
      "Strona 1 — wskaźnik dopasowania, co przemawia za tą parą i na co uważać",
      "Strona 2 — kształt relacji, dziesięć bogów i wyniki według czynników",
      "Strona 3 — oba układy Saju i siła żywiołów",
    ],
    consentLabel:
      "Rozumiem, że jest to treść cyfrowa dostarczana natychmiast po płatności, oraz że **po zakończeniu pobierania odstąpienie z powodu zwykłej zmiany zdania jest ograniczone**.",
    consentRequired: "Potwierdź warunki odstąpienia przed płatnością.",
    productInfoTitle: "Informacje o produkcie",
    productInfo: [
      ["Dostawca", "{brand}"],
      ["Format", "Jeden dokument PDF (3 strony), pobierany na ekranie zaraz po płatności."],
      ["Wymagania", "Dowolne urządzenie otwierające PDF. Bez instalacji i bez konta."],
      ["Okres korzystania", "Bez ograniczeń. Pobrany plik zostaje u Ciebie."],
      ["Ponowne pobranie", "Do pięciu razy w ramach tego samego zamówienia. Nie przechowujemy kopii, więc po opuszczeniu ekranu wyniku nie da się jej odtworzyć."],
      ["Odstąpienie", "Pełny zwrot przed rozpoczęciem pobierania. Po jego zakończeniu odstąpienie z powodu zmiany zdania jest ograniczone (art. 17 ust. 2 koreańskiej ustawy o handlu elektronicznym)."],
      ["Koszty zwrotu", "Brak — treść cyfrowa, nic nie jest wysyłane."],
    ],
    refundContact:
      "W sprawie zwrotów i pytań skontaktuj się z obsługą klienta albo napisz na adres poniżej. Jeśli dokument nie mógł powstać albo pobrana kwota różni się od zamówienia, zwracamy całość.",
  },
  affinityReport: {
    title: "Zachowaj swój profil dopasowania jako PDF",
    body: "Zamieniamy ten odczyt w czterostronicowy PDF. Zawiera **pełny ranking, którego nie ma na ekranie** — ekran pokazuje pierwszą trójkę, a PDF niesie wszystkie dziesięć typów i wszystkie dwanaście znaków.",
    buyButton: "Zapłać {price} i pobierz",
    preparing: "Przygotowanie",
    ordering: "Tworzymy zamówienie…",
    paying: "Przetwarzamy płatność…",
    issuing: "Budujemy raport…",
    done: "Pobrano. Użyj przycisku poniżej, aby otrzymać go jeszcze raz.",
    failed: "Płatność albo pobieranie nie doszło do skutku. Spróbuj ponownie za chwilę.",
    retry: "Pobierz ponownie",
    contents: [
      "Strona 1 — Gdzie stoisz i czego Ci brakuje",
      "Strona 2 — Trzy usposobienia, które do Ciebie pasują, ze wskazówkami z zachowań",
      "Strona 3 — Usposobienie, które wymaga pracy, oraz pełny ranking pni dziennych",
      "Strona 4 — Pełny ranking wszystkich dwunastu znaków, z latami urodzenia",
    ],
    consentLabel:
      "To treść cyfrowa dostarczana natychmiast po płatności. Rozumiem, że **po zakończeniu pobierania prawo do odstąpienia z powodu zmiany zdania jest ograniczone.**",
    consentRequired: "Zgódź się na warunki odstąpienia przed płatnością.",
    productInfoTitle: "Informacje o produkcie",
    productInfo: [
      ["Dostawca", "{brand}"],
      ["Format", "Jeden dokument PDF (4 strony), pobierany na tym ekranie zaraz po płatności."],
      ["Wymagania", "Dowolne urządzenie otwierające PDF. Bez instalacji, bez konta."],
      ["Dostępność", "Bez ograniczenia czasowego. Pobrany plik zostaje u Ciebie."],
      ["Ponowne pobranie", "Do 5 razy w ramach tego samego zamówienia. Nie przechowujemy pliku, więc po opuszczeniu tego ekranu nie da się go odtworzyć."],
      ["Odstąpienie", "Pełny zwrot przed zakończeniem pobierania. Po jego zakończeniu odstąpienie z powodu zmiany zdania jest ograniczone."],
      ["Koszty zwrotu", "Brak. Nie ma czego wysyłać."],
    ],
    refundContact:
      "W sprawie zwrotów i pytań skontaktuj się z obsługą klienta albo napisz na adres poniżej. Jeśli dokument w ogóle nie powstał albo pobrana kwota różni się od zamówienia, zwracamy całość.",
  },
  footer: {
    privacy: "Prywatność",
    terms: "Regulamin",
    refund: "Zwroty",
    pricing: "Cennik",
    legalEntity: "Firma",
    representative: "Przedstawiciel",
    businessNumber: "Rejestracja",
    mailOrderNumber: "Handel online",
    address: "Adres",
    customerCenter: "Obsługa klienta",
    email: "Email",
    privacyOfficer: "Ochrona danych",
    hostingProvider: "Hosting",
    providedBy: "Dostarczane przez",
    effective: "Obowiązuje od",
    backHome: "Powrót na stronę główną",
  },
  bands: {
    EXCELLENT: "Wyjątkowe dopasowanie",
    GOOD: "Mocne dopasowanie",
    FAIR: "Dopasowanie, które działa",
    CHALLENGING: "Dopasowanie wymagające pracy",
  },
  engines: {
    saju: {
      name: "Zgodność Saju",
      description:
        "Czyta razem żywioły pni dziennych, równowagę żywiołów i gałąź dnia.",
    },
    zodiac: {
      name: "Zgodność zodiaku",
      description: "Czyta relację między gałęziami lat urodzenia obojga.",
    },
  },
  factors: {
    dayMasterRelation: "Żywioły pni dziennych",
    spouseStar: "Gwiazda małżeńska",
    elementSupply: "Zaopatrzenie w żywioły",
    dayBranchRelation: "Gałąź dnia",
    branchRelation: "Znaki zodiaku",
  },
  notes: {
    "strength.dayMasterRelation":
      "Wasze usposobienia stoją w pozycji, która służy drugiej stronie. Nawet gdy czyjś sposób wydaje się obcy, zwykle dostarcza tego, czego brakuje.",
    "strength.spouseStar":
      "Każde z Was niesie żywioł tradycyjnie czytany jako pozycja małżeńska. Jeśli od początku było łatwo bez wyraźnego powodu, to zapewne dlatego.",
    "strength.elementSupply":
      "Każde z Was ma to, czego drugie teraz potrzebuje. Sprawy trudne do ruszenia w pojedynkę idą we dwoje łatwiej.",
    "strength.dayBranchRelation":
      "Gałąź dnia jest tradycyjnie czytana jako miejsce współmałżonka. Wasze dobrze do siebie przystają, przez co wspólny czas bywa spokojny.",
    "strength.branchRelation":
      "Znaki zodiaku dobrze do siebie przystają — to para, która z zewnątrz wygląda naturalnie i łatwo czyta się przy pierwszym spotkaniu.",
    "caution.dayMasterRelation":
      "Tu usposobienia się ocierają. Przy tym samym zadaniu różni Was tempo i sposób, co łatwo odczytać jako celowe działanie. Uzgadniajcie proces, zanim uzgodnicie wniosek.",
    "caution.spouseStar":
      "Żadne z Was nie niesie żywiołu, który tradycja nazywa pozycją małżeńską drugiej strony. Przyciąganie może nie być natychmiastowe; taka para narasta z czasem.",
    "caution.elementSupply":
      "To, czego potrzebuje każde z Was, jest cienkie także u drugiej strony. W czym oboje jesteście dobrzy, tam jesteście bardzo dobrzy — ale miejsca, których brakuje obojgu, pozostają puste. Lepiej zasilać je spoza związku.",
    "caution.dayBranchRelation":
      "Tarcia są prawdopodobne w pozycji wspólnego życia. Zwykle wychodzą w drobnych nawykach, a nie w wielkich sprawach, więc kilka wcześniej ustalonych zasad pomaga.",
    "caution.branchRelation":
      "Wasze znaki zodiaku stoją naprzeciw siebie. Widzicie sprawy inaczej, co powoduje tarcia — i jednocześnie znaczy, że jest się czego od siebie nauczyć.",

    "spouseStar.MUTUAL":
      "Każde z Was stoi dokładnie w pozycji małżeńskiej drugiego — to para, którą tradycyjne Saju ceni najwyżej.",
    "spouseStar.STRONG":
      "Jedno z Was stoi dokładnie w pozycji małżeńskiej, drugie blisko niej. To, co każde czuje wobec drugiego, może się nieco różnić rozmiarem.",
    "spouseStar.PARTIAL":
      "Tylko jedno z Was stoi w pozycji małżeńskiej drugiego. Początkowe przyciąganie zwykle idzie w jedną stronę, więc warto nie odkładać powiedzenia tego wprost.",
    "spouseStar.SLIGHT":
      "Jedno z Was stoi tuż obok pozycji małżeńskiej. To narasta ze wspólnym czasem, zamiast pojawić się jako natychmiastowe przyciąganie.",
    "spouseStar.NONE":
      "Żadne z Was nie zajmuje tego, co tradycja nazywa pozycją małżeńską. Taka para buduje się przez wspólne życie, a nie przez przyciąganie.",
    "dayMaster.CLASH_BONDED":
      "{elementA} i {elementB} wzajemnie się powściągają, ale mają przeciwną biegunowość. Tradycja czyta to jako parę małżeńską — tarcie zwykle zamienia się w przywiązanie.",
    "dayMaster.CLASH_HARSH":
      "{elementA} i {elementB} wzajemnie się powściągają przy tej samej biegunowości. Ładunek jest silny, a razem z nim ciężar, jaki każde kładzie na drugim.",
    "dayMaster.FLOW_GUARDED":
      "Jedno z Was wypuszcza energię, a drugie ją utrzymuje. Ostrzejszy impuls zostaje złagodzony przez drugą stronę — tradycja nazywa to parą strzeżoną.",
    "dayMaster.FLOW_BLOCKED":
      "Jedno z Was wypuszcza energię, a drugie ją odciąga. Strona dająca łatwo się tu męczy, więc pomaga mówienie wprost, co każde daje i co bierze.",
    "dayMaster.PEER_EVEN":
      "Oboje niesiecie tę samą energię: {elementA}, w tej samej biegunowości. To czyni rzeczy równymi i łatwymi, ale żadne nie popycha drugiego naprzód.",
    "dayMaster.PEER_RIVAL":
      "Oboje niesiecie tę samą energię: {elementA}, lecz o przeciwnej biegunowości. Przyciąganie jest szybkie, ale rywalizujecie o ten sam grunt.",
    "supply.AMPLE":
      "Każde z Was ma sporo tego, czego potrzebuje drugie. Braki: pierwsza osoba — {needA}, druga osoba — {needB}, i druga strona je uzupełnia.",
    "supply.ENOUGH":
      "Każde z Was ma niezłą część tego, czego potrzebuje drugie. Braki: pierwsza osoba — {needA}, druga osoba — {needB}.",
    "supply.THIN":
      "Braki są takie: pierwsza osoba — {needA}, druga osoba — {needB}. U drugiej strony tego jednak niewiele.",
    "supply.SCARCE":
      "Żadne z Was nie dostarczy łatwo tego, czego potrzebuje drugie. Braki: pierwsza osoba — {needA}, druga osoba — {needB}; oba te miejsca stoją puste. Lepiej zasilać je spoza związku.",
    "dayBranch.SAMHAP":
      "Gałęzie dnia tworzą potrójną harmonię — najmocniejsza para w pozycji małżeńskiej.",
    "dayBranch.BANHAP":
      "Gałęzie dnia tworzą półharmonię wokół osi potrójnej harmonii. Para dobrze dobrana w pozycji małżeńskiej.",
    "dayBranch.YUKHAP": "Gałęzie dnia tworzą szóstą harmonię. Przyciągacie się nawzajem.",
    "dayBranch.SAME":
      "Gałęzie dnia są identyczne. Jest przez to łatwo, ale nowości niewiele.",
    "dayBranch.NEUTRAL": "Gałęzie dnia nie mają szczególnej relacji.",
    "dayBranch.WONJIN":
      "Gałęzie dnia stoją w cichej urazie. Rzadko wybucha coś otwarcie, ale trudne do nazwania żale mają skłonność do narastania — lepiej mówić na bieżąco, niż odpuszczać.",
    "dayBranch.CHUNG":
      "Gałęzie dnia się zderzają. Ta pozycja jest podatna na tarcia, więc sposób rozmowy ma znaczenie.",
    "zodiac.SAMHAP":
      "{animalA} i {animalB} tworzą potrójną harmonię — najlepsza para w zodiaku.",
    "zodiac.BANHAP":
      "{animalA} i {animalB} tworzą półharmonię wokół osi potrójnej harmonii, więc dobrze do siebie pasujecie.",
    "zodiac.YUKHAP": "{animalA} i {animalB} tworzą szóstą harmonię. Dobrze do siebie pasujecie.",
    "zodiac.SAME": "Oboje macie ten sam znak: {animalA}, więc usposobienia się powtarzają.",
    "zodiac.NEUTRAL": "{animalA} i {animalB} nie mają szczególnej relacji.",
    "zodiac.WONJIN":
      "{animalA} i {animalB} stoją w cichej urazie — rzadko dochodzi do otwartej kłótni, ale subtelne rozminięcie potrafi trwać długo.",
    "zodiac.CHUNG":
      "{animalA} i {animalB} się zderzają. Różnicie się ostro, co znaczy też, że jest się wiele od siebie nauczyć.",
  },
  animals: {
    rat: "Szczur",
    ox: "Wół",
    tiger: "Tygrys",
    rabbit: "Królik",
    dragon: "Smok",
    snake: "Wąż",
    horse: "Koń",
    goat: "Koza",
    monkey: "Małpa",
    rooster: "Kogut",
    dog: "Pies",
    pig: "Świnia",
  },
  elements: {
    WOOD: "Drewno",
    FIRE: "Ogień",
    EARTH: "Ziemia",
    METAL: "Metal",
    WATER: "Woda",
  },
};
