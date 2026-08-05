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
    "privacyTitle": "Nada de lo que introduces se guarda",
    "privacyBody": "Las fechas de nacimiento se usan solo mientras se calcula el resultado y nunca se registran. No hace falta ninguna cuenta. Nada de lo que lleva un enlace de resultado se envía al servidor.",
    "disclaimer": "Este es un análisis tradicional de Saju ofrecido como referencia. No es una predicción científica ni un veredicto sobre el futuro de nadie."
  },
  "form": {
    "title": "Tu fecha de nacimiento",
    "description": "Conocer la hora de nacimiento afina la lectura, pero no es obligatorio.",
    "meLegend": "Sobre ti",
    "nickname": "Cómo llamarle",
    "nicknamePlaceholder": "p. ej. Yo",
    "nicknameHint": "Solo se muestra en la pantalla de resultados. No se usa en el cálculo.",
    "gender": "Género",
    "male": "Hombre",
    "female": "Mujer",
    "genderUnspecified": "Prefiero no decirlo",
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
    "errorInvalidDate": "Comprueba la fecha de nacimiento. Si es lunar, comprueba también si cae en un mes bisiesto.",
    "errorGeneric": "El cálculo ha fallado. Inténtalo de nuevo en un momento."
  },
  "reading": {
    "chartTitle": "Tu carta natal",
    "chartHint": "El saju representa el año, mes, día y hora de nacimiento como dos caracteres cada uno. Todo lo que aparece a continuación se lee a partir de estos ocho caracteres.",
    "pillarYear": "Año",
    "pillarMonth": "Mes",
    "pillarDay": "Día",
    "pillarHour": "Hora",
    "pillarHourUnknown": "Sin hora de nacimiento",
    "dayMasterLabel": "Maestro del día",
    "animalLabel": "Zodiaco",
    "seasonLabel": "Estación de nacimiento",
    "elementsTitle": "Fuerza de los elementos",
    "strongest": "El más fuerte",
    "scarcest": "El más escaso",
    "strengthTitle": "Lo que naciste con",
    "cautionTitle": "A qué prestar atención",
    "bodyStrengthTitle": "Fuerza del maestro del día",
    "favorableLabel": "Lo que necesitas ahora"
  },
  "bodyStrength": {
    "STRONG": {
      "name": "Maestro del día fuerte",
      "body": "Los elementos que sostienen tu maestro del día están llenos. Eso te da impulso propio, pero también se inclina fácilmente hacia un lado: sueles asentarte cuando algo drena ese exceso."
    },
    "BALANCED": {
      "name": "Maestro del día equilibrado",
      "body": "Lo que sostiene tu maestro del día y lo que toma de él están casi igualados. Demasiado parejo para decantarse, así que aquí leemos como necesidad aquello que esté más fino."
    },
    "WEAK": {
      "name": "Maestro del día débil",
      "body": "Los elementos que sostienen tu maestro del día están finos. Tomas bien fuerza de tu entorno, pero te desgastas al resistir en solitario: te creces cuando algo te respalda."
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
      "name": "Perturbador (傷官)",
      "body": "La energía que desestabiliza un marco fijo. Otorga talento y un filo agudo, pero en exceso colisiona con reglas y jerarquías."
    },
    "PYEONJAE": {
      "name": "Fortuna inesperada (偏財)",
      "body": "Energía de riqueza de tipo amplio. Activa y generosa con lo que tiene, trae oportunidades de lugares inesperados."
    },
    "JEONGJAE": {
      "name": "Riqueza estable (正財)",
      "body": "Energía de riqueza de tipo estable, acumulada pieza por pieza. La Saju tradicional también lo lee como la posición del cónyuge para un hombre."
    },
    "PYEONGWAN": {
      "name": "Retador (偏官)",
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
      "name": "Sostén (正印)",
      "body": "La energía que te sostiene y te cría. Te da aprendizaje y algo en qué apoyarte; en exceso, salir por tu cuenta llega tarde."
    }
  },
  "dayMasters": {
    "甲": {
      "name": "Madera Yang (甲)",
      "trait": "Un árbol alto que crece recto. Una vez fijada la dirección no vacila, y prefiere aguantar antes que doblarse."
    },
    "乙": {
      "name": "Madera Yin (乙)",
      "trait": "Una enredadera, hierba flexible. Se dobla con las circunstancias para seguir avanzando, y no se quiebra."
    },
    "丙": {
      "name": "Fuego Yang (丙)",
      "trait": "El sol del mediodía. Los sentimientos se ven a las claras, la sala se ilumina y dar un paso al frente le sale natural."
    },
    "丁": {
      "name": "Fuego Yin (丁)",
      "trait": "Luz de vela. Arde en silencio y por mucho tiempo, y calienta primero a los más cercanos."
    },
    "戊": {
      "name": "Tierra Yang (戊)",
      "trait": "Campo abierto y montañas. Difícil de mover y fácil de tener como apoyo, aunque tarda en cambiar una decisión ya tomada."
    },
    "己": {
      "name": "Tierra Yin (己)",
      "trait": "Tierra de labranza. Acoge lo que le llega y lo hace crecer; cuida más que exhibe."
    },
    "庚": {
      "name": "Metal Yang (庚)",
      "trait": "Hierro sin trabajar. Decidido y tajante, con poca paciencia para lo que queda en suspenso."
    },
    "辛": {
      "name": "Metal Yin (辛)",
      "trait": "Una gema tallada. Gusto de grano fino y listón alto; le cuesta dejar pasar la chapuza."
    },
    "壬": {
      "name": "Agua Yang (壬)",
      "trait": "Río y mar. De mirada amplia, con ojo para hacia dónde van las cosas."
    },
    "癸": {
      "name": "Agua Yin (癸)",
      "trait": "Rocío y lluvia. Se filtra en silencio y lee el ambiente antes que las palabras."
    }
  },
  "dayMasterSigns": {
    "甲": [
      "Dice lo que piensa incluso en un primer encuentro.",
      "Rara vez cambia un plan o una promesa una vez fijados.",
      "Rechaza sin rodeos, lo que puede sonar brusco."
    ],
    "乙": [
      "Esquiva la confrontación y toma otro camino.",
      "Parece blando y, aun así, acaba donde quería llegar.",
      "Tantea el ambiente antes de sumarse a un grupo."
    ],
    "丙": [
      "Habla primero con la gente que acaba de conocer.",
      "Lo que le gusta y lo que no se le nota en la cara.",
      "Acaba en el centro de una reunión sin proponérselo."
    ],
    "丁": [
      "Callado al principio, atento cuando hay confianza.",
      "Prefiere una charla larga con una o dos personas antes que una multitud.",
      "Recuerda un comentario de pasada y lo saca más tarde."
    ],
    "戊": [
      "Habla poco; su voz rara vez sube aunque haya urgencia.",
      "Es quien lo zanja al final mientras los demás aplazan la decisión.",
      "Un no, una vez dicho, sigue siendo no durante mucho tiempo."
    ],
    "己": [
      "Escucha más tiempo del que habla.",
      "Le cuesta negarse, así que el trabajo se le acumula.",
      "Lo que resolvió en silencio solo sale a la luz después."
    ],
    "庚": [
      "Decide rápido y lo dice en el acto.",
      "No suaviza las cosas, lo que puede leerse como frialdad.",
      "Se le nota la inquietud cuando algo se alarga."
    ],
    "辛": [
      "Tiene criterios claros sobre la ropa y las cosas que elige.",
      "No puede dejar pasar un trabajo a medias sin señalarlo.",
      "Escatima los elogios, pero cuando los da van en serio."
    ],
    "壬": [
      "Se mezcla con facilidad con toda clase de gente.",
      "Saca lo que vendrá después antes que lo que tiene delante.",
      "Le incomoda estar atado mucho tiempo a un solo lugar."
    ],
    "癸": [
      "Habla poco, pero ha leído la situación con exactitud.",
      "Es el primero en notar que cambia el ambiente.",
      "Guarda su mundo interior, así que lleva tiempo conocerle."
    ]
  },
  "animalTraits": {
    "rat": "Rápida en darse cuenta y rápida en asegurar lo que importa. La primera en moverse en una crisis.",
    "ox": "Parece lento, pero llega hasta el final. Lo que asume, no lo suelta.",
    "tiger": "Sin miedo y siempre al frente. No puede dejar pasar una injusticia.",
    "rabbit": "Suave y perceptivo. Sabe rodear en lugar de chocar.",
    "dragon": "De corazón grande e ideales altos. Rara vez se conforma con lo corriente.",
    "snake": "Se guarda sus cosas y piensa hondo. Juzga con acierto.",
    "horse": "Alegre e inquieto. Lo que peor lleva es estar encerrado.",
    "goat": "Cálida y considerada. Guarda mucho tiempo las palabras duras.",
    "monkey": "Ingenioso y rápido para adaptarse. La repetición le aburre.",
    "rooster": "Diligente y meticuloso. No puede dejar nada fuera de sitio.",
    "dog": "Leal hasta el final una vez que da su confianza. La traición le duele especialmente.",
    "pig": "Generoso y franco. Confía con facilidad, a veces a un precio."
  },
  "result": {
    "title": "Tu lectura de Saju",
    "recalculate": "Empezar de nuevo",
    "copyLink": "Copiar el enlace del resultado",
    "copied": "Copiado",
    "missingInput": "No se ha podido leer este resultado. Introduce las fechas de nuevo.",
    "partialTime": "No se indicó la hora de nacimiento, así que se dejó fuera el pilar de la hora. Añadirla hace la lectura más precisa.",
    "engineVersion": "Calculado con",
    "disclaimer": "Esta es una lectura de Saju tradicional ofrecida como referencia. No es una predicción científica ni un veredicto sobre tu futuro.",
    "seeToday": "Ver la fortuna de hoy",
    "seeReading": "Ver mi carta natal"
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
    "remaining": "Tu resultado se abre en {seconds} s"
  },
  "reportDetail": {
    "depthTitle": "Una mirada más cercana a tu carta",
    "vitalityTitle": "Lo que impulsa la estación",
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
        "body": "en reposo tras su turno"
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
    "domainsTitle": "Cuatro áreas de la vida",
    "factorsTitle": "De dónde proviene la puntuación de hoy",
    "factorsHint": "La pantalla nombra los factores; aquí cada uno se imprime con los puntos que añadió o eliminó.",
    "deltaColumn": "Puntos",
    "appendixTitle": "Cómo se construyó esta carta",
    "timeCorrectionLabel": "Hora de nacimiento",
    "timeCorrectionApplied": "Corregida a hora solar verdadera y leída como {time}.",
    "timeCorrectionNone": "No se proporcionó hora de nacimiento, por lo que se omitió el pilar de la hora.",
    "timeCorrectionDateShift": "La corrección movió la fecha a {date}, por lo que se utilizó el pilar de ese día.",
    "calendarLabel": "Fecha de la que se extrajo la carta",
    "solarLabel": "Solar",
    "lunarLabel": "Lunar",
    "lunarUnavailable": "Esta fecha no está en la tabla del almanaque, por lo que no se muestra fecha lunar."
  },
  "report": {
    "title": "Guarda tu lectura de vida como un PDF",
    "body": "Convertimos esta lectura en un PDF: tu carta natal, el peso de los cinco elementos, la fuerza de tu 일간 y lo que necesita ahora, y la fortuna de hoy, todo en una página.",
    "buyButton": "Pagar {price} y descargar",
    "preparing": "Aún no disponible",
    "ordering": "Creando tu pedido…",
    "paying": "Procesando el pago…",
    "issuing": "Preparando tu informe…",
    "done": "Descargado. Usa el botón de abajo para descargarlo otra vez.",
    "failed": "El pago o la descarga han fallado. Inténtalo de nuevo en un momento.",
    "retry": "Descargar otra vez",
    "contents": [
      "Tu 일간 y temperamento: un resumen, fortalezas y precauciones",
      "Tu carta natal: los ocho caracteres de los cuatro pilares",
      "El peso de los cinco elementos, el más grueso y el más delgado",
      "La fuerza de tu 일간, y la energía que necesita ahora",
      "La fortuna de hoy y los cuatro dominios (dinero, amor, trabajo, salud)"
    ],
    "consentLabel": "Entiendo que se trata de contenido digital entregado de inmediato tras el pago y que **el desistimiento por simple cambio de opinión queda restringido una vez completada la descarga**.",
    "consentRequired": "Confirma las condiciones de desistimiento antes de pagar.",
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
        "Cualquier dispositivo que abra un PDF. No hace falta instalación ni cuenta."
      ],
      [
        "Plazo de uso",
        "Sin límite. El archivo que descargas es tuyo."
      ],
      [
        "Nueva descarga",
        "Hasta cinco veces con el mismo pedido. No guardamos ninguna copia, por lo que no puede volver a generarse una vez que sales de la pantalla de resultados."
      ],
      [
        "Desistimiento",
        "Reembolso íntegro antes de que empiece la descarga. Una vez completada, el desistimiento por cambio de opinión queda restringido (art. 17.2 de la Ley coreana de comercio electrónico)."
      ],
      [
        "Costes de devolución",
        "Ninguno: es contenido digital, no hay envío."
      ]
    ],
    "refundContact": "Para reembolsos o consultas, ponte en contacto con el centro de atención al cliente o el correo de abajo. Si el documento no pudo generarse, o el importe cobrado difiere del pedido, reembolsamos el total.",
    "pdfLanguageNotice": "El PDF se genera en el mismo idioma que esta pantalla."
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
    "summary": "Un {dayMaster} maestro del día nacido en la energía de {season}. A través de toda la carta, {strongest} corre más denso y {scarcest} corre más delgado. Todo lo que sigue a continuación proviene de esos ocho caracteres: cada número y cada pilar aquí están calculados, no elegidos.",
    "personality": "Tu maestro del día es {dayMaster} — energía de {element} — y esta carta se lee como {strengthName}. Qué lado corre más denso, lo que apoya al maestro del día o lo que se extrae de él, es lo que da forma al grano, y en la vida diaria se manifiesta así.",
    "cautions": {
      "STRONG": [
        "Empujas con tanta fuerza que a menudo solo notas la inclinación después de que ha ocurrido.",
        "Incluso donde hay ayuda disponible, terminas manejándolo solo, lo que hace que el trabajo sea más grande.",
        "Las cosas se estabilizan cuando dejas espacio para lo que extrae el exceso."
      ],
      "BALANCED": [
        "Nada te inclina hacia un lado u otro, así que una decisión pospuesta simplemente permanece pospuesta.",
        "Te adaptas bien a la situación, lo que puede difuminar dónde está tu propia línea.",
        "Dirigirte hacia lo que está más delgado en este momento te da una dirección a seguir."
      ],
      "WEAK": [
        "Sostenerte solo te desgasta más rápido de lo que esperas.",
        "Sin nada detrás de ti, las decisiones se deslizan y el momento pasa.",
        "Mantener cerca a personas que te apoyen no es una debilidad en esta carta — es el método."
      ]
    },
    "scarcityCaution": "El elemento más delgado en este momento es {scarcest}. Lo que ese elemento gobierna es donde actúas más lentamente.",
    "elementBalance": "Por fuerza, {strongest} lidera con {strongestPct}% y {scarcest} queda atrás con {scarcestPct}%. Tu mes de nacimiento se encuentra en {season}, lo que impulsa ese elemento una vez más; la misma cantidad tiene diferente fuerza dependiendo de si la temporada lo respalda. Lo que necesitas ahora es {favorable}, y las cosas se facilitan donde ese elemento se llena.",
    "todayHeadline": "Hoy se lee como {grade}",
    "todayMessage": "Hoy puntúa {score}, clasificado como {gradeName}. {gradeBody} El pilar del día es {pillar}, y el mayor factor que movió esa puntuación fue “{topFactor}”.",
    "todayAdvice": {
      "HIGH": "Un buen día para retomar el mensaje o la organización que has estado posponiendo — aunque es mejor no intentar terminarlo todo hoy.",
      "MID": "Haz lo que sueles hacer y obtendrás lo que sueles obtener. En lugar de comenzar algo nuevo, avanza un paso en algo que ya tienes en mano.",
      "LOW": "Parte de hoy va en contra del gráfico. Es mejor dedicarlo a terminar y revisar que a comenzar."
    },
    "luckyNote": "El elemento de la suerte de hoy es {element}. La gama de {colors}, el lado {direction}, y las horas alrededor de {time} son donde esa energía fluye con más fuerza.",
    "domains": {
      "wealth": "Leído del natal, el dinero llega a {score}. Pesa lo que se gana junto con la fuerza para llevarlo.",
      "love": "Leído del natal, el afecto llega a {score}. Pesa la estrella del cónyuge junto con la forma del asiento en el que se encuentra.",
      "career": "Leído del natal, el trabajo llega a {score}. Pesa lo que asumes junto con lo que ofreces.",
      "health": "Leído del natal, la salud llega a {score}. Pesa el equilibrio con el que naciste junto con lo que choca dentro de él."
    },
    "yearOutlook": "El pilar de este año es {pillar}, llevando {element}. {relation} Esta lectura solo observa cómo el pilar del año se encuentra con lo que necesitas ahora; no descompone el año mes a mes.",
    "yearRelations": {
      "YONGSIN": "El elemento que necesitas llega directamente este año. Un momento adecuado para sacar lo que habías dejado de lado.",
      "GENERATES": "Este año alimenta el elemento que necesitas, así que la corriente se vuelve más suave — no de inmediato, pero de manera constante.",
      "GISIN": "Este año empuja una vez más en la dirección en la que ya te inclinabas. Es mejor dedicar tiempo a cerrar lo que tienes en mano que abrir algo nuevo.",
      "CONTROLS": "Algo este año presiona sobre el elemento que necesitas, así que las decisiones tardan más. Establecer tus propios plazos ayuda.",
      "NEUTRAL": "Este año no choca ni alimenta lo que necesitas. Mantener el terreno que tienes es el mejor trato."
    },
    "disclaimer": "Referencia tradicional de myeongri, no una predicción científica ni una afirmación sobre lo que debe suceder.",
    "tenGodDepth": {
      "BIGYEON": {
        "thick": "El compañero es fuerte. Construyes con tus propias manos en lugar de pedir prestadas, lo que te hace fuerte para llevar una tarea hasta su fin. Pero aceptar ayuda también es una habilidad, y tratarlo como una debilidad te deja cargando cosas solo — y chocando, por las partes, con quien esté a tu lado. Donde el trabajo se comparte, ofrecer tu mano primero resulta ser el camino más rápido.",
        "absent": "El compañero está ausente. Moverte con otros te sienta mejor que mantener tu propio terreno. Dudas mucho donde la decisión es solo tuya, y aceleras una vez que alguien está contigo. Cuando una posición es tuya para mantener, vale la pena practicar el empuje."
      },
      "GEOPJAE": {
        "thick": "La riqueza robada es fuerte. Te mueves primero donde otros dudan. Esa fuerza no se convierte fácilmente en mantener, así que lo que ganas no permanece mucho tiempo en mano. Decidir de antemano a dónde va el dinero no es ahorro en esta carta — es método.",
        "absent": "La riqueza robada está ausente. Rara vez fuerzas algo y evitas los concursos. Pierdes poco, pero llegas tarde cuando algo debe ser empujado con fuerza. Donde las apuestas son reales, establecer tu propio plazo ayuda."
      },
      "SIKSIN": {
        "thick": "El dios de la comida es fuerte. Lo que está dentro sale fácilmente, así que hacer, crecer y alimentar son terrenos cómodos. Te va bien en trabajos que se hacen lentamente y a largo plazo, y los resultados llegan tarde pero de manera constante. Sin embargo, cuando la comodidad se alarga, tiendes a acomodarte en lugar de expandirte.",
        "absent": "El dios de la comida está ausente. El canal de dentro hacia fuera es delgado: el pensamiento está ahí, pero la expresión llega tarde. Esperar hasta que todo esté listo retrasa el inicio. Sacar algo a medio terminar no es una pérdida en esta carta."
      },
      "SANGGWAN": {
        "thick": "El Oficial Herido es fuerte. Ves lo que está fuera de lugar en un marco fijo antes que nadie, y tienes las palabras para nombrarlo. Brillas donde se están creando cosas y colisionas donde se están guardando. Cómo se dice lo correcto importa tanto aquí como el verlo.",
        "absent": "El Oficial Herido está ausente. Buscas el camino a través de un marco en lugar de sacudirlo. Rara vez chocas con las personas, pero dejas pasar cosas donde deberían cambiar, y eso se convierte en frustración. Mejor no posponer la palabra que debe ser dicha."
      },
      "PYEONJAE": {
        "thick": "La Riqueza Indirecta es fuerte. Mantienes una mano en varios lugares y capturas oportunidades amplias, así que las cosas se abren en rincones inesperados. Lo que se extiende también debe ser cuidado, sin embargo, y cuidar te interesa menos, por lo que sigues fallando en reunir lo que abriste. Cerrar uno antes de abrir el siguiente es el orden que necesita esta carta.",
        "absent": "La Riqueza Indirecta está ausente. Tomas lo seguro en terreno familiar en lugar de extenderte ampliamente. Hay menos que te sacuda, y observas las oportunidades más grandes pasar con la misma frecuencia. Ampliar tu alcance un palmo a la vez ayuda."
      },
      "JEONGJAE": {
        "thick": "La Riqueza Directa es fuerte. Cuentas lo que entra y lo que sale, y construyes, así que el terreno bajo ti se fortalece con el tiempo. Alcanzar solo lo seguro te hace llegar tarde a la oportunidad, y la avaricia llevada demasiado lejos hace que tu mano se sienta pesada donde debería abrirse. Decidir de antemano para qué es el dinero ayuda.",
        "absent": "La Riqueza Directa está ausente. El lado de acumulación constante es débil, así que gestionar lo que llega sigue siendo pospuesto. Ganar y mantener son habilidades diferentes; esta carta tiene que aprender la segunda por separado. Las reglas que mueven el dinero sin que tú decidas cada vez te sientan bien."
      },
      "PYEONGWAN": {
        "thick": "El Oficial Indirecto es fuerte. La presión saca tu fuerza, y llevas la responsabilidad que otros encuentran pesada. Sin embargo, cuando la tensión nunca se levanta, se endurece en una sensación de ser perseguido y descansar deja de sentirse como descanso. Establecer un tiempo para detenerse no es pereza en esta carta.",
        "absent": "El Oficial Indirecto está ausente. Poco te presiona, lo que es fácil para la mente, pero el poder para mantenerte erguido en una crisis es débil. Te va mucho mejor cuando se establece una fecha límite o una promesa desde afuera."
      },
      "JEONGGWAN": {
        "thick": "El Oficial Directo es fuerte. Tu posición y las líneas que mantienes son claras, y mantenerlas es de donde proviene tu estabilidad; construyes confianza dentro de los sistemas. Donde las reglas vacilan, eres lento para juzgar, y donde el tablero es tuyo para establecerte, te sientes acotado.",
        "absent": "El Oficial Directo está ausente. Un camino hecho por ti mismo te sienta mejor que un lugar asignado desde afuera. Esa es la libertad, pero el estándar tambalea fácilmente; escribir tus propias reglas como si fueran políticas ayuda."
      },
      "PYEONIN": {
        "thick": "El Recurso Indirecto es fuerte. Te adentras por el camino que otros evitan y construyes una profundidad propia. El aprendizaje y la evaluación son fuertes, pero el pensamiento supera a la mano y puedes estar cansado antes de comenzar. Moverte a medio preparar se ajusta a esta carta.",
        "absent": "El Recurso Indirecto está ausente. Aprendes al chocar con las cosas en lugar de excavar. No eres lento para aprender, pero estudiar solo durante largos períodos no te sienta bien. Preguntar a las personas y aprender en el terreno es más rápido."
      },
      "JEONGIN": {
        "thick": "El Recurso Directo es abundante. Lo que te sostiene es amplio, por lo que el aprendizaje y un lugar donde apoyarte nunca se agotan. Esa estabilidad hace que avanzar tarde, y la preparación se convierte en la razón por la que un inicio se pospone. Mantener un lugar donde lo que recibiste regrese es valioso.",
        "absent": "El Recurso Directo está ausente. Has creado tu propio apoyo, por lo que aprender a estar solo se desarrolló temprano. Pedir ayuda es desconocido, sin embargo, te mantienes solo incluso cuando no es necesario. En esta carta, preguntar tiene un gran valor."
      }
    },
    "natalFactors": {
      "WEALTH_STARS": "Cuánto riqueza (財星) lleva la carta — el grosor de lo que manejas y acumulas.",
      "WEALTH_STRONG_BODY": "El día maestro es fuerte, por lo que hay fuerza para llevar riqueza.",
      "WEALTH_WEAK_BODY": "El día maestro es débil, por lo que es difícil llevar riqueza incluso donde existe.",
      "WEALTH_YONGSIN": "Lo que necesitas ahora es el mismo elemento que las estrellas de riqueza, para que ese terreno sea más fácil.",
      "LOVE_SPOUSE_STAR": "Cuánto de la estrella del cónyuge lleva la carta — riqueza directa para hombres, oficial directo para mujeres.",
      "LOVE_SPOUSE_PALACE": "La estrella del cónyuge se encuentra dentro de tu rama del día, el palacio del cónyuge, por lo que el asiento está ocupado.",
      "LOVE_PALACE_CHUNG": "El palacio del cónyuge choca con otra rama, por lo que ese asiento está inestable.",
      "LOVE_GENDER_UNKNOWN": "No se ingresó género, por lo que la estrella del cónyuge no fue contada. El valor se divide entre las estrellas de riqueza y las de oficial según el género, y no elegimos uno arbitrariamente.",
      "CAREER_OFFICER": "Las estrellas de oficial (正官·偏官) en la carta — el grosor de lo que asumes y mantienes.",
      "CAREER_OUTPUT": "Las estrellas de salida (食神·傷官) en la carta — el grosor de lo que produces y expresas.",
      "CAREER_STRONG_BODY": "El día maestro está completo, por lo que utiliza las estrellas de oficial en lugar de ser presionado por ellas.",
      "HEALTH_BALANCE": "Qué tan equilibrados están los cinco elementos — cuanto más se inclina hacia un lado, más carga recae sobre lo que ese elemento gobierna.",
      "HEALTH_CHUNG": "Cuántas parejas de ramas chocan dentro de la carta.",
      "HEALTH_EXTREME_BODY": "El día maestro se inclina fuertemente hacia un lado, lo que es una carga en sí mismo. Un día maestro equilibrado no pierde nada aquí."
    },
    "yongsinDepth": {
      "STRONG": "Los elementos que apoyan a tu día maestro son abundantes. Eso te da impulso propio, pero se inclina fácilmente hacia un lado, así que lo que necesitas ahora no es más apoyo — es algo que drene el exceso. {favorable} hace ese trabajo. Donde ese elemento llega — al dar, al tomar, al reunir — es donde te sientes cómodo.",
      "BALANCED": "Lo que apoya a tu día maestro y lo que extrae de él están casi equilibrados. Demasiado cerca para decidir de cualquier manera, así que aquí leemos lo que es más delgado como lo que necesitas: {favorable}. Un gráfico que no se inclina se adapta bien, pero difumina su propia línea, así que orientarte hacia el lugar delgado te da una dirección a seguir.",
      "WEAK": "Los elementos que apoyan a tu día maestro son escasos. Tomas prestada fuerza de tu alrededor bien, pero te desgastas al resistir solo, así que lo que necesitas ahora es algo que te respalde y te llene. {favorable} hace ese trabajo. Mantener cosas de apoyo cerca no es una debilidad en este gráfico — es el método."
    }
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
    "email": "Email",
    "privacyOfficer": "Privacidad",
    "hostingProvider": "Hosting",
    "providedBy": "Proporcionado por",
    "effective": "Vigente desde",
    "backHome": "Volver al inicio"
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
