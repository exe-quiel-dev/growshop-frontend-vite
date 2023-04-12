import { useLoaderData } from "react-router-dom"
import { useContext } from "react";

import { TODOS_LOS_PRODUCTOS } from "../constants";
import { formatearMoneda } from "../helpers/formatearMoneda";

import CategoryMenu from "../components/CategoryMenu";
import Separator from "../components/Separator";
import ProductCard from "../components/ProductCard";

import { PRODUCTOS_SEMANA } from "../constants";

import ProductoContext from "../context/ProductoProvider";

export async function loader({ params }) {
  return { params }
}

function Producto() {
  const prod = useLoaderData();
  const {agregarCarrito} = useContext(ProductoContext);
  const prodSeleccionado = TODOS_LOS_PRODUCTOS.filter(producto => producto.id === Number(prod.params.productoId));

  const { imageSource, marca, nombre, precio, desc, id } = prodSeleccionado[0];

  return (
    <main>
      <CategoryMenu />
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 items-center justify-center bg-white my-10 shadow rounded-lg">
        <img src={imageSource} alt={`imagen de ${nombre}`} className="w-3/5 p-5 mx-auto" />
        <div className="flex flex-col p-8 justify-center items-center">
          <h2 className="text-4xl font-black text-black text-center pt-10">{nombre}</h2>
          <h3 className="uppercase text-lg text-gray-400 font-bold">{marca}</h3>
          <p className="text-center border-b p-5 text-lg">{desc}</p>
          <p className="text-4xl mt-5">{formatearMoneda(Number(precio))}</p>
          <button className='border-2 border-gray-600 hover:bg-green-600 transition-colors w-1/2 py-2 p-1 mt-10' onClick={() => {agregarCarrito({imageSource, marca, nombre, precio, id})}}>Agregar al Carrito</button>
        </div>
      </div>

      <Separator />
        <section>
          <h3 className="text-2xl uppercase text-center mb-24"><span className="font-bold text-green-700 block ">Productos</span> que puedan interesarte</h3>
          <div className="container mx-auto grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:grid-cols-1 gap-8">
            {PRODUCTOS_SEMANA.map(producto => (
              <ProductCard
                marca={producto.marca}
                nombre={producto.nombre}
                precio={producto.precio}
                imageSource={producto.imageSource}
                key={producto.id}
                id={producto.id}
                />
            ))}
          </div>
        </section>

    </main>
  )
}

export default Producto