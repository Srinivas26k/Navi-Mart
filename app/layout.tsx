import type React from "react"
import type { Metadata } from "next"
import { Public_Sans, Playfair_Display, Manrope } from "next/font/google"
import "./globals.css"
import { CartProvider } from "./contexts/cart-context"

const publicSans = Public_Sans({
  subsets: ["latin"],
  variable: "--font-public-sans",
})

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
})

export const metadata: Metadata = {
  title: "Agro Delight - Natural Indian Agro Products",
  description: "Discover our range of natural and organic agro products, crafted with care from the heart of India.",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${publicSans.variable} ${playfairDisplay.variable} ${manrope.variable}`}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;700;800&family=Tiro+Devanagari+Hindi:wght@400;700&family=Public+Sans:wght@400;500;700;800&family=Playfair+Display:wght@400;500;700;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans bg-[var(--background-color)] text-[var(--text-primary)]">
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  )
}
