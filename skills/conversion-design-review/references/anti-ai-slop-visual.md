# Anti-AI-Slop Visual — Checklist para Auditoria CRO

> Adaptado de Open Design `craft/anti-ai-slop.md` (MIT).
> **Camada visual/UI** — complementa os 10 pilares de conversão. Para copy textual genérica de IA, use `humanizer-br`.

Regras concretas e verificáveis que distinguem design feito por quem já lançou produto de output default de LLM.

---

## P0 — Must-fix (7 pecados capitais)

Cada ocorrência conta +1 no **AI Slop Index**. Score 3+ = redesign visual necessário antes de otimizar conversão.

| # | Sinal | Como detectar | Correção típica |
|---|-------|---------------|-----------------|
| 1 | **Indigo Tailwind default** | Accent sólido `#6366f1`, `#4f46e5`, `#4338ca`, `#8b5cf6`, `#7c3aed`, `#a855f7` | Trocar por accent da marca ou cor derivada do contexto |
| 2 | **Gradiente "trust" no hero** | Two-stop roxo→azul, azul→ciano, indigo→rosa no hero | Superfície flat + tipografia intencional |
| 3 | **Emoji como ícone** | ✨🚀🎯⚡🔥💡 em headings, botões, listas de features | SVG monoline 1.6–1.8px stroke, `currentColor` |
| 4 | **Display serif ignorado** | h1/h2 em Inter/Roboto quando marca pede serif | Aplicar fonte display declarada |
| 5 | **Card "dashboard IA"** | Card arredondado + borda lateral colorida | Remover radius OU borda lateral |
| 6 | **Métricas inventadas** | "10× faster", "99.9% uptime", "3× produtividade" sem fonte | Fonte real ou placeholder rotulado `[MÉTRICA A VALIDAR]` |
| 7 | **Copy filler** | "feature one/two/three", lorem ipsum, "placeholder text" | Composição vazia ou copy do VoC |

---

## P1 — Should-fix (soft tells)

| Sinal | Detecção | Recomendação |
|-------|----------|--------------|
| **Skeleton de template IA** | Sequência rígida Hero→Features→Pricing→FAQ→CTA sem variação | Inserir seção não convencional (depoimento full-bleed, demo inline, comparação status quo) |
| **Placeholder CDN** | unsplash.com, placehold.co, picsum.photos em produção | Asset real ou placeholder local rotulado |
| **Token sprawl** | >12 hex fora de `:root`/design tokens | Consolidar na paleta |
| **Accent overuse** | Mesma cor accent 6+ vezes na mesma tela | Cap em 2 usos visíveis + CTA |

---

## P2 — Nice-to-fix (polish)

| Sinal | Detecção | Recomendação |
|-------|----------|--------------|
| **Layout simétrico demais** | Grids perfeitos sem tensão visual | Alternar densidade (seção tight + seção breathing) |
| **Blobs/waves decorativos** | SVG de fundo sem função semântica | Remover ou substituir por conteúdo |
| **Ausência de identidade** | Screenshot genérico — não dá para adivinhar o produto | Um movimento visual ousado + microcopy específica |

---

## Como adicionar "alma" sem quebrar regras

Meta: **~80% padrões comprovados + ~20% escolha distintiva**. O 20% vive em:

- Uma decisão tipográfica ou de cor ousada (não indigo default)
- Microcopy de CTA específica do produto ("Começar meu diagnóstico" > "Get started")
- Um detalhe que só quem usou o produto colocaria (atalho de teclado, badge de status real)

**Teste final:** alguém de fora identifica de qual produto é a LP só pelo screenshot?

---

## Tabela de saída (modos AUDIT e EVALUATE)

Incluir no relatório após os 10 pilares:

```markdown
## Pilar 11 — Sinais de AI Slop Visual

**AI Slop Index:** {N}/7 pecados P0 detectados

| Sinal | Severidade | Encontrado? | Evidência | Recomendação |
|-------|------------|-------------|-----------|--------------|
| Indigo default | P0 | Sim/Não | {elemento} | {ação} |
| Gradiente hero | P0 | ... | ... | ... |
| Emoji ícone | P0 | ... | ... | ... |
| Display serif ignorado | P0 | ... | ... | ... |
| Card dashboard IA | P0 | ... | ... | ... |
| Métricas inventadas | P0 | ... | ... | ... |
| Copy filler | P0 | ... | ... | ... |
| Skeleton template | P1 | ... | ... | ... |
| Placeholder CDN | P1 | ... | ... | ... |
| Token sprawl | P1 | ... | ... | ... |
| Accent overuse | P1 | ... | ... | ... |

**Interpretação do index:**
- 0–1: visual craftado ou profissional
- 2: atenção — sinais de template
- 3+: redesign visual antes de testes A/B de copy
```

---

## Relação com outros pilares

| Pilar CRO | Overlap anti-slop |
|-----------|-------------------|
| Pilar 1 (Clareza) | Copy filler, métricas inventadas |
| Pilar 4 (CTA) | Accent indigo default no botão |
| Pilar 6 (Confiança) | Métricas inventadas, depoimentos genéricos |
| Pilar 9 (Consistência) | Token sprawl, emoji misturado com SVG |

Não duplicar achados: se já citou métrica inventada no Pilar 6, referencie no Pilar 11 em uma linha.
