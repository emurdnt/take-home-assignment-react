import React, { useState, useContext } from 'react'
import { gql, useMutation } from '@apollo/client'
import Input from '../../components/Input/Input'
import Layout from '../../components/Layout/Layout'
import Button from '../../components/Button/Button'
import logo from '../../assets/Logo.png'
import './Login.css'
import { useForm } from '../../utilities/useForm'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/authContext'
import { LOGIN_USER } from '../../utilities/mutations'

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

    const [authenticate, { error, loading }] = useMutation(LOGIN_USER, {
        variables: {
            email: values.email,
            password: values.password,
        },
        update(_, { data: { authenticate: userData } }) {
            context.login(userData)
            navigate('/products')
        },
        onError({ graphQLErrors }) {
            setErrors(graphQLErrors)
            console.log('ERROR:', graphQLErrors)
        },
    })

    return (
        <Layout>
            <div className="card">
                <div className="heading-container">
                    <img src={logo} alt="Logo" />
                    <p className="heading">Sign in</p>
                </div>
                <Input type="text" name="email" label="Email" onChange={onChange} />
                <Input type="password" name="password" label="Password" onChange={onChange} />
                <Button onClick={onSubmit} disabled={disable} loading={loading} label="Sign In" />
                <p className="forgot-password">Forgot password?</p>
                {error &&
                    errors.map((err, idx) => (
                        <p className="error" key={idx}>
                            {err.message}
                        </p>
                    ))}
            </div>
            <p className="disclaimer">
                &copy;2001-20019 All Rights Reserved. Clip &trade; is a registered trademark of Rover Labs, Cookie
                Preferences, Privacy, and Terms.
            </p>
        </Layout>
    )
}

export default Login
