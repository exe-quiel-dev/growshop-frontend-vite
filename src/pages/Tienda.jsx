import ProductCard from '../components/ProductCard';
import CategoryMenu from '../components/CategoryMenu';

import { TODOS_LOS_PRODUCTOS } from "../constants";

const Tienda = () => {
  
  

  return (
    <>
      <div>
        <CategoryMenu />
      </div>

      <main className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 justify-center gap-8'>
        {TODOS_LOS_PRODUCTOS.map(producto => (
          <ProductCard
            marca={producto.marca}
            nombre={producto.nombre}
            precio={producto.precio}
            imageSource={producto.imageSource}
            key={producto.id}
            id={producto.id}
          />
        ))}
      </main>
    </>
  )
}

export default Tienda