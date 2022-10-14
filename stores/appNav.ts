import { defineStore } from 'pinia'

export const useAppNavStore = defineStore('AppNav', () => {
  const isOpen = ref(false)

  const toggleMenu = () => {
    isOpen.value = !isOpen.value
  }

  return { isOpen, toggleMenu }
})
