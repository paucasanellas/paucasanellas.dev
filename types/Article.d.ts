import type { ParsedContent } from '@nuxt/content/dist/runtime/types'

export type ArticleCategory = string

export interface Article extends ParsedContent {
  title: string
  description: string
  slug: string
  cover: string
  createdAt: Date
  categories?: ArticleCategory[]
  readTime?: number
}