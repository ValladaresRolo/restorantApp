import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import '../components/NavBar.css'

export const NavBar = () => {
    return (
        <Navbar expand="lg" className="navTop">
            <Container>
                <Navbar.Brand href="../"><Image className='imgLogo' src="https://valladaresrolo.github.io/crud/img/logo-shiba.png" fluid /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="../">Inicio</Nav.Link>
                        <Nav.Link href="../menu">Menu</Nav.Link>
                        <Nav.Link href="../reserva">Reserva</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

