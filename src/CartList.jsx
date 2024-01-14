import {useContext} from 'react'
import CartItem from './CartItem'
import DataContext from './Contex/DataContext'

const CartList = () => {
  const { cartItems } = useContext(DataContext);

  return (
    <div>
      {Object.values(cartItems).map(i => <CartItem key={i.id} item={i} />)}
    </div>
  )
}

export default CartList