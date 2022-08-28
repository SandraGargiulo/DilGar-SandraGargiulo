
import Item from '../Item/Item.js';
import { memo } from 'react';
import './ItemList.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const ItemList = ({ products }) => {
    return (
        <div className='product-list-container' onClick={() => console.log('hice click en itemlist')}>
            {products.map(prod => <Item key={prod.id} {...prod} />)}
        </div>
    )
}

export default ItemList
