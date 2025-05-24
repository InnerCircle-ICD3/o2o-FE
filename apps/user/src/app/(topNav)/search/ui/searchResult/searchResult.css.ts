import { globalTheme } from "@/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const recommendSearchContainer = style({
  display: "flex",
  flexDirection: "column",
  gap: 10,
});

export const recentSearchContainer = style({
  display: "flex",
  flexDirection: "column",
  gap: 10,
});

export const searchTitle = style({
  fontSize: 16,
  fontWeight: 700,
});

export const emphasize = style({
  color: globalTheme.color.primary,
});

export const listStyle = style({
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  gap: 10,
  padding: "14px 20px",
});

export const text = style({
  color: globalTheme.color.text.primary,
  fontSize: 16,
  fontWeight: 500,
  lineHeight: "normal",
});
