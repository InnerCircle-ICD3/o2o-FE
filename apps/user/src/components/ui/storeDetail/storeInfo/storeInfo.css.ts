import { style } from "@vanilla-extract/css";

export const thumbnail = style({
  width: "100%",
  aspectRatio: "393 / 270",

  position: "relative",

  marginBottom: 16,
});

export const title = style({
  padding: "0 4px",
  marginBottom: 6,

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

export const metaSection = style({
  display: "flex",
  flexDirection: "column",
  gap: 10,

  marginBottom: 10,
});

export const metaRow = style({
  display: "flex",
  gap: 20,

  fontSize: 14,
});

export const metaLabel = style({
  width: 60,
});

export const metaValue = style({
  flex: 1,

  wordBreak: "keep-all",
});

export const iconDescription = style({
  display: "flex",
  gap: 4,

  fontSize: 14,
  fontWeight: "bold",
  lineHeight: 1.2,
  wordBreak: "keep-all",
});
