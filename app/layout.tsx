import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Amadeus Alfons | Portfolio",
  description:
    "Final-year Information Systems student with hands-on BA and client delivery experience in enterprise environments.",
  openGraph: {
    title: "Amadeus Alfons | Portfolio",
    description:
      "Bridging the gap between complex systems and business profitability",
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
