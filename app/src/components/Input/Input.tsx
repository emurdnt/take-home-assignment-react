import { ChangeEvent, FC } from 'react'
import './Input.css'

interface InputProps {
    type: 'text' | 'number' | 'email' | 'password'
    label: string
    value: string | number
    name: string
    placeholder: string
    error: boolean
    disabled?: boolean
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

/**
 *
 * @param type
 * @returns
 */
const Input: FC<InputProps> = ({ type, label, value, name, placeholder, error, disabled, onChange }: InputProps) => {
    return (
        <div className="input-wrapper">
            <label htmlFor={label} className="label">
                {label}
            </label>
            <input
                className="input"
                type={type}
                id={label}
                value={value}
                name={name}
                placeholder={placeholder}
                onChange={onChange}
                disabled={disabled}
            />
            {error && <p className="error">Input filed can't be empty!</p>}
        </div>
    )
}

export default Input
