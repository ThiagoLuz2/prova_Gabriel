# 🚀 Sistema de Login com Ionic + Vue

Este projeto é uma aplicação simples de autenticação desenvolvida com Ionic + Vue 3, com funcionalidades de cadastro, login e recuperação de senha utilizando armazenamento local.

---

## 📱 Funcionalidades

* Cadastro de usuário
* Login com validação
* Confirmação de senha
* Recuperação de senha (navegação)
* Feedback visual com Toast
* Armazenamento de dados no localStorage

---

## 🛠️ Tecnologias utilizadas

* Vue 3 (Composition API)
* Ionic Framework
* TypeScript
* Vue Router

---

## 📂 Estrutura básica

src/
├── views/
│    ├── Login.vue
│    ├── Cadastro.vue
│    ├── Recuperacao.vue
│    └── Home.vue
├── router/
│    └── index.ts
└── main.ts

---

## 🔐 Como funciona

### 📌 Cadastro

O usuário informa:

* Email
* Senha
* Confirmação de senha

Os dados são salvos no localStorage:

```js
localStorage.setItem('cadastroEmail', email);
localStorage.setItem('cadastroSenha', senha);
```

---

### 🔑 Login

O sistema verifica:

* Se os campos estão preenchidos
* Se existe usuário cadastrado
* Se o email e senha estão corretos

---

### 🔔 Feedback com Toast

Substitui os alert() por notificações mais modernas:

* Sucesso → verde
* Erro → vermelho
* Aviso → amarelo

---

## ▶️ Como rodar o projeto

```bash
npm install
ionic serve
```

---

## ⚠️ Observações importantes

* Este projeto usa localStorage:

  * Não é seguro para produção
  * Ideal para aprendizado

* Não possui backend integrado

---

## 💡 Melhorias futuras

* Integração com API (Node.js / Firebase)
* Validação real de email
* Criptografia de senha
* Melhorias de UI/UX
* Responsividade completa

---

## 👨‍💻 Autor

Projeto desenvolvido para fins educacionais.
