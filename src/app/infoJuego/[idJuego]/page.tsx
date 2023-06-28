export default async function Page({ params }: any) {
  const data = await getData(params.idJuego);

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
        <div>
          <img className="mx-auto " src={data.url_image} alt={data.title} />
        </div>
        <div className="md:col-span-2 py-4 md:p-4">
          <h2 className="font-bold text-2xl text-center mb-5"> {data.title}</h2>
          <div className="border rounded-lg p-4">
            <p className="my-3">
              <span className="font-semibold">Tienda:</span> Weplay.cl
            </p>
            <p className="my-3">
              <span className="font-semibold">Último Precio:</span>
              <span className="line-through"> {ultimo_precio.actual_price}</span>
            </p>
            <p className="my-3">
              <span className="font-semibold">Precio Actual:</span> {data.actual_price}
            </p>

            <button className="bg-gray-50 text-gray-900 py-2 px-3 rounded w-full hover:bg-gray-300">
              Visitar Tienda
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

async function getData(idJuego: string) {
  const res = await fetch(`http://45.236.128.210:3031/api/${idJuego}`);

  console.log(res);

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
