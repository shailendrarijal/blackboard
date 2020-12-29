import styles from '../styles/Home.module.css'
import Head from 'next/head'
import Carousel from './layout/Carousel';

export default function Home() {
  return (
    <div className={styles.container}>
       <Head>
        <title>Blackboard Nepal| Supporting the Nepalese community</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Blackboard Nepal was created to enhance the access of Nepalese community to free information focusing on traditions, food, places and communities of Nepal."/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
      </Head>
      
       {/* <!-- The core Firebase JS SDK is always required and must be listed first --> */}
      <script src="/__/firebase/8.2.1/firebase-app.js"></script>

      {/* <!-- TODO: Add SDKs for Firebase products that you want to use
          https://firebase.google.com/docs/web/setup#available-libraries --> */}
      <script src="/__/firebase/8.2.1/firebase-analytics.js"></script>

      {/* <!-- Initialize Firebase --> */}
      <script src="/__/firebase/init.js"></script>
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
