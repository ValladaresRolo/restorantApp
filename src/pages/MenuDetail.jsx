import React from 'react';
import { Link } from 'react-router-dom';
import { useParams, useLocation } from 'react-router-dom';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';

export const MenuDetail = () => {

    const location = useLocation();
    const menuSelected = location.state.menuSelected;

    return (
        <Container fluid>
            <Row>



                <Col><Image src={`/src/assets/${menuSelected.img}`} fluid /></Col>


            </Row>
            <Row>
                <Col><h1>{menuSelected.name}</h1></Col>
                <Col><h2>${menuSelected.price}</h2></Col>
            </Row>
            <Row>
                <Col>
                    <p>{menuSelected.description}</p>
                    <p>{menuSelected.bajada}</p>
                    <Link to="../menu">
                        <Button variant="primary" size="lg">
                            Regresar al Menu
                        </Button>
                    </Link>
                </Col>
            </Row>
        </Container>
    );
};