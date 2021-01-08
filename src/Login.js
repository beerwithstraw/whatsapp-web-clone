import { Button } from '@material-ui/core'
import React from 'react'
import { auth, provider } from './firebase'

import './Login.css'
import { actionTypes } from './reducer'
import { useStateValue } from './StateProvider'
function Login() {
    const [ {} , dispatch] = useStateValue()

    const signIn = () => {
        auth
            .signInWithPopup(provider)
            .then((result) => {
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user
                })
            })
            .catch((error) => alert(error.message));
    }

    return (
        <div className="login">
            <div className="login__container">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/1200px-WhatsApp.svg.png" alt="WhatsApp Web" />
                <div className="login__text">
                    <h1>Sign In to WhatsApp Web</h1>
                </div>
                <Button onClick={signIn}>
                    <div className="login__buttonImage">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1004px-Google_%22G%22_Logo.svg.png" alt="Google Logo"/>
                    </div>
                    Sign In with Google
                </Button>
            </div>
        </div>
    )
}

export default Login
