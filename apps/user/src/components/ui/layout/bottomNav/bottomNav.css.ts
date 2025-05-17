import { globalTheme } from "@/styles/theme.css";
import { style, styleVariants } from "@vanilla-extract/css";

export const container = style({
  display: "flex",
  flexDirection: "column",

  width: "100%",
  height: "100vh",
});

export const main = style({
  height: "calc(100% - 70px)",

  padding: "0 20px",
});

export const bottomNav = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",

  width: "100%",
  height: "70px",

  padding: "14px 20px",

  borderTop: `1px solid ${globalTheme.color.line}`,
});

const navItemBase = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "6px",

  width: "60px",

  fontSize: "12px",
  fontWeight: 500,
});

export const navItem = styleVariants({
  default: [navItemBase],
  active: [
    navItemBase,
    {
      color: `${globalTheme.color.primary} !important`,

      path: {
        fill: globalTheme.color.primary,
        stroke: globalTheme.color.primary,
      },
    },
  ],
});
