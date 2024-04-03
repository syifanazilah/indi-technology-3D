import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import TestShadow from "./pages/tes";
import {
  PortfolioDetail1,
  PortfolioDetail2,
  PortfolioDetail3,
  PortfolioDetail4,
  PortfolioDetail5,
  PortfolioDetail6,
  PortfolioDetail7,
  PortfolioDetail8,
} from "./pages/PortfolioDetail";

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
        element: <PortfolioDetail1 />,
      },
      {
        path: "/portfoliodetail2",
        element: <PortfolioDetail2 />,
      },
      {
        path: "/portfoliodetail3",
        element: <PortfolioDetail3 />,
      },
      {
        path: "/portfoliodetail4",
        element: <PortfolioDetail4 />,
      },
      {
        path: "/portfoliodetail5",
        element: <PortfolioDetail5 />,
      },
      {
        path: "/portfoliodetail6",
        element: <PortfolioDetail6 />,
      },
      {
        path: "/portfoliodetail7",
        element: <PortfolioDetail7 />,
      },
      {
        path: "/portfoliodetail8",
        element: <PortfolioDetail8 />,
      },
    ],
  },
  {
    path: "/test",
    element: <TestShadow />,
  },
]);

export default router;
