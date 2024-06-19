import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import '../styles/editar.css'

const EditarProducto = () => {
const [producto, setproducto] = useState({});
const [name, setName] = useState('');
const [precio, setPrecio] = useState('');
const [imagen, setImagen] = useState('');
const { id } = useParams();
const navigate = useNavigate();
useEffect(() => {


fetchUserDetails();
},[id]);

const fetchUserDetails = async () => {
try {
const response = await fetch(`https://6672ed106ca902ae11b2682c.mockapi.io/products/${id}`);
const data = await response.json();
setproducto(data);
setName(data.name);
setPrecio(data.precio);
setImagen(data.imagen)
} catch (error) {
console.error('Error en la solicitud: ', error);
}
};

const handleUpdate = async () => {
try {
const response = await fetch(`https://6672ed106ca902ae11b2682c.mockapi.io/products/${id}`, {
method: 'PUT',
headers: {
'Content-Type': 'application/json',
},
body: JSON.stringify({ name, precio, imagen }),
});
if (response.ok) {
navigate(`productos/${id}`);
} else {
console.error('Error al actualizar usuario');
}
} catch (error) {
console.error('Error en la solicitud: ', error);
}
<link to='./Productos.jsx'></link>
};

return (
<div>
    <Navbar></Navbar>
    <div className="conteiner-total">
        <div className="conteiner2">
    <h2>Editar Producto</h2>
    <label>Nombre: </label>
<input type="text" value={name} onChange={(e) => setName(e.target.value)} />
<br />
<label>Precio: </label>
<input type="text" value={precio} onChange={(e) => setPrecio(e.target.value)} />
<br />

<label>Imagen(url): </label>
<input type="text" value={imagen} onChange={(e) => setImagen(e.target.value)} />
<br />
<button className='boton' onClick={handleUpdate}>Actualizar</button>
</div>
</div>
</div>
);
};

export default EditarProducto;