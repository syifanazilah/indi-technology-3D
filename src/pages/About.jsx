import React from 'react';

const About = () => {
  return (
    <section className="text-white ml-60 md:-mt-10">
      <div className="ml-0 mt-20 text-xl text-blue-500 font-normal">
        <a className="hover:font-bold duration-200" href="home.html">INDI Technology</a>  <span className="text-white">|  About</span>
      </div>

      <div>
        <h1 className="mt-14 text-3xl font-medium">We are, <span className="font-bold">INDI Technology</span></h1>
        <p className="mt-2 text-xl font-medium">"Your best Digital Transformation Partner."</p>
      </div>


      <div>
        <p className="mr-60 mt-14 text-xl">INDI Technology is your partner for digital transformation. We offer expert IT services in consultation, analysis, design, development, security, and maintenance. With extensive experience, we deliver custom IT solutions for various industries. Let us help you create engaging digital experiences that deliver results. Choose INDI Technology as your trusted digital partner.</p>
      </div>

      <div>
        <h1 className="mt-16 text-2xl font-bold">
          Our <span className="text-blue-500">Vision</span>
        </h1>

        <p className="mt-3 mr-60 text-lg font-normal">
          <span className="text-xl font-semibold">Shaping the future and humanity through technology.</span>
          <br />
          We understand Technology is an important part of our society and will deliver us to a brighter future. But in the meantime, we also realized human is the most crucial part to encourage technology and make a brighter future for the world.
        </p>
      </div>

      <div>
        <h1 className="mt-16 text-2xl font-bold">
          Our <span className="text-blue-500">Mission</span>
        </h1>

        <div className="mt-3 mr-60 mb-20 text-lg font-normal grid ">
          <p>➤ Technology solutions</p>
          <p>➤ Innovation Development</p>
          <p>➤ Talent Development</p>
        </div>
      </div>
    </section>
  );
};

export default About;
