import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import '../components/NavBar.css'
import { Link } from 'react-router-dom';

export const NavBar = () => {
    return (
        <Navbar expand="lg" className="navTop">
            <Container>
                <Navbar.Brand as={Link} to={'/restorantApp/'}  ><Image className='imgLogo' src="https://valladaresrolo.github.io/crud/img/logo-shiba.png" fluid /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to={'/restorantApp/'}>Inicio</Nav.Link>
                        <Nav.Link as={Link} to={'/restorantApp/menu'} >Menu</Nav.Link>
                        <Nav.Link as={Link} to={'/restorantApp/reserva'}>Reserva</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

