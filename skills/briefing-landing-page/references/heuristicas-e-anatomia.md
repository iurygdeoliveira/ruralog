# Heurísticas CRO, Anatomia da Landing Page e Economia Comportamental

Este arquivo aprofunda as **Fases 3 (AUDITAR) e 4 (ESTRUTURAR)**. Use para conduzir auditoria heurística de página existente, tomar decisões bloco a bloco, e aplicar vieses comportamentais de forma coordenada.

## Índice

1. [LIFT Model](#lift-model)
2. [Framework Heurístico CXL](#framework-heurístico-cxl)
3. [Teste dos 5 Segundos](#teste-dos-5-segundos)
4. [Leis de UX aplicadas ao CRO](#leis-de-ux-aplicadas-ao-cro)
5. [Economia comportamental aplicada](#economia-comportamental-aplicada)
6. [Anatomia inegociável bloco a bloco](#anatomia-inegociável-bloco-a-bloco)

---

## LIFT Model

O LIFT Model (Landing Page Influence Function for Tests) é o framework mais utilizado no mundo CRO para auditoria heurística. Ele descreve 6 fatores que afetam a taxa de conversão:

**Fator central (a balança):**

- **Proposta de Valor** — o equilíbrio entre o custo percebido (tempo, dinheiro, risco, esforço) e o benefício oferecido. Toda a página se sustenta sobre essa balança.

**Facilitadores (empurram para cima):**

- **Clareza** — a proposta de valor e a ação desejada são compreendidas instantaneamente? Hierarquia visual flui logicamente?
- **Relevância** — o conteúdo atende ou supera a expectativa gerada pela fonte de tráfego (Message Match)?
- **Urgência** — há razões para agir agora ao invés de adiar? (escassez, prazo, consequências da inércia).

**Inibidores (empurram para baixo):**

- **Ansiedade** — há elementos que evocam dúvidas, inseguranças, medo? (formulário longo, ausência de selos, site sem HTTPS visível, design datado).
- **Distração** — há elementos que roubam foco? (menus, carrosséis, múltiplos CTAs competindo, animações excessivas, pop-ups intrusivos).

### Como aplicar em auditoria

Para cada bloco da página existente, atribua nota 1–5 em cada um dos 6 fatores. Os blocos com menor pontuação em Clareza/Relevância/Urgência e maior pontuação em Ansiedade/Distração são os candidatos prioritários à reengenharia.

### Exemplo de tabela de auditoria

| Bloco | Proposta Valor | Clareza | Relevância | Urgência | Ansiedade | Distração | Prioridade |
|---|---|---|---|---|---|---|---|
| Hero | 3 | 4 | 2 | 1 | 2 | 3 | Alta (Urgência e Relevância críticas) |
| Formulário | 4 | 3 | 4 | 2 | 5 | 1 | Crítica (Ansiedade 5) |
| Depoimentos | 3 | 4 | 3 | 1 | 1 | 2 | Média |
| Footer | 2 | 3 | 1 | 1 | 2 | 4 | Remover links extras |

---

## Framework Heurístico CXL

Complementar ao LIFT, o framework da CXL agrupa em 6 dimensões analisadas sobre o **objetivo da página**:

1. **Relevância** — conteúdo e design atendem a expectativa cognitiva?
2. **Clareza** — a proposta e o caminho para a ação estão diáfanos?
3. **Motivação** — há fatores intrínsecos/extrínsecos que criam desejo agudo agora?
4. **Fricção** — há elementos que causam dúvida, prolongam a decisão, exigem processamento mental desnecessário?
5. **Distração** — há elementos não-essenciais que competem pela atenção?
6. **Avaliação global** — a página, como um todo, cumpre seu objetivo único?

Use essa ótica especialmente para revisar layouts propostos **antes** de ir para execução — aplica-se tanto em auditoria quanto em decisões de design novas.

---

## Teste dos 5 Segundos

Também conhecido como **Impression Test**. É o teste mais brutal e mais eficaz de validação de primeira dobra.

**Procedimento:**

Mostre a primeira dobra da página (ou o wireframe) a uma pessoa que não conhece o produto. Deixe-a olhar por exatamente 5 segundos. Depois, tire a tela e pergunte:

1. **O que essa empresa faz?**
2. **Para quem é essa oferta?**
3. **Qual seria o próximo passo?**

**Se qualquer uma das três respostas não vier limpa e correta, a página falhou heuristicamente.**

Causas comuns de falha:
- Headline abstrata/aspiracional demais ("Transforme seu negócio").
- Hero shot que não comunica o produto.
- CTA pouco contrastado ou com copy passivo.
- Excesso de texto na primeira dobra.

Aplique esse teste mentalmente a cada iteração de wireframe.

---

## Leis de UX aplicadas ao CRO

Complementam LIFT e economia comportamental com **justificativa nomeada** para decisões de layout. Use na Fase ESTRUTURAR e ao validar wireframe.

| Lei | Onde aplicar na LP | Decisão concreta |
|-----|-------------------|------------------|
| **Hick's Law** | Pricing, planos, nav | Máximo 3–4 opções visíveis; 1 tier marcado "Recomendado" |
| **Choice Overload** | Pricing, features grid | 3 tiers, não 6; 6–9 cards hero, não 20 |
| **Von Restorff** | CTA primário, plano âncora | Botão e tier recomendado visualmente distintos (+ ícone ou label, não só cor) |
| **Goal-Gradient / Zeigarnik** | Formulário >4 campos | Breadcrumb 2–3 etapas + barra "2 de 4" |
| **Peak-End Rule** | Prova social + Thank You Page | Pico = depoimento mais forte; fim = TYP personalizada, não "Obrigado genérico" |
| **Anchoring** | Pricing, números sociais | Plano caro primeiro ou preço riscado; ancorar tempo/dinheiro economizado |
| **Law of Proximity** | Bullets, grupos de form | 8–12px dentro do grupo; 32–48px entre seções |
| **Selective Attention** | Hero, dobra | Um CTA domina contraste; resto recua em peso visual |
| **Aesthetic-Usability** | Tipografia, whitespace | Polish visual aumenta tolerância a fricção menor — não substitui UX ruim |
| **Miller's Law** | FAQ, formulário longo | Chunking: seções "Conta / Pagamento / Endereço", não lista flat de 15 campos |

**Regra:** ao registrar decisão no briefing, cite a lei quando relevante — ex.: "Formulário em 3 etapas (Goal-Gradient + Zeigarnik)".

---

## Economia comportamental aplicada

Humanos não são o *Homo economicus* racional dos manuais. A mente é governada por vieses cognitivos — e uma LP de alta performance os orquestra eticamente para remover fricção e ampliar persuasão. Os quatro pilares operacionais:

### 1. Aversão à Perda (Loss Aversion)

**Princípio** (Kahneman & Tversky): a dor psicológica de perder X é aproximadamente 2x mais intensa do que o prazer de ganhar X equivalente.

**Como aplicar no copy:**

❌ Abordagem ganhos-puros:
> "Ganhe 40% de eficiência operacional."

✅ Abordagem perdas-ancoradas:
> "Pare de desperdiçar 40% do tempo produtivo da sua equipe com sistemas legados."

O gatilho focado no "sangramento" do status quo instiga reação de evitação imediata, acelera o clique.

**Aplicação em blocos específicos:**
- **Headline:** pode ser orientada a ganho ou a perda — depende do grau de consciência do público. Público inconsciente da dor responde melhor a ganho; público consciente responde melhor a perda.
- **Subheadline:** sempre vale reforçar o custo da inércia.
- **Bullets:** pelo menos 1 dos 3–5 bullets deve nomear uma perda evitada, não só ganho obtido.
- **CTA Secundário / Recap final:** Loss Aversion brilha aqui ("Não deixe mais [custo] acontecer").

### 2. Nudging (Arquitetura de Escolha) e Default Option

**Princípio** (Thaler & Sunstein): o comportamento pode ser sutilmente direcionado sem restrição de liberdade, através do design do ambiente de escolha.

**Como aplicar:**
- **Na seção de preços**, destaque visualmente o plano que o negócio quer empurrar. Use bordas espessas, cor de fundo diferente, etiqueta "MAIS POPULAR" ou "RECOMENDADO".
- **No formulário**, pré-selecione a opção mais frequente/desejada (ex.: "Cobrança anual" já marcada).
- **Na CTA**, ofereça apenas uma ação primária. O "Saiba mais" competindo com "Comprar agora" dilui o nudge.

### 3. Ancoragem (Anchoring Effect)

**Princípio**: humanos dão peso desproporcional à **primeira informação recebida** ao julgar as subsequentes.

**Como aplicar:**
- **Pricing:** mostre o plano mais caro primeiro ou use preço riscado. "De R$ 997 por R$ 497" é infinitamente mais persuasivo que "R$ 497" sozinho.
- **Tempo economizado:** ancore em números grandes. "Empresas como a sua economizam em média 30 horas por mês usando nossa solução" faz o visitante calcular em relação a 30h, não a zero.
- **Prova social numérica:** "Mais de 12.000 empresas confiam" ancora a escala da adoção antes mesmo do visitante avaliar a solução.

### 4. Peak-End Rule (Regra do Pico e Fim)

**Princípio** (Kahneman): as pessoas avaliam uma experiência inteira com base em (a) o momento mais intenso (pico) e (b) o momento final. Os momentos intermediários são discount-aed na memória.

**Consequências para o briefing:**
- **Pico da LP:** normalmente é a prova social mais forte (case poderoso, selo de autoridade, depoimento emocional). Posicione bem — não esconda no rodapé.
- **Fim da LP:** o recap antes do rodapé precisa ser memorável, não um resumo burocrático.
- **Página de Agradecimento:** o verdadeiro "fim" da jornada não é clicar no botão — é a tela que aparece depois. Se ela for uma mensagem genérica ("Obrigado, entraremos em contato"), você está jogando fora o Peak-End.

**Anatomia de uma Página de Agradecimento que explora Peak-End:**
1. Confirmação calorosa e personalizada ("Bem-vindo, [nome]! Sua vaga está reservada.").
2. Expectativa clara do próximo passo ("Nosso especialista vai te ligar em até 2 horas úteis. Se preferir, agende o horário direto na minha agenda: [botão]").
3. Bônus imediato ("Enquanto isso, aqui está o guia que você vai adorar: [download]").
4. Convite para redes sociais ou comunidade (se fizer sentido).
5. Reafirmação da decisão ("Você está no caminho certo — veja o que nossos clientes dizem após [prazo]: [depoimento rápido]").

### 5. Efeito Zeigarnik (bônus — fundamenta o formulário Breadcrumb)

**Princípio**: tarefas incompletas ocupam memória de curto prazo e geram tensão cognitiva até serem concluídas.

**Como aplicar:**
- **Formulários em etapas** (técnica Breadcrumb) exploram isso: uma vez que o usuário responde a pergunta 1, a tensão de completar as próximas o empurra adiante, mesmo que a pergunta 3 seja mais sensível.
- **Barras de progresso** amplificam o efeito — mostrar "2 de 4" transforma o abstrato em concreto.

---

## Anatomia inegociável bloco a bloco

A estrutura abaixo tem evidência empírica massiva (Unbounce, KlientBoost, HubSpot, CXL — milhões de impressões de tráfego analisadas). Cada bloco tem razão de ser. Desviar sem justificativa forte é assumir risco de conversão.

### 1. Headline (título principal)

**Função:** capturar atenção em 0,5–2 segundos e confirmar que o visitante está no lugar certo.

**Regras:**
- **Message Match estrito.** As palavras-chave do anúncio/e-mail que gerou o clique **devem** aparecer na headline. Falha aqui é "desrespeito ao clique" — o usuário sai em segundos.
- **Fórmulas validadas:**
  - `[Benefício supremo] em [tempo curto] sem [dor comum]`
  - `Como [resultado desejado] sem [atrito temido]`
  - `A única maneira de [resultado] para [persona específica]`
- **Especificidade > genérico.** "Emagreça 5kg em 30 dias sem abrir mão de pão" > "Transforme seu corpo".
- **Promessa ancorada em resultado mensurável.**

### 2. Subheadline

**Função:** complementar a headline, expandir o benefício em uma linha, e **atacar a primeira objeção**.

**Exemplo:**
- Headline: "Reduza em 40% o tempo da sua equipe com planilhas."
- Subheadline: "Implementação em 7 dias, sem migração manual. Integrado ao seu Google Workspace atual."

Note como a subheadline mata duas objeções de inércia ("vai ser difícil implementar", "vou ter que abandonar o que uso hoje").

### 3. Hero Shot (imagem/vídeo principal)

**Função:** comunicar visualmente o que o produto faz e para quem.

**Regras:**
- **Proibido stock genérico** (o famoso "grupo diverso sorrindo apontando para laptop"). Usuários reconhecem e desconfiam.
- **Se houver pessoas na foto**, implemente **olhar direcional**: os sujeitos devem olhar para a headline ou para o CTA. O olhar humano guia o olhar do visitante — neurociência visual básica.
- **Produto físico:** foto em uso, no contexto real.
- **SaaS:** screenshot real do produto (não mockup aspiracional), vídeo curto (<60s) de demonstração, ou animação mostrando input→output.
- **Serviço:** antes/depois, cliente real, ou representação visual do resultado (não do processo).

### 4. CTA primário "acima da dobra"

**Função:** permitir que visitantes já convencidos convertam imediatamente, sem scroll.

**Regras:**
- **Copy:** verbo de posse/ganho em primeira pessoa. Sempre.
  - ❌ "Enviar", "Clique aqui", "Saiba mais", "Cadastrar"
  - ✅ "Garantir minha vaga", "Agendar minha demo grátis", "Baixar o guia completo", "Começar meu teste de 14 dias"
- **Contraste:** o botão deve ser a coisa mais vibrante visualmente na dobra. Não compete — domina.
- **Espaço em branco:** ao redor, pelo menos 2x a altura do botão em whitespace.
- **Microcopy de redução de risco** logo abaixo do botão (ver item 8).
- **Destino único:** todos os botões primários levam à mesma conversão. **Compacta:** mesmo copy no hero e footer; opcional 1 rótulo contextual no meio. **Expandida:** até 3 rótulos (hero, pós-prova social, footer) — cada um completa "Eu quero…" do bloco anterior. Nunca competir checkout vs WhatsApp como primários.

### 5. Bullets de benefício

**Função:** converter features em benefícios tangíveis, atacando as dores mapeadas no VoC.

**Regras:**
- **3 a 5 bullets.** Menos é fraco; mais é fadiga.
- **Cada bullet começa com verbo de transformação + resultado tangível.**
- **Cada bullet aborda uma dor específica do VoC** — não descreve feature, descreve o que a feature produz na vida do cliente.

**Exemplo (SaaS de gestão):**
- ❌ Feature: "Integração com Google Calendar"
- ✅ Benefício: "Nunca mais esqueça um compromisso — sincronização automática com sua agenda já existente"

### 6. Prova Social (Social Proof)

**Função:** reduzir ansiedade e emprestar credibilidade de terceiros.

**Regras:**
- **Atribuição real, sempre.** Depoimento anônimo conta ZERO. O mínimo aceitável: nome completo, cargo, empresa. Ideal: + foto + resultado concreto atingido.
- **Alinhamento reverso com objeções.** Os depoimentos selecionados **não devem ser os mais elogiosos** — devem ser aqueles que **matam as ansiedades específicas** mapeadas no VoC. Se a objeção #1 é "vai ser difícil implementar", o depoimento #1 deve ser de alguém dizendo "implementamos em uma tarde, mais fácil do que eu imaginava".
- **Formatos que funcionam:**
  - Depoimentos escritos com foto/cargo/empresa (padrão).
  - Vídeos curtos de 30–60s com clientes reais.
  - Logos de clientes corporativos (Trust Badges).
  - Números concretos ("+12.000 empresas", "4,9/5 em 3.400 avaliações").
  - Cases com antes/depois quantificado.
  - Menções em mídia (logos "Como visto em...").
  - Selos de certificação (ISO, LGPD, PCI-DSS, B-Corp, etc.).

### 7. Bloco de Objeções (FAQ estratégica)

**Função:** capturar conversões de visitantes céticos que precisam de mais informação.

**Regras:**
- **Máximo 5–7 perguntas.** Foque nas 5 objeções mais frequentes do VoC.
- **Não é FAQ genérico** ("Como funciona?"). É FAQ calibrado para demolir objeções: "Minha equipe vai precisar de treinamento longo?", "E se eu não gostar, consigo cancelar?", "Funciona com [ferramenta X que eu já uso]?".
- **Cada resposta contém um mini-CTA** ao final ("Quer saber como isso funciona na sua realidade? Agende uma demo de 15min").

### 8. Formulário

**Função:** converter visitantes qualificados em leads/clientes.

**Regras:**
- **Minimização rigorosa.** Peça apenas o que é absolutamente necessário para qualificar. Cada campo extra reduz conversão em ~7% em média.
- **Estratégia Breadcrumb (formulário em etapas) se >4 campos.** Fragmente em 2–3 telas curtas. Comece com pergunta de baixo comprometimento ("Qual é o seu maior desafio hoje?") e só peça dados sensíveis (telefone, e-mail corporativo) na etapa final. Explora Efeito Zeigarnik + custo irrecuperável cognitivo.
- **Barra de progresso visível** no modo Breadcrumb. "2 de 4" > barra visual abstrata.
- **Validação inline** — erros aparecem antes do submit, não depois.
- **Microcopy de segurança** logo abaixo do botão:
  - "Seus dados estão 100% seguros."
  - "Nunca enviamos spam. Descadastre em 1 clique."
  - "Não pedimos cartão de crédito."
  - "Garantia incondicional de 30 dias."
  - Selos visuais (SSL, LGPD, etc.) conforme aplicável.
- **Botão do formulário** segue as mesmas regras do CTA primário — verbo de posse, nunca "Enviar".

### 9. CTA final + Recap da oferta

**Função:** converter visitantes que rolaram até o fim ainda indecisos.

**Regras:**
- **Recap em 3 bullets** — o essencial da oferta em formato escaneável.
- **Loss Aversion ativada:** "Enquanto você decide, [custo do status quo continua acontecendo]."
- **CTA com mesmo destino** do primário. **Compacta:** copy idêntico ao hero. **Expandida:** rótulo contextual permitido no footer se completar "Eu quero…" do recap.

### 10. Página de Agradecimento (Thank You Page)

**Função:** fechar a jornada com pico emocional positivo (Peak-End Rule).

Ver seção "Peak-End Rule" acima. **Briefing incompleto se não incluir wireframe da TYP.**

---

## Técnicas compactas inspiradas em sales pages

Inspire-se em sales pages de alto ticket (ex.: infoproduto BR) **sem replicar extensão** (~30k px). Comprima cada técnica em 1 bloco ou 1 frase — default `compacta` (8–10 blocos).

| Técnica | Como comprimir | Onde na LP compacta |
|---|---|---|
| **Objeção invertida** | 1 headline: "Sim, [crença comum]… [reframe]" | Hero, bloco de objeções ou FAQ #1 |
| **Prova em 2 camadas** | Faixa com 3 métricas verificáveis + 1 depoimento que mata objeção #1 | Abaixo do hero + prova social |
| **Valor antes do preço** | 3–5 bullets de benefício antes de pricing; pricing fora da dobra se ticket alto | Bloco benefícios → pricing |
| **Sticky condicional** | Barra fixa com oferta só se urgência real na Fase ALINHAR | Campanha pontual, não default |
| **Recap de 3 bullets** | Essencial da oferta no footer CTA, não seção extra | Footer CTA |
| **Anti-enciclopédia** | Stack >5 itens → accordion ou link "ver detalhes" (PDF, VSL, página secundária) | Benefícios / features |

**Regra:** mais blocos ≠ mais conversão. Se o cliente pedir "LP estilo Sobral", traduza para estas técnicas comprimidas — não para 20 seções.

---

## Checklist de saída da Fase ESTRUTURAR

Antes de consolidar o briefing:

- [ ] Cada um dos 10 blocos tem decisão tomada (ou justificativa de remoção).
- [ ] Nenhum menu de navegação institucional presente.
- [ ] Densidade registrada (`compacta` default / `expandida` justificada).
- [ ] Um destino de conversão; rótulos contextuais dentro do limite (compacta ≤2 CTAs distintos, expandida ≤3).
- [ ] Message Match validado: headline contém as palavras-chave da fonte de tráfego.
- [ ] Bullets mapeados 1-a-1 com dores VoC, não são features.
- [ ] Depoimentos selecionados atacam objeções específicas, não são "elogios vazios".
- [ ] Formulário: se >4 campos, estratégia Breadcrumb adotada.
- [ ] Microcopy de segurança junto ao botão do formulário.
- [ ] Página de Agradecimento desenhada.
- [ ] Teste dos 5 Segundos mental realizado e aprovado.
