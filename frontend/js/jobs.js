function telaJobs() {
  return `
    <h2>Jobs</h2>

    <button onclick="listarJobs()">Listar Jobs</button>

    <h3>Criar Job</h3>
    <form onsubmit="criarJob(event)">
      <input id="tituloJob" placeholder="Título">
      <input id="descricaoJob" placeholder="Descrição">
      <button>Criar</button>
    </form>

    <div id="listaJobs"></div>
    <pre id="resultadoJob"></pre>
  `;
}

async function listarJobs() {
  const res = await api("/jobs");
  listaJobs.innerText = JSON.stringify(res, null, 2);
}

async function criarJob(e) {
  e.preventDefault();

  const body = {
    title: tituloJob.value,
    description: descricaoJob.value
  };

  const res = await api("/jobs", "POST", body);
  resultadoJob.innerText = JSON.stringify(res, null, 2);
}
