import { globalTheme } from "@/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const mainHeader = style({
  display: "flex",
  padding: "10px 0",
  justifyContent: "center",
  alignItems: "space-between  ",
  gap: "26px",
});
export const mainHeaderLeft = style({
  display: "flex",
  alignItems: "center",
  gap: "8px",
  flex: 1,
});

export const mainTitle = style({
  color: globalTheme.color.black,
  fontSize: "20px",
  fontWeight: "700",
  lineHeight: "normal",
  textTransform: "uppercase",
});

export const mainHeaderRight = style({
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
  gap: "10px",
});

export const bottomSheetListStyle = style({
  width: "100%",
  marginTop: 30,
});

export const bottomSheetListItemStyle = style({
  display: "flex",
  flexDirection: "column",
  gap: 10,
});

export const bottomSheetListItemButtonStyle = style({
  display: "flex",
  alignItems: "center",
  gap: 10,
  width: "100%",
  padding: "10px 0",
});
