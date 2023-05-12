/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        slate: "#313e48",
        salmon: "#dcc5b7",
        darksalmon: "#584f49",
        brown: "#ac7e65",
        darkbrown: "#402020",
      },
    },
  },
  plugins: [],
};
