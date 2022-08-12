
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ItemDetail.css'

const ItemDetail = ({ brand, name, price, thumbnail, description}) => {
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
        </>
    )
}

export default ItemDetail