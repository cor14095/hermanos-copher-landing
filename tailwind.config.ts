import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        "hc-red":"#f40408",
        "hc-blue":"#070058",
        "hc-yellow":"#ffec00"
      },
      backgroundImage: {
        'hc-store-blue': "url('/images/Hermanos-Copher-periferico.png')"
      }
    },
  },
  plugins: [],
}
export default config
