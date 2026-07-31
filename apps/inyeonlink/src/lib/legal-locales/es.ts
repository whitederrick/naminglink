import type { LegalLocaleDocuments } from "@/lib/legal-locales/types";

// ko 원본에서 자동 생성된 번역이다(scripts/translate-legal.mjs). 손으로 고쳐도 되지만,
// 다시 생성하면 덮어쓴다 — 문구를 바꿀 일이 있으면 ko를 먼저 고치고 전체를 다시 만들 것.
// 사업자 정보와 가격은 플레이스홀더로 남아 있고 실제 값은 getLegalDocument가 넣는다.

const d0 = {
  "title": "Política de Tratamiento de Datos Personales",
  "intro": "InyeonLink no almacena información necesaria para el cálculo de compatibilidad. Esta política describe qué información se recibe, qué no se deja y qué se registra automáticamente.",
  "sections": [
    {
      "heading": "1. Información que no se almacena",
      "paragraphs": [
        "Las fechas de nacimiento, horas de nacimiento, lugares de nacimiento, géneros y nombres utilizados para el cálculo de compatibilidad **no se almacenan en ningún lugar.** Se utilizan únicamente en la memoria del servidor durante el procesamiento de la solicitud y desaparecen con la respuesta.",
        "No se registran en la base de datos ni se dejan en archivos separados. Dado que no hay registro de membresía, los valores ingresados no se vinculan a ninguna persona específica."
      ]
    },
    {
      "heading": "2. Información contenida en el enlace de resultados",
      "paragraphs": [
        "La dirección de la pantalla de resultados incluye los valores ingresados codificados. Sin embargo, este valor se encuentra después del # en la dirección, y según los estándares web, el contenido después del # no se envía al servidor por el navegador. Por lo tanto, incluso si se abre el enlace de resultados, solo quedará el camino de la dirección en el registro de acceso del servidor.",
        "Si se envía el enlace de resultados a otra persona, esa persona también podrá ver el mismo resultado. Dado que el enlace en sí contiene los valores ingresados, la decisión de compartirlo queda a criterio del usuario."
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
        "Actualmente, no se venden productos de pago, por lo que no hay información almacenada relacionada con pagos.",
        "Cuando se inicie la venta, se almacenarán los siguientes elementos para el procesamiento de pagos y la conservación de registros de transacciones según la ley. **En ese momento, tampoco se almacenarán los valores ingresados para el cálculo de compatibilidad ni se recibirán datos que identifiquen al usuario, como nombre, contacto o dirección.**"
      ],
      "bullets": [
        "Número de pedido e identificador de pago",
        "Monto del pago, moneda y estado del pago (no pagado, pagado, cancelado)",
        "Clasificación del producto, estado de procesamiento, número de descargas del documento, hora del pedido",
        "Idioma de la pantalla en el momento del pedido y clasificación de la región de pago (nacional, internacional)",
        "Período de conservación — Según el artículo 6 de la Ley de Protección al Consumidor en el Comercio Electrónico, los registros de pago y suministro de bienes se conservarán durante 5 años, y los registros de quejas o disputas de los consumidores se conservarán durante 3 años antes de ser destruidos."
      ]
    },
    {
      "heading": "6. Provisión a terceros y subcontratación del procesamiento",
      "paragraphs": [
        "No hay información personal almacenada, por lo que no se proporciona información personal a terceros.",
        "Se utiliza la infraestructura de alojamiento de {hostingProvider} para la operación del servicio, y en este proceso, los registros de acceso mencionados en el punto 3 se procesan de acuerdo con la política de dicho proveedor.",
        "Cuando se inicie la venta de productos de pago, los pagos nacionales se subcontratarán a Toss Payments, y los pagos internacionales a PortOne (PayPal). La información de los métodos de pago, como números de tarjeta y cuentas, será procesada directamente por estos proveedores, y el servicio no la recibirá."
      ]
    },
    {
      "heading": "7. Derechos del usuario",
      "paragraphs": [
        "No hay información personal almacenada, por lo que no hay a quién solicitar acceso, corrección o eliminación.",
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
        "Responsable de protección: {privacyOfficer}",
        "Contacto: {email} / {customerCenter}"
      ]
    },
    {
      "heading": "10. Cambios en la política",
      "paragraphs": [
        "Si se realizan cambios en esta política, se publicará la fecha de entrada en vigor y los cambios en esta página. Si el contenido del procesamiento cambia realmente, como la publicación de anuncios o el inicio de la venta de productos de pago, se notificará primero el hecho del cambio."
      ]
    }
  ],
  "effectiveLabel": "Fecha de entrada en vigor"
};

const d1 = {
  "title": "Términos de Uso",
  "intro": "Estos términos establecen las condiciones de uso del servicio InyeonLink (en adelante, “el Servicio”). Al utilizar el Servicio, se considera que acepta estos términos.",
  "sections": [
    {
      "heading": "1. Naturaleza del Servicio",
      "paragraphs": [
        "El Servicio muestra, como material de referencia, la relación entre dos personas aplicando las reglas de la tradicional astrología coreana (saju) y el zodiaco coreano (십이지).",
        "La tasa de coincidencia y la interpretación presentadas son **material de referencia desde la perspectiva de la interpretación tradicional y no son predicciones científicas ni afirmaciones sobre la relación.** Un puntaje bajo no significa que la relación sea mala, y un puntaje alto no garantiza la relación."
      ]
    },
    {
      "heading": "2. Tarifas de Uso",
      "paragraphs": [
        "Actualmente, el Servicio se ofrece de forma gratuita y no se requiere registro.",
        "Cuando se inicie la venta de productos de pago (dos tipos de informes PDF), se aplicarán las condiciones del artículo 3 a continuación. Se notificará nuevamente estos términos antes del inicio de la venta."
      ]
    },
    {
      "heading": "3. Productos de Pago y Reembolsos",
      "paragraphs": [
        "Los productos de pago que se venden son **dos tipos de informes PDF**. Ambos generan un documento a partir de los resultados en pantalla, incluyendo contenido que no está en la pantalla.",
        "**Informe de compatibilidad de saju PDF** — 7 páginas. Incluye la dirección de intercambio de energías, una tabla que examina más a fondo cada saju, el lugar donde se encuentran los cuatro pilares, y la base de cálculo. Pago nacional {priceDomestic} (incluido IVA), pago internacional {priceGlobal}.",
        "**Informe de conexión PDF** — 4 páginas. Incluye una tabla de clasificación completa de los diez troncos celestiales y los doce signos del zodiaco que no están en la pantalla. Pago nacional {priceAffinityDomestic} (incluido IVA), pago internacional {priceAffinityGlobal}.",
        "Los pagos nacionales se pueden realizar a través de Toss Payments utilizando tarjetas de crédito/débito y métodos de pago simplificados (Toss Pay, Kakao Pay, Naver Pay, Payco, etc.), y los pagos internacionales se realizan a través de PayPal mediante PortOne. El monto final se basa en el monto que se muestra en la pantalla de pago.",
        "**El Servicio no almacena ni los valores ingresados por el usuario ni los archivos PDF generados.** Una vez que se aprueba el pago, se genera el documento y se envía sin dejar nada en el servidor. Por lo tanto, el archivo descargado debe ser guardado por el usuario.",
        "En caso de que la descarga se interrumpa o se pierda el archivo, se puede volver a descargar hasta **5 veces** con el mismo pedido. Sin embargo, si se pierde el valor ingresado fuera de la pantalla de resultados, no se podrá volver a crear, por lo que se recomienda guardar el archivo inmediatamente después del pago."
      ],
      "bullets": [
        "**Antes de que comience la descarga después del pago,** se puede cancelar en cualquier momento y recibir un reembolso completo.",
        "**Después de que se complete la descarga,** se limita la revocación de la solicitud por simple cambio de opinión. Se trata de contenido digital que se proporciona inmediatamente y cuya restauración es imposible, lo que se considera una razón para la limitación de revocación de solicitudes según el artículo 17, párrafo 2 de la Ley de Protección al Consumidor en el Comercio Electrónico.",
        "**Si el documento no se genera debido a un error del sistema, el archivo no se abre, o el monto del pago es diferente al del pedido,** se procesará como reemisión o reembolso completo.",
        "**Las quejas sobre el contenido de los resultados** no son motivo de reembolso. Los resultados de compatibilidad son material de referencia desde la perspectiva de la interpretación tradicional y su naturaleza se informa antes del pago (ver artículo 1 anterior).",
        "Las solicitudes de reemisión después de haber utilizado las 5 veces permitidas no son motivo de reembolso.",
        "**Si un menor realiza un pago sin el consentimiento de su representante legal,** el menor o su representante legal puede cancelar dicho pago. Si se informa a través de los contactos a continuación, se procederá con el reembolso."
      ]
    },
    {
      "heading": "4. Sobre los Resultados de Cálculo",
      "paragraphs": [
        "Todos los puntajes se calculan de acuerdo con reglas públicas, por lo que si se ingresan los mismos valores, siempre se obtendrá el mismo resultado.",
        "Si no se ingresa la hora de nacimiento, se calculará excluyendo el pilar horario (時柱), por lo que los resultados pueden variar. Cuanto más preciso sea el lugar de nacimiento seleccionado, más exacto será el cálculo del pilar horario.",
        "El cálculo del calendario de cuatro pilares utiliza una biblioteca de cálculo pública, y los resultados pueden diferir de otros calendarios de cuatro pilares según el manejo de los términos solares y las zonas horarias."
      ]
    },
    {
      "heading": "5. Responsabilidad del Usuario",
      "paragraphs": [
        "El usuario puede ingresar la fecha de nacimiento de otra persona, pero no debe utilizar los resultados de manera que perjudiquen a dicha persona.",
        "No utilice los resultados del Servicio como base para decisiones que afecten los derechos de otros, como matrimonio, divorcio, contratación o transacciones. El Servicio no fue creado para tales fines."
      ]
    },
    {
      "heading": "6. Conductas Prohibidas",
      "paragraphs": [
        "Las siguientes conductas no están permitidas."
      ],
      "bullets": [
        "Enviar solicitudes excesivas mediante herramientas automatizadas que interfieran con la operación del Servicio",
        "Presentar los resultados del Servicio como hechos o como resultados de una evaluación profesional",
        "Duplicar o modificar el Servicio para ofrecer un servicio idéntico"
      ]
    },
    {
      "heading": "7. Exención de Responsabilidad",
      "paragraphs": [
        "El Servicio solo proporciona material de referencia y no se hace responsable de las decisiones tomadas por el usuario basadas en los resultados y sus consecuencias.",
        "No se asume responsabilidad por daños causados por la interrupción del Servicio debido a causas fuera de control, como desastres naturales o fallos de proveedores de infraestructura."
      ]
    },
    {
      "heading": "8. Derechos de Propiedad Intelectual",
      "paragraphs": [
        "Los derechos sobre la pantalla del Servicio, el texto y la implementación de las reglas de cálculo pertenecen al operador. El usuario puede guardar o compartir los resultados con fines personales."
      ]
    },
    {
      "heading": "9. Modificación de Términos y Ley Aplicable",
      "paragraphs": [
        "En caso de modificar los términos, se publicarán en esta página junto con la fecha de entrada en vigor.",
        "Estos términos se rigen por la ley de la República de Corea, y cualquier disputa relacionada con el uso del Servicio se regirá por los procedimientos establecidos por las leyes pertinentes."
      ]
    }
  ],
  "effectiveLabel": "Fecha de entrada en vigor"
};

const d2 = {
  "title": "Política de reembolso y cancelación",
  "intro": "Esta es la base para la cancelación y reembolso del informe de compatibilidad PDF. Hemos recopilado información similar a la cláusula 3 de los términos y condiciones.",
  "sections": [
    {
      "heading": "1. Naturaleza del producto",
      "paragraphs": [
        "El producto que se vende es un **informe de compatibilidad PDF** y, una vez que el pago es aprobado, se genera el documento en el acto y se envía de inmediato como contenido digital.",
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
        "**Una vez completada la descarga,** se limita el derecho de desistimiento por simple cambio de opinión. Se trata de un contenido digital que se proporciona inmediatamente tras el pago y cuya restauración no es posible, lo que se considera una razón de limitación según el artículo 17, párrafo 2 de la Ley de Protección al Consumidor en el Comercio Electrónico. Se informa de este hecho en la pantalla de pago y se obtiene el consentimiento."
      ]
    },
    {
      "heading": "3. Casos de reembolso completo",
      "paragraphs": [
        "En los siguientes casos, se procesará un reembolso completo o una reemisión tras verificar la razón."
      ],
      "bullets": [
        "Si no se generó el documento debido a un error del sistema.",
        "Si el archivo descargado no se puede abrir.",
        "Si el monto del pago es diferente al de la orden.",
        "**Si un menor realizó el pago sin el consentimiento de su representante legal** — El propio menor o su representante legal pueden solicitar la cancelación."
      ]
    },
    {
      "heading": "4. Casos que no son motivo de reembolso",
      "paragraphs": [],
      "bullets": [
        "**Quejas sobre el contenido del resultado.** Los resultados de la compatibilidad son materiales de referencia desde la perspectiva de la interpretación tradicional, y se informa de su naturaleza antes del pago.",
        "Solicitudes de reemisión después de haber utilizado las 5 reemisiones permitidas."
      ]
    },
    {
      "heading": "5. Método de recepción",
      "paragraphs": [
        "Las solicitudes de reembolso o consultas deben enviarse al centro de atención al cliente ({customerCenter}) o por correo electrónico ({email}). Si proporciona el número de pedido, la verificación será más rápida.",
        "Los reembolsos se realizarán a través del método de pago utilizado, y dependiendo de la situación de la compañía de tarjetas o del proveedor de pagos, puede tardar de 3 a 7 días hábiles en reflejarse."
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
        "**El cálculo de compatibilidad y la consulta de resultados son gratuitos.** No se requiere registro.",
        "Puede ver en la pantalla la tasa de coincidencia, las puntuaciones por ítem, las cartas natales de las dos personas y la fuerza de los cinco elementos, así como la forma de la relación."
      ]
    },
    {
      "heading": "2. Informe de compatibilidad PDF (de pago)",
      "paragraphs": [
        "Pago nacional {priceDomestic} (incluido IVA) · Pago internacional {priceGlobal}",
        "Le proporcionamos un documento PDF de 7 páginas con los resultados de la pantalla. Contiene información sobre la dirección de intercambio de energías, una tabla que examina más a fondo las cartas natales de cada uno, el lugar donde se encuentran los cuatro pilares y la base de cálculo, así como contenido que no está en la pantalla.",
        "Con el mismo pedido, puede volver a descargar hasta **5 veces**. Sin embargo, si se pierde la entrada de datos al salir de la pantalla de resultados, no podrá volver a crear el informe, por lo que le recomendamos guardar el archivo inmediatamente después del pago."
      ]
    },
    {
      "heading": "3. Informe de conexión PDF (de pago)",
      "paragraphs": [
        "Pago nacional {priceAffinityDomestic} (incluido IVA) · Pago internacional {priceAffinityGlobal}",
        "Le proporcionamos un documento PDF de 4 páginas con los resultados de la pantalla. La pantalla solo muestra las combinaciones que son compatibles, pero el PDF incluye una tabla completa de clasificación de los diez troncos celestiales y los doce signos del zodiaco.",
        "Las condiciones de reemisión son las mismas que las del informe de compatibilidad."
      ]
    },
    {
      "heading": "4. Métodos de pago",
      "paragraphs": [
        "**Nacional** — Puede utilizar tarjetas de crédito/débito y pagos simplificados (Toss Pay, Kakao Pay, Naver Pay, Payco, etc.) a través de Toss Payments.",
        "**Internacional** — Puede pagar a través de PayPal mediante PortOne.",
        "El monto final del pago se basa en el monto que se muestra en la pantalla de pago."
      ]
    },
    {
      "heading": "5. Cambios de precios",
      "paragraphs": [
        "Si se realizan cambios en los precios, se publicarán primero en esta página. Los pedidos que ya han sido pagados no se verán afectados por los precios cambiados."
      ]
    }
  ],
  "effectiveLabel": "Fecha de entrada en vigor"
};

const d4 = {
  "title": "Política de Tratamiento de Datos Personales",
  "intro": "InyeonLink no almacena información necesaria para el cálculo de compatibilidad. Esta política describe qué información se recibe, qué no se deja y qué se registra automáticamente.",
  "sections": [
    {
      "heading": "1. Información que no se almacena",
      "paragraphs": [
        "Las fechas de nacimiento, hora de nacimiento, lugar de nacimiento, género y nombre proporcionados para el cálculo de compatibilidad **no se almacenan en ningún lugar.** Se utilizan únicamente en la memoria del servidor durante el procesamiento de la solicitud y desaparecen con la respuesta.",
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
        "No se recopila información para identificar a los usuarios. Sin embargo, se registran automáticamente los mínimos necesarios para la operación del servicio por parte del proveedor de infraestructura."
      ],
      "bullets": [
        "Dirección IP de acceso, fecha y hora de acceso, tipo de navegador y otros registros generales de acceso al servidor",
        "Información del país — se utiliza únicamente para determinar automáticamente el idioma de la pantalla y no se almacena"
      ]
    },
    {
      "heading": "4. Cookies y publicidad",
      "paragraphs": [
        "El servicio en sí no utiliza cookies para identificar o rastrear a los usuarios. La información ingresada para el cálculo de compatibilidad no se transmite a los anunciantes.",
        "Este servicio publica anuncios a través de Google AdSense. En este proceso, ocurren las siguientes situaciones."
      ],
      "bullets": [
        "Proveedores de terceros, incluidos Google, pueden almacenar o leer cookies en el navegador del usuario.",
        "Google utiliza cookies para mostrar anuncios basados en el historial de visitas a este y otros sitios.",
        "Los usuarios pueden desactivar los anuncios personalizados en la configuración de anuncios de Google (google.com/settings/ads). Aunque se desactiven, los anuncios seguirán apareciendo, pero serán menos relevantes para el usuario.",
        "Los anuncios personalizados de proveedores de terceros se pueden desactivar de una vez en aboutads.info/choices.",
        "También hay formas de bloquear cookies en la configuración del navegador.",
        "A los usuarios del Espacio Económico Europeo, Reino Unido y Suiza se les solicita primero su consentimiento para el uso de cookies publicitarias."
      ]
    },
    {
      "heading": "5. Información almacenada al realizar un pago",
      "paragraphs": [
        "Actualmente no se venden productos de pago, por lo que no hay información almacenada relacionada con pagos.",
        "Cuando se inicie la venta, se almacenarán los siguientes elementos para el procesamiento de pagos y la conservación de registros de transacciones según la ley. **En ese momento, tampoco se almacenarán los valores ingresados para el cálculo de compatibilidad ni se recibirán datos que identifiquen al usuario, como nombre, contacto o dirección.**"
      ],
      "bullets": [
        "Número de pedido e identificador de pago",
        "Monto del pago, moneda y estado del pago (no pagado, pagado, cancelado)",
        "Clasificación del producto, estado del procesamiento, número de descargas del documento, hora del pedido",
        "Idioma de la pantalla en el momento del pedido y clasificación de la región de pago (nacional o internacional)",
        "Período de conservación — Según el Artículo 6 de la Ley de Protección al Consumidor en el Comercio Electrónico, los registros de pago y suministro de bienes se conservarán durante 5 años, y los registros de quejas o disputas de los consumidores se conservarán durante 3 años antes de ser destruidos."
      ]
    },
    {
      "heading": "6. Provisión a terceros y subcontratación",
      "paragraphs": [
        "No hay información personal almacenada, por lo que no se proporciona información personal a terceros.",
        "Para la operación del servicio, se utiliza la infraestructura de alojamiento de {hostingProvider}, y en este proceso, los registros de acceso mencionados en el punto 3 se procesan de acuerdo con la política de dicho proveedor.",
        "Cuando se inicie la venta de productos de pago, los pagos nacionales se delegarán a Toss Payments y los pagos internacionales a PortOne (PayPal). La información de los métodos de pago, como números de tarjeta y cuentas, también será procesada directamente por estos proveedores, y el servicio no la recibirá."
      ]
    },
    {
      "heading": "7. Derechos del usuario",
      "paragraphs": [
        "No hay información personal almacenada, por lo que no hay destinatarios para solicitudes de acceso, corrección o eliminación.",
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
        "Responsable de protección: {privacyOfficer}",
        "Contacto: {email} / {customerCenter}"
      ]
    },
    {
      "heading": "10. Cambios en la política",
      "paragraphs": [
        "Si se realizan cambios en esta política, se publicará la fecha de entrada en vigor y los cambios en esta página. Si hay cambios reales en el contenido del procesamiento, como el inicio de la publicación de anuncios o la venta de productos de pago, se notificará previamente sobre el hecho del cambio."
      ]
    }
  ],
  "effectiveLabel": "Fecha de entrada en vigor"
};

const d5 = {
  "title": "Política de Tratamiento de Datos Personales",
  "intro": "InyeonLink no almacena información necesaria para el cálculo de compatibilidad. Esta política describe qué información se recibe, qué no se deja y qué se registra automáticamente.",
  "sections": [
    {
      "heading": "1. Información que no se almacena",
      "paragraphs": [
        "Las fechas de nacimiento, horas de nacimiento, lugares de nacimiento, géneros y nombres ingresados para el cálculo de compatibilidad **no se almacenan en ningún lugar.** Se utilizan únicamente en la memoria del servidor durante el procesamiento de la solicitud y desaparecen con la respuesta.",
        "No se registran en la base de datos ni se guardan en archivos separados. Dado que no hay registro de membresía, los valores ingresados no se vinculan a ninguna persona específica."
      ]
    },
    {
      "heading": "2. Información contenida en el enlace de resultados",
      "paragraphs": [
        "La dirección de la pantalla de resultados incluye los valores ingresados codificados. Sin embargo, este valor se encuentra después del # en la dirección, y según los estándares web, el contenido después del # no se envía al servidor por el navegador. Por lo tanto, aunque se abra el enlace de resultados, solo quedará el camino de la dirección en el registro de acceso del servidor.",
        "Si se envía el enlace de resultados a otra persona, esa persona también podrá ver los mismos resultados. Dado que el enlace en sí contiene los valores ingresados, la decisión de compartirlo corresponde al usuario."
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
        "El servicio en sí no utiliza cookies para rastrear a los usuarios.",
        "Actualmente, este servicio no muestra anuncios. En caso de que se comiencen a mostrar anuncios en el futuro, el proveedor de anuncios (por ejemplo, Google) podrá utilizar cookies para la publicación de anuncios. En ese momento, se modificará esta cláusula para aclarar qué cambia antes de comenzar."
      ]
    },
    {
      "heading": "5. Información almacenada al realizar un pago",
      "paragraphs": [
        "Al pagar por productos de pago (informe PDF), se almacenan los datos del pedido para el procesamiento del pago y la conservación de registros de transacciones según la ley.",
        "**Los valores ingresados para el cálculo de compatibilidad y el PDF generado no se almacenan, incluso si se realiza el pago.** El principio del punto 1 se mantiene sin cambios, independientemente de si se realiza el pago. Los elementos que se almacenan son los siguientes, y no incluyen información que identifique al usuario, como nombre, contacto o dirección."
      ],
      "bullets": [
        "Número de pedido e identificador de pago",
        "Monto del pago, moneda y estado del pago (no pagado, pagado, cancelado)",
        "Clasificación del producto, estado de procesamiento, número de descargas del documento, fecha y hora del pedido",
        "Idioma de la pantalla en el momento del pedido y clasificación de la región de pago (nacional o internacional)",
        "Período de conservación — Según el artículo 6 de la Ley de Protección al Consumidor en el Comercio Electrónico, los registros de pago y suministro de bienes se conservarán durante 5 años, y los registros de quejas o disputas de los consumidores se conservarán durante 3 años antes de ser destruidos."
      ]
    },
    {
      "heading": "6. Provisión a terceros y subcontratación del procesamiento",
      "paragraphs": [
        "No se almacenan datos personales que identifiquen a los usuarios, por lo que no se proporciona información personal a terceros. El procesamiento de pagos se subcontrata a los siguientes proveedores.",
        "Se utiliza la infraestructura de alojamiento de {hostingProvider} para la operación del servicio, y en este proceso, los registros de acceso del punto 3 se procesan de acuerdo con la política de dicho proveedor.",
        "Los pagos nacionales son procesados por Toss Payments, y los pagos internacionales son procesados a través de PayPal por PortOne. La información de los métodos de pago, como números de tarjeta y cuentas, es procesada directamente por estos proveedores, y el servicio no la recibe ni la almacena."
      ]
    },
    {
      "heading": "7. Derechos del usuario",
      "paragraphs": [
        "Dado que no se almacenan los valores ingresados para el cálculo de compatibilidad, no hay un destinatario para solicitudes de acceso, corrección o eliminación. Los registros de pedidos restantes tras el pago deben conservarse durante el período establecido por la ley, por lo que no se pueden eliminar durante ese tiempo, y se destruirán una vez transcurrido el período.",
        "Los usuarios pueden eliminar todos los rastros de entrada simplemente borrando el enlace de resultados en la barra de direcciones del navegador.",
        "Si hay alguna consulta relacionada con el uso del servicio, comuníquese a través de los siguientes contactos."
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
        "Consulta: {email} / {customerCenter}"
      ]
    },
    {
      "heading": "10. Cambios en la política",
      "paragraphs": [
        "En caso de que se realicen cambios en esta política, se publicará la fecha de entrada en vigor y los cambios en esta página. Si se producen cambios reales en el contenido del procesamiento, como el inicio de la publicación de anuncios o la venta de productos de pago, se notificará primero el hecho del cambio."
      ]
    }
  ],
  "effectiveLabel": "Fecha de entrada en vigor"
};

const d6 = {
  "title": "Términos de Uso",
  "intro": "Estos términos establecen las condiciones de uso del servicio InyeonLink (en adelante, “Servicio”). Al utilizar el servicio, se considera que acepta estos términos.",
  "sections": [
    {
      "heading": "1. Naturaleza del Servicio",
      "paragraphs": [
        "El servicio muestra, como material de referencia, la relación entre dos personas aplicando las reglas de la tradicional astrología coreana (saju) y el zodiaco coreano (십이지).",
        "La tasa de coincidencia y las interpretaciones presentadas son **material de referencia desde la perspectiva de la interpretación tradicional y no son predicciones científicas ni afirmaciones sobre la relación.** Un puntaje bajo no significa que la relación sea mala, y un puntaje alto no garantiza la relación."
      ]
    },
    {
      "heading": "2. Tarifas de Uso",
      "paragraphs": [
        "El cálculo de compatibilidad y la consulta de resultados son gratuitos y no requieren registro.",
        "Recibir los resultados en un informe PDF es un servicio de pago. Los precios y condiciones se indican en el artículo 3 a continuación y en la pantalla de pago."
      ]
    },
    {
      "heading": "3. Productos de Pago y Reembolsos",
      "paragraphs": [
        "Los productos de pago que se venden son **dos tipos de informes PDF.** Ambos generan un documento a partir de los resultados en pantalla, incluyendo información que no aparece en la pantalla.",
        "**Informe de compatibilidad de saju PDF** — 7 páginas. Incluye la dirección de intercambio de energías, una tabla que examina más a fondo cada saju, el lugar donde se encuentran los cuatro pilares y la base de cálculo. Pago nacional {priceDomestic} (IVA incluido), pago internacional {priceGlobal}.",
        "**Informe de la conexión PDF** — 4 páginas. Incluye una tabla de clasificación completa de los diez troncos celestiales y los doce signos del zodiaco que no aparece en la pantalla. Pago nacional {priceAffinityDomestic} (IVA incluido), pago internacional {priceAffinityGlobal}.",
        "Los pagos nacionales se pueden realizar a través de Toss Payments utilizando tarjetas de crédito/débito y métodos de pago simplificados (Toss Pay, Kakao Pay, Naver Pay, Payco, etc.), y los pagos internacionales se realizan a través de PayPal mediante PortOne. El monto final se basa en el monto que se muestra en la pantalla de pago.",
        "**El servicio no almacena los datos ingresados por el usuario ni los archivos PDF generados.** Una vez aprobado el pago, se genera y envía el documento en ese momento, sin dejar nada en el servidor. Por lo tanto, el archivo descargado debe ser guardado por el usuario.",
        "En caso de que la descarga se interrumpa o se pierda el archivo, se puede volver a descargar hasta **5 veces** con el mismo pedido. Sin embargo, si se pierde la entrada fuera de la pantalla de resultados, no se podrá volver a crear, así que guarde el archivo inmediatamente después del pago."
      ],
      "bullets": [
        "**Antes de que comience la descarga tras el pago,** puede cancelar en cualquier momento y recibir un reembolso completo.",
        "**Una vez completada la descarga,** se limita la revocación del contrato por simple cambio de opinión. Se trata de contenido digital que se proporciona inmediatamente y cuya restauración es imposible, lo que se considera una razón de limitación de revocación de acuerdo con el artículo 17, párrafo 2 de la Ley de Protección al Consumidor en el Comercio Electrónico.",
        "**Si el documento no se genera debido a un error del sistema, el archivo no se abre o el monto del pago es diferente al del pedido,** se procesará como reemisión o reembolso completo.",
        "**Las quejas sobre el contenido de los resultados** no son motivo de reembolso. Los resultados de compatibilidad son material de referencia desde la perspectiva de la interpretación tradicional y se informa de su naturaleza antes del pago (ver artículo 1 anterior).",
        "Las solicitudes de reembolso después de haber utilizado las 5 reemisiones no son motivo de reembolso.",
        "**Si un menor realiza un pago sin el consentimiento de su representante legal,** el menor o su representante legal puede cancelar dicho pago. Si nos informa a través de los contactos a continuación, procederemos con el reembolso."
      ]
    },
    {
      "heading": "4. Sobre los Resultados de Cálculo",
      "paragraphs": [
        "Todos los puntajes se calculan de acuerdo con reglas públicas, por lo que si se ingresan los mismos valores, siempre se obtendrá el mismo resultado.",
        "Si no se ingresa la hora de nacimiento, el cálculo se realiza excluyendo el pilar horario (時柱), por lo que los resultados pueden variar. Cuanto más preciso sea el lugar de nacimiento seleccionado, más preciso será el cálculo del pilar horario.",
        "El cálculo del calendario de cuatro pilares utiliza una biblioteca de cálculo pública, y los resultados pueden diferir de otros calendarios de cuatro pilares según el manejo de los términos solares y las zonas horarias."
      ]
    },
    {
      "heading": "5. Responsabilidad del Usuario",
      "paragraphs": [
        "El usuario puede ingresar la fecha de nacimiento de otra persona, pero no debe utilizar los resultados de manera que perjudiquen a dicha persona.",
        "No utilice los resultados del servicio como base para decisiones que afecten los derechos de otros, como matrimonio, divorcio, contratación o transacciones. El servicio no fue creado para tales fines."
      ]
    },
    {
      "heading": "6. Conductas Prohibidas",
      "paragraphs": [
        "Las siguientes conductas no están permitidas."
      ],
      "bullets": [
        "Enviar solicitudes excesivas mediante herramientas automatizadas que interfieran con la operación del servicio",
        "Presentar los resultados del servicio como hechos o como resultados de la evaluación de expertos",
        "Duplicar o modificar el servicio para ofrecer el mismo servicio"
      ]
    },
    {
      "heading": "7. Exención de Responsabilidad",
      "paragraphs": [
        "El servicio solo proporciona material de referencia y no se hace responsable de las decisiones y sus resultados que el usuario tome basándose en los resultados.",
        "No se asume responsabilidad por daños causados por la interrupción del servicio debido a causas fuera de control, como desastres naturales o fallos de proveedores de infraestructura."
      ]
    },
    {
      "heading": "8. Derechos de Propiedad Intelectual",
      "paragraphs": [
        "Los derechos sobre la pantalla del servicio, los textos y la implementación de las reglas de cálculo pertenecen al operador. El usuario puede guardar o compartir los resultados para fines personales."
      ]
    },
    {
      "heading": "9. Cambios en los Términos y Ley Aplicable",
      "paragraphs": [
        "En caso de cambios en los términos, se publicarán en esta página junto con la fecha de entrada en vigor.",
        "Estos términos se rigen por la ley de la República de Corea, y cualquier disputa relacionada con el uso del servicio se regirá por los procedimientos establecidos por las leyes pertinentes."
      ]
    }
  ],
  "effectiveLabel": "Fecha de entrada en vigor"
};

const d7 = {
  "title": "Política de Tratamiento de Datos Personales",
  "intro": "InyeonLink no almacena información necesaria para el cálculo de compatibilidad. Esta política describe qué información se recibe, qué no se deja y qué se registra automáticamente.",
  "sections": [
    {
      "heading": "1. Información que no se almacena",
      "paragraphs": [
        "Las fechas de nacimiento, horas de nacimiento, lugares de nacimiento, géneros y nombres ingresados para el cálculo de compatibilidad **no se almacenan en ningún lugar.** Se utilizan solo en la memoria del servidor durante el procesamiento de la solicitud y desaparecen con la respuesta.",
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
        "El servicio en sí no utiliza cookies para identificar o rastrear a los usuarios. La información ingresada para el cálculo de compatibilidad no se transmite a los anunciantes.",
        "Este servicio publica anuncios a través de Google AdSense. En este proceso, ocurren las siguientes acciones."
      ],
      "bullets": [
        "Proveedores de terceros, incluidos Google, pueden almacenar o leer cookies en el navegador del usuario.",
        "Google utiliza cookies para mostrar anuncios basados en el historial de visitas a este y otros sitios.",
        "Los usuarios pueden desactivar los anuncios personalizados en la configuración de anuncios de Google (google.com/settings/ads). Aunque se desactiven, los anuncios seguirán apareciendo, pero serán menos relevantes para el usuario.",
        "Los anuncios personalizados de todos los proveedores de terceros se pueden desactivar de una vez en aboutads.info/choices.",
        "También hay formas de bloquear cookies en la configuración del navegador.",
        "A los usuarios de la Zona Económica Europea, Reino Unido y Suiza se les solicita primero su consentimiento para el uso de cookies publicitarias."
      ]
    },
    {
      "heading": "5. Información almacenada al realizar un pago",
      "paragraphs": [
        "Al pagar por productos de pago (compatibility report PDF), se almacenan los datos del pedido para el procesamiento del pago y la conservación de registros de transacciones según la ley.",
        "**Los valores ingresados para el cálculo de compatibilidad y el PDF generado no se almacenan, incluso si se realiza el pago.** El principio del párrafo 1 se mantiene sin cambios, independientemente de si se realiza el pago. Los elementos que se almacenan son los siguientes, y no incluyen información que identifique al usuario, como nombre, contacto o dirección."
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
      "heading": "6. Provisión a terceros y delegación de procesamiento",
      "paragraphs": [
        "No se almacenan datos personales que identifiquen a los usuarios, por lo que no se proporciona información personal a terceros. El procesamiento de pagos se delega a los siguientes proveedores.",
        "Se utiliza la infraestructura de alojamiento de {hostingProvider} para la operación del servicio, y en este proceso, los registros de acceso del párrafo 3 se procesan de acuerdo con la política de dicho proveedor.",
        "Los pagos nacionales son procesados por Toss Payments, y los pagos internacionales son procesados a través de PayPal por PortOne. La información de los métodos de pago, como números de tarjeta y cuentas, es procesada directamente por estos proveedores, y el servicio no la recibe ni la almacena."
      ]
    },
    {
      "heading": "7. Derechos del usuario",
      "paragraphs": [
        "Dado que no se almacenan los valores ingresados para el cálculo de compatibilidad, no hay destinatario para solicitar la revisión, corrección o eliminación. Los registros de pedidos restantes tras el pago deben conservarse durante el período establecido por la ley, por lo que no se pueden eliminar durante ese tiempo, y se destruirán una vez transcurrido el período.",
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
        "Responsable de protección: {privacyOfficer}",
        "Contacto: {email} / {customerCenter}"
      ]
    },
    {
      "heading": "10. Cambios en la política",
      "paragraphs": [
        "Si se realizan cambios en esta política, se publicarán la fecha de entrada en vigor y los cambios en esta página. Si hay cambios reales en el contenido del procesamiento, como el inicio de la publicación de anuncios o la venta de productos de pago, se notificará primero el hecho del cambio."
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
