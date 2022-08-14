
import Item from '../Item/Item.jsx';
import './ItemList.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const ItemList = ({ products }) => {
    return (
        <div className='product-list-container'>
            {products.map(prod => <Item key={prod.id} {...prod} />)}
        </div>
    )
}

export default ItemList
