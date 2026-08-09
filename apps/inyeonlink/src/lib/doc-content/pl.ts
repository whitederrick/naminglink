import type { DocPage, NoticeCopy } from "./types";
import type { DocKey } from "./ko";

/** Polski — `scripts/translate-doc-content.ts`가 만든다. 손으로 고치지 말 것. */
export const PL_DOCS = {
  "about": {
    "eyebrow": "O nas",
    "title": "O Inyeon-Link",
    "summary": "Porównujemy dwa wykresy urodzeniowe w tradycji saju. Oto co obliczamy i co odmawiamy twierdzenia.",
    "backLabel": "Strona główna",
    "sections": [
      {
        "title": "Co robimy",
        "blocks": [
          {
            "p": "Inyeon-Link tworzy dwa wykresy urodzeniowe na podstawie dat i godzin urodzenia i pokazuje **jak dwa zestawy energii się spotykają.** Możesz również przeczytać swój własny wykres osobno i zobaczyć, które temperamenty mogą Ci odpowiadać."
          },
          {
            "p": "Czytanie na ekranie jest **darmowe i nie wymaga konta.** Płatne elementy to raporty PDF zawierające dane, których ekran nigdy nie pokazuje — siły elementów, pary dziesięciu bogów i relacje we wszystkich czterech filarach."
          }
        ]
      },
      {
        "title": "Co obliczamy",
        "blocks": [
          {
            "p": "Wykresy są tworzone na podstawie **koreańskiego kalendarza lunisolarnego**, a czas urodzenia jest korygowany do **prawdziwego czasu słonecznego** dla miejsca urodzenia — ta sama godzina zegarowa oznacza inną pozycję słońca w zależności od miejsca, w którym się urodziłeś."
          },
          {
            "p": "Wyniki pochodzą tylko z ustalonych zasad. Tradycyjne pojęcia — dziesięciu bogów, relacje gałęzi, wspierający element — są wyrażane jako zasady, więc **ten sam input zawsze daje ten sam wynik.** Gdy zasada się zmienia, uruchamiamy regresję, aby upewnić się, że starsze odczyty nie uległy zmianie."
          },
          {
            "p": "**Nie ma zaangażowanej sztucznej inteligencji.** Każde zdanie na ekranie to stały tekst przypisany do obliczonego wyniku."
          }
        ]
      },
      {
        "title": "Czego nie będziemy twierdzić",
        "blocks": [
          {
            "ul": [
              "**Nie wróżymy.** Nic tutaj nie mówi Ci, abyś kogoś szukał lub unikał. To odniesienie wyciągnięte z tradycji.",
              "**Nie przechowujemy tego, co wpisujesz.** Szczegóły urodzenia są używane w momencie obliczenia i nigdy nie są zapisywane; linki do wyników znajdują się w części URL, którą przeglądarka nie wysyła do serwera.",
              "**Wynik nie jest wyrokiem na osobę.** Niska liczba nie unieważnia relacji."
            ]
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Metoda jest opisana szczegółowo w [przewodnikach](/guide). Szczegóły firmy i jak się z nami skontaktować znajdują się na [stronie kontaktowej](/contact)."
          }
        ]
      }
    ]
  }
} satisfies Record<DocKey, DocPage>;

export const PL_NOTICES = {
  "kindLabels": {
    "service": "Usługa",
    "product": "Produkty",
    "policy": "Polityka",
    "support": "Wsparcie"
  },
  "intro": "Zmiany w Twoich warunkach użytkowania — ceny, polityki — są publikowane tutaj przed ich wejściem w życie. Wewnętrzne ulepszenia nie są wymienione: to, co się tutaj pojawia, to to, co musisz wiedzieć.",
  "empty": {
    "title": "Brak powiadomień",
    "body": "Gdy coś się zmieni, pojawi się tutaj."
  },
  "effective": "Wchodzi w życie {date}",
  "pager": {
    "label": "Strony powiadomień",
    "newer": "← Nowsze",
    "older": "Starsze →"
  },
  "items": {}
} satisfies NoticeCopy;
