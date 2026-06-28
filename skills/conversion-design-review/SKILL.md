---
name: conversion-design-review
description: |
  Revisa landing pages, homepages e propostas de agência com 10 pilares de conversão
  e checklist anti-slop visual (Pilar 11). Gera auditorias, briefs e scorecards.
triggers:
  - "revisar landing page"
  - "auditar site"
  - "avaliar design"
  - "feedback de homepage"
  - "taxa de conversão"
  - "bounce rate"
  - "meu site não vende"
  - "CTA"
  - "chamada para ação"
  - "hero section"
  - "brief de design"
  - "avaliar proposta de agência"
  - "design review"
  - "UX review"
  - "análise de conversão"
  - "site gerado por IA"
  - "ai slop"
  - "design genérico"
metadata:
  author: iury
  version: 1.1.0
  source: Dribbble — How To Design A Website That Converts (Apr 2026)
---

# Conversion Design Review — 10 Pilares + Anti-Slop Visual

Skill de análise e especificação baseada nos **10 pilares de conversão** + **Pilar 11 (anti-slop visual)** que separam um site que **performa** de um site que apenas **existe** — ou que parece output genérico de IA. Os pilares são requisitos não-negociáveis, não sugestões estéticas.

> **Pilar 11** cobre sinais visuais de template IA (indigo default, gradiente hero, emoji ícone, etc.). Para copy textual genérica, use `humanizer-br` — camadas diferentes.

## Três Modos de Operação

Identifique pelo contexto do usuário qual modo aplicar:

| Modo          | Quando usar                                              | Saída                          |
|---------------|----------------------------------------------------------|--------------------------------|
| **AUDIT**     | Usuário compartilha site/screenshot/URL pedindo análise  | Relatório de auditoria         |
| **BRIEF**     | Usuário vai contratar/começar projeto de site            | Brief estruturado              |
| **EVALUATE**  | Usuário recebeu proposta de agência e quer avaliar       | Scorecard comparativo          |

Se o modo não estiver claro, pergunte: "Você quer que eu **audite** um design existente,
**escreva um brief** para um novo projeto, ou **avalie** uma proposta que você recebeu?"

---

## Os 10 Pilares (Referência Rápida)

Cada pilar tem uma **Micro-Rule** — um teste rápido que revela se o pilar está sendo respeitado.
Para as best practices completas de cada pilar, consulte `references/pillars-detailed.md`.

### 1. Clarity Over Creativity
Ambiguidade mata conversão. O usuário forma opinião sobre o site em 0.05s e decide se fica em ~5s.
Clareza é a forma definitiva de sofisticação no digital.
- **Micro-Rule:** Mostre a homepage a um estranho por 5 segundos, esconda, e peça para dizer exatamente o que você oferece. Se não conseguir, o design é criativo demais.

### 2. Strong Visual Hierarchy
Hierarquia visual é o mapa que você desenha para os olhos do usuário seguirem. Sem ela, a página é um muro de ruído onde todo elemento compete por atenção.
- **Micro-Rule:** Desfoque os olhos olhando o design. Você deve conseguir identificar o elemento mais importante apenas por tamanho e contraste.

### 3. Single Primary Goal per Page
Uma página, uma persona, um problema, um CTA primário. Hick's Law: o tempo de decisão aumenta com o número de opções. Múltiplos caminhos criam decision fatigue.
- **Micro-Rule:** Conte **destinos de conversão diferentes** (URLs ou ações distintas), não repetições do mesmo botão. Se forem mais de 1 destino primário, a página está vazando clientes. Links do footer legal não contam.

### 4. Obvious Calls to Action
O CTA é a ponte entre interesse e ação. 80% do tempo dos usuários é acima da dobra. A copy do botão deve completar "Eu quero…", não "Submit" ou "Click Here".
- **Micro-Rule:** Feche os olhos pela metade. Se o CTA não se destaca como o blob de cor mais proeminente da tela, não está distinto o suficiente. Se houver rótulos contextuais (≤3), cada um deve completar "Eu quero…" do bloco onde aparece.

### 5. Low Cognitive Load
Cada campo extra, cada item de menu redundante, cada banner piscando aumenta a carga mental. O caminho até a conversão deve parecer um escorregador, não uma escalada.
- **Micro-Rule:** Para cada elemento (link, imagem, campo), pergunte: "Se eu remover isso, o usuário ainda consegue converter?" Se sim, delete.
- **Teste de densidade (complementar):** conte **seções visuais distintas** (não parágrafos). LP compacta: ≤10 = 🟢, 11–14 = 🟡 (justificar), ≥15 = 🟡/🔴 — considere cortar antes de otimizar copy. Sales pages muito longas não são modelo de aprovação.

### 6. Trust Before Persuasion
Usuários chegam com mindset de default-to-distrust. Confiança é construída antes da persuasão — social proof, pricing transparente, contato claro — colocados ANTES do pedido de ação.
- **Micro-Rule:** Coloque um depoimento ou barra de "Trusted By" no mesmo campo visual do CTA. Amarre a ação diretamente à reassurance.

### 7. Mobile-First Design
Mobile-first força a priorização do que realmente importa. Se funciona no celular, quase sempre traduz bem para desktop. O inverso raramente é verdade.
- **Micro-Rule:** Coloque os elementos interativos críticos no centro e terço inferior da tela, onde o polegar naturalmente alcança.

### 8. Speed and Performance
Cada milissegundo de delay erode a paciência. De 2s para 5s de load, o bounce rate sobe de 9% para 38%. Sites rápidos não só carregam rápido, parecem rápidos.
- **Micro-Rule:** A página deve estar visualmente usável em 2 segundos. Acima disso, a curva de abandono dispara.

### 9. Consistency
Quando design, linguagem e comportamento permanecem constantes, o usuário para de pensar em "como usar" e foca no que você oferece. Inconsistência dispara alarme subconsciente de que algo está errado.
- **Micro-Rule:** Defina exatamente UMA fonte para headings, UMA para body, UMA cor para primary actions. Use só essas, em todo o site.

### 10. Feedback and Reassurance
Se o usuário clica e nada acontece em 2s, ele clica de novo, refresh, ou desiste. Feedback fecha o loop da intenção — confirma que a ação foi reconhecida.
- **Micro-Rule:** Todo elemento interativo deve mudar de estado (cor, ícone, animação) em até 100ms após o clique.

### 11. Anti-AI-Slop Visual (modos AUDIT e EVALUATE)

Detecta padrões visuais típicos de LP gerada por LLM sem craft humano. Complementa os pilares 1–10; não substitui auditoria de copy.

- **Micro-Rule:** O accent principal é indigo/violet Tailwind default (`#6366f1`, `#8b5cf6`)? Há emoji como ícone de feature? Gradiente roxo→azul no hero? Se ≥2 sim → AI Slop Index elevado.

Leia `references/anti-ai-slop-visual.md` para checklist P0/P1/P2 completo e tabela de saída.

**AI Slop Index:** conte pecados P0 (0–7). Interpretação: 0–1 craftado; 2 atenção; 3+ redesign visual antes de A/B de copy.

---

## Workflow por Modo

### Modo AUDIT — Auditoria de Site Existente

**Pré-requisito:** URL, screenshot, ou descrição detalhada do site a ser analisado.

1. **Coletar contexto:**
   - Qual é o objetivo de conversão principal? (compra, lead, cadastro, contato)
   - Qual é o público-alvo?
   - Qual métrica atual está ruim? (bounce rate, CTR, tempo na página)

2. **Aplicar os 10 pilares em ordem.** Para cada pilar:
   - Aplicar a Micro-Rule
   - Identificar violações específicas com evidência (elemento, localização)
   - Classificar severidade: 🔴 Crítico (bloqueia conversão) | 🟡 Atenção (atrito) | 🟢 OK
   - Propor correção concreta (não "melhorar o CTA" — dizer exatamente o que mudar)

3. **Aplicar Pilar 11 (Anti-AI-Slop Visual).** Leia `references/anti-ai-slop-visual.md`:
   - Percorra os 7 pecados P0 e soft tells P1
   - Preencha tabela com evidência visual
   - Calcule **AI Slop Index** e inclua no resumo executivo
   - Não duplique achados já citados nos Pilares 1, 4, 6 ou 9 — referencie

4. **Ler `references/audit-checklist.md`** para usar o template de relatório.

5. **Priorizar as correções:** AI Slop Index ≥3 trata como 🔴 visual; depois demais 🔴; depois 🟡.

6. **Entregar o relatório** com resumo executivo (🔴/🟡/🟢 + AI Slop Index) seguido da análise pilar-por-pilar.

### Modo BRIEF — Escrever Brief de Projeto

**Pré-requisito:** O usuário precisa ter definido negócio, público, e objetivo de conversão.

1. **Coletar as informações obrigatórias:**
   - O que o negócio faz (uma frase clara, sem jargão)
   - Quem é o público-alvo (uma persona específica)
   - Qual é o objetivo de conversão primário (UM só)
   - Qual é o objetivo secundário (se houver)
   - Trust signals disponíveis (clientes, prêmios, números)
   - Restrições de marca (cores, fontes obrigatórias)

2. **Ler `references/brief-template.md`** para o template completo.

3. **Gerar o brief** transformando os 10 pilares em requisitos mensuráveis que a agência TEM que cumprir. Usar linguagem imperativa ("deve", "precisa") — não sugestiva.

4. **Incluir as Micro-Rules como critérios de aceitação.** A agência vai ser avaliada contra elas.

### Modo EVALUATE — Avaliar Proposta de Agência

**Pré-requisito:** Proposta/mockup/protótipo da agência disponível.

1. **Coletar a proposta** — arquivos, URLs, screenshots, descrição textual.

2. **Aplicar os 10 pilares + Pilar 11 como scorecard:**
   - Pilares 1–10: ✅ Atende | ⚠️ Parcialmente | ❌ Falha
   - Pilar 11: AI Slop Index + tabela P0/P1 (`references/anti-ai-slop-visual.md`)
   - Justificar cada nota com evidência da proposta
   - Listar perguntas a fazer para a agência em itens ⚠️

3. **Gerar o scorecard final** com:
   - Nota global (X/10 pilares atendidos integralmente)
   - **AI Slop Index** (0–7)
   - Pontos fortes da proposta
   - Red flags (qualquer ❌ ou AI Slop Index ≥3)
   - Perguntas para a próxima reunião com a agência

4. **Recomendação final:** aprovar, aprovar com ressalvas, ou rejeitar.

---

## Quando Consultar References

| Situação                                        | Arquivo a ler                    |
|-------------------------------------------------|----------------------------------|
| Precisa de detalhes de best practices de um pilar | `references/pillars-detailed.md` |
| Modo AUDIT — formato do relatório               | `references/audit-checklist.md`  |
| Modo BRIEF — template do brief                  | `references/brief-template.md`   |
| Pilar 11 — anti-slop visual                       | `references/anti-ai-slop-visual.md` |

## Princípios ao Aplicar os Pilares

1. **Seja específico, não genérico.** "Melhorar o CTA" é inútil. "Trocar o texto do botão de 'Enviar' para 'Quero meu diagnóstico grátis' e mudar a cor de azul para laranja" é acionável.

2. **Use evidência visual.** Quando possível, referencie o elemento exato ("o botão no canto superior direito", "a terceira seção abaixo do hero").

3. **Não confunda estética com performance.** Um design pode ser bonito e não converter. A skill avalia performance, não gosto.

4. **Priorize por impacto.** Nem todas as violações têm o mesmo peso. Um CTA invisível é crítico; uma fonte de body 1px menor que o ideal é cosmético.

5. **Respeite o contexto do negócio.** Um site de luxo pode relaxar algumas regras de "obvious CTA" em favor de tom premium — mas o trade-off precisa ser consciente e justificado.

6. **Nunca invente métricas.** Use apenas as métricas citadas na fonte (0.05s para primeira impressão, 5s para engajamento, 2s para abandono começar, etc.) ou peça ao usuário os dados reais.
