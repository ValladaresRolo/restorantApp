import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import './SeccionInfo.css'

export const SeccionInfo = () => {
    return (
        <>
            <Container className='SeccionInfo' >
                <Row>
                    <Col md={12} lg={6}><Image src="https://raw.githubusercontent.com/ValladaresRolo/restorantApp/main/public/CasaCHILENA7.jpg" fluid /></Col>
                    <Col md={12} lg={6}><h2>Restaurante Shiba, San Clemente</h2>


                        <p>En San Clemente, Chile, se encuentra un restaurante único que ofrece un viaje gastronómico por el país. El Restaurante La Casona está ubicado en una hermosa casa patronal del siglo XIX, rodeada de grandes campos.</p>

                        <p>El menú del restaurante ofrece una variedad de platos típicos chilenos, desde el norte hasta el sur. Los ingredientes son frescos y de temporada, y la carne es de primera calidad.</p>

                        <p>El servicio del restaurante es excelente. El personal es amable y servicial, y siempre está dispuesto a recomendar platos y bebidas.</p>

                        <p>El ambiente del restaurante es encantador. La casa está rodeada de grandes campos, lo que crea un ambiente tranquilo y relajante. El interior del restaurante es elegante y acogedor.</p>

                        <p>El Restaurante La Casona es una excelente opción para disfrutar de la cocina chilena en un ambiente inolvidable.</p></Col>
                </Row>
            </Container>
        </>
    )
}
