import './globals.css'
import { Inter } from 'next/font/google'
import { Providers } from './providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Profile Interface',
  description: 'A profile interface built with Next.js and Redux',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="light">
      <body className={inter.className}>
        <main className="min-h-screen bg-gray-50">
          <Providers>{children}</Providers>
        </main>
      </body>
    </html>
  )
}

