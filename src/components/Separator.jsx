import imgSeparador from '../imgs/separador.png';

const Separator = () => {
  return (
    <div className="container flex items-center justify-center mx-auto my-20">
      <div className="w-1/6 h-1 border-b-2 border-black"></div>
        <img src={imgSeparador} alt='imagen separador' className='w-12 mx-5'/> 
      <div className="w-1/6 h-1 border-b-2 border-black"></div>
    </div>
  )
}

export default Separator