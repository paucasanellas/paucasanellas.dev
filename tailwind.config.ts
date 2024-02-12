import type { Config } from 'tailwindcss'
import typografy from '@tailwindcss/typography'

export default <Partial<Config>> {
  plugins: [
    typografy
  ],
  theme: {
    extend: {
      fontFamily: {
        display: 'Montserrat, sans-serif'
      },
      typography: ({ theme }: {theme: any}) => ({
        DEFAULT: {
          css: {
            a: {
              textDecoration: 'none'
            },
            p: {
              textWrap: 'pretty'
            },
            'h1,h2,h3,h4,h5,h6': {
              fontFamily: theme('fontFamily.display'),
              a: {
                fontWeight: 'bold'
              }
            }
          }
        }
      })
    }
  }
}
