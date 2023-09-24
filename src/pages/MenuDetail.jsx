import React from 'react';
import { Link } from 'react-router-dom';
import { useParams, useLocation } from 'react-router-dom';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import './MenuDetail.css'

export const MenuDetail = () => {

    const location = useLocation();
    const menuSelected = location.state.menuSelected;

    return (
        <>
            <Container fluid>
                <Row>
                    <Col>
                        <Image className='imagHero' style={{ backgroundImage: `url(https://github.com/ValladaresRolo/restorantApp/blob/main/src/assets/${menuSelected.img})` }} fluid />
                    </Col>
                </Row>
            </Container>

            <Container className='contentDescription' >
                <Row>
                    <Col><h1>{menuSelected.name}</h1></Col>
                    <Col><h2>${menuSelected.price}</h2></Col>
                </Row>
                <Row>
                    <Col>
                        <p>{menuSelected.description}</p>
                        <p>{menuSelected.bajada}</p>
                        <Link className='center' as={Link} to={'/menu'}>
                            <Button variant="primary" size="lg" className="center-button">
                                Regresar al Menu
                            </Button>
                        </Link>
                    </Col>
                </Row>
            </Container>
        </>
    );
};