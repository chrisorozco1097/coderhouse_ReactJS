import { CartWidget } from "./CartWidget";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import {Link} from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import { Col, Image, Row } from "react-bootstrap";
import Offcanvas from 'react-bootstrap/Offcanvas';


export const NavBar = () => {
  return (
        <Navbar key='md' expand='md' className="bg-body-tertiary d-flex justify-content-around fixed-top vh-10 w-100">
          <Row className="d-flex justify-content-around w-100">
            <Col className="align-items-center">
              <Navbar.Brand as={Link} to="/" className="d-flex salign-items-center justify-content-center">Home</Navbar.Brand>
            </Col>
            <Col className="d-flex justify-content-center align-items-center">
            <Navbar.Toggle aria-controls='offcanvasNavbar-expand-md'/>
            <Navbar.Offcanvas className="justify-content-center d-flex align-items-center"  id='offcanvasNavbar-expand-md' placement="end" aria-labelledby='offcanvasNavbarLabel-expand-md'>
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id='offcanvasNavbarLabel-expand-md'>
                  Boardgaymes
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-center d-flex align-items-center">
                  <Nav.Link as={Link} to="/category/Low">Low</Nav.Link>
                  <Nav.Link as={Link} to="/category/Moderate">Moderate</Nav.Link>
                  <Nav.Link as={Link} to="/category/High">High</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
            </Col>
            <Col className="d-flex justify-content-center">
              <CartWidget></CartWidget>
            </Col>
          </Row>
        </Navbar>
      );
}

