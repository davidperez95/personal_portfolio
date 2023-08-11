import "./styles.projects.css"

function Projects ({ projects }) {

    let currentPath = window.location.pathname;
    let pathTokens = currentPath.split("/");
    let lastPathToken = pathTokens.length - 1;
    let finalPath = pathTokens[lastPathToken];

    return (
        <section className="projects-container">
            <h2>My Projects</h2>
            <div className={`${finalPath === "projects" ? "projects-cards__projects" : "projects-cards__home"}`}>
                {
                    projects.map((project, index) => (
                        <div key={index} className={`${finalPath === "projects" ? "projects-card__projects" : "projects-card__home"}`}>
                            <img src={project.projectImg} alt={project.projectTitle} className="projects-cards__img"/>
                            <h4 className="projects-cards__title">{project.projectTitle}</h4>
                            <p className={`${finalPath === "projects" ? "on-home" : "projects-cards__number"}`}>{project.projectNumber}</p>
                            <p className={`${finalPath === "projects" ? "card-description" : "on-home"}`}><span>Description: </span>{project.projectDescription}</p>
                            <p className={`${finalPath === "projects" ? "card-languajes" : "on-home"}`}><span>Languajes: </span>{project.projectLanguajes}</p>
                            <p className={`${finalPath === "projects" ? "card-skills" : "on-home"}`}><span>Skills: </span>{project.projectSkills}</p>
                        </div>
                    ))
                }
            </div>
        </section>
    )
};

export { Projects };