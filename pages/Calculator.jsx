import { useState } from 'react';

import AreaCalculator from './AreaCalculator';
import LengthCalculator from './LengthCalculator';
import WeightCalculator from './WeightCalculator';


export default function Calculator() {

  const [calculatorType, setCalculatorType] = useState("");

  function setCalculator(props) {
    setCalculatorType(props);
    
  };

  function showCalculator() {
      if (calculatorType === "WeightCalculator") {
        return <WeightCalculator />
      } else if (calculatorType === "LengthCalculator") {
        return <LengthCalculator />
      } else {
        return <AreaCalculator />
      }
    }

    return (
      <div>
        <div >
          <h3>Calculator</h3>
          <p>Select measurement </p>
        
          <button className="btn-primary button-sm mx-auto" onClick={() => setCalculator("AreaCalculator")}>Area</button>
          <button className="btn-primary button-sm mx-auto" onClick={() => setCalculator("LengthCalculator")}>Length</button>
          <button className="btn-primary button-sm mx-auto" onClick={() => setCalculator("WeightCalculator")}>Weight</button>
          <div className="container">
            {showCalculator()}
          </div>
          <div>
            
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
  