# Fase 2 — A Logística (Corrida Contra a Oxidação do Açaí)

> Fase enxuta, mas é o que prova a frente de **logística e redução de perda por oxidação** — o açaí fruto oxida em horas, não dias.

| Campo | Valor |
|---|---|
| **Dono** | Dev 1 (continua do Campo) |
| **Arquivo principal** | seção de expedição em `index.html` (+ `js/logistica.js`) |
| **Tempo estimado** | 3h (com margem) |
| **Dependências** | **Fase 1** (lote criado com debulha) |
| **Entrega testável** | Expedir o lote de açaí, registrar checkpoint manual, ver o cronômetro de perecibilidade e o semáforo mudarem de cor conforme a janela biológica de 6h |

---

## 1. Objetivos

1. Iniciar o **cronômetro de perecibilidade** na expedição do açaizal, considerando a realidade de logística mista (fluvial/rodoviária) do Bico do Papagaio.
2. Sinalizar automaticamente o **risco de oxidação por tempo** (semáforo verde/amarelo/vermelho com janela de 6h) — base da prevenção de perda de antocianinas.

## 2. Funcionalidades

1. **Expedição** — embarque da carga de açaí debulhado, marca `expedicao_ts` (`RF-05`).
2. **Semáforo de perecibilidade** — calcula cor por tempo decorrido vs. `limiteHoras` de 6h (`RF-06`, `RN-02`).
3. **Checkpoint manual (Should)** — botão que registra parada (`logistica.checkpoints`) para representar paradas fluviais/rodoviárias sem GPS contínuo.

## 3. Componentes HTML/CSS/JS

- Uma `.rl-card` "Logística" em `index.html` com: botão **Expedir**, botão **Registrar checkpoint**, cronômetro de perecibilidade, badge de semáforo (`ui.semaforo()`).
- `js/logistica.js`: lê/escreve `logistica` via `patchLote`; usa `setInterval` para atualizar o cronômetro na tela.

## 4. Instruções técnicas

1. **Expedir (`RF-05`):**
   ```js
   await patchLote(id, { status:"transito", logistica:{ ...lote.logistica, expedicao_ts: Date.now() } });
   await addEvento(id, { etapa:"expedicao", ts: Date.now(), descricao:"Açaí debulhado embarcado — relógio de perecibilidade iniciado", icone:"🚚" });
   ```
2. **Semáforo de perecibilidade (`RF-06` + `RN-02`):** função pura de cálculo adaptada à janela biológica do açaí:
   ```js
   function statusLogistico(expedicao_ts, limiteHoras){
     if(!expedicao_ts) return "verde";
     const horas = (Date.now() - expedicao_ts) / 3.6e6;
     if (horas <= 3)            return "verde";    // Qualidade premium — máxima retenção de antocianinas
     if (horas <= 5)            return "amarelo";   // Início de oxidação — priorizar na fila de despolpamento
     return "vermelho";                             // Risco de fermentação — inspeção obrigatória no CQ
   }
   ```
   **Truque de palco:** para a demo não esperar horas reais, exponha um **acelerador de tempo** (ex.: `limiteHoras` baixo no seed, ou um botão "+1h" que soma offset). Documente isso só para o time; no pitch parece tempo real.
3. **Persistir status** sempre que mudar de faixa e adicionar evento quando virar amarelo/vermelho (ex.: "⚠️ Açaí em risco: tempo de trânsito acima de 3h — início de oxidação" ou "🔴 Açaí em risco crítico: acima de 6h — risco de fermentação, inspeção obrigatória").
4. **Checkpoint manual (Should):** botão "Registrar checkpoint" → push em `logistica.checkpoints` com `ts` e descrição curta (ex: "Porto fluvial", "Ponto rodoviário BR-010"). Também adicionar evento na timeline. Não usar mapa nem GPS contínuo.

## 5. Critérios de aceitação

- [ ] Expedir marca `expedicao_ts` e muda `status` para `transito`.
- [ ] "Registrar checkpoint" adiciona item em `logistica.checkpoints` e evento na timeline.
- [ ] O semáforo reflete a regra RN-02 (verde 0-3h, amarelo 3-5h, vermelho >6h) e atualiza na tela sem refresh.
- [ ] Há forma controlada de demonstrar amarelo/vermelho em segundos (acelerador).
- [ ] Eventos de logística aparecem na timeline do lote (visíveis depois na Fase 5).

## 6. Fora de escopo

Rastreio GPS real, integração com transportadora, mapa em tempo real, monitoramento fluvial real. Won't.
