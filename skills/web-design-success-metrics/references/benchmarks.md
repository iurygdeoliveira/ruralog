# Benchmarks Consolidados — Thresholds para Avaliação

> Esta tabela centraliza **thresholds usados para classificar** uma métrica como
> 🟢 (bom), 🟡 (alerta) ou 🔴 (crítico) ao aplicar os modos MEASURE e REPORT.
>
> **Princípio:** sempre prefira comparar com **baseline próprio** (pré-redesign).
> Use estes benchmarks apenas quando não há baseline OU para complementar como
> referência de mercado.

---

## 1. Performance — Core Web Vitals e Velocidade

### Core Web Vitals (Google oficial)

| Métrica | 🟢 Good   | 🟡 Needs improvement | 🔴 Poor    |
|---------|-----------|----------------------|------------|
| LCP     | ≤ 2.5s    | 2.5–4.0s             | > 4.0s     |
| CLS     | ≤ 0.1     | 0.1–0.25             | > 0.25     |
| INP     | ≤ 200ms   | 200–500ms            | > 500ms    |
| FCP     | ≤ 1.8s    | 1.8–3.0s             | > 3.0s     |
| TTFB    | ≤ 800ms   | 800–1800ms           | > 1800ms   |

> Para passar o **CWV assessment do Google**, ≥75% das visitas reais (CrUX) precisam
> estar em "Good" para LCP, CLS e INP simultaneamente.

### Page Load Time (Dribbble — fonte do artigo)

| Tempo de Load   | Comportamento esperado                                  |
|-----------------|---------------------------------------------------------|
| 0-2s            | Faixa de maior conversão                                |
| ~3s             | ~40% considera abandonar                                |
| 5s+             | Maioria faz bounce; brand perception sofre              |

### Outros performance

| Métrica            | Bom        | Aceitável    | Ruim       |
|--------------------|------------|--------------|------------|
| Total page size    | <1.5MB     | 1.5-3MB      | >3MB       |
| HTTP requests      | <50        | 50-100       | >100       |
| Speed Index        | <3.4s      | 3.4-5.8s     | >5.8s      |

---

## 2. Engajamento

### Bounce Rate (varia por tipo de página)

| Tipo de site         | 🟢 Bom    | 🟡 Médio   | 🔴 Ruim    |
|----------------------|-----------|------------|------------|
| Landing page paga    | <40%      | 40-55%     | >55%       |
| E-commerce (catálogo)| <40%      | 40-55%     | >55%       |
| Blog                 | <70%      | 70-85%     | >85%       |
| B2B SaaS             | <50%      | 50-65%     | >65%       |
| Notícias / Mídia     | <60%      | 60-75%     | >75%       |

### Average Session Duration (varia por propósito)

| Tipo                 | Duração desejável                       |
|----------------------|----------------------------------------|
| Blog post longo      | 3-5min+                                |
| **LP compacta (default)** | **45s–2min**                      |
| **LP expandida (exceção)** | **2–5min**                       |
| Homepage             | 1-2min                                 |
| Página de Contato    | 10-30s (achou e foi)                   |
| Checkout             | 2-4min                                 |

> **Alerta:** engagement >5min com CR estagnado = sinal de **excesso de conteúdo**, não de sucesso. Prefira encurtar a LP antes de adicionar blocos.

### Scroll depth (LP)

| Densidade | Meta scroll depth |
|-----------|-------------------|
| Compacta  | ≥75% atinge CTA/form |
| Expandida | ≥60% atinge bloco de preço |

### Pages Per Session

| PPS              | Leitura típica                                |
|------------------|-----------------------------------------------|
| ~1               | Sem afford de exploração (ou single-LP intencional)|
| 2-3              | OK                                            |
| 3-5              | Bom para multi-page                           |
| 5+               | Depende do contexto (pode ser usuário perdido)|

### Engagement Rate (GA4 — inverso do bounce)

| Engagement Rate  | Leitura                                        |
|------------------|------------------------------------------------|
| >70%             | Excelente                                      |
| 50-70%           | OK                                             |
| <50%             | Problema de aderência                          |

---

## 3. SEO & Visibilidade

### CTR no SERP (Search Console) por posição

| Posição        | CTR aproximado    |
|----------------|-------------------|
| 1              | 27-40%            |
| 2              | 15-20%            |
| 3              | 9-12%             |
| 4-10           | 2-5% (somados)    |
| 11+            | <1%               |

### Janelas de tempo para julgar SEO pós-redesign

| Janela            | O que esperar                                  |
|-------------------|------------------------------------------------|
| 0-30 dias         | Flutuação normal, Google re-indexando          |
| 30-90 dias        | Tendência aparece                              |
| 90-180 dias       | Ganho real de autoridade aparece               |
| 180+ dias         | Plateau ou novo crescimento                    |

> **Não declare sucesso/falha de SEO antes de 90 dias.**

### Indicadores de SEO saudável pós-redesign

| Indicador                         | 🟢 Bom              | 🔴 Sinal de problema  |
|-----------------------------------|---------------------|------------------------|
| Pages indexed (Search Console)    | Cresce ou estável   | Cai 20%+               |
| Crawl errors                      | 0-5                 | >50                    |
| Mobile usability issues           | 0                   | Alguma                 |
| Core Web Vitals (URLs em "good")  | >75%                | <50%                   |
| Lost backlinks (Ahrefs)           | <5%                 | >20%                   |

---

## 4. Conversão

### Conversion Rate por setor (referência aproximada)

| Setor / Tipo                       | CR mediana | CR top 25% |
|------------------------------------|------------|------------|
| E-commerce geral                   | 2-3%       | 5-8%       |
| SaaS B2B (free trial)              | 3-5%       | 8-12%      |
| SaaS B2B (demo request)            | 1-2%       | 3-5%       |
| Lead gen B2B (form)                | 2-3%       | 5-7%       |
| Newsletter signup                  | 1.5-2.5%   | 4-6%       |
| Landing page paga (Google Ads)     | 4-6%       | 10%+       |
| Marketplace                        | 1-2%       | 3-5%       |
| Cursos online                      | 2-4%       | 7-10%      |

### Mobile vs Desktop CR

> Mobile costuma ter CR **30-50% menor** que desktop. Sempre segmentar.

### Cart / Form Abandonment

| Métrica                    | Bom        | Ruim       |
|----------------------------|------------|------------|
| Cart abandonment           | <60%       | >75%       |
| Form abandonment           | <30%       | >50%       |
| Checkout completion rate   | >70%       | <50%       |

### CPA / ROAS health

| Métrica                  | Saudável            |
|--------------------------|---------------------|
| ROAS (e-comm)            | >3 (idealmente >5)  |
| LTV/CAC (SaaS)           | >3                  |
| Quality Score (Google Ads)| 7-10               |

---

## 5. Usabilidade

### Task Success Rate

| TSR              | Leitura                                   |
|------------------|-------------------------------------------|
| 100%             | Provavelmente tarefa trivial              |
| 95%+             | Excelente                                 |
| 80-95%           | OK, mas há fricção                        |
| <80%             | Crítico                                   |

### CSAT

| CSAT %    | Leitura                                          |
|-----------|--------------------------------------------------|
| 85%+      | Excelente                                        |
| 70-85%    | Bom, há fricção pontual                          |
| <70%      | Sinal vermelho                                   |

### NPS

| NPS       | Leitura                                          |
|-----------|--------------------------------------------------|
| 50+       | Excelente — categoria de marcas adoradas         |
| 30-50     | Forte — acima da média                           |
| 0-30      | OK — média do mercado                            |
| <0        | Detrator-dominante — problema sério              |

### Mobile responsiveness — tap target

| Plataforma     | Tamanho mínimo     |
|----------------|--------------------|
| iOS            | 44 × 44 pt          |
| Android        | 48 × 48 dp          |
| Web (geral)    | 44 × 44 px          |
| Espaçamento    | ≥ 8px de gap        |

---

## 6. Janelas de comparação recomendadas

Quando comparar **antes e depois** de redesign:

| Tipo de métrica            | Janela mínima após launch  | Comparar com               |
|----------------------------|----------------------------|----------------------------|
| Performance (CWV)          | 28 dias (CrUX)             | Mesmo período pré-launch   |
| Engajamento (bounce, dur)  | 30 dias                    | Mesmo período pré-launch   |
| Conversão                  | 30-90 dias                 | Mesmo trimestre ano anterior + período pré|
| SEO (tráfego, rankings)    | 90 dias                    | Mesmo trimestre pré + ano anterior|
| NPS                        | 60-90 dias                 | Wave anterior              |
| CSAT                       | 14-30 dias                 | Wave anterior              |
| Backlinks                  | 90+ dias                   | Snapshot pré-launch        |

---

## 7. Quando ignorar benchmark e usar baseline

**Sempre prefira baseline próprio** quando:

- O nicho é muito específico (ex: SaaS de nicho com CR alto natural)
- Há sazonalidade forte (ex: e-comm de moda, varejo Q4)
- Há maturidade de marca alta (CR muito acima do benchmark é normal)
- Há fonte de tráfego dominante (orgânico vs paid muda CR drasticamente)

**Use benchmark de mercado** quando:

- Não há histórico (site novo)
- Há mudança radical de proposta (não dá para comparar com versão antiga)
- Stakeholder pede comparação com competidor

---

---

## 9. Integridade de métricas (proibição de números inventados)

**Nunca classifique como 🟢 uma métrica de marketing inventada** — mesmo que a LP "pareça profissional".

| Proibido sem fonte | Ação |
|--------------------|------|
| "10× faster", "3× mais produtivo" | Marcar 🔴 até haver benchmark real ou estudo citado |
| "99,9% uptime", "+12.000 clientes" | Exigir GA4, CRM, contrato ou `[PENDENTE — fonte]` |
| Números redondos em prova social | Validar com cliente antes de REPORT |

Esta regra alinha com `design-hypothesis-map.md` e com LP de alta conversão: métrica fake destrói credibilidade e NPS pós-conversão.

---

## 8. Citações de fonte (auditabilidade)

Toda afirmação numérica em relatório precisa do **rastro**:

```
Fonte: GA4 — Reports > Engagement > Pages
Período: 01/03/2026 - 31/03/2026
Segmento: Mobile only, Brazil only
Filtro de bot: ativado
```

```
Fonte: PageSpeed Insights (CrUX)
URL: https://exemplo.com/
Data da medição: 2026-04-15
```

Sem fonte, número é ruído.
