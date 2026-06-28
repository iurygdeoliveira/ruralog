### **Etapa 1: O Campo (Do Manejo do Açaizal à Debulha)**

O objetivo foi expandido. Agora, o sistema não começa apenas na colheita, mas no manejo do açaizal. A ideia é gerar dados preditivos para que a agroindústria saiba com antecedência se haverá quebra de safra e possa ajustar sua produção de polpa.

* **Ação do Software:** Aplicativo PWA (Offline-first) para o produtor/extrativista de açaí. Ele gerencia o ciclo do açaizal, registrando o manejo (roçagem, desbaste de estipes), a safra e a debulha dos cachos, garantindo a certificação de origem do "Açaí do Tocantins".  
* **📍 Pontos de Rastreio (Data Capture):**  
  * **Ponto 1 (Onboarding):** Cadastro do Produtor/Extrativista (dados demográficos, geolocalização do açaizal — nativo ou cultivado — e capacidade produtiva estimada em kg).  
  * **Ponto 2 (O Manejo):** Registro do tipo de manejo realizado no açaizal: roçagem do sub-bosque, desbaste de estipes excedentes ou monitoramento de pragas.  
  * **Ponto 3 (Monitoramento Fitossanitário):** Diário de campo. O produtor registra ocorrências de pragas específicas do açaí (Podridão-do-cacho, Broca-do-estipe, Pulgão-preto, Lagarta-desfolhadora). *Neste momento, a IA do software analisa esses dados e envia um alerta para a agroindústria (ex: "Podridão-do-cacho detectada no açaizal da Fazenda Y — entrega prevista de polpa será reduzida em 20-30%. Ajuste o planejamento da fábrica com 8 semanas de antecedência").*  
  * **Ponto 4 (A Debulha/Colheita):** Geração do lote. Após a colheita dos cachos pelos peconheiros e a debulha (separação dos frutos do cacho), o app captura automaticamente a coordenada GPS (onde) e o *timestamp* (quando), gerando o QR Code que acompanhará a carga. **Este é o momento que inicia o relógio crítico de perecibilidade do açaí — o fruto oxida em questão de horas.**

### **Etapa 2: A Logística (Corrida Contra a Oxidação)**

Foco no monitoramento de rota e controle do tempo crítico de trânsito. O açaí fruto in natura tem perecibilidade extrema: após a debulha, o escurecimento enzimático já é detectável na primeira hora, e acima de 6 horas o risco de fermentação é severo.

* **Ação do Software:** Monitoramento de trânsito com semáforo de qualidade adaptado à janela biológica do açaí, considerando logística mista (fluvial/rodoviária) típica da região do Bico do Papagaio.  
* **📍 Pontos de Rastreio (Data Capture):**  
  * **Ponto 5 (Expedição do Açaizal):** Leitura do QR Code/GPS ao embarcar a carga. Inicia-se o cronômetro de perecibilidade.  
  * **Ponto 6 (Rastreio de Rota):**  
    * *Para cargas de alto valor:* Integração com dispositivo GPS do veículo/embarcação para rastreio em tempo real contínuo.  
    * *Para cargas de baixo valor:* Checkpoints manuais do transportador via leitura de QR Code em pontos de parada estratégicos (portos fluviais, pontos rodoviários).  
  * **Ponto 7 (Semáforo de Qualidade):** O sistema avalia automaticamente o tempo de trânsito:  
    * 🟢 **Verde (Qualidade Premium):** 0 a 3 horas — açaí fresco, máxima retenção de antocianinas.  
    * 🟡 **Amarelo (Início de Oxidação):** 3 a 5 horas — priorizar na fila de despolpamento.  
    * 🔴 **Vermelho (Risco de Fermentação):** Acima de 6 horas — lote rebaixado na classificação de qualidade, inspeção obrigatória no CQ.

### **Etapa 3: A Agroindústria (Despolpamento e Conformidade)**

Esta etapa é o "coração" operacional do sistema. O software acompanha cada passo do açaí dentro do chão de fábrica, desde a recepção até a polpa congelada. O processamento segue os Padrões de Identidade e Qualidade (PIQ) do MAPA.

* **Ação do Software:** Painel de gestão da agroindústria. Usa IA em *background* para cruzar os tempos de cada setor, identificar gargalos e priorizar lotes com risco de perda por oxidação.  
* **📍 Pontos de Rastreio (Data Capture):**  
  * **Ponto 8 (Recepção e Pesagem):** A "Catraca Digital". Leitura do lote ao chegar. O sistema calcula o tempo total de trânsito desde a debulha, encerra a viagem e realiza a pesagem definitiva em kg.  
  * **Ponto 9 (CQ Recepção):** Formulário de Controle de Qualidade avaliando o açaí fruto recém-chegado: cor, integridade dos frutos, presença de impurezas (Aprova/Reprova).  
  * **Ponto 10 (Branqueamento/Amolecimento):** Registro da imersão dos frutos em água a mínimo 80°C por pelo menos 10 segundos — etapa crítica para inativar enzimas de oxidação e eliminar patógenos. Campo obrigatório de validação de temperatura.  
  * **Ponto 11 (Despolpamento Mecânico):** Extração da polpa com adição técnica de água potável. Registro do início e fim do processamento.  
  * **Ponto 12 (CQ Final — Classificação):** Formulário de qualidade classificando a polpa conforme padrões MAPA:  
    * **Tipo A (Grosso/Especial):** Sólidos totais > 14%  
    * **Tipo B (Médio/Regular):** Sólidos totais 11-14%  
    * **Tipo C (Fino/Popular):** Sólidos totais 8-11%  
  * **Ponto 13 (Congelamento):** Registro de entrada no túnel de congelamento/câmara fria (-18°C a -25°C). Produto finalizado: "Polpa de Açaí Congelada".  
  * **Ponto 14 (Expedição):** Registro de saída da polpa congelada para distribuição ao varejo.

### **Etapa 4: O Varejo (Gestão da Cadeia de Frio e Prateleira)**

Foco em garantir a integridade da cadeia de frio e reduzir desperdício, além de dar à agroindústria o controle sobre seus próprios dados.

* **Ação do Software:** Portal do Cliente (Supermercados/Distribuidores) e Painel de Privacidade da Agroindústria.  
* **📍 Pontos de Rastreio (Data Capture):**  
  * **Ponto 15 (Recepção no Varejo):** O supermercado/distribuidor lê o lote ao receber a polpa congelada. Inicia-se o "Dashboard de Validade". Como a polpa congelada tem vida útil de 6 a 12 meses, o sistema notifica o gerente com antecedência para rotação de estoque (FIFO).  
  * **Ponto 16 (Painel de Privacidade):** A Agroindústria acessa o software e define o que o QR Code final vai mostrar. Ela pode criar um perfil B2B (mostrando laudos técnicos, classificação MAPA, tempo de logística e temperatura de branqueamento para o supermercado) e um perfil B2C (mostrando a origem do açaizal, município do Tocantins e tempo de processamento "debulha à polpa" para o consumidor).

### **Etapa 5: O Consumidor Final (Transparência e Valorização Regional)**

Fechando a cadeia com valorização do "Açaí do Tocantins" e coleta de inteligência de mercado.

* **Ação do Software:** Landing page pública, acessível via câmera do celular comum, que funciona como um "Passaporte de Qualidade do Açaí".  
* **📍 Pontos de Rastreio (Data Capture):**  
  * **Ponto 17 (Escaneamento Público):** O cliente final lê o QR Code da embalagem de polpa. O sistema registra (de forma anônima) a localização e o horário em que o produto foi consultado.  
  * **Ponto 18 (História e Origem):** Exibição da jornada autorizada pela agroindústria na Etapa 4: município de origem no Tocantins (Araguatins, Bico do Papagaio), tipo de açaizal (nativo/cultivado), classificação da polpa (Tipo A/B/C), selos de processamento ("Processado em menos de 5h após a colheita").  
  * **Ponto 19 (Pesquisa de Opinião):** Formulário rápido (1 a 3 perguntas) no final da página para avaliar o produto. Esse dado volta imediatamente para o painel da Agroindústria na Etapa 3.
