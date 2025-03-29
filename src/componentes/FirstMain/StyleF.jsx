//import { ul } from "framer-motion/client";

function Ul(props) {
  return (
    <ul
      className="text-center
      max-lg:flex max-lg:justify-center"
    >
      {props.children}
    </ul>
  );
}

function Lista(props) {
  return (
    <li
      className="inline-block m-1 bg-white text-black 
      max-lg:flex-1 max-lg:flex  
      max-md:m-0.5"
    >
      {props.children}{" "}
    </li>
  );
}

function Button(props) {
  return (
    <button
      onClick={props.onClick}
      className="text-3xl py-[10px] px-[70px] relative 
      max-lg:text-[1.5em] max-lg:w-[100%] max-lg:py-[10px] max-lg:px-[35px]
      max-md:text-[1.4em] 
      max-md:py-2 max-md:px-3"
    >
      {props.children}
    </button>
  );
}

export default Button;
export { Lista, Ul };
