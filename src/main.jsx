import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'

import AppGrow from "./components/AppGrow"
import Layout from './components/Layout'

import Contacto from './pages/Contacto'
import Tienda from './pages/Tienda'
import Producto, { loader as productoLoader } from './pages/Producto'
import Categoria, { loader as categoriasLoader } from './pages/Categoria'
import Carrito from './pages/Carrito'

import { ProductoProvider } from './context/ProductoProvider'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <AppGrow />
      },
      {
        path: '/tienda',
        element: <Tienda />,
      },
      {
        path: '/tienda/:categoria',
        element: <Categoria />,
        loader: categoriasLoader
      },
      {
        path: '/:productoId/ver',
        element: <Producto />,
        loader: productoLoader
      },
      {
        path: '/contacto',
        element: <Contacto />
      },
      {
        path: '/carrito',
        element: <Carrito />
      }
    ]
  },

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProductoProvider>
      <RouterProvider router={router} />
    </ProductoProvider>
  </React.StrictMode>
)
