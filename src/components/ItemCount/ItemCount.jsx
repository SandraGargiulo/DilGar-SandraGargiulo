import React from 'react';
import { useState } from 'react';
import './ItemCount.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const ItemCount = ({ initial = 1, stock = 0, onAdd }) => {

    const [quantity, setQuantity] = useState(initial);

    const increment = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1)
        }
    }

    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    return (
        <div className="count-container">
            <div className="count-container__contador">
                <button className="count-container__button" onClick={decrement}>-</button>
                <span className="count-container__qty">{quantity}</span>
                <button className="count-container__button" onClick={increment}>+</button>
            </div>
            <button className="button-primary" onClick={() => onAdd(quantity)} disabled={stock === 0 ? true : null}>Agregar al carrito</button>
        </div>
    );
};

export default ItemCount;