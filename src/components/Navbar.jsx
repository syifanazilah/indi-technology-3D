import { useCallback, useRef, useState } from "react";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navRef = useRef(null);
  const [isActive, setIsActive] = useState(false);

  const toggleButton = useCallback(() => {
    setIsActive((isActive) => !isActive);
    navRef.current.classList.toggle("-translate-x-96");
  }, [navRef]);

  const navItem = ["Home", "Portfolio", "About", "Contact Us"];

  return (
    <div className="fixed top-0 left-0 w-full py-4 z-[99999]">
      <div className="container">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-poppins font-bold text-blue-800">
            <span className="text-white font-black">Indi</span> Technology
          </h1>

          <nav
            ref={navRef}
            className="absolute top-0 -right-96 ease-out duration-300 transition-transform h-screen bg-blue-900 text-white w-[300px] flex justify-center">
            <ul className="mt-16 text-2xl">
              {navItem.map((item, key) => (
                <li className="my-10 text-white hover:text-blue-500" key={key}>
                  <Link to={"#"}>{item}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <Button isActive={isActive} toggleButton={toggleButton} />
        </div>
      </div>
    </div>
  );
};

const Button = React.memo(({ isActive, toggleButton }) => (
  <button
    className={`z-[99999] ${isActive ? "hamburger-active" : ""} scale-75 md:scale-90`}
    onClick={toggleButton}>
    <span className="hamburger-line origin-top-left transition duration-300 ease-in-out"></span>
    <span className="hamburger-line transition duration-300 ease-in-out"></span>
    <span className="hamburger-line origin-bottom-left transition duration-300 ease-in-out"></span>
  </button>
));

export default Navbar;
