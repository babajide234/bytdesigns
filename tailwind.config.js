/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html", "./img/.{jpg,png,svg,gif}"],
  theme: {
    extend: {
      colors: {
        primary: "#427478",
        faded: "#F9FFFF",
      },
      backgroundImage: {
        "hero-img": 'url("../img/headerBg.png")',
        "mission-img": 'url("../img/layer.png")',
        "section-img": 'url("../img/section-img.png")',
        "footer-img": 'url("../img/footer.png")',
        "shop-img": 'url("../img/pic1.png")',
      },
      fontFamily: {
        "dm-sans": ["DM Sans", "sans-serif"],
        dhurjati: ["Dhurjati", "serif"],
        "space-mono": ["Space Mono", "monospace"],
        "space-grotesk": ["Space Grotesk", "sans-serif"],
      },
      transitionProperty: {
        width: "width",
      },
      keyframes: {
        borderAnimation: {
          from: { width: "0" },
          to: { width: "100%" },
        },
      },
      animation: {
        borderAnimation: "borderAnimation 0.5s forwards ease-in-out",
      },
    },
  },
  plugins: [
    require('@tailwindcss/container-queries')
  ],
};
