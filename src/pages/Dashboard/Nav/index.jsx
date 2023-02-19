import React from "react";
import Logo from "../../../components/Logo";
import { StyledNav } from "./styles";

const Nav = ({ logout }) => {
    return (
        <StyledNav>
            <Logo />
            <button onClick={() => logout()}>Sair</button>
        </StyledNav>
    );
};

export default Nav;
