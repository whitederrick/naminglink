import type { DocPage, NoticeCopy } from "./types";
import type { GlobalDocKey } from "./keys";

/** Español — `scripts/translate-doc-content.ts`가 만든다. 손으로 고치지 말 것. */
export const ES_DOCS = {
  "about": {
    "eyebrow": "Acerca de",
    "title": "Acerca de Naming-Link",
    "summary": "Te ayudamos a elegir y entender nombres coreanos. Aquí está en qué basamos nuestros resultados y lo que deliberadamente no hacemos.",
    "backLabel": "Inicio",
    "sections": [
      {
        "title": "Lo que hacemos",
        "blocks": [
          {
            "p": "Naming-Link te ayuda a **elegir y entender nombres coreanos** — el hanja detrás del nombre de un niño, un nombre coreano para usar en el extranjero, una escritura en Hangul de tu propio nombre, y recuerdos como un sello o un informe impreso."
          },
          {
            "p": "Ver tus resultados es **gratis y no necesita cuenta.** Los elementos de pago nunca revenden lo que la pantalla ya te mostró: abren más candidatos, añaden análisis escrito, o convierten el resultado en algo que puedes conservar."
          }
        ]
      },
      {
        "title": "Para quién es cada servicio",
        "blocks": [
          {
            "p": "Hay dos tipos de servicio aquí: uno para personas que **ya tienen un nombre coreano**, y otro para personas que **necesitan uno**. Requieren cosas diferentes de ti, por lo que se ofrecen en diferentes idiomas."
          },
          {
            "ul": [
              "**Ofrecido en tu idioma** — escribir tu propio nombre en Hangul y construir un nombre coreano. Estos son para personas sin un nombre coreano, por lo que siguen el idioma en el que llegas.",
              "**Ofrecido solo en coreano** — encontrar hanja para un niño y convertir un nombre coreano en uno para usar en el extranjero. Ambos necesitan un **nombre en Hangul existente** para trabajar, por lo que las pantallas y sus guías permanecen en coreano."
            ]
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
            "p": "Los cálculos de saju y figuras de los cinco elementos se realizan a partir del **almanaque lunisolar coreano**, con la hora de nacimiento corregida a la hora solar verdadera para el lugar de nacimiento. La lectura es una referencia tradicional, no una predicción."
          },
          {
            "p": "Las explicaciones escritas son producidas por IA. Para evitar que **invente cosas**, al modelo solo se le da tu entrada y nuestros propios datos de referencia, y se le indica que se mantenga dentro de eso. Las guías explican esto en detalle."
          }
        ]
      },
      {
        "title": "Lo que no hacemos",
        "blocks": [
          {
            "ul": [
              "**No hacemos predicciones.** Nada aquí promete suerte, riqueza o protección.",
              "**No almacenamos tu nombre.** Los resultados gratuitos nunca se escriben en nuestros servidores, y los documentos de pago se entregan sin conservar una copia del archivo.",
              "**Pagar no compra una mejor respuesta.** Desbloquear con un anuncio y desbloquear con un pago ofrecen exactamente el mismo contenido."
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
  "guide": {
    "eyebrow": "Cómo funciona Naming-Link",
    "title": "En qué basamos tu nombre",
    "summary": "Cómo elegimos un apellido coreano, qué verificamos antes de sugerir un nombre dado, y cómo escribimos tu nombre en Hangul — con las partes que deliberadamente omitimos.",
    "backLabel": "Guía",
    "sections": [
      {
        "title": "",
        "blocks": [
          {
            "stats": [
              {
                "value": "{characterTotal}",
                "label": "caracteres de hanja"
              },
              {
                "value": "{syllableCount}",
                "label": "sílabas en Hangul cubiertas"
              },
              {
                "value": "{effectiveDate}",
                "label": "fecha de vigencia de la tabla"
              },
              {
                "value": "{avoidTotal}",
                "label": "caracteres tradicionalmente evitados"
              }
            ]
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Las guías a continuación cubren los servicios ofrecidos en tu idioma. Naming-Link también tiene dos servicios para personas que **ya tienen un nombre coreano** — encontrar hanja para un niño y convertir un nombre coreano en uno para usar en el extranjero. Esos necesitan un nombre en Hangul existente, por lo que tanto los servicios como sus guías están en coreano."
          },
          {
            "p": "[Acerca de](/about) explica qué servicio es para quién."
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
            "p": "Si un nombre coreano es lo que deseas, **ese es un servicio diferente**. Uno mantiene tu nombre y solo cambia el guion; el otro propone un nuevo nombre."
          }
        ]
      },
      {
        "title": "Sonidos que el coreano no tiene",
        "blocks": [
          {
            "p": "Cada idioma tiene sonidos que el coreano no tiene — f, v, z, th, y distinciones vocálicas que el coreano no hace. Para esos escribimos lo que **realmente dice un hablante de coreano** cuando lee tu nombre en voz alta, en lugar de transcribir la fonética original símbolo por símbolo. El objetivo es la escritura que se usará, no la más técnicamente fiel."
          },
          {
            "p": "La misma escritura puede diferir dependiendo de dónde provenga un nombre, por lo que pedimos tu idioma y país y trabajamos a partir de esa pronunciación."
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
            "p": "Si ninguna de ellas se siente correcta, puedes añadir una pista sobre el sonido que deseas y ejecutarlo de nuevo — por ejemplo, que una sílaba particular debería escribirse de manera diferente."
          }
        ]
      },
      {
        "kind": "note",
        "title": "No hay hanja aquí",
        "blocks": [
          {
            "p": "No adjuntamos hanja a una transliteración. El hanja tiene significado, y este flujo se trata de sonido. Igualar caracteres solo al sonido puede llevarte a un significado que nunca pediste."
          }
        ]
      }
    ]
  },
  "guide/how-global-to-korean": {
    "eyebrow": "Cómo funciona",
    "title": "Cómo construimos un nombre coreano",
    "summary": "Elegimos entre apellidos que existen, evaluamos cuán fácilmente se dice y se escribe el nombre, y preguntamos para qué es el nombre.",
    "backLabel": "Guía",
    "sections": [
      {
        "title": "Comenzamos con el apellido",
        "blocks": [
          {
            "p": "En Corea, el apellido viene primero, y a diferencia de los nombres de pila, no se inventa libremente — se hereda. Así que solo sugerimos apellidos que realmente tienen las personas coreanas. Nuestro grupo predeterminado son los **20 apellidos más comunes**, que juntos cubren aproximadamente el 80% de la población."
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
            "p": "Este es un nombre que la gente en Corea realmente te llamará, así que lo primero que verificamos es si un coreano puede escucharlo una vez y escribirlo. Un nombre que necesita ser deletreado cada vez es una carga que llevas, no nosotros."
          },
          {
            "p": "El significado también importa. Los nombres de pila coreanos suelen tener uno, así que te decimos cómo se lee el nombre y por qué lo elegimos — no solo el nombre en sí."
          }
        ]
      },
      {
        "title": "Preguntamos para qué es el nombre",
        "blocks": [
          {
            "p": "Un nombre para trámites universitarios no es lo mismo que un nombre que los amigos gritarán a través de una habitación, o un apodo que usarás en línea. Preguntamos cómo planeas usarlo y lo tomamos en cuenta."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Esto no es una transliteración",
        "blocks": [
          {
            "p": "Aquí proponemos un **nuevo nombre coreano**. Si deseas que tu nombre existente esté escrito en Hangul — Michael como 마이클 — consulta la [guía de escritura en Hangul](/guide/how-hangul-transliteration)."
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
    "summary": "Cómo contactarnos para preguntas, reembolsos, solicitudes de privacidad e informes de errores, con los detalles de nuestra empresa.",
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
              "**Pagos y reembolsos** — si un documento nunca fue producido, o el monto cobrado difiere de tu pedido, reembolsamos completamente. Consulta la [política de reembolsos](/refund-policy).",
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
              "**Número de ventas por correo** — {mailOrderNumber}",
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
  },
  "guide/what-we-dont-use": {
    "eyebrow": "Nuestros Estándares",
    "title": "Lo Que No Usamos",
    "summary": "No asignamos fortuna total ni puntajes numéricos, ni usamos conteos de trazos. Los cinco elementos se utilizan solo como un eje suplementario. Aquí están las razones.",
    "backLabel": "Guía de Uso",
    "sections": [
      {
        "title": "Razones para no asignar fortuna total o puntajes numéricos",
        "blocks": [
          {
            "p": "Existen métodos que asignan fortuna total o puntajes numéricos a los nombres para calificarlos. Naming-Link no proporciona esos números. Las razones son cuatro."
          },
          {
            "p": "**Primero, no hay un solo estándar.** Los métodos para calcular la fortuna varían según la escuela, y el mismo nombre puede ser calificado positivamente por un estándar y negativamente por otro. No tenemos base para decidir cuál es el correcto. Es deshonesto presentar uno como si fuera la respuesta."
          },
          {
            "p": "**Segundo, esos cálculos dependen de los conteos de trazos.** Sin embargo, los datos de la Corte Suprema no incluyen conteos de trazos en absoluto. Además, los conteos de trazos pueden variar dependiendo de si se cuentan como caracteres regulares o simplificados y cómo se cuentan los radicales. Dado que los números fundamentales no están establecidos de manera definitiva, las puntuaciones construidas sobre ellos no pueden ser definitivas."
          },
          {
            "p": "**Tercero, los números parecen más sólidos que la realidad.** Cuando dice \"87 puntos\", suena como un valor medido en lugar de una interpretación convencional. Esos nombres pueden sentirse presionados por ese número, dejando de lado lo que realmente importa (¿Es agradable de llamar? ¿El significado encaja? ¿Contiene los deseos deseados?)."
          },
          {
            "p": "**Cuarto, no hay forma de verificar.** La relación entre un nombre y la vida de una persona no puede ser verificada. Convertir algo que no se puede decir que es correcto o incorrecto en una puntuación resulta en un número que no puede ser confirmado, aunque no puede estar equivocado."
          },
          {
            "p": "Solo usamos lo que puede ser **sustentado.** La tabla oficial de hanja de la Corte Suprema, las lecturas designadas para cada carácter y los significados listados en la tabla. En su lugar, proporcionamos razones por las cuales este candidato fue seleccionado y por qué ciertos caracteres fueron excluidos, mostrando **razones en lugar de puntuaciones**."
          }
        ]
      },
      {
        "title": "No usamos conteos de trazos",
        "blocks": [
          {
            "p": "Los datos oficiales de hanja proporcionados por la Corte Suprema no incluyen conteos de trazos. Entre los {characterTotal} caracteres que recibimos, **no hay un solo carácter con conteos de trazos.**"
          },
          {
            "p": "Para usar conteos de trazos, tendríamos que obtener números de algún otro lugar, pero si no podemos aclarar de dónde provienen esos números y qué criterios se usaron para contarlos, significaría juzgar nombres basados en números infundados. Hemos decidido no evaluar nombres basados en valores que no pueden ser sustentados."
          }
        ]
      },
      {
        "title": "Usamos los cinco elementos solo como referencia",
        "blocks": [
          {
            "figure": "five-elements",
            "labels": {
              "alt": "Los cinco elementos colocados en un círculo: la generación corre entre vecinos, el control salta uno",
              "wood": "madera",
              "fire": "fuego",
              "earth": "tierra",
              "metal": "metal",
              "water": "agua",
              "saeng": "Generación — cada uno da origen a su vecino",
              "geuk": "Control — cada uno restringe al que salta"
            },
            "caption": "Las relaciones entre los cinco elementos. Moverse a lo largo del círculo representa generación mutua (相生), mientras que saltar uno y presionar hacia abajo representa restricción mutua (相剋). Usamos esta relación solo como un eje suplementario para comparar candidatos."
          },
          {
            "p": "Si has ingresado tu mes de nacimiento, usamos una referencia simplificada de los cinco elementos basada en ese mes como un eje suplementario para comparar candidatos. Sin embargo, esto no es un análisis preciso de saju, y **no afirmamos que los nombres determinan el destino o carácter de una persona.**"
          },
          {
            "p": "En la selección final, lo que priorizamos son los sonidos, combinaciones de significados, los valores que la familia desea transmitir y si puede ser registrado. Si no has ingresado tu mes de nacimiento, excluimos completamente la referencia de los cinco elementos del análisis — no hacemos suposiciones arbitrarias sobre información desconocida."
          },
          {
            "p": "Si deseas un análisis preciso basado en saju, lo cubrimos en un informe detallado separado. La razón por la que no priorizamos los cinco elementos en la coincidencia gratuita de hanja es que no queremos presentar juicios basados en los cinco elementos derivados de una fecha y hora de nacimiento incompletas como si fueran definitivos."
          }
        ]
      }
    ]
  },
  "guide/what-we-sell": {
    "eyebrow": "Productos de Pago",
    "title": "¿Qué incluye los productos de pago?",
    "summary": "Aclaramos cuánto es visible de forma gratuita y qué características adicionales vienen con el pago por cada producto. Los precios se obtienen de la configuración real del producto.",
    "backLabel": "Guía de Uso",
    "sections": [
      {
        "title": "¿Qué es visible de forma gratuita?",
        "blocks": [
          {
            "p": "Crear un nombre y ver los resultados es **gratis**. No se requiere registro de membresía. Puedes ver los significados coincidentes de hanja, crear nombres coreanos, conversión de nombres globales y notación de pronunciación en Hangul, junto con resultados recomendados y sus justificaciones en la pantalla."
          },
          {
            "p": "Los productos de pago no **revenden lo que ya se ha mostrado en la pantalla.** Abren más candidatos, añaden más explicaciones o crean un formato que puede ser almacenado o transmitido."
          }
        ]
      },
      {
        "title": "Divulgación completa de todos los candidatos — {priceUnlock}",
        "blocks": [
          {
            "p": "Los resultados recomendados están estructurados para abrir candidatos uno por uno. Al ver anuncios, se abre uno a la vez, mientras que este producto **abre todos los candidatos restantes a la vez**."
          },
          {
            "p": "Si no tienes prisa, no es necesario que compres. Los **resultados de abrir a través de anuncios y los de pago son completamente los mismos** — solo es cuestión de esperar, y pagar no produce mejores candidatos."
          }
        ]
      },
      {
        "title": "Detalles de Hanja — Tres Etapas",
        "blocks": [
          {
            "p": "Hay tres productos detallados en el flujo de selección de hanja para adjuntar a un nombre en Hangul."
          },
          {
            "ul": [
              "**Máximo 5 candidatos de hanja detallados** — {priceFiveDetail}. Puedes expandir explicaciones para hasta cinco candidatos en la pantalla. No hay PDF.",
              "**Máximo 10 candidatos de hanja en PDF detallado extendido** — {priceTenDetail}. El número de candidatos aumenta a diez, y se incluye un documento PDF.",
              "**Máximo 10 candidatos de hanja, informe integral de saju y los cinco elementos** — {priceTenSaju}. Además de lo anterior, incluye el gráfico de saju derivado de la fecha de nacimiento y las fuerzas de los cinco elementos, examinando por qué un hanja particular se adapta a ese nombre desde la perspectiva de los cinco elementos."
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "El hanja en sí es información de acceso público",
        "blocks": [
          {
            "p": "El hanja utilizable y sus significados provienen de la tabla oficial de hanja establecida por la Corte Suprema de Corea, y todos son de acceso público en los documentos de orientación del servicio. Lo que los productos de pago venden no es información de hanja, sino **el acto de seleccionar y explicar según el nombre**."
          }
        ]
      },
      {
        "title": "PDFs para Usuarios Globales",
        "blocks": [
          {
            "p": "Documentos disponibles para convertir nombres extranjeros en nombres coreanos o escribir nombres en Hangul. Los precios siguen los montos mostrados en la pantalla de pago."
          },
          {
            "ul": [
              "**Informe Premium de Nombre Coreano** — 3 páginas. Incluye una portada de caligrafía, el significado del nombre y la razón para elegirlo, y la interpretación de saju y los cinco elementos.",
              "**Arte del Nombre en Hangul** — 2 páginas. Incluye una portada de caligrafía y guía de pronunciación. Contiene cómo escribir el nombre en Hangul y cómo pronunciarlo."
            ]
          }
        ]
      },
      {
        "title": "Sello de Nombre",
        "blocks": [
          {
            "p": "Grabamos el nombre creado en la pantalla en un sello físico y te lo enviamos. Los precios varían según el modelo — sello redondo {priceStampRound}, sello cuadrado {priceStampSquare}, sello de ébano {priceStampEbony}. También se ofrece envío internacional."
          },
          {
            "p": "**A partir de aquí, los productos incluyen envío.** A diferencia de los artículos anteriores, la producción y el envío toman tiempo, y se requiere una dirección de recepción. La información de envío se utiliza solo para el procesamiento de pedidos y retención legal, y una vez que el procesamiento esté completo, se destruirá después del período especificado en la política."
          }
        ]
      },
      {
        "title": "Cosas a Saber Antes de Comprar",
        "blocks": [
          {
            "p": "**Los productos digitales se proporcionan inmediatamente después del pago.** Puedes cancelar y recibir un reembolso completo en cualquier momento antes de que comience la descarga, pero una vez que la descarga esté completa, la retirada debido a un simple cambio de opinión está restringida (Artículo 17, Párrafo 2 de la Ley de Comercio Electrónico). Esta condición se acuerda por separado en la pantalla de pago."
          },
          {
            "p": "**Las quejas sobre el contenido de los resultados no son motivo para un reembolso.** Sin embargo, si el documento no fue creado, el archivo no se puede abrir, o el monto del pago difiere del pedido, se procesará como una reemisión o reembolso completo."
          },
          {
            "p": "Las condiciones detalladas se describen en la [Política de Reembolso](/refund-policy) y [Guía de Precios](/pricing). Este texto sirve como guía de lo que está incluido, y las condiciones legales tienen prioridad en esos dos documentos."
          }
        ]
      }
    ]
  }
} satisfies Record<GlobalDocKey, DocPage>;

export const ES_NOTICES = {
  "kindLabels": {
    "service": "Servicio",
    "product": "Productos",
    "policy": "Política",
    "support": "Soporte"
  },
  "intro": "Los cambios en sus términos de uso — precios, políticas — se publican aquí antes de que entren en vigor. Las mejoras internas no se enumeran: lo que aparece aquí es lo que necesita saber.",
  "empty": {
    "title": "Sin avisos aún",
    "body": "Cuando algo cambie, aparecerá aquí."
  },
  "effective": "Entra en vigor {date}",
  "pager": {
    "label": "Páginas de avisos",
    "newer": "← Más nuevo",
    "older": "Más antiguo →"
  },
  "items": {
    "2026-08-02-contact": {
      "title": "Las páginas de contacto y sobre están ahora abiertas",
      "body": [
        "Preguntas, reembolsos, solicitudes de privacidad e informes de errores ahora tienen un solo lugar al que ir. La página de contacto en el pie de página enumera nuestro correo electrónico y detalles de la empresa.",
        "En qué se basan nuestras respuestas y lo que deliberadamente no hacemos está escrito en la página sobre."
      ]
    },
    "2026-08-01-pdf-language": {
      "title": "Los informes en PDF se emiten en inglés para árabe y jemer",
      "body": [
        "Si está utilizando el servicio en árabe o jemer, el PDF que compra se produce en inglés. La herramienta que organiza nuestros documentos aún no puede establecer párrafos en esos dos guiones.",
        "La pantalla permanece en su idioma, y su nombre se imprime en su propio guion dentro del documento.",
        "La misma nota aparece antes del pago. Cuando la herramienta soporte estos guiones, lo diremos aquí."
      ]
    },
    "2026-08-01-payments-preparing": {
      "title": "Los pagos aún no están abiertos",
      "body": [
        "Crear un nombre y leer el resultado es gratis hoy, y no se necesita cuenta.",
        "Los artículos de pago aún no están a la venta. Las cantidades mostradas en la página de precios son las que se aplicarán una vez que se abran las ventas."
      ]
    }
  }
} satisfies NoticeCopy;
