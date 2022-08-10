import React from 'react';
import ItemCount from '../ItemCount/ItemCount.jsx';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom'
import './Item.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Item = ({ name, thumbnail, price, id, stock, brand, category }) => {
    const onAdd = (qty) => {
        alert(`Has agregado ${qty} motor/es ⚡ al carrito de compras`);
    };

    return (
        <>
            <Card className="product-card">
                <Card.Header className="product-card__category">{category}</Card.Header>
                <Card.Img variant="top" className="product-card__image" src={thumbnail} alt="" />
                <Card.Body className="product-card">
                    <Card.Title className="product-card__price">${price}</Card.Title>
                    <Card.Title className="product-card__brand">{brand}</Card.Title>
                    <Card.Title className="product-card__name">{name}</Card.Title>
                    <Link to={`/detail/${id}`} className='Option'>Ver detalle</Link>
                </Card.Body>
                <ItemCount stock={stock} onAdd={onAdd} initial={1} />
            </Card>
        </>
    );
};

export default Item;