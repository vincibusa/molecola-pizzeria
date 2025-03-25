/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Palette colori modernizzata per Molecola Pizzeria
        "pizza-red": "#D32F2F",        // Rosso più intenso e caldo
        "pizza-red-dark": "#B71C1C",   // Versione più scura per hover
        "pizza-green": "#2E7D32",      // Verde più naturale
        "pizza-yellow": "#FFC107",     // Giallo più brillante
        "pizza-brown": "#5D4037",      // Marrone ricco per sfondo
        "pizza-background": "#FCF8F3", // Beige chiaro per sfondo
        "pizza-white": "#FFFFFF",      // Bianco puro
        "pizza-black": "#212121",      // Nero profondo ma non puro
        "pizza-gray": "#757575",       // Grigio per testi secondari
        "pizza-accent": "#E65100",     // Arancione bruciato per accenti
        
        // Rimuovo i vecchi nomi per coerenza
        pizzaRed: "#D32F2F",
        pizzaGreen: "#2E7D32",
        pizzaYellow: "#FFC107",
        pizzaBrown: "#5D4037",
        pizzaBackground: "#FCF8F3",
        
        primary: {
          DEFAULT: "#D32F2F", // Colore primario ora è il rosso pizza
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#5D4037", // Marrone pizzeria
          foreground: "#FFFFFF",
        },
        darkBg: "#212121",
        accent: {
          DEFAULT: "#FFC107", // Giallo come accento
          foreground: "#212121",
        },
        background: "#FCF8F3", // Sfondo beige chiaro
        foreground: "#212121",
        card: {
          DEFAULT: "#FFFFFF",
          foreground: "#212121",
        },
        popover: {
          DEFAULT: "#FFFFFF",
          foreground: "#212121",
        },
        muted: {
          DEFAULT: "#EEEEEE",
          foreground: "#757575",
        },
        destructive: {
          DEFAULT: "#C62828",
          foreground: "#FFFFFF",
        },
        border: "#E0E0E0",
        input: "#EEEEEE",
        ring: "#D32F2F",
        chart: {
          1: "#D32F2F", // Rosso
          2: "#2E7D32", // Verde
          3: "#1976D2", // Blu
          4: "#FFC107", // Giallo
          5: "#E65100", // Arancione
        },
        dark: {
          primary: {
            DEFAULT: "#EF5350", // Rosso più chiaro per tema scuro
            foreground: "#FFFFFF",
          },
          secondary: {
            DEFAULT: "#8D6E63", // Marrone più chiaro per tema scuro
            foreground: "#FFFFFF",
          },
          accent: {
            DEFAULT: "#FFCA28", // Giallo più chiaro per tema scuro
            foreground: "#212121",
          },
          background: "#121212",
          foreground: "#FFFFFF",
          card: {
            DEFAULT: "#1E1E1E",
            foreground: "#FFFFFF",
          },
          popover: {
            DEFAULT: "#1E1E1E",
            foreground: "#FFFFFF",
          },
          muted: {
            DEFAULT: "#333333",
            foreground: "#BDBDBD",
          },
          destructive: {
            DEFAULT: "#EF5350",
            foreground: "#FFFFFF",
          },
          border: "#333333",
          input: "#333333",
          ring: "#EF5350",
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
        'pizza': '0 10px 30px -5px rgba(211, 47, 47, 0.2)',
        'pizza-hover': '0 15px 40px -5px rgba(211, 47, 47, 0.3)',
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
      backgroundImage: {
        'pizza-pattern': "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D32F2F' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};