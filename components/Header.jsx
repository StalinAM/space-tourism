import Image from 'next/image'
import Link from 'next/link'
import styles from './Header.module.css'

const links = [
  {
    label: 'Home',
    route: '/'
  },
  {
    label: 'Destination',
    route: '/destination/moon'
  },
  {
    label: 'Crew',
    route: '/crew'
  },
  {
    label: 'Technology',
    route: '/technology'
  }
]

export function Header() {
  return (
    <header>
      <nav className={styles.container_nav}>
        <Image width="48" height="48" src="/logo.svg" alt="logo" />
        <div className={styles.slash}></div>
        <ul className={styles.container}>
          {links.map(({ label, route }, index) => (
            <li key={route} className={`${styles.container} ${styles.item}`}>
              <span>0{index + 1}</span>
              <Link href={route}>{label.toUpperCase()}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
