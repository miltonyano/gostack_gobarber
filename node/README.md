# Recuperação de senha

**RF - requisitos funcionais**
- O usuário deve poder recuperar sua senha informando seu email;
- O usuário deve receber um e-mail com instruções de recuperaçã0 de senha
- O usuário deve poder resetar sua senha;

**RNF - requisitos nao funcionais**
- Utilizar Mailtrap para testar envios em ambiente de desenvolvimento;
- Utilizar o Amazon SES para envios em produção;
- O envio de e-mails deve acontecer em segundo plano (background);


**RN - regras de negocio**
- O link enviado por email para resetar senha deve expirar em 2h
- O usuário precisa confirmar a nova senha ao resetar a senha

# Atualização do perfil

**RF**
- O usuário deve poder atualizar seu nome, email e senha;

**RN**
- O usuário não pode alterar seu email para um email já utilizado;
- Para atualizar sua senha, o usuario deve informar a senha antiga;
- Para atualizar sua senha, o usuário precisa confirmar a nova senha;

# Painel do prestador

**RF**
- O usuário deve poder listar seus agendamentos de um dia específico;
- O prestador deve receber uma notificação sempre que houver um novo agendamento;
O prestador deve poder visualizar as notificações não lidas;

**RNF**
- Os agendamentos do prestador do dia devem ser armazenados em cache;
- As notificações do prestador devem ser armazenadas no MongoDB;
- As notificações do prestador devem ser enviadas em tempo real utilizado Socket.io;


**RN**
- A notificação deve ter um status de lida ou não lida para que o prestador possa controlar;

# Agendamento de serviços

**RF**
- O usuário deve poder listar todos os prestadores de serviço cadastrados;
- O usuário deve poder listar os dias de um mês com pelo menos 1 horário disponível de um prestador;
- O usuário deve poder listar horários disponíveis em um dia específico de um prestador;
- O usuário deve poder realizar um novo agendamento com um prestador;

**RNF**
- A listagem de prestadores deve ser armazenada em cache

**RN**
- Cada agendamento deve durar 1h;
- Os agendamentos devem estar disponíveis entre 8h até 18h (ultimo agentamento sendo 17h);
- O usuário não pode agendar em um horário já ocupado;
- O usuário não pode agendar em um horário que já passou;
- O usuário não pode agendar serviços consigo mesmo;

