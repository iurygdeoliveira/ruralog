# Templates de Documentação Formal (insumo interno)

Referência para as **Etapas 2–3** da skill `idea-to-spec`.

> **Importante:** a entrega final ao usuário é o **pacote** definido no `SKILL.md` (`projeto.md` + `casos-de-uso/`). Os templates BRD/PRD/SRS abaixo são **fontes de redação** — não entregue BRD/PRD/SRS como arquivos separados ao usuário.

Mapeamento:

| Template fonte | Onde o conteúdo vai no pacote |
|---|---|
| **BRD** | `projeto.md`: 1. Visão (inclui objetivo de negócio na Visão), 2. Métricas, 7. Capacidade Operacional, 11. Restrições |
| **PRD** | `projeto.md`: 3–5 (Personas, Dores, Como resolver); escopo/ordem do MVP → **seção 14** do `projeto.md` |
| **SRS** | `projeto.md`: 8–9 (RFs, RNFs), 10 (Regras de Negócio), 12–14 (Matriz, Log, MVP), Glossário; **UCs completos** → `casos-de-uso/UC-xx-*.md` + índice `casos-de-uso/README.md` |

---

## Decisão de profundidade

| Tipo de projeto | Foco do pacote | Priorização |
|---|---|---|
| MVP/Startup | PRD + MVP (seção 14) + Capacidade | `projeto.md` 1–14, Glossário; UCs mínimos em `casos-de-uso/` |
| Software corporativo | BRD + PRD + SRS completos | Pacote completo + matriz e log no `projeto.md` |
| Refactor/feature de sistema legado | SRS dominante | 7–11 no `projeto.md`; UCs/RNs em profundidade em `casos-de-uso/` |

---

## Template 1 — BRD (Business Requirements Document)

```markdown
# BRD — [Nome do Projeto]

**Versão:** 1.0 | **Autor:** [nome] | **Data:** [AAAA-MM-DD] | **Sponsor:** [nome]

## 1. Sumário Executivo
Parágrafo único explicando o problema, a solução proposta e o impacto esperado.

## 2. Contexto de Negócio
- Situação atual (problema e custo do status quo)
- Razão de agora (urgência, janela de mercado, regulação)

## 3. Objetivos de Negócio
- Objetivo principal (1 frase mensurável)
- Objetivos secundários

## 4. Resultados-Chave (Métricas)
| ID | Métrica | Baseline | Meta | Prazo |
|---|---|---|---|---|
| KR-01 | [ex: taxa de conversão] | [valor atual] | [meta] | [data] |

## 5. Escopo
### 5.1 Dentro do escopo
- Item 1
- Item 2

### 5.2 Fora do escopo
- Item 1 (justifique)

## 6. Stakeholders
| Papel | Nome | Responsabilidade |

## 7. Restrições (insumo para a seção 11 do `projeto.md`; sem tabela de premissas no núcleo)
- R-01 — Regulatórias (LGPD, etc.)
- R-02 — Orçamentárias
- R-03 — Tecnológicas (legado, integrações obrigatórias)

## 8. Riscos e Mitigações
| ID | Risco | Probabilidade | Impacto | Mitigação |

## 9. Cronograma macro
| Fase | Início | Fim | Entregável |

## 10. Orçamento (alto nível)

## 11. Critérios de Aprovação do Projeto
- Quando este projeto será considerado bem-sucedido?

## Glossário
- Termo: definição
```

---

## Template 2 — PRD (Product Requirements Document)

```markdown
# PRD — [Nome do Produto / Feature]

**Versão:** 1.0 | **PM:** [nome] | **Designer:** [nome] | **Tech Lead:** [nome] | **Data:** [AAAA-MM-DD]

## 1. Visão e Problema
- Problema do usuário em 1 parágrafo (saída do MOM Test)
- Visão do produto

## 2. Personas
| ID | Persona | Contexto | Dor principal | Comportamento atual |
|---|---|---|---|---|
| P-01 | [ex: Lojista de bairro] | … | … | … |

## 3. Jornadas de Usuário
Para cada persona, liste a jornada atual (sem o produto) e a jornada futura (com o produto).

## 4. Histórias de Usuário (Backbone)
| ID | Como [persona] | Quero [ação] | Para [resultado] | Prioridade MoSCoW |
|---|---|---|---|---|
| US-01 | … | … | … | Must |

## 5. Requisitos Funcionais
| ID | Requisito | Descrição | Critérios de aceite | MoSCoW | Dor associada |
|---|---|---|---|---|---|
| RF-01 | … | … | Dado/Quando/Então | Must | D-03 |

## 6. Requisitos Não Funcionais
| ID | Categoria | Requisito | Métrica |
|---|---|---|---|
| RNF-01 | Desempenho | Tempo de resposta | < 500ms p95 |
| RNF-02 | Segurança | Autenticação | MFA obrigatório |
| RNF-03 | Conformidade | LGPD | Consentimento explícito + direito de eliminação |
| RNF-04 | Disponibilidade | SLA | 99,5% mensal |
| RNF-05 | Acessibilidade | Padrão | WCAG 2.1 AA |

## 7. Métricas de Sucesso (saída do BRD)
| Métrica | Baseline | Meta | Como medir |

## 8. Escopo do MVP e ordem sugerida (`projeto.md` seção 14)
> Tabela **curta** **Ordem | RF | UC(s) | Dependências/notas** ou **um parágrafo** explícito. Detalhe comportamental permanece em **`casos-de-uso/`**.

## 9. Pós-MVP (se aplicável)
> Épicos fora do MVP podem ser listados na seção 14 como “pós-MVP” ou em nota — não duplicar fluxos no `projeto.md`.

## 10. Dependências e Integrações Externas
- Sistema X (autenticação SSO)
- Gateway de pagamento Y

## 11. Riscos de Produto
| ID | Domínio (Valor/Usabilidade/Técnico/Negócio) | Descrição | Hipótese a testar |

## Glossário
```

---

## Template 3 — SRS (Software Requirements Specification)

> Padrão IEEE 830 simplificado. Use para handoff de engenharia.

```markdown
# SRS — [Nome do Sistema]

**Versão:** 1.0 | **Arquiteto:** [nome] | **Data:** [AAAA-MM-DD]

## 1. Introdução
### 1.1 Propósito
### 1.2 Escopo do Sistema
### 1.3 Definições, Acrônimos e Abreviações
### 1.4 Referências (links para BRD, PRD)
### 1.5 Visão Geral do Documento

## 2. Descrição Geral
### 2.1 Perspectiva do Produto
Diagrama de contexto (texto + Mermaid se útil).

### 2.2 Funções do Produto
Lista resumida de funções principais.

### 2.3 Classes de Usuário
| Classe | Descrição | Frequência | Privilégios |

### 2.4 Ambiente Operacional
- SO, browser, dispositivos suportados
- Hardware mínimo
- Dependências de rede

### 2.5 Restrições de Implementação
- Linguagens / frameworks obrigatórios
- Bibliotecas legadas que devem coexistir
- Políticas corporativas (compliance, deploy on-prem, etc.)

### 2.6 Premissas e Dependências

## 3. Requisitos de Interface Externa
### 3.1 Interfaces de Usuário (UI)
### 3.2 Interfaces de Hardware
### 3.3 Interfaces de Software (APIs externas)
### 3.4 Interfaces de Comunicação (protocolos, criptografia)

## 4. Requisitos Funcionais (Casos de Uso)

> **Na entrega idea-to-spec v1.6+:** transpõe cada UC abaixo para **`casos-de-uso/UC-xx-{slug}.md`** e mantenha apenas referências no `projeto.md` (índice + matriz).

### UC-01 — [Nome do Caso de Uso]
- **Atores:** …
- **Pré-condições:** …
- **Pós-condições (sucesso):** …
- **Fluxo principal:**
  1. …
  2. …
- **Fluxos alternativos:**
  - **A1:** …
- **Fluxos de exceção (OBRIGATÓRIO — não pular):**
  - **E1 — [Erro de validação]:** sistema retorna … e registra log Y.
  - **E2 — [Falha de integração]:** sistema aplica retry exponencial e envia alerta Z.
- **Regras de negócio aplicadas:** RN-01, RN-02
- **Requisitos relacionados:** RF-01, RF-02

### UC-02 — …

## 5. Requisitos Não Funcionais

### 5.1 Desempenho
- Latência p95 < 500ms para operações de leitura.
- Throughput mínimo de 100 req/s no endpoint X.

### 5.2 Segurança
- Autenticação MFA.
- Criptografia AES-256 em repouso.
- TLS 1.3 em trânsito.
- Rate limiting por IP/usuário.

### 5.3 Disponibilidade
- SLA 99,5% mensal.
- RPO ≤ 1h | RTO ≤ 4h.

### 5.4 Conformidade
- LGPD (Lei 13.709/2018): base legal documentada por tratamento, registro de consentimento, atendimento aos direitos do titular, RIPD para tratamentos de alto risco.
- Outras normas aplicáveis (PCI-DSS, ISO 27001, etc.)

### 5.5 Manutenibilidade
- Cobertura de testes ≥ 80%.
- Documentação de API atualizada (OpenAPI).

### 5.6 Observabilidade
- Logs estruturados.
- Métricas (Prometheus / equivalente).
- Tracing distribuído.

### 5.7 Acessibilidade
- WCAG 2.1 AA.

### 5.8 Internacionalização
- pt-BR, en-US (se aplicável).

## 6. Modelo de Dados (alto nível)
- Entidades principais e relacionamentos.
- Diagrama ER textual (Mermaid).

## 7. Regras de Negócio
| ID | Regra | Aplicação |
|---|---|---|
| RN-01 | … | UC-01, UC-03 |

## 8. Matriz de Rastreabilidade
| Dor (D) | RF | RNF | UC | US |
|---|---|---|---|---|
| D-01 | RF-01 | RNF-01 | UC-01 | US-01 |

## 9. Apêndices
- Glossário (no `projeto.md`)
- Diagramas
- Decisões arquiteturais (ADRs) — preferir registro em restrição ou log quando aplicável ao pacote idea-to-spec
```

---

## Regras Universais de Redação

1. **IDs estáveis e únicos.** Use prefixos: D (dor), RF, RNF, UC, US, RN, KR, R (restrição no `projeto.md`). Evite família “Q-” para decisões — use o Log de Auditoria (seção 13).
2. **Glossário primeiro.** Termos polissêmicos (ex: "cliente" pode ser usuário final ou empresa contratante) devem ser fixados no glossário.
3. **Critérios de aceite no formato Gherkin** (Dado/Quando/Então) para histórias e RFs críticos.
4. **Nunca pule fluxos de exceção.** SRS sem edge cases é reprovado por engenheiros sêniores.
5. **Toda restrição explícita (seção 11) ou risco (seção 6).** Se assumiu algo crítico, não deixe implícito.
6. **Rastreabilidade obrigatória.** Cada RF deve linkar a uma dor; cada UC deve linkar a um ou mais RFs.
7. **Markdown estruturado, tabelas para requisitos.** Facilita conversão para Confluence/Notion/Jira.
