import React, { useContext } from "react";
import { FaPlus } from "react-icons/fa";
import { StyledAddTechButton } from "./styles";
import { UserContext } from "../../../../providers/UserContext";

const AddTechButton = () => {
    const { handleModal1 } = useContext(UserContext)

    return (
        <>
            <StyledAddTechButton type="button" onClick={handleModal1}>
                <FaPlus />
            </StyledAddTechButton>
        </>
    );
};

export default AddTechButton;
