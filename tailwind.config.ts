import type { Config } from 'tailwindcss'

export default <Partial<Config>> {
  theme: {
    extend: {
      fontFamily: {
        display: ['Noto Sans JP', 'sans-serif']
      }
    }
  }
}
