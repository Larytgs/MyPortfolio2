import Section, { Cards, H3, P } from "../styles/Section";
import Subtitulo from "../styles/Subtitulo";

//Conhecimentos
function Knowledge() {
  return (
    <Section>
      <section className="text-center m-auto min-h-screen">
        <Subtitulo>Conhecimentos</Subtitulo>
        <div className="mt-5 justify-center items-center">
          <div
            className="grid grid-cols-3 gap-4
            max-lg:col-span-2
            max-md:block"
          >
            <Cards>
              <img
                className="w-16"
                src="/img/logo/conhecimentos/html5-original.svg"
                alt="html5"
              />
              <H3>HTML5</H3>
              <P>
                HTML5 é uma linguagem de marcação de hipertexto, que usamos para
                marcar os elementos da página e construí-la.
              </P>
            </Cards>
            <Cards>
              <img
                className="w-16"
                src="/img/logo/conhecimentos/css3-original.svg"
                alt="css3"
              />
              <H3>CSS3</H3>
              <P>
                CSS3 é uma linguagem de estilo usada para descrever a
                apresentação dos elementos da página os estilizando.{" "}
              </P>
            </Cards>
            <Cards>
              <img
                className="w-16"
                src="/img/logo/conhecimentos/javascript-original.svg"
                alt="JS"
              />
              <H3>JavaScript</H3>
              <P className="text-lg font-bold text-white max-md:text-md max-md:font-normal">
                JavaScript é uma linguagem de programação interpretada usada no
                desenvolvimento web para descrever funcionalidades e
                comportamentos da página.
              </P>
            </Cards>
            <Cards>
              <img
                className="w-16"
                src="/img/logo/conhecimentos/git-original.svg"
                alt="GIT"
              />
              <H3>GIT</H3>
              <P>
                Git é um sistema de controle de versão distribuído amplamente
                utilizado no desenvolvimento de software.
              </P>
            </Cards>
            <Cards>
              <img
                className="w-16"
                src="/img/logo/conhecimentos/github-original.png"
                alt="GITHUB"
              />
              <H3>GitHub</H3>
              <P>
                O GitHub é uma plataforma online que permite armazenar,
                compartilhar e colaborar em projetos de software. É uma
                ferramenta muito utilizada por desenvolvedores.
              </P>
            </Cards>
            <Cards>
              <img
                className="w-16"
                src="/img/logo/conhecimentos/postman-original.svg"
                alt="Postman"
              />
              <H3>Postman</H3>
              <P>
                O Postman é uma plataforma de desenvolvimento e teste de APIs.
                Ele é usado por desenvolvedores para criar, testar, documentar e
                compartilhar APIs.
              </P>
            </Cards>
            <div className="bg-[#333] col-span-3 w-full rounded-2xl h-[100%] m-auto align-middle p-4 text-left">
              <img
                className="w-16"
                src="/img/logo/conhecimentos/vscode-original.svg"
                alt="VSCODE"
              />
              <H3>VSCODE</H3>
              <P>
                Visual Studio Code (VS Code) é um editor de código-fonte
                gratuito e de código aberto desenvolvido pela Microsoft.
              </P>
            </div>
          </div>
          <a
            href="https://github.com/Larytgs"
            target="_blank"
            className="underline-offset-0 text-center block mt-10 text-lg"
          >
            <span>Ver mais</span>
          </a>
        </div>
      </section>
    </Section>
  );
}

export default Knowledge;
