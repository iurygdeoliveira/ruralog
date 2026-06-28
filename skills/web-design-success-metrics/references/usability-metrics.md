# Usabilidade — Métricas de Experiência do Usuário

> **Pergunta que este grupo responde:** As pessoas conseguem efetivamente usar o site?
>
> Antes de olhar conversão, vendas ou tráfego, é preciso saber se o site é usável. Uma
> interface bonita causa boa primeira impressão; **usabilidade decide se o visitante
> termina o que começou ou abandona por frustração**.

---

## 1. Task Success Rate (TSR)

A métrica mais importante de usabilidade — mede **efetividade**.

### Definição

Percentual de usuários que **completam** uma tarefa pré-definida no site (checkout,
signup, encontrar documento, baixar e-book, agendar reunião).

### Fórmula

```
Success Rate = (Tarefas Completadas com Sucesso / Total de Tentativas) × 100
```

### Como medir

| Método                       | Como funciona                                           | Quando usar                  |
|------------------------------|---------------------------------------------------------|------------------------------|
| **Teste de usabilidade**     | Recrutar 5-10 usuários, dar uma tarefa, observar       | Pré-launch ou pós-redesign  |
| **Event tracking (GA4)**     | Definir start event + end event, calcular ratio         | Site em produção             |
| **Funil em ferramenta UX**   | Hotjar Funnels, Mouseflow, FullStory                   | Funis longos (checkout)      |

### Interpretação

| TSR     | Leitura                                               |
|---------|-------------------------------------------------------|
| 100%    | Todo mundo achou. Provavelmente a tarefa é trivial.   |
| 95%+    | Excelente. Considere benchmarking com competidor.     |
| 80-95%  | OK, mas há fricção. Investigue o caminho dos 5-20%.   |
| <80%    | Crítico. Provável: navegação confusa, label de botão  |
|         | dúbio, fluxo quebrado em algum step.                  |

### Como o design influencia

- **Navigation labels:** "Soluções" é mais ambíguo que "Produtos para CRM".
- **Botões: cor, contraste, posição.** Se "Cancelar" estiver mais proeminente que
  "Continuar", usuários clicam errado.
- **Hierarquia visual:** o caminho até o objetivo precisa ser óbvio em 1-2 olhadas.
- **Falsa conclusão:** usuário pode achar que terminou (preencheu form) sem ter
  apertado "enviar". Isso conta como falha.

### Caso de uso para benchmarking

> Versão antiga do checkout: TSR = 80%
> Versão nova do checkout: TSR = 95%
>
> Win documentado: +15pp em efetividade. Tradução para receita = (visitantes ×
> 0.15 × ticket médio).

---

## 2. User Error Rate (UER)

Enquanto TSR mede se o usuário **terminou**, UER mede **quantos erros ele cometeu no
caminho**.

### Definição

Erro = qualquer ação errada do usuário enquanto tenta executar a tarefa. Não é só
um 404; inclui:

- **Slip errors:** usuário sabe o que fazer, mas clica errado (ex: aperta "Cancelar"
  porque o botão está mais proeminente que "Submit").
- **Mistake errors:** mental model do usuário não bate com o design (ex: clica num
  heading achando que é link).
- **Validation errors:** form rejeita input por instruções confusas (formato de
  data, máscara de telefone, requisitos de senha).

### Fórmulas

Há duas leituras complementares:

```
Occurrence Rate = (Usuários que cometeram ≥1 erro / Total de usuários) × 100
Mean Error Rate = Total de erros / Total de tentativas
```

### Como medir

| Sinal                                    | Ferramenta                              |
|------------------------------------------|-----------------------------------------|
| Rage clicks (clique repetido em algo)    | Hotjar, Microsoft Clarity, FullStory    |
| Dead clicks (clique em algo não-clicável)| Hotjar, Microsoft Clarity               |
| Form abandonment por campo               | Hotjar Forms, Mouseflow, GA4 form events|
| Validation errors em form                | GA4 events `form_error`                 |
| Back-button após click                   | GA4 / heatmap reverso                   |

### Interpretação

Erro alto é um **assassino silencioso de conversão**. O usuário pode até completar
a tarefa, mas se errou três vezes o email ou clicou num link morto duas vezes, a
frustração já minou:

- Brand perception
- Probabilidade de retornar
- Probabilidade de recomendar (vai impactar NPS)

### Como o design influencia

- **Tap targets pequenos** (<44×44px no mobile) → slip errors em massa.
- **Headings sem afford de link** → mistake errors.
- **Validation real-time vs on-submit:** real-time reduz erro acumulado.
- **Mensagens de erro vagas** ("Erro no campo") vs específicas ("Use o formato
  DD/MM/AAAA") → cai validation error rate.
- **Botões secundários competindo com primário** (ex: "Cancelar" e "Salvar" ambos
  sólidos coloridos) → slip error.

---

## 3. Customer Satisfaction (CSAT)

Mede a **felicidade imediata** do usuário após uma interação específica.

### Definição

Pergunta única, escala 1-5 (ou 1-7), aplicada **logo depois** de um momento-chave:

> "How satisfied were you with your experience today?"

### Quando aplicar

- Pós-checkout (não bloqueando o thank-you)
- Pós-launch de feature nova
- Pós-onboarding
- Pós-suporte / chat encerrado

### Fórmula

```
CSAT % = (Respostas 4 ou 5 / Total de respostas) × 100
```

### Interpretação

| CSAT %    | Leitura                                            |
|-----------|----------------------------------------------------|
| 85%+      | Excelente — interação está fluindo                 |
| 70-85%    | Bom, mas há fricção pontual. Investigue o "porquê".|
| <70%      | Sinal vermelho — usuários estão frustrados         |

### Pro-tip do artigo

**SEMPRE inclua um campo opcional "Por quê?"** Um único comentário
"a fonte estava muito pequena no celular" vale mais que cem ratings de 4 estrelas.

### Limitação

CSAT é volátil — captura humor do momento, não loyalty. Para ler intenção de
longo prazo, use NPS.

---

## 4. Net Promoter Score (NPS)

Mede **lealdade de longo prazo**. É a métrica mais usada em report de board.

### Definição

Pergunta única:

> "Numa escala de 0 a 10, qual a probabilidade de você recomendar este site a um
> amigo ou colega?"

### Categorias

| Resposta | Categoria   | O que é                                          |
|----------|-------------|--------------------------------------------------|
| 9-10     | Promoters   | Brand ambassadors. Clientes mais valiosos.       |
| 7-8      | Passives    | Satisfeitos mas não engajados — risco de churn.  |
| 0-6      | Detractors  | Insatisfeitos — risco de bad-mouthing público.   |

### Fórmula

```
NPS = % Promoters − % Detractors
```

(Range possível: -100 a +100. Note que ignora os Passives.)

### Interpretação

| NPS       | Leitura                                            |
|-----------|----------------------------------------------------|
| 50+       | Excelente — categoria de marcas adoradas           |
| 30-50     | Forte — acima da média                             |
| 0-30      | OK — média do mercado                              |
| <0        | Detrator-dominante — problema sério de produto/UX  |

### Como o design influencia NPS

NPS de site é proxy para a experiência geral. Padrões que derrubam NPS:

- Mobile experience ruim → "indicaria, mas não no celular dele"
- Checkout demorado → cliente comprou mas não recomenda
- Tipografia ilegível em telas grandes ou pequenas
- Inconsistência visual entre páginas (parece "amador")

### Caso de uso para diagnóstico

> CSAT de checkout = 89% (alto)
> NPS pós-30-dias = 12 (baixo)
>
> Diagnóstico: a experiência imediata é boa, mas algo na entrega/produto/follow-up
> está minando a lealdade. Investigar pós-venda, não o site.

---

## 5. Sinais Adicionais de Usabilidade (bônus)

Não estão no artigo da Dribbble, mas reforçam o diagnóstico:

| Sinal                         | O que indica                            | Onde ver                |
|-------------------------------|------------------------------------------|-------------------------|
| Time on Task                  | Tempo médio para completar tarefa        | Hotjar, GA4 timing      |
| First-Click Test (correto)    | Primeiro clique acerta o caminho?        | UsabilityHub, UserTesting|
| SUS (System Usability Scale)  | Score 0-100 baseado em 10 perguntas      | Survey pós-task         |
| SEQ (Single Ease Question)    | "Quão fácil foi esta tarefa?" 1-7        | Pós-task                |

---

## Triagem rápida — quais métricas pedir primeiro?

Quando o usuário tem dados limitados, **priorize nesta ordem:**

1. **TSR** — sem isso, nada faz sentido. Se ninguém termina, performance/SEO/conv.
   também vão estar ruins.
2. **CSAT pós-conversão** — barato de coletar (1 pergunta) e expõe friction
   imediata.
3. **UER via heatmap** — Hotjar/Clarity é gratuito e mostra rage clicks na hora.
4. **NPS** — só faz sentido com base de usuários ≥100 e com 60+ dias de uso.

---

## Erros comuns de leitura

- **"TSR de 100% = sucesso"** — Não. Provavelmente a tarefa é trivial. Defina
  tarefas que reflitam intent real.
- **"CSAT alto = produto bom"** — CSAT mede o momento. Use NPS para loyalty.
- **"NPS baixo = design ruim"** — NPS pega TUDO (produto, suporte, entrega). Não
  atribua ao design sem cruzar com CSAT do site.
- **Confiar em N pequeno** — Survey com <30 respostas não é estatística, é
  anedota. Reportar com a ressalva.
