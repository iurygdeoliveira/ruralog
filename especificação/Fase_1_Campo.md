# Fase 1 — O Campo (App do Produtor/Extrativista de Açaí)

> Coração da demo: é aqui que o lote `ACAI-TO-2026-001` **nasce** e o QR é gerado.

| Campo | Valor |
|---|---|
| **Dono** | Dev 1 |
| **Arquivo principal** | `index.html` (+ `js/campo.js`) |
| **Tempo estimado** | 6h (com margem) |
| **Dependências** | **Fase 0** (db.js, style.css, ui.js, vendor/qrcode) |
| **Entrega testável** | Percorrer onboarding → manejo do açaizal → monitoramento fitossanitário → debulha/colheita e ver o QR com snapshot público gerado, com tudo persistido |

---

## 1. Objetivos

1. Demonstrar como o **produtor/extrativista de açaí** (P-01) registra o ciclo do açaizal num app simples e mobile-first.
2. Provar a **origem certificada** gerando o lote + QR Code que acompanha a carga de açaí debulhado.
3. Disparar o **alerta preditivo simulado** por praga específica do açaí, que aparecerá na Agroindústria (gancho de inovação).
4. Reforçar a promessa de uso em contexto extrativista com internet instável usando PWA mínimo e fallback de geolocalização.

## 2. Funcionalidades (telas)

1. **Onboarding** — cadastro do produtor/extrativista e do açaizal (`RF-01`).
2. **Manejo do Açaizal** — tipo de manejo: roçagem, desbaste de estipes (`RF-02`).
3. **Monitoramento Fitossanitário / Diário de Campo** — registra ocorrência de praga específica do açaí e **dispara alerta** (`RF-02`, `RF-03`, `RN-01`).
4. **Debulha/Colheita** — quantidade em kg + geolocalização simulada, **gera o lote** (`RF-04`). Momento que inicia o relógio de perecibilidade.
5. **QR Code** — exibe o QR apontando para a landing do consumidor (`RF-04`).

## 3. Componentes HTML/CSS/JS

- `index.html`: uma página com 5 "passos" (seções alternadas via JS, sem rotas). Use `.rl-card` por passo.
- `js/campo.js` (`type="module"`): importa `getLote/patchLote/addEvento/addAlerta/gerarSnapshotPublico/codificarSnapshot` de `db.js`, `montarHeader/toast/botaoReset` de `ui.js`, e `qrcode` de `vendor/`.
- Navegação por estado: variável `passoAtual` + função `mostrarPasso(n)`. Sem framework.
- Mobile-first: largura máx. ~480px centralizada, botões grandes, poucos campos por tela.

## 4. Instruções técnicas

1. **Onboarding (`RF-01`):** form com nome do produtor, nº do CAF (Cadastro Nacional da Agricultura Familiar, obrigatório), Cooperativa/Associação (opcional), município (select com cidades do TO — Araguatins, Esperantina, Axixá do Tocantins, Augustinópolis, etc.), nome do açaizal/propriedade, tipo de açaizal (nativo/cultivado). Geo: botão "Capturar localização" usando `navigator.geolocation`; se o navegador negar, demorar ou estiver sem GPS, gravar uma coordenada **fixa simulada** de Araguatins (-5.6472, -48.1247) e mostrar "Localização simulada para demo". `patchLote("ACAI-TO-2026-001", { produtor, tipoAcaizal })`.
2. **Manejo (`RF-02`):** lista de atividades de manejo. Tipo: select com opções "roçagem", "desbaste", "monitoramento", "aplicação". Campo de descrição livre. `patchLote(..., { manejo })` + `addEvento(id, { etapa:"manejo", ts, descricao:"Manejo registrado: " + tipo, icone:"🌿" })`.
3. **Monitoramento Fitossanitário (`RF-03` + `RN-01`):** lista de ocorrências. Ao adicionar uma com tipo **praga específica do açaí**, disparar alerta com texto adequado:
   ```js
   // Tabela de pragas e impacto:
   // "Podridão-do-cacho"     → redução 20-30%, severidade "alta"
   // "Broca-do-estipe"       → redução severa, severidade "critica"
   // "Pulgão-preto"          → redução 15%, severidade "media"
   // "Lagarta-desfolhadora"  → redução 15-20%, severidade "media"

   await addAlerta(id, {
     origem: "Campo · Açaizal " + lote.produtor.propriedade + " (" + lote.produtor.municipio + ")",
     severidade: "alta",
     praga: "Podridão-do-cacho",
     mensagem: "IA RuraLog: Podridão-do-cacho detectada no açaizal — entrega prevista de polpa será reduzida em 20-30%. Alerta enviado 8 semanas antes da entrega. Ajuste o planejamento da agroindústria.",
     ts: Date.now()
   });
   toast("Alerta fitossanitário enviado à agroindústria");
   ```
   Esse alerta é o que a Fase 3 vai exibir. Texto fixo = à prova de falha.
4. **Debulha/Colheita (`RF-04`):** quantidade (kg) + geo simulada. O campo `debulha_ts` marca o início do relógio de perecibilidade. `patchLote(..., { colheita: { data: Date.now(), debulha_ts: Date.now(), geo, quantidade_kg }, status:"campo" })` + evento `"debulha"` 🫐.
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
   Mostre o ID do lote (`ACAI-TO-2026-001`) em destaque e um botão "Copiar link" (fallback se o QR não escanear no palco).
   > O parâmetro `demo` é obrigatório para o pitch público: ele permite que o celular do jurado abra o passaporte completo sem depender do storage do computador da equipe.

6. **PWA mínimo (`RNF-08`):** garantir que `index.html` registre `sw.js` e que o app do Campo reabra sem internet depois do primeiro carregamento.

## 5. Critérios de aceitação

- [ ] Os 5 passos fluem numa página só, mobile-first, sem recarregar.
- [ ] Ao final, `getLote()` contém produtor, manejo, colheita (com `debulha_ts`) e `qrUrl` preenchidos.
- [ ] Registrar praga cria um alerta recuperável por `getLote().alertas`.
- [ ] O alerta menciona a praga específica, antecedência estimada (8 semanas) e redução de entrega de polpa (20-30%).
- [ ] O QR renderiza e, escaneado em um celular sem dados prévios, abre `consumidor.html?lote=ACAI-TO-2026-001&demo=...` com o passaporte completo.
- [ ] A geolocalização usa GPS quando possível e fallback simulado (Araguatins) quando necessário.
- [ ] O Campo reabre sem internet depois do primeiro carregamento.
- [ ] Botão "Resetar Demo" presente; após reset, o fluxo recomeça limpo.
- [ ] Visual idêntico ao header/CSS global da Fase 0.

## 6. Fora de escopo (não fazer)

Login real, foto/upload, múltiplas culturas simultâneas, rastreio GPS contínuo real, RFID, validação de CPF, interface em "rasas" com conversão automática (manter kg por simplicidade). São Won't.
