import { useLoaderData } from "react-router-dom";
import { TODOS_LOS_PRODUCTOS } from "../constants";
import ProductCard from "../components/ProductCard";
import CategoryMenu from "../components/CategoryMenu";

export async function loader({ params }) {
  return { params }
}

const Categoria = () => {
  const categoria = useLoaderData();
  const categoriaFiltrada = TODOS_LOS_PRODUCTOS.filter(producto => producto.categoria === categoria.params.categoria);

  return (
    <>
      <div>
        <CategoryMenu />
      </div>
      <main className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        {categoriaFiltrada.map(producto => (
          <ProductCard
            marca={producto.marca}
            nombre={producto.nombre}
            precio={producto.precio}
            imageSource={producto.imagen}
            key={producto.nombre}
            id={producto.id}
          />
        ))}
      </main>
    </>
  )
}

export default Categoria