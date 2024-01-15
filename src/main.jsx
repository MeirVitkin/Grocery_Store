import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { GoogleOAuthProvider } from '@react-oauth/google';
import { BrowserRouter } from 'react-router-dom';


ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <GoogleOAuthProvider clientId="765825535150-og0lc44kr8h4dhev2ihjckglrs9et7qv.apps.googleusercontent.com">
            <App />
        </GoogleOAuthProvider>;
    </BrowserRouter>
)
