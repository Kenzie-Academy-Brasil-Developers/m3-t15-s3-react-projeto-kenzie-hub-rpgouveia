import React, { useContext } from "react";
import { UserContext } from "../../../../providers/UserContext";
import { StyledTechCard } from "./styles";

const TechCard = ({ tech }) => {
    const { title, status } = tech;
    const { handleModal2 } = useContext(UserContext);

    return (
        <>
            <StyledTechCard
                onClick={() => {
                    handleModal2();
                    console.log(tech);
                    // criar um estado para trabalhar com o modal de editar/deletar
                }}
            >
                <h3>{title}</h3>
                <p>{status}</p>
            </StyledTechCard>
        </>
    );
};

export default TechCard;
