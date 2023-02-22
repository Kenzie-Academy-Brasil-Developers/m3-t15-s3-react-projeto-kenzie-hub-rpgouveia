import React from 'react'

const Input = ({label, type, placeholder, register, errors, disabled}) => {
    return (
        <fieldset>
            {label && <label htmlFor={register.name}>{label}</label>}
            <input
                id={register.name}
                type={type}
                placeholder={placeholder}
                {...register}
                disabled={disabled}
            />
            {errors && <p>{errors.message}</p>}
        </fieldset>
    )
}

export default Input