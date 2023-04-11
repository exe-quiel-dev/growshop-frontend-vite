import { Link } from 'react-router-dom';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import image1 from '../imgs/banner1.jpg'
import image3 from '../imgs/banner3.webp'

const Carrousel = () => {
  const divStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundSize: 'cover',
    height: '400px'
  }
  const slideImages = [
    {
      url: image1,
      title: 'Combos y Promociones',
      text: 'Articulos para el cuidado y parafernalia para el fumador.',
      btn1: 'Nuestros Combos',
      btn2: 'Contactanos'
    },
    {
      url: image3,
      title: 'Preguntanos por Cuotas Ahora 12',
      text: 'Articulos para el cuidado de tus plantas y Articulos para fumarlas.',
      btn1: 'Nuestros Productos',
      btn2: 'Contactanos'
    }
  ];
  return (
    <div className="slide-container z-0 hidden md:block">
      <Slide>
        {slideImages.map((slideImage, index) => (
          <div key={index} className='bg-black'>
            <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
              <div className='flex flex-col items-center justify-center w-full h-full backdrop-blur-md backdrop-opacity-60'>
                <h3 className='text-white text-7xl uppercase my-5'>{slideImage.title}</h3>
                <p className='text-white textShadow'>{slideImage.text}</p>
                {slideImage.btn1 && (
                  <div className='flex-row mt-10'>
                    <Link className='bg-emerald-800 p-5 mx-5 text-white uppercase text-xl rounded hover:border-2 transition-all hover:bg-emerald-950 hover:cursor-pointer' to={slideImage.btn1 === 'Nuestros Productos'? '/tienda' : '/tienda/combos%20y%20promociones'}>{slideImage.btn1}</Link>
                    <Link className='bg-transparent p-5 mx-5 text-white uppercase text-xl hover:bg-emerald-950 transition-colors rounded border-2 hover:cursor-pointer' to='/contacto'>{slideImage.btn2}</Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </Slide>
    </div>
  )
}

export default Carrousel