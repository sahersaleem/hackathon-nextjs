import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {

      screens:{
        'xs':"200px"
      },
      colors: {
       'blue':"#2A254B",
       'white':"#FFFFFF",
       "off-white" :"#F9F9F9",

        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      
        fontFamily: {
          'clash-display': ["var(--font-clash)",],
          'satoshi-display': ["var(--font-satoshi)",]
        },
      
    },
  },
  plugins: [],
};
export default config;
