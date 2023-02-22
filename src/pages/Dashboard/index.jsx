import React, { useContext } from "react";
import { UserContext } from "../../providers/UserContext";
import { TechProvider } from "../../providers/TechContext";
import { useNavigate } from "react-router-dom";
import { StyledContainer } from "../../styles/container";
import Nav from "./Nav";
import Header from "./Header";
import Main from "./Main";
import Loading from "./Loading";

const Dashboard = () => {
    const { user, setUser } = useContext(UserContext);
    const navigate = useNavigate();

    const logout = () => {
        setUser(null);
        localStorage.clear();
        navigate("/");
    };
    
    if (user) {
        return (
            <StyledContainer>
                <Nav logout={logout} />
                <Header name={user.name} course_module={user.course_module} />
                <TechProvider>
                    <Main />
                </TechProvider>
            </StyledContainer>
        );
    } else {
        return (
            <StyledContainer>
                <Nav />
                <Loading />
            </StyledContainer>
        );
    }
};

export default Dashboard;
