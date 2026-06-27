---
name: briefing-landing-page
description: |
  Conduz briefing consultivo de descoberta para landing pages de alta conversão em pt-BR.
  Aplica VoC, JTBD, LIFT Model e frameworks de copy. Produz briefing markdown e,
  opcionalmente, DESIGN.md com spec visual (9 seções) para execução de design.
license: MIT
triggers:
  - "landing page"
  - "LP"
  - "página de captura"
  - "página de vendas"
  - "página de conversão"
  - "briefing de LP"
  - "discovery de LP"
  - "levantamento de requisitos de LP"
  - "planejamento de LP"
  - "copy de LP"
  - "otimização de conversão"
  - "CRO"
  - "auditoria de LP"
  - "entender o cliente"
  - "fazer discovery"
  - "definir o que entra na LP"
metadata:
  author: Iury Santos Nascimento
  version: 1.1.0
  language: pt-BR
  produces:
    - briefing.md
    - DESIGN.md
---

# Briefing para Landing Pages de Alta Conversão

Esta skill orienta a condução de um **briefing consultivo** para landing pages (LPs) orientadas a performance. O objetivo não é documentar passivamente o que o cliente pede — é **diagnosticar**, através de entrevista estruturada e metodologias validadas (VoC, JTBD, LIFT Model), a arquitetura real da página que maximizará conversão.

## Princípio operacional inegociável

Landing pages de performance **não são exercícios estéticos**. A "Taxa de Atenção 1:1" determina que cada LP tem **um único objetivo de negócio** e **uma única ação possível**. Barras de navegação, carrosséis, múltiplos CTAs, menus e links institucionais são **vetores de distração** que colapsam o ROI da campanha.

Isso significa que, como condutor do briefing, você deve operar como **vendedor consultivo**, não como estenógrafo. Quando o cliente pedir "queria um carrossel aqui" ou "precisa de um menu igual ao site", você **desafia a suposição** com escuta ativa e reorienta a decisão para critérios de conversão — sempre de forma respeitosa, mas sem ceder ao que sabidamente prejudica o resultado.

## Quando usar esta skill

Sempre que o objetivo for:
- Coletar requisitos para criar uma LP do zero
- Auditar uma LP existente sob a ótica de conversão
- Refinar uma proposta de LP mal estruturada
- Transformar ideias vagas do cliente em um briefing acionável por designer/copywriter
- Validar se o que o cliente pede faz sentido antes de executar

**Não use** para: websites institucionais multipágina, e-commerces completos, blogs, ou qualquer projeto onde a exploração multifacetada seja o objetivo (use briefing de UX/web tradicional nesses casos).

## Modos de operação

A skill opera em **seis modos** que correspondem às fases do briefing. Por padrão, execute em sequência (modo `COMPLETO`). O usuário pode invocar um modo específico quando já tiver dados prévios ou quiser focar em um recorte.

| Modo | Quando usar | Artefato produzido |
|---|---|---|
| `ALINHAR` | Primeiro contato: alinhar negócio, stakeholders e sucesso | Declaração de objetivo + métricas |
| `DESCOBRIR` | Mapear o público-alvo por VoC + JTBD | Perfil psicográfico + Declaração JTBD |
| `AUDITAR` | Diagnóstico heurístico de página existente | Relatório LIFT + lista de fricções |
| `ESTRUTURAR` | Decidir anatomia e hierarquia da página | Wireframe textual + decisões de bloco |
| `REDIGIR` | Escolher framework de copy e gerar headlines | Headline + bullets + CTA + microcopy |
| `CONSOLIDAR` | Gerar o briefing final consolidado | `briefing.md` + opcionalmente `DESIGN.md` |
| `COMPLETO` | Fluxo default: passar por todos na ordem | Tudo acima + `DESIGN.md` (default sim) |

Quando o modo não for informado, pergunte uma vez qual modo o usuário quer e avance. Se o usuário disser algo como "quero fazer um briefing completo para a LP", assuma `COMPLETO`.

## Como conduzir a entrevista (crítico)

**Não despeje todas as perguntas de uma vez.** Isso colapsa a qualidade das respostas e gera fadiga. A entrevista deve ser conversacional:

1. **Pergunte de 1 a 3 itens por turno**, agrupados por tema lógico.
2. **Escute a resposta inteira** antes de avançar — se algo estiver vago ou contraditório, aprofunde com uma pergunta de follow-up antes de seguir.
3. **Desafie suposições quando identificar risco de conversão.** Exemplos:
   - Cliente: "Queria uma barra de navegação no topo igual a do site."
   - Você: "Entendi a motivação de manter consistência visual. Porém, LPs de performance removem navegação porque ela dilui a taxa de atenção: cada link extra é uma rota de fuga que corrói o ROI da campanha. Qual é a fonte de tráfego principal dessa LP? Se for mídia paga ou e-mail, a recomendação firme é omitir a navegação. Podemos manter a identidade visual por outros meios (logotipo, tipografia, cores). Faz sentido?"
4. **Traduza jargão do cliente em critérios de negócio.** Se ele diz "queria algo impactante", peça exemplos de LPs que ele admira e por quê — isso revela critérios reais.
5. **Ancore em métricas desde o início.** Se o cliente não sabe definir sucesso em números, ajude-o a quantificar: "Hoje, quantos leads por mês vocês geram? O que seria um bom resultado dessa LP em 30 dias? 50 MQLs? 200?"

## Fluxo das fases

### Fase 1 — ALINHAR (negócio e stakeholders)

Objetivo: estabelecer o objetivo único da página, métricas de sucesso, e mapear quem precisa aprovar o que antes que a execução comece.

**Perguntas centrais** (escolha 2–3 por turno, não todas de uma vez):

- **Objetivo único:** "Qual é a **única ação** que você quer que o visitante execute nessa página? (ex.: preencher formulário, marcar demo, comprar plano X, baixar e-book)."
- **Métrica de sucesso:** "Em 30 dias de página no ar, qual número faria você considerar esse projeto um sucesso inegável? E qual seria o mínimo aceitável?"
- **Fonte de tráfego:** "De onde virão os visitantes? (Google Ads, Meta Ads, e-mail, orgânico, indicação, evento). Se for tráfego pago, qual é o anúncio ou o assunto do e-mail que levará ao clique?"
- **Oferta e urgência:** "O que está sendo oferecido? Existe algum elemento de escassez ou prazo real (estoque, turma limitada, data de encerramento)?"
- **Concorrência e diferenciação:** "Quem são os 2–3 concorrentes diretos e por que o cliente ideal escolheria você em vez deles?"
- **Stakeholders:** "Quem precisa aprovar a página antes do lançamento? Há alguém que costuma pedir mudanças de última hora?"
- **Densidade da LP:** "`compacta` (default) ou `expandida`? Compacta = 8–10 blocos (lead gen, SaaS trial, tráfego frio/morno). Expandida = 12–14 blocos max (venda direta, ticket alto, tráfego quente). Expandida só se 2 de 3: (a) ticket > R$500 ou ciclo consultivo, (b) tráfego pago/e-mail com intenção alta, (c) ≥3 objeções VoC que não cabem em FAQ de 5 itens. Se nenhum critério: compacta, sem negociação."

**Desafios comuns nesta fase:**
- Cliente define múltiplos objetivos ("queria que ele preenchesse o form, se inscrevesse na newsletter, e baixasse o e-book"). → Você explica a Taxa de Atenção 1:1 e força a priorização.
- Métrica de vaidade ("quero bastante visita"). → Você redireciona para métrica de negócio ("visitas sem conversão são custo; vamos definir o número de leads qualificados").

### Fase 2 — DESCOBRIR (VoC + JTBD)

Objetivo: sair do perfil demográfico genérico ("homens 30–45 interessados em tecnologia") e chegar ao **perfil psicográfico acionável** + **Declaração JTBD**.

Leia `references/descoberta-usuario.md` para o roteiro completo de entrevistas VoC segmentadas (clientes recentes, fiéis, indecisos, ex-clientes), o script JTBD, e as 4 Forças (Push, Pull, Ansiedade, Inércia).

**Pergunte ao cliente** (2–3 itens por turno):

- **Segmento primário:** "Descreva uma pessoa real que comprou de você recentemente. Nome, cargo, contexto em que estava, que problema a levou a procurar você."
- **Linguagem do cliente:** "Você tem acesso a transcrições de calls de vendas, e-mails que clientes enviaram, avaliações públicas, ou chats de suporte? Isso é ouro puro: vamos minerar a linguagem exata que eles usam."
- **Trigger de decisão (JTBD):** "No dia em que ele decidiu resolver esse problema, o que aconteceu? O que quebrou? Com quem ele conversou antes de procurar você?"
- **Alternativas consideradas:** "Que outras soluções ele avaliou — concorrentes, improvisos internos, planilhas, não fazer nada?"
- **Ansiedades:** "Qual é o medo número um que faz alguém qualificado **não** comprar? (ex.: 'vai ser difícil migrar', 'minha equipe não vai adotar', 'o preço é alto demais')."

**Produza ao final desta fase:**
1. Um parágrafo descrevendo o cliente ideal em termos psicográficos (não demográficos).
2. Uma **Declaração JTBD** no formato: *"Quando [circunstância], eu quero [motivação], para que eu possa [resultado desejado] sem ter que [atrito/medo]."*
3. Lista das 3 principais objeções detectadas (usadas depois na Fase 5 para calibrar a prova social).

### Fase 3 — AUDITAR (opcional, só se houver página existente)

Se o cliente estiver **rescrevendo uma LP existente**, execute auditoria heurística antes de estruturar a nova.

Leia `references/heuristicas-e-anatomia.md` seção "LIFT Model" para o framework completo. Avalie a página existente em 6 dimensões: Proposta de Valor, Clareza, Relevância, Urgência, Ansiedade, Distração.

Aplique também o **Teste dos 5 Segundos**: descreva mentalmente a primeira dobra e pergunte: em 5 segundos, um visitante consegue responder (1) o que a empresa faz, (2) para quem, (3) qual é o próximo passo? Se qualquer uma falhar, a página falhou heuristicamente.

**Saída desta fase:** tabela de fricções com prioridade (crítica/alta/média) e recomendação de correção para cada uma.

### Fase 4 — ESTRUTURAR (anatomia da página)

Objetivo: decidir bloco a bloco o que entra, onde entra, e por quê.

Leia `references/heuristicas-e-anatomia.md` seções "Anatomia inegociável" e "Técnicas compactas inspiradas em sales pages". Respeite a **densidade** definida na Fase ALINHAR (`compacta` default, `expandida` exceção). Os blocos obrigatórios são:

1. **Headline (título principal)** — Message Match estrito com o anúncio/origem do tráfego.
2. **Subheadline** — complementa o benefício, endereça a primeira objeção.
3. **Hero Shot** — imagem/vídeo com olhar direcional para o CTA (proibido stock genérico).
4. **CTA primário "acima da dobra"** — verbo de posse/ganho ("Garantir minha vaga"), não verbo passivo ("Enviar").
5. **Bullets de benefício** — 3 a 5, cada um resolvendo uma objeção VoC.
6. **Prova social** — depoimentos com foto/cargo/empresa reais, logos de clientes, números concretos.
7. **Bloco de objeções** (FAQ estratégica) — apenas as 3–5 objeções mapeadas na Fase 2.
8. **Formulário** — estratégia Breadcrumb se houver mais de 4 campos; barra de progresso; microcopy de segurança abaixo do botão.
9. **CTA final + recap da oferta** — para o visitante que rolou até o fim.
10. **Página de Agradecimento** — não esqueça! Peak-End Rule exige encerramento emocional positivo.

**Decisões que você precisa tomar com o cliente nesta fase:**
- Vai haver seção de preços? Se sim, ancoragem visual (plano mais caro primeiro, ou "mais popular" destacado).
- Vídeo no hero ou imagem estática?
- Formulário inline ou modal ao clicar no CTA?
- Quantos campos no formulário? (Regra: o mínimo para qualificar. Se precisar mais de 4, fragmente em Breadcrumb.)

### Fase 5 — REDIGIR (copywriting framework)

Objetivo: escolher o framework arquitetural de copy e produzir as peças textuais principais.

Leia `references/copywriting-frameworks.md` para escolher entre AIDA, PAS, SPIN, Challenger — a escolha depende do tipo de oferta e do grau de consciência do público.

**Regra de ouro:** copy vem da Fase 2 (VoC). Não invente — minere.

**Produza nesta fase:**
- 3 variações de headline no formato: "[Benefício supremo] em [tempo curto] sem [dor comum]" — ancoradas na linguagem VoC.
- Subheadline (1 linha) que complementa a headline e mata a primeira ansiedade.
- 3–5 bullets de benefício (não features) redigidos com verbos de transformação.
- Copy do CTA primário (verbo de posse + resultado tangível).
- Microcopy abaixo do CTA (garantias, selos de confiança, redução de risco).

### Fase 6 — CONSOLIDAR (briefing final + spec visual)

#### 6.1 — Briefing markdown

Use o template em `references/template-briefing.md` para consolidar tudo em um único documento markdown (`briefing.md`). O briefing final deve:

- Ser autocontido: designer e copywriter executam a partir dele sem precisar refazer entrevistas.
- Trazer evidência para cada decisão (por que esse bloco? → porque o JTBD disse X; por que esse CTA? → porque o VoC mostrou Y).
- Deixar explícito o que foi descartado e por quê (ex.: "sem menu de navegação — decisão tomada para preservar Taxa de Atenção 1:1").
- Registrar **`densidade: compacta|expandida`** e critérios que justificaram a escolha (para `web-design-success-metrics` e `conversion-design-review`).
- Incluir seção de testes A/B recomendados pós-lançamento.

#### 6.2 — DESIGN.md (spec visual)

Após o briefing, gere também um **`DESIGN.md`** com a spec visual executável — a menos que o usuário peça explicitamente para omitir.

- **Modo `COMPLETO`:** assuma geração de `DESIGN.md` junto com o briefing. Pergunte uma vez só se o usuário quiser **apenas** o briefing, sem spec visual.
- **Modo `CONSOLIDAR` isolado:** pergunte: "Quer que eu gere também o `DESIGN.md` com a spec visual?"
- **Template:** siga `references/template-design-md.md` (9 seções numeradas + 8 dimensões simbólicas).
- **Validação craft:** antes de entregar, rode checklist de `references/validacao-craft.md`.
- **Fonte dos valores:** derive paleta, tipografia, layout e Do's/Don'ts das fases ALINHAR → REDIGIR. Use a tabela de resolução simbólica do template quando hex/fonts não foram discutidos — nunca invente cores fora do contexto.
- **Coerência:** exclusões do briefing (sem menu, sem carrossel, CTA único) devem aparecer em Do's and Don'ts e Agent Prompt Guide.
- **Transparência:** inclua ao final bloco "Dimensões resolvidas por default" para cada dimensão visual inferida, não declarada pelo cliente.
- **Proibições LP:** não use indigo Tailwind default, gradiente two-stop no hero nem emoji como ícones — registre isso nos DON'Ts.

Entregue `briefing.md` e `DESIGN.md` (quando aplicável) para download/compartilhamento.

## Economia comportamental: aplicação transversal

Em todas as fases, tenha estes vieses ativos em mente. Detalhes em `references/heuristicas-e-anatomia.md` seção "Economia comportamental":

- **Aversão à Perda:** copy deve enfatizar o custo do status quo, não só o benefício do futuro.
- **Nudging/Default:** na seção de preços, pré-selecione a opção mais vantajosa para o negócio.
- **Ancoragem:** mostre primeiro o preço mais alto ou o preço antigo riscado.
- **Efeito Zeigarnik:** formulários em etapas alavancam a vontade de completar tarefas iniciadas.
- **Peak-End Rule:** a página de agradecimento é parte do briefing, não um afterthought.

## O que NUNCA deixar passar no briefing

Estas decisões têm evidência empírica massiva. Se o cliente insistir contra, registre a objeção no documento final com sua recomendação contrária:

1. **Nenhuma barra de navegação tradicional** na LP.
2. **Um objetivo de conversão + um destino** (URL ou ação única). **Compacta:** mesmo copy no hero e footer; no máximo 1 CTA intermediário com rótulo contextual. **Expandida:** até 3 rótulos contextuais (hero, pós-prova social, footer) que completam "Eu quero…". Proibir WhatsApp e checkout como CTAs primários competindo.
3. **Message Match** entre anúncio/e-mail e headline — a mesma frase-chave deve aparecer.
4. **Depoimentos com atribuição real** (foto, nome, cargo, empresa) — anônimo não conta como prova social.
5. **Microcopy de redução de risco** junto do botão (garantia, segurança, "sem cartão de crédito", etc.).
6. **Teste dos 5 segundos** aprovado antes de ir ao ar.
7. **Página de agradecimento desenhada** — não mensagem genérica.

## Referências bundled

Sempre que precisar de profundidade metodológica, leia o arquivo correspondente:

- `references/descoberta-usuario.md` — Roteiros completos de entrevista VoC (por segmento), script JTBD, 4 Forças, como codificar respostas.
- `references/heuristicas-e-anatomia.md` — LIFT Model detalhado, framework heurístico CXL, economia comportamental aplicada, anatomia bloco a bloco com padrões validados.
- `references/copywriting-frameworks.md` — AIDA, PAS, SPIN, Challenger: quando usar cada um, exemplos, fórmulas de headline.
- `references/template-briefing.md` — Template markdown do documento final de briefing.
- `references/template-design-md.md` — Template das 9 seções do `DESIGN.md` (spec visual).
- `references/validacao-craft.md` — Checklist P0 visual pós-CONSOLIDAR (7 pecados + regra 20%).
- `references/checklist-implementacao-lp.md` — Blocos obrigatórios na implementação HTML/React.

## Regra de abertura

Quando a skill for acionada, inicie com uma saudação curta e uma pergunta de orientação, tipo:

> "Vamos montar o briefing da sua landing page. Para calibrar minhas perguntas, me diga primeiro: **você está criando uma LP nova do zero, refinando uma existente, ou auditando uma que não está convertendo?** E se puder, me adianta em uma frase: qual é a oferta e para quem é?"

A partir da resposta, entre no modo apropriado (`COMPLETO`, `AUDITAR`, etc.) e avance fase a fase — sem despejar perguntas em bloco.

## Próximos passos (opcionais)

Após entregar `briefing.md` + `DESIGN.md`:

1. **Compartilhar com cliente/equipe:** invoque `markdown-to-html-artifact` com `briefing.md` → tipo `briefing-lp` → `./artifacts/briefing-lp.html`
2. **Instrumentar antes do lançamento:** invoque `web-design-success-metrics` modo **BASELINE** usando KPIs e `densidade` definidos na Fase ALINHAR
3. **Se houver logo:** garanta que seções Color + Typography do `DESIGN.md` do `logo-design-ai` (modo ENTREGAR) alimentaram este `DESIGN.md`
4. **Implementação:** consulte `references/checklist-implementacao-lp.md` e valide com `references/validacao-craft.md`
