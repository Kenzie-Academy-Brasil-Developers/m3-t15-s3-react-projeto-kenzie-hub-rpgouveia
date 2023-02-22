import React, { useContext } from "react";
import { StyledMain } from "./styles";
import { UserContext } from "../../../providers/UserContext";
import AddTechButton from "./AddTechButton";
import TechCard from "./TechCard";
import StdModal from "../../../components/StdModal";
import RegisterForm from "./RegisterForm";
import UpdateForm from "./UpdateForm";

const Main = () => {
    const {
        techList,
        modal1IsOpen,
        handleModal1,
        modal2IsOpen,
        handleModal2
    } = useContext(UserContext);
    
    return (
        <>  
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
            
            <StdModal
                modalTitle={"Cadastrar Tecnologia"}
                modalIsOpen={modal1IsOpen}
                handleModal={handleModal1}
            >
                <RegisterForm />
            </StdModal>

            <StdModal
                modalTitle={'Detalhes da Tecnologia'}
                modalIsOpen={modal2IsOpen}
                handleModal={handleModal2}
            >
                <UpdateForm />
            </StdModal>
        </>
    );
};

export default Main;
