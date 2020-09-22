import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
  <>
  <Head>
        <title>Foodz | Hungry</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <h1 className={styles.title}>
          Welcome to <a href="#">Foodz</a>
        </h1>

</>
  )
}
