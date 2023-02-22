import React from 'react'
import { StyledHeader } from './styles'

const Header = ({name, course_module}) => {
    return (
        <StyledHeader>
                <section>
                    <h1>Olá, {name}</h1>
                    <p>{course_module}</p>
                </section>
        </StyledHeader>
    )
}

export default Header