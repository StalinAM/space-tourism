import '../styles/globals.css'
import { Header } from '../components/Header'
import { Barlow_Condensed } from '@next/font/google'

const fontBarlow = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['400', '600']
})

export default function RootLayout({ children }) {
  return (
    <html className={fontBarlow.className}>
      <head />
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}
