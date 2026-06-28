# Projeto: RuraLog — Rastreabilidade Inteligente da Cadeia do Açaí no Tocantins

> Documento núcleo gerado pela skill **idea-to-spec**.
> Versão: 2.0 | Data: 2026-06-27 | Autor: Equipe RuraLog (Rennzo + Dev 2 + Dev 3)
> Contexto: Desafio Industrial FIETO 2026 — protótipo de pitch (48h).

## Sumário Executivo

A cadeia do açaí no Tocantins enfrenta um paradoxo: o estado emergiu como sexto maior produtor nacional, com crescimento de 739% na safra e 2.469% no valor de produção, mas perde competitividade por falta de informação conectada entre quem **extrai** (produtor/extrativista familiar), quem **transforma** (agroindústria de polpa), quem **vende** (varejo) e quem **consome**. O açaí fruto tem perecibilidade extrema — oxida em horas após a debulha — e a cadeia informal pode perder até 70% dos antioxidantes (antocianinas) em 36 horas de atraso. O RuraLog é uma plataforma de **rastreabilidade ponta-a-ponta** que acompanha um lote de açaí do açaizal nativo no Bico do Papagaio até a polpa congelada na prateleira, gerando um "passaporte de qualidade" via QR Code e **alertas preditivos** que avisam a agroindústria, com antecedência, sobre risco de quebra de safra por pragas. O MVP demonstra essa jornada com **um lote real navegável** (`ACAI-TO-2026-001`), provando viabilidade com tecnologia simples (web estática) e impacto direto nas frentes de **logística, eficiência produtiva, sustentabilidade e valorização do Açaí do Tocantins**.

## 1. Visão e Contexto de Negócio

- **Objetivo de negócio (OST):** Demonstrar à banca que é viável **reduzir perdas por oxidação e aumentar a competitividade** da cadeia do açaí tocantinense conectando produção extrativista, logística (fluvial/rodoviária), agroindústria de polpa, varejo e consumo numa única trilha de dados rastreável e preditiva — usando tecnologia barata e acessível ao extrativista familiar, em conformidade com a INC 02/2018 (MAPA/ANVISA).
- **Problema central:** O açaí fruto oxida em horas. A informação se perde entre os elos. A agroindústria não sabe quando os cachos foram debulhados, a logística desperdiça por atraso na corrida contra a oxidação, o varejo não monitora a cadeia de frio, e o consumidor não consegue distinguir açaí premium de produto diluído ou processado tardiamente.
- **Razão de agora (urgência):** Crescimento exponencial da produção no TO (739%), pressão regulatória da INC 02/2018 por rastreabilidade obrigatória, necessidade de diferenciar o "Açaí do Tocantins" frente à produção paraense, e oportunidade do Desafio FIETO de provar a ideia em 48h.
- **Stakeholders:** Produtores/extrativistas familiares de açaí, agroindústrias de polpa do TO (ex: Casa de Polpa Fruta Nova em Araguatins), supermercados/distribuidores (B2B), consumidor final (B2C), organização do Desafio/banca.

## 2. Métricas

| ID | Métrica | Baseline | Meta | Prazo |
|---|---|---|---|---|
| M-01 | Antecedência do alerta de quebra de safra por praga | 0 (reativo) | Aviso ≥ 8 semanas antes da entrega prevista | Demonstrável no MVP |
| M-02 | Perda por oxidação no trânsito (lote acima do limiteHoras) | Não medido — cadeias informais processam em 36h | Sinalização automática (semáforo) de 100% dos lotes em risco, com limite de 6h | Demonstrável no MVP |
| M-03 | Desperdício no varejo por ruptura de cadeia de frio/validade | Reativo | Notificação automática antes do vencimento com rotação FIFO | Demonstrável no MVP |
| M-04 | Transparência de origem ao consumidor | 0% | 100% dos lotes de polpa com passaporte público via QR ("Açaí do Tocantins") | Demonstrável no MVP |
| M-05 (pitch) | Nota da banca | — | Maximizar Aderência (25) + Viabilidade (20) + Inovação (15) + Protótipo (15) | Apresentação |

> Para o MVP, "meta demonstrável" = a tela mostra o número/estado de forma crível, com dados-semente; não há promessa de produção.

## 3. Personas

| ID | Persona | Contexto | Dor principal | Comportamento atual |
|---|---|---|---|---|
| P-01 | **Seu João** — extrativista de açaí | Açaizal nativo em Araguatins (Bico do Papagaio), celular simples, internet instável, acesso fluvial | Não consegue registrar/provar origem do açaí nem avisar a agroindústria sobre pragas no açaizal | Vende as rasas de açaí debulhado sem rastreio; perde poder de negociação sem certificação |
| P-02 | **Marina** — gestora da agroindústria de polpa | Chão de fábrica com despolpadeiras e túneis de congelamento; precisa equilibrar chegada caótica de pequenos lotes | Descobre quebra de safra só quando o açaí não chega; recebe lotes com horas de oxidação sem saber | Processa às cegas; não sabe o tempo entre debulha e recepção |
| P-03 | **Carlos** — gerente de varejo | Supermercado/distribuidor, gestão de freezer e estoque de polpa congelada | Polpa vence sem ele perceber a tempo; não consegue garantir FIFO | Confere validade manualmente; sem controle de cadeia de frio |
| P-04 | **Ana** — consumidora final | Compra açaí no mercado, usa o celular | Não sabe a origem, se o açaí é premium ou diluído, nem se foi processado a tempo | Escolhe por preço/marca; desconfia da qualidade sem informação |

## 4. Dores Mapeadas

| ID | Dor | Persona afetada | Evidência (contexto FIETO / projeto) |
|---|---|---|---|
| D-01 | Agroindústria não antecipa quebra de safra por pragas (Podridão-do-cacho, Broca-do-estipe) | P-02 | Planejamento de fábrica reativo — não sabe o volume que chegará (Frente a/e) |
| D-02 | Perdas por oxidação no trânsito sem controle de tempo (açaí oxida em horas, não dias) | P-01, P-02 | Logística fluvial/rodoviária sem monitoramento — cadeias informais processam em 36h (Frente c) |
| D-03 | Gargalos no despolpamento — priorização errada de lotes por falta de dados de trânsito | P-02 | Tempo entre debulha e despolpamento não cruzado (Frente b/e) |
| D-04 | Desperdício no varejo por polpa congelada vencendo sem rotação (FIFO) | P-03 | Falta de gestão ativa de validade no estoque de polpa (Frente b) |
| D-05 | Açaí do Tocantins sem diferenciação nem transparência frente ao paraense | P-04 | Consumidor não enxerga origem, classificação nem tempo de processamento (Frente d) |
| D-06 | Ausência de rastreabilidade ponta-a-ponta em conformidade com INC 02/2018 | Todas | Elos desconectados, sem trilha única — risco de sanção regulatória (Frente e) |

## 5. Como resolver as dores mapeadas

> Ponte entre dor e RF. Cada linha referencia **D-xx**.

| ID | Dor(es) | Abordagem (produto/processos) | Entregáveis de alto nível | MoSCoW |
|---|---|---|---|---|
| R-01 | D-01 | Diário de campo gera **alerta preditivo simulado**: registro de praga específica do açaí (Podridão-do-cacho, Broca-do-estipe) dispara, por regra, um aviso de redução de entrega de polpa para a agroindústria | App do Campo + "inbox" de alertas no painel da Agroindústria | Must |
| R-02 | D-02 | Geração de **lote + QR** na debulha e **cronômetro de perecibilidade** com **semáforo** (verde 0-3h / amarelo 3-5h / vermelho >6h) por janela biológica do açaí | Tela de expedição + status logístico no lote | Should |
| R-03 | D-03 | Painel da agroindústria com **catraca digital** (recepção/pesagem) e **controle de qualidade** (CQ) que registram tempos e aprovam/reprovam, com classificação MAPA (Tipo A/B/C) | Recepção + CQ + despolpamento + visão de etapas do lote | Must |
| R-04 | D-04 | **Dashboard de validade** no varejo que sinaliza lotes de polpa congelada perto de vencer e sugere ação (rotação FIFO) | Tela de varejo com semáforo de validade | Should |
| R-05 | D-05 | **Passaporte público** via QR: jornada de origem do lote de açaí, município do TO, tipo de açaizal, classificação e selo "Açaí do Tocantins" | Landing do consumidor (B2C) | Must |
| R-06 | D-06 | **Trilha única** (uma timeline por lote) compartilhada entre todas as telas via camada de dados local, conforme diretrizes da INC 02/2018 | Camada de dados + timeline do lote | Must |
| R-07 | D-05, D-06 | **Painel de privacidade**: a agroindústria escolhe o que o QR mostra (perfil B2B x B2C) | Checkboxes/atalhos de privacidade que filtram a landing | Should |

## 6. Riscos de Produtos

| ID | Domínio | Descrição | Severidade | Experimento de validação |
|---|---|---|---|---|
| RP-01 | Valor | A banca pode não enxergar valor numa "mais uma plataforma de rastreio" | Alta | Golden path contínuo + narrativa específica do açaí (perecibilidade, oxidação, INC 02/2018) + número de impacto por etapa no pitch |
| RP-02 | Usabilidade | Extrativista de baixa familiaridade digital não usaria um app complexo | Média | UI do Campo com pouquíssimos campos, linguagem simples, mobile-first e PWA mínimo |
| RP-03 | Técnico | Demo quebrar ao vivo (sem internet, estado sujo, QR não abre ou celular externo não encontra dados) | Alta | Rodar em localhost, botão "Resetar Demo", QR com snapshot público e teste em celular sem dados prévios |
| RP-04 | Negócio | Dúvida sobre como monetizar/escalar com extrativista familiar | Média | Narrativa B2B (agroindústria/varejo pagam; cooperativas facilitam) no pitch; fora do escopo do protótipo |

## 7. Capacidade Operacional

> Calibra os RNFs. Time de hackathon → **RNFs mínimos, anti-overengineering total**.

| Dimensão | Valor declarado | Implicação para RNFs |
|---|---|---|
| Tamanho e composição do time | 3 devs (Campo / Indústria+Varejo / Consumidor+Design), front-end vanilla | Sem backend, sem DevOps; tudo client-side estático com PWA mínimo no Campo |
| Capacidade operacional | Best-effort (protótipo de evento) | Sem SLA, sem monitoramento, sem auth |
| Volume esperado no 1º ano | Demo (1 lote no palco, alguns no seed) | IndexedDB/localStorage do navegador bastam; nada de banco/servidor |
| Trajetória 12 meses | Protótipo (não há trajetória de produção) | **Proibido** introduzir microserviços, frameworks, build, APIs externas |

## 8. Requisitos Funcionais

| ID | Requisito | Critérios de aceite | MoSCoW | Dor |
|---|---|---|---|---|
| RF-01 | Cadastrar produtor/extrativista e açaizal (onboarding) | Nome, município (TO — ex: Araguatins), tipo de açaizal (nativo/cultivado) e geolocalização capturada quando possível, com fallback simulado, salvos no lote | Must | D-06 |
| RF-02 | Registrar manejo do açaizal e monitoramento fitossanitário (diário de campo) | Registro de tipo de manejo (roçagem, desbaste, monitoramento de praga) e ocorrência fitossanitária (Podridão-do-cacho, Broca-do-estipe, Pulgão-preto, Lagarta-desfolhadora) persiste no lote | Must | D-01 |
| RF-03 | Disparar alerta preditivo simulado a partir do monitoramento fitossanitário | Registrar praga gera alerta com antecedência estimada (8 semanas) e redução de entrega de polpa (20-30%) visível à Agroindústria | Must | D-01 |
| RF-04 | Registrar debulha/colheita e gerar lote + QR Code | Lote `ACAI-TO-2026-001` recebe ID, timestamp de debulha (inicia relógio de perecibilidade) e QR apontando p/ landing com snapshot público do lote | Must | D-06 |
| RF-05 | Expedir lote e iniciar cronômetro de perecibilidade | Marca `expedicao_ts`; status logístico calculado por tempo vs. janela biológica do açaí (6h) | Should | D-02 |
| RF-06 | Sinalizar status logístico por semáforo (verde 0-3h / amarelo 3-5h / vermelho >6h) | Estado muda conforme tempo decorrido vs. limiteHoras do açaí | Should | D-02 |
| RF-07 | Receber lote na agroindústria (catraca digital + pesagem) | Marca `recepcao_ts`, calcula tempo total de trânsito desde a debulha, registra peso em kg, encerra viagem | Must | D-03 |
| RF-08 | Controle de qualidade (recepção e final com classificação MAPA) | Aprovar/Reprovar com observação persiste no lote e na timeline; CQ final classifica polpa em Tipo A/B/C (sólidos totais) | Must | D-03 |
| RF-09 | Exibir inbox de alertas preditivos na agroindústria | Alertas fitossanitários gerados no Campo aparecem como cards no painel | Must | D-01 |
| RF-10 | Receber lote de polpa congelada no varejo e gerir validade | Dashboard mostra validade (6-12 meses) e semáforo; alerta de rotação FIFO | Should | D-04 |
| RF-11 | Painel de privacidade do QR (B2B/B2C) | Atalhos/checkboxes definem o que a landing pública exibe (B2B: laudos, classificação, logística; B2C: origem, selo, tempo de processamento) | Should | D-05 |
| RF-12 | Landing pública do consumidor via QR (`?lote=` + snapshot) | Abre por URL em outro celular, exibe jornada/origem do açaí conforme privacidade, selo "Açaí do Tocantins", mesmo sem storage prévio | Must | D-05 |
| RF-13 | Coletar opinião do consumidor | Form de 1–3 perguntas salva avaliação no lote | Could | D-05 |
| RF-14 | Timeline única do lote compartilhada entre telas | Toda etapa adiciona evento à timeline lida por todas as páginas | Must | D-06 |
| RF-15 | Resetar a demo para o estado inicial | Botão recoloca o seed em 1 clique | Must | RP-03 |
| RF-16 | Processar (despolpar) e expedir polpa da agroindústria para o varejo | Polpa aprovada no CQ final (classificada Tipo A/B/C) recebe `expedicao_varejo_ts` e evento de saída para o varejo | Should | D-03 |

## 9. Requisitos Não Funcionais

| ID | Categoria | Requisito | Métrica | Âncora na seção 7 |
|---|---|---|---|---|
| RNF-01 | Arquitetura | Apenas arquivos estáticos (HTML/CSS/JS), sem backend | Roda em servidor estático local (`localhost`) ou GitHub Pages | Time 3 devs, best-effort |
| RNF-02 | Persistência | Estado compartilhado via IndexedDB com fallback localStorage | `index` grava, `industria`/`consumidor` leem | Volume = demo |
| RNF-03 | Offline/Contingência | Funciona 100% em `localhost` sem internet | Pitch roda sem rede | RP-03 / best-effort |
| RNF-04 | Responsivido | Telas do Campo e do Consumidor usáveis no celular | Layout mobile-first | P-01/P-04 |
| RNF-05 | Identidade visual | CSS global único e consistente nas 3 páginas | Mesmas cores/tipografia/componentes | Dev 3 / Design |
| RNF-06 | Dependências | Sem frameworks/build; no máx. **1 lib QR vendorizada localmente** | Nenhuma chamada de API em runtime | Anti-overengineering |
| RNF-07 | Robustez de demo | Reset de estado em 1 clique; dados-semente sempre presentes | Botão "Resetar Demo" | RP-03 |
| RNF-08 | PWA mínimo no Campo | `manifest.json` + service worker cacheando assets essenciais | `index.html` reabre sem internet depois do primeiro carregamento | P-01/RP-02 |
| RNF-09 | QR entre dispositivos | Landing carrega dados por snapshot público na URL antes de tentar storage local | Celular externo abre o passaporte completo | RP-03 |

## 10. Regras de Negócio

| ID | Regra | RF/Telas aplicáveis |
|---|---|---|
| RN-01 | Registrar praga específica do açaí (Podridão-do-cacho, Broca-do-estipe, Pulgão-preto, Lagarta-desfolhadora) no monitoramento fitossanitário gera alerta preditivo com impacto de **−20% a −30%** de entrega de polpa (texto fixo por tipo de praga), com antecedência estimada de **8 semanas** | RF-03, RF-09 |
| RN-02 | Status logístico adaptado à perecibilidade do açaí: **verde** (0-3h, qualidade premium), **amarelo** (3-5h, início de oxidação — priorizar despolpamento), **vermelho** (>6h, risco de fermentação — inspeção obrigatória no CQ) | RF-06 |
| RN-03 | Lote **reprovado no CQ** não avança para etapas seguintes (fica marcado) | RF-08 |
| RN-04 | A landing pública só exibe os blocos habilitados no **painel de privacidade** (default B2C: mostra origem e selo "Açaí do Tocantins", esconde laudos e tempo de prateleira) | RF-11, RF-12 |
| RN-05 | "Vence em breve" no varejo dispara quando a validade da polpa congelada está a ≤ X dias (configurável no seed — default 30 dias para polpa de 6 meses) | RF-10 |
| RN-06 | O QR público deve carregar a landing nesta ordem: snapshot `demo` da URL → IndexedDB/localStorage → seed demonstrativo → estado vazio amigável | RF-04, RF-12 |
| RN-07 | O alerta preditivo simulado deve explicitar antecedência e impacto: praga específica detectada + entrega prevista + risco de redução de 20-30% + 8 semanas de antecedência | RF-03, RF-09 |

> **Casos de uso detalhados:** este pacote substitui `casos-de-uso/` pelos **arquivos de fase** (`Fase_*.md`), por escolha da equipe. Cada fase contém os fluxos, telas e critérios de aceite correspondentes.

## 11. Restrições

| ID | Descrição | Reversibilidade | Justificativa |
|---|---|---|---|
| C-01 | Stack HTML/CSS/JS puro, ES6+ | one-way (no contexto do evento) | Regra da equipe; sem tempo p/ framework |
| C-02 | Sem build tools / sem npm em runtime | two-way | Arquivos rodam em servidor estático simples, sem etapa de build |
| C-03 | Persistência só no navegador (IndexedDB/localStorage) | one-way | Sem backend disponível |
| C-04 | Deploy em GitHub Pages, com fallback localhost | two-way | QR precisa de URL pública; rede do evento é incerta |
| C-05 | No máximo 1 biblioteca (QR) vendorizada como arquivo local | two-way | Gerar QR em vanilla é custoso; lib local não é "API externa" |
| C-06 | IA é **simulada por regras**, não há modelo real | two-way | Cabe em 48h e é à prova de falha |
| C-07 | RFID, blockchain/hash e IoT real ficam como roadmap, não como entrega do MVP | two-way | Evita prometer no pitch o que não será codificado |

## 12. Matriz de Rastreabilidade

| Dor | RF | RNF | Fase |
|---|---|---|---|
| D-01 | RF-02, RF-03, RF-09 | RNF-02 | 1, 3 |
| D-02 | RF-05, RF-06 | RNF-02 | 2 |
| D-03 | RF-07, RF-08, RF-16 | RNF-02 | 3 |
| D-04 | RF-10 | RNF-02 | 4 |
| D-05 | RF-11, RF-12, RF-13 | RNF-04, RNF-09 | 4, 5 |
| D-06 | RF-01, RF-04, RF-14 | RNF-01, RNF-02, RNF-08, RNF-09 | 0, 1, 5 |
| RP-03 | RF-15 | RNF-03, RNF-07, RNF-09 | 0, 6 |

## 13. Log de Auditoria (Maker-Checker)

| Iteração | Itens reprovados | Correções |
|---|---|---|
| 1 | Estrutura de fases por etapa não previa base compartilhada → risco de inconsistência de dados/CSS | Adicionadas Fase 0 (Fundação) e Fase 6 (Integração) como scaffolding, mantendo as 5 etapas como espinha |
| 1 | "IA" sem viabilidade em 48h | RN-01 define alerta por regra fixa (simulado), registrado em C-06 |
| 1 | 20 pontos de rastreio inviáveis | Escopo reduzido ao golden path de 1 lote; pontos não essenciais → Could/Won't (seção 14) |
| 2 | QR público não acessaria IndexedDB/localStorage de outro celular | Adicionado snapshot público no QR, fallback robusto na landing e checklist de teste em celular externo |
| 2 | Offline-first e privacidade estavam fracos para a narrativa original | Adicionado PWA mínimo no Campo e RF-11 reclassificado como Should |
| 2 | Faltava handoff explícito da Agroindústria para o Varejo | Adicionado RF-16 e campo `expedicao_varejo_ts` no schema |
| 3 | Projeto genérico (abacaxi) não explorava as idiossincrasias do açaí | Cadeia inteira reescrita para açaí: perecibilidade extrema (limiteHoras 6h), pragas específicas, despolpamento, classificação MAPA (Tipo A/B/C), selo "Açaí do Tocantins", região Araguatins/Bico do Papagaio |

## 14. Escopo do MVP e ordem sugerida de entrega

> Ordem de implementação dos **RF Must/Should** que compõem o golden path do lote `ACAI-TO-2026-001`.

| Ordem | RF | Fase(s) | Dependências / notas |
|---|---|---|---|
| 1 | RF-14, RF-15 | Fase 0 | Camada de dados + reset = pré-requisito de tudo |
| 2 | RNF-05 | Fase 0 | CSS global antes das telas |
| 3 | RF-01, RF-02, RF-03, RF-04 | Fase 1 | Cria o lote de açaí e o QR |
| 4 | RF-05, RF-06 | Fase 2 | Precisa do lote da Fase 1 — cronômetro de perecibilidade |
| 5 | RF-07, RF-08, RF-09, RF-16 | Fase 3 | Lê lote + alertas; despolpa, classifica e expede polpa para varejo |
| 6 | RF-10, RF-11 | Fase 4 | Pós-agroindústria — polpa congelada |
| 7 | RF-12, RF-13 | Fase 5 | Lê privacidade da Fase 4 (degrada bem se ausente) |
| 8 | Integração E2E | Fase 6 | Todos os RF acima num fluxo só + deploy + pitch |

**Could (só se sobrar tempo):** RF-13 completo, múltiplos lotes, gráficos, campo de sólidos totais real.
**Won't (fora do MVP):** auth real, IoT real (sensores de temperatura), rastreio GPS contínuo real, RFID, blockchain/hash, multiusuário, backend, app nativo, classificação laboratorial real.

## Glossário

- **Lote:** unidade rastreável (ex: `ACAI-TO-2026-001`) que carrega toda a trilha de dados do açaí.
- **Golden path:** o caminho único e contínuo demonstrado no pitch (açaizal → debulha → despolpamento → polpa congelada → consumidor).
- **Timeline:** lista ordenada de eventos do lote, fonte de verdade compartilhada entre as telas.
- **Semáforo:** estado visual verde/amarelo/vermelho de logística (tempo de perecibilidade) ou validade (polpa congelada).
- **Passaporte:** a landing pública do consumidor com a origem/jornada do açaí e selo "Açaí do Tocantins".
- **Alerta preditivo (simulado):** card gerado por regra fixa (RN-01) que emula a "IA" de previsão de quebra de safra.
- **Painel de privacidade:** controle B2B/B2C do que o QR exibe (RN-04).
- **Snapshot público:** versão reduzida do lote embutida no QR para a landing funcionar em outro celular sem depender do storage do computador da equipe.
- **Peconheiro:** trabalhador tradicional que escala as palmeiras de açaí para colher os cachos, utilizando uma "peconha" (tira de fibra presa aos pés).
- **Debulha:** separação mecânica ou manual dos frutos do cacho de açaí. Marca o início do relógio de perecibilidade.
- **Rasa / Lata:** unidades de medida tradicionais do açaí no extrativismo (~14-15 kg por unidade).
- **Despolpamento:** extração mecânica da polpa comestível do fruto de açaí, com adição técnica de água potável.
- **Branqueamento:** imersão do fruto em água a ≥80°C por ≥10s — inativa enzimas de oxidação e elimina patógenos (inc. *Trypanosoma cruzi*).
- **Antocianinas:** pigmentos roxos do açaí, indicadores de qualidade nutracêutica. Degradam rapidamente com oxidação.
- **Classificação MAPA:** Tipo A (Grosso/Especial, >14% sólidos totais), Tipo B (Médio/Regular, 11-14%), Tipo C (Fino/Popular, 8-11%).
- **INC 02/2018:** Instrução Normativa Conjunta MAPA/ANVISA que obriga a rastreabilidade de produtos vegetais frescos na cadeia alimentar.
- **Bico do Papagaio:** região do extremo-norte do Tocantins, polo de extrativismo de açaí nativo (municípios: Araguatins, Esperantina, Axixá do Tocantins).
- **Açaizal nativo:** área de várzea com palmeiras de açaí em estado natural, manejada por extrativistas.
