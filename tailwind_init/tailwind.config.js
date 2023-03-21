// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ["./*.html"],
//   theme: {
//     screens: {
//       sm: "640px",
//       md: "768px",
//       lg: "1024px",
//       xl: "1280px",
//     },
//     extend: {
//       colors: {
//         brightRed: "#FF0000",
//         brightGreen: "#00FF00",
//         brightBlue: "#0000FF",
//         darkBlue: "#0000A0",
//         darkGreen: "#00A000",
//         darkRed: "#A00000",
//         darkYellow: "#A0A000",
//         lightBlue: "#ADD8E6",
//         lightGreen: "#90EE90",
//         lightRed: "#FFB6C1",
//         lightYellow: "#FFFFE0",
//       },
//     },
//     plugins: [],
//   },
// };

module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        brightRed: 'hsl(12, 88%, 59%)',
        brightRedLight: 'hsl(12, 88%, 69%)',
        brightRedSupLight: 'hsl(12, 88%, 95%)',
        darkBlue: 'hsl(228, 39%, 23%)',
        darkGrayishBlue: 'hsl(227, 12%, 61%)',
        veryDarkBlue: 'hsl(233, 12%, 13%)',
        veryPaleRed: 'hsl(13, 100%, 96%)',
        veryLightGray: 'hsl(0, 0%, 98%)',
      },
    },
  },
  plugins: [],
}

