import React, { useReducer, createContext } from 'react'
import { deleteTokens, getTokens, saveTokens } from '../utilities/helpers'

type UserData = {
    accessToken: string
    expiresAt: string
    refreshToken: string
}

const initialState = {
    user: null,
}

if (localStorage.getItem('SESSION')) {
    const session = getTokens()
    if (Date.parse(session.expiresAt) < Date.now()) {
        deleteTokens()
    } else {
        initialState.user = session
    }
}

const AuthContext = createContext({
    user: null,
    login: (userData: UserData) => {},
    logout: () => {},
})

function authReducer(state, action) {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                user: action.payload,
            }
        case 'LOGOUT':
            return {
                ...state,
                user: null,
            }
        default:
            return state
    }
}

interface AuthProviderProps {
    children: React.ReactNode
}

const AuthProvider = ({ children }: AuthProviderProps) => {
    const [state, dispatch] = useReducer(authReducer, initialState)

    const login = (userData: UserData) => {
        saveTokens(userData)
        dispatch({
            type: 'LOGIN',
            payload: userData,
        })
    }

    const logout = () => {
        deleteTokens()
        dispatch({
            type: 'LOGOUT',
        })
    }

    return <AuthContext.Provider value={{ user: state.user, login, logout }}>{children}</AuthContext.Provider>
}

export { AuthContext, AuthProvider }
