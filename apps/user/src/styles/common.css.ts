import { style } from "@vanilla-extract/css";

export const productTitle = style({
  fontSize: 18,
  fontWeight: "bold",
  marginTop: 20,
  marginBottom: 10,
});

export const title = style({
  padding: "0 4px",
  // marginBottom: 6,

  fontWeight: 700,
  fontSize: 16,
});

export const reviewAndDistanceWrapper = style({
  display: "flex",
  alignItems: "center",
  gap: 4,

  padding: "0 4px",

  fontSize: 12,
  lineHeight: 1.2,

  marginBottom: 16,
});
