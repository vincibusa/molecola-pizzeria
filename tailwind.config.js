/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#7c483c",
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#503837",
          foreground: "#FFFFFF",
        },
        darkBg: "#281e1e",
        accent: {
          DEFAULT: "#b6472a",
          foreground: "#FFFFFF",
        },
        background: "#FAFAFB",
        foreground: "#020817",
        card: {
          DEFAULT: "#FFFFFF",
          foreground: "#020817",
        },
        popover: {
          DEFAULT: "#FFFFFF",
          foreground: "#020817",
        },
        muted: {
          DEFAULT: "#F0F1F3",
          foreground: "#6D7074",
        },
        destructive: {
          DEFAULT: "#FF4C4C",
          foreground: "#FFFFFF",
        },
        border: "#E0E0E0",
        input: "#E0E0E0",
        ring: "#b6472a",
        chart: {
          1: "#FF6F61",
          2: "#4CAF50",
          3: "#03A9F4",
          4: "#FFC107",
          5: "#8E44AD",
        },
        dark: {
          primary: {
            DEFAULT: "#7c483c",
            foreground: "#FFFFFF",
          },
          secondary: {
            DEFAULT: "#503837",
            foreground: "#FAFAFB",
          },
          accent: {
            DEFAULT: "#b6472a",
            foreground: "#FAFAFB",
          },
          background: "#281e1e",
          foreground: "#FAFAFB",
          card: {
            DEFAULT: "#121212",
            foreground: "#FAFAFB",
          },
          popover: {
            DEFAULT: "#121212",
            foreground: "#FAFAFB",
          },
          muted: {
            DEFAULT: "#1E1E2C",
            foreground: "#6D7074",
          },
          destructive: {
            DEFAULT: "#FF4C4C",
            foreground: "#FFFFFF",
          },
          border: "#3C3C3C",
          input: "#3C3C3C",
          ring: "#b6472a",
        },
      },
      borderRadius: {
        sm: "0.125rem",
      },
      boxShadow: {
        sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      fontSize: {
        heading: "36px",
        body: "14px",
      },
      fontWeight: {
        heading: "700",
        body: "600",
      },
    },
  },
  plugins: [],
  darkMode: "class",
} 