import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Spotify Client',
  description: 'a spotify client by Emanuel Hiebeler',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className + " bg-background_light dark:bg-background_dark text-foreground_light dark:text-foreground_dark"}>{children}</body>
    </html>
  )
}
