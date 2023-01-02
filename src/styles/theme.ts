export default {
  grid: {
    container: "1440px",
    gutter: "2rem",
  },
  border: {
    radius: "0.8rem",
  },
  font: {
    family:
      "Roboto, Poppins, -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    light: 300,
    normal: 400,
    bold: 600,
    sizes: {
      xxsmall_xs: "0.5rem",
      xsmall_s: "0.875rem",
      small_p: "1rem",
      medium_h5: "1.437rem",
      large_h4: "1.725rem",
      xlarge_h3: "2.068rem",
      xxlarge_h2: "2.487rem",
      xxxlarge_h1: "2.981rem",
      huge: "5.2rem",
    },
  },
  colors: {
    primary: "#3787FF",
    secondary: "#E8A635",
    green: "#83DB43",
    darkGreen: "#6BC52B",
    turquoise: "#2EC4C9",
    white: "#FFF",
    black: "#141414",
    gray: "#7B7B7B",
    lightGray: "#E5E5E5",
    dangerDark: "#f13003b",
    textColor: "#474747",
    red: "#BC0000"
  },
  spacings: {
    xxsmall: "0.4rem",
    xsmall: "1rem",
    small: "2rem",
    medium: "3rem",
    large: "4rem",
    xlarge: "5rem",
    xxlarge: "6rem",
  },
  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50,
  },
  transition: {
    default: "0.3s ease-in-out",
    fast: "0.1s ease-in-out",
  },
  shadows: {
    small: "0px 0px 10px 0px rgba(0, 0, 0, 0.25)",
    cards: "0px 0px 30px 0px rgba(0, 0, 0, 0.25)",
  },
} as const;
