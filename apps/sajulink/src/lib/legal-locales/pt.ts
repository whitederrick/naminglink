import type { LegalLocaleDocuments } from "@/lib/legal-locales/types";

// ko 원본에서 자동 생성된 번역이다(scripts/translate-legal.mjs). 손으로 고쳐도 되지만,
// 다시 생성하면 덮어쓴다 — 문구를 바꿀 일이 있으면 ko를 먼저 고치고 전체를 다시 만들 것.
// 사업자 정보와 가격은 플레이스홀더로 남아 있고 실제 값은 getLegalDocument가 넣는다.

const d0 = {
  "title": "Política de Tratamento de Dados Pessoais",
  "intro": "Saju-Link não armazena informações necessárias para a leitura de saju (사주). Esta política descreve o que o serviço coleta, o que não é retido e o que é registrado automaticamente.",
  "sections": [
    {
      "heading": "1. Informações que não são armazenadas",
      "paragraphs": [
        "As informações inseridas para a leitura de saju, como data de nascimento, hora de nascimento, local de nascimento, gênero e nome utilizado, **não são armazenadas em nenhum lugar.** Elas são utilizadas apenas na memória do servidor durante o processamento do pedido e desaparecem com a resposta.",
        "Não são registradas em banco de dados, nem mantidas em arquivos separados. Como não há registro de membros, os valores inseridos não estão vinculados a indivíduos específicos."
      ]
    },
    {
      "heading": "2. Informações contidas no link de resultados",
      "paragraphs": [
        "O endereço da tela de resultados contém os valores inseridos codificados. No entanto, esses valores estão localizados após o # do endereço, e de acordo com os padrões da web, o conteúdo após o # não é enviado pelo navegador ao servidor. Portanto, mesmo que o link de resultados seja aberto, apenas o caminho do endereço permanece nos registros de acesso do servidor.",
        "Se o link de resultados for enviado a outra pessoa, essa pessoa também poderá ver os mesmos resultados. Como o link em si contém os valores inseridos, a decisão de compartilhar deve ser feita pelo usuário."
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
        "O serviço em si não utiliza cookies para rastrear usuários.",
        "Atualmente, não há anúncios exibidos neste serviço. Se anúncios forem exibidos no futuro, o provedor de anúncios (por exemplo, Google) poderá usar cookies para exibir anúncios. Nesse caso, esta cláusula será alterada previamente para esclarecer o que mudará antes de iniciar."
      ]
    },
    {
      "heading": "5. Informações armazenadas durante o pagamento",
      "paragraphs": [
        "Atualmente, não vendemos produtos pagos, portanto, não há informações armazenadas relacionadas a pagamentos.",
        "Quando as vendas começarem, os seguintes itens serão armazenados para processamento de pagamentos e preservação de registros de transações conforme a legislação: **mesmo assim, os valores inseridos na leitura de saju e o PDF gerado não serão armazenados**, e informações que identificam o usuário, como nome, contato e endereço, também não serão coletadas."
      ],
      "bullets": [
        "Número do pedido e identificador de pagamento",
        "Valor do pagamento, moeda e status do pagamento (não pago, pago, cancelado)",
        "Classificação do produto, status de processamento, número de downloads do documento, data e hora do pedido",
        "Idioma da tela no momento do pedido e classificação da região de pagamento (nacional ou internacional)",
        "Período de preservação — de acordo com o Artigo 6 da Lei de Proteção ao Consumidor em Transações Eletrônicas, os registros de pagamento e fornecimento de bens serão mantidos por 5 anos, e os registros de reclamações ou disputas dos consumidores serão mantidos por 3 anos antes de serem destruídos."
      ]
    },
    {
      "heading": "6. Fornecimento a terceiros e delegação de processamento",
      "paragraphs": [
        "Como não há dados pessoais armazenados, não há dados pessoais fornecidos a terceiros.",
        "Utilizamos a infraestrutura de hospedagem da {hostingProvider} para a operação do serviço, e nesse processo, os registros de acesso mencionados no item 3 são processados de acordo com a política do respectivo provedor.",
        "Quando as vendas de produtos pagos começarem, os pagamentos nacionais serão delegados à Toss Payments, e os pagamentos internacionais à PortOne (PayPal). Informações sobre métodos de pagamento, como números de cartão e contas, também serão processadas diretamente por esses provedores, e o serviço não as receberá."
      ]
    },
    {
      "heading": "7. Direitos dos usuários",
      "paragraphs": [
        "Como não há dados pessoais armazenados, não há destinatários para solicitações de acesso, correção ou exclusão.",
        "Os usuários podem eliminar todos os vestígios de entrada simplesmente apagando o link de resultados na barra de endereços do navegador.",
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
        "Se esta política for alterada, a data de entrada em vigor e as alterações serão publicadas nesta página. Se o conteúdo do processamento realmente mudar, como a exibição de anúncios ou o início da venda de produtos pagos, informaremos previamente sobre a alteração."
      ]
    }
  ],
  "effectiveLabel": "Data de Vigência"
};

const d1 = {
  "title": "Termos de Uso",
  "intro": "Estes termos estabelecem as condições de uso do Saju-Link (doravante denominado \"serviço\"). Ao utilizar o serviço, você concorda com estes termos.",
  "effectiveLabel": "Data de Vigência",
  "sections": [
    {
      "heading": "1. Natureza do Serviço",
      "paragraphs": [
        "O serviço aplica as regras da tradicional astrologia coreana (saju) com base na data de nascimento e hora de nascimento fornecidas, apresentando o gráfico natal do saju e o equilíbrio dos cinco elementos, a força e fraqueza do dia, além de referências sobre a interação entre o dia e o gráfico natal.",
        "Os pontos e interpretações apresentados são **referências do ponto de vista da astrologia tradicional, e não previsões científicas ou afirmações sobre o futuro, saúde ou patrimônio de um indivíduo.** Um baixo escore não significa que o dia será ruim, e um alto escore não garante nada.",
        "**As frases de interpretação dos relatórios pagos são escritas por uma IA generativa.** No entanto, todos os valores, como pontuação, tronco e força dos cinco elementos, são calculados pelo motor de regras do serviço, e a IA não altera ou cria esses valores. Se não for possível gerar uma interpretação, uma descrição baseada nos valores calculados pelo motor será inserida no mesmo lugar, e o número de páginas do documento e os itens incluídos são exatamente os mencionados na seção 3 abaixo."
      ]
    },
    {
      "heading": "2. Taxa de Uso",
      "paragraphs": [
        "Atualmente, o serviço é oferecido gratuitamente e não é necessário registro.",
        "Quando começarmos a vender produtos pagos (relatório de leitura de vida saju PDF e relatório premium de leitura de vida PDF), as condições do item 3 abaixo serão aplicadas. Este termo será novamente notificado antes do início das vendas."
      ]
    },
    {
      "heading": "3. Produtos pagos e reembolso",
      "paragraphs": [
        "Os produtos pagos que vendemos são **um PDF do relatório de leitura da vida de saju (사주) e da sorte do ano**. O resultado exibido na tela é convertido em um documento, incluindo informações que não estão na tela.",
        "**9 páginas A4** — capa e resumo, tendências inatas e pontos fortes a serem observados, os oito caracteres do natal chart (원국) e a força dos cinco elementos, a força e fraqueza do dia e a energia necessária no momento (yongshin), os dez deuses dos quatro pilares e as posições proeminentes neste saju, as quatro áreas da vida vistas no natal chart (riqueza, amor, profissão, saúde) e suas bases, detalhes da correção do tempo verdadeiro, e a sorte do ano estão incluídos. O pagamento nacional é {priceDomestic} (incluindo IVA), e o pagamento internacional é {priceGlobal}.",
        "**A sorte do dia não está incluída neste documento.** É um valor que muda diariamente e é fornecido gratuitamente na tela, enquanto este documento é composto pela interpretação do natal chart que não muda ao longo da vida e pela sorte do ano.",
        "Os pagamentos nacionais podem ser feitos através do Toss Payments usando cartões de crédito, cartões de débito e pagamentos simplificados (Toss Pay, Kakao Pay, Naver Pay, Payco, etc.), e os pagamentos internacionais são feitos via PayPal através do PortOne. O valor final é o que aparece na tela de pagamento.",
        "**O serviço não armazena os dados inseridos pelo usuário nem o arquivo PDF gerado.** Assim que o pagamento é aprovado, o documento é gerado e enviado imediatamente, sem deixar nada no servidor. Portanto, o arquivo baixado deve ser mantido pelo usuário.",
        "Em caso de interrupção do download ou perda do arquivo, é possível baixar novamente até **5 vezes** com o mesmo pedido. No entanto, se os dados de entrada desaparecerem fora da tela de resultados, não será possível recriá-los, portanto, salve o arquivo imediatamente após o pagamento."
      ],
      "bullets": [
        "**Antes de o download ser iniciado após o pagamento,** você pode cancelar a qualquer momento e receber um reembolso total.",
        "**Após a conclusão do download,** o cancelamento por arrependimento é restrito. Trata-se de conteúdo digital que é fornecido imediatamente e cuja recuperação não é possível, o que se enquadra nas razões para restrição de cancelamento conforme o Artigo 17, Parágrafo 2 da Lei de Proteção ao Consumidor em Comércio Eletrônico.",
        "**Se o documento não for gerado devido a erro do sistema, o arquivo não abrir ou o valor do pagamento for diferente do pedido,** será tratado como reemissão ou reembolso total.",
        "**Reclamações sobre o conteúdo dos resultados** não são motivos para reembolso. A interpretação do saju é um material de referência sob a perspectiva da tradicional astrologia coreana, e essa natureza é informada antes do pagamento (conforme mencionado no item 1 acima).",
        "Solicitações de reemissão após o uso de todas as 5 vezes não são motivos para reembolso.",
        "**Se um menor efetuar um pagamento sem o consentimento do representante legal,** ele ou o representante legal podem cancelar esse pagamento. Se você nos informar através do contato abaixo, faremos o reembolso."
      ]
    },
    {
      "heading": "4. Resultados do Cálculo",
      "paragraphs": [
        "Todos os pontos são calculados de acordo com regras públicas, portanto, se os mesmos valores forem inseridos, sempre resultarão nos mesmos resultados.",
        "Se a hora de nascimento não for inserida, o cálculo será feito excluindo o pilar do tempo (時柱), o que pode resultar em diferenças nos resultados. Quanto mais preciso for a escolha do local de nascimento, mais exato será o cálculo do pilar do tempo.",
        "O cálculo do calendário natal (만세력) utiliza uma biblioteca de cálculo pública, e os resultados podem variar de acordo com a forma de tratamento dos períodos solares e dos fusos horários."
      ]
    },
    {
      "heading": "5. Responsabilidade do Usuário",
      "paragraphs": [
        "O usuário pode inserir a data de nascimento de outra pessoa, mas não deve usar os resultados de forma a prejudicar essa pessoa.",
        "Não utilize os resultados do serviço como base para decisões que possam afetar os direitos de terceiros, como casamento, divórcio, contratação ou transações. O serviço não foi criado para tais fins."
      ]
    },
    {
      "heading": "6. Atos Proibidos",
      "paragraphs": [
        "Os seguintes atos não são permitidos."
      ],
      "bullets": [
        "Enviar solicitações excessivas com ferramentas de automação que interfiram na operação do serviço",
        "Apresentar os resultados do serviço como se fossem fatos ou resultados de avaliações de especialistas",
        "Duplicar ou modificar o serviço para oferecer o mesmo serviço"
      ]
    },
    {
      "heading": "7. Isenção de Responsabilidade",
      "paragraphs": [
        "O serviço fornece apenas materiais de referência e não se responsabiliza pelas decisões tomadas pelo usuário com base nos resultados e suas consequências.",
        "Não nos responsabilizamos por danos decorrentes da interrupção do serviço devido a razões fora de nosso controle, como desastres naturais ou falhas do provedor de infraestrutura."
      ]
    },
    {
      "heading": "8. Direitos de Propriedade Intelectual",
      "paragraphs": [
        "Os direitos sobre a interface do serviço, textos e implementações das regras de cálculo pertencem ao operador. O usuário pode salvar ou compartilhar os resultados para fins pessoais de apreciação."
      ]
    },
    {
      "heading": "9. Alteração dos Termos e Lei Aplicável",
      "paragraphs": [
        "No caso de alteração dos termos, serão publicados nesta página juntamente com a data de entrada em vigor.",
        "Estes termos são regidos pela legislação da República da Coreia, e quaisquer disputas relacionadas ao uso do serviço seguirão os procedimentos estabelecidos pela legislação aplicável."
      ]
    }
  ]
};

const d2 = {
  "title": "Política de Reembolso e Cancelamento",
  "intro": "Esta é a base para cancelamento e reembolso do relatório de leitura de vida saju (사주) em PDF. Reunimos informações conforme o item 3 dos termos e condições.",
  "sections": [
    {
      "heading": "1. Natureza do Produto",
      "paragraphs": [
        "Os produtos vendidos são **relatório de leitura de vida saju (사주) em PDF (A4 5 páginas)** e **relatório premium de leitura de vida saju (사주) em PDF (A4 7 páginas)**, ambos sendo conteúdos digitais que são gerados e enviados imediatamente após a aprovação do pagamento.",
        "**O serviço não armazena os dados inseridos pelo usuário nem o arquivo PDF gerado.** Portanto, o arquivo baixado deve ser mantido pelo usuário."
      ],
      "bullets": []
    },
    {
      "heading": "2. Direito de Arrependimento",
      "paragraphs": [
        "Segue os critérios estabelecidos pela Lei de Comércio Eletrônico."
      ],
      "bullets": [
        "**Antes do início do download,** é possível cancelar a qualquer momento e receber reembolso total.",
        "**Após a conclusão do download,** o direito de arrependimento por simples mudança de ideia é restrito. Trata-se de conteúdo digital que é fornecido imediatamente após o pagamento e cuja recuperação é impossível, o que se enquadra nas razões de restrição conforme o artigo 17, parágrafo 2 da Lei de Proteção ao Consumidor em Comércio Eletrônico. Esta informação é previamente comunicada e a concordância é obtida na tela de pagamento."
      ]
    },
    {
      "heading": "3. Casos de Reembolso Total",
      "paragraphs": [
        "Nos seguintes casos, o reembolso total ou reemissão será processado após a verificação da razão."
      ],
      "bullets": [
        "Caso o documento não tenha sido gerado devido a erro do sistema",
        "Caso o arquivo baixado não abra",
        "Caso o valor pago seja diferente do pedido",
        "**Caso um menor tenha realizado o pagamento sem a autorização do responsável legal** — O próprio menor ou o responsável legal pode solicitar o cancelamento."
      ]
    },
    {
      "heading": "4. Casos que Não São Motivo para Reembolso",
      "paragraphs": [],
      "bullets": [
        "**Insatisfação com o conteúdo do resultado.** A interpretação do saju (사주) é um material de referência sob a perspectiva da filosofia tradicional e sua natureza é informada antes do pagamento.",
        "Solicitação de reemissão após o uso de todas as 5 reemissões."
      ]
    },
    {
      "heading": "5. Método de Solicitação",
      "paragraphs": [
        "Solicitações de reembolso ou consultas devem ser feitas ao centro de atendimento ao cliente ({customerCenter}) ou por e-mail ({email}). Informar o número do pedido ajudará na rápida verificação.",
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
        "**A leitura de saju (사주) e a consulta da sorte do dia são gratuitas.** Não é necessário se cadastrar como membro.",
        "Você pode visualizar todos os detalhes, incluindo os oito caracteres do natal chart (원국), o equilíbrio dos cinco elementos, a força e fraqueza do dia, a pontuação e classificação da sorte do dia, e a pontuação das quatro áreas da vida na tela."
      ]
    },
    {
      "heading": "2. Relatório de Leitura de Vida Saju PDF e Relatório de Sorte do Ano (pago)",
      "paragraphs": [
        "Pagamento nacional {priceDomestic} (incluindo IVA) · Pagamento internacional {priceGlobal}",
        "Transformamos os resultados da tela em um documento PDF de **9 páginas A4**. Incluímos informações que não aparecem na tela — a força e fraqueza do dia, a energia necessária no momento, os dez deuses dos quatro pilares, as posições proeminentes neste saju, Wang Sang Hyu Su Sa, as quatro áreas da vida vistas no natal chart e seus números de base, detalhes da correção do horário de Jintai Yang, e a sorte deste ano — tudo isso está incluído.",
        "Você pode baixar novamente até **5 vezes** com o mesmo pedido. No entanto, se os valores de entrada desaparecerem ao sair da tela de resultados, não será possível recriá-los, portanto, salve o arquivo imediatamente após o pagamento."
      ]
    },
    {
      "heading": "4. Métodos de Pagamento",
      "paragraphs": [
        "**Nacional** — Você pode usar cartões de crédito e débito e pagamentos simplificados (Toss Pay, Kakao Pay, Naver Pay, Payco, etc.) através da Toss Payments.",
        "**Internacional** — Você pode pagar via PayPal através da PortOne.",
        "O valor final do pagamento é o que aparece na tela de pagamento."
      ]
    },
    {
      "heading": "5. Alteração de Preços",
      "paragraphs": [
        "Caso haja alteração de preços, ela será publicada primeiro nesta página. Os pedidos que já foram pagos não serão afetados pelos preços alterados."
      ]
    }
  ],
  "effectiveLabel": "Data de Vigência"
};

const d4 = {
  "title": "Política de Tratamento de Dados Pessoais",
  "intro": "Saju-Link não armazena informações necessárias para a interpretação de saju (사주). Esta política descreve o que o serviço coleta, o que não é retido e o que é registrado automaticamente.",
  "sections": [
    {
      "heading": "1. Informações que não são armazenadas",
      "paragraphs": [
        "As informações inseridas para a interpretação de saju, como data de nascimento, hora de nascimento, local de nascimento, gênero e nome, **não são armazenadas em lugar algum.** Elas são utilizadas apenas na memória do servidor durante o processamento do pedido e desaparecem com a resposta.",
        "Não são registradas em banco de dados, nem mantidas em arquivos separados. Como não há registro de membros, os valores inseridos não estão vinculados a indivíduos específicos."
      ]
    },
    {
      "heading": "2. Informações contidas no link de resultado",
      "paragraphs": [
        "O endereço da tela de resultados contém os valores inseridos codificados. No entanto, esses valores estão localizados após o # do endereço, e, de acordo com os padrões da web, o conteúdo após o # não é enviado pelo navegador ao servidor. Portanto, mesmo que o link de resultado seja aberto, apenas o caminho do endereço permanece nos registros de acesso do servidor.",
        "Se o link de resultado for enviado a outra pessoa, essa pessoa também poderá ver o mesmo resultado. Como o link em si contém os valores inseridos, a decisão de compartilhar deve ser feita pelo usuário."
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
        "O serviço em si não utiliza cookies para identificar ou rastrear usuários. As informações inseridas na interpretação de saju não são transmitidas a anunciantes.",
        "Este serviço exibe anúncios através do Google AdSense. Durante esse processo, as seguintes ações ocorrem."
      ],
      "bullets": [
        "Fornecedores terceirizados, incluindo o Google, podem armazenar ou ler cookies no navegador do usuário.",
        "O Google utiliza cookies com base no histórico de visitas a este e outros sites para exibir anúncios.",
        "Os usuários podem desativar anúncios personalizados nas configurações de anúncios do Google (google.com/settings/ads). Mesmo que desativados, os anúncios continuarão a ser exibidos, mas sua relevância para o usuário será reduzida.",
        "Os anúncios personalizados de todos os fornecedores terceirizados podem ser desativados de uma só vez em aboutads.info/choices.",
        "Há também maneiras de bloquear cookies nas configurações do navegador.",
        "Usuários da Área Econômica Europeia, Reino Unido e Suíça são questionados previamente sobre o consentimento para o uso de cookies de publicidade."
      ]
    },
    {
      "heading": "5. Informações armazenadas durante o pagamento",
      "paragraphs": [
        "Atualmente, não vendemos produtos pagos, portanto, não há informações armazenadas relacionadas a pagamentos.",
        "Quando começarmos a vender, os seguintes itens serão armazenados para processamento de pagamentos e para a preservação de registros de transações conforme a legislação: **mesmo assim, os valores inseridos na interpretação de saju e o PDF gerado não serão armazenados**, e não coletamos informações que identifiquem o usuário, como nome, contato e endereço."
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
      "heading": "6. Fornecimento a terceiros e delegação de processamento",
      "paragraphs": [
        "Como não há dados pessoais armazenados, não há dados pessoais fornecidos a terceiros.",
        "Utilizamos a infraestrutura de hospedagem da {hostingProvider} para a operação do serviço, e durante esse processo, os registros de acesso mencionados no item 3 são processados de acordo com a política do provedor.",
        "Quando começarmos a vender produtos pagos, os pagamentos nacionais serão delegados à Toss Payments, e os pagamentos internacionais à PortOne (PayPal). Informações sobre métodos de pagamento, como números de cartão e contas, serão processadas diretamente por esses fornecedores, e o serviço não receberá essas informações."
      ]
    },
    {
      "heading": "7. Direitos do usuário",
      "paragraphs": [
        "Como não há dados pessoais armazenados, não há destinatários para solicitações de acesso, correção ou exclusão.",
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
        "Se esta política for alterada, a data de entrada em vigor e as alterações serão publicadas nesta página. Se houver mudanças reais no conteúdo do processamento, como a exibição de anúncios ou o início da venda de produtos pagos, informaremos previamente sobre a alteração."
      ]
    }
  ],
  "effectiveLabel": "Data de Vigência"
};

const d5 = {
  "title": "Política de Tratamento de Dados Pessoais",
  "intro": "Saju-Link não armazena informações necessárias para a interpretação de saju (사주). Esta política descreve o que o serviço coleta, o que não é retido e o que é registrado automaticamente.",
  "sections": [
    {
      "heading": "1. Informações que não são armazenadas",
      "paragraphs": [
        "As informações inseridas para a interpretação de saju, como data de nascimento, hora de nascimento, local de nascimento, gênero e nome utilizado, **não são armazenadas em nenhum lugar.** Elas são utilizadas apenas na memória do servidor durante o processamento do pedido e desaparecem com a resposta.",
        "Não são registradas em banco de dados nem mantidas em arquivos separados. Como não há registro de membros, os valores inseridos não estão vinculados a indivíduos específicos."
      ]
    },
    {
      "heading": "2. Informações contidas no link de resultado",
      "paragraphs": [
        "O endereço da tela de resultados contém os valores inseridos codificados. No entanto, esses valores estão localizados após o # no endereço, e, de acordo com os padrões da web, o conteúdo após o # não é enviado pelo navegador ao servidor. Portanto, mesmo ao abrir o link de resultado, apenas o caminho do endereço permanece nos registros de acesso do servidor.",
        "Se você enviar o link de resultado para outra pessoa, essa pessoa também poderá ver o mesmo resultado. Como o link em si contém os valores inseridos, a decisão de compartilhar deve ser feita pelo usuário."
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
        "O serviço em si não utiliza cookies para rastrear usuários.",
        "Atualmente, não há anúncios exibidos neste serviço. Se anúncios forem exibidos no futuro, o provedor de anúncios (por exemplo, Google) poderá usar cookies para exibir anúncios. Nesse caso, esta cláusula será alterada para esclarecer o que mudará antes de iniciar."
      ]
    },
    {
      "heading": "5. Informações armazenadas durante o pagamento",
      "paragraphs": [
        "Ao pagar por produtos pagos (relatório PDF), as informações do pedido são armazenadas para processamento do pagamento e para a preservação de registros de transações conforme a legislação.",
        "**Os valores inseridos na interpretação de saju e o PDF gerado não são armazenados mesmo após o pagamento.** O princípio do item 1 permanece inalterado, independentemente do pagamento. Os itens armazenados são os seguintes, e informações que identificam o usuário, como nome, contato e endereço, não estão incluídas."
      ],
      "bullets": [
        "Número do pedido e identificador de pagamento",
        "Valor do pagamento, moeda e status do pagamento (não pago, pago, cancelado)",
        "Classificação do produto, status de processamento, número de downloads do documento, data do pedido",
        "Idioma da tela no momento do pedido e distinção da região de pagamento (nacional ou internacional)",
        "Período de preservação — De acordo com o Artigo 6 da Lei de Proteção ao Consumidor em Transações Eletrônicas, os registros de pagamento e fornecimento de bens são mantidos por 5 anos, e os registros de reclamações ou disputas dos consumidores são mantidos por 3 anos antes de serem destruídos."
      ]
    },
    {
      "heading": "6. Fornecimento a terceiros e delegação de processamento",
      "paragraphs": [
        "Como não armazenamos informações pessoais que identificam os usuários, não há informações pessoais fornecidas a terceiros. O processamento de pagamentos é delegado aos seguintes prestadores de serviços.",
        "Utilizamos a infraestrutura de hospedagem da {hostingProvider} para a operação do serviço, e, nesse processo, os registros de acesso do item 3 são processados de acordo com a política desse prestador.",
        "Os pagamentos nacionais são processados pela Toss Payments, enquanto os pagamentos internacionais são processados pelo PayPal através da PortOne. Informações de métodos de pagamento, como números de cartão e contas, são processadas diretamente por esses prestadores, e o serviço não recebe nem armazena essas informações."
      ]
    },
    {
      "heading": "7. Direitos dos usuários",
      "paragraphs": [
        "Como não armazenamos os valores inseridos na interpretação de saju, não há destinatário para solicitações de acesso, correção ou exclusão. Os registros de pedidos restantes após o pagamento devem ser mantidos pelo período estipulado pela legislação, e não podem ser excluídos durante esse período; após o término do período, serão destruídos.",
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
        "Se esta política for alterada, a data de entrada em vigor e as alterações serão publicadas nesta página. Se houver mudanças reais no conteúdo do processamento, como a exibição de anúncios ou a venda de produtos pagos, a alteração será comunicada previamente."
      ]
    }
  ],
  "effectiveLabel": "Data de Vigência"
};

const d6 = {
  "title": "Termos de Uso",
  "intro": "Este termo estabelece as condições de uso do Saju-Link (doravante denominado “Serviço”). Ao utilizar o Serviço, considera-se que você concorda com estes termos.",
  "sections": [
    {
      "heading": "1. Natureza do Serviço",
      "paragraphs": [
        "O Serviço aplica as regras da tradicional astrologia coreana (saju) com base na data de nascimento e hora de nascimento inseridas, apresentando o gráfico natal do saju e o equilíbrio dos cinco elementos, a força e fraqueza do dia, e a posição onde o dia e o gráfico natal se encontram como material de referência.",
        "Os pontos e interpretações apresentados são **materiais de referência sob a perspectiva da astrologia tradicional, e não previsões científicas ou afirmações sobre o futuro, saúde ou riqueza de um indivíduo.** Um baixo escore não significa que o dia será ruim, e um alto escore não garante nada.",
        "**As frases de interpretação dos relatórios pagos são escritas por IA generativa.** No entanto, todos os valores, como escore, tronco e força dos cinco elementos, são calculados pelo motor de regras do Serviço, e a IA não altera ou cria esses valores. Se não for possível criar uma interpretação, uma descrição baseada nos valores calculados pelo motor será inserida no mesmo lugar, e o número de páginas do documento e os itens incluídos são exatamente os descritos na seção 3 abaixo."
      ]
    },
    {
      "heading": "2. Taxa de Uso",
      "paragraphs": [
        "A leitura de saju e a consulta da sorte do dia são gratuitas e não requerem registro.",
        "Receber os resultados em um relatório PDF é pago. Os preços e condições são exibidos na seção 3 abaixo e na tela de pagamento."
      ]
    },
    {
      "heading": "3. Produtos Pagos e Reembolso",
      "paragraphs": [
        "O produto pago à venda é **um PDF do ‘Relatório de Vida e Sorte do Ano’**. É a criação de um documento a partir dos resultados exibidos na tela, incluindo conteúdos que não estão na tela.",
        "**9 páginas A4** — capa e resumo, tendências e pontos fortes inatos, a combinação de oito caracteres do gráfico natal e a força dos cinco elementos, a força e fraqueza do dia e a energia necessária (uso do espírito), os dez deuses dos quatro pilares e as posições proeminentes neste saju, as quatro áreas da vida vistas no gráfico natal (riqueza, amor, profissão, saúde) e suas bases, detalhes da correção do tempo de nascimento, e a sorte do ano estão incluídos. Pagamento nacional {priceDomestic} (incluindo IVA), pagamento internacional {priceGlobal}.",
        "**A sorte do dia não está incluída neste documento.** Como os valores mudam diariamente, são fornecidos gratuitamente na tela, e este documento é composto pela interpretação do gráfico natal que não muda ao longo da vida e pela sorte do ano.",
        "O pagamento nacional pode ser feito através da Toss Payments usando cartões de crédito, cartões de débito e pagamentos simplificados (Toss Pay, Kakao Pay, Naver Pay, Payco, etc.), e o pagamento internacional é feito via PayPal através da PortOne. O valor final é o que aparece na tela de pagamento.",
        "**O Serviço não armazena os valores inseridos pelo usuário nem os arquivos PDF gerados.** Assim que o pagamento é aprovado, o documento é gerado e enviado, e nada é mantido no servidor. Portanto, o arquivo baixado deve ser mantido pelo usuário.",
        "Em caso de interrupção do download ou perda do arquivo, é possível baixar novamente **até 5 vezes** com o mesmo pedido. No entanto, se os valores inseridos forem perdidos fora da tela de resultados, não será possível recriá-los, então, por favor, salve o arquivo imediatamente após o pagamento."
      ],
      "bullets": [
        "**Antes de o download ser iniciado após o pagamento,** você pode cancelar a qualquer momento e receber um reembolso total.",
        "**Após a conclusão do download,** a desistência por simples mudança de ideia é restrita. É um conteúdo digital que é fornecido imediatamente e não pode ser restaurado, o que se enquadra nas razões de restrição de desistência conforme o Artigo 17, Parágrafo 2 da Lei de Proteção ao Consumidor em Comércio Eletrônico.",
        "**Se o documento não for gerado devido a erro do sistema, o arquivo não abrir ou o valor do pagamento for diferente do pedido,** será tratado como reemissão ou reembolso total.",
        "**Reclamações sobre o conteúdo dos resultados** não são motivos para reembolso. A leitura de saju é um material de referência sob a perspectiva da astrologia tradicional, e sua natureza é informada antes do pagamento (seção 1 acima).",
        "Requerimentos de reemissão após o uso de todas as 5 vezes não são motivos para reembolso.",
        "**Se um menor efetuar um pagamento sem o consentimento do responsável legal,** ele ou o responsável legal podem cancelar esse pagamento. Informe-nos através dos contatos abaixo para que possamos reembolsá-lo."
      ]
    },
    {
      "heading": "4. Sobre os Resultados dos Cálculos",
      "paragraphs": [
        "Todos os pontos são calculados de acordo com regras públicas, portanto, se os mesmos valores forem inseridos, sempre resultarão nos mesmos resultados.",
        "Se a hora de nascimento não for inserida, o cálculo será feito excluindo o tronco (시주), portanto, os resultados podem variar. Quanto mais preciso for a escolha do local de nascimento, mais exato será o cálculo do tronco.",
        "O cálculo do calendário lunar utiliza bibliotecas de cálculo públicas, e os resultados podem variar de acordo com o tratamento de períodos e fusos horários."
      ]
    },
    {
      "heading": "5. Responsabilidade do Usuário",
      "paragraphs": [
        "O usuário pode inserir a data de nascimento de outra pessoa, mas não deve usar os resultados de forma a prejudicar terceiros.",
        "Não utilize os resultados do Serviço como base para decisões que afetem os direitos de terceiros, como casamento, divórcio, contratação ou transações. O Serviço não foi criado para tais fins."
      ]
    },
    {
      "heading": "6. Atos Proibidos",
      "paragraphs": [
        "Os seguintes atos não são permitidos."
      ],
      "bullets": [
        "Enviar solicitações excessivas com ferramentas automatizadas que interfiram na operação do Serviço",
        "Apresentar os resultados do Serviço como se fossem fatos ou resultados de avaliações de especialistas",
        "Duplicar ou modificar o Serviço para fornecer um serviço idêntico"
      ]
    },
    {
      "heading": "7. Isenção de Responsabilidade",
      "paragraphs": [
        "O Serviço fornece apenas materiais de referência e não se responsabiliza por decisões tomadas pelo usuário com base nos resultados e suas consequências.",
        "Em caso de interrupção do Serviço devido a razões fora de controle, como desastres naturais ou falhas do provedor de infraestrutura, não nos responsabilizamos por danos decorrentes."
      ]
    },
    {
      "heading": "8. Direitos de Propriedade Intelectual",
      "paragraphs": [
        "Os direitos sobre a tela do Serviço, frases e implementações das regras de cálculo pertencem ao operador. O usuário pode salvar ou compartilhar os resultados para fins pessoais."
      ]
    },
    {
      "heading": "9. Alterações nos Termos e Lei Aplicável",
      "paragraphs": [
        "Se os termos forem alterados, serão publicados nesta página com a data de entrada em vigor.",
        "Estes termos são regidos pela lei da República da Coreia, e disputas relacionadas ao uso do Serviço seguirão os procedimentos estabelecidos pela legislação aplicável."
      ]
    }
  ],
  "effectiveLabel": "Data de Vigência"
};

const d7 = {
  "title": "Política de Tratamento de Dados Pessoais",
  "intro": "Saju-Link não armazena informações necessárias para a leitura de saju (사주). Esta política descreve o que o serviço coleta, o que não é retido e o que é registrado automaticamente.",
  "sections": [
    {
      "heading": "1. Informações que não são armazenadas",
      "paragraphs": [
        "As informações inseridas para a leitura de saju, como data de nascimento, hora de nascimento, local de nascimento, gênero e nome utilizado, **não são armazenadas em lugar algum.** Elas são utilizadas apenas na memória do servidor durante o processamento do pedido e desaparecem com a resposta.",
        "Não são registradas em banco de dados, nem mantidas em arquivos separados. Como não há registro de membro, os valores inseridos não estão vinculados a indivíduos específicos."
      ]
    },
    {
      "heading": "2. Informações contidas no link de resultado",
      "paragraphs": [
        "O endereço da tela de resultados contém os valores inseridos codificados. No entanto, esses valores estão localizados após o # do endereço, e, de acordo com os padrões da web, o conteúdo após o # não é enviado pelo navegador ao servidor. Portanto, mesmo que o link de resultado seja aberto, apenas o caminho do endereço permanece nos registros de acesso do servidor.",
        "Se o link de resultado for enviado a outra pessoa, essa pessoa também poderá ver o mesmo resultado. Como o link em si contém os valores inseridos, a decisão de compartilhar deve ser feita pelo usuário."
      ]
    },
    {
      "heading": "3. Informações coletadas automaticamente",
      "paragraphs": [
        "Não há informações coletadas pelo serviço para identificar o usuário. No entanto, registros mínimos necessários para a operação do serviço web são automaticamente mantidos pelo provedor de infraestrutura."
      ],
      "bullets": [
        "Endereço IP de acesso, data e hora de acesso, tipo de navegador e outros registros gerais de acesso ao servidor",
        "Informações do país — usadas apenas para determinar automaticamente o idioma da tela e não são armazenadas"
      ]
    },
    {
      "heading": "4. Cookies e publicidade",
      "paragraphs": [
        "O serviço em si não utiliza cookies para identificar ou rastrear usuários. As informações inseridas na leitura de saju não são transmitidas a anunciantes.",
        "Este serviço exibe anúncios através do Google AdSense. Durante esse processo, as seguintes ações ocorrem."
      ],
      "bullets": [
        "Fornecedores terceiros, incluindo o Google, podem armazenar ou ler cookies no navegador do usuário.",
        "O Google utiliza cookies com base no histórico de visitas a este e a outros sites para exibir anúncios.",
        "Os usuários podem desativar anúncios personalizados nas configurações de anúncios do Google (google.com/settings/ads). Mesmo se desativados, os anúncios continuarão a ser exibidos, mas com menor relevância para o usuário.",
        "Anúncios personalizados de fornecedores terceiros podem ser desativados de uma só vez em aboutads.info/choices.",
        "Há também maneiras de bloquear cookies nas configurações do navegador.",
        "Usuários da Área Econômica Europeia, Reino Unido e Suíça são questionados previamente sobre o consentimento para o uso de cookies de publicidade."
      ]
    },
    {
      "heading": "5. Informações armazenadas durante o pagamento",
      "paragraphs": [
        "Ao efetuar o pagamento por produtos pagos (relatório PDF), as informações do pedido são armazenadas para processamento do pagamento e para a preservação dos registros de transações conforme a legislação.",
        "**Os valores inseridos na leitura de saju e o PDF gerado não são armazenados, mesmo após o pagamento.** O princípio do item 1 se aplica independentemente da realização do pagamento. Os itens armazenados são os seguintes, e não incluem informações que identifiquem o usuário, como nome, contato e endereço."
      ],
      "bullets": [
        "Número do pedido e identificador de pagamento",
        "Valor do pagamento, moeda e status do pagamento (não pago, pago, cancelado)",
        "Classificação do produto, status de processamento, número de downloads do documento, data e hora do pedido",
        "Idioma da tela no momento do pedido e classificação da região de pagamento (nacional ou internacional)",
        "Período de preservação — De acordo com o Artigo 6 da Lei de Proteção ao Consumidor em Transações Eletrônicas, os registros de pagamento e fornecimento de bens são mantidos por 5 anos, e os registros de reclamações ou disputas dos consumidores são mantidos por 3 anos antes de serem destruídos."
      ]
    },
    {
      "heading": "6. Fornecimento a terceiros e delegação de processamento",
      "paragraphs": [
        "Como não armazenamos dados pessoais que identifiquem o usuário, também não fornecemos dados pessoais a terceiros. O processamento de pagamentos é delegado aos seguintes fornecedores.",
        "Utilizamos a infraestrutura de hospedagem da {hostingProvider} para a operação do serviço, e, nesse processo, os registros de acesso do item 3 são processados de acordo com a política desse fornecedor.",
        "Os pagamentos nacionais são processados pela Toss Payments, enquanto os pagamentos internacionais são processados pelo PayPal através da PortOne. Informações de métodos de pagamento, como números de cartão e contas, são processadas diretamente por esses fornecedores, e o serviço não as recebe nem as armazena."
      ]
    },
    {
      "heading": "7. Direitos do usuário",
      "paragraphs": [
        "Como não armazenamos os valores inseridos na leitura de saju, não há um destinatário para solicitações de acesso, correção ou exclusão. Os registros de pedidos restantes após o pagamento devem ser mantidos pelo período estipulado pela legislação, e não podem ser excluídos durante esse período; após o término do período, serão destruídos.",
        "Os usuários podem eliminar todos os vestígios de entrada simplesmente apagando o link de resultado na barra de endereços do navegador.",
        "Se houver dúvidas relacionadas ao uso do serviço, entre em contato através dos dados abaixo."
      ]
    },
    {
      "heading": "8. Dados pessoais de crianças",
      "paragraphs": [
        "Este serviço não é direcionado a crianças menores de 14 anos e não coleta dados pessoais de crianças."
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
        "Caso esta política seja alterada, a data de entrada em vigor e as alterações serão publicadas nesta página. Se houver mudanças reais no conteúdo do processamento, como o início da exibição de anúncios ou a venda de produtos pagos, informaremos previamente sobre a alteração."
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
