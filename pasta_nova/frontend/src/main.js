import './style.css';

// Configuração da API
const API_BASE_URL = 'http://localhost:3000/api';

// Estado da aplicação
let currentView = 'login'; // 'login' ou 'register'

// Elementos do DOM
const app = document.querySelector('#app');

// Renderizar a aplicação
function render() {
  if (currentView === 'login') {
    renderLogin();
  } else {
    renderRegister();
  }
}

// Renderizar tela de login
function renderLogin() {
  app.innerHTML = `
    <div class="app-wrapper">
      <div class="split-container">
        <!-- Painel Esquerdo - Branding -->
        <div class="brand-panel">
          <div class="brand-content">
            <div class="brand-logo">
              <h1 class="brand-title">Hotel Mavi</h1>
              <div class="brand-line"></div>
            </div>
            <p class="brand-tagline">Bem-vindo de volta!</p>
            <p class="brand-description">Entre com suas credenciais para acessar sua conta e continuar sua experiência conosco.</p>
            <div class="brand-features">
              <div class="feature-item">
                <span class="feature-icon">✨</span>
                <span>Experiência Premium</span>
              </div>
              <div class="feature-item">
                <span class="feature-icon">🔒</span>
                <span>Segurança Garantida</span>
              </div>
              <div class="feature-item">
                <span class="feature-icon">🌟</span>
                <span>Atendimento Exclusivo</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Painel Direito - Formulário -->
        <div class="form-panel">
          <div class="form-container">
            <div id="alert-container"></div>
            <form id="login-form" class="auth-form">
              <h2 class="form-title">Entrar</h2>
              <p class="form-subtitle">Acesse sua conta agora</p>
              
              <div class="form-group">
                <label for="cpf" class="input-label">CPF</label>
                <div class="input-wrapper">
                  <input 
                    type="text" 
                    id="cpf" 
                    name="cpf" 
                    placeholder="000.000.000-00"
                    maxlength="11"
                    class="form-input"
                    required
                  />
                </div>
              </div>

              <div class="form-group">
                <label for="senha" class="input-label">Senha</label>
                <div class="input-wrapper">
                  <input 
                    type="password" 
                    id="senha" 
                    name="senha" 
                    placeholder="Digite sua senha"
                    class="form-input"
                    required
                  />
                </div>
              </div>

              <button type="submit" class="btn-primary" id="login-btn">
                <span class="btn-text">Entrar</span>
              </button>

              <div class="form-footer">
                <p class="footer-text">Não tem uma conta?</p>
                <button type="button" class="link-button" id="toggle-to-register">
                  Criar conta agora
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  `;

  // Event listeners
  document.getElementById('login-form').addEventListener('submit', handleLogin);
  document.getElementById('toggle-to-register').addEventListener('click', () => {
    currentView = 'register';
    render();
  });

  // Máscara de CPF (apenas números)
  const cpfInput = document.getElementById('cpf');
  cpfInput.addEventListener('input', (e) => {
    e.target.value = e.target.value.replace(/\D/g, '');
  });
}

// Renderizar tela de registro
function renderRegister() {
  app.innerHTML = `
    <div class="app-wrapper">
      <div class="split-container register-layout">
        <!-- Painel Esquerdo - Branding -->
        <div class="brand-panel">
          <div class="brand-content">
            <div class="brand-logo">
              <h1 class="brand-title">Hotel Mavi</h1>
              <div class="brand-line"></div>
            </div>
            <p class="brand-tagline">Junte-se a nós!</p>
            <p class="brand-description">Crie sua conta e descubra um mundo de conforto e elegância. Preencha seus dados abaixo para começar.</p>
            <div class="brand-features">
              <div class="feature-item">
                <span class="feature-icon">🏨</span>
                <span>Hospedagem de Luxo</span>
              </div>
              <div class="feature-item">
                <span class="feature-icon">💎</span>
                <span>Benefícios Exclusivos</span>
              </div>
              <div class="feature-item">
                <span class="feature-icon">🎯</span>
                <span>Reservas Rápidas</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Painel Direito - Formulário -->
        <div class="form-panel">
          <div class="form-container">
            <div id="alert-container"></div>
            <form id="register-form" class="auth-form">
              <h2 class="form-title">Criar Conta</h2>
              <p class="form-subtitle">Preencha seus dados para começar</p>
              
              <div class="form-grid">
                <div class="form-group full-width">
                  <label for="nome" class="input-label">Nome Completo *</label>
                  <div class="input-wrapper">
                    <input 
                      type="text" 
                      id="nome" 
                      name="nome" 
                      placeholder="Seu nome completo"
                      class="form-input"
                      required
                    />
                  </div>
                </div>

                <div class="form-group full-width">
                  <label for="email" class="input-label">Email *</label>
                  <div class="input-wrapper">
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      placeholder="seu@email.com"
                      class="form-input"
                      required
                    />
                  </div>
                </div>

                <div class="form-group">
                  <label for="cpf-register" class="input-label">CPF</label>
                  <div class="input-wrapper">
                    <input 
                      type="text" 
                      id="cpf-register" 
                      name="cpf" 
                      placeholder="000.000.000-00"
                      maxlength="11"
                      class="form-input"
                    />
                  </div>
                </div>

                <div class="form-group">
                  <label for="telefone" class="input-label">Telefone</label>
                  <div class="input-wrapper">
                    <input 
                      type="text" 
                      id="telefone" 
                      name="telefone" 
                      placeholder="(00) 00000-0000"
                      class="form-input"
                    />
                  </div>
                </div>

                <div class="form-group full-width">
                  <label for="endereco" class="input-label">Endereço</label>
                  <div class="input-wrapper">
                    <input 
                      type="text" 
                      id="endereco" 
                      name="endereco" 
                      placeholder="Rua, número, bairro"
                      class="form-input"
                    />
                  </div>
                </div>

                <div class="form-group full-width">
                  <label for="senha-register" class="input-label">Senha *</label>
                  <div class="input-wrapper">
                    <input 
                      type="password" 
                      id="senha-register" 
                      name="senha" 
                      placeholder="Mínimo 6 caracteres"
                      class="form-input"
                      required
                    />
                  </div>
                </div>
              </div>

              <button type="submit" class="btn-primary" id="register-btn">
                <span class="btn-text">Criar Conta</span>
              </button>

              <div class="form-footer">
                <p class="footer-text">Já tem uma conta?</p>
                <button type="button" class="link-button" id="toggle-to-login">
                  Fazer login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  `;

  // Event listeners
  document.getElementById('register-form').addEventListener('submit', handleRegister);
  document.getElementById('toggle-to-login').addEventListener('click', () => {
    currentView = 'login';
    render();
  });

  // Máscara de CPF (apenas números)
  const cpfInput = document.getElementById('cpf-register');
  cpfInput.addEventListener('input', (e) => {
    e.target.value = e.target.value.replace(/\D/g, '');
  });

  // Máscara de telefone (apenas números)
  const telefoneInput = document.getElementById('telefone');
  telefoneInput.addEventListener('input', (e) => {
    e.target.value = e.target.value.replace(/\D/g, '');
  });
}

// Mostrar alerta
function showAlert(message, type = 'error') {
  const alertContainer = document.getElementById('alert-container');
  const alertClass = type === 'success' ? 'alert-success' : 'alert-error';
  
  alertContainer.innerHTML = `
    <div class="alert ${alertClass}">
      ${message}
    </div>
  `;

  // Remover alerta após 5 segundos
  setTimeout(() => {
    alertContainer.innerHTML = '';
  }, 5000);
}

// Manipular login
async function handleLogin(e) {
  e.preventDefault();
  
  const btn = document.getElementById('login-btn');
  const form = e.target;
  const formData = new FormData(form);
  
  const cpf = formData.get('cpf');
  const senha = formData.get('senha');

  // Validação
  if (cpf.length !== 11) {
    showAlert('CPF deve conter exatamente 11 dígitos');
    return;
  }

  // Desabilitar botão e mostrar loading
  btn.disabled = true;
  btn.classList.add('btn-loading');
  btn.querySelector('.btn-text').textContent = 'Entrando...';

  try {
    const response = await fetch(`${API_BASE_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        cpf,
        senha,
      }),
    });

    const data = await response.json();

    if (response.ok) {
      showAlert('Login realizado com sucesso!', 'success');
      console.log('Usuário logado:', data.user);
      setTimeout(() => {
        showAlert('Redirecionando...', 'success');
      }, 1500);
    } else {
      showAlert(data.error || 'Erro ao fazer login');
    }
  } catch (error) {
    console.error('Erro:', error);
    showAlert('Erro ao conectar com o servidor. Verifique se o backend está rodando.');
  } finally {
    btn.disabled = false;
    btn.classList.remove('btn-loading');
    btn.querySelector('.btn-text').textContent = 'Entrar';
  }
}

// Manipular registro
async function handleRegister(e) {
  e.preventDefault();
  
  const btn = document.getElementById('register-btn');
  const form = e.target;
  const formData = new FormData(form);
  
  const nome = formData.get('nome');
  const email = formData.get('email');
  const cpf = formData.get('cpf');
  const telefone = formData.get('telefone');
  const endereco = formData.get('endereco');
  const senha = formData.get('senha');

  // Validação
  if (cpf && cpf.length !== 11) {
    showAlert('CPF deve conter exatamente 11 dígitos');
    return;
  }

  // Desabilitar botão e mostrar loading
  btn.disabled = true;
  btn.classList.add('btn-loading');
  btn.querySelector('.btn-text').textContent = 'Criando...';

  try {
    const response = await fetch(`${API_BASE_URL}/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        nome,
        email,
        cpf: cpf || null,
        telefone: telefone || null,
        endereco: endereco || null,
        senha,
      }),
    });

    const data = await response.json();

    if (response.ok) {
      showAlert('Conta criada com sucesso!', 'success');
      console.log('Usuário registrado:', data.user);
      form.reset();
      setTimeout(() => {
        currentView = 'login';
        render();
      }, 2000);
    } else {
      showAlert(data.error || 'Erro ao criar conta');
    }
  } catch (error) {
    console.error('Erro:', error);
    showAlert('Erro ao conectar com o servidor. Verifique se o backend está rodando.');
  } finally {
    btn.disabled = false;
    btn.classList.remove('btn-loading');
    btn.querySelector('.btn-text').textContent = 'Criar Conta';
  }
}

// Inicializar aplicação
render();
