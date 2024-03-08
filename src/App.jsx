import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Navbar from "./components/Navbar";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <>
      <Navbar isHome={isHome} />

      <main className={`${isHome ? "" : "pt-20 container overflow-x-hidden relative"}`}>
        <Outlet />
      </main>

      {!isHome && <Footer />}
    </>
  );
}

export default App;
