import { useContext } from "react";
import DataContext from "./Contex/DataContext";
const Item = ({ item }) => {
    const { name, image, price, id } = item;
    const {cartItems, setCartItems } = useContext(DataContext)

    const handelPlus = () => {
        const NewCart = {...cartItems}
        if(cartItems[id]){
            NewCart[id].amount +=1
        }else{
            NewCart[id] = {...item, amount: 1}
        }
        setCartItems(NewCart)
        console.log(cartItems);
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
        console.log(cartItems);
     }
    return (
        <div className="item">
            <h2>{name}</h2>
            <img  src={image} style={{maxWidth: name === 'Red Wine' ||name === 'Milk' ? '20%' : '50%', height: 'auto' }}/>
            <h3>{price}</h3><br />
            <div className="cartButtons">
            {cartItems[id]?(
                <>
                    <button onClick={handelPlus}>+</button>
                    <span className="itenAmount">{cartItems[id]?.amount || 0}</span>
                    <button onClick={handelMinus}>-</button>
                </>
            ): (<span className="addToCartButton" onClick={handelPlus}>Add to cart</span>)}
            </div>

        </div>
    )
}

export default Item