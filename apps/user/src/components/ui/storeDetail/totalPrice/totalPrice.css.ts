import { globalTheme } from "@/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const container = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  gap: 10,

  padding: 20,
  marginBottom: 10,

  backgroundColor: globalTheme.color.tertiary,
  borderRadius: 12,

  fontSize: 14,
});

export const count = style({
  flexShrink: 0,
  fontWeight: 500,
});

export const amountWrapper = style({
  display: "flex",
  flexDirection: "column",
  gap: "6px",
  textAlign: "right",
});

export const row = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "12px",

  fontWeight: 700,
});

export const label = style({
  width: 68,

  textAlign: "right",
});

export const price = style({
  fontSize: 20,
});
