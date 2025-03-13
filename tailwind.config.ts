
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    extend: {
      colors: {
        'gov-blue': '#1d70b8',
        'gov-black': '#0b0c0c',
        'gov-white': '#ffffff',
        'gov-grey': '#626a6e',
        'gov-light-grey': '#f3f2f1',
        'gov-green': '#00703c',
      },
      fontFamily: {
        'gov': ['GDS Transport', 'arial', 'sans-serif'],
      },
      fontSize: {
        'gov-heading': ['48px', '50px'],
        'gov-body': ['19px', '25px'],
        'gov-small': ['16px', '20px'],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
