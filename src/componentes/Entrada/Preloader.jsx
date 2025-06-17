import React, { useState, useEffect } from "react"; // Importa React e hooks: useState para estados, useEffect para efeitos colaterais (ex.: timers)
import "./style.css"; // Importa arquivo CSS personalizado para estilizar o preloader (ex.: cores e tamanhos da barra de progresso)

// Define o componente Preloader, que aceita 'children' (o conteúdo principal a ser exibido após o carregamento)
const Preloader = ({ children }) => {
  const [progress, setProgress] = useState(0); // Estado 'progress' inicia em 0, controla a largura da barra de progresso (0% a 100%)
  const [isLoaded, setIsLoaded] = useState(false); // Estado 'isLoaded' inicia como false, determina se mostra o preloader ou o conteúdo

  useEffect(() => {
    // useEffect executa código ao montar o componente
    const interval = setInterval(() => {
      // Cria um intervalo que executa a cada 15ms para animar a barra
      setProgress((prev) => {
        // Atualiza 'progress' com base no valor anterior
        if (prev >= 100) {
          // Se progresso chegar a 100%
          clearInterval(interval); // Para o intervalo
          setTimeout(() => {
            // Aguarda 300ms para uma transição suave
            setIsLoaded(true); // Define isLoaded como true para esconder o preloader e mostrar o conteúdo
          }, 300);
          return 100; // Garante que progresso não passe de 100%
        }
        return prev + 1; // Incrementa progresso em 1 (ex.: 1%, 2%, ..., 100%)
      });
    }, 30); // Intervalo de 15ms define a velocidade da animação

    return () => clearInterval(interval); // Limpa o intervalo quando o componente desmonta, evitando vazamentos de memória
  }, []); // Array vazio faz o useEffect rodar apenas uma vez, ao montar

  return (
    <div className="min-h-screen">
      {!isLoaded && ( // Mostra o preloader se isLoaded for false
        <div
          id="preloader"
          className="fixed inset-0 flex items-center justify-center bg-white z-50" // Preloader cobre a tela, centraliza conteúdo, fundo branco, alta prioridade (z-50)
        >
          <div className="w-64 h-2 rounded overflow-hidden">
            {" "}
            {/* Contêiner da barra de progresso, 64 unidades de largura, 2 de altura, bordas arredondadas */}
            <div
              className="progress-fill h-full bg-blue-500 transition-all duration-150" // Barra de preenchimento, altura total, cor azul, transição suave
              style={{ width: `${progress}%` }} // Largura da barra muda dinamicamente com base no progresso
            ></div>
          </div>
        </div>
      )}
      {isLoaded && ( // Mostra o conteúdo (children) quando isLoaded for true
        <div className="transition-opacity duration-300">{children}</div> // Envolve o conteúdo em uma div com transição de opacidade de 300
      )}
    </div>
  );
};

export default Preloader;
