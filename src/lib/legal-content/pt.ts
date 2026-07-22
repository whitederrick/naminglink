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
            "O Naming-Link é um estúdio de nomes baseado em IA que oferece quatro serviços: (1) correspondência de nomes coreanos com hanja (caracteres chineses) de significado adequado, (2) conversão de nomes coreanos em nomes globais, (3) conversão de nomes estrangeiros em nomes coreanos e (4) transcrição de nomes globais em hangul (alfabeto coreano) conforme a pronúncia.",
            "Os resultados são material de referência para apoiar a escolha e a interpretação de nomes. Eles não garantem a elegibilidade para registro oficial, como registro civil familiar, passaportes, vistos, marcas registradas ou documentos legais.",
          ],
        },
        {
          title: "2. Uso por Membros e Não Membros",
          paragraphs: [
            "A análise de nomes e o desbloqueio de candidatos mediante recompensa por anúncios estão disponíveis também para não membros. O cadastro ou o login é solicitado apenas para funcionalidades que exigem uma conta, como o pedido de produtos personalizados e a consulta do histórico de pedidos.",
          ],
        },
        {
          title: "3. Resultados de IA e Responsabilidade de Verificação",
          paragraphs: [
            "As recomendações da IA incluem referências linguísticas, culturais e tradicionais. Antes de escolher um nome definitivo, o usuário deve confirmar sua adequação por meio de órgãos competentes, especialistas, falantes locais e análise jurídica ou de marcas registradas.",
          ],
        },
        {
          title: "4. Serviços Pagos",
          paragraphs: [
            "O serviço de correspondência de significados de hanja oferece os seguintes produtos detalhados: (1) explicações detalhadas de até 5 candidatos e análise abrangente de hanja: ₩2,900 (KRW); (2) explicações detalhadas ampliadas de até 10 candidatos, análise abrangente de hanja e PDF para colecionar: ₩4,900; (3) detalhes de até 10 candidatos, análise abrangente de hanja, análise de saju (Quatro Pilares) e os Cinco Elementos, e PDF para colecionar: ₩9,900.",
            "Nos serviços de conversão de nomes globais, conversão de nomes coreanos e transcrição de pronúncia em hangul, poderá ser oferecido um produto que revela de uma só vez, sem anúncios, todos os candidatos restantes (US$1.99). Antes da ativação das funcionalidades de pagamento, é oferecido apenas o desbloqueio mediante recompensa por anúncios.",
            "Os relatórios detalhados pagos, os resultados de análise e os arquivos PDF podem ser visualizados e baixados novamente por 24 horas após a conclusão do pagamento e são excluídos automaticamente ao término do período de retenção.",
            "Produtos físicos, como produtos personalizados com nomes coreanos, podem ser oferecidos com preços e condições próprios. Para todo produto pago, o conteúdo do produto, o preço, a forma de entrega e as condições de reembolso são informados na tela antes do pagamento.",
          ],
        },
        {
          title: "5. Serviços com Recompensa por Anúncios",
          paragraphs: [
            "O desbloqueio de candidatos mediante a exibição de anúncios só é aplicado após a confirmação regular da recompensa pelo provedor de anúncios. A reprodução automatizada de anúncios, a manipulação de recompensas e solicitações repetidas anormais podem ser restringidas.",
          ],
        },
        {
          title: "6. Condutas Proibidas",
          paragraphs: [
            "São proibidos: a inserção de dados pessoais de terceiros sem autorização, a geração de nomes com finalidade discriminatória, de ódio ou de falsidade ideológica, solicitações automatizadas excessivas, a provocação de falhas no serviço e a apresentação falsa dos resultados como oficialmente certificados.",
          ],
        },
        {
          title: "7. Limitação de Responsabilidade",
          paragraphs: [
            "Salvo em casos de dolo ou culpa grave, a empresa não se responsabiliza por danos indiretos, perda de lucros esperados, recusa de registro oficial ou disputas com terceiros decorrentes do uso das recomendações da IA.",
          ],
        },
        {
          title: "8. Contato",
          paragraphs: [`Dúvidas sobre o serviço: ${companyInfo.email}`],
        },
      ],
    },
    privacy: {
      title: "Política de Privacidade",
      description: `Esta política descreve como o ${companyInfo.serviceName} trata os dados pessoais.`,
      effectiveDate: LEGAL_EFFECTIVE_DATE,
      sections: [
        {
          title: "1. Dados Pessoais Tratados",
          paragraphs: [
            "Ao utilizar os serviços de nomes como não membro, o nome, a data e a hora de nascimento, o país, o idioma, a finalidade de uso e as dicas de pronúncia são tratados temporariamente durante a geração dos resultados da análise, mas os dados inseridos e os resultados gerados não são armazenados no banco de dados do serviço.",
            "Ao pagar por um relatório detalhado pago, os identificadores do pedido, o status do pagamento e os dados de entrada e resultados de análise necessários para gerar o relatório são tratados durante o período de retenção (24 horas após o pagamento). Os dados do meio de pagamento, como o número do cartão, são tratados diretamente pela operadora de pagamento; a empresa não os armazena.",
            "Somente quando a funcionalidade de pedido de produtos personalizados é utilizada, o nome do comprador, o e-mail, o telefone, o endereço de entrega, o status do pagamento e as informações de processamento do pedido podem ser tratados adicionalmente.",
            "Para a estabilidade do serviço e a prevenção de abusos, podemos manter registros operacionais mínimos: um hash de visitante desidentificado que muda diariamente, o horário da solicitação, o tipo de serviço, o número de usos gratuitos, o consumo de tokens de IA, o tempo de resposta, o status de processamento e os eventos de exibição de anúncios e de recompensa.",
          ],
        },
        {
          title: "2. Finalidades do Tratamento",
          paragraphs: [
            "Os dados pessoais são tratados para: recomendação de nomes com base nos dados inseridos, análise de pronúncia, análise linguística e cultural por país, limitação do uso gratuito, verificação de recompensas por anúncios, atendimento a consultas de clientes, processamento de pagamentos e entregas, e prevenção de uso fraudulento.",
          ],
        },
        {
          title: "3. Retenção e Eliminação",
          paragraphs: [
            "Os dados de entrada e os resultados da análise são armazenados na conta somente quando um membro conectado opta expressamente por salvá-los, e são eliminados quando o membro os exclui ou quando a finalidade da retenção termina. Os dados e resultados de não membros e de membros que não optaram por salvar não são armazenados.",
            "Os dados de entrada, os resultados de análise e os arquivos PDF dos relatórios detalhados pagos são excluídos automaticamente 24 horas após a conclusão do pagamento. Os registros de transações de pagamento e pedidos são conservados separadamente pelos prazos legais previstos na legislação aplicável.",
            "Os dados detalhados de entrega são eliminados ou desidentificados após o período necessário para o processamento do pedido, devoluções e resolução de disputas.",
          ],
        },
        {
          title: "4. Compartilhamento com Terceiros e Operadores",
          paragraphs: [
            "Para a operação do serviço, as informações necessárias podem ser tratadas por, ou confiadas a, Supabase (banco de dados e autenticação), Vercel (hospedagem), OpenAI API (análise de IA), redes de publicidade, operadora de pagamento (PortOne) e parceiros de entrega e produção.",
          ],
        },
        {
          title: "5. Possibilidade de Transferência Internacional",
          paragraphs: [
            "Em algumas etapas do tratamento, como hospedagem em nuvem, autenticação, chamadas de API de IA, publicidade e envio de e-mails, os dados pessoais podem ser processados em servidores no exterior. Os países de destino, os operadores, as finalidades e os períodos de retenção serão informados em detalhe assim que os provedores de serviço forem definidos.",
          ],
        },
        {
          title: "6. Direitos do Usuário",
          paragraphs: [
            "O usuário pode solicitar o acesso, a correção, a exclusão e a suspensão do tratamento de seus dados pessoais, bem como a revogação do consentimento. As solicitações são recebidas pelo e-mail da central de atendimento e processadas após a verificação de identidade.",
          ],
        },
        {
          title: "7. Encarregado de Proteção de Dados",
          paragraphs: [
            `Encarregado: ${companyInfo.privacyOfficer}`,
            `E-mail: ${companyInfo.email}`,
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
          title: "1. Princípios Gerais",
          paragraphs: [
            "Quando as funcionalidades de pagamento forem ativadas, o alcance do reembolso poderá variar conforme a forma de entrega de cada produto, o momento de início da produção e a ocorrência de download. As condições específicas são informadas na tela do produto antes do pagamento.",
          ],
        },
        {
          title: "2. Relatórios Detalhados de Hanja (₩2,900 / ₩4,900 / ₩9,900)",
          paragraphs: [
            "Após o pagamento, o cancelamento é possível enquanto a geração da análise detalhada por IA não tiver começado. Depois que a geração for concluída e a visualização ou o download se tornarem possíveis, o reembolso por simples desistência poderá ser restringido.",
            "Se forem confirmados erros de conteúdo, falha na geração por problema do sistema ou divergência no valor pago, o relatório será reemitido ou o valor será reembolsado. O encerramento do download pelo término do período de retenção (24 horas após o pagamento) não constitui motivo de reembolso.",
          ],
        },
        {
          title: "3. Revelação de Todos os Candidatos (US$1.99)",
          paragraphs: [
            "A revelação de todos os candidatos nos serviços de conversão de nomes globais, conversão de nomes coreanos e transcrição de pronúncia em hangul é um conteúdo digital fornecido imediatamente após o pagamento. O cancelamento é possível antes do início da visualização dos candidatos; após a visualização, o reembolso por simples desistência poderá ser restringido.",
            "Se os candidatos não forem revelados corretamente devido a um erro do sistema, o fornecimento será refeito ou o valor será reembolsado.",
          ],
        },
        {
          title: "4. Produtos Personalizados sob Encomenda",
          paragraphs: [
            "Os itens personalizados podem ser cancelados até o início da produção. Após o início da produção, o reembolso por simples desistência poderá ser restringido; erros de grafia, danos, defeitos de fabricação ou problemas de entrega são resolvidos, após verificação, por troca, nova produção ou reembolso, conforme apropriado.",
          ],
        },
        {
          title: "5. Desbloqueio por Anúncios",
          paragraphs: [
            "Os benefícios obtidos pela exibição de anúncios não são produtos pagos. Se a recompensa não for concedida devido a um erro da rede de publicidade, o caso é resolvido por nova tentativa dentro do serviço ou por contato com a central de atendimento.",
          ],
        },
        {
          title: "6. Contato",
          paragraphs: [`Dúvidas sobre reembolso: ${companyInfo.email}`],
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
            "A análise básica dos quatro serviços — correspondência de significados de hanja (caracteres chineses), conversão de nomes globais, conversão de nomes coreanos e transcrição de pronúncia em hangul — é oferecida gratuitamente a não membros, podendo haver limite de uso diário.",
          ],
        },
        {
          title: "Uso com Recompensa por Anúncios",
          paragraphs: [
            "O desbloqueio de candidatos após a exibição de um anúncio é um benefício publicitário oferecido sem pagamento adicional. Cada anúncio desbloqueia o próximo candidato. A disponibilidade pode variar conforme o estoque de anúncios, o país, o dispositivo ou a política do provedor de anúncios.",
          ],
        },
        {
          title: "Produtos Detalhados de Correspondência de Significados de Hanja",
          paragraphs: [
            "Explicações detalhadas de até 5 candidatos e análise abrangente de hanja: ₩2,900",
            "Explicações detalhadas ampliadas de até 10 candidatos, análise abrangente de hanja e PDF para colecionar: ₩4,900",
            "Detalhes de até 10 candidatos, análise abrangente de hanja, análise de saju (Quatro Pilares) e os Cinco Elementos, e PDF para colecionar: ₩9,900",
            "Os relatórios pagos e os PDFs podem ser visualizados e baixados novamente por 24 horas após o pagamento e, em seguida, são excluídos automaticamente.",
          ],
        },
        {
          title: "Revelação de Todos os Candidatos",
          paragraphs: [
            "Revelação de todos os candidatos restantes de uma só vez, sem anúncios, nos serviços de conversão de nomes globais, conversão de nomes coreanos e transcrição de pronúncia em hangul: US$1.99 (funcionalidade de pagamento em preparação)",
          ],
        },
        {
          title: "Produtos Personalizados com Nomes Coreanos",
          paragraphs: [
            "Para produtos físicos personalizados, como o carimbo de nome, o preço de cada produto, o frete e o prazo de produção são informados separadamente.",
          ],
        },
        {
          title: "Aviso Antes do Lançamento Oficial dos Pagamentos",
          paragraphs: [
            "Quando a análise da operadora de pagamento (PG), o registro de comércio eletrônico e as condições das parcerias de produção forem definidos, o valor real do pagamento, o frete, o prazo de produção e as condições de reembolso serão informados novamente na tela de cada produto.",
          ],
        },
      ],
    },
  },
};

export default content;
