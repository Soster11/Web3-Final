import React, { useContext, useState } from "react";
import Navbar from "../components/Navbar";
import { ProductosContext } from "../context/ProveedorProductos";
import Productos from "./Productos";
import '../styles/carga.css'

const CargarProducto = () => {
    const { agregarProducto, setProductos} = useContext(ProductosContext);
    const [nuevoProducto, setNuevoProducto] = useState({ precio: "", name: "", imagen: "" });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNuevoProducto((prevProducto) => ({
            ...prevProducto,
            [name]: value,
        }));
    };

    const handleSubmitProducto = () => {
        // Validar y enviar el nuevo producto al servidor
        if (nuevoProducto.name.trim() === '' || nuevoProducto.precio.trim() === '' || nuevoProducto.imagen.trim() === '') {
            alert('Por favor, completa todos los campos.');
            return;
        }

        fetch("https://6672ed106ca902ae11b2682c.mockapi.io/products", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(nuevoProducto),
        })
            .then((response) => response.json())
            .then((nuevoProductoCreado) => {
                // Agregar el producto creado al contexto
                agregarProducto(nuevoProductoCreado);
                // Limpiar los campos después de agregar el producto
                setNuevoProducto({ precio: "", name: "", imagen: "" });
                // Actualizar la lista de productos
                return fetch(url);
            })
            .then((response) => response.json())
            .then((data) => setProductos(data))
            .catch((error) => console.error(error.message));
    };

    return (
        
        <div>
            <Navbar></Navbar>
            <div className="conteiner-total">  
            <form>
                <h2>Agregar Producto</h2>
                <label>
                    Nombre de producto:
                    <input type="text" name="name" value={nuevoProducto.name} onChange={handleInputChange} />
                </label>
                <br />
                <label>
                    Precio:
                    <input type="text" name="precio" value={nuevoProducto.precio} onChange={handleInputChange} />
                </label>
                <br />
                <label>
                    Imagen del producto(url):
                    <input type="text" name="imagen" value={nuevoProducto.imagen} onChange={handleInputChange} />
                </label>
                <br />
                <button className="boton" type="button" onClick={handleSubmitProducto}>
                    Cargar Producto
                </button>
            </form>
            </div>
        </div>
    );
};

export default CargarProducto;