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
        <div className="flex flex-col h-screen justify-center absolute overflow-x-hidden top-0 z-[99999999999999] bg-zinc-950">
          <section className="md:ml-24 lg:ml-18 sm:mx-10">
            <h1 className="mx-8 text-2xl text-white mb-3 font-semibold lg:text-4xl md:text-3xl sm:text-2xl">
              WELCOME TO
            </h1>
            <h1 className="mx-8 text-4xl text-blue-500 font-bold lg:text-6xl md:text-5xl sm:text-4xl">
              INDI TECHNOLOGY
            </h1>
          </section>

          <section className="md:mr-24 md:ml-60 lg:mr-18 sm:mx-10">
            <p className="text-white text-lg mx-8 font-medium my-16 lg:text-right lg:text-2xl md:text-right md:text-xl sm:text-justify sm:text-lg">
              <span className="font-medium">
                Shaping the Future and Humanity through Technology.
              </span>
              <br /> We understand that technology plays a crucial role in our
              society and will lead us towards a brighter future. At the same
              time, we also acknowledge that humans are the most important
              factor in driving technology and creating a brighter future for
              the world.
            </p>
          </section>

          <section className="md:ml-24 lg:ml-18 sm:ml-10">
            <button
              ref={buttonRef}
              className={`text-white btn-loading relative text-lg font-medium mx-8 min-w-[300px] bg-blue-700 px-10 py-4 rounded-full lg:text-xl md:text-lg hover:bg-white hover:text-zinc-950 duration-300 ${disable ? 'opacity-70' : 'opacity-100'}`}
              onClick={() => handleClick()}
              disabled={disable}>
              <p type="button">
                {disable ? `Loading ${floor}%` : 'Explore our new world!'}
              </p>
            </button>
          </section>
        </div>
      )}
    </>
  );
};

export default Greeting;
