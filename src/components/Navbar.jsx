import { memo, useCallback, useRef, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ isHome = false }) => {
  const navRef = useRef(null);
  const navParentRef = useRef();
  const [isActive, setIsActive] = useState(false);
  

  const toggleButton = useCallback(() => {
    setIsActive((isActive) => !isActive);
    navRef.current.classList.toggle("-translate-x-96");
  }, [navRef]);

  const navItem = [
    { name: "Home", url: "/" },
    { name: "About", url: "/about" },
    { name: "Portfolio", url: "/portfolio" },
    { name: "Contact", url: "/contact" },
  ];

  window.onscroll = () => {
    if (window.scrollY > 0) {
      navParentRef.current.classList.add("bg-black/20");
      navParentRef.current.classList.add("backdrop-blur-lg");
    } else {
      navParentRef.current.classList.remove("bg-black/20");
      navParentRef.current.classList.remove("backdrop-blur-lg");
    }
  }

  return (
    <div className="fixed top-0 left-0 w-full py-4 z-20" ref={navParentRef}>
      <div className="container">
        <div className="flex justify-between items-center">
          {isHome ? (
            <img src="/assets/icons/logo_inditech_white.png" alt="" style={{ width: '150px' , transform: 'translateY(15px)'  }} />
          ) : (
            <Link to="/">
              <img src="/assets/icons/logo_inditech_white.png" alt="" style={{ width: '150px' , transform: 'translateY(15px)'  }} />
            </Link>
          )}

          <nav
            ref={navRef}
            className="absolute top-0 -right-96 ease-out duration-300 transition-transform h-screen bg-blue-900 text-white w-[300px] flex justify-center">
            <ul className="mt-16 text-2xl">
              {navItem.map((item, key) => (
                <li className="my-10 text-white hover:text-blue-500" key={key}>
                  <Link to={item.url} onClick={toggleButton}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <Button
            isActive={isActive}
            toggleButton={toggleButton}
            isHome={isHome}
          />
        </div>
      </div>
    </div>
  );
};

const Button = memo(({ isActive, toggleButton, isHome }) => (
  <button
    className={`z-[99999] ${
      isActive ? "hamburger-active" : ""
    } scale-75 md:scale-90`}
    onClick={toggleButton}>
    <span
      className={`hamburger-line origin-top-left transition duration-300 ease-in-out ${
        isHome ? "bg-blue-900" : "bg-white"
      }`}></span>
    <span
      className={`hamburger-line transition duration-300 ease-in-out ${
        isHome ? "bg-blue-900" : "bg-white"
      }`}></span>
    <span
      className={`hamburger-line origin-bottom-left transition duration-300 ease-in-out ${
        isHome ? "bg-blue-900" : "bg-white"
      }`}></span>
  </button>
));

export default Navbar;
