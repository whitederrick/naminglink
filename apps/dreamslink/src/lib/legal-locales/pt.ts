import type { LegalLocaleDocuments } from "@/lib/legal-locales/types";

// ko 원본에서 자동 생성된 번역이다(scripts/translate-legal.mjs). 손으로 고쳐도 되지만,
// 다시 생성하면 덮어쓴다 — 문구를 바꿀 일이 있으면 ko를 먼저 고치고 전체를 다시 만들 것.
// 사업자 정보와 가격은 플레이스홀더로 남아 있고 실제 값은 getLegalDocument가 넣는다.

const d0 = {
  "title": "Política de Tratamento de Dados Pessoais",
  "intro": "A Dreams-Link não armazena informações necessárias para a interpretação de sonhos. Esta política descreve o que o serviço coleta, o que não é retido e o que é registrado automaticamente.",
  "sections": [
    {
      "heading": "1. Informações que não são armazenadas",
      "paragraphs": [
        "As histórias de sonhos que você escreve, como se sentiu ao acordar e se você tem sonhos recorrentes **não são armazenadas em lugar algum.** Elas são utilizadas apenas na memória do servidor durante o processamento do pedido e desaparecem com a resposta.",
        "Não são registradas em banco de dados, nem mantidas em arquivos separados. Como não há registro de membros, os dados inseridos não estão vinculados a indivíduos específicos.",
        "As histórias de sonhos são os dados mais pessoais que este serviço recebe. Portanto, não há funcionalidade para revisar resultados anteriores (diário de sonhos) — essa funcionalidade exigiria a retenção contínua do que foi escrito."
      ]
    },
    {
      "heading": "2. Informações contidas no link de resultado",
      "paragraphs": [
        "O endereço da tela de resultados contém os valores de entrada codificados. No entanto, esses valores estão localizados após o # do endereço, e, de acordo com os padrões da web, o conteúdo após o # não é enviado pelo navegador ao servidor. Portanto, mesmo que você abra o link de resultado, apenas o caminho do endereço permanecerá nos registros de acesso do servidor.",
        "Se você enviar o link de resultado para outra pessoa, essa pessoa também poderá ver o mesmo resultado. Como o link em si contém os valores de entrada, a decisão de compartilhar deve ser feita pelo usuário."
      ]
    },
    {
      "heading": "3. Informações coletadas automaticamente",
      "paragraphs": [
        "Não há informações coletadas para identificar os usuários. No entanto, registros mínimos necessários para a operação do serviço são automaticamente mantidos pelo provedor de infraestrutura."
      ],
      "bullets": [
        "Endereço IP de acesso, data e hora de acesso, tipo de navegador e outros registros gerais de acesso ao servidor",
        "Informações do país — usadas apenas para determinar automaticamente o idioma da tela e não são armazenadas"
      ]
    },
    {
      "heading": "4. Cookies e publicidade",
      "paragraphs": [
        "O serviço em si não utiliza cookies para rastrear usuários.",
        "Atualmente, não há anúncios exibidos neste serviço. Se anúncios forem exibidos no futuro, o provedor de anúncios (por exemplo, Google) poderá usar cookies para a exibição de anúncios. Nesse caso, esta cláusula será revisada para esclarecer o que mudará antes de iniciar."
      ]
    },
    {
      "heading": "5. Informações armazenadas durante o pagamento",
      "paragraphs": [
        "Atualmente, não vendemos produtos pagos, portanto, não há informações armazenadas relacionadas a pagamentos.",
        "Quando começarmos a vender, os seguintes itens serão armazenados para processamento de pagamentos e preservação de registros de transações conforme a legislação. **Mesmo assim, os sonhos que você escreveu e os arquivos gerados não serão armazenados**, e não coletamos informações que identifiquem o usuário, como nome, contato ou endereço."
      ],
      "bullets": [
        "Número do pedido e identificador de pagamento",
        "Valor do pagamento, moeda e status do pagamento (não pago, pago, cancelado)",
        "Classificação do produto, status de processamento, número de downloads do documento, data do pedido",
        "Idioma da tela no momento do pedido e classificação da região de pagamento (nacional ou internacional)",
        "Período de preservação — De acordo com o Artigo 6 da Lei de Proteção ao Consumidor em Transações Eletrônicas, os registros de pagamento e fornecimento de bens serão mantidos por 5 anos, e os registros de reclamações ou disputas dos consumidores serão mantidos por 3 anos antes de serem destruídos."
      ]
    },
    {
      "heading": "6. Fornecimento a terceiros e delegação de processamento",
      "paragraphs": [
        "Como não há dados pessoais armazenados, não há dados pessoais fornecidos a terceiros.",
        "Utilizamos a infraestrutura de hospedagem da {hostingProvider} para operar o serviço, e, nesse processo, os registros de acesso mencionados no item 3 são processados de acordo com a política do respectivo provedor.",
        "Quando começarmos a vender produtos pagos, os pagamentos nacionais serão delegados à Toss Payments e os pagamentos internacionais à PortOne (PayPal). Informações de métodos de pagamento, como números de cartão e contas, também serão processadas diretamente por esses provedores, e o serviço não as receberá."
      ]
    },
    {
      "heading": "7. Direitos do usuário",
      "paragraphs": [
        "Como não há dados pessoais armazenados, não há solicitações de acesso, correção ou exclusão a serem feitas.",
        "Os usuários podem eliminar todos os vestígios de entrada simplesmente apagando o link de resultado na barra de endereços do navegador.",
        "Se houver dúvidas relacionadas ao uso do serviço, entre em contato pelos detalhes abaixo."
      ]
    },
    {
      "heading": "8. Dados pessoais de crianças",
      "paragraphs": [
        "Este serviço não é destinado a crianças menores de 14 anos e não coleta dados pessoais de crianças."
      ]
    },
    {
      "heading": "9. Responsável pela proteção de dados pessoais",
      "paragraphs": [
        "Responsável pela proteção: {privacyOfficer}",
        "Contato: {email} / {customerCenter}"
      ]
    },
    {
      "heading": "10. Alterações na política",
      "paragraphs": [
        "Se esta política for alterada, a data de entrada em vigor e as alterações serão publicadas nesta página. Se houver mudanças reais no conteúdo do processamento, como a exibição de anúncios ou o início da venda de produtos pagos, informaremos primeiro sobre a alteração."
      ]
    }
  ],
  "effectiveLabel": "Data de Vigência"
};

const d1 = {
  "title": "Termos de Uso",
  "intro": "Este termo estabelece as condições de uso do Dreams-Link (doravante denominado \"serviço\"). Ao utilizar o serviço, você concorda com este termo.",
  "sections": [
    {
      "heading": "1. Natureza do Serviço",
      "paragraphs": [
        "O serviço busca símbolos de sonhos fornecidos pelo usuário e apresenta os significados associados a esses símbolos como material de referência. O serviço informa que não consegue encontrar símbolos que não estão no dicionário e não inventa significados inexistentes.",
        "Os símbolos e interpretações apresentados são **materiais de referência sob a perspectiva da interpretação tradicional, e não constituem previsões sobre o futuro ou consultoria médica, financeira ou legal.** Um sonho considerado bom não garante que algo acontecerá, e um sonho considerado ruim não implica que algo está programado para ocorrer.",
        "**Os resultados relacionados a sonhos de concepção não determinam a possibilidade de gravidez ou o sexo do feto.** Apenas informamos que símbolos tradicionalmente considerados como sonhos de concepção apareceram, juntamente com seu contexto."
      ]
    },
    {
      "heading": "2. Taxas de Uso",
      "paragraphs": [
        "Atualmente, o serviço é totalmente gratuito e não requer registro.",
        "Quando começarmos a vender produtos pagos (imagem de cartão de sonho, relatório de sonho de concepção em PDF), as condições do item 3 abaixo se aplicarão. Este termo será novamente notificado antes do início das vendas."
      ]
    },
    {
      "heading": "3. Produtos Pagos e Reembolso",
      "paragraphs": [
        "Os produtos pagos que estamos vendendo são **dois tipos**. A interpretação gratuita pode ser utilizada sem pagamento, e os dois produtos abaixo são oferecidos em uma forma que permite que você guarde os resultados.",
        "**Cartão de sonho** — é um arquivo de imagem. Ele é criado para que você possa guardar e compartilhar os símbolos e significados tradicionais do sonho que você teve naquele dia. **Não é um documento (PDF).** Pagamento nacional {priceCardDomestic} (incluindo impostos), pagamento internacional {priceCardGlobal}.",
        "**Relatório de sonho de concepção em PDF** — 4 páginas. Este documento contém o significado tradicional dos símbolos e seu contexto. **Não determina a possibilidade de gravidez** — apenas informamos que símbolos tradicionalmente considerados como sonhos de concepção apareceram no sonho. Pagamento nacional {priceConceptionDomestic} (incluindo impostos), pagamento internacional {priceConceptionGlobal}.",
        "Os pagamentos nacionais podem ser feitos através do Toss Payments usando cartões de crédito, cartões de débito e pagamentos simplificados (Toss Pay, Kakao Pay, Naver Pay, Payco, etc.), e os pagamentos internacionais são feitos via PayPal através do PortOne. O valor final é o que aparece na tela de pagamento.",
        "**O serviço não armazena os dados inseridos pelo usuário nem os arquivos PDF gerados.** Após a aprovação do pagamento, o documento é gerado e enviado imediatamente, e nada é mantido no servidor. Portanto, o arquivo baixado deve ser guardado pelo usuário.",
        "Para o caso de interrupção do download ou perda do arquivo, é possível baixar novamente **até 5 vezes** com o mesmo pedido. No entanto, se os dados de entrada forem perdidos ao sair da tela de resultados, não será possível recriá-los, portanto, salve o arquivo imediatamente após o pagamento."
      ],
      "bullets": [
        "**Antes do início do download após o pagamento, você pode cancelar a qualquer momento e receber um reembolso total.**",
        "**Após a conclusão do download, o cancelamento por arrependimento é restrito.** Este é um conteúdo digital que é fornecido imediatamente e cuja recuperação não é possível, o que se enquadra nas razões de restrição de cancelamento conforme o Artigo 17, Parágrafo 2 da Lei de Proteção ao Consumidor em Transações Eletrônicas.",
        "**Se o documento não for gerado devido a erro do sistema, o arquivo não abrir ou o valor do pagamento for diferente do pedido,** será tratado como reemissão ou reembolso total.",
        "**Reclamações sobre o conteúdo dos resultados** não são motivos para reembolso. Os resultados da interpretação são materiais de referência sob a perspectiva da interpretação tradicional, e essa natureza é informada antes do pagamento (item 1 acima).",
        "Solicitações de reemissão após o uso de todas as 5 vezes não são motivos para reembolso.",
        "**Se um menor realizar um pagamento sem o consentimento do responsável legal,** ele ou o responsável legal podem cancelar esse pagamento. Informe-nos através do contato abaixo para que possamos reembolsá-lo."
      ]
    },
    {
      "heading": "4. Sobre os Resultados da Interpretação",
      "paragraphs": [
        "As regras para encontrar símbolos seguem um dicionário público e um procedimento estabelecido, portanto, se você escrever o mesmo texto, sempre aparecerão os mesmos símbolos.",
        "Quanto mais curto você escrever, menos símbolos serão encontrados. Não conseguimos encontrar símbolos que não estão no dicionário, e nesse caso, deixamos o resultado em branco.",
        "O dicionário de símbolos é uma compilação de literatura de interpretação de sonhos transmitida e tradições orais, e as interpretações podem variar de acordo com a região e a época."
      ]
    },
    {
      "heading": "5. Responsabilidade do Usuário",
      "paragraphs": [
        "O usuário pode escrever sobre os sonhos de outras pessoas, mas não deve usar os resultados de forma a prejudicar terceiros.",
        "Não utilize os resultados do serviço como base para decisões que afetem os direitos ou interesses de pessoas, como gravidez, saúde, investimentos ou contratações. O serviço não foi criado para tais fins."
      ]
    },
    {
      "heading": "6. Atos Proibidos",
      "paragraphs": [
        "As seguintes ações não são permitidas."
      ],
      "bullets": [
        "Enviar solicitações excessivas com ferramentas automatizadas que interfiram na operação do serviço",
        "Apresentar os resultados do serviço como se fossem fatos ou resultados de avaliações de especialistas",
        "Duplicar ou modificar o serviço para oferecer um serviço idêntico"
      ]
    },
    {
      "heading": "7. Isenção de Responsabilidade",
      "paragraphs": [
        "O serviço fornece apenas materiais de referência e não se responsabiliza pelas decisões tomadas pelo usuário com base nos resultados e suas consequências.",
        "Não nos responsabilizamos por danos decorrentes da interrupção do serviço devido a razões fora de nosso controle, como desastres naturais ou falhas de provedores de infraestrutura."
      ]
    },
    {
      "heading": "8. Direitos de Propriedade Intelectual",
      "paragraphs": [
        "Os direitos sobre a tela do serviço, frases e implementações das regras de cálculo pertencem ao operador. O usuário pode salvar ou compartilhar os resultados para fins pessoais."
      ]
    },
    {
      "heading": "9. Alterações nos Termos e Lei Aplicável",
      "paragraphs": [
        "Caso haja alterações nos termos, elas serão publicadas nesta página com a data de entrada em vigor.",
        "Este termo é regido pela legislação da República da Coreia, e disputas relacionadas ao uso do serviço seguirão os procedimentos estabelecidos pela legislação aplicável."
      ]
    }
  ],
  "effectiveLabel": "Data de Vigência"
};

const d2 = {
  "title": "Política de Reembolso e Cancelamento",
  "intro": "Critérios para cancelamento e reembolso de produtos pagos. Reunimos informações semelhantes ao item 3 dos termos e condições.",
  "sections": [
    {
      "heading": "1. Natureza do Produto",
      "paragraphs": [
        "Os produtos vendidos são **cartas de sonho (imagem 1 única)** e **relatório de sonho de concepção (태몽) em PDF**, ambos conteúdos digitais que são gerados e enviados imediatamente após a aprovação do pagamento.",
        "**O serviço não armazena os sonhos que você escreveu ou os arquivos gerados.** Portanto, o arquivo baixado deve ser mantido pelo usuário."
      ],
      "bullets": []
    },
    {
      "heading": "2. Direito de Arrependimento",
      "paragraphs": [
        "Seguirá os critérios estabelecidos pela Lei de Comércio Eletrônico."
      ],
      "bullets": [
        "**Antes do início do download,** você pode cancelar a qualquer momento e receber um reembolso total.",
        "**Após a conclusão do download,** o direito de arrependimento por simples mudança de ideia é restrito. Trata-se de um conteúdo digital que é fornecido imediatamente após o pagamento e cuja recuperação é impossível, o que se enquadra nas razões de restrição estabelecidas no artigo 17, parágrafo 2 da Lei de Proteção ao Consumidor em Transações Eletrônicas. Esta informação é previamente comunicada e a concordância é obtida na tela de pagamento."
      ]
    },
    {
      "heading": "3. Casos de Reembolso Total",
      "paragraphs": [
        "Nos seguintes casos, após a verificação da razão, será feito o reenvio ou reembolso total."
      ],
      "bullets": [
        "Se, devido a erro do sistema, o arquivo não foi gerado.",
        "Se o arquivo baixado não abrir.",
        "Se o valor pago for diferente do pedido.",
        "**Se um menor de idade realizar o pagamento sem o consentimento do responsável legal** — O próprio menor ou o responsável legal pode solicitar o cancelamento."
      ]
    },
    {
      "heading": "4. Casos que Não São Motivos para Reembolso",
      "paragraphs": [],
      "bullets": [
        "**Insatisfação com o conteúdo do resultado.** Os resultados da interpretação dos sonhos são materiais de referência sob a perspectiva da interpretação tradicional, e essa natureza é informada antes do pagamento. Isso também se aplica a casos em que não se consegue encontrar símbolos previamente existentes no sonho, pois não se cria significados inexistentes.",
        "Solicitação de reenvio após o uso de todas as 5 tentativas."
      ]
    },
    {
      "heading": "5. Método de Solicitação",
      "paragraphs": [
        "Para reembolsos ou consultas, entre em contato com o centro de atendimento ao cliente ({customerCenter}) ou por e-mail ({email}). Informar o número do pedido ajudará na rápida verificação.",
        "Os reembolsos serão feitos pelo meio de pagamento utilizado, e, dependendo da operadora do cartão ou do prestador de serviços de pagamento, pode levar de 3 a 7 dias úteis para ser refletido."
      ]
    }
  ],
  "effectiveLabel": "Data de Vigência"
};

const d3 = {
  "title": "Informações de Preços",
  "intro": "Apresentamos o escopo dos serviços gratuitos e os preços dos produtos pagos.",
  "sections": [
    {
      "heading": "1. Gratuito",
      "paragraphs": [
        "**A consulta de interpretação de sonhos e a visualização dos resultados são gratuitas.** Não é necessário se cadastrar.",
        "Você pode ver todos os símbolos encontrados no sonho, seus significados e o que eles indicam juntos na tela. Como os sonhos são algo que se tem diariamente, este serviço não impõe limites de consulta."
      ]
    },
    {
      "heading": "2. Cartão de sonho (pago)",
      "paragraphs": [
        "Pagamento nacional {priceCardDomestic} (incluindo impostos) · Pagamento internacional {priceCardGlobal}",
        "Os resultados na tela são apresentados em **uma única imagem**. É uma forma fácil de guardar ou enviar, e **não é um documento PDF.**",
        "Você pode baixar novamente até **5 vezes** com o mesmo pedido. No entanto, se você sair da tela de resultados e os dados de entrada forem perdidos, não será possível recriá-los, portanto, salve o arquivo imediatamente após o pagamento."
      ]
    },
    {
      "heading": "3. Relatório de sonho de concepção PDF (pago)",
      "paragraphs": [
        "Pagamento nacional {priceConceptionDomestic} (incluindo impostos) · Pagamento internacional {priceConceptionGlobal}",
        "Quando símbolos tradicionalmente considerados como sonhos de concepção aparecem, organizamos o significado desses símbolos e o contexto transmitido em um PDF de 4 páginas. **Não determinamos a gravidez ou o sexo do feto.**",
        "As condições de reemissão são as mesmas que as do cartão de sonho."
      ]
    },
    {
      "heading": "4. Métodos de pagamento",
      "paragraphs": [
        "**Nacional** — Você pode usar cartões de crédito e débito e pagamentos simplificados (Toss Payments, KakaoPay, NaverPay, Payco, etc.) através da Toss Payments.",
        "**Internacional** — Você pode pagar via PayPal através da PortOne.",
        "O valor final do pagamento é o que é exibido na tela de pagamento."
      ]
    },
    {
      "heading": "5. Alteração de preços",
      "paragraphs": [
        "Caso haja alteração de preços, ela será publicada primeiro nesta página. Os pedidos que já foram pagos não serão afetados pelo preço alterado."
      ]
    }
  ],
  "effectiveLabel": "Data de Vigência"
};

const d4 = {
  "title": "Política de Tratamento de Dados Pessoais",
  "intro": "Dreams-Link não armazena informações necessárias para a interpretação de sonhos. Esta política descreve o que o serviço coleta, o que não deixa registrado e o que é automaticamente gravado.",
  "sections": [
    {
      "heading": "1. Informações que não são armazenadas",
      "paragraphs": [
        "As histórias de sonhos que você escreve, como você se sente ao acordar e se você tem sonhos repetidos **não são armazenadas em lugar algum.** Elas são usadas apenas na memória do servidor durante o processamento do pedido e desaparecem com a resposta.",
        "Não são registradas em um banco de dados, nem mantidas em arquivos separados. Como não há registro de membros, os dados inseridos não estão vinculados a indivíduos específicos.",
        "As histórias de sonhos são os dados mais pessoais que este serviço recebe. Portanto, não há uma função para revisar resultados anteriores (diário de sonhos) — essa função exigiria a manutenção dos textos que você escreveu."
      ]
    },
    {
      "heading": "2. Informações contidas no link de resultado",
      "paragraphs": [
        "O endereço da tela de resultados contém os valores de entrada codificados. No entanto, esses valores estão localizados após o # no endereço, e, de acordo com os padrões da web, o conteúdo após o # não é enviado pelo navegador ao servidor. Portanto, mesmo que você abra o link de resultado, apenas o caminho do endereço permanecerá nos registros de acesso do servidor.",
        "Se você enviar o link de resultado para outra pessoa, essa pessoa também poderá ver o mesmo resultado. Como o link contém os valores de entrada, a decisão de compartilhar é de responsabilidade do usuário."
      ]
    },
    {
      "heading": "3. Informações coletadas automaticamente",
      "paragraphs": [
        "Não há informações coletadas pelo serviço para identificar os usuários. No entanto, registros mínimos necessários para a operação do serviço são automaticamente mantidos pelo provedor de infraestrutura."
      ],
      "bullets": [
        "Endereço IP de acesso, data e hora de acesso, tipo de navegador e outros registros gerais de acesso ao servidor",
        "Informações do país — usadas apenas para determinar automaticamente o idioma da tela e não são armazenadas"
      ]
    },
    {
      "heading": "4. Cookies e publicidade",
      "paragraphs": [
        "O serviço em si não utiliza cookies para identificar ou rastrear usuários. As histórias de sonhos que você escreve não são transmitidas a anunciantes.",
        "Este serviço exibe anúncios através do Google AdSense. Durante esse processo, as seguintes ações ocorrem."
      ],
      "bullets": [
        "Fornecedores terceirizados, incluindo o Google, podem armazenar ou ler cookies no navegador do usuário.",
        "O Google utiliza cookies com base no histórico de visitas a este e outros sites para exibir anúncios.",
        "Os usuários podem desativar anúncios personalizados nas configurações de anúncios do Google (google.com/settings/ads). Mesmo que desativados, os anúncios ainda serão exibidos, mas com menor relevância para o usuário.",
        "Os anúncios personalizados de todos os fornecedores terceirizados podem ser desativados de uma só vez em aboutads.info/choices.",
        "Há também maneiras de bloquear cookies nas configurações do navegador.",
        "Usuários da Área Econômica Europeia, Reino Unido e Suíça serão solicitados a consentir antes do uso de cookies de publicidade."
      ]
    },
    {
      "heading": "5. Informações armazenadas durante o pagamento",
      "paragraphs": [
        "Atualmente, não vendemos produtos pagos, portanto, não há informações armazenadas relacionadas a pagamentos.",
        "Quando começarmos a vender, os seguintes itens serão armazenados para processamento de pagamentos e para a preservação de registros de transações conforme a legislação. **Mesmo assim, as histórias de sonhos que você escreveu e os arquivos gerados não serão armazenados**, e não coletamos informações que identifiquem o usuário, como nome, contato ou endereço."
      ],
      "bullets": [
        "Número do pedido e identificador de pagamento",
        "Valor do pagamento, moeda e status do pagamento (não pago, pago, cancelado)",
        "Classificação do produto, status de processamento, número de downloads do documento, data e hora do pedido",
        "Idioma da tela no momento do pedido e classificação da região de pagamento (nacional ou internacional)",
        "Período de preservação — De acordo com o Artigo 6 da Lei de Proteção ao Consumidor em Transações Eletrônicas, registros de pagamento e fornecimento de bens serão mantidos por 5 anos, e registros de reclamações ou disputas dos consumidores serão mantidos por 3 anos antes de serem destruídos."
      ]
    },
    {
      "heading": "6. Fornecimento a terceiros e delegação de processamento",
      "paragraphs": [
        "Como não há dados pessoais armazenados, não há dados pessoais fornecidos a terceiros.",
        "Utilizamos a infraestrutura de hospedagem da {hostingProvider} para operar o serviço, e, nesse processo, os registros de acesso mencionados no item 3 são processados de acordo com a política desse provedor.",
        "Quando começarmos a vender produtos pagos, os pagamentos nacionais serão delegados à Toss Payments e os pagamentos internacionais à PortOne (PayPal). Informações de métodos de pagamento, como números de cartão e contas, serão processadas diretamente por esses fornecedores, e o serviço não terá acesso a essas informações."
      ]
    },
    {
      "heading": "7. Direitos do usuário",
      "paragraphs": [
        "Como não há dados pessoais armazenados, não há solicitações de acesso, correção ou exclusão a serem feitas.",
        "Os usuários podem eliminar todos os vestígios de entrada simplesmente apagando o link de resultado na barra de endereços do navegador.",
        "Se houver dúvidas relacionadas ao uso do serviço, entre em contato pelos dados abaixo."
      ]
    },
    {
      "heading": "8. Dados pessoais de crianças",
      "paragraphs": [
        "Este serviço não é destinado a crianças menores de 14 anos e não coleta dados pessoais de crianças."
      ]
    },
    {
      "heading": "9. Responsável pela proteção de dados pessoais",
      "paragraphs": [
        "Responsável pela proteção: {privacyOfficer}",
        "Contato: {email} / {customerCenter}"
      ]
    },
    {
      "heading": "10. Alterações na política",
      "paragraphs": [
        "Se esta política for alterada, a data de entrada em vigor e as alterações serão publicadas nesta página. Se houver mudanças reais no conteúdo do processamento, como a exibição de anúncios ou o início da venda de produtos pagos, informaremos previamente sobre a alteração."
      ]
    }
  ],
  "effectiveLabel": "Data de Vigência"
};

const d5 = {
  "title": "Política de Tratamento de Dados Pessoais",
  "intro": "A Dreams-Link não armazena informações necessárias para a interpretação de sonhos. Esta política descreve o que o serviço coleta, o que não é retido e o que é registrado automaticamente.",
  "sections": [
    {
      "heading": "1. Informações que não são armazenadas",
      "paragraphs": [
        "As histórias de sonhos que você escreve, como se sentiu ao acordar e se você tem sonhos recorrentes **não são armazenadas em nenhum lugar.** Elas são usadas apenas na memória do servidor durante o processamento do pedido e desaparecem com a resposta.",
        "Não são registradas em um banco de dados, nem mantidas em arquivos separados. Como não há registro de membros, os dados inseridos não estão vinculados a indivíduos específicos.",
        "As histórias de sonhos são as informações mais pessoais que este serviço recebe. Portanto, não há funcionalidade para revisar resultados anteriores (diário de sonhos) — essa funcionalidade só seria viável se os textos que você escreveu fossem mantidos."
      ]
    },
    {
      "heading": "2. Informações contidas no link de resultado",
      "paragraphs": [
        "O endereço da tela de resultados contém os valores de entrada codificados. No entanto, esses valores estão localizados após o # no endereço, e de acordo com os padrões da web, o conteúdo após o # não é enviado pelo navegador ao servidor. Portanto, mesmo que você abra o link de resultado, apenas o caminho do endereço permanecerá nos registros de acesso do servidor.",
        "Se você enviar o link de resultado para outra pessoa, essa pessoa também poderá ver o mesmo resultado. Como o link em si contém os valores de entrada, a decisão de compartilhar deve ser feita pelo usuário."
      ]
    },
    {
      "heading": "3. Informações coletadas automaticamente",
      "paragraphs": [
        "Não há informações coletadas para identificar os usuários. No entanto, registros mínimos necessários para a operação do serviço são automaticamente mantidos pelo provedor de infraestrutura."
      ],
      "bullets": [
        "Endereço IP de acesso, data e hora de acesso, tipo de navegador e outros registros gerais de acesso ao servidor",
        "Informações do país — usadas apenas para determinar automaticamente o idioma da tela e não são armazenadas"
      ]
    },
    {
      "heading": "4. Cookies e publicidade",
      "paragraphs": [
        "O serviço em si não utiliza cookies para rastrear usuários.",
        "Atualmente, não há anúncios exibidos neste serviço. Se anúncios forem exibidos no futuro, o provedor de anúncios (por exemplo, Google) poderá usar cookies para exibir anúncios. Nesse caso, esta cláusula será alterada para esclarecer o que mudará antes de iniciar."
      ]
    },
    {
      "heading": "5. Informações armazenadas durante o pagamento",
      "paragraphs": [
        "Ao pagar por produtos pagos (cartão de sonho, relatório de sonho de concepção), as informações do pedido são armazenadas para processamento do pagamento e para a preservação de registros de transações conforme a legislação.",
        "**Os sonhos que você escreveu e os arquivos gerados não são armazenados, mesmo após o pagamento.** O princípio do item 1 permanece inalterado, independentemente do pagamento. Os itens armazenados são os seguintes, e informações que identificam o usuário, como nome, contato e endereço, não estão incluídas."
      ],
      "bullets": [
        "Número do pedido e identificador de pagamento",
        "Valor do pagamento, moeda e status do pagamento (não pago, pago, cancelado)",
        "Classificação do produto, status de processamento, número de downloads do documento, data e hora do pedido",
        "Idioma da tela no momento do pedido e classificação da região de pagamento (nacional ou internacional)",
        "Período de retenção — De acordo com o Artigo 6 da Lei de Proteção ao Consumidor em Comércio Eletrônico, registros de pagamento e fornecimento de bens serão mantidos por 5 anos, e registros de reclamações ou disputas dos consumidores serão mantidos por 3 anos antes de serem destruídos."
      ]
    },
    {
      "heading": "6. Fornecimento a terceiros e subcontratação",
      "paragraphs": [
        "Como não armazenamos informações pessoais que identificam os usuários, não há informações pessoais fornecidas a terceiros. O processamento de pagamentos é subcontratado para os seguintes prestadores de serviços.",
        "Utilizamos a infraestrutura de hospedagem da {hostingProvider} para operar o serviço, e durante esse processo, os registros de acesso do item 3 são processados de acordo com a política desse prestador.",
        "Os pagamentos nacionais são processados pela Toss Payments, enquanto os pagamentos internacionais são processados pelo PayPal através da PortOne. Informações sobre métodos de pagamento, como números de cartão e conta, são processadas diretamente por esses prestadores, e o serviço não recebe nem armazena essas informações."
      ]
    },
    {
      "heading": "7. Direitos dos usuários",
      "paragraphs": [
        "Como os sonhos que você escreveu não são armazenados, não há destinatário para solicitações de acesso, correção ou exclusão. Os registros de pedidos restantes após o pagamento devem ser mantidos pelo período estipulado pela legislação, e não podem ser excluídos durante esse período, sendo destruídos após o término do mesmo.",
        "Os usuários podem eliminar todos os vestígios de entrada simplesmente apagando o link de resultado na barra de endereços do navegador.",
        "Se houver dúvidas relacionadas ao uso do serviço, entre em contato pelos dados abaixo."
      ]
    },
    {
      "heading": "8. Informações pessoais de crianças",
      "paragraphs": [
        "Este serviço não é destinado a crianças menores de 14 anos e não coleta informações pessoais de crianças."
      ]
    },
    {
      "heading": "9. Responsável pela proteção de dados pessoais",
      "paragraphs": [
        "Responsável pela proteção: {privacyOfficer}",
        "Contato: {email} / {customerCenter}"
      ]
    },
    {
      "heading": "10. Alterações na política",
      "paragraphs": [
        "Se esta política for alterada, a data de entrada em vigor e as alterações serão publicadas nesta página. Se houver mudanças reais no conteúdo do processamento, como a exibição de anúncios ou a venda de produtos pagos, a alteração será comunicada antecipadamente."
      ]
    }
  ],
  "effectiveLabel": "Data de Vigência"
};

const d6 = {
  "title": "Termos de Uso",
  "intro": "Este termo estabelece as condições de uso do Dreams-Link (doravante denominado “serviço”). Ao utilizar o serviço, considera-se que você concorda com estes termos.",
  "sections": [
    {
      "heading": "1. Natureza do Serviço",
      "paragraphs": [
        "O serviço busca símbolos de sonhos fornecidos pelo usuário e apresenta os significados associados a esses símbolos como material de referência. O serviço informa que não consegue encontrar símbolos que não estão no dicionário e não inventa significados inexistentes.",
        "Os símbolos e interpretações apresentados são **materiais de referência sob a perspectiva da interpretação tradicional e não constituem previsões sobre o futuro ou consultoria médica, financeira ou legal.** Um sonho bom não garante que algo acontecerá, e um sonho ruim não implica que algo está programado para ocorrer.",
        "**Os resultados relacionados a sonhos de concepção não determinam a possibilidade de gravidez ou o sexo do feto.** Apenas informamos que símbolos tradicionalmente considerados como sonhos de concepção apareceram, junto com seu contexto."
      ]
    },
    {
      "heading": "2. Taxas de Uso",
      "paragraphs": [
        "A consulta e visualização dos resultados de interpretação de sonhos são gratuitas e não requerem registro.",
        "Receber resultados na forma de um sonho card (imagem) ou relatório de sonho de concepção (PDF) é pago. Os preços e condições estão indicados na seção 3 abaixo e na tela de pagamento."
      ]
    },
    {
      "heading": "3. Produtos Pagos e Reembolso",
      "paragraphs": [
        "Os produtos pagos disponíveis para venda são **dois tipos**. A interpretação gratuita pode ser utilizada sem pagamento, enquanto os dois produtos abaixo são oferecidos em uma forma que permite que você guarde os resultados.",
        "**Sonho Card** — um arquivo de imagem. Ele é criado para que você possa guardar e compartilhar os símbolos e significados tradicionais do sonho que você teve naquele dia. **Não é um documento (PDF).** Pagamento nacional {priceCardDomestic} (incluindo impostos), pagamento internacional {priceCardGlobal}.",
        "**Relatório de Sonho de Concepção PDF** — 4 páginas. Este documento contém os significados tradicionais dos símbolos e seu contexto. **Não determina a possibilidade de gravidez** — apenas informamos que símbolos tradicionalmente considerados como sonhos de concepção apareceram no sonho. Pagamento nacional {priceConceptionDomestic} (incluindo impostos), pagamento internacional {priceConceptionGlobal}.",
        "Os pagamentos nacionais podem ser feitos através da Toss Payments usando cartões de crédito, cartões de débito e pagamentos simplificados (como Toss Pay, Kakao Pay, Naver Pay, Payco, etc.), enquanto os pagamentos internacionais são feitos via PayPal através da PortOne. O valor final é o que aparece na tela de pagamento.",
        "**O serviço não armazena os dados inseridos pelo usuário nem os arquivos PDF gerados.** Assim que o pagamento é aprovado, o documento é gerado e enviado imediatamente, e nada é mantido no servidor. Portanto, o arquivo baixado deve ser guardado pelo usuário.",
        "Caso o download seja interrompido ou o arquivo seja perdido, é possível baixar novamente **até 5 vezes** com o mesmo pedido. No entanto, se você sair da tela de resultados e os dados inseridos forem perdidos, não será possível recriá-los, então, por favor, salve o arquivo imediatamente após o pagamento."
      ],
      "bullets": [
        "**Antes que o download comece após o pagamento, você pode cancelar a qualquer momento e receber um reembolso total.**",
        "**Após a conclusão do download, a desistência por simples mudança de ideia é restrita.** Este é um conteúdo digital que é fornecido imediatamente e cuja recuperação não é possível, o que se enquadra nas razões para restrição de desistência conforme o Artigo 17, Parágrafo 2 da Lei de Proteção ao Consumidor em Transações Eletrônicas.",
        "**Se um erro no sistema impedir a criação do documento, o arquivo não abrir ou o valor pago for diferente do pedido,** será tratado como reemissão ou reembolso total.",
        "**Reclamações sobre o conteúdo dos resultados** não são motivos para reembolso. Os resultados da interpretação são materiais de referência sob a perspectiva da interpretação tradicional, e essa natureza é informada antes do pagamento (conforme mencionado no item 1 acima).",
        "Solicitações de reemissão após o uso de todas as 5 vezes não são motivos para reembolso.",
        "**Se um menor realizar um pagamento sem o consentimento do responsável legal,** ele ou o responsável legal podem cancelar esse pagamento. Informe-nos através dos contatos abaixo para que possamos reembolsá-lo."
      ]
    },
    {
      "heading": "4. Sobre os Resultados da Interpretação",
      "paragraphs": [
        "As regras para encontrar símbolos seguem um dicionário público e um procedimento definido, portanto, se você escrever o mesmo texto, sempre aparecerão os mesmos símbolos.",
        "Quanto mais curto for o texto, menos símbolos serão encontrados. Não conseguimos encontrar símbolos que não estão no dicionário, e nesse caso, deixamos o resultado em branco.",
        "O dicionário de símbolos é uma compilação de literatura de interpretação de sonhos transmitida e tradições orais, e as interpretações podem variar de acordo com a região e a época."
      ]
    },
    {
      "heading": "5. Responsabilidade do Usuário",
      "paragraphs": [
        "O usuário pode escrever sobre os sonhos de outras pessoas, mas não deve usar os resultados de forma a prejudicar terceiros.",
        "Não utilize os resultados do serviço como base para decisões que afetem os direitos ou interesses de pessoas, como gravidez, saúde, investimentos ou contratações. O serviço não foi criado para esses fins."
      ]
    },
    {
      "heading": "6. Atos Proibidos",
      "paragraphs": [
        "As seguintes ações não são permitidas."
      ],
      "bullets": [
        "Enviar solicitações excessivas com ferramentas automatizadas que interfiram na operação do serviço",
        "Apresentar os resultados do serviço como se fossem fatos ou resultados de avaliações de especialistas",
        "Reproduzir ou modificar o serviço para oferecer um serviço idêntico"
      ]
    },
    {
      "heading": "7. Isenção de Responsabilidade",
      "paragraphs": [
        "O serviço fornece apenas materiais de referência e não se responsabiliza pelas decisões tomadas pelo usuário com base nos resultados e suas consequências.",
        "Em caso de interrupção do serviço devido a razões fora de controle, como desastres naturais ou falhas do provedor de infraestrutura, não nos responsabilizamos por danos decorrentes."
      ]
    },
    {
      "heading": "8. Direitos de Propriedade Intelectual",
      "paragraphs": [
        "Os direitos sobre a tela do serviço, frases e implementações das regras de cálculo pertencem ao operador. O usuário pode salvar ou compartilhar os resultados para fins pessoais."
      ]
    },
    {
      "heading": "9. Alterações nos Termos e Lei Aplicável",
      "paragraphs": [
        "Se os termos forem alterados, serão publicados nesta página com a data de entrada em vigor.",
        "Estes termos são regidos pela lei da República da Coreia, e disputas relacionadas ao uso do serviço seguirão os procedimentos estabelecidos pela legislação aplicável."
      ]
    }
  ],
  "effectiveLabel": "Data de Vigência"
};

const d7 = {
  "title": "Política de Tratamento de Dados Pessoais",
  "intro": "A Dreams-Link não armazena informações necessárias para a interpretação de sonhos. Esta política descreve o que o serviço coleta, o que não armazena e o que é registrado automaticamente.",
  "sections": [
    {
      "heading": "1. Informações que não são armazenadas",
      "paragraphs": [
        "As histórias de sonhos que você escreve, como você se sentiu ao acordar e se você tem sonhos recorrentes **não são armazenadas em lugar algum.** Elas são utilizadas apenas na memória do servidor durante o processamento do pedido e desaparecem junto com a resposta.",
        "Não são registradas em banco de dados, nem mantidas em arquivos separados. Como não há registro de membros, os dados inseridos não estão vinculados a indivíduos específicos.",
        "As histórias de sonhos são os dados mais pessoais que este serviço recebe. Portanto, não há funcionalidade para revisar resultados anteriores (diário de sonhos) — essa funcionalidade só poderia existir se os textos que você escreveu fossem mantidos."
      ]
    },
    {
      "heading": "2. Informações contidas no link de resultado",
      "paragraphs": [
        "O endereço da tela de resultados contém os valores de entrada codificados. No entanto, esses valores estão localizados após o # no endereço, e, de acordo com os padrões da web, o conteúdo após o # não é enviado pelo navegador ao servidor. Portanto, mesmo que você abra o link de resultado, apenas o caminho do endereço permanecerá nos registros de acesso do servidor.",
        "Se você enviar o link de resultado para outra pessoa, essa pessoa também poderá ver o mesmo resultado. Como o link contém os valores de entrada, a decisão de compartilhar é de responsabilidade do usuário."
      ]
    },
    {
      "heading": "3. Informações coletadas automaticamente",
      "paragraphs": [
        "Não há informações coletadas pelo serviço para identificar os usuários. No entanto, registros mínimos necessários para a operação do serviço são automaticamente mantidos pelo provedor de infraestrutura."
      ],
      "bullets": [
        "Endereço IP de acesso, data e hora de acesso, tipo de navegador e outros registros gerais de acesso ao servidor",
        "Informações do país — usadas apenas para determinar automaticamente o idioma da tela e não são armazenadas"
      ]
    },
    {
      "heading": "4. Cookies e publicidade",
      "paragraphs": [
        "O serviço em si não utiliza cookies para identificar ou rastrear usuários. As histórias de sonhos que você escreveu não são transmitidas a anunciantes.",
        "Este serviço exibe anúncios através do Google AdSense. Durante esse processo, as seguintes ações ocorrem."
      ],
      "bullets": [
        "Fornecedores terceiros, incluindo o Google, podem armazenar ou ler cookies no navegador do usuário.",
        "O Google utiliza cookies com base no histórico de visitas a este e outros sites para exibir anúncios.",
        "Os usuários podem desativar anúncios personalizados nas configurações de anúncios do Google (google.com/settings/ads). Mesmo que desativados, os anúncios continuarão a ser exibidos, mas com menor relevância para o usuário.",
        "Os anúncios personalizados de todos os fornecedores terceiros podem ser desativados de uma só vez em aboutads.info/choices.",
        "Há também a opção de bloquear cookies nas configurações do navegador.",
        "Usuários da Área Econômica Europeia, Reino Unido e Suíça serão questionados sobre o consentimento para o uso de cookies de publicidade antes de sua utilização."
      ]
    },
    {
      "heading": "5. Informações armazenadas durante o pagamento",
      "paragraphs": [
        "Ao pagar por produtos pagos (cartão de sonho, relatório de sonho de concepção), as informações do pedido são armazenadas para processamento do pagamento e para cumprimento das obrigações legais de registro de transações.",
        "**As histórias de sonhos que você escreveu e os arquivos gerados não são armazenados, mesmo após o pagamento.** O princípio do item 1 se aplica independentemente do pagamento. Os itens armazenados são os seguintes, e não incluem informações que identifiquem o usuário, como nome, contato ou endereço."
      ],
      "bullets": [
        "Número do pedido e identificador de pagamento",
        "Valor do pagamento, moeda e status do pagamento (não pago, pago, cancelado)",
        "Classificação do produto, status de processamento, número de downloads do documento, horário do pedido",
        "Idioma da tela no momento do pedido e classificação da região de pagamento (nacional ou internacional)",
        "Período de retenção — De acordo com o Artigo 6 da Lei de Proteção ao Consumidor em Comércio Eletrônico, os registros de pagamento e fornecimento de bens serão mantidos por 5 anos, e os registros de reclamações ou disputas dos consumidores serão mantidos por 3 anos antes de serem destruídos."
      ]
    },
    {
      "heading": "6. Fornecimento a terceiros e subcontratação",
      "paragraphs": [
        "Como não armazenamos dados pessoais que identifiquem os usuários, não há dados pessoais fornecidos a terceiros. O processamento de pagamentos é subcontratado para os seguintes fornecedores.",
        "Utilizamos a infraestrutura de hospedagem da {hostingProvider} para a operação do serviço, e, nesse processo, os registros de acesso do item 3 são processados de acordo com a política desse fornecedor.",
        "Os pagamentos nacionais são processados pela Toss Payments, enquanto os pagamentos internacionais são processados pelo PayPal através da PortOne. Informações de métodos de pagamento, como números de cartão e contas, são processadas diretamente por esses fornecedores, e o serviço não as recebe nem as armazena."
      ]
    },
    {
      "heading": "7. Direitos dos usuários",
      "paragraphs": [
        "Como as histórias de sonhos que você escreveu não são armazenadas, não há destinatário para solicitações de acesso, correção ou exclusão. Os registros de pedidos restantes após o pagamento devem ser mantidos pelo período estipulado pela lei, e não podem ser excluídos durante esse período; após o término do período, serão destruídos.",
        "Os usuários podem eliminar todos os vestígios de entrada simplesmente apagando o link de resultado na barra de endereços do navegador.",
        "Se houver dúvidas relacionadas ao uso do serviço, entre em contato pelos detalhes abaixo."
      ]
    },
    {
      "heading": "8. Dados pessoais de crianças",
      "paragraphs": [
        "Este serviço não é destinado a crianças menores de 14 anos e não coleta dados pessoais de crianças."
      ]
    },
    {
      "heading": "9. Responsável pela proteção de dados pessoais",
      "paragraphs": [
        "Responsável pela proteção: {privacyOfficer}",
        "Contato: {email} / {customerCenter}"
      ]
    },
    {
      "heading": "10. Alterações na política",
      "paragraphs": [
        "Caso esta política seja alterada, a data de entrada em vigor e as alterações serão publicadas nesta página. Se houver mudanças reais no conteúdo do processamento, como o início da exibição de anúncios ou venda de produtos pagos, a alteração será comunicada previamente."
      ]
    }
  ],
  "effectiveLabel": "Data de Vigência"
};

export const pt: LegalLocaleDocuments = {
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
