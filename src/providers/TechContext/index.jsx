import { createContext, useContext } from "react";
import { UserContext } from "../UserContext";
import { api } from "../../services/api";

export const TechContext = createContext({});

export const TechProvider = ({ children }) => {
    const { techList, setTechList } = useContext(UserContext);
    
    const registerTech = async (formData) => {
        const token = localStorage.getItem("@TOKEN");
        try {
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            };
            const response = await api.post("/users/techs", formData, config);
            const newTech = response.data;
            setTechList([...techList, newTech]);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <TechContext.Provider value={{ registerTech }}>
            {children}
        </TechContext.Provider>
    );
};