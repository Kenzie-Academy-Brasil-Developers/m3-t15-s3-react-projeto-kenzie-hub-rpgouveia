import { createContext, useContext, useState } from "react";
import { UserContext } from "../UserContext";

export const TechContext = createContext({});

export const TechProvider = ({ children }) => {
    const { techList, setTechList } = useContext(UserContext)
    
    return (
        <TechContext.Provider
            value={{}}
        >
            {children}
        </TechContext.Provider>
    );
};