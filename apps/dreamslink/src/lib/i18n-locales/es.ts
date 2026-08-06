// 드림링크 화면 사전의 Spanish (Español)(es) 번역이다.
//
// **`scripts/translate-i18n.ts`가 만든 파일이다.** 키 구성·중첩·배열 길이는 en을 그대로
// 복사하고 문자열만 갈아 끼우므로 구조가 어긋날 자리가 없다. 손으로 고칠 때도 키를 더하거나
// 빼지 말 것 — `verify-i18n`이 en과 대조해 잡는다.
//
// **옛 궁합 번역을 통째로 되살린 것이 아니다.** en 원문이 글자까지 같은 자리(푸터·언어
// 선택기·광고 라벨)만 물려받고, 해몽용으로 새로 쓴 자리는 새 ko·en에서 다시 옮겼다.

import type { Dictionary } from "@/lib/i18n";

export const es: Dictionary = {
  "brand": "Dreams-Link",
  "tagline": "El sueño de hoy, leído a través de los símbolos tradicionales de los sueños coreanos",
  "currentLanguage": "Idioma actual",
  "moreLanguages": "Más",
  "closeLanguages": "Cerrar",
  "dream": {
    "title": "Lectura de sueños",
    "subtitle": "Escribe el sueño que tuviste y lo buscaremos en un diccionario de símbolos tradicionales coreanos de sueños.",
    "textLabel": "¿De qué soñaste?",
    "textPlaceholder": "Escríbelo como lo recuerdas. Por ejemplo: un pez carpa saltó de agua clara",
    "moodLabel": "Cómo te sentiste al despertar",
    "moods": {
      "good": "Bien",
      "scary": "Aterrador",
      "strange": "Extraño",
      "sad": "Triste",
      "unsure": "No estoy seguro"
    },
    "recurringLabel": "Tengo este sueño una y otra vez",
    "submit": "Leer mi sueño",
    "submitting": "Buscando…",
    "errorEmpty": "Por favor, escribe un poco más sobre el sueño.",
    "errorGeneric": "No pudimos cargar la lectura. Por favor, intenta de nuevo en un momento.",
    "resultTitle": "Lectura de sueños",
    "symbolsHeading": "Símbolos encontrados en tu sueño",
    "noSymbols": "No apareció ningún símbolo tradicional de nuestro diccionario en este sueño. Lo dejamos vacío en lugar de inventar un significado.",
    "themesHeading": "A qué apuntan juntos",
    "conceptionNotice": "Los símbolos tradicionalmente leídos como presagios de concepción aparecen aquí. Esto no determina el embarazo.",
    "browseSymbols": "Explorar el diccionario de símbolos tradicionales",
    "popularSymbols": "Símbolos buscados comúnmente",
    "disclaimer": "Este es un material de referencia desde una perspectiva de lectura de sueños tradicional, no es asesoramiento médico, financiero o legal. No almacenamos el sueño que escribiste.",
    "again": "Leer otro sueño"
  },
  "landing": {
    "title": "Lee tu sueño\nde la manera tradicional",
    "subtitle": "Buscamos los símbolos en tu sueño en un diccionario de la tradición de los sueños coreanos.\nSin fecha de nacimiento, sin registro.",
    "howTitle": "Cómo funciona",
    "steps": [
      "Escribe el sueño tal como lo recuerdas. Una o dos frases son suficientes.",
      "Buscamos en un diccionario de símbolos de sueños tradicionales coreanos lo que apareció en él. Si un símbolo no está allí, lo decimos.",
      "Ves lo que cada símbolo ha sido tradicionalmente interpretado y lo que apuntan juntos."
    ],
    "privacyTitle": "El sueño que escribes no se almacena",
    "privacyBody": "Lo que escribes se utiliza solo mientras se trabaja en la interpretación, y nunca se graba.\nNo se necesita cuenta, y nada queda en el servidor una vez que se completa la interpretación.",
    "disclaimer": "Este es un material de referencia desde una perspectiva de interpretación de sueños tradicional. No es una predicción de lo que está por venir, ni un consejo médico o financiero."
  },
  "ads": {
    "label": "Publicidad"
  },
  "selfAds": {
    "label": "Servicios relacionados",
    "comingSoon": "Próximamente",
    "purposes": {
      "naminglink": "Nombres coreanos y hanja elegidos por significado y número de trazos",
      "inyeonlink": "Cómo se ajustan dos personas, leído desde sus cuatro pilares y signos del zodiaco",
      "sajulink": "Tus propios cuatro pilares, y cómo hoy se encuentra con ellos",
      "dreamslink": "Lecturas de sueños extraídas de un diccionario de símbolos",
      "placelink": "Lugares para ir en una cita en Corea, compartidos y recomendados"
    }
  },
  "analyzing": {
    "title": "Buscando los símbolos en tu sueño",
    "quotes": [
      "Un sueño tiende a reflejar los últimos días más que los días por venir.",
      "El mismo símbolo ha sido leído de manera diferente dependiendo de quién lo soñó.",
      "La tradicional 해몽 no es una clave de respuestas. Es un cuerpo de historias acumuladas a lo largo del tiempo.",
      "Un sueño aterrador no es lo mismo que uno malo. Puede ser la marca que dejó una mente asustada.",
      "Está bien si solo recuerdas un fragmento. Un símbolo es suficiente para comenzar.",
      "Un sueño que sigue regresando generalmente viene con algo que quedó sin terminar.",
      "Qué tan clara estaba el agua y qué color tenía, es lo que los antiguos lectores observaban más de cerca.",
      "Cómo te sentiste al despertar persiste tanto como lo que realmente viste.",
      "Sueño bueno o no, es mejor no dejar que decida tu día.",
      "Una 해몽 no es una palabra sobre lo que sucederá. Es una segunda mirada a lo que ya es."
    ],
    "watching": "Viendo el anuncio",
    "remaining": "Tu resultado se abre en {seconds} s"
  },
  "dreamCard": {
    "title": "Guarda este sueño como una tarjeta",
    "body": "Hemos puesto el sueño que escribiste y los símbolos que encontramos en una sola imagen. Es **un archivo de imagen, no un PDF**, así que puedes guardarlo o enviarlo tal como está.",
    "buyButton": "Consíguelo por {price}",
    "preparing": "Preparándose",
    "ordering": "Creando el pedido…",
    "paying": "Procesando el pago…",
    "issuing": "Creando la tarjeta…",
    "done": "Listo. Usa el botón de abajo para descargarlo de nuevo.",
    "failed": "El pago o la descarga fallaron. Por favor, intenta de nuevo en un momento.",
    "retry": "Descargar de nuevo",
    "contents": [
      "Los símbolos encontrados en tu sueño y lo que tradicionalmente han significado",
      "A qué apuntan esos símbolos juntos",
      "La fecha del sueño y la versión del diccionario"
    ],
    "consentLabel": "Este es un contenido digital entregado inmediatamente después del pago. Entiendo que **una vez que se complete la descarga, el derecho a retirar por un cambio de opinión es limitado**.",
    "consentRequired": "Necesitas aceptar los términos de retiro antes de pagar.",
    "productInfoTitle": "Información del producto",
    "productInfo": [
      [
        "Proveedor",
        "{brand}"
      ],
      [
        "Formato",
        "1 archivo de imagen (PNG), descargado en esta pantalla justo después del pago. No es un documento PDF."
      ],
      [
        "Requisitos",
        "Cualquier dispositivo que pueda abrir una imagen. Sin instalación y sin cuenta."
      ],
      [
        "Disponibilidad",
        "Sin límite de tiempo. El archivo descargado es tuyo para conservar."
      ],
      [
        "Volver a descargar",
        "Hasta 5 veces en el mismo pedido. No guardamos el archivo, por lo que no se puede volver a crear una vez que salgas de la pantalla de resultados."
      ],
      [
        "Retiro",
        "Reembolso completo antes de que se complete la descarga. Después, el retiro por cambio de opinión es limitado (Ley de Comercio Electrónico de Corea art. 17(2))."
      ],
      [
        "Costos de devolución",
        "Ninguno. El contenido digital no se envía."
      ]
    ],
    "refundContact": "Para reembolsos o preguntas, contacta con el servicio de atención al cliente o la dirección de correo electrónico a continuación. Si el archivo nunca fue producido, o el monto cobrado difiere del pedido, lo reembolsamos en su totalidad.",
    "pdfLanguageNotice": "El texto en la tarjeta aparece en el mismo idioma que esta pantalla."
  },
  "conceptionReport": {
    "title": "Mantén la lectura de omen de concepción como un PDF",
    "body": "Cuando aparecen símbolos tradicionalmente leídos como presagios de concepción, se presenta un PDF de 4 páginas que detalla qué apareció, qué ha significado tradicionalmente y de dónde proviene esa interpretación. No determina el embarazo ni el sexo de un niño.",
    "buyButton": "Consíguelo por {price}",
    "preparing": "Preparándose",
    "ordering": "Creando el pedido…",
    "paying": "Procesando el pago…",
    "issuing": "Elaborando el informe…",
    "done": "Listo. Usa el botón de abajo para descargarlo nuevamente.",
    "failed": "El pago o la descarga fallaron. Por favor, intenta de nuevo en un momento.",
    "retry": "Descargar de nuevo",
    "contents": [
      "Página 1 — el sueño que escribiste y lo que se encontró en él",
      "Página 2 — cada símbolo y lo que tradicionalmente ha significado",
      "Página 3 — por qué se consideran como augurios de concepción",
      "Página 4 — una página para guardar (la fecha y los avisos)"
    ],
    "consentLabel": "Este es contenido digital entregado inmediatamente después del pago. Entiendo que **una vez que la descarga se complete, el derecho a retirar por un cambio de opinión es limitado**.",
    "consentRequired": "Necesitas aceptar los términos de retiro antes de pagar.",
    "productInfoTitle": "Información del producto",
    "productInfo": [
      [
        "Proveedor",
        "{brand}"
      ],
      [
        "Formato",
        "1 documento PDF (4 páginas), descargado en esta pantalla justo después del pago."
      ],
      [
        "Requisitos",
        "Cualquier dispositivo que pueda abrir un PDF. Sin instalación y sin cuenta."
      ],
      [
        "Disponibilidad",
        "Sin límite de tiempo. El archivo descargado es tuyo para conservar."
      ],
      [
        "Volver a descargar",
        "Hasta 5 veces en el mismo pedido. No guardamos el archivo, por lo que no se puede volver a crear una vez que salgas de la pantalla de resultados."
      ],
      [
        "Retiro",
        "Reembolso completo antes de que se complete la descarga. Después, el retiro por cambio de opinión está limitado (Ley de Comercio Electrónico de Corea art. 17(2))."
      ],
      [
        "Costos de devolución",
        "Ninguno. El contenido digital no se envía."
      ]
    ],
    "refundContact": "Para reembolsos o preguntas, contacta con el servicio de soporte o la dirección de correo electrónico a continuación. Si el documento nunca fue producido, o el monto cobrado difiere del pedido, lo reembolsamos en su totalidad.",
    "pdfLanguageNotice": "El PDF sale en el mismo idioma que esta pantalla."
  },
  "footer": {
    "privacy": "Privacidad",
    "terms": "Términos",
    "refund": "Reembolsos",
    "pricing": "Precios",
    "legalEntity": "Empresa",
    "representative": "Representante",
    "businessNumber": "Registro",
    "mailOrderNumber": "Venta online",
    "address": "Dirección",
    "customerCenter": "Atención al cliente",
    "email": "Correo electrónico",
    "privacyOfficer": "Privacidad",
    "hostingProvider": "Alojamiento",
    "providedBy": "Proporcionado por",
    "effective": "Vigente desde",
    "backHome": "Volver al inicio"
  }
};
