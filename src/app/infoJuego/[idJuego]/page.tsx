export default async function Page({ params }: any) {
  const data = await getData(params.idJuego);

  console.log(data);

  let ultimo_precio = { actual_price: 0 };
  if (data.prices[data.prices.length - 2]) {
    ultimo_precio = data.prices[data.prices.length - 2];
  } else {
    ultimo_precio = data.prices[data.prices.length - 1];
  }

  // console.log(ultimo_precio);

  return (
    <div className="md:mx-32 mx-6 animate-fade">
      <br /> <br />
      <div className="grid md:grid-cols-3">
        <div className="">
          <img
            className="mx-auto rounded-lg mb-10 md:mb-0"
            src={data.url_image}
            alt={data.title}
          />
        </div>
        <div className="md:col-span-2 md:px-4">
          <div className=" rounded-lg p-8 bg-indigo-900">
            <h2 className="font-bold text-2xl text-center mb-5"> {data.title}</h2>

            <p className="my-3">
              <span className="font-semibold">Precio Actual:</span> {data.actual_price}
            </p>

            <p className="my-3">
              <span className="font-semibold">Último Precio:</span>
              <span className="line-through"> {ultimo_precio.actual_price}</span>
            </p>

            <p className="my-3">
              <span className="font-semibold">Tienda:</span> {data.tienda}
            </p>

            <a href={data.url_game} target="_blank" rel="noopener noreferrer">
              <button className="bg-yellow-500 text-gray-50 py-2 px-3 rounded w-full hover:bg-yellow-600 font-semibold">
                Visitar Tienda
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

async function getData(idJuego: string) {
  const res = await fetch(`https://ihenriquez.lat/api/${idJuego}`);

  console.log(res);

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
