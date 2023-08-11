import { AiFillGithub, AiFillLinkedin } from "react-icons/ai"
import "./styles.footer.css";

function Footer () {
    return (
        <footer className="footer-container">
            <p>Made with &#129505; by David Perez</p>
            <p>&copy; 2023 | All rights reserved</p>
            <div>
                <a href="https://github.com/davidperez95" target="_blank"><AiFillGithub size={"30px"} color={"#023047"}/></a>
                <a href="https://www.linkedin.com/in/david-perez-cruz/" target="_blank"><AiFillLinkedin size={"30px"} color={"#023047"} /></a>
            </div>
        </footer>
    )
};

export { Footer };