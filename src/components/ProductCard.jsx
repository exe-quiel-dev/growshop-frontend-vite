import { useContext } from "react";
import { useNavigate } from "react-router-dom"
import { formatearMoneda } from "../helpers/formatearMoneda";
import ProductoContext from "../context/ProductoProvider";

const ProductCard = ({ marca, nombre, precio, imageSource, id }) => {
  const navigate = useNavigate();
  const { agregarCarrito } = useContext(ProductoContext);
  
  

  return (
    <div className="grid gap-4 bg-white p-5 text-center shadow hover:shadow-lg hover:cursor-pointer transition-shadow w-4/5 mx-auto justify-center items-center max-h-1/4">
      <div className="grid-cols-1">
        <img src={imageSource} alt={`imagen de ${nombre}`} className='max-w-full p-5 max-h-64' />
      </div>
      <div className="grid-cols-1">
        <span className="uppercase text-sm text-gray-400 font-bold">{marca}</span>
        <p className="text-sm">{nombre}</p>
        <span className='py-2 font-bold'>{formatearMoneda(Number(precio))}</span>
        <div className="flex flex-col mt-5">
          <button className='border-2 hover:bg-green-600 transition-colors w-full py-2 p-1' onClick={() => navigate(`/${id}/ver`)}>Ver Producto</button>
          <button className='border-2 hover:bg-green-600 transition-colors w-full py-2 p-1 mt-5' onClick={() => {agregarCarrito({marca,nombre,precio,imageSource,id})}}>Agregar al Carrito</button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard