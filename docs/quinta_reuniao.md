# Quinta Reunião – Projeto Oportunize

**Data:** 18/11/2025  
**Participantes:** Gabriela, Gabrielli  
**Objetivo:** Validar funcionamento das rotas, realizar testes no Postman e garantir estabilidade do ambiente Docker.

---

## ✅ Atividades Realizadas

- Testes de **cadastro, autenticação e atualização** de usuários e empresas realizados com sucesso no **Postman**  
- Validação do funcionamento das **rotas de Job**, incluindo criação, atualização, listagem e exclusão  
- Conferência do ambiente **Docker**, garantindo que os containers `backend_container` e `postgres_container` estão estáveis e comunicando corretamente  
- Ajustes finais em variáveis de ambiente e configuração do `docker-compose.yml` para otimizar a conexão entre backend e banco  
- Revisão rápida dos **controllers** para confirmar que retornos e mensagens de erro estão consistentes  

---

## 📌 Observações Importantes

- Todas as rotas testadas funcionaram corretamente, com respostas esperadas e sem erros internos  
- O ambiente Docker demonstrou estabilidade, permitindo reinicializações rápidas sem perda de dados (volumes persistentes configurados)  
- Algumas pequenas melhorias de validação foram aplicadas durante os testes no Postman  

---

## 🛠 Próximos Passos

- Documentar detalhadamente todas as rotas, incluindo exemplos de requisições e respostas  
- Criar testes automatizados básicos para garantir a integridade das funcionalidades críticas  
- Revisar possíveis melhorias de segurança e autenticação no backend  
- Continuar desenvolvendo novas funcionalidades conforme o roadmap do projeto  

---

**Status do Projeto:** Em desenvolvimento 🚀  
**Resumo da reunião:**  
Testes no Postman concluídos com sucesso, Docker validado e estável, rotas e controllers funcionando corretamente.
