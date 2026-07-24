import { companyInfo, LEGAL_EFFECTIVE_DATE } from "@/lib/company";
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
            "Los productos detallados del servicio de coincidencia de significados de caracteres chinos son los siguientes: ① Descripción detallada de hasta 5 candidatos y resumen completo de caracteres chinos: ₩2,900 ② Descripción detallada ampliada de hasta 10 candidatos, resumen completo de caracteres chinos y PDF para archivo: ₩4,900 ③ Detalle de hasta 10 candidatos, resumen completo de caracteres chinos, análisis de destino y elementos de los cinco elementos y PDF para archivo: ₩9,900.",
            "En los servicios de conversión de nombres globales, conversión de nombres coreanos y transcripción de pronunciación en coreano, puede ofrecerse un producto que revela todos los candidatos restantes sin publicidad de una sola vez (pago nacional ₩990, pago internacional US$1.99). Antes de activar la función de pago, solo se ofrecerá la visualización con compensación publicitaria.",
            "Como productos digitales para usuarios globales, ④ Informe completo en PDF de nombres en coreano (US$9.99): arte del nombre de la fuente seleccionada, interpretación de significados y referencia de los cinco elementos ⑤ Arte en PDF de conversión de pronunciación en coreano (US$2.99): arte del nombre de la fuente seleccionada y guía de pronunciación ⑥ Paquete de arte de nombres en PDF (US$1.99): un nombre seleccionado proporcionado como arte en diferentes fuentes. Los precios de cada producto y el número de fuentes aplicables se basan en los valores indicados en la pantalla.",
            "Los informes detallados de pago y los resultados de análisis, así como los archivos PDF, se pueden volver a visualizar y descargar durante 24 horas después de completar el pago, y se eliminarán automáticamente después de que expire el período de retención.",
            "Los productos físicos como sellos de nombres se ofrecen a precios y condiciones por producto, como ₩39,000 en Corea y US$34.99 (incluido el costo de envío internacional). Todos los productos de pago mostrarán en pantalla el contenido del producto, precio, método de entrega y condiciones de reembolso antes del pago.",
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
            "Consultas sobre el servicio: platforest.inc@gmail.com",
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
          title: "5. Transferencia de datos personales al extranjero",
          paragraphs: [
            "La empresa transfiere (subcontrata) datos personales al extranjero como se indica a continuación para proporcionar el servicio. La transferencia se realiza a través de un método de transmisión por red de telecomunicaciones.",
            "① OpenAI, L.L.C. (Estados Unidos) — Elementos transferidos: nombre, fecha de nacimiento, hora de nacimiento, género, país, idioma, etc. — Propósito de la transferencia: análisis de nombres, pronunciación y significado basado en AI — Período de retención y uso: durante el período de prestación del servicio (los datos ingresados no se utilizan para el aprendizaje del modelo según la política de OpenAI y se eliminan después de un máximo de 30 días por motivos de monitoreo de abusos).",
            "② Supabase, Inc. (Estados Unidos) — Elementos transferidos: información sobre el estado de pedidos y pagos, correo electrónico del miembro, entradas y resultados de informes de pago (24 horas después del pago), nombre del solicitante, contacto y dirección de envío al realizar un pedido de mercancías — Propósito de la transferencia: base de datos, autenticación y almacenamiento — Período de retención y uso: durante el período de prestación del servicio o hasta el período de retención de cada elemento.",
            "③ Vercel, Inc. (Estados Unidos) — Elementos transferidos: información de acceso y solicitud enviada durante el uso del servicio — Propósito de la transferencia: alojamiento de aplicaciones — Período de retención y uso: durante el período de prestación del servicio.",
            "Los usuarios pueden rechazar el consentimiento para la transferencia de datos personales al extranjero, pero dado que dicho procesamiento es esencial para la prestación del servicio, el rechazo puede limitar el uso del servicio.",
          ],
        },
        {
          title: "6. Derechos del usuario",
          paragraphs: [
            "Los usuarios pueden solicitar la revisión, corrección, eliminación, suspensión del procesamiento y la revocación del consentimiento de sus datos personales. Las solicitudes se reciben a través del correo electrónico del centro de atención al cliente y se procesan después de la verificación de identidad.",
          ],
        },
        {
          title: "7. Responsable de la protección de datos personales",
          paragraphs: [
            "Responsable: 곽은하",
            "Correo electrónico: platforest.inc@gmail.com",
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
          title: "2. Informe Detallado de Hanja (₩2,900·₩4,900·₩9,900)",
          paragraphs: [
            "Se puede cancelar antes de que comience la generación del análisis detallado por IA después del pago. Una vez que se complete la generación del análisis y esté disponible para su visualización o descarga, el reembolso por simple cambio de opinión puede estar restringido.",
            "En caso de errores en el contenido, fallos del sistema que resulten en la falla de generación, o discrepancias en el monto del pago, se procesará un reembolso o reemisión. Si la descarga se ha cerrado debido al transcurso del período de retención (24 horas después del pago), no se considerará motivo de reembolso.",
          ],
        },
        {
          title: "3. Publicación Masiva de Candidatos (₩990 en Corea · US$1.99 en el extranjero)",
          paragraphs: [
            "La publicación masiva de candidatos para el servicio de conversión de nombres global, conversión de nombres coreanos y transcripción fonética en hangul es contenido digital que se proporciona inmediatamente después del pago. Se puede cancelar antes de que comience la visualización de los candidatos, y después de la visualización, el reembolso por simple cambio de opinión puede estar restringido.",
            "En caso de que los candidatos no se publiquen correctamente debido a un error del sistema, se procesará un reembolso o reemisión.",
          ],
        },
        {
          title: "4. Producto Digital PDF Global (US$9.99·US$2.99·US$1.99)",
          paragraphs: [
            "El informe integral de nombres en hangul (US$9.99), el arte de conversión de pronunciación en hangul (US$2.99) y el paquete de arte de nombres (US$1.99) son contenidos digitales que se generan después del pago. Se puede cancelar antes de que comience la generación del PDF, y una vez que se complete la generación y esté disponible para su descarga, el reembolso por simple cambio de opinión puede estar restringido.",
            "En caso de falla en la generación, errores en el contenido o discrepancias en el monto del pago, se procesará un reembolso o reemisión. Si la descarga se ha cerrado debido al transcurso del período de retención (24 horas después del pago), no se considerará motivo de reembolso.",
          ],
        },
        {
          title: "5. Productos Personalizados (Sellos de Nombre, etc.)",
          paragraphs: [
            "Los artículos personalizados como sellos de nombre (₩39,000 en Corea · US$34.99 en el extranjero, incluyendo el costo de envío internacional) se pueden cancelar hasta antes de que comience la producción. Después de que comience la producción, dado que el texto grabado se confirma como personalizado, el reembolso por simple cambio de opinión puede estar restringido, y los errores tipográficos, daños, errores de producción o problemas de envío se manejarán de manera adecuada mediante intercambio, re-producción o reembolso tras la verificación.",
          ],
        },
        {
          title: "5. Desbloqueo por Publicidad",
          paragraphs: [
            "Los beneficios por ver anuncios no son productos de pago. En caso de que no se otorguen recompensas debido a errores en la red publicitaria, se manejará mediante un nuevo intento dentro del servicio o consulta con el servicio de atención al cliente.",
          ],
        },
        {
          title: "6. Consultas",
          paragraphs: [
            "Consultas sobre reembolsos: platforest.inc@gmail.com",
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
          title: "Análisis Básico (Gratis)",
          paragraphs: [
            "El análisis básico de cuatro servicios: coincidencia de significados de caracteres chinos, conversión de nombres globales, conversión de nombres coreanos y transcripción fonética en hangul, se ofrece de forma gratuita a los no miembros, y puede estar sujeto a un límite de uso diario.",
          ],
        },
        {
          title: "Uso con Recompensa Publicitaria",
          paragraphs: [
            "Desbloquear candidatos después de ver anuncios es un beneficio publicitario que se ofrece sin pago adicional. Por cada anuncio visto, se desbloquea un candidato. La disponibilidad puede variar según el inventario de anuncios, el país, el dispositivo o las políticas del proveedor de anuncios.",
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
          title: "Divulgación Total de Candidatos",
          paragraphs: [
            "Divulgación de todos los candidatos restantes en los servicios de conversión de nombres globales, conversión de nombres coreanos y transcripción fonética en hangul, sin anuncios, de una sola vez: pago nacional ₩990, pago internacional US$1.99 (función de pago en preparación)",
          ],
        },
        {
          title: "Producto Digital PDF Global",
          paragraphs: [
            "Informe completo en PDF de nombres en hangul (arte de nombres recomendados, interpretación de significados y referencia de cinco elementos): US$9.99",
            "Arte en PDF de conversión de pronunciación en hangul (arte de nombres en fuente seleccionada y guía de pronunciación): US$2.99",
            "Paquete de arte de nombres en PDF (arte de un nombre seleccionado en diferentes fuentes): US$1.99",
            "Los precios y el número de fuentes aplicables se rigen por los valores indicados en la pantalla, y el PDF se puede volver a descargar durante 24 horas después del pago, y luego se eliminará automáticamente. (función de pago en preparación)",
          ],
        },
        {
          title: "Productos de Merchandising de Nombres en Hangul",
          paragraphs: [
            "Sello de nombre: ₩39,000 en el país · US$34.99 en el extranjero (incluido el costo de envío internacional). Otros productos físicos tendrán precios, costos de envío y plazos de producción indicados por separado.",
          ],
        },
        {
          title: "Información Antes del Pago Formal",
          paragraphs: [
            "Una vez que se confirmen las condiciones de revisión de PG, el registro de comercio electrónico y las condiciones de asociación de producción, se volverán a indicar el monto real del pago, el costo de envío, el plazo de producción y las condiciones de reembolso en la pantalla del producto.",
          ],
        },
      ],
    },
  },
};

export default content;
