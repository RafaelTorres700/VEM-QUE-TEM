// Elementos do formulário
const form = document.getElementById('loginForm');
const emailInput = document.getElementById('email');
const senhaInput = document.getElementById('senha');
const togglePassword = document.getElementById('togglePassword');
const submitBtn = document.getElementById('submitBtn');
const loadingSpinner = document.getElementById('loadingSpinner');
const submitText = document.getElementById('submitText');
const successMessage = document.getElementById('successMessage');
const errorMessage = document.getElementById('errorMessage');
const lembrarLogin = document.getElementById('lembrarLogin');

// Toggle da senha
togglePassword.addEventListener('click', function () {
  const type = senhaInput.getAttribute('type') === 'password' ? 'text' : 'password';
  senhaInput.setAttribute('type', type);
  this.textContent = type === 'password' ? '👁️' : '🙈';
});

// Validação de email
function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

// Validação de campo
function validateField(field, errorElement, validator) {
  const value = field.value.trim();
  let isValid = true;

  if (!value) {
    isValid = false;
    errorElement.textContent = 'Este campo é obrigatório';
  } else if (validator && !validator(value)) {
    isValid = false;
  }

  if (!isValid) {
    field.parentElement.classList.add('error');
    errorElement.style.display = 'block';
  } else {
    field.parentElement.classList.remove('error');
    errorElement.style.display = 'none';
  }

  return isValid;
}

// Validação em tempo real
emailInput.addEventListener('blur', function () {
  const errorElement = document.getElementById('emailError');
  validateField(this, errorElement, function (value) {
    if (!validateEmail(value)) {
      errorElement.textContent = 'Digite um e-mail válido';
      return false;
    }
    return true;
  });
});

senhaInput.addEventListener('blur', function () {
  const errorElement = document.getElementById('senhaError');
  validateField(this, errorElement, function (value) {
    if (value.length < 6) {
      errorElement.textContent = 'A senha deve ter pelo menos 6 caracteres';
      return false;
    }
    return true;
  });
});

// Verificar se o formulário está válido
function isFormValid() {
  return validateEmail(emailInput.value.trim()) &&
    senhaInput.value.trim().length >= 6;
}

// Atualizar estado do botão
function updateSubmitButton() {
  const isValid = isFormValid();
  submitBtn.disabled = !isValid;
}

// Listeners para atualizar o botão
emailInput.addEventListener('input', updateSubmitButton);
senhaInput.addEventListener('input', updateSubmitButton);

// Simular login
async function simulateLogin() {
  return new Promise((resolve) => {
    setTimeout(() => {
      // Simular sucesso na maioria dos casos
      const success = Math.random() > 0.3;
      resolve(success);
    }, 1500);
  });
}

// Submit do formulário
form.addEventListener('submit', async function (e) {
  e.preventDefault();

  // Validar campos
  const emailValid = validateField(emailInput, document.getElementById('emailError'), validateEmail);
  const senhaValid = validateField(senhaInput, document.getElementById('senhaError'));

  if (!emailValid || !senhaValid) {
    return;
  }

  // Mostrar loading
  loadingSpinner.style.display = 'inline-block';
  submitText.textContent = 'Entrando...';
  submitBtn.disabled = true;

  // Esconder mensagens anteriores
  successMessage.style.display = 'none';
  errorMessage.style.display = 'none';

  try {
    const success = await simulateLogin();

    if (success) {
      successMessage.style.display = 'block';

      // Salvar no localStorage se marcado
      if (lembrarLogin.checked) {
        localStorage.setItem('rememberLogin', 'true');
        localStorage.setItem('userEmail', emailInput.value);
      }

      // Simular redirecionamento
      setTimeout(() => {
        console.log('Redirecionando para dashboard...');
        // window.location.href = '/dashboard';
      }, 1000);
    } else {
      errorMessage.style.display = 'block';
    }
  } catch (error) {
    errorMessage.style.display = 'block';
  } finally {
    // Restaurar botão
    loadingSpinner.style.display = 'none';
    submitText.textContent = '🚀 Entrar';
    submitBtn.disabled = false;
  }
});

// Botões sociais
document.getElementById('googleLogin').addEventListener('click', function () {
  alert('Login com Google seria implementado aqui');
});

document.getElementById('facebookLogin').addEventListener('click', function () {
  alert('Login com Facebook seria implementado aqui');
});

// Link para cadastro
document.getElementById('registerLink').addEventListener('click', function (e) {
  e.preventDefault();
  console.log('Redirecionando para página de cadastro...');
  // window.location.href = '/criarconta';
});

// Esqueceu senha
document.getElementById('forgotPassword').addEventListener('click', function (e) {
  e.preventDefault();
  console.log('Redirecionando para recuperação de senha...');
  // window.location.href = '/esqueceu-senha';
});

// Carregar dados salvos
window.addEventListener('load', function () {
  if (localStorage.getItem('rememberLogin') === 'true') {
    const savedEmail = localStorage.getItem('userEmail');
    if (savedEmail) {
      emailInput.value = savedEmail;
      lembrarLogin.checked = true;
    }
  }
  updateSubmitButton();
});

