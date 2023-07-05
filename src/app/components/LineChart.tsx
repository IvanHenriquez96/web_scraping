"use client";
import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement);

interface ChartPreciosInteface {
  precios: string[];
  fechas: string[];
}

const LineChart: React.FC<ChartPreciosInteface> = ({ fechas, precios }) => {
  const options = {
    responsive: true,
    scales: {
      y: {
        ticks: { color: "white", beginAtZero: true },
      },
      x: {
        ticks: { color: "white", beginAtZero: true },
      },
    },
    color: "white",
  };

  const precios_chart = precios.map((precio) => {
    // Utilizamos la función replace() con una expresión regular para eliminar los signos "$", "," y "."
    return parseInt(precio.replace(/\$|,|\./g, ""));
  });

  const fechas_chart = fechas.map((fecha) => {
    const partes = fecha.split(" ");
    // Obtenemos solo la fecha utilizando el método substr()
    const soloFecha = partes[0];
    return soloFecha;
  });

  const labels = fechas_chart;

  const data = {
    labels,
    datasets: [
      {
        label: "Precio Juego",
        data: precios_chart,
        borderColor: "rgb(250 204 21)",
        backgroundColor: "rgb(250 204 21)",
      },
    ],
  };

  return (
    <div>
      <Line options={options} data={data} />
    </div>
  );
};

export default LineChart;
