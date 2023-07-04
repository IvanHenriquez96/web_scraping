import { FormularioAgregar } from "../components/FormularioAgregar";
import InfoAgregarProducto from "../components/InfoAgregarProducto";

const page = () => {
  return (
    <div className="animate-fade md:mx-32 mx-4">
      <h1 className="text-center my-10 text-3xl font-bold">Agregar Nuevo Producto</h1>

      <InfoAgregarProducto />

      <FormularioAgregar />
    </div>
  );
};

export default page;
