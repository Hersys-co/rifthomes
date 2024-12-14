import { Inter } from 'next/font/google'
import Navbar from '@/components/layout/Navbar'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'RiftHomes - Real Estate',
  description: 'Find your perfect property in Nakuru',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  )
}