import { motion } from "framer-motion";

//Todas as Sections
function Section(props) {
  return (
    <section
      className="mt[1%] mb-[1%] p-7 align-middle
    max-md:p-5"
    >
      {props.children}
    </section>
  );
}

//Todos os textos
function Text(props) {
  return (
    <p className="text-lg text-left pt-5 pb-5 pl-0 pr-0">{props.children}</p>
  );
}

//skill-wrapper as divs da ul - Skills.jsx
function SkillWrapper(props) {
  return (
    <div className="flex items-center justify-between mt-7 mb-3">
      {props.children}
    </div>
  );
}

//Cards as divs do conhecimentos - Knowledge.jsx
function Cards(props) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }} // Começa invisível e deslocado para a esquerda
      animate={{ opacity: 1, x: 0 }} // Anima para a posição normal
      transition={{ duration: 1.5, ease: "easeOut" }} // Duração e suavização da animação
      className="ml-3 bg-[#333] rounded-2xl w-[400px] h-[300px] m-auto align-middle p-4 text-left
      max-lg:w-[100%] max-lg:h-[100%]
      max-md:ml-0 max-md:m-2"
    >
      {props.children}
    </motion.div>
  );
}
//H3 e P dos Cards do conhecimentos - Knowledge.jsx
function H3(props) {
  return (
    <h3
      className="text-2xl font-bold mt-6 mb-2 ml-0 mr-0 max-md:text-lg
      max-sm:text-[1.1em]"
    >
      {props.children}
    </h3>
  );
}
function P(props) {
  return (
    <p
      className="text-lg text-white max-md:text-md
      "
    >
      {props.children}
    </p>
  );
}

//De cada Projeto - Projects.jsx
function Project(props) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }} // Começa invisível e deslocado para a esquerda
      animate={{ opacity: 1, x: 0 }} // Anima para a posição normal
      transition={{ duration: 1.5, ease: "easeOut" }} // Duração e suavização da animação
      className={`inline-grid grid-cols-2 mb-[5%] m-2.5
      max-md:grid-cols-1 ${props.className}`}
    >
      {props.children}
    </motion.div>
  );
}
//H3 dos Projetos - Projects.jsx
function TitleH3(props) {
  return (
    <h3 className="H3 absolute text-[#6ad0ff] text-2xl texto-sm/7 opacity-0 translate-x-[-50%] translate-y-[-80%] transform transition duration-250 ease-in-out">
      {props.children}
    </h3>
  );
}

export default Section;
export { Text, SkillWrapper, Cards, H3, P, TitleH3, Project };
