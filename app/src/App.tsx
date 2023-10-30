import { useState } from 'react'
import { client } from './client/ApolloClient'
import { ApolloProvider, gql, useMutation } from '@apollo/client'
// import Layout from './components/Layout/Layout'
import './App.css'
import '../src/assets/Fonts.css'
import Login from './components/Login/Login'

function App() {
    return (
        <ApolloProvider client={client}>
            <Login />
        </ApolloProvider>
    )
}

export default App
