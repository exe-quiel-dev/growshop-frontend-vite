

const ProductCard = ({ marca, nombre, precio, imageSource }) => {

  return (
    <div className="grid gap-4 bg-white p-5 text-center shadow hover:shadow-lg hover:cursor-pointer transition-shadow w-4/5 mx-auto justify-center items-center max-h-1/4">
      <div className="grid-cols-1">
        <img src={imageSource} alt={`imagen de ${nombre}`} className='max-w-full p-5 max-h-64' />
      </div>
      <div className="grid-cols-1">
        <span className="uppercase text-sm text-gray-400 font-bold">{marca}</span>
        <p className="text-sm">{nombre}</p>
        <span className='py-2 font-bold'>$ {precio}</span>
        <button className='border-2 hover:bg-green-600 transition-colors w-full py-2 p-1'>Agregar al Carrito</button>
      </div>
    </div>
  )
}

export default ProductCard