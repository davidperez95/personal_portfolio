import { NavLink } from "react-router-dom";
import "./styles.navbar.css"

function Navbar () {
    return (
        <nav className="navbar-container">
            <ul className="navbar-items">
                <li className="navbar-item"><NavLink to={"/"}>Home</NavLink></li>
                <li className="navbar-item"><NavLink to={"/about_me"}>About Me</NavLink></li>
                <li className="navbar-item"><NavLink to={"/projects"}>Projects</NavLink></li>
                <li className="navbar-item"><NavLink to={"/coperations"}>Coperations</NavLink></li>
            </ul>

            <button className="navbar-button"><NavLink to={"https://www.linkedin.com/in/david-perez-cruz/"}>Contact Me</NavLink></button>
        </nav>
    )
};

export { Navbar };