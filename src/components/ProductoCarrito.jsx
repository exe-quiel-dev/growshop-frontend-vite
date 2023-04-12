import { useContext } from "react";
import { formatearMoneda } from "../helpers/formatearMoneda";
import ProductoContext from "../context/ProductoProvider";


const ProductoCarrito = ({ imageSource, nombre, subtotal, marca, cantidad,id }) => {
  const {eliminarProducto} = useContext(ProductoContext)
  
  return (
    <div className="flex items-center justify-around px-10 h-[150px] border-b border-gray-200">
      <img src={imageSource} alt={`imagen de ${nombre}`} className="max-w-[100px] max-h-[100px] hidden md:block" />
      <div className="m-5 md:m-0">
      <p className="text-center text-gray-400">{marca}</p>
      <h2 className="text-xl font-black text-black text-center">{nombre}</h2>
      </div>
      <div className="flex flex-col">
      <p 
        className="font-bold">Cantidad: <span className="font-normal"
        >{cantidad}</span></p>
      <p className="text-2xl text-center">{formatearMoneda(Number(subtotal))}</p>
      <button className="p-1 bg-red-600 rounded text-white text-sm hover:bg-red-700 transition-colors" onClick={() => {eliminarProducto(id)}}>Eliminar</button>
      </div>
    </div>
  )
}

export default ProductoCarrito