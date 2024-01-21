import React from "react";
import "../estilos/Tarea.css";

function Fechadehoy() {
  const obtenerFechaActual = () => {
    const fecha = new Date();
    const opcionesDeFecha = {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
    };

    return fecha.toLocaleDateString("es-ES", opcionesDeFecha);
  };

  return (
    <div>
      <h2> Task of the day: {obtenerFechaActual()} </h2>
    </div>
  );
}

export default Fechadehoy;
