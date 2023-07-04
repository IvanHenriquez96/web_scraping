"use client";
import { useState } from "react";

const InfoWebScraping = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="px-4 my-5 cursor-pointer" onClick={toggleOpen}>
      <div
        className={`mx-auto  bg-yellow-300 p-4 rounded-t-lg text-yellow-700 flex justify-between ${
          !isOpen && "rounded-b-lg"
        }`}
      >
        <p className="font-semibold">¿Sabes que es el Web Scraping?</p>
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
          <p>
            El web scraping es una técnica de extracción de datos utilizada para obtener
            información de sitios web de manera automatizada. Consiste en escribir un
            programa o utilizar herramientas para recopilar datos de páginas web, analizar
            su estructura y extraer la información relevante.
          </p>
        </div>
      )}
    </div>
  );
};

export default InfoWebScraping;
