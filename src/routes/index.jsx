import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Portfolio from "../components/portfolio/Portfolio";
import PortfolioPage from "../components/portfolio-page/PortfolioPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/portfolio",
    element: <Portfolio />,
  },
  {
    path: "/portfolio/:id",
    element: <PortfolioPage />
  }
])