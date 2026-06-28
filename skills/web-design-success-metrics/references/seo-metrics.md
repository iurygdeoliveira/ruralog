# SEO & Visibilidade — Métricas de Impacto na Busca

> **Pergunta que este grupo responde:** As pessoas conseguem **encontrar** o site?
>
> Por mais bonito que seja o design, ele só é eficiente se houver tráfego. As
> escolhas estruturais feitas durante o design — hierarquia de heading, internal
> linking, otimização de assets — afetam diretamente como search engines lêem e
> ranqueiam o site.

Este reference cobre as 3 métricas-âncora do artigo (Tráfego Orgânico, Keyword
Rankings, Backlink Profile) + sinais auxiliares.

---

## 1. Organic Traffic Growth

### Definição

Visitantes que chegam ao site via **resultados não pagos** de buscadores (Google,
Bing, DuckDuckGo, Yandex). Não inclui referrals, social, direto, paid.

### Por que importa para design

> "Search engines premiam fatores design-centric, não só keywords."

Em particular:

- **Information architecture** — navegação clara ajuda crawler a entender escopo
- **Heading hierarchy** — H1, H2, H3 sinalizam tópicos para o algoritmo
- **Image alt-text** — descrição textual ajuda buscador E acessibilidade
- **URLs limpas** — `/produtos/cadeira-ergonomica` é melhor que `/p?id=8421`
- **Internal links** — distribuem autoridade entre páginas e ajudam discovery
- **Mobile-first design** — Google usa versão mobile para indexar

### Como medir

| Fonte                     | O que dá                                           |
|---------------------------|----------------------------------------------------|
| **GA4** (Acquisition)     | Sessions / Users / Conversions por canal Organic   |
| **Search Console**        | Clicks, impressions, CTR, position                  |
| **Ahrefs / Semrush**      | Estimativa de tráfego, top pages, top keywords     |
| **SimilarWeb**            | Comparação com competidor (estimativa)             |

### Leituras a fazer

1. **Tráfego orgânico total** mês-a-mês — tendência sobe?
2. **Tráfego por landing page** — quais layouts/conteúdos puxam mais?
3. **Tráfego por device** — mobile cresce ou cai? (mobile-first indexing)
4. **Tráfego por país/região** — está acertando o mercado-alvo?
5. **Engajamento do tráfego orgânico** (bounce, session duration) — tráfego é
   relevante? (cruzar com Engagement metrics)

### Padrões pós-redesign

| Padrão observado                        | Hipótese                                          |
|-----------------------------------------|---------------------------------------------------|
| Tráfego cai 20-50% logo após launch     | Normal — Google está re-rastreando/ranqueando.    |
|                                         | Volta em 4-12 semanas se SEO foi preservado.      |
| Cai e não volta após 12 semanas         | Provável: URLs mudaram sem 301, tags removidas,   |
|                                         | conteúdo perdido, mobile usability piorou         |
| Cresce gradualmente                     | Design-friendly + arquitetura de informação melhor|
| Picos de tráfego em páginas novas       | Google reconhecendo conteúdo bem estruturado     |

### Tempo de espera realista

- **0-30 dias:** flutuação normal, Google re-indexando.
- **30-90 dias:** tendência começa a aparecer.
- **90-180 dias:** ganho real de autoridade aparece (se SEO foi bem feito).
- **180+ dias:** plateau ou novo crescimento.

> Não declare sucesso/falha de SEO antes de **90 dias** de janela.

### Como design pode ter quebrado SEO no redesign (checklist)

- [ ] URLs antigas não foram redirecionadas com 301?
- [ ] Hierarquia de H1/H2 sumiu (todo mundo virou `<div class="title">`)?
- [ ] Images perderam alt-text?
- [ ] Conteúdo de texto foi substituído por imagem (sem texto alt)?
- [ ] Robots.txt ou meta `noindex` ficou deployado por engano?
- [ ] Sitemap.xml não foi atualizado?
- [ ] Velocidade caiu? (Core Web Vitals → ranking)
- [ ] Mobile usability piorou?

---

## 2. Keyword Rankings

### Definição

Posição do site nos resultados de busca para **palavras-chave alvo**. Tráfego
orgânico te diz **quantos** vêm; rankings te dizem **onde você está na disputa**.

### Por que design influencia rankings

> "Search engines não olham só palavras — olham como elas estão estruturadas
> dentro do design."

Mecanismos:

- **Content hierarchy:** H1 e H2 corretos sinalizam tópico da página
- **Dwell time:** se o design é envolvente e o usuário fica, Google interpreta
  como sinal de qualidade → ranking sobe
- **Readability:** line-height, contrast, fonte legível mantém o usuário lendo
- **Schema markup (JSON-LD):** structured data ajuda Google a entender conteúdo

### Como medir

| Ferramenta                | O que dá                                     | Custo            |
|---------------------------|----------------------------------------------|------------------|
| Search Console            | Posição média por query, CTR, impressions    | Grátis           |
| Ahrefs                    | Tracker de keywords, SERP features            | Pago             |
| Semrush                   | Tracker, intent, dificuldade                  | Pago             |
| Mangools (KWFinder)       | Mais barato que Ahrefs/Semrush                | Pago             |
| AccuRanker                | Especializado em rank tracking diário         | Pago             |

### Leituras críticas

1. **Top 10 keywords** que trazem mais tráfego — proteger essas a todo custo.
2. **Keywords que entraram no top 3** — onde o redesign acertou.
3. **Keywords que saíram do top 10** após redesign — onde quebrou.
4. **Keywords da posição 4-10** — oportunidades de chegar no top 3.
5. **Branded vs non-branded** — separar para entender autoridade real.

### Por que top 3 é desproporcional

> Top 3 resultados levam a maioria dos cliques.

Distribuição típica de CTR por posição (Search Console agregado):

| Posição | CTR aproximado |
|---------|----------------|
| 1       | 27-40%         |
| 2       | 15-20%         |
| 3       | 9-12%          |
| 4-10    | 2-5% somados   |
| 11+     | <1%            |

Mover de posição 8 → 3 pode **triplicar tráfego** sem ganhar nenhum visitante novo.

### Sinais de design que ajudam ranking

- H1 único por página, batendo com query principal
- H2/H3 batendo com long-tail variations
- FAQ schema (JSON-LD) para queries de pergunta
- Breadcrumb schema para navegação
- Article/Product schema conforme o tipo de página
- Featured snippet optimization (parágrafo direto, lista, tabela no formato certo)

> Para detalhes técnicos de schema, redirecionar para a skill
> `landing-page-seo-geo`.

---

## 3. Backlink Profile

### Definição

Backlinks = links de outros sites apontando para o seu. Cada um é "voto de
confiança". O **profile** é o conjunto deles.

### Por que design importa para backlinks

> "Sites de qualidade raramente linkam para sites que parecem não-profissionais,
> difíceis de navegar ou desatualizados."

Quando você lança um redesign de qualidade, o site se torna **linkable asset** —
algo que jornalistas, criadores de conteúdo e peers da indústria sentem confiança
de compartilhar com sua audiência.

### Métricas a trackear

| Métrica                    | O que mede                                    | Onde ver           |
|----------------------------|-----------------------------------------------|--------------------|
| **Referring domains (RD)** | Número de domínios únicos que linkam          | Ahrefs, Semrush, Moz|
| **Total backlinks**        | Número total de links (vários do mesmo domínio contam) | Ahrefs        |
| **DR / DA**                | Domain Rating (Ahrefs) ou Domain Authority (Moz) — autoridade do site | Ahrefs / Moz |
| **Quality of links**       | DR/DA dos sites que linkam                    | Ahrefs, Semrush    |
| **Anchor text distribution** | Que palavras são usadas no link              | Ahrefs             |
| **Lost links**             | Links que sumiram (importante após redesign)  | Ahrefs, Semrush    |

### Bandeiras vermelhas pós-redesign

- **Lost backlinks com 404 no destino** → URLs antigas não redirecionadas. Critical.
- **DR caindo** → confiança do Google no domínio caindo.
- **Anchor text "click here" dominante** → ninguém está linkando o nome da marca,
  só copiando URL.
- **RD crescendo mas tráfego orgânico caindo** → links de baixa qualidade ou de
  sites com pouca autoridade.

### Social shares

Não são backlinks (a maioria das plataformas usa `nofollow`), mas indicam que o
design é **visualmente compartilhável**:

- Open Graph tags configuradas (preview certo no Twitter/LinkedIn/Facebook)
- Twitter Card tags
- Imagens 1200×630 para social
- Schema do tipo Article/Product para rich previews

### Para mais detalhes em SEO técnico

Redirecione para a skill `landing-page-seo-geo` quando o usuário precisar:

- Configurar JSON-LD/Schema.org
- Otimizar `llms.txt` para AI crawlers
- Configurar `robots.txt` para Bingbot/Googlebot/GPTBot
- Auditar HTML5 semântico
- Configurar `hreflang` para multi-língua

---

## Sinais auxiliares de SEO (bônus)

| Sinal                          | Onde ver                | O que indica                        |
|--------------------------------|-------------------------|-------------------------------------|
| Indexação (pages indexed)      | Search Console          | Quantas pages estão no índice       |
| Crawl errors                   | Search Console          | URLs que Google não conseguiu ler   |
| CTR médio                      | Search Console          | Title/meta description sedutores?   |
| Dwell time (no SERP)           | Heuristic               | Usuário volta para SERP rápido = ruim |
| Image search traffic           | GA4 Source = `images.google` | Imagens otimizadas?            |

---

## Triagem rápida — quais SEO metrics pedir primeiro?

1. **Search Console** acesso (CTR, impressions, position, top queries)
2. **GA4** Acquisition > Channels filtrado por Organic
3. **Ahrefs/Semrush** export de top keywords + RD
4. **Sitemap.xml e robots.txt** atuais para auditoria

Se nenhum desses existir → primeiro passo é **instrumentar** (Search Console é
gratuito, basta verificar domínio).

---

## Erros comuns de leitura

- **"Tráfego orgânico subiu, redesign deu certo!"** — Subiu sazonalmente?
  Comparar com mesmo período do ano anterior. Cuidado com Black Friday, Natal,
  volta às aulas.
- **"Caímos no ranking, redesign foi ruim"** — Pode ser flutuação algorítmica do
  Google (core update). Cruzar com Search Console e datas dos updates oficiais.
- **"Temos 10.000 backlinks!"** — De quantos domínios únicos? 10.000 backlinks de
  20 domínios é menos valioso que 1.000 backlinks de 800 domínios.
- **"Página 1 do Google"** — Posição 1 a 10, sim. Mas posição 8 leva 2% do
  tráfego, posição 1 leva 30%+. "Página 1" é vaidade.
- **Não considerar AI Overviews / SGE** — Em 2025+, queries informacionais cada
  vez mais são respondidas pela IA do Google sem clique. Tráfego pode cair
  estruturalmente sem ser culpa do design.
