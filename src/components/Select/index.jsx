import React from 'react'

const Select = ({label, type, children, placeholder, register, errors}) => {
    return (
        <fieldset>
            {label && <label htmlFor={register.name}>{label}</label>}
            <select
                id={register.name}
                type={type}
                placeholder={placeholder}
                {...register}
            >
                {children}
            </select>
            {errors && <p>{errors.message}</p>}
        </fieldset>
    )
}

export default Select