import shell_computer from "../Utils/Images/shell_computer.jpg";
import medical_records_img from "../Utils/Images/medical_records_img.jpg";
import capstone_project_img from "../Utils/Images/capstone_project_img.jpg";
import portfolio_img from "../Utils/Images/portfolio_img.jpg";
import shoppi_app_img from "../Utils/Images/shoppi_app_img.jpg";
import todo_app_img from "../Utils/Images/todo_app_img.jpg";

export const projects = [
    {
        projectTitle: "A Shel",
        projectImg: shell_computer,
        projectNumber: "01",
        projectDescription: "Development of an interactive console with the basic linux interaction commands.",
        projectLanguajes: "C",
        projectSkills: "C, linux enviroment, Shell",
        projectIsLive: false,
        projectCode: "https://github.com/davidperez95/holbertonschool-simple_shell",
        projectLive: "#",
    },
    {
        projectTitle: "Capstone Project",
        projectImg: capstone_project_img,
        projectNumber: "02",
        projectDescription: "Resume reader module, which extracts relevant information and stores it in MongoDB.",
        projectLanguajes: "Javascript, NodeJs, AngularJs, MongoDB",
        projectSkills: "REST API creation, database connection, back and front integration",
        projectIsLive: false,
        projectCode: "https://github.com/davidperez95/CV_Reader_module",
        projectLive: "#",
    },
    {
        projectTitle: "Medical Records",
        projectImg: medical_records_img,
        projectNumber: "03",
        projectDescription: "Medical records web application for psychologists.",
        projectLanguajes: "Python, Django, ReactJs, MySQL",
        projectSkills: "Users management, authentication and authorization, entity relationship model",
        projectIsLive: false,
        projectCode: "https://github.com/davidperez95/medical_records_psy",
        projectLive: "#",
    },
    {
        projectTitle: "Personal Portfolio",
        projectImg: portfolio_img,
        projectNumber: "04",
        projectDescription: "Personal portfolio to show all my projects",
        projectLanguajes: "Javascript, CSS, ReactJs",
        projectSkills: "Components management, props management, dimanic views",
        projectIsLive: true,
        projectCode: "https://github.com/davidperez95/personal_portfolio",
        projectLive: "https://david-perez-portfolio.netlify.app/",
    },
    {
        projectTitle: "Shoppi App",
        projectImg: shoppi_app_img,
        projectNumber: "05",
        projectDescription: "Online shop made with React, with React Pages, Routing and Context",
        projectLanguajes: "Javascript, Tailwind CSS, ReactJs",
        projectSkills: "Context management, fetch of Platzi fake shop API",
        projectIsLive: true,
        projectCode: "https://github.com/davidperez95/React_MarketPlace",
        projectLive: "https://shopiapp.netlify.app/",
    },
    {
        projectTitle: "To Do App",
        projectImg: todo_app_img,
        projectNumber: "06",
        projectDescription: "Functional TODO app with local Storage",
        projectLanguajes: "Javascript, Bootstrap, ReactJs",
        projectSkills: "React portals, React Context",
        projectIsLive: true,
        projectCode: "https://github.com/davidperez95/curso-react-intro",
        projectLive: "https://davidperez95.github.io/curso-react-intro/",
    },
];

export const aboutMe = {
    homePresentation: "I am a Fullstack developer with knowledge in data structures, Software design patterns, search and sort algorithms, and relational and not relational databases. A problem solver with teamwork skills and the ability to follow instructions and work independently. Passionate about the tech world. Great at relating effectively, being flexible, learning autonomously, and constantly updating",
    aboutPresentation: "Hello! I am passionate about the world of technology, initially I studied psychology and at one point in my life I wanted to make a change by pursuing my passions. I like challenges that involve me to get out of my comfort zone, I am a curious person for knowledge and learning. I want to be in a world that does not stop growing and that allows me to grow with it. I studied software development at Holberton School academy where I left with the knowledge and skills of a fullstack developer. I am currently improving my skills by doing projects and linking with groups for the development of large projects. I have knowledge in backend like NodeJs and Django. Frontend skills such as React. The languages I use are Javascript and Python.",
};