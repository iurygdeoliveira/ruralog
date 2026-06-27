# Fase 2 — A Logística (Trânsito e Semáforo)

> Fase enxuta, mas é o que prova a frente de **logística e redução de desperdício**.

| Campo | Valor |
|---|---|
| **Dono** | Dev 1 (continua do Campo) |
| **Arquivo principal** | seção de expedição em `index.html` (+ `js/logistica.js`) |
| **Tempo estimado** | 3h (com margem) |
| **Dependências** | **Fase 1** (lote criado com colheita) |
| **Entrega testável** | Expedir o lote, ver o cronômetro e o semáforo mudarem de cor por regra de tempo |

---

## 1. Objetivos

1. Iniciar o **cronômetro de trânsito** na expedição da fazenda.
2. Sinalizar automaticamente o **risco por tempo** (semáforo verde/amarelo/vermelho) — base da redução de perda em perecíveis.

## 2. Funcionalidades

1. **Expedição** — embarque da carga, marca `expedicao_ts` (`RF-05`).
2. **Status logístico (semáforo)** — calcula cor por tempo decorrido vs. `limiteHoras` (`RF-06`, `RN-02`).
3. **Checkpoint manual (opcional/Could)** — botão que registra parada (`logistica.checkpoints`).

## 3. Componentes HTML/CSS/JS

- Uma `.rl-card` "Logística" em `index.html` com: botão **Expedir**, cronômetro, badge de semáforo (`ui.semaforo()`).
- `js/logistica.js`: lê/escreve `logistica` via `patchLote`; usa `setInterval` para atualizar o cronômetro na tela.

## 4. Instruções técnicas

1. **Expedir (`RF-05`):**
   ```js
   await patchLote(id, { status:"transito", logistica:{ ...lote.logistica, expedicao_ts: Date.now() } });
   await addEvento(id, { etapa:"expedicao", ts: Date.now(), descricao:"Carga embarcada na fazenda", icone:"🚚" });
   ```
2. **Semáforo (`RF-06` + `RN-02`):** função pura de cálculo:
   ```js
   function statusLogistico(expedicao_ts, limiteHoras){
     if(!expedicao_ts) return "verde";
     const horas = (Date.now() - expedicao_ts) / 3.6e6;
     if (horas <= limiteHoras*0.7) return "verde";
     if (horas <= limiteHoras)     return "amarelo";
     return "vermelho";
   }
   ```
   **Truque de palco:** para a demo não esperar horas reais, exponha um **acelerador de tempo** (ex.: `limiteHoras` baixo no seed, ou um botão "+1h" que soma offset). Documente isso só para o time; no pitch parece tempo real.
3. **Persistir status** sempre que mudar de faixa e adicionar evento quando virar amarelo/vermelho (ex.: "⚠️ Lote em atenção: tempo de trânsito elevado").
4. **Checkpoint (Could):** botão "Registrar parada" → push em `logistica.checkpoints` com `ts`.

## 5. Critérios de aceitação

- [ ] Expedir marca `expedicao_ts` e muda `status` para `transito`.
- [ ] O semáforo reflete a regra RN-02 e atualiza na tela sem refresh.
- [ ] Há forma controlada de demonstrar amarelo/vermelho em segundos (acelerador).
- [ ] Eventos de logística aparecem na timeline do lote (visíveis depois na Fase 5).

## 6. Fora de escopo

Rastreio GPS real, integração com transportadora, mapa em tempo real. Won't.
