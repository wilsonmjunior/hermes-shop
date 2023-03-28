import Head from 'next/head'

import styles from '@/styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Hermes Shop</title>
      </Head>

      <main className={styles.main}>
        <h1>Welcome store</h1>
      </main>
    </>
  )
}
