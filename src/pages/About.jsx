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
            ⚪ Tech Solution: We are able to assist our partners to achieve their digital transformation goals with the righteous technology solution their need <br />
            ⚪ Innovation Development: We have a great desire to produce innovative technology that will able to improve society and encourage our partners with emerging technology and proper toward their goals <br />
            ⚪ Talent Development: As we believe peoples are the most essential part to produce appropriate technology for a brighter future, we are enthusiastic to encourage them to improve their skills in technology          </p>
        </div>

        <div>
          <h1 className="mt-16 lg:text-2xl md:text-xl text-xl font-bold">
            What <span className="text-blue-500">We Assist</span>
          </h1>

          <p className="lg:mr-60 md:mr-28 mt-3 mb-20 text-base font-normal lg:text-lg md:text-base">
              ⚪ Consultation: assist you with deep analysis, critical thinking, creative idea, and wise advice to make sure you can achieve your digital transformation goals<br />
              ⚪ Analysis and design: with a great design structure and interface that will be make your digital transformation goals exquisting<br />
              ⚪ Development and deployment: our expertise in programming, digital marketing, and creative design dev-teams will assist to obtain your digital transformation goals<br/>
              ⚪ Maintenance: not just create and deliver your digital transformation goals, but we will assure and help you with maintenance to keep your product is 100% ready to go</p>
          </div>

          <div>
          <h1 className="mt-16 lg:text-2xl md:text-xl text-xl font-bold">
            What <span className="text-blue-500">We Service</span>
          </h1>

          <p className="lg:mr-60 md:mr-28 mt-3 mb-20 text-base font-normal lg:text-lg md:text-base">
              ⚪ mobile/app: providing an app as a solution for customer problem<br />
              ⚪ web development: we develop websites for our partners with the lates technology and creative design<br />
              ⚪ digital marketing: we provide marketing solutions with the digital platform<br/>
              ⚪ system development: providing tailor-mode integrated system as a solutions in several sector <br/>
              ⚪ internet of things: research about internet of things technology as a part of innovation development<br/>
              ⚪ Cyber security: defence the system by cyber security technique <br/>
              ⚪ End to end service provider: we provide license software, hardware and infrastucture from our partners to help our client
              </p>
          </div>
      </section>
    </>
  );
};

export default About;
