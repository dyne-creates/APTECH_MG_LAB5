import { Link } from "react-router-dom"
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

export default function NavBar(){
  const purplePrimary = '#6f42c1'

  return (
    <Navbar 
      expand="lg" 
      variant="dark" 
      style={{ backgroundColor: purplePrimary, boxShadow: '0 2px 4px rgba(0,0,0,0.1)',padding:'15px' }}
      sticky="top"
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bold">
          University of Udiao
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className="px-3">Home</Nav.Link>
            <Nav.Link as={Link} to="/about" className="px-3">About</Nav.Link>
            <Nav.Link as={Link} to="/services" className="px-3">Services</Nav.Link>
            <Nav.Link as={Link} to="/contact" className="px-3">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}