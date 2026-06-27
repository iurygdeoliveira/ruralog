# Fase 1 — O Campo (App do Agricultor)

> Coração da demo: é aqui que o lote `TO-2026-001` **nasce** e o QR é gerado.

| Campo | Valor |
|---|---|
| **Dono** | Dev 1 |
| **Arquivo principal** | `index.html` (+ `js/campo.js`) |
| **Tempo estimado** | 6h (com margem) |
| **Dependências** | **Fase 0** (db.js, style.css, ui.js, vendor/qrcode) |
| **Entrega testável** | Percorrer onboarding → plantio → manejo → colheita e ver o QR com snapshot público gerado, com tudo persistido |

---

## 1. Objetivos

1. Demonstrar como o **agricultor familiar** (P-01) registra o ciclo da cultura num app simples e mobile-first.
2. Provar a **origem certificada** gerando o lote + QR Code que acompanha a carga.
3. Disparar o **alerta preditivo simulado** que aparecerá na Indústria (gancho de inovação).
4. Reforçar a promessa de campo com internet instável usando PWA mínimo e fallback de geolocalização.

## 2. Funcionalidades (telas)

1. **Onboarding** — cadastro do agricultor (`RF-01`).
2. **Plantio** — data + cultura (`RF-02`).
3. **Manejo / Diário de Campo** — registra ocorrência (praga/agroquímico) e **dispara alerta** (`RF-02`, `RF-03`, `RN-01`).
4. **Colheita** — quantidade + geolocalização simulada, **gera o lote** (`RF-04`).
5. **QR Code** — exibe o QR apontando para a landing do consumidor (`RF-04`).

## 3. Componentes HTML/CSS/JS

- `index.html`: uma página com 5 "passos" (seções alternadas via JS, sem rotas). Use `.rl-card` por passo.
- `js/campo.js` (`type="module"`): importa `getLote/patchLote/addEvento/addAlerta/gerarSnapshotPublico/codificarSnapshot` de `db.js`, `montarHeader/toast/botaoReset` de `ui.js`, e `qrcode` de `vendor/`.
- Navegação por estado: variável `passoAtual` + função `mostrarPasso(n)`. Sem framework.
- Mobile-first: largura máx. ~480px centralizada, botões grandes, poucos campos por tela.

## 4. Instruções técnicas

1. **Onboarding (`RF-01`):** form com nome, município (select com cidades do TO), propriedade, cultura. Geo: botão "Capturar localização" usando `navigator.geolocation`; se o navegador negar, demorar ou estiver sem GPS, gravar uma coordenada **fixa simulada** do município e mostrar "Localização simulada para demo". `patchLote("TO-2026-001", { agricultor, cultura })`.
2. **Plantio (`RF-02`):** data (default hoje) + cultura. `patchLote(..., { plantio })` + `addEvento(id, { etapa:"plantio", ts, descricao:"Plantio registrado", icone:"🌱" })`.
3. **Manejo (`RF-03` + `RN-01`):** lista de ocorrências. Ao adicionar uma com tipo **"praga"**:
   ```js
   await addAlerta(id, {
     origem: "Campo · Fazenda " + lote.agricultor.propriedade,
     severidade: "alta",
     mensagem: "IA RuraLog: praga detectada — entrega prevista em 8 semanas com risco de redução de ~20% em " + lote.cultura + ". Ajuste o planejamento da fábrica.",
     ts: Date.now()
   });
   toast("Alerta enviado à indústria");
   ```
   Esse alerta é o que a Fase 3 vai exibir. Texto fixo = à prova de falha.
4. **Colheita (`RF-04`):** quantidade (kg) + geo simulada. `patchLote(..., { colheita, status:"campo" })` + evento `"colheita"` 🌾.
5. **QR Code (`RF-04`, `RN-06`):**
   ```js
   const base = location.origin + location.pathname.replace("index.html","");
   const loteAtualizado = await getLote(id);
   const snapshot = gerarSnapshotPublico(loteAtualizado);
   const demo = codificarSnapshot(snapshot);
   const qrUrl = base + "consumidor.html?lote=" + id + "&demo=" + encodeURIComponent(demo);
   await patchLote(id, { qrUrl });
   new QRCode(document.getElementById("qr"), { text: qrUrl, width: 220, height: 220 });
   ```
   Mostre o ID do lote em destaque e um botão "Copiar link" (fallback se o QR não escanear no palco).
   > O parâmetro `demo` é obrigatório para o pitch público: ele permite que o celular do jurado abra o passaporte completo sem depender do storage do computador da equipe.

6. **PWA mínimo (`RNF-08`):** garantir que `index.html` registre `sw.js` e que o app do Campo reabra sem internet depois do primeiro carregamento.

## 5. Critérios de aceitação

- [ ] Os 5 passos fluem numa página só, mobile-first, sem recarregar.
- [ ] Ao final, `getLote()` contém agricultor, plantio, manejo, colheita e `qrUrl` preenchidos.
- [ ] Registrar praga cria um alerta recuperável por `getLote().alertas`.
- [ ] O alerta de praga menciona antecedência estimada e redução de entrega, não apenas "praga detectada".
- [ ] O QR renderiza e, escaneado em um celular sem dados prévios, abre `consumidor.html?lote=TO-2026-001&demo=...` com o passaporte completo.
- [ ] A geolocalização usa GPS quando possível e fallback simulado quando necessário.
- [ ] O Campo reabre sem internet depois do primeiro carregamento.
- [ ] Botão "Resetar Demo" presente; após reset, o fluxo recomeça limpo.
- [ ] Visual idêntico ao header/CSS global da Fase 0.

## 6. Fora de escopo (não fazer)

Login real, foto/upload, múltiplas culturas simultâneas, rastreio GPS contínuo real, RFID, validação de CPF. São Won't.
