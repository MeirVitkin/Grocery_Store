import Cart from "./Cart"
import Content from "./Content"
import {  useState } from "react";
import DataContext from "./Contex/DataContext";
import Header from "./Header";


const Layout = () => {
    const [cartItems, setCartItems] = useState({});
    const [user, setUser] = useState({});
    const [login, setLogin] = useState(false);
    const [loginClick, setLoginClick] = useState(false);
    return (<div className="layout">
                <DataContext.Provider value={{ cartItems, setCartItems, user, setUser, login, setLogin, loginClick, setLoginClick }}>
                    <Header/>
                    <div className="cartAndContentContainer">
                        <div className="cartContainer"><Cart/></div>
                        <div className="content"><Content /></div>
                    </div>
                </DataContext.Provider>
            </div>


    )
}

export default Layout