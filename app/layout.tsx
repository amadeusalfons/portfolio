import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Business Analyst Portfolio | Amadeus Alfons",
  description:
    "Business Analyst & Systems Thinker specializing in enterprise process optimization. Bridging complex systems and business profitability through strategic analysis and client delivery.",
  keywords: "Business Analyst, Systems Thinker, Enterprise Process Optimization, BA, HRIS, Digital Strategy",
  openGraph: {
    title: "Business Analyst Portfolio | Amadeus Alfons",
    description:
      "Enterprise process optimization through strategic analysis and innovative solutions",
    url: "https://amadeus-alfons.com",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-background text-foreground">{children}</body>
    </html>
  )
}
