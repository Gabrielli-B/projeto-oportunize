# **Sétima reunião – Projeto oportunize**  
**Data:** 01/12/2025  
**Horário:** 19:00 às 20:10  
**Local:** Reunião Online (Teams) 
**Participantes:** Gabrielli, Gabriela

---

## **1. Objetivo da Reunião**
Revisar, ajustar e consolidar partes essenciais do front-end do projeto Oportunize, incluindo melhorias no layout, organização das páginas de cadastro/login e correções para integração com o back-end.

---

## **2. Tópicos Tratados**

### **2.1 Ajustes no arquivo de estilo (estilo.css)**
- Revisão completa do CSS principal.
- Padronização das cores (azul claro, branco, tons suaves).
- Aplicação da fonte **Poppins** via Google Fonts.
- Estilização do título “Oportunize” com gradiente azul.
- Ajustes de layout:
  - Cabeçalho responsivo com menu alinhado.
  - Cards, formulários e botões uniformizados.
  - Modais centralizados com fundo translúcido.
  - Grid das vagas revisado.
- Melhoria no espaçamento geral e responsividade.

---

### **2.2 Padronização das páginas de Cadastro e Login**
Páginas revisadas:

- `empresa/cadastro.html`  
- `empresa/login.html`  
- `usuarios/cadastro.html`  
- `usuarios/login.html`

Alterações aplicadas:

- Centralização dos títulos com `.titulo-centro`.
- Inserção da classe `.form-box` para padronizar formulários.
- Ajuste do `<header>` com navegação uniforme.
- Correção dos botões com `.btn-enviar`.
- Ajuste em espaçamentos, estrutura e responsividade.
- Links entre páginas revisados (“Já possui conta?”, “Não tem conta?”).

---

### **2.3 Ajustes e validações no arquivo empresa/empresas.js**
- Captura de formulários com `getElementById`.
- Implementação das requisições:
  ```javascript
  fetch("http://localhost:8080/empresa/login", { ... })
  fetch("http://localhost:8080/empresa", { ... })


### **2.4 Ajustes e melhorias no JavaScript**

- Tratamento correto de erros e mensagens ao usuário.
- Redirecionamento após login/cadastro.
- Padronização de variáveis e nomes de campos.
- Revisão da sintaxe e organização do código.

---

### **2.5 Correção de IDs e Estrutura dos Formulários**

- Conferência dos IDs usados no HTML para garantir compatibilidade com o JS.
- Ajustes em campos que estavam sem ID ou com nomes incorretos.
- Verificação geral para evitar inconsistências entre front-end e back-end.

---

## **3. Decisões Tomadas**

- Manter o padrão visual em tons de azul claro e branco.
- Uniformizar todas as páginas com o layout revisado.
- Criar próxima etapa: tela de vagas + listagem dinâmica.
- Continuidade usando apenas `fetch` puro, sem bibliotecas extras.

