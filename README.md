# App

Gympass style app.

## RFs (Requisitos funcionais)
- [ ] Deve ser posível se cadastrar.
- [ ] Deve ser poassível se autenticar.
- [ ] Deve ser possível obter o perfil de um usuário logado.
- [ ] Deve ser possível obter o número de check-ins realidados pelo usuário,
- [ ] Deve ser possível obter seu histórico de check-ins.
- [ ] Deve ser possível buscar academias próximas.
- [ ] Deve ser possível buscar academias pelo nome.
- [ ] Deve ser possível realizar check-in em uma academia.
- [ ] Deve ser possível validar o check-in de um usuário.
- [ ] Deve ser possível cadastrar uma academia.

## RNs (Regras de negócios)
- [ ] O usuário não deve conseguir se cadastrar com um e-mail duplicado.
- [ ] Não deve podser fazer 2 check-ins no mesmo dia.
- [ ] O check-in deve ser feito próximo da academia (100m).
- [ ] O check-in só pode ser validado até 20 minutos após criado.
- [ ] O check-in só pdoe ser validade por admins.
- [ ] A academia só pode ser cadastrada por administradores

## RNFs (Requisitos não funcionais)
- [ ] A senha precisa estar criptografada.
- [ ] Os dados da aplicação precisam estar persistidos em um bando PostgreSQL.
- [ ] Tdoas listas de dados precisam estar paginadas com 20 itens por página.
- [ ] O usuário deve ser identificado por um JWT (JSON Web Token)