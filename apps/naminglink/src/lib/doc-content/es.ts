import type { DocPage, NoticeCopy } from "./types";
import type { DocKey } from "./ko";

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
        "title": "En qué se basan nuestras respuestas",
        "blocks": [
          {
            "p": "El hanja proviene de la **tabla oficial de hanja para nombres de la Corte Suprema de Corea.** Cada carácter tiene una lectura fija para su uso en nombres, y los caracteres fuera de la tabla no pueden ser registrados. No añadimos a esa lista ni elegimos favoritos."
          },
          {
            "p": "Los saju y las cifras de los cinco elementos se calculan a partir del **almanaque lunisolar coreano**, con la hora de nacimiento corregida al tiempo solar verdadero para el lugar de nacimiento. La lectura es una referencia tradicional, no una predicción."
          },
          {
            "p": "Las explicaciones escritas son producidas por IA. Para evitar que **invente cosas**, al modelo se le da solo tu entrada y nuestros propios datos de referencia, y se le indica que se mantenga dentro de eso. Las guías explican esto en detalle."
          }
        ]
      },
      {
        "title": "Lo que no hacemos",
        "blocks": [
          {
            "ul": [
              "**No contamos fortunas.** Nada aquí promete suerte, riqueza o protección.",
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
            "p": "El servicio está disponible en 23 idiomas. Los PDFs de pago se emiten en inglés para árabe y jemer — el renderizador de PDF no soporta esos scripts — y lo decimos en pantalla antes de que pagues."
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
            "p": "La tabla de hanja para nombres no solo decide qué caracteres pueden ser usados. **También fija cómo se lee cada carácter cuando aparece en un nombre.** Esa lectura fija es la que se sigue para el registro."
          },
          {
            "p": "La mayoría de los hanja tienen varias lecturas posibles. Un nombre, sin embargo, se escribe en documentos y se pronuncia en voz alta, por lo que necesita exactamente una. La tabla, por lo tanto, asigna a cada carácter su lectura para uso en nombres, y no se puede registrar ninguna otra lectura."
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
            "p": "Por muy bueno que sea un significado, un carácter cuya lectura no coincida no puede ser usado para ese nombre. También nunca cambiamos el sonido de un nombre para ajustarlo a un carácter — un nombre se pronuncia durante toda la vida, y el sonido se establece primero, con el hanja siguiendo."
          }
        ]
      },
      {
        "title": "Los apellidos están fuera de esta tabla",
        "blocks": [
          {
            "p": "Esto a menudo se malinterpreta. **La tabla rige el nombre dado, no el apellido.** Un apellido sigue lo que ya está en el registro familiar, por lo que algunas personas utilizan caracteres que no están en la tabla de hanja para nombres."
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
            "p": "Si un nombre coreano es lo que deseas, **eso es un servicio diferente**. Uno mantiene tu nombre y solo cambia el guion; el otro propone un nuevo nombre."
          }
        ]
      },
      {
        "title": "Sonidos que el coreano no tiene",
        "blocks": [
          {
            "p": "Cada idioma tiene sonidos que el coreano no tiene — f, v, z, th, y distinciones vocálicas que el coreano no hace. Para esos escribimos lo que **realmente dice un hablante de coreano** cuando lee tu nombre en voz alta, en lugar de transcribir la fonética original símbolo por símbolo. El objetivo es la ortografía que se usará, no la más técnicamente fiel."
          },
          {
            "p": "La misma ortografía puede diferir dependiendo de dónde provenga un nombre, así que pedimos tu idioma y país y trabajamos a partir de esa pronunciación."
          }
        ]
      },
      {
        "title": "Varios deletreos, uno al lado del otro",
        "blocks": [
          {
            "p": "No hay una única respuesta correcta. La ortografía más cercana al sonido original, la que se usa más comúnmente en Corea, y la que es más fácil de escribir son a menudo tres cosas diferentes. Así que las mostramos juntas y decimos qué las separa."
          },
          {
            "p": "Si ninguna de ellas se siente correcta, puedes añadir una pista sobre el sonido que deseas y ejecutarlo de nuevo — por ejemplo, que una sílaba particular debería escribirse de manera diferente."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Sin hanja aquí",
        "blocks": [
          {
            "p": "No adjuntamos hanja a una transliteración. Los hanja llevan significado, y este flujo es sobre sonido. Igualar caracteres solo al sonido puede llevarte a un significado que nunca pediste."
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
            "p": "En Corea, el apellido viene primero, y a diferencia de los nombres de pila, no se inventa libremente — lo heredas. Así que solo sugerimos apellidos que las personas coreanas realmente tienen. Nuestro grupo predeterminado son los **20 apellidos más comunes**, que juntos cubren aproximadamente el 80% de la población."
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
            "p": "Aquí proponemos un **nuevo nombre coreano**. Si deseas que tu nombre existente se escriba en Hangul — Michael como 마이클 — consulta la [guía de ortografía en Hangul](/guide/how-hangul-transliteration)."
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
    "summary": "Cómo comunicarse con nosotros para preguntas, reembolsos, solicitudes de privacidad e informes de errores, con los detalles de nuestra empresa.",
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
            "p": "No es necesario incluir un nombre o fecha de nacimiento en su mensaje. Los resultados gratuitos nunca se almacenan en nuestros servidores, por lo que no podemos volver a buscarlos; un número de pedido es suficiente."
          }
        ]
      }
    ]
  },
  "guide/avoid": {
    "eyebrow": "Costumbres",
    "title": "Caracteres Tradicionalmente Evitados",
    "summary": "No está prohibido por ley, pero es una costumbre. Hemos escrito sobre lo que se ha evitado y por qué, y cómo lo manejamos.",
    "backLabel": "Guía de Uso",
    "sections": [
      {
        "title": "Caracteres Que Son Legalmente Aceptables",
        "blocks": [
          {
            "stats": [
              {
                "value": "{avoidTotal} caracteres",
                "label": "Caracteres Evitados Compilados"
              },
              {
                "value": "{avoidCommonlyUsed} caracteres",
                "label": "Entre ellos, caracteres que aún se utilizan comúnmente"
              }
            ]
          },
          {
            "p": "Hay caracteres que están incluidos en la lista de caracteres para nombres personales y **son legalmente aceptables**, pero se consideran inadecuados para nombres."
          },
          {
            "p": "El pensamiento subyacente es que **\"un significado excesivo es en realidad indeseable.\"** Esto incluye caracteres que se consideran demasiado preciosos (珍 tesoro, 寶 joya), caracteres vistos como teniendo una presencia demasiado fuerte (王 rey, 帝 emperador), y aquellos considerados demasiado grandiosos para que una persona los encarne, como el cielo o deidades. Esto refleja un antiguo sentido de moderación, creyendo que un nombre puede eclipsar a la persona."
          },
          {
            "p": "**Sin embargo, estos caracteres no son inutilizables.** No es una prohibición legal, sino una costumbre, y las costumbres varían según la región, la familia y la generación, y pueden cambiar con el tiempo."
          },
          {
            "p": "De hecho, entre los {avoidTotal} caracteres que compilamos, {avoidCommonlyUsed} todavía se utilizan comúnmente en nombres. El hecho de que se sepa que se evitan pero que aún se utilicen ampliamente indica que esta costumbre no es absoluta."
          }
        ]
      },
      {
        "title": "¿Qué Categorías Existen?",
        "blocks": [
          {
            "p": "Los caracteres actualmente compilados se dividen en siete categorías."
          },
          {
            "ul": [
              "**Tesoros y Objetos** — Caracteres que se refieren directamente a la riqueza o a objetos",
              "**Cielo y Naturaleza** — Cosas como el sol, la luna y el cielo que se consideran demasiado grandiosas para que una persona las encarne",
              "**Reyes y Nobleza** — Caracteres que significan estatus, como rey o emperador",
              "**Seres Divinos** — Caracteres que se refieren a reinos sagrados, como dioses o espíritus",
              "**Estaciones y Otros** — Caracteres vinculados a momentos o estados específicos",
              "**Animales** — Animales considerados con una energía fuerte, como dragones o tigres",
              "**Excesividad** — Caracteres vistos como teniendo significados excesivamente grandes o desbordantes"
            ]
          }
        ]
      },
      {
        "title": "Puedes Agregar o Eliminar Caracteres Tú Mismo",
        "blocks": [
          {
            "p": "No eliminamos arbitrariamente estos caracteres. **Hemos proporcionado dos opciones en la pantalla de entrada para que el nombrador elija cómo manejarlos.**"
          }
        ]
      },
      {
        "kind": "note",
        "title": "Opciones Disponibles en la Pantalla de Entrada",
        "blocks": [
          {
            "p": "**Excluir Caracteres Evitados de los Candidatos** — Si está habilitado, se excluyen completamente. Si está deshabilitado, permanecen en los resultados con una etiqueta de \"Tradicionalmente Evitados\" y la razón adjunta."
          },
          {
            "p": "**Excluir Incluso Caracteres Comúnmente Usados** — Esto excluye caracteres que están en la lista de evitación pero que en realidad se utilizan ampliamente (圭·琳·玲·元·太·星·海, etc.). Si está habilitado, los candidatos se reducirán significativamente."
          },
          {
            "p": "El valor predeterminado es **no excluir, sino solo mostrar**. Si se eliminan silenciosamente de la lista, puede parecer a aquellos que quieren usar ese carácter que no existe."
          }
        ]
      },
      {
        "title": "Asegurando Que las Opciones No Desaparezcan",
        "blocks": [
          {
            "p": "Si no quedan caracteres utilizables para esa sílaba, levantaremos la exclusión para esa sílaba y mostraremos candidatos. Creemos que es mejor que no tener opciones en absoluto."
          }
        ]
      }
    ]
  },
  "guide/how-korean-to-global": {
    "eyebrow": "Base del Servicio",
    "title": "¿Cuál Es la Base para la Conversión de Nombres Globales?",
    "summary": "Proporcionamos candidatos desde cinco perspectivas, manteniendo los sistemas de escritura de cada idioma y utilizando solo nombres existentes.",
    "backLabel": "Guía de Uso",
    "sections": [
      {
        "title": "Los Candidatos Se Proporcionan Desde Cinco Perspectivas",
        "blocks": [
          {
            "p": "No hay una sola forma de traducir un nombre a otro idioma. Dependiendo de si se preserva el sonido o el significado, se elige un nombre natural en el contexto local o se prioriza la individualidad, las respuestas variarán. Por lo tanto, en lugar de presentar una opción, proporcionamos **una de cada una de las cinco perspectivas diferentes**."
          },
          {
            "ul": [
              "**Opción de Preservación del Sonido** — Preserva el sonido del nombre original tanto como sea posible",
              "**Opción de Traducción de Significado** — Traduce el significado contenido en el nombre al nombre de ese idioma",
              "**Opción de Compromiso entre Sonido y Significado** — Toma la mitad de cada uno",
              "**Opción Auténtica Local** — Elige nombres que realmente se utilizan comúnmente en ese contexto cultural",
              "**Opción de Individualidad y Marca** — Prioriza nombres que sean memorables y distintivos"
            ]
          },
          {
            "p": "Se garantiza que se proporcionen cinco opciones. Dado que las preferencias varían de persona a persona, creemos que es mejor permitir elecciones en lugar de presentar una como la respuesta correcta."
          }
        ]
      },
      {
        "title": "Cada Idioma Tiene Diferentes Reglas del Sistema de Escritura",
        "blocks": [
          {
            "p": "Al traducir a un idioma que no utiliza letras romanas, debe escribirse en el guion de ese idioma. Para el japonés, sería kana y kanji; para el ruso, mongol y kazajo, sería cirílico; para el árabe, sería en escritura árabe; y para el tailandés, jemer e hindi, sería en sus respectivos guiones. Si lo escribes en letras romanas y lo llamas un \"nombre japonés\", no puede usarse en ese país."
          },
          {
            "p": "Por lo tanto, tenemos reglas separadas para el sistema de escritura de cada idioma, y el servidor verifica una vez más para asegurarse de que los resultados estén en ese sistema de escritura. Errores como omitir apellidos o mezclar en Hangul se filtran aquí."
          }
        ]
      },
      {
        "title": "Usamos Nombres Que Realmente Se Usan",
        "blocks": [
          {
            "p": "Para evitar crear nombres que suenen plausibles pero que no existen en ese país, basamos nuestras opciones en nombres existentes. Los nombres se utilizan en documentos e introducciones, por lo que si una persona local piensa \"no hay tal nombre\", no puede usarse."
          }
        ]
      },
      {
        "title": "Separamos Selección y Descripción",
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
  },
  "guide/how-hanja-meaning": {
    "eyebrow": "Base del Servicio",
    "title": "¿Cuál es la base para emparejar los significados de hanja?",
    "summary": "Primero, los sonidos son fijos, y solo se reúnen los hanja que pueden registrarse con ese sonido, y el significado se ve como una combinación en lugar de un solo carácter.",
    "backLabel": "Guía de Uso",
    "sections": [
      {
        "title": "Primero, fija los sonidos",
        "blocks": [
          {
            "p": "Si has decidido por \"지은\", entonces **지** y **은** no cambian. No alteramos el sonido del nombre para que coincida con el hanja. Un nombre es algo que se llama de por vida, y creemos que el orden es que el sonido se fije primero, seguido del hanja."
          },
          {
            "figure": "hanja-match-flow",
            "labels": {
              "soundStep": "① Fija el sonido",
              "soundNote": "Nunca lo cambiamos para ajustarlo a un carácter",
              "tableStep": "② Filtra por la tabla oficial",
              "tableBody": "solo caracteres asignados a esa lectura",
              "tableNote": "de todos los {total} caracteres en la tabla",
              "tableNoteNoCount": "solo caracteres que están en la tabla",
              "combineStep": "③ Lee los dos juntos",
              "combineNote": "el significado es cómo se lee el par, no cada carácter por separado"
            },
            "caption": "Este es el orden en el que se reducen los candidatos. No se trata de elegir hanja primero y emparejar los sonidos, sino que los sonidos vienen primero, y solo los caracteres designados para ser leídos con ese sonido se convierten en candidatos."
          }
        ]
      },
      {
        "title": "Reúne solo hanja que pueden registrarse con ese sonido",
        "blocks": [
          {
            "p": "La tabla oficial de hanja para nombres tiene una lectura designada para cada carácter cuando se usa en nombres. Solo los caracteres designados para ser leídos como **지** y **은** se convierten en candidatos. No importa cuán bueno sea el significado, si la lectura no coincide, no puede ser el hanja para ese nombre."
          },
          {
            "p": "El rango para seleccionar candidatos son los {characterTotal} caracteres de la tabla del Tribunal Supremo. Los caracteres que no están en esta tabla no se presentan en absoluto; incluso si se muestran, no pueden ser registrados."
          },
          {
            "p": "El número de caracteres en la tabla publicada por el Tribunal Supremo es ligeramente mayor que esto. La tabla también incluye **caracteres sin códigos de caracteres estándar**, que no pueden mostrarse correctamente en pantallas y documentos, por lo que esos caracteres han sido excluidos de los candidatos. Debes verificar con la autoridad correspondiente si puedes registrarte con esos caracteres."
          }
        ]
      },
      {
        "title": "El significado se ve como una combinación, no como un solo carácter",
        "blocks": [
          {
            "p": "El significado de cada carácter individual siendo bueno y el significado leído cuando se combinan dos caracteres siendo bueno son diferentes. Los nombres se leen como combinaciones, por lo que miramos las combinaciones juntas. Si tienes significados específicos que deseas incluir o evitar, esos se tienen en cuenta."
          },
          {
            "p": "Si estás usando un carácter de generación, ese carácter es fijo, y se buscan combinaciones de las posiciones restantes. El apellido (성) no está restringido por la tabla oficial de hanja para nombres, por lo que se trata por separado."
          }
        ]
      },
      {
        "title": "Indicamos las costumbres de evitación sin eliminarlas",
        "blocks": [
          {
            "p": "Si un carácter que tradicionalmente se considera que debe evitarse está incluido en los candidatos, no lo eliminamos, sino que mostramos la razón junto con él. Este es un asunto de costumbre, no de ley, y puedes optar por excluirlo completamente de la pantalla de entrada. Para más detalles, consulta [Hanja Tradicionalmente Evitados](/guide/avoid)."
          }
        ]
      },
      {
        "title": "También te informamos sobre las razones de exclusión",
        "blocks": [
          {
            "p": "Mostramos por qué ciertos caracteres fueron excluidos de los candidatos. Si solo mostramos lo que fue elegido, no puedes saber \"¿por qué este?\" Si no quedan caracteres utilizables para esa sílaba, levantaremos la exclusión para esa sílaba y mostraremos los candidatos."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Cómo leer los resultados",
        "blocks": [
          {
            "p": "Los candidatos son **perspectivas, no clasificaciones**. El primero no significa que sea el mejor nombre; se seleccionan desde diferentes perspectivas. Aquellos que priorizan la combinación de significados, aquellos que eligen caracteres poco comunes y aquellos que enfatizan la neutralidad se presentan uno al lado del otro. La respuesta varía dependiendo de qué perspectiva valoras."
          }
        ]
      }
    ]
  },
  "guide/what-we-dont-use": {
    "eyebrow": "Nuestros Estándares",
    "title": "Lo Que No Usamos",
    "summary": "No asignamos fortuna total ni puntuaciones numéricas, ni usamos conteos de trazos. Los cinco elementos se utilizan solo como un eje suplementario. Aquí están las razones.",
    "backLabel": "Guía de Uso",
    "sections": [
      {
        "title": "Razones para no asignar fortuna total o puntuaciones numéricas",
        "blocks": [
          {
            "p": "Existen métodos que asignan fortuna total o puntuaciones numéricas a los nombres para calificarlos. Naming-Link no proporciona esos números. Las razones son cuatro."
          },
          {
            "p": "**Primero, no hay un solo estándar.** Los métodos para calcular la fortuna varían según la escuela, y el mismo nombre puede ser calificado positivamente por un estándar y negativamente por otro. No tenemos base para decidir cuál es correcto. Es deshonesto presentar uno como si fuera la respuesta."
          },
          {
            "p": "**Segundo, esos cálculos dependen de los conteos de trazos.** Sin embargo, los datos del Tribunal Supremo no incluyen conteos de trazos en absoluto. Además, los conteos de trazos pueden variar dependiendo de si se cuentan como caracteres regulares o simplificados y cómo se cuentan los radicales. Dado que los números fundamentales no están establecidos de manera definitiva, las puntuaciones construidas sobre ellos no pueden ser definitivas."
          },
          {
            "p": "**Tercero, los números parecen más sólidos que la realidad.** Cuando dice \"87 puntos\", suena como un valor medido en lugar de una interpretación convencional. Aquellos que nombran pueden sentirse presionados por ese número, dejando de lado lo que realmente importa (¿Es agradable de llamar? ¿El significado encaja? ¿Contiene los deseos deseados?)."
          },
          {
            "p": "**Cuarto, no hay forma de verificar.** La relación entre un nombre y la vida de una persona no puede ser verificada. Convertir algo que no se puede decir que es correcto o incorrecto en una puntuación resulta en un número que no puede ser confirmado, aunque no puede estar mal."
          },
          {
            "p": "Solo usamos lo que puede ser **sustentado.** La tabla oficial de hanja para nombres del Tribunal Supremo, las lecturas designadas para cada carácter y los significados listados en la tabla. En cambio, proporcionamos razones por las cuales se seleccionó este candidato y por qué ciertos caracteres fueron excluidos, mostrando **razones en lugar de puntuaciones**."
          }
        ]
      },
      {
        "title": "No usamos conteos de trazos",
        "blocks": [
          {
            "p": "Los datos oficiales de hanja para nombres proporcionados por el Tribunal Supremo no incluyen conteos de trazos. Entre los {characterTotal} caracteres que recibimos, **no hay un solo carácter con conteos de trazos.**"
          },
          {
            "p": "Para usar conteos de trazos, necesitaríamos obtener números de algún otro lugar, pero si no podemos aclarar de dónde vinieron esos números y qué criterios se utilizaron para contarlos, significaría juzgar nombres basados en números infundados. Hemos decidido no evaluar nombres basados en valores que no pueden ser sustentados."
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
              "saeng": "Generación — cada una da origen a su vecina",
              "geuk": "Control — cada una restringe a la que salta"
            },
            "caption": "Las relaciones entre los cinco elementos. Moverse a lo largo del círculo representa la generación mutua (相生), mientras que saltar uno y presionar hacia abajo representa la restricción mutua (相剋). Usamos esta relación solo como un eje suplementario para comparar candidatos."
          },
          {
            "p": "Si has ingresado tu mes de nacimiento, usamos una referencia simplificada de los cinco elementos basada en ese mes como un eje suplementario para comparar candidatos. Sin embargo, esto no es un análisis preciso de saju, y **no afirmamos que los nombres determinen el destino o carácter de una persona.**"
          },
          {
            "p": "En la selección final, lo que priorizamos son los sonidos, combinaciones de significados, los valores que la familia desea transmitir y si realmente se puede registrar. Si no has ingresado tu mes de nacimiento, excluimos completamente la referencia de los cinco elementos del análisis — no hacemos suposiciones arbitrarias sobre información desconocida."
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
    "title": "¿Qué se incluye en los productos de pago?",
    "summary": "Aclaramos cuánto es visible de forma gratuita y qué características adicionales vienen con el pago para cada producto. Los precios se obtienen de la configuración real del producto.",
    "backLabel": "Guía de Uso",
    "sections": [
      {
        "title": "¿Qué es visible de forma gratuita?",
        "blocks": [
          {
            "p": "Crear un nombre y ver los resultados es **gratis**. No se requiere registro de membresía. Puedes ver los significados coincidentes de hanja, crear nombres coreanos, conversión de nombres globales y notación de pronunciación en Hangul, junto con resultados recomendados y sus justificaciones en la pantalla."
          },
          {
            "p": "Los productos de pago no **revenden lo que ya se ha mostrado en la pantalla.** Abren más candidatos, añaden más explicaciones o crean un formato que se puede almacenar o transmitir."
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
            "p": "Si no tienes prisa, no tienes que comprar. Los **resultados de abrir a través de anuncios y los de pago son completamente los mismos** — solo es cuestión de esperar, y pagar no produce mejores candidatos."
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
              "**Máximo 10 candidatos de hanja, saju y el informe integral de los cinco elementos** — {priceTenSaju}. Además de lo anterior, incluye el gráfico de saju derivado de la fecha de nacimiento y las fuerzas de los cinco elementos, examinando por qué un hanja particular se adapta a ese nombre desde la perspectiva de los cinco elementos."
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "El hanja en sí es información de acceso público",
        "blocks": [
          {
            "p": "El hanja utilizable y sus significados provienen de la tabla oficial de hanja de nombres establecida por la Corte Suprema de Corea, y todos son de acceso público en los documentos de orientación del servicio. Lo que los productos de pago venden no es información de hanja, sino **el acto de seleccionar y explicarlo según el nombre**."
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
              "**Arte de Nombre en Hangul** — 2 páginas. Incluye una portada de caligrafía y guía de pronunciación. Contiene cómo escribir el nombre en Hangul y cómo pronunciarlo."
            ]
          }
        ]
      },
      {
        "title": "Sello de Nombre",
        "blocks": [
          {
            "p": "Grabamos el nombre creado en la pantalla en un sello físico y te lo enviamos. Los precios varían según el modelo — sello redondo {priceStampRound}, sello cuadrado {priceStampSquare}, sello de ébano {priceStampEbony}. También está disponible el envío internacional."
          },
          {
            "p": "**A partir de aquí, los productos incluyen envío.** A diferencia de los artículos anteriores, la producción y el envío toman tiempo, y se requiere una dirección de recepción. La información de envío se utiliza solo para el procesamiento del pedido y retención legal, y una vez que el procesamiento se completa, se destruirá después del período especificado en la política."
          }
        ]
      },
      {
        "title": "Cosas a Saber Antes de Comprar",
        "blocks": [
          {
            "p": "**Los productos digitales se proporcionan inmediatamente después del pago.** Puedes cancelar y recibir un reembolso completo en cualquier momento antes de que comience la descarga, pero una vez que la descarga se completa, la retirada debido a un simple cambio de opinión está restringida (Artículo 17, Párrafo 2 de la Ley de Comercio Electrónico). Esta condición se acuerda por separado en la pantalla de pago."
          },
          {
            "p": "**Las quejas sobre el contenido de los resultados no son motivo para un reembolso.** Sin embargo, si el documento no fue creado, el archivo no se puede abrir, o el monto del pago difiere del pedido, se procesará como una reemisión o reembolso completo."
          },
          {
            "p": "Las condiciones detalladas se describen en la [Política de Reembolso](/refund-policy) y la [Guía de Precios](/pricing). Este texto sirve como guía sobre lo que se incluye, y las condiciones legales tienen prioridad en esos dos documentos."
          }
        ]
      }
    ]
  },
  "guide/hanja-basics": {
    "eyebrow": "Sistema",
    "title": "¿Qué es el hanja oficial de nombres?",
    "summary": "El hanja que se puede usar para los nombres de los niños ha sido establecido por la Corte Suprema en una tabla. Esto resume qué es la tabla y por qué ha sido establecida.",
    "backLabel": "Guía de Uso",
    "sections": [
      {
        "title": "¿Qué es el hanja oficial de nombres?",
        "blocks": [
          {
            "stats": [
              {
                "value": "{characterTotal} caracteres",
                "label": "Hanja oficial de nombres"
              },
              {
                "value": "{syllableCount} sílabas",
                "label": "Sílabas en Hangul incluidas"
              },
              {
                "value": "{effectiveDate}",
                "label": "Fecha de referencia de la tabla"
              }
            ]
          },
          {
            "p": "No puedes usar cualquier carácter para el nombre de un niño. **El hanja que se puede usar para el registro de nacimiento ha sido establecido por la Corte Suprema en una tabla, y solo los caracteres en esa tabla pueden ser registrados como el hanja para nombres.** Esto se llama hanja oficial de nombres."
          }
        ]
      },
      {
        "title": "¿Por qué ha sido establecido?",
        "blocks": [
          {
            "p": "Hay decenas de miles de hanja. Entre ellos, algunos tienen significados desagradables, algunos ya no se utilizan y no tienen lecturas conocidas, y algunos no se pueden mostrar en computadoras en absoluto. Si tales caracteres se incluyen en un nombre, la persona que finalmente lleva la carga es quien usará ese nombre durante toda su vida. Los nombres pueden ser rotos o leídos de manera diferente en varios lugares como el registro de residentes, pasaportes, bancos y escuelas, lo que requiere que el individuo explique su propio nombre."
          },
          {
            "p": "Por lo tanto, se ha elegido un método para predefinir el rango de hanja que se puede utilizar en los nombres. Más que ser una regulación restrictiva, es más bien un mecanismo para asegurar que los nombres se puedan usar sin problemas a lo largo de la vida de una persona."
          }
        ]
      },
      {
        "title": "¿Cuál es la base para las definiciones?",
        "blocks": [
          {
            "p": "La Corte Suprema establece la tabla oficial de nombre-hanja, que se revisa según sea necesario, y se añaden caracteres."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Materiales utilizados en esta pantalla",
        "blocks": [
          {
            "p": "{publisher} datos oficiales de nombre-hanja · A partir de {effectiveDate}"
          },
          {
            "p": "{characterTotal} caracteres cubren {syllableCount} sílabas en Hangul. El valor hash del archivo original también se almacena, por lo que si la tabla cambia, se puede verificar cuándo y qué ha cambiado."
          }
        ]
      },
      {
        "title": "El número de caracteres anunciado por la Corte Suprema difiere de lo que mostramos",
        "blocks": [
          {
            "p": "**El nombre-hanja oficial anunciado por la Corte Suprema es de {announcedTotal} caracteres, mientras que lo que presentamos como candidatos es de {characterTotal} caracteres.** No hay razón para ocultar esta diferencia, así que lo decimos claramente."
          },
          {
            "p": "Si revisas los datos de consulta de la Corte Suprema, contiene {listedTotal} caracteres. Entre ellos, **{excludedNoStandardCode} caracteres** son **caracteres que no tienen un lugar en el código de caracteres común global (Unicode).** El sistema de la Corte Suprema trata esos caracteres con números que solo funcionan dentro de su propio sistema, y se muestran como **imágenes** en lugar de caracteres en la pantalla."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Agregar más fuentes no resolverá el problema",
        "blocks": [
          {
            "p": "Para que un carácter aparezca en la pantalla, debe tener un **número acordado por el mundo**, y la fuente contiene la imagen correspondiente a ese número. Los caracteres que no tienen un número no pueden ser incluidos en ninguna fuente. No importa cuántas fuentes agreguemos, estos caracteres aparecerán como cuadros vacíos."
          }
        ]
      },
      {
        "title": "Por lo tanto, han sido eliminados de los candidatos",
        "blocks": [
          {
            "p": "**Llenar la lista con caracteres que no se pueden mostrar no es útil.** La mayoría de los significados de estos caracteres también están vacíos en nuestros datos, lo que no se alinea con el método del servicio para elegir nombres basado en significados."
          },
          {
            "p": "**La razón más importante radica en la persona que usará el nombre.** Un nombre es un valor que se ingresará en varios lugares a lo largo de la vida de una persona. Los caracteres sin códigos de caracteres pueden no poder ser ingresados o impresos en sistemas de bancos, escuelas, hospitales o pasaportes, incluso después de completar el registro de nacimiento. Por lo tanto, no podemos recomendar tales caracteres."
          },
          {
            "p": "Sin embargo, **no determinamos si esos caracteres pueden ser utilizados o no.** Dado que son caracteres en la tabla de la Corte Suprema, el registro en sí puede ser posible. Si realmente deseas usar ese carácter, consulta directamente en el sistema electrónico de registro de relaciones familiares de la Corte Suprema, y **consulta con la autoridad correspondiente sobre la usabilidad real.**"
          }
        ]
      },
      {
        "title": "Si deseas usar hanja que no está en la tabla",
        "blocks": [
          {
            "p": "No puedes usarlos. Para ser precisos, esos caracteres no se registrarán como hanja para el nombre, y el nombre solo se registrará en Hangul. Si deseas usar hanja junto a ello, debes elegir de la tabla."
          },
          {
            "p": "Por lo tanto, no presentamos caracteres que no están en la tabla como candidatos. Todos los hanja visibles en la pantalla son caracteres que realmente se pueden usar para el registro de nacimiento. La lista completa está disponible en la [Lista Completa de Nombre-Hanja Oficial](/guide/hanja)."
          }
        ]
      }
    ]
  },
  "guide/hanja": {
    "eyebrow": "Lista",
    "title": "Lista Completa de Nombre Hanja Oficial",
    "summary": "Hemos organizado los hanja que se pueden usar para el registro de nacimiento por consonante inicial. Puedes ver la lectura designada y el significado de cada carácter cuando se usa en nombres.",
    "backLabel": "Guía de Uso",
    "sections": [
      {
        "title": "Buscar por Consonante Inicial",
        "slot": "chosung",
        "blocks": [
          {
            "p": "Esto incluye todos los {characterTotal} caracteres de la tabla oficial de nombre-hanja de la Corte Suprema. Cada carácter incluye la **lectura cuando se usa en nombres** y su significado. Los caracteres no incluidos en la tabla no pueden ser registrados como hanja de nombre, por lo que debes elegir entre los caracteres listados aquí."
          },
          {
            "p": "Los dos números en el botón de abajo representan el **número de caracteres con esa consonante inicial** y el **número de sílabas cubiertas**."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Si el carácter que buscas no está en la lista",
        "blocks": [
          {
            "p": "El número de caracteres anunciado por la Corte Suprema es {announcedTotal}, pero esta lista contiene {characterTotal} caracteres. **La diferencia de {excludedNoStandardCode} caracteres son aquellos que no se pueden mostrar en ninguna fuente debido a la falta de un lugar en el código de caracteres universal.** El sistema de la Corte Suprema muestra esos caracteres como imágenes."
          },
          {
            "p": "Hemos detallado las razones de esto y por qué no recomendamos esos caracteres en [¿Qué es el Hanja de Nombre Oficial?](/guide/hanja-basics). Debes consultar con la autoridad correspondiente sobre la usabilidad real de esos caracteres."
          }
        ]
      },
      {
        "title": "Consonantes Iniciales con Pocos Caracteres",
        "slot": "tiny",
        "blocks": [
          {
            "p": "Las consonantes iniciales a continuación tienen muy pocos hanja de nombre oficial, por lo que las hemos mostrado aquí sin una página separada."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Cómo Leer Esta Lista",
        "blocks": [
          {
            "p": "Para **伽 · 가 · 절**, al usar \"伽\" en un nombre, se lee como **가** y significa \"templo\". Incluso para el mismo hanja, la lectura cuando se usa en nombres está fijada por la tabla, y no se puede usar de ninguna otra manera."
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
    "title": "Aún no hay avisos",
    "body": "Cuando algo cambie, aparecerá aquí."
  },
  "effective": "En vigor a partir de {date}",
  "pager": {
    "label": "Páginas de aviso",
    "newer": "← Más nuevo",
    "older": "Más antiguo →"
  },
  "items": {
    "2026-08-02-contact": {
      "title": "Las páginas de Contacto y Acerca de ya están abiertas",
      "body": [
        "Preguntas, reembolsos, solicitudes de privacidad e informes de errores ahora tienen un lugar al que ir. La página de contacto en el pie de página enumera nuestro correo electrónico y detalles de la empresa.",
        "Lo que nuestras respuestas se basan, y lo que deliberadamente no hacemos, está escrito en la página acerca de."
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
