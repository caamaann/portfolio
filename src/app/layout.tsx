import "./globals.css"

import type { Metadata } from "next"
import { Montserrat } from "next/font/google"

import GradientBackground from "@/components/global/gradient"
import GrainyBackground from "@/components/global/grainy"
import Navbar from "@/components/global/navbar"
import { ThemeProvider } from "@/components/theme-provider"
import { baseMetadata } from "@/lib/metadata"

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
})

export const metadata: Metadata = baseMetadata

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${montserrat.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          disableTransitionOnChange
          enableSystem
        >
          <GradientBackground />
          <GrainyBackground />
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
