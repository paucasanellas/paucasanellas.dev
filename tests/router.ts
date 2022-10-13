import { createRouter, createWebHistory } from 'vue-router'
import { Route } from '@/interfaces/router/route'

import Home from '@/pages/index.vue'
import About from '@/pages/about.vue'
import Blog from '@/pages/blog.vue'
import Contact from '@/pages/contact.vue'
import Path from '@/pages/path.vue'
import Tech from '@/pages/tech.vue'
import Uses from '@/pages/uses.vue'

const routes: Route[] = [
  { path: '/', component: Home, name: 'index', title: 'Home' },
  { path: '/about', component: About, name: 'about', title: 'About' },
  { path: '/blog', component: Blog, name: 'blog', title: 'Blog' },
  { path: '/contact', component: Contact, name: 'contact', title: 'Contact' },
  { path: '/path', component: Path, name: 'path', title: 'Career Path' },
  { path: '/tech', component: Tech, name: 'tech', title: 'Tech Stack' },
  { path: '/uses', component: Uses, name: 'uses', title: 'Uses' }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export {
  router,
  routes
}
