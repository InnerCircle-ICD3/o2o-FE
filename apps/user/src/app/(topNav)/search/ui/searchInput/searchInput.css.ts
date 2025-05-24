import { globalTheme } from "@/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const searchInputWrapper = style({
  display: "flex",
  alignItems: "center",
  width: "100%",
  height: "40px",
  padding: "0 16px",
  borderRadius: "20px",
  gap: "8px",
});

export const searchInput = style({
  flex: 1,
  height: "100%",
  border: "none",
  backgroundColor: "transparent",
  fontSize: "14px",
  color: globalTheme.color.black,
  outline: "none",
  "::placeholder": {
    color: globalTheme.color.gray.base,
  },
});

export const searchButton = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "24px",
  height: "24px",
  padding: 0,
  border: "none",
  backgroundColor: "transparent",
  cursor: "pointer",
});
