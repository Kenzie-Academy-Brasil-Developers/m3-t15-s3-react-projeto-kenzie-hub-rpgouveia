import React, { useContext } from "react";
import { UserContext } from "../../providers/UserContext";
import { useNavigate } from "react-router-dom";
import Nav from "./Nav";
import Header from "./Header";
import Main from "./Main";
import Loading from "./Loading";
import { StyledContainer } from "../../styles/container";

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
                <Main />
            </StyledContainer>
        );
    } else {
        return (
            <>
                <Nav />
                <Loading />
            </>
        );
    }
};

export default Dashboard;
