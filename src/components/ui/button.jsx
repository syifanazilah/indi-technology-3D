import { Link } from "react-router-dom";

const ButtonLink = ({ children, to,  ...props }) => {
  return (
    <Link to={to} {...props} className="hover:text-white btn-loading w-full relative text-lg font-medium hover:bg-blue-700 py-2 text-center rounded-full bg-white text-zinc-950 duration-300">
      {children}
    </Link>
  );
};

export default ButtonLink;
