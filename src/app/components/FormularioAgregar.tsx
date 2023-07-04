"use client";

import { useState } from "react";

interface Juego {
  title: string;
  actual_price: string;
  url_image: string;
  tienda: string;
}

export const FormularioAgregar = () => {
  const [url, setUrl] = useState("");
  const [errores, setErrores] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [datosJuego, setDatosJuego] = useState<Juego | null>(null);

  const agregarJuego = () => {
    let err: any = [];
    setErrores(err);
    //valida que sea de la tienda weplay

    try {
      let url_formato = new URL(url);
      console.log("agrega", url_formato);

      if (url_formato.hostname !== "www.weplay.cl") {
        err.push("La URL debe pertenecer a la tienda Weplay.cl");
        return;
      }

      //Todo OK, se agrega el juego
      scrapearJuego(url_formato);
    } catch (error) {
      err.push("Error en el formato de la URL");
      setErrores(err);
      console.log(error, "test");
    }
  };

  const scrapearJuego = async (url: URL) => {
    setIsLoading(true);

    let juego = {
      url_game: url,
    };

    let result = await fetch(`https://ihenriquez.lat/api/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(juego),
    });

    let datos_juego = await result.json();

    setIsLoading(false);
    setDatosJuego(datos_juego.juego);

    console.log(datos_juego);
  };

  const handleChange = (e: any) => {
    setErrores([]);
    setUrl(e.target.value);
  };

  return (
    <div className="grid md:grid-cols-2 gap-4">
      <div className=" rounded-lg bg-indigo-900 p-3">
        <div className="text-center">
          <p className="font-semibold my-5 text-xl">Ingresa la URL de tu videojuego</p>
          <input
            onChange={handleChange}
            type="text"
            className="text-gray-900 my-5 w-11/12 h-10 rounded-lg p-2"
            placeholder="https://www.weplay.cl/..."
          />
          <br />

          {errores.length > 0 && (
            <div className="bg-red-400 rounded-lg w-96 mx-auto">
              <ul>
                {errores.map((error, index) => {
                  return (
                    <li className="font-semibold" key={index}>
                      {error}
                    </li>
                  );
                })}
              </ul>
            </div>
          )}

          <button
            onClick={agregarJuego}
            className={`bg-yellow-500 font-bold my-5 px-4 py-2 rounded-lg hover:bg-yellow-600 ${
              isLoading && "bg-yellow-600 animate-pulse"
            }`}
            disabled={isLoading}
          >
            {isLoading ? "Agregando" : "Agregar"}
          </button>
        </div>
      </div>

      <div className="text-center">
        <div className="  text-gray-500 ">
          <div
            className={`grid  grid-cols-2  rounded-lg p-3 bg-indigo-900 ${
              isLoading && "animate-pulse"
            }`}
          >
            <div className="rounded-full overflow-hidden w-48 h-48 flex my-4 justify-center items-center mx-auto border-8 border-yellow-500">
              <img
                src={`${
                  datosJuego ? datosJuego.url_image : "https://placehold.co/400x400"
                }`}
                alt={"imagen placeholder"}
              />
            </div>

            {datosJuego ? (
              <div className="my-auto p-3 text-white">
                <p className="w-12/12 md:my-10 my-3 font-semibold"> {datosJuego.title}</p>
                <p className="w-12/12 md:my-10 my-3">
                  <span className="font-semibold">Precio:</span> {datosJuego.actual_price}
                </p>
                <p className="w-12/12 md:my-10 my-3">
                  <span className="font-semibold">Tienda:</span> {datosJuego.tienda}
                </p>
              </div>
            ) : (
              <div className="my-auto p-3">
                <p className="bg-gray-500 w-12/12 md:my-10 my-3 rounded-lg">_</p>
                <p className="bg-gray-500 w-12/12 md:my-10 my-3 rounded-lg">_</p>
                <p className="bg-gray-500 w-12/12 md:my-10 my-3 rounded-lg">_</p>
              </div>
            )}

            {/* <div className=" flex justify-center items-center ">
              <div>
                <h2 className="font-bold bg-gray-500 rounded-lg ">TITULO</h2>
                <p className="my-5 font-semibold bg-gray-500 rounded-lg">
                  Tienda: <span className="font-normal">Weplay.cl</span>
                </p>
                <p className="my-5 font-semibold bg-gray-500 rounded-lg">
                  Precio Actual: <span className="font-normal">{"Precio Actual"}</span>
                </p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};
