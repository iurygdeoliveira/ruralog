# LGPD – Referência por Artigos

Referência rápida aos principais artigos da Lei 13.709/2018 para consulta durante a análise de conformidade. Use este arquivo quando precisar citar ou detalhar dispositivos específicos.

## Estrutura da Lei

| Capítulo | Conteúdo | Artigos |
|----------|----------|---------|
| Cap. I | Disposições preliminares (objeto, fundamentos, aplicação, exceções, definições, princípios) | Arts. 1º a 6º |
| Cap. II | Tratamento de dados pessoais: requisitos, dados sensíveis, crianças/adolescentes, término | Arts. 7º a 16 |
| Cap. III | Direitos do titular | Arts. 17 a 22 |
| Cap. IV | Tratamento pelo poder público | Arts. 23 a 32 |
| Cap. V | Transferência internacional | Arts. 33 a 36 |
| Cap. VI | Agentes de tratamento (controlador, operador, encarregado) | Arts. 37 a 45 |
| Cap. VII | Segurança e boas práticas | Arts. 46 a 51 |
| Cap. VIII | Fiscalização e sanções | Arts. 52 a 54 |
| Cap. IX | ANPD e Conselho Nacional | Arts. 55-A a 58-B |
| Cap. X | Disposições finais e transitórias | Arts. 60 a 65 |

## Definições Essenciais (Art. 5º)

| Termo | Definição | Inciso |
|-------|-----------|--------|
| Dado pessoal | Informação relacionada a pessoa natural identificada ou identificável | I |
| Dado sensível | Origem racial/étnica, convicção religiosa, opinião política, filiação sindical/religiosa/filosófica/política, saúde, vida sexual, genético, biométrico | II |
| Dado anonimizado | Dado que não pode ser associado a indivíduo com meios técnicos razoáveis | III |
| Titular | Pessoa natural a quem se referem os dados | V |
| Controlador | Quem decide sobre o tratamento | VI |
| Operador | Quem trata em nome do controlador | VII |
| Encarregado (DPO) | Canal entre controlador, titulares e ANPD | VIII |
| Tratamento | Coleta, produção, recepção, classificação, utilização, acesso, reprodução, transmissão, distribuição, processamento, arquivamento, armazenamento, eliminação, avaliação, controle, modificação, comunicação, transferência, difusão, extração | X |
| Consentimento | Manifestação livre, informada e inequívoca para finalidade determinada | XII |
| RIPD | Relatório de impacto à proteção de dados pessoais | XVII |

## Princípios do Tratamento (Art. 6º)

| # | Princípio | Resumo | Verificação típica em software |
|---|-----------|--------|-------------------------------|
| I | Finalidade | Propósitos legítimos, específicos, explícitos, informados | Cada campo tem finalidade documentada? |
| II | Adequação | Compatível com finalidades informadas | Dados coletados condizem com o propósito? |
| III | Necessidade | Mínimo necessário, proporcional | Campos desnecessários são coletados? |
| IV | Livre acesso | Consulta facilitada e gratuita | Titular consegue ver seus dados? |
| V | Qualidade | Exatidão, clareza, relevância, atualização | Há mecanismo de atualização? |
| VI | Transparência | Informações claras e acessíveis | Política de privacidade existe e é clara? |
| VII | Segurança | Medidas técnicas e administrativas | Criptografia, controle de acesso, etc. |
| VIII | Prevenção | Medidas para evitar danos | Privacy by Design implementado? |
| IX | Não discriminação | Sem tratamento para fins discriminatórios | Algoritmos de scoring são justos? |
| X | Responsabilização | Demonstração de conformidade | Registros de tratamento existem? |

## Bases Legais — Dados Pessoais (Art. 7º)

| Inciso | Base Legal | Quando se aplica | Exemplo em software |
|--------|-----------|------------------|---------------------|
| I | Consentimento | Titular concorda expressamente | Checkbox "aceito a política de privacidade" |
| II | Obrigação legal/regulatória | Lei exige o tratamento | Nota fiscal eletrônica (CPF obrigatório) |
| III | Políticas públicas | Administração pública | Sistema de saúde pública |
| IV | Estudos por órgão de pesquisa | Pesquisa com anonimização | Plataforma de pesquisa acadêmica |
| V | Execução de contrato | Necessário para cumprir contrato | Dados de entrega em e-commerce |
| VI | Exercício regular de direitos | Processo judicial/administrativo | Dados retidos para litígio |
| VII | Proteção da vida | Emergência | App de saúde em emergência |
| VIII | Tutela da saúde | Profissionais/serviços de saúde | Sistema hospitalar |
| IX | Interesse legítimo | Interesse do controlador (com teste de proporcionalidade) | Analytics, prevenção de fraude |
| X | Proteção do crédito | Análise de crédito | Score de crédito |

**Consentimento (Art. 8º):** escrito ou outro meio que demonstre vontade; cláusula destacada; ônus da prova no controlador; vedado vício; finalidades determinadas (genéricas = nulas); revogável a qualquer tempo, gratuito e facilitado.

## Bases Legais — Dados Sensíveis (Art. 11)

| Hipótese | Requisito |
|----------|-----------|
| Com consentimento | Específico, destacado, para finalidades específicas |
| Sem consentimento | Apenas quando indispensável para: obrigação legal, políticas públicas, estudos (anonimização), exercício de direitos, proteção da vida, tutela da saúde, prevenção à fraude (identificação/autenticação) |

**Vedações:** compartilhamento de dados de saúde para vantagem econômica (exceto portabilidade e prestação de serviços de saúde). Operadoras de planos de saúde não podem usar dados para seleção de riscos.

## Crianças e Adolescentes (Art. 14)

- Tratamento no melhor interesse da criança/adolescente
- Crianças: consentimento específico e em destaque de pelo menos um dos pais/responsável
- Controlador deve manter pública informação sobre dados coletados e forma de uso
- Sem consentimento: apenas para contatar pais (uso único, sem armazenamento) ou proteção
- Proibido condicionar acesso a jogos/apps à coleta além do necessário
- Informações fornecidas de forma simples, clara e acessível à faixa etária

## Direitos do Titular (Art. 18)

| Inciso | Direito | Verificação em software |
|--------|---------|----------------------|
| I | Confirmação de tratamento | Endpoint ou página "seus dados" |
| II | Acesso aos dados | Exportação dos dados do titular |
| III | Correção | Formulário de edição de perfil |
| IV | Anonimização/bloqueio/eliminação | Funcionalidade de exclusão de conta |
| V | Portabilidade | Exportação em formato estruturado |
| VI | Eliminação de dados consentidos | Botão "excluir meus dados" |
| VII | Informação sobre compartilhamento | Listagem de terceiros |
| VIII | Informação sobre não consentir | Explicação das consequências |
| IX | Revogação do consentimento | Toggle ou botão de revogação |

**Sem custos** para o titular (§5º). Peticionamento à ANPD como recurso (§1º).

## Término e Eliminação (Arts. 15-16)

**Término ocorre quando:** (I) finalidade alcançada ou dados desnecessários; (II) fim do período; (III) comunicação do titular/revogação; (IV) determinação da ANPD.

**Após término:** dados devem ser eliminados, exceto para: (I) obrigação legal/regulatória; (II) estudo com anonimização; (III) transferência a terceiro (respeitada a lei); (IV) uso exclusivo do controlador (anonimizado).

## Segurança (Arts. 46-49)

| Artigo | Obrigação | Verificação |
|--------|-----------|-------------|
| Art. 46 | Medidas técnicas e administrativas contra acesso não autorizado, destruição, perda, alteração, comunicação, difusão ilícita | Criptografia, firewall, backup, controle de acesso |
| Art. 46, §2º | Medidas desde a concepção (Privacy by Design) | Segurança no design do sistema |
| Art. 47 | Sigilo mesmo após término do tratamento | Ex-funcionários mantêm sigilo |
| Art. 48 | Comunicação de incidentes à ANPD e titulares | Plano de resposta a incidentes |
| Art. 49 | Sistemas estruturados para segurança e boas práticas | Arquitetura segura |

## Sanções (Art. 52)

| Sanção | Detalhe |
|--------|---------|
| Advertência | Com prazo para medidas corretivas |
| Multa simples | Até 2% do faturamento (limitada a R$ 50 milhões por infração) |
| Multa diária | Mesmo limite |
| Publicização da infração | Após confirmação |
| Bloqueio dos dados | Até regularização |
| Eliminação dos dados | Da infração |
| Suspensão parcial do banco | Até 6 meses, prorrogável |
| Suspensão do tratamento | Até 6 meses, prorrogável |
| Proibição parcial/total | Do tratamento |

## Transferência Internacional (Art. 33)

Permitida apenas quando: país com proteção adequada; garantias contratuais (cláusulas-padrão, normas corporativas); cooperação jurídica internacional; proteção da vida; autorização da ANPD; acordo de cooperação; política pública; consentimento específico; ou hipóteses dos incisos II, V e VI do Art. 7º.

## ANPD

- Agência Nacional de Proteção de Dados (transformada de Autoridade para Agência — Lei 15.352/2026)
- Vinculada ao Ministério da Justiça e Segurança Pública
- Competências: fiscalização, normatização, sanções, consultoria, cooperação internacional
- Regulamentos, guias e FAQ: https://www.gov.br/anpd/pt-br

## Referências Oficiais

- Lei 13.709/2018 (texto compilado): https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm
- ANPD: https://www.gov.br/anpd/pt-br
