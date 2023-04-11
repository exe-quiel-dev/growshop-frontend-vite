import { createContext } from "react";

const ProductoContext = createContext();

const ProductoProvider = ({ children }) => {
  // const [carrito, setCarrito] = useState([]);
  let carrito = [];

  const agregarCarrito = (prod) => {
    const { nombre, precio, imageSource, id, marca } = prod;
    const productoSeleccionado = {
      nombre,
      precio,
      imagen: imageSource,
      id,
      marca,
      cantidad: 1
    }
    
    // COMPROBAR SI EL PRODUCTO EXISTE
    const existe = carrito.some(producto => producto.id === productoSeleccionado.id)
    if (existe) {
      const productos = carrito.map(producto => {
        if (productoSeleccionado.id === producto.id) {
          producto.cantidad++;
          return producto
        } else {
          return producto
        }
      })
      carrito = [...productos]
      localStorage.setItem('carrito', JSON.stringify(carrito))
    } else {
      carrito = [...carrito, productoSeleccionado]
      localStorage.setItem('carrito', JSON.stringify(carrito))
    }
  
  }

  return (
    <ProductoContext.Provider
      value={{
        agregarCarrito,
        carrito,
      }}
    >
      {children}
    </ProductoContext.Provider>
  )
}

export {
  ProductoProvider
}

export default ProductoContext