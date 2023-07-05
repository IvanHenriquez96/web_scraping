"use client";
import { useState } from "react";

const InfoAgregarProducto = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="my-7 cursor-pointer" onClick={toggleOpen}>
      <div
        className={`mx-auto  bg-yellow-300 p-4 rounded-t-lg text-yellow-700 flex justify-between ${
          !isOpen && "rounded-b-lg"
        }`}
      >
        <p className="font-semibold">¿Como agrego un producto?</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>
      {isOpen && (
        <div className="bg-yellow-300 text-yellow-700 p-4 rounded-b-lg">
          <ul>
            <li className="my-1">
              1.- Busca tu producto en www.weplay.cl al cual quieres hacerle seguimiento y
              seleccionalo.
            </li>
            <li className="font-semibold">
              *Debes estar en la sitio del producto, no en la lista de productos buscados.
            </li>
            <li className="my-1">
              2.- Una vez en el sitio del producto, copia la URL y pégala en el fomulario
              de acá abajo.
            </li>
            <li className="my-1">
              3.- Haz click en el botón agregar y espera, ya que el sitio está aplicando
              web scraping para obtener los datos del producto y agregarlo a nuestra base
              de datos.
            </li>
            <li className="my-1">
              4.- Una vez agregado, aparecerá el juego en panel adjunto y listo, ya le
              encontramos haciendo seguimiento al precio del producto agregado.
            </li>

            <li className="font-semibold">
              *Recuerda que por ahora solo funciona con productos de la tienda
              www.weplay.cl
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default InfoAgregarProducto;
