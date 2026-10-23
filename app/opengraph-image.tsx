import { ImageResponse } from "next/og";
export const alt = "chishkin — независимый разработчик";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function Image() {
  return new ImageResponse(<div style={{ background: "#f4f3ef", color: "#282b25", width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 64 }}><div style={{ display: "flex", justifyContent: "space-between", fontSize: 25 }}><span>Independent developer</span><span>Design · Code · Care</span></div><div style={{ display: "flex", fontSize: 200, letterSpacing: -12 }}>chishkin<span style={{ color: "#af4e35" }}>*</span></div><div style={{ fontSize: 32 }}>От идеи до работающего сайта.</div></div>, size);
}
