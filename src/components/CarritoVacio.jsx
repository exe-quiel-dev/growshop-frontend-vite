import { Link } from "react-router-dom"

const CarritoVacio = () => {
  return (
    <div className="text-center p-10">
      <h2 className="text-2xl font-bold my-5">Tu carrito está vacío</h2>
      <p className="mb-5">¿No sabés qué comprar?</p>
      <Link to='/tienda' className="bg-trasnparent hover:bg-green-500 border-2 border-gray-600 p-2 rounded text-black hover:text-white transition-colors">Descubrir Productos</Link>
    </div>
  )
}

export default CarritoVacio