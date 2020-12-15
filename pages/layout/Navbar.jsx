import {Navbar, Nav, NavDropdown, NavLink} from 'react-bootstrap'

export default function Navbars() {
  return (
    <div>
      
        <Navbar bg="dark" variant="dark" expand="lg" className="navbar fixed-top">
            <Navbar.Brand href="/" className="logo-text">BlackBoard Nepal</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">

                {/* <Form inline className="ml-auto">
                <FormControl type="text" placeholder="Search" className="mr-sm-2" disabled/>
                <Button variant="outline-success" disabled>Search</Button>
                </Form> */}
                <Nav className="ml-auto">
                    <NavDropdown title="Services" id="basic-nav-dropdown">
                      <NavDropdown.Item href="/naati">NAATI</NavDropdown.Item>
                      <NavDropdown.Item href="/calculator">Calculator</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Wiki" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/traditions" disabled>Traditions</NavDropdown.Item>
                        <NavDropdown.Item href="/places" disabled>Places</NavDropdown.Item>
                        <NavDropdown.Item href="/cuisine" disabled>Food and Drinks</NavDropdown.Item>
                    </NavDropdown>
                    <NavLink href="/about">About</NavLink>
                    <NavLink href="/loginSignup" disabled>Login/Signup</NavLink>
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
          font-family: Verdana;
        }
      `}</style>

    </div>
  )
}
