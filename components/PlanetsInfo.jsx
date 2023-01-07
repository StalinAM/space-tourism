import Image from 'next/image'
import styles from './PlanetInfo.module.css'
import { Bellefair, Barlow_Condensed } from '@next/font/google'
const fontBellefair = Bellefair({
  subsets: ['latin'],
  weight: ['400']
})
const fontBarlow = Barlow_Condensed({
  weight: ['400']
})
export function PlanetsInfo({ data }) {
  return (
    <>
      <Image width="200" height="200" src={data.image} alt={data.name} />
      <div className={`${styles.container} ${fontBellefair.className}`}>
        <h1 className={fontBellefair.className}>{data.name}</h1>
        <p className={fontBarlow.className}>{data.description}</p>
        <div className={styles.line}></div>
        <div className={styles.features}>
          <p>
            <span className={fontBarlow.className}>AVG. DISTANCE</span>
            {data.distance}
          </p>
          <p>
            <span className={fontBarlow.className}>Est. travel time</span>
            {data.travel}
          </p>
        </div>
      </div>
    </>
  )
}
