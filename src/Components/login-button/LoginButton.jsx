import React from 'react'

import {LoginContainer, LoginIcon, LoginTxT} from './login-button_style.jsx'

const LoginButton = () => {
    return (
        <LoginContainer to="/login">
            <LoginIcon />
            <LoginTxT>LogIn</LoginTxT>
        </LoginContainer>
    )
}

export default LoginButton
