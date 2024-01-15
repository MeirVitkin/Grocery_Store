import { useState } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";

const Header = () => {
    const [user, setUser] = useState({});
    const [login, setLogin] = useState(false);
    const [loginClick, setLoginClick] = useState(false);
    const handelLoginClick = () => {
        setLoginClick(!loginClick)
        Object.keys(user).length > 0 &&(
            setLogin(!login)
            )
    }
    const handelLogOutClick = () => {
        setLoginClick(!loginClick)
        setLogin(!login);
    }

    return (
        <div className='header'>
            {!login ? <div onClick={handelLoginClick}>Login</div> : <div onClick={handelLogOutClick}>Log out</div>}
            {user.name && <div>{user.name}</div>}
            <h1>☘ GROCERY STORE ☘</h1>
            <>
            {loginClick &&(
                 <GoogleLogin
                        onSuccess={credentialResponse => {
                            const credentialResponseDecoded = jwtDecode(credentialResponse.credential);
                            setUser(credentialResponseDecoded);
                            console.log(credentialResponseDecoded);
                        }}
                        onError={() => {
                            console.log('Login Failed');
                        }}
                    />
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