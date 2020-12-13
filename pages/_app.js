import {useEffect} from 'react'
import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import Navbars from './layout/Navbar'
import Footer from './layout/Footer'
import {Button} from 'react-bootstrap'

import TagManager from 'react-gtm-module'
const tagManagerArgs = {
  gtmId: 'GTM-NJB6J4S'
}


function MyApp ({ Component, pageProps }) {
  
  useEffect(() => {
    TagManager.initialize(tagManagerArgs)
  }, []);

  return (
    <div>
      <Navbars />
      <aside className="col-lg-2 col-md-3 col-sm-12">
        <Button href="./NaatiApp" className="btn-primary btn-md button-transparent asideButton my-1">Naati App</Button>
        <Button href="./Calculator" className="btn-primary btn-md button-transparent asideButton my-1">Nepali Calculators</Button>
      </aside>
       <div className="body-container">
        <section className="col-lg-8 col-md-8 col-sm-12 mx-5">
          <Component {...pageProps} />
        </section>
      </div>
      
       <Footer />



      <style jsx>{`

      `}</style>
  
    </div>
    )
}

export default MyApp
