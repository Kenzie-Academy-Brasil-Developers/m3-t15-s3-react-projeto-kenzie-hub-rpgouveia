import React from "react";
import { FaPlus } from "react-icons/fa";
import { StyledAddTechButton } from "./styles";

const AddTechButton = () => {
    function handleClick() {
        console.log("Hello World!");
    }

    return (
        <StyledAddTechButton
            type="submit"
            onClick={handleClick}
        >
            <FaPlus />
        </StyledAddTechButton>
    );
};

export default AddTechButton;
