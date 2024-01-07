import type { NavigationLink } from '@/types'

export const desktopNavigation: NavigationLink[] = [
  { title: 'navigation.articles', name: 'articles' },
  { title: 'navigation.about', name: 'about' },
  { title: 'navigation.contact', name: 'contact' }
]

export const mobileNavigation: NavigationLink[] = [
  { title: 'navigation.home', name: 'index', icon: 'i-heroicons-home' },
  { title: 'navigation.articles', name: 'articles', icon: 'i-heroicons-book-open' },
  { title: 'navigation.about', name: 'about', icon: 'i-heroicons-question-mark-circle' },
  { title: 'navigation.contact', name: 'contact', icon: 'i-heroicons-envelope' }
]
