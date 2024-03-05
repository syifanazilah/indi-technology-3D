import { useCallback, useRef, useState } from "react";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navRef = useRef(null);

  const navItem = ["Home", "Portfolio", "About", "Contact Us"];

  return (
    <div className="fixed top-0 left-0 w-full py-4 z-[99999]">
      <div className="container">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-poppins">Indi Technology</h1>

          <nav
            ref={navRef}
            className="absolute top-0 -right-96 ease-out duration-300 transition-transform h-screen bg-black text-white w-[300px] flex justify-center">
            <ul className="mt-16 text-2xl">
              {navItem &&
                navItem.map((item, key) => (
                  <li className="my-4 text-white hover:text-blue-500" key={key}>
                    <Link to={"#"}>{item}</Link>
                  </li>
                ))}
            </ul>
          </nav>

          <Button navRef={navRef} />
        </div>
      </div>
    </div>
  );
};

const Button = React.memo(({ navRef }) => {
  const [isActive, setIsActive] = useState(false);
  const buttonRef = useRef(null);

  const toggleButton = useCallback(() => {
    setIsActive(!isActive);
    buttonRef.current.classList.toggle("hamburger-active");
    navRef.current.classList.toggle("-translate-x-96");
  }, [navRef]);

  return (
    <button
      className={`z-[99999] ${isActive ? "hamburger-active" : ""}`}
      onClick={toggleButton}
      ref={buttonRef}>
      <span className="hamburger-line origin-top-left transition duration-300 ease-in-out"></span>
      <span className="hamburger-line transition duration-300 ease-in-out"></span>
      <span className="hamburger-line origin-bottom-left transition duration-300 ease-in-out"></span>
    </button>
  );
});

export default Navbar;
