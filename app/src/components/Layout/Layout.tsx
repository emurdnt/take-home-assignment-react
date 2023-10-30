import React, { ReactElement } from 'react'
import './Layout.css'

enum Color {
    dark,
    light,
    grey,
}

interface LayoutProps {
    backgroundColor?: Color
    children?: ReactElement
}

/**
 * Layout component to set background colour of the page
 * @param backgroundColor accepts 'light' or 'dark'
 * @returns React component
 */
export default function Layout({ backgroundColor = Color.grey, children }: LayoutProps): ReactElement {
    return <div className="full-width grey">{children}</div>
}
