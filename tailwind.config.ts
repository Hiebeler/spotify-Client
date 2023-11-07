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
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '3rem',
          xl: '4rem',
          '2xl': '5rem',
        }
      }
    }

  },
  plugins: [],
}
export default config
