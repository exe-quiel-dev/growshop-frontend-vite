import { formatearMoneda } from "../helpers/formatearMoneda";


const ProductoCarrito = ({ imagen, nombre, subtotal, marca, cantidad }) => {
  return (
    <div className="flex items-center justify-around px-10 h-[150px] border-b border-gray-200">
      <img src={imagen} alt={`imagen de ${nombre}`} className="w-20 hidden md:block" />
      <div className="m-5 md:m-0">
      <p className="text-center text-gray-400">{marca}</p>
      <h2 className="text-xl font-black text-black text-center">{nombre}</h2>
      </div>
      <div className="items-center">
      <p className="font-bold">Cantidad: <span className="font-normal">{cantidad}</span></p>
      <p className="text-2xl text-center">{formatearMoneda(Number(subtotal))}</p>
      </div>
    </div>
  )
}

export default ProductoCarrito