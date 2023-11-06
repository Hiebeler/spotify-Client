import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        "background_light": "#ffffff",
        "background_dark": "#181818",
        "foreground_light": "#000000",
        "foreground_dark": "#ffffff",
        "text_dark": "#6b7280",
        "text_light": "#6b7280",
        "primary": "#1DB954"
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '6rem',
          xl: '8rem',
          '2xl': '10rem',
        }
      }
    }

  },
  plugins: [],
}
export default config
