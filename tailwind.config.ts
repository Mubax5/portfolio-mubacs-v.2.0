export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "SFMono-Regular", "ui-monospace", "monospace"],
      },
      colors: {
        base: {
          950: "#050505",
          900: "#0f0f0f",
          850: "#121212",
          800: "#1a1a1a",
          700: "#222222",
          600: "#3a3a3a",
          500: "#656565",
          400: "#878787",
          300: "#acadb0",
          200: "#dededf",
          100: "#f5f5f5",
        },
      },
    },
  },
  plugins: [],
};
