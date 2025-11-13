import express from 'express';
import dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';
import cors from 'cors';
import bcrypt from 'bcrypt';

// Carregar variáveis de ambiente
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json());

// Verificar se as variáveis de ambiente estão configuradas
const SUPABASE_URL = process.env.SUPABASE_URL;
const SERVICE_ROLE = process.env.SERVICE_ROLE;
const ANON_KEY = process.env.ANON_KEY;

if (!SUPABASE_URL || !SERVICE_ROLE || !ANON_KEY) {
  console.error('Erro: Variáveis de ambiente não configuradas!');
  console.error('Certifique-se de ter SUPABASE_URL, SERVICE_ROLE e ANON_KEY no arquivo .env');
  process.exit(1);
}

// Inicializar cliente Supabase
// Usando ANON_KEY para operações do cliente
const supabase = createClient(SUPABASE_URL, ANON_KEY);

// Cliente com SERVICE_ROLE para operações administrativas (se necessário)
const supabaseAdmin = createClient(SUPABASE_URL, SERVICE_ROLE, {
  auth: {
    autoRefreshToken: false,
    persistSession: false
  }
});

// Rota para registrar novos usuários
app.post('/api/register', async (req, res) => {
  try {
    const { nome, endereco, email, senha, cpf, telefone } = req.body;

    // Validação dos campos obrigatórios
    if (!nome || !email || !senha) {
      return res.status(400).json({
        error: 'Nome, email e senha são obrigatórios'
      });
    }

    // Validar formato de CPF (11 dígitos)
    if (cpf && cpf.length !== 11) {
      return res.status(400).json({
        error: 'CPF deve conter exatamente 11 dígitos'
      });
    }

    // Verificar se email já existe
    const { data: existingUser } = await supabaseAdmin
      .from('usuarios')
      .select('email')
      .eq('email', email)
      .eq('active', true)
      .single();

    if (existingUser) {
      return res.status(400).json({
        error: 'Email já cadastrado'
      });
    }

    // Verificar se CPF já existe (se fornecido)
    if (cpf) {
      const { data: existingCpf } = await supabaseAdmin
        .from('usuarios')
        .select('cpf')
        .eq('cpf', cpf)
        .eq('active', true)
        .single();

      if (existingCpf) {
        return res.status(400).json({
          error: 'CPF já cadastrado'
        });
      }
    }

    // Hash da senha
    const saltRounds = 10;
    const senhaHash = await bcrypt.hash(senha, saltRounds);

    // Inserir usuário na tabela usuarios
    const { data, error } = await supabaseAdmin
      .from('usuarios')
      .insert({
        nome,
        endereco: endereco || null,
        email,
        senha: senhaHash,
        cpf: cpf || null,
        telefone: telefone || null,
        active: true
      })
      .select()
      .single();

    if (error) {
      console.error('Erro ao inserir usuário:', error);
      return res.status(400).json({
        error: error.message || 'Erro ao registrar usuário'
      });
    }

    // Remover senha da resposta
    const { senha: _, ...userWithoutPassword } = data;

    res.status(201).json({
      message: 'Usuário registrado com sucesso',
      user: userWithoutPassword
    });
  } catch (error) {
    console.error('Erro ao registrar usuário:', error);
    res.status(500).json({
      error: 'Erro interno do servidor'
    });
  }
});

// Rota para autenticar/login de usuários
app.post('/api/login', async (req, res) => {
  try {
    const { cpf, senha } = req.body;

    // Validação básica
    if (!cpf || !senha) {
      return res.status(400).json({
        error: 'CPF e senha são obrigatórios'
      });
    }

    // Validar formato de CPF (11 dígitos)
    if (cpf.length !== 11) {
      return res.status(400).json({
        error: 'CPF deve conter exatamente 11 dígitos'
      });
    }

    // Buscar usuário pelo CPF
    const { data: usuario, error: fetchError } = await supabaseAdmin
      .from('usuarios')
      .select('id, nome, endereco, email, senha, cpf, telefone, created_at, active')
      .eq('cpf', cpf)
      .eq('active', true)
      .single();

    if (fetchError || !usuario) {
      return res.status(401).json({
        error: 'CPF ou senha inválidos'
      });
    }

    // Verificar se o usuário está ativo
    if (!usuario.active) {
      return res.status(401).json({
        error: 'Usuário inativo'
      });
    }

    // Verificar senha
    const senhaValida = await bcrypt.compare(senha, usuario.senha);

    if (!senhaValida) {
      return res.status(401).json({
        error: 'CPF ou senha inválidos'
      });
    }

    // Remover senha da resposta
    const { senha: _, ...userWithoutPassword } = usuario;

    res.status(200).json({
      message: 'Login realizado com sucesso',
      user: userWithoutPassword
    });
  } catch (error) {
    console.error('Erro ao fazer login:', error);
    res.status(500).json({
      error: 'Erro interno do servidor'
    });
  }
});

// Rota de health check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'OK',
    message: 'Servidor está funcionando'
  });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
  console.log(`Health check: https://hotelmavi.onrender.com/api/health`);
});

