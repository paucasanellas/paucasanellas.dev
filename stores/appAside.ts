import { defineStore } from 'pinia'

export const useAppAsideStore = defineStore('AppAside', () => {
  const isOpen = ref(false)

  const toggleMenu = () => {
    isOpen.value = !isOpen.value
    return false
  }

  return { isOpen, toggleMenu }
})
