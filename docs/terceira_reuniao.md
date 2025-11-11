# Reunião de Desenvolvimento - Projeto Oportunize

**Data:** 10/11/2025  
**Participantes:** Gabriela, Gabrielli  
**Objetivo:** Finalizar a implementação do cadastro de empresas e iniciar o desenvolvimento das funcionalidades de usuários e vagas.

## Atividades Realizadas
- Conclusão do **cadastro e autenticação de empresas** no back-end  
- Implementação da **criptografia de senhas** utilizando `bcryptjs`  
- Testes das rotas de empresa no **Postman**  
- Revisão e padronização dos retornos de erro e sucesso nas respostas da API  
- Organização dos arquivos em pastas (`models`, `controllers`, `routes`) para melhor manutenção do código  

## Observações
- A funcionalidade de criação de empresa está estável e devidamente testada  
- Foi identificado que o **SessionController** precisará de uma migration para armazenar as sessões dos usuários  
- Pequenos ajustes ainda podem ser necessários na validação dos campos antes da integração com o front-end  

## Próximos Passos
- Criar migrations e controllers para **usuários**  
- Iniciar a implementação do **cadastro e autenticação de usuários**  
- Desenvolver a estrutura inicial das **rotas e models de vagas**  
- Preparar o ambiente para início do **front-end** na próxima sprint  

**Status do Projeto:** Em desenvolvimento
