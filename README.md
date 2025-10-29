# 🧠 Oportunize

O projeto **Oportunize** é uma plataforma web voltada para a divulgação de vagas de emprego, conectando **empresas** e **candidatos** em busca de novas oportunidades no mercado de trabalho.

---

## 👥 Equipe de Desenvolvimento
- **Gabrielli Borba** – Product Owner / Back-end Developer  
- **Gabriela Lima** – Scrum Master / Front-end Developer  

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
| 1 | 21/10 a 27/10 | Definição dos requisitos, criação do repositório, estrutura inicial do projeto|
| 2 | 28/10 a 02/11 | Implementar cadastro e login de empresas (back-end + API + testes). |
| 3 | 03/11 a 10/11 | Criar interface de login e cadastro de empresas (front-end) e integrar com a API. |
| 4 | 11/11 a 17/11 | Desenvolver cadastro. |
| 5 | 18/11 a 24/11 | Criar tela pública de visualização de vagas. |
| 6 | 25/11 a 01/12 | Testes finais, documentação e apresentação do projeto. |

---

<div style="display: flex; justify-content: space-around; gap: 20px;">
  
  <div style="flex: 1; text-align: center;">
    
### **Empresa**

| Atributo/Operação | Detalhes |
| :--- | :--- |
| $\square$ **id**: int | Identificador único. |
| $\square$ **nome**: String | Nome da empresa. |
| $\square$ **cnpj**: String | CNPJ. |
| $\square$ **email**: String | E-mail. |
| $\square$ **senha**: String | Senha. |
| $\bullet$ **cadastrarVaga()** | Registrar vaga. |
| $\bullet$ **editarPerfil()** | Atualizar dados. |
    
  </div>

  <div style="flex: 1; text-align: center;">
    
### **Usuário**

| Atributo/Operação | Detalhes |
| :--- | :--- |
| $\square$ **id**: int | Identificador único. |
| $\square$ **nome**: String | Nome. |
| $\square$ **email**: String | E-mail de login. |
| $\square$ **senha**: String | Senha. |
| $\bullet$ **cadastrar()** | Registrar usuário. |
| $\bullet$ **login()** | Autenticação. |
    
  </div>
</div>

<div style="text-align: center; margin: 10px 0;">
  ***
</div>

## **Vaga**

| Tipo | Atributo/Operação | Detalhes |
| :---: | :--- | :--- |
| **Atributo** | $\square$ **id**: int | Identificador único da vaga. |
| **Atributo** | $\square$ **titulo**: String | Título ou nome da vaga. |
| **Atributo** | $\square$ **descricao**: String | Descrição detalhada da vaga. |
| **Atributo** | $\square$ **requisitos**: String | Lista de requisitos. |
| **Atributo** | $\square$ **localizacao**: String | Local de trabalho. |
| **Atributo** | $\square$ **tipoContrato**: String | Tipo de contrato. |
| **Atributo** | $\square$ **emailContato**: String | E-mail de contato. |
| **Operação** | $\bullet$ **publicar()** | Tornar vaga visível. |
| **Operação** | $\bullet$ **editar()** | Atualizar dados da vaga. |
| **Operação** | $\bullet$ **remover()** | Retirar vaga do sistema. |

## 🚀 Como Executar o Projeto (quando estiver pronto)
```bash
# Clonar o repositório
git clone https://github.com/usuario/Oportunize.git

# Acessar o diretório do projeto
cd Oportunize

# Subir os containers
docker-compose up





