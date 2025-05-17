import { globalTheme } from "@/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const container = style({
  position: "relative",

  marginBottom: 10,
});

export const deleteButton = style({
  position: "absolute",
  top: 12,
  right: 12,

  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  width: 20,
  height: 20,

  backgroundColor: globalTheme.color.gray.dark,
  borderRadius: "50%",
});

export const title = style({
  fontSize: 14,
  fontWeight: 500,

  width: "calc(100% - 15px)",
});

export const wrapper = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",

  marginTop: 16,
});

export const count = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  backgroundColor: globalTheme.color.white,
});

export const countButton = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  width: 30,
  height: 30,

  border: `1px solid ${globalTheme.color.gray.light}`,
});

export const length = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  width: 43,
  height: 30,

  borderTop: `1px solid ${globalTheme.color.gray.light}`,
  borderBottom: `1px solid ${globalTheme.color.gray.light}`,

  fontSize: 14,
  fontWeight: 500,
});

export const price = style({
  fontWeight: 700,
});

// export const;
