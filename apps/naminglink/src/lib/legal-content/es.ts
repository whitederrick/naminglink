import { companyInfo, romanize, LEGAL_EFFECTIVE_DATE } from "@/lib/company";
import type { LegalLocaleContent } from "./types";

const content: LegalLocaleContent = {
  labels: {
    effectiveDate: "Fecha de entrada en vigor",
    referenceDate: "Fecha de referencia",
    login: "Iniciar sesión",
    close: "Cerrar",
  },
  documents: {
    terms: {
      title: "Términos de servicio",
      description: `Estos términos describen las condiciones de uso y el alcance del servicio ${companyInfo.serviceName}.`,
      effectiveDate: LEGAL_EFFECTIVE_DATE,
      sections: [
        {
          title: "1. Naturaleza del servicio",
          paragraphs: [
            "Naming-Link es un estudio de nombres basado en IA que ofrece los siguientes cuatro servicios: ① Coincidencia de significados de caracteres chinos para nombres en coreano ② Conversión de nombres en coreano a nombres globales ③ Conversión de nombres extranjeros a nombres coreanos ④ Transcripción de nombres globales en coreano según su pronunciación.",
            "Los resultados son materiales de referencia que ayudan en la creación de nombres y su interpretación, y no garantizan la posibilidad de registro oficial en registros de relaciones familiares, pasaportes, visas, marcas comerciales, documentos legales, etc.",
          ],
        },
        {
          title: "2. Uso de miembros y no miembros",
          paragraphs: [
            "El análisis de nombres y la visualización de candidatos con compensación publicitaria están disponibles para no miembros. El registro o inicio de sesión solo se solicitará para funciones que requieren una cuenta, como pedidos de productos y verificación del historial de pedidos.",
          ],
        },
        {
          title: "3. Responsabilidad por resultados de IA y revisión",
          paragraphs: [
            "Los resultados recomendados por IA incluyen referencias lingüísticas, culturales y tradicionales. Los usuarios deben verificar la idoneidad a través de instituciones relevantes, expertos, usuarios locales, revisiones legales y de marcas antes de seleccionar el nombre final.",
          ],
        },
        {
          title: "4. Servicios de pago",
          paragraphs: [
            "Los detalles del servicio de coincidencia de significados de Hanja son los siguientes. ① Hasta 5 candidatos con descripción detallada y resumen de Hanja: ₩2,900 ② Hasta 10 candidatos con descripción detallada ampliada, resumen de Hanja y PDF para guardar: ₩4,900 ③ Hasta 10 candidatos con detalles, resumen de Hanja, análisis de SaJu y los cinco elementos, y PDF para guardar: ₩9,900.",
            "En el servicio de conversión de nombres globales, conversión de nombres coreanos y transcripción de pronunciación en Hangul, se puede ofrecer un producto que revela todos los candidatos restantes sin publicidad de una sola vez (pago nacional ₩990, pago en el extranjero US$1.99). Antes de activar la función de pago, solo se ofrece la visualización compensada por publicidad.",
            "Para usuarios globales, los productos digitales incluyen ④ Informe completo de nombre en Hangul en PDF (US$9.99): arte de nombre en fuente recomendada, interpretación de significados y referencia de SaJu de los cinco elementos ⑤ Arte de conversión de pronunciación en Hangul en PDF (US$2.99): arte de nombre en fuente seleccionada y guía de pronunciación ⑥ Paquete de arte de nombre en PDF (US$1.99): se proporciona arte de un nombre seleccionado en diferentes fuentes. Los precios de cada producto y el número de fuentes aplicables se basan en los valores indicados en la pantalla.",
            "Los informes detallados de pago y los resultados de análisis, así como los archivos PDF, se pueden volver a visualizar y descargar durante 24 horas después de completar el pago, y se eliminarán automáticamente después del período de retención.",
            "El precio de pago nacional para productos físicos como sellos de nombre es de ₩39,000 / ₩59,000 / ₩79,000, y se proporciona junto con las condiciones de cada producto.",
            "El precio de pago en el extranjero para los mismos productos físicos es de US$39.90 / US$59.90 / US$79.90 e incluye el costo de envío internacional.",
            "Todos los productos de pago muestran en pantalla el contenido del producto, el precio, el método de entrega y las condiciones de reembolso antes del pago.",
          ],
        },
        {
          title: "5. Servicio de compensación publicitaria",
          paragraphs: [
            "El desbloqueo de candidatos a través de la visualización de anuncios solo se aplicará cuando se haya completado la verificación normal de compensación por parte del proveedor de anuncios. La reproducción automática de anuncios, manipulación de compensaciones y solicitudes repetidas anormales pueden estar restringidas.",
          ],
        },
        {
          title: "6. Conductas prohibidas",
          paragraphs: [
            "Está prohibido ingresar información personal de otros sin autorización, generar nombres con fines de discriminación, odio o suplantación, realizar solicitudes excesivas automatizadas, causar interrupciones en el servicio y mostrar certificaciones oficiales falsas de los resultados.",
          ],
        },
        {
          title: "7. Limitación de responsabilidad",
          paragraphs: [
            "La empresa no será responsable de daños indirectos, pérdida de beneficios esperados, rechazo de registro oficial o disputas de terceros que surjan del uso de los resultados recomendados por IA, a menos que haya dolo o negligencia grave.",
          ],
        },
        {
          title: "8. Consultas",
          paragraphs: [
            `Consultas sobre el servicio: ${companyInfo.email}`,
          ],
        },
      ],
    },
    privacy: {
      title: "Política de privacidad",
      description: `Esta política describe cómo ${companyInfo.serviceName} trata los datos personales.`,
      effectiveDate: LEGAL_EFFECTIVE_DATE,
      sections: [
        {
          title: "1. Elementos de datos personales procesados",
          paragraphs: [
            "Al utilizar el servicio de nombres para no miembros, se procesan temporalmente el nombre, la fecha de nacimiento, la hora de nacimiento, el país, el idioma, el propósito de uso y las pistas de pronunciación durante el proceso de generación de resultados de análisis, pero no se almacenan los contenidos ingresados ni los resultados generados en la base de datos del servicio.",
            "Al registrarse o iniciar sesión, se procesan la dirección de correo electrónico y el historial de inicio de sesión (historial de autenticación).",
            "Al realizar el pago de un informe detallado de pago, se procesan la información de identificación del pedido, el estado del pago y los datos de entrada y resultados de análisis necesarios para la generación del informe durante el período de retención (24 horas después del pago). La información del medio de pago, como el número de tarjeta, es procesada directamente por la agencia de pago y la empresa no la almacena.",
            "Solo al utilizar la función de pedido de mercancías, se pueden procesar adicionalmente el nombre del solicitante, el correo electrónico, el contacto, la dirección de envío, el estado del pago y la información de procesamiento del pedido.",
            "Para la estabilidad del servicio y la prevención de abusos, se pueden procesar como registros operativos mínimos los hashes de visitantes no identificables que cambian diariamente, la hora de la solicitud, el tipo de servicio, el número de usos gratuitos, el tiempo de respuesta de AI, el estado de procesamiento y la exposición a anuncios y eventos de recompensa.",
          ],
        },
        {
          title: "2. Propósito del procesamiento de datos personales",
          paragraphs: [
            "Se procesan datos personales para la recomendación de nombres basada en valores de entrada, análisis de pronunciación, análisis de idiomas y culturas por país, limitación del uso gratuito, verificación de recompensas publicitarias, atención al cliente, procesamiento de pagos y envíos, y prevención de uso indebido.",
          ],
        },
        {
          title: "3. Almacenamiento y eliminación",
          paragraphs: [
            "Las entradas de análisis y los resultados se almacenan en la cuenta solo si el miembro ha seleccionado explícitamente guardar los resultados, y se eliminan si el miembro los elimina o si el propósito de almacenamiento ha finalizado. Las entradas y resultados de no miembros y de miembros que no seleccionaron guardar no se almacenan.",
            "Las entradas, resultados de análisis y archivos PDF del informe detallado de pago se eliminan automáticamente 24 horas después de completar el pago. Los registros de transacciones de pago y pedidos se almacenan por separado de acuerdo con el período de retención legal establecido por las leyes aplicables.",
            "Los detalles de envío del pedido de mercancías (nombre del solicitante, correo electrónico, número de contacto, dirección de envío, solicitudes, texto a grabar en el sello) se destruirán 90 días después de que se complete el envío o se cancele el pedido. La información de entrada de pedidos que se interrumpieron sin llegar a la etapa de pago se destruirá 24 horas después. Incluso después de la destrucción, los registros de transacciones de pago y pedidos se conservarán de acuerdo con el período de retención legal establecido por las leyes pertinentes.",
          ],
        },
        {
          title: "4. Provisión a terceros y subcontratación del procesamiento",
          paragraphs: [
            "Para la operación del servicio, se pueden procesar o subcontratar a Supabase (base de datos y autenticación), Vercel (hosting), OpenAI API (análisis de AI), redes publicitarias, agencias de pago (PortOne) y socios de envío y producción la información necesaria.",
          ],
        },
        {
          title: "5. Cookies y publicidad",
          paragraphs: [
            "El servicio en sí no utiliza cookies para identificar o rastrear a los usuarios. La información ingresada en el análisis de nombres no se transmite a los anunciantes.",
            "Este servicio publica anuncios a través de Google AdSense. En este proceso, proveedores terceros, incluido Google, pueden almacenar o leer cookies en el navegador del usuario, y Google utiliza cookies para mostrar anuncios basados en el historial de visitas a este y otros sitios.",
            "Incluso al utilizar anuncios de recompensa y ofertas, se utilizan las mismas cookies. El servicio solo verifica si el anuncio se ha visto hasta el final y la correspondiente entrega de recompensas, y no recibe información que permita identificar al usuario por parte de los anunciantes.",
            "Los usuarios pueden desactivar los anuncios personalizados en la configuración de anuncios de Google (google.com/settings/ads). Aunque se desactiven, los anuncios seguirán mostrándose, pero su relevancia para el usuario disminuirá. Los anuncios personalizados de todos los proveedores terceros se pueden desactivar de una vez en aboutads.info/choices, y también hay formas de bloquear cookies en la configuración del navegador.",
            "A los usuarios de la Zona Económica Europea, Reino Unido y Suiza se les solicita primero su consentimiento a través de un mensaje de consentimiento de Google antes de utilizar cookies publicitarias.",
          ],
        },
        {
          title: "6. Transferencia de datos personales al extranjero",
          paragraphs: [
            "La empresa transfiere (subcontrata) datos personales al extranjero como se indica a continuación para proporcionar el servicio. La transferencia se realiza a través de un método de transmisión por red de telecomunicaciones.",
            "① OpenAI, L.L.C. (Estados Unidos) — Elementos transferidos: nombre, fecha de nacimiento, hora de nacimiento, género, país, idioma, etc. — Propósito de la transferencia: análisis de nombres, pronunciación y significado basado en AI — Período de retención y uso: durante el período de prestación del servicio (los datos ingresados no se utilizan para el aprendizaje del modelo según la política de OpenAI y se eliminan después de un máximo de 30 días por motivos de monitoreo de abusos).",
            "② Supabase, Inc. (Estados Unidos) — Elementos transferidos: información sobre el estado de pedidos y pagos, correo electrónico del miembro, entradas y resultados de informes de pago (24 horas después del pago), nombre del solicitante, contacto y dirección de envío al realizar un pedido de mercancías — Propósito de la transferencia: base de datos, autenticación y almacenamiento — Período de retención y uso: durante el período de prestación del servicio o hasta el período de retención de cada elemento.",
            "③ Vercel, Inc. (Estados Unidos) — Elementos transferidos: información de acceso y solicitud enviada durante el uso del servicio — Propósito de la transferencia: alojamiento de aplicaciones — Período de retención y uso: durante el período de prestación del servicio.",
            "Los usuarios pueden rechazar el consentimiento para la transferencia de datos personales al extranjero, pero dado que dicho procesamiento es esencial para la prestación del servicio, el rechazo puede limitar el uso del servicio.",
          ],
        },
        {
          title: "7. Derechos del usuario",
          paragraphs: [
            "Los usuarios pueden solicitar la revisión, corrección, eliminación, suspensión del procesamiento y la revocación del consentimiento de sus datos personales. Las solicitudes se reciben a través del correo electrónico del centro de atención al cliente y se procesan después de la verificación de identidad.",
          ],
        },
        {
          title: "8. Responsable de la protección de datos personales",
          paragraphs: [
            `Responsable: ${romanize(companyInfo.privacyOfficer)}`,
            `Correo electrónico: ${companyInfo.email}`,
          ],
        },
      ],
    },
    refund: {
      title: "Política de reembolso y cancelación",
      description:
        "Esta política describe los criterios de cancelación y reembolso de los productos digitales y de los artículos de merchandising de fabricación personalizada.",
      effectiveDate: LEGAL_EFFECTIVE_DATE,
      sections: [
        {
          title: "1. Principios Comunes",
          paragraphs: [
            "Una vez que la función de pago esté activada, el alcance de la posibilidad de reembolso puede variar según el método de entrega de cada producto, el momento de inicio de la producción y la disponibilidad de descarga. Las condiciones específicas se informarán en la pantalla del producto antes del pago.",
          ],
        },
        {
          title: "2. Informe detallado de Hanja",
          paragraphs: [
            "El precio de pago nacional para el informe detallado de Hanja es ₩2,900 / ₩4,900 / ₩9,900.",
            "La cancelación es posible antes de que comience la generación del análisis detallado de IA después del pago. Una vez que se complete la generación del análisis y esté disponible para su visualización o descarga, los reembolsos por cambio de opinión pueden estar limitados.",
            "En caso de errores en el contenido, fallos del sistema que resulten en fallos de generación, o discrepancias en el monto del pago, se procesará un reembolso o reemisión. Si la descarga se ha cerrado debido al transcurso del período de retención (24 horas después del pago), no se considerará motivo de reembolso.",
          ],
        },
        {
          title: "3. Divulgación total de candidatos",
          paragraphs: [
            "El precio de pago nacional para la divulgación total de candidatos es ₩990.",
            "El precio de pago internacional para el mismo producto es US$1.99.",
            "La divulgación de candidatos para el servicio de conversión de nombres globales, conversión de nombres coreanos y transcripción fonética en Hangul es contenido digital que se proporciona inmediatamente después del pago. La cancelación es posible antes de que comience la visualización de los candidatos, y después de la visualización, el reembolso por cambio de opinión puede estar limitado.",
            "En caso de que los candidatos no se divulguen correctamente debido a un error del sistema, se procesará una nueva divulgación o un reembolso.",
          ],
        },
        {
          title: "4. Producto digital PDF global",
          paragraphs: [
            "Informe completo de nombres en Hangul (US$9.99), arte de conversión de pronunciación en Hangul (US$2.99), paquete de arte de nombres (US$1.99) son contenidos digitales que se generan después del pago. Se puede cancelar antes de que comience la generación del PDF, y una vez que se complete la generación y esté disponible para su descarga, los reembolsos por cambio de opinión pueden estar limitados.",
            "En caso de falla en la generación, errores en el contenido o discrepancias en el monto del pago, se procesará un reembolso o reemisión. Si la descarga se ha terminado debido al transcurso del período de retención (24 horas después del pago), no se considerará motivo de reembolso.",
          ],
        },
        {
          title: "5. Productos personalizados (sellos de nombre, etc.)",
          paragraphs: [
            "El precio de pago nacional para productos personalizados como sellos de nombre es ₩39,000 / ₩59,000 / ₩79,000.",
            "El precio de pago internacional para los mismos productos es US$39.90 / US$59.90 / US$79.90 e incluye el costo de envío internacional.",
            "Los productos personalizados pueden ser cancelados hasta antes de iniciar la producción. Una vez iniciada la producción, el texto grabado se confirma de manera personalizada, por lo que los reembolsos por cambio de opinión pueden estar limitados, y los errores tipográficos, daños, errores de producción o problemas de envío se manejarán de manera adecuada mediante intercambio, reprocesamiento o reembolso tras la verificación.",
          ],
        },
        {
          title: "6. Desbloqueo por Publicidad",
          paragraphs: [
            "Los beneficios por ver anuncios no son productos de pago. En caso de que no se otorguen recompensas debido a errores en la red publicitaria, se manejará mediante un nuevo intento dentro del servicio o consulta con el servicio de atención al cliente.",
          ],
        },
        {
          title: "7. Consultas",
          paragraphs: [
            `Consultas sobre reembolsos: ${companyInfo.email}`,
          ],
        },
      ],
    },
    pricing: {
      title: "Guía de precios",
      description:
        "Esta guía describe el alcance de los servicios gratuitos y los precios de los productos de pago.",
      effectiveDate: LEGAL_EFFECTIVE_DATE,
      sections: [
        {
          title: "Análisis básico (gratuito)",
          paragraphs: [
            "El análisis básico de cuatro servicios: coincidencia de significados en Hanja, conversión de nombres globales, conversión de nombres coreanos y transcripción fonética en Hangul, se ofrece de forma gratuita a los no miembros, y puede aplicarse un límite diario de uso. A continuación, solo se muestran los productos que se pueden pagar ahora con sus respectivos montos, y los productos que aún no se han abierto no se muestran.",
          ],
        },
        {
          title: "Uso con Recompensa Publicitaria",
          paragraphs: [
            "El desbloqueo de candidatos después de ver anuncios es un beneficio publicitario que se ofrece sin pago adicional. Se desbloquea un candidato por cada anuncio visto. La disponibilidad puede variar según el inventario de anuncios, el país, el dispositivo o las políticas del proveedor de anuncios. Durante los períodos en los que no se publican anuncios, se hará disponible el candidato correspondiente de forma gratuita sin necesidad de este umbral.",
          ],
        },
        {
          title: "Producto Detallado de Coincidencia de Significados de Caracteres Chinos",
          paragraphs: [
            "Máximo de 5 candidatos con descripción detallada y resumen de caracteres chinos: ₩2,900",
            "Máximo de 10 candidatos con descripción detallada ampliada, resumen de caracteres chinos y PDF para guardar: ₩4,900",
            "Máximo de 10 candidatos con detalles, resumen de caracteres chinos, análisis de destino y elementos de los cinco elementos, y PDF para guardar: ₩9,900",
            "Los informes de pago y el PDF se pueden volver a ver y descargar durante 24 horas después del pago, y luego se eliminarán automáticamente.",
          ],
        },
        {
          title: "Divulgación completa de candidatos",
          paragraphs: [
            "Conversión de nombres global, conversión de nombres coreanos, servicio de transcripción de pronunciación en Hangul, se divulgan todos los candidatos restantes de una vez y sin publicidad (pago nacional): ₩990",
            "Precio de pago en el extranjero para el mismo producto: US$1.99",
          ],
        },
        {
          title: "Producto PDF Digital Global",
          paragraphs: [
            "Informe completo de nombres en Hangul PDF (Arte de nombres de todos los candidatos recomendados, explicación de significados y referencia de los cinco elementos del destino): US$9.99",
            "Arte de conversión de pronunciación en Hangul PDF (Arte de nombres de fuentes seleccionadas y guía de pronunciación): US$2.99",
            "Paquete de arte de nombres PDF (Se proporciona arte de una sola fuente para el nombre seleccionado): US$1.99",
            "Los precios y la cantidad de fuentes aplicables se rigen por los valores indicados en la pantalla, y el PDF se puede volver a descargar durante 24 horas después del pago y se eliminará automáticamente después.",
          ],
        },
        {
          title: "Productos con nombres en Hangul",
          paragraphs: [
            "Sello de nombre (pago nacional): ₩39,000 / ₩59,000 / ₩79,000",
            "Sello de nombre (pago internacional): US$39.90 / US$59.90 / US$79.90 (incluido el costo de envío internacional)",
            "Otros productos físicos tienen precios, costos de envío y plazos de producción que se comunicarán por separado.",
          ],
        },
        {
          title: "Guía de montos",
          paragraphs: [
            "El monto de pago, el costo de envío, el tiempo de producción y las condiciones de reembolso se volverán a notificar en la pantalla del producto antes del pago, y en caso de que el monto de este documento y el monto en la pantalla del producto sean diferentes, el monto en la pantalla del producto será el que prevalezca.",
          ],
        },
      ],
    },
  },
};

export default content;
