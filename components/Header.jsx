'use client'
import Image from 'next/image'
import Link from 'next/link'
import styles from './Header.module.css'
import { usePathname } from 'next/navigation'
import { Barlow_Condensed } from '@next/font/google'

const fontBarlow = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['400', '600']
})

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
    route: '/crew/dougla'
  },
  {
    label: 'Technology',
    route: '/technology/launch-vehicle'
  }
]

export function Header() {
  const pathname = usePathname()
  return (
    <header>
      <nav className={styles.container_nav}>
        <Image
          className={styles.img}
          width="48"
          height="48"
          src="/logo.svg"
          alt="logo"
        />
        <div className={styles.slash}></div>
        <div className={styles.container_blur}>
          <ul className={styles.container}>
            {links.map(({ label, route }, index) => (
              <li key={route} className={`${styles.container} ${styles.item}`}>
                <Link className={fontBarlow.className} href={route}>
                  <span>0{index + 1}</span>
                  {label.toUpperCase()}
                </Link>
                <div
                  className={`${styles.line} ${
                    pathname == route || pathname.includes(label.toLowerCase())
                      ? styles.opacity
                      : ''
                  }`}
                ></div>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  )
}
