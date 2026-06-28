# Engajamento — Métricas de Comportamento do Usuário

> **Pergunta que este grupo responde:** As pessoas exploram o site? O design prende?
>
> Engajamento mede a **stickiness** do design — quão bem captura atenção e estimula
> exploração. Analisando quanto tempo ficam, quantas páginas visitam e onde
> abandonam, dá para saber se o layout ressoa ou se há friction empurrando para fora.

---

## 1. Average Session Duration

### Definição

Tempo médio que um visitante passa no site em uma única visita (sessão).

> Distingue o usuário que **passou os olhos** na home do usuário que **leu** a
> história, os detalhes do produto, ou o post.

### Onde ver

- **GA4** → Reports > Engagement > Engagement overview > Average engagement time
- **Matomo, Plausible, Fathom** (alternativas privacy-first)

> Atenção: GA4 mudou de "session duration" para "engagement time" — mede só o
> tempo com aba **ativa**. Comparar com Universal Analytics (legado) precisa de
> ressalva.

### Como design influencia

| Sinal de design                     | Efeito esperado em duração            |
|-------------------------------------|---------------------------------------|
| Tipografia legível (16px+, 1.5 line) | Aumenta — usuário lê mais             |
| Hierarquia visual clara             | Aumenta — usuário escaneia e mergulha |
| Imagens hi-res no local certo       | Aumenta — captura atenção             |
| Whitespace generoso                 | Aumenta — reduz fadiga visual         |
| Vídeos auto-play sem som            | Aumenta levemente, mas pode irritar   |
| Pop-ups intrusivos                  | Diminui — empurra para saída          |
| Mobile travado (no scroll smooth)   | Diminui em mobile                     |

### Interpretação dependente de contexto

**O número "ideal" de duração depende do propósito da página:**

| Tipo de página         | Duração desejável | Por quê                              |
|------------------------|-------------------|--------------------------------------|
| Blog post longo        | 3-5min+           | Usuário precisa ler tudo             |
| Landing page focada    | 1-2min            | Suficiente para ler e converter      |
| Homepage corporativa   | 1-2min            | Orientação + clique para sub-página  |
| Página de Contato      | 10-30s            | Pegou telefone/email, missão cumprida|
| Checkout               | 2-4min            | Suficiente para completar compra     |
| 404 / Erro             | <10s              | Quanto menor, melhor (ou redirect)   |

### Padrões de leitura

| Observação                                | Hipótese                                      |
|-------------------------------------------|-----------------------------------------------|
| Sub-30s na home                           | Mensagem confusa OU usuário não é o público   |
| Sub-30s no blog                           | Conteúdo não bate com query OU paywall cedo   |
| 5min+ no checkout                         | Usuário travou — investigar rage clicks       |
| Aumento de 15s pós-redesign               | Vitória — usuário consome mais                |
| Diminuição de 30s+ pós-redesign           | Conteúdo perdido OU UX confusa OU bot traffic |

### Não se ilude

> Tempo alto **não significa sucesso automático**. Em checkout/forms longos, tempo
> alto = usuário travado. Em landing page, tempo alto = usuário lendo. **Sempre
> contextualize.**

---

## 2. Bounce Rate vs Exit Rate

> Soam parecidos, são **diferentes**. O artigo da Dribbble enfatiza essa distinção.

### 2.1. Bounce Rate

**Definição:** percentual de usuários que **caem em uma página** e saem **sem
clicar em nenhum link** ou interagir.

> Se o design parece desatualizado, sem confiança, ou irrelevante para a busca, o
> usuário aperta back e some.

**Fórmula:**

```
Bounce Rate = (Sessões de uma única página / Total de sessões) × 100
```

**No GA4 mudou:** o conceito virou "engagement rate" e o bounce é `1 - engagement
rate`. Considera engaged se ficou ≥10s OU teve evento de conversão OU viu ≥2 page
views.

**Como design afeta bounce rate:**

| Causa                                  | Solução de design                            |
|----------------------------------------|----------------------------------------------|
| Above-the-fold pouco claro             | Headline outcome-oriented, hero alinhado     |
| CTA não-óbvio                          | Cor de contraste, copy "Eu quero…", tamanho  |
| Página lenta (>3s)                     | Otimizar Core Web Vitals (ver performance.md)|
| Mobile quebrado                        | Auditoria mobile responsiveness              |
| Conteúdo não bate com SERP             | Title/meta description honestos              |
| Design parece desatualizado            | Refresh visual + trust signals               |

**Benchmarks aproximados (varia muito por indústria):**

| Bounce Rate     | Leitura                                 |
|-----------------|-----------------------------------------|
| <40%            | Excelente                               |
| 40-55%          | Médio — saudável                        |
| 55-70%          | Acima da média — investigar             |
| 70%+            | Crítico em landing pages                |
| 80%+            | Site sem direção / tráfego errado       |

> Blogs e single-page-sites tendem a ter bounce naturalmente alto (60-80%) — o
> usuário vem, lê, vai embora. Não é necessariamente problema.

### 2.2. Exit Rate

**Definição:** percentual de usuários que **deixam o site partindo de uma página
específica**, mas que **navegaram por outras páginas antes**.

**Fórmula:**

```
Exit Rate = (Saídas a partir da página / Pageviews da página) × 100
```

**Bounce ≠ Exit:**

- Toda visita que **bate uma página e sai** é **bounce E exit**.
- Visita que vê 3 páginas e sai na terceira é **exit, mas não é bounce**.

### Bom exit vs mau exit

| Tipo                        | Exemplo                                  | Avaliação |
|-----------------------------|------------------------------------------|-----------|
| **Bom exit**                | Thank-you page, Order Confirmed          | ✅ Esperado|
| **Mau exit**                | Página de checkout (form/payment)        | ❌ Crítico |
| **Mau exit**                | Página intermediária do funil            | ❌ Crítico |
| **Neutro**                  | Página de Contato (já achou o telefone)  | ⚪ Aceitável|
| **Neutro**                  | Blog post (terminou de ler)              | ⚪ Aceitável|

### Diagnóstico por exit rate alto

| Página com exit alto         | Investigar                                  |
|------------------------------|---------------------------------------------|
| Checkout                     | Form longo, friction de pagamento, falta trust|
| Cadastro                     | Campos obrigatórios em excesso              |
| Pricing                      | Sticker shock, falta comparação clara       |
| Carrinho                     | Frete surpresa, falta de estoque, login forçado|

---

## 3. Pages Per Session (Page Depth)

### Definição

Número médio de páginas visitadas em uma sessão. Teste definitivo da **navegação
e linking interno**.

### Onde ver

- **GA4** → Reports > Engagement > Pages and screens > Views per user / session

### Interpretação

| Pages/Session | Leitura                                                    |
|---------------|------------------------------------------------------------|
| ~1            | Usuário vê só a landing e sai. Sem afford de exploração.   |
| 2-3           | OK — usuário pelo menos navegou um pouco                   |
| 3-5           | Bom — design encoraja exploração                           |
| 5+            | Muito alto. Pode ser bom (engajamento alto) OU ruim        |
|               | (usuário perdido sem achar o que quer)                     |

### Quando 5+ é ruim

- Em e-commerce, se cada usuário vê 5 produtos mas compra 0 → não acha o que quer
- Em busca interna, se vê 5 search results → site não responde a pergunta direto
- Em ajuda/suporte, se navega 5 artigos → não achou solução

### Como aumentar pages/session com design

1. **Sticky menus** — usuário acessa outras seções sem scroll-to-top
2. **Breadcrumbs** — mostra contexto e permite navegar para cima
3. **Related stories / cards clicáveis** — ofertas visuais de próximo passo
4. **Footer rico** — links para sub-áreas de conteúdo
5. **CTA alternativo** abaixo do CTA primário (ex: "Ainda não pronto? Ver caso de
   estudo")
6. **Search interno** com ranqueamento bom
7. **Posts relacionados no fim do conteúdo**

### Como diminuir pages/session quando ruim (sim, às vezes é desejável)

- Em LP de produto único, **menos é mais**: a meta é converter naquela página
- Single-page-site bem feito pode ter `pages/session = 1.0` e CR alta

> O número certo depende do **tipo** de site, não há universal.

---

## 4. Sinais auxiliares de engajamento (bônus)

| Sinal                       | O que indica                              | Onde ver               |
|-----------------------------|-------------------------------------------|------------------------|
| Scroll depth                | % da página rolada                        | Hotjar, GA4 events     |
| Heatmap clicks              | Onde o usuário clica                      | Hotjar, Microsoft Clarity|
| Rage clicks                 | Clique repetido em algo "morto"           | Hotjar, Clarity        |
| Dead clicks                 | Clique em algo não-clicável               | Clarity, FullStory     |
| Returning users %           | % de visitantes que voltam                | GA4 (User vs new user) |
| Engagement Rate (GA4)       | Inverso do bounce no novo modelo          | GA4                    |
| Subscriptions to push       | Quem opta por receber notificação         | OneSignal, Pushwoosh   |

---

---

## 5. KPIs sociais (Instagram / conteúdo orgânico)

Quando o projeto inclui **Instagram** ou conteúdo social (skill `instagram-content-creator`), inclua no Plano de Mensuração:

| Métrica | O que mede | Ferramenta | Benchmark orientativo |
|---------|------------|------------|----------------------|
| **Salvamentos / post** | Valor percebido (arquivamento) | Instagram Insights | Carrossel educativo: comparar vs média do perfil |
| **Compartilhamentos / post** | Alcance secundário (DM) | Instagram Insights | >1% dos alcances = sinal forte |
| **Alcance não-seguidores** | Descoberta algorítmica | Instagram Insights | Reels: meta crescente mês a mês |
| **Taxa de conclusão Stories** | Hábito / sequência STD | Instagram Insights | >70% nos primeiros 3 frames |
| **Cliques link bio** | Conversão outbound | Link tracker (UTM) | Correlacionar com posts com CTA outbound |

**Cruzamento web + social:**

| Padrão | Diagnóstico |
|--------|-------------|
| Salvamentos ↑ + cliques bio ↑ | Conteúdo educativo convertendo |
| Alcance ↑ + cliques bio ↓ | Hook forte, CTA ou landing fraca |
| Engajamento IG ↑ + CR site ↓ | Audiência social ≠ ICP do produto |

Consulte `design-hypothesis-map.md` para hipóteses de design quando métricas sociais divergem de conversão web.

---

## Triagem rápida — quais engagement metrics pedir primeiro?

Para um site em produção, peça:

1. **GA4 Engagement overview** (último mês) — bounce, duration, PPS de cara
2. **Top 10 landing pages** com bounce alto — identifica friction
3. **Top exit pages** com volume relevante — identifica abandonment
4. **Hotjar/Clarity heatmap + recordings** — vê comportamento real, não só número

Se faltam dados, sugira ativar **Microsoft Clarity** (gratuito) imediatamente —
dá heatmap, scroll, rage clicks e session replay sem custo.

---

## Cruzamentos que esclarecem (engajamento + outras dimensões)

| Combinação                                | Diagnóstico provável                          |
|-------------------------------------------|------------------------------------------------|
| Tráfego orgânico ↑ + Bounce ↑             | SEO trazendo audiência errada                  |
| Bounce ↓ + Pages/session ↑ + CR ↓         | Engajado mas sem ação — CTA fraco              |
| Duration ↑ + CR ↓                         | Lendo mas não decidindo — falta urgência/social proof|
| Bounce ↓ + Duration ↓                     | Usuário acha rápido o que precisa (bom para sites informacionais)|
| Mobile bounce ↑↑ vs desktop ↓            | Mobile UX broken — confirmar via Search Console|
| Exit alto em checkout                     | Form / payment friction — investigar com session replay|

---

## Erros comuns de leitura

- **"Bounce alto = ruim"** — Em blog post que responde a query rápido, bounce alto
  pode ser sinal de **sucesso** (usuário viu, ficou satisfeito, foi embora). Use
  com `engagement time` no GA4 para distinguir.
- **"Comparar bounce GA4 com bounce do Universal Analytics"** — Definições
  diferentes. Não comparar metric absolute pré-julho-2023 com pós.
- **"Bot traffic infla as métricas"** — Sempre filtrar bots no GA4 (default já
  filtra os principais, mas confira).
- **"Duration alto = engajado"** — Pode significar usuário travado. Cruzar com
  TSR / scroll depth.
- **"Pages/session de 8 é fantástico"** — Em e-commerce com 0 conversão, é só
  flanagem cara. Cruze com CR.
