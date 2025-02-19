/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
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

        primary: {
          DEFAULT: "#0c4b43", // Eden
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#63483f", // Kabul
          foreground: "#FFFFFF",
        },
        darkBg: "#0c0c0c", // Cod Gray
        accent: {
          DEFAULT: "#bf4a3a", // Mojo
          foreground: "#FFFFFF",
        },
        background: "#d9d9db", // Iron
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
          DEFAULT: "#7c9b9b", // Granny Smith
          foreground: "#6D7074",
        },
        destructive: {
          DEFAULT: "#FF4C4C",
          foreground: "#FFFFFF",
        },
        border: "#80a4a4", // Gumbo
        input: "#80a4a4",
        ring: "#bf4a3a", // Mojo
        chart: {
          1: "#84a49c", // Cascade
          2: "#4CAF50",
          3: "#03A9F4",
          4: "#FFC107",
          5: "#8E44AD",
        },
        dark: {
          primary: {
            DEFAULT: "#0c4b43", // Eden
            foreground: "#FFFFFF",
          },
          secondary: {
            DEFAULT: "#63483f", // Kabul
            foreground: "#FAFAFB",
          },
          accent: {
            DEFAULT: "#bf4a3a", // Mojo
            foreground: "#FAFAFB",
          },
          background: "#0c0c0c", // Cod Gray
          foreground: "#FAFAFB",
          card: {
            DEFAULT: "#3e391c", // Lisbon Brown
            foreground: "#FAFAFB",
          },
          popover: {
            DEFAULT: "#3e391c", // Lisbon Brown
            foreground: "#FAFAFB",
          },
          muted: {
            DEFAULT: "#436464", // Mineral Green
            foreground: "#6D7074",
          },
          destructive: {
            DEFAULT: "#FF4C4C",
            foreground: "#FFFFFF",
          },
          border: "#80a4a4", // Gumbo
          input: "#80a4a4",
          ring: "#bf4a3a", // Mojo
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
        gambetta: ['"Gambetta"', 'Sans-serif'],
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