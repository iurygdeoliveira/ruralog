# Success Report Template — Modos MEASURE & REPORT

> Use este template para os modos **MEASURE** (diagnóstico de site no ar) e
> **REPORT** (relatório executivo pós-período).
>
> A diferença prática entre os dois:
>
> - **MEASURE** = diagnóstico técnico, com hipóteses e ações. Para o time.
> - **REPORT** = relatório executivo com narrativa. Para stakeholders.
>
> Ambos usam a mesma base; ajuste o nível de detalhe conforme audiência.

---

## A) Template MEASURE — DIAGNOSTIC.md (para o time)

```markdown
# Diagnóstico de Métricas — {Nome do Site}

> Data da análise: {YYYY-MM-DD}
> Período analisado: {YYYY-MM-DD a YYYY-MM-DD}
> Analista: {nome}
> Fonte de dados consultada: {lista de ferramentas}

---

## Resumo Executivo

| Grupo                | Status | Observação principal                         |
|----------------------|--------|-----------------------------------------------|
| Usabilidade          | 🟢/🟡/🔴/⚪ | {1 frase}                                  |
| Performance          | 🟢/🟡/🔴/⚪ | {1 frase}                                  |
| SEO & Visibilidade   | 🟢/🟡/🔴/⚪ | {1 frase}                                  |
| Engajamento          | 🟢/🟡/🔴/⚪ | {1 frase}                                  |
| Conversão            | 🟢/🟡/🔴/⚪ | {1 frase}                                  |

**Top 3 problemas críticos (ordenados por impacto):**
1. {problema crítico} — Hipótese de design: {hipótese} — Ação: {ação concreta}
2. ...
3. ...

**Top 3 wins identificados:**
1. {win} — Métrica: {número}
2. ...
3. ...

---

## 1. Usabilidade

### Métricas observadas

| Métrica           | Valor    | Benchmark    | Status |
|-------------------|----------|--------------|--------|
| Task Success Rate | {X%}     | 95%+ bom     | 🟢/🟡/🔴 |
| User Error Rate   | {X/sessão} | <0.5/sess  | 🟢/🟡/🔴 |
| CSAT              | {X%}     | 85%+ bom     | 🟢/🟡/🔴 |
| NPS               | {X}      | 30+ forte    | 🟢/🟡/🔴 |

### Diagnóstico

{Análise narrativa do grupo. Onde está mais fraco/forte? Padrões nos heatmaps?
Comentários qualitativos do CSAT/NPS?}

### Hipóteses de design e ações

- **Problema:** {ex: TSR de checkout 78% (baseline 92%)}
  **Hipótese:** {ex: Form de pagamento adicionou campo "CPF" sem máscara}
  **Ação proposta:** {ex: Adicionar máscara de CPF + validation real-time}
  **Impacto esperado:** {ex: TSR voltar para 90%+}
  **Esforço:** {S | M | L}

(repetir por problema)

---

## 2. Performance

### Métricas observadas

| Métrica           | Valor    | Meta    | Status |
|-------------------|----------|---------|--------|
| LCP mobile (CrUX) | {X.Xs}   | ≤2.5s   | 🟢/🟡/🔴 |
| LCP desktop       | {X.Xs}   | ≤2.5s   | 🟢/🟡/🔴 |
| CLS               | {0.XX}   | ≤0.1    | 🟢/🟡/🔴 |
| INP               | {Xms}    | ≤200ms  | 🟢/🟡/🔴 |
| Page Load Time    | {Xs}     | ≤3s     | 🟢/🟡/🔴 |
| Mobile usability issues | {N} | 0       | 🟢/🟡/🔴 |
| Total page size   | {XMB}    | <2MB    | 🟢/🟡/🔴 |

### Análise por dispositivo

- **Mobile:** {comentário}
- **Desktop:** {comentário}
- **Gap mobile vs desktop:** {comentário — sinal de problema?}

### Hipóteses de design e ações

- **Problema:** {ex: LCP mobile de 4.8s}
  **Hipótese:** {ex: Hero image de 2.3MB sem WebP/preload}
  **Ação proposta:** {ex: Converter para WebP, adicionar preload, srcset}
  **Impacto esperado:** {ex: LCP cair para <2.5s}
  **Esforço:** S

(repetir)

---

## 3. SEO & Visibilidade

### Métricas observadas

| Métrica                  | Valor       | Tendência (vs período anterior) | Status |
|--------------------------|-------------|----------------------------------|--------|
| Tráfego orgânico mensal  | {N sessões} | {+/-X%}                          | 🟢/🟡/🔴 |
| Top 5 keywords pos. média| {pos. X}    | {+/-X posições}                  | 🟢/🟡/🔴 |
| Pages indexed            | {N}         | {+/-N}                           | 🟢/🟡/🔴 |
| Crawl errors             | {N}         | {+/-N}                           | 🟢/🟡/🔴 |
| Referring domains        | {N}         | {+/-N}                           | 🟢/🟡/🔴 |
| Lost backlinks           | {N}         | —                                | 🟢/🟡/🔴 |

### Top 5 keywords ganhando

| Keyword      | Posição antes | Posição agora | Impressions | Clicks |
|--------------|---------------|---------------|-------------|--------|
| ...          | ...           | ...           | ...         | ...    |

### Top 5 keywords perdendo

| Keyword      | Posição antes | Posição agora | Impressions perdidas | Hipótese |
|--------------|---------------|---------------|----------------------|----------|
| ...          | ...           | ...           | ...                  | {por quê?}|

### Hipóteses de design e ações

(...)

---

## 4. Engajamento

### Métricas observadas

| Métrica                    | Valor    | Benchmark   | Status |
|----------------------------|----------|-------------|--------|
| Avg engagement time        | {X min}  | varia       | 🟢/🟡/🔴 |
| Bounce rate (LP principal) | {X%}     | <40-55%     | 🟢/🟡/🔴 |
| Pages per session          | {X.X}    | 3-5 bom     | 🟢/🟡/🔴 |
| Exit rate (checkout)       | {X%}     | <30%        | 🟢/🟡/🔴 |
| Engagement rate (GA4)      | {X%}     | >70% bom    | 🟢/🟡/🔴 |

### Top 5 páginas com bounce alto

| Página | Bounce | Tráfego | Hipótese |
|--------|--------|---------|----------|
| ...    | ...    | ...     | ...      |

### Top 5 páginas com exit alto

| Página | Exit | Tráfego | Hipótese | Ação |
|--------|------|---------|----------|------|
| ...    | ...  | ...     | ...      | ...  |

### Hipóteses de design e ações

(...)

---

## 5. Conversão

### Métricas observadas

| Métrica            | Valor    | Tendência | Benchmark setor | Status |
|--------------------|----------|-----------|-----------------|--------|
| CR macro           | {X%}     | {+/-X%}   | {Y%}            | 🟢/🟡/🔴 |
| Volume mensal      | {N}      | {+/-N}    | —               | 🟢/🟡/🔴 |
| CR mobile          | {X%}     | {+/-X%}   | —               | 🟢/🟡/🔴 |
| Cart abandonment   | {X%}     | {+/-X%}   | <60%            | 🟢/🟡/🔴 |
| CPA (paid)         | R$ {X}   | {+/-X%}   | —               | 🟢/🟡/🔴 |
| ROAS (e-comm)      | {X}      | {+/-X%}   | >3              | 🟢/🟡/🔴 |

### Funnel breakdown

| Etapa              | Volume | % do anterior | Drop-off |
|--------------------|--------|---------------|----------|
| Landing pageview   | {N}    | 100%          | —        |
| CTA click          | {N}    | {X%}          | {X%}     |
| Form start         | {N}    | {X%}          | {X%}     |
| Form submit        | {N}    | {X%}          | {X%}     |
| Conversão final    | {N}    | {X%}          | {X%}     |

### Hipóteses de design e ações

(...)

---

## 6. Cruzamentos (Sistema, não métrica isolada)

| Combinação observada                  | Diagnóstico                                | Ação           |
|---------------------------------------|--------------------------------------------|----------------|
| {ex: Tráfego ↑ + Bounce ↑}            | {ex: SEO trazendo audiência errada}        | {ex: revisar copy do title/meta} |
| {ex: CR mobile << desktop}            | {ex: mobile UX broken}                     | {ex: auditoria de tap target}    |

---

## 7. Plano de Ação Priorizado

### Sprint 1 (próximas 2 semanas) — Crítico (🔴)

| # | Ação                              | Grupo afetado | Esforço | Impacto esperado |
|---|-----------------------------------|---------------|---------|------------------|
| 1 | {ação concreta}                   | Conversão     | S       | CR +{X}%         |
| 2 | ...                               | ...           | ...     | ...              |

### Sprint 2 (3-4 semanas) — Alta prioridade (🟡)

(...)

### Sprint 3 (5-8 semanas) — Refinamentos

(...)

---

## 8. Observabilidade — gaps de dado

Métricas com `⚪` (sem dado) para instrumentar:

- [ ] {métrica} — {ferramenta a configurar}
- [ ] ...

---

## 9. Limitações desta análise

- {ex: "Tráfego de mar/2026 inclui efeito de campanha promocional Easter — não comparável puramente com mar/2025"}
- {ex: "TSR não medido — sugerir teste com 5 usuários antes de próxima iteração"}
- {ex: "Sem A/B test, atribuição de melhora à mudança X é correlacional, não causal"}
```

---

## B) Template REPORT — EXECUTIVE_REPORT.md (para stakeholders)

```markdown
# Relatório Executivo — Resultado de Redesign de {Nome do Site}

> Período comparado: **Pré-redesign** ({YYYY-MM-DD a YYYY-MM-DD}) vs **Pós-redesign** ({YYYY-MM-DD a YYYY-MM-DD})
> Tempo decorrido desde o launch: **D+{N}** dias
> Preparado por: {nome / equipe}
> Para: {stakeholder}

---

## TL;DR

> **{Frase única — narrativa central do redesign.}**
>
> Exemplos:
> - "O redesign atingiu sucesso pleno: tráfego orgânico cresceu 38%, CR subiu de 2.1% para 3.4%, e CPA caiu 28%."
> - "O redesign teve sucesso técnico (Core Web Vitals em 'Good' e SEO crescendo) mas comercial limitado — CR estável e leads em mesmo volume."
> - "O redesign apresenta regressão em conversão (-18%) e exige hotfix antes de declarar sucesso. SEO e performance estão saudáveis."

### 3 highlights de negócio

1. {Win número 1 traduzido em linguagem de negócio}
2. {Win número 2}
3. {Risco/atenção principal}

---

## Quadro Comparativo (Pré vs Pós)

| Grupo / Métrica           | Pré-redesign | Pós-redesign | Δ        | Avaliação |
|---------------------------|--------------|--------------|----------|-----------|
| **Usabilidade**           |              |              |          |           |
| Task Success Rate         | {X%}         | {Y%}         | {+/-Z%}  | 🟢/🟡/🔴 |
| NPS                       | {X}          | {Y}          | {+/-Z}   | 🟢/🟡/🔴 |
| **Performance**           |              |              |          |           |
| LCP mobile                | {X.Xs}       | {Y.Ys}       | {+/-Z%}  | 🟢/🟡/🔴 |
| Page Load Time            | {Xs}         | {Ys}         | {+/-Z%}  | 🟢/🟡/🔴 |
| **SEO**                   |              |              |          |           |
| Tráfego orgânico mensal   | {N}          | {N}          | {+/-Z%}  | 🟢/🟡/🔴 |
| Keywords no top 3         | {N}          | {N}          | {+/-Z}   | 🟢/🟡/🔴 |
| **Engajamento**           |              |              |          |           |
| Bounce rate               | {X%}         | {Y%}         | {+/-Z%}  | 🟢/🟡/🔴 |
| Avg engagement time       | {X min}      | {Y min}      | {+/-Z%}  | 🟢/🟡/🔴 |
| **Conversão**             |              |              |          |           |
| Conversion Rate (macro)   | {X%}         | {Y%}         | {+/-Z%}  | 🟢/🟡/🔴 |
| Volume de leads/vendas    | {N}          | {N}          | {+/-Z%}  | 🟢/🟡/🔴 |
| CPA                       | R$ {X}       | R$ {Y}       | {+/-Z%}  | 🟢/🟡/🔴 |

---

## Análise por Grupo (1 parágrafo cada — sem jargão técnico)

### Usabilidade

{Como ficou a experiência efetiva. Tradução: "as pessoas conseguem usar?".
Apoiar com 1-2 número-âncora e qualquer comentário qualitativo relevante.}

### Performance

{Quão rápido e estável o site é. Tradução: "o site é rápido?". Citar Core Web
Vitals em linguagem humana, não acrônimo.}

### SEO & Visibilidade

{Quão visível na busca. Tradução: "quantas pessoas encontram?". Citar tráfego e
movimentação de keywords-chave.}

### Engajamento

{Como as pessoas se comportam. Tradução: "o design prende?". Citar bounce e
duration em comparação com baseline.}

### Conversão

{Resultado direto de negócio. Tradução: "vai dinheiro para o caixa?". Citar CR,
volume e CPA.}

---

## Top 3 Wins (atribuíveis ao redesign)

1. **{Win}** — {explicação em 2 linhas + número} — Atribuição: {Direta | Provável | Possível}
2. ...
3. ...

> **Nota sobre atribuição:** Sem A/B test isolado, não dá para garantir causalidade.
> Marcamos como **direta** apenas mudanças onde o redesign foi a única variável
> (ex: melhora de Core Web Vitals após otimização de imagens).

---

## Top 3 Pontos de Atenção

1. **{Problema}** — {dado que o suporta} — **Hipótese de design:** {hipótese} — **Próximo passo:** {ação concreta}
2. ...
3. ...

---

## Roteiro de Iteração (próximos 90 dias)

### Mês 1 — Hotfixes e correções críticas

- {ação}
- {ação}

### Mês 2 — Otimização baseada em dado

- {ação}
- {ação}

### Mês 3 — Experimentação (A/B tests)

- {hipótese a testar}
- {hipótese a testar}

---

## Anexos

- **Anexo A:** Dashboard GA4 com filtros aplicados — {link}
- **Anexo B:** Search Console export — {link}
- **Anexo C:** Heatmaps Hotjar/Clarity — {link}
- **Anexo D:** Lista completa de issues técnicas (Lighthouse, PageSpeed) — {link}

---

## Limitações e Premissas

**Para leitura honesta deste relatório, considerar:**

- {ex: "O período comparado inclui Black Friday, que afeta CR pra cima naturalmente."}
- {ex: "O site velho usava UA, o novo usa GA4 — algumas métricas não são 100% comparáveis."}
- {ex: "Não houve A/B test — as melhorias relatadas são correlacionais, não causais."}
- {ex: "Tempo decorrido (D+45) ainda é curto para concluir sobre SEO; revisão definitiva em D+90."}
```

---

## Como redigir o relatório executivo (modo REPORT)

1. **Comece pela narrativa, não pelos números.** O TL;DR é o produto. Tudo o
   resto é justificativa.
2. **Atribuição honesta.** Se há sazonalidade ou mudança de mídia, declare.
3. **Mostre regressões com hipótese.** Esconder o que piorou destrói confiança.
4. **Tradução para linguagem de negócio.** "LCP de 4.2s" → "cliente espera 4
   segundos antes de ver o produto".
5. **Não use jargão técnico no corpo do relatório**, mas referencie no anexo.
6. **Recomendação no fim.** Toda análise tem que terminar com "o que fazer".
