import { Layout } from "../Components/Layout/layout";
import { Presentation } from "../Components/Presentation/presentation";
import { Stack } from "../Components/Stack/stack";
import { Projects } from "../Components/Projects/projects";
import { Footer } from "../Components/Footer/footer";

function Home () {
    return (
        <Layout>
            <Presentation />
            <Stack />
            <Projects />
            <Footer />
        </Layout>
    )
};

export { Home };