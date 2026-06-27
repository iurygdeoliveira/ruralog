# Validação Craft — Checklist P0 pós-CONSOLIDAR

Execute este checklist **antes de entregar** `briefing.md` e `DESIGN.md`. Falha em qualquer item P0 exige correção — não é preferência estética.

Use junto com `heuristicas-e-anatomia.md` (LIFT, Teste dos 5 Segundos) e `template-design-md.md` (tokens).

---

## Os 7 pecados P0 (obrigatório corrigir)

| # | Problema | Como detectar | Correção |
|---|----------|---------------|----------|
| 1 | **Indigo Tailwind como accent** | Hex `#6366f1`, `#4f46e5`, `#4338ca`, `#3730a3`, `#8b5cf6`, `#7c3aed`, `#a855f7` | Usar accent do `DESIGN.md` — coral, electric_blue ou emerald da tabela simbólica |
| 2 | **Gradiente two-stop no hero** | Roxo→azul, azul→ciano, indigo→rosa | Superfície flat + tipografia forte; gradiente decorativo proibido |
| 3 | **Emoji como ícone de feature** | ✨ 🚀 🎯 ⚡ 🔥 💡 em bullets, botões ou títulos | SVG monoline 1,6–1,8px com `currentColor` |
| 4 | **Display em sans genérico quando spec pede serif** | h1/h2 em Inter/Roboto ignorando `--font-display` | Respeitar tipografia declarada no `DESIGN.md` |
| 5 | **Card com borda lateral colorida** | Tile "dashboard IA" — radius + border-left accent | Remover borda lateral OU remover radius — nunca os dois |
| 6 | **Métricas inventadas** | "10× faster", "99,9% uptime", "+12.000 clientes" sem fonte | Usar dado real do cliente ou placeholder rotulado `[PENDENTE — fonte]` |
| 7 | **Copy filler** | lorem ipsum, "feature one/two/three", "placeholder text" | Copy vem do VoC (Fase DESCOBRIR) — seção vazia é problema de composição, não de inventar texto |

---

## Regras P1 (corrigir se possível)

- Sequência genérica Hero→Features→Pricing→FAQ→CTA **sem variação intencional** — introduzir pelo menos 1 bloco não-template (depoimento full-bleed, demo inline, comparação status quo).
- Imagens de placeholder externo (Unsplash, placehold.co, picsum) — usar screenshot real ou composição tipográfica.
- Mais de ~12 hex fora do bloco `:root` — tokens não foram respeitados.
- Accent visível mais de 2 vezes por viewport — cap: CTA primário + 1 destaque.

---

## Regra dos 20% de distinção

~80% padrões comprovados + ~20% escolha distintiva:

- Um movimento visual bold (tipografia, cor, proporção).
- Microcopy com voz de produto — "Garantir minha vaga" > "Enviar".
- Um detalhe que só quem conhece o produto colocaria (kbd hint, badge de status real).

Se alguém de fora do projeto não identifica **de qual produto** é a LP pelo screenshot — você entregou template, não design.

---

## Checklist rápido (marcar antes de entregar)

- [ ] Zero indigo/violet Tailwind na paleta
- [ ] Zero gradiente decorativo no hero
- [ ] Zero emoji como ícone de feature
- [ ] Zero métrica sem fonte ou tag `[PENDENTE]`
- [ ] Copy 100% derivado do briefing (VoC/JTBD)
- [ ] Accent ≤2 usos visíveis por viewport no `DESIGN.md`
- [ ] DON'Ts do briefing refletidos em Do's and Don'ts do `DESIGN.md`
- [ ] Teste dos 5 Segundos aprovado (heuristicas-e-anatomia.md)
