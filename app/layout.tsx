import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Ny Nguyen - Front-End Developer & UI/UX Specialist",
  description:
    "Modern front-end developer portfolio showcasing responsive web applications, UI/UX design, and modern JavaScript frameworks. Specializing in React, Vue.js, and cutting-edge web technologies.",
  keywords: "front-end developer, UI/UX designer, React, Vue.js, JavaScript, TypeScript, responsive design, portfolio",
  authors: [{ name: "Ny Nguyen" }],
  openGraph: {
    title: "Ny Nguyen - Front-End Developer",
    description: "Modern front-end developer portfolio showcasing responsive web applications and UI/UX design",
    type: "website",
  },
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
