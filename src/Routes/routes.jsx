import { useRoutes } from "react-router-dom";

import { Home } from "../Pages/home";
import { AboutMe } from "../Pages/about_me";
import { Portfolio } from "../Pages/portfolio";
import { Coperations } from "../Pages/coperations";

const AppRoutes = () => {
    const routes = useRoutes([
      {path: "/", element: <Home />},
      {path: "/about_me", element: <AboutMe/>},
      {path: "/projects", element: <Portfolio />},
      {path: "/coperations", element: <Coperations />},
    ]);
  
    return routes
};

export { AppRoutes };