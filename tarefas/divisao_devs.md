# Divisão de Tarefas - Protótipo Ruralog (Hackathon 48h)

Esta é a organização do trabalho para o desenvolvimento do protótipo simulado do Ruralog (stack HTML/CSS/JS), dividida entre os 3 desenvolvedores da equipe.

## 🧑‍💻 Dev 1: O Campo
**Responsabilidade:** App do Agricultor (Fluxo principal da demonstração)
**Arquivo Principal:** `index.html`

*   **Telas/Fluxos a desenvolver:**
    1.  Cadastro / Onboarding
    2.  Registro de Plantio
    3.  Manejo (Diário de Campo)
    4.  Colheita
    5.  Geração do QR Code

## 🧑‍💻 Dev 2: A Indústria e o Varejo
**Responsabilidade:** Painel da Indústria + Dashboard do Varejo
**Arquivo Principal:** `industria.html` (e telas relativas ao varejo)

*   **Telas/Fluxos a desenvolver:**
    1.  Recepção de Lotes (Catraca Digital)
    2.  Controle de Qualidade (CQ)
    3.  Recepção dos Alertas Preditivos (Gerados pela Etapa 1)
    4.  Semáforo de Atraso/Validade (Visão Varejo)

## 🧑‍💻 Dev 3: O Consumidor e Identidade Visual
**Responsabilidade:** Landing Page do Consumidor + Design/CSS Global
**Arquivo Principal:** `consumidor.html` (e arquivos de `style.css`)

*   **Telas/Fluxos a desenvolver:**
    1.  Página pública aberta via QR Code
    2.  Exibição da Jornada do Produto (Origem)
    3.  Formulário de Pesquisa de Opinião
    4.  Garantir a identidade visual global, componentizando o CSS para as outras telas.

---

## 🔧 Detalhes Técnicos da Integração

1.  **Tráfego de Dados (Sem Backend):** 
    Toda a persistência de dados para a simulação ocorrerá através de **IndexedDB** e **localStorage**. Isso permitirá que o `index.html` gere um lote de teste e o `industria.html` consiga visualizá-lo e aprová-lo diretamente no navegador.
2.  **O QR Code Final:** 
    O QR Code impresso e gerado na etapa do campo/indústria apontará para uma URL hospedada no **GitHub Pages** com snapshot público do lote (ex: `https://[usuario].github.io/ruralog/consumidor.html?lote=TO-2026-001&demo=...`). Isso garante que o celular do jurado abra a landing completa mesmo sem ter o IndexedDB/localStorage do computador da equipe.
3.  **Plano de Contingência:** 
    Caso a rede no evento esteja instável durante o pitch, o QR Code e as páginas devem estar preparados para rodar em `localhost`. O app do Campo deve ter PWA mínimo para reabrir sem internet depois do primeiro carregamento.
