
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

import Logo from '../../images/energy.png'
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';
import './NavBar.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar = () => {
    return (
        <>
            <Navbar className="navbar">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            alt="Electromecanica Dil-Gar"
                            src={Logo}
                            className="d-inline-block align-top"
                        />{' '}
                        Electromecanica Dil-Gar
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link><Link to={"#home"}>Principal</Link></Nav.Link>
                            <NavDropdown title="Productos" id="basic-nav-dropdown">
                                <NavDropdown.Item> <Link to={'/type/Motor'}>Motores</Link></NavDropdown.Item>
                                <NavDropdown.Item> <Link to={'/type/Grupo'}>Grupos electrogenos</Link></NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <CartWidget />
        </>
    )
}

export default NavBar;