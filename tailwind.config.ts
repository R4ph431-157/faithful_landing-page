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
        surface: "#111111",
        "surface-light": "#1A1A1A",
        text: "#F5F2ED",
        "text-secondary": "#A5A5A5",
        "text-muted": "#7A7A7A",
        accent: "#D4886A",
        heading: "#D4C4AA",
        border: "#262626",
        "border-light": "#333333",
      },
      fontFamily: {
        serif: ['"Crimson Pro"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
        mono: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}