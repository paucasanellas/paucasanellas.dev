import { GoogleFontsFamilies } from '@/interfaces/config/modules'

const families: GoogleFontsFamilies = {
  Poppins: [100, 300, 400, 500, 700, 900]
}

const googleFonts = {
  download: false,
  prefetch: true,
  preconnect: true,
  preload: true,
  families
}

export {
  googleFonts
}
