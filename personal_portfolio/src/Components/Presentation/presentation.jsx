import "./styles.presentation.css";
import profile_image from "../../Utils/Images/profile_image.png"

function Presentation ({ aboutMe }) {

    let currentPath = window.location.pathname;
    let pathTokens = currentPath.split("/");
    let lastPathToken = pathTokens.length - 1;
    let finalPath = pathTokens[lastPathToken];

    return (
        <section className="presentation-container">
            <article className="presentation-article__container">
                <h2>My name is <span>David</span></h2>
                <p>{finalPath === "about_me" ? aboutMe.aboutPresentation : aboutMe.homePresentation}</p>
            </article>

            <figure className="presentation-figure">
                <img 
                    src={profile_image}
                    alt="Foto_Perfil" 
                    className="presentation-figure__image"
                />
                <div>
                    <p><span>1+</span> years of experience</p>
                </div>
            </figure>
        </section>
    )
};

export { Presentation };