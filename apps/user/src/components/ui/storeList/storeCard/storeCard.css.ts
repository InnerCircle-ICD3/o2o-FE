import { style } from "@vanilla-extract/css";

export const card = style({
  display: "flex",
  flexDirection: "column",
  borderRadius: "12px",
  overflow: "hidden",
  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  backgroundColor: "#fff",
  cursor: "pointer",
});

export const image = style({
  width: "100%",
  height: "140px",
  objectFit: "cover",
});

export const content = style({
  padding: "12px",
  display: "flex",
  flexDirection: "column",
  gap: "4px",
});

export const label = style({
  fontSize: "10px",
  backgroundColor: "#e0f5e0",
  color: "#1d7f1d",
  padding: "2px 6px",
  borderRadius: "6px",
  alignSelf: "flex-start",
  fontWeight: 500,
});

export const title = style({
  fontSize: "14px",
  fontWeight: 600,
  color: "#222",
});

export const subtitle = style({
  fontSize: "12px",
  color: "#666",
});

export const priceWrapper = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginTop: "4px",
});

export const originalPrice = style({
  textDecoration: "line-through",
  color: "#999",
  fontSize: "12px",
});

export const salePrice = style({
  color: "#008000",
  fontSize: "14px",
  fontWeight: 600,
});

export const rating = style({
  fontSize: "12px",
  display: "flex",
  alignItems: "center",
  gap: "4px",
  color: "#444",
});

export const titleWrapper = style({
  display: "flex",
  alignItems: "center",
  gap: "4px",
});
