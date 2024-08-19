import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        title:[
          "Playball", "cursive"
        ],
        headingName:[
          "Qwigley", "cursive"
        ]
      }
      ,
      colors:{
          basic:"#515151",
        borderColor:"#898989",
        secondBasic:"#874B62",
        title:"#682740"
      }
    },
  },
  plugins: [    daisyui,
  ],
}

