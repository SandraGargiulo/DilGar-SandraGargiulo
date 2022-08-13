import React from 'react'
import { LinkContainer } from 'react-router-bootstrap';
import './NavBar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../../images/energy.png'
import { Navbar, Nav} from 'react-bootstrap';
import CartWidget from '../CartWidget/CartWidget';

const NavBar =()=>{
        return (
            <Navbar bg="light" expand="lg">
                <LinkContainer to="/">
                    <Navbar.Brand>
                        <img
                            alt="Electromecanica Dil-Gar"
                            src={Logo}
                            className="d-inline-block align-top"
                        />{' '}
                        Electromecanica Dil-Gar
                    </Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <LinkContainer to="/motores">
                            <Nav.Link>Motores</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/grupos">
                            <Nav.Link>Grupos</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
                <CartWidget/>
            </Navbar>
        )
}
export default NavBar;
/*

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { LinkContainer } from 'react-router-bootstrap';
import Logo from '../../images/energy.png'
import CartWidget from '../CartWidget/CartWidget.jsx';



import './NavBar.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar = () => {
    return (
        <>
            <Navbar className="navbar">
                <Container>
                    <LinkContainer to="/">
                    <Navbar.Brand>
                        <img
                            alt="Electromecanica Dil-Gar"
                            src={Logo}
                            className="d-inline-block align-top"
                        />{' '}
                        Electromecanica Dil-Gar
                    </Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <LinkContainer to="/motores"><Nav.Link>Motores</Nav.Link></LinkContainer>
                            <LinkContainer to="/grupos"><Nav.Link>Grupos electrogenos</Nav.Link></LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <CartWidget />
        </>
    )
}
export default NavBar;
*/