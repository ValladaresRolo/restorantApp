import React from 'react'
import { SeccionInfo } from '../components/SeccionInfo'
import { HeroSlider } from '../components/HeroSlider'
import { Container } from 'react-bootstrap'

export const Home = () => {
    return (<>
        <HeroSlider />
        <Container >

            <SeccionInfo />

        </Container>



    </>
    )
}
