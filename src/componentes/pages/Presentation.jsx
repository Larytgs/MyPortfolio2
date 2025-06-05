import Subtitulo from "../styles/Subtitulo";
import Section, { Text } from "../styles/Section";

import { motion } from "framer-motion";

function Presentation() {
  return (
    <Section>
      <motion.section
        className="col-span-12 m-auto gap-7
        md:flex"
        // Animação para a section cair suavemente:
        initial={{ opacity: 0, y: -30 }} // Começa invisível e deslocado para cima
        whileInView={{ opacity: 1, y: 0 }} // Anima para visível e na posição certa
        transition={{
          duration: 1.5,
          delay: 0.2,
          ease: [0.5, 0, 0, 1], // Aproxima da cubic-bezier(0.5, 0, 0, 1)
        }}
        viewport={{ once: false }} // anima toda vez ao entrar na viewport>
      >
        <figure
          className="m-auto cursor-zoom-in transition-transform duration-500 hover:scale-110
          md:w-[450px] 
          lg:w-[550px]"
        >
          <img src="/img/Tendencias-de-tecnologia-2023-Capa.jpg" alt="" />
        </figure>

        <div className="text-center">
          <Subtitulo className="mt-6 md:mt-0">
            Um pequeno palco em meio à imensidão cósmica.
          </Subtitulo>
          <Text>
            Olá, me chamo Laryssa (ou Lary😜), tenho 26 anos e sou de Curitiba,
            morando Itapoá-SC.
            <br />
            Sou graduada em Análises e desenvolvimento de sistemas, estudo
            programação desde 2020, com ênfase em desenvolvimento web.
            <br />
            Atualmente, concluí minha Pós-Graduação em Front-end, com foco em
            estudos com React e API.
          </Text>

          <p
            className="underline underline-offset-4 text-left
              sm:text-2xl"
          >
            Email
          </p>
          <span className="sm:text-lg block text-left">
            siteslarytgs@gmail.com
          </span>
          {/* <ul className="flex gap-4 justify-evenly text-left">
            <li>
              <p
                className="underline underline-offset-4
              sm:text-2xl"
              >
                Nome
              </p>
              <span className="sm:text-lg">Laryssa Tortato Gomes da Silva</span>
            </li>
            <li>
              <p
                className="underline underline-offset-4
              sm:text-2xl"
              >
                Email
              </p>
              <span className="sm:text-lg">siteslarytgs@gmail.com</span>
            </li>
          </ul> */}
        </div>
      </motion.section>
    </Section>
  );
}

export default Presentation;
