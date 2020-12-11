import {Tabs, Tab, ListGroup} from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'

export default function NaatiTips() {
    // const [open, setOpen] = useState(false);

    return (
      <div>
        
        <div className="tipsContainer my-3">
            
            <Tabs defaultActiveKey="preparation" id="uncontrolled-tab-example">
                <Tab eventKey="preparation" title="During preparation" variant="dark">
                    <div className="my-1">
                        <Accordion defaultActiveKey="0">
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="0">
                                Increase your vocabulary                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="0">
                                <Card.Body>Vocabulary is the key to becoming fluent when you are translating. When you understand the meaning of a word quickly, it gives you an edge while translating.</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="1">
                                Note-taking is very important
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="1">
                                <Card.Body>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec lorem sit amet dui gravida eleifend. Nam feugiat dolor eget turpis venenatis fermentum. Aliquam tempus, turpis placerat accumsan feugiat, mi purus elementum elit, ac luctus orci ipsum sit amet felis. Nam congue volutpat tortor, ut tincidunt justo aliquet at. Donec.</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="2">
                                Because we are trained in English, take notes in English
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="2">
                                <Card.Body>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec lorem sit amet dui gravida eleifend. Nam feugiat dolor eget turpis venenatis fermentum. Aliquam tempus, turpis placerat accumsan feugiat, mi purus elementum elit, ac luctus orci ipsum sit amet felis. Nam congue volutpat tortor, ut tincidunt justo aliquet at. Donec.</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="3">
                                Learn and practice note-taking habits
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="3">
                                <Card.Body>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec lorem sit amet dui gravida eleifend. Nam feugiat dolor eget turpis venenatis fermentum. Aliquam tempus, turpis placerat accumsan feugiat, mi purus elementum elit, ac luctus orci ipsum sit amet felis. Nam congue volutpat tortor, ut tincidunt justo aliquet at. Donec.</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="4">
                                You have about 5secs after the chime
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="4">
                                <Card.Body>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec lorem sit amet dui gravida eleifend. Nam feugiat dolor eget turpis venenatis fermentum. Aliquam tempus, turpis placerat accumsan feugiat, mi purus elementum elit, ac luctus orci ipsum sit amet felis. Nam congue volutpat tortor, ut tincidunt justo aliquet at. Donec.</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="5">
                                Asking for repitition and correction is important
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="5">
                                <Card.Body>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec lorem sit amet dui gravida eleifend. Nam feugiat dolor eget turpis venenatis fermentum. Aliquam tempus, turpis placerat accumsan feugiat, mi purus elementum elit, ac luctus orci ipsum sit amet felis. Nam congue volutpat tortor, ut tincidunt justo aliquet at. Donec.</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="6">
                                Focus on context rather than words
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="6">
                                <Card.Body>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec lorem sit amet dui gravida eleifend. Nam feugiat dolor eget turpis venenatis fermentum. Aliquam tempus, turpis placerat accumsan feugiat, mi purus elementum elit, ac luctus orci ipsum sit amet felis. Nam congue volutpat tortor, ut tincidunt justo aliquet at. Donec.</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="7">
                                Take mock tests
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="7">
                                <Card.Body>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec lorem sit amet dui gravida eleifend. Nam feugiat dolor eget turpis venenatis fermentum. Aliquam tempus, turpis placerat accumsan feugiat, mi purus elementum elit, ac luctus orci ipsum sit amet felis. Nam congue volutpat tortor, ut tincidunt justo aliquet at. Donec.</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="8">
                                Practice and practice and practice                    
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="8">
                                <Card.Body>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec lorem sit amet dui gravida eleifend. Nam feugiat dolor eget turpis venenatis fermentum. Aliquam tempus, turpis placerat accumsan feugiat, mi purus elementum elit, ac luctus orci ipsum sit amet felis. Nam congue volutpat tortor, ut tincidunt justo aliquet at. Donec.</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                        
                    </div>
                </Tab>
                <Tab eventKey="examination" title="During examination" variant="dark">
                    <div className="my-1">
                    <Accordion defaultActiveKey="0">
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="0">
                                Make small talks with your invigilator to calm yourself
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="0">
                                <Card.Body>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec lorem sit amet dui gravida eleifend. Nam feugiat dolor eget turpis venenatis fermentum. Aliquam tempus, turpis placerat accumsan feugiat, mi purus elementum elit, ac luctus orci ipsum sit amet felis. Nam congue volutpat tortor, ut tincidunt justo aliquet at. Donec.</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="1">
                                Always write E: for english and N: for Nepali
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="1">
                                <Card.Body>Hello! I'm another body</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="2">
                                Focus on context rather than words
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="2">
                                <Card.Body>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec lorem sit amet dui gravida eleifend. Nam feugiat dolor eget turpis venenatis fermentum. Aliquam tempus, turpis placerat accumsan feugiat, mi purus elementum elit, ac luctus orci ipsum sit amet felis. Nam congue volutpat tortor, ut tincidunt justo aliquet at. Donec.</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="3">
                                Ask for repitition
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="3">
                                <Card.Body>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec lorem sit amet dui gravida eleifend. Nam feugiat dolor eget turpis venenatis fermentum. Aliquam tempus, turpis placerat accumsan feugiat, mi purus elementum elit, ac luctus orci ipsum sit amet felis. Nam congue volutpat tortor, ut tincidunt justo aliquet at. Donec.</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="4">
                                Ask for correction
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="4">
                                <Card.Body>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec lorem sit amet dui gravida eleifend. Nam feugiat dolor eget turpis venenatis fermentum. Aliquam tempus, turpis placerat accumsan feugiat, mi purus elementum elit, ac luctus orci ipsum sit amet felis. Nam congue volutpat tortor, ut tincidunt justo aliquet at. Donec.</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="5">
                                Always take notes in English
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="5">
                                <Card.Body>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec lorem sit amet dui gravida eleifend. Nam feugiat dolor eget turpis venenatis fermentum. Aliquam tempus, turpis placerat accumsan feugiat, mi purus elementum elit, ac luctus orci ipsum sit amet felis. Nam congue volutpat tortor, ut tincidunt justo aliquet at. Donec.</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="6">
                                Write abbreviations and other note taking symbols
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="6">
                                <Card.Body>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec lorem sit amet dui gravida eleifend. Nam feugiat dolor eget turpis venenatis fermentum. Aliquam tempus, turpis placerat accumsan feugiat, mi purus elementum elit, ac luctus orci ipsum sit amet felis. Nam congue volutpat tortor, ut tincidunt justo aliquet at. Donec.</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="7">
                                Remember that you have 5 secs after you hear the chime       
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="7">
                                <Card.Body>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec lorem sit amet dui gravida eleifend. Nam feugiat dolor eget turpis venenatis fermentum. Aliquam tempus, turpis placerat accumsan feugiat, mi purus elementum elit, ac luctus orci ipsum sit amet felis. Nam congue volutpat tortor, ut tincidunt justo aliquet at. Donec.</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            
                        </Accordion>                       
                    </div>
                </Tab>
            
            </Tabs>
            
        </div>

    
  
        <style jsx>{`
          
        `}</style>
  
      </div>
    )
  }