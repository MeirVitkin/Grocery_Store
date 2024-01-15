import { useState } from 'react';
import './App.css'
import Layout from './Layout'
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";

function App() {
  const [user, setUser] = useState({});

  return (
    <>
    {Object.keys(user).length === 0 && (
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
      {Object.keys(user).length > 0 &&(

      <Layout />
      )}
    </>
  )
}

export default App
