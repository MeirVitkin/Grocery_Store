import { useContext, useEffect, useState } from 'react'
import CartList from './CartList'
import Total from './Total'
import DataContext from './Contex/DataContext'



const Cart = () => {

  const { cartItems, setCartItems } = useContext(DataContext);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    totalPrice();
  }, [cartItems])
  const totalPrice = () => {
    let totalPrice = 0;

      Object.values(cartItems).forEach(item => {
        let price = item.price;
        let sum = item.amount * price;
        totalPrice += sum;
      })
      setTotal(totalPrice.toFixed(2));
  }
  const handelDeleteAll = ()=>{
    setCartItems({})
  }

  return (
    <div className='cart'>
      <h3>🛒</h3>
      {total > 0 && (
        <button onClick={handelDeleteAll  }>Delete all items</button>
      )}
      <CartList />
      <div className='total'><Total total={total} /></div>
    </div>
  )
}

export default Cart