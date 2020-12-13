import styles from '../styles/Home.module.css'
import Head from 'next/head'

import Carousel from './layout/Carousel';

export default function Home() {
  return (
    <div className={styles.container}>
       <Head>
        <title>Blackboard Nepal| Supporting the Nepalese community through Information</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Blackboard Nepal was created to enhance the access of Nepalese community to free information. While there are numerous platforms for free information, Blackboard Nepal aims to provide information on traditions, food and places of Nepal."/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
      </Head>
      <h3 className="text-center mb-2">Welcome to the Club!</h3>
        <div>
          <Carousel />
        </div>
     
     
    </div>
  )
}
