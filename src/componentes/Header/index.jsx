import { useEffect, useState } from "react"; // Importa os hooks do React
import { Link } from "react-router-dom"; // Link para navegação sem recarregar a página
import "./StyleH.css"; // Importa o estilo personalizado

function Header() {
  const [darkMode, setDarkMode] = useState(false); // Estado para controlar se está no modo escuro

  useEffect(() => {
    // Toda vez que darkMode mudar, essa função executa
    document.body.classList.toggle("dark", darkMode); // Adiciona ou remove a classe 'dark' do <body>
  }, [darkMode]);

  return (
    <div className="header text-3xl text-[#6ad0ff] font-bold sm:text-4xl flex justify-between items-center p-4">
      {/* Logo ou título do site, clicável para ir à página inicial */}
      <Link to="/">
        <h1 className="h1Header">Dev.Tgs</h1>
      </Link>

      {/* Área à direita do cabeçalho com ícones e toggle */}
      <div className="flex items-center gap-4">
        {/* Botão de alternância de modo claro/escuro */}
        <label className="relative inline-flex items-center cursor-pointer">
          {/* input invisível que controla o estado */}
          <input
            type="checkbox"
            checked={darkMode} // liga com o estado
            onChange={() => setDarkMode(!darkMode)} // muda o estado ao clicar
            className="sr-only peer" // escondido visualmente
          />

          {/* Trilha do toggle (fundo) */}
          <div className="w-10 h-5 bg-gray-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-[#6ad0ff] rounded-full peer dark:bg-gray-600 peer-checked:bg-[#6ad0ff] transition-colors"></div>

          {/* Círculo que desliza (a “bolinha”) */}
          <div
            className={`absolute left-1 top-1 w-3 h-3 bg-white rounded-full transition-transform ${
              darkMode ? "translate-x-5" : ""
            }`}
          ></div>
        </label>

        {/* Ícone do GitHub */}
        <a href="https://github.com/Larytgs" target="_blank" rel="noreferrer">
          <img className="img" src="/img/logo/github.png" alt="GitHub" />
        </a>

        {/* Ícone do LinkedIn */}
        <a
          href="https://www.linkedin.com/in/laryssa-tortato-7612961a9/"
          target="_blank"
          rel="noreferrer"
        >
          <img className="img" src="/img/logo/linkedin.png" alt="LinkedIn" />
        </a>

        {/* Ícone do Instagram */}
        <a
          href="https://www.instagram.com/larytgs/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="mr-5 img"
            src="/img/logo/instagram.png"
            alt="Instagram"
          />
        </a>
      </div>
    </div>
  );
}

export default Header; // Exporta o componente para ser usado em outro lugar
