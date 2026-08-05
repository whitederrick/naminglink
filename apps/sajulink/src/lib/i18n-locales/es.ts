// 사주링크 화면 사전의 Spanish (Español)(es) 번역이다.
//
// **`scripts/translate-i18n.ts`가 만든 파일이다.** 키 구성·중첩·배열 길이는 en을 그대로
// 복사하고 문자열만 갈아 끼우므로 구조가 어긋날 자리가 없다. 손으로 고칠 때도 키를 더하거나
// 빼지 말 것 — `verify-i18n`이 en과 대조해 잡는다.
//
// **인연링크에서 물려받은 옛 번역을 되살린 것이 아니다.** 그 파일들은 궁합 서비스의 UI라,
// 되살리면 사주 화면에 궁합·인연이 다시 들어온다. 새 ko·en에서 다시 옮겼다.

import type { Dictionary } from "@/lib/i18n";

export const es: Dictionary = {
  "brand": "SajuLink",
  "tagline": "Tus Cuatro Pilares, leídos a partir de una fecha de nacimiento",
  "currentLanguage": "Idioma actual",
  "moreLanguages": "Más",
  "closeLanguages": "Cerrar",
  "landing": {
    "title": "Los ocho caracteres\nde los que naciste",
    "subtitle": "Todo lo que necesitas es una fecha de nacimiento.\nConstruimos tu carta de Saju (Cuatro Pilares), pesamos los cinco elementos y leemos la fuerza de tu día maestro.",
    "cta": "Ver mi Saju",
    "howTitle": "Cómo funciona",
    "steps": [
      "Ingresa tu fecha de nacimiento. La hora de nacimiento es opcional.",
      "El año, mes, día y hora de tu nacimiento se convierten en ocho caracteres — tu carta natal. A partir de eso, leemos el peso de cada elemento y la fuerza de tu día maestro.",
      "El pilar de hoy se coloca contra esa carta para darte también la fortuna de hoy."
    ],
    "privacyTitle": "Nada de lo que ingreses se almacena",
    "privacyBody": "Las fechas de nacimiento se utilizan solo mientras se calcula el resultado y nunca se registran. No se necesita cuenta. Nada que se lleve en un enlace de resultado se envía al servidor.",
    "disclaimer": "Este es un análisis tradicional de Saju ofrecido como referencia. No es una predicción científica ni un veredicto sobre el futuro de nadie."
  },
  "form": {
    "title": "Tu fecha de nacimiento",
    "description": "Conocer la hora de nacimiento hace que la lectura sea más precisa, pero no es obligatorio.",
    "meLegend": "Sobre ti",
    "nickname": "Cómo llamarlos",
    "nicknamePlaceholder": "p. ej. Yo",
    "nicknameHint": "Solo se muestra en la pantalla de resultados. No se utiliza en el cálculo.",
    "gender": "Género",
    "male": "Masculino",
    "female": "Femenino",
    "genderUnspecified": "Prefiero no decir",
    "genderHint": "La lectura tradicional de Saju considera las posiciones del cónyuge y los hijos de manera diferente según el género. Si omites esto, esos factores se excluyen del cálculo.",
    "birthplace": "Lugar de nacimiento",
    "birthplaceHint": "El pilar de la hora se calcula a partir del tiempo solar verdadero en tu lugar de nacimiento. Si tu lugar de nacimiento no está en la lista, elige la ciudad más cercana.\nDentro de la península de Corea, la diferencia entre ciudades es de menos de dos minutos. También se reflejan los cambios de horario de verano y de zona horaria histórica.",
    "calendar": "Calendario",
    "solar": "Solar",
    "lunar": "Lunar",
    "leapMonth": "Mes bisiesto",
    "birthDate": "Fecha de nacimiento",
    "year": "Año",
    "month": "Mes",
    "day": "Día",
    "birthTime": "Hora de nacimiento",
    "unknownTime": "No sé la hora",
    "hour": "Hora",
    "minute": "Minuto",
    "submit": "Ver anuncio y ver mi Saju",
    "submitNoAd": "Ver mi Saju",
    "submitting": "Calculando…",
    "errorInvalidDate": "Por favor, verifica la fecha de nacimiento. Para fechas lunares, también verifica si cae en un mes bisiesto.",
    "errorGeneric": "El cálculo falló. Por favor, intenta de nuevo en un momento."
  },
  "reading": {
    "chartTitle": "Tu carta natal",
    "chartHint": "El saju representa el año, mes, día y hora de nacimiento como dos caracteres cada uno. Todo lo que aparece a continuación se lee a partir de estos ocho caracteres.",
    "pillarYear": "Año",
    "pillarMonth": "Mes",
    "pillarDay": "Día",
    "pillarHour": "Hora",
    "pillarHourUnknown": "Hora de nacimiento no registrada",
    "dayMasterLabel": "Día maestro",
    "animalLabel": "Zodiaco",
    "seasonLabel": "Estación de nacimiento",
    "elementsTitle": "Fuerza elemental",
    "strongest": "Más fuerte",
    "scarcest": "Más escaso",
    "strengthTitle": "Lo que naciste con",
    "cautionTitle": "Lo que debes observar",
    "bodyStrengthTitle": "Fuerza del día maestro",
    "favorableLabel": "Lo que necesitas ahora"
  },
  "bodyStrength": {
    "STRONG": {
      "name": "Maestro del día fuerte",
      "body": "Los elementos que apoyan a tu maestro del día son abundantes. Eso te da impulso propio, pero también se inclina fácilmente hacia un lado: tiendes a acomodarte cuando algo desvía el exceso."
    },
    "BALANCED": {
      "name": "Maestro del día equilibrado",
      "body": "Lo que apoya a tu maestro del día y lo que lo desvía están casi equilibrados. Demasiado cerca para decidir de cualquier manera, así que aquí leemos lo que es más delgado como lo que necesitas."
    },
    "WEAK": {
      "name": "Maestro del día débil",
      "body": "Los elementos que apoyan a tu maestro del día son escasos. Tomas prestada fuerza de tu alrededor, pero te agotas al intentar resistir solo: te encuentras a ti mismo cuando algo te respalda."
    }
  },
  "tenGods": {
    "BIGYEON": {
      "name": "Compañero (比肩)",
      "body": "La energía que está hombro con hombro contigo. Densa, te da la fuerza para mantener tu propio terreno y reclamar tu parte primero."
    },
    "GEOPJAE": {
      "name": "Rival (劫財)",
      "body": "Energía que se asemeja a ti pero actúa de manera diferente. Presta fuerza a un empuje, pero en exceso lo que tienes tiende a dispersarse."
    },
    "SIKSIN": {
      "name": "Expresión (食神)",
      "body": "La energía que saca lo que hay en ti al mundo. La expresión y el simple placer de vivir provienen de aquí; donde se encuentra, hay facilidad."
    },
    "SANGGWAN": {
      "name": "Disruptor (傷官)",
      "body": "La energía que desestabiliza un marco fijo. Otorga talento y un filo agudo, pero en exceso colisiona con reglas y jerarquías."
    },
    "PYEONJAE": {
      "name": "Ganancia inesperada (偏財)",
      "body": "Energía de riqueza de tipo amplio. Activa y generosa con lo que tiene, trae oportunidades de lugares inesperados."
    },
    "JEONGJAE": {
      "name": "Riqueza estable (正財)",
      "body": "Energía de riqueza de tipo estable, acumulada pieza por pieza. La Saju tradicional también lo lee como la posición del cónyuge para un hombre."
    },
    "PYEONGWAN": {
      "name": "Desafiante (偏官)",
      "body": "La energía que te mantiene alerta y erguido. Te haces fuerte bajo presión, aunque en exceso te deja sintiéndote siempre perseguido."
    },
    "JEONGGWAN": {
      "name": "Autoridad (正官)",
      "body": "La energía del orden que te endereza. Mantiene tu nombre y posición; la Saju tradicional también lo lee como la posición del cónyuge para una mujer."
    },
    "PYEONIN": {
      "name": "Apoyo poco convencional (偏印)",
      "body": "Energía que te respalda por un camino inusual. Otorga el poder de profundizar, aunque en exceso el pensamiento corre por delante de la mano."
    },
    "JEONGIN": {
      "name": "Nutrición (正印)",
      "body": "La energía que te sostiene y te cría. Te da aprendizaje y algo en qué apoyarte; en exceso, salir por tu cuenta llega tarde."
    }
  },
  "dayMasters": {
    "甲": {
      "name": "Madera Yang (甲)",
      "trait": "Un árbol alto que crece recto. Una vez que se establece la dirección, no titubea, y prefiere soportar que doblarse."
    },
    "乙": {
      "name": "Madera Yin (乙)",
      "trait": "Una enredadera — hierba flexible. Se dobla con las circunstancias para seguir avanzando, y no se rompe."
    },
    "丙": {
      "name": "Fuego Yang (丙)",
      "trait": "El sol del mediodía. Los sentimientos se muestran claramente, la habitación se ilumina, y avanzar se siente natural."
    },
    "丁": {
      "name": "Fuego Yin (丁)",
      "trait": "Luz de vela. Arde de manera silenciosa y prolongada, y calienta primero a los más cercanos."
    },
    "戊": {
      "name": "Tierra Yang (戊)",
      "trait": "Terreno abierto y montañas. Difícil de sacudir y fácil de apoyarse, aunque lento para cambiar una decisión una vez tomada."
    },
    "己": {
      "name": "Tierra Yin (己)",
      "trait": "Suelo de campo. Acepta lo que llega y lo cultiva, cuidando más que exhibiendo."
    },
    "庚": {
      "name": "Metal Yang (庚)",
      "trait": "Hierro sin trabajar. Decisivo y claro, con poca paciencia para las cosas que quedan en el aire."
    },
    "辛": {
      "name": "Metal Yin (辛)",
      "trait": "Una gema cortada. Sabor de grano fino y altos estándares; es difícil dejar pasar la descortesía."
    },
    "壬": {
      "name": "Agua Yang (壬)",
      "trait": "Río y mar. Amplio en perspectiva, con un ojo para cómo fluyen las cosas."
    },
    "癸": {
      "name": "Agua Yin (癸)",
      "trait": "Rocío y lluvia. Se filtra silenciosamente y lee el ambiente antes de las palabras."
    }
  },
  "dayMasterSigns": {
    "甲": [
      "Dice lo que piensa incluso en un primer encuentro.",
      "Rara vez cambia un plan o una promesa una vez establecido.",
      "Rechaza las cosas directamente, lo que puede sonar brusco."
    ],
    "乙": [
      "Evita la confrontación y toma otro camino.",
      "Parece suave, pero termina donde quería ir.",
      "Lee el ambiente antes de unirse a un grupo."
    ],
    "丙": [
      "Habla primero con las personas que acaba de conocer.",
      "Lo que le gusta y lo que no le gusta se refleja en su rostro.",
      "Termina en el centro de una reunión sin intentarlo."
    ],
    "丁": [
      "Silencioso al principio, atento una vez que estás cerca.",
      "Prefiere una larga conversación con uno o dos en lugar de una multitud.",
      "Recuerda un comentario pasajero y lo menciona más tarde."
    ],
    "戊": [
      "Habla poco; su voz rara vez se eleva incluso cuando las cosas son urgentes.",
      "El que lo resuelve al final mientras otros posponen la decisión.",
      "Un no, una vez dado, se mantiene como no por mucho tiempo."
    ],
    "己": [
      "Escucha más de lo que habla.",
      "Lucha por rechazar, así que el trabajo se acumula sobre ellos.",
      "Lo que cuidó en silencio solo sale a la luz más tarde."
    ],
    "庚": [
      "Decide rápido y lo dice en el acto.",
      "No suaviza las cosas, lo que puede sonar frío.",
      "Visiblemente inquieto cuando algo se prolonga."
    ],
    "辛": [
      "Tiene estándares claros sobre la ropa y las cosas que elige.",
      "No puede dejar pasar un trabajo a medio hacer sin señalarlo.",
      "Esparce elogios, pero es definitivo una vez que lo significa."
    ],
    "壬": [
      "Se mezcla fácilmente con todo tipo de personas.",
      "Saca a relucir lo que viene después antes que lo que está frente a ellos.",
      "Se irrita al estar atado a un lugar por mucho tiempo."
    ],
    "癸": [
      "Habla poco pero ha leído la situación exactamente.",
      "El primero en notar cuando cambia el ambiente.",
      "Mantiene su vida interior cerca, por lo que lleva tiempo conocerlo."
    ]
  },
  "animalTraits": {
    "rat": "Rápido para notar y rápido para asegurar lo que importa. Primero en actuar en una crisis.",
    "ox": "Lento de mirar pero ve las cosas hasta el final. Lo que asume, no lo deja caer.",
    "tiger": "Sin miedo y al frente. No puede dejar pasar la injusticia.",
    "rabbit": "Gentil y perceptivo. Sabe cómo rodear en lugar de chocar.",
    "dragon": "De gran corazón con altos ideales. Rara vez se contenta con lo ordinario.",
    "snake": "No revela su interior y piensa profundamente. Juzga con precisión.",
    "horse": "Brillante e inquieto. Estar encerrado es lo más difícil.",
    "goat": "Cálido y considerado. Guarda palabras duras durante mucho tiempo.",
    "monkey": "Ingenioso y rápido para adaptarse. Se aburre con la repetición.",
    "rooster": "Diligente y exigente. No puede dejar nada fuera de lugar.",
    "dog": "Leal hasta el final una vez que se otorga la confianza. La traición duele especialmente.",
    "pig": "Generoso y directo. Confía fácilmente, a veces a un costo."
  },
  "result": {
    "title": "Tu lectura de Saju",
    "recalculate": "Comenzar de nuevo",
    "copyLink": "Copiar enlace del resultado",
    "copied": "Copiado",
    "missingInput": "No se pudo leer este resultado. Por favor, ingresa las fechas nuevamente.",
    "partialTime": "No se proporcionó hora de nacimiento, por lo que se omitió el pilar de la hora. Agregarlo hace que la lectura sea más precisa.",
    "engineVersion": "Calculado con",
    "disclaimer": "Esta es una lectura de Saju tradicional ofrecida como referencia. No es una predicción científica ni un veredicto sobre tu futuro."
  },
  "today": {
    "menu": "La fortuna de hoy",
    "title": "La fortuna de hoy",
    "pillarLabel": "El pilar de hoy",
    "scoreLabel": "La puntuación de hoy",
    "grades": {
      "DAEGIL": {
        "name": "Muy auspicioso",
        "body": "La energía de hoy se encuentra con tu carta en su mejor ángulo. Un buen día para retomar lo que has estado posponiendo."
      },
      "GIL": {
        "name": "Auspicioso",
        "body": "La corriente fluye contigo hoy. Lo que normalmente haces va más fácilmente que lo habitual."
      },
      "PYEONG": {
        "name": "Equilibrado",
        "body": "Nada te empuja y nada te bloquea. Haz lo que sueles hacer y obtendrás lo que sueles obtener."
      },
      "JUUI": {
        "name": "Ten cuidado",
        "body": "Parte de la energía de hoy va en contra de tu carta. Es mejor dedicar tiempo a terminar cosas que a empezar nuevas."
      },
      "JOSIM": {
        "name": "Cuidado",
        "body": "La energía de hoy presiona sobre tu carta. Si una decisión puede esperar, déjala esperar."
      }
    },
    "categories": {
      "wealth": "Dinero",
      "love": "Amor",
      "career": "Trabajo",
      "health": "Salud"
    },
    "luckyTitle": "Mantén esto cerca hoy",
    "luckyElement": "Elemento",
    "luckyColor": "Color",
    "luckyDirection": "Dirección",
    "luckyTime": "Horas",
    "luckyNumber": "Números",
    "luckyColors": {
      "TEAL": "verde azulado",
      "GREEN": "verde",
      "RED": "rojo",
      "ORANGE": "naranja",
      "YELLOW": "amarillo",
      "OCHRE": "ocre",
      "WHITE": "blanco",
      "GOLD": "dorado",
      "BLACK": "negro",
      "NAVY": "azul marino"
    },
    "luckyDirections": {
      "EAST": "Este",
      "SOUTH": "Sur",
      "CENTER": "Centro",
      "WEST": "Oeste",
      "NORTH": "Norte"
    },
    "basisTitle": "De dónde proviene esta puntuación",
    "factors": {
      "TODAY_IS_YONGSIN": "El elemento de hoy es el que tu carta necesita",
      "TODAY_GENERATES_YONGSIN": "El elemento de hoy alimenta el que tu carta necesita",
      "TODAY_IS_GISIN": "El elemento de hoy empuja más el lado que ya está lleno",
      "TODAY_CONTROLS_YONGSIN": "El elemento de hoy suprime el que tu carta necesita",
      "TODAY_GENERATES_SELF": "El elemento de hoy apoya a tu día maestro",
      "TODAY_SAME_ELEMENT": "El elemento de hoy es el mismo que tu día maestro",
      "SELF_GENERATES_TODAY": "Tu día maestro fluye hacia el elemento de hoy",
      "TODAY_CONTROLS_SELF": "El elemento de hoy suprime a tu día maestro",
      "SELF_CONTROLS_TODAY": "Tu día maestro suprime el elemento de hoy",
      "WEAK_HELPED": "Un día maestro débil recibe fuerza hoy",
      "STRONG_OVERFED": "Un día maestro fuerte se vuelve más pesado hoy",
      "STRONG_DRAINED": "Un día maestro fuerte se equilibra mejor hoy",
      "WEAK_BURDENED": "Un día maestro débil recibe más carga hoy",
      "BRANCH_SAMHAP": "La rama de hoy forma un trígono completo con tu carta",
      "BRANCH_BANHAP": "La rama de hoy forma un medio trígono con tu carta",
      "BRANCH_YUKHAP": "La rama de hoy forma una armonía de seis con tu carta",
      "BRANCH_SAME": "La rama de hoy es la misma que una en tu carta",
      "BRANCH_NEUTRAL": "La rama de hoy no tiene un vínculo particular con tu carta",
      "BRANCH_WONJIN": "La rama de hoy está en discordia silenciosa con tu carta",
      "BRANCH_CHUNG": "La rama de hoy choca con tu carta"
    },
    "bookmarkHint": "No almacenamos tu fecha de nacimiento, así que debe ingresarse nuevamente cada vez. **Marca este enlace de resultado** y se abrirá la fortuna de ese día todos los días.",
    "disclaimer": "La fortuna de hoy convierte la relación entre el pilar del día y tu carta en una puntuación. Es una nota sobre cómo pasar el día, no una profecía."
  },
  "ads": {
    "label": "Publicidad"
  },
  "analyzing": {
    "title": "Construyendo tu carta",
    "quotes": [
      "El saju no es una respuesta fija. Es un lenguaje para entenderte a ti mismo.",
      "Saber con qué naciste y vivirlo son dos cosas diferentes.",
      "Una posición fuerte depende de su uso; una delgada, de llenarla.",
      "Los mismos ocho caracteres hacen un día diferente dependiendo de cómo los leas.",
      "Mejor que esperar un buen día es saber cómo usar el que tienes.",
      "La posición que la gente llama debilidad es generalmente donde ocurre el mayor crecimiento.",
      "Hay energía que la temporada impulsa hacia adelante; hay algunas que debes crear tú mismo.",
      "Lo que importa más que la puntuación es cómo la lees.",
      "La fortuna de hoy es el clima de un día, no el clima donde vives.",
      "Conocer tu saju significa verte a ti mismo, no ver hacia adelante."
    ],
    "watching": "Viendo el anuncio",
    "remaining": "Tu resultado se abrirá en {seconds}s"
  },
  "reportDetail": {
    "depthTitle": "Una mirada más cercana a tu carta",
    "vitalityTitle": "Lo que la temporada impulsa hacia adelante",
    "vitalityHint": "Las barras indican cuánto hay de un elemento; esta tabla dice si el mes de nacimiento lo impulsa. La misma cantidad tiene diferente fuerza en wang que en sa.",
    "vitalities": {
      "WANG": {
        "name": "Wang (旺)",
        "body": "en su punto más fuerte"
      },
      "SANG": {
        "name": "Sang (相)",
        "body": "siguiente en fuerza"
      },
      "HYU": {
        "name": "Hyu (休)",
        "body": "descansando después de su turno"
      },
      "SU": {
        "name": "Su (囚)",
        "body": "retenido, difícil de mover"
      },
      "SA": {
        "name": "Sa (死)",
        "body": "en su punto más débil"
      }
    },
    "rawLabel": "Antes de la temporada",
    "strengthLabel": "Después de la temporada",
    "earthSeasonNote": "Nacido en un mes de transición (辰未戌丑), por lo que la tierra también se cuenta como wang.",
    "allyRatioLabel": "Proporción de aliados",
    "allyRatioHint": "La participación combinada de las estrellas de recurso y compañero. Más del 45% es fuerte, menos del 35% es débil. El número se imprime para que puedas ver cuán cerca estuvo el veredicto.",
    "stemGodsTitle": "Lo que cada pilar es para ti",
    "stemGodsHint": "Medido desde tu día maestro, cada tronco restante toma uno de los nombres de los diez dioses. Cuáles de ellos son más abundantes dice mucho sobre el temperamento.",
    "pillarColumn": "Pilar",
    "tenGodColumn": "Diez dioses",
    "meaningColumn": "Lo que significa",
    "yearOutlookTitle": "Perspectiva de este año",
    "factorsTitle": "De dónde proviene la puntuación de hoy",
    "factorsHint": "La pantalla nombra los factores; aquí cada uno se imprime con los puntos que añadió o eliminó.",
    "deltaColumn": "Puntos",
    "appendixTitle": "Cómo se construyó esta carta",
    "timeCorrectionLabel": "Hora de nacimiento",
    "timeCorrectionApplied": "Corregido a la hora solar verdadera y leído como {time}.",
    "timeCorrectionNone": "No se proporcionó hora de nacimiento, por lo que se omitió el pilar de la hora.",
    "timeCorrectionDateShift": "La corrección movió la fecha a {date}, por lo que se utilizó el pilar de ese día.",
    "calendarLabel": "Fecha de la carta",
    "solarLabel": "Solar",
    "lunarLabel": "Lunar",
    "lunarUnavailable": "Esta fecha no está en la tabla del almanaque, por lo que no se muestra fecha lunar."
  },
  "report": {
    "title": "Guarda tu lectura de vida como un PDF",
    "body": "Convertimos esta lectura en un PDF: tu carta natal, el peso de los cinco elementos, la fuerza de tu 일간 y lo que necesita ahora, y la fortuna de hoy, todo en una página.",
    "buyButton": "Paga {price} y descarga",
    "preparing": "No disponible aún",
    "ordering": "Creando tu pedido…",
    "paying": "Procesando el pago…",
    "issuing": "Preparando tu informe…",
    "done": "Descargado. Usa el botón de abajo para descargarlo de nuevo.",
    "failed": "El pago o la descarga fallaron. Por favor, intenta de nuevo en un momento.",
    "retry": "Descargar de nuevo",
    "contents": [
      "Tu 일간 y temperamento: un resumen, fortalezas y precauciones",
      "Tu carta natal: los ocho caracteres de los cuatro pilares",
      "El peso de los cinco elementos, el más grueso y el más delgado",
      "La fuerza de tu 일간, y la energía que necesita ahora",
      "La fortuna de hoy y los cuatro dominios (dinero, amor, trabajo, salud)"
    ],
    "consentLabel": "Entiendo que este es contenido digital entregado inmediatamente tras el pago, y que **la retirada por un simple cambio de opinión está restringida una vez que se completa la descarga**.",
    "consentRequired": "Por favor, confirma los términos de retirada antes de pagar.",
    "productInfoTitle": "Información del producto",
    "productInfo": [
      [
        "Proveedor",
        "{brand}"
      ],
      [
        "Formato",
        "Un documento PDF (5 páginas A4), descargado en pantalla justo después del pago."
      ],
      [
        "Requisitos",
        "Cualquier dispositivo que abra un PDF. No se necesita instalación ni cuenta."
      ],
      [
        "Término de uso",
        "Sin límite. Tú mantienes el archivo que descargas."
      ],
      [
        "Re-descarga",
        "Hasta cinco veces en el mismo pedido. No guardamos copia, por lo que no se puede producir de nuevo una vez que sales de la pantalla de resultados."
      ],
      [
        "Retirada",
        "Reembolso completo antes de que comience la descarga. Después de completarse, la retirada por un cambio de opinión está restringida (Art. 17(2), Ley de Comercio Electrónico de Corea)."
      ],
      [
        "Costos de devolución",
        "Ninguno: contenido digital, no se envía nada."
      ]
    ],
    "refundContact": "Para reembolsos o preguntas, contacta al centro de atención al cliente o envía un correo electrónico a continuación. Si el documento no pudo ser producido, o el monto cobrado difiere del pedido, reembolsamos completamente.",
    "pdfLanguageNotice": "El PDF se produce en el mismo idioma que esta pantalla."
  },
  "premiumReport": {
    "title": "Mantén tu lectura premium como un PDF",
    "body": "Todo en la lectura de la vida, además de **los números detrás de esto que nunca aparecen en pantalla** — la proporción de aliados que decidió fuerte o débil, cuánto empujó el mes de nacimiento a cada elemento, y la corrección de tiempo solar verdadero aplicada a tu hora de nacimiento.",
    "buyButton": "Paga {price} y descarga",
    "preparing": "No disponible aún",
    "ordering": "Creando tu pedido…",
    "paying": "Procesando el pago…",
    "issuing": "Preparando tu informe…",
    "done": "Descargado. Usa el botón de abajo para descargarlo de nuevo.",
    "failed": "El pago o la descarga fallaron. Por favor, intenta de nuevo en un momento.",
    "retry": "Descargar de nuevo",
    "contents": [
      "Tu día maestro y temperamento — un resumen, fortalezas y precauciones",
      "Tu carta natal — los ocho caracteres de los cuatro pilares",
      "Los cinco elementos, la fuerza de tu día maestro y lo que necesita",
      "La fortuna de hoy y los cuatro dominios (dinero, amor, trabajo, salud)",
      "Qué significa cada pilar para ti — los diez dioses leídos desde tu carta",
      "Situación estacional y proporción de aliados — los números detrás del veredicto",
      "Perspectiva de este año, factores de puntuación de hoy, y la corrección de tiempo"
    ],
    "consentLabel": "Entiendo que este es contenido digital entregado inmediatamente tras el pago, y que **la retirada por un simple cambio de opinión está restringida una vez que se completa la descarga**.",
    "consentRequired": "Por favor, confirma los términos de retirada antes de pagar.",
    "productInfoTitle": "Información del producto",
    "productInfo": [
      [
        "Proveedor",
        "{brand}"
      ],
      [
        "Formato",
        "Un documento PDF (7 páginas A4), descargado en pantalla justo después del pago."
      ],
      [
        "Requisitos",
        "Cualquier dispositivo que abra un PDF. No se necesita instalación ni cuenta."
      ],
      [
        "Término de uso",
        "Sin límite. Mantienes el archivo que descargas."
      ],
      [
        "Re-descarga",
        "Hasta cinco veces en el mismo pedido. No guardamos copia, por lo que no se puede producir de nuevo una vez que salgas de la pantalla de resultados."
      ],
      [
        "Retirada",
        "Reembolso completo antes de que comience la descarga. Después de completarla, la retirada por un cambio de opinión está restringida (Art. 17(2), Ley de Comercio Electrónico de Corea)."
      ],
      [
        "Costos de devolución",
        "Ninguno — contenido digital, no se envía nada."
      ]
    ],
    "refundContact": "Para reembolsos o preguntas, contacta al centro de atención al cliente o envía un correo electrónico a continuación. Si el documento no pudo ser producido, o el monto cobrado difiere del pedido, reembolsamos completamente.",
    "pdfLanguageNotice": "El PDF se produce en el mismo idioma que esta pantalla."
  },
  "fallbackReport": {
    "summary": "Un maestro del día {dayMaster} nacido en la energía de {season}. En toda la carta, {strongest} es el más fuerte y {scarcest} es el más débil. Todo lo que sigue a continuación proviene de esos ocho caracteres: cada número y cada pilar aquí son calculados, no elegidos.",
    "personality": "Tu maestro del día es {dayMaster} — energía de {element} — y esta carta se lee como {strengthName}. Qué lado es más fuerte, lo que apoya al maestro del día o lo que se extrae de él, es lo que da forma al carácter, y en la vida diaria se manifiesta así.",
    "cautions": {
      "STRONG": [
        "Empujas con tanta fuerza que a menudo solo notas la inclinación después de que ha ocurrido.",
        "Incluso donde hay ayuda disponible, terminas manejándolo solo, lo que hace que el trabajo sea mayor.",
        "Las cosas se estabilizan cuando dejas espacio para lo que extrae el exceso."
      ],
      "BALANCED": [
        "Nada te inclina hacia un lado u otro, así que una decisión pospuesta simplemente permanece pospuesta.",
        "Te adaptas bien a la situación, lo que puede difuminar dónde está tu propia línea.",
        "Dirigirte hacia lo que es más débil en este momento te da una dirección a seguir."
      ],
      "WEAK": [
        "Sostenerte solo te desgasta más rápido de lo que esperas.",
        "Sin nada que te respalde, las decisiones se deslizan y el momento pasa.",
        "Mantener a las personas que te apoyan cerca no es una debilidad en esta carta: es el método."
      ]
    },
    "scarcityCaution": "El elemento más débil en este momento es {scarcest}. Lo que ese elemento rige es donde actúas más lentamente.",
    "elementBalance": "Por fuerza, {strongest} lidera con {strongestPct}% y {scarcest} sigue con {scarcestPct}%. Tu mes de nacimiento se encuentra en {season}, lo que empuja ese elemento una vez más: la misma cantidad lleva una fuerza diferente dependiendo de si la temporada lo respalda. Lo que necesitas ahora es {favorable}, y las cosas se facilitan donde ese elemento se llena.",
    "todayHeadline": "Hoy se lee como {grade}",
    "todayMessage": "Hoy puntúa {score}, clasificado como {gradeName}. {gradeBody} El pilar del día es {pillar}, y el mayor factor que movió esa puntuación fue “{topFactor}”.",
    "todayAdvice": {
      "HIGH": "Un buen día para retomar el mensaje o la organización que has estado posponiendo, aunque es mejor no intentar terminarlo todo hoy.",
      "MID": "Haz lo que sueles hacer y obtendrás lo que sueles obtener. En lugar de comenzar algo nuevo, avanza un paso en algo que ya tienes.",
      "LOW": "Hoy hay algunos aspectos que van en contra de la carta. Es mejor dedicar tiempo a terminar y revisar que a comenzar."
    },
    "luckyNote": "El elemento de la suerte de hoy es {element}. La gama de {colors}, el lado {direction}, y las horas alrededor de {time} son donde esa energía es más fuerte.",
    "domains": {
      "wealth": "El dinero puntúa {score} hoy. Este valor se mueve con si la energía de hoy alcanza las estrellas de riqueza (財星) — lo que manejas y lo que reúnes.",
      "love": "El afecto puntúa {score} hoy. Este valor se decide por cómo se encuentra la rama de hoy con tu rama del día (日支), el palacio del cónyuge: la armonía lo eleva, un choque lo baja.",
      "career": "El trabajo puntúa {score} hoy. Este valor se mueve con si la energía de hoy alcanza las estrellas de oficial (官星) y de producción (食傷) — lo que asumes y lo que produces.",
      "health": "La salud puntúa {score} hoy. Este valor se decide por cuántas de tus ramas natales chocan hoy y por si el elemento de hoy es uno que necesitas."
    },
    "yearOutlook": "El pilar de este año es {pillar}, llevando {element}. {relation} Esta lectura solo observa cómo el pilar del año se encuentra con lo que necesitas ahora; no desglosa el año mes a mes.",
    "yearRelations": {
      "YONGSIN": "El elemento que necesitas llega directamente este año. Un momento adecuado para sacar lo que habías dejado de lado.",
      "GENERATES": "Este año alimenta el elemento que necesitas, así que la corriente se vuelve más suave: no de inmediato, pero de manera constante.",
      "GISIN": "Este año empuja una vez más en la dirección en la que ya te inclinabas. Es mejor dedicar tiempo a cerrar lo que tienes en mano que a abrir algo nuevo.",
      "CONTROLS": "Algo este año presiona sobre el elemento que necesitas, así que las decisiones llegan más lentamente. Establecer tus propios plazos ayuda.",
      "NEUTRAL": "Este año no choca ni alimenta lo que necesitas. Mantener el terreno que tienes es el mejor intercambio."
    },
    "disclaimer": "Referencia tradicional de myeongri, no una predicción científica ni una afirmación sobre lo que debe suceder."
  },
  "footer": {
    "privacy": "Política de Privacidad",
    "terms": "Términos de Servicio",
    "refund": "Cancelación y Reembolsos",
    "pricing": "Precios",
    "legalEntity": "Negocio",
    "representative": "Representante",
    "businessNumber": "Número de registro.",
    "mailOrderNumber": "Registro de comercio electrónico.",
    "address": "Dirección",
    "customerCenter": "Servicio al cliente",
    "email": "Correo electrónico",
    "privacyOfficer": "Responsable de privacidad",
    "hostingProvider": "Alojamiento",
    "providedBy": "Provided by",
    "effective": "Efectivo",
    "backHome": "Volver a inicio"
  },
  "animals": {
    "rat": "Rata",
    "ox": "Buey",
    "tiger": "Tigre",
    "rabbit": "Conejo",
    "dragon": "Dragón",
    "snake": "Serpiente",
    "horse": "Caballo",
    "goat": "Cabra",
    "monkey": "Mono",
    "rooster": "Gallo",
    "dog": "Perro",
    "pig": "Cerdo"
  },
  "elements": {
    "WOOD": "Madera",
    "FIRE": "Fuego",
    "EARTH": "Tierra",
    "METAL": "Metal",
    "WATER": "Agua"
  }
};
