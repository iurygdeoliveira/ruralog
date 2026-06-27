# Fase 3 — A Indústria (Painel de Recepção, CQ e Alertas)

> O elo "coração operacional": recebe o lote, controla qualidade e mostra o **alerta preditivo** vindo do Campo.

| Campo | Valor |
|---|---|
| **Dono** | Dev 2 |
| **Arquivo principal** | `industria.html` (+ `js/industria.js`) |
| **Tempo estimado** | 6h (com margem) |
| **Dependências** | **Fase 0** (db.js). Lê dados produzidos pela Fase 1/2, mas pode desenvolver em paralelo usando o seed |
| **Entrega testável** | Receber o lote, rodar CQ aprova/reprova e ver o card de alerta preditivo |

---

## 1. Objetivos

1. Demonstrar a **catraca digital** (recepção) que encerra a viagem e calcula o tempo total de trânsito.
2. Demonstrar **Controle de Qualidade** (recepção e final) com decisão Aprova/Reprova.
3. Exibir a **inbox de alertas preditivos** — o diferencial de inovação (planejamento antecipado).

## 2. Funcionalidades

1. **Recepção / Catraca (`RF-07`)** — marca `recepcao_ts`, calcula trânsito total, encerra viagem.
2. **CQ Recepção (`RF-08`, `RN-03`)** — Aprova/Reprova matéria-prima recebida.
3. **CQ Final (`RF-08`)** — Aprova produto acabado.
4. **Inbox de Alertas (`RF-09`)** — cards dos alertas gerados no Campo.
5. **Painel-resumo do lote** — estado atual + mini-timeline (suporte ao pitch).

## 3. Componentes HTML/CSS/JS

- `industria.html`: layout de **dashboard** (ERP-like) com cabeçalho global, uma coluna de "Lotes na operação" e uma área de detalhe.
- `js/industria.js`: `getLote/listLotes/patchLote/addEvento` de `db.js`. Renderiza alertas com `getLote().alertas`.
- Componentes: `.rl-card`, `.rl-badge` (status etapas), `.rl-semaforo`, lista de alertas com `.rl-card` severidade alta destacada (borda vermelha).

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
3. **CQ Final (`RF-08`):** mesma mecânica antes da expedição ao varejo; grava `producao.unidades` (número fixo do seed serve).
4. **Inbox de alertas (`RF-09`):** liste `lote.alertas` ordenados por `ts` desc. Severidade `alta` com destaque visual. Se vazio, estado vazio amigável ("Sem alertas — cadeia saudável").
5. **Resumo:** mostre o semáforo logístico recebido e os carimbos de tempo. Não recalcule logística aqui — apenas leia.

## 5. Critérios de aceitação

- [ ] "Receber lote" calcula e exibe o tempo total de trânsito e muda `status` para `industria`.
- [ ] CQ Aprova/Reprova persiste; **reprovado bloqueia o avanço** (RN-03 visível).
- [ ] O alerta criado na Fase 1 (praga) aparece como card de severidade alta.
- [ ] Painel funciona lendo só o seed (não depende de a Fase 1 estar pronta para começar a desenvolver).
- [ ] Visual consistente com o CSS global; botão "Resetar Demo" presente.

## 6. Fora de escopo

IoT/sensores reais, previsão de manutenção real, gráficos de gargalo dinâmicos, multiusuário. Won't (o "cruzamento de tempos por IA" é narrado no pitch, não implementado).
