import { style } from "@vanilla-extract/css";

export const headerStyle = style({
  position: "fixed",
  top: 0,
  left: "50%",
  transform: "translateX(-50%)",
  zIndex: 100,

  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",

  width: "100%",
  height: "44px",

  padding: "12px",
  maxWidth: 478,
  backgroundColor: "white",
});

export const contentStyle = style({
  display: "flex",
  flexDirection: "column",
  gap: 20,

  padding: 20,
});

export const sectionContaienrStyle = style({
  display: "flex",
  flexDirection: "column",
  gap: 10,
});

export const backButton = style({
  width: 24,
  height: 24,
});
