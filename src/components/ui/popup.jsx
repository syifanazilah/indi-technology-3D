import ButtonLink from "./button";

const PopUp = ({ children, to }) => {
  return (
    <div className="flex flex-col gap-5 md:w-2/3">
      <h1 className="text-center text-base md:text-lg">{children}</h1>
      <ButtonLink to={to} className="bg-white text-black w-full">
        visit
      </ButtonLink>
    </div>
  );
};

export default PopUp;
