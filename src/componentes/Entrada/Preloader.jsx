import React, { useState, useEffect } from "react";
import "./style.css"; // Importa o estilo personalizado

const Preloader = () => {
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsLoaded(true);
          }, 300);
          return 100;
        }
        return prev + 1;
      });
    }, 15);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen">
      {!isLoaded && (
        <div
          id="preloader"
          className="fixed inset-0 flex items-center justify-center bg-white z-50"
        >
          <div className="w-64 h-2 rounded overflow-hidden">
            <div
              className="progress-fill h-full bg-blue-500 transition-all duration-150"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Preloader;
