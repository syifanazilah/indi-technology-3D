import { Link } from "react-router-dom";

const Card = ({ to, children }) => {
  return (
    <div className="overflow-hidden rounded-lg">
      <Link to={to} className="group relative overflow-hidden flex">
        {children}
      </Link>
    </div>
  );
};

export const CardImg = ({ src }) => {
  return (
    <img
      src={src}
      className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
    />
  );
};

export const CardTitle = ({ children }) => {
  return (
    <div className="bg-blue-800/80 absolute bottom-0 left-0 w-full h-[60%] flex gap-[45px] items-center flex-col translate-y-full transition-transform duration-500 ease-out group-hover:translate-y-0">
      <div className="mt-2 w-[3.5rem] py-[0.170rem] rounded-md bg-white"></div>
      <h4 className="font-medium text-xl">{children}</h4>
    </div>
  );
};

export default Card;
