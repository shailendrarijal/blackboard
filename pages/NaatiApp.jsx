import NaatiVocabulary from './NaatiVocabulary';
import {Tabs, Tab} from 'react-bootstrap';
import NaatiTestFormat from './NaatiTestFormat';
import NaatiTips from './NaatiTips';

export default function Naati() { 
    return (
      <div>
            <div>
                <h4 className="text-center">Free practice material for your NAATI test!</h4>
                    <Tabs variant="pills" bg="success">
                        <Tab eventKey={NaatiTestFormat} title="Test Format">
                            <NaatiTestFormat />
                        </Tab>
                        <Tab eventKey={NaatiVocabulary} title="Vocabulary">
                            <NaatiVocabulary />
                        </Tab>
                        <Tab eventKey={NaatiTips} title="Tips">
                            <NaatiTips />
                        </Tab>
                    </Tabs>
            </div>
        <style jsx>{`
         
        `}</style>
  
      </div>
  
    )
  }

  