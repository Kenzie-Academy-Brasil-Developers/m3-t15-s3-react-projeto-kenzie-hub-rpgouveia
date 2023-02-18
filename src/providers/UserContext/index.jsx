import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api.js";
import { toast } from "react-toastify";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("@TOKEN");
        if (token) {
            async function autoLogin() {
                try {
                    const config = {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        }
                    };
                    const request = await api.get(`/profile`, config);
                    console.log(request.data);
                    setUser(request.data);
                    navigate("/dashboard");
                } catch (error) {
                    console.log(error);
                    localStorage.removeItem("@TOKEN");
                }
            }
            autoLogin()
        }
    }, [])

    const loginUser = async (formData) => {
        try {
            const response = await api.post("/sessions", formData);
            const token = response.data.token;
            const userId = response.data.user.id;
            const userData = response.data.user;
            setUser(userData);
            localStorage.setItem("@TOKEN", token);
            localStorage.setItem("@USERID", userId);
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
