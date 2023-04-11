// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faTruckFast, faLock } from '@fortawesome/free-solid-svg-icons'

import { PRODUCTOS_OFERTA, PRODUCTOS_SEMANA, ULTIMOS_PRODUCTOS } from "../constants";

import CardInfo from "./CardInfo"
import Separator from "./Separator"
import ProductCard from "./ProductCard";
import Info from './Info';
import Carrousel from './Carrousel';

const AppGrow = () => {
  return (
    <>
        <main>
          <Carrousel />
          <section className='container grid md:grid-cols-3 sm:grid-cols-1 mx-auto mt-20'>
            <CardInfo icon={faThumbsUp} titulo={'calidad garantizada'} info={'En cada uno de nuestros productos'} />
            <CardInfo icon={faLock} titulo={'seguridad'} info={'Para que realices tus compras con toda confianza.'} />
            <CardInfo icon={faTruckFast} titulo={'envíos a todo el país'} info={'¡Nos aseguramos de que te llegue!'} />
          </section>
          <Separator />
          <section>
            <h3 className="text-2xl uppercase text-center mb-24"><span className="font-bold text-green-700 block ">ofertas</span> del día</h3>
            <div className="container mx-auto grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:grid-cols-1 gap-8">
              {PRODUCTOS_OFERTA.map(producto => (
                <ProductCard
                  marca={producto.marca}
                  nombre={producto.nombre}
                  precio={producto.precio}
                  imageSource={producto.imagen}
                  key={producto.id}
                  id={producto.id}
                />
              ))}
            </div>
          </section>
          <Separator />
          <section>
            <h3 className="text-2xl uppercase text-center mb-24"><span className="font-bold text-green-700 block ">los mas vendidos</span> de la semana</h3>
            <div className="container mx-auto grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:grid-cols-1 gap-8">
              {PRODUCTOS_SEMANA.map(producto => (
                <ProductCard
                  marca={producto.marca}
                  nombre={producto.nombre}
                  precio={producto.precio}
                  imageSource={producto.imagen}
                  key={producto.id}
                  id={producto.id}
                />
              ))}
            </div>
          </section>
          <Info />
          <Separator />
          <section>
            <h3 className="text-2xl uppercase text-center mb-24"><span className="font-bold text-green-700 block ">nuestros</span> ultimos productos</h3>
            <div className="container mx-auto grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:grid-cols-1 gap-8">
              {ULTIMOS_PRODUCTOS.map(producto => (
                <ProductCard
                  marca={producto.marca}
                  nombre={producto.nombre}
                  precio={producto.precio}
                  imageSource={producto.imagen}
                  key={producto.id}
                  id={producto.id}
                />
              ))}
            </div>
          </section>
        </main>
    </>
  )
}

export default AppGrow
