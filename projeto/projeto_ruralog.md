### **Etapa 1: O Campo (Do Cadastro à Colheita)**

O objetivo foi expandido. Agora, o sistema não começa apenas na colheita, mas na preparação do solo. A ideia é gerar dados preditivos para que a indústria saiba com meses de antecedência se faltará matéria-prima e possa ajustar sua produção.

* **Ação do Software:** Aplicativo PWA (Offline-first) para o agricultor familiar. Ele gerencia o ciclo de vida da cultura, registrando o plantio, o manejo e a colheita, garantindo a certificação de origem.  
* **📍 Pontos de Rastreio (Data Capture):**  
  * **Ponto 1 (Onboarding):** Cadastro do Agricultor Familiar (dados demográficos, geolocalização da propriedade e capacidade produtiva).  
  * **Ponto 2 (O Plantio):** Registro da data de início do plantio e tipo de cultura.  
  * **Ponto 3 (O Manejo):** Diário de campo. O agricultor insere dados sobre o uso de agroquímicos e ocorrência de pragas. *Neste momento, a IA do software analisa esses dados e envia um alerta para a indústria (ex: "A praga X na fazenda Y vai reduzir a entrega de insumo em 20%, ajuste seu planejamento de fábrica").*  
  * **Ponto 4 (A Colheita):** Geração do lote. O app captura automaticamente a coordenada GPS (onde) e o *timestamp* (quando), gerando o QR Code/Tag RFID que acompanhará a carga.

### **Etapa 2: A Logística (Trânsito e Escoamento)**

Foco no monitoramento de rota e controle de danos ou atrasos durante o transporte.

* **Ação do Software:** Monitoramento de trânsito em duas camadas, adaptando-se ao valor agregado do produto.  
* **📍 Pontos de Rastreio (Data Capture):**  
  * **Ponto 5 (Expedição da Fazenda):** Leitura do QR Code/GPS ao embarcar a carga no caminhão. Inicia-se o cronômetro de trânsito.  
  * **Ponto 6 (Rastreio de Rota):**  
    * *Para cargas de alto valor:* Integração com dispositivo GPS do veículo para rastreio em tempo real contínuo.  
    * *Para cargas de baixo valor:* Checkpoints manuais do motorista via leitura de QR Code em pontos de parada estratégicos.  
  * **Ponto 7 (Regras de Negócio):** Se a carga demorar mais que o limite de segurança daquele alimento, o sistema automaticamente "tagueia" o lote no banco de dados com a cor Amarela (atenção) ou Vermelha (risco de perda).

### **Etapa 3: A Indústria (Processamento e Eficiência Produtiva)**

Esta etapa tornou-se o "coração" operacional do sistema. O software acompanha cada passo do insumo dentro do chão de fábrica até virar produto final. Toda essa interface administrativa pode ser rapidamente estruturada utilizando o Filament, garantindo um painel de controle robusto e visualmente limpo para a demonstração.

* **Ação do Software:** Painel ERP de gestão industrial. Usa IA em *background* para cruzar os tempos de cada setor, identificar gargalos (ex: máquina lenta, falta de equipe) e prever manutenções.  
* **📍 Pontos de Rastreio (Data Capture):**  
  * **Ponto 8 (Recepção):** A "Catraca Digital". Leitura do lote ao chegar. O sistema calcula o tempo total de trânsito e encerra a viagem.  
  * **Ponto 9 (CQ Recepção):** Formulário de Controle de Qualidade avaliando a matéria-prima recém-chegada (Aprova/Reprova).  
  * **Ponto 10 (Almoxarifado):** Bipe de entrada da matéria-prima aprovada no estoque interno.  
  * **Ponto 11 (CQ Pré-Produção):** Nova validação de qualidade antes de enviar o insumo para as máquinas.  
  * **Ponto 12 (Processamento):** Integração com sensores (IoT) nas máquinas ou leitura manual (bipes) para iniciar a contagem de unidades produzidas e medir o tempo exato de fabricação.  
  * **Ponto 13 (CQ Final):** Formulário de qualidade aprovando o produto acabado e embalado.  
  * **Ponto 14 (Armazenamento):** Bipe de entrada do produto finalizado no estoque de vendas.  
  * **Ponto 15 (Expedição):** Bipe de saída registrando a venda e distribuição para o varejo.

### **Etapa 4: O Varejo (Configuração B2B e Gestão de Prateleira)**

Foco em reduzir desperdício no supermercado (Frente B) e dar controle total à indústria sobre seus próprios dados.

* **Ação do Software:** Portal do Cliente (Supermercados) e Painel de Privacidade da Indústria.  
* **📍 Pontos de Rastreio (Data Capture):**  
  * **Ponto 16 (Recepção no Varejo):** O supermercado lê o lote ao receber. Inicia-se o "Dashboard de Validade". O sistema notifica automaticamente o gerente quando o lote está prestes a vencer para que ele faça promoções.  
  * **Ponto 17 (Painel de Privacidade):** A Indústria acessa o software e marca *checkboxes* definindo o que o QR Code final vai mostrar. Ela pode criar um perfil B2B (mostrando laudos técnicos e tempo de logística para o supermercado) e um perfil B2C (escondendo o tempo de prateleira e mostrando apenas a origem da fazenda para o consumidor).

### **Etapa 5: O Consumidor Final (Transparência e Feedback)**

Fechando a cadeia com valorização do produto regional (Frente D) e coleta de inteligência de mercado.

* **Ação do Software:** Landing page pública, acessível via câmera do celular comum, que funciona como um "Passaporte de Qualidade".  
* **📍 Pontos de Rastreio (Data Capture):**  
  * **Ponto 18 (Escaneamento Público):** O cliente final lê o QR Code da embalagem. O sistema registra (de forma anônima) a localização e o horário em que o produto foi consultado.  
  * **Ponto 19 (História e Origem):** Exibição da jornada autorizada pela indústria na Etapa 4 (município de origem do Tocantins, selos de eficiência de processamento).  
  * **Ponto 20 (Pesquisa de Opinião):** Formulário rápido (1 a 3 perguntas) no final da página para avaliar o produto. Esse dado volta imediatamente para o painel da Indústria na Etapa 3\.

