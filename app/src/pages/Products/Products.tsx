import Layout from '../../components/Layout/Layout'
import { Link } from 'react-router-dom'
import { useContext, useState } from 'react'
import { AuthContext } from '../../context/authContext'
import { Navigate } from 'react-router-dom'
import { useQuery, gql } from '@apollo/client'
import placeholder from '../../assets/Placeholder.png'
import './Products.css'
import { ALL_PRODUCTS } from '../../utilities/mutations'
import NavBar from '../../components/Nav/Nav'

const Products = () => {
    const { user } = useContext(AuthContext)

    const context = useContext(AuthContext)
    const [errors, setErrors] = useState([])

    if (!user) {
        return <Navigate to="/login" replace />
    }

    const { loading, error, data } = useQuery(ALL_PRODUCTS)
    if (loading) return <p>Loading...</p>
    if (error) return <p>Error :(</p>

    return (
        <Layout align="left">
            <NavBar />
            <div className="product-container">
                {data.products.map(product => {
                    return (
                        <div className="product">
                            <img src={placeholder} className="product-img" />
                            <p className="description">{product.description}</p>
                            <p>
                                {product.title} - {product.price}
                            </p>
                        </div>
                    )
                })}
            </div>
        </Layout>
    )
}

export default Products
