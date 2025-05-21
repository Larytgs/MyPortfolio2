import Subtitulo from "../styles/Subtitulo";
import Section, { Text, SkillWrapper, Card2 } from "../styles/Section";

import { Typewriter } from "react-simple-typewriter";

//Habilidades
function Skills() {
  return (
    <Section>
      <div
        className="col-span-12 gap-7 m-auto
        md:flex"
      >
        <div className="text-center">
          <Subtitulo>Aprendizado Contínuo.</Subtitulo>
          <Text>
            Como Desenvolvedora Web Front-end, acredito na importância do
            aprendizado contínuo e estou constantemente aprimorando minhas
            habilidades.
            <br />
            Fiz cursos complementares, como Python, PHP, MySQL, HTML5, CSS3,
            Javascript, atualmente React.
            <br />
            Além disso, sou proativa, resolvo problemas de forma eficaz e
            valorizo o trabalho em equipe para entregar resultados de alta
            qualidade.
          </Text>
          <ul className="m-5">
            <li>
              <SkillWrapper>
                <span className="font-bold">Proatividade e Determinação</span>
                <span>100%</span>
              </SkillWrapper>
              <div className="h-1">
                <div className="h-[100%] w-[100%] bg-[#6ad0ff]"></div>
              </div>
            </li>
            <li>
              <SkillWrapper>
                <span className="font-bold">
                  Desenvolvimento Web Responsivo
                </span>
                <span>90%</span>
              </SkillWrapper>
              <div className="h-1 bg-[#0f0f0f]">
                <div className="h-[90%] w-[90%] bg-[#6ad0ff]"></div>
              </div>
            </li>
            <li>
              <SkillWrapper>
                <span className="font-bold">Web Design</span>
                <span>85%</span>
              </SkillWrapper>
              <div className="h-1 bg-[#0f0f0f]">
                <div className="h-[100%] w-[85%] bg-[#6ad0ff]"></div>
              </div>
            </li>
          </ul>
        </div>

        <figure
          className="m-auto cursor-zoom-in transition-transform duration-500 hover:scale-110
          md:w-[450px] 
          lg:w-[550px]"
        >
          <img src="/img/html-css-js.jpg" alt="" />
        </figure>
      </div>

      <section className="col-span-12 text-center mt-24 m-auto">
        <div className="mb-2 text-2xl text-[#6ad0ff] font-bold sm:text-3xl">
          <Typewriter
            words={["Conhecimentos"]}
            loop={true} // 🔁 Se true, digita/apaga infinitamente; false digita uma vez só
            cursor // ✏️ Mostra o cursor piscando (|) no final do texto
            cursorStyle="|" // 💅 Estilo do cursor (você pode mudar para _ ou █ se quiser)
            typeSpeed={80} // ⏩ Velocidade de digitação (ms por caractere) – menor = mais rápido
            deleteSpeed={50} // ⏪ Velocidade de apagar (ms por caractere)
            delaySpeed={1500} // ⏸ Tempo de espera (ms) antes de começar a apagar o texto
          />
        </div>
        {/* todos os cards mais o "ver mais"*/}
        <div className="mt-5 justify-center items-center">
          {/* todos os cards */}
          <div
            className="inline-grid grid-cols-3 mb-[5%] mt-2.5
            sm:grid-cols-4
            md:grid-cols-5
            lg:grid-cols-9"
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
              {/* <P>
                Visual Studio Code é um editor de código-fonte gratuito e de
                código aberto desenvolvido pela Microsoft.
              </P> */}
            </Card2>
          </div>
        </div>
      </section>
    </Section>
  );
}

export default Skills;
