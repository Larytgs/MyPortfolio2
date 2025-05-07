import Section, { Card2, H3, P } from "../styles/Section";
import Subtitulo from "../styles/Subtitulo";

//Conhecimentos
function Knowledge() {
  return (
    <Section>
      <section className="col-span-12 text-center m-auto min-h-screen">
        <Subtitulo>Conhecimentos</Subtitulo>
        {/* todos os cards mais o "ver mais"*/}
        <div className="mt-5 justify-center items-center">
          {/* todos os cards */}
          {/* <div
            className="grid grid-cols-3 gap-4
            max-lg:col-span-2
            max-md:block"
          > */}
          <div
            className="inline-grid grid-cols-2 mb-[5%] mt-2.5
            md:grid-cols-4
            lg:grid-cols-5"
          >
            {/* cada card o h3 e o p */}
            <Card2
              className="relative border border-transparent hover:border hover:border-solid hover:border-[#E44D26]
            "
            >
              <img
                className="w-12 inline"
                src="/img/logo/conhecimentos/html5-original.svg"
                alt="html5"
              />
              <H3>HTML5</H3>
              {/* <P>
                HTML5 é uma linguagem de marcação de hipertexto, que usamos para
                marcar os elementos da página e construí-la.
              </P> */}
            </Card2>
            <Card2 className="relative text-center border border-transparent hover:border hover:border-solid hover:border-[#238CC8]">
              <img
                className="w-12 inline"
                src="/img/logo/conhecimentos/css3-original.svg"
                alt="css3"
              />
              <H3>CSS3</H3>
              {/* <P>
                CSS3 é uma linguagem de estilo usada para descrever a
                apresentação dos elementos da página os estilizando.{" "}
              </P> */}
            </Card2>
            <Card2 className="relative border border-transparent hover:border hover:border-solid hover:border-[#F0DB4F]">
              <img
                className="w-12 inline"
                src="/img/logo/conhecimentos/javascript-original.svg"
                alt="JS"
              />
              <H3>JavaScript</H3>
              {/* <P className="text-lg font-bold text-white max-md:text-md max-md:font-normal">
                JavaScript é uma linguagem de programação interpretada usada no
                desenvolvimento web para descrever funcionalidades e
                comportamentos da página.
              </P> */}
            </Card2>
            <Card2 className="relative border border-transparent hover:border hover:border-solid hover:border-[#F34F29]">
              <img
                className="w-12 inline"
                src="/img/logo/conhecimentos/git-original.svg"
                alt="GIT"
              />
              <H3>GIT</H3>
              {/* <P>
                É um sistema de controle de versão distribuído amplamente
                utilizado no desenvolvimento de software.
              </P> */}
            </Card2>
            <Card2 className="relative border border-transparent hover:border hover:border-solid hover:border-[#696969]">
              <img
                className="w-12 inline"
                src="/img/logo/conhecimentos/github-original.png"
                alt="GITHUB"
              />
              <H3>GitHub</H3>
              {/* <P>
                O GitHub é uma plataforma online que permite armazenar,
                compartilhar e colaborar em projetos de software. É uma
                ferramenta muito utilizada por desenvolvedores.
              </P> */}
            </Card2>
            <Card2 className="relative border border-transparent hover:border hover:border-solid hover:border-[#F37036]">
              <img
                className="w-12 inline"
                src="/img/logo/conhecimentos/postman-original.svg"
                alt="Postman"
              />
              <H3>Postman</H3>
              {/* <P>
                É uma plataforma de desenvolvimento e teste de APIs. Ele é usado
                por desenvolvedores para criar, testar, documentar e
                compartilhar APIs.
              </P> */}
            </Card2>
            <Card2 className="relative border border-transparent hover:border hover:border-solid hover:border-[#61DAFB]">
              <img
                className="w-12 inline"
                src="/img/logo/conhecimentos/react-original.svg"
                alt="Postman"
              />
              <H3>React</H3>
              {/* <P>
                React é uma biblioteca JavaScript de código aberto utilizada
                para construir interfaces de usuário (UI) para aplicações web.
              </P> */}
            </Card2>
            <Card2 className="relative border border-transparent hover:border hover:border-solid hover:border-[#38BDF8]">
              <img
                className="w-12 inline"
                src="/img/logo/conhecimentos/tailwindcss-original.svg"
                alt="VSCODE"
              />
              <H3>Tailwindcss</H3>
              {/* <P>
                É um framework CSS voltado para utilidade, repleto de classes
                como <strong>flex, pt-4, text-center e rotate-90</strong> que
                podem ser compostas para criar qualquer design, diretamente na
                sua marcação.
              </P> */}
            </Card2>
            <Card2 className="relative border border-transparent hover:border hover:border-solid hover:border-[#25AEF3]">
              <img
                className="w-12 inline"
                src="/img/logo/conhecimentos/vscode-original.svg"
                alt="VSCODE"
              />
              <H3>VSCode</H3>
              {/* <P>
                Visual Studio Code é um editor de código-fonte gratuito e de
                código aberto desenvolvido pela Microsoft.
              </P> */}
            </Card2>
          </div>

          <a
            href="https://github.com/Larytgs"
            target="_blank"
            className="underline-offset-0 text-center block mt-12 text-lg"
          >
            <span>Ver mais</span>
          </a>
        </div>
      </section>
    </Section>
  );
}

export default Knowledge;
