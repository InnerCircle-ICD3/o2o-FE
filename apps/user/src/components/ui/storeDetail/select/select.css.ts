import { globalTheme } from "@/styles/theme.css";
import { style, styleVariants } from "@vanilla-extract/css";

export const container = style({
  position: "relative",

  width: "100%",

  marginBottom: 20,
});

const buttonBase = style({
  display: "flex",
  justifyContent: "space-between",

  width: "100%",

  padding: 16,

  border: `1px solid ${globalTheme.color.gray.light}`,
  borderRadius: 10,

  fontSize: 16,
});

export const button = styleVariants({
  default: [buttonBase],
  opened: [
    buttonBase,
    {
      borderBottom: "none",
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0,
    },
  ],
});

export const list = style({
  position: "absolute",
  top: "100%",
  left: "0",
  zIndex: 2,

  display: "flex",
  flexDirection: "column",
  gap: 1,

  width: "100%",
  maxHeight: 180,

  border: `1px solid ${globalTheme.color.gray.light}`,
  borderBottomLeftRadius: 10,
  borderBottomRightRadius: 10,
  backgroundColor: globalTheme.color.gray.light,

  overflowY: "auto",
});

export const item = style({
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  gap: 8,

  padding: 16,
  backgroundColor: globalTheme.color.white,

  fontWeight: 500,
});
