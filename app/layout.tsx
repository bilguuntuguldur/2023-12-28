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

export const metadata = {
  metadataBase: new URL("https://nextjs13-seo.vercel.app"),
  title: {
    default: "Цэцэгт мэндчилгээ",
    template: `%s | Explorer`,
  },
  description: "Монголын хамгийн enjoyable цэцгийн Астра дэлгүүр.",
  verification: {
    google: "google-site-verification=123123123",
  },
  icons: {
    icon: ["/favicon.ico?v=4"] 
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const handleSearchSubmit = ( query: string ) => {
      console.log(query)
  }

  return (
    <html lang="en">
      <body className={font.className}>
          <ToastProvider />
          <ModalProvider />
          <TopHeader />
          <Navbar onSearchSubmit={handleSearchSubmit}/>
          <BottomHeader />
            {children}
          <Footer />
        </body>
    </html>
  )
}
