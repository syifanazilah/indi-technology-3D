import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import portfolio from "/assets/icons/portfolio.png"
import { Link } from "react-router-dom";

const Portfolio = () => {

  return (
    //ngoding di dalam section
    <section className="mx-10 flex flex-col justify-center items-center">
      <div className="text-start w-[7.6rem] mb-12">
        <h1 className="text-white font-medium text-3xl">Portfolio</h1>
        <div className="flex space-x-1 mt-2">
          <div className="bg-blue-500 w-[3rem] py-[0.10rem] rounded-lg"></div>
          <div className="bg-blue-500 w-full py-[0.10rem] rounded-lg"></div>
        </div>
      </div>

      <div className="mb-12 grid grid-cols-2 gap-10">

        <div className="bg-blue-500 p-3 rounded-lg kontener">
          <div className="boxcard">
            <img src={portfolio} className="rounded-lg"/>
            <div className="layercard">
              <div className="mt-2 w-[3.5rem] py-[0.170rem] rounded-md bg-white"></div>
              <h4 className="font-medium text-xl">Website project 1</h4>
            </div>
          </div>
          <Link to={'/portfoliodetail1'}><FontAwesomeIcon icon={faPlay} className="mt-4 pl-4 text-2xl cursor-pointer"/></Link>
        </div>

        <div className="bg-blue-500 p-3 rounded-lg kontener">
          <div className="boxcard">
            <img src={portfolio} className="rounded-lg"/>
            <div className="layercard">
              <div className="mt-2 w-[3.5rem] py-[0.170rem] rounded-md bg-white"></div>
              <h4 className="font-medium text-xl">Website project 2</h4>
            </div>
          </div>
          <Link to={'/portfoliodetail2'}><FontAwesomeIcon icon={faPlay} className="mt-4 pl-4 text-2xl cursor-pointer"/></Link>
        </div>

        <div className="bg-blue-500 p-3 rounded-lg kontener">
          <div className="boxcard">
            <img src={portfolio} className="rounded-lg"/>
            <div className="layercard">
              <div className="mt-2 w-[3.5rem] py-[0.170rem] rounded-md bg-white"></div>
              <h4 className="font-medium text-xl">Website project 3</h4>
            </div>
          </div>
          <Link to={'/portfoliodetail3'}><FontAwesomeIcon icon={faPlay} className="mt-4 pl-4 text-2xl cursor-pointer"/></Link>
        </div>

        <div className="bg-blue-500 p-3 rounded-lg kontener">
          <div className="boxcard">
            <img src={portfolio} className="rounded-lg"/>
            <div className="layercard">
              <div className="mt-2 w-[3.5rem] py-[0.170rem] rounded-md bg-white"></div>
              <h4 className="font-medium text-xl">Website project 4</h4>
            </div>
          </div>
          <Link to={'/portfoliodetail4'}><FontAwesomeIcon icon={faPlay} className="mt-4 pl-4 text-2xl cursor-pointer"/></Link>
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