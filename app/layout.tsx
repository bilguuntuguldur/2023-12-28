import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'

import ToastProvider from '@/providers/toast-provider';
import Footer from "@/components/footer/Footer"
import ModalProvider from '@/providers/modal-provider';
import TopHeader from '@/components/header/top-nav';
import BottomHeader from '@/components/header/bottom-nav';
import Navbar from '@/components/header/main-nav';

const font = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Astra flower shop',
  description: 'Greate awesome flower online shop',
  icons: {
    icon: ["/favicon.ico?v=4"] 
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
          <ToastProvider />
          <ModalProvider />
          <TopHeader />
          <Navbar />
          <BottomHeader />
            {children}
          <Footer />
        </body>
    </html>
  )
}
