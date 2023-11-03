import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

import ThemeProvider from '@/providers/theme/theme-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Profile Elder Dev',
  description: 'This is a website about my background'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
