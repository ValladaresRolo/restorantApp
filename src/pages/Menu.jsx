
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import './Menu.css'



export const Menu = () => {

    const cartaMenuCollectionRef = collection(db, 'cartaMenu')
    const [cartaMenu, setMenus] = useState([])

    const getCarta = async () => {
        const data = await getDocs(cartaMenuCollectionRef)

        setMenus(data.docs.map(doc => ({ ...doc.data(), id: doc.id })))
        console.log('cartaMenu=>', cartaMenu)
    }
    useEffect(() => {
        getCarta()

    }, [])



    return (
        <>

            <Container className='contenedor '>
                <Row xs={1} md={2} className="g-4">


                    {
                        cartaMenu.map(menu => (
                            <Card key={menu.id} style={{ width: '18rem' }} className='cardD'>
                                <Card.Img variant="top" src={`/src/assets/${menu.img}`} />
                                <Card.Body>
                                    <Card.Title className="text-center">{menu.name}</Card.Title>

                                    <Card.Text className="text-center">
                                        ${menu.price}
                                    </Card.Text>
                                    <Link to={`/menus/${menu.id}`} state={{ menuSelected: menu }}>
                                        <Button variant="primary">Ver Detalle</Button>
                                    </Link>
                                </Card.Body>
                            </Card>
                        )
                        )

                    }


                </Row>
            </Container>

        </>
    )
}
