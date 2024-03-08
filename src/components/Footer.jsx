import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-zinc-900 text-zinc-400 p-4 max-w-full">
      <div className="container my-10">
        <div className="grid grid-cols-1 md:grid-cols-3 mt-5">
          <div className="lg:col-span-1 md:col-span-2 text-sm">
            <h2 className="text-base font-bold mb-2 lg:text-lg md:text-base">
              PT INDI TEKNOKREASI INT
            </h2>
            <p className="mr-20">
              Providing IT solutions and digital platforms for your needs.
              Crafting an awesome and useful digital products that grow your
              business.
            </p>

            <div className="social-media-links mt-6 flex">
              <Link to="https://facebook.com/inditechno" target="_blank">
                <img
                  src="/assets/icons/facebook_.png"
                  alt="Facebook"
                  className="mr-2 h-6"
                />
              </Link>
              <Link to="https://twitter.com/inditechno" target="_blank">
                <img
                  src="/assets/icons/x_.png"
                  alt="Twitter"
                  className="mr-2 h-6"
                />
              </Link>
              <Link to="https://www.instagram.com/inditechno/" target="_blank">
                <img
                  src="/assets/icons/instagram_.png"
                  alt="Instagram"
                  className="mr-2 h-6"
                />
              </Link>
              <Link
                to="https://www.linkedin.com/company/inditechno"
                target="_blank">
                <img
                  src="/assets/icons/linkedin_.png"
                  alt="LinkedIn"
                  className="h-6"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-4">
        <hr className="mx-10 opacity-30 lg:mr-10" />
        <div className="mt-7 text-center lg:mx-10 md:mx-10 text-xs lg:text-sm md:text-xs lg:text-right md:text-right sm:text-center">
          <p>&copy;INDI Technology | All Right Reserved 2024.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
