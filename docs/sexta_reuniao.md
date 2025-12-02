# Sexta Reunião – Projeto Oportunize

**Data:** 02/12/2025
**Participantes:** Gabriela, Gabrielli
**Objetivo:** Realizar **ajustes críticos** no backend, validar o frontend simples e concluir o README oficial do projeto, preparando o ambiente para a **finalização dos testes**.

---

## ✅ Atividades Realizadas

* **Ajustes e testes** no **Postman** para as rotas de **Cadastro** e **Login** de **Usuários** e **Empresas**.
* **Ajustes e execução de testes** para as rotas de **Vagas** (**Job**):
    * **Cadastro de Vaga**
    * **Atualização de Vaga**
    * **Deleção/Exclusão de Vaga**
    * **Listagem de todas as Vagas**
* Criação de um **frontend simples** (HTML, CSS e JavaScript) para validar o consumo real da API
* Teste do fluxo completo via frontend: **login → token → requisições autenticadas**
* Ajustes no `docker-compose.yml` e nas variáveis do `.env` para garantir estabilidade do ambiente
* Confirmação de que os containers `backend_container` e `postgres_container` comunicam corretamente
* Revisão final do **README do projeto**, adicionando:
    * Instruções de execução via Docker
    * Instalação e configuração do backend
    * Exemplos de rotas e respostas
    * Guia para testar o frontend simples
* Revisão dos controllers para respostas mais consistentes e claras

---

## 📌 Observações Importantes

* Os testes no Postman realizados nesta etapa focaram em validar os **recentes ajustes** feitos nas funcionalidades essenciais de autenticação e rotas de vagas.
* O Docker mostrou estabilidade e persistência de dados via volumes.
* O frontend mínimo facilitou a visualização real do funcionamento da API.
* O README está completo, organizado e apropriado para apresentação acadêmica ou profissional.
* **Próxima Etapa de Testes:** A finalização completa e formal dos testes de cobertura será priorizada na próxima reunião.

---

## 🖥️ Sobre o Frontend Criado

* Desenvolvido com **HTML, CSS e JavaScript puro**
* Criado para testes reais da API, permitindo:
    * Login usando JWT
    * Visualização e armazenamento do token
    * Base pronta para testar rotas de CRUD
* Funcionalidades validadas com sucesso usando o backend em Docker

---

## 📄 Sobre a Finalização do README

O README final do projeto agora inclui:

* Passo a passo completo para rodar o backend
* Configuração do `.env`
* Como subir os containers com `docker-compose`
* Como rodar as migrations
* Documentação das rotas principais
* Guia para rodar e testar o frontend simples
* Estrutura e tecnologias do projeto

O documento está pronto para qualquer pessoa executar o projeto sem dificuldades.

---

## 🛠 Próximos Passos – Foco no Refinamento e Integração

O foco agora é na melhoria da arquitetura atual e na evolução da interface de usuário, preparando o projeto para a fase final.

* **Refatoração e Ajustes Internos no Backend (Concluídos):**
    * Ajustes estruturais nos arquivos **`index.js`** e **`app.js`**.
    * Revisão e otimização de todos os **Controllers** e **Models**.
    * Ajuste nas **Migrations** para garantir a consistência do banco de dados, incluindo a correção da relação entre a `migration de vaga` e a `migration de empresa`.
    * Refinamento das **Rotas** e da lógica de **Tokens** (JWT) para um fluxo de autenticação mais robusto e seguro.
* **Evolução do Frontend e Integração Completa:**
    * Evoluir a interface simples para um **frontend mais completo e responsivo**, melhorando o design e a experiência do usuário.
    * Implementar a **comunicação completa e real** entre o frontend e o backend utilizando a API **`fetch`** para todas as requisições (CRUD).
* **Documentação e Validações Adicionais:**
    * **Finalizar os testes** de todas as rotas de forma sistemática (Postman/código).
    * Criar a **documentação Swagger** da API.
    * Melhorar as validações de dados (schema validation) utilizando o **Yup**.
    * Preparar o ambiente para o **deploy** final do projeto.

---

## 🚀 Status do Projeto

O backend está **estável e funcional** após os ajustes de refatoração, o frontend **valida corretamente as rotas**, e o README foi **finalizado de forma profissional**.

---

**Resumo da Reunião:**
Os principais **ajustes de back-end** foram concluídos com sucesso, o frontend simples validou o funcionamento da API, e o README está completamente revisado e finalizado. O foco da próxima etapa é na **finalização dos testes** e no desenvolvimento do frontend completo.