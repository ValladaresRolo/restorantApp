import React from 'react'
import { Container, Button, Col, Form, Row, Image } from 'react-bootstrap'

export const Reserva = () => {
    return (<>


        <Container><h1>Reserva</h1></Container>



        <Container>
            <Row>
                <Col md={12} lg={6}><Image src="/src/assets/CasaCHILENA7.jpg" fluid /></Col>
                <Col md={12} lg={6}><h2>Completa el Formulario</h2>

                    <Form>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>


                        </Row>

                        <Form.Group className="mb-3" controlId="formGridAddress1">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control placeholder=" " />
                        </Form.Group>



                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridCity">
                                <Form.Label>Teléfono</Form.Label>
                                <Form.Control />
                            </Form.Group>

                        </Row>


                        <Button variant="primary" type="submit">
                            Enviar
                        </Button>
                    </Form>


                </Col>
            </Row>




        </Container>




        <Container className='contenedor'>

        </Container >





    </>)



}
