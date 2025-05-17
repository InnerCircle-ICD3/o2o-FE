import { style } from "@vanilla-extract/css";

export const container = style({
  display: "flex",
  flexDirection: "column",

  width: "100%",
  height: "100vh",
});

export const main = style({
  height: "calc(100% - 44px)",
});

export const topNav = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",

  width: "100%",
  height: "44px",

  padding: "12px",
});

const BUTTON_SIZE = 24;

export const backButton = style({
  width: BUTTON_SIZE,
  height: BUTTON_SIZE,
});

export const empty = style({
  width: BUTTON_SIZE,
  height: BUTTON_SIZE,
});

export const title = style({
  fontSize: 20,
  fontWeight: 500,
});
