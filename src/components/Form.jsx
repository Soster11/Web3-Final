import React from 'react';
import '../styles/form.css';


class SignUpForm extends React.Component {
render() {
    return (
        <form className="row">
        <h2 className='contact'>Contacto</h2>
        <div className="conteiner-base">
        <div className="col-md-6">
        <label htmlFor="inputEmail" className="form-label">Email</label>
        <input type="email" className="form-control" id="inputEmail" placeholder="example@example.com" />
        </div>
        <div className="col-12">
        <label htmlFor="inputAddress" className="form-label">Direccion</label>
        <input type="text" className="form-control" id="inputAddress" placeholder="Calle..." />
        </div>
        <div className="col-md-6">
        <label htmlFor="inputCity" className="form-label">Ciudad</label>
        <input type="text" className="form-control" id="inputCity" />
        </div>
        <div className="col-md-4">
        <label htmlFor="inputState" className="form-label">Provincia</label>
        <select id="inputState" className="form-select">
            <option defaultValue>Seleccione su provincia</option>
            <option>Buenos aires</option>
            <option>Entre Rios</option>
            <option>Santa fe</option>
            <option>Otros...</option>
        </select>
        </div>
        <div className="col-md-2">
        <label htmlFor="inputZip" className="form-label2">Escriba su consulta</label>
        <input type="text" className="form-control" id="inputZip" />
        </div>
        <div className="col-12">
        <div className="form-check">
            <input className="form-check-input" type="checkbox" id="gridCheck" />
            <label className="form-check-label" htmlFor="gridCheck">
            Estoy seguro que deseo realizar la consulta
            </label>
        </div>
        </div>
        <div className="col-12">
        <button type="submit" className="btn btn-primary">Enviar</button>
        </div>
        </div>
    </form>
    );
}
}

export default SignUpForm;