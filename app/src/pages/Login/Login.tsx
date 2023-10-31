import React, { useState } from 'react'
import { ApolloProvider, gql, useMutation } from '@apollo/client'
import Input from '../../components/Input/Input'
import Layout from '../../components/Layout/Layout'
import { Button } from '../../components/Button/Button'
import logo from '../../assets/Logo@2x.png'
import './Login.css'

const LOGIN_MUTATION = gql`
    mutation LoginMutation($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
        }
    }
`
const Login = () => {
    const [formState, setFormState] = useState({
        email: 'bob@example.com',
        password: 'password',
    })

    const [login] = useMutation(LOGIN_MUTATION, {
        variables: {
            email: formState.email,
            password: formState.password,
        },
        onCompleted: ({ login }) => {
            console.log('YAY?')
            // localStorage.setItem(AUTH_TOKEN, login.token);
            // navigate('/');
        },
    })

    const handleSubmit = evt => {
        evt.preventDefault()
    }
    return (
        <Layout>
            <div className="card">
                <div className="heading-container">
                    <img src={logo} alt="Logo" />
                    <p class="heading">Sign in</p>
                </div>
                <Input type="text" name="Email" label="Email" />
                <Input type="password" name="Password" label="Password" />
                <Button onClick={handleSubmit} disabled={false}>
                    Sign in
                </Button>
                <p className="forgot-password">Forgot password?</p>
            </div>
            <p className="disclaimer">
                &copy;2001-20019 All Rights Reserved. Clip &trade; is a registered trademark of Rover Labs, Cookie
                Preferences, Privacy, and Terms.
            </p>
        </Layout>
    )
}

export default Login
