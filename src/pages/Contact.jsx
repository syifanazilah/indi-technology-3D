import React from "react";
import { Link } from "react-router-dom";
const Contact = () => {
  return (
    <>
      <section className="mx-10 text-base lg:ml-60 md:ml-40 sm:mx-16 mt-20 text-blue-500 font-normal lg:text-xl md:text-lg">
        <Link className="hover:font-bold duration-200" to={'/'}>
          INDI Technology
        </Link>{" "}
        <span className="text-white">| Contact</span>
      </section>

      <section className="text-white mx-10 lg:ml-60 md:ml-40 sm:mx-16">
        <div>
          <h1 className="mt-10 lg:mt-14 md:mt-10 font-medium text-xl lg:text-3xl md:text-2xl sm:text-xl">
            PT Indi Teknokreasi Int
          </h1>
          <p className="text-base mt-2 lg:mr-60 md:mr-28 lg:mt-3 md:mt-2 sm:mt-8 lg:text-xl md:text-base">
            Providing IT solutions and digital platforms for your needs.
            Crafting an awesome and useful digital products that grow your
            business.
          </p>
        </div>
      </section>

      <hr className="mx-14 lg:mx-72 md:mx-48 my-10 lg:my-16 md:my-10 opacity-10" />

      <section className="text-white mx-10 lg:ml-60 md:ml-40 sm:mx-16">
        <div>
          <h1 className="lg:text-2xl md:text-xl text-xl font-semibold text-blue-500">
            More Information
          </h1>

          <div className="social-media-links mt-3">
            <Link to="tel:+622122086938" target="_blank" className="flex">
              <img
                src="/assets/icons/phone_.png"
                alt=""
                className="h-5 lg:h-7 md:h-5 mt-3 lg:mt-2 md:mt-3"
              />
              <p className="mt-2 ml-3 text-base lg:text-xl md:text-base flex">
                Phone : (+62) 21 2208 6938
              </p>
            </Link>
            <Link to="mailto:info@indi.tech" target="_blank" className="flex">
              <img
                src="/assets/icons/mail_.png"
                alt=""
                className="h-5 lg:h-7 md:h-5 mt-3 lg:mt-2 md:mt-3"
              />
              <p className="mt-2 ml-3 text-base lg:text-xl md:text-base flex">
                Email : info@indi.tech
              </p>
            </Link>
            <Link
              to="https://maps.app.goo.gl/ZciPyCo89e3NCj766"
              target="_blank"
              className="flex">
              <img
                src="/assets/icons/location_.png"
                alt=""
                className="h-5 lg:h-7 md:h-5 mt-3 lg:mt-2 md:mt-3"
              />
              <p className="mt-2 ml-3 text-base lg:text-xl md:text-base flex">
                Address : Jl Pahlawan Revolusi No. 1, East Jakarta, Indonesia.
              </p>
            </Link>
          </div>
        </div>
      </section>

      <hr className="mx-14 lg:mx-72 md:mx-48 my-10 lg:my-16 md:my-10 opacity-10" />

      <section className="text-white mx-10 lg:ml-60 md:ml-40 sm:mx-16 mb-20">
        <div>
          <h1 className="lg:text-2xl md:text-xl text-xl font-semibold text-blue-500">
            Connect With Us!
          </h1>

          <div className="social-media-links mt-3">
            <Link
              to="https://facebook.com/inditechno"
              target="_blank"
              className="flex">
              <img
                src="/assets/icons/facebook_.png"
                alt=""
                className="h-5 lg:h-7 md:h-5 mt-3 lg:mt-2 md:mt-3"
              />
              <p className="mt-2 ml-3 text-base lg:text-xl md:text-base flex">
                Facebook
              </p>
            </Link>
            <Link
              to="https://twitter.com/inditechno"
              target="_blank"
              className="flex">
              <img
                src="/assets/icons/x_.png"
                alt=""
                className="h-5 lg:h-7 md:h-5 mt-3 lg:mt-2 md:mt-3"
              />
              <p className="mt-2 ml-3 text-base lg:text-xl md:text-base flex">X</p>
            </Link>
            <Link
              to="https://www.instagram.com/inditechno/"
              target="_blank"
              className="flex">
              <img
                src="/assets/icons/instagram_.png"
                alt=""
                className="h-5 lg:h-7 md:h-5 mt-3 lg:mt-2 md:mt-3"
              />
              <p className="mt-2 ml-3 text-base lg:text-xl md:text-base flex">
                Instagram
              </p>
            </Link>
            <Link
              to="https://www.linkedin.com/company/inditechno"
              target="_blank"
              className="flex">
              <img
                src="/assets/icons/linkedin_.png"
                alt=""
                className="h-5 lg:h-7 md:h-5 mt-3 lg:mt-2 md:mt-3"
              />
              <p className="mt-2 ml-3 text-base lg:text-xl md:text-base flex">
                LinkedIn
              </p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
