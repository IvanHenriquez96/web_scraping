import Link from "next/link";

export const Navbar = () => {
  return (
    <div className="text-gray-50 body-font bg-slate-900  border-b-2">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link href={"/"} className="mr-5 hover:text-gray-200">
          <h2>IHENRIQUEZ</h2>
        </Link>
        {/* <a className="flex title-font font-medium items-center text-gray-50 mb-4 md:mb-0">
          <h2>IHENRIQUEZ</h2>
        </a> */}
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
          <Link href={"/"} className="mr-5 hover:text-gray-200">
            Inicio
          </Link>
          <Link href={"/agregarJuego"} className="mr-5 hover:text-gray-200">
            Agregar nuevo Juego
          </Link>
          {/* <a className="mr-5 hover:text-gray-200">Second Link</a>
          <a className="mr-5 hover:text-gray-200">Third Link</a>
          <a className="mr-5 hover:text-gray-200">Fourth Link</a> */}
        </nav>
        <button className="inline-flex items-center  border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
          Button
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-4 h-4 ml-1"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};
