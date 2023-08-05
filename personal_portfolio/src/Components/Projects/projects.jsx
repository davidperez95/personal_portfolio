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
                        <div key={index}>
                            <img src={project.projectImg} alt={project.projectTitle} className="projects-cards__img"/>
                            <h4>{project.projectTitle}</h4>
                            <p>{project.projectNumber}</p>
                            <p className={`${finalPath === "projects" ? "" : "on-home"}`}>{project.projectDescription}</p>
                        </div>
                    ))
                }
            </div>
        </section>
    )
};

export { Projects };