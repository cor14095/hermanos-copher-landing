import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { NavBar } from '@/components/NavBar'
import { Footer } from '@/components/Footer'
//import { Neotech } from '../../public/fonts'

//const neotech = Neotech({subsets: ['italic']})

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
  const GoogleAPIKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY

  return (
    <html lang="es">
      <head>
        {/** <!-- The callback parameter is required, so we use console.debug as a noop --> */}
        <script async src={`https://maps.googleapis.com/maps/api/js?key=${GoogleAPIKey}&callback=console.debug&libraries=maps,marker&v=beta`}>
        </script>
      </head>
      <body className={inter.className}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
