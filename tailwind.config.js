/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      background: "#0B0F19",
      foreground: "#FFFFFF",
      primary: "#06B6D4",
      secondary: "#F59E0B",
      accent: "#06B6D4",
      muted: "#64748B",
      white: "#FFFFFF",
      black: "#000000",
      transparent: "transparent",
      slate: {
        950: "#0F172A",
        900: "#0F172A",
        800: "#1E293B",
        700: "#334155",
        600: "#475569",
      },
    },
    fontFamily: {
      sans: ["Poppins", "system-ui", "sans-serif"],
    },
    animation: {
      "fade-in": "fadeIn 0.6s ease-in-out",
      "slide-up": "slideUp 0.6s ease-out",
      "scale-in": "scaleIn 0.5s ease-out",
    },
    keyframes: {
      fadeIn: {
        "0%": { opacity: "0" },
        "100%": { opacity: "1" },
      },
      slideUp: {
        "0%": { transform: "translateY(20px)", opacity: "0" },
        "100%": { transform: "translateY(0)", opacity: "1" },
      },
      scaleIn: {
        "0%": { transform: "scale(0.95)", opacity: "0" },
        "100%": { transform: "scale(1)", opacity: "1" },
      },
    },
  },
  plugins: [],
}
