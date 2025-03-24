/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Nuova palette colori per la pizzeria moderna
        pizzaRed: "#FF5A5F",
        pizzaGreen: "#00897B",
        pizzaYellow: "#FFB74D",
        pizzaBrown: "#5D4037",
        pizzaBackground: "#F9F5F1",
        
        // Mantengo i colori precedenti per retrocompatibilità
        eden: "#0c4b43",
        iron: "#d9d9db",
        mojo: "#bf4a3a",
        kabul: "#63483f",
        mineralGreen: "#436464",
        grannySmith: "#7c9b9b",
        codGray: "#0c0c0c",
        gumbo: "#80a4a4",
        cascade: "#84a49c",
        lisbonBrown: "#3e391c",

        // Nuovi colori primari
        "pizza-red": "var(--pizza-red)",
        "pizza-green": "var(--pizza-green)",
        "pizza-yellow": "var(--pizza-yellow)",
        "pizza-brown": "var(--pizza-brown)",
        "pizza-background": "var(--pizza-background)",

        primary: {
          DEFAULT: "#00897B", // Nuovo colore primario
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#5D4037", // Colore marrone
          foreground: "#FFFFFF",
        },
        darkBg: "#2D3748",
        accent: {
          DEFAULT: "#FF5A5F", // Colore rosso pizzeria
          foreground: "#FFFFFF",
        },
        background: "#F9F5F1", // Sfondo chiaro
        foreground: "#2D3748",
        card: {
          DEFAULT: "#FFFFFF",
          foreground: "#2D3748",
        },
        popover: {
          DEFAULT: "#FFFFFF",
          foreground: "#2D3748",
        },
        muted: {
          DEFAULT: "#E2E8F0",
          foreground: "#64748B",
        },
        destructive: {
          DEFAULT: "#E53E3E",
          foreground: "#FFFFFF",
        },
        border: "#E2E8F0",
        input: "#E2E8F0",
        ring: "#FF5A5F",
        chart: {
          1: "#00897B",
          2: "#4CAF50",
          3: "#03A9F4",
          4: "#FFB74D",
          5: "#FF5A5F",
        },
        dark: {
          primary: {
            DEFAULT: "#00897B",
            foreground: "#FFFFFF",
          },
          secondary: {
            DEFAULT: "#5D4037",
            foreground: "#FAFAFB",
          },
          accent: {
            DEFAULT: "#FF5A5F",
            foreground: "#FAFAFB",
          },
          background: "#1A202C",
          foreground: "#F7FAFC",
          card: {
            DEFAULT: "#2D3748",
            foreground: "#F7FAFC",
          },
          popover: {
            DEFAULT: "#2D3748",
            foreground: "#F7FAFC",
          },
          muted: {
            DEFAULT: "#4A5568",
            foreground: "#A0AEC0",
          },
          destructive: {
            DEFAULT: "#E53E3E",
            foreground: "#FFFFFF",
          },
          border: "#4A5568",
          input: "#4A5568",
          ring: "#FF5A5F",
        },
      },
      borderRadius: {
        sm: "0.125rem",
        md: "0.375rem",
        lg: "0.5rem",
        xl: "1rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
        full: "9999px",
      },
      boxShadow: {
        sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
        md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
        lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
        xl: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        gambetta: ['"Gambetta"', 'Sans-serif'],
        playfair: ['"Playfair Display"', 'serif'],
        montserrat: ['"Montserrat"', 'sans-serif'],
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
};