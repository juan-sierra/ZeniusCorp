import Typography from "typography";

const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.666,
  googleFonts: [
    {
      name: "Noto Sans",
      styles: ["700"]
    },
    {
      name: "Noto Sans",
      styles: ["400", "400i", "700", "700i"]
    }
  ],
  headerFontFamily: ["Noto Sans", "serif"],
  bodyFontFamily: [
    "Noto Sans",
    "San Francisco",
    "Helvetica Neue",
    "Segoe UI",
    "Helvetica",
    "Arial",
    "sans-serif"
  ]
});

export default typography;
