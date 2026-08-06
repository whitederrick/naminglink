// 드림링크 화면 사전의 Polish (Polski)(pl) 번역이다.
//
// **`scripts/translate-i18n.ts`가 만든 파일이다.** 키 구성·중첩·배열 길이는 en을 그대로
// 복사하고 문자열만 갈아 끼우므로 구조가 어긋날 자리가 없다. 손으로 고칠 때도 키를 더하거나
// 빼지 말 것 — `verify-i18n`이 en과 대조해 잡는다.
//
// **옛 궁합 번역을 통째로 되살린 것이 아니다.** en 원문이 글자까지 같은 자리(푸터·언어
// 선택기·광고 라벨)만 물려받고, 해몽용으로 새로 쓴 자리는 새 ko·en에서 다시 옮겼다.

import type { Dictionary } from "@/lib/i18n";

export const pl: Dictionary = {
  "brand": "Dreams-Link",
  "tagline": "Dzisiejszy sen, odczytany przez tradycyjne koreańskie symbole snów",
  "currentLanguage": "Obecny język",
  "moreLanguages": "Więcej",
  "closeLanguages": "Zamknij",
  "dream": {
    "title": "Interpretacja snów",
    "subtitle": "Zapisz sen, który miałeś, a my poszukamy go w słowniku tradycyjnych koreańskich symboli snów.",
    "textLabel": "O czym śniłeś?",
    "textPlaceholder": "Zapisz to, jak pamiętasz. Na przykład: karp wyskoczył z czystej wody",
    "moodLabel": "Jak się czułeś po przebudzeniu",
    "moods": {
      "good": "Dobrze",
      "scary": "Przerażająco",
      "strange": "Dziwnie",
      "sad": "Smutno",
      "unsure": "Niepewnie"
    },
    "recurringLabel": "Mam ten sen w kółko",
    "submit": "Przeczytaj mój sen",
    "submitting": "Szukam…",
    "errorEmpty": "Proszę napisać trochę więcej o śnie.",
    "errorGeneric": "Nie mogliśmy załadować interpretacji. Proszę spróbować ponownie za chwilę.",
    "resultTitle": "Interpretacja snu",
    "symbolsHeading": "Znalezione symbole w Twoim śnie",
    "noSymbols": "W tym śnie nie pojawił się żaden tradycyjny symbol z naszego słownika. Zostawiamy to puste, aby nie wymyślać znaczenia.",
    "themesHeading": "Co one wskazują razem",
    "conceptionNotice": "Symbole tradycyjnie interpretowane jako znaki poczęcia pojawiają się tutaj. To nie określa ciąży.",
    "disclaimer": "To materiały referencyjne z perspektywy tradycyjnej interpretacji snów, a nie porady medyczne, finansowe ani prawne. Nie przechowujemy snu, który napisałeś.",
    "again": "Przeczytaj inny sen"
  },
  "landing": {
    "title": "Przeczytaj swój sen\nw tradycyjny sposób",
    "subtitle": "Szukamy symboli w Twoim śnie w słowniku tradycyjnej koreańskiej wiedzy o snach.\nBez daty urodzenia, bez rejestracji.",
    "howTitle": "Jak to działa",
    "steps": [
      "Zapisz sen tak, jak go pamiętasz. Jedno lub dwa zdania wystarczą.",
      "Szukamy w słowniku tradycyjnych koreańskich symboli snów tego, co się w nim pojawiło. Jeśli symbolu tam nie ma, informujemy o tym.",
      "Zobaczysz, co każdy symbol od dawna oznacza, oraz co one wskazują razem."
    ],
    "privacyTitle": "Sen, który zapisujesz, nie jest przechowywany",
    "privacyBody": "To, co zapisujesz, jest używane tylko podczas opracowywania interpretacji i nigdy nie jest rejestrowane.\nNie potrzebujesz konta, a po zakończeniu interpretacji nic nie zostaje na serwerze.",
    "disclaimer": "To materiały referencyjne z perspektywy tradycyjnej interpretacji snów. Nie jest to prognoza tego, co ma nadejść, ani porada medyczna czy finansowa."
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
    "title": "Szukając symboli w Twoim śnie",
    "quotes": [
      "Sen zazwyczaj odzwierciedla ostatnie kilka dni bardziej niż nadchodzące dni.",
      "Ten sam symbol był interpretowany różnie w zależności od tego, kto go śnił.",
      "Tradycyjna 해몽 nie jest kluczem odpowiedzi. To zbiór długo gromadzonych opowieści.",
      "Straszny sen nie jest tym samym co zły. Może być śladem, który pozostawił zaskoczony umysł.",
      "Nie szkodzi, jeśli pamiętasz tylko fragment. Jeden symbol wystarczy, by zacząć.",
      "Sen, który się powtarza, zazwyczaj wiąże się z czymś, co pozostało niedokończone.",
      "Jak czysta była woda i jaki miała kolor, to to, na co starzy czytelnicy zwracali szczególną uwagę.",
      "To, jak się czułeś po przebudzeniu, utrzymuje się tak długo, jak to, co naprawdę widziałeś.",
      "Dobry sen czy nie, lepiej nie pozwalać mu decydować o Twoim dniu.",
      "해몽 nie jest słowem o tym, co się wydarzy. To drugie spojrzenie na to, co już jest."
    ],
    "watching": "Trwa reklama",
    "remaining": "Wynik otworzy się za: {seconds} s"
  },
  "dreamCard": {
    "title": "Zachowaj ten sen jako kartę",
    "body": "Umieściliśmy sen, który napisałeś, oraz symbole, które znaleźliśmy, w jednym obrazie. To **plik graficzny, a nie PDF**, więc możesz go zapisać lub wysłać tak, jak jest.",
    "buyButton": "Kup to za {price}",
    "preparing": "Przygotowujemy",
    "ordering": "Tworzenie zamówienia…",
    "paying": "Przetwarzanie płatności…",
    "issuing": "Tworzenie karty…",
    "done": "Gotowe. Użyj przycisku poniżej, aby pobrać go ponownie.",
    "failed": "Płatność lub pobieranie nie powiodło się. Proszę spróbować ponownie za chwilę.",
    "retry": "Pobierz ponownie",
    "contents": [
      "Symbole znalezione w twoim śnie i ich tradycyjne znaczenie",
      "Co te symbole wskazują razem",
      "Data snu i wersja słownika"
    ],
    "consentLabel": "To jest cyfrowa treść dostarczana natychmiast po dokonaniu płatności. Rozumiem, że **po zakończeniu pobierania prawo do odstąpienia od umowy z powodu zmiany zdania jest ograniczone**.",
    "consentRequired": "Musisz zgodzić się na warunki odstąpienia przed dokonaniem płatności.",
    "productInfoTitle": "Informacje o produkcie",
    "productInfo": [
      [
        "Dostawca",
        "{brand}"
      ],
      [
        "Format",
        "1 plik graficzny (PNG), pobrany na tym ekranie zaraz po dokonaniu płatności. To nie jest dokument PDF."
      ],
      [
        "Wymagania",
        "Jakiekolwiek urządzenie, które może otworzyć obraz. Brak instalacji i konta."
      ],
      [
        "Dostępność",
        "Brak ograniczeń czasowych. Pobrany plik jest do zachowania."
      ],
      [
        "Pobierz ponownie",
        "Do 5 razy w ramach tego samego zamówienia. Nie przechowujemy pliku, więc nie można go ponownie utworzyć po opuszczeniu ekranu wyników."
      ],
      [
        "Wycofanie",
        "Pełny zwrot przed zakończeniem pobierania. Po tym, wycofanie z powodu zmiany zdania jest ograniczone (art. 17(2) ustawy o e-handlu w Korei)."
      ],
      [
        "Koszty zwrotu",
        "Brak. Treści cyfrowe nie są wysyłane."
      ]
    ],
    "refundContact": "W sprawie zwrotów lub pytań skontaktuj się z biurem obsługi klienta lub poniższym adresem e-mail. Jeśli plik nigdy nie został wyprodukowany lub kwota pobrana różni się od zamówienia, zwracamy całość.",
    "pdfLanguageNotice": "Tekst na karcie jest w tym samym języku co ten ekran."
  },
  "conceptionReport": {
    "title": "Zachowaj odczyt omenów poczęcia jako PDF",
    "body": "Kiedy symbole tradycyjnie uznawane za omeny poczęcia się pojawiają, 4-stronicowy PDF przedstawia, co się pojawiło, co to tradycyjnie oznacza oraz skąd pochodzi to odczytanie. Nie określa to ciąży ani płci dziecka.",
    "buyButton": "Kup to za {price}",
    "preparing": "Przygotowuję się",
    "ordering": "Tworzę zamówienie…",
    "paying": "Przyjmuję płatność…",
    "issuing": "Tworzę raport…",
    "done": "Gotowe. Użyj przycisku poniżej, aby pobrać go ponownie.",
    "failed": "Płatność lub pobieranie nie powiodło się. Proszę spróbować ponownie za chwilę.",
    "retry": "Pobierz ponownie",
    "contents": [
      "Strona 1 — sen, który napisałeś i co w nim znaleziono",
      "Strona 2 — każdy symbol i co tradycyjnie oznacza",
      "Strona 3 — dlaczego te symbole są interpretowane jako omeny poczęcia",
      "Strona 4 — strona do zachowania (data i zastrzeżenia)"
    ],
    "consentLabel": "To jest treść cyfrowa dostarczana natychmiast po dokonaniu płatności. Rozumiem, że **po zakończeniu pobierania prawo do odstąpienia od umowy z powodu zmiany zdania jest ograniczone**.",
    "consentRequired": "Musisz zgodzić się na warunki odstąpienia przed dokonaniem płatności.",
    "productInfoTitle": "Informacje o produkcie",
    "productInfo": [
      [
        "Dostawca",
        "{brand}"
      ],
      [
        "Format",
        "1 dokument PDF (4 strony), pobrany na tym ekranie zaraz po dokonaniu płatności."
      ],
      [
        "Wymagania",
        "Dowolne urządzenie, które może otworzyć PDF. Bez instalacji i bez konta."
      ],
      [
        "Dostępność",
        "Brak ograniczeń czasowych. Pobrany plik jest do zachowania."
      ],
      [
        "Pobierz ponownie",
        "Do 5 razy w ramach tego samego zamówienia. Nie przechowujemy pliku, więc nie można go ponownie utworzyć po opuszczeniu ekranu wyników."
      ],
      [
        "Wycofanie",
        "Pełny zwrot przed zakończeniem pobierania. Po tym, wycofanie z powodu zmiany zdania jest ograniczone (art. 17(2) ustawy o handlu elektronicznym w Korei)."
      ],
      [
        "Koszty zwrotu",
        "Brak. Treści cyfrowe nie są wysyłane."
      ]
    ],
    "refundContact": "W sprawie zwrotów lub pytań skontaktuj się z biurem obsługi klienta lub poniższym adresem e-mail. Jeśli dokument nigdy nie został wyprodukowany lub kwota pobrana różni się od zamówienia, zwracamy ją w całości.",
    "pdfLanguageNotice": "PDF jest generowany w tym samym języku co ten ekran."
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
  }
};
