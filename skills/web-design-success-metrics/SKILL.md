---
name: web-design-success-metrics
description: >
  Mede o sucesso de projetos de web design com DADOS reais, cobrindo 5 dimensões:
  Usabilidade (TSR, UER, CSAT, NPS), Performance (Core Web Vitals, page load,
  mobile), SEO (tráfego orgânico, keywords, backlinks), Engajamento (session
  duration, bounce/exit, pages/session) e Conversão (CR, volume, CPA). Use SEMPRE
  que o usuário mencionar: medir sucesso de site/redesign/landing page, KPIs de
  site, métricas pós-launch, plano de mensuração, analytics de redesign, comparar
  antes e depois, taxa de conversão, bounce rate, exit rate, Core Web Vitals, LCP,
  CLS, INP, page speed, tráfego orgânico, keyword ranking, CSAT, NPS, CPA, ROI de
  design, "meu redesign deu certo?", "definir KPIs", "auditoria de métricas",
  "relatório de performance", instrumentação GA4/Search Console/Hotjar/Clarity, ou
  pedido para medir/avaliar/reportar resultado de design web baseado em dado.
  Diferente de conversion-design-review (heurística), esta skill exige números —
  consome dados e produz diagnóstico ou relatório com evidência.
metadata:
  author: iury
  version: 1.0.0
  source: Dribbble — How To Measure The Success of A Web Design Project (Apr 2026)
---

# Web Design Success Metrics — Medição de Resultado de Projetos Web

> "Seu site pode parecer bonito, mas o sucesso real do design está em quão bem ele
> funciona. Para julgar impacto, ignore opiniões e foque em dado bruto."
> — Dribbble (2026)

Esta skill traduz o framework da Dribbble em três modos operacionais para
medir, diagnosticar e reportar o sucesso de qualquer projeto web — landing page,
site institucional, e-commerce, dashboard SaaS — com base em **dados quantitativos**,
não em julgamento estético.

---

## Os 5 Grupos de Métricas (mapa rápido)

Cada grupo responde uma pergunta diferente. Nenhum sozinho conta a história inteira.

| # | Grupo                        | Pergunta que responde                                       | Métricas-âncora                              |
|---|------------------------------|--------------------------------------------------------------|----------------------------------------------|
| 1 | **Usabilidade (UX)**         | As pessoas conseguem usar o site?                            | TSR, UER, CSAT, NPS                          |
| 2 | **Performance**              | O site é rápido e estável?                                   | LCP, CLS, Page Load Time, Mobile Friendliness|
| 3 | **SEO & Visibilidade**       | As pessoas encontram o site?                                 | Tráfego orgânico, keyword rankings, backlinks|
| 4 | **Engajamento**              | As pessoas exploram o site?                                  | Session duration, bounce/exit rate, PPS      |
| 5 | **Conversão**                | O site gera resultado de negócio?                            | CR, lead/sale volume, CPA                    |

Para profundidade em cada métrica, consulte o reference correspondente:

| Grupo            | Arquivo                                       |
|------------------|-----------------------------------------------|
| Usabilidade      | `references/usability-metrics.md`             |
| Performance      | `references/performance-metrics.md`           |
| SEO              | `references/seo-metrics.md`                   |
| Engajamento      | `references/engagement-metrics.md`            |
| Conversão        | `references/conversion-metrics.md`            |
| Benchmarks       | `references/benchmarks.md` *(thresholds consolidados)* |

---

## Três Modos de Operação

Identifique pelo contexto do usuário qual modo aplicar. Se não estiver claro, **pergunte explicitamente**:

> "Você quer **definir KPIs/baseline** antes do lançamento (BASELINE), **medir e
> diagnosticar** um site já no ar (MEASURE), ou **gerar um relatório executivo** de
> performance (REPORT)?"

| Modo          | Quando usar                                                  | Saída                                |
|---------------|--------------------------------------------------------------|--------------------------------------|
| **BASELINE**  | Antes/durante lançamento; pré-redesign; quer instrumentar    | Plano de Mensuração                  |
| **MEASURE**   | Site já lançado; quer auditar números; tem dados em mãos     | Diagnóstico de Métricas              |
| **REPORT**    | Pós-período (mensal, pós-30 dias, pós-trimestre)             | Relatório Executivo (antes vs depois)|

---

## Modo BASELINE — Plano de Mensuração

**Objetivo:** Garantir que o projeto saia do ar com instrumentação completa, KPIs
definidos e baseline registrado, para que daqui a 30/60/90 dias seja possível dizer
com dado se o redesign foi sucesso.

### Passos

1. **Coletar contexto de negócio:**
   - Qual é o objetivo de negócio do site? (vender, gerar lead, educar, recrutar)
   - Qual é o evento de conversão primário? (UM só — compra, signup, demo, contato)
   - Existem objetivos secundários? (newsletter, download, share)
   - O site é redesign de algo existente OU launch novo?
     - Se redesign: pedir as métricas atuais do site velho como **baseline**.
     - Se launch novo: definir benchmarks de mercado/competidores (ver `benchmarks.md`).

2. **Para cada um dos 5 grupos, definir:**
   - **Métrica-alvo** (1-3 por grupo, não todas — foque no que importa para o negócio)
   - **Valor atual** (se redesign) ou **benchmark** (se novo)
   - **Meta pós-launch** (30/60/90 dias)
   - **Ferramenta de coleta** (ver tabela de instrumentação abaixo)
   - **Frequência de leitura** (semanal, mensal, trimestral)

3. **Mapear instrumentação obrigatória.** Use a tabela:

   | Métrica                          | Ferramenta primária             | Alternativa                  |
   |----------------------------------|---------------------------------|------------------------------|
   | TSR / UER                        | Hotjar / Microsoft Clarity      | FullStory, Mouseflow         |
   | CSAT / NPS                       | Survey tool (Typeform, Hotjar)  | In-app pop-ups               |
   | LCP / CLS / FID/INP              | PageSpeed Insights, CrUX        | Lighthouse, WebPageTest      |
   | Page Load Time                   | GA4, GTmetrix                   | Pingdom                      |
   | Mobile Friendliness              | Search Console (Mobile Usability) | Lighthouse mobile          |
   | Tráfego orgânico                 | GA4 + Search Console            | SimilarWeb                   |
   | Keyword rankings                 | Search Console, Ahrefs, Semrush | Google Search Console gratuito|
   | Backlinks                        | Ahrefs, Semrush, Moz            | Ubersuggest                  |
   | Session duration / Bounce / PPS  | GA4 (Engagement Reports)        | Matomo, Plausible            |
   | Conversion Rate                  | GA4 Events + Conversões         | Mixpanel, Amplitude          |
   | CPA                              | GA4 + Plataforma de Ads         | HubSpot, Salesforce          |

4. **Ler `references/measurement-plan-template.md`** e preencher o template.

5. **Validar com o usuário antes de fechar:**
   - Existe baseline registrado para todas as métricas? (sem isso, "sucesso" vira opinião)
   - Cada KPI tem dono nominal? (quem lê o número e age)
   - Qual é a cadência de review? (semanal, mensal)

6. **Entregar o Plano de Mensuração** com:
   - Tabela de KPIs por grupo
   - Mapa de instrumentação
   - Calendário de leituras (D+7, D+30, D+90)
   - Critérios de "sucesso", "neutro" e "falha" do redesign

**Bridge com briefing:** se existir `briefing.md` do `briefing-landing-page`, importar KPIs, meta 30/60/90 e **`densidade: compacta|expandida`** da Fase ALINHAR — não redefinir do zero.

**Eventos GA4 essenciais (LP):** configure no mínimo antes do launch:

| Evento | Parâmetros | Uso |
|--------|------------|-----|
| `scroll_depth_75` | — | Leitor chegou ao fundo? |
| `cta_click` | `placement`: hero \| mid \| footer | Qual CTA converte |
| Macro-conversão | `form_submit` ou `checkout_complete` | CR primário |
| `whatsapp_click` | opcional (mercado BR) | Funil assistido |

Não exigir tracking por seção/módulo — só se briefing marcar `expandida` e cliente pedir granularidade.

---

## Modo MEASURE — Diagnóstico de Métricas

**Objetivo:** Pegar dados reais de um site já no ar e dizer, grupo por grupo, **o que
está bom**, **o que está ruim**, **por quê**, e **qual ajuste de design provavelmente
move o número**.

### Passos

1. **Coletar dados reais.** Pedir ao usuário números concretos para cada grupo (não
   suposições). Se faltar algo, marcar como `Sem dado` — não inventar.

   **Mínimo aceitável para diagnóstico útil:**
   - Performance: LCP, CLS, Page Load (PageSpeed/CrUX print ou número)
   - SEO: Tráfego orgânico mensal e top 5 keywords (Search Console)
   - Engajamento: Session duration, Bounce rate, Pages/session (GA4)
   - Conversão: CR atual e volume de leads/vendas
   - Usabilidade: Pelo menos um de TSR, UER, CSAT, NPS (se existir)

   Se o usuário não tem nada, sugerir começar pelo modo **BASELINE** e instrumentar
   antes de medir.

2. **Para cada grupo, aplicar o framework do reference correspondente** e classificar:

   | Símbolo | Significado                                  |
   |---------|----------------------------------------------|
   | 🟢      | Dentro do benchmark / meta atingida          |
   | 🟡      | Abaixo do benchmark mas não crítico          |
   | 🔴      | Crítico — está custando dinheiro/tráfego     |
   | ⚪      | Sem dado — instrumentar primeiro             |

3. **Para cada 🔴 e 🟡, propor a hipótese de design.** Consulte `references/design-hypothesis-map.md` — cite a **lei UX nomeada** + ação concreta. Não dar diagnóstico genérico.
   Exemplos válidos:
   - 🔴 LCP de 4.8s → "Hero image de 2.3MB sem WebP/lazy. Trocar para WebP + preload da
     imagem above-the-fold deve baixar para <2.5s."
   - 🔴 Bounce 78% no /pricing → "A primeira tela mostra 4 planos sem destaque visual
     do recomendado. Aplicar variant 'Most Popular' no plano-âncora."
   - 🔴 CR de checkout 1.2% → "Form de 9 campos. Reduzir para 4 essenciais (nome,
     email, cartão, CEP) e mover os outros para pós-compra."

4. **Cruzar grupos para encontrar conflitos.** Padrões comuns:
   - Tráfego orgânico ALTO + Bounce ALTO + CR BAIXO → SEO traz audiência errada OU
     LP não cumpre a promessa do SERP.
   - Page Load BAIXO + Session Duration ALTA + CR BAIXO → engajamento sem ação =
     CTA escondido ou friction de checkout.
   - LCP ALTO + Bounce ALTO em mobile → site desktop-first sendo penalizado por
     mobile-first indexing do Google.
   - CSAT ALTO + NPS BAIXO → satisfação imediata existe mas não vira lealdade
     (provavelmente UX boa, mas valor de produto ou retorno fraco).

5. **Priorizar correções por (Impacto × Facilidade).** Top 3 sempre primeiro.

6. **Ler `references/success-report-template.md`** se for entregar diagnóstico
   estruturado em formato apresentável.

---

## Modo REPORT — Relatório Executivo

**Objetivo:** Comunicar para stakeholders (cliente, CEO, VP Marketing) o resultado do
projeto de design **em linguagem de negócio**, com comparação **antes vs depois** e
recomendações concretas para a próxima iteração.

### Passos

1. **Confirmar período de comparação** e dados disponíveis:
   - Período pré-redesign (ex: jan-mar) vs período pós-redesign (ex: abr-jun)
   - Sazonalidade considerada? (ex: comparar mesmo trimestre do ano anterior)
   - Existe baseline pré-launch? Se não, marcar limitação no relatório.

2. **Para cada grupo, calcular delta:**
   - `Δ% = ((Pós − Pré) / Pré) × 100`
   - Para métricas onde MENOR é melhor (LCP, CLS, Bounce, CPA, UER), inverter sinal
     na narrativa.

3. **Identificar a história do redesign.** O relatório precisa de UMA narrativa
   central — não despejar 30 números. Padrões comuns:
   - **"Redesign foi um sucesso técnico mas não comercial"** → Performance melhorou,
     SEO melhorou, mas CR caiu/ficou igual. Hipótese: hierarquia visual ou copy.
   - **"Redesign foi um sucesso comercial parcial"** → CR subiu mas CPA não caiu na
     mesma proporção. Hipótese: tráfego pago não está achando a página tão
     persuasiva quanto orgânico.
   - **"Redesign foi um sucesso pleno"** → Todas as 5 dimensões melhoraram. Foco do
     relatório vira priorizar próximas oportunidades.
   - **"Redesign foi neutro/falho"** → Investigar regressão antes de declarar sucesso.

4. **Estruturar o relatório** seguindo `references/success-report-template.md`:
   - **Resumo Executivo** (3 bullets — o que é bom contar para o C-level)
   - **Tabela 5×3** (grupo × pré/pós/Δ)
   - **Análise por grupo** (1 parágrafo cada)
   - **Top 3 Wins** (atribuíveis ao design)
   - **Top 3 Problemas** (com hipótese de design + ação proposta)
   - **Roteiro de iteração** (próximo trimestre)

**Bridge com briefing:** referenciar testes A/B recomendados na Fase CONSOLIDAR do `briefing-landing-page`, se existirem.

5. **Cuidados ao redigir:**
   - **Atribuição honesta.** Nem todo movimento de métrica é causado pelo redesign
     (sazonalidade, mudança de mídia, evento de mercado). Se não houver A/B test ou
     diff-in-diff confiável, escrever "associado ao redesign", não "causado pelo
     redesign".
   - **Mostrar tendência, não foto.** Sempre que possível, mostrar série temporal,
     não apenas média do período.
   - **Não esconder métrica que regrediu.** Stakeholders perdem confiança em
     relatório que parece comercial demais. Reportar regressões com hipótese.

---

## Princípios Inegociáveis ao Aplicar a Skill

1. **Dado primeiro, opinião nunca.** Se o usuário pede "achismo" sobre o site, ofereça
   redirect para a skill `conversion-design-review` (heurística) e explique que esta
   skill exige números.

2. **Sem baseline, sem sucesso.** Não declare nenhum redesign como "bem-sucedido" sem
   um valor anterior comparável OU benchmark de mercado claro.

3. **Mobile-first em qualquer leitura.** Toda métrica deve ser segmentada por mobile
   vs desktop quando possível. Google indexa mobile primeiro; ignorar isso é cegueira.

4. **Conversão é o juiz final, mas não o único juiz.** Um redesign que dobra a CR e
   destrói o tráfego orgânico em 6 meses não é sucesso. Olhe o sistema, não a métrica
   isolada.

5. **Velocidade é feature.** Performance entra em todas as conversas — afeta SEO,
   engajamento e conversão simultaneamente. Quando em dúvida sobre o que priorizar,
   priorize Core Web Vitals.

6. **Não confie em vaidade.** Pageviews altos sem CR proporcional não é sucesso.
   Backlinks de domínios irrelevantes não são autoridade. Tempo de sessão alto pode
   significar usuário perdido. Sempre cruze duas ou mais métricas antes de declarar
   resultado.

7. **Cite a fonte do número.** Toda afirmação numérica no relatório precisa ter
   ferramenta + período + segmento (ex: "GA4, mar/abr/mai 2026, mobile only").

8. **Use os benchmarks da fonte.** Esta skill usa thresholds documentados em
   `references/benchmarks.md` (ex: LCP <2.5s, CLS <0.1, bounce mobile bom <40%, CR
   B2B SaaS 3-5%, etc.). Não invente número novo — peça ao usuário ou cite o
   benchmark explicitamente. **Proibido** aceitar métricas de marketing inventadas ("10× faster") — ver `benchmarks.md` § Integridade.

---

## Quando NÃO usar esta skill

- Usuário quer crítica de **design/estética** sem dado → use `conversion-design-review`.
- Usuário quer **otimizar HTML/JSON-LD/llms.txt** para SEO/GEO → use `landing-page-seo-geo`.
- Usuário quer **brief consultivo de discovery** antes do projeto → use
  `briefing-landing-page`.
- Usuário pergunta sobre **uma métrica isolada genérica** sem contexto de projeto
  (ex: "o que é NPS?") → responda direto, sem ativar workflow.

---

## Quando Consultar References

| Situação                                                          | Arquivo a ler                              |
|-------------------------------------------------------------------|--------------------------------------------|
| Detalhar TSR, UER, CSAT, NPS                                      | `references/usability-metrics.md`          |
| Detalhar LCP, CLS, page load, mobile friendliness                 | `references/performance-metrics.md`        |
| Detalhar tráfego orgânico, keyword rankings, backlinks            | `references/seo-metrics.md`                |
| Detalhar session duration, bounce/exit, pages per session         | `references/engagement-metrics.md`         |
| Detalhar CR, lead/sale volume, CPA                                | `references/conversion-metrics.md`         |
| Conferir threshold/benchmark de qualquer métrica                  | `references/benchmarks.md`                 |
| Modo BASELINE — preencher o plano                                 | `references/measurement-plan-template.md`  |
| Modo MEASURE / REPORT — formatar a entrega                        | `references/success-report-template.md`    |
| Hipótese 🔴/🟡 → lei UX → ação de design                          | `references/design-hypothesis-map.md`        |
| KPIs sociais (Instagram)                                          | `references/engagement-metrics.md` § 5       |

## Próximos passos (opcionais)

| Após modo | Invoque |
|-----------|---------|
| **BASELINE** | Implementar instrumentação; após lançamento, modo **MEASURE** em D+30 |
| **MEASURE** | Correções de design; re-medir em D+60 |
| **REPORT** | `markdown-to-html-artifact` com relatório → tipo `metrics-dashboard` → `./artifacts/` |
| Sem baseline prévio | `briefing-landing-page` Fase ALINHAR para definir KPIs primeiro |
