import type { DocPage, NoticeCopy } from "./types";
import type { DocKey } from "./ko";

/** Español — `scripts/translate-doc-content.ts`가 만든다. 손으로 고치지 말 것. */
export const ES_DOCS = {
  "about": {
    "eyebrow": "Introducción",
    "title": "Introducción a Dreams-Link",
    "summary": "Este es un servicio que interpreta sueños utilizando un diccionario de símbolos de interpretación de sueños tradicional. Aclara qué se utiliza como base y qué no se menciona.",
    "backLabel": "Volver a Inicio",
    "sections": [
      {
        "title": "¿Qué hacemos?",
        "blocks": [
          {
            "p": "Dreams-Link encuentra **símbolos utilizados en la interpretación tradicional de sueños** a partir de los sueños que escribes y muestra sus significados. Dado que los sueños son algo que experimentamos a diario, las interpretaciones mostradas en la pantalla son **gratuitas y no requieren membresía.**"
          },
          {
            "p": "Las únicas cosas que se venden por una tarifa son **dos formas de preservación** — una imagen (tarjeta de sueño) que contiene un buen sueño y un PDF que captura el contexto cuando aparece un símbolo tradicionalmente considerado un 태몽."
          }
        ]
      },
      {
        "title": "¿Cuál es la base para la interpretación?",
        "blocks": [
          {
            "p": "La base para la interpretación es un **diccionario de {symbolTotal} símbolos**. Encontramos símbolos en el texto del sueño y solo mostramos los significados registrados en el diccionario para esos símbolos. Si un símbolo tiene múltiples significados, elegimos según el contexto — por ejemplo, sostener una serpiente y ser mordido se consideran tradicionalmente opuestos."
          },
          {
            "p": "La búsqueda se realiza **solo de acuerdo con reglas fijas**. Si es el mismo sueño, los mismos símbolos siempre aparecerán, y la interpretación no cambiará de ayer a hoy."
          }
        ]
      },
      {
        "title": "¿Qué no decimos?",
        "blocks": [
          {
            "p": "**No inventamos significados tradicionales que no están en el diccionario.** Si no se encuentran símbolos, simplemente declaramos que no se encontraron y concluimos. Llenar ese espacio con palabras plausibles es lo que este servicio más cuida."
          },
          {
            "p": "**Un 태몽 es meramente una señal, no un juicio.** Solo te informamos que un símbolo tradicionalmente considerado un 태몽 apareció en el sueño. No predecimos el embarazo ni el género del niño, y no hay base para tales afirmaciones."
          },
          {
            "p": "No **hacemos declaraciones definitivas sobre salud, riqueza o carrera.** Esta es una referencia desde la perspectiva de la interpretación tradicional de sueños y no es un consejo médico, financiero o legal."
          }
        ]
      },
      {
        "title": "No guardamos los sueños que escribes.",
        "blocks": [
          {
            "p": "Las historias de sueños son la parte más privada de lo que este servicio recibe. Por lo tanto, **no las almacenamos.** La entrada se utiliza solo para cálculos y no se registra en ningún registro de servidor."
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
  "guide": {
    "eyebrow": "Base para el Cálculo",
    "title": "¿Cuál es la base para el cálculo?",
    "summary": "Divulgamos todas las reglas que utiliza Dreams-Link. Puedes verificar qué símbolos se encuentran, qué está escrito en el diccionario — de dónde provienen las interpretaciones mostradas en la pantalla.",
    "backLabel": "Volver a Inicio",
    "sections": [
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Todos los números escritos aquí son **leídos directamente del diccionario de símbolos y las reglas de búsqueda.** Dado que no transcribimos manualmente el texto, si el diccionario se expande o las reglas cambian, los números en estos documentos también cambiarán."
          }
        ]
      }
    ]
  },
  "guide/symbol-dictionary": {
    "eyebrow": "Base para el Servicio",
    "title": "¿Cuál es la base del diccionario de símbolos?",
    "summary": "Aclara de dónde provienen las interpretaciones. Los criterios para dividir 215 símbolos en nueve categorías, la razón por la que solo 24 pueden ser sustentadas, y por qué no llenamos los vacíos.",
    "backLabel": "Base para la Interpretación",
    "sections": [
      {
        "title": "Solo mostramos lo que está escrito en el diccionario.",
        "blocks": [
          {
            "p": "Las interpretaciones de Dreams-Link provienen de un **diccionario de símbolos preescrito**. Encontramos símbolos en el texto que proporcionas y mostramos los significados registrados en el diccionario para esos símbolos. No creamos palabras que no están en el diccionario."
          },
          {
            "p": "Actualmente, el diccionario contiene **{symbolTotal} símbolos**, y esos símbolos tienen un total de **{meaningTotal} significados**. La mayoría de los símbolos tienen solo un significado, mientras que algunos tienen múltiples dependiendo del contexto."
          }
        ]
      },
      {
        "title": "Dividido en nueve categorías.",
        "blocks": [
          {
            "p": "Agrupamos lo que aparece en los sueños en nueve categorías según sus características. Los números entre paréntesis son los conteos actuales."
          },
          {
            "ul": [
              "**Objetos**({categoryThing}) · **Animales**({categoryAnimal}) · **Naturaleza**({categoryNature}) — las tres categorías más grandes. La interpretación tradicional de sueños discute principalmente objetos visibles, animales y elementos del cielo y el agua.",
              "**Acciones**({categoryAction}) · **Cuerpo**({categoryBody}) — lo que se hizo, como ser perseguido o caer, y dónde en el cuerpo, como la cara o el cabello.",
              "**Personas**({categoryPerson}) · **Lugares**({categoryPlace}) · **Colores**({categoryColor}) · **Números**({categoryNumber})"
            ]
          },
          {
            "p": "Para verlos por categoría, puedes ver la lista completa en el [diccionario de símbolos](/dream/symbols)."
          }
        ]
      },
      {
        "title": "Solo {cultureNoteTotal} pueden ser sustentados.",
        "blocks": [
          {
            "p": "Entre los símbolos, **{cultureNoteTotal}** tienen razones para la interpretación escritas junto a ellos. Por ejemplo, la razón para distinguir entre dientes superiores e inferiores en un sueño de perder dientes. Los símbolos restantes tienen espacios vacíos."
          },
          {
            "p": "**No hemos llenado los espacios vacíos.** Agregar orígenes plausibles haría que el documento fuera más extenso, pero en ese momento, este diccionario no estaría transmitiendo tradición sino fabricándola. Es más honesto distinguir entre lo que puede y no puede ser sustentado."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Razones para no expandir arbitrariamente el diccionario.",
        "blocks": [
          {
            "p": "En realidad, intentamos expandir los símbolos a cientos pero desistimos. Las entradas generadas automáticamente repetían las mismas frases como 'romance → buena relación' o no proporcionaban orígenes sustentados. Concluimos que **encontrar con precisión lo que existe** es mejor que simplemente aumentar los números."
          }
        ]
      },
      {
        "title": "Lo bueno y lo malo están predeterminados por el diccionario.",
        "blocks": [
          {
            "p": "Cada símbolo tiene significados tanto buenos como malos. **Bueno {polarityPositive}**, **ambivalente {polarityAmbivalent}**, **cauteloso {polarityNegative}**, y **neutral {polarityNeutral}**."
          },
          {
            "p": "El hecho de que los significados buenos superen la mitad no es porque seamos generosos, sino porque la interpretación tradicional de sueños siempre ha sido así — símbolos grandes y fuertes como cerdos, dragones y fuego generalmente se han visto como buenos augurios. Sin embargo, no todos los sueños se interpretan positivamente. Este valor refleja la naturaleza de cada símbolo, y la atmósfera general del sueño se reevalúa al reunir los símbolos encontrados."
          }
        ]
      }
    ]
  },
  "guide/how-matching-works": {
    "eyebrow": "Base para el Servicio",
    "title": "Cómo encontrar símbolos en historias de sueños.",
    "summary": "Explica cómo se seleccionan los símbolos de oraciones escritas libremente y cómo filtrar letras que accidentalmente ingresaron palabras como 'especial'.",
    "backLabel": "Base para la Interpretación",
    "sections": [
      {
        "title": "Encontramos símbolos en el texto que proporcionas.",
        "blocks": [
          {
            "p": "Cuando escribes libremente tu historia de sueño, buscamos símbolos en ese texto del diccionario. No necesitas seleccionar elementos ni escribir en un formato específico. Simplemente escribe como lo harías normalmente, como 'Anoche, una enorme pitón se envolvió a mi alrededor.'"
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
            "p": "Este es el aspecto más desafiante en coreano. Entre los símbolos, hay **{singleCharSymbolTotal} símbolos de un solo carácter** como **별** (byeol) · **말** (mal) · **배** (bae) · **손** (son), que aparecen con frecuencia en otras palabras."
          },
          {
            "ul": [
              "La **estrella** de \"Era un día ordinario\"",
              "La **cosa** en \"Alguien me persiguió\"",
              "La **palabra** en \"Esa persona dijo\" y el **vientre** en \"Tenía hambre\""
            ]
          },
          {
            "p": "Contar estos como símbolos conduce a interpretaciones irrelevantes. Por lo tanto, examinamos los caracteres circundantes: si **hay un carácter coreano delante**, lo consideramos un fragmento de una palabra y no lo contamos, y distinguimos si el carácter adjunto al final es una partícula o una terminación, permitiendo que 「소가」 (soga) pase mientras filtramos 「소리」 (sori)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Así es como ha estado funcionando",
        "blocks": [
          {
            "p": "Antes de implementar esta regla, al probar con doce oraciones reales, **todas las doce** contenían símbolos irrelevantes. Una oración sin contenido significativo fue incluso marcada como un 태몽 (taemong)."
          },
          {
            "p": "Ahora, queda uno: el 배 (bae) en 「배가 고팠다」 (bae ga gopatda). Dado que suena igual pero tiene un significado diferente, no puede ser filtrado solo por los caracteres circundantes."
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
            "p": "No hay lugar para la coincidencia en las reglas de búsqueda. Dado que el diccionario es fijo y las reglas están establecidas, si ingresas la misma oración nuevamente, **el mismo símbolo aparecerá en el mismo orden**. La interpretación que ves hoy no diferirá de la que verás mañana."
          },
          {
            "p": "Esta calidad también es una promesa que nos hemos hecho a nosotros mismos. Las interpretaciones que cambian cada vez son entretenidas pero carecen de fundamento. Esto se conecta a la historia de [por qué no usamos modelos](/guide/no-ai)."
          }
        ]
      }
    ]
  },
  "guide/one-symbol-many-meanings": {
    "eyebrow": "Base del Servicio",
    "title": "La razón por la que el mismo símbolo tiene diferentes significados",
    "summary": "Tradicionalmente, sostener una serpiente y ser mordido por una son opuestos. Esto discute la estructura donde 215 símbolos tienen 256 significados y cómo interpretar situaciones.",
    "backLabel": "Base de Interpretación",
    "sections": [
      {
        "title": "Incluso si los símbolos son los mismos, diferentes situaciones producen diferentes significados",
        "blocks": [
          {
            "p": "En la tradicional 해몽 (interpretación de sueños), un solo símbolo no siempre tiene un significado. Incluso para la misma serpiente, **sostenerla y ser mordido se han interpretado como completamente opuestos.** Esto también se señala en el diccionario."
          },
          {
            "p": "Por eso, los {symbolTotal} símbolos tienen un total de {meaningTotal} significados. Cada significado incluye **el contexto en el que se aplica**, y si ese contexto es visible en el texto que proporcionas, seleccionamos ese significado."
          }
        ]
      },
      {
        "title": "Cómo identificar la situación",
        "blocks": [
          {
            "p": "Verificamos si el texto que proporcionaste contiene palabras que indiquen esa situación. En 「뱀이 나를 물었다」 (baemi nareul mul-eotda), se describe la situación de la mordida, mientras que en 「뱀을 품에 안았다」 (baemeul pume anatda), se describe la situación de sostener. Si no hay palabras que indiquen la situación, la interpretamos utilizando el **significado básico** de ese símbolo."
          },
          {
            "p": "Por lo tanto, al escribir tu sueño, si incluyes **no solo lo que apareció sino también qué acciones se tomaron**, la interpretación será más precisa. 「돼지를 봤다」 (dwaeji-reul bwatda) transmite menos que 「돼지가 집으로 들어왔다」 (dwaeji-ga jib-euro deureowatda)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Cuanto más escribas, mejor, pero no es necesario escribir mucho",
        "blocks": [
          {
            "p": "Dos o tres oraciones son suficientes. Escribir más no significa encontrar más símbolos; más bien, si se mezclan palabras no relacionadas, se pueden identificar símbolos irrelevantes."
          }
        ]
      },
      {
        "title": "Hay {contextSplitSymbolTotal} símbolos con significados divididos",
        "blocks": [
          {
            "p": "Entre los {symbolTotal} símbolos en el diccionario, **{contextSplitSymbolTotal}** tienen significados que varían según la situación. El resto se ha leído en una dirección independientemente de la situación."
          },
          {
            "p": "Estos {contextSplitSymbolTotal} son las áreas más cautelosas. Malinterpretar la situación puede llevar a transmitir buenas noticias como malas, o viceversa. Por lo tanto, si la situación no está clara, no **elegimos forzosamente un lado y en su lugar optamos por el significado básico** de ese símbolo; no queremos afirmar algo incierto como si fuera cierto."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Los sentimientos al despertar también se consideran",
        "blocks": [
          {
            "p": "Los sentimientos y la repetición preguntados debajo del contenido del sueño no se utilizan para encontrar símbolos. Se hacen referencia al decidir qué dirección tomar en situaciones con significados divididos. No necesitas elegir; los resultados aún se proporcionarán."
          }
        ]
      },
      {
        "title": "La atmósfera general del sueño se cuenta por separado",
        "blocks": [
          {
            "p": "Si se encuentran múltiples símbolos, recopilamos si cada uno de esos símbolos es positivo o cauteloso para determinar el tono general del sueño. Un sueño que incluye un buen símbolo y un símbolo cauteloso no se refiere simplemente como un 'buen sueño.'"
          },
          {
            "p": "Puedes previsualizar los diversos símbolos y sus significados en el [diccionario de símbolos](/dream/symbols). También es bueno echar un vistazo a lo que se incluye antes de escribir tu sueño."
          }
        ]
      }
    ]
  },
  "guide/good-and-bad": {
    "eyebrow": "Base del Servicio",
    "title": "Criterios para distinguir 길몽 (sueños auspiciosos) y 흉몽 (sueños ominosos)",
    "summary": "Los cuatro valores asignados a cada símbolo y su distribución, la razón por la que los positivos superan la mitad, y por qué comunicamos sueños mixtos como mixtos.",
    "backLabel": "Base de Interpretación",
    "sections": [
      {
        "title": "A cada símbolo se le asigna uno de cuatro valores",
        "blocks": [
          {
            "p": "Entre los {symbolTotal} símbolos en el diccionario, cada uno se categoriza como uno de los siguientes."
          },
          {
            "ul": [
              "**{polarityPositive} símbolos positivos** — aquellos interpretados como eventos afortunados como riqueza, celebraciones y benefactores.",
              "**{polarityAmbivalent} símbolos que varían según la situación** — como las serpientes, donde el significado puede cambiar dependiendo de lo que se hizo. Esta categoría es la más cautelosa.",
              "**{polarityNegative} símbolos cautelosos** — aquellos vistos como chismes, disputas o pérdidas.",
              "**{polarityNeutral} símbolos neutrales** — aquellos que no son ni buenos ni malos en sí mismos, como colores o números."
            ]
          }
        ]
      },
      {
        "title": "La razón por la que los símbolos positivos superan la mitad",
        "blocks": [
          {
            "p": "Esto no se debe a que seamos generosos en nuestras evaluaciones. **La tradicional 해몽 (interpretación de sueños) siempre ha sido así.** Los símbolos grandes y poderosos como los cerdos, dragones, fuego y agua generalmente se han visto como buenos augurios, y el diccionario refleja esa tradición."
          },
          {
            "p": "Por lo tanto, el hecho de que 'apareció un buen símbolo' no significa 'sucederán cosas buenas.' Lo que podemos transmitir está limitado a cómo ese símbolo ha sido interpretado en la tradición."
          }
        ]
      },
      {
        "title": "El tono de un sueño se recopila de sus símbolos",
        "blocks": [
          {
            "p": "Si se encuentran múltiples símbolos, recopilamos su respectiva auspiciosidad para determinar el tono general del sueño. Si solo aparecen símbolos positivos, es un buen sueño; si solo aparecen símbolos cautelosos, es un sueño cauteloso; si **es mixto, lo comunicamos como mixto.**"
          },
          {
            "p": "No forzamos la categorización de símbolos mixtos en un solo lado. En realidad, los sueños que las personas tienen son a menudo mixtos, y resumirlos como 'un buen sueño' no es ni preciso ni útil."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Palabras que No Debes Usar",
        "blocks": [
          {
            "p": "No hagas afirmaciones definitivas sobre lo que sucederá, cuándo sucederá, o respecto a la salud y la riqueza. Transmitir los significados de los símbolos que se han transmitido a través de la tradición es diferente de predecir el futuro."
          }
        ]
      },
      {
        "title": "Cuando Aparece un Sueño de Advertencia",
        "blocks": [
          {
            "p": "Incluso si aparece un símbolo interpretado como advertencia, no necesariamente es una mala noticia. En la interpretación de sueños tradicional, un sueño ominoso se ha utilizado generalmente como **una declaración que señala la situación actual**. Si aparece un símbolo que sugiere conflicto, puede interpretarse como un recordatorio para contener las palabras."
          },
          {
            "p": "Por la misma razón, este servicio no vende talismanes ni amuletos. Lo que se vende son solo [dos formas de conservar tus sueños](/guide/reports)."
          }
        ]
      }
    ]
  },
  "guide/conception-dreams": {
    "eyebrow": "Sueño de Concepción",
    "title": "Cómo Interpretar Sueños de Concepción",
    "summary": "Revela cómo determinar 27 símbolos de sueños de concepción, por qué no todos los sueños de cerdo se consideran sueños de concepción, y el principio que no predice el embarazo o el género.",
    "backLabel": "Base de Interpretación",
    "sections": [
      {
        "title": "Primero, Aclara Esto",
        "blocks": [
          {
            "p": "**Dreams-Link no determina el estado de embarazo. Tampoco indica el género del niño.** Estos son asuntos que no se pueden conocer a través de los sueños, y no es algo que podamos hacer."
          },
          {
            "p": "Lo que podemos decirte se limita a esto — **el hecho de que un símbolo tradicionalmente considerado como un sueño de concepción apareció en este sueño.** Eso es todo lo que nuestros antepasados interpretaron sobre ese símbolo."
          }
        ]
      },
      {
        "title": "Hay {conceptionSymbolTotal} símbolos considerados Sueños de Concepción",
        "blocks": [
          {
            "p": "Entre los {symbolTotal} símbolos en el diccionario, **{conceptionSymbolTotal}** están marcados como sueños de concepción. Hay muchos animales como dragones, cerdos y serpientes, así como frutas como duraznos y castañas, y el sol y la luna están incluidos."
          },
          {
            "p": "Sin embargo, **la aparición de ese símbolo no significa inmediatamente que sea un sueño de concepción.** Aquí es donde este servicio ha puesto esfuerzo."
          }
        ]
      },
      {
        "title": "El Juicio se Basa en el Significado Real, No en los Símbolos",
        "blocks": [
          {
            "p": "El cerdo es un símbolo de sueños de concepción y al mismo tiempo **representa sueños de riqueza.** Si se considera un sueño de concepción solo porque apareció el símbolo, entonces todos los que soñaron con cerdos habrían tenido un sueño de concepción. En realidad, ha sido interpretado mayormente como un sueño de riqueza."
          },
          {
            "p": "Por lo tanto, miramos **el significado real derivado de ese símbolo, no el símbolo en sí.** Solo lo marcamos como un sueño de concepción cuando el significado que se inclina hacia la concepción es elegido en la situación que proporcionaste. Incluso con el mismo cerdo, el juicio cambia si el contexto es diferente."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Si Mencionas el Embarazo, Miramos Eso Primero",
        "blocks": [
          {
            "p": "Si tu escritura incluye palabras como embarazo, sueño de concepción, o parto, primero miramos el significado de ese símbolo que se inclina hacia la concepción. Incluso con el mismo sueño de cerdo, la forma en que nuestros antepasados lo interpretaron variaba dependiendo de la situación actual."
          }
        ]
      },
      {
        "title": "La Razón para Separar los Informes de Sueños de Concepción",
        "blocks": [
          {
            "p": "Los sueños de concepción sirven a un propósito diferente que otros sueños. A menudo se habla de ellos incluso después de que el niño nace y se comparten entre los miembros de la familia. Por lo tanto, en lugar de solo verlo en una pantalla, creamos un **documento que se puede conservar.**"
          },
          {
            "p": "Lo que se incluye se anota en [dos formas de conservar tus sueños](/guide/reports). Puedes ver todas las interpretaciones sin comprar lo que ves en la pantalla."
          }
        ]
      }
    ]
  },
  "guide/how-to-write": {
    "eyebrow": "Cómo Usar",
    "title": "Cómo Escribir Tu Sueño de Manera Efectiva",
    "summary": "Si escribes lo que viste e hiciste, será bien interpretado. Explica por qué un solo verbo puede determinar el significado y por qué preguntamos sobre sentimientos y repeticiones.",
    "backLabel": "Base de Interpretación",
    "sections": [
      {
        "title": "Por Favor Escribe Lo Que Viste e Hiciste",
        "blocks": [
          {
            "p": "No hay un formato específico. Un par de oraciones como hablas normalmente es suficiente. Sin embargo, lo que funciona bien se determina — **lo que es visible** y **lo que sucedió.**"
          },
          {
            "ul": [
              "Funciona bien — 「Una gran serpiente me envolvió」, 「Vi agua clara fluyendo」, 「Caí de un lugar alto」",
              "No funciona — 「Tuve miedo」, 「Me sentí extraño」, 「Sentí que alguien me odiaba」"
            ]
          },
          {
            "p": "Si solo escribes sentimientos, no habrá símbolos que encontrar. Esto se debe a que la interpretación de sueños tradicional habla de [objetos y acciones](/guide/categories), no de emociones."
          }
        ]
      },
      {
        "title": "Escribir Lo Que Hiciste Hace Que Sea Más Preciso",
        "blocks": [
          {
            "p": "Incluso con el mismo símbolo, hay {contextSplitSymbolTotal} casos donde los significados difieren dependiendo de la situación. Tradicionalmente, sostener una serpiente y ser mordido se han interpretado como opuestos."
          },
          {
            "p": "Así, 「Vi un cerdo」 es menos preciso que 「Un cerdo entró en la casa」, y 「Había agua」 es menos preciso que 「Bebí agua clara.」 **Un solo verbo determina el significado.**"
          }
        ]
      },
      {
        "title": "Por Qué Preguntamos Sobre Sentimientos y Repetición",
        "blocks": [
          {
            "p": "Debajo del contenido del sueño, hay un lugar para seleccionar **el sentimiento cuando te despertaste** y **si has repetido el mismo sueño.** No tienes que elegir ambos para que se proporcione un resultado."
          },
          {
            "p": "Estos valores no se utilizan para encontrar símbolos. Se hacen referencia al determinar **qué significado elegir** del mismo símbolo y cómo transmitir el resultado."
          }
        ]
      },
      {
        "kind": "note",
        "title": "En Casos Donde Mencionas el Embarazo",
        "blocks": [
          {
            "p": "Si tu escritura incluye palabras como embarazo, sueño de concepción, o parto, primero miramos el significado de ese símbolo que se inclina hacia la concepción. Incluso con el mismo sueño de cerdo, la forma en que nuestros antepasados lo interpretaron variaba dependiendo de la situación actual — [cómo interpretar sueños de concepción](/guide/conception-dreams)."
          }
        ]
      },
      {
        "title": "No Hay Necesidad de Escribir Textos Largos",
        "blocks": [
          {
            "p": "Un texto más largo no significa que se encontrarán más símbolos. Más bien, si se mezclan palabras irrelevantes en longitud, hay una mayor posibilidad de que palabras no relacionadas sean interpretadas como símbolos. **Por favor, escribe solo las escenas que recuerdas.**"
          },
          {
            "p": "El texto que proporcionas no se guarda en ninguna parte. La razón por la que puedes escribir libremente se anota en [el método de no guardar](/guide/no-storage)."
          }
        ]
      }
    ]
  },
  "guide/categories": {
    "eyebrow": "Base del Servicio",
    "title": "Criterios Divididos en Nueve Categorías",
    "summary": "Desde objetos, animales y naturaleza hasta colores y números, hay nueve categorías y una razón para no incluir una categoría emocional.",
    "backLabel": "Base de Interpretación",
    "sections": [
      {
        "title": "Los Símbolos en los Sueños se Dividen en Nueve Categorías",
        "blocks": [
          {
            "p": "Los {symbolTotal} símbolos están agrupados en nueve categorías según sus características. El criterio para la división es **cómo aparecen en los sueños** — ya sea como animales, objetos, o acciones que tomé."
          },
          {
            "ul": [
              "**Objetos {categoryThing}** — Artículos tangibles como dinero, espejos y cuchillos. Esta es la categoría más amplia.",
              "**Animales {categoryAnimal}** — dragón·cerdo·serpiente·vaca. Muchos de estos se consideran 태몽 (sueños de concepción).",
              "**Naturaleza {categoryNature}** — cosas que son grandes y antiguas como agua·fuego·sol·luna·montaña.",
              "**Acción {categoryAction}** — cosas que se hacen en los sueños como ser perseguido·caer·volar.",
              "**Cuerpo {categoryBody}** — dientes·cabello·sangre. El significado varía dependiendo de dónde en el cuerpo se encuentre.",
              "**Persona {categoryPerson}** · **Lugar {categoryPlace}** · **Color {categoryColor}** · **Número {categoryNumber}**"
            ]
          }
        ]
      },
      {
        "title": "¿Por qué no hay categoría de emociones?",
        "blocks": [
          {
            "p": "Categorías como 「ansiedad」·「anhelo」 no están incluidas. **Esto se debe a que la 해몽 (interpretación de sueños) tradicional no aborda las emociones.** Las interpretaciones antiguas se centraban en lo que era visible y lo que sucedía, en lugar de los sentimientos del soñador."
          },
          {
            "p": "He intentado crear una categoría de emociones, pero los resultados fueron términos como 「pérdida de afecto」·「estabilidad emocional」. Estos no son **símbolos** de los sueños, sino vocabulario de la psicología moderna. Ese es un tipo diferente de servicio y no es lo que este diccionario pretende hacer."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Así que cuando escribas",
        "blocks": [
          {
            "p": "Por favor, escribe **lo que viste y hiciste** en lugar de sentimientos; esto dará resultados mucho mejores. Sin embargo, preguntaré sobre tus sentimientos al despertar por separado — incluso el mismo símbolo puede tener diferentes significados dependiendo de la situación."
          }
        ]
      },
      {
        "title": "Los colores y números no existen por sí solos",
        "blocks": [
          {
            "p": "Color {categoryColor} y número {categoryNumber} no tienen significados inherentemente buenos o malos. Así como una serpiente blanca y una serpiente negra son diferentes, sus significados cambian dependiendo de **con qué estén asociados**. Por lo tanto, estas dos categorías se consideran en conjunto con otros símbolos."
          },
          {
            "p": "Una lista completa por categoría está disponible en el [Diccionario de Símbolos](/dream/symbols). Abrir un símbolo mostrará su significado transmitido, categoría y símbolos relacionados."
          }
        ]
      }
    ]
  },
  "guide/not-found": {
    "eyebrow": "Cómo usar",
    "title": "Cuando un símbolo no puede ser encontrado",
    "summary": "Si no puedes encontrarlo, te informaré que no se encuentra. Discutiré por qué no puede ser encontrado, qué te mostraré en su lugar en esa pantalla, y cómo se expande el diccionario.",
    "backLabel": "Base de interpretación",
    "sections": [
      {
        "title": "Cuando no se encuentra, te informaré que no se encuentra",
        "blocks": [
          {
            "p": "Si no puedo encontrar ningún símbolo en el texto que proporcionaste, te **informaré que no se encuentra.** No forzaré una asociación con algo similar ni crearé oraciones plausibles para llenar el espacio."
          },
          {
            "p": "Esto es de lo que este servicio es más cauteloso. En el momento en que lleno un vacío, contradice la declaración de transmitir interpretaciones."
          }
        ]
      },
      {
        "title": "¿Por qué no puede ser encontrado?",
        "blocks": [
          {
            "p": "Por lo general, es una de las siguientes."
          },
          {
            "ul": [
              "**Es un símbolo que aún no está en el diccionario.** Actualmente, hay {symbolTotal} símbolos listados, pero hay muchos más que podrían aparecer en los sueños.",
              "**Solo escribiste sentimientos.** Si solo hay emociones como 「tenía miedo」·「me sentí extraño」, no hay símbolos que se puedan asociar. La 해몽 tradicional habla de **objetos y acciones visibles** en lugar de emociones.",
              "**Es demasiado corto.** Es mejor escribir en oraciones en lugar de una o dos palabras."
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Cuando intentes escribir de nuevo",
        "blocks": [
          {
            "p": "Por favor, incluye **lo que viste y lo que hiciste** en el sueño. Decir 「estaba ansioso」 es menos efectivo que decir 「caí de un lugar alto」, y decir 「me gustó」 es menos efectivo que decir 「vi agua clara fluyendo」."
          }
        ]
      },
      {
        "title": "No dejo una pantalla en blanco",
        "blocks": [
          {
            "p": "Cuando algo no puede ser encontrado, también mostraré **{popularSymbolCount} símbolos buscados con frecuencia** en esa pantalla. Estos son seleccionados del diccionario en función de su representatividad, lo que puede ayudarte a recordar si uno de ellos apareció en tu sueño."
          },
          {
            "p": "Si deseas navegar por la lista completa, hay {symbolTotal} símbolos organizados por categoría en el [Diccionario de Símbolos](/dream/symbols). Cada símbolo incluye su significado transmitido y símbolos relacionados."
          }
        ]
      },
      {
        "title": "¿Cómo se expandirá el diccionario en el futuro?",
        "blocks": [
          {
            "p": "En lugar de aumentar los números, me estoy enfocando en **identificar con precisión lo que ya está allí**. He incluido {aliasTotal} nombres alternativos para el mismo símbolo, y he hecho posible reconocer palabras que cambian de forma con sufijos."
          },
          {
            "p": "Al expandir los símbolos en sí, solo incluiré aquellos que puedan **proporcionar evidencia transmitida.** Simplemente aumentar los números sin evidencia se convierte en creación en lugar de un diccionario — he documentado los intentos y resultados en [Por qué no uso modelos](/guide/no-ai)."
          }
        ]
      }
    ]
  },
  "guide/no-ai": {
    "eyebrow": "Base del servicio",
    "title": "Razones para no usar inteligencia artificial en 해몽",
    "summary": "No hay código que llame a un modelo en el proceso de creación de interpretaciones. He abandonado el intento de expandir el diccionario utilizando un modelo basado en resultados empíricos, y así lo que se ganó y lo que se renunció.",
    "backLabel": "Base de interpretación",
    "sections": [
      {
        "title": "No se utiliza inteligencia artificial en 해몽",
        "blocks": [
          {
            "p": "Muchos servicios actuales de 해몽 muestran textos generados al insertar historias de sueños en modelos generativos. Dreams-Link no hace eso. **No hay código que llame a un modelo en el proceso de creación de interpretaciones.**"
          },
          {
            "p": "Lo que hago es simple. Encuentro símbolos en el texto que proporcionas que están en el diccionario y selecciono y muestro los significados que el diccionario ha escrito para esos símbolos. No hay lugar para oraciones que no estén en el diccionario."
          }
        ]
      },
      {
        "title": "¿Por qué se tomó esta decisión?",
        "blocks": [
          {
            "p": "**Los modelos no dicen que no saben lo que no saben.** Cuando se les pregunta sobre símbolos sin evidencia transmitida, fabrican orígenes plausibles. Y si es fabricado o no es algo que el lector no puede discernir. Si uno inserta creación en lugar de transmitir tradición, la premisa del servicio colapsa."
          },
          {
            "p": "De hecho, he intentado que un modelo cree símbolos para expandir el diccionario. De sesenta y seis ejemplos que valían la pena considerar, **cincuenta y cinco no pudieron proporcionar ninguna evidencia transmitida**, y algunos incluían cosas que no podían existir en la 해몽 tradicional, como metros y autopistas. Por lo tanto, **ninguno fue incluido.**"
          }
        ]
      },
      {
        "kind": "note",
        "title": "Lo mismo fue cierto incluso con modelos más grandes",
        "blocks": [
          {
            "p": "Cuando intenté la misma tarea con un modelo mejor, solo uno de diecinueve pasó, y ese solo fue una repetición de las mismas palabras en la posición de evidencia. Los modelos más grandes solo hablan **más plausiblemente** sobre lo que no saben."
          }
        ]
      },
      {
        "title": "Los beneficios de no usar un modelo",
        "blocks": [
          {
            "ul": [
              "**Si es el mismo sueño, la misma interpretación saldrá.** La redacción no cambia cada vez.",
              "**Es rápido.** No hay espera por la respuesta de un modelo, por lo que los resultados se entregan de inmediato.",
              "**El sueño que proporcionaste no sale afuera.** No hay necesidad de enviarlo a servidores externos de la empresa — por favor, lee junto con [el método de no almacenar](/guide/no-storage).",
              "**Se puede ofrecer de forma gratuita.** Los sueños son algo que soñamos todos los días, por lo que hay muchas consultas. Si se llama a un modelo para cada consulta, los costos deben ser cubiertos en algún lugar."
            ]
          }
        ]
      },
      {
        "title": "Qué se sacrifica en su lugar",
        "blocks": [
          {
            "p": "No podemos interpretar lo que no está en el diccionario. Si se hubiera utilizado un modelo, cualquier cosa que escribieras habría producido una respuesta plausible. Elegimos el lado que **dice que no se pudo encontrar cuando no se pudo encontrar.** Lo que mostramos en ese momento está escrito en [cuando un símbolo no puede ser encontrado](/guide/not-found)."
          }
        ]
      }
    ]
  },
  "guide/reports": {
    "eyebrow": "Productos Pagados",
    "title": "Dos Maneras de Conservar Tus Sueños",
    "summary": "La interpretación en sí no incurre en una tarifa. Explicamos cuáles son las dos cosas que vendemos, qué contienen y por qué no son mejores interpretaciones.",
    "backLabel": "Base de Interpretación",
    "sections": [
      {
        "title": "La interpretación en sí no incurre en una tarifa",
        "blocks": [
          {
            "p": "Escribir tus sueños y ver qué símbolos están presentes **no cuesta dinero y no requiere membresía.** Dado que las personas sueñan todos los días, decidimos que este espacio debería ser gratuito."
          },
          {
            "p": "**Las dos cosas que vendemos no son mejores interpretaciones.** Son **dos maneras de conservar la misma interpretación.** El contenido que ves en la pantalla no cambia después del pago."
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
            "p": "Esto es para aquellos que sienten arrepentimiento cuando un buen sueño desaparece después de cerrar la pantalla. Dado que no guardamos sueños, si deseas conservarlo, esta es la única manera de hacerlo."
          }
        ]
      },
      {
        "title": "Informe de 태몽 — Documento {conceptionPages} Páginas",
        "blocks": [
          {
            "p": "Para los sueños que muestran símbolos interpretados como 태몽 (sueños de concepción), creamos un **documento de {conceptionPages} páginas.** Incluye qué símbolos aparecieron, cómo esos símbolos han sido tradicionalmente interpretados y un lugar para registrar eso."
          },
          {
            "p": "Dado que los 태몽 a menudo se discuten y comparten entre los miembros de la familia incluso después de que nace el niño, creamos un documento separado para sueños que son demasiado preciosos para ser vistos solo en la pantalla."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Palabras No Ditas Aquí Tampoco",
        "blocks": [
          {
            "p": "No determinamos el estado de embarazo ni el género del niño. Tales declaraciones no aparecen en el documento. Para más detalles, consulta [cómo interpretar 태몽](/guide/conception-dreams)."
          }
        ]
      },
      {
        "title": "Por Qué Ya No Hay Documento",
        "blocks": [
          {
            "p": "Los servicios de hermanos proporcionan informes de nueve páginas. El motor de saju extrae muchos valores de solo una fecha de nacimiento. La interpretación de sueños no funciona de esa manera."
          },
          {
            "p": "Los símbolos listados en el diccionario totalizan {symbolTotal}, y la mayoría de ellos tienen **un significado cada uno.** Para extender eso a nueve páginas, tendríamos que escribir significados tradicionales que no se encuentran en ningún material, y eso es exactamente lo que este servicio ha decidido no hacer. Por lo tanto, el documento es solo tan largo como los materiales honestamente permiten, y no más."
          }
        ]
      },
      {
        "title": "Precios y Estado de Ventas",
        "blocks": [
          {
            "p": "Los precios están listados en la [guía de precios](/pricing). La razón por la cual este documento no lista cantidades es intencional — para prevenir situaciones donde el documento de orientación permanezca con cantidades antiguas cuando los precios cambian. La pantalla y los términos leen la misma cantidad desde un solo lugar."
          },
          {
            "p": "Los documentos que compras pueden **recibirse nuevamente con el mismo pedido.** Sin embargo, dado que no guardamos archivos, una vez que dejas la pantalla de resultados, no puedes recrearlos — por favor, guarda los archivos que recibes."
          }
        ]
      }
    ]
  },
  "guide/no-storage": {
    "eyebrow": "Información Personal",
    "title": "El Método de No Almacenar Sueños que Escribes",
    "summary": "Explicamos lo que significa técnicamente que las historias de sueños no se registran en ningún lugar, y qué contiene el enlace de resultados.",
    "backLabel": "Base de Interpretación",
    "sections": [
      {
        "title": "No Se Requiere Membresía",
        "blocks": [
          {
            "p": "Dreams-Link no crea cuentas. No recopilamos nombres, correos electrónicos ni números de teléfono. Las únicas cosas que recopilamos son los sueños que escribes, cómo te sentiste al despertar y si sueñas el mismo sueño repetidamente, y eso no permanece después de que la interpretación se completa."
          },
          {
            "p": "Las historias de sueños son los valores más privados que este servicio recibe. Por eso las reglas son más estrictas de lo necesario — ni siquiera hemos establecido un espacio para escribir lo que envías."
          }
        ]
      },
      {
        "title": "Qué contiene el enlace de resultados",
        "blocks": [
          {
            "p": "Cuando el cálculo se completa, la dirección se verá así."
          },
          {
            "p": "**/ko/dream/result#eyJ0IjoiSSBkcmVhbXQgb2YgYSBjYXJwLi4u**"
          },
          {
            "p": "Lo que sigue **#** es el valor de entrada. Esta parte se llama **fragmento**, que es una **parte que el navegador no envía al servidor.** Este es un comportamiento web estándar y no una regla que creamos — fue diseñado originalmente para indicar una ubicación dentro de un documento, por lo que el servidor no tiene necesidad de verlo."
          },
          {
            "p": "Aquí, esta propiedad es particularmente importante — el sueño que proporcionaste **no permanece en los registros de acceso.**"
          },
          {
            "p": "En otras palabras, cuando abres el enlace de resultados, el navegador lee ese valor para solicitar un cálculo, y nuestro servidor recibe el valor para el cálculo, devuelve la respuesta y luego lo olvida."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Por favor, ten cuidado al enviar enlaces a otros",
        "blocks": [
          {
            "p": "El hecho de que no se almacene en el servidor no significa que el enlace sea seguro. El enlace de resultados contiene el sueño que proporcionaste, por lo que la persona que recibe ese enlace puede leer ese contenido."
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
            "p": "Se mantiene un registro mínimo necesario para la operación — un contador para prevenir que la misma persona envíe demasiadas solicitudes en un corto período de tiempo. Esto no incluye el contenido del sueño, y la IP de acceso tampoco se retiene. Solo se cuenta un valor, hasheado con la fecha, y ese valor cambia cuando cambia el día."
          }
        ]
      },
      {
        "title": "Lo que no se puede hacer porque no se almacena",
        "blocks": [
          {
            "p": "Para ser honesto, hay cosas que hemos sacrificado porque no almacenamos datos."
          },
          {
            "ul": [
              "**No hay diario de sueños.** No puedes recuperar la interpretación de la semana pasada, y debes tener el enlace para volver a verlo. Esto se hace intencionalmente — para crear un diario, los escritos más privados deben almacenarse continuamente.",
              "**Encontrar el mismo valor nuevamente.** No hay caché. En su lugar, el diccionario es fijo, y las reglas de coincidencia son determinísticas, por lo que el mismo texto siempre dará el mismo símbolo — las reglas reemplazan lo que la caché habría garantizado.",
              "**Actualizar traerá de nuevo la puerta de publicidad.** Esto se debe a que no hay lugar para dejar registros de visualización."
            ]
          }
        ]
      },
      {
        "title": "En caso de compra",
        "blocks": [
          {
            "p": "Si compras un informe, se mantendrá un registro de la transacción en ese momento. El pago tiene un período de retención definido legalmente, y sin un historial de pedidos, no se pueden procesar reembolsos. Sin embargo, incluso entonces, **el contenido del sueño escrito en la interpretación no se adjunta al pedido** — se recibe nuevamente y se escribe en ese momento al crear el documento después de la confirmación del pago."
          },
          {
            "p": "Para más detalles, consulta la [política de privacidad](/privacy)."
          }
        ]
      }
    ]
  },
  "notice": {
    "eyebrow": "Aviso",
    "title": "Anuncios",
    "summary": "Este es un lugar para informarte sobre cambios que pueden afectar tu uso.",
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
            "p": "Por favor, envía tus consultas a **{email}**. Responderemos dentro de 2 días hábiles. Para consultas sobre pagos y reembolsos, es más rápido incluir tu **número de pedido o correo electrónico de pago**."
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
              "**Pago y Reembolso** — Si el documento no ha sido creado o el monto del pago difiere del pedido, se proporcionará un reembolso completo. Las condiciones están en la [política de reembolso](/refund-policy).",
              "**Información Personal** — Aceptamos solicitudes de acceso, corrección y eliminación. La política de procesamiento está en la [política de privacidad](/privacy).",
              "**Informar Errores de Interpretación** — Si se encontraron símbolos incorrectamente o la interpretación parece extraña, por favor háznoslo saber. Si incluyes cuándo escribiste esa historia de sueño, podemos revisarla nuevamente con el mismo texto."
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
            "p": "No necesitas reescribir el sueño que proporcionaste en el correo de consulta. No guardamos entradas, por lo que no podemos revisarlas nuevamente, y el número de pedido es suficiente para la verificación. Por favor, escríbelo solo si es absolutamente necesario, como para informar errores de interpretación."
          }
        ]
      }
    ]
  },
  "guide/what-we-do-not-do": {
    "eyebrow": "Principios del Servicio",
    "title": "Lo Que No Hacemos",
    "summary": "No proporcionamos números de lotería, diarios de sueños, determinaciones de embarazo o talismanes. Explicamos por qué hemos decidido no hacer cada una de estas cosas.",
    "backLabel": "Base de Interpretación",
    "sections": [
      {
        "title": "No proporcionamos números de lotería",
        "blocks": [
          {
            "p": "Aunque se aborda comúnmente en los servicios de interpretación de sueños, no hacemos esto. **No hay base en la interpretación de sueños tradicional para extraer números de los sueños.** Aunque hay registros de interpretar sueños con cerdos como riqueza, no hay ninguna regla en la literatura que produzca seis números a partir de eso."
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
            "p": "Si bien sería conveniente tener una función para recopilar sueños pasados, requeriría que **almacenemos continuamente los sueños que proporcionas.** Las narrativas de sueños son el aspecto más privado de lo que este servicio recibe, y hemos decidido no intercambiar eso."
          },
          {
            "p": "En su lugar, los sueños que deseas conservar pueden ser **tomados como imágenes o documentos.** La responsabilidad del almacenamiento recae en los usuarios, no en nosotros — [Dos Maneras de Conservar Tus Sueños](/guide/reports)"
          }
        ]
      },
      {
        "title": "No determinamos el embarazo o el género",
        "blocks": [
          {
            "p": "Solo afirmaremos que ha aparecido un símbolo interpretado como un 태몽 (sueño de concepción). Si estás embarazada o si el niño es una hija o un hijo **no es algo que se pueda saber a través de los sueños.** Tales afirmaciones no aparecen en la pantalla ni en documentos pagados."
          }
        ]
      },
      {
        "title": "No vendemos talismanes o amuletos",
        "blocks": [
          {
            "p": "Solo porque un símbolo se interprete como cauteloso no significa que haya una razón para comprar algo. Un 흉몽 (sueño ominoso) se ha utilizado tradicionalmente para **indicar una situación a examinar ahora**, no para pagar para evitar algo."
          },
          {
            "p": "No creamos ansiedad para vender algo basado en ello. Las únicas cosas que vendemos son las dos mencionadas anteriormente, y ninguna proporciona interpretación adicional, sino más bien **maneras de conservar el mismo contenido.**"
          }
        ]
      },
      {
        "kind": "note",
        "title": "No hacemos afirmaciones definitivas sobre el futuro",
        "blocks": [
          {
            "p": "No hacemos afirmaciones definitivas sobre si algo sucederá, cuándo sucederá, o sobre salud, riqueza o longevidad. Transmitir los significados de símbolos tradicionales y predecir el futuro son asuntos diferentes."
          }
        ]
      },
      {
        "title": "No fabricamos interpretaciones que no existen",
        "blocks": [
          {
            "p": "Para símbolos que no existen en el diccionario, **afirmaremos que no pudimos encontrarlos.** No ensamblamos similares ni llenamos el espacio con oraciones plausibles. Por lo tanto, este servicio no [utiliza inteligencia artificial para la interpretación de sueños](/guide/no-ai). El modelo no dice que no sabe lo que no sabe."
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
    "body": "Si hay algún cambio que informarle, se publicará aquí."
  },
  "effective": "Vigente desde {date}",
  "pager": {
    "label": "Página de Avisos",
    "newer": "← Más Nuevo",
    "older": "Avisos Anteriores →"
  },
  "items": {
    "2026-08-06-no-storage": {
      "title": "El sueño que proporcionó no está almacenado.",
      "body": [
        "Las historias de sueños son los valores más privados que este servicio recibe. Por lo tanto, no se registran en ninguna tabla. La entrada solo se lleva en la dirección del resultado para el cálculo, y una vez que se cierra la ventana, desaparece.",
        "Decidimos no crear una función que recoja sueños y muestre el flujo (diario de sueños). Es una función útil, pero para hacerlo, los escritos más privados deben almacenarse continuamente.",
        "Cuando envíe el enlace del resultado a otros, contiene el contenido del sueño. Por favor, tenga cuidado al compartir."
      ]
    },
    "2026-08-06-engine-version": {
      "title": "Los resultados incluyen el diccionario de símbolos y criterios de cálculo.",
      "body": [
        "La base para la interpretación es el diccionario de símbolos de 해몽 (interpretación de sueños) tradicional. Los resultados y documentos incluirán la versión de ese diccionario (por ejemplo, 1.2.0) y los criterios para encontrar reglas (por ejemplo, dream-1.0.0). El mismo sueño siempre producirá el mismo símbolo basado en los mismos criterios.",
        "Si agregar símbolos o cambiar significados de antemano puede alterar los resultados, este hecho se presenta aquí. Esto se debe a que los resultados que recibió anteriormente pueden cambiar.",
        "No creamos significados tradicionales que no estén en el diccionario. Si no se encuentran símbolos, simplemente afirmamos que no se encontraron y concluimos."
      ]
    },
    "2026-08-06-conception": {
      "title": "Solo le informamos sobre 태몽 y no hacemos juicios.",
      "body": [
        "Si aparecen símbolos tradicionalmente vistos como 태몽 en el sueño, le informaremos de ese hecho. Sin embargo, no determinamos el estado de embarazo ni el género del niño; tales afirmaciones no tienen fundamento, y los juicios médicos son responsabilidad de las instituciones médicas.",
        "La mención de hijos e hijas en narrativas tradicionales es un reflejo de costumbres que han sido transmitidas, y no significa que estemos prediciendo correctamente."
      ]
    }
  }
} satisfies NoticeCopy;
