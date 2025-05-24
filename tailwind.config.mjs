/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        pangaia: ['PP Pangaia', 'sans-serif'],
        neuecorp: ['PP Neue Corp', 'sans-serif'],
      },
    },
  },
  plugins: [],
} 