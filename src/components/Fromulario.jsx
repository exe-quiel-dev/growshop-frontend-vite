import { useState } from "react";
import Alerta from '../components/Alerta'


const Fromulario = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [alerta, setAlerta] = useState({});

  const handleSubmit = e => {
    e.preventDefault();
    if ([nombre, email, telefono, mensaje].includes('')) {
      setAlerta({
        msg: 'Todos los Campos son Obligatorios',
        error: true
      })
    }
    setTimeout(() => {
      setAlerta({})
    }, 2000);
  }

  const { msg } = alerta;


  return (
    <>
      <div className="container mx-auto text-white flex flex-col items-center w-1/2 my-5">
        <a href="" className="py-2 bg-emerald-600 my-2 w-1/2 hover:shadow-lg transition-shadow border border-gray-600 rounded-lg p-5 text-center"><p><span className="font-bold mb-2">Telefono:</span> +54 9 11-5555-6666</p></a>
        <a href="" className="py-2 bg-green-400 my-2 w-1/2 hover:shadow-lg transition-shadow border border-gray-600 rounded-lg p-5 text-center"><p><span className="font-bold mb-2">Whatsapp:</span> +54 9 11-5555-6666</p></a>
      </div>
      <div className='flex flex-col items-center justify-center w-full md:w-1/2 mx-auto'>
        <form
          className='w-full bg-slate-100 rounded-lg px-5 py-3 md:py-5 md:px-10 my-10 shadow-md'
          onSubmit={handleSubmit}
        >
          {msg && <Alerta
            alerta={alerta}
          />}
          <div>
            <div className='my-10'>
              <label
                htmlFor='nombre'
                className='uppercase block mb-2 font-bold'
              >Nombre:</label>
              <input
                id='nombre'
                type='text'
                placeholder='Tu Nombre'
                onChange={e => setNombre(e.target.value)}
                value={nombre}
                className='p-3 rounded-lg w-full border-2'
              />
            </div>
            <div className='my-10'>
              <label
                htmlFor='email'
                className='uppercase block mb-2 font-bold'
              >Email:</label>
              <input
                id='email'
                type='text'
                placeholder='Tu Email'
                onChange={e => setEmail(e.target.value)}
                value={email}
                className='p-3 rounded-lg w-full border-2'
              />
            </div>
            <div className='my-10'>
              <label
                htmlFor='telefono'
                className='uppercase block mb-2 font-bold'
              >Telefono:</label>
              <input
                id='telefono'
                type='tel'
                placeholder='Tu Telefono'
                onChange={e => setTelefono(e.target.value)}
                value={telefono}
                className='p-3 rounded-lg w-full border-2'
              />
            </div>
            <div className='my-10'>
              <label
                htmlFor='mensaje'
                className='uppercase block mb-2 font-bold'
              >Mensaje</label>
              <textarea
                id='mensaje'
                placeholder='Escribe tu Mensaje'
                onChange={e => setMensaje(e.target.value)}
                value={mensaje}
                maxLength={500}
                className='p-3 rounded-lg w-full border-2 h-40'
              ></textarea>
            </div>
          </div>
          <input
            type='submit'
            value='Enviar'
            className='bg-transparent p-5 mx-auto text-black uppercase text-2xl hover:bg-emerald-950 hover:text-white transition-colors rounded-lg border-2 w-full font-bold hover:shadow-md hover:cursor-pointer'
          />
        </form>
      </div>
    </>
  )
}

export default Fromulario