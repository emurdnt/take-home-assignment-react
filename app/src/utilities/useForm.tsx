import { useState, ChangeEvent } from 'react'

/**
 * Custom hook for managing forms
 * @param callback
 * @param initialState
 * @returns onChange, onSubmit and the values of the form
 */
export const useForm = (
    callback: () => void,
    initialState = {}
): {
    onChange: (e: ChangeEvent) => void
    onSubmit: (e: MouseEvent) => void
    values: {}
    valid: boolean
} => {
    const [values, setValues] = useState(initialState)
    const [valid, setValid] = useState(true)

    const onChange = (event: ChangeEvent) => {
        const target = event.target as HTMLButtonElement
        if (!target.value) {
            setValid(false)
        } else {
            setValid(true)
            setValues({ ...values, [target.name]: target.value })
        }
    }

    const onSubmit = (event: MouseEvent) => {
        event.preventDefault()
        callback()
    }

    return { onChange, onSubmit, values, valid }
}
