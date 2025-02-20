import { Metadata } from "next";
import "../app/globals.css";
import "./globals.css";

export const metadata: Metadata = {};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.cdnfonts.com/css/axiforma" rel="stylesheet" />
      </head>
      <body style={{ fontFamily: "Axiforma" }}>{children}</body>
    </html>
  );
}
