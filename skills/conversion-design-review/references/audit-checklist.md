# Audit Checklist — Template de Relatório de Auditoria

> Use este template quando operar no modo AUDIT. Preencha cada seção com evidência específica.
> Não use linguagem genérica — seja cirúrgico sobre QUAL elemento tem o problema e COMO corrigi-lo.

---

## Template: AUDIT.md

```markdown
# Auditoria de Conversão — {Nome do Site}

> URL / Screenshot analisado: {fonte}
> Objetivo de conversão declarado: {compra | lead | cadastro | contato | ...}
> Público-alvo: {persona}
> Data: {YYYY-MM-DD}

## Resumo Executivo

| Severidade         | Quantidade | Pilares afetados                      |
|--------------------|-----------|---------------------------------------|
| 🔴 Crítico         | {N}       | {lista de pilares}                    |
| 🟡 Atenção         | {N}       | {lista de pilares}                    |
| 🟢 OK              | {N}       | {lista de pilares}                    |

**AI Slop Index:** {N}/7

**Top 3 correções prioritárias:**
1. {correção específica com impacto esperado}
2. {correção específica}
3. {correção específica}

---

## Análise Pilar por Pilar

### Pilar 1 — Clarity Over Creativity
**Status:** 🔴 / 🟡 / 🟢
**Micro-Rule aplicada:** {resultado do teste dos 5 segundos}

**Observações:**
- {violação ou conformidade específica com referência ao elemento}

**Correções recomendadas:**
- {ação concreta — qual elemento mudar, para quê}

---

### Pilar 2 — Strong Visual Hierarchy
**Status:** 🔴 / 🟡 / 🟢
**Micro-Rule aplicada:** {resultado do teste do blur}

**Observações:**
- {o que domina visualmente? é o elemento certo?}

**Correções recomendadas:**
- {ajustes de tamanho, peso, cor, whitespace}

---

### Pilar 3 — Single Primary Goal per Page
**Status:** 🔴 / 🟡 / 🟢
**Destinos de conversão primários distintos:** {N} (limite: 1)

**Observações:**
- {o objetivo primário está claro? há CTAs competindo com destinos diferentes?}

**Correções recomendadas:**
- {remover/ghostificar CTAs secundários, esconder sidebars, etc.}

---

### Pilar 4 — Obvious Calls to Action
**Status:** 🔴 / 🟡 / 🟢
**CTA primário está acima da dobra?** Sim / Não
**Copy do CTA atual:** "{texto}"
**Rótulos contextuais (≤3):** {lista ou "nenhum"} — cada um completa "Eu quero…"?
**Cor do CTA contrasta com fundo?** Sim / Não

**Observações:**
- {o CTA passa no teste do "olhos meio fechados"?}

**Correções recomendadas:**
- Texto sugerido: "{copy outcome-oriented}"
- Cor sugerida: {cor que contraste}
- Tamanho mínimo mobile: 44-48px

---

### Pilar 5 — Low Cognitive Load
**Status:** 🔴 / 🟡 / 🟢
**Seções visuais distintas:** {N} (compacta ≤10 🟢 | 11–14 🟡 | ≥15 🟡/🔴)

**Observações:**
- {elementos desnecessários identificados, campos de form excessivos, menu inflado, densidade excessiva}

**Correções recomendadas:**
- Elementos a remover: {lista}
- Simplificações em forms: {lista}
- Se densidade alta: {seções a colapsar, mover para PDF/VSL/página secundária}

---

### Pilar 6 — Trust Before Persuasion
**Status:** 🔴 / 🟡 / 🟢

**Trust signals presentes:**
- [ ] Depoimentos com nome, cargo e foto
- [ ] Logos de clientes/prêmios
- [ ] Pricing transparente
- [ ] Contato físico (endereço, telefone)
- [ ] Números específicos (anos de mercado, clientes atendidos)
- [ ] FAQ mapeia objeções de compra (não institucional)
- [ ] WhatsApp ou contato visível para dúvida pré-compra (mercado BR)
- [ ] Garantia com condição clara (se aplicável)

**Observações:**
- {trust signals estão próximos do CTA?}

**Correções recomendadas:**
- {quais trust signals adicionar, onde posicionar}

---

### Pilar 7 — Mobile-First Design
**Status:** 🔴 / 🟡 / 🟢

**Observações:**
- Tap targets: {adequados? 44×44px mínimo?}
- Hover states invisíveis no mobile: {sim/não}
- Forms com keyboard correto: {sim/não}

**Correções recomendadas:**
- {ajustes mobile específicos}

---

### Pilar 8 — Speed and Performance
**Status:** 🔴 / 🟡 / 🟢
**Tempo de load observado:** {X segundos} (meta: ≤2s)

**Observações:**
- {imagens pesadas, scripts desnecessários, CSS não otimizado}

**Correções recomendadas:**
- Converter imagens para WebP
- Remover scripts de terceiros não essenciais: {lista}
- Priorizar CSS crítico acima da dobra

---

### Pilar 9 — Consistency
**Status:** 🔴 / 🟡 / 🟢

**Observações:**
- Fontes em uso: {contagem}
- Cores primárias em uso: {contagem}
- Inconsistências de navegação: {lista}
- Inconsistências de tom: {lista}

**Correções recomendadas:**
- {padronizações específicas}

---

### Pilar 10 — Feedback and Reassurance
**Status:** 🔴 / 🟡 / 🟢

**Observações:**
- Botões têm hover/active state? {sim/não}
- Forms mostram loading state? {sim/não}
- Mensagens de erro são humanas? {sim/não}
- Há página de sucesso dedicada? {sim/não}

**Correções recomendadas:**
- {feedback e reassurance a adicionar}

---


### Pilar 11 — Anti-AI-Slop Visual
**Status:** 🔴 / 🟡 / 🟢
**AI Slop Index:** {N}/7 pecados P0

| Sinal | Severidade | Encontrado? | Evidência | Recomendação |
|-------|------------|-------------|-----------|--------------|
| Indigo default | P0 | | | |
| Gradiente hero | P0 | | | |
| Emoji ícone | P0 | | | |
| Display serif ignorado | P0 | | | |
| Card dashboard IA | P0 | | | |
| Métricas inventadas | P0 | | | |
| Copy filler | P0 | | | |
| Skeleton template | P1 | | | |
| Placeholder CDN | P1 | | | |
| Token sprawl | P1 | | | |
| Accent overuse | P1 | | | |

**Interpretação:** 0–1 craftado | 2 atenção | 3+ redesign visual

---

## Micro-checklist de persuasão (5 pontos)

Avalie antes do Plano de Ação. **Aprovar 4/5 em LP compacta; 5/5 não exige página longa.**

| # | Pergunta | Status |
|---|----------|--------|
| 1 | Prova numérica (≥1 métrica) antes ou junto do 1º CTA? | ☐ |
| 2 | Objeção principal reframeada em copy (headline ou FAQ #1)? | ☐ |
| 3 | Depoimento mata objeção #1 (não elogio genérico)? | ☐ |
| 4 | Risco reduzido junto ao CTA de conversão (garantia/microcopy)? | ☐ |
| 5 | Message match anúncio → headline? | ☐ |

**Score:** {N}/5

---

## Plano de Ação Priorizado

### Sprint 1 — Correções Críticas (🔴)
1. {correção} — Pilar {N} — Impacto esperado: {descrição}
2. ...

### Sprint 2 — Correções de Atenção (🟡)
1. {correção} — Pilar {N}
2. ...

### Sprint 3 — Refinamentos (🟢 → 🌟)
1. {melhoria opcional}
2. ...

---

## Notas Finais

{Observações gerais, trade-offs identificados, recomendação sobre nova iteração de design}
```
