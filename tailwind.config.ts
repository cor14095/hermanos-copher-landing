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
        "hc-red":"#bf0811",
        "hc-blue":"#070058",
        "hc-yellow":"#ffec00"
      }
    },
  },
  plugins: [],
}
export default config