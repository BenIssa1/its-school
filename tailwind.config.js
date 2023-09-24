/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", 
    'node_modules/preline/dist/*.js',
  ],
  theme: {
    extend: {
      fontFamily: {
        Poppins: "Poppins"
      }, 
      colors: {
        // Secondary color
        Teal: "#2F6C6D",
        HummingBird: "#D1F1EE",
        yellow: "#E4D63B",
        Solitude: "#E9E9EA",
        gray: "#4B4B4C",

        // Primary Color
        PrimaryBlue: "#0A0F27",
        SecondaryBlue: "#001952",
        ThirdlyBlue: "#043775",
        SkyBlue: "#12769E",
        PrimaryGray: "#FCF6F3",
        SecondaryGray: '#e5e5e5',
        ThirdlyGray: "#8b8c89",
        OriginGold: "#D4AF37 ",
        DesaturateGold: "#e6c619 "


      },
      animation: {
        slide: "slide 25s linear infinite"
      },
      keyframes: {
        slide: {
          "0%,100%": {transform: "translateX(5%)"},
          "50%": {transform: "translateX(-120%)"}
        }
      }
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    }
  },
  plugins: [require('@tailwindcss/forms'), require('preline/plugin'),],
}

