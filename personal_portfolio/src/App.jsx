import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./Routes/routes";

import { Navbar } from "./Components/Navbar/navbar";


function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <AppRoutes/>
      </BrowserRouter>
    </>
  )
}

export default App
