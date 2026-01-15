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
        'brand-primary': '#0066ff',
        'brand-secondary': '#00d9ff',
        'brand-dark': '#0a0e27',
        'brand-light': '#f0f4ff',
      },
    },
  },
  plugins: [],
}
export default config
