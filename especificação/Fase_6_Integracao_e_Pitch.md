# Fase 6 — Integração End-to-End, Deploy e Pitch

> Onde as peças viram **uma história só**. É a fase que mais protege a nota (Protótipo 15 + Pitch 10) e mais costuma ser esquecida em hackathons.

| Campo | Valor |
|---|---|
| **Dono** | Todos (Dev 1 + Dev 2 + Dev 3) |
| **Tempo estimado** | 5h (com margem) — reservar para o **domingo de manhã** |
| **Dependências** | Fases 1–5 entregues |
| **Entrega testável** | Um lote de açaí percorre as 5 etapas sem intervenção manual nos dados, no ar via GitHub Pages e em localhost, com QR funcionando em celular sem dados prévios |

---

## 1. Objetivos

1. Garantir o **golden path contínuo** do lote `ACAI-TO-2026-001` (manejo do açaizal → debulha → despolpamento → polpa congelada → consumidor) sem "remendo" manual.
2. **Blindar a demo** contra falhas de palco (sem internet, estado sujo, QR que não abre).
3. **Publicar** e **ensaiar** o pitch de 5 minutos alinhado aos critérios da banca.
4. Validar que a promessa de PWA/offline, alerta preditivo fitossanitário e QR público corresponde ao protótipo entregue.

## 2. Tarefas

### 2.1 Integração de dados (Dev 1 + Dev 2)
- Rodar o fluxo inteiro numa aba só: Campo cria lote de açaí → Logística expede/checkpoint (cronômetro de perecibilidade) → Agroindústria recebe/CQ/despolpa/classifica/expede polpa → Varejo valida/privacidade → Consumidor abre QR.
- Conferir que **toda etapa escreve na `timeline`** e que o Consumidor lê tudo coerente.
- Validar `resetDemo()` recolocando o cenário a partir do zero.
- Gerar QR final com `?demo=` e confirmar que ele contém snapshot público suficiente para abrir a landing em outro navegador/celular.

### 2.2 Consistência visual (Dev 3)
- Passar nas 3 páginas garantindo header, cores, tipografia e espaçamento idênticos.
- Mobile-first conferido no celular real que será usado no pitch.
- Selo "Açaí do Tocantins" visível e coerente na landing do consumidor.

### 2.3 Blindagem (Todos) — mitiga RP-03
- [ ] Botão **"Resetar Demo"** visível e funcionando em todas as páginas.
- [ ] **Acelerador de tempo** (Fases 2 e 4) testado para demonstrar amarelo/vermelho em segundos.
- [ ] Estados vazios amigáveis (lote não encontrado, sem alertas) — nada de tela branca/erro.
- [ ] QR testado em celular que nunca abriu o projeto antes.
- [ ] Landing abre com dados completos pelo snapshot público, sem depender de IndexedDB/localStorage prévio.
- [ ] PWA mínimo do Campo testado: abrir uma vez, desligar internet e recarregar `index.html`.
- [ ] **Plano de contingência:** tudo roda em `http://localhost` sem internet (testar com Wi-Fi desligado).

### 2.4 Deploy (Dev 1)
- Publicar o repositório no **GitHub Pages** (`https://<usuario>.github.io/ruralog/`).
- Gerar o QR final apontando para a URL pública e **imprimir/colar** num produto-prop (embalagem de polpa de açaí de demonstração).
- O QR final deve incluir o parâmetro `demo` com snapshot público. Não usar apenas `?lote=ACAI-TO-2026-001`.
- **Testar o QR impresso com 2 celulares diferentes** antes do pitch.
- Manter cópia local pronta para servir em localhost como fallback.

### 2.5 Roteiro de Pitch (Todos) — alinhado aos critérios
- [ ] Ensaiar 5 min cronometrados.
- [ ] Casar cada momento da demo com um critério de avaliação (tabela abaixo).

## 3. Roteiro sugerido de 5 minutos

| Tempo | Cena | Critério que pontua |
|---|---|---|
| 0:00–0:40 | **Problema:** a cadeia do açaí no Tocantins perde por oxidação em horas — 70% das antocianinas se vão em 36h de atraso. O TO cresceu 739% na safra mas a cadeia informal ainda desperdiça. | Aderência ao desafio (25) |
| 0:40–1:40 | **Campo:** Seu João, extrativista em Araguatins (Bico do Papagaio), registra manejo do açaizal, detecta Podridão-do-cacho e dispara alerta com 8 semanas de antecedência para a agroindústria | Inovação (15) / Aderência |
| 1:40–2:30 | **Logística + Agroindústria:** cronômetro de perecibilidade de 6h, catraca digital com pesagem, branqueamento validado, despolpamento, classificação MAPA (Tipo A) e expedição da polpa congelada | Eficiência/Viabilidade (20) |
| 2:30–3:20 | **Varejo:** semáforo de validade para polpa congelada (6 meses), rotação FIFO; painel de privacidade B2B/B2C controla o QR — perfil B2B mostra laudos/classificação, B2C mostra selo de origem | Viabilidade (20) / Modelo de negócio (15) |
| 3:20–4:20 | **Clímax:** jurado escaneia o QR com o próprio celular e vê o "Passaporte do Açaí do Tocantins" — origem, classificação, tempo de processamento, selo regional | Protótipo (15) / Inovação (15) |
| 4:20–5:00 | **Impacto + modelo:** quem paga (agroindústria/varejo B2B, cooperativas), conformidade INC 02/2018, ganho de eficiência na corrida contra a oxidação e valorização do Açaí do Tocantins frente ao paraense | Modelo de negócio e impacto (15) |

> Frase-âncora: *"O tempo é o inimigo do açaí. O RuraLog congela o relógio — do açaizal nativo no Bico do Papagaio à polpa certificada na sua tigela."*

## 4. Critérios de aceitação (a demo está "pronta para a banca")

- [ ] Um lote de açaí vai de ponta a ponta sem editar dados na mão.
- [ ] O QR público com snapshot abre a landing num celular qualquer, inclusive sem storage prévio.
- [ ] Tudo roda offline em localhost (contingência validada).
- [ ] O Campo reabre sem internet após primeiro carregamento (PWA mínimo validado).
- [ ] "Resetar Demo" devolve o cenário inicial em 1 clique, na frente do júri se preciso.
- [ ] As 3 páginas são visualmente uma coisa só.
- [ ] Selo "Açaí do Tocantins" e classificação MAPA visíveis no passaporte do consumidor.
- [ ] Pitch de 5 min ensaiado e dentro do tempo.

## 5. Riscos finais a vigiar

- **RP-03 (demo quebra):** ensaiar com o ambiente exato do palco; ter o fallback localhost aberto numa aba.
- **Tempo:** se algo da Fase 4/5 (Could) não fechar, **corte sem dó** — o golden path Must já conta a história do açaí.
- **Promessa desalinhada:** não afirmar GPS real contínuo, RFID, IoT real (sensores de temperatura), blockchain/hash, IA real ou medição laboratorial de sólidos totais. No MVP, tudo isso é roadmap; o que está implementado é PWA mínimo, QR com snapshot, classificação MAPA simulada e IA simulada por regra.
