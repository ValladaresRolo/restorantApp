
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react';



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
            {
                cartaMenu.map(menu => (
                    <Card key={menu.id} style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={menu.img} />
                        <Card.Body>
                            <Card.Title>{menu.name}</Card.Title>

                            <Card.Text className="text-center">
                                {menu.price}
                            </Card.Text>
                            <Link to={`/menus/${menu.id}`} state={{ menuSelected: menu }}>
                                <Button variant="primary">Ver Detalle</Button>
                            </Link>
                        </Card.Body>
                    </Card>
                )
                )

            }

        </>
    )
}
