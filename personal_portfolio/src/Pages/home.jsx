import { useContext } from "react";
import { PortfolioContext } from "../Context/context";

import { Layout } from "../Components/Layout/layout";
import { Presentation } from "../Components/Presentation/presentation";
import { Stack } from "../Components/Stack/stack";
import { Projects } from "../Components/Projects/projects";
import { Footer } from "../Components/Footer/footer";

function Home () {

    const context = useContext(PortfolioContext);

    return (
        <Layout>
            <Presentation />
            <Stack />
            <Projects projects={context.projects}/>
            <Footer />
        </Layout>
    )
};

export { Home };