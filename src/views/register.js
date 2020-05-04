import React, { useContext } from 'react';
import { Context } from '../store/appcontext';

const Register = props => {
    const { store, actions } = useContext(Context);
    return (
        <div className="body">
            <div className="container d-flex justify-content-center">
                <div className="row">
                    {
                        !!store.errors && (

                            <div className="alert alert-warning alert-dismissible fade show" role="alert">
                                <strong>Error!!</strong> {store.errors.msg}
                                <button onClick={actions.deleteErrors} type="button" className="close" data-dismiss="alert" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>

                        )
                    }
                    <form onSubmit={e => actions.register(e, props.history)}>
                        <h1>Registrarse</h1>
                        <div className="form-row">
                            <div className="form-group col-md-12">
                                <label htmlFor="inputEmail4">Email</label>
                                <input type="email" className="form-control" aria-describedby="emailHelp" id="inputEmail4" placeholder="Email" name="email"
                                    value={store.email}
                                    onChange={actions.handleChange} />
                            </div>
                            <div className="form-group col-md-12">
                                <label htmlFor="inputPassword4">Password</label>
                                <input type="password" className="form-control" id="inputPassword4" placeholder="Password" name="password"
                                    value={store.password}
                                    onChange={actions.handleChange} />
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputAddress">Dirección</label>
                            <input type="text" className="form-control" id="inputAddress" placeholder="Av de los sueños 777, Huechuraba" name="address"
                                value={store.direccion}
                                onChange={actions.handleChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputBss">Nombre fantasia empresa</label>
                            <input type="text" className="form-control" id="inputBss" placeholder="4Geeks" name="fantasyname"
                                value={store.fantasyname}
                                onChange={actions.handleChange} />
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor="inputRubro">Rubro</label>
                                <input type="text" className="form-control" id="inputRubro" name="rubro"
                                    value={store.rubro}
                                    onChange={actions.handleChange} />
                            </div>
                            <div className="form-group col-md-3">
                                <label htmlFor="qempleados">No Empleados</label>
                                <input id="qempleados" className="form-control" name="empleados"
                                    value={store.empleados}
                                    onChange={actions.handleChange} />
                            </div>
                            <div className="form-group col-md-3">
                                <label htmlFor="facturas">Ingresos anuales</label>
                                <input type="text" className="form-control" id="facturas" name="ingresos"
                                    value={store.ingresos}
                                    onChange={actions.handleChange} />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="gridCheck" />
                                <label className="form-check-label" htmlFor="gridCheck">
                                    Check me out
                                </label>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary">Registrarse</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register;