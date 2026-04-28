import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/Cadastro'
  },
  {
    path: '/home',
    name: 'Home',
   component: () => import('../views/HomePage.vue')
  },
   {
    path: '/Cadastro',
    name: 'Cadastro',
   component: () => import('../views/CadastroPage.vue')
  },
   {
    path: '/Detalhe',
    name: 'Detalhe',
   component: () => import('../views/DetalhePage.vue')
  },
   {
    path: '/Login',
    name: 'Login',
   component: () => import('../views/LoginPage.vue')
  },
   {
    path: '/Recuperacao',
    name: 'Recuperacao',
   component: () => import('../views/RecuperarSenhaPage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
