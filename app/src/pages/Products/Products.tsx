import Layout from '../../components/Layout/Layout'
import { Link } from 'react-router-dom'
import { useContext, useState } from 'react'
import { AuthContext } from '../../context/authContext'
import { Navigate } from 'react-router-dom'
import { useQuery, gql } from '@apollo/client'
import logo from '../../assets/Logo@2x.png'
import './Products.css'

//move all gql to another file
const ALL_PRODUCTS = gql`
    query Products {
        products {
            id
            title
            description
            price
            currency
        }
    }
`

const Products = () => {
    const { user } = useContext(AuthContext)
    console.log('USER', user)

    const context = useContext(AuthContext)
    const [errors, setErrors] = useState([])

    if (!user) {
        return <Navigate to="/login" replace />
    }

    const { loading, error, data } = useQuery(ALL_PRODUCTS)
    if (loading) return <p>Loading...</p>
    if (error) return <p>Error :(</p>

    return (
        <Layout>
            <Link to="/">home</Link>
            {data.products.map(product => {
                return (
                    <div className="product-container">
                        <img src={logo} />
                        <p>{product.title}</p>
                        <p>{product.description}</p>
                        <p>{product.price}</p>
                    </div>
                )
            })}
        </Layout>
    )
}

export default Products
