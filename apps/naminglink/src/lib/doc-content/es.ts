import type { DocPage, NoticeCopy } from "./types";
import type { DocKey } from "./ko";

/** Español — `scripts/translate-doc-content.ts`가 만든다. 손으로 고치지 말 것. */
export const ES_DOCS = {
  "about": {
    "eyebrow": "Acerca de",
    "title": "Acerca de Naming-Link",
    "summary": "Somos un servicio que te ayuda a elegir y entender nombres coreanos. Aquí explicamos en qué basamos nuestros resultados y qué es lo que deliberadamente no hacemos.",
    "backLabel": "Inicio",
    "sections": [
      {
        "title": "Lo que hacemos",
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
              "**Pagar no compra una mejor respuesta.** Desbloquear con un anuncio y desbloquear con un pago dan exactamente el mismo contenido."
            ]
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "El servicio está disponible en 23 idiomas. Los PDFs de pago se emiten en inglés para árabe y jemer — el generador de PDF no soporta esos guiones — y lo decimos en pantalla antes de que pagues."
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
            "p": "Por eso Naming-Link fija el sonido antes de buscar hanja. Si el nombre es \"지은\", el significado solo puede elegirse entre los caracteres asignados a la lectura **지** y los caracteres asignados a la lectura **은**."
          },
          {
            "p": "Por muy bueno que sea un significado, un carácter cuya lectura no coincida no puede ser usado para ese nombre. También nunca cambiamos el sonido de un nombre para ajustarlo a un carácter — un nombre se pronuncia durante toda la vida, y el sonido se establece primero, seguido del hanja."
          }
        ]
      },
      {
        "title": "Los apellidos están fuera de esta tabla",
        "blocks": [
          {
            "p": "Esto se malinterpreta a menudo. **La tabla rige el nombre de pila, no el apellido.** Un apellido sigue lo que ya está en el registro familiar, por lo que algunas personas utilizan caracteres que no están en la tabla de hanja para nombres."
          },
          {
            "p": "Por eso Naming-Link trata el hanja del apellido de manera diferente. Solo te ayudamos a encontrar un apellido, y dejamos un campo para ingresar uno directamente, para personas cuyo carácter está fuera de la tabla. Apellidos de dos sílabas como Namgung y Seonwoo se ingresan de la misma manera."
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
            "p": "Si un nombre coreano es lo que deseas, **ese es un servicio diferente.** Uno mantiene tu nombre y solo cambia el guion; el otro propone un nuevo nombre."
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
            "p": "La misma escritura puede diferir dependiendo de dónde provenga un nombre, así que pedimos tu idioma y país y trabajamos a partir de esa pronunciación."
          }
        ]
      },
      {
        "title": "Varias escrituras, lado a lado",
        "blocks": [
          {
            "p": "No hay una sola respuesta correcta. La escritura más cercana al sonido original, la que se usa más comúnmente en Corea, y la más fácil de escribir son a menudo tres cosas diferentes. Así que las mostramos juntas y decimos qué las separa."
          },
          {
            "p": "Si ninguna de ellas se siente correcta, puedes añadir una pista sobre el sonido que deseas y volver a ejecutarlo — por ejemplo, que una sílaba particular debería escribirse de manera diferente."
          }
        ]
      },
      {
        "kind": "note",
        "title": "No hay hanja aquí",
        "blocks": [
          {
            "p": "No adjuntamos hanja a una transliteración. El hanja lleva significado, y este flujo se trata de sonido. Igualar caracteres solo al sonido puede llevarte a un significado que nunca pediste."
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
            "p": "Puedes elegir un apellido tú mismo o dejar que te recomendemos uno. De cualquier manera, será **un apellido que existe**."
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
    "summary": "Aquí anunciamos cambios que afectan cómo usas el servicio.",
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
              "**Pagos y reembolsos** — si un documento nunca fue producido, o el monto cobrado difiere de tu pedido, reembolsamos en su totalidad. Consulta la [política de reembolsos](/refund-policy).",
              "**Privacidad** — solicitudes para acceder, corregir o eliminar tus datos. Consulta la [política de privacidad](/privacy).",
              "**Correcciones** — si un significado, lectura o cálculo de hanja parece incorrecto, háznoslo saber. Mencionar qué pantalla y qué ingresaste ayuda mucho.",
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
  },
  "guide/avoid": {
    "eyebrow": "Costumbres",
    "title": "Caracteres que se evitan tradicionalmente",
    "summary": "No está prohibido por ley, pero es una costumbre. Hemos escrito sobre lo que se ha evitado y por qué, y cómo lo manejamos.",
    "backLabel": "Guía de uso",
    "sections": [
      {
        "title": "Caracteres que son legalmente aceptables",
        "blocks": [
          {
            "stats": [
              {
                "value": "{avoidTotal} caracteres",
                "label": "Caracteres evitados compilados"
              },
              {
                "value": "{avoidCommonlyUsed} caracteres",
                "label": "Entre ellos, caracteres que aún se usan comúnmente"
              }
            ]
          },
          {
            "p": "Hay caracteres que están incluidos en la lista de caracteres para nombres y **son legalmente aceptables**, pero se consideran inadecuados para nombres."
          },
          {
            "p": "El pensamiento subyacente es que **\"un significado excesivo es en realidad indeseable.\"** Esto incluye caracteres que se consideran demasiado preciosos (珍·寶), caracteres vistos como teniendo una presencia demasiado fuerte (王·帝), y aquellos considerados demasiado grandiosos para que una persona los encarne, como el cielo o deidades. Esto refleja un antiguo sentido de moderación, creyendo que un nombre puede eclipsar a la persona."
          },
          {
            "p": "**Sin embargo, estos caracteres no son inutilizables.** No es una prohibición legal, sino una costumbre, y las costumbres varían según la región, la familia y la generación, y pueden cambiar con el tiempo."
          },
          {
            "p": "De hecho, entre los {avoidTotal} caracteres que compilamos, {avoidCommonlyUsed} se utilizan aún comúnmente en nombres. El hecho de que se sepa que se evitan pero aún se usen ampliamente indica que esta costumbre no es absoluta."
          }
        ]
      },
      {
        "title": "¿Qué categorías hay?",
        "blocks": [
          {
            "p": "Los caracteres actualmente compilados se dividen en siete categorías."
          },
          {
            "ul": [
              "**Tesoros y objetos** — Caracteres que se refieren directamente a la riqueza o a objetos",
              "**Cielo y naturaleza** — Cosas como el sol, la luna y el cielo que se consideran demasiado grandiosas para que una persona las encarne",
              "**Reyes y nobleza** — Caracteres que significan estatus, como rey o emperador",
              "**Seres divinos** — Caracteres que se refieren a reinos sagrados, como dioses o espíritus",
              "**Estaciones y otros** — Caracteres vinculados a momentos o estados específicos",
              "**Animales** — Animales considerados de fuerte energía, como dragones o tigres",
              "**Excesividad** — Caracteres vistos como teniendo significados excesivamente grandes o desbordantes"
            ]
          }
        ]
      },
      {
        "title": "Puedes añadir o eliminar caracteres tú mismo",
        "blocks": [
          {
            "p": "No eliminamos arbitrariamente estos caracteres. **Hemos proporcionado dos opciones en la pantalla de entrada para que el nombrador elija cómo manejarlos.**"
          }
        ]
      },
      {
        "kind": "note",
        "title": "Opciones disponibles en la pantalla de entrada",
        "blocks": [
          {
            "p": "**Excluir caracteres evitados de los candidatos** — Si está habilitado, se excluyen completamente. Si está deshabilitado, permanecen en los resultados con una etiqueta de \"Tradicionalmente evitado\" y la razón adjunta."
          },
          {
            "p": "**Excluir incluso caracteres comúnmente usados** — Esto excluye caracteres que están en la lista de evitación pero que en realidad se usan ampliamente (圭·琳·玲·元·太·星·海, etc.). Si está habilitado, los candidatos se reducirán significativamente."
          },
          {
            "p": "El valor predeterminado es **no excluir, sino solo mostrar**. Si se eliminan silenciosamente de la lista, puede parecer a aquellos que quieren usar ese carácter como si no existiera."
          }
        ]
      },
      {
        "title": "Asegurando que las opciones no desaparezcan",
        "blocks": [
          {
            "p": "Si no quedan caracteres utilizables para esa sílaba, levantaremos la exclusión para esa sílaba y mostraremos candidatos. Creemos que es mejor que no tener opciones en absoluto."
          }
        ]
      }
    ]
  },
  "guide/how-korean-to-global": {
    "eyebrow": "Base del servicio",
    "title": "¿Cuál es la base para la conversión de nombres globales?",
    "summary": "Proporcionamos candidatos desde cinco perspectivas, manteniendo los sistemas de escritura de cada idioma y utilizando solo nombres existentes.",
    "backLabel": "Guía de uso",
    "sections": [
      {
        "title": "Los candidatos se proporcionan desde cinco perspectivas",
        "blocks": [
          {
            "p": "No hay una sola forma de traducir un nombre a otro idioma. Dependiendo de si se preserva el sonido o el significado, se elige un nombre natural en el contexto local o se prioriza la individualidad, las respuestas variarán. Por lo tanto, en lugar de presentar una opción, proporcionamos **una de cada una de cinco perspectivas diferentes**."
          },
          {
            "ul": [
              "**Opción de preservación del sonido** — Preserva el sonido del nombre original tanto como sea posible",
              "**Opción de traducción de significado** — Traduce el significado contenido en el nombre al nombre de ese idioma",
              "**Opción de compromiso entre sonido y significado** — Toma la mitad de cada uno",
              "**Opción auténtica local** — Elige nombres que realmente se usan comúnmente en ese contexto cultural",
              "**Opción de individualidad y marca** — Prioriza nombres que sean memorables y distintivos"
            ]
          },
          {
            "p": "Se garantiza que se proporcionen cinco opciones. Dado que las preferencias varían de persona a persona, creemos que es mejor permitir elecciones en lugar de presentar una como la respuesta correcta."
          }
        ]
      },
      {
        "title": "Cada idioma tiene diferentes reglas del sistema de escritura",
        "blocks": [
          {
            "p": "Al traducir a un idioma que no utiliza letras romanas, debe escribirse en el guion de ese idioma. Para el japonés, sería kana y kanji; para el ruso, mongol y kazajo, sería cirílico; para el árabe, sería el guion árabe; y para el tailandés, jemer e hindi, sería sus respectivos guiones. Si lo escribes en letras romanas y lo llamas un \"nombre japonés\", no se puede usar en ese país."
          },
          {
            "p": "Por lo tanto, tenemos reglas separadas para el sistema de escritura de cada idioma, y el servidor verifica una vez más para asegurarse de que los resultados estén en ese sistema de escritura. Errores como omitir apellidos o mezclar en Hangul se filtran aquí."
          }
        ]
      },
      {
        "title": "Usamos nombres que realmente se utilizan",
        "blocks": [
          {
            "p": "Para evitar crear nombres que suenen plausibles pero que no existen en ese país, basamos nuestras opciones en nombres existentes. Los nombres se utilizan en documentos y presentaciones, así que si una persona local piensa \"no hay tal nombre\", no se puede usar."
          }
        ]
      },
      {
        "title": "Separar selección y descripción",
        "blocks": [
          {
            "p": "Manejamos la tarea de determinar cinco candidatos por separado de la tarea de describir cada candidato en detalle. Dado que la descripción toma mucho tiempo, separamos esa parte para crearla simultáneamente."
          }
        ]
      },
      {
        "kind": "note",
        "title": "¿Por qué se cambió esto?",
        "blocks": [
          {
            "p": "Inicialmente, creamos las cinco perspectivas por separado. Era más rápido, pero **el número de candidatos variaba cada vez.** A medida que cada persona seleccionaba candidatos, había superposiciones o discrepancias, y si uno fallaba, ese candidato desaparecía por completo, resultando en solo dos o tres en lugar de cinco."
          },
          {
            "p": "Ahora, dado que determinamos el conjunto de candidatos y la distribución de perspectivas a la vez, **el número es fijo.** Incluso si una descripción falla, los candidatos permanecen y se presentan con información breve. Creemos que es mejor tener consistentemente el mismo número, incluso si toma un poco más de tiempo."
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
  "effective": "En vigor a partir de {date}",
  "pager": {
    "label": "Páginas de aviso",
    "newer": "← Más reciente",
    "older": "Más antiguo →"
  },
  "items": {
    "2026-08-02-contact": {
      "title": "Las páginas de contacto y sobre están ahora abiertas",
      "body": [
        "Las preguntas, reembolsos, solicitudes de privacidad e informes de errores ahora tienen un lugar al que ir. La página de contacto en el pie de página enumera nuestro correo electrónico y detalles de la empresa.",
        "Lo que nuestras respuestas se basan y lo que deliberadamente no hacemos está escrito en la página sobre."
      ]
    },
    "2026-08-01-pdf-language": {
      "title": "Los informes PDF se emiten en inglés para árabe y jemer",
      "body": [
        "Si estás utilizando el servicio en árabe o jemer, el PDF que compras se produce en inglés. La herramienta que organiza nuestros documentos aún no puede establecer párrafos en esos dos guiones.",
        "La pantalla permanece en tu idioma, y tu nombre se imprime en tu propio guion dentro del documento.",
        "La misma nota aparece antes del pago. Cuando la herramienta soporte estos guiones, lo diremos aquí."
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
