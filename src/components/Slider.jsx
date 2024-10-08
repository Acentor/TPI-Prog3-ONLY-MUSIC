import React, { useState, useEffect } from 'react';
import estilos from './slider.module.css';

function Slider() {
  const imagenes = [
    "promo.png",
    "previewpage0.jpg",
    "encabezadotwitterfestival.jpg",
    "bannertwitchcolorido.jpg"
  ];
  const [imagenActual, setImagenActual] = useState(0);
  const cantidad = imagenes?.length;

  useEffect(() => {
    const intervalId = setInterval(() => {
      setImagenActual((prevImagen) => (prevImagen + 1) % cantidad);
    }, 8000);

  
    return () => clearInterval(intervalId);
  }, [cantidad]); 

  const siguienteImagen = () => {
    setImagenActual((prevImagen) => (prevImagen + 1) % cantidad);
  };

  const anteriorImagen = () => {
    setImagenActual((prevImagen) => (prevImagen - 1 + cantidad) % cantidad);
  };

  return (
    <div className={estilos.containers}>
      <button onClick={anteriorImagen}>←</button>
      {imagenes.map((imagen, index) => (
        <div
          key={index}
          className={
            imagenActual === index
              ? `${estilos.slide} ${estilos.active}`
              : estilos.slide
          }
        >
          {imagenActual === index && <img src={imagen} alt="imagen" />}
        </div>
      ))}
      <button onClick={siguienteImagen}>→</button>
    </div>
  );
}

export default Slider;
