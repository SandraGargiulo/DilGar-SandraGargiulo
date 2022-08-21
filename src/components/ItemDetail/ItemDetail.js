
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ItemDetail.css'
import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'
import CartContext from '../../context/CartContext'

const ItemDetail = ({ id, brand, name, price, thumbnail, description, stock}) => {

    const [quantityToAdd, setQuantityToAdd] = useState(0)

    const { addItem, getProductQuantity } = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        setQuantityToAdd(quantity)

        const productToAdd = {
            id, name, price, quantity
        }

        addItem(productToAdd)
    }

    const productQuantity = getProductQuantity(id)

    return (
        <>
            <Card border="dark" variant="bottom" style={{ width: '38rem', mergin: 'center' }}  >
            <Card.Header>{brand}</Card.Header>
                <Card.Body>
                    <Card.Img variant="top" className="product-card__image" src={thumbnail} alt="" />
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{description}</Card.Text>
                    <Card.Text>${price}</Card.Text>
                </Card.Body>
            </Card>
            <footer className='ItemFooter'>
                {
                    quantityToAdd === 0 ? (
                        <ItemCount onAdd={handleOnAdd} stock={stock} initial={productQuantity} />
                    ) : (
                        <Link to='/cart'>Finalizar compra</Link>
                    )
                }
            </footer>
        </>
    )
}

export default ItemDetail