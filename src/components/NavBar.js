import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from "./CartWidget";
import Logo from "../energy.png";
import 'bootstrap/dist/css/bootstrap.min.css';

function NavBar() {
    return (
        <>
            <Navbar bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            src={Logo}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />
                        {' '}
                        Electromecanica Dil-Gar
                    </Navbar.Brand>
                </Container>
                <Nav className="me-auto">
                    <Nav.Link href="#home">Inicio</Nav.Link>
                    <NavDropdown title="Productos" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Motores</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Grupos electrogenos</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <CartWidget />
            </Navbar>
        </>
    );
}
export default NavBar;
