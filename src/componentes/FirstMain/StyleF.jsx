//import { ul } from "framer-motion/client";

import { motion } from "framer-motion";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

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

// Parte dos cursos
function Curso({ year, title, institution }) {
  return (
    <motion.li
      className="h-24 w-full max-w-[600px] border-l border-gray-800 pl-5 mb-7 sm:h-20"
      initial={{ opacity: 0, y: -30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 1,
        delay: 0.5,
        ease: [0.5, 0, 0, 1],
      }}
      viewport={{ once: false }}
    >
      <div className="flex items-center relative">
        <span className="absolute bg-[var(--main-color)] w-10 h-7 flex justify-center items-center rounded-full -left-10 top-0">
          <div
            style={{
              background:
                "linear-gradient(to top, #6ad0ff, #083d73, #083d73, #6ad0ff)",
              borderRadius: "50%",
              display: "inline-flex",
              padding: "8px",
              width: "40px",
              height: "40px",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <FontAwesomeIcon icon={faBriefcase} size="lg" />
          </div>
        </span>
        <p className="mx-5 mb-2 px-3.5 py-[7px] text-xs text-[var(--light-gray)] uppercase bg-[rgba(37,37,37,0.44)] rounded-[20px] font-bold">
          {year}
        </p>
      </div>
      <h5 className="text-sm uppercase font-bold ml-5">
        {title}
        <span className="text-[var(--light-gray)] opacity-80 text-[15px] ml-1">
          - {institution}
        </span>
      </h5>
    </motion.li>
  );
}

// Parte dos botoes
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
export { H1, Curso, Lista, Ul };
