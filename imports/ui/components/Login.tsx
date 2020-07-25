import React from 'react';
import { Meteor } from 'meteor/meteor';

import RightImg from './RightImg'
import FormLogin from './FormLogin';

const messageText:string = 'Connectez vous afin de lancer une conversation';
const Login = (props:any):JSX.Element => {

    const handleLogin = React.useCallback((state:any): void => {
        Meteor.call('user.login', state, (err, res) => {
            const {username, password} = state
            if (err) {
                console.log('Error login', err)
            } else {
                console.log('Result', res)
                // Je logge l'utilisateur avec le mot de passe
                Meteor.loginWithPassword(username, password, (error) => {
                    if (error) {
                        console.log("Error login", error)
                    } else {
                        // Je connecte l'utilisateur et redirige vers la page chats si aucune erreur
                        props.history.push('/chats')
                    }
                })
            }
        })
    }, [])

    return (
        <RightImg messageText={messageText}>
            <FormLogin onLogin={handleLogin}/>
        </RightImg>
    )
}

export default Login;