import shell_computer from "../../Utils/Images/shell_computer.jpg";
import medical_records_img from "../../Utils/Images/medical_records_img.jpg";
import capstone_project_img from "../../Utils/Images/capstone_project_img.jpg";

import "./styles.projects.css"

function Projects () {
    return (
        <section className="projects-container">
            <h2>My Projects</h2>
            <div className="projects-cards">
                <div>
                    <img src={shell_computer} alt="" />
                    <h4>A Shell</h4>
                    <p>01</p>
                </div>
                <div>
                <img src={capstone_project_img} alt="" />
                    <h4>Capstone Project</h4>
                    <p>02</p>
                </div>
                <div>
                <img src={medical_records_img} alt="" />
                    <h4>Medical Records</h4>
                    <p>03</p>
                </div>
            </div>
        </section>
    )
};

export { Projects };