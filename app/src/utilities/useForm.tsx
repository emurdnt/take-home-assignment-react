import { useState } from 'react'

export const useForm = (callback, initialState = {}) => {
    const [values, setValues] = useState(initialState)

    const onChange = event => {
        setValues({ ...values, [event.target.name]: event.target.value })

        console.log('VALUES FROM FORM', values)
    }

    const onSubmit = event => {
        event.preventDefault()
        callback()
    }

    return { onChange, onSubmit, values }
}
