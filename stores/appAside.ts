import { defineStore } from 'pinia'
import { Route } from '@/interfaces/router/route'

export const useAppAsideStore = defineStore('AppAside', () => {
  const isOpen = ref(false)

  const links: Route[] = [
    {
      name: 'index',
      title: 'Home',
      icon: 'home-outline',
      path: '/'
    },
    {
      name: 'about',
      title: 'About',
      icon: 'person-circle-outline',
      path: '/about'
    },
    {
      name: 'blog',
      title: 'Blog',
      icon: 'newspaper-outline',
      path: '/blog'
    },
    {
      name: 'path',
      title: 'Career Path',
      icon: 'trail-sign-outline',
      path: '/path'
    },
    {
      name: 'tech',
      title: 'Tech Stack',
      icon: 'terminal-outline',
      path: '/tech'
    },
    {
      name: 'uses',
      title: 'Uses',
      icon: 'laptop-outline',
      path: '/uses'
    },
    {
      name: 'contact',
      title: 'Contact',
      icon: 'mail-outline',
      path: '/contact'
    }
  ]

  const toggleMenu = () => {
    isOpen.value = !isOpen.value
    return false
  }

  return {
    isOpen,
    toggleMenu,
    links
  }
})
