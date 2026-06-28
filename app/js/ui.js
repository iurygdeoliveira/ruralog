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
  // O semáforo agora utiliza o dot com pulse
  return `<span class="rl-semaforo rl-semaforo--${status}">
            <span class="rl-semaforo-dot"></span>
          </span>`;
}

export function toast(msg) {
  let toastEl = document.getElementById('rl-global-toast');
  const mobileFrame = document.querySelector('.rl-mobile-frame');
  const container = mobileFrame || document.body;
  
  if (!toastEl) {
    toastEl = document.createElement('div');
    toastEl.id = 'rl-global-toast';
    toastEl.className = 'rl-toast';
    container.appendChild(toastEl);
  } else if (toastEl.parentNode !== container) {
    container.appendChild(toastEl);
  }
  
  if (mobileFrame) {
    toastEl.style.position = 'absolute';
    toastEl.style.bottom = '20px';
    toastEl.style.right = '20px';
    toastEl.style.left = '20px';
    toastEl.style.justifyContent = 'center';
  } else {
    toastEl.style.position = 'fixed';
    toastEl.style.bottom = '2rem';
    toastEl.style.right = '2rem';
    toastEl.style.left = 'auto';
    toastEl.style.justifyContent = 'flex-start';
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
  btn.innerHTML = '<i data-lucide="rotate-ccw" class="w-4 h-4" style="width: 16px; height: 16px;"></i> Resetar Demo';
  
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
