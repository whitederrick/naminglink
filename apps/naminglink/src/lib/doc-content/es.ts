import type { DocPage, NoticeCopy } from "./types";
import type { DocKey } from "./ko";

/** Español — `scripts/translate-doc-content.ts`가 만든다. 손으로 고치지 말 것. */
export const ES_DOCS = {
  "about": {
    "eyebrow": "Acerca de",
    "title": "Acerca de Naming-Link",
    "summary": "Somos un servicio que ayuda a elegir y entender nombres coreanos. Aquí explicamos en qué nos basamos y qué es lo que deliberadamente no hacemos.",
    "backLabel": "Inicio",
    "sections": [
      {
        "title": "Qué hacemos",
        "blocks": [
          {
            "p": "Naming-Link te ayuda a **elegir y entender nombres coreanos** — el hanja detrás del nombre de un niño, un nombre coreano para usar en el extranjero, la escritura en Hangul de tu propio nombre, y recuerdos como un sello o un informe impreso."
          },
          {
            "p": "Ver tus resultados es **gratis y no necesita cuenta.** Los artículos de pago nunca revenden lo que ya se mostró en la pantalla: abren más candidatos, añaden análisis escrito, o convierten el resultado en algo que puedes conservar."
          }
        ]
      },
      {
        "title": "En qué se basan nuestras respuestas",
        "blocks": [
          {
            "p": "El hanja proviene de la **tabla oficial de hanja para nombres del Tribunal Supremo de Corea.** Cada carácter tiene una lectura fija para su uso en nombres, y los caracteres fuera de la tabla no pueden ser registrados. No añadimos a esa lista ni elegimos favoritos."
          },
          {
            "p": "El saju y las figuras de cinco elementos se calculan a partir del **calendario lunisolar coreano**, con la hora de nacimiento corregida al tiempo solar verdadero del lugar de nacimiento. La lectura es una referencia tradicional, no una predicción."
          },
          {
            "p": "Las explicaciones escritas son producidas por IA. Para evitar que **invente cosas**, el modelo recibe solo tu entrada y nuestros propios datos de referencia, y se le indica que se mantenga dentro de eso. Las guías explican esto en detalle."
          }
        ]
      },
      {
        "title": "Qué no hacemos",
        "blocks": [
          {
            "ul": [
              "**No hacemos predicciones.** Nada aquí promete suerte, riqueza o protección.",
              "**No almacenamos tu nombre.** Los resultados gratuitos nunca se escriben en nuestros servidores, y los documentos de pago se entregan sin conservar una copia del archivo.",
              "**Pagar no compra una mejor respuesta.** Desbloquear con un anuncio y desbloquear con un pago dan exactamente el mismo contenido."
            ]
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "El servicio está disponible en 23 idiomas. Los PDFs de pago se emiten en inglés para árabe y jemer — el generador de PDF no soporta esos scripts — y lo decimos en pantalla antes de que pagues."
          }
        ]
      },
      {
        "title": "Contacto",
        "blocks": [
          {
            "p": "Los detalles de la empresa y cómo contactarnos están en la [página de contacto](/contact), incluyendo reembolsos, solicitudes de privacidad e informes de errores."
          }
        ]
      }
    ]
  },
  "guide/reading": {
    "eyebrow": "Lecturas",
    "title": "Lecturas fijas — una pronunciación por carácter",
    "summary": "La tabla oficial no solo lista caracteres. También fija cómo se lee cada uno cuando se usa en un nombre.",
    "backLabel": "Guía",
    "sections": [
      {
        "title": "Una lectura fija para cada carácter",
        "blocks": [
          {
            "p": "La tabla de hanja para nombres no solo decide qué caracteres pueden ser usados. **También fija cómo se lee cada carácter cuando aparece en un nombre.** Esa lectura fija es la que se utiliza para el registro."
          },
          {
            "p": "La mayoría de los hanja tienen varias lecturas posibles. Sin embargo, un nombre se escribe en documentos y se pronuncia en voz alta, por lo que necesita exactamente una. Por lo tanto, la tabla asigna a cada carácter su lectura para uso en nombres, y no se puede registrar ninguna otra lectura."
          }
        ]
      },
      {
        "title": "Así que el sonido viene primero",
        "blocks": [
          {
            "p": "Por eso Naming-Link fija el sonido antes de buscar hanja. Si el nombre es \"지은\", el significado solo puede ser elegido entre los caracteres asignados a la lectura **지** y los caracteres asignados a la lectura **은**."
          },
          {
            "p": "Por muy bueno que sea un significado, un carácter cuya lectura no coincida no puede ser usado para ese nombre. También nunca cambiamos el sonido de un nombre para ajustarlo a un carácter — un nombre se pronuncia toda la vida, y el sonido se establece primero, seguido del hanja."
          }
        ]
      },
      {
        "title": "Los apellidos están fuera de esta tabla",
        "blocks": [
          {
            "p": "Esto a menudo se malinterpreta. **La tabla rige el nombre de pila, no el apellido.** Un apellido sigue lo que ya está en el registro familiar, por lo que algunas personas utilizan caracteres que no están en la tabla de hanja para nombres."
          },
          {
            "p": "Por eso Naming-Link trata el hanja del apellido de manera diferente. Solo te ayudamos a encontrar un apellido, y dejamos un campo para ingresar uno directamente, para personas cuyo carácter está fuera de la tabla. Los apellidos de dos sílabas como Namgung y Seonwoo se ingresan de la misma manera."
          }
        ]
      }
    ]
  },
  "guide/how-hangul-transliteration": {
    "eyebrow": "Cómo funciona",
    "title": "Cómo escribimos tu nombre en Hangul",
    "summary": "Cómo elegimos los sonidos al escribir un nombre extranjero en Hangul, y por qué no adjuntamos hanja.",
    "backLabel": "Guía",
    "sections": [
      {
        "title": "Llevamos el sonido, no el significado",
        "blocks": [
          {
            "p": "Este servicio escribe **tu nombre** en Hangul. No te da un nombre coreano. Michael se convierte en 마이클 — el mismo nombre, escrito para que los coreanos puedan leerlo y decirlo. No lo cambiamos por un nombre coreano que casualmente signifique algo similar."
          },
          {
            "p": "Si lo que quieres es un nombre coreano, **ese es un servicio diferente.** Uno mantiene tu nombre y solo cambia el guion; el otro propone un nuevo nombre."
          }
        ]
      },
      {
        "title": "Sonidos que el coreano no tiene",
        "blocks": [
          {
            "p": "Cada idioma tiene sonidos que el coreano carece — f, v, z, th, y distinciones vocálicas que el coreano no hace. Para esos escribimos lo que **un hablante de coreano realmente dice** cuando pronuncia tu nombre en voz alta, en lugar de transcribir la fonética original símbolo por símbolo. El objetivo es la escritura que se usará, no la más técnicamente fiel."
          },
          {
            "p": "La misma escritura puede diferir dependiendo de dónde proviene un nombre, así que pedimos tu idioma y país y trabajamos a partir de esa pronunciación."
          }
        ]
      },
      {
        "title": "Varias escrituras, lado a lado",
        "blocks": [
          {
            "p": "No hay una única respuesta correcta. La escritura más cercana al sonido original, la que se usa más comúnmente en Corea, y la más fácil de escribir a menudo son tres cosas diferentes. Así que las mostramos juntas y decimos qué las separa."
          },
          {
            "p": "Si ninguna de ellas te parece correcta, puedes añadir una pista sobre el sonido que deseas y volver a ejecutarlo — por ejemplo, que una sílaba en particular debería escribirse de manera diferente."
          }
        ]
      },
      {
        "kind": "note",
        "title": "No hay hanja aquí",
        "blocks": [
          {
            "p": "No adjuntamos hanja a una transliteración. El hanja lleva significado, y este flujo se trata de sonido. Hacer coincidir caracteres solo con el sonido puede llevarte a un significado que nunca pediste."
          }
        ]
      }
    ]
  },
  "guide/how-global-to-korean": {
    "eyebrow": "Cómo funciona",
    "title": "Cómo construimos un nombre coreano",
    "summary": "Elegimos entre apellidos que existen, evaluamos qué tan fácil se dice y se escribe el nombre, y preguntamos para qué es el nombre.",
    "backLabel": "Guía",
    "sections": [
      {
        "title": "Comenzamos con el apellido",
        "blocks": [
          {
            "p": "En Corea, el apellido va primero, y a diferencia de los nombres de pila, no se inventa libremente — lo heredas. Así que solo sugerimos apellidos que realmente tienen las personas coreanas. Nuestro grupo predeterminado son los **20 apellidos más comunes**, que juntos cubren aproximadamente el 80% de la población."
          },
          {
            "p": "Si tu propio apellido coincide con uno coreano real por sonido — Wang con 왕, Ye con 예 — lo ponemos primero. Mantener un hilo de conexión con tu nombre original vale más que un apellido elegido al azar."
          },
          {
            "p": "Puedes elegir un apellido tú mismo o dejarnos recomendar uno. De cualquier manera, será **un apellido que existe**."
          }
        ]
      },
      {
        "title": "Fácil de decir, fácil de escribir",
        "blocks": [
          {
            "p": "Este es un nombre que las personas en Corea realmente te llamarán, así que lo primero que verificamos es si un coreano puede escucharlo una vez y escribirlo. Un nombre que necesita ser deletreado cada vez es una carga que llevas, no nosotros."
          },
          {
            "p": "El significado también importa. Los nombres de pila coreanos suelen llevar uno, así que te decimos cómo se lee el nombre y por qué lo elegimos — no solo el nombre en sí."
          }
        ]
      },
      {
        "title": "Preguntamos para qué es el nombre",
        "blocks": [
          {
            "p": "Un nombre para trámites universitarios no es lo mismo que un nombre que los amigos gritarán a través de una habitación, o un apodo que usarás en línea. Preguntamos cómo planeas usarlo y tomamos eso en cuenta."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Esto no es una transliteración",
        "blocks": [
          {
            "p": "Aquí proponemos un **nuevo nombre coreano**. Si deseas que tu nombre existente se escriba en Hangul — Michael como 마이클 — consulta la [guía de escritura en Hangul](/guide/how-hangul-transliteration)."
          }
        ]
      }
    ]
  },
  "notice": {
    "eyebrow": "Avisos",
    "title": "Avisos",
    "summary": "Donde anunciamos cambios que afectan cómo usas el servicio.",
    "backLabel": "Inicio",
    "sections": []
  },
  "contact": {
    "eyebrow": "Contacto",
    "title": "Contáctanos",
    "summary": "Cómo contactarnos para preguntas, reembolsos, solicitudes de privacidad e informes de errores, con nuestros detalles de empresa.",
    "backLabel": "Inicio",
    "sections": [
      {
        "title": "Envíanos un correo electrónico",
        "blocks": [
          {
            "p": "Escribe a **{email}**. Respondemos dentro de dos días hábiles. Para cualquier cosa relacionada con un pedido — pago, reembolso, un archivo que no recibiste — por favor incluye tu **número de pedido o el correo electrónico con el que pagaste**."
          },
          {
            "p": "Consultas telefónicas: {customerCenter} (horario comercial coreano)."
          }
        ]
      },
      {
        "title": "Qué enviar aquí",
        "blocks": [
          {
            "ul": [
              "**Pagos y reembolsos** — si un documento nunca fue producido, o el monto cobrado difiere de tu pedido, reembolsamos el total. Consulta la [política de reembolsos](/refund-policy).",
              "**Privacidad** — solicitudes para acceder, corregir o eliminar tus datos. Consulta la [política de privacidad](/privacy).",
              "**Correcciones** — si un significado de hanja, lectura o cálculo parece incorrecto, háznoslo saber. Mencionar qué pantalla y qué ingresaste ayuda mucho.",
              "**Cualquier otra cosa** — asociaciones y prensa van a la misma dirección."
            ]
          }
        ]
      },
      {
        "title": "Detalles de la empresa",
        "blocks": [
          {
            "ul": [
              "**Entidad legal** — {companyName}",
              "**Representante** — {representative}",
              "**Número de registro comercial** — {businessNumber}",
              "**Número de registro de ventas por correo** — {mailOrderNumber}",
              "**Dirección** — {address}",
              "**Servicio al cliente** — {customerCenter}",
              "**Correo electrónico** — {email}",
              "**Oficial de privacidad** — {privacyOfficer}",
              "**Proveedor de hosting** — {hostingProvider}"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "No necesitas incluir un nombre o fecha de nacimiento en tu mensaje. Los resultados gratuitos nunca se almacenan en nuestros servidores, así que no podemos buscarlos de nuevo — un número de pedido es suficiente."
          }
        ]
      }
    ]
  }
} satisfies Record<DocKey, DocPage>;

export const ES_NOTICES = {
  "kindLabels": {
    "service": "Servicio",
    "product": "Productos",
    "policy": "Política",
    "support": "Soporte"
  },
  "intro": "Los cambios en tus términos de uso — precios, políticas — se publican aquí antes de que entren en vigor. Las mejoras internas no se enumeran: lo que aparece aquí es lo que necesitas saber.",
  "empty": {
    "title": "No hay avisos aún",
    "body": "Cuando algo cambie, aparecerá aquí."
  },
  "effective": "En vigor a partir del {date}",
  "pager": {
    "label": "Páginas de avisos",
    "newer": "← Más reciente",
    "older": "Más antiguo →"
  },
  "items": {
    "2026-08-02-contact": {
      "title": "Las páginas de contacto y sobre están ahora abiertas",
      "body": [
        "Las consultas, reembolsos, solicitudes de privacidad e informes de errores ahora tienen un lugar al que ir. La página de contacto en el pie de página enumera nuestro correo electrónico y detalles de la empresa.",
        "Lo que nuestras respuestas se basan, y lo que deliberadamente no hacemos, está escrito en la página sobre."
      ]
    },
    "2026-08-01-pdf-language": {
      "title": "Los informes PDF se emiten en inglés para árabe y jemer",
      "body": [
        "Si estás utilizando el servicio en árabe o jemer, el PDF que compras se produce en inglés. La herramienta que organiza nuestros documentos aún no puede establecer párrafos en esos dos scripts.",
        "La pantalla permanece en tu idioma, y tu nombre se imprime en tu propio script dentro del documento.",
        "La misma nota aparece antes del pago. Cuando la herramienta soporte estos scripts, lo diremos aquí."
      ]
    },
    "2026-08-01-payments-preparing": {
      "title": "Los pagos aún no están abiertos",
      "body": [
        "Crear un nombre y leer el resultado es gratis hoy, y no se necesita cuenta.",
        "Los artículos de pago aún no están a la venta. Los montos mostrados en la página de precios son los que se aplicarán una vez que se abran las ventas."
      ]
    }
  }
} satisfies NoticeCopy;
