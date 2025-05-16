import { createGlobalTheme, createThemeContract } from "@vanilla-extract/css";

export const globalTheme = createThemeContract({
  color: {
    primary: null,
    secondary: null,
    tertiary: null,

    black: null,
    white: null,

    gray: {
      dark: null,
      base: null,
      light: null,
    },
  },
});

export const theme = createGlobalTheme(":root", globalTheme, {
  color: {
    primary: "#35A865",
    secondary: "#809588",
    tertiary: "#EDF7F1",

    black: "#333333",
    white: "#ffffff",

    gray: {
      dark: "#666666",
      base: "#999999",
      light: "#CCCCCC",
    },
  },
});
