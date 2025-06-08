import Section, { TitleH3, Project } from "../styles/Section";
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
              <a className="card-title cursor-pointer" target="_blank">
                <TitleH3 className="H3">
                  Site para divulgação. <br />
                  <a
                    className="text-sm px-2 py-1 rounded-lg text-white bg-black mr-1"
                    href="https://larytgs.com.br/"
                    target="blank"
                  >
                    <i>Deploy</i>
                  </a>
                  <a
                    className="text-sm px-2 py-1 rounded-lg text-white bg-black"
                    href="https://github.com/Larytgs/Agencia_de_sites_TGS/blob/master/index.html"
                    target="blank"
                  >
                    <i>Code</i>
                  </a>
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
              <a className="card-title cursor-pointer" target="_blank">
                <TitleH3 className="H3">
                  Conversão de moedas. <br />
                  <a
                    className="text-sm px-2 py-1 rounded-lg text-white bg-black mr-1"
                    href="https://larytgs.github.io/devConverter/"
                    target="blank"
                  >
                    <i>Deploy</i>
                  </a>
                  <a
                    className="text-sm px-2 py-1 rounded-lg text-white bg-black"
                    href="https://github.com/Larytgs/devConverter/blob/main/index.html"
                    target="blank"
                  >
                    <i>Code</i>
                  </a>
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
              <a className="card-title cursor-pointer" target="_blank">
                <TitleH3 className="H3">
                  Site Biscoitos Decorados. <br />
                  <a
                    className="text-sm px-2 py-1 rounded-lg text-white bg-black mr-1"
                    href="https://site-biscoitos-decorados.vercel.app/"
                    target="blank"
                  >
                    <i>Deploy</i>
                  </a>
                  <a
                    className="text-sm px-2 py-1 rounded-lg text-white bg-black"
                    href="https://github.com/Larytgs/site-biscoitos-decorados/blob/main/index.html"
                    target="blank"
                  >
                    <i>Code</i>
                  </a>
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
              <a className="card-title cursor-pointer" target="_blank">
                <TitleH3 className="H3">
                  Site de Veterinária. <br />
                  <a
                    className="text-sm px-2 py-1 rounded-lg text-white bg-black mr-1"
                    href="https://larytgs.github.io/Projeto-Veterinaria-Sao-Lourenco/"
                    target="blank"
                  >
                    <i>Deploy</i>
                  </a>
                  <a
                    className="text-sm px-2 py-1 rounded-lg text-white bg-black"
                    href="https://github.com/Larytgs/Projeto-Veterinaria-Sao-Lourenco/blob/master/index.html"
                    target="blank"
                  >
                    <i>Code</i>
                  </a>
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
              <a className="card-title cursor-pointer" target="_blank">
                <TitleH3 className="H3">
                  Réplica da Netflix. <br />
                  <a
                    className="text-sm px-2 py-1 rounded-lg text-white bg-black mr-1"
                    href="https://netflix-two-sand.vercel.app/"
                    target="blank"
                  >
                    <i>Deploy</i>
                  </a>
                  <a
                    className="text-sm px-2 py-1 rounded-lg text-white bg-black"
                    href="https://github.com/Larytgs/Netflix/blob/main/index.html"
                    target="blank"
                  >
                    <i>Code</i>
                  </a>
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
              <a className="card-title cursor-pointer" target="_blank">
                <TitleH3 className="H3">
                  Site para uma Mecânica. <br />
                  <a
                    className="text-sm px-2 py-1 rounded-lg text-white bg-black mr-1"
                    href="https://vitticarservice.com.br/"
                    target="blank"
                  >
                    <i>Deploy</i>
                  </a>
                  <a
                    className="text-sm px-2 py-1 rounded-lg text-white bg-black"
                    href="https://github.com/Larytgs/VittiCarService/blob/main/index.html"
                    target="blank"
                  >
                    <i>Code</i>
                  </a>
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
              <a className="card-title cursor-pointer" target="_blank">
                <TitleH3 className="H3">
                  Estilo Pinterest. <br />
                  <a
                    className="text-sm px-2 py-1 rounded-lg text-white bg-black mr-1"
                    href="https://fotografia-tgs.vercel.app/"
                    target="blank"
                  >
                    <i>Deploy</i>
                  </a>
                  <a
                    className="text-sm px-2 py-1 rounded-lg text-white bg-black"
                    href="https://github.com/Larytgs/FotografiaTGS/blob/main/src/components/Header/Header.jsx"
                    target="blank"
                  >
                    <i>Code</i>
                  </a>
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
              <a className="card-title cursor-pointer" target="_blank">
                <TitleH3 className="H3">
                  Lista de Tarefas. <br />
                  <a
                    className="text-sm px-2 py-1 rounded-lg text-white bg-black mr-1"
                    href="https://projeto-lista-de-tarefas-beta.vercel.app/"
                    target="blank"
                  >
                    <i>Deploy</i>
                  </a>
                  <a
                    className="text-sm px-2 py-1 rounded-lg text-white bg-black"
                    href="https://github.com/Larytgs/Projeto_ListaDeTarefas/blob/main/vite-project/src/componente/TodoApp.jsx"
                    target="blank"
                  >
                    <i>Code</i>
                  </a>
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

          {/* Formulário */}
          <div className="flex-auto text-center my-3 sm:mx-3">
            <div className="service-proj relative">
              <div className="card-proj">
                <img
                  className="rounded-2xl w-[500px]"
                  src="/img/projetos/formulario.png"
                  alt="Lista de Tarefas"
                />
              </div>
              <a className="card-title cursor-pointer" target="_blank">
                <TitleH3 className="H3">
                  Formulário. <br />
                  <a
                    className="text-sm px-2 py-1 rounded-lg text-white bg-black mr-1"
                    href="https://formulario-liard-sigma.vercel.app/"
                    target="blank"
                  >
                    <i>Deploy</i>
                  </a>
                  <a
                    className="text-sm px-2 py-1 rounded-lg text-white bg-black"
                    href="https://github.com/Larytgs/Formulario/blob/main/vite-project/src/componentes/Formulario.jsx"
                    target="blank"
                  >
                    <i>Code</i>
                  </a>
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
              {/* <img
                className="w-5"
                src="/public/img/logo/conhecimentos/postman-original.svg"
                alt=""
              />
              <img
                className="w-5"
                src="/public/img/logo/conhecimentos/mysql-original.svg"
                alt=""
              /> */}
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
