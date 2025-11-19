function telaLoginEmpresa() {
  return `
    <h2>Login Empresa</h2>
    <form onsubmit="loginEmpresa(event)">
      <input id="loginEmailEmp" placeholder="email">
      <input id="loginSenhaEmp" type="password" placeholder="senha">
      <button>Entrar</button>
    </form>
    <pre id="resultadoLoginEmpresa"></pre>
  `;
}

async function loginEmpresa(e) {
  e.preventDefault();

  const body = {
    email: loginEmailEmp.value,
    password: loginSenhaEmp.value
  };

  const res = await api("/sessions", "POST", body);

  if (res.token) TOKEN = res.token;

  resultadoLoginEmpresa.innerText = JSON.stringify(res, null, 2);
}

function telaLoginUsuario() {
  return `
    <h2>Login Usuário</h2>
    <form onsubmit="loginUsuario(event)">
      <input id="loginEmailUser" placeholder="email">
      <input id="loginSenhaUser" type="password" placeholder="senha">
      <button>Entrar</button>
    </form>
    <pre id="resultadoLoginUsuario"></pre>
  `;
}

async function loginUsuario(e) {
  e.preventDefault();

  const body = {
    email: loginEmailUser.value,
    password: loginSenhaUser.value
  };

  const res = await api("/users/sessions", "POST", body);

  if (res.token) TOKEN = res.token;

  resultadoLoginUsuario.innerText = JSON.stringify(res, null, 2);
}
