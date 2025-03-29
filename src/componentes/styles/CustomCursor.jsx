import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  //Aqui, criamos um estado (position) que armazena a posição do cursor no eixo X e Y.
  //Estado inicial: { x: 0, y: 0 } → O cursor começa no canto superior esquerdo da tela.

  //Efeito para capturar o movimento do mouse
  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    // e.clientX e e.clientY capturam a posição atual do cursor.
    // setPosition({ x: e.clientX, y: e.clientY }) atualiza o estado com a nova posição

    //Cria a função moveCursor, que é chamada sempre que o mouse se move (mousemove).
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []); //([] no final indica que ele só executa quando o componente é montado).

  return (
    <div
      className="cursor"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}

      // Retorna um <div> com a classe "cursor" que será estilizada no CSS.
      // A posição do cursor é atualizada dinamicamente usando inline styles:
      // left: ${position.x}px → Posiciona horizontalmente.
      // top: ${position.y}px → Posiciona verticalmente.
    />
  );
};

export default CustomCursor;
