/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './.vitepress/theme/components/*.vue',
    './**/*.md',
  ],
  theme: {
    extend: {
      gridTemplateRows: {
        'auto-1fr': 'auto 1fr', // Custom class
      },
    },
  },
  plugins: [],
};
