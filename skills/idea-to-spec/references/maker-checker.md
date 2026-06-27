# Maker-Checker — Auditoria Antes da Entrega

Referência para a **Etapa 4** da skill `idea-to-spec`.

---

## Princípio

Modelos atuando solitariamente fragmentam contexto e alucinam. Antes de entregar qualquer documento, **assuma um segundo papel** (Checker / Avaliador Sênior) e ataque o próprio artefato gerado pelo Maker. Itere até o conjunto sobreviver.

> Estudos com sistemas multi-agente mostram melhoria qualitativa superior a 70% quando há ciclo Maker-Checker antes da entrega.

---

## Checklist Maker-Checker (executar 100%)

### A. Rastreabilidade

- [ ] Cada **dor (D)** aparece na **seção 5** do `projeto.md` (*Como resolver as dores mapeadas*) com ao menos uma linha?
- [ ] Cada linha da **seção 5** referencia explicitamente **pelo menos um D-xx**?
- [ ] Cada **dor (D)** do manifesto gerou ao menos um **RF**?
- [ ] Cada **RF** está amarrado a uma dor? (RF órfão = remover ou justificar)
- [ ] Todo **RF Must** do **MVP acordado** aparece na **seção 14** do `projeto.md` (tabela ou parágrafo explícito de ordem), **ou** está coberto sem ambiguidade pela **Matriz (12)** com UC indicados — sem RF Must órfão?
- [ ] Cada **UC** citado na **seção 14** (ou na Matriz como UC principal da entrega) existe em disco e está em `casos-de-uso/README.md`?
- [ ] Cada **UC** em `casos-de-uso/` tem ao menos 1 RF e 1 RN de negócio associados (quando aplicável)?
- [ ] O arquivo **`casos-de-uso/README.md`** lista todos os UCs com links corretos para `UC-xx-*.md`?
- [ ] Cada **`casos-de-uso/UC-xx-*.md`** referenciado no índice existe no disco?
- [ ] Métricas (KRs) aparecem como critérios de aceite mensuráveis onde couber?

### B. Qualidade dos Casos de Uso

- [ ] Pré-condições explícitas?
- [ ] Pós-condição de sucesso explícita?
- [ ] Fluxo principal numerado e linear?
- [ ] **Fluxos alternativos** descritos? (caminhos válidos diferentes do principal)
- [ ] **Fluxos de exceção** descritos? (erros, falhas de integração, timeouts, validações) — **OBRIGATÓRIO**
- [ ] Para cada exceção: comportamento de erro + log + alerta + recuperação descritos?

### C. Requisitos Não Funcionais

- [ ] Desempenho (latência, throughput) com **número específico**?
- [ ] Segurança: autenticação, autorização, criptografia em trânsito e repouso, rate limiting?
- [ ] **LGPD**: base legal por tratamento, consentimento, direitos do titular, anonimização, retenção?
- [ ] Disponibilidade (SLA, RPO, RTO)?
- [ ] Acessibilidade (WCAG)?
- [ ] Observabilidade (logs estruturados, métricas, tracing)?
- [ ] Manutenibilidade (cobertura mínima de testes, documentação de API)?

### D. Escopo do MVP no `projeto.md` (seção 14)

- [ ] A **seção 14** existe e é **sucinta** (tabela **Ordem | RF | UC(s) | Dependências/notas** ou **um parágrafo** inequívoco)?
- [ ] A ordem proposta **fecha** o lançamento do MVP acordado (todos os RF Must cobertos; sem “fatia paralela” só na cabeça)?
- [ ] Capacidades **Must** indispensáveis ao MVP estão ordenadas com dependências claras; excesso declarado Must para pós-MVP foi revisado?
- [ ] **Não** há substituição indevida de `casos-de-uso/` por uma especificação longa só na seção 14?

### E. Coerência e Ambiguidade

- [ ] Todos os termos polissêmicos definidos no glossário do `projeto.md`?
- [ ] Há conflitos entre RFs? (ex: RF-04 exige A, RF-09 exige não-A)
- [ ] Há suposição não declarada relevante? (registrar na **seção 6** como risco ou na **seção 11** como restrição — não usar tabela de premissas no `projeto.md`)
- [ ] Restrições regulatórias e legados explícitos?
- [ ] Existe "solução flutuante" (linha na seção 5 ou RF **sem** dor associada e sem rastro desde D-xx)? → remover ou justificar

### F. Riscos e decisões pendentes

- [ ] Cada um dos 4 riscos (Valor, Usabilidade, Técnico, Negócio) foi avaliado na **seção 6**?
- [ ] Riscos altos não testados estão registrados com **experimento sugerido**?
- [ ] Toda decisão **one-way door** (irreversível ou cara de reverter — banco escolhido, integração obrigatória, modelo de dados central, compliance) tem evidência ou experimento sugerido antes de ser fixada, ou está explícita na **seção 11 (Restrições)**?
- [ ] **Não** existe seção “Decisões em Aberto” no `projeto.md`; pendências após 3 iterações vão ao **Log de Auditoria (seção 13)**.

### G. Forma e Padronização

- [ ] IDs estáveis e únicos (D, RF, RNF, UC, RN, KR, R para restrição no `projeto.md`)?
- [ ] Markdown bem formatado (tabelas alinhadas, hierarquia de cabeçalhos)?
- [ ] Glossário no `projeto.md` (apêndice)?
- [ ] Matriz de rastreabilidade Dor → RF → RNF → UC presente no `projeto.md`?
- [ ] Idioma consistente (pt-BR)?

### H. Sustentabilidade (anti-overengineering)

Versão condensada do "10-Questions Test" aplicada ao espaço problema → especificação. Q1, Q2 e Q6 são gatekeepers: se reprovam, o Maker volta à **Etapa 2** para **simplificar RNFs** antes de gravar o pacote.

- [ ] **Q1 — Justificativa explícita.** Cada RNF de alta exigência (SLA ≥ 99,5%, latência p95 < 500ms, MFA obrigatório, criptografia em repouso, observabilidade completa) tem dor mapeada, regulação aplicável ou risco explícito na **seção 6** do `projeto.md` (Riscos) que o justifique? RNF chutado como "padrão de mercado" sem âncora é reprovado.
- [ ] **Q2 — Alternativa mais simples.** Para cada RF Must, foi considerada uma alternativa que entregaria 80% do valor com 20% do esforço (CRUD simples vs. workflow elaborado, tabela de log vs. event sourcing, monolito modular vs. microserviços)? Se não, registrar a alternativa rejeitada em **uma linha** no **Log de Auditoria (seção 13)** — não criar seção separada de decisões.
- [ ] **Q3 — Capacidade do time.** O time declarado na Camada 1.7 tem skills hoje para construir e **manter** o RNF mais exigente proposto? Se exige skill ausente, registrar como risco técnico + experimento (treinamento, contratação, terceirização) ou rebaixar o RNF.
- [ ] **Q4 — Operabilidade local.** O escopo combinado dos **primeiros itens** da **seção 14** (primeira fatia do MVP) **roda** localmente ou em staging sem dependência exótica (cluster Kubernetes, broker, segredos corporativos não reproduzíveis)? Se não, simplificar a fatia ou justificar em restrição/risco.
- [ ] **Q5 — Reversibilidade.** Cada decisão one-way (banco escolhido, integração obrigatória, modelo de dados central, contrato regulatório) está marcada na **seção 11 (Restrições)** do `projeto.md` com `Reversibilidade: one-way`?
- [ ] **Q6 — Proporção à trajetória.** A trajetória de crescimento declarada na Camada 1.7 (estável, 2x ou 10x em 12 meses) justifica a sofisticação proposta nos RNFs e na arquitetura sugerida implicitamente nas **restrições**? "Vai escalar para milhões" sem volume baseline ou métrica de crescimento é reprovado.

---

## Loop de Iteração

```
1. Maker gera/atualiza artefatos (projeto.md, casos-de-uso/)
2. Checker percorre o checklist completo
3. Para cada item ❌:
   a. Maker corrige o artefato específico
   b. Checker re-verifica APENAS o item corrigido + dependências
4. Quando todos os itens estiverem ✅, emita "Audit Pass"
5. Se 3 iterações não fecharem o checklist, escale para o usuário humano
   listando os pontos travados no Log de Auditoria (seção 13 do projeto.md)
```

> **Iteration cap:** máximo 3 ciclos automáticos. Após isso, **pause e devolva ao usuário** os pontos não fecháveis em vez de ficar em loop infinito.

---

## Log de Auditoria (entregar no `projeto.md`, seção 13)

```markdown
## 13. Log de Auditoria (Maker-Checker)

| Iteração | Itens reprovados | Correções aplicadas |
|---|---|---|
| 1 | A.3, B.5, C.2, E.1 | Adicionados fluxos de exceção em UC-02; glossário atualizado |
| 2 | C.4 | Definido SLA 99,5% e RPO/RTO |
| 3 | — | Audit Pass |

### Pontos travados (após 3 iterações — opcional)
- [Descrever apenas o que bloqueou o checklist; resolver com o usuário humano.]
```

---

## Atitudes do Checker (postura crítica)

- **Pressuponha que o Maker foi otimista.** Procure o que foi varrido para baixo do tapete.
- **Imagine o pior usuário.** Que entrada quebraria isso?
- **Imagine o pior dia de produção.** O que acontece com banco fora? Com 10x mais carga?
- **Imagine o auditor regulatório.** O que falta para passar em LGPD/PCI?
- **Imagine o engenheiro júnior em outro fuso.** Há ambiguidade que ele interpretaria diferente?

> Se uma das 5 perspectivas acima encontrar uma falha, **reprove o item** e devolva ao Maker.
