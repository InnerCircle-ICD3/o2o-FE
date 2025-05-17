import { globalTheme } from "@/styles/theme.css";
import { style, styleVariants } from "@vanilla-extract/css";

const containerBase = style({
  boxSizing: "border-box",
  position: "fixed",
  bottom: 0,
  left: 0,
  zIndex: 9999,

  width: "100%",
});

export const container = styleVariants({
  hidden: [
    containerBase,
    {
      visibility: "hidden",
    },
  ],

  visible: [
    containerBase,
    {
      visibility: "visible",
    },
  ],
});

export const shadow = style({
  position: "absolute",
  bottom: 0,
  left: 0,
  zIndex: 1,

  width: "100%",
  height: "100vh",

  border: "none",
  backgroundColor: globalTheme.color.black,
  opacity: 0.6,
});

const innerBase = style({
  boxSizing: "border-box",
  position: "relative",
  zIndex: 2,

  width: "100%",

  padding: "30px 20px",
  backgroundColor: globalTheme.color.white,
  borderTopLeftRadius: 20,
  borderTopRightRadius: 20,

  transition: "opacity 0.2s ease-in-out, transform 0.2s ease-in-out",
});

export const shadowInner = styleVariants({
  hidden: [
    innerBase,
    {
      opacity: 0,
      transform: "translateY(100%)",
    },
  ],
  visible: [
    innerBase,
    {
      opacity: 1,
      transform: "translateY(0)",
    },
  ],
});

export const commonInner = styleVariants({
  hidden: [
    innerBase,
    {
      display: "none",
    },
  ],
  visible: [
    innerBase,
    {
      display: "block",
    },
  ],
});

export const wrapper = style({
  display: "flex",
  justifyContent: "space-between",
});

export const header = style({
  fontSize: 20,
  fontWeight: 700,
  color: globalTheme.color.black,
});

export const close = style({
  width: 24,
  height: 24,

  border: "none",
  background: "none",

  padding: 0,

  cursor: "pointer",
});
