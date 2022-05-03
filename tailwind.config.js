module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      zIndex: {
        "-1": "-1",
      },
      fontFamily: {
        body: [
          "'Montserrat'",
          "'Open Sans'",
          "Arial",
          "sans-serif",
        ],
        heading: [
          "'Montserrat'",
          "'Open Sans'",
          "Arial",
          "sans-serif",
        ],
      },
    },
    colors: {
      "transparent": 'transparent',
      "current": 'currentColor',
      "accent": "#EFCFA5",
      "accent-dark": "#EBC99E",
      "brown-dark": "#796A57",
      "brown-background": "#FAE4BC",
      "blue-accent": "#24B4CE",
      "blue": "#79BFD6",
      "light": "#ffffff",
      "black-background": '#1C1A19',
      "black": "#000000",
      "gray-50": "#f7fafc",
      "gray-100": "#edf2f7",
      "gray-200": "#e2e8f0",
      "gray-300": "#cbd5e0",
      "gray-400": "#a0aec0",
      "gray-500": "#718096",
      "gray-600": "#4a5568",
      "gray-700": "#2d3748",
      "gray-800": "#1a202c",
      "gray-900": "#171923",

    }
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}