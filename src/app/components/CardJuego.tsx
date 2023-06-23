import Link from "next/link";

interface CardPropsInterface {
  id: string;
  title: string;
  url_image: string;
  actual_price: string;
}

export const CardJuego: React.FC<CardPropsInterface> = ({
  id,
  title,
  url_image,
  actual_price,
}) => {
  return (
    <>
      <div className="p-2 md:w-1/3 text-white hover:scale-105 ease-in duration-100">
        <Link href={`infoJuego/${id}`}>
          <div className="grid  grid-cols-2 m-2 border rounded-lg">
            <img className="rounded-lg" src={url_image} alt={title} />
            <div className="p-4">
              <h2 className="font-bold">{title}</h2>

              <p className="my-5 font-semibold">
                Tienda: <span className="font-normal">Weplay.cl</span>
              </p>
              <p className="my-5 font-semibold">
                Precio Actual: <span className="font-normal">{actual_price}</span>
              </p>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};
