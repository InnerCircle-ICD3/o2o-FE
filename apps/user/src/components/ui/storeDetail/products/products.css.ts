import { globalTheme } from "@/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const container = style({
  display: "flex",
  flexDirection: "column",
  gap: 10,

  paddingBottom: 20,
});

export const wrapper = style({
  display: "flex",
  gap: 10,

  width: "100%",
  height: "150px",
});

export const thumbnail = style({
  position: "relative",

  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  width: 150,
  height: 150,

  backgroundColor: globalTheme.color.gray.background,
  borderRadius: 12,
});

export const shadowLabel = style({
  position: "absolute",
  top: 0,
  left: 0,
  zIndex: 2,

  width: "100%",
  height: "100%",

  backgroundColor: globalTheme.color.black,
  borderRadius: 12,
  opacity: 0.3,
});

export const productLabel = style({
  position: "absolute",
  top: 5,
  right: 5,
});

export const infoWrapper = style({
  position: "relative",

  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",
  gap: 2,

  textAlign: "left",
});

export const strongText = style({
  fontWeight: 700,
  fontSize: 16,
});

export const subText = style({
  fontSize: 12,
});
