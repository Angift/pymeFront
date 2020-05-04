import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { Context } from '../store/appcontext'

const Scorecard = props => {
    const { store, actions } = useContext(Context);
    return (
        <>
            <div className="body">
                <div className="navbar justify-content-start sticky-top">
                    <span className="brand"><img src="img/user.jpg" alt="" /></span>
                    <div className="navbar-inner">
                        <div className="container">
                            <ul className="nav nav-collapse">
                                <li><form className="formcard" onSubmit={e => actions.upload(e, props.history)}>
                                    <input style={{ width: 500 }} type="file" className="form-control inputcard" id="scorecard" name="scorecard"
                                        onChange={actions.handleChangeFile} />
                                    <button type="submit" style={{ height: 35, width: 60 }} className="buttoncard btn btn-primary btn-block">Up</button>
                                </form></li>&nbsp;&nbsp;&nbsp;
                            <li><input style={{ width: 350 }} type="text" className="form-control" id="punto" name="punto" placeholder="Tú pto de equilibrio" />
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div id="score">
                <div className="form-group">
                    <div className="container justify-content-center">
                        <h1>Scorecard</h1>
                        {
                            !!store.currentUser && (
                                <img src={store.pathFile + store.currentUser.user.file} alt="" width="1000" height="400" />
                            )
                        }
                    </div>
                </div>
                <div className="container">
                    {/* <!-- Marketing Icons Section --> */}
                    <h4>Partners</h4>
                    <div className="row">
                        <div className="col-lg-4 mb-4">
                            <div className="card h-100">
                                <h5 className="card-header">Steward</h5>
                                <div className="card-body">
                                    <p className="card-text">Especialistas, inscribite en pymeDash y disfruta los convenios exclusivos para nuestros asociados</p>
                                </div>
                                <div className="card-footer">
                                    <Link to="/login" className="btn btn-primary">Ofertas</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 mb-4">
                            <div className="card h-100">
                                <h5 className="card-header">Todo Saldos</h5>
                                <div className="card-body">
                                    <p className="card-text">Especialistas, inscribite en pymeDash y disfruta los convenios exclusivos para nuestros asociados</p>
                                </div>
                                <div className="card-footer">
                                    <Link to="/login" className="btn btn-primary">Ofertas</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 mb-4">
                            <div className="card h-100">
                                <h5 className="card-header">Supermaq</h5>
                                <div className="card-body">
                                    <p className="card-text">Especialistas, inscribite en pymeDash y disfruta los convenios exclusivos para nuestros asociados</p>
                                </div>
                                <div className="card-footer">
                                    <Link to="/login" className="btn btn-primary">Ofertas</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- /.row --> */}
            </div>
        </>
    )
}

export default Scorecard;