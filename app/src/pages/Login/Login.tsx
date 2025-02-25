import { FC, useState, useContext, ReactElement } from 'react'
import { useMutation } from '@apollo/client'
import { useNavigate, Link } from 'react-router-dom'
import Input from '../../components/Input/Input'
import Layout from '../../components/Layout/Layout'
import Button from '../../components/Button/Button'
import logo from '../../assets/Logo.png'
import { useForm } from '../../utilities/useForm'
import { AuthContext } from '../../context/authContext'
import { LOGIN_USER } from '../../utilities/mutations'
import './Login.css'

const Login: FC = (): ReactElement => {
    const context = useContext(AuthContext)
    let navigate = useNavigate()
    const [errors, setErrors] = useState([{}])
    const [disable, setDisabled] = useState(false)

    const loginUserCallback = () => {
        if (valid) {
            setDisabled(true)
            authenticate()
            setDisabled(false)
        } else {
            setErrors([{ ...errors, message: 'Email and password are required.' }])
        }
    }

    const { onChange, onSubmit, values, valid } = useForm(loginUserCallback, {
        email: '',
        password: '',
    })

    const [authenticate, { loading }] = useMutation(LOGIN_USER, {
        variables: {
            email: values.email,
            password: values.password,
        },
        update(_, { data: { authenticate: userData } }) {
            context.login(userData)
            navigate('/products')
        },
        onError({ graphQLErrors }: any) {
            setErrors(graphQLErrors)
            console.log('ERROR:', graphQLErrors)
        },
    })

    return (
        <Layout>
            <div className="card">
                <div className="heading-container">
                    <Link to="/">
                        <img src={logo} alt="Judo logo" className="login-logo" />
                    </Link>
                    <p className="heading">Sign in</p>
                </div>
                <Input type="text" name="email" label="Email" onChange={onChange} placeholder="Email" />
                <Input type="password" name="password" label="Password" onChange={onChange} placeholder="Password" />
                <Button onClick={onSubmit} disabled={disable} loading={loading} label="Sign In" />
                <p className="forgot-password">Forgot password?</p>
                {errors.length &&
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
