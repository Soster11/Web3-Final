import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from 'react-router-dom';
import Productos from './pages/Productos';
import Contacto from './pages/Contacto';
import Home from './pages/Home';
import CargarProducto from './pages/CargarProducto';
import EditarProducto from './pages/EditarProducto';
import { ProveedorProductos } from './context/ProveedorProductos';


function App() {
  const [count, setCount] = useState(0)
  
  return (
    <>
    <ProveedorProductos>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/productos" element={<Productos></Productos>} />
          <Route path="/editarProducto/:id" element={<EditarProducto></EditarProducto>} />
          <Route path= "/cargar" element={<CargarProducto></CargarProducto>} />
          <Route path="/contacto" element={<Contacto></Contacto>} />
        </Routes>
      </BrowserRouter>
    </ProveedorProductos>
    </>
  )
}

export default App

