import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <section className="mx-10 text-base lg:ml-60 md:ml-40 sm:mx-16 mt-20 text-blue-500 font-normal lg:text-xl md:text-lg">
        <Link className="hover:font-semibold duration-200" to={'/'}>
          INDI Technology
        </Link>{" "}
        <span className="text-white">| About</span>
      </section>

      <section className="text-white mx-10 lg:ml-60 md:ml-40 sm:mx-16">
        <div>
          <h1 className="mt-14 font-medium text-xl lg:text-3xl md:text-2xl sm:text-xl">
            We are, <span className="font-bold">INDI Technology</span>
          </h1>
          <p className="mt-2 text-lg lg:text-xl md:text-lg font-medium">
            "Your best Digital Transformation Partner."
          </p>
        </div>

        <div>
          <p className="text-lg mt-8 lg:mr-60 md:mr-28 lg:mt-14 md:mt-8 sm:mt-8 lg:text-xl md:text-lg">
            INDI Technology is your partner for digital transformation. We offer
            expert IT services in consultation, analysis, design, development,
            security, and maintenance. With extensive experience, we deliver
            custom IT solutions for various industries. Let us help you create
            engaging digital experiences that deliver results. Choose INDI
            Technology as your trusted digital partner.
          </p>
        </div>

        <div>
          <h1 className="mt-16 lg:text-2xl md:text-xl text-xl font-bold">
            Our <span className="text-blue-500">Vision</span>
          </h1>

          <p className="lg:mr-60 md:mr-28 mt-2 lg:mt-3 md:mt-2 text-base font-normal lg:text-lg md:text-base">
            <span className="lg:text-xl md:text-lg text-lg font-semibold">
              Shaping the future and humanity through technology.
            </span>
            <br />
            We understand Technology is an important part of our society and
            will deliver us to a brighter future. But in the meantime, we also
            realized human is the most crucial part to encourage technology and
            make a brighter future for the world.
          </p>
        </div>

        <div>
          <h1 className="mt-16 lg:text-2xl md:text-xl text-xl font-bold">
            Our <span className="text-blue-500">Mission</span>
          </h1>

          <p className="lg:mr-60 md:mr-28 mt-3 mb-20 text-base font-normal lg:text-lg md:text-base">
            ➤ Technology solutions <br />
            ➤ Innovation Development <br />➤ Talent Development
          </p>
        </div>
      </section>
    </>
  );
};

export default About;
