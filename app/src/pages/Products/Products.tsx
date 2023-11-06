import { FC, ReactElement, useContext, useState } from 'react'
import { Navigate } from 'react-router-dom'
import { useQuery } from '@apollo/client'
import Layout from '../../components/Layout/Layout'
import { AuthContext } from '../../context/authContext'
import placeholder from '../../assets/Placeholder.png'
import { ALL_PRODUCTS } from '../../utilities/mutations'
import NavBar from '../../components/Nav/Nav'
import './Products.css'

const Products: FC = (): ReactElement => {
    const { user } = useContext(AuthContext)
    const [errors, setErrors] = useState([])

    if (!user) {
        return <Navigate to="/login" replace />
    }

    //Add rollbar here in the future
    const { error, data } = useQuery(ALL_PRODUCTS, {
        onError({ graphQLErrors }: any) {
            console.log('ERROR:', graphQLErrors)
            setErrors(graphQLErrors)
        },
    })

    return (
        <Layout align="left">
            <NavBar />
            {error ? (
                <div className="error-container">
                    {errors.map((err, idx) => (
                        <p className="product-error" key={idx}>
                            {err.message}
                        </p>
                    ))}
                </div>
            ) : (
                <div className="product-container">
                    {data?.products?.map((product, idx) => {
                        return (
                            <div key={idx} className="product">
                                <img
                                    src={placeholder}
                                    className="product-img"
                                    alt="product image placeholder with a grey background"
                                />
                                <p className="description">{product.description}</p>
                                <p>
                                    {product.title} - {product.price}
                                </p>
                            </div>
                        )
                    })}
                </div>
            )}
        </Layout>
    )
}

export default Products
