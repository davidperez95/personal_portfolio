import "./styles.presentation.css";
import profile_image from "../../Utils/Images/profile_image.png"

function Presentation () {
    return (
        <section className="presentation-container">
            <article className="presentation-article__container">
                <h2>My name is <span>David</span></h2>
                <p>Content</p>
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