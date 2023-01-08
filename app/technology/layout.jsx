'use client'
import data from '../../data/data.json'
import styles from './Technology.module.css'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
export default function TechnologyLayout({ children }) {
  const pathname = usePathname()
  return (
    <main className={styles.container}>
      <div className={styles.background}></div>
      <h2>
        <span>03</span>SPACE LAUNCH 101
      </h2>
      <ul className={styles.container_nav}>
        {data.technology.map((item, index) => (
          <li key={item.id}>
            <span>{index + 1}</span>
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
