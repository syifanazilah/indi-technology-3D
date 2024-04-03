import "./App.css";
import Navbar from "./components/Navbar";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <>
      <Navbar isHome={isHome} />

      <main className={`${isHome ? "" : "pt-20 overflow-x-hidden relative"}`}>
        <Outlet />
      </main>

      {!isHome && <Footer />}
    </>
  );
}

export default App;
