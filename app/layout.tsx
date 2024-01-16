import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Relazee',
    description: 'Find partner for your next competition!',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={`bg-relazee-dark-1 ${inter.className}`}>{children}</body>
        </html>
    )
}
