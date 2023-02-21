import React, { useContext, useEffect } from "react";
import { StyledMain } from "./styles";
import { UserContext } from "../../../providers/UserContext";
import AddTechButton from "./AddTechButton";
import TechCard from "./TechCard";

const Main = () => {
    const { techList } = useContext(UserContext);

    return (
        <StyledMain>
            <section>
                <h2>Tecnologias</h2>
                <AddTechButton />
            </section>
            <ul>
                {techList.length > 0 ? (
                    techList.map((tech) => {
                        return <TechCard key={tech.id} tech={tech} />;
                    })
                ) : (
                    <li>
                        <h2>Este usuário não possui tecnologias cadastradas</h2>
                    </li>
                )}
            </ul>
        </StyledMain>
    );
};

export default Main;
