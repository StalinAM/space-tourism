'use client'
import data from '../../data/data.json'
import styles from './Destination.module.css'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Barlow_Condensed } from '@next/font/google'

const fontBarlow = Barlow_Condensed({
  subsets: ['latin'], 
  weight: ['400','600']
})

export default function DestinationLayout({ children }) {
  const pathname = usePathname()
  return (
    <main className={`${styles.container} ${fontBarlow.className}`}>
      <div className={styles.background}></div>
      <h2>
        <span>01</span>PICK YOUR DESTINATION
      </h2>
      <ul className={styles.container_nav}>
        {data.destinations.map((item) => (
          <li key={item.id}>
            <Link href={`/destination/${item.id}`}>
              {item.name.toUpperCase()}
            </Link>
            <div
              className={`${styles.line} ${
                pathname == item.id || pathname.includes(item.id)
                  ? styles.opacity
                  : ''
              }`}
            ></div>
          </li>
        ))}
      </ul>
      {children}
    </main>
  )
}
