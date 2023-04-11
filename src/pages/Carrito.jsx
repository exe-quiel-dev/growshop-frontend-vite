import { TODOS_LOS_PRODUCTOS } from "../constants"
import ProductoCarrito from "../components/ProductoCarrito";
import { formatearMoneda } from "../helpers/formatearMoneda";
import CarritoVacio from "../components/CarritoVacio";

export async function loader({ params }) {
  const productoSeleccionado = TODOS_LOS_PRODUCTOS.find(producto => producto.id === Number(params.productoId));
  return { productoSeleccionado }
}

const Carrito = () => {
  const carrito = JSON.parse(localStorage.getItem('carrito'));
  let total = 0;

  if(carrito?.length > 0) {
    carrito.map(producto => {
      const subtotal = producto.precio * producto.cantidad;
      total += subtotal
    })
  }

  return (
    <main>
      <div className="container mx-auto items-center bg-white my-10 shadow rounded-lg">
        {carrito?.length > 0 ? carrito.map(productoCarrito => (
          <ProductoCarrito
            imagen={productoCarrito.imagen}
            nombre={productoCarrito.nombre}
            subtotal={productoCarrito.precio * productoCarrito.cantidad}
            key={productoCarrito.nombre}
            marca={productoCarrito.marca}
            cantidad={productoCarrito.cantidad} />
        )) : (
          <CarritoVacio />
        )}
        {carrito?.length > 0 && (
          <div className="p-10 flex flex-col justify-center">
            <h2 className="text-center text-2xl font-bold uppercase">Total: <span className="font-normal text-black">{formatearMoneda(Number(total))}</span></h2>
            <button className="w-1/2 md:w-1/5 mx-auto my-10 text-xl bg-trasnparent hover:bg-green-500 border-2 border-gray-600 p-2 rounded text-black hover:text-white transition-colors uppercase">Pagar</button>
          </div>
        )}
      </div>
    </main>
  )
}

export default Carrito
