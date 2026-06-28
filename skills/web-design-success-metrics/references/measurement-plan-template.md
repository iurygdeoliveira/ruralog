# Measurement Plan Template — Modo BASELINE

> Use este template para o **modo BASELINE**. O resultado é um **Plano de Mensuração**
> entregável, capturando KPIs, instrumentação, baselines e metas.
>
> Seja literal nos campos. Não use linguagem genérica.

---

## Template: MEASUREMENT_PLAN.md

```markdown
# Plano de Mensuração — {Nome do Projeto/Site}

> Data: {YYYY-MM-DD}
> Owner: {Nome — quem é responsável pelo plano}
> Status do projeto: ☐ Pre-launch  ☐ Pós-launch (D+{N})  ☐ Redesign de site existente
> URL do site: {url}

---

## 1. Contexto de Negócio

**O que o site precisa fazer:**
{1 frase descrevendo o objetivo de negócio. Ex: "Capturar leads B2B qualificados
para vendedores fecharem a venda."}

**Evento de conversão primário (UM só):**
{Ex: "Formulário 'Solicitar Demo' submetido com sucesso"}

**Eventos de conversão secundários:**
- {Ex: Newsletter signup}
- {Ex: Download de e-book}
- {Ex: Visualização de vídeo demo até o fim}

**Público-alvo:**
{Persona específica. Ex: "Diretor de Marketing em empresa B2B SaaS, 20-200 funcionários, Brasil/LATAM."}

**Tipo de projeto:**
- [ ] Site novo (sem histórico)
- [ ] Redesign de site existente
- [ ] A/B test de mudança específica

---

## 2. KPIs por Grupo de Métricas

### 2.1. Usabilidade

| Métrica           | Valor atual / Baseline | Meta D+30 | Meta D+90 | Ferramenta            | Cadência | Owner |
|-------------------|------------------------|-----------|-----------|-----------------------|----------|-------|
| Task Success Rate (form de demo)| {X% ou "sem dado"} | {Y%} | {Z%} | Hotjar Funnel        | Mensal   | {nome}|
| User Error Rate (rage clicks)   | {X/sessão}           | {Y}    | {Z}    | Microsoft Clarity     | Mensal   | {nome}|
| CSAT pós-form     | {X% ou N/A}            | {Y%}      | {Z%}      | Hotjar Survey         | Trimestral | {nome}|
| NPS               | {X ou N/A}             | {Y}       | {Z}       | Survey via email      | Trimestral | {nome}|

### 2.2. Performance

| Métrica           | Valor atual / Baseline | Meta D+30 | Meta D+90 | Ferramenta            | Cadência | Owner |
|-------------------|------------------------|-----------|-----------|-----------------------|----------|-------|
| LCP mobile        | {X.Xs}                 | ≤2.5s     | ≤2.0s     | PageSpeed Insights/CrUX| Semanal | {nome}|
| CLS               | {0.XX}                 | ≤0.1      | ≤0.05     | PageSpeed Insights    | Semanal  | {nome}|
| INP               | {Xms}                  | ≤200ms    | ≤150ms    | CrUX                   | Mensal  | {nome}|
| Page Load Time    | {Xs}                   | ≤3s       | ≤2s       | GA4 / GTmetrix         | Semanal  | {nome}|
| Mobile usability issues | {N}              | 0         | 0         | Search Console         | Semanal  | {nome}|

### 2.3. SEO & Visibilidade

| Métrica           | Valor atual / Baseline | Meta D+30 | Meta D+90 | Ferramenta            | Cadência | Owner |
|-------------------|------------------------|-----------|-----------|-----------------------|----------|-------|
| Tráfego orgânico mensal | {N sessões}      | {N}       | {N}       | GA4                    | Mensal   | {nome}|
| Top 5 keywords ranking médio| {pos. X}    | ≤{Y}      | ≤{Z}      | Search Console / Ahrefs| Mensal   | {nome}|
| Pages indexed     | {N}                    | {N}       | {N}       | Search Console         | Semanal  | {nome}|
| Crawl errors      | {N}                    | <5        | 0         | Search Console         | Semanal  | {nome}|
| Referring domains | {N}                    | +{N}      | +{N}      | Ahrefs                 | Mensal   | {nome}|

### 2.4. Engajamento

| Métrica           | Valor atual / Baseline | Meta D+30 | Meta D+90 | Ferramenta            | Cadência | Owner |
|-------------------|------------------------|-----------|-----------|-----------------------|----------|-------|
| Bounce rate (LP principal)| {X%}            | {Y%}      | {Z%}      | GA4                    | Semanal  | {nome}|
| Avg engagement time| {X min/seg}           | {Y}       | {Z}       | GA4                    | Semanal  | {nome}|
| Pages per session | {X.X}                  | {Y}       | {Z}       | GA4                    | Semanal  | {nome}|
| Exit rate (checkout/form)| {X%}            | {Y%}      | {Z%}      | GA4                    | Mensal   | {nome}|

### 2.5. Conversão

| Métrica           | Valor atual / Baseline | Meta D+30 | Meta D+90 | Ferramenta            | Cadência | Owner |
|-------------------|------------------------|-----------|-----------|-----------------------|----------|-------|
| Conversion Rate (macro)| {X%}              | {Y%}      | {Z%}      | GA4                    | Semanal  | {nome}|
| Lead/Sale volume mensal| {N}               | {N}       | {N}       | GA4 + CRM              | Mensal   | {nome}|
| Mobile CR         | {X%}                   | {Y%}      | {Z%}      | GA4                    | Semanal  | {nome}|
| Cart/Form abandonment| {X%}                | {Y%}      | {Z%}      | Hotjar Forms           | Mensal   | {nome}|
| CPA (paid traffic)| R$ {X}                 | R$ {Y}    | R$ {Z}    | GA4 + Ad platform      | Mensal   | {nome}|

---

## 3. Definição de Sucesso, Neutro e Falha

Critério para classificar o redesign após **D+90**:

**🟢 Sucesso pleno:**
- Conversion Rate **≥ {meta D+90}**, E
- Performance (LCP, CLS, INP) em "Good" para ≥75% das visitas, E
- Tráfego orgânico mantido ou crescendo, E
- Bounce rate **igual ou menor** ao baseline.

**🟡 Sucesso parcial:**
- Conversion Rate manteve ou subiu até {meta D+30}, mas alguma dimensão regrediu.
- Permitido se: regressão não é em tráfego orgânico (que toma 90+ dias para
  estabilizar) e as outras métricas estão saudáveis.

**🔴 Falha:**
- Conversion Rate caiu **>10%** vs baseline, OU
- Tráfego orgânico caiu **>20%** após D+90 sem recuperação, OU
- Performance degradou (LCP/CLS pioraram), OU
- Volume absoluto de leads/vendas caiu independente do CR.

**Plano de contingência se 🔴:**
1. Análise de causa-raiz em 7 dias (ver `success-report-template.md`)
2. Hotfix em até 14 dias para o problema crítico
3. Re-leitura D+30 pós-fix

---

## 4. Mapa de Instrumentação

### Setup obrigatório antes do launch

- [ ] **GA4** instalado em todas as páginas via tag manager
  - [ ] **Essenciais LP:** `scroll_depth_75`, `cta_click` (param `placement`), macro (`form_submit` ou `checkout_complete`), `whatsapp_click` (opcional BR)
  - [ ] Conversão macro definida em GA4
  - [ ] Cross-domain tracking se aplicável
- [ ] **Google Search Console** verificado (domínio + URL prefix)
  - [ ] Sitemap.xml submetido
  - [ ] robots.txt validado
- [ ] **Microsoft Clarity** instalado (heatmap + recording gratuitos)
- [ ] **Hotjar** ou similar para survey CSAT pós-conversão
- [ ] **Ahrefs / Semrush** com lista de keywords-alvo trackeada
- [ ] **CRM integrado** com event tracking (lead source, attribution)
- [ ] **Tag de retargeting** (Meta Pixel, LinkedIn, Google Ads)
- [ ] **Tag de A/B testing** (VWO, Optimizely, Posthog) se for testar variações

### Eventos críticos a configurar no GA4

**Mínimo para LP (prioridade):**

| Event name             | Trigger                                    | Conversion? |
|------------------------|--------------------------------------------|-------------|
| `scroll_depth_75`      | 75% do scroll                              | Não         |
| `cta_click`            | Click em CTA primário                      | Sim (micro) |
| `form_submit`          | Submit success do form                     | **Sim (macro)** |
| `checkout_complete`    | Pagamento confirmado                       | **Sim (macro)** |
| `whatsapp_click`       | Click em WhatsApp (BR)                     | Não (micro assistido) |

Parâmetro recomendado em `cta_click`: `placement` = `hero` | `mid` | `footer`.

**Eventos adicionais (opcional):**

| Event name             | Trigger                                    | Conversion? |
|------------------------|--------------------------------------------|-------------|
| `view_landing`         | Pageview de LP                             | Não         |
| `form_start`           | Foco no primeiro campo do form             | Não         |
| `form_error`           | Validation error em form                   | Não         |
| `scroll_50`            | 50% do scroll                              | Não         |
| `cta_secondary_click`  | Click em CTA secundário                    | Não         |
| `pricing_view`         | Pageview /pricing                          | Não         |
| `purchase` (e-comm)    | Transação completa                         | **Sim (macro)** |

### Verificação pré-launch

- [ ] Instalou GA4 e disparou evento de teste? Confirma em DebugView
- [ ] Search Console reconhecendo crawl?
- [ ] PageSpeed Insights rodou? Score base anotado?
- [ ] Mobile-Friendly Test passou?
- [ ] 301s de URLs antigas para novas configurados?
- [ ] sitemap.xml gerado e referenciado em robots.txt?
- [ ] Open Graph e Twitter Card tags configuradas?
- [ ] JSON-LD Schema.org no HTML (Article, Product, Organization, etc.)?

---

## 5. Calendário de Reviews

| Marco       | Data prevista | O que medir                                  | Responsável |
|-------------|---------------|----------------------------------------------|-------------|
| **D+0**     | {YYYY-MM-DD}  | Snapshot pré-launch (último dia do site velho)| {nome}     |
| **D+1**     | {YYYY-MM-DD}  | Health check de tracking + crawl errors      | {nome}      |
| **D+7**     | {YYYY-MM-DD}  | Performance + bounce + erros 404             | {nome}      |
| **D+14**    | {YYYY-MM-DD}  | CSAT + heatmap + form abandonment            | {nome}      |
| **D+30**    | {YYYY-MM-DD}  | Review completa — usar `success-report-template.md` | {nome}|
| **D+60**    | {YYYY-MM-DD}  | SEO trend + CR estabilizada                  | {nome}      |
| **D+90**    | {YYYY-MM-DD}  | Veredicto formal — Sucesso/Neutro/Falha     | {nome}      |
| **D+180**   | {YYYY-MM-DD}  | Review estratégica e plano de iteração      | {nome}      |

---

## 6. Premissas e Limitações

**Premissas declaradas:**
- {Ex: "Tráfego pago vai crescer 20% no Q2 — atribuição de mudança em CR pode incluir efeito de mídia, não só design"}
- {Ex: "Versão velha do site teve dado coletado via UA, não GA4 — comparações com baseline pré-julho-2023 têm limitação metodológica"}

**Sazonalidades a considerar:**
- {Ex: "Q4 sempre é forte por Black Friday — comparações Q4 vs Q1 enviesam"}

**Eventos externos durante o período:**
- {Ex: "Lançamento de produto novo concorrente em mai/2026"}
- {Ex: "Migração de hosting prevista para D+45 — pode afetar performance"}

---

## 7. Aprovação

- [ ] Plano revisado e aprovado por: {nome do stakeholder}
- [ ] Data de aprovação: {YYYY-MM-DD}
- [ ] Próxima revisão do plano agendada para: {YYYY-MM-DD}

```

---

## Como preencher este template no modo BASELINE

1. **Pegue o contexto de negócio do usuário** antes de qualquer KPI.
2. **Para cada um dos 5 grupos**, pergunte ao usuário:
   - Qual é o valor atual? (se redesign)
   - Tem dado? Se não → marcar `Sem dado` e priorizar instrumentação
   - O que seria sucesso?
3. **Não preencha metas inventadas** — se não há baseline e o usuário não sabe o
   que quer, use `references/benchmarks.md` como referência e **explicite** que
   é benchmark, não meta acordada.
4. **Critério de sucesso/falha** precisa ser **acordado com o stakeholder antes
   do launch**. Sem isso, qualquer interpretação pós-launch é arbitrária.
5. **Mapa de instrumentação não é opcional.** Sem GA4 + Search Console no mínimo,
   não há mensuração possível.
