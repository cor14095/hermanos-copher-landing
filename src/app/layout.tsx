import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { NavBar } from '@/components/NavBar'
import { Footer } from '@/components/Footer'
import { Home } from '@/components/MainViewComponents/Home'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Copher',
  description: 'Hermanos Copher, repuestos y piezas.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <NavBar />
        <Home />
        {children}
        <Footer />
      </body>
    </html>
  )
}
