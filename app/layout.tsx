import type { Metadata } from "next"
import { Rubik, Suez_One } from "next/font/google"
import "./globals.css"

const rubik = Rubik({
  subsets: ["latin", "hebrew"],
  variable: "--font-rubik",
})

const suezOne = Suez_One({
  subsets: ["latin", "hebrew"],
  weight: "400",
  variable: "--font-suez",
})

export const metadata: Metadata = {
  title: "טוסטיקה — טוסטים חמים בעיר",
  description: "לחם טרי, גבינות שנמסות בדיוק, ותוספות שמרימות. הכל מוכן במקום ומוגש תוך דקות.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="he" dir="rtl">
      <body className={`${rubik.variable} ${suezOne.variable} font-sans`}>{children}</body>
    </html>
  )
}
