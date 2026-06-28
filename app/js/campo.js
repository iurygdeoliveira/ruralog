import { getLote, patchLote, addEvento, addAlerta, gerarSnapshotPublico, codificarSnapshot } from './db.js';
import { toast, updateIcons } from './ui.js';

const LOTE_ID = "ACAI-TO-2026-001";

let passoAtual = 1;
let localizacao = null; // Guardará o GPS

// --- Navegação entre passos ---
function mostrarPasso(n) {
  document.querySelectorAll('.rl-mobile-step').forEach(el => el.classList.remove('active'));
  document.getElementById(`passo-${n}`).classList.add('active');
  passoAtual = n;
  
  if (n === 5) {
    gerarQRLote();
  }
}

// Botões "Pular"
document.querySelectorAll('.btn-pular').forEach(btn => {
  btn.addEventListener('click', (e) => {
    const target = parseInt(e.target.dataset.target, 10);
    mostrarPasso(target);
  });
});

// --- Passo 1: Onboarding ---
const btnGps = document.getElementById('btn-gps');
const gpsStatus = document.getElementById('gps-status');

btnGps.addEventListener('click', () => {
  gpsStatus.style.display = 'inline-flex';
  gpsStatus.className = 'rl-badge mt-2';
  gpsStatus.style.background = 'var(--cream)';
  gpsStatus.style.color = 'var(--ink)';
  gpsStatus.innerHTML = '<span class="rl-pulse" style="background: var(--blue)"></span> Buscando satélites...';
  
  if (!navigator.geolocation) {
    aplicarFallbackPalmas("Geolocalização não suportada.");
    return;
  }
  
  navigator.geolocation.getCurrentPosition(
    (position) => {
      localizacao = { 
        lat: position.coords.latitude, 
        lng: position.coords.longitude 
      };
      gpsStatus.className = 'rl-badge mt-2';
      gpsStatus.style.background = 'var(--green)';
      gpsStatus.style.color = 'var(--ink)';
      gpsStatus.innerHTML = '<span class="rl-pulse" style="background: var(--ink)"></span> Localização capturada com sucesso!';
      toast("GPS capturado");
    },
    (error) => {
      console.warn("Erro de GPS", error);
      aplicarFallbackPalmas("Falha no GPS. Usando fallback (Palmas).");
    },
    { timeout: 5000 } // timeout curto para não travar o pitch
  );
});

function aplicarFallbackPalmas(msg) {
  // Palmas coordinates as requested by user
  localizacao = { lat: -10.249091, lng: -48.3242858 };
  gpsStatus.className = 'rl-badge mt-2';
  gpsStatus.style.background = 'var(--wine)';
  gpsStatus.style.color = '#fff';
  gpsStatus.innerHTML = '<span class="rl-pulse" style="background: #fff"></span> ' + msg;
  toast("GPS falhou, usando fallback Palmas");
}

document.getElementById('form-onboarding').addEventListener('submit', async (e) => {
  e.preventDefault();
  
  const lote = await getLote(LOTE_ID);
  
  const produtor = {
    ...lote.produtor,
    nome: document.getElementById('prod-nome').value,
    caf: document.getElementById('prod-caf').value,
    municipio: document.getElementById('prod-municipio').value,
    propriedade: document.getElementById('prod-prop').value,
    geo: localizacao || { lat: -10.249091, lng: -48.3242858 } // Fallback final se não clicou no GPS
  };
  const tipoAcaizal = document.getElementById('prod-tipo').value;
  
  await patchLote(LOTE_ID, { produtor, tipoAcaizal });
  toast("Cadastro salvo");
  mostrarPasso(2);
});

// --- Passo 2: Manejo ---
document.getElementById('form-manejo').addEventListener('submit', async (e) => {
  e.preventDefault();
  const tipo = document.getElementById('man-tipo').value;
  const desc = document.getElementById('man-desc').value;
  
  const lote = await getLote(LOTE_ID);
  const manejoArr = lote.manejo || [];
  const ts = Date.now();
  
  manejoArr.push({ data: ts, tipo, descricao: desc });
  
  await patchLote(LOTE_ID, { manejo: manejoArr });
  await addEvento(LOTE_ID, { 
    etapa: "manejo", 
    ts, 
    descricao: "Manejo registrado: " + tipo + (desc ? ` (${desc})` : ""), 
    icone: "sprout" 
  });
  
  toast("Manejo registrado");
  mostrarPasso(3);
});

// --- Passo 3: Fitossanitário ---
document.getElementById('form-fito').addEventListener('submit', async (e) => {
  e.preventDefault();
  const praga = document.getElementById('fito-praga').value;
  
  const lote = await getLote(LOTE_ID);
  let severidade = "media";
  let impacto = "";
  
  if (praga === "Podridão-do-cacho") {
    severidade = "alta";
    impacto = "redução 20-30%";
  } else if (praga === "Broca-do-estipe") {
    severidade = "critica";
    impacto = "redução severa";
  } else if (praga === "Pulgão-preto" || praga === "Lagarta-desfolhadora") {
    severidade = "media";
    impacto = "redução 15%";
  }
  
  await addAlerta(LOTE_ID, {
    origem: `Campo · Açaizal ${lote.produtor.propriedade || ""} (${lote.produtor.municipio || ""})`,
    severidade: severidade,
    praga: praga,
    mensagem: `IA RuraLog: ${praga} detectada no açaizal — entrega prevista de polpa será impactada (${impacto}). Alerta enviado 8 semanas antes da entrega. Ajuste o planejamento da agroindústria.`,
    ts: Date.now()
  });
  
  toast("Alerta fitossanitário enviado à agroindústria");
  mostrarPasso(4);
});

// --- Passo 4: Colheita ---
document.getElementById('form-colheita').addEventListener('submit', async (e) => {
  e.preventDefault();
  const kg = parseFloat(document.getElementById('col-kg').value);
  
  const lote = await getLote(LOTE_ID);
  const colheita = {
    ...lote.colheita,
    data: Date.now(),
    debulha_ts: Date.now(),
    geo: localizacao || { lat: -10.249091, lng: -48.3242858 },
    quantidade_kg: kg
  };
  
  await patchLote(LOTE_ID, { colheita, status: "campo" });
  await addEvento(LOTE_ID, { 
    etapa: "Debulha", 
    ts: Date.now(), 
    descricao: `Colheita debulhada: ${kg}kg`, 
    icone: "box" 
  });
  
  toast("Lote gerado com sucesso!");
  mostrarPasso(5);
});

// --- Passo 5: QR Code ---
let qrUrlGerada = "";
async function gerarQRLote() {
  const base = location.origin + location.pathname.replace("index.html", "");
  const lote = await getLote(LOTE_ID);
  const snapshot = gerarSnapshotPublico(lote);
  const demo = codificarSnapshot(snapshot);
  
  // Se o encode falhar, a URL continua mas sem os dados demo
  qrUrlGerada = base + "consumidor.html?lote=" + LOTE_ID + (demo ? "&demo=" + encodeURIComponent(demo) : "");
  
  await patchLote(LOTE_ID, { qrUrl: qrUrlGerada });
  
  const container = document.getElementById("qr-container");
  container.innerHTML = ""; // Limpa anterior
  
  new QRCode(container, { 
    text: qrUrlGerada, 
    width: 220, 
    height: 220,
    colorDark : "#000000",
    colorLight : "#ffffff"
  });
}

document.getElementById('btn-copiar').addEventListener('click', () => {
  if (!qrUrlGerada) return;
  navigator.clipboard.writeText(qrUrlGerada).then(() => {
    toast("Link copiado para a área de transferência!");
  }).catch(err => {
    console.error("Falha ao copiar", err);
    toast("Falha ao copiar link");
  });
});
