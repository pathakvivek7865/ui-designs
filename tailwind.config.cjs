/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat"],
        poppins: ["Poppins", "sans-serif"],
        lato: ["Lato"],
        garamond: ["Garamond"],
        inter: ['Inter', "sans-serif"]
      },
      boxShadow: {
        ring: "0 0 50px 10px rgba(38,38,38, .95) inset",
        priceCard: "0 20px 25px -15px rgba(157,172,227,.30)",
        priceCardTopCircle: "0 10px 20px -12px rgba(116,146,255,.48)",
        enterPasswordCardShadow: "0 44px 104px 0px rgba(19,43,80,.1)"

      },
      dropShadow: {
        priceCard: "0 43px 50px  rgba(157,172,227,.30)",
        test: '0 45px 65px rgba(157,172,227,0.30)'
      }
    },
  },
  plugins: [],
};
