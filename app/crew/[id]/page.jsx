import data from '../../../data/data.json'
import Image from 'next/image'
import styles from './Person.module.css'
import { Bellefair, Barlow } from '@next/font/google'

const fontBellefair = Bellefair({
  subsets: ['latin'],
  weight: ['400']
})
const fontBarlow = Barlow({
  subsets: ['latin'],
  weight: ['400']
})

export default function Person({ params }) {
  const { id } = params
  const objId = data.crew.find((item) => item.id == id)
  return (
    <>
      <div className={`${styles.container} ${fontBellefair.className}`}>
        <h3>{objId.role}</h3>
        <h1>{objId.name}</h1>
        <p className={fontBarlow.className}>{objId.bio}</p>
      </div>
      <Image
        className={styles.planet_img}
        width="400"
        height="500"
        src={objId.image}
        alt={objId.name}
      ></Image>
    </>
  )
}
