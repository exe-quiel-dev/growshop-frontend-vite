import { Link } from "react-router-dom"
import cCards from '../imgs/tarjetas-aceptadas.png'

const Footer = () => {
  const date = new Date().getFullYear();

  return (
    <>
      <div className="flex justify-around bg-green-800 text-white items-center py-5 my-10">
        <div>
          <h3 className="font-bold text-lg underline underline-offset-4 mb-3 text-center">Menu</h3>
          <Link to='/' className="mx-2 hover:underline underline-offset-4">Inicio</Link>
          <Link to='/tienda' className="mx-2 hover:underline underline-offset-4">Tienda</Link>
          <Link to='/contacto' className="my- mx-2 hover:underline underline-offset-4">Contacto</Link>
        </div>
        <div>
          <h3 className="font-bold text-lg underline underline-offset-4 mb-3">Datos de contacto</h3>
          <p><span className="font-bold mb-2">Whatsapp:</span> +54 9 11-5555-6666</p>
          <p><span className="font-bold">Email:</span> growshop@correo.com</p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center py-5"> 
        <img src={cCards} alt='imagen tarjetas aceptadas' />
        <p className="mt-2 text-gray-400">Mariano Rolet | Exe-Dev {date} ©</p>
      </div>
    </>
  )
}

export default Footer