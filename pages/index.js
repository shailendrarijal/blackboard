import styles from '../styles/Home.module.css'
import Head from 'next/head'
import Carousel from './layout/Carousel';
import Navbars from './layout/Navbar'
import Footer from './layout/Footer'
import {Button} from 'react-bootstrap'

export default function Home() {
  return (
    <div className={styles.container}>
       <Head>
        <title>Blackboard Nepal| Supporting the Nepalese community through Information</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Blackboard Nepal was created to enhance the access of Nepalese community to free information. While there are numerous platforms for free information, Blackboard Nepal aims to provide information on traditions, food and places of Nepal."/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
      </Head>
      

      <h3 className="text-center">Welcome to the Community Hub!</h3>
        <div>
          <Carousel />
        </div>
        <hr></hr>
        <div className="my-5 p-3">
          <h4>What do we currently have?</h4>
          <ul>
            <li>Nepali NAATI CCL test app: We have created an app with test format, vocabulary and tips for the preparation of Nepali NAATI CCL test. We are working to add dialogs in the app and are in the process of adding more vocabulary and tips.</li>
            <li>Nepali Unit Converter app: We have created an app where you can convert different measurement units of land area, weight and volume from and to Englishh and Nepali. Area converter is fully functional, volume converter is partially functional and weight converter is coming soon!</li>
          </ul>
        </div>
        <div>
          <h6>We will be adding more and more stuffs! Make sure to stay around and follow our Facebook and LinkedIn pages</h6>
        </div>
      
     

    </div>
  )
}
