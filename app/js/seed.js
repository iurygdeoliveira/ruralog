// seed.js - Dado-semente e contrato da aplicação
export const seedLote = {
  id: "ACAI-TO-2026-001",
  cultura: "Açaí",                     // matéria-prima — açaí do Tocantins
  tipoAcaizal: "nativo",              // "nativo" (extrativismo) | "cultivado"
  status: "campo",                    // campo|transito|industria|varejo|consumidor|reprovado
  produtor: {
    nome: "",
    municipio: "Araguatins",          // Bico do Papagaio, extremo-norte do TO
    propriedade: "",
    geo: { lat: -5.6472, lng: -48.1247 }  // coordenadas de Araguatins
  },
  manejo:    [],                      // [{ data, tipo, descricao }]
                                      //   tipo: "roçagem" | "desbaste" | "monitoramento" | "aplicação"
  alertas:   [],                      // [{ origem, severidade, praga, mensagem, ts }]
  colheita:  {
    data: null,
    debulha_ts: null,                 // timestamp da debulha — inicia relógio de perecibilidade
    geo: { lat: 0, lng: 0 },
    quantidade_kg: 0
  },
  qrUrl:     "",
  logistica: {
    expedicao_ts: null,
    recepcao_ts: null,
    status: "verde",
    limiteHoras: 6,                   // perecibilidade extrema do açaí fruto
    checkpoints: []
  },
  industria: {
    recepcao_ts: null,
    peso_kg: 0,                       // pesagem definitiva na recepção
    expedicao_varejo_ts: null,
    cqRecepcao: { status: null, obs: "" },     // "aprovado"|"reprovado"|null
    cqFinal:    { status: null, obs: "", classificacao: null },  // classificacao: "A"|"B"|"C"|null
    branqueamento: { validado: false, temperatura: null },       // campo obrigatório ≥80°C
    producao:   { inicio: null, fim: null, unidades_kg: 0 },
    produtoFinal: "Polpa de Açaí Congelada"
  },
  varejo:    {
    recepcao_ts: null,
    validade: null,                   // polpa congelada: 6-12 meses
    status: "verde"
  },
  privacidade: {
    mostrarOrigem: true,
    mostrarLaudos: false,
    mostrarLogistica: false,
    mostrarPrateleira: false
  },
  consumidor: { scans: [], opinioes: [] },
  timeline:  [                        // [{ etapa, ts, descricao, icone }] ← espinha do golden path
    {
      etapa: "Lote Criado",
      ts: Date.now(),
      descricao: "Diário de campo iniciado no aplicativo do produtor.",
      icone: "file-plus"
    }
  ]                        
};
