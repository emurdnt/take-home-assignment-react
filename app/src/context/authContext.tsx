import React, { useReducer, createContext } from 'react'
import { deleteTokens, getTokens, saveTokens } from '../utilities/helpers'

//need to type this
type UserData = {
    accessToken: string
    expiresAt: string
    refreshToken: string
    authenticated: boolean
}

const initialState = {
    user: null,
}

if (getTokens()) {
    const session = getTokens()

    if (Date.parse(session.expiresAt) * 1000 < Date.now()) {
        localStorage.removeItem('session')
    } else {
        initialState.user = { ...session, authenticated: true }
    }
}

//need to type
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

function AuthProvider({ children }) {
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
