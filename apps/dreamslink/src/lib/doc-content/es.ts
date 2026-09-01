import type { DocPage, NoticeCopy } from "./types";
import type { DocKey } from "./ko";

/** Español — `scripts/translate-doc-content.ts`가 만든다. 손으로 고치지 말 것. */
export const ES_DOCS = {
  "guide": {
    "eyebrow": "Base para el Cálculo",
    "title": "¿Cuál es la base para el cálculo?",
    "summary": "Divulgamos todas las reglas que utiliza Dreams-Link. Puedes verificar qué símbolos se encuentran, qué está escrito en el diccionario — de dónde provienen las interpretaciones que se muestran en la pantalla.",
    "backLabel": "Volver a Inicio",
    "sections": [
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Todos los números escritos aquí son **leídos directamente del diccionario de símbolos y las reglas de coincidencia.** Dado que no transcribimos manualmente el texto, si el diccionario se expande o las reglas cambian, los números en estos documentos también cambiarán."
          }
        ]
      }
    ]
  },
  "guide/how-matching-works": {
    "eyebrow": "Base del Servicio",
    "title": "Cómo encontrar símbolos en historias de sueños.",
    "summary": "Explica cómo se seleccionan los símbolos de oraciones escritas libremente y cómo filtramos un símbolo que simplemente ocurre estar dentro de una palabra más larga — 별 (\"estrella\") dentro de 특별할 (\"nada especial\").",
    "backLabel": "Base para la Interpretación",
    "sections": [
      {
        "title": "Encontramos símbolos en el texto que proporcionas.",
        "blocks": [
          {
            "p": "Cuando escribes libremente tu historia de sueño, buscamos símbolos en ese texto del diccionario. No necesitas seleccionar elementos ni escribir en un formato específico. Simplemente escribe como lo harías normalmente, como 'Anoche, una enorme pitón se enrolló a mi alrededor.'"
          },
          {
            "p": "Al buscar, no solo miramos el nombre del símbolo, sino también **{aliasTotal} nombres alternativos**. Estas son palabras que se refieren a lo mismo, como 구렁이 (gureongi) y 뱀 (baem), 떨어지다 (tteoreojida) y 빠지다 (ppajida). También se incluyen variaciones con terminaciones, como 「떨어지는」 (tteoreojineun) · 「쫓겨서」 (jjotgyeoseo) · 「빠졌다」 (ppajyeotda)."
          }
        ]
      },
      {
        "title": "Los caracteres que aparecen accidentalmente dentro de una palabra no cuentan",
        "blocks": [
          {
            "p": "Este es el aspecto más desafiante en coreano. Entre los símbolos, hay **{singleCharSymbolTotal} símbolos de un solo carácter** como **별** (byeol) · **말** (mal) · **배** (bae) · **손** (son), que aparecen frecuentemente en otras palabras."
          },
          {
            "ul": [
              "별 (\"estrella\") escondido dentro de 특**별**할 (\"nada especial\")",
              "게 (\"cangrejo\") escondido dentro de 누군가에**게** (\"por alguien\")",
              "말 (\"caballo\") dentro de **말**했다 (\"dijo\"), y 배 (\"barco, pera\") dentro de **배**가 고팠다 (\"Estábamos hambrientos\")"
            ]
          },
          {
            "p": "Contar estos como símbolos conduce a interpretaciones irrelevantes. Por lo tanto, examinamos los caracteres circundantes — si **hay un carácter coreano delante**, lo tratamos como parte de una palabra más larga y no lo contamos, y observamos **si lo que sigue es una partícula o una terminación verbal**, permitiendo que 「소가」 (soga) pase mientras filtramos 「소리」 (sori)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Así es como ha estado funcionando",
        "blocks": [
          {
            "p": "Antes de implementar esta regla, al probar con doce oraciones reales, **todas las doce** contenían símbolos irrelevantes. Una oración sin contenido significativo fue incluso marcada como un a conception dream."
          },
          {
            "p": "Ahora, queda uno — el 배 (bae) en 「배가 고팠다」 (bae ga gopatda). Dado que suena igual pero tiene un significado diferente, no puede ser filtrado solo por los caracteres circundantes."
          },
          {
            "p": "No encontrar algo es un asunto honesto. Sin embargo, encontrar algo irrelevante significa establecer una tradición detrás de esa palabra que nunca tuvo."
          }
        ]
      },
      {
        "title": "Los mismos caracteres siempre producen los mismos resultados",
        "blocks": [
          {
            "p": "No hay lugar para la coincidencia en las reglas de coincidencia. Dado que el diccionario es fijo y las reglas están establecidas, si vuelves a ingresar la misma oración, **el mismo símbolo aparecerá en el mismo orden**. La interpretación que ves hoy no diferirá de la que verás mañana."
          },
          {
            "p": "Esta calidad también es una promesa que nos hemos hecho a nosotros mismos. Las interpretaciones que cambian cada vez son entretenidas pero carecen de fundamento. Esto se conecta a la historia de [por qué no usamos modelos](/guide/no-ai)."
          }
        ]
      }
    ]
  },
  "guide/no-storage": {
    "eyebrow": "Información Personal",
    "title": "El Método de No Almacenar los Sueños que Escribes",
    "summary": "Explicamos lo que significa técnicamente que las historias de sueños no se registren en ningún lugar, y qué contiene el enlace de resultado.",
    "backLabel": "Base de Interpretación",
    "sections": [
      {
        "title": "No se Requiere Membresía",
        "blocks": [
          {
            "p": "Dreams-Link no crea cuentas. No recopilamos nombres, correos electrónicos ni números de teléfono. Las únicas cosas que recopilamos son los sueños que escribes, cómo te sentiste al despertar, y si sueñas el mismo sueño repetidamente, y eso no permanece después de que la interpretación se completa."
          },
          {
            "p": "Las historias de sueños son el valor más privado que este servicio recibe. Por eso, las reglas son más estrictas de lo necesario — ni siquiera hemos creado una tabla para escribir lo que envías."
          }
        ]
      },
      {
        "title": "Qué contiene el enlace de resultado",
        "blocks": [
          {
            "p": "Cuando el cálculo se completa, la dirección se verá así."
          },
          {
            "p": "**/ko/dream/result#eyJ0IjoiSSBkcmVhbXQgb2YgYSBjYXJwLi4u**"
          },
          {
            "p": "Lo que sigue **#** es el valor de entrada. Esta parte se llama **fragmento**, que es una **parte que el navegador no envía al servidor**. Este es un comportamiento web estándar y no una regla que creamos — fue diseñado originalmente para indicar una ubicación dentro de un documento, por lo que el servidor no tiene necesidad de verlo."
          },
          {
            "p": "Aquí, esta propiedad es particularmente importante — el sueño que proporcionaste **no permanece en los registros de acceso.**"
          },
          {
            "p": "En otras palabras, cuando abres el enlace de resultado, el navegador lee ese valor para solicitar un cálculo, y nuestro servidor recibe el valor para el cálculo, devuelve la respuesta y luego lo olvida."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Por favor, ten cuidado al enviar enlaces a otros",
        "blocks": [
          {
            "p": "El hecho de que no se almacene en el servidor no significa que el enlace sea seguro. El enlace de resultado contiene el sueño que proporcionaste, por lo que la persona que recibe ese enlace puede leer ese contenido."
          }
        ]
      },
      {
        "title": "¿Por qué se realiza el cálculo en el servidor pero no se almacena?",
        "blocks": [
          {
            "p": "El cálculo en sí se realiza en el servidor. Encontrar símbolos requiere todo el diccionario, y ese diccionario es demasiado grande para ser enviado al navegador. Mantener el diccionario en el servidor también significa que cuando se corrige un error, se refleja para todos de una vez. Sin embargo, **después de procesar la solicitud, ese valor no se utiliza en ningún lugar.** No hay código para insertarlo en la base de datos."
          },
          {
            "p": "Se mantiene un registro mínimo necesario para la operación — un contador para evitar que la misma persona envíe demasiadas solicitudes en un corto período de tiempo. Esto no incluye el contenido del sueño, y la IP de acceso tampoco se retiene. Solo se cuenta un valor, hash con la fecha, y ese valor cambia cuando cambia el día."
          }
        ]
      },
      {
        "title": "Lo que no se puede hacer porque no se almacena",
        "blocks": [
          {
            "p": "Para ser honesto, hay cosas que hemos renunciado porque no almacenamos datos."
          },
          {
            "ul": [
              "**No hay diario de sueños.** No puedes recuperar la interpretación de la semana pasada, y debes tener el enlace para verla de nuevo. Esto se hace intencionalmente — para crear un diario, los escritos más privados deben ser almacenados continuamente.",
              "**Calculamos el mismo valor cada vez.** No hay caché. En cambio, el diccionario es fijo y las reglas de coincidencia son deterministas, por lo que el mismo texto siempre producirá el mismo símbolo — las reglas reemplazan lo que la caché habría garantizado.",
              "**Actualizar traerá de nuevo la puerta de publicidad.** Esto se debe a que no hay lugar para dejar registros de visualización."
            ]
          }
        ]
      },
      {
        "title": "En caso de compra",
        "blocks": [
          {
            "p": "Si compras un informe, se mantendrá un registro de transacción en ese momento. El pago tiene un período de retención definido legalmente, y sin un historial de pedidos, no se pueden procesar reembolsos. Sin embargo, incluso entonces, **el texto del sueño utilizado para la lectura no se adjunta al pedido** — se recibe nuevamente y se escribe en ese momento al crear el documento después de la confirmación del pago."
          },
          {
            "p": "Para más detalles, consulte la [política de privacidad](/privacy)."
          }
        ]
      }
    ]
  },
  "notice": {
    "eyebrow": "Aviso",
    "title": "Anuncios",
    "summary": "Este es un lugar para informarle sobre cambios que pueden afectar su uso.",
    "backLabel": "Volver a Inicio",
    "sections": []
  },
  "contact": {
    "eyebrow": "Contacto",
    "title": "Consultas",
    "summary": "Este es el canal para consultas sobre uso, reembolsos, solicitudes de información personal e informes de errores, junto con información comercial.",
    "backLabel": "Volver a Inicio",
    "sections": [
      {
        "title": "Contacto por Correo Electrónico",
        "blocks": [
          {
            "p": "Por favor, envíe consultas a **{email}**. Responderemos dentro de 2 días hábiles. Para consultas sobre pagos y reembolsos, es más rápido incluir su **número de pedido o correo electrónico de pago**."
          },
          {
            "p": "Las consultas telefónicas se reciben en {customerCenter}."
          }
        ]
      },
      {
        "title": "¿Qué se puede enviar a este canal?",
        "blocks": [
          {
            "ul": [
              "**Pago y Reembolso** — Si el documento no se ha creado o el monto del pago difiere del pedido, se proporcionará un reembolso completo. Las condiciones están en la [política de reembolso](/refund-policy).",
              "**Información Personal** — Aceptamos solicitudes de acceso, corrección y eliminación. La política de procesamiento está en la [política de privacidad](/privacy).",
              "**Informar Errores de Interpretación** — Si se encontraron símbolos incorrectamente o la interpretación parece extraña, háganoslo saber. Si incluye cuándo escribió esa historia de sueño, podemos buscarla nuevamente con el mismo texto."
            ]
          }
        ]
      },
      {
        "title": "Información Comercial",
        "blocks": [
          {
            "ul": [
              "**Nombre Comercial** — {companyName}",
              "**Representante** — {representative}",
              "**Número de Registro Comercial** — {businessNumber}",
              "**Número de Registro de Comercio por Correo** — {mailOrderNumber}",
              "**Dirección** — {address}",
              "**Centro de Atención al Cliente** — {customerCenter}",
              "**Correo Electrónico** — {email}",
              "**Oficial de Protección de Información Personal** — {privacyOfficer}",
              "**Proveedor de Hosting** — {hostingProvider}"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "No necesita reescribir el sueño que proporcionó en el correo de consulta. No guardamos entradas, por lo que no podemos buscarlas nuevamente, y el número de pedido es suficiente para la verificación. Por favor, escríbalo solo si es absolutamente necesario, como para informar errores de interpretación."
          }
        ]
      }
    ]
  },
  "guide/what-we-do-not-do": {
    "eyebrow": "Principios del Servicio",
    "title": "Lo Que No Hacemos",
    "summary": "No proporcionamos números de lotería, diarios de sueños, determinaciones de embarazo o talismanes. Explicamos por qué hemos decidido no hacer cada una de estas.",
    "backLabel": "Base de Interpretación",
    "sections": [
      {
        "title": "No proporcionamos números de lotería",
        "blocks": [
          {
            "p": "Aunque se aborda comúnmente en los servicios de interpretación de sueños, no hacemos esto. **No hay base en la interpretación de sueños tradicional para extraer números de los sueños.** Si bien hay registros de interpretar sueños de cerdos como riqueza, no hay regla en ninguna literatura que produzca seis números a partir de eso."
          },
          {
            "p": "Para crearlos, tendríamos que inventarlos, y en ese momento, este servicio ya no sería un lugar para transmitir las interpretaciones que la tradición ha transmitido. Esto es especialmente preocupante ya que podría llevar a pérdidas financieras."
          }
        ]
      },
      {
        "title": "No creamos diarios de sueños",
        "blocks": [
          {
            "p": "Si bien sería conveniente tener una función para recopilar sueños pasados, requeriría que **almacenemos continuamente los sueños que usted proporciona.** Las narrativas de sueños son el aspecto más privado de lo que este servicio recibe, y hemos decidido no intercambiar eso."
          },
          {
            "p": "En su lugar, los sueños que desea conservar pueden ser **tomados como imágenes o documentos.** La responsabilidad del almacenamiento recae en los usuarios, no en nosotros — [Dos Maneras de Conservar Sus Sueños](/guide/reports)"
          }
        ]
      },
      {
        "title": "No determinamos el embarazo o el género",
        "blocks": [
          {
            "p": "Solo afirmaremos que ha aparecido un símbolo interpretado como un a conception dream (sueño de concepción). Si está embarazada o si el niño es una hija o un hijo **no es algo que se pueda conocer a través de los sueños.** Tales afirmaciones no aparecen en la pantalla ni en documentos pagados."
          }
        ]
      },
      {
        "title": "No vendemos talismanes o amuletos",
        "blocks": [
          {
            "p": "Un símbolo leído como inauspicioso no es razón para comprar nada. Un sueño inauspicioso se ha utilizado tradicionalmente para **indicar una situación que se debe examinar ahora**, no para pagar para evitar algo."
          },
          {
            "p": "No creamos ansiedad para vender algo basado en ello. Las únicas cosas que vendemos son las dos mencionadas anteriormente, y ninguna proporciona interpretación adicional, sino más bien **maneras de conservar el mismo contenido.**"
          }
        ]
      },
      {
        "kind": "note",
        "title": "No hacemos declaraciones definitivas sobre el futuro",
        "blocks": [
          {
            "p": "No hacemos declaraciones definitivas sobre si algo sucederá, cuándo sucederá, o sobre salud, riqueza o longevidad. Transmitir los significados de los símbolos tradicionales y predecir el futuro son asuntos diferentes."
          }
        ]
      },
      {
        "title": "No fabricamos interpretaciones que no existen",
        "blocks": [
          {
            "p": "Para símbolos que no existen en el diccionario, **declararemos que no pudimos encontrarlos.** No ensamblamos similares ni llenamos el espacio con oraciones plausibles. Por lo tanto, este servicio no [utiliza inteligencia artificial para la interpretación de sueños](/guide/no-ai). El modelo no dice que no sabe lo que no sabe."
          }
        ]
      }
    ]
  },
  "about": {
    "eyebrow": "Introducción",
    "title": "Introducción a Dreams-Link",
    "summary": "Este es un servicio que interpreta sueños utilizando un diccionario de símbolos de interpretación de sueños tradicional. Aclara en qué se basa y qué no se declara.",
    "backLabel": "Volver a Inicio",
    "sections": [
      {
        "title": "¿Qué hacemos?",
        "blocks": [
          {
            "p": "Dreams-Link encuentra **símbolos utilizados en la interpretación de sueños tradicional** a partir de los sueños que escribes y muestra sus significados. Dado que los sueños son algo que tenemos todos los días, las interpretaciones que ves en la pantalla son **gratuitas y no requieren membresía.**"
          },
          {
            "p": "Las únicas cosas que se venden por una tarifa son **dos formas de preservación** — una imagen que contiene un buen sueño (tarjeta de sueño) y un PDF que contiene el contexto cuando aparece un símbolo tradicionalmente considerado un sueño de concepción."
          }
        ]
      },
      {
        "title": "¿Cuál es la base?",
        "blocks": [
          {
            "p": "La base para la interpretación es un **diccionario de {symbolTotal} símbolos**. Encontramos símbolos en el texto del sueño y solo mostramos los significados registrados en el diccionario para esos símbolos. Si un símbolo tiene múltiples significados, elegimos según la situación — ya que el sol naciente y el sol poniente se interpretan tradicionalmente como opuestos."
          },
          {
            "p": "Todos los significados en el diccionario son **traducidos de los textos originales de antiguos libros de interpretación de sueños**, y cada significado está acompañado por el texto original que sirvió como su base. Los textos originales utilizados como base son dos — la **Interpretación de Sueños de Zhou Gong**, que ha sido leída durante mucho tiempo en Asia Oriental, y el **Libro de Sueños de Miller** del Oeste publicado en 1901."
          },
          {
            "p": "La búsqueda se realiza **solo por reglas fijas**. El mismo sueño siempre dará los mismos símbolos, y las interpretaciones no cambian de ayer a hoy."
          }
        ]
      },
      {
        "title": "¿Qué no decimos?",
        "blocks": [
          {
            "p": "**No creamos significados tradicionales que no estén en el diccionario.** Si no se encuentran símbolos, simplemente declaramos que no se encontraron y concluimos. Llenar ese espacio con palabras plausibles es de lo que este servicio es más cauteloso."
          },
          {
            "p": "**Los sueños de concepción son meramente indicaciones, no determinaciones.** Solo te informamos que un símbolo tradicionalmente considerado un sueño de concepción apareció en el sueño. No predecimos el embarazo ni el género del niño, y no hay base para tales afirmaciones."
          },
          {
            "p": "No **hacemos afirmaciones definitivas sobre salud, riqueza o carrera.** Esta es una referencia desde la perspectiva de la interpretación de sueños tradicional y no es asesoría médica, financiera o legal."
          }
        ]
      },
      {
        "title": "No guardamos los sueños que escribes.",
        "blocks": [
          {
            "p": "Las historias de sueños son la parte más privada de lo que este servicio recibe. Por lo tanto, **no las almacenamos.** Las entradas se utilizan solo para cálculos y no se registran en ninguna forma en el servidor."
          },
          {
            "p": "Decidimos **no crear una función para recopilar sueños como un diario de sueños.** Es una característica valiosa, pero requeriría mantener los escritos más privados."
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "El método se describe con más detalle en el [documento guía](/guide). La información comercial y los detalles de contacto se pueden encontrar en [contáctanos](/contact)."
          }
        ]
      }
    ]
  },
  "guide/symbol-dictionary": {
    "eyebrow": "Base del servicio",
    "title": "¿Cuál es la base del diccionario de símbolos?",
    "summary": "Aclara de dónde provienen las interpretaciones. Los criterios para dividir {symbolTotal} símbolos en ocho categorías, la razón para adjuntar pasajes de texto originales a cada significado, y el principio de no llenar espacios vacíos.",
    "backLabel": "Base de interpretación",
    "sections": [
      {
        "title": "Solo mostramos lo que está escrito en el diccionario.",
        "blocks": [
          {
            "p": "Las interpretaciones de Dreams-Link provienen de un **diccionario de símbolos preescrito**. Encontramos símbolos en el texto que proporcionas y mostramos los significados registrados en el diccionario para esos símbolos tal como están. No creamos palabras que no estén en el diccionario."
          },
          {
            "p": "Actualmente, el diccionario contiene **{symbolTotal} símbolos**, y todos esos símbolos tienen un total de **{meaningTotal} significados**. Algunos símbolos tienen solo un significado, pero la mayoría tiene varios, y para cada significado, **la situación en la que se aplica ese significado** también se señala."
          }
        ]
      },
      {
        "title": "Dividido en ocho categorías.",
        "blocks": [
          {
            "p": "Agrupamos lo que aparece en los sueños en ocho categorías según sus características. El número actualmente listado está entre paréntesis."
          },
          {
            "ul": [
              "**Objetos**({categoryThing}) · **Acciones**({categoryAction}) · **Animales**({categoryAnimal}) — las tres categorías más gruesas. Estos son principalmente de lo que discuten los antiguos libros de interpretación de sueños: objetos visibles, bestias y acciones realizadas en sueños.",
              "**Naturaleza**({categoryNature}) · **Personas**({categoryPerson}) — cosas grandes y antiguas como agua, fuego, sol y luna, y personas que aparecen en sueños como reyes, ladrones y los fallecidos.",
              "**Lugares**({categoryPlace}) · **Cuerpo**({categoryBody}) · **Colores**({categoryColor}) — ubicaciones como casas y tumbas, partes del cuerpo como dientes, cabello y sangre, y colores."
            ]
          },
          {
            "p": "Para verlos por categoría, puedes ver la lista completa en el [diccionario de símbolos](/dream/symbols)."
          }
        ]
      },
      {
        "title": "Cada significado está acompañado de un pasaje de texto original.",
        "blocks": [
          {
            "p": "Cada uno de los **{meaningTotal} significados** en el diccionario está acompañado del **pasaje de texto original** que sirvió como base para ese significado. Todos los {symbolTotal} símbolos tienen esto — si no hay un pasaje de texto original, la entrada en sí no puede ser creada."
          },
          {
            "p": "Los textos originales utilizados como base son dos. **La Interpretación de Sueños de Zhou Gong** es un libro de interpretación de sueños que ha sido leído durante mucho tiempo en Asia Oriental, y **el Libro de Sueños de Miller** es un libro occidental publicado en 1901. Cuando abres un símbolo, puedes ver de qué texto original proviene el significado, junto con el pasaje y su significado."
          },
          {
            "p": "**No llenamos espacios vacíos.** Agregar orígenes plausibles haría que el documento fuera más grueso, pero en ese momento, este diccionario ya no sería una traducción de lo que se ha transmitido, sino más bien una fabricación. No escribimos lo que no está en el texto original, y para lo que escribimos, debemos adjuntar el texto original."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Al expandir, solo expandimos desde el texto original.",
        "blocks": [
          {
            "p": "Hemos intentado crear entradas basadas en modelos de símbolos, pero las entradas resultantes repiten las mismas palabras como 「amor → buena relación」 o no proporcionan ninguna base de la tradición. Por lo tanto, **no incluimos ninguna.** El tamaño actual del diccionario se debe a la traducción de los textos originales, no a la creación de entradas — las razones para no usar modelos se detallan en [por qué no usamos modelos](/guide/no-ai)."
          }
        ]
      },
      {
        "title": "Lo bueno y lo malo están predeterminados por el diccionario.",
        "blocks": [
          {
            "p": "Cada símbolo está acompañado de indicaciones de auspiciosidad y inauspiciosidad. **Bueno {polarityPositive}**, **ambivalente dependiendo de la situación {polarityAmbivalent}**, **cauteloso {polarityNegative}**, y **neutral {polarityNeutral}**."
          },
          {
            "p": "Entre las cuatro categorías, **la mayoría son aquellas que varían dependiendo de la situación.** Esto no es algo que equilibramos; es como está escrito en los textos originales — incluso para el mismo símbolo, hay muchos lugares donde se ha interpretado de manera opuesta dependiendo de lo que se hizo. Este valor refleja la naturaleza de cada símbolo, y la atmósfera general del sueño se recalcula al reunir los símbolos encontrados."
          }
        ]
      }
    ]
  },
  "guide/one-symbol-many-meanings": {
    "eyebrow": "Base del servicio",
    "title": "Por qué el mismo símbolo tiene diferentes significados.",
    "summary": "El sol naciente y el sol poniente se interpretan tradicionalmente como opuestos. Esto discute la estructura donde {symbolTotal} símbolos tienen {meaningTotal} significados y cómo discernir la situación.",
    "backLabel": "Base de interpretación",
    "sections": [
      {
        "title": "Incluso si los símbolos son los mismos, diferentes situaciones producen diferentes significados.",
        "blocks": [
          {
            "p": "En los antiguos libros de interpretación de sueños, un símbolo no siempre tiene un significado. Incluso para el mismo sol, **el sol naciente y el sol poniente se han interpretado como opuestos** — el primero indica prosperidad en el hogar, mientras que el último indica preocupaciones sobre perder a los padres. El diccionario está escrito de esa manera."
          },
          {
            "p": "La razón por la que los {symbolTotal} símbolos tienen un total de {meaningTotal} significados es que para cada significado, **la situación en la que se aplica ese significado** también se señala, por lo que si esa situación es visible en el texto que proporcionas, elegimos ese significado."
          }
        ]
      },
      {
        "title": "¿Cómo discernimos la situación?",
        "blocks": [
          {
            "p": "Buscamos ver si hay palabras que indican la situación en el texto que proporcionas. En la frase 「vi el sol poniéndose」, se indica la situación de puesta, mientras que en 「vi el sol apenas saliendo」, se indica la situación de salida. Si no hay palabras que indiquen la situación, lo interpretamos basándonos en el **significado básico** de ese símbolo."
          },
          {
            "p": "Así que cuando escribas tu sueño, por favor incluye **no solo lo que apareció sino también qué acciones se tomaron**; esto hará que la interpretación sea más precisa. Decir \"vi un cerdo\" transmite menos que \"el cerdo entró en la casa.\""
          }
        ]
      },
      {
        "kind": "note",
        "title": "Cuanto más escribas, mejor, pero no es necesario escribir extensamente.",
        "blocks": [
          {
            "p": "Unas pocas oraciones son suficientes. Escribir más no significa necesariamente encontrar más símbolos; más bien, si se mezclan declaraciones no relacionadas, puede llevar a símbolos incorrectos."
          }
        ]
      },
      {
        "title": "Hay {contextSplitSymbolTotal} símbolos con significados variados.",
        "blocks": [
          {
            "p": "De los {symbolTotal} símbolos en el diccionario, **{contextSplitSymbolTotal}** tienen significados que varían dependiendo de la situación. El resto puede ser interpretado en una sola dirección sin importar la situación."
          },
          {
            "p": "Estos **{contextSplitSymbolTotal}** símbolos son los más delicados. Leer mal la situación puede llevar a transmitir buenas noticias como malas, o viceversa. Por lo tanto, si la situación no está clara, nos basamos en el **significado básico del símbolo** sin forzar una elección — no queremos hablar de lo incierto como si fuera cierto."
          }
        ]
      },
      {
        "kind": "note",
        "title": "La sensación al despertar también se tiene en cuenta.",
        "blocks": [
          {
            "p": "Las sensaciones y repeticiones preguntadas sobre el contenido del sueño no se utilizan para encontrar símbolos. Se hacen referencia al determinar qué dirección tomar en casos de significados variados. No necesitas elegir; los resultados aún se proporcionarán."
          }
        ]
      },
      {
        "title": "La atmósfera general del sueño se cuenta por separado.",
        "blocks": [
          {
            "p": "Si se encuentran múltiples símbolos, recopilamos si cada símbolo es positivo o cauteloso para determinar el tono general del sueño. Un sueño que presenta un símbolo bueno y un símbolo cauteloso no se llama simplemente \"buen sueño.\""
          },
          {
            "p": "Puedes previsualizar los diversos símbolos y sus significados en el [diccionario de símbolos](/dream/symbols). También es bueno revisar lo que se incluye antes de escribir tu sueño."
          }
        ]
      }
    ]
  },
  "guide/good-and-bad": {
    "eyebrow": "Base del servicio",
    "title": "Criterios para distinguir entre sueños auspiciosos y ominosos",
    "summary": "Los cuatro valores asignados a cada símbolo y su distribución, las razones de los significados más variados, y por qué discutimos los sueños mixtos como mixtos.",
    "backLabel": "Base de la interpretación",
    "sections": [
      {
        "title": "Cada símbolo se asigna a una de cuatro categorías.",
        "blocks": [
          {
            "p": "Los {symbolTotal} símbolos en el diccionario están categorizados como uno de los siguientes."
          },
          {
            "ul": [
              "**Positivo {polarityPositive}** — interpretado como eventos agradables como riqueza, celebraciones o benefactores.",
              "**Ambivalente {polarityAmbivalent}** — símbolos como el sol o el cerdo que pueden tener sus significados invertidos dependiendo de las acciones tomadas. **Esta es la categoría más común y la más cautelosa.**",
              "**Cauteloso {polarityNegative}** — interpretado como disputas, pérdidas o eventos negativos.",
              "**Neutral {polarityNeutral}** — símbolos que no son ni auspiciosos ni ominosos en sí mismos, como los colores."
            ]
          }
        ]
      },
      {
        "title": "Razones para los significados más variados",
        "blocks": [
          {
            "p": "Este no es un equilibrio que hayamos alcanzado. **Es como están escritos los textos originales.** Los antiguos textos de interpretación de sueños registraron diferentes significados para el mismo símbolo dependiendo de la situación, y muchas de esas situaciones son opuestas — atrapar un cerdo es auspicioso, pero un cerdo que muere por sí mismo es ominoso, y lo mismo ocurre con el sol naciente y el sol poniente."
          },
          {
            "p": "Por lo tanto, el hecho de que \"apareció un símbolo bueno\" no significa \"sucederán cosas buenas.\" Lo que podemos transmitir está limitado a cómo ese símbolo ha sido interpretado en la tradición."
          }
        ]
      },
      {
        "title": "El tono de un sueño se recoge de sus símbolos.",
        "blocks": [
          {
            "p": "Si se encuentran múltiples símbolos, recopilamos sus significados auspiciosos y cautelosos para determinar el tono general del sueño. Si solo aparecen símbolos positivos, es un buen sueño; si solo aparecen símbolos cautelosos, es un sueño cauteloso; si **mixto, lo discutiremos como mixto.**"
          },
          {
            "p": "No forzamos una interpretación mixta en un solo lado. En realidad, los sueños que las personas tienen son mayormente mixtos, y resumirlos como \"un buen sueño\" no es ni preciso ni útil."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Palabras no dichas",
        "blocks": [
          {
            "p": "No hacemos afirmaciones definitivas sobre lo que sucederá, cuándo sucederá, o respecto a la salud y la riqueza. Traducir los significados de símbolos tradicionales es diferente de predecir el futuro."
          }
        ]
      },
      {
        "title": "Cuando aparecen sueños cautelosos",
        "blocks": [
          {
            "p": "Incluso si aparece un símbolo interpretado como cauteloso, no significa necesariamente malas noticias. En la interpretación de sueños tradicional, los sueños ominosos generalmente se han utilizado para indicar **la situación que necesita ser examinada ahora.** Si aparece un símbolo interpretado como una disputa, puede leerse como una sugerencia para guardar silencio."
          },
          {
            "p": "Por la misma razón, este servicio no vende talismanes ni amuletos. Las únicas cosas que se venden son [dos métodos para conservar tus sueños](/guide/reports)."
          }
        ]
      }
    ]
  },
  "guide/conception-dreams": {
    "eyebrow": "Sueños de concepción",
    "title": "Cómo distinguir los sueños de concepción",
    "summary": "Cómo determinamos los {conceptionSymbolTotal} símbolos de sueños de concepción, por qué no todos los sueños de cerdos son sueños de concepción, y el principio de que no determinamos el embarazo o el género.",
    "backLabel": "Base de la interpretación",
    "sections": [
      {
        "title": "Primero, aclaremos.",
        "blocks": [
          {
            "p": "**Dreams-Link no determina el estado de embarazo. Tampoco declaramos el género del niño.** Esto no es algo que se pueda conocer a través de los sueños, ni es algo que podamos hacer."
          },
          {
            "p": "Lo que podemos transmitir está limitado a esto — **el hecho de que un símbolo tradicionalmente interpretado como un sueño de concepción apareció en este sueño.** Cómo ese símbolo fue interpretado por los antiguos es todo lo que podemos proporcionar."
          }
        ]
      },
      {
        "title": "Hay {conceptionSymbolTotal} símbolos interpretados como sueños de concepción.",
        "blocks": [
          {
            "p": "De los {symbolTotal} símbolos en el diccionario, **{conceptionSymbolTotal}** están marcados como sueños de concepción. Muchos son animales como dragones, cerdos y tigres, así como frutas como duraznos, persimonas y jujubes, e incluyen también el sol y la luna."
          },
          {
            "p": "Sin embargo, **solo porque ese símbolo apareció no significa inmediatamente que sea un sueño de concepción.** Aquí es donde este servicio ha puesto un esfuerzo significativo."
          }
        ]
      },
      {
        "title": "Determinamos en base al significado elegido, no al símbolo.",
        "blocks": [
          {
            "p": "El cerdo es un símbolo de sueños de concepción, pero también es **el representante de sueños de riqueza.** Si declaramos que es un sueño de concepción únicamente porque apareció el símbolo, entonces todos los que sueñan con cerdos tendrían sueños de concepción. En realidad, la mayoría han sido interpretados como sueños de riqueza."
          },
          {
            "p": "Por lo tanto, miramos **el significado real elegido de ese símbolo, no solo el símbolo en sí.** Solo lo marcamos como un sueño de concepción cuando el significado que se inclina hacia la concepción es elegido basado en la situación que proporcionaste. Incluso con el mismo cerdo, la interpretación puede diferir según la oración."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Si mencionas el embarazo, lo miraremos primero.",
        "blocks": [
          {
            "p": "Si tu escritura incluye términos como embarazo, sueños de concepción o parto, priorizaremos el significado de concepción entre los significados que ese símbolo tiene. Incluso el mismo sueño puede ser interpretado de manera diferente según la situación actual."
          }
        ]
      },
      {
        "title": "La razón para tener un informe de sueño de concepción separado.",
        "blocks": [
          {
            "p": "Los sueños de concepción sirven a un propósito diferente que otros sueños. A menudo se discuten mucho después de que el niño nace y se comparten entre los miembros de la familia. Por lo tanto, en lugar de solo verlo en una pantalla, creamos un **documento que se puede conservar.**"
          },
          {
            "p": "Lo que se incluye está delineado en [dos métodos para conservar tus sueños](/guide/reports). Puedes ver todas las interpretaciones sin comprarlas."
          }
        ]
      }
    ]
  },
  "guide/how-to-write": {
    "eyebrow": "Cómo usar",
    "title": "Cómo escribir un sueño",
    "summary": "Si escribes lo que viste e hiciste, será interpretado bien. Explicamos por qué un solo verbo decide el significado, y por qué también preguntamos cómo te sentiste y si el sueño se repite.",
    "backLabel": "Base de la interpretación",
    "sections": [
      {
        "title": "Por favor, escribe lo que viste y hiciste",
        "blocks": [
          {
            "p": "No hay un formato específico. Dos o tres oraciones, como normalmente hablarías, son suficientes. Sin embargo, lo que se interpreta bien se determina — **lo que viste** y **lo que sucedió**."
          },
          {
            "ul": [
              "Bien interpretado — 「Una gran serpiente me envolvió」, 「Vi agua clara fluyendo」, 「Se me cayó un diente solo」",
              "No interpretado — 「Tuve miedo」, 「Me sentí extraño」, 「Parecía que alguien me odiaba」"
            ]
          },
          {
            "p": "Si solo escribes tus sentimientos, no habrá símbolos que encontrar. La interpretación de sueños tradicional habla de [objetos y acciones](/guide/categories), no de emociones."
          }
        ]
      },
      {
        "title": "Escribir lo que hiciste lo hace más preciso",
        "blocks": [
          {
            "p": "Incluso el mismo símbolo puede tener diferentes significados dependiendo de la situación, con {contextSplitSymbolTotal} casos. El amanecer y el atardecer se han interpretado tradicionalmente de maneras opuestas."
          },
          {
            "p": "Por lo tanto, 「Vi un cerdo」 es menos preciso que 「El cerdo entró en la casa」, y 「Había agua」 es menos preciso que 「Bebí agua clara」. **Un solo verbo determina el significado.**"
          }
        ]
      },
      {
        "title": "La razón para preguntar sobre sentimientos y recurrencia",
        "blocks": [
          {
            "p": "Debajo del contenido del sueño, hay un lugar para elegir **cómo te sentiste al despertar** y **si tienes sueños recurrentes**. No es necesario seleccionar ambos para que se proporcionen resultados."
          },
          {
            "p": "Estos valores no se utilizan para encontrar símbolos. Se hacen referencia al decidir **qué significado elegir** del mismo símbolo y cómo transmitir los resultados. Los sueños recurrentes se han visto tradicionalmente de manera diferente a un sueño que se tuvo una vez."
          }
        ]
      },
      {
        "kind": "note",
        "title": "En casos que mencionan el embarazo",
        "blocks": [
          {
            "p": "Si el texto incluye palabras como embarazo, sueño de concepción, o parto, primero miramos el significado del sueño de concepción de ese símbolo. Incluso el mismo sueño de cerdo ha sido interpretado de manera diferente por los antiguos dependiendo de la situación — [cómo distinguir 태몽](/guide/conception-dreams)"
          }
        ]
      },
      {
        "title": "No es necesario escribir largo",
        "blocks": [
          {
            "p": "Una longitud mayor no significa que se encontrarán más símbolos. De hecho, si se mezclan palabras no relacionadas de manera extensa, hay una mayor probabilidad de que palabras irrelevantes se interpreten como símbolos. Por favor, escribe solo las **escenas memorables**."
          },
          {
            "p": "El texto que escribas no se guardará en ningún lugar. La razón por la que puedes escribir libremente se explica en [el método de no guardar](/guide/no-storage)."
          }
        ]
      }
    ]
  },
  "guide/categories": {
    "eyebrow": "Base del Servicio",
    "title": "Criterios Divididos en Ocho Categorías",
    "summary": "Ocho categorías — desde objetos, acciones y animales hasta el cuerpo y colores — con cuántos símbolos contiene cada una, y por qué no hay categoría para emociones.",
    "backLabel": "Base de Interpretación",
    "sections": [
      {
        "title": "Dividido en ocho categorías de lo que aparece en los sueños",
        "blocks": [
          {
            "p": "Agrupamos {symbolTotal} símbolos en ocho categorías según su carácter. La pregunta divisoria es **cómo aparece en el sueño** — una bestia, un objeto, o algo que hiciste."
          },
          {
            "ul": [
              "**Objetos {categoryThing}** — artículos tangibles como dinero, espejos y cuchillos. Esta es la categoría más amplia.",
              "**Acciones {categoryAction}** — cosas hechas o experimentadas en el sueño, como bañarse, festejar, o ser golpeado.",
              "**Animales {categoryAnimal}** — dragones, cerdos, serpientes y vacas. Muchos de estos han sido vistos como 태몽.",
              "**Naturaleza {categoryNature}** — cosas grandes y antiguas como agua, fuego, sol y luna.",
              "**Personas {categoryPerson}** — personas que aparecen en sueños, como reyes, ladrones y personas fallecidas.",
              "**Lugares {categoryPlace}** — ubicaciones donde ocurren los sueños, como casas, pozos y tumbas.",
              "**Cuerpo {categoryBody}** — dientes, cabello, sangre. El significado varía dependiendo de dónde en el cuerpo se encuentre.",
              "**Colores {categoryColor}** — no tienen un bien o mal inherente y se interpretan según lo que están asociados."
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "La razón por la que no hay categorías numéricas",
        "blocks": [
          {
            "p": "No creamos una categoría para números como 「tres」 o 「siete」. **Ninguno de los dos textos originales establece un número como entrada.** Para abrir esa categoría y llenarla, tendríamos que escribir algo que no aparece en ninguno de los textos."
          }
        ]
      },
      {
        "title": "Por qué no hay categoría emocional",
        "blocks": [
          {
            "p": "No creamos una categoría para sentimientos como 「ansiedad」 o 「anhelo」. **Esto se debe a que los textos de interpretación de sueños antiguos no mencionan emociones.** Ambos textos originales hablan de lo que se ve y lo que sucede, no de los sentimientos del soñador como un tema de interpretación."
          },
          {
            "p": "Una vez intentamos construir una categoría para emociones, y lo que salió fueron términos como 「pérdida de afecto」 y 「estabilidad emocional」. Estos no son **formas** que aparecen en los sueños, sino vocabulario de la psicología moderna. Ese es un tipo diferente de servicio y no es lo que este diccionario pretende hacer."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Así que cuando escribas",
        "blocks": [
          {
            "p": "Por favor, escribe **lo que viste y hiciste** en lugar de sentimientos, ya que será mucho mejor interpretado. Sin embargo, preguntamos por separado cómo te sentiste al despertar — esto se referencia en situaciones donde los significados pueden variar incluso para el mismo símbolo."
          }
        ]
      },
      {
        "title": "Los colores no se utilizan solos",
        "blocks": [
          {
            "p": "Los colores {categoryColor} no tienen un bien o mal inherente. Así como las serpientes azules y las serpientes rojas se han interpretado de manera diferente, sus significados cambian según **lo que están asociados**. Por lo tanto, esta categoría se considera como valores leídos cuando aparecen con otros símbolos."
          },
          {
            "p": "La lista completa por categoría está disponible en el [Diccionario de Símbolos](/dream/symbols). Cuando abres un símbolo, se proporcionará el significado transmitido, la categoría y los símbolos relacionados."
          }
        ]
      }
    ]
  },
  "guide/not-found": {
    "eyebrow": "Cómo Usar",
    "title": "Cuando un Símbolo No se Encuentra",
    "summary": "Si no se encuentra nada, lo decimos. Cubrimos por qué sucede eso, qué mostramos en esa pantalla en su lugar, y cómo se expande el diccionario.",
    "backLabel": "Base de Interpretación",
    "sections": [
      {
        "title": "Cuando no encontramos nada, decimos que no encontramos nada",
        "blocks": [
          {
            "p": "Si no podemos encontrar un solo símbolo en el texto que escribiste, **te decimos que no encontramos nada.** No forzamos un símbolo similar sobre ello, ni escribimos una oración plausible para llenar el vacío."
          },
          {
            "p": "Este es el problema más preocupante para este servicio. En el momento en que llenas el vacío, la interpretación que surge y lo que realmente se hace divergen."
          }
        ]
      },
      {
        "title": "¿Por qué no se puede encontrar?",
        "blocks": [
          {
            "p": "Generalmente, es una de las siguientes."
          },
          {
            "ul": [
              "**Es un símbolo que aún no está en el diccionario.** Actualmente, hay {symbolTotal} símbolos listados, pero hay muchos más que podrían aparecer en sueños.",
              "**Solo escribiste tus sentimientos.** Si solo tienes emociones como \"tenía miedo\" o \"me sentí extraño,\" no hay símbolos que se puedan identificar. La interpretación de sueños tradicional se refiere a **objetos y acciones visibles**, no a emociones.",
              "**Es demasiado corto.** Es mejor escribir en oraciones en lugar de solo una o dos palabras."
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Cuando intentes escribir de nuevo",
        "blocks": [
          {
            "p": "Por favor incluye **lo que viste y lo que hiciste** en el sueño. Decir \"estaba ansioso\" es menos efectivo que decir \"mis dientes se cayeron solos,\" y \"me gustó\" es menos efectivo que decir \"vi agua clara fluyendo.\""
          }
        ]
      },
      {
        "title": "No dejamos una pantalla en blanco",
        "blocks": [
          {
            "p": "Cuando algo no se puede encontrar, también mostramos **{popularSymbolCount} símbolos buscados con frecuencia** en esa pantalla. Estos son seleccionados de los más representativos en el diccionario, lo que puede ayudarte a recordar si uno de ellos estaba en tu sueño."
          },
          {
            "p": "Si deseas explorar todo, puedes encontrar {symbolTotal} símbolos organizados por categoría en el [diccionario de símbolos](/dream/symbols). Cada símbolo incluye su significado transmitido y símbolos relacionados."
          }
        ]
      },
      {
        "title": "¿Cómo se expandirá el diccionario en el futuro?",
        "blocks": [
          {
            "p": "En lugar de aumentar los números, primero nos estamos enfocando en **identificar con precisión lo que ya está allí**. Hemos incluido {aliasTotal} nombres alternativos para los mismos símbolos, y nos hemos asegurado de que las palabras con sufijos que cambian sus formas también puedan ser identificadas."
          },
          {
            "p": "Al expandir los símbolos en sí, solo incluimos **lo que está escrito en el texto original**. Si un significado no tiene una frase original correspondiente, no se creará una entrada — simplemente aumentar los números sin base lo convierte en creación, no en un diccionario. Las razones para este intento y sus resultados están documentados en [por qué no usamos modelos](/guide/no-ai)."
          }
        ]
      }
    ]
  },
  "guide/no-ai": {
    "eyebrow": "Base del Servicio",
    "title": "Razones para no usar inteligencia artificial en la interpretación de sueños",
    "summary": "No hay código que llame a un modelo para crear interpretaciones. Este es el resultado de intentar expandir el diccionario usando un modelo y lo que se ganó y lo que se sacrificó como resultado.",
    "backLabel": "Base de Interpretación",
    "sections": [
      {
        "title": "No se utiliza inteligencia artificial en la interpretación de sueños",
        "blocks": [
          {
            "p": "Muchos servicios actuales de interpretación de sueños muestran escritos generados al insertar historias de sueños en modelos generativos. Dreams-Link no hace esto. **No hay código que llame a un modelo para crear interpretaciones.**"
          },
          {
            "p": "Lo que hacemos es simple. Encontramos los símbolos en el texto que proporcionas y seleccionamos los significados que el diccionario ha escrito sobre esos símbolos. No hay espacio para oraciones que no estén en el diccionario."
          },
          {
            "p": "El diccionario en sí no es creado por un modelo. Cada significado está acompañado de **qué pasaje del texto original de interpretación de sueños proviene**, y ese pasaje se compara palabra por palabra con el archivo original."
          }
        ]
      },
      {
        "title": "¿Por qué se tomó esta decisión?",
        "blocks": [
          {
            "p": "**Los modelos no dicen que no saben lo que no saben.** Cuando se les pregunta sobre símbolos sin base transmitida, fabrican orígenes plausibles. Y si es fabricado o no es algo que el lector no puede discernir. Si la creación se inserta en lugar de transmitir la tradición, la premisa del servicio colapsa."
          },
          {
            "p": "Intentamos dejar que un modelo creara símbolos para expandir el diccionario. De sesenta y seis ejemplos seleccionados como dignos de adopción, **cincuenta y cinco no pudieron proporcionar ninguna base transmitida**, y también hubo ejemplos como metro y carretera que no pueden existir en la interpretación de sueños tradicional. Por lo tanto, **ninguno fue incluido.**"
          }
        ]
      },
      {
        "kind": "note",
        "title": "Lo mismo fue cierto incluso con un modelo más grande",
        "blocks": [
          {
            "p": "Cuando ejecutamos lo mismo en un mejor modelo, uno de diecinueve pasó, y ese uno era simplemente una repetición de la misma palabra con la misma base. Un modelo más grande solo habla **más plausiblemente** sobre lo que no sabe."
          }
        ]
      },
      {
        "title": "Los beneficios de no usar un modelo",
        "blocks": [
          {
            "ul": [
              "**Si es el mismo sueño, la misma interpretación saldrá.** Las palabras no cambian cada vez que lo miras.",
              "**Es rápido.** No hay espera por la respuesta del modelo, por lo que los resultados están disponibles de inmediato.",
              "**El sueño que escribiste no sale.** No hay necesidad de enviarlo al servidor de una empresa externa — por favor lee esto junto con [el método que no guarda](/guide/no-storage).",
              "**Se puede ofrecer de forma gratuita.** Los sueños son algo que tenemos todos los días, por lo que hay muchas consultas. Si se llama a un modelo para cada consulta, el costo debe ser cubierto de alguna manera."
            ]
          }
        ]
      },
      {
        "title": "En cambio, lo que se ha sacrificado",
        "blocks": [
          {
            "p": "No podemos interpretar lo que no está en el diccionario. Si hubiéramos usado un modelo, habría habido una respuesta plausible para lo que escribiste. Elegimos **decir que no pudimos encontrarlo cuando no pudimos encontrarlo.** Lo que mostramos en ese momento está documentado en [cuando no se puede encontrar un símbolo](/guide/not-found)."
          }
        ]
      }
    ]
  },
  "guide/reports": {
    "eyebrow": "Productos Pagados",
    "title": "Dos Maneras de Conservar Tus Sueños",
    "summary": "La interpretación en sí no incurre en una tarifa. Explica cuáles son las dos opciones pagadas, qué contienen y por qué no son mejores interpretaciones.",
    "backLabel": "Base de Interpretación",
    "sections": [
      {
        "title": "La interpretación en sí no incurre en una tarifa",
        "blocks": [
          {
            "p": "Escribir tu sueño y ver qué símbolos están incluidos **no cuesta dinero y no requiere membresía.** Dado que las personas sueñan todos los días, juzgamos que este espacio debería ofrecerse de forma gratuita."
          },
          {
            "p": "**Las dos opciones pagadas no son mejores interpretaciones.** Son **dos maneras de conservar la misma interpretación.** El contenido que ves en la pantalla no cambia después del pago."
          }
        ]
      },
      {
        "title": "Tarjeta de Sueño — Una Imagen",
        "blocks": [
          {
            "p": "Proporcionamos los símbolos encontrados en tu sueño y sus significados en **una imagen.** Es un archivo de imagen, no un PDF, por lo que puedes guardarlo tal cual o enviarlo a otros."
          },
          {
            "p": "Esto es para aquellos que sienten arrepentimiento cuando un buen sueño desaparece después de cerrar la pantalla. Dado que no guardamos sueños, esta es la única forma de conservarlos si deseas preservarlos."
          }
        ]
      },
      {
        "title": "Informe de Sueño de Concepción — Documento de {conceptionPages} páginas",
        "blocks": [
          {
            "p": "Creamos un **documento de {conceptionPages} páginas** sobre sueños que muestran símbolos que indican un sueño de concepción. Incluye qué símbolos aparecieron, cómo esos símbolos han sido tradicionalmente interpretados, y un espacio para registrar esa información."
          },
          {
            "p": "Los sueños de concepción a menudo se discuten y comparten entre los miembros de la familia incluso después de que nace el niño, por lo que creamos un documento separado para sueños que son demasiado valiosos para solo ver en la pantalla."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Palabras no utilizadas aquí tampoco",
        "blocks": [
          {
            "p": "No hacemos juicios sobre el estado de embarazo o el género del niño. Tales declaraciones no están incluidas en el documento. Para más detalles, por favor consulta [cómo se filtran los sueños de concepción](/guide/conception-dreams)."
          }
        ]
      },
      {
        "title": "¿Por qué ya no hay documento?",
        "blocks": [
          {
            "p": "El servicio hermano produce un informe de nueve páginas. Esto se debe a que el motor de saju extrae muchos valores de una sola fecha de nacimiento. La interpretación de sueños en la tradición coreana no funciona de esa manera."
          },
          {
            "p": "El diccionario contiene {symbolTotal} símbolos y {meaningTotal} significados, pero **solo unos pocos símbolos realmente se aplican a un solo sueño.** Para expandir eso en nueve páginas, uno tendría que escribir cosas que no se encuentran en ningún texto original, y eso es precisamente lo que este servicio ha elegido no hacer. Por lo tanto, el documento es tan largo como los materiales honestamente permiten, y no más."
          }
        ]
      },
      {
        "title": "Valores y Disponibilidad",
        "blocks": [
          {
            "p": "Los precios están disponibles en la [guía de precios](/pricing). La razón por la que este documento no lista montos es intencional — para prevenir situaciones donde el documento de orientación permanezca con montos desactualizados cuando los valores cambian. La pantalla y los términos leen todos los montos desde el mismo lugar."
          },
          {
            "p": "El documento por el que pagaste puede **recibirse nuevamente con el mismo pedido.** Sin embargo, dado que no almacenamos archivos, no se puede recrear una vez que salgas de la pantalla de resultados — por favor, guarda el archivo que recibiste."
          }
        ]
      }
    ]
  }
} satisfies Record<DocKey, DocPage>;

export const ES_NOTICES = {
  "kindLabels": {
    "service": "Servicio",
    "product": "Informes",
    "engine": "Cálculo",
    "support": "Soporte"
  },
  "intro": "Los cambios en tus términos de uso — precios, políticas — se publican aquí antes de que entren en vigor. Las mejoras internas, como que la pantalla se vuelva más rápida, no se publican aquí: lo que aparece aquí es lo que necesitas saber.",
  "empty": {
    "title": "No hay avisos publicados",
    "body": "Si hay algún cambio que informarte, se publicará aquí."
  },
  "effective": "Vigente desde {date}",
  "pager": {
    "label": "Página de Avisos",
    "newer": "← Más Nuevo",
    "older": "Avisos Anteriores →"
  },
  "items": {
    "2026-08-06-no-storage": {
      "title": "El sueño que proporcionaste no está almacenado.",
      "body": [
        "Las historias de sueños son los valores más privados que este servicio recibe. Por lo tanto, no se registran en ninguna tabla. La entrada solo se lleva en la dirección del resultado para el cálculo, y una vez que se cierra la ventana, desaparece.",
        "Decidimos no crear una función que recoja sueños y muestre el flujo (diario de sueños). Es una función útil, pero para hacerlo, los escritos más privados deben ser almacenados continuamente.",
        "Cuando envías el enlace del resultado a otros, contiene el contenido del sueño. Por favor, ten cuidado al compartir."
      ]
    },
    "2026-08-06-engine-version": {
      "title": "Los resultados incluyen el diccionario de símbolos y criterios de cálculo.",
      "body": [
        "La base para la interpretación es el diccionario de símbolos de interpretación de sueños tradicional. Los resultados y documentos incluirán la versión de ese diccionario (por ejemplo, 1.2.0) y la versión de las reglas de coincidencia (por ejemplo, dream-1.0.0). El mismo sueño siempre dará el mismo símbolo basado en los mismos criterios.",
        "Si añadimos símbolos al diccionario o cambiamos significados de una manera que pueda alterar los resultados, este hecho se presenta aquí. Esto se debe a que los resultados que recibiste anteriormente pueden cambiar.",
        "No creamos significados tradicionales que no estén en el diccionario. Si no se encuentran símbolos, simplemente declaramos que no se encontraron y concluimos."
      ]
    },
    "2026-08-06-conception": {
      "title": "Solo te informamos sobre un sueño de concepción y no hacemos juicios.",
      "body": [
        "Si aparecen símbolos tradicionalmente vistos como un sueño de concepción en el sueño, te informaremos de ese hecho. Sin embargo, no determinamos el estado de embarazo ni el género del niño — tales afirmaciones no tienen fundamento, y los juicios médicos son responsabilidad de las instituciones médicas.",
        "La mención de hijos e hijas en narrativas tradicionales es un reflejo de costumbres que han sido transmitidas, y no significa que estemos prediciendo correctamente."
      ]
    }
  }
} satisfies NoticeCopy;
