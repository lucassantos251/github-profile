import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Lucas Cirilo dos Santos</h1>

      <Image src="/cat.jpg" width="256" height="256" alt='Profile Picture'/>

      <p>Lorem catium.</p>

    </div>
  )
}

export default Home
