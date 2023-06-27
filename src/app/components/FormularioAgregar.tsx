"use client";

export const FormularioAgregar = () => {
  const agregarJuego = () => {
    console.log("agrega");
  };
  return (
    <div className="grid md:grid-cols-2 gap-4">
      <div className="border rounded-lg bg-indigo-900">
        <div className="text-center">
          <p className="font-semibold my-5 text-xl">Ingresa la URL de tu videojuego</p>
          <input type="text" className="text-gray-900 my-5 w-96 h-10 rounded-lg p-2" />
          <br />
          <button
            onClick={agregarJuego}
            className="bg-yellow-500 font-bold my-5 px-4 py-2 rounded-lg"
          >
            Agregar
          </button>
        </div>
      </div>

      <div className="text-center  ">
        <div className="  text-gray-500 ">
          <div className="grid  grid-cols-2  rounded-lg bg-indigo-900 ">
            <div className="rounded-full overflow-hidden w-48 h-48 flex my-4 justify-center items-center mx-auto border-8 border-yellow-500">
              <img src={"https://placehold.co/400x400"} alt={"imagen placeholder"} />
            </div>

            <div className=" flex justify-center items-center ">
              <div>
                <h2 className="font-bold bg-gray-500 rounded-lg ">TITULO</h2>
                <p className="my-5 font-semibold bg-gray-500 rounded-lg">
                  Tienda: <span className="font-normal">Weplay.cl</span>
                </p>
                <p className="my-5 font-semibold bg-gray-500 rounded-lg">
                  Precio Actual: <span className="font-normal">{"Precio Actual"}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
