import { createContext, useContext, useState, useEffect } from "react";
import { UserContext } from "../UserContext";
import { api } from "../../services/api.js";

export const TechContext = createContext({});

export const TechProvider = ({ children }) => {
    const { techList, setTechList } = useContext(UserContext);
    const [currentTech, setCurrentTech] = useState({});
    
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

    const updateTech = async (formData, techId) => {
        const token = localStorage.getItem("@TOKEN");
        try {
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            };
            const response = await api.put(`/users/techs/${techId}`, formData, config);
            const updatedTech = response.data;
            const updatedTechList = techList.map(tech => {
                if (techId === tech.id) {
                    return {...tech, ...updatedTech};
                } else {
                    return tech;
                }
            });
            setTechList(updatedTechList);
        } catch (error) {
            console.log(error);
        }
    };

    const deleteTech = async (techId) => {
        const token = localStorage.getItem("@TOKEN");
        try {
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            };
            await api.delete(`/users/techs/${techId}`, config);
            const filteredTechList = techList.filter(tech => {
                return tech.id !== techId;
            })
            setTechList(filteredTechList);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <TechContext.Provider value={{
                currentTech,
                setCurrentTech,
                registerTech,
                updateTech,
                deleteTech
            }}>
            {children}
        </TechContext.Provider>
    );
};