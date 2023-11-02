import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
    mutation {
        authenticate(email: "bob@example.com", password: "password") {
            accessToken
            refreshToken
            expiresAt
        }
    }
`

export const ALL_PRODUCTS = gql`
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