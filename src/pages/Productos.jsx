import React, { useContext, useEffect, useState } from "react";
import { useParams } from 'react-router-dom';

import Navbar from "../components/Navbar";
import { ProductosContext } from "../context/ProveedorProductos";
import { Link } from 'react-router-dom';
import EditarProducto from './EditarProducto';
import '../styles/productos.css'
import { PiTrashSimpleBold } from "react-icons/pi";
import { FiEdit3 } from "react-icons/fi";

const Productos = () => {
    
    const { id } = useParams();
    const {productos, eliminarProducto, setProductos} = useContext(ProductosContext);
    const [productosSeleccionados, setproductosSeleccionados] = useState([]);
    const [productoSeleccionado, setproductoSeleccionado] = useState(null);

    useEffect(() => {
        setproductosSeleccionados(productos.map(producto => producto.id));
    }, [productos]);

    const handleEliminarProducto = (id) => {
        fetch(`https://6672ed106ca902ae11b2682c.mockapi.io/products/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((response) => response.json())
            .then((data) => {
                eliminarProducto(id);
            })
            .catch((error) => console.error(error.message));
};

    const handleSeleccionarProducto = (id) => {
        setproductoSeleccionado(id);
    };

    return (
        <>
            <Navbar></Navbar>
            <h1 id="prod">Productos</h1>
            <div>

                {productos.length === 0 ? (
                    <p>Cargando...</p>) : (
                    <div className="contenedor">
                        {
                        productos.map(producto => ( 
                            <div className="card" key={producto.id} style={{ width: '18rem' }}>
                                <img src={producto.imagen} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{producto.name}</h5>
                                    <p className="card-text">${producto.precio}</p>
                                    <div className="btn-conteiner">
                                    <button  className="btn-primar" onClick={() => handleEliminarProducto(producto.id)}><PiTrashSimpleBold /></button>
                                    <button  className="btn-central" onClick={() => handleSeleccionarProducto(producto.id)}>Seleccionar</button>
                                    <button><Link to={`/EditarProducto/${producto.id}`} className="btn-primare"><FiEdit3 /></Link></button>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
                )}
            </div>
        </>
    );
}

export default Productos