module.exports = {
  darkMode: 'class',
  purge: {
    content: ['./layouts/**/*.html'],
    options: {
      safelist: ['dark'],
    },
    layers: ['components', 'utilities', 'base']
  },
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: {
        50: "#ffffff",
        100: "#ffffff",
        200: "#ffffff",
        300: "#ffffff",
        400: "#ffffff",
        500: "#ffffff",
        600: "#c4c4c4",
        700: "#8a8a8a",
        800: "#4f4f4f",
        900: "#141414"
      },
      black: {
        50: "#e0e0e0",
        100: "#cccccc",
        200: "#a6a6a6",
        300: "#808080",
        400: "#595959",
        500: "#333333",
        600: "#2e2e2e",
        700: "#292929",
        800: "#242424",
        900: "#1f1f1f"
      },
      blue: {
        50: "#eef6fc",
        100: "#e1f0fa",
        200: "#c2e0f4",
        300: "#9bcded",
        400: "#6cb4e5",
        500: "#3398db",
        600: "#258cd0",
        700: "#217dba",
        800: "#1e71a9",
        900: "#185d8b"
      },
      gray: {
        50: "#e3e6e8",
        100: "#ccd1d6",
        200: "#9ca6af",
        300: "#6e7a87",
        400: "#49525a",
        500: "#22262a",
        600: "#202427",
        700: "#1b1f22",
        800: "#191c1f",
        900: "#171a1c"
      },
      red: {
        50: "#f9d8d2",
        100: "#f7c9c0",
        200: "#f2aa9c",
        300: "#ee8f7c",
        400: "#ea7058",
        500: "#e55134",
        600: "#c73619",
        700: "#9a2a14",
        800: "#681c0d",
        900: "#360f07"
      },
      yellow: {
        50: "#fffad1",
        100: "#fff7b8",
        200: "#fff18a",
        300: "#ffec5c",
        400: "#ffe72e",
        500: "#ffe100",
        600: "#d1b900",
        700: "#9e8c00",
        800: "#706300",
        900: "#3d3600"
      },
      green: {
        50: "#dbf0dd",
        100: "#cceacf",
        200: "#afdfb4",
        300: "#8ed295",
        400: "#71c67a",
        500: "#54ba5e",
        600: "#42a44c",
        700: "#35833d",
        800: "#29662f",
        900: "#1d4922"
      },
      indigo: {
        50: "#f7f7fd",
        100: "#e6e7f9",
        200: "#cacaf2",
        300: "#adaeeb",
        400: "#9092e4",
        500: "#7375dd",
        600: "#4245d1",
        700: "#2b2db0",
        800: "#1f217f",
        900: "#141552"
      },
      violet: {
        50: "#f2eefb",
        100: "#e6def7",
        200: "#ccbdef",
        300: "#b39ce8",
        400: "#997be0",
        500: "#805ad8",
        600: "#6031ce",
        700: "#4b26a1",
        800: "#381c78",
        900: "#23124a"
      },
      pink: {
        50: "#fcf3f7",
        100: "#f6e0eb",
        200: "#eab8d1",
        300: "#de91b8",
        400: "#d3699e",
        500: "#c74285",
        600: "#ad3370",
        700: "#8a2959",
        800: "#6a1f45",
        900: "#47152e"
      },
      orange: {
        50: "#fef5eb",
        100: "#fdecd8",
        200: "#fcd9b1",
        300: "#fac689",
        400: "#f9b05d",
        500: "#f79d36",
        600: "#f0850a",
        700: "#bf6a08",
        800: "#894c05",
        900: "#583104"
      }
    },
    fontFamily: {
      'sans': ['Poppins', 'Sans-serif']
    },
    extend: {}
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography'),
  ]
}
