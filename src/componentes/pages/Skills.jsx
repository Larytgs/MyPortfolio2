// Estilizaçoes
import Subtitulo from "../styles/Subtitulo";
import Section, { Text, SkillWrapper, Card2 } from "../styles/Section";

// Animação de digitar
import { Typewriter } from "react-simple-typewriter";
// Animação para descer titulos/sections com delay
import { motion } from "framer-motion";

//Habilidades
function Skills() {
  return (
    <Section>
      <motion.div
        className="col-span-12 gap-7 m-auto
        md:flex"
        initial={{ opacity: 0, y: -30 }} // Começa invisível e deslocado para cima
        whileInView={{ opacity: 1, y: 0 }} // Anima para visível e na posição certa
        transition={{
          duration: 1,
          delay: 0.2,
          ease: [0.5, 0, 0, 1], // Aproxima da cubic-bezier(0.5, 0, 0, 1)
        }}
        viewport={{ once: false }} // anima toda vez ao entrar na viewport>
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
            <br />
            Organizo meus projetos com base em princípios ágeis, como
            planejamento por etapas curtas, entregar contínuas e adaptação
            rápida as necessidades do cliente.
            <br />
            Embora ainda não tenha atuado com equipes em Scrum, busco aplicar na
            prática os valores da agilidade para manter foco, eficiência e
            qualidade nas entregas.
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
      </motion.div>

      <motion.section
        className="col-span-12 text-center mt-24 m-auto"
        // Animação para a section cair suavemente:
        initial={{ opacity: 0, y: -30 }} // Começa invisível e deslocado para cima
        whileInView={{ opacity: 1, y: 0 }} // Anima para visível e na posição certa
        transition={{
          duration: 1,
          delay: 0.2,
          ease: [0.5, 0, 0, 1], // Aproxima da cubic-bezier(0.5, 0, 0, 1)
        }}
        viewport={{ once: false }} // anima toda vez ao entrar na viewport>
      >
        <div className="mb-2 text-2xl text-[#6ad0ff] font-bold sm:text-3xl">
          <Typewriter
            words={["Conhecimentos e ferramentas"]}
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
            lg:grid-cols-6"
          >
            {/* cada card o h3 e o p */}
            {/* HTML */}
            <Card2 className="hover:border-[#E44D26]">
              <img
                className="w-12 inline"
                src="/img/logo/conhecimentos/html5-original.svg"
                alt="html5"
              />
            </Card2>

            {/* CSS */}
            <Card2 className="hover:border-[#238CC8]">
              <img
                className="w-12 inline"
                src="/img/logo/conhecimentos/css3-original.svg"
                alt="css3"
              />
            </Card2>

            {/* JS */}
            <Card2 className="hover:border-[#F0DB4F]">
              <img
                className="w-12 inline"
                src="/img/logo/conhecimentos/javascript-original.svg"
                alt="JS"
              />
            </Card2>

            {/* React */}
            <Card2 className="hover:border-[#61DAFB]">
              <img
                className="w-12 inline"
                src="/img/logo/conhecimentos/react-original.svg"
                alt="Postman"
              />
            </Card2>

            {/* Vite */}
            <Card2 className="hover:border-[#006BFF]">
              <img
                className="w-12 inline"
                src="/img/logo/conhecimentos/vitejs-original.svg"
                alt="Vite"
              />
            </Card2>

            {/* PHP */}
            <Card2 className="hover:border-[#777BB3]">
              <img
                className="w-12 inline"
                src="/img/logo/conhecimentos/php-original.svg"
                alt="PHP"
              />
            </Card2>

            {/* MySQL */}
            <Card2 className="hover:border-[#00618A]">
              <img
                className="w-12 inline"
                src="/img/logo/conhecimentos/mysql-original.svg"
                alt="MySQL"
              />
            </Card2>

            {/* Postman */}
            <Card2 className="hover:border-[#F37036]">
              <img
                className="w-12 inline"
                src="/img/logo/conhecimentos/postman-original.svg"
                alt="Postman"
              />
            </Card2>

            {/* tailwindcss */}
            <Card2 className="hover:border-[#38BDF8]">
              <img
                className="w-12 inline"
                src="/img/logo/conhecimentos/tailwindcss-original.svg"
                alt="tailwindcss"
              />
            </Card2>

            {/* gimp */}
            <Card2 className="hover:border-[#4b4b4b]">
              <img
                className="w-12 inline"
                src="/img/logo/conhecimentos/gimp-original.svg"
                alt="gimp"
              />
            </Card2>

            {/* canva */}
            <Card2 className="hover:border-[#38BDF8]">
              <img
                className="w-12 inline"
                src="/img/logo/conhecimentos/canva-original.svg"
                alt="canva"
              />
            </Card2>

            {/* Vercel */}
            <Card2 className="relative hover:border-[#000000]">
              <img
                className="w-12 inline"
                src="/img/logo/conhecimentos/vercel-original.svg"
                alt="Vercel"
              />
            </Card2>

            {/* GIT */}
            <Card2 className="hover:border-[#F34F29]">
              <img
                className="w-12 inline"
                src="/img/logo/conhecimentos/git-original.svg"
                alt="GIT"
              />
            </Card2>

            {/* Github */}
            <Card2 className="hover:border-[#696969]">
              <img
                className="w-12 inline"
                src="/img/logo/conhecimentos/github-original.png"
                alt="GITHUB"
              />
            </Card2>

            {/* bpm */}
            <Card2 className="hover:border-red-800">
              <img
                className="w-12 inline"
                src="/img/logo/conhecimentos/npm-original-wordmark.svg"
                alt="npm"
              />
            </Card2>

            {/* VSCODE */}
            <Card2 className="hover:border-[#25AEF3]">
              <img
                className="w-12 inline"
                src="/img/logo/conhecimentos/vscode-original.svg"
                alt="VSCODE"
              />
            </Card2>
          </div>
        </div>
      </motion.section>
    </Section>
  );
}

export default Skills;
