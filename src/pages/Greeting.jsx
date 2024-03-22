import { useEffect, useRef, useState } from "react";

const Greeting = ({ progress }) => {
  const buttonRef = useRef();
  const [open, setOpen] = useState(true);
  const [disable, setDisable] = useState(true);

  useEffect(() => {
    if (progress >= 100) {
      setDisable(false);
    }
  }, [progress]);

  const handleClick = () => {
    setOpen(false);
  };

  const floor = Math.floor(progress);

  return (
    <>
      {open && (
        <div className="flex flex-col h-screen justify-center w-full absolute overflow-x-hidden top-0 z-[99999999999999] bg-zinc-950">
          <section className="container max-w-screen-xl">
            <div className="flex flex-col w-full">
              <div className="w-full">
                <h1 className="text-2xl text-white mb-3 font-semibold text-center md:text-start lg:text-3xl md:text-2xl sm:text-2xl">
                  WELCOME TO
                </h1>
                <img
                  src="/assets/icons/logo_inditech_white.png"
                  alt=""
                  className="w-64 mt-4 mx-auto md:mx-0 h-auto"
                />
              </div>

              <div className="w-full flex justify-end">
                <p className="text-white md:max-w-4xl text-lg font-medium my-8 lg:text-right lg:text-2xl md:text-right md:text-xl sm:text-justify sm:text-lg">
                  <span className="font-medium">
                    Shaping the Future and Humanity through Technology.
                  </span>
                  <br /> We understand that technology plays a crucial role in
                  our society and will lead us towards a brighter future. At the
                  same time, we also acknowledge that humans are the most
                  important factor in driving technology and creating a brighter
                  future for the world.
                </p>
              </div>
            </div>

            <button
              ref={buttonRef}
              className={`text-white btn-loading w-full md:w-[300px] relative text-lg font-medium bg-blue-700 px-10 py-4 rounded-full lg:text-xl md:text-lg hover:bg-white hover:text-zinc-950 duration-300 ${
                disable ? "opacity-70" : "opacity-100"
              }`}
              onClick={() => handleClick()}
              disabled={disable}>
              <p type="button">
                {disable ? `Loading ${floor}%` : "Explore our new world!"}
              </p>
            </button>
          </section>
        </div>
      )}
    </>
  );
};

export default Greeting;
