import Image from 'next/image'
import data from '../../../data/data.json'
import styles from './PlanetInfo.module.css'
import { Bellefair, Barlow, Barlow_Condensed } from '@next/font/google'

const fontBellefair = Bellefair({
  subsets: ['latin'],
  weight: ['400']
})
const fontBarlow = Barlow({
  subsets: ['latin'],
  weight: ['400']
})
const fontBarlowC = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['400']
})
export default function Planets({ params }) {
  const { id } = params
  const objId = data.destinations.find((item) => item.id == id)
  return (
    <>
      <Image
        className={styles.planet_img}
        width="200"
        height="200"
        src={objId.image}
        alt={objId.name}
      />
      <div className={`${styles.container} ${fontBellefair.className}`}>
        <h1>{objId.name}</h1>
        <p className={fontBarlowC.className}>{objId.description}</p>
        <div className={styles.line}></div>
        <div className={styles.features}>
          <p>
            <span className={fontBarlowC.className}>AVG. DISTANCE</span>
            {objId.distance}
          </p>
          <p>
            <span className={fontBarlowC.className}>Est. travel time</span>
            {objId.travel}
          </p>
        </div>
      </div>
    </>
  )
}
