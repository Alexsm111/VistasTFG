import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
//componentes
import Navbar from './components/Navbar';
import Footer from './components/Footer';

//paginas
import Home from './pages/Home'
import Viajes from './pages/Viajes'
import Conductor from './pages/Conductor'
import Iniciosesion from './pages/Iniciosesion'
import Registro from './pages/Registro'
import Perfil from './pages/Perfil'
import Iniciado from './pages/Iniciado'

function EstructuraPrincipal() {
  return <>
    <Navbar />
    <Outlet />
    <Footer />
  </>
}

function ErrorPage() {
  return <>
    <Navbar />
    <div className='flex items-center justify-center h-screen text-7xl text-white mx-auto text-center'>¡Ups! Parece que algo <br /> ha salido mal.</div>
    <Footer />
  </>
}

const rutas = createBrowserRouter([
  {
    element: <EstructuraPrincipal />,
    errorElement: <ErrorPage />,
    children: [{
      path: '/',
      element: <Home />
    },
  ]
  },
  {
    element: <EstructuraPrincipal />,
    errorElement: <ErrorPage />,
    children: [{
      path: '/Viajes',
      element: <Viajes />
    },
  ]
  },
  {
    element: <EstructuraPrincipal />,
    errorElement: <ErrorPage />,
    children: [{
      path: '/Conductor',
      element: <Conductor />
    },
  ]
  },
  {
    element: <EstructuraPrincipal />,
    errorElement: <ErrorPage />,
    children: [{
      path: '/Iniciosesion',
      element: <Iniciosesion />
    },
  ]
  },
  {
    element: <EstructuraPrincipal />,
    errorElement: <ErrorPage />,
    children: [{
      path: '/Registro',
      element: <Registro />
    },
  ]
  },
  {
    element: <EstructuraPrincipal />,
    errorElement: <ErrorPage />,
    children: [{
      path: '/Perfil',
      element: <Perfil />
    },
  ]
  },
  {
    element: <EstructuraPrincipal />,
    errorElement: <ErrorPage />,
    children: [{
      path: '/Iniciado',
      element: <Iniciado />
    },
  ]
  },
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={rutas} />
  </React.StrictMode>,
)