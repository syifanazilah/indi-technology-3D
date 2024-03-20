import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import portfolio from "../../public/assets/icons/portfolio.png"
import { Link } from "react-router-dom";

const Portfolio = () => {
  return (
    //ngoding di dalam section
    <section className="mx-10 flex flex-col justify-center items-center">
      <div className="text-start w-[7.7rem]">
        <h1 className="text-white font-medium text-3xl">Portfolio</h1>
        <div className="bg-blue-500 w-full py-[0.15rem] rounded-lg"></div>
      </div>

      <div className="mt-12 mb-12 grid grid-cols-2 gap-5">
        <div className="bg-blue-500 p-3 rounded-lg">
          <img src={portfolio} className="rounded-lg mb-4"/>
          <Link to={'/portfoliodetail1'}><FontAwesomeIcon icon={faPlay} className="pl-4 text-2xl cursor-pointer"/></Link>
        </div>
        <div className="bg-blue-500 p-3 rounded-lg">
          <img src={portfolio} className="rounded-lg mb-4"/>
          <FontAwesomeIcon icon={faPlay} className="pl-4 text-2xl cursor-pointer"/>
        </div>
        <div className="bg-blue-500 p-3 rounded-lg">
          <img src={portfolio} className="rounded-lg mb-4"/>
          <FontAwesomeIcon icon={faPlay} className="pl-4 text-2xl cursor-pointer"/>
        </div>
        <div className="bg-blue-500 p-3 rounded-lg">
          <img src={portfolio} className="rounded-lg mb-4"/>
          <FontAwesomeIcon icon={faPlay} className="pl-4 text-2xl cursor-pointer"/>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;


// {/* <div className="navbar bg-slate-400 ">
//         <ul className="navbar-nav ">
//           {/* <li className="nav-item">
//             <a href="#" className="nav-link">
//               <FontAwesomeIcon icon={faCat} />
//               <span>tes1</span>
//             </a>
//           </li> */}
//           {/* nanti di lanjutin lagi */}
//           {/* <li className="nav-item">
//             <a href="#" className="nav-link">
//               <FontAwesomeIcon icon={faEnvelope} />
//               <span>tes2</span>
//             </a>
//           </li> */}
//           {/* <li className="nav-item">
//             <a href="#" className="nav-link">
//               <FontAwesomeIcon icon={faEnvelope} />
//               <span>tes3</span>
//             </a>
//           </li> */}
//           {/* <li className="nav-item">
//             <a href="#" className="nav-link">
//               <FontAwesomeIcon icon={faEnvelope} />
//               <span>tes4</span>
//             </a>
//           </li> */}
//           {/* <li className="nav-item ">
//             <a href="#" className="nav-link">
//               <FontAwesomeIcon icon={faEnvelope} />
//               <span>tes5</span>
//             </a>
//           </li> */}
//         </ul>
// </div> */}