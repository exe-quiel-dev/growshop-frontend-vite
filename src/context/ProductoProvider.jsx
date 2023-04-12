import { createContext, useState, useEffect } from "react";

const ProductoContext = createContext();

const ProductoProvider = ({ children }) => {
  const [carrito, setCarrito] = useState(JSON.parse(localStorage.getItem('carrito')) || [])

  useEffect(() => {
    sincronizarStorage()
  }, [carrito])

  const sincronizarStorage = () => {
    localStorage.setItem('carrito', JSON.stringify(carrito)); 
  }

  const agregarCarrito = (prod) => {

    const { nombre, precio, imageSource, id, marca } = prod;
    const productoSeleccionado = {
      nombre,
      precio,
      imageSource,
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
    const carritoActualizado = carrito.filter(producto => producto.id !== id )
    setCarrito(carritoActualizado);
    sincronizarStorage()
  } 
  

  return (
    <ProductoContext.Provider
      value={{
        eliminarProducto,
        carrito,
        setCarrito,
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