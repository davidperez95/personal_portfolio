import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./Routes/routes";

import { PortfolioProvider } from "./Context/context";

import { Navbar } from "./Components/Navbar/navbar";


function App() {

  return (
    <>
      <PortfolioProvider>
        <BrowserRouter>
          <Navbar />
          <AppRoutes/>
        </BrowserRouter>
      </PortfolioProvider>
    </>
  )
}

export default App
