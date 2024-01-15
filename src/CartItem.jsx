import { useContext } from "react";
import DataContext from "./Contex/DataContext";
const CartItem = ({ item }) => {
    const { name, emoji, price, id } = item;
    const {cartItems, setCartItems } = useContext(DataContext)
    console.log("CartItem");
    const handelPlus = () => {
        const NewCart = {...cartItems}
        if(cartItems[id]){
            NewCart[id].amount +=1
        }else{
            NewCart[id] = {...item, amount: 1}
        }
        setCartItems(NewCart)
    }

    const handelMinus = () => { 
        if(cartItems[id]){
            const NewCart = {...cartItems}
            if(cartItems[id].amount === 1){
                delete NewCart[id]
            }else{
                NewCart[id].amount -=1
            }
        setCartItems(NewCart)
        }
     }
    return (
        <div className="cartItemContainer" >
            <h5>{name}</h5>
            <div>{price}</div>
            <div><button onClick={handelPlus}>+</button></div>
            <div className="itenAmount">{cartItems[id]?.amount || 0}</div>
            <div><button onClick={handelMinus}>-</button></div>

        </div>
    )
}

export default CartItem