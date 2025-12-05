const token = localStorage.getItem("token");
const empresa = JSON.parse(localStorage.getItem("empresa"));
const lista = document.getElementById("listaVagas");
const form = document.getElementById("formVaga");

if (!token || !empresa) {
  alert("Faça login primeiro.");
  window.location.href = "login.html";
}

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const vaga = {
    titulo: document.getElementById("titulo").value,
    descricao: document.getElementById("descricao").value,
    tipo_contrato: document.getElementById("tipo").value, 
    localizacao: document.getElementById("localizacao").value,
    email_contato: document.getElementById("email_contato").value
  };

  const res = await fetch("http://localhost:3000/jobs", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    },
    body: JSON.stringify(vaga)
  });

  if (res.ok) {
    alert("Vaga cadastrada!");
    form.reset();
    carregarVagas();
  } else {
    alert("Erro ao cadastrar vaga.");
  }
});

async function carregarVagas() {
  const res = await fetch("http://localhost:3000/jobs");
  const vagas = await res.json();

  const minhasVagas = vagas.filter(v => v.empresa_id === empresa.empresa_id);

  renderizarVagas(minhasVagas);
}

function renderizarVagas(vagas) {
  lista.innerHTML = "";

  vagas.forEach(vaga => {
    const div = document.createElement("div");
    div.classList.add("vaga");

    div.innerHTML = `
      <input value="${vaga.titulo}" id="titulo-${vaga.id}">
      <textarea id="descricao-${vaga.id}">${vaga.descricao}</textarea>
      <input value="${vaga.tipo_contrato || ""}" id="tipo-${vaga.id}">
      <input value="${vaga.localizacao || ""}" id="local-${vaga.id}">
      <input value="${vaga.email_contato || ""}" id="email-${vaga.id}">
      
      <button onclick="atualizarVaga(${vaga.id})">Atualizar</button>
      <button onclick="deletarVaga(${vaga.id})">Excluir</button>
    `;

    lista.appendChild(div);
  });
}

async function atualizarVaga(id) {
  const vaga = {
    titulo: document.getElementById(`titulo-${id}`).value,
    descricao: document.getElementById(`descricao-${id}`).value,
    tipo_contrato: document.getElementById(`tipo-${id}`).value, 
    localizacao: document.getElementById(`local-${id}`).value,
    email_contato: document.getElementById(`email-${id}`).value
  };

  const res = await fetch(`http://localhost:3000/jobs/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    },
    body: JSON.stringify(vaga)
  });

  if (res.ok) {
    alert("Vaga atualizada!");
    carregarVagas();
  } else {
    alert("Erro ao atualizar.");
  }
}

async function deletarVaga(id) {
  if (!confirm("Deseja excluir esta vaga?")) return;

  const res = await fetch(`http://localhost:3000/jobs/${id}`, {
    method: "DELETE",
    headers: {
      "Authorization": `Bearer ${token}`
    }
  });

  if (res.ok) {
    alert("Vaga excluída!");
    carregarVagas();
  } else {
    alert("Erro ao excluir.");
  }
}

function logout() {
  localStorage.removeItem("token");
  localStorage.removeItem("empresa");
  window.location.href = "login.html";
}

carregarVagas();

