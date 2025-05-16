import { globalStyle } from "@vanilla-extract/css";
import { globalTheme } from "./theme.css";

globalStyle("*", {
  boxSizing: "border-box",
  margin: 0,
  padding: 0,
});

globalStyle("html, body", {
  height: "100%",
  fontFamily: "sans-serif",
  color: globalTheme.color.black,
});

// 버튼 초기화
globalStyle("button", {
  cursor: "pointer",
});

// 리스트 초기화
globalStyle("ul, ol", {
  listStyle: "none",
});

// 링크 초기화
globalStyle("a", {
  textDecoration: "none",
});
