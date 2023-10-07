import './globals.css'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import PageHeader from '@/components/PageHeader'
import PageFooter from '@/components/PageFooter'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Simple Blogging App',
  description: 'Blogging app created with Nextjs',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        
        <PageHeader />
        
        {children}
        
        <PageFooter />

      </body>
    </html>
  )
}
