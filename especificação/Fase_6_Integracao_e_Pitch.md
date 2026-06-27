# Fase 6 — Integração End-to-End, Deploy e Pitch

> Onde as peças viram **uma história só**. É a fase que mais protege a nota (Protótipo 15 + Pitch 10) e mais costuma ser esquecida em hackathons.

| Campo | Valor |
|---|---|
| **Dono** | Todos (Dev 1 + Dev 2 + Dev 3) |
| **Tempo estimado** | 5h (com margem) — reservar para o **domingo de manhã** |
| **Dependências** | Fases 1–5 entregues |
| **Entrega testável** | Um lote percorre as 5 etapas sem intervenção manual nos dados, no ar via GitHub Pages e em localhost |

---

## 1. Objetivos

1. Garantir o **golden path contínuo** do lote `TO-2026-001` (plantio → consumidor) sem "remendo" manual.
2. **Blindar a demo** contra falhas de palco (sem internet, estado sujo, QR que não abre).
3. **Publicar** e **ensaiar** o pitch de 5 minutos alinhado aos critérios da banca.

## 2. Tarefas

### 2.1 Integração de dados (Dev 1 + Dev 2)
- Rodar o fluxo inteiro numa aba só: Campo cria → Logística expede → Indústria recebe/CQ → Varejo valida/privacidade → Consumidor abre QR.
- Conferir que **toda etapa escreve na `timeline`** e que o Consumidor lê tudo coerente.
- Validar `resetDemo()` recolocando o cenário a partir do zero.

### 2.2 Consistência visual (Dev 3)
- Passar nas 3 páginas garantindo header, cores, tipografia e espaçamento idênticos.
- Mobile-first conferido no celular real que será usado no pitch.

### 2.3 Blindagem (Todos) — mitiga RP-03
- [ ] Botão **"Resetar Demo"** visível e funcionando em todas as páginas.
- [ ] **Acelerador de tempo** (Fases 2 e 4) testado para demonstrar amarelo/vermelho em segundos.
- [ ] Estados vazios amigáveis (lote não encontrado, sem alertas) — nada de tela branca/erro.
- [ ] **Plano de contingência:** tudo roda em `http://localhost` sem internet (testar com Wi-Fi desligado).

### 2.4 Deploy (Dev 1)
- Publicar o repositório no **GitHub Pages** (`https://<usuario>.github.io/ruralog/`).
- Gerar o QR final apontando para a URL pública e **imprimir/colar** num produto-prop (embalagem de demonstração).
- **Testar o QR impresso com 2 celulares diferentes** antes do pitch.
- Manter cópia local pronta para servir em localhost como fallback.

### 2.5 Roteiro de Pitch (Todos) — alinhado aos critérios
- [ ] Ensaiar 5 min cronometrados.
- [ ] Casar cada momento da demo com um critério de avaliação (tabela abaixo).

## 3. Roteiro sugerido de 5 minutos

| Tempo | Cena | Critério que pontua |
|---|---|---|
| 0:00–0:40 | **Problema:** a cadeia de alimentos do TO perde por falta de informação conectada | Aderência ao desafio (25) |
| 0:40–1:40 | **Campo:** Seu João registra plantio/manejo no celular; praga dispara alerta | Inovação (15) / Aderência |
| 1:40–2:30 | **Logística + Indústria:** semáforo de trânsito, catraca digital, CQ, e o **alerta preditivo** chega à Marina | Eficiência/Viabilidade (20) |
| 2:30–3:20 | **Varejo:** semáforo de validade evita desperdício; painel de privacidade B2B/B2C | Viabilidade (20) / Modelo de negócio (15) |
| 3:20–4:20 | **Clímax:** jurado escaneia o QR com o próprio celular e vê o passaporte do produto do TO | Protótipo (15) / Inovação (15) |
| 4:20–5:00 | **Impacto + modelo:** quem paga (indústria/varejo B2B), ganho de eficiência e valorização regional | Modelo de negócio e impacto (15) |

> Frase-âncora: *"Do plantio à prateleira, um QR conta a história inteira — e a indústria deixa de planejar às cegas."*

## 4. Critérios de aceitação (a demo está "pronta para a banca")

- [ ] Um lote vai de ponta a ponta sem editar dados na mão.
- [ ] O QR público abre a landing num celular qualquer.
- [ ] Tudo roda offline em localhost (contingência validada).
- [ ] "Resetar Demo" devolve o cenário inicial em 1 clique, na frente do júri se preciso.
- [ ] As 3 páginas são visualmente uma coisa só.
- [ ] Pitch de 5 min ensaiado e dentro do tempo.

## 5. Riscos finais a vigiar

- **RP-03 (demo quebra):** ensaiar com o ambiente exato do palco; ter o fallback localhost aberto numa aba.
- **Tempo:** se algo da Fase 4/5 (Could) não fechar, **corte sem dó** — o golden path Must já conta a história.
