<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Login</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-item>
        <ion-label position="floating">senha</ion-label>
        <ion-input type="password" v-model="senha" placeholder="Digite sua senha"></ion-input>
      </ion-item>

      <ion-item>

        <ion-label position="floating">E-mail</ion-label>
        <ion-input type="email" v-model="email" placeholder="Digite seu email"></ion-input>
      </ion-item>
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Blank</ion-title>
        </ion-toolbar>
      </ion-header>

      <div id="container">
        <ion-button @click="fazerLogin">Entrar</ion-button>
        <ion-button @click="router.push('/Recuperacao')">Recuperar Senha</ion-button>
        <ion-button @click="router.push('/Cadastro')">Cadastrar</ion-button>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import router from '@/router';
import { IonContent, IonHeader, IonButton, IonPage, IonTitle, IonToolbar, IonInput, IonLabel, IonItem, toastController  } from '@ionic/vue';

const senha = ref('');
const email = ref('');

const fazerLogin = async () => {
  console.log('clicou');

  const emailCadastro = localStorage.getItem('cadastroEmail');
  const senhaCadastro = localStorage.getItem('cadastroSenha');

  if (!email.value || !senha.value) {
    await mostrarToast('Preencha email e senha.', 'warning');
    return;
  }

  if (email.value === emailCadastro && senha.value === senhaCadastro) {
    console.log('login ok');
    await mostrarToast('Login realizado com sucesso!', 'success');
    router.push('/home');
  } else {
    console.log('erro login');
    await mostrarToast('Email ou senha incorretos.', 'danger');
  }
};
const mostrarToast = async (mensagem: string, cor: string = 'primary') => {
  const toast = await toastController.create({
    message: mensagem,
    duration: 2000,
    color: cor,
    position: 'top'
  });
  await toast.present();
};

</script>



<style scoped>
#container {
  text-align: center;

  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;

  color: #8c8c8c;

  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>
