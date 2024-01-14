import Cart from "./Cart"
import Content from "./Content"
import Header from "./header"
import {  useState } from "react";
import DataContext from "./Contex/DataContext";


const Layout = () => {
    const [cartItems, setCartItems] = useState({});
    return (<div className="layout">
                <Header />
                <DataContext.Provider value={{ cartItems, setCartItems }}>
                    <div className="cartAndContentContainer">
                        <div className="cartContainer"><Cart/></div>
                        <div className="content"><Content /></div>
                    </div>
                </DataContext.Provider>
            </div>


    )
}

export default Layout