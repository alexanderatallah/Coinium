import createTheme from "spectacle/lib/themes/default"

const brand = {
  // black and its tints:
  black: "#242121", // black
  darkerGray: "#373534",
  darkGray: "#5f5c5b",
  gray: '#949BA6',
  lightGray: "#e8e8e9",
  white: '#F6F3F3', // lightest gray

  // purple
  // darkPurple: '#000326',
  purple: '#2C2853',
  lightPurple: '#8588AD',

  // red and its tints:
  red: "#c43a31", // brand red
  darkestRed: "#cd5244",
  darkerRed: "#d56557",
  darkRed: "#dc7a6b",
  lightred: "#e58c7d",
  lighterRed: "#eb9f92",
  lightestRed: "#efb3a7",
  paleRed: "#f5c5bc",
  palerRed: "#f8d9d2",
  palestRed: "#f6ebe7" // palest red
}

const colors = {
  logo: brand.darkPurple,
  primary: brand.white,
  secondary: brand.purple,
  tertiary: brand.gray,
  quarternary: brand.lightPurple,
}

const fonts = {
  // heading: "'Poppins', 'Century Gothic', 'Helvetica Neue', Helvetica, sans-serif",
  // body: "'Source Serif Pro', serif",
  // monospace: "'akkurta', 'Inconsolata', Consolas, 'Lucida Console', 'Lucida Sans Typewriter', 'DejaVu Sans Mono', 'Bitstream Vera Sans Mono', 'Liberation Mono', Monaco, Courier, monospace"
  // primary: { name: "Open Sans Condensed", googleFont: true, styles: [ "400", "700" ] },
  primary: "Roboto, 'Open Sans Condensed'",
  secondary: "Roboto, 'Open Sans Condensed'",
  tertiary: "'Helvetica Neue', Helvetica, 'sans serif'",
}

const theme = createTheme(colors, fonts)

export {
  colors,
  fonts,
  theme
}
