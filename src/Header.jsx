import { useState, useContext } from 'react';
import Login from './Login';
import DataContext from './Contex/DataContext';



const Header = () => {
    const { user, setUser, login, setLogin, loginClick, setLoginClick } = useContext(DataContext)

    const handelLoginClick = () => {
        setLoginClick(!loginClick)

    }
    const handelLogOutClick = () => {
        setUser({})
        setLogin(!login);
    }
    return (
        <div className='header'>
            <div> <h1>☘ GROCERY STORE ☘</h1></div>
            {user.name && <div>{user.name}</div>}
            {!login ? (
                <div className='login' onClick={handelLoginClick}>Login</div>
            ) : (
                <div className='logOut' onClick={handelLogOutClick}
                    style={{ backgroundImage: `url(${user.picture})` }} >
                </div>
            )}
            <>
                {loginClick && (
                   <Login/>
                )}
                {/* {Object.keys(user).length === 0 && (
                   

                )} */}
                {/* {Object.keys(user).length > 0 &&(
      )} */}
            </>
        </div>
    )
}

export default Header