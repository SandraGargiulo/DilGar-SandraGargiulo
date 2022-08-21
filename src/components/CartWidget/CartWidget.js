import './CartWidget.css';
import { useContext } from 'react'
import Cart from '../../images/cart.svg';
import { Link } from 'react-router-dom'
import CartContext from '../../context/CartContext'

const CartWidget = () => {
  const { getQuantity } = useContext(CartContext)

  const quantity = getQuantity()
  return (
    <Link to='/cart' className="CartWidget">
      <img src={Cart} alt='CartWidget' />
      {quantity}
    </Link>
  )
}

export default CartWidget;