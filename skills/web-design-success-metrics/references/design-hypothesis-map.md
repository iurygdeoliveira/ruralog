# Mapa de Hipóteses — Métrica → Lei UX → Ação de Design

Use no modo **MEASURE** para cada item 🟡 ou 🔴. Nunca proponha correção genérica — cite a lei e a ação concreta.

---

## Performance

| Sintoma | Lei UX | Hipótese de design | Ação |
|---------|--------|-------------------|------|
| LCP > 2,5s mobile | Performance afeta conversão + SEO | Hero image pesada above-the-fold | WebP + preload da imagem LCP; remover slider |
| CLS > 0,1 | Lei de Prägnanz — layout estável | Fontes/ads injetam altura tardia | Reservar espaço fixo; `font-display: swap` com fallback metrics |
| INP > 200ms | Fitts + touch targets | Botões pequenos, JS bloqueante | CTA ≥44px; defer scripts não-críticos |

---

## Engajamento

| Sintoma | Lei UX | Hipótese de design | Ação |
|---------|--------|-------------------|------|
| Bounce alto LP paga | Selective Attention + Message Match | Headline não confirma promessa do anúncio | Reescrever headline com keywords do tráfego |
| Session duration alta + CR baixo | Aesthetic-Usability (falso positivo) | Usuário explora mas CTA escondido | CTA sticky mobile; Von Restorff no botão primário |
| Pages/session baixo | Serial Position Effect | Nav confusa, hierarquia plana | Reordenar nav: ação primária nas extremidades |

---

## Conversão

| Sintoma | Lei UX | Hipótese de design | Ação |
|---------|--------|-------------------|------|
| Bounce alto /pricing | Hick's Law + Choice Overload | 4+ planos sem destaque | 3 tiers max; 1 marcado "Recomendado" (Von Restorff) |
| CR checkout baixo | Miller's Law / Zeigarnik | Formulário longo monolítico | Breadcrumb 2–3 etapas + barra de progresso |
| CR hero ok, CR footer baixo | Peak-End Rule | Recap fraco no final | Reforçar Loss Aversion + CTA idêntico ao primário |

---

## Usabilidade

| Sintoma | Lei UX | Hipótese de design | Ação |
|---------|--------|-------------------|------|
| UER alto mobile | Touch targets (WCAG 2.5.8) | Links/links sociais <24px | Mínimo 44×44px em CTAs e nav |
| CSAT ok, NPS baixo | Peak-End Rule | Experiência pós-conversão genérica | Redesenhar thank-you page (ver briefing LP) |

---

## SEO + tráfego

| Sintoma | Lei UX | Hipótese de design | Ação |
|---------|--------|-------------------|------|
| Tráfego orgânico ↑ + bounce ↑ | Message Match | SERP promete X, LP entrega Y | Alinhar H1/meta com intent da keyword top 5 |
| Bounce alto + scroll baixo | Selective Attention + Message Match | Hero não confirma promessa do anúncio | Reescrever headline; **não** adicionar blocos |
| Scroll >75% + CR baixo | Excesso de conteúdo / ansiedade de preço | LP convence a ler, não a agir | Encurtar stack; CTA mais cedo; garantia junto ao botão |
| Tempo >4min + CR baixo | Densidade excessiva para o ticket | Detalhe deveria estar em PDF/VSL | Cortar seções; mover profundidade para pós-clique |
| Tráfego ↑ + CR ↓ | Choice Overload na dobra | Múltiplos CTAs competindo | Um destino primário; secundários ghost |

---

## Métricas proibidas (integridade de dados)

Nunca aceite ou reproduza no relatório:

- "10× faster", "99,9% uptime", "+X clientes" **sem fonte** (GA4, CRM, contrato).
- Números redondos suspeitos sem período e segmento.

Se o cliente forneceu métrica inventada para a LP, registre como **risco de credibilidade** e recomende substituir por dado real ou `[PENDENTE — fonte]`.

---

## Bridge com briefing-landing-page

Quando existir `briefing.md` do mesmo projeto:

- Modo **BASELINE:** importar KPIs da Fase ALINHAR (meta 30/60/90 dias) e **`densidade: compacta|expandida`**.
- Modo **REPORT:** referenciar testes A/B recomendados na Fase CONSOLIDAR do briefing.
- Modo **MEASURE:** cruzar objeções VoC do briefing com bounce; se scroll alto + CR baixo → hipótese de LP longa demais (ver Engajamento acima).
