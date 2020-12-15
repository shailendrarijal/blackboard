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
    <Navbars/>
        <section className="col-lg-8 col-md-8 col-sm-12 mt-3">
          <Component {...pageProps} />
        </section>
      <aside className="col-lg-3 col-md-3 col-sm-12 mt-2">
        <h6>Our Social Media pages</h6>
          <Button href="https://www.facebook.com/blackboardnepal" className="btn-primary btn-sm button-transparent button my-1">Facebook</Button>
          <Button href="https://www.linkedin.com/company/blackboard-nepal" className="btn-primary btn-linkedIn btn-sm button-transparent my-1">LinkedIn</Button>
        <hr></hr>  
        <h6>Our Apps</h6>
          <Button href="/naati" className="btn-primary btn-md button-transparent asideButton button my-1">Nepali NAATI CCL</Button>
          <Button href="/calculator" className="btn-primary btn-md button-transparent asideButton button my-1">Nepali Unit Converter</Button>
        </aside>
        <Footer />


      <style jsx>{`
        
      `}</style>
  
    </div>
    )
}

export default MyApp
