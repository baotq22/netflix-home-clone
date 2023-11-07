import * as React from 'react';
import logo from './assets/logo.png'
import './navbar.css'
import SignIn from "../src/page/signIn";
import {
    createBrowserRouter,
    RouterProvider,
    useNavigate,
} from "react-router-dom";



const router = createBrowserRouter([
    {
        path: '/login',
        element: <SignIn />
    },
    // {
    //   path: '/',
    //   element: <SignIn />
    // }
])

function Navbar() {
    const navigate = useNavigate();
    const handleClick = () => { navigate('/login') };
    return (
        <>
            <div id='navbar'>
                <img src={logo} className="logo" alt="Logo" />
                <select name="language" id="language">
                    <option value="EN">English</option>
                    <option value="VN">Vietnamese</option>
                    <option value="JP">Japanese</option>
                    <option value="KR">Korean</option>
                </select>
                <button id='signIn' onClick={handleClick}>Sign In</button>
            </div>
        </>
    )
}

export default Navbar