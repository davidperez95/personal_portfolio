import shell_computer from "../Utils/Images/shell_computer.jpg";
import medical_records_img from "../Utils/Images/medical_records_img.jpg";
import capstone_project_img from "../Utils/Images/capstone_project_img.jpg";

export const projects = [
    {
        projectTitle: "A Shel",
        projectImg: shell_computer,
        projectNumber: "01",
        projectDescription: "Development of an interactive console with the basic linux interaction commands.",
        projectLanguajes: "C",
        projectSkills: "C, linux enviroment, Shell",
        projectIsLive: false,
    },
    {
        projectTitle: "Capstone Project",
        projectImg: capstone_project_img,
        projectNumber: "02",
        projectDescription: "Resume reader module, which extracts relevant information and stores it in MongoDB.",
        projectLanguajes: "Javascript, NodeJs, AngularJs, MongoDB",
        projectIsLrojectSkills: "REST API creation, database connection, back and front integration",
        live: false,
    },
    {
        projectTitle: "Medical Records",
        projectImg: medical_records_img,
        projectNumber: "03",
        projectDescription: "Medical records web application for psychologists.",
        projectLanguajes: "Python, Django, ReactJs, MySQL",
        projectIsLrojectSkills: "Users management, authentication and authorization, entity relationship model",
        live: false,
    },
];