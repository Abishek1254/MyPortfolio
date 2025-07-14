import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "./components/header"
import { Footer } from "./components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Abishek Salaria - Information Technology Student & Developer",
  description:
    "Portfolio of Abishek Salaria, a pre-final year Information Technology student at NIT Srinagar. Passionate about web development, competitive programming, and creating innovative solutions.",
  keywords:
    "Abishek Salaria, NIT Srinagar, Information Technology, Web Developer, Competitive Programming, React, JavaScript",
  authors: [{ name: "Abishek Salaria" }],
  openGraph: {
    title: "Abishek Salaria - IT Student & Developer",
    description:
      "Portfolio showcasing projects, achievements, and skills in web development and competitive programming.",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
