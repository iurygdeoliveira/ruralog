# Checklist de Implementação — Landing Page

Use **após** entregar `briefing.md` + `DESIGN.md`. Garante que quem implementa HTML/React/Blade não esqueça blocos com evidência de conversão.

Ordem obrigatória de seções (adaptar copy do briefing, não inventar estrutura):

---

## Seções obrigatórias

| # | Seção | Conteúdo mínimo | Parâmetro / input |
|---|-------|-----------------|-------------------|
| 1 | **Hero** | Wordmark, headline (tagline), subhead (1–2 frases), CTA primário, CTA secundário ghost | `hero_density` da density do DESIGN.md |
| 2 | **Features** | 3–6 tiles: ícone SVG, título curto, corpo 1–2 frases | Benefícios do briefing (não features) |
| 3 | **Prova social** | Logos ou depoimentos com foto/nome/cargo/empresa | `proof_count` 0–6; se 0, pular seção |
| 4 | **Pricing** | 2–3 tiers, 1 marcado "Mais popular" | Só se briefing incluiu preços |
| 5 | **FAQ estratégico** | 3–5 objeções VoC (não FAQ genérico) | Objeções da Fase DESCOBRIR |
| 6 | **Footer CTA** | Faixa accent, CTA com **mesmo destino** do hero; copy idêntico (compacta) ou rótulo contextual (expandida) | Ver densidade no briefing |
| 7 | **Footer** | Links mínimos + copyright | Sem menu institucional completo |
| 8 | **Thank You Page** | Wireframe da TYP no briefing | Peak-End Rule — ver heuristicas-e-anatomia.md |

---

## Regras de implementação

### Design system

- Todas as cores vêm dos tokens do `DESIGN.md` — não inventar hex.
- Display font para h1/h2; body font para o resto.
- Accent no máximo **2 usos visíveis** por viewport (hero CTA + footer CTA ou link primário).
- Sombras conforme Depth & Elevation do `DESIGN.md` — preferir flat em LP minimal.

### HTML / acessibilidade

- HTML semântico: `<header>`, `<main>`, `<section>`, `<footer>`.
- CSS inline ou scoped — LP standalone.
- `:focus-visible` em todo elemento interativo.
- Tap targets ≥44×44px mobile.
- Inputs ≥16px (evita zoom iOS).

### Copy

- Headlines vêm do briefing seção REDIGIR — não reescrever sem aprovação.
- Message Match: palavras-chave do tráfego pago na headline.
- CTA: verbo de posse em primeira pessoa — nunca "Enviar" ou "Saiba mais".

---

## Self-check antes de publicar

- [ ] Todas as seções obrigatórias presentes (ou justificativa no briefing).
- [ ] Texto significativo — zero lorem ipsum.
- [ ] Nenhuma cor fora da paleta do `DESIGN.md`.
- [ ] Responsivo mental em 1440px, 768px, 375px.
- [ ] Accent usado no máximo 2 vezes.
- [ ] Passou `validacao-craft.md` (7 pecados P0).
- [ ] Passou Teste dos 5 Segundos.
- [ ] TYP desenhada e linkada ao fluxo de conversão.
- [ ] **Teto de blocos:** compacta ≤10 seções visuais / expandida ≤14. Se precisar de mais conteúdo → página secundária, PDF, VSL ou e-mail — não inflar a LP.

---

## Variação intencional (evitar template genérico)

Se a LP seguir exatamente Hero→Features→Pricing→FAQ→CTA sem nada diferente, introduza **pelo menos um** destes:

- Depoimento full-bleed com quote grande.
- Mini-demo inline do produto (screenshot real animado).
- Pricing como comparação contra status quo (não só tiers).
- Bloco de objeção antes do formulário com prova social alinhada.
- Faixa de 3 métricas abaixo do hero (prova numérica compacta).
- Headline de objeção invertida ("Sim, X… Y") no hero ou FAQ.

**Opcional (só campanha com urgência real):** barra sticky de oferta; tipografia destacada em parcela/preço.
