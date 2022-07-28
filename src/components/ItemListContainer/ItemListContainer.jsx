import React from 'react';
import ItemList from '../ItemList/ItemList';

import './ItemListContainer.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const ItemListContainer = () => {
    return (
        <section className="item-list-container">
            <h2 className="item-list-container__title">Motores</h2>
            <ItemList />
        </section>
    );
};

export default ItemListContainer;
