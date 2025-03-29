import Subtitulo from "../styles/Subtitulo";
import Section, { Text, SkillWrapper } from "../styles/Section";

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
            Como Desenvolvedor Web Front-end, acredito na importância do
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
                <span className="font-bold">Desenvolvimento de Websites</span>
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
          className="w-[310px] m-auto cursor-zoom-in transition-transform duration-500 hover:scale-110
          md:w-[450px] 
          lg:w-[550px]"
        >
          <img src="/img/html-css-js.jpg" alt="" />
        </figure>
      </div>
    </Section>
  );
}

export default Skills;
