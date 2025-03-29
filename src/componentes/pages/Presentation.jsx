import Subtitulo from "../styles/Subtitulo";
import Section, { Text } from "../styles/Section";

function Presentation() {
  return (
    <Section>
      <section
        className="col-span-12 m-auto gap-7
        md:flex"
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
            Olá, me chamo Laryssa (ou Lary😜), tenho 26 anos e sou de Itapoá-SC.
            <br />
            Sou graduada em Análises e desenvolvimento de sistemas, estudo
            programação desde 2020,com ênfase em desenvolvimento web.
            <br />
            Atualmente estou finalizando Pós-Graduação em Front-end.
          </Text>
          <ul className="flex gap-4 justify-evenly text-left">
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
          </ul>
        </div>
      </section>
    </Section>
  );
}

export default Presentation;
