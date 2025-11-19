let TOKEN = null;

const API_URL = "http://localhost:3000";

async function api(url, method = "GET", body = null) {
  const headers = { "Content-Type": "application/json" };

  if (TOKEN) {
    headers["Authorization"] = `Bearer ${TOKEN}`;
  }

  const resposta = await fetch(API_URL + url, {
    method,
    headers,
    body: body ? JSON.stringify(body) : null
  });

  return resposta.json();
}

function mostrar(html) {
  const conteudo = document.getElementById("conteudo");

  if (html === "empresa") conteudo.innerHTML = telaEmpresa();
  if (html === "usuario") conteudo.innerHTML = telaUsuario();
  if (html === "loginEmpresa") conteudo.innerHTML = telaLoginEmpresa();
  if (html === "loginUsuario") conteudo.innerHTML = telaLoginUsuario();
  if (html === "jobs") conteudo.innerHTML = telaJobs();
}
