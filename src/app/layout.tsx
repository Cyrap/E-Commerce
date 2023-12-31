import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import UserProvider from '@/context/UserContext'
// import { UIProviders } from '@/context/nextUiProvider'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'E-commerce',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (<>
    <UserProvider>
      {/* <UIProviders> */}
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
      {/* </UIProviders> */}
    </UserProvider>
  </>
  )
}
