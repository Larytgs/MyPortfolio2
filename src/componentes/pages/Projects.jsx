import Section, { TitleH3, Project } from "../styles/Section";
import Subtitulo from "../styles/Subtitulo";

function Projects() {
  return (
    <Section>
      <section className="text-center m-auto">
        <Subtitulo>Projetos</Subtitulo>

        <Project className="max-sm:mb-[-2%]">
          <div className="flex-auto text-center m-3 cursor-wait">
            <div className="service-proj relative">
              <div className="card-proj">
                <img
                  className="rounded-2xl w-[500px]"
                  src="/img/projetos/agencia_de_sites.png"
                  alt="html5"
                />
              </div>
              <a
                className="card-title cursor-wait"
                href="http://agencia_de_sites.larytgs.com.br/"
                target="_blank"
              >
                <TitleH3 className="H3">
                  Site para divulgar o meu trabalho.
                </TitleH3>
              </a>
            </div>
          </div>
          <div className="flex-auto text-center m-3 cursor-wait">
            <div className="service-proj relative">
              <div className="card-proj">
                <img
                  className="rounded-2xl w-[500px]"
                  src="/img/projetos/vittCarService.png"
                  alt="vittCarService"
                />
              </div>
              <a
                className="card-title cursor-wait"
                href="http://vitticarservice.com.br"
                target="_blank"
              >
                <TitleH3 className="H3">
                  Site para uma Mecânica Automotiva.
                </TitleH3>
              </a>
            </div>
          </div>
          <div className="flex-auto text-center m-3 cursor-wait">
            <div className="service-proj relative">
              <div className="card-proj">
                <img
                  className="rounded-2xl w-[500px]"
                  src="/img/projetos/siteVeterinaria.png"
                  alt="siteVeterinaria"
                />
              </div>
              <a
                className="card-title cursor-wait"
                href="https://larytgs.github.io/Projeto-Veterinaria-Sao-Lourenco/"
                target="_blank"
              >
                <TitleH3 className="H3">
                  Site de Veterinaria, ainda em andamento.
                </TitleH3>
              </a>
            </div>
          </div>
          <div className="flex-auto text-center m-3 cursor-wait">
            <div className="service-proj relative">
              <div className="card-proj">
                <img
                  className="rounded-2xl w-[500px]"
                  src="/img/projetos/siteBiscoitosDecorados .png"
                  alt="siteBiscoitosDecorados"
                />
              </div>
              <a
                className="card-title cursor-wait"
                href="https://larytgs.github.io/site-biscoitos-decorados/"
                target="_blank"
              >
                <TitleH3 className="H3">Site Biscoitos Decorados.</TitleH3>
              </a>
            </div>
          </div>
        </Project>
      </section>
    </Section>
  );
}

export default Projects;
