import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'

const poppins = Poppins({ weight: ['200', '500', '700', '800', '900'], subsets: ['latin'], })

export const metadata: Metadata = {
  title: 'JDuarte 🌣 Portfolio',
  description: 'Front end developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
