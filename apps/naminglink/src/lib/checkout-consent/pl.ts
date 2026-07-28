import type { ConsentCopySet } from "@/lib/checkout-consent/types";

// Wersja polska. Wiążącym wzorcem jest oryginał koreański (ko.ts) — w razie rozbieżności
// znaczenia obowiązuje ko.ts. To informacja wymagana prawem, więc warunki, terminy
// i wyjątki muszą pozostać dokładnie takie jak w ko.ts.

export const pl: ConsentCopySet = {
  DIGITAL: {
    infoTitle: "Informacje o produkcie",
    info: [
      ["Wytwórca / Dostawca", "Naming-Link"],
      ["Postać produktu", "Treść cyfrowa (wynik na ekranie lub dokument PDF). Udostępniana natychmiast po dokonaniu płatności."],
      ["Warunki korzystania", "Przeglądarka internetowa lub dowolne urządzenie otwierające pliki PDF. Nie jest wymagana dodatkowa instalacja."],
      ["Okres korzystania", "Bez ograniczeń. Pobrany plik pozostaje u użytkownika."],
      ["Odstąpienie od umowy", "Pełny zwrot przed rozpoczęciem udostępniania. Po jego rozpoczęciu odstąpienie z powodu zwykłej zmiany zdania jest ograniczone (art. 17 ust. 2 koreańskiej ustawy o handlu elektronicznym)."],
      ["Koszty wymiany / zwrotu", "Brak. Ponieważ jest to treść cyfrowa, nie ma wysyłki."],
    ],
    consent:
      "Przyjmuję do wiadomości, że ten produkt jest treścią cyfrową udostępnianą natychmiast po płatności oraz **że po rozpoczęciu udostępniania odstąpienie od umowy z powodu zwykłej zmiany zdania jest ograniczone**.",
    required: "Aby dokonać płatności, musisz zaakceptować ograniczenie prawa odstąpienia od umowy.",
    refund:
      "W sprawie zwrotów lub pytań prosimy o kontakt z centrum obsługi klienta poniżej albo e-mailem. Jeżeli produkt nie został udostępniony z powodu błędu systemu lub pobrana kwota różni się od zamówienia, zwracamy pełną kwotę.",
  },
  MADE_TO_ORDER: {
    infoTitle: "Informacje o produkcie",
    info: [
      ["Wytwórca / Dostawca", "Naming-Link"],
      ["Postać produktu", "Fizyczna pieczęć imienna (dojang) rytowana pojedynczo zgodnie z zamówionym przez Ciebie napisem."],
      ["Sposób wykonania", "Po przyjęciu zamówienia potwierdzamy napis i krój pisma, a następnie rozpoczynamy rytowanie."],
      ["Wysyłka", "Wysyłamy po zakończeniu wykonania. Na terenie Korei kurierem, poza Koreę wysyłką międzynarodową."],
      ["Odstąpienie od umowy", "**Przed rozpoczęciem rytowania** pełny zwrot. Po jego rozpoczęciu odstąpienie od umowy jest ograniczone — towar jest wytwarzany indywidualnie na Twoje zamówienie, więc nie nadaje się do odsprzedaży (art. 17 ust. 2 koreańskiej ustawy o handlu elektronicznym)."],
      ["Wymiana / zwrot", "Jeżeli towar jest uszkodzony, błędnie wyrytowany lub niezgodny z zamówieniem, wykonamy go ponownie bezpłatnie albo zwrócimy pełną kwotę."],
      ["Koszty zwrotu", "Bezpłatnie, jeżeli zachodzi jedna z powyższych przyczyn. Zmianę zdania można anulować wyłącznie przed rozpoczęciem rytowania."],
    ],
    consent:
      "Przyjmuję do wiadomości, że ta pieczęć jest rytowana zgodnie z zamówionym przeze mnie napisem, czyli **jest produktem wykonywanym na zamówienie, oraz że po rozpoczęciu rytowania odstąpienie od umowy z powodu zwykłej zmiany zdania jest ograniczone**.",
    required: "Aby dokonać płatności, musisz zaakceptować ograniczenie prawa odstąpienia od umowy.",
    refund:
      "W sprawie zwrotów lub pytań prosimy o kontakt z centrum obsługi klienta poniżej albo e-mailem. Towary uszkodzone, błędnie wyrytowane lub niezgodne z zamówieniem wykonujemy ponownie bezpłatnie albo zwracamy za nie pełną kwotę.",
  },
};
