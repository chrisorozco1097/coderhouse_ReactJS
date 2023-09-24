import { CartWidget } from "./CartWidget";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import {Link} from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../assets/BG.png";
import { Image } from "react-bootstrap";

export const NavBar = () => {
    return (
        <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height:'10vh', width: '100vw'}}>
        {/* <Link to="/">
          <Image src={logo} alt="CartW" fluid style={{height:'10vh', margin:'0 10wh'}}/>
        </Link>  */}
        <Navbar expand="lg" className="w-60 d-flex justify-content-center">
            <Navbar.Brand as={Link} to="/" className="" >Home</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav w-40">
              <Nav  className="me-auto">
                <Nav.Link as={Link} to="/category/Low">Low</Nav.Link>
                <Nav.Link as={Link}to="/category/Moderate">Moderate</Nav.Link>
                <Nav.Link as={Link}to="/category/High">High</Nav.Link>
              </Nav>
            </Navbar.Collapse>
        </Navbar>
        <CartWidget className="d-flex w-40"/> 
        </header>
    );
};

