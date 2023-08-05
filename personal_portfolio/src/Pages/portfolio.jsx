import { useContext } from "react";
import { PortfolioContext } from "../Context/context";

import { Layout } from "../Components/Layout/layout";
import { Projects } from "../Components/Projects/projects";

function Portfolio () {

    const context = useContext(PortfolioContext);

    return (
        <Layout>
            <h1>Projects</h1>
            <Projects projects={context.projects}/>
        </Layout>
    )
};

export { Portfolio };