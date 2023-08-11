import { useContext } from "react";
import { PortfolioContext } from "../Context/context";

import { Layout } from "../Components/Layout/layout";
import { Projects } from "../Components/Projects/projects";
import { Footer } from "../Components/Footer/footer";

function Portfolio () {

    const context = useContext(PortfolioContext);

    return (
        <Layout>
            <Projects projects={context.projects}/>
            <Footer />
        </Layout>
    )
};

export { Portfolio };