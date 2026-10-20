const CHAVE_DADOS = 'escolaConectadaDados';

const db = {
  activeRole: 'aluno',
  currentUser: null,

  users: [
    {
      id: 1,
      name: 'Ana Clara',
      email: 'ana@escola.com',
      role: 'coordenador',
      initials: 'AC',
      ra: '852369'
    },
    {
      id: 2,
      name: 'Prof. Miguel',
      email: 'miguel@escola.com',
      role: 'professor',
      initials: 'PM',
      ra: '788693'
    },
    {
      id: 3,
      name: 'João Lucas',
      email: 'joao@escola.com',
      role: 'aluno',
      initials: 'JL',
      ra: '2026001'
    }
  ],

  subjects: [
    'Matemática',
    'Português',
    'Ciências',
    'História',
    'Geografia',
    'Inglês',
    'Artes',
    'Educação Física',
    'Biologia',
    'Física',
    'Química'
  ],

  boletim: [
    { subject: 'Matemática', b1: 8, b2: 7.5, b3: 8.5, b4: 9 },
    { subject: 'Português', b1: 7.5, b2: 8, b3: 7, b4: 8.5 },
    { subject: 'Ciências', b1: 9, b2: 8.5, b3: 9, b4: 8.5 },
    { subject: 'História', b1: 6.5, b2: 7, b3: 6, b4: 7 },
    { subject: 'Geografia', b1: 8, b2: 8.5, b3: 7.5, b4: 9 },
    { subject: 'Inglês', b1: 8.5, b2: 9, b3: 8, b4: 8.5 }
  ],

  atividades: [
    {
      id: 1,
      title: 'Pesquisa: Revolução Industrial',
      description: 'Pesquise as principais transformações provocadas pela Revolução Industrial.',
      subject: 'História',
      type: 'Pesquisa',
      date: '15 de setembro',
      points: 10,
      turma: '3EM ',
      completed: false,
      answer: null
    },
    {
      id: 2,
      title: 'Exercícios: faça sua rotina Diária',
      description: 'Descreva sua rotina diária em inglês.',
      subject: 'Inglês',
      type: 'Exercício',
      date: '15 de outubro',
      points: 10,
      turma: '3EM ',
      completed: false,
      answer: null
    },
    {
      id: 3,
      title: 'Redação: Narrativa Pessoal',
      description: 'Escreva uma narrativa pessoal com começo, desenvolvimento e conclusão.',
      subject: 'Português',
      type: 'Redação',
      date: '15 de outubro',
      points: 10,
      turma: '3EM ',
      completed: false,
      answer: null
    },
    {
      id: 4,
      title: 'Pesquisa: Como funciona o ciclo da água',
      description: 'Explique as etapas do ciclo da água.',
      subject: 'Ciências',
      type: 'Pesquisa',
      date: '15 de outubro',
      points: 10,
      turma: '3EM ',
      completed: false,
      answer: null
    },
    {
      id: 5,
      title: 'Exercícios: Equações de 1º e 2º grau',
      description: 'Resolva os exercícios propostos pelo professor.',
      subject: 'Matemática',
      type: 'Exercício',
      date: '16 de outubro',
      points: 10,
      turma: '3EM ',
      completed: false,
      answer: null
    },
    {
      id: 6,
      title: 'Projeto: Maquete de Bioma',
      description: 'Apresente uma maquete e explique as características do bioma escolhido.',
      subject: 'Geografia',
      type: 'Projeto',
      date: '18 de outubro',
      points: 10,
      turma: '3EM ',
      completed: false,
      answer: null
    },
    {
      id: 7,
      title: 'Questionário: Leis de Newton',
      description: 'Responda às questões sobre as leis de Newton.',
      subject: 'Física',
      type: 'Quiz',
      date: '20 de outubro',
      points: 10,
      turma: '3EM ',
      completed: false,
      answer: null
    },
    {
      id: 8,
      title: 'Pesquisa: Ligações Químicas',
      description: 'Explique os principais tipos de ligações químicas.',
      subject: 'Química',
      type: 'Pesquisa',
      date: '21 de outubro',
      points: 10,
      turma: '3EM ',
      completed: false,
      answer: null
    },
    {
      id: 9,
      title: 'Atividade: Ecossistemas',
      description: 'Explique a relação entre os seres vivos e o ambiente.',
      subject: 'Biologia',
      type: 'Exercício',
      date: '22 de outubro',
      points: 10,
      turma: '3EM ',
      completed: false,
      answer: null
    },
    {
      id: 10,
      title: 'Pesquisa: pesquise sobre Arte Moderna',
      description: 'Apresente as características da Arte Moderna.',
      subject: 'Artes',
      type: 'Projeto',
      date: '23 de setembro',
      points: 10,
      turma: '3EM ',
      completed: false,
      answer: null
    },
    {
      id: 11,
      title: 'Pesquisa: Saúde e qualidade de vida',
      description: 'Explique hábitos que contribuem para a saúde e a qualidade de vida.',
      subject: 'Educação Física',
      type: 'Pesquisa',
      date: '24 de setembro',
      points: 10,
      turma: '3EM ',
      completed: false,
      answer: null
    }
  ],

  submissions: [
    {
      id: 1,
      studentId: 3,
      studentName: 'João Lucas',
      atividadeId: 3,
      ativTitle: 'Redação: Narrativa Pessoal',
      text: 'A atividade foi realizada pelo aluno.',
      date: 'Entrega de demonstração',
      graded: false,
      grade: null
    }
  ],

  frequencia: [],

  aulas: []
};

let selectedAtivForModal = null;

// ============================================================
// ARMAZENAMENTO LOCAL
// ============================================================

function salvarDados() {
  try {
    localStorage.setItem(
      CHAVE_DADOS,
      JSON.stringify({
        users: db.users,
        subjects: db.subjects,
        boletim: db.boletim,
        atividades: db.atividades,
        submissions: db.submissions,
        frequencia: db.frequencia,
        aulas: db.aulas
      })
    );
  } catch (erro) {
    console.error('Erro ao salvar dados:', erro);
    showToast('Não foi possível salvar os dados no navegador.', 'error');
  }
}

function carregarDados() {
  try {
    const salvo = localStorage.getItem(CHAVE_DADOS);

    if (!salvo) return;

    const dados = JSON.parse(salvo);

    if (Array.isArray(dados.users)) db.users = dados.users;
    if (Array.isArray(dados.subjects)) db.subjects = dados.subjects;
    if (Array.isArray(dados.boletim)) db.boletim = dados.boletim;
    if (Array.isArray(dados.atividades)) db.atividades = dados.atividades;
    if (Array.isArray(dados.submissions)) db.submissions = dados.submissions;
    if (Array.isArray(dados.frequencia)) db.frequencia = dados.frequencia;
    if (Array.isArray(dados.aulas)) db.aulas = dados.aulas;
  } catch (erro) {
    console.error('Erro ao carregar dados:', erro);
  }
}

// ============================================================
// INICIALIZAÇÃO
// ============================================================

document.addEventListener('DOMContentLoaded', () => {
  carregarDados();
  configurarEventos();
  verificarUsuarioLogado();
  atualizarConexaoOffline();
});

function configurarEventos() {
  const filtroMateria = document.getElementById('filtro-atividade-materia');
  const filtroStatus = document.getElementById('filtro-atividade-status');
  const filtroCoord = document.getElementById('coord-filtro-materia');
  const selectRole = document.getElementById('new-user-role');

  if (filtroMateria) {
    filtroMateria.addEventListener('change', renderAtividadesTab);
  }

  if (filtroStatus) {
    filtroStatus.addEventListener('change', renderAtividadesTab);
  }

  if (filtroCoord) {
    filtroCoord.addEventListener('change', renderCoordAtividades);
  }

  if (selectRole) {
    selectRole.addEventListener('change', atualizarCampoRM);
  }

  const formResposta = document.getElementById('form-responder-atividade');

  if (formResposta) {
    formResposta.addEventListener('submit', handleResponderAtividade);
  }

  const formAtividade = document.getElementById('form-nova-atividade');

  if (formAtividade) {
    formAtividade.addEventListener('submit', handleNovaAtividadeSubmit);
  }

  const formCadastro = document.getElementById('form-cadastro-aluno');

  if (formCadastro) {
    formCadastro.addEventListener('submit', handleCadastroAlunoSubmit);
  }
}

// ============================================================
// UTILITÁRIOS
// ============================================================

function gerarIniciais(nome) {
  if (!nome) return 'US';

  return nome
    .trim()
    .split(/\s+/)
    .map(parte => parte[0])
    .join('')
    .substring(0, 2)
    .toUpperCase();
}

function formatRole(role) {
  const nomes = {
    aluno: 'ALUNO',
    professor: 'PROFESSOR',
    coordenador: 'COORDENADOR'
  };

  return nomes[role] || String(role || '').toUpperCase();
}

function escaparHTML(valor) {
  return String(valor ?? '').replace(/[&<>"']/g, caractere => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  })[caractere]);
}

function formatarNota(nota) {
  if (nota === null || nota === undefined || nota === '') return '—';

  return Number(nota).toLocaleString('pt-BR', {
    minimumFractionDigits: 1,
    maximumFractionDigits: 2
  });
}

function getSubjectTagClass(subject) {
  const classes = {
    'Matemática': 'tag-math',
    'Português': 'tag-port',
    'Ciências': 'tag-sci',
    'História': 'tag-hist',
    'Geografia': 'tag-geo',
    'Inglês': 'tag-ing',
    'Artes': 'tag-art',
    'Educação Física': 'tag-edf',
    'Biologia': 'tag-bio',
    'Física': 'tag-fis',
    'Química': 'tag-qui'
  };

  return classes[subject] || 'tag-math';
}

function obterNotaMedia(item) {
  const notas = [item.b1, item.b2, item.b3, item.b4]
    .filter(nota => nota !== null && nota !== undefined && nota !== '');

  if (!notas.length) return null;

  return notas.reduce((soma, nota) => soma + Number(nota), 0) / notas.length;
}

function obterBoletimMateria(materia) {
  let item = db.boletim.find(nota => nota.subject === materia);

  if (!item) {
    item = {
      subject: materia,
      b1: null,
      b2: null,
      b3: null,
      b4: null
    };

    db.boletim.push(item);
  }

  return item;
}

function obterAlunoAtual() {
  return db.currentUser?.name || 'Aluno';
}

function obterIdAlunoAtual() {
  return db.currentUser?.id ?? null;
}

// ============================================================
// MENSAGENS
// ============================================================

function showToast(message, type = 'success') {
  const container = document.getElementById('toast-container');

  if (!container) {
    console.log(message);
    return;
  }

  const toast = document.createElement('div');
  toast.className = `toast ${type}`;

  const icone = type === 'success'
    ? 'fa-check-circle'
    : type === 'error'
      ? 'fa-circle-xmark'
      : 'fa-info-circle';

  const icon = document.createElement('i');
  icon.className = `fa-solid ${icone}`;

  const texto = document.createElement('span');
  texto.textContent = message;

  toast.append(icon, texto);
  container.appendChild(toast);

  setTimeout(() => toast.remove(), 3500);
}

// ============================================================
// LOGIN E PERFIS
// ============================================================

function setRole(role) {
  db.activeRole = role;

  document.querySelectorAll('.role-btn').forEach(button => {
    button.classList.toggle('active', button.dataset.role === role);
  });
}

function mostrarPortal() {
  document.getElementById('login-screen')?.classList.add('hidden');
  document.getElementById('login-screen')?.classList.remove('active');
  document.getElementById('app-layout')?.classList.remove('hidden');
}

function mostrarLogin() {
  document.getElementById('app-layout')?.classList.add('hidden');
  document.getElementById('login-screen')?.classList.remove('hidden');
  document.getElementById('login-screen')?.classList.add('active');
}

function doLogin(user) {
  if (!user) return;

  db.currentUser = user;
  db.activeRole = user.role;

  localStorage.setItem('usuarioLogado', JSON.stringify(user));

  mostrarPortal();
  setupSidebarForRole(user.role);

  showToast(`Bem-vindo(a), ${user.name}!`);
}

function verificarUsuarioLogado() {
  const salvo = localStorage.getItem('usuarioLogado');

  if (!salvo) {
    mostrarLogin();
    return;
  }

  try {
    const user = JSON.parse(salvo);

    if (!user || !user.role || !user.id) {
      localStorage.removeItem('usuarioLogado');
      mostrarLogin();
      return;
    }

    db.currentUser = user;
    db.activeRole = user.role;

    mostrarPortal();
    setupSidebarForRole(user.role);
  } catch (erro) {
    localStorage.removeItem('usuarioLogado');
    mostrarLogin();
  }
}

function quickLogin(role) {
  setRole(role);

  const user = db.users.find(item => item.role === role);

  if (!user) {
    showToast('Conta de demonstração não encontrada.', 'error');
    return;
  }

  document.getElementById('email').value = user.email;
  document.getElementById('password').value = '12345678';

  showToast('Dados preenchidos. Clique em Entrar no Portal.', 'info');
}

async function handleLoginSubmit(event) {
  event.preventDefault();

  const email = document.getElementById('email')?.value.trim();
  const senha = document.getElementById('password')?.value;

  if (!email || !senha) {
    showToast('Preencha o e-mail e a senha.', 'info');
    return;
  }

  // Primeiro tenta autenticar pelo backend.
  try {
    const resposta = await fetch('http://localhost:3000/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, senha })
    });

    const dados = await resposta.json().catch(() => ({}));

    if (resposta.ok && dados.usuario) {
      const usuarioAPI = dados.usuario;
      const tipo = String(usuarioAPI.tipo || '').toUpperCase();

      const mapaRoles = {
        ALUNO: 'aluno',
        PROFESSOR: 'professor',
        GESTOR: 'coordenador',
        COORDENADOR: 'coordenador'
      };

      const role = mapaRoles[tipo];

      if (!role) {
        showToast('Tipo de usuário não reconhecido.', 'error');
        return;
      }

      const user = {
        id: usuarioAPI.id_usuario,
        name: usuarioAPI.nome || 'Usuário',
        email: usuarioAPI.email || email,
        role,
        initials: gerarIniciais(usuarioAPI.nome),
        ra: usuarioAPI.rm || usuarioAPI.ra || ''
      };

      const existente = db.users.find(item => item.email === user.email);

      if (existente) {
        Object.assign(existente, user);
      } else {
        db.users.push(user);
      }

      salvarDados();
      doLogin(user);
      return;
    }

    // Se o backend respondeu com erro, não tenta ignorar a senha.
    showToast(dados.erro || dados.mensagem || 'E-mail ou senha incorretos.', 'error');
    return;
  } catch (erro) {
    console.warn('Backend indisponível; verificando contas locais de demonstração.');
  }

  // Modo de demonstração: funciona sem backend para testar o front-end.
  const user = db.users.find(item =>
    item.email.toLowerCase() === email.toLowerCase()
  );

  if (user && senha === '12345678') {
    doLogin(user);
    showToast('Você entrou no modo de demonstração.', 'info');
    return;
  }

  showToast(
    'Não foi possível conectar ao servidor. Para demonstração local, use uma conta de teste e a senha 12345678.',
    'error'
  );
}

function logout() {
  db.currentUser = null;
  localStorage.removeItem('usuarioLogado');

  mostrarLogin();

  const email = document.getElementById('email');
  const senha = document.getElementById('password');

  if (email) email.value = '';
  if (senha) senha.value = '';

  setRole('aluno');
  showToast('Você saiu da conta.', 'info');
}

// ============================================================
// MENU LATERAL
// ============================================================

function setupSidebarForRole(role) {
  const nav = document.getElementById('sidebar-menu');
  const badge = document.getElementById('role-badge');

  if (!nav || !badge) return;

  if (role === 'aluno') {
    badge.innerText = 'Portal do Aluno';

    nav.innerHTML = `
      <button class="nav-item active" onclick="switchTab('dashboard')">
        <i class="fa-solid fa-house"></i> Dashboard
      </button>
      <button class="nav-item" onclick="switchTab('atividades')">
        <i class="fa-solid fa-clipboard-check"></i> Atividades
      </button>
      <button class="nav-item" onclick="switchTab('boletim')">
        <i class="fa-solid fa-file-lines"></i> Boletim de Notas
      </button>
      <button class="nav-item" onclick="switchTab('progresso')">
        <i class="fa-solid fa-chart-line"></i> Progresso
      </button>
      <button class="nav-item" onclick="switchTab('offline')">
        <i class="fa-solid fa-wifi"></i> Offline
      </button>
      <button class="nav-item" onclick="switchTab('perfil')">
        <i class="fa-solid fa-user"></i> Meu perfil
      </button>
    `;

    switchTab('dashboard');
    return;
  }

  if (role === 'professor') {
    badge.innerText = 'Painel do Professor';

    nav.innerHTML = `
      <button class="nav-item active" onclick="switchTab('prof-atividades')">
        <i class="fa-solid fa-file-circle-plus"></i> Atividades e entregas
      </button>
      <button class="nav-item" onclick="switchTab('prof-notas')">
        <i class="fa-solid fa-chart-column"></i> Notas e frequência
      </button>
      <button class="nav-item" onclick="switchTab('perfil')">
        <i class="fa-solid fa-user"></i> Meu perfil
      </button>
    `;

    switchTab('prof-atividades');
    return;
  }

  if (role === 'coordenador') {
    badge.innerText = 'Coordenação';

    nav.innerHTML = `
      <button class="nav-item active" onclick="switchTab('coord-dashboard')">
        <i class="fa-solid fa-chart-pie"></i> Visão Geral
      </button>
      <button class="nav-item" onclick="switchTab('coord-atividades')">
        <i class="fa-solid fa-list-check"></i> Atividades
      </button>
      <button class="nav-item" onclick="switchTab('coord-usuarios')">
        <i class="fa-solid fa-users-gear"></i> Usuários
      </button>
      <button class="nav-item" onclick="switchTab('coord-materias')">
        <i class="fa-solid fa-layer-group"></i> Matérias
      </button>
      <button class="nav-item" onclick="switchTab('perfil')">
        <i class="fa-solid fa-user"></i> Meu perfil
      </button>
    `;

    switchTab('coord-dashboard');
  }
}

// ============================================================
// NAVEGAÇÃO ENTRE ABAS
// ============================================================

function switchTab(tabId) {
  document.querySelectorAll('.tab-content').forEach(tab => {
    tab.classList.remove('active');
  });

  document.querySelectorAll('.nav-item').forEach(button => {
    button.classList.remove('active');
  });

  const target = document.getElementById(`tab-${tabId}`);

  if (!target) {
    console.warn(`Aba não encontrada: tab-${tabId}`);
    showToast('Esta área ainda não está disponível no HTML.', 'info');
    return;
  }

  target.classList.add('active');

  document.querySelectorAll('.nav-item').forEach(button => {
    const onclick = button.getAttribute('onclick') || '';

    if (onclick.includes(`'${tabId}'`) || onclick.includes(`"${tabId}"`)) {
      button.classList.add('active');
    }
  });

  switch (tabId) {
    case 'dashboard':
      renderDashboard();
      break;
    case 'atividades':
      renderAtividadesTab();
      break;
    case 'boletim':
      renderBoletim();
      break;
    case 'progresso':
      renderProgressoTab();
      break;
    case 'offline':
      renderOfflineTab();
      break;
    case 'perfil':
      renderPerfilTab();
      break;
    case 'prof-atividades':
      renderProfAtividades();
      break;
    case 'prof-notas':
      renderProfNotas();
      break;
    case 'coord-dashboard':
      renderCoordDashboard();
      break;
    case 'coord-atividades':
      renderCoordAtividades();
      break;
    case 'coord-usuarios':
      renderCoordDashboard();
      break;
    case 'coord-materias':
      renderCoordDashboard();
      break;
  }
}

// ============================================================
// DASHBOARD
// ============================================================

function renderDashboard() {
  const total = db.atividades.length;
  const concluidas = db.atividades.filter(ativ => ativ.completed).length;
  const pendentes = total - concluidas;

  const mediaItens = db.boletim
    .map(obterNotaMedia)
    .filter(nota => nota !== null);

  const mediaGeral = mediaItens.length
    ? mediaItens.reduce((soma, nota) => soma + nota, 0) / mediaItens.length
    : null;

  const setTexto = (id, valor) => {
    const el = document.getElementById(id);
    if (el) el.textContent = valor;
  };

  setTexto('stat-aulas-val', total);
  setTexto('stat-media-val', mediaGeral === null ? '—' : formatarNota(mediaGeral));
  setTexto('stat-materias-val', db.subjects.length);
  setTexto('stat-ativ-val', total);
  setTexto('stat-concluidas-val', concluidas);
  setTexto('stat-pendentes-val', pendentes);

  const container = document.getElementById('dashboard-atividades');

  if (container) {
    const recentes = db.atividades.slice(0, 4);

    container.innerHTML = recentes.map(ativ => `
      <div class="card">
        <div class="stat-icon ${ativ.completed ? 'green' : 'orange'}">
          <i class="fa-solid fa-clipboard-list"></i>
        </div>
        <h3 class="card-subtitle mt-4">${escaparHTML(ativ.title)}</h3>
        <p>${escaparHTML(ativ.subject)} · ${escaparHTML(ativ.date)}</p>
        <p>${ativ.completed ? 'Resposta enviada' : 'Aguardando sua resposta'}</p>
        <button class="btn-primary mt-4" onclick="selecionarAtividadeParaResposta(${ativ.id})">
          ${ativ.completed ? 'Ver atividade' : 'Responder'}
        </button>
      </div>
    `).join('');
  }
}

// ============================================================
// ATIVIDADES DO ALUNO
// ============================================================

function renderAtividadesTab() {
  const container = document.getElementById('atividades-lista');
  if (!container) return;

  const materia = document.getElementById('filtro-atividade-materia')?.value || '';
  const status = document.getElementById('filtro-atividade-status')?.value || '';

  const lista = db.atividades.filter(ativ => {
    const entrega = obterEntregaDoAluno(ativ.id);
    const situacao = !entrega ? 'pendente' : entrega.graded ? 'corrigida' : 'entregue';

    return (!materia || ativ.subject === materia) &&
      (!status || status === situacao);
  });

  const concluidas = lista.filter(ativ => obterEntregaDoAluno(ativ.id)).length;

  const setTexto = (id, valor) => {
    const el = document.getElementById(id);
    if (el) el.textContent = valor;
  };

  setTexto('ativ-total', lista.length);
  setTexto('ativ-concluidas', concluidas);
  setTexto('ativ-pendentes', lista.length - concluidas);

  if (!lista.length) {
    container.innerHTML = `
      <div class="empty-state">
        <i class="fa-solid fa-folder-open"></i>
        <h3>Nenhuma atividade encontrada</h3>
        <p>Tente mudar os filtros selecionados.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = lista.map(ativ => {
    const entrega = obterEntregaDoAluno(ativ.id);
    const situacao = !entrega ? 'Pendente' : entrega.graded ? 'Corrigida' : 'Entregue';

    return `
      <div class="activity-item">
        <div class="act-left">
          <div class="act-icon ${getSubjectTagClass(ativ.subject)}">
            <i class="fa-solid fa-clipboard-check"></i>
          </div>
          <div>
            <div class="act-title">${escaparHTML(ativ.title)}</div>
            <div class="act-meta">
              ${escaparHTML(ativ.subject)} · ${escaparHTML(ativ.type)} · Prazo: ${escaparHTML(ativ.date)}
            </div>
            <p>${escaparHTML(ativ.description || 'Consulte as instruções da atividade.')}</p>
            <small>Turma: ${escaparHTML(ativ.turma || 'Não informada')} · Valor: ${ativ.points} pontos</small>
          </div>
        </div>
        <div class="act-right">
          <span class="act-badge">${situacao}</span>
          <button class="btn-primary" onclick="selecionarAtividadeParaResposta(${ativ.id})">
            ${entrega ? 'Ver entrega' : 'Responder'}
          </button>
          ${entrega?.graded ? `<p>Nota: ${formatarNota(entrega.grade)}</p>` : ''}
        </div>
      </div>
    `;
  }).join('');
}

function obterEntregaDoAluno(atividadeId) {
  const alunoId = obterIdAlunoAtual();

  return db.submissions.find(sub =>
    sub.atividadeId === atividadeId &&
    (
      alunoId !== null
        ? String(sub.studentId) === String(alunoId)
        : sub.studentName === obterAlunoAtual()
    )
  );
}

function selecionarAtividadeParaResposta(id) {
  const ativ = db.atividades.find(item => item.id === id);
  if (!ativ) return;

  const entrega = obterEntregaDoAluno(id);

  const campoId = document.getElementById('resposta-atividade-id');
  const campoTitulo = document.getElementById('resposta-atividade-titulo');
  const campoTexto = document.getElementById('resposta-atividade-texto');

  if (campoId) campoId.value = ativ.id;
  if (campoTitulo) campoTitulo.value = ativ.title;
  if (campoTexto) campoTexto.value = entrega?.text || '';

  const card = document.getElementById('atividade-resposta-card');
  if (card) card.scrollIntoView({ behavior: 'smooth', block: 'start' });

  if (entrega?.graded) {
    showToast(`Esta atividade já foi corrigida. Nota: ${formatarNota(entrega.grade)}.`, 'info');
  }
}

function handleResponderAtividade(event) {
  event.preventDefault();

  const id = Number(document.getElementById('resposta-atividade-id')?.value);
  const texto = document.getElementById('resposta-atividade-texto')?.value.trim();
  const arquivo = document.getElementById('resposta-atividade-arquivo')?.files?.[0];

  const ativ = db.atividades.find(item => item.id === id);

  if (!ativ) {
    showToast('Selecione uma atividade antes de enviar.', 'info');
    return;
  }

  if (!texto) {
    showToast('Digite sua resposta antes de enviar.', 'info');
    return;
  }

  const entregaExistente = obterEntregaDoAluno(id);

  if (entregaExistente?.graded) {
    showToast('Esta atividade já foi corrigida e não pode ser alterada nesta demonstração.', 'info');
    return;
  }

  const entrega = entregaExistente || {
    id: Date.now(),
    studentId: obterIdAlunoAtual(),
    studentName: obterAlunoAtual(),
    atividadeId: ativ.id,
    ativTitle: ativ.title,
    date: new Date().toLocaleDateString('pt-BR'),
    graded: false,
    grade: null
  };

  entrega.text = texto;
  entrega.ativTitle = ativ.title;
  entrega.studentName = obterAlunoAtual();
  entrega.studentId = obterIdAlunoAtual();
  entrega.date = new Date().toLocaleDateString('pt-BR');
  entrega.arquivoNome = arquivo?.name || null;

  if (!entregaExistente) {
    db.submissions.unshift(entrega);
  }

  ativ.completed = true;
  ativ.answer = texto;

  salvarDados();

  showToast(
    arquivo
      ? 'Resposta registrada. O nome do arquivo foi anotado para demonstração; o arquivo ainda não foi enviado ao servidor.'
      : 'Resposta enviada para avaliação!'
  );

  renderAtividadesTab();
  renderDashboard();
  renderProgressoTab();
  renderOfflineTab();
  renderProfAtividades();
}

// Compatibilidade com a função antiga do modal.
function handleEnviarResposta(event) {
  handleResponderAtividade(event);
}

function openAtividadeModal(id) {
  selecionarAtividadeParaResposta(id);
  switchTab('atividades');
}

// ============================================================
// BOLETIM DO ALUNO
// ============================================================

function renderBoletim() {
  const tbody = document.getElementById('boletim-notas-list');
  if (!tbody) return;

  const materias = [...new Set([
    ...db.subjects,
    ...db.boletim.map(item => item.subject)
  ])];

  let somaMedias = 0;
  let quantidadeMedias = 0;
  let aprovadas = 0;
  let recuperacao = 0;

  tbody.innerHTML = materias.map(materia => {
    const item = obterBoletimMateria(materia);
    const media = obterNotaMedia(item);

    let situacao = 'Sem notas';
    let classe = '';

    if (media !== null) {
      somaMedias += media;
      quantidadeMedias++;

      if (media >= 7) {
        situacao = 'Aprovado';
        classe = 'tag-green';
        aprovadas++;
      } else {
        situacao = 'Em recuperação';
        classe = 'tag-orange';
        recuperacao++;
      }
    }

    return `
      <tr>
        <td>${escaparHTML(materia)}</td>
        <td>${formatarNota(item.b1)}</td>
        <td>${formatarNota(item.b2)}</td>
        <td>${formatarNota(item.b3)}</td>
        <td>${formatarNota(item.b4)}</td>
        <td><strong>${formatarNota(media)}</strong></td>
        <td><span class="tag ${classe}">${situacao}</span></td>
      </tr>
    `;
  }).join('');

  const mediaGeral = quantidadeMedias ? somaMedias / quantidadeMedias : null;

  const setTexto = (id, valor) => {
    const el = document.getElementById(id);
    if (el) el.textContent = valor;
  };

  setTexto('boletim-media-geral', mediaGeral === null ? '—' : formatarNota(mediaGeral));
  setTexto('boletim-aprovadas', aprovadas);
  setTexto('boletim-recuperacao', recuperacao);
}

// ============================================================
// PROGRESSO
// ============================================================

function renderProgressoTab() {
  const total = db.atividades.length;
  const concluidas = db.atividades.filter(ativ => Boolean(obterEntregaDoAluno(ativ.id))).length;
  const pct = total ? Math.round((concluidas / total) * 100) : 0;

  const setTexto = (id, valor) => {
    const el = document.getElementById(id);
    if (el) el.textContent = valor;
  };

  setTexto('progress-percent-lbl', `${pct}%`);
  setTexto('prog-stat-aulas', total);
  setTexto('prog-stat-concluidas', db.subjects.length);
  setTexto('prog-stat-pendentes', db.boletim.filter(item =>
    [item.b1, item.b2, item.b3, item.b4].some(nota => nota !== null && nota !== undefined)
  ).length);

  const donut = document.getElementById('donut-circle');
  if (donut) donut.setAttribute('stroke-dasharray', `${pct}, 100`);

  const grid = document.getElementById('progresso-materias-grid');
  if (!grid) return;

  grid.innerHTML = db.subjects.map(materia => {
    const atividades = db.atividades.filter(ativ => ativ.subject === materia);
    const feitas = atividades.filter(ativ => Boolean(obterEntregaDoAluno(ativ.id))).length;
    const percentual = atividades.length ? Math.round(feitas / atividades.length * 100) : 0;

    const nota = db.boletim.find(item => item.subject === materia);
    const media = nota ? obterNotaMedia(nota) : null;

    return `
      <div class="card subject-progress-card">
        <div class="sub-prog-top">
          <span class="tag ${getSubjectTagClass(materia)}">${escaparHTML(materia)}</span>
          <strong>${percentual}%</strong>
        </div>
        <div class="progress-bar-bg">
          <div class="progress-bar-fill" style="width:${percentual}%"></div>
        </div>
        <p>${feitas} de ${atividades.length} atividades entregues</p>
        <p>Média: ${formatarNota(media)}</p>
      </div>
    `;
  }).join('');
}

// ============================================================
// ACESSO OFFLINE - DEMONSTRAÇÃO
// ============================================================

function atualizarConexaoOffline() {
  const titulo = document.getElementById('wifi-status-title');
  const icone = document.getElementById('wifi-status-icon');

  if (titulo) {
    titulo.textContent = navigator.onLine ? 'Conexão disponível' : 'Você está offline';
  }

  if (icone) {
    icone.innerHTML = navigator.onLine
      ? '<i class="fa-solid fa-wifi"></i>'
      : '<i class="fa-solid fa-wifi-slash"></i>';
  }
}

window.addEventListener('online', atualizarConexaoOffline);
window.addEventListener('offline', atualizarConexaoOffline);

function renderOfflineTab() {
  atualizarConexaoOffline();

  const contador = document.getElementById('off-count-ativ');
  const container = document.getElementById('offline-list-container');

  const pendentes = db.atividades.filter(ativ => !obterEntregaDoAluno(ativ.id));

  if (contador) contador.textContent = `(${pendentes.length})`;
  if (!container) return;

  container.innerHTML = pendentes.length
    ? pendentes.map(ativ => `
        <div class="activity-item">
          <div class="act-left">
            <div class="act-icon ${getSubjectTagClass(ativ.subject)}">
              <i class="fa-solid fa-book"></i>
            </div>
            <div>
              <div class="act-title">${escaparHTML(ativ.title)}</div>
              <div class="act-meta">${escaparHTML(ativ.subject)} · ${escaparHTML(ativ.date)}</div>
            </div>
          </div>
          <button class="btn-primary" onclick="selecionarAtividadeParaResposta(${ativ.id}); switchTab('atividades')">
            Abrir atividade
          </button>
        </div>
      `).join('')
    : '<p class="text-muted">Não há atividades pendentes.</p>';
}

function switchOfflineSubTab() {
  renderOfflineTab();
}

function sincronizarOffline() {
  salvarDados();

  const agora = new Date();
  const horario = agora.toLocaleTimeString('pt-BR', {
    hour: '2-digit',
    minute: '2-digit'
  });

  const texto = document.getElementById('wifi-last-sync');
  if (texto) texto.textContent = `Dados locais salvos às ${horario}`;

  showToast('Dados locais sincronizados no navegador.', 'info');
}

function limparOffline() {
  const confirmar = confirm(
    'Esta ação limpa os dados de demonstração guardados no navegador. Deseja continuar?'
  );

  if (!confirmar) return;

  localStorage.removeItem(CHAVE_DADOS);
  showToast('Os dados locais foram removidos. Recarregue a página para restaurar os exemplos.', 'info');
}

// ============================================================
// PERFIL
// ============================================================

function renderPerfilTab() {
  const user = db.currentUser;
  if (!user) return;

  const setTexto = (id, valor) => {
    const el = document.getElementById(id);
    if (el) el.textContent = valor;
  };

  setTexto('profile-avatar-box', user.initials || gerarIniciais(user.name));
  setTexto('profile-name-text', user.name);
  setTexto('profile-email-text', user.email);
  setTexto('profile-ra-text', user.ra ? `RM: ${user.ra}` : 'RM: ');
  setTexto('profile-role-tag', formatRole(user.role));

  const materias = document.getElementById('profile-subjects-container');
  if (materias) {
    materias.innerHTML = db.subjects.map(materia =>
      `<span class="tag ${getSubjectTagClass(materia)}">${escaparHTML(materia)}</span>`
    ).join('');
  }

  const total = db.atividades.length;
  const feitas = db.atividades.filter(ativ => Boolean(obterEntregaDoAluno(ativ.id))).length;
  const pct = total ? Math.round(feitas / total * 100) : 0;

  setTexto('profile-general-pct-text', `${pct}%`);

  const barra = document.getElementById('profile-general-bar-fill');
  if (barra) barra.style.width = `${pct}%`;

  setTexto('profile-general-subtext', `${feitas} de ${total} atividades entregues`);
}

function openEditProfileModal() {
  if (!db.currentUser) return;

  const nome = document.getElementById('edit-profile-name');
  const email = document.getElementById('edit-profile-email');

  if (nome) nome.value = db.currentUser.name;
  if (email) email.value = db.currentUser.email;

  document.getElementById('modal-edit-profile')?.classList.remove('hidden');
}

function handleSaveProfile(event) {
  event.preventDefault();

  if (!db.currentUser) return;

  const name = document.getElementById('edit-profile-name')?.value.trim();
  const email = document.getElementById('edit-profile-email')?.value.trim();

  if (!name || !email) {
    showToast('Preencha o nome e o e-mail.', 'info');
    return;
  }

  const duplicado = db.users.some(user =>
    user.id !== db.currentUser.id &&
    user.email.toLowerCase() === email.toLowerCase()
  );

  if (duplicado) {
    showToast('Este e-mail já está sendo usado por outra conta.', 'error');
    return;
  }

  db.currentUser.name = name;
  db.currentUser.email = email;
  db.currentUser.initials = gerarIniciais(name);

  const usuarioLista = db.users.find(user =>
    String(user.id) === String(db.currentUser.id)
  );

  if (usuarioLista) Object.assign(usuarioLista, db.currentUser);

  localStorage.setItem('usuarioLogado', JSON.stringify(db.currentUser));
  salvarDados();

  closeModal('modal-edit-profile');
  renderPerfilTab();

  showToast('Perfil atualizado no navegador!');
}

// ============================================================
// PROFESSOR - MATÉRIAS E ATIVIDADES
// ============================================================

function populateSubjectSelects() {
  const selects = [
    document.getElementById('nova-atividade-materia'),
    document.getElementById('filtro-atividade-materia'),
    document.getElementById('coord-filtro-materia')
  ];

  selects.forEach(select => {
    if (!select) return;

    const valorAtual = select.value;
    const primeiraOpcao = select.options[0]?.outerHTML || '';

    const opcoes = db.subjects.map(materia =>
      `<option value="${escaparHTML(materia)}">${escaparHTML(materia)}</option>`
    ).join('');

    select.innerHTML = primeiraOpcao + opcoes;

    if (db.subjects.includes(valorAtual)) {
      select.value = valorAtual;
    }
  });
}

function formatarData(data) {
  if (!data) return 'Sem data';

  const partes = data.split('-');

  if (partes.length === 3) {
    return `${partes[2]}/${partes[1]}/${partes[0]}`;
  }

  return data;
}


function handleNovaAtividadeSubmit(event) {
  if (event) event.preventDefault();

  const titulo = document.getElementById('new-ativ-title')?.value.trim();
  const materia = document.getElementById('new-ativ-subject')?.value;
  const tipo = document.getElementById('new-ativ-type')?.value;
  const dataEntrega = document.getElementById('new-ativ-date')?.value;
  const pontuacao = Number(
    document.getElementById('new-ativ-points')?.value
  );
  const descricao = document
    .getElementById('new-ativ-description')?.value.trim();

  if (!titulo || !materia || !tipo || !dataEntrega || !descricao) {
    showToast('Preencha todos os campos da atividade.', 'error');
    return;
  }

  if (!pontuacao || pontuacao < 1 || pontuacao > 100) {
    showToast('A pontuação deve estar entre 1 e 100.', 'error');
    return;
  }

  const novaAtividade = {
    id: Date.now(),
    title: titulo,
    subject: materia,
    type: tipo,
    date: dataEntrega.split('-').reverse().join('/'),
    dueDate: dataEntrega,
    points: pontuacao,
    description: descricao,
    completed: false,
    answer: null,
    professorId: db.currentUser?.id ?? null,
    professorName: db.currentUser?.nome || db.currentUser?.name || 'Professor',
    createdAt: new Date().toISOString()
  };

  db.atividades.unshift(novaAtividade);

  // Guarda as atividades criadas no navegador.
  try {
    localStorage.setItem(
      'escolaConectadaDados',
      JSON.stringify({
        atividades: db.atividades,
        submissions: db.submissions || [],
        boletim: db.boletim || [],
        users: db.users || []
      })
    );
  } catch (erro) {
    console.error('Erro ao salvar atividade:', erro);
    showToast('Não foi possível salvar a atividade.', 'error');
    return;
  }

  const formulario = document.getElementById('form-nova-atividade');
  if (formulario) formulario.reset();

  const pontuacaoInput = document.getElementById('new-ativ-points');
  if (pontuacaoInput) pontuacaoInput.value = 100;

  // Atualiza as telas que já existem no site.
  if (typeof renderAtividadesTab === 'function') {
    renderAtividadesTab();
  }

  if (typeof renderDashboard === 'function') {
    renderDashboard();
  }

  if (typeof renderProfSubmissions === 'function') {
    renderProfSubmissions();
  }

  showToast('Atividade publicada com sucesso!', 'success');
}


function renderProfAtividades() {
  const lista = document.getElementById('prof-atividades-lista');
  const tbody = document.getElementById('prof-respostas-lista');

  const total = document.getElementById('prof-ativ-total');
  const entregas = document.getElementById('prof-ativ-entregas');
  const corrigidas = document.getElementById('prof-ativ-corrigidas');

  if (total) total.textContent = db.atividades.length;
  if (entregas) entregas.textContent = db.submissions.length;
  if (corrigidas) corrigidas.textContent = db.submissions.filter(sub => sub.graded).length;

  if (lista) {
    lista.innerHTML = db.atividades.length
      ? db.atividades.map(ativ => {
          const totalEntregas = db.submissions.filter(sub =>
            sub.atividadeId === ativ.id || sub.ativTitle === ativ.title
          ).length;

          return `
            <div class="activity-item">
              <div class="act-left">
                <div class="act-icon ${getSubjectTagClass(ativ.subject)}">
                  <i class="fa-solid fa-book-open"></i>
                </div>
                <div>
                  <div class="act-title">${escaparHTML(ativ.title)}</div>
                  <div class="act-meta">
                    ${escaparHTML(ativ.subject)} · ${escaparHTML(ativ.turma || 'Turma não informada')} · Prazo: ${escaparHTML(ativ.date)}
                  </div>
                  <p>${escaparHTML(ativ.description || '')}</p>
                  <small>${totalEntregas} entrega(s) · Valor: ${ativ.points}</small>
                </div>
              </div>
              <button class="btn-outline" onclick="excluirAtividade(${ativ.id})">Excluir</button>
            </div>
          `;
        }).join('')
      : '<p class="text-muted">Nenhuma atividade cadastrada.</p>';
  }

  if (tbody) {
    tbody.innerHTML = db.submissions.length
      ? db.submissions.map(sub => `
          <tr>
            <td>${escaparHTML(sub.studentName)}</td>
            <td>${escaparHTML(sub.ativTitle)}</td>
            <td>${escaparHTML(sub.date || '—')}</td>
            <td>
              <button class="btn-outline" onclick="verResposta(${sub.id})">Ver resposta</button>
            </td>
            <td>${sub.graded ? formatarNota(sub.grade) : '—'}</td>
            <td>
              ${sub.graded
                ? '<span class="tag tag-green">Corrigida</span>'
                : `<button class="btn-primary" onclick="darNota(${sub.id})">Corrigir</button>`
              }
            </td>
          </tr>
        `).join('')
      : '<tr><td colspan="6">Nenhuma resposta recebida.</td></tr>';
  }
}

function verResposta(id) {
  const sub = db.submissions.find(item => item.id === id);
  if (!sub) return;

  alert(
    `Aluno: ${sub.studentName}\n` +
    `Atividade: ${sub.ativTitle}\n` +
    `Data: ${sub.date || 'Não informada'}\n\n` +
    `Resposta:\n${sub.text}\n\n` +
    `Arquivo: ${sub.arquivoNome || 'Nenhum arquivo registrado'}`
  );
}

// ============================================================
// NOTAS E FREQUÊNCIA DO PROFESSOR
// ============================================================

function renderProfNotas() {
  const container = document.getElementById('prof-notas-container');
  if (!container) return;

  const alunos = db.users.filter(user => user.role === 'aluno');

  container.innerHTML = `
    <div class="form-group">
      <label for="nota-aluno-select">Aluno</label>
      <select id="nota-aluno-select" class="input-styled" onchange="renderTabelaNotasProfessor()">
        ${alunos.map(aluno => `
          <option value="${aluno.id}">${escaparHTML(aluno.name)}</option>
        `).join('')}
      </select>
    </div>

    <div id="tabela-notas-professor"></div>

    <hr style="margin:2rem 0;">

    <h3 class="card-subtitle">Registro de frequência</h3>
    <p>Marque a situação do aluno na data da aula.</p>

    <div class="form-row">
      <div class="form-group flex-1">
        <label for="frequencia-aluno">Aluno</label>
        <select id="frequencia-aluno" class="input-styled">
          ${alunos.map(aluno => `
            <option value="${aluno.id}">${escaparHTML(aluno.name)}</option>
          `).join('')}
        </select>
      </div>

      <div class="form-group flex-1">
        <label for="frequencia-data">Data da aula</label>
        <input type="date" id="frequencia-data" class="input-styled" value="${new Date().toISOString().slice(0, 10)}">
      </div>
    </div>

    <div class="form-row">
      <div class="form-group flex-1">
        <label for="frequencia-materia">Matéria</label>
        <select id="frequencia-materia" class="input-styled">
          ${db.subjects.map(materia => `
            <option value="${escaparHTML(materia)}">${escaparHTML(materia)}</option>
          `).join('')}
        </select>
      </div>

      <div class="form-group flex-1">
        <label for="frequencia-status">Situação</label>
        <select id="frequencia-status" class="input-styled">
          <option value="presente">Presente</option>
          <option value="falta">Falta</option>
          <option value="justificada">Falta justificada</option>
        </select>
      </div>
    </div>

    <button class="btn-primary" onclick="registrarFrequencia()">
      <i class="fa-solid fa-calendar-check"></i> Registrar frequência
    </button>

    <div class="table-responsive mt-4">
      <table class="data-table">
        <thead>
          <tr>
            <th>Aluno</th>
            <th>Data</th>
            <th>Matéria</th>
            <th>Situação</th>
          </tr>
        </thead>
        <tbody id="frequencia-lista"></tbody>
      </table>
    </div>
  `;

  renderTabelaNotasProfessor();
  renderListaFrequencia();
}

function renderTabelaNotasProfessor() {
  const container = document.getElementById('tabela-notas-professor');
  const alunoSelect = document.getElementById('nota-aluno-select');

  if (!container || !alunoSelect) return;

  const alunoId = alunoSelect.value;

  container.innerHTML = `
    <h3 class="card-subtitle mt-4">Notas por bimestre</h3>
    <p>As notas são registradas de 0 a 10.</p>

    <div class="table-responsive">
      <table class="data-table">
        <thead>
          <tr>
            <th>Matéria</th>
            <th>1º Bim.</th>
            <th>2º Bim.</th>
            <th>3º Bim.</th>
            <th>4º Bim.</th>
            <th>Ação</th>
          </tr>
        </thead>
        <tbody>
          ${db.subjects.map((materia, indice) => {
            const item = obterBoletimMateria(materia);
            const id = `nota-${indice}`;

            return `
              <tr>
                <td>${escaparHTML(materia)}</td>
                <td><input class="input-styled" type="number" min="0" max="10" step="0.1" id="${id}-b1" value="${item.b1 ?? ''}" placeholder="—"></td>
                <td><input class="input-styled" type="number" min="0" max="10" step="0.1" id="${id}-b2" value="${item.b2 ?? ''}" placeholder="—"></td>
                <td><input class="input-styled" type="number" min="0" max="10" step="0.1" id="${id}-b3" value="${item.b3 ?? ''}" placeholder="—"></td>
                <td><input class="input-styled" type="number" min="0" max="10" step="0.1" id="${id}-b4" value="${item.b4 ?? ''}" placeholder="—"></td>
                <td>
                  <button class="btn-primary" onclick="salvarNotasMateria('${escaparHTML(materia)}', '${id}')">Salvar</button>
                </td>
              </tr>
            `;
          }).join('')}
        </tbody>
      </table>
    </div>
  `;

  // Guarda o aluno selecionado para futura integração por aluno.
  container.dataset.alunoId = alunoId;
}

function salvarNotasMateria(materia, prefixo) {
  const item = obterBoletimMateria(materia);
  const campos = ['b1', 'b2', 'b3', 'b4'];
  const novasNotas = {};

  for (const campo of campos) {
    const input = document.getElementById(`${prefixo}-${campo}`);
    const valor = input?.value.trim() ?? '';

    if (valor === '') {
      novasNotas[campo] = null;
      continue;
    }

    const nota = Number(valor);

    if (!Number.isFinite(nota) || nota < 0 || nota > 10) {
      showToast('As notas precisam estar entre 0 e 10.', 'error');
      return;
    }

    novasNotas[campo] = nota;
  }

  Object.assign(item, novasNotas);
  salvarDados();

  renderBoletim();
  renderDashboard();
  renderProgressoTab();

  showToast(`Notas de ${materia} salvas no navegador!`);
}

function registrarFrequencia() {
  const alunoId = Number(document.getElementById('frequencia-aluno')?.value);
  const data = document.getElementById('frequencia-data')?.value;
  const materia = document.getElementById('frequencia-materia')?.value;
  const status = document.getElementById('frequencia-status')?.value;

  const aluno = db.users.find(user => Number(user.id) === alunoId);

  if (!aluno || !data || !materia || !status) {
    showToast('Preencha os dados da frequência.', 'info');
    return;
  }

  const existente = db.frequencia.find(item =>
    Number(item.alunoId) === alunoId &&
    item.data === data &&
    item.materia === materia
  );

  if (existente) {
    existente.status = status;
  } else {
    db.frequencia.push({
      id: Date.now(),
      alunoId,
      alunoNome: aluno.name,
      data,
      materia,
      status
    });
  }

  salvarDados();
  renderListaFrequencia();

  showToast('Frequência registrada!');
}

function renderListaFrequencia() {
  const tbody = document.getElementById('frequencia-lista');
  if (!tbody) return;

  const frequencias = [...db.frequencia].reverse();

  tbody.innerHTML = frequencias.length
    ? frequencias.map(item => `
        <tr>
          <td>${escaparHTML(item.alunoNome)}</td>
          <td>${formatarData(item.data)}</td>
          <td>${escaparHTML(item.materia)}</td>
          <td>${formatarSituacaoFrequencia(item.status)}</td>
        </tr>
      `).join('')
    : '<tr><td colspan="4">Nenhuma frequência registrada.</td></tr>';
}

function formatarSituacaoFrequencia(status) {
  const nomes = {
    presente: 'Presente',
    falta: 'Falta',
    justificada: 'Falta justificada'
  };

  return nomes[status] || status;
}

// ============================================================
// CORRIGIR ENTREGA E ATRIBUIR NOTA
// ============================================================

function darNota(subId) {
  const sub = db.submissions.find(item => item.id === subId);
  if (!sub) return;

  const entrada = prompt('Digite a nota de 0 a 10:');

  if (entrada === null) return;

  const nota = Number(entrada);

  if (!Number.isFinite(nota) || nota < 0 || nota > 10) {
    showToast('Digite uma nota válida entre 0 e 10.', 'error');
    return;
  }

  sub.grade = nota;
  sub.graded = true;

  const atividade = db.atividades.find(item =>
    item.id === sub.atividadeId || item.title === sub.ativTitle
  );

  if (atividade) {
    const materia = obterBoletimMateria(atividade.subject);

    // A nota da atividade fica registrada na entrega.
    // Não altera automaticamente um bimestre para evitar
    // substituir uma nota bimestral sem confirmação.
  }

  salvarDados();
  renderProfAtividades();
  renderProfNotas();
  renderBoletim();

  showToast(`Nota ${formatarNota(nota)} registrada para ${sub.studentName}!`);
}

// ============================================================
// COORDENAÇÃO
// ============================================================

function renderCoordDashboard() {
  const alunos = db.users.filter(user => user.role === 'aluno').length;
  const professores = db.users.filter(user => user.role === 'professor').length;

  const valores = {
    'coord-total-alunos': alunos,
    'coord-total-professores': professores,
    'coord-total-aulas': db.atividades.length + db.aulas.length,
    'coord-total-materias': db.subjects.length,
    'coord-total-atividades': db.atividades.length,
    'coord-ativ-pendentes': db.atividades.filter(ativ =>
      !db.submissions.some(sub => sub.atividadeId === ativ.id)
    ).length,
    'coord-ativ-entregues': db.submissions.length,
    'coord-stat-alunos': alunos,
    'coord-stat-profs': professores,
    'coord-stat-aulas': db.atividades.length + db.aulas.length,
    'coord-stat-materias': db.subjects.length
  };

  Object.entries(valores).forEach(([id, valor]) => {
    const el = document.getElementById(id);
    if (el) el.textContent = valor;
  });

  const tbodyUsers = document.querySelector('#table-coord-users tbody');

  if (tbodyUsers) {
    tbodyUsers.innerHTML = db.users.map(user => `
      <tr>
        <td>${escaparHTML(user.name)}</td>
        <td>${escaparHTML(user.email)}</td>
        <td><span class="badge-role">${formatRole(user.role)}</span></td>
        <td>
          <button class="btn-sm-danger" onclick="excluirUsuario(${Number(user.id)})">
            <i class="fa-solid fa-user-xmark"></i> Remover
          </button>
        </td>
      </tr>
    `).join('');
  }

  const materias = document.getElementById('coord-materias-list');

  if (materias) {
    materias.innerHTML = db.subjects.map(materia => `
      <span class="tag ${getSubjectTagClass(materia)}">${escaparHTML(materia)}</span>
    `).join('');
  }

  renderCoordAtividades();
}

function renderCoordAtividades() {
  const container = document.getElementById('coord-atividades-lista');
  if (!container) return;

  const filtro = document.getElementById('coord-filtro-materia')?.value || '';

  const lista = db.atividades.filter(ativ =>
    !filtro || ativ.subject === filtro
  );

  container.innerHTML = lista.length
    ? lista.map(ativ => {
        const entregas = db.submissions.filter(sub =>
          sub.atividadeId === ativ.id || sub.ativTitle === ativ.title
        ).length;

        return `
          <div class="activity-item">
            <div class="act-left">
              <div class="act-icon ${getSubjectTagClass(ativ.subject)}">
                <i class="fa-solid fa-clipboard-list"></i>
              </div>
              <div>
                <div class="act-title">${escaparHTML(ativ.title)}</div>
                <div class="act-meta">
                  ${escaparHTML(ativ.subject)} · ${escaparHTML(ativ.turma || 'Turma não informada')} · ${escaparHTML(ativ.date)}
                </div>
                <small>${entregas} entrega(s) registrada(s)</small>
              </div>
            </div>
          </div>
        `;
      }).join('')
    : '<p class="text-muted">Nenhuma atividade encontrada.</p>';
}

function handleNovoUsuarioSubmit(event) {
  event.preventDefault();

  const name = document.getElementById('new-user-name')?.value.trim();
  const email = document.getElementById('new-user-email')?.value.trim();
  const role = document.getElementById('new-user-role')?.value;
  const password = document.getElementById('new-user-password')?.value;
  const ra = document.getElementById('new-user-ra')?.value.trim();

  if (!name || !email || !role) {
    showToast('Preencha os campos obrigatórios.', 'info');
    return;
  }

  if (password && password.length < 8) {
    showToast('A senha precisa ter pelo menos 8 caracteres.', 'info');
    return;
  }

  if (role === 'aluno' && !ra) {
    showToast('Informe o RM do aluno.', 'info');
    return;
  }

  if (db.users.some(user => user.email.toLowerCase() === email.toLowerCase())) {
    showToast('Este e-mail já está cadastrado.', 'error');
    return;
  }

  db.users.push({
    id: Date.now(),
    name,
    email,
    role,
    initials: gerarIniciais(name),
    ra: role === 'aluno' ? ra : ''
  });

  salvarDados();
  event.target.reset();
  atualizarCampoRM();
  renderCoordDashboard();

  showToast('Usuário adicionado à demonstração local!');
}

function atualizarCampoRM() {
  const role = document.getElementById('new-user-role')?.value;
  const grupo = document.getElementById('new-user-ra-group');
  const campo = document.getElementById('new-user-ra');

  if (!grupo || !campo) return;

  const ehAluno = role === 'aluno';

  grupo.style.display = ehAluno ? '' : 'none';
  campo.required = ehAluno;
}

function handleNovaMateriaSubmit(event) {
  event.preventDefault();

  const input = document.getElementById('new-subject-name');
  const materia = input?.value.trim();

  if (!materia) {
    showToast('Digite o nome da matéria.', 'info');
    return;
  }

  if (db.subjects.some(item => item.toLowerCase() === materia.toLowerCase())) {
    showToast('Esta matéria já existe.', 'info');
    return;
  }

  db.subjects.push(materia);
  salvarDados();
  if (input) input.value = '';

  populateSubjectSelects();
  renderCoordDashboard();

  showToast('Matéria adicionada!');
}

function excluirAtividade(id) {
  if (!confirm('Deseja realmente excluir esta atividade?')) return;

  db.atividades = db.atividades.filter(ativ => ativ.id !== id);
  db.submissions = db.submissions.filter(sub => sub.atividadeId !== id);

  salvarDados();
  renderProfAtividades();
  renderCoordDashboard();
  renderAtividadesTab();
  renderDashboard();
  renderProgressoTab();
  renderOfflineTab();

  showToast('Atividade removida.', 'info');
}

function excluirUsuario(id) {
  if (db.currentUser && String(db.currentUser.id) === String(id)) {
    showToast('Você não pode remover a conta que está usando.', 'error');
    return;
  }

  if (!confirm('Deseja realmente remover este usuário?')) return;

  db.users = db.users.filter(user => String(user.id) !== String(id));
  db.frequencia = db.frequencia.filter(item => String(item.alunoId) !== String(id));

  salvarDados();
  renderCoordDashboard();

  showToast('Usuário removido da demonstração local.', 'info');
}

// ============================================================
// CADASTRO DO ALUNO
// ============================================================

function openCadastroAluno() {
  document.getElementById('modal-cadastro-aluno')?.classList.remove('hidden');
}

function handleCadastroAlunoSubmit(event) {
  event.preventDefault();

  const nome = document.getElementById('cadastro-nome')?.value.trim();
  const email = document.getElementById('cadastro-email')?.value.trim();
  const senha = document.getElementById('cadastro-senha')?.value;
  const ra = document.getElementById('cadastro-ra')?.value.trim();

  if (!nome || !email || !senha || !ra) {
    showToast('Preencha todos os campos.', 'info');
    return;
  }

  if (senha.length < 8) {
    showToast('A senha precisa ter pelo menos 8 caracteres.', 'info');
    return;
  }

  if (db.users.some(user => user.email.toLowerCase() === email.toLowerCase())) {
    showToast('Este e-mail já está cadastrado.', 'error');
    return;
  }

  if (db.users.some(user => user.role === 'aluno' && user.ra && user.ra.toLowerCase() === ra.toLowerCase())) {
    showToast('Este RM já está cadastrado.', 'error');
    return;
  }

  const user = {
    id: Date.now(),
    name: nome,
    email,
    role: 'aluno',
    initials: gerarIniciais(nome),
    ra
  };

  db.users.push(user);
  salvarDados();

  closeModal('modal-cadastro-aluno');
  event.target.reset();

  doLogin(user);

  showToast('Conta de demonstração criada! O cadastro definitivo será conectado ao backend depois.', 'info');
}

// ============================================================
// MODAIS
// ============================================================

function closeModal(modalId) {
  document.getElementById(modalId)?.classList.add('hidden');
}

document.addEventListener('click', event => {
  if (event.target.classList.contains('modal-overlay')) {
    event.target.classList.add('hidden');
  }
});

document.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    document.querySelectorAll('.modal-overlay').forEach(modal => {
      modal.classList.add('hidden');
    });
  }
});

// ============================================================
// BUSCA GLOBAL: compatibilidade com versões anteriores
// ============================================================

function handleGlobalSearch(query) {
  const texto = String(query || '').trim().toLowerCase();

  switchTab('atividades');

  const campoMateria = document.getElementById('filtro-atividade-materia');
  if (campoMateria) campoMateria.value = '';

  const campoStatus = document.getElementById('filtro-atividade-status');
  if (campoStatus) campoStatus.value = '';

  if (!texto) {
    renderAtividadesTab();
    return;
  }

  const container = document.getElementById('atividades-lista');
  if (!container) return;

  const resultados = db.atividades.filter(ativ =>
    `${ativ.title} ${ativ.subject} ${ativ.type} ${ativ.description || ''}`
      .toLowerCase()
      .includes(texto)
  );

  container.innerHTML = resultados.length
    ? resultados.map(ativ => `
        <div class="activity-item">
          <div class="act-left">
            <div class="act-icon ${getSubjectTagClass(ativ.subject)}">
              <i class="fa-solid fa-magnifying-glass"></i>
            </div>
            <div>
              <div class="act-title">${escaparHTML(ativ.title)}</div>
              <div class="act-meta">${escaparHTML(ativ.subject)} · ${escaparHTML(ativ.date)}</div>
            </div>
          </div>
          <button class="btn-primary" onclick="selecionarAtividadeParaResposta(${ativ.id})">Abrir</button>
        </div>
      `).join('')
    : '<p class="text-muted">Nenhuma atividade encontrada.</p>';
}
