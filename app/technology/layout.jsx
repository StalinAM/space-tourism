'use client'
import data from '../../data/data.json'
import styles from './Technology.module.css'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Barlow_Condensed, Bellefair } from '@next/font/google'

const fontBarlow = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['400', '600']
})
const fontBellefair = Bellefair({
  subsets: ['latin'],
  weight: ['400']
})
export default function TechnologyLayout({ children }) {
  const pathname = usePathname()
  return (
    <main className={`${styles.container} ${fontBarlow.className}`}>
      <div className={styles.background}></div>
      <h2>
        <span>03</span>SPACE LAUNCH 101
      </h2>
      <ul className={styles.container_nav}>
        {data.technology.map((item, index) => (
          <li key={item.id}>
            <span
              className={`${fontBellefair.className} ${
                pathname == item.id || pathname.includes(item.id)
                  ? styles.color
                  : ''
              }`}
            >
              {index + 1}
            </span>
            <Link href={`/technology/${item.id}`}></Link>
            <div
              className={`${styles.circle} ${
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
