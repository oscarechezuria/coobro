/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        one: {
          500: "#372868",
        },
        two: {
          500: "#219D98",
        },
        three: {
          500: "#FF8C42",
        },
      },
      screens: {
        sm: "680px",
        md: "850px",
        lg: "1024px",
        xl: "1280px",
      },
    },
  },
  plugins: [],
};
