import { useState, ChangeEvent } from 'react'

/**
 * Custom hook for managing forms
 * @param callback
 * @param initialState
 * @returns onChange, onSubmit and the values of the form
 */
export const useForm = (callback: () => {}, initialState = {}) => {
    const [values, setValues] = useState(initialState)

    const onChange = (event: ChangeEvent) => {
        setValues({ ...values, [event.target.name]: event.target.value })
    }

    const onSubmit = (event: MouseEvent) => {
        event.preventDefault()
        callback()
    }

    return { onChange, onSubmit, values }
}
