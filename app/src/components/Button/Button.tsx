import React from 'react'
import './Button.css'

interface ButtonProps {
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
    children?: React.ReactNode
    color?: 'primary' | 'secondary'
    disabled?: boolean
}

const Button = ({ onClick, children, color = 'primary', disabled }: ButtonProps) => {
    return (
        <div className={`button ${color}`} onClick={onClick} disabled={disabled}>
            {children}
        </div>
    )
}

export default Button
