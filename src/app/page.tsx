import { Juego } from "@/types/types";
import { CardJuego } from "./components/CardJuego";
import InfoWebScraping from "./components/InfoWebScraping";

async function getData() {
  const res = await fetch(`https://www.ihenriquez.lat/api/`, {
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
  return (
    <main className="bg-indigo-950 text-tema_letra animate-fade">
      <h1 className="text-center my-10 text-3xl font-bold">Listado de Productos</h1>
      <section className="text-gray-600 body-font">
        <div className="container px-5  mx-auto">
          <InfoWebScraping />

          <div className="grid md:grid-cols-3">
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
