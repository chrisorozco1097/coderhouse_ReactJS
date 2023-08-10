import { CartWidget } from "./CartWidget";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export const NavBar = () => {
    return (
        <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height:'10vh'}}>
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container > 
            <Navbar.Brand href="#home">Home</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav  className="me-auto">
                <Nav.Link href="#home">Board games</Nav.Link>
                <Nav.Link href="#link">About us</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <CartWidget/>
        <div>
        0
        </div>
        </header>
    );
};

