import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import TestShadow from "./pages/tes";
import { PortfolioDetail1 } from "./pages/PortfolioDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/portfolio",
        element: <Portfolio />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/portfoliodetail1",
        element: <PortfolioDetail1/>,
      },
    ],
  },
  {
    path: "/test",
    element: <TestShadow />,
  },
]);

export default router;
