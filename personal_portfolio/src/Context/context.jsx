import { createContext, useState, useEffect } from "react";

import { projects, aboutMe } from "../Consts/consts";

const PortfolioContext = createContext();

function PortfolioProvider ({ children }) {

    return (
        <PortfolioContext.Provider value={{
            projects,
            aboutMe,
        }}>
            {children}
        </PortfolioContext.Provider>
    )
}

export { PortfolioContext, PortfolioProvider};