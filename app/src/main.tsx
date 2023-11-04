import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { client } from './client/ApolloClient.ts'
import { ApolloProvider } from '@apollo/client'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './context/authContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <AuthProvider>
        <ApolloProvider client={client}>
            <BrowserRouter>
                <React.StrictMode>
                    <App />
                </React.StrictMode>
            </BrowserRouter>
        </ApolloProvider>
    </AuthProvider>
)
