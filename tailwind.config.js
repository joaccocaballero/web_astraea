/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
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
          "DEFAULT": "#b4d483",
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
      }      
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
  plugins: [],
};
