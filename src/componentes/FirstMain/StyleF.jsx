//import { ul } from "framer-motion/client";

function Ul(props) {
  return (
    <ul
      className="items-center gap-2
      sm:flex sm:auto"
    >
      {props.children}
    </ul>
  );
}

function Lista(props) {
  return (
    <li
      className=" bg-white text-black
      sm:inline-block"
    >
      {props.children}
    </li>
  );
}

function Button(props) {
  return (
    <button
      onClick={props.onClick}
      className="bg-purple-600 text-[1.4em] py-2 px-3 
      sm:bg-green-600 sm:text-[1.5em] sm:py-3 sm:px-9
      md:bg-yellow-300 md:text-2xl md:py-3 md:px-16
      lg:bg-red-300 lg:w-[100%]
      "
    >
      {props.children}
    </button>
  );
}

export default Button;
export { Lista, Ul };
