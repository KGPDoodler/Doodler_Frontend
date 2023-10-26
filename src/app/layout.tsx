import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Navbar, Footer } from '@/components/common'
import Provider from '@/redux/provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Doodler Games',
  description: 'Joint Project by KGP Doodlers',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <main className='h-screen flex flex-col'>
            <Navbar/>
            <div className="grow h-full overflow-y-scroll flex flex-col items-center justify-between p-24"> {children} </div>
            <Footer/>
          </main>
        </Provider>
      </body>
    </html>
  )
}
