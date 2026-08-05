import type { LegalLocaleDocuments } from "@/lib/legal-locales/types";

// ko 원본에서 자동 생성된 번역이다(scripts/translate-legal.mjs). 손으로 고쳐도 되지만,
// 다시 생성하면 덮어쓴다 — 문구를 바꿀 일이 있으면 ko를 먼저 고치고 전체를 다시 만들 것.
// 사업자 정보와 가격은 플레이스홀더로 남아 있고 실제 값은 getLegalDocument가 넣는다.

const d0 = {
  "title": "Política de Tratamiento de Datos Personales",
  "intro": "Saju-Link no almacena información necesaria para la interpretación del saju (사주). Esta política explica qué información se recibe, qué no se deja y qué se registra automáticamente.",
  "sections": [
    {
      "heading": "1. Información que no se almacena",
      "paragraphs": [
        "La fecha de nacimiento, hora de nacimiento, lugar de nacimiento, género y nombre proporcionados para la interpretación del saju no se **almacenan en ningún lugar.** Se utilizan únicamente en la memoria del servidor durante el procesamiento de la solicitud y desaparecen con la respuesta.",
        "No se registran en la base de datos ni se dejan en archivos separados. Dado que no hay registro de membresía, los valores ingresados no se vinculan a ninguna persona específica."
      ]
    },
    {
      "heading": "2. Información contenida en el enlace de resultados",
      "paragraphs": [
        "La dirección de la pantalla de resultados incluye los valores ingresados codificados. Sin embargo, este valor se encuentra después del # en la dirección, y según los estándares web, el contenido después del # no se envía al servidor por el navegador. Por lo tanto, incluso si se abre el enlace de resultados, solo queda la ruta de la dirección en el registro de acceso del servidor.",
        "Si se envía el enlace de resultados a otra persona, esa persona también podrá ver los mismos resultados. Dado que el enlace en sí contiene los valores ingresados, la decisión de compartirlo queda a criterio del usuario."
      ]
    },
    {
      "heading": "3. Información recopilada automáticamente",
      "paragraphs": [
        "No se recopila información para identificar a los usuarios del servicio. Sin embargo, se registran automáticamente los registros mínimos necesarios para la operación del servicio por parte del proveedor de infraestructura."
      ],
      "bullets": [
        "Dirección IP de acceso, fecha y hora de acceso, tipo de navegador y otros registros generales de acceso al servidor",
        "Información del país — se utiliza únicamente para determinar automáticamente el idioma de la pantalla y no se almacena"
      ]
    },
    {
      "heading": "4. Cookies y publicidad",
      "paragraphs": [
        "El servicio en sí no utiliza cookies para rastrear a los usuarios.",
        "Actualmente, no se publican anuncios en este servicio. Si en el futuro se publican anuncios, el proveedor de anuncios (por ejemplo, Google) puede utilizar cookies para la publicación de anuncios. En ese caso, se modificará esta cláusula para aclarar qué ha cambiado antes de comenzar."
      ]
    },
    {
      "heading": "5. Información almacenada al realizar un pago",
      "paragraphs": [
        "Actualmente no se venden productos de pago, por lo que no hay información almacenada relacionada con pagos.",
        "Cuando se inicie la venta, se almacenarán los siguientes elementos para el procesamiento de pagos y la conservación de registros de transacciones según la legislación. **En ese momento, tampoco se almacenarán los valores ingresados para la interpretación del saju ni se recibirán datos que identifiquen al usuario, como nombre, contacto o dirección.**"
      ],
      "bullets": [
        "Número de pedido e identificador de pago",
        "Monto del pago, moneda y estado del pago (no pagado, pagado, cancelado)",
        "Clasificación del producto, estado de procesamiento, número de descargas del documento, fecha y hora del pedido",
        "Idioma de la pantalla en el momento del pedido y clasificación de la región de pago (nacional, internacional)",
        "Período de conservación — De acuerdo con el Artículo 6 de la Ley de Protección al Consumidor en el Comercio Electrónico, los registros de pago y suministro de bienes se conservarán durante 5 años, y los registros de quejas o disputas de los consumidores se conservarán durante 3 años antes de ser destruidos."
      ]
    },
    {
      "heading": "6. Provisión a terceros y subcontratación",
      "paragraphs": [
        "No hay datos personales almacenados, por lo que no se proporciona información personal a terceros.",
        "Se utiliza la infraestructura de alojamiento de {hostingProvider} para la operación del servicio, y durante este proceso, los registros de acceso mencionados en el punto 3 se procesan de acuerdo con la política de dicho proveedor.",
        "Cuando se inicie la venta de productos de pago, los pagos nacionales se delegarán a Toss Payments, y los pagos internacionales a PortOne (PayPal). La información de los métodos de pago, como números de tarjeta y cuentas, será procesada directamente por estos proveedores, y el servicio no la recibirá."
      ]
    },
    {
      "heading": "7. Derechos del usuario",
      "paragraphs": [
        "No hay datos personales almacenados, por lo que no hay a quién solicitar la revisión, corrección o eliminación.",
        "Los usuarios pueden eliminar todos los rastros de entrada simplemente borrando el enlace de resultados en la barra de direcciones del navegador.",
        "Si hay preguntas relacionadas con el uso del servicio, comuníquese a través de los siguientes contactos."
      ]
    },
    {
      "heading": "8. Datos personales de menores",
      "paragraphs": [
        "Este servicio no está dirigido a niños menores de 14 años y no recopila datos personales de ellos."
      ]
    },
    {
      "heading": "9. Responsable de la protección de datos personales",
      "paragraphs": [
        "Responsable de protección: {privacyOfficer}",
        "Contacto: {email} / {customerCenter}"
      ]
    },
    {
      "heading": "10. Cambios en la política",
      "paragraphs": [
        "Si se realizan cambios en esta política, se publicará la fecha de entrada en vigor y los cambios en esta página. Si hay cambios reales en el contenido del procesamiento, como la publicación de anuncios o el inicio de la venta de productos de pago, se notificará primero sobre el hecho del cambio."
      ]
    }
  ],
  "effectiveLabel": "Fecha de entrada en vigor"
};

const d1 = {
  "title": "Términos de Uso",
  "intro": "Estos términos establecen las condiciones de uso del servicio Saju-Link (en adelante, “el Servicio”). Al utilizar el Servicio, se considera que acepta estos términos.",
  "sections": [
    {
      "heading": "1. Naturaleza del Servicio",
      "paragraphs": [
        "El Servicio muestra un material de referencia basado en las reglas de la astrología tradicional (saju) aplicadas a la fecha de nacimiento y la hora de nacimiento ingresadas, incluyendo el natal chart de saju, el balance de los cinco elementos, la fuerza del día, así como la interacción entre el día y el natal chart.",
        "Los puntajes y las interpretaciones presentadas son **material de referencia desde la perspectiva de la astrología tradicional y no son predicciones científicas ni afirmaciones sobre el futuro, la salud o la riqueza de una persona.** Un puntaje bajo no significa que el día sea malo, y un puntaje alto no garantiza nada.",
        "**Las frases de interpretación de los informes de pago son escritas por inteligencia artificial generativa.** Sin embargo, todos los valores, como puntajes, ramas y fuerzas de los cinco elementos, son calculados por el motor de reglas del Servicio, y la IA no cambia ni crea esos valores. En caso de que no se pueda generar una interpretación, se utilizará una descripción basada en los valores calculados por el motor en el mismo lugar, y la extensión del documento y los elementos incluidos son los mismos que se indican en la sección 3 a continuación."
      ]
    },
    {
      "heading": "2. Tarifas de Uso",
      "paragraphs": [
        "Actualmente, el Servicio se ofrece de forma gratuita y no se requiere registro.",
        "Cuando se inicie la venta de productos de pago (dos tipos de informes PDF), se aplicarán las condiciones de la sección 3 a continuación. Se notificará nuevamente estos términos antes del inicio de la venta."
      ]
    },
    {
      "heading": "3. Productos de Pago y Reembolsos",
      "paragraphs": [
        "Los productos de pago que se venden son **dos tipos de informes PDF**. Ambos generan un documento a partir de los resultados en pantalla, incluyendo contenido que no está disponible en la pantalla.",
        "**Informe de lectura de vida de saju PDF (A4 5 páginas)** — Incluye las tendencias y fortalezas innatas, puntos a tener en cuenta, los ocho caracteres del natal chart de saju, la fuerza de los cinco elementos y la fuerza del día, la energía necesaria en este momento, la fortuna del día y las cuatro áreas de la vida (riqueza, amor, profesión, salud). Pago nacional {priceDomestic} (IVA incluido), pago internacional {priceGlobal}.",
        "**Informe premium de lectura de vida PDF (A4 7 páginas)** — Se añaden dos páginas al informe de vida de 5 páginas. Incluye los diez dioses de los cuatro pilares y el análisis de la posición de las energías en cada estación, la fortuna del año, ajustes por ítems del puntaje del día, y detalles de corrección de la hora solar. Pago nacional {priceAffinityDomestic} (IVA incluido), pago internacional {priceAffinityGlobal}.",
        "Los pagos nacionales se pueden realizar a través de Toss Payments utilizando tarjetas de crédito, débito y pagos simplificados (Toss Pay, Kakao Pay, Naver Pay, Payco, etc.), y los pagos internacionales se realizan a través de PayPal mediante PortOne. El monto final se basa en el monto que se muestra en la pantalla de pago.",
        "**El Servicio no almacena los valores ingresados por el usuario ni los archivos PDF generados.** Una vez que se aprueba el pago, se genera el documento y se envía de inmediato, sin dejar nada en el servidor. Por lo tanto, el archivo descargado debe ser guardado por el usuario.",
        "En caso de que la descarga se interrumpa o se pierda el archivo, se puede volver a descargar hasta **5 veces** con el mismo pedido. Sin embargo, si se pierde el valor ingresado fuera de la pantalla de resultados, no se podrá volver a crear, por lo que se recomienda guardar el archivo inmediatamente después del pago."
      ],
      "bullets": [
        "**Antes de que comience la descarga después del pago,** se puede cancelar en cualquier momento y recibir un reembolso completo.",
        "**Después de que se complete la descarga,** se limita la cancelación por arrepentimiento. Se trata de contenido digital que se proporciona inmediatamente y cuya restauración no es posible, lo que se considera una razón para la limitación de cancelación según el artículo 17, párrafo 2 de la Ley de Protección al Consumidor en el Comercio Electrónico.",
        "**En caso de que no se genere el documento debido a un error del sistema, el archivo no se abra, o el monto del pago sea diferente al del pedido,** se procesará como reemisión o reembolso completo.",
        "**Las quejas sobre el contenido de los resultados** no son motivo de reembolso. La interpretación del saju es material de referencia desde la perspectiva de la astrología tradicional y se informa su naturaleza antes del pago (ver sección 1 anterior).",
        "Las solicitudes de reemisión después de haber utilizado las 5 veces permitidas no son motivo de reembolso.",
        "**Si un menor realiza un pago sin el consentimiento de su representante legal,** el menor o su representante legal puede cancelar dicho pago. Si se informa a través de los contactos a continuación, se procederá con el reembolso."
      ]
    },
    {
      "heading": "4. Sobre los Resultados de los Cálculos",
      "paragraphs": [
        "Todos los puntajes se calculan de acuerdo con reglas públicas, por lo que si se ingresan los mismos valores, siempre se obtendrán los mismos resultados.",
        "Si no se ingresa la hora de nacimiento, se calculará excluyendo el pilar de la hora, por lo que los resultados pueden variar. Cuanto más preciso sea el lugar de nacimiento seleccionado, más exacto será el cálculo del pilar de la hora.",
        "El cálculo del calendario de cuatro pilares utiliza una biblioteca de cálculo pública, y los resultados pueden diferir según el manejo de los términos solares y horarios."
      ]
    },
    {
      "heading": "5. Responsabilidad del Usuario",
      "paragraphs": [
        "El usuario puede ingresar la fecha de nacimiento de otra persona, pero no debe utilizar los resultados de manera que perjudiquen a esa persona.",
        "No utilice los resultados del Servicio como base para decisiones que afecten los derechos de otros, como matrimonio, divorcio, contratación o transacciones. El Servicio no está diseñado para tales propósitos."
      ]
    },
    {
      "heading": "6. Conductas Prohibidas",
      "paragraphs": [
        "Las siguientes conductas no están permitidas."
      ],
      "bullets": [
        "Enviar solicitudes excesivas mediante herramientas automatizadas que interfieran con la operación del Servicio.",
        "Presentar los resultados del Servicio como hechos o como resultados de evaluaciones de expertos.",
        "Duplicar o modificar el Servicio para ofrecer un servicio idéntico."
      ]
    },
    {
      "heading": "7. Exención de Responsabilidad",
      "paragraphs": [
        "El Servicio solo proporciona material de referencia y no se hace responsable de las decisiones tomadas por el usuario basadas en los resultados y sus consecuencias.",
        "No se asume responsabilidad por daños causados por interrupciones del Servicio debido a razones fuera de control, como desastres naturales o fallos de proveedores de infraestructura."
      ]
    },
    {
      "heading": "8. Derechos de Propiedad Intelectual",
      "paragraphs": [
        "Los derechos sobre la pantalla del Servicio, el texto y la implementación de las reglas de cálculo pertenecen al operador. El usuario puede guardar o compartir los resultados para fines personales."
      ]
    },
    {
      "heading": "9. Cambios en los Términos y Ley Aplicable",
      "paragraphs": [
        "En caso de cambios en los términos, se publicarán en esta página junto con la fecha de entrada en vigor.",
        "Estos términos se rigen por la ley de la República de Corea, y cualquier disputa relacionada con el uso del Servicio se regirá por los procedimientos establecidos en las leyes pertinentes."
      ]
    }
  ],
  "effectiveLabel": "Fecha de entrada en vigor"
};

const d2 = {
  "title": "Política de reembolso y cancelación",
  "intro": "Esta es la norma de cancelación y reembolso para el informe de lectura de vida saju (사주). Se ha recopilado información similar a la cláusula 3.",
  "sections": [
    {
      "heading": "1. Naturaleza del producto",
      "paragraphs": [
        "Los productos que se venden son **informe de lectura de vida saju PDF (A4 5 páginas)** y **informe premium de lectura de vida PDF (A4 7 páginas)**, ambos son contenido digital que se genera y se envía inmediatamente una vez que se aprueba el pago.",
        "**El servicio no almacena ni los datos ingresados por el usuario ni el archivo PDF generado.** Por lo tanto, el archivo descargado debe ser guardado por el usuario."
      ],
      "bullets": []
    },
    {
      "heading": "2. Derecho de desistimiento",
      "paragraphs": [
        "Se rige por los criterios establecidos en la Ley de Comercio Electrónico."
      ],
      "bullets": [
        "**Antes de que comience la descarga,** se puede cancelar en cualquier momento y recibir un reembolso completo.",
        "**Después de que se complete la descarga,** se limita el derecho de desistimiento por simple cambio de opinión. Es contenido digital que se proporciona inmediatamente tras el pago y no puede ser restaurado, lo que se considera una razón de restricción según el artículo 17, párrafo 2 de la Ley de Protección al Consumidor en el Comercio Electrónico. Se informa de esto en la pantalla de pago y se obtiene el consentimiento."
      ]
    },
    {
      "heading": "3. Casos de reembolso completo",
      "paragraphs": [
        "En los siguientes casos, se confirmará la razón y se procesará un reembolso completo o una reemisión."
      ],
      "bullets": [
        "Si no se generó el documento debido a un error del sistema.",
        "Si el archivo descargado no se puede abrir.",
        "Si el monto del pago es diferente al de la orden.",
        "**Si un menor realizó el pago sin el consentimiento del representante legal** — El propio menor o su representante legal pueden solicitar la cancelación."
      ]
    },
    {
      "heading": "4. Casos que no son motivo de reembolso",
      "paragraphs": [],
      "bullets": [
        "**Quejas sobre el contenido del resultado.** La interpretación del saju (사주) es un material de referencia desde la perspectiva de la astrología tradicional, y se informa de su naturaleza antes del pago.",
        "Solicitudes de reemisión después de haber utilizado las 5 reemisiones permitidas."
      ]
    },
    {
      "heading": "5. Método de recepción",
      "paragraphs": [
        "Las solicitudes de reembolso o consultas deben enviarse al centro de atención al cliente ({customerCenter}) o por correo electrónico ({email}). Si proporciona el número de pedido, la verificación será más rápida.",
        "Los reembolsos se realizarán a través del método de pago utilizado, y dependiendo de la situación de la compañía de tarjetas o de pago, puede tardar de 3 a 7 días hábiles en reflejarse."
      ]
    }
  ],
  "effectiveLabel": "Fecha de entrada en vigor"
};

const d3 = {
  "title": "Información de precios",
  "intro": "Se informa sobre el alcance de los servicios gratuitos y los precios de los productos de pago.",
  "sections": [
    {
      "heading": "1. Gratuito",
      "paragraphs": [
        "**La interpretación de saju (사주) y la consulta de la fortuna del día son gratuitas.** No se requiere registro.",
        "Puede ver en pantalla los ocho caracteres de su natal chart (원국), el balance de los cinco elementos, la fuerza y debilidad del día, la puntuación y clasificación de la fortuna de hoy, así como las puntuaciones en las cuatro áreas de la vida."
      ]
    },
    {
      "heading": "2. Informe de lectura de vida de saju PDF (de pago)",
      "paragraphs": [
        "Pago nacional {priceDomestic} (incluido IVA) · Pago internacional {priceGlobal}",
        "Le proporcionamos un documento PDF de **5 páginas A4** con los resultados en pantalla. Incluye la portada y el resumen, las tendencias y fortalezas innatas, los puntos a tener en cuenta, el natal chart (원국) y el balance de los cinco elementos, la fortuna de hoy y las cuatro áreas de la vida en un solo documento.",
        "Puede volver a descargarlo **hasta 5 veces** con el mismo pedido. Sin embargo, si se pierde la entrada fuera de la pantalla de resultados, no podrá volver a generarlo, así que guarde el archivo inmediatamente después del pago."
      ]
    },
    {
      "heading": "3. Informe premium de lectura de vida de saju PDF (de pago)",
      "paragraphs": [
        "Pago nacional {priceAffinityDomestic} (incluido IVA) · Pago internacional {priceAffinityGlobal}",
        "Es un documento de **7 páginas A4** que añade **dos páginas más** al informe de lectura de vida. Lo que se añade son los diez dioses de los cuatro pilares y el análisis de la fortuna de este año, así como los ajustes de puntuación de hoy y los detalles de la corrección de la hora solar. Son números de referencia que no aparecen en pantalla.",
        "Las condiciones de reemisión son las mismas que las del informe de lectura de vida."
      ]
    },
    {
      "heading": "4. Métodos de pago",
      "paragraphs": [
        "**Nacional** — Puede utilizar tarjetas de crédito/débito y pagos simplificados (Toss Payments, KakaoPay, NaverPay, Payco, etc.) a través de Toss Payments.",
        "**Internacional** — Puede pagar a través de PayPal mediante PortOne.",
        "El monto final del pago se basa en la cantidad que se muestra en la pantalla de pago."
      ]
    },
    {
      "heading": "5. Cambios de precio",
      "paragraphs": [
        "Si se realizan cambios en los precios, se publicarán primero en esta página. Los pedidos que ya han sido pagados no se verán afectados por los precios cambiados."
      ]
    }
  ],
  "effectiveLabel": "Fecha de entrada en vigor"
};

const d4 = {
  "title": "Política de Tratamiento de Datos Personales",
  "intro": "Saju-Link no almacena información necesaria para la interpretación de saju (사주). Esta política explica qué información se recibe, qué no se deja y qué se registra automáticamente.",
  "sections": [
    {
      "heading": "1. Información no almacenada",
      "paragraphs": [
        "La fecha de nacimiento, hora de nacimiento, lugar de nacimiento, género y nombre proporcionados para la interpretación de saju **no se almacenan en ningún lugar.** Se utilizan únicamente en la memoria del servidor durante el procesamiento de la solicitud y desaparecen con la respuesta.",
        "No se registran en la base de datos ni se guardan en archivos separados. Dado que no hay registro de membresía, los valores ingresados no se vinculan a ninguna persona específica."
      ]
    },
    {
      "heading": "2. Información contenida en el enlace de resultados",
      "paragraphs": [
        "La dirección de la pantalla de resultados incluye los valores ingresados codificados. Sin embargo, este valor se encuentra después del # en la dirección, y según los estándares web, el contenido después del # no se envía al servidor por el navegador. Por lo tanto, incluso si se abre el enlace de resultados, solo queda el camino de la dirección en el registro de acceso del servidor.",
        "Si se envía el enlace de resultados a otra persona, esa persona también podrá ver los mismos resultados. Dado que el enlace en sí contiene los valores ingresados, la decisión de compartirlo queda a criterio del usuario."
      ]
    },
    {
      "heading": "3. Información recopilada automáticamente",
      "paragraphs": [
        "No se recopila información para identificar a los usuarios del servicio. Sin embargo, se registran automáticamente los registros mínimos necesarios para la operación del servicio por parte del proveedor de infraestructura."
      ],
      "bullets": [
        "Dirección IP de acceso, fecha y hora de acceso, tipo de navegador y otros registros generales de acceso al servidor",
        "Información del país — se utiliza únicamente para determinar automáticamente el idioma de la pantalla y no se almacena"
      ]
    },
    {
      "heading": "4. Cookies y publicidad",
      "paragraphs": [
        "El servicio en sí no utiliza cookies para identificar o rastrear a los usuarios. La información ingresada en la interpretación de saju no se transmite a los anunciantes.",
        "Este servicio muestra anuncios a través de Google AdSense. En este proceso, ocurren las siguientes situaciones."
      ],
      "bullets": [
        "Los proveedores de terceros, incluidos Google, pueden almacenar o leer cookies en el navegador del usuario.",
        "Google utiliza cookies para mostrar anuncios basados en el historial de visitas a este y otros sitios.",
        "Los usuarios pueden desactivar los anuncios personalizados en la configuración de anuncios de Google (google.com/settings/ads). Aunque se desactiven, los anuncios seguirán apareciendo, pero su relevancia para el usuario disminuirá.",
        "Los anuncios personalizados de todos los proveedores de terceros se pueden desactivar de una vez en aboutads.info/choices.",
        "También hay formas de bloquear cookies en la configuración del navegador.",
        "A los usuarios de la Zona Económica Europea, Reino Unido y Suiza se les solicita primero su consentimiento para el uso de cookies publicitarias."
      ]
    },
    {
      "heading": "5. Información almacenada al realizar un pago",
      "paragraphs": [
        "Actualmente no se venden productos de pago, por lo que no hay información almacenada relacionada con pagos.",
        "Cuando se inicie la venta, se almacenarán los siguientes elementos para el procesamiento de pagos y la conservación de registros de transacciones según la legislación. **En ese momento, tampoco se almacenarán los valores ingresados en la interpretación de saju ni se recibirán datos que identifiquen al usuario, como nombre, contacto o dirección.**"
      ],
      "bullets": [
        "Número de pedido e identificador de pago",
        "Monto del pago, moneda y estado del pago (no pagado, pagado, cancelado)",
        "Clasificación del producto, estado de procesamiento, número de descargas del documento, fecha y hora del pedido",
        "Idioma de la pantalla en el momento del pedido y clasificación de la región de pago (nacional o internacional)",
        "Período de conservación — Según el Artículo 6 de la Ley de Protección al Consumidor en el Comercio Electrónico, los registros de pago y suministro de bienes se conservarán durante 5 años, y los registros de quejas o disputas de los consumidores se conservarán durante 3 años antes de ser destruidos."
      ]
    },
    {
      "heading": "6. Provisión a terceros y delegación de procesamiento",
      "paragraphs": [
        "No hay información personal almacenada, por lo que no se proporciona información personal a terceros.",
        "Para la operación del servicio, se utiliza la infraestructura de alojamiento de {hostingProvider}, y en este proceso, los registros de acceso mencionados en el punto 3 se procesan de acuerdo con la política de dicho proveedor.",
        "Cuando se inicie la venta de productos de pago, los pagos nacionales se delegarán a Toss Payments y los pagos internacionales a PortOne (PayPal). La información de los métodos de pago, como números de tarjeta y cuentas, será procesada directamente por estos proveedores en ese momento, y el servicio no la recibirá."
      ]
    },
    {
      "heading": "7. Derechos del usuario",
      "paragraphs": [
        "No hay información personal almacenada, por lo que no hay destinatarios a quienes solicitar acceso, corrección o eliminación.",
        "Los usuarios pueden eliminar todos los rastros de entrada simplemente borrando el enlace de resultados en la barra de direcciones del navegador.",
        "Si hay preguntas relacionadas con el uso del servicio, comuníquese a través de los siguientes contactos."
      ]
    },
    {
      "heading": "8. Información personal de menores",
      "paragraphs": [
        "Este servicio no está dirigido a niños menores de 14 años y no recopila información personal de ellos."
      ]
    },
    {
      "heading": "9. Responsable de la protección de datos personales",
      "paragraphs": [
        "Responsable de la protección: {privacyOfficer}",
        "Contacto: {email} / {customerCenter}"
      ]
    },
    {
      "heading": "10. Cambios en la política",
      "paragraphs": [
        "Si se realizan cambios en esta política, se publicarán la fecha de entrada en vigor y los cambios en esta página. Si hay cambios reales en el contenido del procesamiento, como la publicación de anuncios o el inicio de la venta de productos de pago, se notificará primero sobre el hecho del cambio."
      ]
    }
  ],
  "effectiveLabel": "Fecha de entrada en vigor"
};

const d5 = {
  "title": "Política de Tratamiento de Datos Personales",
  "intro": "Saju-Link no almacena información necesaria para la interpretación de saju (사주). Esta política describe qué información se recibe, qué no se deja y qué se registra automáticamente.",
  "sections": [
    {
      "heading": "1. Información que no se almacena",
      "paragraphs": [
        "La fecha de nacimiento, la hora de nacimiento, el lugar de nacimiento, el género y el nombre proporcionados para la interpretación de saju **no se almacenan en ningún lugar.** Se utilizan únicamente en la memoria del servidor durante el procesamiento de la solicitud y desaparecen con la respuesta.",
        "No se registran en la base de datos ni se guardan en archivos separados. Dado que no hay registro de membresía, los valores ingresados no se vinculan a ninguna persona específica."
      ]
    },
    {
      "heading": "2. Información contenida en el enlace de resultados",
      "paragraphs": [
        "La dirección de la pantalla de resultados incluye los valores ingresados codificados. Sin embargo, este valor se encuentra después del # en la dirección, y según los estándares web, el contenido después del # no se envía al servidor por el navegador. Por lo tanto, incluso si se abre el enlace de resultados, solo queda la ruta de la dirección en el registro de acceso del servidor.",
        "Si se envía el enlace de resultados a otra persona, esa persona también podrá ver los mismos resultados. Dado que el enlace en sí contiene los valores ingresados, la decisión de compartirlo queda a criterio del usuario."
      ]
    },
    {
      "heading": "3. Información recopilada automáticamente",
      "paragraphs": [
        "No se recopila información para identificar a los usuarios del servicio. Sin embargo, se registran automáticamente los registros mínimos necesarios para la operación del servicio por parte del proveedor de infraestructura."
      ],
      "bullets": [
        "Dirección IP de acceso, fecha y hora de acceso, tipo de navegador y otros registros generales de acceso al servidor",
        "Información del país — se utiliza únicamente para determinar automáticamente el idioma de la pantalla y no se almacena"
      ]
    },
    {
      "heading": "4. Cookies y publicidad",
      "paragraphs": [
        "El servicio en sí no utiliza cookies para rastrear a los usuarios.",
        "Actualmente, no se publican anuncios en este servicio. Si en el futuro se publican anuncios, el proveedor de anuncios (por ejemplo, Google) puede utilizar cookies para la publicación de anuncios. En ese caso, se modificará esta cláusula para aclarar qué cambia antes de comenzar."
      ]
    },
    {
      "heading": "5. Información almacenada al realizar un pago",
      "paragraphs": [
        "Al pagar por productos de pago (informe PDF), se almacenan los datos del pedido para el procesamiento del pago y la conservación de registros de transacciones según la legislación.",
        "**Los valores ingresados para la interpretación de saju y el PDF generado no se almacenan, incluso si se realiza el pago.** El principio del párrafo 1 se mantiene sin cambios, independientemente de si se realiza el pago. Los elementos que se almacenan son los siguientes, y no incluyen información que identifique al usuario, como nombre, contacto o dirección."
      ],
      "bullets": [
        "Número de pedido e identificador de pago",
        "Monto del pago, moneda y estado del pago (no pagado, pagado, cancelado)",
        "Clasificación del producto, estado de procesamiento, número de descargas del documento, hora del pedido",
        "Idioma de la pantalla en el momento del pedido y clasificación de la región de pago (nacional o internacional)",
        "Período de conservación — Según el artículo 6 de la Ley de Protección al Consumidor en el Comercio Electrónico, los registros de pago y suministro de bienes se conservarán durante 5 años, y los registros de quejas o disputas de los consumidores se conservarán durante 3 años antes de ser destruidos."
      ]
    },
    {
      "heading": "6. Provisión a terceros y subcontratación",
      "paragraphs": [
        "No se almacenan datos personales que identifiquen a los usuarios, por lo que no se proporciona información personal a terceros. El procesamiento de pagos se subcontrata a los siguientes proveedores.",
        "Se utiliza la infraestructura de alojamiento de {hostingProvider} para la operación del servicio, y durante este proceso, los registros de acceso del párrafo 3 se procesan de acuerdo con la política de dicho proveedor.",
        "Los pagos nacionales son procesados por Toss Payments, y los pagos internacionales son procesados a través de PayPal por PortOne. La información de los métodos de pago, como números de tarjeta y cuentas, es procesada directamente por estos proveedores, y el servicio no la recibe ni la almacena."
      ]
    },
    {
      "heading": "7. Derechos del usuario",
      "paragraphs": [
        "Dado que no se almacenan los valores ingresados para la interpretación de saju, no hay un destinatario para solicitudes de acceso, corrección o eliminación. Los registros de pedidos restantes tras el pago deben conservarse durante el período establecido por la ley, por lo que no se pueden eliminar durante ese tiempo, y después de ese período, se destruirán.",
        "Los usuarios pueden eliminar todos los rastros de entrada simplemente borrando el enlace de resultados en la barra de direcciones del navegador.",
        "Si tiene preguntas relacionadas con el uso del servicio, comuníquese a través de los siguientes contactos."
      ]
    },
    {
      "heading": "8. Información personal de menores",
      "paragraphs": [
        "Este servicio no está dirigido a niños menores de 14 años y no recopila información personal de ellos."
      ]
    },
    {
      "heading": "9. Responsable de la protección de datos personales",
      "paragraphs": [
        "Responsable de protección: {privacyOfficer}",
        "Contacto: {email} / {customerCenter}"
      ]
    },
    {
      "heading": "10. Cambios en la política",
      "paragraphs": [
        "Si se realizan cambios en esta política, se publicará la fecha de entrada en vigor y los cambios en esta página. Si se producen cambios reales en el contenido del procesamiento, como la publicación de anuncios o el inicio de la venta de productos de pago, se informará previamente sobre el hecho del cambio."
      ]
    }
  ],
  "effectiveLabel": "Fecha de entrada en vigor"
};

const d6 = {
  "title": "Términos de Uso",
  "intro": "Este acuerdo establece las condiciones de uso del servicio Saju-Link (en adelante, “el Servicio”). Al utilizar el Servicio, se considera que acepta estos términos.",
  "sections": [
    {
      "heading": "1. Naturaleza del Servicio",
      "paragraphs": [
        "El Servicio muestra como referencia el natal chart (saju) y el balance de los cinco elementos, aplicando las reglas de la astrología tradicional (saju) basadas en la fecha de nacimiento y la hora de nacimiento ingresadas.",
        "Los puntajes y las interpretaciones presentadas son **material de referencia desde la perspectiva de la astrología tradicional, y no constituyen predicciones científicas ni afirmaciones sobre el futuro, la salud o la riqueza de una persona.** Un puntaje bajo no significa que el día sea malo, y un puntaje alto no garantiza nada.",
        "**Las frases de interpretación de los informes de pago son escritas por inteligencia artificial generativa.** Sin embargo, todos los valores como puntajes, ramas celestiales y fuerzas de los cinco elementos son calculados por el motor de reglas del Servicio, y la IA no modifica ni crea esos valores. En caso de que no se pueda generar una interpretación, se utilizará una descripción basada en los valores calculados por el motor, y la cantidad de páginas y los elementos incluidos en el documento son exactamente los que se indican en el apartado 3 a continuación."
      ]
    },
    {
      "heading": "2. Tarifas de Uso",
      "paragraphs": [
        "La interpretación del saju y la consulta de la fortuna del día son gratuitas y no requieren registro de usuario.",
        "Recibir los resultados en un informe PDF es un servicio de pago. Los precios y condiciones se indican en el apartado 3 a continuación y en la pantalla de pago."
      ]
    },
    {
      "heading": "3. Productos de Pago y Reembolsos",
      "paragraphs": [
        "Los productos de pago que se venden son **dos tipos de informes PDF.** Ambos crean un documento a partir de los resultados en pantalla, incluyendo contenido que no aparece en la pantalla.",
        "**Informe de lectura de vida saju PDF (A4 5 páginas)** — Incluye la naturaleza innata, fortalezas y puntos a tener en cuenta, los ocho caracteres del natal chart (saju), las fuerzas de los cinco elementos y la fortaleza del día, la energía necesaria en este momento, la fortuna del día y las cuatro áreas de la vida (riqueza, amor, trabajo, salud). Pago nacional {priceDomestic} (IVA incluido), pago internacional {priceGlobal}.",
        "**Informe premium de lectura de vida PDF (A4 7 páginas)** — Se añaden dos páginas al informe de vida. Incluye los diez dioses de los cuatro pilares y el método de colocación de las energías estacionales, la fortuna del año, ajustes por ítems del puntaje del día, y detalles de corrección de la hora solar. Pago nacional {priceAffinityDomestic} (IVA incluido), pago internacional {priceAffinityGlobal}.",
        "Los pagos nacionales se pueden realizar a través de Toss Payments utilizando tarjetas de crédito, débito y métodos de pago simplificados (Toss Pay, Kakao Pay, Naver Pay, Payco, etc.), y los pagos internacionales se realizan a través de PayPal mediante PortOne. El monto final se basa en el monto que se muestra en la pantalla de pago.",
        "**El Servicio no almacena los datos ingresados por el usuario ni los archivos PDF generados.** Una vez que se aprueba el pago, se genera y se envía el documento en ese momento, sin dejar nada en el servidor. Por lo tanto, el archivo descargado debe ser guardado por el usuario.",
        "En caso de que la descarga se interrumpa o se pierda el archivo, se puede volver a descargar hasta **5 veces** con el mismo pedido. Sin embargo, si se pierde el valor ingresado fuera de la pantalla de resultados, no se podrá volver a crear, por lo que se recomienda guardar el archivo inmediatamente después del pago."
      ],
      "bullets": [
        "**Antes de que comience la descarga tras el pago,** se puede cancelar en cualquier momento y recibir un reembolso completo.",
        "**Una vez completada la descarga,** se limita la cancelación por simple arrepentimiento. Es contenido digital que se proporciona inmediatamente y cuya restauración no es posible, lo que se considera una razón de limitación de cancelación según el artículo 17, párrafo 2 de la Ley de Protección al Consumidor en el Comercio Electrónico.",
        "**Si el documento no se genera debido a un error del sistema, el archivo no se abre, o el monto del pago es diferente al del pedido,** se procesará como reemisión o reembolso completo.",
        "**Las quejas sobre el contenido de los resultados** no constituyen una razón para el reembolso. La interpretación del saju es material de referencia desde la perspectiva de la astrología tradicional y se informa su naturaleza antes del pago (ver apartado 1 anterior).",
        "Las solicitudes de reemisión después de haber utilizado las 5 reemisiones no constituyen una razón para el reembolso.",
        "**Si un menor realiza un pago sin el consentimiento de su representante legal,** el menor o su representante legal pueden cancelar dicho pago. Si se informa a través de los contactos a continuación, se procederá con el reembolso."
      ]
    },
    {
      "heading": "4. Sobre los Resultados de los Cálculos",
      "paragraphs": [
        "Todos los puntajes se calculan de acuerdo con reglas públicas, por lo que si se ingresan los mismos valores, siempre se obtendrán los mismos resultados.",
        "Si no se ingresa la hora de nacimiento, se calculará excluyendo el pilar de la hora (時柱), lo que puede resultar en diferencias en los resultados. Cuanto más preciso sea el lugar de nacimiento seleccionado, más exacto será el cálculo del pilar de la hora.",
        "El cálculo del calendario de cuatro pilares utiliza una biblioteca de cálculo pública, y los resultados pueden diferir de otros calendarios de cuatro pilares según el manejo de los términos solares y las zonas horarias."
      ]
    },
    {
      "heading": "5. Responsabilidad del Usuario",
      "paragraphs": [
        "El usuario puede ingresar la fecha de nacimiento de otra persona, pero no debe utilizar los resultados de manera que perjudiquen a esa persona.",
        "No utilice los resultados del Servicio como base para decisiones que afecten los derechos de otros, como matrimonio, divorcio, contratación o transacciones. El Servicio no fue creado para tales propósitos."
      ]
    },
    {
      "heading": "6. Conductas Prohibidas",
      "paragraphs": [
        "Las siguientes conductas no están permitidas."
      ],
      "bullets": [
        "Enviar solicitudes excesivas mediante herramientas automatizadas que interfieran con la operación del Servicio",
        "Presentar los resultados del Servicio como hechos o como resultados de la evaluación de expertos",
        "Duplicar o modificar el Servicio para ofrecer un servicio idéntico"
      ]
    },
    {
      "heading": "7. Exención de Responsabilidad",
      "paragraphs": [
        "El Servicio solo proporciona material de referencia y no se hace responsable de las decisiones tomadas por el usuario basadas en los resultados y sus consecuencias.",
        "No se asume responsabilidad por daños causados por la interrupción del Servicio debido a razones fuera de control, como desastres naturales o fallos de proveedores de infraestructura."
      ]
    },
    {
      "heading": "8. Derechos de Propiedad Intelectual",
      "paragraphs": [
        "Los derechos sobre la pantalla del Servicio, el texto y la implementación de las reglas de cálculo pertenecen al operador. El usuario puede guardar o compartir los resultados con fines personales."
      ]
    },
    {
      "heading": "9. Cambios en los Términos y Ley Aplicable",
      "paragraphs": [
        "Cualquier cambio en los términos se publicará en esta página junto con la fecha de entrada en vigor.",
        "Estos términos se rigen por la ley de la República de Corea, y cualquier disputa relacionada con el uso del Servicio se regirá por los procedimientos establecidos por las leyes pertinentes."
      ]
    }
  ],
  "effectiveLabel": "Fecha de entrada en vigor"
};

const d7 = {
  "title": "Política de Tratamiento de Datos Personales",
  "intro": "Saju-Link no almacena información necesaria para la interpretación de saju (사주). Esta política explica qué se recibe del servicio, qué no se deja y qué se registra automáticamente.",
  "sections": [
    {
      "heading": "1. Información no almacenada",
      "paragraphs": [
        "La fecha de nacimiento, la hora de nacimiento, el lugar de nacimiento, el género y el nombre proporcionados para la interpretación de saju **no se almacenan en ningún lugar.** Se utilizan únicamente en la memoria del servidor durante el procesamiento de la solicitud y desaparecen con la respuesta.",
        "No se registran en la base de datos ni se guardan en archivos separados. Dado que no hay registro de membresía, los valores ingresados no se vinculan a ninguna persona específica."
      ]
    },
    {
      "heading": "2. Información contenida en el enlace de resultados",
      "paragraphs": [
        "La dirección de la pantalla de resultados incluye los valores ingresados codificados. Sin embargo, este valor se encuentra después del # en la dirección, y según los estándares web, el contenido después del # no se envía al servidor por el navegador. Por lo tanto, aunque se abra el enlace de resultados, solo quedará el camino de la dirección en el registro de acceso del servidor.",
        "Si se envía el enlace de resultados a otra persona, esa persona también podrá ver los mismos resultados. Dado que el enlace en sí contiene los valores ingresados, la decisión de compartirlo queda a criterio del usuario."
      ]
    },
    {
      "heading": "3. Información recopilada automáticamente",
      "paragraphs": [
        "No se recopila información para identificar a los usuarios. Sin embargo, se registran automáticamente los registros mínimos necesarios para la operación del servicio por parte del proveedor de infraestructura."
      ],
      "bullets": [
        "Dirección IP de acceso, fecha y hora de acceso, tipo de navegador y otros registros generales de acceso al servidor",
        "Información del país — se utiliza únicamente para determinar automáticamente el idioma de la pantalla y no se almacena"
      ]
    },
    {
      "heading": "4. Cookies y publicidad",
      "paragraphs": [
        "El servicio en sí no utiliza cookies para identificar o rastrear a los usuarios. La información ingresada para la interpretación de saju no se transmite a los anunciantes.",
        "Este servicio muestra anuncios a través de Google AdSense. En este proceso, ocurren las siguientes acciones."
      ],
      "bullets": [
        "Proveedores externos, incluidos Google, pueden almacenar o leer cookies en el navegador del usuario.",
        "Google utiliza cookies para mostrar anuncios basados en el historial de visitas a este y otros sitios.",
        "Los usuarios pueden desactivar los anuncios personalizados en la configuración de anuncios de Google (google.com/settings/ads). Aunque se desactiven, los anuncios seguirán apareciendo, pero su relevancia para el usuario disminuirá.",
        "Los anuncios personalizados de todos los proveedores externos se pueden desactivar de una vez en aboutads.info/choices.",
        "También hay formas de bloquear cookies en la configuración del navegador.",
        "A los usuarios de la Zona Económica Europea, Reino Unido y Suiza se les solicita primero su consentimiento para el uso de cookies publicitarias."
      ]
    },
    {
      "heading": "5. Información almacenada al realizar un pago",
      "paragraphs": [
        "Al pagar por productos de pago (informe PDF), se almacenan los datos del pedido para el procesamiento del pago y la conservación de registros de transacciones según la legislación.",
        "**Los valores ingresados para la interpretación de saju y el PDF generado no se almacenan, incluso si se realiza el pago.** El principio del párrafo 1 se mantiene sin cambios, independientemente de si se realiza el pago. Los elementos que se almacenan son los siguientes, y no incluyen información que identifique al usuario, como nombre, contacto o dirección."
      ],
      "bullets": [
        "Número de pedido e identificador de pago",
        "Monto del pago, moneda y estado del pago (no pagado, pagado, cancelado)",
        "Clasificación del producto, estado de procesamiento, número de descargas del documento, hora del pedido",
        "Idioma de la pantalla en el momento del pedido y clasificación de la región de pago (nacional o internacional)",
        "Período de conservación — Según el artículo 6 de la Ley de Protección al Consumidor en el Comercio Electrónico, los registros de pago y suministro de bienes se conservarán durante 5 años, y los registros de quejas o disputas de los consumidores se conservarán durante 3 años antes de ser destruidos."
      ]
    },
    {
      "heading": "6. Provisión a terceros y subcontratación del procesamiento",
      "paragraphs": [
        "No se almacenan datos personales que identifiquen a los usuarios, por lo que no hay datos personales proporcionados a terceros. El procesamiento de pagos se subcontrata a los siguientes proveedores.",
        "Se utiliza la infraestructura de alojamiento de {hostingProvider} para la operación del servicio, y en este proceso, los registros de acceso del párrafo 3 se procesan de acuerdo con la política de dicho proveedor.",
        "Los pagos nacionales son procesados por Toss Payments, y los pagos internacionales son procesados a través de PayPal por PortOne. La información de los métodos de pago, como números de tarjeta y cuentas, es procesada directamente por estos proveedores, y el servicio no la recibe ni la almacena."
      ]
    },
    {
      "heading": "7. Derechos del usuario",
      "paragraphs": [
        "Dado que no se almacenan los valores ingresados para la interpretación de saju, no hay a quién solicitar la revisión, corrección o eliminación. Los registros de pedidos restantes tras el pago deben conservarse durante el período establecido por la ley, por lo que no se pueden eliminar durante ese tiempo, y después de que pase el período, se destruirán.",
        "Los usuarios pueden eliminar todos los rastros de entrada simplemente borrando el enlace de resultados en la barra de direcciones del navegador.",
        "Si hay preguntas relacionadas con el uso del servicio, comuníquese a través de los siguientes contactos."
      ]
    },
    {
      "heading": "8. Datos personales de menores",
      "paragraphs": [
        "Este servicio no está dirigido a niños menores de 14 años y no recopila datos personales de ellos."
      ]
    },
    {
      "heading": "9. Responsable de la protección de datos personales",
      "paragraphs": [
        "Responsable de la protección: {privacyOfficer}",
        "Contacto: {email} / {customerCenter}"
      ]
    },
    {
      "heading": "10. Cambios en la política",
      "paragraphs": [
        "Si se realizan cambios en esta política, se publicarán la fecha de entrada en vigor y los cambios en esta página. Si hay cambios reales en el contenido del procesamiento, como el inicio de la publicación de anuncios o la venta de productos de pago, se notificará primero sobre el hecho del cambio."
      ]
    }
  ],
  "effectiveLabel": "Fecha de entrada en vigor"
};

export const es: LegalLocaleDocuments = {
  a0p0: {
    privacy: d0,
    terms: d1,
    refund: d2,
    pricing: d3,
  },
  a1p0: {
    privacy: d4,
    terms: d1,
    refund: d2,
    pricing: d3,
  },
  a0p1: {
    privacy: d5,
    terms: d6,
    refund: d2,
    pricing: d3,
  },
  a1p1: {
    privacy: d7,
    terms: d6,
    refund: d2,
    pricing: d3,
  },
};
