---
name: idea-to-spec
description: >
  Conduz a transição de uma ideia vaga de software até a documentação do projeto:
  núcleo `projeto.md` mais `casos-de-uso/` (índice + um arquivo por UC), com escopo
  e ordem sugerida do MVP registrados de forma sucinta no próprio `projeto.md`
  (seção 14 — para priorização na sdd-spec), passando por descoberta contínua,
  validação dos 4 riscos, MOM Test, OST/OKPS e Etapas 1–4 com Maker-Checker.
  Entrevista UMA PERGUNTA POR VEZ com RECOMENDAÇÃO.
  Use SEMPRE que o usuário mencionar: ideia de software, ideia vaga, projeto.md,
  BRD, PRD, SRS, requisitos, escopo, MVP, MoSCoW, OST, OKPS,
  MOM Test, product discovery, estruturar projeto.
license: MIT
metadata:
  author: Iury
  version: 3.0.0
  language: pt-BR
---

# idea-to-spec — Da Ideia Vaga ao pacote de documentação

Esta skill converte uma ideia vaga de software em um **pacote de artefatos** centrado no **`projeto.md`**, com **Visão**, **Como resolver as dores mapeadas** (seção 5 — ponte entre dor e RF), **Riscos**, **Capacidade operacional**, **Requisitos**, **Regras de Negócio** e **Escopo/ordem do MVP** (seção 14 — sucinto). Os **Casos de Uso** detalhados ficam em **`casos-de-uso/`** (índice + um arquivo por UC). O handoff para **sdd-spec** / SDD usa **`projeto.md` + `casos-de-uso/`** (RF, RNF, D, RN, Matriz, seção 14 e paths dos UC). **Não** gera User Story Map no `projeto.md`. O fluxo de valor no núcleo é **dor (seção 4) → abordagem (seção 5) → RF → UC**; cada UC referencia RFs nos arquivos dedicados.

Duas regras inegociáveis:

1. **NUNCA salte para solução antes de validar problema, métrica e risco.**
2. **NUNCA faça mais de uma pergunta por turno.** Cada pergunta DEVE vir acompanhada de uma **recomendação** do agente, justificada com base em padrões de mercado ou na resposta anterior.

## Quando Acionar

- Usuário descreve uma ideia genérica ("quero criar um app de…").
- Usuário pede BRD, PRD, SRS, requisitos, escopo, MVP.
- Usuário tem features em mente mas sem objetivo de negócio nem métrica.
- Usuário precisa estruturar projeto para handoff de engenharia.

## Pacote de entrega e caminhos

**Diretório base:** `./` do projeto do usuário, ou `sdd/` quando a pasta `sdd/` existir (todo caminho abaixo é relativo a essa base).

```text
projeto.md              # inclui seção 14 — Escopo do MVP e ordem sugerida (sucinta)
casos-de-uso/
  README.md             # índice: ID, nome, RFs, link para o .md
  UC-01-{slug}.md       # um arquivo por caso de uso
  UC-02-{slug}.md
```

**Convenção:** slug em minúsculas, hífens, ASCII nos nomes de UC; IDs de UC estáveis (`UC-01` …).

## Princípios de Operação

1. **Uma pergunta por turno.** Nunca empilhe perguntas. Após responder, o usuário deve poder pensar em UMA coisa e responder em poucas frases.
2. **Toda pergunta carrega uma recomendação.** O agente NUNCA pergunta sem opinar. Apresenta uma sugestão fundamentada (com justificativa breve) e oferece ao usuário aceitar, ajustar ou rejeitar.
3. **Problema antes de solução.** Recuse listar entregáveis de produto detalhados até existir Objetivo + Métrica + Dor validados.
4. **Hierarquia OST/OKPS rígida.** Objetivo → Resultado-chave → Problemas → Soluções (nesta ordem, sem pular).
5. **Comportamento, não opinião.** Use perguntas no passado (MOM Test) em vez de hipotéticas.
6. **Cadeia de raciocínio fracionada.** **4 etapas** sequenciais com gate de aprovação entre cada etapa.
7. **Auto-auditoria.** Antes de gravar os artefatos finais, rode Maker-Checker (`references/maker-checker.md`).
8. **Memória viva.** Mantenha um **Manifesto interno** atualizado a cada resposta (Objetivo, Métricas, Dores, resolução por dor para a seção 5, Riscos, RFs, RNFs, lista de UCs com paths, **seção 14 — ordem sugerida do MVP** ligando RF ↔ UC). Base do pacote final.
9. **Idioma:** Português do Brasil.

---

## Protocolo de Pergunta Única (PPU)

Durante a **Etapa 1** (descoberta), **toda** interação com o usuário segue **rigorosamente** o formato abaixo. Nas **Etapas 2 e 3**, use o PPU apenas nas **decisões críticas** (alinhado à estratégia da Etapa 2 e ao detalhamento dos UC).

```markdown
**Etapa atual:** [Etapa X — Camada Y]
**Progresso:** [n/N perguntas desta camada]

**Pergunta:** [uma pergunta específica, focada em UM tópico]

**Recomendação do agente:** [sugestão concreta + 1–2 frases de justificativa
baseada em padrão de mercado, no que já foi dito ou em risco identificado]

**Como responder:**
- ✅ "Aceito" → seguimos com a recomendação acima
- 🔄 "Ajustar: [seu ajuste]" → adapto a recomendação
- ❌ "Não, prefiro: [sua resposta]" → registro a sua versão
- ❓ "Por que essa recomendação?" → explico em mais detalhe
```

**Regras estritas do PPU:**

- ❌ Nunca faça duas perguntas no mesmo turno (mesmo que pareçam pequenas).
- ❌ Nunca faça uma pergunta sem recomendação. Se não tiver opinião, formule uma proposta razoável padrão de indústria e justifique.
- ❌ Nunca prossiga para a próxima pergunta sem registrar a resposta no Manifesto interno.
- ✅ Se a resposta gerar ambiguidade, faça **uma** pergunta de clarificação (ainda com recomendação) antes de avançar.
- ✅ Se uma resposta puder ser **inferida** com alta confiança a partir do que já foi dito, pule a pergunta e apenas confirme: "Inferi X com base em Y. Aceita?"

## Workflow Operacional

### Etapa 1 — Elicitação Iterativa (Descoberta)

Objetivo: extrair Objetivo, Métrica, Dor, Persona e Riscos reais. Saída: Manifesto consolidado.

Conduza **uma pergunta por turno** seguindo o **PPU**, na ordem abaixo. Não pule camadas.

**Camada 1.1 — Objetivo de Negócio** (1 pergunta)
- Foco: impacto financeiro, operacional ou estratégico em 6–12 meses.
- Recomendação típica: o agente escolhe entre 2–3 objetivos plausíveis baseados na ideia inicial e propõe o mais provável.
- **No `projeto.md`:** este conteúdo entra em **1. Visão e Contexto de Negócio** (bullet *Objetivo de negócio*), pois a seção 2 trata apenas de **Métricas**.

**Camada 1.2 — Métrica (Resultado-Chave)** (1 pergunta)
- Foco: quantificação verificável.
- Recomendação típica: baseline estimado + meta percentual + prazo, com justificativa de benchmark.

**Camada 1.3 — Persona principal** (1 pergunta)
- Foco: quem sente a dor.
- Recomendação típica: persona com nome, contexto, comportamento atual.

**Camada 1.4 — Dor (MOM Test)** (1–3 perguntas, uma por vez)
- Perguntas no passado; proibido "Você usaria…?", "Pagaria por…?".
- Recomendação típica: narrativa típica para o usuário corrigir/confirmar.

**Camada 1.5 — Validação dos 4 riscos** (1 pergunta por risco)
- Valor, Usabilidade, Técnico, Negócio — severidade + experimento sugerido para altos.

**Camada 1.6 — Como resolver cada dor** (1 pergunta)
- Apenas após 1.1–1.5 completas.
- Preenche o Manifesto com o que virará a **seção 5** do `projeto.md` (*Como resolver as dores mapeadas*).
- Para **cada D-xx**: **abordagem** (produto/processos), **entregáveis de alto nível** (ainda não são RFs) e **MoSCoW**, sempre citando o ID da dor. Linha sem dor = descartada.

**Camada 1.7 — Capacidade do Time e da Operação** (4 perguntas, uma por vez)

Captura contexto operacional para **calibrar** RNF na Etapa 2 e sustentabilidade na Etapa 4 (Maker-Checker).

- 1.7.1 Time (solo / 2–4 / 5–10 / 10+)
- 1.7.2 Operação (best-effort / HC / 24h on-call)
- 1.7.3 Volume 1º ano (≤500 / 500–10k / >10k req/dia)
- 1.7.4 Trajetória 12 meses (estável / 2x / 10x)

**Regra anti-overengineering:** time pequeno + volume baixo + crescimento estável → rejeitar CQRS, microserviços etc. nas Camadas 1.6 ou na Etapa 2. Ver `references/discovery-toolkit.md` (Seção 6).

**Se o usuário travar**, use o toolkit: Reversão, 6 Chapéus, Ishikawa, Wonder→Explore→Make→Impact — **uma** intervenção por turno.

**Saída da Etapa 1:** Manifesto com resolução por dor (seção 5), riscos, capacidade operacional.

**[GATE 1]** Manifesto consolidado → Aprovar / Ajustar / Voltar (camada).

---

### Etapa 2 — Análise Estrutural

Objetivo: derivar **RF** e **RNF** a partir do Manifesto.

**Estratégia:** o agente gera RFs/RNFs a partir da **seção 5** (*Como resolver as dores*) e das **dores**; valida com PPU nas **decisões críticas** (não pergunta RF por RF).

**Calibração:** todo RNF ancorado na **Camada 1.7** / **seção 7** do `projeto.md`; sem âncora = overengineering (reprovado no Maker-Checker H).

**Saída da Etapa 2:** RFs + RNFs + **restrições** candidatas à **seção 11** (sem premissas formais; suposições operacionais relevantes entram como risco na seção 6 ou como restrição explícita).

**[GATE 2]** Tabela RF/RNF → aprovação.

---

### Etapa 3 — Especificação dos Casos de Uso

Objetivo: UCs alinhados aos RFs; cada UC em **arquivo próprio** (`references/document-templates.md` — estrutura de UC).

**Saída da Etapa 3:** `casos-de-uso/README.md` (índice com links) + `casos-de-uso/UC-xx-{slug}.md` por UC, com exceções obrigatórias; glossário alimenta o do `projeto.md`.

**Antes do Gate 3 (recomendado):** no **`projeto.md`**, preencher a **seção 14** (*Escopo do MVP e ordem sugerida*) com tabela curta **Ordem | RF | UC(s) | Dependências/notas** **ou**, se o MVP for trivial, um **parágrafo único** que liste ordem e vínculos RF↔UC sem ambiguidade.

**[GATE 3]** UCs + rascunho da seção 14 → aprovação.

---

### Etapa 4 — Auditoria Maker-Checker e geração dos artefatos

Checklist (resumo — detalhe em `references/maker-checker.md`):

- [ ] Cada **dor** tem ao menos uma linha na **seção 5** do `projeto.md`?
- [ ] Cada linha da **seção 5** cita **D-xx**?
- [ ] Cada **RF** do MVP está amarrado a dor e coerente com a seção 5?
- [ ] **Seção 14** cobre **todos** os **RF Must** do MVP (tabela ou parágrafo explícito), sem RF Must órfão?
- [ ] Cada **UC** citado na seção 14 existe em `casos-de-uso/` e está no índice?
- [ ] `casos-de-uso/README.md` lista todos os UCs com paths corretos?
- [ ] Cada `casos-de-uso/UC-xx-*.md` existe, com exceções obrigatórias?
- [ ] KRs refletidos nos critérios de aceite; RNFs com âncora na **seção 7**?
- [ ] Sem abordagem órfã na seção 5 nem RF órfão; riscos endereçados
- [ ] Seção H sustentabilidade (Maker-Checker)

Itere até **3 ciclos**; pontos não fecháveis após 3 ciclos: registrados no **Log de Auditoria (seção 13)** do `projeto.md` — **sem** seção “Decisões em Aberto” separada.

**Geração:** gravar o pacote completo na base (`./` ou `sdd/`).

**[GATE FINAL]** Confirmar revisão / ajuste / encerramento.

---

## Estrutura do `projeto.md`

Ordem obrigatória: após **Dores (seção 4)** vem **Como resolver (seção 5)**; **Riscos (seção 6)** e **Capacidade (seção 7)** ficam **abaixo** da seção 5. RNFs usam **Âncora na seção 7**.

```markdown
# Projeto: [Nome]

> Documento núcleo gerado pela skill idea-to-spec.
> Versão: 1.0 | Data: [AAAA-MM-DD] | Autor: [usuário]

## Sumário Executivo
[1 parágrafo: problema, solução proposta, impacto esperado]

## 1. Visão e Contexto de Negócio
- **Objetivo de negócio (OST):** [resultado da Camada 1.1 — impacto mensurável em 6–12 meses]
- Problema central
- Razão de agora (urgência)
- Stakeholders

## 2. Métricas
| ID | Métrica | Baseline | Meta | Prazo |

## 3. Personas
| ID | Persona | Contexto | Dor principal | Comportamento atual |

## 4. Dores Mapeadas
| ID | Dor | Persona afetada | Evidência (MOM Test) |

## 5. Como resolver as dores mapeadas
> Ponte entre dor e RF: **abordagem** e **entregáveis de alto nível** (não substitui RFs). Cada linha **deve** referenciar **D-xx**. Proibido linha sem dor.

| ID | Dor(es) | Abordagem (produto/processos) | Entregáveis de alto nível (capacidades) | MoSCoW |
|----|---------|----------------------------------|------------------------------------------|--------|
| R-01 | D-01 | … | … | Must |

## 6. Riscos de Produtos
| ID | Domínio | Descrição | Severidade | Experimento de validação |

## 7. Capacidade Operacional
> Saída da Camada 1.7. Calibra todos os RNFs. Sem isso, RNFs ficam over-engineered por default.

| Dimensão | Valor declarado | Implicação para RNFs |
|---|---|---|
| Tamanho e composição do time | (solo / 2–4 / 5–10 / 10+) + skills | … |
| Capacidade operacional | (best-effort / horário comercial / 24/7 com on-call) | … |
| Volume esperado no 1º ano | (≤500 / 500–10k / >10k req/dia) | … |
| Trajetória 12 meses | (estável / 2x / 10x) | … |

## 8. Requisitos Funcionais
| ID | Requisito | Critérios de aceite | MoSCoW | Dor |

## 9. Requisitos Não Funcionais
| ID | Categoria | Requisito | Métrica | Âncora na seção 7 |

## 10. Regras de Negócio
| ID | Regra | UCs aplicáveis |

> **Casos de uso:** ver `casos-de-uso/README.md` e arquivos `UC-xx-*.md` (não duplicar o corpo dos UCs aqui).

## 11. Restrições
| ID | Descrição | Reversibilidade (one-way / two-way) | Justificativa |

## 12. Matriz de Rastreabilidade
| Dor | RF | RNF | UC |

## 13. Log de Auditoria (Maker-Checker)
| Iteração | Itens reprovados | Correções |

## 14. Escopo do MVP e ordem sugerida de entrega
> **Curto:** ordem sugerida de implementação, RF Must do MVP, UC(s) primários e dependências. Usado pela **sdd-spec** para priorizar sprints; detalhe comportamental permanece em `casos-de-uso/`.
>
> Preferir **tabela**; se o MVP for trivial, **um parágrafo** explícito basta.

| Ordem sugerida | RF | UC(s) | Dependências / notas |
|----------------|-----|-------|----------------------|
| 1 | RF-… | UC-… | … |

## Glossário
```

**Critério de reversibilidade (seção 11 — Restrições):**

- **one-way door** — decisão cara de reverter (banco, modelo de dados central, LGPD/PCI, integração obrigatória, contrato de API pública).
- **two-way door** — decisão barata de mudar (nomes, pastas, copy).

---

## Exemplo de Turno (PPU)

**Usuário:** "Quero criar um app que ajude pequenos lojistas."

**✅ Comportamento correto (Etapa 1 — Camada 1.1):**

> **Etapa atual:** Etapa 1 — Camada 1.1 (Objetivo de Negócio)
> **Pergunta:** Qual impacto mensurável esse app precisa gerar para o lojista em 6–12 meses?
> **Recomendação do agente:** Sugiro reduzir em 30% o tempo de fechamento de caixa diário…

Após o Gate 1, seguem Etapas **2 → 3 → 4** até o pacote completo estar gravado.

---

## Anti-padrões (NÃO faça)

- ❌ Empilhar perguntas no mesmo turno.
- ❌ Perguntar sem recomendação.
- ❌ Pular Objetivo + Métrica + Dor antes de preencher a seção 5.
- ❌ **Gerar seção "Soluções e Features"** ou equivalente fora da seção 5 *Como resolver as dores mapeadas*.
- ❌ Colocar **Riscos** ou **Capacidade** **antes** da seção 5 no `projeto.md`.
- ❌ Incluir User Story Map no `projeto.md`.
- ❌ **Colar o corpo completo dos Casos de Uso** no `projeto.md` (use `casos-de-uso/`).
- ❌ **Substituir `casos-de-uso/` por uma lista enorme de MVP** na seção 14 — a seção 14 é **priorização/ordem**, não o detalhe dos fluxos.
- ❌ UC sem fluxos de exceção nos arquivos em `casos-de-uso/`.
- ❌ **Criar pasta `releases/`** ou arquivos `release-{nn}.md` como artefato desta skill (legado removido na v3).
- ❌ Pular Maker-Checker.
- ❌ Misturar etapas em um único turno.
- ❌ Entregar **BRD/PRD/SRS** como arquivos separados ao usuário — use **somente** o pacote (`projeto.md` + `casos-de-uso/`); os templates internos servem para redigir conteúdo `references/document-templates.md`.
- ❌ Criar seção **Decisões em Aberto** no `projeto.md`; pendências vão ao **Log (seção 13)** após esgotar iterações do Maker-Checker.

---

## Referências (carregar sob demanda)

- `references/discovery-toolkit.md` — OST/OKPS, MOM Test, 4 riscos, técnicas criativas.
- `references/document-templates.md` — BRD, PRD, SRS (insumos para redigir o pacote).
- `references/maker-checker.md` — Checklist completo.
- `references/releases-mvp.md` — **deprecado** (histórico do formato antigo; não usar em pacotes novos).

## Saída ao Usuário

| Status | Significado |
|:---:|---|
| ✅ | Concluído |
| 🔄 | Executando |
| ⏳ | Aguardando aprovação no gate |
| ⚠️ | Risco/lacuna identificada |
| ❌ | Reprovado na auditoria |
