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
      <section className="mb-6 p-5 mt-14">
        <section
          className="flex justify-between 
        max-lg:flex-col-reverse max-lg:text-center"
        >
          <article className="m-auto p-5 text-center">
            <article>
              <h1
                className="text-[2.8em] mb-5 text-left font-serif tracking-tight leading-none 
                max-lg:text-[2em] max-lg:mt-[5%]"
              >
                Laryssa Tortato Gomes da Silva
                <br />
                <span className="text-[0.7em] font-thin text-[#797676] max-lg:text-[0.8em]">
                  Desenvolvedora Web Front end
                </span>
              </h1>
              <br />
              <div className="flex gap-4 items-center max-lg:block">
                <a
                  className="inline-flex gap-2 bg-[#181717] p-3 rounded-xl"
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
                <p className="block w-[450px] font-serif text-[1.2em] max-lg:text-[1.1em] max-lg:mt-4">
                  ”Transformando sonhos em conquistas; linhas de código em
                  experiências memoráveis.”
                </p>
              </div>
            </article>
          </article>

          <figure className="relative m-auto max-md:text-center">
            <img
              className="minhaft w-[350px] max-md:w-[320px]"
              src="/img/logo/minhafoto2.jpg"
              alt="minha foto"
            />
            <figcaption className="absolute text-gray-300 top-[89%] left-[20%] max-md:hidden">
              Laryssa Tortato Gomes da Silva
            </figcaption>
          </figure>
        </section>

        {/* Github */}
        <section>
          <div
            className="justify-center flex mt-28 gap-2 max-md:flex-1 max-md:mt-10
          max-sm:flex-wrap"
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
        <div className="mt-14">
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
        <div className="mt-10 max-sm:mt-4">
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
