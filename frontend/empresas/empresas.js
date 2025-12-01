const formLogin = document.getElementById("formLoginEmpresa");

if (formLogin) {
    formLogin.addEventListener("submit", async (e) => {
        e.preventDefault();

        const email = document.getElementById("email").value;
        const senha = document.getElementById("senha").value;

        try {
            const res = await fetch("http://localhost:8080/empresa/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, senha })
            });

            if (!res.ok) {
                alert("Email ou senha incorretos!");
                return;
            }

            alert("Login realizado!");
            window.location.href = "../index.html";

        } catch (erro) {
            alert("Erro ao conectar com o servidor.");
        }
    });
}

const formCadastro = document.getElementById("formCadastroEmpresa");

if (formCadastro) {
    formCadastro.addEventListener("submit", async (e) => {
        e.preventDefault();

        const nomeEmpresa = document.getElementById("nome").value;
        const email = document.getElementById("email").value;
        const senha = document.getElementById("senha").value;

        try {
            const res = await fetch("http://localhost:8080/empresa", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ nomeEmpresa, email, senha })
            });

            if (!res.ok) {
                alert("Erro ao cadastrar empresa.");
                return;
            }

            alert("Empresa cadastrada!");
            window.location.href = "login.html";

        } catch (erro) {
            alert("Erro ao conectar com o servidor.");
        }
    });
}
