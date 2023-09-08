import Navbar from '@/components/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Fede Dev',
  description: 'Portfolio personal, fullstack developer.',
  author: 'Federico Luciano Ledesma'
}

export default function RootLayout ({ children }) {
  return (
    <html lang='es'>
      <body className={inter.className}>
        <Navbar></Navbar>
        {children}
      </body>
    </html>
  )
}
