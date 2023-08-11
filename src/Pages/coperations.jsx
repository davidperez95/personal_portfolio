import { Layout } from "../Components/Layout/layout";
import { CoperationsComponent } from "../Components/Coperations_Component/coperationsComponent"
import { Footer } from "../Components/Footer/footer";

function Coperations () {
    return (
        <Layout>
            <CoperationsComponent />
            <Footer />
        </Layout>
    )
};

export { Coperations };