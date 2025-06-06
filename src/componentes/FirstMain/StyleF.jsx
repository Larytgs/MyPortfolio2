//import { ul } from "framer-motion/client";

function H1(props) {
  return (
    <h1
      className="text-[1.9em] text-center mt-[10%] mb-5 mx-3 font-serif tracking-tight leading-none 
      bg-[url('/img/fundo-de-gradiente-azul-07xqmk2r9n9vmxli.jpg')] bg-cover bg-clip-text text-transparent 
      md:text-[2.8em] 
      lg:text-left"
      style={{ animation: "animate 5s linear infinite" }}
    >
      {props.children}
    </h1>
  );
}

function Ul(props) {
  return (
    <ul
      className="text-center gap-1 grid grid-cols-1 items-center
      sm:grid-cols-3
      lg:flex lg:flex-1 lg:justify-center"
    >
      {props.children}
    </ul>
  );
}

function Lista(props) {
  return (
    <li
      className="bg-[#05060c] text-white m-0.4 flex items-center justify-center rounded-lg
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
      className="p-2 text-[1.3em] text-centerb cursor-grabbing
      sm:px-[35px] sm:text-[1.5em] sm:w-[100%] sm:py-[10px]
      md:text-3xl md:py-[10px] md:px-[20px] md:transition-transform md:duration-500 md:hover:scale-110
      "
    >
      {props.children}
    </button>
  );
}

export default Button;
export { H1, Lista, Ul };
