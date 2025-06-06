import React from "react";
import "./StarryBackground.css";

const StarryBackground = () => {
  return (
    <div className="starry-bg">
      <div className="stars"></div>
      <div className="stars2"></div>
      <div className="stars3"></div>
      <div className="stars4"></div>

      {/* Muuuitas estrelas cadentes */}
      {Array.from({ length: 20 }).map((_, i) => (
        <div key={i} className="shooting-star"></div>
      ))}
      {/* Array.from({ length: 20 }) → cria 20 estrelas cadentes automaticamente.
      Cada <div className="shooting-star" /> vai se animar no seu tempo! */}
    </div>
  );
};

export default StarryBackground;
