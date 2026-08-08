import type { DocPage, NoticeCopy } from "./types";
import type { DocKey } from "./ko";

/** Español — `scripts/translate-doc-content.ts`가 만든다. 손으로 고치지 말 것. */
export const ES_DOCS = {
  "about": {
    "eyebrow": "Acerca de",
    "title": "Acerca de Naming-Link",
    "summary": "Te ayudamos a elegir y entender nombres coreanos. Aquí está lo que basamos nuestros resultados y lo que deliberadamente no hacemos.",
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
            "p": "Los cálculos de saju y figuras de los cinco elementos se realizan a partir del **calendario lunisolar coreano**, con la hora de nacimiento corregida a la hora solar verdadera para el lugar de nacimiento. La lectura es una referencia tradicional, no una predicción."
          },
          {
            "p": "Las explicaciones escritas son producidas por IA. Para evitar que **invente cosas**, el modelo solo recibe tu entrada y nuestros propios datos de referencia, y se le indica que se mantenga dentro de eso. Las guías explican esto en detalle."
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
            "p": "La mayoría de los hanja tienen varias lecturas posibles. Sin embargo, un nombre se escribe en documentos y se pronuncia en voz alta, por lo que necesita exactamente una. La tabla asigna por lo tanto a cada carácter su lectura para uso en nombres, y ninguna otra lectura puede ser registrada."
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
            "p": "Por muy bueno que sea un significado, un carácter cuya lectura no coincida no puede ser usado para ese nombre. Además, nunca cambiamos el sonido de un nombre para ajustarlo a un carácter — un nombre se pronuncia durante toda la vida, y el sonido se establece primero, seguido del hanja."
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
            "p": "Si lo que quieres es un nombre coreano, **eso es un servicio diferente**. Uno mantiene tu nombre y solo cambia el guion; el otro propone un nuevo nombre."
          }
        ]
      },
      {
        "title": "Sonidos que el coreano no tiene",
        "blocks": [
          {
            "p": "Cada idioma tiene sonidos que el coreano no tiene — f, v, z, th, y distinciones vocálicas que el coreano no hace. Para esos escribimos lo que **un hablante de coreano realmente dice** cuando lee tu nombre en voz alta, en lugar de transcribir la fonética original símbolo por símbolo. El objetivo es la escritura que se usará, no la más técnicamente fiel."
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
            "p": "Si ninguna de ellas se siente correcta, puedes añadir una pista sobre el sonido que deseas y ejecutarlo de nuevo — por ejemplo, que una sílaba particular debería escribirse de manera diferente."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Sin hanja aquí",
        "blocks": [
          {
            "p": "No adjuntamos hanja a una transliteración. El hanja lleva significado, y este flujo es sobre sonido. Hacer coincidir caracteres solo con el sonido puede llevarte a un significado que nunca pediste."
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
            "p": "En Corea, el apellido va primero, y a diferencia de los nombres de pila, no se inventa libremente — lo heredas. Así que solo sugerimos apellidos que las personas coreanas realmente tienen. Nuestro grupo predeterminado son los **20 apellidos más comunes**, que juntos cubren aproximadamente el 80% de la población."
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
            "p": "Este es un nombre por el que la gente en Corea realmente te llamará, así que lo primero que comprobamos es si un coreano puede escucharlo una vez y escribirlo. Un nombre que necesita ser deletreado cada vez es una carga que llevas, no nosotros."
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
            "p": "Aquí proponemos un **nuevo nombre coreano**. Si quieres que tu nombre existente se escriba en Hangul — Michael como 마이클 — consulta la [guía de escritura en Hangul](/guide/how-hangul-transliteration)."
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
              "**Pagos y reembolsos** — si un documento nunca fue producido, o el monto cobrado difiere de tu pedido, reembolsamos en su totalidad. Consulta la [política de reembolsos](/refund-policy).",
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
                "label": "Entre ellos, caracteres aún comúnmente usados"
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
            "p": "De hecho, entre los {avoidTotal} caracteres que compilamos, {avoidCommonlyUsed} todavía se usan comúnmente en nombres. El hecho de que se sepa que se evitan pero que aún se usen ampliamente indica que esta costumbre no es absoluta."
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
              "**Tesoros y Objetos** — Caracteres que se refieren directamente a la riqueza o artículos",
              "**Cielo y Naturaleza** — Cosas como el sol, la luna y el cielo que se consideran demasiado grandiosas para que una persona las encarne",
              "**Reyes y Nobleza** — Caracteres que significan estatus, como rey o emperador",
              "**Seres Divinos** — Caracteres que se refieren a reinos sagrados, como dioses o espíritus",
              "**Estaciones y Otros** — Caracteres ligados a tiempos o estados específicos",
              "**Animales** — Animales considerados con energía fuerte, como dragones o tigres",
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
        "title": "Opciones Disponibles en la Pantalla de Entrada",
        "blocks": [
          {
            "p": "**Excluir Caracteres Evitados de los Candidatos** — Si está habilitado, se excluyen completamente. Si está deshabilitado, permanecen en los resultados con una etiqueta de \"Tradicionalmente Evitados\" y la razón adjunta."
          },
          {
            "p": "**Excluir Incluso Caracteres Comúnmente Usados** — Esto excluye caracteres que están en la lista de evitación pero que en realidad se usan ampliamente (圭·琳·玲·元·太·星·海, etc.). Si está habilitado, los candidatos se reducirán significativamente."
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
    "eyebrow": "Base del Servicio",
    "title": "¿Cuál es la base para la conversión de nombres globales?",
    "summary": "Proporcionamos candidatos desde cinco perspectivas, manteniendo los sistemas de escritura de cada idioma y utilizando solo nombres existentes.",
    "backLabel": "Guía de Uso",
    "sections": [
      {
        "title": "Los candidatos se proporcionan desde cinco perspectivas",
        "blocks": [
          {
            "p": "No hay una sola forma de traducir un nombre a otro idioma. Dependiendo de si se preserva el sonido o el significado, se elige un nombre natural en el contexto local o se prioriza la individualidad, las respuestas variarán. Por lo tanto, en lugar de presentar una opción, proporcionamos **una de cada una de las cinco perspectivas diferentes**."
          },
          {
            "ul": [
              "**Opción de Preservación del Sonido** — Preserva el sonido del nombre original tanto como sea posible",
              "**Opción de Traducción del Significado** — Traduce el significado contenido en el nombre al nombre de ese idioma",
              "**Opción de Compromiso entre Sonido y Significado** — Toma la mitad de cada uno",
              "**Opción Auténtica Local** — Elige nombres que realmente se usan comúnmente en ese contexto cultural",
              "**Opción de Individualidad y Marca** — Prioriza nombres que sean memorables y distintivos"
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
            "p": "Al traducir a un idioma que no utiliza letras romanas, debe escribirse en el script de ese idioma. Para el japonés, sería kana y kanji; para el ruso, mongol y kazajo, sería cirílico; para el árabe, sería el script árabe; y para el tailandés, jemer e hindi, sería sus respectivos scripts. Si lo escribes en letras romanas y lo llamas un \"nombre japonés\", no puede ser utilizado en ese país."
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
            "p": "Para evitar crear nombres que suenen plausibles pero que no existan en ese país, basamos nuestras opciones en nombres existentes. Los nombres se utilizan en documentos y presentaciones, así que si una persona local piensa \"no hay tal nombre\", no puede ser utilizado."
          }
        ]
      },
      {
        "title": "Separamos la selección y la descripción",
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
    "title": "¿Cuál es la base para emparejar significados de hanja?",
    "summary": "Primero, se fijan los sonidos, y solo se reúnen los hanja que pueden ser registrados con ese sonido, y el significado se ve como una combinación en lugar de un solo carácter.",
    "backLabel": "Guía de Uso",
    "sections": [
      {
        "title": "Primero, fija los sonidos",
        "blocks": [
          {
            "p": "Si has decidido por \"지은\", entonces **지** y **은** no cambian. No alteramos el sonido del nombre para que coincida con el hanja. Un nombre es algo que se llama durante toda la vida, y creemos que el orden es que el sonido se fija primero, seguido del hanja."
          },
          {
            "figure": "hanja-match-flow",
            "caption": "Este es el orden en el que se reducen los candidatos. No se trata de elegir hanja primero y emparejar los sonidos, sino que los sonidos vienen primero, y solo los caracteres designados para ser leídos con ese sonido se convierten en candidatos."
          }
        ]
      },
      {
        "title": "Reúne solo hanja que pueden ser registrados con ese sonido",
        "blocks": [
          {
            "p": "La tabla oficial de hanja para nombres tiene una lectura designada para cada carácter cuando se usa en nombres. Solo los caracteres designados para ser leídos como **지** y **은** se convierten en candidatos. No importa cuán bueno sea el significado, si la lectura no coincide, no puede ser el hanja para ese nombre."
          },
          {
            "p": "El rango para seleccionar candidatos son los {characterTotal} caracteres de la tabla de la Corte Suprema. Los caracteres que no están en esta tabla no se presentan en absoluto — incluso si se muestran, no pueden ser registrados."
          },
          {
            "p": "El número de caracteres en la tabla publicada por la Corte Suprema es ligeramente mayor que esto. La tabla también incluye **caracteres sin códigos de caracteres estándar**, que no pueden mostrarse correctamente en pantallas y documentos, por lo que esos caracteres han sido excluidos de los candidatos. Debes consultar con la autoridad correspondiente si puedes registrarte con esos caracteres."
          }
        ]
      },
      {
        "title": "El significado se ve como una combinación, no como un solo carácter",
        "blocks": [
          {
            "p": "El significado de cada carácter individual siendo bueno y el significado leído cuando se combinan dos caracteres siendo bueno son diferentes. Los nombres se leen como combinaciones, así que miramos las combinaciones juntas. Si tienes significados específicos que deseas incluir o evitar, se tienen en cuenta."
          },
          {
            "p": "Si estás usando un carácter de generación, ese carácter está fijado, y se buscan combinaciones de las posiciones restantes. El apellido (성) no está restringido por la tabla oficial de hanja para nombres, así que se trata por separado."
          }
        ]
      },
      {
        "title": "Indicamos costumbres de evitación sin eliminarlas",
        "blocks": [
          {
            "p": "Si un carácter que se considera tradicionalmente evitado está incluido en los candidatos, no lo eliminamos, sino que mostramos la razón junto con él. Esto es una cuestión de costumbre, no de ley, y puedes optar por excluirlo completamente de la pantalla de entrada. Para más detalles, consulta [Hanja Tradicionalmente Evitados](/guide/avoid)."
          }
        ]
      },
      {
        "title": "También te informamos de las razones de exclusión",
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
            "p": "Los candidatos son **perspectivas, no clasificaciones**. El primero no significa que sea el mejor nombre; se seleccionan desde diferentes perspectivas. Aquellos que priorizan la combinación de significados, aquellos que eligen caracteres poco comunes, y aquellos que enfatizan la neutralidad se presentan uno al lado del otro. La respuesta varía dependiendo de qué perspectiva valoras."
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
            "p": "**Segundo, esos cálculos dependen de los conteos de trazos.** Sin embargo, los datos de la Corte Suprema no incluyen conteos de trazos en absoluto. Además, los conteos de trazos pueden variar dependiendo de si se cuentan como caracteres regulares o simplificados y cómo se cuentan los radicales. Dado que los números fundamentales no están establecidos de manera definitiva, las puntuaciones construidas sobre ellos no pueden ser definitivas."
          },
          {
            "p": "**Tercero, los números parecen más sólidos que la realidad.** Cuando dice \"87 puntos\", se lee como un valor medido en lugar de una interpretación convencional. Esos nombres pueden sentirse presionados por ese número, apartando lo que realmente importa (¿Es agradable de llamar? ¿El significado encaja? ¿Contiene los deseos deseados?)."
          },
          {
            "p": "**Cuarto, no hay forma de verificar.** La relación entre un nombre y la vida de una persona no puede ser verificada. Convertir algo que no se puede decir que es correcto o incorrecto en una puntuación resulta en un número que no puede ser confirmado, aunque no puede estar mal."
          },
          {
            "p": "Solo usamos lo que puede ser **sustentado.** La tabla oficial de hanja de la Corte Suprema, las lecturas designadas para cada carácter, y los significados listados en la tabla. En su lugar, proporcionamos razones por las que se seleccionó este candidato y por qué ciertos caracteres fueron excluidos, mostrando **razones en lugar de puntuaciones**."
          }
        ]
      },
      {
        "title": "No usamos conteos de trazos",
        "blocks": [
          {
            "p": "Los datos oficiales de hanja para nombres proporcionados por la Corte Suprema no incluyen conteos de trazos. Entre los {characterTotal} caracteres que recibimos, **no hay un solo carácter con conteos de trazos.**"
          },
          {
            "p": "Para usar conteos de trazos, necesitaríamos obtener números de algún otro lugar, pero si no podemos aclarar de dónde provienen esos números y qué criterios se usaron para contarlos, significaría juzgar nombres basados en números infundados. Hemos decidido no evaluar nombres basados en valores que no pueden ser sustentados."
          }
        ]
      },
      {
        "title": "Usamos los cinco elementos solo como referencia",
        "blocks": [
          {
            "figure": "five-elements",
            "caption": "Las relaciones entre los cinco elementos. Moverse a lo largo del círculo representa generación mutua (相生), mientras que saltarse uno y presionar hacia abajo representa restricción mutua (相剋). Usamos esta relación solo como un eje suplementario para comparar candidatos."
          },
          {
            "p": "Si has ingresado tu mes de nacimiento, usamos una referencia simplificada de los cinco elementos basada en ese mes como un eje suplementario para comparar candidatos. Sin embargo, esto no es un análisis preciso de saju, y **no afirmamos que los nombres determinen el destino o carácter de una persona.**"
          },
          {
            "p": "En la selección final, lo que priorizamos son los sonidos, combinaciones de significados, los valores que la familia desea transmitir, y si realmente puede ser registrado. Si no has ingresado tu mes de nacimiento, excluimos completamente la referencia de los cinco elementos del análisis — no hacemos suposiciones arbitrarias sobre información desconocida."
          },
          {
            "p": "Si deseas un análisis preciso basado en saju, cubrimos eso en un informe detallado separado. La razón por la que no priorizamos los cinco elementos en la coincidencia gratuita de hanja es que no queremos presentar juicios basados en los cinco elementos derivados de una fecha y hora de nacimiento incompletas como si fueran definitivos."
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
        "Si estás utilizando el servicio en árabe o jemer, el PDF que compras se produce en inglés. La herramienta que organiza nuestros documentos aún no puede establecer párrafos en esos dos scripts.",
        "La pantalla permanece en tu idioma, y tu nombre se imprime en tu propio script dentro del documento.",
        "La misma nota aparece antes del pago. Cuando la herramienta soporte estos scripts, lo diremos aquí."
      ]
    },
    "2026-08-01-payments-preparing": {
      "title": "Los pagos aún no están abiertos",
      "body": [
        "Crear un nombre y leer el resultado es gratis hoy, y no se necesita cuenta.",
        "Los elementos de pago aún no están a la venta. Los montos mostrados en la página de precios son los que se aplicarán una vez que se abran las ventas."
      ]
    }
  }
} satisfies NoticeCopy;
