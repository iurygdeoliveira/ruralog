# Conversão — Métricas de Resultado de Negócio

> **Pergunta que este grupo responde:** O site **gera resultado de negócio**?
>
> O sucesso final do design é medido pela capacidade de **dirigir uma ação
> específica de negócio**. Conversion metrics rastreiam a transição de visitante
> para cliente, assinante ou lead.
>
> Um design bem-sucedido age como **vendedor silencioso**, guiando o usuário até
> a linha de chegada com o mínimo de friction.

---

## 1. Conversion Rate (CR)

### Definição

Percentual de visitantes que **completam** uma ação-alvo: comprar, assinar
newsletter, baixar e-book, agendar demo, preencher form de contato.

### Fórmula

```
Conversion Rate = (Conversões / Visitantes) × 100
```

### Tipos de conversão

| Tipo                   | Exemplo                              | Valor de negócio       |
|------------------------|--------------------------------------|------------------------|
| Macro (primária)       | Compra, assinatura, demo agendada    | Alto — direto na receita|
| Micro (secundária)     | Newsletter, download, view de vídeo  | Médio — alimenta funil |
| Engajamento            | Scroll 75%, 2min de leitura          | Baixo — sinal positivo |

> **Definir CR = sempre por uma macro-conversão clara.** Múltiplas micro-conversões
> podem distorcer o número real para o board.

### Benchmarks aproximados (varia muito por indústria)

> **Use só como referência.** Sempre prefira comparar **com baseline próprio**.

| Setor / Tipo de site                  | CR mediana    | CR top 25%   |
|---------------------------------------|---------------|--------------|
| E-commerce geral                      | 2-3%          | 5-8%         |
| SaaS B2B (free trial)                 | 3-5%          | 8-12%        |
| SaaS B2B (demo request)               | 1-2%          | 3-5%         |
| Lead gen B2B (form)                   | 2-3%          | 5-7%         |
| Newsletter signup                     | 1.5-2.5%      | 4-6%         |
| Landing page paga (Google Ads)        | 4-6%          | 10%+         |
| Marketplace                           | 1-2%          | 3-5%         |
| Cursos online                         | 2-4%          | 7-10%        |

**E-commerce mobile vs desktop:** mobile costuma ter CR 30-50% **menor** que
desktop por motivos de UX. Sempre segmentar.

### Como design influencia CR

> "Se o design é intuitivo e constrói confiança, CR sobe. Se o design é
> confuso ou esconde o CTA, CR sofre — não importa o tráfego."

Patterns que melhoram CR:

| Mudança de design                                | Lift típico (varia muito) |
|--------------------------------------------------|---------------------------|
| CTA com cor de alto contraste vs concorrentes    | +10 a +30%                |
| Headline outcome-oriented vs feature-focused     | +10 a +25%                |
| Trust signals próximos ao CTA                    | +5 a +20%                 |
| Reduzir form de 9 → 4 campos                     | +30 a +120%               |
| Página dedicada por persona (vs uma genérica)    | +20 a +100%               |
| Above-the-fold limpo (1 mensagem, 1 CTA)         | +15 a +40%                |
| Performance: load 5s → 2s                        | +10 a +30%                |
| Vídeo demonstrativo no hero                      | +5 a +20%                 |

> **Cuidado com lifts >100%:** muitas vezes vêm de teste em volume baixo (não
> estatisticamente significante) ou comparação de baseline ruim.

### Quando CR cai pós-redesign

> "É frequentemente sinal de **choice overload** (opções demais) OU **CTA
> escondido** (botão funde no fundo)."

Causas comuns por padrão:

| Padrão observado                          | Hipótese                                         |
|-------------------------------------------|--------------------------------------------------|
| CR cai 20-50% logo após launch            | Confiança estabelecida do site velho foi quebrada — precisa re-aprender|
| Page A (top funnel) ↑ + Page B (checkout) ↓ | Design top funnel atrai melhor mas checkout piorou|
| CR mobile ↓↓ vs desktop estável           | Mobile UX quebrou em alguma coisa específica     |
| CR cai apenas em paid                     | Quality Score caiu — landing não bate com ad copy|
| CR estável mas volume cai                 | Tráfego caiu (problema é SEO, não design)        |

### Como medir corretamente

1. **GA4 → Configure → Events → Mark as conversion** o evento certo
2. **GA4 → Reports → Engagement → Conversions** acompanhar diariamente
3. **GA4 → Explore → Funnel exploration** para identificar onde cai no funil
4. **A/B testing** sempre que possível (Google Optimize foi descontinuado em 2023
   — alternativas: VWO, Optimizely, Convert.com, Posthog)

### Significância estatística

Não declarar "redesign aumentou CR em X%" antes de:

- **Sample size suficiente** — mínimo ~1.000 conversões na variação ganhadora
- **Tempo de teste suficiente** — pelo menos 2-4 semanas (cobre dia da semana,
  ciclo de pagamento, etc.)
- **p-value <0.05** (se rodando A/B test)

Calculadoras úteis: VWO Significance Calculator, Optimizely Sample Size Calculator,
ABTestGuide.

---

## 2. Lead / Sale Volume

### Definição

Os **números brutos**: quantos forms preenchidos? quantas vendas? quantas
subscriptions? Para stakeholder não-técnico, é a evidência mais tangível.

### Por que volume importa além de CR

CR pode subir e volume cair (se tráfego cair na mesma proporção). E vice-versa.

| Cenário                      | CR     | Tráfego  | Volume   | Avaliação                 |
|------------------------------|--------|----------|----------|---------------------------|
| Antes                        | 3%     | 10.000   | 300      | —                         |
| Depois A                     | 5%     | 6.000    | 300      | CR ↑ mas tráfego perdido  |
| Depois B                     | 3%     | 15.000   | 450      | Tráfego ↑, design neutro  |
| Depois C                     | 5%     | 15.000   | 750      | Sucesso pleno             |

### O que trackear

| Métrica                  | Para quem importa                      |
|--------------------------|----------------------------------------|
| Total revenue            | E-commerce, executivo                  |
| Total leads              | B2B, head of marketing/sales           |
| Avg order value (AOV)    | E-commerce                             |
| Lifetime value (LTV)     | SaaS, retenção                         |
| Newsletter subscribers   | Content, nurture                       |
| Demo bookings            | B2B SaaS                               |
| Trial signups            | SaaS                                   |

### Qualidade do lead — ponto cego comum

> O artigo destaca: além de **mais leads, eles ficaram melhores?**

Sinais de melhora de qualidade pós-redesign:

- **Sales-qualified rate** sobe — sales aprova mais leads
- **Conversion lead → cliente** sobe — leads chegam mais quentes
- **Tempo até primeira reunião** cai — leads mais decididos
- **Score do lead (em CRM)** sobe em média

Se volume cresce mas qualidade cai, o redesign pode estar atraindo o público
errado.

### Como design afeta volume

| Mecanismo                                       | Impacto                            |
|-------------------------------------------------|------------------------------------|
| **Reduzir friction** (checkout 5 → 2 steps)     | Captura vendas que abandonariam   |
| **Aumentar acessibilidade**                     | Abre audiência (deficientes visuais, low vision)|
| **Mobile-first**                                | Captura 50%+ do mercado           |
| **SEO friendly architecture**                   | Mais tráfego top of funnel        |
| **Trust building**                              | Mais confiança = mais conversão   |

---

## 3. Cost Per Acquisition (CPA)

### Definição

Quanto **custa** ganhar um cliente/lead. É métrica de marketing, mas o design
afeta diretamente.

### Fórmula

```
CPA = Total de gasto em marketing / Total de conversões
```

### Por que design afeta CPA

> "Se seu design é mais eficiente em converter tráfego, o gasto em marketing fica
> mais eficiente."

Exemplo do artigo:

> **Cenário A:** $1.000 em ads → LP que converte 1% → 10 leads → **CPA = $100**
> **Cenário B:** $1.000 em ads → LP que converte 2% → 20 leads → **CPA = $50**
>
> Sem gastar 1 centavo a mais em mídia, o redesign **reduziu CPA pela metade**.

### Como design lowers CPA (mecanismos)

#### 3.1. Quality Score boost

Plataformas como Google Ads e Meta dão **Quality Score** mais alto para anúncios
que levam a páginas:

- Rápidas (Core Web Vitals bons)
- Relevantes (page coincide com intent do anúncio)
- Bem estruturadas (HTML semântico, mobile-friendly)

Quality Score alto **reduz custo por clique (CPC)** real, mesmo no mesmo bid.

#### 3.2. Distraction removal

Tirar links/elementos que desviem do objetivo da página paga:

- Remover navegação top em LP de campanha
- Remover footer com links demais
- Remover banners de outras ofertas
- Esconder chat se confundir com objetivo

→ menos paid visitors caem fora → **mais ROI por dólar**

#### 3.3. Information architecture

Se o usuário **acha o que precisa imediatamente**, o caminho até a compra
encurta:

- Menos retargeting necessário
- Menos email follow-up
- Menos custo total para fechar

#### 3.4. Velocidade real

Performance ruim → mais bounces no paid → mais ad spend desperdiçado

```
LP com 5s load → 38% bounce mobile → $1000 ad spend gera só $620 de tráfego útil
LP com 2s load → 9% bounce mobile → $1000 ad spend gera $910 de tráfego útil
```

### Métricas relacionadas a CPA

| Métrica         | Significado                                        | Boa quando        |
|-----------------|----------------------------------------------------|-------------------|
| **CPC**         | Custo por clique                                   | Cai com Quality Score |
| **CPL**         | Custo por lead                                     | Cai com CR melhor |
| **CAC**         | Custo de aquisição de cliente (vs lead)            | Cai com lead-to-customer rate|
| **ROAS**        | Return on ad spend                                 | >1 = lucro      |
| **LTV/CAC**     | Lifetime value vs CAC                              | >3 = saudável (SaaS)|

### Padrões pós-redesign em CPA

| Sinal observado                            | Hipótese                                       |
|--------------------------------------------|------------------------------------------------|
| CPC cai 20%+                               | Quality Score subiu — page mais relevante      |
| CPL cai mas CAC sobe                       | Leads mais baratos mas piores                  |
| ROAS sobe estável                          | Design e mídia funcionando juntos              |
| ROAS oscila                                | Pode ser sazonalidade ou criativo de ads       |

---

## 4. Sinais auxiliares de conversão (bônus)

| Sinal                        | O que indica                            | Onde ver        |
|------------------------------|------------------------------------------|-----------------|
| Cart abandonment rate        | % de carrinhos não fechados              | E-comm platform |
| Form abandonment rate        | % de forms iniciados não submitidos      | Hotjar Forms    |
| Add-to-cart rate             | % de visitantes que adicionam ao carrinho| GA4             |
| Checkout completion rate     | % do início → fim do checkout            | GA4 Funnel      |
| Repeat purchase rate         | % de clientes que compram de novo        | E-comm platform |

---

## Triagem rápida — quais conversion metrics pedir primeiro?

1. **CR macro** — quantos % completaram a ação principal (último 30 dias)
2. **Volume absoluto** — quantos leads/vendas em N (último 30 dias)
3. **Funnel breakdown** — onde cai mais (GA4 Funnel exploration)
4. **CPA por canal** — qual canal está mais ineficiente
5. **Mobile vs desktop CR** — quase sempre há gap

Sem CR macro definida no GA4, não há conversa. Pedir para definir antes.

---

## Cruzamentos essenciais

| Combinação                                | Diagnóstico                                   |
|-------------------------------------------|-----------------------------------------------|
| Tráfego ↑ + CR ↓ = Volume ?               | Calcular se volume real subiu/desceu          |
| CR ↑ + AOV ↓                              | Convertem mais mas com tickets menores       |
| CR ↓ + Engagement ↑                       | Engajado mas sem ação — analisar CTA          |
| Mobile CR <50% do desktop CR              | Mobile UX está sangrando dinheiro             |
| Paid CR << Organic CR                     | Landing não bate com ad copy ou audience      |
| Cart abandonment ↑ pós-redesign           | Friction no checkout — investigar             |

---

## Erros comuns de leitura

- **"CR de 8% — meta superada!"** — Comparar com baseline e benchmark da
  indústria. 8% pode ser mediano em e-commerce de baixo ticket.
- **"CR caiu, redesign foi falho"** — Pode ter melhorado qualidade do lead ou
  AOV. Olhe o sistema, não só o número.
- **"CPA caiu"** — Caiu por design ou por mídia (mudança de canal, criativo)?
  Sempre cruzar.
- **Atribuição last-click** — Inflate o último canal e desvaloriza top of funnel.
  Considerar modelos data-driven do GA4 quando possível.
- **Comparar CR mobile com desktop como se fossem iguais** — Sempre são
  diferentes. Compare cada um com seu próprio histórico.
- **Não considerar sazonalidade** — Comparar abril vs março sem considerar
  feriados, Black Friday, fim do trimestre fiscal.
