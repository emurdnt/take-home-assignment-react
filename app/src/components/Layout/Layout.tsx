import React, { FC } from 'react'
import './Layout.css'

interface LayoutProps {
    backgroundColor: 'dark' | 'light' | 'grey'
    children?: React.ReactNode
    align: 'left' | 'center' | 'right'
}

/**
 * Layout component to set wrapper of the page
 * @param backgroundColor accepts 'light', 'dark', or 'grey'
 * @param align accepts 'left', 'center', or 'right'
 * @param children children elements
 * @returns React component
 */
const Layout: FC<LayoutProps> = ({ backgroundColor = 'grey', children, align = 'center' }) => {
    return <div className={`full-width ${backgroundColor} ${align} `}>{children}</div>
}

export default Layout
