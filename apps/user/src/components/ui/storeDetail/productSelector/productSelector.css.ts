import { globalTheme } from "@/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const fixedButton = style({
  position: "fixed",
  bottom: 0,
  left: 0,
  zIndex: 2,

  width: "100%",
  padding: "0 15px 30px",

  backgroundColor: globalTheme.color.white,
  fontSize: 16,
});
