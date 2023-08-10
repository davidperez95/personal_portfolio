import { createContext, useState, useEffect } from "react";

import { projects } from "../Consts/consts";

const PortfolioContext = createContext();

function PortfolioProvider ({ children }) {

    return (
        <PortfolioContext.Provider value={{
            projects
        }}>
            {children}
        </PortfolioContext.Provider>
    )
}

export { PortfolioContext, PortfolioProvider};