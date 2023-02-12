import React from 'react'
import Logo from '../../../components/Logo'
import { StyledContainer } from '../../../styles/container'
import { StyledNav } from './styles'

const Nav = ({logout}) => {
    return (
        <StyledNav>
            <StyledContainer>
                <section>
                    <Logo />
                    <button onClick={() => logout()}>Sair</button>
                </section>
            </StyledContainer>
        </StyledNav>
    )
}

export default Nav