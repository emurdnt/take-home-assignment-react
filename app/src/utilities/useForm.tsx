import { useState, ChangeEvent } from 'react'

/**
 * Custom hook for managing forms
 * @param callback
 * @param initialState
 * @returns onChange, onSubmit and the values of the form
 */
export const useForm = (callback: () => {}, initialState = {}) => {
    const [values, setValues] = useState(initialState)
    const [valid, setValid] = useState(true)

    const onChange = (event: ChangeEvent) => {
        if (!event.target.value) {
            setValid(false)
        } else {
            setValid(true)
            setValues({ ...values, [event.target.name]: event.target.value })
        }
    }

    const onSubmit = (event: MouseEvent) => {
        event.preventDefault()
        callback()
    }

    return { onChange, onSubmit, values, valid }
}
