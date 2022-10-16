import { defineStore } from 'pinia'

export const useAppAsideStore = defineStore('AppAside', () => {
  const isOpen = ref(false)

  const links = [
    {
      name: 'index',
      title: 'Home',
      icon: 'home-outline'
    },
    {
      name: 'about',
      title: 'About',
      icon: 'person-circle-outline'
    },
    {
      name: 'blog',
      title: 'Blog',
      icon: 'newspaper-outline'
    },
    {
      name: 'path',
      title: 'Career Path',
      icon: 'trail-sign-outline'
    },
    {
      name: 'tech',
      title: 'Tech Stack',
      icon: 'terminal-outline'
    },
    {
      name: 'uses',
      title: 'Uses',
      icon: 'laptop-outline'
    },
    {
      name: 'contact',
      title: 'Contact',
      icon: 'mail-outline'
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
