import { Link } from 'react-router-dom'
import logo from '../imgs/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone, faCartShopping } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  return (
    <header className='header-img top-0 z-20 border-b'>
      <div className='container flex items-center justify-around mx-auto p-5 flex-col lg:flex-row'>
        <a href='/'><h1><img src={logo} alt='imagen de logo' className='w-28 md:w-44 mx-2' /></h1></a>
        <input
          type='search'
          placeholder='Buscar'
          className='border-2 rounded-xl mx-5 w-1/2 lg:w-1/4 p-1 md:p-2 my-5 lg:my-0'
        />
        <div className='hidden md:block flex-col md:flex-row'>
          <div>
            <FontAwesomeIcon icon={faEnvelope} className='text-white' />
            <span className='mx-0 md:mx-5 text-white lg:border-r pr-5'>growshop@correo.com</span>

            <FontAwesomeIcon icon={faPhone} className='text-white' />
            <span className='mx-0 md:mx-5 text-white'>+54 9 11-5555-6666</span>
          </div>
        </div>
            
      </div>
      <div className='text-white text-center mb-3 md:mb-5 flex items-center justify-center'>
        <Link to='/' className="hover:underline underline-offset-2 mx-5">Inicio</Link>
        <Link to='/tienda' className="hover:underline underline-offset-2 mx-5">Tienda</Link>
        <Link to='/contacto' className="hover:underline underline-offset-2 mx-5">Contacto</Link>
        <Link
              to={'/carrito'}
            ><FontAwesomeIcon icon={faCartShopping} className='text-white w-6 h-6 mx-5' />
            </Link>
      </div>
    </header>
  )
}

export default Header