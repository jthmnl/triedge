import './globals.css'
import type { Metadata } from 'next'
import { Rubik } from 'next/font/google'
import Footer from './components/Footer'
// components
import Navbar from './components/navbar'

const rubik = Rubik({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '— triedge.',
  description: 'Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={rubik.className} min-h-screen>
        <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  )
}
