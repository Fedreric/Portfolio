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
        <Navbar />
        {children}
        <div className='btn-prev flex flex-col justify-center bg-slate-900'><b className='m-auto'>prev</b></div>
        <div className='btn-next flex flex-col justify-center bg-slate-900'><b className='m-auto'>next</b></div>
      </body>
    </html>
  )
}
