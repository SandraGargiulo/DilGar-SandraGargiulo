
import Cart from "../shopping-cart.png";
import Card from 'react-bootstrap/Card';
import ItemListContainer from "./ItemListContainer";
import 'bootstrap/dist/css/bootstrap.min.css';

function CartWidget() {
    return (
        <>
            <Card>
                <img
                    variant="left" 
                    src={Cart} 
                    width="30"
                    height="30" 
                />
                <Card.Body>
                    <Card.Text>
                        <ItemListContainer/>
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    );
}
export default CartWidget;