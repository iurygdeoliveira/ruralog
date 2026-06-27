---
name: lgpd-compliance-analyzer
description: >
  Analisa projetos de software para identificar pontos de conformidade e não conformidade
  com a LGPD (Lei 13.709/2018). Varre código-fonte, banco de dados, configurações e
  documentação do projeto, mapeia tratamentos de dados pessoais e gera um relatório
  estruturado (lgpd_questions.md) com achados, riscos e recomendações por artigo da lei.
  Use sempre que o usuário mencionar "LGPD", "conformidade LGPD", "adequação à LGPD",
  "proteção de dados", "análise de privacidade", "auditoria LGPD", "dados pessoais no
  sistema", "verificar LGPD", "meu sistema está em conformidade", "lei de dados",
  "relatório LGPD", "checklist LGPD", "dados sensíveis no projeto", "consentimento",
  "base legal", "direitos do titular", "ANPD", "encarregado DPO", "RIPD",
  "tratamento de dados", "política de privacidade", "termos de uso LGPD",
  "anonimização", "eliminação de dados", "retenção de dados", "transferência
  internacional de dados", "incidente de segurança", "vazamento de dados",
  ou qualquer tarefa que envolva verificar se um projeto de software atende à
  legislação brasileira de proteção de dados pessoais. Também use quando o usuário
  pedir para gerar documentação de conformidade, mapear dados pessoais tratados
  pelo sistema, ou preparar evidências para auditoria de proteção de dados.
---

# LGPD Compliance Analyzer — Análise de Conformidade para Projetos de Software

Analisa projetos de software de ponta a ponta, identifica tratamentos de dados pessoais,
avalia conformidade com a LGPD e gera um relatório estruturado (`lgpd_questions.md`)
com achados, riscos e recomendações concretas.

## Antes de Começar

Consulte `references/lgpd-articles.md` para a estrutura da lei e os artigos mais citados.
Use essa referência sempre que precisar citar um artigo específico ou detalhar um dispositivo.

## Fluxo Principal

Siga estas 6 etapas rigorosamente. Não pule etapas e não gere o relatório final
sem completar a análise.

---

### Etapa 1: Reconhecimento do Projeto

Antes de qualquer análise, entenda o projeto:

1. **Pergunte ao usuário** (se não fornecido):
   - Qual o propósito do sistema? (ex: e-commerce, SaaS educacional, app de saúde)
   - Quem são os usuários finais? (pessoas físicas, empresas, ambos)
   - Qual o stack tecnológico? (Laravel, React, Node, etc.)
   - O sistema já está em produção ou em desenvolvimento?
   - Existe alguma documentação de privacidade já elaborada?

2. **Explore o repositório** (quando disponível):
   - Estrutura de diretórios e arquivos principais
   - Arquivo de configuração (.env, config/, etc.)
   - Migrations e models (schema do banco)
   - Rotas e controllers (endpoints que recebem/enviam dados)
   - Middlewares de autenticação e autorização
   - Seeders e factories (dados de teste)
   - Políticas de retenção e exclusão
   - Integrações externas (APIs, serviços de terceiros)

3. **Identifique rapidamente**:
   - O sistema trata dados de pessoas físicas? (se não, a LGPD pode não se aplicar — Art. 4º)
   - Há tratamento de dados sensíveis? (Art. 5º, II)
   - Há tratamento de dados de crianças/adolescentes? (Art. 14)

---

### Etapa 2: Mapeamento de Dados Pessoais

Varra o projeto e classifique cada dado pessoal encontrado:

**Onde procurar:**
- Migrations/schema → colunas com dados pessoais
- Models → fillable, casts, relationships que envolvem dados pessoais
- Formulários → campos que coletam dados do titular
- APIs → endpoints que recebem, enviam ou compartilham dados
- Logs → se registram dados pessoais
- Cache/sessão → se armazenam dados pessoais temporariamente
- Seeders/factories → se contêm dados pessoais reais (mesmo de teste)
- Integrações → se transmitem dados para serviços externos

**Classificação (para cada dado encontrado):**

| Dado | Tipo | Tabela/Local | Finalidade | Base Legal Provável | Sensível? |
|------|------|-------------|-----------|--------------------|-----------| 
| nome | pessoal | users.name | identificação | contrato (Art.7º,V) | Não |
| cpf | pessoal | users.cpf | identificação fiscal | obrigação legal (Art.7º,II) | Não |
| religião | sensível | profiles.religion | — | consentimento (Art.11,I) | Sim |

**Sinais de alerta durante o mapeamento:**
- Colunas sem finalidade clara → possível violação do princípio de necessidade (Art. 6º, III)
- Dados sensíveis sem flag ou tratamento diferenciado → risco Art. 11
- Dados de menores sem verificação de idade → risco Art. 14
- Dados pessoais em logs sem política de retenção → risco Art. 15/16
- Dados pessoais em texto plano (sem criptografia) → risco Art. 46

---

### Etapa 3: Análise por Dimensão de Conformidade

Avalie o projeto em 8 dimensões. Para cada uma, registre: status (conforme / parcial / não conforme / não verificável), evidência, artigos aplicáveis e recomendação.

#### Dimensão 1: Bases Legais (Arts. 7º e 11)
- Cada tratamento tem base legal definida e documentada?
- Consentimento (quando exigido) é livre, informado, inequívoco, específico, revogável?
- Existe mecanismo de revogação de consentimento? (Art. 8º, §5º)
- Para dados sensíveis: consentimento específico e destacado? (Art. 11, I)

#### Dimensão 2: Princípios (Art. 6º)
- **Finalidade**: cada dado tem propósito legítimo, específico e explícito?
- **Necessidade**: o sistema coleta apenas o mínimo necessário?
- **Adequação**: os dados são compatíveis com a finalidade informada?
- **Transparência**: o titular é informado sobre o tratamento?
- **Qualidade**: há mecanismo para manter dados atualizados?

#### Dimensão 3: Direitos do Titular (Art. 18)
- Existe funcionalidade para o titular:
  - Confirmar existência de tratamento? (I)
  - Acessar seus dados? (II)
  - Corrigir dados? (III)
  - Solicitar anonimização/bloqueio/eliminação? (IV)
  - Solicitar portabilidade? (V)
  - Solicitar eliminação de dados consentidos? (VI)
  - Saber com quem os dados são compartilhados? (VII)
  - Revogar consentimento? (IX)
- Esses canais são gratuitos e facilitados? (Art. 18, §5º)

#### Dimensão 4: Segurança (Arts. 46-49)
- Dados pessoais são criptografados em repouso e em trânsito?
- Há controle de acesso (autenticação, autorização, RBAC)?
- Existe proteção contra SQL injection, XSS e vazamentos?
- Logs de acesso a dados pessoais são mantidos?
- Há plano de resposta a incidentes? (Art. 48)
- Privacy by Design: segurança desde a concepção? (Art. 46, §2º)

#### Dimensão 5: Retenção e Eliminação (Arts. 15-16)
- Existe política de retenção (por quanto tempo cada dado é mantido)?
- Há mecanismo de exclusão/anonimização automática após término do tratamento?
- Soft delete é suficiente ou é necessário hard delete para dados pessoais?
- Backups incluem dados pessoais eliminados? (risco de restauração)

#### Dimensão 6: Compartilhamento e Transferência (Arts. 26-27, 33-36)
- O sistema compartilha dados com terceiros? (APIs, analytics, marketing)
- Há transferência internacional de dados? (servidores fora do Brasil, serviços cloud)
- Para cada compartilhamento: há base legal e transparência ao titular?
- Contratos com operadores (processadores) preveem obrigações LGPD?

#### Dimensão 7: Governança (Arts. 41, 50)
- Existe encarregado (DPO) nomeado e com canal público? (Art. 41)
- Existe política de privacidade publicada e acessível?
- Existe RIPD (Relatório de Impacto) para tratamentos de maior risco? (Art. 38)
- Existe programa de governança em privacidade? (Art. 50)

#### Dimensão 8: Casos Especiais
- **Crianças/adolescentes** (Art. 14): se o sistema atende menores, há consentimento parental? Coleta é limitada ao necessário?
- **Decisões automatizadas** (Art. 20): se há scoring, perfilamento ou decisão automatizada, o titular pode solicitar revisão?
- **Dados anonimizados** (Art. 12): se o sistema anonimiza dados, o processo é irreversível com meios razoáveis?

---

### Etapa 4: Classificar Riscos

Para cada achado de não conformidade ou conformidade parcial, classifique:

| Risco | Critério |
|-------|----------|
| 🔴 **Crítico** | Violação direta de obrigação legal; risco de sanção, dano ao titular ou incidente de segurança |
| 🟡 **Médio** | Conformidade parcial; funcionalidade existe mas incompleta ou sem documentação |
| 🟢 **Baixo** | Melhoria recomendada; boa prática não implementada mas sem violação direta |
| ✅ **Conforme** | Atende ao dispositivo legal; evidência verificada |
| ⬜ **Não verificável** | Não foi possível avaliar com as informações disponíveis |

---

### Etapa 5: Apresentar Resumo ao Usuário

Antes de gerar o arquivo final, apresente um resumo executivo:

```
## Resumo da Análise LGPD

**Projeto:** [nome]
**Data:** [data]
**Escopo:** [o que foi analisado]

### Panorama Geral
- 🔴 Achados críticos: X
- 🟡 Achados médios: X
- 🟢 Melhorias recomendadas: X
- ✅ Itens conformes: X
- ⬜ Não verificáveis: X

### Top 3 Riscos Prioritários
1. [Risco mais crítico + artigo]
2. [Segundo risco + artigo]
3. [Terceiro risco + artigo]
```

Pergunte: **"Esse resumo reflete o que você esperava? Deseja que eu aprofunde alguma dimensão antes de gerar o relatório final?"**

---

### Etapa 6: Gerar o Relatório (`lgpd_questions.md`)

Após aprovação do resumo, gere o arquivo `lgpd_questions.md` com a estrutura abaixo.

O arquivo deve ser salvo no diretório do projeto ou no local indicado pelo usuário.

```markdown
# Relatório de Conformidade LGPD
**Projeto:** [nome]
**Data da análise:** [data]
**Analisado por:** Claude (assistente IA) — análise preliminar, não substitui assessoria jurídica
**Escopo:** [descrição do que foi analisado]

---

## 1. Dados Pessoais Mapeados

| # | Dado | Tipo | Local | Finalidade | Base Legal | Sensível |
|---|------|------|-------|-----------|------------|----------|
| 1 | ... | ... | ... | ... | ... | ... |

---

## 2. Análise por Dimensão

### 2.1 Bases Legais (Arts. 7º e 11)
**Status:** [🔴/🟡/🟢/✅/⬜]

**Achados:**
- [achado 1]
- [achado 2]

**Artigos aplicáveis:** Art. 7º, Art. 8º, Art. 11
**Recomendações:**
- [recomendação 1]
- [recomendação 2]

**Perguntas para o time jurídico/DPO:**
- [pergunta que precisa de avaliação humana]

[repetir para cada dimensão]

---

## 3. Matriz de Riscos

| # | Achado | Dimensão | Risco | Artigo(s) | Recomendação | Prioridade |
|---|--------|----------|-------|-----------|-------------|------------|
| 1 | ... | ... | 🔴 | ... | ... | Imediata |
| 2 | ... | ... | 🟡 | ... | ... | Curto prazo |

---

## 4. Perguntas Abertas

Questões que não puderam ser respondidas apenas pela análise técnica e requerem
avaliação jurídica, gerencial ou do DPO:

1. [pergunta + contexto]
2. [pergunta + contexto]

---

## 5. Plano de Ação Sugerido

### Imediato (0-30 dias)
- [ ] [ação 1 — achado X]
- [ ] [ação 2 — achado Y]

### Curto prazo (1-3 meses)
- [ ] [ação 3]

### Médio prazo (3-6 meses)
- [ ] [ação 4]

---

## 6. Referências

- Lei 13.709/2018 (LGPD): https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm
- ANPD: https://www.gov.br/anpd/pt-br

---

**Aviso legal:** Esta análise é preliminar e automatizada. Não constitui parecer
jurídico. Para conformidade formal, consulte a legislação vigente, as regulamentações
da ANPD e assessoria jurídica especializada.
```

---

## Regras Gerais

1. **Sempre explore o código antes de concluir** — não assuma conformidade ou não conformidade sem evidência
2. **Cite artigos específicos** — toda recomendação deve referenciar o dispositivo legal. Consulte `references/lgpd-articles.md` quando precisar de detalhes
3. **Separe fatos de interpretações** — "o campo email não tem criptografia" é fato; "isso viola o Art. 46" é interpretação que depende de contexto
4. **Gere perguntas, não só respostas** — muitas questões de conformidade exigem avaliação jurídica humana. A skill identifica e formula as perguntas certas
5. **Não dê parecer jurídico** — a skill faz análise técnica. Sempre oriente o usuário a validar com assessoria jurídica
6. **Priorize riscos** — comece pelos achados críticos; o relatório deve ser acionável, não apenas descritivo
7. **Adapte-se ao stack** — cada tecnologia tem padrões diferentes de onde dados pessoais podem estar (Laravel: migrations/models; Node: schemas/prisma; etc.)
8. **Considere o contexto** — um sistema interno de RH tem requisitos diferentes de um e-commerce público

## Troubleshooting

### Projeto sem código-fonte disponível

**Sintoma:** Usuário pede análise mas não forneceu repositório.
**Solução:** Trabalhe com o que estiver disponível (documentação, diagramas, descrição verbal). Registre como "não verificável" os itens que dependem de análise de código. Sugira que o usuário forneça acesso ao código para análise mais precisa.

### Projeto muito grande para análise completa

**Sintoma:** Repositório com centenas de arquivos.
**Solução:** Priorize: (1) migrations/models (mapeamento de dados), (2) controllers com input de usuário, (3) integrações com terceiros, (4) configs de autenticação/autorização. Informe ao usuário que a análise cobriu os pontos prioritários e sugira análise incremental.

### Usuário confunde análise técnica com parecer jurídico

**Sintoma:** "Meu sistema está legal perante a LGPD?"
**Solução:** Esclareça que a análise identifica pontos técnicos de atenção e formula perguntas, mas a conformidade legal definitiva exige avaliação jurídica. A skill é ferramenta de apoio, não substituto de DPO ou advogado.

### Dados pessoais em locais inesperados

**Sintoma:** Dados pessoais em logs, cache, filas de jobs, ou backups.
**Solução:** Esses são pontos frequentemente esquecidos. Verifique: logs de aplicação (storage/logs), jobs/queues (se serializam dados pessoais), cache (Redis/Memcached), e políticas de backup. Registre como achado se encontrar dados pessoais sem política de retenção nesses locais.

### Stack tecnológico desconhecido

**Sintoma:** Framework ou linguagem que a skill não cobre em detalhes.
**Solução:** Aplique os mesmos princípios: onde estão os dados? como entram? como saem? quem acessa? por quanto tempo ficam? Os conceitos LGPD são agnósticos de tecnologia — adapte os pontos de verificação ao que encontrar no projeto.
