/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0A0A0A",
        navy: "#091027",
        surface: "#111111",
        text: "#F5F2ED",
        "text-secondary": "#A5A5A5",
        "text-muted": "#7A7A7A",
        accent: "#D4886A",
      },
      fontFamily: {
        serif: ['"Crimson Pro"', 'Georgia', 'serif'],
        mono: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}