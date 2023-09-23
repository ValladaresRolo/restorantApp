import React from 'react'
import { Carousel } from 'react-bootstrap'
import './HeroSlider.css'

export const HeroSlider = () => {
    return (
        <>

            <Carousel>
                <Carousel.Item interval={1000}>


                    <img
                        className="d-block w-100"
                        src="/src/assets/01.jpg"
                        alt="Empanadas de pino"
                    />
                    <Carousel.Caption>
                        <h3>Empanadas de pino</h3>
                        <p>El plato más emblemático de la cocina chilena</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100"
                        src="/src/assets/04.jpg"
                        alt="Pastel de choclo"
                    />
                    <Carousel.Caption>
                        <h3>Pastel de choclo</h3>
                        <p>Un plato dulce y cremoso, hecho con choclo, carne picada, pasas y huevos.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/src/assets/05.jpg"
                        alt="Curanto en hoyo"
                    />
                    <Carousel.Caption>
                        <h3>Curanto en hoyo</h3>
                        <p>Un plato tradicional de la Isla de Chiloé, que se cocina en un hoyo en la tierra.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/src/assets/10.jpg"
                        alt="Mote con huesillo"
                    />
                    <Carousel.Caption>
                        <h3>Mote con huesillo</h3>
                        <p>Un plato dulce y calórico, que se hace con mote, huesillos.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

        </>
    )
}
