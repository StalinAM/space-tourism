import data from '../../data/data.json'
import styles from './Destination.module.css'
import Link from 'next/link'
export default function DestinationLayout({ children }) {
  return (
    <main className={styles.container}>
      <div className={styles.background}></div>
      <h2>
        <span>01</span>PICK YOUR DESTINATION
      </h2>
      <ul>
        {data.destinations.map((item, index) => (
          <li key={item.id}>
            <span>0{index + 1}</span>
            <Link href={`/destination/${item.id}`}>
              {item.name.toUpperCase()}
            </Link>
          </li>
        ))}
      </ul>
      {children}
    </main>
  )
}
