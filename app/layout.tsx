import './globals.css'
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nifemi Oladapo | Professional Full stack Web Developer & Frontend Developer",
  description:
    "Welcome to Nifemi Oladapo's Portfolio! Explore my work as a talented senior full-stack MERN and Next.js web developer, creating engaging, performance-driven web applications. Let's bring your ideas to life!",
  keywords:
    "Full-stack developer, MERN stack, Next.js developer, React.js developer, web development, portfolio, software engineer, frontend developer, backend developer, JavaScript developer, modern web applications, responsive design, UI/UX design, freelance developer, coding projects, personal portfolio, web developer, Nifemi Oladapo, tech enthusiast, programming, web solutions, scalable applications,
 other: {
    "google-site-verification": "idIMo8Af4EGCmLyDfn9uxSdadc27e3cCnb7AWQhCp3k",
  }
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
