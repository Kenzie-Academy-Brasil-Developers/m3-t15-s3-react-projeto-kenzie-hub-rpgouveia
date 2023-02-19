import React, { useContext, useEffect } from "react";
import { StyledMain } from "./styles";
import { UserContext } from "../../../providers/UserContext";
import AddTechButton from "./AddTechButton";
import TechCard from "./TechCard";

const Main = () => {
    const { techList } = useContext(UserContext);

    useEffect(() => {
        // console.log("Main Component on Mount: ", techList);
    }, []);

    useEffect(() => {
        // onsole.log("Main Component on Update: ", techList);
    }, [techList]);

    return (
        <StyledMain>
            <section>
                <h2>Tecnologias</h2>
                <AddTechButton />
            </section>
            <ul>
                {techList.map((tech) => {
                    return <TechCard key={tech.id} tech={tech} />;
                })}
            </ul>
        </StyledMain>
    );
};

export default Main;
