import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import ScrollToTop from '@/components/scroll-to-top'
import Template from '@/components/template'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Super Ice Cream - Jigjiga\'s Coolest Spot',
  description: 'Welcome to Super Ice Cream, Jigjiga\'s favorite ice cream destination. Open 24/7, we serve delicious ice cream in a variety of flavors.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} flex min-h-screen flex-col`}>
        <Navbar />
        <Template>
          {children}
        </Template>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  )
}
