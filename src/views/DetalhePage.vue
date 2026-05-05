<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Detalhes</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-item>
      <ion-title>Duna</ion-title>
      <ion-img   src="https://images.openai.com/static-rsc-4/yPhtt2-tkKX7AvyD7SR_3qKupSo9i9_gZUPOMbGHhEv5m3kntbLxHea_hXZnTQjPcVPGeRv6LxdeTDD9TANw6FAgr5KKvNhkUvmUFAV8J5j26L4AedO8K9smPNFLYrjqMyEKp73HJckCG4tnGXYf7xnYFahJlUIdy7qBTE3Yk70?purpose=inline"></ion-img>
      <ion-label>Autor: George Orwell Descrição: Uma fábula política onde animais de uma fazenda se revoltam contra os humanos, criando um novo sistema de governo que, aos poucos, se torna tão opressor quanto o anterior.</ion-label>
    </ion-item>
     <ion-item>
      <ion-title>Hobbit</ion-title>
      <ion-img src="https://images.openai.com/static-rsc-4/h1Im5lrkNp5JpFJrKCPUBnZdR56u_-nlxyApey1EMorjm_525CwvQXWTZswAOvn_5f6n435W26OnCMMG_huQtUbhaC35MiA2d_OeA5sQzhhaougN0iiR9MZ4pQq8fQjhMO8XOmtZleF_237WscDdFDHkpwOokMxCQoMSQXUF37s?purpose=inline"></ion-img>
      <ion-label>Autor: J.R.R. Tolkein Descrição: Uma jornada épica de um hobbit chamado Frodo Baggins, que herda um anel mágico e deve destruí-lo para salvar a Terra-Média.</ion-label>
    </ion-item>
     <ion-item>
      <ion-title>Revolução dos bichos</ion-title>
      <ion-img src="https://images.openai.com/static-rsc-4/vD1xjRUdy8AoXw9ekoKSa0Do6M6GzNL8NQ5WKhAIMwLURech6v1f97GKu8zWK83G_P5gLCmTF5MB6sHPQPi55JKuFhNBM2XmATr1KFWkdZwTc9SbKfHeiKKSu2KLPCDRZZPE-suRwyWPe8m4W99XqATWiBQJ0kGh7xd5rIAFwZM?purpose=inline"></ion-img>
      <ion-label>Autor: George Orwell Descrição: Uma fábula política onde animais de uma fazenda se revoltam contra os humanos, criando um novo systema de governo que, aos poucos, se torna tão opressor quanto o anterior.</ion-label>
    </ion-item>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Blank</ion-title>
        </ion-toolbar>
      </ion-header>

      <div id="container">
        <ion-button @click="router.push('/Home')">Home</ion-button>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">

import router from '@/router';
import { IonContent, IonHeader, IonButton, IonPage, IonTitle, IonToolbar, IonLabel, IonItem, IonImg } from '@ionic/vue';
</script>

<style scoped>
ion-img {
  width: 100%;
  max-width: 100px;
  height: auto;
  border-radius: 8px;
  margin: 10px 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  display: block;
  margin-left: auto;
  margin-right: auto;
}


ion-item {
  --border-radius: 12px;
  margin-bottom: 20px;
  --padding-start: 16px;
  --inner-padding-end: 16px;
}

ion-title {
  font-weight: bold;
  color: #2c3e50;
  margin-bottom: 8px;
}

ion-label {
  line-height: 1.5;
  color: #34495e;
}

#container {
  text-align: center;
  margin-top: 20px;
}

/* Responsividade para telas menores */
@media (max-width: 768px) {
  ion-img {
    max-width: 80px;
  }
  
  ion-item {
    --padding-start: 12px;
    --inner-padding-end: 12px;
  }
}

@media (max-width: 480px) {
  ion-img {
    max-width: 60px;
  }
}
</style>
