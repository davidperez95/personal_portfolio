import { createContext, useState, useEffect } from "react";

import shell_computer from "../Utils/Images/shell_computer.jpg";
import medical_records_img from "../Utils/Images/medical_records_img.jpg";
import capstone_project_img from "../Utils/Images/capstone_project_img.jpg";

const PortfolioContext = createContext();

function PortfolioProvider ({ children }) {

    let projects = [
        {
            projectTitle: "A Shel",
            projectImg: shell_computer,
            projectNumber: "01",
            projectDescription: "Test",
        },
        {
            projectTitle: "Capstone Project",
            projectImg: capstone_project_img,
            projectNumber: "02",
            projectDescription: "Test",
        },
        {
            projectTitle: "Medical Records",
            projectImg: medical_records_img,
            projectNumber: "03",
            projectDescription: "Test",
        },
    ];

    return (
        <PortfolioContext.Provider value={{
            projects
        }}>
            {children}
        </PortfolioContext.Provider>
    )
}

export { PortfolioContext, PortfolioProvider};