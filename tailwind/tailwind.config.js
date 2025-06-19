module.exports = {
  content: [
    "..\\*.html",
    "..\\*.js",
    "..\\js\\*.js",
    "..\\tailwind\\*.css"
  ],
  plugins: [
    require("@tailwindcss/typography"),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms')({ strategy: 'class' }),
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
}