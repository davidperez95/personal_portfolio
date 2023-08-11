import { useContext } from "react";
import { PortfolioContext } from "../Context/context";

import { Layout } from "../Components/Layout/layout";
import { Presentation } from "../Components/Presentation/presentation";
import { Footer } from "../Components/Footer/footer";

function AboutMe () {

    const context = useContext(PortfolioContext);

    return (
        <Layout>
            <Presentation aboutMe={context.aboutMe}/>
            <Footer />
        </Layout>
    );
};

export { AboutMe }