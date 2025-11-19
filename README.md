# 🧠 Oportunize

O projeto **Oportunize** é uma plataforma web voltada para a divulgação de vagas de emprego, conectando **empresas** e **candidatos** em busca de novas oportunidades no mercado de trabalho.

---

## 👥 Equipe de Desenvolvimento
- **Gabrielli Borba** – Product Owner / Full Stack Developer
- **Gabriela Lima** – Scrum Master / Full Stack Developer  

---

## ⚙️ Metodologia Utilizada
O projeto será desenvolvido utilizando a **metodologia ágil Scrum**, com foco em entregas incrementais e iterações curtas.

As principais práticas adotadas:
- Divisão do projeto em **sprints semanais**;  
- **Daily meetings** curtas (mensagens no grupo ou reuniões rápidas para alinhamento);  
- **Sprint Planning:** definição das tarefas da semana;  
- **Sprint Review:** apresentação das entregas parciais;  
- **Sprint Retrospective:** discussão sobre melhorias no processo.

---

## 📋 Requisitos Iniciais do Sistema
- **Cadastro de empresas** com nome, CNPJ, e-mail e senha;  
- **Login de empresas** autenticadas;  
- **Cadastro de vagas** (título, descrição, requisitos, localização, tipo de contrato, e-mail de contato);    
- **Ambiente containerizado** com Docker;  
- **Testes de API** com Postman.

---

## 🧰 Tecnologias Utilizadas
- **Back-end:** Node.js + Express  
- **Front-end:** HTML, CSS e JavaScript  
- **Banco de Dados:** (PostgreSQL)  
- **Testes de API:** Postman  
- **Containerização:** Docker  
- **Controle de versão:** Git e GitHub  
---

## 🕓 Controle de Versão
O projeto é versionado utilizando **Git e GitHub**, com as seguintes práticas:

- **Branch main:** contém o código estável e testado;  
- **Branches de desenvolvimento:** cada integrante cria sua branch (`gabrielli-backend`, `gabriela-frontend`, etc.);  
- **Pull Requests:** usadas para revisar o código antes de mesclar com a branch principal;  
- **Commits:** realizados com mensagens descritivas e padronizadas.

---

## 📅 Cronograma de Sprints (Scrum)

| Sprint | Período | Objetivos Principais |
|--------|----------|----------------------|
| 1 | 21/10 a 27/10 | Reunião inicial, definição do escopo, tecnologias, criação do repositório e estrutura base do projeto. |
| 2 | 28/10 a 02/11 | Configuração inicial do backend: rotas base, conexão com banco e testes iniciais no Postman. |
| 3 | 03/11 a 10/11 | Criação das migrations, controllers, ajustes nas rotas e integração com o banco de dados. |
| 4 | 11/11 a 17/11 | Finalização das migrations, ajustes no Docker, revisão de controllers e primeiros testes integrados. |
| 5 | 18/11 a 18/11 | Testes de rotas de usuários, empresas e jobs; validação do ambiente Docker; ajustes de variáveis e controllers. |
| 6 | 19/11 | Testes finais completos do backend, criação do frontend simples, validação do fluxo completo e finalização do README oficial. |



---

<div style="display: flex; justify-content: space-around; gap: 20px;">
  
  <div style="flex: 1;">

  ## Diagrama de classes
    
**Empresa**

| Tipo | Atributo/Operação |
| :---: | :--- |
| $\square$ **int** | id |
| $\square$ **String** | nome |
| $\square$ **String** | cnpj |
| $\square$ **String** | email |
| $\square$ **String** | senha |
| <hr style="border: 2px solid black;"> | <hr style="border: 2px solid black;"> |
| 🟢 | cadastrarVaga() |
| 🟢 | editarPerfil() |
    
  </div>

  <div style="flex: 1;">
    
**Usuário**

| Tipo | Atributo/Operação |
| :---: | :--- |
| $\square$ **int** | id |
| $\square$ **String** | nome |
| $\square$ **String** | email |
| $\square$ **String** | senha |
| <hr style="border: 2px solid black;"> | <hr style="border: 2px solid black;"> |
| 🟢 | cadastrar() |
| 🟢 | login() |
    
  </div>
</div>


## Vaga

| Tipo | Atributo/Operação |
| :---: | :--- |
| $\square$ **int** | id |
| $\square$ **String** | titulo |
| $\square$ **String** | descricao |
| $\square$ **String** | requisitos |
| $\square$ **String** | localizacao |
| $\square$ **String** | tipoContrato |
| $\square$ **String** | emailContato |
| <hr style="border: 2px solid black;"> | <hr style="border: 2px solid black;"> |
| 🟢 | publicar() |
| 🟢 | editar() |
| 🟢 | remover() |

## 🚀 Como Executar o Projeto 
```bash
# Clonar o repositório
git clone https://github.com/usuario/Oportunize.git

# Acessar o diretório do projeto
cd Oportunize

# Subir os containers
docker-compose up

2. Criar o arquivo .env

Crie o arquivo na raiz:

APP_PORT=3000

DB_HOST=localhost
DB_USER=postgres
DB_PASS=senha_do_banco
DB_NAME=oportunize
DB_PORT=5432

JWT_SECRET=sua_chave_secreta
JWT_EXPIRES=7d

3. Instalar as dependências
npm install

4. Criar o banco e rodar migrations
npx sequelize db:create
npx sequelize db:migrate


Se tiver seeds:

npx sequelize db:seed:all

5. Iniciar o servidor
npm run dev


Backend disponível em:

http://localhost:3000

🐳 Rodando com Docker
Subir os containers
docker-compose up --build

Visualizar logs
docker logs oportunize-backend -f

Parar os containers
docker-compose down

🌐 Executar o Front-end

Interface simples.

cd frontend
start index.html


Ou abra o arquivo diretamente no navegador.

📜 Status do Projeto

✔️ Backend funcional

✔️ Front-end simples

✔️ Testes via Postman

⬜ Deploy

⬜ Melhorias futuras





