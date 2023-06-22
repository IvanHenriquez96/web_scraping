import { FormularioAgregar } from "../components/FormularioAgregar";

const page = () => {
  return (
    <div className="animate-fade">
      <h1 className="text-center my-5 text-3xl font-bold">Agregar Juego</h1>

      <FormularioAgregar />
    </div>
  );
};

export default page;
