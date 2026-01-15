import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-primary': '#1d7874',
        'brand-secondary': '#fbbf24',
        'brand-dark': '#0a0e27',
        'brand-light': '#f0fdf4',
      },
    },
  },
  plugins: [],
};
export default config;
