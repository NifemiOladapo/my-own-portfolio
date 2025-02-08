import { Metadata } from "next";
import "../app/globals.css";
import "./globals.css";

export const metadata: Metadata = {
  title:
    "Oladapo Nifemi | Professional Full-Stack Web Developer & Software Developer",
  description:
    "Discover the stunning capabilities and projects of Oladapo Nifemi, a professional and well-fitted full stack web developer and software developer with expertise in building scalable and efficient software solutions.",
  keywords:
    "Full-stack developer, MERN stack, MERN developer,  web developer, Oladapo Nifemi, React Developer, Backend developer, frontend developer, software development, web development,  nextjs developer, nodejs developer, React developer, MERN stack development, full stack development",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
