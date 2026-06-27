# Template: DESIGN.md — Spec Visual da Landing Page

Este arquivo define a estrutura do **segundo artefato** produzido na Fase 6 (CONSOLIDAR), quando o usuário optar por gerar a spec visual. O `DESIGN.md` traduz as decisões do briefing de negócio/conversão em tokens e regras executáveis por designer ou agente de implementação.

Schema com **9 seções numeradas** (`## 1.` … `## 9.`). Valores de cor, tipografia e espaçamento devem ser **derivados do briefing** — não inventados fora do contexto coletado.

## As 8 dimensões simbólicas (vocabulário fechado)

Antes de gerar tokens, resolva estas dimensões a partir do briefing. Se alguma faltar, aplique defaults da tabela abaixo — registre em "Dimensões resolvidas por default".

| # | Dimensão | Key | Valores válidos |
|---|----------|-----|-----------------|
| 1 | Paleta | `palette` | `light_clean`, `monochrome_dark`, `navy_and_white`, `earth_tones` |
| 2 | Accent | `accent` | `coral`, `electric_blue`, `emerald`, `muted_sage`, `slate` |
| 3 | Tipografia body | `typography` | `inter`, `system_ui`, `dm_sans`, `georgia` |
| 4 | Tipografia display | `display` | `space_grotesk`, `clash_display`, `playfair`, `same_as_body` |
| 5 | Layout | `layout` | `single_column`, `two_column`, `asymmetric` |
| 6 | Mood | `mood` | `professional_minimal`, `playful`, `brutalist`, `editorial` |
| 7 | Density | `density` | `compact`, `balanced`, `spacious` |
| 8 | Exclusões | `exclude` | `animations`, `gradients`, `stock_photos`, `carousel`, `none` |

**Defaults quando não especificado:**
- `palette`: `light_clean` (ou `monochrome_dark` se dark mode)
- `accent`: `electric_blue` (palette clara) ou `coral` (palette escura)
- `typography`: `inter`
- `display`: `same_as_body` (ou `playfair` se mood=editorial)
- `layout`: `single_column`
- `mood`: `professional_minimal`
- `density`: `balanced`
- `exclude`: `none`

Se o cliente informar valor fora da tabela, pergunte qual opção válida se aproxima — não invente símbolo novo.

## Mapeamento briefing → dimensões visuais

| Dado do briefing | Seção DESIGN.md |
|------------------|-----------------|
| Tom de voz, posicionamento, JTBD | Visual Theme & Atmosphere |
| Restrições de marca, mood implícito | Color Palette & Roles |
| Headlines, hierarquia de blocos | Typography Rules, Layout Principles |
| Blocos ESTRUTURAR, componentes (CTA, cards, form) | Component Stylings |
| Exclusões ("sem carrossel", "sem menu") | Do's and Don'ts |
| Mobile-first (Taxa de Atenção 1:1) | Responsive Behavior |
| Decisões contrárias registradas | Do's and Don'ts + Agent Prompt Guide |

## Tabela de resolução (valores simbólicos → tokens)

Use quando o briefing não trouxer hex/fonts explícitos. Se o cliente definiu marca, **priorize a marca** sobre estes defaults.

| Símbolo | Tokens |
|---------|--------|
| `palette=light_clean` | Background `#FFFFFF`, Surface `#F8FAFC`, Text `#0F172A`, Secondary `#64748B` |
| `palette=monochrome_dark` | Background `#09090B`, Surface `#18181B`, Text `#FAFAFA`, Secondary `#A1A1AA` |
| `palette=navy_and_white` | Background `#0F172A`, Surface `#1E293B`, Text `#F8FAFC`, Secondary `#94A3B8` |
| `accent=coral` | Accent `#F97316`, Hover `#EA580C` |
| `accent=electric_blue` | Accent `#2563EB`, Hover `#1D4ED8` |
| `accent=emerald` | Accent `#10B981`, Hover `#059669` |
| `typography=inter` | Body: Inter, 400, 1rem/1.6 |
| `typography=dm_sans` | Body: DM Sans, 400, 1rem/1.6 |
| `display=same_as_body` | Display herda body, weight 600 |
| `display=space_grotesk` | Display: Space Grotesk, 700, clamp(2rem, 5vw, 3.5rem) |
| `density=balanced` | Section gap 72px, padding 24px/40px |
| `palette=earth_tones` | Background `#FFFBEB`, Surface `#FEF3C7`, Text `#451A03`, Secondary `#92400E` |
| `accent=muted_sage` | Accent `#84A98C`, Hover `#6B8F73` |
| `accent=slate` | Accent `#64748B`, Hover `#475569` |
| `typography=system_ui` | Body: system-ui, 400, 1rem/1.6 |
| `typography=georgia` | Body: Georgia, 400, 1.125rem/1.7 |
| `display=clash_display` | Display: Clash Display, 700, clamp(2rem, 5vw, 3.5rem) |
| `display=playfair` | Display: Playfair Display, 700, clamp(2rem, 5vw, 3.5rem) |
| `density=compact` | Section gap 48px, padding 16px/24px |

**Defaults quando não especificado:**
- `palette`: `light_clean` (B2B profissional) ou `monochrome_dark` se briefing mencionar dark mode
- `accent`: `electric_blue` (palette clara) ou `coral` (palette escura)
- `typography`: `inter`
- `display`: `same_as_body`
- `density`: `balanced`
- `mood`: `professional_minimal`

**Proibido por padrão em LP de performance:** accent indigo Tailwind default (`#6366f1`, `#4f46e5`, `#8b5cf6`), gradientes two-stop no hero, emoji como ícones de feature.

## Template a copiar

```markdown
# [Nome do Projeto] — Design System (LP)

> Gerado a partir do briefing de LP em [DD/MM/AAAA].
> Objetivo de conversão: [ação única do briefing]

## 1. Visual Theme & Atmosphere

- **Mood:** [professional_minimal | editorial | playful | brutalist]
- **Feel:** [1–2 frases derivadas do JTBD e tom de voz]
- **Referências visuais:** [se o cliente citou exemplos; senão "N/A"]

## 2. Color Palette & Roles

- **Background:** [#hex — role]
- **Surface:** [#hex]
- **Text primary:** [#hex]
- **Text secondary:** [#hex]
- **Accent:** [#hex — NÃO usar indigo default de IA]
- **Accent hover:** [#hex]
- **CTA:** [mesmo accent ou variante com contraste WCAG AA]

```css
:root {
  --bg: /* Background */;
  --surface: /* Surface */;
  --fg: /* Text primary */;
  --muted: /* Text secondary */;
  --accent: /* Accent */;
  --accent-hover: /* Accent hover */;
}
```

## 3. Typography Rules

- **Display (h1/h2):** [família], [peso], clamp(2rem, 5vw, 3.5rem)
- **Body:** [família], 400, 1rem/1.6
- **Microcopy (CTA, labels):** [família], 500–600, tamanho mínimo 16px mobile
- **Mono (dados/código, se aplicável):** JetBrains Mono ou system monospace

## 4. Spacing

- **Section gap:** [valor px da density]
- **Content padding:** [horizontal / vertical]
- **Density:** [compact | balanced | spacious]

## 5. Layout & Composition

- **Max width:** 1200px (conteúdo); hero pode ser full-bleed controlado
- **Grid:** single column (LP performance); features em 1 col mobile, 2–3 col desktop se necessário
- **Ordem de blocos:** espelhar wireframe textual do briefing (seção 4)
- **Acima da dobra:** headline + subheadline + CTA primário + hero shot — sem menu institucional

## 6. Components

- **CTA primário:** [rounded-md | rounded-full], accent bg, texto contrastante, min-height 44px mobile
- **CTA secundário:** ghost ou outline — nunca competir visualmente com o primário
- **Cards / blocos de benefício:** surface bg, borda sutil — evitar card com borda lateral colorida (padrão IA)
- **Formulário:** [inline | modal], labels visíveis, erro inline
- **Depoimentos:** foto circular, nome + cargo + empresa sempre visíveis
- **Hero:** [foto | screenshot | vídeo] — sem stock genérico; olhar direcional para CTA

## 7. Motion & Interaction

- **Animações:** [none | subtle hover only] — respeitar `exclude=animations`
- **Micro-interações:** hover CTA 2px translate se aplicável
- **prefers-reduced-motion:** desabilitar animações decorativas

## 8. Voice & Brand

- **Tom:** [derivado do VoC / JTBD]
- **CTA voice:** verbo de posse, primeira pessoa
- **Evitar:** jargão corporativo vazio, superlativos sem prova

## 9. Anti-patterns

**DO:**
- Usar exclusivamente tokens desta paleta
- **Mesmo destino** de conversão em todos os CTAs primários; compacta = copy idêntico hero/footer; expandida = até 3 rótulos contextuais
- Message Match: palavras-chave do tráfego pago na headline
- Máximo 2 usos visíveis do accent por viewport (CTA + 1 destaque)
- Contraste WCAG AA em todo texto

**DON'T:**
- Barra de navegação institucional (salvo ⚠️ decisão contrária registrada no briefing)
- Múltiplos CTAs com ações diferentes
- Emoji como ícones de feature (usar SVG monoline 1.6–1.8px)
- Métricas inventadas ("10× faster") sem fonte real
- Indigo/violet Tailwind default como accent
- Sequência genérica Hero→Features→Pricing→FAQ→CTA **sem** variação intencional

**Depth & elevation (notas):**
- **Shadows:** [none | subtle sm] — preferir flat + tipografia forte em LP minimal
- **Borders:** 1px solid com opacidade ~8% da cor de texto
- **Sem:** gradientes decorativos two-stop no hero; blobs SVG sem função

**Responsive (notas):**
- **Breakpoints:** 640px (sm), 768px (md), 1024px (lg)
- **Mobile-first:** CTA e formulário no terço inferior alcançável pelo polegar
- **Tap targets:** mínimo 44×44px
- **Tipografia:** nunca abaixo de 16px em inputs (evita zoom iOS)

**Agent Prompt Guide:**

Instruções para quem implementar HTML/CSS/React a partir deste arquivo:

- NÃO inventar cores fora desta paleta
- NÃO adicionar box-shadows além do declarado
- Accent aparece no máximo 2 vezes por viewport
- Todo elemento interativo precisa `:focus-visible`
- Exclusões do briefing: [listar itens de exclude / decisões ⚠️]
- Copy vem do briefing seção 4 — não reescrever headlines sem aprovação
- Validar com `validacao-craft.md` e `checklist-implementacao-lp.md` antes de publicar
```

## Regras de preenchimento

1. **Coerência com briefing:** se o briefing proíbe menu, o DON'T deve refletir isso.
2. **Transparência:** ao final do DESIGN.md, incluir bloco "Dimensões resolvidas por default" listando o que não foi discutido no briefing e qual regra aplicou.
3. **Gate:** se faltarem dados críticos (marca existente, dark/light), marcar `🚧 PENDENTE` na seção afetada — não chutar hex aleatório.
4. **Gate:** se faltarem dados críticos (marca existente, dark/light), marcar `🚧 PENDENTE` na seção afetada — não chutar hex aleatório.
5. **Validação:** rodar checklist de `validacao-craft.md` antes de entregar.
6. **Entrega:** salvar como `DESIGN.md` no diretório do projeto, junto ao briefing consolidado.
