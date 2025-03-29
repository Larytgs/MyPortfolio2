import { BrowserRouter, Routes, Route } from "react-router-dom";
//BrowserRouter: Cria um roteador baseado em histórico de navegação do navegador.
//Routes: listas de rotas
//Route: cada rota

import Firstmain from "./componentes/FirstMain/index";
// import Presentation from "./componentes/pages/Presentation";
// import Skills from "./componentes/pages/Skills";
// import Knowledge from "./componentes/pages/Knowledge";
// import Projects from "./componentes/pages/Projects";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* path="/" : Rota raiz */}
        <Route path="/" element={<Firstmain />}></Route>
        {/* <Route path="/presentation" element={<Presentation />}></Route>
        <Route path="/skills" element={<Skills />}></Route>
        <Route path="/knowledge" element={<Knowledge />}></Route>
        <Route path="/projects" element={<Projects />}></Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;

//Foi feito só para um exemplo de routes
