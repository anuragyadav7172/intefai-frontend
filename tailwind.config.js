export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00E5FF",
        secondary: "#7C4DFF",
        dark: "#0B0F19",
      },
      boxShadow: {
        glow: "0 0 20px rgba(0,229,255,0.35)",
      },
    },
  },
  plugins: [],
};
