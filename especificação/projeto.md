# Projeto: RuraLog — Rastreabilidade Inteligente da Cadeia de Alimentos do Tocantins

> Documento núcleo gerado pela skill **idea-to-spec**.
> Versão: 1.0 | Data: 2026-06-27 | Autor: Equipe RuraLog (Rennzo + Dev 2 + Dev 3)
> Contexto: Desafio Industrial FIETO 2026 — protótipo de pitch (48h).

## Sumário Executivo

A cadeia de alimentos do Tocantins perde eficiência por falta de informação conectada entre quem **produz** (agricultor familiar), quem **transforma** (indústria), quem **vende** (varejo) e quem **consome**. O RuraLog é uma plataforma de **rastreabilidade ponta-a-ponta** que acompanha um lote do plantio à prateleira, gerando um "passaporte de qualidade" via QR Code e **alertas preditivos** que avisam a indústria, com antecedência, sobre risco de falta de matéria-prima. O MVP demonstra essa jornada com **um lote real navegável** (`TO-2026-001`), provando viabilidade com tecnologia simples (web estática) e impacto direto nas frentes de **logística, eficiência produtiva, sustentabilidade e valorização do produto regional**.

## 1. Visão e Contexto de Negócio

- **Objetivo de negócio (OST):** Demonstrar à banca que é viável **reduzir desperdício e aumentar a competitividade** da cadeia de alimentos do Tocantins conectando produção, logística, indústria, varejo e consumo numa única trilha de dados rastreável e preditiva — usando tecnologia barata e acessível ao agricultor familiar.
- **Problema central:** A informação se perde entre os elos. A indústria planeja às cegas, a logística desperdiça por atraso, o varejo joga fora por validade e o consumidor não enxerga (nem valoriza) a origem.
- **Razão de agora (urgência):** Pressão por segurança alimentar, rastreabilidade e redução de perdas; e a oportunidade do Desafio FIETO de provar a ideia em 48h.
- **Stakeholders:** Agricultores familiares, indústrias de alimentos do TO, supermercados (B2B), consumidor final (B2C), organização do Desafio/banca.

## 2. Métricas

| ID | Métrica | Baseline | Meta | Prazo |
|---|---|---|---|---|
| M-01 | Antecedência do alerta de falta de matéria-prima | 0 (reativo) | Aviso ≥ semanas antes da entrega | Demonstrável no MVP |
| M-02 | Perda por atraso logístico (lote fora do tempo seguro) | Não medido | Sinalização automática (semáforo) de 100% dos lotes em risco | Demonstrável no MVP |
| M-03 | Desperdício no varejo por validade | Reativo | Notificação automática antes do vencimento | Demonstrável no MVP |
| M-04 | Transparência de origem ao consumidor | 0% | 100% dos lotes com passaporte público via QR | Demonstrável no MVP |
| M-05 (pitch) | Nota da banca | — | Maximizar Aderência (25) + Viabilidade (20) + Inovação (15) + Protótipo (15) | Apresentação |

> Para o MVP, "meta demonstrável" = a tela mostra o número/estado de forma crível, com dados-semente; não há promessa de produção.

## 3. Personas

| ID | Persona | Contexto | Dor principal | Comportamento atual |
|---|---|---|---|---|
| P-01 | **Seu João** — agricultor familiar | Propriedade rural, celular simples, internet instável | Não consegue registrar/provar origem nem avisar a indústria do que vem por aí | Anota em caderno; vende sem rastreio |
| P-02 | **Marina** — gestora industrial | Chão de fábrica, planeja produção | Descobre falta de insumo só quando o caminhão não chega | Planilhas reativas |
| P-03 | **Carlos** — gerente de varejo | Supermercado, gestão de prateleira | Produto vence sem ele perceber a tempo | Confere validade manualmente |
| P-04 | **Ana** — consumidora final | Compra no mercado, usa o celular | Não sabe a origem nem confia na qualidade | Escolhe por preço/marca |

## 4. Dores Mapeadas

| ID | Dor | Persona afetada | Evidência (contexto FIETO / projeto) |
|---|---|---|---|
| D-01 | Indústria não antecipa falta de matéria-prima | P-02 | Planejamento de fábrica reativo (Frente a/e) |
| D-02 | Perdas e atrasos na logística sem controle de tempo/rastreio | P-01, P-02 | Cargas perecíveis sem monitoramento de trânsito (Frente c) |
| D-03 | Gargalos no chão de fábrica não identificados | P-02 | Tempo de cada setor não cruzado (Frente b/e) |
| D-04 | Desperdício no varejo por produtos vencendo | P-03 | Falta de gestão ativa de validade na prateleira (Frente b) |
| D-05 | Produto regional sem valorização nem transparência | P-04 | Consumidor não enxerga origem do TO (Frente d) |
| D-06 | Ausência de rastreabilidade/segurança alimentar ponta-a-ponta | Todas | Elos desconectados, sem trilha única (Frente e) |

## 5. Como resolver as dores mapeadas

> Ponte entre dor e RF. Cada linha referencia **D-xx**.

| ID | Dor(es) | Abordagem (produto/processos) | Entregáveis de alto nível | MoSCoW |
|---|---|---|---|---|
| R-01 | D-01 | Diário de campo gera **alerta preditivo simulado**: registro de praga/manejo dispara, por regra, um aviso de redução de entrega para a indústria | App do Campo + "inbox" de alertas no painel da Indústria | Must |
| R-02 | D-02 | Geração de **lote + QR** na colheita e **cronômetro de trânsito** com **semáforo** (verde/amarelo/vermelho) por tempo seguro | Tela de expedição + status logístico no lote | Should |
| R-03 | D-03 | Painel da indústria com **catraca digital** (recepção) e **controle de qualidade** (CQ) que registram tempos e aprovam/reprovam | Recepção + CQ + visão de etapas do lote | Must |
| R-04 | D-04 | **Dashboard de validade** no varejo que sinaliza lotes perto de vencer e sugere ação (promoção) | Tela de varejo com semáforo de validade | Should |
| R-05 | D-05 | **Passaporte público** via QR: jornada de origem do lote, selos e município do TO | Landing do consumidor (B2C) | Must |
| R-06 | D-06 | **Trilha única** (uma timeline por lote) compartilhada entre todas as telas via camada de dados local | Camada de dados + timeline do lote | Must |
| R-07 | D-05, D-06 | **Painel de privacidade**: a indústria escolhe o que o QR mostra (perfil B2B x B2C) | Checkboxes/atalhos de privacidade que filtram a landing | Should |

## 6. Riscos de Produtos

| ID | Domínio | Descrição | Severidade | Experimento de validação |
|---|---|---|---|---|
| RP-01 | Valor | A banca pode não enxergar valor numa "mais uma plataforma de rastreio" | Alta | Golden path contínuo + número de impacto por etapa no pitch |
| RP-02 | Usabilidade | Agricultor de baixa familiaridade digital não usaria um app complexo | Média | UI do Campo com pouquíssimos campos, linguagem simples, mobile-first e PWA mínimo |
| RP-03 | Técnico | Demo quebrar ao vivo (sem internet, estado sujo, QR não abre ou celular externo não encontra dados) | Alta | Rodar em localhost, botão "Resetar Demo", QR com snapshot público e teste em celular sem dados prévios |
| RP-04 | Negócio | Dúvida sobre como monetizar/escalar com agricultor familiar | Média | Narrativa B2B (indústria/varejo pagam) no pitch; fora do escopo do protótipo |

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
| RF-01 | Cadastrar agricultor e propriedade (onboarding) | Nome, município (TO), cultura e geolocalização capturada quando possível, com fallback simulado, salvos no lote | Must | D-06 |
| RF-02 | Registrar plantio e manejo (diário de campo) | Registro de cultura, data e ocorrência (praga/agroquímico) persiste no lote | Must | D-01 |
| RF-03 | Disparar alerta preditivo simulado a partir do manejo | Registrar praga gera alerta com antecedência estimada e redução de entrega visível à Indústria | Must | D-01 |
| RF-04 | Registrar colheita e gerar lote + QR Code | Lote `TO-2026-001` recebe ID, timestamp e QR apontando p/ landing com snapshot público do lote | Must | D-06 |
| RF-05 | Expedir lote e iniciar cronômetro de trânsito | Marca `expedicao_ts`; status logístico calculado por tempo | Should | D-02 |
| RF-06 | Sinalizar status logístico por semáforo (verde/amarelo/vermelho) | Estado muda conforme tempo decorrido vs. limite seguro | Should | D-02 |
| RF-07 | Receber lote na indústria (catraca digital) | Marca `recepcao_ts`, calcula tempo total de trânsito, encerra viagem | Must | D-03 |
| RF-08 | Controle de qualidade (recepção e final) | Aprovar/Reprovar com observação persiste no lote e na timeline | Must | D-03 |
| RF-09 | Exibir inbox de alertas preditivos na indústria | Alertas gerados no Campo aparecem como cards no painel | Must | D-01 |
| RF-10 | Receber lote no varejo e gerir validade | Dashboard mostra validade e semáforo; alerta de "vence em breve" | Should | D-04 |
| RF-11 | Painel de privacidade do QR (B2B/B2C) | Atalhos/checkboxes definem o que a landing pública exibe | Should | D-05 |
| RF-12 | Landing pública do consumidor via QR (`?lote=` + snapshot) | Abre por URL em outro celular, exibe jornada/origem conforme privacidade, mesmo sem storage prévio | Must | D-05 |
| RF-13 | Coletar opinião do consumidor | Form de 1–3 perguntas salva avaliação no lote | Could | D-05 |
| RF-14 | Timeline única do lote compartilhada entre telas | Toda etapa adiciona evento à timeline lida por todas as páginas | Must | D-06 |
| RF-15 | Resetar a demo para o estado inicial | Botão recoloca o seed em 1 clique | Must | RP-03 |
| RF-16 | Processar e expedir produto da indústria para o varejo | Produto aprovado no CQ final recebe `expedicao_varejo_ts` e evento de saída para o varejo | Should | D-03 |

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
| RN-01 | Registrar praga no manejo gera alerta preditivo de **−20%** de entrega (texto fixo) | RF-03, RF-09 |
| RN-02 | Status logístico: **verde** dentro do tempo seguro, **amarelo** acima do limite de atenção, **vermelho** acima do limite crítico | RF-06 |
| RN-03 | Lote **reprovado no CQ** não avança para etapas seguintes (fica marcado) | RF-08 |
| RN-04 | A landing pública só exibe os blocos habilitados no **painel de privacidade** (default B2C: mostra origem, esconde tempo de prateleira) | RF-11, RF-12 |
| RN-05 | "Vence em breve" no varejo dispara quando a validade está a ≤ X dias (configurável no seed) | RF-10 |
| RN-06 | O QR público deve carregar a landing nesta ordem: snapshot `demo` da URL → IndexedDB/localStorage → seed demonstrativo → estado vazio amigável | RF-04, RF-12 |
| RN-07 | O alerta preditivo simulado deve explicitar antecedência e impacto: data de entrega prevista + risco de redução de 20% | RF-03, RF-09 |

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
| 2 | Faltava handoff explícito da Indústria para o Varejo | Adicionado RF-16 e campo `expedicao_varejo_ts` no schema |

## 14. Escopo do MVP e ordem sugerida de entrega

> Ordem de implementação dos **RF Must/Should** que compõem o golden path do lote `TO-2026-001`.

| Ordem | RF | Fase(s) | Dependências / notas |
|---|---|---|---|
| 1 | RF-14, RF-15 | Fase 0 | Camada de dados + reset = pré-requisito de tudo |
| 2 | RNF-05 | Fase 0 | CSS global antes das telas |
| 3 | RF-01, RF-02, RF-03, RF-04 | Fase 1 | Cria o lote e o QR |
| 4 | RF-05, RF-06 | Fase 2 | Precisa do lote da Fase 1 |
| 5 | RF-07, RF-08, RF-09, RF-16 | Fase 3 | Lê lote + alertas; processa e expede para varejo |
| 6 | RF-10, RF-11 | Fase 4 | Pós-indústria |
| 7 | RF-12, RF-13 | Fase 5 | Lê privacidade da Fase 4 (degrada bem se ausente) |
| 8 | Integração E2E | Fase 6 | Todos os RF acima num fluxo só + deploy + pitch |

**Could (só se sobrar tempo):** RF-13 completo, múltiplos lotes, gráficos.
**Won't (fora do MVP):** auth real, IoT real, rastreio GPS contínuo real, RFID, blockchain/hash, multiusuário, backend, app nativo.

## Glossário

- **Lote:** unidade rastreável (ex: `TO-2026-001`) que carrega toda a trilha de dados.
- **Golden path:** o caminho único e contínuo demonstrado no pitch (plantio→consumidor).
- **Timeline:** lista ordenada de eventos do lote, fonte de verdade compartilhada entre as telas.
- **Semáforo:** estado visual verde/amarelo/vermelho de logística (tempo) ou validade.
- **Passaporte:** a landing pública do consumidor com a origem/jornada do produto.
- **Alerta preditivo (simulado):** card gerado por regra fixa (RN-01) que emula a "IA".
- **Painel de privacidade:** controle B2B/B2C do que o QR exibe (RN-04).
- **Snapshot público:** versão reduzida do lote embutida no QR para a landing funcionar em outro celular sem depender do storage do computador da equipe.
