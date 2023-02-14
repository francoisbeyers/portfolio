import "../styles/globals.css";
import localFont from "@next/font/local";

const clash = localFont({
  src: "../public/ClashDisplay-Bold.woff2",
  display: "swap",
  variable: "--font-clash",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${clash.variable}`}>
      <head />
      <body>{children}</body>
    </html>
  );
}
