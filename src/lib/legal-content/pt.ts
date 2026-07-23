import { companyInfo, LEGAL_EFFECTIVE_DATE } from "@/lib/company";
import type { LegalLocaleContent } from "./types";

const content: LegalLocaleContent = {
  labels: {
    effectiveDate: "Data de vigência",
    referenceDate: "Data de referência",
    login: "Entrar",
    close: "Fechar",
  },
  documents: {
    terms: {
      title: "Termos de Serviço",
      description: `Estes termos descrevem as condições de uso e o escopo do serviço ${companyInfo.serviceName}.`,
      effectiveDate: LEGAL_EFFECTIVE_DATE,
      sections: [
        {
          title: "1. Natureza do Serviço",
          paragraphs: [
            "Naming-Link é um estúdio de nomeação baseado em IA que oferece os seguintes quatro serviços: ① Correspondência de significados de caracteres chineses para nomes em coreano ② Conversão de nomes em coreano para nomes globais ③ Conversão de nomes estrangeiros para nomes coreanos ④ Transcrição de nomes globais em coreano de acordo com a pronúncia.",
            "Os resultados são materiais de referência que ajudam na nomeação e interpretação, e não garantem a possibilidade de registro oficial, como registro de relações familiares, passaportes, vistos, marcas registradas, documentos legais, etc.",
          ],
        },
        {
          title: "2. Uso de Membros e Não Membros",
          paragraphs: [
            "A análise de nomes e a visualização de candidatos com recompensa publicitária podem ser utilizadas por não membros. O registro ou login é solicitado apenas para funções que requerem conta, como pedidos de produtos e verificação do histórico de pedidos.",
          ],
        },
        {
          title: "3. Resultados de IA e Responsabilidade de Revisão",
          paragraphs: [
            "Os resultados recomendados pela IA incluem referências linguísticas, culturais e tradicionais. Os usuários devem verificar a adequação por meio de instituições relevantes, especialistas, usuários locais e revisões legais e de marcas antes da escolha final do nome.",
          ],
        },
        {
          title: "4. Serviços Pagos",
          paragraphs: [
            "Os detalhes do serviço de correspondência de significados de caracteres chineses são os seguintes: ① Até 5 candidatos com descrição detalhada e resumo de caracteres: ₩2.900 ② Até 10 candidatos com descrição detalhada expandida, resumo de caracteres e PDF para armazenamento: ₩4.900 ③ Até 10 candidatos com detalhes, resumo de caracteres, análise de destino e cinco elementos e PDF para armazenamento: ₩9.900.",
            "Nos serviços de conversão de nomes globais, conversão de nomes coreanos e transcrição de pronúncia em coreano, pode ser oferecido um produto que revela todos os candidatos restantes de uma só vez, sem anúncios (pagamento nacional ₩990, pagamento internacional US$1.99). Antes da ativação da função de pagamento, apenas a visualização com recompensa publicitária está disponível.",
            "Para usuários globais, os produtos digitais incluem ④ Relatório completo em PDF de nomes em coreano (US$9.99): arte do nome da fonte escolhida, interpretação de significados e referências de cinco elementos e destino ⑤ Arte em PDF de conversão de pronúncia em coreano (US$2.99): arte do nome da fonte escolhida e guia de pronúncia ⑥ Pacote de arte de nomes em PDF (US$1.99): fornecido como arte em diferentes fontes para um nome escolhido. Os preços de cada produto e o número de fontes aplicáveis seguem os valores informados na tela.",
            "Os relatórios detalhados pagos e os resultados de análise, bem como os arquivos PDF, podem ser visualizados e baixados novamente por 24 horas após a conclusão do pagamento, e serão excluídos automaticamente após o período de armazenamento.",
            "Produtos físicos como carimbos de nome são oferecidos a preços e condições específicas, como ₩39.000 no país e US$34.99 no exterior (incluindo frete internacional). Todos os produtos pagos informam o conteúdo do produto, preço, forma de fornecimento e condições de reembolso na tela antes do pagamento.",
          ],
        },
        {
          title: "5. Serviço de Recompensa Publicitária",
          paragraphs: [
            "O desbloqueio de candidatos por meio da visualização de anúncios só se aplica quando a verificação de recompensa normal do fornecedor de anúncios foi concluída. A reprodução automatizada de anúncios, manipulação de recompensas e solicitações repetidas anormais podem ser limitadas.",
          ],
        },
        {
          title: "6. Atos Proibidos",
          paragraphs: [
            "É proibido inserir informações pessoais de terceiros sem autorização, gerar nomes com o objetivo de discriminação, ódio ou falsificação, fazer solicitações excessivas automatizadas, causar interrupções no serviço e exibir certificações oficiais falsas dos resultados.",
          ],
        },
        {
          title: "7. Limitação de Responsabilidade",
          paragraphs: [
            "A empresa não será responsável por danos indiretos, perda de lucros esperados, recusa de registro oficial ou disputas de terceiros decorrentes do uso dos resultados recomendados pela IA, a menos que haja dolo ou negligência grave.",
          ],
        },
        {
          title: "8. Contato",
          paragraphs: [
            "Consultas sobre serviços: platforest.inc@gmail.com",
          ],
        },
      ],
    },
    privacy: {
      title: "Política de Privacidade",
      description: `Esta política descreve como o ${companyInfo.serviceName} trata os dados pessoais.`,
      effectiveDate: LEGAL_EFFECTIVE_DATE,
      sections: [
        {
          title: "1. Itens de Dados Pessoais Processados",
          paragraphs: [
            "Ao utilizar o serviço de nome para não-membros, o nome, data de nascimento, hora de nascimento, país, idioma, finalidade de uso e dicas de pronúncia são processados temporariamente durante o processo de geração de resultados de análise, mas o conteúdo inserido e os resultados gerados não são armazenados no banco de dados do serviço.",
            "Durante o registro e login de membros, o endereço de e-mail e o histórico de login (histórico de autenticação) são processados.",
            "Ao pagar por relatórios detalhados pagos, as informações de identificação do pedido, status de pagamento e os dados de entrada e resultados de análise necessários para a geração do relatório são processados durante o período de retenção (24 horas após o pagamento). As informações do meio de pagamento, como número do cartão, são processadas diretamente pela empresa de processamento de pagamentos, e a empresa não as armazena.",
            "Somente ao utilizar a função de pedido de mercadorias, o nome do comprador, e-mail, contato, endereço de entrega, status de pagamento e informações de processamento do pedido podem ser processados adicionalmente.",
            "Para garantir a estabilidade do serviço e prevenir abusos, hashes de visitantes não identificáveis que mudam diariamente, hora do pedido, tipo de serviço, número de usos gratuitos, tempo de resposta do AI, status de processamento e eventos de recompensa publicitária podem ser processados como logs operacionais mínimos.",
          ],
        },
        {
          title: "2. Finalidade do Processamento de Dados Pessoais",
          paragraphs: [
            "Os dados pessoais são processados para recomendações de nomes baseadas em valores de entrada, análise de pronúncia, análise de idiomas e culturas por país, limitação de uso gratuito, verificação de recompensas publicitárias, atendimento ao cliente, processamento de pagamentos e entregas, e prevenção de uso indevido.",
          ],
        },
        {
          title: "3. Armazenamento e Destruição",
          paragraphs: [
            "As entradas de análise e resultados são armazenados na conta apenas se o membro logado optar explicitamente por salvar os resultados, e serão destruídos se o membro os excluir ou se o propósito de armazenamento for encerrado. As entradas e resultados de não-membros e de membros que não optaram por salvar não são armazenados.",
            "As entradas, resultados de análise e arquivos PDF de relatórios detalhados pagos serão automaticamente excluídos após 24 horas da conclusão do pagamento. Os registros de transações de pagamento e pedidos são armazenados separadamente de acordo com o período legal de retenção estabelecido pela legislação aplicável.",
            "As informações detalhadas de entrega serão destruídas ou desidentificadas após o período necessário para o processamento do pedido e para a resposta a devoluções e disputas.",
          ],
        },
        {
          title: "4. Fornecimento a Terceiros e Subcontratação de Processamento",
          paragraphs: [
            "Para a operação do serviço, informações necessárias podem ser processadas ou subcontratadas para Supabase (banco de dados e autenticação), Vercel (hospedagem), OpenAI API (análise de IA), redes de publicidade, empresas de processamento de pagamentos (PortOne) e parceiros de entrega e produção.",
          ],
        },
        {
          title: "5. Transferência Internacional de Dados Pessoais",
          paragraphs: [
            "A empresa transfere (subcontrata o processamento) dados pessoais para o exterior conforme descrito abaixo para fornecer o serviço. A transferência é realizada por meio de transmissão através de redes de comunicação.",
            "① OpenAI, L.L.C. (Estados Unidos) — Itens transferidos: nome, data de nascimento e hora de nascimento, gênero, país, idioma e outros valores de entrada para análise — Finalidade da transferência: análise de nomes, pronúncias e significados baseados em IA — Período de retenção e uso: durante o período de fornecimento do serviço (os dados de entrada não são utilizados para treinamento de modelos de acordo com a política da OpenAI e são excluídos após um máximo de 30 dias para fins de monitoramento de abusos).",
            "② Supabase, Inc. (Estados Unidos) — Itens transferidos: informações sobre status de pedidos e pagamentos, e-mail de membros, entradas e resultados de relatórios pagos (24 horas após o pagamento), nome do comprador, contato e endereço de entrega ao fazer pedidos de mercadorias — Finalidade da transferência: banco de dados, autenticação e armazenamento — Período de retenção e uso: durante o período de fornecimento do serviço ou até o período de retenção de cada item.",
            "③ Vercel, Inc. (Estados Unidos) — Itens transferidos: informações de acesso e solicitação transmitidas durante o uso do serviço — Finalidade da transferência: hospedagem de aplicativos — Período de retenção e uso: durante o período de fornecimento do serviço.",
            "Os usuários podem recusar o consentimento para a transferência internacional de dados pessoais, mas como esse processamento é essencial para a prestação do serviço, a recusa pode resultar em restrições ao uso do serviço.",
          ],
        },
        {
          title: "6. Direitos dos Usuários",
          paragraphs: [
            "Os usuários podem solicitar acesso, correção, exclusão, suspensão do processamento e revogação do consentimento dos dados pessoais. As solicitações devem ser enviadas por e-mail para o atendimento ao cliente e serão processadas após verificação da identidade.",
          ],
        },
        {
          title: "7. Responsável pela Proteção de Dados Pessoais",
          paragraphs: [
            "Responsável: Gwak Eun-ha",
            "E-mail: platforest.inc@gmail.com",
          ],
        },
      ],
    },
    refund: {
      title: "Política de Reembolso e Cancelamento",
      description:
        "Esta política descreve os critérios de cancelamento e reembolso de produtos digitais e produtos personalizados sob encomenda.",
      effectiveDate: LEGAL_EFFECTIVE_DATE,
      sections: [
        {
          title: "1. Princípios Comuns",
          paragraphs: [
            "Quando a funcionalidade de pagamento é ativada, o escopo de reembolso pode variar de acordo com a forma de fornecimento de cada produto, o momento de início da produção e a possibilidade de download. As condições específicas serão informadas na tela do produto antes do pagamento.",
          ],
        },
        {
          title: "2. Relatório Detalhado de Hanzi (₩2.900·₩4.900·₩9.900)",
          paragraphs: [
            "O cancelamento é possível antes do início da geração da análise detalhada pela IA após o pagamento. Após a conclusão da geração da análise e a possibilidade de visualização ou download, o reembolso por simples mudança de ideia pode ser restrito.",
            "Em caso de erro de conteúdo, falha do sistema que resulte em falha na geração, ou discrepância no valor pago, será tratado como reemissão ou reembolso. O término do período de armazenamento (24 horas após o pagamento) que resulta na finalização do download não é considerado motivo para reembolso.",
          ],
        },
        {
          title: "3. Divulgação Total de Candidatos (₩990 no país · US$1.99 no exterior)",
          paragraphs: [
            "A divulgação total de candidatos para o serviço de conversão de nomes globais, conversão de nomes coreanos e transcrição fonética em hangul é um conteúdo digital fornecido imediatamente após o pagamento. O cancelamento é possível antes do início da visualização dos candidatos, e após a visualização, o reembolso por simples mudança de ideia pode ser restrito.",
            "Em caso de erro do sistema que impeça a divulgação normal dos candidatos, será tratado como reemissão ou reembolso.",
          ],
        },
        {
          title: "4. Produto Digital PDF Global (US$9.99·US$2.99·US$1.99)",
          paragraphs: [
            "O relatório abrangente de nomes em hangul (US$9.99), a arte de conversão fonética em hangul (US$2.99) e o pacote de arte de nomes (US$1.99) são conteúdos digitais gerados após o pagamento. O cancelamento é possível antes do início da geração do PDF, e após a conclusão da geração e a possibilidade de download, o reembolso por simples mudança de ideia pode ser restrito.",
            "Em caso de falha na geração, erro de conteúdo ou discrepância no valor pago, será tratado como reemissão ou reembolso. O término do período de armazenamento (24 horas após o pagamento) que resulta na finalização do download não é considerado motivo para reembolso.",
          ],
        },
        {
          title: "5. Produtos Personalizados (como carimbos de nome)",
          paragraphs: [
            "Produtos personalizados (como carimbos de nome) (₩39.000 no país · US$34.99 no exterior, incluindo frete internacional) podem ser cancelados até o início da produção. Após o início da produção, como a frase de gravação é confirmada como personalizada, o reembolso por simples mudança de ideia pode ser restrito, e erros de digitação, danos, produção incorreta ou problemas de entrega serão tratados de forma adequada entre troca, reedição ou reembolso após verificação.",
          ],
        },
        {
          title: "5. Desbloqueio por Anúncios",
          paragraphs: [
            "Os benefícios de visualização de anúncios não são produtos pagos. Em caso de falha na rede de anúncios que resulte na não concessão de recompensas, será tratado como nova tentativa dentro do serviço ou consulta ao atendimento ao cliente.",
          ],
        },
        {
          title: "6. Contato",
          paragraphs: [
            "Consultas sobre reembolso: platforest.inc@gmail.com",
          ],
        },
      ],
    },
    pricing: {
      title: "Guia de Preços",
      description:
        "Este guia descreve o escopo dos serviços gratuitos e os preços dos produtos pagos.",
      effectiveDate: LEGAL_EFFECTIVE_DATE,
      sections: [
        {
          title: "Análise Básica (Gratuita)",
          paragraphs: [
            "A análise básica dos quatro serviços de correspondência de significados de caracteres chineses, conversão de nomes globais, conversão de nomes coreanos e transcrição fonética em hangul é oferecida gratuitamente para não-membros, podendo haver limitações na quantidade de uso diário.",
          ],
        },
        {
          title: "Uso com Recompensa Publicitária",
          paragraphs: [
            "O desbloqueio de candidatos após assistir a anúncios é um benefício publicitário oferecido sem pagamento adicional. Um candidato é desbloqueado por cada anúncio assistido. A disponibilidade pode variar de acordo com o estoque de anúncios, país, dispositivo ou políticas do fornecedor de anúncios.",
          ],
        },
        {
          title: "Produto Detalhado de Correspondência de Significados de Caracteres Chineses",
          paragraphs: [
            "Descrição detalhada de até 5 candidatos e resumo abrangente de caracteres chineses: 2.900₩",
            "Descrição detalhada expandida de até 10 candidatos, resumo abrangente de caracteres chineses e PDF para download: 4.900₩",
            "Detalhes de até 10 candidatos, resumo abrangente de caracteres chineses, análise de quatro pilares e cinco elementos e PDF para download: 9.900₩",
            "Relatórios pagos e PDFs podem ser visualizados e baixados novamente por 24 horas após o pagamento, sendo automaticamente excluídos após esse período.",
          ],
        },
        {
          title: "Divulgação Total de Candidatos",
          paragraphs: [
            "Divulgação de todos os candidatos restantes nos serviços de conversão de nomes globais, conversão de nomes coreanos e transcrição fonética em hangul, sem anúncios, de uma só vez: pagamento nacional 990₩, pagamento internacional US$1.99 (função de pagamento em preparação)",
          ],
        },
        {
          title: "Produto Digital Global em PDF",
          paragraphs: [
            "Relatório abrangente em PDF de nomes em hangul (arte de nomes recomendados, interpretação de significados e referência de quatro pilares e cinco elementos): US$9.99",
            "Arte em PDF de conversão fonética em hangul (arte de nome em fonte escolhida e guia de pronúncia): US$2.99",
            "Pacote de arte de nome em PDF (arte de um nome escolhido em fontes selecionadas): US$1.99",
            "Os preços e o número de fontes aplicáveis seguem os valores informados na tela, e o PDF pode ser baixado novamente por 24 horas após o pagamento, sendo automaticamente excluído após esse período. (função de pagamento em preparação)",
          ],
        },
        {
          title: "Produtos de Nome em Hangul",
          paragraphs: [
            "Carimbo de nome: 39.000₩ no país · US$34.99 no exterior (incluindo frete internacional). Outros produtos físicos têm preços, custos de envio e prazos de produção informados separadamente.",
          ],
        },
        {
          title: "Informações Antes do Pagamento Formal",
          paragraphs: [
            "Após a aprovação do PG, registro de comércio eletrônico e confirmação das condições de parceria de produção, o valor real do pagamento, custos de envio, prazo de produção e condições de reembolso serão novamente informados na tela do produto.",
          ],
        },
      ],
    },
  },
};

export default content;
