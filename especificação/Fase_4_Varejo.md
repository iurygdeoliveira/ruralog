# Fase 4 — O Varejo (Dashboard de Validade + Painel de Privacidade)

> Reduz desperdício na prateleira e dá à indústria o controle do que o QR mostra (B2B/B2C).

| Campo | Valor |
|---|---|
| **Dono** | Dev 2 (continua da Indústria) |
| **Arquivo principal** | seção de varejo em `industria.html` (ou `varejo.html`) + `js/varejo.js` |
| **Tempo estimado** | 4h (com margem) |
| **Dependências** | **Fase 3** (lote aprovado no CQ final e com `industria.expedicao_varejo_ts`) |
| **Entrega testável** | Receber lote no varejo, ver semáforo de validade e configurar a privacidade do QR |

---

## 1. Objetivos

1. Demonstrar a **gestão ativa de validade** que evita desperdício no supermercado (P-03).
2. Entregar o **Painel de Privacidade**: a indústria define o que o consumidor vê (RN-04) — base do modelo B2B.
3. Garantir que a configuração de privacidade faça parte do snapshot público usado pelo QR.

## 2. Funcionalidades

1. **Recepção no Varejo (`RF-10`)** — supermercado recebe o lote, abre o dashboard de validade.
2. **Semáforo de Validade (`RF-10`, `RN-05`)** — sinaliza "vence em breve" e sugere promoção.
3. **Painel de Privacidade (`RF-11`, `RN-04`)** — atalhos/checkboxes B2B/B2C que controlam a landing do consumidor.

## 3. Componentes HTML/CSS/JS

- Seção/aba "Varejo" com `.rl-card` por lote + `.rl-semaforo` de validade.
- `.rl-card` "Privacidade do QR" com checkboxes mapeando `lote.privacidade`.
- `js/varejo.js`: `getLote/patchLote/addEvento`.

## 4. Instruções técnicas

1. **Pré-condição:** só permitir recepção no varejo se `lote.industria.cqFinal.status === "aprovado"` e `lote.industria.expedicao_varejo_ts` existir. Se faltar, mostrar estado "Aguardando expedição da indústria".
2. **Recepção (`RF-10`):**
   ```js
   const validade = Date.now() + 7*24*3.6e6; // 7 dias a partir do recebimento (ajuste no seed)
   await patchLote(id, { status:"varejo", varejo:{ recepcao_ts:Date.now(), validade, status:"verde" } });
   await addEvento(id, { etapa:"recepcao_varejo", ts:Date.now(), descricao:"Recebido no supermercado", icone:"🛒" });
   ```
3. **Semáforo de validade (`RN-05`):**
   ```js
   function statusValidade(validade){
     const dias = (validade - Date.now())/86.4e6;
     if (dias > 3) return "verde";
     if (dias > 0) return "amarelo";  // "vence em breve" → sugere promoção
     return "vermelho";               // vencido
   }
   ```
   Quando amarelo, mostre banner "Vence em breve — ação recomendada: promover lote nas próximas 24h" (mesma estratégia de acelerador de tempo da Fase 2 para demonstrar no palco).
4. **Painel de Privacidade (`RF-11` + `RN-04`):** 4 checkboxes ligados a `lote.privacidade` (`mostrarOrigem`, `mostrarLaudos`, `mostrarLogistica`, `mostrarPrateleira`). Botões de atalho: **"Perfil B2B"** (tudo true) e **"Perfil B2C"** (só origem). Persistir com `patchLote`. Isto é lido pela Fase 5 e também entra no snapshot público gerado no QR.

## 5. Critérios de aceitação

- [ ] Se a indústria ainda não expediu, o varejo mostra estado de bloqueio claro.
- [ ] Receber no varejo cria validade e mostra o semáforo correto (RN-05).
- [ ] Há como demonstrar o estado "vence em breve" rapidamente.
- [ ] Estado amarelo mostra ação recomendada de promoção, não apenas cor.
- [ ] Alterar a privacidade persiste e **muda o que a landing do consumidor exibe** (validar junto da Fase 5).
- [ ] "Perfil B2B" e "Perfil B2C" funcionam como atalhos.
- [ ] Visual consistente; "Resetar Demo" presente.

## 6. Fora de escopo

Integração com PDV/ERP do supermercado, preços/promoção real, multi-loja. Won't.
