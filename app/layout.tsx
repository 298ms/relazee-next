import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import '@radix-ui/themes/styles.css';
import './theme-config.css';
import { Theme, ThemePanel } from '@radix-ui/themes';

const poppins = Poppins({
    weight: ['400', '500', '600', '700'],
    style: ['normal'],
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-poppins'
})

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
            <body className={`bg-relazee-dark-1 ${poppins.variable}`}>
                <Theme appearance='dark' radius='small'>
                    {children}
                    {/* <ThemePanel /> */}
                </Theme>
            </body>
        </html>
    )
}
