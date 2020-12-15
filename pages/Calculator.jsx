import { useState } from 'react';

import AreaCalculator from './AreaCalculator';
import VolumeCalculator from './VolumeCalculator';
import WeightCalculator from './WeightCalculator';


export default function Calculator() {

  const [calculatorType, setCalculatorType] = useState("");

  function setCalculator(props) {
    setCalculatorType(props);
    
  };

  function showCalculator() {
      if (calculatorType === "WeightCalculator") {
        return <WeightCalculator />
      } else if (calculatorType === "VolumeCalculator") {
        return <VolumeCalculator />
      } else {
        return <AreaCalculator />
      }
    }

    return (
      <div>
        <div >
          <h3>Nepali Unit converter</h3>
          <p>Use our simple to use online converter tool to convert units from Nepali measurement system to English measurement system. Select land area, volume or weight, enter the value and hit the button to convert to Nepali units or to english units</p>
        
          <button className="btn-primary button-sm mx-auto" onClick={() => setCalculator("AreaCalculator")}>Land Area</button>
          <button className="btn-primary button-sm mx-auto" onClick={() => setCalculator("VolumeCalculator")}>Volume</button>
          <button className="btn-primary button-sm mx-auto" onClick={() => setCalculator("WeightCalculator")}>Weight</button>
          <div className="container">
            {showCalculator()}
          </div>
          <div>
            {/* A place where description for the calculators or in general the use of Nepali units are to be described */}
          </div>
        </div>
         
  
        <style jsx>{`
          .english-unit-button-container{
            width: 100%;
            padding: 1rem;
          }
          .nepali-unit-button-container{
            width: 30%;
            float: left;
            padding: 1rem;
          }
          .calculator-container{
            width: 30%;
            float: left;
          }

        `}</style>
  
      </div>
  
    )
  }
  