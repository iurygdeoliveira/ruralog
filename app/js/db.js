// db.js - Camada de Dados (Fonte Única da Verdade) e Snapshot para o QR Code
import { seedLote } from './seed.js';

const DB_NAME = 'RuraLogDB';
const DB_VERSION = 1;
const STORE_NAME = 'lotes';

let dbInstance = null;

// Tenta inicializar o IndexedDB
function initDB() {
  return new Promise((resolve, reject) => {
    if (dbInstance) return resolve(dbInstance);

    if (!window.indexedDB) {
      console.warn("IndexedDB não suportado neste navegador. Usando localStorage.");
      return reject("IndexedDB indisponível");
    }

    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onerror = (event) => {
      console.warn("Erro ao abrir IndexedDB. Fallback ativado.");
      reject(event.target.error);
    };

    request.onsuccess = (event) => {
      dbInstance = event.target.result;
      resolve(dbInstance);
    };

    request.onupgradeneeded = (event) => {
      const db = event.target.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: 'id' });
      }
    };
  });
}

// Helper genérico para rodar operações em IndexedDB ou localStorage
async function dbOp(type, payload = null) {
  try {
    const db = await initDB();
    return new Promise((resolve, reject) => {
      const transaction = db.transaction([STORE_NAME], type === 'read' ? 'readonly' : 'readwrite');
      const store = transaction.objectStore(STORE_NAME);
      let request;

      switch (type) {
        case 'get':
          request = store.get(payload);
          break;
        case 'put':
          request = store.put(payload);
          break;
        case 'getAll':
          request = store.getAll();
          break;
      }

      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });
  } catch (err) {
    // Fallback LocalStorage
    if (type === 'get') {
      const data = localStorage.getItem(`${STORE_NAME}_${payload}`);
      return data ? JSON.parse(data) : undefined;
    } else if (type === 'put') {
      localStorage.setItem(`${STORE_NAME}_${payload.id}`, JSON.stringify(payload));
      return payload.id;
    } else if (type === 'getAll') {
      const all = [];
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key.startsWith(`${STORE_NAME}_`)) {
          all.push(JSON.parse(localStorage.getItem(key)));
        }
      }
      return all;
    }
  }
}

// ----------------------------------------------------
// API Contrato Base
// ----------------------------------------------------

export async function getLote(id = "ACAI-TO-2026-001") {
  const lote = await dbOp('get', id);
  if (!lote && id === "ACAI-TO-2026-001") {
    // Se não existir o lote principal, semeia o banco automaticamente
    await saveLote(seedLote);
    return seedLote;
  }
  return lote || null;
}

export async function saveLote(lote) {
  await dbOp('put', lote);
  return lote;
}

export async function patchLote(id, partial) {
  const lote = await getLote(id);
  if (!lote) throw new Error("Lote não encontrado");
  const updated = { ...lote, ...partial };
  await saveLote(updated);
  return updated;
}

export async function addEvento(id, evento) {
  const lote = await getLote(id);
  if (!lote) return;
  lote.timeline.push(evento);
  await saveLote(lote);
  return lote;
}

export async function addAlerta(id, alerta) {
  const lote = await getLote(id);
  if (!lote) return;
  lote.alertas.push(alerta);
  await saveLote(lote);
  return lote;
}

export async function resetDemo() {
  await saveLote(seedLote);
  return seedLote;
}

export async function listLotes() {
  return await dbOp('getAll');
}

// ----------------------------------------------------
// API Snapshot Público (QR Code)
// ----------------------------------------------------

export function gerarSnapshotPublico(lote) {
  return {
    id: lote.id,
    cultura: lote.cultura,
    tipoAcaizal: lote.tipoAcaizal,
    produtor: {
      municipio: lote.produtor?.municipio || "",
      propriedade: lote.produtor?.propriedade || ""
    },
    colheita: lote.colheita,
    alertas: lote.alertas,
    logistica: lote.logistica,
    industria: lote.industria,
    varejo: lote.varejo,
    privacidade: lote.privacidade,
    timeline: lote.timeline
  };
}

export function codificarSnapshot(snapshot) {
  try {
    const jsonStr = JSON.stringify(snapshot);
    // Cria base64url (trocando '+' por '-', '/' por '_' e removendo padding '=')
    return btoa(unescape(encodeURIComponent(jsonStr)))
      .replace(/\+/g, '-')
      .replace(/\//g, '_')
      .replace(/=+$/, '');
  } catch (e) {
    console.error("Erro ao codificar snapshot:", e);
    return null;
  }
}

export function decodificarSnapshot(valor) {
  try {
    // Restaura caracteres originais de base64
    let b64 = valor.replace(/-/g, '+').replace(/_/g, '/');
    const padLen = (4 - b64.length % 4) % 4;
    b64 += '='.repeat(padLen);
    
    const jsonStr = decodeURIComponent(escape(atob(b64)));
    return JSON.parse(jsonStr);
  } catch (e) {
    console.error("Erro ao decodificar snapshot:", e);
    return null;
  }
}
