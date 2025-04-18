// import { Link } from "react-router-dom";
import { useState } from "react";
import { Presentation, Skills, Knowledge, Projects } from "../pages/index.jsx";
import Button, { Lista, Ul } from "./StyleF.jsx";
import "../../index.css";

import Header from "../Header/index.jsx";
import Footer from "../Footer.jsx";

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
      <section className="grid grid-cols-12 mx-auto mb-6 p-5 mt-14">
        <section
          className="col-span-12 flex justify-between 
        max-lg:flex-col-reverse max-lg:text-center"
        >
          <article className="m-auto text-center">
            <article>
              <h1
                className="text-[2em] text-center mt-[10%] mb-5 mx-3 font-serif tracking-tight leading-none 
                md:text-[2.8em] 
                lg:text-left"
              >
                Laryssa Tortato Gomes da Silva
                <br />
                <span className="text-[0.7em] font-thin text-[#797676] ">
                  Desenvolvedora Web Front end
                </span>
              </h1>
              <br />
              {/* Down e "Transformando sonhos" */}
              <div className="block gap-4 text-center lg:items-center lg:flex">
                <a
                  className="inline-flex gap-2 bg-[#181717] p-3 text-center rounded-xl"
                  href="../../public/img/CurriculoLaryssa.pdf"
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
                md:w-[450px] lg:mt-0"
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
                Habilidades
              </Button>
            </Lista>
            <Lista>
              <Button onClick={() => toggleSection("knowledge")}>
                Conhecimentos
              </Button>
            </Lista>
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
          {visibleSection === "knowledge" && <Knowledge />}
          {visibleSection === "projects" && <Projects />}
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Firstmain;
