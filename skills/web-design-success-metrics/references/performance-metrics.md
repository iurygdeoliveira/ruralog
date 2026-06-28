# Performance — Métricas de Velocidade e Saúde Técnica

> **Pergunta que este grupo responde:** O site é rápido, estável e responsivo?
>
> **Speed is a feature.** Você pode ter as animações mais bonitas do mercado e
> imagens em alta resolução, mas se o site demora 10 segundos para carregar,
> metade da audiência vai embora antes de ver um pixel sequer.

Performance afeta diretamente:

- **SEO** (Core Web Vitals são fator de ranking confirmado pelo Google)
- **Bounce rate** (3s → 40% considera abandonar; 5s+ → maioria vai embora)
- **Brand perception** (site lento = empresa amadora)
- **Conversão** (delay de 1s pode reduzir CR em 7%)

---

## 1. Core Web Vitals (CWV)

Conjunto de métricas que o Google usa para julgar a qualidade percebida da página.
**Para auditoria pós-design, duas são prioritárias** (segundo o artigo):

### 1.1. Largest Contentful Paint (LCP)

**O que mede:** loading performance — quanto tempo até o **maior elemento visual**
da viewport (imagem, vídeo, bloco de texto) ficar visível.

**Meta:** ≤ 2.5s (good) | 2.5–4.0s (needs improvement) | >4.0s (poor)

**Causas comuns de LCP alto:**

- Hero image ou vídeo de fundo pesados (>500KB sem WebP)
- Server response (TTFB) lento — hosting subdimensionado
- CSS render-blocking
- Web fonts sem `font-display: swap`
- JavaScript de terceiros (chat, ads) bloqueando o main thread

**Como diagnosticar:**

- PageSpeed Insights → seção "LCP element" mostra exatamente qual elemento é o LCP
- Lighthouse aba Performance → "Largest Contentful Paint" com timeline
- Chrome DevTools → Performance panel → marcador LCP

**Correções típicas (priorizadas):**

1. Comprimir imagem do LCP, converter para WebP/AVIF
2. Adicionar `<link rel="preload">` para o asset do LCP
3. Reduzir CSS crítico inline, defer o resto
4. Migrar fonts para self-hosted ou usar `font-display: swap`
5. Investigar TTFB → trocar hosting ou ativar CDN

### 1.2. Cumulative Layout Shift (CLS)

**O que mede:** estabilidade visual — quanto a página "pula" durante o load.

> "Você já tentou clicar num botão e a página pulou, te fazendo clicar num ad?
> Isso é CLS alto."

**Meta:** ≤ 0.1 (good) | 0.1–0.25 (needs improvement) | >0.25 (poor)

**Causas comuns de CLS alto:**

- Imagens sem `width` e `height` declarados (HTML ou CSS)
- Web fonts trocando o tamanho (FOIT/FOUT) sem reserva de espaço
- Banners/ads/sliders carregando depois do conteúdo já visível
- Cookie banner subindo do bottom e empurrando conteúdo
- Infinite scroll sem placeholder

**Correções típicas:**

1. Sempre declarar `width` e `height` em `<img>` e `<video>`
2. Usar `aspect-ratio` em CSS para containers responsivos
3. Reservar espaço para ads/banners com altura fixa (`min-height`)
4. Pre-carregar fonts com `<link rel="preload" as="font">`
5. Cookie banner fixo no top ou bottom, fora do flow

### 1.3. INP (Interaction to Next Paint) — substituiu o FID em 2024

**O que mede:** responsividade — tempo do clique/tap até a resposta visual.

**Meta:** ≤ 200ms (good) | 200–500ms (needs improvement) | >500ms (poor)

**Causas comuns:**

- JavaScript pesado bloqueando main thread
- Long tasks (>50ms) durante interação
- Event handlers complexos sem debounce/throttle

**Não está no artigo da Dribbble**, mas é parte do CWV oficial — incluir na
auditoria.

---

## 2. Page Load Time (Tempo Total de Carregamento)

Métrica mais "humana" que CWV — quanto tempo até a página estar **totalmente
funcional**.

### Benchmarks do artigo

| Load Time     | Comportamento esperado                                        |
|---------------|---------------------------------------------------------------|
| 0–2s          | **Faixa de maior conversão.** Padrão-ouro.                    |
| ~3s           | ~40% dos usuários **consideram abandonar**.                   |
| 5s+           | Maioria faz bounce. Brand perception sofre.                   |

### Fontes de medição

- **GA4** → Reports > Engagement > Pages (campo "Avg. page load time" custom)
- **GTmetrix / Pingdom** → teste sintético, ambiente controlado
- **CrUX (Chrome User Experience Report)** → dado **real** de usuários
- **WebPageTest** → análise profunda com waterfall

### Critério de qual fonte priorizar

| Fonte     | Quando usar                                                    |
|-----------|----------------------------------------------------------------|
| CrUX      | Reportar para stakeholder — é dado real do mundo               |
| Lighthouse| Diagnosticar problema técnico                                  |
| GA4       | Comparar tendência mês-a-mês                                   |
| GTmetrix  | Validar correção em ambiente controlado                        |

### Suspeitos clássicos quando load time é alto

| Suspeito                       | Como confirmar                                  |
|--------------------------------|-------------------------------------------------|
| Imagens não otimizadas         | Lighthouse → "Properly size images"             |
| Plugins/scripts em excesso     | Network panel → contagem de requests            |
| Server lento (TTFB)            | WebPageTest → primeira barra do waterfall       |
| CSS render-blocking            | Lighthouse → "Eliminate render-blocking..."     |
| JS render-blocking             | Lighthouse → "Reduce unused JavaScript"         |
| Falta de cache                 | Lighthouse → "Serve static assets with cache"   |
| Sem CDN                        | DNS lookup distante do usuário                  |

---

## 3. Mobile Responsiveness

> "Mais de metade do tráfego global vem de mobile. O site é verdadeiramente
> responsivo quando **reorganiza** conteúdo para o polegar — não apenas encolhe
> a versão desktop."

**E o ponto crítico do artigo:** o Google usa **mobile-first indexing** desde 2021.
Se desktop é 10/10 mas mobile é 5/10, **SEO E conversão vão sofrer juntos**.

### Checklist de mobile responsiveness

| Item                                | OK quando...                                            |
|-------------------------------------|----------------------------------------------------------|
| **Tap target sizing**               | Botões/links ≥ 44×44px (iOS) ou 48×48dp (Android)        |
| Espaço entre tap targets            | ≥ 8px de gap                                             |
| **Text readability**                | Body ≥ 16px, line-height ≥ 1.5, sem necessidade de pinch |
| **Navigation adaptability**         | Hamburger ou bottom-bar ao invés de menu horizontal       |
| **No horizontal scroll**            | Conteúdo cabe na largura, scroll só vertical             |
| Forms com keyboard correto          | `inputmode="email|tel|numeric"` apropriado              |
| Hover states com fallback           | Toda hover state tem equivalente touch                   |
| Imagens com srcset/sizes            | Carrega tamanho certo por viewport                       |
| Vídeo com poster                    | Não autoplay sem mute                                    |

### Ferramentas

| Ferramenta                                    | O que dá                                  |
|-----------------------------------------------|-------------------------------------------|
| Google Mobile-Friendly Test                   | Pass/fail rápido (descontinuado 2023, mas Search Console substitui) |
| Search Console > Mobile Usability             | Lista de issues por URL                   |
| Lighthouse mobile mode                        | Performance + best practices em mobile    |
| BrowserStack / LambdaTest                     | Teste real em iOS/Android variados        |
| Chrome DevTools Device Mode                   | Iteração rápida (mas não substitui device)|

### Diferença iOS vs Android (cuidado!)

- **Safari** (iOS) renderiza fonts diferente de Chrome
- **PWA features** funcionam diferentes nas duas plataformas
- **Form inputs** (date picker, file upload) têm UX nativa diferente
- **Smooth scroll** e momentum scrolling diferem

Sempre testar em **device real** quando o redesign tem componentes complexos
(carrossel, vídeo, modal, sticky elements).

---

## 4. Outras métricas de performance úteis (bônus)

| Métrica                  | O que indica                              | Meta              |
|--------------------------|-------------------------------------------|-------------------|
| **TTFB (Time to First Byte)** | Latência do servidor                  | <800ms            |
| **FCP (First Contentful Paint)** | Tempo até primeiro pixel visível    | <1.8s             |
| **Speed Index**          | Quão rápido o conteúdo é exibido         | <3.4s             |
| **Total Blocking Time**  | Tempo bloqueado por long tasks JS         | <200ms            |
| **Total Page Size**      | Peso total da página                      | <2MB              |
| **Number of requests**   | Quantos arquivos são baixados             | <50               |

---

## Triagem rápida — quais performance metrics pedir primeiro?

Para o usuário típico de auditoria, peça **nesta ordem**:

1. **PageSpeed Insights** print da URL principal (mobile **e** desktop). Já dá CWV
   real (CrUX) e simulado.
2. **Search Console > Core Web Vitals** report — mostra performance de **todo o
   site**, não uma URL.
3. **GA4 page load time** filtrado por device — para ver se mobile é problema
   maior que desktop.
4. **Lighthouse audit** completo se for diagnosticar uma URL específica.

Se nenhum desses dados existir, sugerir **rodar PageSpeed Insights agora** antes
de qualquer recomendação.

---

## Como traduzir performance em conversa de negócio

Stakeholder não-técnico não liga para "LCP de 4.2s". Traduza:

| Linguagem técnica                  | Linguagem de negócio                                  |
|------------------------------------|--------------------------------------------------------|
| LCP de 4.2s                        | "Cliente espera 4 segundos para ver o produto principal — 40% desistem nesse tempo" |
| CLS de 0.32                        | "A página pula visualmente — usuários clicam errado e desistem" |
| Mobile usability: 12 issues        | "Google está desclassificando o site no celular — perde tráfego orgânico" |
| TTFB de 1.8s                       | "Servidor lento — cada visitante paga 2s antes do site começar a aparecer" |

---

## Erros comuns de leitura

- **"PageSpeed score de 90 = perfeito"** — Score é heurística, CrUX é dado real.
  Confie no CrUX para reportar.
- **"Otimizei imagem, vou ver o resultado em 1 hora"** — CrUX é janela de 28 dias.
  Aguarde 1-4 semanas para a melhoria refletir.
- **Auditar só desktop** — Mais de 60% do tráfego é mobile. Se mobile não foi
  testado, a auditoria é incompleta.
- **Confundir performance percebida vs real** — Skeleton loaders não baixam LCP,
  mas reduzem percepção de lentidão. Use os dois.
