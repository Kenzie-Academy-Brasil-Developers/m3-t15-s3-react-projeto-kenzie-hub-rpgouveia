import React from 'react'
import { StyledTechCard } from './styles'

const TechCard = ({tech}) => {
    const { title, status } = tech

    return (
        <StyledTechCard>
            <h3>{title}</h3>
            <p>{status}</p>
        </StyledTechCard>
    )
}

export default TechCard