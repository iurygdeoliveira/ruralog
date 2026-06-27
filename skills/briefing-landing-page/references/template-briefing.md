# Template: Briefing Final Consolidado

Este arquivo define a **estrutura do artefato final** que a skill produz na Fase 6 (CONSOLIDAR). Todo briefing gerado deve seguir este template. O documento resultante é autocontido — designer e copywriter executam a partir dele sem precisar refazer entrevistas.

## Regras de preenchimento

- **Todo campo vazio ou incerto** deve ser marcado como `🚧 PENDENTE — [descrição do que falta]` em vez de ser omitido. Isso força o cliente a fechar lacunas antes da execução.
- **Toda decisão estrutural** deve ser acompanhada do **"porque"** — a evidência do VoC/JTBD que a sustenta.
- **Decisões contrárias à recomendação** (se o cliente insistiu contra) devem ser registradas como `⚠️ Decisão do cliente contra recomendação técnica. Recomendação original: [...]. Risco assumido: [...]`.

---

## Template a copiar

```markdown
# Briefing de Landing Page — [Nome do Projeto/Cliente]

**Data:** [DD/MM/AAAA]
**Versão:** 1.0
**Conduzido por:** [Nome]
**Cliente:** [Nome da empresa / responsável]

---

## 1. Resumo Executivo

**Objetivo único da página:** [ex.: Captar leads qualificados para demonstração do produto X junto a gestores de RH de empresas com 100+ funcionários.]

**Ação única desejada:** [ex.: Preencher formulário de agendamento de demo.]

**Métrica primária de sucesso:** [ex.: 120 MQLs em 30 dias a partir da publicação, com custo por lead ≤ R$ 85.]

**Métrica secundária:** [ex.: Taxa de conversão da LP ≥ 8%.]

**Densidade da LP:** [compacta (default) | expandida — critérios: ...]

**Fonte de tráfego principal:** [ex.: Google Ads — campanhas de palavra-chave de fundo de funil.]

**Data de go-live planejada:** [DD/MM/AAAA]

---

## 2. Contexto de Negócio

**Oferta detalhada:** [Descrição do produto/serviço oferecido nesta página específica.]

**Diferencial competitivo central:** [Aquilo que, segundo o VoC, efetivamente distingue esta oferta das alternativas.]

**Concorrentes diretos monitorados:**
- [Concorrente 1]
- [Concorrente 2]
- [Concorrente 3]

**Elementos de urgência real:** [ex.: Turma limitada a 200 inscrições; promoção válida até DD/MM; estoque de 47 unidades.]
> Se não houver urgência real, registre: "Nenhum elemento de escassez autêntico. Sem recurso artificial."

**Stakeholders que precisam aprovar o go-live:**
- [Nome, cargo]
- [Nome, cargo]

---

## 3. Perfil do Cliente Ideal (Psicográfico)

### Descrição narrativa (1 parágrafo)

[Descrição em prosa do cliente ideal em termos psicográficos — não demográficos. Inclua: o momento da vida/trabalho em que está, as pressões que enfrenta, o que está tentando alcançar, o que teme. Baseado nas entrevistas VoC.]

### Declaração Jobs to Be Done

> **Quando** [circunstância específica em que o cliente se encontra],
> **eu quero** [motivação/job funcional],
> **para que eu possa** [resultado/outcome desejado — funcional + social + emocional],
> **sem ter que** [atrito ou medo a ser evitado].

### As 4 Forças da Decisão

| Força | Descoberto no VoC | Decisão na LP |
|---|---|---|
| **Push** (dor do status quo) | 1. [dor na linguagem do cliente] <br> 2. [dor] <br> 3. [dor] | [Bloco/copy que amplifica] |
| **Pull** (atração do futuro) | 1. [ganho na linguagem do cliente] <br> 2. [ganho] <br> 3. [ganho] | [Bloco/copy que amplifica] |
| **Ansiedade** (medos da nova solução) | 1. [medo] <br> 2. [medo] <br> 3. [medo] | [Depoimento/FAQ/garantia que neutraliza cada um] |
| **Inércia** (apego ao hábito) | 1. [fonte de inércia] <br> 2. [fonte de inércia] | [Bloco/microcopy que reduz] |

### Linguagem literal do cliente (citações VoC para uso em copy)

- "[frase literal retirada de entrevista/review]"
- "[frase literal]"
- "[frase literal]"
- "[frase literal]"
- "[frase literal]"

---

## 4. Estrutura da Página (Wireframe Textual)

> **Decisões arquiteturais inegociáveis já aplicadas:**
> - Sem barra de navegação institucional.
> - Único CTA primário repetido visualmente 2–3x.
> - Message Match: headline espelha as palavras-chave da campanha de tráfego.

### Bloco 1 — Hero (acima da dobra)

**Headline principal (variação A):**
> [Headline na fórmula escolhida]

**Headline principal (variação B, para A/B test):**
> [Headline alternativa]

**Headline principal (variação C):**
> [Headline alternativa]

**Subheadline:**
> [Subheadline que complementa e mata primeira objeção]

**Hero Shot:**
- **Tipo:** [foto real / screenshot / vídeo 30s / animação]
- **Descrição:** [o que deve aparecer]
- **Se pessoas:** olhar direcional para [headline / CTA]
- **Proibições explícitas:** sem stock genérico, sem mockups aspiracionais não representativos do produto real.

**CTA primário (acima da dobra):**
- **Copy:** "[verbo de posse + resultado]"
- **Microcopy abaixo do botão:**
  - [item 1 — ex.: "Sem cartão de crédito"]
  - [item 2 — ex.: "Cancelamento em 1 clique"]
  - [item 3 — ex.: "Seus dados são criptografados"]

### Bloco 2 — Bullets de Benefício

Ordem importa. Cada bullet ataca uma dor VoC específica:

1. **[Verbo de transformação] + [resultado tangível]**
   _Dor VoC endereçada: [qual dor/ansiedade]_

2. **[Verbo] + [resultado]**
   _Dor VoC endereçada: [qual]_

3. **[Verbo] + [resultado]**
   _Dor VoC endereçada: [qual]_

4. **[Verbo] + [resultado]**
   _Dor VoC endereçada: [qual]_

5. **[Verbo] + [resultado]**
   _Dor VoC endereçada: [qual]_

### Bloco 3 — Prova Social (Estratégica)

> **Princípio:** depoimentos selecionados atacam as objeções específicas do público-alvo, não são elogios aleatórios.

**Depoimento 1** (neutraliza objeção "[qual?]"):
- Pessoa: [nome, cargo, empresa]
- Foto: [sim/não — se sim, descrição]
- Citação: "[texto do depoimento real]"

**Depoimento 2** (neutraliza objeção "[qual?]"):
- [mesma estrutura]

**Depoimento 3** (neutraliza objeção "[qual?]"):
- [mesma estrutura]

**Logos de clientes corporativos:** [lista]

**Números concretos de prova social:** [ex.: "+12.000 MEIs usam", "4,9/5 em 340 avaliações no Google"]

**Menções na mídia / certificações:** [lista com fontes]

### Bloco 4 — Demonstração / Como Funciona (se aplicável)

[Se o produto exige demonstração: vídeo de 60–90s; ou 3 passos visuais; ou screenshot em sequência.]

### Bloco 5 — FAQ Estratégica

> **Princípio:** só entram perguntas cujas respostas quebram objeções. Máximo 7 itens.

1. **[Pergunta na linguagem do cliente]** — [Resposta curta e específica. Mini-CTA no final.]
2. **[Pergunta]** — [Resposta.]
3. **[Pergunta]** — [Resposta.]
4. **[Pergunta]** — [Resposta.]
5. **[Pergunta]** — [Resposta.]

### Bloco 6 — CTA Final + Recap

**Recap da oferta (3 bullets):**
- [bullet 1 — síntese do benefício principal]
- [bullet 2 — síntese da prova social]
- [bullet 3 — síntese da redução de risco]

**Loss Aversion reforçada:**
> "[texto que nomeia o custo de continuar sem a solução]"

**CTA final:**
- Mesmo copy do CTA primário (consistência intencional).

### Bloco 7 — Formulário

**Dados coletados:**
- [campo 1 — motivo pelo qual é necessário]
- [campo 2 — motivo]
- [campo 3 — motivo]
- [campo 4 — motivo]

**Estratégia:**
- [ ] Formulário único (se ≤4 campos)
- [ ] **Breadcrumb (multi-etapa)** — se >4 campos. Sequência: [detalhar telas]

**Ordem das perguntas:** baixa ansiedade → alta ansiedade. Dados sensíveis (telefone, e-mail corporativo, empresa) sempre na etapa final.

**Barra de progresso:** [sim/não — se multi-etapa, sim obrigatoriamente]

**Validação:** inline (antes do submit).

**Copy do botão de envio:** "[verbo de posse + resultado]"

**Microcopy de segurança:**
- [item]
- [item]
- [selos visuais — LGPD, SSL, etc.]

---

## 5. Framework de Copywriting Adotado

**Framework escolhido:** [AIDA / PAS / SPIN / Challenger]

**Justificativa:**
[Por quê este framework dado o grau de consciência do público, o ticket da oferta, e o formato da conversão.]

**Mapeamento framework → blocos:** [breve tabela relacionando cada fase do framework aos blocos da LP.]

---

## 6. Aplicação de Economia Comportamental

| Viés | Onde aplicado na LP | Execução específica |
|---|---|---|
| Aversão à Perda | [bloco(s)] | [copy/elemento específico] |
| Nudging/Default | [bloco(s)] | [copy/elemento específico] |
| Ancoragem | [bloco(s)] | [copy/elemento específico] |
| Peak-End Rule | [TYP] | [resumo da TYP] |
| Efeito Zeigarnik | [formulário, se Breadcrumb] | [detalhamento] |

---

## 7. Página de Agradecimento (Thank You Page)

> **Princípio Peak-End:** o fim da jornada precisa de pico emocional positivo — não mensagem genérica.

**Elementos:**
1. **Saudação personalizada:** "[copy]"
2. **Próximo passo claro:** "[o que vai acontecer e em quanto tempo; se possível, botão para agendar/escolher horário]"
3. **Bônus imediato:** "[download, vídeo, acesso, ou material de valor entregue na hora]"
4. **Reafirmação da decisão:** "[depoimento breve, número, ou selo que valida a escolha]"
5. **Convite complementar (opcional):** [redes sociais, comunidade, outro material]

---

## 8. Testes A/B Recomendados (pós-lançamento)

Priorizar nesta ordem:

1. **Headline** (3 variações já preparadas — ver Bloco 1).
2. **Copy do CTA primário** (2 variações).
3. **Hero Shot** (imagem vs. vídeo vs. screenshot, quando faz sentido).
4. **Prova social** (posição — acima do formulário vs. abaixo).
5. **Formulário** (único vs. Breadcrumb, se aplicável).

**Duração mínima por teste:** 14 dias ou 500 conversões, o que vier depois.
**Significância estatística alvo:** 95%.

---

## 9. Decisões Registradas Contra Recomendação Técnica

> Esta seção existe para proteger o condutor do briefing e o cliente. Registra decisões do cliente que contrariam a recomendação, deixando explícito o risco assumido.

- [ ] Nenhuma — cliente aceitou todas as recomendações.

⚠️ **Decisão:** [ex.: "Cliente insistiu em manter barra de navegação institucional no topo."]
- **Recomendação original:** [ex.: "Omitir navegação para preservar Taxa de Atenção 1:1."]
- **Risco assumido:** [ex.: "Potencial redução de 15–30% na conversão comparado ao padrão."]
- **Data da decisão:** [DD/MM/AAAA]

---

## 10. Checklist de Validação Final

Antes de enviar este briefing para execução:

- [ ] Teste dos 5 Segundos mental aplicado ao Bloco 1 (Hero) e aprovado.
- [ ] Cada bullet de benefício mapeado a uma dor VoC específica.
- [ ] Cada depoimento selecionado neutraliza uma objeção específica.
- [ ] Message Match validado: headline contém as palavras-chave da campanha.
- [ ] Nenhum menu de navegação institucional presente.
- [ ] Único CTA primário (pode repetir, mas é sempre o mesmo copy).
- [ ] Microcopy de segurança presente junto ao botão do formulário.
- [ ] Página de Agradecimento desenhada, não genérica.
- [ ] Declaração JTBD preenchida e coerente com a headline.
- [ ] Nenhum campo marcado como 🚧 PENDENTE sem justificativa.

---

**Briefing aprovado para execução por:** [Nome, cargo, data]
```

---

## Quando o briefing está "pronto"

Um briefing só é considerado pronto quando:

1. Nenhum campo está marcado como `🚧 PENDENTE` sem justificativa de adiamento.
2. Pelo menos **5 citações literais** do cliente aparecem na seção 3 (prova de que houve VoC real, não imaginado).
3. A **Declaração JTBD** está completa e consistente com a headline principal.
4. Cada bullet do Bloco 2 tem **dor VoC correspondente explícita**.
5. Cada depoimento do Bloco 3 tem **objeção correspondente explícita**.
6. O Teste dos 5 Segundos foi aplicado mentalmente e aprovado.

Se qualquer um desses seis critérios falhar, o briefing ainda não está pronto — avise o usuário o que falta e conduza a pergunta que resolve.

---

## Anexo: Spec Visual (DESIGN.md)

Quando a Fase 6 incluir geração de spec visual, produza um **segundo arquivo** `DESIGN.md` separado deste briefing — não embuta as 9 seções aqui dentro.

- **Briefing (`briefing.md`):** negócio, VoC, estrutura, copy — este template.
- **Spec visual (`DESIGN.md`):** paleta, tipografia, componentes, layout — template em `references/template-design-md.md`.

O briefing referencia decisões visuais de alto nível (hero shot, CTA, exclusões). O `DESIGN.md` traduz em tokens executáveis para implementação HTML/CSS.

