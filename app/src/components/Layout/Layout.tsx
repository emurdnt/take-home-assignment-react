import { ReactElement } from 'react'
import './Layout.css'

enum Color {
    dark,
    light,
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
export default function Layout({ backgroundColor = Color.light, children }: LayoutProps): ReactElement {
    return (
        <>
            {console.log(`Color.${backgroundColor}`)}
            <div className="full-width light">{children}</div>
        </>
    )
}
