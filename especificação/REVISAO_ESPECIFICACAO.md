# Revisão da Especificação RuraLog

Data: 2026-06-27  
Base analisada:
- `projeto/guia_desafio_fieto.md`
- `projeto/projeto_ruralog.md`
- `especificação/00_INDICE.md`
- `especificação/projeto.md`
- `especificação/Fase_0_Fundacao.md` a `Fase_6_Integracao_e_Pitch.md`

## Parecer executivo

A especificação está bem alinhada ao Desafio Industrial FIETO: resolve problemas reais de logística, desperdício, rastreabilidade, eficiência produtiva e valorização regional, com bom recorte para um hackathon de 48h.

O principal acerto foi transformar a ideia original, que era ampla e com 20 pontos de rastreio, em um MVP demonstrável com um lote único (`TO-2026-001`) e um golden path completo: Campo -> Logística -> Indústria -> Varejo -> Consumidor.

Antes da codificação, porém, recomendo corrigir alguns pontos para evitar quebra de demo, promessa desalinhada no pitch e ambiguidade entre os devs. O achado mais crítico é que o QR Code público, se aberto no celular do jurado, não terá acesso aos dados salvos no IndexedDB/localStorage do computador da equipe.

## Recomendações prioritárias

| Prioridade | Achado | Risco | Recomendação de correção |
|---|---|---|---|
| Crítica | O QR Code aponta para `consumidor.html?lote=TO-2026-001`, mas os dados do lote ficam no IndexedDB/localStorage do navegador onde a equipe operou a demo. Um celular externo não enxergará esses dados. | A landing pública pode abrir vazia ou com dados incompletos no celular do jurado, afetando diretamente Qualidade do Protótipo e Pitch. | Alterar Fase 1 e Fase 5 para suportar um `snapshot` no QR. Exemplo: `consumidor.html?lote=TO-2026-001&demo=<base64-json>`. A landing deve carregar nesta ordem: `demo` da URL -> IndexedDB/localStorage -> seed local. Para o pitch, gerar o QR final depois do golden path e testar em dois celulares. |
| Alta | A ideia original fala em App PWA offline-first para o agricultor. A especificação atual usa HTML/CSS/JS estático, mas não prevê `manifest.json`, service worker ou cache offline real. | Pode haver desalinhamento entre a promessa de inclusão digital/offline e o protótipo entregue. | Escolher uma das duas rotas: implementar PWA mínimo para o Campo (`manifest.json` + service worker cacheando HTML/CSS/JS/vendor/seed) ou ajustar o discurso para "protótipo web local com contingência offline em localhost". Minha recomendação: fazer PWA mínimo só para reforçar o diferencial regional. |
| Alta | O alerta preditivo é o diferencial central da ideia original, mas aparece como `Should` em RF-03/RF-09, enquanto R-01 marca como `Must`. | Se for cortado por tempo, a solução vira uma rastreabilidade comum e perde força em Inovação. | Promover RF-03 e RF-09 para `Must` no MVP. Manter a IA simulada por regra, mas apresentar como "rastreabilidade preditiva demonstrada". Usar datas do seed para mostrar antecipação: ex. "alerta 8 semanas antes da entrega prevista", aproximando da ideia original de meses de antecedência. |
| Alta | A etapa da Indústria foi reduzida demais em relação à ideia original. O original prevê recepção, CQ recepção, almoxarifado, CQ pré-produção, processamento, CQ final, armazenamento e expedição. A especificação implementa recepção, CQ recepção e CQ final, mas não explicita expedição para o varejo. | A Fase 4 depende de "lote aprovado e expedido pela indústria", mas não há RF/campo/evento claro para essa expedição. Isso pode gerar integração confusa. | Adicionar na Fase 3 um fluxo simplificado: "Produzir lote" -> "CQ Final" -> "Expedir para varejo". Incluir `industria.expedicao_varejo_ts` no schema e evento `expedicao_varejo` na timeline. Não precisa implementar todos os pontos originais, mas o handoff para varejo precisa existir. |
| Alta | O Painel de Privacidade está como `Could` em RF-11, mas aparece como parte importante da Fase 4, da landing B2C/B2B e da defesa de privacidade/LGPD. | Se ficar opcional demais, a landing pode não demonstrar o controle B2B/B2C prometido e a resposta sobre privacidade fica fraca. | Reclassificar RF-11 como `Should` forte ou `Must` simplificado. Escopo mínimo: dois botões, "Perfil B2C" e "Perfil B2B", alterando os blocos exibidos na landing. |

## Inconsistências e ajustes recomendados por etapa

### Fase 0 - Fundação

1. **Contradição sobre abrir arquivo direto**
   - Em `projeto.md`, RNF-01 diz "Roda abrindo o arquivo / GitHub Pages".
   - Em `Fase_0_Fundacao.md`, a instrução técnica diz corretamente que `type="module"` e IndexedDB exigem `http://`, não `file://`.
   - **Correção recomendada:** trocar RNF-01 para "Roda em servidor estático local (`localhost`) ou GitHub Pages". Não prometer abertura por `file://`.

2. **Schema precisa prever expedição da indústria para o varejo**
   - **Correção recomendada:** adicionar:
     ```js
     industria: {
       recepcao_ts: null,
       expedicao_varejo_ts: null,
       cqRecepcao: { status: null, obs: "" },
       cqFinal: { status: null, obs: "" },
       producao: { inicio: null, fim: null, unidades: 0 }
     }
     ```

3. **Snapshot público para QR**
   - **Correção recomendada:** criar helper em `ui.js` ou `db.js` para gerar uma versão pública e pequena do lote:
     ```js
     export function gerarSnapshotPublico(lote) {
       return {
         id: lote.id,
         cultura: lote.cultura,
         agricultor: {
           municipio: lote.agricultor.municipio,
           propriedade: lote.agricultor.propriedade
         },
         plantio: lote.plantio,
         colheita: lote.colheita,
         industria: lote.industria,
         varejo: lote.varejo,
         privacidade: lote.privacidade,
         timeline: lote.timeline
       };
     }
     ```
   - Esse snapshot evita depender do storage privado de outro navegador.

### Fase 1 - Campo

1. **GPS automático vs. geolocalização simulada**
   - A ideia original diz que o app captura coordenada GPS automaticamente na colheita.
   - A especificação usa coordenada fixa simulada por município.
   - **Correção recomendada:** implementar botão "Capturar localização" com `navigator.geolocation` e fallback para coordenada simulada. Se não houver tempo, manter simulado, mas ajustar texto do pitch para "GPS simulado no protótipo".

2. **Offline-first/PWA**
   - **Correção recomendada:** para preservar o diferencial da ideia original, adicionar `manifest.json` e service worker simples cacheando assets do Campo. Caso não seja implementado, mover "PWA offline-first" para roadmap e não vender como funcional no protótipo.

3. **Alerta preditivo precisa parecer antecipado**
   - O texto atual fala "praga detectada -> redução de 20%", mas a métrica M-01 fala semanas antes e a ideia original fala meses antes.
   - **Correção recomendada:** o alerta deve mencionar entrega prevista e antecedência:
     > "Praga registrada na Fazenda X. Entrega prevista para 20/09/2026 com risco de redução de 20%. Alerta enviado 8 semanas antes para ajuste da produção."

4. **QR/RFID**
   - A ideia original cita QR Code/Tag RFID. A especificação implementa só QR Code.
   - **Correção recomendada:** manter só QR no MVP e registrar RFID como roadmap. Evitar prometer RFID no pitch final.

### Fase 2 - Logística

1. **Checkpoints manuais ficaram opcionais**
   - A ideia original diferencia cargas de alto valor com GPS e cargas de baixo valor com checkpoints manuais.
   - A especificação corta GPS real, o que é adequado para 48h, mas deixa checkpoint como `Could`.
   - **Correção recomendada:** transformar checkpoint manual em `Should` simples, com um botão "Registrar checkpoint". Isso aproxima o MVP da ideia original sem custo alto.

2. **Semáforo por tempo precisa de explicação de demo**
   - O acelerador de tempo é correto, mas precisa ser tratado como ferramenta interna.
   - **Correção recomendada:** manter no protótipo como controle discreto de demo. No pitch, explicar a regra de negócio, não o truque.

### Fase 3 - Indústria

1. **Falta fluxo industrial mínimo até expedição**
   - **Correção recomendada:** acrescentar na Fase 3:
     - botão "Iniciar processamento";
     - campo/unidade produzida simples;
     - CQ final;
     - botão "Expedir para varejo".
   - Cada ação deve escrever evento na timeline. Isso representa de forma enxuta os pontos 10 a 15 da ideia original.

2. **IA de gargalo/manutenção foi cortada**
   - A ideia original menciona IA em background para gargalos e manutenção.
   - A especificação diz que isso será narrado no pitch, não implementado.
   - **Correção recomendada:** manter fora do MVP, mas criar um card estático no painel da indústria chamado "Insight operacional simulado", por exemplo:
     > "Tempo de trânsito acima da média. Priorizar processamento do lote."
   - Isso sustenta a narrativa sem prometer manutenção preditiva real.

### Fase 4 - Varejo

1. **Notificação do gerente virou apenas semáforo/banner**
   - A ideia original fala em notificar automaticamente o gerente quando o lote está perto de vencer.
   - **Correção recomendada:** além do semáforo, exibir card "Ação recomendada: promover lote nas próximas 24h". Isso demonstra a notificação sem precisar de push/email real.

2. **Privacidade precisa ser validada com QR público**
   - Se a landing for aberta em outro celular, ela só respeitará a privacidade se essa configuração estiver no snapshot do QR ou em dados estáticos acessíveis.
   - **Correção recomendada:** incluir `privacidade` no snapshot público do QR.

### Fase 5 - Consumidor

1. **Scan público registra horário, mas não localização**
   - A ideia original prevê localização e horário de forma anônima.
   - A especificação registra apenas `ts`.
   - **Correção recomendada:** registrar uma localização aproximada simulada ou opcional:
     ```js
     scans: [{ ts: Date.now(), localAproximado: "Palmas-TO", anonimo: true }]
     ```
   - Evitar pedir geolocalização real do consumidor no pitch, para não criar fricção e questionamento LGPD.

2. **Opinião do consumidor não volta para a indústria**
   - A ideia original diz que a pesquisa volta imediatamente para o painel da Indústria.
   - Na especificação, RF-13 é `Could` e a Fase 3 não prevê exibição das opiniões.
   - **Correção recomendada:** se o formulário de opinião for implementado, adicionar na Indústria um card simples "Feedback do consumidor" lendo `lote.consumidor.opinioes`. Se não houver tempo, cortar RF-13 do pitch.

3. **Fallback da landing precisa ser forte**
   - **Correção recomendada:** `consumidor.js` deve funcionar com:
     1. snapshot público via URL;
     2. lote salvo localmente;
     3. seed demonstrativo;
     4. estado vazio amigável.

### Fase 6 - Integração e Pitch

1. **Teste real do QR precisa considerar outro dispositivo**
   - **Correção recomendada:** adicionar ao checklist:
     - [ ] QR testado em celular que nunca abriu o projeto antes.
     - [ ] Landing abre com dados completos mesmo sem IndexedDB/localStorage prévio.
     - [ ] QR fallback testado sem internet, usando IP local ou página já aberta/cacheada.

2. **O pitch deve alinhar promessa e protótipo**
   - **Correção recomendada:** antes do ensaio final, revisar o roteiro para não prometer:
     - GPS real, se ficar simulado;
     - RFID, se não existir;
     - IoT real, se for só roadmap;
     - IA real, se for regra fixa;
     - blockchain/hash, se não for implementado.

## Pontos bons que devem ser preservados

- O recorte de um lote único (`TO-2026-001`) é adequado para 48h.
- A divisão por fases e devs está clara.
- O botão "Resetar Demo" é essencial e deve permanecer como `Must`.
- A IA simulada por regra é uma boa decisão para reduzir risco técnico.
- O foco no consumidor escaneando QR no próprio celular é forte para a banca, desde que o problema de dados entre dispositivos seja resolvido.
- A narrativa atende bem aos critérios do desafio: aderência, viabilidade, inovação, protótipo, modelo de negócio e pitch.

## Correções mínimas antes de começar a codar

Se a equipe quiser corrigir apenas o essencial antes da implementação, eu priorizaria estes 6 ajustes:

1. Resolver o QR entre dispositivos com snapshot público ou seed público robusto.
2. Promover alerta preditivo (`RF-03` e `RF-09`) para `Must`.
3. Adicionar expedição da indústria para o varejo no schema e na Fase 3.
4. Decidir e documentar PWA offline-first: implementar mínimo ou ajustar promessa.
5. Reclassificar painel de privacidade (`RF-11`) como `Should` forte ou `Must` simplificado.
6. Corrigir RNF-01 para servidor estático/GitHub Pages, não `file://`.

Com esses ajustes, a especificação fica pronta para codificação com menos risco de quebra no pitch e mais fidelidade à ideia original do RuraLog.
