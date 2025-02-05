<<<<<<< HEAD
import { Metadata } from "next";
import "../app/globals.css";
=======
import './globals.css'
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nifemi Oladapo | Professional Full stack Web Developer & Frontend Developer",
  description:
    "Welcome to Nifemi Oladapo's Portfolio! Explore my work as a talented senior full-stack MERN and Next.js web developer, creating engaging, performance-driven web applications. Let's bring your ideas to life!",
  keywords:
    "Full-stack developer, MERN stack, Next.js developer, React.js developer, web development, portfolio, software engineer, frontend developer, backend developer, JavaScript developer, modern web applications, responsive design, UI/UX design, freelance developer, coding projects, personal portfolio, web developer, Nifemi Oladapo, tech enthusiast, programming, web solutions, scalable applications"
};
>>>>>>> c93fb2e6ef7f0d782719f1ecfcb083e782cf7a4f

export const metadata: Metadata = {
  title:
    "Oladapo Nifemi | Professional Full-Stack Web Developer & Software Developer",
  description:
    "Discover the stunning capabilities and projects of Oladapo Nifemi, a professional and well-fitted full stack web developer and software developer with expertise in building scalable and efficient software solutions.",
  keywords:
    "Backend developer, frontend developer, software development, web development, Oladapo Nifemi, nextjs developer, nodejs developer, React developer, MERN stack development, full stack development",
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
