import React, { useContext } from "react";
import { UserContext } from "../../../../providers/UserContext";
import { TechContext } from "../../../../providers/TechContext";
import { StyledTechCard } from "./styles";

const TechCard = ({ tech }) => {
    const { title, status } = tech;
    const { handleModal2 } = useContext(UserContext);
    const { setCurrentTech } = useContext(TechContext);

    return (
        <>
            <StyledTechCard
                onClick={() => {
                    setCurrentTech(tech)
                    handleModal2();
                }}
            >
                <h3>{title}</h3>
                <p>{status}</p>
            </StyledTechCard>
        </>
    );
};

export default TechCard;
