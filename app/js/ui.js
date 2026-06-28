import { resetDemo } from './db.js';

export function montarHeader(titulo = 'Campo', ativo = 'index') {
  const links = [
    { href: 'index.html', label: 'Campo', id: 'index' },
    { href: 'industria.html', label: 'Indústria', id: 'industria' },
    { href: 'consumidor.html', label: 'Consumidor', id: 'consumidor' }
  ];

  const navHtml = links.map(l => 
    `<a href="${l.href}" class="${l.id === ativo ? 'active' : ''}">${l.label}</a>`
  ).join('');

  return `
    <header class="rl-header">
      <a href="index.html" class="rl-header-logo">
        <span class="rura">Rura</span><span class="log">Log</span>
      </a>
      <nav class="rl-header-nav">
        ${navHtml}
      </nav>
      <div class="rl-header-actions" id="rl-header-actions">
        <!-- O botão de reset será injetado aqui via botaoReset() -->
      </div>
    </header>
  `;
}

export function semaforo(status) {
  const icon = status === 'verde' ? 'check-circle-2' : status === 'amarelo' ? 'alert-triangle' : 'x-octagon';
  return `<span class="rl-semaforo rl-semaforo--${status}">
            <i data-lucide="${icon}"></i>
          </span>`;
}

export function toast(msg) {
  let toastEl = document.getElementById('rl-global-toast');
  if (!toastEl) {
    toastEl = document.createElement('div');
    toastEl.id = 'rl-global-toast';
    toastEl.className = 'rl-toast';
    document.body.appendChild(toastEl);
  }
  
  toastEl.textContent = msg;
  toastEl.classList.add('show');
  
  setTimeout(() => {
    toastEl.classList.remove('show');
  }, 3000);
}

export function fmtData(ts) {
  if (!ts) return '-';
  return new Intl.DateTimeFormat('pt-BR', {
    dateStyle: 'short',
    timeStyle: 'short'
  }).format(new Date(ts));
}

export function botaoReset() {
  const btn = document.createElement('button');
  btn.className = 'rl-btn rl-btn--outline';
  btn.innerHTML = '<i data-lucide="rotate-ccw" class="w-4 h-4"></i> Resetar Demo';
  
  btn.addEventListener('click', async () => {
    try {
      await resetDemo();
      toast('Demo resetada com sucesso!');
      setTimeout(() => window.location.reload(), 1000);
    } catch (e) {
      console.error(e);
      toast('Erro ao resetar demo.');
    }
  });

  // Tenta injetar no header, se não, no body
  const actionsContainer = document.getElementById('rl-header-actions');
  if (actionsContainer) {
    actionsContainer.appendChild(btn);
  } else {
    document.body.appendChild(btn);
  }
}

// Inicia os ícones Lucide após qualquer injeção
export function updateIcons() {
  if (window.lucide) {
    window.lucide.createIcons();
  }
}
