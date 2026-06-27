# Fase 3 — A Indústria (Painel de Recepção, CQ e Alertas)

> O elo "coração operacional": recebe o lote, controla qualidade e mostra o **alerta preditivo** vindo do Campo.

| Campo | Valor |
|---|---|
| **Dono** | Dev 2 |
| **Arquivo principal** | `industria.html` (+ `js/industria.js`) |
| **Tempo estimado** | 6h (com margem) |
| **Dependências** | **Fase 0** (db.js). Lê dados produzidos pela Fase 1/2, mas pode desenvolver em paralelo usando o seed |
| **Entrega testável** | Receber o lote, rodar CQ aprova/reprova, ver o card de alerta preditivo, processar e expedir para o varejo |

---

## 1. Objetivos

1. Demonstrar a **catraca digital** (recepção) que encerra a viagem e calcula o tempo total de trânsito.
2. Demonstrar **Controle de Qualidade** (recepção e final) com decisão Aprova/Reprova.
3. Exibir a **inbox de alertas preditivos** — o diferencial de inovação (planejamento antecipado).
4. Registrar o fluxo mínimo de processamento e **expedição para o varejo**, fechando o handoff da cadeia.

## 2. Funcionalidades

1. **Recepção / Catraca (`RF-07`)** — marca `recepcao_ts`, calcula trânsito total, encerra viagem.
2. **CQ Recepção (`RF-08`, `RN-03`)** — Aprova/Reprova matéria-prima recebida.
3. **CQ Final (`RF-08`)** — Aprova produto acabado.
4. **Inbox de Alertas (`RF-09`)** — cards dos alertas gerados no Campo.
5. **Processamento e Expedição para Varejo (`RF-16`)** — registra produção simplificada e saída do produto aprovado.
6. **Insight operacional simulado** — card de IA por regra para sustentar a narrativa sem prometer modelo real.
7. **Painel-resumo do lote** — estado atual + mini-timeline (suporte ao pitch).

## 3. Componentes HTML/CSS/JS

- `industria.html`: layout de **dashboard** (ERP-like) com cabeçalho global, uma coluna de "Lotes na operação" e uma área de detalhe.
- `js/industria.js`: `getLote/listLotes/patchLote/addEvento` de `db.js`. Renderiza alertas com `getLote().alertas`.
- Componentes: `.rl-card`, `.rl-badge` (status etapas), `.rl-semaforo`, lista de alertas com `.rl-card` severidade alta destacada (borda vermelha), card "Insight operacional", card "Feedback do consumidor" se houver opiniões.

## 4. Instruções técnicas

1. **Recepção (`RF-07`):** botão "Receber lote (bipar)":
   ```js
   const recepcao_ts = Date.now();
   const transitoH = lote.logistica.expedicao_ts
     ? ((recepcao_ts - lote.logistica.expedicao_ts)/3.6e6).toFixed(1) : "—";
   await patchLote(id, { status:"industria", industria:{ ...lote.industria, recepcao_ts } });
   await addEvento(id, { etapa:"recepcao_industria", ts:recepcao_ts, descricao:`Recebido na indústria (trânsito ${transitoH}h)`, icone:"🏭" });
   ```
2. **CQ Recepção (`RF-08` + `RN-03`):** botões Aprovar/Reprovar + campo obs. Reprovado → `status:"reprovado"` e o lote **para de avançar** (mostre badge vermelho "Reprovado no CQ"). Aprovado segue.
3. **Processamento simplificado (`RF-16`):** botão "Iniciar processamento" grava `industria.producao.inicio`; botão "Finalizar processamento" grava `industria.producao.fim` e `unidades` (número fixo do seed serve). Cada ação escreve evento na timeline.
4. **CQ Final (`RF-08`):** mesma mecânica antes da expedição ao varejo; grava aprovação do produto acabado. Se reprovado, `status:"reprovado"` e não permite expedir.
5. **Expedição para varejo (`RF-16`):**
   ```js
   const expedicao_varejo_ts = Date.now();
   await patchLote(id, {
     status:"industria",
     industria:{ ...lote.industria, expedicao_varejo_ts }
   });
   await addEvento(id, { etapa:"expedicao_varejo", ts:expedicao_varejo_ts, descricao:"Produto acabado expedido para o varejo", icone:"📦" });
   ```
   A Fase 4 só deve receber o lote se `industria.cqFinal.status === "aprovado"` e `expedicao_varejo_ts` existir.
6. **Inbox de alertas (`RF-09`):** liste `lote.alertas` ordenados por `ts` desc. Severidade `alta` com destaque visual. Se vazio, estado vazio amigável ("Sem alertas — cadeia saudável").
7. **Insight operacional simulado:** se o semáforo logístico estiver amarelo/vermelho ou existir alerta de praga, mostrar card:
   > "IA RuraLog: priorizar processamento deste lote para reduzir risco de perda e ajustar planejamento de insumos."
8. **Feedback do consumidor (opcional):** se `lote.consumidor.opinioes` existir, mostrar card com média/notas recentes. Se vazio, manter estado "Sem feedback público ainda".
9. **Resumo:** mostre o semáforo logístico recebido e os carimbos de tempo. Não recalcule logística aqui — apenas leia.

## 5. Critérios de aceitação

- [ ] "Receber lote" calcula e exibe o tempo total de trânsito e muda `status` para `industria`.
- [ ] CQ Aprova/Reprova persiste; **reprovado bloqueia o avanço** (RN-03 visível).
- [ ] O alerta criado na Fase 1 (praga) aparece como card de severidade alta.
- [ ] Há fluxo mínimo de processamento, CQ final e expedição para varejo.
- [ ] A expedição para varejo só aparece/libera após CQ final aprovado.
- [ ] Card de insight operacional simulado aparece quando houver alerta ou risco logístico.
- [ ] Painel funciona lendo só o seed (não depende de a Fase 1 estar pronta para começar a desenvolver).
- [ ] Visual consistente com o CSS global; botão "Resetar Demo" presente.

## 6. Fora de escopo

IoT/sensores reais, previsão de manutenção real, gráficos de gargalo dinâmicos, multiusuário, Filament/backend. Won't (o "cruzamento de tempos por IA" é demonstrado por insight simulado, não por modelo real).
