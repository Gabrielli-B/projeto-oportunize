function telaUsuario() {
  return `
    <h2>Cadastrar Usuário</h2>
    <form onsubmit="cadastrarUsuario(event)">
      <label>Nome</label>
      <input id="nomeUser" type="text">

      <label>Email</label>
      <input id="emailUser" type="email">

      <label>Senha</label>
      <input id="senhaUser" type="password">

      <button type="submit">Cadastrar</button>
    </form>

    <pre id="resultadoUsuario"></pre>
  `;
}

async function cadastrarUsuario(e) {
  e.preventDefault();

  const body = {
    nome: document.getElementById("nomeUser").value,
    email: document.getElementById("emailUser").value,
    password: document.getElementById("senhaUser").value
  };

  const res = await api("/users", "POST", body);
  document.getElementById("resultadoUsuario").innerText = JSON.stringify(res, null, 2);
}
