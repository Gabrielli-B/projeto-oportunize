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
![Diagrama de classes](diagramas/diagrama-de-classes.png)

## 🚀 Como Executar o Projeto (quando estiver pronto)
```bash
# Clonar o repositório
git clone https://github.com/usuario/Oportunize.git

# Acessar o diretório do projeto
cd Oportunize

# Subir os containers
docker-compose up





