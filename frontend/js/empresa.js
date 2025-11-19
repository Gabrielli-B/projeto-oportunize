function telaEmpresa() {
  return `
    <h2>Cadastrar Empresa</h2>
    <form onsubmit="cadastrarEmpresa(event)">
      <label>Nome</label>
      <input id="nomeEmpresa" type="text">

      <label>CNPJ</label>
      <input id="cnpjEmpresa" type="text">

      <label>Email</label>
      <input id="emailEmpresa" type="email">

      <label>Senha</label>
      <input id="senhaEmpresa" type="password">

      <button type="submit">Cadastrar</button>
    </form>

    <pre id="resultadoEmpresa"></pre>
  `;
}

async function cadastrarEmpresa(e) {
  e.preventDefault();

  const body = {
    nome: document.getElementById("nomeEmpresa").value,
    cnpj: document.getElementById("cnpjEmpresa").value,
    email: document.getElementById("emailEmpresa").value,
    password: document.getElementById("senhaEmpresa").value
  };

  const res = await api("/empresa", "POST", body);
  document.getElementById("resultadoEmpresa").innerText = JSON.stringify(res, null, 2);
}
