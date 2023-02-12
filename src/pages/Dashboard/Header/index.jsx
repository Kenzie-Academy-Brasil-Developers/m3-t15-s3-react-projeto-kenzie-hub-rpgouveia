import React from 'react'
import { StyledContainer } from '../../../styles/container'
import { StyledHeader } from './styles'

const Header = ({name, course_module}) => {
    return (
        <StyledHeader>
            <StyledContainer>
                <section>
                    <h1>Olá, {name}</h1>
                    <p>{course_module}</p>
                </section>
            </StyledContainer>
        </StyledHeader>
    )
}

export default Header