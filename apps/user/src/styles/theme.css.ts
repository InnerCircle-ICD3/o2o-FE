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

    label: {
      sales: {
        background: null,
        color: null,
      },
      soldOut: {
        background: null,
        color: null,
      },
      endSoon: {
        background: null,
        color: null,
      },
      readyForPickup: {
        background: null,
        color: null,
      },
      collected: {
        background: null,
        color: null,
      },
      cancel: {
        background: null,
        color: null,
      },
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
    label: {
      sales: {
        background: "#D8F4E4",
        color: "#35A865",
      },
      soldOut: {
        background: "#393A40",
        color: "#FFFFFF",
      },
      endSoon: {
        background: "#FFDDCF",
        color: " #F15937",
      },
      readyForPickup: {
        background: "#D7E3FA",
        color: "#447CC2",
      },
      collected: {
        background: "#D8F4E4",
        color: "#35A865",
      },
      cancel: {
        background: "#F3F3F3",
        color: "#666666",
      },
    },
  },
});
