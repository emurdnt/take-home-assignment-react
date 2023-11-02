import React, { useState, useContext } from 'react'
import { gql, useMutation } from '@apollo/client'
import Input from '../../components/Input/Input'
import Layout from '../../components/Layout/Layout'
import { Button } from '../../components/Button/Button'
import logo from '../../assets/Logo@2x.png'
import './Login.css'
import { useForm } from '../../utilities/useForm'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/authContext'

//need cleanup and error handling

const LOGIN_USER = gql`
    mutation {
        authenticate(email: "bob@example.com", password: "password") {
            accessToken
            refreshToken
            expiresAt
        }
    }
`
const Login = () => {
    const context = useContext(AuthContext)
    let navigate = useNavigate()
    const [errors, setErrors] = useState([])
    const [disable, setDisabled] = useState(false)

    const loginUserCallback = () => {
        setDisabled(true)
        authenticate()
        setDisabled(false)
    }

    const { onChange, onSubmit, values } = useForm(loginUserCallback, {
        $email: '',
        $password: '',
    })

    const [authenticate] = useMutation(LOGIN_USER, {
        update(_, { data: { authenticate: userData } }) {
            console.log('USER DATA', userData)
            context.login(userData)
            navigate('/products')
        },
        onError({ graphQLErrors }) {
            setErrors(graphQLErrors)
        },
        variables: {
            $email: 'bob@example.com',
            $password: 'password',
        },
    })

    return (
        <Layout>
            <div className="card">
                <div className="heading-container">
                    <img src={logo} alt="Logo" />
                    <p className="heading">Sign in</p>
                </div>
                <Input type="text" name="$email" label="Email" onChange={onChange} />
                <Input type="password" name="$password" label="Password" onChange={onChange} />
                <Button onClick={onSubmit} disabled={disable}>
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
