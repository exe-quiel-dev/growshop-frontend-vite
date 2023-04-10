import { Link } from 'react-router-dom'
import logo from '../imgs/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone, faCartShopping } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  return (
    <header className='header-img sticky top-0 z-20 border-b'>
      <div className='container flex items-center justify-center mx-auto p-5 flex-col lg:flex-row'>
        <a href='/'><h1><img src={logo} alt='imagen de logo' className='w-44 mx-2' /></h1></a>
        <input
          type='search'
          placeholder='Buscar'
          className='border-2 rounded-xl mx-5 w-1/2 lg:w-1/4 p-2 my-5 lg:my-0'
        />
        <div>
          <FontAwesomeIcon icon={faEnvelope} className='text-white' />
          <span className='mx-5 text-white lg:border-r pr-5'>growshop@correo.com</span>
        </div>
        <div>
          <FontAwesomeIcon icon={faPhone} className='text-white' />
          <span className='mx-5 text-white'>+54 9 11-5555-6666</span>
        </div>
        <Link
          to={'/carrito'}
        ><FontAwesomeIcon icon={faCartShopping} className='text-white w-8 h-8 p-5' />
        </Link>
      </div>
      <div className='text-white text-center mb-10'>
        <Link to='/' className="mx-2 hover:underline underline-offset- mx-5">Inicio</Link>
        <Link to='/tienda' className="mx-2 hover:underline underline-offset- mx-5">Tienda</Link>
        <Link to='/contacto' className="my- mx-2 hover:underline underline-offset- mx-5">Contacto</Link>
      </div>
    </header>
  )
}

export default Header