import Head from 'next/head'
import Dom from '../pages/dom'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
     <Dom />
    </div>
  )
}
