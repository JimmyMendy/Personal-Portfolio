import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Jimmy Mendy | Web Developer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
       <h1>Coming soon</h1>
      </main>

      <footer className={styles.footer}>
        <p>
          Designed and Curated by Jimmy Mendy.
        </p>
      </footer>
    </div>
  )
}
