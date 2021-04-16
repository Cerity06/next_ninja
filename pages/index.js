import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Navbar from '../comps/Navbar'
import Footer from '../comps/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit quaerat sed earum delectus 
        iusto alias doloremque quibusdam amet dolor quae.</p>
        <p className={styles.text}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit quaerat sed earum delectus 
        iusto alias doloremque quibusdam amet dolor quae.</p>
        <Link href="/ninjas">
        <a className={styles.btn} href='/ninjas'>See Ninja List</a>
        </Link>
      </div>
    </>
  )
}
