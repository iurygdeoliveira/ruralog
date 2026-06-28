# Brief Template — Project Brief Orientado a Performance

> Use este template quando operar no modo BRIEF. O brief resultante transforma os 10 pilares
> em requisitos **mensuráveis e não-negociáveis** para a agência contratada.
> Linguagem imperativa ("deve", "precisa"). Nunca sugestiva.

---

## Template: BRIEF.md

```markdown
# Project Brief — {Nome do Projeto}

> Este brief é um documento de requisitos. Os 10 pilares de design orientado a conversão
> listados neste documento são requisitos obrigatórios, não sugestões estéticas.
> A entrega será avaliada contra as Micro-Rules definidas em cada pilar.

## 1. Contexto de Negócio

### 1.1 O Negócio
**O que fazemos:** {uma frase sem jargão}
**Para quem fazemos:** {persona específica, não "todo mundo"}
**Por que importamos:** {proposta de valor em uma frase}

### 1.2 Objetivo de Conversão
**Objetivo PRIMÁRIO (um só):** {compra | lead qualificado | cadastro | agendamento | ...}
**Métrica de sucesso:** {ex: 5% de conversion rate em landing page, 2% em homepage}
**Objetivo secundário (se houver):** {deve ficar ghostificado, não competir com o primário}

### 1.3 Escopo
- **Páginas incluídas:** {lista}
- **Páginas excluídas:** {explícito para evitar scope creep}

### 1.4 Assets Disponíveis
- [ ] Logo e identidade de marca
- [ ] Depoimentos com nome, cargo e foto
- [ ] Logos de clientes/parceiros
- [ ] Cases de sucesso com números
- [ ] Fotos reais do produto/equipe/escritório
- [ ] Vídeos
- [ ] Copy base

### 1.5 Restrições de Marca
- **Paleta obrigatória:** {cores + códigos hex}
- **Fontes obrigatórias:** {headings e body}
- **Tom de voz:** {formal | casual | técnico | conversacional}

---

## 2. Requisitos de Conversão (Os 10 Pilares)

### Pilar 1 — Clarity Over Creativity
**Requisito:** A headline principal DEVE dizer exatamente o que o negócio oferece usando
estrutura sujeito-verbo-objeto. Headlines metafóricas, abstratas ou de "marca" estão proibidas
na área acima da dobra.

**Critério de aceitação (Micro-Rule):** Em teste de 5 segundos com 3 estranhos, pelo menos
2 devem conseguir dizer corretamente o que o site oferece após o tempo esgotado.

---

### Pilar 2 — Strong Visual Hierarchy
**Requisito:** O desenho deve estabelecer hierarquia clara: H1 (maior e mais escuro) → subheadline
(menor, peso leve) → CTA (cor contrastante). Imagens de pessoas devem ter gaze cue direcionado
para headline ou CTA.

**Critério de aceitação:** Ao aplicar blur no design, o elemento mais proeminente deve ser o
hero + CTA. Sem hierarquia ambígua.

---

### Pilar 3 — Single Primary Goal per Page
**Requisito:** Cada página da conversão deve ter **um único** CTA primário. Elementos clicáveis
que não levam ao objetivo de conversão devem ser no máximo **5** (excluindo footer). Sidebars
proibidas em páginas de conversão. Landing pages não devem ter navegação principal.

**Critério de aceitação:** Auditoria de contagem de links clicáveis deve retornar ≤5 elementos
não-CTA fora do footer.

---

### Pilar 4 — Obvious Calls to Action
**Requisito:**
- CTA primário OBRIGATORIAMENTE acima da dobra
- Copy outcome-oriented (completa "Eu quero…"), não genérica ("Enviar", "Clique aqui")
- Cor de contraste com o fundo (não pode ser a cor primária da marca se já usada em outros lugares)
- Altura mínima mobile: 44-48 pixels
- CTAs secundários devem ser ghost buttons

**Critério de aceitação:** No teste do "olho semi-cerrado", o CTA deve ser o blob de cor mais
proeminente visível.

---

### Pilar 5 — Low Cognitive Load
**Requisito:**
- Forms com número mínimo de campos necessários (cada campo precisa ser justificado)
- Smart defaults em campos automatizáveis (CEP → cidade)
- Processos longos DEVEM ser quebrados em multi-step
- Navegação principal removida de landing pages de oferta

**Critério de aceitação:** Para cada elemento da página, a pergunta "se eu remover, o usuário
ainda consegue converter?" deve retornar NÃO.

---

### Pilar 6 — Trust Before Persuasion
**Requisito:** Trust signals devem aparecer no MESMO campo visual do CTA primário.
Depoimentos genéricos estão proibidos — devem conter nome, cargo, foto real, e resultado
específico. Pricing transparente obrigatório (se aplicável). Endereço e telefone reais no footer.

**Critério de aceitação:** Ao fotografar a tela contendo o CTA, pelo menos um trust signal
deve estar visível sem scroll.

---

### Pilar 7 — Mobile-First Design
**Requisito:**
- Design iniciado pelo mobile e só então adaptado para desktop (não o contrário)
- Tap targets mínimo 44×44px
- Click-to-call em números de telefone
- Keyboard correto por tipo de campo (numérico para telefone, email para email)
- Zero informação crítica dependente de hover

**Critério de aceitação:** Todos os elementos interativos críticos devem estar no centro ou
terço inferior da tela mobile (zona do polegar).

---

### Pilar 8 — Speed and Performance
**Requisito:**
- Visualmente usável em ≤2 segundos
- Imagens em WebP (não PNG/JPEG)
- CSS crítico inline para renderização imediata do topo
- Scripts de terceiros auditados e justificados
- LCP (Largest Contentful Paint) ≤2.5s

**Critério de aceitação:** PageSpeed Insights score ≥90 em mobile.

---

### Pilar 9 — Consistency
**Requisito:**
- Exatamente 1 fonte para headings, 1 para body
- Exatamente 1 cor para primary actions
- Sistema de design documentado
- Hover e active states consistentes em todos os botões
- Navegação na mesma posição em todas as páginas
- Ads → landing page com correspondência visual exata (headline, cor, imagem)

**Critério de aceitação:** Auditoria tipográfica e de cor deve retornar ≤3 famílias de fonte
e ≤5 cores primárias em todo o site.

---

### Pilar 10 — Feedback and Reassurance
**Requisito:**
- Todo elemento interativo muda de estado em ≤100ms após clique
- Forms têm loading state visível durante submissão
- Mensagens de erro humanizadas com exemplo ("Por favor informe um email válido, ex: nome@exemplo.com")
- Página de sucesso dedicada após conversão (não só limpar o form)
- Progress bar em processos multi-step

**Critério de aceitação:** Nenhuma ação do usuário deve ficar sem feedback visual por mais
de 100ms.

---

## 3. Deliverables Esperados

- [ ] Design system documentado (cores, fontes, componentes, estados)
- [ ] Mockups mobile-first (mobile → tablet → desktop)
- [ ] Protótipo interativo demonstrando feedback states
- [ ] Wireframes de todas as páginas do escopo
- [ ] Justificativa escrita de como cada pilar foi atendido
- [ ] Resultados dos testes das Micro-Rules aplicadas aos mockups

## 4. Fora de Escopo

- {Item 1 que a agência não deve entregar}
- {Item 2}

## 5. Timeline e Milestones

| Milestone                              | Data        |
|----------------------------------------|-------------|
| Aprovação do brief                     | {data}      |
| Entrega de wireframes                  | {data}      |
| Aprovação de wireframes                | {data}      |
| Entrega de mockups                     | {data}      |
| Aprovação de mockups                   | {data}      |
| Entrega final com testes das Micro-Rules | {data}    |

## 6. Processo de Aprovação

Cada entrega será avaliada contra os critérios de aceitação dos 10 pilares. Entregas que não
passarem nas Micro-Rules devem ser revisadas antes da aprovação. A agência deve documentar
como cada pilar foi endereçado na apresentação da entrega.
```
