# Toolkit de Descoberta — Frameworks e Técnicas

Referência metodológica para **a Etapa 1 (Elicitação)** da skill `idea-to-spec`.

---

## 1. Opportunity Solution Tree (OST) e OKPS

Mapa vivo que organiza a descoberta visualmente. Garante que o **espaço do problema** seja exaurido antes do **espaço da solução**.

### Hierarquia OKPS (Objective → Key Result → Problem → Solution)

| Camada | Diretriz para o agente | Saída para o documento |
|---|---|---|
| **1. Objective (Objetivo de Negócio)** | Restrinja a conversa à visão macro. Pergunte sobre impacto financeiro/operacional/estratégico. **Recuse menções a features.** | Introdução e motivação do BRD. |
| **2. Key Result (Resultado-Chave)** | Exija métricas quantificáveis e verificáveis. Substitua "melhorar vendas" por "subir conversão de X% para Y% em N meses". | Critérios de sucesso e RNFs de desempenho no SRS. |
| **3. Problem (Oportunidades / Dores)** | Force exploração do que o mercado atual não resolve. Identifique necessidades não atendidas e desejos friccionais. | Base para histórias de usuário e jornadas no PRD. |
| **4. Solution (Soluções / Experimentos)** | Permita features apenas após validar 1–3. Cada feature DEVE estar amarrada a um problema mapeado. | Escopo técnico, Epics ágeis, espinha do software. |

### Regra de ouro

> **Solução órfã** (sem dor associada na camada 3) é descartada automaticamente. Isso elimina "soluções flutuantes" — a maior causa de software inflado e não usado.

---

## 2. Os 4 Domínios de Risco (Marty Cagan)

Toda ideia de produto é uma pilha de suposições de alto risco. Valide os 4 domínios antes de comprometer capital:

| Risco | Pergunta de validação | Exemplos de evidência |
|---|---|---|
| **Valor** | O cliente pagaria ou escolheria usar? | Disposição a pagar declarada e comportamento de compra atual em alternativas. |
| **Usabilidade** | O usuário compreende como interagir? | Testes de usabilidade, taxa de conclusão de tarefa em protótipo. |
| **Viabilidade técnica** | A stack atual suporta a construção? | Spike técnico, prova de conceito, restrições de hardware/legado. |
| **Viabilidade de negócio** | O modelo se sustenta legal e financeiramente? | Margem unitária, conformidade (LGPD, PCI, ANVISA), licenças, custo de aquisição. |

> Se algum risco está **alto** e **não testado**, registre-o na **seção 6 (Riscos de Produtos)** do `projeto.md` com **experimento sugerido** e severidade — antes de comprometer capital.

---

## 3. MOM Test — Entrevistas que Revelam a Verdade

Estrutura conversacional que **impede o entrevistado de emitir hipóteses futuras irreais**.

### Regras

1. Foque no **passado**, nunca no futuro.
2. Foque em **comportamento real**, nunca em opinião.
3. Foque em **comportamentos específicos**, nunca em genéricos.

### Perguntas válidas

- "Conte-me sobre a última vez que você tentou resolver este problema. O que aconteceu primeiro?"
- "Que ferramenta/sistema você usou? Por quê?"
- "Onde travou?"
- "Quanto tempo/dinheiro você gastou no último mês com a alternativa atual?"
- "O que você fez para contornar a dor?"
- "Quem mais foi envolvido?"

### Perguntas PROIBIDAS

- ❌ "Você usaria um app que…?"
- ❌ "Pagaria X por isso?"
- ❌ "Seria útil se…?"
- ❌ "Quanto custaria de mensalidade ideal?"
- ❌ Qualquer pergunta hipotética sobre o futuro.

> Substitua sempre por uma versão temporal: "Da última vez que isso aconteceu, o que você fez?"

---

## 4. Atlassian Discovery — Wonder → Explore → Make → Impact

Esqueleto processual de 4 estágios:

| Estágio | Atividade do agente |
|---|---|
| **Wonder (Maravilhar-se)** | Buscar a dor real do usuário final. Sem solução. Sem premissa. |
| **Explore (Explorar)** | Auxiliar geração rápida de protótipos, hipóteses concorrentes, validações leves. |
| **Make (Construir)** | Ideia madura. Gerar o documento de comprometimento de engenharia (BRD/PRD/SRS). |
| **Impact (Impactar)** | Inserir métricas originais no documento final para acompanhamento pós-lançamento. |

> A skill `idea-to-spec` **só transita ao estágio Make** após manifesto aprovado no Gate 1.

---

## 5. Toolkit Criativo (quando o usuário trava)

Acione quando metodologias lineares encontram barreiras.

### 5.1 Técnica de Reversão

Em vez de "como satisfazer o cliente?", pergunte:

> "Liste todas as interações que fariam um usuário **detestar e abandonar** este software imediatamente."

A inversão extrai requisitos não funcionais críticos que o usuário esqueceria: latência inaceitável, falhas de segurança, burocracia excessiva, falta de suporte.

### 5.2 Seis Chapéus do Pensamento (de Bono)

Analise a ideia a partir de 6 personas pré-definidas:

| Chapéu | Foco | Pergunta-modelo |
|---|---|---|
| 🔵 Azul | Processo / Visão geral | Como organizamos esta análise? |
| ⚪ Branco | Dados / Fatos | Quais dados temos sobre o problema? |
| 🔴 Vermelho | Emoção / Intuição | O que sentimos sobre a ideia? |
| 🟡 Amarelo | Otimismo | Que valor isso pode gerar no melhor cenário? |
| ⚫ Preto | Crítica / Risco | Onde isso quebra? Que falhas vamos enfrentar? |
| 🟢 Verde | Criatividade | Que alternativas existem? |

> Garante cobertura de todas as dimensões de oportunidade e mitigação de risco.

### 5.3 Diagrama de Ishikawa (Espinha de Peixe)

Conduza a descoberta de **causas-raiz** verbalmente:

1. Defina o efeito problemático (ex: "lojistas perdem 2h/dia em conferência").
2. Liste categorias de causa: Pessoas, Processos, Tecnologia, Dados, Ambiente, Métodos.
3. Para cada categoria, pergunte "por quê?" 5 vezes (5 Whys aninhados).
4. Identifique a causa-raiz que, se resolvida, elimina o efeito.

> Garante que o software **cure a causa sistêmica** em vez de tratar sintomas.

---

## 6. Heurísticas de Tensionamento

Quando uma resposta do usuário soar genérica, **tensione** antes de aceitar:

| Resposta vaga | Tensão a aplicar |
|---|---|
| "Quero melhorar a experiência do usuário" | "Em qual etapa específica da jornada? Mensure como hoje." |
| "O sistema precisa ser rápido" | "Defina latência aceitável em ms para qual operação." |
| "Vamos atender pequenas empresas" | "Defina por receita anual, número de funcionários e segmento." |
| "Precisa ser seguro" | "LGPD? PCI? SOC2? MFA obrigatório? Criptografia em repouso?" |
| "Quero usar IA" | "Para resolver qual dor mensurável? IA é meio, não fim." |
| "Quero microserviços" | "Qual problema **de hoje** isso resolve? Qual o tamanho do time, a cadência de deploy e a maturidade de devops? Monolito modular não cobriria 12 meses?" |
| "Precisa escalar para milhões" | "Qual o volume de hoje e em 6 meses? Qual a métrica que prevê esse crescimento? **10x do baseline atual** é o teto realista de planejamento — acima disso, é especulação." |
| "Vamos usar event sourcing / CQRS" | "Qual requisito de auditoria, replay temporal ou compliance justifica o custo? Existe alternativa com tabela de log + transações simples? Quem opera quando o stream falhar?" |
| "Arquitetura hexagonal / DDD completo" | "Qual o tamanho do domínio e a longevidade prevista? MVP precisa disso ou camadas explícitas só apareceriam quando dor real surgisse? Time tem familiaridade com o estilo?" |

---

## 7. Ordem Inegociável

```
Objetivo → Métrica → Dor (com MOM Test) → Riscos → Solução
```

**Nunca** inverta. **Nunca** pule camadas. Se faltar dado em uma camada, **pause e pergunte** — não invente.
