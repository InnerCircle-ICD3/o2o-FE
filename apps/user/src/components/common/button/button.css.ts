import { globalTheme } from "@/styles/theme.css";
import { style, styleVariants } from "@vanilla-extract/css";

const button = style({
  width: "100%",
  height: "60px",

  borderWidth: "1px",
  borderStyle: "solid",
  borderRadius: "8px",

  fontWeight: "bold",

  cursor: "pointer",
});

export const buttonStatus = styleVariants({
  primary: [
    button,
    {
      backgroundColor: globalTheme.color.primary,
      borderColor: globalTheme.color.primary,
      color: globalTheme.color.white,
    },
  ],
  disabled: [
    button,
    {
      backgroundColor: globalTheme.color.white,
      borderColor: globalTheme.color.gray.light,
      color: globalTheme.color.gray.base,

      cursor: "not-allowed",
    },
  ],
  common: [
    button,
    {
      backgroundColor: globalTheme.color.white,
      borderColor: globalTheme.color.gray.light,
      color: globalTheme.color.black,
    },
  ],
});
