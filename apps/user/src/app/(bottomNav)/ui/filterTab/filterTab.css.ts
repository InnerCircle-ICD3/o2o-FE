import { globalTheme } from "@/styles/theme.css";
import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import {
  bottomSheetListItemButtonStyle,
  bottomSheetListItemStyle,
  bottomSheetListStyle,
} from "../mainHeader/mainHeader.css";

export const container = style({
  display: "flex",
  padding: "10px 0",
  justifyContent: "flex-start",
  alignItems: "center",
  gap: 4,
});

export const tab = recipe({
  base: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 4,
    height: 34,
    padding: "10px 12px",
    flexShrink: 0,
    borderRadius: 16.5,
    border: `1px solid ${globalTheme.color.gray.light}`,
    background: globalTheme.color.white,
  },

  variants: {
    active: {
      true: {
        backgroundColor: globalTheme.color.black,
        border: "none",
      },
    },
    hover: {
      default: {
        ":hover": {
          background: globalTheme.color.gray.background,
        },
      },
      active: {
        ":hover": {
          background: "rgba(51, 51, 51, 0.95)",
        },
      },
    },
  },

  compoundVariants: [
    {
      variants: {
        active: true,
      },
      style: {
        ":hover": {
          background: "rgba(51, 51, 51, 0.95)",
        },
      },
    },
  ],

  defaultVariants: {
    hover: "default",
  },
});

export const textStyle = recipe({
  base: {
    lineHeight: "normal",
    textTransform: "uppercase",
  },
  variants: {
    type: {
      tab: {
        fontSize: "0.875rem",
        fontWeight: 400,
        color: globalTheme.color.black,
      },
      pickup: {
        fontSize: "0.75rem",
        fontWeight: 700,
        color: globalTheme.color.gray.base,
      },
    },
    parentActive: {
      true: {
        color: globalTheme.color.white,
      },
    },
  },
});

export const imageStyle = recipe({
  base: {},
  variants: {
    parentActive: {
      true: {
        filter: "invert(1)",
      },
    },
  },
});

export const tabText = textStyle({ type: "tab" });
export const pickupTime = textStyle({ type: "pickup" });
export const active = tab({ active: true });

export const filterListStyle = bottomSheetListStyle;

export const filterListItemHover = style([
  bottomSheetListItemStyle,
  {
    width: "100%",
    borderRadius: 16.5,
    padding: "10px 12px",
    ":hover": {
      background: globalTheme.color.gray.background,
    },
  },
]);

export const filterListItemSelected = style([
  bottomSheetListItemStyle,
  {
    borderRadius: 16.5,
    padding: "10px 12px",
    border: `1px solid ${globalTheme.color.primary}`,
  },
]);

export const filterListItemButtonStyle = style([bottomSheetListItemButtonStyle]);

export const filterButtonContainer = style({
  display: "flex",
  flexDirection: "column",
  gap: 10,
  marginTop: 20,
});

export const timePickerContainer = style({
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
  gap: 8,
  marginTop: 20,
});

export const timePickerColumn = style({
  flex: 1,
  maxHeight: "200px",
  overflowY: "auto",
  borderRadius: 8,
  backgroundColor: globalTheme.color.white,
  scrollbarWidth: "none",
  "::-webkit-scrollbar": {
    display: "none",
  },
});

export const timeItem = style({
  width: "100%",
  padding: "16px 0",
  textAlign: "center",
  borderRadius: 8,
  cursor: "pointer",

  ":hover": {
    backgroundColor: globalTheme.color.tertiary,
    color: globalTheme.color.primary,
  },
});

export const timeItemSelected = style([
  timeItem,
  {
    backgroundColor: globalTheme.color.tertiary,
    color: globalTheme.color.primary,
    borderRadius: 8,

    ":hover": {
      // todo
    },
  },
]);

export const pickupTimeActive = style({
  color: globalTheme.color.primary,
});
