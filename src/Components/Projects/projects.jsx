import "./styles.projects.css"

function Projects ({ projects }) {

    let currentPath = window.location.pathname;
    let pathTokens = currentPath.split("/");
    let lastPathToken = pathTokens.length - 1;
    let finalPath = pathTokens[lastPathToken];

    function renderProjects(finalPath, projects) {
        if (finalPath === "projects") {
            return (
                projects.map((project, index) => (
                    <div key={index} className="projects-card__projects">
                        <img src={project.projectImg} alt={project.projectTitle} className="projects-cards__img"/>
                        <h4 className="projects-cards__title">{project.projectTitle}</h4>
                        <p className="card-description"><span>Description: </span>{project.projectDescription}</p>
                        <p className="card-languajes"><span>Languajes: </span>{project.projectLanguajes}</p>
                        <p className="card-skills"><span>Skills: </span>{project.projectSkills}</p>
                        <div className="buttons-container">
                            <button className="button"><a href={project.projectCode} target="_blank">Code</a></button>
                            <button className={`${project.projectIsLive ? "button" : "button-disabled"}`}><a href={project.projectLive} target="_blank">Live</a></button>
                        </div>
                    </div>
                ))
            )
        } else {
            return (
                projects.map((project, index) => (
                    <div key={index} className="projects-card__home">
                        <img src={project.projectImg} alt={project.projectTitle} className="projects-cards__img"/>
                        <h4 className="projects-cards__title">{project.projectTitle}</h4>
                        <p className="projects-cards__number">{project.projectNumber}</p>
                    </div>
                ))
            )
        }
    }

    return (
        <section className="projects-container">
            <h2>My Projects</h2>
            <div className={`${finalPath === "projects" ? "projects-cards__projects" : "projects-cards__home"}`}>
                {renderProjects(finalPath, projects)}
            </div>
        </section>
    )
};

export { Projects };