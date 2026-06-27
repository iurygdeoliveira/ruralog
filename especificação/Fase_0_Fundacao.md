# Fase 0 — Fundação (Base Compartilhada)

> **Bloqueia todas as outras fases.** Nada de telas antes daqui fechar.
> Stack: HTML5 + CSS3 + JS (ES6 modules). Sem framework, sem build.

| Campo | Valor |
|---|---|
| **Dono** | Dev 3 (CSS/Design) + Dev 1 (camada de dados) — em par |
| **Tempo estimado** | 4h (com margem) |
| **Dependências** | Nenhuma (é o ponto de partida) |
| **Entrega testável** | Uma página vazia que importa o CSS global e consegue criar/ler/resetar o lote-semente pelo console |

---

## 1. Objetivos

1. Definir o **contrato de dados** (schema do lote + API) que as 3 telas vão consumir, para que ninguém trave esperando o outro.
2. Entregar a **identidade visual global** (tokens de cor, tipografia, componentes base) num único `style.css`.
3. Entregar o **shell de navegação** (cabeçalho/menu comum) e o **dado-semente** + botão **Resetar Demo** (mitiga o risco RP-03).

## 2. Funcionalidades a implementar

- `RF-14` Timeline única do lote (estrutura + API de eventos).
- `RF-15` Reset da demo para o estado inicial.
- `RNF-05` CSS global consistente.
- `RNF-02` Persistência IndexedDB com fallback localStorage.

## 3. Componentes HTML/CSS/JS necessários

```
/ (raiz do repositório, servida pelo GitHub Pages)
├── index.html         (placeholder — Dev 1 preenche na Fase 1)
├── industria.html     (placeholder — Dev 2 preenche na Fase 3)
├── consumidor.html    (placeholder — Dev 3 preenche na Fase 5)
├── css/
│   └── style.css       ← ENTREGA DESTA FASE (tokens + componentes)
├── js/
│   ├── db.js           ← ENTREGA DESTA FASE (camada de dados)
│   ├── seed.js         ← ENTREGA DESTA FASE (dado-semente + reset)
│   └── ui.js           ← ENTREGA DESTA FASE (helpers: header, semáforo, toast)
└── vendor/
    └── qrcode.min.js   ← lib QR vendorizada (usada na Fase 1)
```

### 3.1 Contrato de dados — schema do lote (FONTE ÚNICA DA VERDADE)

```js
// O objeto que TODAS as telas leem/escrevem. Não mude as chaves sem avisar o time.
const lote = {
  id: "TO-2026-001",
  cultura: "Abacaxi",                 // matéria-prima regional do TO
  status: "campo",                    // campo|transito|industria|varejo|consumidor|reprovado
  agricultor: { nome: "", municipio: "", propriedade: "", geo: { lat: 0, lng: 0 } },
  plantio:   { data: null, cultura: "" },
  manejo:    [],                      // [{ data, tipo, agroquimico, praga }]
  alertas:   [],                      // [{ origem, severidade, mensagem, ts }]
  colheita:  { data: null, geo: { lat: 0, lng: 0 }, quantidade: 0 },
  qrUrl:     "",
  logistica: { expedicao_ts: null, recepcao_ts: null, status: "verde", limiteHoras: 12, checkpoints: [] },
  industria: {
    recepcao_ts: null,
    cqRecepcao: { status: null, obs: "" },   // "aprovado"|"reprovado"|null
    cqFinal:    { status: null, obs: "" },
    producao:   { inicio: null, fim: null, unidades: 0 }
  },
  varejo:    { recepcao_ts: null, validade: null, status: "verde" },
  privacidade: { mostrarOrigem: true, mostrarLaudos: false, mostrarLogistica: false, mostrarPrateleira: false },
  consumidor: { scans: [], opinioes: [] },
  timeline:  []                        // [{ etapa, ts, descricao, icone }] ← espinha do golden path
};
```

### 3.2 Contrato de API — `js/db.js` (assinaturas fixas)

```js
// Promessas simples. Implementar com IndexedDB; se indisponível, cair para localStorage.
export async function getLote(id = "TO-2026-001");          // → objeto lote (ou null)
export async function saveLote(lote);                       // grava o objeto inteiro
export async function patchLote(id, partial);               // merge raso + retorna lote atualizado
export async function addEvento(id, evento);                // empurra { etapa, ts, descricao, icone } na timeline
export async function addAlerta(id, alerta);                // empurra alerta (usado pelo Campo, lido pela Indústria)
export async function resetDemo();                          // reescreve o seed e limpa o resto
export async function listLotes();                          // → [lote] (para telas que listam)
```

> **Regra de integração:** ninguém manipula `localStorage`/IndexedDB direto. Tudo passa por `db.js`. Assim a Fase 6 (integração) não vira caça-fantasma.

### 3.3 Identidade visual — tokens em `css/style.css`

```css
:root{
  --verde-campo:#2e7d32;   --verde-claro:#a5d6a7;
  --terra:#6d4c41;         --milho:#f9a825;
  --alerta-amarelo:#fbc02d;--alerta-vermelho:#c62828;--ok-verde:#2e7d32;
  --fundo:#f7f6f2;         --carta:#ffffff;  --texto:#243027;  --texto-suave:#5b6b60;
  --raio:14px;  --sombra:0 6px 20px rgba(0,0,0,.08);
  --fonte:'Segoe UI',system-ui,sans-serif;
}
```

Componentes obrigatórios (classes reutilizáveis): `.rl-header`, `.rl-card`, `.rl-btn` / `.rl-btn--primario`, `.rl-input`, `.rl-badge`, `.rl-semaforo` (`--verde/--amarelo/--vermelho`), `.rl-timeline`, `.rl-toast`.

### 3.4 Helpers — `js/ui.js`

```js
export function montarHeader(titulo, ativo);   // cabeçalho comum com links index/industria/consumidor
export function semaforo(status);              // retorna <span class="rl-semaforo rl-semaforo--{status}">
export function toast(msg);                     // feedback rápido na tela
export function fmtData(ts);                    // formatação pt-BR
export function botaoReset();                   // injeta botão "Resetar Demo" → chama db.resetDemo()
```

## 4. Instruções técnicas

1. Crie a estrutura de pastas acima. Os 3 `*.html` ficam como placeholders mínimos importando `css/style.css` e `js/ui.js` (`<script type="module">`).
2. Implemente `db.js` com IndexedDB (1 store `lotes`, keyPath `id`). Faça um `try/catch`: se IndexedDB falhar, use `localStorage` com a mesma interface. **Teste os dois caminhos.**
3. Implemente `seed.js` exportando o objeto-semente (lote `TO-2026-001` já com agricultor, cultura e plantio preenchidos, status `campo`, timeline com 1 evento). `resetDemo()` grava esse objeto.
4. Vendorize uma lib de QR pequena em `vendor/qrcode.min.js` (ex.: `qrcode-generator` ou `qrcodejs`) — **arquivo local, sem CDN em runtime**. Apenas baixe e commite.
5. Escreva o `style.css` com os tokens e os componentes. Garanta aparência idêntica nas 3 páginas.
6. Sirva localmente com qualquer servidor estático (ex.: extensão Live Server do VS Code) — IndexedDB e `type="module"` exigem `http://`, não `file://`.

## 5. Critérios de aceitação (Definition of Done)

- [ ] `await db.getLote()` retorna o lote-semente; `await db.resetDemo()` restaura o estado inicial.
- [ ] `addEvento` e `addAlerta` persistem e sobrevivem a um refresh.
- [ ] As 3 páginas placeholder carregam o mesmo header e o mesmo CSS, visualmente idênticas.
- [ ] O botão "Resetar Demo" funciona em qualquer página.
- [ ] Tudo roda em `http://localhost` sem internet.
- [ ] Schema e assinaturas de `db.js` **congelados** e comunicados aos 3 devs (este é o handoff que destrava as Fases 1, 3 e 5).
