import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'

import AppGrow from "./components/AppGrow"
import Layout from './components/Layout'

import Contacto from './pages/Contacto'
import Tienda from './pages/Tienda'
import Categoria, {loader as categoriasLoader} from './pages/Categoria'

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
        path: '/contacto',
        element: <Contacto />
      }
    ]
  },
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
