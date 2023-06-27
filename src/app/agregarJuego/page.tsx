import { FormularioAgregar } from "../components/FormularioAgregar";

const page = () => {
  return (
    <div className="animate-fade md:mx-32 mx-4">
      <h1 className="text-center my-10 text-3xl font-bold">Agregar Nuevo Juego</h1>

      <FormularioAgregar />
    </div>
  );
};

export default page;
