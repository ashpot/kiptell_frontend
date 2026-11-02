/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        // Kiptell design tokens — keep in sync with Figma
        brand: {
          DEFAULT: "#FFC83D",
          50: "#FFF8E6",
          100: "#FEF1CC",
          200: "#FBE3A0",
          500: "#FFC83D",
          600: "#F5B000",
          700: "#D99A00",
        },
        ink: "#0A0A0A",
        surface: "#F8F8F8",
        line: "#EBEBEB",
        muted: "#6B7280",
        success: { DEFAULT: "#16A34A", 50: "#F0FDF4", 200: "#BBF7D0" },
        danger: { DEFAULT: "#EF4444", 50: "#FEF2F2", 100: "#FDE8E8", 200: "#FECACA" },
      },
    },
  },
  plugins: [],
};
