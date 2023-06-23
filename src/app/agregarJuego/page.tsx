import { FormularioAgregar } from "../components/FormularioAgregar";

const page = () => {
  return (
    <div className="animate-fade md:mx-32 mx-4">
      <h1 className="text-center my-5 text-3xl font-bold">Agregar Nuevo Juego</h1>

      <div className="grid md:grid-cols-2">
        <div className="border">
          <FormularioAgregar />
        </div>

        <div className="text-center">card</div>
      </div>
    </div>
  );
};

export default page;
