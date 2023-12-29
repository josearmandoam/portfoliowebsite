import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/header'
import ActiveSectionContextProvider from '@/context/active-section-context'
import { Toaster } from 'react-hot-toast'
import ThemeSwitcher from '@/components/theme-switcher'
import ThemeContext from '@/context/theme-context'
import ThemeContextProvider from '@/context/theme-context'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Alex | Persona Porfolio',
  description: 'Alex is a full stack developer with 5 years of experience',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='!scroll-smooth'>
      <body className={`${inter.className} bg-gray-50 text-gray-950 
      relative pt-28 sm:pt-36 dark:bg-gray-700 dark:text-white/70 m-auto mx-6 overflow-x-hidden`}>
        <div className="bg-[#fbe2e3] absolute top-[-6em] right-[11em] h-[31.25rem] w-[31.25rem] 
        rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#a16d6f]"></div>
        <div className="bg-[#fbe2e3] dark:bg-[#da9d9f] absolute top-[-6em] left-[-35rem] h-[31.25rem] w-[31.25rem] 
        rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            <div><Toaster position='bottom-center' /></div>
            {children}
            <ThemeSwitcher />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  )
}
