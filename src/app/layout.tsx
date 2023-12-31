// layout.tsx
// This is the layout file for this application, it sets the structure and it's also where most of the default data is set like the fonts and metadata.
// This file also contains the Header and Footer component
import './globals.css'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import PageHeader from '@/components/PageHeader'
import PageFooter from '@/components/PageFooter'
import SideBar from '@/components/SideBar'
import CreatePageIcon from '@/components/CreatePageIcon'

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
        
          <main className="container-blog relative grid lg:grid-cols-12 gap-4 xl:gap-6 py-14">

            {children}

            <SideBar />

            <CreatePageIcon />

          </main>
        
        <PageFooter />

      </body>
    </html>
  )
}
