import Section, { TitleH3, TitleH32, Project } from "../styles/Section";
import Subtitulo from "../styles/Subtitulo";

function Projects() {
  return (
    <Section>
      <section className="col-span-12 gap-7 my-0 mx-5">
        <Subtitulo>Projetos</Subtitulo>

        <Project className="mb-[-2%]">
          {/* Site para divulgar o meu trabalho. */}
          <div className="flex-auto text-center my-3 sm:mx-3">
            <div className="service-proj relative">
              <div className="card-proj">
                <img
                  className="rounded-2xl w-[500px]"
                  src="/img/projetos/agencia_de_sites.png"
                  alt="agencia_de_sites"
                />
              </div>
              <a
                className="card-title cursor-pointer"
                href="https://larytgs.com.br/"
                target="_blank"
              >
                <TitleH3 className="H3">
                  Site para divulgação. <br /> <i>Deploy</i>
                </TitleH3>
              </a>
            </div>

            <div className="flex mt-2 mx-5 gap-2">
              <div>
                <img
                  className="w-5"
                  src="/img/logo/conhecimentos/html5-original.svg"
                  alt=""
                />
              </div>
              <img
                className="w-5"
                src="/img/logo/conhecimentos/css3-original.svg"
                alt=""
              />
              <img
                className="w-4"
                src="/img/logo/conhecimentos/javascript-original.svg"
                alt=""
              />
            </div>
          </div>

          {/* Site para uma Mecânica */}
          <div className="flex-auto text-center my-3 sm:mx-3">
            <div className="service-proj relative">
              <div className="card-proj">
                <img
                  className="rounded-2xl w-[500px]"
                  src="/img/projetos/vittCarService.png"
                  alt="vittCarService"
                />
              </div>
              <a
                className="card-title cursor-pointer"
                href="http://vitticarservice.com.br"
                target="_blank"
              >
                <TitleH3 className="H3">
                  Site para uma Mecânica. <br /> <i>Deploy</i>
                </TitleH3>
              </a>
            </div>
            <div className="flex mt-2 mx-5 gap-2">
              <div>
                <img
                  className="w-5"
                  src="/img/logo/conhecimentos/html5-original.svg"
                  alt=""
                />
              </div>
              <img
                className="w-5"
                src="/img/logo/conhecimentos/css3-original.svg"
                alt=""
              />
              <img
                className="w-4"
                src="/img/logo/conhecimentos/javascript-original.svg"
                alt=""
              />
            </div>
          </div>

          {/* Site de Veterinaria */}
          <div className="flex-auto text-center my-3 sm:mx-3">
            <div className="service-proj relative">
              <div className="card-proj">
                <img
                  className="rounded-2xl w-[500px]"
                  src="/img/projetos/siteVeterinaria.png"
                  alt="siteVeterinaria"
                />
              </div>
              <a
                className="card-title cursor-pointer"
                href="https://larytgs.github.io/Projeto-Veterinaria-Sao-Lourenco/"
                target="_blank"
              >
                <TitleH3 className="H3">
                  Site de Veterinária. <br /> <i>Deploy</i>
                </TitleH3>
              </a>
            </div>
            <div className="flex mt-2 mx-5 gap-2">
              <div>
                <img
                  className="w-5"
                  src="/img/logo/conhecimentos/html5-original.svg"
                  alt=""
                />
              </div>
              <img
                className="w-5"
                src="/img/logo/conhecimentos/css3-original.svg"
                alt=""
              />
            </div>
          </div>

          {/* Site Biscoitos Decorados. */}
          <div className="flex-auto text-center my-3 sm:mx-3">
            <div className="service-proj relative group">
              <div className="card-proj">
                <img
                  className="rounded-2xl w-[500px]"
                  src="/img/projetos/siteBiscoitosDecorados.png"
                  alt="siteBiscoitosDecorados"
                />
              </div>
              <a
                className="card-title cursor-pointer"
                href="https://site-biscoitos-decorados.vercel.app/"
                target="_blank"
              >
                <TitleH3 className="H3">
                  Site Biscoitos Decorados. <br /> <i>Deploy</i>
                </TitleH3>
              </a>
            </div>
            <div className="flex mt-2 mx-5 gap-2">
              <div>
                <img
                  className="w-5"
                  src="/img/logo/conhecimentos/html5-original.svg"
                  alt=""
                />
              </div>
              <img
                className="w-5"
                src="/img/logo/conhecimentos/css3-original.svg"
                alt=""
              />
              <img
                className="w-4"
                src="/img/logo/conhecimentos/javascript-original.svg"
                alt=""
              />
            </div>
          </div>

          {/* Réplica da Netflix */}
          <div className="flex-auto text-center my-3 sm:mx-3">
            <div className="service-proj relative">
              <div className="card-proj">
                <img
                  className="rounded-2xl w-[500px]"
                  src="/img/projetos/netflix.png"
                  alt="Réplica da Netflix"
                />
              </div>
              <a
                className="card-title cursor-pointer"
                href="https://netflix-six-chi.vercel.app/manageProfiles/index.html"
                target="_blank"
              >
                <TitleH3 className="H3">
                  Réplica da Netflix. <br /> <i>Deploy</i>
                </TitleH3>
              </a>
            </div>
            <div className="flex mt-2 mx-5 gap-2">
              <div>
                <img
                  className="w-5"
                  src="/img/logo/conhecimentos/html5-original.svg"
                  alt=""
                />
              </div>
              <img
                className="w-5"
                src="/img/logo/conhecimentos/css3-original.svg"
                alt=""
              />
              <img
                className="w-4"
                src="/img/logo/conhecimentos/javascript-original.svg"
                alt=""
              />
            </div>
          </div>

          {/* Conversão de moedas. */}
          <div className="flex-auto text-center my-3 sm:mx-3">
            <div className="service-proj relative group">
              <div className="card-proj">
                <img
                  className="rounded-2xl w-[500px]"
                  src="/img/projetos/devConversorDeValores.png"
                  alt="siteBiscoitosDecorados"
                />
              </div>
              <a
                className="card-title cursor-pointer"
                href="https://larytgs.github.io/devConverter/"
                target="_blank"
              >
                <TitleH3 className="H3">
                  Conversão de moedas. <br /> <i>Deploy</i>
                </TitleH3>
              </a>
            </div>
            <div className="flex mt-2 mx-5 gap-2">
              <img
                className="w-5"
                src="/img/logo/conhecimentos/html5-original.svg"
                alt=""
              />
              <img
                className="w-5"
                src="/img/logo/conhecimentos/css3-original.svg"
                alt=""
              />
              <img
                className="w-4"
                src="/img/logo/conhecimentos/javascript-original.svg"
                alt=""
              />
            </div>
          </div>

          {/* Projeto Estilo Pinterest */}
          <div className="flex-auto text-center my-3 sm:mx-3">
            <div className="service-proj relative">
              <div className="card-proj">
                <img
                  className="rounded-2xl w-[500px]"
                  src="/img/projetos/EstiloPinterest.png"
                  alt="Projeto Estilo Pinterest"
                />
              </div>
              <a
                className="card-title cursor-pointer"
                href="https://fotografia-tgs.vercel.app/"
                target="_blank"
              >
                <TitleH3 className="H3">
                  Estilo Pinterest. <br /> <i>Deploy</i>
                </TitleH3>
              </a>
            </div>
            <div className="flex mt-2 mx-5 gap-2">
              <img
                className="w-5"
                src="/img/logo/conhecimentos/react-original.svg"
                alt=""
              />
              <img
                className="w-5"
                src="/img/logo/conhecimentos/html5-original.svg"
                alt=""
              />
              <img
                className="w-5"
                src="/img/logo/conhecimentos/css3-original.svg"
                alt=""
              />
              <img
                className="w-4"
                src="/img/logo/conhecimentos/tailwindcss-original.svg"
                alt=""
              />
            </div>
          </div>

          {/* Gerenciador de Lista de Tarefas */}
          <div className="flex-auto text-center my-3 sm:mx-3">
            <div className="service-proj relative">
              <div className="card-proj">
                <img
                  className="rounded-2xl w-[500px]"
                  src="/img/projetos/Lista de tarefas.png"
                  alt="Lista de Tarefas"
                />
              </div>
              <a
                className="card-title cursor-pointer"
                href="https://projeto-lista-de-tarefas-beta.vercel.app/"
                target="_blank"
              >
                <TitleH3 className="H3">
                  Lista de Tarefas. <br /> <i>No Deploy</i>
                </TitleH3>
              </a>
            </div>
            <div className="flex mt-2 mx-5 gap-2">
              <img
                className="w-5"
                src="/img/logo/conhecimentos/react-original.svg"
                alt=""
              />
              <img
                className="w-5"
                src="/img/logo/conhecimentos/html5-original.svg"
                alt=""
              />
              <img
                className="w-5"
                src="/img/logo/conhecimentos/css3-original.svg"
                alt=""
              />
            </div>
          </div>

          {/* Novo projeto */}
          <div className="flex-auto text-center my-3 sm:mx-3">
            <div className="service-proj relative">
              <div className="card-proj">
                <img
                  className="rounded-2xl w-[500px]"
                  src="/img/projetos/emBreve.png"
                  alt="siteVeterinaria"
                />
              </div>
              <a className="card-title cursor-pointer" href="#" target="_blank">
                {/* <div>
              <ul className="flex mt-2 mx-5 gap-2 text-[#797676]">
                <li className="text-[0.8em] bg-[#00397fce] text-white p-1 px-2 rounded-lg">
                  React
                </li>
                <li className="text-[0.8em] bg-[#00397fce] text-white p-1 px-2 rounded-lg">
                  Tailwindcss
                </li>
              </ul>
            </div> */}
              </a>
            </div>
          </div>
        </Project>

        <a
          href="https://github.com/Larytgs"
          target="_blank"
          className="underline-offset-0 text-center block text-lg"
        >
          <span>Ver mais no Github</span>
        </a>
      </section>
    </Section>
  );
}

export default Projects;
