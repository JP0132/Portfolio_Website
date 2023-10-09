/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#e7f0f8",
        tertiary: "#151030",
        accent: "#F13024",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
        custom: "1300px",
      },
      backgroundImage: {
        hero: 'url("/blade-lustre.jpg")',
        site: 'url("/site-bg.svg")',
      },
      animation: {
        "spin-slow": "spin 6s linear infinite",
        // Different animations for different screen sizes
        "ltr-linear-infinite-small": "ltr-linear-infinite 100s linear infinite",
        "ltr-linear-infinite-medium":
          "ltri-linear-infinite 100s linear infinite",
        "ltr-linear-infinite-large":
          "ltr-linear-infinitexl 100s linear infinite",
      },
      keyframes: {
        "ltr-linear-infinite": {
          from: { "background-position": "0 0" },
          to: { "background-position": "400% 0%" },
        },
        "ltri-linear-infinite": {
          from: { "background-position": "0 0" },
          to: { "background-position": "1000% 0%" },
        },
        "ltr-linear-infinitexl": {
          from: { "background-position": "0 0" },
          to: { "background-position": "50000% 0%" },
        },
      },
    },
  },
  plugins: [],
};
