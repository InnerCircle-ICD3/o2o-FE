import { style } from "@vanilla-extract/css";
import { globalTheme } from "./theme.css";

export const middleStroke = style({
  textDecoration: "line-through",
});

export const primaryColor = style({
  color: globalTheme.color.primary,
});

export const innerPadding = style({
  padding: "0 20px",
});

export const grayBackground = style({
  padding: 20,

  backgroundColor: globalTheme.color.gray.background,
  borderRadius: 12,
});
