import styles from '../styles/Home.module.css'
import Head from 'next/head'

import Carousel from './layout/Carousel';

export default function Home() {
  return (
    <div className={styles.container}>
       <Head>
        <title>Blackboard Nepal| Supporting the community</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h3 className="text-center mb-2">Welcome to the Club!</h3>
        <div>
          <Carousel />
      </div>
     
     
    </div>
  )
}
