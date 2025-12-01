const formLoginUsuario = document.getElementById("formLoginUsuario");

if (formLoginUsuario) {
    formLoginUsuario.addEventListener("submit", async (e) => {
        e.preventDefault();

        const email = document.getElementById("email").value;
        const senha = document.getElementById("senha").value;

        try {
            const res = await fetch("http://localhost:8080/usuario/login", {
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

// CADASTRO USUÁRIO
const formCadastroUsuario = document.getElementById("formCadastroUsuario");

if (formCadastroUsuario) {
    formCadastroUsuario.addEventListener("submit", async (e) => {
        e.preventDefault();

        const nome = document.getElementById("nome").value;
        const email = document.getElementById("email").value;
        const senha = document.getElementById("senha").value;

        try {
            const res = await fetch("http://localhost:8080/usuario", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ nome, email, senha })
            });

            if (!res.ok) {
                alert("Erro ao cadastrar usuário.");
                return;
            }

            alert("Usuário cadastrado!");
            window.location.href = "login.html";

        } catch (erro) {
            alert("Erro ao conectar com o servidor.");
        }
    });
}