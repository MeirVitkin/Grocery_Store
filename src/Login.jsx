import {useContext} from 'react'
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import DataContext from './Contex/DataContext';

const Login = () => {
    const { user, setUser, login, setLogin, loginClick, setLoginClick } = useContext(DataContext)

  
    const handelX = () => {
        setLoginClick(!loginClick)

    }
  return (
    <div className='loginContainer'>
                        <div className='loginPage'>
                            <div className='x' onClick={handelX}>x</div>
                            <form onSubmit={handelX} >
                                <input type="text" placeholder='User Name' />
                                <input type="text" placeholder='Password' /><br />
                                <input type="submit" />
                            </form>
                            <GoogleLogin
                                onSuccess={credentialResponse => {
                                    const credentialResponseDecoded = jwtDecode(credentialResponse.credential);
                                    setUser(credentialResponseDecoded);
                                    setLoginClick(!loginClick)
                                    setLogin(!login)
                                    console.log(credentialResponseDecoded);
                                }}
                                onError={() => {
                                    console.log('Login Failed');
                                }}
                            />
                        </div>

                    </div>
  )
}

export default Login