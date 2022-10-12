import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/index.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home, name: 'index' }
  ]
})

export {
  router
}
