import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api.js";
import { toast } from "react-toastify";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    const loginUser = async (formData) => {
        try {
            const response = await api.post("/sessions", formData);
            const token = response.data.token;
            const userId = response.data.user.id;
            const userData = response.data.user;
            setUser(userData);
            localStorage.setItem("@TOKEN", JSON.stringify(token));
            localStorage.setItem("@USERID", JSON.stringify(userId));
            toast.success("Login feito com sucesso");
            navigate("/dashboard");
        } catch (error) {
            console.log(error);
            toast.error("Email ou senha inválido");
        }
    };

    const registerUser = async (formData) => {
        try {
            await api.post("/users", formData);
            toast.success("Cadastro feito com sucesso!");
            navigate("/");
        } catch (error) {
            console.log(error);
            // console.log(error.response.data.message)
            toast.error("Oops! Algo deu errado");
        }
    };

    return (
        <UserContext.Provider
            value={{
                user,
                setUser,
                loginUser,
                registerUser,
            }}
        >
            {children}
        </UserContext.Provider>
    );
};
