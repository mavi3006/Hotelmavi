(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=`http://localhost:3000/api`,t=`login`,n=document.querySelector(`#app`);function r(){t===`login`?i():a()}function i(){n.innerHTML=`
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
  `,document.getElementById(`login-form`).addEventListener(`submit`,s),document.getElementById(`toggle-to-register`).addEventListener(`click`,()=>{t=`register`,r()}),document.getElementById(`cpf`).addEventListener(`input`,e=>{e.target.value=e.target.value.replace(/\D/g,``)})}function a(){n.innerHTML=`
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
  `,document.getElementById(`register-form`).addEventListener(`submit`,c),document.getElementById(`toggle-to-login`).addEventListener(`click`,()=>{t=`login`,r()}),document.getElementById(`cpf-register`).addEventListener(`input`,e=>{e.target.value=e.target.value.replace(/\D/g,``)}),document.getElementById(`telefone`).addEventListener(`input`,e=>{e.target.value=e.target.value.replace(/\D/g,``)})}function o(e,t=`error`){let n=document.getElementById(`alert-container`);n.innerHTML=`
    <div class="alert ${t===`success`?`alert-success`:`alert-error`}">
      ${e}
    </div>
  `,setTimeout(()=>{n.innerHTML=``},5e3)}async function s(t){t.preventDefault();let n=document.getElementById(`login-btn`),r=t.target,i=new FormData(r),a=i.get(`cpf`),s=i.get(`senha`);if(a.length!==11){o(`CPF deve conter exatamente 11 dígitos`);return}n.disabled=!0,n.classList.add(`btn-loading`),n.querySelector(`.btn-text`).textContent=`Entrando...`;try{let t=await fetch(`${e}/login`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({cpf:a,senha:s})}),n=await t.json();t.ok?(o(`Login realizado com sucesso!`,`success`),console.log(`Usuário logado:`,n.user),setTimeout(()=>{o(`Redirecionando...`,`success`)},1500)):o(n.error||`Erro ao fazer login`)}catch(e){console.error(`Erro:`,e),o(`Erro ao conectar com o servidor. Verifique se o backend está rodando.`)}finally{n.disabled=!1,n.classList.remove(`btn-loading`),n.querySelector(`.btn-text`).textContent=`Entrar`}}async function c(n){n.preventDefault();let i=document.getElementById(`register-btn`),a=n.target,s=new FormData(a),c=s.get(`nome`),l=s.get(`email`),u=s.get(`cpf`),d=s.get(`telefone`),f=s.get(`endereco`),p=s.get(`senha`);if(u&&u.length!==11){o(`CPF deve conter exatamente 11 dígitos`);return}i.disabled=!0,i.classList.add(`btn-loading`),i.querySelector(`.btn-text`).textContent=`Criando...`;try{let n=await fetch(`${e}/register`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({nome:c,email:l,cpf:u||null,telefone:d||null,endereco:f||null,senha:p})}),i=await n.json();n.ok?(o(`Conta criada com sucesso!`,`success`),console.log(`Usuário registrado:`,i.user),a.reset(),setTimeout(()=>{t=`login`,r()},2e3)):o(i.error||`Erro ao criar conta`)}catch(e){console.error(`Erro:`,e),o(`Erro ao conectar com o servidor. Verifique se o backend está rodando.`)}finally{i.disabled=!1,i.classList.remove(`btn-loading`),i.querySelector(`.btn-text`).textContent=`Criar Conta`}}r();