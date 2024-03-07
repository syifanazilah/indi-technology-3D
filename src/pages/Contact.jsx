import React from 'react';
import facebook from '../assets/icons/facebook_.png';
import x from '../assets/icons/x_.png';
import instagram from '../assets/icons/instagram_.png';
import linkin from '../assets/icons/linkedin_.png';
import phone from '../assets/icons/phone_.png';
import email from '../assets/icons/mail_.png';
import location from '../assets/icons/location_.png';


const Contact = () => {
  return (
    <section className="bg-zinc-950">
      <div className="text-white ml-60">
        <a className="hover:font-bold duration-200" href="home.html">INDI Technology</a>  <span className="text-white">|  Contact</span>
      </div>

      <div className="text-white mx-60">
        <h1 className="mt-14 text-3xl font-medium">PT Indi Teknokreasi Int</h1>
        <p className="mt-3 text-xl">Providing IT solutions and digital platforms for your needs. Crafting an awesome and useful digital products that grow your business.</p>
      </div>

      <hr className="mx-72 my-16 opacity-10" />

      <div className="text-white mx-60">
        <div>
          <h1 className="mt-16 text-2xl font-semibold text-blue-500">
            More Information
          </h1>

          <div className="social-media-links mt-3">
            <a href="tel:+622122086938" target="_blank" className="flex">
              <img src={phone} alt="Phone Icon" className="h-7 mt-2" /><p className="mt-2 ml-3 text-xl flex">Phone : (+62) 21 2208 6938</p>
            </a>
            <a href="mailto:info@indi.tech" target="_blank" className="flex">
              <img src={email} alt="Email Icon" className="h-7 mt-2" /><p className="mt-2 ml-3 text-xl">Email : info@indi.tech</p>
            </a>
            <a href="https://maps.app.goo.gl/ZciPyCo89e3NCj766" target="_blank" className="flex">
              <img src={location} alt="Address Icon" className="h-7 mt-2" /><p className="mt-2 ml-3 text-xl">Address : Jl Pahlawan Revolusi No. 1, East Jakarta, Indonesia.</p>
            </a>
          </div>
        </div>
      </div>

      <hr className="mx-72 my-16 opacity-10" />
      <div className="text-white mx-60 mb-20">
        <div>
          <h1 className="mt-16 text-2xl font-semibold text-blue-500">
            Connect With Us!
          </h1>

          <div className="social-media-links mt-3">
            <a href="https://facebook.com/inditechno" target="_blank" className="flex">
              <img src={facebook} alt="Facebook Icon" className="h-7 mt-2" /><p className="mt-2 ml-3 text-xl flex">Facebook</p>
            </a>
            <a href="https://twitter.com/inditechno" target="_blank" className="flex">
              <img src={x} alt="Twitter Icon" className="h-7 mt-2" /><p className="mt-2 ml-3 text-xl flex">Twitter</p>
            </a>
            <a href="https://www.instagram.com/inditechno/" target="_blank" className="flex">
              <img src={instagram} alt="Instagram Icon" className="h-7 mt-2" /><p className="mt-2 ml-3 text-xl flex">Instagram</p>
            </a>
            <a href="https://www.linkedin.com/company/inditechno" target="_blank" className="flex">
              <img src={linkin} alt="LinkedIn Icon" className="h-7 mt-2" /><p className="mt-2 ml-3 text-xl flex">LinkedIn</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
