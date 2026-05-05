<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Recuperar Senha</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Recuperar Senha</ion-title>
        </ion-toolbar>
      </ion-header>

        <ion-item>
          
          <ion-label position="floating">E-mail</ion-label>
          <ion-input type="email" v-model="email" placeholder="Digite seu email"></ion-input>
        </ion-item>

        <div id="container">
          <ion-button @click="verificarEmail">Verificar</ion-button>
          <ion-button @click="router.push('/Login')">Voltar ao Login</ion-button>
        </div>

        <div v-if="senhaEncontrada" id="resultado">
          <p><strong>Sua senha é:</strong> {{ senhaExibida }}</p>
        </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import router from '@/router';
import { IonContent, IonHeader, IonButton, IonPage, IonTitle, IonToolbar, IonInput, IonLabel, IonItem, toastController  } from '@ionic/vue';

const email = ref('');
const senhaEncontrada = ref(false);
const senhaExibida = ref('');

const verificarEmail = async () => {
  if (!email.value || email.value.trim() === '') {
    await mostrarToast('Por favor, digite seu e-mail', 'warning');
    return;
  }

  const emailCadastro = localStorage.getItem('cadastroEmail');
  const senhaCadastro = localStorage.getItem('cadastroSenha');

  console.log('Email digitado:', email.value);
  console.log('Email no cadastro:', emailCadastro);

  if (email.value === emailCadastro) {
    senhaExibida.value = senhaCadastro || '';
    senhaEncontrada.value = true;
  
    await mostrarToast('E-mail encontrado! Sua senha está sendo exibida.', 'success');
  } else {
    senhaEncontrada.value = false;
    await mostrarToast('E-mail não encontrado nos registros.', 'danger');
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
  margin-top: 20px;
}

#resultado {
  text-align: center;
  margin-top: 30px;
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 8px;
  border: 1px solid #ddd;
}

#resultado p {
  font-size: 18px;
  color: #333;
  margin: 0;
  word-break: break-all;
}

ion-button {
  margin: 10px 5px;
}
</style>
