'use client'
import data from '../../data/data.json'
import styles from './Crew.module.css'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
export default function CrewLayout({children}) {
  const pathname = usePathname()
  return (
    <main className={styles.container}>
      <div className={styles.background}></div>
      <h2>
        <span>02</span>MEET YOUR CREW
      </h2>
      <ul className={styles.container_nav}>
        {data.crew.map((item, index) => (
          <li key={item.id}>
            <Link href={`/crew/${item.id}`}>
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
