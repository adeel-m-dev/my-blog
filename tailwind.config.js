// module.exports = {
//   content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
//   theme: {
//     fontFamily: {
//       sans: ["Inter", "sans-serif"],
//     },
//     screens: {
//       xs: { min: "320px", max: "639px" },
//       sm: { min: "640px", max: "767px" },
//       md: { min: "768px", max: "1023px" },
//       lg: { min: "1024px", max: "1279px" },
//       xl: { min: "1280px", max: "1535px" },
//       "2xl": { min: "1536px", max: "1980px" },
//     },
//     extend: {},
//   },
//   plugins: [],
// };

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      zIndex: {
        2: 2,
        3: 3,
      },
      inset: {
        "-100": "-100%",
        "-160-px": "-160px",
        "-20-px": "-20px",
        "25-px": "25px",
        "40-px": "40px",
        "95-px": "95px",
      },
      height: {
        "95-px": "95px",
        "500-px": "500px",
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
