import { useState } from 'react';
import NaatiApp from './NaatiApp';

export default function Naati() {

    const [displayBox, setDisplayBoxes] = useState(true);
    function changeDisplay() {
        setDisplayBoxes(!displayBox);
    }
    return (
      <div>
        <div>
            
            {displayBox? 
            <div className="text-center">
                <h3>Get ready for your Naati Test</h3>
                <p>Naati CCL is a community language test in a language other than English. This test is conducted by National Association of Accredited Translators and Interprtors (NAATI). Passing this test not only gives you extra 5 points for your Permanent Residency application but also provides you with a good understanding of Australian community.</p> 
                    <button className="button-transparent btn-md btn-primary button mx-auto" onClick={changeDisplay}>Naati app</button>
                    <div className="row">
                    <div className="card testFormat lg-col-4 md-col-6 sm-col-12">
                        <h4 className="card-header">Test Format</h4>
                        <div className="card-body">Learn about the test format, marking structure, pass marks, and test environment</div>
                        
                    </div>
                    <div className="card vocabulary lg-col-4 md-col-6 sm-col-12">
                    <h4 className="card-header">Vocabulary</h4>
                        <div className="card-body">Build your vocabulary with our vocabulary app and get ready for the test</div>
                       
                    </div>
                    <div className="card tips lg-col-4 md-col-6 sm-col-12">
                    <h4 className="card-header">Tips</h4>
                        <div className="card-body">Have a look at some of the tips that will help you prepare and give your best in examination</div>
                      
                    </div>
                    </div>
                </div>
                :
                <NaatiApp />
            }
          
            
        </div>
       
            
  
  
        <style jsx>{`
            .card{
                margin: 3rem auto;
                width: 30%;
            }
          .button{
              padding: 0.5rem;
              box-shadow: 0.1rem 0.1rem #ccc;
              border-radius: 10px; 
          }
          .button:hover{
              text-decoration: none;
              cursor: pointer;
          }
        `}</style>
  
      </div>
  
    )
  }

  