import {Navbar, Nav, NavDropdown, Form, FormControl, Button, NavLink} from 'react-bootstrap'

export default function Navbars() {
  return (
    <div>
      
        <Navbar bg="dark" variant="dark" expand="lg" className="navbar">
            <Navbar.Brand href="/" className="logo-text">BlackBoard Nepal</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">

                <Form inline className="ml-auto">
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-success">Search</Button>
                </Form>
                <Nav className="ml-auto">
                    <NavDropdown title="Services" id="basic-nav-dropdown">
                      <NavDropdown.Item href="/Naati">NAATI</NavDropdown.Item>
                      <NavDropdown.Item href="/Calculator" disabled>Calculator</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Wiki" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/Traditions" disabled>Traditions</NavDropdown.Item>
                        <NavDropdown.Item href="/Places" disabled>Places</NavDropdown.Item>
                        <NavDropdown.Item href="/Cuisine" disabled>Food and Drinks</NavDropdown.Item>
                    </NavDropdown>
                    <NavLink href="/About" disabled>About</NavLink>
                    <NavLink href="/LoginSignup" disabled>Login/Signup</NavLink>
                </Nav>
                
            </Navbar.Collapse>
        </Navbar>
      

      <style jsx global>{`
    
        .navbar{
          padding: 0 0.5rem;
          box-shadow: 0 5px #ccc;
        }

        .navbar-collapse{
          justify-content: flex-end;
        }

        .logo-text{
          font-family: Oxygen;
        }
      `}</style>

    </div>
  )
}
