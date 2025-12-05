const formLoginEmpresa = document.getElementById("formLoginEmpresa");

if (formLoginEmpresa) {
  formLoginEmpresa.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    try {
      const res = await fetch("http://localhost:3000/sessions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password:senha })
      });

      if (!res.ok) {
        alert("Email ou senha incorretos!");
        return;
      }

      const data = await res.json(); 

      localStorage.setItem("token", data.token);
      localStorage.setItem("empresa", JSON.stringify(data.empresa));

      alert("Login realizado com sucesso!");
      window.location.href = "dashboard.html"; 

    } catch (erro) {
      alert("Erro ao conectar com o servidor.");
    }
  });
}

const formCadastroEmpresa = document.getElementById("formCadastroEmpresa");

if (formCadastroEmpresa) {
  formCadastroEmpresa.addEventListener("submit", async (e) => {
    e.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("senha").value;
    const cnpj = document.getElementById("cnpj").value;

    try {
      const res = await fetch("http://localhost:3000/empresa", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nome, email, password, cnpj })
      });

      if (!res.ok) {
        alert("Erro ao cadastrar empresa.");
        return;
      }

      alert("Empresa cadastrada com sucesso!");
      window.location.href = "login.html";

    } catch (erro) {
      alert("Erro ao conectar com o servidor.");
    }
  });
}
