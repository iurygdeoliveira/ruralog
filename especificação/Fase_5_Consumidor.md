# Fase 5 — O Consumidor (Passaporte Público via QR)

> O "uau" visual do pitch: o jurado escaneia o QR com o próprio celular e vê a jornada do produto do TO.

| Campo | Valor |
|---|---|
| **Dono** | Dev 3 (também dona do CSS global) |
| **Arquivo principal** | `consumidor.html` (+ `js/consumidor.js`) |
| **Tempo estimado** | 5h (com margem) |
| **Dependências** | **Fase 0** (db.js, CSS). Lê privacidade da Fase 4, mas **degrada bem** se ausente (usa default B2C do seed) |
| **Entrega testável** | Abrir `consumidor.html?lote=TO-2026-001` no celular e ver a jornada + form de opinião |

---

## 1. Objetivos

1. Entregar a **landing pública** acessível pela câmera do celular comum, sem app, sem login.
2. **Valorizar o produto regional** mostrando origem (município do TO) e a jornada autorizada.
3. Coletar **opinião** do consumidor (inteligência de mercado de volta à indústria).

## 2. Funcionalidades

1. **Abertura via QR (`RF-12`)** — lê `?lote=` da URL, carrega o lote, registra scan anônimo.
2. **Jornada do Produto** — timeline filtrada pela privacidade (`RF-12`, `RN-04`).
3. **Pesquisa de Opinião (`RF-13`)** — 1–3 perguntas, salva no lote (Could).

## 3. Componentes HTML/CSS/JS

- `consumidor.html`: página **pública, mobile-first**, visual mais "consumidor" (caloroso, selo de origem TO).
- `js/consumidor.js`: lê `URLSearchParams`, `getLote`, `patchLote` (scan/opinião).
- Componentes: hero com cultura + município, `.rl-timeline` da jornada, selos/badges, form de opinião.

## 4. Instruções técnicas

1. **Carregar lote (`RF-12`):**
   ```js
   const id = new URLSearchParams(location.search).get("lote") || "TO-2026-001";
   const lote = await getLote(id);
   if(!lote){ /* estado vazio amigável: "Produto não encontrado" */ }
   // registra scan anônimo
   await patchLote(id, { consumidor:{ ...lote.consumidor, scans:[...lote.consumidor.scans, { ts:Date.now() }] } });
   ```
2. **Jornada filtrada por privacidade (`RN-04`):** renderize a `lote.timeline`, mas respeite `lote.privacidade`:
   - `mostrarOrigem` → bloco "Origem" (município do TO, agricultor, plantio/colheita). Default **true**.
   - `mostrarLogistica` → mostra tempos de trânsito; senão, **esconde**.
   - `mostrarPrateleira` → mostra validade/tempo de varejo; senão, esconde (default B2C esconde).
   - `mostrarLaudos` → mostra status de CQ (aprovado).
   > Importante: se a Fase 4 não tiver rodado, use o default do seed (B2C: só origem). A página **nunca** deve quebrar por falta de dados — sempre tenha fallback.
3. **Selo regional:** destaque visual "🌴 Produto do Tocantins" + município. Esse é o gancho da Frente D (valorização regional).
4. **Opinião (`RF-13` · Could):** form com nota (1–5 estrelas) + comentário curto. Salva em `lote.consumidor.opinioes`. Mostre "Obrigado!" após enviar. (Se faltar tempo, deixe só a nota.)

## 5. Critérios de aceitação

- [ ] `consumidor.html?lote=TO-2026-001` abre no celular e exibe a jornada.
- [ ] A página respeita a privacidade definida na Fase 4 (testar B2B vs B2C).
- [ ] Funciona com o seed mesmo sem as outras fases terem rodado (fallback robusto).
- [ ] Scan é registrado no lote; opinião (se implementada) persiste.
- [ ] Mobile-first impecável (é a tela que o jurado vê no próprio telefone) e visual coerente com o CSS global.

## 6. Fora de escopo

Mapa real de origem, compartilhamento social, login/conta, histórico de compras. Won't.

---

## Nota de design (responsabilidade transversal da Dev 3)

Além desta fase, a Dev 3 garante a **identidade visual global** (entregue na Fase 0) e revisa as 3 páginas na Fase 6 para consistência de cores, espaçamento e tipografia.
