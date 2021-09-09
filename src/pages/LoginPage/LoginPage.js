import React from 'react'
import DefaultNavbar from '../../components/DefaultNavbar/DefaultNavbar'
import LoginForm from '../../components/LoginForm/LoginForm'
import Navbar from '../../components/navbar/navbar'
import './LoginPage.css'

function LoginPage() {
    return (
        <div >
            {/* <Navbar /> */}
            <DefaultNavbar />
            <div className="login-container">
                <LoginForm />
            </div>
            
        </div>
    )
}

export default LoginPage
