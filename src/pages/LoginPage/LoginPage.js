import React from 'react'
import LoginForm from '../../components/LoginForm/LoginForm'
import Navbar from '../../components/navbar/navbar'
import './LoginPage.css'

function LoginPage() {
    return (
        <div >
            <Navbar />
            <div className="login-container">
                <LoginForm />
            </div>
            
        </div>
    )
}

export default LoginPage
