import React, { ReactElement } from 'react'
import './Layout.css'

interface LayoutProps {
    backgroundColor: 'dark' | 'light' | 'grey'
    children?: ReactElement
    align: 'left' | 'center' | 'right'
}

/**
 * Layout component to set wrapper of the page
 * @param backgroundColor accepts 'light', 'dark', or 'grey'
 * @param align accepts 'left', 'center', or 'right'
 * @returns React component
 */
const Layout = ({ backgroundColor = 'grey', children, align = 'center' }: LayoutProps): ReactElement => {
    return <div className={`full-width ${backgroundColor} ${align} `}>{children}</div>
}

export default Layout
