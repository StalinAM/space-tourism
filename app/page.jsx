'use client'
import Link from 'next/link'
import styles from './Home.module.css'
import { Bellefair, Barlow } from '@next/font/google'

const fontBellefair = Bellefair({
  subsets: ['latin'],
  weight: ['400']
})
const fontBarlow = Barlow({
  subsets: ['latin'],
  weight: ['400']
})

export default function Page() {
  return (
    <main className={`${styles.container} ${fontBellefair.className}`}>
      <div className={styles.background}></div>
      <div>
        <h2>So, you want to travel to</h2>
        <h1>Space</h1>
        <p className={fontBarlow.className}>
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <button className={`${fontBellefair.className} ${styles.explore}`}>
        <Link className={styles.explore_link} href="/destination/moon"></Link>
        EXPLORE
      </button>
    </main>
  )
}
