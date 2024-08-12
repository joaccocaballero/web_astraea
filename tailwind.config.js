/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");

module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
    flowbite.content(),
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        "asparagus": {
          "DEFAULT": "#86A35A",
          "100": "#1b2112",
          "200": "#364224",
          "300": "#516336",
          "400": "#6c8448",
          "500": "#86a35a",
          "600": "#9fb77b",
          "700": "#b7c99c",
          "800": "#cfdbbd",
          "900": "#e7edde"
        },
        "pistachio": {
          "DEFAULT": "#b8d782",
          "100": "#263311",
          "200": "#4b6623",
          "300": "#719934",
          "400": "#94c34f",
          "500": "#b4d483",
          "600": "#c2dd9b",
          "700": "#d1e5b4",
          "800": "#e1eecd",
          "900": "#f0f6e6"
        },
        "white": {
          "DEFAULT": "#ffffff",
          "100": "#333333",
          "200": "#666666",
          "300": "#999999",
          "400": "#cccccc",
          "500": "#ffffff",
          "600": "#ffffff",
          "700": "#ffffff",
          "800": "#ffffff",
          "900": "#ffffff"
        },
        "black": {
          "DEFAULT": "#000000",
          "100": "#000000",
          "200": "#000000",
          "300": "#000000",
          "400": "#000000",
          "500": "#000000",
          "600": "#333333",
          "700": "#666666",
          "800": "#999999",
          "900": "#cccccc"
        },
        "reseda_green": {
          "DEFAULT": "#607853",
          "100": "#131811",
          "200": "#273021",
          "300": "#3a4832",
          "400": "#4d6043",
          "500": "#607853",
          "600": "#7e9b6f",
          "700": "#9eb493",
          "800": "#becdb7",
          "900": "#dfe6db"
        }
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
    screens: {
      '4xl': {'max': '2180px'},
      // => @media (max-width: 1535px) { ... }

      '3xl': {'max': '1920px'},
      // => @media (max-width: 1535px) { ... }

      '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '767px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '639px'},
      // => @media (max-width: 639px) { ... }
    }
  },
  plugins: [require("tailwindcss-animate"),  flowbite.plugin()],
}
