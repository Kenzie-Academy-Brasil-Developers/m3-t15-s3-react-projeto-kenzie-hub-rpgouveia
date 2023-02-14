import React from 'react'
import { StyledContainer } from '../../../styles/container'
import { StyledMainLoading } from './styles'

const Loading = () => {
    return (
        <StyledMainLoading>
            <StyledContainer>
                <h1>Carregando...</h1>
            </StyledContainer>
        </StyledMainLoading>
    )
}

export default Loading