import { createContext, useState } from "react";

const ProductoContext = createContext();

const ProductoProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([])

  const sincronizarStorage = () => {
    localStorage.setItem('carrito', JSON.stringify(carrito)); 
  }


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
      setCarrito([...productos])
      sincronizarStorage()
    } else {
      setCarrito([...carrito, productoSeleccionado])
      sincronizarStorage()
    }
    
  }


  const eliminarProducto = (id) => {
    setCarrito(carrito.filter(producto => producto.id !== id ));
    sincronizarStorage()
  } 
  

  return (
    <ProductoContext.Provider
      value={{
        agregarCarrito,
        eliminarProducto,
        carrito,
        agregarCarrito,
        sincronizarStorage,
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