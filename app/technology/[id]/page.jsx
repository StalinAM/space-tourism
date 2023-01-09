import data from '../../../data/data.json'
import Image from 'next/image'
import styles from './Tech.module.css'
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

export default function Tech({ params }) {
  const { id } = params
  const objId = data.technology.find((item) => item.id == id)
  return (
    <>
      <div className={styles.container}>
        <h1 className={fontBellefair.className}>
          <span className={fontBarlowC.className}>THE TERMINOLOGY...</span>
          {objId.name}
        </h1>
        <p className={fontBarlow.className}>{objId.description}</p>
      </div>
      <picture>
        <source media="(min-width: 800px )" srcset={objId.image.portrait} />
        <Image
          className={styles.planet_img}
          width="400"
          height="500"
          src={objId.image.landscape}
          alt={objId.name}
        ></Image>
      </picture>
    </>
  )
}
