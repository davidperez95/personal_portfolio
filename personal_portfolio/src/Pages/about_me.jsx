import { Layout } from "../Components/Layout/layout";
import { Presentation } from "../Components/Presentation/presentation";
import { Footer } from "../Components/Footer/footer";

function AboutMe () {
    return (
        <Layout>
            <h1>About Me</h1>
            <Presentation />
            <Footer />
        </Layout>
    );
};

export { AboutMe }