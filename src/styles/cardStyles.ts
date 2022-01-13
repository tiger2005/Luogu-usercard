import { CSSProperties } from "react";

export const $CSS = (styles: CSSProperties[]): CSSProperties => {
  let ans = {};
  styles.forEach((item) => { ans = Object.assign(ans, item); });
  return ans;
};

export const CARD_STYLE: CSSProperties = {
  width: 300,
  borderRadius: 5,
  overflow: "hidden",
  display: "flex",
  flexDirection: "column",
  boxShadow: "0 0 5px 1px #999",
  background: "#fff",
  fontWeight: "bold",
  textAlign: "center"
};

export const CARD_CONTAINER_STYLE: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  textAlign: "left"
};

export const CARD_HEADER_STYLE: CSSProperties = {
  display: "flex",
  flexDirection: "row",
  width: "100%",
  position: "relative",
  height: 52
};