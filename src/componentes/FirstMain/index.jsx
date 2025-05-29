// import { Link } from "react-router-dom";
import { useState } from "react";
import { Presentation, Skills, Projects } from "../pages/index.jsx";
import Button, { H1, Lista, Ul } from "./StyleF.jsx";
import "../../index.css";
//import StarryBackground from "../Star/StarryBackground.jsx";
import { Typewriter } from "react-simple-typewriter";

import Header from "../Header/index.jsx";
import Footer from "../Footer.jsx";
// import Formulario from "../pages/formulario.jsx";

function Firstmain() {
  // Inicializando "presentation" como a seção visível
  // A variável "visibleSection" irá armazenar a seção visível atualmente (ou null se nenhuma)
  const [visibleSection, setVisibleSection] = useState("presentation");

  // A função toggleSection vai alternar entre mostrar e esconder a seção
  const toggleSection = (section) => {
    // Se a seção clicada for a mesma que já está visível, ela permanece, senão, troca
    setVisibleSection(visibleSection === section ? visibleSection : section);
  };

  return (
    <>
      <Header />
      {/* <StarryBackground /> */}
      <section className="relative grid grid-cols-12 mx-auto mb-6 p-5 mt-14">
        <section
          className="col-span-12 flex justify-between 
        max-lg:flex-col-reverse max-lg:text-center"
        >
          <article className="m-auto text-center">
            <article>
              <H1>
                Laryssa Tortato Gomes da Silva
                <br />
                <span className="text-[0.6em] font-thin text-[#797676] bg-none">
                  <Typewriter
                    words={["Desenvolvedora Web Front-end"]}
                    loop={true} // 🔁 Se true, digita/apaga infinitamente; false digita uma vez só
                    cursor // ✏️ Mostra o cursor piscando (|) no final do texto
                    cursorStyle="|" // 💅 Estilo do cursor (você pode mudar para _ ou █ se quiser)
                    typeSpeed={80} // ⏩ Velocidade de digitação (ms por caractere) – menor = mais rápido
                    deleteSpeed={50} // ⏪ Velocidade de apagar (ms por caractere)
                    delaySpeed={1500} // ⏸ Tempo de espera (ms) antes de começar a apagar o texto
                  />
                </span>
              </H1>
              <br />
              {/* Down e "Transformando sonhos" */}
              <div
                className="block gap-4 text-center pl-5 
              lg:items-center lg:flex"
              >
                <a
                  className="inline-flex gap-2 bg-[#181717] p-3 text-center rounded-xl
                   md:transition-transform md:duration-500 md:hover:scale-110 dark:text-white"
                  href="/img/CurriculoLaryssa.pdf"
                  target="_blank"
                >
                  Download CV
                  <img
                    className="w-[20px] h-[20px]"
                    src="/img/logo/icon-download.png"
                    alt="Curriculo"
                  />
                </a>
                <p
                  className="w-[100%] mt-4 m-auto font-serif text-lg 
                md:w-[400px] lg:mt-0"
                >
                  ”Transformando sonhos em conquistas; linhas de código em
                  experiências memoráveis.”
                </p>
              </div>
            </article>
          </article>
          {/* Minha foto */}
          <figure className="relative m-auto max-md:text-center">
            <img
              className="minhaft w-[320px] md:w-[350px]"
              src="/img/logo/minhafoto2.jpg"
              alt="minha foto"
            />
            <figcaption className="absolute text-gray-300 top-[89%] left-[20%] max-md:hidden">
              Laryssa Tortato Gomes da Silva
            </figcaption>
          </figure>
        </section>

        {/* Github */}
        <section className="col-span-12">
          <div
            className="justify-center flex mt-28 gap-2 
            max-md:flex-1 max-md:mt-8 
            max-sm:flex-wrap
          "
          >
            <img
              className="h-[170px]"
              src="https://github-readme-stats.vercel.app/api?username=larytgs&show_icons=true&theme=github_dark&include_all_commits=true&count_private=true"
            />
            <img
              className="h-[170px]"
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=larytgs&layout=compact&langs_count=16&theme=github_dark"
            />
          </div>
        </section>

        {/* Botoes */}
        <div className="col-span-12 mt-14 inline-block flex-wrap w-full items-center">
          <Ul>
            <Lista>
              <Button onClick={() => toggleSection("presentation")}>
                Apresentação
              </Button>
            </Lista>
            <Lista>
              <Button onClick={() => toggleSection("skills")}>
                Aprendizado
              </Button>
            </Lista>
            {/* <Lista>
              <Button onClick={() => toggleSection("knowledge")}>
                Conhecimentos
              </Button>
            </Lista> */}
            <Lista>
              <Button onClick={() => toggleSection("projects")}>
                Projetos
              </Button>
            </Lista>
          </Ul>
        </div>

        {/* Adiciona um espaçamento para evitar que o conteúdo fique coberto */}
        <div className="col-span-12 mt-4 sm:mt-10">
          {visibleSection === "presentation" && <Presentation />}
          {visibleSection === "skills" && <Skills />}
          {/* {visibleSection === "knowledge" && <Knowledge />} */}
          {visibleSection === "projects" && <Projects />}
        </div>
      </section>

      {/* <Formulario /> */}
      <Footer />
    </>
  );
}

export default Firstmain;
