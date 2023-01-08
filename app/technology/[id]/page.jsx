import data from '../../../data/data.json'
import Image from 'next/image'
import styles from './Tech.module.css'
import { Bellefair, Barlow_Condensed } from '@next/font/google'

const fontBellefair = Bellefair({
  subsets: ['latin'],
  weight: ['400']
})


export default function Tech({ params }) {
  const { id } = params
  const objId = data.technology.find((item) => item.id == id)
  return (
    <>
      <div className={`${styles.container} ${fontBellefair.className}`}>
        <h3>THE TERMINOLOGY</h3>
        <h1>{objId.name}</h1>
        <p >{objId.description}</p>
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
