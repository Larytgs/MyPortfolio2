import { motion } from "framer-motion";

//Todas as Sections
function Section(props) {
  return (
    <section className="col-span-12 m-2 text-center md:m-5">
      {props.children}
    </section>
  );
}

//Todos os textos
function Text(props) {
  return <p className="text-lg text-left py-5 px-0">{props.children}</p>;
}

//skill-wrapper as divs da ul - Skills.jsx
function SkillWrapper(props) {
  return (
    <div className="col-span-12 flex items-center justify-between mt-7 mb-3">
      {props.children}
    </div>
  );
}

//Cards as divs do conhecimentos - Knowledge.jsx
function Card(props) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }} // Começa invisível e deslocado para a esquerda
      animate={{ opacity: 1, x: 0 }} // Anima para a posição normal
      transition={{ duration: 1.5, ease: "easeOut" }} // Duração e suavização da animação
      className="ml-3 bg-[#333] rounded-2xl my-3 align-middle p-4 text-left grow basis-[350px]"
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
      className={`inline-grid grid-cols-2 mb-[5%] mt-2.5
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
function TitleH32(props) {
  return (
    <h3
      className="absolute left-1/2 top-1/2 text-center text-[#6ad0ff] text-xl opacity-0 transform -translate-x-1/2 -translate-y-[80%] transition duration-250 ease-in-out group-hover:opacity-100 group-hover:-translate-y-[400%] w-[300px]
    
    max-[400px]:group-hover:-translate-y-[250%]"
    >
      {props.children}
    </h3>
  );
}

export default Section;
export { Text, SkillWrapper, Card, H3, P, TitleH3, TitleH32, Project };
