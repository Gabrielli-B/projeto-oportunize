const listaVagas = document.getElementById("listaVagas");
const inputPesquisa = document.getElementById("pesquisa");
const filtroTipo = document.getElementById("filtroTipo");

let todasAsVagas = [];

async function carregarVagas() {
  try {
    const res = await fetch(`${API_URL}/jobs`);
    todasAsVagas = await res.json();
    renderizarVagas(todasAsVagas);
  } catch (erro) {
    alert("Erro ao carregar vagas.");
  }
}

function renderizarVagas(vagas) {
  listaVagas.innerHTML = "";

  if (vagas.length === 0) {
    listaVagas.innerHTML = "<p>Nenhuma vaga encontrada.</p>";
    return;
  }

  vagas.forEach(vaga => {
    const div = document.createElement("div");
    div.classList.add("card");

    div.innerHTML = `
      <h3>${vaga.titulo}</h3>
      <p>${vaga.descricao}</p>
      <p><strong>Tipo:</strong> ${vaga.tipo}</p>
      <p><strong>Local:</strong> ${vaga.localizacao}</p>
      <p><strong>Email:</strong> ${vaga.email_contato}</p>
    `;

    listaVagas.appendChild(div);
  });
}

function aplicarFiltro() {
  const texto = inputPesquisa.value.toLowerCase();
  const tipo = filtroTipo.value;

  const vagasFiltradas = todasAsVagas.filter(vaga => {
    const combinaTexto =
      vaga.titulo.toLowerCase().includes(texto) ||
      vaga.descricao.toLowerCase().includes(texto);

    const combinaTipo = tipo === "" || vaga.tipo === tipo;

    return combinaTexto && combinaTipo;
  });

  renderizarVagas(vagasFiltradas);
}

inputPesquisa.addEventListener("input", aplicarFiltro);
filtroTipo.addEventListener("change", aplicarFiltro);

carregarVagas();
