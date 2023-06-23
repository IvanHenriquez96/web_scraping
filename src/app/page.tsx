import { Juego } from "@/types/types";
import { CardJuego } from "./components/CardJuego";
import Link from "next/link";

async function getData() {
  const res = await fetch(`http://45.236.128.210:3031/api/`, {
    cache: "no-store", // I also tried "no-cache",
  });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {
  const { data } = await getData();
  console.log(data);
  return (
    <main className="bg-tema_bg text-tema_letra animate-fade">
      <h1 className="text-center py-5 text-3xl font-bold">
        Web Scraping - Listado de Juegos
      </h1>

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {data.map((juego: any) => {
              return (
                <CardJuego
                  key={juego._id}
                  id={juego._id}
                  title={juego.title}
                  url_image={juego.url_image}
                  actual_price={juego.actual_price}
                />
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
