import React, { FC } from 'react'
import './Button.css'
import load from '../../assets/loading.gif'

interface ButtonProps {
    onClick?: (event: MouseEvent) => void
    color?: 'primary' | 'secondary'
    disabled?: boolean
    loading?: boolean
    label?: string
}

/**
 *
 * @param onClick callback function for button
 * @param color accepts 'primary' or 'secondary'
 * @param disabled disabled button
 * @param loading shows loading icon when the process is on-going
 * @param label button label
 * @returns React.ReactNode
 */
const Button: FC<ButtonProps> = ({
    onClick,
    color = 'primary',
    disabled,
    loading = false,
    label = 'button',
}: ButtonProps) => {
    return (
        <div className={`button ${color}`} onClick={onClick} disabled={disabled}>
            {loading ? <img src={load} alt="loading text" className="loader" /> : <span>{label}</span>}
        </div>
    )
}

export default Button
