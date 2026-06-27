# RuraLog — Índice da Especificação (MVP de Pitch · Hackathon FIETO 2026)

> Pacote gerado com a metodologia **idea-to-spec**, adaptado para entrega **faseada**.
> Stack: **HTML5 + CSS3 + JavaScript (ES6+)** puro. Sem frameworks, sem build tools, sem backend.
> Objetivo: **vender uma ideia robusta e crível a uma banca de jurados** — não uma aplicação comercial.

---

## Como ler este pacote

| Arquivo | Para quê |
|---|---|
| `projeto.md` | **Núcleo da especificação**: visão, dores, requisitos (RF/RNF), regras, restrições, matriz de rastreabilidade e ordem do MVP. Leia primeiro. |
| `Fase_0_Fundacao.md` | Base compartilhada (CSS, camada de dados, shell, dados-semente). **Bloqueia todas as outras.** |
| `Fase_1_Campo.md` | App do Agricultor (Dev 1). |
| `Fase_2_Logistica.md` | Trânsito e semáforo do lote (Dev 1). |
| `Fase_3_Industria.md` | Painel da Indústria (Dev 2). |
| `Fase_4_Varejo.md` | Dashboard do Varejo + Painel de Privacidade (Dev 2). |
| `Fase_5_Consumidor.md` | Landing pública via QR Code (Dev 3). |
| `Fase_6_Integracao_e_Pitch.md` | Teste ponta-a-ponta, deploy e roteiro de pitch (Todos). |

---

## Sequência e dependências

```
                       ┌──────────────────────────────┐
                       │  FASE 0 — Fundação (bloqueia) │
                       │  data-layer + CSS + shell+seed│
                       └───────────────┬──────────────┘
            ┌──────────────────────────┼──────────────────────────┐
            ▼                          ▼                          ▼
   ┌─────────────────┐       ┌──────────────────┐       ┌──────────────────┐
   │ FASE 1 — Campo  │       │ FASE 3 — Indústria│       │ FASE 5 — Consumidor│
   │ (Dev 1)         │       │ (Dev 2)           │       │ (Dev 3)            │
   └────────┬────────┘       └────────┬─────────┘       └─────────┬────────┘
            ▼                          ▼                           │
   ┌─────────────────┐       ┌──────────────────┐                 │
   │ FASE 2 —Logística│       │ FASE 4 — Varejo  │                 │
   │ (Dev 1)         │       │ (Dev 2)           │                 │
   └────────┬────────┘       └────────┬─────────┘                 │
            └──────────────────────────┴───────────────────────────┘
                                       ▼
                       ┌──────────────────────────────┐
                       │ FASE 6 — Integração + Pitch   │
                       │ (Todos)                       │
                       └──────────────────────────────┘
```

**Regra de ouro:** ninguém começa a codar telas antes da **Fase 0** estar fechada (o contrato da camada de dados é o que permite os 3 devs trabalharem em paralelo sem se atropelar).

---

## Orçamento de tempo (horas-desenvolvedor)

| Fase | Dono | Estimativa | Margem incluída |
|---|---|---:|---|
| Fase 0 — Fundação | Dev 3 (CSS) + Dev 1 (dados) | 4h | sim |
| Fase 1 — Campo | Dev 1 | 6h | sim |
| Fase 2 — Logística | Dev 1 | 3h | sim |
| Fase 3 — Indústria | Dev 2 | 6h | sim |
| Fase 4 — Varejo | Dev 2 | 4h | sim |
| Fase 5 — Consumidor | Dev 3 | 5h | sim |
| Fase 6 — Integração + Pitch | Todos | 5h | sim |
| **Total bruto (soma)** | | **33h** | |

### Carga por desenvolvedor (com paralelismo)

| Dev | Fases | Horas | Folga no fim de semana¹ |
|---|---|---:|---|
| Dev 1 | 0 (dados) + 1 + 2 | ~11h | confortável |
| Dev 2 | 3 + 4 | ~10h | confortável |
| Dev 3 | 0 (CSS) + 5 | ~9h | confortável |
| Todos | 6 (integração) | ~5h | crítico, deixar p/ domingo de manhã |

¹ As 48h do evento incluem talks, refeições, sono e pré-pitches. A janela real de código é ~20–24h por pessoa, então o plano cabe com **folga deliberada** para imprevistos e ensaio do pitch.

---

## Princípio de priorização (corte impiedoso)

Tudo que **não aparece na demo do golden path** (`TO-2026-001`) é **Could/Won't**. Em ordem de defesa:

1. **Must (faz ou morre):** Campo → QR → Indústria(CQ) → Varejo(validade) → Consumidor(scan + origem). É a história inteira no palco.
2. **Should (fortalece a nota):** alerta preditivo simulado (Inovação), semáforo logístico, painel de privacidade B2B/B2C.
3. **Could (se sobrar tempo):** pesquisa de opinião do consumidor voltando ao painel, múltiplos lotes, gráficos.
4. **Won't (no MVP):** login/autenticação real, IoT real, rastreio GPS real, multiusuário, qualquer backend.

---

## Checklist de "pronto para o pitch"

- [ ] Um lote percorre as 5 etapas sem recarregar dados manualmente.
- [ ] O QR Code gerado no Campo abre a landing do Consumidor no celular.
- [ ] Tudo roda em `localhost` (plano de contingência sem internet).
- [ ] Botão "Resetar Demo" recoloca o cenário no estado inicial em 1 clique.
- [ ] Identidade visual idêntica nas 3 páginas (`index`, `industria`, `consumidor`).
- [ ] Roteiro de 5 min ensaiado, casado com os critérios de avaliação.
