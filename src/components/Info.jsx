
const Info = () => {
  return (
    <div className="bg-green-800 md:grid grid-cols-2 text-center p-10 my-10">
      <div className="text-white my-auto">
        <h3 className="text-2xl mb-3 text-center hidden md:block">PARA MÁS INFORMACIÓN</h3>
        <p>No dude en contactarnos por cualquier consulta o duda que tenga.</p>
      </div>
      <div className="text-white flex flex-col items-center">
        <button className="py-2 bg-emerald-600 my-2 w-1/2 hover:shadow-lg transition-shadow border border-gray-600"><p><span className="font-bold mb-2">Telefono:</span> +54 9 11-5555-6666</p></button>
        <button className="py-2 bg-green-400 my-2 w-1/2 hover:shadow-lg transition-shadow border border-gray-600"><p><span className="font-bold mb-2">Whatsapp:</span> +54 9 11-5555-6666</p></button>
        <button className="py-2 bg-gray-300 my-2 w-1/2 hover:shadow-lg transition-shadow border border-gray-600"><p className="text-gray-600"><span className="font-bold">Email:</span> growshop@correo.com</p></button> 
      </div>
    </div>
  )
}

export default Info