//import { ul } from "framer-motion/client";

function Ul(props) {
  return (
    <ul
      className="text-center gap-1 grid grid-cols-2 items-center
      lg:flex lg:flex-1 lg:justify-center"
    >
      {props.children}
    </ul>
  );
}

function Lista(props) {
  return (
    <li
      className="bg-white text-black m-0.4 flex items-center justify-center
      lg:flex lg:flex-1"
    >
      {props.children}
    </li>
  );
}

function Button(props) {
  return (
    <button
      onClick={props.onClick}
      className="p-2 text-[1.3em] text-center
      sm:px-[35px] sm:text-[1.5em] sm:w-[100%] sm:py-[10px]
      md:text-3xl md:py-[10px] md:px-[20px]
      "
    >
      {props.children}
    </button>
  );
}

export default Button;
export { Lista, Ul };
