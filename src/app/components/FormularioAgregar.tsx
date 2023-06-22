"use client";

export const FormularioAgregar = () => {
  const agregarJuego = () => {
    console.log("agrega");
  };
  return (
    <div className="text-center">
      <input type="text" className="text-gray-900" />
      <br />
      <button onClick={agregarJuego} className="bg-sky-900 my-5 p-2 rounded-lg">
        Agregar
      </button>
    </div>
  );
};
