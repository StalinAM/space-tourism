'use client'
import Image from 'next/image'
import Link from 'next/link'
import styles from './Header.module.css'
import { usePathname } from 'next/navigation'
import { Barlow_Condensed } from '@next/font/google'
import { useState } from 'react'

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
  const [show, setShow] = useState(true)
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
        <Image
          className={styles.open}
          width="30"
          height="30"
          src="/icon-hamburger.svg"
          alt="icon open"
          onClick={() => setShow(true)}
        />
        <ul id={show ? '' : styles.show} className={styles.container}>
          <div className={styles.container_blur}></div>
          <Image
            className={styles.close}
            width="30"
            height="30"
            src="/icon-close.svg"
            alt="icon close"
            onClick={() => setShow(false)}
          />

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
      </nav>
    </header>
  )
}
