# Fase 3 — A Agroindústria (Despolpamento, CQ e Conformidade)

> O elo "coração operacional": recebe o açaí fruto, despolpa, classifica a polpa conforme padrões MAPA e mostra o **alerta preditivo** vindo do Campo.

| Campo | Valor |
|---|---|
| **Dono** | Dev 2 |
| **Arquivo principal** | `industria.html` (+ `js/industria.js`) |
| **Tempo estimado** | 6h (com margem) |
| **Dependências** | **Fase 0** (db.js). Lê dados produzidos pela Fase 1/2, mas pode desenvolver em paralelo usando o seed |
| **Entrega testável** | Receber o lote de açaí, rodar CQ aprova/reprova, ver o card de alerta fitossanitário, processar (despolpar), classificar polpa e expedir para o varejo |

---

## 1. Objetivos

1. Demonstrar a **catraca digital** (recepção + pesagem) que encerra a viagem e calcula o tempo total de trânsito desde a debulha.
2. Demonstrar **Controle de Qualidade** (recepção e final) com decisão Aprova/Reprova e **classificação MAPA** da polpa (Tipo A/B/C).
3. Exibir a **inbox de alertas preditivos fitossanitários** — o diferencial de inovação (planejamento antecipado contra pragas do açaí).
4. Registrar o fluxo mínimo de despolpamento e **expedição para o varejo**, fechando o handoff da cadeia.

## 2. Funcionalidades

1. **Recepção / Catraca + Pesagem (`RF-07`)** — marca `recepcao_ts`, registra `peso_kg`, calcula trânsito total desde a debulha, encerra viagem.
2. **CQ Recepção (`RF-08`, `RN-03`)** — Aprova/Reprova açaí fruto recebido (cor, integridade, impurezas).
3. **Despolpamento / Processamento (`RF-16`)** — Fluxo simplificado: branqueamento → despolpamento → congelamento.
4. **CQ Final + Classificação MAPA (`RF-08`)** — Aprova polpa acabada e classifica: Tipo A (>14% sólidos), Tipo B (11-14%), Tipo C (8-11%).
5. **Inbox de Alertas Fitossanitários (`RF-09`)** — cards dos alertas de pragas do açaí gerados no Campo.
6. **Expedição para Varejo (`RF-16`)** — saída da polpa de açaí congelada aprovada.
7. **Insight operacional simulado** — card de IA por regra para sustentar a narrativa sem prometer modelo real.
8. **Painel-resumo do lote** — estado atual + mini-timeline (suporte ao pitch).

## 3. Componentes HTML/CSS/JS

- `industria.html`: layout de **dashboard** (ERP-like) com cabeçalho global, uma coluna de "Lotes na operação" e uma área de detalhe.
- `js/industria.js`: `getLote/listLotes/patchLote/addEvento` de `db.js`. Renderiza alertas com `getLote().alertas`.
- Componentes: `.rl-card`, `.rl-badge` (status etapas), `.rl-semaforo`, lista de alertas com `.rl-card` severidade alta/crítica destacada (borda vermelha), card "Insight operacional", card "Feedback do consumidor" se houver opiniões.

## 4. Instruções técnicas

1. **Recepção + Pesagem (`RF-07`):** botão "Receber lote (bipar)":
   ```js
   const recepcao_ts = Date.now();
   const debulha_ts = lote.colheita?.debulha_ts || lote.logistica.expedicao_ts;
   const transitoH = debulha_ts
     ? ((recepcao_ts - debulha_ts)/3.6e6).toFixed(1) : "—";
   await patchLote(id, {
     status:"industria",
     industria:{ ...lote.industria, recepcao_ts, peso_kg: lote.colheita.quantidade_kg }
   });
   await addEvento(id, { etapa:"recepcao_industria", ts:recepcao_ts, descricao:`Açaí recebido na agroindústria (trânsito ${transitoH}h desde debulha)`, icone:"🏭" });
   ```
2. **CQ Recepção (`RF-08` + `RN-03`):** botões Aprovar/Reprovar + campo obs. Campos de avaliação: cor dos frutos, integridade, presença de impurezas. Reprovado → `status:"reprovado"` e o lote **para de avançar** (mostre badge vermelho "Reprovado no CQ — Açaí impróprio"). Aprovado segue.
3. **Despolpamento simplificado (`RF-16`):**
   - Botão "Registrar branqueamento" → campo de temperatura (deve ser ≥80°C, validação obrigatória). Grava `industria.branqueamento.validado = true` e `temperatura`. Evento na timeline: "Branqueamento validado (85°C)".
   - Botão "Iniciar despolpamento" → grava `industria.producao.inicio`. Evento: "Despolpamento iniciado".
   - Botão "Finalizar despolpamento" → grava `industria.producao.fim` e `unidades_kg`. Evento: "Polpa de açaí produzida — Xkg".
   Cada ação escreve evento na timeline.
4. **CQ Final + Classificação MAPA (`RF-08`):** mesma mecânica antes da expedição, com campo adicional de **classificação**:
   ```js
   // Select com opções:
   // "A" — Açaí Grosso/Especial (sólidos totais > 14%)
   // "B" — Açaí Médio/Regular (sólidos totais 11-14%)
   // "C" — Açaí Fino/Popular (sólidos totais 8-11%)
   await patchLote(id, {
     industria:{ ...lote.industria, cqFinal: { status:"aprovado", obs, classificacao:"A" } }
   });
   await addEvento(id, { etapa:"cq_final", ts:Date.now(), descricao:"Polpa aprovada — Classificação MAPA: Tipo A (Grosso/Especial)", icone:"✅" });
   ```
   Se reprovado, `status:"reprovado"` e não permite expedir.
5. **Expedição para varejo (`RF-16`):**
   ```js
   const expedicao_varejo_ts = Date.now();
   await patchLote(id, {
     status:"industria",
     industria:{ ...lote.industria, expedicao_varejo_ts }
   });
   await addEvento(id, { etapa:"expedicao_varejo", ts:expedicao_varejo_ts, descricao:"Polpa de Açaí Congelada expedida para o varejo — Tipo " + classificacao, icone:"📦" });
   ```
   A Fase 4 só deve receber o lote se `industria.cqFinal.status === "aprovado"` e `expedicao_varejo_ts` existir.
6. **Inbox de alertas fitossanitários (`RF-09`):** liste `lote.alertas` ordenados por `ts` desc. Severidade `alta`/`critica` com destaque visual (borda vermelha). Mostre o nome da praga em destaque. Se vazio, estado vazio amigável ("Sem alertas fitossanitários — cadeia saudável").
7. **Insight operacional simulado:** se o semáforo logístico estiver amarelo/vermelho ou existir alerta de praga, mostrar card:
   > "IA RuraLog: Lote ACAI-TO-2026-001 recebido com Xh de trânsito. Risco de perda de antocianinas. Priorizar despolpamento imediato para salvaguardar classificação como Açaí Especial Tipo A."
8. **Feedback do consumidor (opcional):** se `lote.consumidor.opinioes` existir, mostrar card com média/notas recentes. Se vazio, manter estado "Sem feedback público ainda".
9. **Resumo:** mostre o semáforo logístico recebido e os carimbos de tempo (tempo debulha→recepção). Não recalcule logística aqui — apenas leia.

## 5. Critérios de aceitação

- [ ] "Receber lote" calcula e exibe o tempo total de trânsito desde a debulha e muda `status` para `industria`.
- [ ] CQ Aprova/Reprova persiste; **reprovado bloqueia o avanço** (RN-03 visível).
- [ ] O alerta criado na Fase 1 (praga do açaí) aparece como card de severidade alta com nome da praga.
- [ ] Há fluxo mínimo de branqueamento, despolpamento, CQ final com classificação MAPA (Tipo A/B/C) e expedição para varejo.
- [ ] A expedição para varejo só aparece/libera após CQ final aprovado.
- [ ] Card de insight operacional simulado aparece quando houver alerta fitossanitário ou risco logístico.
- [ ] Painel funciona lendo só o seed (não depende de a Fase 1 estar pronta para começar a desenvolver).
- [ ] Visual consistente com o CSS global; botão "Resetar Demo" presente.

## 6. Fora de escopo

IoT/sensores reais de temperatura, previsão de manutenção real, gráficos de gargalo dinâmicos, multiusuário, Filament/backend, medição real de sólidos totais (°Brix). Won't (o "cruzamento de tempos por IA" é demonstrado por insight simulado, não por modelo real).
