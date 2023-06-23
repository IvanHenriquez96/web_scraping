"use client";

export const FormularioAgregar = () => {
  const agregarJuego = () => {
    console.log("agrega");
  };
  return (
    <div className="text-center">
      <p>Ingresa la URL de tu videojuego</p>
      <input type="text" className="text-gray-900 my-5 w-96" />
      <br />
      <button onClick={agregarJuego} className="bg-sky-900 my-5 p-2 rounded-lg">
        Agregar
      </button>
    </div>
  );
};
