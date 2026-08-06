// 사주링크 화면 사전의 Polish (Polski)(pl) 번역이다.
//
// **`scripts/translate-i18n.ts`가 만든 파일이다.** 키 구성·중첩·배열 길이는 en을 그대로
// 복사하고 문자열만 갈아 끼우므로 구조가 어긋날 자리가 없다. 손으로 고칠 때도 키를 더하거나
// 빼지 말 것 — `verify-i18n`이 en과 대조해 잡는다.
//
// **인연링크에서 물려받은 옛 번역을 되살린 것이 아니다.** 그 파일들은 궁합 서비스의 UI라,
// 되살리면 사주 화면에 궁합·인연이 다시 들어온다. 새 ko·en에서 다시 옮겼다.

import type { Dictionary } from "@/lib/i18n";

export const pl: Dictionary = {
  "brand": "SajuLink",
  "tagline": "Twoje Cztery Filary, odczytane z daty urodzenia",
  "currentLanguage": "Obecny język",
  "moreLanguages": "Więcej",
  "closeLanguages": "Zamknij",
  "landing": {
    "title": "Osiem znaków,\nz którymi się urodziłeś",
    "subtitle": "Wystarczy, że podasz datę urodzenia.\nSporządzimy Twój wykres Saju (Cztery Filary), zważymy pięć elementów i odczytamy siłę Twojego dnia mistrza.",
    "cta": "Zobacz moje Saju",
    "howTitle": "Jak to działa",
    "steps": [
      "Wprowadź swoją datę urodzenia. Czas urodzenia jest opcjonalny.",
      "Rok, miesiąc, dzień i godzina Twojego urodzenia tworzą osiem znaków — Twój wykres natalny. Na ich podstawie odczytujemy wagę każdego elementu i siłę Twojego dnia mistrza.",
      "Dziś jest filar, który jest zestawiony z tym wykresem, aby również podać Twoją dzisiejszą fortunę."
    ],
    "privacyTitle": "Nic z tego, co wpiszesz, nie jest zapisywane",
    "privacyBody": "Daty urodzenia służą wyłącznie do obliczenia wyniku i nigdzie nie są zapisywane. Konto nie jest potrzebne. Nic z tego, co niesie link z wynikiem, nie trafia na serwer.",
    "disclaimer": "To tradycyjne odczytanie Saju oferowane jest jako materiał referencyjny. Nie jest to naukowa prognoza ani wyrok na przyszłość kogokolwiek."
  },
  "form": {
    "title": "Twoja data urodzenia",
    "description": "Znajomość godziny urodzenia wyostrza odczyt, ale nie jest wymagana.",
    "meLegend": "O tobie",
    "nickname": "Nazwa wyświetlana",
    "nicknamePlaceholder": "np. Ja",
    "nicknameHint": "Widoczna tylko na ekranie wyniku. Nie wpływa na obliczenia.",
    "gender": "Płeć",
    "male": "Mężczyzna",
    "female": "Kobieta",
    "genderUnspecified": "Wolę nie podawać",
    "genderHint": "Tradycyjny Saju interpretuje pozycje małżonka i dziecka inaczej w zależności od płci. Jeśli to pominiesz, te czynniki zostaną pominięte w obliczeniach.",
    "birthplace": "Miejsce urodzenia",
    "birthplaceHint": "Filary godzinowe są obliczane na podstawie rzeczywistego czasu słonecznego w miejscu urodzenia. Jeśli twoje miejsce urodzenia nie jest wymienione, wybierz najbliższe miasto.\nW obrębie Korei kontynentalnej różnica między miastami wynosi poniżej dwóch minut. Czas letni i historyczne zmiany stref czasowych są również uwzględnione.",
    "calendar": "Kalendarz",
    "solar": "Słoneczny",
    "lunar": "Księżycowy",
    "leapMonth": "Miesiąc przestępny",
    "birthDate": "Data urodzenia",
    "year": "Rok",
    "month": "Miesiąc",
    "day": "Dzień",
    "birthTime": "Godzina urodzenia",
    "unknownTime": "Nie znam godziny",
    "hour": "Godzina",
    "minute": "Minuta",
    "submit": "Obejrzyj reklamę i zobacz mój Saju",
    "submitNoAd": "Zobacz mój Saju",
    "submitting": "Obliczanie…",
    "errorInvalidDate": "Sprawdź datę urodzenia. Przy dacie księżycowej sprawdź też, czy wypada w miesiącu przestępnym.",
    "errorGeneric": "Obliczenie się nie powiodło. Spróbuj ponownie za chwilę."
  },
  "reading": {
    "chartTitle": "Twoja natalna karta",
    "chartHint": "Saju przedstawia rok, miesiąc, dzień i godzinę urodzenia jako dwa znaki każdy. Wszystko poniżej jest odczytywane z tych ośmiu znaków.",
    "pillarYear": "Rok",
    "pillarMonth": "Miesiąc",
    "pillarDay": "Dzień",
    "pillarHour": "Godzina",
    "pillarHourUnknown": "Brak godziny urodzenia",
    "dayMasterLabel": "Pień dzienny",
    "animalLabel": "Zodiak",
    "seasonLabel": "Pora roku urodzenia",
    "elementsTitle": "Siła żywiołów",
    "strongest": "Najsilniejszy",
    "scarcest": "Najrzadszy",
    "strengthTitle": "To, z czym się urodziłeś",
    "cautionTitle": "Na co uważać",
    "bodyStrengthTitle": "Siła pnia dziennego",
    "favorableLabel": "Czego teraz potrzebujesz"
  },
  "bodyStrength": {
    "STRONG": {
      "name": "Mocny pień dzienny",
      "body": "Żywioły wspierające Twój pień dzienny są w nadmiarze. Daje to własny napęd, ale łatwo przechyla szalę w jedną stronę — uspokajasz się dopiero wtedy, gdy coś odprowadza ten nadmiar."
    },
    "BALANCED": {
      "name": "Zrównoważony pień dzienny",
      "body": "To, co wspiera Twój pień dzienny, i to, co z niego czerpie, stoją niemal po równo. Zbyt blisko, by rozstrzygnąć na którąkolwiek stronę, więc za potrzebę uznajemy tu ten żywioł, którego jest najmniej."
    },
    "WEAK": {
      "name": "Słaby pień dzienny",
      "body": "Żywiołów wspierających Twój pień dzienny jest mało. Dobrze pożyczasz siłę z otoczenia, ale wyczerpujesz się, gdy długo trwasz w pojedynkę — rozwijasz się wtedy, gdy ktoś Cię podtrzymuje."
    }
  },
  "tenGods": {
    "BIGYEON": {
      "name": "Towarzysz (比肩)",
      "body": "Energia, która stoi ramię w ramię z tobą. Gruba, daje ci siłę, by stać na swoim gruncie i najpierw zająć swoje miejsce."
    },
    "GEOPJAE": {
      "name": "Rywal (劫財)",
      "body": "Energia, która przypomina ciebie, ale działa inaczej. Udziela siły do pchania, lecz w nadmiarze to, co posiadasz, ma tendencję do rozpraszania się."
    },
    "SIKSIN": {
      "name": "Ekspresja (食神)",
      "body": "Energia, która wydobywa to, co w tobie, na świat. Wyrażenie i prosta przyjemność życia pochodzą stąd; gdzie ona jest, tam jest swoboda."
    },
    "SANGGWAN": {
      "name": "Burzyciel (傷官)",
      "body": "Energia, która niepokoi ustalony porządek. Daje talent i ostry krawędź, ale w nadmiarze zderza się z zasadami i hierarchią."
    },
    "PYEONJAE": {
      "name": "Zmienne bogactwo (偏財)",
      "body": "Energia bogactwa szerokiego rodzaju. Aktywna i swobodna w tym, co ma, przynosi szanse z nieoczekiwanych źródeł."
    },
    "JEONGJAE": {
      "name": "Stałe bogactwo (正財)",
      "body": "Energia bogactwa stabilnego, zbieranego kawałek po kawałku. Tradycyjne Saju również interpretuje to jako pozycję małżonka dla mężczyzny."
    },
    "PYEONGWAN": {
      "name": "Wyzwanie (偏官)",
      "body": "Energia, która trzyma cię w napięciu i prostym. Stajesz się silny pod presją, chociaż w nadmiarze zawsze czujesz się ścigany."
    },
    "JEONGGWAN": {
      "name": "Autorytet (正官)",
      "body": "Energia porządku, która prostuje cię. Utrzymuje twoje imię i pozycję; tradycyjne Saju również interpretuje to jako pozycję małżonka dla kobiety."
    },
    "PYEONIN": {
      "name": "Nietypowe wsparcie (偏印)",
      "body": "Energia, która wspiera cię niezwykłą drogą. Daje moc do głębokiego kopania, chociaż w nadmiarze myśli wyprzedzają rękę."
    },
    "JEONGIN": {
      "name": "Opieka (正印)",
      "body": "Energia, która cię trzyma i podnosi. Daje naukę i coś, na czym można polegać; w nadmiarze, wychodzenie na własną rękę przychodzi późno."
    }
  },
  "dayMasters": {
    "甲": {
      "name": "Drewno Yang (甲)",
      "trait": "Wysokie drzewo rosnące prosto. Gdy kierunek jest już obrany, nie chwieje się i woli wytrzymać, niż się ugiąć."
    },
    "乙": {
      "name": "Drewno Yin (乙)",
      "trait": "Pnącze — giętka trawa. Ugina się pod okolicznościami, żeby iść dalej, i nie pęka."
    },
    "丙": {
      "name": "Ogień Yang (丙)",
      "trait": "Słońce w południe. Uczucia widać wprost, w pomieszczeniu robi się jaśniej, a wychodzenie przed szereg przychodzi naturalnie."
    },
    "丁": {
      "name": "Ogień Yin (丁)",
      "trait": "Światło świecy. Pali się cicho i długo, a ogrzewa najpierw tych najbliższych."
    },
    "戊": {
      "name": "Ziemia Yang (戊)",
      "trait": "Otwarty ląd i góry. Trudno tym zachwiać i łatwo się o to oprzeć, choć raz podjęta decyzja zmienia się powoli."
    },
    "己": {
      "name": "Ziemia Yin (己)",
      "trait": "Gleba pola. Przyjmuje to, co przyjdzie, i to wyhodowuje — raczej pielęgnuje, niż pokazuje."
    },
    "庚": {
      "name": "Metal Yang (庚)",
      "trait": "Nieobrobione żelazo. Zdecydowany i jednoznaczny, bez cierpliwości do spraw zawieszonych."
    },
    "辛": {
      "name": "Metal Yin (辛)",
      "trait": "Oszlifowany klejnot. Wyczulony smak i wysokie wymagania; niedbałość trudno tu puścić płazem."
    },
    "壬": {
      "name": "Woda Yang (壬)",
      "trait": "Rzeka i morze. Szerokie spojrzenie i oko do tego, jak sprawy płyną."
    },
    "癸": {
      "name": "Woda Yin (癸)",
      "trait": "Rosa i deszcz. Wsiąka cicho i czyta nastrój, zanim padną słowa."
    }
  },
  "dayMasterSigns": {
    "甲": [
      "Mówi, co myśli, nawet na pierwszym spotkaniu.",
      "Rzadko zmienia plan albo obietnicę, gdy ta już zapadła.",
      "Odmawia wprost, co potrafi zabrzmieć szorstko."
    ],
    "乙": [
      "Omija konfrontację i wybiera inną drogę.",
      "Sprawia wrażenie miękkiego, a i tak dociera tam, gdzie chciał.",
      "Najpierw czyta nastroje, zanim dołączy do grupy."
    ],
    "丙": [
      "Pierwszy zagaduje osoby dopiero co poznane.",
      "Sympatię i niechęć widać po twarzy.",
      "Bez starania ląduje w środku towarzystwa."
    ],
    "丁": [
      "Na początku cichy, przy bliskiej znajomości — uważny.",
      "Woli długą rozmowę z jedną czy dwiema osobami niż tłum.",
      "Zapamiętuje rzuconą mimochodem uwagę i wraca do niej później."
    ],
    "戊": [
      "Mówi mało; głos rzadko mu się podnosi nawet w pilnych sprawach.",
      "Gdy inni odkładają decyzję, na końcu rozstrzyga to właśnie on.",
      "Raz powiedziane „nie” zostaje „nie” na długo."
    ],
    "己": [
      "Słucha dłużej, niż mówi.",
      "Trudno mu odmówić, więc praca się na nim piętrzy.",
      "To, czym po cichu się zajął, wychodzi na jaw dopiero później."
    ],
    "庚": [
      "Decyduje szybko i mówi o tym od razu.",
      "Nie łagodzi przekazu, co bywa odbierane jako chłód.",
      "Widocznie się niecierpliwi, gdy sprawa się wlecze."
    ],
    "辛": [
      "Ma jasne kryteria co do ubrań i rzeczy, które wybiera.",
      "Nie umie przepuścić byle jak zrobionej roboty bez uwagi.",
      "Skąpy w pochwałach, ale gdy już uzna, to na serio."
    ],
    "壬": [
      "Łatwo dogaduje się z najróżniejszymi ludźmi.",
      "Wcześniej mówi o tym, co będzie potem, niż o tym, co jest teraz.",
      "Źle znosi przywiązanie do jednego miejsca na dłużej."
    ],
    "癸": [
      "Mówi mało, a sytuację odczytał dokładnie.",
      "Pierwszy zauważa zmianę nastroju.",
      "Trzyma wnętrze blisko siebie, więc poznanie go zabiera czas."
    ]
  },
  "animalTraits": {
    "rat": "Szybko zauważa i szybko zabezpiecza to, co ważne. Pierwszy rusza w kryzysie.",
    "ox": "Z pozoru powolny, ale doprowadza rzeczy do końca. Czego się podejmie, tego nie porzuca.",
    "tiger": "Nieustraszony i zawsze z przodu. Nie przejdzie obojętnie obok niesprawiedliwości.",
    "rabbit": "Łagodny i spostrzegawczy. Umie obejść, zamiast zderzyć się czołowo.",
    "dragon": "Wielkie serce i wysokie ideały. Rzadko zadowala się zwyczajnością.",
    "snake": "Zachowuje zdanie dla siebie i myśli głęboko. Ocenia trafnie.",
    "horse": "Pogodny i niespokojny. Najtrudniej znosi ogrodzenie.",
    "goat": "Ciepła i uważna. Ostre słowa nosi w sobie długo.",
    "monkey": "Pomysłowa i szybko się dostosowuje. Nudzi ją powtarzalność.",
    "rooster": "Pracowity i skrupulatny. Nie zostawi rzeczy nie na swoim miejscu.",
    "dog": "Wierny do końca, gdy raz zaufa. Zdrada rani go szczególnie mocno.",
    "pig": "Hojna i szczera. Ufa łatwo, czasem swoim kosztem."
  },
  "result": {
    "title": "Twoja interpretacja Saju",
    "recalculate": "Zacznij od nowa",
    "copyLink": "Kopiuj link do wyniku",
    "copied": "Skopiowano",
    "missingInput": "Nie udało się odczytać tego wyniku. Podaj daty jeszcze raz.",
    "partialTime": "Godzina urodzenia nie została podana, więc filar godziny pominięto. Jej dodanie uściśli odczyt.",
    "engineVersion": "Obliczono według",
    "disclaimer": "To jest tradycyjna interpretacja Saju oferowana jako materiał referencyjny. Nie jest to naukowa prognoza ani werdykt dotyczący twojej przyszłości.",
    "seeToday": "Zobacz dzisiejszą fortunę",
    "seeReading": "Zobacz swój wykres urodzeniowy"
  },
  "today": {
    "menu": "Dzienna fortuna",
    "title": "Dzienna fortuna",
    "pillarLabel": "Dzienny filar",
    "scoreLabel": "Dzienny wynik",
    "grades": {
      "DAEGIL": {
        "name": "Bardzo pomyślny",
        "body": "Energia dzisiaj spotyka się z twoim wykresem pod najlepszym kątem. Dobry dzień, aby zająć się tym, co odkładałeś."
      },
      "GIL": {
        "name": "Pomyślny",
        "body": "Dzisiaj wszystko idzie z tobą. To, co zazwyczaj robisz, idzie łatwiej niż zwykle."
      },
      "PYEONG": {
        "name": "Równy",
        "body": "Nic cię nie popycha i nic cię nie blokuje. Rób to, co zwykle, a dostaniesz to, co zwykle."
      },
      "JUUI": {
        "name": "Uważaj",
        "body": "Część dzisiejszej energii działa przeciwko twojemu wykresowi. Lepiej spędzić czas na kończeniu rzeczy niż na zaczynaniu ich."
      },
      "JOSIM": {
        "name": "Zachowaj ostrożność",
        "body": "Dzisiaj energia wpływa na twój wykres. Jeśli decyzja może poczekać, niech czeka."
      }
    },
    "categories": {
      "wealth": "Pieniądze",
      "love": "Miłość",
      "career": "Praca",
      "health": "Zdrowie"
    },
    "luckyTitle": "Trzymaj to blisko dzisiaj",
    "luckyElement": "Element",
    "luckyColor": "Kolor",
    "luckyDirection": "Kierunek",
    "luckyTime": "Godziny",
    "luckyNumber": "Liczby",
    "luckyColors": {
      "TEAL": "turkusowy",
      "GREEN": "zielony",
      "RED": "czerwony",
      "ORANGE": "pomarańczowy",
      "YELLOW": "żółty",
      "OCHRE": "ochrowy",
      "WHITE": "biały",
      "GOLD": "złoty",
      "BLACK": "czarny",
      "NAVY": "granatowy"
    },
    "luckyDirections": {
      "EAST": "Wschód",
      "SOUTH": "Południe",
      "CENTER": "Centrum",
      "WEST": "Zachód",
      "NORTH": "Północ"
    },
    "basisTitle": "Skąd pochodzi ten wynik",
    "factors": {
      "TODAY_IS_YONGSIN": "Dziś element jest tym, czego potrzebuje twój wykres",
      "TODAY_GENERATES_YONGSIN": "Dziś element zasila ten, którego potrzebuje twój wykres",
      "TODAY_IS_GISIN": "Dziś element jeszcze bardziej wspiera stronę, która już jest pełna",
      "TODAY_CONTROLS_YONGSIN": "Dziś element tłumi ten, którego potrzebuje twój wykres",
      "TODAY_GENERATES_SELF": "Dziś element wspiera twojego dnia mistrza",
      "TODAY_SAME_ELEMENT": "Dziś element jest taki sam jak twój dzień mistrza",
      "SELF_GENERATES_TODAY": "Twój dzień mistrza przepływa w dzisiejszy element",
      "TODAY_CONTROLS_SELF": "Dziś element tłumi twojego dnia mistrza",
      "SELF_CONTROLS_TODAY": "Twój dzień mistrz kontroluje dzisiejszy element",
      "WEAK_HELPED": "Słaby dzień mistrz otrzymuje dzisiaj siłę",
      "STRONG_OVERFED": "Silny dzień mistrz staje się dzisiaj cięższy",
      "STRONG_DRAINED": "Silny dzień mistrz jest dzisiaj zrównoważony",
      "WEAK_BURDENED": "Słaby dzień mistrz otrzymuje dzisiaj więcej do noszenia",
      "BRANCH_SAMHAP": "Dzisiejsza gałąź tworzy pełny trygon z twoim wykresem",
      "BRANCH_BANHAP": "Dzisiejsza gałąź tworzy półtrygon z twoim wykresem",
      "BRANCH_YUKHAP": "Dzisiejsza gałąź tworzy sześciokrotność z twoim wykresem",
      "BRANCH_SAME": "Dzisiejsza gałąź jest taka sama jak jedna w twoim wykresie",
      "BRANCH_NEUTRAL": "Dzisiejsza gałąź nie ma szczególnego związku z twoim wykresem",
      "BRANCH_WONJIN": "Dzisiejsza gałąź jest w cichej dysharmonii z twoim wykresem",
      "BRANCH_CHUNG": "Dzisiejsza gałąź koliduje z twoim wykresem"
    },
    "bookmarkHint": "Nie przechowujemy daty urodzenia, więc musisz ją wprowadzać za każdym razem. **Dodaj ten link do zakładek** i otworzy on codzienną fortune na dany dzień.",
    "disclaimer": "Dzienna fortune przekształca relację między filarem dnia a twoim wykresem w wynik. To notatka o tym, jak spędzić dzień, a nie przepowiednia."
  },
  "ads": {
    "label": "Reklama"
  },
  "selfAds": {
    "label": "Usługi pokrewne",
    "comingSoon": "Wkrótce",
    "purposes": {
      "naminglink": "Koreańskie i hanja imiona wybrane według znaczenia i liczby kresek",
      "inyeonlink": "Jak dwie osoby pasują do siebie, czytane z ich czterech filarów i znaków zodiaku",
      "sajulink": "Twoje własne cztery filary i jak dzisiaj się z nimi łączy",
      "dreamslink": "Interpretacje snów oparte na słowniku symboli",
      "placelink": "Miejsca na randkę w Korei, dzielone i polecane"
    }
  },
  "analyzing": {
    "title": "Budowanie twojego wykresu",
    "quotes": [
      "Saju nie jest stałą odpowiedzią. To jeden z języków do zrozumienia siebie.",
      "Wiedza o tym, z czym się urodziłeś, a życie tym to dwie różne rzeczy.",
      "Silna pozycja to kwestia wykorzystania; słaba, to kwestia wypełnienia.",
      "Te same osiem znaków tworzy inny dzień w zależności od tego, jak je odczytujesz.",
      "Lepiej znać sposób wykorzystania posiadanego dnia niż czekać na dobry dzień.",
      "Pozycja, którą ludzie nazywają słabością, zazwyczaj jest miejscem największego wzrostu.",
      "Niektóre energie są pchane przez sezon; inne musisz stworzyć sam.",
      "To, co jest ważniejsze niż wynik, to jak to odczytujesz.",
      "Dzienna fortuna to pogoda na jeden dzień, a nie klimat, w którym żyjesz.",
      "Znajomość swojego Saju oznacza widzenie siebie, a nie patrzenie w przyszłość."
    ],
    "watching": "Trwa reklama",
    "remaining": "Wynik otworzy się za: {seconds} s"
  },
  "reportDetail": {
    "depthTitle": "Bliższe spojrzenie na twój wykres",
    "vitalityTitle": "Co popycha pora roku",
    "vitalityHint": "Słupki pokazują, ile jest danego żywiołu; ta tabela mówi, czy miesiąc urodzenia go wzmacnia. Ta sama ilość ma różną siłę w wang niż w sa.",
    "vitalities": {
      "WANG": {
        "name": "Wang (旺)",
        "body": "w swojej najsilniejszej formie"
      },
      "SANG": {
        "name": "Sang (相)",
        "body": "następna w sile"
      },
      "HYU": {
        "name": "Hyu (休)",
        "body": "odpoczywa po swojej kolei"
      },
      "SU": {
        "name": "Su (囚)",
        "body": "trzymana w sobie, trudna do ruszenia"
      },
      "SA": {
        "name": "Sa (死)",
        "body": "najsłabszy"
      }
    },
    "rawLabel": "Przed sezonem",
    "strengthLabel": "Po sezonie",
    "earthSeasonNote": "Urodzony w miesiącu przejściowym (辰未戌丑), więc ziemia jest również liczona jako wang.",
    "allyRatioLabel": "Wskaźnik sojusznika",
    "allyRatioHint": "Udział, który mają razem gwiazdy zasobów i towarzyszy. Powyżej 45% jest silne, poniżej 35% jest słabe. Liczba jest wydrukowana, abyś mógł zobaczyć, jak blisko była decyzja.",
    "stemGodsTitle": "Co każdy filar znaczy dla ciebie",
    "stemGodsHint": "Mierzone od twojego dnia mistrza, każdy pozostały pień przyjmuje jedną z dziesięciu nazw bogów. Które z nich są silne, mówi wiele o temperamencie.",
    "pillarColumn": "Filar",
    "tenGodColumn": "Dziesięć bogów",
    "meaningColumn": "Co to oznacza",
    "yearOutlookTitle": "Prognoza na ten rok",
    "domainsTitle": "Cztery obszary życia",
    "yongsinTitle": "Czego teraz potrzebujesz",
    "tenGodDepthTitle": "Co wyróżnia się w tym wykresie",
    "disclaimerTitle": "Jak czytać ten dokument",
    "yearOutlookUnavailable": "Nie udało się odczytać filaru tego roku, więc ta sekcja pozostaje pusta. Wszystko na stronach przed nią nadal obowiązuje.",
    "factorsTitle": "Skąd pochodzi wynik w każdej z dziedzin",
    "factorsHint": "Ekran pokazuje nazwy czynników; tutaj każdy z nich jest wydrukowany z punktami, które dodał lub odjął.",
    "deltaColumn": "Punkty",
    "appendixTitle": "Jak zbudowano ten wykres",
    "timeCorrectionLabel": "Godzina urodzenia",
    "timeCorrectionApplied": "Skorygowana do prawdziwego czasu słonecznego i odczytana jako {time}.",
    "timeCorrectionNone": "Nie podano godziny urodzenia, więc filar godziny został pominięty.",
    "timeCorrectionDateShift": "Korekta przeniosła datę na {date}, więc użyto filaru tego dnia.",
    "calendarLabel": "Data, z której sporządzono wykres",
    "solarLabel": "Słoneczna",
    "lunarLabel": "Księżycowa",
    "lunarUnavailable": "Ta data nie znajduje się w tabeli almanachu, więc nie pokazano daty lunarnej."
  },
  "report": {
    "title": "Czytanie życia i nadchodzący rok",
    "body": "Przekształcamy tę interpretację w PDF i dodajemy warstwę, której ekran nigdy nie pokazuje: siłę Twojego day master i to, czego teraz potrzebuje, ten gods Twoich czterech filarów, cztery obszary życia odczytane z Twojego natal chart z liczbami za nimi, oraz prognozę na ten rok. Dzisiejsza fortuna nie jest uwzględniona — zmienia się codziennie, więc pozostaje darmowa na ekranie.",
    "buyButton": "Zapłać {price} i pobierz",
    "preparing": "Jeszcze niedostępne",
    "ordering": "Tworzymy zamówienie…",
    "paying": "Przetwarzamy płatność…",
    "issuing": "Przygotowujemy raport…",
    "done": "Pobrano. Użyj przycisku poniżej, aby pobrać jeszcze raz.",
    "failed": "Płatność albo pobieranie nie powiodło się. Spróbuj ponownie za chwilę.",
    "retry": "Pobierz ponownie",
    "contents": [
      "Twój day master i temperament — podsumowanie, mocne strony i uwagi",
      "Twój natal chart i waga pięciu elementów — osiem znaków",
      "Siła twojego day master, oraz energia, której teraz potrzebuje",
      "Sezonowa witalność i ten gods twoich czterech filarów",
      "Co wyróżnia się w tym wykresie — grube ten gods i te, które są nieobecne",
      "Cztery obszary życia odczytane z twojego natal chart, z liczbami za każdym",
      "Poprawka na prawdziwy czas słoneczny i prognoza na ten rok"
    ],
    "consentLabel": "Rozumiem, że jest to treść cyfrowa dostarczana natychmiast po płatności, oraz że **po zakończeniu pobierania odstąpienie z powodu zwykłej zmiany zdania jest ograniczone**.",
    "consentRequired": "Potwierdź warunki odstąpienia przed płatnością.",
    "productInfoTitle": "Informacje o produkcie",
    "productInfo": [
      [
        "Dostawca",
        "{brand}"
      ],
      [
        "Format",
        "Jeden dokument PDF (9 stron A4), pobrany na ekranie zaraz po dokonaniu płatności."
      ],
      [
        "Wymagania",
        "Dowolne urządzenie otwierające PDF. Bez instalacji i bez konta."
      ],
      [
        "Okres korzystania",
        "Bez ograniczeń. Pobrany plik zostaje u Ciebie."
      ],
      [
        "Ponowne pobranie",
        "Do pięciu razy w ramach tego samego zamówienia. Nie przechowujemy kopii, więc po opuszczeniu ekranu wyniku nie da się jej odtworzyć."
      ],
      [
        "Odstąpienie",
        "Pełny zwrot przed rozpoczęciem pobierania. Po jego zakończeniu odstąpienie z powodu zmiany zdania jest ograniczone (art. 17 ust. 2 koreańskiej ustawy o handlu elektronicznym)."
      ],
      [
        "Koszty zwrotu",
        "Brak — treść cyfrowa, nic nie jest wysyłane."
      ]
    ],
    "refundContact": "W sprawie zwrotów i pytań skontaktuj się z obsługą klienta albo napisz na adres poniżej. Jeśli dokument nie mógł powstać albo pobrana kwota różni się od zamówienia, zwracamy całość.",
    "pdfLanguageNotice": "PDF jest tworzony w tym samym języku co ten ekran."
  },
  "fallbackReport": {
    "summary": "To {dayMaster} dzień mistrza urodzony w energii {season}. W całym wykresie {strongest} jest najgrubszy, a {scarcest} jest najcieńszy. Wszystko poniżej wynika z tych ośmiu znaków — każda liczba i każdy filar są tutaj obliczone, a nie wybrane.",
    "personality": "Twój dzień mistrza to {dayMaster} — energia {element} — a ten wykres odczytuje się jako {strengthName}. Która strona jest grubsza, co wspiera dzień mistrza lub co z niego czerpie, kształtuje ziarno, a w codziennym życiu objawia się to w ten sposób.",
    "cautions": {
      "STRONG": [
        "Pchasz na tyle mocno, że często zauważasz przechylenie dopiero po tym, jak się wydarzy.",
        "Nawet tam, gdzie pomoc jest dostępna, kończysz na tym, że radzisz sobie sam, co powiększa zadanie.",
        "Rzeczy się stabilizują, gdy zostawiasz miejsce na to, co odciąga nadmiar."
      ],
      "BALANCED": [
        "Nic nie przechyla cię w żadną stronę, więc odłożona decyzja po prostu pozostaje odłożona.",
        "Dobrze dostosowujesz się do sytuacji, co może zatarć, gdzie jest twoja własna granica.",
        "Kierowanie się w stronę tego, co jest teraz najcieńsze, daje ci kierunek do trzymania."
      ],
      "WEAK": [
        "Wytrzymywanie samemu wyczerpuje cię szybciej, niż się spodziewasz.",
        "Bez wsparcia decyzje się ślizgają, a moment mija.",
        "Trzymanie blisko wspierających ludzi nie jest słabością w tym wykresie — to metoda."
      ]
    },
    "scarcityCaution": "Najcieńszy element teraz to {scarcest}. Cokolwiek ten element rządzi, tam działasz najwolniej.",
    "elementBalance": "Według siły, {strongest} prowadzi z {strongestPct}%, a {scarcest} pozostaje w tyle z {scarcestPct}%. Twój miesiąc urodzenia znajduje się w {season}, co jeszcze bardziej podnosi tę energię — ta sama ilość ma różną moc w zależności od tego, czy sezon ją wspiera. Teraz potrzebujesz {favorable}, a sprawy ułatwiają się, gdy ta energia jest uzupełniona.",
    "todayHeadline": "Dziś to {grade}",
    "todayMessage": "Dziś zdobywasz {score}, ocenione jako {gradeName}. {gradeBody} Filary dnia to {pillar}, a największym czynnikiem wpływającym na ten wynik było „{topFactor}”.",
    "todayAdvice": {
      "HIGH": "Dobry dzień na odebranie wiadomości lub uporządkowanie spraw, które odkładałeś — chociaż lepiej nie próbować skończyć wszystkiego dzisiaj.",
      "MID": "Rób to, co zwykle, a dostaniesz to, co zwykle. Zamiast zaczynać coś nowego, posuń jedną rzecz, którą już masz, o krok naprzód.",
      "LOW": "Część dzisiejszego dnia jest sprzeczna z wykresem. Lepiej spędzić czas na kończeniu i sprawdzaniu niż na zaczynaniu."
    },
    "luckyNote": "Dziś szczęśliwym elementem jest {element}. Zakres {colors}, strona {direction} oraz godziny wokół {time} to miejsca, gdzie ta energia jest najgęstsza.",
    "domains": {
      "wealth": "Czytając z wykresu urodzeniowego, pieniądze przychodzą do {score}. Waży to, co zarabiasz, razem z siłą, by to unieść.",
      "love": "Czytając z wykresu urodzeniowego, uczucia przychodzą do {score}. Waży to, co związane z gwiazdą małżonka, razem z kształtem miejsca, w którym się znajduje.",
      "career": "Czytając z wykresu urodzeniowego, praca przychodzi do {score}. Waży to, co bierzesz na siebie, razem z tym, co dajesz.",
      "health": "Czytając z wykresu urodzeniowego, zdrowie przychodzi do {score}. Waży to, co zrównoważone od urodzenia, razem z tym, co się z tym zderza."
    },
    "yearOutlook": "Filarem tego roku jest {pillar}, niosąc {element}. {relation} Ta analiza dotyczy tylko tego, jak filar roku spotyka się z tym, czego teraz potrzebujesz; nie rozbija roku na miesiące.",
    "yearRelations": {
      "YONGSIN": "Element, którego potrzebujesz, przychodzi bezpośrednio w tym roku. Odpowiedni czas, aby wydobyć to, co odłożyłeś.",
      "GENERATES": "Ten rok wspiera element, którego potrzebujesz, więc obecny czas staje się łagodniejszy — nie od razu, ale stopniowo.",
      "GISIN": "Ten rok ponownie popycha w kierunku, w którym już się skłaniasz. Lepiej spędzić czas na zamykaniu tego, co masz, niż na otwieraniu czegoś nowego.",
      "CONTROLS": "Coś w tym roku naciska na element, którego potrzebujesz, więc decyzje przychodzą wolniej. Ustalenie własnych terminów pomaga.",
      "NEUTRAL": "Ten rok ani nie koliduje, ani nie wspiera tego, czego potrzebujesz. Utrzymanie zajmowanej pozycji to lepsza wymiana."
    },
    "disclaimer": "Tradycyjna referencja myeongri, nie naukowa prognoza ani stwierdzenie, co musi się wydarzyć.",
    "tenGodDepth": {
      "BIGYEON": {
        "thick": "Bi-kyen jest gruby. Budujesz własnymi rękami, a nie pożyczając je, co czyni cię silnym w doprowadzaniu zadania do końca. Ale przyjmowanie pomocy to również umiejętność, a traktowanie tego jako słabości sprawia, że dźwigasz wszystko sam — i zderzasz się, dzieląc się, z kimkolwiek stoi obok ciebie. Gdzie praca jest dzielona, oferowanie ręki jako pierwsze okazuje się szybszą drogą.",
        "absent": "Bi-kyen jest nieobecny. Ruch z innymi bardziej ci odpowiada niż trzymanie własnej pozycji. Długo się wahasz, gdy decyzja należy tylko do ciebie, a przyspieszasz, gdy ktoś jest z tobą. Kiedy pozycja należy do ciebie, warto ćwiczyć popychanie."
      },
      "GEOPJAE": {
        "thick": "Geopjae jest gruby. Ruchasz się pierwszy tam, gdzie inni się wahają. Ta siła nie przekształca się łatwo w utrzymanie, więc to, co zarobisz, nie zostaje długo w rękach. Decydowanie z wyprzedzeniem, gdzie idą pieniądze, nie jest oszczędnością w tym wykresie — to metoda.",
        "absent": "Geopjae jest nieobecny. Rzadko przymuszasz coś do działania i omijasz rywalizację. Mało tracisz, ale jesteś spóźniony, gdy coś musi być mocno pchnięte. Gdzie stawka jest realna, ustalenie własnego terminu pomaga."
      },
      "SIKSIN": {
        "thick": "Siksin jest gruby. To, co jest w środku, łatwo wychodzi na zewnątrz, więc tworzenie, hodowanie i karmienie to komfortowy grunt. Dobrze radzisz sobie w pracy, która jest wykonywana powoli i długo, a wyniki przychodzą późno, ale systematycznie. Gdy komfort się wydłuża, jednak osiedlasz się, zamiast się rozwijać.",
        "absent": "Siksin jest nieobecny. Kanał z wnętrza na zewnątrz jest cienki: myślenie jest obecne, ale jego wyrażenie jest spóźnione. Czekanie, aż wszystko będzie gotowe, opóźnia rozpoczęcie. Wystawienie czegoś w połowie ukończonego nie jest stratą w tym wykresie."
      },
      "SANGGWAN": {
        "thick": "Oficer rani jest silny. Zauważasz, co jest nie na miejscu w ustalonym schemacie, zanim ktokolwiek inny, i masz słowa, by to nazwać. Błyszczysz tam, gdzie rzeczy są tworzone, a zderzasz się tam, gdzie są przechowywane. To, jak zostanie wypowiedziane właściwe słowo, ma tu znaczenie równie wielkie jak jego dostrzeganie.",
        "absent": "Oficer rani jest nieobecny. Szukasz sposobu w ramach, zamiast je trząść. Rzadko wchodzisz w konflikt z ludźmi, ale pozwalasz rzeczom przechodzić tam, gdzie powinny się zmienić, co prowadzi do frustracji. Lepiej nie odkładać na później słowa, które musi być wypowiedziane."
      },
      "PYEONJAE": {
        "thick": "Zasoby pośrednie są silne. Trzymasz rękę w kilku miejscach i łapiesz okazje szeroko, więc rzeczy otwierają się w niespodziewanych zakątkach. To, co jest rozprzestrzenione, musi być również pielęgnowane, chociaż ta strona interesuje cię mniej — więc ciągle nie udaje ci się zebrać tego, co otworzyłeś. Zamknięcie jednego przed otwarciem następnego to porządek, którego potrzebuje ten wykres.",
        "absent": "Zasoby pośrednie są nieobecne. Wolisz pewne rzeczy na znanym gruncie, zamiast szeroko się rozprzestrzeniać. Jest mniej rzeczy, które mogą cię wstrząsnąć, a większe szanse przechodzą obok równie często. Poszerzanie swojego zasięgu o jedną dłoń na raz pomaga."
      },
      "JEONGJAE": {
        "thick": "Zasoby bezpośrednie są silne. Liczysz, co przychodzi i co wychodzi, i budujesz — więc grunt pod tobą umacnia się z czasem. Sięganie tylko po pewne rzeczy sprawia, że spóźniasz się na okazje, a oszczędność w nadmiarze sprawia, że twoja ręka staje się ciężka tam, gdzie powinna się otworzyć. Zdecydowanie z góry, na co pieniądze są przeznaczone, pomaga.",
        "absent": "Zasoby bezpośrednie są nieobecne. Stabilna strona gromadzenia jest słaba, więc zarządzanie tym, co przychodzi, ciągle się opóźnia. Zarabianie i utrzymywanie to różne umiejętności; ten wykres musi nauczyć się drugiej z nich osobno. Zasady, które poruszają pieniądze bez twojego decydowania za każdym razem, pasują ci dobrze."
      },
      "PYEONGWAN": {
        "thick": "Oficer pośredni jest silny. Presja wydobywa twoją siłę, a ty ponosisz odpowiedzialność, którą inni uważają za ciężką. Kiedy napięcie nigdy nie ustępuje, twardnieje w uczuciu bycia ściganym, a odpoczynek przestaje być odpoczynkiem. Ustalenie czasu na przerwę nie jest lenistwem w tym wykresie.",
        "absent": "Oficer pośredni jest nieobecny. Niewiele cię przyciska, co jest łatwe dla umysłu, ale siła do utrzymania się w kryzysie jest słaba. Radzisz sobie znacznie lepiej, gdy termin lub obietnica są ustalane z zewnątrz."
      },
      "JEONGGWAN": {
        "thick": "Oficer bezpośredni jest silny. Twoja pozycja i linie, które utrzymujesz, są jasne, a ich przestrzeganie to źródło twojej stabilności — budujesz zaufanie w ramach systemów. Tam, gdzie zasady się chwiej, jesteś powolny w ocenie, a tam, gdzie plansza należy do ciebie, czujesz się ograniczony.",
        "absent": "Oficer bezpośredni jest nieobecny. Sposób, który sam tworzysz, pasuje ci lepiej niż miejsce przypisane z zewnątrz. To jest wolność, ale standard łatwo się chwiej; zapisanie swoich własnych zasad, jakby były polityką, pomaga."
      },
      "PYEONIN": {
        "thick": "Zasoby pośrednie są silne. Idziesz drogą, którą inni pomijają, i budujesz własną głębię. Nauka i ocenianie są silne, ale myśli wyprzedzają rękę i możesz być zmęczony, zanim zaczniesz. Poruszanie się w połowie gotowości pasuje do tego wykresu.",
        "absent": "Zasoby pośrednie są nieobecne. Uczysz się przez zderzanie się z rzeczami, a nie przez kopanie. Nie jesteś wolny w nauce, ale długotrwałe studiowanie w pojedynkę ci nie odpowiada. Zadawanie pytań ludziom i uczenie się na miejscu jest szybsze."
      },
      "JEONGIN": {
        "thick": "Bezpośredni Zasób jest gruby. To, co cię podtrzymuje, jest obfite, więc nauka i miejsce, na które możesz się oprzeć, nigdy się nie kończą. Ta stabilność sprawia, że krok naprzód jest opóźniony, a przygotowanie staje się powodem, dla którego początek jest odkładany. Warto mieć jedno miejsce, gdzie to, co otrzymałeś, wraca na zewnątrz.",
        "absent": "Bezpośredni Zasób jest nieobecny. Stworzyłeś własne oparcie, więc stawanie na własnych nogach zaczęło się wcześnie. Prośba o pomoc jest jednak nieznana, a ty trzymasz się sam, nawet gdy nie musisz. W tym wykresie pytanie jest warte wiele."
      }
    },
    "natalFactors": {
      "WEALTH_STARS": "Ile bogactwa (財星) niesie wykres — grubość tego, co obsługujesz i zbierasz.",
      "WEALTH_STRONG_BODY": "Dzień mistrza jest pełny, więc masz siłę, by nosić bogactwo.",
      "WEALTH_WEAK_BODY": "Dzień mistrza jest cienki, więc bogactwo jest trudne do noszenia, nawet jeśli istnieje.",
      "WEALTH_YONGSIN": "To, czego teraz potrzebujesz, jest tym samym żywiołem co gwiazdy bogactwa, więc ta ziemia przychodzi łatwiej.",
      "LOVE_SPOUSE_STAR": "Ile gwiazdy małżonka niesie wykres — bezpośrednie bogactwo dla mężczyzn, bezpośredni urzędnik dla kobiet.",
      "LOVE_SPOUSE_PALACE": "Gwiazda małżonka znajduje się w twoim dniu gałęzi, w pałacu małżonka, więc miejsce jest zajęte.",
      "LOVE_PALACE_CHUNG": "Pałac małżonka koliduje z inną gałęzią, więc to miejsce jest niestabilne.",
      "LOVE_GENDER_UNKNOWN": "Nie wprowadzono płci, więc gwiazda małżonka nie została policzona. Wartość dzieli się między gwiazdy bogactwa i urzędników według płci, a my nie wybieramy jednej arbitralnie.",
      "CAREER_OFFICER": "Gwiazdy urzędników (正官·偏官) w wykresie — grubość tego, co podejmujesz i utrzymujesz.",
      "CAREER_OUTPUT": "Gwiazdy wyjścia (食神·傷官) w wykresie — grubość tego, co wydajesz i wyrażasz.",
      "CAREER_STRONG_BODY": "Mistrz dnia jest silny, więc korzysta z gwiazd urzędniczych, zamiast być przez nie przytłaczany.",
      "HEALTH_BALANCE": "Jak równomiernie siedzą pięć elementów — im bardziej przechyla się w jedną stronę, tym większe obciążenie spada na to, co ten element rządzi.",
      "HEALTH_CHUNG": "Ilość par gałęzi, które kolidują w obrębie wykresu.",
      "HEALTH_EXTREME_BODY": "Mistrz dnia przechyla się mocno w jedną stronę, co samo w sobie jest obciążeniem. Zrównoważony mistrz dnia nic tutaj nie traci."
    },
    "yongsinDepth": {
      "STRONG": "Elementy wspierające twojego day master są pełne. Daje ci to własną siłę, ale łatwo przechyla się na jedną stronę, więc to, czego teraz potrzebujesz, to nie więcej wsparcia — to coś, co odciągnie nadmiar. {favorable} to robi. Gdzie ten element sięga — wydawanie, przyjmowanie, gromadzenie — tam się osiedlasz.",
      "BALANCED": "To, co wspiera twojego day master i to, co z niego czerpie, jest bliskie równowagi. Zbyt bliskie, by jednoznacznie określić, więc tutaj czytamy to, co jest najcieńsze jako to, czego potrzebujesz: {favorable}. Wykres, który nie przechyla się, dobrze się dostosowuje, ale zaciera własną linię, więc kierowanie się w stronę cienkiego miejsca daje ci kierunek do utrzymania.",
      "WEAK": "Elementy wspierające twojego day master są cienkie. Dobrze pożyczasz siłę z otoczenia, ale męczysz się, trzymając się samemu, więc to, czego teraz potrzebujesz, to coś, co cię wesprze i napełni. {favorable} to robi. Trzymanie wspierających rzeczy blisko nie jest słabością w tym wykresie — to metoda."
    }
  },
  "footer": {
    "privacy": "Prywatność",
    "terms": "Regulamin",
    "refund": "Zwroty",
    "pricing": "Cennik",
    "legalEntity": "Firma",
    "representative": "Przedstawiciel",
    "businessNumber": "Rejestracja",
    "mailOrderNumber": "Handel online",
    "address": "Adres",
    "customerCenter": "Obsługa klienta",
    "email": "Email",
    "privacyOfficer": "Ochrona danych",
    "hostingProvider": "Hosting",
    "providedBy": "Dostarczane przez",
    "effective": "Obowiązuje od",
    "backHome": "Powrót na stronę główną"
  },
  "animals": {
    "rat": "Szczur",
    "ox": "Wół",
    "tiger": "Tygrys",
    "rabbit": "Królik",
    "dragon": "Smok",
    "snake": "Wąż",
    "horse": "Koń",
    "goat": "Koza",
    "monkey": "Małpa",
    "rooster": "Kogut",
    "dog": "Pies",
    "pig": "Świnia"
  },
  "elements": {
    "WOOD": "Drewno",
    "FIRE": "Ogień",
    "EARTH": "Ziemia",
    "METAL": "Metal",
    "WATER": "Woda"
  }
};
