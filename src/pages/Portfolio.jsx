import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faCat } from "@fortawesome/free-solid-svg-icons";
const Portfolio = () => {
  return (
    //ngoding di dalam section
    <section>
      <div className="navbar h-screen w-20 fixed bg-slate-400 ">
        <ul className="navbar-nav m-0 p-0 flex list-none flex-col items-center">
          <li className="nav-item">
            <a href="#" className="nav-link">
            <FontAwesomeIcon icon={faCat} />
              <span>tes1</span>
            </a>
          </li>
{/* nanti di lanjutin lagi */}
          <li className="nav-item">
            <a href="#" className="nav-link">
              <FontAwesomeIcon icon={faEnvelope} />
              <span>tes2</span>
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              <FontAwesomeIcon icon={faEnvelope} />
              <span>tes3</span>
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              <FontAwesomeIcon icon={faEnvelope} />
              <span>tes4</span>
            </a>
          </li>
          <li className="nav-item w-full last:mt-auto">
            <a href="#" className="nav-link">
              <FontAwesomeIcon icon={faEnvelope} />
              <span>tes5</span>
            </a>
          </li>

          
        </ul>
      </div>

      <div>
        <h1 className="text-3xl font-bold">Portofolio</h1>
        <p className="mt-4 text-lg">
          Berikut adalah beberapa portofolio yang telah saya buat.
        </p>
      </div>
    </section>
  );
};

export default Portfolio;
